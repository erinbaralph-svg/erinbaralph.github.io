import clsx from "clsx";
import { ReactNode } from "react";

export function Whiteboard({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        className,
        "border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white bg-white"
      )}
    >
      <div
        className="w-full h-full border-2 border-t-black border-l-black border-b-[#C1C1C1] border-r-[#C1C1C1]"
      >
        {children}
      </div>
    </div>
  );
}
