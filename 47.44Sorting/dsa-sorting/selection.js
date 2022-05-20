// algorithm has a O(n^2) time complexity


function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
    // Assign the first element to be the smallest value (this is called the minimum/lowest)
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    // Compare this item to the next item in the array until you find a smaller number
    for (let j = i + 1; j < arr.length; j++) {
      // If a smaller number is found, designate that smaller number to be the new “minimum” and continue until the end of the array
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    // If the “minimum” is not the value (index) you initially began with, swap the two values
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

module.exports = selectionSort;