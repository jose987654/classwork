let num1 = 63;
let num2 = 43;
function sum() {
  let ans = num1 + num2;
 console.log(ans);
  return ans;
}

function sub() {
  let ans = num1 - num2;
  console.log(ans);
  return ans;
}

function sub2() {
  let a = sum();
  let b = sub();
  let c = a - b;
  console.log(c);
}
sum(),sub(),sub2();

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
  salaryscale("Joe", 63, 300);
