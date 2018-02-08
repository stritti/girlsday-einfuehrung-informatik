

var Presentation = {};


Presentation.blocks = (function () {
 
    /* message signatures

    export interface RenderBlocksRequestMessage extends SimulatorMessage {
        type: "renderblocks",
        id: string;
        code: string;
        options?: {
            package?: string;
            snippetMode?: boolean;
        }
    }

    export interface RenderBlocksResponseMessage extends SimulatorMessage {
        source: "makecode",
        type: "renderblocks",
        id: string;
        svg?: string;
        width?: number;
        height?: number;
    }*/

    $(function () {
        $( document ).ready(function() {

            // listen for messages
            window.addEventListener("message", function (ev) {

                var msg = ev.data;
                if (msg.source != "makecode") return;

                switch (msg.type) {
                    case "renderready":
                        // start rendering snippets!
                        renderSnippets();
                        break;
                    case "renderblocks":
                        var svg = msg.svg; // this is an string containing SVG
                        var id = msg.id; // this is the id you sent
                        // replace text with svg
                        var img = document.createElement("img");
                        img.src = msg.uri;
                        img.width = msg.width;
                        img.height = msg.height;
                        var code = document.getElementById(id);
                        code.parentElement.insertBefore(img, code);
                        code.parentElement.removeChild(code);
                        break;
                }
            }, false);  
                      
            // load the renderer
            makeCodeInjectRenderer();
        });

    });

    function makeCodeRenderPre($block) {
        var 
            f = document.getElementById("makecoderenderer"),
            isSnippet = ($block.attr("data-snippet") === null) ? "true" : $block.attr("data-snippet");

        f.contentWindow.postMessage({
            type: "renderblocks",
            id: $block.attr('id'),
            code: $block.text(),
            options: {
                snippetMode: (isSnippet == "true")
            }
        }, "https://makecode.microbit.org/");
    }

    function renderSnippets() {
        var $blocks = $(".js-blocks");
        Array.prototype.forEach.call($blocks, function(block) {
            makeCodeRenderPre($(block));
        });
    }

    function makeCodeInjectRenderer() {
        var f = document.createElement("iframe");
        f.id = "makecoderenderer";
        f.style.position = "absolute";
        f.style.left = 0;
        f.style.bottom = 0;
        f.style.width = "1px";
        f.style.height = "1px";            
        f.src = "https://makecode.microbit.org/--docs?render=1";
        document.body.appendChild(f);
    }

})();
