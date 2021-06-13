import React from "react";
import { useLocation } from "react-router";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export const MainView: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const paramMap: Record<string, any> = {};

  Array.from(params.entries()).forEach(([key, value]) => {
    let val: any = value;
    if (value === "true") {
      val = true;
    } else if (value === "false") {
      val = false;
    }
    paramMap[key] = val;
  });

  return (
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName={paramMap["screenName"]}
      theme={paramMap["theme"]}
      borderColor={paramMap["borderColor"]}
      noHeader={paramMap["noHeader"]}
      noFooter={paramMap["noFooter"]}
      transparent={paramMap["transparent"]}
    />
  );
};
