import styled from "styled-components";

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
  gap: 5%;
  height: 500px;

  // border: 3px solid black;

  @media (min-width: 1024px) {
    width: 1100px;
  }
`;

export const Hot = styled.div`
  display: flex;
  width: 47.5%;
  height: 100%;
  justify-content: center;
  align-items: center;

  border: 3px solid black;
  border-radius: 15px;
`;

export const Persnal = styled.div`
  display: flex;
  width: 47.5%;
  height: 100%;
  justify-content: center;
  align-items: center;

  border: 3px solid black;
  border-radius: 15px;
`;