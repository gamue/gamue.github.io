---
title: "Darktable, der kostenlose RAW-Konverter"
description: Im Gegensatz zu den meisten RAW-konvertern ist Darktable ein Open Source Programm und somit kostenlos erhältlich, in diesem Post nehme ich es unter die Lupe und schildere meine Erfahrungen damit.
permalink: /darktable-der-kostenlose-raw-konverter/
header:
    teaser: assets/2021-01-27-darktable/darktable_thumb.jpg
    overlay_image: assets/2021-01-27-darktable/darktable_entwicklung.jpg
categories:
    - Fotografie
tags:
    - Software
---

Im Gegensatz zu den meisten RAW-Konvertern ist [Darktable][1] ein Open Source Programm und somit kostenlos für Mac, Linux und Windows erhältlich. 
Hinter dem Programm steht keine Firma, sondern es wird von mehreren Entwicklern in deren Freizeit gepflegt und weiterentwickelt.

Ich finde Open Source Software sehr gut, jedoch sollte man dabei im Hinterkopf behalten, dass die Entwickler, 
die daran mitarbeiten das Meiste in erster Linie "für sich" programmieren, heißt, die Ersteller der Software sind auch gleichzeitig die Nutzer davon. 
Das muss nicht immer schlecht sein, aber kann Aufschluss darauf geben, für wen die Software geeignet ist.

Laut der Homepage wird es von Fotografen für Fotografen entwickelt, zudem würde ich sagen, dass sich die Benutzer der Software auch sehr gut mit Technik auskennen müssen. 
Denn die Lernkurve davon ist sehr steil und die Bedienung ziemlich komplex, aber dazu mehr in diesem Artikel.

# Erster Eindruck

Der Download und die Installation gestalteten sich sehr einfach, es ist sogar in etlichen Paketmanagern vorhanden 
und kann daher über einen einfachen Befehl in der Kommandozeile heruntergeladen und installiert werden.

Einer der ersten Schritte, der gemacht werden muss, ist Bilder in das Programm zu importieren. 
Das ist übrigens in jedem aktuellen RAW-Konverter, der auf einer Datenbank basiert, 
so und in diesem Schritt werden die Metadaten der Bilder eingelesen, sodass beispielsweise leicht darauf gefiltert werden kann.

{% cloudinary /assets/2021-01-27-darktable/darktable_error.jpg alt="Eine Fehlermeldung beim Absturz von Darktable." %}

Der Import hat aus meiner Sicht schon ein paar Tücken, so ist mir das Programm dabei einmal abgestürzt und hat grundlos neue SideCar-Dateien erstellt. 
Das hat zur Folge, dass ziemlich viel Datenmüll entsteht, denn neben den bereits existierenden RAW-Dateien (z.B. `bild01.nef`) und meinen bisherigen Sidecar-/xmp-Dateien (z.B. `bild01.xmp`), 
werden neue SideCar-Dateien mit dem Namen `bild01.nef.xmp` erstellt. 
Ich verstehe, dass der Dateiname eine eindeutige Zuordnung zur RAW-Datei bietet, aber das Programm könnte die bestehende Datei auch weiterverwenden oder im Nachgang aufräumen, 
denn manuell will ich das bei zig tausend Dateien nicht machen.

{% cloudinary /assets/2021-01-27-darktable/darktable_ranking.jpg alt="Die Bewertungen und Markierungen wurden übernommen." %}

Meine bisherigen Farbmarkierungen und Bildbewertungen mit Sternen wurden problemlos übernommen. 
Die Bearbeitungsinformationen jedoch leider nicht, aber das hatte ich mir schon gedacht, da es programmspezifische Daten aus meiner alten Anwendung sind. 
Zusätzlich wird die `.psd`-Datei (Adobe Photoshop) nicht erkannt und angezeigt. Das ist etwas ärgerlich, denn falls ich größere Bildbearbeitungen vornehme, 
mache ich das häufig über genau solche Dateien, die ich dann nicht mehr betrachten kann.

# RAW entwickeln

Der wichtigste Test für jedes der Programme, die ich mir genauer anschaue, ist natürlich die Entwicklung von einem oder mehrerer RAWs. 
Und wenn ich ehrlich bin, habe ich hin und her überlegt, ob ich den Test mit Darktable überhaupt durchführen soll, denn in den ersten 30min, 
in denen ich mir das Programm genauer angeschaut habe, ist es mehrfach abgestürzt.

Das weckt natürlich kein großes Vertrauen in die Software, auch wenn die Entwickler schnell auf [meinen Fehlerbericht](https://github.com/darktable-org/darktable/issues/7627) reagiert 
und innerhalb von einer Woche die Ursache behoben hatten.

{% cloudinary /assets/2021-01-27-darktable/darktable_entwicklung.jpg alt="Der Entwicklungsmodus von Darktable" %}

Im RAW-Entwicklungsmodus gibt es eine Vielzahl von Einstellungen und Optionen, die teilweise ungewöhnliche Bezeichnungen tragen, 
sodass ich dort erst einmal erschlagen wurde. Damit hatte ich aber schon gerechnet, denn das ist einer der Kritikpunkte auf den ich bei meinen initialen Recherchen immer wieder gestoßen bin 
und die Oberfläche sah in den Lernvideos, die ich zuvor angeschaut hatte, auch nicht sehr intuitiv aus.

Falls du Darktable mal in Aktion sehen oder mehr darüber erfahren willst, kann ich ein [Youtube-Video von Rico Richardson](https://www.youtube.com/watch?v=xi4x2qQkG8c) (auf Englisch) dazu empfehlen. 
Von allen Videos, die ich mir über das Programm angeschaut habe, war das bei weitem das Beste!

Insgesamt hat die Bearbeitung des RAW-Bildes gut funktioniert, ich hatte aber immer das Gefühl, dass es noch ein sehr langer Weg sein wird, das Programm wirklich zu verstehen und zu beherrschen.

# Fazit

[Darktable][1] ist definitiv ein sehr komplexes Programm und nicht für Anwender gedacht, die "nur ein paar Schieberegler" haben oder schnell einen Filter verwenden wollen.

Wie geschrieben, hatte ich oft mit Programmabstürzen zu kämpfen, was für mich ein No-Go ist, und weswegen ich Darktable von meiner Liste gestrichen habe. 
Da es aber offensichtlich bei vielen anderen reibungslos funktioniert, wollte ich es trotzdem "durchtesten" und hier vorstellen, 
die Stabilität kann auf einem anderen System mit einer anderen Version ganz anders aussehen und man darf nicht vergessen, 
dass es eine kostenlose Anwendung ist, die von einigen Programmierern in deren Freizeit entwickelt wird.

Solltest du also auf der Suche nach einem kostenlosen Programm sein und dich nicht vor dem, doch recht hohen, Einarbeitungsaufwand scheuen, denke ich, dass Darktable eine gute Lösung sein kann.


[1]: https://www.darktable.org/
