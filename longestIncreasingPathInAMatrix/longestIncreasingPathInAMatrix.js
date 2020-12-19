/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  if (matrix.length === 0) {
      return 0;
  }

  let directions = [[1,0], [-1, 0], [0, 1], [0, -1]];
  let cache = [];
  let m = matrix.length;
  let n = matrix[0].length;
  let max = 1;

  for (let k = 0; k < m; k++) {
      cache[k] = new Array(n);
  }

  let dfs = (matrix, i, j, m, n, cache) => {
      let max = 1;

      if (cache[i][j] !== undefined) {
          return cache[i][j];
      }

      for (direction of directions) {
          let dx = direction[0];
          let dy = direction[1];
          let x = i + dx;
          let y = j + dy;

          if (x < 0 || x >= m || y < 0 || y >= n || matrix[i][j] >= matrix[x][y]) {
              continue;
          }
          let len = 1 + dfs(matrix, x, y, m, n, cache);
          max = Math.max(max, len);
      }

      cache[i][j] = max;
      return max;
  }

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          max = Math.max(max, dfs(matrix, i, j, m, n, cache))
      }
  }

  return max;
};