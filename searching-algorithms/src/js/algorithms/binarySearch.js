
export default function binarySearch(arr, target) {
  let start = 0,
      end = arr.length - 1;
}

export default function binarySearch_recursive(arr, target) {
  if (!arr.length) {
    return -1;
  }

  let start = 0;
  let end = arr.length - 1;
  //let middle = Math.floor(start + ((end - start) / 2));
  let middle = Math.floor((start + end) / 2);

  if (arr[middle] > target) {
    return binarySearch(arr.slice(start, middle - 1), target);
  } else if (arr[middle] < target) {
    return binarySearch(arr.slice(middle + 1, end), target);
  }

  return middle;
}
