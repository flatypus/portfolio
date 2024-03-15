"use client";

import React, { useEffect, useState } from "react";

const HOUR = 60 * 60 * 1000;
const WALLPAPERS = {
  night: "/wallpapers/night.webp",
  sunrise: "/wallpapers/sunrise.webp",
  day: "/wallpapers/day.webp",
  sunset: "/wallpapers/sunrise.webp",
};

const wallpaperByHour = (): string => {
  const hour = new Date().getHours();
  if (hour >= 9 && hour < 18) return WALLPAPERS.day;
  if (hour < 6 || hour >= 21) return WALLPAPERS.night;
  return WALLPAPERS.sunrise;
};

interface BackgroundProps {
  children: React.ReactNode;
}

export default function Background({ children }: BackgroundProps): JSX.Element {
  const [wallpaper, setWallpaper] = useState(wallpaperByHour());

  useEffect(() => {
    const interval = setInterval(() => {
      setWallpaper(wallpaperByHour());
    }, HOUR);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect;

  return (
    <div
      className="fixed left-0 top-0 z-[-1] h-full w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${wallpaper})`,
      }}
    >
      {children}
    </div>
  );
}
