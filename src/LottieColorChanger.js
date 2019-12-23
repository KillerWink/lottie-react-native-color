import { newColor } from './hexToRgbaToPercentage';

const regex = /(\d\.[0-9]+\,\d\.[0-9]+\,\d\.[0-9]+\,\d)/g;

export const changeSVGColor = (svg, color) => {
    const parsedSVG = JSON.stringify(svg);
    return JSON.parse(parsedSVG.replace(regex, `${newColor(color).join(',')}`));
};

