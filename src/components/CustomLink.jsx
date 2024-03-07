import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ path, title }) => {
  return (
    <Link
      to={path}
      className="py-3 px-20 lg:px-9 mx-auto rounded-md border-2 hover:bg-white hover:text-slate-900"
    >
      {title}
    </Link>
  );
};

export default CustomLink;
