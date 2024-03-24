import { Button } from "./ui/button";
import Link from "next/link";
import { Calistoga } from "next/font/google";

const calistoga = Calistoga({ weight: "400", subsets: ["latin"] }); // Initialize Calistoga font with required weight

const buttonClasses = `rounded-full my-1 px-2 md:px-3 py-2 h-fit w-fit`;
export default function Header() {
  return (
    <div className="inset-x-0 max-w-max mx-auto fixed md:top-4 md:right-4 md:bottom-auto md:mr-0 bottom-4 flex md:justify-end justify-center">
      <div className=" border rounded-full bg-background brightness-105 flex-nowrap flex gap-1 px-1 z-10">
        {/* <Link href="/about">
        <Button variant="ghost" size="lg" className={buttonClasses}>
          About Us
        </Button>
      </Link>
      <Link href="/clubs">
        <Button variant="ghost" size="lg" className={buttonClasses}>
        Clubs
        </Button>
      </Link>
      <Link href="/learn">
        <Button variant="ghost" size="lg" className={buttonClasses}>
          Learn
        </Button>
      </Link> */}
        <Link href="/learn/join">
          <Button variant="ghost" size="lg" className={buttonClasses}>
            Join as a Club
          </Button>
        </Link>
        <Link href="/events">
          <Button variant="default" size="lg" className={buttonClasses}>
            View Events
          </Button>
        </Link>
      </div>
    </div>
  );
}
