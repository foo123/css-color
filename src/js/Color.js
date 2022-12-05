/**
*   Color
*   color class for color manipulations for CSS, SVG, Canvas/Image
*
*   @version 1.0.0
*   https://github.com/foo123/css-color
*
**/
!function(root, name, factory) {
"use strict";
if (('object' === typeof module) && module.exports) /* CommonJS */
    (module.$deps = module.$deps||{}) && (module.exports = module.$deps[name] = factory.call(root));
else if (('function' === typeof define) && define.amd && ('function' === typeof require) && ('function' === typeof require.specified) && require.specified(name) /*&& !require.defined(name)*/) /* AMD */
    define(name, ['module'], function(module) {factory.moduleUri = module.uri; return factory.call(root);});
else if (!(name in root)) /* Browser/WebWorker/.. */
    (root[name] = factory.call(root)||1) && ('function' === typeof(define)) && define.amd && define(function() {return root[name];});
}(  /* current root */          'undefined' !== typeof self ? self : this,
    /* module name */           "Color",
    /* module factory */        function ModuleFactory__Color(undef) {
"use strict";

// CSS Color Class and utils
function Color(color, cstop) {
    // constructor factory pattern used here also
    if (this instanceof Color)
    {
        this.reset();
        if (color) this.set(color, cstop);
    }
    else
    {
        return new Color(color, cstop);
    }
}
Color.VERSION = "1.0.0";
// static
Color.Keywords = {
// http://www.w3.org/wiki/CSS/Properties/color/keywords
// https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
/* extended */
 'transparent'         : [  0,0,0        ,0]
,'aliceblue'           : [  240,248,255  ,1]
,'antiquewhite'        : [  250,235,215  ,1]
,'aqua'                : [  0,255,255    ,1]
,'aquamarine'          : [  127,255,212  ,1]
,'azure'               : [  240,255,255  ,1]
,'beige'               : [  245,245,220  ,1]
,'bisque'              : [  255,228,196  ,1]
,'black'               : [  0,0,0    ,    1]
,'blanchedalmond'      : [  255,235,205  ,1]
,'blue'                : [  0,0,255  ,    1]
,'blueviolet'          : [  138,43,226   ,1]
,'brown'               : [  165,42,42    ,1]
,'burlywood'           : [  222,184,135  ,1]
,'cadetblue'           : [  95,158,160   ,1]
,'chartreuse'          : [  127,255,0    ,1]
,'chocolate'           : [  210,105,30   ,1]
,'coral'               : [  255,127,80   ,1]
,'cornflowerblue'      : [  100,149,237  ,1]
,'cornsilk'            : [  255,248,220  ,1]
,'crimson'             : [  220,20,60    ,1]
,'cyan'                : [  0,255,255    ,1]
,'darkblue'            : [  0,0,139  ,    1]
,'darkcyan'            : [  0,139,139    ,1]
,'darkgoldenrod'       : [  184,134,11   ,1]
,'darkgray'            : [  169,169,169  ,1]
,'darkgreen'           : [  0,100,0  ,    1]
,'darkgrey'            : [  169,169,169  ,1]
,'darkkhaki'           : [  189,183,107  ,1]
,'darkmagenta'         : [  139,0,139    ,1]
,'darkolivegreen'      : [  85,107,47    ,1]
,'darkorange'          : [  255,140,0    ,1]
,'darkorchid'          : [  153,50,204   ,1]
,'darkred'             : [  139,0,0  ,    1]
,'darksalmon'          : [  233,150,122  ,1]
,'darkseagreen'        : [  143,188,143  ,1]
,'darkslateblue'       : [  72,61,139    ,1]
,'darkslategray'       : [  47,79,79 ,    1]
,'darkslategrey'       : [  47,79,79 ,    1]
,'darkturquoise'       : [  0,206,209    ,1]
,'darkviolet'          : [  148,0,211    ,1]
,'deeppink'            : [  255,20,147   ,1]
,'deepskyblue'         : [  0,191,255    ,1]
,'dimgray'             : [  105,105,105  ,1]
,'dimgrey'             : [  105,105,105  ,1]
,'dodgerblue'          : [  30,144,255   ,1]
,'firebrick'           : [  178,34,34    ,1]
,'floralwhite'         : [  255,250,240  ,1]
,'forestgreen'         : [  34,139,34    ,1]
,'fuchsia'             : [  255,0,255    ,1]
,'gainsboro'           : [  220,220,220  ,1]
,'ghostwhite'          : [  248,248,255  ,1]
,'gold'                : [  255,215,0    ,1]
,'goldenrod'           : [  218,165,32   ,1]
,'gray'                : [  128,128,128  ,1]
,'green'               : [  0,128,0  ,    1]
,'greenyellow'         : [  173,255,47   ,1]
,'grey'                : [  128,128,128  ,1]
,'honeydew'            : [  240,255,240  ,1]
,'hotpink'             : [  255,105,180  ,1]
,'indianred'           : [  205,92,92    ,1]
,'indigo'              : [  75,0,130 ,    1]
,'ivory'               : [  255,255,240  ,1]
,'khaki'               : [  240,230,140  ,1]
,'lavender'            : [  230,230,250  ,1]
,'lavenderblush'       : [  255,240,245  ,1]
,'lawngreen'           : [  124,252,0    ,1]
,'lemonchiffon'        : [  255,250,205  ,1]
,'lightblue'           : [  173,216,230  ,1]
,'lightcoral'          : [  240,128,128  ,1]
,'lightcyan'           : [  224,255,255  ,1]
,'lightgoldenrodyellow': [  250,250,210  ,1]
,'lightgray'           : [  211,211,211  ,1]
,'lightgreen'          : [  144,238,144  ,1]
,'lightgrey'           : [  211,211,211  ,1]
,'lightpink'           : [  255,182,193  ,1]
,'lightsalmon'         : [  255,160,122  ,1]
,'lightseagreen'       : [  32,178,170   ,1]
,'lightskyblue'        : [  135,206,250  ,1]
,'lightslategray'      : [  119,136,153  ,1]
,'lightslategrey'      : [  119,136,153  ,1]
,'lightsteelblue'      : [  176,196,222  ,1]
,'lightyellow'         : [  255,255,224  ,1]
,'lime'                : [  0,255,0  ,    1]
,'limegreen'           : [  50,205,50    ,1]
,'linen'               : [  250,240,230  ,1]
,'magenta'             : [  255,0,255    ,1]
,'maroon'              : [  128,0,0  ,    1]
,'mediumaquamarine'    : [  102,205,170  ,1]
,'mediumblue'          : [  0,0,205  ,    1]
,'mediumorchid'        : [  186,85,211   ,1]
,'mediumpurple'        : [  147,112,219  ,1]
,'mediumseagreen'      : [  60,179,113   ,1]
,'mediumslateblue'     : [  123,104,238  ,1]
,'mediumspringgreen'   : [  0,250,154    ,1]
,'mediumturquoise'     : [  72,209,204   ,1]
,'mediumvioletred'     : [  199,21,133   ,1]
,'midnightblue'        : [  25,25,112    ,1]
,'mintcream'           : [  245,255,250  ,1]
,'mistyrose'           : [  255,228,225  ,1]
,'moccasin'            : [  255,228,181  ,1]
,'navajowhite'         : [  255,222,173  ,1]
,'navy'                : [  0,0,128  ,    1]
,'oldlace'             : [  253,245,230  ,1]
,'olive'               : [  128,128,0    ,1]
,'olivedrab'           : [  107,142,35   ,1]
,'orange'              : [  255,165,0    ,1]
,'orangered'           : [  255,69,0 ,    1]
,'orchid'              : [  218,112,214  ,1]
,'palegoldenrod'       : [  238,232,170  ,1]
,'palegreen'           : [  152,251,152  ,1]
,'paleturquoise'       : [  175,238,238  ,1]
,'palevioletred'       : [  219,112,147  ,1]
,'papayawhip'          : [  255,239,213  ,1]
,'peachpuff'           : [  255,218,185  ,1]
,'peru'                : [  205,133,63   ,1]
,'pink'                : [  255,192,203  ,1]
,'plum'                : [  221,160,221  ,1]
,'powderblue'          : [  176,224,230  ,1]
,'purple'              : [  128,0,128    ,1]
,'red'                 : [  255,0,0  ,    1]
,'rosybrown'           : [  188,143,143  ,1]
,'royalblue'           : [  65,105,225   ,1]
,'saddlebrown'         : [  139,69,19    ,1]
,'salmon'              : [  250,128,114  ,1]
,'sandybrown'          : [  244,164,96   ,1]
,'seagreen'            : [  46,139,87    ,1]
,'seashell'            : [  255,245,238  ,1]
,'sienna'              : [  160,82,45    ,1]
,'silver'              : [  192,192,192  ,1]
,'skyblue'             : [  135,206,235  ,1]
,'slateblue'           : [  106,90,205   ,1]
,'slategray'           : [  112,128,144  ,1]
,'slategrey'           : [  112,128,144  ,1]
,'snow'                : [  255,250,250  ,1]
,'springgreen'         : [  0,255,127    ,1]
,'steelblue'           : [  70,130,180   ,1]
,'tan'                 : [  210,180,140  ,1]
,'teal'                : [  0,128,128    ,1]
,'thistle'             : [  216,191,216  ,1]
,'tomato'              : [  255,99,71    ,1]
,'turquoise'           : [  64,224,208   ,1]
,'violet'              : [  238,130,238  ,1]
,'wheat'               : [  245,222,179  ,1]
,'white'               : [  255,255,255  ,1]
,'whitesmoke'          : [  245,245,245  ,1]
,'yellow'              : [  255,255,0    ,1]
,'yellowgreen'         : [  154,205,50   ,1]
};
Color.keywordRE = new RegExp('^(' + Object.keys(Color.Keywords).map(esc).join('|') + ')\\b', 'i');
Color.clamp = clamp;
Color.rgb2cmyk = rgb2cmyk;
Color.cmyk2rgb = cmyk2rgb;
Color.rgb2hex = rgb2hex;
Color.hex2rgb = hex2rgb;
Color.rgb2hsl = rgb2hsl;
Color.hsl2rgb = hsl2rgb;
Color.rgb2hsv = rgb2hsv;
Color.hsv2rgb = hsv2rgb;
Color.rgb2hwb = rgb2hwb;
Color.hwb2rgb = hwb2rgb;
Color.parse = function parse(s, withColorStops, onlyColor) {
    var m, m2, hasOpacity, rgb = null, opacity = 1, c = null, end = 0, end2 = 0, kw = null;
    s = trim(String(s)).toLowerCase();
    if (m = s.match(hexRE))
    {
        // hex
        rgb = hex2rgb(m[1]);
        opacity = 1;
        end = m[0].length;
        end2 = 0;
    }
    else if (m = s.match(hwbRE))
    {
        // hwb(a)
        hasOpacity = m[2].match(aRE);
        var col = trim(m[2]).split(sepRE).map(trim),
            h = col[0] ? col[0] : '0',
            w = col[1] ? col[1] : '0',
            b = col[2] ? col[2] : '0',
            a = hasOpacity ? hasOpacity[1] : '1';
        h = parseFloat(h, 10);
        w = '%' === w.slice(-1) ? parseFloat(w, 10) : parseFloat(w, 10)*100/255;
        b = '%' === b.slice(-1) ? parseFloat(b, 10) : parseFloat(b, 10)*100/255;
        a = '%' === a.slice(-1) ? parseFloat(a, 10)/100 : parseFloat(a, 10);
        rgb = hwb2rgb(h, w, b);
        opacity = a;
        end = m[0].length;
        end2 = 0;
    }
    else if (m = s.match(hslRE))
    {
        // hsl(a)
        hasOpacity = m[2].match(aRE);
        var col = trim(m[2]).split(sepRE).map(trim),
            h = col[0] ? col[0] : '0',
            s = col[1] ? col[1] : '0',
            l = col[2] ? col[2] : '0',
            a = hasOpacity ? hasOpacity[1] : ('hsla' === m[1] && null != col[3] ? col[3] : '1');
        h = parseFloat(h, 10);
        s = '%' === s.slice(-1) ? parseFloat(s, 10) : parseFloat(s, 10)*100/255;
        l = '%' === l.slice(-1) ? parseFloat(l, 10) : parseFloat(l, 10)*100/255;
        a = '%' === a.slice(-1) ? parseFloat(a, 10)/100 : parseFloat(a, 10);
        rgb = hsl2rgb(h, s, l);
        opacity = a;
        end = m[0].length;
        end2 = 0;
    }
    else if (m = s.match(rgbRE))
    {
        // rgb(a)
        hasOpacity = m[2].match(aRE);
        var col = trim(m[2]).split(sepRE).map(trim),
            r = col[0] ? col[0] : '0',
            g = col[1] ? col[1] : '0',
            b = col[2] ? col[2] : '0',
            a = hasOpacity ? hasOpacity[1] : ('rgba' === m[1] && null != col[3] ? col[3] : '1');
        r = '%' === r.slice(-1) ? parseFloat(r, 10)*2.55 : parseFloat(r, 10);
        g = '%' === g.slice(-1) ? parseFloat(g, 10)*2.55 : parseFloat(g, 10);
        b = '%' === b.slice(-1) ? parseFloat(b, 10)*2.55 : parseFloat(b, 10);
        a = '%' === a.slice(-1) ? parseFloat(a, 10)/100 : parseFloat(a, 10);
        rgb = [r, g, b];
        opacity = a;
        end = m[0].length;
        end2 = 0;
    }
    else if (m = s.match(Color.keywordRE))
    {
        kw = m[1];
        rgb = Color.Keywords[kw];
        opacity = rgb[3];
        rgb = rgb.slice(0, 3);
        end = m[0].length;
        end2 = 0;
    }
    if (rgb)
    {
        c = new Color().fromRGB([rgb[0], rgb[1], rgb[2], opacity]);
        if (kw) c.kword = kw;
        if (withColorStops)
        {
            s = s.substr(end);
            if (m2 = s.match(colorstopRE))
            {
                c.colorStop(m2[1]);
                end2 = m2[0].length;
            }
        }
        return onlyColor ? c : [c, 0, end+end2];
    }
    /*var m, m2, s2, end = 0, end2 = 0, c, hasOpacity;

    if ( 'hsl' == parsed ||
        ( !parsed && (m = s.match(hslRE)) )
    )
    {
        // hsl(a)
        if ( 'hsl' == parsed )
        {
            hasOpacity = 'hsla' == s[0].toLowerCase();
            var col = s[1].split(',').map(trim);
        }
        else
        {
            end = m[0].length;
            end2 = 0;
            hasOpacity = 'hsla' == m[1].toLowerCase();
            var col = m[2].split(',').map(trim);
        }

        var h = col[0] ? col[0] : '0';
        var s = col[1] ? col[1] : '0';
        var l = col[2] ? col[2] : '0';
        var a = hasOpacity && null!=col[3] ? col[3] : '1';

        h = parseFloat(h, 10);
        s = ('%'==s.slice(-1)) ? parseFloat(s, 10) : parseFloat(s, 10)*100/255;
        l = ('%'==l.slice(-1)) ? parseFloat(l, 10) : parseFloat(l, 10)*100/255;
        a = parseFloat(a, 10);

        c = new Color().fromHSL([h, s, l, a]);

        if ( withColorStops )
        {
            s2 = s.substr( end );
            if ( m2 = s2.match(Color.colorstopRE) )
            {
                c.colorStop( m2[1] );
                end2 = m2[0].length;
            }
        }
        return onlyColor ? c : [c, 0, end+end2];
    }
    if ( 'rgb' == parsed ||
        ( !parsed && (m = s.match(Color.rgbRE)) )
    )
    {
        // rgb(a)
        if ( 'rgb' == parsed )
        {
            hasOpacity = 'rgba' == s[0].toLowerCase();
            var col = s[1].split(',').map(trim);
        }
        else
        {
            end = m[0].length;
            end2 = 0;
            hasOpacity = 'rgba' == m[1].toLowerCase();
            var col = m[2].split(',').map(trim);
        }

        var r = col[0] ? col[0] : '0';
        var g = col[1] ? col[1] : '0';
        var b = col[2] ? col[2] : '0';
        var a = hasOpacity && null!=col[3] ? col[3] : '1';

        r = ('%'==r.slice(-1)) ? parseFloat(r, 10)*2.55 : parseFloat(r, 10);
        g = ('%'==g.slice(-1)) ? parseFloat(g, 10)*2.55 : parseFloat(g, 10);
        b = ('%'==b.slice(-1)) ? parseFloat(b, 10)*2.55 : parseFloat(b, 10);
        a = parseFloat(a, 10);

        c = new Color().fromRGB([r, g, b, a]);

        if ( withColorStops )
        {
            s2 = s.substr( end );
            if ( m2 = s2.match(Color.colorstopRE) )
            {
                c.colorStop( m2[1] );
                end2 = m2[0].length;
            }
        }
        return onlyColor ? c : [c, 0, end+end2];
    }
    if ( 'hex' == parsed ||
        ( !parsed && (m = s.match(Color.hexRE)) )
    )
    {
        // hex
        if ( 'hex' == parsed )
        {
            var col = hex2rgb( s[0] );
        }
        else
        {
            end = m[0].length;
            end2 = 0;
            var col = hex2rgb( m[1] );
        }

        var h1 = col[0] ? col[0] : 0x00;
        var h2 = col[1] ? col[1] : 0x00;
        var h3 = col[2] ? col[2] : 0x00;
        var a = null!=col[3] ? col[3] : 0xff;

        c = new Color().fromHEX([h1, h2, h3, a]);

        if ( withColorStops )
        {
            s2 = s.substr( end );
            if ( m2 = s2.match(Color.colorstopRE) )
            {
                c.colorStop( m2[1] );
                end2 = m2[0].length;
            }
        }
        return onlyColor ? c : [c, 0, end+end2];
    }
    if ( 'keyword' == parsed ||
        ( !parsed && (m = s.match(Color.keywordRE)) )
    )
    {
        // keyword
        if ( 'keyword' == parsed )
        {
            var col = s[0];
        }
        else
        {
            end = m[0].length;
            end2 = 0;
            var col = m[1];
        }

        c = new Color().fromKeyword(col);

        if ( withColorStops )
        {
            s2 = s.substr( end );
            if ( m2 = s2.match(Color.colorstopRE) )
            {
                c.colorStop( m2[1] );
                end2 = m2[0].length;
            }
        }
        return onlyColor ? c : [c, 0, end+end2];
    }
    */
};
Color.fromString = Color.get = function(s, withColorStops) {
    return Color.parse(s, withColorStops, 1);
};
Color.fromRGB = function(rgb) {
    return new Color().fromRGB(rgb);
};
Color.fromHSL = function(hsl) {
    return new Color().fromHSL(hsl);
};
Color.fromHSV = function(hsv) {
    return new Color().fromHSV(hsv);
};
Color.fromHWB = function(hwb) {
    return new Color().fromHWB(hwb);
};
Color.fromCMYK = function(cmyk) {
    return new Color().fromCMYK(cmyk);
};
Color.fromHEX = function(hex) {
    return new Color().fromHEX(hex);
};
Color.fromKeyword = function(keyword) {
    return new Color().fromKeyword(keyword);
};
Color.fromPixel = function(pixCol) {
    return new Color().fromPixel(pixCol);
};
Color.prototype = {
    constructor: Color,

    col: null,
    cstop: null,
    kword: null,

    clone: function() {
        var c = new Color();
        c.col = this.col.slice();
        c.cstop = this.cstop;
        c.kword = this.kword;
        return c;
    },

    reset: function() {
        this.col = [0, 0, 0, 1];
        this.cstop = '';
        this.kword = null;
        return this;
    },

    set: function(color, cstop) {
        if (color)
        {
            if (null != color[0])
                this.col[0] = clamp(color[0], 0, 255);
            if (null != color[1])
                this.col[1] = clamp(color[1], 0, 255);
            if (null != color[2])
                this.col[2] = clamp(color[2], 0, 255);
            if (null != color[3])
                this.col[3] = clamp(color[3], 0, 1);
            else
                this.col[3] = 1;

            if (cstop)
                this.cstop = cstop;

            this.kword = null;
        }
        return this;
    },

    colorStop: function(cstop) {
        this.cstop = cstop;
        return this;
    },

    isTransparent: function() {
        return 1 > this.col[3];
    },

    isKeyword: function() {
        return this.kword ? true : false;
    },

    fromPixel: function(color) {
        color = color || 0;
        this.col = [
            clamp((color>>16)&255, 0, 255),
            clamp((color>>8)&255, 0, 255),
            clamp((color)&255, 0, 255),
            clamp(((color>>24)&255)/255, 0, 1)
        ];
        this.kword = null;

        return this;
    },

    fromKeyword: function(kword) {
        kword = kword.toLowerCase();
        if (Color.Keywords[kword])
        {
            this.col = Color.Keywords[kword].slice();
            this.kword = kword;
        }
        return this;
    },

    fromHEX: function(hex) {
        this.col[0] = hex[0] ? clamp(parseInt(hex[0], 10), 0, 255) : 0;
        this.col[1] = hex[1] ? clamp(parseInt(hex[1], 10), 0, 255) : 0;
        this.col[2] = hex[2] ? clamp(parseInt(hex[2], 10), 0, 255) : 0;
        this.col[3] = null != hex[3] ? clamp(parseInt(hex[3], 10)/255, 0, 1) : 1;
        this.kword = null;
        return this;
    },

    fromRGB: function(rgb) {
        this.col[0] = rgb[0] ? clamp(round(rgb[0]), 0, 255) : 0;
        this.col[1] = rgb[1] ? clamp(round(rgb[1]), 0, 255) : 0;
        this.col[2] = rgb[2] ? clamp(round(rgb[2]), 0, 255) : 0;
        this.col[3] = null != rgb[3] ? clamp(rgb[3], 0, 1) : 1;
        this.kword = null;
        return this;
    },

    fromCMYK: function(cmyk) {
        var rgb = cmyk2rgb(cmyk[0]||0, cmyk[1]||0, cmyk[2]||0, cmyk[3]||0);
        this.col[0] = rgb[0];
        this.col[1] = rgb[1];
        this.col[2] = rgb[2];
        this.col[3] = null != cmyk[4] ? clamp(cmyk[4], 0, 1) : 1;
        this.kword = null;
        return this;
    },

    fromHSL: function(hsl) {
        var rgb = hsl2rgb(hsl[0]||0, hsl[1]||0, hsl[2]||0);
        this.col[0] = rgb[0];
        this.col[1] = rgb[1];
        this.col[2] = rgb[2];
        this.col[3] = null != hsl[3] ? clamp(hsl[3], 0, 1) : 1;
        this.kword = null;
        return this;
    },

    fromHSV: function(hsv) {
        var rgb = hsv2rgb(hsv[0]||0, hsv[1]||0, hsv[2]||0);
        this.col[0] = rgb[0];
        this.col[1] = rgb[1];
        this.col[2] = rgb[2];
        this.col[3] = null != hsv[3] ? clamp(hsv[3], 0, 1) : 1;
        this.kword = null;
        return this;
    },

    fromHWB: function(hwb) {
        var rgb = hwb2rgb(hwb[0]||0, hwb[1]||0, hwb[2]||0);
        this.col[0] = rgb[0];
        this.col[1] = rgb[1];
        this.col[2] = rgb[2];
        this.col[3] = null != hwb[3] ? clamp(hwb[3], 0, 1) : 1;
        this.kword = null;
        return this;
    },

    toPixel: function(withTransparency) {
        if (withTransparency)
            return ((clamp(this.col[3]*255, 0, 255) << 24) | (this.col[0] << 16) | (this.col[1] << 8) | (this.col[2])&255);
        else
            return ((this.col[0] << 16) | (this.col[1] << 8) | (this.col[2])&255);
    },

    toCMYK: function(asString, condenced, noTransparency) {
        var cmyk = rgb2cmyk(this.col[0], this.col[1], this.col[2]);
        if (noTransparency)
            return cmyk;
        else
            return cmyk.concat(this.col[3]);
    },

    toKeyword: function(asString, condenced, withTransparency) {
        if (this.kword)
            return this.kword;
        else
            return this.toHEX(1, condenced, withTransparency);
    },

    toHEX: function(asString, condenced, withTransparency) {
        if (withTransparency)
            return rgb2hexIE(this.col[0], this.col[1], this.col[2], clamp(round(255*this.col[3]), 0, 255));
        else
            return rgb2hex(this.col[0], this.col[1], this.col[2], condenced);
    },

    toRGB: function(asString, condenced, noTransparency) {
        var opcty = this.col[3];
        if (asString)
        {
            if (condenced)
            {
                opcty = 1 > opcty && opcty > 0 ? opcty.toString().slice(1) : opcty;
            }

            if (noTransparency || 1 === this.col[3])
                return 'rgb(' + this.col.slice(0, 3).join(',') + ')';
            else
                return 'rgba(' + this.col.slice(0, 3).concat(opcty).join(',') + ')';
        }
        else
        {
            if (noTransparency)
                return this.col.slice(0, 3);
            else
                return this.col.slice();
        }
    },

    toHSL: function(asString, condenced, noTransparency) {
        var opcty = this.col[3];
        var hsl = rgb2hsl(this.col[0], this.col[1], this.col[2]);

        if (asString)
        {
            if (condenced)
            {
                hsl[1] = (0 === hsl[1] ? hsl[1] : (String(hsl[1])+'%'));
                hsl[2] = (0 === hsl[2] ? hsl[2] : (String(hsl[2])+'%'));
                opcty = 1 > opcty && opcty > 0 ? opcty.toString().slice(1) : opcty;
            }

            if (noTransparency || 1 === this.col[3])
                return 'hsl(' + [hsl[0], hsl[1], hsl[2]].join(',') + ')';
            else
                return 'hsla(' + [hsl[0], hsl[1], hsl[2], opcty].join(',') + ')';
        }
        else
        {
            if (noTransparency)
                return hsl;
            else
                return hsl.concat(this.col[3]);
        }
    },

    toHWB: function(asString, condenced, noTransparency) {
        var opcty = this.col[3];
        var hwb = rgb2hwb(this.col[0], this.col[1], this.col[2]);

        if (asString)
        {
            if (condenced)
            {
                hwb[1] = (0 === hwb[1] ? hwb[1] : (String(hwb[1])+'%'));
                hwb[2] = (0 === hwb[2] ? hwb[2] : (String(hwb[2])+'%'));
                opcty = 1 > opcty && opcty > 0 ? opcty.toString().slice(1) : opcty;
            }

            if (noTransparency || 1 === this.col[3])
                return 'hwb(' + [hwb[0], hwb[1], hwb[2]].join(' ') + ')';
            else
                return 'hwb(' + [hwb[0], hwb[1], hwb[2]].join(' ') + ' / ' + opcty + ')';
        }
        else
        {
            if (noTransparency)
                return hwb;
            else
                return hwb.concat(this.col[3]);
        }
    },

    toColorStop: function(compatType) {
        var cstop = this.cstop;
        if (compatType)
        {
            cstop = cstop.length ? (cstop + ',') : '';
            if (1 > this.col[3])
                return 'color-stop(' + cstop + this.toRGB(1, 1) + ')';
            else
                return 'color-stop(' + cstop + this.toHEX(1, 1) + ')';
        }
        else
        {
            cstop = cstop.length ? (' ' + cstop) : '';
            if (1 > this.col[3])
                return this.toRGB(1, 1) + cstop;
            else
                return this.toHEX(1, 1) + cstop;
        }
    },

    toString: function(format, condenced) {
        format = format ? format.toLowerCase() : 'hex';
        if ('rgb' === format || 'rgba' === format)
        {
            return this.toRGB(1, false !== condenced, 'rgb' === format);
        }
        else if ('hsl' === format || 'hsla' === format)
        {
            return this.toHSL(1, false !== condenced, 'hsl' === format);
        }
        else if ('hwb' === format)
        {
            return this.toHWB(1, false !== condenced, false);
        }
        else if ('keyword' === format)
        {
            return this.toKeyword(1);
        }
        return this.toHEX(1, false !== condenced, 'hexie' === format);
    }
};

// utils ---------------------------------
var stdMath = Math,
    round = stdMath.round, floor = stdMath.floor,
    min = stdMath.min, max = stdMath.max, abs = stdMath.abs,
    ESC_RE = /([.*+?^${}()|\[\]\/\\\-])/g,
    TRIM_RE = /^\s+|\s+$/gm,
    // color format regexes
    hexieRE = /^#([0-9a-fA-F]{8})\b/,
    hexRE = /^#([0-9a-fA-F]{3,6})\b/,
    rgbRE = /^(rgba?)\b\s*\(([^\)]*)\)/i,
    hslRE = /^(hsla?)\b\s*\(([^\)]*)\)/i,
    hwbRE = /^(hwba?)\b\s*\(([^\)]*)\)/i,
    sepRE = /\s+|,/gm, aRE = /\/\s*(\d*?\.?\d+%?)/,
    colorstopRE = /^\s+(\d+(\.\d+)?%?)/
;
function clamp(v, m, M)
{
    return max(min(v, M), m);
}
function esc(s)
{
    return s.replace(ESC_RE, '\\$1');
}
function trim(s)
{
    return s.replace(TRIM_RE, '');
}
// http://www.javascripter.net/faq/rgb2cmyk.htm
function rgb2cmyk(r, g, b, asPercent)
{
    var c = 0, m = 0, y = 0, k = 0, minCMY, invCMY;
    if (asPercent)
    {
        r = clamp(round(r*2.55), 0, 255);
        g = clamp(round(g*2.55), 0, 255);
        b = clamp(round(b*2.55), 0, 255);
    }

    // BLACK
    if (0 === r && 0 === g && 0 === b)
    {
        k = 1;
        return [0, 0, 0, 1];
    }

    c = 1 - (r/255);
    m = 1 - (g/255);
    y = 1 - (b/255);

    minCMY = min(c, m, y);
    invCMY = 1 / (1 - minCMY);
    c = (c - minCMY) * invCMY;
    m = (m - minCMY) * invCMY;
    y = (y - minCMY) * invCMY;
    k = minCMY;
    return [c, m, y, k];
}
function cmyk2rgb(c, m, y, k)
{
    var r = 0, g = 0, b = 0, minCMY, invCMY;

    // BLACK
    if (0 === c && 0 === m && 0 === y)
    {
        return [0, 0, 0];
    }

    minCMY = k;
    invCMY = 1 - minCMY;
    c = c*invCMY + minCMY;
    m = m*invCMY + minCMY;
    y = y*invCMY + minCMY;

    r = (1 - c)*255;
    g = (1 - m)*255;
    b = (1 - y)*255;
    return [
    clamp(round(r), 0, 255),
    clamp(round(g), 0, 255),
    clamp(round(b), 0, 255)
    ];
}
function rgb2hex(r, g, b, condenced, asPercent)
{
    var hex;
    if (asPercent)
    {
        r = clamp(round(r*2.55), 0, 255);
        g = clamp(round(g*2.55), 0, 255);
        b = clamp(round(b*2.55), 0, 255);
    }

    r = r < 16 ? '0'+r.toString(16) : r.toString(16);
    g = g < 16 ? '0'+g.toString(16) : g.toString(16);
    b = b < 16 ? '0'+b.toString(16) : b.toString(16);

    if (condenced && (r[0]===r[1] && g[0]===g[1] && b[0]===b[1]))
        hex = '#' + r[0] + g[0] + b[0];
    else
        hex = '#' + r + g + b;

    return hex;
}
function rgb2hexIE(r, g, b, a, asPercent)
{
    var hex;
    if (asPercent)
    {
        r = clamp(round(r*2.55), 0, 255);
        g = clamp(round(g*2.55), 0, 255);
        b = clamp(round(b*2.55), 0, 255);
        a = clamp(round(a*2.55), 0, 255);
    }

    r = r < 16 ? '0'+r.toString(16) : r.toString(16);
    g = g < 16 ? '0'+g.toString(16) : g.toString(16);
    b = b < 16 ? '0'+b.toString(16) : b.toString(16);
    a = a < 16 ? '0'+a.toString(16) : a.toString(16);
    hex = '#' + a + r + g + b;

    return hex;
}
function hex2rgb(h)
{
    if (!h || 3 > h.length)
    {
        return [0, 0, 0];
    }
    else if (6 > h.length)
    {
        return [
        clamp(parseInt(h[0]+h[0], 16)||0, 0, 255),
        clamp(parseInt(h[1]+h[1], 16)||0, 0, 255),
        clamp(parseInt(h[2]+h[2], 16)||0, 0, 255)
        ];
    }
    else
    {
        return [
        clamp(parseInt(h[0]+h[1], 16)||0, 0, 255),
        clamp(parseInt(h[2]+h[3], 16)||0, 0, 255),
        clamp(parseInt(h[4]+h[5], 16)||0, 0, 255)
        ];
    }
}
function hsl2rgb(h, s, l)
{
    var c, hp, d, x, m, r, g, b;
    s /= 100;
    l /= 100;
    c = (1 - stdMath.abs(2*l - 1))*s;
    hp = h/60;
    d = stdMath.floor(hp / 2);
    x = c*(1 - stdMath.abs(hp - 2*d - 1));
    m = l - c/2;
    if (hp >= 0 && hp < 1)
    {
        r = c + m;
        g = x + m;
        b = 0 + m;
    }
    else if (hp >= 1 && hp < 2)
    {
        r = x + m;
        g = c + m;
        b = 0 + m;
    }
    else if (hp >= 2 && hp < 3)
    {
        r = 0 + m;
        g = c + m;
        b = x + m;
    }
    else if (hp >= 3 && hp < 4)
    {
        r = 0 + m;
        g = x + m;
        b = c + m;
    }
    else if (hp >= 4 && hp < 5)
    {
        r = x + m;
        g = 0 + m;
        b = c + m;
    }
    else //if (hp >= 5 && hp < 6)
    {
        r = c + m;
        g = 0 + m;
        b = x + m;
    }
    return [
    clamp(stdMath.round(r*255), 0, 255),
    clamp(stdMath.round(g*255), 0, 255),
    clamp(stdMath.round(b*255), 0, 255)
    ];
}
function hsv2rgb(h, s, v)
{
    v /= 100;
    var l = v*(1 - s/200), lm = stdMath.min(l, 1-l);
    return hsl2rgb(h, 0 === lm ? 0 : 100*(v-l)/lm, 100*l);
}
function hwb2rgb(h, w, b)
{
    var b1 = 1 - b/100;
    return hsv2rgb(h, 100 - w/b1, 100*b1);
}
function rgb2hslvwb(r, g, b, asPercent, type)
{
    // https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB
    // https://en.wikipedia.org/wiki/HWB_color_model
    var h, sl, sv, l, v, c, xmax, xmin, wh, bl;

    if (asPercent)
    {
        r /= 100;
        g /= 100;
        b /= 100;
    }
    else
    {
        r /= 255;
        g /= 255;
        b /= 255;
    }
    v = xmax = stdMath.max(r, g, b);
    wh = xmin = stdMath.min(r, g, b);
    bl = 1 - xmax;
    c = xmax - xmin;
    l = (xmax + xmin)/2;
    if (0 === c)
    {
        h = 0;
    }
    else if (v === r)
    {
        h = 60*(0 + (g - b)/c);
    }
    else if (v === g)
    {
        h = 60*(2 + (b - r)/c);
    }
    else //if (v === b)
    {
        h = 60*(4 + (r - g)/c);
    }
    if (0 === l || 1 === l)
    {
        sl = 0;
    }
    else
    {
        sl = (v - l)/stdMath.min(l, 1 - l);
    }
    if (0 === v)
    {
        sv = 0;
    }
    else
    {
        sv = c/v;
    }
    return 'hwb' === type ? [
    clamp(stdMath.round(h), 0, 360),
    clamp(wh*100, 0, 100),
    clamp(bl*100, 0, 100)
    ] : ('hsv' === type ? [
    clamp(stdMath.round(h), 0, 360),
    clamp(sv*100, 0, 100),
    clamp(v*100, 0, 100)
    ] : /*'hsl' === type*/[
    clamp(stdMath.round(h), 0, 360),
    clamp(sl*100, 0, 100),
    clamp(l*100, 0, 100)
    ]);
}
function rgb2hsl(r, g, b, asPercent)
{
    return rgb2hslvwb(r, g, b, asPercent, 'hsl');
}
function rgb2hsv(r, g, b, asPercent)
{
    return rgb2hslvwb(r, g, b, asPercent, 'hsv');
}
function rgb2hwb(r, g, b, asPercent)
{
    return rgb2hslvwb(r, g, b, asPercent, 'hwb');
}


// export it
return Color;
});
