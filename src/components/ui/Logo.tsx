"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  color?: "dark" | "light";
  showText?: boolean;
}

export function Logo({ className, color = "dark", showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/logo.png"
        alt="Consigliere"
        width={50}
        height={65}
        className={cn(
          "h-[52px] w-auto lg:h-[64px]",
          color === "light" && "invert"
        )}
      />
      {showText && (
        <span
          className={cn(
            "font-serif text-[1.4rem] tracking-[0.2em] font-medium",
            color === "light" ? "text-white" : "text-charcoal"
          )}
        >
          CONSIGLIERE
        </span>
      )}
    </div>
  );
}
