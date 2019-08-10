---
layout: single
title: Photos
permalink: /gallery/
---

<ul>
{% assign galleries = site.pages | where_exp: "item" , "item.path contains 'photography'"%}
{% for item in galleries reversed %}
    <li><a href="{{item.permalink}}">{{item.title}}</a></li>
{% endfor %}
</ul>