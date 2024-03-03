import React from "react";
import { Header, Hero, ItemDisplay, Shop } from "../components";

const MainPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <Hero />
      <Shop />
      <ItemDisplay />
    </div>
  );
};

export default MainPage;
