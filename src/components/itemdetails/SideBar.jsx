import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import Button from "../Button";
import { nairaSymbol } from "../../utils";

const initialState = {
  quantity: 1,
};
const cartItems = JSON.parse(localStorage.getItem("cartItem"));

const SideBar = ({ closeModal }) => {
  const [qty, setQty] = useState(initialState);
  const [cartContent, setCartContent] = useState(cartItems);

  const myItems = cartContent?.map((item, index) => {
    return (
      <div
        key={index}
        className="flex flex-col gap-1 border-b border-slate-500 border-opacity-20 pb-1"
      >
        <span className="flex justify-between items-center uppercase">
          <p>{item.name}</p>
          <p>{item.price}</p>
        </span>
        <span className="w-full relative flex justify-between items-center">
          <input
            type="number"
            className="w-full border bg-transparent text-center placeholder:font-bold py-2 outline-none"
            placeholder={item.quantity}
            onChange={handleInputChange}
            value={item.quantity}
            name="quantity"
          />
          <FaPlus className="absolute top-4 right-[52%] cursor-pointer text-sm" />
          <FaMinus className="absolute top-4 left-2 cursor-pointer text-sm" />
          <p
            className="w-full text-end uppercase underline text-sm cursor-pointer"
            onClick={() => deleteItemFromCart(item.name)}
          >
            delete
          </p>
        </span>
      </div>
    );
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setQty((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function checkOut() {
    window.location.href = "/checkout";
  }

  function deleteItemFromCart(itemName) {
    console.log(itemName);
    const updatedCart = cartItems.filter((item) => item.name !== itemName);
    setCartContent(updatedCart);
    localStorage.setItem("cartItem", JSON.stringify(updatedCart));
  }

  return (
    <div className="h-screen bg-slate-100 w-full text-slate-900 absolute top-0 p-6 z-50 left-0 flex flex-col gap-8 justify-between">
      <div className="font-ojuju ">
        <div className="flex justify-between text-2xl items-center uppercase mb-10">
          <p className="">shopping cart</p>
          <span className="cursor-pointer" onClick={closeModal}>
            <MdOutlineClose />
          </span>
        </div>
        <div className="flex flex-col gap-8 ">{myItems}</div>
        {/* {cartContent.length === 0 && <p>Your cart is empty.</p>} */}
      </div>
      <div className="flex flex-col gap-4 uppercase">
        <span className="flex justify-between font-extralight text-xs ">
          <p>delivery</p>
          <p>{`${nairaSymbol}1000`}</p>
        </span>
        <span className="flex justify-between font-black">
          <p>total</p>
          <p>{`${nairaSymbol}1000`}</p>
        </span>

        <span className="flex flex-col gap-4">
          <Button
            title={"check out"}
            customClass={"bg-slate-900 text-slate-100 p-4 uppercase rounded-lg"}
            handleClick={checkOut}
          />
          <Button
            title={"continue shopping"}
            customClass={"bg-slate-900 text-slate-100 p-4 uppercase rounded-lg"}
            handleClick={closeModal}
          />
        </span>
      </div>
    </div>
  );
};

export default SideBar;
