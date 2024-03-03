import React from "react";
import Item from "./Item";
import { chardonnay, redwine, rose } from "../../assets";

const ItemDisplay = () => {
  return (
    <section className="bg-black flex overflow-x-scroll gap-8 p-6">
      <Item
        wineImg={redwine}
        wineName={"red wine blend"}
        winePrice={"$24.99"}
      />
      <Item wineImg={rose} wineName={"rosé"} winePrice={"$24.99"} />
      <Item wineImg={chardonnay} wineName={"chardonnay"} winePrice={"$24.99"} />
    </section>
  );
};

export default ItemDisplay;
