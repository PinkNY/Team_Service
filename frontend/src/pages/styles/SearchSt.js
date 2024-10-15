import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 100%;
  position: relative;

  @media (min-width: 1024px) {
    width: 1100px;
  }
`;

export const SearchInput = styled.div`
  padding: 10px;
  font-size: 15px;
  border: 3px solid black;
  border-radius: 15px;
  width: 100%;
  height: 30px;
  margin-rigth: 10px;
  position: relative;

  &:focus {
    outline: none;
    border-color: #007BFF;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 5px;

  padding: 10px 20px;
  background-color: transparent;
  font-size: 40px;
  border: none;
  cursor: pointer;
`;