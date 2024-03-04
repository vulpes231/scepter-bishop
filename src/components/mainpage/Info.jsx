import React from "react";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <section className="bg-black flex  p-6 uppercase items-center text-center lg:min-w-[1450px] lg:justify-center ">
      <div className="flex flex-col gap-12 lg:justify-between lg:h-full ">
        <div className="flex flex-col gap-3 items-center lg:mt-40 ">
          <h2 className="text-3xl font-semibold  mt-28 lg:text-6xl ">
            like what you see? <br /> discover our wines
          </h2>
          <Link className="py-3 px-8 lg:py-4 lg:px-9 border-2 rounded-md w-[180px] ">
            shop now
          </Link>
        </div>
        <div className="flex flex-col items-center text-sm gap-3 lg:flex-row lg:gap-40 lg:pl-10">
          <span className="flex gap-2">
            <p className="text-zinc-400">2024&copy;scepter and sword</p>
            <p>legal terms</p>
          </span>
          <address className="flex flex-col gap-3 lg:flex-row lg:gap-40">
            <p>2270 Camino Vida Roble, Carlsbad, CA 92011</p>

            <span className="flex gap-2">
              <p>
                <a href="mailto:hello@scepterandsword.com">
                  hello@scepterandsword.com
                </a>
              </p>
              <p>442.244.0257</p>
            </span>
          </address>
        </div>
      </div>
    </section>
  );
};

export default Info;
