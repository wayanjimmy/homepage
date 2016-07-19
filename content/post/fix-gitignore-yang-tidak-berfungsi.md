+++
date = "2016-01-22T00:03:58+08:00"
draft = false
title = "Fix .gitignore yang kadang tidak berfungsi"
image = "https://images.unsplash.com/photo-1453060113865-968cea1ad53a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=352c122fda047eb14dab3584043187f5"
+++

Kadang dalam project git kita tidak ingin beberapa file/folder di watch perubahannya. File/folder itu sudah kita masukan dalam list file `.gitignore` tapi tetap saja perubahan itu dibaca.

<!--more-->

Googling sebentar, eh nemu. berikut script untuk fixnya

{{< gist wayanjimmy 8cb57181de9be55d6362 >}}
