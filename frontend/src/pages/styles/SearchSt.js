import styled from "styled-components";
import { Search } from 'lucide-react';
import { media } from "../MediaQ";

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
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
  left: 19.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;

  ${media.mobile} {
    left: 0;
    margin-left: 2.5%;
  }
`;