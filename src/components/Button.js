import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, onHover, type = "button" }) => {
  return (
    <button onHover={onHover} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string
};

export default Button;
