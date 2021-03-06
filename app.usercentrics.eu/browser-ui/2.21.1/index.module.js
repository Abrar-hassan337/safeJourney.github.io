var e = Object.freeze({
    initialize: function({
        modulePath: e = ".",
        importFunctionName: t = "__import__"
    } = {}) {
        try {
            self[t] = new Function("u", "return import(u)")
        } catch (n) {
            const r = new URL(e, location),
                i = e => {
                    URL.revokeObjectURL(e.src), e.remove()
                };
            self[t] = e => new Promise(((n, o) => {
                const s = new URL(e, r);
                if (self[t].moduleMap[s]) return n(self[t].moduleMap[s]);
                const a = new Blob([`import * as m from '${s}';`, `${t}.moduleMap['${s}']=m;`], {
                        type: "text/javascript"
                    }),
                    c = Object.assign(document.createElement("script"), {
                        type: "module",
                        src: URL.createObjectURL(a),
                        onerror() {
                            o(new Error(`Failed to import: ${e}`)), i(c)
                        },
                        onload() {
                            n(self[t].moduleMap[s]), i(c)
                        }
                    });
                document.head.appendChild(c)
            })), self[t].moduleMap = {}
        }
    }
});

function t(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
    }
    return n
}

function n(e) {
    for (var n = 1; n < arguments.length; n++) {
        var i = null != arguments[n] ? arguments[n] : {};
        n % 2 ? t(Object(i), !0).forEach((function(t) {
            r(e, t, i[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : t(Object(i)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
        }))
    }
    return e
}

function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function i() {
    return i = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, i.apply(this, arguments)
}

function o(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
            o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
}
var s, a, c, l, u, d, f, p, h = {},
    g = [],
    v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function y(e, t) {
    for (var n in t) e[n] = t[n];
    return e
}

function m(e) {
    var t = e.parentNode;
    t && t.removeChild(e)
}

function _(e, t, n) {
    var r, i, o, a = {};
    for (o in t) "key" == o ? r = t[o] : "ref" == o ? i = t[o] : a[o] = t[o];
    if (arguments.length > 2 && (a.children = arguments.length > 3 ? s.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
        for (o in e.defaultProps) void 0 === a[o] && (a[o] = e.defaultProps[o]);
    return b(e, a, r, i, null)
}

function b(e, t, n, r, i) {
    var o = {
        type: e,
        props: t,
        key: n,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == i ? ++c : i
    };
    return null == i && null != a.vnode && a.vnode(o), o
}

function S() {
    return {
        current: null
    }
}

function I(e) {
    return e.children
}

function C(e, t) {
    this.props = e, this.context = t
}

function T(e, t) {
    if (null == t) return e.__ ? T(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? T(e) : null
}

function E(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) {
                e.__e = e.__c.base = n.__e;
                break
            }
        return E(e)
    }
}

function A(e) {
    (!e.__d && (e.__d = !0) && u.push(e) && !L.__r++ || f !== a.debounceRendering) && ((f = a.debounceRendering) || d)(L)
}

function L() {
    for (var e; L.__r = u.length;) e = u.sort((function(e, t) {
        return e.__v.__b - t.__v.__b
    })), u = [], e.some((function(e) {
        var t, n, r, i, o, s;
        e.__d && (o = (i = (t = e).__v).__e, (s = t.__P) && (n = [], (r = y({}, i)).__v = i.__v + 1, k(s, i, r, t.__n, void 0 !== s.ownerSVGElement, null != i.__h ? [o] : null, n, null == o ? T(i) : o, i.__h), x(n, i), i.__e != o && E(i)))
    }))
}

function w(e, t, n, r, i, o, s, a, c, l) {
    var u, d, f, p, v, y, m, _ = r && r.__k || g,
        S = _.length;
    for (n.__k = [], u = 0; u < t.length; u++)
        if (null != (p = n.__k[u] = null == (p = t[u]) || "boolean" == typeof p ? null : "string" == typeof p || "number" == typeof p || "bigint" == typeof p ? b(null, p, null, null, p) : Array.isArray(p) ? b(I, {
                children: p
            }, null, null, null) : p.__b > 0 ? b(p.type, p.props, p.key, null, p.__v) : p)) {
            if (p.__ = n, p.__b = n.__b + 1, null === (f = _[u]) || f && p.key == f.key && p.type === f.type) _[u] = void 0;
            else
                for (d = 0; d < S; d++) {
                    if ((f = _[d]) && p.key == f.key && p.type === f.type) {
                        _[d] = void 0;
                        break
                    }
                    f = null
                }
            k(e, p, f = f || h, i, o, s, a, c, l), v = p.__e, (d = p.ref) && f.ref != d && (m || (m = []), f.ref && m.push(f.ref, null, p), m.push(d, p.__c || v, p)), null != v ? (null == y && (y = v), "function" == typeof p.type && p.__k === f.__k ? p.__d = c = O(p, c, e) : c = D(e, p, f, _, v, c), "function" == typeof n.type && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = T(f))
        }
    for (n.__e = y, u = S; u--;) null != _[u] && ("function" == typeof n.type && null != _[u].__e && _[u].__e == n.__d && (n.__d = T(r, u + 1)), B(_[u], _[u]));
    if (m)
        for (u = 0; u < m.length; u++) V(m[u], m[++u], m[++u])
}

function O(e, t, n) {
    for (var r, i = e.__k, o = 0; i && o < i.length; o++)(r = i[o]) && (r.__ = e, t = "function" == typeof r.type ? O(r, t, n) : D(n, r, r, i, r.__e, t));
    return t
}

function R(e, t) {
    return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function(e) {
        R(e, t)
    })) : t.push(e)), t
}

function D(e, t, n, r, i, o) {
    var s, a, c;
    if (void 0 !== t.__d) s = t.__d, t.__d = void 0;
    else if (null == n || i != o || null == i.parentNode) e: if (null == o || o.parentNode !== e) e.appendChild(i), s = null;
        else {
            for (a = o, c = 0;
                (a = a.nextSibling) && c < r.length; c += 2)
                if (a == i) break e;
            e.insertBefore(i, o), s = o
        }
    return void 0 !== s ? s : i.nextSibling
}

function N(e, t, n) {
    "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || v.test(t) ? n : n + "px"
}

function P(e, t, n, r, i) {
    var o;
    e: if ("style" === t)
        if ("string" == typeof n) e.style.cssText = n;
        else {
            if ("string" == typeof r && (e.style.cssText = r = ""), r)
                for (t in r) n && t in n || N(e.style, t, "");
            if (n)
                for (t in n) r && n[t] === r[t] || N(e.style, t, n[t])
        }
    else if ("o" === t[0] && "n" === t[1]) o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? F : U, o) : e.removeEventListener(t, o ? F : U, o);
    else if ("dangerouslySetInnerHTML" !== t) {
        if (i) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
            e[t] = null == n ? "" : n;
            break e
        } catch (e) {}
        "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
    }
}

function U(e) {
    this.l[e.type + !1](a.event ? a.event(e) : e)
}

function F(e) {
    this.l[e.type + !0](a.event ? a.event(e) : e)
}

function k(e, t, n, r, i, o, c, l, u) {
    var d, f, p, g, v, _, b, S, E, A, L, O = t.type;
    if (void 0 !== t.constructor) return null;
    null != n.__h && (u = n.__h, l = t.__e = n.__e, t.__h = null, o = [l]), (d = a.__b) && d(t);
    try {
        e: if ("function" == typeof O) {
            if (S = t.props, E = (d = O.contextType) && r[d.__c], A = d ? E ? E.props.value : d.__ : r, n.__c ? b = (f = t.__c = n.__c).__ = f.__E : ("prototype" in O && O.prototype.render ? t.__c = f = new O(S, A) : (t.__c = f = new C(S, A), f.constructor = O, f.render = M), E && E.sub(f), f.props = S, f.state || (f.state = {}), f.context = A, f.__n = r, p = f.__d = !0, f.__h = []), null == f.__s && (f.__s = f.state), null != O.getDerivedStateFromProps && (f.__s == f.state && (f.__s = y({}, f.__s)), y(f.__s, O.getDerivedStateFromProps(S, f.__s))), g = f.props, v = f.state, p) null == O.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(), null != f.componentDidMount && f.__h.push(f.componentDidMount);
            else {
                if (null == O.getDerivedStateFromProps && S !== g && null != f.componentWillReceiveProps && f.componentWillReceiveProps(S, A), !f.__e && null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(S, f.__s, A) || t.__v === n.__v) {
                    f.props = S, f.state = f.__s, t.__v !== n.__v && (f.__d = !1), f.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function(e) {
                        e && (e.__ = t)
                    })), f.__h.length && c.push(f);
                    break e
                }
                null != f.componentWillUpdate && f.componentWillUpdate(S, f.__s, A), null != f.componentDidUpdate && f.__h.push((function() {
                    f.componentDidUpdate(g, v, _)
                }))
            }
            f.context = A, f.props = S, f.state = f.__s, (d = a.__r) && d(t), f.__d = !1, f.__v = t, f.__P = e, d = f.render(f.props, f.state, f.context), f.state = f.__s, null != f.getChildContext && (r = y(y({}, r), f.getChildContext())), p || null == f.getSnapshotBeforeUpdate || (_ = f.getSnapshotBeforeUpdate(g, v)), L = null != d && d.type === I && null == d.key ? d.props.children : d, w(e, Array.isArray(L) ? L : [L], t, n, r, i, o, c, l, u), f.base = t.__e, t.__h = null, f.__h.length && c.push(f), b && (f.__E = f.__ = null), f.__e = !1
        } else null == o && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = function(e, t, n, r, i, o, a, c) {
            var l, u, d, f = n.props,
                p = t.props,
                g = t.type,
                v = 0;
            if ("svg" === g && (i = !0), null != o)
                for (; v < o.length; v++)
                    if ((l = o[v]) && "setAttribute" in l == !!g && (g ? l.localName === g : 3 === l.nodeType)) {
                        e = l, o[v] = null;
                        break
                    }
            if (null == e) {
                if (null === g) return document.createTextNode(p);
                e = i ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, p.is && p), o = null, c = !1
            }
            if (null === g) f === p || c && e.data === p || (e.data = p);
            else {
                if (o = o && s.call(e.childNodes), u = (f = n.props || h).dangerouslySetInnerHTML, d = p.dangerouslySetInnerHTML, !c) {
                    if (null != o)
                        for (f = {}, v = 0; v < e.attributes.length; v++) f[e.attributes[v].name] = e.attributes[v].value;
                    (d || u) && (d && (u && d.__html == u.__html || d.__html === e.innerHTML) || (e.innerHTML = d && d.__html || ""))
                }
                if (function(e, t, n, r, i) {
                        var o;
                        for (o in n) "children" === o || "key" === o || o in t || P(e, o, null, n[o], r);
                        for (o in t) i && "function" != typeof t[o] || "children" === o || "key" === o || "value" === o || "checked" === o || n[o] === t[o] || P(e, o, t[o], n[o], r)
                    }(e, p, f, i, c), d) t.__k = [];
                else if (v = t.props.children, w(e, Array.isArray(v) ? v : [v], t, n, r, i && "foreignObject" !== g, o, a, o ? o[0] : n.__k && T(n, 0), c), null != o)
                    for (v = o.length; v--;) null != o[v] && m(o[v]);
                c || ("value" in p && void 0 !== (v = p.value) && (v !== f.value || v !== e.value || "progress" === g && !v) && P(e, "value", v, f.value, !1), "checked" in p && void 0 !== (v = p.checked) && v !== e.checked && P(e, "checked", v, f.checked, !1))
            }
            return e
        }(n.__e, t, n, r, i, o, c, u);
        (d = a.diffed) && d(t)
    }
    catch (e) {
        t.__v = null, (u || null != o) && (t.__e = l, t.__h = !!u, o[o.indexOf(l)] = null), a.__e(e, t, n)
    }
}

function x(e, t) {
    a.__c && a.__c(t, e), e.some((function(t) {
        try {
            e = t.__h, t.__h = [], e.some((function(e) {
                e.call(t)
            }))
        } catch (e) {
            a.__e(e, t.__v)
        }
    }))
}

function V(e, t, n) {
    try {
        "function" == typeof e ? e(t) : e.current = t
    } catch (e) {
        a.__e(e, n)
    }
}

function B(e, t, n) {
    var r, i;
    if (a.unmount && a.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || V(r, null, t)), null != (r = e.__c)) {
        if (r.componentWillUnmount) try {
            r.componentWillUnmount()
        } catch (e) {
            a.__e(e, t)
        }
        r.base = r.__P = null
    }
    if (r = e.__k)
        for (i = 0; i < r.length; i++) r[i] && B(r[i], t, "function" != typeof e.type);
    n || null == e.__e || m(e.__e), e.__e = e.__d = void 0
}

function M(e, t, n) {
    return this.constructor(e, n)
}

function G(e, t, n) {
    var r, i, o;
    a.__ && a.__(e, t), i = (r = "function" == typeof n) ? null : n && n.__k || t.__k, o = [], k(t, e = (!r && n || t).__k = _(I, null, [e]), i || h, h, void 0 !== t.ownerSVGElement, !r && n ? [n] : i ? null : t.firstChild ? s.call(t.childNodes) : null, o, !r && n ? n : i ? i.__e : t.firstChild, r), x(o, e)
}

function H(e, t) {
    G(e, t, H)
}

function $(e, t, n) {
    var r, i, o, a = y({}, e.props);
    for (o in t) "key" == o ? r = t[o] : "ref" == o ? i = t[o] : a[o] = t[o];
    return arguments.length > 2 && (a.children = arguments.length > 3 ? s.call(arguments, 2) : n), b(e.type, a, r || e.key, i || e.ref, null)
}

function j(e, t) {
    var n = {
        __c: t = "__cC" + p++,
        __: e,
        Consumer: function(e, t) {
            return e.children(t)
        },
        Provider: function(e) {
            var n, r;
            return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function() {
                return r
            }, this.shouldComponentUpdate = function(e) {
                this.props.value !== e.value && n.some(A)
            }, this.sub = function(e) {
                n.push(e);
                var t = e.componentWillUnmount;
                e.componentWillUnmount = function() {
                    n.splice(n.indexOf(e), 1), t && t.call(e)
                }
            }), e.children
        }
    };
    return n.Provider.__ = n.Consumer.contextType = n
}
let Y, W, z, J, q, K, X, Z, Q, ee, te, ne, re;
s = g.slice, a = {
        __e: function(e, t) {
            for (var n, r, i; t = t.__;)
                if ((n = t.__c) && !n.__) try {
                    if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), i = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), i = n.__d), i) return n.__E = n
                } catch (t) {
                    e = t
                }
            throw e
        }
    }, c = 0, l = function(e) {
        return null != e && void 0 === e.constructor
    }, C.prototype.setState = function(e, t) {
        var n;
        n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = y({}, this.state), "function" == typeof e && (e = e(y({}, n), this.props)), e && y(n, e), null != e && this.__v && (t && this.__h.push(t), A(this))
    }, C.prototype.forceUpdate = function(e) {
        this.__v && (this.__e = !0, e && this.__h.push(e), A(this))
    }, C.prototype.render = I, u = [], d = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, L.__r = 0, p = 0,
    function(e) {
        e.API = "UC_UI_API", e.FIRST_LAYER = "FIRST_LAYER", e.PRIVACY_BUTTON = "PRIVACY_BUTTON", e.SECOND_LAYER = "SECOND_LAYER"
    }(Y || (Y = {})),
    function(e) {
        e.ACCEPT_ALL = "ACCEPT_ALL", e.CMP_SHOWN = "CMP_SHOWN", e.COOKIE_POLICY_LINK = "COOKIE_POLICY_LINK", e.DENY_ALL = "DENY_ALL", e.IMPRINT_LINK = "IMPRINT_LINK", e.MORE_INFORMATION_LINK = "MORE_INFORMATION_LINK", e.PRIVACY_POLICY_LINK = "PRIVACY_POLICY_LINK", e.SAVE = "SAVE"
    }(W || (W = {})),
    function(e) {
        e.FIRST_LAYER = "FIRST_LAYER", e.NONE = "NONE", e.PRIVACY_BUTTON = "PRIVACY_BUTTON", e.SECOND_LAYER = "SECOND_LAYER"
    }(z || (z = {})),
    function(e) {
        e.ANALYTICS = "UC_UI_CMP_EVENT", e.INITIALIZED = "UC_UI_INITIALIZED", e.VIEW_CHANGED = "UC_UI_VIEW_CHANGED"
    }(J || (J = {})),
    function(e) {
        e.SERVICE_MISSING_ID = "Usercentrics: service ID is missing", e.DUPLICATED_SCRIPT = "Usercentrics: duplicated script tag", e.TCF_NOT_ENABLED = "Usercentrics: TCF is not enabled", e.CLIENT_CONFIG_NOT_AVAILABLE = "AMP clientConfig is not available"
    }(q || (q = {})),
    function(e) {
        e.MARGIN_LEFT = "margin-left:", e.MARGIN_RIGHT = "margin-right:", e.PADDING_LEFT = "padding-left:", e.PADDING_RIGHT = "padding-right:", e.FLOAT_LEFT = "float: left", e.FLOAT_RIGHT = "float: right", e.FLEX_ALIGNMENT_LEFT = "justify-content: flex-start", e.FLEX_ALIGNMENT_RIGHT = "justify-content: flex-end", e.TEXT_ALIGNMENT_LEFT = "text-align: left", e.TEXT_ALIGNMENT_RIGHT = "text-align: right", e.BORDER_LEFT = "border-left:", e.BORDER_RIGHT = "border-right:", e.BORDER_RADIUS_TOP_LEFT = "border-top-left-radius:", e.BORDER_RADIUS_TOP_RIGHT = "border-top-right-radius:", e.BORDER_RADIUS_BOTTOM_LEFT = "border-bottom-left-radius:", e.BORDER_RADIUS_BOTTOM_RIGHT = "border-bottom-right-radius:", e.OBJECT_POSITION_RIGHT = "object-position: right", e.OBJECT_POSITION_LEFT = "object-position: left", e.OBJECT_POSITION_CENTER = "object-position: center", e.POSITION_LEFT = "left:", e.POSITION_RIGHT = "right:"
    }(K || (K = {})),
    function(e) {
        e.SOLID = "solid", e.NONE = "none", e.DOTTED = "dotted", e.DASHED = "dashed", e.DOUBLE = "double"
    }(X || (X = {})),
    function(e) {
        e.PRIMARY = "primary", e.SECONDARY = "secondary", e.TERTIARY = "tertiary", e.QUATERNARY = "quaternary", e.NEUTRAL = "neutral"
    }(Z || (Z = {})),
    function(e) {
        e.PRIMARY = "primary", e.SECONDARY = "secondary", e.TERTIARY = "tertiary", e.QUATERNARY = "quaternary"
    }(Q || (Q = {})),
    function(e) {
        e.LARGE = "large", e.MEDIUM = "medium", e.SMALL = "small", e.XSMALL = "xsmall"
    }(ee || (ee = {})),
    function(e) {
        e.MAX_WIDTH = "max-width:", e.MIN_WIDTH = "min-width:", e.MAX_HEIGHT = "max-height:", e.MIN_HEIGHT = "min-height:"
    }(te || (te = {})),
    function(e) {
        e.CENTER = "CENTER", e.BOTTOM = "BOTTOM", e.SIDE = "SIDE", e.TOP = "TOP"
    }(ne || (ne = {})),
    function(e) {
        e.CATEGORIES_PURPOSES = "categories_purposes", e.SERVICES_VENDORS = "services_vendors"
    }(re || (re = {}));
const ie = ["ar", "ur", "he", "fa"],
    oe = "usercentrics-root";
let se;
! function(e) {
    e.AMP_ENABLED = "ampEnabled", e.AVOID_PREFETCH_SERVICES = "avoidPrefetchServices", e.BLOCK_DATA_LAYER_PUSH = "blockDataLayerPush", e.CONTROLLER_ID = "controllerId", e.CLIENT_CONFIG = "clientConfig", e.DISABLE_TRACKING = "disableTracking", e.EU_MODE = "euMode", e.ID = "id", e.LANGUAGE = "language", e.DISABLE_SERVER_CONSENTS = "disableServerConsents", e.RULESET_ID = "rulesetId", e.SANDBOX_ENV = "sandbox", e.SETTINGS_CACHE = "settingsCache", e.SETTINGS_ID = "settingsId", e.SUPPRESS_CMP_DISPLAY = "suppressCmpDisplay", e.TCF_ENABLED = "tcfEnabled", e.VERSION = "version"
}(se || (se = {}));
const ae = "UC_UI",
    ce = "uc-tab-list",
    le = "uc-banner-content",
    ue = "uc-center-container",
    de = "uc-side-container",
    fe = "uc-vertical-scroller",
    pe = "uc-heading-title",
    he = "uc-show-more",
    ge = "language-tooltip-id";

function ve(e) {
    return ve = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, ve(e)
}
var ye = function(e, t) {
    return ye = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(e, t) {
        e.__proto__ = t
    } || function(e, t) {
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
    }, ye(e, t)
};

function me(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

    function n() {
        this.constructor = e
    }
    ye(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
}
var _e, be, Se, Ie, Ce, Te, Ee, Ae, Le, we, Oe, Re, De, Ne = function() {
    return Ne = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
    }, Ne.apply(this, arguments)
};

function Pe(e, t, n, r) {
    return new(n || (n = Promise))((function(i, o) {
        function s(e) {
            try {
                c(r.next(e))
            } catch (e) {
                o(e)
            }
        }

        function a(e) {
            try {
                c(r.throw(e))
            } catch (e) {
                o(e)
            }
        }

        function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                e(t)
            }))).then(s, a)
        }
        c((r = r.apply(e, t || [])).next())
    }))
}

function Ue(e, t) {
    var n, r, i, o, s = {
        label: 0,
        sent: function() {
            if (1 & i[0]) throw i[1];
            return i[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
    }), o;

    function a(o) {
        return function(a) {
            return function(o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s;) try {
                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                    switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                        case 0:
                        case 1:
                            i = o;
                            break;
                        case 4:
                            return s.label++, {
                                value: o[1],
                                done: !1
                            };
                        case 5:
                            s.label++, r = o[1], o = [0];
                            continue;
                        case 7:
                            o = s.ops.pop(), s.trys.pop();
                            continue;
                        default:
                            if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                s = 0;
                                continue
                            }
                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                s.label = o[1];
                                break
                            }
                            if (6 === o[0] && s.label < i[1]) {
                                s.label = i[1], i = o;
                                break
                            }
                            if (i && s.label < i[2]) {
                                s.label = i[2], s.ops.push(o);
                                break
                            }
                            i[2] && s.ops.pop(), s.trys.pop();
                            continue
                    }
                    o = t.call(e, s)
                } catch (e) {
                    o = [6, e], r = 0
                } finally {
                    n = i = 0
                }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                }
            }([o, a])
        }
    }
}

function Fe(e, t) {
    var n = "function" == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r, i, o = n.call(e),
        s = [];
    try {
        for (;
            (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
    } catch (e) {
        i = {
            error: e
        }
    } finally {
        try {
            r && !r.done && (n = o.return) && n.call(o)
        } finally {
            if (i) throw i.error
        }
    }
    return s
}

function ke(e, t, n) {
    if (n || 2 === arguments.length)
        for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
    return e.concat(r || Array.prototype.slice.call(t))
}! function(e) {
    e.CONSENT_RESPONSE = "consent-response", e.CONSENT_UI = "consent-ui"
}(_e || (_e = {})),
function(e) {
    e.ACCEPT = "accept", e.REJECT = "reject", e.DISMISS = "dismiss", e.FULLSCREEN = "enter-fullscreen", e.READY = "ready"
}(be || (be = {})),
function(e) {
    e[e.TCF_V2 = 2] = "TCF_V2", e[e.CCPA = 3] = "CCPA"
}(Se || (Se = {})),
function(e) {
    e[e.FALSE = 0] = "FALSE", e[e.TRUE = 1] = "TRUE"
}(Ie || (Ie = {})),
function(e) {
    e[e.DATA_LAYER = 0] = "DATA_LAYER", e[e.WINDOW_EVENT = 1] = "WINDOW_EVENT"
}(Ce || (Ce = {})),
function(e) {
    e[e.MAJOR = 0] = "MAJOR", e[e.MINOR = 1] = "MINOR", e[e.PATCH = 2] = "PATCH"
}(Te || (Te = {})),
function(e) {
    e.CALL_INIT = "Usercentrics: You have to call the init method before!", e.DATA_LOCAL = "Usercentrics: disableServerConsents and controllerId should not be present at the same time in the InitOptions!", e.UNKNOWN_VARIANT = "Usercentrics: Unknown variant", e.NOT_CCPA = "Usercentrics: CCPA was not initialized", e.NOT_DEFAULT = "Usercentrics: GDPR was not initialized", e.NOT_TCF = "Usercentrics: TCF was not initialized"
}(Ee || (Ee = {})),
function(e) {
    e.BANNER = "BANNER", e.WALL = "WALL"
}(Ae || (Ae = {})),
function(e) {
    e.CENTER = "CENTER", e.SIDE = "SIDE"
}(Le || (Le = {})),
function(e) {
    e[e.DARK = 0] = "DARK", e[e.LIGHT = 1] = "LIGHT"
}(we || (we = {})),
function(e) {
    e.LINK = "LINK", e.BUTTON = "BUTTON", e.MORE_LINK_BUTTON = "MORE_LINK_BUTTON"
}(Oe || (Oe = {})),
function(e) {
    e.LEFT = "LEFT", e.RIGHT = "RIGHT"
}(Re || (Re = {})),
function(e) {
    e.HORIZONTAL = "HORIZONTAL", e.VERTICAL = "VERTICAL"
}(De || (De = {}));
var xe = "3.3.1",
    Ve = function(e, t) {
        return -1 !== e.indexOf(t)
    },
    Be = function() {
        return parseInt("3", 10)
    },
    Me = function(e) {
        return Array.isArray(e) && e.length > 0
    },
    Ge = function(e) {
        return "object" === ve(e) && null !== e && Object.keys(e).length > 0
    },
    He = function(e, t) {
        if (void 0 === t) throw new Error("altElement of nullishOperation can not be undefined");
        return null != e ? e : t
    },
    $e = function(e, t, n, r, i) {
        return {
            applicationVersion: "SDK-".concat("3.3.1"),
            consent: {
                action: n,
                status: t.consent.status,
                type: r
            },
            service: {
                id: t.id,
                name: t.name,
                processorId: t.processorId,
                version: t.version
            },
            settings: {
                controllerId: e.controllerId,
                id: e.id,
                language: e.selectedLanguage,
                referrerControllerId: He(null == i ? void 0 : i.referrerControllerId, ""),
                version: e.version
            },
            timestamp: He(null == i ? void 0 : i.timestamp, (new Date).valueOf())
        }
    },
    je = function(e, t) {
        return e.reduce((function(e, n) {
            var r = t[n];
            if (!(null == r ? void 0 : r.name)) return e;
            var i = r.name;
            return ke(ke([], Fe(e), !1), [{
                id: n,
                name: i
            }], !1)
        }), [])
    };

function Ye(e) {
    return ke([], Fe(new Set(e)), !1)
}

function We(e) {
    return new Promise((function(t, n) {
        return e.then(n, t)
    }))
}
var ze, Je, qe, Ke, Xe, Ze, Qe, et, tt, nt = function(e) {
        return e && "object" === ve(e)
    },
    rt = function e(t, n, r) {
        void 0 === r && (r = !1);
        var i = Ne({}, n);
        if (!nt(i)) throw new Error("Source param should be an object");
        return nt(t) ? (Object.keys(t).forEach((function(n) {
            var o, s, a, c, l, u = t[n],
                d = i[n];
            void 0 !== d && (i = Array.isArray(u) && Array.isArray(d) ? Ne(Ne({}, i), r ? ((o = {})[n] = (l = u.concat(d)).filter((function(e, t) {
                return l.indexOf(e) === t
            })), o) : ((s = {})[n] = u, s)) : nt(u) && nt(d) ? Ne(Ne({}, i), ((a = {})[n] = e(Ne({}, u), d), a)) : Ne(Ne({}, i), ((c = {})[n] = u, c)))
        })), i) : i
    },
    it = function(e, t, n, r) {
        return void 0 === n && (n = 2e4), void 0 === r && (r = 5), new Promise((function(i, o) {
            var s = setInterval((function() {
                    e() && (clearTimeout(a), clearInterval(s), i())
                }), r),
                a = setTimeout((function() {
                    clearTimeout(a), clearInterval(s), o(new Error(t))
                }), n)
        }))
    },
    ot = function(e, t) {
        for (var n = e.split("."), r = t.split("."), i = Math.min(n.length, r.length), o = 0; o < i; o += 1) {
            var s = Number(n[o]) || 0,
                a = Number(r[o]) || 0;
            if (s !== a) return s > a ? 1 : -1
        }
        return r.length - n.length
    };
! function(e) {
    e[e.COOKIE = 0] = "COOKIE", e[e.WEB = 1] = "WEB", e[e.APP = 2] = "APP"
}(ze || (ze = {})),
function(e) {
    e.LEFT = "LEFT", e.CENTER = "CENTER", e.RIGHT = "RIGHT"
}(Je || (Je = {})),
function(e) {
    e.AVAILABLE_LANGUAGES_NOT_FOUND = "Unable to find available languages using given settingsId and version.", e.FETCH_AVAILABLE_LANGUAGES = "Something went wrong while fetching the available languages.", e.FETCH_DATA_PROCESSING_SERVICES = "Something went wrong while fetching the data processing services.", e.FETCH_LEGAL_BASIS = "Something went wrong while fetching the legal data translations.", e.FETCH_SETTINGS = "Something went wrong while fetching the settings.", e.FETCH_USER_CONSENTS = "Something went wrong while fetching the user's consents.", e.FETCH_USER_COUNTRY = "Something went wrong while fetching the user's country.", e.FETCH_USER_TCF_DATA = "Something went wrong while fetching the user's tcf data.", e.GENERATE_DATA_PROCESSING_SERVICES = "Something went wrong while generating the data processing services.", e.RULESET_NOT_FOUND = "Config Map not found!", e.SAVE_CONSENTS = "Something went wrong while saving user consents.", e.SETTINGS_NOT_FOUND = "Unable to find settings using given settingsId and version."
}(qe || (qe = {})),
function(e) {
    e.US_CA_ONLY = "US_CA_ONLY", e.US = "US"
}(Ke || (Ke = {})),
function(e) {
    e[e.FIRST_LAYER = 1] = "FIRST_LAYER", e[e.SECOND_LAYER = 3] = "SECOND_LAYER"
}(Xe || (Xe = {})),
function(e) {
    e[e.DATA_LAYER = 1] = "DATA_LAYER", e[e.WINDOW_EVENT = 4] = "WINDOW_EVENT"
}(Ze || (Ze = {})),
function(e) {
    e.DATA_COLLECTED_LIST = "dataCollectedList", e.DATA_PURPOSES_LIST = "dataPurposesList", e.DATA_RECIPIENTS_LIST = "dataRecipientsList", e.TECHNOLOGY_USED = "technologyUsed"
}(Qe || (Qe = {})),
function(e) {
    e.MAJOR = "major", e.MINOR = "minor", e.PATCH = "patch"
}(et || (et = {})),
function(e) {
    e.ICON = "ICON", e.LINK = "LINK"
}(tt || (tt = {}));
var st, at = function(e, t) {
        return "boolean" == typeof e ? e : t
    },
    ct = function(e) {
        if (!e) return null;
        var t = e.startsWith("#") ? e : "#".concat(e);
        return lt(t) ? t : "#0045A5"
    },
    lt = function(e) {
        return !("" === e || !e) && new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$").test(e)
    },
    ut = function(e) {
        if (null != e.firstLayer.isOverlayEnabled) return e.firstLayer.isOverlayEnabled;
        var t = e.backgroundOverlay.find((function(e) {
            var t;
            return (null === (t = e.target) || void 0 === t ? void 0 : t[0]) === Xe.FIRST_LAYER
        }));
        return !!t && (null == t ? void 0 : t.darken) > 0
    },
    dt = function(e) {
        if (null != e.secondLayer.isOverlayEnabled) return e.secondLayer.isOverlayEnabled;
        var t = e.backgroundOverlay.find((function(e) {
            var t;
            return (null === (t = e.target) || void 0 === t ? void 0 : t[0]) === Xe.SECOND_LAYER
        }));
        return !!t && (null == t ? void 0 : t.darken) > 0
    },
    ft = function(e) {
        return "number" == typeof e || "string" == typeof e && !e.includes("px") ? "".concat(e, "px") : e
    },
    pt = function(e) {
        switch (e) {
            case Je.CENTER:
                return "center";
            case Je.RIGHT:
                return "right";
            default:
            case Je.LEFT:
                return "left"
        }
    },
    ht = {
        description: "",
        deviceStorage: null,
        id: "",
        legalBasis: [],
        name: ""
    },
    gt = function e(t, n) {
        return t.reduce((function(t, r) {
            var i = n.find((function(e) {
                return e.id === r.id
            }));
            return ke(ke([], Fe(t), !1), [Ne(Ne(Ne({}, r), i || ht), {
                subServices: e(r.subServices, n)
            })], !1)
        }), [])
    },
    vt = function(e) {
        return null != e && null != e.region
    },
    yt = function(e) {
        return null != e && null != e.changedPurposes
    },
    mt = function(e) {
        var t;
        return null != e && null != (null === (t = e.buttons) || void 0 === t ? void 0 : t.optOutNotice)
    },
    _t = function(e) {
        return null != e && null != e.vendor
    },
    bt = function(e) {
        var t;
        return null != e && null != (null === (t = e.buttons) || void 0 === t ? void 0 : t.showSecondLayer)
    },
    St = function(e) {
        var t, n;
        return null != e && null != (null === (t = e.firstLayer) || void 0 === t ? void 0 : t.showShortDescriptionOnMobile) && null == (null === (n = e.firstLayer) || void 0 === n ? void 0 : n.isCategoryTogglesEnabled)
    },
    It = function(e) {
        var t;
        return null != e && null != (null === (t = e.firstLayer) || void 0 === t ? void 0 : t.hideNonIabPurposes)
    },
    Ct = function(e) {
        var t;
        return null != e && null != (null === (t = e.firstLayer) || void 0 === t ? void 0 : t.isCategoryTogglesEnabled)
    },
    Tt = function(e) {
        return null != e && !St(e) && !Ct(e) && !It(e)
    },
    Et = "BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial, sans-serif",
    At = 14,
    Lt = "#336AB7",
    wt = "#dedede",
    Ot = "#595959",
    Rt = "#ffffff",
    Dt = "8px",
    Nt = .7,
    Pt = {
        acceptAllButton: "Accept All",
        ccpaButton: "Agree to CCPA",
        ccpaMoreInformation: "More Information",
        closeButton: "Close Second Layer",
        collapse: "Collapse",
        cookiePolicyButton: "Open Cookie Policy",
        copyControllerId: "Copy Controller ID",
        denyAllButton: "Deny all",
        expand: "Expand",
        fullscreenButton: "Enter full screen",
        imprintButton: "Open Imprint",
        languageSelector: "Select language",
        privacyButton: "Open",
        privacyPolicyButton: "Open Privacy Policy",
        saveButton: "Save",
        serviceInCategoryDetails: "View Service details",
        servicesInCategory: "List of Services in this category",
        tabButton: "Tab",
        usercentricsCard: "Card",
        usercentricsCMPButtons: "Footer including buttons",
        usercentricsCMPContent: "Content",
        usercentricsCMPHeader: "Header including language selection and external links",
        usercentricsCMPUI: "Consent Management Platform Interface",
        usercentricsList: "List",
        vendorConsentToggle: "Consent",
        vendorDetailedStorageInformation: "Detailed Storage Information",
        vendorLegIntToggle: "Legitimate Interest"
    },
    Ut = "https://www.usercentrics.com/",
    Ft = function(e, t) {
        var n, r, i, o, s, a, c, l, u, d, f = e.labels;
        return {
            cnil: {
                denyLabel: (null === (n = null == t ? void 0 : t.labels) || void 0 === n ? void 0 : n.CNIL_DENY_LINK_TEXT) || "Continuer sans accepter"
            },
            cookieInformation: {
                anyDomain: f.anyDomain || "any domain (ex. first party cookie)",
                cookieRefresh: (null === (r = null == t ? void 0 : t.labels) || void 0 === r ? void 0 : r.COOKIE_REFRESH) || (null === (i = null == t ? void 0 : t.labels) || void 0 === i ? void 0 : i.COOKIE_REFRESH) || "Cookie Refresh",
                cookieStorage: (null === (o = null == t ? void 0 : t.labels) || void 0 === o ? void 0 : o.COOKIE_STORAGE) || (null === (s = null == t ? void 0 : t.labels) || void 0 === s ? void 0 : s.COOKIE_STORAGE) || "Cookie Storage",
                day: f.day,
                days: f.days,
                description: f.storageInformationDescription || "Below you can see the longest potential duration for storage on a device, as set when using the cookie method of storage and if there are any other methods used.",
                domain: f.domain || "Domain",
                duration: f.duration || "Duration",
                error: f.informationLoadingNotPossible || "Sorry; we could not load the required information.",
                hour: f.hour,
                hours: f.hours,
                identifier: f.identifier || "Identifier",
                loading: f.loadingStorageInformation || "Loading storage information",
                maximumAge: f.maximumAgeCookieStorage || "Maximum age of cookie storage",
                minute: f.minute,
                minutes: f.minutes,
                month: f.month,
                months: f.months,
                multipleDomains: f.multipleDomains || "multiple subdomains may exist",
                name: f.name || "Name",
                no: f.no || "no",
                nonCookieStorage: f.nonCookieStorage || "Non-cookie storage",
                purposes: f.purposes || "Purposes",
                second: f.second || "second",
                seconds: f.seconds || "seconds",
                session: f.session || "Session",
                storedInformation: f.storedInformation || "Stored Information",
                storedInformationDescription: f.storedInformationDescription || "This service uses different means of storing information on a user's device as listed below.",
                title: f.storageInformation || "Storage Information",
                titleDetailed: f.detailedStorageInformation || "Detailed Storage Information",
                tryAgain: f.tryAgain || "Try again?",
                type: f.type || "Type",
                year: f.year,
                years: f.years,
                yes: f.yes || "yes"
            },
            general: {
                back: (null === (a = null == t ? void 0 : t.labels) || void 0 === a ? void 0 : a.BACK) || "Back",
                consentGiven: f.accepted,
                consentNotGiven: f.denied,
                consentType: f.consentType,
                controllerId: "Controller ID",
                copy: f.copy,
                date: f.date,
                decision: f.decision,
                details: (null === (c = null == t ? void 0 : t.labels) || void 0 === c ? void 0 : c.DETAILS) || "Details",
                explicit: f.explicit,
                implicit: f.implicit,
                implicitNo: f.noImplicit,
                implicitYes: f.yesImplicit,
                showLess: f.readLess,
                showMore: f.btnBannerReadMore || f.showMore,
                subservice: (null === (l = null == t ? void 0 : t.labels) || void 0 === l ? void 0 : l.SUB_SERVICE) || "Subservice",
                subservices: (null === (u = null == t ? void 0 : t.labels) || void 0 === u ? void 0 : u.SUB_SERVICES) || "Subservices",
                subservicesDescription: (null === (d = null == t ? void 0 : t.labels) || void 0 === d ? void 0 : d.SUB_SERVICES_DESCRIPTION) || "Below you can find all the services that are subordinate to this service. The current consent status of this service applies to all subservices."
            },
            service: {
                dataCollected: {
                    description: f.dataCollectedInfo,
                    title: f.dataCollectedList
                },
                dataDistribution: {
                    processingLocationDescription: f.locationofProcessingInfo,
                    processingLocationTitle: f.locationOfProcessing,
                    thirdPartyCountriesDescription: f.transferToThirdCountriesInfo,
                    thirdPartyCountriesTitle: f.transferToThirdCountries
                },
                dataProtectionOfficer: {
                    description: f.dataProtectionOfficerInfo,
                    title: f.dataProtectionOfficer
                },
                dataPurposes: {
                    description: f.dataPurposesInfo,
                    title: f.dataPurposes
                },
                dataRecipients: {
                    description: f.dataRecipientsListInfo,
                    title: f.dataRecipientsList
                },
                descriptionTitle: f.descriptionOfService,
                history: {
                    description: null,
                    title: f.history
                },
                legalBasis: {
                    description: f.legalBasisInfo,
                    title: f.legalBasisList
                },
                processingCompanyTitle: f.processingCompany,
                retentionPeriod: {
                    description: f.retentionPeriodInfo,
                    title: f.retentionPeriod
                },
                technologiesUsed: {
                    description: f.technologiesUsedInfo,
                    title: f.technologiesUsed
                },
                urls: {
                    cookiePolicyTitle: f.cookiePolicyInfo,
                    optOutTitle: f.optOut,
                    privacyPolicyTitle: f.policyOf
                }
            }
        }
    },
    kt = function(e, t) {
        var n, r, i, o, s, a, c, l, u, d, f, p, h, g, v, y, m, _, b, S, I, C, T, E, A, L, w = t.customization,
            O = t.labels;
        return {
            customCss: (null === (n = t.features) || void 0 === n ? void 0 : n.customCss) && t.useUnsafeCustomCss && null != t.stylesCss ? t.stylesCss : null,
            customization: {
                button: {
                    alignment: (null == w ? void 0 : w.buttonAlignment) || De.HORIZONTAL,
                    borderRadius: ft(He(null == w ? void 0 : w.borderRadiusButton, "4px"))
                },
                color: {
                    acceptBtn: {
                        backgroundColor: ct(null === (r = null == w ? void 0 : w.color) || void 0 === r ? void 0 : r.acceptBtnBackground),
                        textColor: ct(null === (i = null == w ? void 0 : w.color) || void 0 === i ? void 0 : i.acceptBtnText)
                    },
                    denyButton: {
                        backgroundColor: ct(null === (o = null == w ? void 0 : w.color) || void 0 === o ? void 0 : o.denyBtnBackground),
                        textColor: ct(null === (s = null == w ? void 0 : w.color) || void 0 === s ? void 0 : s.denyBtnText)
                    },
                    layerBackground: He(ct(null === (a = null == w ? void 0 : w.color) || void 0 === a ? void 0 : a.layerBackground), "#ffffff"),
                    linkFontColor: He(ct(null === (c = null == w ? void 0 : w.color) || void 0 === c ? void 0 : c.linkFont), "#303030"),
                    linkIconColor: He(ct(null === (l = null == w ? void 0 : w.color) || void 0 === l ? void 0 : l.linkIcon), "#595959"),
                    moreBtn: {
                        backgroundColor: He(ct(null === (u = null == w ? void 0 : w.color) || void 0 === u ? void 0 : u.moreBtnBackground), "#0045A5"),
                        textColor: He(ct(null === (d = null == w ? void 0 : w.color) || void 0 === d ? void 0 : d.moreBtnText), "#FAFAFA")
                    },
                    overlayColor: He(ct(null === (f = null == w ? void 0 : w.color) || void 0 === f ? void 0 : f.overlay), "#333"),
                    primary: He(ct(null === (p = null == w ? void 0 : w.color) || void 0 === p ? void 0 : p.primary), "#0045A5"),
                    saveButton: {
                        backgroundColor: ct(null === (h = null == w ? void 0 : w.color) || void 0 === h ? void 0 : h.saveBtnBackground),
                        textColor: ct(null === (g = null == w ? void 0 : w.color) || void 0 === g ? void 0 : g.saveBtnText)
                    },
                    secondLayerTab: ct(null === (v = null == w ? void 0 : w.color) || void 0 === v ? void 0 : v.secondLayerTab),
                    textFontColor: He(ct(null === (y = null == w ? void 0 : w.color) || void 0 === y ? void 0 : y.text), "#303030")
                },
                firstLayer: {
                    secondLayerTrigger: He(t.firstLayer.secondLayerTrigger, Oe.LINK)
                },
                font: {
                    family: He(null === (m = null == w ? void 0 : w.font) || void 0 === m ? void 0 : m.family, Et),
                    size: He(null === (_ = null == w ? void 0 : w.font) || void 0 === _ ? void 0 : _.size, 14)
                },
                layer: {
                    borderRadius: ft(He(null == w ? void 0 : w.borderRadiusLayer, "8px"))
                },
                logo: {
                    altTag: He(null == w ? void 0 : w.logoAltTag, null),
                    position: pt(t.firstLayer.logoPosition),
                    url: He(null == w ? void 0 : w.logoUrl, null)
                },
                overlay: {
                    opacity: He(null == w ? void 0 : w.overlayOpacity, .7)
                },
                privacyButton: {
                    backgroundColor: He(ct(null === (b = null == w ? void 0 : w.color) || void 0 === b ? void 0 : b.privacyButtonBackground), null),
                    desktopSize: He(null == w ? void 0 : w.privacyButtonSizeDesktop, null),
                    iconColor: He(ct(null === (S = null == w ? void 0 : w.color) || void 0 === S ? void 0 : S.privacyButtonIcon), null),
                    mobileSize: He(null == w ? void 0 : w.privacyButtonSizeMobile, null)
                },
                theme: 1,
                toggle: {
                    active: {
                        backgroundColor: ct(null === (I = null == w ? void 0 : w.color) || void 0 === I ? void 0 : I.toggleActiveBackground) || "#336AB7",
                        iconColor: ct(null === (C = null == w ? void 0 : w.color) || void 0 === C ? void 0 : C.toggleActiveIcon) || "#ffffff"
                    },
                    disabled: {
                        backgroundColor: ct(null === (T = null == w ? void 0 : w.color) || void 0 === T ? void 0 : T.toggleDisabledBackground) || "#dedede",
                        iconColor: ct(null === (E = null == w ? void 0 : w.color) || void 0 === E ? void 0 : E.toggleDisabledIcon) || "#ffffff"
                    },
                    inactive: {
                        backgroundColor: ct(null === (A = null == w ? void 0 : w.color) || void 0 === A ? void 0 : A.toggleInactiveBackground) || "#595959",
                        iconColor: ct(null === (L = null == w ? void 0 : w.color) || void 0 === L ? void 0 : L.toggleInactiveIcon) || "#ffffff"
                    }
                },
                useBackgroundShadow: He(null == w ? void 0 : w.useBackgroundShadow, !0)
            },
            isEmbeddingsEnabled: !0,
            language: {
                available: e.language.available,
                selected: e.language.selected
            },
            links: {
                cookiePolicy: {
                    ariaLabel: Pt.cookiePolicyButton,
                    label: He(O.cookiePolicyLinkText, ""),
                    url: t.cookiePolicyUrl
                },
                imprint: {
                    ariaLabel: Pt.imprintButton,
                    label: O.imprintLinkText || null,
                    url: t.imprintUrl
                },
                privacyPolicy: {
                    ariaLabel: Pt.privacyPolicyButton,
                    label: O.privacyPolicyLinkText,
                    url: t.privacyPolicyUrl
                }
            },
            poweredBy: {
                isEnabled: t.enablePoweredBy,
                label: "Powered by",
                partnerUrl: He(t.partnerPoweredByUrl, null),
                partnerUrlLabel: He(t.labels.partnerPoweredByLinkText, null),
                url: "https://www.usercentrics.com/",
                urlLabel: "Usercentrics Consent Management"
            },
            privacyButton: {
                iconUrl: t.buttonPrivacyOpenIconUrl || null,
                isEnabled: t.privacyButtonIsVisible,
                position: t.buttonDisplayLocation || "bl"
            },
            showCookieInformation: t.showCookieInformation
        }
    },
    xt = function(e, t, n) {
        var r = Ft(e, n);
        return {
            cookieInformation: Ne(Ne({}, r.cookieInformation), {
                purposes: t.labelsPurposes
            }),
            general: {
                features: t.labelsFeatures,
                iabVendors: t.labelsIabVendors,
                nonIabPurposes: t.labelsNonIabPurposes,
                nonIabVendors: t.labelsNonIabVendors,
                purposes: t.labelsPurposes
            },
            nonTCFLabels: r,
            vendor: {
                features: t.vendorFeatures,
                legitimateInterest: t.vendorLegitimateInterestPurposes,
                privacyPolicy: e.labels.privacyPolicyLinkText,
                purposes: t.vendorPurpose,
                specialFeatures: t.vendorSpecialFeatures,
                specialPurposes: t.vendorSpecialPurposes,
                toggleAll: t.labelsActivateAllVendors
            }
        }
    },
    Vt = function(e) {
        return {
            categories: e.categories,
            consentTemplates: e.consentTemplates
        }
    },
    Bt = function() {
        function e() {
            this.ampEnabled = !1
        }
        return e.getInstance = function() {
            return e.instance || (e.instance = new e), e.instance
        }, e.resetInstance = function() {
            e.instance.ampEnabled = !1
        }, e.prototype.isAmpEnabled = function() {
            return this.ampEnabled
        }, e.prototype.setIsAmpEnabled = function(e) {
            this.ampEnabled = e
        }, e
    }(),
    Mt = {
        EU_URI: {
            AGGREGATOR: "https://aggregator.eu.usercentrics.eu/aggregate/",
            CDN: "https://config.eu.usercentrics.eu",
            FETCH_CONSENTS: "https://consents.usercentrics.eu/consentsHistory",
            FETCH_TCF_DATA: "https://consents.usercentrics.eu/consentsHistoryTCF",
            FETCH_TCF_DATA_V2: "https://consents.usercentrics.eu/consentState",
            GRAPHQL: "https://api.eu.usercentrics.eu/graphql"
        },
        FOLDER: {
            RULESET: "ruleSet",
            SETTINGS: "settings",
            TEMPLATES: "consent-templates",
            TRANSLATIONS: "translations"
        },
        URI: {
            AGGREGATOR: "https://aggregator.service.usercentrics.eu/aggregate/",
            CDN: "https://api.usercentrics.eu",
            FETCH_CONSENTS: "https://consents.usercentrics.eu/consentsHistory",
            FETCH_TCF_DATA: "https://consents.usercentrics.eu/consentsHistoryTCF",
            FETCH_TCF_DATA_V2: "https://consents.usercentrics.eu/consentState",
            GRAPHQL: "https://graphql.usercentrics.eu/graphql",
            RULESET: "https://api.usercentrics.eu",
            TRACK_EVENT: "https://uct.service.usercentrics.eu/uct"
        }
    },
    Gt = {
        EU_URI: {
            AGGREGATOR: "https://aggregator.service.usercentrics-sandbox.eu/aggregate/",
            CDN: "https://api.usercentrics-sandbox.eu",
            FETCH_CONSENTS: "https://api-consent-sandbox-dot-usercentrics-playground.nw.r.appspot.com/consentsHistory",
            FETCH_TCF_DATA: "https://api-consent-sandbox-dot-usercentrics-playground.nw.r.appspot.com/consentsHistoryTCF",
            FETCH_TCF_DATA_V2: "https://api-consent-sandbox-dot-usercentrics-playground.nw.r.appspot.com/consentState",
            GRAPHQL: "https://api-v2-sandbox-consent-dot-usercentrics-playground.nw.r.appspot.com/"
        },
        FOLDER: {
            RULESET: "ruleSet",
            SETTINGS: "settings",
            TEMPLATES: "consent-templates",
            TRANSLATIONS: "translations"
        },
        URI: {
            AGGREGATOR: "https://aggregator.service.usercentrics-sandbox.eu/aggregate/",
            CDN: "https://api.usercentrics-sandbox.eu",
            FETCH_CONSENTS: "https://api-consent-sandbox-dot-usercentrics-playground.nw.r.appspot.com/consentsHistory",
            FETCH_TCF_DATA: "https://api-consent-sandbox-dot-usercentrics-playground.nw.r.appspot.com/consentsHistoryTCF",
            FETCH_TCF_DATA_V2: "https://api-consent-sandbox-dot-usercentrics-playground.nw.r.appspot.com/consentState",
            GRAPHQL: "https://api-v2-sandbox-consent-dot-usercentrics-playground.nw.r.appspot.com/",
            RULESET: "https://api.usercentrics-sandbox.eu",
            TRACK_EVENT: "https://uct.service.usercentrics.eu/uct"
        }
    },
    Ht = {
        countryCode: "DE",
        countryName: "Germany (default)",
        regionCode: ""
    },
    $t = function(e, t, n) {
        return Pe(void 0, void 0, void 0, (function() {
            return Ue(this, (function(r) {
                return [2, Yt(e, t, null, n)]
            }))
        }))
    },
    jt = function(e, t, n, r) {
        return Pe(void 0, void 0, void 0, (function() {
            return Ue(this, (function(i) {
                return [2, Yt(e, n, t, r)]
            }))
        }))
    },
    Yt = function(e, t, n, r) {
        return Pe(void 0, void 0, void 0, (function() {
            var i, o;
            return Ue(this, (function(s) {
                return i = {
                    "content-type": "application/json"
                }, o = Ne(Ne({}, r), {
                    headers: i,
                    method: n ? "POST" : "GET"
                }), n && (o.body = JSON.stringify(n)), (null == r ? void 0 : r.headers) && (o.headers = Ne(Ne({}, i), r.headers)), [2, fetch(e, o).then((function(e) {
                    return Pe(void 0, void 0, void 0, (function() {
                        return Ue(this, (function(n) {
                            if (e.ok) return [2, zt(e)];
                            throw Wt(t, e.status)
                        }))
                    }))
                }))]
            }))
        }))
    },
    Wt = function(e, t) {
        return {
            errorMessage: e,
            statusCode: t
        }
    },
    zt = function(e) {
        return Pe(void 0, void 0, void 0, (function() {
            return Ue(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return [4, Jt(e)];
                    case 1:
                        return [2, {
                            data: t.sent(),
                            location: e.headers.get("x-client-geo-location"),
                            statusCode: e.status
                        }]
                }
            }))
        }))
    },
    Jt = function(e) {
        return Pe(void 0, void 0, void 0, (function() {
            var t;
            return Ue(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return [4, e.json()];
                    case 1:
                        return [2, (t = n.sent()).data || t]
                }
            }))
        }))
    };
! function(e) {
    e[e.RESOURCE_NOT_FOUND = 403] = "RESOURCE_NOT_FOUND"
}(st || (st = {}));
var qt, Kt, Xt, Zt, Qt, en = 1,
    tn = "1---",
    nn = "__uspapiLocator",
    rn = /^[1][nNyY-][nNyY-][nNyY-]$/,
    on = "__uspapi";
! function(e) {
    e.CCPA = "uc_usprivacy", e.CCPA_DATA = "uc_ccpa", e.CONSENTS_BUFFER = "uc_consents_buffer", e.LEGACY_SETTINGS = "ucSettings", e.SERVICES = "uc_services", e.SETTINGS = "uc_settings", e.TCF = "uc_tcf", e.USER_INTERACTION = "uc_user_interaction"
}(qt || (qt = {})), (Kt || (Kt = {})).USER_COUNTRY = "uc_user_country",
    function(e) {
        e.CROSS_DEVICE_DATA_NOT_AVAILABLE = "Usercentrics: Cross Device Consents data is not available", e.CROSS_DEVICE_TCF_DATA_NOT_AVAILABLE = "Usercentrics: Cross Device TCF data is not available"
    }(Xt || (Xt = {})),
    function(e) {
        e.CROSS_DOMAIN_DATA_NOT_AVAILABLE = "Usercentrics: Cross Domain Consents data is not available", e.CROSS_DOMAIN_TCF_DATA_NOT_AVAILABLE = "Usercentrics: Cross Domain TCF data is not available", e.CROSS_DOMAIN_FEATURE_NOT_AVAILABLE = "Usercentrics: Cross Domain Consent Sharing is not available.", e.CROSS_DOMAIN_LANGUAGE_NOT_AVAILABLE = "Usercentrics: Cross Domain Consent language is not available", e.CROSS_DOMAIN_SET_DATA_FAILURE = "Usercentrics: Unable to set Cross Domain data", e.CROSS_DOMAIN_SET_TCF_DATA_FAILURE = "Usercentrics: Unable to set Cross Domain TCF data", e.CROSS_DOMAIN_IFRAME_ERROR = "Usercentrics: Iframe error", e.CROSS_DOMAIN_IFRAME_NOT_FOUND = "Usercentrics: Cross Domain iFrame not found", e.CROSS_DOMAIN_IFRAME_LOAD_ERROR = "Usercentrics: IFrame did not load"
    }(Zt || (Zt = {})),
    function(e) {
        e.CLEAR = "clear", e.GET_CROSS_DOMAIN_LANGUAGE = "getCrossDomainLanguage", e.GET_CROSS_DOMAIN_SESSION_DATA = "getCrossDomainSessionData", e.GET_CROSS_DOMAIN_TCF_DATA = "getCrossDomainTcfData", e.GET_CROSS_DOMAIN_CCPA_DATA = "getCrossDomainCcpaData", e.GET_TC_STRING = "getTCString", e.PING = "ping", e.SET_CROSS_DOMAIN_DATA = "setCrossDomainData", e.SET_CROSS_DOMAIN_TCF_DATA = "setCrossDomainTcfData", e.SET_CROSS_DOMAIN_CCPA_DATA = "setCrossDomainCcpaData", e.SET_TC_STRING = "setTCString"
    }(Qt || (Qt = {}));
var sn, an, cn, ln, un = "https://app.usercentrics.eu/browser-sdk/".concat("3.3.1", "/cross-domain-bridge.html"),
    dn = "https://app.eu.usercentrics.eu/browser-sdk/".concat("3.3.1", "/cross-domain-bridge.html"),
    fn = function() {
        function e() {}
        return e.getDomainBridgeUri = function(t) {
            var n = "";
            t && (t.crossDomainConsentSharingIFrame ? n = t.crossDomainConsentSharingIFrame : t.app && (n = "".concat(t.app, "/browser-sdk/").concat("3.3.1", "/cross-domain-bridge.html")));
            var r = "" !== n ? n : un,
                i = dn;
            return e.useEuCdn ? i : r
        }, e.init = function(t, n) {
            return Pe(this, void 0, void 0, (function() {
                return Ue(this, (function(r) {
                    return e.setUseEuCdn((null == t ? void 0 : t.useEuCdn) || !1), [2, this.initIFrame(e.getDomainBridgeUri(n), "uc-cross-domain-bridge")]
                }))
            }))
        }, e.initIFrame = function(t, n) {
            return Pe(this, void 0, void 0, (function() {
                var r = this;
                return Ue(this, (function(i) {
                    return [2, new Promise((function(i, o) {
                        var s = e.createIFrame(t, n);
                        s.onload = function() {
                            return Pe(r, void 0, void 0, (function() {
                                var r;
                                return Ue(this, (function(a) {
                                    return r = setTimeout((function() {
                                        s = {}, o(new Error(Zt.CROSS_DOMAIN_IFRAME_LOAD_ERROR))
                                    }), 1e3), e.queryIFrame(t, n, Qt.PING).then((function() {
                                        clearTimeout(r), i(!0)
                                    })).catch((function(e) {
                                        clearTimeout(r), o(e)
                                    })), [2]
                                }))
                            }))
                        }, s.onerror = function() {
                            return Pe(r, void 0, void 0, (function() {
                                return Ue(this, (function(e) {
                                    return o(new Error(Zt.CROSS_DOMAIN_IFRAME_ERROR)), [2]
                                }))
                            }))
                        }, e.appendIFrame(s)
                    }))]
                }))
            }))
        }, e.setIsCrossDomainAvailable = function(t) {
            e.crossDomainAvailable = t
        }, e.isCookieBridgeAvailable = function() {
            return e.cookieBridgeAvailable
        }, e.setIsCookieBridgeAvailable = function(t) {
            e.cookieBridgeAvailable = t
        }, e.isCrossDomainAvailable = function() {
            return e.crossDomainAvailable
        }, e.getCrossDomainId = function() {
            return e.crossDomainId
        }, e.setCrossDomainId = function(t) {
            e.crossDomainId = "".concat("uc_cross_domain_data", "_").concat(t)
        }, e.setCookieBridgeDomain = function(e, t) {
            this.cookieBridgeDomain = "".concat(e).concat(t)
        }, e.setUseEuCdn = function(t) {
            e.useEuCdn = t
        }, e.createIFrame = function(t, n) {
            e.removeIFrame(n);
            var r = document.createElement("iframe");
            return r.style.display = "none", r.id = n, r.src = t, r
        }, e.removeIFrame = function(e) {
            var t = document.getElementById(e);
            t && t.parentNode && t.parentNode.removeChild(t)
        }, e.queryIFrame = function(e, t, n, r, i) {
            return Pe(this, void 0, void 0, (function() {
                var o;
                return Ue(this, (function(s) {
                    if (!(o = document.getElementById(t)) || !o.id) throw new Error(Zt.CROSS_DOMAIN_IFRAME_NOT_FOUND);
                    return [2, new Promise((function(t, s) {
                        var a = JSON.stringify({
                                crossDomainId: i,
                                method: n,
                                payload: r
                            }),
                            c = new MessageChannel;
                        c.port1.onmessage = function(e) {
                            var n = JSON.parse(e.data),
                                r = n.success,
                                i = n.data;
                            r ? t(i) : s(e)
                        }, o && o.contentWindow && o.contentWindow.postMessage(a, e, [c.port2])
                    }))]
                }))
            }))
        }, e.appendIFrame = function(e) {
            try {
                document.body ? document.body.appendChild(e) : document.addEventListener("DOMContentLoaded", (function() {
                    document.body.appendChild(e)
                }))
            } catch (e) {
                return new Error(Zt.CROSS_DOMAIN_IFRAME_ERROR)
            }
            return null
        }, e.query = function(t, n) {
            return Pe(this, void 0, void 0, (function() {
                return Ue(this, (function(r) {
                    return [2, e.queryIFrame(e.getDomainBridgeUri(), "uc-cross-domain-bridge", t, n, e.crossDomainId)]
                }))
            }))
        }, e.getCrossDomainLanguage = function() {
            return e.query(Qt.GET_CROSS_DOMAIN_LANGUAGE)
        }, e.setCrossDomainData = function(t) {
            return Pe(this, void 0, void 0, (function() {
                return Ue(this, (function(n) {
                    return [2, e.query(Qt.SET_CROSS_DOMAIN_DATA, (r = t, {
                        consents: r.services.map((function(e) {
                            return e.history.map((function(t) {
                                return {
                                    action: t.action,
                                    consentId: "",
                                    settingsVersion: t.versions.settings,
                                    status: t.status,
                                    templateId: e.id,
                                    timestamp: "".concat(t.timestamp),
                                    updatedBy: t.type
                                }
                            }))
                        })).reduce((function(e, t) {
                            return e.concat(t)
                        }), []).sort((function(e, t) {
                            return parseInt(e.timestamp, 10) - parseInt(t.timestamp, 10)
                        })),
                        controllerId: r.controllerId,
                        language: r.language
                    }))];
                    var r
                }))
            }))
        }, e.setCrossDomainCcpaData = function(t) {
            return Pe(this, void 0, void 0, (function() {
                return Ue(this, (function(n) {
                    return [2, e.query(Qt.SET_CROSS_DOMAIN_CCPA_DATA, t)]
                }))
            }))
        }, e.getCrossDomainCcpaData = function() {
            return Pe(this, void 0, void 0, (function() {
                return Ue(this, (function(t) {
                    return [2, e.query(Qt.GET_CROSS_DOMAIN_CCPA_DATA)]
                }))
            }))
        }, e.getCrossDomainSessionData = function() {
            return Pe(this, void 0, void 0, (function() {
                return Ue(this, (function(t) {
                    return [2, e.query(Qt.GET_CROSS_DOMAIN_SESSION_DATA)]
                }))
            }))
        }, e.getCrossDomainTcfData = function() {
            return Pe(this, void 0, void 0, (function() {
                return Ue(this, (function(t) {
                    return [2, e.query(Qt.GET_CROSS_DOMAIN_TCF_DATA)]
                }))
            }))
        }, e.setCrossDomainTcfData = function(t) {
            return Pe(this, void 0, void 0, (function() {
                return Ue(this, (function(n) {
                    return [2, e.query(Qt.SET_CROSS_DOMAIN_TCF_DATA, t)]
                }))
            }))
        }, e.clearCrossDomainStorage = function() {
            return Pe(this, void 0, void 0, (function() {
                return Ue(this, (function(t) {
                    return [2, e.query(Qt.CLEAR)]
                }))
            }))
        }, e.crossDomainId = "", e.cookieBridgeDomain = "", e.useEuCdn = !1, e.cookieBridgeAvailable = !1, e.crossDomainAvailable = !1, e
    }();
! function(e) {
    e.COOKIE_BRIDGE_NOT_AVAILABLE = "Usercentrics: Cookie bridge is not available.", e.COOKIE_BRIDGE_OPTIONS_NOT_SET = "Usercentrics: Cookie bridge options are not set", e.GET_GLOBAL_TC_STRING_FAILURE = "Usercentrics: Unable to get the Global TC string", e.INIT_TCF_ERROR = "Usercentrics: Unable to init TCF", e.RESET_GVL_FAILURE = "Usercentrics: Unable to reset Global Vendor List", e.SET_GLOBAL_TC_STRING_FAILURE = "Usercentrics: Unable to set the Global TC string", e.VENDOR_REMOVED = "Usercentrics: The following vendor is not part of the official vendors list anymore: ", e.TC_MODEL_UNDEFINED = "Usercentrics: tcModel can not be null.", e.SELECTED_LANGUAGE_UNDEFINED = "Usercentrics: Selected language can not be undefined"
}(sn || (sn = {})),
function(e) {
    e.LEGITIMATE_INTEREST = "legIntPurposes", e.PURPOSES = "purposes"
}(an || (an = {})),
function(e) {
    e[e.ID = 0] = "ID", e[e.LEGITIMATE_INTEREST = 1] = "LEGITIMATE_INTEREST", e[e.PURPOSES = 2] = "PURPOSES", e[e.SPECIAL_PURPOSES = 3] = "SPECIAL_PURPOSES"
}(cn || (cn = {})),
function(e) {
    e[e.FIRST_LAYER = 1] = "FIRST_LAYER", e[e.SECOND_LAYER = 2] = "SECOND_LAYER"
}(ln || (ln = {}));
var pn, hn = function(e) {
        switch (e) {
            case "onAcceptAllBtnClick":
            case "onSpecialFunctionAcceptAllConsentTrigger":
                return "onAcceptAllServices";
            case "onDenyAllAnchorClick":
            case "onDenyAllBtnClick":
                return "onDenyAllServices";
            case "onNonEURegion":
                return "onNonEURegion";
            case "onInitialPageLoad":
            case "onCountdownFinished":
            default:
                return "onInitialPageLoad";
            case "onToggleCategory":
            case "onToggleConsent":
            case "onToggleSelectAll":
                return "onEssentialChange";
            case "onWindowFunctionUpdateConsent":
            case "bySettingsUpdate":
            case "onSaveBtnClick":
                return "onUpdateServices"
        }
    },
    gn = function(e) {
        switch (e) {
            case "update":
            case "implicit":
            default:
                return "implicit";
            case "explicit":
                return "explicit"
        }
    },
    vn = "RAMDOM_KEY_LOCAL_STORAGE",
    yn = function() {
        function e() {
            this.localStorage = null, this.sessionStorage = null, this.storeServiceIdToNameMapping = !1
        }
        return e.getInstance = function() {
            return e.instance || (e.instance = new e), e.instance
        }, e.resetInstance = function() {
            e.instance.localStorage = null, e.instance.sessionStorage = null
        }, e.prototype.init = function() {
            try {
                localStorage.setItem(vn, vn), localStorage.removeItem(vn), this.localStorage = localStorage
            } catch (e) {
                this.localStorage = null
            }
            try {
                sessionStorage.setItem(vn, vn), sessionStorage.removeItem(vn), this.sessionStorage = sessionStorage
            } catch (e) {
                this.sessionStorage = null
            }
        }, e.appendToConsentsBuffer = function(t) {
            var n, r = e.fetchConsentsBuffer();
            r.push({
                consents: t,
                timestamp: (new Date).valueOf()
            }), null === (n = e.getInstance().localStorage) || void 0 === n || n.setItem(qt.CONSENTS_BUFFER, JSON.stringify(r))
        }, e.clearOnNewSettingsId = function(t) {
            t !== e.fetchSettingsId() && e.clear()
        }, e.removeConsentsBufferItem = function(t) {
            var n, r, i = e.fetchConsentsBuffer(),
                o = i.length + 0;
            (i = i.filter((function(e) {
                return JSON.stringify(e) !== JSON.stringify(t)
            }))).length && i.length !== o ? null === (n = e.getInstance().localStorage) || void 0 === n || n.setItem(qt.CONSENTS_BUFFER, JSON.stringify(i)) : null === (r = e.getInstance().localStorage) || void 0 === r || r.removeItem(qt.CONSENTS_BUFFER)
        }, e.getCcpaString = function() {
            var t, n = null === (t = e.getInstance().localStorage) || void 0 === t ? void 0 : t.getItem(qt.CCPA);
            return n && rn.test(n) ? n : "1---"
        }, e.getCcpaData = function() {
            var t, n = null === (t = e.getInstance().localStorage) || void 0 === t ? void 0 : t.getItem(qt.CCPA_DATA);
            return n ? JSON.parse(n) : null
        }, e.fetchConsentsBuffer = function() {
            var t, n = null === (t = e.getInstance().localStorage) || void 0 === t ? void 0 : t.getItem(qt.CONSENTS_BUFFER);
            return n ? JSON.parse(n) : []
        }, e.fetchControllerId = function() {
            var t = e.fetchSettings();
            return t ? t.controllerId : ""
        }, e.fetchLanguage = function() {
            var t = e.fetchSettings();
            return t ? t.language : ""
        }, e.fetchServices = function() {
            var t = e.fetchSettings();
            return t ? t.services : []
        }, e.fetchLegacySettings = function() {
            var t, n = null === (t = e.getInstance().localStorage) || void 0 === t ? void 0 : t.getItem(qt.LEGACY_SETTINGS);
            return n ? JSON.parse(n) : null
        }, e.fetchSettings = function() {
            var t, n = null === (t = e.getInstance().localStorage) || void 0 === t ? void 0 : t.getItem(qt.SETTINGS);
            return n ? JSON.parse(n) : {}
        }, e.fetchSettingsId = function() {
            var t = e.fetchSettings();
            return t ? t.id : ""
        }, e.fetchSettingsVersion = function() {
            var t = e.fetchSettings();
            return t ? t.version : ""
        }, e.fetchTCFData = function() {
            var t, n = null === (t = e.getInstance().localStorage) || void 0 === t ? void 0 : t.getItem(qt.TCF),
                r = n ? JSON.parse(n) : {
                    tcString: "",
                    timestamp: Date.now(),
                    vendors: []
                };
            return r.vendors || (r.vendors = []), r
        }, e.fetchTCFVendorsDisclosedObject = function(t) {
            var n, r = e.fetchTCFData(),
                i = r.tcString,
                o = r.vendors,
                s = r.vendorsDisclosed;
            if (!o && !s) return {};
            if ((s || !s && !o.length && i) && t) {
                var a = Object.keys(t).map(Number);
                n = (s || a).filter((function(e) {
                    return t[e]
                })).map((function(e) {
                    var n = t[e];
                    return [n.id, n.legIntPurposes, n.purposes, n.specialPurposes]
                })), e.saveTCFData({
                    tcString: i,
                    timestamp: Date.now(),
                    vendors: n
                })
            } else n = o;
            return n.reduce((function(e, t) {
                var n;
                return Ne(Ne({}, e), ((n = {})[t[cn.ID]] = !0, n))
            }), {})
        }, e.fetchTCString = function() {
            return e.fetchTCFData().tcString || ""
        }, e.fetchUserActionPerformed = function() {
            var t;
            return null !== (null === (t = e.getInstance().localStorage) || void 0 === t ? void 0 : t.getItem(qt.USER_INTERACTION))
        }, e.fetchUserCountryResponse = function() {
            var t;
            try {
                return JSON.parse((null === (t = e.getInstance().sessionStorage) || void 0 === t ? void 0 : t.getItem(Kt.USER_COUNTRY)) || "null")
            } catch (e) {
                return null
            }
        }, e.setUserCountryResponse = function(t) {
            var n;
            null === (n = e.getInstance().sessionStorage) || void 0 === n || n.setItem(Kt.USER_COUNTRY, JSON.stringify(t))
        }, e.mapServices = function(e) {
            return e.map((function(e) {
                return {
                    history: e.consent.history,
                    id: e.id,
                    processorId: e.processorId,
                    status: e.consent.status
                }
            }))
        }, e.mapSettings = function(t, n) {
            return {
                controllerId: t.controllerId,
                id: t.id,
                language: t.selectedLanguage,
                services: e.mapServices(n),
                version: t.version
            }
        }, e.migrateLegacySettings = function(t) {
            if (!e.settingsExist()) {
                var n, r, i = e.fetchLegacySettings();
                if (e.clearLegacySettings(), null == i ? void 0 : i[t]) {
                    var o = (n = i[t]) && Me(n.ucConsents.consents) ? ((r = {})[qt.SETTINGS] = {
                        controllerId: n.ucConsents.consents[0].controllerId,
                        id: n.usercentrics.settings.settingsId,
                        language: n.usercentrics.settings.language,
                        services: n.ucConsents.consents.map((function(e) {
                            return {
                                history: e.history.map((function(e) {
                                    return {
                                        action: hn(e.action),
                                        language: e.language,
                                        status: e.consentStatus,
                                        timestamp: e.updatedAt,
                                        type: gn(e.updatedBy),
                                        versions: {
                                            application: e.appVersion,
                                            service: e.consentTemplateVersion,
                                            settings: e.settingsVersion
                                        }
                                    }
                                })),
                                id: e.templateId,
                                processorId: e.processorId,
                                status: e.consentStatus
                            }
                        })),
                        version: n.usercentrics.settings.version
                    }, r[qt.USER_INTERACTION] = n.usercentrics.firstUserInteraction.stateSaved, r) : null;
                    o && (e.saveSettings(o[qt.SETTINGS]), o[qt.USER_INTERACTION] && e.setUserActionPerformed())
                }
            }
        }, e.saveSettings = function(t, n) {
            var r, i;
            if (null === (r = e.getInstance().localStorage) || void 0 === r || r.setItem(qt.SETTINGS, JSON.stringify(t)), e.prototype.storeServiceIdToNameMapping && n && n.length) {
                var o = n.reduce((function(e, t) {
                    return e[t.id] = t.name, e
                }), {});
                null === (i = e.getInstance().localStorage) || void 0 === i || i.setItem(qt.SERVICES, JSON.stringify(o))
            }
            fn.isCrossDomainAvailable() && fn.setCrossDomainData(t).catch((function() {
                console.warn(Zt.CROSS_DOMAIN_SET_DATA_FAILURE)
            }))
        }, e.saveTCFData = function(t) {
            var n;
            null === (n = e.getInstance().localStorage) || void 0 === n || n.setItem(qt.TCF, JSON.stringify(t)), fn.isCrossDomainAvailable() && fn.setCrossDomainTcfData(t).catch((function() {
                console.warn(Zt.CROSS_DOMAIN_SET_TCF_DATA_FAILURE)
            }))
        }, e.saveTCString = function(t) {
            var n = e.fetchTCFData();
            this.saveTCFData(Ne(Ne({}, n), {
                tcString: t
            }))
        }, e.setCcpaTimeStamp = function(t) {
            var n, r = t || {
                ccpaString: this.getCcpaString() || "",
                timestamp: (new Date).getTime()
            };
            null === (n = e.getInstance().localStorage) || void 0 === n || n.setItem(qt.CCPA_DATA, JSON.stringify(r))
        }, e.getCcpaTimeStamp = function() {
            var e = this.getCcpaData();
            return e && e.timestamp ? e.timestamp : (new Date).getTime()
        }, e.setCcpaString = function(t) {
            var n;
            null === (n = e.getInstance().localStorage) || void 0 === n || n.setItem(qt.CCPA, t)
        }, e.settingsExist = function() {
            return Ge(e.fetchSettings())
        }, e.setUserActionPerformed = function() {
            var t;
            null === (t = e.getInstance().localStorage) || void 0 === t || t.setItem(qt.USER_INTERACTION, JSON.stringify(!0))
        }, e.clearCcpa = function() {
            var t;
            this.clearCcpaData(), null === (t = e.getInstance().localStorage) || void 0 === t || t.removeItem(qt.CCPA)
        }, e.clearCcpaData = function() {
            var t;
            null === (t = e.getInstance().localStorage) || void 0 === t || t.removeItem(qt.CCPA_DATA)
        }, e.clearTcf = function() {
            var t;
            null === (t = e.getInstance().localStorage) || void 0 === t || t.removeItem(qt.TCF)
        }, e.clear = function() {
            var t, n;
            e.clearCcpa(), e.clearTcf(), null === (t = e.getInstance().localStorage) || void 0 === t || t.removeItem(qt.SETTINGS), null === (n = e.getInstance().localStorage) || void 0 === n || n.removeItem(qt.USER_INTERACTION)
        }, e.clearAll = function() {
            return Pe(this, void 0, void 0, (function() {
                return Ue(this, (function(e) {
                    switch (e.label) {
                        case 0:
                            return this.clear(), fn.isCrossDomainAvailable() ? [4, fn.clearCrossDomainStorage()] : [3, 2];
                        case 1:
                            e.sent(), e.label = 2;
                        case 2:
                            return [2]
                    }
                }))
            }))
        }, e.clearLegacySettings = function() {
            var t;
            null === (t = e.getInstance().localStorage) || void 0 === t || t.removeItem(qt.LEGACY_SETTINGS)
        }, e
    }(),
    mn = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
    _n = {
        exports: {}
    };
_n.exports = (pn = pn || function(e, t) {
    var n;
    if ("undefined" != typeof window && window.crypto && (n = window.crypto), "undefined" != typeof self && self.crypto && (n = self.crypto), "undefined" != typeof globalThis && globalThis.crypto && (n = globalThis.crypto), !n && "undefined" != typeof window && window.msCrypto && (n = window.msCrypto), !n && void 0 !== mn && mn.crypto && (n = mn.crypto), !n) try {
        n = require("crypto")
    } catch (e) {}
    var r = function() {
            if (n) {
                if ("function" == typeof n.getRandomValues) try {
                    return n.getRandomValues(new Uint32Array(1))[0]
                } catch (e) {}
                if ("function" == typeof n.randomBytes) try {
                    return n.randomBytes(4).readInt32LE()
                } catch (e) {}
            }
            throw new Error("Native crypto module could not be used to get secure random number.")
        },
        i = Object.create || function() {
            function e() {}
            return function(t) {
                var n;
                return e.prototype = t, n = new e, e.prototype = null, n
            }
        }(),
        o = {},
        s = o.lib = {},
        a = s.Base = {
            extend: function(e) {
                var t = i(this);
                return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
                    t.$super.init.apply(this, arguments)
                }), t.init.prototype = t, t.$super = this, t
            },
            create: function() {
                var e = this.extend();
                return e.init.apply(e, arguments), e
            },
            init: function() {},
            mixIn: function(e) {
                for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                e.hasOwnProperty("toString") && (this.toString = e.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        },
        c = s.WordArray = a.extend({
            init: function(e, t) {
                e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length
            },
            toString: function(e) {
                return (e || u).stringify(this)
            },
            concat: function(e) {
                var t = this.words,
                    n = e.words,
                    r = this.sigBytes,
                    i = e.sigBytes;
                if (this.clamp(), r % 4)
                    for (var o = 0; o < i; o++) {
                        var s = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                        t[r + o >>> 2] |= s << 24 - (r + o) % 4 * 8
                    } else
                        for (var a = 0; a < i; a += 4) t[r + a >>> 2] = n[a >>> 2];
                return this.sigBytes += i, this
            },
            clamp: function() {
                var t = this.words,
                    n = this.sigBytes;
                t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4)
            },
            clone: function() {
                var e = a.clone.call(this);
                return e.words = this.words.slice(0), e
            },
            random: function(e) {
                for (var t = [], n = 0; n < e; n += 4) t.push(r());
                return new c.init(t, e)
            }
        }),
        l = o.enc = {},
        u = l.Hex = {
            stringify: function(e) {
                for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
                    var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                    r.push((o >>> 4).toString(16)), r.push((15 & o).toString(16))
                }
                return r.join("")
            },
            parse: function(e) {
                for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
                return new c.init(n, t / 2)
            }
        },
        d = l.Latin1 = {
            stringify: function(e) {
                for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
                    var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                    r.push(String.fromCharCode(o))
                }
                return r.join("")
            },
            parse: function(e) {
                for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
                return new c.init(n, t)
            }
        },
        f = l.Utf8 = {
            stringify: function(e) {
                try {
                    return decodeURIComponent(escape(d.stringify(e)))
                } catch (e) {
                    throw new Error("Malformed UTF-8 data")
                }
            },
            parse: function(e) {
                return d.parse(unescape(encodeURIComponent(e)))
            }
        },
        p = s.BufferedBlockAlgorithm = a.extend({
            reset: function() {
                this._data = new c.init, this._nDataBytes = 0
            },
            _append: function(e) {
                "string" == typeof e && (e = f.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
            },
            _process: function(t) {
                var n, r = this._data,
                    i = r.words,
                    o = r.sigBytes,
                    s = this.blockSize,
                    a = o / (4 * s),
                    l = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * s,
                    u = e.min(4 * l, o);
                if (l) {
                    for (var d = 0; d < l; d += s) this._doProcessBlock(i, d);
                    n = i.splice(0, l), r.sigBytes -= u
                }
                return new c.init(n, u)
            },
            clone: function() {
                var e = a.clone.call(this);
                return e._data = this._data.clone(), e
            },
            _minBufferSize: 0
        });
    s.Hasher = p.extend({
        cfg: a.extend(),
        init: function(e) {
            this.cfg = this.cfg.extend(e), this.reset()
        },
        reset: function() {
            p.reset.call(this), this._doReset()
        },
        update: function(e) {
            return this._append(e), this._process(), this
        },
        finalize: function(e) {
            return e && this._append(e), this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(e) {
            return function(t, n) {
                return new e.init(n).finalize(t)
            }
        },
        _createHmacHelper: function(e) {
            return function(t, n) {
                return new h.HMAC.init(e, n).finalize(t)
            }
        }
    });
    var h = o.algo = {};
    return o
}(Math), pn);
var bn, Sn = function(e) {
        return function(t) {
            var n = e,
                r = n.lib,
                i = r.WordArray,
                o = r.Hasher,
                s = n.algo,
                a = [],
                c = [];
            ! function() {
                function e(e) {
                    for (var n = t.sqrt(e), r = 2; r <= n; r++)
                        if (!(e % r)) return !1;
                    return !0
                }

                function n(e) {
                    return 4294967296 * (e - (0 | e)) | 0
                }
                for (var r = 2, i = 0; i < 64;) e(r) && (i < 8 && (a[i] = n(t.pow(r, .5))), c[i] = n(t.pow(r, 1 / 3)), i++), r++
            }();
            var l = [],
                u = s.SHA256 = o.extend({
                    _doReset: function() {
                        this._hash = new i.init(a.slice(0))
                    },
                    _doProcessBlock: function(e, t) {
                        for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], s = n[3], a = n[4], u = n[5], d = n[6], f = n[7], p = 0; p < 64; p++) {
                            if (p < 16) l[p] = 0 | e[t + p];
                            else {
                                var h = l[p - 15],
                                    g = (h << 25 | h >>> 7) ^ (h << 14 | h >>> 18) ^ h >>> 3,
                                    v = l[p - 2],
                                    y = (v << 15 | v >>> 17) ^ (v << 13 | v >>> 19) ^ v >>> 10;
                                l[p] = g + l[p - 7] + y + l[p - 16]
                            }
                            var m = r & i ^ r & o ^ i & o,
                                _ = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
                                b = f + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & u ^ ~a & d) + c[p] + l[p];
                            f = d, d = u, u = a, a = s + b | 0, s = o, o = i, i = r, r = b + (_ + m) | 0
                        }
                        n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + o | 0, n[3] = n[3] + s | 0, n[4] = n[4] + a | 0, n[5] = n[5] + u | 0, n[6] = n[6] + d | 0, n[7] = n[7] + f | 0
                    },
                    _doFinalize: function() {
                        var e = this._data,
                            n = e.words,
                            r = 8 * this._nDataBytes,
                            i = 8 * e.sigBytes;
                        return n[i >>> 5] |= 128 << 24 - i % 32, n[14 + (i + 64 >>> 9 << 4)] = t.floor(r / 4294967296), n[15 + (i + 64 >>> 9 << 4)] = r, e.sigBytes = 4 * n.length, this._process(), this._hash
                    },
                    clone: function() {
                        var e = o.clone.call(this);
                        return e._hash = this._hash.clone(), e
                    }
                });
            n.SHA256 = o._createHelper(u), n.HmacSHA256 = o._createHmacHelper(u)
        }(Math), e.SHA256
    }(_n.exports),
    In = new Uint8Array(16);

function Cn() {
    if (!bn && !(bn = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return bn(In)
}
var Tn = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function En(e) {
    return "string" == typeof e && Tn.test(e)
}
for (var An = [], Ln = 0; Ln < 256; ++Ln) An.push((Ln + 256).toString(16).substr(1));

function wn(e, t, n) {
    var r = (e = e || {}).random || (e.rng || Cn)();
    if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
        n = n || 0;
        for (var i = 0; i < 16; ++i) t[n + i] = r[i];
        return t
    }
    return function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = (An[e[t + 0]] + An[e[t + 1]] + An[e[t + 2]] + An[e[t + 3]] + "-" + An[e[t + 4]] + An[e[t + 5]] + "-" + An[e[t + 6]] + An[e[t + 7]] + "-" + An[e[t + 8]] + An[e[t + 9]] + "-" + An[e[t + 10]] + An[e[t + 11]] + An[e[t + 12]] + An[e[t + 13]] + An[e[t + 14]] + An[e[t + 15]]).toLowerCase();
        if (!En(n)) throw TypeError("Stringified UUID is invalid");
        return n
    }(r)
}
var On, Rn = function() {
        function e() {
            this.needsSessionRestore = !1, this.controllerId = ""
        }
        return e.getInstance = function() {
            return e.instance || (e.instance = new e), e.instance
        }, e.resetInstance = function() {
            e.instance.controllerId = ""
        }, Object.defineProperty(e.prototype, "value", {
            get: function() {
                return this.controllerId
            },
            set: function(e) {
                this.controllerId = e
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.init = function() {
            if ("" === this.controllerId) {
                var e = this.getStorageControllerId();
                this.controllerId = e || this.generateControllerId(), this.needsSessionRestore = !1
            } else this.needsSessionRestore = !0
        }, e.prototype.generateControllerId = function() {
            return "".concat(Sn(wn()))
        }, e.prototype.getStorageControllerId = function() {
            return yn.fetchControllerId()
        }, e
    }(),
    Dn = function(e, t) {
        return {
            id: e,
            version: t
        }
    },
    Nn = function(e) {
        if (!e) return [];
        var t, n, r = e.reduce((function(e, t) {
            return ke(ke([], Fe(e), !1), [Dn(t.templateId, t.version)], !1)
        }), []);
        return function(e, t) {
            return e.sort((function(e, t) {
                return e.id > t.id ? 1 : -1
            }))
        }((t = function(e, t) {
            return e.id === t.id && e.version === t.version
        }, n = [], r.forEach((function(e) {
            -1 === n.findIndex((function(n) {
                return t(e, n)
            })) && n.push(e)
        })), n))
    },
    Pn = function() {
        function e() {
            this.API = Mt, this.abTestVariant = "", this.controllerIdInstance = Rn.getInstance(), this.fetchUserCountryPromise = null, this.jsonCacheBustingString = "", this.jsonFileLanguage = "", this.jsonFileVersion = "latest", this.settingsId = "", this.rulesetId = "", this.useEuCdn = !1, this.disableServerConsents = !1, this.aggregatedServicesCache = null, this.translationsCache = null
        }
        return e.getInstance = function() {
            return e.instance || (e.instance = new e), e.instance
        }, e.resetInstance = function() {
            e.instance.jsonCacheBustingString = "", e.instance.jsonFileLanguage = "", e.instance.jsonFileVersion = "latest", e.instance.settingsId = "", e.instance.disableServerConsents = !1
        }, e.prototype.resetAggregatedServicesCache = function() {
            this.aggregatedServicesCache = null
        }, e.prototype.resetTranslationsCache = function() {
            this.translationsCache = null
        }, e.prototype.getAbTestVariant = function() {
            return this.abTestVariant
        }, e.prototype.getJsonFileLanguage = function() {
            return this.jsonFileLanguage
        }, e.prototype.getJsonFileVersion = function() {
            return this.jsonFileVersion
        }, e.prototype.getSettingsId = function() {
            return this.settingsId
        }, e.prototype.getRulesetId = function() {
            return this.rulesetId
        }, e.prototype.getDisableServerConsents = function() {
            return this.disableServerConsents
        }, e.prototype.setJsonCacheBustingString = function(e) {
            this.jsonCacheBustingString = e
        }, e.prototype.setJsonFileLanguage = function(e) {
            this.jsonFileLanguage = e
        }, e.prototype.setJsonFileVersion = function(e) {
            this.jsonFileVersion = e
        }, e.prototype.setDisableServerConsents = function(e) {
            this.disableServerConsents = e
        }, e.prototype.setDomains = function(e, t) {
            this.API = e ? Gt : t ? {
                EU_URI: {
                    AGGREGATOR: Mt.EU_URI.AGGREGATOR,
                    CDN: Mt.EU_URI.CDN,
                    FETCH_CONSENTS: Mt.EU_URI.FETCH_CONSENTS,
                    FETCH_TCF_DATA: Mt.EU_URI.FETCH_TCF_DATA,
                    FETCH_TCF_DATA_V2: Mt.EU_URI.FETCH_TCF_DATA_V2,
                    GRAPHQL: Mt.EU_URI.GRAPHQL
                },
                FOLDER: {
                    RULESET: "configMap",
                    SETTINGS: "settings",
                    TEMPLATES: "consent-templates",
                    TRANSLATIONS: "translations"
                },
                URI: Ne(Ne({
                    AGGREGATOR: "" !== t.aggregator ? "".concat(t.aggregator, "/aggregate/") : Mt.URI.AGGREGATOR,
                    CDN: "" !== t.cdn ? t.cdn : Mt.URI.CDN,
                    RULESET: Mt.URI.RULESET
                }, "" !== t.consents ? {
                    FETCH_CONSENTS: "".concat(t.consents, "/consentsHistory"),
                    FETCH_TCF_DATA: "".concat(t.consents, "/consentsHistoryTCF"),
                    FETCH_TCF_DATA_V2: "".concat(t.consents, "/consentState")
                } : {
                    FETCH_CONSENTS: Mt.URI.FETCH_CONSENTS,
                    FETCH_TCF_DATA: Mt.URI.FETCH_TCF_DATA,
                    FETCH_TCF_DATA_V2: Mt.URI.FETCH_TCF_DATA_V2
                }), {
                    GRAPHQL: "" !== t.graphql ? "".concat(t.graphql, "/graphql") : Mt.URI.GRAPHQL,
                    TRACK_EVENT: "" !== t.trackingEvent ? "".concat(t.trackingEvent, "/uct") : Mt.URI.TRACK_EVENT
                })
            } : Mt
        }, e.prototype.setSettingsId = function(e) {
            this.settingsId = e
        }, e.prototype.setRulesetId = function(e) {
            this.rulesetId = e
        }, e.prototype.setEuMode = function(e) {
            this.useEuCdn = e
        }, e.prototype.isEuMode = function() {
            return this.useEuCdn
        }, e.prototype.getAggregatorUri = function() {
            return this.isEuMode() ? this.API.EU_URI.AGGREGATOR : this.API.URI.AGGREGATOR
        }, e.prototype.getCdnUri = function() {
            return this.isEuMode() ? this.API.EU_URI.CDN : this.API.URI.CDN
        }, e.prototype.getGraphQLUri = function() {
            return this.isEuMode() ? this.API.EU_URI.GRAPHQL : this.API.URI.GRAPHQL
        }, e.prototype.getTcfDataV2Uri = function() {
            return this.isEuMode() ? this.API.EU_URI.FETCH_TCF_DATA_V2 : this.API.URI.FETCH_TCF_DATA_V2
        }, e.prototype.fetchAggregatedServices = function(e, t) {
            return void 0 === t && (t = !0), Pe(this, void 0, void 0, (function() {
                var n, r;
                return Ue(this, (function(i) {
                    switch (i.label) {
                        case 0:
                            return this.aggregatedServicesCache && t ? [2, this.aggregatedServicesCache] : (n = "".concat(this.getAggregatorUri()).concat(this.jsonFileLanguage, "?templates=").concat(e.map((function(e) {
                                return "".concat(e.id, "@").concat(e.version)
                            })).join(",")), [4, $t(n, qe.GENERATE_DATA_PROCESSING_SERVICES)]);
                        case 1:
                            return r = i.sent(), t && (this.aggregatedServicesCache = r.data.templates), [2, r.data.templates]
                    }
                }))
            }))
        }, e.prototype.fetchRuleset = function() {
            var e;
            return Pe(this, void 0, void 0, (function() {
                var t, n, r, i;
                return Ue(this, (function(o) {
                    switch (o.label) {
                        case 0:
                            return o.trys.push([0, 2, , 3]), t = this.createRulesetUrl(), [4, $t(t, qe.RULESET_NOT_FOUND)];
                        case 1:
                            return n = o.sent(), r = null === (e = n.location) || void 0 === e ? void 0 : e.split(","), [2, {
                                defaultRule: n.data.defaultRule,
                                location: {
                                    code: r ? r[0] : "",
                                    name: r ? r[1] : "",
                                    regionCode: r ? r[1].substr(2, 3) : ""
                                },
                                rules: n.data.rules
                            }];
                        case 2:
                            throw (i = o.sent()).statusCode && i.statusCode === st.RESOURCE_NOT_FOUND && (i.errorMessage = qe.RULESET_NOT_FOUND), i;
                        case 3:
                            return [2]
                    }
                }))
            }))
        }, e.prototype.fetchAvailableLanguages = function() {
            return Pe(this, void 0, void 0, (function() {
                var e, t;
                return Ue(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return n.trys.push([0, 2, , 3]), e = this.createAvailableLanguagesUrl(), [4, $t(e, qe.FETCH_AVAILABLE_LANGUAGES)];
                        case 1:
                            return [2, n.sent().data.languagesAvailable];
                        case 2:
                            throw (t = n.sent()).statusCode && t.statusCode === st.RESOURCE_NOT_FOUND && (t.errorMessage = qe.AVAILABLE_LANGUAGES_NOT_FOUND), t;
                        case 3:
                            return [2]
                    }
                }))
            }))
        }, e.prototype.fetchTranslations = function() {
            return Pe(this, void 0, void 0, (function() {
                var e, t, n;
                return Ue(this, (function(r) {
                    switch (r.label) {
                        case 0:
                            if (this.translationsCache) return [2, this.translationsCache];
                            r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), e = this.createLanguagesUrl(), [4, $t(e, qe.FETCH_LEGAL_BASIS)];
                        case 2:
                            return t = r.sent(), this.translationsCache = t.data, [2, t.data];
                        case 3:
                            return (n = r.sent()).statusCode && n.statusCode === st.RESOURCE_NOT_FOUND && (n.errorMessage = qe.FETCH_LEGAL_BASIS), [2, null];
                        case 4:
                            return [2]
                    }
                }))
            }))
        }, e.prototype.fetchCoreJson = function() {
            return Pe(this, void 0, void 0, (function() {
                var e, t;
                return Ue(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return n.trys.push([0, 2, , 3]), e = this.createCoreJsonUrl(), [4, $t(e, qe.FETCH_SETTINGS, {
                                removeTimeout: !0
                            })];
                        case 1:
                            return [2, n.sent().data];
                        case 2:
                            throw (t = n.sent()).statusCode && t.statusCode === st.RESOURCE_NOT_FOUND && (t.errorMessage = qe.SETTINGS_NOT_FOUND), t;
                        case 3:
                            return [2]
                    }
                }))
            }))
        }, e.prototype.fetchDpsJson = function() {
            return Pe(this, void 0, void 0, (function() {
                var e, t, n, r;
                return Ue(this, (function(i) {
                    switch (i.label) {
                        case 0:
                            return i.trys.push([0, 2, , 3]), e = this.createDpsJsonUrl(), [4, $t(e, qe.FETCH_SETTINGS, {
                                removeTimeout: !0
                            })];
                        case 1:
                            return t = i.sent(), n = function(e) {
                                return e.reduce((function(e, t) {
                                    return t.isDeactivated || e.push(t), e
                                }), [])
                            }(t.data.consentTemplates), [2, Ne(Ne({}, t.data), {
                                consentTemplates: n
                            })];
                        case 2:
                            throw (r = i.sent()).statusCode && r.statusCode === st.RESOURCE_NOT_FOUND && (r.errorMessage = qe.SETTINGS_NOT_FOUND), r;
                        case 3:
                            return [2]
                    }
                }))
            }))
        }, e.prototype.fetchSettingsJson = function() {
            return Pe(this, void 0, void 0, (function() {
                var e, t, n, r, i, o;
                return Ue(this, (function(s) {
                    switch (s.label) {
                        case 0:
                            return s.trys.push([0, 7, , 8]), e = this.createSettingsJsonUrl(), [4, $t(e, qe.FETCH_SETTINGS)];
                        case 1:
                            if (t = s.sent(), ["ccpa", "firstLayer", "secondLayer"].forEach((function(e) {
                                    t.data[e] || (t.data[e] = {})
                                })), t.data.tcf2 && (t.data.tcf2.selectedVendorIds = (t.data.tcf2.selectedVendorIds || []).sort((function(e, t) {
                                    return e - t
                                }))), !(t.data && t.data.variants && t.data.variants.enabled && function(e, t) {
                                    try {
                                        JSON.parse(e)
                                    } catch (t) {
                                        return console.warn("Invalid JSON string from ".concat("A/B Testing", ': "').concat(e, '"')), !1
                                    }
                                    return !0
                                }(t.data.variants.experiments))) return [3, 6];
                            if (n = JSON.parse(t.data.variants.experiments), "UC" === t.data.variants.activateWith) return r = Object.keys(n), this.abTestVariant = r[Math.floor(Math.random() * r.length)], [2, rt(n[this.abTestVariant], t.data)];
                            s.label = 2;
                        case 2:
                            return s.trys.push([2, 4, , 5]), [4, it((function() {
                                return !!window.UC_AB_VARIANT
                            }), "window.UC_AB_VARIANT is not defined", 2e3)];
                        case 3:
                            return s.sent(), [3, 5];
                        case 4:
                            return i = s.sent(), console.warn(i), [3, 5];
                        case 5:
                            if (window.UC_AB_VARIANT && n && n[window.UC_AB_VARIANT]) return this.abTestVariant = window.UC_AB_VARIANT, [2, rt(n[window.UC_AB_VARIANT], t.data)];
                            s.label = 6;
                        case 6:
                            return [2, t.data];
                        case 7:
                            throw (o = s.sent()).statusCode && o.statusCode === st.RESOURCE_NOT_FOUND && (o.errorMessage = qe.SETTINGS_NOT_FOUND), o;
                        case 8:
                            return [2]
                    }
                }))
            }))
        }, e.prototype.fetchUserConsents = function() {
            return Pe(this, void 0, void 0, (function() {
                var e;
                return Ue(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return this.getDisableServerConsents() ? [3, 2] : (e = this.createFetchUserConsentsUrl(), [4, $t(e, qe.FETCH_USER_CONSENTS)]);
                        case 1:
                            return [2, t.sent().data.reverse()];
                        case 2:
                            return [2, []]
                    }
                }))
            }))
        }, e.prototype.fetchUserCountry = function() {
            return Pe(this, void 0, void 0, (function() {
                var e, t, n, r, i;
                return Ue(this, (function(o) {
                    return (e = yn.fetchUserCountryResponse()) ? [2, Promise.resolve(e)] : (this.fetchUserCountryPromise || (t = Un(), n = Fn(), r = jt(this.getGraphQLUri(), t, qe.FETCH_USER_COUNTRY, n).then((function(e) {
                        return e.data.clientLocation
                    })), i = new Promise((function(e) {
                        setTimeout(e, 3e3, Ht)
                    })), this.fetchUserCountryPromise = function(e) {
                        return We((t = e.map(We), new Promise((function(e, n) {
                            var r = t.length,
                                i = [],
                                o = function() {
                                    0 == (r -= 1) && e(i)
                                };
                            t.forEach((function(e, t) {
                                e.then((function(e) {
                                    i[t] = e
                                }), n).then(o)
                            }))
                        }))));
                        var t
                    }([r, i]).then((function(e) {
                        return yn.setUserCountryResponse(e), e
                    })).catch((function() {
                        return yn.setUserCountryResponse(Ht), Ht
                    }))), [2, this.fetchUserCountryPromise])
                }))
            }))
        }, e.prototype.fetchUserTcfData = function() {
            return Pe(this, void 0, void 0, (function() {
                var e, t, n, r, i;
                return Ue(this, (function(o) {
                    switch (o.label) {
                        case 0:
                            return this.getDisableServerConsents() ? [3, 2] : (e = this.createFetchUserTcfDataUrl(), [4, $t(e, qe.FETCH_USER_TCF_DATA)]);
                        case 1:
                            return t = o.sent(), n = t.data, r = n.tcString, i = n.meta, [2, Ne({
                                tcString: r
                            }, JSON.parse(i) || {})];
                        case 2:
                            return [2, null]
                    }
                }))
            }))
        }, e.prototype.fetchUserTcfDataV2 = function() {
            return Pe(this, void 0, void 0, (function() {
                var e, t, n, r, i;
                return Ue(this, (function(o) {
                    switch (o.label) {
                        case 0:
                            return e = this.createFetchUserTcfDataV2Url(), [4, $t(e, qe.FETCH_USER_TCF_DATA)];
                        case 1:
                            if ((t = o.sent()).data && t.data.tcf2) return n = t.data.tcf2, r = n.tcString, i = n.meta, [2, Ne({
                                tcString: r
                            }, JSON.parse(i) || {})];
                            throw new Error(qe.FETCH_USER_TCF_DATA)
                    }
                }))
            }))
        }, e.prototype.saveTCFConsents = function(e, t, n, r) {
            return Pe(this, void 0, void 0, (function() {
                var i, o, s, a, c;
                return Ue(this, (function(l) {
                    return i = {
                        consent: {
                            status: !0
                        },
                        id: "tcf2",
                        name: "tcf2",
                        processorId: "abcd",
                        version: "1.0.0"
                    }, o = t.tcString, s = function(e, t) {
                        var n = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                        }
                        return n
                    }(t, ["tcString"]), a = $e(e, i, n, r), c = {
                        consentMeta: {
                            TCF2: JSON.stringify(s)
                        },
                        consentString: {
                            TCF2: o
                        },
                        dataTransferObjects: [a]
                    }, [2, this.saveConsents(c)]
                }))
            }))
        }, e.prototype.saveConsents = function(e) {
            return Pe(this, void 0, void 0, (function() {
                var t, n;
                return Ue(this, (function(r) {
                    switch (r.label) {
                        case 0:
                            if (this.getDisableServerConsents()) return [3, 4];
                            t = Fn(), n = kn(e), r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, jt(this.getGraphQLUri(), n, qe.SAVE_CONSENTS, t)];
                        case 2:
                            return r.sent(), [3, 4];
                        case 3:
                            return r.sent(), yn.appendToConsentsBuffer(e), [3, 4];
                        case 4:
                            return [2]
                    }
                }))
            }))
        }, e.prototype.saveConsentsFromBuffer = function() {
            var e = this;
            if (!this.getDisableServerConsents()) {
                var t = yn.fetchConsentsBuffer();
                Array.isArray(t) && t.length && t.forEach((function(t, n) {
                    var r = 3e3 + 1e3 * n;
                    setTimeout((function() {
                        return Pe(e, void 0, void 0, (function() {
                            var e, n, r;
                            return Ue(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        e = Fn(), n = kn(t.consents), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, jt(this.getGraphQLUri(), n, qe.SAVE_CONSENTS, e)];
                                    case 2:
                                        return i.sent(), yn.removeConsentsBufferItem(t), [3, 4];
                                    case 3:
                                        return r = i.sent(), console.warn(r), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }), r > 0 ? r : 0)
                }))
            }
        }, e.prototype.setTrackingPixel = function(e, t) {
            var n = (new Date).getTime(),
                r = encodeURIComponent(document.location.href),
                i = "".concat(this.API.URI.TRACK_EVENT, "?v=").concat(1, "&cid=").concat(t, "&sid=").concat(this.settingsId, "&t=").concat(e.eventType, "&r=").concat(r, "&cb=").concat(n);
            (new Image).src = i
        }, e.prototype.updateTagLoggerData = function(e) {
            var t = this.settingsId,
                n = window.location.href,
                r = xn({
                    settingsId: t,
                    source: n,
                    targets: e
                });
            this.saveTagLoggerData(r)
        }, e.prototype.addJsonCacheBustingString = function(e) {
            return this.jsonCacheBustingString ? "".concat(e, "?c=").concat(this.jsonCacheBustingString) : e
        }, e.prototype.createAvailableLanguagesUrl = function() {
            return this.addJsonCacheBustingString("".concat(this.getCdnUri(), "/").concat(this.API.FOLDER.SETTINGS, "/").concat(this.settingsId, "/").concat(this.jsonFileVersion, "/languages.json"))
        }, e.prototype.createLanguagesUrl = function() {
            return this.addJsonCacheBustingString("".concat(this.getCdnUri(), "/").concat(this.API.FOLDER.TRANSLATIONS, "/translations-").concat(this.jsonFileLanguage, ".json"))
        }, e.prototype.getSettingsUrl = function() {
            return "".concat(this.getCdnUri(), "/").concat(this.API.FOLDER.SETTINGS, "/").concat(this.settingsId, "/").concat(this.jsonFileVersion)
        }, e.prototype.createCoreJsonUrl = function() {
            return this.addJsonCacheBustingString("".concat(this.getSettingsUrl(), "/core.json"))
        }, e.prototype.createDpsJsonUrl = function() {
            return this.addJsonCacheBustingString("".concat(this.getSettingsUrl(), "/dps-").concat(this.jsonFileLanguage, ".json"))
        }, e.prototype.createSettingsJsonUrl = function() {
            return this.addJsonCacheBustingString("".concat(this.getSettingsUrl(), "/").concat(this.jsonFileLanguage, ".json"))
        }, e.prototype.createFetchUserConsentsUrl = function() {
            return "".concat(this.API.URI.FETCH_CONSENTS, "?controllerId=").concat(this.controllerIdInstance.value)
        }, e.prototype.createFetchUserTcfDataUrl = function() {
            return "".concat(this.API.URI.FETCH_TCF_DATA, "?controllerId=").concat(this.controllerIdInstance.value)
        }, e.prototype.createFetchUserTcfDataV2Url = function() {
            return "".concat(this.getTcfDataV2Uri(), "?controllerId=").concat(this.controllerIdInstance.value, "&tcf2=true&settingsId=").concat(this.settingsId)
        }, e.prototype.createRulesetUrl = function() {
            return "".concat(this.API.URI.RULESET, "/").concat(this.API.FOLDER.RULESET, "/").concat(this.rulesetId, ".json")
        }, e.prototype.saveTagLoggerData = function(e) {
            jt(this.getGraphQLUri(), e, "", Fn())
        }, e
    }(),
    Un = function() {
        return {
            query: "{ clientLocation { countryCode countryName regionCode } }"
        }
    },
    Fn = function() {
        return {
            credentials: "omit",
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                "X-Request-ID": wn()
            },
            mode: "cors"
        }
    },
    kn = function(e) {
        var t = e.dataTransferObjects,
            n = e.consentMeta,
            r = e.consentString;
        return {
            query: "mutation saveConsents($consents: [NewCreateConsentInput], $consentMeta: ConsentMeta, $consentString: ConsentString)\n      {\n        saveConsents(consents: $consents, consentMeta: $consentMeta, consentString: $consentString) { data { consentId } }\n      }",
            variables: {
                consentMeta: n,
                consents: Vn(t),
                consentString: r
            }
        }
    },
    xn = function(e) {
        return {
            operationName: "saveTagLoggerData",
            query: "mutation saveTagLoggerData($settingsId: String, $source: String, $targets: [String])\n        {\n          saveTagLoggerData(settingsId: $settingsId, source: $source, targets: $targets)\n        }",
            variables: {
                settingsId: e.settingsId,
                source: e.source,
                targets: e.targets
            }
        }
    },
    Vn = function(e) {
        return e.map((function(e) {
            return {
                action: e.consent.action,
                appVersion: e.applicationVersion,
                consentStatus: e.consent.status ? "1" : "0",
                consentTemplateId: e.service.id,
                consentTemplateVersion: e.service.version,
                controllerId: e.settings.controllerId,
                language: e.settings.language,
                processorId: e.service.processorId,
                referrerControllerId: e.settings.referrerControllerId,
                settingsId: e.settings.id,
                settingsVersion: e.settings.version,
                updatedBy: e.consent.type
            }
        }))
    };
! function(e) {
    e[e.NO = 0] = "NO", e[e.YES = 1] = "YES", e[e.NOT_SET = 2] = "NOT_SET"
}(On || (On = {}));
var Bn, Mn = function() {
        function e() {
            this.isBotEnabled = !1, this.isBot = On.NOT_SET
        }
        return e.getInstance = function() {
            return e.instance || (e.instance = new e), e.instance
        }, e.resetInstance = function() {
            e.instance.isBot = On.NOT_SET
        }, e.prototype.isRobot = function() {
            if (this.isBot === On.NOT_SET)
                if (this.isBotEnabled) {
                    var e = window.navigator.userAgent,
                        t = new RegExp("bingbot/|BingPreview/|DuckDuckBot/|Google Page Speed Insights|Google PP|Google Search Console|Google Web Preview|Googlebot/|Googlebot-Image/|Googlebot-Mobile/|Googlebot-News|Googlebot-Video/|Google-SearchByImage|Google-Structured-Data-Testing-Tool|Chrome-Lighthouse|YahooSeeker|YahooCacheSystem|Yahoo! Site Explorer Feed Validator|Yahoo! Slurp|Slurp/", "i");
                    this.isBot = t.test(e) ? On.YES : On.NO
                } else this.isBot = On.NO;
            return this.isBot === On.YES
        }, e
    }(),
    Gn = ["B1Hk_zoTX", "ByzZ5EsOsZX", "dqFgQeZH", "LykAT-gy", "twMyStLkn", "pxiRY9112", "UekC8ye4S", "DHS2sEi4b", "S1_9Vsuj-Q", "dyHOCwp5Y"],
    Hn = ["HkocEodjb7", "87JYasXPF"],
    $n = function() {
        function e() {
            this.dataLayerNames = [], this.windowEventNames = [], this.dataLayer = new Map, this.blockDataLayerPush = !1
        }
        return e.getInstance = function() {
            return e.instance || (e.instance = new e), e.instance
        }, e.prototype.setBlockDataLayerPush = function(e) {
            this.blockDataLayerPush = e
        }, e.prototype.shouldBlockDataLayerPush = function() {
            return this.blockDataLayerPush
        }, e.resetInstance = function() {
            e.instance.dataLayerNames = [], e.instance.windowEventNames = [], e.instance.dataLayer = new Map
        }, e.prototype.init = function(e) {
            var t = this;
            e.forEach((function(e) {
                e.type === Ce.DATA_LAYER ? t.dataLayerNames = He(e.names, []) : e.type === Ce.WINDOW_EVENT && (t.windowEventNames = He(e.names, []))
            }))
        }, e.prototype.setDataLayer = function(e, t) {
            this.dataLayer.set(t, e)
        }, e.prototype.getDataLayer = function() {
            return this.dataLayer
        }, e.prototype.dispatch = function(e, t, n) {
            Me(e) && (this.pushEventsToDataLayer(e, t, n), this.dispatchWindowEvents(e, n))
        }, e.prototype.isValidDataLayer = function(e) {
            return window[e] && (Array.isArray(window[e]) || Object.prototype.hasOwnProperty.call(window[e], "push"))
        }, e.prototype.pushEventsToDataLayer = function(e, t, n) {
            var r = this;
            Me(this.dataLayerNames) && this.dataLayerNames.forEach((function(i) {
                if (window[i] = He(window[i], []), !r.isValidDataLayer(i)) throw Error("DataLayer: ".concat(i, " is not of a valid type!"));
                if (t && "dataLayer" === i) {
                    var o = !1,
                        s = !1,
                        a = !1,
                        c = !1,
                        l = !1;
                    Yn("set", "developer_id.dOThhZD", !0), e.forEach((function(e) {
                        var t = e.service.id,
                            n = e.consent,
                            r = n.status,
                            i = n.type,
                            s = n.action;
                        Hn.includes(t) && ("explicit" === i || "implicit" === i && "onNonEURegion" === s) && (o = r, l = !0), Gn.includes(t) && ("explicit" === i || "implicit" === i && "onNonEURegion" === s) && (c = !0, l = !0, r || (a = !0))
                    })), c && !a && (s = !0), l && Yn("consent", "update", {
                        ad_storage: s ? "granted" : "denied",
                        analytics_storage: o ? "granted" : "denied"
                    }), Yn("set", "ads_data_redaction", !s)
                }
                window[i].push(jn(e, n)), r.setDataLayer(window[i], i), r.shouldBlockDataLayerPush() || "explicit" === e[0].consent.type && e.forEach((function(e) {
                    e.consent.status || window[i].push({
                        event: "".concat(e.service.name, " EXPLICIT_DENY")
                    })
                }))
            }))
        }, e.prototype.dispatchWindowEvents = function(e, t) {
            if (Me(this.windowEventNames)) {
                var n = jn(e, t);
                this.windowEventNames.forEach((function(e) {
                    var t = new window.CustomEvent(e, {
                        detail: n
                    });
                    window.dispatchEvent(t)
                }))
            }
        }, e
    }(),
    jn = function(e, t) {
        var n = {
            action: null != t ? t : e[0].consent.action,
            event: "consent_status",
            type: e[0].consent.type
        };
        return e.forEach((function(e) {
            var t;
            n = Ne(Ne({}, n), ((t = {})[e.service.name] = e.consent.status, t))
        })), n
    },
    Yn = function() {
        window.dataLayer.push(arguments)
    },
    Wn = "en",
    zn = "https://api.usercentrics.eu/tcf2/",
    Jn = "https://config.eu.usercentrics.eu/tcf2/",
    qn = "[LANG].json",
    Kn = "en-v2.json",
    Xn = 864e5,
    Zn = 1,
    Qn = 365,
    er = ["onEssentialChange", "onInitialPageLoad", "onNonEURegion", "onSessionRestored"];
! function(e) {
    e.TEXT_JAVASCRIPT = "text/javascript", e.TEXT_PLAIN = "text/plain"
}(Bn || (Bn = {}));
var tr, nr, rr, ir, or, sr, ar = function() {
        function e() {}
        return e.enableScriptsForServicesWithConsent = function(t) {
            var n = e.getDisabledScripts();
            Array.prototype.forEach.call(n, (function(n) {
                e.disabledScriptHasConsent(t, n) && e.enableScript(n)
            }))
        }, e.getDisabledScripts = function() {
            return document.querySelectorAll("script[".concat("data-usercentrics", '][type="').concat(Bn.TEXT_PLAIN, '"]'))
        }, e.disabledScriptHasConsent = function(e, t) {
            return e.some((function(e) {
                return e.name === t.getAttribute("data-usercentrics")
            }))
        }, e.enableScript = function(t) {
            var n, r, i;
            r = t.src ? e.createSrcScriptTag(t) : e.createInlineScriptTag(t), (i = (n = t).parentNode) && i.replaceChild(r, n)
        }, e.createSrcScriptTag = function(t) {
            var n = e.cloneScriptTag(t);
            return n.removeAttribute("data-usercentrics"), n.type = Bn.TEXT_JAVASCRIPT, n
        }, e.createInlineScriptTag = function(t) {
            var n = e.cloneScriptTag(t);
            n.removeAttribute("data-usercentrics");
            var r = document.createTextNode(t.text);
            return n.appendChild(r), n.type = Bn.TEXT_JAVASCRIPT, n
        }, e.cloneScriptTag = function(e) {
            var t = document.createElement("script");
            return Array.from(e.attributes).forEach((function(e) {
                t.setAttribute(e.name, e.value)
            })), t
        }, e
    }(),
    cr = function(e, t, n) {
        var r, i;
        this.anyDomain = e.anyDomain || "any domain (ex. first party cookie)", this.cookieRefresh = (null == t ? void 0 : t.COOKIE_REFRESH) || (null === (r = null == n ? void 0 : n.labels) || void 0 === r ? void 0 : r.COOKIE_REFRESH) || "Cookie Refresh", this.cookieStorage = (null == t ? void 0 : t.COOKIE_STORAGE) || (null === (i = null == n ? void 0 : n.labels) || void 0 === i ? void 0 : i.COOKIE_STORAGE) || "Cookie Storage", this.day = e.day, this.days = e.days, this.description = e.storageInformationDescription || "Below you can see the longest potential duration for storage on a device, as set when using the cookie method of storage and if there are any other methods used.", this.domain = e.domain || "Domain", this.duration = e.duration || "Duration", this.error = e.informationLoadingNotPossible || "Sorry; we could not load the required information.", this.hour = e.hour, this.hours = e.hours, this.identifier = e.identifier || "Identifier", this.loading = e.loadingStorageInformation || "Loading storage information", this.maximumAge = e.maximumAgeCookieStorage || "Maximum age of cookie storage", this.minute = e.minute, this.minutes = e.minutes, this.month = e.month, this.months = e.months, this.multipleDomains = e.multipleDomains || "multiple subdomains may exist", this.name = e.name || "Name", this.no = e.no || "no", this.nonCookieStorage = e.nonCookieStorage || "Non-cookie storage", this.purposes = e.purposes || "Purposes", this.second = e.second || "second", this.seconds = e.seconds || "seconds", this.session = e.session || "Session", this.storedInformation = e.storedInformation || "Stored Information", this.storedInformationDescription = e.storedInformationDescription || "This service uses different means of storing information on a user???s device as listed below.", this.title = e.storageInformation || "Storage Information", this.titleDetailed = e.detailedStorageInformation || "Detailed Storage Information", this.tryAgain = e.tryAgain || "Try again?", this.type = e.type || "Type", this.year = e.year, this.years = e.years, this.yes = e.yes || "yes"
    },
    lr = function(e, t) {
        var n = e.defaultConsentStatus;
        return {
            history: [],
            status: !!(null == t ? void 0 : t.isEssential) || n
        }
    },
    ur = function(e, t, n) {
        var r;
        this.deviceStorage = null;
        var i = null == n ? void 0 : n.find((function(t) {
                return e.templateId === t.templateId && e.version === t.version
            })),
            o = (null == t ? void 0 : t.legalBasis) && e.legalBasisList ? e.legalBasisList.reduce((function(e, n) {
                return (null == t ? void 0 : t.legalBasis[n]) ? ke(ke([], Fe(e), !1), [null == t ? void 0 : t.legalBasis[n]], !1) : e
            }), []) : [];
        this.description = function(e, t) {
            return e.description || (null == t ? void 0 : t.descriptionOfService) || (null == t ? void 0 : t.description) || ""
        }(e, i), this.deviceStorage = He(null == i ? void 0 : i.deviceStorage, null), this.id = e.templateId, this.legalBasis = i && !e.disableLegalBasis ? function(e, t) {
            var n = e.legalBasisList,
                r = e.legalGround;
            return t.length > 0 ? t : function(e, t) {
                return Me(e) ? e : [t]
            }(n, r)
        }(i, o) : [], this.name = (null === (r = e._meta) || void 0 === r ? void 0 : r.name) || (null == i ? void 0 : i.dataProcessor) || (null == i ? void 0 : i.dataProcessors[0]) || ""
    },
    dr = function(e) {
        function t(t, n, r, i) {
            var o, s, a, c, l, u = e.call(this) || this,
                d = t.labels;
            return u.ariaLabels = (null == r ? void 0 : r.labelsAria) || Pt, u.categories = n.categories.map((function(e) {
                return {
                    description: e.description,
                    label: e.label,
                    slug: e.categorySlug
                }
            })), u.cookieInformation = new cr(d, null, r), u.general = {
                back: (null === (o = null == r ? void 0 : r.labels) || void 0 === o ? void 0 : o.BACK) || "Back",
                consentGiven: d.accepted,
                consentNotGiven: d.denied,
                consentType: d.consentType,
                controllerId: "Controller ID",
                copy: d.copy,
                date: d.date,
                decision: d.decision,
                details: (null === (s = null == r ? void 0 : r.labels) || void 0 === s ? void 0 : s.DETAILS) || "Details",
                explicit: d.explicit,
                implicit: d.implicit,
                implicitNo: d.noImplicit,
                implicitYes: d.yesImplicit,
                showLess: d.readLess,
                showMore: d.btnBannerReadMore || d.showMore,
                subservice: (null === (a = null == r ? void 0 : r.labels) || void 0 === a ? void 0 : a.SUB_SERVICE) || "Subservice",
                subservices: (null === (c = null == r ? void 0 : r.labels) || void 0 === c ? void 0 : c.SUB_SERVICES) || "Subservices",
                subservicesDescription: (null === (l = null == r ? void 0 : r.labels) || void 0 === l ? void 0 : l.SUB_SERVICES_DESCRIPTION) || "Below you can find all the services that are subordinate to this service. The current consent status of this service applies to all subservices."
            }, u.links = {
                cookiePolicy: {
                    ariaLabel: Pt.cookiePolicyButton,
                    label: He(d.cookiePolicyLinkText, ""),
                    url: t.cookiePolicyUrl
                },
                imprint: {
                    ariaLabel: Pt.imprintButton,
                    label: d.imprintLinkText || null,
                    url: t.imprintUrl
                },
                privacyPolicy: {
                    ariaLabel: Pt.privacyPolicyButton,
                    label: d.privacyPolicyLinkText,
                    url: t.privacyPolicyUrl
                }
            }, u.poweredBy = {
                label: "Powered by",
                partnerUrlLabel: He(d.partnerPoweredByLinkText, null),
                urlLabel: "Usercentrics Consent Management"
            }, u.service = {
                dataCollected: {
                    description: d.dataCollectedInfo,
                    title: d.dataCollectedList
                },
                dataDistribution: {
                    processingLocationDescription: d.locationofProcessingInfo,
                    processingLocationTitle: d.locationOfProcessing,
                    thirdPartyCountriesDescription: d.transferToThirdCountriesInfo,
                    thirdPartyCountriesTitle: d.transferToThirdCountries
                },
                dataProtectionOfficer: {
                    description: d.dataProtectionOfficerInfo,
                    title: d.dataProtectionOfficer
                },
                dataPurposes: {
                    description: d.dataPurposesInfo,
                    title: d.dataPurposes
                },
                dataRecipients: {
                    description: d.dataRecipientsListInfo,
                    title: d.dataRecipientsList
                },
                descriptionTitle: d.descriptionOfService,
                history: {
                    description: null,
                    title: d.history
                },
                legalBasis: {
                    description: d.legalBasisInfo,
                    title: d.legalBasisList
                },
                processingCompanyTitle: d.processingCompany,
                retentionPeriod: {
                    description: d.retentionPeriodInfo,
                    title: d.retentionPeriod
                },
                technologiesUsed: {
                    description: d.technologiesUsedInfo,
                    title: d.technologiesUsed
                },
                urls: {
                    cookiePolicyTitle: d.cookiePolicyInfo,
                    optOutTitle: d.optOut,
                    privacyPolicyTitle: d.policyOf
                }
            }, u.services = n.consentTemplates.reduce((function(e, t) {
                var n = new ur(t, r, i);
                return ke(ke([], Fe(e), !1), [n], !1)
            }), []), u
        }
        return me(t, e), t
    }((function() {
        this.ariaLabels = Pt
    })),
    fr = function(e) {
        function t(t, n, r, i) {
            var o = e.call(this, t, n, r, i) || this;
            return o.buttons = {
                optOutNotice: t.ccpa.optOutNoticeLabel || "Do not sell my personal information",
                save: t.ccpa.btnSave || "okay",
                showSecondLayer: t.labels.btnMore
            }, o.firstLayer = {
                description: {
                    default: t.ccpa.firstLayerDescription || "",
                    short: t.ccpa.firstLayerMobileDescription || ""
                },
                title: t.ccpa.firstLayerTitle || ""
            }, o.secondLayer = {
                categoryTab: t.secondLayer.tabsCategoriesLabel,
                description: t.ccpa.secondLayerDescription || "",
                serviceTab: t.secondLayer.tabsServicesLabel,
                title: t.ccpa.secondLayerTitle || ""
            }, o
        }
        return me(t, e), t
    }(dr),
    pr = function(e, t) {
        var n;
        this.acceptAllImplicitlyOutsideEU = e.displayOnlyForEU, this.consentSharingIFrameIsActive = e.consentSharingIFrameIsActive, this.dataExchangeSettings = e.dataExchangeOnPage.reduce((function(e, t) {
            return t.type === Ze.DATA_LAYER ? e.push({
                names: t.names,
                type: Ce.DATA_LAYER
            }) : t.type === Ze.WINDOW_EVENT && e.push({
                names: t.names,
                type: Ce.WINDOW_EVENT
            }), e
        }), []), this.googleConsentMode = e.googleConsentMode, this.id = e.settingsId, this.isCcpaEnabled = (null === (n = e.ccpa) || void 0 === n ? void 0 : n.isActive) || !1, this.isEmbeddingsEnabled = !0, this.isTagLoggerActive = e.tagLoggerIsActive, this.isTcfEnabled = e.tcf2Enabled || !1, this.language = {
            available: e.languagesAvailable,
            selected: t
        }, this.reshowBanner = He(e.reshowBanner, -1), this.showFirstLayerOnVersionChange = e.showInitialViewForVersionChange.map((function(e) {
            switch (e) {
                case et.MAJOR:
                    return Te.MAJOR;
                case et.MINOR:
                    return Te.MINOR;
                default:
                case et.PATCH:
                    return Te.PATCH
            }
        })), this.version = e.version
    },
    hr = function(e) {
        function t(t, n, r, i) {
            var o, s = e.call(this, t, n, r, i) || this;
            return s.buttons = {
                acceptAll: t.labels.btnAcceptAll,
                cnilDeny: (null === (o = null == r ? void 0 : r.labels) || void 0 === o ? void 0 : o.CNIL_DENY_LINK_TEXT) || "Continuer sans accepter",
                denyAll: t.labels.btnDeny,
                save: t.labels.btnSave,
                showSecondLayer: t.labels.btnMore
            }, s.firstLayer = {
                description: {
                    default: t.bannerMessage || "",
                    short: t.bannerMobileDescription || ""
                },
                title: He(t.labels.firstLayerTitle, "Privacy Settings")
            }, s.secondLayer = {
                acceptButtonLabel: t.secondLayer.acceptButtonText,
                categoryTab: t.secondLayer.tabsCategoriesLabel,
                denyButtonLabel: t.secondLayer.denyButtonText,
                description: t.labels.titleCorner,
                serviceTab: t.secondLayer.tabsServicesLabel,
                title: t.labels.headerCorner
            }, s
        }
        return me(t, e), t
    }(dr),
    gr = ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"],
    vr = function() {
        function e() {
            this.apiInstance = Pn.getInstance(), this.userCountryData = {}
        }
        return e.getInstance = function() {
            return e.instance || (e.instance = new e), e.instance
        }, e.resetInstance = function() {
            e.instance.userCountryData = {}
        }, e.prototype.setUserCountryData = function(e) {
            this.userCountryData = e
        }, e.prototype.getUserCountryData = function() {
            return Pe(this, void 0, void 0, (function() {
                var e;
                return Ue(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return Ge(this.userCountryData) ? [3, 2] : [4, this.apiInstance.fetchUserCountry()];
                        case 1:
                            e = t.sent(), this.setUserCountryData(yr(e)), t.label = 2;
                        case 2:
                            return [2, this.userCountryData]
                    }
                }))
            }))
        }, e.prototype.getIsUserInCalifornia = function() {
            return Pe(this, void 0, void 0, (function() {
                return Ue(this, (function(e) {
                    return [2, this.getIsUserInUS("CA")]
                }))
            }))
        }, e.prototype.getIsUserInEU = function() {
            return Pe(this, void 0, void 0, (function() {
                var e;
                return Ue(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.getUserCountryData()];
                        case 1:
                            return e = t.sent(), [2, Ve(gr, e.code.toUpperCase())]
                    }
                }))
            }))
        }, e.prototype.getIsUserInUS = function(e) {
            return Pe(this, void 0, void 0, (function() {
                var t;
                return Ue(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, this.getUserCountryData()];
                        case 1:
                            return [2, "US" === (t = n.sent()).code && (!e || t.regionCode === e)]
                    }
                }))
            }))
        }, e.mapUserCountryData = function(e) {
            return {
                countryCode: e.code,
                countryName: e.name,
                regionCode: e.regionCode
            }
        }, e
    }(),
    yr = function(e) {
        return {
            code: e.countryCode,
            name: e.countryName,
            regionCode: e.regionCode
        }
    },
    mr = function(e) {
        this.cookieMaxAgeSeconds = null, this.cookieRefresh = null, this.dataCollected = [], this.dataDistribution = null, this.dataProtectionOfficer = null, this.dataPurposes = [], this.dataRecipients = [], this.deviceStorageDisclosureUrl = null, this.language = null, this.processingCompany = null, this.retentionPeriodDescription = null, this.technologiesUsed = [], this.urls = null, this.usesCookies = null, this.usesNonCookieAccess = null, this.cookieMaxAgeSeconds = He(null == e ? void 0 : e.cookieMaxAgeSeconds, null), this.cookieRefresh = He(null == e ? void 0 : e.cookieRefresh, null), this.dataCollected = e ? _r(e, Qe.DATA_COLLECTED_LIST) : [], this.dataDistribution = e ? Sr(e) : null, this.dataProtectionOfficer = He(null == e ? void 0 : e.dataProtectionOfficer, null), this.dataPurposes = e ? br(e) : [], this.dataRecipients = e ? _r(e, Qe.DATA_RECIPIENTS_LIST) : [], this.deviceStorageDisclosureUrl = He(null == e ? void 0 : e.deviceStorageDisclosureUrl, null), this.language = e ? Ir(e) : null, this.processingCompany = e ? Cr(e) : null, this.retentionPeriodDescription = e ? Tr(e) : null, this.technologiesUsed = e ? _r(e, Qe.TECHNOLOGY_USED) : [], this.usesCookies = He(null == e ? void 0 : e.usesCookies, null), this.usesNonCookieAccess = He(null == e ? void 0 : e.usesNonCookieAccess, null), this.urls = e ? Er(e) : null
    },
    _r = function(e, t) {
        var n;
        return Me(e[t]) ? e[t] : (null === (n = e[t]) || void 0 === n ? void 0 : n.length) > 0 ? [e[t]] : []
    },
    br = function(e) {
        var t = _r(e, Qe.DATA_PURPOSES_LIST);
        return Me(t) ? t : e.dataPurposes
    },
    Sr = function(e) {
        return {
            processingLocation: e.locationOfProcessing,
            thirdPartyCountries: e.thirdCountryTransfer
        }
    },
    Ir = function(e) {
        return {
            available: e.languagesAvailable,
            selected: e.language
        }
    },
    Cr = function(e) {
        return {
            address: e.addressOfProcessingCompany,
            dataProtectionOfficer: e.dataProtectionOfficer,
            name: e.nameOfProcessingCompany || e.processingCompany
        }
    },
    Tr = function(e) {
        var t;
        return e.retentionPeriodDescription || (null === (t = e.retentionPeriodList) || void 0 === t ? void 0 : t[0]) || ""
    },
    Er = function(e) {
        return {
            cookiePolicy: e.cookiePolicyURL,
            dataProcessingAgreement: e.linkToDpa,
            optOut: e.optOutUrl,
            privacyPolicy: e.privacyPolicyURL || e.policyOfProcessorUrl
        }
    },
    Ar = function(e) {
        function t(t, n, r, i) {
            var o, s = e.call(this, t, n, r, i) || this,
                a = t.labels,
                c = t.tcf2;
            return s.cookieInformation.purposes = c.labelsPurposes, s.buttons = {
                acceptAll: c.buttonsAcceptAllLabel,
                denyAll: c.buttonsDenyAllLabel,
                manageSettings: c.linksManageSettingsLabel,
                save: c.buttonsSaveLabel,
                showVendorTab: c.linksVendorListLinkLabel
            }, s.firstLayer = {
                description: {
                    additionalInfo: c.firstLayerAdditionalInfo || null,
                    dataSharedOutsideEUText: c.showDataSharedOutsideEUText && c.dataSharedOutsideEUText ? c.dataSharedOutsideEUText : null,
                    default: c.firstLayerDescription,
                    resurfaceNote: c.firstLayerNoteResurface || null
                },
                disclaimer: {
                    serviceScope: c.firstLayerNoteService
                },
                title: c.firstLayerTitle
            }, s.secondLayer = {
                dataSharedOutsideEU: {
                    text: (null === (o = null == r ? void 0 : r.labels) || void 0 === o ? void 0 : o.VENDORS_OUTSIDE_EU) || null,
                    title: a.transferToThirdCountries
                },
                description: c.secondLayerDescription,
                purposesTab: c.tabsPurposeLabel,
                title: c.secondLayerTitle,
                vendorsTab: c.tabsVendorsLabel
            }, s.titles = {
                features: c.labelsFeatures,
                iabVendors: c.labelsIabVendors,
                nonIabPurposes: c.labelsNonIabPurposes,
                nonIabVendors: c.labelsNonIabVendors,
                purposes: c.labelsPurposes
            }, s.toggles = {
                consent: t.tcf2.togglesConsentToggleLabel,
                legitimateInterest: t.tcf2.togglesLegIntToggleLabel,
                specialFeaturesToggle: {
                    offLabel: t.tcf2.togglesSpecialFeaturesToggleOff,
                    onLabel: t.tcf2.togglesSpecialFeaturesToggleOn
                }
            }, s.vendor = {
                features: c.vendorFeatures,
                legitimateInterest: c.vendorLegitimateInterestPurposes,
                privacyPolicy: a.privacyPolicyLinkText,
                purposes: c.vendorPurpose,
                specialFeatures: c.vendorSpecialFeatures,
                specialPurposes: c.vendorSpecialPurposes,
                toggleAll: c.labelsActivateAllVendors
            }, s
        }
        return me(t, e), t
    }(dr),
    Lr = function() {
        function e() {
            this.aggregatedServices = [], this.allLegacyServicesHaveName = !1, this.isVariantLoaded = !1, this.isAggregatorLoaded = !1, this.language = "", this.translations = null, this.botInstance = Mn.getInstance(), this.locationInstance = vr.getInstance(), this._core = null, this._coreJson = null, this._data = null, this._dpsJson = null, this._labels = null, this._legacySettings = null, this._ui = null, this.controllerIdInstance = Rn.getInstance(), this.acceptAllImplicitlyOnInit = null
        }
        return e.getInstance = function() {
            return e.instance || (e.instance = new e), e.instance
        }, e.resetInstance = function() {
            e.instance.allLegacyServicesHaveName = !1, e.instance.core = null, e.instance.data = null, e.instance.labels = null, e.instance.legacySettings = null, e.instance.ui = null, e.instance.dpsJson = null, e.instance.coreJson = null
        }, Object.defineProperty(e.prototype, "core", {
            get: function() {
                return this._core
            },
            set: function(e) {
                this._core = e
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "coreJson", {
            get: function() {
                return this._coreJson
            },
            set: function(e) {
                this._coreJson = e
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "data", {
            get: function() {
                return this._data
            },
            set: function(e) {
                this._data = e
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "dpsJson", {
            get: function() {
                return this._dpsJson
            },
            set: function(e) {
                this._dpsJson = e
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "labels", {
            get: function() {
                return this._labels
            },
            set: function(e) {
                this._labels = e
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "legacySettings", {
            get: function() {
                return this._legacySettings
            },
            set: function(e) {
                this._legacySettings = e
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "ui", {
            get: function() {
                return this._ui
            },
            set: function(e) {
                this._ui = e
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.init = function(e, t, n) {
            return Pe(this, void 0, void 0, (function() {
                return Ue(this, (function(r) {
                    return this.language = n, this.core = new pr(e, n), this.coreJson = e, this.dpsJson = t, this.allLegacyServicesHaveName = this.checkIfServiceNameExists(t.consentTemplates), [2]
                }))
            }))
        }, e.prototype.initData = function(e, t, n) {
            return void 0 === n && (n = !0), Pe(this, void 0, void 0, (function() {
                var r, i, o, s, a, c = this;
                return Ue(this, (function(l) {
                    switch (l.label) {
                        case 0:
                            if (i = (r = this).coreJson, o = r.dpsJson, s = r.legacySettings, !i || !o) return [2];
                            switch (a = this.controllerIdInstance.value, e) {
                                case 0:
                                    return [3, 1];
                                case 2:
                                    return [3, 3];
                                case 1:
                                    return [3, 5]
                            }
                            return [3, 7];
                        case 1:
                            return [4, dynamicImportPolyfill("./CcpaData-fa7dd539-fc2d4c16.js",
                                import.meta.url).then((function(e) {
                                var t = new e.default(i, o, a);
                                c.data = t
                            }))];
                        case 2:
                            return l.sent(), [3, 8];
                        case 3:
                            return s ? [4, dynamicImportPolyfill("./TcfData-c63d0546-9b1b47fb.js",
                                import.meta.url).then((function(e) {
                                var t = e.default;
                                return Pe(c, void 0, void 0, (function() {
                                    var e, r;
                                    return Ue(this, (function(c) {
                                        switch (c.label) {
                                            case 0:
                                                return (e = this.getDataTransferSettings()) && i.tcf2 ? (r = new t(s, i.tcf2, o, e, a, this.language), this.data = r, n ? [4, r.init()] : [3, 2]) : [3, 2];
                                            case 1:
                                                c.sent(), c.label = 2;
                                            case 2:
                                                return [2]
                                        }
                                    }))
                                }))
                            }))] : [2];
                        case 4:
                            return l.sent(), [3, 8];
                        case 5:
                            return [4, dynamicImportPolyfill("./DefaultData-2e7cd642-71e55474.js",
                                import.meta.url).then((function(e) {
                                var n = new e.default(o, a, t);
                                c.data = n
                            }))];
                        case 6:
                            return l.sent(), [3, 8];
                        case 7:
                            console.error("Usercentrics: Unknown variant"), l.label = 8;
                        case 8:
                            return this.isVariantLoaded = !0, [2]
                    }
                }))
            }))
        }, e.prototype.checkIfServiceNameExists = function(e) {
            return e.every((function(e) {
                var t;
                return null != (null === (t = e._meta) || void 0 === t ? void 0 : t.name)
            }))
        }, e.prototype.initLabels = function(e, t, n) {
            var r = this.dpsJson,
                i = this.legacySettings;
            if (i && this.core && r) switch (e) {
                case 0:
                    var o = new fr(i, r, t, n);
                    this.labels = o;
                    break;
                case 1:
                    var s = new hr(i, r, t, n);
                    this.labels = s;
                    break;
                case 2:
                    var a = new Ar(i, r, t, n);
                    this.labels = a;
                    break;
                default:
                    console.error("Usercentrics: Unknown variant")
            } else console.error("Usercentrics: You have to call the init method before!")
        }, e.prototype.initUI = function(e, t) {
            return Pe(this, void 0, void 0, (function() {
                var n, r, i, o = this;
                return Ue(this, (function(s) {
                    switch (s.label) {
                        case 0:
                            return r = (n = this).coreJson, i = n.legacySettings, r ? 2 !== e ? [3, 2] : [4, dynamicImportPolyfill("./PrivacyButtonUI-d81a5da5-84f8ded6.js",
                                import.meta.url).then((function(e) {
                                var t = new e.default(r);
                                o.ui = t
                            }))] : [2];
                        case 1:
                            return s.sent(), [2];
                        case 2:
                            if (!i) return [2];
                            switch (t) {
                                case 0:
                                    return [3, 3];
                                case 1:
                                    return [3, 5];
                                case 2:
                                    return [3, 7]
                            }
                            return [3, 9];
                        case 3:
                            return [4, dynamicImportPolyfill("./CcpaUI-18d8da5e-2f966ffd.js",
                                import.meta.url).then((function(e) {
                                var t = new e.default(r, i);
                                o.ui = t
                            }))];
                        case 4:
                            return s.sent(), [3, 10];
                        case 5:
                            return [4, dynamicImportPolyfill("./DefaultUI-ab93b47d-0e81ee8c.js",
                                import.meta.url).then((function(e) {
                                var t = new e.default(r, i);
                                o.ui = t
                            }))];
                        case 6:
                            return s.sent(), [3, 10];
                        case 7:
                            return [4, dynamicImportPolyfill("./TcfUI-f7f6a57a-1d7fdfa3.js",
                                import.meta.url).then((function(e) {
                                var t = new e.default(r, i);
                                o.ui = t
                            }))];
                        case 8:
                            return s.sent(), [3, 10];
                        case 9:
                            console.error("Usercentrics: Unknown variant"), s.label = 10;
                        case 10:
                            return [2]
                    }
                }))
            }))
        }, e.prototype.getCcpaData = function() {
            return vt(this.data) ? this.data : null
        }, e.prototype.getDefaultData = function() {
            return function(e) {
                return null != e && !vt(e) && !yt(e)
            }(this.data) ? this.data : null
        }, e.prototype.getTcfData = function() {
            return yt(this.data) ? this.data : null
        }, e.prototype.getCcpaLabels = function() {
            return mt(this.labels) ? this.labels : null
        }, e.prototype.getDefaultLabels = function() {
            return bt(this.labels) ? this.labels : null
        }, e.prototype.getTcfLabels = function() {
            return _t(this.labels) ? this.labels : null
        }, e.prototype.getCcpaUI = function() {
            return St(this.ui) ? this.ui : null
        }, e.prototype.getDefaultUI = function() {
            return Ct(this.ui) ? this.ui : null
        }, e.prototype.getTcfUI = function() {
            return It(this.ui) ? this.ui : null
        }, e.prototype.getDataExchangeSettings = function() {
            return this.core ? this.core.dataExchangeSettings : []
        }, e.prototype.getCategoriesData = function() {
            return this.data ? this.data.categories : []
        }, e.prototype.getCategoriesBaseData = function() {
            var e = this;
            return this.data ? this.data.categories.map((function(t) {
                return {
                    isEssential: t.isEssential,
                    isHidden: t.isHidden,
                    services: e.getServicesBaseInfo(),
                    slug: t.slug
                }
            })) : []
        }, e.prototype.getCategoriesLabels = function() {
            return this.labels ? this.labels.categories : []
        }, e.prototype.getCategoriesDataAndLabels = function() {
            return function(e, t, n) {
                return e.reduce((function(e, r) {
                    var i = t.find((function(e) {
                        return e.slug === r.slug
                    }));
                    return i ? ke(ke([], Fe(e), !1), [Ne(Ne(Ne({}, i), r), {
                        services: gt(r.services, n)
                    })], !1) : e
                }), [])
            }(this.getCategoriesData(), this.getCategoriesLabels(), this.getServicesLabels())
        }, e.prototype.getCategoriesBaseInfo = function() {
            return this.getCategoriesDataAndLabels()
        }, e.prototype.getCategoriesFullInfo = function(e, t) {
            return Pe(this, void 0, void 0, (function() {
                return Ue(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return this.isAggregatorLoaded ? [3, 2] : [4, this.extendServices(e, t)];
                        case 1:
                            n.sent(), n.label = 2;
                        case 2:
                            return [2, this.getCategoriesDataAndLabels()]
                    }
                }))
            }))
        }, e.prototype.getCategoryBySlug = function(e) {
            return this.getCategoriesDataAndLabels().find((function(t) {
                return t.slug === e
            }))
        }, e.prototype.getDataTransferSettings = function(e) {
            return this.core ? {
                controllerId: this.controllerIdInstance.value,
                id: this.core.id,
                selectedLanguage: this.core.language.selected,
                version: e || this.core.version
            } : null
        }, e.prototype.getEssentialCategories = function() {
            return this.getCategoriesDataAndLabels().reduce((function(e, t) {
                return t.isEssential ? ke(ke([], Fe(e), !1), [t], !1) : e
            }), [])
        }, e.prototype.getEssentialCategoriesData = function() {
            return this.getCategoriesData().reduce((function(e, t) {
                return t.isEssential ? ke(ke([], Fe(e), !1), [t], !1) : e
            }), [])
        }, e.prototype.getNonEssentialCategories = function() {
            return this.getCategoriesDataAndLabels().reduce((function(e, t) {
                return t.isEssential ? e : ke(ke([], Fe(e), !1), [t], !1)
            }), [])
        }, e.prototype.getNonEssentialCategoriesData = function() {
            return this.getCategoriesData().reduce((function(e, t) {
                return t.isEssential ? e : ke(ke([], Fe(e), !1), [t], !1)
            }), [])
        }, e.prototype.getGoogleConsentMode = function() {
            return !!this.core && this.core.googleConsentMode
        }, e.prototype.getServicesLabels = function() {
            return this.labels ? this.labels.services : []
        }, e.prototype.getServicesData = function() {
            return this.getCategoriesData().reduce((function(e, t) {
                return ke(ke([], Fe(e), !1), Fe(t.services), !1)
            }), [])
        }, e.prototype.getServicesDataAndLabels = function() {
            var e = this.getServicesData();
            return gt(e, this.getServicesLabels())
        }, e.prototype.getServicesBaseInfo = function() {
            var e, t;
            return e = this.mapBaseServices(this.getServicesData()), t = this.getServicesLabels(), e.reduce((function(e, n) {
                var r = t.find((function(e) {
                    return e.id === n.id
                }));
                return ke(ke([], Fe(e), !1), [Ne(Ne({}, n), r || ht)], !1)
            }), [])
        }, e.prototype.getServicesFullInfo = function(e, t) {
            return Pe(this, void 0, void 0, (function() {
                return Ue(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return this.isAggregatorLoaded ? [3, 2] : [4, this.extendServices(e, t)];
                        case 1:
                            n.sent(), n.label = 2;
                        case 2:
                            return [2, this.getServicesDataAndLabels()]
                    }
                }))
            }))
        }, e.prototype.getServicesFromCategories = function(e) {
            return e.reduce((function(e, t) {
                return e.concat(t.services)
            }), [])
        }, e.prototype.getServicesWithConsent = function() {
            return this.getServicesDataAndLabels().reduce((function(e, t) {
                return t.consent.status ? ke(ke([], Fe(e), !1), [t], !1) : e
            }), [])
        }, e.prototype.areAllServicesAccepted = function() {
            return this.getServicesData().every((function(e) {
                return e.consent.status
            }))
        }, e.prototype.areAllVendorsAndPurposesAccepted = function() {
            var e = this.getTcfData();
            return !!e && e.areAllPurposesAccepted() && e.areAllVendorsAccepted()
        }, e.prototype.extendServices = function(e, t) {
            return Pe(this, void 0, void 0, (function() {
                var n, r;
                return Ue(this, (function(i) {
                    switch (i.label) {
                        case 0:
                            return (n = this.dpsJson) ? (this.isAggregatorLoaded = !0, [4, this.fetchServices(n)]) : [2];
                        case 1:
                            return (r = i.sent()) && 0 !== r.length ? (this.aggregatedServices = r, this.initLabels(e, t, r), this.data && (this.data.categories = this.data.categories.map((function(e) {
                                var t = n.categories.find((function(t) {
                                    return t.categorySlug === e.slug
                                }));
                                return Ne(Ne({}, e), {
                                    services: e.services.map((function(e) {
                                        if (n.consentTemplates.find((function(t) {
                                                return t.templateId === e.id
                                            })) && t) {
                                            var i = null == r ? void 0 : r.find((function(t) {
                                                    return e.id === t.templateId && e.version === t.version
                                                })),
                                                o = new mr(i);
                                            return Ne(Ne({}, e), o)
                                        }
                                        return e
                                    }))
                                })
                            }))), [2]) : [2]
                    }
                }))
            }))
        }, e.prototype.isCcpaEnabled = function() {
            var e;
            return (null === (e = this.core) || void 0 === e ? void 0 : e.isCcpaEnabled) || !1
        }, e.prototype.isCcpaAvailable = function() {
            var e;
            if (this.isCcpaEnabled() && null != (null === (e = this.coreJson) || void 0 === e ? void 0 : e.ccpa)) switch (this.coreJson.ccpa.region) {
                case Ke.US:
                    return this.locationInstance.getIsUserInUS();
                case Ke.US_CA_ONLY:
                    return this.locationInstance.getIsUserInCalifornia();
                default:
                    return Promise.resolve(!0)
            }
            return Promise.resolve(!1)
        }, e.prototype.isCrossDomainEnabled = function() {
            var e;
            return (null === (e = this.core) || void 0 === e ? void 0 : e.consentSharingIFrameIsActive) || !1
        }, e.prototype.isTcfEnabled = function() {
            var e;
            return (null === (e = this.core) || void 0 === e ? void 0 : e.isTcfEnabled) || !1
        }, e.prototype.isTcfAvailable = function() {
            var e;
            return this.isTcfEnabled() && null != (null === (e = this.coreJson) || void 0 === e ? void 0 : e.tcf2)
        }, e.prototype.isTagLoggerActive = function() {
            var e;
            return (null === (e = this.core) || void 0 === e ? void 0 : e.isTagLoggerActive) || !1
        }, e.prototype.mergeServicesIntoExistingCategories = function(e) {
            return this.getCategoriesDataAndLabels().map((function(t) {
                return Ne(Ne({}, t), {
                    services: t.services.map((function(t) {
                        return e.find((function(e) {
                            return e.id === t.id
                        })) || t
                    }))
                })
            }))
        }, e.prototype.mergeServicesDataIntoExistingCategories = function(e) {
            return this.getCategoriesData().map((function(t) {
                return Ne(Ne({}, t), {
                    services: t.services.map((function(t) {
                        return e.find((function(e) {
                            return e.id === t.id
                        })) || t
                    }))
                })
            }))
        }, e.prototype.setCategories = function(e) {
            this.data && (this.data.categories = e)
        }, e.prototype.setControllerId = function(e) {
            this.data && (this.data.controllerId = e), yt(this.data) && this.data.updateControllerId(e)
        }, e.prototype.updateServicesLanguage = function(e) {
            this.data && this.data.categories.map((function(t) {
                return Ne(Ne({}, t), {
                    services: t.services.map((function(t) {
                        return Ne(Ne({}, t), {
                            language: Ne(Ne({}, t.language), {
                                selected: e
                            })
                        })
                    }))
                })
            }))
        }, e.prototype.shouldAcceptAllImplicitlyOnInit = function() {
            var e, t;
            return Pe(this, void 0, void 0, (function() {
                var n, r, i, o, s, a;
                return Ue(this, (function(c) {
                    switch (c.label) {
                        case 0:
                            return null !== this.acceptAllImplicitlyOnInit ? [2, this.acceptAllImplicitlyOnInit] : (n = this, (o = this.botInstance.isRobot()) ? [3, 2] : [4, this.isCcpaAvailable()]);
                        case 1:
                            o = c.sent(), c.label = 2;
                        case 2:
                            return (i = o) ? [3, 5] : (s = null === (e = this.core) || void 0 === e ? void 0 : e.acceptAllImplicitlyOutsideEU) ? [4, this.locationInstance.getIsUserInEU()] : [3, 4];
                        case 3:
                            s = !c.sent(), c.label = 4;
                        case 4:
                            i = s, c.label = 5;
                        case 5:
                            return (r = i) ? [3, 8] : (a = this.isTcfAvailable()) ? [4, null === (t = this.getTcfData()) || void 0 === t ? void 0 : t.getGdprApplies()] : [3, 7];
                        case 6:
                            a = !c.sent(), c.label = 7;
                        case 7:
                            r = a, c.label = 8;
                        case 8:
                            return n.acceptAllImplicitlyOnInit = r, [2, this.acceptAllImplicitlyOnInit]
                    }
                }))
            }))
        }, e.prototype.shouldShowFirstLayerOnVersionChange = function() {
            var e = yn.fetchSettingsVersion();
            if (this.core && e && Me(this.core.showFirstLayerOnVersionChange)) {
                var t = this.core.version.split("."),
                    n = e.split(".");
                return Ve(this.core.showFirstLayerOnVersionChange, Te.MAJOR) && t[0] !== n[0] || Ve(this.core.showFirstLayerOnVersionChange, Te.MINOR) && t[1] !== n[1] || Ve(this.core.showFirstLayerOnVersionChange, Te.PATCH) && t[2] !== n[2]
            }
            return !1
        }, e.prototype.getUpdatedServicesWithConsent = function(e) {
            return this.getServicesDataAndLabels().map((function(t) {
                if (!t.isEssential) {
                    var n = t;
                    return n.consent.status = e === Ie.TRUE, n
                }
                return t
            }))
        }, e.prototype.getUpdatedServicesDataWithConsent = function(e) {
            return this.getServicesData().map((function(t) {
                if (!t.isEssential) {
                    var n = t;
                    return n.consent.status = e === Ie.TRUE, n
                }
                return t
            }))
        }, e.prototype.getUpdatedServicesWithDecisions = function(e) {
            return this.getServicesDataAndLabels().map((function(t) {
                var n = e.find((function(e) {
                        return e.serviceId === t.id
                    })),
                    r = t;
                return r.consent.status = t.isEssential || (n ? n.status : t.consent.status), r
            }))
        }, e.prototype.getUpdatedServicesDataWithDecisions = function(e) {
            return this.getServicesData().map((function(t) {
                var n = e.find((function(e) {
                        return e.serviceId === t.id
                    })),
                    r = t;
                return r.consent.status = t.isEssential || (n ? n.status : t.consent.status), r
            }))
        }, e.prototype.updateDataTransferSettings = function(e) {
            var t = e.controllerId,
                n = e.id,
                r = e.selectedLanguage,
                i = e.version;
            this.core && this.data && (this.data.controllerId = t, this.core.id = n, this.core.language.selected = r, this.core.version = i)
        }, e.prototype.isTcfHistoryV2Disabled = function() {
            return !!yt(this.data) && !0 === this.data.tcfv2HistoryDisabled
        }, e.prototype.getTCFPurposeOneTreatment = function() {
            return yt(this.data) && this.data.purposeOneTreatment || !1
        }, e.prototype.getTCFStackIds = function() {
            return yt(this.data) ? this.data.stackIds : []
        }, e.prototype.getTCFVendorIds = function() {
            return yt(this.data) ? this.data.vendorIds : []
        }, e.prototype.fetchServices = function(e) {
            return Pe(this, void 0, void 0, (function() {
                var t, n, r, i;
                return Ue(this, (function(o) {
                    switch (o.label) {
                        case 0:
                            return (t = Nn(e.consentTemplates)).length ? (n = Pn.getInstance(), r = Mn.getInstance(), i = [], r.isRobot() ? [3, 2] : [4, n.fetchAggregatedServices(t)]) : [2, null];
                        case 1:
                            i = o.sent(), o.label = 2;
                        case 2:
                            return [2, i]
                    }
                }))
            }))
        }, e.prototype.mapBaseServices = function(e) {
            return e.map((function(e) {
                return {
                    categorySlug: e.categorySlug,
                    consent: e.consent,
                    fetchSubServices: e.fetchSubServices,
                    id: e.id,
                    isEssential: e.isEssential,
                    isHidden: e.isHidden,
                    processorId: e.processorId,
                    subServices: e.subServices,
                    subServicesLength: e.subServicesLength,
                    version: e.version
                }
            }))
        }, e
    }(),
    wr = function() {
        function e() {
            this.useOnlySettingsV2 = !1, this.apiInstance = Pn.getInstance(), this.controllerIdInstance = Rn.getInstance(), this.eventDispatcherInstance = $n.getInstance(), this.settingsV2 = Lr.getInstance(), this.botInstance = Mn.getInstance()
        }
        return e.getInstance = function() {
            return e.instance || (e.instance = new e), e.instance
        }, e.resetInstance = function() {
            delete e.instance.userSessionData
        }, e.prototype.execute = function(e, t, n, r, i) {
            var o = this.settingsV2.getDataTransferSettings();
            if (o) {
                var s = e.map((function(e) {
                        return $e(o, e, n, r)
                    })),
                    a = Or(t, s);
                this.botInstance.isRobot() || this.apiInstance.saveConsents({
                    consentString: i,
                    dataTransferObjects: s
                }), this.settingsV2.setCategories(this.settingsV2.mergeServicesDataIntoExistingCategories(a));
                var c = this.settingsV2.getServicesDataAndLabels();
                yn.saveSettings(yn.mapSettings(o, c), c), ar.enableScriptsForServicesWithConsent(this.settingsV2.getServicesWithConsent()), this.eventDispatcherInstance.dispatch(s, this.settingsV2.getGoogleConsentMode())
            }
        }, e.prototype.getMergedServicesAndSettingsFromStorage = function(e) {
            var t = e,
                n = yn.fetchSettings();
            if (n && t) {
                var r = this.settingsV2.getServicesFromCategories(this.settingsV2.getEssentialCategories()),
                    i = this.settingsV2.getServicesFromCategories(this.settingsV2.getEssentialCategoriesData()),
                    o = this.settingsV2.getServicesFromCategories(this.settingsV2.getNonEssentialCategories()),
                    s = this.settingsV2.getServicesFromCategories(this.settingsV2.getNonEssentialCategoriesData()),
                    a = this.getMergedAndUpdatedEssentialServices(r, n),
                    c = this.getMergedAndUpdatedEssentialServices(i, n),
                    l = this.getMergedNonEssentialServices(o, n),
                    u = this.getMergedNonEssentialServices(s, n);
                return n.controllerId !== this.controllerIdInstance.value && (this.controllerIdInstance.value = n.controllerId, t.controllerId = n.controllerId, yt(t) && t.updateControllerId(n.controllerId)), {
                    dataTransferSettings: this.settingsV2.getDataTransferSettings(),
                    mergedServicesData: c.mergedEssentialServices.concat(u),
                    mergedServicesV2: a.mergedEssentialServices.concat(l),
                    mergedSettingsData: t,
                    updatedEssentialServicesV2: a.updatedEssentialServices
                }
            }
            return {
                dataTransferSettings: null,
                mergedServicesData: [],
                mergedServicesV2: [],
                mergedSettingsData: t,
                updatedEssentialServicesV2: []
            }
        }, e.prototype.getLatestConsentType = function(e) {
            return e.length > 0 ? e[e.length - 1].type : "implicit"
        }, e.prototype.getLatestConsentAction = function(e) {
            return e.length > 0 ? e[e.length - 1].action : "onInitialPageLoad"
        }, e.prototype.setUserSessionData = function(e) {
            this.userSessionData = e
        }, e.prototype.mergeServicesAndSettings = function(e, t, n, r) {
            var i = this;
            if (!n) return [];
            if (Me(r)) {
                var o = r.map((function(e) {
                        return $e(n, e, "onEssentialChange", i.getLatestConsentType(e.consent.history))
                    })),
                    s = Or(t, o),
                    a = Rr(e, s);
                this.apiInstance.saveConsents({
                    dataTransferObjects: o
                }), this.settingsV2.setCategories(this.settingsV2.mergeServicesDataIntoExistingCategories(s)), yn.saveSettings(yn.mapSettings(n, a), a)
            } else this.settingsV2.setCategories(this.settingsV2.mergeServicesDataIntoExistingCategories(t)), yn.saveSettings(yn.mapSettings(n, e), e);
            return e.map((function(e) {
                return $e(n, e, i.getLatestConsentAction(e.consent.history), i.getLatestConsentType(e.consent.history))
            }))
        }, e.prototype.restoreUserSession = function(e) {
            return Pe(this, void 0, void 0, (function() {
                var t;
                return Ue(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return this.controllerIdInstance.value && this.controllerIdInstance.needsSessionRestore ? [4, this.getCrossDeviceSessionData(this.controllerIdInstance.value)] : [3, 2];
                        case 1:
                            t = n.sent(), n.label = 2;
                        case 2:
                            if (!t && this.userSessionData && (t = Ne({}, this.userSessionData)), !t && window.ucMobileSdk && "function" == typeof window.ucMobileSdk.getUserSessionData) try {
                                (null == (t = JSON.parse(window.ucMobileSdk.getUserSessionData(), (function(e, t) {
                                    if ("timestamp" === e) {
                                        var n = t.toString();
                                        return -1 !== n.indexOf(".") ? 1e3 * Number(n) : Number(n)
                                    }
                                    return t
                                }))) ? void 0 : t.consents) && (null == t ? void 0 : t.consents.length) && !t.consents.every((function(e) {
                                    return e.action
                                })) && (t.consents = t.consents.map((function(e) {
                                    return Ne(Ne({}, e), {
                                        action: "onMobileSessionRestore"
                                    })
                                })), this.restoreAction = "onMobileSessionRestore")
                            } catch (e) {}
                            return t || !fn.isCrossDomainAvailable() ? [3, 4] : [4, this.getCrossDomainSessionData()];
                        case 3:
                            t = n.sent(), n.label = 4;
                        case 4:
                            return t && t.controllerId ? [2, this.restoreData(t, e)] : (this.controllerIdInstance.needsSessionRestore = !1, [2, !1])
                    }
                }))
            }))
        }, e.prototype.getCrossDomainSessionData = function() {
            return Pe(this, void 0, void 0, (function() {
                return Ue(this, (function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, fn.getCrossDomainSessionData().catch((function() {
                                return console.warn(Zt.CROSS_DOMAIN_DATA_NOT_AVAILABLE), {}
                            }))];
                        case 1:
                            return [2, e.sent()]
                    }
                }))
            }))
        }, e.prototype.getCrossDeviceSessionData = function(e) {
            return Pe(this, void 0, void 0, (function() {
                var t, n, r, i, o;
                return Ue(this, (function(s) {
                    switch (s.label) {
                        case 0:
                            return [4, this.apiInstance.fetchUserConsents().catch((function() {
                                return console.warn(Xt.CROSS_DEVICE_DATA_NOT_AVAILABLE), []
                            }))];
                        case 1:
                            return t = s.sent(), n = ["dWLDa0s-m", "VkvM9IcSA", "Zdgjo9gQh", "r2tAWzO7", "GVl-ixMH"], r = this.apiInstance.getSettingsId(), i = null, this.settingsV2.isTcfAvailable() ? -1 === n.indexOf(r) ? [3, 3] : [4, this.apiInstance.fetchUserTcfData().catch((function() {
                                return console.warn(Xt.CROSS_DEVICE_TCF_DATA_NOT_AVAILABLE), null
                            }))] : [3, 7];
                        case 2:
                            return i = s.sent(), [3, 5];
                        case 3:
                            return this.settingsV2.isTcfHistoryV2Disabled() ? [3, 5] : [4, this.apiInstance.fetchUserTcfDataV2().catch((function() {
                                return console.warn(Xt.CROSS_DEVICE_TCF_DATA_NOT_AVAILABLE), null
                            }))];
                        case 4:
                            i = s.sent(), s.label = 5;
                        case 5:
                            return i || !fn.isCrossDomainAvailable() ? [3, 7] : [4, this.getCrossDomainSessionData()];
                        case 6:
                            (o = s.sent()) && o.tcf && o.controllerId === e && (i = o.tcf), s.label = 7;
                        case 7:
                            return [2, Ne({
                                consents: t,
                                controllerId: e,
                                language: this.apiInstance.getJsonFileLanguage()
                            }, null !== i && {
                                tcf: i
                            })]
                    }
                }))
            }))
        }, e.prototype.restoreData = function(e, t) {
            return Pe(this, void 0, void 0, (function() {
                var n, r, i, o, s, a, c, l, u, d, f, p, h, g, v, y, m, _ = this;
                return Ue(this, (function(b) {
                    return n = e.controllerId, r = e.consents, i = e.tcf, o = e.ccpa, s = this.settingsV2.core, a = this.getDataFacadeServices(t), i && i.tcString && (yn.saveTCFData(i), a.length || yn.setUserActionPerformed()), c = this.settingsV2.getCcpaData(), o && o.ccpaString && c && (c.setIsOptedOut(o.ccpaString), yn.setCcpaString(o.ccpaString), o.timestamp ? yn.setCcpaTimeStamp(o) : yn.clearCcpaData(), yn.setUserActionPerformed()), !n || !Me(r) && a.length || (l = Nr(r), u = Pr(r), !Me(u) && a.length) ? [2, !1] : (d = [], f = [], u.forEach((function(e) {
                        var t = a.findIndex((function(t) {
                            return t.id === e.templateId
                        }));
                        if (t > -1) {
                            var n = a[t],
                                r = n;
                            r.consent.status = e.status;
                            var i = f.findIndex((function(e) {
                                return e.id === n.id
                            })); - 1 === i ? f.push(r) : f[i] = r, a[t] = r;
                            var o = _.settingsV2.getDataTransferSettings(e.settingsVersion);
                            o && d.push($e(o, r, e.action, e.updatedBy, {
                                timestamp: "string" == typeof e.timestamp ? _.resolveTimestamp(e.timestamp) : e.timestamp
                            }))
                        }
                    })), this.settingsV2.data && (this.settingsV2.data.controllerId = n), p = void 0, h = void 0, s && u.length && (h = Ye(u.map((function(e) {
                        return e.settingsVersion
                    }))).sort(ot)).length && (p = h[h.length - 1]), g = Or(a, d), v = this.settingsV2.getDataTransferSettings(p), (y = this.settingsV2.data) && v && n && n !== yn.fetchControllerId() && (m = f.map((function(e) {
                        return $e(v, e, "onSessionRestored", "implicit", {
                            referrerControllerId: y.controllerId
                        })
                    })), this.restoreAction = "onSessionRestored", this.apiInstance.saveConsents({
                        dataTransferObjects: m
                    })), n === yn.fetchControllerId() && (this.restoreAction = "onInitialPageLoad"), v && yn.saveSettings(yn.mapSettings(v, g), g), Me(l) && yn.setUserActionPerformed(), [2, !0])
                }))
            }))
        }, e.prototype.getDataFacadeServices = function(e) {
            var t = this.settingsV2.checkIfServiceNameExists,
                n = e.categories,
                r = e.consentTemplates;
            if (r.length > 0 && t(r)) return r.map((function(e) {
                var t, r = n.find((function(t) {
                    return t.categorySlug === e.categorySlug
                }));
                return {
                    consent: lr(e, r),
                    id: e.templateId,
                    name: (null === (t = e._meta) || void 0 === t ? void 0 : t.name) || "",
                    processorId: "".concat(Sn(wn())),
                    version: e.version
                }
            }));
            var i = this.settingsV2.getServicesDataAndLabels();
            return i.length > 0 ? i.map((function(e) {
                return {
                    consent: e.consent,
                    id: e.id,
                    name: e.name,
                    processorId: e.processorId,
                    version: e.version
                }
            })) : []
        }, e.prototype.getMergedAndUpdatedEssentialServices = function(e, t) {
            var n = [];
            return {
                mergedEssentialServices: e.map((function(e) {
                    var r, i = null === (r = t.services) || void 0 === r ? void 0 : r.find((function(t) {
                        return t.id === e.id
                    }));
                    if (i) {
                        var o = e;
                        return o.consent.history = i.history, o.consent.status = !0, o.processorId = i.processorId, i.status || n.push(o), o
                    }
                    return e
                })),
                updatedEssentialServices: n
            }
        }, e.prototype.getMergedNonEssentialServices = function(e, t) {
            return e.map((function(e) {
                var n, r, i = null === (n = t.services) || void 0 === n ? void 0 : n.find((function(t) {
                    return t.id === e.id
                }));
                if (i) return (o = e).consent.history = i.history, o.consent.status = i.status, o.processorId = i.processorId, o;
                if (0 === e.consent.history.length) {
                    var o = e,
                        s = null === (r = t.services) || void 0 === r ? void 0 : r.find((function(e) {
                            return e.history.length > 0
                        }));
                    return o.consent.history = [{
                        action: "onInitialPageLoad",
                        language: e.language ? e.language.selected : "en",
                        status: e.consent.status,
                        timestamp: (new Date).getTime(),
                        type: "implicit",
                        versions: s && s.history.length > 0 ? s.history[0].versions : {
                            application: "",
                            service: e.version,
                            settings: ""
                        }
                    }], o
                }
                return e
            }))
        }, e.prototype.resolveTimestamp = function(e) {
            return 10 === e.length ? 1e3 * parseInt(e, 10) : parseInt(e, 10)
        }, e
    }(),
    Or = function(e, t) {
        return e.map((function(e) {
            var n = t.filter((function(t) {
                return t.service.id === e.id
            }));
            if (Me(n)) {
                var r = e.consent.history,
                    i = r.length + n.length,
                    o = i <= 3 ? r : r.slice(i - 3),
                    s = e;
                return s.consent.history = ke(ke([], Fe(o), !1), Fe(n.map((function(e) {
                    return Dr(e)
                }))), !1), s
            }
            return e
        }))
    },
    Rr = function(e, t) {
        return e.reduce((function(e, n) {
            var r = t.find((function(e) {
                return e.id === n.id
            }));
            return r ? ke(ke([], Fe(e), !1), [Ne(Ne({}, n), {
                consent: r.consent
            })], !1) : ke([], Fe(e), !1)
        }), [])
    },
    Dr = function(e) {
        return {
            action: e.consent.action,
            language: e.settings.language,
            status: e.consent.status,
            timestamp: e.timestamp,
            type: e.consent.type,
            versions: {
                application: e.applicationVersion,
                service: e.service.version,
                settings: e.settings.version
            }
        }
    },
    Nr = function(e) {
        return e.filter((function(e) {
            return !er.includes(e.action)
        }))
    },
    Pr = function(e) {
        return e.filter((function(e) {
            return "onSessionRestored" !== e.action
        }))
    },
    Ur = function() {
        function e() {
            this.primaryLanguage = "", this.apiInstance = Pn.getInstance()
        }
        return e.getInstance = function() {
            return e.instance || (e.instance = new e), e.instance
        }, e.prototype.setPrimaryLanguage = function(e) {
            this.primaryLanguage = e
        }, e.prototype.getPrimaryLanguage = function() {
            return this.primaryLanguage
        }, e.prototype.resolveLanguage = function() {
            return Pe(this, void 0, void 0, (function() {
                var e, t, n, r, i;
                return Ue(this, (function(o) {
                    switch (o.label) {
                        case 0:
                            return [4, this.apiInstance.fetchAvailableLanguages()];
                        case 1:
                            return e = o.sent(), (t = xr(e, this.primaryLanguage)) ? (this.apiInstance.setJsonFileLanguage(t), [2]) : (n = yn.fetchLanguage(), (t = xr(e, n)) ? (this.apiInstance.setJsonFileLanguage(t), [2]) : (r = kr(e)) ? (this.apiInstance.setJsonFileLanguage(r), [2]) : (i = Fr(e)) ? (this.apiInstance.setJsonFileLanguage(i), [2]) : e.length > 0 ? (this.apiInstance.setJsonFileLanguage(e[0]), [2]) : (this.apiInstance.setJsonFileLanguage("en"), [2]))
                    }
                }))
            }))
        }, e
    }(),
    Fr = function(e) {
        var t = window.navigator;
        if (Me(t.languages))
            for (var n = 0; n < t.languages.length; n += 1) {
                var r = xr(e, t.languages[n]);
                if (r) return r
            }
        var i = null != t.language ? t.language : t.userLanguage;
        return xr(e, i)
    },
    kr = function(e) {
        var t = document.documentElement.lang;
        return t ? xr(e, t) : null
    },
    xr = function(e, t) {
        if (t) {
            var n = t.toLowerCase().replace("-", "_");
            if (Ve(e, n)) return n;
            var r = t.slice(0, 2);
            if (Ve(e, r)) return r
        }
        return null
    },
    Vr = function() {
        function e() {
            this.needsSessionRestore = !1, this.noShow = !1, this.apiInstance = Pn.getInstance(), this.locationInstance = vr.getInstance(), this.useDefaultSettingsId = !1
        }
        return e.getInstance = function() {
            return e.instance || (e.instance = new e), e.instance
        }, e.resetInstance = function() {
            e.instance.noShow = !1
        }, e.prototype.getNoShow = function() {
            return this.noShow
        }, e.prototype.setNoShow = function(e) {
            this.noShow = e
        }, e.prototype.isUsingDefaultSettingsId = function() {
            return this.useDefaultSettingsId
        }, e.prototype.setUseDefaultSettingsId = function(e) {
            this.useDefaultSettingsId = e
        }, e.prototype.resolveSettingsId = function() {
            return Pe(this, void 0, void 0, (function() {
                var e, t, n, r, i, o, s, a;
                return Ue(this, (function(c) {
                    switch (c.label) {
                        case 0:
                            return [4, this.apiInstance.fetchRuleset()];
                        case 1:
                            return e = c.sent(), n = "", r = e.location, i = e.rules, o = e.defaultRule, s = o.settingsId, a = o.noShow, r && r.code && r.regionCode && r.name && (t = i.find((function(e) {
                                var t;
                                return null === (t = e.locations) || void 0 === t ? void 0 : t.includes("".concat(r.code).concat(r.regionCode))
                            })) || i.find((function(e) {
                                var t;
                                return null === (t = e.locations) || void 0 === t ? void 0 : t.includes(r.code)
                            })), this.locationInstance.setUserCountryData(r), yn.setUserCountryResponse(vr.mapUserCountryData(r))), t ? n = t.settingsId : (n = s, this.setNoShow(a), this.setUseDefaultSettingsId(!0)), [2, {
                                noShow: !t && a,
                                settingsId: n
                            }]
                    }
                }))
            }))
        }, e
    }(),
    Br = function() {
        function e() {
            this.initOptions = null, this.isFirstTimePageVisit = !0, this.selectedLayer = null, this.shouldAcceptAllImplicitly = null, this.shouldShowFirstLayerOnVersionChange = !1, this.variant = null, this.ampInstance = Bt.getInstance(), this.botInstance = Mn.getInstance(), this.settingsV2 = Lr.getInstance(), this.rulesetInstance = Vr.getInstance(), this.apiInstance = Pn.getInstance()
        }
        return e.getInstance = function() {
            return e.instance || (e.instance = new e), e.instance
        }, e.resetInstance = function() {
            e.instance.selectedLayer = null, e.instance.variant = null, e.instance.shouldAcceptAllImplicitly = null, e.instance.initOptions = null
        }, e.prototype.init = function(e) {
            return Pe(this, void 0, void 0, (function() {
                var t;
                return Ue(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return this.initOptions = e, this.isFirstTimePageVisit = this.isFirstTimeVisit(), null !== this.shouldAcceptAllImplicitly ? [3, 2] : (t = this, [4, this.settingsV2.shouldAcceptAllImplicitlyOnInit()]);
                        case 1:
                            t.shouldAcceptAllImplicitly = n.sent(), n.label = 2;
                        case 2:
                            return this.shouldShowFirstLayerOnVersionChange = this.settingsV2.shouldShowFirstLayerOnVersionChange(), [2]
                    }
                }))
            }))
        }, e.prototype.isFirstTimeVisit = function() {
            return !yn.settingsExist() || this.botInstance.isRobot()
        }, e.prototype.shouldShowNone = function() {
            return Pe(this, void 0, void 0, (function() {
                var e, t;
                return Ue(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return e = 0 === this.variant, null !== this.shouldAcceptAllImplicitly ? [3, 2] : (t = this, [4, this.settingsV2.shouldAcceptAllImplicitlyOnInit()]);
                        case 1:
                            t.shouldAcceptAllImplicitly = n.sent(), n.label = 2;
                        case 2:
                            return this.apiInstance.getRulesetId() && this.rulesetInstance.isUsingDefaultSettingsId() ? [2, this.rulesetInstance.getNoShow()] : [2, this.shouldAcceptAllImplicitly && !e]
                    }
                }))
            }))
        }, e.prototype.shouldShowFirstLayer = function(e) {
            var t, n, r, i, o, s;
            return Pe(this, void 0, void 0, (function() {
                var a, c, l, u, d;
                return Ue(this, (function(f) {
                    if (a = this.ampInstance.isAmpEnabled(), c = 0 === this.variant, l = (null === (t = e.ccpa) || void 0 === t ? void 0 : t.showOnPageLoad) || !1, u = c ? l : !this.shouldAcceptAllImplicitly, !(null === (n = this.initOptions) || void 0 === n ? void 0 : n.suppressCmpDisplay) && (u && this.isFirstTimePageVisit || this.shouldShowFirstLayerOnVersionChange || !yn.fetchUserActionPerformed() && (!c || l) || a)) return [2, !0];
                    switch (this.variant) {
                        case 0:
                            if (!(null === (r = this.initOptions) || void 0 === r ? void 0 : r.suppressCmpDisplay) && this.shouldShowFirstLayerForCcpa(null === (i = e.ccpa) || void 0 === i ? void 0 : i.reshowAfterDays)) return [2, !0];
                            break;
                        case 2:
                            if (d = this.settingsV2.getTcfData(), !(null === (o = this.initOptions) || void 0 === o ? void 0 : o.suppressCmpDisplay) && (null == d ? void 0 : d.shouldResurfaceUI())) return [2, !0];
                            break;
                        default:
                            if (!(null === (s = this.initOptions) || void 0 === s ? void 0 : s.suppressCmpDisplay) && this.shouldForceReshowGDPRBanner()) return [2, !0]
                    }
                    return [2, !1]
                }))
            }))
        }, e.prototype.shouldForceReshowGDPRBanner = function() {
            var e = this.settingsV2.core;
            if (!e) return !1;
            var t, n = e.reshowBanner,
                r = this.settingsV2.getServicesData().reduce((function(e, t) {
                    return ke(ke([], Fe(e), !1), Fe(t.consent.history), !1)
                }), []).filter((function(e) {
                    return ["onAcceptAllServices", "onDenyAllServices", "onUpdateServices"].indexOf(e.action) > -1
                })).sort((function(e, t) {
                    return t.timestamp - e.timestamp
                }));
            if (n > 0 && r.length > 0) {
                var i = new Date(r[0].timestamp);
                return i.setMonth(i.getMonth() + n), t = i, (new Date).getTime() - t.getTime() >= 0
            }
            return !1
        }, e.prototype.shouldShowPrivacyButton = function(e) {
            return e.privacyButtonIsVisible
        }, e.prototype.resolveUiVariant = function(e) {
            return Pe(this, void 0, void 0, (function() {
                return Ue(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return null !== this.variant ? [2, this.variant] : [4, this.settingsV2.isCcpaAvailable()];
                        case 1:
                            return t.sent() ? this.variant = 0 : this.variant = e ? 2 : 1, [2, this.variant]
                    }
                }))
            }))
        }, e.prototype.resolveUiInitialLayer = function(e) {
            return Pe(this, void 0, void 0, (function() {
                return Ue(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.shouldShowNone()];
                        case 1:
                            return t.sent() ? [2, 1] : [4, this.shouldShowFirstLayer(e)];
                        case 2:
                            return t.sent() ? [2, 0] : this.shouldShowPrivacyButton(e) ? [2, 2] : [2, 1]
                    }
                }))
            }))
        }, e.prototype.resolveUIOptions = function(e) {
            return Pe(this, void 0, void 0, (function() {
                var t, n, r;
                return Ue(this, (function(i) {
                    switch (i.label) {
                        case 0:
                            return t = this.ampInstance.isAmpEnabled(), null !== this.variant ? [3, 2] : (n = this, [4, this.resolveUiVariant(e.tcf2Enabled)]);
                        case 1:
                            n.variant = i.sent(), i.label = 2;
                        case 2:
                            return 0 !== this.variant && yn.clearCcpa(), 2 !== this.variant && yn.clearTcf(), r = this, [4, this.resolveUiInitialLayer(e)];
                        case 3:
                            return r.selectedLayer = i.sent(), [2, {
                                ampEnabled: t,
                                initialLayer: this.selectedLayer,
                                variant: this.variant
                            }]
                    }
                }))
            }))
        }, e.prototype.shouldShowFirstLayerForCcpa = function(e) {
            void 0 === e && (e = 365);
            var t, n = this.settingsV2.legacySettings;
            return !!n && (n.ccpa.reshowCMP && ((t = yn.getCcpaData()) ? ((new Date).getTime() - t.timestamp) / 864e5 : 0) > e)
        }, e
    }(),
    Mr = function(e, t) {
        console.warn("".concat(e, " is deprecated. Please use ").concat(t, " instead."))
    },
    Gr = Object.freeze({
        initialize: function({
            modulePath: e = ".",
            importFunctionName: t = "__import__"
        } = {}) {
            try {
                self[t] = new Function("u", "return import(u)")
            } catch (n) {
                const r = new URL(e, location),
                    i = e => {
                        URL.revokeObjectURL(e.src), e.remove()
                    };
                self[t] = e => new Promise(((n, o) => {
                    const s = new URL(e, r);
                    if (self[t].moduleMap[s]) return n(self[t].moduleMap[s]);
                    const a = new Blob([`import * as m from '${s}';`, `${t}.moduleMap['${s}']=m;`], {
                            type: "text/javascript"
                        }),
                        c = Object.assign(document.createElement("script"), {
                            type: "module",
                            src: URL.createObjectURL(a),
                            onerror() {
                                o(new Error(`Failed to import: ${e}`)), i(c)
                            },
                            onload() {
                                n(self[t].moduleMap[s]), i(c)
                            }
                        });
                    document.head.appendChild(c)
                })), self[t].moduleMap = {}
            }
        }
    }),
    Hr = function(e) {
        if (e && e.source && e.source.postMessage) {
            var t = "string" == typeof e.data,
                n = e.data;
            if (t) try {
                n = JSON.parse(e.data)
            } catch (e) {
                return
            }
            if ("object" === ve(n) && n.__tcfapiCall) {
                var r = n.__tcfapiCall;
                window.__tcfapi(r.command, r.version, (function(n, i) {
                    var o = {
                            __tcfapiReturn: {
                                returnValue: n,
                                success: i,
                                callId: r.callId
                            }
                        },
                        s = t ? JSON.stringify(o) : o;
                    try {
                        e.source.postMessage(s, "*")
                    } catch (e) {}
                }), r.parameter)
            }
        }
    },
    $r = [],
    jr = function(e, t, n, r) {
        if (!e) return $r;
        switch (e) {
            case "ping":
                "function" == typeof n && n(!0, !1, "stub");
                break;
            case "pending":
                return $r;
            default:
                $r.push([e, t, n, r])
        }
    },
    Yr = function() {
        "undefined" != typeof window && (window.__tcfapi || ! function() {
            for (var e = window, t = !1; e;) {
                try {
                    if (e.frames.__tcfapiLocator) {
                        t = !0;
                        break
                    }
                } catch (e) {}
                if (e === window.top) {
                    t = !1;
                    break
                }
                e = e.parent
            }
            return t
        }() && (it((function() {
            return !!window.document.body
        }), "").then((function() {
            var e = window.document.createElement("iframe");
            e.style.cssText = "display:none", e.name = "__tcfapiLocator", window.document.body.appendChild(e)
        })), 1) && (window.addEventListener("message", Hr, !1), window.__tcfapi = jr))
    };
! function(e) {
    e.ACCEPT_ALL_SERVICES = "onAcceptAllServices", e.DENY_ALL_SERVICES = "onDenyAllServices", e.ESSENTIAL_CHANGE = "onEssentialChange", e.INITIAL_PAGE_LOAD = "onInitialPageLoad", e.NON_EU_REGION = "onNonEURegion", e.SESSION_RESTORED = "onSessionRestored", e.TCF_STRING_CHANGE = "onTcfStringChange", e.UPDATE_SERVICES = "onUpdateServices", e.MOBILE_SESSION_RESTORED = "onMobileSessionRestore"
}(tr || (tr = {})),
function(e) {
    e.EXPLICIT = "explicit", e.IMPLICIT = "implicit"
}(nr || (nr = {})),
function(e) {
    e[e.CMP_SHOWN = 1] = "CMP_SHOWN", e[e.ACCEPT_ALL = 2] = "ACCEPT_ALL", e[e.DENY_ALL = 3] = "DENY_ALL", e[e.CUSTOM_CHOICE = 4] = "CUSTOM_CHOICE"
}(rr || (rr = {})),
function(e) {
    e.API_NAME = "__uspapi", e.GET_USP_DATA = "getUSPData"
}(ir || (ir = {})),
function(e) {
    e[e.FIRST_LAYER = 0] = "FIRST_LAYER", e[e.NONE = 1] = "NONE", e[e.PRIVACY_BUTTON = 2] = "PRIVACY_BUTTON", e[e.SECOND_LAYER = 3] = "SECOND_LAYER"
}(or || (or = {})),
function(e) {
    e[e.CCPA = 0] = "CCPA", e[e.DEFAULT = 1] = "DEFAULT", e[e.TCF = 2] = "TCF"
}(sr || (sr = {})), void 0 !== Gr && Gr.initialize({
    modulePath: "/dir"
});
var Wr = function() {
    function e(e, t) {
        var n;
        if (this.ampInstance = Bt.getInstance(), this.apiInstance = Pn.getInstance(), this.botInstance = Mn.getInstance(), this.controllerIdInstance = Rn.getInstance(), this.dataFacadeInstance = wr.getInstance(), this.eventDispatcherInstance = $n.getInstance(), this.initOptions = {}, this.languageInstance = Ur.getInstance(), this.locationInstance = vr.getInstance(), this.settingsV2 = Lr.getInstance(), this.uiInstance = Br.getInstance(), this.domains = null, this.rulesetRule = {
                noShow: !0,
                settingsId: ""
            }, t && (this.initOptions = t), this.domains = (n = window.UC_UI_DOMAINS) ? Object.entries(n).reduce((function(e, t) {
                var n, r, i = t[0],
                    o = t[1];
                return "/" === o.slice(-1) ? Ne(Ne({}, e), ((n = {})[i] = o.slice(0, -1), n)) : Ne(Ne({}, e), ((r = {})[i] = o, r))
            }), {
                aggregator: "",
                app: "",
                cdn: "",
                consents: "",
                crossDomainConsentSharingIFrame: "",
                graphql: "",
                trackingEvent: ""
            }) : null, this.apiInstance.setDomains(!0 === (null == t ? void 0 : t.sandboxEnv), this.domains), (null == t ? void 0 : t.createTcfApiStub) && (this.apiInstance.fetchUserCountry(), Yr()), this.apiInstance.setEuMode(!0 === (null == t ? void 0 : t.euMode)), (null == t ? void 0 : t.useRulesetId) ? this.apiInstance.setRulesetId(e) : this.apiInstance.setSettingsId(e), this.controllerIdInstance.value = "", (null == t ? void 0 : t.controllerId) && (this.controllerIdInstance.value = t.controllerId), (null == t ? void 0 : t.language) && this.languageInstance.setPrimaryLanguage(t.language), (null == t ? void 0 : t.settingsCache) && this.apiInstance.setJsonCacheBustingString(t.settingsCache), (null == t ? void 0 : t.version) && this.apiInstance.setJsonFileVersion(t.version), (null == t ? void 0 : t.userCountryData) && "object" === ve(t.userCountryData) && Object.keys(t.userCountryData).every((function(e) {
                return "string" == typeof e
            })) && this.locationInstance.setUserCountryData(t.userCountryData), (null == t ? void 0 : t.userSessionData) && this.dataFacadeInstance.setUserSessionData(t.userSessionData), (null == t ? void 0 : t.ampEnabled) && this.ampInstance.setIsAmpEnabled(!0), (null == t ? void 0 : t.blockDataLayerPush) && this.eventDispatcherInstance.setBlockDataLayerPush(!0), (null == t ? void 0 : t.storeServiceIdToNameMapping) && (Storage.prototype.storeServiceIdToNameMapping = !0), (null == t ? void 0 : t.useOnlySettingsV2) && (this.initOptions.useOnlySettingsV2 = !0), (null == t ? void 0 : t.disableTracking) && (this.initOptions.disableTracking = !0), (null == t ? void 0 : t.disableServerConsents) && this.apiInstance.setDisableServerConsents(!0), (null == t ? void 0 : t.disableServerConsents) && (null == t ? void 0 : t.controllerId)) throw new Error("Usercentrics: disableServerConsents and controllerId should not be present at the same time in the InitOptions!");
        this.initOptions.prefetchServices = He(null == t ? void 0 : t.prefetchServices, !0), this.setTrackingPixel = this.setTrackingPixel.bind(this)
    }
    return e.prototype.init = function() {
        return Pe(this, void 0, void 0, (function() {
            var e, t, n, r, i, o, s, a, c, l, u, d, f, p, h = this;
            return Ue(this, (function(g) {
                switch (g.label) {
                    case 0:
                        return yn.getInstance().init(), this.apiInstance.getRulesetId() ? (e = this, [4, Vr.getInstance().resolveSettingsId()]) : [3, 2];
                    case 1:
                        e.rulesetRule = g.sent(), this.apiInstance.setSettingsId(this.rulesetRule.settingsId), g.label = 2;
                    case 2:
                        return yn.clearOnNewSettingsId(this.apiInstance.getSettingsId()), yn.migrateLegacySettings(this.apiInstance.getSettingsId()), this.controllerIdInstance.init(), [4, this.languageInstance.resolveLanguage()];
                    case 3:
                        g.sent(), t = null, n = null, r = null, i = function() {
                            return Pe(h, void 0, void 0, (function() {
                                return Ue(this, (function(e) {
                                    return r ? [2, r] : [2, this.loadSettings()]
                                }))
                            }))
                        }, g.label = 4;
                    case 4:
                        return g.trys.push([4, 7, , 9]), [4, this.apiInstance.fetchDpsJson()];
                    case 5:
                        return n = g.sent(), [4, this.apiInstance.fetchCoreJson()];
                    case 6:
                        return t = g.sent(), [3, 9];
                    case 7:
                        return g.sent(), [4, i()];
                    case 8:
                        return r = g.sent(), t = function(e) {
                            return {
                                buttonDisplayLocation: e.buttonDisplayLocation,
                                buttonPrivacyCloseIcon: e.buttonPrivacyCloseIcon,
                                buttonPrivacyOpenIconUrl: e.buttonPrivacyOpenIconUrl,
                                ccpa: (r = e.ccpa, {
                                    iabAgreementExists: r.iabAgreementExists,
                                    isActive: r.isActive,
                                    region: r.region,
                                    reshowAfterDays: r.reshowAfterDays,
                                    showOnPageLoad: r.showOnPageLoad
                                }),
                                consentSharingIFrameIsActive: e.consentSharingIFrameIsActive,
                                customization: (n = e.customization, n ? {
                                    color: n.color ? {
                                        primary: n.color.primary,
                                        privacyButtonBackground: n.color.privacyButtonBackground,
                                        privacyButtonIcon: n.color.privacyButtonIcon
                                    } : null
                                } : n),
                                dataExchangeOnPage: e.dataExchangeOnPage,
                                displayOnlyForEU: e.displayOnlyForEU,
                                enableBotDetection: e.enableBotDetection,
                                googleConsentMode: e.googleConsentMode,
                                interactionAnalytics: e.interactionAnalytics,
                                languagesAvailable: e.languagesAvailable,
                                privacyButtonIsVisible: e.privacyButtonIsVisible,
                                reshowBanner: e.reshowBanner,
                                settingsId: e.settingsId,
                                showInitialViewForVersionChange: e.showInitialViewForVersionChange,
                                tagLoggerIsActive: e.tagLoggerIsActive,
                                tcf2: (t = e.tcf2, {
                                    resurfaceIABLegalBasisChanged: t.resurfaceIABLegalBasisChanged,
                                    resurfacePeriodEnded: t.resurfacePeriodEnded,
                                    resurfacePurposeChanged: t.resurfacePurposeChanged,
                                    resurfaceVendorAdded: t.resurfaceVendorAdded
                                }),
                                tcf2Enabled: e.tcf2Enabled,
                                version: e.version
                            };
                            var t, n, r
                        }(r), n = Vt(r), [3, 9];
                    case 9:
                        if (!t || !n) throw new Error;
                        return this.botInstance.isBotEnabled = t.enableBotDetection, !t.consentSharingIFrameIsActive || this.botInstance.isRobot() ? [3, 11] : [4, fn.init({
                            useEuCdn: this.initOptions.euMode || !1
                        }, this.domains).then((function() {
                            return Pe(h, void 0, void 0, (function() {
                                var e;
                                return Ue(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return fn.setCrossDomainId(this.apiInstance.getSettingsId()), fn.setIsCrossDomainAvailable(!0), fn.setUseEuCdn(this.initOptions.euMode || !1), this.languageInstance.getPrimaryLanguage() ? [3, 3] : [4, fn.getCrossDomainLanguage().catch((function() {
                                                return console.warn(Zt.CROSS_DOMAIN_LANGUAGE_NOT_AVAILABLE), ""
                                            }))];
                                        case 1:
                                            return e = t.sent(), [4, this.changeLanguage(e)];
                                        case 2:
                                            t.sent(), t.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                }))
                            }))
                        })).catch((function(e) {
                            fn.setIsCrossDomainAvailable(!1), fn.removeIFrame("uc-cross-domain-bridge"), console.warn(Zt.CROSS_DOMAIN_FEATURE_NOT_AVAILABLE, e)
                        }))];
                    case 10:
                        g.sent(), g.label = 11;
                    case 11:
                        return this.botInstance.isRobot() ? this.initOptions.suppressCmpDisplay = !0 : this.initOptions.disableTracking || this.addTrackingPixel(this.apiInstance.getSettingsId(), !0 === this.initOptions.euMode), o = this.initOptions.useOnlySettingsV2, s = this.apiInstance.getJsonFileLanguage(), [4, this.settingsV2.init(t, n, s)];
                    case 12:
                        return g.sent(), [4, this.uiInstance.resolveUiVariant(t.tcf2Enabled)];
                    case 13:
                        return a = g.sent(), o ? [3, 15] : [4, i()];
                    case 14:
                        return r = g.sent(), [3, 16];
                    case 15:
                        this.dataFacadeInstance.useOnlySettingsV2 = o, g.label = 16;
                    case 16:
                        return [4, this.settingsV2.initData(a, [], !1)];
                    case 17:
                        return g.sent(), [4, this.apiInstance.fetchTranslations()];
                    case 18:
                        return c = g.sent(), !this.initOptions.prefetchServices && this.settingsV2.allLegacyServicesHaveName ? [3, 20] : [4, this.settingsV2.extendServices(a, c)];
                    case 19:
                        return g.sent(), this.apiInstance.resetAggregatedServicesCache(), [3, 21];
                    case 20:
                        this.settingsV2.initLabels(a, c), g.label = 21;
                    case 21:
                        return [4, this.dataFacadeInstance.restoreUserSession(n)];
                    case 22:
                        return l = g.sent(), [4, this.uiInstance.init(this.initOptions)];
                    case 23:
                        return g.sent(), u = this.settingsV2.getTcfData(), yt(this.settingsV2.data) && u ? [4, this.settingsV2.data.init()] : [3, 25];
                    case 24:
                        g.sent(), g.label = 25;
                    case 25:
                        return d = [], yn.settingsExist() && (d = this.processStorageServicesAndSettings(this.settingsV2.data)), [4, this.uiInstance.resolveUIOptions(t)];
                    case 26:
                        return f = g.sent(), p = f.initialLayer, [4, this.settingsV2.initUI(p, a)];
                    case 27:
                        return g.sent(), u ? 0 !== p || this.botInstance.isRobot() ? [3, 29] : [4, u.setUIAsOpen()] : [3, 31];
                    case 28:
                        return g.sent(), [3, 31];
                    case 29:
                        return [4, u.setUIAsClosed()];
                    case 30:
                        g.sent(), g.label = 31;
                    case 31:
                        return this.botInstance.isRobot() || 2 !== a ? [3, 33] : [4, i()];
                    case 32:
                        r = g.sent(), g.label = 33;
                    case 33:
                        return !this.settingsV2.isTagLoggerActive() || this.botInstance.isRobot() ? [3, 35] : [4, dynamicImportPolyfill("./Taglogger-3c385033-0f229761.js",
                            import.meta.url).then((function(e) {
                            (new e.default).initTagLogger()
                        }))];
                    case 34:
                        g.sent(), g.label = 35;
                    case 35:
                        return this.eventDispatcherInstance.init(this.settingsV2.getDataExchangeSettings()), [4, this.updateStorage(d, l)];
                    case 36:
                        return g.sent(), [2, f]
                }
            }))
        }))
    }, e.prototype.acceptAllForTCF = function(e) {
        return Pe(this, void 0, void 0, (function() {
            var t;
            return Ue(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return (t = this.settingsV2.getTcfData()) ? [4, t.acceptAllDisclosed(e)] : [3, 2];
                    case 1:
                        n.sent(), n.label = 2;
                    case 2:
                        return [2]
                }
            }))
        }))
    }, e.prototype.acceptAllServices = function(e) {
        return void 0 === e && (e = "explicit"), Pe(this, void 0, void 0, (function() {
            return Ue(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return this.dataFacadeInstance.execute(this.settingsV2.getUpdatedServicesWithConsent(Ie.TRUE), this.settingsV2.getUpdatedServicesDataWithConsent(Ie.TRUE), "onAcceptAllServices", e), [4, this.saveUserActionPerformed()];
                    case 1:
                        return t.sent(), [2]
                }
            }))
        }))
    }, e.prototype.changeLanguage = function(e) {
        var t;
        return Pe(this, void 0, void 0, (function() {
            var n, r, i, o, s, a, c, l, u, d, f, p, h, g, v, y, m;
            return Ue(this, (function(_) {
                switch (_.label) {
                    case 0:
                        return n = null === (t = this.settingsV2.core) || void 0 === t ? void 0 : t.language.available, r = n && n.some((function(t) {
                            return t === e
                        })), i = e !== this.apiInstance.getJsonFileLanguage() && r, o = this.settingsV2, s = o.core, a = o.data, i && a && s ? (this.apiInstance.setJsonFileLanguage(e), this.apiInstance.resetTranslationsCache(), this.settingsV2.language = e, [4, this.loadSettings()]) : [3, 12];
                    case 1:
                        c = _.sent(), l = null, _.label = 2;
                    case 2:
                        return _.trys.push([2, 4, , 5]), [4, this.apiInstance.fetchDpsJson()];
                    case 3:
                        return l = _.sent(), [3, 5];
                    case 4:
                        return _.sent(), l = Vt(c), [3, 5];
                    case 5:
                        return this.settingsV2.dpsJson = l, u = this.uiInstance, d = u.selectedLayer, f = u.variant, [4, this.apiInstance.fetchTranslations()];
                    case 6:
                        return p = _.sent(), null === f || null === d || null == l ? [3, 10] : !this.settingsV2.isAggregatorLoaded && this.settingsV2.checkIfServiceNameExists(l.consentTemplates) ? [3, 8] : [4, this.settingsV2.extendServices(f, p)];
                    case 7:
                        return _.sent(), [3, 9];
                    case 8:
                        this.settingsV2.initLabels(f, p), _.label = 9;
                    case 9:
                        this.apiInstance.resetAggregatedServicesCache(), _.label = 10;
                    case 10:
                        return this.settingsV2.updateServicesLanguage(e), h = this.dataFacadeInstance.getMergedServicesAndSettingsFromStorage(a), g = h.mergedServicesV2, v = h.mergedServicesData, y = h.mergedSettingsData, s.language.selected = e, y.categories = this.settingsV2.mergeServicesDataIntoExistingCategories(v), this.settingsV2.data = y, (m = this.settingsV2.getDataTransferSettings()) && yn.saveSettings(yn.mapSettings(m, g), g), yt(y) ? [4, y.changeLanguage(e)] : [3, 12];
                    case 11:
                        _.sent(), _.label = 12;
                    case 12:
                        return [2]
                }
            }))
        }))
    }, e.prototype.denyAllForTCF = function(e) {
        return Pe(this, void 0, void 0, (function() {
            var t;
            return Ue(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return (t = this.settingsV2.getTcfData()) ? [4, t.denyAllDisclosed(e)] : [3, 2];
                    case 1:
                        n.sent(), n.label = 2;
                    case 2:
                        return [2]
                }
            }))
        }))
    }, e.prototype.denyAllServices = function(e) {
        return void 0 === e && (e = "explicit"), Pe(this, void 0, void 0, (function() {
            return Ue(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return this.dataFacadeInstance.execute(this.settingsV2.getUpdatedServicesWithConsent(Ie.FALSE), this.settingsV2.getUpdatedServicesDataWithConsent(Ie.FALSE), "onDenyAllServices", e), [4, this.saveUserActionPerformed()];
                    case 1:
                        return t.sent(), [2]
                }
            }))
        }))
    }, e.prototype.fetchIsUserInEU = function() {
        return Pe(this, void 0, void 0, (function() {
            return Ue(this, (function(e) {
                return [2, this.locationInstance.getIsUserInEU()]
            }))
        }))
    }, e.prototype.fetchUserCountry = function() {
        return Pe(this, void 0, void 0, (function() {
            return Ue(this, (function(e) {
                return [2, this.locationInstance.getUserCountryData()]
            }))
        }))
    }, e.prototype.getAbTestVariant = function() {
        return this.apiInstance.getAbTestVariant()
    }, e.prototype.getCategories = function() {
        return this.initOptions.prefetchServices || Mr("getCategories", "getCategoriesBaseInfo or getCategoriesFullInfo"), this.settingsV2.getCategoriesDataAndLabels()
    }, e.prototype.getCategoriesBaseInfo = function() {
        return this.settingsV2.getCategoriesBaseInfo()
    }, e.prototype.getCategoriesFullInfo = function() {
        return Pe(this, void 0, void 0, (function() {
            var e;
            return Ue(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return [4, this.apiInstance.fetchTranslations()];
                    case 1:
                        return e = t.sent(), [2, this.settingsV2.getCategoriesFullInfo(this.uiInstance.variant, e)]
                }
            }))
        }))
    }, e.prototype.getCcpaOptOutStatus = function() {
        var e;
        return (null === (e = this.settingsV2.getCcpaData()) || void 0 === e ? void 0 : e.getIsOptedOut()) || !1
    }, e.prototype.saveOptOutForCcpa = function(e, t) {
        return void 0 === t && (t = "explicit"), Pe(this, void 0, void 0, (function() {
            var n, r;
            return Ue(this, (function(i) {
                switch (i.label) {
                    case 0:
                        return (n = this.settingsV2.getCcpaData()) && n.getIsOptedOut() !== e ? (n.setCcpaStorage(e), r = {
                            consentAction: e ? "onDenyAllServices" : "onAcceptAllServices",
                            consentStatus: e ? Ie.FALSE : Ie.TRUE,
                            consentString: {
                                CCPA: yn.getCcpaString()
                            }
                        }, this.dataFacadeInstance.execute(this.settingsV2.getUpdatedServicesWithConsent(r.consentStatus), this.settingsV2.getUpdatedServicesDataWithConsent(r.consentStatus), r.consentAction, t, r.consentString), [4, this.saveUserActionPerformed()]) : [2];
                    case 1:
                        return i.sent(), [2]
                }
            }))
        }))
    }, e.prototype.saveDefaultForCcpa = function() {
        return Pe(this, void 0, void 0, (function() {
            return Ue(this, (function(e) {
                switch (e.label) {
                    case 0:
                        return yn.setCcpaTimeStamp(), [4, this.saveUserActionPerformed()];
                    case 1:
                        return e.sent(), [2]
                }
            }))
        }))
    }, e.prototype.getControllerId = function() {
        return this.controllerIdInstance.value
    }, e.prototype.getServices = function() {
        return this.initOptions.prefetchServices || Mr("getServices", "getServicesBaseInfo or getServicesFullInfo"), this.settingsV2.getServicesDataAndLabels()
    }, e.prototype.getServicesBaseInfo = function() {
        return this.settingsV2.getServicesBaseInfo()
    }, e.prototype.getServicesFullInfo = function() {
        return Pe(this, void 0, void 0, (function() {
            var e;
            return Ue(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return [4, this.apiInstance.fetchTranslations()];
                    case 1:
                        return e = t.sent(), [2, this.settingsV2.getServicesFullInfo(this.uiInstance.variant, e)]
                }
            }))
        }))
    }, e.prototype.getSettings = function() {
        var e = this;
        Mr("getSettings", "getSettingsCore and getControllerId");
        var t = this.settingsV2,
            n = t.core,
            r = t.data,
            i = t.legacySettings,
            o = t.translations;
        if (!n || !r || !i) throw new Error;
        return n && r ? {
            controllerId: r.controllerId,
            googleConsentMode: n.googleConsentMode,
            id: n.id,
            isCcpaEnabled: n.isCcpaEnabled,
            isTcfEnabled: n.isTcfEnabled,
            reshowBanner: n.reshowBanner,
            ui: function() {
                switch (e.uiInstance.variant) {
                    case 0:
                        return function(e, t, n) {
                            return Ne(Ne({}, kt(e, t)), {
                                ariaLabels: Pt,
                                buttons: {
                                    optOutNotice: {
                                        isHidden: t.ccpa.removeDoNotSellToggle,
                                        label: t.ccpa.optOutNoticeLabel || "Do not sell my personal information"
                                    },
                                    save: {
                                        label: t.ccpa.btnSave || "okay"
                                    },
                                    showSecondLayer: {
                                        isEnabled: !0,
                                        label: t.labels.btnMore,
                                        url: t.moreInfoButtonUrl || null
                                    }
                                },
                                firstLayer: {
                                    description: {
                                        default: t.ccpa.firstLayerDescription || "",
                                        short: t.ccpa.firstLayerMobileDescription || "",
                                        showShortDescriptionOnMobile: t.ccpa.firstLayerMobileDescriptionIsActive
                                    },
                                    isLanguageSelectorEnabled: !at(t.ccpa.firstLayerHideLanguageSwitch, !t.showLanguageDropdown),
                                    isOverlayEnabled: ut(t),
                                    title: t.ccpa.firstLayerTitle || "",
                                    variant: t.ccpa.firstLayerVariant || "BANNER"
                                },
                                labels: Ft(t, n),
                                secondLayer: {
                                    description: t.ccpa.secondLayerDescription || "",
                                    isLanguageSelectorEnabled: !at(t.ccpa.secondLayerHideLanguageSwitch, !t.showLanguageDropdown),
                                    isOverlayEnabled: dt(t),
                                    side: t.ccpa.secondLayerSide || "LEFT",
                                    tabs: {
                                        categories: {
                                            isEnabled: He(t.secondLayer.tabsCategoriesIsEnabled, !0),
                                            label: t.secondLayer.tabsCategoriesLabel
                                        },
                                        services: {
                                            isEnabled: He(t.secondLayer.tabsServicesIsEnabled, !0),
                                            label: t.secondLayer.tabsServicesLabel
                                        }
                                    },
                                    title: t.ccpa.secondLayerTitle || "",
                                    variant: t.ccpa.secondLayerVariant || "CENTER"
                                }
                            })
                        }(n, i, o);
                    case 2:
                        return function(e, t, n) {
                            return Ne(Ne({}, kt(e, t)), {
                                ariaLabels: Pt,
                                buttons: {
                                    acceptAll: {
                                        label: t.tcf2.buttonsAcceptAllLabel
                                    },
                                    denyAll: {
                                        isEnabled: t.tcf2.buttonsDenyAllIsEnabled,
                                        label: t.tcf2.buttonsDenyAllLabel
                                    },
                                    manageSettings: {
                                        label: t.tcf2.linksManageSettingsLabel
                                    },
                                    save: {
                                        isEnabled: !t.tcf2.firstLayerHideToggles || !t.tcf2.secondLayerHideToggles,
                                        label: t.tcf2.buttonsSaveLabel
                                    },
                                    showVendorTab: {
                                        label: t.tcf2.linksVendorListLinkLabel
                                    }
                                },
                                firstLayer: {
                                    description: {
                                        additionalInfo: t.tcf2.firstLayerAdditionalInfo || null,
                                        default: t.tcf2.firstLayerDescription,
                                        resurfaceNote: t.tcf2.firstLayerNoteResurface || null
                                    },
                                    disclaimer: {
                                        serviceScope: t.tcf2.firstLayerNoteService
                                    },
                                    hideButtonDeny: at(t.tcf2.firstLayerHideButtonDeny, !t.tcf2.buttonsDenyAllIsEnabled),
                                    hideNonIabPurposes: t.tcf2.hideNonIabOnFirstLayer,
                                    hideToggles: t.tcf2.firstLayerHideToggles,
                                    isOverlayEnabled: ut(t),
                                    showDescriptions: t.tcf2.firstLayerShowDescriptions,
                                    title: t.tcf2.firstLayerTitle
                                },
                                labels: xt(t, t.tcf2, n),
                                secondLayer: {
                                    description: t.tcf2.secondLayerDescription,
                                    hideButtonDeny: at(t.tcf2.secondLayerHideButtonDeny, !t.tcf2.buttonsDenyAllIsEnabled),
                                    hideLegitimateInterestToggles: t.tcf2.hideLegitimateInterestToggles,
                                    hideToggles: t.tcf2.secondLayerHideToggles,
                                    isOverlayEnabled: dt(t),
                                    showToggleAllVendors: t.tcf2.vendorToggleAll,
                                    tabs: {
                                        purposes: {
                                            label: t.tcf2.tabsPurposeLabel
                                        },
                                        vendors: {
                                            label: t.tcf2.tabsVendorsLabel
                                        }
                                    },
                                    title: t.tcf2.secondLayerTitle
                                },
                                toggles: {
                                    consent: {
                                        label: t.tcf2.togglesConsentToggleLabel
                                    },
                                    legitimateInterest: {
                                        label: t.tcf2.togglesLegIntToggleLabel
                                    },
                                    specialFeaturesToggle: {
                                        offLabel: t.tcf2.togglesSpecialFeaturesToggleOff,
                                        onLabel: t.tcf2.togglesSpecialFeaturesToggleOn
                                    }
                                }
                            })
                        }(n, i, o);
                    default:
                        return function(e, t, n) {
                            return Ne(Ne({}, kt(e, t)), {
                                ariaLabels: Pt,
                                buttons: {
                                    acceptAll: {
                                        label: t.labels.btnAcceptAll
                                    },
                                    denyAll: {
                                        isEnabled: t.btnDenyIsVisible,
                                        label: t.labels.btnDeny
                                    },
                                    save: {
                                        label: t.labels.btnSave
                                    },
                                    showSecondLayer: {
                                        isEnabled: !0,
                                        label: t.labels.btnMore,
                                        url: t.moreInfoButtonUrl || null
                                    }
                                },
                                firstLayer: {
                                    description: {
                                        default: t.bannerMessage || "",
                                        short: t.bannerMobileDescription || "",
                                        showShortDescriptionOnMobile: t.bannerMobileDescriptionIsActive
                                    },
                                    hideButtonDeny: at(t.firstLayer.hideButtonDeny, !t.btnDenyIsVisible),
                                    isCategoryTogglesEnabled: t.firstLayer.isCategoryTogglesEnabled,
                                    isLanguageSelectorEnabled: !at(t.firstLayer.hideLanguageSwitch, !t.showLanguageDropdown),
                                    isOverlayEnabled: ut(t),
                                    showCnilDenyLink: t.firstLayer.closeOption === tt.LINK,
                                    title: He(t.labels.firstLayerTitle, "Privacy Settings"),
                                    variant: He(t.firstLayer.variant, "BANNER")
                                },
                                labels: Ft(t, n),
                                secondLayer: {
                                    description: t.labels.titleCorner,
                                    hideButtonDeny: at(t.secondLayer.hideButtonDeny, !t.btnDenyIsVisible),
                                    hideTogglesForServices: He(t.secondLayer.hideTogglesForServices, !1),
                                    isLanguageSelectorEnabled: !at(t.secondLayer.hideLanguageSwitch, !t.showLanguageDropdown),
                                    isOverlayEnabled: dt(t),
                                    side: t.secondLayer.side || "LEFT",
                                    tabs: {
                                        categories: {
                                            isEnabled: He(t.secondLayer.tabsCategoriesIsEnabled, !0),
                                            label: t.secondLayer.tabsCategoriesLabel
                                        },
                                        services: {
                                            isEnabled: He(t.secondLayer.tabsServicesIsEnabled, !0),
                                            label: t.secondLayer.tabsServicesLabel
                                        }
                                    },
                                    title: t.labels.headerCorner,
                                    variant: t.secondLayer.variant || "CENTER"
                                }
                            })
                        }(n, i, o)
                }
            }(),
            version: n.version
        } : {}
    }, e.prototype.getSettingsCore = function() {
        var e = this.settingsV2.core;
        if (!e) throw new Error("Usercentrics: You have to call the init method before!");
        return e
    }, e.prototype.getSettingsLabels = function() {
        var e = this.settingsV2.labels;
        if (!e) throw new Error("Usercentrics: You have to call the init method before!");
        return e
    }, e.prototype.getSettingsData = function() {
        var e = this.settingsV2.data;
        if (!e) throw new Error("Usercentrics: You have to call the init method before!");
        return e
    }, e.prototype.getSettingsUI = function() {
        var e = this.settingsV2.ui;
        if (!e) throw new Error("Usercentrics: You have to call the init method before!");
        return e
    }, e.prototype.getAriaLabels = function() {
        var e;
        return (null === (e = this.settingsV2.labels) || void 0 === e ? void 0 : e.ariaLabels) || Pt
    }, e.prototype.getTCFData = function() {
        var e = this.settingsV2.getTcfData();
        return e ? e.getTCFData() : null
    }, e.prototype.setTCFUIAsClosed = function() {
        return Pe(this, void 0, void 0, (function() {
            var e;
            return Ue(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return (e = this.settingsV2.getTcfData()) ? [4, e.setUIAsClosed()] : [3, 2];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2]
                }
            }))
        }))
    }, e.prototype.setTCFUIAsOpen = function() {
        return Pe(this, void 0, void 0, (function() {
            var e;
            return Ue(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return (e = this.settingsV2.getTcfData()) ? [4, e.setUIAsOpen()] : [3, 2];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2]
                }
            }))
        }))
    }, e.prototype.updateChoicesForTCF = function(e, t) {
        return Pe(this, void 0, void 0, (function() {
            var n;
            return Ue(this, (function(r) {
                switch (r.label) {
                    case 0:
                        return (n = this.settingsV2.getTcfData()) ? [4, n.updateChoices(e, t)] : [3, 2];
                    case 1:
                        r.sent(), r.label = 2;
                    case 2:
                        return [2]
                }
            }))
        }))
    }, e.prototype.areAllConsentsAccepted = function() {
        return this.settingsV2.isTcfAvailable() ? this.settingsV2.areAllVendorsAndPurposesAccepted() && this.settingsV2.areAllServicesAccepted() : this.settingsV2.areAllServicesAccepted()
    }, e.prototype.restoreUserSession = function(e) {
        return Pe(this, void 0, void 0, (function() {
            var t;
            return Ue(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return this.controllerIdInstance.value = e, this.controllerIdInstance.needsSessionRestore = !0, this.settingsV2.setControllerId(e), (t = this.settingsV2.dpsJson) ? [4, this.dataFacadeInstance.restoreUserSession(t)] : [3, 2];
                    case 1:
                        n.sent() && this.enableServicesScripts(this.processStorageServicesAndSettings(this.settingsV2.data), this.settingsV2.getGoogleConsentMode(), "onSessionRestored"), n.label = 2;
                    case 2:
                        return [2]
                }
            }))
        }))
    }, e.prototype.clearStorage = function() {
        return Pe(this, void 0, void 0, (function() {
            return Ue(this, (function(e) {
                switch (e.label) {
                    case 0:
                        return [4, yn.clearAll()];
                    case 1:
                        return e.sent(), [2]
                }
            }))
        }))
    }, e.prototype.postMessageAmp = function(e, t, n) {
        return Pe(this, void 0, void 0, (function() {
            var r, i, o, s, a, c, l, u, d = this;
            return Ue(this, (function(f) {
                switch (f.label) {
                    case 0:
                        return r = this.settingsV2.isTcfAvailable(), [4, this.settingsV2.isCcpaAvailable()];
                    case 1:
                        return i = f.sent(), o = function() {
                            var e = d.settingsV2.getTcfData();
                            return r && (null == e ? void 0 : e.getTCString) ? e.getTCString() : i ? yn.getCcpaString() : ""
                        }, s = function() {
                            return Pe(d, void 0, void 0, (function() {
                                var e, t, n, o;
                                return Ue(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return o = this.settingsV2.getTcfData(), r && o ? (e = Se.TCF_V2, [4, o.getGdprApplies()]) : [3, 2];
                                        case 1:
                                            return t = s.sent(), n = this.settingsV2.getTCFPurposeOneTreatment(), [3, 3];
                                        case 2:
                                            i && (e = Se.CCPA), s.label = 3;
                                        case 3:
                                            return [2, Ne({
                                                consentStringType: e
                                            }, r && {
                                                gdprApplies: t,
                                                purposeOne: n
                                            })]
                                    }
                                }))
                            }))
                        }, c = [{
                            action: t,
                            type: e
                        }], (l = e === _e.CONSENT_RESPONSE && t !== be.DISMISS && (i || r)) ? (u = {}, [4, s()]) : [3, 3];
                    case 2:
                        u.consentMetadata = f.sent(), u.info = o(), l = u, f.label = 3;
                    case 3:
                        return a = Ne.apply(void 0, [Ne.apply(void 0, c.concat([l])), n && {
                            initialHeight: n
                        }]), [2, new Promise((function(e, t) {
                            try {
                                window.parent.postMessage(Ne({}, a), "*"), e()
                            } catch (e) {
                                t(e)
                            }
                        }))]
                }
            }))
        }))
    }, e.prototype.acceptAllAmp = function() {
        return Pe(this, void 0, void 0, (function() {
            return Ue(this, (function(e) {
                switch (e.label) {
                    case 0:
                        return [4, this.postMessageAmp(_e.CONSENT_RESPONSE, be.ACCEPT)];
                    case 1:
                        return e.sent(), [2]
                }
            }))
        }))
    }, e.prototype.denyAllAmp = function() {
        return Pe(this, void 0, void 0, (function() {
            return Ue(this, (function(e) {
                switch (e.label) {
                    case 0:
                        return [4, this.postMessageAmp(_e.CONSENT_RESPONSE, be.REJECT)];
                    case 1:
                        return e.sent(), [2]
                }
            }))
        }))
    }, e.prototype.saveTCFDataAmp = function(e) {
        return Pe(this, void 0, void 0, (function() {
            var t;
            return Ue(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return t = e.every((function(e) {
                            return e.status
                        })), 0 === e.length || t ? [4, this.postMessageAmp(_e.CONSENT_RESPONSE, be.ACCEPT)] : [3, 2];
                    case 1:
                        return n.sent(), [3, 4];
                    case 2:
                        return [4, this.postMessageAmp(_e.CONSENT_RESPONSE, be.REJECT)];
                    case 3:
                        n.sent(), n.label = 4;
                    case 4:
                        return [2]
                }
            }))
        }))
    }, e.prototype.dismissAmp = function() {
        return Pe(this, void 0, void 0, (function() {
            return Ue(this, (function(e) {
                switch (e.label) {
                    case 0:
                        return [4, this.postMessageAmp(_e.CONSENT_RESPONSE, be.DISMISS)];
                    case 1:
                        return e.sent(), [2]
                }
            }))
        }))
    }, e.prototype.enterFullscreenAmp = function() {
        return Pe(this, void 0, void 0, (function() {
            return Ue(this, (function(e) {
                return [2, this.postMessageAmp(_e.CONSENT_UI, be.FULLSCREEN)]
            }))
        }))
    }, e.prototype.uiReadyAmp = function() {
        return Pe(this, void 0, void 0, (function() {
            var e, t, n;
            return Ue(this, (function(r) {
                return e = this.settingsV2.labels, t = "60vh", e && (n = e.firstLayer.description.default.length, window.screen.height > 700 && n <= 250 && (t = "50vh")), [2, this.postMessageAmp(_e.CONSENT_UI, be.READY, t)]
            }))
        }))
    }, e.prototype.saveUserActionPerformed = function() {
        return Pe(this, void 0, void 0, (function() {
            return Ue(this, (function(e) {
                switch (e.label) {
                    case 0:
                        return yn.setUserActionPerformed(), this.uiInstance.selectedLayer ? [4, this.settingsV2.initUI(this.uiInstance.selectedLayer, this.uiInstance.variant)] : [3, 2];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return [2]
                }
            }))
        }))
    }, e.prototype.updateServices = function(e, t) {
        return void 0 === t && (t = "explicit"), Pe(this, void 0, void 0, (function() {
            var n, r;
            return Ue(this, (function(i) {
                switch (i.label) {
                    case 0:
                        return n = this.settingsV2.getUpdatedServicesWithDecisions(e), r = this.settingsV2.getUpdatedServicesDataWithDecisions(e), Me(n) && this.dataFacadeInstance.execute(n, r, "onUpdateServices", t), [4, this.saveUserActionPerformed()];
                    case 1:
                        return i.sent(), [2]
                }
            }))
        }))
    }, e.prototype.updateLayer = function(e) {
        return Pe(this, void 0, void 0, (function() {
            var t;
            return Ue(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return t = this.uiInstance.selectedLayer, this.uiInstance.selectedLayer = e, e === t ? [2] : [4, this.settingsV2.initUI(e, this.uiInstance.variant)];
                    case 1:
                        return n.sent(), 3 !== e ? [3, 3] : [4, this.loadServices()];
                    case 2:
                        n.sent(), n.label = 3;
                    case 3:
                        return [2]
                }
            }))
        }))
    }, e.prototype.loadServices = function() {
        return Pe(this, void 0, void 0, (function() {
            var e;
            return Ue(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return this.settingsV2.isAggregatorLoaded || !this.uiInstance.selectedLayer ? [2] : [4, this.apiInstance.fetchTranslations()];
                    case 1:
                        return e = t.sent(), [4, this.settingsV2.extendServices(this.uiInstance.variant, e)];
                    case 2:
                        return t.sent(), this.apiInstance.resetAggregatedServicesCache(), [2]
                }
            }))
        }))
    }, e.prototype.loadSettings = function() {
        return Pe(this, void 0, void 0, (function() {
            var e;
            return Ue(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return [4, this.apiInstance.fetchSettingsJson()];
                    case 1:
                        return e = t.sent(), this.settingsV2.legacySettings = e, [2, e]
                }
            }))
        }))
    }, e.prototype.updateStorage = function(e, t) {
        return Pe(this, void 0, void 0, (function() {
            var n;
            return Ue(this, (function(r) {
                switch (r.label) {
                    case 0:
                        return this.uiInstance.isFirstTimeVisit() ? [4, this.settingsV2.shouldAcceptAllImplicitlyOnInit()] : [3, 2];
                    case 1:
                        return r.sent() ? this.dataFacadeInstance.execute(this.settingsV2.getUpdatedServicesWithConsent(Ie.TRUE), this.settingsV2.getUpdatedServicesDataWithConsent(Ie.TRUE), "onNonEURegion", this.botInstance.isRobot() ? "explicit" : "implicit") : this.dataFacadeInstance.execute(this.settingsV2.getServicesDataAndLabels(), this.settingsV2.getServicesData(), "onInitialPageLoad", "implicit"), [3, 3];
                    case 2:
                        n = null != e ? e : this.processStorageServicesAndSettings(this.settingsV2.data), this.enableServicesScripts(n, this.settingsV2.getGoogleConsentMode(), t ? this.dataFacadeInstance.restoreAction : "onInitialPageLoad"), r.label = 3;
                    case 3:
                        return [2]
                }
            }))
        }))
    }, e.prototype.enableScriptsForServicesWithConsent = function() {
        ar.enableScriptsForServicesWithConsent(this.settingsV2.getServicesWithConsent())
    }, e.prototype.setTrackingPixel = function(e) {
        var t;
        !this.initOptions.disableTracking && (null === (t = this.settingsV2.coreJson) || void 0 === t ? void 0 : t.interactionAnalytics) && this.apiInstance.setTrackingPixel(e, this.getControllerId())
    }, e.prototype.addTrackingPixel = function(e, t) {
        void 0 === t && (t = !1);
        var n = new Image,
            r = this.domains && "" !== this.domains.app ? "".concat(this.domains.app, "/session/1px.png") : "https://app.usercentrics.eu/session/1px.png",
            i = t ? "https://app.eu.usercentrics.eu/session/1px.png" : r;
        n.src = "".concat(i, "?settingsId=").concat(e)
    }, e.prototype.processStorageServicesAndSettings = function(e) {
        if (!e) return [];
        var t = this.dataFacadeInstance.getMergedServicesAndSettingsFromStorage(e),
            n = t.dataTransferSettings,
            r = t.mergedServicesData,
            i = t.mergedServicesV2,
            o = t.updatedEssentialServicesV2;
        return this.dataFacadeInstance.mergeServicesAndSettings(i, r, n, o)
    }, e.prototype.enableServicesScripts = function(e, t, n) {
        ar.enableScriptsForServicesWithConsent(this.settingsV2.getServicesWithConsent()), this.eventDispatcherInstance.dispatch(e, t, n)
    }, e
}();
const zr = () => {
        try {
            const {
                clientConfig: e
            } = JSON.parse(window.name);
            return e
        } catch (e) {
            console.error(q.CLIENT_CONFIG_NOT_AVAILABLE)
        }
        return null
    },
    Jr = e => {
        const t = e.replace(/\s+/g, ""),
            n = e.match(/[^\r\n]+/g);
        if (!((null == n ? void 0 : n.reduce(((e, t) => e + t.replace(/\s+/g, "").length), 0)) === t.length)) return e;
        const r = [{
            bulletPoints: [],
            title: ""
        }];
        let i = 0;
        if (n) {
            n.forEach(((e, t) => {
                e.startsWith("*") ? r[i].bulletPoints.push(" " === e.substr(1, 1) ? e.substr(2) : e.substr(1)) : (t > 0 && (i += 1), r[i] = {
                    bulletPoints: [],
                    title: e
                })
            }));
            if (r.reduce(((e, t) => e + t.title.replace(/\s|\u002a+/g, "").length + t.bulletPoints.reduce(((e, t) => e + t.replace(/\s|\u002a+/g, "").length), 0)), 0) === t.replace(/\u002a+/g, "").length) return r
        }
        return e
    },
    qr = e => /\S+@\S+\.\S+/.test(e),
    Kr = (e, t) => {
        switch (e) {
            case Ae.BANNER:
                return {
                    layerPlacement: ne.BOTTOM,
                    testId: t.firstLayerBanner
                };
            case Ae.WALL:
                return {
                    layerPlacement: ne.CENTER,
                    testId: t.firstLayerWall
                };
            case Le.CENTER:
                return {
                    layerPlacement: ne.CENTER,
                    testId: t.secondLayer
                };
            case Le.SIDE:
                return {
                    layerPlacement: ne.SIDE,
                    testId: t.secondLayer
                };
            default:
                return {
                    layerPlacement: null,
                    testId: ""
                }
        }
    },
    Xr = e => null != e && "object" == typeof e,
    Zr = (e, t) => {
        const n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (const r of n) {
            const n = e[r],
                i = t[r],
                o = Xr(n) && Xr(i);
            if (o && !Zr(n, i) || !o && n !== i) return !1
        }
        return !0
    },
    Qr = (e, t, n) => {
        const r = {
            source: e === z.NONE || e === z.PRIVACY_BUTTON && t !== W.CMP_SHOWN ? Y.API : e,
            type: t
        };
        n && n.length && (r.abTestVariant = n);
        const i = new window.CustomEvent(J.ANALYTICS, {
            detail: r
        });
        window.dispatchEvent(i)
    },
    ei = (e, t) => {
        t({
            eventType: e
        })
    },
    ti = e => {
        for (; e.lastElementChild;) e.removeChild(e.lastElementChild)
    },
    ni = "BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial, sans-serif",
    ri = 400,
    ii = 700,
    oi = "1px solid #dedede",
    si = {
        lg: 992,
        md: 768,
        sm: 600,
        xl: 1200,
        xs: 400,
        xxl: 1472,
        xxxl: 1e4
    };

function ai() {
    return ai = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ai.apply(this, arguments)
}

function ci(e, t) {
    return ci = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
    }, ci(e, t)
}

function li(e) {
    return li = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    }, li(e)
}

function ui() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
    } catch (e) {
        return !1
    }
}

function di(e, t, n) {
    return di = ui() ? Reflect.construct : function(e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var i = new(Function.bind.apply(e, r));
        return n && ci(i, n.prototype), i
    }, di.apply(null, arguments)
}

function fi(e) {
    var t = "function" == typeof Map ? new Map : void 0;
    return fi = function(e) {
        if (null === e || ! function(e) {
                return -1 !== Function.toString.call(e).indexOf("[native code]")
            }(e)) return e;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n)
        }

        function n() {
            return di(e, arguments, li(this).constructor)
        }
        return n.prototype = Object.create(e.prototype, {
            constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), ci(n, e)
    }, fi(e)
}
var pi = function(e) {
    var t, n;

    function r(t) {
        return function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + t + " for more information.") || this)
    }
    return n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, ci(t, n), r
}(fi(Error));

function hi(e) {
    return Math.round(255 * e)
}

function gi(e, t, n) {
    return hi(e) + "," + hi(t) + "," + hi(n)
}

function vi(e, t, n, r) {
    if (void 0 === r && (r = gi), 0 === t) return r(n, n, n);
    var i = (e % 360 + 360) % 360 / 60,
        o = (1 - Math.abs(2 * n - 1)) * t,
        s = o * (1 - Math.abs(i % 2 - 1)),
        a = 0,
        c = 0,
        l = 0;
    i >= 0 && i < 1 ? (a = o, c = s) : i >= 1 && i < 2 ? (a = s, c = o) : i >= 2 && i < 3 ? (c = o, l = s) : i >= 3 && i < 4 ? (c = s, l = o) : i >= 4 && i < 5 ? (a = s, l = o) : i >= 5 && i < 6 && (a = o, l = s);
    var u = n - o / 2;
    return r(a + u, c + u, l + u)
}
var yi = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "00ffff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "0000ff",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "00ffff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "ff00ff",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "639",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};
var mi = /^#[a-fA-F0-9]{6}$/,
    _i = /^#[a-fA-F0-9]{8}$/,
    bi = /^#[a-fA-F0-9]{3}$/,
    Si = /^#[a-fA-F0-9]{4}$/,
    Ii = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,
    Ci = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,
    Ti = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
    Ei = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;

function Ai(e) {
    if ("string" != typeof e) throw new pi(3);
    var t = function(e) {
        if ("string" != typeof e) return e;
        var t = e.toLowerCase();
        return yi[t] ? "#" + yi[t] : e
    }(e);
    if (t.match(mi)) return {
        red: parseInt("" + t[1] + t[2], 16),
        green: parseInt("" + t[3] + t[4], 16),
        blue: parseInt("" + t[5] + t[6], 16)
    };
    if (t.match(_i)) {
        var n = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
        return {
            red: parseInt("" + t[1] + t[2], 16),
            green: parseInt("" + t[3] + t[4], 16),
            blue: parseInt("" + t[5] + t[6], 16),
            alpha: n
        }
    }
    if (t.match(bi)) return {
        red: parseInt("" + t[1] + t[1], 16),
        green: parseInt("" + t[2] + t[2], 16),
        blue: parseInt("" + t[3] + t[3], 16)
    };
    if (t.match(Si)) {
        var r = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
        return {
            red: parseInt("" + t[1] + t[1], 16),
            green: parseInt("" + t[2] + t[2], 16),
            blue: parseInt("" + t[3] + t[3], 16),
            alpha: r
        }
    }
    var i = Ii.exec(t);
    if (i) return {
        red: parseInt("" + i[1], 10),
        green: parseInt("" + i[2], 10),
        blue: parseInt("" + i[3], 10)
    };
    var o = Ci.exec(t.substring(0, 50));
    if (o) return {
        red: parseInt("" + o[1], 10),
        green: parseInt("" + o[2], 10),
        blue: parseInt("" + o[3], 10),
        alpha: parseFloat("" + o[4])
    };
    var s = Ti.exec(t);
    if (s) {
        var a = "rgb(" + vi(parseInt("" + s[1], 10), parseInt("" + s[2], 10) / 100, parseInt("" + s[3], 10) / 100) + ")",
            c = Ii.exec(a);
        if (!c) throw new pi(4, t, a);
        return {
            red: parseInt("" + c[1], 10),
            green: parseInt("" + c[2], 10),
            blue: parseInt("" + c[3], 10)
        }
    }
    var l = Ei.exec(t.substring(0, 50));
    if (l) {
        var u = "rgb(" + vi(parseInt("" + l[1], 10), parseInt("" + l[2], 10) / 100, parseInt("" + l[3], 10) / 100) + ")",
            d = Ii.exec(u);
        if (!d) throw new pi(4, t, u);
        return {
            red: parseInt("" + d[1], 10),
            green: parseInt("" + d[2], 10),
            blue: parseInt("" + d[3], 10),
            alpha: parseFloat("" + l[4])
        }
    }
    throw new pi(5)
}

function Li(e) {
    return function(e) {
        var t, n = e.red / 255,
            r = e.green / 255,
            i = e.blue / 255,
            o = Math.max(n, r, i),
            s = Math.min(n, r, i),
            a = (o + s) / 2;
        if (o === s) return void 0 !== e.alpha ? {
            hue: 0,
            saturation: 0,
            lightness: a,
            alpha: e.alpha
        } : {
            hue: 0,
            saturation: 0,
            lightness: a
        };
        var c = o - s,
            l = a > .5 ? c / (2 - o - s) : c / (o + s);
        switch (o) {
            case n:
                t = (r - i) / c + (r < i ? 6 : 0);
                break;
            case r:
                t = (i - n) / c + 2;
                break;
            default:
                t = (n - r) / c + 4
        }
        return t *= 60, void 0 !== e.alpha ? {
            hue: t,
            saturation: l,
            lightness: a,
            alpha: e.alpha
        } : {
            hue: t,
            saturation: l,
            lightness: a
        }
    }(Ai(e))
}
var wi = function(e) {
    return 7 === e.length && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e
};

function Oi(e) {
    var t = e.toString(16);
    return 1 === t.length ? "0" + t : t
}

function Ri(e) {
    return Oi(Math.round(255 * e))
}

function Di(e, t, n) {
    return wi("#" + Ri(e) + Ri(t) + Ri(n))
}

function Ni(e, t, n) {
    return vi(e, t, n, Di)
}

function Pi(e, t, n) {
    if ("number" == typeof e && "number" == typeof t && "number" == typeof n) return wi("#" + Oi(e) + Oi(t) + Oi(n));
    if ("object" == typeof e && void 0 === t && void 0 === n) return wi("#" + Oi(e.red) + Oi(e.green) + Oi(e.blue));
    throw new pi(6)
}

function Ui(e, t, n, r) {
    if ("string" == typeof e && "number" == typeof t) {
        var i = Ai(e);
        return "rgba(" + i.red + "," + i.green + "," + i.blue + "," + t + ")"
    }
    if ("number" == typeof e && "number" == typeof t && "number" == typeof n && "number" == typeof r) return r >= 1 ? Pi(e, t, n) : "rgba(" + e + "," + t + "," + n + "," + r + ")";
    if ("object" == typeof e && void 0 === t && void 0 === n && void 0 === r) return e.alpha >= 1 ? Pi(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
    throw new pi(7)
}

function Fi(e) {
    if ("object" != typeof e) throw new pi(8);
    if (function(e) {
            return "number" == typeof e.red && "number" == typeof e.green && "number" == typeof e.blue && "number" == typeof e.alpha
        }(e)) return Ui(e);
    if (function(e) {
            return "number" == typeof e.red && "number" == typeof e.green && "number" == typeof e.blue && ("number" != typeof e.alpha || void 0 === e.alpha)
        }(e)) return Pi(e);
    if (function(e) {
            return "number" == typeof e.hue && "number" == typeof e.saturation && "number" == typeof e.lightness && "number" == typeof e.alpha
        }(e)) return function(e, t, n, r) {
        if ("number" == typeof e && "number" == typeof t && "number" == typeof n && "number" == typeof r) return r >= 1 ? Ni(e, t, n) : "rgba(" + vi(e, t, n) + "," + r + ")";
        if ("object" == typeof e && void 0 === t && void 0 === n && void 0 === r) return e.alpha >= 1 ? Ni(e.hue, e.saturation, e.lightness) : "rgba(" + vi(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
        throw new pi(2)
    }(e);
    if (function(e) {
            return "number" == typeof e.hue && "number" == typeof e.saturation && "number" == typeof e.lightness && ("number" != typeof e.alpha || void 0 === e.alpha)
        }(e)) return function(e, t, n) {
        if ("number" == typeof e && "number" == typeof t && "number" == typeof n) return Ni(e, t, n);
        if ("object" == typeof e && void 0 === t && void 0 === n) return Ni(e.hue, e.saturation, e.lightness);
        throw new pi(1)
    }(e);
    throw new pi(8)
}

function ki(e, t, n) {
    return function() {
        var r = n.concat(Array.prototype.slice.call(arguments));
        return r.length >= t ? e.apply(this, r) : ki(e, t, r)
    }
}

function xi(e) {
    return ki(e, e.length, [])
}

function Vi(e, t) {
    if ("transparent" === t) return t;
    var n, r, i, o = Li(t);
    return Fi(ai({}, o, {
        lightness: (n = 0, r = 1, i = o.lightness - parseFloat(e), Math.max(n, Math.min(r, i)))
    }))
}
var Bi = xi(Vi);

function Mi(e) {
    if ("transparent" === e) return 0;
    var t = Ai(e),
        n = Object.keys(t).map((function(e) {
            var n = t[e] / 255;
            return n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
        })),
        r = n[0],
        i = n[1],
        o = n[2];
    return parseFloat((.2126 * r + .7152 * i + .0722 * o).toFixed(3))
}

function Gi(e, t) {
    var n = function(e, t) {
        var n = Mi(e),
            r = Mi(t);
        return parseFloat((n > r ? (n + .05) / (r + .05) : (r + .05) / (n + .05)).toFixed(2))
    }(e, t);
    return {
        AA: n >= 4.5,
        AALarge: n >= 3,
        AAA: n >= 7,
        AAALarge: n >= 4.5
    }
}

function Hi(e, t, n) {
    if ("transparent" === t) return n;
    if ("transparent" === n) return t;
    if (0 === e) return n;
    var r = Ai(t),
        i = ai({}, r, {
            alpha: "number" == typeof r.alpha ? r.alpha : 1
        }),
        o = Ai(n),
        s = ai({}, o, {
            alpha: "number" == typeof o.alpha ? o.alpha : 1
        }),
        a = i.alpha - s.alpha,
        c = 2 * parseFloat(e) - 1,
        l = ((c * a == -1 ? c : c + a) / (1 + c * a) + 1) / 2,
        u = 1 - l;
    return Ui({
        red: Math.floor(i.red * l + s.red * u),
        green: Math.floor(i.green * l + s.green * u),
        blue: Math.floor(i.blue * l + s.blue * u),
        alpha: i.alpha * parseFloat(e) + s.alpha * (1 - parseFloat(e))
    })
}
var $i = xi(Hi);

function ji(e, t) {
    return "transparent" === t ? t : $i(parseFloat(e), "rgb(255, 255, 255)", t)
}
var Yi = xi(ji);
const Wi = {
        base: {
            xxs: "4px",
            xs: "8px",
            sm: "12px",
            md: "16px",
            lg: "20px",
            xl: "24px",
            xxl: "28px",
            xxxl: "32px",
            xxxxl: "36px"
        },
        mobile: {
            xxs: "2px",
            xs: "4px",
            sm: "6px",
            md: "8px",
            lg: "10px",
            xl: "12px",
            xxl: "14px",
            xxxl: "16px",
            xxxxl: "18px"
        }
    },
    zi = (e, t = te.MIN_WIDTH) => `(${t} ${e}px)`,
    {
        sm: Ji,
        md: qi
    } = si,
    Ki = {
        ie11: " @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none)",
        mobileLandscape: `@media ${zi(qi,te.MAX_HEIGHT)} and (orientation: landscape)`,
        mobilePortrait: `@media ${zi(qi,te.MAX_WIDTH)} and (orientation: portrait)`,
        mobilePortraitXS: `@media ${zi(Ji,te.MAX_WIDTH)}`
    };

function Xi(e, t) {
    return Gi(e, t.primary).AA ? t.primary : t.quaternary
}
const Zi = e => ({
    dark: Bi(.1, e),
    default: e
});

function Qi(e) {
    const t = Yi(.2, e),
        n = Yi(.84, e),
        r = Yi(.98, e);
    return {
        [Z.PRIMARY]: Zi(e),
        [Z.SECONDARY]: Zi(t),
        [Z.TERTIARY]: Zi(n),
        [Z.QUATERNARY]: Zi(r),
        [Z.NEUTRAL]: Zi("hsl(0.0, 0%, 96.0%)")
    }
}

function eo(e) {
    return e && e !== ni ? `${e},${ni}` : ni
}

function to(e = ni, t = 14, n = "hsl(0.0, 0%, 19%)", r = !1) {
    return {
        color: {
            [Q.PRIMARY]: n,
            [Q.SECONDARY]: Yi(.2, n),
            [Q.TERTIARY]: Yi(.84, n),
            [Q.QUATERNARY]: Yi(.98, n)
        },
        font: eo(e),
        rtlEnabled: r,
        scaleFactor: t / 14,
        size: {
            [ee.LARGE]: "1.125em",
            [ee.MEDIUM]: "1em",
            [ee.SMALL]: "0.875em",
            [ee.XSMALL]: "0.75em",
            root: `${t}px`
        },
        weight: {
            bold: 700,
            light: 250,
            regular: 400,
            semiBold: 550
        }
    }
}
const no = (e, t, n, r, i) => {
        const o = (e => "auto" === e ? e : "number" == typeof e && 0 !== e || "string" == typeof e && !e.includes("px") ? `${e}px` : "string" == typeof e ? e : "0")(n),
            s = i || "";
        let a = "";
        r && (a = r !== X.NONE ? `${o} ${r} ${s}` : `${X.NONE}`);
        const c = e.typography.rtlEnabled;
        switch (t) {
            case K.FLEX_ALIGNMENT_LEFT:
                return c ? `${K.FLEX_ALIGNMENT_RIGHT}` : `${K.FLEX_ALIGNMENT_LEFT}`;
            case K.FLEX_ALIGNMENT_RIGHT:
                return c ? `${K.FLEX_ALIGNMENT_LEFT}` : `${K.FLEX_ALIGNMENT_RIGHT}`;
            case K.TEXT_ALIGNMENT_LEFT:
                return c ? `${K.TEXT_ALIGNMENT_RIGHT}` : `${K.TEXT_ALIGNMENT_LEFT}`;
            case K.TEXT_ALIGNMENT_RIGHT:
                return c ? `${K.TEXT_ALIGNMENT_LEFT}` : `${K.TEXT_ALIGNMENT_RIGHT}`;
            case K.FLOAT_LEFT:
                return c ? `${K.FLOAT_RIGHT}` : `${K.FLOAT_LEFT}`;
            case K.FLOAT_RIGHT:
                return c ? `${K.FLOAT_LEFT}` : `${K.FLOAT_RIGHT}`;
            case K.PADDING_LEFT:
                return c ? `${K.PADDING_RIGHT} ${o}` : `${K.PADDING_LEFT} ${o}`;
            case K.PADDING_RIGHT:
                return c ? `${K.PADDING_LEFT} ${o}` : `${K.PADDING_RIGHT} ${o}`;
            case K.MARGIN_LEFT:
                return c ? `${K.MARGIN_RIGHT} ${o}` : `${K.MARGIN_LEFT} ${o}`;
            case K.MARGIN_RIGHT:
                return c ? `${K.MARGIN_LEFT} ${o}` : `${K.MARGIN_RIGHT} ${o}`;
            case K.BORDER_LEFT:
                return c ? `${K.BORDER_RIGHT} ${a};` : `${K.BORDER_LEFT} ${a}`;
            case K.BORDER_RIGHT:
                return c ? `${K.BORDER_LEFT} ${a};` : `${K.BORDER_RIGHT} ${a}`;
            case K.BORDER_RADIUS_BOTTOM_LEFT:
                return c ? `${K.BORDER_RADIUS_BOTTOM_RIGHT} ${o}` : `${K.BORDER_RADIUS_BOTTOM_LEFT} ${o}`;
            case K.BORDER_RADIUS_BOTTOM_RIGHT:
                return c ? `${K.BORDER_RADIUS_BOTTOM_LEFT} ${o}` : `${K.BORDER_RADIUS_BOTTOM_RIGHT} ${o}`;
            case K.BORDER_RADIUS_TOP_LEFT:
                return c ? `${K.BORDER_RADIUS_TOP_RIGHT} ${o}` : `${K.BORDER_RADIUS_TOP_LEFT} ${o}`;
            case K.BORDER_RADIUS_TOP_RIGHT:
                return c ? `${K.BORDER_RADIUS_TOP_LEFT} ${o}` : `${K.BORDER_RADIUS_TOP_RIGHT} ${o}`;
            case K.OBJECT_POSITION_LEFT:
                return c ? `${K.OBJECT_POSITION_RIGHT} ${o}` : `${K.OBJECT_POSITION_LEFT} ${o}`;
            case K.OBJECT_POSITION_RIGHT:
                return c ? `${K.OBJECT_POSITION_LEFT} ${o}` : `${K.OBJECT_POSITION_RIGHT} ${o}`;
            case K.POSITION_RIGHT:
                return c ? `${K.POSITION_LEFT} ${o}` : `${K.POSITION_RIGHT} ${o}`;
            case K.POSITION_LEFT:
                return c ? `${K.POSITION_RIGHT} ${o}` : `${K.POSITION_LEFT} ${o}`;
            default:
                return ""
        }
    },
    ro = (e, t, n) => Zi(n || Xi(e, t)),
    io = e => `${e}px`,
    oo = (e, t) => t && !Tt(t) ? {
        color: Qi(t.primaryColor),
        typography: to(t.font.family, t.font.size, "hsl(0.0, 0%, 19%)", e)
    } : {
        color: Qi("hsl(214.9, 100%, 32.4%)"),
        typography: to(ni, 14, "hsl(0.0, 0%, 19%)")
    },
    so = (e, t) => {
        const {
            color: n,
            typography: r
        } = oo(e, t), i = (({
            neutral: e,
            primary: t
        }, {
            color: n
        }, r) => {
            var i, o, s, a, c, l;
            return {
                accept: {
                    bg: Zi(r && !Tt(r) && !St(r) && r.buttons.accept.backgroundColor ? null == r ? void 0 : r.buttons.accept.backgroundColor : t.default),
                    text: ro(t.default, n, !r || Tt(r) || St(r) ? null : r.buttons.accept.textColor)
                },
                alignment: !r || Tt(r) || St(r) ? De.HORIZONTAL : r.buttons.alignment,
                borderRadius: !r || Tt(r) || St(r) ? "4px" : r.buttons.borderRadius,
                deny: {
                    bg: Zi(r && !Tt(r) && !St(r) && null !== (i = r.buttons.deny) && void 0 !== i && i.backgroundColor ? r.buttons.deny.backgroundColor : e.default),
                    text: ro(e.default, n, r && !Tt(r) && !St(r) && null !== (o = r.buttons.deny) && void 0 !== o && o.textColor ? null == r ? void 0 : r.buttons.deny.textColor : null)
                },
                more: {
                    bg: Zi(Ct(r) && null !== (s = r.buttons.more) && void 0 !== s && s.backgroundColor ? null == r ? void 0 : r.buttons.more.backgroundColor : "#0045A5"),
                    text: ro(e.default, n, Ct(r) && null !== (a = r.buttons.more) && void 0 !== a && a.textColor ? r.buttons.more.textColor : null)
                },
                privacy: {
                    bg: (() => {
                        if (r) {
                            if (Tt(r) && r.backgroundColor) return Zi(r.backgroundColor);
                            if (!Tt(r) && r.layer.backgroundColor) return "#ffffff" !== r.layer.backgroundColor.toLowerCase() ? Zi(r.layer.backgroundColor) : r.primaryColor && "#ffffff" !== r.primaryColor.toLowerCase() ? Zi(r.primaryColor) : t.default && "#ffffff" !== t.default.toLowerCase() ? Zi(t.default) : Zi("#0045A5");
                            if (!Tt(r) && r.primaryColor && "#ffffff" !== r.primaryColor.toLowerCase()) return Zi(r.primaryColor)
                        }
                        return t.default && "#ffffff" !== t.default.toLowerCase() ? Zi(t.default) : Zi("#0045A5")
                    })(),
                    desktopSize: io(Tt(r) && r.desktopSize ? r.desktopSize : 64),
                    icon: Tt(r) && r.iconColor ? r.iconColor : "#ffffff",
                    mobileSize: io(Tt(r) && r.mobileSize ? r.mobileSize : 44),
                    text: Zi("#ffffff")
                },
                save: {
                    bg: Zi(r && !Tt(r) && !St(r) && null !== (c = r.buttons.save) && void 0 !== c && c.backgroundColor ? r.buttons.save.backgroundColor : e.default),
                    text: ro(e.default, n, r && !Tt(r) && !St(r) && null !== (l = r.buttons.save) && void 0 !== l && l.textColor ? r.buttons.save.textColor : null)
                }
            }
        })(n, r, t);
        return {
            buttons: i,
            expandableLink: {
                color: r.color.primary
            },
            firstLayer: {
                secondLayerTrigger: !Tt(t) && (null == t ? void 0 : t.firstLayer.secondLayerTrigger) || Oe.LINK
            },
            layer: {
                backgroundColor: !Tt(t) && (null == t ? void 0 : t.layer.backgroundColor) || "#ffffff",
                borderRadius: !Tt(t) && (null == t ? void 0 : t.layer.borderRadius) || "8px",
                darkerBackgroundColor: Bi(.1, !Tt(t) && (null == t ? void 0 : t.layer.backgroundColor) || "#ffffff")
            },
            links: {
                fontColor: !Tt(t) && (null == t ? void 0 : t.links.fontColor) || "hsl(0.0, 0%, 19%)",
                iconColor: !Tt(t) && (null == t ? void 0 : t.links.iconColor) || "hsl(0.0, 0%, 19%)"
            },
            overlay: {
                color: !Tt(t) && (null == t ? void 0 : t.overlay.backgroundColor) || "#333",
                opacity: !Tt(t) && (null == t ? void 0 : t.overlay.opacity) || .7
            },
            secondLayer: {
                content: {
                    backgroundColor: Yi(.98, !Tt(t) && (null == t ? void 0 : t.layer.backgroundColor) || "#ffffff")
                },
                dividers: Yi(.84, !Tt(t) && (null == t ? void 0 : t.textColor) || n.primary.default)
            },
            tabs: {
                color: !Tt(t) && (null == t ? void 0 : t.secondLayer.tabColor) || n.primary.default
            },
            text: {
                color: !Tt(t) && (null == t ? void 0 : t.textColor) || n.primary.default
            },
            toggle: {
                active: {
                    backgroundColor: !Tt(t) && (null == t ? void 0 : t.toggle.active.backgroundColor) || "#336AB7",
                    iconColor: !Tt(t) && (null == t ? void 0 : t.toggle.active.iconColor) || "#ffffff"
                },
                disabled: {
                    backgroundColor: !Tt(t) && (null == t ? void 0 : t.toggle.disabled.backgroundColor) || "#dedede",
                    iconColor: !Tt(t) && (null == t ? void 0 : t.toggle.disabled.iconColor) || "#ffffff"
                },
                inactive: {
                    backgroundColor: !Tt(t) && (null == t ? void 0 : t.toggle.inactive.backgroundColor) || "#595959",
                    iconColor: !Tt(t) && (null == t ? void 0 : t.toggle.inactive.iconColor) || "#ffffff"
                }
            },
            useBackgroundShadow: !(!Tt(t) && null != (null == t ? void 0 : t.useBackgroundShadow)) || (null == t ? void 0 : t.useBackgroundShadow)
        }
    };

function ao(e, t, n, r) {
    const {
        color: i,
        typography: o
    } = oo(t, e), s = r || {
        maxBannerWidth: 5e3,
        maxSideAndCenterContainerWidth: 625
    };
    return {
        color: i,
        spacing: Wi,
        typography: o,
        ui: so(t, e),
        uiSizes: s,
        uiVariant: n
    }
}
const {
    color: co,
    typography: lo
} = oo(!1), uo = {
    color: co,
    spacing: Wi,
    typography: lo,
    ui: so(!1),
    uiSizes: {
        maxBannerWidth: 5e3,
        maxSideAndCenterContainerWidth: 625
    },
    uiVariant: sr.DEFAULT
};
var fo = {
        exports: {}
    },
    po = {},
    ho = 60103,
    go = 60106,
    vo = 60107,
    yo = 60108,
    mo = 60114,
    _o = 60109,
    bo = 60110,
    So = 60112,
    Io = 60113,
    Co = 60120,
    To = 60115,
    Eo = 60116,
    Ao = 60121,
    Lo = 60122,
    wo = 60117,
    Oo = 60129,
    Ro = 60131;
if ("function" == typeof Symbol && Symbol.for) {
    var Do = Symbol.for;
    ho = Do("react.element"), go = Do("react.portal"), vo = Do("react.fragment"), yo = Do("react.strict_mode"), mo = Do("react.profiler"), _o = Do("react.provider"), bo = Do("react.context"), So = Do("react.forward_ref"), Io = Do("react.suspense"), Co = Do("react.suspense_list"), To = Do("react.memo"), Eo = Do("react.lazy"), Ao = Do("react.block"), Lo = Do("react.server.block"), wo = Do("react.fundamental"), Oo = Do("react.debug_trace_mode"), Ro = Do("react.legacy_hidden")
}

function No(e) {
    if ("object" == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
            case ho:
                switch (e = e.type) {
                    case vo:
                    case mo:
                    case yo:
                    case Io:
                    case Co:
                        return e;
                    default:
                        switch (e = e && e.$$typeof) {
                            case bo:
                            case So:
                            case Eo:
                            case To:
                            case _o:
                                return e;
                            default:
                                return t
                        }
                }
            case go:
                return t
        }
    }
}
var Po = _o,
    Uo = ho,
    Fo = So,
    ko = vo,
    xo = Eo,
    Vo = To,
    Bo = go,
    Mo = mo,
    Go = yo,
    Ho = Io;
po.ContextConsumer = bo, po.ContextProvider = Po, po.Element = Uo, po.ForwardRef = Fo, po.Fragment = ko, po.Lazy = xo, po.Memo = Vo, po.Portal = Bo, po.Profiler = Mo, po.StrictMode = Go, po.Suspense = Ho, po.isAsyncMode = function() {
    return !1
}, po.isConcurrentMode = function() {
    return !1
}, po.isContextConsumer = function(e) {
    return No(e) === bo
}, po.isContextProvider = function(e) {
    return No(e) === _o
}, po.isElement = function(e) {
    return "object" == typeof e && null !== e && e.$$typeof === ho
}, po.isForwardRef = function(e) {
    return No(e) === So
}, po.isFragment = function(e) {
    return No(e) === vo
}, po.isLazy = function(e) {
    return No(e) === Eo
}, po.isMemo = function(e) {
    return No(e) === To
}, po.isPortal = function(e) {
    return No(e) === go
}, po.isProfiler = function(e) {
    return No(e) === mo
}, po.isStrictMode = function(e) {
    return No(e) === yo
}, po.isSuspense = function(e) {
    return No(e) === Io
}, po.isValidElementType = function(e) {
    return "string" == typeof e || "function" == typeof e || e === vo || e === mo || e === Oo || e === yo || e === Io || e === Co || e === Ro || "object" == typeof e && null !== e && (e.$$typeof === Eo || e.$$typeof === To || e.$$typeof === _o || e.$$typeof === bo || e.$$typeof === So || e.$$typeof === wo || e.$$typeof === Ao || e[0] === Lo)
}, po.typeOf = No, fo.exports = po;
var $o, jo, Yo, Wo = 0,
    zo = [],
    Jo = a.__b,
    qo = a.__r,
    Ko = a.diffed,
    Xo = a.__c,
    Zo = a.unmount;

function Qo(e, t) {
    a.__h && a.__h(jo, e, Wo || t), Wo = 0;
    var n = jo.__H || (jo.__H = {
        __: [],
        __h: []
    });
    return e >= n.__.length && n.__.push({}), n.__[e]
}

function es(e) {
    return Wo = 1, ts(ps, e)
}

function ts(e, t, n) {
    var r = Qo($o++, 2);
    return r.t = e, r.__c || (r.__ = [n ? n(t) : ps(void 0, t), function(e) {
        var t = r.t(r.__[0], e);
        r.__[0] !== t && (r.__ = [t, r.__[1]], r.__c.setState({}))
    }], r.__c = jo), r.__
}

function ns(e, t) {
    var n = Qo($o++, 3);
    !a.__s && fs(n.__H, t) && (n.__ = e, n.__H = t, jo.__H.__h.push(n))
}

function rs(e, t) {
    var n = Qo($o++, 4);
    !a.__s && fs(n.__H, t) && (n.__ = e, n.__H = t, jo.__h.push(n))
}

function is(e) {
    return Wo = 5, os((function() {
        return {
            current: e
        }
    }), [])
}

function os(e, t) {
    var n = Qo($o++, 7);
    return fs(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__
}

function ss(e, t) {
    return Wo = 8, os((function() {
        return e
    }), t)
}

function as(e) {
    var t = jo.context[e.__c],
        n = Qo($o++, 9);
    return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(jo)), t.props.value) : e.__
}

function cs() {
    for (var e; e = zo.shift();)
        if (e.__P) try {
            e.__H.__h.forEach(us), e.__H.__h.forEach(ds), e.__H.__h = []
        } catch (t) {
            e.__H.__h = [], a.__e(t, e.__v)
        }
}
a.__b = function(e) {
    jo = null, Jo && Jo(e)
}, a.__r = function(e) {
    qo && qo(e), $o = 0;
    var t = (jo = e.__c).__H;
    t && (t.__h.forEach(us), t.__h.forEach(ds), t.__h = [])
}, a.diffed = function(e) {
    Ko && Ko(e);
    var t = e.__c;
    t && t.__H && t.__H.__h.length && (1 !== zo.push(t) && Yo === a.requestAnimationFrame || ((Yo = a.requestAnimationFrame) || function(e) {
        var t, n = function() {
                clearTimeout(r), ls && cancelAnimationFrame(t), setTimeout(e)
            },
            r = setTimeout(n, 100);
        ls && (t = requestAnimationFrame(n))
    })(cs)), jo = null
}, a.__c = function(e, t) {
    t.some((function(e) {
        try {
            e.__h.forEach(us), e.__h = e.__h.filter((function(e) {
                return !e.__ || ds(e)
            }))
        } catch (n) {
            t.some((function(e) {
                e.__h && (e.__h = [])
            })), t = [], a.__e(n, e.__v)
        }
    })), Xo && Xo(e, t)
}, a.unmount = function(e) {
    Zo && Zo(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.forEach((function(e) {
        try {
            us(e)
        } catch (e) {
            t = e
        }
    })), t && a.__e(t, n.__v))
};
var ls = "function" == typeof requestAnimationFrame;

function us(e) {
    var t = jo,
        n = e.__c;
    "function" == typeof n && (e.__c = void 0, n()), jo = t
}

function ds(e) {
    var t = jo;
    e.__c = e.__(), jo = t
}

function fs(e, t) {
    return !e || e.length !== t.length || t.some((function(t, n) {
        return t !== e[n]
    }))
}

function ps(e, t) {
    return "function" == typeof t ? t(e) : t
}

function hs(e, t) {
    for (var n in t) e[n] = t[n];
    return e
}

function gs(e, t) {
    for (var n in e)
        if ("__source" !== n && !(n in t)) return !0;
    for (var r in t)
        if ("__source" !== r && e[r] !== t[r]) return !0;
    return !1
}

function vs(e) {
    this.props = e
}

function ys(e, t) {
    function n(e) {
        var n = this.props.ref,
            r = n == e.ref;
        return !r && n && (n.call ? n(null) : n.current = null), t ? !t(this.props, e) || !r : gs(this.props, e)
    }

    function r(t) {
        return this.shouldComponentUpdate = n, _(e, t)
    }
    return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r
}(vs.prototype = new C).isPureReactComponent = !0, vs.prototype.shouldComponentUpdate = function(e, t) {
    return gs(this.props, e) || gs(this.state, t)
};
var ms = a.__b;
a.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), ms && ms(e)
};
var _s = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function bs(e) {
    function t(t, n) {
        var r = hs({}, t);
        return delete r.ref, e(r, (n = t.ref || n) && ("object" != typeof n || "current" in n) ? n : null)
    }
    return t.$$typeof = _s, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
}
var Ss = function(e, t) {
        return null == e ? null : R(R(e).map(t))
    },
    Is = {
        map: Ss,
        forEach: Ss,
        count: function(e) {
            return e ? R(e).length : 0
        },
        only: function(e) {
            var t = R(e);
            if (1 !== t.length) throw "Children.only";
            return t[0]
        },
        toArray: R
    },
    Cs = a.__e;
a.__e = function(e, t, n) {
    if (e.then)
        for (var r, i = t; i = i.__;)
            if ((r = i.__c) && r.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
    Cs(e, t, n)
};
var Ts = a.unmount;

function Es() {
    this.__u = 0, this.t = null, this.__b = null
}

function As(e) {
    var t = e.__.__c;
    return t && t.__e && t.__e(e)
}

function Ls(e) {
    var t, n, r;

    function i(i) {
        if (t || (t = e()).then((function(e) {
                n = e.default || e
            }), (function(e) {
                r = e
            })), r) throw r;
        if (!n) throw t;
        return _(n, i)
    }
    return i.displayName = "Lazy", i.__f = !0, i
}

function ws() {
    this.u = null, this.o = null
}
a.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), Ts && Ts(e)
}, (Es.prototype = new C).__c = function(e, t) {
    var n = t.__c,
        r = this;
    null == r.t && (r.t = []), r.t.push(n);
    var i = As(r.__v),
        o = !1,
        s = function() {
            o || (o = !0, n.__R = null, i ? i(a) : a())
        };
    n.__R = s;
    var a = function() {
            if (!--r.__u) {
                if (r.state.__e) {
                    var e = r.state.__e;
                    r.__v.__k[0] = function e(t, n, r) {
                        return t && (t.__v = null, t.__k = t.__k && t.__k.map((function(t) {
                            return e(t, n, r)
                        })), t.__c && t.__c.__P === n && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t
                    }(e, e.__c.__P, e.__c.__O)
                }
                var t;
                for (r.setState({
                        __e: r.__b = null
                    }); t = r.t.pop();) t.forceUpdate()
            }
        },
        c = !0 === t.__h;
    r.__u++ || c || r.setState({
        __e: r.__b = r.__v.__k[0]
    }), e.then(s, s)
}, Es.prototype.componentWillUnmount = function() {
    this.t = []
}, Es.prototype.render = function(e, t) {
    if (this.__b) {
        if (this.__v.__k) {
            var n = document.createElement("div"),
                r = this.__v.__k[0].__c;
            this.__v.__k[0] = function e(t, n, r) {
                return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function(e) {
                    "function" == typeof e.__c && e.__c()
                })), t.__c.__H = null), null != (t = hs({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), t.__c = null), t.__k = t.__k && t.__k.map((function(t) {
                    return e(t, n, r)
                }))), t
            }(this.__b, n, r.__O = r.__P)
        }
        this.__b = null
    }
    var i = t.__e && _(I, null, e.fallback);
    return i && (i.__h = null), [_(I, null, t.__e ? null : e.children), i]
};
var Os = function(e, t, n) {
    if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
        for (n = e.u; n;) {
            for (; n.length > 3;) n.pop()();
            if (n[1] < n[0]) break;
            e.u = n = n[2]
        }
};

function Rs(e) {
    return this.getChildContext = function() {
        return e.context
    }, e.children
}

function Ds(e) {
    var t = this,
        n = e.i;
    t.componentWillUnmount = function() {
        G(null, t.l), t.l = null, t.i = null
    }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = {
        nodeType: 1,
        parentNode: n,
        childNodes: [],
        appendChild: function(e) {
            this.childNodes.push(e), t.i.appendChild(e)
        },
        insertBefore: function(e, n) {
            this.childNodes.push(e), t.i.appendChild(e)
        },
        removeChild: function(e) {
            this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e)
        }
    }), G(_(Rs, {
        context: t.context
    }, e.__v), t.l)) : t.l && t.componentWillUnmount()
}(ws.prototype = new C).__e = function(e) {
    var t = this,
        n = As(t.__v),
        r = t.o.get(e);
    return r[0]++,
        function(i) {
            var o = function() {
                t.props.revealOrder ? (r.push(i), Os(t, e, r)) : i()
            };
            n ? n(o) : o()
        }
}, ws.prototype.render = function(e) {
    this.u = null, this.o = new Map;
    var t = R(e.children);
    e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
    for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
    return e.children
}, ws.prototype.componentDidUpdate = ws.prototype.componentDidMount = function() {
    var e = this;
    this.o.forEach((function(t, n) {
        Os(e, n, t)
    }))
};
var Ns = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    Ps = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    Us = "undefined" != typeof document,
    Fs = function(e) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(e)
    };
C.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(e) {
    Object.defineProperty(C.prototype, e, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + e]
        },
        set: function(t) {
            Object.defineProperty(this, e, {
                configurable: !0,
                writable: !0,
                value: t
            })
        }
    })
}));
var ks = a.event;

function xs() {}

function Vs() {
    return this.cancelBubble
}

function Bs() {
    return this.defaultPrevented
}
a.event = function(e) {
    return ks && (e = ks(e)), e.persist = xs, e.isPropagationStopped = Vs, e.isDefaultPrevented = Bs, e.nativeEvent = e
};
var Ms, Gs = {
        configurable: !0,
        get: function() {
            return this.class
        }
    },
    Hs = a.vnode;
a.vnode = function(e) {
    var t = e.type,
        n = e.props,
        r = n;
    if ("string" == typeof t) {
        var i = -1 === t.indexOf("-");
        for (var o in r = {}, n) {
            var s = n[o];
            Us && "children" === o && "noscript" === t || "value" === o && "defaultValue" in n && null == s || ("defaultValue" === o && "value" in n && null == n.value ? o = "value" : "download" === o && !0 === s ? s = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !Fs(n.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o) ? o = o.toLowerCase() : i && Ps.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === s && (s = void 0), r[o] = s)
        }
        "select" == t && r.multiple && Array.isArray(r.value) && (r.value = R(n.children).forEach((function(e) {
            e.props.selected = -1 != r.value.indexOf(e.props.value)
        }))), "select" == t && null != r.defaultValue && (r.value = R(n.children).forEach((function(e) {
            e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value
        }))), e.props = r, n.class != n.className && (Gs.enumerable = "className" in n, null != n.className && (r.class = n.className), Object.defineProperty(r, "className", Gs))
    }
    e.$$typeof = Ns, Hs && Hs(e)
};
var $s = a.__r;
a.__r = function(e) {
    $s && $s(e), Ms = e.__c
};
var js = {
    ReactCurrentDispatcher: {
        current: {
            readContext: function(e) {
                return Ms.__n[e.__c].props.value
            }
        }
    }
};

function Ys(e) {
    return !!e && e.$$typeof === Ns
}
var Ws = {
    useState: es,
    useReducer: ts,
    useEffect: ns,
    useLayoutEffect: rs,
    useRef: is,
    useImperativeHandle: function(e, t, n) {
        Wo = 6, rs((function() {
            "function" == typeof e ? e(t()) : e && (e.current = t())
        }), null == n ? n : n.concat(e))
    },
    useMemo: os,
    useCallback: ss,
    useContext: as,
    useDebugValue: function(e, t) {
        a.useDebugValue && a.useDebugValue(t ? t(e) : e)
    },
    version: "17.0.2",
    Children: Is,
    render: function(e, t, n) {
        return null == t.__k && (t.textContent = ""), G(e, t), "function" == typeof n && n(), e ? e.__c : null
    },
    hydrate: function(e, t, n) {
        return H(e, t), "function" == typeof n && n(), e ? e.__c : null
    },
    unmountComponentAtNode: function(e) {
        return !!e.__k && (G(null, e), !0)
    },
    createPortal: function(e, t) {
        return _(Ds, {
            __v: e,
            i: t
        })
    },
    createElement: _,
    createContext: j,
    createFactory: function(e) {
        return _.bind(null, e)
    },
    cloneElement: function(e) {
        return Ys(e) ? $.apply(null, arguments) : e
    },
    createRef: S,
    Fragment: I,
    isValidElement: Ys,
    findDOMNode: function(e) {
        return e && (e.base || 1 === e.nodeType && e) || null
    },
    Component: C,
    PureComponent: vs,
    memo: ys,
    forwardRef: bs,
    flushSync: function(e, t) {
        return e(t)
    },
    unstable_batchedUpdates: function(e, t) {
        return e(t)
    },
    StrictMode: I,
    Suspense: Es,
    SuspenseList: ws,
    lazy: Ls,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: js
};

function zs(e) {
    function t(e, r, c, l, f) {
        for (var p, h, g, v, b, I = 0, C = 0, T = 0, E = 0, A = 0, N = 0, U = g = p = 0, k = 0, x = 0, V = 0, B = 0, M = c.length, G = M - 1, H = "", $ = "", j = "", Y = ""; k < M;) {
            if (h = c.charCodeAt(k), k === G && 0 !== C + E + T + I && (0 !== C && (h = 47 === C ? 10 : 47), E = T = I = 0, M++, G++), 0 === C + E + T + I) {
                if (k === G && (0 < x && (H = H.replace(d, "")), 0 < H.trim().length)) {
                    switch (h) {
                        case 32:
                        case 9:
                        case 59:
                        case 13:
                        case 10:
                            break;
                        default:
                            H += c.charAt(k)
                    }
                    h = 59
                }
                switch (h) {
                    case 123:
                        for (p = (H = H.trim()).charCodeAt(0), g = 1, B = ++k; k < M;) {
                            switch (h = c.charCodeAt(k)) {
                                case 123:
                                    g++;
                                    break;
                                case 125:
                                    g--;
                                    break;
                                case 47:
                                    switch (h = c.charCodeAt(k + 1)) {
                                        case 42:
                                        case 47:
                                            e: {
                                                for (U = k + 1; U < G; ++U) switch (c.charCodeAt(U)) {
                                                    case 47:
                                                        if (42 === h && 42 === c.charCodeAt(U - 1) && k + 2 !== U) {
                                                            k = U + 1;
                                                            break e
                                                        }
                                                        break;
                                                    case 10:
                                                        if (47 === h) {
                                                            k = U + 1;
                                                            break e
                                                        }
                                                }
                                                k = U
                                            }
                                    }
                                    break;
                                case 91:
                                    h++;
                                case 40:
                                    h++;
                                case 34:
                                case 39:
                                    for (; k++ < G && c.charCodeAt(k) !== h;);
                            }
                            if (0 === g) break;
                            k++
                        }
                        if (g = c.substring(B, k), 0 === p && (p = (H = H.replace(u, "").trim()).charCodeAt(0)), 64 === p) {
                            switch (0 < x && (H = H.replace(d, "")), h = H.charCodeAt(1)) {
                                case 100:
                                case 109:
                                case 115:
                                case 45:
                                    x = r;
                                    break;
                                default:
                                    x = D
                            }
                            if (B = (g = t(r, x, g, h, f + 1)).length, 0 < P && (b = a(3, g, x = n(D, H, V), r, w, L, B, h, f, l), H = x.join(""), void 0 !== b && 0 === (B = (g = b.trim()).length) && (h = 0, g = "")), 0 < B) switch (h) {
                                case 115:
                                    H = H.replace(S, s);
                                case 100:
                                case 109:
                                case 45:
                                    g = H + "{" + g + "}";
                                    break;
                                case 107:
                                    g = (H = H.replace(y, "$1 $2")) + "{" + g + "}", g = 1 === R || 2 === R && o("@" + g, 3) ? "@-webkit-" + g + "@" + g : "@" + g;
                                    break;
                                default:
                                    g = H + g, 112 === l && ($ += g, g = "")
                            } else g = ""
                        } else g = t(r, n(r, H, V), g, l, f + 1);
                        j += g, g = V = x = U = p = 0, H = "", h = c.charCodeAt(++k);
                        break;
                    case 125:
                    case 59:
                        if (1 < (B = (H = (0 < x ? H.replace(d, "") : H).trim()).length)) switch (0 === U && (p = H.charCodeAt(0), 45 === p || 96 < p && 123 > p) && (B = (H = H.replace(" ", ":")).length), 0 < P && void 0 !== (b = a(1, H, r, e, w, L, $.length, l, f, l)) && 0 === (B = (H = b.trim()).length) && (H = "\0\0"), p = H.charCodeAt(0), h = H.charCodeAt(1), p) {
                            case 0:
                                break;
                            case 64:
                                if (105 === h || 99 === h) {
                                    Y += H + c.charAt(k);
                                    break
                                }
                            default:
                                58 !== H.charCodeAt(B - 1) && ($ += i(H, p, h, H.charCodeAt(2)))
                        }
                        V = x = U = p = 0, H = "", h = c.charCodeAt(++k)
                }
            }
            switch (h) {
                case 13:
                case 10:
                    47 === C ? C = 0 : 0 === 1 + p && 107 !== l && 0 < H.length && (x = 1, H += "\0"), 0 < P * F && a(0, H, r, e, w, L, $.length, l, f, l), L = 1, w++;
                    break;
                case 59:
                case 125:
                    if (0 === C + E + T + I) {
                        L++;
                        break
                    }
                default:
                    switch (L++, v = c.charAt(k), h) {
                        case 9:
                        case 32:
                            if (0 === E + I + C) switch (A) {
                                case 44:
                                case 58:
                                case 9:
                                case 32:
                                    v = "";
                                    break;
                                default:
                                    32 !== h && (v = " ")
                            }
                            break;
                        case 0:
                            v = "\\0";
                            break;
                        case 12:
                            v = "\\f";
                            break;
                        case 11:
                            v = "\\v";
                            break;
                        case 38:
                            0 === E + C + I && (x = V = 1, v = "\f" + v);
                            break;
                        case 108:
                            if (0 === E + C + I + O && 0 < U) switch (k - U) {
                                case 2:
                                    112 === A && 58 === c.charCodeAt(k - 3) && (O = A);
                                case 8:
                                    111 === N && (O = N)
                            }
                            break;
                        case 58:
                            0 === E + C + I && (U = k);
                            break;
                        case 44:
                            0 === C + T + E + I && (x = 1, v += "\r");
                            break;
                        case 34:
                        case 39:
                            0 === C && (E = E === h ? 0 : 0 === E ? h : E);
                            break;
                        case 91:
                            0 === E + C + T && I++;
                            break;
                        case 93:
                            0 === E + C + T && I--;
                            break;
                        case 41:
                            0 === E + C + I && T--;
                            break;
                        case 40:
                            if (0 === E + C + I) {
                                if (0 === p)
                                    if (2 * A + 3 * N == 533);
                                    else p = 1;
                                T++
                            }
                            break;
                        case 64:
                            0 === C + T + E + I + U + g && (g = 1);
                            break;
                        case 42:
                        case 47:
                            if (!(0 < E + I + T)) switch (C) {
                                case 0:
                                    switch (2 * h + 3 * c.charCodeAt(k + 1)) {
                                        case 235:
                                            C = 47;
                                            break;
                                        case 220:
                                            B = k, C = 42
                                    }
                                    break;
                                case 42:
                                    47 === h && 42 === A && B + 2 !== k && (33 === c.charCodeAt(B + 2) && ($ += c.substring(B, k + 1)), v = "", C = 0)
                            }
                    }
                    0 === C && (H += v)
            }
            N = A, A = h, k++
        }
        if (0 < (B = $.length)) {
            if (x = r, 0 < P && (void 0 !== (b = a(2, $, x, e, w, L, B, l, f, l)) && 0 === ($ = b).length)) return Y + $ + j;
            if ($ = x.join(",") + "{" + $ + "}", 0 != R * O) {
                switch (2 !== R || o($, 2) || (O = 0), O) {
                    case 111:
                        $ = $.replace(_, ":-moz-$1") + $;
                        break;
                    case 112:
                        $ = $.replace(m, "::-webkit-input-$1") + $.replace(m, "::-moz-$1") + $.replace(m, ":-ms-input-$1") + $
                }
                O = 0
            }
        }
        return Y + $ + j
    }

    function n(e, t, n) {
        var i = t.trim().split(g);
        t = i;
        var o = i.length,
            s = e.length;
        switch (s) {
            case 0:
            case 1:
                var a = 0;
                for (e = 0 === s ? "" : e[0] + " "; a < o; ++a) t[a] = r(e, t[a], n).trim();
                break;
            default:
                var c = a = 0;
                for (t = []; a < o; ++a)
                    for (var l = 0; l < s; ++l) t[c++] = r(e[l] + " ", i[a], n).trim()
        }
        return t
    }

    function r(e, t, n) {
        var r = t.charCodeAt(0);
        switch (33 > r && (r = (t = t.trim()).charCodeAt(0)), r) {
            case 38:
                return t.replace(v, "$1" + e.trim());
            case 58:
                return e.trim() + t.replace(v, "$1" + e.trim());
            default:
                if (0 < 1 * n && 0 < t.indexOf("\f")) return t.replace(v, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim())
        }
        return e + t
    }

    function i(e, t, n, r) {
        var s = e + ";",
            a = 2 * t + 3 * n + 4 * r;
        if (944 === a) {
            e = s.indexOf(":", 9) + 1;
            var c = s.substring(e, s.length - 1).trim();
            return c = s.substring(0, e).trim() + c + ";", 1 === R || 2 === R && o(c, 1) ? "-webkit-" + c + c : c
        }
        if (0 === R || 2 === R && !o(s, 1)) return s;
        switch (a) {
            case 1015:
                return 97 === s.charCodeAt(10) ? "-webkit-" + s + s : s;
            case 951:
                return 116 === s.charCodeAt(3) ? "-webkit-" + s + s : s;
            case 963:
                return 110 === s.charCodeAt(5) ? "-webkit-" + s + s : s;
            case 1009:
                if (100 !== s.charCodeAt(4)) break;
            case 969:
            case 942:
                return "-webkit-" + s + s;
            case 978:
                return "-webkit-" + s + "-moz-" + s + s;
            case 1019:
            case 983:
                return "-webkit-" + s + "-moz-" + s + "-ms-" + s + s;
            case 883:
                if (45 === s.charCodeAt(8)) return "-webkit-" + s + s;
                if (0 < s.indexOf("image-set(", 11)) return s.replace(A, "$1-webkit-$2") + s;
                break;
            case 932:
                if (45 === s.charCodeAt(4)) switch (s.charCodeAt(5)) {
                    case 103:
                        return "-webkit-box-" + s.replace("-grow", "") + "-webkit-" + s + "-ms-" + s.replace("grow", "positive") + s;
                    case 115:
                        return "-webkit-" + s + "-ms-" + s.replace("shrink", "negative") + s;
                    case 98:
                        return "-webkit-" + s + "-ms-" + s.replace("basis", "preferred-size") + s
                }
                return "-webkit-" + s + "-ms-" + s + s;
            case 964:
                return "-webkit-" + s + "-ms-flex-" + s + s;
            case 1023:
                if (99 !== s.charCodeAt(8)) break;
                return "-webkit-box-pack" + (c = s.substring(s.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + s + "-ms-flex-pack" + c + s;
            case 1005:
                return p.test(s) ? s.replace(f, ":-webkit-") + s.replace(f, ":-moz-") + s : s;
            case 1e3:
                switch (t = (c = s.substring(13).trim()).indexOf("-") + 1, c.charCodeAt(0) + c.charCodeAt(t)) {
                    case 226:
                        c = s.replace(b, "tb");
                        break;
                    case 232:
                        c = s.replace(b, "tb-rl");
                        break;
                    case 220:
                        c = s.replace(b, "lr");
                        break;
                    default:
                        return s
                }
                return "-webkit-" + s + "-ms-" + c + s;
            case 1017:
                if (-1 === s.indexOf("sticky", 9)) break;
            case 975:
                switch (t = (s = e).length - 10, a = (c = (33 === s.charCodeAt(t) ? s.substring(0, t) : s).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | c.charCodeAt(7))) {
                    case 203:
                        if (111 > c.charCodeAt(8)) break;
                    case 115:
                        s = s.replace(c, "-webkit-" + c) + ";" + s;
                        break;
                    case 207:
                    case 102:
                        s = s.replace(c, "-webkit-" + (102 < a ? "inline-" : "") + "box") + ";" + s.replace(c, "-webkit-" + c) + ";" + s.replace(c, "-ms-" + c + "box") + ";" + s
                }
                return s + ";";
            case 938:
                if (45 === s.charCodeAt(5)) switch (s.charCodeAt(6)) {
                    case 105:
                        return c = s.replace("-items", ""), "-webkit-" + s + "-webkit-box-" + c + "-ms-flex-" + c + s;
                    case 115:
                        return "-webkit-" + s + "-ms-flex-item-" + s.replace(C, "") + s;
                    default:
                        return "-webkit-" + s + "-ms-flex-line-pack" + s.replace("align-content", "").replace(C, "") + s
                }
                break;
            case 973:
            case 989:
                if (45 !== s.charCodeAt(3) || 122 === s.charCodeAt(4)) break;
            case 931:
            case 953:
                if (!0 === E.test(e)) return 115 === (c = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? i(e.replace("stretch", "fill-available"), t, n, r).replace(":fill-available", ":stretch") : s.replace(c, "-webkit-" + c) + s.replace(c, "-moz-" + c.replace("fill-", "")) + s;
                break;
            case 962:
                if (s = "-webkit-" + s + (102 === s.charCodeAt(5) ? "-ms-" + s : "") + s, 211 === n + r && 105 === s.charCodeAt(13) && 0 < s.indexOf("transform", 10)) return s.substring(0, s.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + s
        }
        return s
    }

    function o(e, t) {
        var n = e.indexOf(1 === t ? ":" : "{"),
            r = e.substring(0, 3 !== t ? n : 10);
        return n = e.substring(n + 1, e.length - 1), U(2 !== t ? r : r.replace(T, "$1"), n, t)
    }

    function s(e, t) {
        var n = i(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
        return n !== t + ";" ? n.replace(I, " or ($1)").substring(4) : "(" + t + ")"
    }

    function a(e, t, n, r, i, o, s, a, c, u) {
        for (var d, f = 0, p = t; f < P; ++f) switch (d = N[f].call(l, e, p, n, r, i, o, s, a, c, u)) {
            case void 0:
            case !1:
            case !0:
            case null:
                break;
            default:
                p = d
        }
        if (p !== t) return p
    }

    function c(e) {
        return void 0 !== (e = e.prefix) && (U = null, e ? "function" != typeof e ? R = 1 : (R = 2, U = e) : R = 0), c
    }

    function l(e, n) {
        var r = e;
        if (33 > r.charCodeAt(0) && (r = r.trim()), r = [r], 0 < P) {
            var i = a(-1, n, r, r, w, L, 0, 0, 0, 0);
            void 0 !== i && "string" == typeof i && (n = i)
        }
        var o = t(D, r, n, 0, 0);
        return 0 < P && (void 0 !== (i = a(-2, o, r, r, w, L, o.length, 0, 0, 0)) && (o = i)), "", O = 0, L = w = 1, o
    }
    var u = /^\0+/g,
        d = /[\0\r\f]/g,
        f = /: */g,
        p = /zoo|gra/,
        h = /([,: ])(transform)/g,
        g = /,\r+?/g,
        v = /([\t\r\n ])*\f?&/g,
        y = /@(k\w+)\s*(\S*)\s*/,
        m = /::(place)/g,
        _ = /:(read-only)/g,
        b = /[svh]\w+-[tblr]{2}/,
        S = /\(\s*(.*)\s*\)/g,
        I = /([\s\S]*?);/g,
        C = /-self|flex-/g,
        T = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
        E = /stretch|:\s*\w+\-(?:conte|avail)/,
        A = /([^-])(image-set\()/,
        L = 1,
        w = 1,
        O = 0,
        R = 1,
        D = [],
        N = [],
        P = 0,
        U = null,
        F = 0;
    return l.use = function e(t) {
        switch (t) {
            case void 0:
            case null:
                P = N.length = 0;
                break;
            default:
                if ("function" == typeof t) N[P++] = t;
                else if ("object" == typeof t)
                    for (var n = 0, r = t.length; n < r; ++n) e(t[n]);
                else F = 0 | !!t
        }
        return e
    }, l.set = c, void 0 !== e && c(e), l
}
var Js = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
};
var qs = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    Ks = function(e) {
        var t = {};
        return function(n) {
            return void 0 === t[n] && (t[n] = e(n)), t[n]
        }
    }((function(e) {
        return qs.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
    })),
    Xs = {
        exports: {}
    },
    Zs = {},
    Qs = "function" == typeof Symbol && Symbol.for,
    ea = Qs ? Symbol.for("react.element") : 60103,
    ta = Qs ? Symbol.for("react.portal") : 60106,
    na = Qs ? Symbol.for("react.fragment") : 60107,
    ra = Qs ? Symbol.for("react.strict_mode") : 60108,
    ia = Qs ? Symbol.for("react.profiler") : 60114,
    oa = Qs ? Symbol.for("react.provider") : 60109,
    sa = Qs ? Symbol.for("react.context") : 60110,
    aa = Qs ? Symbol.for("react.async_mode") : 60111,
    ca = Qs ? Symbol.for("react.concurrent_mode") : 60111,
    la = Qs ? Symbol.for("react.forward_ref") : 60112,
    ua = Qs ? Symbol.for("react.suspense") : 60113,
    da = Qs ? Symbol.for("react.suspense_list") : 60120,
    fa = Qs ? Symbol.for("react.memo") : 60115,
    pa = Qs ? Symbol.for("react.lazy") : 60116,
    ha = Qs ? Symbol.for("react.block") : 60121,
    ga = Qs ? Symbol.for("react.fundamental") : 60117,
    va = Qs ? Symbol.for("react.responder") : 60118,
    ya = Qs ? Symbol.for("react.scope") : 60119;

function ma(e) {
    if ("object" == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
            case ea:
                switch (e = e.type) {
                    case aa:
                    case ca:
                    case na:
                    case ia:
                    case ra:
                    case ua:
                        return e;
                    default:
                        switch (e = e && e.$$typeof) {
                            case sa:
                            case la:
                            case pa:
                            case fa:
                            case oa:
                                return e;
                            default:
                                return t
                        }
                }
            case ta:
                return t
        }
    }
}

function _a(e) {
    return ma(e) === ca
}
Zs.AsyncMode = aa, Zs.ConcurrentMode = ca, Zs.ContextConsumer = sa, Zs.ContextProvider = oa, Zs.Element = ea, Zs.ForwardRef = la, Zs.Fragment = na, Zs.Lazy = pa, Zs.Memo = fa, Zs.Portal = ta, Zs.Profiler = ia, Zs.StrictMode = ra, Zs.Suspense = ua, Zs.isAsyncMode = function(e) {
    return _a(e) || ma(e) === aa
}, Zs.isConcurrentMode = _a, Zs.isContextConsumer = function(e) {
    return ma(e) === sa
}, Zs.isContextProvider = function(e) {
    return ma(e) === oa
}, Zs.isElement = function(e) {
    return "object" == typeof e && null !== e && e.$$typeof === ea
}, Zs.isForwardRef = function(e) {
    return ma(e) === la
}, Zs.isFragment = function(e) {
    return ma(e) === na
}, Zs.isLazy = function(e) {
    return ma(e) === pa
}, Zs.isMemo = function(e) {
    return ma(e) === fa
}, Zs.isPortal = function(e) {
    return ma(e) === ta
}, Zs.isProfiler = function(e) {
    return ma(e) === ia
}, Zs.isStrictMode = function(e) {
    return ma(e) === ra
}, Zs.isSuspense = function(e) {
    return ma(e) === ua
}, Zs.isValidElementType = function(e) {
    return "string" == typeof e || "function" == typeof e || e === na || e === ca || e === ia || e === ra || e === ua || e === da || "object" == typeof e && null !== e && (e.$$typeof === pa || e.$$typeof === fa || e.$$typeof === oa || e.$$typeof === sa || e.$$typeof === la || e.$$typeof === ga || e.$$typeof === va || e.$$typeof === ya || e.$$typeof === ha)
}, Zs.typeOf = ma, Xs.exports = Zs;
var ba = Xs.exports,
    Sa = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
    },
    Ia = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
    },
    Ca = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    },
    Ta = {};

function Ea(e) {
    return ba.isMemo(e) ? Ca : Ta[e.$$typeof] || Sa
}
Ta[ba.ForwardRef] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}, Ta[ba.Memo] = Ca;
var Aa = Object.defineProperty,
    La = Object.getOwnPropertyNames,
    wa = Object.getOwnPropertySymbols,
    Oa = Object.getOwnPropertyDescriptor,
    Ra = Object.getPrototypeOf,
    Da = Object.prototype;
var Na = function e(t, n, r) {
    if ("string" != typeof n) {
        if (Da) {
            var i = Ra(n);
            i && i !== Da && e(t, i, r)
        }
        var o = La(n);
        wa && (o = o.concat(wa(n)));
        for (var s = Ea(t), a = Ea(n), c = 0; c < o.length; ++c) {
            var l = o[c];
            if (!(Ia[l] || r && r[l] || a && a[l] || s && s[l])) {
                var u = Oa(n, l);
                try {
                    Aa(t, l, u)
                } catch (e) {}
            }
        }
    }
    return t
};

function Pa() {
    return (Pa = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(this, arguments)
}
var Ua = function(e, t) {
        for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1) n.push(t[r], e[r + 1]);
        return n
    },
    Fa = function(e) {
        return null !== e && "object" == typeof e && "[object Object]" === (e.toString ? e.toString() : Object.prototype.toString.call(e)) && !fo.exports.typeOf(e)
    },
    ka = Object.freeze([]),
    xa = Object.freeze({});

function Va(e) {
    return "function" == typeof e
}

function Ba(e) {
    return e.displayName || e.name || "Component"
}

function Ma(e) {
    return e && "string" == typeof e.styledComponentId
}
var Ga = typeof process === "object" && typeof process.env === "object" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled",
    Ha = "undefined" != typeof window && "HTMLElement" in window,
    $a = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : typeof process === "object" && typeof process.env === "object" && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process === "object" && typeof process.env === "object" && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY && ("false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY));

function ja(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""))
}
var Ya = function() {
        function e(e) {
            this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e
        }
        var t = e.prototype;
        return t.indexOfGroup = function(e) {
            for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
            return t
        }, t.insertRules = function(e, t) {
            if (e >= this.groupSizes.length) {
                for (var n = this.groupSizes, r = n.length, i = r; e >= i;)(i <<= 1) < 0 && ja(16, "" + e);
                this.groupSizes = new Uint32Array(i), this.groupSizes.set(n), this.length = i;
                for (var o = r; o < i; o++) this.groupSizes[o] = 0
            }
            for (var s = this.indexOfGroup(e + 1), a = 0, c = t.length; a < c; a++) this.tag.insertRule(s, t[a]) && (this.groupSizes[e]++, s++)
        }, t.clearGroup = function(e) {
            if (e < this.length) {
                var t = this.groupSizes[e],
                    n = this.indexOfGroup(e),
                    r = n + t;
                this.groupSizes[e] = 0;
                for (var i = n; i < r; i++) this.tag.deleteRule(n)
            }
        }, t.getGroup = function(e) {
            var t = "";
            if (e >= this.length || 0 === this.groupSizes[e]) return t;
            for (var n = this.groupSizes[e], r = this.indexOfGroup(e), i = r + n, o = r; o < i; o++) t += this.tag.getRule(o) + "/*!sc*/\n";
            return t
        }, e
    }(),
    Wa = new Map,
    za = new Map,
    Ja = 1,
    qa = function(e) {
        if (Wa.has(e)) return Wa.get(e);
        for (; za.has(Ja);) Ja++;
        var t = Ja++;
        return Wa.set(e, t), za.set(t, e), t
    },
    Ka = function(e) {
        return za.get(e)
    },
    Xa = function(e, t) {
        t >= Ja && (Ja = t + 1), Wa.set(e, t), za.set(t, e)
    },
    Za = "style[" + Ga + '][data-styled-version="5.3.3"]',
    Qa = new RegExp("^" + Ga + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
    ec = function(e, t, n) {
        for (var r, i = n.split(","), o = 0, s = i.length; o < s; o++)(r = i[o]) && e.registerName(t, r)
    },
    tc = function(e, t) {
        for (var n = (t.textContent || "").split("/*!sc*/\n"), r = [], i = 0, o = n.length; i < o; i++) {
            var s = n[i].trim();
            if (s) {
                var a = s.match(Qa);
                if (a) {
                    var c = 0 | parseInt(a[1], 10),
                        l = a[2];
                    0 !== c && (Xa(l, c), ec(e, l, a[3]), e.getTag().insertRules(c, r)), r.length = 0
                } else r.push(s)
            }
        }
    },
    nc = function(e) {
        var t = document.head,
            n = e || t,
            r = document.createElement("style"),
            i = function(e) {
                for (var t = e.childNodes, n = t.length; n >= 0; n--) {
                    var r = t[n];
                    if (r && 1 === r.nodeType && r.hasAttribute(Ga)) return r
                }
            }(n),
            o = void 0 !== i ? i.nextSibling : null;
        r.setAttribute(Ga, "active"), r.setAttribute("data-styled-version", "5.3.3");
        var s = "undefined" != typeof window && void 0 !== window.__webpack_nonce__ ? window.__webpack_nonce__ : null;
        return s && r.setAttribute("nonce", s), n.insertBefore(r, o), r
    },
    rc = function() {
        function e(e) {
            var t = this.element = nc(e);
            t.appendChild(document.createTextNode("")), this.sheet = function(e) {
                if (e.sheet) return e.sheet;
                for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
                    var i = t[n];
                    if (i.ownerNode === e) return i
                }
                ja(17)
            }(t), this.length = 0
        }
        var t = e.prototype;
        return t.insertRule = function(e, t) {
            try {
                return this.sheet.insertRule(t, e), this.length++, !0
            } catch (e) {
                return !1
            }
        }, t.deleteRule = function(e) {
            this.sheet.deleteRule(e), this.length--
        }, t.getRule = function(e) {
            var t = this.sheet.cssRules[e];
            return void 0 !== t && "string" == typeof t.cssText ? t.cssText : ""
        }, e
    }(),
    ic = function() {
        function e(e) {
            var t = this.element = nc(e);
            this.nodes = t.childNodes, this.length = 0
        }
        var t = e.prototype;
        return t.insertRule = function(e, t) {
            if (e <= this.length && e >= 0) {
                var n = document.createTextNode(t),
                    r = this.nodes[e];
                return this.element.insertBefore(n, r || null), this.length++, !0
            }
            return !1
        }, t.deleteRule = function(e) {
            this.element.removeChild(this.nodes[e]), this.length--
        }, t.getRule = function(e) {
            return e < this.length ? this.nodes[e].textContent : ""
        }, e
    }(),
    oc = function() {
        function e(e) {
            this.rules = [], this.length = 0
        }
        var t = e.prototype;
        return t.insertRule = function(e, t) {
            return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0)
        }, t.deleteRule = function(e) {
            this.rules.splice(e, 1), this.length--
        }, t.getRule = function(e) {
            return e < this.length ? this.rules[e] : ""
        }, e
    }(),
    sc = Ha,
    ac = {
        isServer: !Ha,
        useCSSOMInjection: !$a
    },
    cc = function() {
        function e(e, t, n) {
            void 0 === e && (e = xa), void 0 === t && (t = {}), this.options = Pa({}, ac, {}, e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && Ha && sc && (sc = !1, function(e) {
                for (var t = document.querySelectorAll(Za), n = 0, r = t.length; n < r; n++) {
                    var i = t[n];
                    i && "active" !== i.getAttribute(Ga) && (tc(e, i), i.parentNode && i.parentNode.removeChild(i))
                }
            }(this))
        }
        e.registerId = function(e) {
            return qa(e)
        };
        var t = e.prototype;
        return t.reconstructWithOptions = function(t, n) {
            return void 0 === n && (n = !0), new e(Pa({}, this.options, {}, t), this.gs, n && this.names || void 0)
        }, t.allocateGSInstance = function(e) {
            return this.gs[e] = (this.gs[e] || 0) + 1
        }, t.getTag = function() {
            return this.tag || (this.tag = (n = (t = this.options).isServer, r = t.useCSSOMInjection, i = t.target, e = n ? new oc(i) : r ? new rc(i) : new ic(i), new Ya(e)));
            var e, t, n, r, i
        }, t.hasNameForId = function(e, t) {
            return this.names.has(e) && this.names.get(e).has(t)
        }, t.registerName = function(e, t) {
            if (qa(e), this.names.has(e)) this.names.get(e).add(t);
            else {
                var n = new Set;
                n.add(t), this.names.set(e, n)
            }
        }, t.insertRules = function(e, t, n) {
            this.registerName(e, t), this.getTag().insertRules(qa(e), n)
        }, t.clearNames = function(e) {
            this.names.has(e) && this.names.get(e).clear()
        }, t.clearRules = function(e) {
            this.getTag().clearGroup(qa(e)), this.clearNames(e)
        }, t.clearTag = function() {
            this.tag = void 0
        }, t.toString = function() {
            return function(e) {
                for (var t = e.getTag(), n = t.length, r = "", i = 0; i < n; i++) {
                    var o = Ka(i);
                    if (void 0 !== o) {
                        var s = e.names.get(o),
                            a = t.getGroup(i);
                        if (s && a && s.size) {
                            var c = Ga + ".g" + i + '[id="' + o + '"]',
                                l = "";
                            void 0 !== s && s.forEach((function(e) {
                                e.length > 0 && (l += e + ",")
                            })), r += "" + a + c + '{content:"' + l + '"}/*!sc*/\n'
                        }
                    }
                }
                return r
            }(this)
        }, e
    }(),
    lc = /(a)(d)/gi,
    uc = function(e) {
        return String.fromCharCode(e + (e > 25 ? 39 : 97))
    };

function dc(e) {
    var t, n = "";
    for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = uc(t % 52) + n;
    return (uc(t % 52) + n).replace(lc, "$1-$2")
}
var fc = function(e, t) {
        for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
        return e
    },
    pc = function(e) {
        return fc(5381, e)
    };
var hc = pc("5.3.3"),
    gc = function() {
        function e(e, t, n) {
            this.rules = e, this.staticRulesId = "", this.isStatic = (void 0 === n || n.isStatic) && function(e) {
                for (var t = 0; t < e.length; t += 1) {
                    var n = e[t];
                    if (Va(n) && !Ma(n)) return !1
                }
                return !0
            }(e), this.componentId = t, this.baseHash = fc(hc, t), this.baseStyle = n, cc.registerId(t)
        }
        return e.prototype.generateAndInjectStyles = function(e, t, n) {
            var r = this.componentId,
                i = [];
            if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash)
                if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) i.push(this.staticRulesId);
                else {
                    var o = Nc(this.rules, e, t, n).join(""),
                        s = dc(fc(this.baseHash, o) >>> 0);
                    if (!t.hasNameForId(r, s)) {
                        var a = n(o, "." + s, void 0, r);
                        t.insertRules(r, s, a)
                    }
                    i.push(s), this.staticRulesId = s
                }
            else {
                for (var c = this.rules.length, l = fc(this.baseHash, n.hash), u = "", d = 0; d < c; d++) {
                    var f = this.rules[d];
                    if ("string" == typeof f) u += f;
                    else if (f) {
                        var p = Nc(f, e, t, n),
                            h = Array.isArray(p) ? p.join("") : p;
                        l = fc(l, h + d), u += h
                    }
                }
                if (u) {
                    var g = dc(l >>> 0);
                    if (!t.hasNameForId(r, g)) {
                        var v = n(u, "." + g, void 0, r);
                        t.insertRules(r, g, v)
                    }
                    i.push(g)
                }
            }
            return i.join(" ")
        }, e
    }(),
    vc = /^\s*\/\/.*$/gm,
    yc = [":", "[", ".", "#"];

function mc(e) {
    var t, n, r, i, o = void 0 === e ? xa : e,
        s = o.options,
        a = void 0 === s ? xa : s,
        c = o.plugins,
        l = void 0 === c ? ka : c,
        u = new zs(a),
        d = [],
        f = function(e) {
            function t(t) {
                if (t) try {
                    e(t + "}")
                } catch (e) {}
            }
            return function(n, r, i, o, s, a, c, l, u, d) {
                switch (n) {
                    case 1:
                        if (0 === u && 64 === r.charCodeAt(0)) return e(r + ";"), "";
                        break;
                    case 2:
                        if (0 === l) return r + "/*|*/";
                        break;
                    case 3:
                        switch (l) {
                            case 102:
                            case 112:
                                return e(i[0] + r), "";
                            default:
                                return r + (0 === d ? "/*|*/" : "")
                        }
                    case -2:
                        r.split("/*|*/}").forEach(t)
                }
            }
        }((function(e) {
            d.push(e)
        })),
        p = function(e, r, o) {
            return 0 === r && -1 !== yc.indexOf(o[n.length]) || o.match(i) ? e : "." + t
        };

    function h(e, o, s, a) {
        void 0 === a && (a = "&");
        var c = e.replace(vc, ""),
            l = o && s ? s + " " + o + " { " + c + " }" : c;
        return t = a, n = o, r = new RegExp("\\" + n + "\\b", "g"), i = new RegExp("(\\" + n + "\\b){2,}"), u(s || !o ? "" : o, l)
    }
    return u.use([].concat(l, [function(e, t, i) {
        2 === e && i.length && i[0].lastIndexOf(n) > 0 && (i[0] = i[0].replace(r, p))
    }, f, function(e) {
        if (-2 === e) {
            var t = d;
            return d = [], t
        }
    }])), h.hash = l.length ? l.reduce((function(e, t) {
        return t.name || ja(15), fc(e, t.name)
    }), 5381).toString() : "", h
}
var _c = Ws.createContext();
_c.Consumer;
var bc = Ws.createContext(),
    Sc = (bc.Consumer, new cc),
    Ic = mc();

function Cc() {
    return as(_c) || Sc
}

function Tc(e) {
    var t = es(e.stylisPlugins),
        n = t[0],
        r = t[1],
        i = Cc(),
        o = os((function() {
            var t = i;
            return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
                target: e.target
            }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({
                useCSSOMInjection: !1
            })), t
        }), [e.disableCSSOMInjection, e.sheet, e.target]),
        s = os((function() {
            return mc({
                options: {
                    prefix: !e.disableVendorPrefixes
                },
                plugins: n
            })
        }), [e.disableVendorPrefixes, n]);
    return ns((function() {
        (function(e, t, n, r) {
            var i = n ? n.call(r, e, t) : void 0;
            if (void 0 !== i) return !!i;
            if (e === t) return !0;
            if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
            var o = Object.keys(e),
                s = Object.keys(t);
            if (o.length !== s.length) return !1;
            for (var a = Object.prototype.hasOwnProperty.bind(t), c = 0; c < o.length; c++) {
                var l = o[c];
                if (!a(l)) return !1;
                var u = e[l],
                    d = t[l];
                if (!1 === (i = n ? n.call(r, u, d, l) : void 0) || void 0 === i && u !== d) return !1
            }
            return !0
        })(n, e.stylisPlugins) || r(e.stylisPlugins)
    }), [e.stylisPlugins]), Ws.createElement(_c.Provider, {
        value: o
    }, Ws.createElement(bc.Provider, {
        value: s
    }, e.children))
}
var Ec = function() {
        function e(e, t) {
            var n = this;
            this.inject = function(e, t) {
                void 0 === t && (t = Ic);
                var r = n.name + t.hash;
                e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"))
            }, this.toString = function() {
                return ja(12, String(n.name))
            }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t
        }
        return e.prototype.getName = function(e) {
            return void 0 === e && (e = Ic), this.name + e.hash
        }, e
    }(),
    Ac = /([A-Z])/,
    Lc = /([A-Z])/g,
    wc = /^ms-/,
    Oc = function(e) {
        return "-" + e.toLowerCase()
    };

function Rc(e) {
    return Ac.test(e) ? e.replace(Lc, Oc).replace(wc, "-ms-") : e
}
var Dc = function(e) {
    return null == e || !1 === e || "" === e
};

function Nc(e, t, n, r) {
    if (Array.isArray(e)) {
        for (var i, o = [], s = 0, a = e.length; s < a; s += 1) "" !== (i = Nc(e[s], t, n, r)) && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
        return o
    }
    return Dc(e) ? "" : Ma(e) ? "." + e.styledComponentId : Va(e) ? "function" != typeof(c = e) || c.prototype && c.prototype.isReactComponent || !t ? e : Nc(e(t), t, n, r) : e instanceof Ec ? n ? (e.inject(n, r), e.getName(r)) : e : Fa(e) ? function e(t, n) {
        var r, i, o = [];
        for (var s in t) t.hasOwnProperty(s) && !Dc(t[s]) && (Array.isArray(t[s]) && t[s].isCss || Va(t[s]) ? o.push(Rc(s) + ":", t[s], ";") : Fa(t[s]) ? o.push.apply(o, e(t[s], s)) : o.push(Rc(s) + ": " + (r = s, (null == (i = t[s]) || "boolean" == typeof i || "" === i ? "" : "number" != typeof i || 0 === i || r in Js ? String(i).trim() : i + "px") + ";")));
        return n ? [n + " {"].concat(o, ["}"]) : o
    }(e) : e.toString();
    var c
}
var Pc = function(e) {
    return Array.isArray(e) && (e.isCss = !0), e
};

function Uc(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return Va(e) || Fa(e) ? Pc(Nc(Ua(ka, [e].concat(n)))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : Pc(Nc(Ua(e, n)))
}
var Fc = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    kc = /(^-|-$)/g;

function xc(e) {
    return e.replace(Fc, "-").replace(kc, "")
}
var Vc = function(e) {
    return dc(pc(e) >>> 0)
};

function Bc(e) {
    return "string" == typeof e && !0
}
var Mc = function(e) {
        return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e)
    },
    Gc = function(e) {
        return "__proto__" !== e && "constructor" !== e && "prototype" !== e
    };

function Hc(e, t, n) {
    var r = e[n];
    Mc(t) && Mc(r) ? $c(r, t) : e[n] = t
}

function $c(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    for (var i = 0, o = n; i < o.length; i++) {
        var s = o[i];
        if (Mc(s))
            for (var a in s) Gc(a) && Hc(e, s[a], a)
    }
    return e
}
var jc = Ws.createContext();

function Yc(e) {
    var t = as(jc),
        n = os((function() {
            return function(e, t) {
                return e ? Va(e) ? e(t) : Array.isArray(e) || "object" != typeof e ? ja(8) : t ? Pa({}, t, {}, e) : e : ja(14)
            }(e.theme, t)
        }), [e.theme, t]);
    return e.children ? Ws.createElement(jc.Provider, {
        value: n
    }, e.children) : null
}
jc.Consumer;
var Wc = {};

function zc(e, t, n) {
    var r = Ma(e),
        i = !Bc(e),
        o = t.attrs,
        s = void 0 === o ? ka : o,
        a = t.componentId,
        c = void 0 === a ? function(e, t) {
            var n = "string" != typeof e ? "sc" : xc(e);
            Wc[n] = (Wc[n] || 0) + 1;
            var r = n + "-" + Vc("5.3.3" + n + Wc[n]);
            return t ? t + "-" + r : r
        }(t.displayName, t.parentComponentId) : a,
        l = t.displayName,
        u = void 0 === l ? function(e) {
            return Bc(e) ? "styled." + e : "Styled(" + Ba(e) + ")"
        }(e) : l,
        d = t.displayName && t.componentId ? xc(t.displayName) + "-" + t.componentId : t.componentId || c,
        f = r && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s,
        p = t.shouldForwardProp;
    r && e.shouldForwardProp && (p = t.shouldForwardProp ? function(n, r, i) {
        return e.shouldForwardProp(n, r, i) && t.shouldForwardProp(n, r, i)
    } : e.shouldForwardProp);
    var h, g = new gc(n, d, r ? e.componentStyle : void 0),
        v = g.isStatic && 0 === s.length,
        y = function(e, t) {
            return function(e, t, n, r) {
                var i = e.attrs,
                    o = e.componentStyle,
                    s = e.defaultProps,
                    a = e.foldedComponentIds,
                    c = e.shouldForwardProp,
                    l = e.styledComponentId,
                    u = e.target,
                    d = function(e, t, n) {
                        void 0 === e && (e = xa);
                        var r = Pa({}, t, {
                                theme: e
                            }),
                            i = {};
                        return n.forEach((function(e) {
                            var t, n, o, s = e;
                            for (t in Va(s) && (s = s(r)), s) r[t] = i[t] = "className" === t ? (n = i[t], o = s[t], n && o ? n + " " + o : n || o) : s[t]
                        })), [r, i]
                    }(function(e, t, n) {
                        return void 0 === n && (n = xa), e.theme !== n.theme && e.theme || t || n.theme
                    }(t, as(jc), s) || xa, t, i),
                    f = d[0],
                    p = d[1],
                    h = function(e, t, n, r) {
                        var i = Cc(),
                            o = as(bc) || Ic;
                        return t ? e.generateAndInjectStyles(xa, i, o) : e.generateAndInjectStyles(n, i, o)
                    }(o, r, f),
                    g = n,
                    v = p.$as || t.$as || p.as || t.as || u,
                    y = Bc(v),
                    m = p !== t ? Pa({}, t, {}, p) : t,
                    b = {};
                for (var S in m) "$" !== S[0] && "as" !== S && ("forwardedAs" === S ? b.as = m[S] : (c ? c(S, Ks, v) : !y || Ks(S)) && (b[S] = m[S]));
                return t.style && p.style !== t.style && (b.style = Pa({}, t.style, {}, p.style)), b.className = Array.prototype.concat(a, l, h !== l ? h : null, t.className, p.className).filter(Boolean).join(" "), b.ref = g, _(v, b)
            }(h, e, t, v)
        };
    return y.displayName = u, (h = Ws.forwardRef(y)).attrs = f, h.componentStyle = g, h.displayName = u, h.shouldForwardProp = p, h.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : ka, h.styledComponentId = d, h.target = r ? e.target : e, h.withComponent = function(e) {
        var r = t.componentId,
            i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(t, ["componentId"]),
            o = r && r + "-" + (Bc(e) ? e : xc(Ba(e)));
        return zc(e, Pa({}, i, {
            attrs: f,
            componentId: o
        }), n)
    }, Object.defineProperty(h, "defaultProps", {
        get: function() {
            return this._foldedDefaultProps
        },
        set: function(t) {
            this._foldedDefaultProps = r ? $c({}, e.defaultProps, t) : t
        }
    }), h.toString = function() {
        return "." + h.styledComponentId
    }, i && Na(h, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0
    }), h
}
var Jc = function(e) {
    return function e(t, n, r) {
        if (void 0 === r && (r = xa), !fo.exports.isValidElementType(n)) return ja(1, String(n));
        var i = function() {
            return t(n, r, Uc.apply(void 0, arguments))
        };
        return i.withConfig = function(i) {
            return e(t, n, Pa({}, r, {}, i))
        }, i.attrs = function(i) {
            return e(t, n, Pa({}, r, {
                attrs: Array.prototype.concat(r.attrs, i).filter(Boolean)
            }))
        }, i
    }(zc, e)
};

function qc(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    var i = Uc.apply(void 0, [e].concat(n)).join(""),
        o = Vc(i);
    return new Ec(o, i)
}["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach((function(e) {
    Jc[e] = Jc(e)
}));
var Kc = function() {
        return as(jc)
    },
    Xc = Jc;
const Zc = () => {
        const e = window.navigator.userAgent.indexOf("MSIE ") > 0 || window.navigator.userAgent.indexOf("Trident/") > 0,
            t = window.matchMedia("all and (orientation:landscape)").matches,
            n = window.matchMedia("all and (orientation:portrait)").matches,
            r = n ? window.innerWidth : window.innerHeight;
        return {
            isDesktop: window.innerWidth > si.md && !("ontouchstart" in document.documentElement),
            isIE: e,
            isLandscape: t,
            isMobile: r <= si.md,
            isMobileExtraSmall: r <= si.xs,
            isMobileMd: r <= si.md && r > si.sm,
            isMobileSmall: r <= si.sm && r > si.xs,
            isPortrait: n
        }
    },
    Qc = () => {
        const [e, t] = es(Zc());
        return ns((() => {
            const e = () => {
                t(Zc())
            };
            return window.addEventListener("resize", e, !0), () => {
                window.removeEventListener("resize", e, !0)
            }
        }), []), e
    },
    el = e => e.some((e => null != e.dataDistribution)),
    tl = {
        categories: [],
        getUpdatedCategories: () => Promise.resolve([]),
        selectedSubService: null,
        services: [],
        setCategories: () => null,
        setSelectedSubService: () => null
    },
    nl = j(tl);
nl.displayName = "CategoryContext";
const rl = ys((({
        children: e,
        UC: t
    }) => {
        const [n, r] = es(t.getCategoriesBaseInfo()), [i, o] = es(tl.selectedSubService), s = os((() => n.reduce(((e, t) => t.services ? [...e, ...t.services] : e), [])), [n]), a = ss((async e => e === z.SECOND_LAYER || n.some((e => el(e.services))) ? t.getCategoriesFullInfo() : t.getCategoriesBaseInfo()), [t, n]);
        return _(nl.Provider, {
            value: {
                categories: n,
                getUpdatedCategories: a,
                selectedSubService: i,
                services: s,
                setCategories: r,
                setSelectedSubService: o
            }
        }, e)
    })),
    il = () => as(nl),
    ol = {
        embeddingContainerClassName: "uc-embed",
        embeddingOptionsAttributeName: "uc-data",
        embeddingServiceAttributeName: "uc-consent-name",
        embeddingShowAllOptions: "all",
        embeddingShowAllServices: "all",
        embeddingShowToggle: "uc-show-toggle",
        embeddingStyle: "uc-embedding-type",
        embeddingTitle: "uc-embedding-title",
        embeddingUseStyling: "uc-styling"
    },
    sl = "#0045A5",
    al = "#dedede",
    cl = "#595959",
    ll = "#ffffff",
    ul = {
        dataCollected: "uc-dataCollected",
        dataProtectionOfficer: "uc-dataProtectionOfficer",
        dataPurposes: "uc-dataPurposes",
        dataRecipients: "uc-dataRecipients",
        description: "uc-description",
        furtherInformation: "uc-furtherInformation",
        legalBasis: "uc-legalBasis",
        optInCheckboxWithLabel: "uc-optInCheckboxWithLabel",
        processingLocation: "uc-processingLocation",
        processorNames: "uc-processorNames",
        retentionPeriod: "uc-retentionPeriod",
        technologiesUsed: "uc-technologiesUsed",
        thirdCountryTransfer: "uc-thirdCountryTransfer",
        toggleButton: "uc-embed-toggle-button",
        toggleDisabled: "toggle-disabled",
        toggleOff: "toggle-off",
        toggleOn: "toggle-on"
    },
    dl = {
        toggleButton: {
            style: "display: flex; justify-content: center; align-items: center; background: none; border: none; height: 20px; width: 40px; min-height: 20px; min-width: 40px; outline: none; padding: 0"
        },
        toggleButtonMargin: {
            style: "display: flex; justify-content: center; align-items: center; background: none; border: none; height: 20px; width: 40px; min-height: 20px; min-width: 40px; outline: none; padding: 0; margin-right: 15px"
        }
    },
    fl = () => {
        const e = `<svg width="42px" height="23px" viewBox="0 0 42 23" version="1.1" xmlns="http://www.w3.org/2000/svg">\n  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">\n    <g transform="translate(-86.000000, -31.000000)">\n      <g transform="translate(87.000000, 32.949632)">\n        <path\n          d="M30.0094932,-0.5 C32.8534346,-0.5 35.4330697,0.632406246 37.3226603,2.47154687 C39.2173227,4.31562389 40.4181217,6.87029149 40.4959736,9.70631513 C40.4981622,12.7440885 39.3375699,15.4233885 37.4620437,17.3539966 C35.5609243,19.3109495 32.9241909,20.5 30.0094932,20.5 L30.0094932,20.5 L9.99050677,20.5 C7.14626154,20.5 4.56639324,19.3679366 2.67675543,17.5287725 C0.782448937,15.6850644 -0.418130086,13.1306858 -0.49597372,10.2937978 C-0.498162151,7.25597731 0.662425032,4.576654 2.53794226,2.64603293 C4.43906304,0.689056047 7.07580212,-0.5 9.99050677,-0.5 L9.99050677,-0.5 Z"\n          stroke="${ll}"\n          fill="${al}"\n        />\n        <path\n          d="M30,18 C34.418278,18 38,14.418278 38,10 C38,5.581722 34.418278,2 30,2 C25.581722,2 22,5.581722 22,10 C22,14.418278 25.581722,18 30,18 Z"\n          fill="${ll}"\n        />\n        <path\n          d="M15.8228065,6.13470278 C16.038065,6.32450074 16.0587048,6.65286384 15.8689068,6.8681223 C15.8665182,6.87083131 15.8641014,6.87351535 15.8616569,6.87617398 L9.47642761,13.8205455 C9.39995063,13.9037194 9.30336409,13.9576046 9.20086748,13.9814572 C9.01166585,14.0332136 8.80114396,13.9796182 8.65955286,13.8256282 L8.65955286,13.8256282 L6.13834311,11.083641 L6.13834311,11.083641 L6.13109318,11.0755893 C5.94129522,10.8603308 5.96193502,10.5319677 6.17719348,10.3421698 C6.39831738,10.1472001 6.73475108,10.164828 6.93428873,10.3818388 L6.93428873,10.3818388 L9.06521734,12.6992981 L15.0657113,6.17437179 C15.2652489,5.95736102 15.6016826,5.93973313 15.8228065,6.13470278 Z"\n          fill="${ll}"\n        />\n      </g>\n    </g>\n  </g>\n</svg>`;
        return (new DOMParser).parseFromString(e, "image/svg+xml").documentElement
    },
    pl = () => {
        const e = `<svg width="100%" height="100%" viewBox="0 0 42 22" xmlns="http://www.w3.org/2000/svg">\n      <g fill="none" fillRule="evenodd">\n      <path\n        d="M0 11C0 4.925 4.92 0 11.008 0h19.984C37.072 0 42 4.924 42 11c0 6.075-4.92 11-11.008 11H11.008C4.928 22 0 17.08 0 11z"\n        fill="${sl}"\n      />\n      <path d="M31 20a9 9 0 100-18 9 9 0 000 18z" fill="white" />\n      <path d="M8 6h10v10H8z" />\n      <path\n        d="M17.225 7.671c.192.173.208.47.035.662l-5.59 6.209a.467.467 0 01-.202.131l-.02.006a.467.467 0 01-.492-.133l-2.209-2.452a.469.469 0 01.697-.627l1.866 2.072 5.253-5.833a.469.469 0 01.662-.035z"\n        fill="${ll}"\n      />\n    </g>\n  </svg>`;
        return (new DOMParser).parseFromString(e, "image/svg+xml").documentElement
    },
    hl = () => {
        const e = `<svg width="100%" height="100%" viewBox="0 0 42 22" xmlns="http://www.w3.org/2000/svg">\n      <g fill="none" fillRule="evenodd">\n      <path\n        d="M0 11C0 4.925 4.92 0 11.008 0h19.984C37.072 0 42 4.924 42 11c0 6.075-4.92 11-11.008 11H11.008C4.928 22 0 17.08 0 11z"\n        fill="${cl}"\n      />\n      <path d="M11 20a9 9 0 100-18 9 9 0 000 18z" fill="white" />\n      <path\n        d="M29.725 11.204l3.318-3.315a.51.51 0 10-.724-.724L29 10.48l-3.319-3.315a.51.51 0 10-.724.724l3.318 3.315-3.318 3.317a.51.51 0 10.724.723L29 11.928l3.319 3.317a.509.509 0 00.724 0c.2-.2.2-.525 0-.724l-3.318-3.317z"\n        fill="${ll}"\n        fillRule="nonzero"\n      />\n    </g>\n  </svg>`;
        return (new DOMParser).parseFromString(e, "image/svg+xml").documentElement
    },
    gl = {
        embedAnkerName: "uc-embed",
        embedTCFAnkerName: "uc-embed-tcf",
        embedTitle: "uc-embedding-title",
        embedType: "uc-embedding-type",
        iabPurposeTitle: "uc-embedding-purpose",
        iabVendorsTitle: "uc-embedding-vendors",
        nonIabPurposeTitle: "uc-embedding-non-iab-purpose",
        nonIabVendorsTitle: "uc-embedding-non-iab-vendors",
        useUcStylining: "uc-styling"
    },
    vl = {
        link: "uc-embed-link",
        subElementBlockList: "uc-embed-subelement-block-list",
        subElementBlockListElement: "uc-embed-subelement-block-list-element",
        subElementDescription: "uc-embed-subelement-description",
        subElementHeadline: "uc-embed-subelement-headline",
        subElementItemList: "uc-embed-subelement-item-list",
        viewMoreButton: "uc-embed-block-list-view-more-button"
    },
    yl = {
        subElementBlockList: {
            style: "margin: 0px 0px 0px; padding: 0px 15px"
        },
        subElementBlockListElement: {
            style: `font-size: 12px; list-style: none; border: 1px solid ${"#e2e2e2"}; border-radius: 5px; padding: 10px; margin-top: 5px`
        },
        viewMoreButton: {
            style: `border: none; background-color: ${"#fff"}; text-align: left; padding: 15px; color: ${"#0000ff"}`
        }
    },
    ml = e => e.reduce(((e, t) => e.concat(t.services)), []).reduce(((e, t) => (e.push({
        serviceId: t.id,
        status: t.consent.status
    }), e)), []),
    _l = (e, t) => {
        if (void 0 === t) throw new Error("altElement of nullishOperation can not be undefined");
        return null != e ? e : t
    },
    bl = e => ({
        purposes: e.purposes.map((e => ({
            consent: e.consent || !1,
            id: e.id,
            legitimateInterestConsent: !!e.showLegitimateInterestToggle && _l(e.legitimateInterestConsent, !0)
        }))),
        specialFeatures: e.specialFeatures.map((e => ({
            consent: e.consent || !1,
            id: e.id
        }))),
        vendors: e.vendors.map((e => ({
            consent: e.consent || !1,
            id: e.id,
            legitimateInterestConsent: e.specialPurposes.length && 0 === e.legitimateInterestPurposes.length && 0 === e.purposes.length || !!e.legitimateInterestPurposes.length && _l(e.legitimateInterestConsent, !0)
        })))
    }),
    Sl = (e, t, r = !0) => e.map((e => {
        const i = t.find((t => e.slug === t.slug)),
            o = e.services.map((e => {
                const {
                    consent: t
                } = (null == i ? void 0 : i.services.find((t => e.id === t.id))) || e, n = e;
                return r && (n.consent = t), n
            }));
        return n(n({}, e), {}, {
            services: o
        })
    })),
    Il = j({
        core: null,
        data: null,
        labels: null,
        setSettingsCore: () => {},
        setSettingsData: () => {},
        setSettingsLabels: () => {},
        setSettingsUI: () => {},
        ui: null
    });
Il.displayName = "SettingsContext";
const Cl = ys((({
        children: e,
        UC: t
    }) => {
        const [n, r] = es(t.getSettingsCore()), [i, o] = es(t.getSettingsData()), [s, a] = es(t.getSettingsLabels()), [c, l] = es(t.getSettingsUI());
        return _(Il.Provider, {
            value: {
                core: n,
                data: i,
                labels: s,
                setSettingsCore: r,
                setSettingsData: o,
                setSettingsLabels: a,
                setSettingsUI: l,
                ui: c
            }
        }, e)
    })),
    Tl = () => as(Il),
    El = (e, t) => {
        if (null === e) return " - ";
        if (e <= 0) return t.session;
        let n = e,
            r = "";
        if (n >= 86400) {
            const e = Math.floor(n / 31536e3);
            e > 0 && (n %= 31536e3, r = 1 === e ? r.concat(`${e} ${t.year}, `) : r.concat(`${e} ${t.years}, `));
            const i = Math.floor(n / 2628e3);
            i > 0 && (n %= 2628e3, r = 1 === i ? r.concat(`${i} ${t.month}, `) : r.concat(`${i} ${t.months}, `));
            const o = Math.floor(e / 4),
                s = Math.floor(n / 86400),
                a = 0 === o ? s : s - o;
            return a > 0 && (r = 1 === a ? r.concat(`${a} ${t.day}`) : r.concat(`${a} ${t.days}`)), r = r.replace(/,\s*$/, ""), r
        }
        const i = Math.floor(n / 3600);
        i > 0 && (n %= 3600, r = 1 === i ? r.concat(`${i} ${t.hour}, `) : r.concat(`${i} ${t.hours}, `));
        const o = Math.floor(n / 60);
        o > 0 && (r = 1 === o ? r.concat(`${o} ${t.minute}, `) : r.concat(`${o} ${t.minutes}, `));
        const s = n % 60;
        return s > 0 && (r = 1 === s ? r.concat(`${s} ${t.second}, `) : r.concat(`${s} ${t.seconds}, `)), r = r.replace(/,\s*$/, ""), r
    };
async function Al(e) {
    let t;
    try {
        t = await window.fetch(e)
    } catch (e) {
        console.warn(`Usercentrics: Failed to fetch data from server: ${e}`)
    }
    return t && t.status >= 400 && console.warn("Usercentrics: Failed to fetch data from server"), t
}

function Ll(e, t, n) {
    return "*" === e ? `${e} (${t})` : e.includes("*") ? `${e} (${n})` : e
}
const wl = {
        tcfData: null,
        setTcfData: () => {}
    },
    Ol = j(wl);
Ol.displayName = "TcfContext";
const Rl = ys((({
        children: e
    }) => {
        const [t, n] = es(wl.tcfData);
        return _(Ol.Provider, {
            value: {
                setTcfData: n,
                tcfData: t
            }
        }, e)
    })),
    Dl = () => as(Ol),
    Nl = {
        abTestVariant: "",
        baseHref: "",
        clearCategoryPurposeScrollToId: () => {},
        clearServiceVendorScrollToId: () => {},
        closeView: () => {},
        currentLanguage: "",
        firstLayerVariant: null,
        isAmpEnabled: !1,
        isInFullScreen: !1,
        previousLanguage: "",
        previousView: z.NONE,
        scrollToIdTabViewCategoryPurpose: "",
        scrollToIdTabViewServiceVendors: "",
        scrollToSubServices: !1,
        secondLayerVariant: null,
        setBaseHref: () => {},
        setIsInFullScreen: () => {},
        setLanguage: () => {},
        setScrollToIdTabViewCategoryPurpose: () => {},
        setScrollToIdTabViewServiceVendor: () => {},
        setScrollToSubServices: () => {},
        setTabView: () => {},
        settingsCloseView: z.NONE,
        setView: () => Promise.resolve(),
        tabView: re.CATEGORIES_PURPOSES,
        uiVariant: sr.DEFAULT,
        view: z.NONE
    },
    Pl = j(Nl);
Pl.displayName = "UiContext";
const Ul = ys((({
        children: e,
        initialUIValues: t,
        UC: n
    }) => {
        const {
            ui: r,
            setSettingsLabels: i,
            setSettingsUI: o
        } = Tl(), [s] = es(n.getAbTestVariant()), [a, c] = es(Nl.baseHref), [l] = es(t.ampEnabled), [u] = es(t.variant), [d, f] = es(null), [p, h] = es(null);
        ns((() => {
            (Ct(r) || St(r)) && (d !== r.firstLayer.variant && f(r.firstLayer.variant), p !== r.secondLayer.variant && h(r.secondLayer.variant))
        }), [r]);
        const [g, v] = es(Nl.scrollToIdTabViewCategoryPurpose), [y, m] = es(Nl.scrollToIdTabViewServiceVendors), [b, S] = es(Nl.scrollToSubServices), [I, C] = es(Nl.tabView), [T, E] = es((() => {
            switch (t.initialLayer) {
                case or.FIRST_LAYER:
                    return {
                        current: z.FIRST_LAYER,
                        previous: Nl.previousView
                    };
                case or.PRIVACY_BUTTON:
                    return {
                        current: z.PRIVACY_BUTTON,
                        previous: Nl.previousView
                    };
                case or.SECOND_LAYER:
                    return {
                        current: z.SECOND_LAYER,
                        previous: Nl.previousView
                    };
                default:
                    return {
                        current: z.NONE,
                        previous: Nl.previousView
                    }
            }
        })), [A, L] = es(Nl.settingsCloseView), [w, O] = es(Nl.isInFullScreen), [R, D] = es({
            currentLanguage: Nl.currentLanguage,
            previousLanguage: Nl.previousLanguage
        }), {
            categories: N,
            getUpdatedCategories: P,
            setCategories: U
        } = il(), {
            setTcfData: F
        } = Dl(), k = async (e, t = !0) => {
            await n.updateLayer((e => {
                switch (e) {
                    case z.FIRST_LAYER:
                        return or.FIRST_LAYER;
                    case z.SECOND_LAYER:
                        return or.SECOND_LAYER;
                    case z.PRIVACY_BUTTON:
                        return or.PRIVACY_BUTTON;
                    case z.NONE:
                    default:
                        return or.NONE
                }
            })(e)).then((async () => {
                if (T.current === z.NONE) return;
                const r = await P(e);
                U(Sl(r, N, t)), i(n.getSettingsLabels()), o(n.getSettingsUI()), u === sr.TCF && F(n.getTCFData())
            })), e !== z.SECOND_LAYER ? L(e) : L(T.current), E((t => ({
                current: e,
                previous: t.current
            })))
        };
        return _(Pl.Provider, {
            value: {
                abTestVariant: s,
                baseHref: a,
                clearCategoryPurposeScrollToId: () => {
                    v("")
                },
                clearServiceVendorScrollToId: () => {
                    m("")
                },
                closeView: async () => {
                    r && !Tt(r) && r.enablePrivacyButton ? await k(z.PRIVACY_BUTTON) : await k(z.NONE)
                },
                currentLanguage: R.currentLanguage,
                firstLayerVariant: d,
                isAmpEnabled: l,
                isInFullScreen: w,
                previousLanguage: R.previousLanguage,
                previousView: T.previous,
                scrollToIdTabViewCategoryPurpose: g,
                scrollToIdTabViewServiceVendors: y,
                scrollToSubServices: b,
                secondLayerVariant: p,
                setBaseHref: c,
                setIsInFullScreen: O,
                setLanguage: e => {
                    D((t => ({
                        currentLanguage: e,
                        previousLanguage: t.currentLanguage
                    })))
                },
                setScrollToIdTabViewCategoryPurpose: v,
                setScrollToIdTabViewServiceVendor: m,
                setScrollToSubServices: S,
                setTabView: C,
                settingsCloseView: A,
                setView: k,
                tabView: I,
                uiVariant: u,
                view: T.current
            }
        }, e)
    })),
    Fl = () => as(Pl),
    kl = (e, t, n) => {
        const [r, i] = es(null), {
            core: o,
            ui: s
        } = Tl(), {
            abTestVariant: a,
            setBaseHref: c,
            view: l,
            previousView: u
        } = Fl(), {
            setBodyScrolling: d
        } = (() => {
            const [e, t] = es(!0), [n, r] = es(null);
            return ns((() => {
                document.body && r({
                    overflow: document.body.style.overflow
                })
            }), []), ns((() => {
                document.body && (e ? null != n && n.overflow ? document.body.style.overflow = n.overflow : document.body.style.removeProperty("overflow") : document.body.style.overflow = "hidden")
            }), [e, n]), {
                setBodyScrolling: t
            }
        })(), f = Kc();
        ns((() => {
            if (t.ampEnabled) {
                const e = zr();
                c((null == e ? void 0 : e.baseHref) || "")
            }
            switch (t.initialLayer) {
                case or.FIRST_LAYER:
                    d(!1);
                    break;
                case or.PRIVACY_BUTTON:
                    d(!0);
                    break;
                case or.SECOND_LAYER:
                    d(!1);
                    break;
                default:
                    d(!0)
            }
        }), []), ns((() => {
            if (o) {
                const e = ao(s, ie.includes(o.language.selected), t.variant);
                Zr(e, f) || n(e)
            }
        }), [s]), ns((() => {
            if (l !== u) {
                const e = new window.CustomEvent(J.VIEW_CHANGED, {
                    detail: {
                        previousView: u,
                        view: l
                    }
                });
                window.dispatchEvent(e)
            }
        }), [u, l]), ns((() => {
            if (s && o && l !== u && l !== r) {
                switch (l) {
                    case z.FIRST_LAYER:
                        if (!Tt(s)) {
                            const {
                                isOverlayEnabled: t
                            } = s.firstLayer;
                            d(!t), u !== z.SECOND_LAYER && (ei(rr.CMP_SHOWN, e.setTrackingPixel), Qr(l, W.CMP_SHOWN, a))
                        }
                        break;
                    case z.SECOND_LAYER:
                        if (!Tt(s)) {
                            const {
                                isOverlayEnabled: t
                            } = s.secondLayer;
                            d(!t), u !== z.FIRST_LAYER && (ei(rr.CMP_SHOWN, e.setTrackingPixel), Qr(l, W.CMP_SHOWN, a))
                        }
                        break;
                    case z.PRIVACY_BUTTON:
                    case z.NONE:
                    default:
                        d(!0)
                }
                i(l)
            }
        }), [e.setTrackingPixel, u, d, l, a, s, r])
    };
var xl, Vl = new Uint8Array(16);

function Bl() {
    if (!xl && !(xl = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return xl(Vl)
}
var Ml = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function Gl(e) {
    return "string" == typeof e && Ml.test(e)
}
for (var Hl = [], $l = 0; $l < 256; ++$l) Hl.push(($l + 256).toString(16).substr(1));

function jl(e, t, n) {
    var r = (e = e || {}).random || (e.rng || Bl)();
    if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
        n = n || 0;
        for (var i = 0; i < 16; ++i) t[n + i] = r[i];
        return t
    }
    return function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = (Hl[e[t + 0]] + Hl[e[t + 1]] + Hl[e[t + 2]] + Hl[e[t + 3]] + "-" + Hl[e[t + 4]] + Hl[e[t + 5]] + "-" + Hl[e[t + 6]] + Hl[e[t + 7]] + "-" + Hl[e[t + 8]] + Hl[e[t + 9]] + "-" + Hl[e[t + 10]] + Hl[e[t + 11]] + Hl[e[t + 12]] + Hl[e[t + 13]] + Hl[e[t + 14]] + Hl[e[t + 15]]).toLowerCase();
        if (!Gl(n)) throw TypeError("Stringified UUID is invalid");
        return n
    }(r)
}
class Yl {
    constructor({
        scope: e,
        method: t,
        result: n,
        setResult: i
    }) {
        r(this, "scope", void 0), r(this, "isMounted", !1), r(this, "method", void 0), r(this, "mostRecentMutationId", void 0), r(this, "previousResult", void 0), r(this, "result", void 0), r(this, "setResult", void 0), this.scope = e, this.method = t, this.mostRecentMutationId = jl(), this.result = n, this.setResult = i, this.runMutation = this.runMutation.bind(this)
    }
    execute(e) {
        return this.isMounted = !0, [this.runMutation, e]
    }
    async runMutation(...e) {
        this.onMutationStart();
        const t = this.generateNewMutationId();
        return this.mutate(...e).then((e => (this.onMutationCompleted(e, t), e || {
            data: null
        }))).catch((e => {
            throw this.onMutationError(e, t), e
        }))
    }
    mutate(...e) {
        return this.method.call(this.scope, ...e)
    }
    onMutationStart() {
        this.result.loading || this.updateResult({
            called: !0,
            data: null,
            error: null,
            loading: !0
        })
    }
    onMutationCompleted(e, t) {
        this.isMostRecentMutation(t) && this.updateResult({
            called: !0,
            data: e ? e.data : null,
            error: null,
            loading: !1
        })
    }
    onMutationError(e, t) {
        this.isMostRecentMutation(t) && this.updateResult({
            called: !0,
            data: null,
            error: e,
            loading: !1
        })
    }
    generateNewMutationId() {
        const e = jl();
        return this.mostRecentMutationId = e, e
    }
    isMostRecentMutation(e) {
        return this.mostRecentMutationId === e
    }
    updateResult(e) {
        !this.isMounted || this.previousResult && Zr(this.previousResult, e) || (this.setResult(e), this.previousResult = e)
    }
}
const Wl = (e, t) => {
    const [n, r] = es({
        called: !1,
        loading: !1
    }), i = is();
    return (i.current || (i.current = new Yl({
        method: e,
        result: n,
        scope: t,
        setResult: r
    })), i.current).execute(n)
};
let zl, Jl, ql;
! function(e) {
    e.AUTO = "auto", e.START = "start", e.CENTER = "center", e.END = "end"
}(zl || (zl = {})),
function(e) {
    e.HORIZONTAL = "horizontal", e.VERTICAL = "vertical"
}(Jl || (Jl = {})),
function(e) {
    e.OBSERVED = "observed", e.REQUESTED = "requested"
}(ql || (ql = {})), Jl.VERTICAL, Jl.HORIZONTAL;
const Kl = {
        [Jl.VERTICAL]: "height",
        [Jl.HORIZONTAL]: "width"
    },
    Xl = {
        [Jl.VERTICAL]: "top",
        [Jl.HORIZONTAL]: "left"
    },
    Zl = {
        [Jl.VERTICAL]: "marginTop",
        [Jl.HORIZONTAL]: "marginLeft"
    },
    Ql = {
        [Jl.VERTICAL]: "marginBottom",
        [Jl.HORIZONTAL]: "marginRight"
    },
    eu = 50;
var tu = "2.21.1";
const nu = e => {
        switch (e) {
            case sr.CCPA:
                return "CCPA";
            case sr.DEFAULT:
                return "GDPR";
            case sr.TCF:
                return "TCF";
            default:
                return ""
        }
    },
    ru = ({
        UC: e,
        children: t
    }) => {
        const {
            core: n,
            data: r
        } = Tl(), {
            uiVariant: i,
            view: o
        } = Fl(), s = async t => {
            try {
                var s, a, c, l;
                const {
                    code: d,
                    regionCode: f
                } = await e.fetchUserCountry(), p = (u = {
                    cmpLayer: o,
                    controllerId: null !== (s = null == r ? void 0 : r.controllerId) && void 0 !== s ? s : "",
                    msg: `EUD ERROR[V2]: ${t.message}`,
                    origin: window.location.origin,
                    settingsId: null !== (a = null == n ? void 0 : n.id) && void 0 !== a ? a : "",
                    settingsVersion: null !== (c = null == n ? void 0 : n.version) && void 0 !== c ? c : "",
                    stackTrace: null !== (l = t.stack) && void 0 !== l ? l : "",
                    timestamp: Date.now().toString(),
                    uiVariant: nu(i),
                    uiVersion: tu,
                    userAgent: window.navigator.userAgent,
                    userCountry: d,
                    userRegion: f
                }, JSON.stringify(u));
                throw fetch("https://service-proxy-logger-wfcmkywozq-ey.a.run.app/eud-errors", {
                    body: JSON.stringify(p),
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8"
                    },
                    method: "POST"
                }).then((e => {
                    if (e.status >= 400) throw new Error(`Error ${e.status} during error tracking`)
                })).catch((e => {
                    throw new Error(`EXCEPTION: ${e}`)
                })), new Error(p)
            } catch (e) {
                throw new Error(`Error: ${e}`)
            }
            var u
        }, [a] = function(e) {
            var t = Qo($o++, 10),
                n = es();
            return t.__ = e, jo.componentDidCatch || (jo.componentDidCatch = function(e) {
                t.__ && t.__(e), n[1](e)
            }), [n[0], function() {
                n[1](void 0)
            }]
        }((e => s(e)));
        return a ? null : _(I, null, t)
    },
    iu = ["children"],
    ou = e => {
        let {
            children: t
        } = e, n = o(e, iu);
        const r = is(null),
            s = is([]),
            a = ['a[href]:not([tabindex="-1"])', 'button:not([disabled]):not([tabindex="-1"])', 'input:not([disabled]):not([type="hidden"]):not([tabindex="-1"])', 'select:not([disabled]):not([tabindex="-1"])', 'textarea:not([disabled]):not([tabindex="-1"])', '[contenteditable]:not([tabindex="-1"])', '[tabindex]:not([tabindex="-1"])'].join(", ");
        return ns((() => {
            const e = () => {
                    null != (null == r ? void 0 : r.current) && (s.current = Array.from(r.current.querySelectorAll(a)))
                },
                t = new MutationObserver((() => {
                    e()
                }));
            return e(), null != (null == r ? void 0 : r.current) && t.observe(r.current, {
                childList: !0
            }), () => {
                t.disconnect()
            }
        }), [r.current]), ns((() => {
            const e = e => {
                const {
                    code: t,
                    shiftKey: n
                } = e;
                if ("Tab" === t) {
                    var i, o;
                    if (null != (null == r ? void 0 : r.current) && (s.current = Array.from(r.current.querySelectorAll(a))), !s.current) return;
                    const {
                        length: t,
                        0: c,
                        [t - 1]: l
                    } = s.current;
                    if (1 === t) return void e.preventDefault();
                    const u = null === (i = document.activeElement) || void 0 === i || null === (o = i.shadowRoot) || void 0 === o ? void 0 : o.querySelector(":focus-visible");
                    if (void 0 === u && c && (e.preventDefault(), c.focus()), !n && u === l && c) return e.preventDefault(), void c.focus();
                    n && u === c && l && (e.preventDefault(), l.focus())
                }
            };
            return window.addEventListener("keydown", e), () => {
                window.removeEventListener("keydown", e)
            }
        }), [s]), _(Es, {
            fallback: _(I, null)
        }, _("div", i({
            id: "focus-lock-id"
        }, n, {
            ref: r
        }), t))
    },
    su = Ls((() => dynamicImportPolyfill("./index-dbc98cf3.js",
        import.meta.url))),
    au = ({
        initialUIValues: e,
        restartCMP: t,
        onThemeChange: n,
        UC: r
    }) => {
        const {
            firstLayerVariant: i,
            view: o
        } = Fl();
        kl(r, e, n);
        const {
            acceptAllDefault: s,
            acceptAllTCF: a,
            closeCMP: c,
            denyAllDefault: l,
            denyAllTCF: u,
            updateLanguage: d,
            showSecondLayer: f
        } = (({
            initialUIValues: e,
            onThemeChange: t,
            restartCMP: n,
            UC: r
        }) => {
            const [i, o] = es(!0), [, s] = es(!1), {
                abTestVariant: a,
                clearServiceVendorScrollToId: c,
                closeView: l,
                isAmpEnabled: u,
                setIsInFullScreen: d,
                setLanguage: f,
                setScrollToIdTabViewServiceVendor: p,
                setTabView: h,
                setView: g,
                settingsCloseView: v,
                uiVariant: y,
                view: m
            } = Fl(), {
                categories: _,
                getUpdatedCategories: b,
                services: S,
                setCategories: I
            } = il(), {
                setTcfData: C
            } = Dl(), {
                core: T,
                ui: E,
                setSettingsLabels: A,
                setSettingsUI: L
            } = Tl(), [w, {
                loading: O
            }] = Wl(r.dismissAmp, r), [R, {
                loading: D
            }] = Wl(r.changeLanguage, r), [N, {
                loading: P
            }] = Wl(r.saveOptOutForCcpa, r), [U, {
                loading: F
            }] = Wl(r.updateServices, r), [k, {
                loading: x
            }] = Wl(r.acceptAllServices, r), [V, {
                loading: B
            }] = Wl(r.acceptAllForTCF, r), [M, {
                loading: G
            }] = Wl(r.acceptAllAmp, r), [H, {
                loading: $
            }] = Wl(r.denyAllServices, r), [j, {
                loading: Y
            }] = Wl(r.denyAllForTCF, r), [K, {
                loading: X
            }] = Wl(r.denyAllAmp, r), Z = ss((async () => {
                !x && T && k().then((async () => {
                    u && await M(), Qr(m, W.ACCEPT_ALL, a), ei(rr.ACCEPT_ALL, r.setTrackingPixel), I(await b(m)), A(r.getSettingsLabels()), L(r.getSettingsUI())
                }))
            }), [r, M, k, x, T, u, b, I, m]), Q = ss((async () => {
                if (x || B || G || !T) return;
                const e = m === z.FIRST_LAYER ? ln.FIRST_LAYER : ln.SECOND_LAYER;
                Promise.all([k(), V(e)]).then((async () => {
                    u && await M(), Qr(m, W.ACCEPT_ALL, a), ei(rr.ACCEPT_ALL, r.setTrackingPixel), I(await b(m)), C(r.getTCFData()), A(r.getSettingsLabels()), L(r.getSettingsUI())
                }))
            }), [r, M, G, V, B, k, x, T, u, b, I, C, m]), ee = ss((async e => {
                if (P) return;
                const t = !e;
                s(t), N(t), A(r.getSettingsLabels()), L(r.getSettingsUI())
            }), [N, P]), te = ss((async (e, t, n = nr.EXPLICIT) => {
                if (0 === e.length) throw new Error(q.SERVICE_MISSING_ID);
                if (F || !T) return;
                const i = e.reduce(((e, n) => S.some((e => e.id === n)) ? [...e, {
                    serviceId: n,
                    status: t
                }] : e), []);
                U(i, n).then((async () => {
                    Qr(m, W.SAVE, a), ei(rr.CUSTOM_CHOICE, r.setTrackingPixel), I(await b(m)), A(r.getSettingsLabels()), L(r.getSettingsUI())
                }))
            }), [r, T, b, I, U, F, m]), ne = ss((() => {
                switch (e.variant) {
                    case sr.CCPA:
                        return ee(!0);
                    case sr.DEFAULT:
                        return Z();
                    case sr.TCF:
                        return Q();
                    default:
                        return null
                }
            }), [Z, Q, ee, e.variant]), oe = ss((() => r.areAllConsentsAccepted()), [r]), se = ss((() => r.clearStorage()), [r]), ae = ss((async () => {
                O || (!u || m === z.SECOND_LAYER && v === z.FIRST_LAYER || (await w(), d(!1)), m === z.SECOND_LAYER ? await g(v) : l())
            }), [l, w, O, u, d, v, g, m]), ce = ss((async () => {
                $ || X || !T || H().then((async () => {
                    u && await K(), Qr(m, W.DENY_ALL, a), ei(rr.DENY_ALL, r.setTrackingPixel), I(await b(m)), A(r.getSettingsLabels()), L(r.getSettingsUI())
                }))
            }), [r, T, b, K, X, H, $, u, I, m]), le = ss((async () => {
                if ($ || Y || !T) return;
                const e = m === z.FIRST_LAYER ? ln.FIRST_LAYER : ln.SECOND_LAYER;
                Promise.all([H(), j(e)]).then((async () => {
                    u && await r.denyAllAmp(), Qr(m, W.DENY_ALL, a), ei(rr.DENY_ALL, r.setTrackingPixel), I(await b(m)), C(r.getTCFData()), A(r.getSettingsLabels()), L(r.getSettingsUI())
                }))
            }), [r, j, Y, H, $, b, u, T, I, C, m]), ue = ss((() => {
                switch (e.variant) {
                    case sr.CCPA:
                        return ee(!1);
                    case sr.DEFAULT:
                        return ce();
                    case sr.TCF:
                        return le();
                    default:
                        return null
                }
            }), [ee, ce, le, e.variant]), de = ss((() => r.enableScriptsForServicesWithConsent()), [r]), fe = ss((() => r.getSettingsCore().language.selected), [r]), pe = ss((() => r.getServices()), [r]), he = ss((() => r.getServicesBaseInfo()), [r]), ge = ss((() => r.getServicesFullInfo()), [r]), ve = ss((() => r.getSettings()), [r]), ye = ss((() => r.getSettingsCore()), [r]), me = ss((() => r.getControllerId()), [r]), _e = ss((() => {
                var e;
                return null === (e = r.getTCFData()) || void 0 === e ? void 0 : e.vendors
            }), [r]), be = ss((async e => g(z.FIRST_LAYER, e)), [g]), Se = ss((async (e, t) => (t ? (h(re.SERVICES_VENDORS), setTimeout((() => {
                p(t)
            }))) : c(), g(z.SECOND_LAYER, e))), [g, h, p, c]), Ie = ss((async n => {
                T && ie.includes(T.language.selected) !== ie.includes(n.toLowerCase()) && t(ao(E, ie.includes(n.toLowerCase()), e.variant)), D || R(n.toLowerCase()).then((async () => {
                    I(Sl(await b(m), _)), A(r.getSettingsLabels()), f(n.toLowerCase()), y === sr.TCF && C(r.getTCFData())
                }))
            }), [r, _, R, D, e.variant, b, t, I, f, C, y, m]);
            return ns((() => {
                window.UC_UI = {
                    acceptAllConsents: ne,
                    acceptService: (e, t = nr.EXPLICIT) => te([e], !0, t),
                    acceptServices: (e, t = nr.EXPLICIT) => te(e, !0, t),
                    areAllConsentsAccepted: oe,
                    clearStorage: se,
                    closeCMP: ae,
                    denyAllConsents: ue,
                    denyAndCloseCcpa: async () => {
                        await ee(!1), ae()
                    },
                    enableScriptsForServicesWithConsent: de,
                    getActiveLanguage: fe,
                    getControllerId: me,
                    getServices: pe,
                    getServicesBaseInfo: he,
                    getServicesFullInfo: ge,
                    getSettings: ve,
                    getSettingsCore: ye,
                    getTCFVendors: _e,
                    isInitialized: () => !0,
                    rejectService: (e, t = nr.EXPLICIT) => te([e], !1, t),
                    rejectServices: (e, t = nr.EXPLICIT) => te(e, !1, t),
                    restartCMP: n,
                    showFirstLayer: () => be(!1),
                    showSecondLayer: e => Se(!1, e),
                    updateLanguage: Ie
                }
            }), []), ns((() => {
                var e;
                window.UC_UI && null !== (e = window.UC_UI) && void 0 !== e && e.isInitialized() && i && (o(!1), window.dispatchEvent(new window.CustomEvent(J.INITIALIZED)))
            }), [window.UC_UI, i]), {
                acceptAllDefault: Z,
                acceptAllTCF: Q,
                closeCMP: ae,
                denyAllDefault: ce,
                denyAllTCF: le,
                showSecondLayer: e => Se(!0, e),
                updateLanguage: Ie
            }
        })({
            initialUIValues: e,
            onThemeChange: n,
            restartCMP: t,
            UC: r
        });
        if ((e => {
                const [t, n] = es(!1), {
                    categories: r,
                    services: i,
                    setCategories: o
                } = il(), {
                    core: s,
                    labels: a,
                    ui: c
                } = Tl(), {
                    uiVariant: l
                } = Fl(), u = e.getTCFData(), {
                    setSettingsUI: d,
                    setSettingsLabels: f
                } = Tl(), p = Array.from(document.getElementsByClassName(gl.embedTCFAnkerName)), h = Array.from(document.getElementsByClassName(ol.embeddingContainerClassName));
                ns((() => {
                    (h.length > 0 || p.length > 0) && Array.isArray(r) && r.length > 0 && !t && (n(!0), e.loadServices().then((async () => {
                        const t = await e.getCategoriesFullInfo();
                        o(Sl(t, r)), d(e.getSettingsUI()), f(e.getSettingsLabels())
                    })))
                }), [r, t]), ns((() => {
                    if (null != s && s.isEmbeddingsEnabled && null != l && el(i) && (n(!0), p.length > 0 && s.isTcfEnabled && u && _t(a) && dynamicImportPolyfill("./tcf-77ddf26b.js",
                            import.meta.url).then((e => {
                            e.embedTCF(u, i, r, p, a)
                        })), a && h.length > 0 && Array.isArray(r) && r.length > 0)) {
                        const e = l === sr.TCF && bt(a) ? a.secondLayer.serviceTab : "Services";
                        dynamicImportPolyfill("./gdpr-12406c81.js",
                            import.meta.url).then((t => {
                            t.embedGDPR(r, i, a, e, h)
                        }))
                    }
                }), [s, l, r, i, c])
            })(r), o === z.NONE) return null;
        const p = _(su, {
            acceptAllDefault: s,
            acceptAllTCF: a,
            denyAllDefault: l,
            denyAllTCF: u,
            onClose: c,
            onLanguageChange: d,
            showSecondLayer: f,
            UC: r
        });
        return _(Es, {
            fallback: _(I, null)
        }, _(ru, {
            UC: r
        }, o === z.FIRST_LAYER && i === Ae.WALL || o === z.SECOND_LAYER ? _(ou, null, p) : p))
    };
let cu, lu;
! function(e) {
    e.BANNER_CONTENT = ".uc-banner-content", e.BUTTONS = ".uc-action-button", e.BUTTONS_CONTAINER = ".uc-buttons-container", e.CARD_TITLE = ".uc-card-title", e.CARD_DESCRIPTION = ".uc-card-description", e.LANGUAGE_SWITCH = ".uc-language-switch", e.LAYER = ".uc-layer", e.LINKS = ".uc-links", e.MESSAGE = ".uc-message", e.TAB_BUTTON = ".uc-tab-button", e.TAB_BUTTON_ACTIVE = ".uc-tab-button-active", e.TAB_CONTENT = ".uc-tab-content", e.TITLE = ".uc-title"
}(cu || (cu = {})),
function(e) {
    e.DEFAULT = "default", e.DESKTOP = "desktop", e.IE = "ie", e.LANDSCAPE = "landscape", e.PORTRAIT = "portrait", e.MOBILE = "mobile", e.MOBILE_S = "mobileSmall", e.MOBILE_XS = "mobileExtraSmall"
}(lu || (lu = {}));
const uu = [{
        directives: ["border", "height", "margin", "max-width", "padding", "width"],
        selector: cu.BANNER_CONTENT
    }, {
        directives: ["border", "font", "height", "margin", "padding", "width"],
        selector: cu.BUTTONS
    }, {
        directives: ["flex"],
        selector: cu.BUTTONS_CONTAINER
    }, {
        directives: ["font-size", "font-weight", "line-height"],
        selector: cu.CARD_DESCRIPTION
    }, {
        directives: ["font-size", "font-weight", "line-height"],
        selector: cu.CARD_TITLE
    }, {
        directives: ["background", "color", "font-size"],
        selector: cu.LANGUAGE_SWITCH
    }, {
        directives: ["border", "height", "margin", "max-width", "padding", "width"],
        selector: cu.LAYER
    }, {
        directives: ["font", "line-height", "text"],
        selector: cu.LINKS
    }, {
        directives: ["color", "font", "text"],
        selector: cu.MESSAGE
    }, {
        directives: ["background", "font", "height", "line-height", "margin", "padding", "text", "width"],
        selector: cu.TAB_BUTTON
    }, {
        directives: ["background", "font", "height", "line-height", "margin", "padding", "text", "width"],
        selector: cu.TAB_BUTTON_ACTIVE
    }, {
        directives: ["background", "color", "margin", "padding"],
        selector: cu.TAB_CONTENT
    }, {
        directives: ["color", "font", "line-height", "text"],
        selector: cu.TITLE
    }],
    du = (e, t, {
        isDesktop: r,
        isIE: i,
        isLandscape: o,
        isPortrait: s,
        isMobileMd: a,
        isMobileExtraSmall: c,
        isMobileSmall: l
    }) => {
        const u = e.find((e => e.selector === t));
        let d = null;
        const f = e => {
            e && (d = n(d ? n({}, d) : {}, e))
        };
        return u && (f(u.default), r && f(u.desktop), l && f(u.mobileSmall), c && f(u.mobileExtraSmall), a && f(u.mobile), o && !r && f(u.landscape), s && !r && f(u.portrait), i && f(u.ie)), d
    },
    fu = (e, {
        directives: t
    }) => {
        const r = /\s*([a-z-]+)\s*:\s*((?:[^;]*url\(.*?\)[^;]*|[^;]*)*)\s*(?:;|$)/gi;
        let i, o;
        for (; null !== (i = r.exec(e));) {
            const e = i[1];
            if ("string" != typeof e) break;
            t.some((t => 0 === e.indexOf(t))) && (o = n(n({}, o), {}, {
                [e.toLowerCase()]: i[2]
            }))
        }
        return o
    },
    pu = e => {
        const t = uu.find((t => e.split("__")[0] === t.selector));
        return t ? -1 !== e.indexOf(lu.DESKTOP) ? {
            allowedCss: t,
            media: lu.DESKTOP
        } : -1 !== e.indexOf(lu.IE) ? {
            allowedCss: t,
            media: lu.IE
        } : -1 !== e.indexOf(lu.LANDSCAPE) ? {
            allowedCss: t,
            media: lu.LANDSCAPE
        } : -1 !== e.indexOf(lu.MOBILE_S) ? {
            allowedCss: t,
            media: lu.MOBILE_S
        } : -1 !== e.indexOf(lu.MOBILE_XS) ? {
            allowedCss: t,
            media: lu.MOBILE_XS
        } : -1 !== e.indexOf(lu.MOBILE) ? {
            allowedCss: t,
            media: lu.MOBILE
        } : -1 !== e.indexOf(lu.PORTRAIT) ? {
            allowedCss: t,
            media: lu.PORTRAIT
        } : {
            allowedCss: t,
            media: lu.DEFAULT
        } : null
    },
    hu = e => e.trim().replace(/\s*,\s*/, ", "),
    gu = j({
        css: []
    });
gu.displayName = "CustomCssContext";
const vu = ys((({
        children: e,
        UC: t
    }) => {
        const r = t.getSettingsUI(),
            [i] = es(r && !Tt(r) && r.customCss ? (e => {
                const t = /([\s\S]+?)\{([\s\S]*?)\}/gm,
                    r = e.replace(/\/\*[\s\S]*?\*\//g, "");
                let i, o = [];
                for (; null !== (i = t.exec(r));) {
                    const e = hu(i[1]),
                        t = pu(e),
                        r = t && fu(i[2].trim(), t.allowedCss);
                    if (r && null != t && t.allowedCss) {
                        const e = o.find((e => e.selector === t.allowedCss.selector));
                        o = e ? o.map((e => e.selector === t.allowedCss.selector ? n(n({}, e), {}, {
                            [t.media]: r
                        }) : e)) : [...o, {
                            [t.media]: r,
                            selector: t.allowedCss.selector
                        }]
                    }
                }
                return o
            })(r.customCss) : []);
        return _(gu.Provider, {
            value: {
                css: i
            }
        }, e)
    })),
    yu = e => {
        const {
            css: t
        } = as(gu), n = Qc();
        return {
            rules: e ? du(t, e, n) : null
        }
    },
    mu = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, "-").toLowerCase(),
    _u = {
        blockFocus: !1,
        consumeNextFocus: () => null,
        langSelectorOpen: !1,
        nextFocus: null,
        setBlockFocus: () => null,
        setLangSelectorStatus: () => null,
        setNextFocus: () => null
    },
    bu = j(_u);
bu.displayName = "GlobalStateContext";
const Su = ys((({
        children: e
    }) => {
        const {
            view: t
        } = Fl(), [n, r] = es(_u.blockFocus), [i, o] = es(_u.nextFocus), [s, a] = es(_u.langSelectorOpen), [c, l] = es(_u.nextFocus), u = e => {
            r(e)
        };
        ns((() => {
            null === i && u(!1)
        }), [i]);
        return _(bu.Provider, {
            value: {
                blockFocus: n,
                consumeNextFocus: () => {
                    var e;
                    if ("string" == typeof i) try {
                        var t;
                        const e = document.getElementById(oe),
                            n = (null == e || null === (t = e.shadowRoot) || void 0 === t ? void 0 : t.querySelector(`[data-testid=${mu(i)}]`)) || null;
                        null !== n && n.focus()
                    } catch (e) {} else null == i || null === (e = i.current) || void 0 === e || e.focus(), o(null !== c ? c : null)
                },
                langSelectorOpen: s,
                nextFocus: i,
                setBlockFocus: u,
                setLangSelectorStatus: e => {
                    a(e)
                },
                setNextFocus: e => {
                    null !== i && t === z.SECOND_LAYER ? l(i) : l(null), o(e)
                }
            }
        }, e)
    })),
    Iu = () => as(bu),
    Cu = Xc.div(["all:initial;color:", ";direction:", ";font-family:", ";font-size:", ";font-weight:", ";line-height:1.15;-webkit-text-size-adjust:100%;-webkit-overflow-scrolling:touch;*,*:after,*:before{box-sizing:border-box;}[hidden]{display:none;}a{font-weight:normal;}button,[type='button'],[type='reset'],[type='submit']{cursor:pointer;font-family:inherit;line-height:inherit;transition:background-color 0.2s ease-in-out;}img{border-style:none;}"], (({
        theme: e
    }) => e.typography.color.primary), (({
        theme: e
    }) => e.typography.rtlEnabled ? "rtl" : "unset"), (({
        theme: e
    }) => e.typography.font), (({
        theme: e
    }) => e.typography.size.root), (({
        theme: e
    }) => e.typography.weight.regular));
var Tu = ys((({
    children: e
}) => _(Cu, null, e)));
a.debounceRendering = setTimeout;
if (window.UC_UI_IS_RENDERED || !1) throw new Error(q.DUPLICATED_SCRIPT);
window.UC_UI_IS_RENDERED = !0;
let Eu = !1;
async function Au(e) {
    let t;
    t = e.options.rulesetId ? new Wr(e.options.rulesetId, n(n({}, e.options), {}, {
        useRulesetId: !0
    })) : new Wr(e.settingsId, n({}, e.options));
    return {
        initialUIValues: await t.init(),
        usercentrics: t
    }
}

function Lu() {
    let e = document.getElementById(oe);
    var t;
    e && (null === (t = e.parentNode) || void 0 === t || t.removeChild(e));
    e = document.createElement("div"), e.style.display = "none", e.id = oe, e.setAttribute("data-created-at", Date.now().toString());
    const n = document.createElement("div");
    if (n.setAttribute("data-nosnippet", "1"), n.setAttribute("data-testid", "uc-app-container"), "function" == typeof e.attachShadow || document.head.attachShadow || HTMLElement.prototype.attachShadow) {
        e.attachShadow({
            mode: "open"
        }).appendChild(n)
    } else e.appendChild(n);
    return document.body.appendChild(e), Eu = !0, {
        appContainer: n,
        rootContainer: e
    }
}
async function wu() {
    return new Promise((e => {
        "loading" !== document.readyState ? e(Lu()) : document.addEventListener("readystatechange", (() => {
            Eu || e(Lu())
        }))
    }))
}
const Ou = ({
    initialUIValues: e,
    restartCMP: t,
    target: n,
    usercentrics: r
}) => {
    const i = r.getSettingsCore(),
        o = r.getSettingsUI(),
        [s, a] = es(o && i ? ao(o, ie.includes(i.language.selected), e.variant) : uo);
    return ns((() => {
        setTimeout((() => {
            const {
                rootContainer: e
            } = n;
            e && "none" === e.style.display && e.style.removeProperty("display")
        }), 200)
    }), [n]), Yc.displayName = "ThemeProvider", _(Tc, {
        target: n.appContainer
    }, _(Yc, {
        theme: s
    }, _(Tu, null, _(vu, {
        UC: r
    }, _(Cl, {
        UC: r
    }, _(rl, {
        UC: r
    }, _(Rl, null, _(Ul, {
        UC: r,
        initialUIValues: e
    }, _(Su, null, _(au, {
        onThemeChange: a,
        initialUIValues: e,
        restartCMP: t,
        UC: r
    }))))))))))
};
void 0 !== e && e.initialize({
    importFunctionName: "dynamicImportPolyfill",
    modulePath: "/dir"
}), async function e() {
    const t = (() => {
            const e = document.getElementById("usercentrics-cmp"),
                t = e && e.dataset,
                n = t ? se.AMP_ENABLED in e.dataset : window[se.AMP_ENABLED];
            let r = t ? e.dataset[se.SETTINGS_ID] : window[se.SETTINGS_ID];
            if (!window.__webpack_nonce__ && e && e.nonce && (window.__webpack_nonce__ = e.nonce), n) {
                const e = zr();
                r = (null == e ? void 0 : e.id) || r
            }
            return {
                options: {
                    ampEnabled: n,
                    blockDataLayerPush: t && se.BLOCK_DATA_LAYER_PUSH in e.dataset,
                    controllerId: t && e.dataset[se.CONTROLLER_ID],
                    createTcfApiStub: t ? se.TCF_ENABLED in e.dataset : window[se.TCF_ENABLED],
                    disableServerConsents: t && se.DISABLE_SERVER_CONSENTS in e.dataset,
                    disableTracking: t && se.DISABLE_TRACKING in e.dataset,
                    euMode: t && se.EU_MODE in e.dataset,
                    language: t ? e.dataset[se.LANGUAGE] : window[se.LANGUAGE],
                    prefetchServices: !t || !(se.AVOID_PREFETCH_SERVICES in e.dataset),
                    rulesetId: t && e.dataset[se.RULESET_ID],
                    sandboxEnv: t && se.SANDBOX_ENV in e.dataset,
                    settingsCache: t && e.dataset[se.SETTINGS_CACHE],
                    suppressCmpDisplay: t && se.SUPPRESS_CMP_DISPLAY in e.dataset || !0 === window.UC_UI_SUPPRESS_CMP_DISPLAY,
                    userCountryData: window.UC_UI_USER_COUNTRY_DATA || null,
                    userSessionData: window.UC_UI_USER_SESSION_DATA || null,
                    useRulesetId: t && se.RULESET_ID in e.dataset,
                    version: t && e.dataset[se.VERSION]
                },
                settingsId: r
            }
        })(),
        [n, r] = await Promise.all([Au(t), wu()]);
    n.initialUIValues.ampEnabled && await n.usercentrics.uiReadyAmp().catch((e => console.warn(`AMP is not initialized: ${e}`))), G(_(Ou, {
        initialUIValues: n.initialUIValues,
        restartCMP: async () => {
            delete window.UC_UI, await e()
        },
        target: r,
        usercentrics: n.usercentrics
    }), r.appContainer)
}();
export {
    Lt as $, Me as A, Xn as B, Et as C, At as D, ft as E, qe as F, en as G, nn as H, Nn as I, rn as J, cn as K, ir as L, Zt as M, Nt as N, Ye as O, Ke as P, fn as Q, Wn as R, Dt as S, Ut as T, zn as U, Kn as V, at as W, pt as X, ur as Y, mr as Z, Ne as _, lr as a, bt as a$, Rt as a0, wt as a1, Ot as a2, De as a3, Oe as a4, ut as a5, dt as a6, ys as a7, Ls as a8, es as a9, jl as aA, El as aB, Al as aC, Ll as aD, ti as aE, Kc as aF, _t as aG, ss as aH, os as aI, Xc as aJ, I as aK, is as aL, It as aM, bs as aN, Dl as aO, ns as aP, il as aQ, i as aR, S as aS, el as aT, tt as aU, ne as aV, ml as aW, bl as aX, ln as aY, ei as aZ, rr as a_, Tl as aa, Fl as ab, Qc as ac, Wl as ad, z as ae, Tt as af, _ as ag, Es as ah, sr as ai, re as aj, Qr as ak, W as al, n as am, ae as an, Jr as ao, qr as ap, vl as aq, yl as ar, _l as as, ol as at, gl as au, fl as av, ul as aw, pl as ax, hl as ay, dl as az, Sn as b, Ct as b0, eu as b1, rs as b2, Ki as b3, yu as b4, cu as b5, Xi as b6, no as b7, K as b8, mu as b9, zl as bA, Jl as bB, C as bC, ql as bD, o as bE, Kl as bF, Zl as bG, Ql as bH, Xl as bI, mt as bJ, St as bK, Kr as bL, Re as ba, Ae as bb, oi as bc, pe as bd, Ws as be, Iu as bf, ge as bg, he as bh, Uc as bi, qc as bj, nr as bk, R as bl, l as bm, $ as bn, fe as bo, le as bp, de as bq, ue as br, oe as bs, X as bt, ii as bu, ri as bv, j as bw, as as bx, ce as by, r as bz, Pe as c, Ue as d, yn as e, mn as f, Zn as g, Jn as h, qn as i, on as j, Qn as k, ke as l, sn as m, me as n, je as o, wn as p, He as q, vr as r, Mn as s, ve as t, Fe as u, Be as v, xe as w, tn as x, Pn as y, ct as z
};