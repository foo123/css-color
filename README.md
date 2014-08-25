css-color
=========

simple class for manipulating color values for css, svg, canvas/image

**example:**

```javascript

var rgb = new CSS.Color([128, 255, 245, 1]).toRGB(asString, condenced, noTransparency);
var hsl = new CSS.Color([128, 255, 245, 1]).toHSL(asString, condenced, noTransparency);
var cmyk = new CSS.Color([128, 255, 245, 1]).toCMYK(asString, condenced, withTransparency);

// or using a constructor factory pattern
var rgb = CSS.Color([128, 255, 245, 1]).toRGB(asString, condenced, noTransparency);
var hsl = CSS.Color([128, 255, 245, 1]).toHSL(asString, condenced, noTransparency);
var cmyk = CSS.Color([128, 255, 245, 1]).toCMYK(asString, condenced, withTransparency);

var color = new CSS.Color().fromRGB([255, 255, 255, 0.3]);
// or via static method
var color = CSS.Color.fromRGB([255, 255, 255]);

var color = new CSS.Color().fromHSL([120, 50, 100, 0.7]);
// or via static method
var color = CSS.Color.fromHSL([120, 50, 100]);

var color = new CSS.Color().fromHEX([0xff, 0xaa, 0x00, 0xfa]);
// or via static method
var color = CSS.Color.fromHEX([0xff, 0xaa, 0x00]);

var color = new CSS.Color().fromPixel(0xff3d1208);
// or via static method
var color = CSS.Color.fromPixel(0xff3d1208);

var color = new CSS.Color().fromKeyword('orange');
// or via static method
var color = CSS.Color.fromKeyword('orange');

var color = new CSS.Color().fromCMYK([1, 0.3, 0.5, 1]);
// or via static method
var color = CSS.Color.fromCMYK([1, 0.3, 0.5, 1]);

// also
var color = CSS.Color.fromString('rgba(255, 100%, 100%, 0.7)');
var color = CSS.Color.fromString('hsla(120, 50%, 100%, 0.5)');
var color = CSS.Color.fromString('#fff');
var color = CSS.Color.fromString('slategrey');

// output
console.log(color.toHSL(asString, condenced, noTransparency)); // hsla(..)
console.log(color.toHEX(asString, condenced, withTransparency)); // #..
console.log(color.toRGB(asString, condenced, noTransparency)); // rgb(255, 255, 255)
console.log(color.toHSL(asString, condenced, noTransparency)); // hsl(..)
console.log(color.toCMYK(asString, condenced, withTransparency)); // CMYK: [..]
console.log(color.toPixel(withTransparency)); // 0x...
console.log(color.toKeyword(asString, condenced, withTransparency)); // only if color was set from keyword

// also
console.log(color.toString('hsla', condenced));
console.log(color.toString('hsl', condenced));
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
