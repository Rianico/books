(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{881:function(s,a,e){"use strict";e.r(a);var t=e(70),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"kafka-常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kafka-常用命令"}},[s._v("#")]),s._v(" Kafka 常用命令")]),s._v(" "),e("h3",{attrs:{id:"查询-under-replicated-分区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询-under-replicated-分区"}},[s._v("#")]),s._v(" 查询 Under-replicated 分区")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ZK")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--zookeeper zk01,zk02,zk03:2181"')]),s._v("\n/opt/kafka/bin/kafka-topics.sh "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ZK")]),s._v(" --describe --under-replicated-partitions\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"查询-unavailable-分区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询-unavailable-分区"}},[s._v("#")]),s._v(" 查询 Unavailable 分区")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ZK")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--zookeeper zk01,zk02,zk03:2181"')]),s._v("\n/opt/kafka/bin/kafka-topics.sh "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ZK")]),s._v(" --describe --unavailable-partitions\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"获取-kaka-offset-kerberos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取-kaka-offset-kerberos"}},[s._v("#")]),s._v(" 获取 Kaka offset (Kerberos)")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("COMMAND_CONFIG")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--command-config /path/to/group.properties"')]),s._v("\nkafka-consumer-groups.sh "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$COMMAND_CONFIG")]),s._v(" --bootstrap-server kafka01:9092 --describe --group TEST_TOPIC_GROUP\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# group.properties 配置")]),s._v("\nsecurity.protocol"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SASL_PLAINTEXT\nsasl.kerberos.service.name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kafka\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h3",{attrs:{id:"重置-kafka-offset-kerberos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重置-kafka-offset-kerberos"}},[s._v("#")]),s._v(" 重置 Kafka Offset (Kerberos)")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("COMMAND_CONFIG")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--command-config /path/to/group.properties"')]),s._v("\nkafka-consumer-groups "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$COMMAND_CONFIG")]),s._v(" --bootstrap-server kafka01:9092 --reset-offsets --to-latest --execute --topic CY_PLAYLOAD_JY_XDR --group TEST_TOPIC_GROUP\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"kafka-prefix-acl-kafka-2-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kafka-prefix-acl-kafka-2-0"}},[s._v("#")]),s._v(" Kafka Prefix Acl (Kafka > 2.0)")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kafka-acls.sh  --authorizer kafka.security.auth.SimpleAclAuthorizer "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               --authorizer-properties zookeeper.connect"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zk01:2181 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               --add --allow-principal User:"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'zxk'")]),s._v(" --operation READ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               --topic TEST_TOPIC --group"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'spark-kafka-source-'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               --resource-pattern-type prefixed\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"生产和消费"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生产和消费"}},[s._v("#")]),s._v(" 生产和消费")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生产者产生资源")]),s._v("\nkafka-console-producer.sh --broker-list kafka01:9092 --topic TEST_TOPIC\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 消费者消费资源")]),s._v("\nkafka-console-consumer.sh --bootstrap-server kafka01:9092 --from-beginning --topic TEST_TOPIC\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"生产和消费测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生产和消费测试"}},[s._v("#")]),s._v(" 生产和消费测试")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生产测试")]),s._v("\nkafka-producer-perf-test.sh --topic topic1 --num-records "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000000")]),s._v("  --record-size "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v(" --throughput -1 --producer-props bootstrap.servers"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kafka1:6667\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 消费测试")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## --num-fetch-threads 消费 Kafka topic 的线程")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## --threads Consumer 的处理线程")]),s._v("\nkafka-consumer-perf-test.sh --group group1 --num-fetch-threads "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" --threads "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" --topic topic1 --messages "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("200000000")]),s._v(" --broker-list kafka1:6667\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);