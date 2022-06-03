
/* function to return wrkwer name */
function wrker (name, age, position) {
  // return statement is supposed to be at the end curly braces wrrongly put shifted to line 10
  return name
  /**/
}

/* function to return wrksalry */
function wrkSal (sal) {
  // constant defined aswrksal assigned the dynamic value of sal
  const wrkSal = sal
  // return value of wrksal
  return wrkSal
}

/* function to return pay after deducting nssf from wrksalry */
function empNSSF (rate) {
  // constant defined nssfrate assigned the dynamic value of sal
  const nssfrate = rate
  // pay assigned the value of function wrksal 2000000
  const pay = wrkSal(2000000)
  // let defined as nssf assigned the statement
  const nssf = (nssfrate / 100) * pay
  // variable  fnalnssf equal to subtraction of pay  and nssf
  const fnalnssf = pay - nssf
  // return the value of fnalnssf
  return fnalnssf
}

/* function to return pay after deducting payee */
function paye (rate) {
  // constant defined as payerate assigned the dynamic value of rate
  const payerate = rate
  // variaable pay assigned to function called wrksal with dynamic value of 2000000
  const pay = wrkSal(2000000)
  // payee variable equal tomath equation below
  const payee = (payerate / 100) * pay
  // variiabale fnalpaye equla to subtraction of pay and payee
  const fnalpaye = pay - payee
  // return value of fnalpaye
  return fnalpaye
}

/* function to print out employee details */
function emplynetpay () {
  // prints to the screen employee details and pay after nssf and payee deducted
  console.log(
    '\nThe Employee ' +
      wrker('osman', 27, 'manager') +
      ' earns: ' +
      wrkSal(2000000)
  )
  console.log('\tHis pay after NSSF is   : ' + empNSSF(11))
  console.log('\tHis pay after PAYEE is  : ' + paye(30), '\n')

  // function is supposed to be called outside
}
emplynetpay()
