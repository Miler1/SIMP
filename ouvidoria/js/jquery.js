if (function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n(e, t) {
        t = t || te;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function i(e) {
        var t = !!e && "length" in e && e.length,
            n = he.type(e);
        return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t, n) {
        return he.isFunction(t) ? he.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? he.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? he.grep(e, function(e) {
            return oe.call(t, e) > -1 !== n
        }) : Te.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function(e) {
            return oe.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function a(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = {};
        return he.each(e.match(qe) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s(e) {
        return e
    }

    function l(e) {
        throw e
    }

    function u(e, t, n) {
        var i;
        try {
            e && he.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && he.isFunction(i = e.then) ? i.call(e, t, n) : t.call(void 0, e)
        } catch (e) {
            n.call(void 0, e)
        }
    }

    function c() {
        te.removeEventListener("DOMContentLoaded", c), e.removeEventListener("load", c), he.ready()
    }

    function d() {
        this.expando = he.expando + d.uid++
    }

    function f(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : He.test(e) ? JSON.parse(e) : e)
    }

    function p(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Fe, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = f(n)
                } catch (e) {}
                Le.set(e, t, n)
            } else n = void 0;
        return n
    }

    function h(e, t, n, i) {
        var r, a = 1,
            o = 20,
            s = i ? function() {
                return i.cur()
            } : function() {
                return he.css(e, t, "")
            },
            l = s(),
            u = n && n[3] || (he.cssNumber[t] ? "" : "px"),
            c = (he.cssNumber[t] || "px" !== u && +l) && Re.exec(he.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do a = a || ".5", c /= a, he.style(e, t, c + u); while (a !== (a = s() / l) && 1 !== a && --o)
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }

    function m(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            r = Ve[i];
        return r ? r : (t = n.body.appendChild(n.createElement(i)), r = he.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Ve[i] = r, r)
    }

    function v(e, t) {
        for (var n, i, r = [], a = 0, o = e.length; a < o; a++) i = e[a], i.style && (n = i.style.display, t ? ("none" === n && (r[a] = Ie.get(i, "display") || null, r[a] || (i.style.display = "")), "" === i.style.display && ze(i) && (r[a] = m(i))) : "none" !== n && (r[a] = "none", Ie.set(i, "display", n)));
        for (a = 0; a < o; a++) null != r[a] && (e[a].style.display = r[a]);
        return e
    }

    function g(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && he.nodeName(e, t) ? he.merge([e], n) : n
    }

    function y(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Ie.set(e[n], "globalEval", !t || Ie.get(t[n], "globalEval"))
    }

    function b(e, t, n, i, r) {
        for (var a, o, s, l, u, c, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
            if (a = e[p], a || 0 === a)
                if ("object" === he.type(a)) he.merge(f, a.nodeType ? [a] : a);
                else if (Ue.test(a)) {
            for (o = o || d.appendChild(t.createElement("div")), s = (Xe.exec(a) || ["", ""])[1].toLowerCase(), l = Ye[s] || Ye._default, o.innerHTML = l[1] + he.htmlPrefilter(a) + l[2], c = l[0]; c--;) o = o.lastChild;
            he.merge(f, o.childNodes), o = d.firstChild, o.textContent = ""
        } else f.push(t.createTextNode(a));
        for (d.textContent = "", p = 0; a = f[p++];)
            if (i && he.inArray(a, i) > -1) r && r.push(a);
            else if (u = he.contains(a.ownerDocument, a), o = g(d.appendChild(a), "script"), u && y(o), n)
            for (c = 0; a = o[c++];) Qe.test(a.type || "") && n.push(a);
        return d
    }

    function w() {
        return !0
    }

    function x() {
        return !1
    }

    function C() {
        try {
            return te.activeElement
        } catch (e) {}
    }

    function k(e, t, n, i, r, a) {
        var o, s;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (s in t) k(e, s, n, i, t[s], a);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = x;
        else if (!r) return e;
        return 1 === a && (o = r, r = function(e) {
            return he().off(e), o.apply(this, arguments)
        }, r.guid = o.guid || (o.guid = he.guid++)), e.each(function() {
            he.event.add(this, t, r, i, n)
        })
    }

    function T(e, t) {
        return he.nodeName(e, "table") && he.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
    }

    function S(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function E(e) {
        var t = it.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function A(e, t) {
        var n, i, r, a, o, s, l, u;
        if (1 === t.nodeType) {
            if (Ie.hasData(e) && (a = Ie.access(e), o = Ie.set(t, a), u = a.events)) {
                delete o.handle, o.events = {};
                for (r in u)
                    for (n = 0, i = u[r].length; n < i; n++) he.event.add(t, r, u[r][n])
            }
            Le.hasData(e) && (s = Le.access(e), l = he.extend({}, s), Le.set(t, l))
        }
    }

    function O(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Be.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function P(e, t, i, r) {
        t = re.apply([], t);
        var a, o, s, l, u, c, d = 0,
            f = e.length,
            p = f - 1,
            h = t[0],
            m = he.isFunction(h);
        if (m || f > 1 && "string" == typeof h && !fe.checkClone && nt.test(h)) return e.each(function(n) {
            var a = e.eq(n);
            m && (t[0] = h.call(this, n, a.html())), P(a, t, i, r)
        });
        if (f && (a = b(t, e[0].ownerDocument, !1, e, r), o = a.firstChild, 1 === a.childNodes.length && (a = o), o || r)) {
            for (s = he.map(g(a, "script"), S), l = s.length; d < f; d++) u = a, d !== p && (u = he.clone(u, !0, !0), l && he.merge(s, g(u, "script"))), i.call(e[d], u, d);
            if (l)
                for (c = s[s.length - 1].ownerDocument, he.map(s, E), d = 0; d < l; d++) u = s[d], Qe.test(u.type || "") && !Ie.access(u, "globalEval") && he.contains(c, u) && (u.src ? he._evalUrl && he._evalUrl(u.src) : n(u.textContent.replace(rt, ""), c))
        }
        return e
    }

    function q(e, t, n) {
        for (var i, r = t ? he.filter(t, e) : e, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || he.cleanData(g(i)), i.parentNode && (n && he.contains(i.ownerDocument, i) && y(g(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function j(e, t, n) {
        var i, r, a, o, s = e.style;
        return n = n || st(e), n && (o = n.getPropertyValue(t) || n[t], "" !== o || he.contains(e.ownerDocument, e) || (o = he.style(e, t)), !fe.pixelMarginRight() && ot.test(o) && at.test(t) && (i = s.width, r = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = i, s.minWidth = r, s.maxWidth = a)), void 0 !== o ? o + "" : o
    }

    function M(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function D(e) {
        if (e in ft) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = dt.length; n--;)
            if (e = dt[n] + t, e in ft) return e
    }

    function N(e, t, n) {
        var i = Re.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function I(e, t, n, i, r) {
        var a, o = 0;
        for (a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; a < 4; a += 2) "margin" === n && (o += he.css(e, n + _e[a], !0, r)), i ? ("content" === n && (o -= he.css(e, "padding" + _e[a], !0, r)), "margin" !== n && (o -= he.css(e, "border" + _e[a] + "Width", !0, r))) : (o += he.css(e, "padding" + _e[a], !0, r), "padding" !== n && (o += he.css(e, "border" + _e[a] + "Width", !0, r)));
        return o
    }

    function L(e, t, n) {
        var i, r = !0,
            a = st(e),
            o = "border-box" === he.css(e, "boxSizing", !1, a);
        if (e.getClientRects().length && (i = e.getBoundingClientRect()[t]), i <= 0 || null == i) {
            if (i = j(e, t, a), (i < 0 || null == i) && (i = e.style[t]), ot.test(i)) return i;
            r = o && (fe.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + I(e, t, n || (o ? "border" : "content"), r, a) + "px"
    }

    function H(e, t, n, i, r) {
        return new H.prototype.init(e, t, n, i, r)
    }

    function F() {
        ht && (e.requestAnimationFrame(F), he.fx.tick())
    }

    function $() {
        return e.setTimeout(function() {
            pt = void 0
        }), pt = he.now()
    }

    function R(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = _e[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function _(e, t, n) {
        for (var i, r = (V.tweeners[t] || []).concat(V.tweeners["*"]), a = 0, o = r.length; a < o; a++)
            if (i = r[a].call(n, t, e)) return i
    }

    function z(e, t, n) {
        var i, r, a, o, s, l, u, c, d = "width" in t || "height" in t,
            f = this,
            p = {},
            h = e.style,
            m = e.nodeType && ze(e),
            g = Ie.get(e, "fxshow");
        n.queue || (o = he._queueHooks(e, "fx"), null == o.unqueued && (o.unqueued = 0, s = o.empty.fire, o.empty.fire = function() {
            o.unqueued || s()
        }), o.unqueued++, f.always(function() {
            f.always(function() {
                o.unqueued--, he.queue(e, "fx").length || o.empty.fire()
            })
        }));
        for (i in t)
            if (r = t[i], mt.test(r)) {
                if (delete t[i], a = a || "toggle" === r, r === (m ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    m = !0
                }
                p[i] = g && g[i] || he.style(e, i)
            }
        if (l = !he.isEmptyObject(t), l || !he.isEmptyObject(p)) {
            d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = g && g.display, null == u && (u = Ie.get(e, "display")), c = he.css(e, "display"), "none" === c && (u ? c = u : (v([e], !0), u = e.style.display || u, c = he.css(e, "display"), v([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === he.css(e, "float") && (l || (f.done(function() {
                h.display = u
            }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), l = !1;
            for (i in p) l || (g ? "hidden" in g && (m = g.hidden) : g = Ie.access(e, "fxshow", {
                display: u
            }), a && (g.hidden = !m), m && v([e], !0), f.done(function() {
                m || v([e]), Ie.remove(e, "fxshow");
                for (i in p) he.style(e, i, p[i])
            })), l = _(m ? g[i] : 0, i, f), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
        }
    }

    function W(e, t) {
        var n, i, r, a, o;
        for (n in e)
            if (i = he.camelCase(n), r = t[i], a = e[n], he.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), o = he.cssHooks[i], o && "expand" in o) {
                a = o.expand(a), delete e[i];
                for (n in a) n in e || (e[n] = a[n], t[n] = r)
            } else t[i] = r
    }

    function V(e, t, n) {
        var i, r, a = 0,
            o = V.prefilters.length,
            s = he.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = pt || $(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, a = 1 - i, o = 0, l = u.tweens.length; o < l; o++) u.tweens[o].run(a);
                return s.notifyWith(e, [u, a, n]), a < 1 && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: he.extend({}, t),
                opts: he.extend(!0, {
                    specialEasing: {},
                    easing: he.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: pt || $(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = he.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (W(c, u.opts.specialEasing); a < o; a++)
            if (i = V.prefilters[a].call(u, e, c, u.opts)) return he.isFunction(i.stop) && (he._queueHooks(u.elem, u.opts.queue).stop = he.proxy(i.stop, i)), i;
        return he.map(c, _, u), he.isFunction(u.opts.start) && u.opts.start.call(e, u), he.fx.timer(he.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function B(e) {
        var t = e.match(qe) || [];
        return t.join(" ")
    }

    function X(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Q(e, t, n, i) {
        var r;
        if (he.isArray(t)) he.each(t, function(t, r) {
            n || Et.test(e) ? i(e, r) : Q(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== he.type(t)) i(e, t);
        else
            for (r in t) Q(e + "[" + r + "]", t[r], n, i)
    }

    function Y(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                a = t.toLowerCase().match(qe) || [];
            if (he.isFunction(n))
                for (; i = a[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function U(e, t, n, i) {
        function r(s) {
            var l;
            return a[s] = !0, he.each(e[s] || [], function(e, s) {
                var u = s(t, n, i);
                return "string" != typeof u || o || a[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var a = {},
            o = e === Ft;
        return r(t.dataTypes[0]) || !a["*"] && r("*")
    }

    function G(e, t) {
        var n, i, r = he.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && he.extend(!0, e, i), e
    }

    function Z(e, t, n) {
        for (var i, r, a, o, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in s)
                if (s[r] && s[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n) a = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    a = r;
                    break
                }
                o || (o = r)
            }
            a = a || o
        }
        if (a) return a !== l[0] && l.unshift(a), n[a]
    }

    function J(e, t, n, i) {
        var r, a, o, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
        for (a = c.shift(); a;)
            if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = c.shift())
                if ("*" === a) a = l;
                else if ("*" !== l && l !== a) {
            if (o = u[l + " " + a] || u["* " + a], !o)
                for (r in u)
                    if (s = r.split(" "), s[1] === a && (o = u[l + " " + s[0]] || u["* " + s[0]])) {
                        o === !0 ? o = u[r] : u[r] !== !0 && (a = s[0], c.unshift(s[1]));
                        break
                    }
            if (o !== !0)
                if (o && e.throws) t = o(t);
                else try {
                    t = o(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: o ? e : "No conversion from " + l + " to " + a
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function K(e) {
        return he.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var ee = [],
        te = e.document,
        ne = Object.getPrototypeOf,
        ie = ee.slice,
        re = ee.concat,
        ae = ee.push,
        oe = ee.indexOf,
        se = {},
        le = se.toString,
        ue = se.hasOwnProperty,
        ce = ue.toString,
        de = ce.call(Object),
        fe = {},
        pe = "3.1.1",
        he = function(e, t) {
            return new he.fn.init(e, t)
        },
        me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ve = /^-ms-/,
        ge = /-([a-z])/g,
        ye = function(e, t) {
            return t.toUpperCase()
        };
    he.fn = he.prototype = {
        jquery: pe,
        constructor: he,
        length: 0,
        toArray: function() {
            return ie.call(this)
        },
        get: function(e) {
            return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = he.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return he.each(this, e)
        },
        map: function(e) {
            return this.pushStack(he.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ae,
        sort: ee.sort,
        splice: ee.splice
    }, he.extend = he.fn.extend = function() {
        var e, t, n, i, r, a, o = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || he.isFunction(o) || (o = {}), s === l && (o = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = o[t], i = e[t], o !== i && (u && i && (he.isPlainObject(i) || (r = he.isArray(i))) ? (r ? (r = !1, a = n && he.isArray(n) ? n : []) : a = n && he.isPlainObject(n) ? n : {}, o[t] = he.extend(u, a, i)) : void 0 !== i && (o[t] = i));
        return o
    }, he.extend({
        expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === he.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = he.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== le.call(e)) && (!(t = ne(e)) || (n = ue.call(t, "constructor") && t.constructor, "function" == typeof n && ce.call(n) === de))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? se[le.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            n(e)
        },
        camelCase: function(e) {
            return e.replace(ve, "ms-").replace(ge, ye)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, r = 0;
            if (i(e))
                for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
            else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(me, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : ae.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : oe.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i, r = [], a = 0, o = e.length, s = !n; a < o; a++) i = !t(e[a], a), i !== s && r.push(e[a]);
            return r
        },
        map: function(e, t, n) {
            var r, a, o = 0,
                s = [];
            if (i(e))
                for (r = e.length; o < r; o++) a = t(e[o], o, n), null != a && s.push(a);
            else
                for (o in e) a = t(e[o], o, n), null != a && s.push(a);
            return re.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            if ("string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e)) return i = ie.call(arguments, 2), r = function() {
                return e.apply(t || this, i.concat(ie.call(arguments)))
            }, r.guid = e.guid = e.guid || he.guid++, r
        },
        now: Date.now,
        support: fe
    }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        se["[object " + t + "]"] = t.toLowerCase()
    });
    var be = function(e) {
        function t(e, t, n, i) {
            var r, a, o, s, l, u, c, f = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!i && ((t ? t.ownerDocument || t : _) !== D && M(t), t = t || D, I)) {
                if (11 !== h && (l = ge.exec(e)))
                    if (r = l[1]) {
                        if (9 === h) {
                            if (!(o = t.getElementById(r))) return n;
                            if (o.id === r) return n.push(o), n
                        } else if (f && (o = f.getElementById(r)) && $(t, o) && o.id === r) return n.push(o), n
                    } else {
                        if (l[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = l[3]) && C.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(r)), n
                    }
                if (C.qsa && !X[e + " "] && (!L || !L.test(e))) {
                    if (1 !== h) f = t, c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(xe, Ce) : t.setAttribute("id", s = R), u = E(e), a = u.length; a--;) u[a] = "#" + s + " " + p(u[a]);
                        c = u.join(","), f = ye.test(e) && d(t.parentNode) || t
                    }
                    if (c) try {
                        return J.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {} finally {
                        s === R && t.removeAttribute("id")
                    }
                }
            }
            return O(e.replace(se, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[R] = !0, e
        }

        function r(e) {
            var t = D.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function a(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) k.attrHandle[n[i]] = t
        }

        function o(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function c(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, a = e([], n.length, t), o = a.length; o--;) n[r = a[o]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function d(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function f() {}

        function p(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function h(e, t, n) {
            var i = t.dir,
                r = t.next,
                a = r || i,
                o = n && "parentNode" === a,
                s = W++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || o) return e(t, n, r);
                return !1
            } : function(t, n, l) {
                var u, c, d, f = [z, s];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || o) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || o)
                            if (d = t[R] || (t[R] = {}), c = d[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((u = c[a]) && u[0] === z && u[1] === s) return f[2] = u[2];
                                if (c[a] = f, f[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function m(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function v(e, n, i) {
            for (var r = 0, a = n.length; r < a; r++) t(e, n[r], i);
            return i
        }

        function g(e, t, n, i, r) {
            for (var a, o = [], s = 0, l = e.length, u = null != t; s < l; s++)(a = e[s]) && (n && !n(a, i, r) || (o.push(a), u && t.push(s)));
            return o
        }

        function y(e, t, n, r, a, o) {
            return r && !r[R] && (r = y(r)), a && !a[R] && (a = y(a, o)), i(function(i, o, s, l) {
                var u, c, d, f = [],
                    p = [],
                    h = o.length,
                    m = i || v(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? m : g(m, f, e, s, l),
                    b = n ? a || (i ? e : h || r) ? [] : o : y;
                if (n && n(y, b, s, l), r)
                    for (u = g(b, p), r(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
                if (i) {
                    if (a || e) {
                        if (a) {
                            for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                            a(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (u = a ? ee(i, d) : f[c]) > -1 && (i[u] = !(o[u] = d))
                    }
                } else b = g(b === o ? b.splice(h, b.length) : b), a ? a(null, o, b, l) : J.apply(o, b)
            })
        }

        function b(e) {
            for (var t, n, i, r = e.length, a = k.relative[e[0].type], o = a || k.relative[" "], s = a ? 1 : 0, l = h(function(e) {
                    return e === t
                }, o, !0), u = h(function(e) {
                    return ee(t, e) > -1
                }, o, !0), c = [function(e, n, i) {
                    var r = !a && (i || n !== P) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return t = null, r
                }]; s < r; s++)
                if (n = k.relative[e[s].type]) c = [h(m(c), n)];
                else {
                    if (n = k.filter[e[s].type].apply(null, e[s].matches), n[R]) {
                        for (i = ++s; i < r && !k.relative[e[i].type]; i++);
                        return y(s > 1 && m(c), s > 1 && p(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, s < i && b(e.slice(s, i)), i < r && b(e = e.slice(i)), i < r && p(e))
                    }
                    c.push(n)
                }
            return m(c)
        }

        function w(e, n) {
            var r = n.length > 0,
                a = e.length > 0,
                o = function(i, o, s, l, u) {
                    var c, d, f, p = 0,
                        h = "0",
                        m = i && [],
                        v = [],
                        y = P,
                        b = i || a && k.find.TAG("*", u),
                        w = z += null == y ? 1 : Math.random() || .1,
                        x = b.length;
                    for (u && (P = o === D || o || u); h !== x && null != (c = b[h]); h++) {
                        if (a && c) {
                            for (d = 0, o || c.ownerDocument === D || (M(c), s = !I); f = e[d++];)
                                if (f(c, o || D, s)) {
                                    l.push(c);
                                    break
                                }
                            u && (z = w)
                        }
                        r && ((c = !f && c) && p--, i && m.push(c))
                    }
                    if (p += h, r && h !== p) {
                        for (d = 0; f = n[d++];) f(m, v, o, s);
                        if (i) {
                            if (p > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = G.call(l));
                            v = g(v)
                        }
                        J.apply(l, v), u && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (z = w, P = y), m
                };
            return r ? i(o) : o
        }
        var x, C, k, T, S, E, A, O, P, q, j, M, D, N, I, L, H, F, $, R = "sizzle" + 1 * new Date,
            _ = e.document,
            z = 0,
            W = 0,
            V = n(),
            B = n(),
            X = n(),
            Q = function(e, t) {
                return e === t && (j = !0), 0
            },
            Y = {}.hasOwnProperty,
            U = [],
            G = U.pop,
            Z = U.push,
            J = U.push,
            K = U.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            oe = new RegExp(ne + "+", "g"),
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(ae),
            fe = new RegExp("^" + ie + "$"),
            pe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Ce = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            ke = function() {
                M()
            },
            Te = h(function(e) {
                return e.disabled === !0 && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            J.apply(U = K.call(_.childNodes), _.childNodes), U[_.childNodes.length].nodeType
        } catch (e) {
            J = {
                apply: U.length ? function(e, t) {
                    Z.apply(e, K.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        C = t.support = {}, S = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, M = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : _;
            return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, N = D.documentElement, I = !S(D), _ !== D && (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)), C.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), C.getElementsByTagName = r(function(e) {
                return e.appendChild(D.createComment("")), !e.getElementsByTagName("*").length
            }), C.getElementsByClassName = ve.test(D.getElementsByClassName), C.getById = r(function(e) {
                return N.appendChild(e).id = R, !D.getElementsByName || !D.getElementsByName(R).length
            }), C.getById ? (k.filter.ID = function(e) {
                var t = e.replace(be, we);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, k.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && I) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (k.filter.ID = function(e) {
                var t = e.replace(be, we);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, k.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && I) {
                    var n, i, r, a = t.getElementById(e);
                    if (a) {
                        if (n = a.getAttributeNode("id"), n && n.value === e) return [a];
                        for (r = t.getElementsByName(e), i = 0; a = r[i++];)
                            if (n = a.getAttributeNode("id"), n && n.value === e) return [a]
                    }
                    return []
                }
            }), k.find.TAG = C.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : C.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    r = 0,
                    a = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = a[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return a
            }, k.find.CLASS = C.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && I) return t.getElementsByClassName(e)
            }, H = [], L = [], (C.qsa = ve.test(D.querySelectorAll)) && (r(function(e) {
                N.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + R + "-]").length || L.push("~="), e.querySelectorAll(":checked").length || L.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || L.push(".#.+[+~]")
            }), r(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = D.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"), N.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
            })), (C.matchesSelector = ve.test(F = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function(e) {
                C.disconnectedMatch = F.call(e, "*"), F.call(e, "[s!='']:x"), H.push("!=", ae)
            }), L = L.length && new RegExp(L.join("|")), H = H.length && new RegExp(H.join("|")), t = ve.test(N.compareDocumentPosition), $ = t || ve.test(N.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, Q = t ? function(e, t) {
                if (e === t) return j = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !C.sortDetached && t.compareDocumentPosition(e) === n ? e === D || e.ownerDocument === _ && $(_, e) ? -1 : t === D || t.ownerDocument === _ && $(_, t) ? 1 : q ? ee(q, e) - ee(q, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return j = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    a = t.parentNode,
                    s = [e],
                    l = [t];
                if (!r || !a) return e === D ? -1 : t === D ? 1 : r ? -1 : a ? 1 : q ? ee(q, e) - ee(q, t) : 0;
                if (r === a) return o(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[i] === l[i];) i++;
                return i ? o(s[i], l[i]) : s[i] === _ ? -1 : l[i] === _ ? 1 : 0
            }, D) : D
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== D && M(e), n = n.replace(ce, "='$1']"), C.matchesSelector && I && !X[n + " "] && (!H || !H.test(n)) && (!L || !L.test(n))) try {
                var i = F.call(e, n);
                if (i || C.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {}
            return t(n, D, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== D && M(e), $(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== D && M(e);
            var n = k.attrHandle[t.toLowerCase()],
                i = n && Y.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
            return void 0 !== i ? i : C.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.escape = function(e) {
            return (e + "").replace(xe, Ce)
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (j = !C.detectDuplicates, q = !C.sortStable && e.slice(0), e.sort(Q), j) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return q = null, e
        }, T = t.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += T(t);
            return n
        }, k = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, we).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = V[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && V(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var a = t.attr(r, e);
                        return null == a ? "!=" === n : !n || (a += "", "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (a === i || a.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var a = "nth" !== e.slice(0, 3),
                        o = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, d, f, p, h, m = a !== o ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            g = s && t.nodeName.toLowerCase(),
                            y = !l && !s,
                            b = !1;
                        if (v) {
                            if (a) {
                                for (; m;) {
                                    for (f = t; f = f[m];)
                                        if (s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [o ? v.firstChild : v.lastChild], o && y) {
                                for (f = v, d = f[R] || (f[R] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === z && u[1], b = p && u[2], f = p && v.childNodes[p]; f = ++p && f && f[m] || (b = p = 0) || h.pop();)
                                    if (1 === f.nodeType && ++b && f === t) {
                                        c[e] = [z, p, b];
                                        break
                                    }
                            } else if (y && (f = t, d = f[R] || (f[R] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === z && u[1], b = p), b === !1)
                                for (;
                                    (f = ++p && f && f[m] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== g : 1 !== f.nodeType) || !++b || (y && (d = f[R] || (f[R] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), c[e] = [z, b]), f !== t)););
                            return b -= r, b === i || b % i === 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, a = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return a[R] ? a(n) : a.length > 1 ? (r = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = a(e, n), o = r.length; o--;) i = ee(e, r[o]), e[i] = !(t[i] = r[o])
                    }) : function(e) {
                        return a(e, 0, r)
                    }) : a
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        r = A(e.replace(se, "$1"));
                    return r[R] ? i(function(e, t, n, i) {
                        for (var a, o = r(e, null, i, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
                    }) : function(e, i, a) {
                        return t[0] = e, r(t, null, a, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(be, we),
                        function(t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1;
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === N
                },
                focus: function(e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: u(!1),
                disabled: u(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !k.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) k.pseudos[x] = s(x);
        for (x in {
                submit: !0,
                reset: !0
            }) k.pseudos[x] = l(x);
        return f.prototype = k.filters = k.pseudos, k.setFilters = new f, E = t.tokenize = function(e, n) {
            var i, r, a, o, s, l, u, c = B[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = k.preFilter; s;) {
                i && !(r = le.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(a = [])), i = !1, (r = ue.exec(s)) && (i = r.shift(), a.push({
                    value: i,
                    type: r[0].replace(se, " ")
                }), s = s.slice(i.length));
                for (o in k.filter) !(r = pe[o].exec(s)) || u[o] && !(r = u[o](r)) || (i = r.shift(), a.push({
                    value: i,
                    type: o,
                    matches: r
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? t.error(e) : B(e, l).slice(0)
        }, A = t.compile = function(e, t) {
            var n, i = [],
                r = [],
                a = X[e + " "];
            if (!a) {
                for (t || (t = E(e)), n = t.length; n--;) a = b(t[n]), a[R] ? i.push(a) : r.push(a);
                a = X(e, w(r, i)), a.selector = e
            }
            return a
        }, O = t.select = function(e, t, n, i) {
            var r, a, o, s, l, u = "function" == typeof e && e,
                c = !i && E(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (a = c[0] = c[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && 9 === t.nodeType && I && k.relative[a[1].type]) {
                    if (t = (k.find.ID(o.matches[0].replace(be, we), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(a.shift().value.length)
                }
                for (r = pe.needsContext.test(e) ? 0 : a.length; r-- && (o = a[r], !k.relative[s = o.type]);)
                    if ((l = k.find[s]) && (i = l(o.matches[0].replace(be, we), ye.test(a[0].type) && d(t.parentNode) || t))) {
                        if (a.splice(r, 1), e = i.length && p(a), !e) return J.apply(n, i), n;
                        break
                    }
            }
            return (u || A(e, c))(i, t, !I, n, !t || ye.test(e) && d(t.parentNode) || t), n
        }, C.sortStable = R.split("").sort(Q).join("") === R, C.detectDuplicates = !!j, M(), C.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(D.createElement("fieldset"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), C.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || a("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || a(te, function(e, t, n) {
            var i;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    he.find = be, he.expr = be.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = be.uniqueSort, he.text = be.getText, he.isXMLDoc = be.isXML, he.contains = be.contains, he.escapeSelector = be.escape;
    var we = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && he(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        xe = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Ce = he.expr.match.needsContext,
        ke = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Te = /^.[^:#\[\.,]*$/;
    he.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? he.find.matchesSelector(i, e) ? [i] : [] : he.find.matches(e, he.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, he.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(he(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (he.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) he.find(e, r[t], n);
            return i > 1 ? he.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && Ce.test(e) ? he(e) : e || [], !1).length
        }
    });
    var Se, Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Ae = he.fn.init = function(e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || Se, "string" == typeof e) {
                if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ee.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), ke.test(i[1]) && he.isPlainObject(t))
                        for (i in t) he.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return r = te.getElementById(i[2]), r && (this[0] = r, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
        };
    Ae.prototype = he.fn, Se = he(te);
    var Oe = /^(?:parents|prev(?:Until|All))/,
        Pe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    he.fn.extend({
        has: function(e) {
            var t = he(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (he.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                a = [],
                o = "string" != typeof e && he(e);
            if (!Ce.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
                            a.push(n);
                            break
                        }
            return this.pushStack(a.length > 1 ? he.uniqueSort(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? oe.call(he(e), this[0]) : oe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), he.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return we(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return we(e, "parentNode", n)
        },
        next: function(e) {
            return a(e, "nextSibling")
        },
        prev: function(e) {
            return a(e, "previousSibling")
        },
        nextAll: function(e) {
            return we(e, "nextSibling")
        },
        prevAll: function(e) {
            return we(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return we(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return we(e, "previousSibling", n)
        },
        siblings: function(e) {
            return xe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return xe(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || he.merge([], e.childNodes)
        }
    }, function(e, t) {
        he.fn[e] = function(n, i) {
            var r = he.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = he.filter(i, r)), this.length > 1 && (Pe[e] || he.uniqueSort(r), Oe.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var qe = /[^\x20\t\r\n\f]+/g;
    he.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : he.extend({}, e);
        var t, n, i, r, a = [],
            s = [],
            l = -1,
            u = function() {
                for (r = e.once, i = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < a.length;) a[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = a.length, n = !1);
                e.memory || (n = !1), t = !1, r && (a = n ? [] : "")
            },
            c = {
                add: function() {
                    return a && (n && !t && (l = a.length - 1, s.push(n)), function t(n) {
                        he.each(n, function(n, i) {
                            he.isFunction(i) ? e.unique && c.has(i) || a.push(i) : i && i.length && "string" !== he.type(i) && t(i)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function() {
                    return he.each(arguments, function(e, t) {
                        for (var n;
                            (n = he.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? he.inArray(e, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return r = s = [], a = n = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return r = s = [], n || t || (a = n = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || u()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, he.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
                    ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return he.Deferred(function(t) {
                            he.each(n, function(n, i) {
                                var r = he.isFunction(e[i[4]]) && e[i[4]];
                                a[i[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, i, r) {
                        function a(t, n, i, r) {
                            return function() {
                                var u = this,
                                    c = arguments,
                                    d = function() {
                                        var e, d;
                                        if (!(t < o)) {
                                            if (e = i.apply(u, c), e === n.promise()) throw new TypeError("Thenable self-resolution");
                                            d = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(d) ? r ? d.call(e, a(o, n, s, r), a(o, n, l, r)) : (o++, d.call(e, a(o, n, s, r), a(o, n, l, r), a(o, n, s, n.notifyWith))) : (i !== s && (u = void 0, c = [e]), (r || n.resolveWith)(u, c))
                                        }
                                    },
                                    f = r ? d : function() {
                                        try {
                                            d()
                                        } catch (e) {
                                            he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, f.stackTrace), t + 1 >= o && (i !== l && (u = void 0, c = [e]), n.rejectWith(u, c))
                                        }
                                    };
                                t ? f() : (he.Deferred.getStackHook && (f.stackTrace = he.Deferred.getStackHook()), e.setTimeout(f))
                            }
                        }
                        var o = 0;
                        return he.Deferred(function(e) {
                            n[0][3].add(a(0, e, he.isFunction(r) ? r : s, e.notifyWith)), n[1][3].add(a(0, e, he.isFunction(t) ? t : s)), n[2][3].add(a(0, e, he.isFunction(i) ? i : l))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? he.extend(e, r) : r
                    }
                },
                a = {};
            return he.each(n, function(e, t) {
                var o = t[2],
                    s = t[5];
                r[t[1]] = o.add, s && o.add(function() {
                    i = s
                }, n[3 - e][2].disable, n[0][2].lock), o.add(t[3].fire), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = o.fireWith
            }), r.promise(a), t && t.call(a, a), a
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                r = ie.call(arguments),
                a = he.Deferred(),
                o = function(e) {
                    return function(n) {
                        i[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || a.resolveWith(i, r)
                    }
                };
            if (t <= 1 && (u(e, a.done(o(n)).resolve, a.reject), "pending" === a.state() || he.isFunction(r[n] && r[n].then))) return a.then();
            for (; n--;) u(r[n], o(n), a.reject);
            return a.promise()
        }
    });
    var je = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    he.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && je.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, he.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var Me = he.Deferred();
    he.fn.ready = function(e) {
        return Me.then(e).catch(function(e) {
            he.readyException(e)
        }), this
    }, he.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? he.readyWait++ : he.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --he.readyWait : he.isReady) || (he.isReady = !0, e !== !0 && --he.readyWait > 0 || Me.resolveWith(te, [he]))
        }
    }), he.ready.then = Me.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", c), e.addEventListener("load", c));
    var De = function(e, t, n, i, r, a, o) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === he.type(n)) {
                r = !0;
                for (s in n) De(e, t, s, n[s], !0, a, o)
            } else if (void 0 !== i && (r = !0, he.isFunction(i) || (o = !0), u && (o ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(he(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, o ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : a
        },
        Ne = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    d.uid = 1, d.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Ne(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[he.camelCase(t)] = n;
            else
                for (i in t) r[he.camelCase(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    he.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in i ? [t] : t.match(qe) || []), n = t.length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || he.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !he.isEmptyObject(t)
        }
    };
    var Ie = new d,
        Le = new d,
        He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Fe = /[A-Z]/g;
    he.extend({
        hasData: function(e) {
            return Le.hasData(e) || Ie.hasData(e)
        },
        data: function(e, t, n) {
            return Le.access(e, t, n)
        },
        removeData: function(e, t) {
            Le.remove(e, t)
        },
        _data: function(e, t, n) {
            return Ie.access(e, t, n)
        },
        _removeData: function(e, t) {
            Ie.remove(e, t)
        }
    }), he.fn.extend({
        data: function(e, t) {
            var n, i, r, a = this[0],
                o = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (r = Le.get(a), 1 === a.nodeType && !Ie.get(a, "hasDataAttrs"))) {
                    for (n = o.length; n--;) o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = he.camelCase(i.slice(5)), p(a, i, r[i])));
                    Ie.set(a, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                Le.set(this, e)
            }) : De(this, function(t) {
                var n;
                if (a && void 0 === t) {
                    if (n = Le.get(a, e), void 0 !== n) return n;
                    if (n = p(a, e), void 0 !== n) return n
                } else this.each(function() {
                    Le.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Le.remove(this, e)
            })
        }
    }), he.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Ie.get(e, t), n && (!i || he.isArray(n) ? i = Ie.access(e, t, he.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = he.queue(e, t),
                i = n.length,
                r = n.shift(),
                a = he._queueHooks(e, t),
                o = function() {
                    he.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, o, a)), !i && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Ie.get(e, n) || Ie.access(e, n, {
                empty: he.Callbacks("once memory").add(function() {
                    Ie.remove(e, [t + "queue", n])
                })
            })
        }
    }), he.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = he.queue(this, e, t);
                he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                he.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = he.Deferred(),
                a = this,
                o = this.length,
                s = function() {
                    --i || r.resolveWith(a, [a])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) n = Ie.get(a[o], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var $e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Re = new RegExp("^(?:([+-])=|)(" + $e + ")([a-z%]*)$", "i"),
        _e = ["Top", "Right", "Bottom", "Left"],
        ze = function(e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
        },
        We = function(e, t, n, i) {
            var r, a, o = {};
            for (a in t) o[a] = e.style[a], e.style[a] = t[a];
            r = n.apply(e, i || []);
            for (a in t) e.style[a] = o[a];
            return r
        },
        Ve = {};
    he.fn.extend({
        show: function() {
            return v(this, !0)
        },
        hide: function() {
            return v(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ze(this) ? he(this).show() : he(this).hide()
            })
        }
    });
    var Be = /^(?:checkbox|radio)$/i,
        Xe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Qe = /^$|\/(?:java|ecma)script/i,
        Ye = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td;
    var Ue = /<|&#?\w+;/;
    ! function() {
        var e = te.createDocumentFragment(),
            t = e.appendChild(te.createElement("div")),
            n = te.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), fe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ge = te.documentElement,
        Ze = /^key/,
        Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ke = /^([^.]*)(?:\.(.+)|)/;
    he.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var a, o, s, l, u, c, d, f, p, h, m, v = Ie.get(e);
            if (v)
                for (n.handler && (a = n, n = a.handler, r = a.selector), r && he.find.matchesSelector(Ge, r), n.guid || (n.guid = he.guid++), (l = v.events) || (l = v.events = {}), (o = v.handle) || (o = v.handle = function(t) {
                        return "undefined" != typeof he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(qe) || [""], u = t.length; u--;) s = Ke.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p && (d = he.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, d = he.event.special[p] || {}, c = he.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && he.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, a), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, d.setup && d.setup.call(e, i, h, o) !== !1 || e.addEventListener && e.addEventListener(p, o)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, c) : f.push(c), he.event.global[p] = !0)
        },
        remove: function(e, t, n, i, r) {
            var a, o, s, l, u, c, d, f, p, h, m, v = Ie.hasData(e) && Ie.get(e);
            if (v && (l = v.events)) {
                for (t = (t || "").match(qe) || [""], u = t.length; u--;)
                    if (s = Ke.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = he.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = f.length; a--;) c = f[a], !r && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(a, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
                        o && !f.length && (d.teardown && d.teardown.call(e, h, v.handle) !== !1 || he.removeEvent(e, p, v.handle), delete l[p])
                    } else
                        for (p in l) he.event.remove(e, p + t[u], n, i, !0);
                he.isEmptyObject(l) && Ie.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, a, o, s = he.event.fix(e),
                l = new Array(arguments.length),
                u = (Ie.get(this, "events") || {})[s.type] || [],
                c = he.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, s) !== !1) {
                for (o = he.event.handlers.call(this, s, u), t = 0;
                    (r = o[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = r.elem, n = 0;
                        (a = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(a.namespace) || (s.handleObj = a, s.data = a.data, i = ((he.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, l), void 0 !== i && (s.result = i) === !1 && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, a, o, s = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || u.disabled !== !0)) {
                        for (a = [], o = {}, n = 0; n < l; n++) i = t[n], r = i.selector + " ", void 0 === o[r] && (o[r] = i.needsContext ? he(r, this).index(u) > -1 : he.find(r, this, null, [u]).length), o[r] && a.push(i);
                        a.length && s.push({
                            elem: u,
                            handlers: a
                        })
                    }
            return u = this, l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(he.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: he.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[he.expando] ? e : new he.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== C() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === C() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && he.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return he.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, he.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, he.Event = function(e, t) {
        return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? w : x, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), void(this[he.expando] = !0)) : new he.Event(e, t)
    }, he.Event.prototype = {
        constructor: he.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, he.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ze.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Je.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, he.event.addProp), he.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        he.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    a = e.handleObj;
                return r && (r === i || he.contains(i, r)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), he.fn.extend({
        on: function(e, t, n, i) {
            return k(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return k(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, he(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = x), this.each(function() {
                he.event.remove(this, e, n, t)
            })
        }
    });
    var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        tt = /<script|<style|<link/i,
        nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        it = /^true\/(.*)/,
        rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    he.extend({
        htmlPrefilter: function(e) {
            return e.replace(et, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, a, o, s = e.cloneNode(!0),
                l = he.contains(e.ownerDocument, e);
            if (!(fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
                for (o = g(s), a = g(e), i = 0, r = a.length; i < r; i++) O(a[i], o[i]);
            if (t)
                if (n)
                    for (a = a || g(e), o = o || g(s), i = 0, r = a.length; i < r; i++) A(a[i], o[i]);
                else A(e, s);
            return o = g(s, "script"), o.length > 0 && y(o, !l && g(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, i, r = he.event.special, a = 0; void 0 !== (n = e[a]); a++)
                if (Ne(n)) {
                    if (t = n[Ie.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? he.event.remove(n, i) : he.removeEvent(n, i, t.handle);
                        n[Ie.expando] = void 0
                    }
                    n[Le.expando] && (n[Le.expando] = void 0)
                }
        }
    }), he.fn.extend({
        detach: function(e) {
            return q(this, e, !0)
        },
        remove: function(e) {
            return q(this, e)
        },
        text: function(e) {
            return De(this, function(e) {
                return void 0 === e ? he.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return P(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = T(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return P(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = T(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return P(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return P(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(g(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return he.clone(this, e, t)
            })
        },
        html: function(e) {
            return De(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !tt.test(e) && !Ye[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = he.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (he.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return P(this, arguments, function(t) {
                var n = this.parentNode;
                he.inArray(this, e) < 0 && (he.cleanData(g(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), he.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        he.fn[e] = function(e) {
            for (var n, i = [], r = he(e), a = r.length - 1, o = 0; o <= a; o++) n = o === a ? this : this.clone(!0), he(r[o])[t](n), ae.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var at = /^margin/,
        ot = new RegExp("^(" + $e + ")(?!px)[a-z%]+$", "i"),
        st = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    ! function() {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ge.appendChild(o);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top, a = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", r = "4px" === t.marginRight, Ge.removeChild(o), s = null
            }
        }
        var n, i, r, a, o = te.createElement("div"),
            s = te.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", fe.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(s), he.extend(fe, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return t(), i
            },
            pixelMarginRight: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), a
            }
        }))
    }();
    var lt = /^(none|table(?!-c[ea]).+)/,
        ut = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ct = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        dt = ["Webkit", "Moz", "ms"],
        ft = te.createElement("div").style;
    he.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = j(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, o, s = he.camelCase(t),
                    l = e.style;
                return t = he.cssProps[s] || (he.cssProps[s] = D(s) || s), o = he.cssHooks[t] || he.cssHooks[s], void 0 === n ? o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : l[t] : (a = typeof n, "string" === a && (r = Re.exec(n)) && r[1] && (n = h(e, t, r), a = "number"), null != n && n === n && ("number" === a && (n += r && r[3] || (he.cssNumber[s] ? "" : "px")), fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, i)) || (l[t] = n)), void 0)
            }
        },
        css: function(e, t, n, i) {
            var r, a, o, s = he.camelCase(t);
            return t = he.cssProps[s] || (he.cssProps[s] = D(s) || s), o = he.cssHooks[t] || he.cssHooks[s], o && "get" in o && (r = o.get(e, !0, n)), void 0 === r && (r = j(e, t, i)), "normal" === r && t in ct && (r = ct[t]), "" === n || n ? (a = parseFloat(r), n === !0 || isFinite(a) ? a || 0 : r) : r
        }
    }), he.each(["height", "width"], function(e, t) {
        he.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !lt.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? L(e, t, i) : We(e, ut, function() {
                    return L(e, t, i)
                })
            },
            set: function(e, n, i) {
                var r, a = i && st(e),
                    o = i && I(e, t, i, "border-box" === he.css(e, "boxSizing", !1, a), a);
                return o && (r = Re.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = he.css(e, t)), N(e, n, o)
            }
        }
    }), he.cssHooks.marginLeft = M(fe.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(j(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), he.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        he.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + _e[i] + t] = a[i] || a[i - 2] || a[0];
                return r
            }
        }, at.test(e) || (he.cssHooks[e + t].set = N)
    }), he.fn.extend({
        css: function(e, t) {
            return De(this, function(e, t, n) {
                var i, r, a = {},
                    o = 0;
                if (he.isArray(t)) {
                    for (i = st(e), r = t.length; o < r; o++) a[t[o]] = he.css(e, t[o], !1, i);
                    return a
                }
                return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), he.Tween = H, H.prototype = {
        constructor: H,
        init: function(e, t, n, i, r, a) {
            this.elem = e, this.prop = n, this.easing = r || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (he.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = H.propHooks[this.prop];
            return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, he.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, he.fx = H.prototype.init, he.fx.step = {};
    var pt, ht, mt = /^(?:toggle|show|hide)$/,
        vt = /queueHooks$/;
    he.Animation = he.extend(V, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return h(n.elem, e, Re.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(qe);
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], V.tweeners[n] = V.tweeners[n] || [], V.tweeners[n].unshift(t)
            },
            prefilters: [z],
            prefilter: function(e, t) {
                t ? V.prefilters.unshift(e) : V.prefilters.push(e)
            }
        }), he.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? he.extend({}, e) : {
                complete: n || !n && t || he.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !he.isFunction(t) && t
            };
            return he.fx.off || te.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in he.fx.speeds ? i.duration = he.fx.speeds[i.duration] : i.duration = he.fx.speeds._default), null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                he.isFunction(i.old) && i.old.call(this), i.queue && he.dequeue(this, i.queue)
            }, i
        }, he.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(ze).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = he.isEmptyObject(e),
                    a = he.speed(t, n, i),
                    o = function() {
                        var t = V(this, he.extend({}, e), a);
                        (r || Ie.get(this, "finish")) && t.stop(!0)
                    };
                return o.finish = o, r || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        a = he.timers,
                        o = Ie.get(this);
                    if (r) o[r] && o[r].stop && i(o[r]);
                    else
                        for (r in o) o[r] && o[r].stop && vt.test(r) && i(o[r]);
                    for (r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n), t = !1, a.splice(r, 1));
                    !t && n || he.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = Ie.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        a = he.timers,
                        o = i ? i.length : 0;
                    for (n.finish = !0, he.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                    for (t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), he.each(["toggle", "show", "hide"], function(e, t) {
            var n = he.fn[t];
            he.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, i, r)
            }
        }), he.each({
            slideDown: R("show"),
            slideUp: R("hide"),
            slideToggle: R("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            he.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), he.timers = [], he.fx.tick = function() {
            var e, t = 0,
                n = he.timers;
            for (pt = he.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || he.fx.stop(), pt = void 0
        }, he.fx.timer = function(e) {
            he.timers.push(e), e() ? he.fx.start() : he.timers.pop()
        }, he.fx.interval = 13, he.fx.start = function() {
            ht || (ht = e.requestAnimationFrame ? e.requestAnimationFrame(F) : e.setInterval(he.fx.tick, he.fx.interval))
        }, he.fx.stop = function() {
            e.cancelAnimationFrame ? e.cancelAnimationFrame(ht) : e.clearInterval(ht), ht = null
        }, he.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, he.fn.delay = function(t, n) {
            return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(r)
                }
            })
        },
        function() {
            var e = te.createElement("input"),
                t = te.createElement("select"),
                n = t.appendChild(te.createElement("option"));
            e.type = "checkbox", fe.checkOn = "" !== e.value, fe.optSelected = n.selected, e = te.createElement("input"), e.value = "t", e.type = "radio", fe.radioValue = "t" === e.value
        }();
    var gt, yt = he.expr.attrHandle;
    he.fn.extend({
        attr: function(e, t) {
            return De(this, he.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                he.removeAttr(this, e)
            })
        }
    }), he.extend({
        attr: function(e, t, n) {
            var i, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return "undefined" == typeof e.getAttribute ? he.prop(e, t, n) : (1 === a && he.isXMLDoc(e) || (r = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? gt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = he.find.attr(e, t), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!fe.radioValue && "radio" === t && he.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(qe);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), gt = {
        set: function(e, t, n) {
            return t === !1 ? he.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = yt[t] || he.find.attr;
        yt[t] = function(e, t, i) {
            var r, a, o = t.toLowerCase();
            return i || (a = yt[o], yt[o] = r, r = null != n(e, t, i) ? o : null, yt[o] = a), r
        }
    });
    var bt = /^(?:input|select|textarea|button)$/i,
        wt = /^(?:a|area)$/i;
    he.fn.extend({
        prop: function(e, t) {
            return De(this, he.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[he.propFix[e] || e]
            })
        }
    }), he.extend({
        prop: function(e, t, n) {
            var i, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return 1 === a && he.isXMLDoc(e) || (t = he.propFix[t] || t, r = he.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = he.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), fe.optSelected || (he.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        he.propFix[this.toLowerCase()] = this
    }), he.fn.extend({
        addClass: function(e) {
            var t, n, i, r, a, o, s, l = 0;
            if (he.isFunction(e)) return this.each(function(t) {
                he(this).addClass(e.call(this, t, X(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(qe) || []; n = this[l++];)
                    if (r = X(n), i = 1 === n.nodeType && " " + B(r) + " ") {
                        for (o = 0; a = t[o++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                        s = B(i), r !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, a, o, s, l = 0;
            if (he.isFunction(e)) return this.each(function(t) {
                he(this).removeClass(e.call(this, t, X(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(qe) || []; n = this[l++];)
                    if (r = X(n), i = 1 === n.nodeType && " " + B(r) + " ") {
                        for (o = 0; a = t[o++];)
                            for (; i.indexOf(" " + a + " ") > -1;) i = i.replace(" " + a + " ", " ");
                        s = B(i), r !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function(n) {
                he(this).toggleClass(e.call(this, n, X(this), t), t)
            }) : this.each(function() {
                var t, i, r, a;
                if ("string" === n)
                    for (i = 0, r = he(this), a = e.match(qe) || []; t = a[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = X(this), t && Ie.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ie.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + B(X(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var xt = /\r/g;
    he.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0]; {
                if (arguments.length) return i = he.isFunction(e), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, he(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : he.isArray(r) && (r = he.map(r, function(e) {
                        return null == e ? "" : e + ""
                    })), t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                });
                if (r) return t = he.valHooks[r.type] || he.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n)
            }
        }
    }), he.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = he.find.attr(e, "value");
                    return null != t ? t : B(he.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options,
                        a = e.selectedIndex,
                        o = "select-one" === e.type,
                        s = o ? null : [],
                        l = o ? a + 1 : r.length;
                    for (i = a < 0 ? l : o ? a : 0; i < l; i++)
                        if (n = r[i], (n.selected || i === a) && !n.disabled && (!n.parentNode.disabled || !he.nodeName(n.parentNode, "optgroup"))) {
                            if (t = he(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, a = he.makeArray(t), o = r.length; o--;) i = r[o], (i.selected = he.inArray(he.valHooks.option.get(i), a) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), a
                }
            }
        }
    }), he.each(["radio", "checkbox"], function() {
        he.valHooks[this] = {
            set: function(e, t) {
                if (he.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1
            }
        }, fe.checkOn || (he.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Ct = /^(?:focusinfocus|focusoutblur)$/;
    he.extend(he.event, {
        trigger: function(t, n, i, r) {
            var a, o, s, l, u, c, d, f = [i || te],
                p = ue.call(t, "type") ? t.type : t,
                h = ue.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = s = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !Ct.test(p + he.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, t = t[he.expando] ? t : new he.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : he.makeArray(n, [t]), d = he.event.special[p] || {}, r || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                if (!r && !d.noBubble && !he.isWindow(i)) {
                    for (l = d.delegateType || p, Ct.test(l + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), s = o;
                    s === (i.ownerDocument || te) && f.push(s.defaultView || s.parentWindow || e)
                }
                for (a = 0;
                    (o = f[a++]) && !t.isPropagationStopped();) t.type = a > 1 ? l : d.bindType || p, c = (Ie.get(o, "events") || {})[t.type] && Ie.get(o, "handle"), c && c.apply(o, n), c = u && o[u], c && c.apply && Ne(o) && (t.result = c.apply(o, n), t.result === !1 && t.preventDefault());
                return t.type = p, r || t.isDefaultPrevented() || d._default && d._default.apply(f.pop(), n) !== !1 || !Ne(i) || u && he.isFunction(i[p]) && !he.isWindow(i) && (s = i[u], s && (i[u] = null), he.event.triggered = p, i[p](), he.event.triggered = void 0, s && (i[u] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = he.extend(new he.Event, n, {
                type: e,
                isSimulated: !0
            });
            he.event.trigger(i, null, t)
        }
    }), he.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                he.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return he.event.trigger(e, t, n, !0)
        }
    }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        he.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), he.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), fe.focusin = "onfocusin" in e, fe.focusin || he.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            he.event.simulate(t, e.target, he.event.fix(e))
        };
        he.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = Ie.access(i, t);
                r || i.addEventListener(e, n, !0), Ie.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = Ie.access(i, t) - 1;
                r ? Ie.access(i, t, r) : (i.removeEventListener(e, n, !0), Ie.remove(i, t))
            }
        }
    });
    var kt = e.location,
        Tt = he.now(),
        St = /\?/;
    he.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n
    };
    var Et = /\[\]$/,
        At = /\r?\n/g,
        Ot = /^(?:submit|button|image|reset|file)$/i,
        Pt = /^(?:input|select|textarea|keygen)/i;
    he.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                var n = he.isFunction(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (he.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) Q(n, e[n], t, r);
        return i.join("&")
    }, he.fn.extend({
        serialize: function() {
            return he.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = he.prop(this, "elements");
                return e ? he.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !he(this).is(":disabled") && Pt.test(this.nodeName) && !Ot.test(e) && (this.checked || !Be.test(e))
            }).map(function(e, t) {
                var n = he(this).val();
                return null == n ? null : he.isArray(n) ? he.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                }
            }).get()
        }
    });
    var qt = /%20/g,
        jt = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Nt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        It = /^(?:GET|HEAD)$/,
        Lt = /^\/\//,
        Ht = {},
        Ft = {},
        $t = "*/".concat("*"),
        Rt = te.createElement("a");
    Rt.href = kt.href, he.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: kt.href,
            type: "GET",
            isLocal: Nt.test(kt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": he.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? G(G(e, he.ajaxSettings), t) : G(he.ajaxSettings, e)
        },
        ajaxPrefilter: Y(Ht),
        ajaxTransport: Y(Ft),
        ajax: function(t, n) {
            function i(t, n, i, s) {
                var u, f, p, w, x, C = n;
                c || (c = !0, l && e.clearTimeout(l), r = void 0, o = s || "", k.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (w = Z(h, k, i)), w = J(h, w, k, u), u ? (h.ifModified && (x = k.getResponseHeader("Last-Modified"), x && (he.lastModified[a] = x), x = k.getResponseHeader("etag"), x && (he.etag[a] = x)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state, f = w.data, p = w.error, u = !p)) : (p = C, !t && C || (C = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (n || C) + "", u ? g.resolveWith(m, [f, C, k]) : g.rejectWith(m, [k, C, p]), k.statusCode(b), b = void 0, d && v.trigger(u ? "ajaxSuccess" : "ajaxError", [k, h, u ? f : p]), y.fireWith(m, [k, C]), d && (v.trigger("ajaxComplete", [k, h]), --he.active || he.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, a, o, s, l, u, c, d, f, p, h = he.ajaxSetup({}, n),
                m = h.context || h,
                v = h.context && (m.nodeType || m.jquery) ? he(m) : he.event,
                g = he.Deferred(),
                y = he.Callbacks("once memory"),
                b = h.statusCode || {},
                w = {},
                x = {},
                C = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = Dt.exec(o);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) k.always(e[k.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || C;
                        return r && r.abort(t), i(0, t), this
                    }
                };
            if (g.promise(k), h.url = ((t || h.url || kt.href) + "").replace(Lt, kt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(qe) || [""], null == h.crossDomain) {
                u = te.createElement("a");
                try {
                    u.href = h.url, u.href = u.href, h.crossDomain = Rt.protocol + "//" + Rt.host != u.protocol + "//" + u.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), U(Ht, h, n, k), c) return k;
            d = he.event && h.global, d && 0 === he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !It.test(h.type), a = h.url.replace(jt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (p = h.url.slice(a.length), h.data && (a += (St.test(a) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (a = a.replace(Mt, "$1"), p = (St.test(a) ? "&" : "?") + "_=" + Tt++ + p), h.url = a + p), h.ifModified && (he.lastModified[a] && k.setRequestHeader("If-Modified-Since", he.lastModified[a]), he.etag[a] && k.setRequestHeader("If-None-Match", he.etag[a])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (f in h.headers) k.setRequestHeader(f, h.headers[f]);
            if (h.beforeSend && (h.beforeSend.call(m, k, h) === !1 || c)) return k.abort();
            if (C = "abort", y.add(h.complete), k.done(h.success), k.fail(h.error), r = U(Ft, h, n, k)) {
                if (k.readyState = 1, d && v.trigger("ajaxSend", [k, h]), c) return k;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    k.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, r.send(w, i)
                } catch (e) {
                    if (c) throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return k
        },
        getJSON: function(e, t, n) {
            return he.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return he.get(e, void 0, t, "script")
        }
    }), he.each(["get", "post"], function(e, t) {
        he[t] = function(e, n, i, r) {
            return he.isFunction(n) && (r = r || i, i = n, n = void 0), he.ajax(he.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, he.isPlainObject(e) && e))
        }
    }), he._evalUrl = function(e) {
        return he.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, he.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return he.isFunction(e) ? this.each(function(t) {
                he(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = he(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = he.isFunction(e);
            return this.each(function(n) {
                he(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                he(this).replaceWith(this.childNodes)
            }), this
        }
    }), he.expr.pseudos.hidden = function(e) {
        return !he.expr.pseudos.visible(e)
    }, he.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, he.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var _t = {
            0: 200,
            1223: 204
        },
        zt = he.ajaxSettings.xhr();
    fe.cors = !!zt && "withCredentials" in zt, fe.ajax = zt = !!zt, he.ajaxTransport(function(t) {
        var n, i;
        if (fe.cors || zt && !t.crossDomain) return {
            send: function(r, a) {
                var o, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) s[o] = t.xhrFields[o];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (o in r) s.setRequestHeader(o, r[o]);
                n = function(e) {
                    return function() {
                        n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? a(0, "error") : a(s.status, s.statusText) : a(_t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), he.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), he.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return he.globalEval(e), e
            }
        }
    }), he.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), he.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, r) {
                    t = he("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), te.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Wt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Wt.pop() || he.expando + "_" + Tt++;
            return this[e] = !0, e
        }
    }), he.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, a, o, s = t.jsonp !== !1 && (Vt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Vt, "$1" + r) : t.jsonp !== !1 && (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return o || he.error(r + " was not called"), o[0]
        }, t.dataTypes[0] = "json", a = e[r], e[r] = function() {
            o = arguments
        }, i.always(function() {
            void 0 === a ? he(e).removeProp(r) : e[r] = a, t[r] && (t.jsonpCallback = n.jsonpCallback, Wt.push(r)), o && he.isFunction(a) && a(o[0]), o = a = void 0
        }), "script"
    }), fe.createHTMLDocument = function() {
        var e = te.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), he.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, r, a;
        return t || (fe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = te.location.href, t.head.appendChild(i)) : t = te), r = ke.exec(e), a = !n && [], r ? [t.createElement(r[1])] : (r = b([e], t, a), a && a.length && he(a).remove(), he.merge([], r.childNodes))
    }, he.fn.load = function(e, t, n) {
        var i, r, a, o = this,
            s = e.indexOf(" ");
        return s > -1 && (i = B(e.slice(s)), e = e.slice(0, s)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), o.length > 0 && he.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            a = arguments, o.html(i ? he("<div>").append(he.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            o.each(function() {
                n.apply(this, a || [e.responseText, t, e])
            })
        }), this
    }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        he.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), he.expr.pseudos.animated = function(e) {
        return he.grep(he.timers, function(t) {
            return e === t.elem
        }).length
    }, he.offset = {
        setOffset: function(e, t, n) {
            var i, r, a, o, s, l, u, c = he.css(e, "position"),
                d = he(e),
                f = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), a = he.css(e, "top"), l = he.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (a + l).indexOf("auto") > -1, u ? (i = d.position(), o = i.top, r = i.left) : (o = parseFloat(a) || 0, r = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))), null != t.top && (f.top = t.top - s.top + o), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, he.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                he.offset.setOffset(this, e, t)
            });
            var t, n, i, r, a = this[0];
            if (a) return a.getClientRects().length ? (i = a.getBoundingClientRect(), i.width || i.height ? (r = a.ownerDocument, n = K(r), t = r.documentElement, {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), he.nodeName(e[0], "html") || (i = e.offset()), i = {
                    top: i.top + he.css(e[0], "borderTopWidth", !0),
                    left: i.left + he.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - i.top - he.css(n, "marginTop", !0),
                    left: t.left - i.left - he.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
                return e || Ge
            })
        }
    }), he.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        he.fn[e] = function(i) {
            return De(this, function(e, i, r) {
                var a = K(e);
                return void 0 === r ? a ? a[t] : e[i] : void(a ? a.scrollTo(n ? a.pageXOffset : r, n ? r : a.pageYOffset) : e[i] = r)
            }, e, i, arguments.length)
        }
    }), he.each(["top", "left"], function(e, t) {
        he.cssHooks[t] = M(fe.pixelPosition, function(e, n) {
            if (n) return n = j(e, t), ot.test(n) ? he(e).position()[t] + "px" : n
        })
    }), he.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        he.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            he.fn[i] = function(r, a) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    s = n || (r === !0 || a === !0 ? "margin" : "border");
                return De(this, function(t, n, r) {
                    var a;
                    return he.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === r ? he.css(t, n, s) : he.style(t, n, r, s)
                }, t, o ? r : void 0, o)
            }
        })
    }), he.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), he.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return he
    });
    var Bt = e.jQuery,
        Xt = e.$;
    return he.noConflict = function(t) {
        return e.$ === he && (e.$ = Xt), t && e.jQuery === he && (e.jQuery = Bt), he
    }, t || (e.jQuery = e.$ = he), he
}), function(e, t, n) {
    "use strict";
    ! function e(t, n, i) {
        function r(o, s) {
            if (!n[o]) {
                if (!t[o]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(o, !0);
                    if (a) return a(o, !0);
                    var u = new Error("Cannot find module '" + o + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = n[o] = {
                    exports: {}
                };
                t[o][0].call(c.exports, function(e) {
                    var n = t[o][1][e];
                    return r(n ? n : e)
                }, c, c.exports, e, t, n, i)
            }
            return n[o].exports
        }
        for (var a = "function" == typeof require && require, o = 0; o < i.length; o++) r(i[o]);
        return r
    }({
        1: [function(i, r, a) {
            var o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(a, "__esModule", {
                value: !0
            });
            var s, l, u, c, d = i("./modules/handle-dom"),
                f = i("./modules/utils"),
                p = i("./modules/handle-swal-dom"),
                h = i("./modules/handle-click"),
                m = i("./modules/handle-key"),
                v = o(m),
                g = i("./modules/default-params"),
                y = o(g),
                b = i("./modules/set-params"),
                w = o(b);
            a.default = u = c = function() {
                function i(e) {
                    var t = r;
                    return t[e] === n ? y.default[e] : t[e]
                }
                var r = arguments[0];
                if (d.addClass(t.body, "stop-scrolling"), p.resetInput(), r === n) return f.logStr("SweetAlert expects at least 1 attribute!"), !1;
                var a = f.extend({}, y.default);
                switch (typeof r) {
                    case "string":
                        a.title = r, a.text = arguments[1] || "", a.type = arguments[2] || "";
                        break;
                    case "object":
                        if (r.title === n) return f.logStr('Missing "title" argument!'), !1;
                        a.title = r.title;
                        for (var o in y.default) a[o] = i(o);
                        a.confirmButtonText = a.showCancelButton ? "Confirm" : y.default.confirmButtonText, a.confirmButtonText = i("confirmButtonText"), a.doneFunction = arguments[1] || null;
                        break;
                    default:
                        return f.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof r), !1
                }
                w.default(a), p.fixVerticalPosition(), p.openModal(arguments[1]);
                for (var u = p.getModal(), m = u.querySelectorAll("button"), g = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"], b = function(e) {
                        return h.handleButton(e, a, u)
                    }, x = 0; x < m.length; x++)
                    for (var C = 0; C < g.length; C++) {
                        var k = g[C];
                        m[x][k] = b
                    }
                p.getOverlay().onclick = b, s = e.onkeydown;
                var T = function(e) {
                    return v.default(e, a, u)
                };
                e.onkeydown = T, e.onfocus = function() {
                    setTimeout(function() {
                        l !== n && (l.focus(), l = n)
                    }, 0)
                }, c.enableButtons()
            }, u.setDefaults = c.setDefaults = function(e) {
                if (!e) throw new Error("userParams is required");
                if ("object" != typeof e) throw new Error("userParams has to be a object");
                f.extend(y.default, e)
            }, u.close = c.close = function() {
                var i = p.getModal();
                d.fadeOut(p.getOverlay(), 5), d.fadeOut(i, 5), d.removeClass(i, "showSweetAlert"), d.addClass(i, "hideSweetAlert"), d.removeClass(i, "visible");
                var r = i.querySelector(".sa-icon.sa-success");
                d.removeClass(r, "animate"), d.removeClass(r.querySelector(".sa-tip"), "animateSuccessTip"), d.removeClass(r.querySelector(".sa-long"), "animateSuccessLong");
                var a = i.querySelector(".sa-icon.sa-error");
                d.removeClass(a, "animateErrorIcon"), d.removeClass(a.querySelector(".sa-x-mark"), "animateXMark");
                var o = i.querySelector(".sa-icon.sa-warning");
                return d.removeClass(o, "pulseWarning"), d.removeClass(o.querySelector(".sa-body"), "pulseWarningIns"), d.removeClass(o.querySelector(".sa-dot"), "pulseWarningIns"), setTimeout(function() {
                    var e = i.getAttribute("data-custom-class");
                    d.removeClass(i, e)
                }, 300), d.removeClass(t.body, "stop-scrolling"), e.onkeydown = s, e.previousActiveElement && e.previousActiveElement.focus(), l = n, clearTimeout(i.timeout), !0
            }, u.showInputError = c.showInputError = function(e) {
                var t = p.getModal(),
                    n = t.querySelector(".sa-input-error");
                d.addClass(n, "show");
                var i = t.querySelector(".sa-error-container");
                d.addClass(i, "show"), i.querySelector("p").innerHTML = e, setTimeout(function() {
                    u.enableButtons()
                }, 1), t.querySelector("input").focus()
            }, u.resetInputError = c.resetInputError = function(e) {
                if (e && 13 === e.keyCode) return !1;
                var t = p.getModal(),
                    n = t.querySelector(".sa-input-error");
                d.removeClass(n, "show");
                var i = t.querySelector(".sa-error-container");
                d.removeClass(i, "show")
            }, u.disableButtons = c.disableButtons = function(e) {
                var t = p.getModal(),
                    n = t.querySelector("button.confirm"),
                    i = t.querySelector("button.cancel");
                n.disabled = !0, i.disabled = !0
            }, u.enableButtons = c.enableButtons = function(e) {
                var t = p.getModal(),
                    n = t.querySelector("button.confirm"),
                    i = t.querySelector("button.cancel");
                n.disabled = !1, i.disabled = !1
            }, "undefined" != typeof e ? e.sweetAlert = e.swal = u : f.logStr("SweetAlert is a frontend module!"), r.exports = a.default
        }, {
            "./modules/default-params": 2,
            "./modules/handle-click": 3,
            "./modules/handle-dom": 4,
            "./modules/handle-key": 5,
            "./modules/handle-swal-dom": 6,
            "./modules/set-params": 8,
            "./modules/utils": 9
        }],
        2: [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var i = {
                title: "",
                text: "",
                type: null,
                allowOutsideClick: !1,
                showConfirmButton: !0,
                showCancelButton: !1,
                closeOnConfirm: !0,
                closeOnCancel: !0,
                confirmButtonText: "OK",
                confirmButtonColor: "#8CD4F5",
                cancelButtonText: "Cancel",
                imageUrl: null,
                imageSize: null,
                timer: null,
                customClass: "",
                html: !1,
                animation: !0,
                allowEscapeKey: !0,
                inputType: "text",
                inputPlaceholder: "",
                inputValue: "",
                showLoaderOnConfirm: !1
            };
            n.default = i, t.exports = n.default
        }, {}],
        3: [function(t, n, i) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var r = t("./utils"),
                a = (t("./handle-swal-dom"), t("./handle-dom")),
                o = function(t, n, i) {
                    function o(e) {
                        h && n.confirmButtonColor && (p.style.backgroundColor = e)
                    }
                    var u, c, d, f = t || e.event,
                        p = f.target || f.srcElement,
                        h = p.className.indexOf("confirm") !== -1,
                        m = p.className.indexOf("sweet-overlay") !== -1,
                        v = a.hasClass(i, "visible"),
                        g = n.doneFunction && "true" === i.getAttribute("data-has-done-function");
                    switch (h && n.confirmButtonColor && (u = n.confirmButtonColor, c = r.colorLuminance(u, -.04), d = r.colorLuminance(u, -.14)), f.type) {
                        case "mouseover":
                            o(c);
                            break;
                        case "mouseout":
                            o(u);
                            break;
                        case "mousedown":
                            o(d);
                            break;
                        case "mouseup":
                            o(c);
                            break;
                        case "focus":
                            var y = i.querySelector("button.confirm"),
                                b = i.querySelector("button.cancel");
                            h ? b.style.boxShadow = "none" : y.style.boxShadow = "none";
                            break;
                        case "click":
                            var w = i === p,
                                x = a.isDescendant(i, p);
                            if (!w && !x && v && !n.allowOutsideClick) break;
                            h && g && v ? s(i, n) : g && v || m ? l(i, n) : a.isDescendant(i, p) && "BUTTON" === p.tagName && sweetAlert.close()
                    }
                },
                s = function(e, t) {
                    var n = !0;
                    a.hasClass(e, "show-input") && (n = e.querySelector("input").value, n || (n = "")), t.doneFunction(n), t.closeOnConfirm && sweetAlert.close(), t.showLoaderOnConfirm && sweetAlert.disableButtons()
                },
                l = function(e, t) {
                    var n = String(t.doneFunction).replace(/\s/g, ""),
                        i = "function(" === n.substring(0, 9) && ")" !== n.substring(9, 10);
                    i && t.doneFunction(!1), t.closeOnCancel && sweetAlert.close()
                };
            i.default = {
                handleButton: o,
                handleConfirm: s,
                handleCancel: l
            }, n.exports = i.default
        }, {
            "./handle-dom": 4,
            "./handle-swal-dom": 6,
            "./utils": 9
        }],
        4: [function(n, i, r) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var a = function(e, t) {
                    return new RegExp(" " + t + " ").test(" " + e.className + " ")
                },
                o = function(e, t) {
                    a(e, t) || (e.className += " " + t)
                },
                s = function(e, t) {
                    var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
                    if (a(e, t)) {
                        for (; n.indexOf(" " + t + " ") >= 0;) n = n.replace(" " + t + " ", " ");
                        e.className = n.replace(/^\s+|\s+$/g, "")
                    }
                },
                l = function(e) {
                    var n = t.createElement("div");
                    return n.appendChild(t.createTextNode(e)), n.innerHTML
                },
                u = function(e) {
                    e.style.opacity = "", e.style.display = "block"
                },
                c = function(e) {
                    if (e && !e.length) return u(e);
                    for (var t = 0; t < e.length; ++t) u(e[t])
                },
                d = function(e) {
                    e.style.opacity = "", e.style.display = "none"
                },
                f = function(e) {
                    if (e && !e.length) return d(e);
                    for (var t = 0; t < e.length; ++t) d(e[t])
                },
                p = function(e, t) {
                    for (var n = t.parentNode; null !== n;) {
                        if (n === e) return !0;
                        n = n.parentNode
                    }
                    return !1
                },
                h = function(e) {
                    e.style.left = "-9999px", e.style.display = "block";
                    var t, n = e.clientHeight;
                    return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding-top"), 10) : parseInt(e.currentStyle.padding), e.style.left = "", e.style.display = "none", "-" + parseInt((n + t) / 2) + "px"
                },
                m = function(e, t) {
                    if (+e.style.opacity < 1) {
                        t = t || 16, e.style.opacity = 0, e.style.display = "block";
                        var n = +new Date,
                            i = function(e) {
                                function t() {
                                    return e.apply(this, arguments)
                                }
                                return t.toString = function() {
                                    return e.toString()
                                }, t
                            }(function() {
                                e.style.opacity = +e.style.opacity + (new Date - n) / 100, n = +new Date, +e.style.opacity < 1 && setTimeout(i, t)
                            });
                        i()
                    }
                    e.style.display = "block"
                },
                v = function(e, t) {
                    t = t || 16, e.style.opacity = 1;
                    var n = +new Date,
                        i = function(e) {
                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t.toString = function() {
                                return e.toString()
                            }, t
                        }(function() {
                            e.style.opacity = +e.style.opacity - (new Date - n) / 100, n = +new Date, +e.style.opacity > 0 ? setTimeout(i, t) : e.style.display = "none"
                        });
                    i()
                },
                g = function(n) {
                    if ("function" == typeof MouseEvent) {
                        var i = new MouseEvent("click", {
                            view: e,
                            bubbles: !1,
                            cancelable: !0
                        });
                        n.dispatchEvent(i)
                    } else if (t.createEvent) {
                        var r = t.createEvent("MouseEvents");
                        r.initEvent("click", !1, !1), n.dispatchEvent(r)
                    } else t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick()
                },
                y = function(t) {
                    "function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0)
                };
            r.hasClass = a, r.addClass = o, r.removeClass = s, r.escapeHtml = l, r._show = u, r.show = c, r._hide = d, r.hide = f, r.isDescendant = p, r.getTopMargin = h, r.fadeIn = m, r.fadeOut = v, r.fireClick = g, r.stopEventPropagation = y
        }, {}],
        5: [function(t, i, r) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var a = t("./handle-dom"),
                o = t("./handle-swal-dom"),
                s = function(t, i, r) {
                    var s = t || e.event,
                        l = s.keyCode || s.which,
                        u = r.querySelector("button.confirm"),
                        c = r.querySelector("button.cancel"),
                        d = r.querySelectorAll("button[tabindex]");
                    if ([9, 13, 32, 27].indexOf(l) !== -1) {
                        for (var f = s.target || s.srcElement, p = -1, h = 0; h < d.length; h++)
                            if (f === d[h]) {
                                p = h;
                                break
                            }
                        9 === l ? (f = p === -1 ? u : p === d.length - 1 ? d[0] : d[p + 1], a.stopEventPropagation(s), f.focus(), i.confirmButtonColor && o.setFocusStyle(f, i.confirmButtonColor)) : 13 === l ? ("INPUT" === f.tagName && (f = u, u.focus()), f = p === -1 ? u : n) : 27 === l && i.allowEscapeKey === !0 ? (f = c, a.fireClick(f, s)) : f = n
                    }
                };
            r.default = s, i.exports = r.default
        }, {
            "./handle-dom": 4,
            "./handle-swal-dom": 6
        }],
        6: [function(n, i, r) {
            var a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var o = n("./utils"),
                s = n("./handle-dom"),
                l = n("./default-params"),
                u = a(l),
                c = n("./injected-html"),
                d = a(c),
                f = ".sweet-alert",
                p = ".sweet-overlay",
                h = function() {
                    var e = t.createElement("div");
                    for (e.innerHTML = d.default; e.firstChild;) t.body.appendChild(e.firstChild)
                },
                m = function(e) {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t.toString = function() {
                        return e.toString()
                    }, t
                }(function() {
                    var e = t.querySelector(f);
                    return e || (h(), e = m()), e
                }),
                v = function() {
                    var e = m();
                    if (e) return e.querySelector("input")
                },
                g = function() {
                    return t.querySelector(p)
                },
                y = function(e, t) {
                    var n = o.hexToRgb(t);
                    e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
                },
                b = function(n) {
                    var i = m();
                    s.fadeIn(g(), 10), s.show(i), s.addClass(i, "showSweetAlert"), s.removeClass(i, "hideSweetAlert"), e.previousActiveElement = t.activeElement;
                    var r = i.querySelector("button.confirm");
                    r.focus(), setTimeout(function() {
                        s.addClass(i, "visible")
                    }, 500);
                    var a = i.getAttribute("data-timer");
                    if ("null" !== a && "" !== a) {
                        var o = n;
                        i.timeout = setTimeout(function() {
                            var e = (o || null) && "true" === i.getAttribute("data-has-done-function");
                            e ? o(null) : sweetAlert.close()
                        }, a)
                    }
                },
                w = function() {
                    var e = m(),
                        t = v();
                    s.removeClass(e, "show-input"), t.value = u.default.inputValue, t.setAttribute("type", u.default.inputType), t.setAttribute("placeholder", u.default.inputPlaceholder), x()
                },
                x = function(e) {
                    if (e && 13 === e.keyCode) return !1;
                    var t = m(),
                        n = t.querySelector(".sa-input-error");
                    s.removeClass(n, "show");
                    var i = t.querySelector(".sa-error-container");
                    s.removeClass(i, "show")
                },
                C = function() {
                    var e = m();
                    e.style.marginTop = s.getTopMargin(m())
                };
            r.sweetAlertInitialize = h, r.getModal = m, r.getOverlay = g, r.getInput = v, r.setFocusStyle = y, r.openModal = b, r.resetInput = w, r.resetInputError = x, r.fixVerticalPosition = C
        }, {
            "./default-params": 2,
            "./handle-dom": 4,
            "./injected-html": 7,
            "./utils": 9
        }],
        7: [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var i = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';
            n.default = i, t.exports = n.default
        }, {}],
        8: [function(e, t, i) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var r = e("./utils"),
                a = e("./handle-swal-dom"),
                o = e("./handle-dom"),
                s = ["error", "warning", "info", "success", "input", "prompt"],
                l = function(e) {
                    var t = a.getModal(),
                        i = t.querySelector("h2"),
                        l = t.querySelector("p"),
                        u = t.querySelector("button.cancel"),
                        c = t.querySelector("button.confirm");
                    if (i.innerHTML = e.html ? e.title : o.escapeHtml(e.title).split("\n").join("<br>"), l.innerHTML = e.html ? e.text : o.escapeHtml(e.text || "").split("\n").join("<br>"), e.text && o.show(l), e.customClass) o.addClass(t, e.customClass), t.setAttribute("data-custom-class", e.customClass);
                    else {
                        var d = t.getAttribute("data-custom-class");
                        o.removeClass(t, d), t.setAttribute("data-custom-class", "")
                    }
                    if (o.hide(t.querySelectorAll(".sa-icon")), e.type && !r.isIE8()) {
                        var f = function() {
                            for (var i = !1, r = 0; r < s.length; r++)
                                if (e.type === s[r]) {
                                    i = !0;
                                    break
                                }
                            if (!i) return logStr("Unknown alert type: " + e.type), {
                                v: !1
                            };
                            var l = ["success", "error", "warning", "info"],
                                u = n;
                            l.indexOf(e.type) !== -1 && (u = t.querySelector(".sa-icon.sa-" + e.type), o.show(u));
                            var c = a.getInput();
                            switch (e.type) {
                                case "success":
                                    o.addClass(u, "animate"), o.addClass(u.querySelector(".sa-tip"), "animateSuccessTip"), o.addClass(u.querySelector(".sa-long"), "animateSuccessLong");
                                    break;
                                case "error":
                                    o.addClass(u, "animateErrorIcon"), o.addClass(u.querySelector(".sa-x-mark"), "animateXMark");
                                    break;
                                case "warning":
                                    o.addClass(u, "pulseWarning"), o.addClass(u.querySelector(".sa-body"), "pulseWarningIns"), o.addClass(u.querySelector(".sa-dot"), "pulseWarningIns");
                                    break;
                                case "input":
                                case "prompt":
                                    c.setAttribute("type", e.inputType), c.value = e.inputValue, c.setAttribute("placeholder", e.inputPlaceholder), o.addClass(t, "show-input"), setTimeout(function() {
                                        c.focus(), c.addEventListener("keyup", swal.resetInputError)
                                    }, 400)
                            }
                        }();
                        if ("object" == typeof f) return f.v
                    }
                    if (e.imageUrl) {
                        var p = t.querySelector(".sa-icon.sa-custom");
                        p.style.backgroundImage = "url(" + e.imageUrl + ")", o.show(p);
                        var h = 80,
                            m = 80;
                        if (e.imageSize) {
                            var v = e.imageSize.toString().split("x"),
                                g = v[0],
                                y = v[1];
                            g && y ? (h = g, m = y) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + e.imageSize)
                        }
                        p.setAttribute("style", p.getAttribute("style") + "width:" + h + "px; height:" + m + "px")
                    }
                    t.setAttribute("data-has-cancel-button", e.showCancelButton), e.showCancelButton ? u.style.display = "inline-block" : o.hide(u), t.setAttribute("data-has-confirm-button", e.showConfirmButton), e.showConfirmButton ? c.style.display = "inline-block" : o.hide(c), e.cancelButtonText && (u.innerHTML = o.escapeHtml(e.cancelButtonText)), e.confirmButtonText && (c.innerHTML = o.escapeHtml(e.confirmButtonText)), e.confirmButtonColor && (c.style.backgroundColor = e.confirmButtonColor, c.style.borderLeftColor = e.confirmLoadingButtonColor, c.style.borderRightColor = e.confirmLoadingButtonColor, a.setFocusStyle(c, e.confirmButtonColor)), t.setAttribute("data-allow-outside-click", e.allowOutsideClick);
                    var b = !!e.doneFunction;
                    t.setAttribute("data-has-done-function", b), e.animation ? "string" == typeof e.animation ? t.setAttribute("data-animation", e.animation) : t.setAttribute("data-animation", "pop") : t.setAttribute("data-animation", "none"), t.setAttribute("data-timer", e.timer)
                };
            i.default = l, t.exports = i.default
        }, {
            "./handle-dom": 4,
            "./handle-swal-dom": 6,
            "./utils": 9
        }],
        9: [function(t, n, i) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var r = function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    return e
                },
                a = function(e) {
                    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                    return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null
                },
                o = function() {
                    return e.attachEvent && !e.addEventListener
                },
                s = function(t) {
                    e.console && e.console.log("SweetAlert: " + t)
                },
                l = function(e, t) {
                    e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;
                    var n, i, r = "#";
                    for (i = 0; i < 3; i++) n = parseInt(e.substr(2 * i, 2), 16), n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16), r += ("00" + n).substr(n.length);
                    return r
                };
            i.extend = r, i.hexToRgb = a, i.isIE8 = o, i.logStr = s, i.colorLuminance = l
        }, {}]
    }, {}, [1]), "function" == typeof define && define.amd ? define(function() {
        return sweetAlert
    }) : "undefined" != typeof module && module.exports && (module.exports = sweetAlert)
}(window, document), "undefined" == typeof jQuery) {
var jQuery;
jQuery = "function" == typeof require ? $ = require("jquery") : $
}
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, n, i, r) {
        return jQuery.easing[jQuery.easing.def](e, t, n, i, r)
    },
    easeInQuad: function(e, t, n, i, r) {
        return i * (t /= r) * t + n
    },
    easeOutQuad: function(e, t, n, i, r) {
        return -i * (t /= r) * (t - 2) + n
    },
    easeInOutQuad: function(e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function(e, t, n, i, r) {
        return i * (t /= r) * t * t + n
    },
    easeOutCubic: function(e, t, n, i, r) {
        return i * ((t = t / r - 1) * t * t + 1) + n
    },
    easeInOutCubic: function(e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function(e, t, n, i, r) {
        return i * (t /= r) * t * t * t + n
    },
    easeOutQuart: function(e, t, n, i, r) {
        return -i * ((t = t / r - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function(e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function(e, t, n, i, r) {
        return i * (t /= r) * t * t * t * t + n
    },
    easeOutQuint: function(e, t, n, i, r) {
        return i * ((t = t / r - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function(e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function(e, t, n, i, r) {
        return -i * Math.cos(t / r * (Math.PI / 2)) + i + n
    },
    easeOutSine: function(e, t, n, i, r) {
        return i * Math.sin(t / r * (Math.PI / 2)) + n
    },
    easeInOutSine: function(e, t, n, i, r) {
        return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
    },
    easeInExpo: function(e, t, n, i, r) {
        return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n
    },
    easeOutExpo: function(e, t, n, i, r) {
        return t == r ? n + i : i * (-Math.pow(2, -10 * t / r) + 1) + n
    },
    easeInOutExpo: function(e, t, n, i, r) {
        return 0 == t ? n : t == r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    },
    easeInCirc: function(e, t, n, i, r) {
        return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
    },
    easeOutCirc: function(e, t, n, i, r) {
        return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
    },
    easeInOutCirc: function(e, t, n, i, r) {
        return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function(e, t, n, i, r) {
        var a = 1.70158,
            o = 0,
            s = i;
        if (0 == t) return n;
        if (1 == (t /= r)) return n + i;
        if (o || (o = .3 * r), s < Math.abs(i)) {
            s = i;
            var a = o / 4
        } else var a = o / (2 * Math.PI) * Math.asin(i / s);
        return -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o)) + n
    },
    easeOutElastic: function(e, t, n, i, r) {
        var a = 1.70158,
            o = 0,
            s = i;
        if (0 == t) return n;
        if (1 == (t /= r)) return n + i;
        if (o || (o = .3 * r), s < Math.abs(i)) {
            s = i;
            var a = o / 4
        } else var a = o / (2 * Math.PI) * Math.asin(i / s);
        return s * Math.pow(2, -10 * t) * Math.sin((t * r - a) * (2 * Math.PI) / o) + i + n
    },
    easeInOutElastic: function(e, t, n, i, r) {
        var a = 1.70158,
            o = 0,
            s = i;
        if (0 == t) return n;
        if (2 == (t /= r / 2)) return n + i;
        if (o || (o = r * (.3 * 1.5)), s < Math.abs(i)) {
            s = i;
            var a = o / 4
        } else var a = o / (2 * Math.PI) * Math.asin(i / s);
        return t < 1 ? -.5 * (s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o)) + n : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o) * .5 + i + n
    },
    easeInBack: function(e, t, n, i, r, a) {
        return void 0 == a && (a = 1.70158), i * (t /= r) * t * ((a + 1) * t - a) + n
    },
    easeOutBack: function(e, t, n, i, r, a) {
        return void 0 == a && (a = 1.70158), i * ((t = t / r - 1) * t * ((a + 1) * t + a) + 1) + n
    },
    easeInOutBack: function(e, t, n, i, r, a) {
        return void 0 == a && (a = 1.70158), (t /= r / 2) < 1 ? i / 2 * (t * t * (((a *= 1.525) + 1) * t - a)) + n : i / 2 * ((t -= 2) * t * (((a *= 1.525) + 1) * t + a) + 2) + n
    },
    easeInBounce: function(e, t, n, i, r) {
        return i - jQuery.easing.easeOutBounce(e, r - t, 0, i, r) + n
    },
    easeOutBounce: function(e, t, n, i, r) {
        return (t /= r) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function(e, t, n, i, r) {
        return t < r / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, i, r) + .5 * i + n
    }
}), jQuery.extend(jQuery.easing, {
    easeInOutMaterial: function(e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t + n : i / 4 * ((t -= 2) * t * t + 2) + n
    }
}), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (! function(e) {
    function t(e) {
        var t = e.length,
            i = n.type(e);
        return "function" !== i && !n.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    if (!e.jQuery) {
        var n = function(e, t) {
            return new n.fn.init(e, t)
        };
        n.isWindow = function(e) {
            return null != e && e == e.window
        }, n.type = function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[o.call(e)] || "object" : typeof e
        }, n.isArray = Array.isArray || function(e) {
            return "array" === n.type(e)
        }, n.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e)) return !1;
            try {
                if (e.constructor && !a.call(e, "constructor") && !a.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            for (t in e);
            return void 0 === t || a.call(e, t)
        }, n.each = function(e, n, i) {
            var r, a = 0,
                o = e.length,
                s = t(e);
            if (i) {
                if (s)
                    for (; o > a && (r = n.apply(e[a], i), r !== !1); a++);
                else
                    for (a in e)
                        if (r = n.apply(e[a], i), r === !1) break
            } else if (s)
                for (; o > a && (r = n.call(e[a], a, e[a]), r !== !1); a++);
            else
                for (a in e)
                    if (r = n.call(e[a], a, e[a]), r === !1) break; return e
        }, n.data = function(e, t, r) {
            if (void 0 === r) {
                var a = e[n.expando],
                    o = a && i[a];
                if (void 0 === t) return o;
                if (o && t in o) return o[t]
            } else if (void 0 !== t) {
                var a = e[n.expando] || (e[n.expando] = ++n.uuid);
                return i[a] = i[a] || {}, i[a][t] = r, r
            }
        }, n.removeData = function(e, t) {
            var r = e[n.expando],
                a = r && i[r];
            a && n.each(t, function(e, t) {
                delete a[t]
            })
        }, n.extend = function() {
            var e, t, i, r, a, o, s = arguments[0] || {},
                l = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== n.type(s) && (s = {}), l === u && (s = this, l--); u > l; l++)
                if (null != (a = arguments[l]))
                    for (r in a) e = s[r], i = a[r], s !== i && (c && i && (n.isPlainObject(i) || (t = n.isArray(i))) ? (t ? (t = !1, o = e && n.isArray(e) ? e : []) : o = e && n.isPlainObject(e) ? e : {}, s[r] = n.extend(c, o, i)) : void 0 !== i && (s[r] = i));
            return s
        }, n.queue = function(e, i, r) {
            function a(e, n) {
                var i = n || [];
                return null != e && (t(Object(e)) ? ! function(e, t) {
                    for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
                    if (n !== n)
                        for (; void 0 !== t[i];) e[r++] = t[i++];
                    return e.length = r, e
                }(i, "string" == typeof e ? [e] : e) : [].push.call(i, e)), i
            }
            if (e) {
                i = (i || "fx") + "queue";
                var o = n.data(e, i);
                return r ? (!o || n.isArray(r) ? o = n.data(e, i, a(r)) : o.push(r), o) : o || []
            }
        }, n.dequeue = function(e, t) {
            n.each(e.nodeType ? [e] : e, function(e, i) {
                t = t || "fx";
                var r = n.queue(i, t),
                    a = r.shift();
                "inprogress" === a && (a = r.shift()), a && ("fx" === t && r.unshift("inprogress"), a.call(i, function() {
                    n.dequeue(i, t)
                }))
            })
        }, n.fn = n.prototype = {
            init: function(e) {
                if (e.nodeType) return this[0] = e, this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                    return e || document
                }
                var t = this[0],
                    e = e.apply(t),
                    i = this.offset(),
                    r = /^(?:body|html)$/i.test(e.nodeName) ? {
                        top: 0,
                        left: 0
                    } : n(e).offset();
                return i.top -= parseFloat(t.style.marginTop) || 0, i.left -= parseFloat(t.style.marginLeft) || 0, e.style && (r.top += parseFloat(e.style.borderTopWidth) || 0, r.left += parseFloat(e.style.borderLeftWidth) || 0), {
                    top: i.top - r.top,
                    left: i.left - r.left
                }
            }
        };
        var i = {};
        n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
        for (var r = {}, a = r.hasOwnProperty, o = r.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) r["[object " + s[l] + "]"] = s[l].toLowerCase();
        n.fn.init.prototype = n.fn, e.Velocity = {
            Utilities: n
        }
    }
}(window), function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    return function(e, t, n, i) {
        function r(e) {
            for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
                var r = e[t];
                r && i.push(r)
            }
            return i
        }

        function a(e) {
            return m.isWrapped(e) ? e = [].slice.call(e) : m.isNode(e) && (e = [e]), e
        }

        function o(e) {
            var t = f.data(e, "velocity");
            return null === t ? i : t
        }

        function s(e) {
            return function(t) {
                return Math.round(t * e) * (1 / e)
            }
        }

        function l(e, n, i, r) {
            function a(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function o(e, t) {
                return 3 * t - 6 * e
            }

            function s(e) {
                return 3 * e
            }

            function l(e, t, n) {
                return ((a(t, n) * e + o(t, n)) * e + s(t)) * e
            }

            function u(e, t, n) {
                return 3 * a(t, n) * e * e + 2 * o(t, n) * e + s(t)
            }

            function c(t, n) {
                for (var r = 0; m > r; ++r) {
                    var a = u(n, e, i);
                    if (0 === a) return n;
                    var o = l(n, e, i) - t;
                    n -= o / a
                }
                return n
            }

            function d() {
                for (var t = 0; b > t; ++t) k[t] = l(t * w, e, i)
            }

            function f(t, n, r) {
                var a, o, s = 0;
                do o = n + (r - n) / 2, a = l(o, e, i) - t, a > 0 ? r = o : n = o; while (Math.abs(a) > g && ++s < y);
                return o
            }

            function p(t) {
                for (var n = 0, r = 1, a = b - 1; r != a && k[r] <= t; ++r) n += w;
                --r;
                var o = (t - k[r]) / (k[r + 1] - k[r]),
                    s = n + o * w,
                    l = u(s, e, i);
                return l >= v ? c(t, s) : 0 == l ? s : f(t, n, n + w)
            }

            function h() {
                T = !0, (e != n || i != r) && d()
            }
            var m = 4,
                v = .001,
                g = 1e-7,
                y = 10,
                b = 11,
                w = 1 / (b - 1),
                x = "Float32Array" in t;
            if (4 !== arguments.length) return !1;
            for (var C = 0; 4 > C; ++C)
                if ("number" != typeof arguments[C] || isNaN(arguments[C]) || !isFinite(arguments[C])) return !1;
            e = Math.min(e, 1), i = Math.min(i, 1), e = Math.max(e, 0), i = Math.max(i, 0);
            var k = x ? new Float32Array(b) : new Array(b),
                T = !1,
                S = function(t) {
                    return T || h(), e === n && i === r ? t : 0 === t ? 0 : 1 === t ? 1 : l(p(t), n, r)
                };
            S.getControlPoints = function() {
                return [{
                    x: e,
                    y: n
                }, {
                    x: i,
                    y: r
                }]
            };
            var E = "generateBezier(" + [e, n, i, r] + ")";
            return S.toString = function() {
                return E
            }, S
        }

        function u(e, t) {
            var n = e;
            return m.isString(e) ? b.Easings[e] || (n = !1) : n = m.isArray(e) && 1 === e.length ? s.apply(null, e) : m.isArray(e) && 2 === e.length ? w.apply(null, e.concat([t])) : !(!m.isArray(e) || 4 !== e.length) && l.apply(null, e), n === !1 && (n = b.Easings[b.defaults.easing] ? b.defaults.easing : y), n
        }

        function c(e) {
            if (e) {
                var t = (new Date).getTime(),
                    n = b.State.calls.length;
                n > 1e4 && (b.State.calls = r(b.State.calls));
                for (var a = 0; n > a; a++)
                    if (b.State.calls[a]) {
                        var s = b.State.calls[a],
                            l = s[0],
                            u = s[2],
                            p = s[3],
                            h = !!p,
                            v = null;
                        p || (p = b.State.calls[a][3] = t - 16);
                        for (var g = Math.min((t - p) / u.duration, 1), y = 0, w = l.length; w > y; y++) {
                            var C = l[y],
                                T = C.element;
                            if (o(T)) {
                                var S = !1;
                                if (u.display !== i && null !== u.display && "none" !== u.display) {
                                    if ("flex" === u.display) {
                                        var E = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        f.each(E, function(e, t) {
                                            x.setPropertyValue(T, "display", t)
                                        })
                                    }
                                    x.setPropertyValue(T, "display", u.display)
                                }
                                u.visibility !== i && "hidden" !== u.visibility && x.setPropertyValue(T, "visibility", u.visibility);
                                for (var A in C)
                                    if ("element" !== A) {
                                        var O, P = C[A],
                                            q = m.isString(P.easing) ? b.Easings[P.easing] : P.easing;
                                        if (1 === g) O = P.endValue;
                                        else {
                                            var j = P.endValue - P.startValue;
                                            if (O = P.startValue + j * q(g, u, j), !h && O === P.currentValue) continue
                                        }
                                        if (P.currentValue = O, "tween" === A) v = O;
                                        else {
                                            if (x.Hooks.registered[A]) {
                                                var M = x.Hooks.getRoot(A),
                                                    D = o(T).rootPropertyValueCache[M];
                                                D && (P.rootPropertyValue = D)
                                            }
                                            var N = x.setPropertyValue(T, A, P.currentValue + (0 === parseFloat(O) ? "" : P.unitType), P.rootPropertyValue, P.scrollData);
                                            x.Hooks.registered[A] && (o(T).rootPropertyValueCache[M] = x.Normalizations.registered[M] ? x.Normalizations.registered[M]("extract", null, N[1]) : N[1]), "transform" === N[0] && (S = !0)
                                        }
                                    }
                                u.mobileHA && o(T).transformCache.translate3d === i && (o(T).transformCache.translate3d = "(0px, 0px, 0px)", S = !0), S && x.flushTransformCache(T)
                            }
                        }
                        u.display !== i && "none" !== u.display && (b.State.calls[a][2].display = !1), u.visibility !== i && "hidden" !== u.visibility && (b.State.calls[a][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], g, Math.max(0, p + u.duration - t), p, v), 1 === g && d(a)
                    }
            }
            b.State.isTicking && k(c)
        }

        function d(e, t) {
            if (!b.State.calls[e]) return !1;
            for (var n = b.State.calls[e][0], r = b.State.calls[e][1], a = b.State.calls[e][2], s = b.State.calls[e][4], l = !1, u = 0, c = n.length; c > u; u++) {
                var d = n[u].element;
                if (t || a.loop || ("none" === a.display && x.setPropertyValue(d, "display", a.display), "hidden" === a.visibility && x.setPropertyValue(d, "visibility", a.visibility)), a.loop !== !0 && (f.queue(d)[1] === i || !/\.velocityQueueEntryFlag/i.test(f.queue(d)[1])) && o(d)) {
                    o(d).isAnimating = !1, o(d).rootPropertyValueCache = {};
                    var p = !1;
                    f.each(x.Lists.transforms3D, function(e, t) {
                        var n = /^scale/.test(t) ? 1 : 0,
                            r = o(d).transformCache[t];
                        o(d).transformCache[t] !== i && new RegExp("^\\(" + n + "[^.]").test(r) && (p = !0, delete o(d).transformCache[t])
                    }), a.mobileHA && (p = !0, delete o(d).transformCache.translate3d), p && x.flushTransformCache(d), x.Values.removeClass(d, "velocity-animating")
                }
                if (!t && a.complete && !a.loop && u === c - 1) try {
                    a.complete.call(r, r)
                } catch (e) {
                    setTimeout(function() {
                        throw e
                    }, 1)
                }
                s && a.loop !== !0 && s(r), o(d) && a.loop === !0 && !t && (f.each(o(d).tweensContainer, function(e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                }), b(d, "reverse", {
                    loop: !0,
                    delay: a.delay
                })), a.queue !== !1 && f.dequeue(d, a.queue)
            }
            b.State.calls[e] = !1;
            for (var h = 0, m = b.State.calls.length; m > h; h++)
                if (b.State.calls[h] !== !1) {
                    l = !0;
                    break
                }
            l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
        }
        var f, p = function() {
                if (n.documentMode) return n.documentMode;
                for (var e = 7; e > 4; e--) {
                    var t = n.createElement("div");
                    if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
                }
                return i
            }(),
            h = function() {
                var e = 0;
                return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                    var n, i = (new Date).getTime();
                    return n = Math.max(0, 16 - (i - e)), e = i + n, setTimeout(function() {
                        t(i + n)
                    }, n)
                }
            }(),
            m = {
                isString: function(e) {
                    return "string" == typeof e
                },
                isArray: Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                isFunction: function(e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                },
                isNode: function(e) {
                    return e && e.nodeType
                },
                isNodeList: function(e) {
                    return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== i && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                },
                isWrapped: function(e) {
                    return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                },
                isSVG: function(e) {
                    return t.SVGElement && e instanceof t.SVGElement
                },
                isEmptyObject: function(e) {
                    for (var t in e) return !1;
                    return !0
                }
            },
            v = !1;
        if (e.fn && e.fn.jquery ? (f = e, v = !0) : f = t.Velocity.Utilities, 8 >= p && !v) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= p) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var g = 400,
            y = "swing",
            b = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: t.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: n.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: []
                },
                CSS: {},
                Utilities: f,
                Redirects: {},
                Easings: {},
                Promise: t.Promise,
                defaults: {
                    queue: "",
                    duration: g,
                    easing: y,
                    begin: i,
                    complete: i,
                    progress: i,
                    display: i,
                    visibility: i,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0
                },
                init: function(e) {
                    f.data(e, "velocity", {
                        isSVG: m.isSVG(e),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 2,
                    patch: 2
                },
                debug: !1
            };
        t.pageYOffset !== i ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
        var w = function() {
            function e(e) {
                return -e.tension * e.x - e.friction * e.v
            }

            function t(t, n, i) {
                var r = {
                    x: t.x + i.dx * n,
                    v: t.v + i.dv * n,
                    tension: t.tension,
                    friction: t.friction
                };
                return {
                    dx: r.v,
                    dv: e(r)
                }
            }

            function n(n, i) {
                var r = {
                        dx: n.v,
                        dv: e(n)
                    },
                    a = t(n, .5 * i, r),
                    o = t(n, .5 * i, a),
                    s = t(n, i, o),
                    l = 1 / 6 * (r.dx + 2 * (a.dx + o.dx) + s.dx),
                    u = 1 / 6 * (r.dv + 2 * (a.dv + o.dv) + s.dv);
                return n.x = n.x + l * i, n.v = n.v + u * i, n
            }
            return function e(t, i, r) {
                var a, o, s, l = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    },
                    u = [0],
                    c = 0,
                    d = 1e-4,
                    f = .016;
                for (t = parseFloat(t) || 500, i = parseFloat(i) || 20, r = r || null, l.tension = t, l.friction = i, a = null !== r, a ? (c = e(t, i), o = c / r * f) : o = f; s = n(s || l, o), u.push(1 + s.x), c += 16, Math.abs(s.x) > d && Math.abs(s.v) > d;);
                return a ? function(e) {
                    return u[e * (u.length - 1) | 0]
                } : c
            }
        }();
        b.Easings = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            spring: function(e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
            }
        }, f.each([
            ["ease", [.25, .1, .25, 1]],
            ["ease-in", [.42, 0, 1, 1]],
            ["ease-out", [0, 0, .58, 1]],
            ["ease-in-out", [.42, 0, .58, 1]],
            ["easeInSine", [.47, 0, .745, .715]],
            ["easeOutSine", [.39, .575, .565, 1]],
            ["easeInOutSine", [.445, .05, .55, .95]],
            ["easeInQuad", [.55, .085, .68, .53]],
            ["easeOutQuad", [.25, .46, .45, .94]],
            ["easeInOutQuad", [.455, .03, .515, .955]],
            ["easeInCubic", [.55, .055, .675, .19]],
            ["easeOutCubic", [.215, .61, .355, 1]],
            ["easeInOutCubic", [.645, .045, .355, 1]],
            ["easeInQuart", [.895, .03, .685, .22]],
            ["easeOutQuart", [.165, .84, .44, 1]],
            ["easeInOutQuart", [.77, 0, .175, 1]],
            ["easeInQuint", [.755, .05, .855, .06]],
            ["easeOutQuint", [.23, 1, .32, 1]],
            ["easeInOutQuint", [.86, 0, .07, 1]],
            ["easeInExpo", [.95, .05, .795, .035]],
            ["easeOutExpo", [.19, 1, .22, 1]],
            ["easeInOutExpo", [1, 0, 0, 1]],
            ["easeInCirc", [.6, .04, .98, .335]],
            ["easeOutCirc", [.075, .82, .165, 1]],
            ["easeInOutCirc", [.785, .135, .15, .86]]
        ], function(e, t) {
            b.Easings[t[0]] = l.apply(null, t[1])
        });
        var x = b.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var e = 0; e < x.Lists.colors.length; e++) {
                        var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                        x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                    }
                    var n, i, r;
                    if (p)
                        for (n in x.Hooks.templates) {
                            i = x.Hooks.templates[n], r = i[0].split(" ");
                            var a = i[1].match(x.RegEx.valueSplit);
                            "Color" === r[0] && (r.push(r.shift()), a.push(a.shift()), x.Hooks.templates[n] = [r.join(" "), a.join(" ")])
                        }
                    for (n in x.Hooks.templates) {
                        i = x.Hooks.templates[n], r = i[0].split(" ");
                        for (var e in r) {
                            var o = n + r[e],
                                s = e;
                            x.Hooks.registered[o] = [n, s]
                        }
                    }
                },
                getRoot: function(e) {
                    var t = x.Hooks.registered[e];
                    return t ? t[0] : e
                },
                cleanRootPropertyValue: function(e, t) {
                    return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), t
                },
                extractValue: function(e, t) {
                    var n = x.Hooks.registered[e];
                    if (n) {
                        var i = n[0],
                            r = n[1];
                        return t = x.Hooks.cleanRootPropertyValue(i, t), t.toString().match(x.RegEx.valueSplit)[r]
                    }
                    return t
                },
                injectValue: function(e, t, n) {
                    var i = x.Hooks.registered[e];
                    if (i) {
                        var r, a, o = i[0],
                            s = i[1];
                        return n = x.Hooks.cleanRootPropertyValue(o, n), r = n.toString().match(x.RegEx.valueSplit), r[s] = t, a = r.join(" ")
                    }
                    return n
                }
            },
            Normalizations: {
                registered: {
                    clip: function(e, t, n) {
                        switch (e) {
                            case "name":
                                return "clip";
                            case "extract":
                                var i;
                                return x.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : (i = n.toString().match(x.RegEx.valueUnwrap), i = i ? i[1].replace(/,(\s+)?/g, " ") : n), i;
                            case "inject":
                                return "rect(" + n + ")"
                        }
                    },
                    blur: function(e, t, n) {
                        switch (e) {
                            case "name":
                                return b.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var i = parseFloat(n);
                                if (!i && 0 !== i) {
                                    var r = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    i = r ? r[1] : 0
                                }
                                return i;
                            case "inject":
                                return parseFloat(n) ? "blur(" + n + ")" : "none"
                        }
                    },
                    opacity: function(e, t, n) {
                        if (8 >= p) switch (e) {
                            case "name":
                                return "filter";
                            case "extract":
                                var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                return n = i ? i[1] / 100 : 1;
                            case "inject":
                                return t.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                        } else switch (e) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return n;
                            case "inject":
                                return n
                        }
                    }
                },
                register: function() {
                    9 >= p || b.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                    for (var e = 0; e < x.Lists.transformsBase.length; e++) ! function() {
                        var t = x.Lists.transformsBase[e];
                        x.Normalizations.registered[t] = function(e, n, r) {
                            switch (e) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return o(n) === i || o(n).transformCache[t] === i ? /^scale/i.test(t) ? 1 : 0 : o(n).transformCache[t].replace(/[()]/g, "");
                                case "inject":
                                    var a = !1;
                                    switch (t.substr(0, t.length - 1)) {
                                        case "translate":
                                            a = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                                            break;
                                        case "scal":
                                        case "scale":
                                            b.State.isAndroid && o(n).transformCache[t] === i && 1 > r && (r = 1), a = !/(\d)$/i.test(r);
                                            break;
                                        case "skew":
                                            a = !/(deg|\d)$/i.test(r);
                                            break;
                                        case "rotate":
                                            a = !/(deg|\d)$/i.test(r)
                                    }
                                    return a || (o(n).transformCache[t] = "(" + r + ")"), o(n).transformCache[t]
                            }
                        }
                    }();
                    for (var e = 0; e < x.Lists.colors.length; e++) ! function() {
                        var t = x.Lists.colors[e];
                        x.Normalizations.registered[t] = function(e, n, r) {
                            switch (e) {
                                case "name":
                                    return t;
                                case "extract":
                                    var a;
                                    if (x.RegEx.wrappedValueAlreadyExtracted.test(r)) a = r;
                                    else {
                                        var o, s = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(r) ? o = s[r] !== i ? s[r] : s.black : x.RegEx.isHex.test(r) ? o = "rgb(" + x.Values.hexToRgb(r).join(" ") + ")" : /^rgba?\(/i.test(r) || (o = s.black), a = (o || r).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= p || 3 !== a.split(" ").length || (a += " 1"), a;
                                case "inject":
                                    return 8 >= p ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"), (8 >= p ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            },
            Names: {
                camelCase: function(e) {
                    return e.replace(/-(\w)/g, function(e, t) {
                        return t.toUpperCase()
                    })
                },
                SVGAttribute: function(e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (p || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                },
                prefixCheck: function(e) {
                    if (b.State.prefixMatches[e]) return [b.State.prefixMatches[e], !0];
                    for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = t.length; i > n; n++) {
                        var r;
                        if (r = 0 === n ? e : t[n] + e.replace(/^\w/, function(e) {
                                return e.toUpperCase()
                            }), m.isString(b.State.prefixElement.style[r])) return b.State.prefixMatches[e] = r, [r, !0]
                    }
                    return [e, !1]
                }
            },
            Values: {
                hexToRgb: function(e) {
                    var t, n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return e = e.replace(n, function(e, t, n, i) {
                        return t + t + n + n + i + i
                    }), t = i.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(e) {
                    return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                },
                getUnitType: function(e) {
                    return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                },
                getDisplayType: function(e) {
                    var t = e && e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                },
                addClass: function(e, t) {
                    e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                },
                removeClass: function(e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function(e, n, r, a) {
                function s(e, n) {
                    function r() {
                        u && x.setPropertyValue(e, "display", "none")
                    }
                    var l = 0;
                    if (8 >= p) l = f.css(e, n);
                    else {
                        var u = !1;
                        if (/^(width|height)$/.test(n) && 0 === x.getPropertyValue(e, "display") && (u = !0, x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !a) {
                            if ("height" === n && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var c = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                return r(), c
                            }
                            if ("width" === n && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var d = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                return r(), d
                            }
                        }
                        var h;
                        h = o(e) === i ? t.getComputedStyle(e, null) : o(e).computedStyle ? o(e).computedStyle : o(e).computedStyle = t.getComputedStyle(e, null),
                            "borderColor" === n && (n = "borderTopColor"), l = 9 === p && "filter" === n ? h.getPropertyValue(n) : h[n], ("" === l || null === l) && (l = e.style[n]), r()
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                        var m = s(e, "position");
                        ("fixed" === m || "absolute" === m && /top|left/i.test(n)) && (l = f(e).position()[n] + "px")
                    }
                    return l
                }
                var l;
                if (x.Hooks.registered[n]) {
                    var u = n,
                        c = x.Hooks.getRoot(u);
                    r === i && (r = x.getPropertyValue(e, x.Names.prefixCheck(c)[0])), x.Normalizations.registered[c] && (r = x.Normalizations.registered[c]("extract", e, r)), l = x.Hooks.extractValue(u, r)
                } else if (x.Normalizations.registered[n]) {
                    var d, h;
                    d = x.Normalizations.registered[n]("name", e), "transform" !== d && (h = s(e, x.Names.prefixCheck(d)[0]), x.Values.isCSSNullValue(h) && x.Hooks.templates[n] && (h = x.Hooks.templates[n][1])), l = x.Normalizations.registered[n]("extract", e, h)
                }
                if (!/^[\d-]/.test(l))
                    if (o(e) && o(e).isSVG && x.Names.SVGAttribute(n))
                        if (/^(height|width)$/i.test(n)) try {
                            l = e.getBBox()[n]
                        } catch (e) {
                            l = 0
                        } else l = e.getAttribute(n);
                        else l = s(e, x.Names.prefixCheck(n)[0]);
                return x.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + n + ": " + l), l
            },
            setPropertyValue: function(e, n, i, r, a) {
                var s = n;
                if ("scroll" === n) a.container ? a.container["scroll" + a.direction] = i : "Left" === a.direction ? t.scrollTo(i, a.alternateValue) : t.scrollTo(a.alternateValue, i);
                else if (x.Normalizations.registered[n] && "transform" === x.Normalizations.registered[n]("name", e)) x.Normalizations.registered[n]("inject", e, i), s = "transform", i = o(e).transformCache[n];
                else {
                    if (x.Hooks.registered[n]) {
                        var l = n,
                            u = x.Hooks.getRoot(n);
                        r = r || x.getPropertyValue(e, u), i = x.Hooks.injectValue(l, i, r), n = u
                    }
                    if (x.Normalizations.registered[n] && (i = x.Normalizations.registered[n]("inject", e, i), n = x.Normalizations.registered[n]("name", e)), s = x.Names.prefixCheck(n)[0], 8 >= p) try {
                        e.style[s] = i
                    } catch (e) {
                        b.debug && console.log("Browser does not support [" + i + "] for [" + s + "]")
                    } else o(e) && o(e).isSVG && x.Names.SVGAttribute(n) ? e.setAttribute(n, i) : e.style[s] = i;
                    b.debug >= 2 && console.log("Set " + n + " (" + s + "): " + i)
                }
                return [s, i]
            },
            flushTransformCache: function(e) {
                function t(t) {
                    return parseFloat(x.getPropertyValue(e, t))
                }
                var n = "";
                if ((p || b.State.isAndroid && !b.State.isChrome) && o(e).isSVG) {
                    var i = {
                        translate: [t("translateX"), t("translateY")],
                        skewX: [t("skewX")],
                        skewY: [t("skewY")],
                        scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                        rotate: [t("rotateZ"), 0, 0]
                    };
                    f.each(o(e).transformCache, function(e) {
                        /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), i[e] && (n += e + "(" + i[e].join(" ") + ") ", delete i[e])
                    })
                } else {
                    var r, a;
                    f.each(o(e).transformCache, function(t) {
                        return r = o(e).transformCache[t], "transformPerspective" === t ? (a = r, !0) : (9 === p && "rotateZ" === t && (t = "rotate"), void(n += t + r + " "))
                    }), a && (n = "perspective" + a + " " + n)
                }
                x.setPropertyValue(e, "transform", n)
            }
        };
        x.Hooks.register(), x.Normalizations.register(), b.hook = function(e, t, n) {
            var r = i;
            return e = a(e), f.each(e, function(e, a) {
                if (o(a) === i && b.init(a), n === i) r === i && (r = b.CSS.getPropertyValue(a, t));
                else {
                    var s = b.CSS.setPropertyValue(a, t, n);
                    "transform" === s[0] && b.CSS.flushTransformCache(a), r = s
                }
            }), r
        };
        var C = function() {
            function e() {
                return s ? A.promise || null : l
            }

            function r() {
                function e(e) {
                    function d(e, t) {
                        var n = i,
                            r = i,
                            o = i;
                        return m.isArray(e) ? (n = e[0], !m.isArray(e[1]) && /^[\d-]/.test(e[1]) || m.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? o = e[1] : (m.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || m.isArray(e[1])) && (r = t ? e[1] : u(e[1], s.duration), e[2] !== i && (o = e[2]))) : n = e, t || (r = r || s.easing), m.isFunction(n) && (n = n.call(a, T, k)), m.isFunction(o) && (o = o.call(a, T, k)), [n || 0, r, o]
                    }

                    function p(e, t) {
                        var n, i;
                        return i = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                            return n = e, ""
                        }), n || (n = x.Values.getUnitType(e)), [i, n]
                    }

                    function g() {
                        var e = {
                                myParent: a.parentNode || n.body,
                                position: x.getPropertyValue(a, "position"),
                                fontSize: x.getPropertyValue(a, "fontSize")
                            },
                            i = e.position === N.lastPosition && e.myParent === N.lastParent,
                            r = e.fontSize === N.lastFontSize;
                        N.lastParent = e.myParent, N.lastPosition = e.position, N.lastFontSize = e.fontSize;
                        var s = 100,
                            l = {};
                        if (r && i) l.emToPx = N.lastEmToPx, l.percentToPxWidth = N.lastPercentToPxWidth, l.percentToPxHeight = N.lastPercentToPxHeight;
                        else {
                            var u = o(a).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                            b.init(u), e.myParent.appendChild(u), f.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                b.CSS.setPropertyValue(u, t, "hidden")
                            }), b.CSS.setPropertyValue(u, "position", e.position), b.CSS.setPropertyValue(u, "fontSize", e.fontSize), b.CSS.setPropertyValue(u, "boxSizing", "content-box"), f.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                b.CSS.setPropertyValue(u, t, s + "%")
                            }), b.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = N.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = N.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = N.lastEmToPx = (parseFloat(x.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u)
                        }
                        return null === N.remToPx && (N.remToPx = parseFloat(x.getPropertyValue(n.body, "fontSize")) || 16), null === N.vwToPx && (N.vwToPx = parseFloat(t.innerWidth) / 100, N.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = N.remToPx, l.vwToPx = N.vwToPx, l.vhToPx = N.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), a), l
                    }
                    if (s.begin && 0 === T) try {
                        s.begin.call(h, h)
                    } catch (e) {
                        setTimeout(function() {
                            throw e
                        }, 1)
                    }
                    if ("scroll" === O) {
                        var w, C, S, E = /^x$/i.test(s.axis) ? "Left" : "Top",
                            P = parseFloat(s.offset) || 0;
                        s.container ? m.isWrapped(s.container) || m.isNode(s.container) ? (s.container = s.container[0] || s.container, w = s.container["scroll" + E], S = w + f(a).position()[E.toLowerCase()] + P) : s.container = null : (w = b.State.scrollAnchor[b.State["scrollProperty" + E]], C = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === E ? "Top" : "Left")]], S = f(a).offset()[E.toLowerCase()] + P), l = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: w,
                                currentValue: w,
                                endValue: S,
                                unitType: "",
                                easing: s.easing,
                                scrollData: {
                                    container: s.container,
                                    direction: E,
                                    alternateValue: C
                                }
                            },
                            element: a
                        }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, a)
                    } else if ("reverse" === O) {
                        if (!o(a).tweensContainer) return void f.dequeue(a, s.queue);
                        "none" === o(a).opts.display && (o(a).opts.display = "auto"), "hidden" === o(a).opts.visibility && (o(a).opts.visibility = "visible"), o(a).opts.loop = !1, o(a).opts.begin = null, o(a).opts.complete = null, y.easing || delete s.easing, y.duration || delete s.duration, s = f.extend({}, o(a).opts, s);
                        var q = f.extend(!0, {}, o(a).tweensContainer);
                        for (var j in q)
                            if ("element" !== j) {
                                var M = q[j].startValue;
                                q[j].startValue = q[j].currentValue = q[j].endValue, q[j].endValue = M, m.isEmptyObject(y) || (q[j].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + j + "): " + JSON.stringify(q[j]), a)
                            }
                        l = q
                    } else if ("start" === O) {
                        var q;
                        o(a).tweensContainer && o(a).isAnimating === !0 && (q = o(a).tweensContainer), f.each(v, function(e, t) {
                            if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                                var n = d(t, !0),
                                    r = n[0],
                                    a = n[1],
                                    o = n[2];
                                if (x.RegEx.isHex.test(r)) {
                                    for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(r), u = o ? x.Values.hexToRgb(o) : i, c = 0; c < s.length; c++) {
                                        var f = [l[c]];
                                        a && f.push(a), u !== i && f.push(u[c]), v[e + s[c]] = f
                                    }
                                    delete v[e]
                                }
                            }
                        });
                        for (var D in v) {
                            var L = d(v[D]),
                                H = L[0],
                                F = L[1],
                                $ = L[2];
                            D = x.Names.camelCase(D);
                            var R = x.Hooks.getRoot(D),
                                _ = !1;
                            if (o(a).isSVG || "tween" === R || x.Names.prefixCheck(R)[1] !== !1 || x.Normalizations.registered[R] !== i) {
                                (s.display !== i && null !== s.display && "none" !== s.display || s.visibility !== i && "hidden" !== s.visibility) && /opacity|filter/.test(D) && !$ && 0 !== H && ($ = 0), s._cacheValues && q && q[D] ? ($ === i && ($ = q[D].endValue + q[D].unitType), _ = o(a).rootPropertyValueCache[R]) : x.Hooks.registered[D] ? $ === i ? (_ = x.getPropertyValue(a, R), $ = x.getPropertyValue(a, D, _)) : _ = x.Hooks.templates[R][1] : $ === i && ($ = x.getPropertyValue(a, D));
                                var z, W, V, B = !1;
                                if (z = p(D, $), $ = z[0], V = z[1], z = p(D, H), H = z[0].replace(/^([+-\/*])=/, function(e, t) {
                                        return B = t, ""
                                    }), W = z[1], $ = parseFloat($) || 0, H = parseFloat(H) || 0, "%" === W && (/^(fontSize|lineHeight)$/.test(D) ? (H /= 100, W = "em") : /^scale/.test(D) ? (H /= 100, W = "") : /(Red|Green|Blue)$/i.test(D) && (H = H / 100 * 255, W = "")), /[\/*]/.test(B)) W = V;
                                else if (V !== W && 0 !== $)
                                    if (0 === H) W = V;
                                    else {
                                        r = r || g();
                                        var X = /margin|padding|left|right|width|text|word|letter/i.test(D) || /X$/.test(D) || "x" === D ? "x" : "y";
                                        switch (V) {
                                            case "%":
                                                $ *= "x" === X ? r.percentToPxWidth : r.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                $ *= r[V + "ToPx"]
                                        }
                                        switch (W) {
                                            case "%":
                                                $ *= 1 / ("x" === X ? r.percentToPxWidth : r.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                $ *= 1 / r[W + "ToPx"]
                                        }
                                    }
                                switch (B) {
                                    case "+":
                                        H = $ + H;
                                        break;
                                    case "-":
                                        H = $ - H;
                                        break;
                                    case "*":
                                        H *= $;
                                        break;
                                    case "/":
                                        H = $ / H
                                }
                                l[D] = {
                                    rootPropertyValue: _,
                                    startValue: $,
                                    currentValue: $,
                                    endValue: H,
                                    unitType: W,
                                    easing: F
                                }, b.debug && console.log("tweensContainer (" + D + "): " + JSON.stringify(l[D]), a)
                            } else b.debug && console.log("Skipping [" + R + "] due to a lack of browser support.")
                        }
                        l.element = a
                    }
                    l.element && (x.Values.addClass(a, "velocity-animating"), I.push(l), "" === s.queue && (o(a).tweensContainer = l, o(a).opts = s), o(a).isAnimating = !0, T === k - 1 ? (b.State.calls.push([I, h, s, null, A.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, c())) : T++)
                }
                var r, a = this,
                    s = f.extend({}, b.defaults, y),
                    l = {};
                switch (o(a) === i && b.init(a), parseFloat(s.delay) && s.queue !== !1 && f.queue(a, s.queue, function(e) {
                    b.velocityQueueEntryFlag = !0, o(a).delayTimer = {
                        setTimeout: setTimeout(e, parseFloat(s.delay)),
                        next: e
                    }
                }), s.duration.toString().toLowerCase()) {
                    case "fast":
                        s.duration = 200;
                        break;
                    case "normal":
                        s.duration = g;
                        break;
                    case "slow":
                        s.duration = 600;
                        break;
                    default:
                        s.duration = parseFloat(s.duration) || 1
                }
                b.mock !== !1 && (b.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = u(s.easing, s.duration), s.begin && !m.isFunction(s.begin) && (s.begin = null), s.progress && !m.isFunction(s.progress) && (s.progress = null), s.complete && !m.isFunction(s.complete) && (s.complete = null), s.display !== i && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(a))), s.visibility !== i && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : f.queue(a, s.queue, function(t, n) {
                    return n === !0 ? (A.promise && A.resolver(h), !0) : (b.velocityQueueEntryFlag = !0, void e(t))
                }), "" !== s.queue && "fx" !== s.queue || "inprogress" === f.queue(a)[0] || f.dequeue(a)
            }
            var s, l, p, h, v, y, w = arguments[0] && (arguments[0].p || f.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));
            if (m.isWrapped(this) ? (s = !1, p = 0, h = this, l = this) : (s = !0, p = 1, h = w ? arguments[0].elements || arguments[0].e : arguments[0]), h = a(h)) {
                w ? (v = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (v = arguments[p], y = arguments[p + 1]);
                var k = h.length,
                    T = 0;
                if (!/^(stop|finish)$/i.test(v) && !f.isPlainObject(y)) {
                    var S = p + 1;
                    y = {};
                    for (var E = S; E < arguments.length; E++) m.isArray(arguments[E]) || !/^(fast|normal|slow)$/i.test(arguments[E]) && !/^\d/.test(arguments[E]) ? m.isString(arguments[E]) || m.isArray(arguments[E]) ? y.easing = arguments[E] : m.isFunction(arguments[E]) && (y.complete = arguments[E]) : y.duration = arguments[E]
                }
                var A = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                s && b.Promise && (A.promise = new b.Promise(function(e, t) {
                    A.resolver = e, A.rejecter = t
                }));
                var O;
                switch (v) {
                    case "scroll":
                        O = "scroll";
                        break;
                    case "reverse":
                        O = "reverse";
                        break;
                    case "finish":
                    case "stop":
                        f.each(h, function(e, t) {
                            o(t) && o(t).delayTimer && (clearTimeout(o(t).delayTimer.setTimeout), o(t).delayTimer.next && o(t).delayTimer.next(), delete o(t).delayTimer)
                        });
                        var P = [];
                        return f.each(b.State.calls, function(e, t) {
                            t && f.each(t[1], function(n, r) {
                                var a = y === i ? "" : y;
                                return a !== !0 && t[2].queue !== a && (y !== i || t[2].queue !== !1) || void f.each(h, function(n, i) {
                                    i === r && ((y === !0 || m.isString(y)) && (f.each(f.queue(i, m.isString(y) ? y : ""), function(e, t) {
                                        m.isFunction(t) && t(null, !0)
                                    }), f.queue(i, m.isString(y) ? y : "", [])), "stop" === v ? (o(i) && o(i).tweensContainer && a !== !1 && f.each(o(i).tweensContainer, function(e, t) {
                                        t.endValue = t.currentValue
                                    }), P.push(e)) : "finish" === v && (t[2].duration = 1))
                                })
                            })
                        }), "stop" === v && (f.each(P, function(e, t) {
                            d(t, !0)
                        }), A.promise && A.resolver(h)), e();
                    default:
                        if (!f.isPlainObject(v) || m.isEmptyObject(v)) {
                            if (m.isString(v) && b.Redirects[v]) {
                                var q = f.extend({}, y),
                                    j = q.duration,
                                    M = q.delay || 0;
                                return q.backwards === !0 && (h = f.extend(!0, [], h).reverse()), f.each(h, function(e, t) {
                                    parseFloat(q.stagger) ? q.delay = M + parseFloat(q.stagger) * e : m.isFunction(q.stagger) && (q.delay = M + q.stagger.call(t, e, k)), q.drag && (q.duration = parseFloat(j) || (/^(callout|transition)/.test(v) ? 1e3 : g), q.duration = Math.max(q.duration * (q.backwards ? 1 - e / k : (e + 1) / k), .75 * q.duration, 200)), b.Redirects[v].call(t, t, q || {}, e, k, h, A.promise ? A : i)
                                }), e()
                            }
                            var D = "Velocity: First argument (" + v + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return A.promise ? A.rejecter(new Error(D)) : console.log(D), e()
                        }
                        O = "start"
                }
                var N = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    I = [];
                f.each(h, function(e, t) {
                    m.isNode(t) && r.call(t)
                });
                var L, q = f.extend({}, b.defaults, y);
                if (q.loop = parseInt(q.loop), L = 2 * q.loop - 1, q.loop)
                    for (var H = 0; L > H; H++) {
                        var F = {
                            delay: q.delay,
                            progress: q.progress
                        };
                        H === L - 1 && (F.display = q.display, F.visibility = q.visibility, F.complete = q.complete), C(h, "reverse", F)
                    }
                return e()
            }
        };
        b = f.extend(C, b), b.animate = C;
        var k = t.requestAnimationFrame || h;
        return b.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", function() {
            n.hidden ? (k = function(e) {
                return setTimeout(function() {
                    e(!0)
                }, 16)
            }, c()) : k = t.requestAnimationFrame || h
        }), e.Velocity = b, e !== t && (e.fn.velocity = C, e.fn.velocity.defaults = b.defaults), f.each(["Down", "Up"], function(e, t) {
            b.Redirects["slide" + t] = function(e, n, r, a, o, s) {
                var l = f.extend({}, n),
                    u = l.begin,
                    c = l.complete,
                    d = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    },
                    p = {};
                l.display === i && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                    u && u.call(o, o);
                    for (var n in d) {
                        p[n] = e.style[n];
                        var i = b.CSS.getPropertyValue(e, n);
                        d[n] = "Down" === t ? [i, 0] : [0, i]
                    }
                    p.overflow = e.style.overflow, e.style.overflow = "hidden"
                }, l.complete = function() {
                    for (var t in p) e.style[t] = p[t];
                    c && c.call(o, o), s && s.resolver(o)
                }, b(e, d, l)
            }
        }), f.each(["In", "Out"], function(e, t) {
            b.Redirects["fade" + t] = function(e, n, r, a, o, s) {
                var l = f.extend({}, n),
                    u = {
                        opacity: "In" === t ? 1 : 0
                    },
                    c = l.complete;
                l.complete = r !== a - 1 ? l.begin = null : function() {
                    c && c.call(o, o), s && s.resolver(o)
                }, l.display === i && (l.display = "In" === t ? "auto" : "none"), b(this, u, l)
            }
        }), b
    }(window.jQuery || window.Zepto || window, window, document)
})), ! function(e, t, n, i) {
    "use strict";

    function r(e, t, n) {
        return setTimeout(c(e, n), t)
    }

    function a(e, t, n) {
        return !!Array.isArray(e) && (o(e, n[t], n), !0)
    }

    function o(e, t, n) {
        var r;
        if (e)
            if (e.forEach) e.forEach(t, n);
            else if (e.length !== i)
            for (r = 0; r < e.length;) t.call(n, e[r], r, e), r++;
        else
            for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e)
    }

    function s(e, t, n) {
        for (var r = Object.keys(t), a = 0; a < r.length;)(!n || n && e[r[a]] === i) && (e[r[a]] = t[r[a]]), a++;
        return e
    }

    function l(e, t) {
        return s(e, t, !0)
    }

    function u(e, t, n) {
        var i, r = t.prototype;
        i = e.prototype = Object.create(r), i.constructor = e, i._super = r, n && s(i, n)
    }

    function c(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function d(e, t) {
        return typeof e == ce ? e.apply(t ? t[0] || i : i, t) : e
    }

    function f(e, t) {
        return e === i ? t : e
    }

    function p(e, t, n) {
        o(g(t), function(t) {
            e.addEventListener(t, n, !1)
        })
    }

    function h(e, t, n) {
        o(g(t), function(t) {
            e.removeEventListener(t, n, !1)
        })
    }

    function m(e, t) {
        for (; e;) {
            if (e == t) return !0;
            e = e.parentNode
        }
        return !1
    }

    function v(e, t) {
        return e.indexOf(t) > -1
    }

    function g(e) {
        return e.trim().split(/\s+/g)
    }

    function y(e, t, n) {
        if (e.indexOf && !n) return e.indexOf(t);
        for (var i = 0; i < e.length;) {
            if (n && e[i][n] == t || !n && e[i] === t) return i;
            i++
        }
        return -1
    }

    function b(e) {
        return Array.prototype.slice.call(e, 0)
    }

    function w(e, t, n) {
        for (var i = [], r = [], a = 0; a < e.length;) {
            var o = t ? e[a][t] : e[a];
            y(r, o) < 0 && i.push(e[a]), r[a] = o, a++
        }
        return n && (i = t ? i.sort(function(e, n) {
            return e[t] > n[t]
        }) : i.sort()), i
    }

    function x(e, t) {
        for (var n, r, a = t[0].toUpperCase() + t.slice(1), o = 0; o < le.length;) {
            if (n = le[o], r = n ? n + a : t, r in e) return r;
            o++
        }
        return i
    }

    function C() {
        return he++
    }

    function k(e) {
        var t = e.ownerDocument;
        return t.defaultView || t.parentWindow
    }

    function T(e, t) {
        var n = this;
        this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
            d(e.options.enable, [e]) && n.handler(t)
        }, this.init()
    }

    function S(e) {
        var t, n = e.options.inputClass;
        return new(t = n ? n : ge ? $ : ye ? z : ve ? V : F)(e, E)
    }

    function E(e, t, n) {
        var i = n.pointers.length,
            r = n.changedPointers.length,
            a = t & Te && 0 === i - r,
            o = t & (Ee | Ae) && 0 === i - r;
        n.isFirst = !!a, n.isFinal = !!o, a && (e.session = {}), n.eventType = t, A(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
    }

    function A(e, t) {
        var n = e.session,
            i = t.pointers,
            r = i.length;
        n.firstInput || (n.firstInput = q(t)), r > 1 && !n.firstMultiple ? n.firstMultiple = q(t) : 1 === r && (n.firstMultiple = !1);
        var a = n.firstInput,
            o = n.firstMultiple,
            s = o ? o.center : a.center,
            l = t.center = j(i);
        t.timeStamp = pe(), t.deltaTime = t.timeStamp - a.timeStamp, t.angle = I(s, l), t.distance = N(s, l), O(n, t), t.offsetDirection = D(t.deltaX, t.deltaY), t.scale = o ? H(o.pointers, i) : 1, t.rotation = o ? L(o.pointers, i) : 0, P(n, t);
        var u = e.element;
        m(t.srcEvent.target, u) && (u = t.srcEvent.target), t.target = u
    }

    function O(e, t) {
        var n = t.center,
            i = e.offsetDelta || {},
            r = e.prevDelta || {},
            a = e.prevInput || {};
        (t.eventType === Te || a.eventType === Ee) && (r = e.prevDelta = {
            x: a.deltaX || 0,
            y: a.deltaY || 0
        }, i = e.offsetDelta = {
            x: n.x,
            y: n.y
        }), t.deltaX = r.x + (n.x - i.x), t.deltaY = r.y + (n.y - i.y)
    }

    function P(e, t) {
        var n, r, a, o, s = e.lastInterval || t,
            l = t.timeStamp - s.timeStamp;
        if (t.eventType != Ae && (l > ke || s.velocity === i)) {
            var u = s.deltaX - t.deltaX,
                c = s.deltaY - t.deltaY,
                d = M(l, u, c);
            r = d.x, a = d.y, n = fe(d.x) > fe(d.y) ? d.x : d.y, o = D(u, c), e.lastInterval = t
        } else n = s.velocity, r = s.velocityX, a = s.velocityY, o = s.direction;
        t.velocity = n, t.velocityX = r, t.velocityY = a, t.direction = o
    }

    function q(e) {
        for (var t = [], n = 0; n < e.pointers.length;) t[n] = {
            clientX: de(e.pointers[n].clientX),
            clientY: de(e.pointers[n].clientY)
        }, n++;
        return {
            timeStamp: pe(),
            pointers: t,
            center: j(t),
            deltaX: e.deltaX,
            deltaY: e.deltaY
        }
    }

    function j(e) {
        var t = e.length;
        if (1 === t) return {
            x: de(e[0].clientX),
            y: de(e[0].clientY)
        };
        for (var n = 0, i = 0, r = 0; t > r;) n += e[r].clientX, i += e[r].clientY, r++;
        return {
            x: de(n / t),
            y: de(i / t)
        }
    }

    function M(e, t, n) {
        return {
            x: t / e || 0,
            y: n / e || 0
        }
    }

    function D(e, t) {
        return e === t ? Oe : fe(e) >= fe(t) ? e > 0 ? Pe : qe : t > 0 ? je : Me
    }

    function N(e, t, n) {
        n || (n = Le);
        var i = t[n[0]] - e[n[0]],
            r = t[n[1]] - e[n[1]];
        return Math.sqrt(i * i + r * r)
    }

    function I(e, t, n) {
        n || (n = Le);
        var i = t[n[0]] - e[n[0]],
            r = t[n[1]] - e[n[1]];
        return 180 * Math.atan2(r, i) / Math.PI
    }

    function L(e, t) {
        return I(t[1], t[0], He) - I(e[1], e[0], He)
    }

    function H(e, t) {
        return N(t[0], t[1], He) / N(e[0], e[1], He)
    }

    function F() {
        this.evEl = $e, this.evWin = Re, this.allow = !0, this.pressed = !1, T.apply(this, arguments)
    }

    function $() {
        this.evEl = We, this.evWin = Ve, T.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function R() {
        this.evTarget = Xe, this.evWin = Qe, this.started = !1, T.apply(this, arguments)
    }

    function _(e, t) {
        var n = b(e.touches),
            i = b(e.changedTouches);
        return t & (Ee | Ae) && (n = w(n.concat(i), "identifier", !0)), [n, i]
    }

    function z() {
        this.evTarget = Ue, this.targetIds = {}, T.apply(this, arguments)
    }

    function W(e, t) {
        var n = b(e.touches),
            i = this.targetIds;
        if (t & (Te | Se) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
        var r, a, o = b(e.changedTouches),
            s = [],
            l = this.target;
        if (a = n.filter(function(e) {
                return m(e.target, l)
            }), t === Te)
            for (r = 0; r < a.length;) i[a[r].identifier] = !0, r++;
        for (r = 0; r < o.length;) i[o[r].identifier] && s.push(o[r]), t & (Ee | Ae) && delete i[o[r].identifier], r++;
        return s.length ? [w(a.concat(s), "identifier", !0), s] : void 0
    }

    function V() {
        T.apply(this, arguments);
        var e = c(this.handler, this);
        this.touch = new z(this.manager, e), this.mouse = new F(this.manager, e)
    }

    function B(e, t) {
        this.manager = e, this.set(t)
    }

    function X(e) {
        if (v(e, tt)) return tt;
        var t = v(e, nt),
            n = v(e, it);
        return t && n ? nt + " " + it : t || n ? t ? nt : it : v(e, et) ? et : Ke
    }

    function Q(e) {
        this.id = C(), this.manager = null, this.options = l(e || {}, this.defaults), this.options.enable = f(this.options.enable, !0), this.state = rt, this.simultaneous = {}, this.requireFail = []
    }

    function Y(e) {
        return e & ut ? "cancel" : e & st ? "end" : e & ot ? "move" : e & at ? "start" : ""
    }

    function U(e) {
        return e == Me ? "down" : e == je ? "up" : e == Pe ? "left" : e == qe ? "right" : ""
    }

    function G(e, t) {
        var n = t.manager;
        return n ? n.get(e) : e
    }

    function Z() {
        Q.apply(this, arguments)
    }

    function J() {
        Z.apply(this, arguments), this.pX = null, this.pY = null
    }

    function K() {
        Z.apply(this, arguments)
    }

    function ee() {
        Q.apply(this, arguments), this._timer = null, this._input = null
    }

    function te() {
        Z.apply(this, arguments)
    }

    function ne() {
        Z.apply(this, arguments)
    }

    function ie() {
        Q.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function re(e, t) {
        return t = t || {}, t.recognizers = f(t.recognizers, re.defaults.preset), new ae(e, t)
    }

    function ae(e, t) {
        t = t || {}, this.options = l(t, re.defaults), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = e, this.input = S(this), this.touchAction = new B(this, this.options.touchAction), oe(this, !0), o(t.recognizers, function(e) {
            var t = this.add(new e[0](e[1]));
            e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
        }, this)
    }

    function oe(e, t) {
        var n = e.element;
        o(e.options.cssProps, function(e, i) {
            n.style[x(n.style, i)] = t ? e : ""
        })
    }

    function se(e, n) {
        var i = t.createEvent("Event");
        i.initEvent(e, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
    }
    var le = ["", "webkit", "moz", "MS", "ms", "o"],
        ue = t.createElement("div"),
        ce = "function",
        de = Math.round,
        fe = Math.abs,
        pe = Date.now,
        he = 1,
        me = /mobile|tablet|ip(ad|hone|od)|android/i,
        ve = "ontouchstart" in e,
        ge = x(e, "PointerEvent") !== i,
        ye = ve && me.test(navigator.userAgent),
        be = "touch",
        we = "pen",
        xe = "mouse",
        Ce = "kinect",
        ke = 25,
        Te = 1,
        Se = 2,
        Ee = 4,
        Ae = 8,
        Oe = 1,
        Pe = 2,
        qe = 4,
        je = 8,
        Me = 16,
        De = Pe | qe,
        Ne = je | Me,
        Ie = De | Ne,
        Le = ["x", "y"],
        He = ["clientX", "clientY"];
    T.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(k(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(k(this.element), this.evWin, this.domHandler)
        }
    };
    var Fe = {
            mousedown: Te,
            mousemove: Se,
            mouseup: Ee
        },
        $e = "mousedown",
        Re = "mousemove mouseup";
    u(F, T, {
        handler: function(e) {
            var t = Fe[e.type];
            t & Te && 0 === e.button && (this.pressed = !0), t & Se && 1 !== e.which && (t = Ee), this.pressed && this.allow && (t & Ee && (this.pressed = !1), this.callback(this.manager, t, {
                pointers: [e],
                changedPointers: [e],
                pointerType: xe,
                srcEvent: e
            }))
        }
    });
    var _e = {
            pointerdown: Te,
            pointermove: Se,
            pointerup: Ee,
            pointercancel: Ae,
            pointerout: Ae
        },
        ze = {
            2: be,
            3: we,
            4: xe,
            5: Ce
        },
        We = "pointerdown",
        Ve = "pointermove pointerup pointercancel";
    e.MSPointerEvent && (We = "MSPointerDown", Ve = "MSPointerMove MSPointerUp MSPointerCancel"), u($, T, {
        handler: function(e) {
            var t = this.store,
                n = !1,
                i = e.type.toLowerCase().replace("ms", ""),
                r = _e[i],
                a = ze[e.pointerType] || e.pointerType,
                o = a == be,
                s = y(t, e.pointerId, "pointerId");
            r & Te && (0 === e.button || o) ? 0 > s && (t.push(e), s = t.length - 1) : r & (Ee | Ae) && (n = !0), 0 > s || (t[s] = e, this.callback(this.manager, r, {
                pointers: t,
                changedPointers: [e],
                pointerType: a,
                srcEvent: e
            }), n && t.splice(s, 1))
        }
    });
    var Be = {
            touchstart: Te,
            touchmove: Se,
            touchend: Ee,
            touchcancel: Ae
        },
        Xe = "touchstart",
        Qe = "touchstart touchmove touchend touchcancel";
    u(R, T, {
        handler: function(e) {
            var t = Be[e.type];
            if (t === Te && (this.started = !0), this.started) {
                var n = _.call(this, e, t);
                t & (Ee | Ae) && 0 === n[0].length - n[1].length && (this.started = !1), this.callback(this.manager, t, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: be,
                    srcEvent: e
                })
            }
        }
    });
    var Ye = {
            touchstart: Te,
            touchmove: Se,
            touchend: Ee,
            touchcancel: Ae
        },
        Ue = "touchstart touchmove touchend touchcancel";
    u(z, T, {
        handler: function(e) {
            var t = Ye[e.type],
                n = W.call(this, e, t);
            n && this.callback(this.manager, t, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: be,
                srcEvent: e
            })
        }
    }), u(V, T, {
        handler: function(e, t, n) {
            var i = n.pointerType == be,
                r = n.pointerType == xe;
            if (i) this.mouse.allow = !1;
            else if (r && !this.mouse.allow) return;
            t & (Ee | Ae) && (this.mouse.allow = !0), this.callback(e, t, n)
        },
        destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var Ge = x(ue.style, "touchAction"),
        Ze = Ge !== i,
        Je = "compute",
        Ke = "auto",
        et = "manipulation",
        tt = "none",
        nt = "pan-x",
        it = "pan-y";
    B.prototype = {
        set: function(e) {
            e == Je && (e = this.compute()), Ze && (this.manager.element.style[Ge] = e), this.actions = e.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var e = [];
            return o(this.manager.recognizers, function(t) {
                d(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
            }), X(e.join(" "))
        },
        preventDefaults: function(e) {
            if (!Ze) {
                var t = e.srcEvent,
                    n = e.offsetDirection;
                if (this.manager.session.prevented) return void t.preventDefault();
                var i = this.actions,
                    r = v(i, tt),
                    a = v(i, it),
                    o = v(i, nt);
                return r || a && n & De || o && n & Ne ? this.preventSrc(t) : void 0
            }
        },
        preventSrc: function(e) {
            this.manager.session.prevented = !0, e.preventDefault()
        }
    };
    var rt = 1,
        at = 2,
        ot = 4,
        st = 8,
        lt = st,
        ut = 16,
        ct = 32;
    Q.prototype = {
        defaults: {},
        set: function(e) {
            return s(this.options, e), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function(e) {
            if (a(e, "recognizeWith", this)) return this;
            var t = this.simultaneous;
            return e = G(e, this), t[e.id] || (t[e.id] = e, e.recognizeWith(this)), this
        },
        dropRecognizeWith: function(e) {
            return a(e, "dropRecognizeWith", this) ? this : (e = G(e, this), delete this.simultaneous[e.id], this)
        },
        requireFailure: function(e) {
            if (a(e, "requireFailure", this)) return this;
            var t = this.requireFail;
            return e = G(e, this), -1 === y(t, e) && (t.push(e), e.requireFailure(this)), this
        },
        dropRequireFailure: function(e) {
            if (a(e, "dropRequireFailure", this)) return this;
            e = G(e, this);
            var t = y(this.requireFail, e);
            return t > -1 && this.requireFail.splice(t, 1), this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(e) {
            return !!this.simultaneous[e.id]
        },
        emit: function(e) {
            function t(t) {
                n.manager.emit(n.options.event + (t ? Y(i) : ""), e)
            }
            var n = this,
                i = this.state;
            st > i && t(!0), t(), i >= st && t(!0)
        },
        tryEmit: function(e) {
            return this.canEmit() ? this.emit(e) : void(this.state = ct)
        },
        canEmit: function() {
            for (var e = 0; e < this.requireFail.length;) {
                if (!(this.requireFail[e].state & (ct | rt))) return !1;
                e++
            }
            return !0
        },
        recognize: function(e) {
            var t = s({}, e);
            return d(this.options.enable, [this, t]) ? (this.state & (lt | ut | ct) && (this.state = rt), this.state = this.process(t), void(this.state & (at | ot | st | ut) && this.tryEmit(t))) : (this.reset(), void(this.state = ct))
        },
        process: function() {},
        getTouchAction: function() {},
        reset: function() {}
    }, u(Z, Q, {
        defaults: {
            pointers: 1
        },
        attrTest: function(e) {
            var t = this.options.pointers;
            return 0 === t || e.pointers.length === t
        },
        process: function(e) {
            var t = this.state,
                n = e.eventType,
                i = t & (at | ot),
                r = this.attrTest(e);
            return i && (n & Ae || !r) ? t | ut : i || r ? n & Ee ? t | st : t & at ? t | ot : at : ct
        }
    }), u(J, Z, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Ie
        },
        getTouchAction: function() {
            var e = this.options.direction,
                t = [];
            return e & De && t.push(it), e & Ne && t.push(nt), t
        },
        directionTest: function(e) {
            var t = this.options,
                n = !0,
                i = e.distance,
                r = e.direction,
                a = e.deltaX,
                o = e.deltaY;
            return r & t.direction || (t.direction & De ? (r = 0 === a ? Oe : 0 > a ? Pe : qe, n = a != this.pX, i = Math.abs(e.deltaX)) : (r = 0 === o ? Oe : 0 > o ? je : Me, n = o != this.pY, i = Math.abs(e.deltaY))), e.direction = r, n && i > t.threshold && r & t.direction
        },
        attrTest: function(e) {
            return Z.prototype.attrTest.call(this, e) && (this.state & at || !(this.state & at) && this.directionTest(e))
        },
        emit: function(e) {
            this.pX = e.deltaX, this.pY = e.deltaY;
            var t = U(e.direction);
            t && this.manager.emit(this.options.event + t, e), this._super.emit.call(this, e)
        }
    }), u(K, Z, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [tt]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & at)
        },
        emit: function(e) {
            if (this._super.emit.call(this, e), 1 !== e.scale) {
                var t = e.scale < 1 ? "in" : "out";
                this.manager.emit(this.options.event + t, e)
            }
        }
    }), u(ee, Q, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 500,
            threshold: 5
        },
        getTouchAction: function() {
            return [Ke]
        },
        process: function(e) {
            var t = this.options,
                n = e.pointers.length === t.pointers,
                i = e.distance < t.threshold,
                a = e.deltaTime > t.time;
            if (this._input = e, !i || !n || e.eventType & (Ee | Ae) && !a) this.reset();
            else if (e.eventType & Te) this.reset(), this._timer = r(function() {
                this.state = lt, this.tryEmit()
            }, t.time, this);
            else if (e.eventType & Ee) return lt;
            return ct
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(e) {
            this.state === lt && (e && e.eventType & Ee ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = pe(), this.manager.emit(this.options.event, this._input)))
        }
    }), u(te, Z, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [tt]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & at)
        }
    }), u(ne, Z, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .65,
            direction: De | Ne,
            pointers: 1
        },
        getTouchAction: function() {
            return J.prototype.getTouchAction.call(this)
        },
        attrTest: function(e) {
            var t, n = this.options.direction;
            return n & (De | Ne) ? t = e.velocity : n & De ? t = e.velocityX : n & Ne && (t = e.velocityY), this._super.attrTest.call(this, e) && n & e.direction && e.distance > this.options.threshold && fe(t) > this.options.velocity && e.eventType & Ee
        },
        emit: function(e) {
            var t = U(e.direction);
            t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
        }
    }), u(ie, Q, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [et]
        },
        process: function(e) {
            var t = this.options,
                n = e.pointers.length === t.pointers,
                i = e.distance < t.threshold,
                a = e.deltaTime < t.time;
            if (this.reset(), e.eventType & Te && 0 === this.count) return this.failTimeout();
            if (i && a && n) {
                if (e.eventType != Ee) return this.failTimeout();
                var o = !this.pTime || e.timeStamp - this.pTime < t.interval,
                    s = !this.pCenter || N(this.pCenter, e.center) < t.posThreshold;
                this.pTime = e.timeStamp, this.pCenter = e.center, s && o ? this.count += 1 : this.count = 1, this._input = e;
                var l = this.count % t.taps;
                if (0 === l) return this.hasRequireFailures() ? (this._timer = r(function() {
                    this.state = lt, this.tryEmit()
                }, t.interval, this), at) : lt
            }
            return ct
        },
        failTimeout: function() {
            return this._timer = r(function() {
                this.state = ct
            }, this.options.interval, this), ct
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == lt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), re.VERSION = "2.0.4", re.defaults = {
        domEvents: !1,
        touchAction: Je,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
            [te, {
                enable: !1
            }],
            [K, {
                    enable: !1
                },
                ["rotate"]
            ],
            [ne, {
                direction: De
            }],
            [J, {
                    direction: De
                },
                ["swipe"]
            ],
            [ie],
            [ie, {
                    event: "doubletap",
                    taps: 2
                },
                ["tap"]
            ],
            [ee]
        ],
        cssProps: {
            userSelect: "default",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var dt = 1,
        ft = 2;
    ae.prototype = {
        set: function(e) {
            return s(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
        },
        stop: function(e) {
            this.session.stopped = e ? ft : dt
        },
        recognize: function(e) {
            var t = this.session;
            if (!t.stopped) {
                this.touchAction.preventDefaults(e);
                var n, i = this.recognizers,
                    r = t.curRecognizer;
                (!r || r && r.state & lt) && (r = t.curRecognizer = null);
                for (var a = 0; a < i.length;) n = i[a], t.stopped === ft || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(e), !r && n.state & (at | ot | st) && (r = t.curRecognizer = n), a++
            }
        },
        get: function(e) {
            if (e instanceof Q) return e;
            for (var t = this.recognizers, n = 0; n < t.length; n++)
                if (t[n].options.event == e) return t[n];
            return null
        },
        add: function(e) {
            if (a(e, "add", this)) return this;
            var t = this.get(e.options.event);
            return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
        },
        remove: function(e) {
            if (a(e, "remove", this)) return this;
            var t = this.recognizers;
            return e = this.get(e), t.splice(y(t, e), 1), this.touchAction.update(), this
        },
        on: function(e, t) {
            var n = this.handlers;
            return o(g(e), function(e) {
                n[e] = n[e] || [], n[e].push(t)
            }), this
        },
        off: function(e, t) {
            var n = this.handlers;
            return o(g(e), function(e) {
                t ? n[e].splice(y(n[e], t), 1) : delete n[e]
            }), this
        },
        emit: function(e, t) {
            this.options.domEvents && se(e, t);
            var n = this.handlers[e] && this.handlers[e].slice();
            if (n && n.length) {
                t.type = e, t.preventDefault = function() {
                    t.srcEvent.preventDefault()
                };
                for (var i = 0; i < n.length;) n[i](t), i++
            }
        },
        destroy: function() {
            this.element && oe(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, s(re, {
        INPUT_START: Te,
        INPUT_MOVE: Se,
        INPUT_END: Ee,
        INPUT_CANCEL: Ae,
        STATE_POSSIBLE: rt,
        STATE_BEGAN: at,
        STATE_CHANGED: ot,
        STATE_ENDED: st,
        STATE_RECOGNIZED: lt,
        STATE_CANCELLED: ut,
        STATE_FAILED: ct,
        DIRECTION_NONE: Oe,
        DIRECTION_LEFT: Pe,
        DIRECTION_RIGHT: qe,
        DIRECTION_UP: je,
        DIRECTION_DOWN: Me,
        DIRECTION_HORIZONTAL: De,
        DIRECTION_VERTICAL: Ne,
        DIRECTION_ALL: Ie,
        Manager: ae,
        Input: T,
        TouchAction: B,
        TouchInput: z,
        MouseInput: F,
        PointerEventInput: $,
        TouchMouseInput: V,
        SingleTouchInput: R,
        Recognizer: Q,
        AttrRecognizer: Z,
        Tap: ie,
        Pan: J,
        Swipe: ne,
        Pinch: K,
        Rotate: te,
        Press: ee,
        on: p,
        off: h,
        each: o,
        merge: l,
        extend: s,
        inherit: u,
        bindFn: c,
        prefixed: x
    }), typeof define == ce && define.amd ? define(function() {
        return re
    }) : "undefined" != typeof module && module.exports ? module.exports = re : e[n] = re
}(window, document, "Hammer"),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], e) : "object" == typeof exports ? e(require("jquery"), require("hammerjs")) : e(jQuery, Hammer)
}(function(e, t) {
    function n(n, i) {
        var r = e(n);
        r.data("hammer") || r.data("hammer", new t(r[0], i))
    }
    e.fn.hammer = function(e) {
        return this.each(function() {
            n(this, e)
        })
    }, t.Manager.prototype.emit = function(t) {
        return function(n, i) {
            t.call(this, n, i), e(this.element).trigger({
                type: n,
                gesture: i
            })
        }
    }(t.Manager.prototype.emit)
}),
function(e) {
    e.Package ? Materialize = {} : e.Materialize = {}
}(window),
function(e) {
    for (var t = 0, n = ["webkit", "moz"], i = e.requestAnimationFrame, r = e.cancelAnimationFrame, a = n.length; --a >= 0 && !i;) i = e[n[a] + "RequestAnimationFrame"], r = e[n[a] + "CancelRequestAnimationFrame"];
    i && r || (i = function(e) {
        var n = +Date.now(),
            i = Math.max(t + 16, n);
        return setTimeout(function() {
            e(t = i)
        }, i - n)
    }, r = clearTimeout), e.requestAnimationFrame = i, e.cancelAnimationFrame = r
}(window), Materialize.guid = function() {
    function e() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    return function() {
        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
    }
}(), Materialize.escapeHash = function(e) {
    return e.replace(/(:|\.|\[|\]|,|=)/g, "\\$1")
}, Materialize.elementOrParentIsFixed = function(e) {
    var t = $(e),
        n = t.add(t.parents()),
        i = !1;
    return n.each(function() {
        if ("fixed" === $(this).css("position")) return i = !0, !1
    }), i
};
var getTime = Date.now || function() {
return (new Date).getTime()
};
Materialize.throttle = function(e, t, n) {
var i, r, a, o = null,
    s = 0;
n || (n = {});
var l = function() {
    s = n.leading === !1 ? 0 : getTime(), o = null, a = e.apply(i, r), i = r = null
};
return function() {
    var u = getTime();
    s || n.leading !== !1 || (s = u);
    var c = t - (u - s);
    return i = this, r = arguments, c <= 0 ? (clearTimeout(o), o = null, s = u, a = e.apply(i, r), i = r = null) : o || n.trailing === !1 || (o = setTimeout(l, c)), a
}
};
var Vel;
Vel = jQuery ? jQuery.Velocity : $ ? $.Velocity : Velocity,
function(e) {
    e.fn.collapsible = function(t) {
        var n = {
            accordion: void 0,
            onOpen: void 0,
            onClose: void 0
        };
        return t = e.extend(n, t), this.each(function() {
            function n(t) {
                u = l.find("> li > .collapsible-header"), t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }), u.not(t).removeClass("active").parent().removeClass("active"), u.not(t).parent().children(".collapsible-body").stop(!0, !1).each(function() {
                    e(this).is(":visible") && e(this).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            e(this).css("height", ""), a(e(this).siblings(".collapsible-header"))
                        }
                    })
                })
            }

            function i(t) {
                t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                })
            }

            function r(e) {
                t.accordion || "accordion" === c || void 0 === c ? n(e) : i(e), a(e)
            }

            function a(e) {
                e.hasClass("active") ? "function" == typeof t.onOpen && t.onOpen.call(this, e.parent()) : "function" == typeof t.onClose && t.onClose.call(this, e.parent())
            }

            function o(e) {
                var t = s(e);
                return t.length > 0
            }

            function s(e) {
                return e.closest("li > .collapsible-header")
            }
            var l = e(this),
                u = e(this).find("> li > .collapsible-header"),
                c = l.data("collapsible");
            l.off("click.collapse", "> li > .collapsible-header"), u.off("click.collapse"), l.on("click.collapse", "> li > .collapsible-header", function(t) {
                var n = e(t.target);
                o(n) && (n = s(n)), n.toggleClass("active"), r(n)
            }), t.accordion || "accordion" === c || void 0 === c ? r(u.filter(".active").first()) : u.filter(".active").each(function() {
                r(e(this))
            })
        })
    }, e(document).ready(function() {
        e(".collapsible").collapsible()
    })
}(jQuery),
function(e) {
    e.fn.scrollTo = function(t) {
        return e(this).scrollTop(e(this).scrollTop() - e(this).offset().top + e(t).offset().top), this
    }, e.fn.dropdown = function(t) {
        var n = {
            inDuration: 300,
            outDuration: 225,
            constrainWidth: !0,
            hover: !1,
            gutter: 0,
            belowOrigin: !1,
            alignment: "left",
            stopPropagation: !1
        };
        return "open" === t ? (this.each(function() {
            e(this).trigger("open")
        }), !1) : "close" === t ? (this.each(function() {
            e(this).trigger("close")
        }), !1) : void this.each(function() {
            function i() {
                void 0 !== o.data("induration") && (s.inDuration = o.data("induration")), void 0 !== o.data("outduration") && (s.outDuration = o.data("outduration")), void 0 !== o.data("constrainwidth") && (s.constrainWidth = o.data("constrainwidth")), void 0 !== o.data("hover") && (s.hover = o.data("hover")), void 0 !== o.data("gutter") && (s.gutter = o.data("gutter")), void 0 !== o.data("beloworigin") && (s.belowOrigin = o.data("beloworigin")), void 0 !== o.data("alignment") && (s.alignment = o.data("alignment")), void 0 !== o.data("stoppropagation") && (s.stopPropagation = o.data("stoppropagation"))
            }

            function r(t) {
                "focus" === t && (l = !0), i(), u.addClass("active"), o.addClass("active"), s.constrainWidth === !0 ? u.css("width", o.outerWidth()) : u.css("white-space", "nowrap");
                var n = window.innerHeight,
                    r = o.innerHeight(),
                    c = o.offset().left,
                    d = o.offset().top - e(window).scrollTop(),
                    f = s.alignment,
                    p = 0,
                    h = 0,
                    m = 0;
                s.belowOrigin === !0 && (m = r);
                var v = 0,
                    g = 0,
                    y = o.parent();
                if (y.is("body") || (y[0].scrollHeight > y[0].clientHeight && (v = y[0].scrollTop), y[0].scrollWidth > y[0].clientWidth && (g = y[0].scrollLeft)), c + u.innerWidth() > e(window).width() ? f = "right" : c - u.innerWidth() + o.innerWidth() < 0 && (f = "left"), d + u.innerHeight() > n)
                    if (d + r - u.innerHeight() < 0) {
                        var b = n - d - m;
                        u.css("max-height", b)
                    } else m || (m += r), m -= u.innerHeight();
                if ("left" === f) p = s.gutter, h = o.position().left + p;
                else if ("right" === f) {
                    var w = o.position().left + o.outerWidth() - u.outerWidth();
                    p = -s.gutter, h = w + p
                }
                u.css({
                    position: "absolute",
                    top: o.position().top + m + v,
                    left: h + g
                }), u.stop(!0, !0).css("opacity", 0).slideDown({
                    queue: !1,
                    duration: s.inDuration,
                    easing: "easeOutCubic",
                    complete: function() {
                        e(this).css("height", "")
                    }
                }).animate({
                    opacity: 1
                }, {
                    queue: !1,
                    duration: s.inDuration,
                    easing: "easeOutSine"
                }), e(document).bind("click." + u.attr("id") + " touchstart." + u.attr("id"), function(t) {
                    u.is(t.target) || o.is(t.target) || o.find(t.target).length || (a(), e(document).unbind("click." + u.attr("id") + " touchstart." + u.attr("id")))
                })
            }

            function a() {
                l = !1, u.fadeOut(s.outDuration), u.removeClass("active"), o.removeClass("active"), e(document).unbind("click." + u.attr("id") + " touchstart." + u.attr("id")), setTimeout(function() {
                    u.css("max-height", "")
                }, s.outDuration)
            }
            var o = e(this),
                s = e.extend({}, n, t),
                l = !1,
                u = e("#" + o.attr("data-activates"));
            if (i(), o.after(u), s.hover) {
                var c = !1;
                o.unbind("click." + o.attr("id")), o.on("mouseenter", function(e) {
                    c === !1 && (r(), c = !0)
                }), o.on("mouseleave", function(t) {
                    var n = t.toElement || t.relatedTarget;
                    e(n).closest(".dropdown-content").is(u) || (u.stop(!0, !0), a(), c = !1)
                }), u.on("mouseleave", function(t) {
                    var n = t.toElement || t.relatedTarget;
                    e(n).closest(".dropdown-button").is(o) || (u.stop(!0, !0), a(), c = !1)
                })
            } else o.unbind("click." + o.attr("id")), o.bind("click." + o.attr("id"), function(t) {
                l || (o[0] != t.currentTarget || o.hasClass("active") || 0 !== e(t.target).closest(".dropdown-content").length ? o.hasClass("active") && (a(), e(document).unbind("click." + u.attr("id") + " touchstart." + u.attr("id"))) : (t.preventDefault(), s.stopPropagation && t.stopPropagation(), r("click")))
            });
            o.on("open", function(e, t) {
                r(t)
            }), o.on("close", a)
        })
    }, e(document).ready(function() {
        e(".dropdown-button").dropdown()
    })
}(jQuery),
function(e) {
    var t = 0,
        n = 0,
        i = function() {
            return n++, "materialize-modal-overlay-" + n
        },
        r = {
            init: function(n) {
                var r = {
                    opacity: .5,
                    inDuration: 350,
                    outDuration: 250,
                    ready: void 0,
                    complete: void 0,
                    dismissible: !0,
                    startingTop: "4%",
                    endingTop: "10%"
                };
                return n = e.extend(r, n), this.each(function() {
                    var r = e(this),
                        a = e(this).attr("id") || "#" + e(this).data("target"),
                        o = function() {
                            var i = r.data("overlay-id"),
                                a = e("#" + i);
                            r.removeClass("open"), e("body").css({
                                overflow: "",
                                width: ""
                            }), r.find(".modal-close").off("click.close"), e(document).off("keyup.modal" + i), a.velocity({
                                opacity: 0
                            }, {
                                duration: n.outDuration,
                                queue: !1,
                                ease: "easeOutQuart"
                            });
                            var o = {
                                duration: n.outDuration,
                                queue: !1,
                                ease: "easeOutCubic",
                                complete: function() {
                                    e(this).css({
                                        display: "none"
                                    }), "function" == typeof n.complete && n.complete.call(this, r), a.remove(), t--
                                }
                            };
                            r.hasClass("bottom-sheet") ? r.velocity({
                                bottom: "-100%",
                                opacity: 0
                            }, o) : r.velocity({
                                top: n.startingTop,
                                opacity: 0,
                                scaleX: .7
                            }, o)
                        },
                        s = function(a) {
                            var s = e("body"),
                                l = s.innerWidth();
                            if (s.css("overflow", "hidden"), s.width(l), !r.hasClass("open")) {
                                var u = i(),
                                    c = e('<div class="modal-overlay"></div>');
                                lStack = ++t, c.attr("id", u).css("z-index", 1e3 + 2 * lStack), r.data("overlay-id", u).css("z-index", 1e3 + 2 * lStack + 1), r.addClass("open"), e("body").append(c), n.dismissible && (c.click(function() {
                                    o()
                                }), e(document).on("keyup.modal" + u, function(e) {
                                    27 === e.keyCode && o()
                                })), r.find(".modal-close").on("click.close", function(e) {
                                    o()
                                }), c.css({
                                    display: "block",
                                    opacity: 0
                                }), r.css({
                                    display: "block",
                                    opacity: 0
                                }), c.velocity({
                                    opacity: n.opacity
                                }, {
                                    duration: n.inDuration,
                                    queue: !1,
                                    ease: "easeOutCubic"
                                }), r.data("associated-overlay", c[0]);
                                var d = {
                                    duration: n.inDuration,
                                    queue: !1,
                                    ease: "easeOutCubic",
                                    complete: function() {
                                        "function" == typeof n.ready && n.ready.call(this, r, a)
                                    }
                                };
                                r.hasClass("bottom-sheet") ? r.velocity({
                                    bottom: "0",
                                    opacity: 1
                                }, d) : (e.Velocity.hook(r, "scaleX", .7), r.css({
                                    top: n.startingTop
                                }), r.velocity({
                                    top: n.endingTop,
                                    opacity: 1,
                                    scaleX: "1"
                                }, d))
                            }
                        };
                    e(document).off("click.modalTrigger", 'a[href="#' + a + '"], [data-target="' + a + '"]'), e(this).off("openModal"), e(this).off("closeModal"), e(document).on("click.modalTrigger", 'a[href="#' + a + '"], [data-target="' + a + '"]', function(t) {
                        n.startingTop = (e(this).offset().top - e(window).scrollTop()) / 1.15, s(e(this)), t.preventDefault()
                    }), e(this).on("openModal", function() {
                        e(this).attr("href") || "#" + e(this).data("target");
                        s()
                    }), e(this).on("closeModal", function() {
                        o()
                    })
                })
            },
            open: function() {
                e(this).trigger("openModal")
            },
            close: function() {
                e(this).trigger("closeModal")
            }
        };
    e.fn.modal = function(t) {
        return r[t] ? r[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist on jQuery.modal") : r.init.apply(this, arguments)
    }
}(jQuery),
function(e) {
    e.fn.materialbox = function() {
        return this.each(function() {
            function t() {
                a = !1;
                var t = l.parent(".material-placeholder"),
                    i = (window.innerWidth, window.innerHeight, l.data("width")),
                    o = l.data("height");
                l.velocity("stop", !0), e("#materialbox-overlay").velocity("stop", !0), e(".materialbox-caption").velocity("stop", !0), e("#materialbox-overlay").velocity({
                    opacity: 0
                }, {
                    duration: s,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function() {
                        r = !1, e(this).remove()
                    }
                }), l.velocity({
                    width: i,
                    height: o,
                    left: 0,
                    top: 0
                }, {
                    duration: s,
                    queue: !1,
                    easing: "easeOutQuad"
                }), e(".materialbox-caption").velocity({
                    opacity: 0
                }, {
                    duration: s,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function() {
                        t.css({
                            height: "",
                            width: "",
                            position: "",
                            top: "",
                            left: ""
                        }), l.css({
                            height: "",
                            top: "",
                            left: "",
                            width: "",
                            "max-width": "",
                            position: "",
                            "z-index": "",
                            "will-change": ""
                        }), l.removeClass("active"), a = !0, e(this).remove(), n && n.css("overflow", "")
                    }
                })
            }
            if (!e(this).hasClass("initialized")) {
                e(this).addClass("initialized");
                var n, i, r = !1,
                    a = !0,
                    o = 275,
                    s = 200,
                    l = e(this),
                    u = e("<div></div>").addClass("material-placeholder");
                l.wrap(u), l.on("click", function() {
                    var s = l.parent(".material-placeholder"),
                        u = window.innerWidth,
                        c = window.innerHeight,
                        d = l.width(),
                        f = l.height();
                    if (a === !1) return t(), !1;
                    if (r && a === !0) return t(), !1;
                    a = !1, l.addClass("active"), r = !0, s.css({
                        width: s[0].getBoundingClientRect().width,
                        height: s[0].getBoundingClientRect().height,
                        position: "relative",
                        top: 0,
                        left: 0
                    }), n = void 0, i = s[0].parentNode;
                    for (; null !== i && !e(i).is(document);) {
                        var p = e(i);
                        "visible" !== p.css("overflow") && (p.css("overflow", "visible"), n = void 0 === n ? p : n.add(p)), i = i.parentNode
                    }
                    l.css({
                        position: "absolute",
                        "z-index": 1e3,
                        "will-change": "left, top, width, height"
                    }).data("width", d).data("height", f);
                    var h = e('<div id="materialbox-overlay"></div>').css({
                        opacity: 0
                    }).click(function() {
                        a === !0 && t()
                    });
                    l.before(h);
                    var m = h[0].getBoundingClientRect();
                    if (h.css({
                            width: u,
                            height: c,
                            left: -1 * m.left,
                            top: -1 * m.top
                        }), h.velocity({
                            opacity: 1
                        }, {
                            duration: o,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), "" !== l.data("caption")) {
                        var v = e('<div class="materialbox-caption"></div>');
                        v.text(l.data("caption")), e("body").append(v), v.css({
                            display: "inline"
                        }), v.velocity({
                            opacity: 1
                        }, {
                            duration: o,
                            queue: !1,
                            easing: "easeOutQuad"
                        })
                    }
                    var g = 0,
                        y = d / u,
                        b = f / c,
                        w = 0,
                        x = 0;
                    y > b ? (g = f / d, w = .9 * u, x = .9 * u * g) : (g = d / f, w = .9 * c * g, x = .9 * c), l.hasClass("responsive-img") ? l.velocity({
                        "max-width": w,
                        width: d
                    }, {
                        duration: 0,
                        queue: !1,
                        complete: function() {
                            l.css({
                                left: 0,
                                top: 0
                            }).velocity({
                                height: x,
                                width: w,
                                left: e(document).scrollLeft() + u / 2 - l.parent(".material-placeholder").offset().left - w / 2,
                                top: e(document).scrollTop() + c / 2 - l.parent(".material-placeholder").offset().top - x / 2
                            }, {
                                duration: o,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    a = !0
                                }
                            })
                        }
                    }) : l.css("left", 0).css("top", 0).velocity({
                        height: x,
                        width: w,
                        left: e(document).scrollLeft() + u / 2 - l.parent(".material-placeholder").offset().left - w / 2,
                        top: e(document).scrollTop() + c / 2 - l.parent(".material-placeholder").offset().top - x / 2
                    }, {
                        duration: o,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            a = !0
                        }
                    })
                }), e(window).scroll(function() {
                    r && t()
                }), e(document).keyup(function(e) {
                    27 === e.keyCode && a === !0 && r && t()
                })
            }
        })
    }, e(document).ready(function() {
        e(".materialboxed").materialbox()
    })
}(jQuery),
function(e) {
    e.fn.parallax = function() {
        var t = e(window).width();
        return this.each(function(n) {
            function i(n) {
                var i;
                i = t < 601 ? r.height() > 0 ? r.height() : r.children("img").height() : r.height() > 0 ? r.height() : 500;
                var a = r.children("img").first(),
                    o = a.height(),
                    s = o - i,
                    l = r.offset().top + i,
                    u = r.offset().top,
                    c = e(window).scrollTop(),
                    d = window.innerHeight,
                    f = c + d,
                    p = (f - u) / (i + d),
                    h = Math.round(s * p);
                n && a.css("display", "block"), l > c && u < c + d && a.css("transform", "translate3D(-50%," + h + "px, 0)")
            }
            var r = e(this);
            r.addClass("parallax"), r.children("img").one("load", function() {
                i(!0)
            }).each(function() {
                this.complete && e(this).trigger("load")
            }), e(window).scroll(function() {
                t = e(window).width(), i(!1)
            }), e(window).resize(function() {
                t = e(window).width(), i(!1)
            })
        })
    }
}(jQuery),
function(e) {
    var t = {
        init: function(t) {
            var n = {
                onShow: null,
                swipeable: !1,
                responsiveThreshold: 1 / 0
            };
            return t = e.extend(n, t), this.each(function() {
                var n, i, r, a, o, s = e(this),
                    l = e(window).width(),
                    u = s.find("li.tab a"),
                    c = s.width(),
                    d = e(),
                    f = Math.max(c, s[0].scrollWidth) / u.length,
                    p = prev_index = 0,
                    h = !1,
                    m = 300,
                    v = function(e) {
                        return c - e.position().left - e.outerWidth() - s.scrollLeft()
                    },
                    g = function(e) {
                        return e.position().left + s.scrollLeft()
                    },
                    y = function(e) {
                        p - e >= 0 ? (a.velocity({
                            right: v(n)
                        }, {
                            duration: m,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), a.velocity({
                            left: g(n)
                        }, {
                            duration: m,
                            queue: !1,
                            easing: "easeOutQuad",
                            delay: 90
                        })) : (a.velocity({
                            left: g(n)
                        }, {
                            duration: m,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), a.velocity({
                            right: v(n)
                        }, {
                            duration: m,
                            queue: !1,
                            easing: "easeOutQuad",
                            delay: 90
                        }))
                    };
                t.swipeable && l > t.responsiveThreshold && (t.swipeable = !1), n = e(u.filter('[href="' + location.hash + '"]')), 0 === n.length && (n = e(this).find("li.tab a.active").first()), 0 === n.length && (n = e(this).find("li.tab a").first()), n.addClass("active"), p = u.index(n), p < 0 && (p = 0), void 0 !== n[0] && (i = e(n[0].hash), i.addClass("active")), s.find(".indicator").length || s.append('<div class="indicator"></div>'), a = s.find(".indicator"), s.append(a), s.is(":visible") && setTimeout(function() {
                    a.css({
                        right: v(n)
                    }), a.css({
                        left: g(n)
                    })
                }, 0), e(window).resize(function() {
                    c = s.width(), f = Math.max(c, s[0].scrollWidth) / u.length, p < 0 && (p = 0), 0 !== f && 0 !== c && (a.css({
                        right: v(n)
                    }), a.css({
                        left: g(n)
                    }))
                }), t.swipeable ? (u.each(function() {
                    var t = e(Materialize.escapeHash(this.hash));
                    t.addClass("carousel-item"), d = d.add(t)
                }), r = d.wrapAll('<div class="tabs-content carousel"></div>'), d.css("display", ""), e(".tabs-content.carousel").carousel({
                    fullWidth: !0,
                    noWrap: !0,
                    onCycleTo: function(e) {
                        if (!h) {
                            var t = p;
                            p = r.index(e), n = u.eq(p), y(t)
                        }
                    }
                })) : u.not(n).each(function() {
                    e(Materialize.escapeHash(this.hash)).hide()
                }), s.on("click", "a", function(r) {
                    if (e(this).parent().hasClass("disabled")) return void r.preventDefault();
                    if (!e(this).attr("target")) {
                        h = !0, c = s.width(), f = Math.max(c, s[0].scrollWidth) / u.length, n.removeClass("active");
                        var a = i;
                        n = e(this), i = e(Materialize.escapeHash(this.hash)), u = s.find("li.tab a");
                        n.position();
                        n.addClass("active"), prev_index = p, p = u.index(e(this)), p < 0 && (p = 0), t.swipeable ? d.length && d.carousel("set", p) : (void 0 !== i && (i.show(), i.addClass("active"), "function" == typeof t.onShow && t.onShow.call(this, i)), void 0 === a || a.is(i) || (a.hide(), a.removeClass("active"))), o = setTimeout(function() {
                            h = !1
                        }, m), y(prev_index), r.preventDefault()
                    }
                })
            })
        },
        select_tab: function(e) {
            this.find('a[href="#' + e + '"]').trigger("click")
        }
    };
    e.fn.tabs = function(n) {
        return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method " + n + " does not exist on jQuery.tabs") : t.init.apply(this, arguments)
    }, e(document).ready(function() {
        e("ul.tabs").tabs()
    })
}(jQuery),
function(e) {
    e.fn.tooltip = function(n) {
        var i = 5,
            r = {
                delay: 350,
                tooltip: "",
                position: "bottom",
                html: !1
            };
        return "remove" === n ? (this.each(function() {
            e("#" + e(this).attr("data-tooltip-id")).remove(), e(this).off("mouseenter.tooltip mouseleave.tooltip")
        }), !1) : (n = e.extend(r, n), this.each(function() {
            var r = Materialize.guid(),
                a = e(this);
            a.attr("data-tooltip-id") && e("#" + a.attr("data-tooltip-id")).remove(), a.attr("data-tooltip-id", r);
            var o, s, l, u, c, d, f = function() {
                o = a.attr("data-html") ? "true" === a.attr("data-html") : n.html, s = a.attr("data-delay"), s = void 0 === s || "" === s ? n.delay : s, l = a.attr("data-position"), l = void 0 === l || "" === l ? n.position : l, u = a.attr("data-tooltip"), u = void 0 === u || "" === u ? n.tooltip : u
            };
            f();
            var p = function() {
                var t = e('<div class="material-tooltip"></div>');
                return u = o ? e("<span></span>").html(u) : e("<span></span>").text(u), t.append(u).appendTo(e("body")).attr("id", r), d = e('<div class="backdrop"></div>'), d.appendTo(t), t
            };
            c = p(), a.off("mouseenter.tooltip mouseleave.tooltip");
            var h, m = !1;
            a.on({
                "mouseenter.tooltip": function(e) {
                    var n = function() {
                        f(), m = !0, c.velocity("stop"), d.velocity("stop"), c.css({
                            visibility: "visible",
                            left: "0px",
                            top: "0px"
                        });
                        var e, n, r, o = a.outerWidth(),
                            s = a.outerHeight(),
                            u = c.outerHeight(),
                            p = c.outerWidth(),
                            h = "0px",
                            v = "0px",
                            g = d[0].offsetWidth,
                            y = d[0].offsetHeight,
                            b = 8,
                            w = 8,
                            x = 0;
                        "top" === l ? (e = a.offset().top - u - i, n = a.offset().left + o / 2 - p / 2, r = t(n, e, p, u), h = "-10px", d.css({
                            bottom: 0,
                            left: 0,
                            borderRadius: "14px 14px 0 0",
                            transformOrigin: "50% 100%",
                            marginTop: u,
                            marginLeft: p / 2 - g / 2
                        })) : "left" === l ? (e = a.offset().top + s / 2 - u / 2, n = a.offset().left - p - i, r = t(n, e, p, u), v = "-10px", d.css({
                            top: "-7px",
                            right: 0,
                            width: "14px",
                            height: "14px",
                            borderRadius: "14px 0 0 14px",
                            transformOrigin: "95% 50%",
                            marginTop: u / 2,
                            marginLeft: p
                        })) : "right" === l ? (e = a.offset().top + s / 2 - u / 2, n = a.offset().left + o + i, r = t(n, e, p, u), v = "+10px", d.css({
                            top: "-7px",
                            left: 0,
                            width: "14px",
                            height: "14px",
                            borderRadius: "0 14px 14px 0",
                            transformOrigin: "5% 50%",
                            marginTop: u / 2,
                            marginLeft: "0px"
                        })) : (e = a.offset().top + a.outerHeight() + i, n = a.offset().left + o / 2 - p / 2, r = t(n, e, p, u), h = "+10px", d.css({
                            top: 0,
                            left: 0,
                            marginLeft: p / 2 - g / 2
                        })), c.css({
                            top: r.y,
                            left: r.x
                        }), b = Math.SQRT2 * p / parseInt(g), w = Math.SQRT2 * u / parseInt(y), x = Math.max(b, w), c.velocity({
                            translateY: h,
                            translateX: v
                        }, {
                            duration: 350,
                            queue: !1
                        }).velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            delay: 50,
                            queue: !1
                        }), d.css({
                            visibility: "visible"
                        }).velocity({
                            opacity: 1
                        }, {
                            duration: 55,
                            delay: 0,
                            queue: !1
                        }).velocity({
                            scaleX: x,
                            scaleY: x
                        }, {
                            duration: 300,
                            delay: 0,
                            queue: !1,
                            easing: "easeInOutQuad"
                        })
                    };
                    h = setTimeout(n, s)
                },
                "mouseleave.tooltip": function() {
                    m = !1, clearTimeout(h), setTimeout(function() {
                        m !== !0 && (c.velocity({
                            opacity: 0,
                            translateY: 0,
                            translateX: 0
                        }, {
                            duration: 225,
                            queue: !1
                        }), d.velocity({
                            opacity: 0,
                            scaleX: 1,
                            scaleY: 1
                        }, {
                            duration: 225,
                            queue: !1,
                            complete: function() {
                                d.css({
                                    visibility: "hidden"
                                }), c.css({
                                    visibility: "hidden"
                                }), m = !1
                            }
                        }))
                    }, 225)
                }
            })
        }))
    };
    var t = function(t, n, i, r) {
        var a = t,
            o = n;
        return a < 0 ? a = 4 : a + i > window.innerWidth && (a -= a + i - window.innerWidth), o < 0 ? o = 4 : o + r > window.innerHeight + e(window).scrollTop && (o -= o + r - window.innerHeight), {
            x: a,
            y: o
        }
    };
    e(document).ready(function() {
        e(".tooltipped").tooltip()
    })
}(jQuery),
function(e) {
    "use strict";

    function t(e) {
        return null !== e && e === e.window
    }

    function n(e) {
        return t(e) ? e : 9 === e.nodeType && e.defaultView
    }

    function i(e) {
        var t, i, r = {
                top: 0,
                left: 0
            },
            a = e && e.ownerDocument;
        return t = a.documentElement, "undefined" != typeof e.getBoundingClientRect && (r = e.getBoundingClientRect()), i = n(a), {
            top: r.top + i.pageYOffset - t.clientTop,
            left: r.left + i.pageXOffset - t.clientLeft
        }
    }

    function r(e) {
        var t = "";
        for (var n in e) e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
        return t
    }

    function a(e) {
        if (c.allowEvent(e) === !1) return null;
        for (var t = null, n = e.target || e.srcElement; null !== n.parentElement;) {
            if (!(n instanceof SVGElement || n.className.indexOf("waves-effect") === -1)) {
                t = n;
                break
            }
            if (n.classList.contains("waves-effect")) {
                t = n;
                break
            }
            n = n.parentElement
        }
        return t
    }

    function o(t) {
        var n = a(t);
        null !== n && (u.show(t, n), "ontouchstart" in e && (n.addEventListener("touchend", u.hide, !1), n.addEventListener("touchcancel", u.hide, !1)), n.addEventListener("mouseup", u.hide, !1), n.addEventListener("mouseleave", u.hide, !1))
    }
    var s = s || {},
        l = document.querySelectorAll.bind(document),
        u = {
            duration: 750,
            show: function(e, t) {
                if (2 === e.button) return !1;
                var n = t || this,
                    a = document.createElement("div");
                a.className = "waves-ripple", n.appendChild(a);
                var o = i(n),
                    s = e.pageY - o.top,
                    l = e.pageX - o.left,
                    c = "scale(" + n.clientWidth / 100 * 10 + ")";
                "touches" in e && (s = e.touches[0].pageY - o.top, l = e.touches[0].pageX - o.left), a.setAttribute("data-hold", Date.now()), a.setAttribute("data-scale", c), a.setAttribute("data-x", l), a.setAttribute("data-y", s);
                var d = {
                    top: s + "px",
                    left: l + "px"
                };
                a.className = a.className + " waves-notransition", a.setAttribute("style", r(d)), a.className = a.className.replace("waves-notransition", ""), d["-webkit-transform"] = c, d["-moz-transform"] = c, d["-ms-transform"] = c, d["-o-transform"] = c, d.transform = c, d.opacity = "1", d["-webkit-transition-duration"] = u.duration + "ms", d["-moz-transition-duration"] = u.duration + "ms", d["-o-transition-duration"] = u.duration + "ms", d["transition-duration"] = u.duration + "ms", d["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", a.setAttribute("style", r(d))
            },
            hide: function(e) {
                c.touchup(e);
                var t = this,
                    n = (1.4 * t.clientWidth, null),
                    i = t.getElementsByClassName("waves-ripple");
                if (!(i.length > 0)) return !1;
                n = i[i.length - 1];
                var a = n.getAttribute("data-x"),
                    o = n.getAttribute("data-y"),
                    s = n.getAttribute("data-scale"),
                    l = Date.now() - Number(n.getAttribute("data-hold")),
                    d = 350 - l;
                d < 0 && (d = 0), setTimeout(function() {
                    var e = {
                        top: o + "px",
                        left: a + "px",
                        opacity: "0",
                        "-webkit-transition-duration": u.duration + "ms",
                        "-moz-transition-duration": u.duration + "ms",
                        "-o-transition-duration": u.duration + "ms",
                        "transition-duration": u.duration + "ms",
                        "-webkit-transform": s,
                        "-moz-transform": s,
                        "-ms-transform": s,
                        "-o-transform": s,
                        transform: s
                    };
                    n.setAttribute("style", r(e)), setTimeout(function() {
                        try {
                            t.removeChild(n)
                        } catch (e) {
                            return !1
                        }
                    }, u.duration)
                }, d)
            },
            wrapInput: function(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if ("input" === n.tagName.toLowerCase()) {
                        var i = n.parentNode;
                        if ("i" === i.tagName.toLowerCase() && i.className.indexOf("waves-effect") !== -1) continue;
                        var r = document.createElement("i");
                        r.className = n.className + " waves-input-wrapper";
                        var a = n.getAttribute("style");
                        a || (a = ""), r.setAttribute("style", a), n.className = "waves-button-input", n.removeAttribute("style"), i.replaceChild(r, n), r.appendChild(n)
                    }
                }
            }
        },
        c = {
            touches: 0,
            allowEvent: function(e) {
                var t = !0;
                return "touchstart" === e.type ? c.touches += 1 : "touchend" === e.type || "touchcancel" === e.type ? setTimeout(function() {
                    c.touches > 0 && (c.touches -= 1)
                }, 500) : "mousedown" === e.type && c.touches > 0 && (t = !1), t
            },
            touchup: function(e) {
                c.allowEvent(e)
            }
        };
    s.displayEffect = function(t) {
        t = t || {}, "duration" in t && (u.duration = t.duration), u.wrapInput(l(".waves-effect")), "ontouchstart" in e && document.body.addEventListener("touchstart", o, !1), document.body.addEventListener("mousedown", o, !1)
    }, s.attach = function(t) {
        "input" === t.tagName.toLowerCase() && (u.wrapInput([t]), t = t.parentElement), "ontouchstart" in e && t.addEventListener("touchstart", o, !1), t.addEventListener("mousedown", o, !1)
    }, e.Waves = s, document.addEventListener("DOMContentLoaded", function() {
        s.displayEffect()
    }, !1)
}(window), Materialize.toast = function(e, t, n, i) {
    function r(e) {
        var t = document.createElement("div");
        if (t.classList.add("toast"), n)
            for (var r = n.split(" "), a = 0, o = r.length; a < o; a++) t.classList.add(r[a]);
        ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) ? t.appendChild(e): e instanceof jQuery ? t.appendChild(e[0]) : t.innerHTML = e;
        var s = new Hammer(t, {
            prevent_default: !1
        });
        return s.on("pan", function(e) {
            var n = e.deltaX,
                i = 80;
            t.classList.contains("panning") || t.classList.add("panning");
            var r = 1 - Math.abs(n / i);
            r < 0 && (r = 0), Vel(t, {
                left: n,
                opacity: r
            }, {
                duration: 50,
                queue: !1,
                easing: "easeOutQuad"
            })
        }), s.on("panend", function(e) {
            var n = e.deltaX,
                r = 80;
            Math.abs(n) > r ? Vel(t, {
                marginTop: "-40px"
            }, {
                duration: 375,
                easing: "easeOutExpo",
                queue: !1,
                complete: function() {
                    "function" == typeof i && i(), t.parentNode.removeChild(t)
                }
            }) : (t.classList.remove("panning"), Vel(t, {
                left: 0,
                opacity: 1
            }, {
                duration: 300,
                easing: "easeOutExpo",
                queue: !1
            }))
        }), t
    }
    n = n || "";
    var a = document.getElementById("toast-container");
    null === a && (a = document.createElement("div"), a.id = "toast-container", document.body.appendChild(a));
    var o = r(e);
    e && a.appendChild(o), o.style.opacity = 0, Vel(o, {
        translateY: "-35px",
        opacity: 1
    }, {
        duration: 300,
        easing: "easeOutCubic",
        queue: !1
    });
    var s, l = t;
    null != l && (s = setInterval(function() {
        null === o.parentNode && window.clearInterval(s), o.classList.contains("panning") || (l -= 20), l <= 0 && (Vel(o, {
            opacity: 0,
            marginTop: "-40px"
        }, {
            duration: 375,
            easing: "easeOutExpo",
            queue: !1,
            complete: function() {
                "function" == typeof i && i(), this[0].parentNode.removeChild(this[0])
            }
        }), window.clearInterval(s))
    }, 20))
},
function(e) {
    var t = {
        init: function(t) {
            var n = {
                menuWidth: 300,
                edge: "left",
                closeOnClick: !1,
                draggable: !0
            };
            t = e.extend(n, t), e(this).each(function() {
                var n = e(this),
                    i = n.attr("data-activates"),
                    r = e("#" + i);
                300 != t.menuWidth && r.css("width", t.menuWidth);
                var a = e('.drag-target[data-sidenav="' + i + '"]');
                t.draggable ? (a.length && a.remove(), a = e('<div class="drag-target"></div>').attr("data-sidenav", i), e("body").append(a)) : a = e(), "left" == t.edge ? (r.css("transform", "translateX(-100%)"), a.css({
                    left: 0
                })) : (r.addClass("right-aligned").css("transform", "translateX(100%)"), a.css({
                    right: 0
                })), r.hasClass("fixed") && window.innerWidth > 992 && r.css("transform", "translateX(0)"), r.hasClass("fixed") && e(window).resize(function() {
                    window.innerWidth > 992 ? 0 !== e("#sidenav-overlay").length && l ? o(!0) : r.css("transform", "translateX(0%)") : l === !1 && ("left" === t.edge ? r.css("transform", "translateX(-100%)") : r.css("transform", "translateX(100%)"))
                }), t.closeOnClick === !0 && r.on("click.itemclick", "a:not(.collapsible-header)", function() {
                    o()
                });
                var o = function(n) {
                        s = !1, l = !1, e("body").css({
                            overflow: "",
                            width: ""
                        }), e("#sidenav-overlay").velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                e(this).remove()
                            }
                        }), "left" === t.edge ? (a.css({
                            width: "",
                            right: "",
                            left: "0"
                        }), r.velocity({
                            translateX: "-100%"
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutCubic",
                            complete: function() {
                                n === !0 && (r.removeAttr("style"), r.css("width", t.menuWidth))
                            }
                        })) : (a.css({
                            width: "",
                            right: "0",
                            left: ""
                        }), r.velocity({
                            translateX: "100%"
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutCubic",
                            complete: function() {
                                n === !0 && (r.removeAttr("style"), r.css("width", t.menuWidth))
                            }
                        }))
                    },
                    s = !1,
                    l = !1;
                t.draggable && (a.on("click", function() {
                    l && o()
                }), a.hammer({
                    prevent_default: !1
                }).bind("pan", function(n) {
                    if ("touch" == n.gesture.pointerType) {
                        var i = (n.gesture.direction, n.gesture.center.x),
                            a = (n.gesture.center.y, n.gesture.velocityX, e("body")),
                            s = e("#sidenav-overlay"),
                            u = a.innerWidth();
                        if (a.css("overflow", "hidden"), a.width(u), 0 === s.length && (s = e('<div id="sidenav-overlay"></div>'), s.css("opacity", 0).click(function() {
                                o()
                            }), e("body").append(s)), "left" === t.edge && (i > t.menuWidth ? i = t.menuWidth : i < 0 && (i = 0)), "left" === t.edge) i < t.menuWidth / 2 ? l = !1 : i >= t.menuWidth / 2 && (l = !0), r.css("transform", "translateX(" + (i - t.menuWidth) + "px)");
                        else {
                            i < window.innerWidth - t.menuWidth / 2 ? l = !0 : i >= window.innerWidth - t.menuWidth / 2 && (l = !1);
                            var c = i - t.menuWidth / 2;
                            c < 0 && (c = 0), r.css("transform", "translateX(" + c + "px)")
                        }
                        var d;
                        "left" === t.edge ? (d = i / t.menuWidth, s.velocity({
                            opacity: d
                        }, {
                            duration: 10,
                            queue: !1,
                            easing: "easeOutQuad"
                        })) : (d = Math.abs((i - window.innerWidth) / t.menuWidth), s.velocity({
                            opacity: d
                        }, {
                            duration: 10,
                            queue: !1,
                            easing: "easeOutQuad"
                        }))
                    }
                }).bind("panend", function(n) {
                    if ("touch" == n.gesture.pointerType) {
                        var i = e('<div id="sidenav-overlay"></div>'),
                            o = n.gesture.velocityX,
                            u = n.gesture.center.x,
                            c = u - t.menuWidth,
                            d = u - t.menuWidth / 2;
                        c > 0 && (c = 0), d < 0 && (d = 0), s = !1, "left" === t.edge ? l && o <= .3 || o < -.5 ? (0 !== c && r.velocity({
                            translateX: [0, c]
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), i.velocity({
                            opacity: 1
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), a.css({
                            width: "50%",
                            right: 0,
                            left: ""
                        }), l = !0) : (!l || o > .3) && (e("body").css({
                            overflow: "",
                            width: ""
                        }), r.velocity({
                            translateX: [-1 * t.menuWidth - 10, c]
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), i.velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                e(this).remove()
                            }
                        }), a.css({
                            width: "10px",
                            right: "",
                            left: 0
                        })) : l && o >= -.3 || o > .5 ? (0 !== d && r.velocity({
                            translateX: [0, d]
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), i.velocity({
                            opacity: 1
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), a.css({
                            width: "50%",
                            right: "",
                            left: 0
                        }), l = !0) : (!l || o < -.3) && (e("body").css({
                            overflow: "",
                            width: ""
                        }), r.velocity({
                            translateX: [t.menuWidth + 10, d]
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), i.velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                e(this).remove()
                            }
                        }), a.css({
                            width: "10px",
                            right: 0,
                            left: ""
                        }))
                    }
                })), n.off("click.sidenav").on("click.sidenav", function() {
                    if (l === !0) l = !1, s = !1, o();
                    else {
                        var n = e("body"),
                            i = e('<div id="sidenav-overlay"></div>'),
                            u = n.innerWidth();
                        n.css("overflow", "hidden"), n.width(u), e("body").append(a), "left" === t.edge ? (a.css({
                            width: "50%",
                            right: 0,
                            left: ""
                        }), r.velocity({
                            translateX: [0, -1 * t.menuWidth]
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })) : (a.css({
                            width: "50%",
                            right: "",
                            left: 0
                        }), r.velocity({
                            translateX: [0, t.menuWidth]
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })), i.css("opacity", 0).click(function() {
                            l = !1, s = !1, o(), i.velocity({
                                opacity: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    e(this).remove()
                                }
                            })
                        }), e("body").append(i), i.velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                l = !0, s = !1
                            }
                        })
                    }
                    return !1
                })
            })
        },
        destroy: function() {
            var t = e("#sidenav-overlay"),
                n = e('.drag-target[data-sidenav="' + e(this).attr("data-activates") + '"]');
            t.trigger("click"), n.remove(), e(this).off("click"), t.remove()
        },
        show: function() {
            this.trigger("click")
        },
        hide: function() {
            e("#sidenav-overlay").trigger("click")
        }
    };
    e.fn.sideNav = function(n) {
        return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method " + n + " does not exist on jQuery.sideNav") : t.init.apply(this, arguments)
    }
}(jQuery),
function(e) {
    function t(t, n, i, r) {
        var o = e();
        return e.each(a, function(e, a) {
            if (a.height() > 0) {
                var s = a.offset().top,
                    l = a.offset().left,
                    u = l + a.width(),
                    c = s + a.height(),
                    d = !(l > n || u < r || s > i || c < t);
                d && o.push(a)
            }
        }), o
    }

    function n(n) {
        ++l;
        var i = r.scrollTop(),
            a = r.scrollLeft(),
            s = a + r.width(),
            c = i + r.height(),
            d = t(i + u.top + n || 200, s + u.right, c + u.bottom, a + u.left);
        e.each(d, function(e, t) {
            var n = t.data("scrollSpy:ticks");
            "number" != typeof n && t.triggerHandler("scrollSpy:enter"), t.data("scrollSpy:ticks", l)
        }), e.each(o, function(e, t) {
            var n = t.data("scrollSpy:ticks");
            "number" == typeof n && n !== l && (t.triggerHandler("scrollSpy:exit"), t.data("scrollSpy:ticks", null))
        }), o = d
    }

    function i() {
        r.trigger("scrollSpy:winSize")
    }
    var r = e(window),
        a = [],
        o = [],
        s = !1,
        l = 0,
        u = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
    e.scrollSpy = function(t, i) {
        var o = {
            throttle: 100,
            scrollOffset: 200
        };
        i = e.extend(o, i);
        var l = [];
        t = e(t), t.each(function(t, n) {
            a.push(e(n)), e(n).data("scrollSpy:id", t), e('a[href="#' + e(n).attr("id") + '"]').click(function(t) {
                t.preventDefault();
                var n = e(Materialize.escapeHash(this.hash)).offset().top + 1;
                e("html, body").animate({
                    scrollTop: n - i.scrollOffset
                }, {
                    duration: 400,
                    queue: !1,
                    easing: "easeOutCubic"
                })
            })
        }), u.top = i.offsetTop || 0, u.right = i.offsetRight || 0, u.bottom = i.offsetBottom || 0, u.left = i.offsetLeft || 0;
        var c = Materialize.throttle(function() {
                n(i.scrollOffset)
            }, i.throttle || 100),
            d = function() {
                e(document).ready(c)
            };
        return s || (r.on("scroll", d), r.on("resize", d), s = !0), setTimeout(d, 0), t.on("scrollSpy:enter", function() {
            l = e.grep(l, function(e) {
                return 0 != e.height()
            });
            var t = e(this);
            l[0] ? (e('a[href="#' + l[0].attr("id") + '"]').removeClass("active"), t.data("scrollSpy:id") < l[0].data("scrollSpy:id") ? l.unshift(e(this)) : l.push(e(this))) : l.push(e(this)), e('a[href="#' + l[0].attr("id") + '"]').addClass("active")
        }), t.on("scrollSpy:exit", function() {
            if (l = e.grep(l, function(e) {
                    return 0 != e.height()
                }), l[0]) {
                e('a[href="#' + l[0].attr("id") + '"]').removeClass("active");
                var t = e(this);
                l = e.grep(l, function(e) {
                    return e.attr("id") != t.attr("id")
                }), l[0] && e('a[href="#' + l[0].attr("id") + '"]').addClass("active")
            }
        }), t
    }, e.winSizeSpy = function(t) {
        return e.winSizeSpy = function() {
            return r
        }, t = t || {
            throttle: 100
        }, r.on("resize", Materialize.throttle(i, t.throttle || 100))
    }, e.fn.scrollSpy = function(t) {
        return e.scrollSpy(e(this), t)
    }
}(jQuery),
function(e) {
    e(document).ready(function() {
        function t(t) {
            var n = t.css("font-family"),
                i = t.css("font-size"),
                a = t.css("line-height");
            i && r.css("font-size", i), n && r.css("font-family", n), a && r.css("line-height", a), "off" === t.attr("wrap") && r.css("overflow-wrap", "normal").css("white-space", "pre"), r.text(t.val() + "\n");
            var o = r.html().replace(/\n/g, "<br>");
            r.html(o), t.is(":visible") ? r.css("width", t.width()) : r.css("width", e(window).width() / 2), t.css("height", r.height())
        }
        Materialize.updateTextFields = function() {
            var t = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
            e(t).each(function(t, n) {
                var i = e(this);
                e(n).val().length > 0 || n.autofocus || void 0 !== i.attr("placeholder") ? i.siblings("label").addClass("active") : e(n)[0].validity ? i.siblings("label").toggleClass("active", e(n)[0].validity.badInput === !0) : i.siblings("label").removeClass("active")
            })
        };
        var n = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
        e(document).on("change", n, function() {
            0 === e(this).val().length && void 0 === e(this).attr("placeholder") || e(this).siblings("label").addClass("active"), validate_field(e(this))
        }), e(document).ready(function() {
            Materialize.updateTextFields()
        }), e(document).on("reset", function(t) {
            var i = e(t.target);
            i.is("form") && (i.find(n).removeClass("valid").removeClass("invalid"), i.find(n).each(function() {
                "" === e(this).attr("value") && e(this).siblings("label").removeClass("active")
            }), i.find("select.initialized").each(function() {
                var e = i.find("option[selected]").text();
                i.siblings("input.select-dropdown").val(e)
            }))
        }), e(document).on("focus", n, function() {
            e(this).siblings("label, .prefix").addClass("active")
        }), e(document).on("blur", n, function() {
            var t = e(this),
                n = ".prefix";
            0 === t.val().length && t[0].validity.badInput !== !0 && void 0 === t.attr("placeholder") && (n += ", label"), t.siblings(n).removeClass("active"), validate_field(t)
        }), window.validate_field = function(e) {
            var t = void 0 !== e.attr("data-length"),
                n = parseInt(e.attr("data-length")),
                i = e.val().length;
            0 === e.val().length && e[0].validity.badInput === !1 ? e.hasClass("validate") && (e.removeClass("valid"), e.removeClass("invalid")) : e.hasClass("validate") && (e.is(":valid") && t && i <= n || e.is(":valid") && !t ? (e.removeClass("invalid"), e.addClass("valid")) : (e.removeClass("valid"), e.addClass("invalid")))
        };
        var i = "input[type=radio], input[type=checkbox]";
        e(document).on("keyup.radio", i, function(t) {
            if (9 === t.which) {
                e(this).addClass("tabbed");
                var n = e(this);
                return void n.one("blur", function(t) {
                    e(this).removeClass("tabbed")
                })
            }
        });
        var r = e(".hiddendiv").first();
        r.length || (r = e('<div class="hiddendiv common"></div>'), e("body").append(r));
        var a = ".materialize-textarea";
        e(a).each(function() {
            var n = e(this);
            n.val().length && t(n)
        }), e("body").on("keyup keydown autoresize", a, function() {
            t(e(this))
        }), e(document).on("change", '.file-field input[type="file"]', function() {
            for (var t = e(this).closest(".file-field"), n = t.find("input.file-path"), i = e(this)[0].files, r = [], a = 0; a < i.length; a++) r.push(i[a].name);
            n.val(r.join(", ")), n.trigger("change")
        });
        var o, s = "input[type=range]",
            l = !1;
        e(s).each(function() {
            var t = e('<span class="thumb"><span class="value"></span></span>');
            e(this).after(t)
        });
        var u = ".range-field";
        e(document).on("change", s, function(t) {
            var n = e(this).siblings(".thumb");
            n.find(".value").html(e(this).val())
        }), e(document).on("input mousedown touchstart", s, function(t) {
            var n = e(this).siblings(".thumb"),
                i = e(this).outerWidth();
            n.length <= 0 && (n = e('<span class="thumb"><span class="value"></span></span>'), e(this).after(n)), n.find(".value").html(e(this).val()), l = !0, e(this).addClass("active"), n.hasClass("active") || n.velocity({
                height: "30px",
                width: "30px",
                top: "-20px",
                marginLeft: "-15px"
            }, {
                duration: 300,
                easing: "easeOutExpo"
            }), "input" !== t.type && (o = void 0 === t.pageX || null === t.pageX ? t.originalEvent.touches[0].pageX - e(this).offset().left : t.pageX - e(this).offset().left, o < 0 ? o = 0 : o > i && (o = i), n.addClass("active").css("left", o)), n.find(".value").html(e(this).val())
        }), e(document).on("mouseup touchend", u, function() {
            l = !1, e(this).removeClass("active")
        }), e(document).on("mousemove touchmove", u, function(t) {
            var n, i = e(this).children(".thumb");
            if (l) {
                i.hasClass("active") || i.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), n = void 0 === t.pageX || null === t.pageX ? t.originalEvent.touches[0].pageX - e(this).offset().left : t.pageX - e(this).offset().left;
                var r = e(this).outerWidth();
                n < 0 ? n = 0 : n > r && (n = r), i.addClass("active").css("left", n), i.find(".value").html(i.siblings(s).val())
            }
        }), e(document).on("mouseout touchleave", u, function() {
            if (!l) {
                var t = e(this).children(".thumb");
                t.hasClass("active") && t.velocity({
                    height: "0",
                    width: "0",
                    top: "10px",
                    marginLeft: "-6px"
                }, {
                    duration: 100
                }), t.removeClass("active")
            }
        }), e.fn.autocomplete = function(t) {
            var n = {
                data: {},
                limit: 1 / 0,
                onAutocomplete: null
            };
            return t = e.extend(n, t), this.each(function() {
                var n, i = e(this),
                    r = t.data,
                    a = 0,
                    o = 0,
                    s = i.closest(".input-field");
                if (!e.isEmptyObject(r)) {
                    var l, u = e('<ul class="autocomplete-content dropdown-content"></ul>');
                    s.length ? (l = s.children(".autocomplete-content.dropdown-content").first(), l.length || s.append(u)) : (l = i.next(".autocomplete-content.dropdown-content"), l.length || i.after(u)), l.length && (u = l);
                    var c = function(e, t) {
                            var n = t.find("img"),
                                i = t.text().toLowerCase().indexOf("" + e.toLowerCase()),
                                r = i + e.length - 1,
                                a = t.text().slice(0, i),
                                o = t.text().slice(i, r + 1),
                                s = t.text().slice(r + 1);
                            t.html("<span>" + a + "<span class='highlight'>" + o + "</span>" + s + "</span>"), n.length && t.prepend(n)
                        },
                        d = function() {
                            o = 0, u.find(".active").removeClass("active")
                        };
                    i.off("keyup.autocomplete").on("keyup.autocomplete", function(o) {
                        if (a = 0, 13 !== o.which && 38 !== o.which && 40 !== o.which) {
                            var s = i.val().toLowerCase();
                            if (n !== s && (u.empty(), d(), "" !== s))
                                for (var l in r)
                                    if (r.hasOwnProperty(l) && l.toLowerCase().indexOf(s) !== -1 && l.toLowerCase() !== s) {
                                        if (a >= t.limit) break;
                                        var f = e("<li></li>");
                                        r[l] ? f.append('<img src="' + r[l] + '" class="right circle"><span>' + l + "</span>") : f.append("<span>" + l + "</span>"), u.append(f), c(s, f), a++
                                    }
                            n = s
                        }
                    }), i.off("keydown.autocomplete").on("keydown.autocomplete", function(e) {
                        var t, n = e.which,
                            i = u.children("li").length,
                            r = u.children(".active").first();
                        return 13 === n ? (t = u.children("li").eq(o), void(t.length && (t.click(), e.preventDefault()))) : void(38 !== n && 40 !== n || (e.preventDefault(), 38 === n && o > 0 && o--, 40 === n && o < i - 1 && r.length && o++, r.removeClass("active"), u.children("li").eq(o).addClass("active")))
                    }), u.on("click", "li", function() {
                        var n = e(this).text().trim();
                        i.val(n), i.trigger("change"), u.empty(), d(), "function" == typeof t.onAutocomplete && t.onAutocomplete.call(this, n)
                    })
                }
            })
        }
    }), e.fn.material_select = function(t) {
        function n(e, t, n) {
            var r = e.indexOf(t),
                a = r === -1;
            return a ? e.push(t) : e.splice(r, 1), n.siblings("ul.dropdown-content").find("li").eq(t).toggleClass("active"), n.find("option").eq(t).prop("selected", a), i(e, n), a
        }

        function i(e, t) {
            for (var n = "", i = 0, r = e.length; i < r; i++) {
                var a = t.find("option").eq(e[i]).text();
                n += 0 === i ? a : ", " + a
            }
            "" === n && (n = t.find("option:disabled").eq(0).text()), t.siblings("input.select-dropdown").val(n)
        }
        e(this).each(function() {
            var i = e(this);
            if (!i.hasClass("browser-default")) {
                var r = !!i.attr("multiple"),
                    a = i.data("select-id");
                if (a && (i.parent().find("span.caret").remove(), i.parent().find("input").remove(), i.unwrap(), e("ul#select-options-" + a).remove()), "destroy" === t) return void i.data("select-id", null).removeClass("initialized");
                var o = Materialize.guid();
                i.data("select-id", o);
                var s = e('<div class="select-wrapper"></div>');
                s.addClass(i.attr("class"));
                var l = e('<ul id="select-options-' + o + '" class="dropdown-content select-dropdown ' + (r ? "multiple-select-dropdown" : "") + '"></ul>'),
                    u = i.children("option, optgroup"),
                    c = [],
                    d = !1,
                    f = i.find("option:selected").html() || i.find("option:first").html() || "",
                    p = function(t, n, i) {
                        var r = n.is(":disabled") ? "disabled " : "",
                            a = "optgroup-option" === i ? "optgroup-option " : "",
                            o = n.data("icon"),
                            s = n.attr("class");
                        if (o) {
                            var u = "";
                            return s && (u = ' class="' + s + '"'), "multiple" === i ? l.append(e('<li class="' + r + '"><img alt="" src="' + o + '"' + u + '><span><input type="checkbox"' + r + "/><label></label>" + n.html() + "</span></li>")) : l.append(e('<li class="' + r + a + '"><img alt="" src="' + o + '"' + u + "><span>" + n.html() + "</span></li>")), !0
                        }
                        "multiple" === i ? l.append(e('<li class="' + r + '"><span><input type="checkbox"' + r + "/><label></label>" + n.html() + "</span></li>")) : l.append(e('<li class="' + r + a + '"><span>' + n.html() + "</span></li>"))
                    };
                u.length && u.each(function() {
                    if (e(this).is("option")) r ? p(i, e(this), "multiple") : p(i, e(this));
                    else if (e(this).is("optgroup")) {
                        var t = e(this).children("option");
                        l.append(e('<li class="optgroup"><span>' + e(this).attr("label") + "</span></li>")), t.each(function() {
                            p(i, e(this), "optgroup-option")
                        })
                    }
                }), l.find("li:not(.optgroup)").each(function(a) {
                    e(this).click(function(o) {
                        if (!e(this).hasClass("disabled") && !e(this).hasClass("optgroup")) {
                            var s = !0;
                            r ? (e('input[type="checkbox"]', this).prop("checked", function(e, t) {
                                return !t
                            }), s = n(c, e(this).index(), i), v.trigger("focus")) : (l.find("li").removeClass("active"), e(this).toggleClass("active"), v.val(e(this).text())), g(l, e(this)), i.find("option").eq(a).prop("selected", s), i.trigger("change"), "undefined" != typeof t && t()
                        }
                        o.stopPropagation()
                    })
                }), i.wrap(s);
                var h = e('<span class="caret">&#9660;</span>');
                i.is(":disabled") && h.addClass("disabled");
                var m = f.replace(/"/g, "&quot;"),
                    v = e('<input type="text" class="select-dropdown" readonly="true" ' + (i.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + o + '" value="' + m + '"/>');
                i.before(v), v.before(h), v.after(l), i.is(":disabled") || v.dropdown({
                    hover: !1,
                    closeOnClick: !1
                }), i.attr("tabindex") && e(v[0]).attr("tabindex", i.attr("tabindex")), i.addClass("initialized"), v.on({
                    focus: function() {
                        if (e("ul.select-dropdown").not(l[0]).is(":visible") && e("input.select-dropdown").trigger("close"), !l.is(":visible")) {
                            e(this).trigger("open", ["focus"]);
                            var t = e(this).val();
                            r && t.indexOf(",") >= 0 && (t = t.split(",")[0]);
                            var n = l.find("li").filter(function() {
                                return e(this).text().toLowerCase() === t.toLowerCase()
                            })[0];
                            g(l, n, !0)
                        }
                    },
                    click: function(e) {
                        e.stopPropagation()
                    }
                }), v.on("blur", function() {
                    r || e(this).trigger("close"), l.find("li.selected").removeClass("selected")
                }), l.hover(function() {
                    d = !0
                }, function() {
                    d = !1
                }), e(window).on({
                    click: function() {
                        r && (d || v.trigger("close"))
                    }
                }), r && i.find("option:selected:not(:disabled)").each(function() {
                    var t = e(this).index();
                    n(c, t, i), l.find("li").eq(t).find(":checkbox").prop("checked", !0)
                });
                var g = function(t, n, i) {
                        if (n) {
                            t.find("li.selected").removeClass("selected");
                            var a = e(n);
                            a.addClass("selected"), r && !i || l.scrollTo(a)
                        }
                    },
                    y = [],
                    b = function(t) {
                        if (9 == t.which) return void v.trigger("close");
                        if (40 == t.which && !l.is(":visible")) return void v.trigger("open");
                        if (13 != t.which || l.is(":visible")) {
                            t.preventDefault();
                            var n = String.fromCharCode(t.which).toLowerCase(),
                                i = [9, 13, 27, 38, 40];
                            if (n && i.indexOf(t.which) === -1) {
                                y.push(n);
                                var a = y.join(""),
                                    o = l.find("li").filter(function() {
                                        return 0 === e(this).text().toLowerCase().indexOf(a)
                                    })[0];
                                o && g(l, o)
                            }
                            if (13 == t.which) {
                                var s = l.find("li.selected:not(.disabled)")[0];
                                s && (e(s).trigger("click"), r || v.trigger("close"))
                            }
                            40 == t.which && (o = l.find("li.selected").length ? l.find("li.selected").next("li:not(.disabled)")[0] : l.find("li:not(.disabled)")[0], g(l, o)), 27 == t.which && v.trigger("close"), 38 == t.which && (o = l.find("li.selected").prev("li:not(.disabled)")[0], o && g(l, o)), setTimeout(function() {
                                y = []
                            }, 1e3)
                        }
                    };
                v.on("keydown", b)
            }
        })
    }
}(jQuery),
function(e) {
    var t = {
        init: function(t) {
            var n = {
                indicators: !0,
                height: 400,
                transition: 500,
                interval: 6e3
            };
            return t = e.extend(n, t), this.each(function() {
                function n(e, t) {
                    e.hasClass("center-align") ? e.velocity({
                        opacity: 0,
                        translateY: -100
                    }, {
                        duration: t,
                        queue: !1
                    }) : e.hasClass("right-align") ? e.velocity({
                        opacity: 0,
                        translateX: 100
                    }, {
                        duration: t,
                        queue: !1
                    }) : e.hasClass("left-align") && e.velocity({
                        opacity: 0,
                        translateX: -100
                    }, {
                        duration: t,
                        queue: !1
                    })
                }

                function i(e) {
                    e >= u.length ? e = 0 : e < 0 && (e = u.length - 1), c = l.find(".active").index(), c != e && (r = u.eq(c), $caption = r.find(".caption"), r.removeClass("active"), r.velocity({
                        opacity: 0
                    }, {
                        duration: t.transition,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            u.not(".active").velocity({
                                opacity: 0,
                                translateX: 0,
                                translateY: 0
                            }, {
                                duration: 0,
                                queue: !1
                            })
                        }
                    }), n($caption, t.transition), t.indicators && a.eq(c).removeClass("active"), u.eq(e).velocity({
                        opacity: 1
                    }, {
                        duration: t.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), u.eq(e).find(".caption").velocity({
                        opacity: 1,
                        translateX: 0,
                        translateY: 0
                    }, {
                        duration: t.transition,
                        delay: t.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), u.eq(e).addClass("active"), t.indicators && a.eq(e).addClass("active"))
                }
                var r, a, o, s = e(this),
                    l = s.find("ul.slides").first(),
                    u = l.find("> li"),
                    c = l.find(".active").index();
                c != -1 && (r = u.eq(c)), s.hasClass("fullscreen") || (t.indicators ? s.height(t.height + 40) : s.height(t.height), l.height(t.height)), u.find(".caption").each(function() {
                    n(e(this), 0)
                }), u.find("img").each(function() {
                    var t = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                    e(this).attr("src") !== t && (e(this).css("background-image", "url(" + e(this).attr("src") + ")"), e(this).attr("src", t))
                }), t.indicators && (a = e('<ul class="indicators"></ul>'), u.each(function(n) {
                    var r = e('<li class="indicator-item"></li>');
                    r.click(function() {
                        var n = l.parent(),
                            r = n.find(e(this)).index();
                        i(r), clearInterval(o), o = setInterval(function() {
                            c = l.find(".active").index(), u.length == c + 1 ? c = 0 : c += 1, i(c)
                        }, t.transition + t.interval)
                    }), a.append(r)
                }), s.append(a), a = s.find("ul.indicators").find("li.indicator-item")), r ? r.show() : (u.first().addClass("active").velocity({
                    opacity: 1
                }, {
                    duration: t.transition,
                    queue: !1,
                    easing: "easeOutQuad"
                }), c = 0, r = u.eq(c), t.indicators && a.eq(c).addClass("active")), r.find("img").each(function() {
                    r.find(".caption").velocity({
                        opacity: 1,
                        translateX: 0,
                        translateY: 0
                    }, {
                        duration: t.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    })
                }), o = setInterval(function() {
                    c = l.find(".active").index(), i(c + 1)
                }, t.transition + t.interval);
                var d = !1,
                    f = !1,
                    p = !1;
                s.hammer({
                    prevent_default: !1
                }).bind("pan", function(e) {
                    if ("touch" === e.gesture.pointerType) {
                        clearInterval(o);
                        var t = e.gesture.direction,
                            n = e.gesture.deltaX,
                            i = e.gesture.velocityX,
                            r = e.gesture.velocityY;
                        $curr_slide = l.find(".active"), Math.abs(i) > Math.abs(r) && $curr_slide.velocity({
                            translateX: n
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), 4 === t && (n > s.innerWidth() / 2 || i < -.65) ? p = !0 : 2 === t && (n < -1 * s.innerWidth() / 2 || i > .65) && (f = !0);
                        var a;
                        f && (a = $curr_slide.next(), 0 === a.length && (a = u.first()), a.velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })), p && (a = $curr_slide.prev(), 0 === a.length && (a = u.last()), a.velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }))
                    }
                }).bind("panend", function(e) {
                    "touch" === e.gesture.pointerType && ($curr_slide = l.find(".active"), d = !1, curr_index = l.find(".active").index(), !p && !f || u.length <= 1 ? $curr_slide.velocity({
                        translateX: 0
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }) : f ? (i(curr_index + 1), $curr_slide.velocity({
                        translateX: -1 * s.innerWidth()
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            $curr_slide.velocity({
                                opacity: 0,
                                translateX: 0
                            }, {
                                duration: 0,
                                queue: !1
                            })
                        }
                    })) : p && (i(curr_index - 1), $curr_slide.velocity({
                        translateX: s.innerWidth()
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            $curr_slide.velocity({
                                opacity: 0,
                                translateX: 0
                            }, {
                                duration: 0,
                                queue: !1
                            })
                        }
                    })), f = !1, p = !1, clearInterval(o), o = setInterval(function() {
                        c = l.find(".active").index(), u.length == c + 1 ? c = 0 : c += 1, i(c)
                    }, t.transition + t.interval))
                }), s.on("sliderPause", function() {
                    clearInterval(o)
                }), s.on("sliderStart", function() {
                    clearInterval(o), o = setInterval(function() {
                        c = l.find(".active").index(), u.length == c + 1 ? c = 0 : c += 1, i(c)
                    }, t.transition + t.interval)
                }), s.on("sliderNext", function() {
                    c = l.find(".active").index(), i(c + 1)
                }), s.on("sliderPrev", function() {
                    c = l.find(".active").index(), i(c - 1)
                })
            })
        },
        pause: function() {
            e(this).trigger("sliderPause")
        },
        start: function() {
            e(this).trigger("sliderStart")
        },
        next: function() {
            e(this).trigger("sliderNext")
        },
        prev: function() {
            e(this).trigger("sliderPrev")
        }
    };
    e.fn.slider = function(n) {
        return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method " + n + " does not exist on jQuery.tooltip") : t.init.apply(this, arguments)
    }
}(jQuery),
function(e) {
    e(document).ready(function() {
        e(document).on("click.card", ".card", function(t) {
            e(this).find("> .card-reveal").length && (e(t.target).is(e(".card-reveal .card-title")) || e(t.target).is(e(".card-reveal .card-title i")) ? e(this).find(".card-reveal").velocity({
                translateY: 0
            }, {
                duration: 225,
                queue: !1,
                easing: "easeInOutQuad",
                complete: function() {
                    e(this).css({
                        display: "none"
                    })
                }
            }) : (e(t.target).is(e(".card .activator")) || e(t.target).is(e(".card .activator i"))) && (e(t.target).closest(".card").css("overflow", "hidden"), e(this).find(".card-reveal").css({
                display: "block"
            }).velocity("stop", !1).velocity({
                translateY: "-100%"
            }, {
                duration: 300,
                queue: !1,
                easing: "easeInOutQuad"
            })))
        })
    })
}(jQuery),
function(e) {
    var t = {
        data: [],
        placeholder: "",
        secondaryPlaceholder: "",
        autocompleteData: {},
        autocompleteLimit: 1 / 0
    };
    e(document).ready(function() {
        e(document).on("click", ".chip .close", function(t) {
            var n = e(this).closest(".chips");
            n.attr("data-initialized") || e(this).closest(".chip").remove()
        })
    }), e.fn.material_chip = function(n) {
        var i = this;
        if (this.$el = e(this), this.$document = e(document), this.SELS = {
                CHIPS: ".chips",
                CHIP: ".chip",
                INPUT: "input",
                DELETE: ".material-icons",
                SELECTED_CHIP: ".selected"
            }, "data" === n) return this.$el.data("chips");
        var r = e.extend({}, t, n);
        i.hasAutocomplete = !e.isEmptyObject(r.autocompleteData), this.init = function() {
            var t = 0;
            i.$el.each(function() {
                var n = e(this),
                    a = Materialize.guid();
                i.chipId = a, r.data && r.data instanceof Array || (r.data = []), n.data("chips", r.data), n.attr("data-index", t), n.attr("data-initialized", !0), n.hasClass(i.SELS.CHIPS) || n.addClass("chips"), i.chips(n, a), t++
            })
        }, this.handleEvents = function() {
            var t = i.SELS;
            i.$document.off("click.chips-focus", t.CHIPS).on("click.chips-focus", t.CHIPS, function(n) {
                e(n.target).find(t.INPUT).focus()
            }), i.$document.off("click.chips-select", t.CHIP).on("click.chips-select", t.CHIP, function(n) {
                var r = e(n.target);
                if (r.length) {
                    var a = r.hasClass("selected"),
                        o = r.closest(t.CHIPS);
                    e(t.CHIP).removeClass("selected"), a || i.selectChip(r.index(), o)
                }
            }), i.$document.off("keydown.chips").on("keydown.chips", function(n) {
                if (!e(n.target).is("input, textarea")) {
                    var r, a = i.$document.find(t.CHIP + t.SELECTED_CHIP),
                        o = a.closest(t.CHIPS),
                        s = a.siblings(t.CHIP).length;
                    if (a.length)
                        if (8 === n.which || 46 === n.which) {
                            n.preventDefault(), r = a.index(), i.deleteChip(r, o);
                            var l = null;
                            r + 1 < s ? l = r : r !== s && r + 1 !== s || (l = s - 1), l < 0 && (l = null), null !== l && i.selectChip(l, o), s || o.find("input").focus()
                        } else if (37 === n.which) {
                        if (r = a.index() - 1, r < 0) return;
                        e(t.CHIP).removeClass("selected"), i.selectChip(r, o)
                    } else if (39 === n.which) {
                        if (r = a.index() + 1, e(t.CHIP).removeClass("selected"), r > s) return void o.find("input").focus();
                        i.selectChip(r, o)
                    }
                }
            }), i.$document.off("focusin.chips", t.CHIPS + " " + t.INPUT).on("focusin.chips", t.CHIPS + " " + t.INPUT, function(n) {
                var i = e(n.target).closest(t.CHIPS);
                i.addClass("focus"), i.siblings("label, .prefix").addClass("active"), e(t.CHIP).removeClass("selected")
            }), i.$document.off("focusout.chips", t.CHIPS + " " + t.INPUT).on("focusout.chips", t.CHIPS + " " + t.INPUT, function(n) {
                var i = e(n.target).closest(t.CHIPS);
                i.removeClass("focus"), i.data("chips").length || i.siblings("label").removeClass("active"), i.siblings(".prefix").removeClass("active")
            }), i.$document.off("keydown.chips-add", t.CHIPS + " " + t.INPUT).on("keydown.chips-add", t.CHIPS + " " + t.INPUT, function(n) {
                var r = e(n.target),
                    a = r.closest(t.CHIPS),
                    o = a.children(t.CHIP).length;
                if (13 === n.which) {
                    if (i.hasAutocomplete && a.find(".autocomplete-content.dropdown-content").length && a.find(".autocomplete-content.dropdown-content").children().length) return;
                    return n.preventDefault(), i.addChip({
                        tag: r.val()
                    }, a), void r.val("")
                }
                if ((8 === n.keyCode || 37 === n.keyCode) && "" === r.val() && o) return n.preventDefault(), i.selectChip(o - 1, a), void r.blur()
            }), i.$document.off("click.chips-delete", t.CHIPS + " " + t.DELETE).on("click.chips-delete", t.CHIPS + " " + t.DELETE, function(n) {
                var r = e(n.target),
                    a = r.closest(t.CHIPS),
                    o = r.closest(t.CHIP);
                n.stopPropagation(), i.deleteChip(o.index(), a), a.find("input").focus()
            })
        }, this.chips = function(t, n) {
            var a = "";
            t.data("chips").forEach(function(e) {
                a += i.renderChip(e)
            }), a += '<input id="' + n + '" class="input" placeholder="">', t.html(a), i.setPlaceholder(t);
            var o = t.next("label");
            o.length && (o.attr("for", n), t.data("chips").length && o.addClass("active"));
            var s = e("#" + n);
            i.hasAutocomplete && s.autocomplete({
                data: r.autocompleteData,
                limit: r.autocompleteLimit,
                onAutocomplete: function(e) {
                    i.addChip({
                        tag: e
                    }, t), s.val(""), s.focus()
                }
            })
        }, this.renderChip = function(e) {
            if (e.tag) {
                var t = '<div class="chip">' + e.tag;
                return e.image && (t += ' <img src="' + e.image + '"> '), t += '<i class="material-icons close">close</i>', t += "</div>"
            }
        }, this.setPlaceholder = function(e) {
            e.data("chips").length && r.placeholder ? e.find("input").prop("placeholder", r.placeholder) : !e.data("chips").length && r.secondaryPlaceholder && e.find("input").prop("placeholder", r.secondaryPlaceholder)
        }, this.isValid = function(e, t) {
            for (var n = e.data("chips"), i = !1, r = 0; r < n.length; r++)
                if (n[r].tag === t.tag) return void(i = !0);
            return "" !== t.tag && !i
        }, this.addChip = function(t, n) {
            if (i.isValid(n, t)) {
                for (var r = i.renderChip(t), a = [], o = n.data("chips"), s = 0; s < o.length; s++) a.push(o[s]);
                a.push(t), n.data("chips", a), e(r).insertBefore(n.find("input")), n.trigger("chip.add", t), i.setPlaceholder(n)
            }
        }, this.deleteChip = function(e, t) {
            var n = t.data("chips")[e];
            t.find(".chip").eq(e).remove();
            for (var r = [], a = t.data("chips"), o = 0; o < a.length; o++) o !== e && r.push(a[o]);
            t.data("chips", r), t.trigger("chip.delete", n), i.setPlaceholder(t)
        }, this.selectChip = function(e, t) {
            var n = t.find(".chip").eq(e);
            n && !1 === n.hasClass("selected") && (n.addClass("selected"), t.trigger("chip.select", t.data("chips")[e]))
        }, this.getChipsElement = function(e, t) {
            return t.eq(e)
        }, this.init(), this.handleEvents()
    }
}(jQuery),
function(e) {
    e.fn.pushpin = function(t) {
        var n = {
            top: 0,
            bottom: 1 / 0,
            offset: 0
        };
        return "remove" === t ? (this.each(function() {
            (id = e(this).data("pushpin-id")) && (e(window).off("scroll." + id), e(this).removeData("pushpin-id").removeClass("pin-top pinned pin-bottom").removeAttr("style"))
        }), !1) : (t = e.extend(n, t), $index = 0, this.each(function() {
            function n(e) {
                e.removeClass("pin-top"), e.removeClass("pinned"), e.removeClass("pin-bottom")
            }

            function i(i, r) {
                i.each(function() {
                    t.top <= r && t.bottom >= r && !e(this).hasClass("pinned") && (n(e(this)), e(this).css("top", t.offset), e(this).addClass("pinned")), r < t.top && !e(this).hasClass("pin-top") && (n(e(this)), e(this).css("top", 0), e(this).addClass("pin-top")), r > t.bottom && !e(this).hasClass("pin-bottom") && (n(e(this)), e(this).addClass("pin-bottom"), e(this).css("top", t.bottom - o))
                })
            }
            var r = Materialize.guid(),
                a = e(this),
                o = e(this).offset().top;
            e(this).data("pushpin-id", r), i(a, e(window).scrollTop()), e(window).on("scroll." + r, function() {
                var n = e(window).scrollTop() + t.offset;
                i(a, n)
            })
        }))
    }
}(jQuery),
function(e) {
    e(document).ready(function() {
        e.fn.reverse = [].reverse, e(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)", function(n) {
            var i = e(this);
            t(i)
        }), e(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)", function(t) {
            var i = e(this);
            n(i)
        }), e(document).on("click.fabClickToggle", ".fixed-action-btn.click-to-toggle > a", function(i) {
            var r = e(this),
                a = r.parent();
            a.hasClass("active") ? n(a) : t(a)
        }), e(document).on("click.fabToolbar", ".fixed-action-btn.toolbar > a", function(t) {
            var n = e(this),
                r = n.parent();
            i(r)
        })
    }), e.fn.extend({
        openFAB: function() {
            t(e(this))
        },
        closeFAB: function() {
            n(e(this))
        },
        openToolbar: function() {
            i(e(this))
        },
        closeToolbar: function() {
            r(e(this))
        }
    });
    var t = function(t) {
            var n = t;
            if (n.hasClass("active") === !1) {
                var i, r, a = n.hasClass("horizontal");
                a === !0 ? r = 40 : i = 40, n.addClass("active"), n.find("ul .btn-floating").velocity({
                    scaleY: ".4",
                    scaleX: ".4",
                    translateY: i + "px",
                    translateX: r + "px"
                }, {
                    duration: 0
                });
                var o = 0;
                n.find("ul .btn-floating").reverse().each(function() {
                    e(this).velocity({
                        opacity: "1",
                        scaleX: "1",
                        scaleY: "1",
                        translateY: "0",
                        translateX: "0"
                    }, {
                        duration: 80,
                        delay: o
                    }), o += 40
                })
            }
        },
        n = function(e) {
            var t, n, i = e,
                r = i.hasClass("horizontal");
            r === !0 ? n = 40 : t = 40, i.removeClass("active");
            i.find("ul .btn-floating").velocity("stop", !0), i.find("ul .btn-floating").velocity({
                opacity: "0",
                scaleX: ".4",
                scaleY: ".4",
                translateY: t + "px",
                translateX: n + "px"
            }, {
                duration: 80
            })
        },
        i = function(t) {
            if ("true" !== t.attr("data-open")) {
                var n, i, a, o = window.innerWidth,
                    s = window.innerHeight,
                    l = t[0].getBoundingClientRect(),
                    u = t.find("> a").first(),
                    c = t.find("> ul").first(),
                    d = e('<div class="fab-backdrop"></div>'),
                    f = u.css("background-color");
                u.append(d), n = l.left - o / 2 + l.width / 2, i = s - l.bottom, a = o / d.width(), t.attr("data-origin-bottom", l.bottom), t.attr("data-origin-left", l.left), t.attr("data-origin-width", l.width), t.addClass("active"), t.attr("data-open", !0), t.css({
                    "text-align": "center",
                    width: "100%",
                    bottom: 0,
                    left: 0,
                    transform: "translateX(" + n + "px)",
                    transition: "none"
                }), u.css({
                    transform: "translateY(" + -i + "px)",
                    transition: "none"
                }), d.css({
                    "background-color": f
                }), setTimeout(function() {
                    t.css({
                        transform: "",
                        transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"
                    }), u.css({
                        overflow: "visible",
                        transform: "",
                        transition: "transform .2s"
                    }), setTimeout(function() {
                        t.css({
                            overflow: "hidden",
                            "background-color": f
                        }), d.css({
                            transform: "scale(" + a + ")",
                            transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                        }), c.find("> li > a").css({
                            opacity: 1
                        }), e(window).on("scroll.fabToolbarClose", function() {
                            r(t), e(window).off("scroll.fabToolbarClose"), e(document).off("click.fabToolbarClose")
                        }), e(document).on("click.fabToolbarClose", function(n) {
                            e(n.target).closest(c).length || (r(t), e(window).off("scroll.fabToolbarClose"), e(document).off("click.fabToolbarClose"))
                        })
                    }, 100)
                }, 0)
            }
        },
        r = function(e) {
            if ("true" === e.attr("data-open")) {
                var t, n, i, r = window.innerWidth,
                    a = window.innerHeight,
                    o = e.attr("data-origin-width"),
                    s = e.attr("data-origin-bottom"),
                    l = e.attr("data-origin-left"),
                    u = e.find("> .btn-floating").first(),
                    c = e.find("> ul").first(),
                    d = e.find(".fab-backdrop"),
                    f = u.css("background-color");
                t = l - r / 2 + o / 2, n = a - s, i = r / d.width(), e.removeClass("active"), e.attr("data-open", !1), e.css({
                    "background-color": "transparent",
                    transition: "none"
                }), u.css({
                    transition: "none"
                }), d.css({
                    transform: "scale(0)",
                    "background-color": f
                }), c.find("> li > a").css({
                    opacity: ""
                }), setTimeout(function() {
                    d.remove(), e.css({
                        "text-align": "",
                        width: "",
                        bottom: "",
                        left: "",
                        overflow: "",
                        "background-color": "",
                        transform: "translate3d(" + -t + "px,0,0)"
                    }), u.css({
                        overflow: "",
                        transform: "translate3d(0," + n + "px,0)"
                    }), setTimeout(function() {
                        e.css({
                            transform: "translate3d(0,0,0)",
                            transition: "transform .2s"
                        }), u.css({
                            transform: "translate3d(0,0,0)",
                            transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                        })
                    }, 20)
                }, 200)
            }
        }
}(jQuery),
function(e) {
    Materialize.fadeInImage = function(t) {
        var n;
        if ("string" == typeof t) n = e(t);
        else {
            if ("object" != typeof t) return;
            n = t
        }
        n.css({
            opacity: 0
        }), e(n).velocity({
            opacity: 1
        }, {
            duration: 650,
            queue: !1,
            easing: "easeOutSine"
        }), e(n).velocity({
            opacity: 1
        }, {
            duration: 1300,
            queue: !1,
            easing: "swing",
            step: function(t, n) {
                n.start = 100;
                var i = t / 100,
                    r = 150 - (100 - t) / 1.75;
                r < 100 && (r = 100), t >= 0 && e(this).css({
                    "-webkit-filter": "grayscale(" + i + ")brightness(" + r + "%)",
                    filter: "grayscale(" + i + ")brightness(" + r + "%)"
                })
            }
        })
    }, Materialize.showStaggeredList = function(t) {
        var n;
        if ("string" == typeof t) n = e(t);
        else {
            if ("object" != typeof t) return;
            n = t
        }
        var i = 0;
        n.find("li").velocity({
            translateX: "-100px"
        }, {
            duration: 0
        }), n.find("li").each(function() {
            e(this).velocity({
                opacity: "1",
                translateX: "0"
            }, {
                duration: 800,
                delay: i,
                easing: [60, 10]
            }), i += 120
        })
    }, e(document).ready(function() {
        var t = !1,
            n = !1;
        e(".dismissable").each(function() {
            e(this).hammer({
                prevent_default: !1
            }).bind("pan", function(i) {
                if ("touch" === i.gesture.pointerType) {
                    var r = e(this),
                        a = i.gesture.direction,
                        o = i.gesture.deltaX,
                        s = i.gesture.velocityX;
                    r.velocity({
                        translateX: o
                    }, {
                        duration: 50,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), 4 === a && (o > r.innerWidth() / 2 || s < -.75) && (t = !0), 2 === a && (o < -1 * r.innerWidth() / 2 || s > .75) && (n = !0)
                }
            }).bind("panend", function(i) {
                if (Math.abs(i.gesture.deltaX) < e(this).innerWidth() / 2 && (n = !1, t = !1), "touch" === i.gesture.pointerType) {
                    var r = e(this);
                    if (t || n) {
                        var a;
                        a = t ? r.innerWidth() : -1 * r.innerWidth(), r.velocity({
                            translateX: a
                        }, {
                            duration: 100,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                r.css("border", "none"), r.velocity({
                                    height: 0,
                                    padding: 0
                                }, {
                                    duration: 200,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        r.remove()
                                    }
                                })
                            }
                        })
                    } else r.velocity({
                        translateX: 0
                    }, {
                        duration: 100,
                        queue: !1,
                        easing: "easeOutQuad"
                    });
                    t = !1, n = !1
                }
            })
        })
    })
}(jQuery),
function(e) {
    var t = !1;
    Materialize.scrollFire = function(e) {
        var n = function() {
                for (var t = window.pageYOffset + window.innerHeight, n = 0; n < e.length; n++) {
                    var i = e[n],
                        r = i.selector,
                        a = i.offset,
                        o = i.callback,
                        s = document.querySelector(r);
                    if (null !== s) {
                        var l = s.getBoundingClientRect().top + window.pageYOffset;
                        if (t > l + a && i.done !== !0) {
                            if ("function" == typeof o) o.call(this, s);
                            else if ("string" == typeof o) {
                                var u = new Function(o);
                                u(s)
                            }
                            i.done = !0
                        }
                    }
                }
            },
            i = Materialize.throttle(function() {
                n()
            }, e.throttle || 100);
        t || (window.addEventListener("scroll", i), window.addEventListener("resize", i), t = !0), setTimeout(i, 0)
    }
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define("picker", ["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : this.Picker = e(jQuery)
}(function(e) {
    function t(a, o, l, d) {
        function f() {
            return t._.node("div", t._.node("div", t._.node("div", t._.node("div", T.component.nodes(b.open), x.box), x.wrap), x.frame), x.holder)
        }

        function p() {
            C.data(o, T).addClass(x.input).attr("tabindex", -1).val(C.data("value") ? T.get("select", w.format) : a.value), w.editable || C.on("focus." + b.id + " click." + b.id, function(e) {
                e.preventDefault(), T.$root.eq(0).focus()
            }).on("keydown." + b.id, v), r(a, {
                haspopup: !0,
                expanded: !1,
                readonly: !1,
                owns: a.id + "_root"
            })
        }

        function h() {
            T.$root.on({
                keydown: v,
                focusin: function(e) {
                    T.$root.removeClass(x.focused), e.stopPropagation()
                },
                "mousedown click": function(t) {
                    var n = t.target;
                    n != T.$root.children()[0] && (t.stopPropagation(), "mousedown" != t.type || e(n).is("input, select, textarea, button, option") || (t.preventDefault(), T.$root.eq(0).focus()))
                }
            }).on({
                focus: function() {
                    C.addClass(x.target)
                },
                blur: function() {
                    C.removeClass(x.target)
                }
            }).on("focus.toOpen", g).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                var t = e(this),
                    n = t.data(),
                    i = t.hasClass(x.navDisabled) || t.hasClass(x.disabled),
                    r = s();
                r = r && (r.type || r.href), (i || r && !e.contains(T.$root[0], r)) && T.$root.eq(0).focus(), !i && n.nav ? T.set("highlight", T.component.item.highlight, {
                    nav: n.nav
                }) : !i && "pick" in n ? T.set("select", n.pick) : n.clear ? T.clear().close(!0) : n.close && T.close(!0)
            }), r(T.$root[0], "hidden", !0)
        }

        function m() {
            var t;
            w.hiddenName === !0 ? (t = a.name, a.name = "") : (t = ["string" == typeof w.hiddenPrefix ? w.hiddenPrefix : "", "string" == typeof w.hiddenSuffix ? w.hiddenSuffix : "_submit"], t = t[0] + a.name + t[1]), T._hidden = e('<input type=hidden name="' + t + '"' + (C.data("value") || a.value ? ' value="' + T.get("select", w.formatSubmit) + '"' : "") + ">")[0], C.on("change." + b.id, function() {
                T._hidden.value = a.value ? T.get("select", w.formatSubmit) : ""
            }), w.container ? e(w.container).append(T._hidden) : C.after(T._hidden)
        }

        function v(e) {
            var t = e.keyCode,
                n = /^(8|46)$/.test(t);
            return 27 == t ? (T.close(), !1) : void((32 == t || n || !b.open && T.component.key[t]) && (e.preventDefault(), e.stopPropagation(), n ? T.clear().close() : T.open()))
        }

        function g(e) {
            e.stopPropagation(), "focus" == e.type && T.$root.addClass(x.focused),
                T.open()
        }
        if (!a) return t;
        var y = !1,
            b = {
                id: a.id || "P" + Math.abs(~~(Math.random() * new Date))
            },
            w = l ? e.extend(!0, {}, l.defaults, d) : d || {},
            x = e.extend({}, t.klasses(), w.klass),
            C = e(a),
            k = function() {
                return this.start()
            },
            T = k.prototype = {
                constructor: k,
                $node: C,
                start: function() {
                    return b && b.start ? T : (b.methods = {}, b.start = !0, b.open = !1, b.type = a.type, a.autofocus = a == s(), a.readOnly = !w.editable, a.id = a.id || b.id, "text" != a.type && (a.type = "text"), T.component = new l(T, w), T.$root = e(t._.node("div", f(), x.picker, 'id="' + a.id + '_root" tabindex="0"')), h(), w.formatSubmit && m(), p(), w.container ? e(w.container).append(T.$root) : C.after(T.$root), T.on({
                        start: T.component.onStart,
                        render: T.component.onRender,
                        stop: T.component.onStop,
                        open: T.component.onOpen,
                        close: T.component.onClose,
                        set: T.component.onSet
                    }).on({
                        start: w.onStart,
                        render: w.onRender,
                        stop: w.onStop,
                        open: w.onOpen,
                        close: w.onClose,
                        set: w.onSet
                    }), y = n(T.$root.children()[0]), a.autofocus && T.open(), T.trigger("start").trigger("render"))
                },
                render: function(e) {
                    return e ? T.$root.html(f()) : T.$root.find("." + x.box).html(T.component.nodes(b.open)), T.trigger("render")
                },
                stop: function() {
                    return b.start ? (T.close(), T._hidden && T._hidden.parentNode.removeChild(T._hidden), T.$root.remove(), C.removeClass(x.input).removeData(o), setTimeout(function() {
                        C.off("." + b.id)
                    }, 0), a.type = b.type, a.readOnly = !1, T.trigger("stop"), b.methods = {}, b.start = !1, T) : T
                },
                open: function(n) {
                    return b.open ? T : (C.addClass(x.active), r(a, "expanded", !0), setTimeout(function() {
                        T.$root.addClass(x.opened), r(T.$root[0], "hidden", !1)
                    }, 0), n !== !1 && (b.open = !0, y && c.css("overflow", "hidden").css("padding-right", "+=" + i()), T.$root.eq(0).focus(), u.on("click." + b.id + " focusin." + b.id, function(e) {
                        var t = e.target;
                        t != a && t != document && 3 != e.which && T.close(t === T.$root.children()[0])
                    }).on("keydown." + b.id, function(n) {
                        var i = n.keyCode,
                            r = T.component.key[i],
                            a = n.target;
                        27 == i ? T.close(!0) : a != T.$root[0] || !r && 13 != i ? e.contains(T.$root[0], a) && 13 == i && (n.preventDefault(), a.click()) : (n.preventDefault(), r ? t._.trigger(T.component.key.go, T, [t._.trigger(r)]) : T.$root.find("." + x.highlighted).hasClass(x.disabled) || T.set("select", T.component.item.highlight).close())
                    })), T.trigger("open"))
                },
                close: function(e) {
                    return e && (T.$root.off("focus.toOpen").eq(0).focus(), setTimeout(function() {
                        T.$root.on("focus.toOpen", g)
                    }, 0)), C.removeClass(x.active), r(a, "expanded", !1), setTimeout(function() {
                        T.$root.removeClass(x.opened + " " + x.focused), r(T.$root[0], "hidden", !0)
                    }, 0), b.open ? (b.open = !1, y && c.css("overflow", "").css("padding-right", "-=" + i()), u.off("." + b.id), T.trigger("close")) : T
                },
                clear: function(e) {
                    return T.set("clear", null, e)
                },
                set: function(t, n, i) {
                    var r, a, o = e.isPlainObject(t),
                        s = o ? t : {};
                    if (i = o && e.isPlainObject(n) ? n : i || {}, t) {
                        o || (s[t] = n);
                        for (r in s) a = s[r], r in T.component.item && (void 0 === a && (a = null), T.component.set(r, a, i)), "select" != r && "clear" != r || C.val("clear" == r ? "" : T.get(r, w.format)).trigger("change");
                        T.render()
                    }
                    return i.muted ? T : T.trigger("set", s)
                },
                get: function(e, n) {
                    if (e = e || "value", null != b[e]) return b[e];
                    if ("valueSubmit" == e) {
                        if (T._hidden) return T._hidden.value;
                        e = "value"
                    }
                    if ("value" == e) return a.value;
                    if (e in T.component.item) {
                        if ("string" == typeof n) {
                            var i = T.component.get(e);
                            return i ? t._.trigger(T.component.formats.toString, T.component, [n, i]) : ""
                        }
                        return T.component.get(e)
                    }
                },
                on: function(t, n, i) {
                    var r, a, o = e.isPlainObject(t),
                        s = o ? t : {};
                    if (t) {
                        o || (s[t] = n);
                        for (r in s) a = s[r], i && (r = "_" + r), b.methods[r] = b.methods[r] || [], b.methods[r].push(a)
                    }
                    return T
                },
                off: function() {
                    var e, t, n = arguments;
                    for (e = 0, namesCount = n.length; e < namesCount; e += 1) t = n[e], t in b.methods && delete b.methods[t];
                    return T
                },
                trigger: function(e, n) {
                    var i = function(e) {
                        var i = b.methods[e];
                        i && i.map(function(e) {
                            t._.trigger(e, T, [n])
                        })
                    };
                    return i("_" + e), i(e), T
                }
            };
        return new k
    }

    function n(e) {
        var t, n = "position";
        return e.currentStyle ? t = e.currentStyle[n] : window.getComputedStyle && (t = getComputedStyle(e)[n]), "fixed" == t
    }

    function i() {
        if (c.height() <= l.height()) return 0;
        var t = e('<div style="visibility:hidden;width:100px" />').appendTo("body"),
            n = t[0].offsetWidth;
        t.css("overflow", "scroll");
        var i = e('<div style="width:100%" />').appendTo(t),
            r = i[0].offsetWidth;
        return t.remove(), n - r
    }

    function r(t, n, i) {
        if (e.isPlainObject(n))
            for (var r in n) a(t, r, n[r]);
        else a(t, n, i)
    }

    function a(e, t, n) {
        e.setAttribute(("role" == t ? "" : "aria-") + t, n)
    }

    function o(t, n) {
        e.isPlainObject(t) || (t = {
            attribute: n
        }), n = "";
        for (var i in t) {
            var r = ("role" == i ? "" : "aria-") + i,
                a = t[i];
            n += null == a ? "" : r + '="' + t[i] + '"'
        }
        return n
    }

    function s() {
        try {
            return document.activeElement
        } catch (e) {}
    }
    var l = e(window),
        u = e(document),
        c = e(document.documentElement);
    return t.klasses = function(e) {
        return e = e || "picker", {
            picker: e,
            opened: e + "--opened",
            focused: e + "--focused",
            input: e + "__input",
            active: e + "__input--active",
            target: e + "__input--target",
            holder: e + "__holder",
            frame: e + "__frame",
            wrap: e + "__wrap",
            box: e + "__box"
        }
    }, t._ = {
        group: function(e) {
            for (var n, i = "", r = t._.trigger(e.min, e); r <= t._.trigger(e.max, e, [r]); r += e.i) n = t._.trigger(e.item, e, [r]), i += t._.node(e.node, n[0], n[1], n[2]);
            return i
        },
        node: function(t, n, i, r) {
            return n ? (n = e.isArray(n) ? n.join("") : n, i = i ? ' class="' + i + '"' : "", r = r ? " " + r : "", "<" + t + i + r + ">" + n + "</" + t + ">") : ""
        },
        lead: function(e) {
            return (e < 10 ? "0" : "") + e
        },
        trigger: function(e, t, n) {
            return "function" == typeof e ? e.apply(t, n || []) : e
        },
        digits: function(e) {
            return /\d/.test(e[1]) ? 2 : 1
        },
        isDate: function(e) {
            return {}.toString.call(e).indexOf("Date") > -1 && this.isInteger(e.getDate())
        },
        isInteger: function(e) {
            return {}.toString.call(e).indexOf("Number") > -1 && e % 1 === 0
        },
        ariaAttr: o
    }, t.extend = function(n, i) {
        e.fn[n] = function(r, a) {
            var o = this.data(n);
            return "picker" == r ? o : o && "string" == typeof r ? t._.trigger(o[r], o, [a]) : this.each(function() {
                var a = e(this);
                a.data(n) || new t(this, n, i, r)
            })
        }, e.fn[n].defaults = i.defaults
    }, t
}),
function(e) {
    "function" == typeof define && define.amd ? define(["picker", "jquery"], e) : "object" == typeof exports ? module.exports = e(require("./picker.js"), require("jquery")) : e(Picker, jQuery)
}(function(e, t) {
    function n(e, t) {
        var n = this,
            i = e.$node[0],
            r = i.value,
            a = e.$node.data("value"),
            o = a || r,
            s = a ? t.formatSubmit : t.format,
            l = function() {
                return i.currentStyle ? "rtl" == i.currentStyle.direction : "rtl" == getComputedStyle(e.$root[0]).direction
            };
        n.settings = t, n.$node = e.$node, n.queue = {
            min: "measure create",
            max: "measure create",
            now: "now create",
            select: "parse create validate",
            highlight: "parse navigate create validate",
            view: "parse create validate viewset",
            disable: "deactivate",
            enable: "activate"
        }, n.item = {}, n.item.clear = null, n.item.disable = (t.disable || []).slice(0), n.item.enable = - function(e) {
            return e[0] === !0 ? e.shift() : -1
        }(n.item.disable), n.set("min", t.min).set("max", t.max).set("now"), o ? n.set("select", o, {
            format: s
        }) : n.set("select", null).set("highlight", n.item.now), n.key = {
            40: 7,
            38: -7,
            39: function() {
                return l() ? -1 : 1
            },
            37: function() {
                return l() ? 1 : -1
            },
            go: function(e) {
                var t = n.item.highlight,
                    i = new Date(t.year, t.month, t.date + e);
                n.set("highlight", i, {
                    interval: e
                }), this.render()
            }
        }, e.on("render", function() {
            e.$root.find("." + t.klass.selectMonth).on("change", function() {
                var n = this.value;
                n && (e.set("highlight", [e.get("view").year, n, e.get("highlight").date]), e.$root.find("." + t.klass.selectMonth).trigger("focus"))
            }), e.$root.find("." + t.klass.selectYear).on("change", function() {
                var n = this.value;
                n && (e.set("highlight", [n, e.get("view").month, e.get("highlight").date]), e.$root.find("." + t.klass.selectYear).trigger("focus"))
            })
        }, 1).on("open", function() {
            var i = "";
            n.disabled(n.get("now")) && (i = ":not(." + t.klass.buttonToday + ")"), e.$root.find("button" + i + ", select").attr("disabled", !1)
        }, 1).on("close", function() {
            e.$root.find("button, select").attr("disabled", !0)
        }, 1)
    }
    var i = 7,
        r = 6,
        a = e._;
    n.prototype.set = function(e, t, n) {
        var i = this,
            r = i.item;
        return null === t ? ("clear" == e && (e = "select"), r[e] = t, i) : (r["enable" == e ? "disable" : "flip" == e ? "enable" : e] = i.queue[e].split(" ").map(function(r) {
            return t = i[r](e, t, n)
        }).pop(), "select" == e ? i.set("highlight", r.select, n) : "highlight" == e ? i.set("view", r.highlight, n) : e.match(/^(flip|min|max|disable|enable)$/) && (r.select && i.disabled(r.select) && i.set("select", r.select, n), r.highlight && i.disabled(r.highlight) && i.set("highlight", r.highlight, n)), i)
    }, n.prototype.get = function(e) {
        return this.item[e]
    }, n.prototype.create = function(e, n, i) {
        var r, o = this;
        return n = void 0 === n ? e : n, n == -(1 / 0) || n == 1 / 0 ? r = n : t.isPlainObject(n) && a.isInteger(n.pick) ? n = n.obj : t.isArray(n) ? (n = new Date(n[0], n[1], n[2]), n = a.isDate(n) ? n : o.create().obj) : n = a.isInteger(n) || a.isDate(n) ? o.normalize(new Date(n), i) : o.now(e, n, i), {
            year: r || n.getFullYear(),
            month: r || n.getMonth(),
            date: r || n.getDate(),
            day: r || n.getDay(),
            obj: r || n,
            pick: r || n.getTime()
        }
    }, n.prototype.createRange = function(e, n) {
        var i = this,
            r = function(e) {
                return e === !0 || t.isArray(e) || a.isDate(e) ? i.create(e) : e
            };
        return a.isInteger(e) || (e = r(e)), a.isInteger(n) || (n = r(n)), a.isInteger(e) && t.isPlainObject(n) ? e = [n.year, n.month, n.date + e] : a.isInteger(n) && t.isPlainObject(e) && (n = [e.year, e.month, e.date + n]), {
            from: r(e),
            to: r(n)
        }
    }, n.prototype.withinRange = function(e, t) {
        return e = this.createRange(e.from, e.to), t.pick >= e.from.pick && t.pick <= e.to.pick
    }, n.prototype.overlapRanges = function(e, t) {
        var n = this;
        return e = n.createRange(e.from, e.to), t = n.createRange(t.from, t.to), n.withinRange(e, t.from) || n.withinRange(e, t.to) || n.withinRange(t, e.from) || n.withinRange(t, e.to)
    }, n.prototype.now = function(e, t, n) {
        return t = new Date, n && n.rel && t.setDate(t.getDate() + n.rel), this.normalize(t, n)
    }, n.prototype.navigate = function(e, n, i) {
        var r, a, o, s, l = t.isArray(n),
            u = t.isPlainObject(n),
            c = this.item.view;
        if (l || u) {
            for (u ? (a = n.year, o = n.month, s = n.date) : (a = +n[0], o = +n[1], s = +n[2]), i && i.nav && c && c.month !== o && (a = c.year, o = c.month), r = new Date(a, o + (i && i.nav ? i.nav : 0), 1), a = r.getFullYear(), o = r.getMonth(); new Date(a, o, s).getMonth() !== o;) s -= 1;
            n = [a, o, s]
        }
        return n
    }, n.prototype.normalize = function(e) {
        return e.setHours(0, 0, 0, 0), e
    }, n.prototype.measure = function(e, t) {
        var n = this;
        return t ? "string" == typeof t ? t = n.parse(e, t) : a.isInteger(t) && (t = n.now(e, t, {
            rel: t
        })) : t = "min" == e ? -(1 / 0) : 1 / 0, t
    }, n.prototype.viewset = function(e, t) {
        return this.create([t.year, t.month, 1])
    }, n.prototype.validate = function(e, n, i) {
        var r, o, s, l, u = this,
            c = n,
            d = i && i.interval ? i.interval : 1,
            f = u.item.enable === -1,
            p = u.item.min,
            h = u.item.max,
            m = f && u.item.disable.filter(function(e) {
                if (t.isArray(e)) {
                    var i = u.create(e).pick;
                    i < n.pick ? r = !0 : i > n.pick && (o = !0)
                }
                return a.isInteger(e)
            }).length;
        if ((!i || !i.nav) && (!f && u.disabled(n) || f && u.disabled(n) && (m || r || o) || !f && (n.pick <= p.pick || n.pick >= h.pick)))
            for (f && !m && (!o && d > 0 || !r && d < 0) && (d *= -1); u.disabled(n) && (Math.abs(d) > 1 && (n.month < c.month || n.month > c.month) && (n = c, d = d > 0 ? 1 : -1), n.pick <= p.pick ? (s = !0, d = 1, n = u.create([p.year, p.month, p.date + (n.pick === p.pick ? 0 : -1)])) : n.pick >= h.pick && (l = !0, d = -1, n = u.create([h.year, h.month, h.date + (n.pick === h.pick ? 0 : 1)])), !s || !l);) n = u.create([n.year, n.month, n.date + d]);
        return n
    }, n.prototype.disabled = function(e) {
        var n = this,
            i = n.item.disable.filter(function(i) {
                return a.isInteger(i) ? e.day === (n.settings.firstDay ? i : i - 1) % 7 : t.isArray(i) || a.isDate(i) ? e.pick === n.create(i).pick : t.isPlainObject(i) ? n.withinRange(i, e) : void 0
            });
        return i = i.length && !i.filter(function(e) {
            return t.isArray(e) && "inverted" == e[3] || t.isPlainObject(e) && e.inverted
        }).length, n.item.enable === -1 ? !i : i || e.pick < n.item.min.pick || e.pick > n.item.max.pick
    }, n.prototype.parse = function(e, t, n) {
        var i = this,
            r = {};
        return t && "string" == typeof t ? (n && n.format || (n = n || {}, n.format = i.settings.format), i.formats.toArray(n.format).map(function(e) {
            var n = i.formats[e],
                o = n ? a.trigger(n, i, [t, r]) : e.replace(/^!/, "").length;
            n && (r[e] = t.substr(0, o)), t = t.substr(o)
        }), [r.yyyy || r.yy, +(r.mm || r.m) - 1, r.dd || r.d]) : t
    }, n.prototype.formats = function() {
        function e(e, t, n) {
            var i = e.match(/\w+/)[0];
            return n.mm || n.m || (n.m = t.indexOf(i) + 1), i.length
        }

        function t(e) {
            return e.match(/\w+/)[0].length
        }
        return {
            d: function(e, t) {
                return e ? a.digits(e) : t.date
            },
            dd: function(e, t) {
                return e ? 2 : a.lead(t.date)
            },
            ddd: function(e, n) {
                return e ? t(e) : this.settings.weekdaysShort[n.day]
            },
            dddd: function(e, n) {
                return e ? t(e) : this.settings.weekdaysFull[n.day]
            },
            m: function(e, t) {
                return e ? a.digits(e) : t.month + 1
            },
            mm: function(e, t) {
                return e ? 2 : a.lead(t.month + 1)
            },
            mmm: function(t, n) {
                var i = this.settings.monthsShort;
                return t ? e(t, i, n) : i[n.month]
            },
            mmmm: function(t, n) {
                var i = this.settings.monthsFull;
                return t ? e(t, i, n) : i[n.month]
            },
            yy: function(e, t) {
                return e ? 2 : ("" + t.year).slice(2)
            },
            yyyy: function(e, t) {
                return e ? 4 : t.year
            },
            toArray: function(e) {
                return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
            },
            toString: function(e, t) {
                var n = this;
                return n.formats.toArray(e).map(function(e) {
                    return a.trigger(n.formats[e], n, [0, t]) || e.replace(/^!/, "")
                }).join("")
            }
        }
    }(), n.prototype.isDateExact = function(e, n) {
        var i = this;
        return a.isInteger(e) && a.isInteger(n) || "boolean" == typeof e && "boolean" == typeof n ? e === n : (a.isDate(e) || t.isArray(e)) && (a.isDate(n) || t.isArray(n)) ? i.create(e).pick === i.create(n).pick : !(!t.isPlainObject(e) || !t.isPlainObject(n)) && (i.isDateExact(e.from, n.from) && i.isDateExact(e.to, n.to))
    }, n.prototype.isDateOverlap = function(e, n) {
        var i = this,
            r = i.settings.firstDay ? 1 : 0;
        return a.isInteger(e) && (a.isDate(n) || t.isArray(n)) ? (e = e % 7 + r, e === i.create(n).day + 1) : a.isInteger(n) && (a.isDate(e) || t.isArray(e)) ? (n = n % 7 + r, n === i.create(e).day + 1) : !(!t.isPlainObject(e) || !t.isPlainObject(n)) && i.overlapRanges(e, n)
    }, n.prototype.flipEnable = function(e) {
        var t = this.item;
        t.enable = e || (t.enable == -1 ? 1 : -1)
    }, n.prototype.deactivate = function(e, n) {
        var i = this,
            r = i.item.disable.slice(0);
        return "flip" == n ? i.flipEnable() : n === !1 ? (i.flipEnable(1), r = []) : n === !0 ? (i.flipEnable(-1), r = []) : n.map(function(e) {
            for (var n, o = 0; o < r.length; o += 1)
                if (i.isDateExact(e, r[o])) {
                    n = !0;
                    break
                }
            n || (a.isInteger(e) || a.isDate(e) || t.isArray(e) || t.isPlainObject(e) && e.from && e.to) && r.push(e)
        }), r
    }, n.prototype.activate = function(e, n) {
        var i = this,
            r = i.item.disable,
            o = r.length;
        return "flip" == n ? i.flipEnable() : n === !0 ? (i.flipEnable(1), r = []) : n === !1 ? (i.flipEnable(-1), r = []) : n.map(function(e) {
            var n, s, l, u;
            for (l = 0; l < o; l += 1) {
                if (s = r[l], i.isDateExact(s, e)) {
                    n = r[l] = null, u = !0;
                    break
                }
                if (i.isDateOverlap(s, e)) {
                    t.isPlainObject(e) ? (e.inverted = !0, n = e) : t.isArray(e) ? (n = e, n[3] || n.push("inverted")) : a.isDate(e) && (n = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);
                    break
                }
            }
            if (n)
                for (l = 0; l < o; l += 1)
                    if (i.isDateExact(r[l], e)) {
                        r[l] = null;
                        break
                    }
            if (u)
                for (l = 0; l < o; l += 1)
                    if (i.isDateOverlap(r[l], e)) {
                        r[l] = null;
                        break
                    }
            n && r.push(n)
        }), r.filter(function(e) {
            return null != e
        })
    }, n.prototype.nodes = function(e) {
        var t = this,
            n = t.settings,
            o = t.item,
            s = o.now,
            l = o.select,
            u = o.highlight,
            c = o.view,
            d = o.disable,
            f = o.min,
            p = o.max,
            h = function(e, t) {
                return n.firstDay && (e.push(e.shift()), t.push(t.shift())), a.node("thead", a.node("tr", a.group({
                    min: 0,
                    max: i - 1,
                    i: 1,
                    node: "th",
                    item: function(i) {
                        return [e[i], n.klass.weekdays, 'scope=col title="' + t[i] + '"']
                    }
                })))
            }((n.showWeekdaysFull ? n.weekdaysFull : n.weekdaysLetter).slice(0), n.weekdaysFull.slice(0)),
            m = function(e) {
                return a.node("div", " ", n.klass["nav" + (e ? "Next" : "Prev")] + (e && c.year >= p.year && c.month >= p.month || !e && c.year <= f.year && c.month <= f.month ? " " + n.klass.navDisabled : ""), "data-nav=" + (e || -1) + " " + a.ariaAttr({
                    role: "button",
                    controls: t.$node[0].id + "_table"
                }) + ' title="' + (e ? n.labelMonthNext : n.labelMonthPrev) + '"')
            },
            v = function(i) {
                var r = n.showMonthsShort ? n.monthsShort : n.monthsFull;
                return "short_months" == i && (r = n.monthsShort), n.selectMonths && void 0 == i ? a.node("select", a.group({
                    min: 0,
                    max: 11,
                    i: 1,
                    node: "option",
                    item: function(e) {
                        return [r[e], 0, "value=" + e + (c.month == e ? " selected" : "") + (c.year == f.year && e < f.month || c.year == p.year && e > p.month ? " disabled" : "")]
                    }
                }), n.klass.selectMonth + " browser-default", (e ? "" : "disabled") + " " + a.ariaAttr({
                    controls: t.$node[0].id + "_table"
                }) + ' title="' + n.labelMonthSelect + '"') : "short_months" == i ? null != l ? a.node("div", r[l.month]) : a.node("div", r[c.month]) : a.node("div", r[c.month], n.klass.month)
            },
            g = function(i) {
                var r = c.year,
                    o = n.selectYears === !0 ? 5 : ~~(n.selectYears / 2);
                if (o) {
                    var s = f.year,
                        l = p.year,
                        u = r - o,
                        d = r + o;
                    if (s > u && (d += s - u, u = s), l < d) {
                        var h = u - s,
                            m = d - l;
                        u -= h > m ? m : h, d = l
                    }
                    if (n.selectYears && void 0 == i) return a.node("select", a.group({
                        min: u,
                        max: d,
                        i: 1,
                        node: "option",
                        item: function(e) {
                            return [e, 0, "value=" + e + (r == e ? " selected" : "")]
                        }
                    }), n.klass.selectYear + " browser-default", (e ? "" : "disabled") + " " + a.ariaAttr({
                        controls: t.$node[0].id + "_table"
                    }) + ' title="' + n.labelYearSelect + '"')
                }
                return "raw" == i ? a.node("div", r) : a.node("div", r, n.klass.year)
            };
        return createDayLabel = function() {
            return null != l ? a.node("div", l.date) : a.node("div", s.date)
        }, createWeekdayLabel = function() {
            var e;
            e = null != l ? l.day : s.day;
            var t = n.weekdaysFull[e];
            return t
        }, a.node("div", a.node("div", createWeekdayLabel(), "picker__weekday-display") + a.node("div", v("short_months"), n.klass.month_display) + a.node("div", createDayLabel(), n.klass.day_display) + a.node("div", g("raw"), n.klass.year_display), n.klass.date_display) + a.node("div", a.node("div", (n.selectYears ? v() + g() : v() + g()) + m() + m(1), n.klass.header) + a.node("table", h + a.node("tbody", a.group({
            min: 0,
            max: r - 1,
            i: 1,
            node: "tr",
            item: function(e) {
                var r = n.firstDay && 0 === t.create([c.year, c.month, 1]).day ? -7 : 0;
                return [a.group({
                    min: i * e - c.day + r + 1,
                    max: function() {
                        return this.min + i - 1
                    },
                    i: 1,
                    node: "td",
                    item: function(e) {
                        e = t.create([c.year, c.month, e + (n.firstDay ? 1 : 0)]);
                        var i = l && l.pick == e.pick,
                            r = u && u.pick == e.pick,
                            o = d && t.disabled(e) || e.pick < f.pick || e.pick > p.pick,
                            h = a.trigger(t.formats.toString, t, [n.format, e]);
                        return [a.node("div", e.date, function(t) {
                            return t.push(c.month == e.month ? n.klass.infocus : n.klass.outfocus), s.pick == e.pick && t.push(n.klass.now), i && t.push(n.klass.selected), r && t.push(n.klass.highlighted), o && t.push(n.klass.disabled), t.join(" ")
                        }([n.klass.day]), "data-pick=" + e.pick + " " + a.ariaAttr({
                            role: "gridcell",
                            label: h,
                            selected: !(!i || t.$node.val() !== h) || null,
                            activedescendant: !!r || null,
                            disabled: !!o || null
                        })), "", a.ariaAttr({
                            role: "presentation"
                        })]
                    }
                })]
            }
        })), n.klass.table, 'id="' + t.$node[0].id + '_table" ' + a.ariaAttr({
            role: "grid",
            controls: t.$node[0].id,
            readonly: !0
        })), n.klass.calendar_container) + a.node("div", a.node("button", n.today, "btn-flat picker__today", "type=button data-pick=" + s.pick + (e && !t.disabled(s) ? "" : " disabled") + " " + a.ariaAttr({
            controls: t.$node[0].id
        })) + a.node("button", n.clear, "btn-flat picker__clear", "type=button data-clear=1" + (e ? "" : " disabled") + " " + a.ariaAttr({
            controls: t.$node[0].id
        })) + a.node("button", n.close, "btn-flat picker__close", "type=button data-close=true " + (e ? "" : " disabled") + " " + a.ariaAttr({
            controls: t.$node[0].id
        })), n.klass.footer)
    }, n.defaults = function(e) {
        return {
            labelMonthNext: "Next month",
            labelMonthPrev: "Previous month",
            labelMonthSelect: "Select a month",
            labelYearSelect: "Select a year",
            monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            weekdaysLetter: ["S", "M", "T", "W", "T", "F", "S"],
            today: "Today",
            clear: "Clear",
            close: "Close",
            format: "d mmmm, yyyy",
            klass: {
                table: e + "table",
                header: e + "header",
                date_display: e + "date-display",
                day_display: e + "day-display",
                month_display: e + "month-display",
                year_display: e + "year-display",
                calendar_container: e + "calendar-container",
                navPrev: e + "nav--prev",
                navNext: e + "nav--next",
                navDisabled: e + "nav--disabled",
                month: e + "month",
                year: e + "year",
                selectMonth: e + "select--month",
                selectYear: e + "select--year",
                weekdays: e + "weekday",
                day: e + "day",
                disabled: e + "day--disabled",
                selected: e + "day--selected",
                highlighted: e + "day--highlighted",
                now: e + "day--today",
                infocus: e + "day--infocus",
                outfocus: e + "day--outfocus",
                footer: e + "footer",
                buttonClear: e + "button--clear",
                buttonToday: e + "button--today",
                buttonClose: e + "button--close"
            }
        }
    }(e.klasses().picker + "__"), e.extend("pickadate", n)
}),
function(e) {
    function t() {
        var t = +e(this).attr("data-length"),
            n = +e(this).val().length,
            i = n <= t;
        e(this).parent().find('span[class="character-counter"]').html(n + "/" + t), r(i, e(this))
    }

    function n(t) {
        var n = t.parent().find('span[class="character-counter"]');
        n.length || (n = e("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1), t.parent().append(n))
    }

    function i() {
        e(this).parent().find('span[class="character-counter"]').html("")
    }

    function r(e, t) {
        var n = t.hasClass("invalid");
        e && n ? t.removeClass("invalid") : e || n || (t.removeClass("valid"), t.addClass("invalid"))
    }
    e.fn.characterCounter = function() {
        return this.each(function() {
            var r = e(this),
                a = r.parent().find('span[class="character-counter"]');
            if (!a.length) {
                var o = void 0 !== r.attr("data-length");
                o && (r.on("input", t), r.on("focus", t), r.on("blur", i), n(r))
            }
        })
    }, e(document).ready(function() {
        e("input, textarea").characterCounter()
    })
}(jQuery),
function(e) {
    var t = {
        init: function(t) {
            var n = {
                duration: 200,
                dist: -100,
                shift: 0,
                padding: 0,
                fullWidth: !1,
                indicators: !1,
                noWrap: !1,
                onCycleTo: null
            };
            return t = e.extend(n, t), this.each(function() {
                function n() {
                    "undefined" != typeof window.ontouchstart && (I[0].addEventListener("touchstart", d), I[0].addEventListener("touchmove", f), I[0].addEventListener("touchend", p)), I[0].addEventListener("mousedown", d), I[0].addEventListener("mousemove", f), I[0].addEventListener("mouseup", p), I[0].addEventListener("mouseleave", p), I[0].addEventListener("click", u)
                }

                function i(e) {
                    return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX
                }

                function r(e) {
                    return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY
                }

                function a(e) {
                    return e >= C ? e % C : e < 0 ? a(C + e % C) : e
                }

                function o(n) {
                    var i, r, o, s, l, u, c, d = b;
                    if (g = "number" == typeof n ? n : g, b = Math.floor((g + x / 2) / x), o = g - b * x, s = o < 0 ? 1 : -1, l = -s * o * 2 / x, r = C >> 1, t.fullWidth ? c = "translateX(0)" : (c = "translateX(" + (I[0].clientWidth - m) / 2 + "px) ", c += "translateY(" + (I[0].clientHeight - v) / 2 + "px)"), L) {
                        var f = b % C,
                            p = N.find(".indicator-item.active");
                        p.index() !== f && (p.removeClass("active"), N.find(".indicator-item").eq(f).addClass("active"))
                    }
                    for ((!t.noWrap || b >= 0 && b < C) && (u = h[a(b)], e(u).hasClass("active") || (I.find(".carousel-item").removeClass("active"), e(u).addClass("active")), u.style[O] = c + " translateX(" + -o / 2 + "px) translateX(" + s * t.shift * l * i + "px) translateZ(" + t.dist * l + "px)", u.style.zIndex = 0, t.fullWidth ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * l, u.style.opacity = tweenedOpacity, u.style.display = "block"), i = 1; i <= r; ++i) t.fullWidth ? (zTranslation = t.dist, tweenedOpacity = i === r && o < 0 ? 1 - l : 1) : (zTranslation = t.dist * (2 * i + l * s), tweenedOpacity = 1 - .2 * (2 * i + l * s)), (!t.noWrap || b + i < C) && (u = h[a(b + i)], u.style[O] = c + " translateX(" + (t.shift + (x * i - o) / 2) + "px) translateZ(" + zTranslation + "px)", u.style.zIndex = -i, u.style.opacity = tweenedOpacity, u.style.display = "block"), t.fullWidth ? (zTranslation = t.dist, tweenedOpacity = i === r && o > 0 ? 1 - l : 1) : (zTranslation = t.dist * (2 * i - l * s), tweenedOpacity = 1 - .2 * (2 * i - l * s)), (!t.noWrap || b - i >= 0) && (u = h[a(b - i)], u.style[O] = c + " translateX(" + (-t.shift + (-x * i - o) / 2) + "px) translateZ(" + zTranslation + "px)", u.style.zIndex = -i, u.style.opacity = tweenedOpacity, u.style.display = "block");
                    if ((!t.noWrap || b >= 0 && b < C) && (u = h[a(b)], u.style[O] = c + " translateX(" + -o / 2 + "px) translateX(" + s * t.shift * l + "px) translateZ(" + t.dist * l + "px)", u.style.zIndex = 0, t.fullWidth ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * l, u.style.opacity = tweenedOpacity, u.style.display = "block"), d !== b && "function" == typeof t.onCycleTo) {
                        var y = I.find(".carousel-item").eq(a(b));
                        t.onCycleTo.call(this, y, M)
                    }
                }

                function s() {
                    var e, t, n, i;
                    e = Date.now(), t = e - q, q = e, n = g - P, P = g, i = 1e3 * n / (1 + t), A = .8 * i + .2 * A
                }

                function l() {
                    var e, n;
                    S && (e = Date.now() - q, n = S * Math.exp(-e / t.duration), n > 2 || n < -2 ? (o(E - n), requestAnimationFrame(l)) : o(E))
                }

                function u(n) {
                    if (M) return n.preventDefault(), n.stopPropagation(), !1;
                    if (!t.fullWidth) {
                        var i = e(n.target).closest(".carousel-item").index(),
                            r = b % C - i;
                        0 !== r && (n.preventDefault(), n.stopPropagation()), c(i)
                    }
                }

                function c(e) {
                    var n = b % C - e;
                    t.noWrap || (n < 0 ? Math.abs(n + C) < Math.abs(n) && (n += C) : n > 0 && Math.abs(n - C) < n && (n -= C)), n < 0 ? I.trigger("carouselNext", [Math.abs(n)]) : n > 0 && I.trigger("carouselPrev", [n])
                }

                function d(e) {
                    w = !0, M = !1, D = !1, k = i(e), T = r(e), A = S = 0, P = g, q = Date.now(), clearInterval(j), j = setInterval(s, 100)
                }

                function f(e) {
                    var t, n, a;
                    if (w)
                        if (t = i(e), y = r(e), n = k - t, a = Math.abs(T - y), a < 30 && !D)(n > 2 || n < -2) && (M = !0, k = t, o(g + n));
                        else {
                            if (M) return e.preventDefault(), e.stopPropagation(), !1;
                            D = !0
                        }
                    if (M) return e.preventDefault(), e.stopPropagation(), !1
                }

                function p(e) {
                    if (w) return w = !1, clearInterval(j), E = g, (A > 10 || A < -10) && (S = .9 * A, E = g + S), E = Math.round(E / x) * x, t.noWrap && (E >= x * (C - 1) ? E = x * (C - 1) : E < 0 && (E = 0)), S = E - g, q = Date.now(), requestAnimationFrame(l), M && (e.preventDefault(), e.stopPropagation()), !1
                }
                var h, m, v, g, b, w, x, C, k, T, S, E, A, O, P, q, j, M, D, N = e('<ul class="indicators"></ul>'),
                    I = e(this),
                    L = I.attr("data-indicators") || t.indicators;
                if (I.hasClass("initialized")) return e(this).trigger("carouselNext", [1e-6]), !0;
                if (t.fullWidth) {
                    t.dist = 0;
                    var H = I.find(".carousel-item img").first();
                    H.length ? imageHeight = H.on("load", function() {
                        I.css("height", e(this).height())
                    }) : (imageHeight = I.find(".carousel-item").first().height(), I.css("height", imageHeight)), L && I.find(".carousel-fixed-item").addClass("with-indicators")
                }
                I.addClass("initialized"), w = !1, g = E = 0, h = [], m = I.find(".carousel-item").first().innerWidth(), v = I.find(".carousel-item").first().innerHeight(), x = 2 * m + t.padding, I.find(".carousel-item").each(function(t) {
                    if (h.push(e(this)[0]), L) {
                        var n = e('<li class="indicator-item"></li>');
                        0 === t && n.addClass("active"), n.click(function(t) {
                            t.stopPropagation();
                            var n = e(this).index();
                            c(n)
                        }), N.append(n)
                    }
                }), L && I.append(N), C = h.length, O = "transform", ["webkit", "Moz", "O", "ms"].every(function(e) {
                    var t = e + "Transform";
                    return "undefined" == typeof document.body.style[t] || (O = t, !1)
                }), e(window).on("resize.carousel", function() {
                    t.fullWidth ? (m = I.find(".carousel-item").first().innerWidth(), v = I.find(".carousel-item").first().innerHeight(), x = 2 * m + t.padding, g = 2 * b * m, E = g) : o()
                }), n(), o(g), e(this).on("carouselNext", function(e, t) {
                    void 0 === t && (t = 1), E = x * Math.round(g / x) + x * t, g !== E && (S = E - g, q = Date.now(), requestAnimationFrame(l))
                }), e(this).on("carouselPrev", function(e, t) {
                    void 0 === t && (t = 1), E = x * Math.round(g / x) - x * t, g !== E && (S = E - g, q = Date.now(), requestAnimationFrame(l))
                }), e(this).on("carouselSet", function(e, t) {
                    void 0 === t && (t = 0), c(t)
                })
            })
        },
        next: function(t) {
            e(this).trigger("carouselNext", [t])
        },
        prev: function(t) {
            e(this).trigger("carouselPrev", [t])
        },
        set: function(t) {
            e(this).trigger("carouselSet", [t])
        }
    };
    e.fn.carousel = function(n) {
        return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method " + n + " does not exist on jQuery.carousel") : t.init.apply(this, arguments)
    }
}(jQuery),
function(e, t, n) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(t || n)
}(function(e) {
    var t = function(t, n, i) {
        var r = {
            invalid: [],
            getCaret: function() {
                try {
                    var e, n = 0,
                        i = t.get(0),
                        a = document.selection,
                        o = i.selectionStart;
                    return a && navigator.appVersion.indexOf("MSIE 10") === -1 ? (e = a.createRange(), e.moveStart("character", -r.val().length), n = e.text.length) : (o || "0" === o) && (n = o), n
                } catch (e) {}
            },
            setCaret: function(e) {
                try {
                    if (t.is(":focus")) {
                        var n, i = t.get(0);
                        i.setSelectionRange ? i.setSelectionRange(e, e) : (n = i.createTextRange(), n.collapse(!0), n.moveEnd("character", e), n.moveStart("character", e), n.select())
                    }
                } catch (e) {}
            },
            events: function() {
                t.on("keydown.mask", function(e) {
                    t.data("mask-keycode", e.keyCode || e.which), t.data("mask-previus-value", t.val())
                }).on(e.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", r.behaviour).on("paste.mask drop.mask", function() {
                    setTimeout(function() {
                        t.keydown().keyup()
                    }, 100)
                }).on("change.mask", function() {
                    t.data("changed", !0)
                }).on("blur.mask", function() {
                    s === r.val() || t.data("changed") || t.trigger("change"), t.data("changed", !1)
                }).on("blur.mask", function() {
                    s = r.val()
                }).on("focus.mask", function(t) {
                    i.selectOnFocus === !0 && e(t.target).select()
                }).on("focusout.mask", function() {
                    i.clearIfNotMatch && !a.test(r.val()) && r.val("")
                })
            },
            getRegexMask: function() {
                for (var e, t, i, r, a, s, l = [], u = 0; u < n.length; u++) e = o.translation[n.charAt(u)], e ? (t = e.pattern.toString().replace(/.{1}$|^.{1}/g, ""), i = e.optional, r = e.recursive, r ? (l.push(n.charAt(u)), a = {
                    digit: n.charAt(u),
                    pattern: t
                }) : l.push(i || r ? t + "?" : t)) : l.push(n.charAt(u).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                return s = l.join(""), a && (s = s.replace(new RegExp("(" + a.digit + "(.*" + a.digit + ")?)"), "($1)?").replace(new RegExp(a.digit, "g"), a.pattern)), new RegExp(s)
            },
            destroyEvents: function() {
                t.off(["input", "keydown", "keyup", "paste", "drop", "blur", "focusout", ""].join(".mask "))
            },
            val: function(e) {
                var n, i = t.is("input"),
                    r = i ? "val" : "text";
                return arguments.length > 0 ? (t[r]() !== e && t[r](e), n = t) : n = t[r](), n
            },
            calculateCaretPosition: function(e, n) {
                var i = n.length,
                    r = t.data("mask-previus-value"),
                    a = r.length;
                return 8 === t.data("mask-keycode") && r !== n ? e -= n.slice(0, e).length - r.slice(0, e).length : r !== n && (e >= a ? e = i : e += n.slice(0, e).length - r.slice(0, e).length), e
            },
            behaviour: function(n) {
                n = n || window.event, r.invalid = [];
                var i = t.data("mask-keycode");
                if (e.inArray(i, o.byPassKeys) === -1) {
                    var a = r.getMasked(),
                        s = r.getCaret();
                    return setTimeout(function(e, t) {
                        r.setCaret(r.calculateCaretPosition(e, t))
                    }, 10, s, a), r.val(a), r.setCaret(s), r.callbacks(n)
                }
            },
            getMasked: function(e, t) {
                var a, s, l = [],
                    u = void 0 === t ? r.val() : t + "",
                    c = 0,
                    d = n.length,
                    f = 0,
                    p = u.length,
                    h = 1,
                    m = "push",
                    v = -1;
                i.reverse ? (m = "unshift", h = -1, a = 0, c = d - 1, f = p - 1, s = function() {
                    return c > -1 && f > -1
                }) : (a = d - 1, s = function() {
                    return c < d && f < p
                });
                for (var g; s();) {
                    var y = n.charAt(c),
                        b = u.charAt(f),
                        w = o.translation[y];
                    w ? (b.match(w.pattern) ? (l[m](b), w.recursive && (v === -1 ? v = c : c === a && (c = v - h), a === v && (c -= h)), c += h) : b === g ? g = void 0 : w.optional ? (c += h, f -= h) : w.fallback ? (l[m](w.fallback), c += h, f -= h) : r.invalid.push({
                        p: f,
                        v: b,
                        e: w.pattern
                    }), f += h) : (e || l[m](y), b === y ? f += h : g = y, c += h)
                }
                var x = n.charAt(a);
                return d !== p + 1 || o.translation[x] || l.push(x), l.join("")
            },
            callbacks: function(e) {
                var a = r.val(),
                    o = a !== s,
                    l = [a, e, t, i],
                    u = function(e, t, n) {
                        "function" == typeof i[e] && t && i[e].apply(this, n)
                    };
                u("onChange", o === !0, l), u("onKeyPress", o === !0, l), u("onComplete", a.length === n.length, l), u("onInvalid", r.invalid.length > 0, [a, e, t, r.invalid, i])
            }
        };
        t = e(t);
        var a, o = this,
            s = r.val();
        n = "function" == typeof n ? n(r.val(), void 0, t, i) : n, o.mask = n, o.options = i, o.remove = function() {
            var e = r.getCaret();
            return r.destroyEvents(), r.val(o.getCleanVal()), r.setCaret(e), t
        }, o.getCleanVal = function() {
            return r.getMasked(!0)
        }, o.getMaskedVal = function(e) {
            return r.getMasked(!1, e)
        }, o.init = function(s) {
            if (s = s || !1, i = i || {}, o.clearIfNotMatch = e.jMaskGlobals.clearIfNotMatch, o.byPassKeys = e.jMaskGlobals.byPassKeys, o.translation = e.extend({}, e.jMaskGlobals.translation, i.translation), o = e.extend(!0, {}, o, i), a = r.getRegexMask(), s) r.events(), r.val(r.getMasked());
            else {
                i.placeholder && t.attr("placeholder", i.placeholder), t.data("mask") && t.attr("autocomplete", "off");
                for (var l = 0, u = !0; l < n.length; l++) {
                    var c = o.translation[n.charAt(l)];
                    if (c && c.recursive) {
                        u = !1;
                        break
                    }
                }
                u && t.attr("maxlength", n.length), r.destroyEvents(), r.events();
                var d = r.getCaret();
                r.val(r.getMasked()), r.setCaret(d)
            }
        }, o.init(!t.is("input"))
    };
    e.maskWatchers = {};
    var n = function() {
            var n = e(this),
                r = {},
                a = "data-mask-",
                o = n.attr("data-mask");
            if (n.attr(a + "reverse") && (r.reverse = !0), n.attr(a + "clearifnotmatch") && (r.clearIfNotMatch = !0), "true" === n.attr(a + "selectonfocus") && (r.selectOnFocus = !0), i(n, o, r)) return n.data("mask", new t(this, o, r))
        },
        i = function(t, n, i) {
            i = i || {};
            var r = e(t).data("mask"),
                a = JSON.stringify,
                o = e(t).val() || e(t).text();
            try {
                return "function" == typeof n && (n = n(o)), "object" != typeof r || a(r.options) !== a(i) || r.mask !== n
            } catch (e) {}
        },
        r = function(e) {
            var t, n = document.createElement("div");
            return e = "on" + e, t = e in n, t || (n.setAttribute(e, "return;"), t = "function" == typeof n[e]), n = null, t
        };
    e.fn.mask = function(n, r) {
        r = r || {};
        var a = this.selector,
            o = e.jMaskGlobals,
            s = o.watchInterval,
            l = r.watchInputs || o.watchInputs,
            u = function() {
                if (i(this, n, r)) return e(this).data("mask", new t(this, n, r))
            };
        return e(this).each(u), a && "" !== a && l && (clearInterval(e.maskWatchers[a]), e.maskWatchers[a] = setInterval(function() {
            e(document).find(a).each(u)
        }, s)), this
    }, e.fn.masked = function(e) {
        return this.data("mask").getMaskedVal(e)
    }, e.fn.unmask = function() {
        return clearInterval(e.maskWatchers[this.selector]), delete e.maskWatchers[this.selector], this.each(function() {
            var t = e(this).data("mask");
            t && t.remove().removeData("mask")
        })
    }, e.fn.cleanVal = function() {
        return this.data("mask").getCleanVal()
    }, e.applyDataMask = function(t) {
        t = t || e.jMaskGlobals.maskElements;
        var i = t instanceof e ? t : e(t);
        i.filter(e.jMaskGlobals.dataMaskAttr).each(n)
    };
    var a = {
        maskElements: "input,td,span,div",
        dataMaskAttr: "*[data-mask]",
        dataMask: !0,
        watchInterval: 300,
        watchInputs: !0,
        useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && r("input"),
        watchDataMask: !1,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            0: {
                pattern: /\d/
            },
            9: {
                pattern: /\d/,
                optional: !0
            },
            "#": {
                pattern: /\d/,
                recursive: !0
            },
            A: {
                pattern: /[a-zA-Z0-9]/
            },
            S: {
                pattern: /[a-zA-Z]/
            }
        }
    };
    e.jMaskGlobals = e.jMaskGlobals || {}, a = e.jMaskGlobals = e.extend(!0, {}, a, e.jMaskGlobals), a.dataMask && e.applyDataMask(), setInterval(function() {
        e.jMaskGlobals.watchDataMask && e.applyDataMask()
    }, a.watchInterval)
}, window.jQuery, window.Zepto),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    e.extend(e.fn, {
        validate: function(t) {
            if (!this.length) return void(t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var n = e.data(this[0], "validator");
            return n ? n : (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
                n.settings.submitHandler && (n.submitButton = t.target), e(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (n.cancelSubmit = !0)
            }), this.on("submit.validate", function(t) {
                function i() {
                    var i, r;
                    return !n.settings.submitHandler || (n.submitButton && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), r = n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && i.remove(), void 0 !== r && r)
                }
                return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
            })), n)
        },
        valid: function() {
            var t, n, i;
            return e(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, n = e(this[0].form).validate(), this.each(function() {
                t = n.element(this) && t, t || (i = i.concat(n.errorList))
            }), n.errorList = i), t
        },
        rules: function(t, n) {
            var i, r, a, o, s, l, u = this[0];
            if (null != u && null != u.form) {
                if (t) switch (i = e.data(u.form, "validator").settings, r = i.rules, a = e.validator.staticRules(u), t) {
                    case "add":
                        e.extend(a, e.validator.normalizeRule(n)), delete a.messages, r[u.name] = a, n.messages && (i.messages[u.name] = e.extend(i.messages[u.name], n.messages));
                        break;
                    case "remove":
                        return n ? (l = {}, e.each(n.split(/\s/), function(t, n) {
                            l[n] = a[n], delete a[n], "required" === n && e(u).removeAttr("aria-required")
                        }), l) : (delete r[u.name], a)
                }
                return o = e.validator.normalizeRules(e.extend({}, e.validator.classRules(u), e.validator.attributeRules(u), e.validator.dataRules(u), e.validator.staticRules(u)), u), o.required && (s = o.required, delete o.required, o = e.extend({
                    required: s
                }, o), e(u).attr("aria-required", "true")), o.remote && (s = o.remote, delete o.remote, o = e.extend(o, {
                    remote: s
                })), o
            }
        }
    }), e.extend(e.expr.pseudos || e.expr[":"], {
        blank: function(t) {
            return !e.trim("" + e(t).val())
        },
        filled: function(t) {
            var n = e(t).val();
            return null !== n && !!e.trim("" + n)
        },
        unchecked: function(t) {
            return !e(t).prop("checked")
        }
    }), e.validator = function(t, n) {
        this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init()
    }, e.validator.format = function(t, n) {
        return 1 === arguments.length ? function() {
            var n = e.makeArray(arguments);
            return n.unshift(t), e.validator.format.apply(this, n)
        } : void 0 === n ? t : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function(e, n) {
            t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
                return n
            })
        }), t)
    }, e.extend(e.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: e([]),
            errorLabelContainer: e([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(e) {
                this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
            },
            onfocusout: function(e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function(t, n) {
                var i = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === n.which && "" === this.elementValue(t) || e.inArray(n.keyCode, i) !== -1 || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
            },
            onclick: function(e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function(t, n, i) {
                "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i)
            },
            unhighlight: function(t, n, i) {
                "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i)
            }
        },
        setDefaults: function(t) {
            e.extend(e.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: e.validator.format("Please enter no more than {0} characters."),
            minlength: e.validator.format("Please enter at least {0} characters."),
            rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
            range: e.validator.format("Please enter a value between {0} and {1}."),
            max: e.validator.format("Please enter a value less than or equal to {0}."),
            min: e.validator.format("Please enter a value greater than or equal to {0}."),
            step: e.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function t(t) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0]);
                    var n = e.data(this.form, "validator"),
                        i = "on" + t.type.replace(/^validate/, ""),
                        r = n.settings;
                    r[i] && !e(this).is(r.ignore) && r[i].call(n, this, t)
                }
                this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var n, i = this.groups = {};
                e.each(this.settings.groups, function(t, n) {
                    "string" == typeof n && (n = n.split(/\s/)), e.each(n, function(e, n) {
                        i[n] = t
                    })
                }), n = this.settings.rules, e.each(n, function(t, i) {
                    n[t] = e.validator.normalizeRule(i)
                }), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                return this.valid()
            },
            element: function(t) {
                var n, i, r = this.clean(t),
                    a = this.validationTargetFor(r),
                    o = this,
                    s = !0;
                return void 0 === a ? delete this.invalid[r.name] : (this.prepareElement(a), this.currentElements = e(a), i = this.groups[a.name], i && e.each(this.groups, function(e, t) {
                    t === i && e !== a.name && (r = o.validationTargetFor(o.clean(o.findByName(e))), r && r.name in o.invalid && (o.currentElements.push(r), s = o.check(r) && s))
                }), n = this.check(a) !== !1, s = s && n, n ? this.invalid[a.name] = !1 : this.invalid[a.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !n)), s
            },
            showErrors: function(t) {
                if (t) {
                    var n = this;
                    e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, function(e, t) {
                        return {
                            message: e,
                            element: n.findByName(t)[0]
                        }
                    }), this.successList = e.grep(this.successList, function(e) {
                        return !(e.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(t)
            },
            resetElements: function(e) {
                var t;
                if (this.settings.unhighlight)
                    for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
                else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(e) {
                var t, n = 0;
                for (t in e) e[t] && n++;
                return n
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(e) {
                e.not(this.containers).text(""), this.addWrapper(e).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (e) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === e.grep(this.errorList, function(e) {
                    return e.element.name === t.name
                }).length && t
            },
            elements: function() {
                var t = this,
                    n = {};
                return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var i = this.name || e(this).attr("name");
                    return !i && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0]), !(i in n || !t.objectLength(e(this).rules())) && (n[i] = !0, !0)
                })
            },
            clean: function(t) {
                return e(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return e(this.settings.errorElement + "." + t, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([])
            },
            reset: function() {
                this.resetInternals(), this.currentElements = e([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(e) {
                this.reset(), this.toHide = this.errorsFor(e)
            },
            elementValue: function(t) {
                var n, i, r = e(t),
                    a = t.type;
                return "radio" === a || "checkbox" === a ? this.findByName(t.name).filter(":checked").val() : "number" === a && "undefined" != typeof t.validity ? t.validity.badInput ? "NaN" : r.val() : (n = t.hasAttribute("contenteditable") ? r.text() : r.val(), "file" === a ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) : (i = n.lastIndexOf("/"), i >= 0 ? n.substr(i + 1) : (i = n.lastIndexOf("\\"), i >= 0 ? n.substr(i + 1) : n)) : "string" == typeof n ? n.replace(/\r/g, "") : n)
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var n, i, r, a = e(t).rules(),
                    o = e.map(a, function(e, t) {
                        return t
                    }).length,
                    s = !1,
                    l = this.elementValue(t);
                if ("function" == typeof a.normalizer) {
                    if (l = a.normalizer.call(t, l), "string" != typeof l) throw new TypeError("The normalizer should return a string value.");
                    delete a.normalizer
                }
                for (i in a) {
                    r = {
                        method: i,
                        parameters: a[i]
                    };
                    try {
                        if (n = e.validator.methods[i].call(this, l, t, r.parameters), "dependency-mismatch" === n && 1 === o) {
                            s = !0;
                            continue
                        }
                        if (s = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!n) return this.formatAndAdd(t, r), !1
                    } catch (e) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), e
                    }
                }
                if (!s) return this.objectLength(a) && this.successList.push(t), !0
            },
            customDataMessage: function(t, n) {
                return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg")
            },
            customMessage: function(e, t) {
                var n = this.settings.messages[e];
                return n && (n.constructor === String ? n : n[t])
            },
            findDefined: function() {
                for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e]) return arguments[e]
            },
            defaultMessage: function(t, n) {
                "string" == typeof n && (n = {
                    method: n
                });
                var i = this.findDefined(this.customMessage(t.name, n.method), this.customDataMessage(t, n.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
                    r = /\$?\{(\d+)\}/g;
                return "function" == typeof i ? i = i.call(this, n.parameters, t) : r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)), i
            },
            formatAndAdd: function(e, t) {
                var n = this.defaultMessage(e, t);
                this.errorList.push({
                    message: n,
                    element: e,
                    method: t.method
                }), this.errorMap[e.name] = n, this.submitted[e.name] = n
            },
            addWrapper: function(e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
            },
            defaultShowErrors: function() {
                var e, t, n;
                for (e = 0; this.errorList[e]; e++) n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                if (this.settings.unhighlight)
                    for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return e(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, n) {
                var i, r, a, o, s = this.errorsFor(t),
                    l = this.idOrName(t),
                    u = e(t).attr("aria-describedby");
                s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(n)) : (s = e("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(n || ""), i = s, this.settings.wrapper && (i = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, e(t)) : i.insertAfter(t), s.is("label") ? s.attr("for", l) : 0 === s.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (a = s.attr("id"), u ? u.match(new RegExp("\\b" + this.escapeCssMeta(a) + "\\b")) || (u += " " + a) : u = a, e(t).attr("aria-describedby", u), r = this.groups[t.name], r && (o = this, e.each(o.groups, function(t, n) {
                    n === r && e("[name='" + o.escapeCssMeta(t) + "']", o.currentForm).attr("aria-describedby", s.attr("id"))
                })))), !n && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, t)), this.toShow = this.toShow.add(s)
            },
            errorsFor: function(t) {
                var n = this.escapeCssMeta(this.idOrName(t)),
                    i = e(t).attr("aria-describedby"),
                    r = "label[for='" + n + "'], label[for='" + n + "'] *";
                return i && (r = r + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(r)
            },
            escapeCssMeta: function(e) {
                return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0]
            },
            checkable: function(e) {
                return /radio|checkbox/i.test(e.type)
            },
            findByName: function(t) {
                return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
            },
            getLength: function(t, n) {
                switch (n.nodeName.toLowerCase()) {
                    case "select":
                        return e("option:selected", n).length;
                    case "input":
                        if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(e, t) {
                return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
            },
            dependTypes: {
                boolean: function(e) {
                    return e
                },
                string: function(t, n) {
                    return !!e(t, n.form).length
                },
                function: function(e, t) {
                    return e(t)
                }
            },
            optional: function(t) {
                var n = this.elementValue(t);
                return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
            },
            stopRequest: function(t, n) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(t, n) {
                return n = "string" == typeof n && n || "remote", e.data(t, "previousValue") || e.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, {
                        method: n
                    })
                })
            },
            destroy: function() {
                this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, n) {
            t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var n = {},
                i = e(t).attr("class");
            return i && e.each(i.split(" "), function() {
                this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
            }), n
        },
        normalizeAttributeRule: function(e, t, n, i) {
            /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0)
        },
        attributeRules: function(t) {
            var n, i, r = {},
                a = e(t),
                o = t.getAttribute("type");
            for (n in e.validator.methods) "required" === n ? (i = t.getAttribute(n), "" === i && (i = !0), i = !!i) : i = a.attr(n), this.normalizeAttributeRule(r, o, n, i);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
        },
        dataRules: function(t) {
            var n, i, r = {},
                a = e(t),
                o = t.getAttribute("type");
            for (n in e.validator.methods) i = a.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()), this.normalizeAttributeRule(r, o, n, i);
            return r
        },
        staticRules: function(t) {
            var n = {},
                i = e.data(t.form, "validator");
            return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n
        },
        normalizeRules: function(t, n) {
            return e.each(t, function(i, r) {
                if (r === !1) return void delete t[i];
                if (r.param || r.depends) {
                    var a = !0;
                    switch (typeof r.depends) {
                        case "string":
                            a = !!e(r.depends, n.form).length;
                            break;
                        case "function":
                            a = r.depends.call(n, n)
                    }
                    a ? t[i] = void 0 === r.param || r.param : (e.data(n.form, "validator").resetElements(e(n)), delete t[i])
                }
            }), e.each(t, function(i, r) {
                t[i] = e.isFunction(r) && "normalizer" !== i ? r(n) : r
            }), e.each(["minlength", "maxlength"], function() {
                t[this] && (t[this] = Number(t[this]))
            }), e.each(["rangelength", "range"], function() {
                var n;
                t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]))
            }), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var n = {};
                e.each(t.split(/\s/), function() {
                    n[this] = !0
                }), t = n
            }
            return t
        },
        addMethod: function(t, n, i) {
            e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, n, i) {
                if (!this.depend(i, n)) return "dependency-mismatch";
                if ("select" === n.nodeName.toLowerCase()) {
                    var r = e(n).val();
                    return r && r.length > 0
                }
                return this.checkable(n) ? this.getLength(t, n) > 0 : t.length > 0
            },
            email: function(e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            },
            url: function(e, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)
            },
            date: function(e, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
            },
            dateISO: function(e, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
            },
            number: function(e, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            },
            digits: function(e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            },
            minlength: function(t, n, i) {
                var r = e.isArray(t) ? t.length : this.getLength(t, n);
                return this.optional(n) || r >= i
            },
            maxlength: function(t, n, i) {
                var r = e.isArray(t) ? t.length : this.getLength(t, n);
                return this.optional(n) || r <= i
            },
            rangelength: function(t, n, i) {
                var r = e.isArray(t) ? t.length : this.getLength(t, n);
                return this.optional(n) || r >= i[0] && r <= i[1]
            },
            min: function(e, t, n) {
                return this.optional(t) || e >= n
            },
            max: function(e, t, n) {
                return this.optional(t) || e <= n
            },
            range: function(e, t, n) {
                return this.optional(t) || e >= n[0] && e <= n[1]
            },
            step: function(t, n, i) {
                var r, a = e(n).attr("type"),
                    o = "Step attribute on input type " + a + " is not supported.",
                    s = ["text", "number", "range"],
                    l = new RegExp("\\b" + a + "\\b"),
                    u = a && !l.test(s.join()),
                    c = function(e) {
                        var t = ("" + e).match(/(?:\.(\d+))?$/);
                        return t && t[1] ? t[1].length : 0
                    },
                    d = function(e) {
                        return Math.round(e * Math.pow(10, r))
                    },
                    f = !0;
                if (u) throw new Error(o);
                return r = c(i), (c(t) > r || d(t) % d(i) !== 0) && (f = !1), this.optional(n) || f
            },
            equalTo: function(t, n, i) {
                var r = e(i);
                return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    e(n).valid()
                }), t === r.val()
            },
            remote: function(t, n, i, r) {
                if (this.optional(n)) return "dependency-mismatch";
                r = "string" == typeof r && r || "remote";
                var a, o, s, l = this.previousValue(n, r);
                return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[n.name][r], this.settings.messages[n.name][r] = l.message, i = "string" == typeof i && {
                    url: i
                } || i, s = e.param(e.extend({
                    data: t
                }, i.data)), l.old === s ? l.valid : (l.old = s, a = this, this.startRequest(n), o = {}, o[n.name] = t, e.ajax(e.extend(!0, {
                    mode: "abort",
                    port: "validate" + n.name,
                    dataType: "json",
                    data: o,
                    context: a.currentForm,
                    success: function(e) {
                        var i, o, s, u = e === !0 || "true" === e;
                        a.settings.messages[n.name][r] = l.originalMessage, u ? (s = a.formSubmitted, a.resetInternals(), a.toHide = a.errorsFor(n), a.formSubmitted = s, a.successList.push(n), a.invalid[n.name] = !1, a.showErrors()) : (i = {}, o = e || a.defaultMessage(n, {
                            method: r,
                            parameters: t
                        }), i[n.name] = l.message = o, a.invalid[n.name] = !0, a.showErrors(i)), l.valid = u, a.stopRequest(n, u)
                    }
                }, i)), "pending")
            }
        }
    });
    var t, n = {};
    return e.ajaxPrefilter ? e.ajaxPrefilter(function(e, t, i) {
        var r = e.port;
        "abort" === e.mode && (n[r] && n[r].abort(), n[r] = i)
    }) : (t = e.ajax, e.ajax = function(i) {
        var r = ("mode" in i ? i : e.ajaxSettings).mode,
            a = ("port" in i ? i : e.ajaxSettings).port;
        return "abort" === r ? (n[a] && n[a].abort(), n[a] = t.apply(this, arguments), n[a]) : t.apply(this, arguments)
    }), e
})