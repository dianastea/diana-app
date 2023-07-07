/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ElementControlsTag = ({ darkMode, tagClassName, text = "Tag", className }) => {
  return (
    <div className={`element-controls-tag dark-mode-8-${darkMode} ${className}`}>
      <div className={`tag ${tagClassName}`}>{text}</div>
    </div>
  );
};

ElementControlsTag.propTypes = {
  darkMode: PropTypes.bool,
  text: PropTypes.string,
};
