import { DateUtils } from "./dates/Dates";
import { NameUtils } from "./name/Name";
import { Circle } from "./circle/circle";
import { Rectangle, findAreaRectangle } from "./rectangle/rectangle";
import { Triangle, findAnglesOfTriangle } from "./triangle/Triangle";

class MainApp {
    private circle: Circle;
    private dateUtils: DateUtils;
    private nameUtils: NameUtils;
    // private rectangle: Rectangle;
    // private triangle: Triangle;

    constructor() {
        // Create an instance with a specific radius.
        this.circle = new Circle(5);
        // Create an instance with a specific date1 and date2.
        this.dateUtils = new DateUtils('2024-03-29', '2024-03-21');
        this.nameUtils = new NameUtils("john doe");
    }

    runCircleFunction(): void {
        const diameter = this.circle.findDiameter();
        const circumference = this.circle.findCircumference().toFixed(4);
        const area = Math.floor(this.circle.findArea() * 1000) / 1000;
        console.log("diameter = " + diameter + ", circumference = " + circumference + ", area = " + area);
    }

    runDateFunction(): void {
        const processDate = this.dateUtils.getDifferenceBetweenDates();
        console.log("Output : " + processDate.toString());

    }

    runNameFunction(): void {
        const sampleName = this.nameUtils.getInitialNameUppercase();
        console.log("Output : " + sampleName);
    }

    
    
}


const app = new MainApp();
app.runCircleFunction();
app.runDateFunction();
app.runNameFunction();
const params: Rectangle = { length: 5, width: 3 };
console.log("Area: " + findAreaRectangle(params));
const input: Triangle = { a: 80, b: 65 };
console.log("Output = " + findAnglesOfTriangle(input));
