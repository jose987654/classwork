// switch statement
// The switch statement first evaluates an expression and then matches the expression's value to a case clause,
// it then executes statements associated with that case clause,

// As well as statements in cases that follow the matching case.However with a break keyword, it breaks out of the switch block.
// This will stop the execution inside the switch block.

// syntax of switch//The switch statement uses the strict comparison (===) to compare the expression with the case values.
// A default clause is executed if the value of expression doesn't match any of the cases.

// switch (expression) {
//     case value1:
//         statement1;
//         break;
//     case value2:
//         statement2;
//         break;
//     case value3:
//         statement3;
//         break;
//     default:
//         statement;
// }

// example days of the week
const day = 14
let dayName

switch (day) {
  case 1:
    dayName = 'Sunday'
    console.log(dayName)
    break
  case 2:
    dayName = 'Monday'
    console.log(dayName)
    break
  case 3:
    dayName = 'Tuesday'
    console.log(dayName)
    break
  case 4:
    dayName = 'Wednesday'
    console.log(dayName)
    break
  case 5:
    dayName = 'Thursday'
    console.log(dayName)
    break
  case 6:
    dayName = 'Friday'
    console.log(dayName)
    break
  case 7:
    dayName = 'Saturday'
    console.log(dayName)
    break
  default:
    dayName = 'Invalid day'
    console.log(dayName)
    break
}
