---
title: Welchen Brennweitenbereich nutze ich am meisten?
description: Mithilfe eines kleinen Programms habe ich meine Brennweiten-Nutzung analysiert. Falls du das auch machen willst, findest du hier eine Anleitung.
permalink: /welchen-brennweitenbereich-nutze-ich-am-meisten/
header:
    teaser: assets/2020-09-06-brennweitenbereich-analysieren/magdiel-damas-sIUTqm5qu1I-unsplash.jpg
    overlay_image: assets/2020-09-06-brennweitenbereich-analysieren/chris-liverani-dBI_My696Rk-unsplash-c.jpg
    overlay_filter: rgba(200, 200, 200, 0.6)
categories:
  - Fotografie
  - Technik
tags:
  - Tools
  - Fotowissen
---

Im [Artikel zu den Superzooms][1], habe ich ja gesagt, dass Objektive mit einem sehr großen Brennweitenbereich leider 
meistens Abstriche bei der Bildqualität zur Folge haben. Da das eines der Punkte ist, 
die mich bei meiner aktuellen Ausrüstung stören, habe ich beschlossen mein 18-200mm gegen ein kleineres Zoom-Objektiv zu tauschen, 
das eine bessere Abbildungsleistung bietet. Was ich gemacht habe, um zu entscheiden, 
welcher Brennweitenbereich der Passende ist, will ich hier erklären.

Der Bereich von 18-200mm ist sehr groß und bietet daher quasi alle Fotomöglichkeiten. 
Die Frage ist daher, welchen Brennweitenbereich setze ich davon am meisten ein? Um das zu erfahren habe ich ein Programm geschrieben, 
das die verwendeten Brennweiten der Bilder ausliest und zusammen mit der Häufigkeit in einer Tabelle ausgibt.

Solltest du vor der gleichen Frage stehen, findest du das [Programm auf GitHub][2] und kannst es auf deine Bilder anwenden. 
Sollte etwas nicht klappen oder unklar sein, lass einfach ein Kommentar hier oder melde dich bei mir.

## Programm ausführen

Da ich die meiste Programmiererfahrung in Java habe, war es für mich am einfachsten das Tool in Java zu schreiben 
und es dann von meiner Entwicklungsumgebung (IDE) aus auszuführen. Das Tool lässt sich, als kompilierte Version, aber auch von der Kommandozeile verwenden.

Zur Konfiguration können Parameter entweder über die Kommandozeile mitgegeben werden oder, 
falls das Programm direkt aus der IDE gestartet wird, werden diese direkt in der `CliConfig`-Klasse gesetzt.

Folgende Optionen gibt es:

- **Verzeichnis, in dem die Bilder sind, die analysiert werden sollen**. Entsprechende Unterverzeichnisse werden auch berücksichtigt.
- **Ausgabedatei, in die das Ergebnis geschrieben wird**, sodass dieses weiterverarbeitet werden kann.
- **Trennung des Ergebnisses nach verwendeter Kamera**. 
    Ich habe gemerkt, dass in meiner Sammlung Bilder aus sehr vielen verschiedenen Kameras sind. 
    Da mich für die Analyse der Brennweiten nur die Bilder von meiner jetzigen Spiegelreflex-Kamera interessieren, 
    kann ich mit dieser Option alle anderen im Anschluss herausfiltern.
- **Berücksichtigung des Crop-Faktors**. Da sich die Brennweite eines Objektives an einer APS-C 
    und einer Vollformat-Kamera unterscheidet, kann diese Option verwendet werden, um immer das Vollbild-Equivalent zu nutzen. 
    Da ich nur die Brennweiten einer APS-C Kamera analysieren will, lasse ich das deaktiviert.

## Ergebnisse aufarbeiten

Weil ich vorwiegend auf Reisen fotografiere und das neue Objektiv vor allem für diesen Anwendungsfall taugen soll, 
habe ich nur meine Reisebilder analysiert. Wobei hier auch zu berücksichtigen ist, dass jede Reise anders ist. 
Auf einer Städtereise fotografiere ich anders als auf einem Wanderurlaub oder gar auf einer Safari, 
daher habe ich neben der Analyse aller Reisebilder, noch ein paar Reisen einzeln analysiert.

Falls du deine Bilder auch analysierst, empfehle ich dir davor zu überlegen, welche "Testreihen" ein aussagekräftiges Ergebnis zulassen 
und lieber ein paar Durchläufe des Tools mehr zu machen, anstatt alles in einen Topf zu werfen. 
Mit der Zeit kann sich auch der Stil und die fotografische Vorliebe ändern, 
aus meiner Sicht sind deswegen die Daten von neueren Bildern aussagekräftiger.

### Ergebnis in Excel/Sheets importieren

Das Tool liefert die Ergebnisse Semikolon-getrennt in einer CSV-Datei, was beispielsweise so aussieht:

```
Focal length;Count;Camera
18.0;1659;NIKON D80
20.0;489;NIKON D80
22.0;472;NIKON D80
24.0;433;NIKON D80
26.0;487;NIKON D80
```

Um die Daten besser analysieren zu können, sollten diese danach in Microsoft Excel, Google Sheets 
oder ein anderes Tabellenkalkulationsprogramm deiner Wahl, importiert werden. 
Für die Erklärung der nächsten Schritte nutze ich Google Sheets, sollte aber jedoch auch einfach mit jedem anderen Programm gehen.

Die, für mich, einfachste Art die Daten in Google Sheet zu importieren, ist den kompletten Inhalt der CSV-Datei zu kopieren 
und in eine Spalte einzufügen. Danach dann die komplette Spalte markieren und die Option *Daten -> Text in Spalten aufteilen* wählen, 
sodass die Werte für Brennweite, Anzahl und Kameraname jeweils ihre eigenen Spalte bekommen.

{% cloudinary /assets/2020-09-06-brennweitenbereich-analysieren/splitData.jpg alt="Daten in Spalten auftrennen" %}

Falls die Option, die Daten nach verwendeter Kamera getrennt auszugeben, gewählt wurde, 
macht es aus meiner Sicht zudem noch Sinn eine Filteransicht für diese Spalte zu erstellen 
und dann auf das gewünschte Kameramodell einzuschränken.

### Diagramm erzeugen

Daten analysieren fällt mir persönlich leichter, wenn ich diese in grafischer Form sehe 
und daher ist der nächste Schritt die Erstellung eines Diagramms aus den Brennwert-Nutzungshäufigkeiten. 
Dazu einfach die beiden Spalten mit Brennweite und Anzahl markieren und anschließend *Einfügen -> Diagramm* wählen.

Folgende Diagramme sind das Ergebnis meiner Analysen von allen Reisen, sowie die vom Deutschland-Trip 2020 und der Belize-Reise 2019.

{% cloudinary /assets/2020-09-06-brennweitenbereich-analysieren/chart-d7000.jpg alt="Diagramm aller Reisebilder mit der D7000" %}

{% cloudinary /assets/2020-09-06-brennweitenbereich-analysieren/chart-deutschland.jpg alt="Diagramm vom Deutschland-Trip" %}

{% cloudinary /assets/2020-09-06-brennweitenbereich-analysieren/chart-belize.jpg alt="Diagramm der Belize-Reise" %}

## Fazit

Mit den Ausschlägen an den beiden Enden des Brennweitenbereiches vom 18-200mm Objektiv habe ich schon gerechnet, 
was mich jedoch überrascht hat, ist der hohe Prozentsatz unter 50mm, was ja bedeutet, 
dass mir in den meisten Fällen beispielsweise ein 18-50mm Objektiv ausgereicht hätte. 
Zwar hätte ich dann für den oberen Bereich ein weiteres Wechselobjektiv benötigt, aber eventuell wäre dies dann eines, 
das über den 200mm-Bereich hinausgeht. Es darf nämlich nicht vergessen werden, dass nur, weil bei 200mm ein Ausschlag ist, 
das in dem Fall ausgereicht hätte oder optimal war, es war lediglich die am höchsten verfügbare Brennweite. 
Das Gleiche natürlich auch am unteren Ende, wofür ich aber auch schon ein 11-16mm Weitwinkelobjektiv habe.

Für mich war die Analyse erhellend und hat mir bei der Suche nach den Brennweitenbereichen meiner nächsten Objektive weitergeholfen. 
Ich hoffe das trifft auch auf jeden zu, der die Schritte mit seinen Daten nachstellt. 



[1]: {% post_url 2020-08-22-superzooms %}
[2]: https://github.com/gamue/focal-length-analyzer
