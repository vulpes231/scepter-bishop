import React from "react";
import { Link } from "react-router-dom";

const Craft = () => {
  return (
    <section className="bg-black flex flex-col gap-12 p-6 uppercase items-center text-center lg:min-w-[900px]">
      <h2 className="text-6xl font-black ">crafted wines</h2>
      <p className="whitespace-pre ">
        for any <br /> occassion
      </p>

      <p className="font-thin text-sm ">
        each i, the queen wine is made from premium noble vines harvested and
        crafted in columbia valley, wa
      </p>

      <Link className="py-3 px-8 border-2 rounded-md mb-10">
        shop i, the queen
      </Link>
    </section>
  );
};

export default Craft;
