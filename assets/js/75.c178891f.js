(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{797:function(s,n,a){"use strict";a.r(n);var t=a(70),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-计算机结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-计算机结构"}},[s._v("#")]),s._v(" 1.计算机结构")]),s._v(" "),a("p",[s._v("近代计算机发展史中，人们基于图灵机 + 冯诺依曼体系创造出了近代计算机，接着再从汇编到 C 语言，成功诞生出了操作系统。")]),s._v(" "),a("p",[a("strong",[s._v("图灵机")]),s._v("是一个抽象的模型，假设有一条无限长的纸带，纸带上每个格子都可以记录信息，还有个读头可以来回移动，便可以根据格子里的信息做出相应操作。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/69/7d/6914497643dbb0aaefffc32b865dcf7d.png",alt:"img"}})]),s._v(" "),a("p",[a("strong",[s._v("冯诺依曼体系结构")]),s._v("则定义了现代计算的整体结构，实现了可存储编程的计算机，将图灵机翻译为冯诺依曼体系计算机则如下图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/bd/26/bde34df011c397yy42dc00fe6bd35226.jpg",alt:"img"}})]),s._v(" "),a("p",[s._v("数据的写入由"),a("strong",[s._v("数据总线")]),s._v("完成，格子的位置则对应"),a("strong",[s._v("地址总线")]),s._v("，读头的移动则由"),a("strong",[s._v("控制总线")]),s._v("完成。")]),s._v(" "),a("h2",{attrs:{id:"_2-程序的运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-程序的运行"}},[s._v("#")]),s._v(" 2. 程序的运行")]),s._v(" "),a("p",[s._v("一段 C 代码要执行需要经过以下步骤：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/f2/4a/f2b10135ed52436888a793327e4d5a4a.jpg",alt:"img"}})]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 源文件生成预处理文件")]),s._v("\ngcc -E HelloWorld.c -o HelloWorld.i\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 预处理文件生成编译文件")]),s._v("\ngcc -S HelloWorld.i -o HelloWorld.s\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译文件生成汇编文件：")]),s._v("\ngcc -c HelloWorld.s -o HelloWorld.o\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 汇编文件生成可执行文件")]),s._v("\ngcc HelloWorld.o -o HelloWorld\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 源文件生成可执行文件")]),s._v("\ngcc HelloWorld.c -o HelloWorld\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Linux系统运行可执行文件")]),s._v("\n./HelloWorld\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("代码示例：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stdio.h"')])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" argc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello World!\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("执行 "),a("code",[s._v("gcc HelloWorld.c -o HelloWorld")]),s._v(" 得到一个可执行文件，接着使用 "),a("code",[s._v("objdump -d HelloWorld")]),s._v(" 查看汇编代码及相关二进制数据：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/39/14/3991a042107b90612122b14596c65614.jpeg",alt:"img"}})]),s._v(" "),a("p",[s._v("第一列为地址，第二列表示十六进制指令（x86 为变长指令，在 arm 架构下编译则是定长的），第三列对应汇编代码，第四列则是相关注释。")]),s._v(" "),a("p",[s._v("将上述程序装载进计算机如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/5d/6e/5d4889e7bf20e670ee71cc9b6285c96e.jpg",alt:"img"}})]),s._v(" "),a("p",[a("strong",[s._v("Q：：call 和 ret 指令在逻辑上执行的操作是怎样的呢？")])]),s._v(" "),a("p",[s._v("A：call 和 ret 都涉及地址的跳转，不同的是 call 会将当前地址入栈保存并跳转到指定地址，ret 则是将地址出栈返回至原来跳转的地址。")]),s._v(" "),a("h2",{attrs:{id:"_2-实现一个最简单的操作系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-实现一个最简单的操作系统"}},[s._v("#")]),s._v(" 2. 实现一个最简单的操作系统")]),s._v(" "),a("p",[s._v("启动一个 OS 的流程如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/f2/bd/f2d31ab7144bf309761711efa9d6d4bd.jpg",alt:""}})]),s._v(" "),a("p",[s._v("BISO 固件是固化在主板芯片上的，PC 上电后第一条指令就是作用于 BIOS 固件中的，负责检测和初始化 CPU、内存及主板平台，接着加载引导设备（大概率是硬盘）中第一个扇区数据直到 0x7c00 处，接着执行 0x7c00 处的指令，如 GRUB 引导程序。")]),s._v(" "),a("p",[s._v("C 语言作为高级语言，无法直接操作硬件，因此需要先使用汇编处理好 C 语言所需的环境（如栈）：")]),s._v(" "),a("div",{staticClass:"language-assembly line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n;彭东 @ 2021.01.09\nMBT_HDR_FLAGS EQU 0x00010003\nMBT_HDR_MAGIC EQU 0x1BADB002 ;多引导协议头魔数\nMBT_HDR2_MAGIC EQU 0xe85250d6 ;第二版多引导协议头魔数\nglobal _start ;导出_start符号\nextern main ;导入外部的main函数符号\n[section .start.text] ;定义.start.text代码节\n[bits 32] ;汇编成32位代码\n_start:\njmp _entry\nALIGN 8\nmbt_hdr:\ndd MBT_HDR_MAGIC\ndd MBT_HDR_FLAGS\ndd -(MBT_HDR_MAGIC+MBT_HDR_FLAGS)\ndd mbt_hdr\ndd _start\ndd 0\ndd 0\ndd _entry\n;以上是GRUB所需要的头\nALIGN 8\nmbt2_hdr:\nDD MBT_HDR2_MAGIC\nDD 0\nDD mbt2_hdr_end - mbt2_hdr\nDD -(MBT_HDR2_MAGIC + 0 + (mbt2_hdr_end - mbt2_hdr))\nDW 2, 0\nDD 24\nDD mbt2_hdr\nDD _start\nDD 0\nDD 0\nDW 3, 0\nDD 12\nDD _entry\nDD 0\nDW 0, 0\nDD 8\nmbt2_hdr_end:\n;以上是GRUB2所需要的头\n;包含两个头是为了同时兼容GRUB、GRUB2\nALIGN 8\n_entry:\n;关中断\ncli\n;关不可屏蔽中断\nin al, 0x70\nor al, 0x80\nout 0x70,al\n;重新加载GDT\nlgdt [GDT_PTR]\njmp dword 0x8 :_32bits_mode\n_32bits_mode:\n;下面初始化C语言可能会用到的寄存器\nmov ax, 0x10\nmov ds, ax\nmov ss, ax\nmov es, ax\nmov fs, ax\nmov gs, ax\nxor eax,eax\nxor ebx,ebx\nxor ecx,ecx\nxor edx,edx\nxor edi,edi\nxor esi,esi\nxor ebp,ebp\nxor esp,esp\n;初始化栈，C语言需要栈才能工作\nmov esp,0x9000\n;调用C语言函数main\ncall main\n;让CPU停止执行指令\nhalt_step:\nhalt\njmp halt_step\nGDT_START:\nknull_dsc: dq 0\nkcode_dsc: dq 0x00cf9e000000ffff\nkdata_dsc: dq 0x00cf92000000ffff\nk16cd_dsc: dq 0x00009e000000ffff\nk16da_dsc: dq 0x000092000000ffff\nGDT_END:\nGDT_PTR:\nGDTLEN dw GDT_END-GDT_START-1\nGDTBASE dd GDT_START\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br")])]),a("ol",[a("li",[s._v("1~40 行用汇编定义的 GRUB 的多引导协议头。")]),s._v(" "),a("li",[s._v("44~52 行，关掉中断，设定 CPU 的工作模式。")]),s._v(" "),a("li",[s._v("54~73 行，初始化 CPU 的寄存器和 C 语言的运行环境。")]),s._v(" "),a("li",[s._v("78~87 行，GDT_START 开始的，是 CPU 工作模式所需要的数据。")])]),s._v(" "),a("p",[s._v("可以看到，汇编代码中调用了 main 函数，表示为一个符号，这是因为该 main 函数定义在其他文件中，最后分别由 nasm 和 gcc 编译成可链接模块，由 LD 链接器链接在一起，形成可执行文件：")]),s._v(" "),a("div",{staticClass:"language-C line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//彭东 @ 2021.01.09")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vgastr.h"')])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello OS!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("其中的 printf 不再是应用程序中的 printf 了，而是需要我们自己实现。")]),s._v(" "),a("p",[a("code",[s._v("vgastr.h")]),s._v(" 表示依赖某个文件，这个文件中定义了输出显示相关的功能，会按照一定标准映射到 0xb8000 地址开始的显卡内存中，实现显示功能：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/78/f5/782ef574b96084fa44a33ea1f83146f5.jpg",alt:"img"}})]),s._v(" "),a("p",[s._v("具体实现如下：")]),s._v(" "),a("div",{staticClass:"language-C line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//彭东 @ 2021.01.09")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("_strwrite")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" p_strdst "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xb8000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//指向显存的开始地址")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("p_strdst "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    p_strdst "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("_strwrite")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("之后借助 make 及其描述编译的 Maekfile 文件进行构建：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/cb/34/cbd634cd5256e372bcbebd4b95f21b34.jpg",alt:"img"}})]),s._v(" "),a("p",[s._v("得到 "),a("code",[s._v("Hello OS.bin")]),s._v(" 后，我们需要让 GRUB 能够找到它，GRUB 会在启动时加载 "),a("code",[s._v("/boot/grub/grub.cfg")]),s._v(" 文件，根据其中的内容执行相应操作，其中一部分就是启动项，添加 Hell OS 的启动项：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[s._v("menuentry "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HelloOS'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     insmod part_msdos #GRUB加载分区模块识别分区\n     insmod ext2 #GRUB加载ext文件系统模块识别ext文件系统\n     set root"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hd0,msdos4'")]),s._v(" #注意boot目录挂载的分区，这是我机器上的情况\n     multiboot2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("boot"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("HelloOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bin #GRUB以multiboot2协议加载HelloOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bin\n     boot #GRUB启动HelloOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bin\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("insmode part_msdos")]),s._v("：如果是 gpt 格式的磁盘，还需修改为 "),a("code",[s._v("insmod part_gpt")]),s._v("。")]),s._v(" "),a("li",[a("code",[s._v("set root='hd0,msdos4'")]),s._v("：如果是 gpt 格式的磁盘，还需修改为 "),a("code",[s._v("hd0,gpt2")]),s._v("。")])]),s._v(" "),a("p",[s._v("启动项主要是得配置对磁盘格式以及路径，grub 下第一块硬盘定义为 "),a("code",[s._v("hd0")]),s._v("，接着就是指定 "),a("code",[s._v("Hello OS.bin")]),s._v(" 所在分区，通常也是 boot 目录所在。")]),s._v(" "),a("blockquote",[a("p",[s._v("NOTE：实际上 boot 目录只是一个约定俗成的路径，操作系统镜像可以放在其他位置，只要加载路径设置正确即可。")])])])}),[],!1,null,null,null);n.default=e.exports}}]);