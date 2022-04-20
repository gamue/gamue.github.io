# gamue.github.io / gamue.de

Source code of my [private homepage](https://gamue.de).

- Build with Static Site Generator [Eleventy](https://www.11ty.dev/)
- CSS created with [TailwindCSS](https://tailwindcss.com/) and the [Typography Plugin](https://github.com/tailwindlabs/tailwindcss-typography)
- Icons from [IcoMoon Free bundle](https://icomoon.io/app/#/select)
- Using [SimpleLightbox](https://github.com/dbrekalo/simpleLightbox) for gallery overlays
- Using [Masonry Library](https://masonry.desandro.com/) for (optional) gallery styling

## Frontmatter Optionen
Folgende Optionen stehen im Frontmatter zur Verfügung:

- `description`: SEO Beschreibung des Artikels
- `excerpt`: Vorschautext des Artikels bzw. der Seite
- `header`
  - `teaser`: Vorschaubild der Seite oder Artikels
  - `overlay_image`: Hero-Bild der Seite
  - `overlay_filter`: Farbanpassung/Überlagerung des Hero-Bildes in rgb, Beispielswert: `rgba(200, 200, 200, 0.6)`
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
- `masonry`: `true` falls das Masonry-Skript in der Seite verfügbar sein soll.
- `show_meta_data`: `true` falls Veröffentlichungsdatum und Lesezeit beim Artikel angezeigt werden soll.

## Kategorien / Tags

Artikel werden über Kategorien und Tags organisiert. 
Da es dabei leider keine Hierarchieebenen dabei gibt, nutze ich als Definition Kategorien als Hauptebene und Tags als Unterkategorien.

Die Seite ist aktuell so strukturiert:

- Reisen (Kategorie)
  - Reisebericht (Tag)
  - Reisetipps
  - ... Länder, Städte, etc.
- Fotografie
  - Ausrüstung
  - Fotowissen
  - Software
- Technik
  - Tools
  - Homepage
  - Coding
- Allgemein

## Styling

Um den Überblick über alle verwendeten Elemente und Styles zu behalten, 
sind alle auf [einer Seite](http://localhost:8080/style/) vorhanden.