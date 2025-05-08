"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.findDiameter = function () {
        return this.radius * 2;
    };
    Circle.prototype.findArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.findCircumference = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
exports.Circle = Circle;
