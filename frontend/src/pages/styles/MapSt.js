import styled from "styled-components";

export const MapContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 700px;
  margin: 20px 10px;

  border: 3px solid black;
  border-radius: 15px;
  flex-grow: 0;
  flex-shrink: 0;

  @media (min-width: 1024px) {
    width: 1100px;
  }
`;