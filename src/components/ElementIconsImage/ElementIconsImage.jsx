/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ElementEmoji } from "../ElementEmoji";
import "./style.css";

export const ElementIconsImage = ({ darkMode, shape, className, visible = true }) => {
  return (
    <div className={`element-icons-image ${shape} dark-mode-10-${darkMode} ${className}`}>
      {visible && (
        <ElementEmoji
          className={`${shape === "square" ? "class" : "class-2"}`}
          types={shape === "square" ? "image" : "goal"}
        />
      )}
    </div>
  );
};

ElementIconsImage.propTypes = {
  darkMode: PropTypes.bool,
  shape: PropTypes.oneOf(["round", "square"]),
  visible: PropTypes.bool,
};
