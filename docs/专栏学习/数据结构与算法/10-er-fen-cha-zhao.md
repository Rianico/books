---
title: 10-er-fen-cha-zhao
date: 2020-07-22 14:48:49
permalink: /pages/9f635b/
categories: 
  - Algorithm
  - 数据结构与算法（专栏学习）
tags: 
  - 
---
# 10 | 二分查找

## 1. 介绍

二分查找（Binary Search）算法，也叫折半查找算法，在一个**有序**（为了方便理解，后面的序列都默认为从小到大）序列中，在首中尾巴各选定三个点low、mid、high，根据要查找的数是否在\[low,mid\]或者\[mid,high\]之间，从而每次能够缩小一半的查找范围，如此往复直到查找到要找的数为止。

我们假设有 10 数目，分别是：8，11，19，23，27，33，45，55，67，98。现在要查找 19 这个元素。

![&#x4E8C;&#x5206;&#x67E5;&#x627E;](https://static001.geekbang.org/resource/image/8b/29/8bce81259abf0e9a06f115e22586b829.jpg)

接下来分析下二分查找的时间复杂度，根据每次都会缩小一半的范围可得：

![&#x4E8C;&#x5206;&#x67E5;&#x627E;-&#x65F6;&#x95F4;&#x590D;&#x6742;&#x5EA6;](https://static001.geekbang.org/resource/image/d1/94/d1e4fa1542e187184c87c545c2fe4794.jpg)

由于每次只涉及比较操作，因此k次的时间复杂度为 O\(k\) ，到了最后一次 $\frac{n}{2^{k}}=1$（只涉及一次比较）的时候，可得知k为O\(logn\)。

O\(logn\)这是对数时间复杂度有时候比O\(n\)还高效，即使在n非常大的时候也能维持高效。

代码简易实现如下：

```scala
def binarySort(arr: Array[Int], goal: Int): Int = {
  var low = 0
  var high = arr.length - 1
  var mid = low + ((high - low) >> 1)

  while (low <= high) {
    mid = low + ((high - low) >> 1)
    if(arr(mid) == goal) return mid  // 返回元素位置
    else if (goal < arr(mid)) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  -1  // 搜索不到则返回-1
}

val arr = Array(1, 2, 3, 4, 5)
println(s"index: ${binarySort(arr, 1)}")
```

二分查找的实现有以下几个注意点：

1. 循环退出条件，注意是`mid <= high`。
2. mid的取值，当high以及low的值比较大的时候（比如high是`Integer.MAX_VALUE`），high与low相加后会溢出，因此推荐使用`low + ((high - low) >> 1)`这种方式来避免溢出。
3. low与high的更新，如果直接让`low = mid`或者让`high = mid`可能会造成死循环，比如low、high都为3的时候，而a\[3\]又不为所求值，则会造成死循环。

## 2. 二分查找的局限性

二分查找的时间复杂度是 O\(logn\)，查找数据的效率非常高，不过应用场景也有其局限性。

首先，二分查找只能用于顺序表结构，也就是数组，依赖其随机访问O\(1\)的特性，若改为链表，则每次查找比较的时间复杂度则为O\(n\)，会导致代价特别高。

其次，二分查找要求序列已经是有序且**相对静态**的，若序列无序，我们需要先对其进行排序再使用二分查找。若序列是一个**动态数据**，需要频繁的插入修改，那么维护序列有序的代价也会变得特别高，这时候就应该使用二叉树等其他数据结构来解决了。

再者，数据量太小的时候使用二分查找并没有性能优势，跟顺序遍历差不多，但是若比较操作十分耗时，那么使用二分查找也能有一定优势，可以减少对比的次数从而节省比较操作的开销。

最后，数据量太大的时候也不适合使用二分查找，因为二分查找依赖于顺序表结构，所以当数据特别大的时候，要求有一大片**连续**的内存。

## 3. 二分查找变形

前面对于二分查找的实现，实际上是在没有重复元素的前提下确定的。当需要对序列需要提出其他需求的时候，二分查找就开始复杂了。

![&#x4E8C;&#x5206;&#x67E5;&#x627E;-&#x53D8;&#x5F62;](https://static001.geekbang.org/resource/image/42/36/4221d02a2e88e9053085920f13f9ce36.jpg)

### 3.1 变体一：查找第一个值等于给定值的元素位置

给定以下一个有序的序列，其中存在三个重复的元素 8 ，求第一个8出现的位置。

![](https://static001.geekbang.org/resource/image/50/f8/503c572dd0f9d734b55f1bd12765c4f8.jpg)

如果按照之前的实现，那么求出来的 8 可能是其中一个元素，这样明显不符合我们的要求。

因此需要做出如下改动：

```scala
def binarySortFirst(arr: Array[Int], goal: Int): Int = {
  var low = 0
  var high = arr.length - 1
  var mid = low + ((high - low) >> 1)

  while (low <= high) {
    mid = low + ((high - low) >> 1)
    if (goal <= arr(mid)) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  if(arr(low) == goal) return low
  return -1
}

val arr = Array(1,1,1,3,3,3,4,5)
println(s"index: ${binarySortFirst(arr, 3)}")
// index: 3
```

第一眼看上去跟前面的实现没太大区别，重点在于`goal <= arr(mid)`，从原来的 `<` 变成了 `<=` ，这里代表的含义是，即使找到了目标值，仍然继续讲 high 指针往左边推，推到最后跳出循环后，从左边往右推的 low 指针自然而然就是第一个要找的元素了。

### 3.2 变体二：查找最后一个值等于给定值的元素位置

同变形一类似，这里只要将 low 从左往右推，推到最后 high 自然就是最后一个元素了：

```scala
def binarySortLast(arr: Array[Int], goal: Int): Int = {
  var low = 0
  var high = arr.length - 1
  var mid = low + ((high - low) >> 1)

  while (low <= high) {
    mid = low + ((high - low) >> 1)
    if (goal >= arr(mid)) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  if(arr(high) == goal) return high
  return -1
}

val arr = Array(1,1,1,3,3,3,4,5)
println(s"index: ${binarySortLast(arr, 3)}")
// index: 5
```

### 3.3 变体三：查找第一个大于等于给定值的元素位置

在有了前面变形一求第一个重复元素位置的基础上，实际上这里求第一个大于等于给定值元素位置也变得相当简单，由于变形一中的指针 low 指向了第一个重复的元素，因此我们只要判断下该元素是否大于等于给定值即可：

```scala
def binarySortFirst2(arr: Array[Int], goal: Int): Int = {
  var low = 0
  var high = arr.length - 1
  var mid = low + ((high - low) >> 1)

  while (low <= high) {
    mid = low + ((high - low) >> 1)
    if (goal <= arr(mid)) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  if(arr(low) >= goal) return low
  return -1
}

val arr = Array(1,1,1,3,3,3,4,5)
println(s"index: ${binarySortFirst2(arr, 2)}")
// index: 3
```

### 3.4 变体四：查找第一个小于大于等于给定值的元素位置

同样的也是基于变体二的基础上，对 high 指向的元素做个小于等于的判断即可：

```scala
def binarySortLast(arr: Array[Int], goal: Int): Int = {
  var low = 0
  var high = arr.length - 1
  var mid = low + ((high - low) >> 1)

  while (low <= high) {
    mid = low + ((high - low) >> 1)
    if (goal >= arr(mid)) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  if(arr(high) <= goal) return high
  return -1
}

val arr = Array(1,1,1,3,3,3,4,5)
println(s"index: ${binarySortLast2(arr, 2)}")
// index: 2
```

## 4. 思考题

**Q：假设只有100MB内存，如何在1000 万个整数中快速查找某个整数？**

假设我们只有100MB内存，需要在1000万个整数中查找某个整数，Int型每个占用8字节，存储在数组中总共需要80MB左右的内存，再使用二分查找即可搞定。

虽然二叉树，散列表貌似也可以解决这个问题，但由于二叉树、散列表需要额外存储很多信息（空间换时间），因此100MB内存肯定是不够的，而二分查找只需要依赖于数组，而无需存储额外的信息。

**Q：如何快速定位出一个 IP 地址的归属地？**

IP归属地查询是通过维护一个很大的 IP 地址库来实现的。地址库中包括 IP 地址范围和归属地的对应关系。比如当我们想要查询 202.102.133.13 这个 IP 地址的归属地时，我们就在地址库中搜索，发现这个 IP 地址落在 \[202.102.133.0, 202.102.133.255\] 这个地址范围内，那我们就可以将这个 IP 地址范围对应的归属地“山东东营市”显示给用户了。

> \[202.102.133.0, 202.102.133.255\] 山东东营市 \[202.102.135.0, 202.102.136.255\] 山东烟台 \[202.102.156.34, 202.102.157.255\] 山东青岛 \[202.102.48.0, 202.102.48.255\] 江苏宿迁 \[202.102.49.15, 202.102.51.251\] 江苏泰州 \[202.102.56.0, 202.102.56.255\] 江苏连云港

要进行快速定位IP归属地，只需要先将IP地址转化为32位的数字，然后进行排序，接着通过二分查找变形来找到最后一个小于等于给定IP地址的值即可查询出归属地。

## 5. 总结

凡是用二分查找能解决的，绝大部分我们更倾向于用散列表或者二叉查找树。即便是二分查找在内存使用上更节省，但是毕竟内存如此紧缺的情况并不多。那二分查找真的没什么用处了吗？

**实际上二分查找更适合用在“近似”查找问题**，在这类问题上，二分查找的优势更加明显。比如几种变体问题，用散列表、二叉树，就比较难实现了。

二分查找法代码实现主要关注三个点：**终止条件**、**区间上下界取值方法**、**返回值**的选择。

