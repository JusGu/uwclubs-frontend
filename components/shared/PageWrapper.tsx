import React from "react";
import TextLogo from "@/components/shared/TextLogo";
import Header from "@/components/Header";
import Footer from "../Footer";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps & { footerLarge?: boolean }> = ({ children, footerLarge = false }) => {
  return (
    <div className="w-full h-full">
      <Header/>
      <div className="py-4 flex justify-center">
        <TextLogo />
      </div>
      {children}
      <Footer large={footerLarge} />
    </div>
  );
};

export default PageWrapper;
