type Circle = {
    radius: number;
    findDiameter: () => number;
    findArea: () => number;
    findCircumference: () => number;
};

export const createCircle = (radius: number): Circle => {
    return {
        radius,
        findDiameter: () => radius * 2,
        findArea: () => Math.PI * radius ** 2,
        findCircumference: () => 2 * Math.PI * radius
    };
};