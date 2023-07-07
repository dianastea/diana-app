/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const ElementControlsButtons = ({
  darkMode,
  buttonTypes,
  states,
  primaryClassName,
  text = "Primary",
  className,
  text1 = "Secondary",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    darkMode: darkMode,

    buttonTypes: buttonTypes || "primary",
    states: states || "default",
  });

  return (
    <div
      className={`element-controls-buttons dark-mode-1-${state.darkMode} ${state.states} ${state.buttonTypes} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`div ${primaryClassName}`}>
        {state.buttonTypes === "primary" && <>{text}</>}

        {state.buttonTypes === "secondary" && <>{text1}</>}
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        states: "hover-over",
      };

    case "mouse_leave":
      return {
        ...state,
        states: "default",
      };

    case "click":
      return {
        ...state,
        states: "default",
      };
  }

  return state;
}

ElementControlsButtons.propTypes = {
  darkMode: PropTypes.bool,
  buttonTypes: PropTypes.oneOf(["primary", "secondary"]),
  states: PropTypes.oneOf(["hover-over", "default"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
