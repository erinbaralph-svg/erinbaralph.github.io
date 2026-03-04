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
      <div className="max-w-[22ch] top-0 left-0 bg-[#FFFFE1] border-2 border-black rounded-xl p-2 px-4 text-sm sm:text-base">
        {children}
      </div>
      <div className="top-10 left-0">
        <img src="/img/rover.png" className="w-14 sm:w-20 pixelated" />
      </div>
    </div>
  );
}
