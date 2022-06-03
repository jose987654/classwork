/* eslint-disable no-mixed-operators */
const num1 = 100
const num2 = 200

switch (true) {
  case num1 > num2 === true:
    console.log('\tNumber 1 is greater than Number 2')
    break
  // eslint-disable-next-line eqeqeq
  case (num1 == num2) === true:
    console.log('\tNumber 1 is equal to Number 2')
    break
  case num1 < num2 === true:
    console.log('\tNumber 1 is less than Number 2')
    break
  default:
    console.log('error')
}
