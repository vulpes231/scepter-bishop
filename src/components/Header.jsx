import React, { useState } from "react";

import { HiCube, HiMenu } from "react-icons/hi";
import { BsCart2, BsInstagram, BsTelegram, BsWhatsapp } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import MobileMenu from "./mainpage/MobileMenu";
import { Link } from "react-router-dom";
import SideBar from "./itemdetails/SideBar";
import CartIcon from "./CartIcon";
import SocialIcon from "./SocialIcon";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [showCartModal, setshowCartModal] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  function closeMenu() {
    setToggle(false);
  }

  function openCartModal() {
    console.log("clicked");
    setshowCartModal(true);
  }

  function closeCartModal() {
    console.log("clicked");
    setshowCartModal(false);
  }

  const cartItems = JSON.parse(localStorage.getItem("cartItem"));

  return (
    <header className="p-6 border-b border-white fixed top-0 w-full z-40 lg:w-[70px] lg:h-screen lg:border-r-2 lg:z-50 text-white">
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
        <CartIcon
          cartItems={cartItems}
          customClass={"lg:hidden"}
          handleClick={openCartModal}
        />
        <span className="lg:flex lg:flex-col gap-4 items-center hidden ">
          <SocialIcon
            icon={<BsInstagram />}
            path={
              "https://www.instagram.com/psychedelicsng?igsh=MXF3bGdrb2RjYnE1Mw=="
            }
          />
          <SocialIcon icon={<BsWhatsapp />} path={""} />
          <SocialIcon
            icon={<BsTelegram />}
            path={"https://t.me/psychedelicthrills"}
          />
        </span>
        {/* mobile menu */}
        <MobileMenu toggle={toggle} closeMenu={closeMenu} />
        {/* cartmodal */}
        {showCartModal && <SideBar closeModal={closeCartModal} />}
      </nav>
    </header>
  );
};

export default Header;
