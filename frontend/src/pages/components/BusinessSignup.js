import React, { useState } from "react";
import { FaRegUser, FaLock, FaEnvelope, FaBuilding } from 'react-icons/fa';
import { FaMapLocationDot, FaIdCardClip } from 'react-icons/fa6';
import { IoDocumentTextOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";

import { FormContainer, Input, Button, InputWrapper } from '../styles/BusinessSignupSt';

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 서버로 formData 전송 로직
    console.log(formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputWrapper>
      <FaIdCardClip style={{ fontSize: '20px'}} />
      <Input
        type='text'
        name='ID'
        value={formData.ID}
        onChange={handleChange}
        placeholder='아이디'
      />
      </InputWrapper>
      <InputWrapper>
      <FaLock style={{ fontSize: '20px'}} />
      <Input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="비밀번호"
      />
      </InputWrapper>
      <InputWrapper>
      <Input
        type="password"
        name="confirmPassword"
        value={formData.password}
        onChange={handleChange}
        placeholder="비밀번호 확인"
      />
      </InputWrapper>
      <InputWrapper>
      <FaBuilding style={{ fontSize: '20px'}} />
      <Input
        type="text"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        placeholder="업체명"
      />
      </InputWrapper>
      <InputWrapper>
      <IoDocumentTextOutline style={{ fontSize: '20px'}} />
      <Input
        type="text"
        name="businessNumber"
        value={formData.businessNumber}
        onChange={handleChange}
        placeholder="사업자 등록번호"
      />
      </InputWrapper>
      <InputWrapper>
      <GrUserManager style={{ fontSize: '20px'}} />
      <Input
        type="text"
        name="ownerName"
        value={formData.ownerName}
        onChange={handleChange}
        placeholder="대표자명"
      />
      </InputWrapper>
      <InputWrapper>
      <FaMapLocationDot style={{ fontSize: '20px'}} />
      <Input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="주소"
      />
      </InputWrapper>
      <InputWrapper>
      <IoPhonePortraitOutline style={{ fontSize: '20px'}} />
      <Input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="연락처"
      />
      </InputWrapper>
      <InputWrapper>
      <FaEnvelope style={{ fontSize: '20px'}} />
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="이메일"
      />
      </InputWrapper>
      <Button type="submit">회원가입</Button>
    </FormContainer>
  );
};

export default BusinessSignup;