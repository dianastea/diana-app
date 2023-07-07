/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const DarkModeFalseWrapper = ({
  darkMode,
  buttonTypes,
  states,
  className,
  primaryClassName,
  text = "Secondary",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    darkMode: darkMode,

    buttonTypes: buttonTypes || "primary",
    states: states || "default",
  });

  return (
    <div
      className={`dark-mode-false-wrapper dark-mode-3-${state.darkMode} states-${state.states} button-types-0-${state.buttonTypes} ${className}`}
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
      <div className={`primary-2 ${primaryClassName}`}>
        {state.buttonTypes === "primary" && <>Primary</>}

        {state.buttonTypes === "secondary" && <>{text}</>}
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

DarkModeFalseWrapper.propTypes = {
  darkMode: PropTypes.bool,
  buttonTypes: PropTypes.oneOf(["primary", "secondary"]),
  states: PropTypes.oneOf(["hover-over", "default"]),
  text: PropTypes.string,
};
