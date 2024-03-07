import React from "react";
import { Link } from "react-router-dom";

const Article = ({ title, link }) => {
  return (
    <article className="border border-slate-200 p-6 lg:rounded-lg flex items-center flex-col gap-4 rounded-lg lg:w-[180px] lg:h-[180px] justify-center">
      <div className="flex flex-col justify-between h-full">
        <h3 className="font-bold">{title}</h3>
        <Link
          to={link}
          target="_blank"
          className="border rounded-md mb-10 mx-auto font-thin text-xs py-2 px-3"
        >
          read more...
        </Link>
      </div>
    </article>
  );
};

export default Article;
