---
title: Destinationen
description: Hier findest du Informationen über meine Reiserouten, Reiseberichte und viele weitere Tipps zu den Ländern, die ich schon besucht habe.
comments: false
full_width: true
typography: false
permalink: /laender/
header:
    teaser: assets/photography/2012_06_island/dsc_1072.jpg
---

{% assign countries = site.pages | where_exp: "item" , "item.path contains 'countries/'"%}
{% include content/teaser-gallery.html pages=countries %}
