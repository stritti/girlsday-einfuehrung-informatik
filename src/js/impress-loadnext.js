/**
 * Module to load next impress file if attribute "data-next-impress" is defined.
 * e.g.: <section id="Last" class="step"  data-next-impress="develop.html">...</section>
 */

/* global document, navigator */
(function (document) {
	"use strict";

	// load next page if attribute is set
	document.addEventListener("impress:stepenter", function (event) {

		var nextImpress = event.srcElement.dataset.nextImpress;
		console.log(event);
		if ( nextImpress !== undefined ) {
			console.log("Load next impress file: " + nextImpress);
			document.addEventListener( "impress:stepleave", function() {
				window.location = nextImpress;
		  }, false );
		}
	});
})(document);
