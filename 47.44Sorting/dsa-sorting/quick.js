
// This function is responsible for taking an array, setting the pivot value, 
// and mutating the array so that all values less than the pivot wind up to the left of it,
//  and all values greater than the pivot wind up to the right of it. It’s also helpful 
//  if this helper returns the index of where the pivot value winds up.

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;
  // Next, compare every other element in the array to the pivot
  for (let i = start + 1; i <= end; i++) {
//     If it’s less than the pivot value, move it to the left of the pivot.
// If it’s greater, move it to the right.
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}


// Pick an element in the array and designate it as the “pivot”. 
// While there are quite a few options for choosing the pivot. We’ll make things simple to start, 
// and will choose the pivot as the first element. This is not an ideal choice, but it makes the algorithm easier to understand for now.
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

module.exports = { pivot, quickSort };