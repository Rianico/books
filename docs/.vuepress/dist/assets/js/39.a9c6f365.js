(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{733:function(s,t,a){"use strict";a.r(t);var e=a(70),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"hdfs-使用-fsck-校验文件完整性及-recoverlease-修复文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hdfs-使用-fsck-校验文件完整性及-recoverlease-修复文件"}},[s._v("#")]),s._v(" HDFS 使用 fsck 校验文件完整性及 recoverLease 修复文件")]),s._v(" "),a("p",[s._v("hdfs文件系统可以使用fsck来check(校验)文件完整性，语法格式："),a("code",[s._v("hdfs fsck [file] [options]")])]),s._v(" "),a("p",[s._v("以下option，由上往下需要相继结合使用：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[s._v("options")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("comment")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("-files")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("校验时展示文件信息")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("-blocks")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("展示文件的块信息，通常与-files结合使用")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("-locations")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("展示文件块所在的datanode地址")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("-racks")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("展示文件机架信息")])])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查某文件是否完整")]),s._v("\nhdfs "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fsck")]),s._v(" /zxk/sample.jar -file -blocks -locations -racks\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查某文件夹下文件是否完整")]),s._v("\nhdfs "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fsck")]),s._v(" /zxk\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("示例输出：")]),s._v(" "),a("div",{staticClass:"language-vim line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vim"}},[a("code",[s._v("Connecting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" namenode via http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50070")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("fsck"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("ugi"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hdfs&"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("files")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("&blocks"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("&racks"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("&"),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("2Fdata"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("2Fsw"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("2Fhttp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("2FCZ"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("2F20190805"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("2F0000"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("2Fpart"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nFSCK started by hdfs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("SIMPLE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" from "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node1for "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("path")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("zxk"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sample"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("jar at Fri Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("47")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("39")]),s._v(" CST "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("zxk"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sample"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("jar "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("185606618")]),s._v(" bytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("block")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  OK\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" BP"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1492896228")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1553135500323")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("blk_3942942813_2869317147 len"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("185606618")]),s._v(" Live_repl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("c")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("S9312"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50010")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("c")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("S9312"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50010")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nStatus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" HEALTHY\n Total size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("185606618")]),s._v(" B\n Total dirs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n Total "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("files")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n Total symlinks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n Total blocks "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("validated"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("avg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" block size "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("185606618")]),s._v(" B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n Minimally replicated blocks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n Over"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("replicated blocks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n Under"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("replicated blocks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n Mis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("replicated blocks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n Default replication factor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n Average block replication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),s._v("\n Corrupt blocks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n Missing replicas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n Number of data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("nodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("104")]),s._v("\n Number of racks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nFSCK ended at Fri Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("47")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("39")]),s._v(" CST "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" milliseconds\n\n\nThe filesystem under "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("path")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/zxk/sample.jar'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" HEALTHY\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[s._v("假如文件有异常的话，我们可以观察到两种信息：")]),s._v(" "),a("blockquote",[a("p",[s._v("Under replicated")]),s._v(" "),a("p",[s._v("CORRUPT blockpool")])]),s._v(" "),a("p",[a("strong",[s._v("修复Under replicated：")]),s._v(" 这种情况意味着还有其他replication存活，可使用"),a("code",[s._v("recoverLease")]),s._v("命令进行恢复：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 寻找under replicated的文件")]),s._v("\nhdfs "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fsck")]),s._v(" / "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"under replicated"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("}'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/://g'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" under_replicated.flst\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("接下来使用recoverLeae命令修复：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# [-path path]    HDFS path for which to recover the lease.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# [-retries num-retries]    Number of times the client will retry calling recoverLease. The default number of retries is 1.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" under_replicated.flst"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Fixing '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$f")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  hdfs debug recoverLease -path "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("修复corrupt blocks：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找出损坏的文件并删除")]),s._v("\n hdfs "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fsck")]),s._v(" / "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("egrep")]),s._v(" -v "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^\\.+$'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v eplica"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{system("sudo -u hdfs hadoop fs -rm -r "'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('" 2>&1")}\'')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("****")]),s._v(" "),a("p",[a("strong",[s._v("参考")]),s._v("：")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://stackoverflow.com/questions/19205057/how-to-fix-corrupt-hdfs-files",target:"_blank",rel:"noopener noreferrer"}},[s._v("How to fix corrupt HDFS FIles"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"http://fibrevillage.com/storage/658-how-to-use-hdfs-fsck-command-to-identify-corrupted-files",target:"_blank",rel:"noopener noreferrer"}},[s._v("How to use hdfs fsck command to identify corrupted files?"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);