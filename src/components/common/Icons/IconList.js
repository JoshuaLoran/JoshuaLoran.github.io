import React from "react";
import PropTypes from "prop-types";
import {Box, Flex} from "@chakra-ui/core";
import {Icon} from "@iconify/react";


// Component to take in an array of Icon objects and present them in format
const IconList = ({icons}) => {
  return (
    <Flex w="80%" wrap="wrap" justify="space-around">
      {icons && icons.map((icon, key) => (
        <Box key={key} m="0.5em">
          <a target="_blank" rel="noopener noreferrer" href={icon.link}>
            <Icon icon={icon.icon} width="1.5em" height="1.5em"/>
          </a>
        </Box>
      ))}
    </Flex>
  );
};

export {IconList};

IconList.defaultProps = {
  icons: []
};

IconList.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.object)
};
