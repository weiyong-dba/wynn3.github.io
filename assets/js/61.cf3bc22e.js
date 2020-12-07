(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{416:function(s,e,t){"use strict";t.r(e);var a=t(51),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"redis高可用架构之sentinel配置管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis高可用架构之sentinel配置管理"}},[s._v("#")]),s._v(" Redis高可用架构之Sentinel配置管理")]),s._v(" "),t("h2",{attrs:{id:"结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结构"}},[s._v("#")]),s._v(" 结构")]),s._v(" "),t("p",[s._v("sentinel可以让redis实现主从复制，当一个集群中的master失效之后，sentinel可以选举出一个新的master用于自动接替master的工作，集群中的其他redis服务器自动指向新的master同步数据。一般建议sentinel采取奇数台，防止某一台sentinel无法连接到master导致误切换。其结构如下:")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/redis/sentinal-struct.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),t("p",[t("strong",[s._v("编译sentinel")])]),s._v(" "),t("ul",[t("li",[s._v("unzip redis-2.8.zip")]),s._v(" "),t("li",[s._v("mv redis-2.8 /usr/local")]),s._v(" "),t("li",[s._v("cd /usr/local")]),s._v(" "),t("li",[s._v("mv redis-2.8 sentinel")]),s._v(" "),t("li",[s._v("cd sentinel")]),s._v(" "),t("li",[s._v("make")])]),s._v(" "),t("p",[t("strong",[s._v("编辑"),t("code",[s._v("sentinel.conf")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v("EOF"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("sentinel.conf\nport "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26379")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("bind")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" /tmp\ndaemonize "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\nsentinel down-after-milliseconds identification_master "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30000")]),s._v("\nsentinel parallel-syncs identification_master "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsentinel failover-timeout identification_master "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("180000")]),s._v("\nlogfile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/sentinel/sentinel.log"')]),s._v("\nEOF\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[t("strong",[s._v("编辑启动脚本"),t("code",[s._v("start.sh")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v("EOF"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("start.sh\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" /usr/local/sentinel/redis-sentinel /usr/local/sentinel/sentinel.conf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /usr/local/sentinel/sentinel.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v("\nEOF\n或者\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v("EOF"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/lib/systemd/system/sentinel26379.service \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sentinel26379\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("forking\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("User")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("redis\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Group")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("redis\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/sentinel/src/redis-sentinel /usr/local/sentinel/sentinel.conf\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PrivateTmp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TimeoutSec")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\nEOF\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[t("strong",[s._v("启动服务")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl enable sentinel26379.service\nsystemctl start sentinel26379.service \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("添加redis监控")])]),s._v(" "),t("p",[s._v("执行"),t("code",[s._v("sentinel monitor <masterName> <ip> <port> <quorum>")]),s._v("，添加redis实例到sentinel。")]),s._v(" "),t("ul",[t("li",[s._v("masterName - 监控服务名")]),s._v(" "),t("li",[s._v("ip - master实例ip")]),s._v(" "),t("li",[s._v("port - master实例端口")]),s._v(" "),t("li",[s._v("quorum - 需要投票的sentinel实例数")])]),s._v(" "),t("h2",{attrs:{id:"管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管理"}},[s._v("#")]),s._v(" 管理")]),s._v(" "),t("h3",{attrs:{id:"sentinel状态持久化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sentinel状态持久化"}},[s._v("#")]),s._v(" Sentinel状态持久化")]),s._v(" "),t("p",[s._v("snetinel的状态会被持久化地写入sentinel的配置文件中。每次当收到一个新的配置时，或者新创建一个配置时，配置会被持久化到硬盘中，并带上配置的版本戳。因此可以安全的停止和重启sentinel进程。")]),s._v(" "),t("h3",{attrs:{id:"sentinel作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sentinel作用"}},[s._v("#")]),s._v(" Sentinel作用")]),s._v(" "),t("ul",[t("li",[s._v("Master状态检测")]),s._v(" "),t("li",[s._v("如果Master异常，则会进行Master-Slave切换，将其中一个Slave作为Master，将之前的Master作为Slave。")]),s._v(" "),t("li",[s._v("Master-Slave切换后，master_redis.conf、slave_redis.conf和sentinel.conf的内容都会发生改变，即master_redis.conf中会多一行slaveof的配置，sentinel.conf的监控目标会随之调换。")])]),s._v(" "),t("h3",{attrs:{id:"sentinel命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sentinel命令"}},[s._v("#")]),s._v(" Sentinel命令")]),s._v(" "),t("p",[s._v("登录到sentinel节点后执行的命令，比如执行"),t("code",[s._v("redis-cli -h 192.168.10.203 -p 26379")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("* PING - 返回PONG\n* SENTINEL masters - 列出所有被监视的主服务器，以及这些主服务器的当前状态。\n* SENTINEL slaves <master name> - 列出给定主服务器的所有从服务器的当前状态。\n* SENTINEL get-master-addr-by-name <master name> - 返回给定名字的主服务器的IP地址和端口号。\n* SENTINEL reset <pattern> - 重置所有名字和给定模式pattern相匹配的主服务器。 pattern参数是一个Glob风格的模式。重置操作清楚主服务器目前的所有状态，包括正在执行中的故障转移，并移除目前已经发现和关联的，主服务器的所有从服务器和Sentinel。\n* SENTINEL failover <master name> - 当主服务器失效时，在不询问其他 Sentinel意见的情况下，强制开始一次自动故障迁移。（不过发起故障转移的Sentinel 会向其他Sentinel发送一个新的配置，其他Sentinel会根据这个配置进行相应的更新，slave-priority低的slave优先提升为master）。\n* SENTINEL MONITOR <name> <ip> <port> <quorum> - 这个命令告诉sentinel去监听一个新的master。\n* SENTINEL REMOVE <name> - 命令sentinel放弃对某个master的监听。\n* SENTINEL SET <name> <option> <value> : 这个命令很像Redis的CONFIG SET命令，用来改变指定master的配置。支持多个optionvalue。\n\t* 例如以下实例：SENTINEL SET objects-cache-master down-after-milliseconds 1000\n只要是配置文件中存在的配置项，都可以用SENTINEL SET命令来设置。这个还可以用来设置master的属性，比如说quorum(票数)，而不需要先删除master，再重新添加master。\n\t* 例如：SENTINEL SET objects-cache-master quorum 5\n* SENTINEL get-master-addr-by-name <master name> - 获取当前的主服务器IP地址和端口号。\n* SENTINEL slaves <master name> - 获取所有的Slaves信息。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);