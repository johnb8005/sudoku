// sudoku solver
// the sudoku board is linearized in a simple array[Option[Int]]
// there is a solution set array that contain all possible combination: array[array[Int]]

// in all the below functions, the parameter `dim` is the number of dimensions for the sudoku. The traditional sudoku has `dim=3`

/**
 * creates a new (unit) set: [1, 2, 3, ...]
 * @return [1, 2, 3, ...]
 */
export const newSet = (dim) => Array(dim * dim).fill(0).map((_,i) => i + 1);

/**
 * [description]
 * @param  sudoku: given sudoku linearized. Empty cells are `nulls`
 * @param  
 * @return sudoku but all `nulls` are replaced with an array of all possibilities
 */
export const initSolset = (sudoku, dim = 3) => {
  return sudoku.map((s, i) => {
    if (s) {
      return s;
    }

    return newSet(dim);
  });
}

/**
 * get the list of coordinates for a row
 * @param  i: row index (starts at 1)
 * @return e.g. [1, 2, 3, ...]
 */
export const getRowCoords = (i, dim = 3) => Array(dim * dim).fill(0).map((x, k) =>  (i - 1)*dim*dim + k);

/**
 * get the list of coordinates for a column
 * @param  i: row index (starts at 1)
 * @return e.g. [1, 9, 18, ...]
 */
export const getColCoords = (i, dim = 3) => Array(dim * dim).fill(0).map((x, k) =>  (i - 1) + dim*dim*k);

/**
 * get the list of coordinates for a cell of cells (in regular sudoku, 3x3 cells)
 * @param  i: row index (starts at 1)
 * @return e.g. [1, 2, 3, 9, 10, 11, ...]
 */
export const getCellCoords = (i, dim = 3) => {
  const r = [];

  // first adder
  const a1 = ((i-1) % dim )*dim;
  // second adder
  const a2 = Math.floor((i-1)/2)*dim*dim*dim;

  for (let j = 0; j < dim; j++) {
    for (let k = 0; k < dim; k++) {
      const x = a1 + a2 + j*dim*dim +k;
      r.push(x);
    }
  }

  return r;
}

/**
 * looks at one "set". a set here is defined as an array where all elements should uniquely contain all digits. In the normal sudoku, that includes rows, cells and columns
 * @param row: full array of sudoku
 * @param coords: coords that represent the "set"
 * @return full array but without redundancies within a particular set; if a set contained both `1` and `[1, 3]`, the functoin would return for these cells `1` and `3`
 */
export const checkRow = (row, coords) => {
  const temps = row.filter((r, i) => typeof r === 'number' && coords.includes(i));

  return row.map((r, i) => {
    if(typeof r === 'number' || !coords.includes(i)) {
      return r;
    }

    const x = substractArray(r, temps);

    if (x.length === 1) {
      return x[0];
    }

    return x;
  }) 
}

/**
 * substract array s from a
 */
export const substractArray = (a, s) => a.filter(x => !s.includes(x));

/**
 * generalization of checkRow
 * @param  {[type]} funcCoord : the function that describes the set

 */
export const checkDim = (sudoku, funcCoord, dim, rowIdx = 0) => {
  if (rowIdx === dim * dim) {
    return sudoku;
  }

  const coords = funcCoord(rowIdx + 1, dim);
  const s = checkRow(sudoku, coords);

  return checkDim(s, funcCoord, dim, rowIdx + 1);
}

/**
 * go through all types of "set" once
 * @param  {[type]} sudoku         [description]
 * @return sudoku array without redundancies that were found.
 */
export const solveIteration = (sudoku, dim = 3, strategies = [getRowCoords, getColCoords, getCellCoords]) => {
  if (strategies.length === 0) {
    return sudoku;
  }

  const s = checkDim(sudoku, strategies.pop(), dim);
  
  return solveIteration(s, dim, strategies);
}

/**
 * iterates over `solveIteration`
 */
export const solve = (sudoku, dim = 3, nEpochs = 30) => {
  console.log(`=== computing epoch ${nEpochs} (counting backwards) ===`)
  if (nEpochs === 0) {
    console.log(`algorithm after all epochs were exhausted (${nEpochs})`);
    return sudoku;
  }

  const nFound = sudoku.filter(x => typeof x !== 'number').length;

  console.log(`the grid contains ${nFound}/${dim * dim * dim * dim} that are undefined (${(100*nFound/(dim**4)).toFixed(2)}%)`)

  // check if something is left to solve, else return array
  if(nFound === 0) {
    console.log(`algorithm aborted early after ${nEpochs} epochs`);
    return sudoku;
  }

  const s = solveIteration(sudoku, dim);



  return solve(s, dim, nEpochs - 1);
}

export const solveWithInit = (sudoku, dim = 3, nIteration = 30) => {
  const s0 = initSolset(sudoku);
  return solve(s0, dim, nIteration);
}