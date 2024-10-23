import React from "react";
import { Card, CardHeader, CardTitle, CardContent, FestivalCard, FestivalGrid } from '../styles/HotSt';

const Hotlist = () => {
  const topFestivals = [
    { id: 1, name: "서울 랜턴 페스티벌", location: "서울", date: "2024-10-01" },
    { id: 2, name: "부산 불꽃 축제", location: "부산", date: "2024-10-15" },
    { id: 3, name: "전주 비빔밥 축제", location: "전주", date: "2024-09-20" },
    { id: 4, name: "진주 남강유등축제", location: "진주", date: "2024-10-01" },
    { id: 5, name: "보령 머드축제", location: "보령", date: "2024-07-15" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>인기 축제 Top 5</CardTitle>
      </CardHeader>
      <CardContent>
        <FestivalGrid>
          {topFestivals.map((festival) => (
            <FestivalCard key={festival.id}>
              <CardContent>
                <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.5rem' }}>{festival.name}</h3>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{festival.location}</p>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{festival.date}</p>
              </CardContent>
            </FestivalCard>
          ))}
        </FestivalGrid>
      </CardContent>
    </Card>
  );
};

export default Hotlist;