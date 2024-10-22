import { Button } from "../ui/button";
import Link from "next/link";

const buttonClasses = `rounded-full my-1 px-2 md:px-3 py-2 h-fit w-fit`;
export default function Header() {
  return (
    <div className="inset-x-0 max-w-max mx-auto fixed md:top-4 md:right-4 md:bottom-auto md:mr-0 bottom-4 flex md:justify-end justify-center z-10">
      <div className=" border rounded-full bg-background brightness-105 flex-nowrap flex gap-1 px-1">
        <Link href="/blog">
          <Button variant="ghost" size="lg" className={buttonClasses}>
            Blog
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
