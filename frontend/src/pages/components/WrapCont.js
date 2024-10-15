import React from "react";
import { ContainerWrapper, Hot, Persnal } from "../styles/WrapContSt";

const DoubleCont = () => {
  return (
    <ContainerWrapper>
      <Hot>
        <h1>HOT</h1>
      </Hot>
      <Persnal>
        <h1>Personal</h1>
      </Persnal>
    </ContainerWrapper>
  );
};

export default DoubleCont;