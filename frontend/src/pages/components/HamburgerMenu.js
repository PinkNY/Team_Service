import React, { useState } from "react";
import { HamburgerIcon, Menu, CloseButton, MenuHeader, Alarmcon } from "../styles/HamburgerMenuSt";
import { MdNotifications } from "react-icons/md";

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
          <MenuHeader>
            <Alarmcon>
              <MdNotifications />
            </Alarmcon>
            <CloseButton onClick={toggleMenu}>X</CloseButton>
          </MenuHeader>
          <h1>내 정보</h1>
          <h1>축제 목록</h1>
          <h1>지도</h1>
          <h1>공지 사항</h1>
          <h1>이벤트</h1>
          <h1>문의</h1>
        </Menu>
      )}
    </>
  );
};

export default HamburgerMenu;