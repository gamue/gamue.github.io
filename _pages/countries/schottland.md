---
title: Schottland
permalink: /schottland/
header:
    teaser: thumbnails/photography/2013_07_schottland/Schottland_0504_tonemapped.jpg
    overlay_image: assets/photography/2013_07_schottland/Schottland_0504_tonemapped.jpg
---

Im Juli 2013 ging es mal wieder auf Erkundungstour, dieses Mal nach Schottland. Highland- und Whiskytour inklusive^^

## Reiseroute
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=13M0bhnclOXshJVWDQx-L2Q3Suqd-Yi-e" width="100%" height="550px"></iframe>

## Artikel über Schottland
<div>
{% for post in site.posts %}
  {% if post.tags contains 'Schottland' %}
    {% include archive-single.html type="grid" %}
  {% endif %}
{% endfor %}
</div>
