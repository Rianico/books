(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{765:function(e,s,t){"use strict";t.r(s);var a=t(70),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"docker-部署-elastic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-部署-elastic"}},[e._v("#")]),e._v(" Docker 部署 Elastic")]),e._v(" "),t("p",[e._v("可以通过docker快速部署一个 elastic search，步骤如下：")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 拉取elastic官方镜像")]),e._v("\ndocker pull docker.elastic.co/elasticsearch/elasticsearch:7.3.1\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 创建container，并指定端口为9200,9300")]),e._v("\ndocker run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("9200")]),e._v(":9200 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("9300")]),e._v(":9300 -e "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"discovery.type=single-node"')]),e._v(" docker.elastic.co/elasticsearch/elasticsearch:7.3.1\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("对于elastic的其他版本，可以到 "),t("a",{attrs:{href:"https://www.docker.elastic.co/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker @ Elastic"),t("OutboundLink")],1),e._v(" 下载.")]),e._v(" "),t("p",[e._v("参考链接："),t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install Elasticsearch with Docker"),t("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);