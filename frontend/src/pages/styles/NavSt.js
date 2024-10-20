import styled from "styled-components";
import { media } from "../MediaQ";

export const Nav = styled.nav`
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #3b82f6;
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  /* 모바일 환경에서는 벨 아이콘과 로그인 버튼 숨기기 */
  ${media.mobile} {
    .bell-icon,
    .login-button {
      display: none;
    }
    .hamburger-button {
      display: block;
    }
  }

  /* 태블릿 및 PC 환경에서는 벨 아이콘과 로그인 버튼 보이기 */
  ${media.tablet} {
    .bell-icon,
    .login-button {
      display: flex;
    }
    .hamburger-button {
      display: none;
    }
  }

  ${media.pc} {
    .bell-icon,
    .login-button {
      display: flex;
    }
    .hamburger-button {
      display: none;
    }
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  ${(props) =>
    props.primary &&
    `
    background-color: #3b82f6;
    color: white;
    &:hover {
      background-color: #2563eb;
    }
  `}

  ${(props) =>
    props.ghost &&
    `
    background-color: transparent;
    &:hover {
      background-color: #f3f4f6;
    }
  `}
`;

export const MobileMenu = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 70%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  padding-top: 3rem;
  z-index: 100;
  align-items: flex-start;

  ${Button} {
    margin: 1rem;
  }
`;
