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

* [Rasterizer](https://github.com/foo123/Rasterizer) stroke and fill lines, rectangles, curves and paths, without canvas.
* [Gradient](https://github.com/foo123/Gradient) create linear, radial, conic and elliptic gradients and image patterns without canvas.
* [Geometrize](https://github.com/foo123/Geometrize) Computational Geometry and Rendering Library for JavaScript
* [Plot.js](https://github.com/foo123/Plot.js) simple and small library which can plot graphs of functions and various simple charts and can render to Canvas, SVG and plain HTML
* [MOD3](https://github.com/foo123/MOD3) 3D Modifier Library in JavaScript
* [HAAR.js](https://github.com/foo123/HAAR.js) image feature detection based on Haar Cascades in JavaScript (Viola-Jones-Lienhart et al Algorithm)
* [HAARPHP](https://github.com/foo123/HAARPHP) image feature detection based on Haar Cascades in PHP (Viola-Jones-Lienhart et al Algorithm)
* [FILTER.js](https://github.com/foo123/FILTER.js) video and image processing and computer vision Library in pure JavaScript (browser and node)
* [css-color](https://github.com/foo123/css-color) simple class to parse and manipulate colors in various formats
