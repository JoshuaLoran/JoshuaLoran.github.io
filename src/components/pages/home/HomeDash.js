import React from "react";
import {Affix} from "antd";
import {homepageProps} from "../../../stories/data";
import {Flex, Divider, Box, Text} from "@chakra-ui/core";

const HomeDash = (props) => {
  const {pageTitle, firstBlurb} = homepageProps;

  return (
    <Flex direction="column">
      <Affix>
        <Flex bg="#ffffff" align="center" justify="space-around">
          <Text>{pageTitle}</Text>
        </Flex>
        <Divider w="100%" />
      </Affix>
      <Box mt="20px" h={1000}><Text>{firstBlurb}</Text></Box>
    </Flex>
  );
};

export {HomeDash};
