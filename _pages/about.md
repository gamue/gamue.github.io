---
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
      link: /belize/
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
      link: /georgien/
    - name: Griechenland
      code: GR
      link: /photography/kreta-2016/
    - name: Holland
      code: NL
      link: /photography/benelux-2010/
    - name: Indien
      code: IN
      link: /indien/
    - name: Irland
      code: IE
      link: /irland/
    - name: Island
      code: IS
      link: /island/
    - name: Israel
      code: IL
      link: /israel/
    - name: Italien
      code: IT
      link: /photography/rom-2016/
    - name: Japan
      code: JP
      link: /japan/
    - name: Jordanien
      code: JO
      link: /jordanien/
    - name: Kosovo
      code: XK
      link: /photography/suedosteuropa-2013/
    - name: Laos
      code: LA
      link: /laos/
    - name: Lettland
      code: LV
    - name: Luxemburg
      code: LU
      link: /photography/benelux-2010/
    - name: Marokko
      code: MA
      link: /marokko/
    - name: Mazedonien
      code: MK
    - name: Nepal
      code: NP
      link: /nepal/
    - name: Norwegen
      code: "NO"
      link: /photography/suedosteuropa-2013/
    - name: Palistina
      code: PS
    - name: Polen
      code: PL
    - name: Rumänien
      code: RO
      link: /rumaenien/
    - name: Schottland
      link: /schottland/
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
      link: /sri-lanka/
    - name: Thailand
      code: TH
      link: /thailand/
    - name: Türkei
      code: TR
      link: /photography/tuerkei-2014/
    - name: Vatikan
      link: /photography/rom-2016/
    - name: Vereinigte Arabische Emirate
      code: AE
      link: /photography/abu-dhabi-2014/
    - name: Vietnam
      code: VN
      link: /vietnam/
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