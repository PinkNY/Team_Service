import styled from "styled-components";

export const HamburgerIcon = styled.div`
  font-size: 70px;
  color: black;
  cursor: pointer;
  padding-bottom: 12px;
`;

export const MenuHeader = styled.div`
  position: absolute;
  top: 20px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 5px 30px 10px 30px;
  
  // border: 3px solid white;
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  color: white;
`;

export const CloseButton = styled.div`
  display: flex;
  right: 10px;
  font-size: 70px;
  cursor: pointer;
  color: white;  
`;

export const Alarmcon = styled.div`
  font-size: 65px;
  color: white;
  cursor: pointer;
  display: flex;
  align-center: center;
  padding-top: 10px;
`;