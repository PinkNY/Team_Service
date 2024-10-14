import React from 'react';
import { MainContainer } from '../styles/MainSt';
import SearchBar from './Search';
import DoubleCont from './WrapCont';
import { MapContainer } from '../styles/MapSt';
import NoticeBar from './Notice';
import BottomCon from './BotContainer';

const Main = () => {
  return (
    <>
    <MainContainer>
      <NoticeBar />
      <DoubleCont />
      <SearchBar />
      <MapContainer>
        <h1>Map</h1>
      </MapContainer>
      <BottomCon />
    </MainContainer>
    </>
  );
};

export default Main;