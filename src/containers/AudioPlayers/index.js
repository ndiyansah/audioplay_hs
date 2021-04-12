import React, { useState, useEffect } from "react";
import axios from "axios";
import { MainWrapper, Header } from "../../theme/MainStyle/Wrapper";
import ItunesSearch from "../../components/ItunesSearch";
import ItunesList from "../../components/ItunesList";

const AudioPlayers = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState({ hits: [] });

  const fetchSearch = async () => {
      const result = await axios(
        `https://itunes.apple.com/search?term=${search}`
      );
      setData(result.data);
    };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://itunes.apple.com/search?term=pamungkas`
      );
      setData(result.data);
    };

    fetchData();
  }, []);

console.log(search)
  return (
    <>
      <Header>
        <ItunesSearch 
          value={search}
          onChange={(val) => setSearch(val)}
          onSearch={() => {
          fetchSearch({})
        }}
        placeholder="Artists and Songs"
        />
      </Header>

      <MainWrapper>
        <ItunesList data={data} />
      </MainWrapper>
    </>
  );
};

export default AudioPlayers;
