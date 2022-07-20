import React from "react";
import LogInButton from "./LogInButton";
import NavLink from "./NavLink";

const NavLinksGroup = () => {
  return (
    <>
      <NavLink href="/">Home </NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/item">Item</NavLink>
      <LogInButton />
    </>
  );
};

export default NavLinksGroup;
