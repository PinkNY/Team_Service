import React, { useState } from 'react';
import { PageWrapper, Button, MainContent, ChatbotButton, ChatbotWindow, ChatbotMessages, SearchInput, HalfBox } from '../styles/MainSt';
import { MessageCircle, X } from 'lucide-react';
import Notice from './Notice';
import Hotlist from './Hot';
import SearchBar from './Search';
import MapContainer from './Map';

export default function MainPage() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <PageWrapper>
      <MainContent>
        <Notice />
        <HalfBox>
          <Hotlist />
          <Hotlist />
        </HalfBox>
        <SearchBar />
        <MapContainer />
      </MainContent>
      <ChatbotButton onClick={() => setIsChatbotOpen(!isChatbotOpen)}>
        {isChatbotOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </ChatbotButton>
      {isChatbotOpen && (
        <ChatbotWindow>
          <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.5rem' }}>챗봇</h3>
          <ChatbotMessages>
            <p style={{ marginBottom: '0.5rem' }}>안녕하세요! 무엇을 도와드릴까요?</p>
          </ChatbotMessages>
          <SearchInput type="text" placeholder="메시지를 입력하세요..." style={{ marginBottom: '0.5rem' }} />
          <Button primary style={{ width: '100%' }}>전송</Button>
        </ChatbotWindow>
      )}
    </PageWrapper>
  );
}