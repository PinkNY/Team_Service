import styled from "styled-components";

export const Nav = styled.nav`
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #3b82f6;
`;

export const NavButtons = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1rem;
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