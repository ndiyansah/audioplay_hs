import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MainWrapper } from '../../theme/MainStyle/Wrapper';
import ItunesList  from '../../components/ItunesList';

const AudioPlayers = () => {
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://itunes.apple.com/search?term=pamungkas`,
      );
      setData(result.data);
    };
 
    fetchData();
  }, []);
 
  return (
    <MainWrapper>
      <h1>Hello World</h1>
      <ItunesList
        data={data}
       />
    </MainWrapper>
  );
};

export default AudioPlayers;
