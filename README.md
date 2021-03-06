## ExSimple —— 一款极简的Jekyll博客主题

![Jekyll](https://jekyllrb.com/img/logo-2x.png)

ExSimple 是一款 [Jekyll](http://jekyllcn.com) 博客主题，它极度简洁、高效，没有任何花哨的东西，让你专注博客文章内容的输出。

博客主题的效果可以参考个人博客：[Blog·Loji44](https://loji44.github.io)。

>**特别说明：** <br />
这个博客主题样式是本人在无意间浏览到某个博主的博客站点：<a href="https://blog.tankywoo.com" target="_blank">https://blog.tankywoo.com</a> 时发现的，十分钟意。本来想直接将这个博客主题用到自己博客上，无奈没找到主题源码，也尝试联系过博主(邮件、知乎等)，无果。索性自己上手，直接浏览器上翻看网页源码😂，并从原博客网站下载到样式文件、js文件等资源。
最后自己上手写Jekyll的`_layouts`和`_includes`文件，以及其他一些布局文件。所以此博客主题不是100%原创，因为本人不是搞前端的，css之类不太擅长，但是写写html模版还是没问题的。
最后，本主题从 <a href="https://blog.tankywoo.com" target="_blank">https://blog.tankywoo.com</a> 博客网站上直接借用过来的资源：`github.css`、`style.css`、`is.min.js`、`main.js`

### 如何使用ExSimple主题？

把博客主题源码仓库clone下来：

```bash
$ git clone https://github.com/loji44/ExSimple.git your_blog
```

然后在`_post`文件夹下面写博客文章即可，都是遵循Jekyll的目录规范。

### `_config.yml`配置文件说明

```bash
title: Blog · Loji44
url: "https://loji44.github.io"
baseurl: ""

# 全局顶部导航栏配置。格式："名称=跳转链接"，名称和跳转链接之间用"="分隔。例如 "About=/about.html"
nav:
  - About=/about.html
  - TAGS=/tags.html
  - RSS=/feed.xml
  - 🔍SEARCH=/search.html

# 不要动这个配置：根据tag生成页面
plugins:
  - jekyll-archives
# 不要动这个配置：根据tag生成页面
jekyll-archives:
  enabled: ['tags']
  layout: tag_post_list
  permalinks:
    tag: '/tags/:name.html'
```

没有更多东西了，上面都有说明。
