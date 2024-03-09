import React from "react";
import { BsCart2 } from "react-icons/bs";

const CartIcon = ({ handleClick, customClass }) => {
  let cartItems = JSON.parse(localStorage.getItem("cartItem"));
  return (
    <span
      className={`flex items-center ${customClass} cursor-pointer `}
      onClick={handleClick}
    >
      <BsCart2 className="text-2xl font-light" />
      {cartItems?.length ? `(${cartItems.length})` : "(0)"}
    </span>
  );
};

export default CartIcon;
