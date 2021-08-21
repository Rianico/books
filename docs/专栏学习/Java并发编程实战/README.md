---
title: 介绍
date: 2021-05-11
autoNext: 01.理论
---

## Java并发编程实战

个人对极客时间专栏《Java 并发编程实战》的学习记录。

## A & Q

Q：**在 Copy-On-Write 的思想下，为什么 Java 没有提供链表的实现？**

A：Copy-On-Write 是不可变思想的一种体现，在读取变量时无需加锁，只有在需要对变量进行写的时候，才需要加锁，复制一个新的变量，执行指定操作后替换原来的变量，主要应用在**读多写少**且可以接受数据短暂的不一致场景。

1. 大部分场景下，链表的读性能都是较差的，并无法做到像数组一样的 O(1) 访问，拷贝代价也很大，COW 并无法带来太大的收益，因此通常不会提供 COW 实现。
2. 如果需要让链表实现线程安全，分段锁、节点锁等是一种更加好的实现。

## 心得体会

绝大部分并发编程，都需要严格关注**状态变量**，否则很容易出错。如果对 volatile 状态变量能够做到心里有数，甚至可以只用**循环 + volatile** 就可以达到互斥及同步的目的。	——2021-06-06

## Leetcode

### 195. 交替打印字符串

```java
import java.util.concurrent.BrokenBarrierException;
import java.util.concurrent.CyclicBarrier;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.LongAdder;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.ReentrantLock;

//leetcode submit region begin(Prohibit modification and deletion)
class FizzBuzz {
    private int n;

    public FizzBuzz(int n) {
        this.n = n;
    }

    private int cur = 1;
    private final CyclicBarrier cyclicBarrier = new CyclicBarrier(4, () -> cur++);


    // printFizz.run() outputs "fizz".
    public void fizz(Runnable printFizz) throws InterruptedException {
        try {
            while (cur <= n) {
                if (cur % 3 == 0 && cur % 5 != 0) printFizz.run();
                cyclicBarrier.await();
            }
        } catch (BrokenBarrierException e) {
            e.printStackTrace();
        }
    }

    // printBuzz.run() outputs "buzz".
    public void buzz(Runnable printBuzz) throws InterruptedException {
        try {
            while (cur <= n) {
                if (cur % 3 != 0 && cur % 5 == 0) printBuzz.run();
                cyclicBarrier.await();
            }
        } catch (BrokenBarrierException e) {
            e.printStackTrace();
        }
    }

    // printFizzBuzz.run() outputs "fizzbuzz".
    public void fizzbuzz(Runnable printFizzBuzz) throws InterruptedException {
        try {
            while (cur <= n) {
                if (cur % 3 == 0 && cur % 5 == 0) printFizzBuzz.run();
                cyclicBarrier.await();
            }
        } catch (BrokenBarrierException e) {
            e.printStackTrace();
        }
    }

    // printNumber.accept(x) outputs "x", where x is an integer.
    public void number(IntConsumer printNumber) throws InterruptedException {
        try {
            while (cur <= n) {
                if (cur % 3 != 0 && cur % 5 != 0) printNumber.accept(cur);
                cyclicBarrier.await();
            }
        } catch (BrokenBarrierException e) {
            e.printStackTrace();
        }
    }
}
//leetcode submit region end(Prohibit modification and deletion)
```

可以从两个角度出发：

1. 各个线程每一轮都做各自的运算，但需要在每一轮结束的时候设置一个屏障，避免多个轮次无序输出。但是相同轮次里如果有同时符合条件的线程，则会无序。
2. 各个线程监听一个或者多个状态变量。
