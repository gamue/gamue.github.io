---
title: Schottland 2013
tagline: Im Juli 2013 ging es mal wieder auf Erkundungstour, dieses Mal nach Schottland. Highland- und Whiskytour inklusive^^ 
permalink: /photography/schottland-2013/
header:
    teaser: assets/photography/2013_07_schottland/Schottland_0504_tonemapped.jpg
    overlay_image: assets/photography/2013_07_schottland/Schottland_0504_tonemapped.jpg
---
{%- from "macros/gallery.njk" import imageGallery -%}
{% set gallery = "/assets/photography/2013_07_schottland" | getGalleryFromDir %}
{{ imageGallery(
    images = gallery,
    caption = null,
    layout = "quarter",
    equal_height = true) }}