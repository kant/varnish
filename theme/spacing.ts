import { convertPixelsToRem, convertRemToPx } from '../utils/base';

export class Spacing {
    constructor(public displayName: string, public px: string, public rem: string) {}
    static fromPixels(displayName: string, px: number) {
        return new Spacing(displayName, `${px}px`, convertPixelsToRem(px));
    }

    static fromRems(displayName: string, rem: number) {
        return new Spacing(displayName, convertRemToPx(rem), `${rem}rem`);
    }

    toString() {
        return this.rem;
    }

    getRemValue() {
        return parseFloat(this.rem);
    }

    getPxValue() {
        return parseFloat(this.px);
    }
}

export const spacing = {
    xxs: Spacing.fromPixels('xxs', 4),
    xs: Spacing.fromPixels('xs', 8),
    sm: Spacing.fromPixels('sm', 12),
    md: Spacing.fromPixels('md', 16),
    lg: Spacing.fromPixels('lg', 24),
    xl: Spacing.fromPixels('xl', 36),
    xxl: Spacing.fromPixels('xxl', 64)
};
