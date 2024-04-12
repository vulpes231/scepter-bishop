import React, { useEffect } from "react";
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
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { scrollHandler, isMobile } from "../utils";

const MainPage = () => {
  // Prevent default vertical scrolling behavior for desktop
  useEffect(() => {
    const container = document.querySelector(".bonita");
    if (!isMobile()) {
      const preventDefault = (event) => {
        event.preventDefault();
      };

      container.addEventListener("wheel", preventDefault, { passive: false });

      return () => {
        container.removeEventListener("wheel", preventDefault);
      };
    }
  }, []);

  return (
    <div
      className="min-h-screen bg-slate-900 text-white flex flex-col lg:flex-row lg:overflow-scroll bonita"
      onWheel={isMobile() ? null : scrollHandler}
    >
      {/* <Header /> */}
      <Hero />
      <Info />
      <Shop />
      <Back1 />
      <ItemDisplay />
      <Back2 />
    </div>
  );
};

export default MainPage;
