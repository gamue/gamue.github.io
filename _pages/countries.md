---
title: Länder
description: Hier findest du Informationen über meine Reiserouten, Reiseberichte und viele weitere Tipps zu den Ländern, die ich schon besucht habe.
classes: galleryPage
permalink: /laender/
---

{% assign countries = site.pages | where_exp: "item" , "item.path contains 'countries/'"%}
{% include custom/teaser-gallery.html pages=countries %}
