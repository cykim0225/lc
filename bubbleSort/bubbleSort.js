// I: array
// O: sorted array
// C: none, exit the function early for extra credit
// E: none

var bubbleSort = function(array) {
  // iterate over an array
  for (let i = 0; i < array.length; i++) {
      // iterate over an array
      let swapped = false;
      for (let j = 0; j < array.length - i - 1; j++) {
           // if current is greater than the next
           if (array[j] > array[j + 1]) {
               // swap
               let temp = array[j + 1];
               array[j + 1] = array[j];
               array[j] = temp;
               swapped = true;
           }

      }
      if (!swapped) {
          break;
      }
  }

  // return result
  return array;
};

let res1 = bubbleSort([2, 1, 3]);
let res2 = bubbleSort([4, 10, 1, 13, 5, 2, 6]);
console.log(res1);
console.log(res2);