(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{775:function(r,t,e){"use strict";e.r(t);var n=e(70),s=Object(n.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"rm-操作的一些注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rm-操作的一些注意事项"}},[r._v("#")]),r._v(" rm 操作的一些注意事项")]),r._v(" "),e("p",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/cuGszeKUxoYlpf3qt2vuWg",target:"_blank",rel:"noopener noreferrer"}},[r._v("写了个Bug，误执行rm -fr /*，瞬间背后一凉！"),e("OutboundLink")],1)]),r._v(" "),e("p",[r._v("根据这篇文章，可以得出在执行 rm 操作时，有一些技巧可以防止误删：")]),r._v(" "),e("ol",[e("li",[r._v("执行 rm 前判断路径变量是否为空。")]),r._v(" "),e("li",[r._v("在脚本开头添加 "),e("code",[r._v("set -u")]),r._v(" ，一旦脚本某个变量为空便会自动终止执行脚本。")]),r._v(" "),e("li",[r._v("使用 safe-rm 软件替代 rm，支持添加路径黑名单机制。")]),r._v(" "),e("li",[r._v("建立回收站机制，自行编写脚本替换 rm，脚本执行 mv 移动删除内容到回收站路径。")])])])}),[],!1,null,null,null);t.default=s.exports}}]);