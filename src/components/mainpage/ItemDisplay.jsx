import React from "react";
import Item from "./Item";
import { chardonnay, redwine, rose } from "../../assets";

const ItemDisplay = () => {
  const nairaSymbol = "₦";
  return (
    <section className="bg-black p-10 lg:p-6 flex flex-col gap-12 lg:min-w-[1200px] lg:items-center lg:justify-center">
      <div className="flex overflow-x-scroll gap-8 pl-20 md:pl-0 custom-scrollbar lg:overscroll-x-none lg:gap-20">
        <Item
          wineImg={redwine}
          wineName={"mushroom"}
          winePrice={`${nairaSymbol} 15,000 per gram`}
          customClass={"transform rotate-180"}
        />
        <Item
          wineImg={rose}
          wineName={"lsd"}
          winePrice={`${nairaSymbol} 25,000 per gram`}
        />
        <Item
          wineImg={chardonnay}
          wineName={"aderall"}
          winePrice={`${nairaSymbol} 15,000 per tab`}
          customClass={"transform rotate-180"}
        />
      </div>

      <div className="flex items-center gap-4 md:hidden">
        <span>01</span>
        <div className="w-full h-[0.9px] bg-white"></div>
        <span>03</span>
      </div>
    </section>
  );
};

export default ItemDisplay;
