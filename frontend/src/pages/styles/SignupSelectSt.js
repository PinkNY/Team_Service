import styled from "styled-components";
import { media } from '../MediaQ';

export const SelectPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  font-size: 50px;

  ${media.mobile} {
    font-size: 20px;
  }

  // border: 3px solid black;
`;
export const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  width: 100%;
  background-color: white;
  font-size: 50px;

  ${media.mobile} {
    font-size: 20px;
  }

  // border: 3px solid black;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 10%;

  // border: 3px solid black;

  ${media.pc} {
    width: 1100px;
  }

`;

export const SelectionButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 15px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-size: 50px;

  border: 3px solid black;
  border-radius: 15px;

  &:hover {
    background-color: whitegray;
  }

  ${media.mobile} {
    font-size: 25px;
  }
`;