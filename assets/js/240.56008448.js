(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{963:function(s,a,t){"use strict";t.r(a);var n=t(70),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"偏函数（partialfunction）、部分应用函数（partial-applied-function）和柯里化-currying"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#偏函数（partialfunction）、部分应用函数（partial-applied-function）和柯里化-currying"}},[s._v("#")]),s._v(" 偏函数（PartialFunction）、部分应用函数（Partial Applied Function）和柯里化(Currying)")]),s._v(" "),t("h2",{attrs:{id:"偏函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#偏函数"}},[s._v("#")]),s._v(" 偏函数")]),s._v(" "),t("p",[s._v("在scala中，可以利用模式匹配来扩展创建偏函数，偏函数是一种特殊的一元函数，"),t("strong",[s._v("并不支持处理所输入参数的所有情况")]),s._v("。类型为PartialFunction[-T,+V]。"),t("code",[s._v("T是接收的类型，V是返回的结果类型")])]),s._v(" "),t("p",[s._v("如下，下列偏函数是求平方根，并且在input为负数的时候不做处理。")]),s._v(" "),t("div",{staticClass:"language-scala line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-scala"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" squareRoot"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PartialFunction"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Double")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Double")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("=>")]),s._v(" Math"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sqrt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("可以使用isDefinedAt来确认该偏函数是否能够处理某个特定的值。")]),s._v(" "),t("div",{staticClass:"language-scala line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-scala"}},[t("code",[s._v("squareRoot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isDefinedAt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" shouldEqual "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nsquareRoot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isDefinedAt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" shouldEqual "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("偏函数之间彼此也可以使用"),t("strong",[s._v("orElse")]),s._v(" 或者 "),t("strong",[s._v("andThen")]),s._v("相互连接。")]),s._v(" "),t("div",{staticClass:"language-scala line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-scala"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" positive"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PartialFunction"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("=>")]),s._v(" x\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" odd"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PartialFunction"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Boolean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" even"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PartialFunction"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Boolean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" evenCheck"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PartialFunction"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Boolean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" positive andThen even\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" oddCheck"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PartialFunction"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Boolean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" positive andThen odd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[t("strong",[s._v("compose")]),s._v("可以进行一次预处理。")]),s._v(" "),t("div",{staticClass:"language-scala line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-scala"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 只处理1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" parfun1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("PartialFunction"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \nparfun1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\nparfun1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isDefinedAt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 做一层预处理")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" compfun"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("Function1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" parfun1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("compose"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("=>")]),s._v("System"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("println"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"compose:"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("Integer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("valueOf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\ncompfun"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// compose:1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("偏函数的这项特性，在实现一个验证系统的时候非常有用，我们可以实现一系列的检查去验证输入的数据是否符合要求。")]),s._v(" "),t("div",{staticClass:"language-scala line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-scala"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" finalCheck "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" check1 andThen check2 andThen check3 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("当新增或者移除的时候也十分方便。")]),s._v(" "),t("p",[s._v("Scala也可以将偏函数应用于collections，"),t("strong",[s._v("collect")]),s._v("方法将一个偏函数作为输入参数，将这个偏函数作用于各个值上，跳过超出函数中定义的元素。")]),s._v(" "),t("div",{staticClass:"language-scala line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-scala"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" greaterThan20"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PartialFunction"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Any")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("=>")]),s._v(" i\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nList"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("45")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blah"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" collect greaterThan20 \nshouldEqual List"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("45")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"部分应用函数（partially-applied-functions）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部分应用函数（partially-applied-functions）"}},[s._v("#")]),s._v(" 部分应用函数（Partially Applied Functions）")]),s._v(" "),t("p",[s._v("在函数式编程中，对一个有参数的函数的调用也可以看成"),t("strong",[s._v("将函数应用到参数上")]),s._v("。")]),s._v(" "),t("p",[s._v("当一个函数带着所有参数被调用时，就叫做将函数完整（fully applied）的应用到每个参数上。当"),t("strong",[s._v("只传递参数的子集到函数")]),s._v("也是可以通过的，将返回一个"),t("strong",[s._v("部分应用函数（Partially Applied Functions）")]),s._v("。Scala中不会因为你只传递部分参数而抛出一个异常，而是简单的将其应用并返回一个新的带着剩余需要你传递的参数的函数。")]),s._v(" "),t("div",{staticClass:"language-scala line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-scala"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" divide "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Double")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" den"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Double")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" den\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" halfOf"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Double")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Double")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" divide"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nhalfOf "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" shouldEqual "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("我们在求某个值的一般的时候，可以知道分母必定为2，所以"),t("code",[s._v("halfOf")]),s._v("通过部分应用"),t("strong",[s._v("除")]),s._v("的函数得到求半的功能。"),t("code",[s._v("_")]),s._v("占位符表示剩余的参数。")]),s._v(" "),t("p",[s._v("部分应用函数很容易跟Scala中的**柯里化（Currying）**混淆。两者都能减少函数中的参数数量，但是柯里化将部分应用函数的概念进行了更加深层次的扩展。")]),s._v(" "),t("h2",{attrs:{id:"柯里化（currying）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#柯里化（currying）"}},[s._v("#")]),s._v(" 柯里化（"),t("strong",[s._v("Currying")]),s._v("）")]),s._v(" "),t("p",[t("strong",[s._v("柯里化是将一个带有多个参数的函数拆分为一系列函数，每个函数带有单独的参数")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-scala line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-scala"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" curriedDivide"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Double")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("den"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Double")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" den\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("curriedDivide")]),s._v("函数的类型为"),t("code",[s._v("(Double) => (Double) => (Double)")]),s._v("，表示将"),t("code",[s._v("divid")]),s._v("函数拆分为两个函数，每个函数各自带着一个参数，参数根据原本的顺讯决定。")]),s._v(" "),t("div",{staticClass:"language-scala line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-scala"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" halfOf"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Double")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Double")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" curriedDivide"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nhalfOf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" shouldEqual "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("柯里化跟部分应用函数的好处是能够根据原本的通用函数，创建出一个特定的函数而不用创建新的代码，使得代码较为简洁，避免冗余。")])])}),[],!1,null,null,null);a.default=e.exports}}]);