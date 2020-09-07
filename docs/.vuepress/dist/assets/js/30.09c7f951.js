(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{758:function(s,a,e){"use strict";e.r(a);var t=e(70),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"kafka-常用优化项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kafka-常用优化项"}},[s._v("#")]),s._v(" Kafka 常用优化项")]),s._v(" "),e("h2",{attrs:{id:"常用优化项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用优化项"}},[s._v("#")]),s._v(" 常用优化项")]),s._v(" "),e("p",[s._v("机器配置：20台，256内存，40core，11个盘。 Consumer：峰值可输出1.8G/s（未达到极限）。 Producer：峰值可承受1.3G/s（未达到极限）。")]),s._v(" "),e("ol",[e("li",[s._v("调整Kafka进程的jvm内存。")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 调整KAFKA_HEAP_OPTS="-Xmx12G -Xms12G”的值。')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" bin/kafka-server-start.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",[e("li",[s._v("网络和ios操作线程配置优化：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# broker处理消息的最大线程数")]),s._v("\nnum.network.threads"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# broker处理磁盘IO的线程数")]),s._v("\nnum.io.threads"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("推荐配置：")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("num.network.threads")]),s._v("：主要处理网络io，读写缓冲区数据，基本没有io等待，属于CPU密集型，线程数并不用太多，避免无谓的上下文切换。")]),s._v(" "),e("li",[e("strong",[s._v("num.io.threads")]),s._v("：主要进行磁盘io操作，高峰期可能有些io等待，因此配置需要大些，可以根据Kafka目录磁盘数量调整为整数倍。")]),s._v(" "),e("li",[s._v("socket.request.max.bytes：表示server能够receive最大的数据大小，防止OOM，应当小于堆的大小。")]),s._v(" "),e("li",[s._v("log文件flush策略，log需要定期flush到磁盘。若topic数据量较小，可将flush间隔调小点：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每间隔1秒钟时间，刷数据到磁盘")]),s._v("\nlog.flush.interval.ms"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("若topic数据量较大，可以将"),e("code",[s._v("log.flush.interval.ms")]),s._v("调大到分钟级别。")]),s._v(" "),e("p",[s._v("另一种方式是将"),e("code",[s._v("log.flush.interval.ms")]),s._v("调到最大，不由Kafka来负责flush到磁盘，而是交由操作系统的脏页比例来控制：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 永久修改脏页比例")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当前系统默认10")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vm.dirty_background_ratio = 30"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/sysctl.conf\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当前系统默认20")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vm.dirty_ratio = 70"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/sysctl.conf\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 令其生效")]),s._v("\nsysctl -p /etc/sysctl.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("其中"),e("code",[s._v("vm.dirty_background_ratio")]),s._v("控制脏页到达了多少百分比内存的时候就会flush到磁盘，"),e("code",[s._v("vm.dirty_ratio")]),s._v("则是脏页到达了多少百分比内存时会进行阻塞，此时无法写入数据，直到操作系统将所有脏页flush到磁盘上。")]),s._v(" "),e("p",[s._v("5.日志设置策略")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志保留时长")]),s._v("\nlog.retention.hours"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("72")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 段文件配置")]),s._v("\nlog.segment.bytes"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1073741824")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("code",[s._v("log.segment.bytes")]),s._v("设置为1GB有利于快速回收磁盘空间，若太小则会导致文件数太多。")]),s._v(" "),e("ol",[e("li",[s._v("replication同步策略")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("num.replica.fetchers"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nreplica.fetch.min.bytes"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nreplica.fetch.max.bytes"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5242880")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("每个follow从leader拉取消息进行同步数据，follow同步性能由这几个参数决定，分别为:")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("num.replica.fetchers")]),s._v("：拉取线程数，适当配置多可以提高follower的I/O并发度，单位时间内leader持有更多请求，相应负载会增大，需要根据机器硬件资源做权衡，通常建议1个磁盘对应一个线程；")]),s._v(" "),e("li",[e("strong",[s._v("replica.fetch.min.bytes")]),s._v("：副本拉取最小字节数，一般无需更改，默认值即可；")]),s._v(" "),e("li",[e("strong",[s._v("replica.fetch.max.bytes")]),s._v("：副本拉取最大字节数，默认为1MB，这个值太小，推荐5M，根据业务情况调整；")]),s._v(" "),e("li",[e("strong",[s._v("replica.fetch.wait.max.ms")]),s._v("：副本拉取最大等待时间，决定了follower拉取频率，频率过高，leader会积压大量无效请求情况，无法进行数据同步，导致cpu飙升。配置时谨慎使用，建议默认值，无需配置。")]),s._v(" "),e("li",[s._v("调整leader重选举")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("leader.imbalance.check.interval.seconds"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3600")]),s._v("\nleader.imbalance.per.broker.percentage"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("在broker宕掉重新恢复后，会发生leader重选举，此时broker上相关的topic会有段时间不可用（NotLeaderFoundException）。由于每个partition恢复并重新选出leader的时间有所错开，因此会造成不可用时间的叠加，调大leader允许的不平衡的比例，或者重选举间隔都可以解决此问题，视集群恢复时间而定。")]),s._v(" "),e("ol",[e("li",[e("strong",[s._v("replica.lag.time.max.ms")]),s._v("： 只要follower副本每隔500ms都能发送FetchRequest请求给leader，那么该副本就不会被标记成dead从而被踢出ISR，根据具体情况设置。")])]),s._v(" "),e("p",[s._v("参考：")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.51cto.com/xujpxm/1934572",target:"_blank",rel:"noopener noreferrer"}},[s._v("Kafka性能调优"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzA5MTc0NTMwNQ==&mid=2650716681&idx=1&sn=11fe2c40a70a051fa334da705ec6b0dd&chksm=887da77fbf0a2e693827144e30c374826e10a58b705475b8a02c43ba2d2f58fb5b065767fa67&scene=0&xtrack=1&key=6ccb6546e311818e665bec3ba4d0ac44ae289be54dc17fe544f9a9359355aa67b12dcfe64f93be28d00fac850b1bb6a401c3621e865990982982d96e92bf686830a759706b35fc913e47f01b50f3e758&ascene=1&uin=MTU0NzEwNTU4NA%3D%3D&devicetype=Windows+10&version=62060739&lang=zh_CN&pass_ticket=fFouQJcAQm8qWALuX23b1aCZDlo07A4VmKqNzIaaLry4w666H%2BiFIkKPe5hL62Jx",target:"_blank",rel:"noopener noreferrer"}},[s._v("大规模使用 Apache Kafka 的20个最佳实践"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://stackoverflow.com/questions/21020347/how-can-i-send-large-messages-with-kafka-over-15mb",target:"_blank",rel:"noopener noreferrer"}},[s._v("How can I send large messages with Kafka (over 15MB)?"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);