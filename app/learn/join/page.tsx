import PageWrapper from "@/components/shared/PageWrapper";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { emailContact, discordContact } from "@/lib/contact";
import Hero, { IHeroProps } from "@/components/shared/Hero";
import Image from "next/image";

export default function Page() {
  const heroProps: IHeroProps = {
    title: "How to Join as a Club",
    description:
      "Joining UWClubs is a straightforward process that can be done in less than sixty seconds",
    src: "/join/hero.png",
    alt: "Joining UWClubs is a straightforward process that can be done in less than sixty seconds",
    learn: true,
  };

  return (
    <PageWrapper>
      <Hero {...heroProps} />
      <div className="w-full sm:w-1/2 mx-auto p-6">
        <Link href="/">Home</Link>
        <ChevronRight size={20} className="inline-block" />
        <Link href="/learn">Learn</Link>
        <div className="flex flex-col gap-4 my-4">
          <h2 className="text-3xl font-bold">Invite Manny</h2>
          <p>
            If you don’t have an invite link, please{" "}
            <a
              href={`mailto:${emailContact}`}
              className="text-primary font-bold hover:underline"
            >
              email me
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
          <p>Manny can only read messages in linked channels.</p>
          <div className="py-4">
            <Image
              alt="Step two: Link the bot"
              src="/join/step_two.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto"}}
              className="rounded-3xl"
            />
          </div>
          <h2 className="text-3xl font-bold">That's all!</h2>
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
