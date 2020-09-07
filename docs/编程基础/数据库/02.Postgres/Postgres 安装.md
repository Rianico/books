---
title: Postgres 安装
date: 2020-07-22 08:18:23
---
## Postgres 安装

OS：CentOS 7.6

Postgres Version：9.6.19

默认安装路径： `/var/lib/pgsql/9.6`

组件说明：

| Component          | Comment                                          |
| ------------------ | ------------------------------------------------ |
| postgresql-client  | libraries and client binaries                    |
| postgresql-server  | core database server                             |
| postgresql-contrib | additional supplied modules                      |
| postgresql-devel   | libraries and headers for C language development |
| pgadmin4           | pgAdmin 4 graphical administration utility       |

## 1. 安装

### 1.1 在线安装

这里通过 yum 方式安装 pg：`yum -y install postgresql-server postgresql-contrib`，如果存在系统语言问题，则执行 `echo 'LC_ALL="en_US.UTF-8"' >> /etc/locale.conf`。

如果不需要修改路径，直接执行：`postgresql96-setup initdb && systemctl start postgresql-9.6 && systemctl enable postgresql-9.6` 即可。

postgres 可以在启动的时候指定路径：`pg_ctl -D /path/to/pg/data -l /path/to/pg/log/pgsql.log start`，但这样只是临时的，永久修改启动路径的操作如下：

1. 编辑 systemctl 的配置文件：

   ```bash
   vim /usr/lib/systemd/system/postgresql-9.6.service 
   # or use 'systemctl edit postgresql-9.6.service'
   ```

   > NOTE：如果是在 CentOS 6 下，则是修改 /etc/rc.d/init.d/postgresql-9.2 文件。

2. 找到 PGDATA , 修改如下：

   ```bash
   Environment=PGDATA=/path/to/pg/data
   ```

3. 重新加载 systemctl 服务： `systemctl daemon-reload`

4. 创建对应目录，用户为 postgres，权限为 700：

   ```
   chown -R postgres:postgres /path/to/pg
   chmod -R 700 /path/to/pg
   ```

5. 执行初始化数据库命令并启动：`postgresql-setup initdb`

6. 开启服务以及开机启动：`systemctl start postgresql && systemctl enable postgresql`

### 1.2 离线安装

首先到 Postgres 的[仓库](https://yum.postgresql.org/packages/)下载 client、contrib、libs、server 模块到一个目录下，接着执行：`rpm -ivh postgresql96-*.rpm` ，剩余操作同上。

# 2. 登录设置

根据具体需求修改登录权限，编辑 `/var/lib/pgsql/data/pg_hba.conf`， trust 表示免密：

```shell
# TYPE  DATABASE        USER            ADDRESS                 METHOD
host    all             all             127.0.0.1/32            trust
host    all             all             localhost               trust
```

编辑 `/var/lib/pgsql/9.2` ，开启全 ip 监听：

```shell
# listen_addresses = 'localhost'
listen_addresses = '*'
```

# 3. 配置修改

## 3.1 修改最大连接数

如果需要修改最大连接数 ，还需要修改信号量：

```bash
# vim /var/lib/pgsql/data/postgresql.conf
max_connections=10000
# vim /etc/sysctl.conf 
kernel.sem='250 250000 32 1000'
```

> NOTE：信号量类似于 Java 中的 monitor，一个进程获取到信号量后才可以执行临界区的代码。通常信号量都不需要设置，除了遇到 oracle、zabbix、postgres 这类程序。

## 3.2 迁移数据目录

1. 首先优雅的停止 postgres：`systemctl stop postgresql`

2. 接着将默认的数据目录迁移到新路径上：

   ```bash
   mv /var/lib/pgsql /path/to/pg
   ```

3. 修改新路径权限：

   ```bash
   chown -R postgres:postgres /path/to/pg
   chmod -R 700 /path/to/pg
   ```

4. 这里有两种方式可以修改数据目录：

   - 通过软连接的方式：`ln -s /path/to/pg/ /var/lib/pgsql`，较为简单，但是有时候难免会给人造成困惑。
   - 这种与安装 pg 时修改路径差不多：
     1. 修改 `/usr/lib/systemd/system/postgresql.service`  中的 `Environment=PGDATA=/path/to/pg/data`；
     2. （多了这一步）修改 `/path/to/pg/data/postgres.conf` 中的 `data_directory = '/path/to/pg/data'`
     3. 执行`systemctl daemon-reload`

5. 最后启动即可：`systemctl start postgresql && systemctl enable postgresql`。

# 4. 相关命令

1. 登录 pg：`psql -h <hostname or ip> -p <端口> [数据库名称] [用户名称]`。
2. 查看所有数据库：`\l`。
3. 显示更加详细的信息：`\d+`。
4. 切换数据库：`\c`：
   - 显示所有相关表：`\dt`；
   - 显示特定表结构：`\d tablename`。
   - 显示相关索引：`\di`；
   - 显示特定索引结构：`\d indexname`。
   - 显示相关序列：`\ds`；
   - 显示相关视图：`\dv`；
   - 显示相关函数：`\df`。
5. 显示表权限：`\dp`。
6. 显示表空间：`\db`。
7. 显示 schema：`\dn`。
8. 显示用户：`\du`。
9. 切换编码：`\encoding UTF8`。
10. 显示 sql 执行时间：`timing`。
11. 显示所有：`\d *。`
12. 将每列数据拆分为行显示：`\x `。
13. 列出当前连接信息：`\conninfo`。
14. 显示所有命令：`\?`。
15. 导入 csv 数据到表：`COPY <table_name> FROM '<file_path>' WITH csv;`