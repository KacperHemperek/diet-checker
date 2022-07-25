import React from "react";
import NavLink from "./NavLink";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const NavLinksGroup = () => {
  const uid = useSelector((state: RootState) => state.user.uid);

  return (
    <>
      <NavLink href="/">Home </NavLink>
      <NavLink href="/search">Search </NavLink>
      <NavLink href="/about">About</NavLink>
      {uid && <NavLink href="/account">Account</NavLink>}
    </>
  );
};

export default NavLinksGroup;
