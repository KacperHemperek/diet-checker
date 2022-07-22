import React from "react";
import NavLink from "./NavLink";

const NavLinksGroup = () => {
  return (
    <>
      <NavLink href="/">Home </NavLink>
      <NavLink href="/search">Search </NavLink>
      <NavLink href="/about">About</NavLink>
    </>
  );
};

export default NavLinksGroup;
