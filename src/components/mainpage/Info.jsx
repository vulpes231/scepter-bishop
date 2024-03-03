import React from "react";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <section className="bg-black flex flex-col gap-12 p-6 uppercase items-center text-center lg:min-w-[1450px]">
      <h2 className="text-3xl font-semibold  mt-28 ">
        like what you see? <br /> discover our wines
      </h2>
      <Link className="p-3 border-2 rounded-md w-[180px]">shop now</Link>
      <div className="flex flex-col items-center text-sm gap-3">
        <span className="flex gap-2">
          <p className="text-zinc-400">2024&copy;scepter and sword</p>
          <p>legal terms</p>
        </span>
        <address className="flex flex-col gap-3">
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
    </section>
  );
};

export default Info;
