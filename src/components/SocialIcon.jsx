import React from "react";
import { Link } from "react-router-dom";

const SocialIcon = ({ icon, path }) => {
  return (
    <Link to={path} target="_blank">
      {icon}
    </Link>
  );
};

export default SocialIcon;
