import styled from "styled-components";
import DatePicker from "react-datepicker";
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
    margin-top: 30%;
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

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  margin: 0 auto;
  background-color: white;

  // border: 3px solid black;
  // border-radius: 15px;
`;

export const InputField = styled.input`
  display: flex;
  width: 100%;
  padding: 10px;
  font-size: 25px;
  margin: 5px;
  border: ${(props) => (props.hasError ? '2px solid red' : '3px solid black' )};

  // border: 3px solid black;
  border-radius: 15px;
`;

export const SignupButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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

export const CalendarContainer = styled.div`
  margin: 20px 0;
  font-size: 20px;
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

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background-color: white;

  // border: 3px solid black;
  // border-radius: 15px;
`;

export const DatePickerStyle = styled(DatePicker)`
  display: flex;
  width: 90%;
  padding: 10px 5px;
  font-size: 25px;
  margin: 0 5px;

  border: 3px solid black;
  border-radius: 15px;

  ::placeholder {
    font-size: 20px;
  }
`;

export const GenderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  
  // border: 3px solid black;
`;

export const GenderBox = styled.div`
  display: flex;
  justify-conetent: center;
  align-items: center;
  flex-direction: column;
`;

export const GenderButton = styled.button`
  flex: 1;
  padding: 10px;
  background-color: ${(props) => (props.selected ? '#222' : '#444')};
  color: ${(props) => (props.selected ? '#00ff00' : '#ccc')};
  border: ${(props) => (props.selected ? '3px solid #00ff00' : '3px solid #666')};
  border-radius: 15px;
  cursor: pointer;
  font-size: 25px;

  &:not {:last-child) {
    margin-right: 10px;
  }

  &:hover {
    background-color: #333;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  margin-top: 5px;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin: 10px 0;
`;