"use client";
import Rive from "@rive-app/react-canvas";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

interface IPageTitleProps {
  title: string;
  logo?: boolean;
}

export default function PageTitle(props: IPageTitleProps) {
  const { title } = props;
  return (
    <div className="flex gap-2 items-center">
      <h1 className={`text-4xl font-bold text-foreground ${lora.className}`}>
        {title}
      </h1>
      {props.logo && <Logo />}
    </div>
  );
}

function Logo() {
  return (
    <div className="w-14 h-14">
      <Rive src="/mantis.riv" />
    </div>
  );
}
