import React from "react";
import PropTypes from "prop-types";
import {Image} from "@chakra-ui/core";


// Component to standardize image format for layout
const Picture = ({imgFile, size, noBorder, alt}) => {
  return <Image
    border={noBorder ? "" : "double"}
    rounded="25px"
    mb={[20, 40, 70, 80]}
    mt={[10, 30, 60, 70]}
    size={size}
    alt={alt ? alt : ""}
    src={imgFile}/>;
};

export {Picture};

Picture.defaultProps = {
  size: ["100%", "100%", "40%", "40%"],
  noBorder: false
};

Picture.propTypes = {
  imgFile: PropTypes.node.isRequired,
  size: PropTypes.arrayOf(PropTypes.string),
  noBorder: PropTypes.bool
};
