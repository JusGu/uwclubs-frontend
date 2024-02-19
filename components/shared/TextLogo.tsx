"use client";
import { Lora } from "next/font/google";
import AnimatedLogo from "./AnimatedLogo";
import Link from "next/link";

const lora = Lora({ subsets: ["latin"] });

export default function TextLogo() {
  return (
    <Link href="/">
      <div className="flex gap-2 items-center">
        <div className="w-12 h-12">
          <AnimatedLogo />
        </div>
        <h1 className={`text-2xl font-bold text-foreground ${lora.className}`}>
          UWClubs
        </h1>
      </div>
    </Link>
  );
}
