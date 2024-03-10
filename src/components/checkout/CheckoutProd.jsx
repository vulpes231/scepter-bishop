import React from "react";
import { nairaSymbol } from "../../utils";

const CheckoutProd = ({ cartItems }) => {
  const myProducts = cartItems?.map((prod, index) => {
    return (
      <article
        key={index}
        className="flex items-center justify-between px-2 py-4 uppercase text-xs font-space-grotesk border-b"
      >
        <span>{prod.name}</span>
        <span>{prod.amount.quantity}</span>
        <span>{`${nairaSymbol} ${prod.total}`}</span>
      </article>
    );
  });
  return (
    <div>
      <article className="flex items-center justify-between bg-slate-100 text-slate-900 p-2 rounded-md uppercase text-xs font-black mb-5">
        <span>product</span>
        <span>quantity</span>
        <span>total</span>
      </article>
      {myProducts}
    </div>
  );
};

export default CheckoutProd;
