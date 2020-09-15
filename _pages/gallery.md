---
title: Photos
classes: galleryPage
permalink: /photography/
---

{% assign galleries = site.pages | where_exp: "item" , "item.path contains 'photography'" | reverse %}
{% include custom/teaser-gallery.html pages=galleries %}