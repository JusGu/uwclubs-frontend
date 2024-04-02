import PageWrapper from "@/components/shared/PageWrapper";
import Image from "next/image";
import { calistoga } from "@/lib/fonts";
import Link from "next/link";

export default function Error() {
  return (
    <PageWrapper>
      <div
        className="flex justify-center items-center flex-col"
        style={{ height: "calc(100vh - 201px)" }}
      >
        <Image
          src="/manny_drawn.png"
          alt="Manny the mascot"
          width={270}
          height={270}
        />
        <div className="p-6 max-w-sm mx-auto rounded-xl">
          <h1 className={`text-5xl font-bold ${calistoga.className} mb-4`}>Page not found.</h1>
          <p>
            Looks like this page doesn't exist. Manny invites you to check out
            our other content!
          </p>
          <ul className="mt-4 list-disc pl-4">
          <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:underline">
                View Events
              </Link>
            </li>
            <li>
              <Link href="/blog/how-to-join-as-a-club" className="hover:underline">
                Join as a Club
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
}
