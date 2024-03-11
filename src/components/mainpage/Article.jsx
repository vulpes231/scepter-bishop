import React from "react";
import { Link } from "react-router-dom";

const Article = ({ title, link }) => {
  return (
    <article className="border border-slate-200 p-2 lg:rounded-lg flex items-center flex-col gap-4 rounded-lg lg:w-[180px] lg:h-[180px] justify-center hover:border-2 hover:border-teal-600 hover:rounded-tl-2xl hover:rounded-tr-none hover:rounded-bl-none hover:rounded-br-2xl">
      <div className="flex flex-col h-full w-full justify-between items-center">
        <h3 className="font-semibold font-ojuju h-full w-full">{title}</h3>
        <Link
          to={link}
          target="_blank"
          className="mx-auto font-extralight text-xs py-2 px-3 h-full underline capitalize hover:text-teal-700"
        >
          read more...
        </Link>
      </div>
    </article>
  );
};

export default Article;
