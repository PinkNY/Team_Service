import styled from "styled-components";

export const ChatbotWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  max-width: 400px;
  height: ${(props) => (props.isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: height 0.5s ease;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 20px;
`;

export const ChatContent = styled.div`
  padding: 20px;
  height: calc(100% - 125px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  padding: 10px;
  background: #f1f1f1;
  border-top: 3px solid #ddd;
`;

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  border: none;
  border-radius: 15px;
  margin-right: 5px;
`;

export const SendButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

export const Message = styled.div`
  background: ${(props) => (props.isUser ? '#007bff' : '#ddd')};
  color: ${(props) => (props.isUser ? 'white' : 'black')};
  align-self: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
  padding: 10px;
  border-radius: 10px;
  margin: 5px 0;
  max-width: 80%;
`;