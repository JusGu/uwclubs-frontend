"use client";
import { ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";
import CopyButton from "./CopyButton";
import { useRouter } from "next/navigation";

export default function EventCardNav() {
  const router = useRouter();
  const samePrevDomain = document.referrer.includes("localhost:3000");

  const onBack = () => {
    if (samePrevDomain) {
      router.back();
    } else {
      router.push("/events");
    }
  }
  
  return (
    <div className="flex justify-between items-center mb-4">
      <Button variant="outline" size="icon" onClick={onBack}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <CopyButton />
    </div>
  );
}
