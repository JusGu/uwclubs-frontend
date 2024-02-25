import * as React from "react";

import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { Button } from "./button";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  onButtonClick?: () => void; // Add the new prop here
}

export type SearchProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Search = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, onButtonClick, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-10 items-center rounded-md border border-input pl-3 text-sm overflow-hidden",
          className
        )}
      >
        <textarea
          {...props}
          ref={ref}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          maxLength={2048}
          rows={1}
          role="combobox"
          spellCheck="false"
          className="flex-grow p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-background resize-none"
        />
        <Button
          variant="default"
          className="rounded-full h-12 p-0 flex w-12 m-1 min-w-14 items-center justify-center"
          onClick={onButtonClick} 
        >
          <SearchIcon className="h-5 w-5 stroke-[2]" />
        </Button>
      </div>
    );
  }
);

Search.displayName = "Search";

export { Search };