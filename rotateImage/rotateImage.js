var rotate = function(matrix) {
  let copyMatrix = JSON.parse(JSON.stringify(matrix));
  let col = -1;

  for (let i = 0; i < matrix.length; i++) {
      let row = matrix.length - 1;
      col++;
      for (let j = 0; j < matrix.length; j++) {
          matrix[i][j] = copyMatrix[row--][col];
      }
  }
};