---
layout: single
title: About
permalink: /about/
header:
    og_image: assets/images/j_logo.jpg
sidebar:
    - image: /assets/photography/2013_08_suedosteuropa/2013-08-17_Rumaenien_mit_Johannes_032-678x1024.jpg
visitedCountries:
    - name: Ägypten
      code: EG
    - name: Belize
      code: BZ
    - name: Belgien
      code: BE
      link: /photography/benelux-2010/
    - name: Dänemark
      code: DK
    - name: Deutschland
      code: DE
    - name: England
      code: GB
    - name: Finnland
      code: FI
    - name: Frankreich
      code: FR
    - name: Georgien
      code: GE
    - name: Griechenland
      code: GR
    - name: Holland
      code: NL
      link: /photography/benelux-2010/
    - name: Indien
      code: IN
      link: /photography/indien-2011/
    - name: Irland
      code: IE
      link: /photography/irland-2009/
    - name: Island
      code: IS
      link: /photography/island-2012/
    - name: Israel
      code: IL
      link: /photography/israel-2009/
    - name: Italien
      code: IT
    - name: Japan
      code: JP
    - name: Jordanien
      code: JO
    - name: Kosovo
      code: XK
      link: /photography/suedosteuropa-2013/
    - name: Laos
      code: LA
      link: /photography/laos-2014/
    - name: Lettland
      code: LV
    - name: Luxemburg
      code: LU
      link: /photography/benelux-2010/
    - name: Marokko
      code: MA
      link: /photography/marokko-2011/
    - name: Mazedonien
      code: MK
    - name: Nepal
      code: NP
      link: /photography/nepal-2011/
    - name: Norwegen
      code: "NO"
      link: /photography/suedosteuropa-2013/
    - name: Palistina
      code: PS
    - name: Polen
      code: PL
    - name: Rumänien
      code: RO
      link: /photography/suedosteuropa-2013/
    - name: Schottland
      link: /photography/schottland-2013/
    - name: Schweden
      code: SE
      link: /photography/schweden-2010/
    - name: Schweiz
      code: CH
    - name: Serbien
      code: RS
      link: /photography/suedosteuropa-2013/
    - name: Spanien
      code: ES
    - name: Sri Lanka
      code: LK
    - name: Thailand
      code: TH
      link: /photography/thailand-2014/
    - name: Türkei
      code: TR
      link: /photography/tuerkei-2014/
    - name: Vatikan
    - name: Vereinigte Arabische Emirate
      code: AE
      link: /photography/abu-dhabi-2014/
    - name: Vietnam
      code: VN
    - name: Zypern 
      code: CY
      link: /photography/zypern-2015/
---

Hey,

ich wanderte schon durch Wüsten, bin über den Jordan gegangen, hab den Himalaja bewundert, trieb im Toten Meer oder planschte in heißen Quellen. 
Immer auf der Jagd nach neuen Abenteuern und Erfahrungen.

Angefangen haben meine Reisen mit einer Rucksacktour durch Israel. Dort habe ich eine mir bis dahin unbekannte Kultur entdeckt 
und durfte viele interessante Menschen kennen lernen, was in mir den Appetit auf mehr geweckt hatte. 
Seitdem sammle ich massenhaft Flugmeilen und Stempel im Reisepass 😉

Da auf den Reisen viele Bilder entstanden sind, habe ich mir eines Tages das Ziel gesetzt eine Homepage dafür zu erstellen. 
Damit auch die Erlebnisse und Geschichten festgehalten werden oder um Tipps zu geben, wurde daraus dann letztendlich ein Blog. 
Wobei ich zugeben muss, dass ich mit den Texten immer sehr weit hinten dran bin.

Über konstruktive Kritik, Anregungen und Verbesserungsvorschläge freu ich mich immer. 
Die meisten die hier landen werden meine Kontaktdaten zwar haben, ansonsten benutzt einfach das [Kontaktformular](/contact/).

Danke für deinen Besuch & bis bald.

Das nächste Abenteuer ruft schon!

Johannes



## Folgende {{ page.visitedCountries.size }} Länder habe ich schon bereist:

{% include visited-countries.html countries=page.visitedCountries %}

<ul class="countries">
{% for country in page.visitedCountries %}
    <li>
    {% if country.link %}
    <a href="{{ country.link }}">{{ country.name }}</a>
    {% else %}
    {{ country.name }}
    {% endif %}
    </li>
{% endfor %}
</ul>