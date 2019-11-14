---
title: Rumänien
permalink: /rumaenien/
header:
    teaser: thumbnails/photography/2013_08_suedosteuropa/Rumaenien_187.jpg
    overlay_image: assets/photography/2013_08_suedosteuropa/Rumaenien_401.jpg
---

Rumänien hab ich im Sommer 2013 als Teil einer kleinen Odyssee bereist und hab mir vorgenommen wiederzukommen.

[Zur Bildergalerie](/photography/suedosteuropa-2013/){: .btn .btn--primary}

## Reiseroute
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=104xblik_61hUGYdsez4n_sM9fFgYUcY6" width="100%" height="550px"></iframe>

## Artikel über Rumänien
<div>
{% for post in site.posts %}
  {% if post.tags contains 'Rumänien' %}
    {% include archive-single.html type="grid" %}
  {% endif %}
{% endfor %}
</div>
