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
          ? "absolute h-screen w-full top-[77px] left-0 flex flex-col bg-white bg-opacity-40 items-center justify-center gap-12"
          : "hidden"
      }
    >
      <span className="flex flex-col gap-8">{menuLinks}</span>
      <div className="h-[1px] w-full bg-white mt-10"></div>
      <span className="flex justify-between w-full px-12 items-center -mt-7">
        <FaInstagram />
        <Link to={"/signin"} className="uppercase">
          Sign In
        </Link>
      </span>
    </div>
  );
};

export default MobileMenu;
