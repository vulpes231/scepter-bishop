import React from "react";
import {
  Back1,
  Back2,
  Craft,
  Header,
  Hero,
  Info,
  ItemDisplay,
  Shop,
} from "../components";

const MainPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <Hero />
      <Shop />
      <Back1 />
      <ItemDisplay />
      <Craft />
      <Back2 />
      <Info />
    </div>
  );
};

export default MainPage;
