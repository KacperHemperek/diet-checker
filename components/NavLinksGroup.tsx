import React from "react";
import NavLink from "./NavLink";

const NavLinksGroup = () => {
  return (
    <>
      <NavLink href="/">Home </NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/item">Item</NavLink>
    </>
  );
};

export default NavLinksGroup;
