import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { WindowContext } from "@stores/window.context";
import type { Tab } from "@lib/types";
import Playing from "@components/widgets/ytmusic";
import Welcome from "../welcome/welcome";
import GrainyGradient from "./grainy-gradient";
import Input from "./input";
import Pinned from "./pinned";
import { MinimizedSidebar, Sidebar } from "./sidebar";
import Slider from "./slider";
import SideTabs from "./sidetabs";
import Resume from "../../../app/resume/page";

const innerElems = (
  selectedTab: number,
  setSelectedTab: (index: number) => void,
  tabs: Tab[],
  setTabs: ((tabs: Tab[]) => void) &
    ((tabs: ((tabs: Tab[]) => Tab[]) | Tab[]) => void),
  shortenedName: string,
): JSX.Element => (
  <>
    <Input currentURL={tabs[selectedTab]?.url} shortenedName={shortenedName} />
    <Pinned setSelectedTab={setSelectedTab} setTabs={setTabs} tabs={tabs} />
    <h3 className="text-left font-semibold text-black text-opacity-50">
      DIRECTORY
    </h3>
    <SideTabs
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
      setTabs={setTabs}
      tabs={tabs}
    />
    <Playing />
  </>
);

export default function Arc(): JSX.Element {
  const BREAKPOINT = 1200;
  const [hover, setHover] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [dims, setDims] = useState({ width: 0, height: 0, x: 0, y: 0 });
  const small = useMemo(() => dims.width < BREAKPOINT, [dims.width]);
  const [minimized, setMinimized] = useState(small);

  const { subscribe } = useContext(WindowContext);
  const windowRef = useRef<HTMLDivElement>(null);

  const [selectedTab, setSelectedTab] = useState(0);
  const [tabs, setTabs] = useState<Tab[]>([
    {
      name: "Hinson's Personal Site",
      element: Welcome,
      url: "https://flatypus.me",
      icon: "/images/flatypus.png",
      key: new Date().getTime().toString(),
    },
    {
      name: "Resume",
      element: Resume,
      url: "https://flatypus.me/resume",
      icon: "/images/flatypus.png",
      key: `${new Date().getTime().toString()}1`,
    },
  ]);

  const shortenedName = tabs[selectedTab]
    ? tabs[selectedTab].url.split("://")[1].split("/")[0]
    : "";

  useEffect(() => {
    setTimeout(() => {
      const newDimensions = subscribe({
        callback: (dimensions) => {
          setDims(dimensions);
        },
      });
      setDims(newDimensions);
    }, 300);
  }, [subscribe]);

  useEffect(() => {
    if (small === minimized) return;
    setTimeout(() => {
      setMinimized(small);
    }, 300);
  }, [small, minimized]);

  return (
    <GrainyGradient>
      <div
        className="relative flex h-full w-full flex-1 flex-row overflow-hidden"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
          setMouse({ x: e.clientX, y: e.clientY });
        }}
        ref={windowRef}
      >
        {/* {JSON.stringify({ hover, x: mouse.x, d: dims.x })} */}
        {/* for minimized/phone view */}
        {small ? (
          <MinimizedSidebar show={Boolean(hover && mouse.x - dims.x < 8)}>
            {innerElems(
              selectedTab,
              setSelectedTab,
              tabs,
              setTabs,
              shortenedName,
            )}
          </MinimizedSidebar>
        ) : null}
        <Slider
          componentA={
            <Sidebar small={small}>
              {/* for maximized/desktop view */}
              {innerElems(
                selectedTab,
                setSelectedTab,
                tabs,
                setTabs,
                shortenedName,
              )}
            </Sidebar>
          }
          componentB={
            <div className="relative flex h-full w-full flex-col gap-1">
              <div className="h-full w-full overflow-hidden rounded-lg shadow-lg shadow-gray-600">
                {tabs.length > 0 ? (
                  <div className="relative h-full w-full">
                    {tabs.map((tab, index) => (
                      <div
                        className={`h-full w-full ${
                          index === selectedTab
                            ? "z-10 opacity-100"
                            : "z-0 opacity-0"
                        } absolute left-0 top-0 overflow-hidden`}
                        key={tab.key}
                      >
                        {tab.element ? (
                          <tab.element />
                        ) : (
                          <iframe
                            className="h-full w-full"
                            src={tab.url}
                            title={tab.name}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          }
          one={minimized}
        />
      </div>
    </GrainyGradient>
  );
}
