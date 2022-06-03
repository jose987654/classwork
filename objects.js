/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/* eslint-disable quotes */
class Car {
  constructor(name, model, nos, clr) {
    this.name = name;
    this.model = model;
    this.nos = nos;
    this.clr = clr;
  }
} // initialize an instantiated object
const Car1 = new Car("toyota", 1991, 4, "yellow");
const Car2 = new Car("camry", 1982, 4, "red");
// console.log(Car1.name)
// console.log(Car2.model)

// 7 classes with arleast 5 properties and parameters make new classes//3 functions making repeated use of each other/
// 403,404,500,200
// DOM' Document objct modeling
// internet,www,website,web hosting.127.0.0.1//

const Cars = function (name, color, type) {
  this.name = name;
  this.color = color;
  this.type = type;
};
const cars1 = new Cars("totyo", "red", "4.0");
const chalk = require("chalk");

//console.log(chalk.greenBright(cars1.name))

console.log(chalk.red("Refractory"));
console.log(chalk.green.underline("Cohort-11"));
console.log(chalk.blue.underline.bold(" Hello world "));
