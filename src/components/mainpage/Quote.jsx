import React from "react";

const Quote = ({ quote, author }) => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-center text-xs font-ojuju font-extralight leading-6 tracking-wider">
        {quote}
      </p>
      <p className="text-right capitalize font-space-grotesk">{`- ${author}`}</p>
    </div>
  );
};

export default Quote;
