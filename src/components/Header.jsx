import React, { useState } from "react";

import { HiCube, HiMenu } from "react-icons/hi";
import { BsCart2, BsInstagram, BsTelegram, BsWhatsapp } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import MobileMenu from "./mainpage/MobileMenu";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  function closeMenu() {
    setToggle(false);
  }

  const cartItems = localStorage.getItem("cart");
  console.log(cartItems);

  return (
    <header className="p-6 border-b border-white fixed top-0 w-full z-40 lg:w-[60px] lg:h-screen lg:border-r-2 lg:z-50 text-white">
      <nav className="flex justify-between items-center lg:flex-col lg:h-full ">
        <Link to={"/"}>
          <HiCube className="text-3xl" />
        </Link>
        <span onClick={handleToggle} className="cursor-pointer">
          {!toggle ? (
            <HiMenu className="text-2xl font-light" />
          ) : (
            <MdCancel className="text-2xl font-light" />
          )}
        </span>
        <span className="flex items-center lg:hidden ">
          <BsCart2 className="text-2xl font-light" />
          (0)
        </span>
        <span className="lg:flex lg:flex-col gap-4 items-center hidden ">
          <Link
            to={
              "https://www.instagram.com/psychedelicsng?igsh=MXF3bGdrb2RjYnE1Mw=="
            }
            target="_blank"
          >
            <BsInstagram />
          </Link>

          <Link to={""} target="_blank">
            <BsWhatsapp />
          </Link>
          <Link to={"https://t.me/psychedelicthrills"} target="_blank">
            <BsTelegram />
          </Link>
        </span>
        {/* mobile menu */}
        <MobileMenu toggle={toggle} closeMenu={closeMenu} />
      </nav>
    </header>
  );
};

export default Header;
