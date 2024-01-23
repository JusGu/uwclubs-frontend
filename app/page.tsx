"use client"
import Rive, { Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { LucideArrowDownCircle } from "lucide-react";
export default async function Index() {

  return (
    <div className="flex flex-col items-center min-h-screen w-full h-full" style={{ backgroundColor: "#255270" }}>
      <div className="flex flex-col w-4/5 md:w-1/2 h-screen items-stretch justify-center">
      <Rive src="/hero.riv"
       style={{ width: '100%' }}
       layout={new Layout({ fit: Fit.FitWidth, alignment: Alignment.Center })}
       />
      </div>
      {/* <div className="relative animate-bounce" style={{ color: "#255270" }}>
        <LucideArrowDownCircle size={48} color="#F0EBD8" className="animate-fade-in" />
      </div> */}
    </div>
  );
}

