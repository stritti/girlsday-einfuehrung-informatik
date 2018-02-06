//use strict
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
            // load the renderer
            makeCodeInjectRenderer();
        });

    });

    function makeCodeRenderPre(pre) {
        var 
            f = document.getElementById("makecoderenderer"),
            isSnippet = (pre.getAttribute("data-snippet") === null) ? "true" : pre.getAttribute("data-snippet");

        f.contentWindow.postMessage({
            type: "renderblocks",
            id: pre.id,
            code: pre.innerText,
            options: {
                snippetMode: (isSnippet == "true")
            }
        }, "https://makecode.microbit.org/");
    }

    function renderSnippets() {
        let pres = $(".js-blocks");
        Array.prototype.forEach.call(pres, function(pre) {
            makeCodeRenderPre(pre);
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
})();
