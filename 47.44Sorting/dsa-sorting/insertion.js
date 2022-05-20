
// Start by picking the second element in the array (we will assume the first element is the start of the “sorted” portion)
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];

    for (var j = i - 1; j > -1 && arr[j] > currentValue; j--) {
      // Now compare the second element with the one before it and swap if necessary
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentValue;
  }

  return arr;
}

module.exports = insertionSort;