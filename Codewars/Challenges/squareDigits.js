function squareDigits(num){
  return parseInt(num.toString().split("").map(digit => digit * digit).join(""));
}
function squareDigits(num){
  let numArr = num.toString().split("");
  let squared = numArr.map(digit => digit * digit).join("");
  return parseInt(squared);
}
function squareDigits(num){
  let numArr = num.toString().split("");
  let squaredArr = [];
  numArr.forEach(digit => {
    squaredArr.push((digit * digit));
  })
  return parseInt(squaredArr.join(""))
}


