const id = '2';
const difficulty = 'easy';
const size = 5;
const rowNums = ['1', '1', '3', '3', '3 1'];
const colNums = ['1', '3', '5', '2', '1'];
const solution = [[0, 0, 1, 0, 0],
                  [0, 0, 1, 0, 0],
                  [0, 1, 1, 1, 0],
                  [0, 1, 1, 1, 0],
                  [1, 1, 1, 0, 1]];
const filledBoxes = 12;

let puzzle2 = {id, difficulty, size, rowNums, colNums, solution, filledBoxes};
export {puzzle2};