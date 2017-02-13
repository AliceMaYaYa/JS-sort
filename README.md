#**序**
####排序算法（Sorting algorithm）是计算机科学最古老、最基本的课题之一。要想成为合格的程序员，必须理解和掌握各种排序算法。巩固js基础知识的同时，顺带用js把排序算法实现一遍。
<hr>
#**一、插入排序**
####**思想**：每步将一个待排序的记录，按其顺序码大小插入到前面已经排序的字序列的合适位置，直到全部插入排序完为止。 
####**关键问题**：在前面已经排好序的序列中找到合适的插入位置。 
####**方法**： 
####(1)、直接插入排序 
####(2)、二分法插入排序
####(3)、希尔排序
<hr>
##**1、直接插入排序**
####**算法思想**：每步将一个待排序的记录，按其关键值的大小插入前面已经排序的文件中适当位置上，直到全部插入完为止。
<center>![插入排序](http://img.blog.csdn.net/20170210170649821?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvRXNtaWxlMjAxMQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)<center>
###**代码：**
``` JavaScript
//直接插入排序
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
```
###**算法分析：**
<ul>
<li>最佳情况：T(n) = O(n)  </li>
<li>最坏情况：T(n) = O(n2)  </li>
<li>平均情况：T(n) = O(n2)</li>
<li>空间复杂度O(1)</font></li>
<li>稳定性排序</font></li>
</ul>
 <hr>
##**2、二分法插入排序**
####**算法思想**：从第一个元素开始，该元素可以认为已经被排序； 取出下一个元素，在已经排序的元素序列中二分查找到第一个比它大的数的位置； 将新元素插入到该位置后； 重复上述两步。
<center>![二分法插入排序](http://img.blog.csdn.net/20170210175345531?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvRXNtaWxlMjAxMQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)<center>
###**代码：**
```
// 二分法插入排序
var binaryInsertSort = function(arr) {
	var len = arr.length;
	for (var i = 1; i < len; i++) {
	    var key = arr[i], left = 0, right = i - 1;
	    while (left <= right) {
	        var middle = parseInt((left + right) / 2);
	        if (key < arr[middle]) {
	            right = middle - 1;
            } else {
	            left = middle + 1;
            }
         }
		for (var j = i - 1; j >= left; j--) {
	        arr[j + 1] = arr[j];
		}
	        arr[left] = key;
	}
    return arr;
};
```
###**算法分析：**
<ul>
<li>最佳情况：T(n) = O(nlogn)  </li>
<li>最坏情况：T(n) = O(n2)  </li>
<li>平均情况：T(n) = O(n2)</li>
<li>空间复杂度O(1)</font></li>
<li>稳定性排序</font></li>
</ul>
  <hr>
##**3、希尔排序**
####**算法思想**：希尔排序是插入排序的一种更高效的改进版本，也称递减增量排序算法。它是将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录“基本有序”时，再对全体记录进行依次直接插入排序。
<center><center>
###**代码：**
```
//希尔排序
var shellSort = function (arr) {
	var len = arr.length,
        temp,
        gap = 1;
    while(gap < len/3) {
	    gap =gap*3+1;
    }
    for (gap; gap > 0; gap = Math.floor(gap/3)) {
	    for (var i = gap; i < len; i++) {
	        temp = arr[i];
	        for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
	            arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    return arr;
};
```
###**算法分析：**
<ul>
<li>最佳情况：T(n) = O(nlog2n) </li>
<li>最坏情况：T(n) = O(nlog2n)  </li>
<li>平均情况：T(n) = O(nlogn)</li>
<li>空间复杂度O(1)</font></li>
<li><font color=red>不稳定性排序</font></li>
</ul>
  <hr>
#**二、交换排序**
####**思想**：两两比较待排序记录的关键字，发现两个记录的次序相反时即进行交换，直到没有反序的记录为止。 
####**关键问题**：两两比较待排序记录的关键字大小。 
####**方法**： 
####(1)、冒泡排序
####(2)、改进冒泡排序
####(3)、快速排序
<hr>
##**1、冒泡排序**
####**算法思想**：是一种简单直观的排序算法。比较相邻的元素，如果第一个比第二个大，就交换他们两个；对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，会得到最后的元素是最大的数；将所有的元素重复以上的步骤，除了最后一个，直到没有数字需要比较。
<center><center>
###**代码：**
``` JavaScript
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
```
###**算法分析：**
<ul>
<li>最佳情况：T(n) = O(n) </li>
<li>最坏情况：T(n) = O(n2)  </li>
<li>平均情况：T(n) = O(n2)</li>
<li>空间复杂度O(1)</font></li>
<li>稳定性排序</font></li>
</ul>
 <hr>
##**2、改进冒泡排序**
####**算法思想**： 优化思路是当一次遍历前后数组不产生变化时，说明该数组已经有序，结束排序。
<center><center>
###**代码：**
``` JavaScript
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
```
###**算法分析：**
<ul>
<li>最佳情况：T(n) = O(n) </li>
<li>最坏情况：T(n) = O(n2)  </li>
<li>平均情况：T(n) = O(n2)</li>
<li>空间复杂度O(1)</font></li>
<li>稳定性排序</font></li>
</ul>
 <hr>
##**3、快速排序**
####**算法思想**：使用分治法策略来把一个串行分为两个子串行。算法步骤如下：
####(1)、在数据集之中，选择一个元素作为"基准"。
####(2)、所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
####(3)、对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
<center><center>
###**代码：**
``` JavaScript
//快速排序
var quickSort = function(arr) {
　　if (arr.length <= 1) { return arr; }
　　var pivotIndex = Math.floor(arr.length / 2);
　　var pivot = arr.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];
　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
　　return quickSort(left).concat([pivot], quickSort(right));
};
```
###**算法分析：**
<ul>
<li>最佳情况：T(n) =  O(nlogn)</li>
<li>最坏情况：T(n) =  O(n2)</li>
<li>平均情况：T(n) =  O(nlogn)</li>
<li><font color=red>空间复杂度O(logn)</font></li>
<li><font color=red>不稳定性排序</font></li>
</ul>
 <hr>
#**三、选择排序**
####**思想**：每趟从待排序的记录序列中选择关键字最小的记录放置到已排序表的最前位置，直到全部排完。  
####**关键问题**：在剩余的待排序记录序列中找到最小关键码记录。
####**方法**： 
####(1)、选择排序
####(2)、堆排序
<hr>
##**1、选择排序**
####**算法思想**：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置；再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾；重复第二步，直到所有元素均排序完毕。
<center><center>
###**代码：**
``` JavaScript
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
```
###**算法分析：**
<ul>
<li>最佳情况：T(n) =  O(n2)  </li>
<li>最坏情况：T(n) = O(n2)  </li>
<li>平均情况：T(n) =  O(n2) </li>
<li>空间复杂度O(1)</font></li>
<li><font color=red>不稳定性排序</font></li>
</ul>
 <hr>
##**2、堆排序**
####**算法思想**：堆排序是一种树形选择排序，是对直接选择排序的有效改进。一般分为两种方法：大顶堆：每个节点的值都大于或等于其子节点的值，在堆排序算法中用于升序排列；小顶堆：每个节点的值都小于或等于其子节点的值，在堆排序算法中用于降序排列。算法步骤：
####(1)、创建一个堆 H[0……n-1]；
####(2)、把堆首（最大值）和堆尾互换；
####(3)、把堆的尺寸缩小 1，并调用 shift_down(0)，目的是把新的数组顶端数据调整到相应位置；
####(4)、重复步骤 2，直到堆的尺寸为 1。
<center><center>
###**代码：**
``` JavaScript
//堆排序
var len;    // len设置成为全局变量
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
var swap = function(arr, i, j) {     // 数据交换
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};
var heapSort = function(arr) {       // 堆排序
    buildMaxHeap(arr);
    for (var i = arr.length-1; i > 0; i--) {
        swap(arr, 0, i);
        len--;
        heapAdjust(arr, 0);
    }
    return arr;
};
```
###**算法分析：**
<ul>
<li>最佳情况：T(n) =  O(nlogn)</li>
<li>最坏情况：T(n) =  O(nlogn)</li>
<li>平均情况：T(n) =  O(nlogn)</li>
<li>空间复杂度O(1)</font></li>
<li><font color=red>不稳定性排序</font></li>
</ul>
 <hr>
#**四、归并排序**
####**算法思想**：采用分治法的一个典型应用。归并排序的实现由两种方法：
####(1)、自上而下的递归；
####(2)、自下而上的迭代；
####**算法步骤**：
####(1)、申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列；
####(2)、设定两个指针，最初位置分别为两个已经排序序列的起始位置；
####(3)、比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置；
####(4)、重复步骤 3 直到某一指针达到序列尾；
####(5)、将另一序列剩下的所有元素直接复制到合并序列尾。
<center><center>
###**代码：**
``` JavaScript
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

var merge = function(left, right){
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
```
###**算法分析：**
<ul>
<li>最佳情况：T(n) =  O(nlogn)</li>
<li>最坏情况：T(n) =  O(nlogn)</li>
<li>平均情况：T(n) =  O(nlogn)</li>
<li><font color=red>空间复杂度O(n)</font></li>
<li>稳定性排序</font></li>
<li><font color=red>占用额外内存（外部排序）</font></li>
</ul>
 <hr>
#**五、线性时间排序(非比较的排序)**
####**思想**：任何比较排序算法的运行时间不会快于nlogn，然而线性时间排序它们都不是通过比较来排序的，因此下界O(nlogn)对它们不适用。
####**关键问题**：非基于比较的排序的使用限制却是较多的，如计数排序仅能对较小整数进行排序（有确定范围的整数），且要求排序的数据的规模不能过大；基数排序可以对长整数进行排序，但是不适用于浮点数；桶排序可以对浮点数进行排序。
####**方法**： 
####(1)、计数排序 
####(2)、桶排序
####(3)、基数排序
<hr>
##**1、计数排序**
####**算法思想**：对每一个输入元素x，确定小于x的元素的个数，这样就可以把x直接放在它在最终输出数组的位置上。计数排序的核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。算法步骤：
####(1)、找出待排序的数组中最大和最小的元素
####(2)、统计数组中每个值为i的元素出现的次数，存入数组C的第i项
####(3)、对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）
####(4)、反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1
<center><center>
###**代码：**
``` JavaScript
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
```
###**算法分析：**
<ul>
<li>最佳情况：T(n) = O(n+k)</li>
<li>最坏情况：T(n) = O(n+k)</li>
<li>平均情况：T(n) = O(n+k)</li>
<li><font color=red>空间复杂度O(k)</font></li>
<li>稳定性排序</font></li>
<li><font color=red>占用额外内存（外部排序）</font></li>
</ul>
 <hr>
##**2、桶排序**
####**算法思想**：利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。对于一组程度为N的待排序数据，将这些数据划分为M个区间（即放入M个桶中）。根据某种映射函数，将这N个数据放入M个桶中。然后对每个桶中的数据进行排序，最后依次输出，得到已排序数据。桶排序要求待排序的元素都属于一个固定的且有限的区间范围内。
<center><center>
###**代码：**
``` JavaScript
//桶排序
var insertSort = function(arr) {      //插入排序
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
```
###**算法分析：**
<ul>
<li>最佳情况：T(n) = O(n+k)</li>
<li>最坏情况：T(n) = O(n2)</li>
<li>平均情况：T(n) = O(n+k)</li>
<li><font color=red>空间复杂度O(n+k)</font></li>
<li>稳定性排序</font></li>
<li><font color=red>占用额外内存（外部排序）</font></li>
</ul>
 <hr>
##**3、基数排序**
####**算法思想**：基数排序是一种非比较型整数排序算法，其原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。
<center><center>
###**代码：**
``` JavaScript
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
```
###**算法分析：**
<ul>
<li>最佳情况：T(n) = O(n*k)</li>
<li>最坏情况：T(n) = O(n*k)</li>
<li>平均情况：T(n) = O(n*k)</li>
<li><font color=red>空间复杂度O(n+k)</font></li>
<li>稳定性排序</font></li>
<li><font color=red>占用额外内存（外部排序）</font></li>
</ul>
 <hr>
##**本文代码：**
####[demo源码](https://facebook.github.io/react/)
 <hr>
##**参考文章：**
####[排序图解：js排序算法实现](http://www.jianshu.com/p/7e6589306a27)
####[阮一峰：javascript的快速排序实现](http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html)
####[常见排序算法 - 堆排序](http://bubkoo.com/2014/01/14/sort-algorithm/heap-sort/)
