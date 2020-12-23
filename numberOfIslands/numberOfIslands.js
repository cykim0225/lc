/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid.length === 0) {
      return 0;
  }

  let m = grid.length;
  let n = grid[0].length;
  let count = 0;

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] === '1') {
              dfs(grid, i, j, m, n);
              count++;
          }
      }
  }

  return count;
};

var dfs = function(grid, i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== '1') {
      return;
  }

  grid[i][j] = '0';

  let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  for (direction of directions) {
      let dx = direction[0];
      let dy = direction[1];
      let x = i + dx;
      let y = j + dy;
      dfs(grid, x, y, m, n);
  }
}