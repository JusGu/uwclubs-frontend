"use client";
import { Lora } from "next/font/google";
import Rive from "@rive-app/react-canvas";

const lora = Lora({ subsets: ["latin"] });

export default function TextLogo() {
  return (
    <div className="flex gap-2 items-center">
      <div className="w-12 h-12">
        <Rive src="/mantis.riv" />
      </div>
      <h1 className={`text-2xl font-bold text-foreground ${lora.className}`}>UWClubs</h1>
    </div>
  );
}
