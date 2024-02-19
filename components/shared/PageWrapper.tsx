import React from "react";
import TextLogo from "@/components/shared/TextLogo";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="w-full sm:w-1/2 mx-auto p-6 sm:max-w-2xl">
      <div className="pb-4">
        <TextLogo />
      </div>
      {children}
    </div>
  );
};

export default PageWrapper;
