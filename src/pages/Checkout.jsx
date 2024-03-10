import React, { useEffect } from "react";
import { scrollHandler, isMobile } from "../utils";

const Checkout = () => {
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
      <div>
        <h3 className="mt-32">This page is under construction...</h3>
      </div>
    </div>
  );
};

export default Checkout;
