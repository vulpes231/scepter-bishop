import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <section className="p-6 flex flex-col gap-12 uppercase w-full bg-black lg:min-w-[1000px] lg:items-center lg:justify-center">
      <div className="flex flex-col mt-20 items-center gap-12 lg:w-[500px] lg:mx-auto">
        <h3 className="text-3xl lg:text-5xl text-center font-extralight ">
          For meditations,Raves,Outdoors parties,Creative bursts and more.
        </h3>
        <p className="text-center text-sm">
          Psychedelics show you what’s in and on your mind, those subconscious
          thoughts and feelings that are hidden, covered up, forgotten, out of
          sight, maybe even completely unexpected, but nevertheless imminently
          present.
        </p>
      </div>

      <Link className="py-3 px-8 lg:px-9 lg:py-4 border-2 mx-auto mb-20 rounded-md text-sm">
        view stock
      </Link>
    </section>
  );
};

export default Shop;
