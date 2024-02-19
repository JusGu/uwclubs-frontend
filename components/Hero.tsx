"use client";
import React from "react";
import Rive, { Layout, Fit, Alignment } from "@rive-app/react-canvas";

export default function Hero() {
  return (
    <Rive
      src="/hero.riv"
      style={{ width: "100%" }}
      layout={new Layout({ fit: Fit.FitWidth, alignment: Alignment.Center })}
    />
  );
};

