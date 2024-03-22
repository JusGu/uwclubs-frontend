import FAQAccordion from "@/components/faq/FAQAccordian";
import Hero, { IHeroProps } from "@/components/shared/Hero";
import PageWrapper from "@/components/shared/PageWrapper";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const heroProps: IHeroProps = {
    title: "Frequently Asked Questions",
    src: "/faq/hero.png",
    alt: "Find answers to common questions about UWClubs",
  };
  return (
    <PageWrapper>
      <Hero {...heroProps} />
      <div className="w-full sm:w-1/2 mx-auto p-6">
        <Link href="/">Home</Link>
        <ChevronRight size={20} className="inline-block" />
        <Link href="/faq">FAQ</Link>
        <FAQAccordion />
      </div>
    </PageWrapper>
  );
}
