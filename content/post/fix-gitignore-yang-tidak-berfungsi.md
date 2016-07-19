+++
date = "2016-01-22T00:03:58+08:00"
draft = false
title = "Fix .gitignore yang kadang tidak berfungsi"

+++

Kadang dalam project git kita tidak ingin beberapa file/folder di watch perubahannya. File/folder itu sudah kita masukan dalam list file `.gitignore` tapi tetap saja perubahan itu dibaca.

<!--more-->

Googling sebentar, eh nemu. berikut script untuk fixnya

{{< gist wayanjimmy 8cb57181de9be55d6362 >}}
