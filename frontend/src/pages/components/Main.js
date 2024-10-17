import React from 'react';

import { MainContainer } from '../styles/MainSt';
import SearchBar from './Search';
import DoubleCont from './WrapCont';
import NoticeBar from './Notice';
import BottomCon from './BotContainer';

import Chatbot from './ChatBot';
// import { MapContainer } from '../styles/MapSt';

const Main = () => {
  return (
    <>
    <MainContainer>
      <NoticeBar />
      <DoubleCont />
      <SearchBar />
      {/* <MapContainer>
        <h1>Map</h1>
      </MapContainer> */}
      <Chatbot />
      <BottomCon />
    </MainContainer>
    </>
  );
};

export default Main;