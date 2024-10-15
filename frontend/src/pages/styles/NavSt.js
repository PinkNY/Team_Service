import styled from "styled-components";
import { media } from "../MediaQ";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  padding: 0 40px;
  margin: 10px auto;

  // border: 3px solid black;

  ${media.pc} {
    width: 1000px;
  }

  ${media.mobile} {
    font-size: 50px;
    padding: 0 10px 0 30px;
  }
`;

export const Logo = styled.div`
  font-size: 100px;
  font-weight: bold;
  cursor: pointer;

  ${media.mobile} {
    font-size: 50px;
  }
`;

export const RightCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  ${media.mobile} {
    font-size: 50px;
    gap: 5px;
  }
`;

export const AlarmIcon = styled.div`
  font-size: 50px;
  color: black;
  cursor: pointer;
  display: flex;
  align-center: center;

  ${media.mobile} {
    font-size: 40px;
  }
`;

export const LoginButton = styled.button`
  background-color: white;
  color: black;
  font-size: 30px;
  border: 1px solid black;
  border-radius: 15px;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
  background-color: gray;
  }

  ${media.mobile} {
    font-size: 20px;
  }
`;