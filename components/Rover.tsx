"use client";

import { clsx } from "clsx";
import { useEffect, useState } from "react";

export function isRoverTipHidden(name: string): boolean {
  return localStorage.getItem(`rover-${name}`) === "hidden";
}

export function hideRoverTip(name: string) {
  localStorage.setItem(`rover-${name}`, "hidden");
}

export function Rover({
  tipName,
  children,
}: {
  tipName: string;
  children: React.ReactNode;
}) {
  const [isRoverVisible, setIsRoverVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsRoverVisible(!isRoverTipHidden(tipName)), 700);
  }, []);

  return (
    <div
      className={clsx(
        "pointer-events-none fixed bottom-10 left-10 drop-shadow-[3px_4px_0_rgba(0,0,0,0.4)] transition-opacity duration-400",
        isRoverVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="pixel-corners-border bg-black max-w-[22ch] p-[2px] overflow-hidden top-0 left-0 text-sm sm:text-base">
        <div className="pixel-corners-inner bg-[#FFFFE1] w-full p-2 px-3">
          {children}
        </div>
      </div>
      <div className="top-10 left-0">
        <img src="/img/rover.png" className="w-14 sm:w-20 pixelated" />
      </div>
    </div>
  );
}
