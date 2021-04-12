import React from "react";
import {
  FONTS,
  FONTS_SIZE,
  FONT_WEIGHT,
  COLORS,
} from "../../theme/MainStyle/Font";
import { ListContainer, LeftWrapper } from "../../theme/MainStyle/ListView";

const albumTextStyle = {
  fontSize: FONTS_SIZE.normal,
  fontWeight: FONT_WEIGHT.medium,
  color: '#B3B3B3',
  fontFamily: 'Nunito Sans',
  marginTop: 0,
  marginBottom: '5px',
}

const trackTextStyle = {
  color: COLORS.black,
  fontWeight: FONT_WEIGHT.bold,
  fontSize: FONTS_SIZE.small,
  fontFamily: 'Nunito Sans',
  margin: 0,
}

const ItunesList = ({ data }) => {
  return (
    <>
      {data.results &&
        !!data.results.length &&
        data.results.map((item, id) => (
          <ListContainer>
            <LeftWrapper>
              <img src={item.artworkUrl60 || ''}style={{ marginRight: '10px' }}/>
              <div key={item.artistId} >
                <p style={{ ...FONTS.infoFont, margin: 0 }}>
                  {item.artistName || ""}
                </p>
                <p style={{ ...trackTextStyle, margin: 0 }}>
                  {item.trackName || ""}
                </p>
                <p style={{ ...albumTextStyle, margin: 0 }}>
                  {item.collectionName || ""}
                </p>
              </div>
            </LeftWrapper>
          </ListContainer>
        ))}
    </>
  );
};

export default ItunesList;
