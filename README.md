# gamue.github.io / gamue.de

Source code of my [private homepage](https://gamue.de).

- Build with Static Site Generator [Eleventy](https://www.11ty.dev/)
- CSS created with [TailwindCSS](https://tailwindcss.com/) and the [Typography Plugin](https://github.com/tailwindlabs/tailwindcss-typography)
- Icons from [IcoMoon Free bundle](https://icomoon.io/app/#/select)
- Using [SimpleLightbox](https://github.com/dbrekalo/simpleLightbox) for gallery overlays
- Using [Masonry Library](https://masonry.desandro.com/) for (optional) gallery styling

## Local development

Use the Node.js 24 release line selected in `.nvmrc`. The project requires Node.js 24 or newer. With [nvm](https://github.com/nvm-sh/nvm) installed:

```sh
nvm use
npm ci
npm start
```

If that Node.js version is not installed yet, run `nvm install` first. Alternatively, install the version from `.nvmrc` with your preferred Node.js manager.

Open <http://localhost:8080>. `npm start` runs Eleventy and the Tailwind CSS watcher together; stop both with Ctrl+C. Source files are in `src/`, and generated files are written to `_site/`.

Tailwind scans the HTML generated in `_site/` for utility classes. Eleventy must generate those pages before Tailwind can include their classes.

## Build and checks

Create the production site in `_site/`:

```sh
npm run build
```

On Windows Command Prompt, use `npm run build:win`.

Run the same lint and formatting checks as CI:

```sh
npm run lint
npm run prettier
```

Run the HTML minification regression tests:

```sh
npm test
```

After editing source files, apply formatting and check the result:

```sh
npm run prettier:fix
```

Formatting covers JavaScript, JSON, YAML, Markdown, HTML, and project CSS. Generated output, vendored libraries, and Nunjucks templates are excluded. Nunjucks formatting requires a compatible formatter before it can be enabled.

## Dependency overrides

Typography 0.5.20 pins `postcss-selector-parser` to the vulnerable version 6.0.10. A typography-scoped npm override uses the patched 6.1.6 release. Remove the override when upgrading to a typography release that includes a patched parser. See [GHSA-rj75-hqrm-r3gf](https://github.com/advisories/GHSA-rj75-hqrm-r3gf).

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
