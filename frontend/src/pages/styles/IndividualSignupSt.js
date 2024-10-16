import styled from "styled-components";
// import { FaRegUser, FaLock, FaEnvelope, FaGlb } from "react-icons/fa";

export const LargeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: white;
  height: 80vh;

  border: 3px solid black;
  border-radius: 15px;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 70%;

  border: 3px solid black;
  border-radius: 15px;
`;

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  margin: 0 auto;
  background-color: white;

  border: 3px solid black;
  border-radius: 15px;
`;

export const InputField = styled.input`
  display: flex;
  width: 100%;
  padding: 10px;
  font-size: 25px;
  margin: 5px;

  border: 3px solid black;
  border-radius: 15px;
`;

export const SignupButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding: 10px;
  margin-top: 10px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-size: 25px;

  border: 3px solid black;
  border-radius: 15px;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin: 10px 0;
`;

export const CalendarContainer = styled.div`
  margin: 20px 0;
`;

export const RadioGroup = styled.div`
  display: flex;
  border: 3px solid #999;
`;

export const RadioButton = styled.input`
  display: none;
  margin-right: 15px;
`;

export const Label = styled.label`
  flex: 1;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  border-right: 3px solid #999;
  background-color: ${(props) => (props.checked ? '#000' : '#333')};
  color: ${(props) => (props.checked ? '#fff' : '#999')};

  &:last-child {
    border-right: none;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  svg {
    margin-right: 10px;
    color: #888;    // 아이콘 색상
  }
`;

export const SelectField = styled.select`
  display: flex;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 20px;

  border: 3px solid black;
  border-radius: 15px;
`;

export const ConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-size: 15px;

  border: 3px solid black;
  border-radius: 15px;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  gap: 20px;
  background-color: white;

  border: 3px solid black;
  border-radius: 15px;
`;