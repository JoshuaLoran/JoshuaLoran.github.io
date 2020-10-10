import React from "react";
import PropTypes from "prop-types";
import {Text, Box} from "@chakra-ui/core";
import {Carousel} from "antd";

// Carousel to cycle through quotes about Conmitto
const QuoteBox = ({quoteOne, quoteTwo, quoteThree}) => {
  return (
    <Box w={["100%", "45%", "45%", "45%"]}>
      <Carousel dots={false} autoplay effect="fade">
        <Text fontSize={["14px", "16px", "20px", "24px"]}>{`"${quoteOne}"`}</Text>
        <Text fontSize={["14px", "16px", "20px", "24px"]}>{`"${quoteTwo}"`}</Text>
        <Text fontSize={["14px", "16px", "20px", "24px"]}>{`"${quoteThree}"`}</Text>
      </Carousel>
    </Box>
  );
};

export {QuoteBox};

QuoteBox.defaultProps = {
  quoteOne: "Quote One",
  quoteTwo: "Quote Two",
  quoteThree: "Quote Three"
};

QuoteBox.propTypes = {
  quoteOne: PropTypes.string,
  quoteTwo: PropTypes.string,
  quoteThree: PropTypes.string
};
