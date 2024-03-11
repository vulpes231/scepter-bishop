import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Modal = () => {
  const goToShop = () => {
    window.location.href = "/shop";
  };
  return (
    <div className="fixed bg-slate-900 h-screen z-50 top-0 right-0 left-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 text-center">
        <h3 className="font-bold">order intitiated.</h3>
        <BsCheckCircleFill className="text-3xl text-green-500" />
        <p className="leading-5 text-sm font-extralight">
          Your order has been placed kindly follow the link below to complete
          your order.
        </p>
        <Link
          to={"https://wa.me/message/5Y3RIBA4BVDYN1"}
          className="underline text-xs"
          target="_blank"
        >
          complete order
        </Link>
        <button onClick={goToShop}>go back</button>
      </div>
    </div>
  );
};

export default Modal;
