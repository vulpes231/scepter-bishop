import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink";

const Hero = () => {
  return (
    <section className="p-6 uppercase h-screen w-full lg:min-w-[1800px] gap-6 hero-img">
      <div className="flex flex-col mt-40 h-full gap-6 lg:items-start lg:pl-28 lg:justify-end lg:mt-0 lg:gap-12">
        <h3 className="text-3xl font-black text-center lg:text-left lg:text-5xl">
          Unleash the inner <br className="hidden lg:flex" /> sheesh with the
          very best <br className="hidden lg:flex" />
          psychedelic experiences.
        </h3>

        <span className="flex flex-col gap-6 lg:flex-row lg:pb-10 lg:items-start lg:gap-[300px]">
          <CustomLink title={"view stock"} path={"/shop"} />

          <p className="text-center font-thin text-sm mt-40 lg:mt-0">
            We deliver nationwide.
            <br className="hidden lg:flex" /> Lagos/Abuja same day deliveries.
          </p>

          <p className="hidden lg:flex font-dancing-script capitalize lg:text-2xl">
            Lagos Nigeria
          </p>
        </span>
      </div>
    </section>
  );
};

export default Hero;
