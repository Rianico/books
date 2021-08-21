(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{979:function(s,a,t){"use strict";t.r(a);var e=t(70),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"win10-的-powertoys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#win10-的-powertoys"}},[s._v("#")]),s._v(" Win10 的 PowerToys")]),s._v(" "),t("p",[s._v("PowerToys 是 Windows 上一款用于增强生产力的工具，提供了很多实用的功能。")]),s._v(" "),t("p",[s._v("当前还处于预览，且只有英文版本，详情可以查看 "),t("a",{attrs:{href:"https://github.com/microsoft/PowerToys",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方Github"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[s._v("安装 PowerToys 之前需要先安装 Chocolatey，否则会报错：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("choco "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 无法将“choco”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径正\n确，然后再试一次。\n所在位置 行:1 字符: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n+ choco "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" powertoys\n+ ~~~~~\n    + CategoryInfo          "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectNotFound: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("choco:String"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(", CommandNotFoundException\n    + FullyQualifiedErrorId "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" CommandNotFoundException\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("在 powershell 下执行命令安装 Chocolatey：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("iwr https://chocolatey.org/install.ps1 -UseBasicParsing "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" iex\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果安装 Chocolatey 失败，那可能是因为执行策略问题，查看执行策略：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("get-executionpolicy\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("显示 Restricted，表示不允许执行任何脚本，修改执行策略：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ALLSIGNED：要求所有脚本和配置文件都由受信任的发布者签名，包括在本地计算机上编写的脚本。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 其他执行策略参考：https://docs.microsoft.com/zh-cn/previous-versions/windows/powershell-scripting/hh847748(v=wps.640)?redirectedfrom=MSDN")]),s._v("\nset-ExecutionPolicy ALLSIGNED\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("再次安装 Chocolatey 成功，之后再安装 PowerToys：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# install")]),s._v("\nchoco "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" powertoys\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# upgrade")]),s._v("\nchoco upgrade powertoys\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("具体提供的工具使用可以参考官方 github 或者这篇文章："),t("a",{attrs:{href:"https://www.iplaysoft.com/powertoys.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("微软 PowerToys 小工具合集 - 免费给 Win10 加装各种增强新功能的效率利器"),t("OutboundLink")],1),s._v(")")])])}),[],!1,null,null,null);a.default=n.exports}}]);