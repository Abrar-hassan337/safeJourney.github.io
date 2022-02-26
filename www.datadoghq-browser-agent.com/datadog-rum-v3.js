! function() {
    "use strict";
    var t = function() {
        return (t = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }).apply(this, arguments)
    };

    function e(t, e) {
        var n, r, i, o, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(o) {
            return function(s) {
                return function(o) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                        switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < i[1]) {
                                    a.label = i[1], i = o;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(o);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = e.call(t, a)
                    } catch (t) {
                        o = [6, t], r = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    }

    function n() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
        var r = Array(t),
            i = 0;
        for (e = 0; e < n; e++)
            for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
        return r
    }
    var r = {
            log: console.log.bind(console),
            warn: console.warn.bind(console),
            error: console.error.bind(console)
        },
        i = "?";

    function o(t, e) {
        var n, r = void 0 === e ? 0 : +e;
        try {
            if (n = function(t) {
                    var e = u(t, "stacktrace");
                    if (!e) return;
                    for (var n, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, o = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, a = e.split("\n"), s = [], c = 0; c < a.length; c += 2) {
                        var l = void 0;
                        r.exec(a[c]) ? l = {
                            args: [],
                            column: void 0,
                            func: (n = r.exec(a[c]))[3],
                            line: +n[1],
                            url: n[2]
                        } : o.exec(a[c]) && (l = {
                            args: (n = o.exec(a[c]))[5] ? n[5].split(",") : [],
                            column: +n[2],
                            func: n[3] || n[4],
                            line: +n[1],
                            url: n[6]
                        }), l && (!l.func && l.line && (l.func = i), l.context = [a[c + 1]], s.push(l))
                    }
                    if (!s.length) return;
                    return {
                        stack: s,
                        message: u(t, "message"),
                        name: u(t, "name")
                    }
                }(t)) return n
        } catch (t) {
            if (a) throw t
        }
        try {
            if (n = function(t) {
                    var e = u(t, "stack");
                    if (!e) return;
                    for (var n, r, o, a, s = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, c = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, f = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, d = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, p = /\((\S*)(?::(\d+))(?::(\d+))\)/, h = e.split("\n"), v = [], m = 0, _ = h.length; m < _; m += 1) {
                        if (s.exec(h[m])) {
                            var g = (o = s.exec(h[m]))[2] && 0 === o[2].indexOf("native");
                            n = o[2] && 0 === o[2].indexOf("eval"), r = p.exec(o[2]), n && r && (o[2] = r[1], o[3] = r[2], o[4] = r[3]), a = {
                                args: g ? [o[2]] : [],
                                column: o[4] ? +o[4] : void 0,
                                func: o[1] || i,
                                line: o[3] ? +o[3] : void 0,
                                url: g ? void 0 : o[2]
                            }
                        } else if (f.exec(h[m])) a = {
                            args: [],
                            column: (o = f.exec(h[m]))[4] ? +o[4] : void 0,
                            func: o[1] || i,
                            line: +o[3],
                            url: o[2]
                        };
                        else {
                            if (!c.exec(h[m])) continue;
                            n = (o = c.exec(h[m]))[3] && o[3].indexOf(" > eval") > -1, r = d.exec(o[3]), n && r ? (o[3] = r[1], o[4] = r[2], o[5] = void 0) : 0 !== m || o[5] || l(t.columnNumber) || (v[0].column = t.columnNumber + 1), a = {
                                args: o[2] ? o[2].split(",") : [],
                                column: o[5] ? +o[5] : void 0,
                                func: o[1] || i,
                                line: o[4] ? +o[4] : void 0,
                                url: o[3]
                            }
                        }!a.func && a.line && (a.func = i), v.push(a)
                    }
                    if (!v.length) return;
                    return {
                        stack: v,
                        message: u(t, "message"),
                        name: u(t, "name")
                    }
                }(t)) return n
        } catch (t) {
            if (a) throw t
        }
        try {
            if (n = function(t) {
                    var e = u(t, "message");
                    if (!e) return;
                    var n = e.split("\n");
                    if (n.length < 4) return;
                    var r, o = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                        a = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                        s = /^\s*Line (\d+) of function script\s*$/i,
                        l = [],
                        f = window && window.document && window.document.getElementsByTagName("script"),
                        d = [];
                    for (var p in f) c(f, p) && !f[p].src && d.push(f[p]);
                    for (var h = 2; h < n.length; h += 2) {
                        var v = void 0;
                        if (o.exec(n[h])) v = {
                            args: [],
                            column: void 0,
                            func: (r = o.exec(n[h]))[3],
                            line: +r[1],
                            url: r[2]
                        };
                        else if (a.exec(n[h])) v = {
                            args: [],
                            column: void 0,
                            func: (r = a.exec(n[h]))[4],
                            line: +r[1],
                            url: r[3]
                        };
                        else if (s.exec(n[h])) {
                            r = s.exec(n[h]), v = {
                                url: window.location.href.replace(/#.*$/, ""),
                                args: [],
                                column: void 0,
                                func: "",
                                line: +r[1]
                            }
                        }
                        v && (v.func || (v.func = i), v.context = [n[h + 1]], l.push(v))
                    }
                    if (!l.length) return;
                    return {
                        stack: l,
                        message: n[0],
                        name: u(t, "name")
                    }
                }(t)) return n
        } catch (t) {
            if (a) throw t
        }
        try {
            if (n = s(t, r + 1)) return n
        } catch (t) {
            if (a) throw t
        }
        return {
            message: u(t, "message"),
            name: u(t, "name"),
            stack: []
        }
    }
    var a = !1;

    function s(t, e) {
        for (var n, r, a = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, c = [], l = {}, f = !1, d = s.caller; d && !f; d = d.caller) d !== o && (r = {
            args: [],
            column: void 0,
            func: i,
            line: void 0,
            url: void 0
        }, n = a.exec(d.toString()), d.name ? r.func = d.name : n && (r.func = n[1]), void 0 === r.func && (r.func = n ? n.input.substring(0, n.input.indexOf("{")) : void 0), l[d.toString()] ? f = !0 : l[d.toString()] = !0, c.push(r));
        e && c.splice(0, e);
        var p = {
            stack: c,
            message: u(t, "message"),
            name: u(t, "name")
        };
        return function(t, e, n) {
            var r = {
                url: e,
                line: n ? +n : void 0
            };
            if (r.url && r.line) {
                t.incomplete = !1;
                var i = t.stack;
                if (i.length > 0 && i[0].url === r.url) {
                    if (i[0].line === r.line) return !1;
                    if (!i[0].line && i[0].func === r.func) return i[0].line = r.line, i[0].context = r.context, !1
                }
                return i.unshift(r), t.partial = !0, !0
            }
            t.incomplete = !0
        }(p, u(t, "sourceURL") || u(t, "fileName"), u(t, "line") || u(t, "lineNumber")), p
    }

    function u(t, e) {
        if ("object" == typeof t && t && e in t) {
            var n = t[e];
            return "string" == typeof n ? n : void 0
        }
    }

    function c(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function l(t) {
        return void 0 === t
    }
    var f, d, p = 1e3,
        h = 6e4;

    function v(t, e, n) {
        var r, i, o = !n || void 0 === n.leading || n.leading,
            a = !n || void 0 === n.trailing || n.trailing,
            s = !1;
        return {
            throttled: function() {
                for (var n = [], u = 0; u < arguments.length; u++) n[u] = arguments[u];
                s ? r = n : (o ? t.apply(void 0, n) : r = n, s = !0, i = setTimeout((function() {
                    a && r && t.apply(void 0, r), s = !1, r = void 0
                }), e))
            },
            cancel: function() {
                clearTimeout(i), s = !1, r = void 0
            }
        }
    }

    function m(t) {
        return t ? (parseInt(t, 10) ^ 16 * Math.random() >> parseInt(t, 10) / 4).toString(16) : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, m)
    }

    function _(t) {
        return 0 !== t && 100 * Math.random() <= t
    }

    function g(t, e) {
        return +t.toFixed(e)
    }

    function y() {}

    function b(t, e, n) {
        if (null == t) return JSON.stringify(t);
        var r = [!1, void 0];
        E(t) && (r = [!0, t.toJSON], delete t.toJSON);
        var i, o, a = [!1, void 0];
        "object" == typeof t && E(i = Object.getPrototypeOf(t)) && (a = [!0, i.toJSON], delete i.toJSON);
        try {
            o = JSON.stringify(t, e, n)
        } catch (t) {
            o = "<error: unable to serialize object>"
        } finally {
            r[0] && (t.toJSON = r[1]), a[0] && (i.toJSON = a[1])
        }
        return o
    }

    function E(t) {
        return "object" == typeof t && null !== t && Object.prototype.hasOwnProperty.call(t, "toJSON")
    }

    function w(t, e) {
        return -1 !== t.indexOf(e)
    }

    function T(t) {
        return S(t) && t >= 0 && t <= 100
    }

    function S(t) {
        return "number" == typeof t
    }

    function C(t) {
        return Object.keys(t).map((function(e) {
            return t[e]
        }))
    }

    function R(t) {
        return Object.keys(t).map((function(e) {
            return [e, t[e]]
        }))
    }

    function A(t) {
        return 0 === Object.keys(t).length
    }

    function O(t) {
        if (t.origin) return t.origin;
        var e = t.host.replace(/(:80|:443)$/, "");
        return t.protocol + "//" + e
    }

    function k(t, e) {
        var n = new RegExp("(?:^|;)\\s*" + e + "\\s*=\\s*([^;]+)").exec(t);
        return n ? n[1] : void 0
    }

    function I(t, e, n, r) {
        return N(t, [e], n, r)
    }

    function N(t, e, n, r) {
        var i = void 0 === r ? {} : r,
            o = i.once,
            a = i.capture,
            s = i.passive,
            u = at(o ? function(t) {
                l(), n(t)
            } : n),
            c = s ? {
                capture: a,
                passive: s
            } : a;
        e.forEach((function(e) {
            return t.addEventListener(e, u, c)
        }));
        var l = function() {
            return e.forEach((function(e) {
                return t.removeEventListener(e, u, c)
            }))
        };
        return {
            stop: l
        }
    }

    function x(t, e) {
        document.readyState === t || "complete" === document.readyState ? e() : I(window, "complete" === t ? "load" : "DOMContentLoaded", e, {
            once: !0
        })
    }

    function L(t) {
        return null === t ? "null" : Array.isArray(t) ? "array" : typeof t
    }

    function D(t, e, n) {
        if (void 0 === n && (n = function() {
                if ("undefined" != typeof WeakSet) {
                    var t = new WeakSet;
                    return {
                        hasAlreadyBeenSeen: function(e) {
                            var n = t.has(e);
                            return n || t.add(e), n
                        }
                    }
                }
                var e = [];
                return {
                    hasAlreadyBeenSeen: function(t) {
                        var n = e.indexOf(t) >= 0;
                        return n || e.push(t), n
                    }
                }
            }()), void 0 === e) return t;
        if ("object" != typeof e || null === e) return e;
        if (e instanceof Date) return new Date(e.getTime());
        if (e instanceof RegExp) {
            var r = e.flags || [e.global ? "g" : "", e.ignoreCase ? "i" : "", e.multiline ? "m" : "", e.sticky ? "y" : "", e.unicode ? "u" : ""].join("");
            return new RegExp(e.source, r)
        }
        if (!n.hasAlreadyBeenSeen(e)) {
            if (Array.isArray(e)) {
                for (var i = Array.isArray(t) ? t : [], o = 0; o < e.length; ++o) i[o] = D(i[o], e[o], n);
                return i
            }
            var a = "object" === L(t) ? t : {};
            for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (a[s] = D(a[s], e[s], n));
            return a
        }
    }

    function M(t) {
        return D(void 0, t)
    }

    function U() {
        for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        for (var r = 0, i = e; r < i.length; r++) {
            var o = i[r];
            null != o && (t = D(t, o))
        }
        return t
    }! function(t) {
        t.DOCUMENT = "document", t.XHR = "xhr", t.BEACON = "beacon", t.FETCH = "fetch", t.CSS = "css", t.JS = "js", t.IMAGE = "image", t.FONT = "font", t.MEDIA = "media", t.OTHER = "other"
    }(f || (f = {})),
    function(t) {
        t.FETCH = "fetch", t.XHR = "xhr"
    }(d || (d = {}));
    var z, P, B = "agent",
        F = "console",
        V = "custom",
        H = "source";

    function W(t, e, n, r) {
        return t && (void 0 !== t.message || e instanceof Error) ? {
            message: t.message || "Empty message",
            stack: j(t),
            handlingStack: r,
            type: t.name
        } : {
            message: n + " " + b(e),
            stack: "No stack, consider using an instance of Error",
            handlingStack: r,
            type: t && t.name
        }
    }

    function j(t) {
        var e = Z(t);
        return t.stack.forEach((function(t) {
            var n = "?" === t.func ? "<anonymous>" : t.func,
                r = t.args && t.args.length > 0 ? "(" + t.args.join(", ") + ")" : "",
                i = t.line ? ":" + t.line : "",
                o = t.line && t.column ? ":" + t.column : "";
            e += "\n  at " + n + r + " @ " + t.url + i + o
        })), e
    }

    function Z(t) {
        return (t.name || "Error") + ": " + t.message
    }

    function Y() {
        var t, e = new Error;
        if (!e.stack) try {
            throw e
        } catch (t) {}
        return st((function() {
            var n = o(e);
            n.stack = n.stack.slice(2), t = j(n)
        })), t
    }

    function q(t) {
        return !!P && P.has(t)
    }

    function K() {
        var t = q("event-bridge") ? window.DatadogEventBridge : null;
        if (t) return {
            getAllowedWebViewHosts: function() {
                return JSON.parse(t.getAllowedWebViewHosts())
            },
            send: function(e, n) {
                t.send(JSON.stringify({
                    eventType: e,
                    event: n
                }))
            }
        }
    }

    function G() {
        var t = K();
        return !!t && w(t.getAllowedWebViewHosts(), window.location.hostname)
    }! function(t) {
        t.HANDLED = "handled", t.UNHANDLED = "unhandled"
    }(z || (z = {}));
    var X, $ = /[^\u0000-\u007F]/,
        J = function() {
            function t(t, e, n, r, i, o) {
                void 0 === o && (o = y), this.request = t, this.maxSize = e, this.bytesLimit = n, this.maxMessageSize = r, this.flushTimeout = i, this.beforeUnloadCallback = o, this.pushOnlyBuffer = [], this.upsertBuffer = {}, this.bufferBytesSize = 0, this.bufferMessageCount = 0, this.flushOnVisibilityHidden(), this.flushPeriodically()
            }
            return t.prototype.add = function(t) {
                this.addOrUpdate(t)
            }, t.prototype.upsert = function(t, e) {
                this.addOrUpdate(t, e)
            }, t.prototype.flush = function(t) {
                if (0 !== this.bufferMessageCount) {
                    var e = n(this.pushOnlyBuffer, C(this.upsertBuffer));
                    this.request.send(e.join("\n"), this.bufferBytesSize, t), this.pushOnlyBuffer = [], this.upsertBuffer = {}, this.bufferBytesSize = 0, this.bufferMessageCount = 0
                }
            }, t.prototype.sizeInBytes = function(t) {
                return $.test(t) ? void 0 !== window.TextEncoder ? (new TextEncoder).encode(t).length : new Blob([t]).size : t.length
            }, t.prototype.addOrUpdate = function(t, e) {
                var n = this.process(t),
                    i = n.processedMessage,
                    o = n.messageBytesSize;
                o >= this.maxMessageSize ? r.warn("Discarded a message whose size was bigger than the maximum allowed size " + this.maxMessageSize + "KB.") : (this.hasMessageFor(e) && this.remove(e), this.willReachedBytesLimitWith(o) && this.flush("willReachedBytesLimitWith"), this.push(i, o, e), this.isFull() && this.flush("isFull"))
            }, t.prototype.process = function(t) {
                var e = b(t);
                return {
                    processedMessage: e,
                    messageBytesSize: this.sizeInBytes(e)
                }
            }, t.prototype.push = function(t, e, n) {
                this.bufferMessageCount > 0 && (this.bufferBytesSize += 1), void 0 !== n ? this.upsertBuffer[n] = t : this.pushOnlyBuffer.push(t), this.bufferBytesSize += e, this.bufferMessageCount += 1
            }, t.prototype.remove = function(t) {
                var e = this.upsertBuffer[t];
                delete this.upsertBuffer[t];
                var n = this.sizeInBytes(e);
                this.bufferBytesSize -= n, this.bufferMessageCount -= 1, this.bufferMessageCount > 0 && (this.bufferBytesSize -= 1)
            }, t.prototype.hasMessageFor = function(t) {
                return void 0 !== t && void 0 !== this.upsertBuffer[t]
            }, t.prototype.willReachedBytesLimitWith = function(t) {
                return this.bufferBytesSize + t + 1 >= this.bytesLimit
            }, t.prototype.isFull = function() {
                return this.bufferMessageCount === this.maxSize || this.bufferBytesSize >= this.bytesLimit
            }, t.prototype.flushPeriodically = function() {
                var t = this;
                setTimeout(at((function() {
                    t.flush("flushPeriodically"), t.flushPeriodically()
                })), this.flushTimeout)
            }, t.prototype.flushOnVisibilityHidden = function() {
                var t = this;
                navigator.sendBeacon && (I(window, "beforeunload", this.beforeUnloadCallback), I(document, "visibilitychange", (function() {
                    "hidden" === document.visibilityState && t.flush("visibilitychange")
                })), I(window, "beforeunload", (function() {
                    return t.flush("beforeunload")
                })))
            }, t
        }(),
        Q = !1,
        tt = function() {
            function t(t, e) {
                this.endpointBuilder = t, this.bytesLimit = e
            }
            return t.prototype.send = function(t, e, n) {
                var r = this.endpointBuilder.build(),
                    i = !!navigator.sendBeacon && e < this.bytesLimit;
                if (i) try {
                    if (navigator.sendBeacon(r, t)) return
                } catch (t) {
                    ! function(t) {
                        et || (et = !0, ct(t))
                    }(t)
                }
                var o = new XMLHttpRequest;
                o.addEventListener("loadend", at((function(t) {
                    return function(t) {
                        var o = null == t ? void 0 : t.currentTarget;
                        o.status >= 200 && o.status < 300 || Q || (Q = !0, ut("XHR fallback failed", {
                            on_line: navigator.onLine,
                            size: e,
                            url: r,
                            try_beacon: i,
                            flush_reason: n,
                            event: {
                                is_trusted: t.isTrusted,
                                total: t.total,
                                loaded: t.loaded
                            },
                            request: {
                                status: o.status,
                                ready_state: o.readyState,
                                response_text: o.responseText.slice(0, 512)
                            }
                        }))
                    }(t)
                }))), o.open("POST", r, !0), o.send(t)
            }, t
        }(),
        et = !1;
    ! function(t) {
        t.info = "info", t.error = "error"
    }(X || (X = {}));
    var nt, rt, it = {
        maxMessagesPerPage: 0,
        sentMessageCount: 0
    };

    function ot(t) {
        var e;
        if (G()) {
            var n = K();
            nt = function(t) {
                return n.send("internal_log", i(t))
            }
        } else if (t.internalMonitoringEndpointBuilder) {
            var r = function(t) {
                var e, n = r(t.internalMonitoringEndpointBuilder);

                function r(e) {
                    return new J(new tt(e, t.batchBytesLimit), t.maxBatchSize, t.batchBytesLimit, t.maxMessageSize, t.flushTimeout)
                }
                return void 0 !== t.replica && (e = r(t.replica.internalMonitoringEndpointBuilder)), {
                    add: function(t) {
                        n.add(t), e && e.add(t)
                    }
                }
            }(t);
            nt = function(t) {
                return r.add(i(t))
            }
        }

        function i(t) {
            return U({
                date: (new Date).getTime()
            }, void 0 !== e ? e() : {}, t)
        }
        return function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            e.forEach((function(e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }))
        }(it, {
            maxMessagesPerPage: t.maxInternalMonitoringMessagesPerPage,
            sentMessageCount: 0
        }), {
            setExternalContextProvider: function(t) {
                e = t
            }
        }
    }

    function at(t) {
        return function() {
            return st(t, this, arguments)
        }
    }

    function st(t, e, n) {
        try {
            return t.apply(e, n)
        } catch (t) {
            dt(t);
            try {
                ct(t)
            } catch (t) {
                dt(t)
            }
        }
    }

    function ut(e, n) {
        ! function(t, e) {
            it.debugMode && r.log("[MONITORING MESSAGE]", t, e)
        }(e, n), lt(t(t({
            message: e
        }, n), {
            status: X.info
        }))
    }

    function ct(e) {
        lt(t(t({}, function(t) {
            if (t instanceof Error) {
                var e = o(t);
                return {
                    error: {
                        kind: e.name,
                        stack: j(e)
                    },
                    message: e.message
                }
            }
            return {
                error: {
                    stack: "Not an instance of error"
                },
                message: "Uncaught " + b(t)
            }
        }(e)), {
            status: X.error
        }))
    }

    function lt(t) {
        nt && it.sentMessageCount < it.maxMessagesPerPage && (it.sentMessageCount += 1, nt(t))
    }

    function ft(t) {
        it.debugMode = t
    }

    function dt(t) {
        it.debugMode && r.error("[INTERNAL ERROR]", t)
    }

    function pt(t, e) {
        return function() {
            for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
            try {
                return t.apply(void 0, n)
            } catch (t) {
                r.error(e, t)
            }
        }
    }! function(t) {
        t.RELEASE = "release", t.STAGING = "staging", t.CANARY = "canary", t.E2E_TEST = "e2e-test"
    }(rt || (rt = {}));
    var ht, vt = function() {
        function t(t) {
            void 0 === t && (t = 1e4), this.limit = t, this.buffer = []
        }
        return t.prototype.add = function(t) {
            this.buffer.push(t) > this.limit && this.buffer.splice(0, 1)
        }, t.prototype.drain = function() {
            this.buffer.forEach((function(t) {
                return t()
            })), this.buffer.length = 0
        }, t
    }();

    function mt(t) {
        return {
            relative: t,
            timeStamp: _t(t)
        }
    }

    function _t(t) {
        var e = Date.now() - performance.now();
        return e > St() ? Math.round(e + t) : function(t) {
            return Math.round(St() + t)
        }(t)
    }

    function gt(t) {
        return S(t) ? g(1e6 * t, 0) : t
    }

    function yt() {
        return Date.now()
    }

    function bt() {
        return performance.now()
    }

    function Et() {
        return {
            relative: bt(),
            timeStamp: yt()
        }
    }

    function wt() {
        return {
            relative: 0,
            timeStamp: St()
        }
    }

    function Tt(t, e) {
        return e - t
    }

    function St() {
        return void 0 === ht && (ht = performance.timing.navigationStart), ht
    }
    var Ct, Rt;

    function At(t, e, n, r) {
        var i = new Date;
        i.setTime(i.getTime() + n);
        var o = "expires=" + i.toUTCString(),
            a = r && r.crossSite ? "none" : "strict",
            s = r && r.domain ? ";domain=" + r.domain : "",
            u = r && r.secure ? ";secure" : "";
        document.cookie = t + "=" + e + ";" + o + ";path=/;samesite=" + a + s + u
    }

    function Ot(t) {
        return k(document.cookie, t)
    }

    function kt(t, e) {
        At(t, "", 0, e)
    }

    function It(t) {
        return xt(t, O(window.location)).href
    }

    function Nt(t) {
        return O(xt(t))
    }

    function xt(t, e) {
        if (function() {
                if (void 0 !== Rt) return Rt;
                try {
                    var t = new URL("http://test/path");
                    return Rt = "http://test/path" === t.href
                } catch (t) {
                    Rt = !1
                }
                return Rt
            }()) return void 0 !== e ? new URL(t, e) : new URL(t);
        if (void 0 === e && !/:/.test(t)) throw new Error("Invalid URL: '" + t + "'");
        var n = document,
            r = n.createElement("a");
        if (void 0 !== e) {
            var i = (n = document.implementation.createHTMLDocument("")).createElement("base");
            i.href = e, n.head.appendChild(i), n.body.appendChild(r)
        }
        return r.href = t, r
    }
    var Lt = {
            alternate: {
                logs: "logs",
                rum: "rum",
                sessionReplay: "session-replay"
            },
            classic: {
                logs: "browser",
                rum: "rum",
                sessionReplay: void 0
            }
        },
        Dt = {
            logs: "logs",
            rum: "rum",
            sessionReplay: "replay"
        },
        Mt = "datadoghq.com",
        Ut = "datadoghq.eu",
        zt = [Mt, Ut],
        Pt = [Mt, "us3.datadoghq.com", Ut, "ddog-gov.com"];

    function Bt(t, e, n, r) {
        var i = e.sdkVersion,
            o = t.proxyUrl && It(t.proxyUrl),
            a = t.site,
            s = void 0 === a ? Mt : a,
            u = t.clientToken,
            c = t.env,
            l = t.proxyHost,
            f = t.service,
            d = t.version,
            p = t.intakeApiVersion,
            h = t.useAlternateIntakeDomains,
            v = function(t) {
                if (function(t) {
                        return h || !w(zt, s) || "sessionReplay" === t
                    }(t)) {
                    var e = Lt.alternate[t],
                        n = s.split("."),
                        r = n.pop(),
                        i = n.join("-") + "." + r;
                    return e + ".browser-intake-" + i
                }
                return Lt.classic[t] + "-http-intake.logs." + s
            }(n),
            _ = function(t) {
                return y(t) ? "/api/v2/" + Dt[t] : "/v1/input/" + u
            }(n);

        function g() {
            var t = function(t, e) {
                    var n = "ddsource=" + (e || "browser") + "&ddtags=" + encodeURIComponent("sdk_version:" + i + (c ? ",env:" + c : "") + (f ? ",service:" + f : "") + (d ? ",version:" + d : ""));
                    y(t) && (n += "&dd-api-key=" + u + "&dd-evp-origin-version=" + encodeURIComponent(i) + "&dd-evp-origin=browser&dd-request-id=" + m());
                    "rum" === t && (n += "&batch_time=" + yt());
                    return n
                }(n, r),
                e = "https://" + v + _ + "?" + t;
            return o ? o + "?ddforward=" + encodeURIComponent(e) : l ? "https://" + l + _ + "?ddhost=" + v + "&" + t : e
        }

        function y(t) {
            return 2 === p || !w(Pt, s) || "sessionReplay" === t
        }
        return {
            build: g,
            buildIntakeUrl: function() {
                if (o) return o + "?ddforward";
                var t = g();
                return t.slice(0, t.indexOf("?"))
            }
        }
    }

    function Ft(e, n) {
        var r = function(e, n) {
                if (n.buildMode === rt.E2E_TEST) {
                    var r = function(t) {
                        return {
                            build: function() {
                                return t
                            },
                            buildIntakeUrl: function() {
                                return t
                            }
                        }
                    };
                    return {
                        logsEndpointBuilder: r("<<< E2E LOGS ENDPOINT >>>"),
                        rumEndpointBuilder: r("<<< E2E RUM ENDPOINT >>>"),
                        sessionReplayEndpointBuilder: r("<<< E2E SESSION REPLAY ENDPOINT >>>"),
                        internalMonitoringEndpointBuilder: r("<<< E2E INTERNAL MONITORING ENDPOINT >>>")
                    }
                }
                var i = {
                    logsEndpointBuilder: Bt(e, n, "logs"),
                    rumEndpointBuilder: Bt(e, n, "rum"),
                    sessionReplayEndpointBuilder: Bt(e, n, "sessionReplay")
                };
                if (e.internalMonitoringApiKey) return t(t({}, i), {
                    internalMonitoringEndpointBuilder: Bt(t(t({}, e), {
                        clientToken: e.internalMonitoringApiKey
                    }), n, "logs", "browser-agent-internal-monitoring")
                });
                return i
            }(e, n),
            i = C(r).map((function(t) {
                return t.buildIntakeUrl()
            })),
            o = function(e, n, r) {
                if (n.buildMode !== rt.STAGING || void 0 === e.replica) return;
                var i = t(t({}, e), {
                        site: Mt,
                        applicationId: e.replica.applicationId,
                        clientToken: e.replica.clientToken,
                        useAlternateIntakeDomains: !0,
                        intakeApiVersion: 2
                    }),
                    o = {
                        logsEndpointBuilder: Bt(i, n, "logs"),
                        rumEndpointBuilder: Bt(i, n, "rum"),
                        internalMonitoringEndpointBuilder: Bt(i, n, "logs", "browser-agent-internal-monitoring")
                    };
                return r.push.apply(r, C(o).map((function(t) {
                    return t.buildIntakeUrl()
                }))), t({
                    applicationId: e.replica.applicationId
                }, o)
            }(e, n, i);
        return t(t({
            isIntakeUrl: function(t) {
                return i.some((function(e) {
                    return 0 === t.indexOf(e)
                }))
            }
        }, r), {
            replica: o
        })
    }
    var Vt, Ht, Wt, jt = {
        ALLOW: "allow",
        MASK: "mask",
        MASK_USER_INPUT: "mask-user-input"
    };

    function Zt(e, n) {
        var i;
        if (e && e.clientToken) {
            var o;
            if (void 0 === e.sampleRate || T(e.sampleRate)) return o = e.enableExperimentalFeatures, Array.isArray(o) && (P || (P = new Set(o)), o.filter((function(t) {
                return "string" == typeof t
            })).forEach((function(t) {
                P.add(t)
            }))), t(t({}, Ft(e, n)), {
                beforeSend: e.beforeSend && pt(e.beforeSend, "beforeSend threw an error:"),
                cookieOptions: Yt(e),
                sampleRate: null !== (i = e.sampleRate) && void 0 !== i ? i : 100,
                service: e.service,
                silentMultipleInit: !!e.silentMultipleInit,
                batchBytesLimit: 16384,
                maxErrorsPerMinute: 3e3,
                maxInternalMonitoringMessagesPerPage: 15,
                requestErrorResponseLengthLimit: 32768,
                flushTimeout: 3e4,
                maxBatchSize: 50,
                maxMessageSize: 262144
            });
            r.error("Sample Rate should be a number between 0 and 100")
        } else r.error("Client Token is not configured, we will not send any data.")
    }

    function Yt(t) {
        var e = {};
        return e.secure = function(t) {
            return !!t.useSecureSessionCookie || !!t.useCrossSiteSessionCookie
        }(t), e.crossSite = !!t.useCrossSiteSessionCookie, t.trackSessionAcrossSubdomains && (e.domain = function() {
            if (void 0 === Ct) {
                for (var t = "dd_site_test_" + m(), e = window.location.hostname.split("."), n = e.pop(); e.length && !Ot(t);) n = e.pop() + "." + n, At(t, "test", p, {
                    domain: n
                });
                kt(t, {
                    domain: n
                }), Ct = n
            }
            return Ct
        }()), e
    }! function(t) {
        t.ACTION = "action", t.ERROR = "error", t.LONG_TASK = "long_task", t.VIEW = "view", t.RESOURCE = "resource"
    }(Vt || (Vt = {})),
    function(t) {
        t.INITIAL_LOAD = "initial_load", t.ROUTE_CHANGE = "route_change"
    }(Ht || (Ht = {})),
    function(t) {
        t.CLICK = "click", t.CUSTOM = "custom"
    }(Wt || (Wt = {}));

    function qt() {
        return Boolean(window._DATADOG_SYNTHETICS_INJECTS_RUM || Ot("datadog-synthetics-injects-rum"))
    }
    var Kt = {
        buildMode: "release",
        sdkVersion: "3.11.0"
    };
    var Gt, Xt = function() {
        function t(t) {
            this.onFirstSubscribe = t, this.observers = []
        }
        return t.prototype.subscribe = function(t) {
            var e = this;
            return !this.observers.length && this.onFirstSubscribe && (this.onLastUnsubscribe = this.onFirstSubscribe() || void 0), this.observers.push(t), {
                unsubscribe: function() {
                    e.observers = e.observers.filter((function(e) {
                        return t !== e
                    })), !e.observers.length && e.onLastUnsubscribe && e.onLastUnsubscribe()
                }
            }
        }, t.prototype.notify = function(t) {
            this.observers.forEach((function(e) {
                return e(t)
            }))
        }, t
    }();

    function $t() {
        var t, e = window;
        if (e.Zone) {
            var n = e.Zone.__symbol__("MutationObserver");
            t = e[n]
        }
        return t || (t = e.MutationObserver), t
    }! function(t) {
        t[t.PERFORMANCE_ENTRY_COLLECTED = 0] = "PERFORMANCE_ENTRY_COLLECTED", t[t.AUTO_ACTION_CREATED = 1] = "AUTO_ACTION_CREATED", t[t.AUTO_ACTION_COMPLETED = 2] = "AUTO_ACTION_COMPLETED", t[t.AUTO_ACTION_DISCARDED = 3] = "AUTO_ACTION_DISCARDED", t[t.VIEW_CREATED = 4] = "VIEW_CREATED", t[t.VIEW_UPDATED = 5] = "VIEW_UPDATED", t[t.VIEW_ENDED = 6] = "VIEW_ENDED", t[t.REQUEST_STARTED = 7] = "REQUEST_STARTED", t[t.REQUEST_COMPLETED = 8] = "REQUEST_COMPLETED", t[t.SESSION_EXPIRED = 9] = "SESSION_EXPIRED", t[t.SESSION_RENEWED = 10] = "SESSION_RENEWED", t[t.BEFORE_UNLOAD = 11] = "BEFORE_UNLOAD", t[t.RAW_RUM_EVENT_COLLECTED = 12] = "RAW_RUM_EVENT_COLLECTED", t[t.RUM_EVENT_COLLECTED = 13] = "RUM_EVENT_COLLECTED", t[t.RAW_ERROR_COLLECTED = 14] = "RAW_ERROR_COLLECTED"
    }(Gt || (Gt = {}));
    var Jt = function() {
            function t() {
                this.callbacks = {}
            }
            return t.prototype.notify = function(t, e) {
                var n = this.callbacks[t];
                n && n.forEach((function(t) {
                    return t(e)
                }))
            }, t.prototype.subscribe = function(t, e) {
                var n = this;
                return this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t].push(e), {
                    unsubscribe: function() {
                        n.callbacks[t] = n.callbacks[t].filter((function(t) {
                            return e !== t
                        }))
                    }
                }
            }, t
        }(),
        Qt = "initial_document",
        te = [
            [f.DOCUMENT, function(t) {
                return Qt === t
            }],
            [f.XHR, function(t) {
                return "xmlhttprequest" === t
            }],
            [f.FETCH, function(t) {
                return "fetch" === t
            }],
            [f.BEACON, function(t) {
                return "beacon" === t
            }],
            [f.CSS, function(t, e) {
                return /\.css$/i.test(e)
            }],
            [f.JS, function(t, e) {
                return /\.js$/i.test(e)
            }],
            [f.IMAGE, function(t, e) {
                return w(["image", "img", "icon"], t) || null !== /\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i.exec(e)
            }],
            [f.FONT, function(t, e) {
                return null !== /\.(woff|eot|woff2|ttf)$/i.exec(e)
            }],
            [f.MEDIA, function(t, e) {
                return w(["audio", "video"], t) || null !== /\.(mp3|mp4)$/i.exec(e)
            }]
        ];

    function ee(t) {
        var e = t.name;
        if (! function(t) {
                try {
                    return !!xt(t)
                } catch (t) {
                    return !1
                }
            }(e)) return ut('Failed to construct URL for "' + t.name + '"'), f.OTHER;
        for (var n = function(t) {
                var e = xt(t).pathname;
                return "/" === e[0] ? e : "/" + e
            }(e), r = 0, i = te; r < i.length; r++) {
            var o = i[r],
                a = o[0];
            if ((0, o[1])(t.initiatorType, n)) return a
        }
        return f.OTHER
    }

    function ne() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = 1; n < t.length; n += 1)
            if (t[n - 1] > t[n]) return !1;
        return !0
    }

    function re(t) {
        var e = ie(t);
        if (e) {
            var n = e.startTime,
                r = e.fetchStart,
                i = e.redirectStart,
                o = e.redirectEnd,
                a = e.domainLookupStart,
                s = e.domainLookupEnd,
                u = e.connectStart,
                c = e.secureConnectionStart,
                l = e.connectEnd,
                f = e.requestStart,
                d = e.responseStart,
                p = {
                    download: ae(n, d, e.responseEnd),
                    first_byte: ae(n, f, d)
                };
            return l !== r && (p.connect = ae(n, u, l), ne(u, c, l) && (p.ssl = ae(n, c, l))), s !== r && (p.dns = ae(n, a, s)), oe(t) && (p.redirect = ae(n, i, o)), p
        }
    }

    function ie(e) {
        if (ne(e.startTime, e.fetchStart, e.domainLookupStart, e.domainLookupEnd, e.connectStart, e.connectEnd, e.requestStart, e.responseStart, e.responseEnd)) {
            if (!oe(e)) return e;
            var n = e.redirectStart,
                r = e.redirectEnd;
            if (n < e.startTime && (n = e.startTime), r < e.startTime && (r = e.fetchStart), ne(e.startTime, n, r, e.fetchStart)) return t(t({}, e), {
                redirectEnd: r,
                redirectStart: n
            })
        }
    }

    function oe(t) {
        return t.fetchStart !== t.startTime
    }

    function ae(t, e, n) {
        return {
            duration: gt(Tt(e, n)),
            start: gt(Tt(t, e))
        }
    }

    function se(t) {
        if (t.startTime < t.responseStart) return t.decodedBodySize
    }

    function ue(t, e) {
        return e && !t.isIntakeUrl(e)
    }

    function ce(t) {
        var e = function(t) {
            var e = t.querySelector("meta[name=dd-trace-id]"),
                n = t.querySelector("meta[name=dd-trace-time]");
            return le(e && e.content, n && n.content)
        }(t) || function(t) {
            var e = function(t) {
                for (var e = 0; e < t.childNodes.length; e += 1) {
                    if (n = fe(t.childNodes[e])) return n
                }
                if (t.body)
                    for (e = t.body.childNodes.length - 1; e >= 0; e -= 1) {
                        var n, r = t.body.childNodes[e];
                        if (n = fe(r)) return n;
                        if (!de(r)) break
                    }
            }(t);
            if (!e) return;
            return le(k(e, "trace-id"), k(e, "trace-time"))
        }(t);
        if (e && !(e.traceTime <= Date.now() - 12e4)) return e.traceId
    }

    function le(t, e) {
        var n = e && Number(e);
        if (t && n) return {
            traceId: t,
            traceTime: n
        }
    }

    function fe(t) {
        if (t && function(t) {
                return "#comment" === t.nodeName
            }(t)) {
            var e = /^\s*DATADOG;(.*?)\s*$/.exec(t.data);
            if (e) return e[1]
        }
    }

    function de(t) {
        return "#text" === t.nodeName
    }

    function pe() {
        return void 0 !== window.performance && "getEntries" in performance
    }

    function he(t) {
        return window.PerformanceObserver && void 0 !== PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes(t)
    }

    function ve(e, n) {
        var r;
        if (r = function(t) {
                ge(e, n, t)
            }, x("interactive", (function() {
                var e, n = {
                    entryType: "resource",
                    initiatorType: Qt,
                    traceId: ce(document)
                };
                if (he("navigation") && performance.getEntriesByType("navigation").length > 0) {
                    var i = performance.getEntriesByType("navigation")[0];
                    e = t(t({}, i.toJSON()), n)
                } else {
                    var o = me();
                    e = t(t(t({}, o), {
                        decodedBodySize: 0,
                        duration: o.responseEnd,
                        name: window.location.href,
                        startTime: 0
                    }), n)
                }
                r(e)
            })), pe() && _e(e, n, performance.getEntries()), window.PerformanceObserver) {
            var i = at((function(t) {
                    return _e(e, n, t.getEntries())
                })),
                o = ["resource", "navigation", "longtask", "paint"],
                a = ["largest-contentful-paint", "first-input", "layout-shift"];
            try {
                a.forEach((function(t) {
                    new PerformanceObserver(i).observe({
                        type: t,
                        buffered: !0
                    })
                }))
            } catch (t) {
                o.push.apply(o, a)
            }
            new PerformanceObserver(i).observe({
                entryTypes: o
            }), pe() && "addEventListener" in performance && performance.addEventListener("resourcetimingbufferfull", (function() {
                performance.clearResourceTimings()
            }))
        }
        he("navigation") || function(e) {
            function n() {
                e(t(t({}, me()), {
                    entryType: "navigation"
                }))
            }
            x("complete", (function() {
                setTimeout(at(n))
            }))
        }((function(t) {
            ge(e, n, t)
        })), he("first-input") || function(t) {
            var e = Date.now(),
                n = !1,
                r = N(window, ["click", "mousedown", "keydown", "touchstart", "pointerdown"], (function(t) {
                    if (t.cancelable) {
                        var e = {
                            entryType: "first-input",
                            processingStart: bt(),
                            startTime: t.timeStamp
                        };
                        "pointerdown" === t.type ? i(e) : o(e)
                    }
                }), {
                    passive: !0,
                    capture: !0
                }).stop;

            function i(t) {
                N(window, ["pointerup", "pointercancel"], (function(e) {
                    "pointerup" === e.type && o(t)
                }), {
                    once: !0
                })
            }

            function o(i) {
                if (!n) {
                    n = !0, r();
                    var o = i.processingStart - i.startTime;
                    o >= 0 && o < Date.now() - e && t(i)
                }
            }
        }((function(t) {
            ge(e, n, t)
        }))
    }

    function me() {
        var t = {},
            e = performance.timing;
        for (var n in e)
            if (S(e[n])) {
                var r = n,
                    i = e[r];
                t[r] = 0 === i ? 0 : i - St()
            }
        return t
    }

    function _e(t, e, n) {
        n.forEach((function(n) {
            "resource" !== n.entryType && "navigation" !== n.entryType && "paint" !== n.entryType && "longtask" !== n.entryType && "largest-contentful-paint" !== n.entryType && "first-input" !== n.entryType && "layout-shift" !== n.entryType || ge(t, e, n)
        }))
    }

    function ge(t, e, n) {
        (function(t) {
            return "navigation" === t.entryType && t.loadEventEnd <= 0
        })(n) || function(t, e) {
            return "resource" === e.entryType && !ue(t, e.name)
        }(e, n) || t.notify(Gt.PERFORMANCE_ENTRY_COLLECTED, n)
    }

    function ye(t, e, n) {
        var r = 0,
            i = !1;
        return {
            isLimitReached: function() {
                if (0 === r && setTimeout((function() {
                        r = 0
                    }), h), (r += 1) <= e || i) return i = !1, !1;
                if (r === e + 1) {
                    i = !0;
                    try {
                        n({
                            message: "Reached max number of " + t + "s by minute: " + e,
                            source: B,
                            startClocks: Et()
                        })
                    } finally {
                        i = !1
                    }
                }
                return !0
            }
        }
    }

    function be(t, e) {
        for (var n = t, r = 0, i = e.split("."); r < i.length; r++) {
            var o = i[r];
            if (!we(n, o)) return;
            n = n[o]
        }
        return n
    }

    function Ee(t, e, n) {
        for (var r = t, i = e.split("."), o = 0; o < i.length; o += 1) {
            var a = i[o];
            if (!we(r, a)) return;
            o !== i.length - 1 ? r = r[a] : r[a] = n
        }
    }

    function we(t, e) {
        return "object" == typeof t && null !== t && e in t
    }
    var Te = function() {
            function t(t) {
                var e = this;
                this.expireDelay = t, this.previousContexts = [], this.clearOldContextsInterval = setInterval((function() {
                    return e.clearOldContexts()
                }), 6e4)
            }
            return t.prototype.find = function(t) {
                if (void 0 === t || void 0 !== this.current && void 0 !== this.currentStart && t >= this.currentStart) return this.current;
                for (var e = 0, n = this.previousContexts; e < n.length; e++) {
                    var r = n[e];
                    if (t > r.endTime) break;
                    if (t >= r.startTime) return r.context
                }
            }, t.prototype.setCurrent = function(t, e) {
                this.current = t, this.currentStart = e
            }, t.prototype.getCurrent = function() {
                return this.current
            }, t.prototype.clearCurrent = function() {
                this.current = void 0, this.currentStart = void 0
            }, t.prototype.closeCurrent = function(t) {
                void 0 !== this.current && void 0 !== this.currentStart && (this.previousContexts.unshift({
                    endTime: t,
                    context: this.current,
                    startTime: this.currentStart
                }), this.clearCurrent())
            }, t.prototype.clearOldContexts = function() {
                for (var t = bt() - this.expireDelay; this.previousContexts.length > 0 && this.previousContexts[this.previousContexts.length - 1].startTime < t;) this.previousContexts.pop()
            }, t.prototype.reset = function() {
                this.clearCurrent(), this.previousContexts = []
            }, t.prototype.stop = function() {
                clearInterval(this.clearOldContextsInterval)
            }, t
        }(),
        Se = "_dd_s",
        Ce = 9e5,
        Re = 144e5,
        Ae = /^([a-z]+)=([a-z0-9-]+)$/,
        Oe = "&";

    function ke(t, e, n) {
        var r = new Xt,
            i = new Xt,
            o = setInterval(at(s), 1e3),
            a = Ie(t);

        function s() {
            var n = Ie(t);
            return u() && (! function(t) {
                if (a.id !== t.id) return t.id && Ne(a) && c(t, "different id"), !0;
                if (a[e] !== t[e]) return c(t, "different tracking type"), !0;
                return !1
            }(n) ? a = n : (a = {}, i.notify())), n
        }

        function u() {
            return void 0 !== a[e]
        }

        function c(t, n) {
            ut("Session inconsistencies detected", {
                debug: {
                    productKey: e,
                    sessionCache: a,
                    cookieSession: t,
                    cause: n
                }
            })
        }
        return {
            expandOrRenewSession: v(at((function() {
                var i = s();
                (function(r) {
                    var i = n(r[e]),
                        o = i.trackingType,
                        a = i.isTracked;
                    r[e] = o, a && !r.id && (r.id = m(), r.created = String(Date.now()));
                    return xe(r, t), a
                })(i) && !u() && function(t) {
                    a = t, r.notify()
                }(i), a = i
            })), 1e3).throttled,
            expandSession: function() {
                var e = s();
                u() && xe(e, t)
            },
            getSession: function() {
                return a
            },
            renewObservable: r,
            expireObservable: i,
            stop: function() {
                clearInterval(o)
            }
        }
    }

    function Ie(t) {
        var e = function() {
            var t = Ot(Se),
                e = {};
            (function(t) {
                return void 0 !== t && (-1 !== t.indexOf("&") || Ae.test(t))
            })(t) && t.split(Oe).forEach((function(t) {
                var n = Ae.exec(t);
                if (null !== n) {
                    var r = n[1],
                        i = n[2];
                    e[r] = i
                }
            }));
            return e
        }();
        return Ne(e) ? e : (Le(t), {})
    }

    function Ne(t) {
        return (void 0 === t.created || Date.now() - Number(t.created) < Re) && (void 0 === t.expire || Date.now() < Number(t.expire))
    }

    function xe(t, e) {
        if (A(t)) Le(e);
        else {
            t.expire = String(Date.now() + Ce);
            var n = R(t).map((function(t) {
                return t[0] + "=" + t[1]
            })).join(Oe);
            At(Se, n, Ce, e)
        }
    }

    function Le(t) {
        At(Se, "", 0, t)
    }
    var De = [];

    function Me(t, e, n) {
        ! function(t) {
            var e = Ot(Se),
                n = Ot("_dd"),
                r = Ot("_dd_r"),
                i = Ot("_dd_l");
            if (!e) {
                var o = {};
                n && (o.id = n), i && /^[01]$/.test(i) && (o.logs = i), r && /^[012]$/.test(r) && (o.rum = r), xe(o, t)
            }
        }(t);
        var r = ke(t, e, n);
        De.push((function() {
            return r.stop()
        }));
        var i, o = new Te(144e5);

        function a() {
            return {
                id: r.getSession().id,
                trackingType: r.getSession()[e]
            }
        }
        return De.push((function() {
                return o.stop()
            })), r.renewObservable.subscribe((function() {
                o.setCurrent(a(), bt())
            })), r.expireObservable.subscribe((function() {
                o.closeCurrent(bt())
            })), r.expandOrRenewSession(), o.setCurrent(a(), wt().relative), i = N(window, ["click", "touchstart", "keydown", "scroll"], (function() {
                return r.expandOrRenewSession()
            }), {
                capture: !0,
                passive: !0
            }).stop, De.push(i),
            function(t) {
                var e = at((function() {
                        "visible" === document.visibilityState && t()
                    })),
                    n = I(document, "visibilitychange", e).stop;
                De.push(n);
                var r = setInterval(e, 6e4);
                De.push((function() {
                    clearInterval(r)
                }))
            }((function() {
                return r.expandSession()
            })), {
                findActiveSession: function(t) {
                    return o.find(t)
                },
                renewObservable: r.renewObservable,
                expireObservable: r.expireObservable
            }
    }
    var Ue, ze, Pe;

    function Be(t, e) {
        var n = Me(t.cookieOptions, "rum", (function(e) {
            return function(t, e) {
                var n;
                n = function(t) {
                    return t === ze.NOT_TRACKED || t === ze.TRACKED_REPLAY || t === ze.TRACKED_LITE
                }(e) ? e : _(t.sampleRate) ? _(t.replaySampleRate) ? ze.TRACKED_REPLAY : ze.TRACKED_LITE : ze.NOT_TRACKED;
                return {
                    trackingType: n,
                    isTracked: Fe(n)
                }
            }(t, e)
        }));
        return n.expireObservable.subscribe((function() {
            e.notify(Gt.SESSION_EXPIRED)
        })), n.renewObservable.subscribe((function() {
            e.notify(Gt.SESSION_RENEWED)
        })), {
            findTrackedSession: function(t) {
                var e = n.findActiveSession(t);
                if (e && Fe(e.trackingType)) return {
                    id: e.id,
                    hasReplayPlan: e.trackingType === ze.TRACKED_REPLAY,
                    hasLitePlan: e.trackingType === ze.TRACKED_LITE
                }
            }
        }
    }

    function Fe(t) {
        return t === ze.TRACKED_LITE || t === ze.TRACKED_REPLAY
    }! function(t) {
        t[t.LITE = 1] = "LITE", t[t.REPLAY = 2] = "REPLAY"
    }(Ue || (Ue = {})),
    function(t) {
        t.NOT_TRACKED = "0", t.TRACKED_REPLAY = "1", t.TRACKED_LITE = "2"
    }(ze || (ze = {})),
    function(t) {
        t.SYNTHETICS = "synthetics", t.USER = "user", t.CI_TEST = "ci_test"
    }(Pe || (Pe = {}));
    var Ve = ["view.url", "view.referrer", "action.target.name", "error.message", "error.stack", "error.resource.url", "resource.url"],
        He = n(Ve, ["context"]);

    function We(t, e, n, i, o, a) {
        var s, u = function(t) {
                e.notify(Gt.RAW_ERROR_COLLECTED, {
                    error: t
                })
            },
            c = ((s = {})[Vt.ERROR] = ye(Vt.ERROR, t.maxErrorsPerMinute, u), s[Vt.ACTION] = ye(Vt.ACTION, t.maxActionsPerMinute, u), s),
            l = function() {
                var t = window._DATADOG_SYNTHETICS_PUBLIC_ID || Ot("datadog-synthetics-public-id"),
                    e = window._DATADOG_SYNTHETICS_RESULT_ID || Ot("datadog-synthetics-result-id");
                if ("string" == typeof t && "string" == typeof e) return {
                    test_id: t,
                    result_id: e,
                    injected: qt()
                }
            }(),
            f = function() {
                var t, e = null === (t = window.Cypress) || void 0 === t ? void 0 : t.env("traceId");
                if ("string" == typeof e) return {
                    test_execution_id: e
                }
            }();
        e.subscribe(Gt.RAW_RUM_EVENT_COLLECTED, (function(s) {
            var u, d = s.startTime,
                p = s.rawRumEvent,
                h = s.domainContext,
                v = s.savedCommonContext,
                m = s.customerContext,
                _ = i.findView(d),
                g = o.findUrl(d),
                y = n.findTrackedSession(p.type !== Vt.VIEW ? d : void 0);
            if (y && _ && g) {
                var b = i.findAction(d),
                    E = v || a(),
                    w = {
                        _dd: {
                            format_version: 2,
                            drift: Math.round(Date.now() - (St() + performance.now())),
                            session: {
                                plan: y.hasReplayPlan ? Ue.REPLAY : Ue.LITE
                            },
                            browser_sdk_version: G() ? Kt.sdkVersion : void 0
                        },
                        application: {
                            id: t.applicationId
                        },
                        date: yt(),
                        service: t.service,
                        session: {
                            id: y.id,
                            type: l ? Pe.SYNTHETICS : f ? Pe.CI_TEST : Pe.USER
                        },
                        synthetics: l,
                        ci_test: f
                    },
                    T = (u = p, -1 !== [Vt.ERROR, Vt.RESOURCE, Vt.LONG_TASK].indexOf(u.type) ? U(w, g, _, b, p) : U(w, g, _, p));
                T.context = U(E.context, m), "has_replay" in T.session || (T.session.has_replay = E.hasReplay), A(E.user) || (T.usr = E.user),
                    function(t, e, n, i) {
                        var o;
                        if (e) {
                            var a = function(t, e, n) {
                                var r = M(t),
                                    i = n(r);
                                return e.forEach((function(e) {
                                    var n = be(t, e),
                                        i = be(r, e),
                                        o = L(n),
                                        a = L(i);
                                    a === o ? Ee(t, e, i) : "object" !== o || "undefined" !== a && "null" !== a || Ee(t, e, {})
                                })), i
                            }(t, t.type === Vt.VIEW ? Ve : He, (function(t) {
                                return e(t, n)
                            }));
                            if (!1 === a && t.type !== Vt.VIEW) return !1;
                            !1 === a && r.warn("Can't dismiss view events using beforeSend!")
                        }
                        return !(null === (o = i[t.type]) || void 0 === o ? void 0 : o.isLimitReached())
                    }(T, t.beforeSend, h, c) && (A(T.context) && delete T.context, e.notify(Gt.RUM_EVENT_COLLECTED, T))
            }
        }))
    }
    var je = [];

    function Ze() {
        document.hasFocus() && Ye();
        var t, e, n = (t = Ye, I(window, "focus", (function(e) {
                e.isTrusted && t()
            }))).stop,
            r = (e = qe, I(window, "blur", (function(t) {
                t.isTrusted && e()
            }))).stop;
        return {
            isInForegroundAt: Ke,
            selectInForegroundPeriodsFor: Ge,
            stop: function() {
                je = [], n(), r()
            }
        }
    }

    function Ye() {
        if (!(je.length > 2500)) {
            var t = je[je.length - 1],
                e = bt();
            void 0 !== t && void 0 === t.end || je.push({
                start: e
            })
        }
    }

    function qe() {
        if (0 !== je.length) {
            var t = je[je.length - 1],
                e = bt();
            void 0 === t.end && (t.end = e)
        }
    }

    function Ke(t) {
        for (var e = je.length - 1; e >= 0; e--) {
            var n = je[e];
            if (void 0 !== n.end && t > n.end) break;
            if (t > n.start && (void 0 === n.end || t < n.end)) return !0
        }
        return !1
    }

    function Ge(t, e) {
        for (var n = t + e, r = [], i = Math.max(0, je.length - 500), o = je.length - 1; o >= i; o--) {
            var a = je[o];
            if (void 0 !== a.end && t > a.end) break;
            if (!(n < a.start)) {
                var s = t > a.start ? t : a.start,
                    u = Tt(t, s),
                    c = Tt(s, void 0 === a.end || n < a.end ? n : a.end);
                r.unshift({
                    start: gt(u),
                    duration: gt(c)
                })
            }
        }
        return r
    }
    var Xe, $e;

    function Je(t, e, n) {
        var r = t[e],
            i = n(r),
            o = function() {
                return i.apply(this, arguments)
            };
        return t[e] = o, {
            stop: function() {
                t[e] === o ? t[e] = r : i = r
            }
        }
    }

    function Qe(t, e, n) {
        var r = n.before,
            i = n.after;
        return Je(t, e, (function(t) {
            return function() {
                var e, n = arguments;
                return r && st(r, this, n), "function" == typeof t && (e = t.apply(this, n)), i && st(i, this, n), e
            }
        }))
    }

    function tn() {
        var t;
        return Xe || (t = new Xt((function() {
            var e = Qe(XMLHttpRequest.prototype, "open", {
                    before: en
                }).stop,
                n = Qe(XMLHttpRequest.prototype, "send", {
                    before: function() {
                        nn.call(this, t)
                    }
                }).stop,
                r = Qe(XMLHttpRequest.prototype, "abort", {
                    before: rn
                }).stop;
            return function() {
                e(), n(), r()
            }
        })), Xe = t), Xe
    }

    function en(t, e) {
        this._datadog_xhr = {
            state: "open",
            method: t,
            url: It(e)
        }
    }

    function nn(e) {
        var n = this;
        if (this._datadog_xhr) {
            var r = this._datadog_xhr;
            r.state = "start", r.startTime = bt(), r.startClocks = Et(), r.isAborted = !1, r.xhr = this;
            var i = !1,
                o = Qe(this, "onreadystatechange", {
                    before: function() {
                        this.readyState === XMLHttpRequest.DONE && a()
                    }
                }).stop,
                a = at((function() {
                    if (n.removeEventListener("loadend", a), o(), !i) {
                        i = !0;
                        var s = n._datadog_xhr;
                        s.state = "complete", s.duration = Tt(r.startClocks.timeStamp, yt()), s.responseText = n.response, s.status = n.status, e.notify(t({}, s))
                    }
                }));
            this.addEventListener("loadend", a), e.notify(r)
        }
    }

    function rn() {
        this._datadog_xhr && (this._datadog_xhr.isAborted = !0)
    }

    function on() {
        var t;
        return $e || (t = new Xt((function() {
            if (window.fetch) return Je(window, "fetch", (function(e) {
                return function(n, r) {
                    var i, o = st(an, null, [t, n, r]);
                    return o ? (i = e.call(this, o.input, o.init), st(sn, null, [t, i, o])) : i = e.call(this, n, r), i
                }
            })).stop
        })), $e = t), $e
    }

    function an(t, e, n) {
        var r = n && n.method || "object" == typeof e && e.method || "GET",
            i = It("object" == typeof e && e.url || e),
            o = {
                state: "start",
                init: n,
                input: e,
                method: r,
                startClocks: Et(),
                url: i
            };
        return t.notify(o), o
    }

    function sn(t, n, r) {
        var i = this,
            a = function(n) {
                return a = i, s = void 0, c = function() {
                    var i, a, s;
                    return e(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return (i = r).state = "complete", i.duration = Tt(i.startClocks.timeStamp, yt()), "stack" in n || n instanceof Error ? (i.status = 0, i.responseText = j(o(n)), i.isAborted = n instanceof DOMException && n.code === DOMException.ABORT_ERR, i.error = n, t.notify(i), [3, 6]) : [3, 1];
                            case 1:
                                if (!("status" in n)) return [3, 6];
                                a = void 0, e.label = 2;
                            case 2:
                                return e.trys.push([2, 4, , 5]), [4, n.clone().text()];
                            case 3:
                                return a = e.sent(), [3, 5];
                            case 4:
                                return s = e.sent(), a = "Unable to retrieve response: " + s, [3, 5];
                            case 5:
                                i.response = n, i.responseText = a, i.responseType = n.type, i.status = n.status, i.isAborted = !1, t.notify(i), e.label = 6;
                            case 6:
                                return [2]
                        }
                    }))
                }, new((u = void 0) || (u = Promise))((function(t, e) {
                    function n(t) {
                        try {
                            i(c.next(t))
                        } catch (t) {
                            e(t)
                        }
                    }

                    function r(t) {
                        try {
                            i(c.throw(t))
                        } catch (t) {
                            e(t)
                        }
                    }

                    function i(e) {
                        e.done ? t(e.value) : new u((function(t) {
                            t(e.value)
                        })).then(n, r)
                    }
                    i((c = c.apply(a, s || [])).next())
                }));
                var a, s, u, c
            };
        n.then(at(a), at(a))
    }

    function un(t) {
        0 !== t.status || t.isAborted || (t.traceId = void 0, t.spanId = void 0)
    }

    function cn(t, e, n, r) {
        var i;
        void 0 !== ln() && function(t, e) {
            for (var n = Nt(e), r = 0, i = t.allowedTracingOrigins; r < i.length; r++) {
                var o = i[r];
                if (n === o || o instanceof RegExp && o.test(n)) return !0
            }
            return !1
        }(t, e.url) && n.findTrackedSession() && (e.traceId = new fn, e.spanId = new fn, r((i = e.traceId, {
            "x-datadog-origin": "rum",
            "x-datadog-parent-id": e.spanId.toDecimalString(),
            "x-datadog-sampled": "1",
            "x-datadog-sampling-priority": "1",
            "x-datadog-trace-id": i.toDecimalString()
        })))
    }

    function ln() {
        return window.crypto || window.msCrypto
    }
    var fn = function() {
            function t() {
                this.buffer = new Uint8Array(8), ln().getRandomValues(this.buffer), this.buffer[0] = 127 & this.buffer[0]
            }
            return t.prototype.toString = function(t) {
                var e = this.readInt32(0),
                    n = this.readInt32(4),
                    r = "";
                do {
                    var i = e % t * 4294967296 + n;
                    e = Math.floor(e / t), n = Math.floor(i / t), r = (i % t).toString(t) + r
                } while (e || n);
                return r
            }, t.prototype.toDecimalString = function() {
                return this.toString(10)
            }, t.prototype.readInt32 = function(t) {
                return 16777216 * this.buffer[t] + (this.buffer[t + 1] << 16) + (this.buffer[t + 2] << 8) + this.buffer[t + 3]
            }, t
        }(),
        dn = 1;

    function pn(e, n, r) {
        var i = function(e, n) {
            return {
                clearTracingIfNeeded: un,
                traceFetch: function(r) {
                    return cn(e, r, n, (function(e) {
                        var n;
                        if (r.input instanceof Request && !(null === (n = r.init) || void 0 === n ? void 0 : n.headers)) r.input = new Request(r.input), Object.keys(e).forEach((function(t) {
                            r.input.headers.append(t, e[t])
                        }));
                        else {
                            r.init = t({}, r.init);
                            var i = [];
                            r.init.headers instanceof Headers ? r.init.headers.forEach((function(t, e) {
                                i.push([e, t])
                            })) : Array.isArray(r.init.headers) ? r.init.headers.forEach((function(t) {
                                i.push(t)
                            })) : r.init.headers && Object.keys(r.init.headers).forEach((function(t) {
                                i.push([t, r.init.headers[t]])
                            })), r.init.headers = i.concat(R(e))
                        }
                    }))
                },
                traceXhr: function(t, r) {
                    return cn(e, t, n, (function(t) {
                        Object.keys(t).forEach((function(e) {
                            r.setRequestHeader(e, t[e])
                        }))
                    }))
                }
            }
        }(n, r);
        ! function(t, e, n) {
            var r = tn().subscribe((function(r) {
                var i = r;
                if (ue(e, i.url)) switch (i.state) {
                    case "start":
                        n.traceXhr(i, i.xhr), i.requestIndex = hn(), t.notify(Gt.REQUEST_STARTED, {
                            requestIndex: i.requestIndex
                        });
                        break;
                    case "complete":
                        n.clearTracingIfNeeded(i), t.notify(Gt.REQUEST_COMPLETED, {
                            duration: i.duration,
                            method: i.method,
                            requestIndex: i.requestIndex,
                            responseText: i.responseText,
                            spanId: i.spanId,
                            startClocks: i.startClocks,
                            status: i.status,
                            traceId: i.traceId,
                            type: d.XHR,
                            url: i.url,
                            xhr: i.xhr
                        })
                }
            }))
        }(e, n, i),
        function(t, e, n) {
            var r = on().subscribe((function(r) {
                var i = r;
                if (ue(e, i.url)) switch (i.state) {
                    case "start":
                        n.traceFetch(i), i.requestIndex = hn(), t.notify(Gt.REQUEST_STARTED, {
                            requestIndex: i.requestIndex
                        });
                        break;
                    case "complete":
                        n.clearTracingIfNeeded(i), t.notify(Gt.REQUEST_COMPLETED, {
                            duration: i.duration,
                            method: i.method,
                            requestIndex: i.requestIndex,
                            responseText: i.responseText,
                            responseType: i.responseType,
                            spanId: i.spanId,
                            startClocks: i.startClocks,
                            status: i.status,
                            traceId: i.traceId,
                            type: d.FETCH,
                            url: i.url,
                            response: i.response,
                            init: i.init,
                            input: i.input
                        })
                }
            }))
        }(e, n, i)
    }

    function hn() {
        var t = dn;
        return dn += 1, t
    }

    function vn(t, e) {
        void 0 === e && (e = y);
        var n = {
                errorCount: 0,
                longTaskCount: 0,
                resourceCount: 0,
                userActionCount: 0
            },
            r = t.subscribe(Gt.RUM_EVENT_COLLECTED, (function(t) {
                switch (t.type) {
                    case Vt.ERROR:
                        n.errorCount += 1, e(n);
                        break;
                    case Vt.ACTION:
                        n.userActionCount += 1, e(n);
                        break;
                    case Vt.LONG_TASK:
                        n.longTaskCount += 1, e(n);
                        break;
                    case Vt.RESOURCE:
                        n.resourceCount += 1, e(n)
                }
            }));
        return {
            stop: function() {
                r.unsubscribe()
            },
            eventCounts: n
        }
    }

    function mn(t, e, n, r) {
        return function(t, e, n) {
            var r, i = !1,
                o = yt(),
                a = setTimeout(at((function() {
                    return l({
                        hadActivity: !1
                    })
                })), 100),
                s = n && setTimeout(at((function() {
                    return l({
                        hadActivity: !0,
                        duration: Tt(o, yt())
                    })
                })), n),
                u = t.subscribe((function(t) {
                    var e = t.isBusy;
                    clearTimeout(a), clearTimeout(r);
                    var n = yt();
                    e || (r = setTimeout(at((function() {
                        return l({
                            hadActivity: !0,
                            duration: Tt(o, n)
                        })
                    })), 100))
                })),
                c = function() {
                    i = !0, clearTimeout(a), clearTimeout(r), clearTimeout(s), u.unsubscribe()
                };

            function l(t) {
                i || (c(), e(t))
            }
            return {
                stop: c
            }
        }(function(t, e) {
            var n = new Xt((function() {
                var n, i = [],
                    o = 0;
                return i.push(e.subscribe((function() {
                        return r(o)
                    })), t.subscribe(Gt.PERFORMANCE_ENTRY_COLLECTED, (function(t) {
                        "resource" === t.entryType && r(o)
                    })), t.subscribe(Gt.REQUEST_STARTED, (function(t) {
                        void 0 === n && (n = t.requestIndex), r(++o)
                    })), t.subscribe(Gt.REQUEST_COMPLETED, (function(t) {
                        void 0 === n || t.requestIndex < n || r(--o)
                    }))),
                    function() {
                        return i.forEach((function(t) {
                            return t.unsubscribe()
                        }))
                    }
            }));

            function r(t) {
                n.notify({
                    isBusy: t > 0
                })
            }
            return n
        }(t, e), n, r)
    }

    function _n(t, e) {
        var n;
        if (function() {
                void 0 === yn && (yn = "closest" in HTMLElement.prototype);
                return yn
            }()) n = t.closest("[" + e + "]");
        else
            for (var r = t; r;) {
                if (r.hasAttribute(e)) {
                    n = r;
                    break
                }
                r = r.parentElement
            }
        if (n) return Sn(Tn(n.getAttribute(e).trim()))
    }
    var gn, yn, bn = [function(t) {
            if (function() {
                    void 0 === gn && (gn = "labels" in HTMLInputElement.prototype);
                    return gn
                }()) {
                if ("labels" in t && t.labels && t.labels.length > 0) return Cn(t.labels[0])
            } else if (t.id) {
                var e = t.ownerDocument && t.ownerDocument.querySelector('label[for="' + t.id.replace('"', '\\"') + '"]');
                return e && Cn(e)
            }
        }, function(t) {
            if ("INPUT" === t.nodeName) {
                var e = t,
                    n = e.getAttribute("type");
                if ("button" === n || "submit" === n || "reset" === n) return e.value
            }
        }, function(t) {
            if ("BUTTON" === t.nodeName || "LABEL" === t.nodeName || "button" === t.getAttribute("role")) return Cn(t)
        }, function(t) {
            return t.getAttribute("aria-label")
        }, function(t) {
            var e = t.getAttribute("aria-labelledby");
            if (e) return e.split(/\s+/).map((function(e) {
                return function(t, e) {
                    return t.ownerDocument ? t.ownerDocument.getElementById(e) : null
                }(t, e)
            })).filter((function(t) {
                return Boolean(t)
            })).map(Cn).join(" ")
        }, function(t) {
            return t.getAttribute("alt")
        }, function(t) {
            return t.getAttribute("name")
        }, function(t) {
            return t.getAttribute("title")
        }, function(t) {
            return t.getAttribute("placeholder")
        }, function(t) {
            if ("options" in t && t.options.length > 0) return Cn(t.options[0])
        }],
        En = [function(t) {
            return Cn(t)
        }];

    function wn(t, e) {
        for (var n = t, r = 0; r <= 10 && n && "BODY" !== n.nodeName && "HTML" !== n.nodeName && "HEAD" !== n.nodeName;) {
            for (var i = 0, o = e; i < o.length; i++) {
                var a = (0, o[i])(n);
                if ("string" == typeof a) {
                    var s = a.trim();
                    if (s) return Sn(Tn(s))
                }
            }
            if ("FORM" === n.nodeName) break;
            n = n.parentElement, r += 1
        }
    }

    function Tn(t) {
        return t.replace(/\s+/g, " ")
    }

    function Sn(t) {
        return t.length > 100 ? (n = 100, ((r = (e = t).charCodeAt(n - 1)) >= 55296 && r <= 56319 ? e.slice(0, n + 1) : e.slice(0, n)) + " [...]") : t;
        var e, n, r
    }

    function Cn(t) {
        if (!t.isContentEditable) {
            if ("innerText" in t) {
                var e = t.innerText;
                if (Boolean(document.documentMode))
                    for (var n = t.querySelectorAll("script, style"), r = 0; r < n.length; r += 1) {
                        var i = n[r].innerText;
                        i.trim().length > 0 && (e = e.replace(i, ""))
                    }
                return e
            }
            return t.textContent
        }
    }

    function Rn(t, e, n) {
        var r = n.actionNameAttribute,
            i = function(t, e) {
                var n, r;
                return {
                    create: function(i, o, a) {
                        if (!n) {
                            var s = new kn(t, i, o, a);
                            n = s, r = mn(t, e, (function(t) {
                                t.hadActivity && t.duration >= 0 ? s.complete(t.duration) : s.discard(), n = void 0
                            }), 1e4).stop
                        }
                    },
                    discardCurrent: function() {
                        n && (r(), n.discard(), n = void 0)
                    }
                }
            }(t, e);
        t.subscribe(Gt.VIEW_CREATED, (function() {
            i.discardCurrent()
        }));
        var o = I(window, "click", (function(t) {
            if (t.target instanceof Element) {
                var e, n, o = (e = t.target, n = r, _n(e, "data-dd-action-name") || n && _n(e, n) || wn(e, bn) || wn(e, En) || "");
                o && i.create(Wt.CLICK, o, t)
            }
        }), {
            capture: !0
        }).stop;
        return {
            stop: function() {
                i.discardCurrent(), o()
            }
        }
    }
    var An, On, kn = function() {
        function t(t, e, n, r) {
            this.lifeCycle = t, this.type = e, this.name = n, this.event = r, this.id = m(), this.startClocks = Et(), this.eventCountsSubscription = vn(t), this.lifeCycle.notify(Gt.AUTO_ACTION_CREATED, {
                id: this.id,
                startClocks: this.startClocks
            })
        }
        return t.prototype.complete = function(t) {
            var e = this.eventCountsSubscription.eventCounts;
            this.lifeCycle.notify(Gt.AUTO_ACTION_COMPLETED, {
                counts: {
                    errorCount: e.errorCount,
                    longTaskCount: e.longTaskCount,
                    resourceCount: e.resourceCount
                },
                duration: t,
                id: this.id,
                name: this.name,
                startClocks: this.startClocks,
                type: this.type,
                event: this.event
            }), this.eventCountsSubscription.stop()
        }, t.prototype.discard = function() {
            this.lifeCycle.notify(Gt.AUTO_ACTION_DISCARDED), this.eventCountsSubscription.stop()
        }, t
    }();

    function In(t, e) {
        var n = Nn(t) ? {
                action: {
                    error: {
                        count: t.counts.errorCount
                    },
                    id: t.id,
                    loading_time: gt(t.duration),
                    long_task: {
                        count: t.counts.longTaskCount
                    },
                    resource: {
                        count: t.counts.resourceCount
                    }
                }
            } : void 0,
            r = Nn(t) ? void 0 : t.context,
            i = U({
                action: {
                    id: m(),
                    target: {
                        name: t.name
                    },
                    type: t.type
                },
                date: t.startClocks.timeStamp,
                type: Vt.ACTION
            }, n),
            o = e.isInForegroundAt(t.startClocks.relative);
        return void 0 !== o && (i.view = {
            in_foreground: o
        }), {
            customerContext: r,
            rawRumEvent: i,
            startTime: t.startClocks.relative,
            domainContext: Nn(t) ? {
                event: t.event
            } : {}
        }
    }

    function Nn(t) {
        return t.type !== Wt.CUSTOM
    }

    function xn(e) {
        (function() {
            On || (On = new Xt, An = console.error, console.error = function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                var r = Y();
                st((function() {
                    An.apply(console, e);
                    var n = t(t({}, Ln(e, r)), {
                        source: F,
                        startClocks: Et(),
                        handling: z.HANDLED
                    });
                    On.notify(n)
                }))
            });
            return On
        })().subscribe((function(t) {
            return e.notify(t)
        }))
    }

    function Ln(t, e) {
        var r = function(t, e) {
            for (var n = 0; n < t.length; n += 1) {
                var r = t[n];
                if (e(r, n, t)) return r
            }
        }(t, (function(t) {
            return t instanceof Error
        }));
        return {
            message: n(["console error:"], t).map((function(t) {
                return function(t) {
                    if ("string" == typeof t) return t;
                    if (t instanceof Error) return Z(o(t));
                    return b(t, void 0, 2)
                }(t)
            })).join(" "),
            stack: r ? j(o(r)) : void 0,
            handlingStack: e
        }
    }
    var Dn, Mn = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

    function Un(t) {
        var e = function(t) {
                return Qe(window, "onerror", {
                    before: function(e, n, r, i, a) {
                        var s;
                        if (a) s = o(a), t(s, a);
                        else {
                            var u, c = {
                                    url: n,
                                    column: i,
                                    line: r
                                },
                                l = e;
                            if ("[object String]" === {}.toString.call(e)) {
                                var f = Mn.exec(l);
                                f && (u = f[1], l = f[2])
                            }
                            t(s = {
                                name: u,
                                message: "string" == typeof l ? l : void 0,
                                stack: [c]
                            }, e)
                        }
                    }
                })
            }(t).stop,
            n = function(t) {
                return Qe(window, "onunhandledrejection", {
                    before: function(e) {
                        var n = e.reason || "Empty reason",
                            r = o(n);
                        t(r, n)
                    }
                })
            }(t).stop;
        return {
            stop: function() {
                e(), n()
            }
        }
    }

    function zn(e, n) {
        var r = new Xt;
        return xn(r),
            function(t) {
                Un((function(e, n) {
                    var r = W(e, n, "Uncaught"),
                        i = r.stack,
                        o = r.message,
                        a = r.type;
                    t.notify({
                        message: o,
                        stack: i,
                        type: a,
                        source: H,
                        startClocks: Et(),
                        originalError: n,
                        handling: z.UNHANDLED
                    })
                }))
            }(r), r.subscribe((function(t) {
                return e.notify(Gt.RAW_ERROR_COLLECTED, {
                    error: t
                })
            })),
            function(e, n) {
                return e.subscribe(Gt.RAW_ERROR_COLLECTED, (function(r) {
                    var i = r.error,
                        o = r.customerContext,
                        a = r.savedCommonContext;
                    e.notify(Gt.RAW_RUM_EVENT_COLLECTED, t({
                        customerContext: o,
                        savedCommonContext: a
                    }, function(t, e) {
                        var n = {
                                date: t.startClocks.timeStamp,
                                error: {
                                    id: m(),
                                    message: t.message,
                                    resource: t.resource ? {
                                        method: t.resource.method,
                                        status_code: t.resource.statusCode,
                                        url: t.resource.url
                                    } : void 0,
                                    source: t.source,
                                    stack: t.stack,
                                    handling_stack: t.handlingStack,
                                    type: t.type,
                                    handling: t.handling
                                },
                                type: Vt.ERROR
                            },
                            r = e.isInForegroundAt(t.startClocks.relative);
                        void 0 !== r && (n.view = {
                            in_foreground: r
                        });
                        return {
                            rawRumEvent: n,
                            startTime: t.startClocks.relative,
                            domainContext: {
                                error: t.originalError
                            }
                        }
                    }(i, n)))
                })), {
                    addError: function(n, r) {
                        var i = n.error,
                            a = n.handlingStack,
                            s = n.startClocks,
                            u = n.context,
                            c = function(e, n, r) {
                                var i = e instanceof Error ? o(e) : void 0;
                                return t(t({
                                    startClocks: r,
                                    source: V,
                                    originalError: e
                                }, W(i, e, "Provided", n)), {
                                    handling: z.HANDLED
                                })
                            }(i, a, s);
                        e.notify(Gt.RAW_ERROR_COLLECTED, {
                            customerContext: u,
                            savedCommonContext: r,
                            error: c
                        })
                    }
                }
            }(e, n)
    }

    function Pn(t) {
        if (performance && "getEntriesByName" in performance) {
            var e = performance.getEntriesByName(t.url, "resource");
            if (e.length && "toJSON" in e[0]) {
                var n, r = e.map((function(t) {
                    return t.toJSON()
                })).filter(ie).filter((function(e) {
                    return n = e, r = t.startClocks.relative, i = Bn({
                        startTime: t.startClocks.relative,
                        duration: t.duration
                    }), o = 1, n.startTime >= r - o && Bn(n) <= i + o;
                    var n, r, i, o
                }));
                return 1 === r.length ? r[0] : 2 === r.length && Bn((n = r)[0]) <= n[1].startTime ? r[1] : void 0
            }
        }
    }

    function Bn(t) {
        return t.startTime + t.duration
    }

    function Fn(t) {
        t.subscribe(Gt.REQUEST_COMPLETED, (function(e) {
            t.notify(Gt.RAW_RUM_EVENT_COLLECTED, function(t) {
                var e = t.type === d.XHR ? f.XHR : f.FETCH,
                    n = Pn(t),
                    r = n ? mt(n.startTime) : t.startClocks,
                    i = n ? Vn(n) : void 0,
                    o = function(t) {
                        if (!t.traceId || !t.spanId) return;
                        return {
                            _dd: {
                                span_id: t.spanId.toDecimalString(),
                                trace_id: t.traceId.toDecimalString()
                            }
                        }
                    }(t),
                    a = U({
                        date: r.timeStamp,
                        resource: {
                            id: m(),
                            type: e,
                            duration: gt(t.duration),
                            method: t.method,
                            status_code: t.status,
                            url: t.url
                        },
                        type: Vt.RESOURCE
                    }, o, i);
                return {
                    startTime: r.relative,
                    rawRumEvent: a,
                    domainContext: {
                        performanceEntry: n && Hn(n),
                        xhr: t.xhr,
                        response: t.response,
                        requestInput: t.input,
                        requestInit: t.init,
                        error: t.error
                    }
                }
            }(e))
        })), t.subscribe(Gt.PERFORMANCE_ENTRY_COLLECTED, (function(e) {
            var n;
            "resource" === e.entryType && ("xmlhttprequest" !== (n = e).initiatorType && "fetch" !== n.initiatorType) && t.notify(Gt.RAW_RUM_EVENT_COLLECTED, function(t) {
                var e = ee(t),
                    n = Vn(t),
                    r = function(t) {
                        return t.traceId ? {
                            _dd: {
                                trace_id: t.traceId
                            }
                        } : void 0
                    }(t),
                    i = mt(t.startTime),
                    o = U({
                        date: i.timeStamp,
                        resource: {
                            id: m(),
                            type: e,
                            url: t.name
                        },
                        type: Vt.RESOURCE
                    }, r, n);
                return {
                    startTime: i.relative,
                    rawRumEvent: o,
                    domainContext: {
                        performanceEntry: Hn(t)
                    }
                }
            }(e))
        }))
    }

    function Vn(e) {
        return {
            resource: t({
                duration: (n = e, r = n.duration, i = n.startTime, o = n.responseEnd, gt(0 === r && i < o ? Tt(i, o) : r)),
                size: se(e)
            }, re(e))
        };
        var n, r, i, o
    }

    function Hn(t) {
        return "function" == typeof PerformanceEntry && t instanceof PerformanceEntry && t.toJSON(), t
    }

    function Wn(t) {
        return void 0 === t && (t = window), Dn || ("hidden" === document.visibilityState ? Dn = {
            timeStamp: 0
        } : (Dn = {
            timeStamp: 1 / 0
        }, I(t, "pagehide", (function(t) {
            var e = t.timeStamp;
            Dn.timeStamp = e
        }), {
            capture: !0,
            once: !0
        }).stop)), Dn
    }
    var jn = 6e5;

    function Zn(e, n) {
        var r;

        function i(e) {
            r = t(t({}, r), e), n(r)
        }
        var o = function(t, e) {
                return {
                    stop: t.subscribe(Gt.PERFORMANCE_ENTRY_COLLECTED, (function(t) {
                        "navigation" === t.entryType && e({
                            domComplete: t.domComplete,
                            domContentLoaded: t.domContentLoadedEventEnd,
                            domInteractive: t.domInteractive,
                            loadEvent: t.loadEventEnd
                        })
                    })).unsubscribe
                }
            }(e, i).stop,
            a = function(t, e) {
                var n = Wn();
                return {
                    stop: t.subscribe(Gt.PERFORMANCE_ENTRY_COLLECTED, (function(t) {
                        "paint" === t.entryType && "first-contentful-paint" === t.name && t.startTime < n.timeStamp && t.startTime < jn && e(t.startTime)
                    })).unsubscribe
                }
            }(e, (function(t) {
                return i({
                    firstContentfulPaint: t
                })
            })).stop,
            s = function(t, e, n) {
                var r = Wn(),
                    i = 1 / 0,
                    o = N(e, ["pointerdown", "keydown"], (function(t) {
                        i = t.timeStamp
                    }), {
                        capture: !0,
                        once: !0
                    }).stop,
                    a = t.subscribe(Gt.PERFORMANCE_ENTRY_COLLECTED, (function(t) {
                        "largest-contentful-paint" === t.entryType && t.startTime < i && t.startTime < r.timeStamp && t.startTime < jn && n(t.startTime)
                    })).unsubscribe;
                return {
                    stop: function() {
                        o(), a()
                    }
                }
            }(e, window, (function(t) {
                i({
                    largestContentfulPaint: t
                })
            })).stop,
            u = function(t, e) {
                var n = Wn();
                return {
                    stop: t.subscribe(Gt.PERFORMANCE_ENTRY_COLLECTED, (function(t) {
                        if ("first-input" === t.entryType && t.startTime < n.timeStamp) {
                            var r = Tt(t.startTime, t.processingStart);
                            e({
                                firstInputDelay: r >= 0 ? r : 0,
                                firstInputTime: t.startTime
                            })
                        }
                    })).unsubscribe
                }
            }(e, (function(t) {
                i({
                    firstInputDelay: t.firstInputDelay,
                    firstInputTime: t.firstInputTime
                })
            })).stop;
        return {
            stop: function() {
                o(), a(), s(), u()
            }
        }
    }

    function Yn(t, e, n, r) {
        var i, o = {
                eventCounts: {
                    errorCount: 0,
                    longTaskCount: 0,
                    resourceCount: 0,
                    userActionCount: 0
                }
            },
            a = vn(t, (function(t) {
                o.eventCounts = t, n()
            })).stop,
            s = function(t, e) {
                var n = t === Ht.INITIAL_LOAD,
                    r = !0,
                    i = [];

                function o() {
                    !r && !n && i.length > 0 && e(Math.max.apply(Math, i))
                }
                return {
                    setLoadEvent: function(t) {
                        n && (n = !1, i.push(t), o())
                    },
                    setActivityLoadingTime: function(t) {
                        r && (r = !1, void 0 !== t && i.push(t), o())
                    }
                }
            }(r, (function(t) {
                o.loadingTime = t, n()
            })),
            u = s.setActivityLoadingTime,
            c = s.setLoadEvent,
            l = function(t, e, n) {
                return mn(t, e, (function(t) {
                    t.hadActivity ? n(t.duration) : n(void 0)
                }))
            }(t, e, u).stop;
        return he("layout-shift") ? (o.cumulativeLayoutShift = 0, i = function(t, e) {
            var n = 0,
                r = function() {
                    var t, e, n = 0;
                    return {
                        update: function(r) {
                            void 0 === t || r.startTime - e >= p || r.startTime - t >= 5e3 ? (t = e = r.startTime, n = r.value) : (n += r.value, e = r.startTime)
                        },
                        value: function() {
                            return n
                        }
                    }
                }();
            return {
                stop: t.subscribe(Gt.PERFORMANCE_ENTRY_COLLECTED, (function(t) {
                    "layout-shift" !== t.entryType || t.hadRecentInput || (r.update(t), r.value() > n && (n = r.value(), e(g(n, 4))))
                })).unsubscribe
            }
        }(t, (function(t) {
            o.cumulativeLayoutShift = t, n()
        })).stop) : i = y, {
            stop: function() {
                a(), l(), i()
            },
            setLoadEvent: c,
            viewMetrics: o
        }
    }

    function qn(t, e, n, r, i, o) {
        var a, s = function(r) {
                var i = Kn(e, n, t, Ht.INITIAL_LOAD, wt(), r),
                    o = Zn(e, (function(t) {
                        i.updateTimings(t), i.scheduleUpdate()
                    })).stop;
                return {
                    initialView: i,
                    stop: o
                }
            }(o),
            u = s.stop,
            c = s.initialView,
            l = function() {
                e.subscribe(Gt.SESSION_RENEWED, (function() {
                    c.end(), c = f(void 0, c.name)
                })), e.subscribe(Gt.BEFORE_UNLOAD, (function() {
                    c.end(), c.triggerUpdate()
                }));
                var t = window.setInterval(at((function() {
                    c.triggerUpdate()
                })), 3e5);
                return {
                    stop: function() {
                        clearInterval(t)
                    }
                }
            }().stop;

        function f(r, i) {
            return Kn(e, n, t, Ht.ROUTE_CHANGE, r, i)
        }
        return i && (a = function(t) {
            return t.subscribe((function(t) {
                var e, n, r, i, o = t.oldLocation,
                    a = t.newLocation;
                if (n = a, (e = o).pathname !== n.pathname || (r = n.hash, i = r.substr(1), !document.getElementById(i) && Gn(n.hash) !== Gn(e.hash))) return c.end(), c.triggerUpdate(), void(c = f())
            }))
        }(r)), {
            addTiming: function(t, e) {
                void 0 === e && (e = yt()), c.addTiming(t, e), c.triggerUpdate()
            },
            startView: function(t, e) {
                c.end(e), c.triggerUpdate(), c = f(e, t)
            },
            stop: function() {
                null == a || a.unsubscribe(), u(), l(), c.end()
            }
        }
    }

    function Kn(e, n, i, o, a, s) {
        void 0 === a && (a = Et());
        var u, c = m(),
            l = {},
            f = {},
            d = 0,
            p = t({}, i);
        e.notify(Gt.VIEW_CREATED, {
            id: c,
            name: s,
            startClocks: a
        });
        var h = v(at(T), 3e3, {
                leading: !1
            }),
            _ = h.throttled,
            g = h.cancel,
            y = Yn(e, n, _, o),
            b = y.setLoadEvent,
            E = y.stop,
            w = y.viewMetrics;

        function T() {
            d += 1;
            var n = void 0 === u ? yt() : u.timeStamp;
            e.notify(Gt.VIEW_UPDATED, t(t({}, w), {
                customTimings: f,
                documentVersion: d,
                id: c,
                name: s,
                loadingType: o,
                location: p,
                startClocks: a,
                timings: l,
                duration: Tt(a.timeStamp, n),
                isActive: void 0 === u
            }))
        }
        return T(), {
            name: s,
            scheduleUpdate: _,
            end: function(t) {
                void 0 === t && (t = Et()), u = t, E(), e.notify(Gt.VIEW_ENDED, {
                    endClocks: u
                })
            },
            triggerUpdate: function() {
                g(), T()
            },
            updateTimings: function(t) {
                l = t, void 0 !== t.loadEvent && b(t.loadEvent)
            },
            addTiming: function(t, e) {
                var n = function(t) {
                    return t < 31536e6
                }(e) ? e : Tt(a.timeStamp, e);
                f[function(t) {
                    var e = t.replace(/[^a-zA-Z0-9-_.@$]/g, "_");
                    e !== t && r.warn("Invalid timing name: " + t + ", sanitized to: " + e);
                    return e
                }(t)] = n
            }
        }
    }

    function Gn(t) {
        var e = t.indexOf("?");
        return e < 0 ? t : t.slice(0, e)
    }

    function Xn(t, e, n, r, i, o, a, s) {
        return t.subscribe(Gt.VIEW_UPDATED, (function(e) {
            return t.notify(Gt.RAW_RUM_EVENT_COLLECTED, function(t, e, n) {
                var r = n.getReplayStats(t.id),
                    i = {
                        _dd: {
                            document_version: t.documentVersion,
                            replay_stats: r
                        },
                        date: t.startClocks.timeStamp,
                        type: Vt.VIEW,
                        view: {
                            action: {
                                count: t.eventCounts.userActionCount
                            },
                            cumulative_layout_shift: t.cumulativeLayoutShift,
                            dom_complete: gt(t.timings.domComplete),
                            dom_content_loaded: gt(t.timings.domContentLoaded),
                            dom_interactive: gt(t.timings.domInteractive),
                            error: {
                                count: t.eventCounts.errorCount
                            },
                            first_contentful_paint: gt(t.timings.firstContentfulPaint),
                            first_input_delay: gt(t.timings.firstInputDelay),
                            first_input_time: gt(t.timings.firstInputTime),
                            is_active: t.isActive,
                            name: t.name,
                            largest_contentful_paint: gt(t.timings.largestContentfulPaint),
                            load_event: gt(t.timings.loadEvent),
                            loading_time: $n(gt(t.loadingTime)),
                            loading_type: t.loadingType,
                            long_task: {
                                count: t.eventCounts.longTaskCount
                            },
                            resource: {
                                count: t.eventCounts.resourceCount
                            },
                            time_spent: gt(t.duration),
                            in_foreground_periods: e.selectInForegroundPeriodsFor(t.startClocks.relative, t.duration)
                        },
                        session: {
                            has_replay: !!r || void 0
                        }
                    };
                A(t.customTimings) || (i.view.custom_timings = function(t, e) {
                    for (var n = {}, r = 0, i = Object.keys(t); r < i.length; r++) {
                        var o = i[r];
                        n[o] = e(t[o])
                    }
                    return n
                }(t.customTimings, gt));
                return {
                    rawRumEvent: i,
                    startTime: t.startClocks.relative,
                    domainContext: {
                        location: t.location
                    }
                }
            }(e, o, a))
        })), qn(n, t, r, i, !e.trackViewsManually, s)
    }

    function $n(t) {
        return S(t) && t < 0 ? void 0 : t
    }

    function Jn(t, e) {
        var n = function(t, e) {
            var n, r = o(t.rumEndpointBuilder, (function() {
                    return e.notify(Gt.BEFORE_UNLOAD)
                })),
                i = t.replica;
            void 0 !== i && (n = o(i.rumEndpointBuilder));

            function o(e, n) {
                return new J(new tt(e, t.batchBytesLimit), t.maxBatchSize, t.batchBytesLimit, t.maxMessageSize, t.flushTimeout, n)
            }

            function a(t) {
                return U(t, {
                    application: {
                        id: i.applicationId
                    }
                })
            }
            var s = !1;
            return {
                add: function(t) {
                    s || (r.add(t), n && n.add(a(t)))
                },
                stop: function() {
                    s = !0
                },
                upsert: function(t, e) {
                    s || (r.upsert(t, e), n && n.upsert(a(t), e))
                }
            }
        }(t, e);
        return e.subscribe(Gt.RUM_EVENT_COLLECTED, (function(t) {
            t.type === Vt.VIEW ? n.upsert(t, t.view.id) : n.add(t)
        })), {
            stop: function() {
                return n.stop()
            }
        }
    }
    var Qn;

    function tr(e) {
        var n = t({}, e),
            r = new Xt((function() {
                var t, e, n, r, o, a = (t = i, e = Qe(history, "pushState", {
                        after: t
                    }).stop, n = Qe(history, "replaceState", {
                        after: t
                    }).stop, r = I(window, "popstate", t).stop, {
                        stop: function() {
                            e(), n(), r()
                        }
                    }).stop,
                    s = (o = i, I(window, "hashchange", o)).stop;
                return function() {
                    a(), s()
                }
            }));

        function i() {
            if (n.href !== e.href) {
                var i = t({}, e);
                r.notify({
                    newLocation: i,
                    oldLocation: n
                }), n = i
            }
        }
        return r
    }! function(t) {
        t[t.Mutation = 0] = "Mutation", t[t.MouseMove = 1] = "MouseMove", t[t.MouseInteraction = 2] = "MouseInteraction", t[t.Scroll = 3] = "Scroll", t[t.ViewportResize = 4] = "ViewportResize", t[t.Input = 5] = "Input", t[t.TouchMove = 6] = "TouchMove", t[t.MediaInteraction = 7] = "MediaInteraction", t[t.StyleSheetRule = 8] = "StyleSheetRule"
    }(Qn || (Qn = {}));
    var er, nr = 0,
        rr = 1,
        ir = 2,
        or = 3,
        ar = 4,
        sr = 5,
        ur = 6,
        cr = 7,
        lr = 9,
        fr = 0,
        dr = 1;
    ! function(t) {
        t[t.Document = 0] = "Document", t[t.DocumentType = 1] = "DocumentType", t[t.Element = 2] = "Element", t[t.Text = 3] = "Text", t[t.CDATA = 4] = "CDATA", t[t.Comment = 5] = "Comment"
    }(er || (er = {}));
    var pr = 2,
        hr = 3,
        vr = 4,
        mr = 6,
        _r = 7,
        gr = 8,
        yr = t(t({}, jt), {
            IGNORE: "ignore",
            HIDDEN: "hidden"
        }),
        br = "data-dd-privacy",
        Er = "hidden",
        wr = "***",
        Tr = {
            INPUT: !0,
            OUTPUT: !0,
            TEXTAREA: !0,
            SELECT: !0,
            OPTION: !0,
            DATALIST: !0,
            OPTGROUP: !0
        },
        Sr = new WeakMap;

    function Cr(t) {
        return Sr.has(t)
    }

    function Rr(t) {
        return Sr.get(t)
    }
    var Ar = /url\((?:(')([^']*)'|(")([^"]*)"|([^)]*))\)/gm,
        Or = /^[A-Za-z]+:|^\/\//,
        kr = /^data:.*,/i;

    function Ir(t, e) {
        return q("base-tag") ? t : t.replace(Ar, (function(t, n, r, i, o, a) {
            var s = r || o || a;
            if (!s || Or.test(s) || kr.test(s)) return t;
            var u = n || i || "";
            return "url(" + u + xr(s, e) + u + ")"
        }))
    }
    var Nr = /(^\s*|,\s*)([^\s,]+)/g;

    function xr(t, e) {
        try {
            return q("base-tag") ? t : xt(t.trim(), e).href
        } catch (e) {
            return t
        }
    }

    function Lr(t, e) {
        var n = t.tagName,
            r = t.value;
        if (zr(t, e)) {
            var i = t.type;
            if ("INPUT" === n && ("button" === i || "submit" === i || "reset" === i)) return r;
            if (!r || "OPTION" === n) return;
            return wr
        }
        return "OPTION" === n || "SELECT" === n ? t.value : "INPUT" === n || "TEXTAREA" === n ? r : void 0
    }

    function Dr(t, e) {
        var n = t.parentNode ? Dr(t.parentNode, e) : e;
        return Mr(Ur(t), n)
    }

    function Mr(t, e) {
        switch (e) {
            case yr.HIDDEN:
            case yr.IGNORE:
                return e
        }
        switch (t) {
            case yr.ALLOW:
            case yr.MASK:
            case yr.MASK_USER_INPUT:
            case yr.HIDDEN:
            case yr.IGNORE:
                return t;
            default:
                return e
        }
    }

    function Ur(t) {
        if (function(t) {
                return t.nodeType === t.ELEMENT_NODE
            }(t)) {
            var e = t.getAttribute(br);
            if ("BASE" === t.tagName) return yr.ALLOW;
            if ("INPUT" === t.tagName) {
                var n = t;
                if ("password" === n.type || "email" === n.type || "tel" === n.type) return yr.MASK;
                if ("hidden" === n.type) return yr.MASK;
                var r = n.getAttribute("autocomplete");
                if (r && 0 === r.indexOf("cc-")) return yr.MASK
            }
            switch (e) {
                case "allow":
                    return yr.ALLOW;
                case "mask":
                    return yr.MASK;
                case "mask-user-input":
                case "input-ignored":
                case "input-masked":
                    return yr.MASK_USER_INPUT;
                case Er:
                    return yr.HIDDEN
            }
            return t.classList.contains("dd-privacy-allow") ? yr.ALLOW : t.classList.contains("dd-privacy-mask") ? yr.MASK : t.classList.contains("dd-privacy-hidden") ? yr.HIDDEN : t.classList.contains("dd-privacy-mask-user-input") || t.classList.contains("dd-privacy-input-masked") || t.classList.contains("dd-privacy-input-ignored") ? yr.MASK_USER_INPUT : function(t) {
                if ("SCRIPT" === t.nodeName) return !0;
                if ("LINK" === t.nodeName) {
                    return "preload" === (n = i("rel")) && "script" === i("as") || "shortcut icon" === n || "icon" === n
                }
                if ("META" === t.nodeName) {
                    var e = i("name"),
                        n = i("rel"),
                        r = i("property");
                    return /^msapplication-tile(image|color)$/.test(e) || "application-name" === e || "icon" === n || "apple-touch-icon" === n || "shortcut icon" === n || "keywords" === e || "description" === e || /^(og|twitter|fb):/.test(r) || /^(og|twitter):/.test(e) || "pinterest" === e || "robots" === e || "googlebot" === e || "bingbot" === e || t.hasAttribute("http-equiv") || "author" === e || "generator" === e || "framework" === e || "publisher" === e || "progid" === e || /^article:/.test(r) || /^product:/.test(r) || "google-site-verification" === e || "yandex-verification" === e || "csrf-token" === e || "p:domain_verify" === e || "verify-v1" === e || "verification" === e || "shopify-checkout-api-token" === e
                }

                function i(e) {
                    return (t.getAttribute(e) || "").toLowerCase()
                }
                return !1
            }(t) ? yr.IGNORE : void 0
        }
    }

    function zr(t, e) {
        switch (e) {
            case yr.MASK:
            case yr.HIDDEN:
            case yr.IGNORE:
                return !0;
            case yr.MASK_USER_INPUT:
                return function(t) {
                    return t.nodeType === t.TEXT_NODE
                }(t) ? Pr(t.parentNode) : Pr(t);
            default:
                return !1
        }
    }

    function Pr(t) {
        if (!t || t.nodeType !== t.ELEMENT_NODE) return !1;
        var e = t;
        if ("INPUT" === e.tagName) switch (e.type) {
            case "button":
            case "color":
            case "reset":
            case "submit":
                return !1
        }
        return !!Tr[e.tagName]
    }

    function Br(t, e, n) {
        var r, i = null === (r = t.parentElement) || void 0 === r ? void 0 : r.tagName,
            o = t.textContent || "";
        if (!e || o.trim()) {
            var a = n,
                s = "STYLE" === i || void 0;
            if ("SCRIPT" === i) o = wr;
            else if (a === yr.HIDDEN) o = wr;
            else if (zr(t, a))
                if (s) o = Ir(o, location.href);
                else if ("DATALIST" === i || "SELECT" === i || "OPTGROUP" === i) {
                if (!o.trim()) return
            } else o = "OPTION" === i ? wr : o.replace(/\S/g, "x");
            return o
        }
    }

    function Fr(t) {
        return Boolean(t.changedTouches)
    }

    function Vr(t, e) {
        Array.prototype.forEach.call(t, e)
    }

    function Hr(t, e) {
        return Wr(t, {
            document: t,
            parentNodePrivacyLevel: e
        })
    }

    function Wr(e, n) {
        var r = function(e, n) {
            switch (e.nodeType) {
                case e.DOCUMENT_NODE:
                    return function(t, e) {
                        return {
                            type: er.Document,
                            childNodes: jr(t, e)
                        }
                    }(e, n);
                case e.DOCUMENT_TYPE_NODE:
                    return r = e, {
                        type: er.DocumentType,
                        name: r.name,
                        publicId: r.publicId,
                        systemId: r.systemId
                    };
                case e.ELEMENT_NODE:
                    return function(e, n) {
                        var r, i = Kr(e.tagName),
                            o = (s = e, "svg" === s.tagName || s instanceof SVGElement || void 0),
                            a = Mr(Ur(e), n.parentNodePrivacyLevel);
                        var s;
                        if (a === yr.HIDDEN) {
                            var u = e.getBoundingClientRect(),
                                c = u.width,
                                l = u.height;
                            return {
                                type: er.Element,
                                tagName: i,
                                attributes: (r = {
                                    rr_width: c + "px",
                                    rr_height: l + "px"
                                }, r[br] = Er, r),
                                childNodes: [],
                                isSVG: o
                            }
                        }
                        if (a === yr.IGNORE) return;
                        var f = function(t, e) {
                                if (e === yr.HIDDEN) return {};
                                for (var n = {}, r = Kr(t.tagName), i = t.ownerDocument, o = 0; o < t.attributes.length; o += 1) {
                                    var a = t.attributes.item(o).name,
                                        s = Zr(t, e, a);
                                    null !== s && (n[a] = s)
                                }
                                if (t.value && ("textarea" === r || "select" === r || "option" === r || "input" === r)) {
                                    var u = Lr(t, e);
                                    void 0 !== u && (n.value = u)
                                }
                                if ("option" === r && e === yr.ALLOW) {
                                    var c = t;
                                    c.selected && (n.selected = c.selected)
                                }
                                if ("link" === r) {
                                    var l = Array.from(i.styleSheets).find((function(e) {
                                        return e.href === t.href
                                    }));
                                    (f = Gr(l)) && l && (delete n.rel, delete n.href, n._cssText = Ir(f, l.href))
                                }
                                if ("style" === r && t.sheet && !(t.innerText || t.textContent || "").trim().length) {
                                    var f;
                                    (f = Gr(t.sheet)) && (n._cssText = Ir(f, location.href))
                                }
                                var d = t;
                                "input" !== r || "radio" !== d.type && "checkbox" !== d.type || (e === yr.ALLOW ? n.checked = !!d.checked : zr(d, e) && (n.checked = wr));
                                if ("audio" === r || "video" === r) {
                                    var p = t;
                                    n.rr_mediaState = p.paused ? "paused" : "played"
                                }
                                t.scrollLeft && (n.rr_scrollLeft = Math.round(t.scrollLeft));
                                t.scrollTop && (n.rr_scrollTop = Math.round(t.scrollTop));
                                return n
                            }(e, a),
                            d = [];
                        if (e.childNodes.length) {
                            d = jr(e, n.parentNodePrivacyLevel === a && n.ignoreWhiteSpace === ("head" === i) ? n : t(t({}, n), {
                                parentNodePrivacyLevel: a,
                                ignoreWhiteSpace: "head" === i
                            }))
                        }
                        return {
                            type: er.Element,
                            tagName: i,
                            attributes: f,
                            childNodes: d,
                            isSVG: o
                        }
                    }(e, n);
                case e.TEXT_NODE:
                    return function(t, e) {
                        var n, r = null === (n = t.parentElement) || void 0 === n ? void 0 : n.tagName,
                            i = Br(t, e.ignoreWhiteSpace || !1, e.parentNodePrivacyLevel);
                        if (!i) return;
                        return {
                            type: er.Text,
                            textContent: i,
                            isStyle: "STYLE" === r || void 0
                        }
                    }(e, n);
                case e.CDATA_SECTION_NODE:
                    return {
                        type: er.CDATA,
                        textContent: ""
                    }
            }
            var r
        }(e, n);
        if (!r) return null;
        var i = Rr(e) || Yr++,
            o = r;
        return o.id = i,
            function(t, e) {
                Sr.set(t, e)
            }(e, i), n.serializedNodeIds && n.serializedNodeIds.add(i), o
    }

    function jr(t, e) {
        var n = [];
        return Vr(t.childNodes, (function(t) {
            var r = Wr(t, e);
            r && n.push(r)
        })), n
    }

    function Zr(t, e, n) {
        var r, i, o;
        if (e === yr.HIDDEN) return null;
        var a = t.getAttribute(n);
        if (e === yr.MASK) {
            var s = t.tagName;
            switch (n) {
                case "title":
                case "alt":
                    return wr
            }
            if (!("IMG" !== s && "SOURCE" !== s || "src" !== n && "srcset" !== n)) return "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
            if ("A" === s && "href" === n) return wr;
            if (a && 0 === n.indexOf("data-") && n !== br) return wr
        }
        if (!a || "string" != typeof a) return a;
        if (a.length > 1e5 && "data:" === a.slice(0, 5)) return "data:truncated";
        var u = t.ownerDocument;
        switch (n) {
            case "src":
            case "href":
                return xr(a, null === (r = u.location) || void 0 === r ? void 0 : r.href);
            case "srcset":
                return function(t, e) {
                    return q("base-tag") ? t : t.replace(Nr, (function(t, n, r) {
                        return "" + n + xr(r, e)
                    }))
                }(a, null === (i = u.location) || void 0 === i ? void 0 : i.href);
            case "style":
                return Ir(a, null === (o = u.location) || void 0 === o ? void 0 : o.href);
            default:
                return a
        }
    }
    var Yr = 1;
    var qr = /[^a-z1-6-_]/;

    function Kr(t) {
        var e = t.toLowerCase().trim();
        return qr.test(e) ? "div" : e
    }

    function Gr(t) {
        try {
            var e = t.rules || t.cssRules;
            return e ? Array.from(e).map(Xr).join("") : null
        } catch (t) {
            return null
        }
    }

    function Xr(t) {
        return function(t) {
            return "styleSheet" in t
        }(t) ? Gr(t.styleSheet) || "" : t.cssText
    }

    function $r(t) {
        var e = y,
            n = [];

        function r() {
            e(), t(n), n = []
        }
        return {
            addMutations: function(t) {
                0 === n.length && (e = function(t) {
                    var e = window;
                    if (e.requestIdleCallback) {
                        var n = e.requestIdleCallback(at(t), {
                            timeout: 100
                        });
                        return function() {
                            return e.cancelIdleCallback(n)
                        }
                    }
                    var r = e.requestAnimationFrame(at(t));
                    return function() {
                        return e.cancelAnimationFrame(r)
                    }
                }(r)), n.push.apply(n, t)
            },
            flush: r,
            stop: function() {
                e()
            }
        }
    }

    function Jr(t, e, n) {
        var r = $t();
        if (!r) return {
            stop: y
        };
        var i = $r((function(t) {
                ! function(t, e, n) {
                    var r = t.filter((function(t) {
                            return document.contains(t.target) && function(t) {
                                for (var e = t; e;) {
                                    if (!Cr(e)) return !1;
                                    e = e.parentNode
                                }
                                return !0
                            }(t.target) && Dr(t.target, n) !== yr.HIDDEN
                        })),
                        i = function(t, e) {
                            for (var n = new Set, r = new Map, i = function(t) {
                                    Vr(t.addedNodes, (function(t) {
                                        n.add(t)
                                    })), Vr(t.removedNodes, (function(e) {
                                        n.has(e) || r.set(e, t.target), n.delete(e)
                                    }))
                                }, o = 0, a = t; o < a.length; o++) {
                                i(a[o])
                            }
                            var s = Array.from(n);
                            u = s, u.sort((function(t, e) {
                                var n = t.compareDocumentPosition(e);
                                return n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_CONTAINS || n & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : n & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0
                            }));
                            var u;
                            for (var c = new Set, l = [], f = 0, d = s; f < d.length; f++) {
                                var p = d[f];
                                if (!_(p)) {
                                    var h = Dr(p.parentNode, e);
                                    if (h !== yr.HIDDEN && h !== yr.IGNORE) {
                                        var v = Wr(p, {
                                            document: document,
                                            serializedNodeIds: c,
                                            parentNodePrivacyLevel: h
                                        });
                                        v && l.push({
                                            nextId: g(p),
                                            parentId: Rr(p.parentNode),
                                            node: v
                                        })
                                    }
                                }
                            }
                            var m = [];
                            return r.forEach((function(t, e) {
                                Cr(e) && m.push({
                                    parentId: Rr(t),
                                    id: Rr(e)
                                })
                            })), {
                                adds: l,
                                removes: m,
                                hasBeenSerialized: _
                            };

                            function _(t) {
                                return Cr(t) && c.has(Rr(t))
                            }

                            function g(t) {
                                for (var e = t.nextSibling; e;) {
                                    if (Cr(e)) return Rr(e);
                                    e = e.nextSibling
                                }
                                return null
                            }
                        }(r.filter((function(t) {
                            return "childList" === t.type
                        })), n),
                        o = i.adds,
                        a = i.removes,
                        s = i.hasBeenSerialized,
                        u = function(t, e) {
                            for (var n, r = [], i = new Set, o = t.filter((function(t) {
                                    return !i.has(t.target) && (i.add(t.target), !0)
                                })), a = 0, s = o; a < s.length; a++) {
                                var u = s[a];
                                if (u.target.textContent !== u.oldValue) {
                                    var c = Dr(u.target.parentNode, e);
                                    c !== yr.HIDDEN && c !== yr.IGNORE && r.push({
                                        id: Rr(u.target),
                                        value: null !== (n = Br(u.target, !1, c)) && void 0 !== n ? n : null
                                    })
                                }
                            }
                            return r
                        }(r.filter((function(t) {
                            return "characterData" === t.type && !s(t.target)
                        })), n),
                        c = function(t, e) {
                            for (var n = [], r = new Map, i = t.filter((function(t) {
                                    var e = r.get(t.target);
                                    return !(null == e ? void 0 : e.has(t.attributeName)) && (e ? e.add(t.attributeName) : r.set(t.target, new Set([t.attributeName])), !0)
                                })), o = new Map, a = 0, s = i; a < s.length; a++) {
                                var u = s[a];
                                if (u.target.getAttribute(u.attributeName) !== u.oldValue) {
                                    var c = Dr(u.target, e),
                                        l = Zr(u.target, c, u.attributeName),
                                        f = void 0;
                                    if ("value" === u.attributeName) {
                                        var d = Lr(u.target, c);
                                        if (void 0 === d) continue;
                                        f = d
                                    } else f = l && "string" == typeof l ? l : null;
                                    var p = o.get(u.target);
                                    p || (p = {
                                        id: Rr(u.target),
                                        attributes: {}
                                    }, n.push(p), o.set(u.target, p)), p.attributes[u.attributeName] = f
                                }
                            }
                            return n
                        }(r.filter((function(t) {
                            return "attributes" === t.type && !s(t.target)
                        })), n);
                    if (!(u.length || c.length || a.length || o.length)) return;
                    e({
                        adds: o,
                        removes: a,
                        texts: u,
                        attributes: c
                    })
                }(t.concat(o.takeRecords()), e, n)
            })),
            o = new r(at(i.addMutations));
        return o.observe(document, {
            attributeOldValue: !0,
            attributes: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
        }), t.onFlush(i.flush), {
            stop: function() {
                o.disconnect(), i.stop()
            }
        }
    }
    var Qr = function() {
        function t() {}
        return t.prototype.flush = function() {
            var t;
            null === (t = this.flushListener) || void 0 === t || t.call(this)
        }, t.prototype.onFlush = function(t) {
            this.flushListener = t
        }, t
    }();
    var ti, ei = function(t, e) {
            var n = window.visualViewport,
                r = {
                    layoutViewportX: t,
                    layoutViewportY: e,
                    visualViewportX: t,
                    visualViewportY: e
                };
            return n ? (! function() {
                var t = window.visualViewport;
                return Math.abs(t.pageTop - t.offsetTop - window.scrollY) > 25 || Math.abs(t.pageLeft - t.offsetLeft - window.scrollX) > 25
            }() ? (r.visualViewportX = Math.round(t - n.offsetLeft), r.visualViewportY = Math.round(e - n.offsetTop)) : (r.layoutViewportX = Math.round(t + n.offsetLeft), r.layoutViewportY = Math.round(e + n.offsetTop)), r) : r
        },
        ni = function() {
            var t = window.visualViewport;
            return {
                scale: t.scale,
                offsetLeft: t.offsetLeft,
                offsetTop: t.offsetTop,
                pageLeft: t.pageLeft,
                pageTop: t.pageTop,
                height: t.height,
                width: t.width
            }
        };

    function ri() {
        var t = window.visualViewport;
        return q("visualviewport") && t ? t.width * t.scale : window.innerWidth || 0
    }

    function ii() {
        var t = window.visualViewport;
        return q("visualviewport") && t ? t.height * t.scale : window.innerHeight || 0
    }

    function oi() {
        var t = window.visualViewport;
        return q("visualviewport") && t ? t.pageLeft - t.offsetLeft : void 0 !== window.scrollX ? window.scrollX : window.pageXOffset || 0
    }

    function ai() {
        var t = window.visualViewport;
        return q("visualviewport") && t ? t.pageTop - t.offsetTop : void 0 !== window.scrollY ? window.scrollY : window.pageYOffset || 0
    }

    function si(e) {
        var n, r, i, o, a = (n = e.mutationController, r = e.mutationCb, i = e.defaultPrivacyLevel, Jr(n, r, i).stop),
            s = function(t) {
                var e = v(at((function(e) {
                    var n = e.target;
                    if (Cr(n)) {
                        var r = Fr(e) ? e.changedTouches[0] : e,
                            i = r.clientX,
                            o = r.clientY,
                            a = {
                                id: Rr(n),
                                timeOffset: 0,
                                x: i,
                                y: o
                            };
                        if (q("visualviewport") && window.visualViewport) {
                            var s = ei(i, o),
                                u = s.visualViewportX,
                                c = s.visualViewportY;
                            a.x = u, a.y = c
                        }
                        t([a], Fr(e) ? Qn.TouchMove : Qn.MouseMove)
                    }
                })), 50, {
                    trailing: !1
                }).throttled;
                return N(document, ["mousemove", "touchmove"], e, {
                    capture: !0,
                    passive: !0
                }).stop
            }(e.mousemoveCb),
            u = function(t, e) {
                var n = function(n) {
                    var r = n.target;
                    if (Dr(r, e) !== yr.HIDDEN && Cr(r)) {
                        var i = Fr(n) ? n.changedTouches[0] : n,
                            o = i.clientX,
                            a = i.clientY,
                            s = {
                                id: Rr(r),
                                type: ui[n.type],
                                x: o,
                                y: a
                            };
                        if (q("visualviewport") && window.visualViewport) {
                            var u = ei(o, a),
                                c = u.visualViewportX,
                                l = u.visualViewportY;
                            s.x = c, s.y = l
                        }
                        t(s)
                    }
                };
                return N(document, Object.keys(ui), n, {
                    capture: !0,
                    passive: !0
                }).stop
            }(e.mouseInteractionCb, e.defaultPrivacyLevel),
            c = function(t, e) {
                var n = v(at((function(n) {
                    var r = n.target;
                    if (r && Dr(r, e) !== yr.HIDDEN && Cr(r)) {
                        var i = Rr(r);
                        if (r === document)
                            if (q("visualviewport")) t({
                                id: i,
                                x: oi(),
                                y: ai()
                            });
                            else {
                                var o = document.scrollingElement || document.documentElement;
                                t({
                                    id: i,
                                    x: o.scrollLeft,
                                    y: o.scrollTop
                                })
                            }
                        else t({
                            id: i,
                            x: r.scrollLeft,
                            y: r.scrollTop
                        })
                    }
                })), 100).throttled;
                return I(document, "scroll", n, {
                    capture: !0,
                    passive: !0
                }).stop
            }(e.scrollCb, e.defaultPrivacyLevel),
            l = function(t) {
                var e = v(at((function() {
                    var e = ii(),
                        n = ri();
                    t({
                        height: Number(e),
                        width: Number(n)
                    })
                })), 200).throttled;
                return I(window, "resize", e, {
                    capture: !0,
                    passive: !0
                }).stop
            }(e.viewportResizeCb),
            f = function(e, n) {
                function r(t) {
                    var e = t.target,
                        r = Dr(e, n);
                    if (e && e.tagName && w(ci, e.tagName) && r !== yr.HIDDEN) {
                        var o, a = e.type;
                        if ("radio" === a || "checkbox" === a) {
                            if (zr(e, r)) return;
                            o = {
                                isChecked: e.checked
                            }
                        } else {
                            var s = Lr(e, r);
                            if (void 0 === s) return;
                            o = {
                                text: s
                            }
                        }
                        i(e, o);
                        var u = e.name;
                        "radio" === a && u && e.checked && Vr(document.querySelectorAll('input[type="radio"][name="' + u + '"]'), (function(t) {
                            t !== e && i(t, {
                                isChecked: !1
                            })
                        }))
                    }
                }

                function i(n, r) {
                    if (Cr(n)) {
                        var i = li.get(n);
                        i && i.text === r.text && i.isChecked === r.isChecked || (li.set(n, r), e(t(t({}, r), {
                            id: Rr(n)
                        })))
                    }
                }
                var o = N(document, ["input", "change"], r, {
                        capture: !0,
                        passive: !0
                    }).stop,
                    a = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value"),
                    s = [
                        [HTMLInputElement.prototype, "value"],
                        [HTMLInputElement.prototype, "checked"],
                        [HTMLSelectElement.prototype, "value"],
                        [HTMLTextAreaElement.prototype, "value"],
                        [HTMLSelectElement.prototype, "selectedIndex"]
                    ],
                    u = [];
                a && a.set && u.push.apply(u, s.map((function(t) {
                    return e = t[0], n = t[1], i = {
                            set: at((function() {
                                r({
                                    target: this
                                })
                            }))
                        }, o = Object.getOwnPropertyDescriptor(e, n), Object.defineProperty(e, n, {
                            set: function(t) {
                                var e = this;
                                setTimeout((function() {
                                    i.set.call(e, t)
                                }), 0), o && o.set && o.set.call(this, t)
                            }
                        }),
                        function() {
                            Object.defineProperty(e, n, o || {})
                        };
                    var e, n, i, o
                })));
                return function() {
                    u.forEach((function(t) {
                        return t()
                    })), o()
                }
            }(e.inputCb, e.defaultPrivacyLevel),
            d = function(t, e) {
                return N(document, ["play", "pause"], (function(n) {
                    var r = n.target;
                    r && Dr(r, e) !== yr.HIDDEN && Cr(r) && t({
                        id: Rr(r),
                        type: "play" === n.type ? fr : dr
                    })
                }), {
                    capture: !0,
                    passive: !0
                }).stop
            }(e.mediaInteractionCb, e.defaultPrivacyLevel),
            p = function(t) {
                var e = CSSStyleSheet.prototype.insertRule;
                CSSStyleSheet.prototype.insertRule = function(n, r) {
                    var i = this;
                    return st((function() {
                        Cr(i.ownerNode) && t({
                            id: Rr(i.ownerNode),
                            adds: [{
                                rule: n,
                                index: r
                            }]
                        })
                    })), e.call(this, n, r)
                };
                var n = CSSStyleSheet.prototype.deleteRule;
                return CSSStyleSheet.prototype.deleteRule = function(e) {
                        var r = this;
                        return st((function() {
                            Cr(r.ownerNode) && t({
                                id: Rr(r.ownerNode),
                                removes: [{
                                    index: e
                                }]
                            })
                        })), n.call(this, e)
                    },
                    function() {
                        CSSStyleSheet.prototype.insertRule = e, CSSStyleSheet.prototype.deleteRule = n
                    }
            }(e.styleSheetRuleCb),
            h = (o = e.focusCb, N(window, ["focus", "blur"], (function() {
                o({
                    has_focus: document.hasFocus()
                })
            })).stop),
            m = q("visualviewport") ? function(t) {
                if (!window.visualViewport) return y;
                var e = v(at((function() {
                        t(ni())
                    })), 200, {
                        trailing: !1
                    }),
                    n = e.throttled,
                    r = e.cancel,
                    i = N(window.visualViewport, ["resize", "scroll"], n, {
                        capture: !0,
                        passive: !0
                    }).stop;
                return function() {
                    i(), r()
                }
            }(e.visualViewportResizeCb) : y;
        return function() {
            a(), s(), u(), c(), l(), f(), d(), p(), h(), m()
        }
    }
    var ui = ((ti = {}).mouseup = nr, ti.mousedown = rr, ti.click = ir, ti.contextmenu = or, ti.dblclick = ar, ti.focus = sr, ti.blur = ur, ti.touchstart = cr, ti.touchend = lr, ti);
    var ci = ["INPUT", "TEXTAREA", "SELECT"],
        li = new WeakMap;

    function fi(t, e, n, r, i) {
        var o = new FormData;
        o.append("segment", new Blob([e], {
            type: "application/octet-stream"
        }), n.session.id + "-" + n.start), di(n, (function(t, e) {
            return o.append(t, e)
        })), o.append("raw_segment_size", r.toString()), new tt(t, 6e4).send(o, e.byteLength, i)
    }

    function di(t, e, n) {
        void 0 === n && (n = ""), R(t).forEach((function(t) {
            var r = t[0],
                i = t[1];
            "object" == typeof i && null !== i ? di(i, e, "" + n + r + ".") : e("" + n + r, String(i))
        }))
    }
    var pi;

    function hi(t) {
        mi(t).records_count += 1
    }

    function vi(t) {
        return null == pi ? void 0 : pi.get(t)
    }

    function mi(t) {
        var e;
        return pi || (pi = new Map), pi.has(t) ? e = pi.get(t) : (e = {
            records_count: 0,
            segments_count: 0,
            segments_total_raw_size: 0
        }, pi.set(t, e), pi.size > 10 && function() {
            if (!pi) return;
            if (pi.keys) pi.delete(pi.keys().next().value);
            else {
                var t = !0;
                pi.forEach((function(e, n) {
                    t && (pi.delete(n), t = !1)
                }))
            }
        }()), e
    }
    var _i, gi = 0,
        yi = function() {
            function e(t, e, n, r, i, o) {
                var a = this;
                this.worker = t, this.context = e, this.creationReason = n, this.isFlushed = !1, this.id = gi++, this.start = r.timestamp, this.end = r.timestamp, this.recordsCount = 1, this.hasFullSnapshot = r.type === pr;
                var s = this.context.view.id;
                ! function(t) {
                    mi(t).segments_count += 1
                }(s), hi(s);
                var u = at((function(e) {
                    var n = e.data;
                    "errored" !== n.type && "initialized" !== n.type && (n.id === a.id ? (! function(t, e) {
                        mi(t).segments_total_raw_size += e
                    }(s, n.additionalRawSize), "flushed" === n.type ? (o(n.result, n.rawSize), t.removeEventListener("message", u)) : i(n.compressedSize)) : n.id > a.id && (t.removeEventListener("message", u), ut("Segment did not receive a 'flush' response before being replaced.")))
                }));
                t.addEventListener("message", u), this.worker.postMessage({
                    data: '{"records":[' + JSON.stringify(r),
                    id: this.id,
                    action: "write"
                })
            }
            return e.prototype.addRecord = function(t) {
                this.end = t.timestamp, this.recordsCount += 1, hi(this.context.view.id), this.hasFullSnapshot || (this.hasFullSnapshot = t.type === pr), this.worker.postMessage({
                    data: "," + JSON.stringify(t),
                    id: this.id,
                    action: "write"
                })
            }, e.prototype.flush = function(t) {
                this.worker.postMessage({
                    data: "]," + JSON.stringify(this.meta).slice(1) + "\n",
                    id: this.id,
                    action: "flush"
                }), this.isFlushed = !0, this.flushReason = t
            }, Object.defineProperty(e.prototype, "meta", {
                get: function() {
                    return t({
                        creation_reason: this.creationReason,
                        end: this.end,
                        has_full_snapshot: this.hasFullSnapshot,
                        records_count: this.recordsCount,
                        start: this.start
                    }, this.context)
                },
                enumerable: !1,
                configurable: !0
            }), e
        }(),
        bi = 6e4;

    function Ei(t, e, n, r, i, o) {
        return function(t, e, n, r, i) {
            void 0 === i && (i = window);
            var o = {
                    status: 0,
                    nextSegmentCreationReason: "init"
                },
                a = t.subscribe(Gt.VIEW_CREATED, (function() {
                    c("view_change")
                })).unsubscribe,
                s = t.subscribe(Gt.BEFORE_UNLOAD, (function() {
                    c("before_unload")
                })).unsubscribe,
                u = I(i, "visibilitychange", (function() {
                    "hidden" === document.visibilityState && c("visibility_hidden")
                }), {
                    capture: !0
                }).stop;

            function c(t) {
                1 === o.status && (o.segment.flush(t || "sdk_stopped"), clearTimeout(o.expirationTimeoutId)), o = t ? {
                    status: 0,
                    nextSegmentCreationReason: t
                } : {
                    status: 2
                }
            }

            function l(t, i) {
                var a = e();
                if (a) {
                    var s = new yi(r, a, t, i, (function(t) {
                        !s.isFlushed && t > bi && c("max_size")
                    }), (function(t, e) {
                        n(t, s.meta, e, s.flushReason)
                    }));
                    o = {
                        status: 1,
                        segment: s,
                        expirationTimeoutId: setTimeout(at((function() {
                            c("max_duration")
                        })), 3e4)
                    }
                }
            }
            return {
                addRecord: function(t) {
                    switch (o.status) {
                        case 0:
                            l(o.nextSegmentCreationReason, t);
                            break;
                        case 1:
                            o.segment.addRecord(t)
                    }
                },
                stop: function() {
                    c(), a(), s(), u()
                }
            }
        }(t, (function() {
            return function(t, e, n) {
                var r = e.findTrackedSession(),
                    i = n.findView();
                if (!r || !i) return;
                return {
                    application: {
                        id: t
                    },
                    session: {
                        id: r.id
                    },
                    view: {
                        id: i.view.id
                    }
                }
            }(e, n, r)
        }), i, o)
    }

    function wi() {
        return _i || (_i = URL.createObjectURL(new Blob(["(" + Ti + ")(self)"]))), new Worker(_i)
    }

    function Ti() {
        function t(t) {
            return function() {
                try {
                    return t.apply(this, arguments)
                } catch (t) {
                    try {
                        self.postMessage({
                            type: "errored",
                            error: t
                        })
                    } catch (e) {
                        self.postMessage({
                            type: "errored",
                            error: "" + t
                        })
                    }
                }
            }
        }
        t((function() {
            var e = function() {
                    var t = 4,
                        e = 0,
                        n = 1,
                        r = 2;

                    function i(t) {
                        for (var e = t.length; --e >= 0;) t[e] = 0
                    }
                    var o = 0,
                        a = 1,
                        s = 2,
                        u = 3,
                        c = 258,
                        l = 29,
                        f = 256,
                        d = f + 1 + l,
                        p = 30,
                        h = 19,
                        v = 2 * d + 1,
                        m = 15,
                        _ = 16,
                        g = 7,
                        y = 256,
                        b = 16,
                        E = 17,
                        w = 18,
                        T = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
                        S = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
                        C = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
                        R = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                        A = 512,
                        O = new Array(2 * (d + 2));
                    i(O);
                    var k = new Array(2 * p);
                    i(k);
                    var I = new Array(A);
                    i(I);
                    var N = new Array(c - u + 1);
                    i(N);
                    var x = new Array(l);
                    i(x);
                    var L, D, M, U = new Array(p);

                    function z(t, e, n, r, i) {
                        this.static_tree = t, this.extra_bits = e, this.extra_base = n, this.elems = r, this.max_length = i, this.has_stree = t && t.length
                    }

                    function P(t, e) {
                        this.dyn_tree = t, this.max_code = 0, this.stat_desc = e
                    }
                    i(U);
                    var B = function(t) {
                            return t < 256 ? I[t] : I[256 + (t >>> 7)]
                        },
                        F = function(t, e) {
                            t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255
                        },
                        V = function(t, e, n) {
                            t.bi_valid > _ - n ? (t.bi_buf |= e << t.bi_valid & 65535, F(t, t.bi_buf), t.bi_buf = e >> _ - t.bi_valid, t.bi_valid += n - _) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += n)
                        },
                        H = function(t, e, n) {
                            V(t, n[2 * e], n[2 * e + 1])
                        },
                        W = function(t, e) {
                            var n = 0;
                            do {
                                n |= 1 & t, t >>>= 1, n <<= 1
                            } while (--e > 0);
                            return n >>> 1
                        },
                        j = function(t) {
                            16 === t.bi_valid ? (F(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8)
                        },
                        Z = function(t, e) {
                            var n, r, i, o, a, s, u = e.dyn_tree,
                                c = e.max_code,
                                l = e.stat_desc.static_tree,
                                f = e.stat_desc.has_stree,
                                d = e.stat_desc.extra_bits,
                                p = e.stat_desc.extra_base,
                                h = e.stat_desc.max_length,
                                _ = 0;
                            for (o = 0; o <= m; o++) t.bl_count[o] = 0;
                            for (u[2 * t.heap[t.heap_max] + 1] = 0, n = t.heap_max + 1; n < v; n++)(o = u[2 * u[2 * (r = t.heap[n]) + 1] + 1] + 1) > h && (o = h, _++), u[2 * r + 1] = o, r > c || (t.bl_count[o]++, a = 0, r >= p && (a = d[r - p]), s = u[2 * r], t.opt_len += s * (o + a), f && (t.static_len += s * (l[2 * r + 1] + a)));
                            if (0 !== _) {
                                do {
                                    for (o = h - 1; 0 === t.bl_count[o];) o--;
                                    t.bl_count[o]--, t.bl_count[o + 1] += 2, t.bl_count[h]--, _ -= 2
                                } while (_ > 0);
                                for (o = h; 0 !== o; o--)
                                    for (r = t.bl_count[o]; 0 !== r;)(i = t.heap[--n]) > c || (u[2 * i + 1] !== o && (t.opt_len += (o - u[2 * i + 1]) * u[2 * i], u[2 * i + 1] = o), r--)
                            }
                        },
                        Y = function(t, e, n) {
                            var r, i, o = new Array(m + 1),
                                a = 0;
                            for (r = 1; r <= m; r++) o[r] = a = a + n[r - 1] << 1;
                            for (i = 0; i <= e; i++) {
                                var s = t[2 * i + 1];
                                0 !== s && (t[2 * i] = W(o[s]++, s))
                            }
                        },
                        q = function() {
                            var t, e, n, r, i, o = new Array(m + 1);
                            for (n = 0, r = 0; r < l - 1; r++)
                                for (x[r] = n, t = 0; t < 1 << T[r]; t++) N[n++] = r;
                            for (N[n - 1] = r, i = 0, r = 0; r < 16; r++)
                                for (U[r] = i, t = 0; t < 1 << S[r]; t++) I[i++] = r;
                            for (i >>= 7; r < p; r++)
                                for (U[r] = i << 7, t = 0; t < 1 << S[r] - 7; t++) I[256 + i++] = r;
                            for (e = 0; e <= m; e++) o[e] = 0;
                            for (t = 0; t <= 143;) O[2 * t + 1] = 8, t++, o[8]++;
                            for (; t <= 255;) O[2 * t + 1] = 9, t++, o[9]++;
                            for (; t <= 279;) O[2 * t + 1] = 7, t++, o[7]++;
                            for (; t <= 287;) O[2 * t + 1] = 8, t++, o[8]++;
                            for (Y(O, d + 1, o), t = 0; t < p; t++) k[2 * t + 1] = 5, k[2 * t] = W(t, 5);
                            L = new z(O, T, f + 1, d, m), D = new z(k, S, 0, p, m), M = new z(new Array(0), C, 0, h, g)
                        },
                        K = function(t) {
                            var e;
                            for (e = 0; e < d; e++) t.dyn_ltree[2 * e] = 0;
                            for (e = 0; e < p; e++) t.dyn_dtree[2 * e] = 0;
                            for (e = 0; e < h; e++) t.bl_tree[2 * e] = 0;
                            t.dyn_ltree[2 * y] = 1, t.opt_len = t.static_len = 0, t.last_lit = t.matches = 0
                        },
                        G = function(t) {
                            t.bi_valid > 8 ? F(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0
                        },
                        X = function(t, e, n, r) {
                            G(t), r && (F(t, n), F(t, ~n)), t.pending_buf.set(t.window.subarray(e, e + n), t.pending), t.pending += n
                        },
                        $ = function(t, e, n, r) {
                            var i = 2 * e,
                                o = 2 * n;
                            return t[i] < t[o] || t[i] === t[o] && r[e] <= r[n]
                        },
                        J = function(t, e, n) {
                            for (var r = t.heap[n], i = n << 1; i <= t.heap_len && (i < t.heap_len && $(e, t.heap[i + 1], t.heap[i], t.depth) && i++, !$(e, r, t.heap[i], t.depth));) t.heap[n] = t.heap[i], n = i, i <<= 1;
                            t.heap[n] = r
                        },
                        Q = function(t, e, n) {
                            var r, i, o, a, s = 0;
                            if (0 !== t.last_lit)
                                do {
                                    r = t.pending_buf[t.d_buf + 2 * s] << 8 | t.pending_buf[t.d_buf + 2 * s + 1], i = t.pending_buf[t.l_buf + s], s++, 0 === r ? H(t, i, e) : (o = N[i], H(t, o + f + 1, e), 0 !== (a = T[o]) && (i -= x[o], V(t, i, a)), r--, o = B(r), H(t, o, n), 0 !== (a = S[o]) && (r -= U[o], V(t, r, a)))
                                } while (s < t.last_lit);
                            H(t, y, e)
                        },
                        tt = function(t, e) {
                            var n, r, i, o = e.dyn_tree,
                                a = e.stat_desc.static_tree,
                                s = e.stat_desc.has_stree,
                                u = e.stat_desc.elems,
                                c = -1;
                            for (t.heap_len = 0, t.heap_max = v, n = 0; n < u; n++) 0 !== o[2 * n] ? (t.heap[++t.heap_len] = c = n, t.depth[n] = 0) : o[2 * n + 1] = 0;
                            for (; t.heap_len < 2;) o[2 * (i = t.heap[++t.heap_len] = c < 2 ? ++c : 0)] = 1, t.depth[i] = 0, t.opt_len--, s && (t.static_len -= a[2 * i + 1]);
                            for (e.max_code = c, n = t.heap_len >> 1; n >= 1; n--) J(t, o, n);
                            i = u;
                            do {
                                n = t.heap[1], t.heap[1] = t.heap[t.heap_len--], J(t, o, 1), r = t.heap[1], t.heap[--t.heap_max] = n, t.heap[--t.heap_max] = r, o[2 * i] = o[2 * n] + o[2 * r], t.depth[i] = (t.depth[n] >= t.depth[r] ? t.depth[n] : t.depth[r]) + 1, o[2 * n + 1] = o[2 * r + 1] = i, t.heap[1] = i++, J(t, o, 1)
                            } while (t.heap_len >= 2);
                            t.heap[--t.heap_max] = t.heap[1], Z(t, e), Y(o, c, t.bl_count)
                        },
                        et = function(t, e, n) {
                            var r, i, o = -1,
                                a = e[1],
                                s = 0,
                                u = 7,
                                c = 4;
                            for (0 === a && (u = 138, c = 3), e[2 * (n + 1) + 1] = 65535, r = 0; r <= n; r++) i = a, a = e[2 * (r + 1) + 1], ++s < u && i === a || (s < c ? t.bl_tree[2 * i] += s : 0 !== i ? (i !== o && t.bl_tree[2 * i]++, t.bl_tree[2 * b]++) : s <= 10 ? t.bl_tree[2 * E]++ : t.bl_tree[2 * w]++, s = 0, o = i, 0 === a ? (u = 138, c = 3) : i === a ? (u = 6, c = 3) : (u = 7, c = 4))
                        },
                        nt = function(t, e, n) {
                            var r, i, o = -1,
                                a = e[1],
                                s = 0,
                                u = 7,
                                c = 4;
                            for (0 === a && (u = 138, c = 3), r = 0; r <= n; r++)
                                if (i = a, a = e[2 * (r + 1) + 1], !(++s < u && i === a)) {
                                    if (s < c)
                                        do {
                                            H(t, i, t.bl_tree)
                                        } while (0 != --s);
                                    else 0 !== i ? (i !== o && (H(t, i, t.bl_tree), s--), H(t, b, t.bl_tree), V(t, s - 3, 2)) : s <= 10 ? (H(t, E, t.bl_tree), V(t, s - 3, 3)) : (H(t, w, t.bl_tree), V(t, s - 11, 7));
                                    s = 0, o = i, 0 === a ? (u = 138, c = 3) : i === a ? (u = 6, c = 3) : (u = 7, c = 4)
                                }
                        },
                        rt = function(t) {
                            var e;
                            for (et(t, t.dyn_ltree, t.l_desc.max_code), et(t, t.dyn_dtree, t.d_desc.max_code), tt(t, t.bl_desc), e = h - 1; e >= 3 && 0 === t.bl_tree[2 * R[e] + 1]; e--);
                            return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e
                        },
                        it = function(t, e, n, r) {
                            var i;
                            for (V(t, e - 257, 5), V(t, n - 1, 5), V(t, r - 4, 4), i = 0; i < r; i++) V(t, t.bl_tree[2 * R[i] + 1], 3);
                            nt(t, t.dyn_ltree, e - 1), nt(t, t.dyn_dtree, n - 1)
                        },
                        ot = function(t) {
                            var r, i = 4093624447;
                            for (r = 0; r <= 31; r++, i >>>= 1)
                                if (1 & i && 0 !== t.dyn_ltree[2 * r]) return e;
                            if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return n;
                            for (r = 32; r < f; r++)
                                if (0 !== t.dyn_ltree[2 * r]) return n;
                            return e
                        },
                        at = !1,
                        st = function(t, e, n, r) {
                            V(t, (o << 1) + (r ? 1 : 0), 3), X(t, e, n, !0)
                        },
                        ut = function(e, n, i, o) {
                            var u, c, l = 0;
                            e.level > 0 ? (e.strm.data_type === r && (e.strm.data_type = ot(e)), tt(e, e.l_desc), tt(e, e.d_desc), l = rt(e), u = e.opt_len + 3 + 7 >>> 3, (c = e.static_len + 3 + 7 >>> 3) <= u && (u = c)) : u = c = i + 5, i + 4 <= u && -1 !== n ? st(e, n, i, o) : e.strategy === t || c === u ? (V(e, (a << 1) + (o ? 1 : 0), 3), Q(e, O, k)) : (V(e, (s << 1) + (o ? 1 : 0), 3), it(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, l + 1), Q(e, e.dyn_ltree, e.dyn_dtree)), K(e), o && G(e)
                        },
                        ct = {
                            _tr_init: function(t) {
                                at || (q(), at = !0), t.l_desc = new P(t.dyn_ltree, L), t.d_desc = new P(t.dyn_dtree, D), t.bl_desc = new P(t.bl_tree, M), t.bi_buf = 0, t.bi_valid = 0, K(t)
                            },
                            _tr_stored_block: st,
                            _tr_flush_block: ut,
                            _tr_tally: function(t, e, n) {
                                return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & n, t.last_lit++, 0 === e ? t.dyn_ltree[2 * n]++ : (t.matches++, e--, t.dyn_ltree[2 * (N[n] + f + 1)]++, t.dyn_dtree[2 * B(e)]++), t.last_lit === t.lit_bufsize - 1
                            },
                            _tr_align: function(t) {
                                V(t, a << 1, 3), H(t, y, O), j(t)
                            }
                        },
                        lt = function(t, e, n, r) {
                            for (var i = 65535 & t | 0, o = t >>> 16 & 65535 | 0, a = 0; 0 !== n;) {
                                n -= a = n > 2e3 ? 2e3 : n;
                                do {
                                    o = o + (i = i + e[r++] | 0) | 0
                                } while (--a);
                                i %= 65521, o %= 65521
                            }
                            return i | o << 16 | 0
                        },
                        ft = new Uint32Array(function() {
                            for (var t, e = [], n = 0; n < 256; n++) {
                                t = n;
                                for (var r = 0; r < 8; r++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
                                e[n] = t
                            }
                            return e
                        }()),
                        dt = function(t, e, n, r) {
                            var i = ft,
                                o = r + n;
                            t ^= -1;
                            for (var a = r; a < o; a++) t = t >>> 8 ^ i[255 & (t ^ e[a])];
                            return -1 ^ t
                        },
                        pt = {
                            2: "need dictionary",
                            1: "stream end",
                            0: "",
                            "-1": "file error",
                            "-2": "stream error",
                            "-3": "data error",
                            "-4": "insufficient memory",
                            "-5": "buffer error",
                            "-6": "incompatible version"
                        },
                        ht = {
                            Z_NO_FLUSH: 0,
                            Z_PARTIAL_FLUSH: 1,
                            Z_SYNC_FLUSH: 2,
                            Z_FULL_FLUSH: 3,
                            Z_FINISH: 4,
                            Z_BLOCK: 5,
                            Z_TREES: 6,
                            Z_OK: 0,
                            Z_STREAM_END: 1,
                            Z_NEED_DICT: 2,
                            Z_ERRNO: -1,
                            Z_STREAM_ERROR: -2,
                            Z_DATA_ERROR: -3,
                            Z_MEM_ERROR: -4,
                            Z_BUF_ERROR: -5,
                            Z_NO_COMPRESSION: 0,
                            Z_BEST_SPEED: 1,
                            Z_BEST_COMPRESSION: 9,
                            Z_DEFAULT_COMPRESSION: -1,
                            Z_FILTERED: 1,
                            Z_HUFFMAN_ONLY: 2,
                            Z_RLE: 3,
                            Z_FIXED: 4,
                            Z_DEFAULT_STRATEGY: 0,
                            Z_BINARY: 0,
                            Z_TEXT: 1,
                            Z_UNKNOWN: 2,
                            Z_DEFLATED: 8
                        },
                        vt = ct._tr_init,
                        mt = ct._tr_stored_block,
                        _t = ct._tr_flush_block,
                        gt = ct._tr_tally,
                        yt = ct._tr_align,
                        bt = ht.Z_NO_FLUSH,
                        Et = ht.Z_PARTIAL_FLUSH,
                        wt = ht.Z_FULL_FLUSH,
                        Tt = ht.Z_FINISH,
                        St = ht.Z_BLOCK,
                        Ct = ht.Z_OK,
                        Rt = ht.Z_STREAM_END,
                        At = ht.Z_STREAM_ERROR,
                        Ot = ht.Z_DATA_ERROR,
                        kt = ht.Z_BUF_ERROR,
                        It = ht.Z_DEFAULT_COMPRESSION,
                        Nt = ht.Z_FILTERED,
                        xt = ht.Z_HUFFMAN_ONLY,
                        Lt = ht.Z_RLE,
                        Dt = ht.Z_FIXED,
                        Mt = ht.Z_DEFAULT_STRATEGY,
                        Ut = ht.Z_UNKNOWN,
                        zt = ht.Z_DEFLATED,
                        Pt = 9,
                        Bt = 15,
                        Ft = 8,
                        Vt = 286,
                        Ht = 30,
                        Wt = 19,
                        jt = 2 * Vt + 1,
                        Zt = 15,
                        Yt = 3,
                        qt = 258,
                        Kt = qt + Yt + 1,
                        Gt = 32,
                        Xt = 42,
                        $t = 69,
                        Jt = 73,
                        Qt = 91,
                        te = 103,
                        ee = 113,
                        ne = 666,
                        re = 1,
                        ie = 2,
                        oe = 3,
                        ae = 4,
                        se = 3,
                        ue = function(t, e) {
                            return t.msg = pt[e], e
                        },
                        ce = function(t) {
                            return (t << 1) - (t > 4 ? 9 : 0)
                        },
                        le = function(t) {
                            for (var e = t.length; --e >= 0;) t[e] = 0
                        },
                        fe = function(t, e, n) {
                            return (e << t.hash_shift ^ n) & t.hash_mask
                        },
                        de = function(t) {
                            var e = t.state,
                                n = e.pending;
                            n > t.avail_out && (n = t.avail_out), 0 !== n && (t.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + n), t.next_out), t.next_out += n, e.pending_out += n, t.total_out += n, t.avail_out -= n, e.pending -= n, 0 === e.pending && (e.pending_out = 0))
                        },
                        pe = function(t, e) {
                            _t(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, de(t.strm)
                        },
                        he = function(t, e) {
                            t.pending_buf[t.pending++] = e
                        },
                        ve = function(t, e) {
                            t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e
                        },
                        me = function(t, e, n, r) {
                            var i = t.avail_in;
                            return i > r && (i = r), 0 === i ? 0 : (t.avail_in -= i, e.set(t.input.subarray(t.next_in, t.next_in + i), n), 1 === t.state.wrap ? t.adler = lt(t.adler, e, i, n) : 2 === t.state.wrap && (t.adler = dt(t.adler, e, i, n)), t.next_in += i, t.total_in += i, i)
                        },
                        _e = function(t, e) {
                            var n, r, i = t.max_chain_length,
                                o = t.strstart,
                                a = t.prev_length,
                                s = t.nice_match,
                                u = t.strstart > t.w_size - Kt ? t.strstart - (t.w_size - Kt) : 0,
                                c = t.window,
                                l = t.w_mask,
                                f = t.prev,
                                d = t.strstart + qt,
                                p = c[o + a - 1],
                                h = c[o + a];
                            t.prev_length >= t.good_match && (i >>= 2), s > t.lookahead && (s = t.lookahead);
                            do {
                                if (c[(n = e) + a] === h && c[n + a - 1] === p && c[n] === c[o] && c[++n] === c[o + 1]) {
                                    o += 2, n++;
                                    do {} while (c[++o] === c[++n] && c[++o] === c[++n] && c[++o] === c[++n] && c[++o] === c[++n] && c[++o] === c[++n] && c[++o] === c[++n] && c[++o] === c[++n] && c[++o] === c[++n] && o < d);
                                    if (r = qt - (d - o), o = d - qt, r > a) {
                                        if (t.match_start = e, a = r, r >= s) break;
                                        p = c[o + a - 1], h = c[o + a]
                                    }
                                }
                            } while ((e = f[e & l]) > u && 0 != --i);
                            return a <= t.lookahead ? a : t.lookahead
                        },
                        ge = function(t) {
                            var e, n, r, i, o, a = t.w_size;
                            do {
                                if (i = t.window_size - t.lookahead - t.strstart, t.strstart >= a + (a - Kt)) {
                                    t.window.set(t.window.subarray(a, a + a), 0), t.match_start -= a, t.strstart -= a, t.block_start -= a, e = n = t.hash_size;
                                    do {
                                        r = t.head[--e], t.head[e] = r >= a ? r - a : 0
                                    } while (--n);
                                    e = n = a;
                                    do {
                                        r = t.prev[--e], t.prev[e] = r >= a ? r - a : 0
                                    } while (--n);
                                    i += a
                                }
                                if (0 === t.strm.avail_in) break;
                                if (n = me(t.strm, t.window, t.strstart + t.lookahead, i), t.lookahead += n, t.lookahead + t.insert >= Yt)
                                    for (o = t.strstart - t.insert, t.ins_h = t.window[o], t.ins_h = fe(t, t.ins_h, t.window[o + 1]); t.insert && (t.ins_h = fe(t, t.ins_h, t.window[o + Yt - 1]), t.prev[o & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = o, o++, t.insert--, !(t.lookahead + t.insert < Yt)););
                            } while (t.lookahead < Kt && 0 !== t.strm.avail_in)
                        },
                        ye = function(t, e) {
                            for (var n, r;;) {
                                if (t.lookahead < Kt) {
                                    if (ge(t), t.lookahead < Kt && e === bt) return re;
                                    if (0 === t.lookahead) break
                                }
                                if (n = 0, t.lookahead >= Yt && (t.ins_h = fe(t, t.ins_h, t.window[t.strstart + Yt - 1]), n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== n && t.strstart - n <= t.w_size - Kt && (t.match_length = _e(t, n)), t.match_length >= Yt)
                                    if (r = gt(t, t.strstart - t.match_start, t.match_length - Yt), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= Yt) {
                                        t.match_length--;
                                        do {
                                            t.strstart++, t.ins_h = fe(t, t.ins_h, t.window[t.strstart + Yt - 1]), n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart
                                        } while (0 != --t.match_length);
                                        t.strstart++
                                    } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = fe(t, t.ins_h, t.window[t.strstart + 1]);
                                else r = gt(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
                                if (r && (pe(t, !1), 0 === t.strm.avail_out)) return re
                            }
                            return t.insert = t.strstart < Yt - 1 ? t.strstart : Yt - 1, e === Tt ? (pe(t, !0), 0 === t.strm.avail_out ? oe : ae) : t.last_lit && (pe(t, !1), 0 === t.strm.avail_out) ? re : ie
                        },
                        be = function(t, e) {
                            for (var n, r, i;;) {
                                if (t.lookahead < Kt) {
                                    if (ge(t), t.lookahead < Kt && e === bt) return re;
                                    if (0 === t.lookahead) break
                                }
                                if (n = 0, t.lookahead >= Yt && (t.ins_h = fe(t, t.ins_h, t.window[t.strstart + Yt - 1]), n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = Yt - 1, 0 !== n && t.prev_length < t.max_lazy_match && t.strstart - n <= t.w_size - Kt && (t.match_length = _e(t, n), t.match_length <= 5 && (t.strategy === Nt || t.match_length === Yt && t.strstart - t.match_start > 4096) && (t.match_length = Yt - 1)), t.prev_length >= Yt && t.match_length <= t.prev_length) {
                                    i = t.strstart + t.lookahead - Yt, r = gt(t, t.strstart - 1 - t.prev_match, t.prev_length - Yt), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;
                                    do {
                                        ++t.strstart <= i && (t.ins_h = fe(t, t.ins_h, t.window[t.strstart + Yt - 1]), n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart)
                                    } while (0 != --t.prev_length);
                                    if (t.match_available = 0, t.match_length = Yt - 1, t.strstart++, r && (pe(t, !1), 0 === t.strm.avail_out)) return re
                                } else if (t.match_available) {
                                    if ((r = gt(t, 0, t.window[t.strstart - 1])) && pe(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return re
                                } else t.match_available = 1, t.strstart++, t.lookahead--
                            }
                            return t.match_available && (r = gt(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < Yt - 1 ? t.strstart : Yt - 1, e === Tt ? (pe(t, !0), 0 === t.strm.avail_out ? oe : ae) : t.last_lit && (pe(t, !1), 0 === t.strm.avail_out) ? re : ie
                        },
                        Ee = function(t, e) {
                            for (var n, r, i, o, a = t.window;;) {
                                if (t.lookahead <= qt) {
                                    if (ge(t), t.lookahead <= qt && e === bt) return re;
                                    if (0 === t.lookahead) break
                                }
                                if (t.match_length = 0, t.lookahead >= Yt && t.strstart > 0 && (r = a[i = t.strstart - 1]) === a[++i] && r === a[++i] && r === a[++i]) {
                                    o = t.strstart + qt;
                                    do {} while (r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && i < o);
                                    t.match_length = qt - (o - i), t.match_length > t.lookahead && (t.match_length = t.lookahead)
                                }
                                if (t.match_length >= Yt ? (n = gt(t, 1, t.match_length - Yt), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (n = gt(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), n && (pe(t, !1), 0 === t.strm.avail_out)) return re
                            }
                            return t.insert = 0, e === Tt ? (pe(t, !0), 0 === t.strm.avail_out ? oe : ae) : t.last_lit && (pe(t, !1), 0 === t.strm.avail_out) ? re : ie
                        },
                        we = function(t, e) {
                            for (var n;;) {
                                if (0 === t.lookahead && (ge(t), 0 === t.lookahead)) {
                                    if (e === bt) return re;
                                    break
                                }
                                if (t.match_length = 0, n = gt(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, n && (pe(t, !1), 0 === t.strm.avail_out)) return re
                            }
                            return t.insert = 0, e === Tt ? (pe(t, !0), 0 === t.strm.avail_out ? oe : ae) : t.last_lit && (pe(t, !1), 0 === t.strm.avail_out) ? re : ie
                        };

                    function Te(t, e, n, r, i) {
                        this.good_length = t, this.max_lazy = e, this.nice_length = n, this.max_chain = r, this.func = i
                    }
                    var Se = [new Te(0, 0, 0, 0, (function(t, e) {
                            var n = 65535;
                            for (n > t.pending_buf_size - 5 && (n = t.pending_buf_size - 5);;) {
                                if (t.lookahead <= 1) {
                                    if (ge(t), 0 === t.lookahead && e === bt) return re;
                                    if (0 === t.lookahead) break
                                }
                                t.strstart += t.lookahead, t.lookahead = 0;
                                var r = t.block_start + n;
                                if ((0 === t.strstart || t.strstart >= r) && (t.lookahead = t.strstart - r, t.strstart = r, pe(t, !1), 0 === t.strm.avail_out)) return re;
                                if (t.strstart - t.block_start >= t.w_size - Kt && (pe(t, !1), 0 === t.strm.avail_out)) return re
                            }
                            return t.insert = 0, e === Tt ? (pe(t, !0), 0 === t.strm.avail_out ? oe : ae) : (t.strstart > t.block_start && (pe(t, !1), t.strm.avail_out), re)
                        })), new Te(4, 4, 8, 4, ye), new Te(4, 5, 16, 8, ye), new Te(4, 6, 32, 32, ye), new Te(4, 4, 16, 16, be), new Te(8, 16, 32, 32, be), new Te(8, 16, 128, 128, be), new Te(8, 32, 128, 256, be), new Te(32, 128, 258, 1024, be), new Te(32, 258, 258, 4096, be)],
                        Ce = function(t) {
                            t.window_size = 2 * t.w_size, le(t.head), t.max_lazy_match = Se[t.level].max_lazy, t.good_match = Se[t.level].good_length, t.nice_match = Se[t.level].nice_length, t.max_chain_length = Se[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = Yt - 1, t.match_available = 0, t.ins_h = 0
                        };

                    function Re() {
                        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = zt, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(2 * jt), this.dyn_dtree = new Uint16Array(2 * (2 * Ht + 1)), this.bl_tree = new Uint16Array(2 * (2 * Wt + 1)), le(this.dyn_ltree), le(this.dyn_dtree), le(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(Zt + 1), this.heap = new Uint16Array(2 * Vt + 1), le(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * Vt + 1), le(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
                    }
                    var Ae = function(t) {
                            if (!t || !t.state) return ue(t, At);
                            t.total_in = t.total_out = 0, t.data_type = Ut;
                            var e = t.state;
                            return e.pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = e.wrap ? Xt : ee, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = bt, vt(e), Ct
                        },
                        Oe = function(t) {
                            var e = Ae(t);
                            return e === Ct && Ce(t.state), e
                        },
                        ke = function(t, e, n, r, i, o) {
                            if (!t) return At;
                            var a = 1;
                            if (e === It && (e = 6), r < 0 ? (a = 0, r = -r) : r > 15 && (a = 2, r -= 16), i < 1 || i > Pt || n !== zt || r < 8 || r > 15 || e < 0 || e > 9 || o < 0 || o > Dt) return ue(t, At);
                            8 === r && (r = 9);
                            var s = new Re;
                            return t.state = s, s.strm = t, s.wrap = a, s.gzhead = null, s.w_bits = r, s.w_size = 1 << s.w_bits, s.w_mask = s.w_size - 1, s.hash_bits = i + 7, s.hash_size = 1 << s.hash_bits, s.hash_mask = s.hash_size - 1, s.hash_shift = ~~((s.hash_bits + Yt - 1) / Yt), s.window = new Uint8Array(2 * s.w_size), s.head = new Uint16Array(s.hash_size), s.prev = new Uint16Array(s.w_size), s.lit_bufsize = 1 << i + 6, s.pending_buf_size = 4 * s.lit_bufsize, s.pending_buf = new Uint8Array(s.pending_buf_size), s.d_buf = 1 * s.lit_bufsize, s.l_buf = 3 * s.lit_bufsize, s.level = e, s.strategy = o, s.method = n, Oe(t)
                        },
                        Ie = {
                            deflateInit: function(t, e) {
                                return ke(t, e, zt, Bt, Ft, Mt)
                            },
                            deflateInit2: ke,
                            deflateReset: Oe,
                            deflateResetKeep: Ae,
                            deflateSetHeader: function(t, e) {
                                return t && t.state ? 2 !== t.state.wrap ? At : (t.state.gzhead = e, Ct) : At
                            },
                            deflate: function(t, e) {
                                var n, r;
                                if (!t || !t.state || e > St || e < 0) return t ? ue(t, At) : At;
                                var i = t.state;
                                if (!t.output || !t.input && 0 !== t.avail_in || i.status === ne && e !== Tt) return ue(t, 0 === t.avail_out ? kt : At);
                                i.strm = t;
                                var o = i.last_flush;
                                if (i.last_flush = e, i.status === Xt)
                                    if (2 === i.wrap) t.adler = 0, he(i, 31), he(i, 139), he(i, 8), i.gzhead ? (he(i, (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)), he(i, 255 & i.gzhead.time), he(i, i.gzhead.time >> 8 & 255), he(i, i.gzhead.time >> 16 & 255), he(i, i.gzhead.time >> 24 & 255), he(i, 9 === i.level ? 2 : i.strategy >= xt || i.level < 2 ? 4 : 0), he(i, 255 & i.gzhead.os), i.gzhead.extra && i.gzhead.extra.length && (he(i, 255 & i.gzhead.extra.length), he(i, i.gzhead.extra.length >> 8 & 255)), i.gzhead.hcrc && (t.adler = dt(t.adler, i.pending_buf, i.pending, 0)), i.gzindex = 0, i.status = $t) : (he(i, 0), he(i, 0), he(i, 0), he(i, 0), he(i, 0), he(i, 9 === i.level ? 2 : i.strategy >= xt || i.level < 2 ? 4 : 0), he(i, se), i.status = ee);
                                    else {
                                        var a = zt + (i.w_bits - 8 << 4) << 8;
                                        a |= (i.strategy >= xt || i.level < 2 ? 0 : i.level < 6 ? 1 : 6 === i.level ? 2 : 3) << 6, 0 !== i.strstart && (a |= Gt), a += 31 - a % 31, i.status = ee, ve(i, a), 0 !== i.strstart && (ve(i, t.adler >>> 16), ve(i, 65535 & t.adler)), t.adler = 1
                                    }
                                if (i.status === $t)
                                    if (i.gzhead.extra) {
                                        for (n = i.pending; i.gzindex < (65535 & i.gzhead.extra.length) && (i.pending !== i.pending_buf_size || (i.gzhead.hcrc && i.pending > n && (t.adler = dt(t.adler, i.pending_buf, i.pending - n, n)), de(t), n = i.pending, i.pending !== i.pending_buf_size));) he(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;
                                        i.gzhead.hcrc && i.pending > n && (t.adler = dt(t.adler, i.pending_buf, i.pending - n, n)), i.gzindex === i.gzhead.extra.length && (i.gzindex = 0, i.status = Jt)
                                    } else i.status = Jt;
                                if (i.status === Jt)
                                    if (i.gzhead.name) {
                                        n = i.pending;
                                        do {
                                            if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > n && (t.adler = dt(t.adler, i.pending_buf, i.pending - n, n)), de(t), n = i.pending, i.pending === i.pending_buf_size)) {
                                                r = 1;
                                                break
                                            }
                                            r = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0, he(i, r)
                                        } while (0 !== r);
                                        i.gzhead.hcrc && i.pending > n && (t.adler = dt(t.adler, i.pending_buf, i.pending - n, n)), 0 === r && (i.gzindex = 0, i.status = Qt)
                                    } else i.status = Qt;
                                if (i.status === Qt)
                                    if (i.gzhead.comment) {
                                        n = i.pending;
                                        do {
                                            if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > n && (t.adler = dt(t.adler, i.pending_buf, i.pending - n, n)), de(t), n = i.pending, i.pending === i.pending_buf_size)) {
                                                r = 1;
                                                break
                                            }
                                            r = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0, he(i, r)
                                        } while (0 !== r);
                                        i.gzhead.hcrc && i.pending > n && (t.adler = dt(t.adler, i.pending_buf, i.pending - n, n)), 0 === r && (i.status = te)
                                    } else i.status = te;
                                if (i.status === te && (i.gzhead.hcrc ? (i.pending + 2 > i.pending_buf_size && de(t), i.pending + 2 <= i.pending_buf_size && (he(i, 255 & t.adler), he(i, t.adler >> 8 & 255), t.adler = 0, i.status = ee)) : i.status = ee), 0 !== i.pending) {
                                    if (de(t), 0 === t.avail_out) return i.last_flush = -1, Ct
                                } else if (0 === t.avail_in && ce(e) <= ce(o) && e !== Tt) return ue(t, kt);
                                if (i.status === ne && 0 !== t.avail_in) return ue(t, kt);
                                if (0 !== t.avail_in || 0 !== i.lookahead || e !== bt && i.status !== ne) {
                                    var s = i.strategy === xt ? we(i, e) : i.strategy === Lt ? Ee(i, e) : Se[i.level].func(i, e);
                                    if (s !== oe && s !== ae || (i.status = ne), s === re || s === oe) return 0 === t.avail_out && (i.last_flush = -1), Ct;
                                    if (s === ie && (e === Et ? yt(i) : e !== St && (mt(i, 0, 0, !1), e === wt && (le(i.head), 0 === i.lookahead && (i.strstart = 0, i.block_start = 0, i.insert = 0))), de(t), 0 === t.avail_out)) return i.last_flush = -1, Ct
                                }
                                return e !== Tt ? Ct : i.wrap <= 0 ? Rt : (2 === i.wrap ? (he(i, 255 & t.adler), he(i, t.adler >> 8 & 255), he(i, t.adler >> 16 & 255), he(i, t.adler >> 24 & 255), he(i, 255 & t.total_in), he(i, t.total_in >> 8 & 255), he(i, t.total_in >> 16 & 255), he(i, t.total_in >> 24 & 255)) : (ve(i, t.adler >>> 16), ve(i, 65535 & t.adler)), de(t), i.wrap > 0 && (i.wrap = -i.wrap), 0 !== i.pending ? Ct : Rt)
                            },
                            deflateEnd: function(t) {
                                if (!t || !t.state) return At;
                                var e = t.state.status;
                                return e !== Xt && e !== $t && e !== Jt && e !== Qt && e !== te && e !== ee && e !== ne ? ue(t, At) : (t.state = null, e === ee ? ue(t, Ot) : Ct)
                            },
                            deflateSetDictionary: function(t, e) {
                                var n = e.length;
                                if (!t || !t.state) return At;
                                var r = t.state,
                                    i = r.wrap;
                                if (2 === i || 1 === i && r.status !== Xt || r.lookahead) return At;
                                if (1 === i && (t.adler = lt(t.adler, e, n, 0)), r.wrap = 0, n >= r.w_size) {
                                    0 === i && (le(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0);
                                    var o = new Uint8Array(r.w_size);
                                    o.set(e.subarray(n - r.w_size, n), 0), e = o, n = r.w_size
                                }
                                var a = t.avail_in,
                                    s = t.next_in,
                                    u = t.input;
                                for (t.avail_in = n, t.next_in = 0, t.input = e, ge(r); r.lookahead >= Yt;) {
                                    var c = r.strstart,
                                        l = r.lookahead - (Yt - 1);
                                    do {
                                        r.ins_h = fe(r, r.ins_h, r.window[c + Yt - 1]), r.prev[c & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = c, c++
                                    } while (--l);
                                    r.strstart = c, r.lookahead = Yt - 1, ge(r)
                                }
                                return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = Yt - 1, r.match_available = 0, t.next_in = s, t.input = u, t.avail_in = a, r.wrap = i, Ct
                            },
                            deflateInfo: "pako deflate (from Nodeca project)"
                        };

                    function Ne(t) {
                        return (Ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }
                    var xe = function(t, e) {
                            return Object.prototype.hasOwnProperty.call(t, e)
                        },
                        Le = {
                            assign: function(t) {
                                for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
                                    var n = e.shift();
                                    if (n) {
                                        if ("object" !== Ne(n)) throw new TypeError(n + "must be non-object");
                                        for (var r in n) xe(n, r) && (t[r] = n[r])
                                    }
                                }
                                return t
                            },
                            flattenChunks: function(t) {
                                for (var e = 0, n = 0, r = t.length; n < r; n++) e += t[n].length;
                                for (var i = new Uint8Array(e), o = 0, a = 0, s = t.length; o < s; o++) {
                                    var u = t[o];
                                    i.set(u, a), a += u.length
                                }
                                return i
                            }
                        };
                    try {
                        String.fromCharCode.apply(null, new Uint8Array(1))
                    } catch (t) {
                        !1
                    }
                    for (var De = new Uint8Array(256), Me = 0; Me < 256; Me++) De[Me] = Me >= 252 ? 6 : Me >= 248 ? 5 : Me >= 240 ? 4 : Me >= 224 ? 3 : Me >= 192 ? 2 : 1;

                    function Ue() {
                        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
                    }
                    De[254] = De[254] = 1;
                    var ze = Ue,
                        Pe = Object.prototype.toString,
                        Be = ht.Z_NO_FLUSH,
                        Fe = ht.Z_SYNC_FLUSH,
                        Ve = ht.Z_FULL_FLUSH,
                        He = ht.Z_FINISH,
                        We = ht.Z_OK,
                        je = ht.Z_STREAM_END,
                        Ze = ht.Z_DEFAULT_COMPRESSION,
                        Ye = ht.Z_DEFAULT_STRATEGY,
                        qe = ht.Z_DEFLATED;

                    function Ke(t) {
                        this.options = Le.assign({
                            level: Ze,
                            method: qe,
                            chunkSize: 16384,
                            windowBits: 15,
                            memLevel: 8,
                            strategy: Ye
                        }, t || {});
                        var e = this.options;
                        e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new ze, this.strm.avail_out = 0;
                        var n = Ie.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
                        if (n !== We) throw new Error(pt[n]);
                        if (e.header && Ie.deflateSetHeader(this.strm, e.header), e.dictionary) {
                            var r;
                            if (r = "[object ArrayBuffer]" === Pe.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary, (n = Ie.deflateSetDictionary(this.strm, r)) !== We) throw new Error(pt[n]);
                            this._dict_set = !0
                        }
                    }
                    return Ke.prototype.push = function(t, e) {
                        var n, r, i = this.strm,
                            o = this.options.chunkSize;
                        if (this.ended) return !1;
                        for (r = e === ~~e ? e : !0 === e ? He : Be, "[object ArrayBuffer]" === Pe.call(t) ? i.input = new Uint8Array(t) : i.input = t, i.next_in = 0, i.avail_in = i.input.length;;)
                            if (0 === i.avail_out && (i.output = new Uint8Array(o), i.next_out = 0, i.avail_out = o), (r === Fe || r === Ve) && i.avail_out <= 6) this.onData(i.output.subarray(0, i.next_out)), i.avail_out = 0;
                            else {
                                if ((n = Ie.deflate(i, r)) === je) return i.next_out > 0 && this.onData(i.output.subarray(0, i.next_out)), n = Ie.deflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === We;
                                if (0 !== i.avail_out) {
                                    if (r > 0 && i.next_out > 0) this.onData(i.output.subarray(0, i.next_out)), i.avail_out = 0;
                                    else if (0 === i.avail_in) break
                                } else this.onData(i.output)
                            }
                        return !0
                    }, Ke.prototype.onData = function(t) {
                        this.chunks.push(t)
                    }, Ke.prototype.onEnd = function(t) {
                        t === We && (this.result = Le.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
                    }, {
                        Deflate: Ke,
                        constants: ht
                    }
                }(),
                n = e.Deflate,
                r = e.constants,
                i = new n,
                o = 0;

            function a(t) {
                var e = (new TextEncoder).encode(t);
                return i.push(e, r.Z_SYNC_FLUSH), o += e.length, e.length
            }
            self.addEventListener("message", t((function(t) {
                var e = t.data;
                switch (e.action) {
                    case "init":
                        self.postMessage({
                            type: "initialized"
                        });
                        break;
                    case "write":
                        var s = a(e.data);
                        self.postMessage({
                            type: "wrote",
                            id: e.id,
                            compressedSize: i.chunks.reduce((function(t, e) {
                                return t + e.length
                            }), 0),
                            additionalRawSize: s
                        });
                        break;
                    case "flush":
                        s = e.data ? a(e.data) : 0;
                        i.push("", r.Z_FINISH), self.postMessage({
                            type: "flushed",
                            id: e.id,
                            result: i.result,
                            additionalRawSize: s,
                            rawSize: o
                        }), i = new n, o = 0
                }
            })))
        }))()
    }
    var Si = {
        status: 0
    };

    function Ci(t, e) {
        switch (void 0 === e && (e = wi), Si.status) {
            case 0:
                Si = {
                        status: 1,
                        callbacks: [t]
                    },
                    function(t) {
                        void 0 === t && (t = wi);
                        try {
                            var e = t();
                            e.addEventListener("error", at(Ri)), e.addEventListener("message", at((function(t) {
                                var n, r = t.data;
                                "errored" === r.type ? Ri(r.error) : "initialized" === r.type && (n = e, 1 === Si.status && (Si.callbacks.forEach((function(t) {
                                    return t(n)
                                })), Si = {
                                    status: 3,
                                    worker: n
                                }))
                            }))), e.postMessage({
                                action: "init"
                            })
                        } catch (t) {
                            Ri(t)
                        }
                    }(e);
                break;
            case 1:
                Si.callbacks.push(t);
                break;
            case 2:
                t();
                break;
            case 3:
                t(Si.worker)
        }
    }

    function Ri(t) {
        1 === Si.status ? (r.error("Session Replay recording failed to start: an error occurred while creating the Worker:", t), t instanceof Event || t instanceof Error && w(t.message, "Content Security Policy") ? r.error("Please make sure CSP is correctly configured https://docs.datadoghq.com/real_user_monitoring/faq/content_security_policy") : ct(t), Si.callbacks.forEach((function(t) {
            return t()
        })), Si = {
            status: 2
        }) : ct(t)
    }
    var Ai, Oi, ki, Ii, Ni = function(e, n, i) {
        var o, a, s, u = (void 0 === i ? {} : i).ignoreInitIfSyntheticsWillInjectRum,
            c = void 0 === u || u,
            l = !1,
            f = (o = {}, {
                get: function() {
                    return o
                },
                add: function(t, e) {
                    o[t] = e
                },
                remove: function(t) {
                    delete o[t]
                },
                set: function(t) {
                    o = t
                }
            }),
            d = {},
            h = function() {},
            v = function() {},
            _ = new vt,
            g = function(t, e) {
                void 0 === e && (e = yt()), _.add((function() {
                    return g(t, e)
                }))
            },
            y = function(t, e) {
                void 0 === e && (e = Et()), _.add((function() {
                    return y(t, e)
                }))
            },
            b = function(t, e) {
                void 0 === e && (e = w()), _.add((function() {
                    return b(t, e)
                }))
            },
            E = function(t, e) {
                void 0 === e && (e = w()), _.add((function() {
                    return E(t, e)
                }))
            };

        function w() {
            return M({
                context: f.get(),
                user: d
            })
        }

        function S(t, r, i) {
            var o = e(t, r, (function() {
                return {
                    user: d,
                    context: f.get(),
                    hasReplay: !!n.isRecording() || void 0
                }
            }), n, i);
            y = o.startView, b = o.addAction, E = o.addError, g = o.addTiming, h = o.getInternalContext, _.drain(), n.onRumStart(o.lifeCycle, t, o.session, o.parentContexts)
        }
        return a = {
            init: at((function(e) {
                if (!c || !qt()) {
                    if (G()) e = function(e) {
                        return t(t({}, e), {
                            applicationId: "empty",
                            clientToken: "empty",
                            sampleRate: 100
                        })
                    }(e);
                    else if (! function(t) {
                            return function(t) {
                                if (void 0 === document.cookie || null === document.cookie) return !1;
                                try {
                                    var e = "dd_cookie_test_" + m(),
                                        n = "test";
                                    At(e, n, p, t);
                                    var i = Ot(e) === n;
                                    return kt(e, t), i
                                } catch (t) {
                                    return r.error(t), !1
                                }
                            }(Yt(t)) ? "file:" !== window.location.protocol || (r.error("Execution is not allowed in the current context."), !1) : (r.warn("Cookies are not authorized, we will not send any data."), !1)
                        }(e)) return;
                    if (function(t) {
                            return !l || (t.silentMultipleInit || r.error("DD_RUM is already initialized."), !1)
                        }(e)) {
                        var n = function(e) {
                            var n, i;
                            if (e.applicationId)
                                if (void 0 === e.replaySampleRate || T(e.replaySampleRate)) {
                                    if (void 0 !== e.allowedTracingOrigins) {
                                        if (!Array.isArray(e.allowedTracingOrigins)) return void r.error("Allowed Tracing Origins should be an array");
                                        if (0 !== e.allowedTracingOrigins.length && void 0 === e.service) return void r.error("Service need to be configured when tracing is enabled")
                                    }
                                    var o, a, s = Zt(e, Kt);
                                    if (s) return t(t({}, s), {
                                        applicationId: e.applicationId,
                                        actionNameAttribute: e.actionNameAttribute,
                                        replaySampleRate: null !== (n = e.replaySampleRate) && void 0 !== n ? n : 100,
                                        allowedTracingOrigins: null !== (i = e.allowedTracingOrigins) && void 0 !== i ? i : [],
                                        trackInteractions: !!e.trackInteractions,
                                        trackViewsManually: !!e.trackViewsManually,
                                        defaultPrivacyLevel: (o = jt, a = e.defaultPrivacyLevel, Object.keys(o).some((function(t) {
                                            return o[t] === a
                                        })) ? e.defaultPrivacyLevel : jt.MASK_USER_INPUT),
                                        maxActionsPerMinute: 3e3
                                    })
                                } else r.error("Replay Sample Rate should be a number between 0 and 100");
                            else r.error("Application ID is not configured, no RUM data will be collected.")
                        }(e);
                        if (n) {
                            var i = ot(n);
                            if (n.trackViewsManually) {
                                var o = _;
                                _ = new vt, y = function(t) {
                                    S(n, i, t)
                                }, o.drain()
                            } else S(n, i);
                            v = function() {
                                return M(e)
                            }, l = !0
                        }
                    }
                }
            })),
            addRumGlobalContext: at(f.add),
            removeRumGlobalContext: at(f.remove),
            getRumGlobalContext: at(f.get),
            setRumGlobalContext: at(f.set),
            getInternalContext: at((function(t) {
                return h(t)
            })),
            getInitConfiguration: at((function() {
                return v()
            })),
            addAction: at((function(t, e) {
                b({
                    name: t,
                    context: M(e),
                    startClocks: Et(),
                    type: Wt.CUSTOM
                })
            })),
            addError: function(t, e) {
                var n = Y();
                st((function() {
                    E({
                        error: t,
                        handlingStack: n,
                        context: M(e),
                        startClocks: Et()
                    })
                }))
            },
            addTiming: at((function(t, e) {
                g(t, e)
            })),
            setUser: at((function(t) {
                var e = function(t) {
                    if ("object" == typeof t && t) {
                        var e = M(t);
                        return "id" in e && (e.id = String(e.id)), "name" in e && (e.name = String(e.name)), "email" in e && (e.email = String(e.email)), e
                    }
                }(t);
                e ? d = e : r.error("Unsupported user:", t)
            })),
            removeUser: at((function() {
                d = {}
            })),
            startView: at((function(t) {
                y(t)
            })),
            startSessionReplayRecording: at(n.start),
            stopSessionReplayRecording: at(n.stop)
        }, s = t(t({}, a), {
            onReady: function(t) {
                t()
            }
        }), Object.defineProperty(s, "_setDebug", {
            get: function() {
                return ft
            },
            enumerable: !1
        }), s
    }((function(e, n, r, i, o) {
        var a, s, u = new Jt,
            c = G() ? function() {
                var t = {
                    id: "00000000-aaaa-0000-aaaa-000000000000",
                    hasReplayPlan: !0,
                    hasLitePlan: !1
                };
                return {
                    findTrackedSession: function() {
                        return t
                    }
                }
            }() : Be(e, u),
            l = (a = $t(), s = new Xt((function() {
                if (a) {
                    var t = new a(at((function() {
                        return s.notify()
                    })));
                    return t.observe(document, {
                            attributes: !0,
                            characterData: !0,
                            childList: !0,
                            subtree: !0
                        }),
                        function() {
                            return t.disconnect()
                        }
                }
            }))),
            f = tr(location);
        n.setExternalContextProvider((function() {
            var t;
            return U({
                application_id: e.applicationId,
                session: {
                    id: null === (t = c.findTrackedSession()) || void 0 === t ? void 0 : t.id
                }
            }, p.findView(), {
                view: {
                    name: null
                }
            })
        }));
        var d = function(t, e, n, r, i, o) {
                var a, s = function(t) {
                        var e = new Te(144e5),
                            n = new Te(3e5);

                        function r(t) {
                            return {
                                view: {
                                    id: t.id,
                                    name: t.name
                                }
                            }
                        }
                        return t.subscribe(Gt.VIEW_CREATED, (function(t) {
                            e.setCurrent(r(t), t.startClocks.relative)
                        })), t.subscribe(Gt.VIEW_UPDATED, (function(t) {
                            var n = e.getCurrent();
                            n && n.view.id === t.id && e.setCurrent(r(t), t.startClocks.relative)
                        })), t.subscribe(Gt.VIEW_ENDED, (function(t) {
                            var n = t.endClocks;
                            e.closeCurrent(n.relative)
                        })), t.subscribe(Gt.AUTO_ACTION_CREATED, (function(t) {
                            n.setCurrent(function(t) {
                                return {
                                    action: {
                                        id: t.id
                                    }
                                }
                            }(t), t.startClocks.relative)
                        })), t.subscribe(Gt.AUTO_ACTION_COMPLETED, (function(t) {
                            if (n.getCurrent()) {
                                var e = t.startClocks.relative + t.duration;
                                n.closeCurrent(e)
                            }
                        })), t.subscribe(Gt.AUTO_ACTION_DISCARDED, (function() {
                            n.clearCurrent()
                        })), t.subscribe(Gt.SESSION_RENEWED, (function() {
                            e.reset(), n.reset()
                        })), {
                            findAction: function(t) {
                                return n.find(t)
                            },
                            findView: function(t) {
                                return e.find(t)
                            },
                            stop: function() {
                                e.stop(), n.stop()
                            }
                        }
                    }(t),
                    u = function(t, e, n) {
                        var r, i = new Te(144e5);
                        t.subscribe(Gt.VIEW_ENDED, (function(t) {
                            var e = t.endClocks;
                            i.closeCurrent(e.relative)
                        })), t.subscribe(Gt.VIEW_CREATED, (function(t) {
                            var e = t.startClocks,
                                o = n.href;
                            i.setCurrent(a({
                                url: o,
                                referrer: r || document.referrer
                            }), e.relative), r = o
                        }));
                        var o = e.subscribe((function(t) {
                            var e = t.newLocation,
                                n = i.getCurrent();
                            if (n) {
                                var r = bt();
                                i.closeCurrent(r), i.setCurrent(a({
                                    url: e.href,
                                    referrer: n.view.referrer
                                }), r)
                            }
                        }));

                        function a(t) {
                            return {
                                view: {
                                    url: t.url,
                                    referrer: t.referrer
                                }
                            }
                        }
                        return {
                            findUrl: function(t) {
                                return i.find(t)
                            },
                            stop: function() {
                                o.unsubscribe(), i.stop()
                            }
                        }
                    }(t, i, n),
                    c = Ze();
                G() ? function(t) {
                    var e = K();
                    t.subscribe(Gt.RUM_EVENT_COLLECTED, (function(t) {
                        e.send(t.type, t)
                    }))
                }(t) : a = Jn(e, t).stop;
                return We(e, t, r, s, u, o), {
                    parentContexts: s,
                    foregroundContexts: c,
                    urlContexts: u,
                    stop: function() {
                        null == a || a(), s.stop(), c.stop()
                    }
                }
            }(u, e, location, c, f, r),
            p = d.parentContexts,
            h = d.foregroundContexts,
            v = d.urlContexts;
        ! function(t, e) {
            t.subscribe(Gt.PERFORMANCE_ENTRY_COLLECTED, (function(n) {
                if ("longtask" === n.entryType) {
                    var r = e.findTrackedSession(n.startTime);
                    if (r && !r.hasLitePlan) {
                        var i = mt(n.startTime),
                            o = {
                                date: i.timeStamp,
                                long_task: {
                                    id: m(),
                                    duration: gt(n.duration)
                                },
                                type: Vt.LONG_TASK
                            };
                        t.notify(Gt.RAW_RUM_EVENT_COLLECTED, {
                            rawRumEvent: o,
                            startTime: i.relative,
                            domainContext: {
                                performanceEntry: n.toJSON()
                            }
                        })
                    }
                }
            }))
        }(u, c), Fn(u);
        var _ = Xn(u, e, location, l, f, h, i, o),
            g = _.addTiming,
            y = _.startView,
            b = zn(u, h).addError,
            E = function(e, n, r, i) {
                return e.subscribe(Gt.AUTO_ACTION_COMPLETED, (function(t) {
                    return e.notify(Gt.RAW_RUM_EVENT_COLLECTED, In(t, i))
                })), r.trackInteractions && Rn(e, n, r), {
                    addAction: function(n, r) {
                        e.notify(Gt.RAW_RUM_EVENT_COLLECTED, t({
                            savedCommonContext: r
                        }, In(n, i)))
                    }
                }
            }(u, l, e, h).addAction;
        pn(u, e, c), ve(u, e);
        var w = function(e, n, r, i) {
            return {
                get: function(o) {
                    var a = r.findView(o),
                        s = i.findUrl(o),
                        u = n.findTrackedSession(o);
                    if (u && a && s) {
                        var c = r.findAction(o);
                        return {
                            application_id: e,
                            session_id: u.id,
                            user_action: c ? {
                                id: c.action.id
                            } : void 0,
                            view: t(t({}, a.view), s.view)
                        }
                    }
                }
            }
        }(e.applicationId, c, p, v);
        return {
            addAction: E,
            addError: b,
            addTiming: g,
            startView: y,
            lifeCycle: u,
            parentContexts: p,
            session: c,
            getInternalContext: w.get
        }
    }), function(t, e) {
        if (void 0 === e && (e = Ci), G()) return {
            start: y,
            stop: y,
            getReplayStats: function() {},
            onRumStart: y,
            isRecording: function() {
                return !1
            }
        };
        var n = {
                status: 0
            },
            r = function() {
                n = {
                    status: 1
                }
            },
            i = function() {
                n = {
                    status: 0
                }
            };
        return {
            start: function() {
                return r()
            },
            stop: function() {
                return i()
            },
            getReplayStats: vi,
            onRumStart: function(o, a, s, u) {
                o.subscribe(Gt.SESSION_EXPIRED, (function() {
                    2 !== n.status && 3 !== n.status || (i(), n = {
                        status: 1
                    })
                })), o.subscribe(Gt.SESSION_RENEWED, (function() {
                    1 === n.status && r()
                })), r = function() {
                    var r = s.findTrackedSession();
                    r && r.hasReplayPlan ? 2 !== n.status && 3 !== n.status && (n = {
                        status: 2
                    }, x("interactive", (function() {
                        2 === n.status && e((function(e) {
                            if (2 === n.status)
                                if (e) {
                                    var r = t(o, a, s, u, e).stop;
                                    n = {
                                        status: 3,
                                        stopRecording: r
                                    }
                                } else n = {
                                    status: 0
                                }
                        }))
                    }))) : n = {
                        status: 1
                    }
                }, i = function() {
                    0 !== n.status && (3 === n.status && n.stopRecording(), n = {
                        status: 0
                    })
                }, 1 === n.status && r()
            },
            isRecording: function() {
                return 3 === n.status
            }
        }
    }((function(e, n, r, i, o) {
        var a = Ei(e, n.applicationId, r, i, (function(t, e, r, i) {
                return fi(n.sessionReplayEndpointBuilder, t, e, r, i)
            }), o),
            s = a.addRecord,
            u = a.stop;

        function c(e) {
            s(t(t({}, e), {
                timestamp: Date.now()
            }))
        }
        var l = function(e) {
                var n = e.emit;
                if (!n) throw new Error("emit function is required");
                var r = new Qr,
                    i = function() {
                        r.flush(), n({
                            data: {
                                height: ii(),
                                href: window.location.href,
                                width: ri()
                            },
                            type: vr
                        }), n({
                            data: {
                                has_focus: document.hasFocus()
                            },
                            type: mr
                        }), n({
                            data: {
                                node: Hr(document, e.defaultPrivacyLevel),
                                initialOffset: {
                                    left: oi(),
                                    top: ai()
                                }
                            },
                            type: pr
                        }), q("visualviewport") && window.visualViewport && n({
                            data: ni(),
                            type: gr
                        })
                    };
                return i(), {
                    stop: si({
                        mutationController: r,
                        defaultPrivacyLevel: e.defaultPrivacyLevel,
                        inputCb: function(e) {
                            return n({
                                data: t({
                                    source: Qn.Input
                                }, e),
                                type: hr
                            })
                        },
                        mediaInteractionCb: function(e) {
                            return n({
                                data: t({
                                    source: Qn.MediaInteraction
                                }, e),
                                type: hr
                            })
                        },
                        mouseInteractionCb: function(e) {
                            return n({
                                data: t({
                                    source: Qn.MouseInteraction
                                }, e),
                                type: hr
                            })
                        },
                        mousemoveCb: function(t, e) {
                            return n({
                                data: {
                                    positions: t,
                                    source: e
                                },
                                type: hr
                            })
                        },
                        mutationCb: function(e) {
                            return n({
                                data: t({
                                    source: Qn.Mutation
                                }, e),
                                type: hr
                            })
                        },
                        scrollCb: function(e) {
                            return n({
                                data: t({
                                    source: Qn.Scroll
                                }, e),
                                type: hr
                            })
                        },
                        styleSheetRuleCb: function(e) {
                            return n({
                                data: t({
                                    source: Qn.StyleSheetRule
                                }, e),
                                type: hr
                            })
                        },
                        viewportResizeCb: function(e) {
                            return n({
                                data: t({
                                    source: Qn.ViewportResize
                                }, e),
                                type: hr
                            })
                        },
                        focusCb: function(t) {
                            return n({
                                type: mr,
                                data: t
                            })
                        },
                        visualViewportResizeCb: function(t) {
                            n({
                                data: t,
                                type: gr
                            })
                        }
                    }),
                    takeFullSnapshot: i,
                    flushMutations: function() {
                        return r.flush()
                    }
                }
            }({
                emit: c,
                defaultPrivacyLevel: n.defaultPrivacyLevel
            }),
            f = l.stop,
            d = l.takeFullSnapshot,
            p = l.flushMutations,
            h = e.subscribe(Gt.VIEW_ENDED, (function() {
                p(), c({
                    type: _r
                })
            })).unsubscribe,
            v = e.subscribe(Gt.VIEW_CREATED, d).unsubscribe;
        return {
            stop: function() {
                h(), v(), f(), u()
            }
        }
    })));
    Ai = function() {
        if ("object" == typeof globalThis) return globalThis;
        Object.defineProperty(Object.prototype, "_dd_temp_", {
            get: function() {
                return this
            },
            configurable: !0
        });
        var t = _dd_temp_;
        return delete Object.prototype._dd_temp_, "object" != typeof t && (t = "object" == typeof self ? self : "object" == typeof window ? window : {}), t
    }(), ki = Ni, Ii = Ai[Oi = "DD_RUM"], Ai[Oi] = ki, Ii && Ii.q && Ii.q.forEach((function(t) {
        return pt(t, "onReady callback threw an error:")()
    }))
}();