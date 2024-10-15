import React, { useState } from "react";
import { HamburgerIcon, Menu, MenuBox } from "../styles/HamburgerMenuSt";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HamburgerIcon onClick={toggleMenu}>☰</HamburgerIcon>
      {isOpen && (
        <Menu>
          <MenuBox>
            <h1>내 정보</h1>
            <h1>축제 목록</h1>
            <h1>지도</h1>
            <h1>공지 사항</h1>
            <h1>이벤트</h1>
            <h1>문의</h1>
          </MenuBox>
        </Menu>
      )}
    </>
  );
};

export default HamburgerMenu;