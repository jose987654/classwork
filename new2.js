function sum(num1, num2) {
  let ans1 = num1 + num2;
  console.log(ans1);
  return { ans1,num1};
}sum(9,3);
 let z=sum(9,4);
 console.log(z);
 let x = z.ans1;
console.log(x);
let q = z.num1;
console.log(q);
function sub(num1, num2) {
  let ans = num1 - num2;
  console.log(ans);
  return { ans,num1 };
}

let y = sub.ans;
//console.log(y);
function sub2() {
  let c = x - y;
  console.log(c);
}

