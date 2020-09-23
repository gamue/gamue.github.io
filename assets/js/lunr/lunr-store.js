---
layout: null
---

var store = [
  {%- for p in site.pages -%}
    {%- if p.search -%}
        {
         "title": {{ p.title | jsonify }},
         "excerpt":
             {{ p.content | newline_to_br |
               replace:"<br />", " " |
               replace:"</p>", " " |
               replace:"</h1>", " " |
               replace:"</h2>", " " |
               replace:"</h3>", " " |
               replace:"</h4>", " " |
               replace:"</h5>", " " |
               replace:"</h6>", " "|
             strip_html | strip_newlines | truncatewords: 50 | jsonify }},
         "categories": {{ p.categories | jsonify }},
         "tags": {{ p.tags | jsonify }},
         "url": {{ p.url | absolute_url | jsonify }},
          {%- assign img_path = p.header.teaser | absolute_url -%}
          {%- if jekyll.environment == 'production' and img_path -%}
         "teaser": {{ "https://res.cloudinary.com/gamue/image/fetch/c_limit,f_auto,q_auto,w_400/" | append: img_path | jsonify }}
          {%- else -%}
          "teaser": {{ img_path | jsonify }}
          {%- endif -%}
       },
    {%- endif -%}
  {%- endfor -%}

  {%- for c in site.collections -%}
    {%- if forloop.last -%}
      {%- assign l = true -%}
    {%- endif -%}
    {%- assign docs = c.docs | where_exp:'doc','doc.search != false' -%}
    {%- for doc in docs -%}
      {%- if doc.header.teaser -%}
        {%- capture teaser -%}{{ doc.header.teaser }}{%- endcapture -%}
      {%- else -%}
        {%- assign teaser = site.teaser -%}
      {%- endif -%}
      {
        "title": {{ doc.title | jsonify }},
        "excerpt":
          {%- if site.search_full_content == true -%}
            {{ doc.content | newline_to_br |
              replace:"<br />", " " |
              replace:"</p>", " " |
              replace:"</h1>", " " |
              replace:"</h2>", " " |
              replace:"</h3>", " " |
              replace:"</h4>", " " |
              replace:"</h5>", " " |
              replace:"</h6>", " "|
            strip_html | strip_newlines | jsonify }},
          {%- else -%}
            {{ doc.content | newline_to_br |
              replace:"<br />", " " |
              replace:"</p>", " " |
              replace:"</h1>", " " |
              replace:"</h2>", " " |
              replace:"</h3>", " " |
              replace:"</h4>", " " |
              replace:"</h5>", " " |
              replace:"</h6>", " "|
            strip_html | strip_newlines | truncatewords: 50 | jsonify }},
          {%- endif -%}
        "categories": {{ doc.categories | jsonify }},
        "tags": {{ doc.tags | jsonify }},
        "url": {{ doc.url | absolute_url | jsonify }},
        {%- assign img_path = teaser | absolute_url -%}
        {%- if jekyll.environment == 'production' and img_path -%}
        "teaser": {{ "https://res.cloudinary.com/gamue/image/fetch/c_limit,f_auto,q_auto,w_400/" | append: img_path | jsonify }}
        {%- else -%}
        "teaser": {{ img_path | jsonify }}
        {%- endif -%}
      }{%- unless forloop.last and l -%},{%- endunless -%}
    {%- endfor -%}
  {%- endfor -%}]
