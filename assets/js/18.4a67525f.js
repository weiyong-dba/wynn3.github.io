(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{464:function(t,s,a){"use strict";a.r(s);var n=a(51),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("某天用户报告说MySQL主从不一致了，主库11条记录，从库80万条记录。什么，赶紧登录看看，果然不一致了。")]),t._v(" "),a("p",[t._v("主库:")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/mysql/master-record.png",alt:""}})]),t._v(" "),a("p",[t._v("从库:")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/mysql/slave-record.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"处理思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理思路"}},[t._v("#")]),t._v(" 处理思路")]),t._v(" "),a("p",[t._v("由于表数据量比较大，同时又需要快速恢复，只能选择tts，但是主库的表还不断有新数据，所以需要增加触发器记录在tts过车中新增的数据。")]),t._v(" "),a("h2",{attrs:{id:"具体步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体步骤"}},[t._v("#")]),t._v(" 具体步骤")]),t._v(" "),a("p",[a("strong",[t._v("1.generate trigger")])]),t._v(" "),a("p",[t._v("借助"),a("code",[t._v("pt-online-change")]),t._v("生成触发器，这里我写成了一个小脚本。")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("table")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("alter_conment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("cnn_host")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("cnn_user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("cnn_pwd")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rootpass'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("cnn_db")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$alter_conment")]),t._v('"')]),t._v("\npt-online-schema-change --socket"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/mysql/mysql"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${port}")]),t._v("/mysqld.sock --no-version-check --user"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${cnn_user}")]),t._v(" --password"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${cnn_pwd}")]),t._v(" --host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${cnn_host}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("P")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${port}")]),t._v(",D"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${cnn_db}")]),t._v(",t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),t._v(" --alter "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key_block_size=16"')]),t._v(" --no-check-alter --no-check-replication-filters --alter-foreign-keys-method"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("auto --recursion-method"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("none  --progress time,30 --statistics --dry-run --print\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("运行该脚本获得我们想要触发器的ddl语句，我们指定了"),a("code",[t._v("--dry-run")]),t._v("，pt-online-change不会执行任何修改数据库的操作。")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("Not")]),t._v(" creating triggers because this "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("is")]),t._v(" a dry run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRIGGER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("pt_osc_stat_del"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AFTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("stat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOR EACH ROW")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IGNORE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("_stat_new"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("appcpa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("_new"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=>")]),t._v(" OLD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRIGGER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("pt_osc_stat_upd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AFTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("stat "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOR EACH ROW")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("_stat_new"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("installnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("hour")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NEW"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NEW"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NEW"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("installnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NEW"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NEW"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("hour")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRIGGER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("pt_osc_stat_ins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AFTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("stat "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOR EACH ROW")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("_stat_new"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("installnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("hour")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NEW"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NEW"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NEW"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("installnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NEW"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NEW"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("hour")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("我们需要新建一个_stat_new，表结构与stat表一致。")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" _stat_new "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("like")]),t._v(" stat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("然后执行创建触发器。这样我们在tts的过程中产生的新数据会记录在_stat_new。现在可以开始tts了。")]),t._v(" "),a("p",[a("strong",[t._v("2.export")])]),t._v(" "),a("p",[t._v("到slave库操作。")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("stop slave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nflush "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" stat "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" export"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscp stat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ibd stat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cfg master_ip:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tmp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("start")]),t._v(" slave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[a("strong",[t._v("3.import")])]),t._v(" "),a("p",[t._v("以下操作在master上，由于已经存在stat表，我们需要导入到一个新的schema，这里我导入到test2，然后再rename。")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" test2\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" stat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("like")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" stat "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("discard")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tablespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsystem cp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tmp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("stat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("test2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\nsystem chown mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("test2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("stat"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" stat "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tablespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[a("strong",[t._v("4.rename")])]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rename")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" test2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stat "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stat_slave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同步新数据到stat_slave表")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("stat_slave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("installnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("hour")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("installnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("hour")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" _stat_new"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新老表互换")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RENAME")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("stat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("_stat_old"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("_stat_slave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("stat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("strong",[t._v("5.drop trigger")])]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("_stat_new"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("_stat_old"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRIGGER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("pt_osc_stat_del"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRIGGER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("pt_osc_stat_upd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRIGGER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("pt_osc_stat_ins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("OK, 我们的数据恢复回来了，收工。")])])}),[],!1,null,null,null);s.default=e.exports}}]);