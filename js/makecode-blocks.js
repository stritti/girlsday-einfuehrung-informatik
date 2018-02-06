


function renderSnippets() {
   var codeElems = $('code')
   for (var i = 0; i < codeElems.length; i++) {
       codeElems[i].className = codeElems[i].className.replace('-ignore', '')
   }

   var downloadScreenshots = /screenshots=1/i.test(window.location.href);
   var path = window.location.href.split('/').pop().split(/[?#]/)[0];
   ksRunnerReady(function () {
       pxt.runner.renderAsync({
           snippetClass: 'lang-blocks',
           signatureClass: 'lang-sig',
           blocksClass: 'lang-block',
           shuffleClass: 'lang-shuffle',
           simulatorClass: 'lang-sim',
           linksClass: 'lang-cards',
           namespacesClass: 'lang-namespaces',
           codeCardClass: 'lang-codecard',
           packageClass: 'lang-package',
           projectClass: 'lang-project',
           snippetReplaceParent: true,
           simulator: true,
           hex: true,
           hexName: path,
           downloadScreenshots: downloadScreenshots
       }).done();
   });
}

$(document).ready(function () {   
   renderSnippets();

});