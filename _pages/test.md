---
title: Cloudinary Test
permalink: /test/
sitemap:
    exclude: 'yes'
---

## Normales Bild (breit)
### Standard
{% cloudinary /assets/2020-08-22-superzooms/brennweiten.jpg alt="Brennweitenvergleich" %}

### Mit Caption
{% cloudinary /assets/2020-08-09-kaufberatung-kamera-grundlagen/kameras.jpg alt="Kameras" caption="Diverse Kameras" %}

## Normales Bild (hoch)
### Standard
{% cloudinary /assets/photography/2019_04_belize/Belize_0050.jpg alt="Belize" %}

### Mit Caption
{% cloudinary /assets/photography/2019_04_belize/Belize_0218b.jpg alt="Schnorcheln" caption="Schnorcheln" %}

## Thumbnail
### Standard
<div class="archive__item-teaser-wrapper">
{% cloudinary thumbnail /assets/photography/2019_04_belize/Belize_0050.jpg alt="Belize" %}
</div>

<div class="archive__item-teaser-wrapper">
{% cloudinary thumbnail /assets/2020-08-09-kaufberatung-kamera-grundlagen/kameras.jpg alt="Kameras" %}
</div>

<div class="cf" />

### Mit Caption
<div class="archive__item-teaser-wrapper">
{% cloudinary thumbnail /assets/photography/2019_04_belize/Belize_0218b.jpg alt="Schnorcheln" caption="Schnorcheln" %}
</div>
