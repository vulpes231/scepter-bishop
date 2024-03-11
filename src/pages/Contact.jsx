import React, { useEffect } from "react";
import { isMobile, scrollHandler } from "../utils";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
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
      className="min-h-screen bg-slate-900 text-white lg:overflow-scroll bonita w-full flex items-center justify-center"
      onWheel={isMobile() ? null : scrollHandler}
    >
      <div className="w-full p-4 flex flex-col gap-6 lg:max-w-[700px] lg:mx-auto">
        <h3 className="text-xl uppercase font-black">send us a message.</h3>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
