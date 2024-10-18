import React from "react"
import { Nav, NavContent, Logo, NavButtons, Button } from '../styles/NavSt';
import { Bell, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <Nav>
      <NavContent>
        <Logo>축제로</Logo>
        <NavButtons>
          <Button ghost>
            <Bell size={20} />
          </Button>
          <Button primary>로그인</Button>
          <Button ghost style={{ display: 'block', '@media (min-width: 768px)': { display: 'none' } }}>
          <Menu size={24} />
        </Button>
        </NavButtons>
      </NavContent>
    </Nav>
  );
};

export default Navbar;