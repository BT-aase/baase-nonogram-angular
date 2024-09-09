const id = '4';
const difficulty = 'medium';
const size = 10;
const rowNums = ['6', '4', '10', '3 4', '2 1 1', '1 1 1', '1 3 1', '1 1 5', '3 3', '1'];
const colNums = ['2 2', '3 1', '1 7', '3', '3 2', '3 2', '8', '1 2 2', '7', '2 2'];
const solution = [[0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
                  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                  [1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
                  [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
                  [0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
                  [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
                  [1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
                  [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]];
const filledBoxes = 53;

let puzzle4 = {id, difficulty, size, rowNums, colNums, solution, filledBoxes};
export {puzzle4};