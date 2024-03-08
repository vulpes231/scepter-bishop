import React from "react";
import { MdOutlineClose } from "react-icons/md";

const SideBar = ({ closeModal }) => {
  return (
    <div className="h-screen bg-slate-100 w-full text-slate-900 absolute top-0 p-6 z-50">
      <div className="flex justify-between">
        <p>Your Items</p>
        <span className="cursor-pointer" onClick={closeModal}>
          <MdOutlineClose />
        </span>
      </div>
    </div>
  );
};

export default SideBar;
