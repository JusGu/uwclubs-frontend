"use client"
import Rive from "@rive-app/react-canvas";
import { LucideArrowDownCircle } from "lucide-react";
export default async function Index() {

  return (
    <div className="flex flex-col items-center min-h-screen w-full h-full" style={{ backgroundColor: "#255270" }}>
      <div style={{ backgroundColor: "#255270", width: 500, height: 300 }}>
      <Rive src="/hero.riv" />
      </div>
      <div className="relative animate-bounce" style={{ color: "#255270" }}>
        <LucideArrowDownCircle size={48} color="#F0EBD8" className="animate-fade-in" />
      </div>
    </div>
  );
}

