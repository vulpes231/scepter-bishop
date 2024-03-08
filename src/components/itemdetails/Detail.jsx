import React, { useState } from "react";
import { shopItems } from "../../constants";
import { FaMinus, FaPlus } from "react-icons/fa";
import SideBar from "./SideBar";

const initialState = {
  quantity: 1,
};

const Detail = ({ itemName }) => {
  let cart = [];
  const [qty, setQty] = useState(initialState);
  const [showCartModal, setShowCartModal] = useState(false);

  const item = shopItems.find((itm) => itm.name === itemName);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setQty((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const itemPrice = item.price.slice(2, item.price.length);
  const totalCost = parseInt(itemPrice) * parseInt(qty.quantity);

  function addToCart(e) {
    e.preventDefault();

    const formData = {
      name: item.name,
      amount: qty,
      price: item.price,
      total: totalCost,
    };

    cart.push(formData);
    setShowCartModal(true);

    console.log(cart);
  }

  function closeCartModal() {
    console.log("clicked");
    setShowCartModal(false);
  }

  return (
    <div className="p-6 flex flex-col w-full items-center justify-center h-screen gap-6 uppercase">
      <figure className="rounded-lg bg-slate-300 p-1">
        <img src={item?.img} alt="item-image" className="w-[200px] h-[200px]" />
      </figure>
      <div className="flex flex-col gap-4 w-full">
        <h3>{item?.name}</h3>
        <p className="font-extralight">{item?.price}</p>
        <form action="" className="flex flex-col gap-8 ">
          <span className="w-full relative">
            <input
              type="number"
              className="w-full border-b-2 bg-transparent text-center placeholder:font-bold py-3 outline-none"
              placeholder={qty.quantity}
              onChange={handleInputChange}
              value={qty.quantity}
              name="quantity"
            />
            <FaPlus className="absolute top-4 right-2 cursor-pointer" />
            <FaMinus className="absolute top-4 left-2 cursor-pointer" />
          </span>
          <button
            onClick={addToCart}
            className="border-2 p-4 rounded-md uppercase"
          >
            Add to cart
          </button>
        </form>
      </div>
      {showCartModal && <SideBar closeModal={closeCartModal} />}
    </div>
  );
};

export default Detail;
