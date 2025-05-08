export type Triangle = {
    a: number;
    b: number;
};

export const findAnglesOfTriangle = (triangle: Triangle): number => {
    return 180 - (triangle.a + triangle.b);
};
  