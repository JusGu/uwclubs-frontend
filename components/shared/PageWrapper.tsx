import React from "react";
import TextLogo from "@/components/shared/TextLogo";
import Link from "next/link";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="w-full">
      <div className="py-2 px-5 sm:px-12 flex items-center">
        <TextLogo />
        <div className="flex gap-4 ml-auto">
          <Link
            href="/events"
            className="flex items-center gap-2 hover:underline"
          >
            Events
          </Link>
          <Link
            href="/learn/join"
            className="flex items-center gap-2 hover:underline"
          >
            Join
          </Link>
          <Link href="/faq" className="flex items-center gap-2 hover:underline">
            FAQ
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
};

export default PageWrapper;
