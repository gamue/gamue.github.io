---
title: Destinationen
description: Hier findest du Informationen über meine Reiserouten, Reiseberichte und viele weitere Tipps zu den Ländern, die ich schon besucht habe.
full_width: true
typography: false
permalink: /laender/
header:
    teaser: assets/photography/2012_06_island/dsc_1072.jpg
---
{%- from "macros/teaser-gallery.njk" import teaserGallery -%}
{# Alphabetisch Sortieren #}
{% set allCountries = collections.laender %}
{{ teaserGallery(allCountries) }}
