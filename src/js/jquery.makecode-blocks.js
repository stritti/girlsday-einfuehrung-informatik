/*!
 * jQuery MakerCode Blocks
 *
 * Rendering Block elemenst by given scripts.
 * version: 1.0.0
 *
 */
/* global jQuery, define */
;(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = function (root, jQuery) {
      if (typeof jQuery === 'undefined') {
        // require('jQuery') returns a factory that requires window to build a jQuery instance, we normalize how we use modules
        // that require this pattern but the window provided is a noop if it's defined (how jquery works)
        if (typeof window !== 'undefined') {
          jQuery = require('jquery')
        } else {
          jQuery = require('jquery')(root)
        }
      }
      factory(jQuery)
      return jQuery
    }
  } else {
    // Browser globals
    factory(jQuery)
  }
})(function ($) {
  /* eslint-enable */
  'use strict'

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
    } */

  $.fn.blocks = function () {
    // listen for messages
    window.addEventListener(
      'message',
      function (ev) {
        const msg = ev.data
        if (msg.source !== 'makecode') return

        switch (msg.type) {
          case 'renderready': {
            // start rendering snippets!
            $.fn.renderSnippets()
            break
          }
          case 'renderblocks': {
            // var svg = msg.svg // this is an string containing SVG
            const id = msg.id // this is the id you sent
            // replace text with svg
            const img = document.createElement('img')
            img.src = msg.uri
            img.width = msg.width
            img.height = msg.height
            const code = document.getElementById(id)
            code.parentElement.insertBefore(img, code)
            code.parentElement.removeChild(code)
            break
          }
        }
      },
      false
    )

    // load the renderer
    $.fn.makeCodeInjectRenderer()
  }

  $.fn.makeCodeRenderPre = function ($block) {
    const f = document.getElementById('makecoderenderer')

    const isSnippet = $block.attr('data-snippet') === null ? 'true' : $block.attr('data-snippet')

    f.contentWindow.postMessage(
      {
        type: 'renderblocks',
        id: $block.attr('id'),
        code: $block.text(),
        options: {
          snippetMode: isSnippet === 'true'
        }
      },
      'https://makecode.microbit.org/'
    )
  }

  $.fn.renderSnippets = function () {
    const $blocks = $('.js-blocks')
    Array.prototype.forEach.call($blocks, function (block) {
      $.fn.makeCodeRenderPre($(block))
    })
  }

  $.fn.makeCodeInjectRenderer = function () {
    const f = document.createElement('iframe')
    f.id = 'makecoderenderer'
    f.style.position = 'absolute'
    f.style.left = 0
    f.style.bottom = 0
    f.style.width = '1px'
    f.style.height = '1px'
    f.src = 'https://makecode.microbit.org/--docs?render=1'
    document.body.appendChild(f)
  }
})
