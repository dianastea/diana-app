/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ElementEmoji = ({ types, className }) => {
  return <div className={`element-emoji ${types} ${className}`} />;
};

ElementEmoji.propTypes = {
  types: PropTypes.oneOf([
    "thoughts",
    "article",
    "lie",
    "contact",
    "goal",
    "designer",
    "image",
    "insights",
    "folio",
    "truth",
    "personal-project",
  ]),
};
