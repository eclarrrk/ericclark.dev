---
layout: post
title:  "Responsive Typography Mixin"
date:   2019-03-08 08:46:24 -0500
categories: css, html, sass
---

I found myself using several media queries to set the `font-size` of certain elements fairly frequently.

<script src="https://gist.github.com/eclarrrk/ffdf7901b502ee78bd5ee88c3034b672.js?file=responsive-font-size-mixin.scss"></script>


<script src="https://gist.github.com/eclarrrk/ffdf7901b502ee78bd5ee88c3034b672.js?file=using-the-mixin.scss"></script>

## Get the most use out of the mixin

These are places where the mixin is most beneficial: 

### Body

Using the mixin on the body means all type sized with `em` units will grow and shrink at the same rate between the small and large breakpoints.

### Headings

Lorem ipsum dolor sit amet.     



### Spacing
As type gets larger, the space between elements on the page should grow, as well. Using


## It shouldn't be used for everything

This mixin is not magic. You will need to figure out if and how this will work in your site.
