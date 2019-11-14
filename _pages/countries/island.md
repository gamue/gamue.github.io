---
title: Island
permalink: /island/
header:
    teaser: thumbnails/photography/2012_06_island/dsc_1072.jpg
    overlay_image: assets/photography/2012_06_island/dsc_0825_tonemapped.jpg
---

Zusammen mit 2 Freunden bin ich im Juni 2012 zu einer 19tägigen Campingtour in den Süden Islands aufgebrochen.

## Reiseroute
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1l9GsFIl_4JCTuQ_WnELbovhZ7g7mg7zI" width="100%" height="550px"></iframe>

## Artikel über Island
<div>
{% for post in site.posts %}
  {% if post.tags contains 'Island' %}
    {% include archive-single.html type="grid" %}
  {% endif %}
{% endfor %}
</div>
