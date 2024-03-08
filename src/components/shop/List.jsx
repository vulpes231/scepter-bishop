import React, { useState } from "react";

import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { shopItems } from "../../constants";
import Button from "../Button";

const List = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState(shopItems[currentIndex]);
  const itemsLenght = shopItems.length;

  function goLeft() {
    console.log(currentIndex);
    if (currentIndex === 0) {
      console.log("This is the first Item");
      return;
    } else {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setCurrentItem(shopItems[newIndex]);
    }
  }

  function goRight() {
    console.log(currentIndex);
    if (currentIndex === itemsLenght - 1) {
      console.log("This is the last Item");
      return;
    } else {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setCurrentItem(shopItems[newIndex]);
    }
  }
  return (
    <div className=" w-full flex flex-col items-center p-6 lg:max-w-[900px] lg:mx-auto justify-center h-screen uppercase gap-6 ">
      <div className="flex items-center justify-between w-full gap-3">
        <span className="text-3xl lg:text-4xl cursor-pointer">
          <FaArrowCircleLeft onClick={goLeft} />
        </span>
        <figure className="rounded-lg bg-slate-300 p-1">
          <img
            src={currentItem?.img}
            alt="item-picture"
            className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px]  md:w-[400px] md:h-[400px]"
          />
        </figure>
        <span className="text-3xl lg:text-4xl cursor-pointer">
          <FaArrowCircleRight onClick={goRight} />
        </span>
      </div>
      <div className="text-center w-full lg:text-right flex flex-col gap-4  relative">
        <p className=" font-bold font-indie-flower text-2xl tracking-wider">
          {currentItem?.name}
        </p>
        <p className="font-extralight text-sm">{currentItem?.price}</p>
        <Button
          title={"buy"}
          customClass={
            "border border-2 py-4 mx-auto rounded-md lg:absolute lg:-bottom-20 lg:right-0 w-[250px] uppercase"
          }
        />
      </div>
    </div>
  );
};

export default List;
