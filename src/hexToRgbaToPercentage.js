import hexRgb from 'hex-rgb';

export const newColor = (hex) => {
    return newColorArr = hexRgb(hex, {format: 'array'}).map(function (rgb, index) {
        return index <= 2 ? rgb / 255 : rgb
    });
};
