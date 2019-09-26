import { convertPixelsToRem } from '../utils/base';
import { spacing } from './spacing';
import { color, Color } from './colors';
import { fontWeight } from './fontWeight';
import { palette } from './palette';

export interface ButtonStyle {
    padding?: string;
    height?: string;
    fontWeight?: number;
    color?: Color;
    contrastColor?: Color;
    border?: string;
    contrastBorder?: string;
    background?: Color;
    textTransform?: string;
    focus: any; // force required so we dont have to check for undefined later
    hover: any; // force required so we dont have to check for undefined later
    disabled: any; // force required so we dont have to check for undefined later
}

export interface Button {
    primary: ButtonStyle;
    default: ButtonStyle;
    link: ButtonStyle;
    marketing: ButtonStyle;
}
export const defaultSpacing = [spacing.md, spacing.xs];
const marketingSpacing = [spacing.lg, spacing.sm];
const paddingWithBorderInside = (borderWidth: number, initialPadding = defaultSpacing) => {
    // initial pad minus the border width + a single pixel for the standard border width expected by other components
    return `${convertPixelsToRem(
        initialPadding[1].getPxValue() - borderWidth + 1
    )} ${convertPixelsToRem(initialPadding[0].getPxValue() - borderWidth + 1)}`;
};
export const borderColor = palette.border.dark;
const marketingColor = palette.secondary.main;
const whiteColor = palette.text.contrast;
const blackColor = palette.text.primary;

export const button = {
    default: {
        background: color.transparent,
        border: `1px solid ${borderColor}`,
        color: blackColor,
        contrastColor: whiteColor,
        fontWeight: fontWeight.bold,
        padding: paddingWithBorderInside(1),
        textTransform: 'auto',
        hover: {
            background: color.transparent,
            border: `2px solid ${borderColor}`,
            padding: paddingWithBorderInside(2)
        },
        focus: {
            background: color.transparent,
            border: `3px solid ${borderColor}`,
            padding: paddingWithBorderInside(3)
        },
        disabled: {
            background: color.transparent,
            border: `1px solid ${borderColor}`,
            color: blackColor,
            contrastColor: whiteColor,
            opacity: 0.5,
            padding: paddingWithBorderInside(1)
        }
    },
    primary: {
        background: palette.primary.main,
        border: `2px solid transparent`,
        color: whiteColor,
        padding: paddingWithBorderInside(2),
        hover: {
            border: `2px solid transparent`,
            background: palette.primary.dark
        },
        focus: {
            border: `2px solid ${palette.primary.veryDark}`,
            padding: paddingWithBorderInside(2),
            color: whiteColor
        },
        disabled: {
            opacity: 0.5,
            background: palette.primary.veryDark,
            border: `2px solid transparent`,
            padding: paddingWithBorderInside(2),
            color: whiteColor
        }
    },
    link: {
        background: color.transparent,
        border: `2px solid transparent`,
        color: palette.primary.dark,
        contrastColor: whiteColor,
        padding: paddingWithBorderInside(2),
        hover: {
            background: color.B2,
            contrastBackground: palette.primary.dark,
            border: `2px solid transparent`,
            padding: paddingWithBorderInside(2)
        },
        focus: {
            border: `2px solid ${palette.primary.light}`,
            padding: paddingWithBorderInside(2)
        },
        disabled: {
            border: `2px solid transparent`,
            color: palette.primary.light,
            contrastColor: whiteColor,
            opacity: 0.5,
            padding: paddingWithBorderInside(2)
        }
    },
    marketing: {
        border: `2px solid ${marketingColor}`,
        contrastBorder: `2px solid ${whiteColor}`,
        color: marketingColor,
        contrastColor: whiteColor,
        fontWeight: fontWeight.bold,
        padding: paddingWithBorderInside(2, marketingSpacing),
        textTransform: 'uppercase',
        hover: {
            background: marketingColor,
            contrastBackground: whiteColor,
            border: `2px solid ${marketingColor}`,
            contrastBorder: `2px solid ${whiteColor}`,
            color: whiteColor,
            contrastColor: marketingColor,
            padding: paddingWithBorderInside(2, marketingSpacing)
        },
        focus: {
            background: color.transparent,
            border: `2px solid ${palette.secondary.dark}`,
            contrastBorder: `2px solid ${palette.secondary.light}`,
            padding: paddingWithBorderInside(2, marketingSpacing)
        },
        disabled: {
            background: color.transparent,
            border: `2px solid ${marketingColor}`,
            contrastBorder: `2px solid ${whiteColor}`,
            color: marketingColor,
            contrastColor: whiteColor,
            opacity: 0.5,
            padding: paddingWithBorderInside(2, marketingSpacing)
        }
    }
};

/**
 * This is the best we can do without typeguards (which drop in TS 3.7)
 * to verify that the `button` implements the `Button` interface.
 *
 * TODO: Use TypeGuards instead.
 */
function isButtonStyle(def: Button): void {}
isButtonStyle(button);
