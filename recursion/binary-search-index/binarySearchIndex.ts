/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(
  arr: number[],
  val: number,
  left = 0,
  right = arr.length): number {
  if (left > right) {
    return -1;
  }

  const middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  else if (arr[middle] > val) {
    return binarySearchIndex(arr, val, left, middle - 1);
  }
  else {
    return binarySearchIndex(arr, val, middle + 1, right);
  }
}

export { binarySearchIndex };