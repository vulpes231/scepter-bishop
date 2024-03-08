import React from "react";

const Button = ({ title, handleClick, customClass }) => {
  return (
    <button onClick={handleClick} className={customClass}>
      {title}
    </button>
  );
};

export default Button;
