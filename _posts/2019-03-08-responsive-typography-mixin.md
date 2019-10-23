---
layout: post
title:  "Responsive Typography Mixin"
date:   2019-03-08 08:46:24 -0500
categories: css, html, sass
permalink: /writing/:title/
---

I found myself using several media queries to set the `font-size` of certain elements fairly frequently.

<script src="https://gist.github.com/eclarrrk/ffdf7901b502ee78bd5ee88c3034b672.js?file=responsive-font-size-mixin.scss"></script>


<script src="https://gist.github.com/eclarrrk/ffdf7901b502ee78bd5ee88c3034b672.js?file=using-the-mixin.scss"></script>

## This mixin works great most of the time

I use this on most elements right away, especially `body` and headings.


## Don't use it for everything

This mixin is not magic. You will need to figure out if and how this will work in your site.
