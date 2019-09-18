import { color } from './colors';

const defaultColor = color.B7;
const contrastColor = color.B4;

export const link = {
    color: defaultColor,
    activeColor: defaultColor,
    decoration: 'none',
    contrastColor: contrastColor,
    contrastActiveColor: contrastColor,
    hover: {
        color: defaultColor,
        decoration: 'underline',
        contrastColor: contrastColor
    }
};
