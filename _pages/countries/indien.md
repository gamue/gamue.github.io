---
title: Indien
permalink: /indien/
header:
    teaser: thumbnails/photography/2011_10_indien/dsc_8266.jpg
    overlay_image: assets/photography/2011_10_indien/dsc_8533.jpg
---

Im Oktober 2011 hat es mich auf eine 4 wöchige Tour durch Nord-Indien und Nepal verschlagen. 

Start des Trips war in Delhi. Nach Stationen in Agra, Orcha, Khajuraho und Varanasi ging es auf dem Landweg 
zur nepalesischen Grenze in Sonauli.

## Reiseroute
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=16H6_4xl5uwt91PZLog8xUBhNvYb4LN40" width="100%" height="550px"></iframe>

## Artikel über Indien
<div>
{% for post in site.posts %}
  {% if post.tags contains 'Indien' %}
    {% include archive-single.html type="grid" %}
  {% endif %}
{% endfor %}
</div>
