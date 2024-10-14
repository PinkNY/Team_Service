import React, { useEffect, useState } from "react";
import axios from 'axios';
import { ListContainer, FestivalCard } from '../styles/ListSt';

const FestivalList = () => {
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    axios.get('/api/festivals/')
      .then((response) => {
        setFestivals(response.data);
      })
      .catch((error) => {
        console.error('Error fetching festivals:', error);
      });
  }, []);

  return (
    <ListContainer>
      {festivals.map((festival) => (
        <FestivalCard key={festival.id}>
          <h3>{festival.name}</h3>
          <p>{festival.location}</p>
          <p>{festival.date}</p>
        </FestivalCard>
      ))}
    </ListContainer>
  );
};

export default FestivalList;