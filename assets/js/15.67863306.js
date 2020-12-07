(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{461:function(t,v,_){"use strict";_.r(v);var a=_(51),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"使用ycsb压测各种nosql数据库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用ycsb压测各种nosql数据库"}},[t._v("#")]),t._v(" 使用YCSB压测各种NoSQL数据库")]),t._v(" "),_("h2",{attrs:{id:"测试环境"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#测试环境"}},[t._v("#")]),t._v(" 测试环境")]),t._v(" "),_("ul",[_("li",[t._v("服务器 - "),_("code",[t._v("ProLiant DL380 Gen9")])]),t._v(" "),_("li",[t._v("OS - "),_("code",[t._v("CentOS 7")])]),t._v(" "),_("li",[t._v("DISK - "),_("code",[t._v("12*600GB Raid5")])]),t._v(" "),_("li",[t._v("CPU(24c) - "),_("code",[t._v("Intel(R) Xeon(R) CPU E5-2620 v3 @ 2.40GHz")])]),t._v(" "),_("li",[t._v("MEM - "),_("code",[t._v("64GB")])]),t._v(" "),_("li",[t._v("万M网卡")])]),t._v(" "),_("h2",{attrs:{id:"安装ycsb"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装ycsb"}},[t._v("#")]),t._v(" 安装YCSB")]),t._v(" "),_("p",[t._v("从"),_("a",{attrs:{href:"https://github.com/brianfrankcooper/YCSB/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("github"),_("OutboundLink")],1),t._v("官网下载完整版ycsb，也可以下源码编译，建议下载完整tar包，自己编译好多依赖包无法下载了。")]),t._v(" "),_("p",[_("strong",[t._v("PS：")]),t._v("\n安装过程中maven下载依赖需要×××，如果有安装失败的包，需要在能×××的服务器上下载手动安装，比如mongodb-async-driver-2.0.1.jar就需要×××，下面是手动安装方法:")]),t._v(" "),_("p",[t._v("1、 手动下载jar包 - "),_("code",[t._v("wget http://www.allanbank.com/repo/com/allanbank/mongodb-async-driver/2.0.1/mongodb-async-driver-2.0.1.jar")])]),t._v(" "),_("p",[t._v("2、 解压包，从pom.xml文件里面查看groupId、artifactId、version")]),t._v(" "),_("p",[t._v("3、 手动安装")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("mvn install:install-file -Dfile=/root/mongodb-async-driver-2.0.1.jar  -DgroupId=com.allanbank -DartifactId=mongodb-async-driver -Dversion=2.0.1 -Dpackaging=jar\nmvn -pl com.yahoo.ycsb:mongodb-binding -am clean package\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br")])]),_("p",[t._v("几种负载说明：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Workload")]),t._v(" "),_("th",[t._v("Operations")]),t._v(" "),_("th",[t._v("Application Examples")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("A – Update Heavy")]),t._v(" "),_("td",[t._v("Read: 50%, Update:50%")]),t._v(" "),_("td",[t._v("Session store recording recent actions in a user session")])]),t._v(" "),_("tr",[_("td",[t._v("B – Read Heavy")]),t._v(" "),_("td",[t._v("Read: 95%, Update:5%")]),t._v(" "),_("td",[t._v("Photo tagging: can add a tag in an update, but most operations are to read tags")])]),t._v(" "),_("tr",[_("td",[t._v("C – Read Only")]),t._v(" "),_("td",[t._v("Read: 100%")]),t._v(" "),_("td",[t._v("User profile cache, where profiles are constructed elsewhere (e.g. Hadoop)")])]),t._v(" "),_("tr",[_("td",[t._v("D – Read Latest")]),t._v(" "),_("td",[t._v("Read 95%, Insert: 5%")]),t._v(" "),_("td",[t._v("User status update")])])])]),t._v(" "),_("p",[_("strong",[t._v("压测文件参数说明：")])]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("fieldcount: 每条记录字段个数 (default: 10)\nfieldlength: 每个字段长度 (default: 100)\nreadallfields: 是否读取所有字段true或者读取一个字段false (default: true)\nreadproportion: 读取作业比例 (default: 0.95)\nupdateproportion: 更新作业比例 (default: 0.05)\ninsertproportion: 插入作业比例 (default: 0)\nscanproportion: 扫描作业比例 (default: 0)\nreadmodifywriteproportion: 读取一条记录修改它并写回的比例 (default: 0)\nrequestdistribution: 请求的分布规则 uniform, zipfian or latest (default: uniform)（uniform等概率随机选择记录, zipfian随机选择记录，存在热纪录, latest近期写入的记录)\nmaxscanlength: 扫描作业最大记录数 (default: 1000)\nscanlengthdistribution: 在1和最大扫描记录数的之间的分布规则 (default: uniform)\ninsertorder: 记录被插入的规则ordered或者hashed (default: hashed)\noperationcount: 执行的操作数.\nmaxexecutiontime: 执行操作的最长时间，当然如果没有超过这个时间以运行时间为主。\ntable: 测试表的名称 (default: usertable)\nrecordcount: 加载到数据库的纪录条数 (default: 0)\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br"),_("span",{staticClass:"line-number"},[t._v("11")]),_("br"),_("span",{staticClass:"line-number"},[t._v("12")]),_("br"),_("span",{staticClass:"line-number"},[t._v("13")]),_("br"),_("span",{staticClass:"line-number"},[t._v("14")]),_("br"),_("span",{staticClass:"line-number"},[t._v("15")]),_("br"),_("span",{staticClass:"line-number"},[t._v("16")]),_("br")])]),_("h2",{attrs:{id:"简单测试"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简单测试"}},[t._v("#")]),t._v(" 简单测试")]),t._v(" "),_("ul",[_("li",[t._v("修改配置文件"),_("code",[t._v("vi /YCSB/workloads/workloada")])])]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("recordcount=2000000\noperationcount=2000000\nworkload=com.yahoo.ycsb.workloads.CoreWorkload\nreadallfields=true\nreadproportion=0.5\nupdateproportion=0.2\nscanproportion=0\ninsertproportion=0.3\nrequestdistribution=zipfian\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br")])]),_("ul",[_("li",[t._v("加载数据 - "),_("code",[t._v('/bin/ycsb load redis -p redis.host="" -p redis.port="6379" -p redis.cluster="true" -P workloads/workloada -s')])]),t._v(" "),_("li",[t._v("执行测试 - "),_("code",[t._v('./bin/ycsb run redis -P workloads/workloada -p redis.host="" -p redis.port="6379" -p redis.cluster="true" -s -threads 10')])])]),t._v(" "),_("h2",{attrs:{id:"redis测试"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis测试"}},[t._v("#")]),t._v(" Redis测试")]),t._v(" "),_("ul",[_("li",[t._v("加载数据 - "),_("code",[t._v('./bin/ycsb load redis -p redis.host="" -p redis.port="6379" -p redis.cluster="true" -P workloads/workloada -s -threads 100')])]),t._v(" "),_("li",[t._v("运行测试 - "),_("code",[t._v('./bin/ycsb run redis -p redis.host="" -p redis.port="6379" -p redis.cluster="true" -P workloads/workloada -s -threads 100')]),t._v(" "),_("blockquote",[_("p",[t._v("threads分别设置为32、64、128、256、512、100、200、300、500。")])])]),t._v(" "),_("li",[t._v("测试结果1 - "),_("strong",[t._v("单实例")])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("threads")]),t._v(" "),_("th",[t._v("Throughput(ops/sec)")]),t._v(" "),_("th",[t._v("【READ】95thLatency(us)")]),t._v(" "),_("th",[t._v("【UPDATE】95thLatency(us)")]),t._v(" "),_("th",[t._v("【INSERT】95thLatency(us)")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("32")]),t._v(" "),_("td",[t._v("68534")]),t._v(" "),_("td",[t._v("557")]),t._v(" "),_("td",[t._v("537")]),t._v(" "),_("td",[t._v("1036")])]),t._v(" "),_("tr",[_("td",[t._v("64")]),t._v(" "),_("td",[t._v("80335")]),t._v(" "),_("td",[t._v("924")]),t._v(" "),_("td",[t._v("901")]),t._v(" "),_("td",[t._v("1698")])]),t._v(" "),_("tr",[_("td",[t._v("128")]),t._v(" "),_("td",[t._v("82964")]),t._v(" "),_("td",[t._v("1871")]),t._v(" "),_("td",[t._v("1853")]),t._v(" "),_("td",[t._v("3363")])]),t._v(" "),_("tr",[_("td",[t._v("256")]),t._v(" "),_("td",[t._v("81645")]),t._v(" "),_("td",[t._v("3677")]),t._v(" "),_("td",[t._v("6575")]),t._v(" "),_("td",[t._v("3663")])]),t._v(" "),_("tr",[_("td",[t._v("512")]),t._v(" "),_("td",[t._v("84126")]),t._v(" "),_("td",[t._v("7311")]),t._v(" "),_("td",[t._v("7303")]),t._v(" "),_("td",[t._v("13407")])])])]),t._v(" "),_("ul",[_("li",[t._v("测试结果2 - "),_("strong",[t._v("cluster")])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("threads")]),t._v(" "),_("th",[t._v("Throughput(ops/sec)")]),t._v(" "),_("th",[t._v("【READ】95thLatency(us)")]),t._v(" "),_("th",[t._v("【UPDATE】95thLatency(us)")]),t._v(" "),_("th",[t._v("【INSERT】95thLatency(us)")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("32")]),t._v(" "),_("td",[t._v("149557")]),t._v(" "),_("td",[t._v("313")]),t._v(" "),_("td",[t._v("306")]),t._v(" "),_("td",[t._v("531")])]),t._v(" "),_("tr",[_("td",[t._v("64")]),t._v(" "),_("td",[t._v("192359")]),t._v(" "),_("td",[t._v("710")]),t._v(" "),_("td",[t._v("715")]),t._v(" "),_("td",[t._v("951")])]),t._v(" "),_("tr",[_("td",[t._v("128")]),t._v(" "),_("td",[t._v("204850")]),t._v(" "),_("td",[t._v("1612")]),t._v(" "),_("td",[t._v("1630")]),t._v(" "),_("td",[t._v("2035")])]),t._v(" "),_("tr",[_("td",[t._v("256")]),t._v(" "),_("td",[t._v("200068")]),t._v(" "),_("td",[t._v("3349")]),t._v(" "),_("td",[t._v("3383")]),t._v(" "),_("td",[t._v("4107")])]),t._v(" "),_("tr",[_("td",[t._v("512")]),t._v(" "),_("td",[t._v("155998")]),t._v(" "),_("td",[t._v("6483")]),t._v(" "),_("td",[t._v("6547")]),t._v(" "),_("td",[t._v("8015")])])])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("测试结果3 - "),_("strong",[t._v("sentinel")])]),t._v(" "),_("blockquote",[_("p",[t._v("不支持sentinel模式测试")])])])]),t._v(" "),_("h2",{attrs:{id:"mongodb测试"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mongodb测试"}},[t._v("#")]),t._v(" mongodb测试")]),t._v(" "),_("ul",[_("li",[t._v("加载数据 - "),_("code",[t._v("./bin/ycsb load mongodb-async -P workloads/workloada -p mongodb.url=mongodb://x.x.x.x:27017/ycsb?w=0 -s -threads 100")])]),t._v(" "),_("li",[t._v("运行测试 - "),_("code",[t._v("./bin/ycsb run mongodb-async -P workloads/workloada -p mongodb.url=mongodb://x.x.x.x:27017/ycsb?w=0 -s -threads 100")])]),t._v(" "),_("li",[t._v("测试结果 - "),_("strong",[t._v("单节点")])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("threads")]),t._v(" "),_("th",[t._v("Throughput(ops/sec)")]),t._v(" "),_("th",[t._v("【READ】95thLatency(us)")]),t._v(" "),_("th",[t._v("【UPDATE】95thLatency(us)")]),t._v(" "),_("th",[t._v("【INSERT】95thLatency(us)")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("32")]),t._v(" "),_("td",[t._v("44781")]),t._v(" "),_("td",[t._v("1867")]),t._v(" "),_("td",[t._v("49")]),t._v(" "),_("td",[t._v("56")])]),t._v(" "),_("tr",[_("td",[t._v("64")]),t._v(" "),_("td",[t._v("59232")]),t._v(" "),_("td",[t._v("5279")]),t._v(" "),_("td",[t._v("69")]),t._v(" "),_("td",[t._v("76")])]),t._v(" "),_("tr",[_("td",[t._v("128")]),t._v(" "),_("td",[t._v("37805")]),t._v(" "),_("td",[t._v("11711")]),t._v(" "),_("td",[t._v("84")]),t._v(" "),_("td",[t._v("99")])])])]),t._v(" "),_("ul",[_("li",[t._v("测试结果 - "),_("strong",[t._v("副本集")])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("threads")]),t._v(" "),_("th",[t._v("Throughput(ops/sec)")]),t._v(" "),_("th",[t._v("【READ】95thLatency(us)")]),t._v(" "),_("th",[t._v("【UPDATE】95thLatency(us)")]),t._v(" "),_("th",[t._v("【INSERT】95thLatency(us)")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("32")]),t._v(" "),_("td",[t._v("6519")]),t._v(" "),_("td",[t._v("47071")]),t._v(" "),_("td",[t._v("59")]),t._v(" "),_("td",[t._v("50")])]),t._v(" "),_("tr",[_("td",[t._v("64")]),t._v(" "),_("td",[t._v("23392")]),t._v(" "),_("td",[t._v("16543")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("100")]),t._v(" "),_("td",[t._v("23136")]),t._v(" "),_("td",[t._v("29487")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])])])]),t._v(" "),_("h2",{attrs:{id:"aerospike测试"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#aerospike测试"}},[t._v("#")]),t._v(" aerospike测试")]),t._v(" "),_("p",[t._v("AS加载数据后insert会报错，这里修改"),_("code",[t._v("insertproportion=0")]),t._v("。")]),t._v(" "),_("ul",[_("li",[t._v("加载数据 - "),_("code",[t._v('./bin/ycsb load aerospike -p as.host="" -p as.port="3000" -p as.namespace="testns" -P workloads/workloada -s -threads 100')])]),t._v(" "),_("li",[t._v("运行测试 - "),_("code",[t._v('./bin/ycsb run aerospike -p as.host="" -p as.port="3000" -p as.namespace="testns" -P workloads/workloada -s -threads 100')])]),t._v(" "),_("li",[t._v("测试结果 - "),_("strong",[t._v("单实例")])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("threads")]),t._v(" "),_("th",[t._v("Throughput(ops/sec)")]),t._v(" "),_("th",[t._v("【READ】95thLatency(us)")]),t._v(" "),_("th",[t._v("【INSERT】95thLatency(us)")]),t._v(" "),_("th",[t._v("【UPDATE】95thLatency(us)")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("32")]),t._v(" "),_("td",[t._v("37843")]),t._v(" "),_("td",[t._v("5811")]),t._v(" "),_("td",[t._v("null")]),t._v(" "),_("td",[t._v("2805")])]),t._v(" "),_("tr",[_("td",[t._v("64")]),t._v(" "),_("td",[t._v("115280")]),t._v(" "),_("td",[t._v("3025")]),t._v(" "),_("td",[t._v("null")]),t._v(" "),_("td",[t._v("2719")])]),t._v(" "),_("tr",[_("td",[t._v("128")]),t._v(" "),_("td",[t._v("161313")]),t._v(" "),_("td",[t._v("3779")]),t._v(" "),_("td",[t._v("null")]),t._v(" "),_("td",[t._v("3701")])]),t._v(" "),_("tr",[_("td",[t._v("256")]),t._v(" "),_("td",[t._v("196993")]),t._v(" "),_("td",[t._v("4703")]),t._v(" "),_("td",[t._v("null")]),t._v(" "),_("td",[t._v("4611")])]),t._v(" "),_("tr",[_("td",[t._v("512")]),t._v(" "),_("td",[t._v("235443")]),t._v(" "),_("td",[t._v("6851")]),t._v(" "),_("td",[t._v("null")]),t._v(" "),_("td",[t._v("6827")])])])]),t._v(" "),_("ul",[_("li",[t._v("测试结果 - "),_("strong",[t._v("3节点集群")])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("threads")]),t._v(" "),_("th",[t._v("Throughput(ops/sec)")]),t._v(" "),_("th",[t._v("【READ】95thLatency(us)")]),t._v(" "),_("th",[t._v("【INSERT】95thLatency(us)")]),t._v(" "),_("th",[t._v("【UPDATE】95thLatency(us)")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("32")]),t._v(" "),_("td",[t._v("138448")]),t._v(" "),_("td",[t._v("266")]),t._v(" "),_("td",[t._v("null")]),t._v(" "),_("td",[t._v("705")])]),t._v(" "),_("tr",[_("td",[t._v("64")]),t._v(" "),_("td",[t._v("197562")]),t._v(" "),_("td",[t._v("299")]),t._v(" "),_("td",[t._v("null")]),t._v(" "),_("td",[t._v("1536")])]),t._v(" "),_("tr",[_("td",[t._v("128")]),t._v(" "),_("td",[t._v("237343")]),t._v(" "),_("td",[t._v("640")]),t._v(" "),_("td",[t._v("null")]),t._v(" "),_("td",[t._v("3385")])]),t._v(" "),_("tr",[_("td",[t._v("256")]),t._v(" "),_("td",[t._v("282637")]),t._v(" "),_("td",[t._v("1445")]),t._v(" "),_("td",[t._v("null")]),t._v(" "),_("td",[t._v("251")])]),t._v(" "),_("tr",[_("td",[t._v("512")]),t._v(" "),_("td",[t._v("326743")]),t._v(" "),_("td",[t._v("2915")]),t._v(" "),_("td",[t._v("null")]),t._v(" "),_("td",[t._v("7679")])])])]),t._v(" "),_("h2",{attrs:{id:"scylladb测试"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#scylladb测试"}},[t._v("#")]),t._v(" scylladb测试")]),t._v(" "),_("ul",[_("li",[t._v("创建测试keyspace、table。")])]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("cqlsh> create keyspace ycsb\n    WITH REPLICATION = {'class' : 'SimpleStrategy', 'replication_factor': 2 };\ncqlsh> USE ycsb;\ncqlsh> create table usertable (\n    y_id varchar primary key,\n    field0 varchar,\n    field1 varchar,\n    field2 varchar,\n    field3 varchar,\n    field4 varchar,\n    field5 varchar,\n    field6 varchar,\n    field7 varchar,\n    field8 varchar,\n    field9 varchar);\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br"),_("span",{staticClass:"line-number"},[t._v("11")]),_("br"),_("span",{staticClass:"line-number"},[t._v("12")]),_("br"),_("span",{staticClass:"line-number"},[t._v("13")]),_("br"),_("span",{staticClass:"line-number"},[t._v("14")]),_("br"),_("span",{staticClass:"line-number"},[t._v("15")]),_("br")])]),_("ul",[_("li",[t._v("加载数据 - "),_("code",[t._v('./bin/ycsb load cassandra-cql -p hosts="" -p port="9042" -p cassandra.keyspace="ycsb" -P workloads/workloada -s -threads 100')])]),t._v(" "),_("li",[t._v("运行测试 - "),_("code",[t._v('./bin/ycsb run cassandra-cql -p hosts="" -p port="9042" -p cassandra.keyspace="ycsb" -P workloads/workloada -s -threads 100 -p cassandra.coreconnections="8" -p cassandra.maxconnections="8"')])]),t._v(" "),_("li",[t._v("测试结果 - "),_("strong",[t._v("单实例")])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("threads")]),t._v(" "),_("th",[t._v("Throughput(ops/sec)")]),t._v(" "),_("th",[t._v("【READ】95thLatency(us)")]),t._v(" "),_("th",[t._v("【UPDATE】95thLatency(us)")]),t._v(" "),_("th",[t._v("【INSERT】95thLatency(us)")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("32")]),t._v(" "),_("td",[t._v("52312")]),t._v(" "),_("td",[t._v("1687")]),t._v(" "),_("td",[t._v("1524")]),t._v(" "),_("td",[t._v("1802")])]),t._v(" "),_("tr",[_("td",[t._v("64")]),t._v(" "),_("td",[t._v("48576")]),t._v(" "),_("td",[t._v("2703")]),t._v(" "),_("td",[t._v("2655")]),t._v(" "),_("td",[t._v("2677")])]),t._v(" "),_("tr",[_("td",[t._v("128")]),t._v(" "),_("td",[t._v("58088")]),t._v(" "),_("td",[t._v("3257")]),t._v(" "),_("td",[t._v("2689")]),t._v(" "),_("td",[t._v("2723")])]),t._v(" "),_("tr",[_("td",[t._v("256")]),t._v(" "),_("td",[t._v("76068")]),t._v(" "),_("td",[t._v("3257")]),t._v(" "),_("td",[t._v("3439")]),t._v(" "),_("td",[t._v("3507")])]),t._v(" "),_("tr",[_("td",[t._v("512")]),t._v(" "),_("td",[t._v("88802")]),t._v(" "),_("td",[t._v("5487")]),t._v(" "),_("td",[t._v("5763")]),t._v(" "),_("td",[t._v("5843")])])])]),t._v(" "),_("ul",[_("li",[t._v("测试结果 - "),_("strong",[t._v("3节点集群")])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("threads")]),t._v(" "),_("th",[t._v("Throughput(ops/sec)")]),t._v(" "),_("th",[t._v("【READ】95thLatency(us)")]),t._v(" "),_("th",[t._v("【UPDATE】95thLatency(us)")]),t._v(" "),_("th",[t._v("【INSERT】95thLatency(us)")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("32")]),t._v(" "),_("td",[t._v("31756")]),t._v(" "),_("td",[t._v("2995")]),t._v(" "),_("td",[t._v("3075")]),t._v(" "),_("td",[t._v("3235")])]),t._v(" "),_("tr",[_("td",[t._v("64")]),t._v(" "),_("td",[t._v("42313")]),t._v(" "),_("td",[t._v("4651")]),t._v(" "),_("td",[t._v("4927")]),t._v(" "),_("td",[t._v("5075")])]),t._v(" "),_("tr",[_("td",[t._v("128")]),t._v(" "),_("td",[t._v("46820")]),t._v(" "),_("td",[t._v("7899")]),t._v(" "),_("td",[t._v("8695")]),t._v(" "),_("td",[t._v("8871")])]),t._v(" "),_("tr",[_("td",[t._v("256")]),t._v(" "),_("td",[t._v("51068")]),t._v(" "),_("td",[t._v("14575")]),t._v(" "),_("td",[t._v("17279")]),t._v(" "),_("td",[t._v("17519")])]),t._v(" "),_("tr",[_("td",[t._v("512")]),t._v(" "),_("td",[t._v("55364")]),t._v(" "),_("td",[t._v("26319")]),t._v(" "),_("td",[t._v("35583")]),t._v(" "),_("td",[t._v("36063")])])])]),t._v(" "),_("p",[_("strong",[t._v("SSD盘测试结果")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("threads")]),t._v(" "),_("th",[t._v("Throughput(ops/sec)")]),t._v(" "),_("th",[t._v("【READ】99thLatency(us)")]),t._v(" "),_("th",[t._v("【UPDATE】95thLatency(us)")]),t._v(" "),_("th",[t._v("【INSERT】95thLatency(us)")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("100")]),t._v(" "),_("td",[t._v("420000")]),t._v(" "),_("td",[t._v("2315")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")])]),t._v(" "),_("tr",[_("td",[t._v("200")]),t._v(" "),_("td",[t._v("520680")]),t._v(" "),_("td",[t._v("4435")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")])])])]),t._v(" "),_("h2",{attrs:{id:"cassandra测试"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cassandra测试"}},[t._v("#")]),t._v(" cassandra测试")]),t._v(" "),_("ul",[_("li",[t._v("创建测试keyspace、table。")])]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("cqlsh> create keyspace ycsb\n    WITH REPLICATION = {'class' : 'SimpleStrategy', 'replication_factor': 2 };\ncqlsh> USE ycsb;\ncqlsh> create table usertable (\n    y_id varchar primary key,\n    field0 varchar,\n    field1 varchar,\n    field2 varchar,\n    field3 varchar,\n    field4 varchar,\n    field5 varchar,\n    field6 varchar,\n    field7 varchar,\n    field8 varchar,\n    field9 varchar);\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br"),_("span",{staticClass:"line-number"},[t._v("11")]),_("br"),_("span",{staticClass:"line-number"},[t._v("12")]),_("br"),_("span",{staticClass:"line-number"},[t._v("13")]),_("br"),_("span",{staticClass:"line-number"},[t._v("14")]),_("br"),_("span",{staticClass:"line-number"},[t._v("15")]),_("br")])]),_("ul",[_("li",[t._v("加载数据 - "),_("code",[t._v('./bin/ycsb load cassandra-cql -p hosts="" -p port="9042" -p cassandra.keyspace="ycsb" -P workloads/workloada -s -threads 100')])]),t._v(" "),_("li",[t._v("运行测试 - "),_("code",[t._v('./bin/ycsb run cassandra-cql -p hosts="" -p port="9042" -p cassandra.keyspace="ycsb" -P workloads/workloada -s -threads 100 -p cassandra.coreconnections="8" -p cassandra.maxconnections="8"')])]),t._v(" "),_("li",[t._v("测试结果 - "),_("strong",[t._v("单实例")])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("threads")]),t._v(" "),_("th",[t._v("Throughput(ops/sec)")]),t._v(" "),_("th",[t._v("【READ】95thLatency(us)")]),t._v(" "),_("th",[t._v("【UPDATE】95thLatency(us)")]),t._v(" "),_("th",[t._v("【INSERT】95thLatency(us)")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("32")]),t._v(" "),_("td",[t._v("27455")]),t._v(" "),_("td",[t._v("4323")]),t._v(" "),_("td",[t._v("3845")]),t._v(" "),_("td",[t._v("3959")])]),t._v(" "),_("tr",[_("td",[t._v("64")]),t._v(" "),_("td",[t._v("46157")]),t._v(" "),_("td",[t._v("4919")]),t._v(" "),_("td",[t._v("4023")]),t._v(" "),_("td",[t._v("4155")])]),t._v(" "),_("tr",[_("td",[t._v("128")]),t._v(" "),_("td",[t._v("53890")]),t._v(" "),_("td",[t._v("6347")]),t._v(" "),_("td",[t._v("3079")]),t._v(" "),_("td",[t._v("3299")])]),t._v(" "),_("tr",[_("td",[t._v("256")]),t._v(" "),_("td",[t._v("大量GC，无法测")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")])])]),t._v(" "),_("ul",[_("li",[t._v("测试结果 - "),_("strong",[t._v("3节点集群")])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("threads")]),t._v(" "),_("th",[t._v("Throughput(ops/sec)")]),t._v(" "),_("th",[t._v("【READ】95thLatency(us)")]),t._v(" "),_("th",[t._v("【UPDATE】95thLatency(us)")]),t._v(" "),_("th",[t._v("【INSERT】95thLatency(us)")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("32")]),t._v(" "),_("td",[t._v("48001")]),t._v(" "),_("td",[t._v("3537")]),t._v(" "),_("td",[t._v("852")]),t._v(" "),_("td",[t._v("1455")])]),t._v(" "),_("tr",[_("td",[t._v("64")]),t._v(" "),_("td",[t._v("63581")]),t._v(" "),_("td",[t._v("4475")]),t._v(" "),_("td",[t._v("2845")]),t._v(" "),_("td",[t._v("3365")])]),t._v(" "),_("tr",[_("td",[t._v("128")]),t._v(" "),_("td",[t._v("89440")]),t._v(" "),_("td",[t._v("4479")]),t._v(" "),_("td",[t._v("3849")]),t._v(" "),_("td",[t._v("4073")])]),t._v(" "),_("tr",[_("td",[t._v("256")]),t._v(" "),_("td",[t._v("85282")]),t._v(" "),_("td",[t._v("7791")]),t._v(" "),_("td",[t._v("5831")]),t._v(" "),_("td",[t._v("7843")])]),t._v(" "),_("tr",[_("td",[t._v("512")]),t._v(" "),_("td",[t._v("80720")]),t._v(" "),_("td",[t._v("18319")]),t._v(" "),_("td",[t._v("9119")]),t._v(" "),_("td",[t._v("9207")])])])])])}),[],!1,null,null,null);v.default=s.exports}}]);