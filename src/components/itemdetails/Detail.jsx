import React, { useEffect, useState } from "react";
import { shopItems } from "../../constants";
import { FaMinus, FaPlus } from "react-icons/fa";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  quantity: 1,
};

const Detail = ({ itemName }) => {
  const cart = JSON.parse(localStorage.getItem("cartItem")) || [];
  const [myCart, setMyCart] = useState(cart);
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

  const totalCost = parseInt(item.price.slice(2)) * parseInt(qty.quantity);

  function addToCart(e) {
    e.preventDefault();

    const formData = {
      name: item.name,
      amount: qty,
      price: item.price,
      total: totalCost,
    };

    let isDuplicate = false;

    // Check if item exists in the cart before adding
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === formData.name) {
        console.log("Duplicate");
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      const updatedCart = [...cart, formData];
      localStorage.setItem("cartItem", JSON.stringify(updatedCart));
      setMyCart(updatedCart);
      setShowCartModal(true);
    }
  }

  function closeCartModal() {
    console.log("clicked");
    setShowCartModal(false);
  }

  function increaseQty() {
    setQty((prevQty) => ({ ...prevQty, quantity: prevQty.quantity + 1 }));
  }

  function decreaseQty() {
    if (qty.quantity > 1) {
      setQty((prevQty) => ({ ...prevQty, quantity: prevQty.quantity - 1 }));
    }
  }

  return (
    <div className="p-6 flex flex-col w-full items-center justify-center h-screen gap-6 uppercase lg:flex-row lg:gap-16">
      <figure className="rounded-lg bg-slate-300 p-1 lg:ml-20 lg:w-full">
        <img
          src={item?.img}
          alt="item-image"
          className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-full lg:h-[400px]"
        />
      </figure>
      <div className="flex flex-col gap-4 w-full">
        <span className="text-center lg:text-left lg:px-6">
          <h3 className="text-xl">{item?.name}</h3>
          <p className="font-extralight">{item?.price}</p>
        </span>
        <form action="" className="flex flex-col gap-8 lg:p-6 ">
          <span className="w-full relative md:w-[40%] md:mx-auto lg:w-full">
            <input
              type="number"
              className="w-full border-b-2 bg-transparent text-center placeholder:font-bold py-3 outline-none "
              placeholder={qty.quantity}
              onChange={handleInputChange}
              value={qty.quantity}
              name="quantity"
              inputMode="numeric"
              pattern="[0-9]*"
            />
            <FaPlus
              className="absolute top-4 right-2 cursor-pointer"
              onClick={increaseQty}
            />
            <FaMinus
              className="absolute top-4 left-2 cursor-pointer"
              onClick={decreaseQty}
            />
          </span>
          <button
            onClick={addToCart}
            className="border-2 p-4 rounded-md uppercase w-full md:w-[40%] md:mx-auto lg:w-full font-extralight hover:bg-slate-50 hover:text-slate-900"
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
