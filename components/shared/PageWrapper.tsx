import React from "react";
import TextLogo from "@/components/shared/TextLogo";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="w-full">
      <div className="py-2 px-5 sm:px-12">
        <TextLogo />
      </div>
      {children}
    </div>
  );
};

export default PageWrapper;
