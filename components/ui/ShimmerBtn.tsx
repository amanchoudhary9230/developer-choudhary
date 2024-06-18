import React from "react";

type ShimmerBtnProps = {
  value?: string;
  icon?: React.ReactNode;
  position?: string | null;
  handleClick?: () => void;
};

const ShimmerBtn = ({
  value,
  icon,
  position,
  handleClick,
}: ShimmerBtnProps) => {
  return (
    <button
      onClick={handleClick}
      className="inline-flex gap-2 h-12 animate-shimmer items-center justify-center rounded-md border dark:border-slate-800 border-slate-950 dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[linear-gradient(110deg,#ffffff,45%,#adb5bd,55%,#ffffff)] bg-[length:200%_100%] px-10 font-medium dark:text-slate-400 text-black transition-colors focus:outline-none focus:ring-2 dark:focus:ring-slate-400 focus:ring-black focus:ring-offset-1 dark:focus:ring-offset-slate-50 focus:ring-offset-black"
    >
      {position && position === "left" && icon}
      {value}
      {position && position === "right" && icon}
    </button>
  );
};

export default ShimmerBtn;
