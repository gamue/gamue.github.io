---
title: Vietnam 2018
tagline: Den Jahreswechsel 2017/2018 verbrachten wir in der Wärme Südostasiens, genauer gesagt in Vietnam. 
    Anschließend ging es für 3 Wochen quer durch das Land, leider war das Wetter dabei nicht immer auf unserer Seite.
permalink: /photography/vietnam-2018/
header:
    teaser: assets/photography/2018_01_vietnam/Vietnam_0721b.jpg
    overlay_image: assets/photography/2018_01_vietnam/Vietnam_1227.jpg
    overlay_filter: rgba(200, 200, 200, 0.6)
---

{% set gallery = "/assets/photography/2018_01_vietnam" | getGalleryFromDir %}
{{ imageGallery(
    images = gallery,
    caption = null,
    layout = "quarter",
    equal_height = true) }}
