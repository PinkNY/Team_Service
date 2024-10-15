import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { LoginPageContainer, InputField, LoginButton, ErrorMessage, LoginContainer, SignupButton, EtcButtons, FindIdButton, FindPasswordButton } from '../styles/LoginSt';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // 간단한 유효성 검사
    if (!username || !password) {
      setError('아이디와 비밀번호를 입력해주세요.');
      return;
    }
    setError('');

    try {
      // 백엔드와 로그인 연동
      const response = await axios.post('/api/login', {
        username,
        password
      });
      console.log('로그인 성공', response.data);
      // 로그인 성공 후 처리 (ex: 토큰 저장, 페이지 이동 등)
    } catch (err) {
      console.error('로그인 실패', err);
      setError('아이디와 비밀번호를 확인해주세요.');
    }
  };

  return (
    <LoginPageContainer>
      <LoginContainer>
        <h2 style={{ fontSize: "80px" }}>로그인</h2>
        <InputField
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
          <div style={{ display: 'flex', gap: '10px' }}>
          <LoginButton onClick={handleLogin}>로그인</LoginButton>
          </div>
        <EtcButtons>
          <SignupButton onClick={() => navigate('/signup-selection')}>회원가입</SignupButton>
          <FindIdButton onClick={() => navigate('/findid')}>아이디 찾기</FindIdButton>
          <FindPasswordButton onClick={() => navigate('/findpassword')}>비밀번호 찾기</FindPasswordButton>
        </EtcButtons>
      </LoginContainer>
    </LoginPageContainer>
  );
};

export default Login;