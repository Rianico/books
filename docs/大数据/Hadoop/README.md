---
title: 介绍
autoNext: 01.cdh安装parcel时异常处理
---

# Hadoop

Hadoop Example WordCount：

```bash
# 上传文件
hdfs dfs -put test.txt /test
# 启动 Hadoop
hadoop jar /usr/hdp/current/hadoop-mapreduce-client/hadoop-mapreduce-examples.jar wordcount /test /mr_output
# 查看结果
hdfs dfs -cat /mr_output/part-r-00000
```

以可读方式解析 edit log

```bash
hdfs oev -i edit._xxxxxxxxx -o edit_myformat.xml -p XML
```

