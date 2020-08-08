(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{758:function(t,a,_){"use strict";_.r(a);var v=_(70),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_13-哈希算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_13-哈希算法"}},[t._v("#")]),t._v(" 13 | 哈希算法")]),t._v(" "),_("p",[t._v("哈希（Hash）算法，也叫散列算法，能将任意长度的二进制值"),_("strong",[t._v("映射")]),t._v("为固定长度的二进制值。")]),t._v(" "),_("p",[t._v("哈希算法有以下几个特点：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("从哈希算法不能反向推导出原始数据，因此也叫单向哈希算法")]),t._v("。")]),t._v(" "),_("li",[t._v("对输入数据敏感，只改变一个bit位也会导致映射后的值与原来大不相同。")]),t._v(" "),_("li",[_("strong",[t._v("散列冲突的概率要很小。")])]),t._v(" "),_("li",[t._v("哈希算法的执行效率要尽量高效，针对长文本也能快速计算出哈希值。")])]),t._v(" "),_("p",[t._v("哈希算法的应用场景非常多，最常见的有："),_("strong",[t._v("安全加密、唯一标示、数据校验、散列函数、负载均衡、数据分片、分布式存储")]),t._v("。")]),t._v(" "),_("h2",{attrs:{id:"_1-安全加密"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-安全加密"}},[t._v("#")]),t._v(" 1. 安全加密")]),t._v(" "),_("p",[t._v("安全加密通常用于保存密码，常见的算法有"),_("strong",[t._v("MD5")]),t._v("（MD5 Message-Digest Algorithm，MD5 消息摘要算法）、 "),_("strong",[t._v("SHA")]),t._v("（Secure Hash Algorithm，安全散列算法）、"),_("strong",[t._v("DES")]),t._v("（Data Encryption Standard，数据加密标准）、"),_("strong",[t._v("AES")]),t._v("（Advanced Encryption Standard，高级加密标准）。")]),t._v(" "),_("p",[t._v("当我们有一些数据（e.g. 密码）需要加密，我们的目的就是防止原始数据泄漏，而哈希正好无法反向推导出原始数据，同时散列冲突的概率也很小。")]),t._v(" "),_("p",[t._v("哈希算法无法做到完全没有碰撞，这个可以通过抽屉原理论证，如果有 10 个鸽巢，有 11 只鸽子，那肯定有 1 个鸽巢中的鸽子数量多于 1 个，换句话说就是，肯定有 2 只鸽子在 1 个鸽巢内。假设我们转化后是一个128位的哈希值，那么这个哈希值最多可以容纳 "),_("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[_("svg",{staticStyle:{"vertical-align":"0"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"3.644ex",height:"1.887ex",viewBox:"0 -833.9 1610.7 833.9"}},[_("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[_("g",{attrs:{"data-mml-node":"math"}},[_("g",{attrs:{"data-mml-node":"msup"}},[_("g",{attrs:{"data-mml-node":"mn"}},[_("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}})]),_("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(500, 363) scale(0.707)"}},[_("g",{attrs:{"data-mml-node":"mn"}},[_("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}}),_("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",transform:"translate(500, 0)"}}),_("path",{attrs:{"data-c":"38",d:"M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z",transform:"translate(1000, 0)"}})])])])])])])]),t._v(" 种数据，但我们的数据组合类型是无穷大的，总会有不同的数据拥有相同的哈希值。")],1),t._v(" "),_("p",[t._v("即便哈希算法存在散列冲突的情况，但是因为哈希值的范围很大，冲突的概率极低，所以相对来说还是很难破解的。")]),t._v(" "),_("p",[t._v("对于一些简单的密码（e.g. 123456），很可能被黑客通过彩虹表进行撞库从而反向推导出原始数据，这种现象与哈希不可逆无关，只不是过因为原始数据过于简单。为了防止这种情况，通常我们可以通过给原始数据加盐的方式（e.g. 在密码首尾穿插随机值），从而防范撞库成功的几率。")]),t._v(" "),_("p",[t._v("其实世界上没有绝对安全的加密，安"),_("strong",[t._v("全和攻击是一种博弈关系，不存在绝对的安全。所有的安全措施，只是增加攻击的成本而已")]),t._v("。当攻击成本大于收益的时候，一般也不会有人会去进行攻击。")]),t._v(" "),_("h2",{attrs:{id:"_2-唯一标示"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-唯一标示"}},[t._v("#")]),t._v(" 2. 唯一标示")]),t._v(" "),_("p",[t._v("如果要在海量的图库中，搜索一张图是否存在，我们不能通过一张图片的名字来确定图片是否存在，因为可能存在名字相同但内容不同的图片。而对图片的二进制数据进行逐字节比较，由于会存在很大的图片，又会十分耗时。")]),t._v(" "),_("p",[t._v("解决方法是可以给每一个图片取一个唯一标识，或者说信息摘要。比如，我们可以从图片的二进制码串开头取 100 个字节，从中间取 100 个字节，从最后再取 100 个字节，然后将这 300 个字节放到一块，通过哈希算法（比如 MD5），得到一个哈希字符串，用它作为图片的唯一标识。通过这个唯一标识来判定图片是否在图库中，这样就可以减少很多工作量。")]),t._v(" "),_("h2",{attrs:{id:"_3-数据校验"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据校验"}},[t._v("#")]),t._v(" 3. 数据校验")]),t._v(" "),_("p",[t._v("网络传输是通过将一个大文件切分成若干个小文件进行传输的，但是网络传输是不安全的，文件可能中途被篡改过，也可能因为网络错误导致文件损坏，我们需要一种手段能够对文件进行校验。")]),t._v(" "),_("p",[t._v("通过哈希算法，可以对多个文件块分别取哈希值，并且保存在种子文件中。"),_("strong",[t._v("哈希算法有一个特点，对数据很敏感")]),t._v("。只要文件块的内容有一丁点儿的改变，最后计算出的哈希值就会完全不同。所以，当文件块下载完成之后，可以通过相同的哈希算法，对下载好的文件块逐一求哈希值，然后跟种子文件中保存的哈希值比对。如果不同，说明这个文件块不完整或者被篡改了，需要再重新从其他宿主机器上下载这个文件块。")]),t._v(" "),_("h2",{attrs:{id:"_4-散列函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-散列函数"}},[t._v("#")]),t._v(" 4. 散列函数")]),t._v(" "),_("p",[t._v("散列函数是设计一个散列表的关键。它直接决定了散列冲突的概率和散列表的性能。不过，相对哈希算法的其他应用，散列函数对于散列算法冲突的要求要低很多。即便出现个别散列冲突，只要不是过于严重，我们都可以通过开放寻址法或者链表法解决。并且，散列函数对于散列算法计算得到的值，是否能反向解密也并不关心。")]),t._v(" "),_("p",[t._v("散列函数中用到的散列算法，更加关注"),_("strong",[t._v("散列后的值是否能平均分布")]),t._v("，也就是，一组数据是否能均匀地散列在各个槽中。除此之外，散列函数执行的快慢，也会影响散列表的性能，所以，散列函数用的散列算法一般都比较简单，比较追求效率。")]),t._v(" "),_("h2",{attrs:{id:"_5-负载均衡"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-负载均衡"}},[t._v("#")]),t._v(" 5. 负载均衡")]),t._v(" "),_("p",[t._v("负载均衡算法有很多，比如轮询、随机、加权轮询等。那如何才能实现一个"),_("strong",[t._v("会话粘滞")]),t._v("（session sticky）的负载均衡算法呢？也就是说在同个客户端或会话中的所有请求都路由到同一个服务器上。")]),t._v(" "),_("p",[t._v("假设维护一张 "),_("code",[t._v("客户端 IP / 会话 ID -> 服务器")]),t._v(" 的映射关系，可以实现上述目的，但是一旦请求多了，需要维护的表也会增大，同时客户端下线、上线，服务器扩容、缩容都会导致映射失效，这样维护映射表的成本就会很大。")]),t._v(" "),_("p",[t._v("最简单的是"),_("strong",[t._v("通过哈希算法，对客户端 IP 地址或者会话 ID 计算哈希值，将取得的哈希值与服务器列表的大小进行取模运算，最终得到的值就是应该被路由到的服务器编号")]),t._v("，这样一来，同个客户端 IP 和会话 ID 都可以打到同个服务器上。")]),t._v(" "),_("h2",{attrs:{id:"_6-数据分片"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-数据分片"}},[t._v("#")]),t._v(" 6. 数据分片")]),t._v(" "),_("p",[t._v("哈希算法还有一个重要的用户就是"),_("strong",[t._v("数据分片")]),t._v("。")]),t._v(" "),_("h3",{attrs:{id:"_6-1-如何统计-搜索关键词-出现的次数？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-如何统计-搜索关键词-出现的次数？"}},[t._v("#")]),t._v(" 6.1 如何统计“搜索关键词”出现的次数？")]),t._v(" "),_("p",[t._v("假如我们有 1T 的日志文件，现在需要对日志文件出现过的单词进行计数。这个问题的难点在于单台机器往往没有那么大的内存，并且用一台机器进行计算耗费的时间也会很慢。")]),t._v(" "),_("p",[t._v("我们可以通过遍历这个日志文件，对每个单词求哈希值，假设有 n 台机器，可以对 n 进行求余，这样一来相同的单词就会打到同一台机器上，从而能够进行计数，最后再合并结果。这也是 MapReduce 的重要思想。")]),t._v(" "),_("h3",{attrs:{id:"_6-2-如何快速判断图片是否在图库中？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-如何快速判断图片是否在图库中？"}},[t._v("#")]),t._v(" 6.2 如何快速判断图片是否在图库中？")]),t._v(" "),_("p",[t._v("前面有举过一个图片唯一标示的例子，假设现在我们的图库中有 1 亿张图片，在单台机器上为 1 亿张图片构建散列表是不现实的。")]),t._v(" "),_("p",[t._v("散列表中每个数据单元包含两个信息，哈希值和图片文件的路径。假设我们通过 MD5 来计算哈希值，那长度就是 128 比特，也就是 16 字节。文件路径长度的上限是 256 字节，我们可以假设平均长度是 128 字节。如果我们用链表法来解决冲突，那还需要存储指针，指针只占用 8 字节。所以，散列表中每个数据单元就占用 152 字节（这里只是估算，并不准确）。假设装载因子为0.75，那么 1 亿张图片共需要约 20G 内存，这个往往超出了单台机器的内存上限。")]),t._v(" "),_("p",[t._v("因此我们可以同样的取图片的哈希值，通过对 n 求余存储在 n 台机器上，一旦需要搜索图片，同样拿图片的哈希值对 n 进行求余即可快速定位到某台机器上。")]),t._v(" "),_("h2",{attrs:{id:"_7-分布式存储"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-分布式存储"}},[t._v("#")]),t._v(" 7. 分布式存储")]),t._v(" "),_("p",[t._v("我们通常使用缓存来尽可能的减少数据直接到达数据库，在当前海量的数据下，很多时候也需要用到多台机器进行分布式缓存。")]),t._v(" "),_("p",[t._v("可以借用前面数据分片的思想，即通过哈希算法对数据取哈希值，然后对机器个数取模，这个最终值就是应该存储的缓存机器编号。")]),t._v(" "),_("p",[t._v("但是一旦新加入机器，就会导致缓存的数据需要重新计算哈希值，并迁移到新的机器上，这段期间，一旦有查询请求进来，就没法查到缓存数据从而导致缓存穿透，直接去请求数据库。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static001.geekbang.org/resource/image/13/7c/138b060ee522cd2eae83c0c31a16bc7c.jpg",alt:""}})]),t._v(" "),_("p",[t._v("这时候，我们可以采用"),_("strong",[t._v("一致性哈希算法")]),t._v("来解决这个问题。假设我们有 n 台机器，数据的哈希值的范围是 [0, MAX]，我们将哈希值分为 m（m 远大于 n）段，每台机器负责其中一段，当有新的机器假如时，只需要假如其中某段，这样就只需要迁移某一范围内的数据即可，大大减少了需要迁移的数据量。")]),t._v(" "),_("p",[t._v("关于一致性哈希算法的更具体介绍，可以参考 "),_("a",{attrs:{href:"https://www.jianshu.com/p/570dc8913c20",target:"_blank",rel:"noopener noreferrer"}},[t._v("漫画算法：什么是一致性哈希？"),_("OutboundLink")],1),t._v(" 。")]),t._v(" "),_("h2",{attrs:{id:"思考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#思考"}},[t._v("#")]),t._v(" 思考")]),t._v(" "),_("p",[_("strong",[t._v("Q：现在，区块链是一个很火的领域，它被很多人神秘化，不过其底层的实现原理并不复杂。其中，哈希算法就是它的一个非常重要的理论基础。你能讲一讲区块链使用的是哪种哈希算法吗？是为了解决什么问题而使用的呢？")])]),t._v(" "),_("blockquote",[_("p",[t._v("区块链是由一块块区块组成的，每个节点都有个头部，区块头存储着上个节点以及自身区块体的哈希值，因为这种链式关系和哈希值的唯一性，只要区块链上任意一个区块被修改过，后面所有区块保存的哈希值就不对了。")]),t._v(" "),_("p",[t._v("区块链使用的是 SHA256 哈希算法，计算哈希值非常耗时，如果要篡改一个区块，就必须重新计算该区块后面所有的区块的哈希值，短时间内几乎不可能做到。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);