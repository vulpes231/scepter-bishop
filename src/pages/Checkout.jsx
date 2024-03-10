import React, { useEffect } from "react";
import { scrollHandler, isMobile } from "../utils";
import CheckoutForm from "../components/checkout/CheckoutForm";

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
      <div className="flex flex-col items-center w-full mt-24 p-6 lg:max-w-[900px] lg:mx-auto">
        <CheckoutForm />
      </div>
    </div>
  );
};

export default Checkout;
