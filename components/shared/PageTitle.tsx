import AnimatedLogo from "./AnimatedLogo";
import Link from "next/link";
import { Calistoga } from "next/font/google";

const calistoga = Calistoga({ weight: "400", subsets: ["latin"] });

interface IPageTitleProps {
  title: string;
  logo?: boolean;
}

export default function PageTitle(props: IPageTitleProps) {
  const { title } = props;
  return (
    <div className="flex gap-2 items-center">
      <h1 className={`text-4xl font-bold text-foreground ${calistoga.className}`}>
        {title}
      </h1>
      {props.logo && <Logo />}
    </div>
  );
}

function Logo() {
  return (
    <Link href="/">
      <div className="w-14 h-14">
        <AnimatedLogo />
      </div>
    </Link>
  );
}
