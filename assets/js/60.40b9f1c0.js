(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{417:function(e,s,v){"use strict";v.r(s);var i=v(51),t=Object(i.a)({},(function(){var e=this,s=e.$createElement,v=e._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"redis安全加固"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis安全加固"}},[e._v("#")]),e._v(" Redis安全加固")]),e._v(" "),v("p",[e._v("Redis如果满足以下两个条件，则是不安全的，随时被利用。")]),e._v(" "),v("ol",[v("li",[e._v("redis以root用户运行")]),e._v(" "),v("li",[e._v("redis未配置权限")])]),e._v(" "),v("p",[v("strong",[e._v("举例：实现SSH登录")])]),e._v(" "),v("ul",[v("li",[e._v("登录redis")]),e._v(" "),v("li",[e._v("删除所有key - "),v("code",[e._v("flushall")])]),e._v(" "),v("li",[e._v("配置"),v("code",[e._v("dir")]),e._v(" - "),v("code",[e._v('CONFIG SET dir "/root/.ssh"')])]),e._v(" "),v("li",[e._v("配置"),v("code",[e._v("dbfilename")]),e._v(" - "),v("code",[e._v('CONFIG SET dbfilename "authorized_keys"')])]),e._v(" "),v("li",[e._v("把自己的密钥写入key - "),v("code",[e._v('set key"\\n\\nssh-rsa AAAAB3NzaC1yc2EAAAABI\\n\\n" Key1')])]),e._v(" "),v("li",[e._v("保存到系统 - "),v("code",[e._v("save")])]),e._v(" "),v("li",[e._v("测试是否可以登录")])]),e._v(" "),v("p",[v("strong",[e._v("Redis安全加固")])]),e._v(" "),v("ol",[v("li",[e._v("以普通用户启动redis")]),e._v(" "),v("li",[e._v("如果只从本机访问redis，可以设置bind 127.0.0.1")]),e._v(" "),v("li",[e._v("启用密码requirepass Xrj6u&hh")]),e._v(" "),v("li",[e._v("设置防火墙")])]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("iptables -A INPUT -s 192.168.1.0/24,127.0.0.0/16 -p tcp --dport 6379 -j ACCEPT\niptables -A INPUT -p tcp --dport 6379 -j DROP\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br")])]),v("p",[e._v("5.隐藏危险命令 - "),v("code",[e._v("FLUSHDB, FLUSHALL, KEYS, PEXPIRE, DEL, CONFIG, SHUTDOWN, BGREWRITEAOF, BGSAVE, SAVE, SPOP, SREM, RENAME, DEBUG, EVAL")]),e._v("，设置方法如下：")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('rename-command config ""\n')])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("上述配置将config设置为了空，即禁用该命令，保存之后，重启生效。")])])}),[],!1,null,null,null);s.default=t.exports}}]);