(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{462:function(n,s,e){"use strict";e.r(s);var a=e(51),t=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"验证write-ahead是否有效"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证write-ahead是否有效"}},[n._v("#")]),n._v(" 验证write ahead是否有效")]),n._v(" "),e("p",[n._v("本文摘录自[阿里云RDS-数据库内核组]的技术博客。")]),n._v(" "),e("h2",{attrs:{id:"验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[n._v("#")]),n._v(" 验证")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 命令说明：\n//     a. 先给tmp.txt写入1G的数据，在进行测试，是为了避免文件第一次写入时，元信息修改产生的影响;\n//.    b. echo 3 >/proc/sys/vm/drop_caches 用于清空缓存。\n\n\n// write ahead写入方式,\n> dd if=/dev/zero of=./tmp.txt bs=1048576 count=1024 && g++ -O3 -DWRITE_AHEAD append_write.cc -o append_write && echo 3 >/proc/sys/vm/drop_caches && time ./append_write ./tmp.txt\n\n// 普通写入方式\n> dd if=/dev/zero of=./tmp.txt bs=1048576 count=1024 && g++ -O3 -DNORMAL_WRITE append_write.cc -o append_write && echo 3 >/proc/sys/vm/drop_caches && time ./append_write ./tmp.txt\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br")])]),e("h2",{attrs:{id:"脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脚本"}},[n._v("#")]),n._v(" 脚本")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('#include <stdio.h>\n#include <sys/types.h>\n#include <sys/stat.h>\n#include <unistd.h>\n#include <errno.h>\n#include <stdint.h>\n#include <stdlib.h>\n#include <fcntl.h>\n#include <string.h>\n\nchar filepath[128];\nuint32_t len_per = 512;\nchar buf[4096];\nchar buf2[4096];\nconst uint64_t file_size = 1024*1024*1024*1ul;\nconst uint64_t block_size = 4096;\n\nvoid usage() {\n  fprintf(stderr, "usage:\\n\\t./append_write filepath [len_per]\\n");\n}\nint main(int argc, char* argv[]) {\n  if (argc > 3) {\n    usage();\n    return -1;\n  }\n  strcpy(filepath, argv[1]);\n\n  if (argc == 3) {\n    len_per = atoi(argv[2]);\n  }\n  int32_t fd = open(filepath, O_RDWR);\n  if (fd == -1) {\n    fprintf(stderr, "create new file failed, errno: %d\\n", errno);\n    return -1;\n  }\n  fprintf(stderr, "start writing...\\n");\n  for (uint64_t sum = 0; sum < file_size; sum += len_per) {\n#ifdef WRITE_AHEAD\n    if (sum % block_size == 0) {\n      memcpy(buf2, buf, len_per);\n      memset(buf2+len_per, 0, block_size - len_per);\n      if (pwrite(fd, buf2, block_size, sum) != block_size) {\n        fprintf(stderr, "write failed, errno: %d\\n", errno);\n        close(fd);\n        return -1;\n      }\n    } else if (pwrite(fd, buf, len_per, sum) != len_per) {\n      fprintf(stderr, "write failed, errno: %d\\n", errno);\n      close(fd);\n      return -1;\n    }\n#elif defined(NORMAL_WRITE)\n    if (pwrite(fd, buf, len_per, sum) != len_per) {\n      fprintf(stderr, "write failed, errno: %d\\n", errno);\n      close(fd);\n      return -1;\n    }\n#endif\n  }\n  fprintf(stderr, "finish writing...\\n");\n\n  close(fd);\n  return 0;\n}\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br"),e("span",{staticClass:"line-number"},[n._v("56")]),e("br"),e("span",{staticClass:"line-number"},[n._v("57")]),e("br"),e("span",{staticClass:"line-number"},[n._v("58")]),e("br"),e("span",{staticClass:"line-number"},[n._v("59")]),e("br"),e("span",{staticClass:"line-number"},[n._v("60")]),e("br"),e("span",{staticClass:"line-number"},[n._v("61")]),e("br"),e("span",{staticClass:"line-number"},[n._v("62")]),e("br"),e("span",{staticClass:"line-number"},[n._v("63")]),e("br"),e("span",{staticClass:"line-number"},[n._v("64")]),e("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);