import React from "react";
import { herovid } from "../../assets";

const Back2 = () => {
  return (
    <section className="h-auto lg:h-screen lg:min-w-[1200px]">
      <video
        autoplay
        muted
        loop
        controls
        className="w-full h-full object-cover "
      >
        <source src={herovid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Back2;
