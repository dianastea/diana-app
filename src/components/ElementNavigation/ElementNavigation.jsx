/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const ElementNavigation = ({
  darkMode,
  states,
  optionClassName,
  text = "Option",
  highlighterClassName,
  highlighter = "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/highlighter-8.svg",
  className,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    darkMode: darkMode,

    states: states || "hover",
  });

  return (
    <div
      className={`element-navigation ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="buttons">
        <div className={`option dark-mode-${state.darkMode} ${state.states} ${optionClassName}`}>{text}</div>
      </div>
      <img
        className={`highlighter states-${state.states} dark-mode-0-${state.darkMode} ${highlighterClassName}`}
        alt="Highlighter"
        src={
          !state.darkMode && state.states === "selected-default"
            ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/highlighter-10.svg"
            : !state.darkMode && state.states === "selected-hover"
            ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/highlighter-9.svg"
            : state.states === "unselected"
            ? highlighter
            : state.darkMode && state.states === "hover"
            ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/highlighter-7.svg"
            : state.darkMode && state.states === "selected-default"
            ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/highlighter-6.svg"
            : state.darkMode && state.states === "selected-hover"
            ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/highlighter-5.svg"
            : "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/highlighter-11.svg"
        }
      />
    </div>
  );
};

function reducer(state, action) {
  if (state.darkMode === false && state.states === "hover") {
    switch (action) {
      case "click":
        return {
          darkMode: false,
          states: "selected-default",
        };

      case "mouse_leave":
        return {
          darkMode: false,
          states: "unselected",
        };
    }
  }

  if (state.darkMode === false && state.states === "selected-default") {
    switch (action) {
      case "mouse_enter":
        return {
          darkMode: false,
          states: "selected-hover",
        };
    }
  }

  if (state.darkMode === false && state.states === "selected-hover") {
    switch (action) {
      case "mouse_leave":
        return {
          darkMode: false,
          states: "selected-default",
        };

      case "click":
        return {
          darkMode: false,
          states: "selected-default",
        };
    }
  }

  if (state.darkMode === false && state.states === "unselected") {
    switch (action) {
      case "mouse_enter":
        return {
          darkMode: false,
          states: "hover",
        };
    }
  }

  if (state.darkMode === true && state.states === "hover") {
    switch (action) {
      case "click":
        return {
          darkMode: true,
          states: "selected-default",
        };

      case "mouse_leave":
        return {
          darkMode: true,
          states: "unselected",
        };
    }
  }

  if (state.darkMode === true && state.states === "selected-default") {
    switch (action) {
      case "mouse_enter":
        return {
          darkMode: true,
          states: "selected-hover",
        };
    }
  }

  if (state.darkMode === true && state.states === "selected-hover") {
    switch (action) {
      case "mouse_leave":
        return {
          darkMode: true,
          states: "selected-default",
        };

      case "click":
        return {
          darkMode: true,
          states: "selected-default",
        };
    }
  }

  if (state.darkMode === true && state.states === "unselected") {
    switch (action) {
      case "mouse_enter":
        return {
          darkMode: true,
          states: "hover",
        };
    }
  }

  return state;
}

ElementNavigation.propTypes = {
  darkMode: PropTypes.bool,
  states: PropTypes.oneOf(["unselected", "selected-hover", "selected-default", "hover"]),
  text: PropTypes.string,
  highlighter: PropTypes.string,
};
