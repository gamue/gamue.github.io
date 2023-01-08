---
title: Peoplefotografie
description: Ein Auszug aus meinen Fotos rund um die Peoplefotografie.
permalink: /portfolio-people/
header:
    teaser: assets/photography/people/20221019_Marlene_077.jpg
full_width: true
typography: false
masonry: true
gallery:
    - image_path: assets/photography/people/20220415_Lisa_136.jpg
      caption: Lisa (@lisa.hates.you)
    - image_path: assets/photography/people/20210424_Suzie_020.jpg
      caption: Suzie (@suziefleur)
    - image_path: assets/photography/people/20210729_Anita_310.jpg
      caption: Anita (@kozlowska.anita)
    - image_path: assets/photography/people/20210306_Valentin_140b.jpg
      caption: Valentin (@valentinduceac)
    - image_path: assets/photography/people/20220430_Kristin_010.jpg
      caption: Kristin (@tini_0112)
    - image_path: assets/photography/people/20220306_Yee_090_insta.jpg
      caption: Yee (@yeeeeehimw)
    - image_path: assets/photography/people/20210729_Anita_432.jpg
      caption: Anita (@kozlowska.anita)
    - image_path: assets/photography/people/20210821_Anastasiya_255.jpg
      caption: Anastasiya (@kopfkino.az)
    - image_path: assets/photography/people/20210501_Daniel_303.jpg
      caption: Daniel (@danielhauser_official)
    - image_path: assets/photography/people/20210429_JayJay_224.jpg
      caption: JayJay (@pinkloveliness)
    - image_path: assets/photography/people/20220711_Katia_411.jpg
      caption: Katja (@katiadorothee)
    - image_path: assets/photography/people/20221019_Marlene_077.jpg
      caption: Marlene (@marlene.rec)
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