export const COLORS = {
  black: '#000000',
  white: '#fff',
  greyRegular: '#666666',
}

export const FONT_WEIGHT = {
  bold: 700,
  medium: 600,
  regular: 400,
}

export const FONTS_SIZE = {
  small: 12,
  normal: 14,
  medium: 16,
}

export const FONTS = {
  smallFont: {
    fontSize: FONTS_SIZE.small,
    fontWeight: FONT_WEIGHT.regular,
    color: COLORS.black,
    fontFamily: 'Nunito Sans',
  },
  regularFont: {
    fontSize: FONTS_SIZE.normal,
    fontWeight: FONT_WEIGHT.regular,
    color: COLORS.greyRegular,
    fontFamily: 'Nunito Sans',
  },
  boldFont: {
    fontSize: FONTS_SIZE.normal,
    fontWeight: FONT_WEIGHT.medium,
    color: COLORS.black,
    fontFamily: 'Nunito Sans',
  },
  infoFont: {
    fontSize: FONTS_SIZE.medium,
    fontWeight: FONT_WEIGHT.bold,
    fontFamily: 'Nunito Sans',
  },
  defaultFont: {
    fontSize: FONTS_SIZE.normal,
    fontWeight: FONT_WEIGHT.regular,
    color: COLORS.black,
    fontFamily: 'Nunito Sans',
  },
}
