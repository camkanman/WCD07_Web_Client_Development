export type Rectangle = {
    length: number;
    width: number;
};

export const findAreaRectangle = (params: Rectangle): number => {
    return params.length * params.width;
};
