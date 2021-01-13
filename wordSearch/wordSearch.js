/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

  let dfs = (matrix, i, j, w) => {
      if (w.length === 0) {
          return true;
      }

      if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length || w[0] !== board[i][j]) {
          return false;
      }
      let temp = matrix[i][j];
      matrix[i][j] = 0;

      let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      for (direction of directions) {
          let dx = direction[0];
          let dy = direction[1];
          let x = i + dx;
          let y = j + dy;

          var res = dfs(matrix, x, y, w.slice(1))
          if (res) {
              break;
          }
      }
      matrix[i][j] = temp;
      return res;
  }

  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          if (dfs(board, i, j, word)) {
              return true;
          }
      }
  }

  return false;
};