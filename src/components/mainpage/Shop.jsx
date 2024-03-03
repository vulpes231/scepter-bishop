import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <section className="p-6 flex flex-col gap-12 uppercase w-full bg-black lg:min-w-[1000px]">
      <div className="flex flex-col mt-20 items-center gap-12">
        <h3 className="text-3xl text-center font-extralight ">
          issue and edict. bestow an honor. grant an audience
        </h3>
        <p className="text-center text-sm">
          scepter &amp; sword wine co. celebrates the remarkable women who ruled
          the lands and led their people. the words i, the queen, sealed her
          orders while the scepter symbolized her absolute power. now the
          scepter is in your hands.
        </p>
      </div>

      <Link className="py-3 px-8 border-2 mx-auto mb-20 rounded-md text-sm">
        shop our wines
      </Link>
    </section>
  );
};

export default Shop;