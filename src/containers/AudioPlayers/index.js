import React, { useState, useEffect } from "react";
import axios from "axios";

import { MainWrapper, Header } from "../../theme/MainStyle/Wrapper";
import { Sticky } from "../../theme/MainStyle/Sticky";
import { BlackCardAudio } from "../../theme/MainStyle/Card";

import ItunesSearch from "../../components/ItunesSearch";
import ItunesList from "../../components/ItunesList";
import BarAudio from "../../components/BarAudio";
import PlayAudio from "../../components/PlayAudio";
import PauseAudio from "../../components/PauseAudio";
import useAudioPlayer from "../../hooks/useAudioPlayer";

const AudioPlayers = () => {
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  } = useAudioPlayer();
  const [search, setSearch] = useState("");
  const [data, setData] = useState({ hits: [] });

  const fetchSearch = async () => {
    const result = await axios(
      `https://itunes.apple.com/search?term=${search}`
    );
    setData(result.data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://itunes.apple.com/search?term=khalid`);
      setData(result.data);
    };

    fetchData();
  }, []);

  console.log(search);
  return (
    <>
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
        <ItunesList data={data} />
        <Sticky position="bottom">
          <BlackCardAudio>
            <audio
              id="audio"
              src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview114/v4/05/35/c9/0535c9bd-132d-931d-e05c-058f03e25303/mzaf_973562741627835331.plus.aac.p.m4a"
            >
              Your browser does not support the <code>audio</code> element.
            </audio>

            {/* <Song songName="Instant Crush" songArtist="Daft Punk ft. Julian Casablancas" /> */}
            <div className="controls">
              {playing ? (
                <PauseAudio handleClick={() => setPlaying(false)} />
              ) : (
                <PlayAudio handleClick={() => setPlaying(true)} />
              )}
              <BarAudio
                curTime={curTime}
                duration={duration}
                onTimeUpdate={(time) => setClickedTime(time)}
              />
            </div>
          </BlackCardAudio>
        </Sticky>
      </MainWrapper>
    </>
  );
};

export default AudioPlayers;
