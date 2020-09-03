import React from "react";
import {Text, Box} from "@chakra-ui/core";
import {Carousel} from "antd";

const QuoteBox = ({quoteOne, quoteTwo, quoteThree}) => {
  return (
    <Box w={["100%", "45%", "45%", "45%"]}>
      <Carousel dots={false} autoplay effect="fade">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Text fontSize={["14px", "16px", "20px", "24px"]}>"{quoteOne}"</Text>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Text fontSize={["14px", "16px", "20px", "24px"]}>"{quoteTwo}"</Text>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Text fontSize={["14px", "16px", "20px", "24px"]}>"{quoteThree}"</Text>
      </Carousel>
    </Box>
  );
};

export {QuoteBox};
