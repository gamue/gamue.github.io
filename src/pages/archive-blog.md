---
title: Alle Artikel
layout: layouts/posts-archive.njk
permalink: "blog/{% if pagination.pageNumber > 0 %}page{{ pagination.pageNumber +1 }}/{% endif %}index.html"
pagination:
  data: collections.posts
  size: 8
  alias: posts
  reverse: true
---
