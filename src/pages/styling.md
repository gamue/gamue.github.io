---
title: Styling Guide
permalink: /style/
header:
    overlay_image: assets/photography/2020_07_deutschland/Deutschland_0334.jpg
tagline: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
gallery:
    - image_path: assets/photography/2017_04_japan/Japan_0022.jpg
      caption: Godzilla
    - image_path: assets/photography/2017_04_japan/Japan_1425.jpg
      caption: Rehe in Nara
    - image_path: assets/photography/2017_04_japan/Japan_0711b.jpg
    - image_path: assets/photography/2017_04_japan/Japan_1155.jpg 
gallery2:
    - image_path: assets/photography/2014_11_laos/Laos_059.jpg
    - image_path: assets/photography/2014_11_laos/Laos_096.jpg
    - image_path: assets/photography/2014_11_laos/Laos_188.jpg
    - image_path: assets/photography/2014_11_laos/Laos_306.jpg
    - image_path: assets/photography/2014_11_laos/Laos_589.jpg
gallerySingle:
    - image_path: assets/photography/2017_04_japan/Japan_0022.jpg
eleventyExcludeFromCollections: true
published: false
---
{%- from "macros/gallery.njk" import imageGallery -%}
# h1 headline

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed purus a enim placerat consectetur. 
Vivamus sit amet velit metus. Donec eget tincidunt leo. Curabitur felis lacus, commodo eget turpis id, lacinia dignissim nibh. 
Proin suscipit fringilla felis, at pharetra magna blandit sed. Proin porta, quam sed tempus sodales, massa lacus iaculis ipsum, 
et porttitor risus ipsum non arcu. Aenean tempor libero orci, nec ornare quam porta id. Pellentesque ultrices feugiat tincidunt. 
Integer tempor vestibulum quam, sit amet ornare libero vehicula nec. Vestibulum egestas efficitur metus ac congue.

Vivamus vestibulum magna vel dui auctor vestibulum. Fusce feugiat bibendum eros, eu egestas turpis sollicitudin a. 
Etiam porttitor facilisis justo, efficitur tempor sapien commodo a. Suspendisse orci tellus, laoreet in consectetur eget, 
vehicula et justo. Sed urna nunc, vestibulum id dapibus et, tempus id massa. Proin tellus nisi, tempor non venenatis eget, malesuada ut nibh. 
In ut augue sit amet ante dignissim pharetra id ac odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
Quisque tincidunt neque ipsum, sed aliquam felis hendrerit quis. Quisque elementum ac magna at accumsan. Curabitur eget iaculis purus. 
Sed tempor purus eu egestas volutpat. Ut laoreet orci a pulvinar vulputate. Quisque ut turpis et ex sodales ultrices. In nec felis nisi. 
Etiam non augue porta diam commodo gravida sit amet id nibh.

## h2 headline

Ut vulputate, est ac fermentum sagittis, sapien justo lacinia lectus, vitae tincidunt justo nulla ut ante. Praesent et tempus eros. 
Pellentesque bibendum, erat vel sollicitudin molestie, risus quam fringilla risus, sit amet rhoncus diam magna sit amet metus. 
Nulla nec condimentum velit, ac viverra libero. Vivamus feugiat, neque ut dictum gravida, diam libero placerat nibh, eget dictum diam nulla ac turpis. 
Pellentesque fringilla tristique bibendum. Sed a quam eu magna suscipit varius vel luctus dui. Sed quis eleifend risus.

### h3 headline

Ut vulputate, est ac fermentum sagittis, sapien justo lacinia lectus, vitae tincidunt justo nulla ut ante. Praesent et tempus eros. 
Pellentesque bibendum, erat vel sollicitudin molestie, risus quam fringilla risus, sit amet rhoncus diam magna sit amet metus. 

#### h4 headline

Ut vulputate, est ac fermentum sagittis, sapien justo lacinia lectus, vitae tincidunt justo nulla ut ante. Praesent et tempus eros. 
Pellentesque bibendum, erat vel sollicitudin molestie, risus quam fringilla risus, sit amet rhoncus diam magna sit amet metus.

- List **Bold**
- List *Italic*
- List ***Bold and Italic***
- List [Link](#)
    - SubItem `inline code`
    - SubItem

Ut vulputate, est ac fermentum sagittis, sapien justo lacinia lectus, vitae tincidunt justo nulla ut ante. Praesent et tempus eros. 
Pellentesque bibendum, erat

1. List
1. List
    1. Sub-Element
    1. Sub-Element
1. List
1. List

Ut vulputate, est ac fermentum sagittis, sapien justo lacinia lectus, vitae tincidunt justo nulla ut ante.

> Quote: Ut vulputate, est ac fermentum sagittis, sapien justo lacinia lectus, vitae tincidunt justo nulla ut ante. Praesent et tempus eros. 
Pellentesque bibendum, erat vel sollicitudin molestie, risus quam fringilla risus, sit amet rhoncus diam magna sit amet metus. 
Nulla nec condimentum velit, ac viverra libero. Vivamus feugiat, neque ut dictum gravida, diam libero placerat nibh, eget dictum diam nulla ac turpis. 

Ut vulputate, est ac fermentum sagittis, sapien justo lacinia lectus, vitae tincidunt justo nulla ut ante.
{: .notice}

Info-Box: Ut vulputate, est ac fermentum sagittis, sapien justo lacinia lectus, vitae tincidunt justo nulla ut ante.
{: .notice--info}

**Warning-Box:** Ut vulputate, est ac fermentum sagittis, sapien justo lacinia lectus, vitae tincidunt justo nulla ut ante.
{: .notice--warning}

[Button Primary](#){: .btn}

Ut vulputate, est ac fermentum sagittis, sapien justo lacinia lectus, vitae tincidunt justo nulla ut ante.

```txt
├── /2011-09-05 Köln
├── /2019-04 Belize
├── /2019-12 Paris
├── ...
``` 

```js
const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
```

```yaml
on:
 push:
   branches:
     - master
```

```xml
<?xml version="1.0" encoding="utf-8"?>
<packages>
  <package id="7zip" />
  <package id="irfanview" />
  <package id="vlc" />
</packages>
```

Item
: Ut vulputate, est ac fermentum sagittis, sapien justo lacinia lectus, vitae tincidunt justo nulla ut ante.

Item
: Ut vulputate, est ac fermentum sagittis, sapien justo lacinia lectus, vitae tincidunt justo nulla ut ante.

# Gallery Single
{{ imageGallery(gallerySingle, "Godzilla in Tokio") }}

# Gallery Half
{{ imageGallery(
    images = gallery, 
    caption = null, 
    layout = "half") }}

# Gallery Third
{{ imageGallery(gallery2, null, "third") }}

# Gallery Quarter
{{ imageGallery(gallery2, null, "quarter") }}

# Einzelbild
{% cloudinary "/assets/2020-10-27-peak-design-capture-v3/capture_backpack.jpg", "Clip am Rucksack" %}

Vivamus vestibulum magna vel dui auctor vestibulum. Fusce feugiat bibendum eros, eu egestas turpis sollicitudin a. 
Etiam porttitor facilisis justo, efficitur tempor sapien commodo a. Suspendisse orci tellus, laoreet in consectetur eget, 
vehicula et justo. Sed urna nunc, vestibulum id dapibus et, tempus id massa. Proin tellus nisi, tempor non venenatis eget, malesuada ut nibh. 
In ut augue sit amet ante dignissim pharetra id ac odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
Quisque tincidunt neque 