---
title: 14-er-cha-shu
date: 2020-07-22 14:48:49
permalink: /pages/848326/
categories: 
  - Algorithm
  - 数据结构与算法（专栏学习）
tags: 
  - 
---
# 14 | 二叉树

树是一种非线性表的数据结构，由多个节点组成，节点之间存在父子关系，没有父节点的结点称为**根节点**，没有子节点的称为**叶子节点**。

![](https://static001.geekbang.org/resource/image/b7/29/b7043bf29a253bb36221eaec62b2e129.jpg)

树还有三个概念：**高度**（Height）、**深度**（Depth、**层**（Level）。

* 节点的高度：节点**到叶子节点**的最长路径（边数）。
* 节点的深度：根节点到这个节点的**路径边数**。
* 节点的层数：结点的深度 +1 。
* 树的高度：根节点的高度。

![](https://static001.geekbang.org/resource/image/50/b4/50f89510ad1f7570791dd12f4e9adeb4.jpg)

## 1. 二叉树

树的结构有很多种，但我们最常用的还是二叉树。

二叉树，就是每个节点只有 2 个或 2 个以下的子节点，如下：

![](https://static001.geekbang.org/resource/image/09/2b/09c2972d56eb0cf67e727deda0e9412b.jpg)

其中 2 号树，除了叶子节点之外，其他每一次都有 2 个子节点，这种二叉树叫做 **满二叉树**。

3号树，除了叶子节点没全满，并且都是往左靠，其他层次的节点个数都达到最大，这种树叫做 **完全二叉树**。

![](https://static001.geekbang.org/resource/image/18/60/18413c6597c2850b75367393b401ad60.jpg)

### 1.1 二叉树的存储

二叉树的存储方式，较为简单、直观常用的是 **链式存储法**，通过链表把各个节点串联起来：

![](https://static001.geekbang.org/resource/image/12/8e/12cd11b2432ed7c4dfc9a2053cb70b8e.jpg)

这种方式较为常用，大部分二叉树都是通过这种方式存储的。

还有一种方式是基于数组的 **顺序存储法**。我们把根节点存储在下标 i = 1 的位置，那左子节点存储在下标 $2  _i = 2$ 的位置，右子节点存储在 $2_  i + 1 = 3$ 的位置。以此类推，B 节点的左子节点存储在 $2  _i = 2_  2 = 4$ 的位置，右子节点存储在 $2  _i + 1 = 2_  2 + 1 = 5$ 的位置。

![](https://static001.geekbang.org/resource/image/14/30/14eaa820cb89a17a7303e8847a412330.jpg)

但这种方式往往只适合满二叉树或者完全二叉树，如果是非 “完整” 的二叉树，会造成空间的浪费：

![](https://static001.geekbang.org/resource/image/08/23/08bd43991561ceeb76679fbb77071223.jpg)

如果某棵二叉树是一棵完全二叉树，那用数组存储无疑是最节省内存的一种方式。因为数组的存储方式并不需要像链式存储法那样，要存储额外的左右子节点的指针。这也是为什么完全二叉树会单独拎出来的原因，也是为什么完全二叉树要求最后一层的子节点都靠左的原因。

### 1.2 二叉树的遍历

二叉树的遍历有最经典的三种：**前序遍历**、**中序遍历**和**后序遍历**。

* 前序遍历：对于树中的任意节点，先遍历其自身，再遍历其左子节点，再遍历其右子节点。
* 中序遍历：对于树中的任意节点，先遍历其左子节点，再遍历其自身，再遍历其右子节点。
* 后序遍历：对于树中的任意节点，先遍历其左子节点，再遍历其右子节点，再遍历其自身。

![](https://static001.geekbang.org/resource/image/ab/16/ab103822e75b5b15c615b68560cb2416.jpg)

实际上二叉树的三种遍历就是一个**递归**的过程，递推公式如下：

```javascript
前序遍历的递推公式：
preOrder(r) = print r->preOrder(r->left)->preOrder(r->right)

中序遍历的递推公式：
inOrder(r) = inOrder(r->left)->print r->inOrder(r->right)

后序遍历的递推公式：
postOrder(r) = postOrder(r->left)->postOrder(r->right)->print r
```

再由此得出如下（伪）代码：

```javascript
void preOrder(Node* root) {
  if (root == null) return;
  print root // 此处为伪代码，表示打印root节点
  preOrder(root->left);
  preOrder(root->right);
}

void inOrder(Node* root) {
  if (root == null) return;
  inOrder(root->left);
  print root // 此处为伪代码，表示打印root节点
  inOrder(root->right);
}

void postOrder(Node* root) {
  if (root == null) return;
  postOrder(root->left);
  postOrder(root->right);
  print root // 此处为伪代码，表示打印root节点
}
```

在树的遍历过程中，由于每个节点最多只会被访问两次，因此时间复杂度为 O\(n\)。

## 2. 二叉查找树（Binary Search Tree）

二叉查找树，结构与二叉树一样，但是针对节点顺序多了一些规则，**支持动态数据的快速查找、插入、删除操作**。

二叉树要求，树中的任意一个节点，**左子节点都要比该节点小，右子节点都要比该节点大**。

### 2.1 查找操作

二叉查找树的操作很简单，从根节点开始遍历，如果查找对象小于根节点，则递归查找根节点的左子树，否则递归查找右子树：

```java
public class BinarySearchTree {
  private Node tree;

  public Node find(int data) {
    Node p = tree;
    while (p != null) {
      if (data < p.data) p = p.left;
      else if (data > p.data) p = p.right;
      else return p;
    }
    return null;
  }

  public static class Node {
    private int data;
    private Node left;
    private Node right;

    public Node(int data) {
      this.data = data;
    }
  }
}
```

### 2.1 插入操作

二叉查找树插入的节点一般都在叶子节点上，跟查找操作类似，通过递归左右子树一直找到叶子节点，然后再根据大小作为左子节点还是右子节点进行插入：

```java
public void insert(int data) {
  if (tree == null) {
    tree = new Node(data);
    return;
  }

  Node p = tree;
  while (p != null) {
    if (data > p.data) {
      if (p.right == null) {
        p.right = new Node(data);
        return;
      }
      p = p.right;
    } else { // data < p.data
      if (p.left == null) {
        p.left = new Node(data);
        return;
      }
      p = p.left;
    }
  }
}
```

### 2.2 删除操作

二叉查找树的删除操作较为复杂，需要分多种情况进行讨论：

1. 若要删除节点**没有子节点**，则将该节点的父节点指向该节点的指针置为 null 即可。
2. 若要删除的结点**只有一个子节点**，则将该节点的父节点指向该节点的指针重新指向该节点的子节点。
3. 若要删除的节点有**两个子节点**或以上（左子树、右子树），这时情况比较复杂，需要通过递归查找右子树中的最小节点（或者左子树中的最大节点），将其替换到要删除的节点上，然后再删除掉右子树中的最小节点（左子树中的最大节点）。

![](https://static001.geekbang.org/resource/image/29/2c/299c615bc2e00dc32225f4d9e3490e2c.jpg)

```java
public void delete(int data) {
  Node p = tree; // p指向要删除的节点，初始化指向根节点
  Node pp = null; // pp记录的是p的父节点
  while (p != null && p.data != data) {
    pp = p;
    if (data > p.data) p = p.right;
    else p = p.left;
  }
  if (p == null) return; // 没有找到

  // 要删除的节点有两个子节点
  if (p.left != null && p.right != null) { // 查找右子树中最小节点
    Node minP = p.right;
    Node minPP = p; // minPP表示minP的父节点
    while (minP.left != null) {
      minPP = minP;
      minP = minP.left;
    }
    p.data = minP.data; // 将minP的数据替换到p中
    p = minP; // 下面就变成了删除minP了
    pp = minPP;
  }

  // 删除节点是叶子节点或者仅有一个子节点
  Node child; // p的子节点
  if (p.left != null) child = p.left;
  else if (p.right != null) child = p.right;
  else child = null;

  if (pp == null) tree = child; // 删除的是根节点
  else if (pp.left == p) pp.left = child;
  else pp.right = child;
}
```

### 2.3 其他操作

除了前面的操作，二叉查找树中还可以支持快速地查找最大节点和最小节点、前驱节点和后继节点。

二叉查找树由于其左右节点大小的特性，可以通过中序遍历有序的输出序列，时间复杂度为 O\(n\) ，因此，二叉查找树也常常叫做二叉排序树。

前面都是在没有重复数据的前提下进行的，一旦有重复数据插入，我们有两种方式可以解决。

第一种方法是在相同节点上，通过存储数组等方式进行存储。

第二种更加优雅，一旦遇到相同值，则将其插入右子树中，也就是将其当成大于原节点的数据进行插入。

![](https://static001.geekbang.org/resource/image/3f/5f/3f59a40e3d927f567022918d89590a5f.jpg)

至于查找操作，我们不再是找到目标节点就停止查找，而是继续查找直到到达叶子节点为止。

![](https://static001.geekbang.org/resource/image/fb/ff/fb7b320efd59a05469d6d6fcf0c98eff.jpg)

对于删除操作，我们也需要先找到每个要删除的节点，再按照之前的删除操作进行删除即可。

![](https://static001.geekbang.org/resource/image/25/17/254a4800703d31612c0af63870260517.jpg)

### 2.4 时间复杂度

二叉查找树的结构多种多样，各种结构的时间复杂度也是不一样的：

![](https://static001.geekbang.org/resource/image/e3/d9/e3d9b2977d350526d2156f01960383d9.jpg)

最坏情况下，当二叉查找树的结构极度不平衡时，会退化为链表，查找的时间复杂度为 O\(n\)。

最好情况下，当二叉查找树都是平衡的，根据前面的代码，查找一个元素的时间复杂度取决于树的高度，因此可以将问题转化为如何求二叉查找树的高度。

将树按照层来看的话，第一层为 1 个节点，第二层则是 2 个节点，第三层 4 个节点，以此类推，就是一个等比数列求和，但是最后一层的叶子节点不符合这个规律，但是可以确定的是最后一层的节点个数在 1 个到 2^\(L-1\) 个之间（我们假设最大层数是 L）。所以节点个数 n 满足以下关系：

```vim
n >= 1+2+4+8+...+2^(L-2)+1
n <= 1+2+4+8+...+2^(L-2)+2^(L-1)
```

从而可以得到高度 L 的范围是 \[log2\(n+1\), log2n +1\]，因此二叉查找树的平均时间复杂度为 O\(longn\)。

## 思考

**Q：给定一组数据，比如 1，3，5，6，9，10。你来算算，可以构建出多少种不同的二叉树？**

> 若按照完全二叉树来构造，可以存储在数组中，则共有 n! 中不同的二叉树。

**Q：二叉树有三种遍历方式，前、中、后序。实际上，还有另外一种遍历方式，也就是按层遍历，你知道如何实现吗？**

> 可以借助队列先进先出的特点，来实现节点的遍历。

```vim

```

**Q：散列表的插入、删除、查找操作的时间复杂度可以做到常量级的 O\(1\)，非常高效。而二叉查找树在比较平衡的情况下，插入、删除、查找操作时间复杂度才是 O\(logn\)，相对散列表，好像并没有什么优势，那我们为什么还要用二叉查找树呢？**

> 1. 散列表的数据存储是没有顺序的，若需要有序输出则需要进行排序，而二叉查找树则可以通过中序遍历有序输出元素。
> 2. 散列表扩容耗时多，当散列冲突较严重，达到装载因子的时候，性能会不稳定，尽管二叉查找树的性能不稳定，但是在工程中，我们最常用的**平衡二叉查找树**的性能非常稳定，时间复杂度稳定在 O\(logn\)。
> 3. 尽管散列表的查找是常数级的，但是在散列冲突严重的时候，效率不一定比 O\(logn\) 快。加上哈希函数的耗时，也不一定就比平衡二叉查找树的效率高。
> 4. 散列表的构造比二叉查找树要复杂，需要考虑的东西很多。比如散列函数的设计、冲突解决办法、扩容、缩容等。平衡二叉查找树**只需要考虑平衡性**这一个问题，而且这个问题的解决方案比较成熟、固定。
> 5. 为了避免过多的散列冲突，散列表装载因子不能太大，特别是基于开放寻址法解决冲突的散列表，不然会浪费一定的存储空间。
>
> 综上几点，二叉查找树在某些方面还是优于散列表的，两者并不冲突，还需要根据具体场景选择。

**Q：如何通过编程，求出一棵给定二叉树的确切高度呢？**

> 可以通过查找递归查找左子树中的最小节点以及右子树中的最大节点，取两者经过的最大边数+1。
>
> 递归法，Max\(min\_left\_node, max\_right\_node\) + 1。
>
> 或者通过按层遍历的方式得到层数，即为高度。

