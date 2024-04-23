/** findIndex: return index of val in arr (or -1 if val is not present). */

function findIndex(arr: number[], val: number): number {
  if (arr.length === 0) return -1;


  if (arr[0] === val) {
    return 0;
  }

  const output = findIndex(arr.slice(1), val);

  return output === -1 ? -1 : output + 1;
}

export { findIndex };