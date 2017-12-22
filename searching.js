/**
 * Order Search 顺序搜索
 * Complextity: O(n)
 */
function orderSearch(array, val) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === val) {
      return i;
    }
  }
  return -1;
}

/**
 * Binary Search 二分查找
 * Complextity: O(log N)
 * 
 */
function binarySearch(array, val) {
  let mid = array.length >> 1, low = 0, high = array.length - 1;

  while(low <= high) {
    if (array[mid] === val) {
      return mid;
    } else if (val < array[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }

    mid = (high + low) >> 1;
  }

  return -1;
}