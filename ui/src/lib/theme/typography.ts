import { convertPixelsToRem } from '../utils/base';
import { spacing } from './spacing';
import { color } from './colors';
import { fontWeight } from './fontWeight';

// general
const defaultFontSize = convertPixelsToRem(16);
const defaultFontFamily = 'Lato';
const fontWeightLight = fontWeight.light;
const fontWeightRegular = fontWeight.regular;
const fontWeightMedium = fontWeight.medium;
const fontWeightBold = fontWeight.bold;
const fallbackDefaultFonts = ['Helvetica Neue', 'Helvetica', '-apple-system', 'BlinkMacSystemFont',
    'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Arial', 'sans-serif',
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'];
const fallbackDefaultCodeFonts = ['SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo',
    'Courier', 'monospace'];

// headlines
const headlineFontFamily = 'Raleway';
const h1 = {
    fontFamily: [ headlineFontFamily, ...fallbackDefaultFonts ].join(", "),
    fontSize: convertPixelsToRem(46),
    lineHeight: convertPixelsToRem(50),
    fontWeight: fontWeightBold
};
const h2 = {
    fontFamily: [ headlineFontFamily, ...fallbackDefaultFonts ].join(", "),
    fontSize: convertPixelsToRem(36),
    lineHeight: convertPixelsToRem(40),
    fontWeight: fontWeightBold
};
const h3 = {
    fontFamily: [ headlineFontFamily, ...fallbackDefaultFonts ].join(", "),
    fontSize: convertPixelsToRem(30),
    lineHeight: convertPixelsToRem(36),
    fontWeight: fontWeightBold
};
const h4 = {
    fontFamily: [ headlineFontFamily, ...fallbackDefaultFonts ].join(", "),
    fontSize: convertPixelsToRem(24),
    lineHeight: convertPixelsToRem(28),
    fontWeight: fontWeightBold
};
const h5 = {
    fontFamily: [ headlineFontFamily, ...fallbackDefaultFonts ].join(", "),
    fontSize: convertPixelsToRem(18),
    lineHeight: convertPixelsToRem(22),
    fontWeight: fontWeightBold
};
const h6 = {
    fontFamily: [ headlineFontFamily, ...fallbackDefaultFonts ].join(", "),
    fontSize: convertPixelsToRem(13),
    lineHeight: convertPixelsToRem(18),
    fontWeight: fontWeightMedium
};

// body
const bodyFontFamily = defaultFontFamily;
const bodyJumbo = {
    fontFamily: [ bodyFontFamily, ...fallbackDefaultFonts ].join(", "),
    fontSize: convertPixelsToRem(24),
    lineHeight: convertPixelsToRem(30),
};
const bodyBig = {
    fontFamily: [ bodyFontFamily, ...fallbackDefaultFonts ].join(", "),
    fontSize: convertPixelsToRem(18),
    lineHeight: convertPixelsToRem(27)
};
const body = {
    fontFamily: [ bodyFontFamily, ...fallbackDefaultFonts ].join(", "),
    fontSize: convertPixelsToRem(16),
    lineHeight: convertPixelsToRem(22),
};
const bodyBold = {
    fontFamily: body.fontFamily,
    fontSize: body.fontSize,
    lineHeight: body.lineHeight,
    fontWeight: fontWeightBold
};
const bodySmall = {
    fontFamily: [ bodyFontFamily, ...fallbackDefaultFonts ].join(", "),
    fontSize: convertPixelsToRem(14),
    lineHeight: convertPixelsToRem(20),
};
const bodySmallBold = {
    fontFamily: bodySmall.fontFamily,
    fontSize: bodySmall.fontSize,
    lineHeight: bodySmall.lineHeight,
    fontWeight: fontWeightBold
};
const bodyMicro = {
    fontFamily: [ bodyFontFamily, ...fallbackDefaultFonts ].join(", "),
    fontSize: convertPixelsToRem(13),
    lineHeight: convertPixelsToRem(18),
};
const notification = {
    fontFamily: [ bodyFontFamily, ...fallbackDefaultFonts ].join(", "),
    fontSize: convertPixelsToRem(14),
    lineHeight: convertPixelsToRem(18),
};
const notificationBold = {
    fontFamily: notification.fontFamily,
    fontSize: notification.fontSize,
    lineHeight: notification.lineHeight,
    fontWeight: fontWeightBold
};

//attribution
const attributionFontFamily = 'Volkhov';
const quote = {
  fontFamily: [ attributionFontFamily, ...fallbackDefaultFonts ].join(", "),
  fontSize: convertPixelsToRem(30),
  lineHeight: convertPixelsToRem(42),
  fontWeight: fontWeightBold
};
const author = {
  fontFamily: [ attributionFontFamily, ...fallbackDefaultFonts ].join(", "),
  fontSize: convertPixelsToRem(18),
  lineHeight: convertPixelsToRem(36),
};

//code
const codeFontFamily = 'Roboto Mono';
const code = {
  fontFamily: [ codeFontFamily, ...fallbackDefaultCodeFonts ].join(", "),
  fontSize: convertPixelsToRem(13),
  lineHeight: convertPixelsToRem(18),
  contrastBackgroundColor: color.N10,
  contrastColor: color.N5,
  padding: spacing.lg
};

export const typography = {
    // general
    fontSize: defaultFontSize,
    fontFamily: defaultFontFamily,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,

    // headlines
    headlineFontFamily,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,

    // body
    bodyFontFamily,
    bodyJumbo,
    bodyBig,
    body,
    bodyBold,
    bodySmall,
    bodySmallBold,
    bodyMicro,
    notification,
    notificationBold,

    // attribution
    attributionFontFamily,
    quote,
    author,

    // code
    codeFontFamily,
    code
};
