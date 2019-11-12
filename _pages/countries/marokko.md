---
title: Marokko
permalink: /marokko/
header:
    teaser: thumbnails/photography/2011_05_marokko/dsc_5597.jpg
    overlay_image: assets/photography/2011_05_marokko/dsc_6070.jpg
---

Im Mai 2011 hat es mich zu einer Rucksacktour nach Marokko getrieben.


## Reiseroute
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1leiIo594Bjk4XyBjp8QOqsiu-6KQk33u" width="100%" height="550px"></iframe>

## Artikel über Marokko
<div>
{% for post in site.posts %}
  {% if post.tags contains 'Marokko' %}
    {% include archive-single.html type="grid" %}
  {% endif %}
{% endfor %}
</div>
