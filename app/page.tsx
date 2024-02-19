import AnimatedLogo from "@/components/AnimatedLogo";
import HelpButton from "@/components/HelpButton";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Index() {
  return (
    <div
      className="flex flex-col items-center min-h-screen w-full h-full"
      style={{ backgroundColor: "#255270" }}
    >
      <style>{`body { background-color: #255270; }`}</style>
      <div className="flex flex-col items-center h-screen w-screen justify-center gap-4">
        <HelpButton />
        <div className="w-24 h-24">
          <AnimatedLogo />
        </div>
        <div className="w-4/5 md:w-1/5 h-1/4">
          <Hero />
        </div>
        <div className="animate-fade-in mt-4 flex flex-col items-center gap-2">
          <Link href="/events">
            <Button
              variant="secondary"
              size="lg"
              className="text-2xl py-6"
            >
              View Events
            </Button>
          </Link>
          <Link href="/faq">
            <Button
              variant="default"
              size="lg"
              className="hover:underline"
            >
              Join UWClubs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
