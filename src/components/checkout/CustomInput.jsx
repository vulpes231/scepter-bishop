import React from "react";

const CustomInput = ({
  type,
  placeholder,
  value,
  handleChange,
  name,
  customClass,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      name={name}
      className={`w-full ${customClass} px-2 py-2 placeholder:uppercase bg-opacity-95 bg-white border-b placeholder:text-xs outline-none text-slate-900`}
    />
  );
};

export default CustomInput;
