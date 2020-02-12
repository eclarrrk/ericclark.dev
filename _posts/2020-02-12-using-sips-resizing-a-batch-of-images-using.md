---
layout: post
title: Using SIPS to batch resize images
author: eric_clark
date: '2020-02-11 21:30:49'
intro_paragraph: >-
  I can't count the number of times I'm given a bunch of images that are way too
  large for the web. I could run a PhotoShop action to handle it, but that would
  require actually opening the slowest program my computer has to offer.
---
In searching for a better way, I came across SIPS (scriptable image processing system), a MAC command line tool for processing images. I've collected what I was able to find because some of these are extremely helpful.

## Running the SIPS commands

To use SIPS you will need to open a terminal application on your MAC. You can find the Terminal app in Applications > Utilities.

You will need to navigate to the folder that contains the images you want to manipulate. As an extra precaution, I usually copy the images into a folder I created for batch resizing as to keep the higher resolution versions in case I mess up and overwrite the originals with a lesser version.

## Helpful SIPS commands

I've collected a few commands that can solve common image resizing problems, or have been particularly helpful to me.

### Resize an image by max width

`sips --resampleWidth 1024 *.jpg`

### Resize an image by max height
`sips --resampleHeight 768 *.jpg`

### Resize to 1024px wide by 768px tall (`-z` takes height as it's first argument) while ignoring aspect ratio
`sips -z 768 1024 *.jpg

### Resize a batch of images to 250px at each image's largest side.
`sips -Z 250 *`

### Resize only .jpg files in a folder to 500px x 500px and ignores aspect ratio
`sips -z 500 500 *.jpg`

### Rotate a batch of images 90 degrees clock-wise
`sips -r 90 *`

### Convert an image from one file format to another
`sips -s format jpeg -s formatOptions 80 "image.tiff" --out "image.jpg"`

So we first grab all RAW files in a folder, then we convert them to jpeg (or any other format), and we output them somewhere else.

`for i in *.CR2; do sips -s format jpeg $i --out "${i%.*}.jpg"; done`

## More SIPS

For a full list of SIPS commands, enter `sips --help` into your terminal and get a full list of parameters.

Here it is in full:
```
sips 10.4.4 - scriptable image processing system.
This tool is used to query or modify raster image files and ColorSync ICC profiles.
Its functionality can also be used through the "Image Events" AppleScript suite.

  Usages:
    sips [-h, --help] 
    sips [-H, --helpProperties] 

    sips [image-query-functions] imagefile ... 

    sips [profile-query-functions] profile ... 

    sips [image modification functions] imagefile ... 
         [--out result-file-or-dir] 

    sips [profile modification functions] profile ... 
         [--out result-file-or-dir] 


  Profile query functions: 
    -g, --getProperty key 
    -X, --extractTag tag tagFile 
    -v, --verify 

  Image query functions: 
    -g, --getProperty key 
    -x, --extractProfile profile 

  Profile modification functions: 
    -s, --setProperty key value 
    -d, --deleteProperty key 
        --deleteTag tag 
        --copyTag srcTag dstTag 
        --loadTag tag tagFile 
        --repair 

  Image modification functions: 
    -s, --setProperty key value 
    -d, --deleteProperty key 
    -e, --embedProfile profile 
    -E, --embedProfileIfNone profile 
    -m, --matchTo profile 
    -M, --matchToWithIntent profile intent 
        --deleteColorManagementProperties 
    -r, --rotate degreesCW 
    -f, --flip horizontal|vertical 
    -c, --cropToHeightWidth pixelsH pixelsW 
    -p, --padToHeightWidth pixelsH pixelsW 
        --padColor hexcolor 
    -z, --resampleHeightWidth pixelsH pixelsW 
        --resampleWidth pixelsW 
        --resampleHeight pixelsH 
    -Z, --resampleHeightWidthMax pixelsWH 
    -i, --addIcon 
    -o, --optimizeColorForSharing ```


---

Citations:
 - [hackernoon.com](https://hackernoon.com/save-time-by-transforming-images-in-the-command-line-c63c83e53b17)
- [coderwall.com](https://coderwall.com/p/ekhe8g/batch-processing-images-on-mac-with-sips)
