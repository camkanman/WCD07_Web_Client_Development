export class Circle {
    constructor(public radius: number) {}

    findDiameter(): number {
        return this.radius * 2;
    }

    findArea(): number {
        return Math.PI * this.radius ** 2;
    }

    findCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}