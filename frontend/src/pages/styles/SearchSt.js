import styled from "styled-components";
import { Search } from 'lucide-react';
import { media } from "../MediaQ";

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const SearchInput = styled.input`
  width: 50%;
  font-size: 20px;
  padding: 1rem 1rem 1rem 2.5rem;
  border-radius: 9999px;
  border: 2px solid #3b82f6;

  ${media.mobile} {
    width: 100%;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
  }
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  
  ${media.pc} {
    position: absolute;
    left: 275px;
  }

  ${media.tablet} {
    left: 3rem;
  }

  ${media.mobile} {
    left: 1rem;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: 2px solid #3b82f6;
  border-radius: 15px;
  width: 80px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  background-color: #3b82f6;
  color: white;
  white-space: nowrap;

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