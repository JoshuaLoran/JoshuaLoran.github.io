import React from "react";
import {Box} from "@chakra-ui/core";

const style ={
  textDecoration: "underline"
};

const WorkTree = ({topHeading, secondHeading, topList, secondList, linkUrl, iconList, onRight = true}) => {
  return (
    <Box w={["100%", "100%", "100%", "40%"]} textAlign={onRight ? "left" : "right"} mt={[30, 30, 35, 80]} h="100%">
      <h2 style={style}>{topHeading || ""}{topHeading ? ":" : ""}</h2>
      <div dir={!onRight && "rtl"}>
        {topList && topList.map((bullet, key) => (
          <p key={key}><li>{bullet}</li></p>
        ))}
      </div>
      <h2 style={style}>{secondHeading || ""}{secondHeading ? ":" : ""}</h2>
      <div dir={!onRight && "rtl"}>
        {secondList && secondList.map((bullet, key) => (
          <p key={key}><li>{bullet}</li></p>
        ))}
        <br/>
        {iconList}
        <br/>
      </div>
      <p><a target="_blank" rel="noopener noreferrer" href={linkUrl}>Go to Web Site →</a></p>
    </Box>
  );
};

export {WorkTree};
