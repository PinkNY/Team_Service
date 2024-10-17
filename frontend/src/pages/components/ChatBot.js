import React, { useState } from 'react';
import {  ChatbotWrapper, CloseButton, ChatContent, InputWrapper, Input, SendButton, Message,} from '../styles/ChatBotSt';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');

      // 챗봇 응답 추가 로직
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: '제가 도와드릴 수 있어요!', isUser: false }]);
      }, 1000);
    }
  };

  return (
    <>
      <ChatbotWrapper isOpen={isOpen}>
        {isOpen && (
          <>
            <CloseButton onClick={toggleChatbot}>X</CloseButton>
            <ChatContent>
              {messages.map((msg, index) => (
                <Message key={index} isUser={msg.isUser}>
                  {msg.text}
                </Message>
              ))}
            </ChatContent>
            <InputWrapper>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <SendButton onClick={handleSend}>보내기</SendButton>
            </InputWrapper>
          </>
        )}
      </ChatbotWrapper>
      {!isOpen && (
        <CloseButton onClick={toggleChatbot}>💬</CloseButton>
      )}
    </>
  );
};

export default Chatbot;
