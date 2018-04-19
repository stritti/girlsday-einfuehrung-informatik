[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)](https://travis-ci.org/stritti/girlsday-einfuehrung-informatik)
[![GitHub license](https://img.shields.io/github/license/stritti/girlsday-einfuehrung-informatik.svg)](https://github.com/stritti/girlsday-einfuehrung-informatik/blob/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/stritti/girlsday-einfuehrung-informatik.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fstritti%2Fgirlsday-einfuehrung-informatik)

# Einführung in die Informatik


**Deutsch:** Präsentation in HTML: **"Eine Einführung in die Informatik"**.

## [▶ Präsentation starten](https://stritti.github.io/girlsday-einfuehrung-informatik)


> Diese Präsentation ist komplett in Deutsch gehalten. Sie ist auf Teeanager ab dem 12 Lebensjahr ausgerichtet und soll ihnen den Spaß an der Informatik zeigen. Um die Hürden möglichst niedrig zu halten, ist der Inhalt Deutsch.

 **English:** Presentation in HTML: **"An introduction to computer science"**.

 > This presentation is completely in German. It is aimed at tea managers from the age of 12 and should show them the fun of computer science. To keep the hurdles as low as possible, the content is in German.

# Workshop

Der Inhalt dieser Präsentation ist für einen eintägigen Workshop mit Jugendlichen ab der 5. Klasse gedacht.

Dabei kann sicher nicht in die komplette Tiefe der Programmierung abgetaucht werden. Der Tag soll vielmehr den
Spaß an der Informatik fördern und mit möglichst anschaulichen Mitteln zeigen, dass das gar nicht so
kompliziert ist, wie viele sich das vorstellen.

Diese Präsentation ist Grundlage für den [Girls' Day 2018](https://www.girls-day.de/) bei der [Sybit GmbH](https://www.sybit.de).

# Interessante Links

* BBC micro:bit: http://microbit.org/

  Homepage zum BBC micro:bit (deutsch/englisch)

* MakeCode für micro:bit: https://makecode.microbit.org/

  Browserbasierte Entwicklungsumgebung für den BBC micro:bit (deutsch/engl.)

* Awesome micro:bit: https://github.com/carlosperate/awesome-microbit

  Liste von Interessanten Links zum micro:bit (engl.)

* Code Kingdoms: https://www.microbit.co.uk/app/#create:tomwku

  Alternative Entwicklungsumgebung, die grafisch, jedoch näher am Quellcode ist.

* Einige Infokarten zu speziellen Themen: https://www.maplin.co.uk/microbit

# Entwicklung

Um die Präsentation selbst anzupassen und weiter zu entwicklen, sind folgende Voraussetzungen und Befehle notwendig:

## Voraussetzungen

Installaton von `node.js` und `npm`:

* Installiere [node.js](https://nodejs.org/de/)
* Installiere [npm](https://www.npmjs.com/get-npm)

Danach im Hauptverzeichnis des Projekte folgenden Befehl in der Kommandozeile aufrufen:

* `npm install -g grunt-cli`
* `npm install`


Dadurch werden die notwendigen JavaScript-Tools heruntergeladen, die in der Datei `packages.json` festgelegt sind.

## Entwickeln mit Vorschau

Sind die unter "Voraussetzungen" aufgeführten Befehle einmal ausgeführt, kann nun die Entwicklung mit Live-Aktualisierung im Browser gestartet werden:

* `grunt`

Wird kein Parameter angegeben, wird automatisch ein `watch` und ein `LiveReload` aktiv. Das heißt unter der Web-Adresse (http://localhost:3000) ist immer die aktuelle Vorschau zu sehen. Diese aktualisiert sich bei jeder Änderung automatisch.

## Besondere Features/Erweiterungen

* eigenes jQuery-Plugin zum automatischen Rendern der Quellcode-Blocks als SVGs (`js/jquery.makecode-blocks.js`)
* CSS-Style Klassen
	* `responsive` für Bilder: diese werden dann in maximaler Größe in dem Step angezeigt.
	* `vignette` für Bilder: erzeugt abgedunkelten Rand (Vignette) um ein Bild.
	* `ìmg-title` für Text: erzeugt ein halbtransparentes Overlay über responsiven (vollflächigen) Bildern.
	* `img-source` erzeugt eine Quellenangabe am unteren Rand des Steps.

## Verwendete Bibliotheken

* [jQuery](https://jquery.com/), MIT license
* [impress.js](https://github.com/bartaz/impress.js), MIT License
* [lazyload](https://github.com/tuupola/jquery_lazyload), MIT License
* [EMOJI CSS](https://afeld.github.io/emoji-css/), MIT License

# Pull-Requests sind willkommen

Verbesserungen an der Präsentation sind als Pull-Request herzlich willkommen.

# Danksagung

* Vielen Dank an meine Arbeitgeber [Sybit GmbH](https://www.sybit.de), dass ich als Talent Scout junge Menschen für die Informatik begeistern darf!
* Herzlichen Dank an die BBC, die mit dem [BBC micro:bit](http://microbit.org/) eine großartige Plattform für das Vermitteln der Programmierung initiiert hat.
* Dankeschön an Microsoft, die mit [MakeCode für micro:bit](https://makecode.microbit.org/) eine großartige Online IDE auf Blocks-basis zur Verfügung stellt.
  * Klasse, dass ich da auch bei der [Übersetzung ins Deutsche](https://makecode.com/translate) mithelfen konnte!
  * Großartig ist auch der Support des Teams bei der Erstellung dieses Projektes (z.B. [hier](https://github.com/Microsoft/pxt-microbit/issues/623))
* [impress.js](http://github.com/bartaz/impress.js) für die großartige Grundlage zur Erstellung von Präsentationen.
* Herzlichen Dank all denen, die so schöne Fotos zur freien Verfügung bereitstellen (z.B. auf [Pixabay](https://pixabay.com) )!

# Lizenz

[MIT License](LICENSE)

[⬆ nach oben](#einführung-in-die-informatik)
