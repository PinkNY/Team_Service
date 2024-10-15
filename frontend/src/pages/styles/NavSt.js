import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  padding: 0 50px;
  margin: 10px auto;

  border: 3px solid black;

  @media (min-width: 1024px) {
    width: 1000px;
  }
`;

export const Logo = styled.div`
  font-size: 100px;
  font-weight: bold;
  cursor: pointer;
`;

export const RightCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const AlarmIcon = styled.div`
  font-size: 50px;
  color: black;
  cursor: pointer;
  display: flex;
  align-center: center;
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
`;