---
title: Photos
classes: galleryPage
permalink: /photography/
header:
    og_image: assets/images/j_logo.jpg
---

{% assign galleries = site.pages | where_exp: "item" , "item.path contains 'photography'" | reverse %}
{% include teaser-gallery.html pages=galleries %}