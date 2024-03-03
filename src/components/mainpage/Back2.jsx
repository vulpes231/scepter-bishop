import React from "react";
import { bg2 } from "../../assets";

const Back2 = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        height: "400px", // Set an explicit height
        display: "block",
      }}
    >
      {/* Your content here */}
    </div>
  );
};

export default Back2;
