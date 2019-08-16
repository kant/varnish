export type Dictionary<T> = { [id:string]: T };

function getRootFontSize(dynamic = false): number {
    return parseFloat((dynamic && typeof getComputedStyle !== 'undefined' && getComputedStyle(document.documentElement).fontSize) || '16');
}

// convert rems to px using document font size
export function convertRemToPx(rem: number, dynamic = false): string {
    return `${rem * getRootFontSize(dynamic)}px`;
}
export function convertRemStrToPx(remStr: string, dynamic = false): string {
    return convertRemToPx(parseFloat(remStr), dynamic);
}

// convert px to rems using document font size
export function convertPixelsToRem(px: number, dynamic = false): string {
    return `${px / getRootFontSize(dynamic)}rem`;
}
export function convertPixelsStrToRem(pxStr: string, dynamic = false): string {
    return convertPixelsToRem(parseFloat(pxStr), dynamic);
}

export const log = (val: any, force?: boolean) => {
    if (force || process.env.NODE_ENV !== 'production') {
        console.log(val);
    }
}
