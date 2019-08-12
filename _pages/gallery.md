---
layout: single
classes: galleryPage
title: Photos
permalink: /photography/
---

<div class="galleryPreview">
{% assign galleries = site.pages | where_exp: "item" , "item.path contains 'photography'"%}
{% for item in galleries reversed %}
    <article>
        <a href="{{item.permalink}}">
            <div class="meta"><h2>{{item.title}}</h2></div>
            <section class="gallery">
                {% if item.header.teaser %}
                <div class="image" style="background-image: url('/{{item.header.teaser}}')"></div>
                <div class="shadow">
                    <div class="shadow-image" style="background-image: url('/{{item.header.teaser}}')"></div>
                </div>
                {% else %}
                <div class="image"></div>
                {% endif %}
            </section>
        </a>
    </article>
{% endfor %}
</div>