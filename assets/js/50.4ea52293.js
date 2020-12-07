(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{428:function(s,a,e){"use strict";e.r(a);var t=e(51),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"aerospike管理手册"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aerospike管理手册"}},[s._v("#")]),s._v(" Aerospike管理手册")]),s._v(" "),e("h2",{attrs:{id:"查找所有的namespace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查找所有的namespace"}},[s._v("#")]),s._v(" 查找所有的namespace")]),s._v(" "),e("ul",[e("li",[s._v("show namespaces")]),s._v(" "),e("li",[s._v("show sets")]),s._v(" "),e("li",[s._v("show bins")])]),s._v(" "),e("h2",{attrs:{id:"索引管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引管理"}},[s._v("#")]),s._v(" 索引管理")]),s._v(" "),e("p",[s._v("创建索引"),e("code",[s._v("CREATE INDEX <index> ON <ns>[.<set>] (<bin>) <type>")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("* <index> - 索引名称，在一个命名空间上索引名称必须唯一；\n* <ns> - 命名空间；\n* <set>设置是可选的，如果没有设置，则索引的记录不属于一个set；\n* <bin>根据bin建立索引\n* <type>索引存储的类型，必须是：NUMERIC or STRING；NUMERIC只索引bin中类型是NUMERIC的行\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("显示ns下的所有的索引信息"),e("code",[s._v("show indexes <ns>")])]),s._v(" "),e("p",[s._v("删除索引"),e("code",[s._v("drop index <index>")])]),s._v(" "),e("p",[s._v("修复索引"),e("code",[s._v('asinfo -v "sindex-repair:ns=test;indexname=numindex;set=testset;"')])]),s._v(" "),e("h2",{attrs:{id:"查询和扫描管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询和扫描管理"}},[s._v("#")]),s._v(" 查询和扫描管理")]),s._v(" "),e("ul",[e("li",[s._v("启用查询跟踪"),e("code",[s._v('asinfo -v "set-config:context=service;query-job-tracking=true"')])]),s._v(" "),e("li",[s._v("停止查询跟踪"),e("code",[s._v('asinfo -v "set-config:context=service;query-job-tracking=false"')])]),s._v(" "),e("li",[s._v("正在运行的查询"),e("code",[s._v("show queriess")])]),s._v(" "),e("li",[s._v("正在运行的扫描"),e("code",[s._v("show scan")])]),s._v(" "),e("li",[s._v("结束正在运行的任务")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("KILL_QUERY <transaction_id>\nKILL_SCAN <scan_id>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"查询记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询记录"}},[s._v("#")]),s._v(" 查询记录")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SELECT * FROM <ns>[.<set>]\nSELECT <bin>[, <bin>[, ...]] FROM <ns>[.<set>]\nSELECT <bin>[, <bin>[, ...]] FROM <ns>[.<set>] WHERE [<predicate>]\n<predicate>只能用在加索引的bin上，没有索引或者索引类型不一致的where报错：Error: (201) AEROSPIKE_ERR_INDEX_NOT_FOUND\n<bin> BETWEEN <lower> AND <upper>，只有NUMERIC支持范围查询\n<bin> = <value>\n\x3c!--显示PK--\x3e\nSET KEY_SEND TRUE\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h2",{attrs:{id:"操作记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作记录"}},[s._v("#")]),s._v(" 操作记录")]),s._v(" "),e("ul",[e("li",[s._v("插入记录"),e("code",[s._v("INSERT INTO test.demo (PK, foo, bar) VALUES ('key1', 123, 'abc')")])]),s._v(" "),e("li",[s._v("删除记录"),e("code",[s._v("DELETE FROM <ns>[.<set>] WHERE PK=<key>")])]),s._v(" "),e("li",[s._v("删除set"),e("code",[s._v('asinfo -v "set-config:context=namespace;id=ns1;set=testset;set-delete=true;"')])])]),s._v(" "),e("blockquote",[e("p",[s._v("注意："),e("strong",[s._v("社区版本中")]),s._v("删除的记录并不会从SSD中物理删除，需要把SSD数据清空后再加入集群才能真正的删除。但是配置了TTL的会自动的物理删除，再次启动数据会删除。")])]),s._v(" "),e("h2",{attrs:{id:"设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置"}},[s._v("#")]),s._v(" 设置")]),s._v(" "),e("p",[s._v("所有set的值和属性只能保持在当前的session里面")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("aql> get <setting>\naql> get output\nOUTPUT = TABLE\naql> set <setting> <value>\naql> set output json\n可用的设置：\nVIEW\n输出模型.\nVIEW ( TABLE | JSON )\n例如\naql> set output table\nVERBOSE\n启用详细输出\nVERBOSE ( TRUE | FALSE )\nECHO\nEcho commands.\nECHO ( TRUE | FALSE )\nTIMEOUT\n查询过期时间，单位是毫秒\nTIMEOUT <milliseconds>\nRECORD_TTL\n以秒为单位的时间,随后创建或更新记录服务器将会在设置的这个时间内有效。\nRECORD_TTL <seconds>\nLUA_USERPATH\n用户管理的lua文件的路径\nLUA_USERPATH <path>\nLUA_SYSPATH\nAerospike管理的lua文件路径\nLUA_SYSPATH <path>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br")])]),e("h2",{attrs:{id:"统计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#统计"}},[s._v("#")]),s._v(" 统计")]),s._v(" "),e("ul",[e("li",[s._v("系统统计"),e("code",[s._v("stat system")])]),s._v(" "),e("li",[s._v("索引统计"),e("code",[s._v("stat index test numindex")])]),s._v(" "),e("li",[s._v("查询统计"),e("code",[s._v("stat query | asinfo -v statistics -l")])])]),s._v(" "),e("h2",{attrs:{id:"asinfo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#asinfo"}},[s._v("#")]),s._v(" asinfo")]),s._v(" "),e("ul",[e("li",[s._v("asinfo -v 'get-config:context=service;'")]),s._v(" "),e("li",[s._v("asinfo -v 'set-config:context=service;migrate-threads=20'")]),s._v(" "),e("li",[s._v("asinfo -v 'set-config:context=namespace;id=test;max-write-cache=128M'")]),s._v(" "),e("li",[s._v('asinfo -v "statistics"')]),s._v(" "),e("li",[s._v('asinfo -v "latency:"')]),s._v(" "),e("li",[s._v('asinfo -v "namespace/test"')]),s._v(" "),e("li",[s._v("查看日志等级 - "),e("code",[s._v('asinfo -v "log/" -l')])]),s._v(" "),e("li",[s._v("修改日志等级 - "),e("code",[s._v('asinfo -v "log-set:hb=warning"')])])]),s._v(" "),e("h2",{attrs:{id:"asadm修复集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#asadm修复集群"}},[s._v("#")]),s._v(" asadm修复集群")]),s._v(" "),e("p",[s._v("当集群分裂成多个集群时")]),s._v(" "),e("ul",[e("li",[s._v("cluster dun node=xxx,yyy,zzz")]),s._v(" "),e("li",[s._v("cluster undun node=xxx,yyy,zzz")]),s._v(" "),e("li",[s._v("asadm上执行的命令会发给集群所有节点")])]),s._v(" "),e("h2",{attrs:{id:"设置ttl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置ttl"}},[s._v("#")]),s._v(" 设置TTL")]),s._v(" "),e("p",[s._v("编辑ttl.lua脚本")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('function modify_zero_ttl(rec, to_ttl)\n        local currTTL = record.ttl(rec)\n        if ( currTTL == 0 ) then\n                record.set_ttl(rec, to_ttl)\n                local result = aerospike:update(rec)\n                if ( result ~= nil and result ~= 0 ) then\n                        warn("expireRecord:Failed to UPDATE the record: resultCode (%s)", tostring(result))\n                end\n        end\nend\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("执行")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("aql> register module './ttl.lua'\nOK, 1 module added.\naql> execute ttl.modify_zero_ttl(604800) on test.foo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"移除节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移除节点"}},[s._v("#")]),s._v(" 移除节点")]),s._v(" "),e("ol",[e("li",[s._v("确认没有数据在迁移")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("asmonitor info\nMigrates是（0,0）\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("停止要移除的节点")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" aerospike stop\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" aerospike status\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("更新其余节点配置")])]),s._v(" "),e("p",[s._v("把移除节点的信息从配置文件中移除"),e("code",[s._v("sed -i '/x.x.x.x/d' /etc/aerospike/aerospike.conf")])]),s._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[s._v("更新其余节点信息")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("asadm -e \"asinfo -v 'tip-clear:host-port-list=x.x.x.x:3002'\"\nasadm -e \"asinfo -v 'tip-clear:host-port-list=x.x.x.x:3002'\"\nAdmin> asinfo -v 'dump-hb:verbose=true' --确认节点不在集群中\nasinfo -v 'services-alumni-reset'\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ol",{attrs:{start:"5"}},[e("li",[s._v("限制数据迁移速度")])]),s._v(" "),e("p",[s._v("根据测试，migrate-threads越大，对tps影响越大，建议在低峰期调大，重分布完成后恢复为1。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("asinfo -v 'set-config:context=service;migrate-threads=10'\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);