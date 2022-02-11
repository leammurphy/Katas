// less and less lines

function well(x){
  let howManyGoods = x.filter(x => x==="good").length
  if(howManyGoods === 0) {
    return 'Fail!';
  }
  if(howManyGoods === 1 || howManyGoods === 2) {
    return 'Publish!';
  }
  if(howManyGoods > 2) {
     return 'I smell a series!'
  }
}

function well(x){
  let howManyGoods = x.filter(x => x==="good").length
  if (howManyGoods < 1) return 'Fail!';
  if (howManyGoods < 3) return 'Publish!';
  return 'I smell a series!';
}

function well(x){
  let howManyGoods = x.filter(x => x==="good").length;
  return howManyGoods < 1 ? 'Fail!' : 
         howManyGoods < 3 ? 'Publish!' : 'I smell a series!';
}