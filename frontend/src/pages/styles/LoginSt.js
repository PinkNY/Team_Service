import styled from "styled-components";
import { media } from '../MediaQ';

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: white;

  // border: 3px solid black;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  background-color: white;

  // border: 3px solid black;
  // border-radius: 15px;

  ${media.pc} {
    width: 1100px;
  }

  ${media.mobile} {
    margin-top: 40px;
  }
`;

export const InputField = styled.input`
  width: 40vw;
  height: 6vh;
  padding: 10px;
  margin: 10px 0;
  border: 3px solid black;
  border-radius: 15px;
  font-size: 25px;

  ${media.mobile} {
    font-size: 10px;
    height: 2vh;
    width: 50vw;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin: 10px 0;
  font-size: 25px;

  ${media.mobile} {
    font-size: 15px;
  }
`;

export const LoginButton = styled.button`
  width: 25vw;
  height: 8vh;
  padding: 10px;
  margin: 20px;
  background-color: white;
  color: black;
  border: 3px solid black;
  border-radius: 15px;
  cursor: pointer;
  font-size: 35px;

  ${media.mobile} {
    font-size: 10px;
    width: 35vw;
    height: 5vh;
  }

  &:hover {
    background-color: whitegray;
  }
`;

export const EtcButtons = styled.div`
  width: 60vw;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5%;

  // border: 3px solid black;
`;

export const SignupButton = styled.button`
  width: 30vw;
  padding: 10px;
  background-color: white;
  color: black;
  border: 3px solid black;
  border-radius: 15px;
  cursor: pointer;
  font-size: 20px;

  ${media.mobile} {
    font-size: 10px;
  }

  &:hover {
    background-color: whitegray;
  }
`;

export const FindIdButton = styled.button`
  width: 30vw;
  padding: 10px;
  background-color: white;
  color: black;
  border: 3px solid black;
  border-radius: 15px;
  cursor: pointer;
  font-size: 20px;

  ${media.mobile} {
    font-size: 10px;
  }

  &:hover {
    background-color: whitegray;
  }
`;

export const FindPasswordButton = styled.button`
  width: 35vw;
  padding: 10px;
  background-color: white;
  color: black;
  border: 3px solid black;
  border-radius: 15px;
  cursor: pointer;
  font-size: 20px;

  ${media.mobile} {
    font-size: 10px;
  }

  &:hover {
    background-color: whitegray;
  }
`;