"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import useWindowsStore from "@stores/windows.store";

const ICON_SIZE = 48;

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<{
    x: number | null;
    y: number | null;
  }>({
    x: null,
    y: null,
  });
  useEffect(() => {
    const updateMousePosition = (event: MouseEvent): void => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return mousePosition;
};

export default function Dock(): JSX.Element {
  const { windows } = useWindowsStore();
  const { x, y } = useMousePosition();
  const dock = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (x === null || y === null) return;
    if (dock.current === null) return;
    // check if mouse is near the bottom of the screen
    if (y > window.innerHeight - 100) {
      dock.current.style.bottom = "0";
    } else {
      dock.current.style.bottom = "-8rem";
    }
  }, [x, y]);

  return (
    <div
      className="relative bottom-[-8rem] z-[10000] m-8 grid place-items-center transition-all duration-500 ease-in-out"
      ref={dock}
    >
      <div className="absolute flex flex-row rounded-2xl border-[0.25px] border-[#00000047] bg-apple-blur p-[4px] pb-[2px] backdrop-blur-apple-blur">
        {windows
          .filter((app) => app.docked || app.mode !== "closed")
          .map((app) => {
            const onOpen = (): void => {
              if (!app.component && !["Finder", "Iterm"].includes(app.name)) {
                return;
              }

              // TODO: fix this logic?
              if (app.mode === "fullscreen") {
                if (app.active) {
                  app.window();
                } else {
                  app.setActiveWindow();
                }
              } else if (app.mode !== "windowed") {
                app.window();
              } else if (app.active) {
                app.fullscreen();
              } else {
                app.setActiveWindow();
              }
            };

            return (
              <div className="grid place-items-center" key={app.name}>
                <button onClick={onOpen} type="button">
                  {typeof app.icon === "string" ? (
                    <Image
                      alt={app.name}
                      height={ICON_SIZE}
                      src={`/icons/${app.icon}`}
                      width={ICON_SIZE}
                    />
                  ) : (
                    <app.icon />
                  )}
                </button>
                {app.mode !== "closed" ? (
                  <span className="aspect-square h-[2px] rounded-full bg-[#ffffffac] md:h-1" />
                ) : (
                  <span className="h-[2px] md:h-1" />
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
