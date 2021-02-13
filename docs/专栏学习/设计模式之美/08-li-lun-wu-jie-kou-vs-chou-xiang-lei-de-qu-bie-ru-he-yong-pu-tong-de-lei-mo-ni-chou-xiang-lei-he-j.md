---
title: 08-li-lun-wu-jie-kou-vs-chou-xiang-lei-de-qu-bie-ru-he-yong-pu-tong-de-lei-mo-ni-chou-xiang-lei-he-j
date: 2020-07-22 11:29:20
permalink: /pages/d7e9c1/
categories: 
  - Design-Pattern
  - 设计模式之美（专栏学习）
tags: 
  - 
---
# 08 | 理论五：接口vs抽象类的区别？如何用普通的类模拟抽象类和接口？

在面向对象编程中，抽象类和接口是两个经常被用到的语法概念，是面向对象四大特性，以及很多设计模式、设计思想、设计原则编程实现的基础。比如，我们可以使用**接口来实现面向对象的抽象特性、多态特性和基于接口而非实现的设计原则**，使用**抽象类来实现面向对象的继承特性和模板设计模式**等等。

两个语法概念不仅在工作中经常会被用到，在面试中也经常被提及。比如，“接口和抽象类的区别是什么？什么时候用接口？什么时候用抽象类？抽象类和接口存在的意义是什么？能解决哪些编程问题？”等等。接下来就来探讨这两个的区别。

### 什么是抽象类和接口？区别在哪里？

不同的编程语言对接口和抽象类的定义方式可能有些差别，但差别并不会很大。Java既支持接口也支持抽象类。下面以Java为例，讲解两者之间的区别。

#### 抽象类

下面这段代码是一个比较典型的抽象类的使用场景（**模板设计模式**）。Logger 是一个记录日志的抽象类，FileLogger 和 MessageQueueLogger 继承 Logger，分别实现两种不同的日志记录方式：记录日志到文件中和记录日志到消息队列中。FileLogger 和 MessageQueueLogger 两个子类复用了父类 Logger 中的 name、enabled、minPermittedLevel 属性和 log\(\) 方法，但因为这两个子类写日志的方式不同，它们又各自重写了父类中的 doLog\(\) 方法。

```vim
 // 抽象类
 public abstract class Logger {
   private String name;
   private boolean enabled;
   private Level minPermittedLevel;
 ​
   public Logger(String name, boolean enabled, Level minPermittedLevel) {
     this.name = name;
     this.enabled = enabled;
     this.minPermittedLevel = minPermittedLevel;
   }

   public void log(Level level, String message) {
     boolean loggable = enabled && (minPermittedLevel.intValue() <= level.intValue());
     if (!loggable) return;
     doLog(level, message);
   }

   protected abstract void doLog(Level level, String message);
 }
 // 抽象类的子类：输出日志到文件
 public class FileLogger extends Logger {
   private Writer fileWriter;
 ​
   public FileLogger(String name, boolean enabled,
     Level minPermittedLevel, String filepath) {
     super(name, enabled, minPermittedLevel);
     this.fileWriter = new FileWriter(filepath);
   }

   @Override
   public void doLog(Level level, String mesage) {
     // 格式化level和message,输出到日志文件
     fileWriter.write(...);
   }
 }
 // 抽象类的子类: 输出日志到消息中间件(比如kafka)
 public class MessageQueueLogger extends Logger {
   private MessageQueueClient msgQueueClient;

   public MessageQueueLogger(String name, boolean enabled,
     Level minPermittedLevel, MessageQueueClient msgQueueClient) {
     super(name, enabled, minPermittedLevel);
     this.msgQueueClient = msgQueueClient;
   }

   @Override
   protected void doLog(Level level, String mesage) {
     // 格式化level和message,输出到消息中间件
     msgQueueClient.send(...);
   }
 }
```

通过上面抽象类的例子，可以总结出以下三点：

* 抽象类不允许被实例化，只能被继承（Logger logger = new Logger\(…\); 会报编译错误）。
* 抽象类可以包含属性和方法。方法既可以包含代码实现（比如 Logger 中的 log\(\) 方法），也可以不包含代码实现（比如 Logger 中的 doLog\(\) 方法）。不包含代码实现的方法叫作抽象方法。
* 子类继承抽象类，必须实现抽象类中的所有抽象方法。对应到例子代码中就是，所有继承 Logger 抽象类的子类，都必须重写 doLog\(\) 方法。

#### 接口类

```vim
 // 接口
 public interface Filter {
   void doFilter(RpcRequest req) throws RpcException;
 }
 // 接口实现类：鉴权过滤器
 public class AuthencationFilter implements Filter {
   @Override
   public void doFilter(RpcRequest req) throws RpcException {
     //...鉴权逻辑..
   }
 }
 // 接口实现类：限流过滤器
 public class RateLimitFilter implements Filter {
   @Override
   public void doFilter(RpcRequest req) throws RpcException {
     //...限流逻辑...
   }
 }
 // 过滤器使用demo
 public class Application {
   // filters.add(new AuthencationFilter());
   // filters.add(new RateLimitFilter());
   private List<Filter> filters = new ArrayList<>();

   public void handleRpcRequest(RpcRequest req) {
     try {
       for (Filter filter : fitlers) {
         filter.doFilter(req);
       }
     } catch(RpcException e) {
       // ...处理过滤结果...
     }
     // ...省略其他处理逻辑...
   }
 }
```

上面这段代码是一个比较典型的接口的使用场景 ，通过 Java 中的 interface 关键字定义了一个 Filter 接口。AuthencationFilter 和 RateLimitFilter 是接口的两个实现类，分别实现了对 RPC 请求鉴权和限流的过滤功能。

通过以上例子，接口也可以总结出三个特性：

* 接口不能包含属性（也就是成员变量）。
* 接口只能声明方法，方法不能包含代码实现。
* 类实现接口的时候，必须实现接口中声明的所有方法。

#### 对比

从语法特性上对比，这两者有比较大的区别，比如抽象类中可以定义属性、方法的实现，而接口中不能定义属性，方法也不能包含代码实现等等。

从设计角度来看， 抽象类实际上就是类，只不过是一种特殊的类，这种类不能被实例化为对象，只能被子类继承，继承关系是一种 **is-a** 的关系，那抽象类既然属于类，也表示一种 is-a 的关系。 对于抽象类的 is-a 关系来说，接口表示一种 **has-a**（或者说behaves like） 关系，表示具有某些功能。对于接口，有一个更加形象的叫法，那就是协议（contract）。

### 抽象类和接口能解决什么编程问题？

接下来讨论下抽象类和接口存在的意义。

 **首先，我们来看一下，我们为什么需要抽象类？它能够解决什么编程问题？**

抽象类不能实例化，只能被继承 , 继承能解决代码复用的问题。所以，抽象类也是为代码复用而生的。多个子类可以继承抽象类中定义的属性和方法，避免在子类中，重复编写相同的代码。

但是，继承的类并没有强制要求必须是抽象类，普通类也可以，那么为什么还需要抽象类？

继续 拿之前那个打印日志的例子来讲解。我们先对上面的代码做下改造。在改造之后的代码中，Logger 不再是抽象类，只是一个普通的父类，删除了 Logger 中 log\(\)、doLog\(\) 方法，新增了 isLoggable\(\) 方法。FileLogger 和 MessageQueueLogger 还是继承 Logger 父类，以达到代码复用的目的。具体的代码如下：

```vim
 // 父类：非抽象类，就是普通的类. 删除了log(),doLog()，新增了isLoggable().
 public class Logger {
   private String name;
   private boolean enabled;
   private Level minPermittedLevel;
 ​
   public Logger(String name, boolean enabled, Level minPermittedLevel) {
     //...构造函数不变，代码省略...
   }
 ​
   protected boolean isLoggable() {
     boolean loggable = enabled && (minPermittedLevel.intValue() <= level.intValue());
     return loggable;
   }
 }
 // 子类：输出日志到文件
 public class FileLogger extends Logger {
   private Writer fileWriter;
 ​
   public FileLogger(String name, boolean enabled,
     Level minPermittedLevel, String filepath) {
     //...构造函数不变，代码省略...
   }

   public void log(Level level, String mesage) {
     if (!isLoggable()) return;
     // 格式化level和message,输出到日志文件
     fileWriter.write(...);
   }
 }
 // 子类: 输出日志到消息中间件(比如kafka)
 public class MessageQueueLogger extends Logger {
   private MessageQueueClient msgQueueClient;

   public MessageQueueLogger(String name, boolean enabled,
     Level minPermittedLevel, MessageQueueClient msgQueueClient) {
     //...构造函数不变，代码省略...
   }

   public void log(Level level, String mesage) {
     if (!isLoggable()) return;
     // 格式化level和message,输出到消息中间件
     msgQueueClient.send(...);
   }
 }
```

 这个设计思路虽然达到了代码复用的目的，但是无法使用多态特性了。像下面这样编写代码，就会出现编译错误，因为 Logger 中并没有定义 log\(\) 方法。

```vim
 Logger logger = new FileLogger("access-log", true, Level.WARN, "/users/wangzheng/access.log");
 logger.log(Level.ERROR, "This is a test log message.");
```

如果要解决这个问题， 那只能在 Logger 父类中，定义一个空的 log\(\) 方法，让子类重写父类的 log\(\) 方法，实现自己的记录日志的逻辑 ：

```vim
 public class Logger {
   // ...省略部分代码...
   public void log(Level level, String mesage) { // do nothing... }
 }
 public class FileLogger extends Logger {
   // ...省略部分代码...
   @Override
   public void log(Level level, String mesage) {
     if (!isLoggable()) return;
     // 格式化level和message,输出到日志文件
     fileWriter.write(...);
   }
 }
 public class MessageQueueLogger extends Logger {
   // ...省略部分代码...
   @Override
   public void log(Level level, String mesage) {
     if (!isLoggable()) return;
     // 格式化level和message,输出到消息中间件
     msgQueueClient.send(...);
   }
 }
```

这样虽然解决了问题，但是不够抽象类那么优雅，主要有以下几点：

* 在 Logger 中定义一个空的方法，**会影响代码的可读性**。如果不熟悉 Logger 背后的设计思想，代码注释又不怎么给力，在阅读 Logger 代码的时候，就可能对为什么定义一个空的 log\(\) 方法而感到疑惑，就需要去查看 Logger、FileLogger、MessageQueueLogger 之间的继承关系，才能弄明白其设计意图。
* 当创建一个新的子类继承 Logger 父类的时候，我们有可能会忘记重新实现 log\(\) 方法。之前基于抽象类的设计思路，编译器会强制要求子类重写 log\(\) 方法，否则会报编译错误。当Logger有越来越多的方法的时候，忘记实现方法的几率也会越来越大。
* Logger 可以被实例化，换句话说，我们可以 new 一个 Logger 出来，并且调用空的 log\(\) 方法。这也增加了类被误用的风险。当然，这个问题可以通过设置私有的构造函数的方式来解决。不过，显然没有通过抽象类来的优雅。

综上几点，实际上使用抽象类就是借助编译器的方式，来优雅的实现继承，多态以及代码的复用。

**其次，我们再来看一下，我们为什么需要接口？它能够解决什么编程问题？**

抽象类更多的是为了代码复用，而**接口就更侧重于解耦**。接口是对行为的一种抽象，相当于一组协议或者契约，你可以联想类比一下 API 接口。**调用者只需要关注抽象的接口，不需要了解具体的实现**，具体的实现代码对调用者透明。接口**实现了约定和实现相分离**，可以降低代码间的耦合性，提高代码的可扩展性。

实际上，接口是一个比抽象类应用更加广泛、更加重要的知识点。比如，我们经常提到的“基于接口而非实现编程”，就是一条几乎天天会用到，并且能极大地提高代码的灵活性、扩展性的设计思想。

### 如何模拟抽象类和接口两个语法概念？

前面举的例子中，使用 Java 的接口语法实现了一个 Filter 过滤器，而C++ 只有抽象类，并没有接口，那么如何模拟接口？

回顾下接口的定义： 接口中没有成员变量，只有方法声明，没有方法实现，实现接口的类必须实现接口中的所有方法。

只要拥有以上几点特性，从设计角度来说，就可以说是接口了，C++ 模拟如下：

```vim
 class Strategy { // 用抽象类模拟接口
   public:
     ~Strategy();
     virtual void algorithm()=0;
   protected:
     Strategy();
 };
```

 抽象类 Strategy 没有定义任何属性，并且所有的方法都声明为 virtual 类型（等同于 Java 中的 abstract 关键字），这样，所有的方法都不能有代码实现，并且所有继承这个抽象类的子类，都要实现这些方法。从语法特性上来看，这个抽象类就相当于一个接口。

除了使用抽象类模拟接口外，我们还可以用普通类模拟接口类，Java实现如下：

```vim
 public class MockInteface {
   protected MockInteface() {}
   public void funcA() {
     throw new MethodUnSupportedException();
   }
 }
```

虽然接口中的方法不允许有实现，但我们可以通过抛出异常，来模拟不包含实现的方法，并且继承的子类为了能正常运行，也不得不主动实现该方法。为了避免类被实例化，再通过protected关键字来避免被实例化。普通类模拟抽象类也是类似流程。

### 如何决定该用抽象类还是接口？

Q：从真实项目开发的角度来看一下，在代码设计、编程开发的时候，什么时候该用抽象类？什么时候该用接口？

A：实际上，判断的标准很简单。如果我们要表示一种 is-a 的关系，并且是为了解决代码复用的问题，我们就用抽象类；如果我们要表示一种 has-a（或者说behaves like） 关系，并且是为了解决抽象而非代码复用的问题，那我们就可以使用接口。

从类的继承层次上来看，抽象类是一种自下而上的设计思路，先有子类的代码重复，然后再抽象成上层的父类（也就是抽象类）。而接口正好相反，它是一种自上而下的设计思路。**我们在编程的时候，一般都是先设计接口，再去考虑具体的实现。**

### 总结

#### 1. 抽象类和接口的语法特性

* 抽象类：不允许被实例化，可以包含属性，可以声明方法，方法既可以包含代码实现，也可以不包含代码实现。不包含代码实现的方法叫作抽象方法（abstract）。子类继承抽象类，必须实现抽象类中的所有抽象方法。
* 接口类：不允许被实例化，不能包含属性，只能声明方法（抽象，静态，default），方法不能包含代码实现。类实现接口的时候，必须实现接口中声明的所有方法。

#### 2. 抽象类和接口存在的意义

* 抽象类：表示 is-a 的关系，目的是为了代码复用。
* 接口类：表示 has-a （behaves like）的关系，表示具有某一组行为或协议，目的是为了解耦，隔离接口的声明和实现，提高代码的可扩展性。

#### 3. 抽象类和接口的应用场景区别

如果表示的关系是 is-a 的话，并且为了代码能够复用，则使用抽象类。

如果表示的关系式 has-a （或者说behaves like）的话，并且是为了更好的抽象而非代码复用问题，则使用接口类。


