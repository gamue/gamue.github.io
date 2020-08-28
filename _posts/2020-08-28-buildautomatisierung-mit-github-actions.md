---
title: Buildautomatisierung mit GitHub Actions
permalink: /buildautomatisierung-mit-github-actions/
header:
    teaser: assets/2020-08-28-buildautomatisierung-mit-github-actions/github-actions-thumb.jpg
    overlay_image: assets/2020-08-28-buildautomatisierung-mit-github-actions/gh-actions-command.jpg
categories:
  - Homepage
  - Technik
tags:
  - Anwendungen / Tools
---

Ich habe in der letzten Woche ein paar größere Änderungen unter der Haube der Homepage vorgenommen, 
sodass ich flexibler bei der Entwicklung und Gestaltung bin und die Bilder schneller geladen werden. 
In diesem Artikel will ich den ersten Schritt davon, die Buildautomatisierung mit [GitHub Actions][1], 
erklären und einen Einstieg in das Thema geben.

Für den Zusammenhang ist es wichtig zu wissen, dass ich Jekyll als statischen Website-Generator einsetze 
und die fertige Seite bei GitHub Pages betreibe (mehr dazu erfährst du in [diesem Artikel][2]). 
GitHub Pages unterstützt einige statische Website-Generatoren, wie eben auch Jekyll, im Standard, 
sodass ich hier keine besondere Konfiguration vornehmen muss, damit aus den Quelldateien das fertige HTML erstellt wird.
Alles in allem hat sich die Variante in den letzten Monaten als sehr angenehm und problemlos erwiesen. 
Es gibt aber leider auch ein paar Einschränkungen, so erlaubt GitHub Pages beispielsweise nur die Verwendung von 
Jekyll-Plugins die von ihnen freigegeben wurden. Und [diese Liste][3] ist recht überschaubar.

Für die Verbesserung bei den Bildern wollte ich nun aber ein Plugin nutzen, das nicht auf der Liste steht, 
was heißt, dass ich meine Seite entweder zukünftig bei einem anderen Dienst betreiben oder den Buildprozess selbst in die Hand nehmen muss. 
Passenderweise hat GitHub im November 2019 mit [GitHub Actions][1] ihre eigene Buildautomatisierungs-Lösung veröffentlicht 
und ich wollte mir das sowieso einmal genauer anschauen, dann war wohl jetzt die Zeit dafür ;)

## Was bedeutet Buildprozess und Buildautomatisierung?

Im konkreten Fall der Homepage ist der Buildprozess der Teil, der aus den Layout-Definitionen 
und Texten die HTML-Dateien erstellt, die dann im Browser betrachtet werden können. 
Bei anderen Anwendungen wäre es der Ablauf Quellcode in das tatsächliche Programm zu kompilieren.

Wenn dieser Prozess an bestimmte Ereignisse gekoppelt ist oder auch noch weitere Aktionen im Nachgang folgen, 
spricht man von Buildautomatisierung. Um das Umzusetzen gibt es etliche, 
sogenannte Continuous Integration und Continuous Delivery Tools (CI/CD) wie beispielsweise Jenkins, Travis, Circle-CI oder eben auch GitHub Actions.

Für die Homepage ist der Prozess relativ simpel: Für jede Änderung soll der Buildprozess durchgeführt 
und das Ergebnis dann auf GitHub Pages "hochgeladen" werden, womit die Änderungen dann für jeden sichtbar sind. 
"Hochgeladen" heißt in diesem Fall, die kompilierten HTML-Dateien in einem Git-Branch abzulegen.

## GitHub Actions einrichten
Der Buildprozess wird bei GitHub Actions über YML-Dateien definiert, die im Repository unter `.github/workflows` liegen. 
Der Name der Dateien spielt dabei keine Rolle, sodass diese nach ihrer Aktion benennen werden können. 
In meinem Fall habe ich mich für `deploy-pages.yml` entschieden.

In so einer yml-Datei wird dann anschließend der Ablauf von oben nach unten definiert. 
In der ersten Zeile kann man mit `name:` zudem nochmal eine Beschreibung definieren.

### Trigger definieren
Nach dem Aktionsnamen ist die erste Definition, die vorgenommen werden muss, wann sie ausgeführt werden soll. 
Dies lässt sich über `on:` angeben und es stehen sehr viele Möglichkeiten zur Verfügung. 
Weil ich auf Änderungen reagieren will, ist `push` für mich das passende Event 
und da nur Änderungen im `master`-Branch des Repositories relevant sind, kann das zusätzlich noch angegeben werden. 

Die fertige Definition sieht folgend aus:
```yaml
on:
 push:
   branches:
     - master
```
Die Auswahl an Events, auf die reagiert werden kann ist grundsätzlich sehr groß 
und mehr Informationen dazu findest du am besten [in der Dokumentation dazu][4]. 
Weitere häufig verwendete Trigger sind das Erstellen von Pull-Requests (`pull_request`) oder auch eine zeitgesteuerte Ausführung (`schedule`).

### Aktion beschreiben
Da ich nun definiert habe, *WANN* die Aktion ausgeführt werden soll, 
geht es anschließend darum anzugeben *WAS* gemacht werden soll und das passiert unter `jobs`. 
Prinzipiell können in einer Datei mehrere Jobs angegeben sein, die dann parallel ausgeführt werden, 
aber für einen einfachen Anwendungsfall, wie meinen, reicht ein Job mehr als aus.

Einem Job muss ein Name gegeben werden (zB `github-pages`), sodass mehrere Jobs in einer Datei auseinander gehalten werden können. 
Mit `runs-on:` wird danach die Umgebung, in der diese Aktion ausgeführt werden soll, definiert. 
Hier stehen diverse Betriebssysteme und Versionen davon zur Verfügung, optional kann die Aktion auch auf mehreren durchgeführt werden. 
In den meisten Fällen ist die Wahl von `ubuntu-latest` für ein aktuelles Linux-System nicht verkehrt.

```yaml
jobs:
 github-pages:
   runs-on: ubuntu-latest
```

Nachdem der Trigger und die Umgebung angegeben ist, kommt nun die Definition der eigentlichen Aktion. 
Das geschieht über mehrere Angaben unter `steps`. Jeder einzelne Schritt der Aktion wird mit einem Bindestrich aufgezählt 
und zur besseren Dokumentation kann ihm mit `name` ein Name gegeben werden.
Im [GitHub Marketplace][5] gibt es zudem viele fertige Bausteine, die im eigenen Ablauf mit `uses` wiederverwendet werden 
und die, die Arbeit deutlich erleichtern können. Es gibt fast nichts, dass es dort nicht gibt ;) 

Mein gewünschter Prozess besteht grundlegend aus zwei Schritten:

1. Als Erstes muss der Quellcode aus dem Repository in die Buildumgebung kopiert werden, 
    wofür ich den Standard-Baustein `actions/checkout@v1` verwende.
2. Anschließend muss der Buildprozess angestoßen und das Ergebnis zu GitHub Pages hochgeladen werden. 
    Das sind genau genommen mehrere Schritte, aber da ich nicht der erste mit dem Anwendungsfall war, 
    gibt es hierfür auch eine fertige Aktion, die ich einbinden kann.

Und dann bin ich auch schon fertig mit der Buildautomatisierung :tada:.

Die komplette Datei inklusive der Definition der Schritte sieht dann wie folgt aus:
```yaml
name: Build and deploy Jekyll to GitHub Pages

on:
  push:
    branches:
      - master

jobs:
  github-pages:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v1
      - name: Build & Deploy to GitHub Pages
        env:
          JEKYLL_PAT: ${{ secrets.JEKYLL_PAT }}
        uses: helaili/jekyll-action@2.0.1
```

## Oberfläche
Falls ich nun Änderungen im `master`-Branch vornehme, kann ich im Actions-Tab der GitHub Oberfläche zusehen, 
welcher Schritt gerade ausgeführt wird, weitere Informationen dazu bekommen und auch sehen, wann die Aktion abgeschlossen ist.

{% cloudinary /assets/2020-08-28-buildautomatisierung-mit-github-actions/github-actions-tab.jpg alt="GitHub Actions Oberfläche" %}

## Fazit
Jetzt hab ich zugegebenermaßen keinen komplexen Ablauf definiert, 
aber insgesamt finde ich die Art und Weise der Konfiguration nachvollziehbar und leicht verständlich. 
Sicherlich haben mir meine Vorkenntnisse von anderen CI/CD-Tools geholfen, 
aber gerade die Möglichkeit bestehende Aktionen vom [GitHub Marketplace][5] als Bausteine bei sich wiederzuverwenden, 
gefällt mir sehr gut und denke, dass damit auch Anfänger schnell reinkommen und die gewünschten Ergebnisse erzielen können.

[1]: https://github.com/features/actions
[2]: {% post_url 2019-09-01-relaunch %}
[3]: https://pages.github.com/versions/
[4]: https://docs.github.com/en/actions/reference/events-that-trigger-workflows
[5]: https://github.com/marketplace?type=actions