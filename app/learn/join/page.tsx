import PageWrapper from "@/components/shared/PageWrapper";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { emailContact, discordContact, twitterContact, justin_twitter } from "@/lib/contact";
import Image from "next/image";
import { Calistoga } from "next/font/google";
import Header from "@/components/Header";
import { Separator } from "@/components/ui/separator";

const calistoga = Calistoga({ weight: "400", subsets: ["latin"] }); 

export default function Page() {
  return (
    <PageWrapper>
      <div className="w-full max-w-3xl mx-auto p-6 text-lg">
        <Link href="/">Home</Link>
        <ChevronRight size={20} className="inline-block" />
        <Link href="/learn">Learn</Link>
        <div className="flex flex-col gap-4 my-4">
          <h1 className={`text-5xl font-bold ${calistoga.className}`}>How to Join as a Club</h1>
          <Image
            alt="cover image"
            src="/join/cover.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-3xl"
          />
          <b>
            Joining UWClubs is a straightforward process that can be done in
            less than sixty seconds.
          </b>
          <h2 className="text-3xl font-bold">Invite Manny</h2>
          <p>
            If you don't have an invite link, please email me at{" "}
            <a
              href={`mailto:${emailContact}`}
              className="text-primary font-bold hover:underline"
            >
              {emailContact}
            </a>{" "}
            or send me message {discordContact} on Discord.
          </p>
          <div className="py-4">
            <Image
              alt="Step one: Invite Manny"
              src="/join/step_one.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-3xl"
            />
          </div>

          <h2 className="text-3xl font-bold">
            Link {renderDiscordHoverable("# announcements")}
          </h2>
          <p>Use the {renderDiscordHoverable("/link")} command to your channel. Manny can only read messages in linked channels.</p>
          <div className="py-4">
            <Image
              alt="Step two: Link the bot"
              src="/join/step_two.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-3xl"
            />
          </div>
          <p>
            Once you're set up, there's nothing extra for you to do. You can
            stop automatic updates anytime you want using the{" "}
            {renderDiscordHoverable("/unlink")} command.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

function renderDiscordHoverable(text: string) {
  return (
    <span className="px-2 bg-[rgba(88,101,242,0.15)] hover:bg-[rgba(88,101,242,0.867)] text-[rgb(88,101,242)] hover:text-[rgb(229,231,253)] rounded cursor-default whitespace-nowrap">
      {text}
    </span>
  );
}
