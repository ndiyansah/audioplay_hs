import React, { useState, useEffect, useRef, Fragment } from "react";
import axios from "axios";

import { MainWrapper, Header } from "../../theme/MainStyle/Wrapper";

import { Sticky } from "../../theme/MainStyle/Sticky";
import { API_URL } from "../../services/API_URL";

import ItunesSearch from "../../components/ItunesSearch";

import Audio from "./components/Audio";
import ListView from "./components/ListView";

const AudioPlayers = () => {
  const audio = useRef();

  const [search, setSearch] = useState("");
  const [data, setData] = useState({ hits: [] });

  const fetchSearch = async () => {
    const result = await axios(`${API_URL}?term=${search}`);
    setData(result.data);
  };

  const [source, setSource] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${API_URL}?term=khalid`);
      setData(result.data);
    };

    fetchData();
  }, []);

  const handleClickSong = (source) => {
    setSource(source);
    if (audio.current) {
      audio.current.pause();
      audio.current.load();
      audio.current.play();
    }
  };

  return (
    <Fragment>
      <Header>
        <ItunesSearch
          value={search}
          onChange={(val) => setSearch(val)}
          onSearch={() => {
            fetchSearch({});
          }}
          placeholder="Artists and Songs"
        />
      </Header>

      <MainWrapper>
        <ListView
          data={data}
          handleClickSong={handleClickSong}
        />
        {source && source !== null && (
          <Sticky position="bottom">
            <Audio ref={audio} src={source} />
          </Sticky>
        )}
      </MainWrapper>
    </Fragment>
  );
};

export default AudioPlayers;
