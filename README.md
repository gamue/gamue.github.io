# gamue.github.io / gamue.de

Source code of my [private homepage](https://gamue.de).

- Build with Static Site Generator [Jekyll](https://jekyllrb.com/)
- CSS created with [TailwindCSS](https://tailwindcss.com/) and the [Typography Plugin](https://github.com/tailwindlabs/tailwindcss-typography)
- Icons from [IcoMoon Free bundle](https://icomoon.io/app/#/select)
- ~~Search based on [Lunr](https://lunrjs.com/)~~ Currently removed due redesign
- Table of Content by [jekyll-toc](ttps://github.com/allejo/jekyll-toc)
- Using [SimpleLightbox](https://github.com/dbrekalo/simpleLightbox) for gallery overlays

## Frontmatter Optionen
Folgende Optionen stehen im Frontmatter zur Verfügung:

- `description`: SEO Beschreibung des Artikels
- `excerpt`: Vorschautext des Artikels bzw. der Seite
- `header`
  - `teaser`: Vorschaubild der Seite oder Artikels
  - `overlay_image`: Hero-Bild der Seite
  - `overlay_filter`: Farbanpassung/Überlagerung des Hero-Bildes in rgb, Beispielswert: `rgba(200, 200, 200, 0.6)`
  - `show_overlay_excerpt`: `true` falls der `excerpt`-Text unterhalb der Seitenüberschrift, ggf. im Hero-Image-Bereich, dargestellt werden soll.
- `gallery`: Liste von Bildern, die in einer Galerie dargestellt werden sollen. Es kann auch ein anderer Name verwendet werden, und über den `id`-Parameter an den gallery-include übergeben werden.
  - `image_path`: Ein Element der Galerie-Liste, das den Pfad zum Bild angibt.
- `itinerary`: Liste mit Reisestationen (nur `country`-layout)
  - `name`: Name/Überschrift der Station
  - `image`: Bild des Ortes
  - `description`: Kurzer Beschreibungstext der Station
- `itinerary_title`: Möglichkeit die Reisestationen auf der Seite unter einem speziellen Namen darzustellen (nur `country`-layout)
- `map_id`: ID der Google Maps Karte, die auf der Seite dargestellt werden soll (nur `country`-layout)
- `country_tag`: Das Tag, um alle zugehörigen Artikel aufzulisten (nur `country`-layout)
- `tagline`: Unterüberschrift, die ggf. im Hero-Image-Bereich dargestellt wird.
- `toc`: `true` falls eine Inhaltsangabe oberhalb des Artikels angezeigt werden soll.
- `full_width`: `true` falls die Seite über die vollständige Breite des `container`-Elements dargestellt werden soll.
- `typography`: `false` falls das Tailwind-Typography Plugin für den Content der Seite nicht angewendet werden soll.
- `lightbox`: `true` falls das SimpleLightbox-Skript in der Seite verfügbar sein soll. Jedoch nicht notwendig, wenn `gallery` gesetzt ist.   
- `show_meta_data`: `true` falls Veröffentlichungsdatum und Lesezeit beim Artikel angezeigt werden soll.
- `sitemap`: `false` falls die Seite oder der Artikel nicht in der Sitemap berücksichtigt werden soll.
- `comments`: `true` falls auf der Seite die Kommentarfunktion angezeigt werden soll.

## Kategorien / Tags

Artikel können in Jekyll über Kategorien und Tags organisiert werden. 
Da es dabei leider keine Hierarchieebenen dabei gibt, nutze ich als Definition Kategorien als Hauptebene und Tags als Unterkategorien.

Die Seite ist aktuell so strukturiert:

- Reisen (Kategorie)
  - Reisebericht (Tag)
  - Reisetipps
  - ... Länder, Städte, etc.
- Fotografie
  - Ausrüstung
  - Fotowissen
- Technik
  - Tools
  - Homepage
  - Coding
- Allgemein

## Styling

Um den Überblick über alle verwendeten Elemente und Styles zu behalten, 
sind alle auf [einer Seite](http://localhost:4000/style/) vorhanden. Um diese sehen zu können, 
muss Jekyll mit dem Parameter `--unpublished` lokal gestartet werden.