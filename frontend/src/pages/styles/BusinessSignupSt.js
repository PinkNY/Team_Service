import styled from "styled-components";
import { media } from '../MediaQ';

export const LargeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: white;
  height: 80vh;

  // border: 3px solid black;
  // border-radius: 15px;

  ${media.mobile} {
    height: 100vh;
    margin-top: 20%;
  }
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 70%;
  gap: 30px;

  border: 3px solid black;
  border-radius: 15px;

  ${media.mobile} {
    flex-direction: column;
    height: 100vh;
    gap: 0;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  margin: 0 auto;
  background-color: white;

  ${media.mobile} {
    width: 100%;
    justify-content: flex-end;
  }

  // border: 3px solid black;
  // border-radius: 15px;
`;

export const InputField = styled.input`
  display: flex;
  width: 30vw;
  padding: 10px;
  font-size: 25px;
  margin: 5px;
  border: ${(props) => (props.hasError ? '2px solid red' : '3px solid black' )};

  ${media.mobile} {
    width: 60%;
  }

  // border: 3px solid black;
  border-radius: 15px;
`;

export const SignupButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  padding: 10px 30px;
  margin-top: 10px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-size: 25px;
  white-space: nowrap;

  border: 3px solid black;
  border-radius: 15px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  // border: 3px solid black;

  ${media.mobile} {
    width: 100%;
  }

  svg {
    margin-right: 10px;
    color: #888;    // 아이콘 색상
  }
`;

export const InputWrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 10px 30px;

  // border: 3px solid black;

  ${media.mobile} {
    width: 100%;
  }

  svg {
    margin-right: 10px;
    color: #888;    // 아이콘 색상
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background-color: white;

  ${media.mobile} {
    width: 100%;
    justify-content: flex-start;
  }

  // border: 3px solid black;
  // border-radius: 15px;
`;

export const ErrorContainer = styled.div`
  display: flex;
  margin-top: 5px;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin: 10px 0;
`;