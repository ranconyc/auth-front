import React from "react";
import AuthOptions from "./AuthOptions";
import { NavContainer, NavLink } from "./Nev.elements";

const Nav = () => {
  return (
    <NavContainer>
      <NavLink to="/">
        <h1>Logo</h1>
      </NavLink>
      <AuthOptions />
    </NavContainer>
  );
};

export default Nav;
