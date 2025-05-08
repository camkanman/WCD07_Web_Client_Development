import { createDateUtils } from "./dates/Dates";
import { createNameUtils } from "./name/Name";
import { createCircle } from "./circle/Circle";
import { Rectangle, findAreaRectangle } from "./rectangle/rectangle";
import { Triangle, findAnglesOfTriangle } from "./triangle/Triangle";

type MainApp = {
    circle: ReturnType<typeof createCircle>;
    dateUtils: ReturnType<typeof createDateUtils>;
    nameUtils: ReturnType<typeof createNameUtils>;
    runCircleFunction: () => void;
    runDateFunction: () => void;
    runNameFunction: () => void;
};

const createMainApp = (): MainApp => {
    const circle = createCircle(5);
    const dateUtils = createDateUtils('2024-03-29', '2024-03-21');
    const nameUtils = createNameUtils("john doe");

    return {
        circle,
        dateUtils,
        nameUtils,
        runCircleFunction: () => {
            try {
                const diameter = circle.findDiameter();
                const circumference = circle.findCircumference().toFixed(4);
                const area = Math.floor(circle.findArea() * 1000) / 1000;
                console.log(`Diameter: ${diameter}, Circumference: ${circumference}, Area: ${area}`);
            } catch (error) {
                console.error("Error in circle calculations:", error);
            }
        },
        runDateFunction: () => {
            try {
                const processDate = dateUtils.getDifferenceBetweenDates();
                console.log(`Selisih hari: ${processDate}`);
            } catch (error) {
                console.error("Error in date calculations:", error);
            }
        },
        runNameFunction: () => {
            try {
                const sampleName = nameUtils.getInitialNameUppercase();
                console.log(`Inisial: ${sampleName}`);
            } catch (error) {
                console.error("Error in name processing:", error);
            }
        }
    };
};

// Menjalankan aplikasi
const app = createMainApp();
app.runCircleFunction();
app.runDateFunction();
app.runNameFunction();

// Menghitung luas persegi panjang
const rectangle: Rectangle = { length: 5, width: 3 };
try {
    console.log(`Luas persegi panjang: ${findAreaRectangle(rectangle)}`);
} catch (error) {
    console.error("Error in rectangle calculation:", error);
}

// Menghitung sudut segitiga
const triangle: Triangle = { a: 80, b: 65 };
try {
    console.log(`Sudut ketiga segitiga: ${findAnglesOfTriangle(triangle)}`);
} catch (error) {
    console.error("Error in triangle calculation:", error);
}
