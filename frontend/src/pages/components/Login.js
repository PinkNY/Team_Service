import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { PageContainer, LoginContainer, Title, TabContainer, Tab, Form, Input, CheckboxContainer, Checkbox, CheckboxLabel, LoginButton, LinkContainer, Link, ErrorMessage } from '../styles/LoginSt';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('individual');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');  
  const [saveId, setSaveId] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      const response = await axios.post('backendtest-d8g0eqczavdveda7.koreacentral-01.azurewebsites.net/api/login/user', {
        username, password,
      });

      if (response.status === 200) {
        // 로그인 성공 시 메인 페이지로 이동
        navigate('/');
      }
    } catch (error) {
      // 로그인 실패 시 오류 메시지 출력
      setErrorMessage('아이디와 비밀번호를 다시 한 번 확인해주세요.');
    }
  };

  return (
    <PageContainer>
      <LoginContainer>
        <Title>로그인</Title>
        <TabContainer>
          <Tab 
            active={activeTab === 'individual'} 
            onClick={() => setActiveTab('individual')}
            style={{ fontSize: '15px' }}
          >
            개인 로그인
          </Tab>
          <Tab 
            active={activeTab === 'organizer'} 
            onClick={() => setActiveTab('organizer')}
            style={{ fontSize: '15px' }}
          >
            주최 로그인
          </Tab>
        </TabContainer>
        <Form onSubmit={handleLogin}>
          <Input type="text" placeholder="아이디" value={username} onChange={(e) => setUsername(e.target.value)} style={{ fontSize: '20px' }} />
          <Input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} style={{ fontSize: '20px' }} />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <CheckboxContainer>
            <Checkbox 
              type="checkbox" 
              id="saveId" 
              checked={saveId}
              onChange={(e) => setSaveId(e.target.checked)}
            />
            <CheckboxLabel htmlFor="saveId" style={{ fontSize: '15px' }}>아이디 저장</CheckboxLabel>
          </CheckboxContainer>
          <LoginButton type="submit" style={{ fontSize: '20px' }}>로그인</LoginButton>
        </Form>
        <LinkContainer>
          <Link href="#" style={{ fontSize: '20px' }} onClick={handleSignupClick}>회원가입</Link>
          <Link href="#" style={{ fontSize: '20px' }}>ID 찾기</Link>
          <Link href="#" style={{ fontSize: '20px' }}>비밀번호 찾기</Link>
        </LinkContainer>
      </LoginContainer>
    </PageContainer>
  );
};

export default LoginPage;