---
layout: post
title: Using SIPS Resizing a batch of images using
author: eric_clark
date: '2020-02-11 21:30:49'
intro_paragraph: >-
  I can't count the number of times I'm given a bunch of images that are way too
  large for the web. I could run a PhotoShop action to handle it, but that would
  require actually opening PhotoShop :(
---
In searching for a better way, I came across SIPS, a MAC command line tool. And even though I can't find the official SIPS documentation anywhere (any help there is appreciated) I've collected what I was able to find because some of these are extremely helpful.

## Using SIPS

To use SIPS you will need to open a terminal application on your MAC. You can find the Terminal app in Applications > Utilities.

## The SIPS Syntax



To use these commands you will need to

### Resize an image by max width

`sips --resampleWidth 1024 *.jpg`

### Resize an image by max height
`sips --resampleHeight 768 *.jpg`

### Resize to
`sips -z 768 1024 *.jpg # -z takes height as a first argument`

### Resize a batch of images to 250px at each image's largest side.
sips -Z 250 *

#Resize only .jpg files in a folder to 500px x 500px and ignores aspect ratio
sips -z 500 500 *.jpg

#Rotate a batch of images 90 degrees clock-wise
sips -r 90 *
---

Citations:
 - [hackernoon.com](https://hackernoon.com/save-time-by-transforming-images-in-the-command-line-c63c83e53b17)
- [coderwall.com](https://coderwall.com/p/ekhe8g/batch-processing-images-on-mac-with-sips)
