;(function (undefined) {
    var _global;

    function extend(o, n, override) {
        for (var key in n) {
            if (n.hasOwnProperty(key) && (!o.hasOwnProperty(key) || override)) {
                o[key] = n[key]
            }
        }
        return o
    }

    function Rem(opt) {
        this.init(opt)
    }

    Rem.prototype = {
        constructor: this, init: function (opt) {
            var rem = {doc: document, win: window, desinWidth: 750, num: 100};
            this.rem = extend(rem, opt, true);
            var r = this.rem.win.document;
            var m = r.createElement("meta");
            m.setAttribute("name", "viewport");
            m.setAttribute("content", "width=device-width,user-scalable=no,initial-scale=" + 1 + ",maximum-scale=" + 1 + ",minimum-scale=" + 1 + ",minimal-ui");
            r.head.appendChild(m);
            var docEl = this.rem.doc.documentElement;
            var resizeEvt = "orientationchange" in window ? "orientationchange" : "resize";
            var _self = this;
            console.log(_self.rem.desinWidth);
            console.log(_self.rem.num);
            var recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) {
                    return
                }
                if (clientWidth >= _self.rem.desinWidth) {
                    docEl.style.fontSize = "100px"
                } else {
                    docEl.style.fontSize = _self.rem.num * (clientWidth / _self.rem.desinWidth) + "px"
                }
            };
            if (!_self.rem.doc.addEventListener) {
                return
            }
            this.rem.win.addEventListener(resizeEvt, recalc, false);
            this.rem.doc.addEventListener("DOMContentLoaded", recalc, false)
        }
    };
    _global = (function () {
        return this || (0, eval)("this")
    }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = Rem
    } else {
        if (typeof define === "function" && define.amd) {
            define(function () {
                return Rem
            })
        } else {
            !("Rem" in _global) && (_global.Rem = Rem)
        }
    }
}());