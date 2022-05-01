---
layout: posts-archive-categories.njk
pagination:
  data: collections.blogpostsByTags
  size: 1
  alias: category
eleventyComputed:
  title: Artikel aus der Kategorie {{ category.title }}
permalink: "{{ category.slug }}/"
---
