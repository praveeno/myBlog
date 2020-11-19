// https://codeforces.com/contest/1452/problem/A
function robot(x, y) {
  let cX = 0; 
  let cY = 0;
  let step = 0;
  let lastRun;
  const reachYGoal = () => cY == y;
  const reachXGoal = () => cY == x;
  function moveX() {
    if (cX < x) {
      if (lastRun == 'E' && reachYGoal()) {
        step++;
      }
      lastRun = 'E'
      cX++;
      step++;
    }
  }
  function moveY() {
    if (cY < y) {
      if (lastRun == 'N' && reachXGoal()) {
        step++;
      }
      lastRun = 'N'
      cY++;
      step++;
    } 
  }
  // start with, what too far to reach x or y.
  if (x > y) {
    moveX();
  } else {
    moveY();
  }
  while (true) {
    moveX();
    moveY();
    if (cX == x && cY == y){
      return step; 
    }
  }
}
