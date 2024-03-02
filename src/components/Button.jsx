import React from "react";

const Button = ({ title, handleClick }) => {
  return (
    <button onClick={handleClick} className="">
      {title}
    </button>
  );
};

export default Button;
