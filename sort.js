//直接插入排序
var insertSort = function(arr) {
    var len = arr.length,
        i,
        j,
        tmp;
    for(i = 1; i < len; i++){
        tmp = arr[i];
        j = i - 1;
        while( j >= 0 && arr[j] > tmp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = tmp;
    }
    return arr;
};

// 二分法插入排序
var binaryInsertSort = function(arr) {
    var len = arr.length,
        i,
        j;
    for(i = 1; i < len; i++) {
        var key = arr[i], left = 0, right = i - 1;
        while (left <= right) {
            var middle = parseInt((left + right) / 2);
            if (key < arr[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
        for(j = i - 1; j >= left; j--) {
            arr[j + 1] = arr[j];
        }
        arr[left] = key;
    }
    return arr;
};

//希尔排序
var shellSort = function (arr) {
    var len = arr.length,
        i,
        j,
        tmp,
        gap = 1;
    while(gap < len/3) {
      gap =gap*3+1;
    }
    for (gap; gap > 0; gap = Math.floor(gap/3)) {
        for (i = gap; i < len; i++) {
            tmp = arr[i];
            for (j = i-gap; j >= 0 && arr[j] > tmp; j-=gap) {
                arr[j+gap] = arr[j];
            }
           arr[j+gap] = tmp;
        }
    }
    return arr;
};

//冒泡排序
var bubbleSort = function(arr) {
  var len = arr.length,
      i, 
      j, 
      tmp;
  for (i = 0; i < len; i++) {
    for (j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
          tmp = arr[j+1];            // 元素交换
          arr[j+1] = arr[j];
          arr[j] = tmp;
      }
    }
  }
  return arr;
};


//改进冒泡排序
var bubbleSort1 = function(arr) {
  var len = arr.length,
        i, 
        j, 
        tmp, 
        exchange;
  for (i = 0; i < len; i++) {
      exchange = 0;
      for (j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
              tmp = arr[j+1];            // 元素交换
              arr[j+1] = arr[j];
                arr[j] = tmp;
                exchange = 1;
          }
        }
        if (!exchange) return arr;
     }
     return arr;
};

//快速排序
var quickSort = function(arr) {
    var len = arr.length,
        i, 
        tmp, 
        exchange;
　　if (len <= 1) { return arr; }
　　var pivotIndex = Math.floor(len / 2);
　　var pivot = arr.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];
　　for (i = 0; i < len; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
　　return quickSort(left).concat([pivot], quickSort(right));
};

//选择排序
var selectionSort = function(arr) {
    var len = arr.length,
        i,
        j,
        minIndex, 
        tmp;
    for (i = 0; i < len - 1; i++) {
        minIndex = i;
        for (j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     // 寻找最小的数
                minIndex = j;                 // 将最小数的索引保存
            }
        }
        tmp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = tmp;
    }
    return arr;
};

//堆排序
var len;    // 因为声明的多个函数都需要数据长度，所以把len设置成为全局变量
var buildMaxHeap = function(arr) {   // 建立大顶堆
    len = arr.length;
    for (var i = Math.floor(len/2); i >= 0; i--) {
        heapAdjust(arr, i);
    }
};
var heapAdjust = function(arr, i) {     // 堆调整
    var left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;

    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        swap(arr, i, largest);
        heapAdjust(arr, largest);
    }
};
var swap = function(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};
var heapSort = function(arr) {
    buildMaxHeap(arr);
    for (var i = arr.length-1; i > 0; i--) {
        swap(arr, 0, i);
        len--;
        heapAdjust(arr, 0);
    }
    return arr;
};

//归并排序
var mergeSort = function(arr) {  // 采用自上而下的递归方法
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
};

var merge = function(left, right)
{
    var result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length)
        result.push(left.shift());
    while (right.length)
        result.push(right.shift());
    return result;
};

//计数排序
var countingSort = function(arr, maxValue) {
    var c= new Array(maxValue+1),
        sortedIndex = 0;
        len = arr.length,
        cLen = maxValue + 1;
    for (var i = 0; i < len; i++) {
        if (!c[arr[i]]) {
            c[arr[i]] = 0;
        }
        c[arr[i]]++;
    }
    for (var j = 0; j < cLen; j++) {
        while(c[j] > 0) {
            arr[sortedIndex++] = j;
            c[j]--;
        }
    }
    return arr;
};

//桶排序
var insertSort = function(arr) {
  var len = arr.length;
    var j,tmp;
  for(var i = 1; i < len; i++){
      tmp = arr[i];
        j = i - 1;
        while( j >= 0 && arr[j] > tmp){
          arr[j+1] = arr[j];
          j--;
        }
      arr[j+1] = tmp;
  }
    return arr;
};

var bucketSort = function(arr, bucketSize) {
    if (arr.length === 0) {
      return arr;
    }
    var i;
    var minValue = arr[0];
    var maxValue = arr[0];
    for (i = 1; i < arr.length; i++) {
      if (arr[i] < minValue) {
          minValue = arr[i];                // 输入数据的最小值
      } else if (arr[i] > maxValue) {
          maxValue = arr[i];                // 输入数据的最大值
      }
    }
    //桶的初始化
    var DEFAULT_BUCKET_SIZE = 5;            // 设置桶的默认数量为5
    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;   
    var buckets = new Array(bucketCount);
    for (i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }
    //利用映射函数将数据分配到各个桶中
    for (i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }
    arr.length = 0;
    for (i = 0; i < buckets.length; i++) {
        insertSort(buckets[i]);                      // 对每个桶进行排序，这里使用了插入排序
        for (var j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);                      
        }
    }
    return arr;
};

//基数排序
//要求数组的数都要大于等于0
// maxDigit表示最大位数
var radixSort = function(arr, maxDigit) {
    var mod = 10;
    var dev = 1;
    var counter = [];
    for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for(var j = 0; j < arr.length; j++) {
            var bucket = parseInt((arr[j] % mod) / dev);
            if(counter[bucket]==null) {
                counter[bucket] = [];
            }
            counter[bucket].push(arr[j]);
        }
        var pos = 0;
        for(var j = 0; j < counter.length; j++) {
            var value = null;
            if(counter[j]!=null) {
                while ((value = counter[j].shift()) != null) {
                      arr[pos++] = value;
                }
          }
        }
    }
    return arr;
};
console.log(radixSort([1,5,3,8,4,9,7,6,23],2));