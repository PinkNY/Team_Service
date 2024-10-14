import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
`;

export const FestivalCard = styled.div`
  width: 80%;
  padding: 15px;
  margin: 10px 0;
  background-color: white;
  border-radius: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  h3 {
    margin: 0 0 10px;
    font-size: 20px;
  }

  p {
    margin: 5px 0;
    color: #666;
  }
`;