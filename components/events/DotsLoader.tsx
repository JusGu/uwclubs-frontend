"use client"
import React, { useEffect, useState } from 'react';

interface IDotsLoaderProps {
  startTime: string;
  endTime: string;
}

export default function DotsLoader({ startTime, endTime }: IDotsLoaderProps) {
  const [isActive, setIsActive] = useState(false);
  const size = 2;

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const start = new Date(startTime);
      const end = new Date(endTime);
      setIsActive(now >= start && now <= end);
    };

    checkTime(); // Check immediately on mount
    const intervalId = setInterval(checkTime, 1000); // Then check every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [startTime, endTime]);

  if (!isActive) return null; // Don't render if not active

  return (
    <div className="flex space-x-2 justify-center items-center dark:invert">
      <span className="sr-only">Currently Happening</span>
      <div className={`h-${size} w-${size} bg-primary rounded-full animate-bounce [animation-delay:-0.3s]`}></div>
      <div className={`h-${size} w-${size} bg-primary rounded-full animate-bounce [animation-delay:-0.15s]`}></div>
      <div className={`h-${size} w-${size} bg-primary rounded-full animate-bounce`}></div>
    </div>
  );
}