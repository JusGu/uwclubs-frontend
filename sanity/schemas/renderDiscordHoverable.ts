import React from "react";
const baseClassName =
  "bg-discordBase hover:bg-discordHover text-discordText hover:text-discordTextHover ";

export const renderDiscordHoverableBase = (props: any) =>
  React.createElement(
    "span",
    {
      className: baseClassName,
    },
    props.children
  );
