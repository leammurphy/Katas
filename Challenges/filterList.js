function filter_list(l) {
  return l.filter(index => typeof index === "number")
}

// function filter_list(l) {
//   let ans = []
//   l.forEach(index => {
//     if(typeof index === "number") {
//       ans.push(index)
//     }
//   })
//   return ans;
// }