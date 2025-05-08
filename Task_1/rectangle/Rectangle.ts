export interface Rectangle {
    length: number;
    width: number;
}

export function findAreaRectangle(rectangle: Rectangle): number {
    return rectangle.length * rectangle.width;
}
