/**
 * Module to load next impress file if attribute "data-next-impress" is defined.
 * e.g.: <section id="Last" class="step"  data-next-impress="develop.html">...</section>
 */

/* global document, navigator */
(function (document) {
	"use strict";

	// Add prev and next classes to the siblings of the newly entered active step element
	// Remove prev and next classes from their current step elements
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
