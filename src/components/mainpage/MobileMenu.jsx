import React from "react";
import { mobileMenuLinks } from "../../constants";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

const MobileMenu = ({ toggle, closeMenu }) => {
  const menuLinks = mobileMenuLinks.map((link) => {
    return (
      <Link
        key={link.id}
        className="capitalize text-3xl flex flex-col items-center justify-center "
        onClick={closeMenu}
        to={link.path}
      >
        <span className="text-sm">{link.number}</span>
        <span>{link.title}</span>
      </Link>
    );
  });
  return (
    <div
      className={
        toggle
          ? "absolute h-screen w-full lg:min-w-[1800px] lg:h-screen top-[77px] lg:top-0 left-0 flex flex-col bg-slate-900 bg-opacity-90 items-center justify-center lg:items-start gap-12 lg:z-20 lg:ml-[60px]"
          : "hidden"
      }
    >
      <span className="flex flex-col gap-8 lg:ml-[600px]">{menuLinks}</span>
      <div className="h-[1px] w-full bg-white mt-10 md:hidden"></div>
      <span className="flex justify-between w-full px-12 items-center -mt-7 md:hidden">
        <FaInstagram />
        <Link to={"/signin"} className="uppercase">
          Sign In
        </Link>
      </span>
      <div className="hidden lg:flex justify-between text-center lg:ml-[650px]">
        <p className="text-center font-thin text-sm mt-40 lg:mt-0">
          We deliver nationwide.
          <br className="hidden lg:flex" /> Lagos/Abuja same day deliveries.
        </p>
      </div>
    </div>
  );
};

export default MobileMenu;
