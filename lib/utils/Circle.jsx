"use client";

import { forwardRef } from "react";
import { cn } from "./cn";

const Circle = forwardRef(({ className, children, hide }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex md:h-[5em] md:w-[5em] w-[60px]  h-[60px]  items-center bg-[#010409]  justify-center rounded-[10px]  shadow-md4 object-contain overflow-hidden p-4",
        hide && "opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
});

export default Circle;
