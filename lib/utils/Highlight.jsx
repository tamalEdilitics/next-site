import { cn } from "./cn";

export const Highlight = ({ children, className }) => {
  return (
    <span className={cn("font-bold    text-brandGreen py-0.5", className)}>
      {children}
    </span>
  );
};
