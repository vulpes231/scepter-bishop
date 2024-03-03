import React from "react";
import { mobileMenuLinks } from "../../constants";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

const MobileMenu = ({ toggle }) => {
  const menuLinks = mobileMenuLinks.map((link) => {
    return (
      <Link
        key={link.id}
        className="capitalize text-4xl flex flex-col items-center justify-center "
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
          ? "absolute h-screen w-full lg:min-w-[1100px] lg:h-full top-[77px] lg:top-0 left-0 flex flex-col bg-slate-900 bg-opacity-90 items-center justify-center gap-12 lg:z-20 lg:ml-[85px]"
          : "hidden"
      }
    >
      <span className="flex flex-col gap-8">{menuLinks}</span>
      <div className="h-[1px] w-full bg-white mt-10 md:hidden"></div>
      <span className="flex justify-between w-full px-12 items-center -mt-7 md:hidden">
        <FaInstagram />
        <Link to={"/signin"} className="uppercase">
          Sign In
        </Link>
      </span>
      <div className="hidden lg:flex justify-between text-center">
        <span>
          <p>legal terms</p>
          <p>2024&copy;scepter and sword</p>
        </span>
        <span>
          <p>
            majestic wines made from the noble vines <br /> crafted in columbia
            valley, wa
          </p>
        </span>
      </div>
    </div>
  );
};

export default MobileMenu;
