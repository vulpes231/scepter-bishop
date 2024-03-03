import React from "react";
import { Link } from "react-router-dom";

const Item = ({ wineImg, wineName, winePrice }) => {
  return (
    <div className="text-white uppercase flex flex-col gap-8 w-full items-center ">
      <figure>
        <img src={wineImg} alt="" className="w-[50px]" />
      </figure>
      <h3 className="text-2xl font-semibold whitespace-nowrap">{wineName}</h3>
      <p>{winePrice}</p>
      <Link className="p-3 border rounded-md w-[150px] text-center">
        shop now
      </Link>
    </div>
  );
};

export default Item;
