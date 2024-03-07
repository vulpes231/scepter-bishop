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
    <section className="bg-black flex  p-6 uppercase items-center text-center lg:min-w-[1450px] lg:justify-center ">
      <div className="flex flex-col gap-12 lg:h-full items-center ">
        <div className="flex flex-col gap-3 items-center ">
          <h3>tips and facts</h3>
          <h2 className="text-3xl font-semibold  mt-28 lg:text-6xl ">
            knowledge is the first step to enlightenment, Seek it below.
          </h2>
        </div>

        {/* article grid */}
        <div className="grid lg:grid-cols-5 p-6 lg:h-[400px] overflow-y-auto h-[200px] lg:text-sm gap-6">
          {myArticles}
        </div>
      </div>
    </section>
  );
};

export default Info;
