---
title: 介绍
autoNext: 01.修改表字段类型后旧分区字段不更新类型
---



# Hive

作业常用优化项：

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

