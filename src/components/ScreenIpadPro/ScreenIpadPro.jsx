/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ScreenIpadPro = ({ darkMode, className, hasFrame = true }) => {
  return (
    <div className={`screen-ipad-pro dark-mode-5-${darkMode} ${className}`}>
      {hasFrame && (
        <div className="frame">
          <div className="i-made-you-looked">
            😎
            <br />I made you looked.
          </div>
          <p className="you-can-have-the">You can have the rest of the empty space here.</p>
        </div>
      )}
    </div>
  );
};

ScreenIpadPro.propTypes = {
  darkMode: PropTypes.bool,
  hasFrame: PropTypes.bool,
};
