import React, { useEffect, useState } from "react";
import axios from "axios";

import { HamburgerIcon, Menu, MenuBox, UserInfo, ProgressBar, ProgressText } from "../styles/HamburgerMenuSt";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    level: 1,
    reviewCount: 0,
  });
  const maxReviews = 50;    // 예시로 최대 50개의 리뷰를 기준으로 설정

  useEffect(() => {
    // 백엔드에서 리뷰 횟수 데이터를 가져오는 API 호출
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/user"); // 사용자 정보 API 경로
        const user = response.data;
        setUserData({
          name: user.name,
          email: user.email,
          level: user.level,
          reviewCount: user.review_count,
        });
      } catch(error) {
        console.error("사용자 정보를 가져오는데 실패했습니다.", error);
      }
    };

    fetchUserData();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 진행률 계산
  const progressPercentage = (userData.reviewCount / maxReviews) * 100;

  return (
    <>
      <HamburgerIcon onClick={toggleMenu}>☰</HamburgerIcon>
      {isOpen && (
        <Menu>
            {/* 사용자 정보 섹션 */}
            <UserInfo>
              <h2>{userData.name}</h2>
              <p>{userData.email}</p>
              <div>
                <ProgressText>Lv. {userData.level}</ProgressText>
                <ProgressBar>
                  <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
                </ProgressBar>
                <p style={{ fontSize: "20px"}}>{userData.reviewCount}/{maxReviews} P</p>
              </div>
            </UserInfo>
          <MenuBox>
            <h1>내 정보</h1>
            <h1>축제 목록</h1>
            <h1>지도</h1>
            <h1>공지 사항</h1>
            <h1>이벤트</h1>
            <h1>문의</h1>
          </MenuBox>
        </Menu>
      )}
    </>
  );
};

export default HamburgerMenu;