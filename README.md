# gamue.github.io / gamue.de

Source code of my [private homepage](https://gamue.de).

- Build with Static Site Generator [Jekyll](https://jekyllrb.com/) 
- Design based on theme [minimal-mistake](https://github.com/mmistakes/minimal-mistakes)
- CSS created with [TailwindCSS](https://tailwindcss.com/)
- Icons from [IcoMoon Free bundle](https://icomoon.io/app/#/select)
- ~Search based on [Lunr](https://lunrjs.com/)~~ Currently removed due redesign
- Table of Content by [jekyll-toc](ttps://github.com/allejo/jekyll-toc)


## Kategorien / Tags

Artikel können in Jekyll über Kategorien und Tags organisiert werden. 
Da es dabei leider keine Hierarchieebenen dabei gibt, nutze ich als Definition Kategorien als Hauptebene und Tags als Unterkategorien.

Die Seite ist aktuell so strukturiert:

- Reisen
  - Reisebericht
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