let name1 = "joseph";

let num1 = 23;
let num2 = 43;

function loop() {
  for (i = 0; i <= 10; i += 2) {
    console.log(i);
  }
}
function numbers() {
  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log(i + " is an even number. ");
    } else if (i % 2 == 1) {
      console.log(i + " is a prime number. ");
    }
  }
}

function addnum1() {
  let num4 = 23,
    num5 = 22;
  let num6 = num4 + num5;
  return num6;
}
function addnum2() {
  let num40 = 23,
    num50 = 22;
  let num60 = num40 + num50;
  console.log(num60);
}

function add3() {
  let a = 10,
    b = 50;
  let new1 = a + b;

  return new1; //end  of execution
}

function add2() {
  let num6 = add3() + 10;
  console.log(num6);
}

function person(age, name) {
  let Age = age - 10;
  console.log("\n\t Dear " + name + " your new age is " + Age + " .\n");
  return Age;
}

function salaryscale(name, age, salary) {
  let newsalary = salary + 100;
  if (age <= 60 && salary <= 500) {
    console.log(
      "\n\t Dear " +
        name +
        " you age is " +
        age +
        " and your new salary scale will be " +
        newsalary +
        " in next financial year.\n"
    );
  } else if (age >= 60) {
    console.log(
      "\n\t Dear " +
        name +
        " you age is " +
        age +
        " and your salary scale is " +
        salary +
        " . No salary increment\n"
    );
  }
  return name, age, salary;
}
salaryscale("Joe", 63, 300); /**  fn person  (age, name){age-10,return age}*/

/**const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});/**/

function loop() {
  for (let i = 0; i <= 10; ++i) {
      let Num1=num1,Num2=num2;
    let num4 = sum(Num1, Num2);

    console.log(
      "\n\t the value of i is ",
      i,
      " and the value of the answer is ",
      num4,
      "\n"
    );
  }
}loop(),sum(2, 2);

function salaryscale(name, age, salary) {
  let newsalary = salary + 100;
  let sumation = loop();
  if (age <= 60 && salary <= 500) {
    console.log(
      "\n\t Dear " +
        name +
        " you age is " +
        age +
        " and your new salary scale will be " +
        newsalary +
        " in next financial year. " +
        sumation +
        "\n"
    );
  } else if (age >= 60) {
    console.log(
      "\n\t Dear " +
        name +
        " you age is " +
        age +
        " and your salary scale is " +
        salary +
        " . No salary increment\n"
    );
  }
  return name, age, salary;
}