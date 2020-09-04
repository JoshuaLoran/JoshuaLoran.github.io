import React from "react";
import {Box, Flex} from "@chakra-ui/core";
import {Icon} from "@iconify/react";


const IconList = ({icons}) => {
  return (
    <Flex w="80%" wrap="wrap" justify="space-around">
      {icons.map((icon, key) => (
        <Box key={key} m="1em">
          <a target="_blank" rel="noopener noreferrer" href={icon.link}>
            <Icon icon={icon.icon} width="2em" height="2em"/>
          </a>
        </Box>
      ))}
    </Flex>
  );
};

export {IconList};
