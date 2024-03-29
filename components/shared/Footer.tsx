import { discordServer, instagramContact, twitterContact } from "@/lib/contact";
import { Separator } from "../ui/separator";
import { Calistoga } from "next/font/google";
const calistoga = Calistoga({ weight: "400", subsets: ["latin"] });

const linkClass = "hover:opacity-100 opacity-60";
export default function Footer({ large = false }) {
  
  const baseClass = "w-full mx-auto p-4 mb-14 text-base";
  const sizeClass = large ? 'md:max-w-5xl' : 'md:max-w-3xl';
  const maxClass = large ? '' : 'max-w-md';

  return (
    <div className={`${baseClass} ${sizeClass} ${calistoga.className} ${maxClass}`}>
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
