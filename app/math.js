
function getSquare() {
  console.log('square function');
  return x => x * x;
}

export const square = getSquare();

export const cube = (x) => {
  console.log('cube function');
  return x * x * x;
}
