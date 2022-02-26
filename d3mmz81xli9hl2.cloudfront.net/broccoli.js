/*!
 * Web analytics for Snowplow v3.1.6 (http://bit.ly/sp-js)
 * Copyright 2021 Snowplow Analytics Ltd, 2010 Anthon Pang
 * Licensed under BSD-3-Clause
 */

"use strict";
! function() {
    function e(e, n) {
        var t, o = {};
        for (t in e) Object.prototype.hasOwnProperty.call(e, t) && 0 > n.indexOf(t) && (o[t] = e[t]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (t = Object.getOwnPropertySymbols(e); r < t.length; r++) 0 > n.indexOf(t[r]) && Object.prototype.propertyIsEnumerable.call(e, t[r]) && (o[t[r]] = e[t[r]])
        }
        return o
    }

    function n(e, n, t) {
        if (t || 2 === arguments.length)
            for (var o, r = 0, a = n.length; r < a; r++) !o && r in n || (o || (o = Array.prototype.slice.call(n, 0, r)), o[r] = n[r]);
        return e.concat(o || n)
    }

    function t(e) {
        var n = {
            exports: {}
        };
        return e(n, n.exports), n.exports
    }

    function o() {
        var e, n = {},
            t = [],
            o = [],
            a = function(e, t) {
                null != t && "" !== t && (n[e] = t)
            };
        return {
            add: a,
            addDict: function(e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && a(n, e[n])
            },
            addJson: function(e, n, a) {
                a && r(a) && (e = {
                    keyIfEncoded: e,
                    keyIfNotEncoded: n,
                    json: a
                }, o.push(e), t.push(e))
            },
            getPayload: function() {
                return n
            },
            getJson: function() {
                return t
            },
            withJsonProcessor: function(n) {
                e = n
            },
            build: function() {
                return null == e || e(this, o), n
            }
        }
    }

    function r(e) {
        if (!a(e)) return !1;
        for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n)) return !0;
        return !1
    }

    function a(e) {
        return null != e && (e.constructor === {}.constructor || e.constructor === [].constructor)
    }

    function i() {
        var e = [],
            n = [];
        return {
            getGlobalPrimitives: function() {
                return e
            },
            getConditionalProviders: function() {
                return n
            },
            addGlobalContexts: function(t) {
                for (var o = [], r = [], a = 0; a < t.length; a++) {
                    var i = t[a];
                    y(i) ? o.push(i) : g(i) && r.push(i)
                }
                e = e.concat(r), n = n.concat(o)
            },
            clearGlobalContexts: function() {
                n = [], e = []
            },
            removeGlobalContexts: function(t) {
                for (var o = function(t) {
                        y(t) ? n = n.filter((function(e) {
                            return JSON.stringify(e) !== JSON.stringify(t)
                        })) : g(t) && (e = e.filter((function(e) {
                            return JSON.stringify(e) !== JSON.stringify(t)
                        })))
                    }, r = 0; r < t.length; r++) o(t[r])
            },
            getApplicableContexts: function(t) {
                e: {
                    for (var o = 0, r = t.getJson(); o < r.length; o++) {
                        var a = r[o];
                        if ("ue_px" === a.keyIfEncoded && "object" == typeof a.json.data && "string" == typeof(a = a.json.data.schema)) {
                            o = a;
                            break e
                        }
                    }
                    o = ""
                }
                a = "string" == typeof(r = t.getPayload().e) ? r : "",
                r = [];
                var i = A(e, t, a, o);
                return r.push.apply(r, i),
                t = function(e, n, t, o) {
                    var r;
                    return e = b(e).map((function(e) {
                        e: {
                            if (v(e)) {
                                var r = e[0],
                                    a = !1;
                                try {
                                    a = r({
                                        event: n.getPayload(),
                                        eventType: t,
                                        eventSchema: o
                                    })
                                } catch (e) {
                                    a = !1
                                }
                                if (!0 === a) {
                                    e = A(e[1], n, t, o);
                                    break e
                                }
                            } else if (h(e) && function(e, n) {
                                    var t = 0,
                                        o = 0,
                                        r = e.accept;
                                    return Array.isArray(r) ? e.accept.some((function(e) {
                                        return w(e, n)
                                    })) && o++ : "string" == typeof r && w(r, n) && o++, r = e.reject, Array.isArray(r) ? e.reject.some((function(e) {
                                        return w(e, n)
                                    })) && t++ : "string" == typeof r && w(r, n) && t++, 0 < o && 0 === t
                                }(e[0], o)) {
                                e = A(e[1], n, t, o);
                                break e
                            }
                            e = []
                        }
                        if (e && 0 !== e.length) return e
                    })), (r = []).concat.apply(r, e.filter((function(e) {
                        return null != e && e.filter(Boolean)
                    })))
                }(n, t, a, o),
                r.push.apply(r, t),
                r
            }
        }
    }

    function c(e) {
        for (var n, t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
        return null !== (n = null == e ? void 0 : e.map((function(e) {
            if ("function" != typeof e) return e;
            try {
                return e.apply(void 0, t)
            } catch (e) {}
        })).filter(Boolean)) && void 0 !== n ? n : []
    }

    function s(e) {
        return !!((e = e.split(".")) && 1 < e.length) && function(e) {
            if ("*" === e[0] || "*" === e[1]) return !1;
            if (0 < e.slice(2).length) {
                var n = !1,
                    t = 0;
                for (e = e.slice(2); t < e.length; t++)
                    if ("*" === e[t]) n = !0;
                    else if (n) return !1;
                return !0
            }
            return 2 == e.length
        }(e)
    }

    function u(e) {
        if (null !== (e = /^iglu:((?:(?:[a-zA-Z0-9-_]+|\*).)+(?:[a-zA-Z0-9-_]+|\*))\/([a-zA-Z0-9-_.]+|\*)\/jsonschema\/([1-9][0-9]*|\*)-(0|[1-9][0-9]*|\*)-(0|[1-9][0-9]*|\*)$/.exec(e)) && s(e[1])) return e.slice(1, 6)
    }

    function l(e) {
        if (e = u(e)) {
            var n = e[0];
            return 5 === e.length && s(n)
        }
        return !1
    }

    function f(e) {
        return Array.isArray(e) && e.every((function(e) {
            return "string" == typeof e
        }))
    }

    function d(e) {
        return f(e) ? e.every((function(e) {
            return l(e)
        })) : "string" == typeof e && l(e)
    }

    function m(e) {
        return !!(r(e) && "schema" in e && "data" in e) && ("string" == typeof e.schema && "object" == typeof e.data)
    }

    function p(e) {
        return "function" == typeof e && 1 >= e.length
    }

    function g(e) {
        return p(e) || m(e)
    }

    function v(e) {
        return !(!Array.isArray(e) || 2 !== e.length) && (Array.isArray(e[1]) ? p(e[0]) && e[1].every(g) : p(e[0]) && g(e[1]))
    }

    function h(e) {
        return !(!Array.isArray(e) || 2 !== e.length) && (!! function(e) {
            var n = 0;
            if (null != e && "object" == typeof e && !Array.isArray(e)) {
                if (Object.prototype.hasOwnProperty.call(e, "accept")) {
                    if (!d(e.accept)) return !1;
                    n += 1
                }
                if (Object.prototype.hasOwnProperty.call(e, "reject")) {
                    if (!d(e.reject)) return !1;
                    n += 1
                }
                return 0 < n && 2 >= n
            }
            return !1
        }(e[0]) && (Array.isArray(e[1]) ? e[1].every(g) : g(e[1])))
    }

    function y(e) {
        return v(e) || h(e)
    }

    function w(e, n) {
        if (!l(e)) return !1;
        if (e = u(e), n = null !== (n = /^iglu:([a-zA-Z0-9-_.]+)\/([a-zA-Z0-9-_]+)\/jsonschema\/([1-9][0-9]*)-(0|[1-9][0-9]*)-(0|[1-9][0-9]*)$/.exec(n)) ? n.slice(1, 6) : void 0, e && n) {
            if (! function(e, n) {
                    if (n = n.split("."), e = e.split("."), n && e) {
                        if (n.length !== e.length) return !1;
                        for (var t = 0; t < e.length; t++)
                            if (!k(n[t], e[t])) return !1;
                        return !0
                    }
                    return !1
                }(e[0], n[0])) return !1;
            for (var t = 1; 5 > t; t++)
                if (!k(e[t], n[t])) return !1;
            return !0
        }
        return !1
    }

    function k(e, n) {
        return e && n && "*" === e || e === n
    }

    function b(e) {
        return Array.isArray(e) ? e : [e]
    }

    function A(e, n, t, o) {
        var r;
        return e = b(e).map((function(e) {
            e: if (m(e)) e = [e];
                else {
                    if (p(e)) {
                        n: {
                            var r = void 0;
                            try {
                                if (r = e({
                                        event: n.getPayload(),
                                        eventType: t,
                                        eventSchema: o
                                    }), Array.isArray(r) && r.every(m) || m(r)) {
                                    var a = r;
                                    break n
                                }
                                a = void 0;
                                break n
                            } catch (e) {}
                            a = void 0
                        }
                        if (m(a)) {
                            e = [a];
                            break e
                        }
                        if (Array.isArray(a)) {
                            e = a;
                            break e
                        }
                    }
                    e = void 0
                }if (e && 0 !== e.length) return e
        })), (r = []).concat.apply(r, e.filter((function(e) {
            return null != e && e.filter(Boolean)
        })))
    }

    function P(e) {
        void 0 === e && (e = {});
        var n, t, o, r, c, s, u, l = e.base64,
            f = e.corePlugins,
            d = null != f ? f : [];
        n = null == l || l, t = d, o = e.callback, r = function(e) {
            return {
                addPluginContexts: function(n) {
                    var t = null != n ? n : [];
                    return e.forEach((function(e) {
                        try {
                            e.contexts && t.push.apply(t, e.contexts())
                        } catch (e) {
                            Ue.error("Error adding plugin contexts", e)
                        }
                    })), t
                }
            }
        }(t), c = i(), s = n, u = {};
        var m = Pe(Pe({}, e = {
            track: function(e, n, a) {
                e.withJsonProcessor(function(e) {
                    return function(n, t) {
                        for (var o = 0; o < t.length; o++) {
                            var r = t[o],
                                a = JSON.stringify(r.json);
                            if (e) {
                                var i = n,
                                    c = i.add;
                                if (r = r.keyIfEncoded, a) {
                                    var s = 0,
                                        u = 0,
                                        l = [];
                                    if (a) {
                                        a = unescape(encodeURIComponent(a));
                                        do {
                                            var f = a.charCodeAt(s++),
                                                d = a.charCodeAt(s++),
                                                m = a.charCodeAt(s++),
                                                p = f << 16 | d << 8 | m;
                                            f = p >> 18 & 63, d = p >> 12 & 63, m = p >> 6 & 63, p &= 63, l[u++] = Be.charAt(f) + Be.charAt(d) + Be.charAt(m) + Be.charAt(p)
                                        } while (s < a.length);
                                        s = l.join(""), a = ((a = a.length % 3) ? s.slice(0, a - 3) : s) + "===".slice(a || 3)
                                    }
                                    a = a.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
                                }
                                c.call(i, r, a)
                            } else n.add(r.keyIfNotEncoded, a)
                        }
                        t.length = 0
                    }
                }(s)), e.add("eid", Le.v4()), e.addDict(u), a = function(e) {
                    return null == e ? {
                        type: "dtm",
                        value: (new Date).getTime()
                    } : "number" == typeof e ? {
                        type: "dtm",
                        value: e
                    } : "ttm" === e.type ? {
                        type: "ttm",
                        value: e.value
                    } : {
                        type: "dtm",
                        value: e.value || (new Date).getTime()
                    }
                }(a), e.add(a.type, a.value.toString()), void 0 !== (n = (n = function(e, n) {
                    e = c.getApplicableContexts(e);
                    var t = [];
                    return n && n.length && t.push.apply(t, n), e && e.length && t.push.apply(t, e), t
                }(e, r.addPluginContexts(n))) && n.length ? {
                    schema: "iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0",
                    data: n
                } : void 0) && e.addJson("cx", "co", n), t.forEach((function(n) {
                    try {
                        n.beforeTrack && n.beforeTrack(e)
                    } catch (e) {
                        Ue.error("Plugin beforeTrack", e)
                    }
                })), "function" == typeof o && o(e);
                var i = e.build();
                return t.forEach((function(e) {
                    try {
                        e.afterTrack && e.afterTrack(i)
                    } catch (e) {
                        Ue.error("Plugin afterTrack", e)
                    }
                })), i
            },
            addPayloadPair: function(e, n) {
                u[e] = n
            },
            getBase64Encoding: function() {
                return s
            },
            setBase64Encoding: function(e) {
                s = e
            },
            addPayloadDict: function(e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (u[n] = e[n])
            },
            resetPayloadPairs: function(e) {
                u = a(e) ? e : {}
            },
            setTrackerVersion: function(e) {
                u.tv = e
            },
            setTrackerNamespace: function(e) {
                u.tna = e
            },
            setAppId: function(e) {
                u.aid = e
            },
            setPlatform: function(e) {
                u.p = e
            },
            setUserId: function(e) {
                u.uid = e
            },
            setScreenResolution: function(e, n) {
                u.res = e + "x" + n
            },
            setViewport: function(e, n) {
                u.vp = e + "x" + n
            },
            setColorDepth: function(e) {
                u.cd = e
            },
            setTimezone: function(e) {
                u.tz = e
            },
            setLang: function(e) {
                u.lang = e
            },
            setIpAddress: function(e) {
                u.ip = e
            },
            setUseragent: function(e) {
                u.ua = e
            },
            addGlobalContexts: function(e) {
                c.addGlobalContexts(e)
            },
            clearGlobalContexts: function() {
                c.clearGlobalContexts()
            },
            removeGlobalContexts: function(e) {
                c.removeGlobalContexts(e)
            }
        }), {
            addPlugin: function(e) {
                var n, t;
                e = e.plugin, d.push(e), null === (n = e.logger) || void 0 === n || n.call(e, Ue), null === (t = e.activateCorePlugin) || void 0 === t || t.call(e, m)
            }
        });
        return null == d || d.forEach((function(e) {
            var n, t;
            null === (n = e.logger) || void 0 === n || n.call(e, Ue), null === (t = e.activateCorePlugin) || void 0 === t || t.call(e, m)
        })), m
    }

    function T(e) {
        var n = e.event;
        return e = {
            schema: "iglu:com.snowplowanalytics.snowplow/unstruct_event/jsonschema/1-0-0",
            data: {
                schema: e = n.schema,
                data: n.data
            }
        }, (n = o()).add("e", "ue"), n.addJson("ue_px", "ue_pr", e), n
    }

    function _(e) {
        return T({
            event: e = {
                schema: "iglu:com.snowplowanalytics.snowplow/link_click/jsonschema/1-0-1",
                data: S({
                    targetUrl: e.targetUrl,
                    elementId: e.elementId,
                    elementClasses: e.elementClasses,
                    elementTarget: e.elementTarget,
                    elementContent: e.elementContent
                })
            }
        })
    }

    function S(e, n) {
        void 0 === n && (n = {});
        var t, o = {};
        for (t in e)(n[t] || null !== e[t] && void 0 !== e[t]) && (o[t] = e[t]);
        return o
    }

    function C(e) {
        return Number.isInteger && Number.isInteger(e) || "number" == typeof e && isFinite(e) && Math.floor(e) === e
    }

    function O(e) {
        return !(!e || "function" != typeof e)
    }

    function x(e) {
        if (!e || "string" != typeof e.valueOf()) {
            e = e.text || "";
            var n = document.getElementsByTagName("title");
            n && null != n[0] && (e = n[0].text)
        }
        return e
    }

    function E(e) {
        var n = /^(?:(?:https?|ftp):)\/*(?:[^@]+@)?([^:/#]+)/.exec(e);
        return n ? n[1] : e
    }

    function I(e) {
        var n = e.length;
        return "." === e.charAt(--n) && (e = e.slice(0, n)), "*." === e.slice(0, 2) && (e = e.slice(1)), e
    }

    function j(e) {
        var n = window,
            t = "",
            o = N("referrer", n.location.href) || N("referer", n.location.href);
        if (o) return o;
        if (e) return e;
        try {
            t = n.top.document.referrer
        } catch (e) {
            if (n.parent) try {
                t = n.parent.document.referrer
            } catch (e) {
                t = ""
            }
        }
        return "" === t && (t = document.referrer), t
    }

    function D(e, n, t, o) {
        return e.addEventListener ? (e.addEventListener(n, t, o), !0) : e.attachEvent ? e.attachEvent("on" + n, t) : void(e["on" + n] = t)
    }

    function N(e, n) {
        return (e = new RegExp("^[^#]*[?&]" + e + "=([^&#]*)").exec(n)) ? decodeURIComponent(e[1].replace(/\+/g, " ")) : null
    }

    function L(e, n, t) {
        void 0 === t && (t = 63072e3);
        try {
            var o = window.localStorage,
                r = Date.now() + 1e3 * t;
            return o.setItem(e + ".expires", r.toString()), o.setItem(e, n), !0
        } catch (e) {
            return !1
        }
    }

    function B(e) {
        try {
            var n = window.localStorage;
            return n.removeItem(e), n.removeItem(e + ".expires"), !0
        } catch (e) {
            return !1
        }
    }

    function z(e, n, t, o, r, a, i) {
        return 1 < arguments.length ? document.cookie = e + "=" + encodeURIComponent(null != n ? n : "") + (t ? "; Expires=" + new Date(+new Date + 1e3 * t).toUTCString() : "") + (o ? "; Path=" + o : "") + (r ? "; Domain=" + r : "") + (a ? "; SameSite=" + a : "") + (i ? "; Secure" : "") : decodeURIComponent((("; " + document.cookie).split("; " + e + "=")[1] || "").split(";")[0])
    }

    function M(e) {
        return e = parseInt(e), isNaN(e) ? void 0 : e
    }

    function U(e) {
        return e = parseFloat(e), isNaN(e) ? void 0 : e
    }

    function F(e) {
        if (null == e || "object" != typeof e || Array.isArray(e)) return function() {
            return !0
        };
        var n = Object.prototype.hasOwnProperty.call(e, "allowlist"),
            t = G(e);
        return R(e, (function(e) {
            e: {
                var o = 0;
                for (e = H(e); o < e.length; o++)
                    if (t[e[o]]) {
                        o = !0;
                        break e
                    }
                o = !1
            }
            return o === n
        }))
    }

    function V(e) {
        if (null == e || "object" != typeof e || Array.isArray(e)) return function() {
            return !0
        };
        var n = e.hasOwnProperty("allowlist"),
            t = G(e);
        return R(e, (function(e) {
            return e.name in t === n
        }))
    }

    function H(e) {
        return e.className.match(/\S+/g) || []
    }

    function R(e, n) {
        return e.hasOwnProperty("filter") && e.filter ? e.filter : n
    }

    function G(e) {
        var n = {};
        if (e = e.allowlist || e.denylist) {
            Array.isArray(e) || (e = [e]);
            for (var t = 0; t < e.length; t++) n[e[t]] = !0
        }
        return n
    }

    function q(e, n, t, o, r, a, i, c, s, u, l) {
        function f(e) {
            for (var n = 0, t = 0; t < e.length; t++) {
                var o = e.charCodeAt(t);
                127 >= o ? n += 1 : 2047 >= o ? n += 2 : 55296 <= o && 57343 >= o ? (n += 4, t++) : n = 65535 > o ? n + 3 : n + 4
            }
            return n
        }

        function d(e) {
            for (void 0 === e && (e = !1); A.length && "string" != typeof A[0] && "object" != typeof A[0];) A.shift();
            if (1 > A.length) b = !1;
            else {
                if (!h || "string" != typeof h.valueOf()) throw "No collector configured";
                if (b = !0, _) {
                    var n = function(e) {
                            for (var n = 0, t = 0; n < e.length && !((t += e[n].bytes) >= i);) n += 1;
                            return n
                        },
                        o = void 0;
                    if (E(A)) var r = m(o = h, !0, e),
                        a = n(A);
                    else o = v(A[0]), r = m(o, !1, e), a = 1;
                    var c = setTimeout((function() {
                            r.abort(), b = !1
                        }), u),
                        f = function(e) {
                            for (var n = 0; n < e; n++) A.shift();
                            t && L(O, JSON.stringify(A.slice(0, s))), d()
                        };
                    if (r.onreadystatechange = function() {
                            4 === r.readyState && 200 <= r.status && 400 > r.status ? (clearTimeout(c), f(a)) : 4 === r.readyState && 400 <= r.status && (clearTimeout(c), b = !1)
                        }, E(A)) {
                        if (0 < (n = A.slice(0, a)).length) {
                            if (e = !1, n = n.map((function(e) {
                                    return e.evt
                                })), T) {
                                var y = new Blob([p(g(n))], {
                                    type: "application/json"
                                });
                                try {
                                    e = navigator.sendBeacon(o, y)
                                } catch (n) {
                                    e = !1
                                }
                            }!0 === e ? f(a) : r.send(p(g(n)))
                        }
                    } else r.send()
                } else if (l || E(A)) b = !1;
                else {
                    o = new Image(1, 1);
                    var w = !0;
                    o.onload = function() {
                        w && (w = !1, A.shift(), t && L(O, JSON.stringify(A.slice(0, s))), d())
                    }, o.onerror = function() {
                        w && (b = w = !1)
                    }, o.src = v(A[0]), setTimeout((function() {
                        w && b && (w = !1, d())
                    }), u)
                }
            }
        }

        function m(e, n, t) {
            var o = new XMLHttpRequest;
            return n ? (o.open("POST", e, !t), o.setRequestHeader("Content-Type", "application/json; charset=UTF-8")) : o.open("GET", e, !t), o.withCredentials = !0, l && o.setRequestHeader("SP-Anonymous", "*"), o
        }

        function p(e) {
            return JSON.stringify({
                schema: "iglu:com.snowplowanalytics.snowplow/payload_data/jsonschema/1-0-4",
                data: e
            })
        }

        function g(e) {
            for (var n = (new Date).getTime().toString(), t = 0; t < e.length; t++) e[t].stm = n;
            return e
        }

        function v(e) {
            return c ? h + e.replace("?", "?stm=" + (new Date).getTime() + "&") : h + e
        }
        var h, y, w, k, b = !1,
            A = [],
            P = null === (o = "string" == typeof o ? o.toLowerCase() : o) || !0 === o || "beacon" === o || "true" === o,
            T = !(!(P && window.navigator && window.navigator.sendBeacon) || (y = window.navigator.userAgent, (k = (k = y).match("(iP.+; CPU .*OS (d+)[_d]*.*) AppleWebKit/")) && k.length && parseInt(k[0]) <= 13 || function(e, n, t) {
                return !(!(t = t.match("(Macintosh;.*Mac OS X (d+)_(d+)[_d]*.*) AppleWebKit/")) || !t.length) && (parseInt(t[0]) <= e || parseInt(t[0]) === e && parseInt(t[1]) <= n)
            }(10, 15, y) && (w = y).match("Version/.* Safari/") && !w.match("Chrom(e|ium)"))) && P,
            _ = !(!window.XMLHttpRequest || !("withCredentials" in new XMLHttpRequest)),
            S = "get" !== o && _ && ("post" === o || P),
            C = S ? r : "/i",
            O = "snowplowOutQueue_" + e + "_" + (S ? "post2" : "get");
        if (a = t && function() {
                try {
                    var e = !!window.localStorage
                } catch (n) {
                    e = !0
                }
                if (!e) return !1;
                try {
                    var n = window.localStorage;
                    return n.setItem("modernizr", "modernizr"), n.removeItem("modernizr"), !0
                } catch (e) {
                    return !1
                }
            }() && S && a || 1, t) try {
            var x = window.localStorage.getItem(O);
            A = x ? JSON.parse(x) : []
        } catch (y) {}
        Array.isArray(A) || (A = []), n.outQueues.push(A), _ && 1 < a && n.bufferFlushers.push((function(e) {
            b || d(e)
        }));
        var E = function(e) {
            return "object" == typeof e[0]
        };
        return {
            enqueueRequest: function(e, n) {
                if (h = n + C, S) {
                    if ((e = function(e) {
                            var n = Object.keys(e).map((function(n) {
                                return [n, e[n]]
                            })).reduce((function(e, n) {
                                return e[n[0]] = n[1].toString(), e
                            }), {});
                            return {
                                evt: n,
                                bytes: f(JSON.stringify(n))
                            }
                        }(e)).bytes >= i) return Ue.warn("Event (" + e.bytes + "B) too big, max is " + i), void m(h, !0, !1).send(p(g([e.evt])));
                    A.push(e)
                } else {
                    var o, r = (n = A).push,
                        c = "?",
                        u = {
                            co: !0,
                            cx: !0
                        },
                        l = !0;
                    for (o in e) e.hasOwnProperty(o) && !u.hasOwnProperty(o) && (l ? l = !1 : c += "&", c += encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
                    for (var v in u) e.hasOwnProperty(v) && u.hasOwnProperty(v) && (c += "&" + v + "=" + encodeURIComponent(e[v]));
                    r.call(n, c)
                }
                e = !1, t && (e = L(O, JSON.stringify(A.slice(0, s)))), b || e && !(A.length >= a) || d()
            },
            executeQueue: function() {
                b || d()
            },
            setUseLocalStorage: function(e) {
                t = e
            },
            setAnonymousTracking: function(e) {
                l = e
            },
            setCollectorUrl: function(e) {
                h = e + C
            },
            setBufferSize: function(e) {
                a = e
            }
        }
    }

    function J(e, n, t) {
        return "translate.googleusercontent.com" === e ? ("" === t && (t = n), e = E(n = null != (e = (e = /^(?:https?|ftp)(?::\/*(?:[^?]+))([?][^#]+)/.exec(n)) && 1 < (null == e ? void 0 : e.length) ? N("u", e[1]) : null) ? e : "")) : "cc.bingj.com" !== e && "webcache.googleusercontent.com" !== e || (e = E(n = document.links[0].href)), [e, n, t]
    }

    function Y(e, n, t, r, a, i) {
        var c;
        void 0 === i && (i = {}), e = function(e, n, t, r, a, i) {
            function c() {
                (je = J(window.location.hostname, window.location.href, j()))[1] !== Ne && (Be = j(Ne)), De = I(je[0]), Ne = je[1]
            }

            function s(e) {
                var n = (new Date).getTime();
                if (null != (e = e.currentTarget) && e.href) {
                    n = "_sp=" + Se + "." + n;
                    var t = e.href.split("#"),
                        o = t[0].split("?"),
                        r = o.shift();
                    if (o = o.join("?")) {
                        for (var a = !0, i = o.split("&"), c = 0; c < i.length; c++)
                            if ("_sp=" === i[c].substr(0, 4)) {
                                a = !1, i[c] = n, o = i.join("&");
                                break
                            }
                        a && (o = n + "&" + o)
                    } else o = n;
                    t[0] = r + "?" + o, n = t.join("#"), e.href = n
                }
            }

            function u(e) {
                for (var n = 0; n < document.links.length; n++) {
                    var t = document.links[n];
                    !t.spDecorationEnabled && e(t) && (D(t, "click", s, !0), D(t, "mousedown", s, !0), t.spDecorationEnabled = !0)
                }
            }

            function l(e) {
                if (ve) {
                    var n = /#.*/;
                    e = e.replace(n, "")
                }
                return he && (n = /[{}]/g, e = e.replace(n, "")), e
            }

            function f(e) {
                return (e = /^([a-z]+):/.exec(e)) ? e[1] : null
            }

            function d(e) {
                if (e = qe + e + "." + _e, "localStorage" == on) {
                    try {
                        var n = window.localStorage,
                            t = n.getItem(e + ".expires");
                        if (null === t || +t > Date.now()) var o = n.getItem(e);
                        else n.removeItem(e), n.removeItem(e + ".expires"), o = void 0
                    } catch (e) {
                        o = void 0
                    }
                    return o
                }
                if ("cookie" == on || "cookieAndLocalStorage" == on) return z(e)
            }

            function m() {
                c(), _e = Re((Je || De) + (Ye || "/")).slice(0, 4)
            }

            function p() {
                we = (new Date).getTime()
            }

            function g() {
                var e = v(),
                    n = e[0];
                n < ke ? ke = n : n > be && (be = n), (e = e[1]) < Ae ? Ae = e : e > Te && (Te = e), p()
            }

            function v() {
                var e = document.documentElement;
                return e ? [e.scrollLeft || window.pageXOffset, e.scrollTop || window.pageYOffset] : [0, 0]
            }

            function h() {
                var e = v(),
                    n = e[0];
                be = ke = n, Te = Ae = e = e[1]
            }

            function y() {
                k(qe + "ses." + _e, "*", $e)
            }

            function w(e, n, t, o, r, a) {
                k(qe + "id." + _e, e + "." + n + "." + t + "." + o + "." + r + "." + a, Ze)
            }

            function k(e, n, t) {
                tn && !en || ("localStorage" == on ? L(e, n, t) : ("cookie" == on || "cookieAndLocalStorage" == on) && z(e, n, t, Ye, Je, Ke, We))
            }

            function b(e) {
                var n = qe + "id." + _e,
                    t = qe + "ses." + _e;
                B(n), B(t), z(n, "", -1, "/", Je, Ke, We), z(t, "", -1, "/", Je, Ke, We), null != e && e.preserveSession || (Ce = Le.v4(), an = 0), null != e && e.preserveUser || (Se = Le.v4(), Oe = null)
            }

            function A(e) {
                e && e.stateStorageStrategy && (i.stateStorageStrategy = e.stateStorageStrategy, on = le(i)), tn = !!i.anonymousTracking, en = fe(i), nn = de(i), cn.setUseLocalStorage("localStorage" == on || "cookieAndLocalStorage" == on), cn.setAnonymousTracking(nn)
            }

            function T() {
                if (!tn || en) {
                    var e = "none" != on && !!d("ses"),
                        n = _();
                    n[1] ? Se = n[1] : (Se = tn ? "" : Le.v4(), n[1] = Se), Ce = n[6], e || (n[3]++, Ce = Le.v4(), n[6] = Ce, n[5] = n[4]), "none" != on && (y(), n[4] = Math.round((new Date).getTime() / 1e3), n.shift(), w.apply(null, n))
                }
            }

            function _() {
                if ("none" == on) return [];
                var e = Math.round((new Date).getTime() / 1e3),
                    n = d("id");
                return n ? (e = n.split(".")).unshift("0") : e = ["1", Se, e, 0, e, ""], e[6] && "undefined" !== e[6] || (e[6] = Le.v4()), e
            }

            function S(e) {
                return 0 === e.indexOf("http") ? e : ("https:" === document.location.protocol ? "https" : "http") + "://" + e
            }

            function O() {
                sn && null != a.pageViewId || (a.pageViewId = Le.v4())
            }

            function M() {
                return null == a.pageViewId && (a.pageViewId = Le.v4()), a.pageViewId
            }

            function U(e) {
                var n = e.title,
                    t = e.context,
                    r = e.timestamp;
                if (e = e.contextCallback, c(), un && O(), un = !0, He = document.title, n = x((ge = n) || He), xe.track(function(e) {
                        var n = e.pageUrl,
                            t = e.pageTitle;
                        e = e.referrer;
                        var r = o();
                        return r.add("e", "pv"), r.add("url", n), r.add("page", t), r.add("refr", e), r
                    }({
                        pageUrl: l(pe || Ne),
                        pageTitle: n,
                        referrer: l(me || Be)
                    }), (t || []).concat(e ? e() : []), r), r = new Date, n = !1, ln.enabled && !ln.installed) {
                    n = ln.installed = !0;
                    var a = {
                        update: function() {
                            if ("undefined" != typeof window && "function" == typeof window.addEventListener) {
                                var e = !1,
                                    n = Object.defineProperty({}, "passive", {
                                        get: function() {
                                            e = !0
                                        },
                                        set: function() {}
                                    }),
                                    t = function() {};
                                window.addEventListener("testPassiveEventSupport", t, n), window.removeEventListener("testPassiveEventSupport", t, n), a.hasSupport = e
                            }
                        }
                    };
                    a.update();
                    var i = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                    Object.prototype.hasOwnProperty.call(a, "hasSupport") ? D(document, i, p, {
                        passive: !0
                    }) : D(document, i, p), h(), i = function(e, n) {
                        return void 0 === n && (n = p),
                            function(e) {
                                return D(document, e, n)
                            }
                    }, "click mouseup mousedown mousemove keypress keydown keyup".split(" ").forEach(i(document)), ["resize", "focus", "blur"].forEach(i(window)), i(window, g)("scroll")
                }
                if (ln.enabled && (Ge || n))
                    for (r in we = r.getTime(), r = void 0, ln.configurations)(n = ln.configurations[r]) && (window.clearInterval(n.activityInterval), F(n, t, e))
            }

            function F(e, n, t) {
                var o = function(e, n) {
                        c(), e({
                            context: n,
                            pageViewId: M(),
                            minXOffset: ke,
                            minYOffset: Ae,
                            maxXOffset: be,
                            maxYOffset: Te
                        }), h()
                    },
                    r = function() {
                        we + e.configHeartBeatTimer > (new Date).getTime() && o(e.callback, (n || []).concat(t ? t() : []))
                    };
                e.activityInterval = 0 != e.configMinimumVisitLength ? window.setTimeout((function() {
                    we + e.configMinimumVisitLength > (new Date).getTime() && o(e.callback, (n || []).concat(t ? t() : [])), e.activityInterval = window.setInterval(r, e.configHeartBeatTimer)
                }), e.configMinimumVisitLength) : window.setInterval(r, e.configHeartBeatTimer)
            }

            function V(e) {
                var n = e.minimumVisitLength,
                    t = e.heartbeatDelay;
                if (e = e.callback, C(n) && C(t)) return {
                    configMinimumVisitLength: 1e3 * n,
                    configHeartBeatTimer: 1e3 * t,
                    callback: e
                };
                Ue.error("Activity tracking minimumVisitLength & heartbeatDelay must be integers")
            }

            function H(e) {
                var n = e.context,
                    t = e.minXOffset,
                    r = e.minYOffset,
                    a = e.maxXOffset,
                    i = e.maxYOffset;
                (e = document.title) !== He && (He = e, ge = void 0);
                var c = (e = xe).track,
                    s = l(pe || Ne),
                    u = x(ge || He),
                    f = l(me || Be);
                t = Math.round(t), a = Math.round(a), r = Math.round(r), i = Math.round(i);
                var d = o();
                d.add("e", "pp"), d.add("url", s), d.add("page", u), d.add("refr", f), t && !isNaN(Number(t)) && d.add("pp_mix", t.toString()), a && !isNaN(Number(a)) && d.add("pp_max", a.toString()), r && !isNaN(Number(r)) && d.add("pp_miy", r.toString()), i && !isNaN(Number(i)) && d.add("pp_may", i.toString()), c.call(e, d, n)
            }
            var R, G, Y, K, W, X, Q, Z, $, ee, ne, te, oe, re, ae, ie, ce, se, ue;
            i.eventMethod = null !== (R = i.eventMethod) && void 0 !== R ? R : "post";
            var le = function(e) {
                    var n;
                    return null !== (n = e.stateStorageStrategy) && void 0 !== n ? n : "cookieAndLocalStorage"
                },
                fe = function(e) {
                    var n, t;
                    return "boolean" != typeof e.anonymousTracking && (null !== (t = !0 === (null === (n = e.anonymousTracking) || void 0 === n ? void 0 : n.withSessionTracking)) && void 0 !== t && t)
                },
                de = function(e) {
                    var n, t;
                    return "boolean" != typeof e.anonymousTracking && (null !== (t = !0 === (null === (n = e.anonymousTracking) || void 0 === n ? void 0 : n.withServerAnonymisation)) && void 0 !== t && t)
                };
            i.plugins = null !== (G = i.plugins) && void 0 !== G ? G : [], (null === (K = null === (Y = null == i ? void 0 : i.contexts) || void 0 === Y ? void 0 : Y.webPage) || void 0 === K || K) && i.plugins.push({
                contexts: function() {
                    return [{
                        schema: "iglu:com.snowplowanalytics.snowplow/web_page/jsonschema/1-0-0",
                        data: {
                            id: M()
                        }
                    }]
                }
            });
            var me, pe, ge, ve, he, ye, we, ke, be, Ae, Te, _e, Se, Ce, Oe, xe = P({
                    base64: i.encodeBase64,
                    corePlugins: i.plugins,
                    callback: function(e) {
                        var n = Math.round((new Date).getTime() / 1e3),
                            t = d("ses"),
                            o = _(),
                            r = o[0],
                            a = o[1],
                            i = o[2],
                            s = o[3],
                            u = o[4],
                            f = o[5];
                        o = o[6];
                        var m = !!ye && !!z(ye);
                        Qe || m ? b() : ("0" === r ? (Ce = o, t || "none" == on || (s++, f = u, Ce = Le.v4()), an = s) : (new Date).getTime() - rn > 1e3 * $e && (Ce = Le.v4(), an++), t = e.add, "innerWidth" in window ? (r = window.innerWidth, s = window.innerHeight) : (r = (s = document.documentElement || document.body).clientWidth, s = s.clientHeight), t.call(e, "vp", 0 <= r && 0 <= s ? r + "x" + s : null), t = e.add, s = document.documentElement, u = document.body, r = Math.max(s.clientWidth, s.offsetWidth, s.scrollWidth), s = Math.max(s.clientHeight, s.offsetHeight, s.scrollHeight, u ? Math.max(u.offsetHeight, u.scrollHeight) : 0), r = isNaN(r) || isNaN(s) ? "" : r + "x" + s, t.call(e, "ds", r), e.add("vid", en ? an : tn ? null : an), e.add("sid", en ? Ce : tn ? null : Ce), e.add("duid", tn ? null : a), e.add("uid", tn ? null : Oe), c(), e.add("refr", l(me || Be)), e.add("url", l(pe || Ne)), "none" != on && (w(a, i, an, n, f, Ce), y()), rn = (new Date).getTime()), n = !!ye && !!z(ye), Qe || n || cn.enqueueRequest(e.build(), Me)
                    }
                }),
                Ee = navigator.userLanguage || navigator.language,
                Ie = document.characterSet || document.charset,
                je = J(window.location.hostname, window.location.href, j()),
                De = I(je[0]),
                Ne = je[1],
                Be = je[2],
                ze = null !== (W = i.platform) && void 0 !== W ? W : "web",
                Me = S(r),
                Fe = null !== (X = i.postPath) && void 0 !== X ? X : "/com.snowplowanalytics.snowplow/tp2",
                Ve = null !== (Q = i.appId) && void 0 !== Q ? Q : "",
                He = document.title,
                Ge = null === (Z = i.resetActivityTrackingOnPageView) || void 0 === Z || Z,
                qe = null !== ($ = i.cookieName) && void 0 !== $ ? $ : "_sp_",
                Je = null !== (ee = i.cookieDomain) && void 0 !== ee ? ee : void 0,
                Ye = "/",
                Ke = null !== (ne = i.cookieSameSite) && void 0 !== ne ? ne : "None",
                We = null === (te = i.cookieSecure) || void 0 === te || te,
                Xe = navigator.doNotTrack || navigator.msDoNotTrack || window.doNotTrack,
                Qe = void 0 !== i.respectDoNotTrack && (i.respectDoNotTrack && ("yes" === Xe || "1" === Xe)),
                Ze = null !== (oe = i.cookieLifetime) && void 0 !== oe ? oe : 63072e3,
                $e = null !== (re = i.sessionCookieTimeout) && void 0 !== re ? re : 1800,
                en = fe(i),
                nn = de(i),
                tn = !!i.anonymousTracking,
                on = le(i),
                rn = (new Date).getTime(),
                an = 1,
                cn = q(e, a, "localStorage" == on || "cookieAndLocalStorage" == on, i.eventMethod, Fe, null !== (ae = i.bufferSize) && void 0 !== ae ? ae : 1, null !== (ie = i.maxPostBytes) && void 0 !== ie ? ie : 4e4, null === (ce = i.useStm) || void 0 === ce || ce, null !== (se = i.maxLocalStorageQueueSize) && void 0 !== se ? se : 1e3, null !== (ue = i.connectionTimeout) && void 0 !== ue ? ue : 5e3, nn),
                sn = !1,
                un = !1,
                ln = {
                    enabled: !1,
                    installed: !1,
                    configurations: {}
                };
            return i.hasOwnProperty("discoverRootDomain") && i.discoverRootDomain && (Je = function(e, n) {
                for (var t = window.location.hostname, o = "_sp_root_domain_test_" + (new Date).getTime(), r = "_test_value_" + (new Date).getTime(), a = t.split("."), i = a.length - 1; 0 <= i;) {
                    var c = a.slice(i, a.length).join(".");
                    if (z(o, r, 0, "/", c, e, n), z(o) === r) {
                        for (z(o, "", -1, "/", c, e, n), t = document.cookie.split("; "), o = [], r = 0; r < t.length; r++) "_sp_root_domain_test_" === t[r].substring(0, 21) && o.push(t[r]);
                        for (t = o, o = 0; o < t.length; o++) z(t[o], "", -1, "/", c, e, n);
                        return c
                    }--i
                }
                return t
            }(Ke, We)), xe.setTrackerVersion(t), xe.setTrackerNamespace(n), xe.setAppId(Ve), xe.setPlatform(ze), xe.addPayloadPair("cookie", navigator.cookieEnabled ? "1" : "0"), xe.addPayloadPair("cs", Ie), xe.addPayloadPair("lang", Ee), xe.addPayloadPair("res", screen.width + "x" + screen.height), xe.addPayloadPair("cd", screen.colorDepth), m(), T(), i.crossDomainLinker && u(i.crossDomainLinker), Pe(Pe({}, {
                getDomainSessionIndex: function() {
                    return an
                },
                getPageViewId: function() {
                    return M()
                },
                newSession: function() {
                    var e = Math.round((new Date).getTime() / 1e3),
                        n = _(),
                        t = n[1],
                        o = n[2],
                        r = n[3],
                        a = n[4],
                        i = n[5],
                        c = n[6];
                    "0" === n[0] ? (Ce = c, "none" != on && (r++, i = a, Ce = Le.v4()), an = r, y()) : (Ce = Le.v4(), an++), "none" != on && (w(t, o, an, e, i, Ce), y()), rn = (new Date).getTime()
                },
                getCookieName: function(e) {
                    return qe + e + "." + _e
                },
                getUserId: function() {
                    return Oe
                },
                getDomainUserId: function() {
                    return _()[1]
                },
                getDomainUserInfo: function() {
                    return _()
                },
                setReferrerUrl: function(e) {
                    me = e
                },
                setCustomUrl: function(e) {
                    c();
                    var n, t = Ne;
                    f(e) ? pe = e : "/" === e.slice(0, 1) ? pe = f(t) + "://" + E(t) + e : (0 <= (n = (t = l(t)).indexOf("?")) && (t = t.slice(0, n)), (n = t.lastIndexOf("/")) !== t.length - 1 && (t = t.slice(0, n + 1)), pe = t + e)
                },
                setDocumentTitle: function(e) {
                    He = document.title, ge = e
                },
                discardHashTag: function(e) {
                    ve = e
                },
                discardBrace: function(e) {
                    he = e
                },
                setCookiePath: function(e) {
                    Ye = e, m()
                },
                setVisitorCookieTimeout: function(e) {
                    Ze = e
                },
                crossDomainLinker: function(e) {
                    u(e)
                },
                enableActivityTracking: function(e) {
                    ln.configurations.pagePing || (ln.enabled = !0, ln.configurations.pagePing = V(Pe(Pe({}, e), {
                        callback: H
                    })))
                },
                enableActivityTrackingCallback: function(e) {
                    ln.configurations.callback || (ln.enabled = !0, ln.configurations.callback = V(e))
                },
                updatePageActivity: function() {
                    p()
                },
                setOptOutCookie: function(e) {
                    ye = e
                },
                setUserId: function(e) {
                    Oe = e
                },
                setUserIdFromLocation: function(e) {
                    c(), Oe = N(e, Ne)
                },
                setUserIdFromReferrer: function(e) {
                    c(), Oe = N(e, Be)
                },
                setUserIdFromCookie: function(e) {
                    Oe = z(e)
                },
                setCollectorUrl: function(e) {
                    Me = S(e), cn.setCollectorUrl(Me)
                },
                setBufferSize: function(e) {
                    cn.setBufferSize(e)
                },
                flushBuffer: function(e) {
                    void 0 === e && (e = {}), cn.executeQueue(), e.newBufferSize && cn.setBufferSize(e.newBufferSize)
                },
                trackPageView: function(e) {
                    void 0 === e && (e = {}), U(e)
                },
                preservePageViewId: function() {
                    sn = !0
                },
                disableAnonymousTracking: function(e) {
                    i.anonymousTracking = !1, A(e), T(), cn.executeQueue()
                },
                enableAnonymousTracking: function(e) {
                    var n;
                    i.anonymousTracking = null === (n = e && (null == e ? void 0 : e.options)) || void 0 === n || n, A(e), en || O()
                },
                clearUserData: b
            }), {
                id: e,
                namespace: n,
                core: xe,
                sharedState: a
            })
        }(e, n, t, r, a, i);
        var s = Pe(Pe({}, e), {
            addPlugin: function(e) {
                var n, t;
                s.core.addPlugin(e), null === (t = (n = e.plugin).activateBrowserPlugin) || void 0 === t || t.call(n, s)
            }
        });
        return null === (c = i.plugins) || void 0 === c || c.forEach((function(e) {
            var n;
            null === (n = e.activateBrowserPlugin) || void 0 === n || n.call(e, s)
        })), s
    }

    function K(e, n) {
        try {
            Q(null != e ? e : Object.keys(Ge), Ge).forEach(n)
        } catch (e) {
            Ue.error("Function failed", e)
        }
    }

    function W(e, n, t) {
        try {
            Q(null != e ? e : Object.keys(n), n).forEach(t)
        } catch (e) {
            Ue.error("Function failed", e)
        }
    }

    function X(e, n, t, o, r, a) {
        return Ge.hasOwnProperty(e) ? null : (Ge[e] = Y(e, n, t, o, r, a), Ge[e])
    }

    function Q(e, n) {
        for (var t = [], o = 0; o < e.length; o++) {
            var r = e[o];
            n.hasOwnProperty(r) ? t.push(n[r]) : Ue.warn(r + " not configured")
        }
        return t
    }

    function Z() {
        function e() {
            var e;
            if (!n.hasLoaded)
                for (n.hasLoaded = !0, e = 0; e < n.registeredOnLoadHandlers.length; e++) n.registeredOnLoadHandlers[e]();
            return !0
        }
        var n = new qe,
            t = document,
            o = window;
        return t.visibilityState && D(t, "visibilitychange", (function() {
            "hidden" == t.visibilityState && n.bufferFlushers.forEach((function(e) {
                e(!1)
            }))
        }), !1), D(o, "beforeunload", (function() {
            n.bufferFlushers.forEach((function(e) {
                e(!1)
            }))
        }), !1), "loading" === document.readyState ? (t.addEventListener ? t.addEventListener("DOMContentLoaded", (function n() {
            t.removeEventListener("DOMContentLoaded", n, !1), e()
        })) : t.attachEvent && t.attachEvent("onreadystatechange", (function n() {
            "complete" === t.readyState && (t.detachEvent("onreadystatechange", n), e())
        })), D(o, "load", e, !1)) : e(), n
    }

    function $(e) {
        return {
            activateBrowserPlugin: function() {
                var n;
                ze || (n = navigator).userAgentData && (ze = {
                    isMobile: n.userAgentData.mobile,
                    brands: n.userAgentData.brands
                }, e && n.userAgentData.getHighEntropyValues && n.userAgentData.getHighEntropyValues(["platform", "platformVersion", "architecture", "model", "uaFullVersion"]).then((function(e) {
                    ze.architecture = e.architecture, ze.model = e.model, ze.platform = e.platform, ze.uaFullVersion = e.uaFullVersion, ze.platformVersion = e.platformVersion
                })))
            },
            contexts: function() {
                return ze ? [{
                    schema: "iglu:org.ietf/http_client_hints/jsonschema/1-0-0",
                    data: ze
                }] : []
            }
        }
    }

    function ee() {
        function e(e, n) {
            var t = window.optimizely;
            if (t && "function" == typeof t.get) {
                var o = t.get(e);
                void 0 !== n && void 0 !== o && (o = o[n])
            }
            return o
        }

        function n() {
            return (n = e("state"), t = n && n.getActiveExperimentIds(), o = n && n.getVariationMap(), r = e("visitor"), t.map((function(e) {
                var n = o[e],
                    t = n && n.name && n.name.toString() || null;
                n = n && n.id;
                var a = r && r.visitorId && r.visitorId.toString() || null;
                return {
                    experimentId: M(e) || null,
                    variationName: t,
                    variation: M(n) || null,
                    visitorId: a
                }
            }))).map((function(e) {
                return {
                    schema: "iglu:com.optimizely.optimizelyx/summary/jsonschema/1-0-0",
                    data: e
                }
            }));
            var n, t, o, r
        }
        return {
            contexts: function() {
                return window.optimizely ? n() : []
            }
        }
    }

    function ne() {
        return {
            contexts: function() {
                var e = window,
                    n = (e = e.performance || e.mozPerformance || e.msPerformance || e.webkitPerformance).timing;
                return e = e ? [{
                    schema: "iglu:org.w3/PerformanceTiming/jsonschema/1-0-0",
                    data: {
                        navigationStart: n.navigationStart,
                        redirectStart: n.redirectStart,
                        redirectEnd: n.redirectEnd,
                        fetchStart: n.fetchStart,
                        domainLookupStart: n.domainLookupStart,
                        domainLookupEnd: n.domainLookupEnd,
                        connectStart: n.connectStart,
                        secureConnectionStart: n.secureConnectionStart,
                        connectEnd: n.connectEnd,
                        requestStart: n.requestStart,
                        responseStart: n.responseStart,
                        responseEnd: n.responseEnd,
                        unloadEventStart: n.unloadEventStart,
                        unloadEventEnd: n.unloadEventEnd,
                        domLoading: n.domLoading,
                        domInteractive: n.domInteractive,
                        domContentLoadedEventStart: n.domContentLoadedEventStart,
                        domContentLoadedEventEnd: n.domContentLoadedEventEnd,
                        domComplete: n.domComplete,
                        loadEventStart: n.loadEventStart,
                        loadEventEnd: n.loadEventEnd,
                        msFirstPaint: n.msFirstPaint,
                        chromeFirstPaint: n.chromeFirstPaint,
                        requestEnd: n.requestEnd,
                        proxyStart: n.proxyStart,
                        proxyEnd: n.proxyEnd
                    }
                }] : []
            }
        }
    }

    function te() {
        var e;
        return {
            activateBrowserPlugin: function(n) {
                e = n.id, $e[n.id] = n
            },
            contexts: function() {
                return en[e] ? [{
                    schema: "iglu:com.snowplowanalytics.snowplow/gdpr/jsonschema/1-0-0",
                    data: en[e]
                }] : []
            },
            logger: function(e) {
                Qe = e
            }
        }
    }

    function oe(e) {
        var n;
        return void 0 === e && (e = !1), {
            activateBrowserPlugin: function(t) {
                n = t.id, tn[t.id] = [!1, void 0], e && re([n])
            },
            contexts: function() {
                var e, t = null === (e = tn[n]) || void 0 === e ? void 0 : e[1];
                return t ? [t] : []
            }
        }
    }

    function re(e) {
        void 0 === e && (e = Object.keys(tn));
        var n = navigator;
        e.forEach((function(e) {
            tn[e] = [!0, Ze]
        })), !on && n.geolocation && n.geolocation.getCurrentPosition && (on = !0, n.geolocation.getCurrentPosition((function(e) {
            var n = e.coords;
            for (var t in Ze = {
                    schema: "iglu:com.snowplowanalytics.snowplow/geolocation_context/jsonschema/1-1-0",
                    data: {
                        latitude: n.latitude,
                        longitude: n.longitude,
                        latitudeLongitudeAccuracy: n.accuracy,
                        altitude: n.altitude,
                        altitudeAccuracy: n.altitudeAccuracy,
                        bearing: n.heading,
                        speed: n.speed,
                        timestamp: Math.round(e.timestamp)
                    }
                }, tn) Object.prototype.hasOwnProperty.call(tn, t) && tn[t][0] && (tn[t] = [!0, Ze])
        })))
    }

    function ae() {
        return {
            contexts: function() {
                var e = {
                    schema: "iglu:com.google.analytics/cookies/jsonschema/1-0-0",
                    data: {}
                };
                return "__utma __utmb __utmc __utmv __utmz _ga".split(" ").forEach((function(n) {
                    var t = z(n);
                    t && (e.data[n] = t)
                })), [e]
            }
        }
    }

    function ie() {
        return {
            activateBrowserPlugin: function(e) {
                cn[e.id] = e
            }
        }
    }

    function ce(e, n, t) {
        for (var o, r, a, i; null !== (o = n.parentElement) && null != o && "A" !== (r = n.tagName.toUpperCase()) && "AREA" !== r;) n = o;
        if (null != (o = n).href) {
            a = (r = o.hostname || E(o.href)).toLowerCase();
            var s = o.href.replace(r, a);
            /^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):/i.test(s) || (r = o.id, a = H(o), i = o.target, o = sn[e.id].linkTrackingContent ? o.innerHTML : void 0, s = unescape(s), e.core.track(_({
                targetUrl: s,
                elementId: r,
                elementClasses: a,
                elementTarget: i,
                elementContent: o
            }), c(t, n)))
        }
    }

    function se(e, n) {
        return function(t) {
            var o = (t = t || window.event).which || t.button,
                r = t.target || t.srcElement;
            "click" === t.type ? r && ce(cn[e], r, n) : "mousedown" === t.type ? 1 !== o && 2 !== o || !r ? sn[e].lastButton = sn[e].lastTarget = null : (sn[e].lastButton = o, sn[e].lastTarget = r) : "mouseup" === t.type && (o === sn[e].lastButton && r === sn[e].lastTarget && ce(cn[e], r, n), sn[e].lastButton = sn[e].lastTarget = null)
        }
    }

    function ue(e, n) {
        e = void 0 === e ? {} : e, sn[n] = {
            linkTrackingContent: e.trackContent,
            linkTrackingContext: e.context,
            linkTrackingPseudoClicks: e.pseudoClicks,
            linkTrackingFilter: F(e.options)
        }
    }

    function le(e) {
        var n, t, o, r = document.links;
        for (o = 0; o < r.length; o++)
            if (null !== (t = (n = sn[e]).linkTrackingFilter) && void 0 !== t && t.call(n, r[o]) && !r[o][e]) {
                var a = e,
                    i = r[o];
                sn[a].linkTrackingPseudoClicks ? (D(i, "mouseup", se(a, sn[a].linkTrackingContext), !1), D(i, "mousedown", se(a, sn[a].linkTrackingContext), !1)) : D(i, "click", se(a, sn[a].linkTrackingContext), !1), r[o][e] = !0
            }
    }

    function fe(e, n) {
        var t = n.context,
            o = e.id + "form",
            r = function(e) {
                return e ? {
                    formFilter: F(e.forms),
                    fieldFilter: V(e.fields),
                    fieldTransform: de(e.fields)
                } : {
                    formFilter: function() {
                        return !0
                    },
                    fieldFilter: function() {
                        return !0
                    },
                    fieldTransform: fn
                }
            }(n.options);
        Array.prototype.slice.call(document.getElementsByTagName("form")).forEach((function(n) {
            r.formFilter(n) && !n[o] && (Array.prototype.slice.call(ln).forEach((function(a) {
                Array.prototype.slice.call(n.getElementsByTagName(a)).forEach((function(n) {
                    r.fieldFilter(n) && !n[o] && "password" !== n.type.toLowerCase() && (D(n, "focus", pe(e, r, "focus_form", t), !1), D(n, "change", pe(e, r, "change_form", t), !1), n[o] = !0)
                }))
            })), D(n, "submit", function(e, n, t, o) {
                return function(r) {
                    var a;
                    r = r.target;
                    var i = function(e, n) {
                        var t = [];
                        return Array.prototype.slice.call(ln).forEach((function(o) {
                            o = Array.prototype.slice.call(n.getElementsByTagName(o)).filter((function(n) {
                                return n.hasOwnProperty(e)
                            })), Array.prototype.slice.call(o).forEach((function(e) {
                                if ("submit" !== e.type) {
                                    var n = {
                                        name: me(e),
                                        value: e.value,
                                        nodeName: e.nodeName
                                    };
                                    e.type && "INPUT" === e.nodeName.toUpperCase() && (n.type = e.type), "checkbox" !== e.type && "radio" !== e.type || e.checked || (n.value = null), t.push(n)
                                }
                            }))
                        })), t
                    }(t, r);
                    i.forEach((function(e) {
                        var t;
                        e.value = null !== (t = n.fieldTransform(e.value, e)) && void 0 !== t ? t : e.value
                    })), e.core.track(function(e) {
                        return T({
                            event: {
                                schema: "iglu:com.snowplowanalytics.snowplow/submit_form/jsonschema/1-0-0",
                                data: S({
                                    formId: e.formId,
                                    formClasses: e.formClasses,
                                    elements: e.elements
                                })
                            }
                        })
                    }({
                        formId: null !== (a = me(r)) && void 0 !== a ? a : "",
                        formClasses: H(r),
                        elements: i
                    }), c(o, r, i))
                }
            }(e, r, o, t)), n[o] = !0)
        }))
    }

    function de(e) {
        return e && Object.prototype.hasOwnProperty.call(e, "transform") ? e.transform : fn
    }

    function me(e) {
        for (var n = 0, t = ["name", "id", "type", "nodeName"]; n < t.length; n++) {
            var o = t[n];
            if (0 != e[o] && "string" == typeof e[o]) return e[o]
        }
        return null
    }

    function pe(e, n, t, o) {
        return function(r) {
            var a;
            if (r = r.target) {
                var i = r.nodeName && "INPUT" === r.nodeName.toUpperCase() ? r.type : null,
                    s = "checkbox" !== r.type || r.checked ? n.fieldTransform(r.value, r) : null;
                if ("change_form" === t || "checkbox" !== i && "radio" !== i) {
                    var u, l = e.core,
                        f = l.track;
                    for (u = r; u && u.nodeName && "HTML" !== u.nodeName.toUpperCase() && "FORM" !== u.nodeName.toUpperCase();) u = u.parentNode;
                    u = null != (u = u && u.nodeName && "FORM" === u.nodeName.toUpperCase() ? me(u) : null) ? u : "";
                    var d = null !== (a = me(r)) && void 0 !== a ? a : "";
                    a = "", u = {
                        formId: u,
                        elementId: d,
                        nodeName: r.nodeName,
                        elementClasses: H(r),
                        value: null != s ? s : null
                    }, "change_form" === t ? (a = "iglu:com.snowplowanalytics.snowplow/change_form/jsonschema/1-0-0", u.type = i) : "focus_form" === t && (a = "iglu:com.snowplowanalytics.snowplow/focus_form/jsonschema/1-0-0", u.elementType = i), a = T({
                        event: {
                            schema: a,
                            data: S(u, {
                                value: !0
                            })
                        }
                    }), f.call(l, a, c(o, r, i, s))
                }
            }
        }
    }

    function ge() {
        return {
            activateBrowserPlugin: function(e) {
                dn[e.id] = e
            }
        }
    }

    function ve() {
        return {
            activateBrowserPlugin: function(e) {
                pn[e.id] = e
            }
        }
    }

    function he(e, n) {
        void 0 === n && (n = Object.keys(pn));
        var t = e.message,
            o = e.filename,
            r = e.lineno,
            a = e.colno,
            i = e.error,
            c = e.context,
            s = e.timestamp,
            u = i && i.stack ? i.stack : null;
        W(n, pn, (function(e) {
            e.core.track(T({
                event: {
                    schema: "iglu:com.snowplowanalytics.snowplow/application_error/jsonschema/1-0-1",
                    data: {
                        programmingLanguage: "JAVASCRIPT",
                        message: null != t ? t : "JS Exception. Browser doesn't support ErrorEvent API",
                        stackTrace: u,
                        lineNumber: r,
                        lineColumn: a,
                        fileName: o
                    }
                }
            }), c, s)
        }))
    }

    function ye() {
        return {
            activateBrowserPlugin: function(e) {
                e.core.setTimezone(vn.determine("undefined" != typeof Intl).name())
            }
        }
    }

    function we() {
        return {
            activateBrowserPlugin: function(e) {
                yn[e.id] = e, wn[e.id] = {
                    items: []
                }
            }
        }
    }

    function ke() {
        return {
            activateBrowserPlugin: function(e) {
                bn[e.id] = e, An[e.id] = []
            }
        }
    }

    function be() {
        return {
            activateBrowserPlugin: function(e) {
                Tn[e.id] = e
            }
        }
    }

    function Ae() {
        return {
            activateBrowserPlugin: function(e) {
                Sn[e.id] = e
            }
        }
    }
    for (var Pe = function() {
            return (Pe = Object.assign || function(e) {
                for (var n, t = 1, o = arguments.length; t < o; t++)
                    for (var r in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                return e
            }).apply(this, arguments)
        }, Te = t((function(e) {
            var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (n) {
                var t = new Uint8Array(16);
                e.exports = function() {
                    return n(t), t
                }
            } else {
                var o = Array(16);
                e.exports = function() {
                    for (var e, n = 0; 16 > n; n++) 0 == (3 & n) && (e = 4294967296 * Math.random()), o[n] = e >>> ((3 & n) << 3) & 255;
                    return o
                }
            }
        })), _e = [], Se = 0; 256 > Se; ++Se) _e[Se] = (Se + 256).toString(16).substr(1);
    var Ce, Oe, xe = function(e, n) {
            return n = n || 0, [_e[e[n++]], _e[e[n++]], _e[e[n++]], _e[e[n++]], "-", _e[e[n++]], _e[e[n++]], "-", _e[e[n++]], _e[e[n++]], "-", _e[e[n++]], _e[e[n++]], "-", _e[e[n++]], _e[e[n++]], _e[e[n++]], _e[e[n++]], _e[e[n++]], _e[e[n++]]].join("")
        },
        Ee = 0,
        Ie = 0,
        je = function(e, n, t) {
            if (t = n && t || 0, "string" == typeof e && (n = "binary" === e ? Array(16) : null, e = null), (e = (e = e || {}).random || (e.rng || Te)())[6] = 15 & e[6] | 64, e[8] = 63 & e[8] | 128, n)
                for (var o = 0; 16 > o; ++o) n[t + o] = e[o];
            return n || xe(e)
        };
    je.v1 = function(e, n, t) {
        t = n && t || 0;
        var o = n || [],
            r = (e = e || {}).node || Ce,
            a = void 0 !== e.clockseq ? e.clockseq : Oe;
        if (null == r || null == a) {
            var i = Te();
            null == r && (r = Ce = [1 | i[0], i[1], i[2], i[3], i[4], i[5]]), null == a && (a = Oe = 16383 & (i[6] << 8 | i[7]))
        }
        i = void 0 !== e.msecs ? e.msecs : (new Date).getTime();
        var c = void 0 !== e.nsecs ? e.nsecs : Ie + 1,
            s = i - Ee + (c - Ie) / 1e4;
        if (0 > s && void 0 === e.clockseq && (a = a + 1 & 16383), (0 > s || i > Ee) && void 0 === e.nsecs && (c = 0), 1e4 <= c) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
        for (Ee = i, Ie = c, Oe = a, e = (1e4 * (268435455 & (i += 122192928e5)) + c) % 4294967296, o[t++] = e >>> 24 & 255, o[t++] = e >>> 16 & 255, o[t++] = e >>> 8 & 255, o[t++] = 255 & e, e = i / 4294967296 * 1e4 & 268435455, o[t++] = e >>> 8 & 255, o[t++] = 255 & e, o[t++] = e >>> 24 & 15 | 16, o[t++] = e >>> 16 & 255, o[t++] = a >>> 8 | 128, o[t++] = 255 & a, a = 0; 6 > a; ++a) o[t + a] = r[a];
        return n || xe(o)
    };
    var De, Ne, Le = je.v4 = je,
        Be = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    (Ne = De || (De = {}))[Ne.none = 0] = "none", Ne[Ne.error = 1] = "error", Ne[Ne.warn = 2] = "warn", Ne[Ne.debug = 3] = "debug", Ne[Ne.info = 4] = "info";
    var ze, Me, Ue = function(e) {
            return void 0 === e && (e = De.warn), {
                setLogLevel: function(n) {
                    e = De[n] ? n : De.warn
                },
                warn: function(t, o) {
                    for (var r = [], a = 2; a < arguments.length; a++) r[a - 2] = arguments[a];
                    e >= De.warn && "undefined" != typeof console && (a = "Snowplow: " + t, o ? console.warn.apply(console, n([a + "\n", o], r)) : console.warn.apply(console, n([a], r)))
                },
                error: function(t, o) {
                    for (var r = [], a = 2; a < arguments.length; a++) r[a - 2] = arguments[a];
                    e >= De.error && "undefined" != typeof console && (a = "Snowplow: " + t + "\n", o ? console.error.apply(console, n([a + "\n", o], r)) : console.error.apply(console, n([a], r)))
                },
                debug: function(t) {
                    for (var o = [], r = 1; r < arguments.length; r++) o[r - 1] = arguments[r];
                    e >= De.debug && "undefined" != typeof console && console.debug.apply(console, n(["Snowplow: " + t], o))
                },
                info: function(t) {
                    for (var o = [], r = 1; r < arguments.length; r++) o[r - 1] = arguments[r];
                    e >= De.info && "undefined" != typeof console && console.info.apply(console, n(["Snowplow: " + t], o))
                }
            }
        }(),
        Fe = t((function(e) {
            var n;
            n = {
                rotl: function(e, n) {
                    return e << n | e >>> 32 - n
                },
                rotr: function(e, n) {
                    return e << 32 - n | e >>> n
                },
                endian: function(e) {
                    if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                    for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
                    return e
                },
                randomBytes: function(e) {
                    for (var n = []; 0 < e; e--) n.push(Math.floor(256 * Math.random()));
                    return n
                },
                bytesToWords: function(e) {
                    for (var n = [], t = 0, o = 0; t < e.length; t++, o += 8) n[o >>> 5] |= e[t] << 24 - o % 32;
                    return n
                },
                wordsToBytes: function(e) {
                    for (var n = [], t = 0; t < 32 * e.length; t += 8) n.push(e[t >>> 5] >>> 24 - t % 32 & 255);
                    return n
                },
                bytesToHex: function(e) {
                    for (var n = [], t = 0; t < e.length; t++) n.push((e[t] >>> 4).toString(16)), n.push((15 & e[t]).toString(16));
                    return n.join("")
                },
                hexToBytes: function(e) {
                    for (var n = [], t = 0; t < e.length; t += 2) n.push(parseInt(e.substr(t, 2), 16));
                    return n
                },
                bytesToBase64: function(e) {
                    for (var n = [], t = 0; t < e.length; t += 3)
                        for (var o = e[t] << 16 | e[t + 1] << 8 | e[t + 2], r = 0; 4 > r; r++) 8 * t + 6 * r <= 8 * e.length ? n.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(o >>> 6 * (3 - r) & 63)) : n.push("=");
                    return n.join("")
                },
                base64ToBytes: function(e) {
                    e = e.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var n = [], t = 0, o = 0; t < e.length; o = ++t % 4) 0 != o && n.push(("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(e.charAt(t - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(e.charAt(t)) >>> 6 - 2 * o);
                    return n
                }
            }, e.exports = n
        })),
        Ve = {
            utf8: {
                stringToBytes: function(e) {
                    return Ve.bin.stringToBytes(unescape(encodeURIComponent(e)))
                },
                bytesToString: function(e) {
                    return decodeURIComponent(escape(Ve.bin.bytesToString(e)))
                }
            },
            bin: {
                stringToBytes: function(e) {
                    for (var n = [], t = 0; t < e.length; t++) n.push(255 & e.charCodeAt(t));
                    return n
                },
                bytesToString: function(e) {
                    for (var n = [], t = 0; t < e.length; t++) n.push(String.fromCharCode(e[t]));
                    return n.join("")
                }
            }
        },
        He = Ve,
        Re = t((function(e) {
            var n, t, o;
            n = He.utf8, t = He.bin, (o = function(e, o) {
                var r = Fe.wordsToBytes,
                    a = e;
                a.constructor == String ? a = n.stringToBytes(a) : "undefined" != typeof Buffer && "function" == typeof Buffer.isBuffer && Buffer.isBuffer(a) ? a = Array.prototype.slice.call(a, 0) : Array.isArray(a) || (a = a.toString()), e = Fe.bytesToWords(a);
                var i = 8 * a.length;
                a = [];
                var c = 1732584193,
                    s = -271733879,
                    u = -1732584194,
                    l = 271733878,
                    f = -1009589776;
                for (e[i >> 5] |= 128 << 24 - i % 32, e[15 + (i + 64 >>> 9 << 4)] = i, i = 0; i < e.length; i += 16) {
                    for (var d = c, m = s, p = u, g = l, v = f, h = 0; 80 > h; h++) {
                        if (16 > h) a[h] = e[i + h];
                        else {
                            var y = a[h - 3] ^ a[h - 8] ^ a[h - 14] ^ a[h - 16];
                            a[h] = y << 1 | y >>> 31
                        }
                        y = (c << 5 | c >>> 27) + f + (a[h] >>> 0) + (20 > h ? 1518500249 + (s & u | ~s & l) : 40 > h ? 1859775393 + (s ^ u ^ l) : 60 > h ? (s & u | s & l | u & l) - 1894007588 : (s ^ u ^ l) - 899497514), f = l, l = u, u = s << 30 | s >>> 2, s = c, c = y
                    }
                    c += d, s += m, u += p, l += g, f += v
                }
                return r = r.call(Fe, [c, s, u, l, f]), o && o.asBytes ? r : o && o.asString ? t.bytesToString(r) : Fe.bytesToHex(r)
            })._blocksize = 16, o._digestsize = 20, e.exports = o
        })),
        Ge = {},
        qe = function() {
            this.outQueues = [], this.bufferFlushers = [], this.hasLoaded = !1, this.registeredOnLoadHandlers = []
        },
        Je = "undefined" != typeof window ? Z() : void 0,
        Ye = Object.freeze({
            __proto__: null,
            addGlobalContexts: function(e, n) {
                K(n, (function(n) {
                    n.core.addGlobalContexts(e)
                }))
            },
            addPlugin: function(e, n) {
                K(n, (function(n) {
                    n.addPlugin(e)
                }))
            },
            clearGlobalContexts: function(e) {
                K(e, (function(e) {
                    e.core.clearGlobalContexts()
                }))
            },
            clearUserData: function(e, n) {
                K(n, (function(n) {
                    n.clearUserData(e)
                }))
            },
            crossDomainLinker: function(e, n) {
                K(n, (function(n) {
                    n.crossDomainLinker(e)
                }))
            },
            disableAnonymousTracking: function(e, n) {
                K(n, (function(n) {
                    n.disableAnonymousTracking(e)
                }))
            },
            discardBrace: function(e, n) {
                K(n, (function(n) {
                    n.discardBrace(e)
                }))
            },
            discardHashTag: function(e, n) {
                K(n, (function(n) {
                    n.discardHashTag(e)
                }))
            },
            enableActivityTracking: function(e, n) {
                K(n, (function(n) {
                    n.enableActivityTracking(e)
                }))
            },
            enableActivityTrackingCallback: function(e, n) {
                K(n, (function(n) {
                    n.enableActivityTrackingCallback(e)
                }))
            },
            enableAnonymousTracking: function(e, n) {
                K(n, (function(n) {
                    n.enableAnonymousTracking(e)
                }))
            },
            flushBuffer: function(e, n) {
                K(n, (function(n) {
                    n.flushBuffer(e)
                }))
            },
            newSession: function(e) {
                K(e, (function(e) {
                    e.newSession()
                }))
            },
            newTracker: function(e, n, t) {
                if (void 0 === t && (t = {}), Je) return X(e, e, "js-3.1.6", n, Je, t)
            },
            preservePageViewId: function(e) {
                K(e, (function(e) {
                    e.preservePageViewId()
                }))
            },
            removeGlobalContexts: function(e, n) {
                K(n, (function(n) {
                    n.core.removeGlobalContexts(e)
                }))
            },
            setBufferSize: function(e, n) {
                K(n, (function(n) {
                    n.setBufferSize(e)
                }))
            },
            setCollectorUrl: function(e, n) {
                K(n, (function(n) {
                    n.setCollectorUrl(e)
                }))
            },
            setCookiePath: function(e, n) {
                K(n, (function(n) {
                    n.setCookiePath(e)
                }))
            },
            setCustomUrl: function(e, n) {
                K(n, (function(n) {
                    n.setCustomUrl(e)
                }))
            },
            setDocumentTitle: function(e, n) {
                K(n, (function(n) {
                    n.setDocumentTitle(e)
                }))
            },
            setOptOutCookie: function(e, n) {
                K(n, (function(n) {
                    n.setOptOutCookie(e)
                }))
            },
            setReferrerUrl: function(e, n) {
                K(n, (function(n) {
                    n.setReferrerUrl(e)
                }))
            },
            setUserId: function(e, n) {
                K(n, (function(n) {
                    n.setUserId(e)
                }))
            },
            setUserIdFromCookie: function(e, n) {
                K(n, (function(n) {
                    n.setUserIdFromCookie(e)
                }))
            },
            setUserIdFromLocation: function(e, n) {
                K(n, (function(n) {
                    n.setUserIdFromLocation(e)
                }))
            },
            setUserIdFromReferrer: function(e, n) {
                K(n, (function(n) {
                    n.setUserIdFromReferrer(e)
                }))
            },
            setVisitorCookieTimeout: function(e, n) {
                K(n, (function(n) {
                    n.setVisitorCookieTimeout(e)
                }))
            },
            trackPageView: function(e, n) {
                K(n, (function(n) {
                    n.trackPageView(e)
                }))
            },
            trackSelfDescribingEvent: function(e, n) {
                K(n, (function(n) {
                    n.core.track(T({
                        event: e.event
                    }), e.context, e.timestamp)
                }))
            },
            trackStructEvent: function(e, n) {
                K(n, (function(n) {
                    var t = (n = n.core).track,
                        r = e.category,
                        a = e.action,
                        i = e.label,
                        c = e.property,
                        s = e.value,
                        u = o();
                    u.add("e", "se"), u.add("se_ca", r), u.add("se_ac", a), u.add("se_la", i), u.add("se_pr", c), u.add("se_va", null == s ? void 0 : s.toString()), t.call(n, u, e.context, e.timestamp)
                }))
            },
            updatePageActivity: function(e) {
                K(e, (function(e) {
                    e.updatePageActivity()
                }))
            },
            version: "3.1.6"
        }),
        Ke = Object.freeze({
            __proto__: null,
            ClientHintsPlugin: $
        }),
        We = Object.freeze({
            __proto__: null,
            OptimizelyXPlugin: ee
        }),
        Xe = Object.freeze({
            __proto__: null,
            PerformanceTimingPlugin: ne
        });
    ! function(e) {
        e.consent = "consent", e.contract = "contract", e.legalObligation = "legal_obligation", e.vitalInterests = "vital_interests", e.publicTask = "public_task", e.legitimateInterests = "legitimate_interests"
    }(Me || (Me = {}));
    var Qe, Ze, $e = {},
        en = {},
        nn = Object.freeze({
            __proto__: null,
            ConsentPlugin: te,
            enableGdprContext: function(e, n) {
                void 0 === n && (n = Object.keys($e));
                var t = e.documentId,
                    o = e.documentVersion,
                    r = e.documentDescription,
                    a = Me[e.basisForProcessing];
                a ? n.forEach((function(e) {
                    $e[e] && (en[e] = {
                        basisForProcessing: a,
                        documentId: null != t ? t : null,
                        documentVersion: null != o ? o : null,
                        documentDescription: null != r ? r : null
                    })
                })) : Qe.warn("enableGdprContext: basisForProcessing must be one of: consent, contract, legalObligation, vitalInterests, publicTask, legitimateInterests")
            },
            get gdprBasis() {
                return Me
            },
            trackConsentGranted: function(e, n) {
                void 0 === n && (n = Object.keys($e)), W(n, $e, (function(n) {
                    var t = e.expiry,
                        o = {
                            schema: "iglu:com.snowplowanalytics.snowplow/consent_document/jsonschema/1-0-0",
                            data: S({
                                id: e.id,
                                version: e.version,
                                name: e.name,
                                description: e.description
                            })
                        };
                    t = T({
                        event: {
                            schema: "iglu:com.snowplowanalytics.snowplow/consent_granted/jsonschema/1-0-0",
                            data: S({
                                expiry: t
                            })
                        }
                    }), o = [o], n.core.track(t, e.context ? e.context.concat(o) : o, e.timestamp)
                }))
            },
            trackConsentWithdrawn: function(e, n) {
                void 0 === n && (n = Object.keys($e)), W(n, $e, (function(n) {
                    var t = e.all,
                        o = {
                            schema: "iglu:com.snowplowanalytics.snowplow/consent_document/jsonschema/1-0-0",
                            data: S({
                                id: e.id,
                                version: e.version,
                                name: e.name,
                                description: e.description
                            })
                        };
                    t = T({
                        event: {
                            schema: "iglu:com.snowplowanalytics.snowplow/consent_withdrawn/jsonschema/1-0-0",
                            data: S({
                                all: t
                            })
                        }
                    }), o = [o], n.core.track(t, e.context ? e.context.concat(o) : o, e.timestamp)
                }))
            }
        }),
        tn = {},
        on = !1,
        rn = Object.freeze({
            __proto__: null,
            GeolocationPlugin: oe,
            enableGeolocationContext: re
        }),
        an = Object.freeze({
            __proto__: null,
            GaCookiesPlugin: ae
        }),
        cn = {},
        sn = {},
        un = Object.freeze({
            __proto__: null,
            LinkClickTrackingPlugin: ie,
            enableLinkClickTracking: function(e, n) {
                void 0 === e && (e = {}), void 0 === n && (n = Object.keys(cn)), n.forEach((function(n) {
                    cn[n] && (cn[n].sharedState.hasLoaded ? (ue(e, n), le(n)) : cn[n].sharedState.registeredOnLoadHandlers.push((function() {
                        ue(e, n), le(n)
                    })))
                }))
            },
            refreshLinkClickTracking: function(e) {
                void 0 === e && (e = Object.keys(cn)), e.forEach((function(e) {
                    cn[e] && (cn[e].sharedState.hasLoaded ? le(e) : cn[e].sharedState.registeredOnLoadHandlers.push((function() {
                        le(e)
                    })))
                }))
            },
            trackLinkClick: function(e, n) {
                void 0 === n && (n = Object.keys(cn)), W(n, cn, (function(n) {
                    n.core.track(_(e), e.context, e.timestamp)
                }))
            }
        }),
        ln = ["textarea", "input", "select"],
        fn = function(e) {
            return e
        },
        dn = {},
        mn = Object.freeze({
            __proto__: null,
            FormTrackingPlugin: ge,
            enableFormTracking: function(e, n) {
                void 0 === e && (e = {}), void 0 === n && (n = Object.keys(dn)), n.forEach((function(n) {
                    dn[n] && (dn[n].sharedState.hasLoaded ? fe(dn[n], e) : dn[n].sharedState.registeredOnLoadHandlers.push((function() {
                        fe(dn[n], e)
                    })))
                }))
            }
        }),
        pn = {},
        gn = Object.freeze({
            __proto__: null,
            ErrorTrackingPlugin: ve,
            enableErrorTracking: function(e, n) {
                void 0 === e && (e = {}), void 0 === n && (n = Object.keys(pn));
                var t = e.filter,
                    o = e.contextAdder,
                    r = e.context;
                D(window, "error", (function(e) {
                    if (t && O(t) && t(e) || null == t) {
                        var a = n,
                            i = r || [];
                        o && O(o) && (i = i.concat(o(e))), he({
                            message: e.message,
                            filename: e.filename,
                            lineno: e.lineno,
                            colno: e.colno,
                            error: e.error,
                            context: i
                        }, a)
                    }
                }), !0)
            },
            trackError: he
        }),
        vn = t((function(e) {
            var n, t, o, r, a, i;
            n = {
                "America/Denver": ["America/Mazatlan"],
                "America/Chicago": ["America/Mexico_City"],
                "America/Asuncion": ["America/Campo_Grande", "America/Santiago"],
                "America/Montevideo": ["America/Sao_Paulo", "America/Santiago"],
                "Asia/Beirut": "Asia/Amman Asia/Jerusalem Europe/Helsinki Asia/Damascus Africa/Cairo Asia/Gaza Europe/Minsk Africa/Windhoek".split(" "),
                "Pacific/Auckland": ["Pacific/Fiji"],
                "America/Los_Angeles": ["America/Santa_Isabel"],
                "America/New_York": ["America/Havana"],
                "America/Halifax": ["America/Goose_Bay"],
                "America/Godthab": ["America/Miquelon"],
                "Asia/Dubai": ["Asia/Yerevan"],
                "Asia/Jakarta": ["Asia/Krasnoyarsk"],
                "Asia/Shanghai": ["Asia/Irkutsk", "Australia/Perth"],
                "Australia/Sydney": ["Australia/Lord_Howe"],
                "Asia/Tokyo": ["Asia/Yakutsk"],
                "Asia/Dhaka": ["Asia/Omsk"],
                "Asia/Baku": ["Asia/Yerevan"],
                "Australia/Brisbane": ["Asia/Vladivostok"],
                "Pacific/Noumea": ["Asia/Vladivostok"],
                "Pacific/Majuro": ["Asia/Kamchatka", "Pacific/Fiji"],
                "Pacific/Tongatapu": ["Pacific/Apia"],
                "Asia/Baghdad": ["Europe/Minsk", "Europe/Moscow"],
                "Asia/Karachi": ["Asia/Yekaterinburg"],
                "Africa/Johannesburg": ["Asia/Gaza", "Africa/Cairo"]
            }, t = function() {
                for (var e = [], n = 0; 11 >= n; n++)
                    for (var t = 1; 28 >= t; t++) {
                        var o = -new Date(2014, n, t).getTimezoneOffset();
                        o = null !== o ? o : 0, e ? e && e[e.length - 1] !== o && e.push(o) : e.push()
                    }
                return e
            }, o = function e(n, t, o) {
                void 0 === t && (t = 864e5, o = 36e5);
                var r = new Date(n.getTime() - t).getTime();
                n = n.getTime() + t;
                for (var a = new Date(r).getTimezoneOffset(), i = null; r < n - o;) {
                    var c = new Date(r);
                    if (c.getTimezoneOffset() !== a) {
                        i = c;
                        break
                    }
                    r += o
                }
                return 864e5 === t ? e(i, 36e5, 6e4) : 36e5 === t ? e(i, 6e4, 1e3) : i
            }, r = function(e, n, t, o) {
                if ("N/A" !== t) return t;
                if ("Asia/Beirut" === n) {
                    if ("Africa/Cairo" === o.name && 13983768e5 === e[6].s && 14116788e5 === e[6].e || "Asia/Jerusalem" === o.name && 13959648e5 === e[6].s && 14118588e5 === e[6].e) return 0
                } else if ("America/Santiago" === n) {
                    if ("America/Asuncion" === o.name && 14124816e5 === e[6].s && 1397358e6 === e[6].e || "America/Campo_Grande" === o.name && 14136912e5 === e[6].s && 13925196e5 === e[6].e) return 0
                } else if ("America/Montevideo" === n) {
                    if ("America/Sao_Paulo" === o.name && 14136876e5 === e[6].s && 1392516e6 === e[6].e) return 0
                } else if ("Pacific/Auckland" === n && "Pacific/Fiji" === o.name && 14142456e5 === e[6].s && 13961016e5 === e[6].e) return 0;
                return t
            }, a = function(e) {
                var t = function() {
                    for (var e = [], n = 0; n < i.olson.dst_rules.years.length; n++) {
                        var t = i.olson.dst_rules.years[n],
                            r = new Date(t, 0, 1, 0, 0, 1, 0).getTime();
                        t = new Date(t, 12, 31, 23, 59, 59).getTime();
                        for (var a = new Date(r).getTimezoneOffset(), c = null, s = null; r < t - 864e5;) {
                            var u = new Date(r),
                                l = u.getTimezoneOffset();
                            l !== a && (l < a && (c = u), l > a && (s = u), a = l), r += 864e5
                        }
                        t = !(!c || !s) && {
                            s: o(c).getTime(),
                            e: o(s).getTime()
                        }, e.push(t)
                    }
                    return e
                }();
                return function(e) {
                    for (var n = 0; n < e.length; n++)
                        if (!1 !== e[n]) return !0;
                    return !1
                }(t) ? function(e, t) {
                    for (var o = {}, a = i.olson.dst_rules.zones, c = a.length, s = n[t], u = 0; u < c; u++) {
                        for (var l = a[u], f = a[u], d = 0, m = 0; m < e.length; m++)
                            if (f.rules[m] && e[m]) {
                                if (!(e[m].s >= f.rules[m].s && e[m].e <= f.rules[m].e)) {
                                    d = "N/A";
                                    break
                                }
                                if (d = 0, d += Math.abs(e[m].s - f.rules[m].s), 864e6 < (d += Math.abs(f.rules[m].e - e[m].e))) {
                                    d = "N/A";
                                    break
                                }
                            }
                        "N/A" !== (f = r(e, t, d, f)) && (o[l.name] = f)
                    }
                    for (var p in o)
                        if (o.hasOwnProperty(p))
                            for (e = 0; e < s.length; e++)
                                if (s[e] === p) return p;
                    return t
                }(t, e) : e
            }, (i = {
                determine: function(e) {
                    var o = !1,
                        r = function() {
                            var e = 0,
                                n = t();
                            return 1 < n.length && (e = n[0] - n[1]), 3 < n.length ? n[0] + ",1,weird" : 0 > e ? n[0] + ",1" : 0 < e ? n[1] + ",1,s" : n[0] + ",0"
                        }();
                    return (e || void 0 === e) && (o = function() {
                        var e, n;
                        if (Intl && "undefined" != typeof Intl && void 0 !== Intl.DateTimeFormat && void 0 !== (e = Intl.DateTimeFormat()) && void 0 !== e.resolvedOptions) return (n = e.resolvedOptions().timeZone) && (-1 < n.indexOf("/") || "UTC" === n) ? n : void 0
                    }()), o || (o = i.olson.timezones[r], void 0 !== n[o] && (o = a(o))), {
                        name: function() {
                            return o
                        },
                        using_intl: e || void 0 === e,
                        needle: r,
                        offsets: t()
                    }
                }
            }).olson = i.olson || {}, i.olson.timezones = {
                "-720,0": "Etc/GMT+12",
                "-660,0": "Pacific/Pago_Pago",
                "-660,1,s": "Pacific/Apia",
                "-600,1": "America/Adak",
                "-600,0": "Pacific/Honolulu",
                "-570,0": "Pacific/Marquesas",
                "-540,0": "Pacific/Gambier",
                "-540,1": "America/Anchorage",
                "-480,1": "America/Los_Angeles",
                "-480,0": "Pacific/Pitcairn",
                "-420,0": "America/Phoenix",
                "-420,1": "America/Denver",
                "-360,0": "America/Guatemala",
                "-360,1": "America/Chicago",
                "-360,1,s": "Pacific/Easter",
                "-300,0": "America/Bogota",
                "-300,1": "America/New_York",
                "-270,0": "America/Caracas",
                "-240,1": "America/Halifax",
                "-240,0": "America/Santo_Domingo",
                "-240,1,s": "America/Asuncion",
                "-210,1": "America/St_Johns",
                "-180,1": "America/Godthab",
                "-180,0": "America/Buenos_Aires",
                "-180,1,s": "America/Montevideo",
                "-120,0": "America/Noronha",
                "-120,1": "America/Noronha",
                "-60,1": "Atlantic/Azores",
                "-60,0": "Atlantic/Cape_Verde",
                "0,0": "UTC",
                "0,1": "Europe/London",
                "0,1,weird": "Africa/Casablanca",
                "60,1": "Europe/Berlin",
                "60,0": "Africa/Lagos",
                "60,1,weird": "Africa/Casablanca",
                "120,1": "Asia/Beirut",
                "120,1,weird": "Africa/Cairo",
                "120,0": "Africa/Johannesburg",
                "180,0": "Asia/Baghdad",
                "180,1": "Europe/Moscow",
                "210,1": "Asia/Tehran",
                "240,0": "Asia/Dubai",
                "240,1": "Asia/Baku",
                "270,0": "Asia/Kabul",
                "300,1": "Asia/Yekaterinburg",
                "300,0": "Asia/Karachi",
                "330,0": "Asia/Calcutta",
                "345,0": "Asia/Katmandu",
                "360,0": "Asia/Dhaka",
                "360,1": "Asia/Omsk",
                "390,0": "Asia/Rangoon",
                "420,1": "Asia/Krasnoyarsk",
                "420,0": "Asia/Jakarta",
                "480,0": "Asia/Shanghai",
                "480,1": "Asia/Irkutsk",
                "525,0": "Australia/Eucla",
                "525,1,s": "Australia/Eucla",
                "540,1": "Asia/Yakutsk",
                "540,0": "Asia/Tokyo",
                "570,0": "Australia/Darwin",
                "570,1,s": "Australia/Adelaide",
                "600,0": "Australia/Brisbane",
                "600,1": "Asia/Vladivostok",
                "600,1,s": "Australia/Sydney",
                "630,1,s": "Australia/Lord_Howe",
                "660,1": "Asia/Kamchatka",
                "660,0": "Pacific/Noumea",
                "690,0": "Pacific/Norfolk",
                "720,1,s": "Pacific/Auckland",
                "720,0": "Pacific/Majuro",
                "765,1,s": "Pacific/Chatham",
                "780,0": "Pacific/Tongatapu",
                "780,1,s": "Pacific/Apia",
                "840,0": "Pacific/Kiritimati"
            }, i.olson.dst_rules = {
                years: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
                zones: [{
                    name: "Africa/Cairo",
                    rules: [{
                        e: 12199572e5,
                        s: 12090744e5
                    }, {
                        e: 1250802e6,
                        s: 1240524e6
                    }, {
                        e: 12858804e5,
                        s: 12840696e5
                    }, !1, !1, !1, {
                        e: 14116788e5,
                        s: 1406844e6
                    }]
                }, {
                    name: "America/Asuncion",
                    rules: [{
                        e: 12050316e5,
                        s: 12243888e5
                    }, {
                        e: 12364812e5,
                        s: 12558384e5
                    }, {
                        e: 12709548e5,
                        s: 12860784e5
                    }, {
                        e: 13024044e5,
                        s: 1317528e6
                    }, {
                        e: 1333854e6,
                        s: 13495824e5
                    }, {
                        e: 1364094e6,
                        s: 1381032e6
                    }, {
                        e: 13955436e5,
                        s: 14124816e5
                    }]
                }, {
                    name: "America/Campo_Grande",
                    rules: [{
                        e: 12032172e5,
                        s: 12243888e5
                    }, {
                        e: 12346668e5,
                        s: 12558384e5
                    }, {
                        e: 12667212e5,
                        s: 1287288e6
                    }, {
                        e: 12981708e5,
                        s: 13187376e5
                    }, {
                        e: 13302252e5,
                        s: 1350792e6
                    }, {
                        e: 136107e7,
                        s: 13822416e5
                    }, {
                        e: 13925196e5,
                        s: 14136912e5
                    }]
                }, {
                    name: "America/Goose_Bay",
                    rules: [{
                        e: 122559486e4,
                        s: 120503526e4
                    }, {
                        e: 125704446e4,
                        s: 123648486e4
                    }, {
                        e: 128909886e4,
                        s: 126853926e4
                    }, {
                        e: 13205556e5,
                        s: 129998886e4
                    }, {
                        e: 13520052e5,
                        s: 13314456e5
                    }, {
                        e: 13834548e5,
                        s: 13628952e5
                    }, {
                        e: 14149044e5,
                        s: 13943448e5
                    }]
                }, {
                    name: "America/Havana",
                    rules: [{
                        e: 12249972e5,
                        s: 12056436e5
                    }, {
                        e: 12564468e5,
                        s: 12364884e5
                    }, {
                        e: 12885012e5,
                        s: 12685428e5
                    }, {
                        e: 13211604e5,
                        s: 13005972e5
                    }, {
                        e: 13520052e5,
                        s: 13332564e5
                    }, {
                        e: 13834548e5,
                        s: 13628916e5
                    }, {
                        e: 14149044e5,
                        s: 13943412e5
                    }]
                }, {
                    name: "America/Mazatlan",
                    rules: [{
                        e: 1225008e6,
                        s: 12074724e5
                    }, {
                        e: 12564576e5,
                        s: 1238922e6
                    }, {
                        e: 1288512e6,
                        s: 12703716e5
                    }, {
                        e: 13199616e5,
                        s: 13018212e5
                    }, {
                        e: 13514112e5,
                        s: 13332708e5
                    }, {
                        e: 13828608e5,
                        s: 13653252e5
                    }, {
                        e: 14143104e5,
                        s: 13967748e5
                    }]
                }, {
                    name: "America/Mexico_City",
                    rules: [{
                        e: 12250044e5,
                        s: 12074688e5
                    }, {
                        e: 1256454e6,
                        s: 12389184e5
                    }, {
                        e: 12885084e5,
                        s: 1270368e6
                    }, {
                        e: 1319958e6,
                        s: 13018176e5
                    }, {
                        e: 13514076e5,
                        s: 13332672e5
                    }, {
                        e: 13828572e5,
                        s: 13653216e5
                    }, {
                        e: 14143068e5,
                        s: 13967712e5
                    }]
                }, {
                    name: "America/Miquelon",
                    rules: [{
                        e: 12255984e5,
                        s: 12050388e5
                    }, {
                        e: 1257048e6,
                        s: 12364884e5
                    }, {
                        e: 12891024e5,
                        s: 12685428e5
                    }, {
                        e: 1320552e6,
                        s: 12999924e5
                    }, {
                        e: 13520016e5,
                        s: 1331442e6
                    }, {
                        e: 13834512e5,
                        s: 13628916e5
                    }, {
                        e: 14149008e5,
                        s: 13943412e5
                    }]
                }, {
                    name: "America/Santa_Isabel",
                    rules: [{
                        e: 12250116e5,
                        s: 1207476e6
                    }, {
                        e: 12564612e5,
                        s: 12389256e5
                    }, {
                        e: 12891204e5,
                        s: 12685608e5
                    }, {
                        e: 132057e7,
                        s: 13000104e5
                    }, {
                        e: 13520196e5,
                        s: 133146e7
                    }, {
                        e: 13834692e5,
                        s: 13629096e5
                    }, {
                        e: 14149188e5,
                        s: 13943592e5
                    }]
                }, {
                    name: "America/Santiago",
                    rules: [{
                        e: 1206846e6,
                        s: 1223784e6
                    }, {
                        e: 1237086e6,
                        s: 12552336e5
                    }, {
                        e: 127035e7,
                        s: 12866832e5
                    }, {
                        e: 13048236e5,
                        s: 13138992e5
                    }, {
                        e: 13356684e5,
                        s: 13465584e5
                    }, {
                        e: 1367118e6,
                        s: 13786128e5
                    }, {
                        e: 13985676e5,
                        s: 14100624e5
                    }]
                }, {
                    name: "America/Sao_Paulo",
                    rules: [{
                        e: 12032136e5,
                        s: 12243852e5
                    }, {
                        e: 12346632e5,
                        s: 12558348e5
                    }, {
                        e: 12667176e5,
                        s: 12872844e5
                    }, {
                        e: 12981672e5,
                        s: 1318734e6
                    }, {
                        e: 13302216e5,
                        s: 13507884e5
                    }, {
                        e: 13610664e5,
                        s: 1382238e6
                    }, {
                        e: 1392516e6,
                        s: 14136876e5
                    }]
                }, {
                    name: "Asia/Amman",
                    rules: [{
                        e: 1225404e6,
                        s: 12066552e5
                    }, {
                        e: 12568536e5,
                        s: 12381048e5
                    }, {
                        e: 12883032e5,
                        s: 12695544e5
                    }, {
                        e: 13197528e5,
                        s: 13016088e5
                    }, !1, !1, {
                        e: 14147064e5,
                        s: 13959576e5
                    }]
                }, {
                    name: "Asia/Damascus",
                    rules: [{
                        e: 12254868e5,
                        s: 120726e7
                    }, {
                        e: 125685e7,
                        s: 12381048e5
                    }, {
                        e: 12882996e5,
                        s: 12701592e5
                    }, {
                        e: 13197492e5,
                        s: 13016088e5
                    }, {
                        e: 13511988e5,
                        s: 13330584e5
                    }, {
                        e: 13826484e5,
                        s: 1364508e6
                    }, {
                        e: 14147028e5,
                        s: 13959576e5
                    }]
                }, {
                    name: "Asia/Dubai",
                    rules: [!1, !1, !1, !1, !1, !1, !1]
                }, {
                    name: "Asia/Gaza",
                    rules: [{
                        e: 12199572e5,
                        s: 12066552e5
                    }, {
                        e: 12520152e5,
                        s: 12381048e5
                    }, {
                        e: 1281474e6,
                        s: 126964086e4
                    }, {
                        e: 1312146e6,
                        s: 130160886e4
                    }, {
                        e: 13481784e5,
                        s: 13330584e5
                    }, {
                        e: 13802292e5,
                        s: 1364508e6
                    }, {
                        e: 1414098e6,
                        s: 13959576e5
                    }]
                }, {
                    name: "Asia/Irkutsk",
                    rules: [{
                        e: 12249576e5,
                        s: 12068136e5
                    }, {
                        e: 12564072e5,
                        s: 12382632e5
                    }, {
                        e: 12884616e5,
                        s: 12697128e5
                    }, !1, !1, !1, !1]
                }, {
                    name: "Asia/Jerusalem",
                    rules: [{
                        e: 12231612e5,
                        s: 12066624e5
                    }, {
                        e: 1254006e6,
                        s: 1238112e6
                    }, {
                        e: 1284246e6,
                        s: 12695616e5
                    }, {
                        e: 131751e7,
                        s: 1301616e6
                    }, {
                        e: 13483548e5,
                        s: 13330656e5
                    }, {
                        e: 13828284e5,
                        s: 13645152e5
                    }, {
                        e: 1414278e6,
                        s: 13959648e5
                    }]
                }, {
                    name: "Asia/Kamchatka",
                    rules: [{
                        e: 12249432e5,
                        s: 12067992e5
                    }, {
                        e: 12563928e5,
                        s: 12382488e5
                    }, {
                        e: 12884508e5,
                        s: 12696984e5
                    }, !1, !1, !1, !1]
                }, {
                    name: "Asia/Krasnoyarsk",
                    rules: [{
                        e: 12249612e5,
                        s: 12068172e5
                    }, {
                        e: 12564108e5,
                        s: 12382668e5
                    }, {
                        e: 12884652e5,
                        s: 12697164e5
                    }, !1, !1, !1, !1]
                }, {
                    name: "Asia/Omsk",
                    rules: [{
                        e: 12249648e5,
                        s: 12068208e5
                    }, {
                        e: 12564144e5,
                        s: 12382704e5
                    }, {
                        e: 12884688e5,
                        s: 126972e7
                    }, !1, !1, !1, !1]
                }, {
                    name: "Asia/Vladivostok",
                    rules: [{
                        e: 12249504e5,
                        s: 12068064e5
                    }, {
                        e: 12564e8,
                        s: 1238256e6
                    }, {
                        e: 12884544e5,
                        s: 12697056e5
                    }, !1, !1, !1, !1]
                }, {
                    name: "Asia/Yakutsk",
                    rules: [{
                        e: 1224954e6,
                        s: 120681e7
                    }, {
                        e: 12564036e5,
                        s: 12382596e5
                    }, {
                        e: 1288458e6,
                        s: 12697092e5
                    }, !1, !1, !1, !1]
                }, {
                    name: "Asia/Yekaterinburg",
                    rules: [{
                        e: 12249684e5,
                        s: 12068244e5
                    }, {
                        e: 1256418e6,
                        s: 1238274e6
                    }, {
                        e: 12884724e5,
                        s: 12697236e5
                    }, !1, !1, !1, !1]
                }, {
                    name: "Asia/Yerevan",
                    rules: [{
                        e: 1224972e6,
                        s: 1206828e6
                    }, {
                        e: 12564216e5,
                        s: 12382776e5
                    }, {
                        e: 1288476e6,
                        s: 12697272e5
                    }, {
                        e: 13199256e5,
                        s: 13011768e5
                    }, !1, !1, !1]
                }, {
                    name: "Australia/Lord_Howe",
                    rules: [{
                        e: 12074076e5,
                        s: 12231342e5
                    }, {
                        e: 12388572e5,
                        s: 12545838e5
                    }, {
                        e: 12703068e5,
                        s: 12860334e5
                    }, {
                        e: 13017564e5,
                        s: 1317483e6
                    }, {
                        e: 1333206e6,
                        s: 13495374e5
                    }, {
                        e: 13652604e5,
                        s: 1380987e6
                    }, {
                        e: 139671e7,
                        s: 14124366e5
                    }]
                }, {
                    name: "Australia/Perth",
                    rules: [{
                        e: 12068136e5,
                        s: 12249576e5
                    }, !1, !1, !1, !1, !1, !1]
                }, {
                    name: "Europe/Helsinki",
                    rules: [{
                        e: 12249828e5,
                        s: 12068388e5
                    }, {
                        e: 12564324e5,
                        s: 12382884e5
                    }, {
                        e: 12884868e5,
                        s: 1269738e6
                    }, {
                        e: 13199364e5,
                        s: 13011876e5
                    }, {
                        e: 1351386e6,
                        s: 13326372e5
                    }, {
                        e: 13828356e5,
                        s: 13646916e5
                    }, {
                        e: 14142852e5,
                        s: 13961412e5
                    }]
                }, {
                    name: "Europe/Minsk",
                    rules: [{
                        e: 12249792e5,
                        s: 12068352e5
                    }, {
                        e: 12564288e5,
                        s: 12382848e5
                    }, {
                        e: 12884832e5,
                        s: 12697344e5
                    }, !1, !1, !1, !1]
                }, {
                    name: "Europe/Moscow",
                    rules: [{
                        e: 12249756e5,
                        s: 12068316e5
                    }, {
                        e: 12564252e5,
                        s: 12382812e5
                    }, {
                        e: 12884796e5,
                        s: 12697308e5
                    }, !1, !1, !1, !1]
                }, {
                    name: "Pacific/Apia",
                    rules: [!1, !1, !1, {
                        e: 13017528e5,
                        s: 13168728e5
                    }, {
                        e: 13332024e5,
                        s: 13489272e5
                    }, {
                        e: 13652568e5,
                        s: 13803768e5
                    }, {
                        e: 13967064e5,
                        s: 14118264e5
                    }]
                }, {
                    name: "Pacific/Fiji",
                    rules: [!1, !1, {
                        e: 12696984e5,
                        s: 12878424e5
                    }, {
                        e: 13271544e5,
                        s: 1319292e6
                    }, {
                        e: 1358604e6,
                        s: 13507416e5
                    }, {
                        e: 139005e7,
                        s: 1382796e6
                    }, {
                        e: 14215032e5,
                        s: 14148504e5
                    }]
                }, {
                    name: "Europe/London",
                    rules: [{
                        e: 12249828e5,
                        s: 12068388e5
                    }, {
                        e: 12564324e5,
                        s: 12382884e5
                    }, {
                        e: 12884868e5,
                        s: 1269738e6
                    }, {
                        e: 13199364e5,
                        s: 13011876e5
                    }, {
                        e: 1351386e6,
                        s: 13326372e5
                    }, {
                        e: 13828356e5,
                        s: 13646916e5
                    }, {
                        e: 14142852e5,
                        s: 13961412e5
                    }]
                }, {
                    name: "Africa/Windhoek",
                    rules: [{
                        e: 12207492e5,
                        s: 120744e7
                    }, {
                        e: 12521988e5,
                        s: 12388896e5
                    }, {
                        e: 12836484e5,
                        s: 12703392e5
                    }, {
                        e: 1315098e6,
                        s: 13017888e5
                    }, {
                        e: 13465476e5,
                        s: 13332384e5
                    }, {
                        e: 13779972e5,
                        s: 13652928e5
                    }, {
                        e: 14100516e5,
                        s: 13967424e5
                    }]
                }]
            }, e.exports = i
        })),
        hn = Object.freeze({
            __proto__: null,
            TimezonePlugin: ye
        }),
        yn = {},
        wn = {},
        kn = Object.freeze({
            __proto__: null,
            EcommercePlugin: we,
            addItem: function(e, n) {
                void 0 === n && (n = Object.keys(yn)), n.forEach((function(n) {
                    wn[n] && wn[n].items.push(e)
                }))
            },
            addTrans: function(e, n) {
                void 0 === n && (n = Object.keys(yn)), n.forEach((function(n) {
                    wn[n] && (wn[n].transaction = e)
                }))
            },
            trackAddToCart: function(e, n) {
                void 0 === n && (n = Object.keys(yn)), W(n, yn, (function(n) {
                    var t = (n = n.core).track,
                        o = T({
                            event: {
                                schema: "iglu:com.snowplowanalytics.snowplow/add_to_cart/jsonschema/1-0-0",
                                data: S({
                                    sku: e.sku,
                                    quantity: e.quantity,
                                    name: e.name,
                                    category: e.category,
                                    unitPrice: e.unitPrice,
                                    currency: e.currency
                                })
                            }
                        });
                    t.call(n, o, e.context, e.timestamp)
                }))
            },
            trackRemoveFromCart: function(e, n) {
                void 0 === n && (n = Object.keys(yn)), W(n, yn, (function(n) {
                    var t = (n = n.core).track,
                        o = T({
                            event: {
                                schema: "iglu:com.snowplowanalytics.snowplow/remove_from_cart/jsonschema/1-0-0",
                                data: S({
                                    sku: e.sku,
                                    quantity: e.quantity,
                                    name: e.name,
                                    category: e.category,
                                    unitPrice: e.unitPrice,
                                    currency: e.currency
                                })
                            }
                        });
                    t.call(n, o, e.context, e.timestamp)
                }))
            },
            trackTrans: function(e) {
                void 0 === e && (e = Object.keys(yn)), W(e, yn, (function(e) {
                    var n = wn[e.id].transaction;
                    if (n) {
                        var t = e.core,
                            r = t.track,
                            a = n.orderId,
                            i = n.total,
                            c = n.affiliation,
                            s = n.tax,
                            u = n.shipping,
                            l = n.city,
                            f = n.state,
                            d = n.country,
                            m = n.currency,
                            p = o();
                        p.add("e", "tr"), p.add("tr_id", a), p.add("tr_af", c), p.add("tr_tt", i), p.add("tr_tx", s), p.add("tr_sh", u), p.add("tr_ci", l), p.add("tr_st", f), p.add("tr_co", d), p.add("tr_cu", m), r.call(t, p, n.context, n.timestamp)
                    }
                    for (n = 0; n < wn[e.id].items.length; n++) t = wn[e.id].items[n], a = (r = e.core).track, i = t.orderId, c = t.sku, s = t.price, u = t.name, l = t.category, f = t.quantity, d = t.currency, (m = o()).add("e", "ti"), m.add("ti_id", i), m.add("ti_sk", c), m.add("ti_nm", u), m.add("ti_ca", l), m.add("ti_pr", s), m.add("ti_qu", f), m.add("ti_cu", d), a.call(r, m, t.context, t.timestamp);
                    wn[e.id] = {
                        items: []
                    }
                }))
            }
        }),
        bn = {},
        An = {},
        Pn = Object.freeze({
            __proto__: null,
            EnhancedEcommercePlugin: ke,
            addEnhancedEcommerceActionContext: function(e, n) {
                void 0 === e && (e = {}), void 0 === n && (n = Object.keys(bn));
                var t = e.id,
                    o = e.affiliation,
                    r = e.revenue,
                    a = e.tax,
                    i = e.shipping,
                    c = e.coupon,
                    s = e.list,
                    u = e.step,
                    l = e.option,
                    f = e.currency;
                n.forEach((function(e) {
                    An[e] && An[e].push({
                        schema: "iglu:com.google.analytics.enhanced-ecommerce/actionFieldObject/jsonschema/1-0-0",
                        data: {
                            id: t,
                            affiliation: o,
                            revenue: U(r),
                            tax: U(a),
                            shipping: U(i),
                            coupon: c,
                            list: s,
                            step: M(u),
                            option: l,
                            currency: f
                        }
                    })
                }))
            },
            addEnhancedEcommerceImpressionContext: function(e, n) {
                void 0 === e && (e = {}), void 0 === n && (n = Object.keys(bn));
                var t = e.id,
                    o = e.name,
                    r = e.list,
                    a = e.brand,
                    i = e.category,
                    c = e.variant,
                    s = e.position,
                    u = e.price,
                    l = e.currency;
                n.forEach((function(e) {
                    An[e] && An[e].push({
                        schema: "iglu:com.google.analytics.enhanced-ecommerce/impressionFieldObject/jsonschema/1-0-0",
                        data: {
                            id: t,
                            name: o,
                            list: r,
                            brand: a,
                            category: i,
                            variant: c,
                            position: M(s),
                            price: U(u),
                            currency: l
                        }
                    })
                }))
            },
            addEnhancedEcommerceProductContext: function(e, n) {
                void 0 === e && (e = {}), void 0 === n && (n = Object.keys(bn));
                var t = e.id,
                    o = e.name,
                    r = e.list,
                    a = e.brand,
                    i = e.category,
                    c = e.variant,
                    s = e.price,
                    u = e.quantity,
                    l = e.coupon,
                    f = e.position,
                    d = e.currency;
                n.forEach((function(e) {
                    An[e] && An[e].push({
                        schema: "iglu:com.google.analytics.enhanced-ecommerce/productFieldObject/jsonschema/1-0-0",
                        data: {
                            id: t,
                            name: o,
                            list: r,
                            brand: a,
                            category: i,
                            variant: c,
                            price: U(s),
                            quantity: M(u),
                            coupon: l,
                            position: M(f),
                            currency: d
                        }
                    })
                }))
            },
            addEnhancedEcommercePromoContext: function(e, n) {
                void 0 === e && (e = {}), void 0 === n && (n = Object.keys(bn));
                var t = e.id,
                    o = e.name,
                    r = e.creative,
                    a = e.position,
                    i = e.currency;
                n.forEach((function(e) {
                    An[e] && An[e].push({
                        schema: "iglu:com.google.analytics.enhanced-ecommerce/promoFieldObject/jsonschema/1-0-0",
                        data: {
                            id: t,
                            name: o,
                            creative: r,
                            position: a,
                            currency: i
                        }
                    })
                }))
            },
            trackEnhancedEcommerceAction: function(e, n) {
                void 0 === e && (e = {}), void 0 === n && (n = Object.keys(bn)), W(n, bn, (function(n) {
                    var t = An[n.id].concat(e.context || []);
                    An[n.id].length = 0, n.core.track(T({
                        event: {
                            schema: "iglu:com.google.analytics.enhanced-ecommerce/action/jsonschema/1-0-0",
                            data: {
                                action: e.action
                            }
                        }
                    }), t, e.timestamp)
                }))
            }
        }),
        Tn = {},
        _n = Object.freeze({
            __proto__: null,
            AdTrackingPlugin: be,
            trackAdClick: function(e, n) {
                void 0 === n && (n = Object.keys(Tn)), W(n, Tn, (function(n) {
                    var t = (n = n.core).track,
                        o = {
                            schema: "iglu:com.snowplowanalytics.snowplow/ad_click/jsonschema/1-0-0",
                            data: S({
                                targetUrl: e.targetUrl,
                                clickId: e.clickId,
                                costModel: e.costModel,
                                cost: e.cost,
                                bannerId: e.bannerId,
                                zoneId: e.zoneId,
                                impressionId: e.impressionId,
                                advertiserId: e.advertiserId,
                                campaignId: e.campaignId
                            })
                        };
                    o = T({
                        event: o
                    }), t.call(n, o, e.context, e.timestamp)
                }))
            },
            trackAdConversion: function(e, n) {
                void 0 === n && (n = Object.keys(Tn)), W(n, Tn, (function(n) {
                    var t = (n = n.core).track,
                        o = {
                            schema: "iglu:com.snowplowanalytics.snowplow/ad_conversion/jsonschema/1-0-0",
                            data: S({
                                conversionId: e.conversionId,
                                costModel: e.costModel,
                                cost: e.cost,
                                category: e.category,
                                action: e.action,
                                property: e.property,
                                initialValue: e.initialValue,
                                advertiserId: e.advertiserId,
                                campaignId: e.campaignId
                            })
                        };
                    o = T({
                        event: o
                    }), t.call(n, o, e.context, e.timestamp)
                }))
            },
            trackAdImpression: function(e, n) {
                void 0 === n && (n = Object.keys(Tn)), W(n, Tn, (function(n) {
                    var t = (n = n.core).track,
                        o = {
                            schema: "iglu:com.snowplowanalytics.snowplow/ad_impression/jsonschema/1-0-0",
                            data: S({
                                impressionId: e.impressionId,
                                costModel: e.costModel,
                                cost: e.cost,
                                targetUrl: e.targetUrl,
                                bannerId: e.bannerId,
                                zoneId: e.zoneId,
                                advertiserId: e.advertiserId,
                                campaignId: e.campaignId
                            })
                        };
                    o = T({
                        event: o
                    }), t.call(n, o, e.context, e.timestamp)
                }))
            }
        }),
        Sn = {},
        Cn = Object.freeze({
            __proto__: null,
            SiteTrackingPlugin: Ae,
            trackSiteSearch: function(e, n) {
                void 0 === n && (n = Object.keys(Sn)), W(n, Sn, (function(n) {
                    var t = (n = n.core).track,
                        o = T({
                            event: {
                                schema: "iglu:com.snowplowanalytics.snowplow/site_search/jsonschema/1-0-0",
                                data: S({
                                    terms: e.terms,
                                    filters: e.filters,
                                    totalResults: e.totalResults,
                                    pageResults: e.pageResults
                                })
                            }
                        });
                    t.call(n, o, e.context, e.timestamp)
                }))
            },
            trackSocialInteraction: function(e, n) {
                void 0 === n && (n = Object.keys(Sn)), W(n, Sn, (function(n) {
                    var t = (n = n.core).track,
                        o = {
                            schema: "iglu:com.snowplowanalytics.snowplow/social_interaction/jsonschema/1-0-0",
                            data: S({
                                action: e.action,
                                network: e.network,
                                target: e.target
                            })
                        };
                    o = T({
                        event: o
                    }), t.call(n, o, e.context, e.timestamp)
                }))
            },
            trackTiming: function(e, n) {
                void 0 === n && (n = Object.keys(Sn));
                var t = e.category,
                    o = e.variable,
                    r = e.timing,
                    a = e.label,
                    i = e.context,
                    c = e.timestamp;
                W(n, Sn, (function(e) {
                    e.core.track(T({
                        event: {
                            schema: "iglu:com.snowplowanalytics.snowplow/timing/jsonschema/1-0-0",
                            data: {
                                category: t,
                                variable: o,
                                timing: r,
                                label: a
                            }
                        }
                    }), i, c)
                }))
            }
        }),
        On = window.GlobalSnowplowNamespace.shift(),
        xn = window[On];
    xn.q = function(n, t) {
        function o(e) {
            var n = e.split(":");
            return [e = n[0], n = 1 < n.length ? n[1].split(";") : void 0]
        }

        function r(e, n) {
            if (h[e]) try {
                h[e].apply(null, n)
            } catch (n) {
                Ue.error(e + " failed", n)
            } else Ue.warn(e + " is not an available function")
        }

        function a(e) {
            h = Pe(Pe({}, h), e)
        }

        function i(t) {
            if ("string" != typeof t[0] || "string" != typeof t[1] || void 0 !== t[2] && "object" != typeof t[2]) Ue.error("newTracker failed", Error("Invalid parameters"));
            else {
                var o = n + "_" + t[0],
                    r = t[2],
                    i = function(n) {
                        var t, o = null !== (t = null == n ? void 0 : n.contexts) && void 0 !== t ? t : {},
                            r = o.performanceTiming;
                        t = o.gaCookies, n = o.geolocation, o.optimizelyExperiments, o.optimizelyStates, o.optimizelyVariations, o.optimizelyVisitor, o.optimizelyAudiences, o.optimizelyDimensions, o.optimizelySummary;
                        var a = o.optimizelyXSummary;
                        o = o.clientHints;
                        var i = [];
                        return r && (r = e(Xe, ["PerformanceTimingPlugin"]), i.push([ne(), r])), a && (r = e(We, ["OptimizelyXPlugin"]), i.push([ee(), r])), o && (r = e(Ke, ["ClientHintsPlugin"]), i.push([$("object" == typeof o && o.includeHighEntropy), r])), t && (r = e(an, ["GaCookiesPlugin"]), i.push([ae(), r])), r = e(nn, ["ConsentPlugin"]), i.push([te(), r]), r = e(rn, ["GeolocationPlugin"]), i.push([oe(n), r]), r = e(un, ["LinkClickTrackingPlugin"]), i.push([ie(), r]), r = e(mn, ["FormTrackingPlugin"]), i.push([ge(), r]), r = e(gn, ["ErrorTrackingPlugin"]), i.push([ve(), r]), r = e(kn, ["EcommercePlugin"]), i.push([we(), r]), r = e(Pn, ["EnhancedEcommercePlugin"]), i.push([ke(), r]), r = e(_n, ["AdTrackingPlugin"]), i.push([be(), r]), r = e(Cn, ["SiteTrackingPlugin"]), i.push([Ae(), r]), r = e(hn, ["TimezonePlugin"]), i.push([ye(), r]), i
                    }(r);
                (o = X(o, t[0], "js-" + v, t[1], d, Pe(Pe({}, r), {
                    plugins: i.map((function(e) {
                        return e[0]
                    }))
                }))) ? (m.push(o.id), i.forEach((function(e) {
                    a(e[1])
                }))) : Ue.warn(t[0] + " already exists")
            }
        }

        function c(n, t) {
            function o(e) {
                Object.prototype.hasOwnProperty.call(p, e) && (u.clearTimeout(p[e].timeout), delete p[e], 0 === Object.keys(p).length && g.forEach((function(e) {
                    var n = e[1];
                    void 0 !== h[e[0]] && h[e[0]].length > n.length && Array.isArray(n[0]) && (n = [{}, n[0]]), r(e[0], n)
                })))
            }
            var i;
            if ("string" == typeof n[0] && f(n[1]) && (void 0 === n[2] || Array.isArray(n[2]))) {
                var c = n[0],
                    s = n[1],
                    d = n[2];
                (null === (i = n[3]) || void 0 === i || i) && (i = u.setTimeout((function() {
                    o(c)
                }), 5e3), p[c] = {
                    timeout: i
                }), (i = l.createElement("script")).setAttribute("src", c), i.setAttribute("async", "1"), D(i, "error", (function() {
                    o(c), Ue.warn("Failed to load plugin " + s[0] + " from " + c)
                }), !0), D(i, "load", (function() {
                    var n = s[1],
                        r = u[s[0]];
                    if (r && "object" == typeof r) {
                        var i = r[n];
                        n = e(r, ["symbol" == typeof n ? n : n + ""]), h.addPlugin.apply(null, [{
                            plugin: i.apply(null, d)
                        }, t]), a(n)
                    }
                    o(c)
                }), !0), l.head.appendChild(i)
            } else {
                if ("object" == typeof n[0] && "string" == typeof n[1] && (void 0 === n[2] || Array.isArray(n[2]))) {
                    var m = n[0],
                        v = n[1];
                    if (i = n[2], m) return n = m[v], m = e(m, ["symbol" == typeof v ? v : v + ""]), h.addPlugin.apply(null, [{
                        plugin: n.apply(null, i)
                    }, t]), void a(m)
                }
                Ue.warn("Failed to add Plugin: " + n[1])
            }
        }

        function s() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            for (t = 0; t < e.length; t += 1) {
                var a = e[t],
                    s = Array.prototype.shift.call(a);
                if (O(s)) try {
                    for (var u = {}, l = 0, f = Q(m, Ge); l < f.length; l++) {
                        var d = f[l];
                        u[d.id.replace(n + "_", "")] = d
                    }
                    s.apply(u, a)
                } catch (e) {
                    Ue.error("Tracker callback failed", e)
                } finally {
                    continue
                }
                s = (u = o(s))[0], u = u[1], "newTracker" === s ? i(a) : (u = u ? u.map((function(e) {
                    return n + "_" + e
                })) : m, "addPlugin" === s ? c(a, u) : (l = void 0, l = 0 < a.length ? [a[0], u] : void 0 !== h[s] && 2 === h[s].length ? [{}, u] : [u], 0 < Object.keys(p).length ? g.push([s, l]) : r(s, l)))
            }
        }
        for (var u = window, l = document, d = Z(), m = [], p = {}, g = [], v = "3.1.6", h = e(Ye, ["version"]), y = 0; y < t.length; y++) s(t[y]);
        return {
            push: s
        }
    }(On, xn.q)
}();
//# sourceMappingURL=sp.js.map