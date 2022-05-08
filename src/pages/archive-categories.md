---
layout: posts-archive.njk
pagination:
  data: collections.blogpostsByCategories
  size: 1
  alias: category
eleventyComputed:
  title: Artikel aus der Kategorie {{ category.title }}
permalink: "{{ category.slug }}"
---
