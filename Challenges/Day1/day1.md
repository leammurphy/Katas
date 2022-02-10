# Total amount of points

## 8 kyu

**_Time: ~4min_**

The result of each game looks like "x:y". Results of all games are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

**Write a function that takes such collection and counts the points of the game. Rules for counting points for each game:**

if x>y - 3 points
if x<y - 0 point
if x=y - 1 point

Notes:

[forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

```JS
function points(games) {
  let total = 0;
  games.forEach((game) => {
    console.log("game:", game); // game: 1:0
    console.log("x:", game[0]); // x: 1
    console.log("colon:", game[1]); // colon: :
    console.log("y:", game[2]); // y: 0
  })
}
```
