import { log } from './base';

export function toGrayscale(ctx: CanvasRenderingContext2D) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
    for (let j = 0; j < imageData.width; j++) {
        for (let i = 0; i < imageData.height; i++) {
            const index=(i*4)*imageData.width+(j*4);
            const red=imageData.data[index];
            const green=imageData.data[index+1];
            const blue=imageData.data[index+2];
            const average=(red+green+blue)/3;
            imageData.data[index]=average;
            imageData.data[index+1]=average;
            imageData.data[index+2]=average;
        }
    }
    return imageData;
}

export const compressImage = (file: File, maxFileBytes: number, onSuccess: (file: File) => void, onError?: (err: string) => void) => {
    const path = require('path');
    const fileName = path.basename(file.name);
    const newFileName = `${fileName}_c.jpg`;
    log(`Compressing ${file.name} (${file.size}Bytes)`)
    // maxPixels captures the maximum pixels in an image that's 1 MB in size.
    // 3Bytes/px was calculated from random data case of 1MB png/jpg quality 1 https://superuser.com/questions/636333/what-is-the-largest-size-of-a-640x480-jpeg
    const maxPixels = maxFileBytes / 3;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => { // todo: what is the type of the event
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const curPixels = img.width * img.height;
            const scale = Math.sqrt(maxPixels) / Math.sqrt(curPixels);
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;
            const ctx = canvas.getContext('2d');
            if(ctx) {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                ctx.canvas.toBlob((blob: any) => { // todo: what is the type of the blob
                    const compressedFile = new File([blob], newFileName, {
                        type: 'image/jpeg',
                        lastModified: Date.now()
                    });
                    log(`Generated ${newFileName} (${compressedFile.size}Bytes)`)
                    onSuccess(compressedFile);
                }, 'image/jpeg', 1);
            } else {
                if(onError) {
                    onError('Invalid context');
                }
            }
        },
        reader.onerror = (error: ProgressEvent) => {
            console.log(error);
            if(onError) {
                onError('Error compressing image.');
            }
        }
    };
}
