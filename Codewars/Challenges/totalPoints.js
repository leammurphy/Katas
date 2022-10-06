function points(games) {
  let total = 0;
  games.forEach((game) => {    
    if(game[0] > game[2]) {
      total += 3;
    }
    if(game[0] === game[2]) {
      total += 1;
    }
  })
  return total;
}