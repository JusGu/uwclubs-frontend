import React from "react";
import TextLogo from "@/components/shared/TextLogo";
import Link from "next/link";
import { Input } from "../ui/input";
import { Search } from "../ui/search";

interface SearchPageWrapperProps {
  children: React.ReactNode;
}

const SearchPageWrapper: React.FC<SearchPageWrapperProps> = ({ children }) => {
  return (
    <div className="w-full py-4">
      <div className="flex items-center px-5 sm:px-12 gap-2">
        <div className="justify-end flex-1 hidden sm:flex">
            <TextLogo />
        </div>
        <div className="w-full sm:w-1/2 sm:max-w-2xl sm:min-w-[42rem] sm:px-6">
          <Search placeholder="Search events..." className="h-14 rounded-full text-md" />
        </div>
        <div className="justify-end flex-1 hidden sm:flex">
        </div>
      </div>
      {children}
    </div>
  );
};

export default SearchPageWrapper;
