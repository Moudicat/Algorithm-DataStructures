/**
 * Bubble sort 冒泡排序
 * Complexity: O(n^2)
 * 
 * @param {Array} Input array
 * @return {Array} Sorted array
 */
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

/**
 * Quick Sort  快速排序
 * Complexity: O(nlog n)
 * 
 * @param {Array} Input array
 * @return {Array} Sorted array
 */
function quickSort(array) {
  if (array.length <= 1) return array;

  let midVal = array.shift(), left = [], right = [];
  array.forEach(val => val > midVal ? right.push(val) : left.push(val));

  return quickSort(left).concat(midVal, quickSort(right));
}

/**
 * Insertion Sort  直接插入排序
 * Complexity: O(n^2)
 * 
 * @param {Array} Input array
 * @return {Array} Sorted array
 */
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i], j = i - 1;

    for (; i >= 0 && array[j] > current; j--) {
      // 若 前方有序部分大于待排数 则将有序数后移一位
      array[j + 1] = array[j];
    }
    // 将保存的数字填充
    array[j + 1] = current;
  }
  return array;
}

/**
 * Shell Sort 希尔排序（缩小增量排序、插入排序增强版）
 * Complextity: O(nlog^2 n)
 * 
 * @param {Array} Input array
 * @return {Array} Sorted array
 */
function shellSort(array) {
  // gap 分组  
  for (let gap = array.length >> 1; gap >= 1; gap >>= 1) {
    // 分组扫描
    for (let i = gap; i < array.length; i++) {
      // 组内交换 排序
      for (let j = i - gap; j >= 0; j -= gap) {
        if (array[j] > array[j + gap]) {
          [array[j + gap], array[j]] = [array[j], array[j + gap]];
        }
      }
    }
  }
  return array;
}

/**
 * Selection Sort 选择排序
 * Complextity: O(n^2)
 * 
 * @param {Array} Input array
 * @return {Array} Sorted array
 */
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    [array[i], array[min]] = [array[min], array[i]];
  }
  return array;
}

/**
 * Heap Sort 堆排序
 * Complextity: O(nlog n)
 * 
 * @param {Array} Input array
 * @return {Array} Sorted array
 */
function heapSort(array) {

  let heapify = (index) => {
    let leftIndex = index * 2 + 1, rightIndex = index * 2 + 2, maxIndex = -1;

    if (leftIndex < array.length && array[leftIndex] > array[index]) {
      maxIndex = leftIndex;
    }
    if (rightIndex < array.length && array[rightIndex] > array[maxIndex]) {
      maxIndex = rightIndex;
    }

    if (maxIndex !== -1) {
      [array[maxIndex], array[index]] = [array[index], array[maxIndex]];
      if (maxIndex < array.length >> 1) {
        heapify(maxIndex);
      }
    }
  };
 
  let buildHeap = () => {
    for (let i = (array.length >> 1) - 1; i >= 0; i--) {
      heapify(i);
    }
  
  }
 

  return array;
}