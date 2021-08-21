---
title: big-data
---



# Big Data

**大数据**（英语：**Big data**[[1\]](https://zh.wikipedia.org/wiki/大數據#cite_note-1)[[2\]](https://zh.wikipedia.org/wiki/大數據#cite_note-2)[[3\]](https://zh.wikipedia.org/wiki/大數據#cite_note-3)），又称为**巨量资料**，指的是在传统数据处理应用软件不足以处理的大或复杂的数据集的术语[[4\]](https://zh.wikipedia.org/wiki/大數據#cite_note-4)[[5\]](https://zh.wikipedia.org/wiki/大數據#cite_note-5)。

海量数据也可以定义为来自各种来源的大量非结构化或结构化数据。从学术角度而言，海量数据的出现促成广泛主题的新颖研究。这也导致各种海量数据统计方法的发展。海量数据并没有[统计学](https://zh.wikipedia.org/wiki/統計學)的[抽样](https://zh.wikipedia.org/wiki/抽樣)方法；它只是观察和追踪发生的事情。因此，海量数据通常包含的数据大小超出传统软件在可接受的时间内处理的能力。由于近期的技术进步，发布新数据的便捷性以及全球大多数政府对高透明度的要求，海量数据分析在现代研究中越来越突出。[[6\]](https://zh.wikipedia.org/wiki/大數據#cite_note-6) [[7\]](https://zh.wikipedia.org/wiki/大數據#cite_note-7)



## Yarn
|                           参数                            |                             调整                             |                             备注                             |
| :-------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|                yarn.log-aggregation-enable                |                             true                             |                       是否启用日志聚合                       |
|            yarn.log-aggregation.retain-seconds            |                             7天                              |                        日志聚合保留期                        |
|                 mapreduce.task.io.sort.mb                 |                            256MB                             |                                                              |
|         yarn.resourcemanager.client.thread-count          |                              64                              | 客户端线程计数，用于处理应用程序管理请求的线程数量，默认50。 |
|    yarn.resourcemanager.scheduler.client.thread-count     |                              64                              | 调度程序线程计数，用于通过调度器接口处理请求的线程数量，默认50。 |
| yarn.resourcemanager.resource-tracker.client.thread-count |                              64                              |  资源跟踪器线程计数,处理资源追踪器呼叫的线程数量，默认50。   |
|      yarn.resourcemanager.admin.client.thread-count       |                              3                               |                                                              |
|                    io.file.buffer.size                    |                            256KB                             |                 SequenceFile I/O 缓存区大小                  |
|   yarn.resourcemanager.nm.liveness-monitor.interval-ms    |                              3s                              | ResourceManager 检查 NodeManagers 是否仍处于活动状态的周期间隔。 |
|           yarn.resourcemanager.recovery.enabled           |                             true                             | 启用后，ResourceManager 中止时在群集上运行的任何应用程序将在 ResourceManager 下次启动时恢复。注：如果启用RM-HA，则始终启用该配置。 |
|           将 JobHistory Server 绑定到通配符地址           |                             true                             |                                                              |
|            将 ResourceManager 绑定到通配符地址            |                             true                             |                                                              |
|               mapreduce.map.output.compress               |                             true                             |        开启map中间结果压缩,配置在mapred-site.xml文件         |
|            mapred.map.output.compression.codec            |            org.apache.hadoop.io.compress.Lz4Codec            |    map中间结果压缩格式为snappy,配置在mapred-site.xml文件     |
|        mapreduce.output.fileoutputformat.compress         |                            false                             |     是否开启reduce输出结果压缩,配置在mapred-site.xml文件     |
|     mapreduce.output.fileoutputformat.compress.codec      |           org.apache.hadoop.io.compress.GzipCodec            |    reduce输出结果压缩格式为gzip,配置在mapred-site.xml文件    |
|             mapreduce.shuffle.manage.os.cache             |                             true                             |  为Yarn开启 shuffle readahead特性,配置在mapred-site.xml文件  |
|             mapreduce.shuffle.readahead.bytes             |                           8388608‬                            | 为Yarn调整 shuffle readahead的大小，默认4MB,配置在mapred-site.xml文件 |
|            mapred.tasktracker.shuffle.fadvise             |                             true                             | 为MR开启 shuffle readahead特性,配置在MR的mapred-site.xml文件 |
|        mapred.tasktracker.shuffle.readahead.bytes         |                           8388608‬                            | 调整 shuffle readahead的大小，默认4MB,配置在MR的mapred-site.xml文件 |
|                 mapreduce.ifile.readahead                 |                             true                             |              启用 IFile 预读增加合并操作的性能               |
|              mapreduce.ifile.readahead.bytes              |                           ‭8388608‬                            |                   调整预读的大小，默认4MB                    |
|         mapreduce.tasktracker.outofband.heartbeat         |                             true                             |          task完成后立刻发送额外的汇报心跳，减少延迟          |
|            yarn.nodemanager.resource.memory-mb            |                             224G                             |                      每个节点可用的内存                      |
|                mapreduce.job.acl-view-job                 |                             hue                              |                    允许hue访问job相关信息                    |
|               mapreduce.job.acl-modify-job                |                             hue                              |                    允许hue操作job相关信息                    |
|                       自动重启进程                        |                             true                             |                                                              |
|            yarn.scheduler.fair.assignmultiple             |                            false                             | 禁止一次心跳分配多个container，避免一个Spark作业的多个executor落在同个节点 |
|        JobHistory Server 的 Java 堆栈大小（字节）         |                             16G                              |                                                              |
|           NodeManager 的 Java 堆栈大小（字节）            |                             12G                              |                                                              |
|         ResourceManager 的 Java 堆栈大小（字节）          |                             48G                              |                                                              |
|  yarn.nodemanager.resource.percentage-physical-cpu-limit  |                              90                              |            限制一個nn上所有container占用的cpu資源            |
|         yarn.scheduler.fair.user-as-default-queue         |                            false                             |                     禁止自动创建资源队列                     |
|               NodeManager 的 Java 配置选项                | -XX:+UseG1GC -XX:InitiatingHeapOccupancyPercent=35 -XX:ConcGCThreads=16 -Dlibrary.leveldbjni.path={{CONF_DIR}} |                                                              |
|             ResourceManager 的 Java 配置选项              | -XX:+UseG1GC -XX:InitiatingHeapOccupancyPercent=35 -XX:ConcGCThreads=16 -Dlibrary.leveldbjni.path={{CONF_DIR}} |                                                              |
|             yarn.nodemanager.vmem-pmem-ratio              |                              3                               |                         虚拟内存比例                         |

- [如何在CM中启用YARN的使用率报告](https://cloud.tencent.com/developer/article/1078699)

----

## HDFS

|                             参数                             |       调整       |                             备注                             |
| :----------------------------------------------------------: | :--------------: | :----------------------------------------------------------: |
|                        dfs.block.size                        |      256MB       |                         HDFS 块大小                          |
|                  dfs.namenode.handler.count                  |       115        |     NameNode的服务器线程的数量，根据math.log(N) * 20得出     |
|              dfs.namenode.service.handler.count              |       115        |    NameNode 的服务器线程的数量，根据math.log(N) * 20得出     |
|            dfs.datanode.failed.volumes.tolerated             |        3         | 在 DataNode 停止提供服务前允许失败的卷的数量。在默认情况下，卷故障会导致 DataNode 关闭。 |
|                  dfs.datanode.handler.count                  |        24        |                   DataNode 服务器线程数。                    |
|            dfs.namenode.avoid.read.stale.datanode            |       true       |                    避免读取失效 DataNode                     |
|           dfs.namenode.avoid.write.stale.datanode            |       true       |                    避免写入失效 DataNode                     |
|           dfs.blockreport.incremental.intervalMsec           |       100        | dn成功写入数据后等待100ms才批量汇总给nn，hdfs-site.xml配置`<name>dfs.blockreport.incremental.intervalMsec</name><value>300</value>` |
|                         自动重启进程                         |       true       |                                                              |
|                          绑定通配符                          |       true       |                                                              |
|              DataNode 的 Java 堆栈大小（字节）               |        6G        |                                                              |
|              NameNode 的 Java 堆栈大小（字节）               |       128G       |                                                              |
|         Secondary NameNode 的 Java 堆栈大小（字节）          |       128G       |                                                              |
|             JournalNode 的 Java 堆栈大小（字节）             |        4G        |                                                              |
|               HttpFS 的 Java 堆栈大小（字节）                |       16G        |                                                              |
|         Failover Controller 的 Java 堆栈大小（字节）         |        1G        |                                                              |
|              Balancer 的 Java 堆栈大小（字节）               |        1G        |                                                              |
|         Failover Controller 的 Java 堆栈大小（字节）         |        1G        |                                                              |
|          dfs.namenode.delegation.token.max-lifetime          |    2592000000    |                    token最大有效期，30天                     |
|        dfs.datanode.fsdataset.volume.choosing.policy         |     可用空间     | 磁盘分配数据基于使用量策略，对应org.apache.hadoop.hdfs.server.datanode.fsdataset.AvailableSpaceVolumeChoosingPolicy |
| dfs.datanode.available-space-volume-choosing-policy.balanced-space-threshold |       500G       |              修改为0.5T，基于使用量策略触发阈值              |
| dfs.datanode.available-space-volume-choosing-policy.balanced-space-preference-fraction |       0.75       |        保留默认值，数据块存储到可用空间多的卷上的概率        |
|          dfs.datanode.balance.max.concurrent.moves           |  4x # of disks   |       进行 Balance 时 Datanode 迁移 Block 的最大并发数       |
| dfs.balance.bandwidthPerSec, dfs.datanode.balance.bandwidthPerSec |  1048576 (1 MB)  |                 Datanode 用于 Balance 的带宽                 |
|                dfs.balancer.max-size-to-move                 | 1073741824 (1GB) | Balancer 迁移文件的最大字节数，如果发现频繁超时又不想提高 Balancer 带宽时，可以缩小改值，过滤掉大文件 |
|                  dfs.namenode.handler.count                  |       1200       |    NameNode RPC服务端监测客户端请求的线程数，可适量增加。    |
|              dfs.namenode.service.handler.count              |        32        | NameNode RPC服务端监测DataNode和其他请求的线程数，可适量增加。 |
|                  dfs.datanode.handler.count                  |       512        |               DataNode服务线程数，可适量增加。               |

### 限流

HDFS 内部 Block 拷贝有两条路线：

1. Balancer 拷贝，可以直接指定限流速度，更多 Balancer 详细信息参照：[Configuring the Balancer](https://docs.cloudera.com/HDPDocuments/HDP2/HDP-2.6.0/bk_hdfs-administration/content/configuring_balancer.html) 
2. Datanode 下线时恢复 block 块造成的拷贝，只能通过以下三个参数来间接限流（作用于 NameNode）：
   - **dfs.namenode.replication.work.multiplier.per.iteration**：属于比例系数，乘以存活的 Datanode 节点数，得到计算每轮循环中每个 Datanode 能够同时拷贝的 block 块的数目，默认值 2
   - **dfs.namenode.replication.max-streams**：一个节点的非最高优先级 block 拷贝时的线程数，默认值 2
   - **dfs.namenode.replication.max-streams-hard-limit**：一个节点拷贝包括最高优先级 block 的线程数，默认值 4

Datanode 下线造成的 block ，如果设置不当，很可能造成很高的网络 I/O 以及磁盘延迟，影响集群稳定性。

如果 Datanode 频繁报以下错误，则代表 Datanode 负责传输的线程数 `dfs.datanode.max.transfer.threads` 设置过低，需要适当调高，默认 4096：

```bash
agent1:1004:DataXceiver error processing WRITE_BLOCK operation  src: /192.168.1.73:50484 dst: /192.168.1.76:1004
```

mapred-site.xml 一些杂项配置：

```xml
<property>
	<name>dfs.blockreport.incremental.intervalMsec</name>
	<value>100</value></property>
	<description>dn成功写入数据后汇报给nn的等待时间</description>
</property>
<property>
	<name>dfs.namenode.delegation.token.max-lifetime</name>
    <value>2592000000</value>
    <description>delegation token最大有效期，30天，影响Kerberos凭据的有效期</description>
</property>

<!-- 如果想要让整个集群MR开启压缩 -->
<property>
  <name>mapreduce.map.output.compress</name>
  <value>true</value>
</property>
<property>
  <name>mapreduce.map.output.compress.codec</name>
  <value>org.apache.hadoop.io.compress.SnappyCodec</value>
</property>
```

----

## Kafka

|                  参数                   |                             调整                             |                             备注                             |
| :-------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|       default.replication.factor        |                              3                               |                                                              |
|           delete.topic.enable           |                             true                             |                                                              |
|     unclean.leader.election.enable      |                             true                             |                是否开启脏选举，保证业务可用性                |
|      auto.leader.rebalance.enable       |                             true                             |                    是够开启leader自动选举                    |
| leader.imbalance.per.broker.percentage  |                              10                              |                    允许broker不平衡的比例                    |
| leader.imbalance.check.interval.seconds |                              1h                              |                     leader自动选举的间隔                     |
|            message.max.bytes            |                             5MB                              | Kafka可以接受的message最大大小，注意：fetch的大小要大于此值，producer发送的message大小要小于此值 |
|         replica.fetch.max.bytes         |                             6MB                              |                     最大fetch消息的大小                      |
|          num.replica.fetchers           |                              12                              | fetcher的线程数，根据磁盘数量调整即可，过大会加重机器I/O负载，推荐为核心数+磁盘数 |
|         replica.lag.time.max.ms         |                             90s                              |                  允许follower落后的最大时延                  |
|           log.retention.hours           |                              8h                              |                  partition保留的log最久时间                  |
|           log.retention.bytes           |                              8G                              |                  partition保留的log最大大小                  |
|             num.io.threads              |                              44                              |       Kafka处理I/O请求的线程数，建议为 超线程数+磁盘数       |
|           num.network.threads           |                              32                              |            处理网络请求的线程数，建议为 超线程数             |
|           queued.max.requests           |                             1000                             |             request队列最大大小，会由I/O线程处理             |
|       log.flush.interval.messages       |                      922337203685477600                      | 官方不建议调整，而是由vm.dirty_background_ratio以及vm.dirty_ratio控制 |
|          log.flush.interval.ms          |                      922337203685477600                      | 官方不建议调整，而是由vm.dirty_background_ratio以及vm.dirty_ratio控制 |
|     log.flush.scheduler.interval.ms     |                      922337203685477600                      | 官方不建议调整，而是由vm.dirty_background_ratio以及vm.dirty_ratio控制 |
|            broker_java_opts             | -Xms8g -XX:+UseG1GC -XX:MaxGCPauseMillis=20 -XX:InitiatingHeapOccupancyPercent=35 -XX:ConcGCThreads=16 |                                                              |
|          broker_max_heap_size           |                             10G                              |             Kafka进程的最大堆内存，会传递给-Xmx              |
|              自动重启进程               |                             true                             |                                                              |
|        auto.create.topics.enable        |                            false                             |                        自动创建topic                         |
|   replica.socket.receive.buffer.bytes   |                           1048576                            |             副本拉取时的socket buffer，默认65536             |
|       socket.receive.buffer.bytes       |                           1048576                            |      kafka broker接收数据时的socker buffer，默认102400       |
|        socket.send.buffer.bytes         |                           1048576                            |      kafka broker发送数据时的socker buffer，默认102400       |
|          最大进程文件描述符数           |                            100000                            |                                                              |

>  NOTE：通常将文件落盘交由操作系统是一种较好的方式，而非 Kafka 主动强制落盘，因此可以将 Kafka 的落盘消息条数与落盘间隔调到最大，再调整操作系统的脏页策略：

```bash
# 永久修改脏页比例
# 系统默认10
echo "vm.dirty_background_ratio = 40" >> /etc/sysctl.conf
# 系统默认20
echo "vm.dirty_ratio = 80" >> /etc/sysctl.conf
sysctl -p /etc/sysctl.conf
```
调整磁盘的 I/O 参数，通过牺牲一定的内存提高磁盘吞吐量

```bash
# 指定一次操作可以排队的读、写请求最大量，提高该值可以提升磁盘吞吐量
echo 2048 > /sys/block/${device}/queue/nr_requests
# 指定设备的队列深度，提高该值可以稍微提升一点 I/O 性能
echo 128 > /sys/block/sda/device/queue_depth


# 增加磁盘预读，提升顺序读大文件的性能
echo 8192 > /sys/block/${device}/queue/read_ahead_kb
```



----

## Kafka MirrorMaker

### 通用
|             参数              |                             调整                             |              备注               |
| :---------------------------: | :----------------------------------------------------------: | :-----------------------------: |
| partition.assignment.strategy |     org.apache.kafka.clients.consumer.RoundRobinAssignor     | mirror maker分配partition的策略 |
|    mirror_maker_java_opts     | -XX:PermSize=48m -server -XX:+UseParNewGC -XX:+UseConcMarkSweepGC -XX:+CMSClassUnloadingEnabled -XX:+CMSScavengeBeforeRemark -XX:+DisableExplicitGC -Djava.awt.headless=true | 保持默认即可，jdk7下使用CMS算法 |
|  mirror_maker_max_heap_size   |                              4G                              | mirror最大堆内存，会传递给-Xmx  |

### Producer

|            参数             |  调整   |                             备注                             |
| :-------------------------: | :-----: | :----------------------------------------------------------: |
|        num.producers        |    -    |    根据mirrormaker实例跟partition数量具体计算，能整除即可    |
|         batch.size          |  256KB  |     一次batch的大小，默认 16KB，增大此值减少request请求      |
|        buffer.memory        |    -    | producer的大小，用于缓存/压缩消息，过小频繁写满会导致Consumer阻塞，参考值：partitions* batch.size |
|      compression.type       | snappy  |                           压缩类型                           |
| producer.request.timeout.ms |   30s   |                       producer超时时间                       |
|    receive.buffer.bytes     | 1048576 |             发送数据时的socket buffer，默认32768             |
|      send.buffer.bytes      | 1048576 |            接收数据时的socket buffer，默认131072             |


### Consumer
|            参数             |  调整   |                             备注                             |
| :--------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|num.streams|-|根据mirrormaker实例跟partition数量具体计算，能整除即可|
|consumer.request.timeout.ms|405s|Consumer等待请求的超时时间，要略大于 max.poll.interval.ms（默认300s）|
|max.poll.records|-|每次poll的最大条数，默认500，是具体场景调整|
|max.poll.interval.ms|400s|两次poll之间的最大间隔，应该大于业务处理的时间|
|session.timeout.ms|30s|Consumer 的会话超时时间，若超过该时间还没有收到 hearbeat，则会触发 group 内的 rebalance|
|receive.buffer.bytes|1048576|发送数据时的socket buffer，默认32768|
|send.buffer.bytes|1048576|接收数据时的socket buffer默认131072|

## Hive
|                      参数                      |                             调整                             |                             备注                             |
| :--------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|        启用小文件合并 - Map-Reduce 作业        |                             true                             |          MR作业结束后启动一个map-only作业合并小文件          |
|                  自动重启进程                  |                             true                             |                                                              |
| Hive Metastore Server 的 Java 堆栈大小（字节） |                             32G                              |                                                              |
|     Hive Metastore Server 的 Java 配置选项     | -Xms32g -XX:MaxPermSize=512M -XX:+UseG1GC -XX:MaxGCPauseMillis=50 -XX:InitiatingHeapOccupancyPercent=35 -XX:ConcGCThreads=16 | 原始配置：-XX:MaxPermSize=512M -XX:+UseParNewGC -XX:+UseConcMarkSweepGC -XX:CMSInitiatingOccupancyFraction=70 -XX:+CMSParallelRemarkEnabled |
|      HiveServer2 的 Java 堆栈大小（字节）      |                              8G                              |                                                              |
|    WebHCat Server 的 Java 堆栈大小（字节）     |                              4G                              |                                                              |
|           客户端 Java 堆大小（字节）           |                              4G                              |                                                              |
|          parquet.column.index.access           |                             true                             |         允许parquet通过index访问，从而支持column改名         |
|       hive.metastore.server.min.threads        |                              32                              |                    最小线程数，取超线程数                    |
|       hive.metastore.server.max.threads        |                              96                              |                   最大线程数，取超线程数*3                   |
|      hive.exec.reducers.bytes.per.reducer      |                            512MB                             |               每个reducer默认处理的数据量大小                |
|      hive.load.dynamic.partitions.thread       |                              32                              |                    加载动态分区时的线程数                    |
|      hive.exec.input.listing.max.threads       |                              32                              |    Hive用于读取文件列表的线程数，读取大量分区时可提高性能    |
|              hive.mv.files.thread              |                              32                              | Hive用于迁移数据时使用的线程，也可以在手动查询的时候另外指定 |
|          hive.msck.repair.batch.size           |                              12                              |               执行 msck 时批量发送到 metadata                |
|  mapreduce.job.reduce.slowstart.completedmaps  |                             0.35                             |       Map 完成的比例到达该值后才会为 Reducer 申请资源        |
|                                                |                                                              |                                                              |



在 **hive-site.xml 的 Hive 客户端高级配置代码段（安全阀）**、**hive-site.xml 的 Hive Metastore Server 高级配置代码段（安全阀）**、**hive-site.xml 的 HiveServer2 高级配置代码段（安全阀）** 添加如下配置：

```xml
<property>
    <name>mapreduce.map.memory.mb</name>
    <value>3072</value>
    <description>map端默认内存大小</description>
</property>
<property>
    <name>mapreduce.reduce.memory.mb</name>
    <value>5120</value>
    <description>reduce端默认内存大小</description>
</property>
<property>
    <name>mapred.max.split.size</name>
    <value>1536000000</value>
    <description>每个mapper理文件大小</description>
</property>
<property>
	<name>hive.exec.compress.output</name>
    <value>true</value>
    <description>是否开启压缩</description>
</property>
<property>
	<name>mapred.output.compression.codec</name>
    <value>org.apache.hadoop.io.compress.SnappyCodec</value>
    <description>使用的压缩方式</description>
</property>
<property>
	<name>mapred.output.compression.type</name>
    <value>block</value>
    <description>压缩对象</description>
</property>
```

如果需要在作业级别生效，则在命令行中设置：

```sql
SET mapreduce.map.memory.mb=3072;
SET mapred.max.split.size=1536000000;
set mapreduce.reduce.memory.mb=5120;
SET hive.exec.compress.output=true;
-- SET mapred.output.compression.codec=org.apache.hadoop.io.compress.GzipCodec;
SET mapred.output.compression.codec=org.apache.hadoop.io.compress.SnappyCodec;
SET mapred.output.compression.type=BLOCK;
```

作业常用设置项：

```sql

-- 每个map内存及处理数据量
set mapreduce.map.memory.mb=5120;
set mapred.max.split.size=1536000000;

-- 设置中间小文件切割的个数为集群dn数目
set mapreduce.job.max.split.locations=595
-- 每个reduce内存及处理数据量
set mapreduce.reduce.memory.mb=3072;
set mapreduce.reduce.java.opts=-Xmx2304m;
set hive.exec.reducers.bytes.per.reducer=1536000000;

-- 设置文件压缩
set hive.hadoop.supports.splittable.combineinputformat=true;
SET hive.exec.compress.output=true;
SET mapred.output.compression.codec=org.apache.hadoop.io.compress.GzipCodec;
SET mapred.output.compression.type=BLOCK;

-- 设置map/reduce小文件合并
set hive.input.format=org.apache.hadoop.hive.ql.io.CombineHiveInputFormat;
set hive.merge.mapfiles = true;
set hive.merge.mapredfiles = true;
set hive.merge.size.per.task = 256000000;
set hive.merge.smallfiles.avgsize=128000000;
set mapred.min.split.size.per.node=64000000;
set mapred.min.split.size.per.rack=128000000;

-- 开启动态分区
SET hive.exec.dynamic.partition=true;
SET hive.exec.dynamic.partition.mode=nonstrict;
SET hive.exec.max.dynamic.partitions.pernode = 1000;
SET hive.exec.max.dynamic.partitions=1000;

-- 开启并行，没有依赖关系的job可以并发执行
set hive.exec.parallel=true;
```

---

## Hue
|             参数              |     调整      |                             备注                             |
| :---------------------------: | :-----------: | :----------------------------------------------------------: |
|           time_zone           | Asia/Shanghai |                         时区，东八区                         |
|         enable_navopt         |     true      | 为hue开启查询优化帮助，(HueNavOptIntegration/tma1100@gdyd/tma1100@gdyd)具体参照https://docs.cloudera.com/documentation/enterprise/6/6.1/topics/hue_use_navopt_enable.html |
| 将 Hue 服务器绑定到通配符地址 |     true      |                                                              |
|         自动重启进程          |     true      |                                                              |

## Oozie
|                          参数                           |   调整   |                      备注                       |
| :-----------------------------------------------------: | :------: | :---------------------------------------------: |
|                oozie.processing.timezone                | GMT+0800 |                  时区，东八区                   |
|          Oozie Server 的 Java 堆栈大小（字节）          |   16G    |                                                 |
|          oozie.service.PurgeService.older.than          |   7天    |           保留已完成工作流作业的天数            |
| oozie.service.CallableQueueService.callable.concurrency |   3300   |                                                 |
|       oozie.service.CallableQueueService.threads        |    33    | oozie调度属于计算密集型，根据机器线程数设定即可 |
|                      自动重启进程                       |   true   |                                                 |


## Spark
|               参数                |  调整   |      备注       |
| :-------------------------------: | :-----: | :-------------: |
| spark.history.fs.cleaner.enabled  |  true   | 是否开启log清理 |
| spark.history.fs.cleaner.interval |   1天   |   log清理频率   |
|  spark.history.fs.cleaner.maxAge  |  14天   |   log保留时间   |
|           自动重启进程            |  true   |                 |
|  Default Application Deploy Mode  | cluster |                 |

## Zookeeper
|      参数      | 调整 |                             备注                             |
| :------------: | :--: | :----------------------------------------------------------: |
| maxClientCnxns | 1000 | 以 IP 地址标识的单个客户端可对 ZooKeeper 集合体中的单个成员进行的最大并发连接数（在套接字级别）。 |
|  自动重启进程  | true |                                                              |

## Cloudera Management Service
|                        参数                        | 调整 | 备注 |
| :------------------------------------------------: | :--: | :--: |
|     Activity Monitor 的 Java 堆栈大小（字节）      |  8G  |      |
|      Alert Publisher 的 Java 堆栈大小（字节）      |  8G  |      |
|        EventServer 的 Java 堆栈大小（字节）        |  8G  |      |
|       Host Monitor 的 Java 堆栈大小（字节）        |  8G  |      |
|          Host Monitor 的最大非 Java 内存           | 12G  |      |
|      Auditing Server 的 Java 堆栈大小（字节）      |  8G  |      |
| Navigator Metadata Server 的 Java 堆栈大小（字节） |  8G  |      |
|      Reports Manager 的 Java 堆栈大小（字节）      |  8G  |      |
|      Service Monitor 的 Java 堆栈大小（字节）      | 12G  |      |
|         Service Monitor 的最大非 Java 内存         | 12G  |      |

修改 `cloudera-scm-server` 服务内存：

```bash
# /etc/default/cloudera-scm-server
export CMF_JAVA_OPTS="-Xmx8G -XX:MaxPermSize=256m -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp"
```