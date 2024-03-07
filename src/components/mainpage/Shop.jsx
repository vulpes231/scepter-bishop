import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Quote from "./Quote";
import { myQuotes } from "../../constants";
import { motion } from "framer-motion";
import CustomLink from "../CustomLink";

const Shop = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % myQuotes.length);
    }, 5000); // Display each quote for 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [myQuotes]);

  return (
    <section className="p-6 flex flex-col gap-12 uppercase w-full bg-black lg:min-w-[1000px] lg:items-center lg:justify-center">
      <div className="flex flex-col mt-20 items-center gap-12 lg:w-[500px] lg:mx-auto">
        <h3 className="text-2xl lg:text-4xl text-center font-extralight ">
          For meditations, Raves, Outdoors parties, Creative bursts and more.
        </h3>
        <motion.div
          className="w-full p-4"
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Quote
            quote={myQuotes[index].quote}
            author={myQuotes[index].author}
          />
        </motion.div>
      </div>

      <CustomLink title={"view stock"} />
    </section>
  );
};

export default Shop;
