import React from "react";
const baseClassName =
  "bg-[rgba(88,101,242,0.15)] hover:bg-[rgba(88,101,242,0.867)] text-[rgb(88,101,242)] hover:text-[rgb(229,231,253)] ";
const renderedClassName = baseClassName + "px-2 rounded cursor-default whitespace-nowrap";
export const renderDiscordHoverable = (props: any) =>
  React.createElement(
    "span",
    {
      className: renderedClassName,
    },
    props.children
  );

export const renderDiscordHoverableBase = (props: any) =>
  React.createElement(
    "span",
    {
      className: baseClassName,
    },
    props.children
  );
