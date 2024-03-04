import React from "react";
import { Link } from "react-router-dom";

const Craft = () => {
  return (
    <section className="bg-black  p-6 uppercase flex items-center text-center lg:min-w-[900px] lg:justify-center">
      <div className="flex flex-col gap-12 lg:w-[500px]">
        <h2 className="text-6xl font-black ">
          crafted <br className="hidden lg:flex" /> wines
        </h2>
        <p className="whitespace-pre ">
          for any <br /> occassion
        </p>

        <p className="font-thin text-sm lg:text-md ">
          each i, the queen wine is made from premium noble vines harvested and
          crafted in columbia valley, wa
        </p>

        <Link className="py-3 px-8 lg:py-4 lg:px-9 border-2 rounded-md mb-10 mx-auto">
          shop i, the queen
        </Link>
      </div>
    </section>
  );
};

export default Craft;
