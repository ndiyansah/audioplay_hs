import React from "react";

import { FONTS } from "../../../theme/MainStyle/Font";
import { ListContainer, LeftWrapper } from "../../../theme/MainStyle/ListView";

import PlayAudio from "../../../components/PlayAudio";

const ListView = ({ handleClickSong, data }) => {
  return (
    <>
      {data.results &&
        !!data.results.length &&
        data.results.map((item, id) => (
          <ListContainer key={id} value={item.collectionName}>
            <LeftWrapper>
              <img
                src={item.artworkUrl60 || ""}
                style={{ marginRight: "10px" }}
                alt="img-view"
              />
              <div key={item.artistId}>
                <p style={{ ...FONTS.infoFont, margin: 0 }}>
                  {item.artistName || ""}
                </p>
                <p style={{ ...FONTS.trackTextStyle, margin: 0 }}>
                  {item.trackName || ""}'
                </p>
                <p style={{ ...FONTS.albumTextStyle, margin: 0 }}>
                  {item.collectionName || ""}
                </p>
              </div>
            </LeftWrapper>

            <PlayAudio
              key={id}
              handleClick={() => {
                handleClickSong(item.previewUrl);
              }}
            />
          </ListContainer>
        ))}
    </>
  );
};

export default ListView;
