
var Presentation = {};

Presentation.utils = (function () {

   function isSameElement ($this, $that) {
       return $($this).is($that);
   }

   return {
       isSameElement: isSameElement
   }
})();