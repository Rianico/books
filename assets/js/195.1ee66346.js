(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{918:function(s,e,a){"use strict";a.r(e);var n=a(70),r=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"dolphinscheduler-mpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dolphinscheduler-mpack"}},[s._v("#")]),s._v(" dolphinscheduler-mpack")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square",alt:"standard-readme compliant"}})]),s._v(" "),a("p",[s._v("Ambari 2.7.3 集成 dolphinscheduler 1.3.3。")]),s._v(" "),a("p",[s._v("基于 "),a("a",{attrs:{href:"https://github.com/apache/incubator-dolphinscheduler/tree/1.3.3-release/ambari_plugin",target:"_blank",rel:"noopener noreferrer"}},[s._v("dolphinscheduler 1.3.3 分支"),a("OutboundLink")],1),s._v(" 的官方插件修改而来，改动如下：")]),s._v(" "),a("ol",[a("li",[s._v("修改 dolphinscheduler 安装方式为 rpm 形式。")]),s._v(" "),a("li",[s._v("统一修改 dolphinscheduler 安装路径为 "),a("code",[s._v("/usr/hdp/current")]),s._v(" 下。")]),s._v(" "),a("li",[s._v("修改 "),a("code",[s._v("dolphin-env")]),s._v(" 下的 "),a("code",[s._v("dolphinscheduler-env-content")]),s._v(" 属性，以适配 hdp 默认环境。")]),s._v(" "),a("li",[s._v("修改部分其中部分过时的 ambari API（官方插件基于 Ambari 2.5.2 开发）。")])]),s._v(" "),a("p",[s._v("项目地址："),a("a",{attrs:{href:"https://gitee.com/zhxuankun/ambari-plugins",target:"_blank",rel:"noopener noreferrer"}},[s._v("zxk/Ambari-Plugins"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"编译环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译环境"}},[s._v("#")]),s._v(" 编译环境")]),s._v(" "),a("ul",[a("li",[s._v("操作系统：CentOS 7.6.1810")]),s._v(" "),a("li",[s._v("内核：4.14.0-115.el7a.0.1.aarch64")]),s._v(" "),a("li",[s._v("Java： openjdk-1.8.0_181")])]),s._v(" "),a("h2",{attrs:{id:"制作-rpm-包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#制作-rpm-包"}},[s._v("#")]),s._v(" 制作 rpm 包")]),s._v(" "),a("p",[s._v("安装必备组件：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yum -y install libffi-devel make gcc gcc-c++ ant asciidoc cyrus-sasl-devel cyrus-sasl-gssapi cyrus-sasl-plain krb5-devel libtidy libxml2-devel libxslt-devel openldap-devel python-devel sqlite-devel openssl-devel mysql-devel openldap-devel python-devel sqlite-devel gmp-devel maven wget rpmdevtools pip\n\n# 如果系统没有安装 pip，则执行 yum -y install pip\npip install --upgrade pip\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("生成 rpm 构建目录："),a("code",[s._v("rpmdev-setuptree && cd ~/rpmbuild")]),s._v("，会在当前用户的 $HOME 目录下生成一个 "),a("code",[s._v("rpmbuild")]),s._v(" 文件夹，结构如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("../rpmbuild/\n├── BUILD\n├── RPMS\n├── SOURCES\n├── SPECS\n└── SRPMS\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("鉴于网络问题，不同地区下载 dolphinscheduler 的节点会有所不同，这里建议先在浏览器打开此"),a("a",{attrs:{href:"https://www.apache.org/dyn/closer.cgi/incubator/dolphinscheduler/1.3.3/apache-dolphinscheduler-incubating-1.3.3-dolphinscheduler-bin.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[s._v("链接"),a("OutboundLink")],1),s._v("，可以看到如下截图：")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://gitee.com/zhxuankun/Image/raw/master/ARTS_Tips/20210127164304.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://gitee.com/zhxuankun/Image/raw/master/ARTS_Tips/20210127164304.png",alt:"image-20210126155810038"}}),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("这里建议使用第一个链接，正常情况下应该是一个一百多 M 的压缩包，如果不行，再一个个链接尝试。")]),s._v(" "),a("p",[s._v("这里以第一个链接为例，下载 dolphinscheduler 1.3.3 版本的二进制包到 SOURCES 文件夹下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" --no-check-certificate -P ~/rpmbuild/SOURCES https://mirrors.bfsu.edu.cn/apache/incubator/dolphinscheduler/1.3.3/apache-dolphinscheduler-incubating-1.3.3-dolphinscheduler-bin.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("下载 mysql 驱动包到 SOURCES 文件夹下")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" --no-check-certificate -P ~/rpmbuild/SOURCES  https://repo1.maven.org/maven2/mysql/mysql-connector-java/5.1.47/mysql-connector-java-5.1.47.jar\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("编写构建相关的描述文件 "),a("code",[s._v("vim ~/rpmbuild/SPECS/dolphinscheduler.spec")]),s._v("，内容如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('%define __os_install_post %{!?__debug_package:/usr/lib/rpm/brp-strip %{__strip}} %{nil}\n\n%define __debug_install_post %{_rpmconfigdir}/find-debuginfo.sh %{?_find_debuginfo_opts} "%{_builddir}/%{?buildsubdir}" %{nil}\n\n%define _python_bytecompile_errors_terminate_build 0\n\n%define debug_package %{nil}\n\n%define _unpackaged_files_terminate_build 0\n\n%define _use_internal_dependency_generator 0\n\n%define __jar_repack %{nil}\n\n%define __prelink_undo_cmd %{nil}\n\nName:           dolphinscheduler\nVersion:        1.3.3\nRelease:        1%{?dist}\nSummary:        A distributed and easy-to-extend visual DAG workflow scheduling system. Dedicated to solving the complex dependencies in data processing, making the scheduling system `out of the box` for data processing.\n\nLicense:        Apache License 2.0\nURL:            https://github.com/apache/incubator-dolphinscheduler\nSource0:        apache-%{name}-incubating-%{version}-%{name}-bin.tar.gz\nAutoReqProv:    no\nPrefix:        /usr/hdp/current\n\n%description\nA distributed and easy-to-extend visual DAG workflow scheduling system. Dedicated to solving the complex dependencies in data processing, making the scheduling system `out of the box` for data processing.\n\n%prep\n%setup -q -n apache-%{name}-incubating-1.3.3-%{name}-bin\ncp -rf %{_sourcedir}/mysql-connector-java-5.1.47.jar %{_builddir}/apache-%{name}-incubating-%{version}-%{name}-bin/lib/\n\n%build\n\n%install\nmkdir -p %{buildroot}%{prefix}\ncp -rf %{_builddir}/apache-%{name}-incubating-%{version}-%{name}-bin %{buildroot}%{prefix}/%{name}\n\n%files\n%{prefix}/%{name}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br")])]),a("p",[s._v("编译过程需要去掉 rpath 检查，执行 "),a("code",[s._v("vim ~/.rpmmacros")]),s._v("，找到下列代码，将其注释掉，通常位于倒数第二行：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# case "${QA_CHECK_RPATHS:-}" in [1yY]*) /usr/lib/rpm/check-rpaths ;; esac \\\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("编写脚本 "),a("code",[s._v("vim ~/rpmbuild/build.sh")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#!/usr/bin/env bash\nrpmbuild -bs ~/rpmbuild/SPECS/dolphinscheduler.spec\nQA_RPATHS=$[ 0x0001|0x0002 ] rpmbuild --nodeps --rebuild ~/rpmbuild/SRPMS/dolphinscheduler-1.3.3-1.el7.src.rpm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("执行脚本 "),a("code",[s._v("nohup sh ./build.sh &")]),s._v("，等待编译完成。")]),s._v(" "),a("p",[s._v("编译后的目录结构如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".\n├── BUILD\n├── BUILDROOT\n├── build.sh\n├── RPMS\n│   └── aarch64\n│       └── dolphinscheduler-1.3.3-1.el7.aarch64.rpm\n├── SOURCES\n│   └── mysql-connector-java-5.1.47.jar\n├── SPECS\n└── SRPMS\n    └── dolphinscheduler-1.3.3-1.el7.src.rpm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("其中 "),a("code",[s._v("dolphinscheduler-1.3.3-1.el7.aarch64.rpm")]),s._v("（x86 服务器下则是 "),a("code",[s._v("dolphinscheduler-1.3.3-1.el7.x86_64.rpm")]),s._v("） 就是 dolphinscheduler 的 rpm ，安装后位于 "),a("code",[s._v("/usr/hdp/current/dolphinscheduler")]),s._v(" 。")]),s._v(" "),a("p",[s._v("最后将 "),a("code",[s._v("dolphinscheduler-1.3.3-1.el7.aarch64.rpm")]),s._v(" 放置于任意一个可访问的 yum 仓库路径下。")]),s._v(" "),a("p",[s._v("假设路径为 "),a("code",[s._v("/var/www/html/entry/hdp/3.1/centos7/aarch64/")]),s._v("，则执行如下步骤：")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("createrepo /var/www/html/entry/hdp/3.1/centos7")]),s._v(" 更新 repodata")]),s._v(" "),a("li",[s._v("更新各个节点的 yum 缓存："),a("code",[s._v("yum clean all && yum makecache")])]),s._v(" "),a("li",[s._v("执行 "),a("code",[s._v("yum list dolphinscheduler")]),s._v(" 验证是否可以看到 dolphinscheduler 的相关 rpm 包。")])]),s._v(" "),a("blockquote",[a("p",[s._v("NOTE：在 /var/www/html/entry/hdp/3.1/centos7/aarch64/ 多层目录中，只能其中一层有 repodata，否则会导致 yum 安装 rpm 时异常。")])]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[s._v("如果使用外部数据库，还需要先建立 dolphinscheduler 的 database，接着进行远程授权，此处推荐统一使用 ambari 用户，假设密码为 amabri123")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 如果使用 Postgresql，另外还需配置 Postgresql 支持远程访问")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" dolphinscheduler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" dolphinscheduler "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" ambari"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 如果使用 Mysql")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" dolphinscheduler "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHARACTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" utf8 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLLATE")]),s._v(" utf8_general_ci"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("privileges")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" dolphinscheduler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ambari'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),s._v(" identified "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ambari123'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nflush "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("privileges")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("安装 dolphinscheduler-mpack 详见顶级 README。")]),s._v(" "),a("p",[s._v("编译参考教程：")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://rpm-packaging-guide.github.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("RPM Packaging Guide"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://bbs.huaweicloud.com/forum/thread-38327-1-1.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("RPM打包流程、示例及常见问题"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);