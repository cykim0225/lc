var testingTransform = function(array) {
  var transform = [];

  for (var i = 0; i < array.length; i++) {
    transform.push({value: array[i], i: i});
  }

  return transform;
};


// I: array
// O: sorted array
// C: none
// E: none

var insertionSort = function(array) {
    // iterate over an array
    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        let key = array[i];
        // check if previous is greater than current (while)
        while (j >= 0 && array[j].value > key.value) {
            // swap
            array[j + 1] = array[j];
            j -= 1;
        }

        array[j + 1] = key;
    }

    // return an array
    return array;
}

// var arr1 = [2, 3, 1, 5, 9, 4, 3, 3, 8];
var arr1 = [11, 10, 6, 5];
var res1 = insertionSort(testingTransform(arr1));
console.log(res1);

// time: O(n^2);
// space: O(1);