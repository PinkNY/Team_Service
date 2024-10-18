import React from "react";
import { First, NoticeBanner, Second } from '../styles/NoticeSt';

const Notice = () => {
  return (
    <NoticeBanner>
      <First>
        <p style={{ fontWeight: 'bold', fontSize: '2rem' }}>공지사항</p>
      </First>
      <Second>
        <p style={{ fontSize: '30px' }}>2024년 축제 일정이 업데이트 되었습니다. 확인해 보세요!</p>
      </Second>
    </NoticeBanner>
  );
};

export default Notice;