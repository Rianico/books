(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{767:function(e,t,s){"use strict";s.r(t);var r=s(70),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"docker-镜像内配置-git-账户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-镜像内配置-git-账户"}},[e._v("#")]),e._v(" Docker 镜像内配置 Git 账户")]),e._v(" "),s("p",[e._v("最近几天在学习 docker 的时候，使用 Dockerfile 构建 image，但在配置 ssh 时需要拷贝一份可以访问 git 的 ssh-key，然后注入image，并且想要在 Dockerfile 直接运行 git clone 等操作也会提示失败，需要对 Dockerfile 作出比较复杂的配置，详见："),s("a",{attrs:{href:"https://stackoverflow.com/questions/18136389/using-ssh-keys-inside-docker-container",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using SSH keys inside docker container"),s("OutboundLink")],1),e._v("。")]),e._v(" "),s("p",[e._v("因此最后决定使用 https 方式，通过在 github 端生成 tokens 的 url，接着配置在 Dockerfile 里的 RUN 即可，详见 "),s("a",{attrs:{href:"https://medium.com/paperchain/fetching-private-github-repos-from-a-docker-container-273f25ec5a74",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fetching private GitHub repos from a Docker container"),s("OutboundLink")],1),e._v("。")]),e._v(" "),s("p",[e._v("github端： Your Profile → Settings → Personal Access Tokens → Generate New Token 生成 token，然后 image 添加该配置：")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" config --global url."),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://{token}:@github.com/"')]),e._v(".insteadOf "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://github.com/"')]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("其实无论 ssh-key 方式还是 https 方式，都会导致 image 中存储这些访问信息，生产环境下不推荐使用。")])])}),[],!1,null,null,null);t.default=n.exports}}]);