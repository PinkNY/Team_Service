import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

import { FaRegUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { FaMapLocationDot, FaIdCardClip } from 'react-icons/fa6';
import { SlCalender } from "react-icons/sl";

import { SignupContainer, InputField, SignupButton, ErrorMessage, InputWrapper, CalendarContainer, SubContainer, LargeContainer, ContainerWrapper, DatePickerStyle, GenderButton, GenderContainer, GenderBox } from '../styles/IndividualSignupSt';

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
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }

  const handleGenderSelect = (gender) => {
    setFormData({
      ...formData,
      gender,
    });
  };

  const handleSubmit = (e) => {
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
    if (!birthYear || !birthMonth || !birthDay) {
      setError('출생년, 월, 일을 모두 선택해주세요.');
      return;
    }
    setError('');

    //  회원가입 처리 로직 추가 (예: 백엔드 연동)
    console.log('회원가입 완료', formData);
    navigate('/main');  //  회원가입 성공 후 메인 페이지로 이동
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
                <DatePickerStyle
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="yyyy/MM/dd"
                  placeholderText='생년월일 선택'
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