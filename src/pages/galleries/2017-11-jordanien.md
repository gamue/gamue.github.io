---
title: Jordanien 2017
tagline: Gegen Ende 2017 wollte ich nochmal in die Wärme und da passte es gut, dass es preiswerte Flüge nach Jordanien gab, denn die Felsenstadt Petra war schon länger auf meiner Liste. Und es war noch beeindruckender als ich es mir vorgestellt hatte.  
permalink: /photography/jordanien-2017/
header:
    teaser: assets/photography/2017_11_jordanien/Jordanien_404b.jpg
    overlay_image: assets/photography/2017_11_jordanien/Jordanien_307.jpg
---
{%- from "macros/gallery.njk" import imageGallery -%}
{% set gallery = "/assets/photography/2017_11_jordanien" | getGalleryFromDir %}
{{ imageGallery(
    images = gallery,
    caption = null,
    layout = "quarter",
    equal_height = true) }}