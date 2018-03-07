[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)](https://travis-ci.org/stritti/girlsday-einfuehrung-informatik)
[![GitHub license](https://img.shields.io/github/license/stritti/girlsday-einfuehrung-informatik.svg)](https://github.com/stritti/girlsday-einfuehrung-informatik/blob/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/stritti/girlsday-einfuehrung-informatik.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fstritti%2Fgirlsday-einfuehrung-informatik)

# Einführung in die Informatik

Präsentation in HTML: "Eine Einführung in die Informatik".

[Präsentation starten!](https://stritti.github.io/girlsday-einfuehrung-informatik)



# Workshop

Der Inhalt dieser Präsentation ist für einen eintägigen Workshop mit Jugendlichen ab der 5. Klasse gedacht.

Dabei kann sicher nicht in die komplette Tiefe der Programmierung abgetaucht werden. Der Tag soll vielmehr den
Spaß an der Informatik fördern und mit möglichst anschaulichen mitteln zeigen, dass das gar nciht so
kompliziert ist, wie viele sich das vorstellen.

Diese Präsentation ist Grundlage für den [Girls' Day 2018](https://www.girls-day.de/) bei der [Sybit GmbH](https://www.sybit.de).

# Entwicklung

Um die Präsentation selbst anzupassen und weiter zu entwicklen, sind folgende Voraussetzungen und Befehle notwendig:

## Voraussetzungen

Installatopn von node.js und npm:

* Installiere [node.js](https://nodejs.org/de/)
* Installiere [npm](https://www.npmjs.com/get-npm)

Danach im Hauptverzeichnis des Projekte folgenden Befehl in der Kommandozeile aufrufen:

* `npm install -g grunt-cli`
* `npm install`


Dadurch werden die notwendigen JavaScript-Tools heruntergeladen.

## Entwickeln mit Vorschau

Sind die unter "Voraussetzungen" aufgeführten Befehle einmal ausgeführt, kann nun die Entwicklung mit Live-Aktualisierung im Browser gestartet werden:

* `grunt`

Wird kein Parameter angegeben, wird automatisch ein "watch" und ein "LiveReload" aktiv. Das heißt unter der Web-Adresse (http://localhost:3000) ist immer die Aktuelle Vorschau zu sehen. Diese aktualisiert sich bei jeder Änderung automatisch.

## Besondere Features/Erweiterungen

* eigenes jQuery-Plugin zum automatischen Rendern der Quellcode-Blocks als SVGs (`js/jquery.makecode-blocks.js`)
* CSS-Style Klassen
	* `responsive` für Bilder: diese werden dann in maximaler Größe in dem Step angezeigt.
	* `vignette` für Bilder: erzeigt abgedunkelten Rand (Vignette) um ein Bild.
	* `ìmg-title` für Text: Erzeugt ein halbtransparentes Overlay über responsiven Bildern.
	* `img-source` erzeugt eine Quellenangabe am unteren Rand des Steps.

## Verwendete Bibliotheken

* [jQuery](https://jquery.com/),
* [impress.js](https://github.com/bartaz/impress.js), MIT License
* [lazyload](https://github.com/tuupola/jquery_lazyload), MIT License
* [EMOJI CSS](https://afeld.github.io/emoji-css/), MIT License

# Pull-Requests sind willkommen

Verbesserungen an der Präsentation sind als Pull-Request herzlich willkommen.

# Danksagung

* Vielen Dank an meine Arbeitgeber [Sybit GmbH](https://www.sybit.de), dass ich als Talent Scout junge Menschen für die Informatik begeistern darf!
* Herzlichen Dank an die BBC, die mit dem [BBC micro:bit](http://microbit.org/) eine großartige Plattform für das Vermitteln der Programmierung initiiert hat.
* Dankeschön an Microsoft, welches mit [MakeCode für micro:bit](https://makecode.microbit.org/) eine großartige Online IDE auf Blocks-basis zur Verfügung stellt.
  * Klasse, dass ich da auch bei der [Übersetzung ins Deutsche](https://makecode.com/translate) mithelfen konnte!
  * Großartig ist auch der Support des Teams bei der Erstellung dieses Projektes (z.B. [hier](https://github.com/Microsoft/pxt-microbit/issues/623))
* [impress.js](http://github.com/bartaz/impress.js) für die großartige Grundlage zur Erstellung von Präsentationen.
* Herzlichen Dank all denen, die so schöne Fotos zur freien Ferfüung bereitstellen!

[⬆ nach oben](#einführung-in-die-informatik)
