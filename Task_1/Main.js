"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dates_1 = require("./dates/Dates");
var Name_1 = require("./name/Name");
var circle_1 = require("./circle/circle");
var rectangle_1 = require("./rectangle/rectangle");
var Triangle_1 = require("./triangle/Triangle");
var MainApp = /** @class */ (function () {
    // private rectangle: Rectangle;
    // private triangle: Triangle;
    function MainApp() {
        // Create an instance with a specific radius.
        this.circle = new circle_1.Circle(5);
        // Create an instance with a specific date1 and date2.
        this.dateUtils = new Dates_1.DateUtils('2024-03-29', '2024-03-21');
        this.nameUtils = new Name_1.NameUtils("john doe");
    }
    MainApp.prototype.runCircleFunction = function () {
        var diameter = this.circle.findDiameter();
        var circumference = this.circle.findCircumference().toFixed(4);
        var area = Math.floor(this.circle.findArea() * 1000) / 1000;
        console.log("diameter = " + diameter + ", circumference = " + circumference + ", area = " + area);
    };
    MainApp.prototype.runDateFunction = function () {
        var processDate = this.dateUtils.getDifferenceBetweenDates();
        console.log("Output : " + processDate.toString());
    };
    MainApp.prototype.runNameFunction = function () {
        var sampleName = this.nameUtils.getInitialNameUppercase();
        console.log("Output : " + sampleName);
    };
    return MainApp;
}());
var app = new MainApp();
app.runCircleFunction();
app.runDateFunction();
app.runNameFunction();
var params = { length: 5, width: 3 };
console.log("Area: " + (0, rectangle_1.findAreaRectangle)(params));
var input = { a: 80, b: 65 };
console.log("Output = " + (0, Triangle_1.findAnglesOfTriangle)(input));
