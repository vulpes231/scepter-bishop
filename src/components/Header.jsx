import React, { useState } from "react";

import { HiBeaker, HiMenu } from "react-icons/hi";
import { BsCart2 } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import MobileMenu from "./mainpage/MobileMenu";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header className="p-6 border-b border-white fixed top-0 w-full">
      <nav className="flex justify-between items-center">
        <span>
          <HiBeaker className="text-3xl" />
        </span>
        <span onClick={handleToggle}>
          {!toggle ? (
            <HiMenu className="text-2xl font-light" />
          ) : (
            <MdCancel className="text-2xl font-light" />
          )}
        </span>
        <span className="flex items-center">
          <BsCart2 className="text-2xl font-light" />
          (0)
        </span>
        {/* mobile menu */}
        <MobileMenu toggle={toggle} />
      </nav>
    </header>
  );
};

export default Header;