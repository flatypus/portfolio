"use client";

import { FaFileDownload } from "react-icons/fa";

export default function DownloadButton(): JSX.Element {
  return (
    <button
      className="absolute bottom-6 right-6 z-[10000] grid h-12 w-12 place-items-center rounded-full bg-[#8766ff] transition-all hover:scale-105"
      onClick={() => {
        const filePath = "/resume.pdf";
        void fetch(filePath)
          .then((response) => response.blob())
          .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "hinson-chan-resume.pdf";
            a.click();
          });
      }}
      type="button"
    >
      <FaFileDownload color="white" size={24} />
    </button>
  );
}
