function subSec(s) {
  let remain = s;
  let minStep = 0;
  while(true) {
    minStep++;
    remain = remain.replace(/01/g,'');
    if (!remain.length) {
      break;
    }
  }
  return minStep;
}
subSec('0100100111');
