---
layout: landingpage
title: Fotografie
description: Fotografie ist meine Leidenschaft und besonders die Reise- und Landschaftsfotografie hat es mir angetan.
permalink: /fotografie/
header:
    overlay_image: assets/2021-01-15-raw-konverter-intro/markus-spiske-nfwBWcaFAYg-unsplash.jpg
preview:
    enabled: true
    category: 'Fotografie'
---

<div class="p-4 bg-gray-100 text-gray-700">
  <div class="container p-4 my-4 text-base sm:text-lg md:text-xl">
    <p class="mb-4">
        Meine erste Fotokamera habe ich mit 9 Jahren geschenkt bekommen. 
        Die war zwar sehr einfach und meine Bilder nicht wirklich gut, aber es hat mir Spaß gemacht und die Fotografie mich nicht mehr losgelassen. 
        Nach etlichen Digitalkameras habe ich mir 2007 meine erste Spiegelreflexkamera geleistet und beschäftige mich seitdem intensiv mit der Fotografie.
    </p>
    <p class="mb-4">
        Besonders auf Reisen ist die Kamera ein fester Bestandteil meines Gepäcks geworden, 
        sodass ich andere an den bewegenden Momenten und beeindruckenden Landschaften teilhaben lassen kann.
    </p>
    <p class="mb-4">
        Eine Auswahl meiner besten Bildern findest du auf den Portfolio-Seiten.
    </p>
    <div class="flex flex-wrap justify-center">
        {% capture url_landschaft %}{% link _pages/portfolio__landschaft.md %}{% endcapture %}
        {% include content/teaser-gallery-item.html title='Reise- und Landschaftsbilder' permalink=url_landschaft image='/assets/photography/2020_07_deutschland/Deutschland_0535.jpg' layout='half' %}
        {% capture url_people %}{% link _pages/portfolio__people.md %}{% endcapture %}
        {% include content/teaser-gallery-item.html title='People' permalink=url_people image='/assets/photography/people/DSC_6526.jpg' layout='half' %}
    </div>
    <h2 class="mb-6 mt-12">Du hast Lust mit mir zu fotografieren?</h2>
    <p class="mb-4">
        Aktuell beschäftige ich mich viel mit der Fotografie von Menschen und möchte meine Erfahrungen in diesem Bereich weiter ausbauen. 
        Solltest du daher Interesse an einem <a href="{% link _pages/tfp-shooting.md %}" class="text-red-900">TfP-Shooting</a> im Umkreis von Berlin haben, würde ich mich über eine Nachricht von dir sehr freuen!
        <a href="{% link _pages/tfp-shooting.md %}" class="text-red-900">Mehr Details dazu findest du hier.</a>
    </p>
    <p>
        Ich bin jedoch auch dafür zu haben, bei einem Fotowalk die Berliner Bezirke abzulichten und freue mich immer über den Austausch mit Gleichgesinnten. 
        Schreib mich einfach an und wir sehen weiter ;)
    </p>
  </div>
</div>
