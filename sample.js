var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function greeter(person) {
    return "Hello, " + person;
}
var user = "Arya";
document.getElementById("div1").innerHTML = greeter(user);
// ********************************************************************************//
var fullName = "Arya";
var age = 22;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
document.getElementById("div2").innerHTML = sentence;
// ***********************************************************************//
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[2];
document.getElementById("div3").innerHTML = colorName;
// *************************************************************************//
var list = [1, 2, 3];
document.getElementById("div4").innerHTML = list;
// *********************************************************************************//
var x;
x = ["hello", 10];
// x = [10, "hello"];
document.getElementById("div5").innerHTML = x[0].substr(1);
// ********************************************************************************//
var someValue = "this is a string";
var strLength = someValue.length;
document.getElementById("div6").innerHTML = strLength;
// ***********************************************************************************//
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
            sum += currentRow[i_1];
        }
    }
    document.getElementById("div7").innerHTML = sum;
    return sum;
}
sumMatrix([[1, 2, 3], [1, 2, 3]]);
// *******************************************************************************************//
var input = [1, 2];
var first = input[0], second = input[1];
document.getElementById("div8").innerHTML = first;
document.getElementById("div9").innerHTML = second;
// ******************************************************************************************//
var _a = [1, 2, 3, 4], first = _a[0], rest = _a.slice(1);
document.getElementById("div10").innerHTML = first;
document.getElementById("div11").innerHTML = rest;
// ********************************************************************************************//
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = o.a, b = o.b;
document.getElementById("div12").innerHTML = a;
document.getElementById("div13").innerHTML = b;
// ******************************************************************************************//
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
// ****************************************************************************************//
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Person));
var howard = new Employee("Arya", "SE");
console.log(howard.getElevatorPitch());
// ***************************************************************************************//
var Employee = (function () {
    function Employee() {
    }
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Arya S";
if (employee.fullName) {
    console.log(employee.fullName);
}
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
        console.log("here" + newSquare.color);
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
        console.log("here is" + newSquare.area);
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
