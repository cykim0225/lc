/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [];
  result.push(intervals[0]);
  let newInterval = result[0];

  for (let i = 1; i < intervals.length; i++) {
      if (newInterval[1] >= intervals[i][0]) {
          newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
      } else {
          newInterval = intervals[i];
          result.push(newInterval);
      }
  }

  return result;
};