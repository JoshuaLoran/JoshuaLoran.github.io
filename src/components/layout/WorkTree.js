import React from "react";
import {Box} from "@chakra-ui/core";

const WorkTree = ({topHeading, secondHeading, topList, secondList, linkUrl, iconList}) => {
  return (
    <Box textAlign="left" mt={[15, 20, 35, 80]}>
      <h2>{topHeading || ""}:</h2>
      {topList && topList.map((bullet, key) => (
        <p key={key}><li>{bullet}</li></p>
      ))}
      <h2>{secondHeading || ""}:</h2>
      {secondList && secondList.map((bullet, key) => (
        <p key={key}><li>{bullet}</li></p>
      ))}
      <br/>
      {iconList}
      <br/>
      <p><a target="_blank" rel="noopener noreferrer" href={linkUrl}>Go to Web Site →</a></p>
    </Box>
  );
};

export {WorkTree};
