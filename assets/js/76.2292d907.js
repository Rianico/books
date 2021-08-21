(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{798:function(v,_,t){"use strict";t.r(_);var a=t(70),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"内核结构与设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内核结构与设计"}},[v._v("#")]),v._v(" 内核结构与设计")]),v._v(" "),t("p",[v._v("内核在用户与上层应用眼里，就像一个黑盒，但终归离不开对两类资源的支持：硬件资源与软件资源。")]),v._v(" "),t("p",[v._v("硬件资源主要如下：")]),v._v(" "),t("ol",[t("li",[v._v("总线，负责连接各种设备，是其他设备工作的基础")]),v._v(" "),t("li",[v._v("CPU，负责执行程序和处理数据运算")]),v._v(" "),t("li",[v._v("内存，负责存储运行时的代码和数据")]),v._v(" "),t("li",[v._v("硬盘，负责存储用户文件数据")]),v._v(" "),t("li",[v._v("网卡，负责多台计算机之间的通信")]),v._v(" "),t("li",[v._v("显卡，负责显示工作")]),v._v(" "),t("li",[v._v("各种 I/O 设备，如显示器、打印机、键盘鼠标等。")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/28/14/28cc064d767d792071a789a5b4e7d714.jpg",alt:"img"}})]),v._v(" "),t("p",[v._v("软件资源如下：")]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("管理 CPU")]),v._v("，内核把运行时的程序抽象为进程，对应"),t("strong",[v._v("进程管理")]),v._v("。")]),v._v(" "),t("li",[t("strong",[v._v("管理内存")]),v._v("，程序和数据都需要使用到内存，内核需要负责分配、释放内存。")]),v._v(" "),t("li",[t("strong",[v._v("管理硬盘")]),v._v("，内核需要提供文件系统的功能来存储、组织用户数据。")]),v._v(" "),t("li",[t("strong",[v._v("管理显卡")]),v._v("，负责显示信息。")]),v._v(" "),t("li",[t("strong",[v._v("管理网卡")]),v._v("，网卡要完成网络通讯，需要内核为各种通信协议提供网络协议栈，即网络组件。")]),v._v(" "),t("li",[t("strong",[v._v("管理各种 I/O 设备")]),v._v("，要使用外部各种 I/O 设备，需要在内核中抽象出 I/O 管理器。")])]),v._v(" "),t("p",[v._v("根据不同的硬件型号、种类，内核想要管理这些硬件就得编写对应的代码，这类代码称为"),t("strong",[v._v("驱动程序")]),v._v("。")]),v._v(" "),t("h2",{attrs:{id:"内核的几种结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内核的几种结构"}},[v._v("#")]),v._v(" 内核的几种结构")]),v._v(" "),t("h3",{attrs:{id:"宏内核"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#宏内核"}},[v._v("#")]),v._v(" 宏内核")]),v._v(" "),t("p",[v._v("宏内核是最早的一种内核结构，将各种代码经过编译后链接在一起，形成一个大的可执行程序。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/eb/6b/eb8e9487475f960dccda0fd939999b6b.jpg",alt:"img"}})]),v._v(" "),t("p",[v._v("优点：这种结构的优点是性能好，组件之间直接相互调用，没有多余的开销。")]),v._v(" "),t("p",[v._v("缺点：没有模块化，一旦其中一个组件出现问题，整个执行程序都可能会出问题。")]),v._v(" "),t("h3",{attrs:{id:"微内核"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微内核"}},[v._v("#")]),v._v(" 微内核")]),v._v(" "),t("p",[v._v("微内核与宏内核理念相反，提倡内核提供尽可能少的功能，如仅仅有进程调度、处理中断、内存空间映射、进程间通信等功能。")]),v._v(" "),t("p",[v._v("这种内核实际上不能完成什么功能的，需要其他组件提供支持，开发者将实际负责进程管理、内存管理等组件做成一个个特殊的服务进程，在微内核里借由这些服务进程完成相应功能。")]),v._v(" "),t("p",[v._v("微内核规定了进程之间的通讯机制——"),t("strong",[v._v("消息")]),v._v("，应用程序要请求相关服务，就像微内核发送一条消息，微内核再把这条消息发送给相关的服务进程，接着服务进程再完成相应功能：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/4b/64/4b190d617206379ee6cd77fcea231c64.jpg",alt:"img"}})]),v._v(" "),t("p",[v._v("微内核在极端情况下，只需要提供发送消息以及接收消息的 API 即可完成功能，但进程之间都需要通过微内核这样的来回交互切换也会带来较大的性能开销，导致系统性能大打折扣。")]),v._v(" "),t("p",[v._v("微内核的优点则是结构清晰，利于协作开发，系统有良好的移植性，服务进程可拔插。")]),v._v(" "),t("h2",{attrs:{id:"分离硬件的相关性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分离硬件的相关性"}},[v._v("#")]),v._v(" 分离硬件的相关性")]),v._v(" "),t("p",[v._v("分离硬件相关性，主要是要将操作硬件与处理硬件功能的差异分离开来，形成"),t("strong",[v._v("一个独立的软件抽象层")]),v._v("，对外提供接口，方便上层开发。")]),v._v(" "),t("p",[v._v("以进程管理为例，进程管理需要以下两种功能：")]),v._v(" "),t("ol",[t("li",[v._v("进程调度，结合一定的算法、优先级等从多个进程中选择一个要运行的程序。")]),v._v(" "),t("li",[v._v("进程切换，停止当前线程并保存其上下文，重新装载其他线程的上下文。")])]),v._v(" "),t("p",[v._v("在不同硬件平台上，选择进程的算法等是不会频繁变化的，变化的部分主要在进程切换，不同硬件的上下文保存方式是不同的。")]),v._v(" "),t("p",[v._v("因此，将与硬件相关的代码抽离到一个硬件平台相关层，对外提供接口，再在这个层上开发其他功能代码，这样在移植到其他平台时，只需要修改硬件平台相关层即可。")]),v._v(" "),t("p",[v._v("所以操作系统内核大致可以分为三层：")]),v._v(" "),t("ol",[t("li",[v._v("内核接口层，定义了一些系列接口，可以让上层调用，也就是常说的系统调用。")]),v._v(" "),t("li",[v._v("内核功能层，发起系统调用后，接口层也是向下调用内核功能层来完成实际功能的。")]),v._v(" "),t("li",[v._v("内核硬件层，主要包含于平台相关的代码，与硬件进行交互，内核功能层通过这一层来调用硬件。")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/6c/3c/6cf68bebe4f114f00f848d1d5679d33c.jpg",alt:"img"}})]),v._v(" "),t("p",[v._v("在工业界中，Linux 是宏内核，Mac 以及 Windows 都是混合内核。")])])}),[],!1,null,null,null);_.default=s.exports}}]);