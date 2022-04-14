---
title: Here, There and Everywhere
tagline: Gemischte Reisebilder von diversen Flecken der Erde, an die es mich meistens für einen Kurztrip gezogen hat. 
permalink: /photography/here-there-and-everywhere/
header:
    teaser: assets/photography/0000_misc/2011-03_neuschwanstein.jpg
    overlay_image: assets/photography/0000_misc/2018-08_SaechsischeSchweiz_069.jpg
---

{% set gallery = "/assets/photography/0000_misc" | getGalleryFromDir | reverse %}
{{ imageGallery(
    images = gallery,
    caption = null,
    layout = "quarter",
    equal_height = true) }}
