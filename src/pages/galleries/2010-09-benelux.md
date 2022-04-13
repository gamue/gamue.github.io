---
title: BeNeLux 2010
tagline: Bilder eines kleinen Roadtrips durch Luxemburg, Belgien, die Niederlande und Norddeutschland im September 2010.
permalink: /photography/benelux-2010/
header:
    teaser: assets/photography/2010_09_niederlande/dsc_3870_hdr_0.jpg
    overlay_image: assets/photography/2010_09_belgien/dsc_3269.jpg
---
{%- from "macros/gallery.njk" import imageGallery -%}
# Luxemburg{: .pb-2}

{% set gallery = "/assets/photography/2010_09_luxemburg" | getGalleryFromDir %}
{{ imageGallery(
    images = gallery,
    caption = null,
    layout = "quarter",
    equal_height = true) }}

# Belgien{: .pt-8 .pb-2}

{% set gallery = "/assets/photography/2010_09_belgien" | getGalleryFromDir %}
{{ imageGallery(
    images = gallery,
    caption = null,
    layout = "quarter",
    equal_height = true) }}

# Niederlande{: .pt-8 .pb-2}

{% set gallery = "/assets/photography/2010_09_niederlande" | getGalleryFromDir %}
{{ imageGallery(
    images = gallery,
    caption = null,
    layout = "quarter",
    equal_height = true) }}

# Deutschland{: .pt-8 .pb-2}

{% set gallery = "/assets/photography/2010_09_deutschland" | getGalleryFromDir %}
{{ imageGallery(
    images = gallery,
    caption = null,
    layout = "quarter",
    equal_height = true) }}
