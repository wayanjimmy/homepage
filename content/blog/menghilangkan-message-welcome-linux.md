+++
draft = false
image = ""
tags = ["linux", "ssh", "motd"]
title = "Menghilangkan Welcome Message Welcome server Linux"
date = "2017-04-01T10:54:24+02:00"

+++

Jika kamu ingin menghilangkan message yang muncul setiap login ssh ke sebuah server VPS, maka kita tinggal membuat sebuah file kosong di directory home kita dengan nama `.hushlogin`
<!--more-->

```
touch ~/.hushlogin
```

Tada, coba login ssh lagi, jadi bersih deh :)

![Hush login](https://media.giphy.com/media/3og0IA5WhapclmmEjS/giphy.gif)
