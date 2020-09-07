(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{827:function(t,a,s){"use strict";s.r(a);var e=s(70),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linux零拷贝实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux零拷贝实现"}},[t._v("#")]),t._v(" Linux零拷贝实现")]),t._v(" "),s("h3",{attrs:{id:"_1-i-o中断与dma"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-i-o中断与dma"}},[t._v("#")]),t._v(" 1. I/O中断与DMA")]),t._v(" "),s("p",[t._v("CPU访问外部数据分为"),s("strong",[t._v("I/O 中断")]),t._v("方式与"),s("strong",[t._v("DMA方式（Direct Memory Access，直接内存访问）")]),t._v("。")]),t._v(" "),s("ul",[s("li",[t._v("I/O 中断：外部存储设备（e.g. 磁盘，键盘，鼠标）"),s("strong",[t._v("采用中断方式主动通知CPU")]),t._v("，CPU中断响应一次，拷贝数据到内核缓冲区，再拷贝到用户缓冲区，CPU全程参与。这样就会有"),s("strong",[t._v("上下文切换的开销以及CPU拷贝的时间")]),t._v("，频繁的中断会让人感觉操作系统响应缓慢。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/Rianico/Image/master/ARTS_Tips/IO%E4%B8%AD%E6%96%AD.png",alt:"I/O中断"}})]),t._v(" "),s("ul",[s("li",[t._v("DMA：CPU通知DMA控制器拷贝外部存储设备数据到内核缓冲区，完成后再通知CPU拷贝到用户缓冲区。也就是在I/O中断的基础上改由内存来执行外部存储器数据的I/O操作，这样就不需要CPU全程参与，减轻了CPU负担，且CPU读取内存比读取外部存储设备速度快。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/Rianico/Image/master/ARTS_Tips/DMA%E6%96%B9%E5%BC%8F.png",alt:"DMA方式"}})]),t._v(" "),s("h3",{attrs:{id:"_2-传统i-o方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-传统i-o方式"}},[t._v("#")]),t._v(" 2. 传统I/O方式")]),t._v(" "),s("p",[t._v("当前计算机传统的I/O访问方式都是通过DMA方式来进行，如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/Rianico/Image/master/ARTS_Tips/%E4%BC%A0%E7%BB%9FIO.png",alt:"传统I/O"}})]),t._v(" "),s("p",[t._v("传统的I/O方式在进行一次读写的时候共涉及了4次上下文切换，2次DMA拷贝以及2次CPU拷贝。")]),t._v(" "),s("p",[t._v("这个步骤流程如下：")]),t._v(" "),s("ol",[s("li",[t._v("用户进程向内核发起一次read()调用，上下文从用户态切换为内核态。（第一次上下文切换）")]),t._v(" "),s("li",[t._v("CPU通知DMA控制器从外部存储设备拷贝数据到内核缓冲区。（DMA Copy）")]),t._v(" "),s("li",[t._v("CPU将内核缓冲区的数据拷贝到用户缓冲区，上下文从内核态切换到用户态（CPU Copy，第二次上下文切换）")]),t._v(" "),s("li",[t._v("用户进程向内核发起一次write()调用，上下文从用户态切换到内核态。（第三次上下文切换）")]),t._v(" "),s("li",[t._v("CPU从用户缓冲区拷贝数据到内核空间的Socket缓冲区。（CPU Copy）")]),t._v(" "),s("li",[t._v("CPU通知DMA控制器将Socket缓冲区的数据拷贝到网卡进行传输，上下文从内核态切换为用户态并返回。（DMA Copy，第四次上下文切换）")])]),t._v(" "),s("h3",{attrs:{id:"_3-零拷贝"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-零拷贝"}},[t._v("#")]),t._v(" 3. 零拷贝")]),t._v(" "),s("p",[t._v("传统的I/O方式中，"),s("strong",[t._v("如果不需要操作数据内容，那么从内核空间拷贝到用户空间再拷贝回去是完全多余的")]),t._v("。为了应对这种场景，出现了零拷贝（ Zero-copy ）这一优化方式。")]),t._v(" "),s("p",[t._v("零拷贝有多重实现方式，这里只讨论sendfile相关方式（这也是Java NIO的FileChannel以及Kafka采用的方式）。")]),t._v(" "),s("h4",{attrs:{id:"_3-1-sendfile方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-sendfile方式"}},[t._v("#")]),t._v(" 3.1 sendfile方式")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/Rianico/Image/master/ARTS_Tips/sendfile.png",alt:"sendfile"}})]),t._v(" "),s("p",[t._v("如上图，基于sendfile方式总共会有2次上下文切换，2次DMA拷贝以及1次CPU拷贝，由于用户进程没有任何手段能够接触到数据，因此这种方式只适合单纯的数据传输。")]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendfile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("socket_fd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file_fd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("在Java的NIO方式中，"),s("code",[t._v("FileChannel")]),t._v("的"),s("code",[t._v("transferTo()")]),t._v("方法可以实现此过程：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transferTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WritableByteChannel")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("在Linux系统中，这个调用最终会被传递给sednfile()系统调用，从而实现零拷贝。")]),t._v(" "),s("h4",{attrs:{id:"_3-2-sendfile-dma-gather"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-sendfile-dma-gather"}},[t._v("#")]),t._v(" 3.2 sendfile+DMA gather")]),t._v(" "),s("p",[t._v("在前面的sednfile方式中，CPU仍需要参与一次拷贝，从Linux 2.4版本的内核开始，针对套接字缓冲区描述符做了相应调整，DMA自带了收集功能，可以将对应的数据描述信息（内存地址、地址偏移量）记录到相应的网络缓冲区（socket buffer），由DMA根据这些数据描述信息拷贝到网卡设备中，从而省下了最后一次CPU参与的拷贝工作。")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendfile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("socket_fd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file_fd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/Rianico/Image/master/ARTS_Tips/sednfile_DMA_Gather.png",alt:"sendfile + DMA gather"}})]),t._v(" "),s("h3",{attrs:{id:"_4-reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-reference"}},[t._v("#")]),t._v(" 4. Reference")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://juejin.im/post/5d84bd1f6fb9a06b2d780df7#heading-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入剖析Linux IO原理和几种零拷贝机制的实现"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.jianshu.com/p/2581342317ce",target:"_blank",rel:"noopener noreferrer"}},[t._v("蚂蚁二面，面试官问我零拷贝的实现原理，当场懵了…"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);