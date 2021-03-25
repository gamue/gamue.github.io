---
title: "Neue RAWs in alter Software: Adobe DNG Konverter"
description: Mit dem Adobe DNG Konverter ist es möglich RAW-Dateien in ein standardisiertes Format umzuwandeln, sodass ältere Software mit diesen umgehen kann. In dem Artikel erkläre ich, wie das funktioniert.
permalink: /adobe-dng-konverter/
header:
    teaser: assets/2021-01-20-adobe-dng-converter/dng-konverter-thumb.jpg
    overlay_image: assets/2021-01-20-adobe-dng-converter/dng-hero.jpg
    overlay_filter: rgba(100, 100, 100, 0.2)
gallery:
    - image_path: assets/2021-01-20-adobe-dng-converter/bridge-raws.jpg
    - image_path: assets/2021-01-20-adobe-dng-converter/bridge-dngs.jpg
categories:
    - Fotografie
tags:
    - Software
---

Eine Möglichkeit, die ich bei meiner Suche nach einem neuen RAW-Konverter nicht aufgezählt habe, 
ist die Variante die RAW-Dateien in das DNG-Format umzuwandeln und alles so zu lassen, wie ich es gewohnt bin. 
Was die Option genau bedeutet, und warum ich es nicht in die engere Auswahl genommen habe, will ich in diesem Artikel erklären.

# Was ist das DNG-Format?

Das DNG-Format wurde von Adobe entwickelt, um die vielen unterschiedlichen RAW-Formate der Hersteller zu vereinheitlichen und so einen Industriestandard zu etablieren. 
Das Dateiformat gibt es seit 2004 und aus meiner Sicht hat es sich nicht durchgesetzt, denn für einen wirklichen Standard fehlt die Verbreitung und Unterstützung der Hersteller.

Es gibt nur sehr, sehr wenige Geräte die Bilder direkt im DNG-Format abspeichern können, daher wirst du das Dateiformat eher im Zusammenhang mit [einem Konverter][1] antreffen.

Auf die Vor- und Nachteile von DNG- gegenüber RAW-Dateien möchte ich in diesem Artikel nicht im Detail eingehen, da die Meinungen hier auseinandergehen. 
Beispielsweise wird öfter berichtet, dass DNGs deutlich weniger Speicherplatz als RAWs benötigen, bei meinen Tests waren DNGs jedoch etwas größer als die jeweilige RAW-Variante.

Zudem solltest du wissen, dass in einer DNG-Datei neben dem Bild, auch alle weiteren Metadaten und Entwicklungsinformationen gespeichert sind. 
Bei RAW-Dateien wird dies im Normalfall in zusätzlichen `.xmp`-Dateien abgelegt und die eigentliche RAW-Datei nicht angefasst. 
Ein Vorteil von `.xmp`-Dateien ist, dass diese sehr klein sind, wodurch der Computer bei Änderungen deutlich weniger Daten auf die Festplatte speichern muss. 
Bei DNGs hingegen muss bei Änderungen die komplette Datei erneut geschrieben werden.

# DER Vorteil des DNG-Formats

Auch wenn man über viele Vor- und Nachteile des DNG-Formats diskutieren kann, gibt es einen Vorteil, der unumstritten ist, und das ist die **Kompatibilität**.

Wie in vorherigen Artikeln erwähnt, sind RAWs herstellerabhängig und jeder macht sein eigenes Ding. 
Kommt eine neue Kamera auf den Markt, ist es sehr wahrscheinlich, dass dein aktueller RAW-Konverter diese Dateien nicht oder noch nicht lesen kann. 
Das ist natürlich sehr ärgerlich und würde bedeuten, dass du nur mit den JPGs aus deiner brandneuen Kamera etwas anfangen kannst.

Und genau hier kommt der [Adobe DNG-Konverter][1] ins Spiel. Denn selbst wenn ältere Programme die neuen RAWs nicht unterstützen, unterstützen sie meistens das DNG-Format und können dadurch das Bild anzeigen und entwickeln.

Die Umwandlung von RAW in DNG ist sehr einfach, neben dem Eingangs- und Ausgangsverzeichnis musst du lediglich konfigurieren zu welcher Camera Raw bzw. Lightroom Version die Dateien kompatibel sein sollen und anschließend auf "Konvertieren" klicken.

{% cloudinary /assets/2021-01-20-adobe-dng-converter/adobe-dng-konverter.jpg alt="Adobe DNG Konverter" %}

Nachdem die Dateien umgewandelt worden sind, sollten sie nun problemlos von deinem älteren Programm erkannt werden. Hier ein Beispiel von meinen Bildern als RAW- und als DNG-Dateien.

{% include gallery.html layout="half" caption="Links: RAW-Dateien werden vom Programm nicht erkannt. Rechts: Nach der Konvertierung zu DNG werden Bilder angezeigt" %}

# Fazit

Aus meiner Sicht bietet der [Adobe DNG Konverter][1] prinzipiell eine einfache Möglichkeit neuere RAW-Dateien in älteren Programmen verwenden zu können. 
Dadurch spart man sich neben der Anschaffung von einem neuen Programm auch die Einlernzeit in dieses und eventuell sogar den Aufwand seinen Workflow umzustellen.

Da es für mich aber nicht infrage kommt, meine RAW-Dateien nach der Konvertierung zu löschen, bedeutet dieser Weg, dass ich meinen benötigten Speicherplatz in etwa verdoppeln würde. 
Das wäre schon eine ziemliche Verschwendung von Festplattenspeicher.

Zudem habe ich gesehen, was neuere Programme mittlerweile können und denke, deren neue Features kommen mir bei der RAW-Entwicklung und Bildbearbeitung zugute, sodass ich den Aufwand eines Umstiegs gerne in Kauf nehme ;)

[1]: https://supportdownloads.adobe.com/detail.jsp?ftpID=6881
