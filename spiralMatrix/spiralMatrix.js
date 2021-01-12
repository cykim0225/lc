/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let res = [];

  let rowBegin = 0;
  let rowEnd = matrix.length - 1;
  let colBegin = 0;
  let colEnd = matrix[0].length - 1;

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
      for (let j = colBegin; j <= colEnd; j++) {
          res.push(matrix[rowBegin][j]);
      }
      rowBegin++;

      for (let i = rowBegin; i <= rowEnd; i++) {
          res.push(matrix[i][colEnd]);
      }
      colEnd--;

      if (rowBegin <= rowEnd) {
          for (let j = colEnd; j >= colBegin; j--) {
              res.push(matrix[rowEnd][j]);
          }
      }
      rowEnd--;


      if (colBegin <= colEnd) {
          for (let i = rowEnd; i >= rowBegin; i--) {
              res.push(matrix[i][colBegin]);
          }
      }
      colBegin++;
  }

  return res;
};