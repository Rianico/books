(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{923:function(s,a,t){"use strict";t.r(a);var n=t(70),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"centos-7-安装-mariadb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos-7-安装-mariadb"}},[s._v("#")]),s._v(" CentOS 7 安装 MariaDB")]),s._v(" "),t("p",[s._v("CentOS 7 下默认的数据库改为 MariaDB 了，使用方式跟 MySQL 基本一致，兼容 MySQL，如果要强行安装 MySQL 还需要更换 yum 源等，较为麻烦，因此决定使用默认的 MariaDB，这里记录下一些相关步骤。")]),s._v(" "),t("h3",{attrs:{id:"_1-安装-mariadb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-mariadb"}},[s._v("#")]),s._v(" 1. 安装 MariaDB")]),s._v(" "),t("div",{staticClass:"language-vim line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vim"}},[t("code",[s._v("yum install mariadb mariadb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server    # 安装客户端与服务端\nsystemctl start mariadb   #启动mariadb\nsystemctl enable mariadb  #设置开机自启动\n\nmysql_secure_installation #设置root密码等相关\nmysql "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("uroot "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("p")]),s._v("           #测试登录\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("这里我安装完后是 5.5.60 版本。")]),s._v(" "),t("h3",{attrs:{id:"_2-开启远程登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-开启远程登录"}},[s._v("#")]),s._v(" 2. 开启远程登录")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/my.cnf    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改配置文件")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 mysqld 模块下下配置允许远程登陆")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nbind-address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录 mysql，执行下列 sql 语句：")]),s._v("\ngrant all privileges on *.* to "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" identified by "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nflush privileges"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解除授权")]),s._v("\nrevoke ALL ON *.* from "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ndelete from mysql.user where "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v(" and "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v("\nflush privileges"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证，在其他主机执行下列命令，$ip 替换为 mariadb 节点的 ip")]),s._v("\nmysql -uroot -h "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ip")]),s._v(" -p\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h3",{attrs:{id:"_3-修改数据库编码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改数据库编码"}},[s._v("#")]),s._v(" 3. 修改数据库编码")]),s._v(" "),t("p",[s._v("由于历史原因，MySQL、MariaDB 的 utf8 编码都不是当前我们常说的 utf-8 编码，应将其修改为 "),t("code",[s._v("utf8mb4")]),s._v("，步骤如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/my.cnf.d/server.cnf")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ncharacter-set-server"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb4\ncollation-server"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb4_unicode_ci\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("init_connect")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SET NAMES utf8mb4'")]),s._v("\nskip-character-set-client-handshake"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/my.cnf.d/client.cnf")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ndefault-character-set"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb4\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/my.cnf")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("default_character_set")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h3",{attrs:{id:"_4-信号量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-信号量"}},[s._v("#")]),s._v(" 4. 信号量")]),s._v(" "),t("p",[s._v("查看当前数据库正在等待获取信号量的线程，通常应该为空：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mariadb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INNODB")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("STATUS")]),s._v("\\G"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------")]),s._v("\nSEMAPHORES\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------")]),s._v("\nOS WAIT ARRAY INFO: reservation count "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("68581015")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" signal count "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("218437328")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--Thread 140653057947392 has waited at btr0pcur.c line 437 for 0.00 seconds the semaphore:")]),s._v("\nS"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("lock")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" RW"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("latch at "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x7ff536c7d3c0")]),s._v(" created "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("file")]),s._v(" buf0buf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("c line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("916")]),s._v("\na writer "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("thread id "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("140653057947392")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" has reserved it "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mode")]),s._v(" exclusive\nMutex spin waits "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1157217380")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rounds "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1783981614")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" OS waits "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10610359")]),s._v("\nRW"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("shared spins "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("103830012")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rounds "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1982690277")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" OS waits "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("52051891")]),s._v("\nRW"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("excl spins "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("43730722")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rounds "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("602114981")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" OS waits "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3495769")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);