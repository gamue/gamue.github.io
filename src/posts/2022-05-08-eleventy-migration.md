---
title: Migration von Jekyll zu Eleventy
description: In den letzten Wochen habe ich einige Abende damit verbracht die technische Grundlage der Homepage von Jekyll zu Eleventy zu migrieren. Warum ich das gemacht habe und welche Steine ich dabei aus dem Weg räumen musste, will ich in diesem Artikel erläutern.
permalink: /migration-von-jekyll-zu-eleventy/
header:
    teaser: assets/2022-05-08-eleventy-migration/11ty_thumb.jpg
toc: true
categories:
  - Technik
tags:
  - Homepage
---

In den letzten Wochen habe ich einige Abende damit verbracht die technische Grundlage der Homepage von Jekyll zu [Eleventy][1] zu migrieren. 
Warum ich das gemacht habe und welche Steine ich dabei aus dem Weg räumen musste, will ich in diesem Artikel erläutern. 
Falls du mehr an dem "Wie" interessiert bist, solltest du eher einen [Blick in die Git-Historie werfen][4] ;)

# Warum Wechseln?
Gefühlt habe ich die Homepage erst von [Wordpress zu Jekyll migriert][2] und bin sehr zufrieden mich für einen Static-Site-Generator (SSG) entschieden zu haben. 
Der Wartungsaufwand hat sich definitiv stark reduziert und in der vergangenen Zeit hatte ich wieder mehr Spaß am Erstellen von Blogposts.

Tatsächlich ist der Abschied von Wordpress jedoch schon ca. 2,5 Jahre her und so einfach Jekyll ist, haben sich mittlerweile einige Alternativen vor getan, 
die auf den ersten Blick besser für mich geeignet zu sein scheinen. 
Denn was mich an Jekyll, bzw. besser gesagt meinem Jekyll-Setup, schon öfter genervt hat, ist, dass ich seit [der Integration von TailwindCSS][3] sowohl Ruby, 
als auch node.js im Tech-Stack der Homepage und somit etliche Abhängigkeiten habe.

Wobei ich mich mit Ruby, der Programmiersprache in der Jekyll geschrieben ist, nicht auskenne und jedes Mal, wenn ich die Version auf meinen Computer aktualisierte, 
es damit zu etlichen Problemen gekommen ist, weswegen ich diese letztendlich auf meinem System nicht mehr aktualisiere. 
Im Gegensatz dazu, habe ich bei node.js einige Kenntnisse und im Notfall auch etliche Kontakte, an die ich mich wenden könnte ;)

Auch scheint die Weiterentwicklung rund um Jekyll eingeschlafen zu sein. 
Beispielsweise wird das [jekyll-cloudinary Plugin](https://github.com/nhoizey/jekyll-cloudinary), das ich viel nutze, 
seit langem nicht mehr weiterentwickelt und beinhaltet etliche Fehler, die mich des Öfteren genervt haben. 
Da es aber in Ruby geschrieben ist und ich mich nicht in die Sprache einarbeiten möchte, kann ich die Probleme nicht selbst lösen.

Ein weiterer Vorteil von moderneren SSGs ist eine kürzere Buildzeit, sodass ich auf meinem lokalen Computer die Homepage schneller starten und Änderungen sehen kann. 
Gerade wenn ich Layout-Anpassungen vornehmen will, ist das sehr nützlich und spart mir wertvolle Zeit.

# Warum Eleventy?
Es gibt Unmengen an Static-Site-Generatoren, [Jamstack.org](https://jamstack.org/generators/) listet zurzeit über 300 Unterschiedliche auf, weswegen die Wahl ziemlich schwer sein kann. 
Ich wollte einen, der auf JavaScript bzw. node.js basiert, da ich mich hier am besten auskenne. 
Das reduziert zwar die Liste, aber auch nicht um sonderlich viel.

Ein weiteres Kriterium für mich war die Einfachheit. Als ich das letzte Mal unzufrieden mit Jekyll war, hatte ich mir [Gatsby][6] angeschaut. 
Insgesamt hatte ich einen positiven Eindruck davon, fand die notwendige Konfiguration und Prozesse für meinen Anwendungsfall jedoch zu aufwändig, weswegen ich mich damals gegen eine Migration entschieden hatte.

Als ich dann vor kurzem auf Eleventy gestoßen bin, war ich verwundert, dass das dortige Projekt so schnell startete und nur sehr wenig Dateien beinhaltete. 
Das hat dazu geführt, dass ich an einem Feierabend ein "[Spielprojekt](https://github.com/gamue/playground-eleventy)" mit Eleventy aufsetzte, 
in dem ich das Framework genauer unter die Lupe nahm und versuchte die Funktionalitäten meiner Homepage nachzubauen. 
Dabei gab es zwar die eine oder andere Herausforderung, konnte das meiste jedoch recht fix lösen. 
Die aktive Community und gute Dokumentation von Eleventy war hier sehr hilfreich und gab mir ein gutes Gefühl, was die Zukunftssicherheit des Projekts angeht.

Insgesamt war ich nach meinem Test sehr begeistert und hatte Lust, meine Seite darauf umzustellen, damit ich endlich die Sachen loswerden kann, die mich schon länger an meinem Jekyll-Setup störten.

# Allgemeine Unterschiede
Eleventy ist recht simpel, falls du aber Jekyll gewohnt bist, wirst du feststellen, dass einige Dinge anders funktionieren oder es nicht gibt, was zu entsprechenden Herausforderungen führt. 
Sobald du aber einige Konzepte verstanden und dich an diese gewöhnt hast, ist es oft keine größere Sache einen passenden Ersatz zu finden oder zu erstellen.

## Verzeichnisstruktur
Einer der offensichtlichsten Unterschiede ist die Verzeichnisstruktur. 
Bei [Jekyll befinden sich die Dateien im Root-Verzeichnis](https://jekyllrb.com/docs/structure/) und die speziellen Ordner beginnen mit einem Unterstrich, wie beispielsweise `_posts`, `_includes` oder `_layouts`.

Standardmäßig liegt bei [Eleventy zwar auch alles im Root-Verzeichnis](https://www.11ty.dev/docs/config/#input-directory), 
jedoch lassen sich die Pfade zu den einzelnen Ordnern über Konfigurationen definieren und so beispielsweise leicht in Unterverzeichnisse legen.

Prinzipiell hätte ich Eleventy so konfigurieren können, dass es die Jekyll-Ordnerstruktur verwendet. 
Habe mich jedoch bewusst dagegen entschieden, um schnell zu sehen, welche Dateien ich schon migriert habe und um welche ich mich noch kümmern muss.

## Konfigurationsdatei
Das Herzstück von Jekyll ist die `_config.yml`-Konfigurationsdatei, in der alle möglichen Einstellungen vorgenommen werden. 
Wie die Endung schon sagt, handelt es sich dabei um eine YAML-Datei und die Struktur ist daher sehr einfach. 
In dieser können zudem Einstellungen oder Werte definiert werden, auf die von allen Homepage-Seiten zugriffen werden kann. 
Ich hatte dort z.B. SEO-Fallback-Texte oder Account-Daten hinterlegt, um diese von jeder Seite abrufen zu können.

Bei Eleventy wird die Grundkonfiguration hingegen in der `.eleventy.js`-Datei vorgenommen und ist daher als JavaScript-Code geschrieben. 
Mit ein bisschen JS-Erfahrung kein Problem, aber eben auch etwas komplizierter als eine YAML-Datei. 
Das Definieren von Werten, die auf allen Seiten nutzbar sind, passiert am einfachsten über [globale Daten-Dateien](https://www.11ty.dev/docs/data-global/). 
Hier kannst du zwischen JSON- oder JS-Dateien wählen, was es sogar erlaubt diese mit Logik zu versehen.

### Frontmatter Defaults
Etwas, dass ich in Jekyll sehr gerne genutzt habe, waren [Frontmatter-Standardwerte](https://jekyllrb.com/docs/configuration/front-matter-defaults/) für Posts und Seiten je nachdem, in welchem Verzeichnis diese liegen. 
Darüber konnte ich leicht Layout-Einstellungen global definieren und bei Bedarf in den einzelnen Seiten überschreiben.

```yaml
# _config.yml
defaults:
  ...
  - scope:
      path: _pages/photography/*
      type: pages
    values:
      full_width: true
      typography: false
      lightbox: true
```

Eleventy bietet als Ersatz hierfür [Verzeichnis-spezifische Daten-Dateien](https://www.11ty.dev/docs/data-template-dir/) an. 
Meiner Meinung nach etwas unübersichtlicher, aber genauso funktional.

```json
// src/pages/galleries/galleries.json
{
  "tags": "galleries",
  "full_width": true,
  "typography": false,
  "lightbox": true
}
```

## Interpretation von Markdown
Standardmäßig verwendet Jekyll [Kramdown](https://jekyllrb.com/docs/configuration/markdown/), um Markdown-Dateien in HTML umzuwandeln. 
Eleventy setzt stattdessen auf [markdown-it](https://www.11ty.dev/docs/languages/markdown/). 
Das führt zu einigen Unterschieden, wie Text interpretiert wird bzw. wie das daraus generierte HTML aussieht.

Ich benutze beim Schreiben von Blogeinträgen beispielsweise gerne Zeilenumbrüche, um Absätze untereinander anstatt in einer einzelnen, langen Zeile zu haben. 
Das behandelt markdown-it im Standard anders als Kramdown und würde zusätzliche Absätze bzw. Zeilenumbrüche im HTML einfügen.

Insgesamt kein sehr großes Thema, dass sich über Konfigurationen (z.B. Ignorieren der zusätzlichen Zeilenumbrüche) 
oder dem Hinzufügen von Plugins (z.B. Erkennen von CSS-Klassen, Definitions-Listen oder dem Hinzufügen von Header-Anchor) lösen lässt. 
Dennoch wichtig das zu wissen und am Ende das generierte HTML zu prüfen.

# Herausforderungen
Durch meine vorherigen Tests wusste ich schon, dass sich der Großteil der Homepage-Funktionen recht einfach migrieren oder nachbauen lassen sollte. 
Wie es aber so oft ist, brauchen die restlichen 20% meist 80% der Zeit und so war es auch in diesem Fall.

Die meisten der zeitraubenden Themen lagen an den verwendeten Plugins oder an meinem eigenen Layout. 
Wäre ich näher am Jekyll-Standard und hätte ein simples Seiten-Template verwendet, hätte ich mir einiges sparen können. 
Aber das wollte ich ja nicht und was wären technische Projekte ohne Herausforderungen ;)

Um das Ganze noch etwas zu verkomplizieren habe ich die Migration von Jekyll zu Eleventy auch dafür genutzt die Seiten-Templates von Liquid zu [Nunjucks](https://mozilla.github.io/nunjucks/) zu migrieren. 
Nunjucks kam mir beim Lesen der Eleventy-Dokumentation und von etlichen Artikeln als empfohlener Standard vor und ich hatte keinen Grund gesehen, der dagegen sprach, das mit anzugehen. 
Das war nicht unbedingt notwendig, da Eleventy auch Liquid als Templatesprache unterstützt, jedoch musste ich die Dateien sowieso anfassen und die sich daraus ergebenden Änderungen hielten sich in Grenzen.

## Filter
Filter sind Funktionen, mit denen Daten vor der Ausgabe auf dem Template geändert werden können. 
Bei der Migration ergaben sich die notwendigen Anpassungen aus zwei Ursachen: 
Zum einen stellt Jekyll [eigene Filter zur Verfügung,](https://jekyllrb.com/docs/liquid/filters/) die ich häufig genutzt habe und zum anderen unterscheiden sich Filter zwischen Liquid und Nunjucks.

Für beides musste also Ersatz her und falls ich in der [Nunjucks Doku](https://mozilla.github.io/nunjucks/templating.html) nichts gefunden hatte, hieß das meistens diese selbst zu programmieren. 
Die Funktionalität der Filter ist recht simpel und da es sich um JavaScript handelt, war das insgesamt kein Problem. Nur eben Aufwand.

{% raw %}
```jsx
// date_filters.js
const dateYear = (date) => {
  return new Date(date).getFullYear();
};
module.exports = { dateYear , ... };

// .eleventy.js
const dateFilters = require("./src/_11ty/date_filters.js");

module.exports = function(eleventyConfig) {
	...
  eleventyConfig.addFilter("dateToYear", dateFilters.dateYear);
  ...
}

// Verwendung
{{ irgendeine-datumsvariable | dateToYear }}
```
{% endraw %}

Hier ein kleines Beispiel, mit dem ich den [date-Filter von Liquid](https://shopify.github.io/liquid/filters/date/) ersetzt habe. 
Genauer gesagt, will ich für den Copyright-Hinweis im Footer nur das Jahr aus der Datumsvariable anzeigen.

Damit die `.eleventy.js`-Datei übersichtlich bleibt, habe ich die Filter, und auch die Shortcodes aus dem nächsten Abschnitt, in mehrere JS-Dateien ausgelagert. 
Das würde ich definitiv empfehlen genauso zu machen.

## Shortcodes
Während Filter eine Eingabevariable verarbeiten und wieder ausgeben, sind Shortcodes vorwiegend komplexere Funktionen, die mehrere Eingabevariablen annehmen und das Ergebnis direkt im Template ausgeben.

Auch hier kommt [Jekyll mit eigenen Bordmitteln (Tags genannt)](https://jekyllrb.com/docs/liquid/tags/), die es in Eleventy nicht gibt und ich natürlich oft verwendet habe (z.B. `post_url` & `link`). 
Zudem musste ich einen Ersatz für das cloudinary-Plugin schaffen.

Grundsätzlich ist das Vorgehen identisch zu den Filtern, denn bei beidem handelt es sich um JavaScript-Funktionen. 
Shortcodes sind tendenziell nur komplexer, weswegen ich die Logik aus dem unteren Beispiel heraus lasse. 
Sollte dich das interessieren, schau gerne ins [GitHub-Repo][4] ;)

{% raw %}
```jsx
// post_url.js enthält eine Funktion, 
// die aus einer Collection (Blogposts, Galerien, ..) 
// das Element mit dem angegebenem Dateinamen/-pfad heraussucht 
// und dessen URL ausgibt.

// .eleventy.js
const postUrls = require("./src/_11ty/post_url.js");

module.exports = function(eleventyConfig) {
	...
  eleventyConfig.addShortcode("post_url", postUrls);
  ...
}

// Verwendung
{% post_url collections.galleries, '2012-06-island' %}
```
{% endraw %}

Da ich die Shortcodes etwas anders als bei Jekyll implementiert habe, hat das leider zu zusätzlichem Aufwand geführt, da ich jede Nutzung entsprechend der anderen Parametern anpassen musste. 
Prinzipiell hätte ich `post_url` und `link` auch kompatibel implementieren können, trotzdem hätte ich die Verwendungen anfassen müssen, da die Werte nicht in Hochkommas waren.

Ein weiterer, wichtiger Unterschied ist, dass zwischen den Parametern ein Komma sein muss und die Werte in exakter Reihenfolge übergeben werden. 
Das hat insbesondere beim cloudinary-Shortcode zu Anpassungen geführt, da ich hier häufig die Werte zusammen mit den Parameternamen übergeben habe.

Hier ein Vergleich:

{% raw %}
```jsx
// Nutzung Jekyll / Liquid
{% cloudinary /assets/2020-09-12-kameraausruestung/equip_dslr.jpg alt="DSLR Ausrüstung" %}

// Nutzung Eleventy / Nunjucks
{% cloudinary "/assets/2020-09-12-kameraausruestung/equip_dslr.jpg", "DSLR Ausrüstung" %}
```
{% endraw %}

Insgesamt musste ich sehr viele Seiten und Blogposts manuell anpassen, da ich häufig vom cloudinary-Plugin Gebrauch gemacht oder Seiten und Posts über `post_url` bzw. `link` untereinander verlinkt habe. 
Nächstes Mal würde ich versuchen die Anpassungen über ein Skript durchzuführen, da es bei meiner Anzahl von Posts und Seiten schon recht lange gedauert hat und mühselig war.

## Includes und Macros
Einzelne Bestandteile der Homepage sind in kleinere Dateien ausgelagert, damit diese besser strukturiert sind (zB Header, Footer) und ich diese auf mehreren oder der gleichen Seite wiederverwenden kann (zB Artikelvorschau).

Grundsätzlich ist die Verwendung dieser Bestandteile, Includes genannt, in Nunjucks kein Problem. 
Knifflig wird es erst, wenn diese Parameter übergeben bekommen, was ich leider ausgiebig bei Bildergalerien mache.

Folgender Include-Code war beispielsweise bei Liquid möglich

{% raw %}
```jsx
{% include gallery.html folder="/assets/photography/2010_09_belgien" layout="quarter" equal_height="true" %}
```
{% endraw %}

Anschliessend konnte ich in der `gallery.html` über `include.folder` auf den entsprechenden Wert zugreifen und die dortige Logik gestalten.

Der Ersatz hierfür heißt Nunjucks Macros, denn damit lassen sich JavaScript-Funktionen definieren, die dann wiederum in den einzelnen Seiten verwendet werden können. 
Das Ganze hat übrigens nichts mit Jekyll oder Eleventy zu tun, sondern liegt nur an der Template-Sprache und hätte ich mir sparen können, wenn ich bei Liquid geblieben wäre.

{% raw %}
```jsx
// macros/gallery.njk
{% macro imageGallery(images, caption, layout, reverse=false, equal_height=false, double_padding=false, masonry=false ) %}
  //.. Logik
{% endmacro %}

// Verwendung (zB in einer md-, html- oder njk-Datei)
{%- from "macros/gallery.njk" import imageGallery with context -%}
//.. 
{{ imageGallery(gallery, null, "third") }}
```
{% endraw %}

Innerhalb des `macro`-Blocks in `macros/gallery.njk` kann ich auf die übergebenen Werte zugreifen und natürlich auch Standardwerte für die Parameter definieren, wie ich es beispielsweise für die Boolean-Variablen gemacht habe.

Jeder Macro-Aufruf hat seinen eigenen Context, sodass ich mir hier über Namens- oder Wertkonflikte von Variablen innerhalb einer Seite keinen Gedanken machen muss.

Was mich jedoch sehr gestört hat, ist, dass ich die Import-Zeile für das Macro tatsächlich in jeder Datei brauche, in der ich das Macro nutzen möchte. 
Gerne hätte ich den Import einfach zu meinem Basis- oder Seiten-Layout hinzugefügt und dann auf den darauf aufbauenden Seite nur den Aufruf des Macros gehabt, was jedoch leider nicht funktioniert.

Nach etlichen Versuchen und stundenlangen Recherchen, bin ich dann auf [einen Hack](https://github.com/11ty/eleventy/issues/613#issuecomment-968189433) gestoßen, 
der mithilfe von Code jede Seite durchgeht und die Import-Zeile dort programmatisch einfügt. Zwar nicht schön, aber effektiv und erspart mir das manuell zu machen.

{% raw %}
```jsx
// .eleventy.js
eleventyConfig.addCollection('everything', (collectionApi) => {
  const macroImport = `{%- from "macros/gallery.njk" import imageGallery with context -%}`;
  let collection = collectionApi.getFilteredByGlob('src/**/*.md');
  collection.forEach((item) => {
    item.template.frontMatter.content = `${macroImport}\n${item.template.frontMatter.content}`
  })
  return collection;
});
```
{% endraw %}

## Paging
Vor einiger Zeit habe ich das Standard-Paging-Plugin von Jekyll durch [jekyll-paginate-v2](https://github.com/sverrirs/jekyll-paginate-v2) ausgetauscht, um von dessen Vorteile zu profitieren. 
Anwendungsfall war das Generieren einer Übersicht aller Blogposts und zusätzlich Übersichtsseiten je Kategorie und Tag, aufgeteilt in mehrere Seiten zu je maximal 8 Einträgen.

Am Ende entstanden dadurch automatisch Seiten wie:

- ../blog
- ../blog/page2
- ../category/fotografie
- ../category/fotografie/2/
- ../tag/software
- ../tag/software/2/

Leider gibt es diese Funktion bei Eleventy nicht, oder besser gesagt die dortige Paging-Funktion kommt sehr schnell an seine Grenzen. 
Denn es lässt sich zwar leicht eine Übersicht aller Blogposts mit dem folgenden Frontmatter generieren, das Gleiche getrennt nach Kategorien und Tags jedoch nicht.

{% raw %}
```markdown
---
title: Alle Artikel
layout: posts-archive.njk
permalink: "blog/{% if pagination.pageNumber > 0 %}page{{ pagination.pageNumber +1 }}/{% endif %}index.html"
pagination:
  data: collections.posts
  size: 8
  alias: posts
  reverse: true
---
```
{% endraw %}

Nach einiger Recherche bin ich auf [diesen Artikel von Jérôme Coupé][5] gestoßen, der einen Lösungsweg für das Problem erklärt. 
Da Eleventy das Paging für eine eindimensionale Liste hinbekommt und “nur” an der zweidimensionalen scheitert, 
wird die Paging-Struktur im JavaScript-Code erzeugt und in eine eindimensionale Liste umgewandelt, die dann verarbeitet werden kann.

Eine zusätzliche Herausforderung war, dass Jekyll sowohl `categories`, als auch `tags` zur Kategorisierung von Posts anbietet und ich auch genutzt habe. 
Eleventy kennt per Standard nur `tags` und so musste ich noch ein paar Anpassungen am Code vornehmen, dass dieser meine Anforderungen erfüllte.

Ich hoffe, dass eine zukünftige Version von Eleventy, sich dem Paging annimmt und dafür einen brauchbaren Standard schafft. 
Paginierte Übersichtsseiten je Kategorie/Tag ist aus meiner Sicht kein abwegiger Anwendungsfall.

## Production Build
Es gibt einige Dinge, die ich anders haben möchte, wenn ich die Homepage auf meinen Lokalen Rechner starte, als wenn sie letztendlich beim Hoster betrieben wird. 
Beispielsweise soll “das Endprodukt” Cloudinary für die Bilder nutzen, lokal ist dies jedoch nicht notwendig und die Seiten sollen stattdessen die lokal gespeicherten Bilder laden.

Die Lösung hierfür ist prinzipiell simpel, hat mich aber etliche Stunden und Nerven gekostet, was damit zu tun hat, dass ich sowohl auf einem Windows- als auch Mac-Rechner arbeite. 
Über den Build-Befehl wird jeweils die Umgebungsvariable `ENV_PROFILE` gesetzt, auf die ich dann im Code prüfe.

```json
// package.json
"scripts": {
  ...
  "build": "ENV_PROFILE=prod eleventy && npm run tailwind:prod",
  "build:win": "set ENV_PROFILE=prod & eleventy & npm run tailwind:prod-win",
  ...
},
```

Das was mich Stunden und Nerven gekostet hat, war die Tatsache, dass Windows den kompletten Wert bis zum `&` als Variable setzt,
d.h. **inklusive** dem Leerzeichen, sodass meine Prüfungen auf `prod` bei Mac/Linux `true` ergaben, auf Windows jedoch `false`. 
Bei der Ausgabe des Werts auf der Konsole ist mir das nicht aufgefallen und hat mich lange Zeit zum Verzweifeln gebracht.

Lösung ist daher entweder `set ENV_PROFILE=prod& eleventy` zu schreiben, oder mögliche Leerzeichen vom Wert zu entfernen. 
Ich habe mich für letzteres entschieden, da das allgemeiner und nicht so fehleranfällig ist.

Damit ich die Information auch in den Templates verwenden kann, habe ich zudem eine entsprechende Zeile in die globale Daten-Datei eingefügt

{% raw %}
```jsx
// _data/site.js
module.exports = {
  // ..
  environment: process.env.ENV_PROFILE?.trim() || "dev"
};

// Nutzung im Nunjucks Template
{% if site.environment === 'prod' %}
  // ... Logik
{% endif %}

// Nutzung in JS-Dateien (globale Daten)
const site = require("../_data/site.js");
const isProd = site.environment === 'prod';

// Nutzung in JS-Dateien (Umgebungsvariable)
const isProd = process.env.ENV_PROFILE?.trim() === 'prod';
```
{% endraw %}

# Fazit
Insgesamt war die Migration deutlich komplexer und dauerte länger als gedacht, trotzdem fällt mein Fazit sehr positiv aus, 
denn ich habe nun einen Stand, mit dem ich zufrieden bin und alles, was mir beim Jekyll-Setup nicht gefallen hat, passt nun :)

- Ich habe keine fixierten Ruby-, Jekyll- und Node-Versionen auf meinem Computer.
- Der Tech-Stack der Seite ist keine Mischung aus Ruby und JavaScript, sondern basiert alleinig auf JS.
- Ich bin das jekyll-cloudinary Plugin losgeworden und habe keine unschönen Workarounds im Code.
- Die Buildzeit der kompletten Seite hat sich auf meinem lokalen Rechner von 18-20 Sekunden mit Jekyll auf 2-4 Sekunden mit Eleventy reduziert. 
  Der Build bei GitHub Action ist ca. 1 Minute schneller und benötigt nun nur noch ca. 1,5 Minuten.

Zudem habe ich während der Migration etliches über Eleventy, Nunjucks, JavaScript und deren Konzepte gelernt. 
Das und der Spaß an technischen Herausforderungen, man könnte vielleicht sogar Spielereien sagen, ist ein nicht unerheblicher Grund warum ich solche Projekte überhaupt mache.

Ich denke, dass Jekyll zwar keine schlechte Wahl für einen Static-Site-Generator ist, 
doch ist es mittlerweile eben auch in die Jahre gekommen und Ruby als Programmiersprache, ist in meinen Augen heutzutage eine eher exotische Wahl, die nicht mehr viele lernen. 
Eleventy hat zwar auch seine Negativpunkte (zB begrenzte Paging-Möglichkeit, fehlende Filter und Shotcodes), aber ist, meiner Meinung nach, sehr einfach zu verstehen, nutzen und bei Bedarf zu erweitern. 
Falls ich zukünftig einen SSG benötigen sollte, würde ich in jedem Fall wieder Eleventy verwenden oder zumindest in Betracht ziehen.

[1]: https://www.11ty.dev/
[2]: {% post_url collections.posts, "2019-09-01-relaunch" %}
[3]: {% post_url collections.posts, '2020-12-13-homepage-auf-tailwind-umgestellt.md' %}
[4]: https://github.com/gamue/gamue.github.io
[5]: https://www.webstoemp.com/blog/basic-custom-taxonomies-with-eleventy/
[6]: https://www.gatsbyjs.com/