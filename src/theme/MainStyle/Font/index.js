export const COLORS = {
  black: "#000000",
  white: "#fff",
  greyRegular: "#666666",
  greyWhite: "#B3B3B3",
};

export const FONT_WEIGHT = {
  bold: 700,
  medium: 600,
  regular: 400,
};

export const FONTS_SIZE = {
  small: 12,
  normal: 14,
  medium: 16,
};

export const FONTS = {
  infoFont: {
    fontSize: FONTS_SIZE.medium,
    fontWeight: FONT_WEIGHT.bold,
    color: COLORS.white,
    fontFamily: "Nunito Sans",
  },
  albumTextStyle : {
  fontSize: FONTS_SIZE.normal,
  fontWeight: FONT_WEIGHT.small,
  color: COLORS.greyWhite,
  fontFamily: "Nunito Sans",
  marginTop: 0,
  marginBottom: "5px",
},
 trackTextStyle : {
  color: COLORS.greyWhite,
  fontWeight: FONT_WEIGHT.medium,
  fontSize: FONTS_SIZE.medium,
  fontFamily: "Nunito Sans",
  margin: 0,
}
};
