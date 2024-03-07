import React from "react";
import { Link } from "react-router-dom";
import { blogArticles } from "../../constants";
import Article from "./Article";

const Info = () => {
  const myArticles = blogArticles.map((article) => {
    return (
      <Article key={article.id} title={article.title} link={article.link} />
    );
  });
  return (
    <section className="bg-black flex p-6 uppercase items-center text-center lg:min-w-[1450px] lg:justify-center ">
      <div className="flex flex-col gap-12 lg:gap-3 lg:h-full items-center ">
        <div className="flex flex-col gap-3 items-center mt-10 ">
          <h3>tips and facts</h3>
          <h2 className="text-3xl font-semibold  mt-28 lg:text-5xl ">
            knowledge is the first step <br className="hidden lg:flex" /> to
            enlightenment, Seek it below.
          </h2>
        </div>

        {/* article grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 p-6 lg:h-[450px] overflow-y-auto h-[200px] lg:text-sm gap-6 mt-10">
          {myArticles}
        </div>
      </div>
    </section>
  );
};

export default Info;
