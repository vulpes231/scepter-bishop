import React from "react";
import { Route, Routes } from "react-router-dom";
import { Checkout, MainPage, Shop } from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;
