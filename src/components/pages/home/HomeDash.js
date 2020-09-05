import React from "react";
import {homepageProps} from "../../../stories/data";
import {Flex, Divider, Box, Text} from "@chakra-ui/core";

const HomeDash = () => {
  const {pageTitle, firstBlurb} = homepageProps;

  return (
    <Flex direction="column" alignItems="center">
      <Flex bg="#ffffff" align="center" justify="space-around">
        <Text>{pageTitle}</Text>
      </Flex>
      <Divider w="100%" />
      <Box mt="20px">
        <Text>{firstBlurb}</Text>
      </Box>
    </Flex>
  );
};

export {HomeDash};
