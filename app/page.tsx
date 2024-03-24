import AnimatedLogo from "@/components/shared/AnimatedLogo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Mockup from "@/components/Mockup";
import { Calistoga } from "next/font/google";
import Image from "next/image";
import FAQAccordion from "@/components/faq/FAQAccordian";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const calistoga = Calistoga({ weight: "400", subsets: ["latin"] }); 

export default async function Index() {
  return (
    <div className="flex flex-col items-center min-h-dvh w-full h-full">
      <Header />
      <div className="flex flex-col items-center h-screen justify-center gap-4">
        <div className="w-20 h-20">
          <AnimatedLogo />
        </div>
        <h1
          className={`text-7xl md:text-9xl font-bold text-center ${calistoga.className}`}
        >
          UWClubs
        </h1>

        <div className="mt-4 flex flex-col items-center gap-2">
          <Link href="/events">
            <Button
              variant="default"
              size="lg"
              className={`text-2xl py-7 rounded-full ${calistoga.className} tracking-wide`}
            >
              View Events
            </Button>
          </Link>
          <Link href="/learn/join">
            <Button variant="link" size="lg" className="hover:underline">
              Join as a Club
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center w-screen justify-center gap-4">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center ${calistoga.className}`}
        >
          A Calendar for Club Events.
        </h2>
        <h2 className={`text-2xl md:text-3xl text-center`}>
          Built by Students, for Students.
        </h2>
        <div className="w-screen max-w-5xl h-[80vw] max-h-[830px] my-10">
          <Mockup />
        </div>
      </div>
      <div className="flex justify-center md:justify-between gap-4 items-center flex-wrap max-w-3xl w-full px-4 pb-10">
        <div className="flex flex-col gap-4 max-w-md">
          <h3 className={`${calistoga.className} text-4xl md:text-5xl`}>
            About
          </h3>
          <p className="text-lg md:text-xl">
            UWClubs brings together clubs across{" "}
            <span className="italic rounded border border-1 px-1">
              Waterloo
            </span>{" "}
            to create a centralized place to view and navigate club events.
          </p>
          <p className="text-lg md:text-xl">
            Let's make club events accessible!
          </p>
        </div>
        <div className="hidden sm:block">
          <Image
            src="/manny_drawn.png"
            alt="marker drawn mascot, manny"
            width={270}
            height={270}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 max-w-md md:max-w-3xl w-full px-4 mt-10">
        <div className="w-full justify-center flex">
          <Image
            src="/search.png"
            alt="magnifying glass"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col gap-2 justify-center w-full ">
          <h3 className={`${calistoga.className} text-4xl md:text-5xl`}>
            See what's Happening
          </h3>
          <p className="text-lg md:text-xl">
            Club events have never been more accessible.
          </p>
        </div>
        <div className="w-full justify-center flex">
          <Image src="/alarm.png" alt="alarm clock" width={200} height={200} />
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <h3 className={`${calistoga.className} text-4xl md:text-5xl`}>
            Stay in the Loop
          </h3>
          <p className="text-lg md:text-xl">
            Real Time Updates. Club events are instantly added to UWClubs.
          </p>
        </div>
        <div className="w-full justify-center flex">
          <Image src="/coffee.png" alt="coffee cup" width={200} height={200} />
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <h3 className={`${calistoga.className} text-4xl md:text-5xl`}>
            Ridiculously Easy Setup
          </h3>
          <p className="text-lg md:text-xl">
            Remove redundant workflows with our real-time event scraping.
          </p>
          <Link href="/learn/join">
            <Button
              variant="link"
              size="lg"
              className="hover:underline p-0 mt-[-12px]"
            >
              Join as a Club
            </Button>
          </Link>
        </div>
      </div>
      <div className="max-w-md md:max-w-3xl w-full mx-auto p-4 mt-10">
        <h3
          className={`${calistoga.className} text-4xl md:text-5xl my-6 text-center`}
        >
          FAQ
        </h3>
        <FAQAccordion />
      </div>
      <Footer />

    </div>
  );
}
