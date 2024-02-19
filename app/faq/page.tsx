import FAQAccordion from "@/components/FAQAccordian";
import PageTitle from "@/components/shared/PageTitle";
import PageWrapper from "@/components/shared/PageWrapper";
import TextLogo from "@/components/shared/TextLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, Search } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <PageWrapper>
      <Link href="/">Home</Link>
      <ChevronRight size={20} className="inline-block" />
      <Link href="/faq">FAQ</Link>
      <div className="py-2">
        <PageTitle title="Frequently Asked Questions" />
      </div>
      <FAQAccordion />
    </PageWrapper>
  );
}
