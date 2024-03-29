"use client";

import { useEffect } from "react";
import useWindowsStore from "@stores/windows.store";
import useSettingsStore from "@stores/settings.store";
import { File, fileStructure } from "@components/shared/file-structure";
import Window from "./window/window";
import Drag from "./drag";

export default function Content({
  path,
}: {
  path: string[] | undefined;
}): JSX.Element {
  const { windows, setGetWindowSize, addWindow } = useWindowsStore();
  const { setIsTouchDevice, isTouchDevice } = useSettingsStore();

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window);
  }, [setIsTouchDevice]);

  useEffect(() => {
    let file;

    if (path && path.length > 0) {
      const checkPaths = (_path: string[]): boolean => {
        const possibleFile = fileStructure.traverse(_path);
        return Boolean(possibleFile && possibleFile instanceof File);
      };

      for (const checkPath of [path, ["hinson", "Applications", ...path]]) {
        if (checkPaths(checkPath)) {
          file = fileStructure.traverse(checkPath);
          break;
        }
      }

      if (!file) return;
    } else {
      file = fileStructure.traverse(["hinson", "Applications", "Arc"]);
    }

    const getWindowSize = (): {
      width: number;
      height: number;
    } => ({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    setGetWindowSize(getWindowSize);

    windows.forEach((app) => {
      app.injectGetSize(getWindowSize);
      app.hide(false);
    });

    if (!file || !(file instanceof File) || !file.content) return;

    addWindow({
      name: file.name,
      icon: file.icon,
      component: file.content,
    });
  }, [addWindow, path, setGetWindowSize, windows]);

  return (
    <div className="flex-1">
      {windows.map((app) => {
        if (isTouchDevice && !app.active) {
          return null;
        }
        if (app.mode !== "minimized" && app.mode !== "closed") {
          return <Window app={app} key={app.name} />;
        }
        return null;
      })}
      <Drag />
    </div>
  );
}
