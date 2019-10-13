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
  const s2 = [
    3, 4, 9, 6, null, 2, null, null, null,
    null,  1, 8, 7, null, null, 2, null, null,
    null, 7, 2, null, 9, null, null, null, 8,
    null, null, null, null, 7, 4, null, null, 9,
    null, null, null, null, 2, null, 3, null, 5,
    null, null, null, 1, 6, null, null, 4, null,
    null, 2, null, null, 1, null, 9, 5, null,
    null,5, null, 2, null, 6, null, null, null,
    7, null, null, 3, null, 9, 4, 1, null
  ];

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
})
