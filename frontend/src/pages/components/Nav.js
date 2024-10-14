import React from "react";
import { Link } from "react-router-dom";
import { MdNotifications } from "react-icons/md";

import { NavContainer, LoginButton, Logo, RightCon, AlarmIcon } from "../styles/NavSt";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <NavContainer>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Logo>F</Logo>
      </Link>
      <RightCon>
        <AlarmIcon>
          <MdNotifications />
        </AlarmIcon>
        <LoginButton>Login</LoginButton>
        <HamburgerMenu />
      </RightCon>
    </NavContainer>
  );
};

export default Navbar;