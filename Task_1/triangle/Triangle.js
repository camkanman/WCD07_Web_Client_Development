"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAnglesOfTriangle = findAnglesOfTriangle;
function findAnglesOfTriangle(triangle) {
    return 180 - (triangle.a + triangle.b);
}
