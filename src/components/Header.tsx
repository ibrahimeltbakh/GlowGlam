import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center p-2 border-b-2 border-gray-500 text-white ">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
