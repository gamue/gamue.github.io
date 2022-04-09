---
title: Peoplefotografie
description: Ein Auszug aus meinen Fotos rund um die Peoplefotografie.
permalink: /portfolio-people/
header:
    teaser: assets/photography/people/DSC_3113a.jpg
full_width: true
typography: false
masonry: true
gallery:
    - image_path: assets/photography/people/DSC_3113a.jpg
    - image_path: assets/photography/people/20210424_Suzie_020.jpg
      caption: Suzie (@suziefleur)
    - image_path: assets/photography/people/20210821_Anastasiya_118.jpg
      caption: Anastasiya (@kopfkino.az)
    - image_path: assets/photography/people/20210729_Anita_354.jpg
      caption: Anita (@kozlowska.anita)
    - image_path: assets/photography/people/20210306_Valentin_140b.jpg
      caption: Valentin (@valentinduceac)
    - image_path: assets/photography/people/20210429_JayJay_224.jpg
      caption: JayJay (@pinkloveliness)
    - image_path: assets/photography/people/20210411_Marcel_512.jpg
      caption: Marcel (@thor_odinson_47)
    - image_path: assets/photography/people/20210424_Suzie_146.jpg
      caption: Suzie (@suziefleur)
    - image_path: assets/photography/people/20210729_Anita_432.jpg
      caption: Anita (@kozlowska.anita)
    - image_path: assets/photography/people/20210411_Marcel_360.jpg
      caption: Marcel (@thor_odinson_47)
    - image_path: assets/photography/people/20210515_Lydia_170.jpg
      caption: Lydia (@fischi_onstage)
    - image_path: assets/photography/people/20210821_Anastasiya_255.jpg
      caption: Anastasiya (@kopfkino.az)
    - image_path: assets/photography/people/20210729_Anita_310.jpg
      caption: Anita (@kozlowska.anita)
    - image_path: assets/photography/people/20210501_Daniel_303.jpg
      caption: Daniel (@danielhauser_)
    - image_path: assets/photography/people/20210718_Svenja_150.jpg
      caption: Svenja (@funkengeflunker)
---
{%- from "macros/gallery.njk" import imageGallery -%}
{{ imageGallery(
    images=gallery, 
    caption=null, 
    layout='third', 
    reverse=false, 
    equal_height=false, 
    double_padding=true, 
    masonry=true ) }}

<div class="container prose prose-sm md:prose lg:prose-lg mt-8">
    <p>Auf dieser Seite sind nur einige meiner People-Bilder zu sehen. Mehr findest du auf meinem gesonderten <a href="{{site.accounts.instagram_people}}">Instagram-Account @gamue16</a>.</p>
    <h2>Lust auf ein TfP-Shooting?</h2>
    <p>Solltest du Interesse an einem <a href="{% post_url collections.pages, 'tfp-shooting' %}">TfP-Shooting</a> im Umkreis von Berlin haben, würde ich mich über eine Nachricht von dir sehr freuen!</p>
    <p><a href="{% post_url collections.pages, 'tfp-shooting' %}">Mehr Details findest du hier.</a></p>
</div>