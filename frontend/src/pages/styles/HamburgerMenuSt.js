import styled from "styled-components";
import { media } from "../MediaQ";

export const HamburgerIcon = styled.div`
  font-size: 70px;
  color: black;
  cursor: pointer;
  padding-bottom: 12px;

  ${media.mobile} {
    font-size: 50px;
  }
`;

export const MenuHeader = styled.div`
  position: absolute;
  top: 20px;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 5px 30px 10px 30px;
  
  // border: 3px solid white; 

  ${media.mobile} {
    font-size: 40px;
  }
`;

export const Menu = styled.div`
  position: fixed;
  top: 110px;
  // right: 0;
  right: 200px;
  width: 20%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  color: white;
  
  border: 3px solid white;

  ${media.mobile} {
    font-size: 15px;
    top: 85px;
    width: 100%;
    height: 100vh;
    right: 0;
  }
`;

export const MenuBox = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: white;
  font-size: 25px;

  border: 3px solid white;

  ${media.mobile} {
    font-size: 20px;
    margin-top: 50px;
    padding-top: 20px;
    justify-content: flex-start;
  }
`;

export const PushRight = styled.div`
  display: flex;
  right: 10px;
  font-size: 70px;
  cursor: pointer;
  color: white;  

  ${media.mobile} {
    font-size: 35px;
  }
`;

export const Alarmcon = styled.div`
  font-size: 65px;
  color: white;
  cursor: pointer;
  display: flex;
  align-center: center;
  padding-top: 10px;

  ${media.mobile} {
    font-size: 30px;
  }
`;