---
title: Türkei 2014
tagline: Was als kleiner Städtetrip angedacht war, wurde dann doch noch etwas landschaftlich...Metropolen sind nicht so mein Ding ;)
permalink: /photography/tuerkei-2014/
header:
    teaser: assets/photography/2014_05_tuerkei/Tuerkei_411_tonemapped.jpg
    overlay_image: assets/photography/2014_05_tuerkei/Tuerkei_690.jpg
---
{%- from "macros/gallery.njk" import imageGallery -%}
{% set gallery = "/assets/photography/2014_05_tuerkei" | getGalleryFromDir %}
{{ imageGallery(
    images = gallery,
    caption = null,
    layout = "quarter",
    equal_height = true) }}
