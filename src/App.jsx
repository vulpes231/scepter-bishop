import React from "react";
import { Route, Routes } from "react-router-dom";
import { Checkout, ItemDetails, MainPage, Shop } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/item/:itemName" element={<ItemDetails />} />
    </Routes>
  );
};

export default App;
