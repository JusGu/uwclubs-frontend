import FAQAccordion from "@/components/FAQAccordian";
import { HelpCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function HelpButton() {
  return (
    <div className="fixed top-4 right-4 z-50">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="h-12 w-12 p-2">
            <HelpCircle size={48} className="text-primary" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl pr-16">
              <Link href="/faq" className="flex items-center gap-2 hover:underline">
                FAQ <ExternalLink size={20} />
              </Link>
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <FAQAccordion />
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
}
