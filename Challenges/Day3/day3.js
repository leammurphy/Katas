function countPositivesSumNegatives(input) {
  let pos = 0;
  let neg = 0;
  if(input === null || input.length === 0 ) {
    return [];
  }
  input.forEach((i) => {
    if(Math.sign(i) === -1) {
      neg += i;
    } else if(Math.sign(i) === 1) {
      pos += 1;
    }
  })
  return [pos, neg];
}