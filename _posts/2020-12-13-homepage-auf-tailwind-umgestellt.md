---
title: Migration zu TailwindCSS
description: Ich den letzten Wochen habe ich an der Technik der Homepage geschraubt und das Layout auf TailwindCSS umgestellt.
permalink: /migration-zu-tailwindcss/
header:
    teaser: assets/2020-12-13-homepage-auf-tailwind-umgestellt/tailwind_thumb.jpg
    overlay_image: assets/2020-12-13-homepage-auf-tailwind-umgestellt/tailwind_hero.jpg
    overlay_filter: rgba(200, 200, 200, 0.6)
categories:
  - Technik
tags:
  - Homepage
---

In den letzten Wochen und Monaten habe ich mal wieder an der Technik der Homepage geschraubt. 
Wie es meistens so ist, ist das meiste davon nicht sichtbar und man könnte darüber diskutieren, ob es notwendig war, 
aber ich habe wieder etliches gelernt und das ist mit ein Grund warum ich das mache ;)

# Tschüss minimal-mistakes

Seitdem ich die Homepage von [Wordpress auf Jekyll umgestellt][1] habe, 
habe ich als Design das [minimal-mistakes Theme][2] genutzt und dort auch selbst ein paar Kleinigkeiten dazu beigetragen (ein Hoch auf Open Source). 
Da meine Layout- und Design-Vorstellungen aber immer mehr und mehr vom Theme abgewichen sind, 
hatte ich etliche Anpassungen in meinem Code was schon 1-2 mal zu Problemen mit Updates führte.

Da das Theme zudem recht alt ist, verwendet es etliche Frameworks und Bibliotheken, die veraltet sind und teilweise sogar nicht mehr gewartet werden. 
Hinzu kommt, dass das Theme viele Optionen und Möglichkeiten bietet, die ich nicht verwende und diese teilweise die Ladezeit unnötig verlängern.

Aus den Gründen habe ich beschlossen meine Seite umzustellen, sodass ich mich vom Theme abkopple, 
die Updates davon nicht mehr bekomme und so eigene Anpassungen vornehmen kann. Möchte aber betonen, 
dass ich das Theme nach wie vor sehr gut finde und der Entwickler eine fantastische Arbeit gemacht hat und immer noch macht, 
obwohl er das Theme selbst auch nicht mehr nutzt.

Nachdem ich die Layout-Dateien vom minimal-mistakes-Theme in mein Repository kopiert und die Verbindung zu den Updates gekappt hatte, 
ging es mit dem Entschlacken los. Jede Datei, Zeile und Konfigurationsoption durchzugehen, hat mir auch nochmal besser geholfen Jekyll zu verstehen. 
Insgesamt waren es sehr viele kleinere Dinge, die ich entfernt und angepasst habe, aber es waren auch ein paar größere Schritte dabei. 
So habe ich die Möglichkeit genutzt Jekyll auf Version 4 zu aktualisieren, was einige Nerven mit den Abhängigkeiten gekostet hat.

Eine weitere größere Änderung, war das Einbinden von [PurgeCSS][3], ein Tool, dass nicht verwendete CSS-Definitionen erkennt und im Build-Prozess entfernt. 
Gerade weil ich die minimal-mistake-CSS-Klassen nicht anfassen wollte, war das sehr hilfreich und von den 106 kb Dateigröße blieben am Ende nur noch 73 kb übrig.

Ich hab aber nicht nur technische Änderungen vorgenommen, besonders die Startseite hat viele Änderungen erfahren, 
so kam ein Einleitungsbereich hinzu, damit jeder gleich weiß um was es geht und die letzten 4 Artikel werden nun nicht mehr als Liste, 
sondern als Kacheln dargestellt. Mit dem Umstieg auf [jekyll-paginate-v2][4] habe ich auch gleich die Blog-Übersichtsseite neu gestaltet.

# Hallo TailwindCSS

Eigentlich wollte ich weitere Änderungen erst später machen, aber das "Redesign" hat mich dann doch zu sehr gereizt. 
Die HTML-Dateien hatte ich bereits recht gut angepasst und die Strukturen entsprechend verändert, 
die CSS- und JavaScript-Dateien waren aber noch so gut wie unberührt vom minimal-mistakes-Theme übernommen. 
Genau denen sollte es im nächsten Schritt an den Kragen gehen.

CSS kann knifflig sein und heutzutage ist es wichtig, dass die Seite auf mehreren Bildschirmgrößen gut aussieht und sich entsprechend anpasst. 
Aus dem Grund wollte ich ein CSS Framework nutzen, welches mir einiges an Arbeit abnimmt. 
Eines solcher Frameworks hört auf den Namen [TailwindCSS][5] und erfreut sich in letzter Zeit hoher Beliebtheit unter Frontend-Entwicklern. 
Zufälligerweise hatte ich damit vor kurzem beruflich Berührung und konnte erste Erfahrungen sammeln. 
Weil es mir dort gefallen hat und ich die Nutzung sehr einfach finde, ist die Wahl dann auch auf [TailwindCSS][5] gefallen.

Ich werden in diesem Artikel nicht in die Tiefe gehen, solltest du aber vor einer ähnlichen Herausforderung stehen und eine Webseite umsetzen wollen, 
schau dir [TailwindCSS][5] einmal genauer an, ich kann es nur empfehlen und die Anpassungen gingen nach einer kleinen Eingewöhnungs- und Lernphase recht schnell von der Hand.

Das Schwierigste war ein vernünftiges Setup hinzubekommen, von den vielen Tutorials und Beispielprojekten rund um Jekyll zusammen mit TailwindCSS haben etliche entweder nicht funktioniert oder nutzen eine sehr alte Version. 
Am Ende hatte ich dann aber doch noch [eine Variante gefunden][6], die für mich gepasst hat (ein weiteres Hoch auf Open Source). 
Mit einer anderen Technologie als Jekyll, wäre das sicherlich alles etwas einfacher gewesen, aber damit fangen wir jetzt nicht an ;)

Als das CSS überarbeitet war, ging es als Nächstes ans JavaScript. Wirklich viel benötige ich davon zurzeit nicht, 
neben der Bildergalerie sind lediglich ein paar Zeilen für das Navigationsmenü notwendig. Daher wollte ich darauf verzichten eine Bibliothek, 
wie beispielsweise [jQuery][7], einzubinden. Gar nicht so einfach, denn die meisten Lightbox-Galerien haben eine Abhängigkeit zu jQuery. 
Nach einiger Suche habe ich dann aber [SimpleLightbox][8] gefunden und es macht genau das, was ich will (Bild darstellen und über die Tastatur navigieren), 
zudem ist es deutlich einfacher zu nutzen, als die Alternativen, die ich getestet hatte.

# Nächste Themen

Um ehrlich zu sein, gab es noch eine Stelle, die JavaScript verwendet hat: die Suchfunktion. 
Mit der Umsetzung davon war ich aber nicht wirklich zufrieden und hab sie daher erst einmal ausgebaut um den aktuellen Stand veröffentlichen zu können. 
Ich will mir zur Suche nochmal Gedanken machen und überlege, ob ich die bisherige [Lunr-Variante][9] gegen eine [Algolia-Implementation][10] austausche.

Vor der Umstellung auf TailwindCSS hatte ich schon kurz Algolia getestet, es dann aber nicht weiterverfolgt, da ich das CSS nicht so anpassen konnte, 
wie ich wollte bzw. ich es nicht in den alten Stand einbauen wollte. Die Voraussetzung hat sich ja zwischenzeitlich geändert, 
wäre daher vermutlich ein neuer Anlauf wert, aber schauen wir mal, welche Priorität das bekommt ;)

Ansonsten stehen noch weitere Designänderungen an, bei der TailwindCSS-Migration habe ich mich recht nah am vorherigen Stand orientiert, 
habe aber schon die ein oder andere Stelle im Auge, die ich noch etwas ändern möchte. 
Aber wie gesagt, eigentlich wollte ich erst viele andere Dinge fertig machen, bevor ich mich an die ganzen Änderungen gesetzt habe :D

[1]: {% post_url 2019-09-01-relaunch %}
[2]: https://github.com/mmistakes/minimal-mistakes
[3]: https://purgecss.com/
[4]: https://github.com/sverrirs/jekyll-paginate-v2
[5]: https://tailwindcss.com/
[6]: https://github.com/kangabru/jekyll-tailwindcss-boilerplate
[7]:https://jquery.com/
[8]: https://dbrekalo.github.io/simpleLightbox/
[9]: https://lunrjs.com/
[10]: https://www.algolia.com/
