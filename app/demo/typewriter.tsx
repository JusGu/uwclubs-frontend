import { calistoga } from "@/lib/fonts";
import "./styles.css";
import { useState, useEffect } from "react";

interface ITypeWriterProps {
  content?: string;
  speed?: number;
  displayedContent: string;
  setDisplayedContent: (content: string) => void;
}

const TypeWriter = ({
  content = "",
  speed = 1000,
  displayedContent,
  setDisplayedContent,
}: ITypeWriterProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0); // Reset index to 0 when content changes
    setDisplayedContent(""); // Reset displayedContent when content changes
  }, [content]);

  useEffect(() => {
    /*Create a new setInterval and store its id*/
    const animKey = setInterval(() => {
      setIndex((prevIndex) => {
        /*This setState function will set the index
        to prevIndex+1 if there is more content otherwise
        it will destroy this animation*/

        if (prevIndex < content.length) {
          return prevIndex + 1;
        } else {
          clearInterval(animKey);
          return prevIndex;
        }
      });
    }, speed);
    // Cleanup function to clear interval when component unmounts or content changes
    return () => clearInterval(animKey);
  }, [content, speed, index]);

  useEffect(() => {
    // Update displayedContent only if index is less than content.length
    setDisplayedContent(content.substring(0, index));
  }, [index, content]);

  return (
    <p
      className={`type-writer text-3xl sm:text-5xl font-bold ${calistoga.className} max-w-md md:max-w-3xl w-full`}
    >
      {displayedContent}
    </p>
  );
};

export default TypeWriter;
