import styled from 'styled-components';

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
`;

export const MainContent = styled.main`
  flex-grow: 1;
  padding: 2rem 1rem;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border-radius: 9999px;
  border: 2px solid #3b82f6;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  ${(props) =>
    props.primary &&
    `
    background-color: #3b82f6;
    color: white;
    &:hover {
      background-color: #2563eb;
    }
  `}

  ${(props) =>
    props.ghost &&
    `
    background-color: transparent;
    &:hover {
      background-color: #f3f4f6;
    }
  `}
`;

export const ChatbotButton = styled(Button)`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3b82f6;
  color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  &:hover {
    background-color: #2563eb;
  }
`;

export const ChatbotWindow = styled.div`
  position: fixed;
  bottom: 5rem;
  right: 1rem;
  width: 20rem;
  height: 24rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const ChatbotMessages = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 1rem;
  background-color: #f9fafb;
  padding: 0.5rem;
  border-radius: 0.25rem;
`;

export const HalfBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;