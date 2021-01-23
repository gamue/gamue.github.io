---
title: Reisegalerien
description: Auf meinen Reisen habe ich sehr viele Bilder gemacht, einige davon sind hier zu sehen.
comments: false
full_width: true
typography: false
permalink: /photography/
header:
    teaser: assets/photography/2020_07_deutschland/Deutschland_0535.jpg
---

{% assign galleries = site.pages | where_exp: "item" , "item.path contains 'photography'" | reverse %}
{% include content/teaser-gallery.html pages=galleries %}