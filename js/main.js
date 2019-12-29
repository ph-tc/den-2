"use strict";

!function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      configurable: !1,
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 1);
}([function (e, t, n) {
  "use strict";

  !function () {
    var e = document.querySelector("[data-btn]"),
      t = document.querySelector(".main--link__text"),
      n = document.querySelector("[data-template]");
    if (e) if ("chcbox" === e.dataset.btn) {
      e.appendChild(n.content);
      var r = document.querySelector(".checkbox__btn-square"),
        o = document.querySelector(".checkbox__btn-content"),
        c = document.querySelector("[data-href]");
      e.addEventListener("click", function (n) {
        var target = n.target;

        if (target.classList.contains('checkbox__btn-square')) {
          var link = document.querySelector('.main--link');
          e.dataset.ready || (n.preventDefault(), r.classList.add("checked"), n.target !== c ? (e.dataset.ready = "ready", setTimeout(function () {
            t.classList.remove("hidden"), o.classList.add("visually-hidden");
            link.href = '#btnLink';
          }, 300)) : window.location.href = c.dataset.href);
        }
      });
    } else t.classList.remove("hidden");
  }();
}, function (e, t, n) {
  n(0), e.exports = n(7);
},,,,,, function (e, t) {}]);


