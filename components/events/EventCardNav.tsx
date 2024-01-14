"use client"
import { useState } from 'react';
import { ChevronLeft, Copy, Check } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function EventCardNav() {
    const router = useRouter();
    const [isCopied, setIsCopied] = useState(false);

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); 
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="flex justify-between items-center mb-4">
            <Button variant="outline" size="icon" onClick={() => router.push('/events')}>
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button onClick={copyLink}>
                {isCopied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                {isCopied ? 'Copied' : 'Copy Link'}
            </Button>
        </div>
    )
}