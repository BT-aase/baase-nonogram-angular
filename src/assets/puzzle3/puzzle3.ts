const id = '3';
const difficulty = 'medium';
const size = 10;
const rowNums = ['1', '2 1', '3', '1 4', '8', '10', '4 3', '3 2', '3 2', '3'];
const colNums = ['2', '5', '5', '6', '6 2', '5 1', '4 2', '5', '1 4', '2'];
const solution = [[0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
                  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                  [0, 1, 0, 1, 1, 1, 1, 0, 0, 0],
                  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                  [1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
                  [0, 1, 1, 1, 0, 0, 0, 1, 1, 0],
                  [0, 0, 1, 1, 1, 0, 1, 1, 0, 0],
                  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0]];
const filledBoxes = 50;

let puzzle3 = {id, difficulty, size, rowNums, colNums, solution, filledBoxes};
export {puzzle3};