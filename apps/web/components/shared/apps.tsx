import Arc from "@components/applications/arc/arc";
import Iterm from "@components/applications/iterm/iterm";
import TagIron from "@components/applications/tagiron/tagiron";
// import MarkdownPage from "@components/applications/markdown-page/markdown-page";

export const apps = [
  {
    name: "Finder",
    icon: "finder.png",
  },
  {
    name: "Launchpad",
    icon: "launchpad.png",
    // component: <MarkdownPage path="/markdown/InProgress.md" />,
  },
  {
    name: "Arc",
    icon: "arc.png",
    component: <Arc />,
  },
  {
    name: "Discord",
    icon: "discord.png",
    // component: <MarkdownPage path="/markdown/InProgress.md" />,
  },
  {
    name: "Code",
    icon: "vscode.png",
    // component: <MarkdownPage path="/markdown/InProgress.md" />,
  },
  {
    name: "iTerm",
    icon: "iterm.png",
    component: <Iterm />,
  },
  {
    name: "Notion",
    icon: "notion.png",
    // component: <MarkdownPage path="/markdown/InProgress.md" />,
  },
  {
    name: "Tagiron",
    icon: "tagiron.png",
    component: <TagIron />,
  },
];
