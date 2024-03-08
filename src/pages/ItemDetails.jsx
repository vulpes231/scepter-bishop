import React, { useEffect } from "react";
import { scrollHandler, isMobile } from "../utils";
import { Detail, Header } from "../components";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const { itemName } = useParams();
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
      className="min-h-screen bg-slate-900 text-white flex flex-col lg:flex-row lg:overflow-scroll bonita w-full"
      onWheel={isMobile() ? null : scrollHandler}
    >
      <Header />
      <Detail itemName={itemName} />
    </div>
  );
};

export default ItemDetails;
