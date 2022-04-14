---
title: Bildergalerie im Masonry-Stil
description: In den letzten Tagen habe ich ein Masonry-Layout auf die Seite eingebaut und hier schildere ich meine Fehlschläge und Lösung.
permalink: /bildergalerie-im-masonry-stil/
header:
    teaser: assets/2021-03-12-masonry-layout/masonry-thumb.jpg
    overlay_image: assets/2021-03-12-masonry-layout/jon-moore-dWfq3lRwGU8-unsplash.jpg
toc: true
categories:
  - Technik
tags:
  - Homepage
---

Die letzten Tage habe ich an der Darstellung der Bilder auf der Homepage gearbeitet und bin dabei teilweise verzweifelt, daher dachte ich, ich schreibe meine Erfahrungen in einen Blogpost. 
Eventuell hilft es dir Zeit und Nerven zu sparen oder du kannst mir zeigen, was ich falsch gemacht habe.

# Ausgangslage
Auf der Seite habe ich bereits einige Varianten mehrere Bilder bzw. Galerien darzustellen:

Innerhalb eines Blogeintrags werden die Bilder in verkleinerter Form dargestellt, wobei ich deren Seitenverhältnis beibehalte und nur die Breite begrenze. 
Das führt dazu, dass Bilder im Hochkant-Format deutlich größer angezeigt werden, als welche im Querformat. 
Eigentlich nicht schlimm, aber das wirklich nervige daran ist, dass wenn ein Hochkant-Bild neben einem Querformat-Bild angezeigt wird, ein ziemlich größer Abstand zur nächsten Zeile entsteht.

{% cloudinary "/assets/2021-03-12-masonry-layout/galerie_whitespace.jpg", "Bildergalerie mit zu viel Whitespace", null, null, "Bildergalerie in einem Blogbeitrag mit zu viel Whitespace" %}

In den Reisegalerien werden die einzelnen Bilder in einer einheitlichen Querformat-Größe angezeigt, sodass dort, gerade bei Hochkant-Bildern, nur ein Ausschnitt sichtbar ist. 
Der Vorteil davon ist, dass die Zeilen alle gleich hoch sind und man so schneller einen Überblick bekommt.

{% cloudinary "/assets/2021-03-12-masonry-layout/galerie_einheitsgroesse.jpg", "Bildergalerie mit einheitlicher Bildgröße", null, null, "Bildergalerie mit einheitlicher Größe der Vorschaubilder." %}

In beiden Fällen kann, mit Klick auf das jeweilige Bild, eine Vollbild-Ansicht erreicht werden, wofür ich die Bibliothek [SimpleLightbox](https://github.com/dbrekalo/simpleLightbox) nutze. 
Das find ich sehr angenehm und will ich auch so beibehalten.

# Ziel
Die Nachteile meiner bisherigen Varianten sind also entweder zu viel leere Fläche oder ein falsches Bildformat. 
Das Bildformat hat mich bisher nicht sonderlich gestört. Da ich jetzt aber eine Portfolio-Seite, 
mit den aus meiner Sicht besten Bildern erstellen wollte, und der Bildschnitt für die Wirkung oft sehr wichtig ist, 
lege ich für den Anwendungsfall wert darauf, dass das Seitenverhältnis der einzelnen Bilder korrekt dargestellt wird.

Viel leere Fläche, besonders sehr unregelmäßige, wirkt aber auch nicht schön und daher war mein Ziel das Layout im Masonry-Stil zu erstellen. 
"Masonry" bedeutet Mauerwerk und die vermutlich bekannteste Seite, die das einsetzt, ist Pinterest, weswegen es auch häufiger als Pinterest-Stil bezeichnet wird.

{% cloudinary "/assets/2021-03-12-masonry-layout/masonry-layout.jpg", "Masonry-Layout" %}

Bei der Darstellungsform werden die einzelnen Bilder, wie Steine in einem Gemäuer möglichst passend zusammengesetzt. 
Hochkant-Bilder sind dadurch zwar immer noch deutlich größer als Bilder im Querformat, aber die Bildwirkung geht bei der Vorschau nicht verloren.

# Technische Umsetzung
Mein Ziel war es das Layout nur mit HTML und CSS hinzubekommen und ich will vorab schon sagen, dass es leider nicht funktioniert hat. 
Ich habe etliche Stunden herumprobiert, aber irgendetwas hat immer nicht so gewollt, wie ich es wollte.

Aber vielleicht klappt das irgendwann in der Zukunft, denn aktuell gibt es [einen Entwurf der W3C](https://drafts.csswg.org/css-grid-3/) diesen Stil in den CSS-Standard aufzunehmen, 
sodass künftige Browser dies im Standard unterstützen. 
Der Nightly-Build von Firefox kann das anscheinend schon, aber da den so gut wie niemand verwendet, zählt das bisher leider nicht.

## Knapp daneben mit CSS-Columns
Die CSS-only Variante, die meinem Ziel am nächsten gekommen ist, war die Nutzung von CSS-Columns.

Mein HTML-Code sieht folgendermaßen aus, wobei das `container`-Element nicht zwingend nötig ist, sondern nur für eine begrenzte Seitenbreite sorgen soll.

```html
<div class="container">
  <div class="grid">
    <a href="#"><img src="https://via.placeholder.com/600x200"></a>
    <a href="#"><img src="https://via.placeholder.com/500"></a>
    <a href="#"><img src="https://via.placeholder.com/400x600"></a>
    <a href="#"><img src="https://via.placeholder.com/800x600"></a>
    <a href="#"><img src="https://via.placeholder.com/800x600"></a>
    <a href="#"><img src="https://via.placeholder.com/600x600"></a>
    <a href="#"><img src="https://via.placeholder.com/600x600"></a>
    <a href="#"><img src="https://via.placeholder.com/500x600"></a>
    <a href="#"><img src="https://via.placeholder.com/500x300"></a>
  </div>
<div>
```

Die zugehörigen CSS-Definitionen für die Variante sehen dann wie folgt aus:

```css
.container{
    width: 1000px;
}
.grid{
    columns: 3; 
    column-gap: 1.5rem;
}
.grid a{
    display: inline-block;
    padding-bottom: 1.5rem;
}
.grid a img{
    width: 100%;
}
```

Hier das Ergebnis davon:

{% cloudinary "/assets/2021-03-12-masonry-layout/masonry-columns.jpg", "Masonry mit CSS-Columns" %}

Sieht nach dem gewünschten Mauerwerk aus, oder?

Leider nur fast, denn wenn du dir einmal genau die Reihenfolge der Elemente im HTML und auf dem Bild anschaust wirst du feststellen, dass diese vertikal und nicht horizontal angeordnet sind. 
Für den ein oder anderen würde das sicherlich reichen, aber so habe ich leider keinen Einfluss darauf welche Bilder nebeneinander angezeigt werden. 
Besonders weil ich nicht steuern kann, wann eine Zeile umbricht, können unpassende Bilder nebeneinander angezeigt werden. 
Bei einer chronologischen Anordnung der Bilder ergibt sich so zudem eine komische Betrachtungsreihenfolge, die ich mit mir nicht vereinbaren kann ;)

Von diesem Stand aus habe ich Dutzende Varianten ausprobiert und Anleitungen im Internet getestet, jedoch leider ohne Erfolg. 
Nach zig Stunden habe ich dann aufgegeben und den Beiträgen im Netz geglaubt, die geschrieben haben, dass es ohne etwas JavaScript nicht geht und eine entsprechende Bibliothek eingebunden.

## Masonry von David DeSandro
Ich muss zugeben, dass ich nach den vielen Tests und Fehlschlägen ziemlich genervt war und mich daher für die JavaScript Bibliothek entschieden habe, 
auf die ich am häufigsten gestoßen bin und das war die [Masonry-Bibliothek von David DeSandro](https://masonry.desandro.com/).

Die HTML-Struktur ist die Gleiche wie bei der oberen Variante, jedoch hat sich das CSS etwas verändert:

```css
.container{
	width: 1000px;
}
.grid a{
	width: 30%;
	padding: 1rem;
}
.grid a img{
	width: 100%;
	display: block;
}
```

Die Nutzung des Masonry-Skripts ist recht einfach, Skript einbinden und folgenden Code aufrufen **nachdem** alle Elemente der Seite geladen worden sind. 
Das ist besonders wichtig, da sonst die Höhe der Elemente nicht korrekt berechnet werden kann und es dann zu Darstellungsfehlern kommt.

```jsx
new Masonry( '.grid', {});
```

Natürlich gibt es noch viele Optionen für die Bibliothek, aber mir reicht der minimalistische Constructor und ich war froh, als die Anzeige endlich so war wie ich es wollte.

Hier noch ein Screenshot vom Ergebnis des Beispielcodes, mit der Reihenfolge schön von links nach rechts (bis das Auffüllen auf der Linken Seite am Ende):

{% cloudinary "/assets/2021-03-12-masonry-layout/masonry-script.jpg", "Masonry mit der JS-Bibliothek" %}

# Fazit
Am Ende hat es mich weit mehr Zeit gekostet als gedacht und musste letztendlich doch eine JavaScript-Library einsetzen, was ich gerne vermieden hätte. 
Aber wer weiß, eventuell kommt das ja demnächst in den CSS-Standard und dann ist es nur eine Frage der Zeit bis es die Browser implementiert und eine entsprechende Marktverbreitung haben, damit ich auf den nativen Weg umsteigen kann.

Insgesamt macht die Lösung aber genau das, was ich wollte und bin daher zufrieden. 
Du kannst das Ergebnis übrigens auf den [Portfolio-Seiten]({% post_url collections.pages, 'portfolio__landschaft' %}) in Aktion betrachten ;)

Die Masonry-Bibliothek ist ziemlich einfach zu verwenden, aber ich finde sie mit knapp 24kb recht groß für meinen Anwendungsfall, 
vermutlich würde auch eine simplere Lösung ausreichen, sodass ich eventuell nochmal nach einer kleineren Bibliothek Ausschau halten werden. 
Aber bis dahin funktioniert es und meine Nerven können sich wieder beruhigen 😆

Solltest du einen einfacheren Weg gefunden haben, lass es mich wissen oder auch sonst bin ich immer an Verbesserungsvorschlägen interessiert.