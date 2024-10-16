import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaRegUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
// import { SlCalender } from "react-icons/sl";

import { SignupContainer, InputField, SignupButton, ErrorMessage, RadioGroup, RadioButton, Label, InputWrapper, CalendarContainer, ConfirmButton, SubContainer, LargeContainer, ContainerWrapper } from '../styles/IndividualSignupSt';

const IndividualSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
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

  const handleDateConfirm = () => {
    if (selectedDate) {
      setFormData({
        ...formData,
        birthYear: selectedDate.getFullYear(),
        birthMonth: selectedDate.getMonth() + 1,
        birthDay: selectedDate.getDate(),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, username, password, confirmPassword, gender, birthYear, birthMonth, birthDay } = formData;

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
      <h2>개인 회원가입</h2>
      <ContainerWrapper>
        <SignupContainer>
          <form onSubmit={handleSubmit}>
            <InputWrapper>
              <FaRegUser />
              <InputField
                type='text'
                name='name'
                placeholder='이름'
                value={formData.name}
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <FaEnvelope />
              <InputField
                type="text"
                name="username"
                placeholder="아이디"
                value={formData.username}
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <FaLock />
              <InputField
                type="password"
                name='password'
                placeholder="비밀번호"
                value={formData.password}
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <FaLock />
              <InputField
                type='password'
                name='confirmPassword'
                placeholder='비밀번호 확인'
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </InputWrapper>
            {/* <InputWrapper>
              <FaMapLocationDot />
              <InputField
                type='text'
                name='location'
                placeholder='거주 지역'
                value={formData.location}
                onChange={handleChange}
              />
            </InputWrapper> */}
          </form>
        </SignupContainer>
          <SubContainer>
            <form onSubmit={handleSubmit}>
              <InputWrapper>
              <FaMapLocationDot />
              <InputField
                type='text'
                name='location'
                placeholder='거주 지역'
                value={formData.location}
                onChange={handleChange}
              />
              </InputWrapper>
              <RadioGroup>
                <Label>
                  <RadioButton
                    type='radio'
                    name='gender'
                    value='남'
                    checked={formData.gender === '남'}
                    onChange={handleChange}
                  />
                  남
                </Label>
                <Label>
                  <RadioButton
                    type='radio'
                    name='gender'
                    value='여'
                    checked={formData.gender === '여'}
                    onChange={handleChange}
                  />
                  여
                </Label>
              </RadioGroup>
              <CalendarContainer>
                <Calendar
                  onChange={handleDateChange}
                  value={selectedDate}
                  locale='ko-KR'
                />
                {formData.birthYear && formData.birthMonth && formData.birthDay && (
                  <p>{formData.birthYear}년 {formData.birthMonth}월 {formData.birthDay}일</p>
                )}
                <ConfirmButton type="button" onClick={handleDateConfirm}>
                  확인
                </ConfirmButton>
              </CalendarContainer>  
            </form>
          </SubContainer>
        </ContainerWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <SignupButton type='submit'>회원가입</SignupButton>
    </LargeContainer>
  );
};

export default IndividualSignup;