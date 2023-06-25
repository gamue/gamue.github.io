---
title: About
permalink: /about/
---
<p class="float-left mr-2 w-64">
{% cloudinary "/assets/images/2013-08-17_Rumaenien_mit_Johannes_032.jpg", "Unterwegs in Rumänien", "", "", null, true, true %}
</p>

Hi, ich bin Johannes. Weltenbummler, Hobbyfotograf und Technikfreak.

Auf dieser privaten Homepage möchte ich dir Bilder von meinen Reisen zeigen, sowie über Fotografie, 
Technologie, Gadgets und natürlich meine Abenteuer schreiben.

Folge mir auch gerne auf [Instagram]({{site.accounts.instagram}}), um auf dem Laufenden zu bleiben. 
Denn dort poste ich während meinen Reisen entsprechende Stories, noch bevor ich die Homepage entsprechend aktualisiere.

<div class="clear-both"></div>


## Folgende {{ visitedCountries.length }} Länder habe ich schon bereist:

{% from "macros/visited-countries-map.njk" import visitedCountriesMap %}
{{ visitedCountriesMap (visitedCountries) }}

<div class="text-xs md:text-sm mt-4 flex flex-wrap justify-center">
{% for country in visitedCountries %}<span class="p-1 m-0.5 border border-gray-300 rounded-lg">{% if country.link %}<a href="{{ country.link }}">{{ country.name }}</a>{% else %}{{ country.name }}{% endif %}</span>{% endfor %}
</div>

## Kontakt

Wenn du Fragen zu meinen Reisen oder einem Beitrag hast, 
kontaktiere mich über Social Media (z.B. [Instagram]({{site.accounts.instagram}})).

## Die längere Version

Ich bin in einem beschaulichen Dorf zwischen Karlsruhe und Stuttgart aufgewachsen und hatte schon immer 
ein Faibel für Computer, Technik und Fotografie. Das mit dem Reisen kam erst als ich 2009 meine 
Ausbildung zum Informatikkaufmann beendet hatte und zusammen mit einem Freund nach Irland aufgebrochen bin, 
um das Land mit einem Mietwagen zu erkunden.

Einige Monate später folgte mein erster Solo-Backpacking-Trip nach Israel, bei dem ich eine mir fremde Kultur entdecken, 
viele interessante Menschen kennenlernen und faszinierende Natur oder Bauwerke bewundern durfte. 
Was in mir den Appetit auf mehr geweckt hat. Seitdem habe ich massenhaft Flugmeilen und Stempel im Reisepass gesammelt. 
Wanderte durch etliche Wüsten, bin über den Jordan gegangen, hab den Himalaja bewundert, 
trieb im Toten Meer oder planschte in Islands heißen Quellen. Immer auf der Jagd nach neuen Abenteuern und Erfahrungen.

Auf den Reisen hatte ich natürlich immer meine Kamera im Gepäck, sodass dabei etliche Bilder entstanden sind und 
ich so Freunde und Familie an meinen Erfahrungen und Erlebnissen teilhaben lassen konnte. 
Durch meine Technik- und Internetaffinität kam ich auf die Idee damit eine Homepage zu erstellen, wodurch dann schließlich diese Seite entstanden ist. 

Zu Beginn habe ich noch häufiger Reiseberichte geschrieben, habe das aber irgendwann zeitlich nicht mehr hinbekommen bzw. 
die Muse gehabt diese zu verfassen. Solltet ihr aber Fragen zu einer Tour oder einem Reiseland haben, 
meldet euch einfach bei mir ;). 

Seit der [Umstellung der Seite auf Jekyll]({% post_url collections.posts, "2019-09-01-relaunch" %}) gelingt es mir auch wieder regelmäßiger Updates zu posten 
oder Informationen rund um die Reiserouten und Stationen zu veröffentlichen. 
Abgesehen von Reiseberichten und -tipps schreibe ich auch über Fotografie- und Technikthemen, 
an denen ich gerade arbeite oder die mich beschäftigen. Denn in gewisser Weise ist die Homepage auch eine Experimentier- 
und Lernplattform für mich um neue Technologien oder Programmiersprachen auszuprobieren, deren Ergebnisse ich ebenfalls gerne teile.
