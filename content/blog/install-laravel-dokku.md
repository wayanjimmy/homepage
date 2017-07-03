+++
date = "2017-07-02T22:01:57+08:00"
title = "Deploy Laravel App dengan Dokku"
draft = false
image = ""
tags = ["dokku", "devops", "laravel"]

+++

### Buat app Laravel

~~~bash
dokku apps:create kejuapp
~~~

### Install plugin MySQL

Lengkapnya ada [disini](https://github.com/dokku/dokku-mysql), atau pakai cara dibawah

~~~bash
sudo dokku plugin:install https://github.com/dokku/dokku-mysql.git mysql

dokku mysql:create kejudb
dokku mysql:link kejudb kejuapp
~~~

Perintah link akan mengeluarkan output seperti ini

~~~bash
--> Setting config vars
       DATABASE_URL: mysql://mysql:094982631159a769@dokku-mysql-kejudb:3306/kejudb
--> Restarting app kejuapp
~~~

Nah, itu dsn string bisa diolah menjadi

~~~bash
DB_HOST=dokku-mysql-kejudb
DB_DATABASE=kejudb
DB_USERNAME=mysql
DB_PASSWORD=094982631159a769
~~~


### Set ENV variables
Normalnya kita akan edit file `.env`, berhubung menggunakan dokku, kita bisa gunakan perintah `config:set	` untuk set environment variables-nya

~~~bash
dokku config:set kejuapp APP_ENV=production APP_KEY=acakacaksaya \
	DB_CONNECTION=mysql DB_HOST=dokku-mysql-kejudb \
	DB_DATABASE=kejudb DB_USERNAME=mysql \
	DB_PASSWORD=094982631159a769
~~~

### Setup Buildpack

Kita akan menggunakan buildpack [php](https://github.com/heroku/heroku-buildpack-php), agar Dokku mengenali app kita adalah aplikasi php/laravel.

~~~bash
dokku config:set kejuapp \
	BUILDPACK_URL=https://github.com/heroku/heroku-buildpack-php
~~~

### Final

Langsung deploy aja bro! Fire! 🔥 🔥 🔥

~~~bash
git push dokku master
~~~

### Setup domain (Optional)

~~~bash
dokku domains:add kejuapp kejuapp.dokku.xyz
dokku config:set kejuapp APP_URL=http://kejuapp.dokku.xyz
~~~
