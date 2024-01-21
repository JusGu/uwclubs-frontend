"use client"
import { Lora } from "next/font/google";
import Rive from "@rive-app/react-canvas";

const lora = Lora({ subsets: ["latin"] });

export default function EventPageTitle() {
  return (
    <div className="flex gap-2 items-center mb-2">
      <h1 className={`text-4xl font-bold ${lora.className}`}>Events</h1>
      <div className="w-14 h-14">
      <Rive src="/mantis.riv" />
      </div>
    </div>
  );
}
