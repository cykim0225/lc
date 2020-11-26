var smallestRepunitDivByK = function(K) {
  let r = 0;

  if (K % 2 === 0 || K % 5 === 0) {
      return -1;
  }

  for (let N = 1; N <= K; N++) {
      r = (r * 10 + 1) % K;
      if (r === 0) {
          return N;
      }
  }
};