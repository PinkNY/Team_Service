import React from "react";
import { useNavigate } from "react-router-dom";
import { SelectionContainer, ButtonWrapper, SelectionButton, SelectPage } from '../styles/SignupSelectSt';

const SignupSelection = () => {
  const navigate = useNavigate();

  const handleSelection = (type) => {
    if (type === 'individual') {
      navigate('/signup/individual');
    } else if (type === 'business') {
      navigate('/signup/business');
    }
  };

  return (
    <SelectPage>
      <h2>회원가입 유형 선택</h2>
      <SelectionContainer>
        <ButtonWrapper>
          <SelectionButton onClick={() => handleSelection('individual')}>개인 회원가입</SelectionButton>
          <SelectionButton onClick={() => handleSelection('business')}>사업자 회원가입</SelectionButton>
        </ButtonWrapper>
      </SelectionContainer>
    </SelectPage>
  );
};

export default SignupSelection;