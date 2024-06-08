import React from "react";

type ShimmerBtnProps = {
  value?: string;
  icon?: React.ReactNode;
  position?: string;
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
      className="inline-flex gap-2 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50"
    >
      {position && position === "left" && icon}
      {value}
      {position && position === "right" && icon}
    </button>
  );
};

export default ShimmerBtn;
