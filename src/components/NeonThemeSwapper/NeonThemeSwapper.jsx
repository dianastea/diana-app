/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Gradients } from "../Gradients";
import "./style.css";

export const NeonThemeSwapper = ({
  className,
  gradientsTypeClassName,
  gradientsType = "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/-gradients-1.svg",
}) => {
  return (
    <div className={`neon-theme-swapper ${className}`}>
      <Gradients img={gradientsType} type="one" typeClassName={gradientsTypeClassName} />
    </div>
  );
};

NeonThemeSwapper.propTypes = {
  gradientsType: PropTypes.string,
};
