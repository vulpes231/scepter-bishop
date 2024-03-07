import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="p-6 uppercase h-screen w-full lg:min-w-[1800px] gap-6">
      <div className="flex flex-col mt-40 h-full gap-6 lg:items-start lg:pl-28 lg:justify-end lg:mt-0 lg:gap-12">
        <h3 className="text-5xl font-black text-center lg:text-left lg:text-7xl">
          Unleash the inner sheesh with <br className="hidden lg:flex" />
          the very best psychedelic experiences.
        </h3>

        <span className="flex flex-col gap-6 lg:flex-row lg:pb-10 lg:items-start lg:gap-[300px]">
          <Link className="py-3 px-8 mx-auto rounded-md border-2">
            view stock
          </Link>

          <p className="text-center font-thin text-sm mt-40 lg:mt-0">
            We deliver nationwide.
            <br className="hidden lg:flex" /> Lagos/Abuja same day deliveries.
          </p>

          <p className="hidden lg:flex">Columbia Valley</p>
        </span>
      </div>
    </section>
  );
};

export default Hero;
