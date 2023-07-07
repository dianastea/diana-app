/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Gradients = ({
  type,
  typeClassName,
  img = "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/type-01.svg",
}) => {
  return (
    <>
      {["four", "one", "three"].includes(type) && (
        <img
          className={`gradients type type-${type} ${typeClassName}`}
          alt="Type"
          src={
            type === "three"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/type-03.svg"
              : type === "four"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/type-04.svg"
              : img
          }
        />
      )}

      {type === "two" && (
        <div className={`gradients gradient-wrapper ${typeClassName}`}>
          <div className="gradient">
            <div className="overlap-group">
              <div className="eclipse" />
              <div className="planet" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Gradients.propTypes = {
  type: PropTypes.oneOf(["two", "four", "three", "one"]),
  img: PropTypes.string,
};
