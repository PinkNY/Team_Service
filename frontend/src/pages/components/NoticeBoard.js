import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Title, Table, Th, Td, PaginationContainer, PageButton, SearchContainer, Select, Input, Button, notices } from "../styles/NoticeBoardSt";

const NoticeBoard = () => {
  const [searchCategory, setSearchCategory] = useState("title")
  const [searchQuery, setSearchQuery] = useState("")

  const navigate = useNavigate();

  const handleNoticeClick = () => {
    navigate('/notice');
  };

  return (
    <Container>
      <Title>공지사항</Title>
      <Table>
        <thead>
          <tr>
            <Th>번호</Th>
            <Th>제목</Th>
            <Th>작성일</Th>
            <Th>작성자</Th>
          </tr>
        </thead>
        <tbody>
          {notices.map((notice) => (
            <tr key={notice.id}>
              <Td>{notice.id}</Td>
              <Td>{notice.title}</Td>
              <Td>{notice.date}</Td>
              <Td>{notice.author}</Td>
            </tr>
          ))}
        </tbody>
      </Table>

      <PaginationContainer>
        {[1, 2, 3, 4, 5].map((page) => (
          <PageButton key={page}>
            {page}
          </PageButton>
        ))}
      </PaginationContainer>

      <SearchContainer>
        <Select
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
        >
          <option value="title">제목</option>
          <option value="content">내용</option>
          <option value="titleAndContent">제목+내용</option>
        </Select>
        <Input
          type="text"
          placeholder="검색어를 입력하세요"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button>검색</Button>
      </SearchContainer>
    </Container>
  );
};

export default NoticeBoard;