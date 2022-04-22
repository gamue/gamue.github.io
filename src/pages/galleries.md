---
title: Reisegalerien
description: Auf meinen Reisen habe ich sehr viele Bilder gemacht, einige davon sind hier zu sehen.
full_width: true
typography: false
permalink: /photography/
header:
    teaser: assets/photography/2020_07_deutschland/Deutschland_0535.jpg
---
{%- from "macros/teaser-gallery.njk" import teaserGallery with context -%}
{% set allCountries = collections.galleries | sortByFileSlug | reverse %}
{{ teaserGallery(allCountries) }}

