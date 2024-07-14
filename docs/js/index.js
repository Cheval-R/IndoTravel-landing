/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
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

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
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

/******/ })()
;