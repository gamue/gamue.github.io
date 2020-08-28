---
title: Prozessautomatisierung mit Gulp
permalink: /prozessautomatisierung-mit-gulp/
header:
    teaser: assets/2019-09-08-prozessautomatisierung-mit-gulp/thumb.jpg
gallery:
  - url: assets/2019-09-08-prozessautomatisierung-mit-gulp/stats_home.jpg
    image_path: assets/2019-09-08-prozessautomatisierung-mit-gulp/stats_home.jpg
  - url: assets/2019-09-08-prozessautomatisierung-mit-gulp/stats_overview.jpg
    image_path: assets/2019-09-08-prozessautomatisierung-mit-gulp/stats_overview.jpg
  - url: assets/2019-09-08-prozessautomatisierung-mit-gulp/stats_zypern.jpg
    image_path: assets/2019-09-08-prozessautomatisierung-mit-gulp/stats_zypern.jpg
  - url: assets/2019-09-08-prozessautomatisierung-mit-gulp/stats_thailand.jpg
    image_path: assets/2019-09-08-prozessautomatisierung-mit-gulp/stats_thailand.jpg
categories:
  - Homepage
  - Technik
tags:
  - Anwendungen / Tools
---

Mit der Umstellung der Homepage auf [Jekyll](https://jekyllrb.com/) gab es einige Dinge "neu zu erfinden", 
die zuvor bei Wordpress im Standard mitgeliefert worden sind oder wofür es Plugins gab. 
Ein Thema, dass es zu lösen gab, war das Erstellen von Thumbnails bzw. die Konvertierung der Bilder in kleinere Varianten, 
damit die einzelnen Seiten schneller laden.

Eine Möglichkeit wäre es gewesen, die Bilder bei einem speziellen Provider wie z.B. [cloudinary](https://cloudinary.com/) hosten zu lassen, 
so dass ich einfach Varianten in diversen Bildergrößen anfragen hätte können. 
Da ich die Seite oder Teile davon aber nicht bei zwei verschiedenen Diensten hochladen wollte, hab ich einen anderen Weg gesucht, 
der komplett ohne einen weiteren Dienst auskommt und somit etwas einfacher ist. 
Nach etwas Recherche bin ich auf [Gulp](https://gulpjs.com/) gestoßen, was an sich ganz spannend und nach dem richtigen Werkzeug aussah um wiederkehrende Prozesse zu automatisieren.
Also hab ich mich darin etwas eingelesen, die nötigen Pakete auf meinem Rechner installiert und ziemlich schnell war auch die erste Variante meines Skripts fertig, aber fangen wir am Anfang an.

# Ausgangslage
Ich hab Versionen von meinen Bildern in größeren Auflösungen vorliegen, die dementsprechend auch relativ wie Speicherplatz benötigen und damit auf einer Galerie-Seite für das Web nicht geeignet sind.
Daher sollen aus diesen Bildern kleinere Varianten zu Vorschauzwecken zu generiert werden. Weil das eine Aufgabe ist, 
die jedesmal beim Hochladen von neuen Bilder anfällt, soll es entsprechend einfach und schnell gehen.

# Umsetzung
Der Aufbau eines Gulp-Skripts ist recht einfach: Zuerst wird definiert welche Dateien verarbeitet werden, dann die Logik was gemacht und am Ende wohin das Ergebnis ausgegeben werden soll.
Zugegebener Weise war ich nicht der Erste, der Gulp für diesen Anwendungsfall benutzt, so dass sich im Netz etliche Seiten, 
Skripte und Bibliotheken finden, die man sich anschauen und von denen man sich bedienen kann. 
Die Kunst ist es aber zu wissen was man will und worin sich sein Anwendungsfall von dem Anwendungsfall unterscheidet, den man sich gerade anschaut. ;) 

Bei den Bildern sieht meine Dateistruktur aktuell in etwa so aus:
```
./assets/photography
├── /2009_02_irland
├── /2009_09_israel
├── ...
``` 

Meine erste Überlegung war die Vorschaubilder (=Thumbnails) in einem Unterordner bei den großen Versionen abzulegen. 
Das Ergebnis hätte in etwa folgend ausgesehen:
```
./assets/photography
├── /2009_02_irland
│   └── /thumbnails
├── /2009_09_israel
│   └── /thumbnails
├── ...
``` 

Nach einigen Versuchen und einer anschließenden Pause um nochmal nachzudenken hab ich mich dann aber doch für eine andere Struktur entscheiden, 
denn Gulp scheint mir dafür ausgelegt zu sein getrennte Eingangs- und Ausgangsverzeichnisse zu haben. 
Und am Ende macht es für die Homepage und mich keinen Unterschied wo die Dateien liegen, Hauptsache sie folgen einer definierten Struktur.

Die finale Struktur sieht wie folgt aus: 
```
./
├── /assets/photography
│   └── /2009_02_irland
│   └── /2009_09_israel
│   └── ...
├── /thumbnails/photography
│   └── /2009_02_irland
│   └── /2009_09_israel
│   └── ...
├── ...
``` 

Schlussendlich gefällt mir die Variante sogar besser, weil, sollte ich tatsächlich mal auf einen der Bild-Hosting-Dienste umstellen wollen,
hab ich deutlich weniger Aufwand die Vorschaubilder wieder von den Ausgangsdaten zu trennen.

### Skript
Hier der Code, der herausgekommen ist:
```javascript
var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');

gulp.task('default', function () {
  return gulp.src([
    'assets/**/*',
    '!assets/css/**',
    '!assets/images/**'
    ])
    .pipe(changed('thumbnails'))
    .pipe(imageResize({
      width: 400,
      height: 400,
      crop: false,
      upscale: false
    }))
    .pipe(imagemin())
    .pipe(gulp.dest('thumbnails'));
});
```

1. Zu Beginn werden mit `require` einige Bibliotheken als Abhängigkeiten definiert und dann startet auch schon der `task`, der die Verarbeitung übernimmt.
2. `gulp.src` sagt welche Dateien bearbeitet werden sollen, in meinem Fall alles im `assets`-Ordner
mit Ausnahme von `assets/css` und `assets/images`. Die anschließenden `pipe`-Befehle entsprechen je einem Verarbeitungsschritt.
3. Mit `changed` wird geschaut, ob die Eingangsdaten schon im Verzeichnis `thumbnails` vorhanden sind, und wenn dass der Fall ist, 
dann werden diese ignoriert. So werden nur die Dateien verarbeitet, die neu sind oder sich geändert haben, was die Ausführungszeit des Skriptes stark reduziert. 
Dass war der Teil der am meisten Schwierigkeiten mit den vorherigen Ordnerstrukturen bereitet hat.
4. In `imageResize` passiert die meiste Magie, den diese Zeile ist für die Erstellung der kleineren Bilder zuständig. 
In meinem Fall hab ich mit `width` und `heigth` definiert, dass die längste Seite des Bilder 400 Pixel sein soll. 
`upscale: false` verhindert dabei, dass kleinere Bilder vergrößert werden und `crop: false` besagt dass das Seitenverhältnis beibehalten werden soll.
Bei `crop: true` würde ich quadratische Vorschaubilder im Format 400x400 bekommen, die ein Ausschnitt des größeren Bildes sind, was ich aber jedoch nicht will.
5. `imagemin` komprimiert die Bilder noch etwas, so dass die Dateigröße noch etwas kleiner wird. Natürlich ohne die Qualität des Bildes zu beinträchtigen.
6. `gulp.dest` definiert das Ausgabeverzeichnis, wobei der bisherige Pfad eines Bildes erhalen bleibt, 
so dass nicht alle Bilder direkt im `thumbnails`-Ordner sind, sondern ihre bisherige Ordnerstruktur beibehalten. 

Immer wenn ich jetzt neue Bilder einfüge oder bestehende ändere, führe ich einfach den Befehl `gulp` auf der Kommandozeile aus 
und die neuen Vorschaubilder werden innerhalb von ein paar Sekunden erzeugt :)

# Ergebnis
Ich bin mit der Variante sehr zufrieden und es hat auch Spaß gemacht mit [Gulp](https://gulpjs.com/) zu experiementieren.
Das Skript ist recht simpel und die Laufzeit ist, mit ein paar Sekunden, relativ gering, besonders wenn es nur neue Bilder verarbeiten muss.

Aber ich hatte das Ganze ja gemacht um die Ladezeit der Seite zu verkürzen und daher hier ein paar Daten, um das Ergebnis zu bewerten.
Für die Performance-Messungen habe ich [Pingdom](https://tools.pingdom.com/) mit dem Standort "Europe - Germany - Frankfurt" genutzt 
und mehrere Versuche mit etwas Zeitabstand durchgeführt.

- Die Ausgangsvarianten der Bilder sind ca 238 MB groß, die gleichen Bilder haben in der kleinen Variante 20.6 MB, 
was schon eine betrachtliche Ersparnis ist.
- Die **Startseite** ist von 2.3 MB auf 1.3 MB geschrumpft, wobei hier natürlich die wenigsten Bilder angezeigt werden. 
Zusätzlich muss ich erwähnen, dass ca. die Hälfte der jetzige Datenmenge auf das Headerbild gehen, 
welches noch ausgewechselt werden wird. Die Ladezeiten reduzierten sich von ca. 700-800ms auf 200-250ms.
- Die **Galerieübersicht**-Seite hatte vor der Umstellung 7 MB und benötigte zwischen 600ms und 2s zum Laden. 
Danach war die Seite unter 1 MB groß und die gemessenen Ladezeiten waren im Bereich von 300-600ms.
- Die **Zypern-Galerie** hat sich von 15.8 MB auf 2.1 MB verkleinert und die Ladezeiten sind von 400ms - 2.3s auf ca 500ms runtergegangen.
- Die **Thailand-Galerie**, als bisher größte Seite, brachte es mit ihren Bildern auf 28.7 MB und Ladezeiten zwischen 500ms und 4s.
Ich kenne noch Zeiten, da hätte man für das Übertragen solcher Datenmengen Stunden benötigt ;) 
Durch die Änderung waren es dann nur noch 2.9 MB und zwischen 300ms und 1.3s


{% include gallery layout="half" %}