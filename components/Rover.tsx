"use client";

import { clsx } from "clsx";
import { useEffect, useState } from "react";

import { RoverState } from "@/types/rover";

export function getRoverState(): RoverState | null {
  const storedState = localStorage.getItem("rover");

  if (storedState === null) return null;

  const numericValue = Number(storedState);

  if (Number.isNaN(numericValue)) return null;

  // Validate it's a valid enum member
  if (numericValue in RoverState) {
    return numericValue as RoverState;
  }

  return null;
}

export function setRoverState(state: RoverState) {
  localStorage.setItem("rover", String(state));
}

export function initializeRoverStateIfMissing() {
  if (getRoverState()) return;

  setRoverState(RoverState.ARTICLES);
}

export function advanceRoverState(currentState: RoverState) {
  const storedState = getRoverState();

  if (storedState === null || storedState !== currentState) {
    console.warn(`skipping advance: ${storedState}, ${currentState}`);
    return;
  }

  const nextState = currentState + 1;

  if (nextState in RoverState) {
    setRoverState(nextState as RoverState);
  }
}

const roverData: Record<RoverState, { message: string; styles: string }> = {
  [RoverState.ARTICLES]: {
    message: "Click on each item to read more!",
    styles: "fixed bottom-10 left-10",
  },
  [RoverState.PHOTOS]: {
    message: "Click on each photo for a description!",
    styles: "fixed bottom-10 left-10",
  },
  [RoverState.DONE]: {
    message: "",
    styles: "",
  },
};

export function Rover({
  visibleState, // At what state should Rover be visible?
}: {
  visibleState: RoverState;
}) {
  const [isRoverVisible, setIsRoverVisible] = useState(false);

  useEffect(() => {
    // We can only safely access localStorage on the client, after hydration
    initializeRoverStateIfMissing();

    setTimeout(() => setIsRoverVisible(getRoverState() === visibleState), 700);
  }, []);

  const message = roverData[visibleState].message;
  const styles = roverData[visibleState].styles;

  return (
    <div
      className={clsx(
        "pointer-events-none drop-shadow-[3px_4px_0_rgba(0,0,0,0.4)] transition-opacity duration-400",
        isRoverVisible ? "opacity-100" : "opacity-0",
        styles
      )}
    >
      <div className="max-w-[22ch] top-0 left-0 bg-[#FFFFE1] border-2 border-black rounded-xl p-2 px-4 text-sm sm:text-base">
        {message}
      </div>
      <div className="top-10 left-0">
        <img src="/img/rover.png" className="w-14 sm:w-20 pixelated" />
      </div>
    </div>
  );
}
