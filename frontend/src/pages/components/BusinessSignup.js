import React, { useState } from "react";
import axios from "axios";
import { FaLock, FaEnvelope, FaBuilding } from 'react-icons/fa';
import { FaMapLocationDot, FaIdCardClip } from 'react-icons/fa6';
import { IoDocumentTextOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";

import { LargeContainer, ContainerWrapper, MainContainer, InputField, InputWrapper, SubContainer, SignupButton, InputWrapper2 } from '../styles/BusinessSignupSt';
import { useNavigate } from 'react-router-dom';

const BusinessSignup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    businessNumber: '',
    ownerName: '',
    address: '',
    phoneNumber: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }
    // 추가적인 검증 로직을 여기에 추가할 수 있습니다.
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const checkDuplicates = async () => {
    try {
      const response = await axios.post('/api/check-duplicates', {
        username: formData.username,
        businessNumber: formData.businessNumber,
      });
      return response.data; // { isDuplicateUsername: true/false, isDuplicateBusinessNumber: true/false }
    } catch (error) {
      console.error("중복 확인 중 오류 발생:", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const duplicates = await checkDuplicates();
    if (duplicates) {
      if (duplicates.isDuplicateUsername) {
        setErrors((prevErrors) => ({ ...prevErrors, username: "중복된 아이디입니다." }));
        return;
      }
      if (duplicates.isDuplicateBusinessNumber) {
        setErrors((prevErrors) => ({ ...prevErrors, businessNumber: "중복된 사업자 등록번호입니다." }));
        return;
      }

      try {
        // 회원가입 요청
        await axios.post('/api/signup', formData);
        alert("회원가입이 완료되었습니다.");
        navigate('/'); // 메인 페이지로 이동
      } catch (error) {
        console.error("회원가입 중 오류 발생:", error);
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <LargeContainer onSubmit={handleSubmit}>
      <h2 style={{ fontSize: '50px'}}>회원가입</h2>
      <ContainerWrapper>
        <MainContainer>
          <InputWrapper>
            <FaIdCardClip style={{ fontSize: '20px' }}/>
            <InputField
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
              placeholder='아이디'
            />
            {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
          </InputWrapper>
          <InputWrapper>
            <FaLock style={{ fontSize: '20px'}} />
            <InputField
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="비밀번호"
            />
          </InputWrapper>
          <InputWrapper2>
            <InputField
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="비밀번호 확인"
            />
            {errors.confirmPassword && <div style={{ color: 'red' }}>{errors.confirmPassword}</div>}
          </InputWrapper2>          
          <InputWrapper>
            <FaEnvelope style={{ fontSize: '20px'}} />
            <InputField
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="이메일"
            />
          </InputWrapper>
        </MainContainer>
        <SubContainer>
          <InputWrapper>
            <IoDocumentTextOutline style={{ fontSize: '20px'}} />
            <InputField
              type="text"
              name="businessNumber"
              value={formData.businessNumber}
              onChange={handleChange}
              placeholder="사업자 등록번호"
            />
            {errors.businessNumber && <div style={{ color: 'red' }}>{errors.businessNumber}</div>}
          </InputWrapper>
          <InputWrapper>
            <FaBuilding style={{ fontSize: '20px'}} />
            <InputField
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="업체명"
            />
          </InputWrapper>
          <InputWrapper>
            <GrUserManager style={{ fontSize: '20px'}} />
            <InputField
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder="대표자명"
            />
          </InputWrapper>
          <InputWrapper>
            <FaMapLocationDot style={{ fontSize: '20px'}} />
            <InputField
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="주소"
            />
          </InputWrapper>
          <InputWrapper>
            <IoPhonePortraitOutline style={{ fontSize: '20px'}} />
            <InputField
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="연락처"
            />
          </InputWrapper>          
        </SubContainer>
      </ContainerWrapper>
      <SignupButton type="submit">회원가입</SignupButton>
    </LargeContainer>
  );
};

export default BusinessSignup;
