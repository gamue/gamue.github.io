---
title: Programme verwalten mit Chocolatey
permalink: /programme-verwalten-mit-chocolatey/
header:
    teaser: assets/2020-03-26-chocolatey/choco-thumbnail.jpg
chocoSearch:
    - image_path: assets/2020-03-26-chocolatey/choco-search.jpg
chocoUpdate:
    - image_path: assets/2020-03-26-chocolatey/choco-update.jpg
categories:
  - Technik
tags:
  - Tools
  - Coding
---

Eigentlich wäre ich gerade in Slowenien, aber durch die aktuelle Lage bin ich stattdessen in Selbstisolation und 
weil ich jemand bin, der nicht lange rumsitzen kann, ohne etwas zu machen, 
nutze ich die Zeit bei den Reisebildern weiter aufzuholen und ein paar andere Dinge auf meiner “Mach ich später”-Liste nachzugehen.

Für ein paar der Dinge ist es notwenig, dass ich Programme installiere, aktualisiere und/oder wieder lösche. 
Alles Aufgaben, die jetzt nicht wirklich so viel Spaß machen und teilweise auch zeitraubend sind. 
Weil ich glaube dafür eine ganz gute Lösung gefunden zu haben, 
möchte ich in diesem Artikel mein Vorgehen mit dem [Paketmanager Chocolatey](https://chocolatey.org/) erklären, 
eventuell will es ja jemand übernehmen ;)

## Was ist ein Paketmanager?

Man kann sich einen Paketmanager als Sammlung von Software-Tools vorstellen, um Anwendungen zu verwalten. 
Die wichtigsten Funktionen davon sind das Installieren, Aktualisieren und Löschen.

## Warum einen Paketmanager nutzen?

Auch wenn es erst einmal komplizierter klingt, etwas Zusätzliches zu verwenden, um Programme zu installieren, 
aktualisieren oder zu löschen, so bietet ein Paketmanager etliche Vorteile. 
Der Größte für mich ist die Zeitersparnis, besonders wenn man einen Computer neu aufsetzt, kann man so schnell eine 
Vielzahl von Programmen installieren, ohne dass man jede Anwendung einzeln herunterladen und manuell installieren muss.
Ebenso kann man alle verwalteten Programme über einen Befehl aktualisieren und profitiert dadurch von neuen Funktionen 
und Sicherheitsupdates in den Anwendungen, was sonst vermutlich auch niemand für alle installierten Programme macht.

## Wie ich Chocolatey verwende

Eins Vorweg: Erfahrungen mit der Kommandozeile sind in jedem Fall von Vorteil, aber auch wenn man das noch nie gemacht hat, 
sollte man schnell reinkommen, denn es sind recht wenig Befehle die eigentlich auch leicht zu merken (oder nachzuschlagen) sind.

Am einfachsten lässt sich Chocolatey über die PowerShell nutzen, zu welcher man kommt, 
wenn man die Windows-Taste + X drückt und dann auf “Windows PowerShell (Administrator)” klickt. 
Die [Installationsanleitung findet ihr hier](https://chocolatey.org/install), prinzipiell müsst ihr den Befehl kopieren, bei euch einfügen, 
Enter drücken und danach etwas warten.

Am einfachsten gehen wir die Standardoperationen an Hand von einem Beispiel durch, 
sagen wir daher wir wollen das Programm [7zip](https://www.7-zip.de/) installieren.

## Installationspaket finden & installieren

Die erste Option ist im Online-Katalog danach zu suchen, im Ergebnis bzw. der Detailseite findet man dann den Installationsbefehl, 
in unserem Beispiel `choco install 7zip`, den man nur noch in die PowerShell eingeben und bestätigen muss. 
Anschließend kümmert sich Chocolatey um den Rest. Wenn man `-y` anhängt, muss man während dem Installationsprozess nichts mehr bestätigen, 
was ich als angenehmer empfinde, der Befehl lautet dann `choco install 7zip -y`.

Alternativ kann man den Namen des Installationspakets auch über die Kommandozeile suchen, in dem man `choco search 7zip` eingibt. 
Anschließend werden alle Paketnamen angezeigt, die dazu passen und aus denen man auswählen kann.

{% include gallery.html id="chocoSearch" %}

## Übersicht & Programme aktualisieren

Falls man sich mal fragt, welche Programme man bereits über Chocolatey installiert hat und die davon verwaltet werden, 
kann man das über `choco list -l` abfragen. Hinter dem Anwendungsnamen sieht man auch die aktuell installierte und verwendete Versionsnummer.

Zugegebener Weise kann man alle Schritte bis hierhin auch über “den normalen Weg” machen, was ich jedoch sehr zu schätzen gelernt habe, 
ist dass man mit einem einfachen Kommando alle verwalteten Programme auf neue Versionen prüfen und aktualisieren kann 
und sein System so aktuell und auch sicherer hält. 
Da ich recht viele Programme installiert habe, wäre mir der manuelle Aufwand dafür zu hoch und 
so kann ich ab und an `choco upgrade all -y` bzw. die Kurzform `cup all -y` ausführen und zusehen wie nach und nach jede Anwendung aktualisiert wird.

{% include gallery.html id="chocoUpdate" %}

## Programm deinstallieren

Falls man eine Anwendung wieder löschen möchte geht das, für unser Beispiel, über den Befehl `choco uninstall 7zip`, 
wobei *7zip* für den entsprechenden Paketnamen steht, den man deinstallieren möchte. 

## Bonus: Mehrere Programme auf einmal installieren

Manchmal kommt man in die Situation in der man viele Programme auf einmal installieren möchte, 
beispielsweise wenn man einen neuen Computer aufsetzt. In dem Fall wäre es einige Fleißarbeit jedes Paket einzeln über 
den `choco install`-Befehl zu installieren, glücklicherweise kann man bei dem Kommando auch mehrere Programme auf 
einmal installieren indem man einfach mehrere Paketnamen aufzählt, zum Beispiel: `choco install 7zip irfanview vlc` um 
nacheinander [7zip](https://www.7-zip.de/), [Irfanview](https://www.irfanview.com/) und [VLC](https://www.videolan.org/vlc/index.de.html) zu installieren.

Alternativ geht das auch über eine Datei, die folgenden Beispielinhalt hat und deren Dateiendung `.config` sein muss:
```xml
<?xml version="1.0" encoding="utf-8"?>
<packages>
  <package id="7zip" />
  <package id="irfanview" />
  <package id="vlc" />
</packages>
```
Hat man die Datei etwa `choco.config` genannt, würde der entsprechende Befehl `choco install choco.config` lauten, 
wobei man gegebenenfalls auch den Pfad zur Datei angeben muss.

Ich hoffe das war für den ein oder anderen nützlich und hat euch geholfen, 
ich würde mich in jedem Fall über Feedback freuen und gerne auch über eure Methode dazu.
