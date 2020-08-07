import React from "react";
import {PageHeader, Affix} from "antd";
import {homepageProps} from "../../../stories/data";
import House from "../../../images/House.png";
import {Flex, Divider, Box} from "@chakra-ui/core";

const HomeDash = (props) => {
  const {pageTitle, firstBlurb} = homepageProps;

  return (
    <Flex direction="column">
      <Affix>
        <Flex bg="#ffffff" align="center" justify="space-around">
          <PageHeader
            avatar={{src: House}}
            title={pageTitle}
          />
        </Flex>
        <Divider w="100%" />
      </Affix>
      <Box mt="20px" h={1000}>{firstBlurb}</Box>
    </Flex>
  );
};

export {HomeDash};
