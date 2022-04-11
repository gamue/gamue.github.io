---
title: Südosteuropa 2013
tagline: Meine Odyssee im August 2013 führte mich von Berlin nach Oslo, anschließend in den Kosovo und über Nordmazedonien und Serbien nach Rumänien :D
permalink: /photography/suedosteuropa-2013/
header:
    teaser: assets/photography/2013_08_rumaenien/Rumaenien_415_tonemapped.jpg
    overlay_image: assets/photography/2013_08_rumaenien/Rumaenien_415_tonemapped.jpg
---
{%- from "macros/gallery.njk" import imageGallery -%}
# Oslo
{: .pb-2}

{% set gallery = "/assets/photography/2013_08_oslo" | getGalleryFromDir %}
{{ imageGallery(
    images = gallery,
    caption = null,
    layout = "quarter",
    equal_height = true) }}

# Kosovo
{: .pt-8 .pb-2}

{% set gallery = "/assets/photography/2013_08_kosovo" | getGalleryFromDir %}
{{ imageGallery(
    images = gallery,
    caption = null,
    layout = "quarter",
    equal_height = true) }}

# Nordmazedonien
{: .pt-8 .pb-2}

{% set gallery = "/assets/photography/2013_08_mazedonien" | getGalleryFromDir %}
{{ imageGallery(
    images = gallery,
    caption = null,
    layout = "quarter",
    equal_height = true) }}

# Serbien
{: .pt-8 .pb-2}

{% set gallery = "/assets/photography/2013_08_serbien" | getGalleryFromDir %}
{{ imageGallery(
images = gallery,
caption = null,
layout = "quarter",
equal_height = true) }}

# Rumänien
{: .pt-8 .pb-2}

{% set gallery = "/assets/photography/2013_08_rumaenien" | getGalleryFromDir %}
{{ imageGallery(
    images = gallery,
    caption = null,
    layout = "quarter",
    equal_height = true) }}