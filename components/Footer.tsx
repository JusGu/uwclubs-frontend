import { discordServer, instagramContact, twitterContact } from "@/lib/contact";
import { Separator } from "./ui/separator";
import { Calistoga } from "next/font/google";
const calistoga = Calistoga({ weight: "400", subsets: ["latin"] });

const linkClass = "hover:opacity-100 opacity-60";
export default function Footer() {
  return (
    <div
      className={`max-w-md md:max-w-3xl w-full mx-auto p-4 mt-10 mb-14 ${calistoga.className} text-base`}
    >
      <Separator />
      <div className="flex justify-between gap-2 mt-2">
        <a href="/">
          UWClubs
        </a>
        <div className="flex gap-4 flex-wrap">
          <a
            href={instagramContact}
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            Instagram
          </a>
          <a
            href={twitterContact}
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            X (Twitter)
          </a>
          <a
            href={discordServer}
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            Discord
          </a>
        </div>
      </div>
    </div>
  );
}
