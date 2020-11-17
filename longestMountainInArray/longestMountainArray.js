var longestMountain = function(A) {
  let res = 0;
  let up = 0;
  let down = 0;

  if (A.length < 3) {
      return 0;
  }

  for (let i = 1; i < A.length; i++) {
      if (down && A[i] > A[i - 1] || A[i] === A[i - 1]) {
          up = 0;
          down = 0;
      }
      if (A[i] > A[i - 1]) {
          up++;
      }
      if (A[i] < A[i - 1]) {
          down++;
      }
      if (up && down && res < up + down + 1) {
          res = up + down + 1;
      }
  }

  return res;
};