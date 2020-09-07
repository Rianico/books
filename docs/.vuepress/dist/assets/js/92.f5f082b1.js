(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{748:function(v,_,e){"use strict";e.r(_);var t=e(70),i=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"dns-解析原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns-解析原理"}},[v._v("#")]),v._v(" DNS 解析原理")]),v._v(" "),e("h2",{attrs:{id:"_1-dns-解析过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-dns-解析过程"}},[v._v("#")]),v._v(" 1. DNS 解析过程")]),v._v(" "),e("p",[v._v("当我们访问一个域名（e.g. www.google.com）的时候，实际上域名会被解析成一个 IP 地址，然后我们再去访问那个 IP 地址，这个过程称为"),e("strong",[v._v("域名解析")]),v._v("。")]),v._v(" "),e("p",[v._v("域名解析也分为多个阶段，如果该阶段无法解析，变前往下一个阶段：")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("浏览器缓存，浏览器通常会缓存域名以及 IP 的映射关系，此处优先级最高；")])]),v._v(" "),e("li",[e("p",[v._v("本机 Host 解析，根据本机 Host 配置进行映射；")]),v._v(" "),e("blockquote",[e("p",[v._v("DNS 劫持也是利用这个原理，通过非法修改本机 Host 映射，从而将用户正常访问的域名导向虚假 IP 地址。")])])]),v._v(" "),e("li",[e("p",[v._v("本地域名解析服务器，通常是离自己位置最近的域名解析服务器；")]),v._v(" "),e("blockquote",[e("p",[v._v("Windows 通过 ipconfig 可以查询到服务器地址；Linux 则是通过 cat /etc/resolv.conf 来查看。")])])]),v._v(" "),e("li",[e("p",[v._v("如果仍无法解析，则进入根域名解析，"),e("strong",[v._v("本地域名解析服务器")]),v._v("通过 UDP 协议向 "),e("strong",[v._v("13根")]),v._v(" （指 13 个根服务器）发起域名解析请求；")])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("根域名解析服务器")]),v._v("返回  "),e("code",[v._v("gTLD (Generic top-level domain)")]),v._v(" 给本地解析服务器，即该域名所属的"),e("strong",[v._v("顶级域")]),v._v("及其所在的服务器（e.g. "),e("code",[v._v(".com")]),v._v(" "),e("code",[v._v(".cn")]),v._v(", and etc）；")])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("本地域名解析服务器")]),v._v("得到顶级域名解析服务器地址后，向顶级域名解析服务器发起解析请求；")])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("顶级域名解析服务器")]),v._v("返回权限域名服务器信息（e.g. "),e("code",[v._v("google.com")]),v._v(" ,and etc.）给本地域名解析服务器；")])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("本地域名服务器")]),v._v("得到权限域名解析服务器信息后，向权限域名解析服务器发起解析请求；")])]),v._v(" "),e("li",[e("p",[v._v("权限域名服务器返回域名对应的 IP 地址给本地解析服务器；")])]),v._v(" "),e("li",[e("p",[v._v("本地解析服务器缓存相关信息，并返回给用户。")])])]),v._v(" "),e("p",[v._v("流程图如下：")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/Rianico/Image/master/ARTS_Tips/Snipaste_2020-07-26_14-39-58.png",alt:"DNS 解析流程"}})]),v._v(" "),e("h2",{attrs:{id:"_2-dns-轮询以及反向代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-dns-轮询以及反向代理"}},[v._v("#")]),v._v(" 2. DNS 轮询以及反向代理")]),v._v(" "),e("p",[v._v("随着数据的爆炸式增长以及摩尔定律的失效，很多场景已经无法单靠传统的单机应用解决，当前主流的解决方式之一就是水平扩展。")]),v._v(" "),e("p",[v._v("传统的单机部署如下：")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/Rianico/Image/master/ARTS_Tips/24a1c9812372981e89bbda7659b6c5bce9725242.png",alt:""}})]),v._v(" "),e("h3",{attrs:{id:"_2-1-dns-轮询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-dns-轮询"}},[v._v("#")]),v._v(" 2.1 DNS 轮询")]),v._v(" "),e("p",[v._v("DNS 轮询，在域名解析服务器对同个域名配置多个 IP ，这样一来，每次解析轮流返回不同的 IP：")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/Rianico/Image/master/ARTS_Tips/ded420a32a0b2309ccce75e8bb6b63e5d4599f62.png",alt:""}})]),v._v(" "),e("p",[v._v("优点：")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("零成本")]),v._v("：在域名解析服务器上多配几个 IP 即可；")]),v._v(" "),e("li",[e("strong",[v._v("部署简单")]),v._v("：多部署几个 server 即可。")]),v._v(" "),e("li",[e("strong",[v._v("负载均衡")]),v._v("：变成了多个 server，负载也是均衡的。")])]),v._v(" "),e("p",[v._v("缺点：")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("非高可用")]),v._v("：域名解析服务器只负责解析域名，并不保证底下的 server 可用。")]),v._v(" "),e("li",[e("strong",[v._v("扩容非实时")]),v._v("：DNS 解析有一个生命周期。")]),v._v(" "),e("li",[e("strong",[v._v("暴露了太多外网 IP")]),v._v("。")])]),v._v(" "),e("h3",{attrs:{id:"_2-2-单点-nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-单点-nginx"}},[v._v("#")]),v._v(" 2.2 单点 Nginx")]),v._v(" "),e("p",[v._v("反向代理，目前基本都是使用 nginx 来实现，一个 nginx 下可以部署多个 server，而对外只需要暴露一个 nginx 服务器即可：")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/Rianico/Image/master/ARTS_Tips/f269d7edb0c677e2ebefa712dfb254fd6097e131.png",alt:""}})]),v._v(" "),e("p",[v._v("优点：")]),v._v(" "),e("ul",[e("li",[v._v("对底下的 server 无侵入；")]),v._v(" "),e("li",[e("strong",[v._v("负载均衡")]),v._v("：通过 nginx 保证。")]),v._v(" "),e("li",[v._v("只暴露必要的 IP；")]),v._v(" "),e("li",[e("strong",[v._v("扩容实时")]),v._v("：nginx 内部可控，可随时扩容 server；")]),v._v(" "),e("li",[e("strong",[v._v("保障高可用")]),v._v("：nginx 能够检测 server 的可用状态并在故障时将其流量转移到其他 server。")])]),v._v(" "),e("p",[v._v("缺点：")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("时延增加 + 架构复杂")]),v._v("：中间多了一层代理层；")]),v._v(" "),e("li",[v._v("nginx 成了单点，存在单点故障，存在单台性能上线。")])]),v._v(" "),e("h3",{attrs:{id:"_2-3-nginx-keepalived"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-nginx-keepalived"}},[v._v("#")]),v._v(" 2.3 Nginx + Keepalived")]),v._v(" "),e("p",[v._v("为了解决 nginx 的单点高可用问题，可以同过 "),e("code",[v._v("keepalived + nginx")]),v._v(" 的架构来解决。")]),v._v(" "),e("p",[v._v("Keepalived 是一种高性能的服务器高可用或热备解决方案，以 VRRP 协议为实现基础，用 VRRP 协议来实现高可用性(HA)。")]),v._v(" "),e("blockquote",[e("p",[v._v("VRRP 协议使用多播数据来传输 VRRP 数据，VRRP 数据使用特殊的虚拟源 MAC 地址发送数据而不是自身网卡的 MAC 地址，VRRP 运行时只有 MASTER 路由器定时发送 VRRP 通告信息， 表示 MASTER 工作正常以及虚拟路由器 IP(组)，BACKUP 只接收 VRRP 数据，不发送数据，如果一定时间内没有接收到 MASTER 的通告信息，各 BACKUP 将宣告自己成为 MASTER， 发送通告信息，重新进行 MASTER 选举状态。")])]),v._v(" "),e("p",[v._v("Keepalived 将多台 nginx 虚拟成一个服务，对外提供一个"),e("strong",[v._v("虚拟 IP")]),v._v("，持有这个对外 IP 的路由器会成为 MASTER，提供实际的服务，其它的则是 BACKUP 状态，在 MASTER 故障时尝试接管成为 MASTER。")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/Rianico/Image/master/ARTS_Tips/7d22b40f3306dacf13555673298593e7b4ea319c.png",alt:""}})]),v._v(" "),e("p",[v._v("优点：")]),v._v(" "),e("ul",[e("li",[v._v("解决了高可用问题。")])]),v._v(" "),e("p",[v._v("缺点：")]),v._v(" "),e("ul",[e("li",[v._v("资源利用率只有 50%；")]),v._v(" "),e("li",[v._v("nginx 提供服务时仍是单点，存在瓶颈。")])]),v._v(" "),e("h3",{attrs:{id:"_2-4-lvs-keepalived-nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-lvs-keepalived-nginx"}},[v._v("#")]),v._v(" 2.4 LVS + Keepalived + Nginx")]),v._v(" "),e("p",[v._v("LVS（Linux Virtual Server ），Linux 虚拟服务器，属于 Linux 标准内核的一部分，性能极高，具有负载均衡的功能。")]),v._v(" "),e("p",[v._v("通过 "),e("code",[v._v("LVS + nginx")]),v._v(" 实现 nginx  的负载均衡及可扩展性，而 "),e("code",[v._v("Keepalived + LVS")]),v._v(" 则用于避免 LVS 的单点故障问题：")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/Rianico/Image/master/ARTS_Tips/8d0f9793fe5867d9b9860435593f3149ec906b38.png",alt:""}})]),v._v(" "),e("p",[v._v("至此，基本 99.9999% 的公司都能够满足其要求了。")]),v._v(" "),e("h3",{attrs:{id:"_2-5-dns-轮询-lvs-keepalived-nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-dns-轮询-lvs-keepalived-nginx"}},[v._v("#")]),v._v(" 2.5 DNS 轮询 + LVS + Keepalived + Nginx")]),v._v(" "),e("p",[v._v("如果 "),e("code",[v._v("LVS + Keepalived + Nginx")]),v._v(" 中的  "),e("code",[v._v("LVS + nginx")]),v._v("  仍存在瓶颈，那么可以结合 DNS 轮询来解决：")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/Rianico/Image/master/ARTS_Tips/68c92bbe7f850d799826cf48586510e2ebf5e862.png",alt:""}})]),v._v(" "),e("h3",{attrs:{id:"_2-6-总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-总结"}},[v._v("#")]),v._v(" 2.6 总结")]),v._v(" "),e("ol",[e("li",[v._v("架构通常需要考虑：高可用性、可扩展性、反向代理、负载均衡这几个问题；")]),v._v(" "),e("li",[v._v("Nginx、keepalived、LVS（OS 层面）、f5（硬件层面）可以很好的解决高可用、扩展性、反向代理、负载均衡的问题；")]),v._v(" "),e("li",[v._v("水平扩展时解决可扩展性问题的根本方案，DNS 轮询与 Nginx、LVS、f5 并不冲突，而是属于互补关系。")])]),v._v(" "),e("h2",{attrs:{id:"_3-思考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-思考"}},[v._v("#")]),v._v(" 3. 思考")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("为什么只有 13 台 根服务器？")]),v._v(" "),e("p",[v._v("根域名服务器使用 UDP 协议传输 DNS 消息，而 UDP 协议传输的消息最大长度被限制在 512 字节。IP 数据报文理论最大长度为 65535字节（包含头部和数据），但是以前的机器并无法处理如此大的数据报文，因此规定了"),e("strong",[v._v("每台主机必须准备好接收总长度最多为576字节（即最小 MTU）的IP数据报")]),v._v("。")]),v._v(" "),e("p",[v._v("选择576是为了允许使用合理的数据块大小传输IP头部以外的信息，常用的 IP 头部是 20字节，最大长度为 60 字节，保留了部分空间给其他高层协议头部。")]),v._v(" "),e("p",[v._v("DNS 响应报文的计算方式：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("DNS头部是固定的12字节。")])]),v._v(" "),e("li",[e("p",[v._v("问题区段是1字节的根域0 + 2字节查询类型 + 2字节查询类一共是5字节。")])]),v._v(" "),e("li",[e("p",[v._v("回答区段的每个NS记录都会在额外信息区段添加对应的A记录。NS记录为1字节根域0 + 2字节类型 + 2字节类 + 4字节TTL + 2字节资源数据长度 + 不定长度的根服务器域名，一共是11字节固定部分 + 不定长度数据。")])]),v._v(" "),e("li",[e("p",[v._v("A记录是2字节的压缩标签（指向NS记录中的根服务器域名） + 10字节资源记录固定部分（类型、类、TTL、资源数据长度）+ 4字节IPv4地址，一共是16字节。")])])]),v._v(" "),e("p",[v._v("因此 12 + 5 + 11n + 16n + 所有根服务器域名的数据标签的长度总和，得到结果为 DNS 响应报文总长度，n 为根服务器数量。")])]),v._v(" "),e("li",[e("p",[v._v("为什么 DNS 解析请求使用 UDP 协议？")]),v._v(" "),e("p",[v._v("为了让响应时间尽可能小，使用 UDP 是一种较为合适的方法（虽然不是可靠传输）。而域名解析服务器之间的交流记录则是使用 TCP 保障可靠传输。")])])]),v._v(" "),e("h2",{attrs:{id:"_4-参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-参考"}},[v._v("#")]),v._v(" 4. 参考")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://yq.aliyun.com/articles/674437",target:"_blank",rel:"noopener noreferrer"}},[v._v("“反向代理层”绝不能替代“DNS轮询”！"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"https://docs.nginx.com/nginx/admin-guide/high-availability/ha-keepalived/",target:"_blank",rel:"noopener noreferrer"}},[v._v("High Availability Support for NGINX Plus in On-Premises Deployments"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/107492241",target:"_blank",rel:"noopener noreferrer"}},[v._v("根域名服务器只有13台？"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"%5Bhttps://www.zhihu.com/question/310145373#:~:text=%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90%E6%97%B6%E4%BD%BF%E7%94%A8UDP,%E4%BB%85%E6%94%AF%E6%8C%81UDP%E6%9F%A5%E8%AF%A2%E5%8C%85%E3%80%82%5D(https://www.zhihu.com/question/310145373#:~:text=%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90%E6%97%B6%E4%BD%BF%E7%94%A8UDP,%E4%BB%85%E6%94%AF%E6%8C%81UDP%E6%9F%A5%E8%AF%A2%E5%8C%85%E3%80%82)"}},[v._v("为什么DNS使用UDP而不是TCP？")])])])])}),[],!1,null,null,null);_.default=i.exports}}]);