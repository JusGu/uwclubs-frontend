"use client"
import { Check, Copy } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export default function CopyButton() {
  const [isCopied, setIsCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  return (
    <Button onClick={copyLink}>
      {isCopied ? (
        <Check className="mr-2 h-4 w-4" />
      ) : (
        <Copy className="mr-2 h-4 w-4" />
      )}
      {isCopied ? "Copied" : "Copy Link"}
    </Button>
  );
}
