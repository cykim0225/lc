var kthSmallest = function(matrix, k) {
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
          arr.push(matrix[i][j]);
      }
  }
  arr.sort((a, b) => a - b);
  return arr[k - 1]
};