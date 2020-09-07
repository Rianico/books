---
title: 05-dui-lie
date: 2020-07-22 14:48:49
permalink: /pages/82b72f/
categories: 
  - Algorithm
  - 数据结构与算法（专栏学习）
tags: 
  - 
---
# 05 | 队列

与栈后进先出的特点相比较，队列也是**一种操作受限的线性表**，只有**入队（enqueue）**和**出队（dequeue）**两种操作，但其特点正好与栈相反，是先进先出（FIFO）的。

* 入队：放一个元素到队列尾部。
* 出队：从队列头部取出一个元素。

  ![&#x961F;&#x5217;&#x548C;&#x6808;](https://static001.geekbang.org/resource/image/9e/3e/9eca53f9b557b1213c5d94b94e9dce3e.jpg)

## 1. 顺序队列和链式队列

跟栈类似，用数组实现的队列称为**顺序队列**，用链表实现的队列则成为**链式队列**。

### 1.1 顺序队列

接下来用Java代码实现一个队列：

```java
// 用数组实现的队列
public class ArrayQueue {
  // 数组：items，数组大小：n
  private String[] items;
  private int n = 0;
  // head表示队头下标，tail表示队尾下标
  private int head = 0;
  private int tail = 0;

  // 申请一个大小为capacity的数组
  public ArrayQueue(int capacity) {
    items = new String[capacity];
    n = capacity;
  }

  // 入队
  public boolean enqueue(String item) {
    // 如果tail == n 表示队列已经满了
    if (tail == n) return false;
    items[tail] = item;
    ++tail;
    return true;
  }

  // 出队
  public String dequeue() {
    // 如果head == tail 表示队列为空
    if (head == tail) return null;
    // 为了让其他语言的同学看的更加明确，把--操作放到单独一行来写了
    String ret = items[head];
    ++head;
    return ret;
  }
}
```

对于栈来说，只需要一个**栈顶指针**即可，但对于队列来说，需要两个指针来指向队头head以及队尾tail。

上述代码有个问题，就是在入队出队几次后，head和tail都会往后移动，当tail到了最右边，即使队列内还有空间，也无法继续添加元素了。

为了解决这个问题，我们可以使用**数据搬移**，在入队的时候进行数据搬移，但数据搬移的时间复杂度为$O\(n\)$，为了避免入队的时间复杂度提高，我们可以在tail到达数组最右边的时候，再集中一次进行数据搬移，这样时间复杂度就降为了$O\(1\)$。

```java
   // 入队操作，将item放入队尾
  public boolean enqueue(String item) {
    // tail == n表示队列末尾没有空间了
    if (tail == n) {
      // tail ==n && head==0，表示整个队列都占满了
      if (head == 0) return false;
      // 数据搬移
      for (int i = head; i < tail; ++i) {
        items[i-head] = items[i];
      }
      // 搬移完之后重新更新head和tail
      tail -= head;
      head = 0;
    }

    items[tail] = item;
    ++tail;
    return true;
  }
```

### 1.2 链式队列

基于链表实现的队列，同样需要两个指针，一个指向队头head，一个指向队尾tail，入队的时，tail-&gt;next=new\_node,tail=new\_node，出队时，head=head-&gt;next，具体实现如下：

```scala

```

## 2. 循环队列

前面使用数组实现队列的时候，在tail==n时，会发生数据搬移，时间复杂度为$O\(n\)$。为了避免这种情况，我们可以采用循环队列的方式解决这个问题。

循环队列，其实就是将首尾相连，从而消除末端，如下图：

![&#x5FAA;&#x73AF;&#x961F;&#x5217;](https://static001.geekbang.org/resource/image/58/90/58ba37bb4102b87d66dffe7148b0f990.jpg)

从图中可以看到，这样无论我们怎么放入，都不需要做数据的迁移。

写好循环队列代码有两个关键点：**确定好队空和队满的判定条件**。

* 队空：这个很好判断，就是队头head==队尾tail的时候，队列即为空
* 队满：判断队满的条件略为复杂，我们需要通过求余的方式，将数组变为一个循环（从而模拟首尾相连），那么队满的时候也就是**\(tail+1\)%n=head**的时候。

![&#x5FAA;&#x73AF;&#x961F;&#x5217;&#x961F;&#x6EE1;](https://static001.geekbang.org/resource/image/3d/ec/3d81a44f8c42b3ceee55605f9aeedcec.jpg)

从图中可以看到，循环队列会有一个元素位置的浪费，这里不能再添加元素，否则就会变为tail==head，与判断队空的条件重叠。

```java
class ArrayQueue(len: Int) {
  // 数组：items，数组大小：n
  val items: Array[Int] = new Array[Int](len)
  // head表示队头下标，tail表示队尾下标
  var head = 0
  var tail = 0

  // 入队
  def enqueue(item: Int): Boolean = {
    if( (tail + 1) % len == head ) {
      println("Queue is full...")
      false
    } else {
      items(tail) = item
      tail = (tail + 1) % len
      println(s"Enqueue:$item")
      true
    }
  }

  // 出队
  def dequeue: Boolean = {
    if(head == tail) {
      println("Queue is null...")
      false
    } else {
      println(s"Dequeue:${items(head)}")
      items(head) = 0
      head = (head + 1) % len
      true
    }
  }
}
```

## 3. 阻塞队列和并发队列

通常前面介绍到的队列并不常使用到，但是一旦增加了一些特性，应用却很广泛。如阻塞队列（典型代表：BlockingQueue），并发队列（典型代表：Disruptor）。

**阻塞队列**：在队列基础上增加了阻塞操作，在队列为空的时候，从队头取数据操作会被阻塞住，直到有数据进来才能执行并返回；在队列满的时候，从队尾塞数据的操作会被阻塞住，直到队列有空位才会执行并返回。

![&#x963B;&#x585E;&#x961F;&#x5217;](https://static001.geekbang.org/resource/image/5e/eb/5ef3326181907dea0964f612890185eb.jpg)

从上面的描述来看，其实就是一个经典的“生产——消费”模型，我们可以通过阻塞队列轻松地实现一个“生产——消费者”模型。

这种阻塞模型，可以有效地协调生产跟消费之间的速率，当生产速度过快，消费者又来不及消费的时候，队列会很快被填满从而阻塞生产者，避免对消费者产生冲击，在实际业务中可以到达削峰的作用。

并且，基于阻塞队列，我们还可以控制生产者以及消费者之间的对应关系，通过增加消费者，形成一对多的模型，提高消费速率：

![&#x4E00;&#x5BF9;&#x591A;](https://static001.geekbang.org/resource/image/9f/67/9f539cc0f1edc20e7fa6559193898067.jpg)

既然在阻塞队列上有多个消费者消费，那就涉及到了线程安全问题，而线程安全的队列我们又叫做**并发队列**。

并发队列最直接的实现方式是直接在enqueue\(\)、dequeue\(\)上加锁，但是锁粒度较大，会导致并发度不够。实际上，基于数组的循环队列，可以利用CAS机制来实现非常高效的并发队列，这也是循环队列比链式队列应用更加光法的原因。

Disruptor就是并发队列的一种极其高效的实现，后面会专门再有一篇文章来讲。

## 4. 思考

**Q**：线程池没有空闲线程时，新的任务请求线程资源时，线程池该如何处理？各种处理策略又是如何实现的呢？

> 线程池在没有空闲线程时，新的任务请求要么直接拒绝，要么储存起来待有空闲线程再处理。若要存储起来，希望能够按照FIFO的方式来处理的话，那么队列是非常合适的。
>
> 队列又分为基于数组实现以及链表实现。
>
> 链表实现的队列，由于可以无限存储请求，因此其是一个无界队列（unbounded queue），当存储过多请求时，会占用大量系统资源，所以对于响应时间敏感的系统，链式队列是不太合适的。
>
> 数组实现的队列，存储有限个请求，当队列也满了才拒绝请求，然而队列的大小设置也是需要各种实际测试的，太小了无法充分利用系统资源，发挥最大性能，太大又会占用大量系统资源。
>
> 实际上，对于大部分资源有限的场景，当没有空闲资源的时候，基本都可以通过队列这种数据结构来实现请求排队。

**Q**：并发队列，关于如何实现无锁并发队列？

> 可以在循环队列的基础上，利用CAS机制来实现，当入队时，对tail指针进行CAS，当tail发生变化时，代表已经有其他线程操作过了，于是重新获取tail执行操作。当出队时同理，只不过换成了对head指针进行CAS。

