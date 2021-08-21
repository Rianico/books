(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{825:function(s,a,t){"use strict";t.r(a);var n=t(70),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Java 的异常处理涉及了如下三种代码块：")]),s._v(" "),t("ul",[t("li",[s._v("try：用来标记需要监控的代码。")]),s._v(" "),t("li",[s._v("catch：捕获 try 中出发的某种类型的异常，可自上而下捕获多种异常，且前面的异常类型不能覆盖后面的异常类型（由小到大）。")]),s._v(" "),t("li",[s._v("finally：用来声明一段必定运行的代码，运行顺序遵守以下规则：\n"),t("ul",[t("li",[s._v("程序运行正常，则在 try 之后必定运行")]),s._v(" "),t("li",[s._v("程序运行异常，且没有使用 catch 捕获，则运行 finally 后再抛出异常")]),s._v(" "),t("li",[s._v("程序运行异常，进入 catch 代码块捕获，之后必定运行 finally；如果 catch 也抛出异常，则 finally 运行后跑出 catch 块的异常。")]),s._v(" "),t("li",[s._v("finally 块抛出异常，则会中断 finally 代码块，并往外抛异常。")])])])]),s._v(" "),t("p",[s._v("所有异常都是 Throwable 类或者其子类的实例：")]),s._v(" "),t("ol",[t("li",[s._v("Error：表示异常无法恢复，需要终止线程甚至虚拟机。")]),s._v(" "),t("li",[s._v("Expection：程序可能需要捕获并处理。\n"),t("ul",[t("li",[s._v("RuntimeException：较为特殊的异常，表示程序无法运行，但仍能尝试处理下。")])])])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/47/93/47c8429fc30aec201286b47f3c1a5993.png",alt:""}})]),s._v(" "),t("p",[s._v("RuntimeException 和 Error 属于 Java 里的"),t("strong",[s._v("非检查异常（unchecked exception）")]),s._v("。其他异常则属于检查异常（checked exception），需要显示地捕获，或者在方发声明中用 throws 关键字标注。")]),s._v(" "),t("blockquote",[t("p",[s._v("NOTE：尽可能使用检查异常，以便最大化利用 Java 编译器的编译时检查。")])]),s._v(" "),t("p",[s._v("异常实例的构造十分昂贵，在构造异常实例时，Java 虚拟机便需要生成该异常的"),t("strong",[s._v("栈轨迹（stack trace）")]),s._v("。该操作会逐一访问当前线程的 Java 栈帧，并且记录下各种调试信息，包括栈帧所指向方法的名字，方法所在的类名、文件名，以及在代码中的第几行触发该异常。")]),s._v(" "),t("p",[s._v("在生成栈轨迹时，Java 虚拟机会"),t("strong",[s._v("忽略掉异常构造器以及填充栈帧的 Java 方法（Throwable.fillInStackTrace）")]),s._v("，直接从新建异常位置开始算起，同时也不会记录被标记为隐藏的 Java 方法栈帧（e.g. Lambda 表达式）。")]),s._v(" "),t("p",[t("strong",[s._v("Java 依靠异常表来捕获异常")]),s._v("，编译生成的字节码中，每个方法都附带一个异常表。")]),s._v(" "),t("p",[s._v("异常表中的每一个条目代表一个异常处理器，并且由 "),t("strong",[s._v("from 指针")]),s._v("、"),t("strong",[s._v("to 指针")]),s._v("、"),t("strong",[s._v("target 指针")]),s._v("以及"),t("strong",[s._v("所捕获的异常类型 type")]),s._v("构成。这些指针的值是"),t("strong",[s._v("字节码索引（bytecode index，bci）")]),s._v("，用以定位字节码：")]),s._v(" "),t("ul",[t("li",[s._v("from：监控的字节码起始位置。")]),s._v(" "),t("li",[s._v("to：监控的字节码结束位置。")]),s._v(" "),t("li",[s._v("target：发生异常时跳转的目标字节码位置。")]),s._v(" "),t("li",[s._v("type：监控的异常类型。")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Foo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Code")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" aload_0\n       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" invokespecial #"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("                  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// Method java/lang/Object."<init>":()V')]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Code")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" aload_0\n       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iconst_0\n       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" putfield      #"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("                  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Field tryBlock:I")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" aload_0\n       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iconst_2\n       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" putfield      #"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("                  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Field finallyBlock:I")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("goto")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" astore_1\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" aload_0\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iconst_1\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" putfield      #"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("                  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Field catchBlock:I")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" aload_0\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iconst_2\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" putfield      #"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("                  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Field finallyBlock:I")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("goto")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" astore_2\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" aload_0\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iconst_2\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" putfield      #"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("                  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Field finallyBlock:I")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" aload_2\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("34")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" athrow\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" aload_0\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("36")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iconst_3\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" putfield      #"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("                  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Field methodExit:I")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),s._v(" table"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n       from    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v("  target type\n           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),s._v(" java"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lang"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v("   any\n          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v("   any\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br")])]),t("p",[s._v("当发生异常时，如果遍历完所有异常类型仍未匹配到，那么它会弹出当前方法对应的 Java 栈帧，并且在调用者（caller）中重复上述操作。"),t("strong",[s._v("在最坏情况下，Java 虚拟机需要遍历当前线程 Java 栈上所有方法的异常表")]),s._v("。")]),s._v(" "),t("p",[s._v("finally 代码块的编译，是通过复制内容，分别放在 "),t("strong",[s._v("try-catch 代码块所有正常/异常执行路径上来实现的")]),s._v("。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/17/06/17e2a3053b06b0a4383884f106e31c06.png",alt:""}})]),s._v(" "),t("p",[t("strong",[s._v("如果 try/catch 块抛出了异常，finally 也抛出了异常，那么 finally 的异常将会覆盖前面的异常")]),s._v("，避免异常被吞掉的方式就是使用 "),t("strong",[s._v("Suppressed")]),s._v(" 异常，或者 Java 7 引入的 "),t("strong",[s._v("try-with-resource")]),s._v("。")]),s._v(" "),t("blockquote",[t("p",[s._v("NOTE：Suppressed 异常使用起来较为繁琐，推荐使用 try-with-resource，对应的类只需要实现 "),t("em",[s._v("java.lang.AutoCloseable")]),s._v(" 接口即可。详见 "),t("a",{attrs:{href:"https://www.baeldung.com/java-suppressed-exceptions",target:"_blank",rel:"noopener noreferrer"}},[s._v("Java Suppressed Exceptions"),t("OutboundLink")],1),s._v("。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);