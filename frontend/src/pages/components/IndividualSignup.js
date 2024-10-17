import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

import { FaRegUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { FaMapLocationDot, FaIdCardClip } from 'react-icons/fa6';
import { SlCalender } from "react-icons/sl";

import { SignupContainer, InputField, SignupButton, ErrorMessage, InputWrapper, SubContainer, LargeContainer, ContainerWrapper, GenderButton, GenderContainer, GenderBox, CalendarContainer } from '../styles/IndividualSignupSt';

const IndividualSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    location: '',
    gender: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const birthMonthRef = useRef(null);
  const birthDayRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (['birthYear', 'birthMonth', 'birthDay'].includes(name)) {
      if (!/^[0-9]*$/.test(value)) return; // 숫자만 입력 가능하게 제한
    }

    // 두 자리 이상 입력되지 않게 제한
    if (name === 'birthMonth' && value.length > 2) return;
    if (name === 'birthDay' && value.length > 2) return;

    setFormData({ ...formData, [name]: value });

    // 입력 후 포커스 이동 처리
    if (name === 'birthYear' && value.length === 4) {
      birthMonthRef.current.focus();
    } else if (name === 'birthMonth' && value.length === 2) {
      birthDayRef.current.focus();
    }
  };

  const handleGenderSelect = (gender) => {
    setFormData({
      ...formData,
      gender,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, username, password, confirmPassword, email, gender, birthYear, birthMonth, birthDay } = formData;

    // 간단한 유효성 검사
    if (!/^[가-힣]+$/.test(name)) {
      setError('이름은 한글만 입력 가능합니다.');
      return;
    }
    if (!/^[a-z0-9]+$/.test(username)) {
      setError('아이디는 영어 소문자와 숫자만 입력 가능합니다.');
      return;
    }
    if (!/^[a-zA-Z0-9!@#$%^&*]+$/.test(password)) {
      setError('비밀번호는 영어, 숫자, 특수문자(!@#$%^&*)만 입력 가능합니다.');
      return;
    }
    if (password !== confirmPassword) {
      setError('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }
    if (!email) {
      setError('이메일을 다시 한 번 확인해주세요.');
      return;
    }
    if (!gender) {
      setError('성별을 선택해주세요.');
      return;
    }
    if (!/^(19|20)\d{2}$/.test(birthYear) || !/^(0[1-9]|1[0-2])$/.test(birthMonth) || !/^(0[1-9]|[12][0-9]|3[01])$/.test(birthDay)) {
      setError('생년월일을 다시 한 번 확인해주세요.');
      return;
    }
    setError('');

    try {
      // 회원가입 API 요청
      const response = await axios.post('/api/signup', {
        name,
        username,
        password,
        email,
        location: formData.location,
        gender,
        birth_date: `${birthYear}-${birthMonth}-${birthDay}`,
      });

      if (response.status === 201) {
        console.log('회원가입 완료', response.data);
        navigate('/main');  // 회원가입 성공 후 메인 페이지로 이동
      }
    } catch (err) {
      console.error(err);
      setError('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <LargeContainer>
      <h2 style={{ fontSize: '50px'}}>회원가입</h2>
      <ContainerWrapper>
        <SignupContainer>
          <form onSubmit={handleSubmit}>
            <InputWrapper>
              <FaRegUser style={{ fontSize: '30px'}} />
              <InputField
                type='text'
                name='name'
                placeholder='이름'
                value={formData.name}
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <FaIdCardClip style={{ fontSize: '30px'}} />
              <InputField
                type="text"
                name="username"
                placeholder="아이디"
                value={formData.username}
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <FaLock style={{ fontSize: '30px'}} />
              <InputField
                type="password"
                name='password'
                placeholder="비밀번호"
                value={formData.password}
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <FaLock style={{ fontSize: '30px'}} />
              <InputField
                type='password'
                name='confirmPassword'
                placeholder='비밀번호 확인'
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
            <FaEnvelope style={{ fontSize: '30px'}} />
            <InputField
                type='text'
                name='email'
                placeholder='이메일'
                value={formData.email}
                onChange={handleChange}
              />
            </InputWrapper>
          </form>
        </SignupContainer>
          <SubContainer>
            <form onSubmit={handleSubmit}>
              <InputWrapper>
              <FaMapLocationDot style={{ fontSize: '30px'}} />
              <InputField
                type='text'
                name='location'
                placeholder='거주 지역'
                value={formData.location}
                onChange={handleChange}
              />
              </InputWrapper>
              <InputWrapper>
              <SlCalender style={{ fontSize: '30px'}} />
              <CalendarContainer>
              <InputField
                type='text'
                name='birthYear'
                placeholder='출생년도 (YYYY)'
                value={formData.birthYear}
                onChange={handleChange}
              />
              <InputField
                type='text'
                name='birthMonth'
                placeholder='출생월 (MM)'
                value={formData.birthMonth}
                onChange={handleChange}
                ref={birthMonthRef}
              />
              <InputField
                type='text'
                name='birthDay'
                placeholder='출생일 (DD)'
                value={formData.birthDay}
                onChange={handleChange}
                ref={birthDayRef}
              />
              </CalendarContainer>
              </InputWrapper>
                <GenderBox>
                  <h1 style={{ fontSize: '25px' }}>성별 선택</h1>
                </GenderBox>
              <GenderContainer>
                <GenderButton
                  type='button'
                  name='gender'
                  selected={ formData.gender === '남자'}
                  onClick={() => handleGenderSelect('남자')}
                >
                  남자
                </GenderButton>
                <GenderButton
                  type='button'
                  name='gender'
                  selected={ formData.gender === '여자'}
                  onClick={() => handleGenderSelect('여자')}
                >
                  여자
                </GenderButton>
              </GenderContainer>
            </form>
          </SubContainer>
        </ContainerWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <form onSubmit={handleSubmit}>
        <SignupButton type='submit'>회원가입</SignupButton>
      </form>
    </LargeContainer>
  );
};

export default IndividualSignup;
