const id = '1';
const difficulty = 'easy';
const size = 5;
const rowNums = ['3', '1 1 1', '3', '1 1', '1 1'];
const colNums = ['1 1', '1 2', '3', '1 2', '1 1'];
const solution = [[0, 1, 1, 1, 0],
                  [1, 0, 1, 0, 1],
                  [0, 1, 1, 1, 0],
                  [0, 1, 0, 1, 0],
                  [1, 0, 0, 0, 1]];
const filledBoxes = 13;

let puzzle1 = {id, difficulty, size, rowNums, colNums, solution, filledBoxes};
export {puzzle1};