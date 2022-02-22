function maskify(cc) {
  let lastFour = cc.slice(-4);
  let masked = lastFour.padStart(cc.length, "#");
  return masked;
}

// function maskify(cc) {
//   if(cc.length > 4) {
//     let mask = "#".repeat(cc.length - 4);
//     let lastFour = cc.substring(cc.length -4);
//     let maskedCC = `${mask}${lastFour}`;
//     return maskedCC;
//   }
//   return cc;
// }
