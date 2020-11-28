---
title: Photos
description: Auf meinen Reisen habe ich sehr viele Bilder gemacht, einige davon sind hier zu sehen.
classes: galleryPage
permalink: /photography/
---

{% assign galleries = site.pages | where_exp: "item" , "item.path contains 'photography'" | reverse %}
{% include custom/teaser-gallery.html pages=galleries %}