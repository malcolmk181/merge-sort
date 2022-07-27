function merge(arr1, arr2) {
  // type your code here
  let result = [];

  while (arr1.length > 0 && arr2.length > 0) {
    (arr1[0] < arr2[0]) ? result.push(arr1.shift()) : result.push(arr2.shift());
  }

  result = (arr1.length > 0) ? [...result, ...arr1] : [...result, ...arr2];

  return result;
}

function mergeSort(arr) {
  // type your code here
  switch (arr.length) {
    case 0:
      return [];
    case 1:
      return arr;
    // case 2:
    //   return merge([arr[0]], [arr[1]]);
    default:
      const split = Math.floor(arr.length / 2);
      const left = arr.slice(0, split);
      const right = arr.slice(split);
      return merge(mergeSort(left),mergeSort(right));
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2]");
  console.log("=>", mergeSort([2, 1]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", mergeSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: [-10, 0, 2, 2, 5, 10, 20]");
  console.log("=>", mergeSort([10, -10, 0, 2, 20, 5, 2]));
}

module.exports = mergeSort;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Given an array, sort it using merge sort, and return a
// sorted array

// Mergesort first divides the array into halves, until we
// have arrays of size 1

// then it takes each array, that are now all sorted (
// because they are length 1) and combines them into
// larger, still sorted arrays. It continues to combine
// these sorted arrays until there is only 1 array left,
// and returns this array