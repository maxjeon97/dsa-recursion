/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr: number[], val: number, left = 0, right = arr.length - 1): boolean {
  if (left > right) {
    return false;
  }

  const middle = Math.floor((right + left) / 2);

  if (arr[middle] === val) {
    return true;
  }
  else if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  else {
    return binarySearch(arr, val, middle + 1, right);
  }
}

// const arr = [1, 2, 3, 4, 5, 6] val = 7
/**
 * is 0 >= 6? no => middle = 3 => arr[3] < 8 => binarySearch(arr, val=8, left=5, right=6)
 */

export { binarySearch };