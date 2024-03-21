import AnimatedLogo from "@/components/shared/AnimatedLogo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Mockup from "@/components/Mockup";
import { Calistoga } from "next/font/google";
import Image from "next/image";

const calistoga = Calistoga({ weight: "400", subsets: ["latin"] }); // Initialize Calistoga font with required weight

export default async function Index() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full h-full">
      <div className="flex flex-col items-center h-screen justify-center gap-4">
        <div className="w-20 h-20">
          <AnimatedLogo />
        </div>
        <h1
          className={`text-7xl md:text-8xl font-bold text-center ${calistoga.className}`}
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
        <h2 className={`text2-xl md:text-3xl text-center`}>
          Built by Students, for Students.
        </h2>
        <div className="w-screen h-[40vh] md:w-3/4 md:h-screen">
          <Mockup />
        </div>
      </div>
      <div className="flex justify-center space-between gap-4 items-center flex-wrap m-4">
          <div className="flex flex-col gap-4 max-w-md">
            <h3 className={`${calistoga.className} text-4xl`}>About</h3>
            <p className="text-xl">
              UWClubs brings together clubs across{" "}
              <span className="italic rounded border border-1 px-1">
                Waterloo
              </span>{" "}
              to create a centralized place to view and navigate club events.
            </p>
            <p className="text-xl">Let's make club events accessible!</p>
          </div>
            <Image
              src="/manny_drawn.png"
              alt="marker drawn mascot, manny"
              width={300}
              height={300}
            />
        </div>
        <div className="flex gap-4 items-center flex-wrap justify-center m-4">
          <Image
            src="/search.png"
            alt="magnifying glass"
            width={200}
            height={200}
          />
          <div className="flex flex-col gap-4 max-w-lg">
            <h3 className={`${calistoga.className} text-4xl`}>
              See what's Happening
            </h3>
            <p className="text-xl">
              Club events have never been more accessible.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center flex-wrap justify-center m-4">
          <Image src="/alarm.png" alt="alarm clock" width={200} height={200} />
          <div className="flex flex-col gap-4 max-w-lg">
            <h3 className={`${calistoga.className} text-4xl`}>
              Stay in the Loop
            </h3>
            <p className="text-xl">
              Club events are instantly added to UWClubs.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-4 items-center flex-wrap m-4">
          <Image src="/coffee.png" alt="coffee cup" width={200} height={200} />
          <div className="flex flex-col gap-4 max-w-lg">
            <h3 className={`${calistoga.className} text-4xl`}>
              Ridiculously Easy Setup
            </h3>
            <p className="text-xl">Remove redundant workflows.</p>
          </div>
        </div>
    </div>
  );
}
