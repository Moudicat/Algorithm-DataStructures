/**
 * Bubble sort 冒泡排序 | 交换排序
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
 * Quick Sort  快速排序 | 交换排序
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
 * Insertion Sort  直接插入排序 | 插入排序
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
 * Shell Sort 希尔排序（缩小增量排序、插入排序增强版） | 插入排序
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
 * Selection Sort 选择排序 | 选择排序
 * Complextity: O(n^2)
 * 
 * @param {Array} Input array
 * @return {Array} Sorted array
 */
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    // 找到最小序号 与当前i位置交换
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
 * Heap Sort 堆排序 | 选择排序
 * Complextity: O(nlog n)
 * 
 * @param {Array} Input array
 * @return {Array} Sorted array
 */
function heapSort(array) {

  // 堆化  将 小根堆 转换为 大根堆 使得堆顶元素最大 子叶最小  父节点子节点小于父节点
  let heapify = (index, len) => {
    let leftIndex = index * 2 + 1, rightIndex = index * 2 + 2, maxIndex = -1;

    if (leftIndex < len && array[leftIndex] >= array[index]) {
      maxIndex = leftIndex;
    }
    if (rightIndex < len && array[rightIndex] >= array[maxIndex]) {
      maxIndex = rightIndex;
    }

    if (maxIndex !== -1) {
      [array[maxIndex], array[index]] = [array[index], array[maxIndex]];
      heapify(maxIndex, len);
    }
  };
 
  let buildHeap = () => {
    for (let i = (array.length >> 1) - 1; i >= 0; i--) {
      heapify(i, array.length);
    }  
  };

  let sort = () => {
    // 交换元素 并length-1重排
    for(let j = array.length - 1; j > 0; j--) {
      [array[0], array[j]] = [array[j], array[0]];
      heapify(0, j);
    }
  };

  buildHeap();
  sort();
  
  return array;
}

/**
 * Merge Sort 并归排序 （分治法）| 并归排序
 * Complextity: O(nlog n)
 * 
 * @param {Array} Input array
 * @return {Array} Sorted array
 */
function mergeSort(array) {
  if (array.length <= 1) return array;

  let merge = (left, right) => {
    let output = [];
    while(left.length && right.length) {
      output.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
    return output.concat(left, right);
  };
  return merge(mergeSort(array.slice(0, array.length >> 1)), mergeSort(array.slice(array.length >> 1)));
}
