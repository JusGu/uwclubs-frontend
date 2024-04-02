"use client";
import { calistoga } from "@/lib/fonts";
import AnimatedLogo from "./AnimatedLogo";
import Link from "next/link";

export default function TextLogo({ size = "sm" }: { size?: "sm" | "md" | "lg" }) {
  const textSizeClass = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-5xl",
  }[size];

  const logoSizeClass = {
    sm: "w-12 h-12",
    md: "w-14 h-14",
    lg: "w-16 h-16",
  }[size];

  return (
    <Link href="/">
      <div className="flex gap-2 items-center">
        <div className={logoSizeClass}>
          <AnimatedLogo />
        </div>
        <h1 className={`${textSizeClass} font-bold text-foreground ${calistoga.className}`}>
          UWClubs
        </h1>
      </div>
    </Link>
  );
}
