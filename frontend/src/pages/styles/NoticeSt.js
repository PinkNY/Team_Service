import styled from "styled-components";

export const MentBar = styled.div`
  width: 100%;
  background-color: white;
  padding: 10px 0;
  text-align: center;
  position: relative;

  border: 3px solid black;
  border-radius: 15px;

  @media (min-width: 1024px) {
    width: 1100px;
  }
`;

export const Ment = styled.p`
  margin: 0;
  font-size: 30px;
  font-weight: bold;
  color: black;
`;