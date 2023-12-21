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
  const { setIsTouchDevice } = useSettingsStore();

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window);
  }, [setIsTouchDevice]);

  useEffect(() => {
    let file = fileStructure.traverse(["hinson", "Welcome", "Welcome!"]);
    if (path && path.length > 0) {
      const possibleFile = fileStructure.traverse(path);
      if (possibleFile && possibleFile instanceof File) {
        file = possibleFile;
      } else {
        return;
      }
    }

    const getWindowSize = (): {
      width: number;
      height: number;
    } => ({
      width: window.innerWidth,
      height: window.innerHeight - 64,
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
        if (app.mode !== "minimized" && app.mode !== "closed") {
          return <Window app={app} key={app.name} />;
        }
        return null;
      })}
      <Drag />
    </div>
  );
}
