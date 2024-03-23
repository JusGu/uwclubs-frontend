import Image from "next/image";
import { Calistoga } from "next/font/google";

const calistoga = Calistoga({ weight: "400", subsets: ["latin"] }); // Initialize Calistoga font with required weight

export interface IHeroProps {
  src: string;
  alt: string;
  learn?: boolean;
  title: string;
  description?: string;
}
export default function Hero({
  src,
  alt,
  learn,
  title,
  description,
}: IHeroProps) {
  const bottomTextClasses =
    "absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-background";
  return (
    <div className="w-full h-[calc(100vh-64px)] relative">
      <Image src={src} alt={alt} layout="fill" objectFit="cover" priority />
      <div
        className={`${bottomTextClasses} flex flex-col gap-6 w-5/6 sm:w-1/2`}
      >
        {learn && (
          <p className="text-2xl font-bold tracking-widest">| L E A R N |</p>
        )}
        <h1
          className="text-6xl sm:text-8xl font-bold"
          style={{ fontFamily: calistoga.style.fontFamily, lineHeight: '1.2' }}
        >
          {title}
        </h1>
        {description && <p className="text-2xl font-light">{description}</p>}
      </div>
    </div>
  );
}
