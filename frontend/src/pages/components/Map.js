import React from "react";
import { Card, CardHeader, CardTitle, MapPlaceholder } from '../styles/MapSt';

const MapContainer = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>내 위치</CardTitle>
      </CardHeader>
      <MapPlaceholder>
        지도가 여기에 표시됩니다.
      </MapPlaceholder>
    </Card>
  );
};

export default MapContainer;