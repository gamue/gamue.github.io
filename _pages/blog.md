---
title: Blog
permalink: /blog/
layout: default
pagination: 
  enabled: true
---

<div id="main" role="main">
  <div class="archive">

{% assign entries_layout = 'list' %}
<div class="entries-{{ entries_layout }}">
  {% for post in paginator.posts %}
    {% include archive-single.html type=entries_layout %}
  {% endfor %}
</div>

{% include paginator.html %}

   </div>
</div>