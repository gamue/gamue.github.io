---
title: Blog
permalink: /blog/
layout: default
pagination: 
  enabled: true
---

<section class="container text-gray-700 flex flex-col place-items-center pt-8">
  {% for post in paginator.posts %}
    {% include post-summary-list-view.html %}
  {% endfor %}
</section>

{% include paginator.html %}