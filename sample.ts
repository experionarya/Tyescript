function greeter(person) {
    return "Hello, " + person;
}

var user = "Arya";

document.getElementById("div1").innerHTML = greeter(user);

// ********************************************************************************//


let fullName: string = `Arya`;
let age: number = 22;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`

document.getElementById("div2").innerHTML=sentence;

// ***********************************************************************//


enum Color {Red = 0, Green, Blue};
let colorName: string = Color[2];

document.getElementById("div3").innerHTML=colorName;

// *************************************************************************//


let list: number[] = [1, 2, 3];
document.getElementById("div4").innerHTML=list;

// *********************************************************************************//


let x: [string, number];
x = ["hello", 10];
// x = [10, "hello"];
document.getElementById("div5").innerHTML=x[0].substr(1);

// ********************************************************************************//


let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
document.getElementById("div6").innerHTML=strLength;

// ***********************************************************************************//


function sumMatrix(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    document.getElementById("div7").innerHTML=sum;

    return sum;
}
sumMatrix([[1,2,3],[1,2,3]]);

// *******************************************************************************************//


let input = [1, 2];
let [first, second] = input;
document.getElementById("div8").innerHTML=first;
document.getElementById("div9").innerHTML=second;

// ******************************************************************************************//


let [first, ...rest] = [1, 2, 3, 4];
document.getElementById("div10").innerHTML=first;
document.getElementById("div11").innerHTML=rest;

// ********************************************************************************************//


let o = {
    a: "foo",
    b: 12,
    c: "bar"
}
let { a, b } = o;
document.getElementById("div12").innerHTML=a;
document.getElementById("div13").innerHTML=b;

// ******************************************************************************************//


class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

// ****************************************************************************************//

class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Arya", "SE");
console.log(howard.getElevatorPitch());

// ***************************************************************************************//

class Employee {
    fullName: string;
}

let employee = new Employee();
employee.fullName = "Arya S";
if (employee.fullName) {
    console.log(employee.fullName);
}

// ********************************************************************************************//

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

// *********************************************************************************************//

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
        console.log("here"+newSquare.color);
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
        console.log("here is"+newSquare.area);
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});