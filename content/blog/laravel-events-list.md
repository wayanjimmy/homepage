+++
date = "2016-11-15T17:30:47+08:00"
draft = false
title = "Laravel events list"
+++

Dalam framework laravel sendiri ada mekanisme events. Salah satu penggunaannya adalah ketika composing blade view, Laravel akan trigger sebuah event dengan nama `composing: $view`, yang mana `$view` adalah nama view yang akan di compose.

<!--more-->
Kadang kala ketika kita membuat package atau ingin mengextend suatu fitur dalam framework kita harus listen event-event ini. Kebetulan saya sedang membuat sebuah package yang mirip seperti [PHP-Vars-To-Js-Transformer](https://github.com/laracasts/PHP-Vars-To-Js-Transformer) yang dibuat oleh [Jeffrey Way](https://twitter.com/jeffrey_way).

Berikut list event-event yang ada di laravel.

```
laravel.done
laravel.log
laravel.query
laravel.resolving
laravel.composing: {viewname}
laravel.started: {bundlename}
laravel.controller.factory
laravel.config.loader
laravel.language.loader
laravel.view.loader
laravel.view.engine

view.filter

eloquent.saving
eloquent.updated
eloquent.created
eloquent.saved
eloquent.deleting
eloquent.deleted
eloquent.booted: {$model}
eloquent.booting: {$model}
```

Sumber 
- [StackOverflow](http://stackoverflow.com/questions/13059744/where-can-i-get-a-complete-list-of-laravel-events-fired-by-the-core-libaries)