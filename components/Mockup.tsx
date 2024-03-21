"use client";
import React, { useState, useEffect } from "react";
import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import { throttle } from "lodash"; // Import throttle

export default function Mockup() {
  const { rive, RiveComponent } = useRive({
    src: "/mockup.riv",
    stateMachines: "open_close",
    autoplay: true,
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.TopCenter }),
  });

  const scrollInput = useStateMachineInput(rive, "open_close", "scroll", 0);

  const handleScroll = () => {
    const position = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercentage = (position / scrollHeight) * 100;

    if (scrollInput) {
      scrollInput.value = scrollPercentage * 2;
    }
  };

  // Wrap handleScroll with throttle
  // The second argument is the number of milliseconds to throttle invocations to
  const throttledHandleScroll = throttle(handleScroll, 10);

  useEffect(() => {
    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      throttledHandleScroll.cancel(); // Cancel any remaining throttled invocations on cleanup
    };
  }, [throttledHandleScroll]);

  return (
    <>
      <RiveComponent style={{height: "100%" }} />
    </>
  );
}
