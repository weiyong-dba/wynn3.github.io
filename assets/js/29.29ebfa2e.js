(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{448:function(_,v,l){"use strict";l.r(v);var i=l(51),e=Object(i.a)({},(function(){var _=this,v=_.$createElement,l=_._self._c||v;return l("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[l("h1",{attrs:{id:"mysql备份恢复实践"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#mysql备份恢复实践"}},[_._v("#")]),_._v(" MySQL备份恢复实践")]),_._v(" "),l("h2",{attrs:{id:"增加的"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#增加的"}},[_._v("#")]),_._v(" 增加的")]),_._v(" "),l("ul",[l("li",[_._v("数据字典SCHEMA\n"),l("ul",[l("li",[_._v("删除了基于文件的元数据存贮")]),_._v(" "),l("li",[_._v("使用innodb引擎，支持事务")]),_._v(" "),l("li",[_._v("字典对象缓存\n"),l("ul",[l("li",[_._v("tablespace定义缓存区")]),_._v(" "),l("li",[_._v("schema定义缓存区")]),_._v(" "),l("li",[_._v("table定义缓存区")]),_._v(" "),l("li",[_._v("程序缓存区")]),_._v(" "),l("li",[_._v("字符集定义缓存区")]),_._v(" "),l("li",[_._v("排序规则定义缓存区")])])]),_._v(" "),l("li",[_._v("序列化字典信息")]),_._v(" "),l("li",[_._v("DDL变慢，因为需要写redo、undo、引擎")]),_._v(" "),l("li",[_._v("通过madir新建的目录不被支持")])])]),_._v(" "),l("li",[_._v("原子DDL")]),_._v(" "),l("li",[_._v("自动运行mysql_upgrade")]),_._v(" "),l("li",[_._v("安全性和帐户管理\n"),l("ul",[l("li",[_._v("多个授权也是原子操作")]),_._v(" "),l("li",[_._v("caching_sha2_password身份验证插件默认使用，之前是mysql_native_password")]),_._v(" "),l("li",[_._v("支持角色")]),_._v(" "),l("li",[_._v("记录历史密码，不允许重复")]),_._v(" "),l("li",[_._v("FIPS支持")]),_._v(" "),l("li",[_._v("运行时配置SSL")])])]),_._v(" "),l("li",[_._v("资源管理")]),_._v(" "),l("li",[_._v("表加密")]),_._v(" "),l("li",[_._v("Innodb增强功能\n"),l("ul",[l("li",[_._v("自增ID不随系统启动改变")]),_._v(" "),l("li",[_._v("memcached的插件支持多个get操作")]),_._v(" "),l("li",[_._v("innodb_deadlock_detect可禁用死锁检测")]),_._v(" "),l("li",[_._v("InnoDB现在在共享临时表空间中创建临时表 ibtmp1")]),_._v(" "),l("li",[_._v("redo log和undo log数据的支持加密")]),_._v(" "),l("li",[_._v("支持NOWAIT和SKIP LOCKED选项SELECT ... FOR SHARE以及SELECT ... FOR UPDATE锁定读取语句")]),_._v(" "),l("li",[_._v("使用MySQL数据字典，而不是其自己的特定于存储引擎的数据字典")]),_._v(" "),l("li",[_._v("undo表空间更改\n"),l("ul",[l("li",[_._v("undo表空间从系统表空间独立出来")]),_._v(" "),l("li",[_._v("运行时增加、删除、禁用")])])]),_._v(" "),l("li",[_._v("ALTER TABLESPACE ... RENAME TO语法 支持重命名常规表空间")]),_._v(" "),l("li",[_._v("启用innodb_dedicated_server变量可自动配置以下参数\n"),l("ul",[l("li",[_._v("innodb_buffer_pool_size")]),_._v(" "),l("li",[_._v("innodb_log_file_size")]),_._v(" "),l("li",[_._v("innodb_flush_method")])])]),_._v(" "),l("li",[_._v("新的视图INFORMATION_SCHEMA.INNODB_TABLESPACES_BRIEF")]),_._v(" "),l("li",[_._v("表空间文件支持离线迁移")]),_._v(" "),l("li",[_._v("默认字符集latin1变成utf8mb4")]),_._v(" "),l("li",[_._v("JSON增强")]),_._v(" "),l("li",[_._v("BLOB, TEXT, GEOMETRY, and JSON支持默认值")]),_._v(" "),l("li",[_._v("优化器\n"),l("ul",[l("li",[_._v("支持不可见索引")]),_._v(" "),l("li",[_._v("支持降序索引")]),_._v(" "),l("li",[_._v("支持函数索引")]),_._v(" "),l("li",[_._v("自动删除不必要的条件，如：0>1")]),_._v(" "),l("li",[_._v("使用半连接优化exists")]),_._v(" "),l("li",[_._v("支持with")]),_._v(" "),l("li",[_._v("窗口函数")]),_._v(" "),l("li",[_._v("delete支持表别名")]),_._v(" "),l("li",[_._v("支持正则表达式")])])]),_._v(" "),l("li",[_._v("redo log 归档")]),_._v(" "),l("li",[_._v("clone plugin")]),_._v(" "),l("li",[_._v("hash join")]),_._v(" "),l("li",[_._v("Time zone support for TIMESTAMP and DATETIME")]),_._v(" "),l("li")])])]),_._v(" "),l("h2",{attrs:{id:"不建议使用的"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#不建议使用的"}},[_._v("#")]),_._v(" 不建议使用的")]),_._v(" "),l("ul",[l("li",[_._v("utf8mb3 character set")]),_._v(" "),l("li",[_._v("ALTER TABLESPACE and DROP TABLESPACE")]),_._v(" "),l("li",[_._v("AUTO_INCREMENT support is deprecated for columns of type FLOAT and DOUBLE")]),_._v(" "),l("li",[_._v("The UNSIGNED attribute is deprecated for columns of type FLOAT, DOUBLE, and DECIMAL")]),_._v(" "),l("li",[_._v("The ZEROFILL attribute is deprecated for numeric data types")])]),_._v(" "),l("h2",{attrs:{id:"删除的"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#删除的"}},[_._v("#")]),_._v(" 删除的")]),_._v(" "),l("ul",[l("li",[_._v("grant不再创建用户")]),_._v(" "),l("li",[_._v("删除了query cache")]),_._v(" "),l("li",[_._v("log_warnings")]),_._v(" "),l("li",[_._v("sql_log_bin取消，由@@GLOBAL.sql_log_bin替换")])])])}),[],!1,null,null,null);v.default=e.exports}}]);