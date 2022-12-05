css-color
=========

Class for manipulating color values for css, svg, canvas/image, etc..

version **1.0.0**

**Color Formats: HEX, RGB(A), HSL(A), HWB, HSV, CMYK**

**example:**

```javascript

let rgb = new Color([128, 255, 245, 1]).toRGB(asString, condenced, noTransparency);
let hsl = new Color([128, 255, 245, 1]).toHSL(asString, condenced, noTransparency);
let hwb = new Color([128, 255, 245, 1]).toHWB(asString, condenced, noTransparency);
let cmyk = new Color([128, 255, 245, 1]).toCMYK(asString, condenced, withTransparency);

// or using a constructor factory pattern
let rgb = Color([128, 255, 245, 1]).toRGB(asString, condenced, noTransparency);
let hsl = Color([128, 255, 245, 1]).toHSL(asString, condenced, noTransparency);
let hwb = Color([128, 255, 245, 1]).toHWB(asString, condenced, noTransparency);
let cmyk = Color([128, 255, 245, 1]).toCMYK(asString, condenced, withTransparency);

let color = new Color().fromRGB([255, 255, 255, 0.3]);
// or via static method
let color = Color.fromRGB([255, 255, 255]);

let color = new Color().fromHSL([120, 50, 100, 0.7]);
// or via static method
let color = Color.fromHSL([120, 50, 100]);

let color = new Color().fromHSV([120, 50, 100, 0.7]);
// or via static method
let color = CSS.Color.fromHSV([120, 50, 100]);

let color = new Color().fromHWB([120, 50, 100, 0.7]);
// or via static method
let color = Color.fromHWB([120, 50, 100]);

let color = new Color().fromHEX([0xff, 0xaa, 0x00, 0xfa]);
// or via static method
let color = Color.fromHEX([0xff, 0xaa, 0x00]);

let color = new Color().fromPixel(0xff3d1208);
// or via static method
let color = Color.fromPixel(0xff3d1208);

let color = new Color().fromKeyword('orange');
// or via static method
let color = Color.fromKeyword('orange');

let color = new Color().fromCMYK([1, 0.3, 0.5, 1]);
// or via static method
let color = Color.fromCMYK([1, 0.3, 0.5, 1]);

// also
let color = Color.fromString('rgba(255, 100%, 100%, 0.7)');
let color = Color.fromString('hsla(120, 50%, 100%, 0.5)');
let color = Color.fromString('hwb(120 50% 100% / 0.5)');
let color = Color.fromString('#fff');
let color = Color.fromString('slategrey');

// output
console.log(color.toHSL(asString, condenced, noTransparency)); // hsla(..)
console.log(color.toHWB(asString, condenced, noTransparency)); // hwb(..)
console.log(color.toHEX(asString, condenced, withTransparency)); // #..
console.log(color.toRGB(asString, condenced, noTransparency)); // rgb(255, 255, 255)
console.log(color.toHSL(asString, condenced, noTransparency)); // hsl(..)
console.log(color.toHWB(asString, condenced, noTransparency)); // hwb(..)
console.log(color.toCMYK(asString, condenced, withTransparency)); // CMYK: [..]
console.log(color.toPixel(withTransparency)); // 0x...
console.log(color.toKeyword(asString, condenced, withTransparency)); // only if color was set from keyword

// also
console.log(color.toString('hsla', condenced));
console.log(color.toString('hsl', condenced));
console.log(color.toString('hwb', condenced));
console.log(color.toString('rgb', condenced));
console.log(color.toString('rgba', condenced));
console.log(color.toString('keyword', condenced)); // only if color was set from keyword
console.log(color.toString('hex', condenced));
console.log(color.toString('hexie', condenced));  // with transparency added

// etc ..

// also
console.log(color.isTransparent());  // whether color has opacity < 1
console.log(color.isKeyword());  // whether color was set from a keyword


// also
color.colorStop('0%'); // set an associated color stop to this color
console.log(color.toColorStop(compatible));  // rgba(..) 0%

```

**see also:**

* [ModelView](https://github.com/foo123/modelview.js) a simple, fast, powerful and flexible MVVM framework for JavaScript
* [Contemplate](https://github.com/foo123/Contemplate) a fast and versatile isomorphic template engine for PHP, JavaScript, Python
* [HtmlWidget](https://github.com/foo123/HtmlWidget) html widgets, made as simple as possible, both client and server, both desktop and mobile, can be used as (template) plugins and/or standalone for PHP, JavaScript, Python (can be used as [plugins for Contemplate](https://github.com/foo123/Contemplate/blob/master/src/js/plugins/plugins.txt))
* [Paginator](https://github.com/foo123/Paginator)  simple and flexible pagination controls generator for PHP, JavaScript, Python
* [ColorPicker](https://github.com/foo123/ColorPicker) a fully-featured and versatile color picker widget
* [Pikadaytime](https://github.com/foo123/Pikadaytime) a refreshing JavaScript Datetimepicker that is ightweight, with no dependencies
* [Timer](https://github.com/foo123/Timer) count down/count up JavaScript widget
* [InfoPopup](https://github.com/foo123/InfoPopup) a simple JavaScript class to show info popups easily for various items and events (Desktop and Mobile)
* [Popr2](https://github.com/foo123/Popr2) a small and simple popup menu library
* [area-select.js](https://github.com/foo123/area-select.js) a simple JavaScript class to select rectangular regions in DOM elements (image, canvas, video, etc..)
* [area-sortable.js](https://github.com/foo123/area-sortable.js) simple and light-weight JavaScript class for handling smooth drag-and-drop sortable items of an area (Desktop and Mobile)
* [css-color](https://github.com/foo123/css-color) simple class for manipulating color values and color formats for css, svg, canvas/image
* [jquery-plugins](https://github.com/foo123/jquery-plugins) a collection of custom jQuery plugins
* [jquery-ui-widgets](https://github.com/foo123/jquery-ui-widgets) a collection of custom, simple, useful jQueryUI Widgets
* [touchTouch](https://github.com/foo123/touchTouch) a variation of touchTouch jQuery Optimized Mobile Gallery in pure vanilla JavaScript
* [Imagik](https://github.com/foo123/Imagik) fully-featured, fully-customisable and extendable Responsive CSS3 Slideshow
* [Carousel3](https://github.com/foo123/Carousel3) HTML5 Photo Carousel using Three.js
* [Rubik3](https://github.com/foo123/Rubik3) intuitive 3D Rubik Cube with Three.js
* [MOD3](https://github.com/foo123/MOD3) JavaScript port of AS3DMod ActionScript 3D Modifier Library
* [RT](https://github.com/foo123/RT) unified client-side real-time communication for JavaScript using XHR polling / BOSH / WebSockets / WebRTC
* [AjaxListener.js](https://github.com/foo123/AjaxListener.js): Listen to any AJAX event on page with JavaScript, even by other scripts
* [asynchronous.js](https://github.com/foo123/asynchronous.js) simple manager for asynchronous, linear, parallel, sequential and interleaved tasks for JavaScript
* [classy.js](https://github.com/foo123/classy.js) Object-Oriented mini-framework for JavaScript

