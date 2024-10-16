import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;

  border: 3px solid black;
  border-radius: 15px;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;

  border: 3px solid black;
  border-radius: 15px;
`;

export const Button = styled.button`
  padding: 10px;
  margin-top: 15px;
  background-color: white;
  color: black;
  font-size: 16px;
  cursor: pointer;

  border: 3px solid black;
  border-radius: 15px;
`;