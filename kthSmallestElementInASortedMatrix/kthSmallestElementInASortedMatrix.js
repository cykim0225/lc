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

//Binary search
var kthSmallest = function(matrix, k) {
  let n = matrix.length;
  let low = matrix[0][0];
  let high = matrix[n - 1][n - 1];

  while (low < high) {
      let mid = Math.floor((high - low) / 2) + low;
      let count = 0;

      for (let i = 0; i < n; i++) {
          for (let j = 0; j < n; j++) {
              if (matrix[i][j] <= mid) {
                  count++;
              } else {
                  break;
              }
          }
      }
      if (count < k) {
          low = mid + 1;
      } else {
          high = mid;
      }
  }

  return low;
};