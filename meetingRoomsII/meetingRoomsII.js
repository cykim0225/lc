/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  let starts = [];
  let ends = [];
  let res = 0;

  for (let i = 0; i < intervals.length; i++) {
      starts[i] = intervals[i][0];
      ends[i] = intervals[i][1];
  }

  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  let endsIdx = 0;
  for (let j = 0; j < starts.length; j++) {
      if (starts[j] < ends[endsIdx]) {
          res++;
      } else {
          endsIdx++;
      }
  }

  return res;
};