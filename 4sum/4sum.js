/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  let countObj = {};
  let count = 0;

  for (let i = 0; i < C.length; i++) {
      for (let j = 0; j < D.length; j++) {
          let s = C[i] + D[j];
          countObj[s] === undefined ? countObj[s] = 1 : countObj[s]++;
      }
  }
  for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < B.length; j++) {
          let target = 0 - (A[i] + B[j]);
          if (countObj[target] !== undefined) {
              count += countObj[target];
          }
      }
  }

  return count;
};