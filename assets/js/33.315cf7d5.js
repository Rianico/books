(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{758:function(s,e,a){"use strict";a.r(e);var t=a(70),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"iperf3网络压测工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iperf3网络压测工具"}},[s._v("#")]),s._v(" iPerf3网络压测工具")]),s._v(" "),a("h3",{attrs:{id:"_1-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[s._v("#")]),s._v(" 1. 介绍")]),s._v(" "),a("p",[s._v("iPerf3 是一个可以用于网络带宽测试的工具，支持多种参数设置，如时间、buffer、网络协议（TCP，UDP 等）。")]),s._v(" "),a("h3",{attrs:{id:"_2-下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载"}},[s._v("#")]),s._v(" 2. 下载")]),s._v(" "),a("p",[s._v("在该页面选择适合自己系统的二进制包：https://iperf.fr/iperf-download.php#archlinux 。")]),s._v(" "),a("p",[s._v("Linux 下载下来后是一个 xz 压缩包，解压命令如下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -Jxvf iperf3-3.1.3-1-x86_64.pkg.tar.xz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或者通过 yum 安装：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" iPerf3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用"}},[s._v("#")]),s._v(" 3. 使用")]),s._v(" "),a("p",[s._v("iPerf3 的运行方式为 server-client 模式，起两个进程，一端为 server，一端为 client，两边进行传输，从而测试出网络带宽。")]),s._v(" "),a("p",[s._v("假设一台机器 host 为 server.local，启动一个服务端：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("iperf3 -s -D -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5201")]),s._v(" -f M\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("各参数解释如下：")]),s._v(" "),a("ul",[a("li",[s._v("-s：以 server 模式运行")]),s._v(" "),a("li",[s._v("-D：以守护进程方式运行")]),s._v(" "),a("li",[s._v("-p：指定监听的的端口，默认 5201")]),s._v(" "),a("li",[s._v("-f：指定速率的输出格式，有 "),a("code",[s._v("kmKM")]),s._v(" 四种可选，大小写的区别为 Byte 以及 bit")])]),s._v(" "),a("p",[s._v("接下来启动一个客户端：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("iperf3 -c server.local -f m -P "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" -Z -4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("各参数解释如下：")]),s._v(" "),a("ul",[a("li",[s._v("-c：以客户端模式运行，并指定服务端的 host")]),s._v(" "),a("li",[s._v("-f：指定速率的输出格式，有 "),a("code",[s._v("kmKM")]),s._v(" 四种可选，大小写的区别为 Byte 以及 bit")]),s._v(" "),a("li",[s._v("-P：指定并发的线程数，默认 1")]),s._v(" "),a("li",[s._v("-4：使用 iPv4")]),s._v(" "),a("li",[s._v("-Z：零拷贝模式，实测中零拷贝使用多线程会有线程切换的开销，反而导致速率降低")])]),s._v(" "),a("p",[s._v("更详细的设置参数可以查看"),a("a",{attrs:{href:"https://iperf.fr/iperf-doc.php#3doc",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1),s._v(" 。")]),s._v(" "),a("p",[s._v("在本地启动一个客户端执行上述，结果如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Connecting to host server.local, port 5201\n[  4] local 192.168.1.167 port 44178 connected to 192.168.1.167 port 5201\n[ ID] Interval           Transfer     Bandwidth       Retr  Cwnd\n[  4]   0.00-1.00   sec  6.16 GBytes  6304 MBytes/sec    0   1.25 MBytes       \n...             \n[  4]   9.00-10.00  sec  6.56 GBytes  6717 MBytes/sec    0   1.25 MBytes       \n- - - - - - - - - - - - - - - - - - - - - - - - -\n[ ID] Interval           Transfer     Bandwidth       Retr\n[  4]   0.00-10.00  sec  65.3 GBytes  6683 MBytes/sec    0             sender\n[  4]   0.00-10.00  sec  65.3 GBytes  6682 MBytes/sec                  receiver\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);