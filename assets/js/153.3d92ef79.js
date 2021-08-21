(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{876:function(s,a,t){"use strict";t.r(a);var e=t(70),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"hadoop-的-du-延迟"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-的-du-延迟"}},[s._v("#")]),s._v(" Hadoop 的 du 延迟")]),s._v(" "),t("h3",{attrs:{id:"_1-du-与-df"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-du-与-df"}},[s._v("#")]),s._v(" 1. du 与 df")]),s._v(" "),t("p",[s._v("HDFS 会使用 du 定期检测磁盘可用空间，通过 "),t("code",[s._v("fs.du.interval")]),s._v("（默认 10 分钟） 来控制扫描间隔。")]),s._v(" "),t("p",[s._v("du 命令会将文件的相关信息缓存到 cache 中，在大量文件夹以及文件的场景下，会频繁的淘汰 cache，以及大量的磁盘 I/O，影响整体的 I/O 效率。")]),s._v(" "),t("p",[s._v("相比 du 的扫描粒度则会细致到每个文件，df 只会返回磁盘的统计信息。")]),s._v(" "),t("p",[s._v("HDFS 使用 df 存在一个局限性，就是 df 粒度太粗，无法应对一个磁盘被多个 DN 使用，或者存在多个 BP 的场景。")]),s._v(" "),t("h3",{attrs:{id:"_2-解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决方案"}},[s._v("#")]),s._v(" 2. 解决方案")]),s._v(" "),t("h4",{attrs:{id:"_2-1-提高扫描间隔"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-提高扫描间隔"}},[s._v("#")]),s._v(" 2.1 提高扫描间隔")]),s._v(" "),t("p",[s._v("调整扫描间隔，提高 "),t("code",[s._v("fs.du.interval")]),s._v(" 的值，但治标不治本")]),s._v(" "),t("h4",{attrs:{id:"_2-2-调整-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-调整-cache"}},[s._v("#")]),s._v(" 2.2 调整 cache")]),s._v(" "),t("p",[s._v("调低 "),t("code",[s._v("vm.vfs_cache_pressure")]),s._v("，让 cache 更倾向于缓存 inode 信息，减少磁盘 I/O，其参数含义如下：")]),s._v(" "),t("ul",[t("li",[s._v("100：默认值，表示内核将根据 pagecache 和 swapcache，把 directory 和 inode cache 保持在一个合理的百分比")]),s._v(" "),t("li",[s._v("低于100，内核倾向于保留 directory 和 inode cache，但同时意味着 cahce 使用掉的系统 memory 将会增加")]),s._v(" "),t("li",[s._v("增加该值超过100，将导致内核倾向于回收directory和inode cache")])]),s._v(" "),t("h4",{attrs:{id:"_2-3-升级-datanode-layout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-升级-datanode-layout"}},[s._v("#")]),s._v(" 2.3 升级 DataNode Layout")]),s._v(" "),t("p",[s._v("可以参考林意群大神的这篇："),t("a",{attrs:{href:"https://blog.csdn.net/Androidlushangderen/article/details/91348421",target:"_blank",rel:"noopener noreferrer"}},[s._v("DataNode Layout升级解决Du操作引发的性能问题"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("原本的 HDFS 目录结构是 256X256，可以通过 "),t("a",{attrs:{href:"https://issues.apache.org/jira/browse/HDFS-8791",target:"_blank",rel:"noopener noreferrer"}},[s._v("HDFS-8791"),t("OutboundLink")],1),s._v(" 这个 patch 升级为 32X32，目录的元数据呈指数级下降。")]),s._v(" "),t("p",[s._v("具体升级原理是会将原有 current 目录重命名为 previous.tmp，之后新建 current 目录，并将 previous.tmp 下的 block 根据新的规则建立 hardlink 链接到 current 新的目录下。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/zhxuankun/Image/raw/master/blog/20190609104806804.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("Block 是根据位运算计算出目录编号的，原先实现如下：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n   * Get the directory where a finalized block with this ID should be stored.\n   * Do not attempt to create the directory.\n   * @param root the root directory where finalized blocks are stored\n   * @param blockId\n   * @return\n   */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("File")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("idToBlockDir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("File")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" blockId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" d1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("blockId "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xFF")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" d2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("blockId "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xFF")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DataStorage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BLOCK_SUBDIR_PREFIX "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" d1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" SEP "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DataStorage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BLOCK_SUBDIR_PREFIX "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" d2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("File")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("在调整为 32X32 后，只需要将 0XFF 调整为 0x1F 即可。")]),s._v(" "),t("h4",{attrs:{id:"_2-4-修改获取磁盘空间信息的方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-修改获取磁盘空间信息的方式"}},[s._v("#")]),s._v(" 2.4 修改获取磁盘空间信息的方式")]),s._v(" "),t("p",[s._v("在 "),t("a",{attrs:{href:"https://issues.apache.org/jira/browse/HDFS-14313",target:"_blank",rel:"noopener noreferrer"}},[s._v("HDFS-14313：Get hdfs used space from FsDatasetImpl#volumeMap#ReplicaInfo in memory instead of df/du"),t("OutboundLink")],1),s._v(" 这个 patch 中，通过改为从 ReplicaInfo 中计算得到各个磁盘的空间信息。")]),s._v(" "),t("h3",{attrs:{id:"_3-扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-扩展"}},[s._v("#")]),s._v(" 3. 扩展")]),s._v(" "),t("h4",{attrs:{id:"_3-1-inode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-inode"}},[s._v("#")]),s._v(" 3.1 inode")]),s._v(" "),t("p",[s._v("在 Unix 设计艺术中，一切皆文件的思想可以将很复杂的东西抽象成简单的概念，从而大大简化接口。")]),s._v(" "),t("p",[s._v("磁盘一个扇区 512 字节，为了提高读取效率，会将多个扇区以一个 block 为单位读取，每个 block 通常为 4KB 大小，最大不能超过内存页的大小。")]),s._v(" "),t("p",[s._v("文件数据存储在 block 中，同时还需要使用一个对象来存储数据文件的元数据，比如文件的创建者、创建时间、大小、权限信息等，这种存储元数据的对象就是 "),t("strong",[s._v("inode")]),s._v("。")]),s._v(" "),t("p",[s._v("inode 的大小通常为 128 或者 256 字节，可以通过以下命令查看：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("less")]),s._v(" /etc/mke2fs.conf \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("defaults"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        base_features "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sparse_super,large_file,filetype,resize_inode,dir_index,ext_attr\n        default_mntopts "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" acl,user_xattr\n        enable_periodic_fsck "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        blocksize "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\n        inode_size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v("\n        inode_ratio "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16384")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("ul",[t("li",[s._v("blocksize：操作系统 block 的大小")]),s._v(" "),t("li",[s._v("inode_size：每个 inode 的大小")]),s._v(" "),t("li",[s._v("inode_ratio：磁盘总大小除以该值可以得出 inode 数量")])]),s._v(" "),t("p",[s._v("每个磁盘格式化后，都会有一定数量的 inode，可以通过 "),t("code",[s._v("df -iT")]),s._v(" 查看 inode 使用情况。")]),s._v(" "),t("p",[s._v("对于 inode 真实大小，可以通过以下命令查看：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 针对 xfs")]),s._v("\n$ xfs_info /dev/sdc1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" isize\nmeta-data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/sdc1              "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("isize")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("agcount")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("agsize")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("45785024")]),s._v(" blks\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 针对 ext")]),s._v("\n$ tune2fs -l /dev/sdy2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Inode size"')]),s._v("\nInode size:               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("每个 inode 都有一个号码，Unix/Linux 实际上是依靠 inode 来访问文件的，文件名只是个别称。")]),s._v(" "),t("p",[s._v("可以通过 "),t("code",[s._v("ls -i xxx")]),s._v(" 来查看每个文件的 inode 信息，并通过 "),t("code",[s._v("stat xxx")]),s._v(" 命令查看 inode 具体信息：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("stat")]),s._v(" ./anaconda-ks.cfg \n  File: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./anaconda-ks.cfg"')]),s._v("\n  Size: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4508")]),s._v("            Blocks: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("         IO Block: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("   普通文件\nDevice: 802h/2050d      Inode: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14811145")]),s._v("    Links: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nAccess: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0600/-rw-------"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  Uid: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/    root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   Gid: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/    root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nAccess: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-08-27 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":05:05.630999912 +0800\nModify: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-08-27 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":05:05.639999912 +0800\nChange: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-08-27 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":05:14.319999912 +0800\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("软硬链接会对 inode 信息有不同的影响：")]),s._v(" "),t("ul",[t("li",[s._v("硬链接：使用的是同一个 inode 号码，Links 数会 +1，没删除一个硬链接则 -1；当 Links 为 0 的时候，表示没有文件指向该 inode，系统就会回收该 inode")]),s._v(" "),t("li",[s._v("软连接：使用一个新的 inode 号码，Links 数不变，软连接指向的时候 inode 的文件名称，而非 inode 自身")])]),s._v(" "),t("p",[s._v("一些由于 inode 产生的特殊现象：")]),s._v(" "),t("ul",[t("li",[s._v("文件包含特殊字符无法删除时，删除 inode 也可以达到删除 inode 的目的")]),s._v(" "),t("li",[s._v("移动或者重命名文件时，修改的是 inode 里的文件名")]),s._v(" "),t("li",[s._v("打开一个文件后，系统就以 inode 识别文件，而不依赖文件名，可以借助这个特性，在不暂停程序的前提下替换文件，生成新的 inode，下次程序启动后就会根据文件名加载到新的 inode")]),s._v(" "),t("li",[s._v("Unix/Linux 能否读取目录下的文件，权限信息早已存储在文件夹的 inode 中")])])])}),[],!1,null,null,null);a.default=n.exports}}]);