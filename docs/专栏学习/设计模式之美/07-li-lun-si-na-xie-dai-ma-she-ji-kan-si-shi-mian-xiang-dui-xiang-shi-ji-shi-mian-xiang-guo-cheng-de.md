---
title: 07-li-lun-si-na-xie-dai-ma-she-ji-kan-si-shi-mian-xiang-dui-xiang-shi-ji-shi-mian-xiang-guo-cheng-de
date: 2020-07-22 11:29:20
permalink: /pages/406a36/
categories: 
  - Design-Pattern
  - 设计模式之美（专栏学习）
tags: 
  - 
---
# 07 | 理论四：哪些代码设计看似是面向对象，实际是面向过程的

### 哪些代码设计看似是面向对象，实际是面向过程的？

在用面向对象编程语言进行软件开发的时候，我们有时候会写出面向过程风格的代码。有些是有意为之，并无不妥；而有些是无意为之，会影响到代码的质量。

#### 1. 滥用getter、setter

通常来说，为一个类的所有属性都设定getter、setter方法，往往会破坏面向对象的封装原则（ 通过访问权限控制，隐藏内部数据，外部仅能通过类提供的有限的接口访问、修改内部数据 ），使其退化为面向过程编程，以下面一个模拟购物车的代码为例：

```vim
 public class ShoppingCart {
   private int itemsCount;
   private double totalPrice;
   private List<ShoppingCartItem> items = new ArrayList<>();

   public int getItemsCount() {
     return this.itemsCount;
   }

   public void setItemsCount(int itemsCount) {
     this.itemsCount = itemsCount;
   }

   public double getTotalPrice() {
     return this.totalPrice;
   }

   public void setTotalPrice(double totalPrice) {
     this.totalPrice = totalPrice;
   }
 ​
   public List<ShoppingCartItem> getItems() {
     return this.items;
   }

   public void addItem(ShoppingCartItem item) {
     items.add(item);
     itemsCount++;
     totalPrice += item.getPrice();
   }
   // ...省略其他方法...
 }
```

首先看前两个属性 itemsCount 和 totalPrice ，它们都是定义了private作用域，然而我们又定义了public作用域的getter、setter，使得外部可以随意访问、设置这两个属性。

再看下items属性，为itemsCount 和 totalPrice的getter设置getter也无伤大雅，毕竟不会改变属性值，但是对于items来说就不一样了，因为item本身是一个可变集合（mutable collection）， 外部调用者在拿到这个容器之后，是可以操作容器内部数据的 ，比如：

```vim
 ShoppingCart cart = new ShoppCart();
 ...
 cart.getItems().clear(); // 清空购物车
```

如此一来，如果外部调用者清空了购物车（item），则会导致 itemsCount 和 totalPrice状态的不一致，因此，正确的做法是，将清空购物车的逻辑封装起来，透明地给调用者使用：

```vim
 public class ShoppingCart {
   // ...省略其他代码...
   public void clear() {
     items.clear();
     itemsCount = 0;
     totalPrice = 0.0;
   }
 }
```

可能还会有个需求，说是需要浏览购物车的信息，那么就不得不暴露 items 的信息了，那么如何防止item内部状态被破坏？

在Java语言中，我们可以利用 `Collections.unmodifiableList()` 做一层包装，使其返回一个不可变的集合（immutable collection），这个容器类重写了 List 容器中跟修改数据相关的方法，比如 add\(\)、clear\(\) 等方法。一旦我们调用这些修改数据的方法，代码就会抛出 UnsupportedOperationException 异常，这样就避免了容器中的数据被修改。 具体实现如下：

```vim
 public class ShoppingCart {
   // ...省略其他代码...
   public List<ShoppingCartItem> getItems() {
     return Collections.unmodifiableList(this.items);
   }
 }
 ​
 public class UnmodifiableList<E> extends UnmodifiableCollection<E>
                           implements List<E> {
   public boolean add(E e) {
     throw new UnsupportedOperationException();
   }
   public void clear() {
     throw new UnsupportedOperationException();
   }
   // ...省略其他代码...
 }
 ​
 ShoppingCart cart = new ShoppingCart();
 List<ShoppingCartItem> items = cart.getItems();
 items.clear();//抛出UnsupportedOperationException异常
```

即使这样实现后，代码还是会有问题，即使item不可变了，但item里的每个对象仍然是可以被外部破坏的：

```vim
 ShoppingCart cart = new ShoppingCart();
 cart.add(new ShoppingCartItem(...));
 List<ShoppingCartItem> items = cart.getItems();
 ShoppingCartItem item = items.get(0);
 item.setPrice(19.0); // 这里修改了item的价格属性
```

这里先不提如何解决，解决方案会在后面的设计模式再讲到。

#### 2. 滥用全局变量和全局方法

 在面向对象编程中，常见的全局变量有单例类对象、静态成员变量、常量等，常见的全局方法有静态方法。

* 单例类对象 ： 在全局代码中只有一份，相当于一个全局变量 ；
* 静态成员变量：归属于类上的数据，被所有的实例化对象所共享，也相当于一定程度上的全局变量；
* 常量：非常常见的全局变量，比如一些代码中的配置参数，一般都设置为常量，放到一个 Constants 类中；
* 静态方法：一般用来操作静态变量或者外部数据，将数据跟方法分离，是一种典型的的面向过程编程。

在全局变量和全局方法中，**Constants** 类和 **Utils** 类最常用到，而且也是我们日常开发中经常使用到的类（如前面的`Collections`）， 接下来深入探讨一下全局变量和全局方法的利与弊。

**Constants类**

我们常见的一种Constants类如下：

```vim
 public class Constants {
   public static final String MYSQL_ADDR_KEY = "mysql_addr";
   public static final String MYSQL_DB_NAME_KEY = "db_name";
   public static final String MYSQL_USERNAME_KEY = "mysql_username";
   public static final String MYSQL_PASSWORD_KEY = "mysql_password";

   public static final String REDIS_DEFAULT_ADDR = "192.168.7.2:7234";
   public static final int REDIS_DEFAULT_MAX_TOTAL = 50;
   public static final int REDIS_DEFAULT_MAX_IDLE = 50;
   public static final int REDIS_DEFAULT_MIN_IDLE = 20;
   public static final String REDIS_DEFAULT_KEY_PREFIX = "rt:";

   // ...省略更多的常量定义...
 }
```

这段代码中，我们把所有用到的常量都放到了一个类中，这样做有以下几点不好的地方：

1. **这中大而全的设计会影响代码的可维护性**，如果参加项目的工程师很多，每个人都往里面添加常量，那么会使这个类一直增长，查找修改某个常量也会变得困难，以及增大代码提交的冲突。
2. **增加代码的编译时间**，当Constants类包含很多常量时，每次修改都会导致依赖这个类的代码需要重新编译，因此会浪费很多不必要的编译时间。
3. **影响代码的复用性**，如果在新的项目中需要复用某个类，而那个类又依赖Constants类，那么就会同时引入很多无关的变量。

改进Constants类有两种参考思路：

1. 将Constants拆分为多个单一功能的类，比如Mysql相关的就放在MysqlConstants里，Redis的则放在RedisConstants中。
2. 直接定义在需要使用的类中，比如MysqlConfig用到了一个常量，那么就定义在MysqlConfig中，这样也提高了类设计的内聚性和复用性。个人认为，这种方式下，在Java中如果其他类需要用到该属性，去new一个类再调用常量就显得怪怪的，而Scala的伴生类在这一点则做得不错。

**Utils类**

 实际上，Utils 类的出现是基于这样一个问题背景：如果我们有两个类 A 和 B，它们要用到一块相同的功能逻辑，为了避免代码重复，我们不应该在两个类中，将这个相同的功能逻辑，重复地实现两遍。这个时候我们该怎么办呢？

有时候， 有的时候，从业务含义上，A 类和 B 类并不一定具有继承关系，比如 Crawler 类和 PageAnalyzer 类，它们都用到了 URL 拼接和分割的功能，但并不具有继承关系（**既不是父子关系，也不是兄弟关**系）。这时候仅仅为了代码复用抽象出一个父类就不是很合适了。

这时候既然继承不能解决问题，那么我们可以定义一个新的类，实现 URL 拼接和分割的方法。而拼接和分割两个方法，不需要共享任何数据，所以新的类不需要定义任何属性，这个时候，我们就可以把它定义为只包含静态方法的 Utils 类了。

 实际上，只包含静态方法不包含任何属性的 Utils 类，是彻彻底底的面向过程的编程风格，但并不是说面向对象编程中就要杜绝面向过程编程。面向过程编程（以方法为基本组织单位）能帮助我们解决代码复用问题，但也不能滥用。

通前面的Constants一样，在定义Utils类的时候，最好也能细化一下，针对不同的功能，设计不同的 Utils 类，比如 FileUtils、IOUtils、StringUtils、UrlUtils 等，不要设计一个过于大而全的 Utils 类。

#### 3. 定义数据和方法分离的类（贫血模型）

最后还有一种面向对象编程过程中，常见的面向过程风格的代码。那就是，数据定义在一个类中，方法定义在另一个类中。

这种风格在基于 MVC 三层结构做 Web 方面的后端开发中经常能见到。

传统的 MVC 结构分为 Model 层、Controller 层、View 层这三层。不过，在做前后端分离之后，三层结构在后端开发中，会稍微有些调整，被分为 Controller 层、Service 层、Repository 层。Controller 层负责暴露接口给前端调用，Service 层负责核心业务逻辑，Repository 层负责数据读写。而在每一层中，我们又会定义相应的 VO（View Object）、BO（Business Object）、Entity。 一般情况下，VO、BO、Entity 中只会定义数据，不会定义方法，所有操作这些数据的业务逻辑都定义在对应的 Controller 类、Service 类、Repository 类中。这就是典型的面向过程的编程风格。

 实际上，这种开发模式叫作基于贫血模型的开发模式，也是我们现在非常常用的一种 Web 项目的开发模式。 这种风格跟我们平时的项目开发结合得非常紧密，所以，更加细致、全面的讲解，会在面向对象实战环节里再讲透彻。

### 思考

#### 1. 在面向对象编程中，为什么容易写出面向过程风格的代码？

我们在进行面向对象编程的时候，总是很容易不由自主地写出面向过程编程，这是为什们呢？

可以联想一下，在生活中，你去完成一个任务，你一般都会思考，应该先做什么、后做什么，如何一步一步地顺序执行一系列操作，最后完成整个任务。面向过程编程风格恰恰符合人的这种流程化思维方式。

面向对象编程风格正好相反。它是一种**自底向上的思考方式**。它不是先去按照执行流程来分解任务，而是**先将任务翻译成一个一个的小的模块（也就是类），设计类之间的交互，最后按照流程将类组装起来**，完成整个任务， 这样的思考路径比较适合复杂程序的开发，但并不是特别符合人类的思考习惯。

 除此之外，面向对象编程要比面向过程编程难一些。在面向对象编程中，类的设计还是挺需要技巧，挺需要一定设计经验的。你要去思考如何封装合适的数据和方法到一个类里，如何设计类之间的关系，如何设计类之间的交互等等诸多设计问题。

#### 2. 面向过程编程及面向过程编程语言就真的无用武之地了吗？

如果我们开发的是微小程序，或者是一个数据处理相关的代码，以算法为主，数据为辅，那脚本式的面向过程的编程风格就更适合一些。

实际上，**面向过程编程是面向对象编程的基础，面向对象编程离不开基础的面向过程编程**。类中每个方法的实现逻辑，实际上就是面向过程编程的代码。

不管使用面向过程还是面向对象哪种风格来写代码，我们最终的目的还是写出易维护、易读、易复用、易扩展的高质量代码。 只要我们能避免面向过程编程风格的一些弊端，控制好它的副作用，在掌控范围内为我们所用，我们就大可不用避讳在面向对象编程中写面向过程风格的代码。

