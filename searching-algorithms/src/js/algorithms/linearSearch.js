
export default function linearSearch(arr, target) {
  let found = -1;
  
  for (let i = 0, l = arr.length; i < l; i += 1) {
    if (arr[i] === target) {
      found = i;
      break;
    }
  }
  
  console.log(found);
  return found;
}

export default function linearSearch_recursive(arr, target, index = 0) {
  if (index > arr.length - 1) {
    return -1;
  } 
  
  if (arr[index] === target) {
    return index;
  } else {
    return linearSearch_recursive(arr, target, index + 1)
  }  
}
