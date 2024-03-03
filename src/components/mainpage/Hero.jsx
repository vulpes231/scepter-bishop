import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="p-6 flex flex-col justify-between uppercase h-screen w-full">
      <div className="flex flex-col mt-40 items-center gap-12">
        <h3 className="text-5xl text-center font-black">
          uncork your inner queen
        </h3>
        <Link className="p-4 border font-thin">shop wines</Link>
      </div>
      <p className="text-center font-thin text-sm">
        majestic wines made from noble vines crafted in columbia valley, wa
      </p>
    </section>
  );
};

export default Hero;
