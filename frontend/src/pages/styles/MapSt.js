import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const CardHeader = styled.div`
  background-color: #3b82f6;
  color: white;
  padding: 1rem;
`;

export const CardTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin: 0;
`;

export const MapPlaceholder = styled.div`
  background-color: #e5e7eb;
  height: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  @media (min-width: 640px) {
    height: 20rem;
  }
  @media (min-width: 768px) {
    height: 24rem;
  }
`;