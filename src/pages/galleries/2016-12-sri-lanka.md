---
title: Sri Lanka 2016
tagline: In der Vorweihnachtszeit 2016 sind wir vor der heimischen Kälte nach Sri Lanka geflohen.
permalink: /photography/sri-lanka-2016/
header:
    teaser: assets/photography/2016_12_sri_lanka/SriLanka_0255.jpg
    overlay_image: assets/photography/2016_12_sri_lanka/SriLanka_0255.jpg
---
{%- from "macros/gallery.njk" import imageGallery -%}
{% set gallery = "/assets/photography/2016_12_sri_lanka" | getGalleryFromDir %}
{{ imageGallery(
    images = gallery,
    caption = null,
    layout = "quarter",
    equal_height = true) }}