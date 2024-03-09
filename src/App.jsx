import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Checkout, ItemDetails, MainPage, Shop } from "./pages";
import { CartIcon, Header, SideBar } from "./components";

const App = () => {
  const [showCartModal, setshowCartModal] = useState(false);
  const cartItems = JSON.parse(localStorage.getItem("cartItem"));

  function closeCartModal() {
    console.log("clicked");
    setshowCartModal(false);
  }

  function openCartModal() {
    console.log("clicked");
    setshowCartModal(true);
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/item/:itemName" element={<ItemDetails />} />
      </Routes>
      <span className="hidden lg:flex gap-3 items-center absolute top-0 right-0 uppercase p-6 text-slate-100">
        <Link className="capitalize text-lg font-extralight">
          checkout anonymously
        </Link>
        <p>|</p>
        <CartIcon cartItems={cartItems} handleClick={openCartModal} />
      </span>
      {showCartModal && <SideBar closeModal={closeCartModal} />}
    </>
  );
};

export default App;
