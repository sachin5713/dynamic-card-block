/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"dcb/card","title":"Dynamic Card","category":"widgets","icon":"id","description":"A customizable card with title, image, description and button (JS-only).","supports":{"html":false},"attributes":{"title":{"type":"string","source":"html","selector":"h3"},"description":{"type":"string","source":"html","selector":"p"},"imageUrl":{"type":"string","default":""},"imageMaxWidth":{"type":"string","default":"100%"},"buttonUrl":{"type":"string","default":""},"buttonText":{"type":"string","default":"Learn More"},"backgroundColor":{"type":"string","default":"#ffffff"},"titleColor":{"type":"string","default":"#111111"},"descriptionColor":{"type":"string","default":"#444444"},"buttonBgColor":{"type":"string","default":"#111111"},"buttonTextColor":{"type":"string","default":"#ffffff"},"buttonHoverBgColor":{"type":"string","default":"#222222"},"padding":{"type":"string","default":"20px"},"borderWidth":{"type":"string","default":"1px"},"borderRadius":{"type":"string","default":"8px"},"borderColor":{"type":"string","default":"#e6e6e6"},"titleFontSize":{"type":"string","default":"20px"},"titleFontWeight":{"type":"string","default":"600"},"titleLineHeight":{"type":"string","default":"1.2"},"descriptionFontSize":{"type":"string","default":"14px"},"descriptionFontWeight":{"type":"string","default":"400"},"descriptionLineHeight":{"type":"string","default":"1.6"},"buttonPadding":{"type":"string","default":"10px 18px"},"buttonRadius":{"type":"string","default":"6px"}},"editorScript":"file:./index.js","editorStyle":"file:./editor.css","style":"file:./style.css"}');

/***/ }),

/***/ "./src/editor.css":
/*!************************!*\
  !*** ./src/editor.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.css */ "./src/editor.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






/**
 * Small helper: safe fallback for inline style values (avoid `undefined`).
 */

const safe = (val, fallback = '') => typeof val !== 'undefined' ? val : fallback;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      title,
      description,
      imageUrl,
      imageMaxWidth,
      buttonUrl,
      buttonText,
      backgroundColor,
      titleColor,
      descriptionColor,
      buttonBgColor,
      buttonTextColor,
      buttonHoverBgColor,
      padding,
      borderWidth,
      borderRadius,
      borderColor,
      titleFontSize,
      titleFontWeight,
      titleLineHeight,
      descriptionFontSize,
      descriptionFontWeight,
      descriptionLineHeight,
      buttonPadding,
      buttonRadius
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Content",
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button URL",
            value: safe(buttonUrl),
            placeholder: "https://example.com",
            onChange: val => setAttributes({
              buttonUrl: val
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button Text",
            value: safe(buttonText),
            onChange: val => setAttributes({
              buttonText: val
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Design \u2014 Spacing & Border",
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Card Padding (e.g. 20px or 1rem)",
            value: safe(padding),
            onChange: val => setAttributes({
              padding: val
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Border Width (e.g. 1px)",
            value: safe(borderWidth),
            onChange: val => setAttributes({
              borderWidth: val
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Border Radius (e.g. 8px)",
            value: safe(borderRadius),
            onChange: val => setAttributes({
              borderRadius: val
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Border Color (hex)",
            value: safe(borderColor),
            onChange: val => setAttributes({
              borderColor: val
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Image",
          initialOpen: false,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Image Max Width (e.g. 100% or 300px)",
            value: safe(imageMaxWidth),
            onChange: val => setAttributes({
              imageMaxWidth: val
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Typography \u2014 Title",
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Font Size (e.g. 20px)",
            value: safe(titleFontSize),
            onChange: val => setAttributes({
              titleFontSize: val
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: "Font Weight",
            value: safe(titleFontWeight),
            options: [{
              label: '300',
              value: '300'
            }, {
              label: '400',
              value: '400'
            }, {
              label: '500',
              value: '500'
            }, {
              label: '600',
              value: '600'
            }, {
              label: '700',
              value: '700'
            }, {
              label: '800',
              value: '800'
            }],
            onChange: val => setAttributes({
              titleFontWeight: val
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Line Height (e.g. 1.2)",
            value: safe(titleLineHeight),
            onChange: val => setAttributes({
              titleLineHeight: val
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Typography \u2014 Description",
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Font Size (e.g. 14px)",
            value: safe(descriptionFontSize),
            onChange: val => setAttributes({
              descriptionFontSize: val
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: "Font Weight",
            value: safe(descriptionFontWeight),
            options: [{
              label: '300',
              value: '300'
            }, {
              label: '400',
              value: '400'
            }, {
              label: '500',
              value: '500'
            }, {
              label: '600',
              value: '600'
            }],
            onChange: val => setAttributes({
              descriptionFontWeight: val
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Line Height (e.g. 1.6)",
            value: safe(descriptionLineHeight),
            onChange: val => setAttributes({
              descriptionLineHeight: val
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Colors",
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
              children: "Card Background"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: safe(backgroundColor),
            onChangeComplete: val => setAttributes({
              backgroundColor: val.hex
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            style: {
              marginTop: 12
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
              children: "Title"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: safe(titleColor),
            onChangeComplete: val => setAttributes({
              titleColor: val.hex
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            style: {
              marginTop: 12
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
              children: "Description"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: safe(descriptionColor),
            onChangeComplete: val => setAttributes({
              descriptionColor: val.hex
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            style: {
              marginTop: 12
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
              children: "Button Background"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: safe(buttonBgColor),
            onChangeComplete: val => setAttributes({
              buttonBgColor: val.hex
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            style: {
              marginTop: 12
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
              children: "Button Text Color"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: safe(buttonTextColor),
            onChangeComplete: val => setAttributes({
              buttonTextColor: val.hex
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            style: {
              marginTop: 12
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
              children: "Button Hover Color"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: safe(buttonHoverBgColor),
            onChangeComplete: val => setAttributes({
              buttonHoverBgColor: val.hex
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Button \u2014 Size & Radius",
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button Padding (e.g. 10px 18px)",
            value: safe(buttonPadding),
            onChange: val => setAttributes({
              buttonPadding: val
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button Radius (e.g. 6px)",
            value: safe(buttonRadius),
            onChange: val => setAttributes({
              buttonRadius: val
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "dynamic-card-block",
        style: {
          backgroundColor: safe(backgroundColor),
          padding: safe(padding),
          borderStyle: 'solid',
          borderWidth: safe(borderWidth),
          borderRadius: safe(borderRadius),
          borderColor: safe(borderColor)
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "dcb-image-wrap",
          style: {
            maxWidth: safe(imageMaxWidth)
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
            allowedTypes: ['image'],
            onSelect: media => setAttributes({
              imageUrl: media.url
            }),
            value: imageUrl,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              onClick: open,
              className: "image-upload-btn",
              children: imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                src: imageUrl,
                alt: ""
              }) : 'Upload Image'
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
          tagName: "h3",
          className: "dcb-title",
          value: title,
          onChange: val => setAttributes({
            title: val
          }),
          placeholder: "Card Title",
          style: {
            color: safe(titleColor),
            fontSize: safe(titleFontSize),
            fontWeight: safe(titleFontWeight),
            lineHeight: safe(titleLineHeight)
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
          tagName: "p",
          className: "dcb-desc",
          value: description,
          onChange: val => setAttributes({
            description: val
          }),
          placeholder: "Card description...",
          style: {
            color: safe(descriptionColor),
            fontSize: safe(descriptionFontSize),
            fontWeight: safe(descriptionFontWeight),
            lineHeight: safe(descriptionLineHeight)
          }
        }), buttonUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "dcb-button-wrap",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
            className: "dcb-button",
            href: buttonUrl,
            style: {
              backgroundColor: safe(buttonBgColor),
              color: safe(buttonTextColor),
              padding: safe(buttonPadding),
              borderRadius: safe(buttonRadius)
            },
            children: buttonText
          })
        })]
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      title,
      description,
      imageUrl,
      imageMaxWidth,
      buttonUrl,
      buttonText,
      backgroundColor,
      titleColor,
      descriptionColor,
      buttonBgColor,
      buttonTextColor,
      buttonHoverBgColor,
      padding,
      borderWidth,
      borderRadius,
      borderColor,
      titleFontSize,
      titleFontWeight,
      titleLineHeight,
      descriptionFontSize,
      descriptionFontWeight,
      descriptionLineHeight,
      buttonPadding,
      buttonRadius
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "dynamic-card-block",
      style: {
        backgroundColor: backgroundColor,
        padding: padding,
        borderStyle: 'solid',
        borderWidth: borderWidth,
        borderRadius: borderRadius,
        borderColor: borderColor,
        // CSS custom property for hover color
        '--dcb-button-hover': buttonHoverBgColor || buttonBgColor
      },
      children: [imageUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "dcb-image-wrap",
        style: {
          maxWidth: imageMaxWidth
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          src: imageUrl,
          alt: ""
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
        className: "dcb-title",
        style: {
          color: titleColor,
          fontSize: titleFontSize,
          fontWeight: titleFontWeight,
          lineHeight: titleLineHeight
        },
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "dcb-desc",
        style: {
          color: descriptionColor,
          fontSize: descriptionFontSize,
          fontWeight: descriptionFontWeight,
          lineHeight: descriptionLineHeight
        },
        children: description
      }), buttonUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "dcb-button-wrap",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
          className: "dcb-button",
          href: buttonUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          style: {
            backgroundColor: buttonBgColor,
            color: buttonTextColor,
            padding: buttonPadding,
            borderRadius: buttonRadius
          },
          children: buttonText
        })
      })]
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map