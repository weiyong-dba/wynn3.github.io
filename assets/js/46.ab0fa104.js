(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{431:function(l,t,s){"use strict";s.r(t);var a=s(51),e=Object(a.a)({},(function(){var l=this,t=l.$createElement,s=l._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[s("h1",{attrs:{id:"数据迁移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据迁移"}},[l._v("#")]),l._v(" 数据迁移")]),l._v(" "),s("p",[l._v("适用于Cassandra to Scylla或者Scylla to Scylla，不适用scylla2 to scylla3，因为scylla3使用了新的sstable格式。")]),l._v(" "),s("ol",[s("li",[l._v("导出表结构 - "),s("code",[l._v('cqlsh [IP] "-e DESC SCHEMA" > orig_schema.cql')])]),l._v(" "),s("li",[l._v("新集群导入表结构 - "),s("code",[l._v("cqlsh [IP] --file 'adjusted_schema.cql'")])]),l._v(" "),s("li",[l._v("在源集群的所有节点执行snapshot - "),s("code",[l._v("nodetool snapshot")])]),l._v(" "),s("li",[l._v("将snapshot拷贝到一台中间机器，该机器需要安装"),s("code",[l._v("scylla-tools-core")]),l._v("包。同时目录格式需要保持这样的结构结尾"),s("code",[l._v("/[ks]/[table]")])])]),l._v(" "),s("blockquote",[s("p",[l._v("建议不要直接用集群的机器，会影响业务。如果没有中间机器，那尽量拷贝到非scylla使用的raid上）")])]),l._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[l._v("使用"),s("code",[l._v("sstableloader")]),l._v("导入数据 - "),s("code",[l._v("sstableloader -d [Scylla IP] .../[ks]/[table]")])])]),l._v(" "),s("blockquote",[s("p",[l._v("使用-t参数限制导入速度")])])])}),[],!1,null,null,null);t.default=e.exports}}]);