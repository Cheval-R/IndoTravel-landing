/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : undefined, function (ie, e) {
  "use strict";

  var oe = [],
    r = Object.getPrototypeOf,
    ae = oe.slice,
    g = oe.flat ? function (e) {
      return oe.flat.call(e);
    } : function (e) {
      return oe.concat.apply([], e);
    },
    s = oe.push,
    se = oe.indexOf,
    n = {},
    i = n.toString,
    ue = n.hasOwnProperty,
    o = ue.toString,
    a = o.call(Object),
    le = {},
    v = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
    },
    y = function (e) {
      return null != e && e === e.window;
    },
    C = ie.document,
    u = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };
  function m(e, t, n) {
    var r,
      i,
      o = (n = n || C).createElement("script");
    if (o.text = e, t) for (r in u) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e;
  }
  var t = "3.7.1",
    l = /HTML$/i,
    ce = function (e, t) {
      return new ce.fn.init(e, t);
    };
  function c(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }
  function fe(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  ce.fn = ce.prototype = {
    jquery: t,
    constructor: ce,
    length: 0,
    toArray: function () {
      return ae.call(this);
    },
    get: function (e) {
      return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = ce.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function (e) {
      return ce.each(this, e);
    },
    map: function (n) {
      return this.pushStack(ce.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function () {
      return this.pushStack(ae.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    even: function () {
      return this.pushStack(ce.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function () {
      return this.pushStack(ce.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: s,
    sort: oe.sort,
    splice: oe.splice
  }, ce.extend = ce.fn.extend = function () {
    var e,
      t,
      n,
      r,
      i,
      o,
      a = arguments[0] || {},
      s = 1,
      u = arguments.length,
      l = !1;
    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || ce.isPlainObject(n) ? n : {}, i = !1, a[t] = ce.extend(l, o, r)) : void 0 !== r && (a[t] = r));
    return a;
  }, ce.extend({
    expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (e) {
      throw new Error(e);
    },
    noop: function () {},
    isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof (n = ue.call(t, "constructor") && t.constructor) && o.call(n) === a);
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    globalEval: function (e, t, n) {
      m(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function (e, t) {
      var n,
        r = 0;
      if (c(e)) {
        for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
      } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
      return e;
    },
    text: function (e) {
      var t,
        n = "",
        r = 0,
        i = e.nodeType;
      if (!i) while (t = e[r++]) n += ce.text(t);
      return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n;
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (c(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : se.call(t, e, n);
    },
    isXMLDoc: function (e) {
      var t = e && e.namespaceURI,
        n = e && (e.ownerDocument || e).documentElement;
      return !l.test(t || n && n.nodeName || "HTML");
    },
    merge: function (e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
      return e.length = i, e;
    },
    grep: function (e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
      return r;
    },
    map: function (e, t, n) {
      var r,
        i,
        o = 0,
        a = [];
      if (c(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
      return g(a);
    },
    guid: 1,
    support: le
  }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });
  var pe = oe.pop,
    de = oe.sort,
    he = oe.splice,
    ge = "[\\x20\\t\\r\\n\\f]",
    ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
  ce.contains = function (e, t) {
    var n = t && t.parentNode;
    return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function p(e, t) {
    return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
  }
  ce.escapeSelector = function (e) {
    return (e + "").replace(f, p);
  };
  var ye = C,
    me = s;
  !function () {
    var e,
      b,
      w,
      o,
      a,
      T,
      r,
      C,
      d,
      i,
      k = me,
      S = ce.expando,
      E = 0,
      n = 0,
      s = W(),
      c = W(),
      u = W(),
      h = W(),
      l = function (e, t) {
        return e === t && (a = !0), 0;
      },
      f = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      p = "\\[" + ge + "*(" + t + ")(?:" + ge + "*([*^$|!~]?=)" + ge + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ge + "*\\]",
      g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + p + ")*)|.*)\\)|)",
      v = new RegExp(ge + "+", "g"),
      y = new RegExp("^" + ge + "*," + ge + "*"),
      m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
      x = new RegExp(ge + "|>"),
      j = new RegExp(g),
      A = new RegExp("^" + t + "$"),
      D = {
        ID: new RegExp("^#(" + t + ")"),
        CLASS: new RegExp("^\\.(" + t + ")"),
        TAG: new RegExp("^(" + t + "|[*])"),
        ATTR: new RegExp("^" + p),
        PSEUDO: new RegExp("^" + g),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + f + ")$", "i"),
        needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i")
      },
      N = /^(?:input|select|textarea|button)$/i,
      q = /^h\d$/i,
      L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      H = /[+~]/,
      O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
      P = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
      },
      M = function () {
        V();
      },
      R = J(function (e) {
        return !0 === e.disabled && fe(e, "fieldset");
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      k.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType;
    } catch (e) {
      k = {
        apply: function (e, t) {
          me.apply(e, ae.call(t));
        },
        call: function (e) {
          me.apply(e, ae.call(arguments, 1));
        }
      };
    }
    function I(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
      if (!r && (V(e), e = e || T, C)) {
        if (11 !== p && (u = L.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return k.call(n, a), n;
          } else if (f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i) return k.call(n, a), n;
        } else {
          if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && e.getElementsByClassName) return k.apply(n, e.getElementsByClassName(i)), n;
        }
        if (!(h[t + " "] || d && d.test(t))) {
          if (c = t, f = e, 1 === p && (x.test(t) || m.test(t))) {
            (f = H.test(t) && U(e.parentNode) || e) == e && le.scope || ((s = e.getAttribute("id")) ? s = ce.escapeSelector(s) : e.setAttribute("id", s = S)), o = (l = Y(t)).length;
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
            c = l.join(",");
          }
          try {
            return k.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            h(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return re(t.replace(ve, "$1"), e, n, r);
    }
    function W() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }
    function F(e) {
      return e[S] = !0, e;
    }
    function $(e) {
      var t = T.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }
    function B(t) {
      return function (e) {
        return fe(e, "input") && e.type === t;
      };
    }
    function _(t) {
      return function (e) {
        return (fe(e, "input") || fe(e, "button")) && e.type === t;
      };
    }
    function z(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && R(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }
    function X(a) {
      return F(function (o) {
        return o = +o, F(function (e, t) {
          var n,
            r = a([], e.length, o),
            i = r.length;
          while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
        });
      });
    }
    function U(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function V(e) {
      var t,
        n = e ? e.ownerDocument || e : ye;
      return n != T && 9 === n.nodeType && n.documentElement && (r = (T = n).documentElement, C = !ce.isXMLDoc(T), i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector, r.msMatchesSelector && ye != T && (t = T.defaultView) && t.top !== t && t.addEventListener("unload", M), le.getById = $(function (e) {
        return r.appendChild(e).id = ce.expando, !T.getElementsByName || !T.getElementsByName(ce.expando).length;
      }), le.disconnectedMatch = $(function (e) {
        return i.call(e, "*");
      }), le.scope = $(function () {
        return T.querySelectorAll(":scope");
      }), le.cssHas = $(function () {
        try {
          return T.querySelector(":has(*,:jqfake)"), !1;
        } catch (e) {
          return !0;
        }
      }), le.getById ? (b.filter.ID = function (e) {
        var t = e.replace(O, P);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && C) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(O, P);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && C) {
          var n,
            r,
            i,
            o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;
            while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
          }
          return [];
        }
      }), b.find.TAG = function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e);
      }, b.find.CLASS = function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && C) return t.getElementsByClassName(e);
      }, d = [], $(function (e) {
        var t;
        r.appendChild(e).innerHTML = "<a id='" + S + "' href='' disabled='disabled'></a><select id='" + S + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + ge + "*(?:value|" + f + ")"), e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="), e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"), e.querySelectorAll(":checked").length || d.push(":checked"), (t = T.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), r.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")");
      }), le.cssHas || d.push(":has"), d = d.length && new RegExp(d.join("|")), l = function (e, t) {
        if (e === t) return a = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !le.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument == ye && I.contains(ye, e) ? -1 : t === T || t.ownerDocument == ye && I.contains(ye, t) ? 1 : o ? se.call(o, e) - se.call(o, t) : 0 : 4 & n ? -1 : 1);
      }), T;
    }
    for (e in I.matches = function (e, t) {
      return I(e, null, null, t);
    }, I.matchesSelector = function (e, t) {
      if (V(e), C && !h[t + " "] && (!d || !d.test(t))) try {
        var n = i.call(e, t);
        if (n || le.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        h(t, !0);
      }
      return 0 < I(t, T, null, [e]).length;
    }, I.contains = function (e, t) {
      return (e.ownerDocument || e) != T && V(e), ce.contains(e, t);
    }, I.attr = function (e, t) {
      (e.ownerDocument || e) != T && V(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
      return void 0 !== r ? r : e.getAttribute(t);
    }, I.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, ce.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (a = !le.sortStable, o = !le.sortStable && ae.call(e, 0), de.call(e, l), a) {
        while (t = e[i++]) t === e[i] && (r = n.push(i));
        while (r--) he.call(e, n[r], 1);
      }
      return o = null, e;
    }, ce.fn.uniqueSort = function () {
      return this.pushStack(ce.uniqueSort(ae.apply(this)));
    }, (b = ce.expr = {
      cacheLength: 50,
      createPseudo: F,
      match: D,
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
        ATTR: function (e) {
          return e[1] = e[1].replace(O, P), e[3] = (e[3] || e[4] || e[5] || "").replace(O, P), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && I.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var t,
            n = !e[6] && e[2];
          return D.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && j.test(n) && (t = Y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(O, P).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return fe(e, t);
          };
        },
        CLASS: function (e) {
          var t = s[e + " "];
          return t || (t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) && s(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function (n, r, i) {
          return function (e) {
            var t = I.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function (d, e, t, h, g) {
          var v = "nth" !== d.slice(0, 3),
            y = "last" !== d.slice(-4),
            m = "of-type" === e;
          return 1 === h && 0 === g ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u = v !== y ? "nextSibling" : "previousSibling",
              l = e.parentNode,
              c = m && e.nodeName.toLowerCase(),
              f = !n && !m,
              p = !1;
            if (l) {
              if (v) {
                while (u) {
                  o = e;
                  while (o = o[u]) if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                  s = u = "only" === d && !s && "nextSibling";
                }
                return !0;
              }
              if (s = [y ? l.firstChild : l.lastChild], y && f) {
                p = (a = (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E && r[1]) && r[2], o = a && l.childNodes[a];
                while (o = ++a && o && o[u] || (p = a = 0) || s.pop()) if (1 === o.nodeType && ++p && o === e) {
                  i[d] = [E, a, p];
                  break;
                }
              } else if (f && (p = a = (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E && r[1]), !1 === p) while (o = ++a && o && o[u] || (p = a = 0) || s.pop()) if ((m ? fe(o, c) : 1 === o.nodeType) && ++p && (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]), o === e)) break;
              return (p -= g) === h || p % h == 0 && 0 <= p / h;
            }
          };
        },
        PSEUDO: function (e, o) {
          var t,
            a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? F(function (e, t) {
            var n,
              r = a(e, o),
              i = r.length;
            while (i--) e[n = se.call(e, r[i])] = !(t[n] = r[i]);
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: F(function (e) {
          var r = [],
            i = [],
            s = ne(e.replace(ve, "$1"));
          return s[S] ? F(function (e, t, n, r) {
            var i,
              o = s(e, null, r, []),
              a = e.length;
            while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: F(function (t) {
          return function (e) {
            return 0 < I(t, e).length;
          };
        }),
        contains: F(function (t) {
          return t = t.replace(O, P), function (e) {
            return -1 < (e.textContent || ce.text(e)).indexOf(t);
          };
        }),
        lang: F(function (n) {
          return A.test(n || "") || I.error("unsupported lang: " + n), n = n.replace(O, P).toLowerCase(), function (e) {
            var t;
            do {
              if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);
            return !1;
          };
        }),
        target: function (e) {
          var t = ie.location && ie.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function (e) {
          return e === r;
        },
        focus: function (e) {
          return e === function () {
            try {
              return T.activeElement;
            } catch (e) {}
          }() && T.hasFocus() && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: z(!1),
        disabled: z(!0),
        checked: function (e) {
          return fe(e, "input") && !!e.checked || fe(e, "option") && !!e.selected;
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function (e) {
          return !b.pseudos.empty(e);
        },
        header: function (e) {
          return q.test(e.nodeName);
        },
        input: function (e) {
          return N.test(e.nodeName);
        },
        button: function (e) {
          return fe(e, "input") && "button" === e.type || fe(e, "button");
        },
        text: function (e) {
          var t;
          return fe(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: X(function () {
          return [0];
        }),
        last: X(function (e, t) {
          return [t - 1];
        }),
        eq: X(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: X(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: X(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: X(function (e, t, n) {
          var r;
          for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
          return e;
        }),
        gt: X(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) b.pseudos[e] = B(e);
    for (e in {
      submit: !0,
      reset: !0
    }) b.pseudos[e] = _(e);
    function G() {}
    function Y(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = c[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;
      while (a) {
        for (o in n && !(r = y.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = m.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(ve, " ")
        }), a = a.slice(n.length)), b.filter) !(r = D[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
          value: n,
          type: o,
          matches: r
        }), a = a.slice(n.length));
        if (!n) break;
      }
      return t ? a.length : a ? I.error(e) : c(e, s).slice(0);
    }
    function Q(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function J(a, e, t) {
      var s = e.dir,
        u = e.next,
        l = u || s,
        c = t && "parentNode" === l,
        f = n++;
      return e.first ? function (e, t, n) {
        while (e = e[s]) if (1 === e.nodeType || c) return a(e, t, n);
        return !1;
      } : function (e, t, n) {
        var r,
          i,
          o = [E, f];
        if (n) {
          while (e = e[s]) if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
        } else while (e = e[s]) if (1 === e.nodeType || c) if (i = e[S] || (e[S] = {}), u && fe(e, u)) e = e[s] || e;else {
          if ((r = i[l]) && r[0] === E && r[1] === f) return o[2] = r[2];
          if ((i[l] = o)[2] = a(e, t, n)) return !0;
        }
        return !1;
      };
    }
    function K(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;
        while (r--) if (!i[r](e, t, n)) return !1;
        return !0;
      } : i[0];
    }
    function Z(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a;
    }
    function ee(d, h, g, v, y, e) {
      return v && !v[S] && (v = ee(v)), y && !y[S] && (y = ee(y, e)), F(function (e, t, n, r) {
        var i,
          o,
          a,
          s,
          u = [],
          l = [],
          c = t.length,
          f = e || function (e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
            return n;
          }(h || "*", n.nodeType ? [n] : n, []),
          p = !d || !e && h ? f : Z(f, u, d, n, r);
        if (g ? g(p, s = y || (e ? d : c || v) ? [] : t, n, r) : s = p, v) {
          i = Z(s, l), v(i, [], n, r), o = i.length;
          while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a));
        }
        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = s.length;
              while (o--) (a = s[o]) && i.push(p[o] = a);
              y(null, s = [], i, r);
            }
            o = s.length;
            while (o--) (a = s[o]) && -1 < (i = y ? se.call(e, a) : u[o]) && (e[i] = !(t[i] = a));
          }
        } else s = Z(s === t ? s.splice(c, s.length) : s), y ? y(null, t, s, r) : k.apply(t, s);
      });
    }
    function te(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = J(function (e) {
          return e === i;
        }, a, !0), l = J(function (e) {
          return -1 < se.call(i, e);
        }, a, !0), c = [function (e, t, n) {
          var r = !o && (n || t != w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
          return i = null, r;
        }]; s < r; s++) if (t = b.relative[e[s].type]) c = [J(K(c), t)];else {
        if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
          for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
          return ee(1 < s && K(c), 1 < s && Q(e.slice(0, s - 1).concat({
            value: " " === e[s - 2].type ? "*" : ""
          })).replace(ve, "$1"), t, s < n && te(e.slice(s, n)), n < r && te(e = e.slice(n)), n < r && Q(e));
        }
        c.push(t);
      }
      return K(c);
    }
    function ne(e, t) {
      var n,
        v,
        y,
        m,
        x,
        r,
        i = [],
        o = [],
        a = u[e + " "];
      if (!a) {
        t || (t = Y(e)), n = t.length;
        while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a);
        (a = u(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
          var o,
            a,
            s,
            u = 0,
            l = "0",
            c = e && [],
            f = [],
            p = w,
            d = e || x && b.find.TAG("*", i),
            h = E += null == p ? 1 : Math.random() || .1,
            g = d.length;
          for (i && (w = t == T || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == T || (V(o), n = !C);
              while (s = v[a++]) if (s(o, t || T, n)) {
                k.call(r, o);
                break;
              }
              i && (E = h);
            }
            m && ((o = !s && o) && u--, e && c.push(o));
          }
          if (u += l, m && l !== u) {
            a = 0;
            while (s = y[a++]) s(c, f, t, n);
            if (e) {
              if (0 < u) while (l--) c[l] || f[l] || (f[l] = pe.call(r));
              f = Z(f);
            }
            k.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r);
          }
          return i && (E = h, w = p), c;
        }, m ? F(r) : r))).selector = e;
      }
      return a;
    }
    function re(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = "function" == typeof e && e,
        c = !r && Y(e = l.selector || e);
      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }
        i = D.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;
          if ((u = b.find[s]) && (r = u(a.matches[0].replace(O, P), H.test(o[0].type) && U(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && Q(o))) return k.apply(n, r), n;
            break;
          }
        }
      }
      return (l || ne(e, c))(r, t, !C, n, !t || H.test(e) && U(t.parentNode) || t), n;
    }
    G.prototype = b.filters = b.pseudos, b.setFilters = new G(), le.sortStable = S.split("").sort(l).join("") === S, V(), le.sortDetached = $(function (e) {
      return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
    }), ce.find = I, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I.compile = ne, I.select = re, I.setDocument = V, I.tokenize = Y, I.escape = ce.escapeSelector, I.getText = ce.text, I.isXML = ce.isXMLDoc, I.selectors = ce.expr, I.support = ce.support, I.uniqueSort = ce.uniqueSort;
  }();
  var d = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
        if (i && ce(e).is(n)) break;
        r.push(e);
      }
      return r;
    },
    h = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    b = ce.expr.match.needsContext,
    w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function T(e, n, r) {
    return v(n) ? ce.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? ce.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? ce.grep(e, function (e) {
      return -1 < se.call(n, e) !== r;
    }) : ce.filter(n, e, r);
  }
  ce.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, ce.fn.extend({
    find: function (e) {
      var t,
        n,
        r = this.length,
        i = this;
      if ("string" != typeof e) return this.pushStack(ce(e).filter(function () {
        for (t = 0; t < r; t++) if (ce.contains(i[t], this)) return !0;
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
      return 1 < r ? ce.uniqueSort(n) : n;
    },
    filter: function (e) {
      return this.pushStack(T(this, e || [], !1));
    },
    not: function (e) {
      return this.pushStack(T(this, e || [], !0));
    },
    is: function (e) {
      return !!T(this, "string" == typeof e && b.test(e) ? ce(e) : e || [], !1).length;
    }
  });
  var k,
    S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (ce.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (n = n || k, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof ce ? t[0] : t, ce.merge(this, ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), w.test(r[1]) && ce.isPlainObject(t)) for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(ce) : ce.makeArray(e, this);
  }).prototype = ce.fn, k = ce(C);
  var E = /^(?:parents|prev(?:Until|All))/,
    j = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  function A(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  ce.fn.extend({
    has: function (e) {
      var t = ce(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (ce.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && ce(e);
      if (!b.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
        o.push(n);
        break;
      }
      return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o);
    },
    index: function (e) {
      return e ? "string" == typeof e ? se.call(ce(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), ce.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return d(e, "parentNode");
    },
    parentsUntil: function (e, t, n) {
      return d(e, "parentNode", n);
    },
    next: function (e) {
      return A(e, "nextSibling");
    },
    prev: function (e) {
      return A(e, "previousSibling");
    },
    nextAll: function (e) {
      return d(e, "nextSibling");
    },
    prevAll: function (e) {
      return d(e, "previousSibling");
    },
    nextUntil: function (e, t, n) {
      return d(e, "nextSibling", n);
    },
    prevUntil: function (e, t, n) {
      return d(e, "previousSibling", n);
    },
    siblings: function (e) {
      return h((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return h(e.firstChild);
    },
    contents: function (e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (fe(e, "template") && (e = e.content || e), ce.merge([], e.childNodes));
    }
  }, function (r, i) {
    ce.fn[r] = function (e, t) {
      var n = ce.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = ce.filter(t, n)), 1 < this.length && (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var D = /[^\x20\t\r\n\f]+/g;
  function N(e) {
    return e;
  }
  function q(e) {
    throw e;
  }
  function L(e, t, n, r) {
    var i;
    try {
      e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  ce.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, ce.each(e.match(D) || [], function (e, t) {
      n[t] = !0;
    }), n) : ce.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
        r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
            ce.each(e, function (e, t) {
              v(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== x(t) && n(t);
            });
          }(arguments), t && !i && c()), this;
        },
        remove: function () {
          return ce.each(arguments, function (e, t) {
            var n;
            while (-1 < (n = ce.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
          }), this;
        },
        has: function (e) {
          return e ? -1 < ce.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return a = u = [], s = t = "", this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return a = u = [], t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        }
      };
    return f;
  }, ce.extend({
    Deferred: function (e) {
      var o = [["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2], ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]],
        i = "pending",
        a = {
          state: function () {
            return i;
          },
          always: function () {
            return s.done(arguments).fail(arguments), this;
          },
          "catch": function (e) {
            return a.then(null, e);
          },
          pipe: function () {
            var i = arguments;
            return ce.Deferred(function (r) {
              ce.each(o, function (e, t) {
                var n = v(i[t[4]]) && i[t[4]];
                s[t[1]](function () {
                  var e = n && n.apply(this, arguments);
                  e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                });
              }), i = null;
            }).promise();
          },
          then: function (t, n, r) {
            var u = 0;
            function l(i, o, a, s) {
              return function () {
                var n = this,
                  r = arguments,
                  e = function () {
                    var e, t;
                    if (!(i < u)) {
                      if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                      t = e && ("object" == typeof e || "function" == typeof e) && e.then, v(t) ? s ? t.call(e, l(u, o, N, s), l(u, o, q, s)) : (u++, t.call(e, l(u, o, N, s), l(u, o, q, s), l(u, o, N, o.notifyWith))) : (a !== N && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                    }
                  },
                  t = s ? e : function () {
                    try {
                      e();
                    } catch (e) {
                      ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, t.error), u <= i + 1 && (a !== q && (n = void 0, r = [e]), o.rejectWith(n, r));
                    }
                  };
                i ? t() : (ce.Deferred.getErrorHook ? t.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t.error = ce.Deferred.getStackHook()), ie.setTimeout(t));
              };
            }
            return ce.Deferred(function (e) {
              o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)), o[1][3].add(l(0, e, v(t) ? t : N)), o[2][3].add(l(0, e, v(n) ? n : q));
            }).promise();
          },
          promise: function (e) {
            return null != e ? ce.extend(e, a) : a;
          }
        },
        s = {};
      return ce.each(o, function (e, t) {
        var n = t[2],
          r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function (e) {
      var n = arguments.length,
        t = n,
        r = Array(t),
        i = ae.call(arguments),
        o = ce.Deferred(),
        a = function (t) {
          return function (e) {
            r[t] = this, i[t] = 1 < arguments.length ? ae.call(arguments) : e, --n || o.resolveWith(r, i);
          };
        };
      if (n <= 1 && (L(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || v(i[t] && i[t].then))) return o.then();
      while (t--) L(i[t], a(t), o.reject);
      return o.promise();
    }
  });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  ce.Deferred.exceptionHook = function (e, t) {
    ie.console && ie.console.warn && e && H.test(e.name) && ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, ce.readyException = function (e) {
    ie.setTimeout(function () {
      throw e;
    });
  };
  var O = ce.Deferred();
  function P() {
    C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready();
  }
  ce.fn.ready = function (e) {
    return O.then(e)["catch"](function (e) {
      ce.readyException(e);
    }), this;
  }, ce.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (e) {
      (!0 === e ? --ce.readyWait : ce.isReady) || (ce.isReady = !0) !== e && 0 < --ce.readyWait || O.resolveWith(C, [ce]);
    }
  }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
  var M = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === x(n)) for (s in i = !0, n) M(e, t, s, n[s], !0, o, a);else if (void 0 !== r && (i = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
        return l.call(ce(e), n);
      })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    R = /^-ms-/,
    I = /-([a-z])/g;
  function W(e, t) {
    return t.toUpperCase();
  }
  function F(e) {
    return e.replace(R, "ms-").replace(I, W);
  }
  var $ = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function B() {
    this.expando = ce.expando + B.uid++;
  }
  B.uid = 1, B.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function (e, t, n) {
      var r,
        i = this.cache(e);
      if ("string" == typeof t) i[F(t)] = n;else for (r in t) i[F(r)] = t[r];
      return i;
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][F(t)];
    },
    access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function (e, t) {
      var n,
        r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(F) : (t = F(t)) in r ? [t] : t.match(D) || []).length;
          while (n--) delete r[t[n]];
        }
        (void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !ce.isEmptyObject(t);
    }
  };
  var _ = new B(),
    z = new B(),
    X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    U = /[A-Z]/g;
  function V(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(U, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : X.test(i) ? JSON.parse(i) : i);
      } catch (e) {}
      z.set(e, t, n);
    } else n = void 0;
    return n;
  }
  ce.extend({
    hasData: function (e) {
      return z.hasData(e) || _.hasData(e);
    },
    data: function (e, t, n) {
      return z.access(e, t, n);
    },
    removeData: function (e, t) {
      z.remove(e, t);
    },
    _data: function (e, t, n) {
      return _.access(e, t, n);
    },
    _removeData: function (e, t) {
      _.remove(e, t);
    }
  }), ce.fn.extend({
    data: function (n, e) {
      var t,
        r,
        i,
        o = this[0],
        a = o && o.attributes;
      if (void 0 === n) {
        if (this.length && (i = z.get(o), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))) {
          t = a.length;
          while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = F(r.slice(5)), V(o, r, i[r]));
          _.set(o, "hasDataAttrs", !0);
        }
        return i;
      }
      return "object" == typeof n ? this.each(function () {
        z.set(this, n);
      }) : M(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = z.get(o, n)) ? t : void 0 !== (t = V(o, n)) ? t : void 0;
        this.each(function () {
          z.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function (e) {
      return this.each(function () {
        z.remove(this, e);
      });
    }
  }), ce.extend({
    queue: function (e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = _.get(e, t), n && (!r || Array.isArray(n) ? r = _.access(e, t, ce.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function (e, t) {
      t = t || "fx";
      var n = ce.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = ce._queueHooks(e, t);
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        ce.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return _.get(e, n) || _.access(e, n, {
        empty: ce.Callbacks("once memory").add(function () {
          _.remove(e, [t + "queue", n]);
        })
      });
    }
  }), ce.fn.extend({
    queue: function (t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? ce.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = ce.queue(this, t, n);
        ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        ce.dequeue(this, e);
      });
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", []);
    },
    promise: function (e, t) {
      var n,
        r = 1,
        i = ce.Deferred(),
        o = this,
        a = this.length,
        s = function () {
          --r || i.resolveWith(o, [o]);
        };
      "string" != typeof e && (t = e, e = void 0), e = e || "fx";
      while (a--) (n = _.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t);
    }
  });
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
    Q = ["Top", "Right", "Bottom", "Left"],
    J = C.documentElement,
    K = function (e) {
      return ce.contains(e.ownerDocument, e);
    },
    Z = {
      composed: !0
    };
  J.getRootNode && (K = function (e) {
    return ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument;
  });
  var ee = function (e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && K(e) && "none" === ce.css(e, "display");
  };
  function te(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r ? function () {
        return r.cur();
      } : function () {
        return ce.css(e, t, "");
      },
      u = s(),
      l = n && n[3] || (ce.cssNumber[t] ? "" : "px"),
      c = e.nodeType && (ce.cssNumber[t] || "px" !== l && +u) && Y.exec(ce.css(e, t));
    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;
      while (a--) ce.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      c *= 2, ce.style(e, t, c + l), n = n || [];
    }
    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }
  var ne = {};
  function re(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = _.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ee(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ne[s]) || (o = a.body.appendChild(a.createElement(s)), u = ce.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ne[s] = u)))) : "none" !== n && (l[c] = "none", _.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  ce.fn.extend({
    show: function () {
      return re(this, !0);
    },
    hide: function () {
      return re(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ee(this) ? ce(this).show() : ce(this).hide();
      });
    }
  });
  var xe,
    be,
    we = /^(?:checkbox|radio)$/i,
    Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ce = /^$|^module$|\/(?:java|ecma)script/i;
  xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild;
  var ke = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  function Se(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && fe(e, t) ? ce.merge([e], n) : n;
  }
  function Ee(e, t) {
    for (var n = 0, r = e.length; n < r; n++) _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"));
  }
  ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
  var je = /<|&#?\w+;/;
  function Ae(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o);else if (je.test(o)) {
      a = a || f.appendChild(t.createElement("div")), s = (Te.exec(o) || ["", ""])[1].toLowerCase(), u = ke[s] || ke._default, a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2], c = u[0];
      while (c--) a = a.lastChild;
      ce.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
    } else p.push(t.createTextNode(o));
    f.textContent = "", d = 0;
    while (o = p[d++]) if (r && -1 < ce.inArray(o, r)) i && i.push(o);else if (l = K(o), a = Se(f.appendChild(o), "script"), l && Ee(a), n) {
      c = 0;
      while (o = a[c++]) Ce.test(o.type || "") && n.push(o);
    }
    return f;
  }
  var De = /^([^.]*)(?:\.(.+)|)/;
  function Ne() {
    return !0;
  }
  function qe() {
    return !1;
  }
  function Le(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) Le(e, s, n, r, t[s], o);
      return e;
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = qe;else if (!i) return e;
    return 1 === o && (a = i, (i = function (e) {
      return ce().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = ce.guid++)), e.each(function () {
      ce.event.add(this, t, i, r, n);
    });
  }
  function He(e, r, t) {
    t ? (_.set(e, r, !1), ce.event.add(e, r, {
      namespace: !1,
      handler: function (e) {
        var t,
          n = _.get(this, r);
        if (1 & e.isTrigger && this[r]) {
          if (n) (ce.event.special[r] || {}).delegateType && e.stopPropagation();else if (n = ae.call(arguments), _.set(this, r, n), this[r](), t = _.get(this, r), _.set(this, r, !1), n !== t) return e.stopImmediatePropagation(), e.preventDefault(), t;
        } else n && (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Ne);
      }
    })) : void 0 === _.get(e, r) && ce.event.add(e, r, Ne);
  }
  ce.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.get(t);
      if ($(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && ce.find.matchesSelector(J, i), n.guid || (n.guid = ce.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof ce && ce.event.triggered !== e.type ? ce.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(D) || [""]).length;
        while (l--) d = g = (s = De.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = ce.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = ce.event.special[d] || {}, c = ce.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && ce.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), ce.event.global[d] = !0);
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.hasData(e) && _.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(D) || [""]).length;
        while (l--) if (d = g = (s = De.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
          f = ce.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
          while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
          a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || ce.removeEvent(e, d, v.handle), delete u[d]);
        } else for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
        ce.isEmptyObject(u) && _.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = ce.event.fix(e),
        l = (_.get(this, "events") || Object.create(null))[u.type] || [],
        c = ce.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = ce.event.handlers.call(this, u, l), t = 0;
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < ce(i, this).index(l) : ce.find(i, this, null, [l]).length), a[i] && o.push(r);
        o.length && s.push({
          elem: l,
          handlers: o
        });
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function (t, e) {
      Object.defineProperty(ce.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: v(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function (e) {
      return e[ce.expando] ? e : new ce.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function (e) {
          var t = this || e;
          return we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0), !1;
        },
        trigger: function (e) {
          var t = this || e;
          return we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0;
        },
        _default: function (e) {
          var t = e.target;
          return we.test(t.type) && t.click && fe(t, "input") && _.get(t, "click") || fe(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, ce.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, ce.Event = function (e, t) {
    if (!(this instanceof ce.Event)) return new ce.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : qe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ce.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[ce.expando] = !0;
  }, ce.Event.prototype = {
    constructor: ce.Event,
    isDefaultPrevented: qe,
    isPropagationStopped: qe,
    isImmediatePropagationStopped: qe,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ne, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = Ne, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ne, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, ce.each({
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
    "char": !0,
    code: !0,
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
    which: !0
  }, ce.event.addProp), ce.each({
    focus: "focusin",
    blur: "focusout"
  }, function (r, i) {
    function o(e) {
      if (C.documentMode) {
        var t = _.get(this, "handle"),
          n = ce.event.fix(e);
        n.type = "focusin" === e.type ? "focus" : "blur", n.isSimulated = !0, t(e), n.target === n.currentTarget && t(n);
      } else ce.event.simulate(i, e.target, ce.event.fix(e));
    }
    ce.event.special[r] = {
      setup: function () {
        var e;
        if (He(this, r, !0), !C.documentMode) return !1;
        (e = _.get(this, i)) || this.addEventListener(i, o), _.set(this, i, (e || 0) + 1);
      },
      trigger: function () {
        return He(this, r), !0;
      },
      teardown: function () {
        var e;
        if (!C.documentMode) return !1;
        (e = _.get(this, i) - 1) ? _.set(this, i, e) : (this.removeEventListener(i, o), _.remove(this, i));
      },
      _default: function (e) {
        return _.get(e.target, r);
      },
      delegateType: i
    }, ce.event.special[i] = {
      setup: function () {
        var e = this.ownerDocument || this.document || this,
          t = C.documentMode ? this : e,
          n = _.get(t, i);
        n || (C.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)), _.set(t, i, (n || 0) + 1);
      },
      teardown: function () {
        var e = this.ownerDocument || this.document || this,
          t = C.documentMode ? this : e,
          n = _.get(t, i) - 1;
        n ? _.set(t, i, n) : (C.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0), _.remove(t, i));
      }
    };
  }), ce.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    ce.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function (e) {
        var t,
          n = e.relatedTarget,
          r = e.handleObj;
        return n && (n === this || ce.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), ce.fn.extend({
    on: function (e, t, n, r) {
      return Le(this, e, t, n, r);
    },
    one: function (e, t, n, r) {
      return Le(this, e, t, n, r, 1);
    },
    off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this;
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = qe), this.each(function () {
        ce.event.remove(this, e, n, t);
      });
    }
  });
  var Oe = /<script|<style|<link/i,
    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Re(e, t) {
    return fe(e, "table") && fe(11 !== t.nodeType ? t : t.firstChild, "tr") && ce(e).children("tbody")[0] || e;
  }
  function Ie(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }
  function We(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }
  function Fe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (_.hasData(e) && (s = _.get(e).events)) for (i in _.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
      z.hasData(e) && (o = z.access(e), a = ce.extend({}, o), z.set(t, a));
    }
  }
  function $e(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = v(d);
    if (h || 1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o);
    });
    if (f && (t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++) u = e, c !== p && (u = ce.clone(u, !0, !0), s && ce.merge(a, Se(u, "script"))), i.call(n[c], u, c);
      if (s) for (l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0; c < s; c++) u = a[c], Ce.test(u.type || "") && !_.access(u, "globalEval") && ce.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ce._evalUrl && !u.noModule && ce._evalUrl(u.src, {
        nonce: u.nonce || u.getAttribute("nonce")
      }, l) : m(u.textContent.replace(Me, ""), u, l));
    }
    return n;
  }
  function Be(e, t, n) {
    for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ce.cleanData(Se(r)), r.parentNode && (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  ce.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = K(e);
      if (!(le.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e))) for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      if (t) if (n) for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++) Fe(o[r], a[r]);else Fe(e, c);
      return 0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c;
    },
    cleanData: function (e) {
      for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++) if ($(n)) {
        if (t = n[_.expando]) {
          if (t.events) for (r in t.events) i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
          n[_.expando] = void 0;
        }
        n[z.expando] && (n[z.expando] = void 0);
      }
    }
  }), ce.fn.extend({
    detach: function (e) {
      return Be(this, e, !0);
    },
    remove: function (e) {
      return Be(this, e);
    },
    text: function (e) {
      return M(this, function (e) {
        return void 0 === e ? ce.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function () {
      return $e(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e).appendChild(e);
      });
    },
    prepend: function () {
      return $e(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Re(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return $e(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return $e(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ce.cleanData(Se(e, !1)), e.textContent = "");
      return this;
    },
    clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return ce.clone(this, e, t);
      });
    },
    html: function (e) {
      return M(this, function (e) {
        var t = this[0] || {},
          n = 0,
          r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !Oe.test(e) && !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = ce.htmlPrefilter(e);
          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (ce.cleanData(Se(t, !1)), t.innerHTML = e);
            t = 0;
          } catch (e) {}
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var n = [];
      return $e(this, arguments, function (e) {
        var t = this.parentNode;
        ce.inArray(this, n) < 0 && (ce.cleanData(Se(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), ce.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    ce.fn[e] = function (e) {
      for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), ce(r[o])[a](t), s.apply(n, t.get());
      return this.pushStack(n);
    };
  });
  var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
    ze = /^--/,
    Xe = function (e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = ie), t.getComputedStyle(e);
    },
    Ue = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) o[i] = e.style[i], e.style[i] = t[i];
      for (i in r = n.call(e), t) e.style[i] = o[i];
      return r;
    },
    Ve = new RegExp(Q.join("|"), "i");
  function Ge(e, t, n) {
    var r,
      i,
      o,
      a,
      s = ze.test(t),
      u = e.style;
    return (n = n || Xe(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(ve, "$1") || void 0), "" !== a || K(e) || (a = ce.style(e, t)), !le.pixelBoxStyles() && _e.test(a) && Ve.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a;
  }
  function Ye(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }
  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u).appendChild(l);
        var e = ie.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), J.removeChild(u), l = null;
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = C.createElement("div"),
      l = C.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l.style.backgroundClip, ce.extend(le, {
      boxSizingReliable: function () {
        return e(), r;
      },
      pixelBoxStyles: function () {
        return e(), o;
      },
      pixelPosition: function () {
        return e(), n;
      },
      reliableMarginLeft: function () {
        return e(), s;
      },
      scrollboxSize: function () {
        return e(), i;
      },
      reliableTrDimensions: function () {
        var e, t, n, r;
        return null == a && (e = C.createElement("table"), t = C.createElement("tr"), n = C.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", J.appendChild(e).appendChild(t).appendChild(n), r = ie.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, J.removeChild(e)), a;
      }
    }));
  }();
  var Qe = ["Webkit", "Moz", "ms"],
    Je = C.createElement("div").style,
    Ke = {};
  function Ze(e) {
    var t = ce.cssProps[e] || Ke[e];
    return t || (e in Je ? e : Ke[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
        n = Qe.length;
      while (n--) if ((e = Qe[n] + t) in Je) return e;
    }(e) || e);
  }
  var et = /^(none|table(?!-c[ea]).+)/,
    tt = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    nt = {
      letterSpacing: "0",
      fontWeight: "400"
    };
  function rt(e, t, n) {
    var r = Y.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function it(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0,
      l = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2) "margin" === n && (l += ce.css(e, n + Q[a], !0, i)), r ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)), "margin" !== n && (u -= ce.css(e, "border" + Q[a] + "Width", !0, i))) : (u += ce.css(e, "padding" + Q[a], !0, i), "padding" !== n ? u += ce.css(e, "border" + Q[a] + "Width", !0, i) : s += ce.css(e, "border" + Q[a] + "Width", !0, i));
    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u + l;
  }
  function ot(e, t, n) {
    var r = Xe(e),
      i = (!le.boxSizingReliable() || n) && "border-box" === ce.css(e, "boxSizing", !1, r),
      o = i,
      a = Ge(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (_e.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (!le.boxSizingReliable() && i || !le.reliableTrDimensions() && fe(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === ce.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === ce.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }
  function at(e, t, n, r, i) {
    return new at.prototype.init(e, t, n, r, i);
  }
  ce.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Ge(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = F(t),
          u = ze.test(t),
          l = e.style;
        if (u || (t = Ze(s)), a = ce.cssHooks[t] || ce.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) && (i = Y.exec(n)) && i[1] && (n = te(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (ce.cssNumber[s] ? "" : "px")), le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = F(t);
      return ze.test(t) || (t = Ze(s)), (a = ce.cssHooks[t] || ce.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ge(e, t, r)), "normal" === i && t in nt && (i = nt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), ce.each(["height", "width"], function (e, u) {
    ce.cssHooks[u] = {
      get: function (e, t, n) {
        if (t) return !et.test(ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, u, n) : Ue(e, tt, function () {
          return ot(e, u, n);
        });
      },
      set: function (e, t, n) {
        var r,
          i = Xe(e),
          o = !le.scrollboxSize() && "absolute" === i.position,
          a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
          s = n ? it(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - it(e, u, "border", !1, i) - .5)), s && (r = Y.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = ce.css(e, u)), rt(0, t, s);
      }
    };
  }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), ce.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    ce.cssHooks[i + o] = {
      expand: function (e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
        return n;
      }
    }, "margin" !== i && (ce.cssHooks[i + o].set = rt);
  }), ce.fn.extend({
    css: function (e, t) {
      return M(this, function (e, t, n) {
        var r,
          i,
          o = {},
          a = 0;
        if (Array.isArray(t)) {
          for (r = Xe(e), i = t.length; a < i; a++) o[t[a]] = ce.css(e, t[a], !1, r);
          return o;
        }
        return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((ce.Tween = at).prototype = {
    constructor: at,
    init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || ce.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ce.cssNumber[n] ? "" : "px");
    },
    cur: function () {
      var e = at.propHooks[this.prop];
      return e && e.get ? e.get(this) : at.propHooks._default.get(this);
    },
    run: function (e) {
      var t,
        n = at.propHooks[this.prop];
      return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this;
    }
  }).init.prototype = at.prototype, (at.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function (e) {
        ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : ce.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = at.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, ce.easing = {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, ce.fx = at.prototype.init, ce.fx.step = {};
  var st,
    ut,
    lt,
    ct,
    ft = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/;
  function dt() {
    ut && (!1 === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick());
  }
  function ht() {
    return ie.setTimeout(function () {
      st = void 0;
    }), st = Date.now();
  }
  function gt(e, t) {
    var n,
      r = 0,
      i = {
        height: e
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Q[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function vt(e, t, n) {
    for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
  }
  function yt(o, e, t) {
    var n,
      a,
      r = 0,
      i = yt.prefilters.length,
      s = ce.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (var e = st || ht(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
        return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
      },
      l = s.promise({
        elem: o,
        props: ce.extend({}, e),
        opts: ce.extend(!0, {
          specialEasing: {},
          easing: ce.easing._default
        }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: st || ht(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = ce.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
        }
      }),
      c = l.props;
    for (!function (e, t) {
      var n, r, i, o, a;
      for (n in e) if (i = t[r = F(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ce.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) (n in e) || (e[n] = o[n], t[n] = i);else t[r] = i;
    }(c, l.opts.specialEasing); r < i; r++) if (n = yt.prefilters[r].call(l, o, c, l.opts)) return v(n.stop) && (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    return ce.map(c, vt, l), v(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), ce.fx.timer(ce.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }
  ce.Animation = ce.extend(yt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return te(n.elem, e, Y.exec(t), n), n;
      }]
    },
    tweener: function (e, t) {
      v(e) ? (t = e, e = ["*"]) : e = e.match(D);
      for (var n, r = 0, i = e.length; r < i; r++) n = e[r], yt.tweeners[n] = yt.tweeners[n] || [], yt.tweeners[n].unshift(t);
    },
    prefilters: [function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ee(e),
        v = _.get(e, "fxshow");
      for (r in n.queue || (null == (a = ce._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, ce.queue(e, "fx").length || a.empty.fire();
        });
      })), t) if (i = t[r], ft.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !v || void 0 === v[r]) continue;
          g = !0;
        }
        d[r] = v && v[r] || ce.style(e, r);
      }
      if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = _.get(e, "display")), "none" === (c = ce.css(e, "display")) && (l ? c = l : (re([e], !0), l = e.style.display || l, c = ce.css(e, "display"), re([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === ce.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = _.access(e, "fxshow", {
        display: l
      }), o && (v.hidden = !g), g && re([e], !0), p.done(function () {
        for (r in g || re([e]), _.remove(e, "fxshow"), d) ce.style(e, r, d[r]);
      })), u = vt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
    }],
    prefilter: function (e, t) {
      t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
    }
  }), ce.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? ce.extend({}, e) : {
      complete: n || !n && t || v(e) && e,
      duration: e,
      easing: n && t || t && !v(t) && t
    };
    return ce.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ce.fx.speeds ? r.duration = ce.fx.speeds[r.duration] : r.duration = ce.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue);
    }, r;
  }, ce.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(ee).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function (t, e, n, r) {
      var i = ce.isEmptyObject(t),
        o = ce.speed(e, n, r),
        a = function () {
          var e = yt(this, ce.extend({}, t), o);
          (i || _.get(this, "finish")) && e.stop(!0);
        };
      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function (i, e, o) {
      var a = function (e) {
        var t = e.stop;
        delete e.stop, t(o);
      };
      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
          t = null != i && i + "queueHooks",
          n = ce.timers,
          r = _.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
        for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        !e && o || ce.dequeue(this, i);
      });
    },
    finish: function (a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
          t = _.get(this),
          n = t[a + "queue"],
          r = t[a + "queueHooks"],
          i = ce.timers,
          o = n ? n.length : 0;
        for (t.finish = !0, ce.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish;
      });
    }
  }), ce.each(["toggle", "show", "hide"], function (e, r) {
    var i = ce.fn[r];
    ce.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n);
    };
  }), ce.each({
    slideDown: gt("show"),
    slideUp: gt("hide"),
    slideToggle: gt("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    ce.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), ce.timers = [], ce.fx.tick = function () {
    var e,
      t = 0,
      n = ce.timers;
    for (st = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || ce.fx.stop(), st = void 0;
  }, ce.fx.timer = function (e) {
    ce.timers.push(e), ce.fx.start();
  }, ce.fx.interval = 13, ce.fx.start = function () {
    ut || (ut = !0, dt());
  }, ce.fx.stop = function () {
    ut = null;
  }, ce.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, ce.fn.delay = function (r, e) {
    return r = ce.fx && ce.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = ie.setTimeout(e, r);
      t.stop = function () {
        ie.clearTimeout(n);
      };
    });
  }, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value;
  var mt,
    xt = ce.expr.attrHandle;
  ce.fn.extend({
    attr: function (e, t) {
      return M(this, ce.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ce.removeAttr(this, e);
      });
    }
  }), ce.extend({
    attr: function (e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ce.prop(e, t, n) : (1 === o && ce.isXMLDoc(e) || (i = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void ce.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = ce.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!le.radioValue && "radio" === t && fe(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n,
        r = 0,
        i = t && t.match(D);
      if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
    }
  }), mt = {
    set: function (e, t, n) {
      return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = xt[t] || ce.find.attr;
    xt[t] = function (e, t, n) {
      var r,
        i,
        o = t.toLowerCase();
      return n || (i = xt[o], xt[o] = r, r = null != a(e, t, n) ? o : null, xt[o] = i), r;
    };
  });
  var bt = /^(?:input|select|textarea|button)$/i,
    wt = /^(?:a|area)$/i;
  function Tt(e) {
    return (e.match(D) || []).join(" ");
  }
  function Ct(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }
  function kt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(D) || [];
  }
  ce.fn.extend({
    prop: function (e, t) {
      return M(this, ce.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[ce.propFix[e] || e];
      });
    }
  }), ce.extend({
    prop: function (e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ce.isXMLDoc(e) || (t = ce.propFix[t] || t, i = ce.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = ce.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), le.optSelected || (ce.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    ce.propFix[this.toLowerCase()] = this;
  }), ce.fn.extend({
    addClass: function (t) {
      var e, n, r, i, o, a;
      return v(t) ? this.each(function (e) {
        ce(this).addClass(t.call(this, e, Ct(this)));
      }) : (e = kt(t)).length ? this.each(function () {
        if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
          for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
          a = Tt(n), r !== a && this.setAttribute("class", a);
        }
      }) : this;
    },
    removeClass: function (t) {
      var e, n, r, i, o, a;
      return v(t) ? this.each(function (e) {
        ce(this).removeClass(t.call(this, e, Ct(this)));
      }) : arguments.length ? (e = kt(t)).length ? this.each(function () {
        if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
          for (o = 0; o < e.length; o++) {
            i = e[o];
            while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ");
          }
          a = Tt(n), r !== a && this.setAttribute("class", a);
        }
      }) : this : this.attr("class", "");
    },
    toggleClass: function (t, n) {
      var e,
        r,
        i,
        o,
        a = typeof t,
        s = "string" === a || Array.isArray(t);
      return v(t) ? this.each(function (e) {
        ce(this).toggleClass(t.call(this, e, Ct(this), n), n);
      }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = kt(t), this.each(function () {
        if (s) for (o = ce(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);else void 0 !== t && "boolean" !== a || ((r = Ct(this)) && _.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : _.get(this, "__className__") || ""));
      }));
    },
    hasClass: function (e) {
      var t,
        n,
        r = 0;
      t = " " + e + " ";
      while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t)) return !0;
      return !1;
    }
  });
  var St = /\r/g;
  ce.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length ? (i = v(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, ce(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = ce.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(St, "") : null == e ? "" : e : void 0;
    }
  }), ce.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = ce.find.attr(e, "value");
          return null != t ? t : Tt(ce.text(e));
        }
      },
      select: {
        get: function (e) {
          var t,
            n,
            r,
            i = e.options,
            o = e.selectedIndex,
            a = "select-one" === e.type,
            s = a ? null : [],
            u = a ? o + 1 : i.length;
          for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))) {
            if (t = ce(n).val(), a) return t;
            s.push(t);
          }
          return s;
        },
        set: function (e, t) {
          var n,
            r,
            i = e.options,
            o = ce.makeArray(t),
            a = i.length;
          while (a--) ((r = i[a]).selected = -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), ce.each(["radio", "checkbox"], function () {
    ce.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = -1 < ce.inArray(ce(e).val(), t);
      }
    }, le.checkOn || (ce.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });
  var Et = ie.location,
    jt = {
      guid: Date.now()
    },
    At = /\?/;
  ce.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new ie.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || ce.error("Invalid XML: " + (n ? ce.map(n.childNodes, function (e) {
      return e.textContent;
    }).join("\n") : e)), t;
  };
  var Dt = /^(?:focusinfocus|focusoutblur)$/,
    Nt = function (e) {
      e.stopPropagation();
    };
  ce.extend(ce.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || C],
        d = ue.call(e, "type") ? e.type : e,
        h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
      if (o = f = a = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(d + ce.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[ce.expando] ? e : new ce.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ce.makeArray(t, [e]), c = ce.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !y(n)) {
          for (s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
          a === (n.ownerDocument || C) && p.push(a.defaultView || a.parentWindow || ie);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (_.get(o, "events") || Object.create(null))[e.type] && _.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && $(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !$(n) || u && v(n[d]) && !y(n) && ((a = n[u]) && (n[u] = null), ce.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Nt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Nt), ce.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function (e, t, n) {
      var r = ce.extend(new ce.Event(), n, {
        type: e,
        isSimulated: !0
      });
      ce.event.trigger(r, null, t);
    }
  }), ce.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        ce.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return ce.event.trigger(e, t, n, !0);
    }
  });
  var qt = /\[\]$/,
    Lt = /\r?\n/g,
    Ht = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i;
  function Pt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) ce.each(e, function (e, t) {
      r || qt.test(n) ? i(n, t) : Pt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== x(e)) i(n, e);else for (t in e) Pt(n + "[" + t + "]", e[t], r, i);
  }
  ce.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = v(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) Pt(n, e[n], t, i);
    return r.join("&");
  }, ce.fn.extend({
    serialize: function () {
      return ce.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = ce.prop(this, "elements");
        return e ? ce.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !we.test(e));
      }).map(function (e, t) {
        var n = ce(this).val();
        return null == n ? null : Array.isArray(n) ? ce.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Lt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Lt, "\r\n")
        };
      }).get();
    }
  });
  var Mt = /%20/g,
    Rt = /#.*$/,
    It = /([?&])_=[^&]*/,
    Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    $t = /^\/\//,
    Bt = {},
    _t = {},
    zt = "*/".concat("*"),
    Xt = C.createElement("a");
  function Ut(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
        r = 0,
        i = e.toLowerCase().match(D) || [];
      if (v(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
    };
  }
  function Vt(t, i, o, a) {
    var s = {},
      u = t === _t;
    function l(e) {
      var r;
      return s[e] = !0, ce.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }
    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }
  function Gt(e, t) {
    var n,
      r,
      i = ce.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && ce.extend(!0, e, r), e;
  }
  Xt.href = Et.href, ce.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Et.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": zt,
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
        "text xml": ce.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e);
    },
    ajaxPrefilter: Ut(Bt),
    ajaxTransport: Ut(_t),
    ajax: function (e, t) {
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var c,
        f,
        p,
        n,
        d,
        r,
        h,
        g,
        i,
        o,
        v = ce.ajaxSetup({}, t),
        y = v.context || v,
        m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
        x = ce.Deferred(),
        b = ce.Callbacks("once memory"),
        w = v.statusCode || {},
        a = {},
        s = {},
        u = "canceled",
        T = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (h) {
              if (!n) {
                n = {};
                while (t = Wt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
              t = n[e.toLowerCase() + " "];
            }
            return null == t ? null : t.join(", ");
          },
          getAllResponseHeaders: function () {
            return h ? p : null;
          },
          setRequestHeader: function (e, t) {
            return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
          },
          overrideMimeType: function (e) {
            return null == h && (v.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e) if (h) T.always(e[T.status]);else for (t in e) w[t] = [w[t], e[t]];
            return this;
          },
          abort: function (e) {
            var t = e || u;
            return c && c.abort(t), l(0, t), this;
          }
        };
      if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace($t, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""], null == v.crossDomain) {
        r = C.createElement("a");
        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }
      if (v.data && v.processData && "string" != typeof v.data && (v.data = ce.param(v.data, v.traditional)), Vt(Bt, v, t, T), h) return T;
      for (i in (g = ce.event && v.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ft.test(v.type), f = v.url.replace(Rt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Mt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (At.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(It, "$1"), o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o), v.url = f + o), v.ifModified && (ce.lastModified[f] && T.setRequestHeader("If-Modified-Since", ce.lastModified[f]), ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Vt(_t, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = ie.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));
        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");
      function l(e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l = t;
        h || (h = !0, d && ie.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.contents,
            u = e.dataTypes;
          while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break;
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }
              a || (a = i);
            }
            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), !i && -1 < ce.inArray("script", v.dataTypes) && ce.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
          o = c.shift();
          while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
              !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
              break;
            }
            if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
              t = a(t);
            } catch (e) {
              return {
                state: "parsererror",
                error: a ? e : "No conversion from " + u + " to " + o
              };
            }
          }
          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (ce.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --ce.active || ce.event.trigger("ajaxStop")));
      }
      return T;
    },
    getJSON: function (e, t, n) {
      return ce.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return ce.get(e, void 0, t, "script");
    }
  }), ce.each(["get", "post"], function (e, i) {
    ce[i] = function (e, t, n, r) {
      return v(t) && (r = r || n, n = t, t = void 0), ce.ajax(ce.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, ce.isPlainObject(e) && e));
    };
  }), ce.ajaxPrefilter(function (e) {
    var t;
    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
  }), ce._evalUrl = function (e, t, n) {
    return ce.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function () {}
      },
      dataFilter: function (e) {
        ce.globalEval(e, t, n);
      }
    });
  }, ce.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (v(e) && (e = e.call(this[0])), t = ce(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;
        while (e.firstElementChild) e = e.firstElementChild;
        return e;
      }).append(this)), this;
    },
    wrapInner: function (n) {
      return v(n) ? this.each(function (e) {
        ce(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = ce(this),
          t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function (t) {
      var n = v(t);
      return this.each(function (e) {
        ce(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        ce(this).replaceWith(this.childNodes);
      }), this;
    }
  }), ce.expr.pseudos.hidden = function (e) {
    return !ce.expr.pseudos.visible(e);
  }, ce.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, ce.ajaxSettings.xhr = function () {
    try {
      return new ie.XMLHttpRequest();
    } catch (e) {}
  };
  var Yt = {
      0: 200,
      1223: 204
    },
    Qt = ce.ajaxSettings.xhr();
  le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function (i) {
    var o, a;
    if (le.cors || Qt && !i.crossDomain) return {
      send: function (e, t) {
        var n,
          r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
        o = function (e) {
          return function () {
            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Yt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && ie.setTimeout(function () {
            o && a();
          });
        }, o = o("abort");
        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (o) throw e;
        }
      },
      abort: function () {
        o && o();
      }
    };
  }), ce.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), ce.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (e) {
        return ce.globalEval(e), e;
      }
    }
  }), ce.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), ce.ajaxTransport("script", function (n) {
    var r, i;
    if (n.crossDomain || n.scriptAttrs) return {
      send: function (e, t) {
        r = ce("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", i = function (e) {
          r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), C.head.appendChild(r[0]);
      },
      abort: function () {
        i && i();
      }
    };
  });
  var Jt,
    Kt = [],
    Zt = /(=)\?(?=&|$)|\?\?/;
  ce.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Kt.pop() || ce.expando + "_" + jt.guid++;
      return this[e] = !0, e;
    }
  }), ce.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
      i,
      o,
      a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Zt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || ce.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = ie[r], ie[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? ce(ie).removeProp(r) : ie[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Kt.push(r)), o && v(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (le.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), o = !n && [], (i = w.exec(e)) ? [t.createElement(i[1])] : (i = Ae([e], t, o), o && o.length && ce(o).remove(), ce.merge([], i.childNodes)));
    var r, i, o;
  }, ce.fn.load = function (e, t, n) {
    var r,
      i,
      o,
      a = this,
      s = e.indexOf(" ");
    return -1 < s && (r = Tt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && ce.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, ce.expr.pseudos.animated = function (t) {
    return ce.grep(ce.timers, function (e) {
      return t === e.elem;
    }).length;
  }, ce.offset = {
    setOffset: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l = ce.css(e, "position"),
        c = ce(e),
        f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = ce.css(e, "top"), u = ce.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, ce.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, ce.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        ce.offset.setOffset(this, t, e);
      });
      var e,
        n,
        r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function () {
      if (this[0]) {
        var e,
          t,
          n,
          r = this[0],
          i = {
            top: 0,
            left: 0
          };
        if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
          while (e && (e === n.body || e === n.documentElement) && "static" === ce.css(e, "position")) e = e.parentNode;
          e && e !== r && 1 === e.nodeType && ((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0), i.left += ce.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - ce.css(r, "marginTop", !0),
          left: t.left - i.left - ce.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var e = this.offsetParent;
        while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
        return e || J;
      });
    }
  }), ce.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;
    ce.fn[t] = function (e) {
      return M(this, function (e, t, n) {
        var r;
        if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), ce.each(["top", "left"], function (e, n) {
    ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) {
      if (t) return t = Ge(e, n), _e.test(t) ? ce(e).position()[n] + "px" : t;
    });
  }), ce.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    ce.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      ce.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
          i = r || (!0 === e || !0 === t ? "margin" : "border");
        return M(this, function (e, t, n) {
          var r;
          return y(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? ce.css(e, t, i) : ce.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    ce.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), ce.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function (e, t) {
      return this.off(e, null, t);
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function (e, t) {
      return this.on("mouseenter", e).on("mouseleave", t || e);
    }
  }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    ce.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  ce.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = ae.call(arguments, 2), (i = function () {
      return e.apply(t || this, r.concat(ae.call(arguments)));
    }).guid = e.guid = e.guid || ce.guid++, i;
  }, ce.holdReady = function (e) {
    e ? ce.readyWait++ : ce.ready(!0);
  }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function (e) {
    var t = ce.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, ce.trim = function (e) {
    return null == e ? "" : (e + "").replace(en, "$1");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return ce;
  });
  var tn = ie.jQuery,
    nn = ie.$;
  return ce.noConflict = function (e) {
    return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce;
  }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce;
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*! jQuery UI - v1.13.3 - 2024-06-30
* https://jqueryui.com
* Includes: widget.js, keycode.js, unique-id.js, widgets/accordion.js
* Copyright OpenJS Foundation and other contributors; Licensed MIT */

!function (e) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery);
}(function (d) {
  "use strict";

  d.ui = d.ui || {};
  d.ui.version = "1.13.3";
  var n,
    e,
    i = 0,
    o = Array.prototype.hasOwnProperty,
    r = Array.prototype.slice;
  d.cleanData = (n = d.cleanData, function (e) {
    for (var t, i, s = 0; null != (i = e[s]); s++) (t = d._data(i, "events")) && t.remove && d(i).triggerHandler("remove");
    n(e);
  }), d.widget = function (e, i, t) {
    var s,
      n,
      a,
      o = {},
      r = e.split(".")[0],
      h = r + "-" + (e = e.split(".")[1]);
    return t || (t = i, i = d.Widget), Array.isArray(t) && (t = d.extend.apply(null, [{}].concat(t))), d.expr.pseudos[h.toLowerCase()] = function (e) {
      return !!d.data(e, h);
    }, d[r] = d[r] || {}, s = d[r][e], n = d[r][e] = function (e, t) {
      if (!this || !this._createWidget) return new n(e, t);
      arguments.length && this._createWidget(e, t);
    }, d.extend(n, s, {
      version: t.version,
      _proto: d.extend({}, t),
      _childConstructors: []
    }), (a = new i()).options = d.widget.extend({}, a.options), d.each(t, function (t, s) {
      function n() {
        return i.prototype[t].apply(this, arguments);
      }
      function a(e) {
        return i.prototype[t].apply(this, e);
      }
      o[t] = "function" != typeof s ? s : function () {
        var e,
          t = this._super,
          i = this._superApply;
        return this._super = n, this._superApply = a, e = s.apply(this, arguments), this._super = t, this._superApply = i, e;
      };
    }), n.prototype = d.widget.extend(a, {
      widgetEventPrefix: s && a.widgetEventPrefix || e
    }, o, {
      constructor: n,
      namespace: r,
      widgetName: e,
      widgetFullName: h
    }), s ? (d.each(s._childConstructors, function (e, t) {
      var i = t.prototype;
      d.widget(i.namespace + "." + i.widgetName, n, t._proto);
    }), delete s._childConstructors) : i._childConstructors.push(n), d.widget.bridge(e, n), n;
  }, d.widget.extend = function (e) {
    for (var t, i, s = r.call(arguments, 1), n = 0, a = s.length; n < a; n++) for (t in s[n]) i = s[n][t], o.call(s[n], t) && void 0 !== i && (d.isPlainObject(i) ? e[t] = d.isPlainObject(e[t]) ? d.widget.extend({}, e[t], i) : d.widget.extend({}, i) : e[t] = i);
    return e;
  }, d.widget.bridge = function (a, t) {
    var o = t.prototype.widgetFullName || a;
    d.fn[a] = function (i) {
      var e = "string" == typeof i,
        s = r.call(arguments, 1),
        n = this;
      return e ? this.length || "instance" !== i ? this.each(function () {
        var e,
          t = d.data(this, o);
        return "instance" === i ? (n = t, !1) : t ? "function" != typeof t[i] || "_" === i.charAt(0) ? d.error("no such method '" + i + "' for " + a + " widget instance") : (e = t[i].apply(t, s)) !== t && void 0 !== e ? (n = e && e.jquery ? n.pushStack(e.get()) : e, !1) : void 0 : d.error("cannot call methods on " + a + " prior to initialization; attempted to call method '" + i + "'");
      }) : n = void 0 : (s.length && (i = d.widget.extend.apply(null, [i].concat(s))), this.each(function () {
        var e = d.data(this, o);
        e ? (e.option(i || {}), e._init && e._init()) : d.data(this, o, new t(i, this));
      })), n;
    };
  }, d.Widget = function () {}, d.Widget._childConstructors = [], d.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      classes: {},
      disabled: !1,
      create: null
    },
    _createWidget: function (e, t) {
      t = d(t || this.defaultElement || this)[0], this.element = d(t), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = d(), this.hoverable = d(), this.focusable = d(), this.classesElementLookup = {}, t !== this && (d.data(t, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function (e) {
          e.target === t && this.destroy();
        }
      }), this.document = d(t.style ? t.ownerDocument : t.document || t), this.window = d(this.document[0].defaultView || this.document[0].parentWindow)), this.options = d.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init();
    },
    _getCreateOptions: function () {
      return {};
    },
    _getCreateEventData: d.noop,
    _create: d.noop,
    _init: d.noop,
    destroy: function () {
      var i = this;
      this._destroy(), d.each(this.classesElementLookup, function (e, t) {
        i._removeClass(t, e);
      }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace);
    },
    _destroy: d.noop,
    widget: function () {
      return this.element;
    },
    option: function (e, t) {
      var i,
        s,
        n,
        a = e;
      if (0 === arguments.length) return d.widget.extend({}, this.options);
      if ("string" == typeof e) if (a = {}, e = (i = e.split(".")).shift(), i.length) {
        for (s = a[e] = d.widget.extend({}, this.options[e]), n = 0; n < i.length - 1; n++) s[i[n]] = s[i[n]] || {}, s = s[i[n]];
        if (e = i.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
        s[e] = t;
      } else {
        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
        a[e] = t;
      }
      return this._setOptions(a), this;
    },
    _setOptions: function (e) {
      for (var t in e) this._setOption(t, e[t]);
      return this;
    },
    _setOption: function (e, t) {
      return "classes" === e && this._setOptionClasses(t), this.options[e] = t, "disabled" === e && this._setOptionDisabled(t), this;
    },
    _setOptionClasses: function (e) {
      var t, i, s;
      for (t in e) s = this.classesElementLookup[t], e[t] !== this.options.classes[t] && s && s.length && (i = d(s.get()), this._removeClass(s, t), i.addClass(this._classes({
        element: i,
        keys: t,
        classes: e,
        add: !0
      })));
    },
    _setOptionDisabled: function (e) {
      this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
    },
    enable: function () {
      return this._setOptions({
        disabled: !1
      });
    },
    disable: function () {
      return this._setOptions({
        disabled: !0
      });
    },
    _classes: function (n) {
      var a = [],
        o = this;
      function e(e, t) {
        for (var i, s = 0; s < e.length; s++) i = o.classesElementLookup[e[s]] || d(), i = n.add ? (function () {
          var i = [];
          n.element.each(function (e, t) {
            d.map(o.classesElementLookup, function (e) {
              return e;
            }).some(function (e) {
              return e.is(t);
            }) || i.push(t);
          }), o._on(d(i), {
            remove: "_untrackClassesElement"
          });
        }(), d(d.uniqueSort(i.get().concat(n.element.get())))) : d(i.not(n.element).get()), o.classesElementLookup[e[s]] = i, a.push(e[s]), t && n.classes[e[s]] && a.push(n.classes[e[s]]);
      }
      return (n = d.extend({
        element: this.element,
        classes: this.options.classes || {}
      }, n)).keys && e(n.keys.match(/\S+/g) || [], !0), n.extra && e(n.extra.match(/\S+/g) || []), a.join(" ");
    },
    _untrackClassesElement: function (i) {
      var s = this;
      d.each(s.classesElementLookup, function (e, t) {
        -1 !== d.inArray(i.target, t) && (s.classesElementLookup[e] = d(t.not(i.target).get()));
      }), this._off(d(i.target));
    },
    _removeClass: function (e, t, i) {
      return this._toggleClass(e, t, i, !1);
    },
    _addClass: function (e, t, i) {
      return this._toggleClass(e, t, i, !0);
    },
    _toggleClass: function (e, t, i, s) {
      var n = "string" == typeof e || null === e,
        t = {
          extra: n ? t : i,
          keys: n ? e : t,
          element: n ? this.element : e,
          add: s = "boolean" == typeof s ? s : i
        };
      return t.element.toggleClass(this._classes(t), s), this;
    },
    _on: function (n, a, e) {
      var o,
        r = this;
      "boolean" != typeof n && (e = a, a = n, n = !1), e ? (a = o = d(a), this.bindings = this.bindings.add(a)) : (e = a, a = this.element, o = this.widget()), d.each(e, function (e, t) {
        function i() {
          if (n || !0 !== r.options.disabled && !d(this).hasClass("ui-state-disabled")) return ("string" == typeof t ? r[t] : t).apply(r, arguments);
        }
        "string" != typeof t && (i.guid = t.guid = t.guid || i.guid || d.guid++);
        var e = e.match(/^([\w:-]*)\s*(.*)$/),
          s = e[1] + r.eventNamespace,
          e = e[2];
        e ? o.on(s, e, i) : a.on(s, i);
      });
    },
    _off: function (e, t) {
      t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(t), this.bindings = d(this.bindings.not(e).get()), this.focusable = d(this.focusable.not(e).get()), this.hoverable = d(this.hoverable.not(e).get());
    },
    _delay: function (e, t) {
      var i = this;
      return setTimeout(function () {
        return ("string" == typeof e ? i[e] : e).apply(i, arguments);
      }, t || 0);
    },
    _hoverable: function (e) {
      this.hoverable = this.hoverable.add(e), this._on(e, {
        mouseenter: function (e) {
          this._addClass(d(e.currentTarget), null, "ui-state-hover");
        },
        mouseleave: function (e) {
          this._removeClass(d(e.currentTarget), null, "ui-state-hover");
        }
      });
    },
    _focusable: function (e) {
      this.focusable = this.focusable.add(e), this._on(e, {
        focusin: function (e) {
          this._addClass(d(e.currentTarget), null, "ui-state-focus");
        },
        focusout: function (e) {
          this._removeClass(d(e.currentTarget), null, "ui-state-focus");
        }
      });
    },
    _trigger: function (e, t, i) {
      var s,
        n,
        a = this.options[e];
      if (i = i || {}, (t = d.Event(t)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), t.target = this.element[0], n = t.originalEvent) for (s in n) s in t || (t[s] = n[s]);
      return this.element.trigger(t, i), !("function" == typeof a && !1 === a.apply(this.element[0], [t].concat(i)) || t.isDefaultPrevented());
    }
  }, d.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function (a, o) {
    d.Widget.prototype["_" + a] = function (t, e, i) {
      var s,
        n = (e = "string" == typeof e ? {
          effect: e
        } : e) ? !0 !== e && "number" != typeof e && e.effect || o : a;
      "number" == typeof (e = e || {}) ? e = {
        duration: e
      } : !0 === e && (e = {}), s = !d.isEmptyObject(e), e.complete = i, e.delay && t.delay(e.delay), s && d.effects && d.effects.effect[n] ? t[a](e) : n !== a && t[n] ? t[n](e.duration, e.easing, i) : t.queue(function (e) {
        d(this)[a](), i && i.call(t[0]), e();
      });
    };
  }), d.widget, d.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  }, d.fn.extend({
    uniqueId: (e = 0, function () {
      return this.each(function () {
        this.id || (this.id = "ui-id-" + ++e);
      });
    }),
    removeUniqueId: function () {
      return this.each(function () {
        /^ui-id-\d+$/.test(this.id) && d(this).removeAttr("id");
      });
    }
  }), d.widget("ui.accordion", {
    version: "1.13.3",
    options: {
      active: 0,
      animate: {},
      classes: {
        "ui-accordion-header": "ui-corner-top",
        "ui-accordion-header-collapsed": "ui-corner-all",
        "ui-accordion-content": "ui-corner-bottom"
      },
      collapsible: !1,
      event: "click",
      header: function (e) {
        return e.find("> li > :first-child").add(e.find("> :not(li)").even());
      },
      heightStyle: "auto",
      icons: {
        activeHeader: "ui-icon-triangle-1-s",
        header: "ui-icon-triangle-1-e"
      },
      activate: null,
      beforeActivate: null
    },
    hideProps: {
      borderTopWidth: "hide",
      borderBottomWidth: "hide",
      paddingTop: "hide",
      paddingBottom: "hide",
      height: "hide"
    },
    showProps: {
      borderTopWidth: "show",
      borderBottomWidth: "show",
      paddingTop: "show",
      paddingBottom: "show",
      height: "show"
    },
    _create: function () {
      var e = this.options;
      this.prevShow = this.prevHide = d(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), this._processPanels(), e.active < 0 && (e.active += this.headers.length), this._refresh();
    },
    _getCreateEventData: function () {
      return {
        header: this.active,
        panel: this.active.length ? this.active.next() : d()
      };
    },
    _createIcons: function () {
      var e,
        t = this.options.icons;
      t && (e = d("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + t.header), e.prependTo(this.headers), e = this.active.children(".ui-accordion-header-icon"), this._removeClass(e, t.header)._addClass(e, null, t.activeHeader)._addClass(this.headers, "ui-accordion-icons"));
    },
    _destroyIcons: function () {
      this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove();
    },
    _destroy: function () {
      var e;
      this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && e.css("height", "");
    },
    _setOption: function (e, t) {
      "active" === e ? this._activate(t) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || !1 !== this.options.active || this._activate(0), "icons" === e && (this._destroyIcons(), t) && this._createIcons());
    },
    _setOptionDisabled: function (e) {
      this._super(e), this.element.attr("aria-disabled", e), this._toggleClass(null, "ui-state-disabled", !!e), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!e);
    },
    _keydown: function (e) {
      if (!e.altKey && !e.ctrlKey) {
        var t = d.ui.keyCode,
          i = this.headers.length,
          s = this.headers.index(e.target),
          n = !1;
        switch (e.keyCode) {
          case t.RIGHT:
          case t.DOWN:
            n = this.headers[(s + 1) % i];
            break;
          case t.LEFT:
          case t.UP:
            n = this.headers[(s - 1 + i) % i];
            break;
          case t.SPACE:
          case t.ENTER:
            this._eventHandler(e);
            break;
          case t.HOME:
            n = this.headers[0];
            break;
          case t.END:
            n = this.headers[i - 1];
        }
        n && (d(e.target).attr("tabIndex", -1), d(n).attr("tabIndex", 0), d(n).trigger("focus"), e.preventDefault());
      }
    },
    _panelKeyDown: function (e) {
      e.keyCode === d.ui.keyCode.UP && e.ctrlKey && d(e.currentTarget).prev().trigger("focus");
    },
    refresh: function () {
      var e = this.options;
      this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, this.active = d()) : !1 === e.active ? this._activate(0) : this.active.length && !d.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = d()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh();
    },
    _processPanels: function () {
      var e = this.headers,
        t = this.panels;
      "function" == typeof this.options.header ? this.headers = this.options.header(this.element) : this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), t && (this._off(e.not(this.headers)), this._off(t.not(this.panels)));
    },
    _refresh: function () {
      var i,
        e = this.options,
        t = e.heightStyle,
        s = this.element.parent();
      this.active = this._findActive(e.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function () {
        var e = d(this),
          t = e.uniqueId().attr("id"),
          i = e.next(),
          s = i.uniqueId().attr("id");
        e.attr("aria-controls", s), i.attr("aria-labelledby", t);
      }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
        "aria-selected": "false",
        "aria-expanded": "false",
        tabIndex: -1
      }).next().attr({
        "aria-hidden": "true"
      }).hide(), this.active.length ? this.active.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      }).next().attr({
        "aria-hidden": "false"
      }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(e.event), "fill" === t ? (i = s.height(), this.element.siblings(":visible").each(function () {
        var e = d(this),
          t = e.css("position");
        "absolute" !== t && "fixed" !== t && (i -= e.outerHeight(!0));
      }), this.headers.each(function () {
        i -= d(this).outerHeight(!0);
      }), this.headers.next().each(function () {
        d(this).height(Math.max(0, i - d(this).innerHeight() + d(this).height()));
      }).css("overflow", "auto")) : "auto" === t && (i = 0, this.headers.next().each(function () {
        var e = d(this).is(":visible");
        e || d(this).show(), i = Math.max(i, d(this).css("height", "").height()), e || d(this).hide();
      }).height(i));
    },
    _activate: function (e) {
      e = this._findActive(e)[0];
      e !== this.active[0] && (e = e || this.active[0], this._eventHandler({
        target: e,
        currentTarget: e,
        preventDefault: d.noop
      }));
    },
    _findActive: function (e) {
      return "number" == typeof e ? this.headers.eq(e) : d();
    },
    _setupEvents: function (e) {
      var i = {
        keydown: "_keydown"
      };
      e && d.each(e.split(" "), function (e, t) {
        i[t] = "_eventHandler";
      }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
        keydown: "_panelKeyDown"
      }), this._hoverable(this.headers), this._focusable(this.headers);
    },
    _eventHandler: function (e) {
      var t = this.options,
        i = this.active,
        s = d(e.currentTarget),
        n = s[0] === i[0],
        a = n && t.collapsible,
        o = a ? d() : s.next(),
        r = i.next(),
        r = {
          oldHeader: i,
          oldPanel: r,
          newHeader: a ? d() : s,
          newPanel: o
        };
      e.preventDefault(), n && !t.collapsible || !1 === this._trigger("beforeActivate", e, r) || (t.active = !a && this.headers.index(s), this.active = n ? d() : s, this._toggle(r), this._removeClass(i, "ui-accordion-header-active", "ui-state-active"), t.icons && (o = i.children(".ui-accordion-header-icon"), this._removeClass(o, null, t.icons.activeHeader)._addClass(o, null, t.icons.header)), n) || (this._removeClass(s, "ui-accordion-header-collapsed")._addClass(s, "ui-accordion-header-active", "ui-state-active"), t.icons && (e = s.children(".ui-accordion-header-icon"), this._removeClass(e, null, t.icons.header)._addClass(e, null, t.icons.activeHeader)), this._addClass(s.next(), "ui-accordion-content-active"));
    },
    _toggle: function (e) {
      var t = e.newPanel,
        i = this.prevShow.length ? this.prevShow : e.oldPanel;
      this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = t, this.prevHide = i, this.options.animate ? this._animate(t, i, e) : (i.hide(), t.show(), this._toggleComplete(e)), i.attr({
        "aria-hidden": "true"
      }), i.prev().attr({
        "aria-selected": "false",
        "aria-expanded": "false"
      }), t.length && i.length ? i.prev().attr({
        tabIndex: -1,
        "aria-expanded": "false"
      }) : t.length && this.headers.filter(function () {
        return 0 === parseInt(d(this).attr("tabIndex"), 10);
      }).attr("tabIndex", -1), t.attr("aria-hidden", "false").prev().attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      });
    },
    _animate: function (e, i, t) {
      function s() {
        a._toggleComplete(t);
      }
      var n,
        a = this,
        o = 0,
        r = e.css("box-sizing"),
        h = e.length && (!i.length || e.index() < i.index()),
        d = this.options.animate || {},
        h = h && d.down || d,
        c = (c = "string" == typeof h ? h : c) || h.easing || d.easing,
        l = (l = "number" == typeof h ? h : l) || h.duration || d.duration;
      return i.length ? e.length ? (n = e.show().outerHeight(), i.animate(this.hideProps, {
        duration: l,
        easing: c,
        step: function (e, t) {
          t.now = Math.round(e);
        }
      }), void e.hide().animate(this.showProps, {
        duration: l,
        easing: c,
        complete: s,
        step: function (e, t) {
          t.now = Math.round(e), "height" !== t.prop ? "content-box" === r && (o += t.now) : "content" !== a.options.heightStyle && (t.now = Math.round(n - i.outerHeight() - o), o = 0);
        }
      })) : i.animate(this.hideProps, l, c, s) : e.animate(this.showProps, l, c, s);
    },
    _toggleComplete: function (e) {
      var t = e.oldPanel,
        i = t.prev();
      this._removeClass(t, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e);
    }
  });
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
!function (i) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
}(function (i) {
  "use strict";

  var e = window.Slick || {};
  (e = function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, n.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
    };
  }()).prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
    var s = this;
    if ("boolean" == typeof t) o = t, t = null;else if (t < 0 || t >= s.slideCount) return !1;
    s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e);
    }), s.$slidesCache = s.$slides, s.reinit();
  }, e.prototype.animateHeight = function () {
    var i = this;
    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.animate({
        height: e
      }, i.options.speed);
    }
  }, e.prototype.animateSlide = function (e, t) {
    var o = {},
      s = this;
    s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
      left: e
    }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
      top: e
    }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
      animStart: s.currentLeft
    }).animate({
      animStart: e
    }, {
      duration: s.options.speed,
      easing: s.options.easing,
      step: function (i) {
        i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
      },
      complete: function () {
        t && t.call();
      }
    })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
      s.disableTransition(), t.call();
    }, s.options.speed));
  }, e.prototype.getNavTarget = function () {
    var e = this,
      t = e.options.asNavFor;
    return t && null !== t && (t = i(t).not(e.$slider)), t;
  }, e.prototype.asNavFor = function (e) {
    var t = this.getNavTarget();
    null !== t && "object" == typeof t && t.each(function () {
      var t = i(this).slick("getSlick");
      t.unslicked || t.slideHandler(e, !0);
    });
  }, e.prototype.applyTransition = function (i) {
    var e = this,
      t = {};
    !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.autoPlay = function () {
    var i = this;
    i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
  }, e.prototype.autoPlayClear = function () {
    var i = this;
    i.autoPlayTimer && clearInterval(i.autoPlayTimer);
  }, e.prototype.autoPlayIterator = function () {
    var i = this,
      e = i.currentSlide + i.options.slidesToScroll;
    i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
  }, e.prototype.buildArrows = function () {
    var e = this;
    !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, e.prototype.buildDots = function () {
    var e,
      t,
      o = this;
    if (!0 === o.options.dots) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
      o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
    }
  }, e.prototype.buildOut = function () {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable");
  }, e.prototype.buildRows = function () {
    var i,
      e,
      t,
      o,
      s,
      n,
      r,
      l = this;
    if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
        var d = document.createElement("div");
        for (e = 0; e < l.options.rows; e++) {
          var a = document.createElement("div");
          for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i * r + (e * l.options.slidesPerRow + t);
            n.get(c) && a.appendChild(n.get(c));
          }
          d.appendChild(a);
        }
        o.appendChild(d);
      }
      l.$slider.empty().append(o), l.$slider.children().children().children().css({
        width: 100 / l.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, e.prototype.checkResponsive = function (e, t) {
    var o,
      s,
      n,
      r = this,
      l = !1,
      d = r.$slider.width(),
      a = window.innerWidth || i(window).width();
    if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;
      for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
      null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
    }
  }, e.prototype.changeSlide = function (e, t) {
    var o,
      s,
      n,
      r = this,
      l = i(e.currentTarget);
    switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
      case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
        break;
      case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
        break;
      case "index":
        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
        break;
      default:
        return;
    }
  }, e.prototype.checkNavigable = function (i) {
    var e, t;
    if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];else for (var o in e) {
      if (i < e[o]) {
        i = t;
        break;
      }
      t = e[o];
    }
    return i;
  }, e.prototype.cleanUpEvents = function () {
    var e = this;
    e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
  }, e.prototype.cleanUpSlideEvents = function () {
    var e = this;
    e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.cleanUpRows = function () {
    var i,
      e = this;
    e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
  }, e.prototype.clickHandler = function (i) {
    !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
  }, e.prototype.destroy = function (e) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      i(this).attr("style", i(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
  }, e.prototype.disableTransition = function (i) {
    var e = this,
      t = {};
    t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.fadeSlide = function (i, e) {
    var t = this;
    !1 === t.cssTransitions ? (t.$slides.eq(i).css({
      zIndex: t.options.zIndex
    }), t.$slides.eq(i).animate({
      opacity: 1
    }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
      opacity: 1,
      zIndex: t.options.zIndex
    }), e && setTimeout(function () {
      t.disableTransition(i), e.call();
    }, t.options.speed));
  }, e.prototype.fadeSlideOut = function (i) {
    var e = this;
    !1 === e.cssTransitions ? e.$slides.eq(i).animate({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }));
  }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
    var e = this;
    null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
  }, e.prototype.focusHandler = function () {
    var e = this;
    e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
      t.stopImmediatePropagation();
      var o = i(this);
      setTimeout(function () {
        e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
      }, 0);
    });
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
    return this.currentSlide;
  }, e.prototype.getDotCount = function () {
    var i = this,
      e = 0,
      t = 0,
      o = 0;
    if (!0 === i.options.infinite) {
      if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    } else if (!0 === i.options.centerMode) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
    return o - 1;
  }, e.prototype.getLeft = function (i) {
    var e,
      t,
      o,
      s,
      n = this,
      r = 0;
    return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
  }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
    return this.options[i];
  }, e.prototype.getNavigableIndexes = function () {
    var i,
      e = this,
      t = 0,
      o = 0,
      s = [];
    for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    return s;
  }, e.prototype.getSlick = function () {
    return this;
  }, e.prototype.getSlideCount = function () {
    var e,
      t,
      o = this;
    return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
      if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
    }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
  }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
    this.changeSlide({
      data: {
        message: "index",
        index: parseInt(i)
      }
    }, e);
  }, e.prototype.init = function (e) {
    var t = this;
    i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
  }, e.prototype.initADA = function () {
    var e = this,
      t = Math.ceil(e.slideCount / e.options.slidesToShow),
      o = e.getNavigableIndexes().filter(function (i) {
        return i >= 0 && i < e.slideCount;
      });
    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
      var s = o.indexOf(t);
      i(this).attr({
        role: "tabpanel",
        id: "slick-slide" + e.instanceUid + t,
        tabindex: -1
      }), -1 !== s && i(this).attr({
        "aria-describedby": "slick-slide-control" + e.instanceUid + s
      });
    }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
      var n = o[s];
      i(this).attr({
        role: "presentation"
      }), i(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + e.instanceUid + s,
        "aria-controls": "slick-slide" + e.instanceUid + n,
        "aria-label": s + 1 + " of " + t,
        "aria-selected": null,
        tabindex: "-1"
      });
    }).eq(e.currentSlide).find("button").attr({
      "aria-selected": "true",
      tabindex: "0"
    }).end());
    for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
    e.activateADA();
  }, e.prototype.initArrowEvents = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
  }, e.prototype.initDotEvents = function () {
    var e = this;
    !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
      message: "index"
    }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.initSlideEvents = function () {
    var e = this;
    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
  }, e.prototype.initializeEvents = function () {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
  }, e.prototype.initUI = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
  }, e.prototype.keyHandler = function (i) {
    var e = this;
    i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "next" : "previous"
      }
    }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "previous" : "next"
      }
    }));
  }, e.prototype.lazyLoad = function () {
    function e(e) {
      i("img[data-lazy]", e).each(function () {
        var e = i(this),
          t = i(this).attr("data-lazy"),
          o = i(this).attr("data-srcset"),
          s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
          r = document.createElement("img");
        r.onload = function () {
          e.animate({
            opacity: 0
          }, 100, function () {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
              opacity: 1
            }, 200, function () {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), n.$slider.trigger("lazyLoaded", [n, e, t]);
          });
        }, r.onerror = function () {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]);
        }, r.src = t;
      });
    }
    var t,
      o,
      s,
      n = this;
    if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
    e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
  }, e.prototype.loadSlider = function () {
    var i = this;
    i.setPosition(), i.$slideTrack.css({
      opacity: 1
    }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
  }, e.prototype.next = e.prototype.slickNext = function () {
    this.changeSlide({
      data: {
        message: "next"
      }
    });
  }, e.prototype.orientationChange = function () {
    var i = this;
    i.checkResponsive(), i.setPosition();
  }, e.prototype.pause = e.prototype.slickPause = function () {
    var i = this;
    i.autoPlayClear(), i.paused = !0;
  }, e.prototype.play = e.prototype.slickPlay = function () {
    var i = this;
    i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
  }, e.prototype.postSlide = function (e) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
  }, e.prototype.prev = e.prototype.slickPrev = function () {
    this.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, e.prototype.preventDefault = function (i) {
    i.preventDefault();
  }, e.prototype.progressiveLazyLoad = function (e) {
    e = e || 1;
    var t,
      o,
      s,
      n,
      r,
      l = this,
      d = i("img[data-lazy]", l.$slider);
    d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
    }, r.onerror = function () {
      e < 3 ? setTimeout(function () {
        l.progressiveLazyLoad(e + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
  }, e.prototype.refresh = function (e) {
    var t,
      o,
      s = this;
    o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
      currentSlide: t
    }), s.init(), e || s.changeSlide({
      data: {
        message: "index",
        index: t
      }
    }, !1);
  }, e.prototype.registerBreakpoints = function () {
    var e,
      t,
      o,
      s = this,
      n = s.options.responsive || null;
    if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";
      for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
        for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
        s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
      }
      s.breakpoints.sort(function (i, e) {
        return s.options.mobileFirst ? i - e : e - i;
      });
    }
  }, e.prototype.reinit = function () {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
  }, e.prototype.resize = function () {
    var e = this;
    i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
      e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
    }, 50));
  }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
    var o = this;
    if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
    o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
  }, e.prototype.setCSS = function (i) {
    var e,
      t,
      o = this,
      s = {};
    !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
  }, e.prototype.setDimensions = function () {
    var i = this;
    !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
      padding: "0px " + i.options.centerPadding
    }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
      padding: i.options.centerPadding + " 0px"
    })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
    var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
    !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
  }, e.prototype.setFade = function () {
    var e,
      t = this;
    t.$slides.each(function (o, s) {
      e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
        position: "relative",
        right: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      }) : i(s).css({
        position: "relative",
        left: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      });
    }), t.$slides.eq(t.currentSlide).css({
      zIndex: t.options.zIndex - 1,
      opacity: 1
    });
  }, e.prototype.setHeight = function () {
    var i = this;
    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.css("height", e);
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function () {
    var e,
      t,
      o,
      s,
      n,
      r = this,
      l = !1;
    if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;else if ("multiple" === n) i.each(o, function (i, e) {
      r.options[i] = e;
    });else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];else {
      for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
      r.options.responsive.push(s[t]);
    }
    l && (r.unload(), r.reinit());
  }, e.prototype.setPosition = function () {
    var i = this;
    i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
  }, e.prototype.setProps = function () {
    var i = this,
      e = document.body.style;
    i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
  }, e.prototype.setSlideClasses = function (i) {
    var e,
      t,
      o,
      s,
      n = this;
    if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
      var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
      e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
    } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
    "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
  }, e.prototype.setupInfinite = function () {
    var e,
      t,
      o,
      s = this;
    if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
      s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        i(this).attr("id", "");
      });
    }
  }, e.prototype.interrupt = function (i) {
    var e = this;
    i || e.autoPlay(), e.interrupted = i;
  }, e.prototype.selectHandler = function (e) {
    var t = this,
      o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
      s = parseInt(o.attr("data-slick-index"));
    s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
  }, e.prototype.slideHandler = function (i, e, t) {
    var o,
      s,
      n,
      r,
      l,
      d = null,
      a = this;
    if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else {
      if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
        a.postSlide(s);
      })) : a.postSlide(s), void a.animateHeight();
      !0 !== t ? a.animateSlide(d, function () {
        a.postSlide(s);
      }) : a.postSlide(s);
    }
  }, e.prototype.startLoad = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
  }, e.prototype.swipeDirection = function () {
    var i,
      e,
      t,
      o,
      s = this;
    return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
  }, e.prototype.swipeEnd = function (i) {
    var e,
      t,
      o = this;
    if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
    if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
    if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {
        case "left":
        case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
          break;
        case "right":
        case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;
      }
      "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, e.prototype.swipeHandler = function (i) {
    var e = this;
    if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
      case "start":
        e.swipeStart(i);
        break;
      case "move":
        e.swipeMove(i);
        break;
      case "end":
        e.swipeEnd(i);
    }
  }, e.prototype.swipeMove = function (i) {
    var e,
      t,
      o,
      s,
      n,
      r,
      l = this;
    return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
  }, e.prototype.swipeStart = function (i) {
    var e,
      t = this;
    if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
    void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0;
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
    var i = this;
    null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
  }, e.prototype.unload = function () {
    var e = this;
    i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, e.prototype.unslick = function (i) {
    var e = this;
    e.$slider.trigger("unslick", [e, i]), e.destroy();
  }, e.prototype.updateArrows = function () {
    var i = this;
    Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, e.prototype.updateDots = function () {
    var i = this;
    null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
  }, e.prototype.visibility = function () {
    var i = this;
    i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
  }, i.fn.slick = function () {
    var i,
      t,
      o = this,
      s = arguments[0],
      n = Array.prototype.slice.call(arguments, 1),
      r = o.length;
    for (i = 0; i < r; i++) if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
    return o;
  };
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
$('img').on('error', function () {
  $(this).attr('src', './../img/holder.webp');
});

// !SLIDER
$(document).ready(function () {
  if (document.documentElement.clientWidth <= 670) {
    sliderInit();
  }
  $(window).resize(function () {
    if (document.documentElement.clientWidth <= 670) {
      sliderInit();
    }
  });
  function sliderInit() {
    $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      // fade: true,
      // autoplay: true,
      // autoplaySpeed: 3000,
      dots: true,
      infinite: true
      // centerMode: true,
    });
  }
});

// !ALBUM SLIDER

$('.album__slider').slick({
  arrows: true,
  dots: false,
  infinite: true,
  // centerMode: true,
  // centerPadding: '0%',
  variableWidth: true,
  prevArrow: $('.prev svg'),
  nextArrow: $('.next svg')
});
const prevSection = $('.prev');
const nextSection = $('.next');
const slickTrack = $('.slick-track');

// Убедитесь, что элемент имеет позиционирование
// slickTrack.css('position', 'relative');

function sliderMove() {
  // Получаем ширину экрана
  var windowWidth = $(window).width();

  // Проверяем, если ширина экрана больше или равна 900px
  if (windowWidth >= 900) {
    prevSection.on('mouseenter', function () {
      slickTrack.finish().animate({
        left: '+=300px'
      }, 200);
    });
    prevSection.on('mouseleave', function () {
      slickTrack.finish().animate({
        left: '-=300px'
      }, 200);
    });
    nextSection.on('mouseenter', function () {
      slickTrack.finish().animate({
        left: '-=300px'
      }, 200);
    });
    nextSection.on('mouseleave', function () {
      slickTrack.finish().animate({
        left: '+=300px'
      }, 200);
    });
  } else {
    // Если ширина экрана меньше 900px, убираем обработчики событий
    prevSection.off('mouseenter').off('mouseleave');
    nextSection.off('mouseenter').off('mouseleave');
  }
}

// Вызываем функцию при загрузке страницы, если ширина экрана >= 900px
if (document.documentElement.clientWidth >= 900) {
  sliderMove();
}

// Добавляем обработчик события resize для проверки ширины экрана
$(window).resize(function () {
  // Проверяем ширину экрана при изменении размера окна
  if (document.documentElement.clientWidth >= 900) {
    sliderMove();
  } else {
    // Если ширина стала меньше 900px, убираем обработчики событий
    prevSection.off('mouseenter').off('mouseleave');
    nextSection.off('mouseenter').off('mouseleave');
  }
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __defProp = Object.defineProperty,
  __defNormalProp = (e, i, t) => i in e ? __defProp(e, i, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
  }) : e[i] = t,
  __publicField = (e, i, t) => (__defNormalProp(e, "symbol" != typeof i ? i + "" : i, t), t);
!function (e, i) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (e = "undefined" != typeof globalThis ? globalThis : e || self).JustValidate = i();
}(undefined, function () {
  "use strict";

  const e = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    i = /^-?[0-9]\d*$/,
    t = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
    s = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    l = e => "string" != typeof e || "" === e;
  var r = (e => (e.Required = "required", e.Email = "email", e.MinLength = "minLength", e.MaxLength = "maxLength", e.Password = "password", e.Number = "number", e.Integer = "integer", e.MaxNumber = "maxNumber", e.MinNumber = "minNumber", e.StrongPassword = "strongPassword", e.CustomRegexp = "customRegexp", e.MinFilesCount = "minFilesCount", e.MaxFilesCount = "maxFilesCount", e.Files = "files", e))(r || {}),
    o = (e => (e.Required = "required", e))(o || {}),
    a = (e => (e.Label = "label", e.LabelArrow = "labelArrow", e))(a || {});
  const n = [{
      key: r.Required,
      dict: {
        en: "The field is required"
      }
    }, {
      key: r.Email,
      dict: {
        en: "Email has invalid format"
      }
    }, {
      key: r.MaxLength,
      dict: {
        en: "The field must contain a maximum of :value characters"
      }
    }, {
      key: r.MinLength,
      dict: {
        en: "The field must contain a minimum of :value characters"
      }
    }, {
      key: r.Password,
      dict: {
        en: "Password must contain minimum eight characters, at least one letter and one number"
      }
    }, {
      key: r.StrongPassword,
      dict: {
        en: "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      }
    }, {
      key: r.Number,
      dict: {
        en: "Value should be a number"
      }
    }, {
      key: r.MaxNumber,
      dict: {
        en: "Number should be less or equal than :value"
      }
    }, {
      key: r.MinNumber,
      dict: {
        en: "Number should be more or equal than :value"
      }
    }, {
      key: r.MinFilesCount,
      dict: {
        en: "Files count should be more or equal than :value"
      }
    }, {
      key: r.MaxFilesCount,
      dict: {
        en: "Files count should be less or equal than :value"
      }
    }, {
      key: r.Files,
      dict: {
        en: "Uploaded files have one or several invalid properties (extension/size/type etc)."
      }
    }],
    d = e => "object" == typeof e && null !== e && "then" in e && "function" == typeof e.then,
    c = e => Array.isArray(e) ? e.filter(e => e.length > 0) : "string" == typeof e && e.trim() ? [...e.split(" ").filter(e => e.length > 0)] : [],
    u = e => e instanceof Element || e instanceof HTMLDocument,
    h = {
      errorFieldStyle: {
        color: "#b81111",
        border: "1px solid #B81111"
      },
      errorFieldCssClass: "just-validate-error-field",
      successFieldCssClass: "just-validate-success-field",
      errorLabelStyle: {
        color: "#b81111"
      },
      errorLabelCssClass: "just-validate-error-label",
      successLabelCssClass: "just-validate-success-label",
      focusInvalidField: !0,
      lockForm: !0,
      testingMode: !1,
      validateBeforeSubmitting: !1,
      submitFormAutomatically: !1
    };
  return class {
    constructor(e, i, t) {
      __publicField(this, "form", null), __publicField(this, "fields", {}), __publicField(this, "groupFields", {}), __publicField(this, "errors", {}), __publicField(this, "isValid", !1), __publicField(this, "isSubmitted", !1), __publicField(this, "globalConfig", h), __publicField(this, "errorLabels", {}), __publicField(this, "successLabels", {}), __publicField(this, "eventListeners", []), __publicField(this, "dictLocale", n), __publicField(this, "currentLocale", "en"), __publicField(this, "customStyleTags", {}), __publicField(this, "onSuccessCallback"), __publicField(this, "onFailCallback"), __publicField(this, "onValidateCallback"), __publicField(this, "tooltips", []), __publicField(this, "lastScrollPosition"), __publicField(this, "isScrollTick"), __publicField(this, "fieldIds", new Map()), __publicField(this, "getKeyByFieldSelector", e => this.fieldIds.get(e)), __publicField(this, "getFieldSelectorByKey", e => {
        for (const [i, t] of this.fieldIds) if (e === t) return i;
      }), __publicField(this, "getCompatibleFields", () => {
        const e = {};
        return Object.keys(this.fields).forEach(i => {
          let t = i;
          const s = this.getFieldSelectorByKey(i);
          "string" == typeof s && (t = s), e[t] = {
            ...this.fields[i]
          };
        }), e;
      }), __publicField(this, "setKeyByFieldSelector", e => {
        if (this.fieldIds.has(e)) return this.fieldIds.get(e);
        const i = String(this.fieldIds.size + 1);
        return this.fieldIds.set(e, i), i;
      }), __publicField(this, "refreshAllTooltips", () => {
        this.tooltips.forEach(e => {
          e.refresh();
        });
      }), __publicField(this, "handleDocumentScroll", () => {
        this.lastScrollPosition = window.scrollY, this.isScrollTick || (window.requestAnimationFrame(() => {
          this.refreshAllTooltips(), this.isScrollTick = !1;
        }), this.isScrollTick = !0);
      }), __publicField(this, "formSubmitHandler", e => {
        e.preventDefault(), this.isSubmitted = !0, this.validateHandler(e);
      }), __publicField(this, "handleFieldChange", e => {
        let i;
        for (const t in this.fields) {
          if (this.fields[t].elem === e) {
            i = t;
            break;
          }
        }
        i && (this.fields[i].touched = !0, this.validateField(i, !0));
      }), __publicField(this, "handleGroupChange", e => {
        let i;
        for (const t in this.groupFields) {
          if (this.groupFields[t].elems.find(i => i === e)) {
            i = t;
            break;
          }
        }
        i && (this.groupFields[i].touched = !0, this.validateGroup(i, !0));
      }), __publicField(this, "handlerChange", e => {
        e.target && (this.handleFieldChange(e.target), this.handleGroupChange(e.target), this.renderErrors());
      }), this.initialize(e, i, t);
    }
    initialize(e, i, t) {
      if (this.form = null, this.errors = {}, this.isValid = !1, this.isSubmitted = !1, this.globalConfig = h, this.errorLabels = {}, this.successLabels = {}, this.eventListeners = [], this.customStyleTags = {}, this.tooltips = [], this.currentLocale = "en", "string" == typeof e) {
        const i = document.querySelector(e);
        if (!i) throw Error(`Form with ${e} selector not found! Please check the form selector`);
        this.setForm(i);
      } else {
        if (!(e instanceof HTMLFormElement)) throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");
        this.setForm(e);
      }
      if (this.globalConfig = {
        ...h,
        ...i
      }, t && (this.dictLocale = [...t, ...n]), this.isTooltip()) {
        const e = document.createElement("style");
        e.textContent = ".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}", this.customStyleTags[a.Label] = document.head.appendChild(e), this.addListener("scroll", document, this.handleDocumentScroll);
      }
    }
    getLocalisedString(e, i, t) {
      var s;
      const l = null != t ? t : e;
      let o = null == (s = this.dictLocale.find(e => e.key === l)) ? void 0 : s.dict[this.currentLocale];
      if (o || t && (o = t), o && void 0 !== i) switch (e) {
        case r.MaxLength:
        case r.MinLength:
        case r.MaxNumber:
        case r.MinNumber:
        case r.MinFilesCount:
        case r.MaxFilesCount:
          o = o.replace(":value", String(i));
      }
      return o || t || "Value is incorrect";
    }
    getFieldErrorMessage(e, i) {
      const t = "function" == typeof e.errorMessage ? e.errorMessage(this.getElemValue(i), this.fields) : e.errorMessage;
      return this.getLocalisedString(e.rule, e.value, t);
    }
    getFieldSuccessMessage(e, i) {
      const t = "function" == typeof e ? e(this.getElemValue(i), this.fields) : e;
      return this.getLocalisedString(void 0, void 0, t);
    }
    getGroupErrorMessage(e) {
      return this.getLocalisedString(e.rule, void 0, e.errorMessage);
    }
    getGroupSuccessMessage(e) {
      if (e.successMessage) return this.getLocalisedString(void 0, void 0, e.successMessage);
    }
    setFieldInvalid(e, i) {
      this.fields[e].isValid = !1, this.fields[e].errorMessage = this.getFieldErrorMessage(i, this.fields[e].elem);
    }
    setFieldValid(e, i) {
      this.fields[e].isValid = !0, void 0 !== i && (this.fields[e].successMessage = this.getFieldSuccessMessage(i, this.fields[e].elem));
    }
    setGroupInvalid(e, i) {
      this.groupFields[e].isValid = !1, this.groupFields[e].errorMessage = this.getGroupErrorMessage(i);
    }
    setGroupValid(e, i) {
      this.groupFields[e].isValid = !0, this.groupFields[e].successMessage = this.getGroupSuccessMessage(i);
    }
    getElemValue(e) {
      switch (e.type) {
        case "checkbox":
          return e.checked;
        case "file":
          return e.files;
        default:
          return e.value;
      }
    }
    validateGroupRule(e, i, t) {
      if (t.rule === o.Required) i.every(e => !e.checked) ? this.setGroupInvalid(e, t) : this.setGroupValid(e, t);
    }
    validateFieldRule(o, a, n, c = !1) {
      const u = n.value,
        h = this.getElemValue(a);
      if (n.plugin) {
        n.plugin(h, this.getCompatibleFields()) || this.setFieldInvalid(o, n);
      } else {
        switch (n.rule) {
          case r.Required:
            (e => {
              let i = e;
              return "string" == typeof e && (i = e.trim()), !i;
            })(h) && this.setFieldInvalid(o, n);
            break;
          case r.Email:
            if (l(h)) break;
            f = h, e.test(f) || this.setFieldInvalid(o, n);
            break;
          case r.MaxLength:
            if (void 0 === u) {
              console.error(`Value for ${n.rule} rule for [${o}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(o, n);
              break;
            }
            if ("number" != typeof u) {
              console.error(`Value for ${n.rule} rule for [${o}] should be a number. The field will be always invalid.`), this.setFieldInvalid(o, n);
              break;
            }
            if (l(h)) break;
            ((e, i) => e.length > i)(h, u) && this.setFieldInvalid(o, n);
            break;
          case r.MinLength:
            if (void 0 === u) {
              console.error(`Value for ${n.rule} rule for [${o}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(o, n);
              break;
            }
            if ("number" != typeof u) {
              console.error(`Value for ${n.rule} rule for [${o}] should be a number. The field will be always invalid.`), this.setFieldInvalid(o, n);
              break;
            }
            if (l(h)) break;
            ((e, i) => e.length < i)(h, u) && this.setFieldInvalid(o, n);
            break;
          case r.Password:
            if (l(h)) break;
            (e => t.test(e))(h) || this.setFieldInvalid(o, n);
            break;
          case r.StrongPassword:
            if (l(h)) break;
            (e => s.test(e))(h) || this.setFieldInvalid(o, n);
            break;
          case r.Number:
            if (l(h)) break;
            (e => "string" == typeof e && !isNaN(+e) && !isNaN(parseFloat(e)))(h) || this.setFieldInvalid(o, n);
            break;
          case r.Integer:
            if (l(h)) break;
            (e => i.test(e))(h) || this.setFieldInvalid(o, n);
            break;
          case r.MaxNumber:
            {
              if (void 0 === u) {
                console.error(`Value for ${n.rule} rule for [${o}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(o, n);
                break;
              }
              if ("number" != typeof u) {
                console.error(`Value for ${n.rule} rule for [${o}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(o, n);
                break;
              }
              if (l(h)) break;
              const e = +h;
              (Number.isNaN(e) || ((e, i) => e > i)(e, u)) && this.setFieldInvalid(o, n);
              break;
            }
          case r.MinNumber:
            {
              if (void 0 === u) {
                console.error(`Value for ${n.rule} rule for [${o}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(o, n);
                break;
              }
              if ("number" != typeof u) {
                console.error(`Value for ${n.rule} rule for [${o}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(o, n);
                break;
              }
              if (l(h)) break;
              const e = +h;
              (Number.isNaN(e) || ((e, i) => e < i)(e, u)) && this.setFieldInvalid(o, n);
              break;
            }
          case r.CustomRegexp:
            {
              if (void 0 === u) return console.error(`Value for ${n.rule} rule for [${o}] field is not defined. This field will be always invalid.`), void this.setFieldInvalid(o, n);
              let e;
              try {
                e = new RegExp(u);
              } catch (b) {
                console.error(`Value for ${n.rule} rule for [${o}] should be a valid regexp. This field will be always invalid.`), this.setFieldInvalid(o, n);
                break;
              }
              const i = String(h);
              "" === i || e.test(i) || this.setFieldInvalid(o, n);
              break;
            }
          case r.MinFilesCount:
            if (void 0 === u) {
              console.error(`Value for ${n.rule} rule for [${o}] field is not defined. This field will be always invalid.`), this.setFieldInvalid(o, n);
              break;
            }
            if ("number" != typeof u) {
              console.error(`Value for ${n.rule} rule for [${o}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(o, n);
              break;
            }
            if (Number.isFinite(null == h ? void 0 : h.length) && h.length < u) {
              this.setFieldInvalid(o, n);
              break;
            }
            break;
          case r.MaxFilesCount:
            if (void 0 === u) {
              console.error(`Value for ${n.rule} rule for [${o}] field is not defined. This field will be always invalid.`), this.setFieldInvalid(o, n);
              break;
            }
            if ("number" != typeof u) {
              console.error(`Value for ${n.rule} rule for [${o}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(o, n);
              break;
            }
            if (Number.isFinite(null == h ? void 0 : h.length) && h.length > u) {
              this.setFieldInvalid(o, n);
              break;
            }
            break;
          case r.Files:
            {
              if (void 0 === u) return console.error(`Value for ${n.rule} rule for [${o}] field is not defined. This field will be always invalid.`), void this.setFieldInvalid(o, n);
              if ("object" != typeof u) return console.error(`Value for ${n.rule} rule for [${o}] field should be an object. This field will be always invalid.`), void this.setFieldInvalid(o, n);
              const e = u.files;
              if ("object" != typeof e) return console.error(`Value for ${n.rule} rule for [${o}] field should be an object with files array. This field will be always invalid.`), void this.setFieldInvalid(o, n);
              const i = (e, i) => {
                const t = Number.isFinite(i.minSize) && e.size < i.minSize,
                  s = Number.isFinite(i.maxSize) && e.size > i.maxSize,
                  l = Array.isArray(i.names) && !i.names.includes(e.name),
                  r = Array.isArray(i.extensions) && !i.extensions.includes(e.name.split(".")[e.name.split(".").length - 1]),
                  o = Array.isArray(i.types) && !i.types.includes(e.type);
                return t || s || l || r || o;
              };
              if ("object" == typeof h && null !== h) for (let t = 0, s = h.length; t < s; ++t) {
                const s = h.item(t);
                if (!s) {
                  this.setFieldInvalid(o, n);
                  break;
                }
                if (i(s, e)) {
                  this.setFieldInvalid(o, n);
                  break;
                }
              }
              break;
            }
          default:
            {
              if ("function" != typeof n.validator) return console.error(`Validator for custom rule for [${o}] field should be a function. This field will be always invalid.`), void this.setFieldInvalid(o, n);
              const e = n.validator(h, this.getCompatibleFields());
              if ("boolean" != typeof e && "function" != typeof e && console.error(`Validator return value for [${o}] field should be boolean or function. It will be cast to boolean.`), "function" == typeof e) {
                if (!c) {
                  this.fields[o].asyncCheckPending = !1;
                  const i = e();
                  return d(i) ? i.then(e => {
                    e || this.setFieldInvalid(o, n);
                  }).catch(() => {
                    this.setFieldInvalid(o, n);
                  }) : (console.error(`Validator function for custom rule for [${o}] field should return a Promise. This field will be always invalid.`), void this.setFieldInvalid(o, n));
                }
                this.fields[o].asyncCheckPending = !0;
              }
              e || this.setFieldInvalid(o, n);
            }
        }
        var f;
      }
    }
    isFormValid() {
      let e = !0;
      for (let i = 0, t = Object.values(this.fields).length; i < t; ++i) {
        const t = Object.values(this.fields)[i];
        if (void 0 === t.isValid) {
          e = void 0;
          break;
        }
        if (!1 === t.isValid) {
          e = !1;
          break;
        }
      }
      for (let i = 0, t = Object.values(this.groupFields).length; i < t; ++i) {
        const t = Object.values(this.groupFields)[i];
        if (void 0 === t.isValid) {
          e = void 0;
          break;
        }
        if (!1 === t.isValid) {
          e = !1;
          break;
        }
      }
      return e;
    }
    validateField(e, i = !1) {
      var t;
      const s = this.fields[e];
      s.isValid = !0;
      const l = [];
      return [...s.rules].reverse().forEach(t => {
        const r = this.validateFieldRule(e, s.elem, t, i);
        d(r) && l.push(r);
      }), s.isValid && this.setFieldValid(e, null == (t = s.config) ? void 0 : t.successMessage), Promise.allSettled(l).finally(() => {
        var e;
        i && (null == (e = this.onValidateCallback) || e.call(this, {
          isValid: this.isFormValid(),
          isSubmitted: this.isSubmitted,
          fields: this.getCompatibleFields(),
          groups: {
            ...this.groupFields
          }
        }));
      });
    }
    revalidateField(e) {
      if ("string" != typeof e && !u(e)) throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");
      const i = this.getKeyByFieldSelector(e);
      return i && this.fields[i] ? new Promise(e => {
        this.validateField(i, !0).finally(() => {
          this.clearFieldStyle(i), this.clearFieldLabel(i), this.renderFieldError(i, !0), e(!!this.fields[i].isValid);
        });
      }) : (console.error("Field not found. Check the field selector."), Promise.reject());
    }
    revalidateGroup(e) {
      if ("string" != typeof e && !u(e)) throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");
      const i = this.getKeyByFieldSelector(e);
      return i && this.groupFields[i] ? new Promise(e => {
        this.validateGroup(i).finally(() => {
          this.clearFieldLabel(i), this.renderGroupError(i, !0), e(!!this.groupFields[i].isValid);
        });
      }) : (console.error("Group not found. Check the group selector."), Promise.reject());
    }
    validateGroup(e, i = !1) {
      const t = this.groupFields[e],
        s = [];
      return [...t.rules].reverse().forEach(i => {
        const l = this.validateGroupRule(e, t.elems, i);
        d(l) && s.push(l);
      }), Promise.allSettled(s).finally(() => {
        var e;
        i && (null == (e = this.onValidateCallback) || e.call(this, {
          isValid: this.isFormValid(),
          isSubmitted: this.isSubmitted,
          fields: this.getCompatibleFields(),
          groups: {
            ...this.groupFields
          }
        }));
      });
    }
    focusInvalidField() {
      for (const e in this.fields) {
        const i = this.fields[e];
        if (!i.isValid) {
          setTimeout(() => i.elem.focus(), 0);
          break;
        }
      }
    }
    afterSubmitValidation(e = !1) {
      this.renderErrors(e), this.globalConfig.focusInvalidField && this.focusInvalidField();
    }
    validate(e = !1) {
      return new Promise(i => {
        const t = [];
        Object.keys(this.fields).forEach(e => {
          const i = this.validateField(e);
          d(i) && t.push(i);
        }), Object.keys(this.groupFields).forEach(e => {
          const i = this.validateGroup(e);
          d(i) && t.push(i);
        }), Promise.allSettled(t).then(() => {
          var s;
          this.afterSubmitValidation(e), null == (s = this.onValidateCallback) || s.call(this, {
            isValid: this.isFormValid(),
            isSubmitted: this.isSubmitted,
            fields: this.getCompatibleFields(),
            groups: {
              ...this.groupFields
            }
          }), i(!!t.length);
        });
      });
    }
    revalidate() {
      return new Promise(e => {
        this.validateHandler(void 0, !0).finally(() => {
          this.globalConfig.focusInvalidField && this.focusInvalidField(), e(this.isValid);
        });
      });
    }
    validateHandler(e, i = !1) {
      return this.globalConfig.lockForm && this.lockForm(), this.validate(i).finally(() => {
        var i, t, s;
        this.globalConfig.lockForm && this.unlockForm(), this.isValid ? (null == (i = this.onSuccessCallback) || i.call(this, e), this.globalConfig.submitFormAutomatically && (null == (t = null == e ? void 0 : e.currentTarget) || t.submit())) : null == (s = this.onFailCallback) || s.call(this, this.getCompatibleFields(), this.groupFields);
      });
    }
    setForm(e) {
      this.form = e, this.form.setAttribute("novalidate", "novalidate"), this.removeListener("submit", this.form, this.formSubmitHandler), this.addListener("submit", this.form, this.formSubmitHandler);
    }
    addListener(e, i, t) {
      i.addEventListener(e, t), this.eventListeners.push({
        type: e,
        elem: i,
        func: t
      });
    }
    removeListener(e, i, t) {
      i.removeEventListener(e, t), this.eventListeners = this.eventListeners.filter(t => t.type !== e || t.elem !== i);
    }
    addField(e, i, t) {
      if ("string" != typeof e && !u(e)) throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");
      let s;
      if (s = "string" == typeof e ? this.form.querySelector(e) : e, !s) throw Error("Field doesn't exist in the DOM! Please check the field selector.");
      if (!Array.isArray(i) || !i.length) throw Error("Rules argument should be an array and should contain at least 1 element.");
      i.forEach(e => {
        if (!("rule" in e || "validator" in e || "plugin" in e)) throw Error("Rules argument must contain at least one rule or validator property.");
        if (!(e.validator || e.plugin || e.rule && Object.values(r).includes(e.rule))) throw Error(`Rule should be one of these types: ${Object.values(r).join(", ")}. Provided value: ${e.rule}`);
      });
      const l = this.setKeyByFieldSelector(e);
      return this.fields[l] = {
        elem: s,
        rules: i,
        isValid: void 0,
        touched: !1,
        config: t
      }, this.setListeners(s), (this.isSubmitted || this.globalConfig.validateBeforeSubmitting) && this.validateField(l), this;
    }
    removeField(e) {
      if ("string" != typeof e && !u(e)) throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");
      const i = this.getKeyByFieldSelector(e);
      if (!i || !this.fields[i]) return console.error("Field not found. Check the field selector."), this;
      const t = this.getListenerType(this.fields[i].elem.type);
      return this.removeListener(t, this.fields[i].elem, this.handlerChange), this.clearErrors(), delete this.fields[i], this;
    }
    removeGroup(e) {
      if ("string" != typeof e) throw Error("Group selector is not valid. Please specify a string selector.");
      const i = this.getKeyByFieldSelector(e);
      return i && this.groupFields[i] ? (this.groupFields[i].elems.forEach(e => {
        const i = this.getListenerType(e.type);
        this.removeListener(i, e, this.handlerChange);
      }), this.clearErrors(), delete this.groupFields[i], this) : (console.error("Group not found. Check the group selector."), this);
    }
    addRequiredGroup(e, i, t, s) {
      if ("string" != typeof e && !u(e)) throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");
      let l;
      if (l = "string" == typeof e ? this.form.querySelector(e) : e, !l) throw Error("Group selector not found! Please check the group selector.");
      const r = l.querySelectorAll("input"),
        a = Array.from(r).filter(e => {
          const i = ((e, i) => {
            const t = [...i].reverse();
            for (let s = 0, l = t.length; s < l; ++s) {
              const i = t[s];
              for (const t in e) {
                const s = e[t];
                if (s.groupElem === i) return [t, s];
              }
            }
            return null;
          })(this.groupFields, (e => {
            let i = e;
            const t = [];
            for (; i;) t.unshift(i), i = i.parentNode;
            return t;
          })(e));
          return !i || i[1].elems.find(i => i !== e);
        }),
        n = this.setKeyByFieldSelector(e);
      return this.groupFields[n] = {
        rules: [{
          rule: o.Required,
          errorMessage: i,
          successMessage: s
        }],
        groupElem: l,
        elems: a,
        touched: !1,
        isValid: void 0,
        config: t
      }, r.forEach(e => {
        this.setListeners(e);
      }), this;
    }
    getListenerType(e) {
      switch (e) {
        case "checkbox":
        case "select-one":
        case "file":
        case "radio":
          return "change";
        default:
          return "input";
      }
    }
    setListeners(e) {
      const i = this.getListenerType(e.type);
      this.removeListener(i, e, this.handlerChange), this.addListener(i, e, this.handlerChange);
    }
    clearFieldLabel(e) {
      var i, t;
      null == (i = this.errorLabels[e]) || i.remove(), null == (t = this.successLabels[e]) || t.remove();
    }
    clearFieldStyle(e) {
      var i, t, s, l;
      const r = this.fields[e],
        o = (null == (i = r.config) ? void 0 : i.errorFieldStyle) || this.globalConfig.errorFieldStyle;
      Object.keys(o).forEach(e => {
        r.elem.style[e] = "";
      });
      const a = (null == (t = r.config) ? void 0 : t.successFieldStyle) || this.globalConfig.successFieldStyle || {};
      Object.keys(a).forEach(e => {
        r.elem.style[e] = "";
      }), r.elem.classList.remove(...c((null == (s = r.config) ? void 0 : s.errorFieldCssClass) || this.globalConfig.errorFieldCssClass), ...c((null == (l = r.config) ? void 0 : l.successFieldCssClass) || this.globalConfig.successFieldCssClass));
    }
    clearErrors() {
      var e, i;
      Object.keys(this.errorLabels).forEach(e => this.errorLabels[e].remove()), Object.keys(this.successLabels).forEach(e => this.successLabels[e].remove());
      for (const t in this.fields) this.clearFieldStyle(t);
      for (const t in this.groupFields) {
        const s = this.groupFields[t],
          l = (null == (e = s.config) ? void 0 : e.errorFieldStyle) || this.globalConfig.errorFieldStyle;
        Object.keys(l).forEach(e => {
          s.elems.forEach(i => {
            var t;
            i.style[e] = "", i.classList.remove(...c((null == (t = s.config) ? void 0 : t.errorFieldCssClass) || this.globalConfig.errorFieldCssClass));
          });
        });
        const r = (null == (i = s.config) ? void 0 : i.successFieldStyle) || this.globalConfig.successFieldStyle || {};
        Object.keys(r).forEach(e => {
          s.elems.forEach(i => {
            var t;
            i.style[e] = "", i.classList.remove(...c((null == (t = s.config) ? void 0 : t.successFieldCssClass) || this.globalConfig.successFieldCssClass));
          });
        });
      }
      this.tooltips = [];
    }
    isTooltip() {
      return !!this.globalConfig.tooltip;
    }
    lockForm() {
      const e = this.form.querySelectorAll("input, textarea, button, select");
      for (let i = 0, t = e.length; i < t; ++i) e[i].setAttribute("data-just-validate-fallback-disabled", e[i].disabled ? "true" : "false"), e[i].setAttribute("disabled", "disabled"), e[i].style.pointerEvents = "none", e[i].style.webkitFilter = "grayscale(100%)", e[i].style.filter = "grayscale(100%)";
    }
    unlockForm() {
      const e = this.form.querySelectorAll("input, textarea, button, select");
      for (let i = 0, t = e.length; i < t; ++i) "true" !== e[i].getAttribute("data-just-validate-fallback-disabled") && e[i].removeAttribute("disabled"), e[i].style.pointerEvents = "", e[i].style.webkitFilter = "", e[i].style.filter = "";
    }
    renderTooltip(e, i, t) {
      var s;
      const {
          top: l,
          left: r,
          width: o,
          height: a
        } = e.getBoundingClientRect(),
        n = i.getBoundingClientRect(),
        d = t || (null == (s = this.globalConfig.tooltip) ? void 0 : s.position);
      switch (d) {
        case "left":
          i.style.top = l + a / 2 - n.height / 2 + "px", i.style.left = r - n.width - 5 + "px";
          break;
        case "top":
          i.style.top = l - n.height - 5 + "px", i.style.left = r + o / 2 - n.width / 2 + "px";
          break;
        case "right":
          i.style.top = l + a / 2 - n.height / 2 + "px", i.style.left = `${r + o + 5}px`;
          break;
        case "bottom":
          i.style.top = `${l + a + 5}px`, i.style.left = r + o / 2 - n.width / 2 + "px";
      }
      i.dataset.direction = d;
      return {
        refresh: () => {
          this.renderTooltip(e, i, t);
        }
      };
    }
    createErrorLabelElem(e, i, t) {
      const s = document.createElement("div");
      s.innerHTML = i;
      const l = this.isTooltip() ? null == t ? void 0 : t.errorLabelStyle : (null == t ? void 0 : t.errorLabelStyle) || this.globalConfig.errorLabelStyle;
      return Object.assign(s.style, l), s.classList.add(...c((null == t ? void 0 : t.errorLabelCssClass) || this.globalConfig.errorLabelCssClass), "just-validate-error-label"), this.isTooltip() && (s.dataset.tooltip = "true"), this.globalConfig.testingMode && (s.dataset.testId = `error-label-${e}`), this.errorLabels[e] = s, s;
    }
    createSuccessLabelElem(e, i, t) {
      if (void 0 === i) return null;
      const s = document.createElement("div");
      s.innerHTML = i;
      const l = (null == t ? void 0 : t.successLabelStyle) || this.globalConfig.successLabelStyle;
      return Object.assign(s.style, l), s.classList.add(...c((null == t ? void 0 : t.successLabelCssClass) || this.globalConfig.successLabelCssClass), "just-validate-success-label"), this.globalConfig.testingMode && (s.dataset.testId = `success-label-${e}`), this.successLabels[e] = s, s;
    }
    renderErrorsContainer(e, i) {
      const t = i || this.globalConfig.errorsContainer;
      if ("string" == typeof t) {
        const i = this.form.querySelector(t);
        if (i) return i.appendChild(e), !0;
        console.error(`Error container with ${t} selector not found. Errors will be rendered as usual`);
      }
      return t instanceof Element ? (t.appendChild(e), !0) : (void 0 !== t && console.error("Error container not found. It should be a string or existing Element. Errors will be rendered as usual"), !1);
    }
    renderGroupLabel(e, i, t, s) {
      if (!s) {
        if (this.renderErrorsContainer(i, t)) return;
      }
      e.appendChild(i);
    }
    renderFieldLabel(e, i, t, s) {
      var l, r, o, a, n, d, c;
      if (!s) {
        if (this.renderErrorsContainer(i, t)) return;
      }
      if ("checkbox" === e.type || "radio" === e.type) {
        const t = document.querySelector(`label[for="${e.getAttribute("id")}"]`);
        "label" === (null == (r = null == (l = e.parentElement) ? void 0 : l.tagName) ? void 0 : r.toLowerCase()) ? null == (a = null == (o = e.parentElement) ? void 0 : o.parentElement) || a.appendChild(i) : t ? null == (n = t.parentElement) || n.appendChild(i) : null == (d = e.parentElement) || d.appendChild(i);
      } else null == (c = e.parentElement) || c.appendChild(i);
    }
    showLabels(e, i) {
      Object.keys(e).forEach((t, s) => {
        const l = e[t],
          r = this.getKeyByFieldSelector(t);
        if (!r || !this.fields[r]) return void console.error("Field not found. Check the field selector.");
        const o = this.fields[r];
        o.isValid = !i, this.clearFieldStyle(r), this.clearFieldLabel(r), this.renderFieldError(r, !1, l), 0 === s && this.globalConfig.focusInvalidField && setTimeout(() => o.elem.focus(), 0);
      });
    }
    showErrors(e) {
      if ("object" != typeof e) throw Error("[showErrors]: Errors should be an object with key: value format");
      this.showLabels(e, !0);
    }
    showSuccessLabels(e) {
      if ("object" != typeof e) throw Error("[showSuccessLabels]: Labels should be an object with key: value format");
      this.showLabels(e, !1);
    }
    renderFieldError(e, i = !1, t) {
      var s, l, r, o, a, n;
      const d = this.fields[e];
      if (!1 === d.isValid && (this.isValid = !1), void 0 === d.isValid || !i && !this.isSubmitted && !d.touched && void 0 === t) return;
      if (d.isValid) {
        if (!d.asyncCheckPending) {
          const i = this.createSuccessLabelElem(e, void 0 !== t ? t : d.successMessage, d.config);
          i && this.renderFieldLabel(d.elem, i, null == (s = d.config) ? void 0 : s.errorsContainer, !0), d.elem.classList.add(...c((null == (l = d.config) ? void 0 : l.successFieldCssClass) || this.globalConfig.successFieldCssClass));
        }
        return;
      }
      d.elem.classList.add(...c((null == (r = d.config) ? void 0 : r.errorFieldCssClass) || this.globalConfig.errorFieldCssClass));
      const u = this.createErrorLabelElem(e, void 0 !== t ? t : d.errorMessage, d.config);
      this.renderFieldLabel(d.elem, u, null == (o = d.config) ? void 0 : o.errorsContainer), this.isTooltip() && this.tooltips.push(this.renderTooltip(d.elem, u, null == (n = null == (a = d.config) ? void 0 : a.tooltip) ? void 0 : n.position));
    }
    renderGroupError(e, i = !0) {
      var t, s, l, r;
      const o = this.groupFields[e];
      if (!1 === o.isValid && (this.isValid = !1), void 0 === o.isValid || !i && !this.isSubmitted && !o.touched) return;
      if (o.isValid) {
        o.elems.forEach(e => {
          var i, t;
          Object.assign(e.style, (null == (i = o.config) ? void 0 : i.successFieldStyle) || this.globalConfig.successFieldStyle), e.classList.add(...c((null == (t = o.config) ? void 0 : t.successFieldCssClass) || this.globalConfig.successFieldCssClass));
        });
        const i = this.createSuccessLabelElem(e, o.successMessage, o.config);
        return void (i && this.renderGroupLabel(o.groupElem, i, null == (t = o.config) ? void 0 : t.errorsContainer, !0));
      }
      this.isValid = !1, o.elems.forEach(e => {
        var i, t;
        Object.assign(e.style, (null == (i = o.config) ? void 0 : i.errorFieldStyle) || this.globalConfig.errorFieldStyle), e.classList.add(...c((null == (t = o.config) ? void 0 : t.errorFieldCssClass) || this.globalConfig.errorFieldCssClass));
      });
      const a = this.createErrorLabelElem(e, o.errorMessage, o.config);
      this.renderGroupLabel(o.groupElem, a, null == (s = o.config) ? void 0 : s.errorsContainer), this.isTooltip() && this.tooltips.push(this.renderTooltip(o.groupElem, a, null == (r = null == (l = o.config) ? void 0 : l.tooltip) ? void 0 : r.position));
    }
    renderErrors(e = !1) {
      if (this.isSubmitted || e || this.globalConfig.validateBeforeSubmitting) {
        this.clearErrors(), this.isValid = !0;
        for (const e in this.groupFields) this.renderGroupError(e);
        for (const e in this.fields) this.renderFieldError(e);
      }
    }
    destroy() {
      this.eventListeners.forEach(e => {
        this.removeListener(e.type, e.elem, e.func);
      }), Object.keys(this.customStyleTags).forEach(e => {
        this.customStyleTags[e].remove();
      }), this.clearErrors(), this.globalConfig.lockForm && this.unlockForm();
    }
    refresh() {
      this.destroy(), this.form ? (this.initialize(this.form, this.globalConfig), Object.keys(this.fields).forEach(e => {
        const i = this.getFieldSelectorByKey(e);
        i && this.addField(i, [...this.fields[e].rules], this.fields[e].config);
      })) : console.error("Cannot initialize the library! Form is not defined");
    }
    setCurrentLocale(e) {
      "string" == typeof e || void 0 === e ? (this.currentLocale = e, this.isSubmitted && this.validate()) : console.error("Current locale should be a string");
    }
    onSuccess(e) {
      return this.onSuccessCallback = e, this;
    }
    onFail(e) {
      return this.onFailCallback = e, this;
    }
    onValidate(e) {
      return this.onValidateCallback = e, this;
    }
  };
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!
 * dist/inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2024 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.10-beta.1
 */
!function (e, t) {
  if ("object" == typeof exports && "object" == typeof module) module.exports = t();else if ("function" == typeof define && define.amd) define([], t);else {
    var n = t();
    for (var i in n) ("object" == typeof exports ? exports : e)[i] = n[i];
  }
}("undefined" != typeof self ? self : undefined, function () {
  return function () {
    "use strict";

    var e = {
        3976: function (e, t) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = void 0;
          t.default = {
            _maxTestPos: 500,
            placeholder: "_",
            optionalmarker: ["[", "]"],
            quantifiermarker: ["{", "}"],
            groupmarker: ["(", ")"],
            alternatormarker: "|",
            escapeChar: "\\",
            mask: null,
            regex: null,
            oncomplete: function () {},
            onincomplete: function () {},
            oncleared: function () {},
            repeat: 0,
            greedy: !1,
            autoUnmask: !1,
            removeMaskOnSubmit: !1,
            clearMaskOnLostFocus: !0,
            insertMode: !0,
            insertModeVisual: !0,
            clearIncomplete: !1,
            alias: null,
            onKeyDown: function () {},
            onBeforeMask: null,
            onBeforePaste: function (e, t) {
              return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
            },
            onBeforeWrite: null,
            onUnMask: null,
            showMaskOnFocus: !0,
            showMaskOnHover: !0,
            onKeyValidation: function () {},
            skipOptionalPartCharacter: " ",
            numericInput: !1,
            rightAlign: !1,
            undoOnEscape: !0,
            radixPoint: "",
            _radixDance: !1,
            groupSeparator: "",
            keepStatic: null,
            positionCaretOnTab: !0,
            tabThrough: !1,
            supportsInputType: ["text", "tel", "url", "password", "search"],
            isComplete: null,
            preValidation: null,
            postValidation: null,
            staticDefinitionSymbol: void 0,
            jitMasking: !1,
            nullable: !0,
            inputEventOnly: !1,
            noValuePatching: !1,
            positionCaretOnClick: "lvp",
            casing: null,
            inputmode: "text",
            importDataAttributes: !0,
            shiftPositions: !0,
            usePrototypeDefinitions: !0,
            validationEventTimeOut: 3e3,
            substitutes: {}
          };
        },
        7392: function (e, t) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = void 0;
          t.default = {
            9: {
              validator: "[0-9\uff10-\uff19]",
              definitionSymbol: "*"
            },
            a: {
              validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
              definitionSymbol: "*"
            },
            "*": {
              validator: "[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
            }
          };
        },
        253: function (e, t) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = function (e, t, n) {
            if (void 0 === n) return e.__data ? e.__data[t] : null;
            e.__data = e.__data || {}, e.__data[t] = n;
          };
        },
        3776: function (e, t, n) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.Event = void 0, t.off = function (e, t) {
            var n, i;
            u(this[0]) && e && (n = this[0].eventRegistry, i = this[0], e.split(" ").forEach(function (e) {
              var a = o(e.split("."), 2);
              (function (e, i) {
                var a,
                  r,
                  o = [];
                if (e.length > 0) {
                  if (void 0 === t) for (a = 0, r = n[e][i].length; a < r; a++) o.push({
                    ev: e,
                    namespace: i && i.length > 0 ? i : "global",
                    handler: n[e][i][a]
                  });else o.push({
                    ev: e,
                    namespace: i && i.length > 0 ? i : "global",
                    handler: t
                  });
                } else if (i.length > 0) for (var l in n) for (var s in n[l]) if (s === i) if (void 0 === t) for (a = 0, r = n[l][s].length; a < r; a++) o.push({
                  ev: l,
                  namespace: s,
                  handler: n[l][s][a]
                });else o.push({
                  ev: l,
                  namespace: s,
                  handler: t
                });
                return o;
              })(a[0], a[1]).forEach(function (e) {
                var t = e.ev,
                  a = e.handler;
                !function (e, t, a) {
                  if (e in n == 1) if (i.removeEventListener ? i.removeEventListener(e, a, !1) : i.detachEvent && i.detachEvent("on".concat(e), a), "global" === t) for (var r in n[e]) n[e][r].splice(n[e][r].indexOf(a), 1);else n[e][t].splice(n[e][t].indexOf(a), 1);
                }(t, e.namespace, a);
              });
            }));
            return this;
          }, t.on = function (e, t) {
            if (u(this[0])) {
              var n = this[0].eventRegistry,
                i = this[0];
              e.split(" ").forEach(function (e) {
                var a = o(e.split("."), 2),
                  r = a[0],
                  l = a[1];
                !function (e, a) {
                  i.addEventListener ? i.addEventListener(e, t, !1) : i.attachEvent && i.attachEvent("on".concat(e), t), n[e] = n[e] || {}, n[e][a] = n[e][a] || [], n[e][a].push(t);
                }(r, void 0 === l ? "global" : l);
              });
            }
            return this;
          }, t.trigger = function (e) {
            var t = arguments;
            if (u(this[0])) for (var n = this[0].eventRegistry, i = this[0], o = "string" == typeof e ? e.split(" ") : [e.type], l = 0; l < o.length; l++) {
              var s = o[l].split("."),
                f = s[0],
                p = s[1] || "global";
              if (void 0 !== c && "global" === p) {
                var d,
                  h = {
                    bubbles: !0,
                    cancelable: !0,
                    composed: !0,
                    detail: arguments[1]
                  };
                if (c.createEvent) {
                  try {
                    if ("input" === f) h.inputType = "insertText", d = new InputEvent(f, h);else d = new CustomEvent(f, h);
                  } catch (e) {
                    (d = c.createEvent("CustomEvent")).initCustomEvent(f, h.bubbles, h.cancelable, h.detail);
                  }
                  e.type && (0, a.default)(d, e), i.dispatchEvent(d);
                } else (d = c.createEventObject()).eventType = f, d.detail = arguments[1], e.type && (0, a.default)(d, e), i.fireEvent("on" + d.eventType, d);
              } else if (void 0 !== n[f]) {
                arguments[0] = arguments[0].type ? arguments[0] : r.default.Event(arguments[0]), arguments[0].detail = arguments.slice(1);
                var v = n[f];
                ("global" === p ? Object.values(v).flat() : v[p]).forEach(function (e) {
                  return e.apply(i, t);
                });
              }
            }
            return this;
          };
          var i = s(n(9380)),
            a = s(n(600)),
            r = s(n(4963));
          function o(e, t) {
            return function (e) {
              if (Array.isArray(e)) return e;
            }(e) || function (e, t) {
              var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (null != n) {
                var i,
                  a,
                  r,
                  o,
                  l = [],
                  s = !0,
                  c = !1;
                try {
                  if (r = (n = n.call(e)).next, 0 === t) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else for (; !(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0);
                } catch (e) {
                  c = !0, a = e;
                } finally {
                  try {
                    if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                  } finally {
                    if (c) throw a;
                  }
                }
                return l;
              }
            }(e, t) || function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return l(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t);
            }(e, t) || function () {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function l(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i;
          }
          function s(e) {
            return e && e.__esModule ? e : {
              default: e
            };
          }
          var c = i.default.document;
          function u(e) {
            return e instanceof Element;
          }
          var f = t.Event = void 0;
          "function" == typeof i.default.CustomEvent ? t.Event = f = i.default.CustomEvent : i.default.Event && c && c.createEvent ? (t.Event = f = function (e, t) {
            t = t || {
              bubbles: !1,
              cancelable: !1,
              composed: !0,
              detail: void 0
            };
            var n = c.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
          }, f.prototype = i.default.Event.prototype) : "undefined" != typeof Event && (t.Event = f = Event);
        },
        600: function (e, t) {
          function n(e) {
            return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e;
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, n(e);
          }
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = function e() {
            var t,
              i,
              a,
              r,
              o,
              l,
              s = arguments[0] || {},
              c = 1,
              u = arguments.length,
              f = !1;
            "boolean" == typeof s && (f = s, s = arguments[c] || {}, c++);
            "object" !== n(s) && "function" != typeof s && (s = {});
            for (; c < u; c++) if (null != (t = arguments[c])) for (i in t) a = s[i], s !== (r = t[i]) && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = !1, l = a && Array.isArray(a) ? a : []) : l = a && "[object Object]" === Object.prototype.toString.call(a) ? a : {}, s[i] = e(f, l, r)) : void 0 !== r && (s[i] = r));
            return s;
          };
        },
        4963: function (e, t, n) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = void 0;
          var i = l(n(9380)),
            a = l(n(253)),
            r = n(3776),
            o = l(n(600));
          function l(e) {
            return e && e.__esModule ? e : {
              default: e
            };
          }
          var s = i.default.document;
          function c(e) {
            return e instanceof c ? e : this instanceof c ? void (null != e && e !== i.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : s.querySelector(e), void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new c(e);
          }
          c.prototype = {
            on: r.on,
            off: r.off,
            trigger: r.trigger
          }, c.extend = o.default, c.data = a.default, c.Event = r.Event;
          t.default = c;
        },
        9845: function (e, t, n) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.mobile = t.iphone = t.ie = void 0;
          var i,
            a = (i = n(9380)) && i.__esModule ? i : {
              default: i
            };
          var r = a.default.navigator && a.default.navigator.userAgent || "";
          t.ie = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0, t.mobile = a.default.navigator && a.default.navigator.userAgentData && a.default.navigator.userAgentData.mobile || a.default.navigator && a.default.navigator.maxTouchPoints || "ontouchstart" in a.default, t.iphone = /iphone/i.test(r);
        },
        7184: function (e, t) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = function (e) {
            return e.replace(n, "\\$1");
          };
          var n = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim");
        },
        6030: function (e, t, n) {
          function i(e) {
            return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e;
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, i(e);
          }
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.EventHandlers = void 0;
          var a,
            r = n(9845),
            o = (a = n(9380)) && a.__esModule ? a : {
              default: a
            },
            l = n(7760),
            s = n(2839),
            c = n(8711),
            u = n(7215),
            f = n(4713);
          function p() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */p = function () {
              return t;
            };
            var e,
              t = {},
              n = Object.prototype,
              a = n.hasOwnProperty,
              r = Object.defineProperty || function (e, t, n) {
                e[t] = n.value;
              },
              o = "function" == typeof Symbol ? Symbol : {},
              l = o.iterator || "@@iterator",
              s = o.asyncIterator || "@@asyncIterator",
              c = o.toStringTag || "@@toStringTag";
            function u(e, t, n) {
              return Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }), e[t];
            }
            try {
              u({}, "");
            } catch (e) {
              u = function (e, t, n) {
                return e[t] = n;
              };
            }
            function f(e, t, n, i) {
              var a = t && t.prototype instanceof k ? t : k,
                o = Object.create(a.prototype),
                l = new D(i || []);
              return r(o, "_invoke", {
                value: E(e, n, l)
              }), o;
            }
            function d(e, t, n) {
              try {
                return {
                  type: "normal",
                  arg: e.call(t, n)
                };
              } catch (e) {
                return {
                  type: "throw",
                  arg: e
                };
              }
            }
            t.wrap = f;
            var h = "suspendedStart",
              v = "suspendedYield",
              m = "executing",
              g = "completed",
              y = {};
            function k() {}
            function b() {}
            function x() {}
            var w = {};
            u(w, l, function () {
              return this;
            });
            var P = Object.getPrototypeOf,
              S = P && P(P(L([])));
            S && S !== n && a.call(S, l) && (w = S);
            var O = x.prototype = k.prototype = Object.create(w);
            function _(e) {
              ["next", "throw", "return"].forEach(function (t) {
                u(e, t, function (e) {
                  return this._invoke(t, e);
                });
              });
            }
            function M(e, t) {
              function n(r, o, l, s) {
                var c = d(e[r], e, o);
                if ("throw" !== c.type) {
                  var u = c.arg,
                    f = u.value;
                  return f && "object" == i(f) && a.call(f, "__await") ? t.resolve(f.__await).then(function (e) {
                    n("next", e, l, s);
                  }, function (e) {
                    n("throw", e, l, s);
                  }) : t.resolve(f).then(function (e) {
                    u.value = e, l(u);
                  }, function (e) {
                    return n("throw", e, l, s);
                  });
                }
                s(c.arg);
              }
              var o;
              r(this, "_invoke", {
                value: function (e, i) {
                  function a() {
                    return new t(function (t, a) {
                      n(e, i, t, a);
                    });
                  }
                  return o = o ? o.then(a, a) : a();
                }
              });
            }
            function E(t, n, i) {
              var a = h;
              return function (r, o) {
                if (a === m) throw new Error("Generator is already running");
                if (a === g) {
                  if ("throw" === r) throw o;
                  return {
                    value: e,
                    done: !0
                  };
                }
                for (i.method = r, i.arg = o;;) {
                  var l = i.delegate;
                  if (l) {
                    var s = j(l, i);
                    if (s) {
                      if (s === y) continue;
                      return s;
                    }
                  }
                  if ("next" === i.method) i.sent = i._sent = i.arg;else if ("throw" === i.method) {
                    if (a === h) throw a = g, i.arg;
                    i.dispatchException(i.arg);
                  } else "return" === i.method && i.abrupt("return", i.arg);
                  a = m;
                  var c = d(t, n, i);
                  if ("normal" === c.type) {
                    if (a = i.done ? g : v, c.arg === y) continue;
                    return {
                      value: c.arg,
                      done: i.done
                    };
                  }
                  "throw" === c.type && (a = g, i.method = "throw", i.arg = c.arg);
                }
              };
            }
            function j(t, n) {
              var i = n.method,
                a = t.iterator[i];
              if (a === e) return n.delegate = null, "throw" === i && t.iterator.return && (n.method = "return", n.arg = e, j(t, n), "throw" === n.method) || "return" !== i && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + i + "' method")), y;
              var r = d(a, t.iterator, n.arg);
              if ("throw" === r.type) return n.method = "throw", n.arg = r.arg, n.delegate = null, y;
              var o = r.arg;
              return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, y) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y);
            }
            function T(e) {
              var t = {
                tryLoc: e[0]
              };
              1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
            }
            function A(e) {
              var t = e.completion || {};
              t.type = "normal", delete t.arg, e.completion = t;
            }
            function D(e) {
              this.tryEntries = [{
                tryLoc: "root"
              }], e.forEach(T, this), this.reset(!0);
            }
            function L(t) {
              if (t || "" === t) {
                var n = t[l];
                if (n) return n.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                  var r = -1,
                    o = function n() {
                      for (; ++r < t.length;) if (a.call(t, r)) return n.value = t[r], n.done = !1, n;
                      return n.value = e, n.done = !0, n;
                    };
                  return o.next = o;
                }
              }
              throw new TypeError(i(t) + " is not iterable");
            }
            return b.prototype = x, r(O, "constructor", {
              value: x,
              configurable: !0
            }), r(x, "constructor", {
              value: b,
              configurable: !0
            }), b.displayName = u(x, c, "GeneratorFunction"), t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name));
            }, t.mark = function (e) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : (e.__proto__ = x, u(e, c, "GeneratorFunction")), e.prototype = Object.create(O), e;
            }, t.awrap = function (e) {
              return {
                __await: e
              };
            }, _(M.prototype), u(M.prototype, s, function () {
              return this;
            }), t.AsyncIterator = M, t.async = function (e, n, i, a, r) {
              void 0 === r && (r = Promise);
              var o = new M(f(e, n, i, a), r);
              return t.isGeneratorFunction(n) ? o : o.next().then(function (e) {
                return e.done ? e.value : o.next();
              });
            }, _(O), u(O, c, "Generator"), u(O, l, function () {
              return this;
            }), u(O, "toString", function () {
              return "[object Generator]";
            }), t.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var i in t) n.push(i);
              return n.reverse(), function e() {
                for (; n.length;) {
                  var i = n.pop();
                  if (i in t) return e.value = i, e.done = !1, e;
                }
                return e.done = !0, e;
              };
            }, t.values = L, D.prototype = {
              constructor: D,
              reset: function (t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(A), !t) for (var n in this) "t" === n.charAt(0) && a.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function i(i, a) {
                  return l.type = "throw", l.arg = t, n.next = i, a && (n.method = "next", n.arg = e), !!a;
                }
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r],
                    l = o.completion;
                  if ("root" === o.tryLoc) return i("end");
                  if (o.tryLoc <= this.prev) {
                    var s = a.call(o, "catchLoc"),
                      c = a.call(o, "finallyLoc");
                    if (s && c) {
                      if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                    } else if (s) {
                      if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                    } else {
                      if (!c) throw new Error("try statement without catch or finally");
                      if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var i = this.tryEntries[n];
                  if (i.tryLoc <= this.prev && a.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                    var r = i;
                    break;
                  }
                }
                r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                var o = r ? r.completion : {};
                return o.type = e, o.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, y) : this.complete(o);
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y;
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), A(n), y;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var i = n.completion;
                    if ("throw" === i.type) {
                      var a = i.arg;
                      A(n);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, i) {
                return this.delegate = {
                  iterator: L(t),
                  resultName: n,
                  nextLoc: i
                }, "next" === this.method && (this.arg = e), y;
              }
            }, t;
          }
          function d(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
              if (Array.isArray(e) || (n = function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return h(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t);
              }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var i = 0,
                  a = function () {};
                return {
                  s: a,
                  n: function () {
                    return i >= e.length ? {
                      done: !0
                    } : {
                      done: !1,
                      value: e[i++]
                    };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: a
                };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var r,
              o = !0,
              l = !1;
            return {
              s: function () {
                n = n.call(e);
              },
              n: function () {
                var e = n.next();
                return o = e.done, e;
              },
              e: function (e) {
                l = !0, r = e;
              },
              f: function () {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (l) throw r;
                }
              }
            };
          }
          function h(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i;
          }
          function v(e, t, n, i, a, r, o) {
            try {
              var l = e[r](o),
                s = l.value;
            } catch (e) {
              return void n(e);
            }
            l.done ? t(s) : Promise.resolve(s).then(i, a);
          }
          var m,
            g,
            y = t.EventHandlers = {
              keyEvent: function (e, t, n, i, a) {
                var o = this.inputmask,
                  p = o.opts,
                  d = o.dependencyLib,
                  h = o.maskset,
                  v = this,
                  m = d(v),
                  g = e.key,
                  k = c.caret.call(o, v),
                  b = p.onKeyDown.call(this, e, c.getBuffer.call(o), k, p);
                if (void 0 !== b) return b;
                if (g === s.keys.Backspace || g === s.keys.Delete || r.iphone && g === s.keys.BACKSPACE_SAFARI || e.ctrlKey && g === s.keys.x && !("oncut" in v)) e.preventDefault(), u.handleRemove.call(o, v, g, k), (0, l.writeBuffer)(v, c.getBuffer.call(o, !0), h.p, e, v.inputmask._valueGet() !== c.getBuffer.call(o).join(""));else if (g === s.keys.End || g === s.keys.PageDown) {
                  e.preventDefault();
                  var x = c.seekNext.call(o, c.getLastValidPosition.call(o));
                  c.caret.call(o, v, e.shiftKey ? k.begin : x, x, !0);
                } else g === s.keys.Home && !e.shiftKey || g === s.keys.PageUp ? (e.preventDefault(), c.caret.call(o, v, 0, e.shiftKey ? k.begin : 0, !0)) : p.undoOnEscape && g === s.keys.Escape && !0 !== e.altKey ? ((0, l.checkVal)(v, !0, !1, o.undoValue.split("")), m.trigger("click")) : g !== s.keys.Insert || e.shiftKey || e.ctrlKey || void 0 !== o.userOptions.insertMode ? !0 === p.tabThrough && g === s.keys.Tab ? !0 === e.shiftKey ? (k.end = c.seekPrevious.call(o, k.end, !0), !0 === f.getTest.call(o, k.end - 1).match.static && k.end--, k.begin = c.seekPrevious.call(o, k.end, !0), k.begin >= 0 && k.end > 0 && (e.preventDefault(), c.caret.call(o, v, k.begin, k.end))) : (k.begin = c.seekNext.call(o, k.begin, !0), k.end = c.seekNext.call(o, k.begin, !0), k.end < h.maskLength && k.end--, k.begin <= h.maskLength && (e.preventDefault(), c.caret.call(o, v, k.begin, k.end))) : e.shiftKey || (p.insertModeVisual && !1 === p.insertMode ? g === s.keys.ArrowRight ? setTimeout(function () {
                  var e = c.caret.call(o, v);
                  c.caret.call(o, v, e.begin);
                }, 0) : g === s.keys.ArrowLeft && setTimeout(function () {
                  var e = c.translatePosition.call(o, v.inputmask.caretPos.begin);
                  c.translatePosition.call(o, v.inputmask.caretPos.end);
                  o.isRTL ? c.caret.call(o, v, e + (e === h.maskLength ? 0 : 1)) : c.caret.call(o, v, e - (0 === e ? 0 : 1));
                }, 0) : void 0 === o.keyEventHook || o.keyEventHook(e)) : u.isSelection.call(o, k) ? p.insertMode = !p.insertMode : (p.insertMode = !p.insertMode, c.caret.call(o, v, k.begin, k.begin));
                return o.isComposing = g == s.keys.Process || g == s.keys.Unidentified, o.ignorable = g.length > 1 && !("textarea" === v.tagName.toLowerCase() && g == s.keys.Enter), y.keypressEvent.call(this, e, t, n, i, a);
              },
              keypressEvent: function (e, t, n, i, a) {
                var r = this.inputmask || this,
                  o = r.opts,
                  f = r.dependencyLib,
                  p = r.maskset,
                  d = r.el,
                  h = f(d),
                  v = e.key;
                if (!0 === t || e.ctrlKey && e.altKey && !r.ignorable || !(e.ctrlKey || e.metaKey || r.ignorable)) {
                  if (v) {
                    var m,
                      g = t ? {
                        begin: a,
                        end: a
                      } : c.caret.call(r, d);
                    t || (v = o.substitutes[v] || v), p.writeOutBuffer = !0;
                    var y = u.isValid.call(r, g, v, i, void 0, void 0, void 0, t);
                    if (!1 !== y && (c.resetMaskSet.call(r, !0), m = void 0 !== y.caret ? y.caret : c.seekNext.call(r, y.pos.begin ? y.pos.begin : y.pos), p.p = m), m = o.numericInput && void 0 === y.caret ? c.seekPrevious.call(r, m) : m, !1 !== n && (setTimeout(function () {
                      o.onKeyValidation.call(d, v, y);
                    }, 0), p.writeOutBuffer && !1 !== y)) {
                      var k = c.getBuffer.call(r);
                      (0, l.writeBuffer)(d, k, m, e, !0 !== t);
                    }
                    if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = m), y;
                  }
                } else v === s.keys.Enter && r.undoValue !== r._valueGet(!0) && (r.undoValue = r._valueGet(!0), setTimeout(function () {
                  h.trigger("change");
                }, 0));
              },
              pasteEvent: (m = p().mark(function e(t) {
                var n, i, a, r, s, u;
                return p().wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      n = function (e, n, i, a, o) {
                        var s = c.caret.call(e, n, void 0, void 0, !0),
                          u = i.substr(0, s.begin),
                          f = i.substr(s.end, i.length);
                        if (u == (e.isRTL ? c.getBufferTemplate.call(e).slice().reverse() : c.getBufferTemplate.call(e)).slice(0, s.begin).join("") && (u = ""), f == (e.isRTL ? c.getBufferTemplate.call(e).slice().reverse() : c.getBufferTemplate.call(e)).slice(s.end).join("") && (f = ""), a = u + a + f, e.isRTL && !0 !== r.numericInput) {
                          a = a.split("");
                          var p,
                            h = d(c.getBufferTemplate.call(e));
                          try {
                            for (h.s(); !(p = h.n()).done;) {
                              var v = p.value;
                              a[0] === v && a.shift();
                            }
                          } catch (e) {
                            h.e(e);
                          } finally {
                            h.f();
                          }
                          a = a.reverse().join("");
                        }
                        var m = a;
                        if ("function" == typeof o) {
                          if (!1 === (m = o.call(e, m, r))) return !1;
                          m || (m = i);
                        }
                        (0, l.checkVal)(n, !0, !1, m.toString().split(""), t);
                      }, i = this, a = this.inputmask, r = a.opts, s = a._valueGet(!0), a.skipInputEvent = !0, t.clipboardData && t.clipboardData.getData ? u = t.clipboardData.getData("text/plain") : o.default.clipboardData && o.default.clipboardData.getData && (u = o.default.clipboardData.getData("Text")), n(a, i, s, u, r.onBeforePaste), t.preventDefault();
                    case 7:
                    case "end":
                      return e.stop();
                  }
                }, e, this);
              }), g = function () {
                var e = this,
                  t = arguments;
                return new Promise(function (n, i) {
                  var a = m.apply(e, t);
                  function r(e) {
                    v(a, n, i, r, o, "next", e);
                  }
                  function o(e) {
                    v(a, n, i, r, o, "throw", e);
                  }
                  r(void 0);
                });
              }, function (e) {
                return g.apply(this, arguments);
              }),
              inputFallBackEvent: function (e) {
                var t = this.inputmask,
                  n = t.opts,
                  i = t.dependencyLib;
                var a,
                  o = this,
                  u = o.inputmask._valueGet(!0),
                  p = (t.isRTL ? c.getBuffer.call(t).slice().reverse() : c.getBuffer.call(t)).join(""),
                  d = c.caret.call(t, o, void 0, void 0, !0);
                if (p !== u) {
                  if (a = function (e, i, a) {
                    for (var r, o, l, s = e.substr(0, a.begin).split(""), u = e.substr(a.begin).split(""), p = i.substr(0, a.begin).split(""), d = i.substr(a.begin).split(""), h = s.length >= p.length ? s.length : p.length, v = u.length >= d.length ? u.length : d.length, m = "", g = [], y = "~"; s.length < h;) s.push(y);
                    for (; p.length < h;) p.push(y);
                    for (; u.length < v;) u.unshift(y);
                    for (; d.length < v;) d.unshift(y);
                    var k = s.concat(u),
                      b = p.concat(d);
                    for (o = 0, r = k.length; o < r; o++) switch (l = f.getPlaceholder.call(t, c.translatePosition.call(t, o)), m) {
                      case "insertText":
                        b[o - 1] === k[o] && a.begin == k.length - 1 && g.push(k[o]), o = r;
                        break;
                      case "insertReplacementText":
                      case "deleteContentBackward":
                        k[o] === y ? a.end++ : o = r;
                        break;
                      default:
                        k[o] !== b[o] && (k[o + 1] !== y && k[o + 1] !== l && void 0 !== k[o + 1] || (b[o] !== l || b[o + 1] !== y) && b[o] !== y ? b[o + 1] === y && b[o] === k[o + 1] ? (m = "insertText", g.push(k[o]), a.begin--, a.end--) : k[o] !== l && k[o] !== y && (k[o + 1] === y || b[o] !== k[o] && b[o + 1] === k[o + 1]) ? (m = "insertReplacementText", g.push(k[o]), a.begin--) : k[o] === y ? (m = "deleteContentBackward", (c.isMask.call(t, c.translatePosition.call(t, o), !0) || b[o] === n.radixPoint) && a.end++) : o = r : (m = "insertText", g.push(k[o]), a.begin--, a.end--));
                    }
                    return {
                      action: m,
                      data: g,
                      caret: a
                    };
                  }(u, p, d), (o.inputmask.shadowRoot || o.ownerDocument).activeElement !== o && o.focus(), (0, l.writeBuffer)(o, c.getBuffer.call(t)), c.caret.call(t, o, d.begin, d.end, !0), !r.mobile && t.skipNextInsert && "insertText" === e.inputType && "insertText" === a.action && t.isComposing) return !1;
                  switch ("insertCompositionText" === e.inputType && "insertText" === a.action && t.isComposing ? t.skipNextInsert = !0 : t.skipNextInsert = !1, a.action) {
                    case "insertText":
                    case "insertReplacementText":
                      a.data.forEach(function (e, n) {
                        var a = new i.Event("keypress");
                        a.key = e, t.ignorable = !1, y.keypressEvent.call(o, a);
                      }), setTimeout(function () {
                        t.$el.trigger("keyup");
                      }, 0);
                      break;
                    case "deleteContentBackward":
                      var h = new i.Event("keydown");
                      h.key = s.keys.Backspace, y.keyEvent.call(o, h);
                      break;
                    default:
                      (0, l.applyInputValue)(o, u), c.caret.call(t, o, d.begin, d.end, !0);
                  }
                  e.preventDefault();
                }
              },
              setValueEvent: function (e) {
                var t = this.inputmask,
                  n = t.dependencyLib,
                  i = this,
                  a = e && e.detail ? e.detail[0] : arguments[1];
                void 0 === a && (a = i.inputmask._valueGet(!0)), (0, l.applyInputValue)(i, a, new n.Event("input")), (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && c.caret.call(t, i, e.detail ? e.detail[1] : arguments[2]);
              },
              focusEvent: function (e) {
                var t = this.inputmask,
                  n = t.opts,
                  i = t && t._valueGet();
                n.showMaskOnFocus && i !== c.getBuffer.call(t).join("") && (0, l.writeBuffer)(this, c.getBuffer.call(t), c.seekNext.call(t, c.getLastValidPosition.call(t))), !0 !== n.positionCaretOnTab || !1 !== t.mouseEnter || u.isComplete.call(t, c.getBuffer.call(t)) && -1 !== c.getLastValidPosition.call(t) || y.clickEvent.apply(this, [e, !0]), t.undoValue = t && t._valueGet(!0);
              },
              invalidEvent: function (e) {
                this.inputmask.validationEvent = !0;
              },
              mouseleaveEvent: function () {
                var e = this.inputmask,
                  t = e.opts,
                  n = this;
                e.mouseEnter = !1, t.clearMaskOnLostFocus && (n.inputmask.shadowRoot || n.ownerDocument).activeElement !== n && (0, l.HandleNativePlaceholder)(n, e.originalPlaceholder);
              },
              clickEvent: function (e, t) {
                var n = this.inputmask;
                n.clicked++;
                var i = this;
                if ((i.inputmask.shadowRoot || i.ownerDocument).activeElement === i) {
                  var a = c.determineNewCaretPosition.call(n, c.caret.call(n, i), t);
                  void 0 !== a && c.caret.call(n, i, a);
                }
              },
              cutEvent: function (e) {
                var t = this.inputmask,
                  n = t.maskset,
                  i = this,
                  a = c.caret.call(t, i),
                  r = t.isRTL ? c.getBuffer.call(t).slice(a.end, a.begin) : c.getBuffer.call(t).slice(a.begin, a.end),
                  f = t.isRTL ? r.reverse().join("") : r.join("");
                o.default.navigator && o.default.navigator.clipboard ? o.default.navigator.clipboard.writeText(f) : o.default.clipboardData && o.default.clipboardData.getData && o.default.clipboardData.setData("Text", f), u.handleRemove.call(t, i, s.keys.Delete, a), (0, l.writeBuffer)(i, c.getBuffer.call(t), n.p, e, t.undoValue !== t._valueGet(!0));
              },
              blurEvent: function (e) {
                var t = this.inputmask,
                  n = t.opts,
                  i = t.dependencyLib;
                t.clicked = 0;
                var a = i(this),
                  r = this;
                if (r.inputmask) {
                  (0, l.HandleNativePlaceholder)(r, t.originalPlaceholder);
                  var o = r.inputmask._valueGet(),
                    s = c.getBuffer.call(t).slice();
                  "" !== o && (n.clearMaskOnLostFocus && (-1 === c.getLastValidPosition.call(t) && o === c.getBufferTemplate.call(t).join("") ? s = [] : l.clearOptionalTail.call(t, s)), !1 === u.isComplete.call(t, s) && (setTimeout(function () {
                    a.trigger("incomplete");
                  }, 0), n.clearIncomplete && (c.resetMaskSet.call(t, !1), s = n.clearMaskOnLostFocus ? [] : c.getBufferTemplate.call(t).slice())), (0, l.writeBuffer)(r, s, void 0, e)), o = t._valueGet(!0), t.undoValue !== o && ("" != o || t.undoValue != c.getBufferTemplate.call(t).join("") || t.undoValue == c.getBufferTemplate.call(t).join("") && t.maskset.validPositions.length > 0) && (t.undoValue = o, a.trigger("change"));
                }
              },
              mouseenterEvent: function () {
                var e = this.inputmask,
                  t = e.opts.showMaskOnHover,
                  n = this;
                if (e.mouseEnter = !0, (n.inputmask.shadowRoot || n.ownerDocument).activeElement !== n) {
                  var i = (e.isRTL ? c.getBufferTemplate.call(e).slice().reverse() : c.getBufferTemplate.call(e)).join("");
                  t && (0, l.HandleNativePlaceholder)(n, i);
                }
              },
              submitEvent: function () {
                var e = this.inputmask,
                  t = e.opts;
                e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === c.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === c.getBufferTemplate.call(e).join("") && e._valueSet(""), t.clearIncomplete && !1 === u.isComplete.call(e, c.getBuffer.call(e)) && e._valueSet(""), t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout(function () {
                  (0, l.writeBuffer)(e.el, c.getBuffer.call(e));
                }, 0));
              },
              resetEvent: function () {
                var e = this.inputmask;
                e.refreshValue = !0, setTimeout(function () {
                  (0, l.applyInputValue)(e.el, e._valueGet(!0));
                }, 0);
              }
            };
        },
        9716: function (e, t, n) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.EventRuler = void 0;
          var i,
            a = n(7760),
            r = (i = n(2394)) && i.__esModule ? i : {
              default: i
            },
            o = n(2839),
            l = n(8711);
          t.EventRuler = {
            on: function (e, t, n) {
              var i = e.inputmask.dependencyLib,
                s = function (t) {
                  t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                  var s,
                    c = this,
                    u = c.inputmask,
                    f = u ? u.opts : void 0;
                  if (void 0 === u && "FORM" !== this.nodeName) {
                    var p = i.data(c, "_inputmask_opts");
                    i(c).off(), p && new r.default(p).mask(c);
                  } else {
                    if (["submit", "reset", "setvalue"].includes(t.type) || "FORM" === this.nodeName || !(c.disabled || c.readOnly && !("keydown" === t.type && t.ctrlKey && t.key === o.keys.c || !1 === f.tabThrough && t.key === o.keys.Tab))) {
                      switch (t.type) {
                        case "input":
                          if (!0 === u.skipInputEvent) return u.skipInputEvent = !1, t.preventDefault();
                          break;
                        case "click":
                        case "focus":
                          return u.validationEvent ? (u.validationEvent = !1, e.blur(), (0, a.HandleNativePlaceholder)(e, (u.isRTL ? l.getBufferTemplate.call(u).slice().reverse() : l.getBufferTemplate.call(u)).join("")), setTimeout(function () {
                            e.focus();
                          }, f.validationEventTimeOut), !1) : (s = arguments, void setTimeout(function () {
                            e.inputmask && n.apply(c, s);
                          }, 0));
                      }
                      var d = n.apply(c, arguments);
                      return !1 === d && (t.preventDefault(), t.stopPropagation()), d;
                    }
                    t.preventDefault();
                  }
                };
              ["submit", "reset"].includes(t) ? (s = s.bind(e), null !== e.form && i(e.form).on(t, s)) : i(e).on(t, s), e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(s);
            },
            off: function (e, t) {
              if (e.inputmask && e.inputmask.events) {
                var n = e.inputmask.dependencyLib,
                  i = e.inputmask.events;
                for (var a in t && ((i = [])[t] = e.inputmask.events[t]), i) {
                  for (var r = i[a]; r.length > 0;) {
                    var o = r.pop();
                    ["submit", "reset"].includes(a) ? null !== e.form && n(e.form).off(a, o) : n(e).off(a, o);
                  }
                  delete e.inputmask.events[a];
                }
              }
            }
          };
        },
        219: function (e, t, n) {
          var i = p(n(7184)),
            a = p(n(2394)),
            r = n(2839),
            o = n(8711),
            l = n(4713);
          function s(e, t) {
            return function (e) {
              if (Array.isArray(e)) return e;
            }(e) || function (e, t) {
              var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (null != n) {
                var i,
                  a,
                  r,
                  o,
                  l = [],
                  s = !0,
                  c = !1;
                try {
                  if (r = (n = n.call(e)).next, 0 === t) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else for (; !(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0);
                } catch (e) {
                  c = !0, a = e;
                } finally {
                  try {
                    if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                  } finally {
                    if (c) throw a;
                  }
                }
                return l;
              }
            }(e, t) || function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return c(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t);
            }(e, t) || function () {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i;
          }
          function u(e) {
            return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e;
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, u(e);
          }
          function f(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, (a = i.key, r = void 0, r = function (e, t) {
                if ("object" !== u(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var i = n.call(e, t || "default");
                  if ("object" !== u(i)) return i;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
              }(a, "string"), "symbol" === u(r) ? r : String(r)), i);
            }
            var a, r;
          }
          function p(e) {
            return e && e.__esModule ? e : {
              default: e
            };
          }
          n(1313);
          var d = a.default.dependencyLib,
            h = function () {
              function e(t, n, i, a) {
                !function (e, t) {
                  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), this.mask = t, this.format = n, this.opts = i, this.inputmask = a, this._date = new Date(1, 0, 1), this.initDateObject(t, this.opts, this.inputmask);
              }
              var t, n, i;
              return t = e, (n = [{
                key: "date",
                get: function () {
                  return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts, this.inputmask)), this._date;
                }
              }, {
                key: "initDateObject",
                value: function (e, t, n) {
                  var i;
                  for (P(t).lastIndex = 0; i = P(t).exec(this.format);) {
                    var a = /\d+$/.exec(i[0]),
                      r = a ? i[0][0] + "x" : i[0],
                      o = void 0;
                    if (void 0 !== e) {
                      if (a) {
                        var s = P(t).lastIndex,
                          c = j.call(n, i.index, t, n && n.maskset);
                        P(t).lastIndex = s, o = e.slice(0, e.indexOf(c.nextMatch[0]));
                      } else {
                        for (var u = i[0][0], f = i.index; n && (t.placeholder[l.getTest.call(n, f).match.placeholder] || l.getTest.call(n, f).match.placeholder) === u;) f++;
                        var p = f - i.index;
                        o = e.slice(0, p || y[r] && y[r][4] || r.length);
                      }
                      e = e.slice(o.length);
                    }
                    Object.prototype.hasOwnProperty.call(y, r) && this.setValue(this, o, r, y[r][2], y[r][1]);
                  }
                }
              }, {
                key: "setValue",
                value: function (e, t, n, i, a) {
                  if (void 0 !== t) switch (i) {
                    case "ampm":
                      e[i] = t, e["raw" + i] = t.replace(/\s/g, "_");
                      break;
                    case "month":
                      if ("mmm" === n || "mmmm" === n) {
                        e[i] = _("mmm" === n ? m.monthNames.slice(0, 12).findIndex(function (e) {
                          return t.toLowerCase() === e.toLowerCase();
                        }) + 1 : m.monthNames.slice(12, 24).findIndex(function (e) {
                          return t.toLowerCase() === e.toLowerCase();
                        }) + 1, 2), e[i] = "00" === e[i] ? "" : e[i].toString(), e["raw" + i] = e[i];
                        break;
                      }
                    default:
                      e[i] = t.replace(/[^0-9]/g, "0"), e["raw" + i] = t.replace(/\s/g, "_");
                  }
                  if (void 0 !== a) {
                    var r = e[i];
                    ("day" === i && 29 === parseInt(r) || "month" === i && 2 === parseInt(r)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)), "day" === i && (g = !0, 0 === parseInt(r) && (r = 1)), "month" === i && (g = !0), "year" === i && (g = !0, r.length < y[n][4] && (r = _(r, y[n][4], !0))), ("" !== r && !isNaN(r) || "ampm" === i) && a.call(e._date, r);
                  }
                }
              }, {
                key: "reset",
                value: function () {
                  this._date = new Date(1, 0, 1);
                }
              }, {
                key: "reInit",
                value: function () {
                  this._date = void 0, this.date;
                }
              }]) && f(t.prototype, n), i && f(t, i), Object.defineProperty(t, "prototype", {
                writable: !1
              }), e;
            }(),
            v = new Date().getFullYear(),
            m = a.default.prototype.i18n,
            g = !1,
            y = {
              d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
              dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function () {
                return _(Date.prototype.getDate.call(this), 2);
              }],
              ddd: [""],
              dddd: [""],
              m: ["[1-9]|1[012]", function (e) {
                var t = e ? parseInt(e) : 0;
                return t > 0 && t--, Date.prototype.setMonth.call(this, t);
              }, "month", function () {
                return Date.prototype.getMonth.call(this) + 1;
              }],
              mm: ["0[1-9]|1[012]", function (e) {
                var t = e ? parseInt(e) : 0;
                return t > 0 && t--, Date.prototype.setMonth.call(this, t);
              }, "month", function () {
                return _(Date.prototype.getMonth.call(this) + 1, 2);
              }],
              mmm: [m.monthNames.slice(0, 12).join("|"), function (e) {
                var t = m.monthNames.slice(0, 12).findIndex(function (t) {
                  return e.toLowerCase() === t.toLowerCase();
                });
                return -1 !== t && Date.prototype.setMonth.call(this, t);
              }, "month", function () {
                return m.monthNames.slice(0, 12)[Date.prototype.getMonth.call(this)];
              }],
              mmmm: [m.monthNames.slice(12, 24).join("|"), function (e) {
                var t = m.monthNames.slice(12, 24).findIndex(function (t) {
                  return e.toLowerCase() === t.toLowerCase();
                });
                return -1 !== t && Date.prototype.setMonth.call(this, t);
              }, "month", function () {
                return m.monthNames.slice(12, 24)[Date.prototype.getMonth.call(this)];
              }],
              yy: ["[0-9]{2}", function (e) {
                var t = new Date().getFullYear().toString().slice(0, 2);
                Date.prototype.setFullYear.call(this, "".concat(t).concat(e));
              }, "year", function () {
                return _(Date.prototype.getFullYear.call(this), 2);
              }, 2],
              yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function () {
                return _(Date.prototype.getFullYear.call(this), 4);
              }, 4],
              h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
              hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function () {
                return _(Date.prototype.getHours.call(this), 2);
              }],
              hx: [function (e) {
                return "[0-9]{".concat(e, "}");
              }, Date.prototype.setHours, "hours", function (e) {
                return Date.prototype.getHours;
              }],
              H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
              HH: ["0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function () {
                return _(Date.prototype.getHours.call(this), 2);
              }],
              Hx: [function (e) {
                return "[0-9]{".concat(e, "}");
              }, Date.prototype.setHours, "hours", function (e) {
                return function () {
                  return _(Date.prototype.getHours.call(this), e);
                };
              }],
              M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
              MM: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function () {
                return _(Date.prototype.getMinutes.call(this), 2);
              }],
              s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
              ss: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function () {
                return _(Date.prototype.getSeconds.call(this), 2);
              }],
              l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function () {
                return _(Date.prototype.getMilliseconds.call(this), 3);
              }, 3],
              L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function () {
                return _(Date.prototype.getMilliseconds.call(this), 2);
              }, 2],
              t: ["[ap]", b, "ampm", x, 1],
              tt: ["[ap]m", b, "ampm", x, 2],
              T: ["[AP]", b, "ampm", x, 1],
              TT: ["[AP]M", b, "ampm", x, 2],
              Z: [".*", void 0, "Z", function () {
                var e = this.toString().match(/\((.+)\)/)[1];
                e.includes(" ") && (e = (e = e.replace("-", " ").toUpperCase()).split(" ").map(function (e) {
                  return s(e, 1)[0];
                }).join(""));
                return e;
              }],
              o: [""],
              S: [""]
            },
            k = {
              isoDate: "yyyy-mm-dd",
              isoTime: "HH:MM:ss",
              isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
              isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
            };
          function b(e) {
            var t = this.getHours();
            e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && t >= 12 && this.setHours(t - 12);
          }
          function x() {
            var e = this.getHours();
            return (e = e || 12) >= 12 ? "PM" : "AM";
          }
          function w(e) {
            var t = /\d+$/.exec(e[0]);
            if (t && void 0 !== t[0]) {
              var n = y[e[0][0] + "x"].slice("");
              return n[0] = n[0](t[0]), n[3] = n[3](t[0]), n;
            }
            if (y[e[0]]) return y[e[0]];
          }
          function P(e) {
            if (!e.tokenizer) {
              var t = [],
                n = [];
              for (var i in y) if (/\.*x$/.test(i)) {
                var a = i[0] + "\\d+";
                -1 === n.indexOf(a) && n.push(a);
              } else -1 === t.indexOf(i[0]) && t.push(i[0]);
              e.tokenizer = "(" + (n.length > 0 ? n.join("|") + "|" : "") + t.join("+|") + ")+?|.", e.tokenizer = new RegExp(e.tokenizer, "g");
            }
            return e.tokenizer;
          }
          function S(e, t, n) {
            if (!g) return !0;
            if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;
            if ("29" == e.day) {
              var i = j.call(this, t.pos, n, this.maskset);
              if (i.targetMatch && "yyyy" === i.targetMatch[0] && t.pos - i.targetMatchIndex == 2) return t.remove = t.pos + 1, t;
            } else if (2 == e.date.getMonth() && "30" == e.day && void 0 !== t.c) return e.day = "03", e.date.setDate(3), e.date.setMonth(1), t.insert = [{
              pos: t.pos,
              c: "0"
            }, {
              pos: t.pos + 1,
              c: t.c
            }], t.caret = o.seekNext.call(this, t.pos + 1), t;
            return !1;
          }
          function O(e, t, n, a) {
            var r,
              o,
              l = "",
              s = 0,
              c = {};
            for (P(n).lastIndex = 0; r = P(n).exec(e);) {
              if (void 0 === t) {
                if (o = w(r)) l += "(" + o[0] + ")", n.placeholder && "" !== n.placeholder ? (c[s] = n.placeholder[r.index % n.placeholder.length], c[n.placeholder[r.index % n.placeholder.length]] = r[0].charAt(0)) : c[s] = r[0].charAt(0);else switch (r[0]) {
                  case "[":
                    l += "(";
                    break;
                  case "]":
                    l += ")?";
                    break;
                  default:
                    l += (0, i.default)(r[0]), c[s] = r[0].charAt(0);
                }
              } else if (o = w(r)) {
                if (!0 !== a && o[3]) l += o[3].call(t.date);else o[2] ? l += t["raw" + o[2]] : l += r[0];
              } else l += r[0];
              s++;
            }
            return void 0 === t && (n.placeholder = c), l;
          }
          function _(e, t, n) {
            for (e = String(e), t = t || 2; e.length < t;) e = n ? e + "0" : "0" + e;
            return e;
          }
          function M(e, t, n) {
            return "string" == typeof e ? new h(e, t, n, this) : e && "object" === u(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0;
          }
          function E(e, t) {
            return O(t.inputFormat, {
              date: e
            }, t);
          }
          function j(e, t, n) {
            var i,
              a,
              r = this,
              o = n && n.tests[e] ? t.placeholder[n.tests[e][0].match.placeholder] || n.tests[e][0].match.placeholder : "",
              s = 0,
              c = 0;
            for (P(t).lastIndex = 0; a = P(t).exec(t.inputFormat);) {
              var u = /\d+$/.exec(a[0]);
              if (u) c = parseInt(u[0]);else {
                for (var f = a[0][0], p = s; r && (t.placeholder[l.getTest.call(r, p).match.placeholder] || l.getTest.call(r, p).match.placeholder) === f;) p++;
                0 === (c = p - s) && (c = a[0].length);
              }
              if (s += c, -1 != a[0].indexOf(o) || s >= e + 1) {
                i = a, a = P(t).exec(t.inputFormat);
                break;
              }
            }
            return {
              targetMatchIndex: s - c,
              nextMatch: a,
              targetMatch: i
            };
          }
          a.default.extendAliases({
            datetime: {
              mask: function (e) {
                return e.numericInput = !1, y.S = m.ordinalSuffix.join("|"), e.inputFormat = k[e.inputFormat] || e.inputFormat, e.displayFormat = k[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = k[e.outputFormat] || e.outputFormat || e.inputFormat, e.regex = O(e.inputFormat, void 0, e), e.min = M(e.min, e.inputFormat, e), e.max = M(e.max, e.inputFormat, e), null;
              },
              placeholder: "",
              inputFormat: "isoDateTime",
              displayFormat: null,
              outputFormat: null,
              min: null,
              max: null,
              skipOptionalPartCharacter: "",
              preValidation: function (e, t, n, i, a, r, o, l) {
                if (l) return !0;
                if (isNaN(n) && e[t] !== n) {
                  var s = j.call(this, t, a, r);
                  if (s.nextMatch && s.nextMatch[0] === n && s.targetMatch[0].length > 1) {
                    var c = w(s.targetMatch)[0];
                    if (new RegExp(c).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", {
                      fuzzy: !0,
                      buffer: e,
                      refreshFromBuffer: {
                        start: t - 1,
                        end: t + 1
                      },
                      pos: t + 1
                    };
                  }
                }
                return !0;
              },
              postValidation: function (e, t, n, i, a, r, o, s) {
                var c,
                  u,
                  f = this;
                if (o) return !0;
                if (!1 === i && (((c = j.call(f, t + 1, a, r)).targetMatch && c.targetMatchIndex === t && c.targetMatch[0].length > 1 && void 0 !== y[c.targetMatch[0]] || (c = j.call(f, t + 2, a, r)).targetMatch && c.targetMatchIndex === t + 1 && c.targetMatch[0].length > 1 && void 0 !== y[c.targetMatch[0]]) && (u = w(c.targetMatch)[0]), void 0 !== u && (void 0 !== r.validPositions[t + 1] && new RegExp(u).test(n + "0") ? (e[t] = n, e[t + 1] = "0", i = {
                  pos: t + 2,
                  caret: t
                }) : new RegExp(u).test("0" + n) && (e[t] = "0", e[t + 1] = n, i = {
                  pos: t + 2
                })), !1 === i)) return i;
                if (i.fuzzy && (e = i.buffer, t = i.pos), (c = j.call(f, t, a, r)).targetMatch && c.targetMatch[0] && void 0 !== y[c.targetMatch[0]]) {
                  var p = w(c.targetMatch);
                  u = p[0];
                  var d = e.slice(c.targetMatchIndex, c.targetMatchIndex + c.targetMatch[0].length);
                  if (!1 === new RegExp(u).test(d.join("")) && 2 === c.targetMatch[0].length && r.validPositions[c.targetMatchIndex] && r.validPositions[c.targetMatchIndex + 1] && (r.validPositions[c.targetMatchIndex + 1].input = "0"), "year" == p[2]) for (var h = l.getMaskTemplate.call(f, !1, 1, void 0, !0), m = t + 1; m < e.length; m++) e[m] = h[m], r.validPositions.splice(t + 1, 1);
                }
                var g = i,
                  k = M.call(f, e.join(""), a.inputFormat, a);
                return g && !isNaN(k.date.getTime()) && (a.prefillYear && (g = function (e, t, n) {
                  if (e.year !== e.rawyear) {
                    var i = v.toString(),
                      a = e.rawyear.replace(/[^0-9]/g, ""),
                      r = i.slice(0, a.length),
                      o = i.slice(a.length);
                    if (2 === a.length && a === r) {
                      var l = new Date(v, e.month - 1, e.day);
                      e.day == l.getDate() && (!n.max || n.max.date.getTime() >= l.getTime()) && (e.date.setFullYear(v), e.year = i, t.insert = [{
                        pos: t.pos + 1,
                        c: o[0]
                      }, {
                        pos: t.pos + 2,
                        c: o[1]
                      }]);
                    }
                  }
                  return t;
                }(k, g, a)), g = function (e, t, n, i, a) {
                  if (!t) return t;
                  if (t && n.min && !isNaN(n.min.date.getTime())) {
                    var r;
                    for (e.reset(), P(n).lastIndex = 0; r = P(n).exec(n.inputFormat);) {
                      var o;
                      if ((o = w(r)) && o[3]) {
                        for (var l = o[1], s = e[o[2]], c = n.min[o[2]], u = n.max ? n.max[o[2]] : c + 1, f = [], p = !1, d = 0; d < c.length; d++) void 0 !== i.validPositions[d + r.index] || p ? (f[d] = s[d], p = p || s[d] > c[d]) : (d + r.index == 0 && s[d] < c[d] ? (f[d] = s[d], p = !0) : f[d] = c[d], "year" === o[2] && s.length - 1 == d && c != u && (f = (parseInt(f.join("")) + 1).toString().split("")), "ampm" === o[2] && c != u && n.min.date.getTime() > e.date.getTime() && (f[d] = u[d]));
                        l.call(e._date, f.join(""));
                      }
                    }
                    t = n.min.date.getTime() <= e.date.getTime(), e.reInit();
                  }
                  return t && n.max && (isNaN(n.max.date.getTime()) || (t = n.max.date.getTime() >= e.date.getTime())), t;
                }(k, g = S.call(f, k, g, a), a, r)), void 0 !== t && g && i.pos !== t ? {
                  buffer: O(a.inputFormat, k, a).split(""),
                  refreshFromBuffer: {
                    start: t,
                    end: i.pos
                  },
                  pos: i.caret || i.pos
                } : g;
              },
              onKeyDown: function (e, t, n, i) {
                e.ctrlKey && e.key === r.keys.ArrowRight && (this.inputmask._valueSet(E(new Date(), i)), d(this).trigger("setvalue"));
              },
              onUnMask: function (e, t, n) {
                return t ? O(n.outputFormat, M.call(this, e, n.inputFormat, n), n, !0) : t;
              },
              casing: function (e, t, n, i) {
                if (0 == t.nativeDef.indexOf("[ap]")) return e.toLowerCase();
                if (0 == t.nativeDef.indexOf("[AP]")) return e.toUpperCase();
                var a = l.getTest.call(this, [n - 1]);
                return 0 == a.match.def.indexOf("[AP]") || 0 === n || a && a.input === String.fromCharCode(r.keyCode.Space) || a && a.match.def === String.fromCharCode(r.keyCode.Space) ? e.toUpperCase() : e.toLowerCase();
              },
              onBeforeMask: function (e, t) {
                return "[object Date]" === Object.prototype.toString.call(e) && (e = E(e, t)), e;
              },
              insertMode: !1,
              insertModeVisual: !1,
              shiftPositions: !1,
              keepStatic: !1,
              inputmode: "numeric",
              prefillYear: !0
            }
          });
        },
        1313: function (e, t, n) {
          var i,
            a = (i = n(2394)) && i.__esModule ? i : {
              default: i
            };
          a.default.dependencyLib.extend(!0, a.default.prototype.i18n, {
            dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            ordinalSuffix: ["st", "nd", "rd", "th"]
          });
        },
        3851: function (e, t, n) {
          var i,
            a = (i = n(2394)) && i.__esModule ? i : {
              default: i
            },
            r = n(8711),
            o = n(4713);
          function l(e) {
            return function (e) {
              if (Array.isArray(e)) return s(e);
            }(e) || function (e) {
              if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
            }(e) || function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return s(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
            }(e) || function () {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i;
          }
          a.default.extendDefinitions({
            A: {
              validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
              casing: "upper"
            },
            "&": {
              validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
              casing: "upper"
            },
            "#": {
              validator: "[0-9A-Fa-f]",
              casing: "upper"
            }
          });
          var c = /25[0-5]|2[0-4][0-9]|[01][0-9][0-9]/;
          function u(e, t, n, i, a) {
            if (n - 1 > -1 && "." !== t.buffer[n - 1] ? (e = t.buffer[n - 1] + e, e = n - 2 > -1 && "." !== t.buffer[n - 2] ? t.buffer[n - 2] + e : "0" + e) : e = "00" + e, a.greedy && parseInt(e) > 255 && c.test("00" + e.charAt(2))) {
              var r = [].concat(l(t.buffer.slice(0, n)), [".", e.charAt(2)]);
              if (r.join("").match(/\./g).length < 4) return {
                refreshFromBuffer: !0,
                buffer: r,
                caret: n + 2
              };
            }
            return c.test(e);
          }
          a.default.extendAliases({
            cssunit: {
              regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
            },
            url: {
              regex: "(https?|ftp)://.*",
              autoUnmask: !1,
              keepStatic: !1,
              tabThrough: !0
            },
            ip: {
              mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
              definitions: {
                i: {
                  validator: u
                },
                j: {
                  validator: u
                },
                k: {
                  validator: u
                },
                l: {
                  validator: u
                }
              },
              onUnMask: function (e, t, n) {
                return e;
              },
              inputmode: "decimal",
              substitutes: {
                ",": "."
              }
            },
            email: {
              mask: function (e) {
                var t = e.separator,
                  n = e.quantifier,
                  i = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                  a = i;
                if (t) for (var r = 0; r < n; r++) a += "[".concat(t).concat(i, "]");
                return a;
              },
              greedy: !1,
              casing: "lower",
              separator: null,
              quantifier: 5,
              skipOptionalPartCharacter: "",
              onBeforePaste: function (e, t) {
                return (e = e.toLowerCase()).replace("mailto:", "");
              },
              definitions: {
                "*": {
                  validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"
                },
                "-": {
                  validator: "[0-9A-Za-z-]"
                }
              },
              onUnMask: function (e, t, n) {
                return e;
              },
              inputmode: "email"
            },
            mac: {
              mask: "##:##:##:##:##:##"
            },
            vin: {
              mask: "V{13}9{4}",
              definitions: {
                V: {
                  validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                  casing: "upper"
                }
              },
              clearIncomplete: !0,
              autoUnmask: !0
            },
            ssn: {
              mask: "999-99-9999",
              postValidation: function (e, t, n, i, a, l, s) {
                var c = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
                return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(c.join(""));
              }
            }
          });
        },
        207: function (e, t, n) {
          var i = l(n(7184)),
            a = l(n(2394)),
            r = n(2839),
            o = n(8711);
          function l(e) {
            return e && e.__esModule ? e : {
              default: e
            };
          }
          var s = a.default.dependencyLib;
          function c(e, t) {
            for (var n = "", i = 0; i < e.length; i++) a.default.prototype.definitions[e.charAt(i)] || t.definitions[e.charAt(i)] || t.optionalmarker[0] === e.charAt(i) || t.optionalmarker[1] === e.charAt(i) || t.quantifiermarker[0] === e.charAt(i) || t.quantifiermarker[1] === e.charAt(i) || t.groupmarker[0] === e.charAt(i) || t.groupmarker[1] === e.charAt(i) || t.alternatormarker === e.charAt(i) ? n += "\\" + e.charAt(i) : n += e.charAt(i);
            return n;
          }
          function u(e, t, n, i) {
            if (e.length > 0 && t > 0 && (!n.digitsOptional || i)) {
              var a = e.indexOf(n.radixPoint),
                r = !1;
              n.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === a && (e.push(n.radixPoint), a = e.length - 1);
              for (var o = 1; o <= t; o++) isFinite(e[a + o]) || (e[a + o] = "0");
            }
            return r && e.push(n.negationSymbol.back), e;
          }
          function f(e, t) {
            var n = 0;
            for (var i in "+" === e && (n = o.seekNext.call(this, t.validPositions.length - 1)), t.tests) if ((i = parseInt(i)) >= n) for (var a = 0, r = t.tests[i].length; a < r; a++) if ((void 0 === t.validPositions[i] || "-" === e) && t.tests[i][a].match.def === e) return i + (void 0 !== t.validPositions[i] && "-" !== e ? 1 : 0);
            return n;
          }
          function p(e, t) {
            for (var n = -1, i = 0, a = t.validPositions.length; i < a; i++) {
              var r = t.validPositions[i];
              if (r && r.match.def === e) {
                n = i;
                break;
              }
            }
            return n;
          }
          function d(e, t, n, i, a) {
            var r = t.buffer ? t.buffer.indexOf(a.radixPoint) : -1,
              o = (-1 !== r || i && a.jitMasking) && new RegExp(a.definitions[9].validator).test(e);
            return !i && a._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
              insert: {
                pos: r === n ? r + 1 : r,
                c: a.radixPoint
              },
              pos: n
            } : o;
          }
          a.default.extendAliases({
            numeric: {
              mask: function (e) {
                e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                var t = "0",
                  n = e.radixPoint;
                !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, n = "," === e.radixPoint ? "?" : "!", "" !== e.radixPoint && void 0 === e.definitions[n] && (e.definitions[n] = {}, e.definitions[n].validator = "[" + e.radixPoint + "]", e.definitions[n].placeholder = e.radixPoint, e.definitions[n].static = !0, e.definitions[n].generated = !0)) : (e.__financeInput = !1, e.numericInput = !0);
                var a,
                  r = "[+]";
                if (r += c(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), r += e._mask(e)) : r += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                  var o = e.digits.toString().split(",");
                  isFinite(o[0]) && o[1] && isFinite(o[1]) ? r += n + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (a = r + n + t + "{0," + e.digits + "}", e.keepStatic = !0) : r += n + t + "{" + e.digits + "}");
                } else e.inputmode = "numeric";
                return r += c(e.suffix, e), r += "[-]", a && (r = [a + c(e.suffix, e) + "[-]", r]), e.greedy = !1, function (e) {
                  void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, i.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, i.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                }(e), "" !== e.radixPoint && e.substituteRadixPoint && (e.substitutes["." == e.radixPoint ? "," : "."] = e.radixPoint), r;
              },
              _mask: function (e) {
                return "(" + e.groupSeparator + "999){+|1}";
              },
              digits: "*",
              digitsOptional: !0,
              enforceDigitsOnBlur: !1,
              radixPoint: ".",
              positionCaretOnClick: "radixFocus",
              _radixDance: !0,
              groupSeparator: "",
              allowMinus: !0,
              negationSymbol: {
                front: "-",
                back: ""
              },
              prefix: "",
              suffix: "",
              min: null,
              max: null,
              SetMaxOnOverflow: !1,
              step: 1,
              inputType: "text",
              unmaskAsNumber: !1,
              roundingFN: Math.round,
              inputmode: "decimal",
              shortcuts: {
                k: "1000",
                m: "1000000"
              },
              placeholder: "0",
              greedy: !1,
              rightAlign: !0,
              insertMode: !0,
              autoUnmask: !1,
              skipOptionalPartCharacter: "",
              usePrototypeDefinitions: !1,
              stripLeadingZeroes: !0,
              substituteRadixPoint: !0,
              definitions: {
                0: {
                  validator: d
                },
                1: {
                  validator: d,
                  definitionSymbol: "9"
                },
                9: {
                  validator: "[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]",
                  definitionSymbol: "*"
                },
                "+": {
                  validator: function (e, t, n, i, a) {
                    return a.allowMinus && ("-" === e || e === a.negationSymbol.front);
                  }
                },
                "-": {
                  validator: function (e, t, n, i, a) {
                    return a.allowMinus && e === a.negationSymbol.back;
                  }
                }
              },
              preValidation: function (e, t, n, i, a, r, o, l) {
                var s = this;
                if (!1 !== a.__financeInput && n === a.radixPoint) return !1;
                var c = e.indexOf(a.radixPoint),
                  u = t;
                if (t = function (e, t, n, i, a) {
                  return a._radixDance && a.numericInput && t !== a.negationSymbol.back && e <= n && (n > 0 || t == a.radixPoint) && (void 0 === i.validPositions[e - 1] || i.validPositions[e - 1].input !== a.negationSymbol.back) && (e -= 1), e;
                }(t, n, c, r, a), "-" === n || n === a.negationSymbol.front) {
                  if (!0 !== a.allowMinus) return !1;
                  var d = !1,
                    h = p("+", r),
                    v = p("-", r);
                  return -1 !== h && (d = [h], -1 !== v && d.push(v)), !1 !== d ? {
                    remove: d,
                    caret: u - a.negationSymbol.back.length
                  } : {
                    insert: [{
                      pos: f.call(s, "+", r),
                      c: a.negationSymbol.front,
                      fromIsValid: !0
                    }, {
                      pos: f.call(s, "-", r),
                      c: a.negationSymbol.back,
                      fromIsValid: void 0
                    }],
                    caret: u + a.negationSymbol.back.length
                  };
                }
                if (n === a.groupSeparator) return {
                  caret: u
                };
                if (l) return !0;
                if (-1 !== c && !0 === a._radixDance && !1 === i && n === a.radixPoint && void 0 !== a.digits && (isNaN(a.digits) || parseInt(a.digits) > 0) && c !== t) {
                  var m = f.call(s, a.radixPoint, r);
                  return r.validPositions[m] && (r.validPositions[m].generatedInput = r.validPositions[m].generated || !1), {
                    caret: a._radixDance && t === c - 1 ? c + 1 : c
                  };
                }
                if (!1 === a.__financeInput) if (i) {
                  if (a.digitsOptional) return {
                    rewritePosition: o.end
                  };
                  if (!a.digitsOptional) {
                    if (o.begin > c && o.end <= c) return n === a.radixPoint ? {
                      insert: {
                        pos: c + 1,
                        c: "0",
                        fromIsValid: !0
                      },
                      rewritePosition: c
                    } : {
                      rewritePosition: c + 1
                    };
                    if (o.begin < c) return {
                      rewritePosition: o.begin - 1
                    };
                  }
                } else if (!a.showMaskOnHover && !a.showMaskOnFocus && !a.digitsOptional && a.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                  rewritePosition: c
                };
                return {
                  rewritePosition: t
                };
              },
              postValidation: function (e, t, n, i, a, r, o, l, c) {
                if (!1 === i) return i;
                if (o) return !0;
                if (null !== a.min || null !== a.max) {
                  var f = a.onUnMask(e.slice().reverse().join(""), void 0, s.extend({}, a, {
                    unmaskAsNumber: !0
                  }));
                  if (null !== a.min && f < a.min && !0 !== c && (f.toString().length > a.min.toString().length || e[0] === a.radixPoint || f < 0)) return !1;
                  if (null !== a.max && f > a.max) return !!a.SetMaxOnOverflow && {
                    refreshFromBuffer: !0,
                    buffer: u(a.max.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                  };
                }
                return i;
              },
              onUnMask: function (e, t, n) {
                if ("" === t && !0 === n.nullable) return t;
                var a = e.replace(n.prefix, "");
                return a = (a = a.replace(n.suffix, "")).replace(new RegExp((0, i.default)(n.groupSeparator), "g"), ""), "" !== n.placeholder.charAt(0) && (a = a.replace(new RegExp(n.placeholder.charAt(0), "g"), "0")), n.unmaskAsNumber ? ("" !== n.radixPoint && -1 !== a.indexOf(n.radixPoint) && (a = a.replace(i.default.call(this, n.radixPoint), ".")), a = (a = a.replace(new RegExp("^" + (0, i.default)(n.negationSymbol.front)), "-")).replace(new RegExp((0, i.default)(n.negationSymbol.back) + "$"), ""), Number(a)) : a;
              },
              isComplete: function (e, t) {
                var n = (t.numericInput ? e.slice().reverse() : e).join("");
                return n = (n = (n = (n = (n = n.replace(new RegExp("^" + (0, i.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, i.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, i.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (n = n.replace((0, i.default)(t.radixPoint), ".")), isFinite(n);
              },
              onBeforeMask: function (e, t) {
                var n;
                e = null !== (n = e) && void 0 !== n ? n : "";
                var a = t.radixPoint || ",";
                isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === a || (e = e.toString().replace(".", a));
                var r = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front,
                  o = e.split(a),
                  l = o[0].replace(/[^\-0-9]/g, ""),
                  s = o.length > 1 ? o[1].replace(/[^0-9]/g, "") : "",
                  c = o.length > 1;
                e = l + ("" !== s ? a + s : s);
                var f = 0;
                if ("" !== a && (f = t.digitsOptional ? t.digits < s.length ? t.digits : s.length : t.digits, "" !== s || !t.digitsOptional)) {
                  var p = Math.pow(10, f || 1);
                  e = e.replace((0, i.default)(a), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * p) / p).toFixed(f)), e = e.toString().replace(".", a);
                }
                if (0 === t.digits && -1 !== e.indexOf(a) && (e = e.substring(0, e.indexOf(a))), null !== t.min || null !== t.max) {
                  var d = e.toString().replace(a, ".");
                  null !== t.min && d < t.min ? e = t.min.toString().replace(".", a) : null !== t.max && d > t.max && (e = t.max.toString().replace(".", a));
                }
                return r && "-" !== e.charAt(0) && (e = "-" + e), u(e.toString().split(""), f, t, c).join("");
              },
              onBeforeWrite: function (e, t, n, a) {
                function r(e, t) {
                  if (!1 !== a.__financeInput || t) {
                    var n = e.indexOf(a.radixPoint);
                    -1 !== n && e.splice(n, 1);
                  }
                  if ("" !== a.groupSeparator) for (; -1 !== (n = e.indexOf(a.groupSeparator));) e.splice(n, 1);
                  return e;
                }
                var o, l;
                if (a.stripLeadingZeroes && (l = function (e, t) {
                  var n = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, i.default)(t.negationSymbol.front) + "?" : "") + (0, i.default)(t.prefix) + ")(.*)(" + (0, i.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, i.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")),
                    a = n ? n[2] : "",
                    r = !1;
                  return a && (a = a.split(t.radixPoint.charAt(0))[0], r = new RegExp("^[0" + t.groupSeparator + "]*").exec(a)), !(!r || !(r[0].length > 1 || r[0].length > 0 && r[0].length < a.length)) && r;
                }(t, a))) for (var c = t.join("").lastIndexOf(l[0].split("").reverse().join("")) - (l[0] == l.input ? 0 : 1), f = l[0] == l.input ? 1 : 0, p = l[0].length - f; p > 0; p--) this.maskset.validPositions.splice(c + p, 1), delete t[c + p];
                if (e) switch (e.type) {
                  case "blur":
                  case "checkval":
                    if (null !== a.min) {
                      var d = a.onUnMask(t.slice().reverse().join(""), void 0, s.extend({}, a, {
                        unmaskAsNumber: !0
                      }));
                      if (null !== a.min && d < a.min) return {
                        refreshFromBuffer: !0,
                        buffer: u(a.min.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                      };
                    }
                    if (t[t.length - 1] === a.negationSymbol.front) {
                      var h = new RegExp("(^" + ("" != a.negationSymbol.front ? (0, i.default)(a.negationSymbol.front) + "?" : "") + (0, i.default)(a.prefix) + ")(.*)(" + (0, i.default)(a.suffix) + ("" != a.negationSymbol.back ? (0, i.default)(a.negationSymbol.back) + "?" : "") + "$)").exec(r(t.slice(), !0).reverse().join(""));
                      0 == (h ? h[2] : "") && (o = {
                        refreshFromBuffer: !0,
                        buffer: [0]
                      });
                    } else if ("" !== a.radixPoint) {
                      t.indexOf(a.radixPoint) === a.suffix.length && (o && o.buffer ? o.buffer.splice(0, 1 + a.suffix.length) : (t.splice(0, 1 + a.suffix.length), o = {
                        refreshFromBuffer: !0,
                        buffer: r(t)
                      }));
                    }
                    if (a.enforceDigitsOnBlur) {
                      var v = (o = o || {}) && o.buffer || t.slice().reverse();
                      o.refreshFromBuffer = !0, o.buffer = u(v, a.digits, a, !0).reverse();
                    }
                }
                return o;
              },
              onKeyDown: function (e, t, n, i) {
                var a,
                  o = s(this);
                if (3 != e.location) {
                  var l,
                    c = e.key;
                  if ((l = i.shortcuts && i.shortcuts[c]) && l.length > 1) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(l)), o.trigger("setvalue"), !1;
                }
                if (e.ctrlKey) switch (e.key) {
                  case r.keys.ArrowUp:
                    return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(i.step)), o.trigger("setvalue"), !1;
                  case r.keys.ArrowDown:
                    return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(i.step)), o.trigger("setvalue"), !1;
                }
                if (!e.shiftKey && (e.key === r.keys.Delete || e.key === r.keys.Backspace || e.key === r.keys.BACKSPACE_SAFARI) && n.begin !== t.length) {
                  if (t[e.key === r.keys.Delete ? n.begin - 1 : n.end] === i.negationSymbol.front) return a = t.slice().reverse(), "" !== i.negationSymbol.front && a.shift(), "" !== i.negationSymbol.back && a.pop(), o.trigger("setvalue", [a.join(""), n.begin]), !1;
                  if (!0 === i._radixDance) {
                    var f,
                      p = t.indexOf(i.radixPoint);
                    if (i.digitsOptional) {
                      if (0 === p) return (a = t.slice().reverse()).pop(), o.trigger("setvalue", [a.join(""), n.begin >= a.length ? a.length : n.begin]), !1;
                    } else if (-1 !== p && (n.begin < p || n.end < p || e.key === r.keys.Delete && (n.begin === p || n.begin - 1 === p))) return n.begin === n.end && (e.key === r.keys.Backspace || e.key === r.keys.BACKSPACE_SAFARI ? n.begin++ : e.key === r.keys.Delete && n.begin - 1 === p && (f = s.extend({}, n), n.begin--, n.end--)), (a = t.slice().reverse()).splice(a.length - n.begin, n.begin - n.end + 1), a = u(a, i.digits, i).join(""), f && (n = f), o.trigger("setvalue", [a, n.begin >= a.length ? p + 1 : n.begin]), !1;
                  }
                }
              }
            },
            currency: {
              prefix: "",
              groupSeparator: ",",
              alias: "numeric",
              digits: 2,
              digitsOptional: !1
            },
            decimal: {
              alias: "numeric"
            },
            integer: {
              alias: "numeric",
              inputmode: "numeric",
              digits: 0
            },
            percentage: {
              alias: "numeric",
              min: 0,
              max: 100,
              suffix: " %",
              digits: 0,
              allowMinus: !1
            },
            indianns: {
              alias: "numeric",
              _mask: function (e) {
                return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
              },
              groupSeparator: ",",
              radixPoint: ".",
              placeholder: "0",
              digits: 2,
              digitsOptional: !1
            }
          });
        },
        9380: function (e, t) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = void 0;
          var n = !("undefined" == typeof window || !window.document || !window.document.createElement);
          t.default = n ? window : {};
        },
        7760: function (e, t, n) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.HandleNativePlaceholder = function (e, t) {
            var n = e ? e.inputmask : this;
            if (i.ie) {
              if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                var a = o.getBuffer.call(n).slice(),
                  r = e.inputmask._valueGet();
                if (r !== t) {
                  var l = o.getLastValidPosition.call(n);
                  -1 === l && r === o.getBufferTemplate.call(n).join("") ? a = [] : -1 !== l && u.call(n, a), p(e, a);
                }
              }
            } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
          }, t.applyInputValue = c, t.checkVal = f, t.clearOptionalTail = u, t.unmaskedvalue = function (e) {
            var t = e ? e.inputmask : this,
              n = t.opts,
              i = t.maskset;
            if (e) {
              if (void 0 === e.inputmask) return e.value;
              e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
            }
            for (var a = [], r = i.validPositions, l = 0, s = r.length; l < s; l++) r[l] && r[l].match && (1 != r[l].match.static || Array.isArray(i.metadata) && !0 !== r[l].generatedInput) && a.push(r[l].input);
            var u = 0 === a.length ? "" : (t.isRTL ? a.reverse() : a).join("");
            if ("function" == typeof n.onUnMask) {
              var f = (t.isRTL ? o.getBuffer.call(t).slice().reverse() : o.getBuffer.call(t)).join("");
              u = n.onUnMask.call(t, f, u, n);
            }
            return u;
          }, t.writeBuffer = p;
          var i = n(9845),
            a = n(6030),
            r = n(2839),
            o = n(8711),
            l = n(7215),
            s = n(4713);
          function c(e, t, n) {
            var i = e ? e.inputmask : this,
              a = i.opts;
            e.inputmask.refreshValue = !1, "function" == typeof a.onBeforeMask && (t = a.onBeforeMask.call(i, t, a) || t), f(e, !0, !1, t = (t || "").toString().split(""), n), i.undoValue = i._valueGet(!0), (a.clearMaskOnLostFocus || a.clearIncomplete) && e.inputmask._valueGet() === o.getBufferTemplate.call(i).join("") && -1 === o.getLastValidPosition.call(i) && e.inputmask._valueSet("");
          }
          function u(e) {
            e.length = 0;
            for (var t, n = s.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = n.shift());) e.push(t);
            return e;
          }
          function f(e, t, n, i, r) {
            var c,
              u = e ? e.inputmask : this,
              f = u.maskset,
              d = u.opts,
              h = u.dependencyLib,
              v = i.slice(),
              m = "",
              g = -1,
              y = d.skipOptionalPartCharacter;
            d.skipOptionalPartCharacter = "", o.resetMaskSet.call(u, !1), u.clicked = 0, g = d.radixPoint ? o.determineNewCaretPosition.call(u, {
              begin: 0,
              end: 0
            }, !1, !1 === d.__financeInput ? "radixFocus" : void 0).begin : 0, f.p = g, u.caretPos = {
              begin: g
            };
            var k = [],
              b = u.caretPos;
            if (v.forEach(function (e, t) {
              if (void 0 !== e) {
                var i = new h.Event("_checkval");
                i.key = e, m += e;
                var r = o.getLastValidPosition.call(u, void 0, !0);
                !function (e, t) {
                  for (var n = s.getMaskTemplate.call(u, !0, 0).slice(e, o.seekNext.call(u, e, !1, !1)).join("").replace(/'/g, ""), i = n.indexOf(t); i > 0 && " " === n[i - 1];) i--;
                  var a = 0 === i && !o.isMask.call(u, e) && (s.getTest.call(u, e).match.nativeDef === t.charAt(0) || !0 === s.getTest.call(u, e).match.static && s.getTest.call(u, e).match.nativeDef === "'" + t.charAt(0) || " " === s.getTest.call(u, e).match.nativeDef && (s.getTest.call(u, e + 1).match.nativeDef === t.charAt(0) || !0 === s.getTest.call(u, e + 1).match.static && s.getTest.call(u, e + 1).match.nativeDef === "'" + t.charAt(0)));
                  if (!a && i > 0 && !o.isMask.call(u, e, !1, !0)) {
                    var r = o.seekNext.call(u, e);
                    u.caretPos.begin < r && (u.caretPos = {
                      begin: r
                    });
                  }
                  return a;
                }(g, m) ? (c = a.EventHandlers.keypressEvent.call(u, i, !0, !1, n, u.caretPos.begin)) && (g = u.caretPos.begin + 1, m = "") : c = a.EventHandlers.keypressEvent.call(u, i, !0, !1, n, r + 1), c ? (void 0 !== c.pos && f.validPositions[c.pos] && !0 === f.validPositions[c.pos].match.static && void 0 === f.validPositions[c.pos].alternation && (k.push(c.pos), u.isRTL || (c.forwardPosition = c.pos + 1)), p.call(u, void 0, o.getBuffer.call(u), c.forwardPosition, i, !1), u.caretPos = {
                  begin: c.forwardPosition,
                  end: c.forwardPosition
                }, b = u.caretPos) : void 0 === f.validPositions[t] && v[t] === s.getPlaceholder.call(u, t) && o.isMask.call(u, t, !0) ? u.caretPos.begin++ : u.caretPos = b;
              }
            }), k.length > 0) {
              var x,
                w,
                P = o.seekNext.call(u, -1, void 0, !1);
              if (!l.isComplete.call(u, o.getBuffer.call(u)) && k.length <= P || l.isComplete.call(u, o.getBuffer.call(u)) && k.length > 0 && k.length !== P && 0 === k[0]) for (var S = P; void 0 !== (x = k.shift());) if (x < S) {
                var O = new h.Event("_checkval");
                if ((w = f.validPositions[x]).generatedInput = !0, O.key = w.input, (c = a.EventHandlers.keypressEvent.call(u, O, !0, !1, n, S)) && void 0 !== c.pos && c.pos !== x && f.validPositions[c.pos] && !0 === f.validPositions[c.pos].match.static) k.push(c.pos);else if (!c) break;
                S++;
              }
            }
            t && p.call(u, e, o.getBuffer.call(u), c ? c.forwardPosition : u.caretPos.begin, r || new h.Event("checkval"), r && ("input" === r.type && u.undoValue !== o.getBuffer.call(u).join("") || "paste" === r.type)), d.skipOptionalPartCharacter = y;
          }
          function p(e, t, n, i, a) {
            var s = e ? e.inputmask : this,
              c = s.opts,
              u = s.dependencyLib;
            if (i && "function" == typeof c.onBeforeWrite) {
              var f = c.onBeforeWrite.call(s, i, t, n, c);
              if (f) {
                if (f.refreshFromBuffer) {
                  var p = f.refreshFromBuffer;
                  l.refreshFromBuffer.call(s, !0 === p ? p : p.start, p.end, f.buffer || t), t = o.getBuffer.call(s, !0);
                }
                void 0 !== n && (n = void 0 !== f.caret ? f.caret : n);
              }
            }
            if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === n || void 0 !== i && "blur" === i.type || o.caret.call(s, e, n, void 0, void 0, void 0 !== i && "keydown" === i.type && (i.key === r.keys.Delete || i.key === r.keys.Backspace)), void 0 === e.inputmask.writeBufferHook || e.inputmask.writeBufferHook(n), !0 === a)) {
              var d = u(e),
                h = e.inputmask._valueGet();
              e.inputmask.skipInputEvent = !0, d.trigger("input"), setTimeout(function () {
                h === o.getBufferTemplate.call(s).join("") ? d.trigger("cleared") : !0 === l.isComplete.call(s, t) && d.trigger("complete");
              }, 0);
            }
          }
        },
        2394: function (e, t, n) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = void 0;
          var i = v(n(3976)),
            a = v(n(7392)),
            r = v(n(4963)),
            o = n(9716),
            l = v(n(9380)),
            s = n(7760),
            c = n(157),
            u = n(2391),
            f = n(8711),
            p = n(7215),
            d = n(4713);
          function h(e) {
            return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e;
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, h(e);
          }
          function v(e) {
            return e && e.__esModule ? e : {
              default: e
            };
          }
          var m = l.default.document,
            g = "_inputmask_opts";
          function y(e, t, n) {
            if (!(this instanceof y)) return new y(e, t, n);
            this.dependencyLib = r.default, this.el = void 0, this.events = {}, this.maskset = void 0, !0 !== n && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, e && (t.alias = e)), this.opts = r.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, this.userOptions = t || {}, k(this.opts.alias, t, this.opts)), this.refreshValue = !1, this.undoValue = void 0, this.$el = void 0, this.skipInputEvent = !1, this.validationEvent = !1, this.ignorable = !1, this.maxLength, this.mouseEnter = !1, this.clicked = 0, this.originalPlaceholder = void 0, this.isComposing = !1, this.hasAlternator = !1;
          }
          function k(e, t, n) {
            var i = y.prototype.aliases[e];
            return i ? (i.alias && k(i.alias, void 0, n), r.default.extend(!0, n, i), r.default.extend(!0, n, t), !0) : (null === n.mask && (n.mask = e), !1);
          }
          y.prototype = {
            dataAttribute: "data-inputmask",
            defaults: i.default,
            definitions: a.default,
            aliases: {},
            masksCache: {},
            i18n: {},
            get isRTL() {
              return this.opts.isRTL || this.opts.numericInput;
            },
            mask: function (e) {
              var t = this;
              return "string" == typeof e && (e = m.getElementById(e) || m.querySelectorAll(e)), (e = e.nodeName ? [e] : Array.isArray(e) ? e : [].slice.call(e)).forEach(function (e, n) {
                var i = r.default.extend(!0, {}, t.opts);
                if (function (e, t, n, i) {
                  function a(t, a) {
                    var r = "" === i ? t : i + "-" + t;
                    null !== (a = void 0 !== a ? a : e.getAttribute(r)) && ("string" == typeof a && (0 === t.indexOf("on") ? a = l.default[a] : "false" === a ? a = !1 : "true" === a && (a = !0)), n[t] = a);
                  }
                  if (!0 === t.importDataAttributes) {
                    var o,
                      s,
                      c,
                      u,
                      f = e.getAttribute(i);
                    if (f && "" !== f && (f = f.replace(/'/g, '"'), s = JSON.parse("{" + f + "}")), s) for (u in c = void 0, s) if ("alias" === u.toLowerCase()) {
                      c = s[u];
                      break;
                    }
                    for (o in a("alias", c), n.alias && k(n.alias, n, t), t) {
                      if (s) for (u in c = void 0, s) if (u.toLowerCase() === o.toLowerCase()) {
                        c = s[u];
                        break;
                      }
                      a(o, c);
                    }
                  }
                  r.default.extend(!0, t, n), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right");
                  ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), t.isRTL = !0);
                  return Object.keys(n).length;
                }(e, i, r.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                  var a = (0, u.generateMaskSet)(i, t.noMasksCache);
                  void 0 !== a && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), e.inputmask = new y(void 0, void 0, !0), e.inputmask.opts = i, e.inputmask.noMasksCache = t.noMasksCache, e.inputmask.userOptions = r.default.extend(!0, {}, t.userOptions), e.inputmask.el = e, e.inputmask.$el = (0, r.default)(e), e.inputmask.maskset = a, r.default.data(e, g, t.userOptions), c.mask.call(e.inputmask));
                }
              }), e && e[0] && e[0].inputmask || this;
            },
            option: function (e, t) {
              return "string" == typeof e ? this.opts[e] : "object" === h(e) ? (r.default.extend(this.userOptions, e), this.el && !0 !== t && this.mask(this.el), this) : void 0;
            },
            unmaskedvalue: function (e) {
              if (this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), void 0 === this.el || void 0 !== e) {
                var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                s.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, f.getBuffer.call(this), 0, this.opts);
              }
              return s.unmaskedvalue.call(this, this.el);
            },
            remove: function () {
              if (this.el) {
                r.default.data(this.el, g, null);
                var e = this.opts.autoUnmask ? (0, s.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                e !== f.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), o.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                  get: this.__valueGet,
                  set: this.__valueSet,
                  configurable: !0
                }) : m.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
              }
              return this.el;
            },
            getemptymask: function () {
              return this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), (this.isRTL ? f.getBufferTemplate.call(this).reverse() : f.getBufferTemplate.call(this)).join("");
            },
            hasMaskedValue: function () {
              return !this.opts.autoUnmask;
            },
            isComplete: function () {
              return this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), p.isComplete.call(this, f.getBuffer.call(this));
            },
            getmetadata: function () {
              if (this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), Array.isArray(this.maskset.metadata)) {
                var e = d.getMaskTemplate.call(this, !0, 0, !1).join("");
                return this.maskset.metadata.forEach(function (t) {
                  return t.mask !== e || (e = t, !1);
                }), e;
              }
              return this.maskset.metadata;
            },
            isValid: function (e) {
              if (this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), e) {
                var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                s.checkVal.call(this, void 0, !0, !1, t);
              } else e = this.isRTL ? f.getBuffer.call(this).slice().reverse().join("") : f.getBuffer.call(this).join("");
              for (var n = f.getBuffer.call(this), i = f.determineLastRequiredPosition.call(this), a = n.length - 1; a > i && !f.isMask.call(this, a); a--);
              return n.splice(i, a + 1 - i), p.isComplete.call(this, n) && e === (this.isRTL ? f.getBuffer.call(this).slice().reverse().join("") : f.getBuffer.call(this).join(""));
            },
            format: function (e, t) {
              this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache);
              var n = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
              s.checkVal.call(this, void 0, !0, !1, n);
              var i = this.isRTL ? f.getBuffer.call(this).slice().reverse().join("") : f.getBuffer.call(this).join("");
              return t ? {
                value: i,
                metadata: this.getmetadata()
              } : i;
            },
            setValue: function (e) {
              this.el && (0, r.default)(this.el).trigger("setvalue", [e]);
            },
            analyseMask: u.analyseMask
          }, y.extendDefaults = function (e) {
            r.default.extend(!0, y.prototype.defaults, e);
          }, y.extendDefinitions = function (e) {
            r.default.extend(!0, y.prototype.definitions, e);
          }, y.extendAliases = function (e) {
            r.default.extend(!0, y.prototype.aliases, e);
          }, y.format = function (e, t, n) {
            return y(t).format(e, n);
          }, y.unmask = function (e, t) {
            return y(t).unmaskedvalue(e);
          }, y.isValid = function (e, t) {
            return y(t).isValid(e);
          }, y.remove = function (e) {
            "string" == typeof e && (e = m.getElementById(e) || m.querySelectorAll(e)), (e = e.nodeName ? [e] : e).forEach(function (e) {
              e.inputmask && e.inputmask.remove();
            });
          }, y.setValue = function (e, t) {
            "string" == typeof e && (e = m.getElementById(e) || m.querySelectorAll(e)), (e = e.nodeName ? [e] : e).forEach(function (e) {
              e.inputmask ? e.inputmask.setValue(t) : (0, r.default)(e).trigger("setvalue", [t]);
            });
          }, y.dependencyLib = r.default, l.default.Inputmask = y;
          t.default = y;
        },
        5296: function (e, t, n) {
          function i(e) {
            return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e;
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, i(e);
          }
          var a = d(n(9380)),
            r = d(n(2394));
          function o(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, (r = a.key, o = void 0, o = function (e, t) {
                if ("object" !== i(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var a = n.call(e, t || "default");
                  if ("object" !== i(a)) return a;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
              }(r, "string"), "symbol" === i(o) ? o : String(o)), a);
            }
            var r, o;
          }
          function l(e) {
            var t = u();
            return function () {
              var n,
                a = p(e);
              if (t) {
                var r = p(this).constructor;
                n = Reflect.construct(a, arguments, r);
              } else n = a.apply(this, arguments);
              return function (e, t) {
                if (t && ("object" === i(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function (e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e;
                }(e);
              }(this, n);
            };
          }
          function s(e) {
            var t = "function" == typeof Map ? new Map() : void 0;
            return s = function (e) {
              if (null === e || !function (e) {
                try {
                  return -1 !== Function.toString.call(e).indexOf("[native code]");
                } catch (t) {
                  return "function" == typeof e;
                }
              }(e)) return e;
              if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, n);
              }
              function n() {
                return c(e, arguments, p(this).constructor);
              }
              return n.prototype = Object.create(e.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              }), f(n, e);
            }, s(e);
          }
          function c(e, t, n) {
            return c = u() ? Reflect.construct.bind() : function (e, t, n) {
              var i = [null];
              i.push.apply(i, t);
              var a = new (Function.bind.apply(e, i))();
              return n && f(a, n.prototype), a;
            }, c.apply(null, arguments);
          }
          function u() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (e) {
              return !1;
            }
          }
          function f(e, t) {
            return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
              return e.__proto__ = t, e;
            }, f(e, t);
          }
          function p(e) {
            return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }, p(e);
          }
          function d(e) {
            return e && e.__esModule ? e : {
              default: e
            };
          }
          var h = a.default.document;
          if (h && h.head && h.head.attachShadow && a.default.customElements && void 0 === a.default.customElements.get("input-mask")) {
            var v = function (e) {
              !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                  }
                }), Object.defineProperty(e, "prototype", {
                  writable: !1
                }), t && f(e, t);
              }(s, e);
              var t,
                n,
                i,
                a = l(s);
              function s() {
                var e;
                !function (e, t) {
                  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, s);
                var t = (e = a.call(this)).getAttributeNames(),
                  n = e.attachShadow({
                    mode: "closed"
                  });
                for (var i in e.input = h.createElement("input"), e.input.type = "text", n.appendChild(e.input), t) Object.prototype.hasOwnProperty.call(t, i) && e.input.setAttribute(t[i], e.getAttribute(t[i]));
                var o = new r.default();
                return o.dataAttribute = "", o.mask(e.input), e.input.inputmask.shadowRoot = n, e;
              }
              return t = s, (n = [{
                key: "attributeChangedCallback",
                value: function (e, t, n) {
                  this.input.setAttribute(e, n);
                }
              }, {
                key: "value",
                get: function () {
                  return this.input.value;
                },
                set: function (e) {
                  this.input.value = e;
                }
              }]) && o(t.prototype, n), i && o(t, i), Object.defineProperty(t, "prototype", {
                writable: !1
              }), s;
            }(s(HTMLElement));
            a.default.customElements.define("input-mask", v);
          }
        },
        2839: function (e, t) {
          function n(e) {
            return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e;
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, n(e);
          }
          function i(e, t) {
            return function (e) {
              if (Array.isArray(e)) return e;
            }(e) || function (e, t) {
              var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (null != n) {
                var i,
                  a,
                  r,
                  o,
                  l = [],
                  s = !0,
                  c = !1;
                try {
                  if (r = (n = n.call(e)).next, 0 === t) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else for (; !(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0);
                } catch (e) {
                  c = !0, a = e;
                } finally {
                  try {
                    if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                  } finally {
                    if (c) throw a;
                  }
                }
                return l;
              }
            }(e, t) || function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return a(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t);
            }(e, t) || function () {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i;
          }
          function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              t && (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })), n.push.apply(n, i);
            }
            return n;
          }
          function o(e, t, i) {
            return (t = function (e) {
              var t = function (e, t) {
                if ("object" !== n(e) || null === e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                  var a = i.call(e, t || "default");
                  if ("object" !== n(a)) return a;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
              }(e, "string");
              return "symbol" === n(t) ? t : String(t);
            }(t)) in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = i, e;
          }
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.keys = t.keyCode = void 0, t.toKey = function (e, t) {
            return s[e] || (t ? String.fromCharCode(e) : String.fromCharCode(e).toLowerCase());
          }, t.toKeyCode = function (e) {
            return l[e];
          };
          var l = t.keyCode = function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function (t) {
                  o(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
              }
              return e;
            }({
              c: 67,
              x: 88,
              z: 90,
              BACKSPACE_SAFARI: 127,
              Enter: 13,
              Meta_LEFT: 91,
              Meta_RIGHT: 92,
              Space: 32
            }, {
              Alt: 18,
              AltGraph: 18,
              ArrowDown: 40,
              ArrowLeft: 37,
              ArrowRight: 39,
              ArrowUp: 38,
              Backspace: 8,
              CapsLock: 20,
              Control: 17,
              ContextMenu: 93,
              Dead: 221,
              Delete: 46,
              End: 35,
              Escape: 27,
              F1: 112,
              F2: 113,
              F3: 114,
              F4: 115,
              F5: 116,
              F6: 117,
              F7: 118,
              F8: 119,
              F9: 120,
              F10: 121,
              F11: 122,
              F12: 123,
              Home: 36,
              Insert: 45,
              NumLock: 144,
              PageDown: 34,
              PageUp: 33,
              Pause: 19,
              PrintScreen: 44,
              Process: 229,
              Shift: 16,
              ScrollLock: 145,
              Tab: 9,
              Unidentified: 229
            }),
            s = Object.entries(l).reduce(function (e, t) {
              var n = i(t, 2),
                a = n[0],
                r = n[1];
              return e[r] = void 0 === e[r] ? a : e[r], e;
            }, {});
          t.keys = Object.entries(l).reduce(function (e, t) {
            var n = i(t, 2),
              a = n[0];
            n[1];
            return e[a] = "Space" === a ? " " : a, e;
          }, {});
        },
        2391: function (e, t, n) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.analyseMask = function (e, t, n) {
            var i,
              a,
              s,
              c,
              u,
              f,
              p = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,
              d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
              h = !1,
              v = new o.default(),
              m = [],
              g = [],
              y = !1;
            function k(e, i, a) {
              a = void 0 !== a ? a : e.matches.length;
              var o = e.matches[a - 1];
              if (t) {
                if (0 === i.indexOf("[") || h && /\\d|\\s|\\w|\\p/i.test(i) || "." === i) {
                  var s = n.casing ? "i" : "";
                  /\\p\{.*}/i.test(i) && (s += "u"), e.matches.splice(a++, 0, {
                    fn: new RegExp(i, s),
                    static: !1,
                    optionality: !1,
                    newBlockMarker: void 0 === o ? "master" : o.def !== i,
                    casing: null,
                    def: i,
                    placeholder: "object" === l(n.placeholder) ? n.placeholder[v.matches.length] : void 0,
                    nativeDef: i
                  });
                } else h && (i = i[i.length - 1]), i.split("").forEach(function (t, i) {
                  o = e.matches[a - 1], e.matches.splice(a++, 0, {
                    fn: /[a-z]/i.test(n.staticDefinitionSymbol || t) ? new RegExp("[" + (n.staticDefinitionSymbol || t) + "]", n.casing ? "i" : "") : null,
                    static: !0,
                    optionality: !1,
                    newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                    casing: null,
                    def: n.staticDefinitionSymbol || t,
                    placeholder: void 0 !== n.staticDefinitionSymbol ? t : "object" === l(n.placeholder) ? n.placeholder[v.matches.length] : void 0,
                    nativeDef: (h ? "'" : "") + t
                  });
                });
                h = !1;
              } else {
                var c = n.definitions && n.definitions[i] || n.usePrototypeDefinitions && r.default.prototype.definitions[i];
                c && !h ? e.matches.splice(a++, 0, {
                  fn: c.validator ? "string" == typeof c.validator ? new RegExp(c.validator, n.casing ? "i" : "") : new function () {
                    this.test = c.validator;
                  }() : /./,
                  static: c.static || !1,
                  optionality: c.optional || !1,
                  defOptionality: c.optional || !1,
                  newBlockMarker: void 0 === o || c.optional ? "master" : o.def !== (c.definitionSymbol || i),
                  casing: c.casing,
                  def: c.definitionSymbol || i,
                  placeholder: c.placeholder,
                  nativeDef: i,
                  generated: c.generated
                }) : (e.matches.splice(a++, 0, {
                  fn: /[a-z]/i.test(n.staticDefinitionSymbol || i) ? new RegExp("[" + (n.staticDefinitionSymbol || i) + "]", n.casing ? "i" : "") : null,
                  static: !0,
                  optionality: !1,
                  newBlockMarker: void 0 === o ? "master" : o.def !== i && !0 !== o.static,
                  casing: null,
                  def: n.staticDefinitionSymbol || i,
                  placeholder: void 0 !== n.staticDefinitionSymbol ? i : void 0,
                  nativeDef: (h ? "'" : "") + i
                }), h = !1);
              }
            }
            function b() {
              if (m.length > 0) {
                if (k(c = m[m.length - 1], a), c.isAlternator) {
                  u = m.pop();
                  for (var e = 0; e < u.matches.length; e++) u.matches[e].isGroup && (u.matches[e].isGroup = !1);
                  m.length > 0 ? (c = m[m.length - 1]).matches.push(u) : v.matches.push(u);
                }
              } else k(v, a);
            }
            function x(e) {
              var t = new o.default(!0);
              return t.openGroup = !1, t.matches = e, t;
            }
            function w() {
              if ((s = m.pop()).openGroup = !1, void 0 !== s) {
                if (m.length > 0) {
                  if ((c = m[m.length - 1]).matches.push(s), c.isAlternator) {
                    u = m.pop();
                    for (var e = 0; e < u.matches.length; e++) u.matches[e].isGroup = !1, u.matches[e].alternatorGroup = !1;
                    m.length > 0 ? (c = m[m.length - 1]).matches.push(u) : v.matches.push(u);
                  }
                } else v.matches.push(s);
              } else b();
            }
            function P(e) {
              var t = e.pop();
              return t.isQuantifier && (t = x([e.pop(), t])), t;
            }
            t && (n.optionalmarker[0] = void 0, n.optionalmarker[1] = void 0);
            for (; i = t ? d.exec(e) : p.exec(e);) {
              if (a = i[0], t) {
                switch (a.charAt(0)) {
                  case "?":
                    a = "{0,1}";
                    break;
                  case "+":
                  case "*":
                    a = "{" + a + "}";
                    break;
                  case "|":
                    if (0 === m.length) {
                      var S = x(v.matches);
                      S.openGroup = !0, m.push(S), v.matches = [], y = !0;
                    }
                }
                switch (a) {
                  case "\\d":
                    a = "[0-9]";
                    break;
                  case "\\p":
                    a += d.exec(e)[0], a += d.exec(e)[0];
                }
              }
              if (h) b();else switch (a.charAt(0)) {
                case "$":
                case "^":
                  t || b();
                  break;
                case n.escapeChar:
                  h = !0, t && b();
                  break;
                case n.optionalmarker[1]:
                case n.groupmarker[1]:
                  w();
                  break;
                case n.optionalmarker[0]:
                  m.push(new o.default(!1, !0));
                  break;
                case n.groupmarker[0]:
                  m.push(new o.default(!0));
                  break;
                case n.quantifiermarker[0]:
                  var O = new o.default(!1, !1, !0),
                    _ = (a = a.replace(/[{}?]/g, "")).split("|"),
                    M = _[0].split(","),
                    E = isNaN(M[0]) ? M[0] : parseInt(M[0]),
                    j = 1 === M.length ? E : isNaN(M[1]) ? M[1] : parseInt(M[1]),
                    T = isNaN(_[1]) ? _[1] : parseInt(_[1]);
                  "*" !== E && "+" !== E || (E = "*" === j ? 0 : 1), O.quantifier = {
                    min: E,
                    max: j,
                    jit: T
                  };
                  var A = m.length > 0 ? m[m.length - 1].matches : v.matches;
                  (i = A.pop()).isGroup || (i = x([i])), A.push(i), A.push(O);
                  break;
                case n.alternatormarker:
                  if (m.length > 0) {
                    var D = (c = m[m.length - 1]).matches[c.matches.length - 1];
                    f = c.openGroup && (void 0 === D.matches || !1 === D.isGroup && !1 === D.isAlternator) ? m.pop() : P(c.matches);
                  } else f = P(v.matches);
                  if (f.isAlternator) m.push(f);else if (f.alternatorGroup ? (u = m.pop(), f.alternatorGroup = !1) : u = new o.default(!1, !1, !1, !0), u.matches.push(f), m.push(u), f.openGroup) {
                    f.openGroup = !1;
                    var L = new o.default(!0);
                    L.alternatorGroup = !0, m.push(L);
                  }
                  break;
                default:
                  b();
              }
            }
            y && w();
            for (; m.length > 0;) s = m.pop(), v.matches.push(s);
            v.matches.length > 0 && (!function e(i) {
              i && i.matches && i.matches.forEach(function (a, r) {
                var o = i.matches[r + 1];
                (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && a && a.isGroup && (a.isGroup = !1, t || (k(a, n.groupmarker[0], 0), !0 !== a.openGroup && k(a, n.groupmarker[1]))), e(a);
              });
            }(v), g.push(v));
            (n.numericInput || n.isRTL) && function e(t) {
              for (var i in t.matches = t.matches.reverse(), t.matches) if (Object.prototype.hasOwnProperty.call(t.matches, i)) {
                var a = parseInt(i);
                if (t.matches[i].isQuantifier && t.matches[a + 1] && t.matches[a + 1].isGroup) {
                  var r = t.matches[i];
                  t.matches.splice(i, 1), t.matches.splice(a + 1, 0, r);
                }
                void 0 !== t.matches[i].matches ? t.matches[i] = e(t.matches[i]) : t.matches[i] = ((o = t.matches[i]) === n.optionalmarker[0] ? o = n.optionalmarker[1] : o === n.optionalmarker[1] ? o = n.optionalmarker[0] : o === n.groupmarker[0] ? o = n.groupmarker[1] : o === n.groupmarker[1] && (o = n.groupmarker[0]), o);
              }
              var o;
              return t;
            }(g[0]);
            return g;
          }, t.generateMaskSet = function (e, t) {
            var n;
            function o(e, t) {
              var n = t.repeat,
                i = t.groupmarker,
                r = t.quantifiermarker,
                o = t.keepStatic;
              if (n > 0 || "*" === n || "+" === n) {
                var l = "*" === n ? 0 : "+" === n ? 1 : n;
                if (l != n) e = i[0] + e + i[1] + r[0] + l + "," + n + r[1];else for (var c = e, u = 1; u < l; u++) e += c;
              }
              if (!0 === o) {
                var f = e.match(new RegExp("(.)\\[([^\\]]*)\\]", "g"));
                f && f.forEach(function (t, n) {
                  var i = function (e, t) {
                      return function (e) {
                        if (Array.isArray(e)) return e;
                      }(e) || function (e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != n) {
                          var i,
                            a,
                            r,
                            o,
                            l = [],
                            s = !0,
                            c = !1;
                          try {
                            if (r = (n = n.call(e)).next, 0 === t) {
                              if (Object(n) !== n) return;
                              s = !1;
                            } else for (; !(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0);
                          } catch (e) {
                            c = !0, a = e;
                          } finally {
                            try {
                              if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                            } finally {
                              if (c) throw a;
                            }
                          }
                          return l;
                        }
                      }(e, t) || function (e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return s(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
                      }(e, t) || function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                      }();
                    }(t.split("["), 2),
                    r = i[0],
                    o = i[1];
                  o = o.replace("]", ""), e = e.replace(new RegExp("".concat((0, a.default)(r), "\\[").concat((0, a.default)(o), "\\]")), r.charAt(0) === o.charAt(0) ? "(".concat(r, "|").concat(r).concat(o, ")") : "".concat(r, "[").concat(o, "]"));
                });
              }
              return e;
            }
            function c(e, n, a) {
              var s,
                c,
                u = !1;
              return null !== e && "" !== e || ((u = null !== a.regex) ? e = (e = a.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (u = !0, e = ".*")), 1 === e.length && !1 === a.greedy && 0 !== a.repeat && (a.placeholder = ""), e = o(e, a), c = u ? "regex_" + a.regex : a.numericInput ? e.split("").reverse().join("") : e, null !== a.keepStatic && (c = "ks_" + a.keepStatic + c), "object" === l(a.placeholder) && (c = "ph_" + JSON.stringify(a.placeholder) + c), void 0 === r.default.prototype.masksCache[c] || !0 === t ? (s = {
                mask: e,
                maskToken: r.default.prototype.analyseMask(e, u, a),
                validPositions: [],
                _buffer: void 0,
                buffer: void 0,
                tests: {},
                excludes: {},
                metadata: n,
                maskLength: void 0,
                jitOffset: {}
              }, !0 !== t && (r.default.prototype.masksCache[c] = s, s = i.default.extend(!0, {}, r.default.prototype.masksCache[c]))) : s = i.default.extend(!0, {}, r.default.prototype.masksCache[c]), s;
            }
            "function" == typeof e.mask && (e.mask = e.mask(e));
            if (Array.isArray(e.mask)) {
              if (e.mask.length > 1) {
                null === e.keepStatic && (e.keepStatic = !0);
                var u = e.groupmarker[0];
                return (e.isRTL ? e.mask.reverse() : e.mask).forEach(function (t) {
                  u.length > 1 && (u += e.alternatormarker), void 0 !== t.mask && "function" != typeof t.mask ? u += t.mask : u += t;
                }), c(u += e.groupmarker[1], e.mask, e);
              }
              e.mask = e.mask.pop();
            }
            n = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? c(e.mask.mask, e.mask, e) : c(e.mask, e.mask, e);
            null === e.keepStatic && (e.keepStatic = !1);
            return n;
          };
          var i = c(n(4963)),
            a = c(n(7184)),
            r = c(n(2394)),
            o = c(n(9695));
          function l(e) {
            return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e;
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, l(e);
          }
          function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i;
          }
          function c(e) {
            return e && e.__esModule ? e : {
              default: e
            };
          }
        },
        157: function (e, t, n) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.mask = function () {
            var e = this,
              t = this.opts,
              n = this.el,
              c = this.dependencyLib;
            r.EventRuler.off(n);
            var u = function (t, n) {
              var i = t.getAttribute("type"),
                a = "input" === t.tagName.toLowerCase() && n.supportsInputType.includes(i) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
              if (!a) if ("input" === t.tagName.toLowerCase()) {
                var s = document.createElement("input");
                s.setAttribute("type", i), a = "text" === s.type, s = null;
              } else a = "partial";
              return !1 !== a ? function (t) {
                var i, a;
                function s() {
                  return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== l.getLastValidPosition.call(e) || !0 !== n.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && n.clearMaskOnLostFocus ? (e.isRTL ? o.clearOptionalTail.call(e, l.getBuffer.call(e).slice()).reverse() : o.clearOptionalTail.call(e, l.getBuffer.call(e).slice())).join("") : i.call(this) : "" : i.call(this);
                }
                function u(e) {
                  a.call(this, e), this.inputmask && (0, o.applyInputValue)(this, e);
                }
                if (!t.inputmask.__valueGet) {
                  if (!0 !== n.noValuePatching) {
                    if (Object.getOwnPropertyDescriptor) {
                      var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                      f && f.get && f.set ? (i = f.get, a = f.set, Object.defineProperty(t, "value", {
                        get: s,
                        set: u,
                        configurable: !0
                      })) : "input" !== t.tagName.toLowerCase() && (i = function () {
                        return this.textContent;
                      }, a = function (e) {
                        this.textContent = e;
                      }, Object.defineProperty(t, "value", {
                        get: s,
                        set: u,
                        configurable: !0
                      }));
                    } else document.__lookupGetter__ && t.__lookupGetter__("value") && (i = t.__lookupGetter__("value"), a = t.__lookupSetter__("value"), t.__defineGetter__("value", s), t.__defineSetter__("value", u));
                    t.inputmask.__valueGet = i, t.inputmask.__valueSet = a;
                  }
                  t.inputmask._valueGet = function (t) {
                    return e.isRTL && !0 !== t ? i.call(this.el).split("").reverse().join("") : i.call(this.el);
                  }, t.inputmask._valueSet = function (t, n) {
                    a.call(this.el, null == t ? "" : !0 !== n && e.isRTL ? t.split("").reverse().join("") : t);
                  }, void 0 === i && (i = function () {
                    return this.value;
                  }, a = function (e) {
                    this.value = e;
                  }, function (t) {
                    if (c.valHooks && (void 0 === c.valHooks[t] || !0 !== c.valHooks[t].inputmaskpatch)) {
                      var i = c.valHooks[t] && c.valHooks[t].get ? c.valHooks[t].get : function (e) {
                          return e.value;
                        },
                        a = c.valHooks[t] && c.valHooks[t].set ? c.valHooks[t].set : function (e, t) {
                          return e.value = t, e;
                        };
                      c.valHooks[t] = {
                        get: function (t) {
                          if (t.inputmask) {
                            if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                            var a = i(t);
                            return -1 !== l.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== n.nullable ? a : "";
                          }
                          return i(t);
                        },
                        set: function (e, t) {
                          var n = a(e, t);
                          return e.inputmask && (0, o.applyInputValue)(e, t), n;
                        },
                        inputmaskpatch: !0
                      };
                    }
                  }(t.type), function (e) {
                    r.EventRuler.on(e, "mouseenter", function () {
                      var e = this,
                        t = e.inputmask._valueGet(!0);
                      t != (e.inputmask.isRTL ? l.getBuffer.call(e.inputmask).slice().reverse() : l.getBuffer.call(e.inputmask)).join("") && (0, o.applyInputValue)(e, t);
                    });
                  }(t));
                }
              }(t) : t.inputmask = void 0, a;
            }(n, t);
            if (!1 !== u) {
              e.originalPlaceholder = n.placeholder, e.maxLength = void 0 !== n ? n.maxLength : void 0, -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in n && null === n.getAttribute("inputmode") && (n.inputMode = t.inputmode, n.setAttribute("inputmode", t.inputmode)), !0 === u && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === ["cc-number", "cc-exp"].indexOf(n.autocomplete), i.iphone && (t.insertModeVisual = !1, n.setAttribute("autocorrect", "off")), r.EventRuler.on(n, "submit", a.EventHandlers.submitEvent), r.EventRuler.on(n, "reset", a.EventHandlers.resetEvent), r.EventRuler.on(n, "blur", a.EventHandlers.blurEvent), r.EventRuler.on(n, "focus", a.EventHandlers.focusEvent), r.EventRuler.on(n, "invalid", a.EventHandlers.invalidEvent), r.EventRuler.on(n, "click", a.EventHandlers.clickEvent), r.EventRuler.on(n, "mouseleave", a.EventHandlers.mouseleaveEvent), r.EventRuler.on(n, "mouseenter", a.EventHandlers.mouseenterEvent), r.EventRuler.on(n, "paste", a.EventHandlers.pasteEvent), r.EventRuler.on(n, "cut", a.EventHandlers.cutEvent), r.EventRuler.on(n, "complete", t.oncomplete), r.EventRuler.on(n, "incomplete", t.onincomplete), r.EventRuler.on(n, "cleared", t.oncleared), !0 !== t.inputEventOnly && r.EventRuler.on(n, "keydown", a.EventHandlers.keyEvent), (i.mobile || t.inputEventOnly) && n.removeAttribute("maxLength"), r.EventRuler.on(n, "input", a.EventHandlers.inputFallBackEvent)), r.EventRuler.on(n, "setvalue", a.EventHandlers.setValueEvent), void 0 === e.applyMaskHook || e.applyMaskHook(), l.getBufferTemplate.call(e).join(""), e.undoValue = e._valueGet(!0);
              var f = (n.inputmask.shadowRoot || n.ownerDocument).activeElement;
              if ("" !== n.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || f === n) {
                (0, o.applyInputValue)(n, n.inputmask._valueGet(!0), t);
                var p = l.getBuffer.call(e).slice();
                !1 === s.isComplete.call(e, p) && t.clearIncomplete && l.resetMaskSet.call(e, !1), t.clearMaskOnLostFocus && f !== n && (-1 === l.getLastValidPosition.call(e) ? p = [] : o.clearOptionalTail.call(e, p)), (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && f === n || "" !== n.inputmask._valueGet(!0)) && (0, o.writeBuffer)(n, p), f === n && l.caret.call(e, n, l.seekNext.call(e, l.getLastValidPosition.call(e)));
              }
            }
          };
          var i = n(9845),
            a = n(6030),
            r = n(9716),
            o = n(7760),
            l = n(8711),
            s = n(7215);
        },
        9695: function (e, t) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = function (e, t, n, i) {
            this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, this.isOptional = t || !1, this.isQuantifier = n || !1, this.isAlternator = i || !1, this.quantifier = {
              min: 1,
              max: 1
            };
          };
        },
        3194: function () {
          Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function (e, t) {
              if (null == this) throw new TypeError('"this" is null or not defined');
              var n = Object(this),
                i = n.length >>> 0;
              if (0 === i) return !1;
              for (var a = 0 | t, r = Math.max(a >= 0 ? a : i - Math.abs(a), 0); r < i;) {
                if (n[r] === e) return !0;
                r++;
              }
              return !1;
            }
          });
        },
        9302: function () {
          var e = Function.bind.call(Function.call, Array.prototype.reduce),
            t = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable),
            n = Function.bind.call(Function.call, Array.prototype.concat),
            i = Object.keys;
          Object.entries || (Object.entries = function (a) {
            return e(i(a), function (e, i) {
              return n(e, "string" == typeof i && t(a, i) ? [[i, a[i]]] : []);
            }, []);
          });
        },
        7149: function () {
          function e(t) {
            return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e;
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, e(t);
          }
          "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function (e) {
            return e.__proto__;
          } : function (e) {
            return e.constructor.prototype;
          });
        },
        4013: function () {
          String.prototype.includes || (String.prototype.includes = function (e, t) {
            return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t);
          });
        },
        8711: function (e, t, n) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.caret = function (e, t, n, i, r) {
            var o,
              l = this,
              s = this.opts;
            if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, n = e.selectionEnd) : a.default.getSelection ? (o = a.default.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && o.commonAncestorContainer !== e || (t = o.startOffset, n = o.endOffset) : document.selection && document.selection.createRange && (n = (t = 0 - (o = document.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + o.text.length), {
              begin: i ? t : f.call(l, t),
              end: i ? n : f.call(l, n)
            };
            if (Array.isArray(t) && (n = l.isRTL ? t[0] : t[1], t = l.isRTL ? t[1] : t[0]), void 0 !== t.begin && (n = l.isRTL ? t.begin : t.end, t = l.isRTL ? t.end : t.begin), "number" == typeof t) {
              t = i ? t : f.call(l, t), n = "number" == typeof (n = i ? n : f.call(l, n)) ? n : t;
              var c = parseInt(((e.ownerDocument.defaultView || a.default).getComputedStyle ? (e.ownerDocument.defaultView || a.default).getComputedStyle(e, null) : e.currentStyle).fontSize) * n;
              if (e.scrollLeft = c > e.scrollWidth ? c : 0, e.inputmask.caretPos = {
                begin: t,
                end: n
              }, s.insertModeVisual && !1 === s.insertMode && t === n && (r || n++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) {
                if ("setSelectionRange" in e) e.setSelectionRange(t, n);else if (a.default.getSelection) {
                  if (o = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                    var u = document.createTextNode("");
                    e.appendChild(u);
                  }
                  o.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), o.setEnd(e.firstChild, n < e.inputmask._valueGet().length ? n : e.inputmask._valueGet().length), o.collapse(!0);
                  var p = a.default.getSelection();
                  p.removeAllRanges(), p.addRange(o);
                } else e.createTextRange && ((o = e.createTextRange()).collapse(!0), o.moveEnd("character", n), o.moveStart("character", t), o.select());
                void 0 === e.inputmask.caretHook || e.inputmask.caretHook.call(l, {
                  begin: t,
                  end: n
                });
              }
            }
          }, t.determineLastRequiredPosition = function (e) {
            var t,
              n,
              i = this,
              a = i.maskset,
              l = i.dependencyLib,
              c = s.call(i),
              u = {},
              f = a.validPositions[c],
              p = o.getMaskTemplate.call(i, !0, s.call(i), !0, !0),
              d = p.length,
              h = void 0 !== f ? f.locator.slice() : void 0;
            for (t = c + 1; t < p.length; t++) h = (n = o.getTestTemplate.call(i, t, h, t - 1)).locator.slice(), u[t] = l.extend(!0, {}, n);
            var v = f && void 0 !== f.alternation ? f.locator[f.alternation] : void 0;
            for (t = d - 1; t > c && ((n = u[t]).match.optionality || n.match.optionalQuantifier && n.match.newBlockMarker || v && (v !== u[t].locator[f.alternation] && !0 !== n.match.static || !0 === n.match.static && n.locator[f.alternation] && r.checkAlternationMatch.call(i, n.locator[f.alternation].toString().split(","), v.toString().split(",")) && "" !== o.getTests.call(i, t)[0].def)) && p[t] === o.getPlaceholder.call(i, t, n.match); t--) d--;
            return e ? {
              l: d,
              def: u[d] ? u[d].match : void 0
            } : d;
          }, t.determineNewCaretPosition = function (e, t, n) {
            var i,
              a,
              r,
              f = this,
              p = f.maskset,
              d = f.opts;
            t && (f.isRTL ? e.end = e.begin : e.begin = e.end);
            if (e.begin === e.end) {
              switch (n = n || d.positionCaretOnClick) {
                case "none":
                  break;
                case "select":
                  e = {
                    begin: 0,
                    end: l.call(f).length
                  };
                  break;
                case "ignore":
                  e.end = e.begin = u.call(f, s.call(f));
                  break;
                case "radixFocus":
                  if (f.clicked > 1 && 0 === p.validPositions.length) break;
                  if (function (e) {
                    if ("" !== d.radixPoint && 0 !== d.digits) {
                      var t = p.validPositions;
                      if (void 0 === t[e] || void 0 === t[e].input) {
                        if (e < u.call(f, -1)) return !0;
                        var n = l.call(f).indexOf(d.radixPoint);
                        if (-1 !== n) {
                          for (var i = 0, a = t.length; i < a; i++) if (t[i] && n < i && t[i].input !== o.getPlaceholder.call(f, i)) return !1;
                          return !0;
                        }
                      }
                    }
                    return !1;
                  }(e.begin)) {
                    var h = l.call(f).join("").indexOf(d.radixPoint);
                    e.end = e.begin = d.numericInput ? u.call(f, h) : h;
                    break;
                  }
                default:
                  if (i = e.begin, a = s.call(f, i, !0), i <= (r = u.call(f, -1 !== a || c.call(f, 0) ? a : -1))) e.end = e.begin = c.call(f, i, !1, !0) ? i : u.call(f, i);else {
                    var v = p.validPositions[a],
                      m = o.getTestTemplate.call(f, r, v ? v.match.locator : void 0, v),
                      g = o.getPlaceholder.call(f, r, m.match);
                    if ("" !== g && l.call(f)[r] !== g && !0 !== m.match.optionalQuantifier && !0 !== m.match.newBlockMarker || !c.call(f, r, d.keepStatic, !0) && m.match.def === g) {
                      var y = u.call(f, r);
                      (i >= y || i === r) && (r = y);
                    }
                    e.end = e.begin = r;
                  }
              }
              return e;
            }
          }, t.getBuffer = l, t.getBufferTemplate = function () {
            var e = this.maskset;
            void 0 === e._buffer && (e._buffer = o.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice()));
            return e._buffer;
          }, t.getLastValidPosition = s, t.isMask = c, t.resetMaskSet = function (e) {
            var t = this.maskset;
            t.buffer = void 0, !0 !== e && (t.validPositions = [], t.p = 0);
            !1 === e && (t.tests = {}, t.jitOffset = {});
          }, t.seekNext = u, t.seekPrevious = function (e, t) {
            var n = this,
              i = e - 1;
            if (e <= 0) return 0;
            for (; i > 0 && (!0 === t && (!0 !== o.getTest.call(n, i).match.newBlockMarker || !c.call(n, i, void 0, !0)) || !0 !== t && !c.call(n, i, void 0, !0));) i--;
            return i;
          }, t.translatePosition = f;
          var i,
            a = (i = n(9380)) && i.__esModule ? i : {
              default: i
            },
            r = n(7215),
            o = n(4713);
          function l(e) {
            var t = this,
              n = t.maskset;
            return void 0 !== n.buffer && !0 !== e || (n.buffer = o.getMaskTemplate.call(t, !0, s.call(t), !0), void 0 === n._buffer && (n._buffer = n.buffer.slice())), n.buffer;
          }
          function s(e, t, n) {
            var i = this.maskset,
              a = -1,
              r = -1,
              o = n || i.validPositions;
            void 0 === e && (e = -1);
            for (var l = 0, s = o.length; l < s; l++) o[l] && (t || !0 !== o[l].generatedInput) && (l <= e && (a = l), l >= e && (r = l));
            return -1 === a || a === e ? r : -1 === r || e - a < r - e ? a : r;
          }
          function c(e, t, n) {
            var i = this,
              a = this.maskset,
              r = o.getTestTemplate.call(i, e).match;
            if ("" === r.def && (r = o.getTest.call(i, e).match), !0 !== r.static) return r.fn;
            if (!0 === n && void 0 !== a.validPositions[e] && !0 !== a.validPositions[e].generatedInput) return !0;
            if (!0 !== t && e > -1) {
              if (n) {
                var l = o.getTests.call(i, e);
                return l.length > 1 + ("" === l[l.length - 1].match.def ? 1 : 0);
              }
              var s = o.determineTestTemplate.call(i, e, o.getTests.call(i, e)),
                c = o.getPlaceholder.call(i, e, s.match);
              return s.match.def !== c;
            }
            return !1;
          }
          function u(e, t, n) {
            var i = this;
            void 0 === n && (n = !0);
            for (var a = e + 1; "" !== o.getTest.call(i, a).match.def && (!0 === t && (!0 !== o.getTest.call(i, a).match.newBlockMarker || !c.call(i, a, void 0, !0)) || !0 !== t && !c.call(i, a, void 0, n));) a++;
            return a;
          }
          function f(e) {
            var t = this.opts,
              n = this.el;
            return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !n || (e = this._valueGet().length - e) < 0 && (e = 0), e;
          }
        },
        4713: function (e, t, n) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.determineTestTemplate = f, t.getDecisionTaker = s, t.getMaskTemplate = function (e, t, n, i, a) {
            var r = this,
              o = this.opts,
              l = this.maskset,
              s = o.greedy;
            a && o.greedy && (o.greedy = !1, r.maskset.tests = {});
            t = t || 0;
            var p,
              d,
              v,
              m,
              g = [],
              y = 0;
            do {
              if (!0 === e && l.validPositions[y]) d = (v = a && l.validPositions[y].match.optionality && void 0 === l.validPositions[y + 1] && (!0 === l.validPositions[y].generatedInput || l.validPositions[y].input == o.skipOptionalPartCharacter && y > 0) ? f.call(r, y, h.call(r, y, p, y - 1)) : l.validPositions[y]).match, p = v.locator.slice(), g.push(!0 === n ? v.input : !1 === n ? d.nativeDef : c.call(r, y, d));else {
                d = (v = u.call(r, y, p, y - 1)).match, p = v.locator.slice();
                var k = !0 !== i && (!1 !== o.jitMasking ? o.jitMasking : d.jit);
                (m = (m || l.validPositions[y - 1]) && d.static && d.def !== o.groupSeparator && null === d.fn) || !1 === k || void 0 === k || "number" == typeof k && isFinite(k) && k > y ? g.push(!1 === n ? d.nativeDef : c.call(r, g.length, d)) : m = !1;
              }
              y++;
            } while (!0 !== d.static || "" !== d.def || t > y);
            "" === g[g.length - 1] && g.pop();
            !1 === n && void 0 !== l.maskLength || (l.maskLength = y - 1);
            return o.greedy = s, g;
          }, t.getPlaceholder = c, t.getTest = p, t.getTestTemplate = u, t.getTests = h, t.isSubsetOf = d;
          var i,
            a = (i = n(2394)) && i.__esModule ? i : {
              default: i
            },
            r = n(8711);
          function o(e) {
            return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e;
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, o(e);
          }
          function l(e, t) {
            var n = (null != e.alternation ? e.mloc[s(e)] : e.locator).join("");
            if ("" !== n) for (n = n.split(":")[0]; n.length < t;) n += "0";
            return n;
          }
          function s(e) {
            var t = e.locator[e.alternation];
            return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
          }
          function c(e, t, n) {
            var i = this,
              a = this.opts,
              l = this.maskset;
            if (void 0 !== (t = t || p.call(i, e).match).placeholder || !0 === n) {
              if ("" !== t.placeholder && !0 === t.static && !0 !== t.generated) {
                var s = r.getLastValidPosition.call(i, e),
                  c = r.seekNext.call(i, s);
                return (n ? e <= c : e < c) ? a.staticDefinitionSymbol && t.static ? t.nativeDef : t.def : "function" == typeof t.placeholder ? t.placeholder(a) : t.placeholder;
              }
              return "function" == typeof t.placeholder ? t.placeholder(a) : t.placeholder;
            }
            if (!0 === t.static) {
              if (e > -1 && void 0 === l.validPositions[e]) {
                var u,
                  f = h.call(i, e),
                  d = [];
                if ("string" == typeof a.placeholder && f.length > 1 + ("" === f[f.length - 1].match.def ? 1 : 0)) for (var v = 0; v < f.length; v++) if ("" !== f[v].match.def && !0 !== f[v].match.optionality && !0 !== f[v].match.optionalQuantifier && (!0 === f[v].match.static || void 0 === u || !1 !== f[v].match.fn.test(u.match.def, l, e, !0, a)) && (d.push(f[v]), !0 === f[v].match.static && (u = f[v]), d.length > 1 && /[0-9a-bA-Z]/.test(d[0].match.def))) return a.placeholder.charAt(e % a.placeholder.length);
              }
              return t.def;
            }
            return "object" === o(a.placeholder) ? t.def : a.placeholder.charAt(e % a.placeholder.length);
          }
          function u(e, t, n) {
            return this.maskset.validPositions[e] || f.call(this, e, h.call(this, e, t ? t.slice() : t, n));
          }
          function f(e, t) {
            var n = this.opts,
              i = 0,
              a = function (e, t) {
                var n = 0,
                  i = !1;
                t.forEach(function (e) {
                  e.match.optionality && (0 !== n && n !== e.match.optionality && (i = !0), (0 === n || n > e.match.optionality) && (n = e.match.optionality));
                }), n && (0 == e || 1 == t.length ? n = 0 : i || (n = 0));
                return n;
              }(e, t);
            e = e > 0 ? e - 1 : 0;
            var r,
              o,
              s,
              c = l(p.call(this, e));
            n.greedy && t.length > 1 && "" === t[t.length - 1].match.def && (i = 1);
            for (var u = 0; u < t.length - i; u++) {
              var f = t[u];
              r = l(f, c.length);
              var d = Math.abs(r - c);
              (!0 !== f.unMatchedAlternationStopped || t.filter(function (e) {
                return !0 !== e.unMatchedAlternationStopped;
              }).length <= 1) && (void 0 === o || "" !== r && d < o || s && !n.greedy && s.match.optionality && s.match.optionality - a > 0 && "master" === s.match.newBlockMarker && (!f.match.optionality || f.match.optionality - a < 1 || !f.match.newBlockMarker) || s && !n.greedy && s.match.optionalQuantifier && !f.match.optionalQuantifier) && (o = d, s = f);
            }
            return s;
          }
          function p(e, t) {
            var n = this.maskset;
            return n.validPositions[e] ? n.validPositions[e] : (t || h.call(this, e))[0];
          }
          function d(e, t, n) {
            function i(e) {
              for (var t, n = [], i = -1, a = 0, r = e.length; a < r; a++) if ("-" === e.charAt(a)) for (t = e.charCodeAt(a + 1); ++i < t;) n.push(String.fromCharCode(i));else i = e.charCodeAt(a), n.push(e.charAt(a));
              return n.join("");
            }
            return e.match.def === t.match.nativeDef || !(!(n.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && ("." === t.match.fn.source || -1 !== i(t.match.fn.source.replace(/[[\]/]/g, "")).indexOf(i(e.match.fn.source.replace(/[[\]/]/g, ""))));
          }
          function h(e, t, n) {
            var i,
              r,
              o = this,
              l = this.dependencyLib,
              s = this.maskset,
              c = this.opts,
              u = this.el,
              p = s.maskToken,
              h = t ? n : 0,
              v = t ? t.slice() : [0],
              m = [],
              g = !1,
              y = t ? t.join("") : "",
              k = !1;
            function b(t, n, r, l) {
              function f(r, l, p) {
                function v(e, t) {
                  var n = 0 === t.matches.indexOf(e);
                  return n || t.matches.every(function (i, a) {
                    return !0 === i.isQuantifier ? n = v(e, t.matches[a - 1]) : Object.prototype.hasOwnProperty.call(i, "matches") && (n = v(e, i)), !n;
                  }), n;
                }
                function w(e, t, n) {
                  var i, a;
                  if ((s.tests[e] || s.validPositions[e]) && (s.validPositions[e] ? [s.validPositions[e]] : s.tests[e]).every(function (e, r) {
                    if (e.mloc[t]) return i = e, !1;
                    var o = void 0 !== n ? n : e.alternation,
                      l = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                    return (void 0 === a || l < a) && -1 !== l && (i = e, a = l), !0;
                  }), i) {
                    var r = i.locator[i.alternation],
                      o = i.mloc[t] || i.mloc[r] || i.locator;
                    if (-1 !== o[o.length - 1].toString().indexOf(":")) o.pop();
                    return o.slice((void 0 !== n ? n : i.alternation) + 1);
                  }
                  return void 0 !== n ? w(e, t) : void 0;
                }
                function P(t, n) {
                  return !0 === t.match.static && !0 !== n.match.static && n.match.fn.test(t.match.def, s, e, !1, c, !1);
                }
                function S(e, t) {
                  var n = e.alternation,
                    i = void 0 === t || n <= t.alternation && -1 === e.locator[n].toString().indexOf(t.locator[n]);
                  if (!i && n > t.alternation) for (var a = 0; a < n; a++) if (e.locator[a] !== t.locator[a]) {
                    n = a, i = !0;
                    break;
                  }
                  return !!i && function (n) {
                    e.mloc = e.mloc || {};
                    var i = e.locator[n];
                    if (void 0 !== i) {
                      if ("string" == typeof i && (i = i.split(",")[0]), void 0 === e.mloc[i] && (e.mloc[i] = e.locator.slice(), e.mloc[i].push(":".concat(e.alternation))), void 0 !== t) {
                        for (var a in t.mloc) "string" == typeof a && (a = parseInt(a.split(",")[0])), e.mloc[a + 0] = t.mloc[a];
                        e.locator[n] = Object.keys(e.mloc).join(",");
                      }
                      return e.alternation > n && (e.alternation = n), !0;
                    }
                    return e.alternation = void 0, !1;
                  }(n);
                }
                function O(e, t) {
                  if (e.locator.length !== t.locator.length) return !1;
                  for (var n = e.alternation + 1; n < e.locator.length; n++) if (e.locator[n] !== t.locator[n]) return !1;
                  return !0;
                }
                if (h > e + c._maxTestPos) throw new Error("Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. ".concat(s.mask));
                if (h === e && void 0 === r.matches) {
                  if (m.push({
                    match: r,
                    locator: l.reverse(),
                    cd: y,
                    mloc: {}
                  }), !r.optionality || void 0 !== p || !(c.definitions && c.definitions[r.nativeDef] && c.definitions[r.nativeDef].optional || a.default.prototype.definitions[r.nativeDef] && a.default.prototype.definitions[r.nativeDef].optional)) return !0;
                  g = !0, h = e;
                } else if (void 0 !== r.matches) {
                  if (r.isGroup && p !== r) return function () {
                    if (r = f(t.matches[t.matches.indexOf(r) + 1], l, p)) return !0;
                  }();
                  if (r.isOptional) return function () {
                    var t = r,
                      a = m.length;
                    if (r = b(r, n, l, p), m.length > 0) {
                      if (m.forEach(function (e, t) {
                        t >= a && (e.match.optionality = e.match.optionality ? e.match.optionality + 1 : 1);
                      }), i = m[m.length - 1].match, void 0 !== p || !v(i, t)) return r;
                      g = !0, h = e;
                    }
                  }();
                  if (r.isAlternator) return function () {
                    function i(e) {
                      for (var t, n = e.matches[0].matches ? e.matches[0].matches.length : 1, i = 0; i < e.matches.length && n === (t = e.matches[i].matches ? e.matches[i].matches.length : 1); i++);
                      return n !== t;
                    }
                    o.hasAlternator = !0;
                    var a,
                      v = r,
                      y = [],
                      b = m.slice(),
                      x = l.length,
                      _ = n.length > 0 ? n.shift() : -1;
                    if (-1 === _ || "string" == typeof _) {
                      var M,
                        E = h,
                        j = n.slice(),
                        T = [];
                      if ("string" == typeof _) T = _.split(",");else for (M = 0; M < v.matches.length; M++) T.push(M.toString());
                      if (void 0 !== s.excludes[e]) {
                        for (var A = T.slice(), D = 0, L = s.excludes[e].length; D < L; D++) {
                          var C = s.excludes[e][D].toString().split(":");
                          l.length == C[1] && T.splice(T.indexOf(C[0]), 1);
                        }
                        0 === T.length && (delete s.excludes[e], T = A);
                      }
                      (!0 === c.keepStatic || isFinite(parseInt(c.keepStatic)) && E >= c.keepStatic) && (T = T.slice(0, 1));
                      for (var B = 0; B < T.length; B++) {
                        M = parseInt(T[B]), m = [], n = "string" == typeof _ && w(h, M, x) || j.slice();
                        var I = v.matches[M];
                        if (I && f(I, [M].concat(l), p)) r = !0;else if (0 === B && (k = i(v)), I && I.matches && I.matches.length > v.matches[0].matches.length) break;
                        a = m.slice(), h = E, m = [];
                        for (var R = 0; R < a.length; R++) {
                          var F = a[R],
                            N = !1;
                          F.alternation = F.alternation || x, S(F);
                          for (var V = 0; V < y.length; V++) {
                            var G = y[V];
                            if ("string" != typeof _ || void 0 !== F.alternation && T.includes(F.locator[F.alternation].toString())) {
                              if (F.match.nativeDef === G.match.nativeDef) {
                                N = !0, S(G, F);
                                break;
                              }
                              if (d(F, G, c)) {
                                S(F, G) && (N = !0, y.splice(y.indexOf(G), 0, F));
                                break;
                              }
                              if (d(G, F, c)) {
                                S(G, F);
                                break;
                              }
                              if (P(F, G)) {
                                O(F, G) || void 0 !== u.inputmask.userOptions.keepStatic ? S(F, G) && (N = !0, y.splice(y.indexOf(G), 0, F)) : c.keepStatic = !0;
                                break;
                              }
                              if (P(G, F)) {
                                S(G, F);
                                break;
                              }
                            }
                          }
                          N || y.push(F);
                        }
                      }
                      m = b.concat(y), h = e, g = m.length > 0 && k, r = y.length > 0 && !k, k && g && !r && m.forEach(function (e, t) {
                        e.unMatchedAlternationStopped = !0;
                      }), n = j.slice();
                    } else r = f(v.matches[_] || t.matches[_], [_].concat(l), p);
                    if (r) return !0;
                  }();
                  if (r.isQuantifier && p !== t.matches[t.matches.indexOf(r) - 1]) return function () {
                    for (var a = r, o = !1, u = n.length > 0 ? n.shift() : 0; u < (isNaN(a.quantifier.max) ? u + 1 : a.quantifier.max) && h <= e; u++) {
                      var p = t.matches[t.matches.indexOf(a) - 1];
                      if (r = f(p, [u].concat(l), p)) {
                        if (m.forEach(function (t, n) {
                          (i = x(p, t.match) ? t.match : m[m.length - 1].match).optionalQuantifier = u >= a.quantifier.min, i.jit = (u + 1) * (p.matches.indexOf(i) + 1) > a.quantifier.jit, i.optionalQuantifier && v(i, p) && (g = !0, h = e, c.greedy && null == s.validPositions[e - 1] && u > a.quantifier.min && -1 != ["*", "+"].indexOf(a.quantifier.max) && (m.pop(), y = void 0), o = !0, r = !1), !o && i.jit && (s.jitOffset[e] = p.matches.length - p.matches.indexOf(i));
                        }), o) break;
                        return !0;
                      }
                    }
                  }();
                  if (r = b(r, n, l, p)) return !0;
                } else h++;
              }
              for (var p = n.length > 0 ? n.shift() : 0; p < t.matches.length; p++) if (!0 !== t.matches[p].isQuantifier) {
                var v = f(t.matches[p], [p].concat(r), l);
                if (v && h === e) return v;
                if (h > e) break;
              }
            }
            function x(e, t) {
              var n = -1 != e.matches.indexOf(t);
              return n || e.matches.forEach(function (e, i) {
                void 0 === e.matches || n || (n = x(e, t));
              }), n;
            }
            if (e > -1) {
              if (void 0 === t) {
                for (var w, P = e - 1; void 0 === (w = s.validPositions[P] || s.tests[P]) && P > -1;) P--;
                void 0 !== w && P > -1 && (v = function (e, t) {
                  var n,
                    i = [];
                  return Array.isArray(t) || (t = [t]), t.length > 0 && (void 0 === t[0].alternation || !0 === c.keepStatic ? 0 === (i = f.call(o, e, t.slice()).locator.slice()).length && (i = t[0].locator.slice()) : t.forEach(function (e) {
                    "" !== e.def && (0 === i.length ? (n = e.alternation, i = e.locator.slice()) : e.locator[n] && -1 === i[n].toString().indexOf(e.locator[n]) && (i[n] += "," + e.locator[n]));
                  })), i;
                }(P, w), y = v.join(""), h = P);
              }
              if (s.tests[e] && s.tests[e][0].cd === y) return s.tests[e];
              for (var S = v.shift(); S < p.length; S++) {
                if (b(p[S], v, [S]) && h === e || h > e) break;
              }
            }
            return (0 === m.length || g) && m.push({
              match: {
                fn: null,
                static: !0,
                optionality: !1,
                casing: null,
                def: "",
                placeholder: ""
              },
              locator: k && 0 === m.filter(function (e) {
                return !0 !== e.unMatchedAlternationStopped;
              }).length ? [0] : [],
              mloc: {},
              cd: y
            }), void 0 !== t && s.tests[e] ? r = l.extend(!0, [], m) : (s.tests[e] = l.extend(!0, [], m), r = s.tests[e]), m.forEach(function (e) {
              e.match.optionality = e.match.defOptionality || !1;
            }), r;
          }
        },
        7215: function (e, t, n) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.alternate = l, t.checkAlternationMatch = function (e, t, n) {
            for (var i, a = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== n ? n.split(",") : [], l = 0; l < o.length; l++) -1 !== (i = e.indexOf(o[l])) && e.splice(i, 1);
            for (var s = 0; s < e.length; s++) if (a.includes(e[s])) {
              r = !0;
              break;
            }
            return r;
          }, t.handleRemove = function (e, t, n, i, s) {
            var c = this,
              u = this.maskset,
              f = this.opts;
            if ((f.numericInput || c.isRTL) && (t === a.keys.Backspace ? t = a.keys.Delete : t === a.keys.Delete && (t = a.keys.Backspace), c.isRTL)) {
              var p = n.end;
              n.end = n.begin, n.begin = p;
            }
            var d,
              h = r.getLastValidPosition.call(c, void 0, !0);
            n.end >= r.getBuffer.call(c).length && h >= n.end && (n.end = h + 1);
            t === a.keys.Backspace ? n.end - n.begin < 1 && (n.begin = r.seekPrevious.call(c, n.begin)) : t === a.keys.Delete && n.begin === n.end && (n.end = r.isMask.call(c, n.end, !0, !0) ? n.end + 1 : r.seekNext.call(c, n.end) + 1);
            !1 !== (d = v.call(c, n)) && ((!0 !== i && !1 !== f.keepStatic || null !== f.regex && -1 !== o.getTest.call(c, n.begin).match.def.indexOf("|")) && l.call(c, !0), !0 !== i && (u.p = t === a.keys.Delete ? n.begin + d : n.begin, u.p = r.determineNewCaretPosition.call(c, {
              begin: u.p,
              end: u.p
            }, !1, !1 === f.insertMode && t === a.keys.Backspace ? "none" : void 0).begin));
          }, t.isComplete = c, t.isSelection = u, t.isValid = f, t.refreshFromBuffer = d, t.revalidateMask = v;
          var i = n(6030),
            a = n(2839),
            r = n(8711),
            o = n(4713);
          function l(e, t, n, i, a, s) {
            var c = this,
              u = this.dependencyLib,
              p = this.opts,
              d = c.maskset;
            if (!c.hasAlternator) return !1;
            var h,
              v,
              m,
              g,
              y,
              k,
              b,
              x,
              w,
              P,
              S,
              O = u.extend(!0, [], d.validPositions),
              _ = u.extend(!0, {}, d.tests),
              M = !1,
              E = !1,
              j = void 0 !== a ? a : r.getLastValidPosition.call(c);
            if (s && (P = s.begin, S = s.end, s.begin > s.end && (P = s.end, S = s.begin)), -1 === j && void 0 === a) h = 0, v = (g = o.getTest.call(c, h)).alternation;else for (; j >= 0; j--) if ((m = d.validPositions[j]) && void 0 !== m.alternation) {
              if (j <= (e || 0) && g && g.locator[m.alternation] !== m.locator[m.alternation]) break;
              h = j, v = d.validPositions[h].alternation, g = m;
            }
            if (void 0 !== v) {
              b = parseInt(h), d.excludes[b] = d.excludes[b] || [], !0 !== e && d.excludes[b].push((0, o.getDecisionTaker)(g) + ":" + g.alternation);
              var T = [],
                A = -1;
              for (y = b; b < r.getLastValidPosition.call(c, void 0, !0) + 1; y++) -1 === A && e <= y && void 0 !== t && (T.push(t), A = T.length - 1), (k = d.validPositions[b]) && !0 !== k.generatedInput && (void 0 === s || y < P || y >= S) && T.push(k.input), d.validPositions.splice(b, 1);
              for (-1 === A && void 0 !== t && (T.push(t), A = T.length - 1); void 0 !== d.excludes[b] && d.excludes[b].length < 10;) {
                for (d.tests = {}, r.resetMaskSet.call(c, !0), M = !0, y = 0; y < T.length && (x = M.caret || 0 == p.insertMode && null != x ? r.seekNext.call(c, x) : r.getLastValidPosition.call(c, void 0, !0) + 1, w = T[y], M = f.call(c, x, w, !1, i, !0)); y++) y === A && (E = M), 1 == e && M && (E = {
                  caretPos: y
                });
                if (M) break;
                if (r.resetMaskSet.call(c), g = o.getTest.call(c, b), d.validPositions = u.extend(!0, [], O), d.tests = u.extend(!0, {}, _), !d.excludes[b]) {
                  E = l.call(c, e, t, n, i, b - 1, s);
                  break;
                }
                if (null != g.alternation) {
                  var D = (0, o.getDecisionTaker)(g);
                  if (-1 !== d.excludes[b].indexOf(D + ":" + g.alternation)) {
                    E = l.call(c, e, t, n, i, b - 1, s);
                    break;
                  }
                  for (d.excludes[b].push(D + ":" + g.alternation), y = b; y < r.getLastValidPosition.call(c, void 0, !0) + 1; y++) d.validPositions.splice(b);
                } else delete d.excludes[b];
              }
            }
            return E && !1 === p.keepStatic || delete d.excludes[b], E;
          }
          function s(e, t, n) {
            var i = this.opts,
              r = this.maskset;
            switch (i.casing || t.casing) {
              case "upper":
                e = e.toUpperCase();
                break;
              case "lower":
                e = e.toLowerCase();
                break;
              case "title":
                var o = r.validPositions[n - 1];
                e = 0 === n || o && o.input === String.fromCharCode(a.keyCode.Space) ? e.toUpperCase() : e.toLowerCase();
                break;
              default:
                if ("function" == typeof i.casing) {
                  var l = Array.prototype.slice.call(arguments);
                  l.push(r.validPositions), e = i.casing.apply(this, l);
                }
            }
            return e;
          }
          function c(e) {
            var t = this,
              n = this.opts,
              i = this.maskset;
            if ("function" == typeof n.isComplete) return n.isComplete(e, n);
            if ("*" !== n.repeat) {
              var a = !1,
                l = r.determineLastRequiredPosition.call(t, !0),
                s = l.l;
              if (void 0 === l.def || l.def.newBlockMarker || l.def.optionality || l.def.optionalQuantifier) {
                a = !0;
                for (var c = 0; c <= s; c++) {
                  var u = o.getTestTemplate.call(t, c).match;
                  if (!0 !== u.static && void 0 === i.validPositions[c] && (!1 === u.optionality || void 0 === u.optionality || u.optionality && 0 == u.newBlockMarker) && (!1 === u.optionalQuantifier || void 0 === u.optionalQuantifier) || !0 === u.static && "" != u.def && e[c] !== o.getPlaceholder.call(t, c, u)) {
                    a = !1;
                    break;
                  }
                }
              }
              return a;
            }
          }
          function u(e) {
            var t = this.opts.insertMode ? 0 : 1;
            return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t;
          }
          function f(e, t, n, i, a, p, m) {
            var g = this,
              y = this.dependencyLib,
              k = this.opts,
              b = g.maskset;
            n = !0 === n;
            var x = e;
            function w(e) {
              if (void 0 !== e) {
                if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [e.remove]), e.remove.sort(function (e, t) {
                  return g.isRTL ? e.pos - t.pos : t.pos - e.pos;
                }).forEach(function (e) {
                  v.call(g, {
                    begin: e,
                    end: e + 1
                  });
                }), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [e.insert]), e.insert.sort(function (e, t) {
                  return g.isRTL ? t.pos - e.pos : e.pos - t.pos;
                }).forEach(function (e) {
                  "" !== e.c && f.call(g, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : i);
                }), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                  var t = e.refreshFromBuffer;
                  d.call(g, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
                }
                void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
              }
              return e;
            }
            function P(t, n, a) {
              var l = !1;
              return o.getTests.call(g, t).every(function (c, f) {
                var p = c.match;
                if (r.getBuffer.call(g, !0), !1 !== (l = (!p.jit || void 0 !== b.validPositions[r.seekPrevious.call(g, t)]) && (null != p.fn ? p.fn.test(n, b, t, a, k, u.call(g, e)) : (n === p.def || n === k.skipOptionalPartCharacter) && "" !== p.def && {
                  c: o.getPlaceholder.call(g, t, p, !0) || p.def,
                  pos: t
                }))) {
                  var d = void 0 !== l.c ? l.c : n,
                    h = t;
                  return d = d === k.skipOptionalPartCharacter && !0 === p.static ? o.getPlaceholder.call(g, t, p, !0) || p.def : d, !0 !== (l = w(l)) && void 0 !== l.pos && l.pos !== t && (h = l.pos), !0 !== l && void 0 === l.pos && void 0 === l.c ? !1 : (!1 === v.call(g, e, y.extend({}, c, {
                    input: s.call(g, d, p, h)
                  }), i, h) && (l = !1), !1);
                }
                return !0;
              }), l;
            }
            void 0 !== e.begin && (x = g.isRTL ? e.end : e.begin);
            var S = !0,
              O = y.extend(!0, [], b.validPositions);
            if (!1 === k.keepStatic && void 0 !== b.excludes[x] && !0 !== a && !0 !== i) for (var _ = x; _ < (g.isRTL ? e.begin : e.end); _++) void 0 !== b.excludes[_] && (b.excludes[_] = void 0, delete b.tests[_]);
            if ("function" == typeof k.preValidation && !0 !== i && !0 !== p && (S = w(S = k.preValidation.call(g, r.getBuffer.call(g), x, t, u.call(g, e), k, b, e, n || a))), !0 === S) {
              if (S = P(x, t, n), (!n || !0 === i) && !1 === S && !0 !== p) {
                var M = b.validPositions[x];
                if (!M || !0 !== M.match.static || M.match.def !== t && t !== k.skipOptionalPartCharacter) {
                  if (k.insertMode || void 0 === b.validPositions[r.seekNext.call(g, x)] || e.end > x) {
                    var E = !1;
                    if (b.jitOffset[x] && void 0 === b.validPositions[r.seekNext.call(g, x)] && !1 !== (S = f.call(g, x + b.jitOffset[x], t, !0, !0)) && (!0 !== a && (S.caret = x), E = !0), e.end > x && (b.validPositions[x] = void 0), !E && !r.isMask.call(g, x, k.keepStatic && 0 === x)) for (var j = x + 1, T = r.seekNext.call(g, x, !1, 0 !== x); j <= T; j++) if (!1 !== (S = P(j, t, n))) {
                      S = h.call(g, x, void 0 !== S.pos ? S.pos : j) || S, x = j;
                      break;
                    }
                  }
                } else S = {
                  caret: r.seekNext.call(g, x)
                };
              }
              g.hasAlternator && !0 !== a && !n && (a = !0, !1 === S && k.keepStatic && (c.call(g, r.getBuffer.call(g)) || 0 === x) ? S = l.call(g, x, t, n, i, void 0, e) : (u.call(g, e) && b.tests[x] && b.tests[x].length > 1 && k.keepStatic || 1 == S && !0 !== k.numericInput && b.tests[x] && b.tests[x].length > 1 && r.getLastValidPosition.call(g, void 0, !0) > x) && (S = l.call(g, !0))), !0 === S && (S = {
                pos: x
              });
            }
            if ("function" == typeof k.postValidation && !0 !== i && !0 !== p) {
              var A = k.postValidation.call(g, r.getBuffer.call(g, !0), void 0 !== e.begin ? g.isRTL ? e.end : e.begin : e, t, S, k, b, n, m, a);
              void 0 !== A && (S = !0 === A ? S : A);
            }
            S && void 0 === S.pos && (S.pos = x), !1 === S || !0 === p ? (r.resetMaskSet.call(g, !0), b.validPositions = y.extend(!0, [], O)) : h.call(g, void 0, x, !0);
            var D = w(S);
            void 0 !== g.maxLength && r.getBuffer.call(g).length > g.maxLength && !i && (r.resetMaskSet.call(g, !0), b.validPositions = y.extend(!0, [], O), D = !1);
            return D;
          }
          function p(e, t, n) {
            for (var i = this.maskset, a = !1, r = o.getTests.call(this, e), l = 0; l < r.length; l++) {
              if (r[l].match && (r[l].match.nativeDef === t.match[n.shiftPositions ? "def" : "nativeDef"] && (!n.shiftPositions || !t.match.static) || r[l].match.nativeDef === t.match.nativeDef || n.regex && !r[l].match.static && r[l].match.fn.test(t.input, i, e, !1, n))) {
                a = !0;
                break;
              }
              if (r[l].match && r[l].match.def === t.match.nativeDef) {
                a = void 0;
                break;
              }
            }
            return !1 === a && void 0 !== i.jitOffset[e] && (a = p.call(this, e + i.jitOffset[e], t, n)), a;
          }
          function d(e, t, n) {
            var a,
              o,
              l = this,
              s = this.maskset,
              c = this.opts,
              u = this.dependencyLib,
              f = c.skipOptionalPartCharacter,
              p = l.isRTL ? n.slice().reverse() : n;
            if (c.skipOptionalPartCharacter = "", !0 === e) r.resetMaskSet.call(l, !1), e = 0, t = n.length, o = r.determineNewCaretPosition.call(l, {
              begin: 0,
              end: 0
            }, !1).begin;else {
              for (a = e; a < t; a++) s.validPositions.splice(e, 0);
              o = e;
            }
            var d = new u.Event("keypress");
            for (a = e; a < t; a++) {
              d.key = p[a].toString(), l.ignorable = !1;
              var h = i.EventHandlers.keypressEvent.call(l, d, !0, !1, !1, o);
              !1 !== h && void 0 !== h && (o = h.forwardPosition);
            }
            c.skipOptionalPartCharacter = f;
          }
          function h(e, t, n) {
            var i = this,
              a = this.maskset,
              l = this.dependencyLib;
            if (void 0 === e) for (e = t - 1; e > 0 && !a.validPositions[e]; e--);
            for (var s = e; s < t; s++) {
              if (void 0 === a.validPositions[s] && !r.isMask.call(i, s, !1)) if (0 == s ? o.getTest.call(i, s) : a.validPositions[s - 1]) {
                var c = o.getTests.call(i, s).slice();
                "" === c[c.length - 1].match.def && c.pop();
                var u,
                  p = o.determineTestTemplate.call(i, s, c);
                if (p && (!0 !== p.match.jit || "master" === p.match.newBlockMarker && (u = a.validPositions[s + 1]) && !0 === u.match.optionalQuantifier) && ((p = l.extend({}, p, {
                  input: o.getPlaceholder.call(i, s, p.match, !0) || p.match.def
                })).generatedInput = !0, v.call(i, s, p, !0), !0 !== n)) {
                  var d = a.validPositions[t].input;
                  return a.validPositions[t] = void 0, f.call(i, t, d, !0, !0);
                }
              }
            }
          }
          function v(e, t, n, i) {
            var a = this,
              l = this.maskset,
              s = this.opts,
              c = this.dependencyLib;
            function d(e, t, n) {
              var i = t[e];
              if (void 0 !== i && !0 === i.match.static && !0 !== i.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
                var a = n.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1],
                  r = n.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                return a && r;
              }
              return !1;
            }
            var h = 0,
              v = void 0 !== e.begin ? e.begin : e,
              m = void 0 !== e.end ? e.end : e,
              g = !0;
            if (e.begin > e.end && (v = e.end, m = e.begin), i = void 0 !== i ? i : v, void 0 === n && (v !== m || s.insertMode && void 0 !== l.validPositions[i] || void 0 === t || t.match.optionalQuantifier || t.match.optionality)) {
              var y,
                k = c.extend(!0, [], l.validPositions),
                b = r.getLastValidPosition.call(a, void 0, !0);
              l.p = v;
              var x = u.call(a, e) ? v : i;
              for (y = b; y >= x; y--) l.validPositions.splice(y, 1), void 0 === t && delete l.tests[y + 1];
              var w,
                P,
                S = i,
                O = S;
              for (t && (l.validPositions[i] = c.extend(!0, {}, t), O++, S++), null == k[m] && l.jitOffset[m] && (m += l.jitOffset[m] + 1), y = t ? m : m - 1; y <= b; y++) {
                if (void 0 !== (w = k[y]) && !0 !== w.generatedInput && (y >= m || y >= v && d(y, k, {
                  begin: v,
                  end: m
                }))) {
                  for (; "" !== o.getTest.call(a, O).match.def;) {
                    if (!1 !== (P = p.call(a, O, w, s)) || "+" === w.match.def) {
                      "+" === w.match.def && r.getBuffer.call(a, !0);
                      var _ = f.call(a, O, w.input, "+" !== w.match.def, !0);
                      if (g = !1 !== _, S = (_.pos || O) + 1, !g && P) break;
                    } else g = !1;
                    if (g) {
                      void 0 === t && w.match.static && y === e.begin && h++;
                      break;
                    }
                    if (!g && r.getBuffer.call(a), O > l.maskLength) break;
                    O++;
                  }
                  "" == o.getTest.call(a, O).match.def && (g = !1), O = S;
                }
                if (!g) break;
              }
              if (!g) return l.validPositions = c.extend(!0, [], k), r.resetMaskSet.call(a, !0), !1;
            } else t && o.getTest.call(a, i).match.cd === t.match.cd && (l.validPositions[i] = c.extend(!0, {}, t));
            return r.resetMaskSet.call(a, !0), h;
          }
        }
      },
      t = {};
    function n(i) {
      var a = t[i];
      if (void 0 !== a) return a.exports;
      var r = t[i] = {
        exports: {}
      };
      return e[i](r, r.exports, n), r.exports;
    }
    var i = {};
    return function () {
      var e = i;
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0, n(7149), n(3194), n(9302), n(4013), n(3851), n(219), n(207), n(5296);
      var t,
        a = (t = n(2394)) && t.__esModule ? t : {
          default: t
        };
      e.default = a.default;
    }(), i;
  }();
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
// ! ACCORDION

$('.accordion__wrapper').accordion({
  // active: true,
  collapsible: true,
  heightStyle: 'content',
  icons: {
    header: 'acc-icon',
    activeHeader: 'acc-icon acc-icon-active'
  }
});
const accHeader = $('.accordion__title');
const bali = $('.bali');
const yava = $('.yava');
const sulavesi = $('.sulavesi');
const calimanthan = $('.calimanthan');
const sumathra = $('.sumathra');
accHeader.on('click', function (event) {
  if ($(this).hasClass('accordion__title--yava')) {
    if ($(this).attr('aria-expanded') === "true") {
      yava.css('fill', '#FCB500');
      bali.css('fill', '#FFFFFF');
      sulavesi.css('fill', '#FFFFFF');
      calimanthan.css('fill', '#FFFFFF');
      sumathra.css('fill', '#FFFFFF');
    } else {
      yava.css('fill', '#FFFFFF');
    }
  }
  if ($(this).hasClass('accordion__title--bali')) {
    if ($(this).attr('aria-expanded') === "true") {
      bali.css('fill', '#FCB500');
      yava.css('fill', '#FFFFFF');
      sulavesi.css('fill', '#FFFFFF');
      calimanthan.css('fill', '#FFFFFF');
      sumathra.css('fill', '#FFFFFF');
    } else {
      bali.css('fill', '#FFFFFF');
    }
  }
  if ($(this).hasClass('accordion__title--sulavesi')) {
    if ($(this).attr('aria-expanded') === "true") {
      sulavesi.css('fill', '#FCB500');
      yava.css('fill', '#FFFFFF');
      bali.css('fill', '#FFFFFF');
      calimanthan.css('fill', '#FFFFFF');
      sumathra.css('fill', '#FFFFFF');
    } else {
      sulavesi.css('fill', '#FFFFFF');
    }
  }
  if ($(this).hasClass('accordion__title--calimanthan')) {
    if ($(this).attr('aria-expanded') === "true") {
      calimanthan.css('fill', '#FCB500');
      yava.css('fill', '#FFFFFF');
      bali.css('fill', '#FFFFFF');
      sulavesi.css('fill', '#FFFFFF');
      sumathra.css('fill', '#FFFFFF');
    } else {
      calimanthan.css('fill', '#FFFFFF');
    }
  }
  if ($(this).hasClass('accordion__title--sumathra')) {
    if ($(this).attr('aria-expanded') === "true") {
      sumathra.css('fill', '#FCB500');
      yava.css('fill', '#FFFFFF');
      bali.css('fill', '#FFFFFF');
      sulavesi.css('fill', '#FFFFFF');
      calimanthan.css('fill', '#FFFFFF');
    } else {
      sumathra.css('fill', '#FFFFFF');
    }
  }
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
// !BURGER

const burgerBtn = $('#burger');
const nav = $('#nav');
const navLink = $('.nav__link');
burgerBtn.on('click', function (event) {
  if (!burgerBtn.hasClass('active')) {
    nav.slideDown(300);
    burgerBtn.addClass('active');
  } else if (burgerBtn.hasClass('active')) {
    nav.slideUp(300);
    burgerBtn.removeClass('active');
  }
});
navLink.on('click', function (event) {
  nav.slideUp(300);
  burgerBtn.removeClass('active');
});
$(document).click(function (event) {
  if (!nav.is(event.target) && nav.has(event.target).length === 0 && !burgerBtn.is(event.target) && burgerBtn.has(event.target).length === 0) {
    nav.slideUp(300);
  }
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
// !CALCULATOR
const priceBtn = $('.price__button');

// * Date

const dateWrapper = $('#calc-select-date');
const datePopup = $('#calc-popup-date');
const monthList = $('.popup__month-list');
const monthItem = $('.popup__month-item--calc');
const daysList = $('.popup__days-list');
datePopup.slideToggle();
daysList.hide(300);
dateWrapper.on('click', function (event) {
  datePopup.slideToggle();
});
const monthArray = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let selectedDays;
// ! Обработка выбора месяца
monthItem.on('click', function (event) {
  let text = event.currentTarget.innerText;
  for (let i = 0; i < monthArray.length; i++) {
    // !Проверка совпадения месяца
    if (text.includes(monthArray[i])) {
      // !Удаляем активный класс если он есть
      monthItem.each(function () {
        $(this).removeClass('popup__month-item--active');
      });
      // !Добавляем активный класс для выбранного месяца
      $(event.currentTarget).addClass('popup__month-item--active');
      let nextMonth = takeNextMonth(i);
      let currentMonth = takeCurrentMonth(i);
      daysList.fadeOut(300);
      // !Вносим список дней на страницу
      // setTimeout(() => {
      daysList.html(`
					<li class="popup__days-item" tabindex="0">4.${currentMonth} - 18.${currentMonth}</li>
					<li class="popup__days-item" tabindex="0">7.${currentMonth} - 21.${currentMonth}</li>
					<li class="popup__days-item" tabindex="0">12.${currentMonth} - 26.${currentMonth}</li>
					<li class="popup__days-item" tabindex="0">20.${currentMonth} - 6.${nextMonth}</li>
				`);
      // }, 300);

      // !Анимация появления столбца с днями
      daysList.fadeIn(300);
      $('.popup__days-list').on('click', '.popup__days-item', function (event) {
        // console.log($(this).text()); // Вывод текста кликнутого элемента для примера
        $('.popup__days-item').each(function () {
          $(this).removeClass('popup__days-item--active');
        });
        $(this).addClass('popup__days-item--active'); // Добавление класса активности к кликнутому элементу
        selectedDays = $(this).text();
        // console.log(selectedDays);
      });
    }
  }
});
$(document).click(function (event) {
  if (!datePopup.is(event.target) && datePopup.has(event.target).length === 0 && !dateWrapper.is(event.target) && dateWrapper.has(event.target).length === 0) {
    datePopup.slideUp(300);
  }
});
const datePlaceholder = $('#calc-date-placeholder');
// console.log(datePlaceholder.text());
const dateBtn = $('#calc-button-date');
dateBtn.on('click', function (event) {
  if (selectedDays !== undefined && selectedDays !== null) {
    datePlaceholder.text(selectedDays);
    priceBtn.text('Узнать цену');
    $('.select--date').css({
      'outline': "none"
    });
    datePopup.slideToggle(300);
  }
});
function takeCurrentMonth(i) {
  let currentMonth = i + 1;
  // !Получаем текущий месяц числом
  if (i < 10) {
    currentMonth = '0' + currentMonth;
  } else if (i === 11) {
    currentMonth = 12;
  } else if (i === 12) {
    currentMonth = '01';
  }
  return currentMonth;
}
// !Получаем следующий месяц числом
function takeNextMonth(i) {
  let nextMonth = i + 2;
  if (i < 10) {
    nextMonth = '0' + nextMonth;
  } else if (i === 11) {
    nextMonth = '01';
  } else if (i === 12) {
    nextMonth = '02';
  }
  return nextMonth;
}

// * People

const peopleWrapper = $('#calc-select-people');
const peoplePopup = $('#calc-popup-people');
const peopleList = $('.popup__people-list');
const peoplePlaceholder = $('#calc-people-placeholder');
peoplePopup.slideToggle();
let selectedNumber;
$('.popup__people-list').on('click', '.popup__people-item--calc', function (event) {
  selectedNumber = $(this).text();
  let people = 'человек';
  if (selectedNumber === '2' || selectedNumber === '3' || selectedNumber === '4') {
    people = 'человека';
  }
  peoplePlaceholder.text(selectedNumber + " " + people);
  priceBtn.text('Узнать цену');
  $('.select--people').css({
    'outline': "none"
  });
  peoplePopup.slideToggle(300);
});
peopleWrapper.on('click', function (event) {
  peoplePopup.slideToggle();
});
$(document).click(function (event) {
  if (!peoplePopup.is(event.target) && peoplePopup.has(event.target).length === 0 && !peopleWrapper.is(event.target) && peopleWrapper.has(event.target).length === 0) {
    peoplePopup.slideUp(300);
  }
});

// * Options

const optionsWrapper = $('#calc-select-options');
const optionsPopup = $('#calc-popup-options');
optionsPopup.slideToggle();
optionsWrapper.on('click', function (event) {
  optionsPopup.slideToggle();
});
const optionsList = $('.popup__options-list--calc');
const optionsItem = $('.popup__options-item--calc');
const optionsBtn = $('#calc-button-options');
const optionsPlaceholder = $('#calc-options-placeholder');
optionsList.on('click', '.popup__options-item', function (event) {
  // console.log($(this).text());
  $(this).toggleClass('popup__options-item--checked');
});
optionsBtn.on('click', function () {
  let selectedOptions;
  const optionsItem = $('.popup__options-item');
  optionsList.children('.popup__options-item--checked').each(function () {
    if (selectedOptions) {
      selectedOptions = selectedOptions + ', ' + $(this).text().toLowerCase();
      // console.log(selectedOptions);
    } else selectedOptions = $(this).text();
  });
  if (selectedOptions !== undefined && selectedOptions !== null) {
    // console.log(selectedOptions);
    optionsPlaceholder.text(selectedOptions);
    priceBtn.text('Узнать цену');
    $('.select--options').css({
      'outline': "none"
    });
    optionsPopup.slideToggle(300);
  } else {
    optionsPlaceholder.text('Выбери нужные опции');
    optionsPopup.slideToggle(300);
  }
});
$(document).click(function (event) {
  if (!optionsPopup.is(event.target) && optionsPopup.has(event.target).length === 0 && !optionsWrapper.is(event.target) && optionsWrapper.has(event.target).length === 0) {
    optionsPopup.slideUp(300);
  }
});

// !РАСЧЕТ СТОИМОСТИ

priceBtn.on('click', function () {
  if (datePlaceholder.text() === 'Выбери дату путешествия') {
    $('#calc-select-date').css({
      'outline': "1px solid rgba(255, 0, 0, 0.5)"
    });
  }
  if (peoplePlaceholder.text() === 'Укажи количество человек') {
    $('#calc-select-people').css({
      'outline': "1px solid rgba(255, 0, 0, 0.5)"
    });
  }
  if (datePlaceholder.text() !== 'Выбери дату путешествия' && peoplePlaceholder.text() !== 'Укажи количество человек') priceBtn.text('2 393 9393₽');
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
// * Date

const formDateWrapper = $('#form-select-date');
const formDatePopup = $('#form-popup-date');
const formMonthItem = $('.popup__month-item--form');
const formDaysList = $('.popup__days-list');
formDatePopup.slideUp();
formDaysList.hide(300);
formDateWrapper.on('click', function (event) {
  formDatePopup.slideToggle();
});
const monthArray = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let selectedDays;
// ! Обработка выбора месяца
formMonthItem.on('click', function (event) {
  let text = event.currentTarget.innerText;
  for (let i = 0; i < monthArray.length; i++) {
    // !Проверка совпадения месяца
    if (text.includes(monthArray[i])) {
      // !Удаляем активный класс если он есть
      formMonthItem.each(function () {
        $(this).removeClass('popup__month-item--active');
      });
      // !Добавляем активный класс для выбранного месяца
      $(event.currentTarget).addClass('popup__month-item--active');
      let nextMonth = takeNextMonth(i);
      let currentMonth = takeCurrentMonth(i);
      // !Вносим список дней на страницу
      formDaysList.fadeOut(300);
      // setTimeout(() => {
      formDaysList.html(`
					<li class="popup__days-item" tabindex="0">4.${currentMonth} - 18.${currentMonth}</li>
					<li class="popup__days-item" tabindex="0">7.${currentMonth} - 21.${currentMonth}</li>
					<li class="popup__days-item" tabindex="0">12.${currentMonth} - 26.${currentMonth}</li>
					<li class="popup__days-item" tabindex="0">20.${currentMonth} - 6.${nextMonth}</li>
					`);
      // !Анимация появления столбца с днями
      formDaysList.fadeIn(300);
      // }, 300);

      $('.popup__days-list').on('click', '.popup__days-item', function (event) {
        // console.log($(this).text()); // Вывод текста кликнутого элемента для примера
        $('.popup__days-item').each(function () {
          $(this).removeClass('popup__days-item--active');
        });
        $(this).addClass('popup__days-item--active'); // Добавление класса активности к кликнутому элементу
        selectedDays = $(this).text();
        // console.log(selectedDays);
      });
    }
  }
});
$(document).click(function (event) {
  if (!formDatePopup.is(event.target) && formDatePopup.has(event.target).length === 0 && !formDateWrapper.is(event.target) && formDateWrapper.has(event.target).length === 0) {
    formDatePopup.slideUp(300);
  }
});
const dateInput = $('#date');
const formDatePlaceholder = $('#form-date-placeholder');
// console.log(formDatePlaceholder.text());
const dateBtn = $('#form-button-date');
dateBtn.on('click', function (event) {
  if (selectedDays !== undefined && selectedDays !== null) {
    formDatePlaceholder.text(selectedDays);
    dateInput.val(selectedDays);
    // console.log('dateInput.val(): ' + dateInput.val());
    $('.select--date').css({
      'outline': "none"
    });
    formDatePopup.slideToggle(300);
  }
});
function takeCurrentMonth(i) {
  let currentMonth = i + 1;
  // !Получаем текущий месяц числом
  if (i < 10) {
    currentMonth = '0' + currentMonth;
  } else if (i === 11) {
    currentMonth = 12;
  } else if (i === 12) {
    currentMonth = '01';
  }
  return currentMonth;
}
// !Получаем следующий месяц числом
function takeNextMonth(i) {
  let nextMonth = i + 2;
  if (i < 10) {
    nextMonth = '0' + nextMonth;
  } else if (i === 11) {
    nextMonth = '01';
  } else if (i === 12) {
    nextMonth = '02';
  }
  return nextMonth;
}
function translateDateRange(dateRange) {
  // Создаем массив с названиями месяцев
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  // Разбиваем входной диапазон дат на отдельные даты
  const dates = dateRange.split(' - ');
  // console.log(dates);

  // Функция для перевода одной даты
  function translateDate(date) {
    const [day, month] = date.split('.');
    return `${parseInt(day)} ${months[parseInt(month) - 1]}`;
  }

  // Переводим каждую из дат
  const translatedDates = dates.map(translateDate);

  // Соединяем переведенные даты в новый диапазон
  return translatedDates.join(' - ');
}

// * People

const formPeopleWrapper = $('#form-select-people');
const formPeoplePopup = $('#form-popup-people');
const formPeoplePlaceholder = $('#form-people-placeholder');
formPeoplePopup.slideUp();
let selectedNumber;
let peopleResult;
const peopleInput = $('#people');
$('.popup__people-list').on('click', '.popup__people-item--form', function (event) {
  selectedNumber = $(this).text();
  let people = 'человек';
  if (selectedNumber === '2' || selectedNumber === '3' || selectedNumber === '4') {
    people = 'человека';
  }
  peopleResult = selectedNumber + " " + people;
  formPeoplePlaceholder.text(peopleResult);
  // console.log('selectedNumber: ' + selectedNumber);
  peopleInput.val(selectedNumber);
  // console.log('peopleInput.val(): ' + peopleInput.val());
  $('.select--people').css({
    'outline': "none"
  });
  formPeoplePopup.slideToggle(300);
});
formPeopleWrapper.on('click', function (event) {
  formPeoplePopup.slideToggle();
});
$(document).click(function (event) {
  if (!formPeoplePopup.is(event.target) && formPeoplePopup.has(event.target).length === 0 && !formPeopleWrapper.is(event.target) && formPeopleWrapper.has(event.target).length === 0) {
    formPeoplePopup.slideUp(300);
  }
});

// * Options

const formOptionsWrapper = $('#form-select-options');
// console.log(formOptionsWrapper);
const formOptionsPopup = $('#form-popup-options');
formOptionsPopup.slideUp();
formOptionsWrapper.on('click', function (event) {
  formOptionsPopup.slideToggle();
});
const formOptionsList = $('#form-options-list');
const formOptionsBtn = $('#form-button-options');
const formOptionsPlaceholder = $('#form-options-placeholder');
formOptionsList.on('click', '.popup__options-item--form', function (event) {
  // console.log($(this).text());
  $(this).toggleClass('popup__options-item--checked');
});
const optionsInput = $('#options');
formOptionsBtn.on('click', function () {
  let selectedOptions;
  formOptionsList.children('.popup__options-item--checked').each(function () {
    if (selectedOptions) {
      selectedOptions = selectedOptions + ', ' + $(this).text().toLowerCase();
      // console.log(selectedOptions);
    } else selectedOptions = $(this).text();
  });
  if (selectedOptions !== undefined && selectedOptions !== null) {
    // console.log(selectedOptions);
    formOptionsPlaceholder.text(selectedOptions);
    optionsInput.val(selectedOptions);
    // console.log('optionsInput.val(): ' + optionsInput.val());
    $('.select--options').css({
      'outline': "none"
    });
    formOptionsPopup.slideToggle(300);
  } else {
    formOptionsPlaceholder.text('Выбери нужные опции');
    optionsInput.val('');
    // console.log('optionsInput.val(): ' + optionsInput.val());

    formOptionsPopup.slideToggle(300);
  }
});
$(document).click(function (event) {
  if (!formOptionsPopup.is(event.target) && formOptionsPopup.has(event.target).length === 0 && !formOptionsWrapper.is(event.target) && formOptionsWrapper.has(event.target).length === 0) {
    formOptionsPopup.slideUp(300);
  }
});
const nameInput = document.querySelector('#name');
const mailInput = document.querySelector('#mail');
const telinput = document.querySelector('#tel');
const telMask = new Inputmask('+7 (999) 999-99-99', {
  "placeholder": "+7 (***) ***-**-**"
});
telMask.mask(telinput);
const namePlaceholder = nameInput.placeholder;
nameInput.addEventListener('mouseover', () => {
  nameInput.placeholder = 'Фамилия Имя Отчество';
});
nameInput.addEventListener('mouseout', () => {
  nameInput.placeholder = namePlaceholder;
});
const mailPlaceholder = mailInput.placeholder;
mailInput.addEventListener('mouseover', () => {
  mailInput.placeholder = '___@___.__';
});
mailInput.addEventListener('mouseout', () => {
  mailInput.placeholder = mailPlaceholder;
});
const validator = new JustValidate('.form', {
  errorLabelCssClass: 'select-error'
});
validator.addField('#date', [{
  rule: 'required',
  errorMessage: 'Выберите дату'
}]).addField('#people', [{
  rule: 'required',
  errorMessage: 'Укажите количество человек'
}]).addField('#name', [{
  rule: 'required',
  errorMessage: 'Введите ваш ФИО'
}, {
  rule: 'customRegexp',
  value: /^[А-Яа-я]{2,}\s[А-Яа-я]{2,}\s[А-Яа-я]{2,}$/,
  errorMessage: 'Некорректный ввод'
}]).addField('#mail', [{
  rule: 'required',
  errorMessage: 'Введите email'
}, {
  rule: 'email',
  errorMessage: 'Некорректный email'
}]).addField('#tel', [{
  rule: 'required',
  errorMessage: 'Введите телефон'
}, {
  validator(value) {
    const phone = telinput.inputmask.unmaskedvalue();
    return !!(Number(phone) && phone.length === 10);
  },
  errorMessage: 'Некорректный номер'
}]).onSuccess(event => {
  event.preventDefault(); // Prevent the default form submission
  // console.log(event);
  const target = event.target;
  const formData = {
    date: dateInput.val(),
    people: peopleInput.val(),
    options: optionsInput.val(),
    name: $('#name').val(),
    mail: $('#mail').val(),
    tel: $('#tel').val()
  };
  $('.form__details').text(`${translateDateRange(dateInput.val())}, ${peopleResult}`);
  $('.form__price').text(`${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}₽`);
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    type: 'POST',
    data: formData,
    success(data) {
      console.log(data);
    },
    error() {
      console.log('err');
    }
  });
});

// ! FOOTER CALLBACK

const footerValidator = new JustValidate('.footer__form', {
  errorLabelCssClass: 'select-error--footer'
});
footerValidator.addField('#footer-email', [{
  rule: 'required',
  errorMessage: 'Введите email',
  successMessage: 'Готово'
}, {
  rule: 'email',
  errorMessage: 'Некорректный email'
}]).onSuccess(event => {
  event.preventDefault(); // Prevent the default form submission
  // console.log(event);
  const formData = {
    email: $('#footer-email').val()
  };
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    type: 'POST',
    data: formData,
    success(data) {
      console.log(data);
      $('.success-message').css('display', 'block');
    },
    error() {
      console.log('err');
    }
  });
});
})();

/******/ })()
;