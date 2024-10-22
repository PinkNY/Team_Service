import React, { useState } from "react";
import { Nav, NavContent, Logo, NavButtons, Button, MobileMenu } from '../styles/NavSt';
import { Bell, Menu, X } from 'lucide-react';
import SearchBar from "./Search";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Nav>
      <NavContent>
        <Logo>축제로</Logo>
        <SearchBar />
        <NavButtons>
          {/* 모바일 이외의 환경에서는 항상 표시 */}
          <Button ghost className="bell-icon">
            <Bell size={20} />
          </Button>
          <Button primary className="login-button">로그인</Button>

          {/* 모바일 환경에서만 햄버거 메뉴 표시 */}
          <Button ghost onClick={toggleMenu} className="hamburger-button">
            <Menu size={24} />
          </Button>
        </NavButtons>
      </NavContent>

      {/* 모바일에서 햄버거 메뉴가 열렸을 때 나타나는 메뉴 */}
      <MobileMenu open={menuOpen}>
        <Button ghost onClick={toggleMenu} className="close-button">
          <X size={24} />
        </Button>
        <Button ghost>
          <Bell size={20} /> 알림
        </Button>
        <Button primary>로그인</Button>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
