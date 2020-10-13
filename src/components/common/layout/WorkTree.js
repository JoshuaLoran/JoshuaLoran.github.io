import React from "react";
import PropTypes from "prop-types";
import {Box} from "@chakra-ui/core";

const style = {
  textDecoration: "underline"
};

// Component to display an image with bullets about work done
const WorkTree = ({topHeading, secondHeading, topList, secondList, linkUrl, iconList, onRight}) => {
  const dirSide = !onRight ? "rtl" : "";
  return (
    <Box w={["100%", "100%", "100%", "40%"]} textAlign={onRight ? "left" : "right"} mt={[30, 30, 35, 80]} h="100%">
      <h2 style={style}>{topHeading || ""}{topHeading ? ":" : ""}</h2>
      <div dir={dirSide}>
        {topList && topList.map((bullet, key) => (
          <p key={key}><li>{bullet}</li></p>
        ))}
      </div>
      <h2 style={style}>{secondHeading || ""}{secondHeading ? ":" : ""}</h2>
      <div dir={dirSide}>
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

WorkTree.defaultProps = {
  topHeading: "Top Heading",
  secondHeading: "Second Heading",
  topList: [],
  secondList: [],
  linkUrl: "https://picsum.photos/id/237/536/354",
  iconList: null,
  onRight: true
};

WorkTree.propTypes = {
  topHeading: PropTypes.string,
  secondHeading: PropTypes.string,
  topList: PropTypes.arrayOf(PropTypes.string),
  secondList: PropTypes.arrayOf(PropTypes.string),
  linkUrl: PropTypes.string,
  iconList: PropTypes.node,
  onRight: PropTypes.bool
};
