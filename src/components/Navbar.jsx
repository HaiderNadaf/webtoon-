import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black h-20">
      <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <h1 className="w-full text-3xl font-bold ">Webtoon.</h1>
        <ul className="hidden md:flex">
          <li className="p-4 ">Home</li>
          <li className="p-4 ">Company</li>
          <li className="p-4 ">Resources</li>
          <li className="p-4 ">About</li>
          <li className="p-4 ">Contacts</li>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {!nav ? (
            <AiOutlineClose size={20} className="text-black" />
          ) : (
            <AiOutlineMenu size={20} className="text-black" />
          )}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b  border-gray-600">Company</li>
            <li className="p-4 border-b  border-gray-600">Resources</li>
            <li className="p-4 border-b  border-gray-600">About</li>
            <li className="p-4 border-b  border-gray-600">Contacts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
