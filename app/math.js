function getSquare() {
  return x => x * x;
}

export const square = getSquare();

export const cube = (x) => {
  return x * x * x;
}

cube(3);
