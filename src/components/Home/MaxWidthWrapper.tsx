import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(className, "w-full max-w-[1700px] mx-auto")}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
