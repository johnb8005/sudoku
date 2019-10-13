import * as Sudoku from './sudoku';

test('subtract array', () => {
  const a = [1, 2, 3, 4, 5];
  const s = [2, 5, 4];
  const e = [1, 3];

  expect(Sudoku.substractArray(a, s)).toEqual(e)
});

//
const dim = 2;

test('init', () => {
  const sudoku = [1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, null];
  const s = Sudoku.initSolset(sudoku, 2);
  const t = [1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, [1, 2, 3, 4]];  

  expect(s).toEqual(t);
});

test('check row', () => {
  const coords = [0, 1, 2, 3];
  const row1 = [1, 2, 3, [1, 2, 3, 4]]; 
  const e1 = [1, 2, 3, 4];
  expect(Sudoku.checkRow(row1, coords)).toEqual(e1);

  const row2 = [1, 2, [1, 2, 3, 4], [1, 2, 3, 4]]; 
  const e2 = [1, 2, [3, 4], [3,4]];
  expect(Sudoku.checkRow(row2, coords)).toEqual(e2);

  const row3 = [[1, 2, 3, 4], 2, [1, 2, 3, 4], [1, 2, 3, 4]]; 
  const e3 = [[1, 3, 4],  2, [1, 3, 4], [1, 3,4]];
  expect(Sudoku.checkRow(row3, coords)).toEqual(e3);
});

test('get row coords', () => {
  // 2 dim
  expect(Sudoku.getRowCoords(1, dim)).toEqual([0, 1, 2, 3]);
  expect(Sudoku.getRowCoords(2, dim)).toEqual([4,5, 6, 7]);
  // 3 dim
  expect(Sudoku.getRowCoords(1)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  expect(Sudoku.getRowCoords(2)).toEqual([9, 10, 11, 12, 13, 14, 15, 16, 17]);
})

test('get col coords', () => {
  // 2 dim
  expect(Sudoku.getColCoords(1, dim)).toEqual([0, 4, 8, 12]);
  expect(Sudoku.getColCoords(2, dim)).toEqual([1, 5, 9, 13]);
  // 3 dim
  expect(Sudoku.getColCoords(1)).toEqual([0, 9, 18, 27, 36, 45, 54, 63, 72]);
  expect(Sudoku.getColCoords(2)).toEqual([1, 10, 19, 28, 37, 46, 55, 64, 73]);
})

test('get cell coords', () => {
  // 2 dim
  expect(Sudoku.getCellCoords(1, dim)).toEqual([0, 1, 4, 5]);
  expect(Sudoku.getCellCoords(2, dim)).toEqual([2, 3, 6, 7]);
  expect(Sudoku.getCellCoords(3, dim)).toEqual([8, 9, 12, 13]);
  expect(Sudoku.getCellCoords(4, dim)).toEqual([10, 11, 14, 15]);
  // 3 dim
  expect(Sudoku.getCellCoords(1)).toEqual([0, 1, 2, 9, 10, 11, 18, 19, 20]);
  expect(Sudoku.getCellCoords(4)).toEqual([27, 28, 29, 36, 37, 38, 45, 46, 47]);
});

test('check rows', () => {
  const s1 = [
               1, [1, 2, 3, 4], 3,           4,
    [1, 2, 3, 4], 3,            2,           1,
               2, 1,            4,           3,
               3, 4,            1, [1, 2, 3, 4]
  ];

  const e1 = [
    1, 2, 3, 4,
    4, 3, 2, 1,
    2, 1, 4, 3,
    3, 4, 1, 2
  ];

  const s = Sudoku.checkDim(s1, Sudoku.getRowCoords, dim);

  expect(s).toEqual(e1);
});

test('check cols', () => {
  const s1 = [
    1,            [1, 2, 3, 4],            3, 4,
    4,                       3, [1, 2, 3, 4], 1,
    2,                       1,            4, [1, 2, 3, 4],
    [1, 2, 3, 4],            4,            1, 2
  ];

  const e1 = [
    1, 2, 3, 4,
    4, 3, 2, 1,
    2, 1, 4, 3,
    3, 4, 1, 2
  ];

  const s = Sudoku.checkDim(s1, Sudoku.getColCoords, dim);

  expect(s).toEqual(e1);
});

test('check cells', () => {
  const s1 = [
    1,            [1, 2, 3, 4],            3, 4,
    4,                       3, [1, 2, 3, 4], 1,
    2,                       1,            4, [1, 2, 3, 4],
    [1, 2, 3, 4],            4,            1, 2
  ];

  const e1 = [
    1, 2, 3, 4,
    4, 3, 2, 1,
    2, 1, 4, 3,
    3, 4, 1, 2
  ];

  const s = Sudoku.checkDim(s1, Sudoku.getCellCoords, dim);

  expect(s).toEqual(e1);
});

test('real life test (2dim)', () => {
  const s = [
    1,    null, 3,    4,
    4,    null, null, 1,
    2,    1,    4,    null,
    null, null, 1,    2
  ];

  const s0 = Sudoku.initSolset(s, 2);
  const t = Sudoku.solveIteration(s0, 2);

  expect(t).toEqual([
    1, 2, 3, 4,
    4, 3, 2, 1,
    2, 1, 4, 3,
    3, 4, 1, 2])
});

test('real life test (3dim)', () => {
  /*const s2 = [
    3, 4, 9, 6, null, 2, null, null, null,
    null,  1, 8, 7, null, null, 2, null, null,
    null, 7, 2, null, 9, null, null, null, 8,
    null, null, null, null, 7, 4, null, null, 9,
    null, null, null, null, 2, null, 3, null, 5,
    null, null, null, 1, 6, null, null, 4, null,
    null, 2, null, null, 1, null, 9, 5, null,
    null,5, null, 2, null, 6, null, null, null,
    7, null, null, 3, null, 9, 4, 1, null
  ];*/

  const s = [
    null, null, null, 4, null, null, null, 8, null,
    null, null, 6, null, 8, null, 1, null, 3,
    null, 8, null, 1, null, 3, null, 5, null,
    2, null, null, null, 6, null, 8, null, 1,
    null, 6, null, 8, null, 1, null, 3, 4,
    null, null, 1, null, 3, 4, null, 6, null,
    null, 4, null, 6, 7, null, 9, null, 2,
    6, null, null, 9, null, 2, null, 4, 5,
    null, null, 2, null, null, null, null, null, null
  ];

  const e = [
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    4, 5, 6, 7, 8, 9, 1, 2, 3,
    7, 8, 9, 1, 2, 3, 4, 5, 6,
    2, 3, 4, 5, 6, 7, 8, 9, 1,
    5, 6, 7, 8, 9, 1, 2, 3, 4,
    8, 9, 1, 2, 3, 4, 5, 6, 7,
    3, 4, 5, 6, 7, 8, 9, 1, 2,
    6, 7, 8, 9, 1, 2, 3, 4, 5,
    9, 1, 2, 3, 4, 5, 6, 7, 8
  ];

  const t = Sudoku.solveWithInit(s);

  expect(t).toEqual(e);
});

test('example from previous app', () => {
  const arr = Array(81).fill(null)
  arr[0+0] = 9;
  arr[2+0] = 3;
  arr[3+0] = 7;
  arr[4+0] = 1;
  arr[7+0] = 8;
  arr[3+9] = 6;
  arr[4+9] = 9;
  arr[6+9] = 7;
  arr[7+9] = 3;
  arr[8+9] = 2;
  arr[0+18] = 2;
  arr[1+18] = 7;
  arr[2+18] = 6;
  arr[3+18] = 3;
  arr[6+18] = 1;

  arr[1+27] = 6;
  arr[5+27] = 9;
  arr[6+27] = 2;
  arr[7+27] = 7;
  arr[8+27] = 5;
  arr[0+36] = 3;
  arr[2+36] = 4;
  arr[3+36] = 2;
  arr[5+36] = 7;
  arr[8+36] = 6;
  arr[1+45] = 2;
  arr[2+45] = 7;
  arr[4+45] = 6;
  arr[5+45] = 1;
  arr[7+45] = 9;

  arr[0+54] = 1;
  arr[1+54] = 8;
  arr[2+54] = 5;
  arr[4+54] = 2;
  arr[7+54] = 4;
  arr[3+63] = 5;
  arr[5+63] = 3;
  arr[6+63] = 9;
  arr[7+63] = 6;
  arr[8+63] = 1;
  arr[0+72] = 6;
  arr[1+72] = 3;
  arr[4+72] = 7;
  arr[5+72] = 4;
  arr[6+72] = 5;

  const t = Sudoku.solveWithInit(arr);

  const e = [
    9, 5, 3, 7, 1, 2, 6, 8, 4,
    4, 1, 8, 6, 9, 5, 7, 3, 2,
    2, 7, 6, 3, 4, 8, 1, 5, 9,
    8, 6, 1, 4, 3, 9, 2, 7, 5,
    3, 9, 4, 2, 5, 7, 8, 1, 6,
    5, 2, 7, 8, 6, 1, 4, 9, 3,
    1, 8, 5, 9, 2, 6, 3, 4, 7,
    7, 4, 2, 5, 8, 3, 9, 6, 1,
    6, 3, 9, 1, 7, 4, 5, 2, 8
  ];

  expect(t).toEqual(e);
})
