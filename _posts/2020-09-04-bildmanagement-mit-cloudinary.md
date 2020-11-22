---
title: Schnellere Ladezeiten durch Bildmanagementdienste
permalink: /schnellere-ladezeiten-durch-bildmanagementdienste/
header:
    teaser: assets/2020-09-04-bildmanagement-mit-cloudinary/veri-ivanova-p3Pj7jOYvnM-unsplash.jpg
    overlay_image: assets/2020-09-04-bildmanagement-mit-cloudinary/steven-lelham-atSaEOeE8Nk-unsplash.jpg
categories:
  - Technik
tags:
  - Tools
  - Homepage
  - Coding
---

Dadurch, dass ich im [ersten Schritt die Buildautomatisierung der Homepage mit Hilfe von GitHub Actions][1] in meine Hände genommen hatte, 
war nun der Weg frei, mich im zweiten Schritt um die eigentliche Verbesserung zu kümmern: **Optimierung der Ladezeit von Bildern**. 
Warum und wie ich das gemacht hab, will ich in diesem Artikel beschreiben.

Bilder haben einen hohen Anteil der Datenmenge, die geladen werden müssen. Umso schneller diese also geladen werden, 
umso schneller lädt auch die Seite. Ich denke, so weit ist es noch gut verständlich. 

{% cloudinary /assets/2020-09-04-bildmanagement-mit-cloudinary/datenmengen.jpg alt="Datenmengen je Typ" %}

Ein weiterer Teil ist, dass Besucher einer Seite unterschiedliche Geräte nutzen, die wiederum unterschiedliche Bildschirmgrößen haben. 
Insbesondere wenn manche einen Desktop-PC oder Laptop und andere ein Smartphone oder Tablet verwenden, gibt es hohe Unterschiede. 
Im Normalfall hat das keine Auswirkungen auf ein Bild, es wird immer das Gleiche geladen und angezeigt, 
sprich, es muss immer die gleiche Datenmenge geladen werden. Und genau hier ist der Ansatz der Optimierung: 
Wenn jemand beispielsweise ein Bild auf einem halb so großen Bildschirm betrachtet, sollte er auch nur ein Bild laden müssen, dass halb so groß ist.

Technisch bietet HTML5 mit `srcset` dafür eine Lösung, sodass der Browser erkennt, welche Bildgröße für das Gerät die Optimale ist 
und dadurch entsprechend Datenmenge einspart, was wiederum zu einer schnelleren Ladezeit führt. 
Das setzt jedoch voraus, dass von einem Bild verschiedene Größen vorhanden sind, 
wofür es unterschiedliche Varianten der Erstellung gibt.

# Mögliche Optionen

## Bildversionen selbst erstellen
Die erste Variante ist, selbst diverse Größen eines Bildes anzulegen und diese dann entsprechend einzubinden. 
Am einfachsten geht das beispielsweise über Skripte. Die kleinen Vorschaubilder auf meiner Homepage, 
lass ich sogar schon über ein solches Gulp-Skript erstellen, sodass ich das prinzipiell erweitern könnte. 
Informationen zum Skript und wie ich es erstellt habe, findest du übrigens [in diesem Artikel][2].

Die Variante hat den Vorteil, dass man alles selbst in der Hand hat, was aber auch heißt, dass man sich um alles selbst kümmern muss. 
Insgesamt keine schlechte Variante, aber ich wollte dieses Mal etwas anderes ausprobieren und etwas Neues lernen ;)

## Umstieg auf neues Homepage-System
Auch wenn ich mit [Jekyll als Homepage-System][3] bisher zufrieden bin, ist es nicht das Beste, was den Umgang mit Medien angeht, 
sodass ich überlegt hatte, das komplette System auszutauschen. Ich habe mir dazu auch schon [Gatsby][4] als Option angeschaut und muss sagen, 
dass mir das sehr gut gefällt und im Standard einen besseren Umgang mit Bildern bietet, 
denn dort werden direkt mehrere Bildgrößen erstellt und diese erst geladen, wenn diese im Browser sichtbar sind, was man lazy-loading nennt.

Auch wenn mich [Gatsby][4] reizt, hab ich entschieden, dass es für jetzt dann doch ein zu großer Aufwand ist. 
Vielleicht schau ich mir das ein anderes Mal genauer an, aber zuvor stehen noch viele andere Dinge auf meiner To-Do-Liste.

Sicherlich bieten Homepagebaukästen oder richtige Content-Management-Systeme, wie zB Wordpress, 
auch von Haus aus etliche Tools für einen optimierten Umgang mit Bildern, aber davon bin ich ja bewusst weggegangen 
und bisher zieht mich da auch nichts wieder hin.

## Nutzung eines Bildmanagementdienstes
Die dritte Variante und die, für die ich mich entschieden habe, ist der Einsatz eines sogenannten Bildmanagementdienstes. 
Solche Dienste sind darauf spezialisiert Bilder und auch andere Medien, in einer optimierten Variante auszuliefern 
und schnell diverse Größen eines Bildes erzeugen zu können.

Vorteil der Lösung ist, dass diese Dienste die Bilder noch deutlich mehr optimieren als mein aktuelles [Gulp-Skript][2] es macht. 
So werden diese beispielsweise auch direkt in ein neues Bildformat konvertiert. 
Nachteil ist jedoch, dass ich mich dadurch abhängig von einem Dienst mache und es je nach Anbieter und Volumen mit Kosten verbunden ist.

Für [Cloudinary][5], was ein solcher Dienst ist, habe ich ein [entsprechendes Jekyll-Plugin][6] gefunden und dort komme ich mit der kostenlosen Variante aus, 
daher habe ich mich für diesen Dienst entschlossen. Prinzipiell würde aber auch jeder andere solcher Dienste funktionieren.

# Homepage anpassen

## Jekyll-Cloudinary Plugin einbinden
Die Einbindung des Plugins ist relativ einfach, nachdem die Abhängigkeit im `Gemfile` definiert und es installiert ist, 
steht ein neues Liquid-Tag zur Verfügung, das dann je ein entsprechendes `img`-HTML-Element mit `srcset` erzeugt.

Die Funktionsweise ist relativ simpel und es müssen keine Bilder zu Cloudinary hochgeladen werden, 
stattdessen schaltet sich der Dienst über die angegebene URL dazwischen und wenn ein Bild das erste Mal aufgerufen wird, 
lädt Cloudinary dies von meiner Seite und liefert die optimierte Version im Browser des Besuchers aus. 
Der erste Aufruf eines Bildes kann daher etwas länger dauern, aber sobald es einmal von Cloudinary geladen wurde, 
sollte jeder nachfolgende Aufruf schneller vonstattengehen.

# Plugin verwenden und Bilder anpassen
Die meisten Stellen, an denen ich Bilder auf der Homepage verwende, waren recht schnell auf die neue Variante umgestellt, 
jedoch verwende ich bei einigen Bildern kein `img`-Tag sondern binde es über CSS-Definitionen ein 
und diese lassen sich leider nicht so einfach umstellen, sodass ich diese erstmal lasse wie sie sind. 

Eine Möglichkeit wäre dort auch eine Cloudinary-Url zu verwenden, damit zumindest die Datei optimiert wird. 
Die Verbesserung mit den verschiedenen Größen lässt sich, meinem Wissen nach, dort jedoch nicht so einfach lösen. 
Zwar kann man je nach Bildschirmgröße unterschiedliche CSS-Definitionen nutzen, aber das wäre für die erreichte Verbesserung aus meiner Sicht zu komplex.

Zusätzlich ist es sinnvoll die Anzahl der verschiedenen Bilder zu minimieren, sodass der Cache von Cloudinary besser funktioniert. 
Für mich heißt das, die eigenen Vorschaubilder, die ich über das Gulp-Skript generiere, nicht zu verwenden, sondern das Ganze auch Cloudinary zu überlassen.

# Fazit
Nachdem alles, mit vergleichsweise geringem Aufwand, eingebunden und umgestellt war, gab es noch den Punkt zu klären, 
ob es sich gelohnt hat. Dafür hab ich ein paar Geschwindigkeitstests mit [Pingdom][7] durchgeführt.

Dazu habe ich vor und nach der Umstellung auf der Startseite und auf der Belize-Galerie je 3 Messungen durchgeführt. 
Nach der Umstellung hatte ich die Seiten zuerst manuell besucht, damit Cloudinary diese vor der Messung laden und in den Cache legen kann. 

Hier ein paar Ergebnisse davon:

{% cloudinary /assets/2020-09-04-bildmanagement-mit-cloudinary/pingdom.jpg alt="Messergebnisse von Pingdom" %}

Ich muss sagen, dass ich etwas enttäuscht gewesen bin, zwar werden die Bilder nun gefühlt etwas schneller geladen, 
aber leider sieht man das nicht wirklich in den Messungen. Die Ladezeit der Startseite war davor 276ms - 645ms, 
danach zwischen 382ms und 531ms. Die Ladezeit der Belize-Galerie davor 1,55s - 2,46s, danach zwischen 531ms und 2,86s. 
Zusätzlich hat sich die Datenmenge der Belize-Seite sogar von 3,3 MB auf 3,8 MB vergrößert, 
also entgegengesetzt zu dem, was ich eigentlich erreichen wollte.

Positiv aufgefallen ist mir jedoch, dass sich die Bewertung durch Pingdom gering verbessert hat, 
was ich aber auf die anderen Bildoptimierungen von Cloudinary zurückführe.

Gefühlt hat die Umstellung einen positiven Effekt gebracht, auch wenn er nicht so groß ausgefallen ist wie erhofft, 
oder auch nicht wirklich messbar war. Ich habe trotzdem beschlossen das Plugin erstmal auf der Seite zu lassen, 
denn der positive Effekt auf die Performance-Bewertung und mein subjektives Gefühl sind ja immerhin etwas und es hat keine negativen Auswirkungen.


[1]: {% post_url 2020-08-28-buildautomatisierung-mit-github-actions %}
[2]: {% post_url 2019-09-08-prozessautomatisierung-mit-gulp %}
[3]: {% post_url 2019-09-01-relaunch %}
[4]: https://www.gatsbyjs.com/
[5]: https://cloudinary.com/
[6]: https://github.com/nhoizey/jekyll-cloudinary
[7]: https://tools.pingdom.com