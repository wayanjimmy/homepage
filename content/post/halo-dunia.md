+++
date = "2016-01-21T23:18:19+08:00"
draft = false
title = "Halo dunia"
menu = ""
truncated = true
image = "https://images.unsplash.com/photo-1462795532207-33cabf8c8175?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=785365af839ad4a2e775fe932a76ce7a"

+++

Buat menyaingi [gedelumbung.com](http://gedelumbung.com) saya buat web ini hehe, walaupun cuman web static yang dibuat pakai [hugo](http://gohugo.io), yah setidaknya bisa dipakai nyatet hal-hal penting biar gak lupa :P 
<!--more-->
sesuai judulnya, ini Code halo dunia dengan beberapa bahasa yang saya pelajari

### PHP
~~~php
<?php

class ManusiaBiasa 
{
    public function bilangHalo() 
    {
        return 'Halo Dunia';    
    }
}

$jimmy = new ManusiaBiasa();
echo $jimmy->bilangHalo();
~~~

### Javascript
~~~javascript
class ManusiaBiasa {
    bilangHalo() {
        return "Halo Dunia"
    }
}

let jimmy = new ManusiaBiasa()
console.log(jimmy.bilangHalo())
~~~
