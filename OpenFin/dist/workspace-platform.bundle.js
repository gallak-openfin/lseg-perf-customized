var Xu = Object.defineProperty;
var el = (f, o, c) => o in f ? Xu(f, o, { enumerable: !0, configurable: !0, writable: !0, value: c }) : f[o] = c;
var ys = (f, o, c) => el(f, typeof o != "symbol" ? o + "" : o, c);
function tl(f, o) {
  for (var c = 0; c < o.length; c++) {
    const d = o[c];
    if (typeof d != "string" && !Array.isArray(d)) {
      for (const b in d)
        if (b !== "default" && !(b in f)) {
          const y = Object.getOwnPropertyDescriptor(d, b);
          y && Object.defineProperty(f, b, y.get ? y : {
            enumerable: !0,
            get: () => d[b]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(f, Symbol.toStringTag, { value: "Module" }));
}
var ir = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function si(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
function Ls(f) {
  if (f.__esModule) return f;
  var o = f.default;
  if (typeof o == "function") {
    var c = function d() {
      return this instanceof d ? Reflect.construct(o, arguments, this.constructor) : o.apply(this, arguments);
    };
    c.prototype = o.prototype;
  } else c = {};
  return Object.defineProperty(c, "__esModule", { value: !0 }), Object.keys(f).forEach(function(d) {
    var b = Object.getOwnPropertyDescriptor(f, d);
    Object.defineProperty(c, d, b.get ? b : {
      enumerable: !0,
      get: function() {
        return f[d];
      }
    });
  }), c;
}
var Vs = { exports: {} }, Us = { exports: {} };
(function(f, o) {
  ((c, d) => {
    f.exports = d();
  })(ir, function() {
    var c = function(t, a) {
      return (c = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(s, l) {
        s.__proto__ = l;
      } : function(s, l) {
        for (var p in l) Object.prototype.hasOwnProperty.call(l, p) && (s[p] = l[p]);
      }))(t, a);
    }, d = function() {
      return (d = Object.assign || function(t) {
        for (var a, s = 1, l = arguments.length; s < l; s++) for (var p in a = arguments[s]) Object.prototype.hasOwnProperty.call(a, p) && (t[p] = a[p]);
        return t;
      }).apply(this, arguments);
    };
    function b(t, a, s) {
      for (var l, p = 0, h = a.length; p < h; p++) !l && p in a || ((l = l || Array.prototype.slice.call(a, 0, p))[p] = a[p]);
      return t.concat(l || Array.prototype.slice.call(a));
    }
    var y = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : ir, x = Object.keys, M = Array.isArray;
    function R(t, a) {
      return typeof a == "object" && x(a).forEach(function(s) {
        t[s] = a[s];
      }), t;
    }
    typeof Promise > "u" || y.Promise || (y.Promise = Promise);
    var V = Object.getPrototypeOf, J = {}.hasOwnProperty;
    function X(t, a) {
      return J.call(t, a);
    }
    function U(t, a) {
      typeof a == "function" && (a = a(V(t))), (typeof Reflect > "u" ? x : Reflect.ownKeys)(a).forEach(function(s) {
        me(t, s, a[s]);
      });
    }
    var B = Object.defineProperty;
    function me(t, a, s, l) {
      B(t, a, R(s && X(s, "get") && typeof s.get == "function" ? { get: s.get, set: s.set, configurable: !0 } : { value: s, configurable: !0, writable: !0 }, l));
    }
    function ge(t) {
      return { from: function(a) {
        return t.prototype = Object.create(a.prototype), me(t.prototype, "constructor", t), { extend: U.bind(null, t.prototype) };
      } };
    }
    var q = Object.getOwnPropertyDescriptor, Se = [].slice;
    function Y(t, a, s) {
      return Se.call(t, a, s);
    }
    function ve(t, a) {
      return a(t);
    }
    function te(t) {
      if (!t) throw new Error("Assertion Failed");
    }
    function xe(t) {
      y.setImmediate ? setImmediate(t) : setTimeout(t, 0);
    }
    function oe(t, a) {
      if (typeof a == "string" && X(t, a)) return t[a];
      if (!a) return t;
      if (typeof a != "string") {
        for (var s = [], l = 0, p = a.length; l < p; ++l) {
          var h = oe(t, a[l]);
          s.push(h);
        }
        return s;
      }
      var g, k = a.indexOf(".");
      return k === -1 || (g = t[a.substr(0, k)]) == null ? void 0 : oe(g, a.substr(k + 1));
    }
    function ie(t, a, s) {
      if (t && a !== void 0 && !("isFrozen" in Object && Object.isFrozen(t))) if (typeof a != "string" && "length" in a) {
        te(typeof s != "string" && "length" in s);
        for (var l = 0, p = a.length; l < p; ++l) ie(t, a[l], s[l]);
      } else {
        var h, g, k = a.indexOf(".");
        k !== -1 ? (h = a.substr(0, k), (k = a.substr(k + 1)) === "" ? s === void 0 ? M(t) && !isNaN(parseInt(h)) ? t.splice(h, 1) : delete t[h] : t[h] = s : ie(g = (g = t[h]) && X(t, h) ? g : t[h] = {}, k, s)) : s === void 0 ? M(t) && !isNaN(parseInt(a)) ? t.splice(a, 1) : delete t[a] : t[a] = s;
      }
    }
    function lt(t) {
      var a, s = {};
      for (a in t) X(t, a) && (s[a] = t[a]);
      return s;
    }
    var at = [].concat;
    function qe(t) {
      return at.apply([], t);
    }
    var ae = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(qe([8, 16, 32, 64].map(function(t) {
      return ["Int", "Uint", "Float"].map(function(a) {
        return a + t + "Array";
      });
    }))).filter(function(t) {
      return y[t];
    }), ut = new Set(ae.map(function(t) {
      return y[t];
    })), Ot = null;
    function Le(t) {
      return Ot = /* @__PURE__ */ new WeakMap(), t = function a(s) {
        if (!s || typeof s != "object") return s;
        var l = Ot.get(s);
        if (l) return l;
        if (M(s)) {
          l = [], Ot.set(s, l);
          for (var p = 0, h = s.length; p < h; ++p) l.push(a(s[p]));
        } else if (ut.has(s.constructor)) l = s;
        else {
          var g, k = V(s);
          for (g in l = k === Object.prototype ? {} : Object.create(k), Ot.set(s, l), s) X(s, g) && (l[g] = a(s[g]));
        }
        return l;
      }(t), Ot = null, t;
    }
    var Ct = {}.toString;
    function Ne(t) {
      return Ct.call(t).slice(8, -1);
    }
    var Pt = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", _t = typeof Pt == "symbol" ? function(t) {
      var a;
      return t != null && (a = t[Pt]) && a.apply(t);
    } : function() {
      return null;
    };
    function mt(t, a) {
      a = t.indexOf(a), 0 <= a && t.splice(a, 1);
    }
    var ft = {};
    function Ke(t) {
      var a, s, l, p;
      if (arguments.length === 1) {
        if (M(t)) return t.slice();
        if (this === ft && typeof t == "string") return [t];
        if (p = _t(t)) for (s = []; !(l = p.next()).done; ) s.push(l.value);
        else {
          if (t == null) return [t];
          if (typeof (a = t.length) != "number") return [t];
          for (s = new Array(a); a--; ) s[a] = t[a];
        }
      } else for (a = arguments.length, s = new Array(a); a--; ) s[a] = arguments[a];
      return s;
    }
    var W = typeof Symbol < "u" ? function(t) {
      return t[Symbol.toStringTag] === "AsyncFunction";
    } : function() {
      return !1;
    }, ae = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], ze = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(ae), Ee = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
    function Re(t, a) {
      this.name = t, this.message = a;
    }
    function Xe(t, a) {
      return t + ". Errors: " + Object.keys(a).map(function(s) {
        return a[s].toString();
      }).filter(function(s, l, p) {
        return p.indexOf(s) === l;
      }).join(`
`);
    }
    function et(t, a, s, l) {
      this.failures = a, this.failedKeys = l, this.successCount = s, this.message = Xe(t, a);
    }
    function Ve(t, a) {
      this.name = "BulkError", this.failures = Object.keys(a).map(function(s) {
        return a[s];
      }), this.failuresByPos = a, this.message = Xe(t, this.failures);
    }
    ge(Re).from(Error).extend({ toString: function() {
      return this.name + ": " + this.message;
    } }), ge(et).from(Re), ge(Ve).from(Re);
    var Rt = ze.reduce(function(t, a) {
      return t[a] = a + "Error", t;
    }, {}), Mt = Re, Pe = ze.reduce(function(t, a) {
      var s = a + "Error";
      function l(p, h) {
        this.name = s, p ? typeof p == "string" ? (this.message = "".concat(p).concat(h ? `
 ` + h : ""), this.inner = h || null) : typeof p == "object" && (this.message = "".concat(p.name, " ").concat(p.message), this.inner = p) : (this.message = Ee[a] || s, this.inner = null);
      }
      return ge(l).from(Mt), t[a] = l, t;
    }, {}), Vt = (Pe.Syntax = SyntaxError, Pe.Type = TypeError, Pe.Range = RangeError, ae.reduce(function(t, a) {
      return t[a + "Error"] = Pe[a], t;
    }, {}));
    ae = ze.reduce(function(t, a) {
      return ["Syntax", "Type", "Range"].indexOf(a) === -1 && (t[a + "Error"] = Pe[a]), t;
    }, {});
    function C() {
    }
    function G(t) {
      return t;
    }
    function z(t, a) {
      return t == null || t === G ? a : function(s) {
        return a(t(s));
      };
    }
    function ne(t, a) {
      return function() {
        t.apply(this, arguments), a.apply(this, arguments);
      };
    }
    function De(t, a) {
      return t === C ? a : function() {
        var s = t.apply(this, arguments), l = (s !== void 0 && (arguments[0] = s), this.onsuccess), p = this.onerror, h = (this.onsuccess = null, this.onerror = null, a.apply(this, arguments));
        return l && (this.onsuccess = this.onsuccess ? ne(l, this.onsuccess) : l), p && (this.onerror = this.onerror ? ne(p, this.onerror) : p), h !== void 0 ? h : s;
      };
    }
    function $e(t, a) {
      return t === C ? a : function() {
        t.apply(this, arguments);
        var s = this.onsuccess, l = this.onerror;
        this.onsuccess = this.onerror = null, a.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? ne(s, this.onsuccess) : s), l && (this.onerror = this.onerror ? ne(l, this.onerror) : l);
      };
    }
    function Oe(t, a) {
      return t === C ? a : function(p) {
        var l = t.apply(this, arguments), p = (R(p, l), this.onsuccess), h = this.onerror, g = (this.onsuccess = null, this.onerror = null, a.apply(this, arguments));
        return p && (this.onsuccess = this.onsuccess ? ne(p, this.onsuccess) : p), h && (this.onerror = this.onerror ? ne(h, this.onerror) : h), l === void 0 ? g === void 0 ? void 0 : g : R(l, g);
      };
    }
    function kt(t, a) {
      return t === C ? a : function() {
        return a.apply(this, arguments) !== !1 && t.apply(this, arguments);
      };
    }
    function ht(t, a) {
      return t === C ? a : function() {
        var s = t.apply(this, arguments);
        if (s && typeof s.then == "function") {
          for (var l = this, p = arguments.length, h = new Array(p); p--; ) h[p] = arguments[p];
          return s.then(function() {
            return a.apply(l, h);
          });
        }
        return a.apply(this, arguments);
      };
    }
    ae.ModifyError = et, ae.DexieError = Re, ae.BulkError = Ve;
    var _e = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
    function fn(t) {
      _e = t;
    }
    var Jt = {}, hn = 100, Ut = typeof Promise > "u" ? [] : (ze = Promise.resolve(), typeof crypto < "u" && crypto.subtle ? [Ut = crypto.subtle.digest("SHA-512", new Uint8Array([0])), V(Ut), ze] : [ze, V(ze), ze]), ze = Ut[0], sn = Ut[1], sn = sn && sn.then, be = ze && ze.constructor, dt = !!Ut[2], Gt = function(t, a) {
      We.push([t, a]), rt && (queueMicrotask(Ye), rt = !1);
    }, dn = !0, rt = !0, It = [], $t = [], Qt = G, jt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: C, pgp: !1, env: {}, finalize: C }, Ie = jt, We = [], cn = 0, w = [];
    function P(t) {
      if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
      this._listeners = [], this._lib = !1;
      var a = this._PSD = Ie;
      if (typeof t != "function") {
        if (t !== Jt) throw new TypeError("Not a function");
        this._state = arguments[1], this._value = arguments[2], this._state === !1 && Te(this, this._value);
      } else this._state = null, this._value = null, ++a.ref, function s(l, p) {
        try {
          p(function(h) {
            if (l._state === null) {
              if (h === l) throw new TypeError("A promise cannot be resolved with itself.");
              var g = l._lib && Xt();
              h && typeof h.then == "function" ? s(l, function(k, T) {
                h instanceof P ? h._then(k, T) : h.then(k, T);
              }) : (l._state = !0, l._value = h, Ge(l)), g && un();
            }
          }, Te.bind(null, l));
        } catch (h) {
          Te(l, h);
        }
      }(this, t);
    }
    var ee = { get: function() {
      var t = Ie, a = Da;
      function s(l, p) {
        var h = this, g = !t.global && (t !== Ie || a !== Da), k = g && !kn(), T = new P(function(L, E) {
          je(h, new ye(Vr(l, t, g, k), Vr(p, t, g, k), L, E, t));
        });
        return this._consoleTask && (T._consoleTask = this._consoleTask), T;
      }
      return s.prototype = Jt, s;
    }, set: function(t) {
      me(this, "then", t && t.prototype === Jt ? ee : { get: function() {
        return t;
      }, set: ee.set });
    } };
    function ye(t, a, s, l, p) {
      this.onFulfilled = typeof t == "function" ? t : null, this.onRejected = typeof a == "function" ? a : null, this.resolve = s, this.reject = l, this.psd = p;
    }
    function Te(t, a) {
      var s, l;
      $t.push(a), t._state === null && (s = t._lib && Xt(), a = Qt(a), t._state = !1, t._value = a, l = t, It.some(function(p) {
        return p._value === l._value;
      }) || It.push(l), Ge(t), s) && un();
    }
    function Ge(t) {
      var a = t._listeners;
      t._listeners = [];
      for (var s = 0, l = a.length; s < l; ++s) je(t, a[s]);
      var p = t._PSD;
      --p.ref || p.finalize(), cn === 0 && (++cn, Gt(function() {
        --cn == 0 && ra();
      }, []));
    }
    function je(t, a) {
      if (t._state === null) t._listeners.push(a);
      else {
        var s = t._state ? a.onFulfilled : a.onRejected;
        if (s === null) return (t._state ? a.resolve : a.reject)(t._value);
        ++a.psd.ref, ++cn, Gt(wt, [s, t, a]);
      }
    }
    function wt(t, a, s) {
      try {
        var l, p = a._value;
        !a._state && $t.length && ($t = []), l = _e && a._consoleTask ? a._consoleTask.run(function() {
          return t(p);
        }) : t(p), a._state || $t.indexOf(p) !== -1 || ((h) => {
          for (var g = It.length; g; ) if (It[--g]._value === h._value) return It.splice(g, 1);
        })(a), s.resolve(l);
      } catch (h) {
        s.reject(h);
      } finally {
        --cn == 0 && ra(), --s.psd.ref || s.psd.finalize();
      }
    }
    function Ye() {
      jn(jt, function() {
        Xt() && un();
      });
    }
    function Xt() {
      var t = dn;
      return rt = dn = !1, t;
    }
    function un() {
      var t, a, s;
      do
        for (; 0 < We.length; ) for (t = We, We = [], s = t.length, a = 0; a < s; ++a) {
          var l = t[a];
          l[0].apply(null, l[1]);
        }
      while (0 < We.length);
      rt = dn = !0;
    }
    function ra() {
      for (var t = It, a = (It = [], t.forEach(function(l) {
        l._PSD.onunhandled.call(null, l._value, l);
      }), w.slice(0)), s = a.length; s; ) a[--s]();
    }
    function Pn(t) {
      return new P(Jt, !1, t);
    }
    function St(t, a) {
      var s = Ie;
      return function() {
        var l = Xt(), p = Ie;
        try {
          return Mn(s, !0), t.apply(this, arguments);
        } catch (h) {
          a && a(h);
        } finally {
          Mn(p, !1), l && un();
        }
      };
    }
    U(P.prototype, { then: ee, _then: function(t, a) {
      je(this, new ye(null, null, t, a, Ie));
    }, catch: function(t) {
      var a, s;
      return arguments.length === 1 ? this.then(null, t) : (a = t, s = arguments[1], typeof a == "function" ? this.then(null, function(l) {
        return (l instanceof a ? s : Pn)(l);
      }) : this.then(null, function(l) {
        return (l && l.name === a ? s : Pn)(l);
      }));
    }, finally: function(t) {
      return this.then(function(a) {
        return P.resolve(t()).then(function() {
          return a;
        });
      }, function(a) {
        return P.resolve(t()).then(function() {
          return Pn(a);
        });
      });
    }, timeout: function(t, a) {
      var s = this;
      return t < 1 / 0 ? new P(function(l, p) {
        var h = setTimeout(function() {
          return p(new Pe.Timeout(a));
        }, t);
        s.then(l, p).finally(clearTimeout.bind(null, h));
      }) : this;
    } }), typeof Symbol < "u" && Symbol.toStringTag && me(P.prototype, Symbol.toStringTag, "Dexie.Promise"), jt.env = Lr(), U(P, { all: function() {
      var t = Ke.apply(null, arguments).map(wa);
      return new P(function(a, s) {
        t.length === 0 && a([]);
        var l = t.length;
        t.forEach(function(p, h) {
          return P.resolve(p).then(function(g) {
            t[h] = g, --l || a(t);
          }, s);
        });
      });
    }, resolve: function(t) {
      return t instanceof P ? t : t && typeof t.then == "function" ? new P(function(a, s) {
        t.then(a, s);
      }) : new P(Jt, !0, t);
    }, reject: Pn, race: function() {
      var t = Ke.apply(null, arguments).map(wa);
      return new P(function(a, s) {
        t.map(function(l) {
          return P.resolve(l).then(a, s);
        });
      });
    }, PSD: { get: function() {
      return Ie;
    }, set: function(t) {
      return Ie = t;
    } }, totalEchoes: { get: function() {
      return Da;
    } }, newPSD: Cn, usePSD: jn, scheduler: { get: function() {
      return Gt;
    }, set: function(t) {
      Gt = t;
    } }, rejectionMapper: { get: function() {
      return Qt;
    }, set: function(t) {
      Qt = t;
    } }, follow: function(t, a) {
      return new P(function(s, l) {
        return Cn(function(p, h) {
          var g = Ie;
          g.unhandleds = [], g.onunhandled = h, g.finalize = ne(function() {
            var k, T = this;
            k = function() {
              T.unhandleds.length === 0 ? p() : h(T.unhandleds[0]);
            }, w.push(function L() {
              k(), w.splice(w.indexOf(L), 1);
            }), ++cn, Gt(function() {
              --cn == 0 && ra();
            }, []);
          }, g.finalize), t();
        }, a, s, l);
      });
    } }), be && (be.allSettled && me(P, "allSettled", function() {
      var t = Ke.apply(null, arguments).map(wa);
      return new P(function(a) {
        t.length === 0 && a([]);
        var s = t.length, l = new Array(s);
        t.forEach(function(p, h) {
          return P.resolve(p).then(function(g) {
            return l[h] = { status: "fulfilled", value: g };
          }, function(g) {
            return l[h] = { status: "rejected", reason: g };
          }).then(function() {
            return --s || a(l);
          });
        });
      });
    }), be.any && typeof AggregateError < "u" && me(P, "any", function() {
      var t = Ke.apply(null, arguments).map(wa);
      return new P(function(a, s) {
        t.length === 0 && s(new AggregateError([]));
        var l = t.length, p = new Array(l);
        t.forEach(function(h, g) {
          return P.resolve(h).then(function(k) {
            return a(k);
          }, function(k) {
            p[g] = k, --l || s(new AggregateError(p));
          });
        });
      });
    }), be.withResolvers) && (P.withResolvers = be.withResolvers);
    var Kt = { awaits: 0, echoes: 0, id: 0 }, lr = 0, ma = [], xn = 0, Da = 0, se = 0;
    function Cn(t, g, s, l) {
      var p = Ie, h = Object.create(p), g = (h.parent = p, h.ref = 0, h.global = !1, h.id = ++se, jt.env, h.env = dt ? { Promise: P, PromiseProp: { value: P, configurable: !0, writable: !0 }, all: P.all, race: P.race, allSettled: P.allSettled, any: P.any, resolve: P.resolve, reject: P.reject } : {}, g && R(h, g), ++p.ref, h.finalize = function() {
        --this.parent.ref || this.parent.finalize();
      }, jn(h, t, s, l));
      return h.ref === 0 && h.finalize(), g;
    }
    function $n() {
      return Kt.id || (Kt.id = ++lr), ++Kt.awaits, Kt.echoes += hn, Kt.id;
    }
    function kn() {
      return !!Kt.awaits && (--Kt.awaits == 0 && (Kt.id = 0), Kt.echoes = Kt.awaits * hn, !0);
    }
    function wa(t) {
      return Kt.echoes && t && t.constructor === be ? ($n(), t.then(function(a) {
        return kn(), a;
      }, function(a) {
        return kn(), Bt(a);
      })) : t;
    }
    function Fr() {
      var t = ma[ma.length - 1];
      ma.pop(), Mn(t, !1);
    }
    function Mn(t, a) {
      var s, l, p = Ie;
      (a ? !Kt.echoes || xn++ && t === Ie : !xn || --xn && t === Ie) || queueMicrotask(a ? (function(h) {
        ++Da, Kt.echoes && --Kt.echoes != 0 || (Kt.echoes = Kt.awaits = Kt.id = 0), ma.push(Ie), Mn(h, !0);
      }).bind(null, t) : Fr), t !== Ie && (Ie = t, p === jt && (jt.env = Lr()), dt) && (s = jt.env.Promise, l = t.env, p.global || t.global) && (Object.defineProperty(y, "Promise", l.PromiseProp), s.all = l.all, s.race = l.race, s.resolve = l.resolve, s.reject = l.reject, l.allSettled && (s.allSettled = l.allSettled), l.any) && (s.any = l.any);
    }
    function Lr() {
      var t = y.Promise;
      return dt ? { Promise: t, PromiseProp: Object.getOwnPropertyDescriptor(y, "Promise"), all: t.all, race: t.race, allSettled: t.allSettled, any: t.any, resolve: t.resolve, reject: t.reject } : {};
    }
    function jn(t, a, s, l, p) {
      var h = Ie;
      try {
        return Mn(t, !0), a(s, l, p);
      } finally {
        Mn(h, !1);
      }
    }
    function Vr(t, a, s, l) {
      return typeof t != "function" ? t : function() {
        var p = Ie;
        s && $n(), Mn(a, !0);
        try {
          return t.apply(this, arguments);
        } finally {
          Mn(p, !1), l && queueMicrotask(kn);
        }
      };
    }
    function dr(t) {
      Promise === be && Kt.echoes === 0 ? xn === 0 ? t() : enqueueNativeMicroTask(t) : setTimeout(t, 0);
    }
    ("" + sn).indexOf("[native code]") === -1 && ($n = kn = C);
    var Bt = P.reject, Kn = "￿", an = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", pr = "String expected.", Hn = [], Oa = "__dbnames", fr = "readonly", de = "readwrite";
    function In(t, a) {
      return t ? a ? function() {
        return t.apply(this, arguments) && a.apply(this, arguments);
      } : t : a;
    }
    var Wa = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
    function Ue(t) {
      return typeof t != "string" || /\./.test(t) ? function(a) {
        return a;
      } : function(a) {
        return a[t] === void 0 && t in a && delete (a = Le(a))[t], a;
      };
    }
    function Ze() {
      throw Pe.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
    }
    function ot(t, a) {
      try {
        var s = hr(t), l = hr(a);
        if (s !== l) return s === "Array" ? 1 : l === "Array" ? -1 : s === "binary" ? 1 : l === "binary" ? -1 : s === "string" ? 1 : l === "string" ? -1 : s === "Date" ? 1 : l !== "Date" ? NaN : -1;
        switch (s) {
          case "number":
          case "Date":
          case "string":
            return a < t ? 1 : t < a ? -1 : 0;
          case "binary":
            for (var p = Ba(t), h = Ba(a), g = p.length, k = h.length, T = g < k ? g : k, L = 0; L < T; ++L) if (p[L] !== h[L]) return p[L] < h[L] ? -1 : 1;
            return g === k ? 0 : g < k ? -1 : 1;
          case "Array":
            for (var E = t, A = a, D = E.length, O = A.length, _ = D < O ? D : O, I = 0; I < _; ++I) {
              var j = ot(E[I], A[I]);
              if (j !== 0) return j;
            }
            return D === O ? 0 : D < O ? -1 : 1;
        }
      } catch {
      }
      return NaN;
    }
    function hr(t) {
      var a = typeof t;
      return a == "object" && (ArrayBuffer.isView(t) || (a = Ne(t)) === "ArrayBuffer") ? "binary" : a;
    }
    function Ba(t) {
      return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(t);
    }
    function Gn(t, a, s) {
      var l = t.schema.yProps;
      return l ? (a && 0 < s.numFailures && (a = a.filter(function(p, h) {
        return !s.failures[h];
      })), Promise.all(l.map(function(p) {
        return p = p.updatesTable, a ? t.db.table(p).where("k").anyOf(a).delete() : t.db.table(p).clear();
      })).then(function() {
        return s;
      })) : s;
    }
    ya.prototype.execute = function(t) {
      var a = this["@@propmod"];
      if (a.add !== void 0) {
        var s = a.add;
        if (M(s)) return b(b([], M(t) ? t : [], !0), s).sort();
        if (typeof s == "number") return (Number(t) || 0) + s;
        if (typeof s == "bigint") try {
          return BigInt(t) + s;
        } catch {
          return BigInt(0) + s;
        }
        throw new TypeError("Invalid term ".concat(s));
      }
      if (a.remove !== void 0) {
        var l = a.remove;
        if (M(l)) return M(t) ? t.filter(function(p) {
          return !l.includes(p);
        }).sort() : [];
        if (typeof l == "number") return Number(t) - l;
        if (typeof l == "bigint") try {
          return BigInt(t) - l;
        } catch {
          return BigInt(0) - l;
        }
        throw new TypeError("Invalid subtrahend ".concat(l));
      }
      return s = (s = a.replacePrefix) == null ? void 0 : s[0], s && typeof t == "string" && t.startsWith(s) ? a.replacePrefix[1] + t.substring(s.length) : t;
    };
    var zn = ya;
    function ya(t) {
      this["@@propmod"] = t;
    }
    function gr(t, a) {
      for (var s = x(a), l = s.length, p = !1, h = 0; h < l; ++h) {
        var g = s[h], k = a[g], T = oe(t, g);
        k instanceof zn ? (ie(t, g, k.execute(T)), p = !0) : T !== k && (ie(t, g, k), p = !0);
      }
      return p;
    }
    xt.prototype._trans = function(t, a, s) {
      var l = this._tx || Ie.trans, p = this.name, h = _e && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(t === "readonly" ? "read" : "write", " ").concat(this.name));
      function g(L, E, A) {
        if (A.schema[p]) return a(A.idbtrans, A);
        throw new Pe.NotFound("Table " + p + " not part of transaction");
      }
      var k = Xt();
      try {
        var T = l && l.db._novip === this.db._novip ? l === Ie.trans ? l._promise(t, g, s) : Cn(function() {
          return l._promise(t, g, s);
        }, { trans: l, transless: Ie.transless || Ie }) : function L(E, A, D, O) {
          if (E.idbdb && (E._state.openComplete || Ie.letThrough || E._vip)) {
            var _ = E._createTransaction(A, D, E._dbSchema);
            try {
              _.create(), E._state.PR1398_maxLoop = 3;
            } catch (I) {
              return I.name === Rt.InvalidState && E.isOpen() && 0 < --E._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), E.close({ disableAutoOpen: !1 }), E.open().then(function() {
                return L(E, A, D, O);
              })) : Bt(I);
            }
            return _._promise(A, function(I, j) {
              return Cn(function() {
                return Ie.trans = _, O(I, j, _);
              });
            }).then(function(I) {
              if (A === "readwrite") try {
                _.idbtrans.commit();
              } catch {
              }
              return A === "readonly" ? I : _._completion.then(function() {
                return I;
              });
            });
          }
          if (E._state.openComplete) return Bt(new Pe.DatabaseClosed(E._state.dbOpenError));
          if (!E._state.isBeingOpened) {
            if (!E._state.autoOpen) return Bt(new Pe.DatabaseClosed());
            E.open().catch(C);
          }
          return E._state.dbReadyPromise.then(function() {
            return L(E, A, D, O);
          });
        }(this.db, t, [this.name], g);
        return h && (T._consoleTask = h, T = T.catch(function(L) {
          return console.trace(L), Bt(L);
        })), T;
      } finally {
        k && un();
      }
    }, xt.prototype.get = function(t, a) {
      var s = this;
      return t && t.constructor === Object ? this.where(t).first(a) : t == null ? Bt(new Pe.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(l) {
        return s.core.get({ trans: l, key: t }).then(function(p) {
          return s.hook.reading.fire(p);
        });
      }).then(a);
    }, xt.prototype.where = function(t) {
      if (typeof t == "string") return new this.db.WhereClause(this, t);
      if (M(t)) return new this.db.WhereClause(this, "[".concat(t.join("+"), "]"));
      var a = x(t);
      if (a.length === 1) return this.where(a[0]).equals(t[a[0]]);
      var s = this.schema.indexes.concat(this.schema.primKey).filter(function(k) {
        if (k.compound && a.every(function(L) {
          return 0 <= k.keyPath.indexOf(L);
        })) {
          for (var T = 0; T < a.length; ++T) if (a.indexOf(k.keyPath[T]) === -1) return !1;
          return !0;
        }
        return !1;
      }).sort(function(k, T) {
        return k.keyPath.length - T.keyPath.length;
      })[0];
      if (s && this.db._maxKey !== Kn) return g = s.keyPath.slice(0, a.length), this.where(g).equals(g.map(function(k) {
        return t[k];
      }));
      !s && _e && console.warn("The query ".concat(JSON.stringify(t), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(a.join("+"), "]"));
      var l = this.schema.idxByName;
      function p(k, T) {
        return ot(k, T) === 0;
      }
      var g = a.reduce(function(E, T) {
        var L = E[0], E = E[1], A = l[T], D = t[T];
        return [L || A, L || !A ? In(E, A && A.multi ? function(O) {
          return O = oe(O, T), M(O) && O.some(function(_) {
            return p(D, _);
          });
        } : function(O) {
          return p(D, oe(O, T));
        }) : E];
      }, [null, null]), h = g[0], g = g[1];
      return h ? this.where(h.name).equals(t[h.keyPath]).filter(g) : s ? this.filter(g) : this.where(a).equals("");
    }, xt.prototype.filter = function(t) {
      return this.toCollection().and(t);
    }, xt.prototype.count = function(t) {
      return this.toCollection().count(t);
    }, xt.prototype.offset = function(t) {
      return this.toCollection().offset(t);
    }, xt.prototype.limit = function(t) {
      return this.toCollection().limit(t);
    }, xt.prototype.each = function(t) {
      return this.toCollection().each(t);
    }, xt.prototype.toArray = function(t) {
      return this.toCollection().toArray(t);
    }, xt.prototype.toCollection = function() {
      return new this.db.Collection(new this.db.WhereClause(this));
    }, xt.prototype.orderBy = function(t) {
      return new this.db.Collection(new this.db.WhereClause(this, M(t) ? "[".concat(t.join("+"), "]") : t));
    }, xt.prototype.reverse = function() {
      return this.toCollection().reverse();
    }, xt.prototype.mapToClass = function(t) {
      for (var a = this.db, s = this.name, l = ((this.schema.mappedClass = t).prototype instanceof Ze && (t = ((g) => {
        var k = E, T = g;
        if (typeof T != "function" && T !== null) throw new TypeError("Class extends value " + String(T) + " is not a constructor or null");
        function L() {
          this.constructor = k;
        }
        function E() {
          return g !== null && g.apply(this, arguments) || this;
        }
        return c(k, T), k.prototype = T === null ? Object.create(T) : (L.prototype = T.prototype, new L()), Object.defineProperty(E.prototype, "db", { get: function() {
          return a;
        }, enumerable: !1, configurable: !0 }), E.prototype.table = function() {
          return s;
        }, E;
      })(t)), /* @__PURE__ */ new Set()), p = t.prototype; p; p = V(p)) Object.getOwnPropertyNames(p).forEach(function(g) {
        return l.add(g);
      });
      function h(g) {
        if (!g) return g;
        var k, T = Object.create(t.prototype);
        for (k in g) if (!l.has(k)) try {
          T[k] = g[k];
        } catch {
        }
        return T;
      }
      return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = h, this.hook("reading", h), t;
    }, xt.prototype.defineClass = function() {
      return this.mapToClass(function(t) {
        R(this, t);
      });
    }, xt.prototype.add = function(t, a) {
      var s = this, l = this.schema.primKey, p = l.auto, h = l.keyPath, g = t;
      return h && p && (g = Ue(h)(t)), this._trans("readwrite", function(k) {
        return s.core.mutate({ trans: k, type: "add", keys: a != null ? [a] : null, values: [g] });
      }).then(function(k) {
        return k.numFailures ? P.reject(k.failures[0]) : k.lastResult;
      }).then(function(k) {
        if (h) try {
          ie(t, h, k);
        } catch {
        }
        return k;
      });
    }, xt.prototype.upsert = function(t, a) {
      var s = this, l = this.schema.primKey.keyPath;
      return this._trans("readwrite", function(p) {
        return s.core.get({ trans: p, key: t }).then(function(h) {
          var g = h ?? {};
          return gr(g, a), l && ie(g, l, t), s.core.mutate({ trans: p, type: "put", values: [g], keys: [t], upsert: !0, updates: { keys: [t], changeSpecs: [a] } }).then(function(k) {
            return k.numFailures ? P.reject(k.failures[0]) : !!h;
          });
        });
      });
    }, xt.prototype.update = function(t, a) {
      return typeof t != "object" || M(t) ? this.where(":id").equals(t).modify(a) : (t = oe(t, this.schema.primKey.keyPath)) === void 0 ? Bt(new Pe.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(t).modify(a);
    }, xt.prototype.put = function(t, a) {
      var s = this, l = this.schema.primKey, p = l.auto, h = l.keyPath, g = t;
      return h && p && (g = Ue(h)(t)), this._trans("readwrite", function(k) {
        return s.core.mutate({ trans: k, type: "put", values: [g], keys: a != null ? [a] : null });
      }).then(function(k) {
        return k.numFailures ? P.reject(k.failures[0]) : k.lastResult;
      }).then(function(k) {
        if (h) try {
          ie(t, h, k);
        } catch {
        }
        return k;
      });
    }, xt.prototype.delete = function(t) {
      var a = this;
      return this._trans("readwrite", function(s) {
        return a.core.mutate({ trans: s, type: "delete", keys: [t] }).then(function(l) {
          return Gn(a, [t], l);
        }).then(function(l) {
          return l.numFailures ? P.reject(l.failures[0]) : void 0;
        });
      });
    }, xt.prototype.clear = function() {
      var t = this;
      return this._trans("readwrite", function(a) {
        return t.core.mutate({ trans: a, type: "deleteRange", range: Wa }).then(function(s) {
          return Gn(t, null, s);
        });
      }).then(function(a) {
        return a.numFailures ? P.reject(a.failures[0]) : void 0;
      });
    }, xt.prototype.bulkGet = function(t) {
      var a = this;
      return this._trans("readonly", function(s) {
        return a.core.getMany({ keys: t, trans: s }).then(function(l) {
          return l.map(function(p) {
            return a.hook.reading.fire(p);
          });
        });
      });
    }, xt.prototype.bulkAdd = function(t, a, s) {
      var l = this, p = Array.isArray(a) ? a : void 0, h = (s = s || (p ? void 0 : a)) ? s.allKeys : void 0;
      return this._trans("readwrite", function(g) {
        var k = l.schema.primKey, L = k.auto, k = k.keyPath;
        if (k && p) throw new Pe.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
        if (p && p.length !== t.length) throw new Pe.InvalidArgument("Arguments objects and keys must have the same length");
        var T = t.length, L = k && L ? t.map(Ue(k)) : t;
        return l.core.mutate({ trans: g, type: "add", keys: p, values: L, wantResults: h }).then(function(E) {
          var A = E.numFailures, D = E.failures;
          if (A === 0) return h ? E.results : E.lastResult;
          throw new Ve("".concat(l.name, ".bulkAdd(): ").concat(A, " of ").concat(T, " operations failed"), D);
        });
      });
    }, xt.prototype.bulkPut = function(t, a, s) {
      var l = this, p = Array.isArray(a) ? a : void 0, h = (s = s || (p ? void 0 : a)) ? s.allKeys : void 0;
      return this._trans("readwrite", function(g) {
        var k = l.schema.primKey, L = k.auto, k = k.keyPath;
        if (k && p) throw new Pe.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
        if (p && p.length !== t.length) throw new Pe.InvalidArgument("Arguments objects and keys must have the same length");
        var T = t.length, L = k && L ? t.map(Ue(k)) : t;
        return l.core.mutate({ trans: g, type: "put", keys: p, values: L, wantResults: h }).then(function(E) {
          var A = E.numFailures, D = E.failures;
          if (A === 0) return h ? E.results : E.lastResult;
          throw new Ve("".concat(l.name, ".bulkPut(): ").concat(A, " of ").concat(T, " operations failed"), D);
        });
      });
    }, xt.prototype.bulkUpdate = function(t) {
      var a = this, s = this.core, l = t.map(function(g) {
        return g.key;
      }), p = t.map(function(g) {
        return g.changes;
      }), h = [];
      return this._trans("readwrite", function(g) {
        return s.getMany({ trans: g, keys: l, cache: "clone" }).then(function(k) {
          var T = [], L = [], E = (t.forEach(function(A, D) {
            var O = A.key, _ = A.changes, I = k[D];
            if (I) {
              for (var j = 0, H = Object.keys(_); j < H.length; j++) {
                var F = H[j], Q = _[F];
                if (F === a.schema.primKey.keyPath) {
                  if (ot(Q, O) !== 0) throw new Pe.Constraint("Cannot update primary key in bulkUpdate()");
                } else ie(I, F, Q);
              }
              h.push(D), T.push(O), L.push(I);
            }
          }), T.length);
          return s.mutate({ trans: g, type: "put", keys: T, values: L, updates: { keys: l, changeSpecs: p } }).then(function(A) {
            var D = A.numFailures, O = A.failures;
            if (D === 0) return E;
            for (var _ = 0, I = Object.keys(O); _ < I.length; _++) {
              var j, H = I[_], F = h[Number(H)];
              F != null && (j = O[H], delete O[H], O[F] = j);
            }
            throw new Ve("".concat(a.name, ".bulkUpdate(): ").concat(D, " of ").concat(E, " operations failed"), O);
          });
        });
      });
    }, xt.prototype.bulkDelete = function(t) {
      var a = this, s = t.length;
      return this._trans("readwrite", function(l) {
        return a.core.mutate({ trans: l, type: "delete", keys: t }).then(function(p) {
          return Gn(a, t, p);
        });
      }).then(function(l) {
        var p = l.numFailures, h = l.failures;
        if (p === 0) return l.lastResult;
        throw new Ve("".concat(a.name, ".bulkDelete(): ").concat(p, " of ").concat(s, " operations failed"), h);
      });
    };
    var Ur = xt;
    function xt() {
    }
    function oa(t) {
      function a(g, k) {
        if (k) {
          for (var T = arguments.length, L = new Array(T - 1); --T; ) L[T - 1] = arguments[T];
          return s[g].subscribe.apply(null, L), t;
        }
        if (typeof g == "string") return s[g];
      }
      var s = {};
      a.addEventType = h;
      for (var l = 1, p = arguments.length; l < p; ++l) h(arguments[l]);
      return a;
      function h(g, k, T) {
        var L, E;
        if (typeof g != "object") return k = k || kt, E = { subscribers: [], fire: T = T || C, subscribe: function(A) {
          E.subscribers.indexOf(A) === -1 && (E.subscribers.push(A), E.fire = k(E.fire, A));
        }, unsubscribe: function(A) {
          E.subscribers = E.subscribers.filter(function(D) {
            return D !== A;
          }), E.fire = E.subscribers.reduce(k, T);
        } }, s[g] = a[g] = E;
        x(L = g).forEach(function(A) {
          var D = L[A];
          if (M(D)) h(A, L[A][0], L[A][1]);
          else {
            if (D !== "asap") throw new Pe.InvalidArgument("Invalid event config");
            var O = h(A, G, function() {
              for (var _ = arguments.length, I = new Array(_); _--; ) I[_] = arguments[_];
              O.subscribers.forEach(function(j) {
                xe(function() {
                  j.apply(null, I);
                });
              });
            });
          }
        });
      }
    }
    function ba(t, a) {
      return ge(a).from({ prototype: t }), a;
    }
    function ia(t, a) {
      return !(t.filter || t.algorithm || t.or) && (a ? t.justLimit : !t.replayFilter);
    }
    function Na(t, a) {
      t.filter = In(t.filter, a);
    }
    function qn(t, a, s) {
      var l = t.replayFilter;
      t.replayFilter = l ? function() {
        return In(l(), a());
      } : a, t.justLimit = s && !l;
    }
    function sa(t, a) {
      if (t.isPrimKey) return a.primaryKey;
      var s = a.getIndexByKeyPath(t.index);
      if (s) return s;
      throw new Pe.Schema("KeyPath " + t.index + " on object store " + a.name + " is not indexed");
    }
    function Fa(t, a, s) {
      var l = sa(t, a.schema);
      return a.openCursor({ trans: s, values: !t.keysOnly, reverse: t.dir === "prev", unique: !!t.unique, query: { index: l, range: t.range } });
    }
    function Jn(t, a, s, l) {
      var p, h, g = t.replayFilter ? In(t.filter, t.replayFilter()) : t.filter;
      return t.or ? (p = {}, h = function(k, T, L) {
        var E, A;
        g && !g(T, L, function(D) {
          return T.stop(D);
        }, function(D) {
          return T.fail(D);
        }) || ((A = "" + (E = T.primaryKey)) == "[object ArrayBuffer]" && (A = "" + new Uint8Array(E)), X(p, A)) || (p[A] = !0, a(k, T, L));
      }, Promise.all([t.or._iterate(h, s), va(Fa(t, l, s), t.algorithm, h, !t.keysOnly && t.valueMapper)])) : va(Fa(t, l, s), In(t.algorithm, g), a, !t.keysOnly && t.valueMapper);
    }
    function va(t, a, s, l) {
      var p = St(l ? function(h, g, k) {
        return s(l(h), g, k);
      } : s);
      return t.then(function(h) {
        if (h) return h.start(function() {
          var g = function() {
            return h.continue();
          };
          a && !a(h, function(k) {
            return g = k;
          }, function(k) {
            h.stop(k), g = C;
          }, function(k) {
            h.fail(k), g = C;
          }) || p(h.value, h, function(k) {
            return g = k;
          }), g();
        });
      });
    }
    st.prototype._read = function(t, a) {
      var s = this._ctx;
      return s.error ? s.table._trans(null, Bt.bind(null, s.error)) : s.table._trans("readonly", t).then(a);
    }, st.prototype._write = function(t) {
      var a = this._ctx;
      return a.error ? a.table._trans(null, Bt.bind(null, a.error)) : a.table._trans("readwrite", t, "locked");
    }, st.prototype._addAlgorithm = function(t) {
      var a = this._ctx;
      a.algorithm = In(a.algorithm, t);
    }, st.prototype._iterate = function(t, a) {
      return Jn(this._ctx, t, a, this._ctx.table.core);
    }, st.prototype.clone = function(t) {
      var a = Object.create(this.constructor.prototype), s = Object.create(this._ctx);
      return t && R(s, t), a._ctx = s, a;
    }, st.prototype.raw = function() {
      return this._ctx.valueMapper = null, this;
    }, st.prototype.each = function(t) {
      var a = this._ctx;
      return this._read(function(s) {
        return Jn(a, t, s, a.table.core);
      });
    }, st.prototype.count = function(t) {
      var a = this;
      return this._read(function(s) {
        var l, p = a._ctx, h = p.table.core;
        return ia(p, !0) ? h.count({ trans: s, query: { index: sa(p, h.schema), range: p.range } }).then(function(g) {
          return Math.min(g, p.limit);
        }) : (l = 0, Jn(p, function() {
          return ++l, !1;
        }, s, h).then(function() {
          return l;
        }));
      }).then(t);
    }, st.prototype.sortBy = function(t, a) {
      var s = t.split(".").reverse(), l = s[0], p = s.length - 1;
      function h(T, L) {
        return L ? h(T[s[L]], L - 1) : T[l];
      }
      var g = this._ctx.dir === "next" ? 1 : -1;
      function k(T, L) {
        return ot(h(T, p), h(L, p)) * g;
      }
      return this.toArray(function(T) {
        return T.sort(k);
      }).then(a);
    }, st.prototype.toArray = function(t) {
      var a = this;
      return this._read(function(s) {
        var l, p, h, g = a._ctx;
        return g.dir === "next" && ia(g, !0) && 0 < g.limit ? (l = g.valueMapper, p = sa(g, g.table.core.schema), g.table.core.query({ trans: s, limit: g.limit, values: !0, query: { index: p, range: g.range } }).then(function(k) {
          return k = k.result, l ? k.map(l) : k;
        })) : (h = [], Jn(g, function(k) {
          return h.push(k);
        }, s, g.table.core).then(function() {
          return h;
        }));
      }, t);
    }, st.prototype.offset = function(t) {
      var a = this._ctx;
      return t <= 0 || (a.offset += t, ia(a) ? qn(a, function() {
        var s = t;
        return function(l, p) {
          return s === 0 || (s === 1 ? --s : p(function() {
            l.advance(s), s = 0;
          }), !1);
        };
      }) : qn(a, function() {
        var s = t;
        return function() {
          return --s < 0;
        };
      })), this;
    }, st.prototype.limit = function(t) {
      return this._ctx.limit = Math.min(this._ctx.limit, t), qn(this._ctx, function() {
        var a = t;
        return function(s, l, p) {
          return --a <= 0 && l(p), 0 <= a;
        };
      }, !0), this;
    }, st.prototype.until = function(t, a) {
      return Na(this._ctx, function(s, l, p) {
        return !t(s.value) || (l(p), a);
      }), this;
    }, st.prototype.first = function(t) {
      return this.limit(1).toArray(function(a) {
        return a[0];
      }).then(t);
    }, st.prototype.last = function(t) {
      return this.reverse().first(t);
    }, st.prototype.filter = function(t) {
      var a;
      return Na(this._ctx, function(s) {
        return t(s.value);
      }), (a = this._ctx).isMatch = In(a.isMatch, t), this;
    }, st.prototype.and = function(t) {
      return this.filter(t);
    }, st.prototype.or = function(t) {
      return new this.db.WhereClause(this._ctx.table, t, this);
    }, st.prototype.reverse = function() {
      return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
    }, st.prototype.desc = function() {
      return this.reverse();
    }, st.prototype.eachKey = function(t) {
      var a = this._ctx;
      return a.keysOnly = !a.isMatch, this.each(function(s, l) {
        t(l.key, l);
      });
    }, st.prototype.eachUniqueKey = function(t) {
      return this._ctx.unique = "unique", this.eachKey(t);
    }, st.prototype.eachPrimaryKey = function(t) {
      var a = this._ctx;
      return a.keysOnly = !a.isMatch, this.each(function(s, l) {
        t(l.primaryKey, l);
      });
    }, st.prototype.keys = function(t) {
      var a = this._ctx, s = (a.keysOnly = !a.isMatch, []);
      return this.each(function(l, p) {
        s.push(p.key);
      }).then(function() {
        return s;
      }).then(t);
    }, st.prototype.primaryKeys = function(t) {
      var a = this._ctx;
      if (a.dir === "next" && ia(a, !0) && 0 < a.limit) return this._read(function(l) {
        var p = sa(a, a.table.core.schema);
        return a.table.core.query({ trans: l, values: !1, limit: a.limit, query: { index: p, range: a.range } });
      }).then(function(l) {
        return l.result;
      }).then(t);
      a.keysOnly = !a.isMatch;
      var s = [];
      return this.each(function(l, p) {
        s.push(p.primaryKey);
      }).then(function() {
        return s;
      }).then(t);
    }, st.prototype.uniqueKeys = function(t) {
      return this._ctx.unique = "unique", this.keys(t);
    }, st.prototype.firstKey = function(t) {
      return this.limit(1).keys(function(a) {
        return a[0];
      }).then(t);
    }, st.prototype.lastKey = function(t) {
      return this.reverse().firstKey(t);
    }, st.prototype.distinct = function() {
      var t, a = this._ctx, a = a.index && a.table.schema.idxByName[a.index];
      return a && a.multi && (t = {}, Na(this._ctx, function(l) {
        var l = l.primaryKey.toString(), p = X(t, l);
        return t[l] = !0, !p;
      })), this;
    }, st.prototype.modify = function(t) {
      var a = this, s = this._ctx;
      return this._write(function(l) {
        function p(I, j) {
          var H = j.failures;
          D += I - j.numFailures;
          for (var F = 0, Q = x(H); F < Q.length; F++) {
            var ce = Q[F];
            A.push(H[ce]);
          }
        }
        var h = typeof t == "function" ? t : function(I) {
          return gr(I, t);
        }, g = s.table.core, E = g.schema.primaryKey, k = E.outbound, T = E.extractKey, L = 200, E = a.db._options.modifyChunkSize, A = (E && (L = typeof E == "object" ? E[g.name] || E["*"] || 200 : E), []), D = 0, O = [], _ = t === en;
        return a.clone().primaryKeys().then(function(I) {
          function j(F) {
            var Q = Math.min(L, I.length - F), ce = I.slice(F, F + Q);
            return (_ ? Promise.resolve([]) : g.getMany({ trans: l, keys: ce, cache: "immutable" })).then(function(fe) {
              var we = [], ue = [], Ce = k ? [] : null, ke = _ ? ce : [];
              if (!_) for (var he = 0; he < Q; ++he) {
                var Ae = fe[he], ct = { value: Le(Ae), primKey: I[F + he] };
                h.call(ct, ct.value, ct) !== !1 && (ct.value == null ? ke.push(I[F + he]) : k || ot(T(Ae), T(ct.value)) === 0 ? (ue.push(ct.value), k && Ce.push(I[F + he])) : (ke.push(I[F + he]), we.push(ct.value)));
              }
              return Promise.resolve(0 < we.length && g.mutate({ trans: l, type: "add", values: we }).then(function(re) {
                for (var Fe in re.failures) ke.splice(parseInt(Fe), 1);
                p(we.length, re);
              })).then(function() {
                return (0 < ue.length || H && typeof t == "object") && g.mutate({ trans: l, type: "put", keys: Ce, values: ue, criteria: H, changeSpec: typeof t != "function" && t, isAdditionalChunk: 0 < F }).then(function(re) {
                  return p(ue.length, re);
                });
              }).then(function() {
                return (0 < ke.length || H && _) && g.mutate({ trans: l, type: "delete", keys: ke, criteria: H, isAdditionalChunk: 0 < F }).then(function(re) {
                  return Gn(s.table, ke, re);
                }).then(function(re) {
                  return p(ke.length, re);
                });
              }).then(function() {
                return I.length > F + Q && j(F + L);
              });
            });
          }
          var H = ia(s) && s.limit === 1 / 0 && (typeof t != "function" || _) && { index: s.index, range: s.range };
          return j(0).then(function() {
            if (0 < A.length) throw new et("Error modifying one or more objects", A, D, O);
            return I.length;
          });
        });
      });
    }, st.prototype.delete = function() {
      var t = this._ctx, a = t.range;
      return !ia(t) || t.table.schema.yProps || !t.isPrimKey && a.type !== 3 ? this.modify(en) : this._write(function(s) {
        var l = t.table.core.schema.primaryKey, p = a;
        return t.table.core.count({ trans: s, query: { index: l, range: p } }).then(function(h) {
          return t.table.core.mutate({ trans: s, type: "deleteRange", range: p }).then(function(T) {
            var k = T.failures, T = T.numFailures;
            if (T) throw new et("Could not delete some values", Object.keys(k).map(function(L) {
              return k[L];
            }), h - T);
            return h - T;
          });
        });
      });
    };
    var bo = st;
    function st() {
    }
    var en = function(t, a) {
      return a.value = null;
    };
    function ka(t, a) {
      return t < a ? -1 : t === a ? 0 : 1;
    }
    function $r(t, a) {
      return a < t ? -1 : t === a ? 0 : 1;
    }
    function ln(t, a, s) {
      return t = t instanceof En ? new t.Collection(t) : t, t._ctx.error = new (s || TypeError)(a), t;
    }
    function On(t) {
      return new t.Collection(t, function() {
        return gn("");
      }).limit(0);
    }
    function An(O, a, s, l) {
      var p, h, g, k, T, L, E, A = s.length;
      if (!s.every(function(I) {
        return typeof I == "string";
      })) return ln(O, pr);
      function D(I) {
        p = I === "next" ? function(H) {
          return H.toUpperCase();
        } : function(H) {
          return H.toLowerCase();
        }, h = I === "next" ? function(H) {
          return H.toLowerCase();
        } : function(H) {
          return H.toUpperCase();
        }, g = I === "next" ? ka : $r;
        var j = s.map(function(H) {
          return { lower: h(H), upper: p(H) };
        }).sort(function(H, F) {
          return g(H.lower, F.lower);
        });
        k = j.map(function(H) {
          return H.upper;
        }), T = j.map(function(H) {
          return H.lower;
        }), E = (L = I) === "next" ? "" : l;
      }
      D("next");
      var O = new O.Collection(O, function() {
        return rn(k[0], T[A - 1] + l);
      }), _ = (O._ondirectionchange = function(I) {
        D(I);
      }, 0);
      return O._addAlgorithm(function(I, j, H) {
        var F = I.key;
        if (typeof F == "string") {
          var Q = h(F);
          if (a(Q, T, _)) return !0;
          for (var ce = null, fe = _; fe < A; ++fe) {
            var we = ((ue, Ce, ke, he, Ae, ct) => {
              for (var re = Math.min(ue.length, he.length), Fe = -1, tt = 0; tt < re; ++tt) {
                var Dt = Ce[tt];
                if (Dt !== he[tt]) return Ae(ue[tt], ke[tt]) < 0 ? ue.substr(0, tt) + ke[tt] + ke.substr(tt + 1) : Ae(ue[tt], he[tt]) < 0 ? ue.substr(0, tt) + he[tt] + ke.substr(tt + 1) : 0 <= Fe ? ue.substr(0, Fe) + Ce[Fe] + ke.substr(Fe + 1) : null;
                Ae(ue[tt], Dt) < 0 && (Fe = tt);
              }
              return re < he.length && ct === "next" ? ue + ke.substr(ue.length) : re < ue.length && ct === "prev" ? ue.substr(0, ke.length) : Fe < 0 ? null : ue.substr(0, Fe) + he[Fe] + ke.substr(Fe + 1);
            })(F, Q, k[fe], T[fe], g, L);
            we === null && ce === null ? _ = fe + 1 : (ce === null || 0 < g(ce, we)) && (ce = we);
          }
          j(ce !== null ? function() {
            I.continue(ce + E);
          } : H);
        }
        return !1;
      }), O;
    }
    function rn(t, a, s, l) {
      return { type: 2, lower: t, upper: a, lowerOpen: s, upperOpen: l };
    }
    function gn(t) {
      return { type: 1, lower: t, upper: t };
    }
    Object.defineProperty(Wt.prototype, "Collection", { get: function() {
      return this._ctx.table.db.Collection;
    }, enumerable: !1, configurable: !0 }), Wt.prototype.between = function(t, a, s, l) {
      s = s !== !1, l = l === !0;
      try {
        return 0 < this._cmp(t, a) || this._cmp(t, a) === 0 && (s || l) && (!s || !l) ? On(this) : new this.Collection(this, function() {
          return rn(t, a, !s, !l);
        });
      } catch {
        return ln(this, an);
      }
    }, Wt.prototype.equals = function(t) {
      return t == null ? ln(this, an) : new this.Collection(this, function() {
        return gn(t);
      });
    }, Wt.prototype.above = function(t) {
      return t == null ? ln(this, an) : new this.Collection(this, function() {
        return rn(t, void 0, !0);
      });
    }, Wt.prototype.aboveOrEqual = function(t) {
      return t == null ? ln(this, an) : new this.Collection(this, function() {
        return rn(t, void 0, !1);
      });
    }, Wt.prototype.below = function(t) {
      return t == null ? ln(this, an) : new this.Collection(this, function() {
        return rn(void 0, t, !1, !0);
      });
    }, Wt.prototype.belowOrEqual = function(t) {
      return t == null ? ln(this, an) : new this.Collection(this, function() {
        return rn(void 0, t);
      });
    }, Wt.prototype.startsWith = function(t) {
      return typeof t != "string" ? ln(this, pr) : this.between(t, t + Kn, !0, !0);
    }, Wt.prototype.startsWithIgnoreCase = function(t) {
      return t === "" ? this.startsWith(t) : An(this, function(a, s) {
        return a.indexOf(s[0]) === 0;
      }, [t], Kn);
    }, Wt.prototype.equalsIgnoreCase = function(t) {
      return An(this, function(a, s) {
        return a === s[0];
      }, [t], "");
    }, Wt.prototype.anyOfIgnoreCase = function() {
      var t = Ke.apply(ft, arguments);
      return t.length === 0 ? On(this) : An(this, function(a, s) {
        return s.indexOf(a) !== -1;
      }, t, "");
    }, Wt.prototype.startsWithAnyOfIgnoreCase = function() {
      var t = Ke.apply(ft, arguments);
      return t.length === 0 ? On(this) : An(this, function(a, s) {
        return s.some(function(l) {
          return a.indexOf(l) === 0;
        });
      }, t, Kn);
    }, Wt.prototype.anyOf = function() {
      var t, a, s = this, l = Ke.apply(ft, arguments), p = this._cmp;
      try {
        l.sort(p);
      } catch {
        return ln(this, an);
      }
      return l.length === 0 ? On(this) : ((t = new this.Collection(this, function() {
        return rn(l[0], l[l.length - 1]);
      }))._ondirectionchange = function(h) {
        p = h === "next" ? s._ascending : s._descending, l.sort(p);
      }, a = 0, t._addAlgorithm(function(h, g, k) {
        for (var T = h.key; 0 < p(T, l[a]); ) if (++a === l.length) return g(k), !1;
        return p(T, l[a]) === 0 || (g(function() {
          h.continue(l[a]);
        }), !1);
      }), t);
    }, Wt.prototype.notEqual = function(t) {
      return this.inAnyRange([[-1 / 0, t], [t, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
    }, Wt.prototype.noneOf = function() {
      var t = Ke.apply(ft, arguments);
      if (t.length === 0) return new this.Collection(this);
      try {
        t.sort(this._ascending);
      } catch {
        return ln(this, an);
      }
      var a = t.reduce(function(s, l) {
        return s ? s.concat([[s[s.length - 1][1], l]]) : [[-1 / 0, l]];
      }, null);
      return a.push([t[t.length - 1], this.db._maxKey]), this.inAnyRange(a, { includeLowers: !1, includeUppers: !1 });
    }, Wt.prototype.inAnyRange = function(t, H) {
      var s = this, l = this._cmp, p = this._ascending, h = this._descending, g = this._min, k = this._max;
      if (t.length === 0) return On(this);
      if (!t.every(function(F) {
        return F[0] !== void 0 && F[1] !== void 0 && p(F[0], F[1]) <= 0;
      })) return ln(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", Pe.InvalidArgument);
      var T = !H || H.includeLowers !== !1, L = H && H.includeUppers === !0, E, A = p;
      function D(F, Q) {
        return A(F[0], Q[0]);
      }
      try {
        (E = t.reduce(function(F, Q) {
          for (var ce = 0, fe = F.length; ce < fe; ++ce) {
            var we = F[ce];
            if (l(Q[0], we[1]) < 0 && 0 < l(Q[1], we[0])) {
              we[0] = g(we[0], Q[0]), we[1] = k(we[1], Q[1]);
              break;
            }
          }
          return ce === fe && F.push(Q), F;
        }, [])).sort(D);
      } catch {
        return ln(this, an);
      }
      var O = 0, _ = L ? function(F) {
        return 0 < p(F, E[O][1]);
      } : function(F) {
        return 0 <= p(F, E[O][1]);
      }, I = T ? function(F) {
        return 0 < h(F, E[O][0]);
      } : function(F) {
        return 0 <= h(F, E[O][0]);
      }, j = _, H = new this.Collection(this, function() {
        return rn(E[0][0], E[E.length - 1][1], !T, !L);
      });
      return H._ondirectionchange = function(F) {
        A = F === "next" ? (j = _, p) : (j = I, h), E.sort(D);
      }, H._addAlgorithm(function(F, Q, ce) {
        for (var fe, we = F.key; j(we); ) if (++O === E.length) return Q(ce), !1;
        return !_(fe = we) && !I(fe) || (s._cmp(we, E[O][1]) === 0 || s._cmp(we, E[O][0]) === 0 || Q(function() {
          A === p ? F.continue(E[O][0]) : F.continue(E[O][1]);
        }), !1);
      }), H;
    }, Wt.prototype.startsWithAnyOf = function() {
      var t = Ke.apply(ft, arguments);
      return t.every(function(a) {
        return typeof a == "string";
      }) ? t.length === 0 ? On(this) : this.inAnyRange(t.map(function(a) {
        return [a, a + Kn];
      })) : ln(this, "startsWithAnyOf() only works with strings");
    };
    var En = Wt;
    function Wt() {
    }
    function Yt(t) {
      return St(function(a) {
        return Ft(a), t(a.target.error), !1;
      });
    }
    function Ft(t) {
      t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault();
    }
    var mn = "storagemutated", mr = "x-storagemutated-1", gt = oa(null, mn), jr = (wn.prototype._lock = function() {
      return te(!Ie.global), ++this._reculock, this._reculock !== 1 || Ie.global || (Ie.lockOwnerFor = this), this;
    }, wn.prototype._unlock = function() {
      if (te(!Ie.global), --this._reculock == 0) for (Ie.global || (Ie.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
        var t = this._blockedFuncs.shift();
        try {
          jn(t[1], t[0]);
        } catch {
        }
      }
      return this;
    }, wn.prototype._locked = function() {
      return this._reculock && Ie.lockOwnerFor !== this;
    }, wn.prototype.create = function(t) {
      var a = this;
      if (this.mode) {
        var s = this.db.idbdb, l = this.db._state.dbOpenError;
        if (te(!this.idbtrans), !t && !s) switch (l && l.name) {
          case "DatabaseClosedError":
            throw new Pe.DatabaseClosed(l);
          case "MissingAPIError":
            throw new Pe.MissingAPI(l.message, l);
          default:
            throw new Pe.OpenFailed(l);
        }
        if (!this.active) throw new Pe.TransactionInactive();
        te(this._completion._state === null), (t = this.idbtrans = t || (this.db.core || s).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = St(function(p) {
          Ft(p), a._reject(t.error);
        }), t.onabort = St(function(p) {
          Ft(p), a.active && a._reject(new Pe.Abort(t.error)), a.active = !1, a.on("abort").fire(p);
        }), t.oncomplete = St(function() {
          a.active = !1, a._resolve(), "mutatedParts" in t && gt.storagemutated.fire(t.mutatedParts);
        });
      }
      return this;
    }, wn.prototype._promise = function(t, a, s) {
      var l, p = this;
      return t === "readwrite" && this.mode !== "readwrite" ? Bt(new Pe.ReadOnly("Transaction is readonly")) : this.active ? this._locked() ? new P(function(h, g) {
        p._blockedFuncs.push([function() {
          p._promise(t, a, s).then(h, g);
        }, Ie]);
      }) : s ? Cn(function() {
        var h = new P(function(g, k) {
          p._lock();
          var T = a(g, k, p);
          T && T.then && T.then(g, k);
        });
        return h.finally(function() {
          return p._unlock();
        }), h._lib = !0, h;
      }) : ((l = new P(function(h, g) {
        var k = a(h, g, p);
        k && k.then && k.then(h, g);
      }))._lib = !0, l) : Bt(new Pe.TransactionInactive());
    }, wn.prototype._root = function() {
      return this.parent ? this.parent._root() : this;
    }, wn.prototype.waitFor = function(t) {
      var a, s = this._root(), l = P.resolve(t), p = (s._waitingFor ? s._waitingFor = s._waitingFor.then(function() {
        return l;
      }) : (s._waitingFor = l, s._waitingQueue = [], a = s.idbtrans.objectStore(s.storeNames[0]), function h() {
        for (++s._spinCount; s._waitingQueue.length; ) s._waitingQueue.shift()();
        s._waitingFor && (a.get(-1 / 0).onsuccess = h);
      }()), s._waitingFor);
      return new P(function(h, g) {
        l.then(function(k) {
          return s._waitingQueue.push(St(h.bind(null, k)));
        }, function(k) {
          return s._waitingQueue.push(St(g.bind(null, k)));
        }).finally(function() {
          s._waitingFor === p && (s._waitingFor = null);
        });
      });
    }, wn.prototype.abort = function() {
      this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new Pe.Abort()));
    }, wn.prototype.table = function(t) {
      var a = this._memoizedTables || (this._memoizedTables = {});
      if (X(a, t)) return a[t];
      var s = this.schema[t];
      if (s) return (s = new this.db.Table(t, s, this)).core = this.db.core.table(t), a[t] = s;
      throw new Pe.NotFound("Table " + t + " not part of transaction");
    }, wn);
    function wn() {
    }
    function wr(t, a, s, l, p, h, g, k) {
      return { name: t, keyPath: a, unique: s, multi: l, auto: p, compound: h, src: (s && !g ? "&" : "") + (l ? "*" : "") + (p ? "++" : "") + Yn(a), type: k };
    }
    function Yn(t) {
      return typeof t == "string" ? t : t ? "[" + [].join.call(t, "+") + "]" : "";
    }
    function ca(t, a, s) {
      return { name: t, primKey: a, indexes: s, mappedClass: null, idxByName: (l = function(p) {
        return [p.name, p];
      }, s.reduce(function(p, h, g) {
        return h = l(h, g), h && (p[h[0]] = h[1]), p;
      }, {})) };
      var l;
    }
    var ua = function(t) {
      try {
        return t.only([[]]), ua = function() {
          return [[]];
        }, [[]];
      } catch {
        return ua = function() {
          return Kn;
        }, Kn;
      }
    };
    function Sa(t) {
      return t == null ? function() {
      } : typeof t == "string" ? (a = t).split(".").length === 1 ? function(s) {
        return s[a];
      } : function(s) {
        return oe(s, a);
      } : function(s) {
        return oe(s, t);
      };
      var a;
    }
    function yr(t) {
      return [].slice.call(t);
    }
    var Kr = 0;
    function Zt(t) {
      return t == null ? ":id" : typeof t == "string" ? t : "[".concat(t.join("+"), "]");
    }
    function br(t, a, T) {
      function l(_) {
        if (_.type === 3) return null;
        if (_.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
        var A = _.lower, D = _.upper, O = _.lowerOpen, _ = _.upperOpen;
        return A === void 0 ? D === void 0 ? null : a.upperBound(D, !!_) : D === void 0 ? a.lowerBound(A, !!O) : a.bound(A, D, !!O, !!_);
      }
      function p(E) {
        var A, D = E.name;
        return { name: D, schema: E, mutate: function(O) {
          var _ = O.trans, I = O.type, j = O.keys, H = O.values, F = O.range;
          return new Promise(function(Q, ce) {
            Q = St(Q);
            var fe = _.objectStore(D), we = fe.keyPath == null, ue = I === "put" || I === "add";
            if (!ue && I !== "delete" && I !== "deleteRange") throw new Error("Invalid operation type: " + I);
            var Ce, ke = (j || H || { length: 1 }).length;
            if (j && H && j.length !== H.length) throw new Error("Given keys array must have same length as given values array.");
            if (ke === 0) return Q({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
            function he(Tt) {
              ++re, Ft(Tt);
            }
            var Ae = [], ct = [], re = 0;
            if (I === "deleteRange") {
              if (F.type === 4) return Q({ numFailures: re, failures: ct, results: [], lastResult: void 0 });
              F.type === 3 ? Ae.push(Ce = fe.clear()) : Ae.push(Ce = fe.delete(l(F)));
            } else {
              var we = ue ? we ? [H, j] : [H, null] : [j, null], Fe = we[0], tt = we[1];
              if (ue) for (var Dt = 0; Dt < ke; ++Dt) Ae.push(Ce = tt && tt[Dt] !== void 0 ? fe[I](Fe[Dt], tt[Dt]) : fe[I](Fe[Dt])), Ce.onerror = he;
              else for (Dt = 0; Dt < ke; ++Dt) Ae.push(Ce = fe[I](Fe[Dt])), Ce.onerror = he;
            }
            function pn(Tt) {
              Tt = Tt.target.result, Ae.forEach(function(Rn, Ya) {
                return Rn.error != null && (ct[Ya] = Rn.error);
              }), Q({ numFailures: re, failures: ct, results: I === "delete" ? j : Ae.map(function(Rn) {
                return Rn.result;
              }), lastResult: Tt });
            }
            Ce.onerror = function(Tt) {
              he(Tt), pn(Tt);
            }, Ce.onsuccess = pn;
          });
        }, getMany: function(O) {
          var _ = O.trans, I = O.keys;
          return new Promise(function(j, H) {
            j = St(j);
            for (var F, Q = _.objectStore(D), ce = I.length, fe = new Array(ce), we = 0, ue = 0, Ce = function(Ae) {
              Ae = Ae.target, fe[Ae._pos] = Ae.result, ++ue === we && j(fe);
            }, ke = Yt(H), he = 0; he < ce; ++he) I[he] != null && ((F = Q.get(I[he]))._pos = he, F.onsuccess = Ce, F.onerror = ke, ++we);
            we === 0 && j(fe);
          });
        }, get: function(O) {
          var _ = O.trans, I = O.key;
          return new Promise(function(j, H) {
            j = St(j);
            var F = _.objectStore(D).get(I);
            F.onsuccess = function(Q) {
              return j(Q.target.result);
            }, F.onerror = Yt(H);
          });
        }, query: (A = k, function(O) {
          return new Promise(function(_, I) {
            _ = St(_);
            var j, H, F, ue = O.trans, Q = O.values, ce = O.limit, we = O.query, fe = ce === 1 / 0 ? void 0 : ce, Ce = we.index, we = we.range, ue = ue.objectStore(D), ue = Ce.isPrimaryKey ? ue : ue.index(Ce.name), Ce = l(we);
            if (ce === 0) return _({ result: [] });
            A ? ((we = Q ? ue.getAll(Ce, fe) : ue.getAllKeys(Ce, fe)).onsuccess = function(ke) {
              return _({ result: ke.target.result });
            }, we.onerror = Yt(I)) : (j = 0, H = !Q && "openKeyCursor" in ue ? ue.openKeyCursor(Ce) : ue.openCursor(Ce), F = [], H.onsuccess = function(ke) {
              var he = H.result;
              return !he || (F.push(Q ? he.value : he.primaryKey), ++j === ce) ? _({ result: F }) : void he.continue();
            }, H.onerror = Yt(I));
          });
        }), openCursor: function(O) {
          var _ = O.trans, I = O.values, j = O.query, H = O.reverse, F = O.unique;
          return new Promise(function(Q, ce) {
            Q = St(Q);
            var ue = j.index, fe = j.range, we = _.objectStore(D), we = ue.isPrimaryKey ? we : we.index(ue.name), ue = H ? F ? "prevunique" : "prev" : F ? "nextunique" : "next", Ce = !I && "openKeyCursor" in we ? we.openKeyCursor(l(fe), ue) : we.openCursor(l(fe), ue);
            Ce.onerror = Yt(ce), Ce.onsuccess = St(function(ke) {
              var he, Ae, ct, re, Fe = Ce.result;
              Fe ? (Fe.___id = ++Kr, Fe.done = !1, he = Fe.continue.bind(Fe), Ae = (Ae = Fe.continuePrimaryKey) && Ae.bind(Fe), ct = Fe.advance.bind(Fe), re = function() {
                throw new Error("Cursor not stopped");
              }, Fe.trans = _, Fe.stop = Fe.continue = Fe.continuePrimaryKey = Fe.advance = function() {
                throw new Error("Cursor not started");
              }, Fe.fail = St(ce), Fe.next = function() {
                var tt = this, Dt = 1;
                return this.start(function() {
                  return Dt-- ? tt.continue() : tt.stop();
                }).then(function() {
                  return tt;
                });
              }, Fe.start = function(tt) {
                function Dt() {
                  if (Ce.result) try {
                    tt();
                  } catch (Tt) {
                    Fe.fail(Tt);
                  }
                  else Fe.done = !0, Fe.start = function() {
                    throw new Error("Cursor behind last entry");
                  }, Fe.stop();
                }
                var pn = new Promise(function(Tt, Rn) {
                  Tt = St(Tt), Ce.onerror = Yt(Rn), Fe.fail = Rn, Fe.stop = function(Ya) {
                    Fe.stop = Fe.continue = Fe.continuePrimaryKey = Fe.advance = re, Tt(Ya);
                  };
                });
                return Ce.onsuccess = St(function(Tt) {
                  Ce.onsuccess = Dt, Dt();
                }), Fe.continue = he, Fe.continuePrimaryKey = Ae, Fe.advance = ct, Dt(), pn;
              }, Q(Fe)) : Q(null);
            }, ce);
          });
        }, count: function(O) {
          var _ = O.query, I = O.trans, j = _.index, H = _.range;
          return new Promise(function(F, Q) {
            var ce = I.objectStore(D), ce = j.isPrimaryKey ? ce : ce.index(j.name), fe = l(H), fe = fe ? ce.count(fe) : ce.count();
            fe.onsuccess = St(function(we) {
              return F(we.target.result);
            }), fe.onerror = Yt(Q);
          });
        } };
      }
      h = T, g = yr((T = t).objectStoreNames);
      var h, T = { schema: { name: T.name, tables: g.map(function(E) {
        return h.objectStore(E);
      }).map(function(E) {
        var A = E.keyPath, D = E.autoIncrement, _ = M(A), O = {}, _ = { name: E.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: A == null, compound: _, keyPath: A, autoIncrement: D, unique: !0, extractKey: Sa(A) }, indexes: yr(E.indexNames).map(function(I) {
          return E.index(I);
        }).map(function(F) {
          var Q = F.name, j = F.unique, H = F.multiEntry, F = F.keyPath, Q = { name: Q, compound: M(F), keyPath: F, unique: j, multiEntry: H, extractKey: Sa(F) };
          return O[Zt(F)] = Q;
        }), getIndexByKeyPath: function(I) {
          return O[Zt(I)];
        } };
        return O[":id"] = _.primaryKey, A != null && (O[Zt(A)] = _.primaryKey), _;
      }) }, hasGetAll: 0 < g.length && "getAll" in h.objectStore(g[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }, g = T.schema, k = T.hasGetAll, T = g.tables.map(p), L = {};
      return T.forEach(function(E) {
        return L[E.name] = E;
      }), { stack: "dbcore", transaction: t.transaction.bind(t), table: function(E) {
        if (L[E]) return L[E];
        throw new Error("Table '".concat(E, "' not found"));
      }, MIN_KEY: -1 / 0, MAX_KEY: ua(a), schema: g };
    }
    function vr(t, a, s, l) {
      return s = s.IDBKeyRange, a = br(a, s, l), { dbcore: t.dbcore.reduce(function(p, h) {
        return h = h.create, d(d({}, p), h(p));
      }, a) };
    }
    function la(t, a) {
      var s = a.db, s = vr(t._middlewares, s, t._deps, a);
      t.core = s.dbcore, t.tables.forEach(function(l) {
        var p = l.name;
        t.core.schema.tables.some(function(h) {
          return h.name === p;
        }) && (l.core = t.core.table(p), t[p] instanceof t.Table) && (t[p].core = l.core);
      });
    }
    function Tn(t, a, s, l) {
      s.forEach(function(p) {
        var h = l[p];
        a.forEach(function(g) {
          var k = function T(L, E) {
            return q(L, E) || (L = V(L)) && T(L, E);
          }(g, p);
          (!k || "value" in k && k.value === void 0) && (g === t.Transaction.prototype || g instanceof t.Transaction ? me(g, p, { get: function() {
            return this.table(p);
          }, set: function(T) {
            B(this, p, { value: T, writable: !0, configurable: !0, enumerable: !0 });
          } }) : g[p] = new t.Table(p, h));
        });
      });
    }
    function kr(t, a) {
      a.forEach(function(s) {
        for (var l in s) s[l] instanceof t.Table && delete s[l];
      });
    }
    function Hr(t, a) {
      return t._cfg.version - a._cfg.version;
    }
    function on(t, a, s, l) {
      var p = t._dbSchema, h = (s.objectStoreNames.contains("$meta") && !p.$meta && (p.$meta = ca("$meta", Sr("")[0], []), t._storeNames.push("$meta")), t._createTransaction("readwrite", t._storeNames, p)), g = (h.create(s), h._completion.catch(l), h._reject.bind(h)), k = Ie.transless || Ie;
      Cn(function() {
        if (Ie.trans = h, Ie.transless = k, a !== 0) return la(t, s), L = a, ((T = h).storeNames.includes("$meta") ? T.table("$meta").get("version").then(function(E) {
          return E ?? L;
        }) : P.resolve(L)).then(function(j) {
          var A = t, D = j, O = h, _ = s, I = [], j = A._versions, H = A._dbSchema = Va(0, A.idbdb, _);
          return (j = j.filter(function(F) {
            return F._cfg.version >= D;
          })).length === 0 ? P.resolve() : (j.forEach(function(F) {
            I.push(function() {
              var Q, ce, fe, we = H, ue = F._cfg.dbschema, Ce = (Wn(A, we, _), Wn(A, ue, _), H = A._dbSchema = ue, Pa(we, ue)), ke = (Ce.add.forEach(function(he) {
                La(_, he[0], he[1].primKey, he[1].indexes);
              }), Ce.change.forEach(function(he) {
                if (he.recreate) throw new Pe.Upgrade("Not yet support for changing primary key");
                var Ae = _.objectStore(he.name);
                he.add.forEach(function(ct) {
                  return da(Ae, ct);
                }), he.change.forEach(function(ct) {
                  Ae.deleteIndex(ct.name), da(Ae, ct);
                }), he.del.forEach(function(ct) {
                  return Ae.deleteIndex(ct);
                });
              }), F._cfg.contentUpgrade);
              if (ke && F._cfg.version > D) return la(A, _), O._memoizedTables = {}, Q = lt(ue), Ce.del.forEach(function(he) {
                Q[he] = we[he];
              }), kr(A, [A.Transaction.prototype]), Tn(A, [A.Transaction.prototype], x(Q), Q), O.schema = Q, (ce = W(ke)) && $n(), ue = P.follow(function() {
                var he;
                (fe = ke(O)) && ce && (he = kn.bind(null, null), fe.then(he, he));
              }), fe && typeof fe.then == "function" ? P.resolve(fe) : ue.then(function() {
                return fe;
              });
            }), I.push(function(Q) {
              var ce, fe, we = F._cfg.dbschema;
              ce = we, fe = Q, [].slice.call(fe.db.objectStoreNames).forEach(function(ue) {
                return ce[ue] == null && fe.db.deleteObjectStore(ue);
              }), kr(A, [A.Transaction.prototype]), Tn(A, [A.Transaction.prototype], A._storeNames, A._dbSchema), O.schema = A._dbSchema;
            }), I.push(function(Q) {
              A.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(A.idbdb.version / 10) === F._cfg.version ? (A.idbdb.deleteObjectStore("$meta"), delete A._dbSchema.$meta, A._storeNames = A._storeNames.filter(function(ce) {
                return ce !== "$meta";
              })) : Q.objectStore("$meta").put(F._cfg.version, "version"));
            });
          }), function F() {
            return I.length ? P.resolve(I.shift()(O.idbtrans)).then(F) : P.resolve();
          }().then(function() {
            zr(H, _);
          }));
        }).catch(g);
        var T, L;
        x(p).forEach(function(E) {
          La(s, E, p[E].primKey, p[E].indexes);
        }), la(t, s), P.follow(function() {
          return t.on.populate.fire(h);
        }).catch(g);
      });
    }
    function Gr(t, a) {
      zr(t._dbSchema, a), a.db.version % 10 != 0 || a.objectStoreNames.contains("$meta") || a.db.createObjectStore("$meta").add(Math.ceil(a.db.version / 10 - 1), "version");
      var s = Va(0, t.idbdb, a);
      Wn(t, t._dbSchema, a);
      for (var l = 0, p = Pa(s, t._dbSchema).change; l < p.length; l++) {
        var h = ((g) => {
          if (g.change.length || g.recreate) return console.warn("Unable to patch indexes of table ".concat(g.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
          var k = a.objectStore(g.name);
          g.add.forEach(function(T) {
            _e && console.debug("Dexie upgrade patch: Creating missing index ".concat(g.name, ".").concat(T.src)), da(k, T);
          });
        })(p[l]);
        if (typeof h == "object") return h.value;
      }
    }
    function Pa(t, a) {
      var s, l = { del: [], add: [], change: [] };
      for (s in t) a[s] || l.del.push(s);
      for (s in a) {
        var p = t[s], h = a[s];
        if (p) {
          var g = { name: s, def: h, recreate: !1, del: [], add: [], change: [] };
          if ("" + (p.primKey.keyPath || "") != "" + (h.primKey.keyPath || "") || p.primKey.auto !== h.primKey.auto) g.recreate = !0, l.change.push(g);
          else {
            var k = p.idxByName, T = h.idxByName, L = void 0;
            for (L in k) T[L] || g.del.push(L);
            for (L in T) {
              var E = k[L], A = T[L];
              E ? E.src !== A.src && g.change.push(A) : g.add.push(A);
            }
            (0 < g.del.length || 0 < g.add.length || 0 < g.change.length) && l.change.push(g);
          }
        } else l.add.push([s, h]);
      }
      return l;
    }
    function La(t, a, s, l) {
      var p = t.db.createObjectStore(a, s.keyPath ? { keyPath: s.keyPath, autoIncrement: s.auto } : { autoIncrement: s.auto });
      l.forEach(function(h) {
        return da(p, h);
      });
    }
    function zr(t, a) {
      x(t).forEach(function(s) {
        a.db.objectStoreNames.contains(s) || (_e && console.debug("Dexie: Creating missing table", s), La(a, s, t[s].primKey, t[s].indexes));
      });
    }
    function da(t, a) {
      t.createIndex(a.name, a.keyPath, { unique: a.unique, multiEntry: a.multi });
    }
    function Va(t, a, s) {
      var l = {};
      return Y(a.objectStoreNames, 0).forEach(function(p) {
        for (var h = s.objectStore(p), g = wr(Yn(L = h.keyPath), L || "", !0, !1, !!h.autoIncrement, L && typeof L != "string", !0), k = [], T = 0; T < h.indexNames.length; ++T) {
          var E = h.index(h.indexNames[T]), L = E.keyPath, E = wr(E.name, L, !!E.unique, !!E.multiEntry, !1, L && typeof L != "string", !1);
          k.push(E);
        }
        l[p] = ca(p, g, k);
      }), l;
    }
    function Wn(t, a, s) {
      for (var l = s.db.objectStoreNames, p = 0; p < l.length; ++p) {
        var h = l[p], g = s.objectStore(h);
        t._hasGetAll = "getAll" in g;
        for (var k = 0; k < g.indexNames.length; ++k) {
          var T, L = g.indexNames[k], E = g.index(L).keyPath, E = typeof E == "string" ? E : "[" + Y(E).join("+") + "]";
          a[h] && (T = a[h].idxByName[E]) && (T.name = L, delete a[h].idxByName[E], a[h].idxByName[L] = T);
        }
      }
      typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && y.WorkerGlobalScope && y instanceof y.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (t._hasGetAll = !1);
    }
    function Sr(t) {
      return t.split(",").map(function(a, s) {
        var p = a.split(":"), l = (l = p[1]) == null ? void 0 : l.trim(), p = (a = p[0].trim()).replace(/([&*]|\+\+)/g, ""), h = /^\[/.test(p) ? p.match(/^\[(.*)\]$/)[1].split("+") : p;
        return wr(p, h || null, /\&/.test(a), /\*/.test(a), /\+\+/.test(a), M(h), s === 0, l);
      });
    }
    zt.prototype._createTableSchema = ca, zt.prototype._parseIndexSyntax = Sr, zt.prototype._parseStoresSpec = function(t, a) {
      var s = this;
      x(t).forEach(function(l) {
        if (t[l] !== null) {
          var p = s._parseIndexSyntax(t[l]), h = p.shift();
          if (!h) throw new Pe.Schema("Invalid schema for table " + l + ": " + t[l]);
          if (h.unique = !0, h.multi) throw new Pe.Schema("Primary key cannot be multiEntry*");
          p.forEach(function(g) {
            if (g.auto) throw new Pe.Schema("Only primary key can be marked as autoIncrement (++)");
            if (!g.keyPath) throw new Pe.Schema("Index must have a name and cannot be an empty string");
          }), h = s._createTableSchema(l, h, p), a[l] = h;
        }
      });
    }, zt.prototype.stores = function(s) {
      var a = this.db, s = (this._cfg.storesSource = this._cfg.storesSource ? R(this._cfg.storesSource, s) : s, a._versions), l = {}, p = {};
      return s.forEach(function(h) {
        R(l, h._cfg.storesSource), p = h._cfg.dbschema = {}, h._parseStoresSpec(l, p);
      }), a._dbSchema = p, kr(a, [a._allTables, a, a.Transaction.prototype]), Tn(a, [a._allTables, a, a.Transaction.prototype, this._cfg.tables], x(p), p), a._storeNames = x(p), this;
    }, zt.prototype.upgrade = function(t) {
      return this._cfg.contentUpgrade = ht(this._cfg.contentUpgrade || C, t), this;
    };
    var qr = zt;
    function zt() {
    }
    function Bn(t, a) {
      var s = t._dbNamesDB;
      return s || (s = t._dbNamesDB = new yn(Oa, { addons: [], indexedDB: t, IDBKeyRange: a })).version(1).stores({ dbnames: "name" }), s.table("dbnames");
    }
    function Ua(t) {
      return t && typeof t.databases == "function";
    }
    function $a(t) {
      return Cn(function() {
        return Ie.letThrough = !0, t();
      });
    }
    function ja(t) {
      return !("from" in t);
    }
    var tn = function(t, a) {
      var s;
      if (!this) return s = new tn(), t && "d" in t && R(s, t), s;
      R(this, arguments.length ? { d: 1, from: t, to: 1 < arguments.length ? a : t } : { d: 0 });
    };
    function Zn(t, a, s) {
      var l = ot(a, s);
      if (!isNaN(l)) {
        if (0 < l) throw RangeError();
        if (ja(t)) return R(t, { from: a, to: s, d: 1 });
        var l = t.l, p = t.r;
        if (ot(s, t.from) < 0) return l ? Zn(l, a, s) : t.l = { from: a, to: s, d: 1, l: null, r: null }, Ka(t);
        if (0 < ot(a, t.to)) return p ? Zn(p, a, s) : t.r = { from: a, to: s, d: 1, l: null, r: null }, Ka(t);
        ot(a, t.from) < 0 && (t.from = a, t.l = null, t.d = p ? p.d + 1 : 1), 0 < ot(s, t.to) && (t.to = s, t.r = null, t.d = t.l ? t.l.d + 1 : 1), a = !t.r, l && !t.l && pa(t, l), p && a && pa(t, p);
      }
    }
    function pa(t, a) {
      ja(a) || function s(l, p) {
        var h = p.from, g = p.l, k = p.r;
        Zn(l, h, p.to), g && s(l, g), k && s(l, k);
      }(t, a);
    }
    function At(t, a) {
      var s = fa(a), l = s.next();
      if (!l.done) for (var p = l.value, h = fa(t), g = h.next(p.from), k = g.value; !l.done && !g.done; ) {
        if (ot(k.from, p.to) <= 0 && 0 <= ot(k.to, p.from)) return !0;
        ot(p.from, k.from) < 0 ? p = (l = s.next(k.from)).value : k = (g = h.next(p.from)).value;
      }
      return !1;
    }
    function fa(t) {
      var a = ja(t) ? null : { s: 0, n: t };
      return { next: function(s) {
        for (var l = 0 < arguments.length; a; ) switch (a.s) {
          case 0:
            if (a.s = 1, l) for (; a.n.l && ot(s, a.n.from) < 0; ) a = { up: a, n: a.n.l, s: 1 };
            else for (; a.n.l; ) a = { up: a, n: a.n.l, s: 1 };
          case 1:
            if (a.s = 2, !l || ot(s, a.n.to) <= 0) return { value: a.n, done: !1 };
          case 2:
            if (a.n.r) {
              a.s = 3, a = { up: a, n: a.n.r, s: 0 };
              continue;
            }
          case 3:
            a = a.up;
        }
        return { done: !0 };
      } };
    }
    function Ka(t) {
      var a, s, l, p = (((p = t.r) == null ? void 0 : p.d) || 0) - (((p = t.l) == null ? void 0 : p.d) || 0), p = 1 < p ? "r" : p < -1 ? "l" : "";
      p && (a = p == "r" ? "l" : "r", s = d({}, t), l = t[p], t.from = l.from, t.to = l.to, t[p] = l[p], s[p] = l[a], (t[a] = s).d = Qn(s)), t.d = Qn(t);
    }
    function Qn(s) {
      var a = s.r, s = s.l;
      return (a ? s ? Math.max(a.d, s.d) : a.d : s ? s.d : 0) + 1;
    }
    function Sn(t, a) {
      return x(a).forEach(function(s) {
        t[s] ? pa(t[s], a[s]) : t[s] = function l(p) {
          var h, g, k = {};
          for (h in p) X(p, h) && (g = p[h], k[h] = !g || typeof g != "object" || ut.has(g.constructor) ? g : l(g));
          return k;
        }(a[s]);
      }), t;
    }
    function Nn(t, a) {
      return t.all || a.all || Object.keys(t).some(function(s) {
        return a[s] && At(a[s], t[s]);
      });
    }
    U(tn.prototype, ((ze = { add: function(t) {
      return pa(this, t), this;
    }, addKey: function(t) {
      return Zn(this, t, t), this;
    }, addKeys: function(t) {
      var a = this;
      return t.forEach(function(s) {
        return Zn(a, s, s);
      }), this;
    }, hasKey: function(t) {
      var a = fa(this).next(t).value;
      return a && ot(a.from, t) <= 0 && 0 <= ot(a.to, t);
    } })[Pt] = function() {
      return fa(this);
    }, ze));
    var _n = {}, Et = {}, Xn = !1;
    function ha(t) {
      Sn(Et, t), Xn || (Xn = !0, setTimeout(function() {
        Xn = !1, Pr(Et, !(Et = {}));
      }, 0));
    }
    function Pr(t, a) {
      a === void 0 && (a = !1);
      var s = /* @__PURE__ */ new Set();
      if (t.all) for (var l = 0, p = Object.values(_n); l < p.length; l++) Jr(k = p[l], t, s, a);
      else for (var h in t) {
        var g, k, h = /^idb\:\/\/(.*)\/(.*)\//.exec(h);
        h && (g = h[1], h = h[2], k = _n["idb://".concat(g, "/").concat(h)]) && Jr(k, t, s, a);
      }
      s.forEach(function(T) {
        return T();
      });
    }
    function Jr(t, a, s, l) {
      for (var p = [], h = 0, g = Object.entries(t.queries.query); h < g.length; h++) {
        for (var k = g[h], T = k[0], L = [], E = 0, A = k[1]; E < A.length; E++) {
          var D = A[E];
          Nn(a, D.obsSet) ? D.subscribers.forEach(function(j) {
            return s.add(j);
          }) : l && L.push(D);
        }
        l && p.push([T, L]);
      }
      if (l) for (var O = 0, _ = p; O < _.length; O++) {
        var I = _[O], T = I[0], L = I[1];
        t.queries.query[T] = L;
      }
    }
    function Yr(t) {
      var a = t._state, s = t._deps.indexedDB;
      if (a.isBeingOpened || t.idbdb) return a.dbReadyPromise.then(function() {
        return a.dbOpenError ? Bt(a.dbOpenError) : t;
      });
      a.isBeingOpened = !0, a.dbOpenError = null, a.openComplete = !1;
      var l = a.openCanceller, p = Math.round(10 * t.verno), h = !1;
      function g() {
        if (a.openCanceller !== l) throw new Pe.DatabaseClosed("db.open() was cancelled");
      }
      function k() {
        return new P(function(D, O) {
          if (g(), !s) throw new Pe.MissingAPI();
          var _ = t.name, I = a.autoSchema || !p ? s.open(_) : s.open(_, p);
          if (!I) throw new Pe.MissingAPI();
          I.onerror = Yt(O), I.onblocked = St(t._fireOnBlocked), I.onupgradeneeded = St(function(j) {
            var H;
            E = I.transaction, a.autoSchema && !t._options.allowEmptyDB ? (I.onerror = Ft, E.abort(), I.result.close(), (H = s.deleteDatabase(_)).onsuccess = H.onerror = St(function() {
              O(new Pe.NoSuchDatabase("Database ".concat(_, " doesnt exist")));
            })) : (E.onerror = Yt(O), H = j.oldVersion > Math.pow(2, 62) ? 0 : j.oldVersion, A = H < 1, t.idbdb = I.result, h && Gr(t, E), on(t, H / 10, E, O));
          }, O), I.onsuccess = St(function() {
            E = null;
            var j, H, F, Q, ce, fe, we = t.idbdb = I.result, ue = Y(we.objectStoreNames);
            if (0 < ue.length) try {
              var Ce = we.transaction((ce = ue).length === 1 ? ce[0] : ce, "readonly");
              if (a.autoSchema) fe = we, Q = Ce, (F = t).verno = fe.version / 10, Q = F._dbSchema = Va(0, fe, Q), F._storeNames = Y(fe.objectStoreNames, 0), Tn(F, [F._allTables], x(Q), Q);
              else if (Wn(t, t._dbSchema, Ce), H = Ce, ((H = Pa(Va(0, (j = t).idbdb, H), j._dbSchema)).add.length || H.change.some(function(ke) {
                return ke.add.length || ke.change.length;
              })) && !h) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), we.close(), p = we.version + 1, h = !0, D(k());
              la(t, Ce);
            } catch {
            }
            Hn.push(t), we.onversionchange = St(function(ke) {
              a.vcFired = !0, t.on("versionchange").fire(ke);
            }), we.onclose = St(function() {
              t.close({ disableAutoOpen: !1 });
            }), A && (ue = t._deps, ce = _, Ua(fe = ue.indexedDB) || ce === Oa || Bn(fe, ue.IDBKeyRange).put({ name: ce }).catch(C)), D();
          }, O);
        }).catch(function(D) {
          switch (D == null ? void 0 : D.name) {
            case "UnknownError":
              if (0 < a.PR1398_maxLoop) return a.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), k();
              break;
            case "VersionError":
              if (0 < p) return p = 0, k();
          }
          return P.reject(D);
        });
      }
      var T, L = a.dbReadyResolve, E = null, A = !1;
      return P.race([l, (typeof navigator > "u" ? P.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(D) {
        function O() {
          return indexedDB.databases().finally(D);
        }
        T = setInterval(O, 100), O();
      }).finally(function() {
        return clearInterval(T);
      }) : Promise.resolve()).then(k)]).then(function() {
        return g(), a.onReadyBeingFired = [], P.resolve($a(function() {
          return t.on.ready.fire(t.vip);
        })).then(function D() {
          var O;
          if (0 < a.onReadyBeingFired.length) return O = a.onReadyBeingFired.reduce(ht, C), a.onReadyBeingFired = [], P.resolve($a(function() {
            return O(t.vip);
          })).then(D);
        });
      }).finally(function() {
        a.openCanceller === l && (a.onReadyBeingFired = null, a.isBeingOpened = !1);
      }).catch(function(D) {
        a.dbOpenError = D;
        try {
          E && E.abort();
        } catch {
        }
        return l === a.openCanceller && t._close(), Bt(D);
      }).finally(function() {
        a.openComplete = !0, L();
      }).then(function() {
        var D;
        return A && (D = {}, t.tables.forEach(function(O) {
          O.schema.indexes.forEach(function(_) {
            _.name && (D["idb://".concat(t.name, "/").concat(O.name, "/").concat(_.name)] = new tn(-1 / 0, [[[]]]));
          }), D["idb://".concat(t.name, "/").concat(O.name, "/")] = D["idb://".concat(t.name, "/").concat(O.name, "/:dels")] = new tn(-1 / 0, [[[]]]);
        }), gt(mn).fire(D), Pr(D, !0)), t;
      });
    }
    function xr(t) {
      function a(h) {
        return t.next(h);
      }
      var s = p(a), l = p(function(h) {
        return t.throw(h);
      });
      function p(h) {
        return function(k) {
          var k = h(k), T = k.value;
          return k.done ? T : T && typeof T.then == "function" ? T.then(s, l) : M(T) ? Promise.all(T).then(s, l) : s(T);
        };
      }
      return p(a)();
    }
    function xa(t, a, s) {
      for (var l = M(t) ? t.slice() : [t], p = 0; p < s; ++p) l.push(a);
      return l;
    }
    var vo = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(t) {
      return d(d({}, t), { table: function(l) {
        var s = t.table(l), l = s.schema, p = {}, h = [];
        function g(D, O, _) {
          var F = Zt(D), I = p[F] = p[F] || [], j = D == null ? 0 : typeof D == "string" ? 1 : D.length, H = 0 < O, F = d(d({}, _), { name: H ? "".concat(F, "(virtual-from:").concat(_.name, ")") : _.name, lowLevelIndex: _, isVirtual: H, keyTail: O, keyLength: j, extractKey: Sa(D), unique: !H && _.unique });
          return I.push(F), F.isPrimaryKey || h.push(F), 1 < j && g(j === 2 ? D[0] : D.slice(0, j - 1), O + 1, _), I.sort(function(Q, ce) {
            return Q.keyTail - ce.keyTail;
          }), F;
        }
        var k = g(l.primaryKey.keyPath, 0, l.primaryKey);
        p[":id"] = [k];
        for (var T = 0, L = l.indexes; T < L.length; T++) {
          var E = L[T];
          g(E.keyPath, 0, E);
        }
        function A(D) {
          var O, _ = D.query.index;
          return _.isVirtual ? d(d({}, D), { query: { index: _.lowLevelIndex, range: (O = D.query.range, _ = _.keyTail, { type: O.type === 1 ? 2 : O.type, lower: xa(O.lower, O.lowerOpen ? t.MAX_KEY : t.MIN_KEY, _), lowerOpen: !0, upper: xa(O.upper, O.upperOpen ? t.MIN_KEY : t.MAX_KEY, _), upperOpen: !0 }) } }) : D;
        }
        return d(d({}, s), { schema: d(d({}, l), { primaryKey: k, indexes: h, getIndexByKeyPath: function(D) {
          return (D = p[Zt(D)]) && D[0];
        } }), count: function(D) {
          return s.count(A(D));
        }, query: function(D) {
          return s.query(A(D));
        }, openCursor: function(D) {
          var O = D.query.index, _ = O.keyTail, I = O.keyLength;
          return O.isVirtual ? s.openCursor(A(D)).then(function(H) {
            return H && j(H);
          }) : s.openCursor(D);
          function j(H) {
            return Object.create(H, { continue: { value: function(F) {
              F != null ? H.continue(xa(F, D.reverse ? t.MAX_KEY : t.MIN_KEY, _)) : D.unique ? H.continue(H.key.slice(0, I).concat(D.reverse ? t.MIN_KEY : t.MAX_KEY, _)) : H.continue();
            } }, continuePrimaryKey: { value: function(F, Q) {
              H.continuePrimaryKey(xa(F, t.MAX_KEY, _), Q);
            } }, primaryKey: { get: function() {
              return H.primaryKey;
            } }, key: { get: function() {
              var F = H.key;
              return I === 1 ? F[0] : F.slice(0, I);
            } }, value: { get: function() {
              return H.value;
            } } });
          }
        } });
      } });
    } };
    function Cr(t, a, s, l) {
      return s = s || {}, l = l || "", x(t).forEach(function(p) {
        var h, g, k;
        X(a, p) ? (h = t[p], g = a[p], typeof h == "object" && typeof g == "object" && h && g ? (k = Ne(h)) !== Ne(g) ? s[l + p] = a[p] : k === "Object" ? Cr(h, g, s, l + p + ".") : h !== g && (s[l + p] = a[p]) : h !== g && (s[l + p] = a[p])) : s[l + p] = void 0;
      }), x(a).forEach(function(p) {
        X(t, p) || (s[l + p] = a[p]);
      }), s;
    }
    function Mr(t, a) {
      return a.type === "delete" ? a.keys : a.keys || a.values.map(t.extractKey);
    }
    var Ir = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(t) {
      return d(d({}, t), { table: function(a) {
        var s = t.table(a), l = s.schema.primaryKey;
        return d(d({}, s), { mutate: function(p) {
          var h = Ie.trans, g = h.table(a).hook, k = g.deleting, T = g.creating, L = g.updating;
          switch (p.type) {
            case "add":
              if (T.fire === C) break;
              return h._promise("readwrite", function() {
                return E(p);
              }, !0);
            case "put":
              if (T.fire === C && L.fire === C) break;
              return h._promise("readwrite", function() {
                return E(p);
              }, !0);
            case "delete":
              if (k.fire === C) break;
              return h._promise("readwrite", function() {
                return E(p);
              }, !0);
            case "deleteRange":
              if (k.fire === C) break;
              return h._promise("readwrite", function() {
                return function A(D, O, _) {
                  return s.query({ trans: D, values: !1, query: { index: l, range: O }, limit: _ }).then(function(I) {
                    var j = I.result;
                    return E({ type: "delete", keys: j, trans: D }).then(function(H) {
                      return 0 < H.numFailures ? Promise.reject(H.failures[0]) : j.length < _ ? { failures: [], numFailures: 0, lastResult: void 0 } : A(D, d(d({}, O), { lower: j[j.length - 1], lowerOpen: !0 }), _);
                    });
                  });
                }(p.trans, p.range, 1e4);
              }, !0);
          }
          return s.mutate(p);
          function E(A) {
            var D, O, _, I = Ie.trans, j = A.keys || Mr(l, A);
            if (j) return (A = A.type === "add" || A.type === "put" ? d(d({}, A), { keys: j }) : d({}, A)).type !== "delete" && (A.values = b([], A.values)), A.keys && (A.keys = b([], A.keys)), D = s, _ = j, ((O = A).type === "add" ? Promise.resolve([]) : D.getMany({ trans: O.trans, keys: _, cache: "immutable" })).then(function(H) {
              var F = j.map(function(Q, ce) {
                var fe, we, ue, Ce = H[ce], ke = { onerror: null, onsuccess: null };
                return A.type === "delete" ? k.fire.call(ke, Q, Ce, I) : A.type === "add" || Ce === void 0 ? (fe = T.fire.call(ke, Q, A.values[ce], I), Q == null && fe != null && (A.keys[ce] = Q = fe, l.outbound || ie(A.values[ce], l.keyPath, Q))) : (fe = Cr(Ce, A.values[ce]), (we = L.fire.call(ke, fe, Q, Ce, I)) && (ue = A.values[ce], Object.keys(we).forEach(function(he) {
                  X(ue, he) ? ue[he] = we[he] : ie(ue, he, we[he]);
                }))), ke;
              });
              return s.mutate(A).then(function(Q) {
                for (var ce = Q.failures, fe = Q.results, we = Q.numFailures, Q = Q.lastResult, ue = 0; ue < j.length; ++ue) {
                  var Ce = (fe || j)[ue], ke = F[ue];
                  Ce == null ? ke.onerror && ke.onerror(ce[ue]) : ke.onsuccess && ke.onsuccess(A.type === "put" && H[ue] ? A.values[ue] : Ce);
                }
                return { failures: ce, results: fe, numFailures: we, lastResult: Q };
              }).catch(function(Q) {
                return F.forEach(function(ce) {
                  return ce.onerror && ce.onerror(Q);
                }), Promise.reject(Q);
              });
            });
            throw new Error("Keys missing");
          }
        } });
      } });
    } };
    function Ca(t, a, s) {
      try {
        if (!a || a.keys.length < t.length) return null;
        for (var l = [], p = 0, h = 0; p < a.keys.length && h < t.length; ++p) ot(a.keys[p], t[h]) === 0 && (l.push(s ? Le(a.values[p]) : a.values[p]), ++h);
        return l.length === t.length ? l : null;
      } catch {
        return null;
      }
    }
    var Ma = { stack: "dbcore", level: -1, create: function(t) {
      return { table: function(a) {
        var s = t.table(a);
        return d(d({}, s), { getMany: function(l) {
          var p;
          return l.cache ? (p = Ca(l.keys, l.trans._cache, l.cache === "clone")) ? P.resolve(p) : s.getMany(l).then(function(h) {
            return l.trans._cache = { keys: l.keys, values: l.cache === "clone" ? Le(h) : h }, h;
          }) : s.getMany(l);
        }, mutate: function(l) {
          return l.type !== "add" && (l.trans._cache = null), s.mutate(l);
        } });
      } };
    } };
    function Ha(t, a) {
      return t.trans.mode === "readonly" && !!t.subscr && !t.trans.explicit && t.trans.db._options.cache !== "disabled" && !a.schema.primaryKey.outbound;
    }
    function Zr(t, a) {
      switch (t) {
        case "query":
          return a.values && !a.unique;
        case "get":
        case "getMany":
        case "count":
        case "openCursor":
          return !1;
      }
    }
    var Ia = { stack: "dbcore", level: 0, name: "Observability", create: function(t) {
      var a = t.schema.name, s = new tn(t.MIN_KEY, t.MAX_KEY);
      return d(d({}, t), { transaction: function(l, p, h) {
        if (Ie.subscr && p !== "readonly") throw new Pe.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Ie.querier));
        return t.transaction(l, p, h);
      }, table: function(l) {
        function p(j) {
          var I, j = j.query;
          return [I = j.index, new tn((I = (j = j.range).lower) != null ? I : t.MIN_KEY, (I = j.upper) != null ? I : t.MAX_KEY)];
        }
        var h = t.table(l), g = h.schema, k = g.primaryKey, T = g.indexes, L = k.extractKey, E = k.outbound, A = k.autoIncrement && T.filter(function(_) {
          return _.compound && _.keyPath.includes(k.keyPath);
        }), D = d(d({}, h), { mutate: function(_) {
          function I(Ae) {
            return Ae = "idb://".concat(a, "/").concat(l, "/").concat(Ae), ce[Ae] || (ce[Ae] = new tn());
          }
          var j, H, F, Q = _.trans, ce = _.mutatedParts || (_.mutatedParts = {}), fe = I(""), we = I(":dels"), ue = _.type, ke = _.type === "deleteRange" ? [_.range] : _.type === "delete" ? [_.keys] : _.values.length < 50 ? [Mr(k, _).filter(function(Ae) {
            return Ae;
          }), _.values] : [], Ce = ke[0], ke = ke[1], he = _.trans._cache;
          return M(Ce) ? (fe.addKeys(Ce), (ue = ue === "delete" || Ce.length === ke.length ? Ca(Ce, he) : null) || we.addKeys(Ce), (ue || ke) && (j = I, H = ue, F = ke, g.indexes.forEach(function(Ae) {
            var ct = j(Ae.name || "");
            function re(tt) {
              return tt != null ? Ae.extractKey(tt) : null;
            }
            function Fe(tt) {
              Ae.multiEntry && M(tt) ? tt.forEach(function(Dt) {
                return ct.addKey(Dt);
              }) : ct.addKey(tt);
            }
            (H || F).forEach(function(tt, Tt) {
              var pn = H && re(H[Tt]), Tt = F && re(F[Tt]);
              ot(pn, Tt) !== 0 && (pn != null && Fe(pn), Tt != null) && Fe(Tt);
            });
          }))) : Ce ? (ke = { from: (he = Ce.lower) != null ? he : t.MIN_KEY, to: (ue = Ce.upper) != null ? ue : t.MAX_KEY }, we.add(ke), fe.add(ke)) : (fe.add(s), we.add(s), g.indexes.forEach(function(Ae) {
            return I(Ae.name).add(s);
          })), h.mutate(_).then(function(Ae) {
            return !Ce || _.type !== "add" && _.type !== "put" || (fe.addKeys(Ae.results), A && A.forEach(function(ct) {
              for (var re = _.values.map(function(pn) {
                return ct.extractKey(pn);
              }), Fe = ct.keyPath.findIndex(function(pn) {
                return pn === k.keyPath;
              }), tt = 0, Dt = Ae.results.length; tt < Dt; ++tt) re[tt][Fe] = Ae.results[tt];
              I(ct.name).addKeys(re);
            })), Q.mutatedParts = Sn(Q.mutatedParts || {}, ce), Ae;
          });
        } }), O = { get: function(_) {
          return [k, new tn(_.key)];
        }, getMany: function(_) {
          return [k, new tn().addKeys(_.keys)];
        }, count: p, query: p, openCursor: p };
        return x(O).forEach(function(_) {
          D[_] = function(I) {
            var j = Ie.subscr, H = !!j, F = Ha(Ie, h) && Zr(_, I) ? I.obsSet = {} : j;
            if (H) {
              var Q, j = function(ke) {
                return ke = "idb://".concat(a, "/").concat(l, "/").concat(ke), F[ke] || (F[ke] = new tn());
              }, ce = j(""), fe = j(":dels"), H = O[_](I), we = H[0], H = H[1];
              if ((_ === "query" && we.isPrimaryKey && !I.values ? fe : j(we.name || "")).add(H), !we.isPrimaryKey) {
                if (_ !== "count") return Q = _ === "query" && E && I.values && h.query(d(d({}, I), { values: !1 })), h[_].apply(this, arguments).then(function(ke) {
                  if (_ === "query") {
                    if (E && I.values) return Q.then(function(re) {
                      return re = re.result, ce.addKeys(re), ke;
                    });
                    var he = I.values ? ke.result.map(L) : ke.result;
                    (I.values ? ce : fe).addKeys(he);
                  } else {
                    var Ae, ct;
                    if (_ === "openCursor") return ct = I.values, (Ae = ke) && Object.create(Ae, { key: { get: function() {
                      return fe.addKey(Ae.primaryKey), Ae.key;
                    } }, primaryKey: { get: function() {
                      var re = Ae.primaryKey;
                      return fe.addKey(re), re;
                    } }, value: { get: function() {
                      return ct && ce.addKey(Ae.primaryKey), Ae.value;
                    } } });
                  }
                  return ke;
                });
                fe.add(s);
              }
            }
            return h[_].apply(this, arguments);
          };
        }), D;
      } });
    } };
    function Qr(t, a, s) {
      var l;
      return s.numFailures === 0 ? a : a.type === "deleteRange" || (l = a.keys ? a.keys.length : "values" in a && a.values ? a.values.length : 1, s.numFailures === l) ? null : (l = d({}, a), M(l.keys) && (l.keys = l.keys.filter(function(p, h) {
        return !(h in s.failures);
      })), "values" in l && M(l.values) && (l.values = l.values.filter(function(p, h) {
        return !(h in s.failures);
      })), l);
    }
    function Ga(t, a) {
      return s = t, ((l = a).lower === void 0 || (l.lowerOpen ? 0 < ot(s, l.lower) : 0 <= ot(s, l.lower))) && (s = t, (l = a).upper === void 0 || (l.upperOpen ? ot(s, l.upper) < 0 : ot(s, l.upper) <= 0));
      var s, l;
    }
    function za(t, a, s, l, p, h) {
      var g, k, T, L, E, A;
      return !s || s.length === 0 || (g = a.query.index, k = g.multiEntry, T = a.query.range, L = l.schema.primaryKey.extractKey, E = g.extractKey, A = (g.lowLevelIndex || g).extractKey, (l = s.reduce(function(D, O) {
        var _ = D, I = [];
        if (O.type === "add" || O.type === "put") for (var j = new tn(), H = O.values.length - 1; 0 <= H; --H) {
          var F, Q = O.values[H], ce = L(Q);
          !j.hasKey(ce) && (F = E(Q), k && M(F) ? F.some(function(ke) {
            return Ga(ke, T);
          }) : Ga(F, T)) && (j.addKey(ce), I.push(Q));
        }
        switch (O.type) {
          case "add":
            var fe = new tn().addKeys(a.values ? D.map(function(he) {
              return L(he);
            }) : D), _ = D.concat(a.values ? I.filter(function(he) {
              return he = L(he), !fe.hasKey(he) && (fe.addKey(he), !0);
            }) : I.map(function(he) {
              return L(he);
            }).filter(function(he) {
              return !fe.hasKey(he) && (fe.addKey(he), !0);
            }));
            break;
          case "put":
            var we = new tn().addKeys(O.values.map(function(he) {
              return L(he);
            }));
            _ = D.filter(function(he) {
              return !we.hasKey(a.values ? L(he) : he);
            }).concat(a.values ? I : I.map(function(he) {
              return L(he);
            }));
            break;
          case "delete":
            var ue = new tn().addKeys(O.keys);
            _ = D.filter(function(he) {
              return !ue.hasKey(a.values ? L(he) : he);
            });
            break;
          case "deleteRange":
            var Ce = O.range;
            _ = D.filter(function(he) {
              return !Ga(L(he), Ce);
            });
        }
        return _;
      }, t)) === t) ? t : (l.sort(function(D, O) {
        return ot(A(D), A(O)) || ot(L(D), L(O));
      }), a.limit && a.limit < 1 / 0 && (l.length > a.limit ? l.length = a.limit : t.length === a.limit && l.length < a.limit && (p.dirty = !0)), h ? Object.freeze(l) : l);
    }
    function ea(t, a) {
      return ot(t.lower, a.lower) === 0 && ot(t.upper, a.upper) === 0 && !!t.lowerOpen == !!a.lowerOpen && !!t.upperOpen == !!a.upperOpen;
    }
    function Ar(t, a) {
      return ((s, l, p, h) => {
        if (s === void 0) return l !== void 0 ? -1 : 0;
        if (l === void 0) return 1;
        if ((s = ot(s, l)) === 0) {
          if (p && h) return 0;
          if (p) return 1;
          if (h) return -1;
        }
        return s;
      })(t.lower, a.lower, t.lowerOpen, a.lowerOpen) <= 0 && 0 <= ((s, l, p, h) => {
        if (s === void 0) return l !== void 0 ? 1 : 0;
        if (l === void 0) return -1;
        if ((s = ot(s, l)) === 0) {
          if (p && h) return 0;
          if (p) return -1;
          if (h) return 1;
        }
        return s;
      })(t.upper, a.upper, t.upperOpen, a.upperOpen);
    }
    function ko(t, a, s, l) {
      t.subscribers.add(s), l.addEventListener("abort", function() {
        var p, h;
        t.subscribers.delete(s), t.subscribers.size === 0 && (p = t, h = a, setTimeout(function() {
          p.subscribers.size === 0 && mt(h, p);
        }, 3e3));
      });
    }
    var Xr = { stack: "dbcore", level: 0, name: "Cache", create: function(t) {
      var a = t.schema.name;
      return d(d({}, t), { transaction: function(s, l, p) {
        var h, g, k = t.transaction(s, l, p);
        return l === "readwrite" && (p = (h = new AbortController()).signal, k.addEventListener("abort", (g = function(T) {
          return function() {
            if (h.abort(), l === "readwrite") {
              for (var L = /* @__PURE__ */ new Set(), E = 0, A = s; E < A.length; E++) {
                var D = A[E], O = _n["idb://".concat(a, "/").concat(D)];
                if (O) {
                  var _ = t.table(D), I = O.optimisticOps.filter(function(Ae) {
                    return Ae.trans === k;
                  });
                  if (k._explicit && T && k.mutatedParts) for (var j = 0, H = Object.values(O.queries.query); j < H.length; j++) for (var F = 0, Q = (we = H[j]).slice(); F < Q.length; F++) Nn((ue = Q[F]).obsSet, k.mutatedParts) && (mt(we, ue), ue.subscribers.forEach(function(Ae) {
                    return L.add(Ae);
                  }));
                  else if (0 < I.length) {
                    O.optimisticOps = O.optimisticOps.filter(function(Ae) {
                      return Ae.trans !== k;
                    });
                    for (var ce = 0, fe = Object.values(O.queries.query); ce < fe.length; ce++) for (var we, ue, Ce, ke = 0, he = (we = fe[ce]).slice(); ke < he.length; ke++) (ue = he[ke]).res != null && k.mutatedParts && (T && !ue.dirty ? (Ce = Object.isFrozen(ue.res), Ce = za(ue.res, ue.req, I, _, ue, Ce), ue.dirty ? (mt(we, ue), ue.subscribers.forEach(function(Ae) {
                      return L.add(Ae);
                    })) : Ce !== ue.res && (ue.res = Ce, ue.promise = P.resolve({ result: Ce }))) : (ue.dirty && mt(we, ue), ue.subscribers.forEach(function(Ae) {
                      return L.add(Ae);
                    })));
                  }
                }
              }
              L.forEach(function(Ae) {
                return Ae();
              });
            }
          };
        })(!1), { signal: p }), k.addEventListener("error", g(!1), { signal: p }), k.addEventListener("complete", g(!0), { signal: p })), k;
      }, table: function(s) {
        var l = t.table(s), p = l.schema.primaryKey;
        return d(d({}, l), { mutate: function(h) {
          var g, k = Ie.trans;
          return !p.outbound && k.db._options.cache !== "disabled" && !k.explicit && k.idbtrans.mode === "readwrite" && (g = _n["idb://".concat(a, "/").concat(s)]) ? (k = l.mutate(h), h.type !== "add" && h.type !== "put" || !(50 <= h.values.length || Mr(p, h).some(function(T) {
            return T == null;
          })) ? (g.optimisticOps.push(h), h.mutatedParts && ha(h.mutatedParts), k.then(function(T) {
            0 < T.numFailures && (mt(g.optimisticOps, h), (T = Qr(0, h, T)) && g.optimisticOps.push(T), h.mutatedParts) && ha(h.mutatedParts);
          }), k.catch(function() {
            mt(g.optimisticOps, h), h.mutatedParts && ha(h.mutatedParts);
          })) : k.then(function(T) {
            var L = Qr(0, d(d({}, h), { values: h.values.map(function(E, A) {
              var D;
              return T.failures[A] ? E : (ie(D = (D = p.keyPath) != null && D.includes(".") ? Le(E) : d({}, E), p.keyPath, T.results[A]), D);
            }) }), T);
            g.optimisticOps.push(L), queueMicrotask(function() {
              return h.mutatedParts && ha(h.mutatedParts);
            });
          }), k) : l.mutate(h);
        }, query: function(h) {
          var g, k, T, L, E, A, D;
          return Ha(Ie, l) && Zr("query", h) ? (g = ((T = Ie.trans) == null ? void 0 : T.db._options.cache) === "immutable", k = (T = Ie).requery, T = T.signal, A = ((O, _, I, j) => {
            var H = _n["idb://".concat(O, "/").concat(_)];
            if (!H) return [];
            if (!(O = H.queries[I])) return [null, !1, H, null];
            var F = O[(j.query ? j.query.index.name : null) || ""];
            if (!F) return [null, !1, H, null];
            switch (I) {
              case "query":
                var Q = F.find(function(ce) {
                  return ce.req.limit === j.limit && ce.req.values === j.values && ea(ce.req.query.range, j.query.range);
                });
                return Q ? [Q, !0, H, F] : [F.find(function(ce) {
                  return ("limit" in ce.req ? ce.req.limit : 1 / 0) >= j.limit && (!j.values || ce.req.values) && Ar(ce.req.query.range, j.query.range);
                }), !1, H, F];
              case "count":
                return Q = F.find(function(ce) {
                  return ea(ce.req.query.range, j.query.range);
                }), [Q, !!Q, H, F];
            }
          })(a, s, "query", h), D = A[0], L = A[2], E = A[3], D && A[1] ? D.obsSet = h.obsSet : (A = l.query(h).then(function(O) {
            var _ = O.result;
            if (D && (D.res = _), g) {
              for (var I = 0, j = _.length; I < j; ++I) Object.freeze(_[I]);
              Object.freeze(_);
            } else O.result = Le(_);
            return O;
          }).catch(function(O) {
            return E && D && mt(E, D), Promise.reject(O);
          }), D = { obsSet: h.obsSet, promise: A, subscribers: /* @__PURE__ */ new Set(), type: "query", req: h, dirty: !1 }, E ? E.push(D) : (E = [D], (L = L || (_n["idb://".concat(a, "/").concat(s)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[h.query.index.name || ""] = E)), ko(D, E, k, T), D.promise.then(function(O) {
            return { result: za(O.result, h, L == null ? void 0 : L.optimisticOps, l, D, g) };
          })) : l.query(h);
        } });
      } });
    } };
    function qa(t, a) {
      return new Proxy(t, { get: function(s, l, p) {
        return l === "db" ? a : Reflect.get(s, l, p);
      } });
    }
    Nt.prototype.version = function(t) {
      if (isNaN(t) || t < 0.1) throw new Pe.Type("Given version is not a positive number");
      if (t = Math.round(10 * t) / 10, this.idbdb || this._state.isBeingOpened) throw new Pe.Schema("Cannot add version when database is open");
      this.verno = Math.max(this.verno, t);
      var a = this._versions, s = a.filter(function(l) {
        return l._cfg.version === t;
      })[0];
      return s || (s = new this.Version(t), a.push(s), a.sort(Hr), s.stores({}), this._state.autoSchema = !1), s;
    }, Nt.prototype._whenReady = function(t) {
      var a = this;
      return this.idbdb && (this._state.openComplete || Ie.letThrough || this._vip) ? t() : new P(function(s, l) {
        if (a._state.openComplete) return l(new Pe.DatabaseClosed(a._state.dbOpenError));
        if (!a._state.isBeingOpened) {
          if (!a._state.autoOpen) return void l(new Pe.DatabaseClosed());
          a.open().catch(C);
        }
        a._state.dbReadyPromise.then(s, l);
      }).then(t);
    }, Nt.prototype.use = function(p) {
      var a = p.stack, s = p.create, l = p.level, p = p.name, h = (p && this.unuse({ stack: a, name: p }), this._middlewares[a] || (this._middlewares[a] = []));
      return h.push({ stack: a, create: s, level: l ?? 10, name: p }), h.sort(function(g, k) {
        return g.level - k.level;
      }), this;
    }, Nt.prototype.unuse = function(t) {
      var a = t.stack, s = t.name, l = t.create;
      return a && this._middlewares[a] && (this._middlewares[a] = this._middlewares[a].filter(function(p) {
        return l ? p.create !== l : !!s && p.name !== s;
      })), this;
    }, Nt.prototype.open = function() {
      var t = this;
      return jn(jt, function() {
        return Yr(t);
      });
    }, Nt.prototype._close = function() {
      this.on.close.fire(new CustomEvent("close"));
      var t = this._state, a = Hn.indexOf(this);
      if (0 <= a && Hn.splice(a, 1), this.idbdb) {
        try {
          this.idbdb.close();
        } catch {
        }
        this.idbdb = null;
      }
      t.isBeingOpened || (t.dbReadyPromise = new P(function(s) {
        t.dbReadyResolve = s;
      }), t.openCanceller = new P(function(s, l) {
        t.cancelOpen = l;
      }));
    }, Nt.prototype.close = function(a) {
      var a = (a === void 0 ? { disableAutoOpen: !0 } : a).disableAutoOpen, s = this._state;
      a ? (s.isBeingOpened && s.cancelOpen(new Pe.DatabaseClosed()), this._close(), s.autoOpen = !1, s.dbOpenError = new Pe.DatabaseClosed()) : (this._close(), s.autoOpen = this._options.autoOpen || s.isBeingOpened, s.openComplete = !1, s.dbOpenError = null);
    }, Nt.prototype.delete = function(t) {
      var a = this, s = (t === void 0 && (t = { disableAutoOpen: !0 }), 0 < arguments.length && typeof arguments[0] != "object"), l = this._state;
      return new P(function(p, h) {
        function g() {
          a.close(t);
          var k = a._deps.indexedDB.deleteDatabase(a.name);
          k.onsuccess = St(function() {
            var T, L, E;
            T = a._deps, L = a.name, Ua(E = T.indexedDB) || L === Oa || Bn(E, T.IDBKeyRange).delete(L).catch(C), p();
          }), k.onerror = Yt(h), k.onblocked = a._fireOnBlocked;
        }
        if (s) throw new Pe.InvalidArgument("Invalid closeOptions argument to db.delete()");
        l.isBeingOpened ? l.dbReadyPromise.then(g) : g();
      });
    }, Nt.prototype.backendDB = function() {
      return this.idbdb;
    }, Nt.prototype.isOpen = function() {
      return this.idbdb !== null;
    }, Nt.prototype.hasBeenClosed = function() {
      var t = this._state.dbOpenError;
      return t && t.name === "DatabaseClosed";
    }, Nt.prototype.hasFailed = function() {
      return this._state.dbOpenError !== null;
    }, Nt.prototype.dynamicallyOpened = function() {
      return this._state.autoSchema;
    }, Object.defineProperty(Nt.prototype, "tables", { get: function() {
      var t = this;
      return x(this._allTables).map(function(a) {
        return t._allTables[a];
      });
    }, enumerable: !1, configurable: !0 }), Nt.prototype.transaction = function() {
      var t = (function(a, s, l) {
        var p = arguments.length;
        if (p < 2) throw new Pe.InvalidArgument("Too few arguments");
        for (var h = new Array(p - 1); --p; ) h[p - 1] = arguments[p];
        return l = h.pop(), [a, qe(h), l];
      }).apply(this, arguments);
      return this._transaction.apply(this, t);
    }, Nt.prototype._transaction = function(t, a, s) {
      var l, p, h = this, g = Ie.trans, k = (g && g.db === this && t.indexOf("!") === -1 || (g = null), t.indexOf("?") !== -1);
      t = t.replace("!", "").replace("?", "");
      try {
        if (p = a.map(function(L) {
          if (L = L instanceof h.Table ? L.name : L, typeof L != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
          return L;
        }), t == "r" || t === fr) l = fr;
        else {
          if (t != "rw" && t != de) throw new Pe.InvalidArgument("Invalid transaction mode: " + t);
          l = de;
        }
        if (g) {
          if (g.mode === fr && l === de) {
            if (!k) throw new Pe.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
            g = null;
          }
          g && p.forEach(function(L) {
            if (g && g.storeNames.indexOf(L) === -1) {
              if (!k) throw new Pe.SubTransaction("Table " + L + " not included in parent transaction.");
              g = null;
            }
          }), k && g && !g.active && (g = null);
        }
      } catch (L) {
        return g ? g._promise(null, function(E, A) {
          A(L);
        }) : Bt(L);
      }
      var T = (function L(E, A, D, O, _) {
        return P.resolve().then(function() {
          var F = Ie.transless || Ie, I = E._createTransaction(A, D, E._dbSchema, O), F = (I.explicit = !0, { trans: I, transless: F });
          if (O) I.idbtrans = O.idbtrans;
          else try {
            I.create(), I.idbtrans._explicit = !0, E._state.PR1398_maxLoop = 3;
          } catch (Q) {
            return Q.name === Rt.InvalidState && E.isOpen() && 0 < --E._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), E.close({ disableAutoOpen: !1 }), E.open().then(function() {
              return L(E, A, D, null, _);
            })) : Bt(Q);
          }
          var j, H = W(_), F = (H && $n(), P.follow(function() {
            var Q;
            (j = _.call(I, I)) && (H ? (Q = kn.bind(null, null), j.then(Q, Q)) : typeof j.next == "function" && typeof j.throw == "function" && (j = xr(j)));
          }, F));
          return (j && typeof j.then == "function" ? P.resolve(j).then(function(Q) {
            return I.active ? Q : Bt(new Pe.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
          }) : F.then(function() {
            return j;
          })).then(function(Q) {
            return O && I._resolve(), I._completion.then(function() {
              return Q;
            });
          }).catch(function(Q) {
            return I._reject(Q), Bt(Q);
          });
        });
      }).bind(null, this, l, p, g, s);
      return g ? g._promise(l, T, "lock") : Ie.trans ? jn(Ie.transless, function() {
        return h._whenReady(T);
      }) : this._whenReady(T);
    }, Nt.prototype.table = function(t) {
      if (X(this._allTables, t)) return this._allTables[t];
      throw new Pe.InvalidTable("Table ".concat(t, " does not exist"));
    };
    var yn = Nt;
    function Nt(t, a) {
      var s, l, p, h, g, k = this, T = (this._middlewares = {}, this.verno = 0, Nt.dependencies), T = (this._options = a = d({ addons: Nt.addons, autoOpen: !0, indexedDB: T.indexedDB, IDBKeyRange: T.IDBKeyRange, cache: "cloned" }, a), this._deps = { indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange }, a.addons), L = (this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this, { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: C, dbReadyPromise: null, cancelOpen: C, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: a.autoOpen }), E = (L.dbReadyPromise = new P(function(A) {
        L.dbReadyResolve = A;
      }), L.openCanceller = new P(function(A, D) {
        L.cancelOpen = D;
      }), this._state = L, this.name = t, this.on = oa(this, "populate", "blocked", "versionchange", "close", { ready: [ht, C] }), this.once = function(A, D) {
        var O = function() {
          for (var _ = [], I = 0; I < arguments.length; I++) _[I] = arguments[I];
          k.on(A).unsubscribe(O), D.apply(k, _);
        };
        return k.on(A, O);
      }, this.on.ready.subscribe = ve(this.on.ready.subscribe, function(A) {
        return function(D, O) {
          Nt.vip(function() {
            var _, I = k._state;
            I.openComplete ? (I.dbOpenError || P.resolve().then(D), O && A(D)) : I.onReadyBeingFired ? (I.onReadyBeingFired.push(D), O && A(D)) : (A(D), _ = k, O || A(function j() {
              _.on.ready.unsubscribe(D), _.on.ready.unsubscribe(j);
            }));
          });
        };
      }), this.Collection = (s = this, ba(bo.prototype, function(j, I) {
        this.db = s;
        var O = Wa, _ = null;
        if (I) try {
          O = I();
        } catch (F) {
          _ = F;
        }
        var I = j._ctx, j = I.table, H = j.hook.reading.fire;
        this._ctx = { table: j, index: I.index, isPrimKey: !I.index || j.schema.primKey.keyPath && I.index === j.schema.primKey.name, range: O, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: _, or: I.or, valueMapper: H !== G ? H : null };
      })), this.Table = (l = this, ba(Ur.prototype, function(A, D, O) {
        this.db = l, this._tx = O, this.name = A, this.schema = D, this.hook = l._allTables[A] ? l._allTables[A].hook : oa(null, { creating: [De, C], reading: [z, G], updating: [Oe, C], deleting: [$e, C] });
      })), this.Transaction = (p = this, ba(jr.prototype, function(A, D, O, _, I) {
        var j = this;
        A !== "readonly" && D.forEach(function(H) {
          H = (H = O[H]) == null ? void 0 : H.yProps, H && (D = D.concat(H.map(function(F) {
            return F.updatesTable;
          })));
        }), this.db = p, this.mode = A, this.storeNames = D, this.schema = O, this.chromeTransactionDurability = _, this.idbtrans = null, this.on = oa(this, "complete", "error", "abort"), this.parent = I || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new P(function(H, F) {
          j._resolve = H, j._reject = F;
        }), this._completion.then(function() {
          j.active = !1, j.on.complete.fire();
        }, function(H) {
          var F = j.active;
          return j.active = !1, j.on.error.fire(H), j.parent ? j.parent._reject(H) : F && j.idbtrans && j.idbtrans.abort(), Bt(H);
        });
      })), this.Version = (h = this, ba(qr.prototype, function(A) {
        this.db = h, this._cfg = { version: A, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
      })), this.WhereClause = (g = this, ba(En.prototype, function(A, D, O) {
        if (this.db = g, this._ctx = { table: A, index: D === ":id" ? null : D, or: O }, this._cmp = this._ascending = ot, this._descending = function(_, I) {
          return ot(I, _);
        }, this._max = function(_, I) {
          return 0 < ot(_, I) ? _ : I;
        }, this._min = function(_, I) {
          return ot(_, I) < 0 ? _ : I;
        }, this._IDBKeyRange = g._deps.IDBKeyRange, !this._IDBKeyRange) throw new Pe.MissingAPI();
      })), this.on("versionchange", function(A) {
        0 < A.newVersion ? console.warn("Another connection wants to upgrade database '".concat(k.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(k.name, "'. Closing db now to resume the delete request.")), k.close({ disableAutoOpen: !1 });
      }), this.on("blocked", function(A) {
        !A.newVersion || A.newVersion < A.oldVersion ? console.warn("Dexie.delete('".concat(k.name, "') was blocked")) : console.warn("Upgrade '".concat(k.name, "' blocked by other connection holding version ").concat(A.oldVersion / 10));
      }), this._maxKey = ua(a.IDBKeyRange), this._createTransaction = function(A, D, O, _) {
        return new k.Transaction(A, D, O, k._options.chromeTransactionDurability, _);
      }, this._fireOnBlocked = function(A) {
        k.on("blocked").fire(A), Hn.filter(function(D) {
          return D.name === k.name && D !== k && !D._state.vcFired;
        }).map(function(D) {
          return D.on("versionchange").fire(A);
        });
      }, this.use(Ma), this.use(Xr), this.use(Ia), this.use(vo), this.use(Ir), new Proxy(this, { get: function(A, D, O) {
        var _;
        return D === "_vip" || (D === "table" ? function(I) {
          return qa(k.table(I), E);
        } : (_ = Reflect.get(A, D, O)) instanceof Ur ? qa(_, E) : D === "tables" ? _.map(function(I) {
          return qa(I, E);
        }) : D === "_createTransaction" ? function() {
          return qa(_.apply(this, arguments), E);
        } : _);
      } }));
      this.vip = E, T.forEach(function(A) {
        return A(k);
      });
    }
    var Aa, sn = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", So = (Ja.prototype.subscribe = function(t, a, s) {
      return this._subscribe(t && typeof t != "function" ? t : { next: t, error: a, complete: s });
    }, Ja.prototype[sn] = function() {
      return this;
    }, Ja);
    function Ja(t) {
      this._subscribe = t;
    }
    try {
      Aa = { indexedDB: y.indexedDB || y.mozIndexedDB || y.webkitIndexedDB || y.msIndexedDB, IDBKeyRange: y.IDBKeyRange || y.webkitIDBKeyRange };
    } catch {
      Aa = { indexedDB: null, IDBKeyRange: null };
    }
    function eo(t) {
      var a, s = !1, l = new So(function(p) {
        var h = W(t), g, k = !1, T = {}, L = {}, E = { get closed() {
          return k;
        }, unsubscribe: function() {
          k || (k = !0, g && g.abort(), A && gt.storagemutated.unsubscribe(O));
        } }, A = (p.start && p.start(E), !1), D = function() {
          return dr(_);
        }, O = function(I) {
          Sn(T, I), Nn(L, T) && D();
        }, _ = function() {
          var I, j, H;
          !k && Aa.indexedDB && (T = {}, I = {}, g && g.abort(), g = new AbortController(), H = ((F) => {
            var Q = Xt();
            try {
              h && $n();
              var ce = Cn(t, F);
              return ce = h ? ce.finally(kn) : ce;
            } finally {
              Q && un();
            }
          })(j = { subscr: I, signal: g.signal, requery: D, querier: t, trans: null }), Promise.resolve(H).then(function(F) {
            s = !0, a = F, k || j.signal.aborted || (T = {}, ((Q) => {
              for (var ce in Q) if (X(Q, ce)) return;
              return 1;
            })(L = I) || A || (gt(mn, O), A = !0), dr(function() {
              return !k && p.next && p.next(F);
            }));
          }, function(F) {
            s = !1, ["DatabaseClosedError", "AbortError"].includes(F == null ? void 0 : F.name) || k || dr(function() {
              k || p.error && p.error(F);
            });
          }));
        };
        return setTimeout(D, 0), E;
      });
      return l.hasValue = function() {
        return s;
      }, l.getValue = function() {
        return a;
      }, l;
    }
    var Fn = yn;
    function ta(t) {
      var a = Vn;
      try {
        Vn = !0, gt.storagemutated.fire(t), Pr(t, !0);
      } finally {
        Vn = a;
      }
    }
    U(Fn, d(d({}, ae), { delete: function(t) {
      return new Fn(t, { addons: [] }).delete();
    }, exists: function(t) {
      return new Fn(t, { addons: [] }).open().then(function(a) {
        return a.close(), !0;
      }).catch("NoSuchDatabaseError", function() {
        return !1;
      });
    }, getDatabaseNames: function(t) {
      try {
        return a = Fn.dependencies, s = a.indexedDB, a = a.IDBKeyRange, (Ua(s) ? Promise.resolve(s.databases()).then(function(l) {
          return l.map(function(p) {
            return p.name;
          }).filter(function(p) {
            return p !== Oa;
          });
        }) : Bn(s, a).toCollection().primaryKeys()).then(t);
      } catch {
        return Bt(new Pe.MissingAPI());
      }
      var a, s;
    }, defineClass: function() {
      return function(t) {
        R(this, t);
      };
    }, ignoreTransaction: function(t) {
      return Ie.trans ? jn(Ie.transless, t) : t();
    }, vip: $a, async: function(t) {
      return function() {
        try {
          var a = xr(t.apply(this, arguments));
          return a && typeof a.then == "function" ? a : P.resolve(a);
        } catch (s) {
          return Bt(s);
        }
      };
    }, spawn: function(t, a, s) {
      try {
        var l = xr(t.apply(s, a || []));
        return l && typeof l.then == "function" ? l : P.resolve(l);
      } catch (p) {
        return Bt(p);
      }
    }, currentTransaction: { get: function() {
      return Ie.trans || null;
    } }, waitFor: function(t, a) {
      return t = P.resolve(typeof t == "function" ? Fn.ignoreTransaction(t) : t).timeout(a || 6e4), Ie.trans ? Ie.trans.waitFor(t) : t;
    }, Promise: P, debug: { get: function() {
      return _e;
    }, set: function(t) {
      fn(t);
    } }, derive: ge, extend: R, props: U, override: ve, Events: oa, on: gt, liveQuery: eo, extendObservabilitySet: Sn, getByKeyPath: oe, setByKeyPath: ie, delByKeyPath: function(t, a) {
      typeof a == "string" ? ie(t, a, void 0) : "length" in a && [].map.call(a, function(s) {
        ie(t, s, void 0);
      });
    }, shallowClone: lt, deepClone: Le, getObjectDiff: Cr, cmp: ot, asap: xe, minKey: -1 / 0, addons: [], connections: Hn, errnames: Rt, dependencies: Aa, cache: _n, semVer: "4.3.0", version: "4.3.0".split(".").map(function(t) {
      return parseInt(t);
    }).reduce(function(t, a, s) {
      return t + a / Math.pow(10, 2 * s);
    }) })), Fn.maxKey = ua(Fn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (gt(mn, function(t) {
      Vn || (t = new CustomEvent(mr, { detail: t }), Vn = !0, dispatchEvent(t), Vn = !1);
    }), addEventListener(mr, function(t) {
      t = t.detail, Vn || ta(t);
    }));
    var Ln, Vn = !1, to = function() {
    };
    return typeof BroadcastChannel < "u" && ((to = function() {
      (Ln = new BroadcastChannel(mr)).onmessage = function(t) {
        return t.data && ta(t.data);
      };
    })(), typeof Ln.unref == "function" && Ln.unref(), gt(mn, function(t) {
      Vn || Ln.postMessage(t);
    })), typeof addEventListener < "u" && (addEventListener("pagehide", function(t) {
      if (!yn.disableBfCache && t.persisted) {
        _e && console.debug("Dexie: handling persisted pagehide"), Ln != null && Ln.close();
        for (var a = 0, s = Hn; a < s.length; a++) s[a].close({ disableAutoOpen: !1 });
      }
    }), addEventListener("pageshow", function(t) {
      !yn.disableBfCache && t.persisted && (_e && console.debug("Dexie: handling persisted pageshow"), to(), ta({ all: new tn(-1 / 0, [[]]) }));
    })), P.rejectionMapper = function(t, a) {
      return !t || t instanceof Re || t instanceof TypeError || t instanceof SyntaxError || !t.name || !Vt[t.name] ? t : (a = new Vt[t.name](a || t.message, t), "stack" in t && me(a, "stack", { get: function() {
        return this.inner.stack;
      } }), a);
    }, fn(_e), d(yn, Object.freeze({ __proto__: null, Dexie: yn, Entity: Ze, PropModification: zn, RangeSet: tn, add: function(t) {
      return new zn({ add: t });
    }, cmp: ot, default: yn, liveQuery: eo, mergeRanges: pa, rangesOverlap: At, remove: function(t) {
      return new zn({ remove: t });
    }, replacePrefix: function(t, a) {
      return new zn({ replacePrefix: [t, a] });
    } }), { default: yn }), yn;
  });
})(Us);
var nl = Us.exports;
const ni = /* @__PURE__ */ si(nl), bs = Symbol.for("Dexie"), Wr = globalThis[bs] || (globalThis[bs] = ni);
if (ni.semVer !== Wr.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${ni.semVer} and ${Wr.semVer}`);
const {
  liveQuery: al,
  mergeRanges: rl,
  rangesOverlap: ol,
  RangeSet: il,
  cmp: sl,
  Entity: cl,
  PropModification: ul,
  replacePrefix: ll,
  add: dl,
  remove: pl,
  DexieYProvider: fl
} = Wr, hl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dexie: Wr,
  DexieYProvider: fl,
  Entity: cl,
  PropModification: ul,
  RangeSet: il,
  add: dl,
  cmp: sl,
  default: Wr,
  liveQuery: al,
  mergeRanges: rl,
  rangesOverlap: ol,
  remove: pl,
  replacePrefix: ll
}, Symbol.toStringTag, { value: "Module" })), gl = /* @__PURE__ */ Ls(hl);
var ml = "Expected a function", vs = NaN, wl = "[object Symbol]", yl = /^\s+|\s+$/g, bl = /^[-+]0x[0-9a-f]+$/i, vl = /^0b[01]+$/i, kl = /^0o[0-7]+$/i, Sl = parseInt, Pl = typeof ir == "object" && ir && ir.Object === Object && ir, xl = typeof self == "object" && self && self.Object === Object && self, Cl = Pl || xl || Function("return this")(), Ml = Object.prototype, Il = Ml.toString, Al = Math.max, El = Math.min, Zo = function() {
  return Cl.Date.now();
};
function Tl(f, o, c) {
  var d, b, y, x, M, R, V = 0, J = !1, X = !1, U = !0;
  if (typeof f != "function")
    throw new TypeError(ml);
  o = ks(o) || 0, ai(c) && (J = !!c.leading, X = "maxWait" in c, y = X ? Al(ks(c.maxWait) || 0, o) : y, U = "trailing" in c ? !!c.trailing : U);
  function B(oe) {
    var ie = d, lt = b;
    return d = b = void 0, V = oe, x = f.apply(lt, ie), x;
  }
  function me(oe) {
    return V = oe, M = setTimeout(Se, o), J ? B(oe) : x;
  }
  function ge(oe) {
    var ie = oe - R, lt = oe - V, at = o - ie;
    return X ? El(at, y - lt) : at;
  }
  function q(oe) {
    var ie = oe - R, lt = oe - V;
    return R === void 0 || ie >= o || ie < 0 || X && lt >= y;
  }
  function Se() {
    var oe = Zo();
    if (q(oe))
      return Y(oe);
    M = setTimeout(Se, ge(oe));
  }
  function Y(oe) {
    return M = void 0, U && d ? B(oe) : (d = b = void 0, x);
  }
  function ve() {
    M !== void 0 && clearTimeout(M), V = 0, d = R = b = M = void 0;
  }
  function te() {
    return M === void 0 ? x : Y(Zo());
  }
  function xe() {
    var oe = Zo(), ie = q(oe);
    if (d = arguments, b = this, R = oe, ie) {
      if (M === void 0)
        return me(R);
      if (X)
        return M = setTimeout(Se, o), B(R);
    }
    return M === void 0 && (M = setTimeout(Se, o)), x;
  }
  return xe.cancel = ve, xe.flush = te, xe;
}
function ai(f) {
  var o = typeof f;
  return !!f && (o == "object" || o == "function");
}
function _l(f) {
  return !!f && typeof f == "object";
}
function Rl(f) {
  return typeof f == "symbol" || _l(f) && Il.call(f) == wl;
}
function ks(f) {
  if (typeof f == "number")
    return f;
  if (Rl(f))
    return vs;
  if (ai(f)) {
    var o = typeof f.valueOf == "function" ? f.valueOf() : f;
    f = ai(o) ? o + "" : o;
  }
  if (typeof f != "string")
    return f === 0 ? f : +f;
  f = f.replace(yl, "");
  var c = vl.test(f);
  return c || kl.test(f) ? Sl(f.slice(2), c ? 2 : 8) : bl.test(f) ? vs : +f;
}
var Dl = Tl, ri = { exports: {} }, Qe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ss;
function Ol() {
  if (Ss) return Qe;
  Ss = 1;
  var f = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), x = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), V = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), U = Symbol.iterator;
  function B(W) {
    return W === null || typeof W != "object" ? null : (W = U && W[U] || W["@@iterator"], typeof W == "function" ? W : null);
  }
  var me = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, ge = Object.assign, q = {};
  function Se(W, ae, Ee) {
    this.props = W, this.context = ae, this.refs = q, this.updater = Ee || me;
  }
  Se.prototype.isReactComponent = {}, Se.prototype.setState = function(W, ae) {
    if (typeof W != "object" && typeof W != "function" && W != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, W, ae, "setState");
  }, Se.prototype.forceUpdate = function(W) {
    this.updater.enqueueForceUpdate(this, W, "forceUpdate");
  };
  function Y() {
  }
  Y.prototype = Se.prototype;
  function ve(W, ae, Ee) {
    this.props = W, this.context = ae, this.refs = q, this.updater = Ee || me;
  }
  var te = ve.prototype = new Y();
  te.constructor = ve, ge(te, Se.prototype), te.isPureReactComponent = !0;
  var xe = Array.isArray;
  function oe() {
  }
  var ie = { H: null, A: null, T: null, S: null }, lt = Object.prototype.hasOwnProperty;
  function at(W, ae, Ee) {
    var Re = Ee.ref;
    return {
      $$typeof: f,
      type: W,
      key: ae,
      ref: Re !== void 0 ? Re : null,
      props: Ee
    };
  }
  function qe(W, ae) {
    return at(W.type, ae, W.props);
  }
  function ut(W) {
    return typeof W == "object" && W !== null && W.$$typeof === f;
  }
  function Ot(W) {
    var ae = { "=": "=0", ":": "=2" };
    return "$" + W.replace(/[=:]/g, function(Ee) {
      return ae[Ee];
    });
  }
  var Le = /\/+/g;
  function Ct(W, ae) {
    return typeof W == "object" && W !== null && W.key != null ? Ot("" + W.key) : ae.toString(36);
  }
  function Ne(W) {
    switch (W.status) {
      case "fulfilled":
        return W.value;
      case "rejected":
        throw W.reason;
      default:
        switch (typeof W.status == "string" ? W.then(oe, oe) : (W.status = "pending", W.then(
          function(ae) {
            W.status === "pending" && (W.status = "fulfilled", W.value = ae);
          },
          function(ae) {
            W.status === "pending" && (W.status = "rejected", W.reason = ae);
          }
        )), W.status) {
          case "fulfilled":
            return W.value;
          case "rejected":
            throw W.reason;
        }
    }
    throw W;
  }
  function Pt(W, ae, Ee, Re, Xe) {
    var et = typeof W;
    (et === "undefined" || et === "boolean") && (W = null);
    var Ve = !1;
    if (W === null) Ve = !0;
    else
      switch (et) {
        case "bigint":
        case "string":
        case "number":
          Ve = !0;
          break;
        case "object":
          switch (W.$$typeof) {
            case f:
            case o:
              Ve = !0;
              break;
            case J:
              return Ve = W._init, Pt(
                Ve(W._payload),
                ae,
                Ee,
                Re,
                Xe
              );
          }
      }
    if (Ve)
      return Xe = Xe(W), Ve = Re === "" ? "." + Ct(W, 0) : Re, xe(Xe) ? (Ee = "", Ve != null && (Ee = Ve.replace(Le, "$&/") + "/"), Pt(Xe, ae, Ee, "", function(Pe) {
        return Pe;
      })) : Xe != null && (ut(Xe) && (Xe = qe(
        Xe,
        Ee + (Xe.key == null || W && W.key === Xe.key ? "" : ("" + Xe.key).replace(
          Le,
          "$&/"
        ) + "/") + Ve
      )), ae.push(Xe)), 1;
    Ve = 0;
    var Rt = Re === "" ? "." : Re + ":";
    if (xe(W))
      for (var Mt = 0; Mt < W.length; Mt++)
        Re = W[Mt], et = Rt + Ct(Re, Mt), Ve += Pt(
          Re,
          ae,
          Ee,
          et,
          Xe
        );
    else if (Mt = B(W), typeof Mt == "function")
      for (W = Mt.call(W), Mt = 0; !(Re = W.next()).done; )
        Re = Re.value, et = Rt + Ct(Re, Mt++), Ve += Pt(
          Re,
          ae,
          Ee,
          et,
          Xe
        );
    else if (et === "object") {
      if (typeof W.then == "function")
        return Pt(
          Ne(W),
          ae,
          Ee,
          Re,
          Xe
        );
      throw ae = String(W), Error(
        "Objects are not valid as a React child (found: " + (ae === "[object Object]" ? "object with keys {" + Object.keys(W).join(", ") + "}" : ae) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Ve;
  }
  function _t(W, ae, Ee) {
    if (W == null) return W;
    var Re = [], Xe = 0;
    return Pt(W, Re, "", "", function(et) {
      return ae.call(Ee, et, Xe++);
    }), Re;
  }
  function mt(W) {
    if (W._status === -1) {
      var ae = W._result;
      ae = ae(), ae.then(
        function(Ee) {
          (W._status === 0 || W._status === -1) && (W._status = 1, W._result = Ee);
        },
        function(Ee) {
          (W._status === 0 || W._status === -1) && (W._status = 2, W._result = Ee);
        }
      ), W._status === -1 && (W._status = 0, W._result = ae);
    }
    if (W._status === 1) return W._result.default;
    throw W._result;
  }
  var ft = typeof reportError == "function" ? reportError : function(W) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var ae = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof W == "object" && W !== null && typeof W.message == "string" ? String(W.message) : String(W),
        error: W
      });
      if (!window.dispatchEvent(ae)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", W);
      return;
    }
    console.error(W);
  }, Ke = {
    map: _t,
    forEach: function(W, ae, Ee) {
      _t(
        W,
        function() {
          ae.apply(this, arguments);
        },
        Ee
      );
    },
    count: function(W) {
      var ae = 0;
      return _t(W, function() {
        ae++;
      }), ae;
    },
    toArray: function(W) {
      return _t(W, function(ae) {
        return ae;
      }) || [];
    },
    only: function(W) {
      if (!ut(W))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return W;
    }
  };
  return Qe.Activity = X, Qe.Children = Ke, Qe.Component = Se, Qe.Fragment = c, Qe.Profiler = b, Qe.PureComponent = ve, Qe.StrictMode = d, Qe.Suspense = R, Qe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ie, Qe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(W) {
      return ie.H.useMemoCache(W);
    }
  }, Qe.cache = function(W) {
    return function() {
      return W.apply(null, arguments);
    };
  }, Qe.cacheSignal = function() {
    return null;
  }, Qe.cloneElement = function(W, ae, Ee) {
    if (W == null)
      throw Error(
        "The argument must be a React element, but you passed " + W + "."
      );
    var Re = ge({}, W.props), Xe = W.key;
    if (ae != null)
      for (et in ae.key !== void 0 && (Xe = "" + ae.key), ae)
        !lt.call(ae, et) || et === "key" || et === "__self" || et === "__source" || et === "ref" && ae.ref === void 0 || (Re[et] = ae[et]);
    var et = arguments.length - 2;
    if (et === 1) Re.children = Ee;
    else if (1 < et) {
      for (var Ve = Array(et), Rt = 0; Rt < et; Rt++)
        Ve[Rt] = arguments[Rt + 2];
      Re.children = Ve;
    }
    return at(W.type, Xe, Re);
  }, Qe.createContext = function(W) {
    return W = {
      $$typeof: x,
      _currentValue: W,
      _currentValue2: W,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, W.Provider = W, W.Consumer = {
      $$typeof: y,
      _context: W
    }, W;
  }, Qe.createElement = function(W, ae, Ee) {
    var Re, Xe = {}, et = null;
    if (ae != null)
      for (Re in ae.key !== void 0 && (et = "" + ae.key), ae)
        lt.call(ae, Re) && Re !== "key" && Re !== "__self" && Re !== "__source" && (Xe[Re] = ae[Re]);
    var Ve = arguments.length - 2;
    if (Ve === 1) Xe.children = Ee;
    else if (1 < Ve) {
      for (var Rt = Array(Ve), Mt = 0; Mt < Ve; Mt++)
        Rt[Mt] = arguments[Mt + 2];
      Xe.children = Rt;
    }
    if (W && W.defaultProps)
      for (Re in Ve = W.defaultProps, Ve)
        Xe[Re] === void 0 && (Xe[Re] = Ve[Re]);
    return at(W, et, Xe);
  }, Qe.createRef = function() {
    return { current: null };
  }, Qe.forwardRef = function(W) {
    return { $$typeof: M, render: W };
  }, Qe.isValidElement = ut, Qe.lazy = function(W) {
    return {
      $$typeof: J,
      _payload: { _status: -1, _result: W },
      _init: mt
    };
  }, Qe.memo = function(W, ae) {
    return {
      $$typeof: V,
      type: W,
      compare: ae === void 0 ? null : ae
    };
  }, Qe.startTransition = function(W) {
    var ae = ie.T, Ee = {};
    ie.T = Ee;
    try {
      var Re = W(), Xe = ie.S;
      Xe !== null && Xe(Ee, Re), typeof Re == "object" && Re !== null && typeof Re.then == "function" && Re.then(oe, ft);
    } catch (et) {
      ft(et);
    } finally {
      ae !== null && Ee.types !== null && (ae.types = Ee.types), ie.T = ae;
    }
  }, Qe.unstable_useCacheRefresh = function() {
    return ie.H.useCacheRefresh();
  }, Qe.use = function(W) {
    return ie.H.use(W);
  }, Qe.useActionState = function(W, ae, Ee) {
    return ie.H.useActionState(W, ae, Ee);
  }, Qe.useCallback = function(W, ae) {
    return ie.H.useCallback(W, ae);
  }, Qe.useContext = function(W) {
    return ie.H.useContext(W);
  }, Qe.useDebugValue = function() {
  }, Qe.useDeferredValue = function(W, ae) {
    return ie.H.useDeferredValue(W, ae);
  }, Qe.useEffect = function(W, ae) {
    return ie.H.useEffect(W, ae);
  }, Qe.useEffectEvent = function(W) {
    return ie.H.useEffectEvent(W);
  }, Qe.useId = function() {
    return ie.H.useId();
  }, Qe.useImperativeHandle = function(W, ae, Ee) {
    return ie.H.useImperativeHandle(W, ae, Ee);
  }, Qe.useInsertionEffect = function(W, ae) {
    return ie.H.useInsertionEffect(W, ae);
  }, Qe.useLayoutEffect = function(W, ae) {
    return ie.H.useLayoutEffect(W, ae);
  }, Qe.useMemo = function(W, ae) {
    return ie.H.useMemo(W, ae);
  }, Qe.useOptimistic = function(W, ae) {
    return ie.H.useOptimistic(W, ae);
  }, Qe.useReducer = function(W, ae, Ee) {
    return ie.H.useReducer(W, ae, Ee);
  }, Qe.useRef = function(W) {
    return ie.H.useRef(W);
  }, Qe.useState = function(W) {
    return ie.H.useState(W);
  }, Qe.useSyncExternalStore = function(W, ae, Ee) {
    return ie.H.useSyncExternalStore(
      W,
      ae,
      Ee
    );
  }, Qe.useTransition = function() {
    return ie.H.useTransition();
  }, Qe.version = "19.2.4", Qe;
}
var Dr = { exports: {} };
Dr.exports;
var Ps;
function Wl() {
  return Ps || (Ps = 1, function(f, o) {
    var c = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    c.NODE_ENV !== "production" && function() {
      function d(w, P) {
        Object.defineProperty(x.prototype, w, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              P[0],
              P[1]
            );
          }
        });
      }
      function b(w) {
        return w === null || typeof w != "object" ? null : (w = G && w[G] || w["@@iterator"], typeof w == "function" ? w : null);
      }
      function y(w, P) {
        w = (w = w.constructor) && (w.displayName || w.name) || "ReactClass";
        var ee = w + "." + P;
        z[ee] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          P,
          w
        ), z[ee] = !0);
      }
      function x(w, P, ee) {
        this.props = w, this.context = P, this.refs = $e, this.updater = ee || ne;
      }
      function M() {
      }
      function R(w, P, ee) {
        this.props = w, this.context = P, this.refs = $e, this.updater = ee || ne;
      }
      function V() {
      }
      function J(w) {
        return "" + w;
      }
      function X(w) {
        try {
          J(w);
          var P = !1;
        } catch {
          P = !0;
        }
        if (P) {
          P = console;
          var ee = P.error, ye = typeof Symbol == "function" && Symbol.toStringTag && w[Symbol.toStringTag] || w.constructor.name || "Object";
          return ee.call(
            P,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            ye
          ), J(w);
        }
      }
      function U(w) {
        if (w == null) return null;
        if (typeof w == "function")
          return w.$$typeof === ht ? null : w.displayName || w.name || null;
        if (typeof w == "string") return w;
        switch (w) {
          case ae:
            return "Fragment";
          case Re:
            return "Profiler";
          case Ee:
            return "StrictMode";
          case Rt:
            return "Suspense";
          case Mt:
            return "SuspenseList";
          case C:
            return "Activity";
        }
        if (typeof w == "object")
          switch (typeof w.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), w.$$typeof) {
            case W:
              return "Portal";
            case et:
              return w.displayName || "Context";
            case Xe:
              return (w._context.displayName || "Context") + ".Consumer";
            case Ve:
              var P = w.render;
              return w = w.displayName, w || (w = P.displayName || P.name || "", w = w !== "" ? "ForwardRef(" + w + ")" : "ForwardRef"), w;
            case Pe:
              return P = w.displayName || null, P !== null ? P : U(w.type) || "Memo";
            case Vt:
              P = w._payload, w = w._init;
              try {
                return U(w(P));
              } catch {
              }
          }
        return null;
      }
      function B(w) {
        if (w === ae) return "<>";
        if (typeof w == "object" && w !== null && w.$$typeof === Vt)
          return "<...>";
        try {
          var P = U(w);
          return P ? "<" + P + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function me() {
        var w = _e.A;
        return w === null ? null : w.getOwner();
      }
      function ge() {
        return Error("react-stack-top-frame");
      }
      function q(w) {
        if (fn.call(w, "key")) {
          var P = Object.getOwnPropertyDescriptor(w, "key").get;
          if (P && P.isReactWarning) return !1;
        }
        return w.key !== void 0;
      }
      function Se(w, P) {
        function ee() {
          hn || (hn = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            P
          ));
        }
        ee.isReactWarning = !0, Object.defineProperty(w, "key", {
          get: ee,
          configurable: !0
        });
      }
      function Y() {
        var w = U(this.type);
        return ze[w] || (ze[w] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), w = this.props.ref, w !== void 0 ? w : null;
      }
      function ve(w, P, ee, ye, Te, Ge) {
        var je = ee.ref;
        return w = {
          $$typeof: Ke,
          type: w,
          key: P,
          props: ee,
          _owner: ye
        }, (je !== void 0 ? je : null) !== null ? Object.defineProperty(w, "ref", {
          enumerable: !1,
          get: Y
        }) : Object.defineProperty(w, "ref", { enumerable: !1, value: null }), w._store = {}, Object.defineProperty(w._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(w, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(w, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: Te
        }), Object.defineProperty(w, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: Ge
        }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
      }
      function te(w, P) {
        return P = ve(
          w.type,
          P,
          w.props,
          w._owner,
          w._debugStack,
          w._debugTask
        ), w._store && (P._store.validated = w._store.validated), P;
      }
      function xe(w) {
        oe(w) ? w._store && (w._store.validated = 1) : typeof w == "object" && w !== null && w.$$typeof === Vt && (w._payload.status === "fulfilled" ? oe(w._payload.value) && w._payload.value._store && (w._payload.value._store.validated = 1) : w._store && (w._store.validated = 1));
      }
      function oe(w) {
        return typeof w == "object" && w !== null && w.$$typeof === Ke;
      }
      function ie(w) {
        var P = { "=": "=0", ":": "=2" };
        return "$" + w.replace(/[=:]/g, function(ee) {
          return P[ee];
        });
      }
      function lt(w, P) {
        return typeof w == "object" && w !== null && w.key != null ? (X(w.key), ie("" + w.key)) : P.toString(36);
      }
      function at(w) {
        switch (w.status) {
          case "fulfilled":
            return w.value;
          case "rejected":
            throw w.reason;
          default:
            switch (typeof w.status == "string" ? w.then(V, V) : (w.status = "pending", w.then(
              function(P) {
                w.status === "pending" && (w.status = "fulfilled", w.value = P);
              },
              function(P) {
                w.status === "pending" && (w.status = "rejected", w.reason = P);
              }
            )), w.status) {
              case "fulfilled":
                return w.value;
              case "rejected":
                throw w.reason;
            }
        }
        throw w;
      }
      function qe(w, P, ee, ye, Te) {
        var Ge = typeof w;
        (Ge === "undefined" || Ge === "boolean") && (w = null);
        var je = !1;
        if (w === null) je = !0;
        else
          switch (Ge) {
            case "bigint":
            case "string":
            case "number":
              je = !0;
              break;
            case "object":
              switch (w.$$typeof) {
                case Ke:
                case W:
                  je = !0;
                  break;
                case Vt:
                  return je = w._init, qe(
                    je(w._payload),
                    P,
                    ee,
                    ye,
                    Te
                  );
              }
          }
        if (je) {
          je = w, Te = Te(je);
          var wt = ye === "" ? "." + lt(je, 0) : ye;
          return kt(Te) ? (ee = "", wt != null && (ee = wt.replace(dn, "$&/") + "/"), qe(Te, P, ee, "", function(Xt) {
            return Xt;
          })) : Te != null && (oe(Te) && (Te.key != null && (je && je.key === Te.key || X(Te.key)), ee = te(
            Te,
            ee + (Te.key == null || je && je.key === Te.key ? "" : ("" + Te.key).replace(
              dn,
              "$&/"
            ) + "/") + wt
          ), ye !== "" && je != null && oe(je) && je.key == null && je._store && !je._store.validated && (ee._store.validated = 2), Te = ee), P.push(Te)), 1;
        }
        if (je = 0, wt = ye === "" ? "." : ye + ":", kt(w))
          for (var Ye = 0; Ye < w.length; Ye++)
            ye = w[Ye], Ge = wt + lt(ye, Ye), je += qe(
              ye,
              P,
              ee,
              Ge,
              Te
            );
        else if (Ye = b(w), typeof Ye == "function")
          for (Ye === w.entries && (Gt || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Gt = !0), w = Ye.call(w), Ye = 0; !(ye = w.next()).done; )
            ye = ye.value, Ge = wt + lt(ye, Ye++), je += qe(
              ye,
              P,
              ee,
              Ge,
              Te
            );
        else if (Ge === "object") {
          if (typeof w.then == "function")
            return qe(
              at(w),
              P,
              ee,
              ye,
              Te
            );
          throw P = String(w), Error(
            "Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return je;
      }
      function ut(w, P, ee) {
        if (w == null) return w;
        var ye = [], Te = 0;
        return qe(w, ye, "", "", function(Ge) {
          return P.call(ee, Ge, Te++);
        }), ye;
      }
      function Ot(w) {
        if (w._status === -1) {
          var P = w._ioInfo;
          P != null && (P.start = P.end = performance.now()), P = w._result;
          var ee = P();
          if (ee.then(
            function(Te) {
              if (w._status === 0 || w._status === -1) {
                w._status = 1, w._result = Te;
                var Ge = w._ioInfo;
                Ge != null && (Ge.end = performance.now()), ee.status === void 0 && (ee.status = "fulfilled", ee.value = Te);
              }
            },
            function(Te) {
              if (w._status === 0 || w._status === -1) {
                w._status = 2, w._result = Te;
                var Ge = w._ioInfo;
                Ge != null && (Ge.end = performance.now()), ee.status === void 0 && (ee.status = "rejected", ee.reason = Te);
              }
            }
          ), P = w._ioInfo, P != null) {
            P.value = ee;
            var ye = ee.displayName;
            typeof ye == "string" && (P.name = ye);
          }
          w._status === -1 && (w._status = 0, w._result = ee);
        }
        if (w._status === 1)
          return P = w._result, P === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            P
          ), "default" in P || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            P
          ), P.default;
        throw w._result;
      }
      function Le() {
        var w = _e.H;
        return w === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), w;
      }
      function Ct() {
        _e.asyncTransitions--;
      }
      function Ne(w) {
        if ($t === null)
          try {
            var P = ("require" + Math.random()).slice(0, 7);
            $t = (f && f[P]).call(
              f,
              "timers"
            ).setImmediate;
          } catch {
            $t = function(ye) {
              It === !1 && (It = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var Te = new MessageChannel();
              Te.port1.onmessage = ye, Te.port2.postMessage(void 0);
            };
          }
        return $t(w);
      }
      function Pt(w) {
        return 1 < w.length && typeof AggregateError == "function" ? new AggregateError(w) : w[0];
      }
      function _t(w, P) {
        P !== Qt - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), Qt = P;
      }
      function mt(w, P, ee) {
        var ye = _e.actQueue;
        if (ye !== null)
          if (ye.length !== 0)
            try {
              ft(ye), Ne(function() {
                return mt(w, P, ee);
              });
              return;
            } catch (Te) {
              _e.thrownErrors.push(Te);
            }
          else _e.actQueue = null;
        0 < _e.thrownErrors.length ? (ye = Pt(_e.thrownErrors), _e.thrownErrors.length = 0, ee(ye)) : P(w);
      }
      function ft(w) {
        if (!Ie) {
          Ie = !0;
          var P = 0;
          try {
            for (; P < w.length; P++) {
              var ee = w[P];
              do {
                _e.didUsePromise = !1;
                var ye = ee(!1);
                if (ye !== null) {
                  if (_e.didUsePromise) {
                    w[P] = ee, w.splice(0, P);
                    return;
                  }
                  ee = ye;
                } else break;
              } while (!0);
            }
            w.length = 0;
          } catch (Te) {
            w.splice(0, P + 1), _e.thrownErrors.push(Te);
          } finally {
            Ie = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var Ke = Symbol.for("react.transitional.element"), W = Symbol.for("react.portal"), ae = Symbol.for("react.fragment"), Ee = Symbol.for("react.strict_mode"), Re = Symbol.for("react.profiler"), Xe = Symbol.for("react.consumer"), et = Symbol.for("react.context"), Ve = Symbol.for("react.forward_ref"), Rt = Symbol.for("react.suspense"), Mt = Symbol.for("react.suspense_list"), Pe = Symbol.for("react.memo"), Vt = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), G = Symbol.iterator, z = {}, ne = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(w) {
          y(w, "forceUpdate");
        },
        enqueueReplaceState: function(w) {
          y(w, "replaceState");
        },
        enqueueSetState: function(w) {
          y(w, "setState");
        }
      }, De = Object.assign, $e = {};
      Object.freeze($e), x.prototype.isReactComponent = {}, x.prototype.setState = function(w, P) {
        if (typeof w != "object" && typeof w != "function" && w != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, w, P, "setState");
      }, x.prototype.forceUpdate = function(w) {
        this.updater.enqueueForceUpdate(this, w, "forceUpdate");
      };
      var Oe = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (cn in Oe)
        Oe.hasOwnProperty(cn) && d(cn, Oe[cn]);
      M.prototype = x.prototype, Oe = R.prototype = new M(), Oe.constructor = R, De(Oe, x.prototype), Oe.isPureReactComponent = !0;
      var kt = Array.isArray, ht = Symbol.for("react.client.reference"), _e = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, fn = Object.prototype.hasOwnProperty, Jt = console.createTask ? console.createTask : function() {
        return null;
      };
      Oe = {
        react_stack_bottom_frame: function(w) {
          return w();
        }
      };
      var hn, Ut, ze = {}, be = Oe.react_stack_bottom_frame.bind(
        Oe,
        ge
      )(), dt = Jt(B(ge)), Gt = !1, dn = /\/+/g, rt = typeof reportError == "function" ? reportError : function(w) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var P = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof w == "object" && w !== null && typeof w.message == "string" ? String(w.message) : String(w),
            error: w
          });
          if (!window.dispatchEvent(P)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", w);
          return;
        }
        console.error(w);
      }, It = !1, $t = null, Qt = 0, jt = !1, Ie = !1, We = typeof queueMicrotask == "function" ? function(w) {
        queueMicrotask(function() {
          return queueMicrotask(w);
        });
      } : Ne;
      Oe = Object.freeze({
        __proto__: null,
        c: function(w) {
          return Le().useMemoCache(w);
        }
      });
      var cn = {
        map: ut,
        forEach: function(w, P, ee) {
          ut(
            w,
            function() {
              P.apply(this, arguments);
            },
            ee
          );
        },
        count: function(w) {
          var P = 0;
          return ut(w, function() {
            P++;
          }), P;
        },
        toArray: function(w) {
          return ut(w, function(P) {
            return P;
          }) || [];
        },
        only: function(w) {
          if (!oe(w))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return w;
        }
      };
      o.Activity = C, o.Children = cn, o.Component = x, o.Fragment = ae, o.Profiler = Re, o.PureComponent = R, o.StrictMode = Ee, o.Suspense = Rt, o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _e, o.__COMPILER_RUNTIME = Oe, o.act = function(w) {
        var P = _e.actQueue, ee = Qt;
        Qt++;
        var ye = _e.actQueue = P !== null ? P : [], Te = !1;
        try {
          var Ge = w();
        } catch (Ye) {
          _e.thrownErrors.push(Ye);
        }
        if (0 < _e.thrownErrors.length)
          throw _t(P, ee), w = Pt(_e.thrownErrors), _e.thrownErrors.length = 0, w;
        if (Ge !== null && typeof Ge == "object" && typeof Ge.then == "function") {
          var je = Ge;
          return We(function() {
            Te || jt || (jt = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(Ye, Xt) {
              Te = !0, je.then(
                function(un) {
                  if (_t(P, ee), ee === 0) {
                    try {
                      ft(ye), Ne(function() {
                        return mt(
                          un,
                          Ye,
                          Xt
                        );
                      });
                    } catch (Pn) {
                      _e.thrownErrors.push(Pn);
                    }
                    if (0 < _e.thrownErrors.length) {
                      var ra = Pt(
                        _e.thrownErrors
                      );
                      _e.thrownErrors.length = 0, Xt(ra);
                    }
                  } else Ye(un);
                },
                function(un) {
                  _t(P, ee), 0 < _e.thrownErrors.length && (un = Pt(
                    _e.thrownErrors
                  ), _e.thrownErrors.length = 0), Xt(un);
                }
              );
            }
          };
        }
        var wt = Ge;
        if (_t(P, ee), ee === 0 && (ft(ye), ye.length !== 0 && We(function() {
          Te || jt || (jt = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), _e.actQueue = null), 0 < _e.thrownErrors.length)
          throw w = Pt(_e.thrownErrors), _e.thrownErrors.length = 0, w;
        return {
          then: function(Ye, Xt) {
            Te = !0, ee === 0 ? (_e.actQueue = ye, Ne(function() {
              return mt(
                wt,
                Ye,
                Xt
              );
            })) : Ye(wt);
          }
        };
      }, o.cache = function(w) {
        return function() {
          return w.apply(null, arguments);
        };
      }, o.cacheSignal = function() {
        return null;
      }, o.captureOwnerStack = function() {
        var w = _e.getCurrentStack;
        return w === null ? null : w();
      }, o.cloneElement = function(w, P, ee) {
        if (w == null)
          throw Error(
            "The argument must be a React element, but you passed " + w + "."
          );
        var ye = De({}, w.props), Te = w.key, Ge = w._owner;
        if (P != null) {
          var je;
          e: {
            if (fn.call(P, "ref") && (je = Object.getOwnPropertyDescriptor(
              P,
              "ref"
            ).get) && je.isReactWarning) {
              je = !1;
              break e;
            }
            je = P.ref !== void 0;
          }
          je && (Ge = me()), q(P) && (X(P.key), Te = "" + P.key);
          for (wt in P)
            !fn.call(P, wt) || wt === "key" || wt === "__self" || wt === "__source" || wt === "ref" && P.ref === void 0 || (ye[wt] = P[wt]);
        }
        var wt = arguments.length - 2;
        if (wt === 1) ye.children = ee;
        else if (1 < wt) {
          je = Array(wt);
          for (var Ye = 0; Ye < wt; Ye++)
            je[Ye] = arguments[Ye + 2];
          ye.children = je;
        }
        for (ye = ve(
          w.type,
          Te,
          ye,
          Ge,
          w._debugStack,
          w._debugTask
        ), Te = 2; Te < arguments.length; Te++)
          xe(arguments[Te]);
        return ye;
      }, o.createContext = function(w) {
        return w = {
          $$typeof: et,
          _currentValue: w,
          _currentValue2: w,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, w.Provider = w, w.Consumer = {
          $$typeof: Xe,
          _context: w
        }, w._currentRenderer = null, w._currentRenderer2 = null, w;
      }, o.createElement = function(w, P, ee) {
        for (var ye = 2; ye < arguments.length; ye++)
          xe(arguments[ye]);
        ye = {};
        var Te = null;
        if (P != null)
          for (Ye in Ut || !("__self" in P) || "key" in P || (Ut = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), q(P) && (X(P.key), Te = "" + P.key), P)
            fn.call(P, Ye) && Ye !== "key" && Ye !== "__self" && Ye !== "__source" && (ye[Ye] = P[Ye]);
        var Ge = arguments.length - 2;
        if (Ge === 1) ye.children = ee;
        else if (1 < Ge) {
          for (var je = Array(Ge), wt = 0; wt < Ge; wt++)
            je[wt] = arguments[wt + 2];
          Object.freeze && Object.freeze(je), ye.children = je;
        }
        if (w && w.defaultProps)
          for (Ye in Ge = w.defaultProps, Ge)
            ye[Ye] === void 0 && (ye[Ye] = Ge[Ye]);
        Te && Se(
          ye,
          typeof w == "function" ? w.displayName || w.name || "Unknown" : w
        );
        var Ye = 1e4 > _e.recentlyCreatedOwnerStacks++;
        return ve(
          w,
          Te,
          ye,
          me(),
          Ye ? Error("react-stack-top-frame") : be,
          Ye ? Jt(B(w)) : dt
        );
      }, o.createRef = function() {
        var w = { current: null };
        return Object.seal(w), w;
      }, o.forwardRef = function(w) {
        w != null && w.$$typeof === Pe ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof w != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          w === null ? "null" : typeof w
        ) : w.length !== 0 && w.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          w.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), w != null && w.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var P = { $$typeof: Ve, render: w }, ee;
        return Object.defineProperty(P, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return ee;
          },
          set: function(ye) {
            ee = ye, w.name || w.displayName || (Object.defineProperty(w, "name", { value: ye }), w.displayName = ye);
          }
        }), P;
      }, o.isValidElement = oe, o.lazy = function(w) {
        w = { _status: -1, _result: w };
        var P = {
          $$typeof: Vt,
          _payload: w,
          _init: Ot
        }, ee = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return w._ioInfo = ee, P._debugInfo = [{ awaited: ee }], P;
      }, o.memo = function(w, P) {
        w == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          w === null ? "null" : typeof w
        ), P = {
          $$typeof: Pe,
          type: w,
          compare: P === void 0 ? null : P
        };
        var ee;
        return Object.defineProperty(P, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return ee;
          },
          set: function(ye) {
            ee = ye, w.name || w.displayName || (Object.defineProperty(w, "name", { value: ye }), w.displayName = ye);
          }
        }), P;
      }, o.startTransition = function(w) {
        var P = _e.T, ee = {};
        ee._updatedFibers = /* @__PURE__ */ new Set(), _e.T = ee;
        try {
          var ye = w(), Te = _e.S;
          Te !== null && Te(ee, ye), typeof ye == "object" && ye !== null && typeof ye.then == "function" && (_e.asyncTransitions++, ye.then(Ct, Ct), ye.then(V, rt));
        } catch (Ge) {
          rt(Ge);
        } finally {
          P === null && ee._updatedFibers && (w = ee._updatedFibers.size, ee._updatedFibers.clear(), 10 < w && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), P !== null && ee.types !== null && (P.types !== null && P.types !== ee.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), P.types = ee.types), _e.T = P;
        }
      }, o.unstable_useCacheRefresh = function() {
        return Le().useCacheRefresh();
      }, o.use = function(w) {
        return Le().use(w);
      }, o.useActionState = function(w, P, ee) {
        return Le().useActionState(
          w,
          P,
          ee
        );
      }, o.useCallback = function(w, P) {
        return Le().useCallback(w, P);
      }, o.useContext = function(w) {
        var P = Le();
        return w.$$typeof === Xe && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), P.useContext(w);
      }, o.useDebugValue = function(w, P) {
        return Le().useDebugValue(w, P);
      }, o.useDeferredValue = function(w, P) {
        return Le().useDeferredValue(w, P);
      }, o.useEffect = function(w, P) {
        return w == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Le().useEffect(w, P);
      }, o.useEffectEvent = function(w) {
        return Le().useEffectEvent(w);
      }, o.useId = function() {
        return Le().useId();
      }, o.useImperativeHandle = function(w, P, ee) {
        return Le().useImperativeHandle(w, P, ee);
      }, o.useInsertionEffect = function(w, P) {
        return w == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Le().useInsertionEffect(w, P);
      }, o.useLayoutEffect = function(w, P) {
        return w == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Le().useLayoutEffect(w, P);
      }, o.useMemo = function(w, P) {
        return Le().useMemo(w, P);
      }, o.useOptimistic = function(w, P) {
        return Le().useOptimistic(w, P);
      }, o.useReducer = function(w, P, ee) {
        return Le().useReducer(w, P, ee);
      }, o.useRef = function(w) {
        return Le().useRef(w);
      }, o.useState = function(w) {
        return Le().useState(w);
      }, o.useSyncExternalStore = function(w, P, ee) {
        return Le().useSyncExternalStore(
          w,
          P,
          ee
        );
      }, o.useTransition = function() {
        return Le().useTransition();
      }, o.version = "19.2.4", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Dr, Dr.exports)), Dr.exports;
}
var Bl = {};
Bl.NODE_ENV === "production" ? ri.exports = Ol() : ri.exports = Wl();
var vt = ri.exports, Nl = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
};
const Fl = /* @__PURE__ */ si(Nl);
var Ll = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function xs(f) {
  var o = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] }, c = f.match(/<\/?([^\s]+?)[/\s>]/);
  if (c && (o.name = c[1], (Fl[c[1]] || f.charAt(f.length - 2) === "/") && (o.voidElement = !0), o.name.startsWith("!--"))) {
    var d = f.indexOf("-->");
    return { type: "comment", comment: d !== -1 ? f.slice(4, d) : "" };
  }
  for (var b = new RegExp(Ll), y = null; (y = b.exec(f)) !== null; ) if (y[0].trim()) if (y[1]) {
    var x = y[1].trim(), M = [x, ""];
    x.indexOf("=") > -1 && (M = x.split("=")), o.attrs[M[0]] = M[1], b.lastIndex--;
  } else y[2] && (o.attrs[y[2]] = y[3].trim().substring(1, y[3].length - 1));
  return o;
}
var Vl = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, Ul = /^\s*$/, $l = /* @__PURE__ */ Object.create(null);
function $s(f, o) {
  switch (o.type) {
    case "text":
      return f + o.content;
    case "tag":
      return f += "<" + o.name + (o.attrs ? function(c) {
        var d = [];
        for (var b in c) d.push(b + '="' + c[b] + '"');
        return d.length ? " " + d.join(" ") : "";
      }(o.attrs) : "") + (o.voidElement ? "/>" : ">"), o.voidElement ? f : f + o.children.reduce($s, "") + "</" + o.name + ">";
    case "comment":
      return f + "<!--" + o.comment + "-->";
  }
}
var jl = { parse: function(f, o) {
  o || (o = {}), o.components || (o.components = $l);
  var c, d = [], b = [], y = -1, x = !1;
  if (f.indexOf("<") !== 0) {
    var M = f.indexOf("<");
    d.push({ type: "text", content: M === -1 ? f : f.substring(0, M) });
  }
  return f.replace(Vl, function(R, V) {
    if (x) {
      if (R !== "</" + c.name + ">") return;
      x = !1;
    }
    var J, X = R.charAt(1) !== "/", U = R.startsWith("<!--"), B = V + R.length, me = f.charAt(B);
    if (U) {
      var ge = xs(R);
      return y < 0 ? (d.push(ge), d) : ((J = b[y]).children.push(ge), d);
    }
    if (X && (y++, (c = xs(R)).type === "tag" && o.components[c.name] && (c.type = "component", x = !0), c.voidElement || x || !me || me === "<" || c.children.push({ type: "text", content: f.slice(B, f.indexOf("<", B)) }), y === 0 && d.push(c), (J = b[y - 1]) && J.children.push(c), b[y] = c), (!X || c.voidElement) && (y > -1 && (c.voidElement || c.name === R.slice(2, -1)) && (y--, c = y === -1 ? d : b[y]), !x && me !== "<" && me)) {
      J = y === -1 ? d : b[y].children;
      var q = f.indexOf("<", B), Se = f.slice(B, q === -1 ? void 0 : q);
      Ul.test(Se) && (Se = " "), (q > -1 && y + J.length >= 0 || Se !== " ") && J.push({ type: "text", content: Se });
    }
  }), d;
}, stringify: function(f) {
  return f.reduce(function(o, c) {
    return o + $s("", c);
  }, "");
} };
function po() {
  if (console && console.warn) {
    for (var f = arguments.length, o = new Array(f), c = 0; c < f; c++)
      o[c] = arguments[c];
    vn(o[0]) && (o[0] = `react-i18next:: ${o[0]}`), console.warn(...o);
  }
}
const Cs = {};
function fo() {
  for (var f = arguments.length, o = new Array(f), c = 0; c < f; c++)
    o[c] = arguments[c];
  vn(o[0]) && Cs[o[0]] || (vn(o[0]) && (Cs[o[0]] = /* @__PURE__ */ new Date()), po(...o));
}
const js = (f, o) => () => {
  if (f.isInitialized)
    o();
  else {
    const c = () => {
      setTimeout(() => {
        f.off("initialized", c);
      }, 0), o();
    };
    f.on("initialized", c);
  }
}, Ms = (f, o, c) => {
  f.loadNamespaces(o, js(f, c));
}, Is = (f, o, c, d) => {
  vn(c) && (c = [c]), c.forEach((b) => {
    f.options.ns.indexOf(b) < 0 && f.options.ns.push(b);
  }), f.loadLanguages(o, js(f, d));
}, Kl = function(f, o) {
  let c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const d = o.languages[0], b = o.options ? o.options.fallbackLng : !1, y = o.languages[o.languages.length - 1];
  if (d.toLowerCase() === "cimode") return !0;
  const x = (M, R) => {
    const V = o.services.backendConnector.state[`${M}|${R}`];
    return V === -1 || V === 2;
  };
  return c.bindI18n && c.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !x(o.isLanguageChangingTo, f) ? !1 : !!(o.hasResourceBundle(d, f) || !o.services.backendConnector.backend || o.options.resources && !o.options.partialBundledLanguages || x(d, f) && (!b || x(y, f)));
}, Hl = function(f, o) {
  let c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !o.languages || !o.languages.length ? (fo("i18n.languages were undefined or empty", o.languages), !0) : o.options.ignoreJSONStructure !== void 0 ? o.hasLoadedNamespace(f, {
    lng: c.lng,
    precheck: (b, y) => {
      if (c.bindI18n && c.bindI18n.indexOf("languageChanging") > -1 && b.services.backendConnector.backend && b.isLanguageChangingTo && !y(b.isLanguageChangingTo, f)) return !1;
    }
  }) : Kl(f, o, c);
}, Ks = (f) => f.displayName || f.name || (vn(f) && f.length > 0 ? f : "Unknown"), vn = (f) => typeof f == "string", sr = (f) => typeof f == "object" && f !== null, Gl = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, zl = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, ql = (f) => zl[f], Jl = (f) => f.replace(Gl, ql);
let oi = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Jl
};
const Hs = function() {
  let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  oi = {
    ...oi,
    ...f
  };
}, ci = () => oi;
let Gs;
const zs = (f) => {
  Gs = f;
}, ur = () => Gs, Qo = (f, o) => {
  if (!f) return !1;
  const c = f.props ? f.props.children : f.children;
  return o ? c.length > 0 : !!c;
}, Xo = (f) => {
  if (!f) return [];
  const o = f.props ? f.props.children : f.children;
  return f.props && f.props.i18nIsDynamicList ? cr(o) : o;
}, Yl = (f) => Array.isArray(f) && f.every(vt.isValidElement), cr = (f) => Array.isArray(f) ? f : [f], Zl = (f, o) => {
  const c = {
    ...o
  };
  return c.props = Object.assign(f.props, o.props), c;
}, qs = (f, o) => {
  if (!f) return "";
  let c = "";
  const d = cr(f), b = o.transSupportBasicHtmlNodes && o.transKeepBasicHtmlNodesFor ? o.transKeepBasicHtmlNodesFor : [];
  return d.forEach((y, x) => {
    if (vn(y))
      c += `${y}`;
    else if (vt.isValidElement(y)) {
      const {
        props: M,
        type: R
      } = y, V = Object.keys(M).length, J = b.indexOf(R) > -1, X = M.children;
      if (!X && J && !V)
        c += `<${R}/>`;
      else if (!X && (!J || V) || M.i18nIsDynamicList)
        c += `<${x}></${x}>`;
      else if (J && V === 1 && vn(X))
        c += `<${R}>${X}</${R}>`;
      else {
        const U = qs(X, o);
        c += `<${x}>${U}</${x}>`;
      }
    } else if (y === null)
      po("Trans: the passed in value is invalid - seems you passed in a null child.");
    else if (sr(y)) {
      const {
        format: M,
        ...R
      } = y, V = Object.keys(R);
      if (V.length === 1) {
        const J = M ? `${V[0]}, ${M}` : V[0];
        c += `{{${J}}}`;
      } else
        po("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", y);
    } else
      po("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", y);
  }), c;
}, Ql = (f, o, c, d, b, y) => {
  if (o === "") return [];
  const x = d.transKeepBasicHtmlNodesFor || [], M = o && new RegExp(x.map((q) => `<${q}`).join("|")).test(o);
  if (!f && !M && !y) return [o];
  const R = {}, V = (q) => {
    cr(q).forEach((Y) => {
      vn(Y) || (Qo(Y) ? V(Xo(Y)) : sr(Y) && !vt.isValidElement(Y) && Object.assign(R, Y));
    });
  };
  V(f);
  const J = jl.parse(`<0>${o}</0>`), X = {
    ...R,
    ...b
  }, U = (q, Se, Y) => {
    const ve = Xo(q), te = me(ve, Se.children, Y);
    return Yl(ve) && te.length === 0 || q.props && q.props.i18nIsDynamicList ? ve : te;
  }, B = (q, Se, Y, ve, te) => {
    q.dummy ? (q.children = Se, Y.push(vt.cloneElement(q, {
      key: ve
    }, te ? void 0 : Se))) : Y.push(...vt.Children.map([q], (xe) => {
      const oe = {
        ...xe.props
      };
      return delete oe.i18nIsDynamicList, vt.createElement(xe.type, {
        ...oe,
        key: ve,
        ref: xe.ref
      }, te ? null : Se);
    }));
  }, me = (q, Se, Y) => {
    const ve = cr(q);
    return cr(Se).reduce((xe, oe, ie) => {
      const lt = oe.children && oe.children[0] && oe.children[0].content && c.services.interpolator.interpolate(oe.children[0].content, X, c.language);
      if (oe.type === "tag") {
        let at = ve[parseInt(oe.name, 10)];
        Y.length === 1 && !at && (at = Y[0][oe.name]), at || (at = {});
        const qe = Object.keys(oe.attrs).length !== 0 ? Zl({
          props: oe.attrs
        }, at) : at, ut = vt.isValidElement(qe), Ot = ut && Qo(oe, !0) && !oe.voidElement, Le = M && sr(qe) && qe.dummy && !ut, Ct = sr(f) && Object.hasOwnProperty.call(f, oe.name);
        if (vn(qe)) {
          const Ne = c.services.interpolator.interpolate(qe, X, c.language);
          xe.push(Ne);
        } else if (Qo(qe) || Ot) {
          const Ne = U(qe, oe, Y);
          B(qe, Ne, xe, ie);
        } else if (Le) {
          const Ne = me(ve, oe.children, Y);
          B(qe, Ne, xe, ie);
        } else if (Number.isNaN(parseFloat(oe.name)))
          if (Ct) {
            const Ne = U(qe, oe, Y);
            B(qe, Ne, xe, ie, oe.voidElement);
          } else if (d.transSupportBasicHtmlNodes && x.indexOf(oe.name) > -1)
            if (oe.voidElement)
              xe.push(vt.createElement(oe.name, {
                key: `${oe.name}-${ie}`
              }));
            else {
              const Ne = me(ve, oe.children, Y);
              xe.push(vt.createElement(oe.name, {
                key: `${oe.name}-${ie}`
              }, Ne));
            }
          else if (oe.voidElement)
            xe.push(`<${oe.name} />`);
          else {
            const Ne = me(ve, oe.children, Y);
            xe.push(`<${oe.name}>${Ne}</${oe.name}>`);
          }
        else if (sr(qe) && !ut) {
          const Ne = oe.children[0] ? lt : null;
          Ne && xe.push(Ne);
        } else
          B(qe, lt, xe, ie, oe.children.length !== 1 || !lt);
      } else if (oe.type === "text") {
        const at = d.transWrapTextNodes, qe = y ? d.unescape(c.services.interpolator.interpolate(oe.content, X, c.language)) : c.services.interpolator.interpolate(oe.content, X, c.language);
        at ? xe.push(vt.createElement(at, {
          key: `${oe.name}-${ie}`
        }, qe)) : xe.push(qe);
      }
      return xe;
    }, []);
  }, ge = me([{
    dummy: !0,
    children: f || []
  }], J, cr(f || []));
  return Xo(ge[0]);
};
function Js(f) {
  let {
    children: o,
    count: c,
    parent: d,
    i18nKey: b,
    context: y,
    tOptions: x = {},
    values: M,
    defaults: R,
    components: V,
    ns: J,
    i18n: X,
    t: U,
    shouldUnescape: B,
    ...me
  } = f;
  const ge = X || ur();
  if (!ge)
    return fo("You will need to pass in an i18next instance by using i18nextReactModule"), o;
  const q = U || ge.t.bind(ge) || ((Ot) => Ot), Se = {
    ...ci(),
    ...ge.options && ge.options.react
  };
  let Y = J || q.ns || ge.options && ge.options.defaultNS;
  Y = vn(Y) ? [Y] : Y || ["translation"];
  const ve = qs(o, Se), te = R || ve || Se.transEmptyNodeValue || b, {
    hashTransKey: xe
  } = Se, oe = b || (xe ? xe(ve || te) : ve || te);
  ge.options && ge.options.interpolation && ge.options.interpolation.defaultVariables && (M = M && Object.keys(M).length > 0 ? {
    ...M,
    ...ge.options.interpolation.defaultVariables
  } : {
    ...ge.options.interpolation.defaultVariables
  });
  const ie = M || c !== void 0 || !o ? x.interpolation : {
    interpolation: {
      ...x.interpolation,
      prefix: "#$?",
      suffix: "?$#"
    }
  }, lt = {
    ...x,
    context: y || x.context,
    count: c,
    ...M,
    ...ie,
    defaultValue: te,
    ns: Y
  }, at = oe ? q(oe, lt) : te;
  V && Object.keys(V).forEach((Ot) => {
    const Le = V[Ot];
    if (typeof Le.type == "function" || !Le.props || !Le.props.children || at.indexOf(`${Ot}/>`) < 0 && at.indexOf(`${Ot} />`) < 0) return;
    function Ct() {
      return vt.createElement(vt.Fragment, null, Le);
    }
    V[Ot] = vt.createElement(Ct);
  });
  const qe = Ql(V || o, at, ge, Se, lt, B), ut = d !== void 0 ? d : Se.defaultTransParent;
  return ut ? vt.createElement(ut, me, qe) : qe;
}
const Xl = {
  type: "3rdParty",
  init(f) {
    Hs(f.options.react), zs(f);
  }
}, Nr = vt.createContext();
class ed {
  constructor() {
    ys(this, "getUsedNamespaces", () => Object.keys(this.usedNamespaces));
    this.usedNamespaces = {};
  }
  addUsedNamespaces(o) {
    o.forEach((c) => {
      this.usedNamespaces[c] || (this.usedNamespaces[c] = !0);
    });
  }
}
const Ys = (f) => async (o) => {
  const c = f.getInitialProps ? await f.getInitialProps(o) : {}, d = Zs();
  return {
    ...c,
    ...d
  };
}, Zs = () => {
  const f = ur(), o = f.reportNamespaces ? f.reportNamespaces.getUsedNamespaces() : [], c = {}, d = {};
  return f.languages.forEach((b) => {
    d[b] = {}, o.forEach((y) => {
      d[b][y] = f.getResourceBundle(b, y) || {};
    });
  }), c.initialI18nStore = d, c.initialLanguage = f.language, c;
};
function td(f) {
  let {
    children: o,
    count: c,
    parent: d,
    i18nKey: b,
    context: y,
    tOptions: x = {},
    values: M,
    defaults: R,
    components: V,
    ns: J,
    i18n: X,
    t: U,
    shouldUnescape: B,
    ...me
  } = f;
  const {
    i18n: ge,
    defaultNS: q
  } = vt.useContext(Nr) || {}, Se = X || ge || ur(), Y = U || Se && Se.t.bind(Se);
  return Js({
    children: o,
    count: c,
    parent: d,
    i18nKey: b,
    context: y,
    tOptions: x,
    values: M,
    defaults: R,
    components: V,
    ns: J || Y && Y.ns || q || Se && Se.options && Se.options.defaultNS,
    i18n: Se,
    t: U,
    shouldUnescape: B,
    ...me
  });
}
const nd = (f, o) => {
  const c = vt.useRef();
  return vt.useEffect(() => {
    c.current = f;
  }, [f, o]), c.current;
}, Qs = (f, o, c, d) => f.getFixedT(o, c, d), ad = (f, o, c, d) => vt.useCallback(Qs(f, o, c, d), [f, o, c, d]), ui = function(f) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: c
  } = o, {
    i18n: d,
    defaultNS: b
  } = vt.useContext(Nr) || {}, y = c || d || ur();
  if (y && !y.reportNamespaces && (y.reportNamespaces = new ed()), !y) {
    fo("You will need to pass in an i18next instance by using initReactI18next");
    const te = (oe, ie) => vn(ie) ? ie : sr(ie) && vn(ie.defaultValue) ? ie.defaultValue : Array.isArray(oe) ? oe[oe.length - 1] : oe, xe = [te, {}, !1];
    return xe.t = te, xe.i18n = {}, xe.ready = !1, xe;
  }
  y.options.react && y.options.react.wait !== void 0 && fo("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const x = {
    ...ci(),
    ...y.options.react,
    ...o
  }, {
    useSuspense: M,
    keyPrefix: R
  } = x;
  let V = f || b || y.options && y.options.defaultNS;
  V = vn(V) ? [V] : V || ["translation"], y.reportNamespaces.addUsedNamespaces && y.reportNamespaces.addUsedNamespaces(V);
  const J = (y.isInitialized || y.initializedStoreOnce) && V.every((te) => Hl(te, y, x)), X = ad(y, o.lng || null, x.nsMode === "fallback" ? V : V[0], R), U = () => X, B = () => Qs(y, o.lng || null, x.nsMode === "fallback" ? V : V[0], R), [me, ge] = vt.useState(U);
  let q = V.join();
  o.lng && (q = `${o.lng}${q}`);
  const Se = nd(q), Y = vt.useRef(!0);
  vt.useEffect(() => {
    const {
      bindI18n: te,
      bindI18nStore: xe
    } = x;
    Y.current = !0, !J && !M && (o.lng ? Is(y, o.lng, V, () => {
      Y.current && ge(B);
    }) : Ms(y, V, () => {
      Y.current && ge(B);
    })), J && Se && Se !== q && Y.current && ge(B);
    const oe = () => {
      Y.current && ge(B);
    };
    return te && y && y.on(te, oe), xe && y && y.store.on(xe, oe), () => {
      Y.current = !1, te && y && te.split(" ").forEach((ie) => y.off(ie, oe)), xe && y && xe.split(" ").forEach((ie) => y.store.off(ie, oe));
    };
  }, [y, q]), vt.useEffect(() => {
    Y.current && J && ge(U);
  }, [y, R, J]);
  const ve = [me, y, J];
  if (ve.t = me, ve.i18n = y, ve.ready = J, J || !J && !M) return ve;
  throw new Promise((te) => {
    o.lng ? Is(y, o.lng, V, () => te()) : Ms(y, V, () => te());
  });
}, rd = function(f) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function(d) {
    function b(x) {
      let {
        forwardedRef: M,
        ...R
      } = x;
      const [V, J, X] = ui(f, {
        ...R,
        keyPrefix: o.keyPrefix
      }), U = {
        ...R,
        t: V,
        i18n: J,
        tReady: X
      };
      return o.withRef && M ? U.ref = M : !o.withRef && M && (U.forwardedRef = M), vt.createElement(d, U);
    }
    b.displayName = `withI18nextTranslation(${Ks(d)})`, b.WrappedComponent = d;
    const y = (x, M) => vt.createElement(b, Object.assign({}, x, {
      forwardedRef: M
    }));
    return o.withRef ? vt.forwardRef(y) : b;
  };
};
function od(f) {
  const {
    ns: o,
    children: c,
    ...d
  } = f, [b, y, x] = ui(o, d);
  return c(b, {
    i18n: y,
    lng: y.language
  }, x);
}
function id(f) {
  let {
    i18n: o,
    defaultNS: c,
    children: d
  } = f;
  const b = vt.useMemo(() => ({
    i18n: o,
    defaultNS: c
  }), [o, c]);
  return vt.createElement(Nr.Provider, {
    value: b
  }, d);
}
const Xs = function(f, o) {
  let c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    i18n: d
  } = c, {
    i18n: b
  } = vt.useContext(Nr) || {}, y = d || b || ur();
  y.options && y.options.isClone || (f && !y.initializedStoreOnce && (y.services.resourceStore.data = f, y.options.ns = Object.values(f).reduce((x, M) => (Object.keys(M).forEach((R) => {
    x.indexOf(R) < 0 && x.push(R);
  }), x), y.options.ns), y.initializedStoreOnce = !0, y.isInitialized = !0), o && !y.initializedLanguageOnce && (y.changeLanguage(o), y.initializedLanguageOnce = !0));
}, sd = () => function(o) {
  function c(d) {
    let {
      initialI18nStore: b,
      initialLanguage: y,
      ...x
    } = d;
    return Xs(b, y), vt.createElement(o, {
      ...x
    });
  }
  return c.getInitialProps = Ys(o), c.displayName = `withI18nextSSR(${Ks(o)})`, c.WrappedComponent = o, c;
}, cd = () => "", ud = () => "", ld = () => "", dd = () => "", pd = () => "", fd = () => "", hd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  I18nContext: Nr,
  I18nextProvider: id,
  Trans: td,
  TransWithoutContext: Js,
  Translation: od,
  composeInitialProps: Ys,
  date: cd,
  getDefaults: ci,
  getI18n: ur,
  getInitialProps: Zs,
  initReactI18next: Xl,
  number: ld,
  plural: pd,
  select: dd,
  selectOrdinal: fd,
  setDefaults: Hs,
  setI18n: zs,
  time: ud,
  useSSR: Xs,
  useTranslation: ui,
  withSSR: sd,
  withTranslation: rd
}, Symbol.toStringTag, { value: "Module" })), gd = /* @__PURE__ */ Ls(hd), Je = (f) => typeof f == "string", Rr = () => {
  let f, o;
  const c = new Promise((d, b) => {
    f = d, o = b;
  });
  return c.resolve = f, c.reject = o, c;
}, As = (f) => f == null ? "" : "" + f, md = (f, o, c) => {
  f.forEach((d) => {
    o[d] && (c[d] = o[d]);
  });
}, wd = /###/g, Es = (f) => f && f.indexOf("###") > -1 ? f.replace(wd, ".") : f, Ts = (f) => !f || Je(f), Or = (f, o, c) => {
  const d = Je(o) ? o.split(".") : o;
  let b = 0;
  for (; b < d.length - 1; ) {
    if (Ts(f)) return {};
    const y = Es(d[b]);
    !f[y] && c && (f[y] = new c()), Object.prototype.hasOwnProperty.call(f, y) ? f = f[y] : f = {}, ++b;
  }
  return Ts(f) ? {} : {
    obj: f,
    k: Es(d[b])
  };
}, _s = (f, o, c) => {
  const {
    obj: d,
    k: b
  } = Or(f, o, Object);
  if (d !== void 0 || o.length === 1) {
    d[b] = c;
    return;
  }
  let y = o[o.length - 1], x = o.slice(0, o.length - 1), M = Or(f, x, Object);
  for (; M.obj === void 0 && x.length; )
    y = `${x[x.length - 1]}.${y}`, x = x.slice(0, x.length - 1), M = Or(f, x, Object), M && M.obj && typeof M.obj[`${M.k}.${y}`] < "u" && (M.obj = void 0);
  M.obj[`${M.k}.${y}`] = c;
}, yd = (f, o, c, d) => {
  const {
    obj: b,
    k: y
  } = Or(f, o, Object);
  b[y] = b[y] || [], b[y].push(c);
}, ho = (f, o) => {
  const {
    obj: c,
    k: d
  } = Or(f, o);
  if (c)
    return c[d];
}, bd = (f, o, c) => {
  const d = ho(f, c);
  return d !== void 0 ? d : ho(o, c);
}, ec = (f, o, c) => {
  for (const d in o)
    d !== "__proto__" && d !== "constructor" && (d in f ? Je(f[d]) || f[d] instanceof String || Je(o[d]) || o[d] instanceof String ? c && (f[d] = o[d]) : ec(f[d], o[d], c) : f[d] = o[d]);
  return f;
}, rr = (f) => f.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var vd = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const kd = (f) => Je(f) ? f.replace(/[&<>"'\/]/g, (o) => vd[o]) : f;
class Sd {
  constructor(o) {
    this.capacity = o, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(o) {
    const c = this.regExpMap.get(o);
    if (c !== void 0)
      return c;
    const d = new RegExp(o);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(o, d), this.regExpQueue.push(o), d;
  }
}
const Pd = [" ", ",", "?", "!", ";"], xd = new Sd(20), Cd = (f, o, c) => {
  o = o || "", c = c || "";
  const d = Pd.filter((x) => o.indexOf(x) < 0 && c.indexOf(x) < 0);
  if (d.length === 0) return !0;
  const b = xd.getRegExp(`(${d.map((x) => x === "?" ? "\\?" : x).join("|")})`);
  let y = !b.test(f);
  if (!y) {
    const x = f.indexOf(c);
    x > 0 && !b.test(f.substring(0, x)) && (y = !0);
  }
  return y;
}, ii = function(f, o) {
  let c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!f) return;
  if (f[o]) return f[o];
  const d = o.split(c);
  let b = f;
  for (let y = 0; y < d.length; ) {
    if (!b || typeof b != "object")
      return;
    let x, M = "";
    for (let R = y; R < d.length; ++R)
      if (R !== y && (M += c), M += d[R], x = b[M], x !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof x) > -1 && R < d.length - 1)
          continue;
        y += R - y + 1;
        break;
      }
    b = x;
  }
  return b;
}, go = (f) => f && f.replace("_", "-"), Md = {
  type: "logger",
  log(f) {
    this.output("log", f);
  },
  warn(f) {
    this.output("warn", f);
  },
  error(f) {
    this.output("error", f);
  },
  output(f, o) {
    console && console[f] && console[f].apply(console, o);
  }
};
class mo {
  constructor(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(o, c);
  }
  init(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = c.prefix || "i18next:", this.logger = o || Md, this.options = c, this.debug = c.debug;
  }
  log() {
    for (var o = arguments.length, c = new Array(o), d = 0; d < o; d++)
      c[d] = arguments[d];
    return this.forward(c, "log", "", !0);
  }
  warn() {
    for (var o = arguments.length, c = new Array(o), d = 0; d < o; d++)
      c[d] = arguments[d];
    return this.forward(c, "warn", "", !0);
  }
  error() {
    for (var o = arguments.length, c = new Array(o), d = 0; d < o; d++)
      c[d] = arguments[d];
    return this.forward(c, "error", "");
  }
  deprecate() {
    for (var o = arguments.length, c = new Array(o), d = 0; d < o; d++)
      c[d] = arguments[d];
    return this.forward(c, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(o, c, d, b) {
    return b && !this.debug ? null : (Je(o[0]) && (o[0] = `${d}${this.prefix} ${o[0]}`), this.logger[c](o));
  }
  create(o) {
    return new mo(this.logger, {
      prefix: `${this.prefix}:${o}:`,
      ...this.options
    });
  }
  clone(o) {
    return o = o || this.options, o.prefix = o.prefix || this.prefix, new mo(this.logger, o);
  }
}
var Un = new mo();
class yo {
  constructor() {
    this.observers = {};
  }
  on(o, c) {
    return o.split(" ").forEach((d) => {
      this.observers[d] || (this.observers[d] = /* @__PURE__ */ new Map());
      const b = this.observers[d].get(c) || 0;
      this.observers[d].set(c, b + 1);
    }), this;
  }
  off(o, c) {
    if (this.observers[o]) {
      if (!c) {
        delete this.observers[o];
        return;
      }
      this.observers[o].delete(c);
    }
  }
  emit(o) {
    for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), b = 1; b < c; b++)
      d[b - 1] = arguments[b];
    this.observers[o] && Array.from(this.observers[o].entries()).forEach((x) => {
      let [M, R] = x;
      for (let V = 0; V < R; V++)
        M(...d);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((x) => {
      let [M, R] = x;
      for (let V = 0; V < R; V++)
        M.apply(M, [o, ...d]);
    });
  }
}
class Rs extends yo {
  constructor(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = o || {}, this.options = c, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(o) {
    this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
  }
  removeNamespaces(o) {
    const c = this.options.ns.indexOf(o);
    c > -1 && this.options.ns.splice(c, 1);
  }
  getResource(o, c, d) {
    let b = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const y = b.keySeparator !== void 0 ? b.keySeparator : this.options.keySeparator, x = b.ignoreJSONStructure !== void 0 ? b.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let M;
    o.indexOf(".") > -1 ? M = o.split(".") : (M = [o, c], d && (Array.isArray(d) ? M.push(...d) : Je(d) && y ? M.push(...d.split(y)) : M.push(d)));
    const R = ho(this.data, M);
    return !R && !c && !d && o.indexOf(".") > -1 && (o = M[0], c = M[1], d = M.slice(2).join(".")), R || !x || !Je(d) ? R : ii(this.data && this.data[o] && this.data[o][c], d, y);
  }
  addResource(o, c, d, b) {
    let y = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const x = y.keySeparator !== void 0 ? y.keySeparator : this.options.keySeparator;
    let M = [o, c];
    d && (M = M.concat(x ? d.split(x) : d)), o.indexOf(".") > -1 && (M = o.split("."), b = c, c = M[1]), this.addNamespaces(c), _s(this.data, M, b), y.silent || this.emit("added", o, c, d, b);
  }
  addResources(o, c, d) {
    let b = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const y in d)
      (Je(d[y]) || Array.isArray(d[y])) && this.addResource(o, c, y, d[y], {
        silent: !0
      });
    b.silent || this.emit("added", o, c, d);
  }
  addResourceBundle(o, c, d, b, y) {
    let x = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, M = [o, c];
    o.indexOf(".") > -1 && (M = o.split("."), b = d, d = c, c = M[1]), this.addNamespaces(c);
    let R = ho(this.data, M) || {};
    x.skipCopy || (d = JSON.parse(JSON.stringify(d))), b ? ec(R, d, y) : R = {
      ...R,
      ...d
    }, _s(this.data, M, R), x.silent || this.emit("added", o, c, d);
  }
  removeResourceBundle(o, c) {
    this.hasResourceBundle(o, c) && delete this.data[o][c], this.removeNamespaces(c), this.emit("removed", o, c);
  }
  hasResourceBundle(o, c) {
    return this.getResource(o, c) !== void 0;
  }
  getResourceBundle(o, c) {
    return c || (c = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(o, c)
    } : this.getResource(o, c);
  }
  getDataByLanguage(o) {
    return this.data[o];
  }
  hasLanguageSomeTranslations(o) {
    const c = this.getDataByLanguage(o);
    return !!(c && Object.keys(c) || []).find((b) => c[b] && Object.keys(c[b]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var tc = {
  processors: {},
  addPostProcessor(f) {
    this.processors[f.name] = f;
  },
  handle(f, o, c, d, b) {
    return f.forEach((y) => {
      this.processors[y] && (o = this.processors[y].process(o, c, d, b));
    }), o;
  }
};
const Ds = {};
class wo extends yo {
  constructor(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), md(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], o, this), this.options = c, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Un.create("translator");
  }
  changeLanguage(o) {
    o && (this.language = o);
  }
  exists(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (o == null)
      return !1;
    const d = this.resolve(o, c);
    return d && d.res !== void 0;
  }
  extractFromKey(o, c) {
    let d = c.nsSeparator !== void 0 ? c.nsSeparator : this.options.nsSeparator;
    d === void 0 && (d = ":");
    const b = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator;
    let y = c.ns || this.options.defaultNS || [];
    const x = d && o.indexOf(d) > -1, M = !this.options.userDefinedKeySeparator && !c.keySeparator && !this.options.userDefinedNsSeparator && !c.nsSeparator && !Cd(o, d, b);
    if (x && !M) {
      const R = o.match(this.interpolator.nestingRegexp);
      if (R && R.length > 0)
        return {
          key: o,
          namespaces: Je(y) ? [y] : y
        };
      const V = o.split(d);
      (d !== b || d === b && this.options.ns.indexOf(V[0]) > -1) && (y = V.shift()), o = V.join(b);
    }
    return {
      key: o,
      namespaces: Je(y) ? [y] : y
    };
  }
  translate(o, c, d) {
    if (typeof c != "object" && this.options.overloadTranslationOptionHandler && (c = this.options.overloadTranslationOptionHandler(arguments)), typeof c == "object" && (c = {
      ...c
    }), c || (c = {}), o == null) return "";
    Array.isArray(o) || (o = [String(o)]);
    const b = c.returnDetails !== void 0 ? c.returnDetails : this.options.returnDetails, y = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator, {
      key: x,
      namespaces: M
    } = this.extractFromKey(o[o.length - 1], c), R = M[M.length - 1], V = c.lng || this.language, J = c.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (V && V.toLowerCase() === "cimode") {
      if (J) {
        const te = c.nsSeparator || this.options.nsSeparator;
        return b ? {
          res: `${R}${te}${x}`,
          usedKey: x,
          exactUsedKey: x,
          usedLng: V,
          usedNS: R,
          usedParams: this.getUsedParamsDetails(c)
        } : `${R}${te}${x}`;
      }
      return b ? {
        res: x,
        usedKey: x,
        exactUsedKey: x,
        usedLng: V,
        usedNS: R,
        usedParams: this.getUsedParamsDetails(c)
      } : x;
    }
    const X = this.resolve(o, c);
    let U = X && X.res;
    const B = X && X.usedKey || x, me = X && X.exactUsedKey || x, ge = Object.prototype.toString.apply(U), q = ["[object Number]", "[object Function]", "[object RegExp]"], Se = c.joinArrays !== void 0 ? c.joinArrays : this.options.joinArrays, Y = !this.i18nFormat || this.i18nFormat.handleAsObject, ve = !Je(U) && typeof U != "boolean" && typeof U != "number";
    if (Y && U && ve && q.indexOf(ge) < 0 && !(Je(Se) && Array.isArray(U))) {
      if (!c.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const te = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(B, U, {
          ...c,
          ns: M
        }) : `key '${x} (${this.language})' returned an object instead of string.`;
        return b ? (X.res = te, X.usedParams = this.getUsedParamsDetails(c), X) : te;
      }
      if (y) {
        const te = Array.isArray(U), xe = te ? [] : {}, oe = te ? me : B;
        for (const ie in U)
          if (Object.prototype.hasOwnProperty.call(U, ie)) {
            const lt = `${oe}${y}${ie}`;
            xe[ie] = this.translate(lt, {
              ...c,
              joinArrays: !1,
              ns: M
            }), xe[ie] === lt && (xe[ie] = U[ie]);
          }
        U = xe;
      }
    } else if (Y && Je(Se) && Array.isArray(U))
      U = U.join(Se), U && (U = this.extendTranslation(U, o, c, d));
    else {
      let te = !1, xe = !1;
      const oe = c.count !== void 0 && !Je(c.count), ie = wo.hasDefaultValue(c), lt = oe ? this.pluralResolver.getSuffix(V, c.count, c) : "", at = c.ordinal && oe ? this.pluralResolver.getSuffix(V, c.count, {
        ordinal: !1
      }) : "", qe = oe && !c.ordinal && c.count === 0 && this.pluralResolver.shouldUseIntlApi(), ut = qe && c[`defaultValue${this.options.pluralSeparator}zero`] || c[`defaultValue${lt}`] || c[`defaultValue${at}`] || c.defaultValue;
      !this.isValidLookup(U) && ie && (te = !0, U = ut), this.isValidLookup(U) || (xe = !0, U = x);
      const Le = (c.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && xe ? void 0 : U, Ct = ie && ut !== U && this.options.updateMissing;
      if (xe || te || Ct) {
        if (this.logger.log(Ct ? "updateKey" : "missingKey", V, R, x, Ct ? ut : U), y) {
          const mt = this.resolve(x, {
            ...c,
            keySeparator: !1
          });
          mt && mt.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let Ne = [];
        const Pt = this.languageUtils.getFallbackCodes(this.options.fallbackLng, c.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && Pt && Pt[0])
          for (let mt = 0; mt < Pt.length; mt++)
            Ne.push(Pt[mt]);
        else this.options.saveMissingTo === "all" ? Ne = this.languageUtils.toResolveHierarchy(c.lng || this.language) : Ne.push(c.lng || this.language);
        const _t = (mt, ft, Ke) => {
          const W = ie && Ke !== U ? Ke : Le;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(mt, R, ft, W, Ct, c) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(mt, R, ft, W, Ct, c), this.emit("missingKey", mt, R, ft, U);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && oe ? Ne.forEach((mt) => {
          const ft = this.pluralResolver.getSuffixes(mt, c);
          qe && c[`defaultValue${this.options.pluralSeparator}zero`] && ft.indexOf(`${this.options.pluralSeparator}zero`) < 0 && ft.push(`${this.options.pluralSeparator}zero`), ft.forEach((Ke) => {
            _t([mt], x + Ke, c[`defaultValue${Ke}`] || ut);
          });
        }) : _t(Ne, x, ut));
      }
      U = this.extendTranslation(U, o, c, X, d), xe && U === x && this.options.appendNamespaceToMissingKey && (U = `${R}:${x}`), (xe || te) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? U = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${R}:${x}` : x, te ? U : void 0) : U = this.options.parseMissingKeyHandler(U));
    }
    return b ? (X.res = U, X.usedParams = this.getUsedParamsDetails(c), X) : U;
  }
  extendTranslation(o, c, d, b, y) {
    var x = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      o = this.i18nFormat.parse(o, {
        ...this.options.interpolation.defaultVariables,
        ...d
      }, d.lng || this.language || b.usedLng, b.usedNS, b.usedKey, {
        resolved: b
      });
    else if (!d.skipInterpolation) {
      d.interpolation && this.interpolator.init({
        ...d,
        interpolation: {
          ...this.options.interpolation,
          ...d.interpolation
        }
      });
      const V = Je(o) && (d && d.interpolation && d.interpolation.skipOnVariables !== void 0 ? d.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let J;
      if (V) {
        const U = o.match(this.interpolator.nestingRegexp);
        J = U && U.length;
      }
      let X = d.replace && !Je(d.replace) ? d.replace : d;
      if (this.options.interpolation.defaultVariables && (X = {
        ...this.options.interpolation.defaultVariables,
        ...X
      }), o = this.interpolator.interpolate(o, X, d.lng || this.language || b.usedLng, d), V) {
        const U = o.match(this.interpolator.nestingRegexp), B = U && U.length;
        J < B && (d.nest = !1);
      }
      !d.lng && this.options.compatibilityAPI !== "v1" && b && b.res && (d.lng = this.language || b.usedLng), d.nest !== !1 && (o = this.interpolator.nest(o, function() {
        for (var U = arguments.length, B = new Array(U), me = 0; me < U; me++)
          B[me] = arguments[me];
        return y && y[0] === B[0] && !d.context ? (x.logger.warn(`It seems you are nesting recursively key: ${B[0]} in key: ${c[0]}`), null) : x.translate(...B, c);
      }, d)), d.interpolation && this.interpolator.reset();
    }
    const M = d.postProcess || this.options.postProcess, R = Je(M) ? [M] : M;
    return o != null && R && R.length && d.applyPostProcessor !== !1 && (o = tc.handle(R, o, c, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...b,
        usedParams: this.getUsedParamsDetails(d)
      },
      ...d
    } : d, this)), o;
  }
  resolve(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, d, b, y, x, M;
    return Je(o) && (o = [o]), o.forEach((R) => {
      if (this.isValidLookup(d)) return;
      const V = this.extractFromKey(R, c), J = V.key;
      b = J;
      let X = V.namespaces;
      this.options.fallbackNS && (X = X.concat(this.options.fallbackNS));
      const U = c.count !== void 0 && !Je(c.count), B = U && !c.ordinal && c.count === 0 && this.pluralResolver.shouldUseIntlApi(), me = c.context !== void 0 && (Je(c.context) || typeof c.context == "number") && c.context !== "", ge = c.lngs ? c.lngs : this.languageUtils.toResolveHierarchy(c.lng || this.language, c.fallbackLng);
      X.forEach((q) => {
        this.isValidLookup(d) || (M = q, !Ds[`${ge[0]}-${q}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(M) && (Ds[`${ge[0]}-${q}`] = !0, this.logger.warn(`key "${b}" for languages "${ge.join(", ")}" won't get resolved as namespace "${M}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), ge.forEach((Se) => {
          if (this.isValidLookup(d)) return;
          x = Se;
          const Y = [J];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(Y, J, Se, q, c);
          else {
            let te;
            U && (te = this.pluralResolver.getSuffix(Se, c.count, c));
            const xe = `${this.options.pluralSeparator}zero`, oe = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (U && (Y.push(J + te), c.ordinal && te.indexOf(oe) === 0 && Y.push(J + te.replace(oe, this.options.pluralSeparator)), B && Y.push(J + xe)), me) {
              const ie = `${J}${this.options.contextSeparator}${c.context}`;
              Y.push(ie), U && (Y.push(ie + te), c.ordinal && te.indexOf(oe) === 0 && Y.push(ie + te.replace(oe, this.options.pluralSeparator)), B && Y.push(ie + xe));
            }
          }
          let ve;
          for (; ve = Y.pop(); )
            this.isValidLookup(d) || (y = ve, d = this.getResource(Se, q, ve, c));
        }));
      });
    }), {
      res: d,
      usedKey: b,
      exactUsedKey: y,
      usedLng: x,
      usedNS: M
    };
  }
  isValidLookup(o) {
    return o !== void 0 && !(!this.options.returnNull && o === null) && !(!this.options.returnEmptyString && o === "");
  }
  getResource(o, c, d) {
    let b = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(o, c, d, b) : this.resourceStore.getResource(o, c, d, b);
  }
  getUsedParamsDetails() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const c = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], d = o.replace && !Je(o.replace);
    let b = d ? o.replace : o;
    if (d && typeof o.count < "u" && (b.count = o.count), this.options.interpolation.defaultVariables && (b = {
      ...this.options.interpolation.defaultVariables,
      ...b
    }), !d) {
      b = {
        ...b
      };
      for (const y of c)
        delete b[y];
    }
    return b;
  }
  static hasDefaultValue(o) {
    const c = "defaultValue";
    for (const d in o)
      if (Object.prototype.hasOwnProperty.call(o, d) && c === d.substring(0, c.length) && o[d] !== void 0)
        return !0;
    return !1;
  }
}
const ei = (f) => f.charAt(0).toUpperCase() + f.slice(1);
class Os {
  constructor(o) {
    this.options = o, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Un.create("languageUtils");
  }
  getScriptPartFromCode(o) {
    if (o = go(o), !o || o.indexOf("-") < 0) return null;
    const c = o.split("-");
    return c.length === 2 || (c.pop(), c[c.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(c.join("-"));
  }
  getLanguagePartFromCode(o) {
    if (o = go(o), !o || o.indexOf("-") < 0) return o;
    const c = o.split("-");
    return this.formatLanguageCode(c[0]);
  }
  formatLanguageCode(o) {
    if (Je(o) && o.indexOf("-") > -1) {
      if (typeof Intl < "u" && typeof Intl.getCanonicalLocales < "u")
        try {
          let b = Intl.getCanonicalLocales(o)[0];
          if (b && this.options.lowerCaseLng && (b = b.toLowerCase()), b) return b;
        } catch {
        }
      const c = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let d = o.split("-");
      return this.options.lowerCaseLng ? d = d.map((b) => b.toLowerCase()) : d.length === 2 ? (d[0] = d[0].toLowerCase(), d[1] = d[1].toUpperCase(), c.indexOf(d[1].toLowerCase()) > -1 && (d[1] = ei(d[1].toLowerCase()))) : d.length === 3 && (d[0] = d[0].toLowerCase(), d[1].length === 2 && (d[1] = d[1].toUpperCase()), d[0] !== "sgn" && d[2].length === 2 && (d[2] = d[2].toUpperCase()), c.indexOf(d[1].toLowerCase()) > -1 && (d[1] = ei(d[1].toLowerCase())), c.indexOf(d[2].toLowerCase()) > -1 && (d[2] = ei(d[2].toLowerCase()))), d.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? o.toLowerCase() : o;
  }
  isSupportedCode(o) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (o = this.getLanguagePartFromCode(o)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(o) > -1;
  }
  getBestMatchFromCodes(o) {
    if (!o) return null;
    let c;
    return o.forEach((d) => {
      if (c) return;
      const b = this.formatLanguageCode(d);
      (!this.options.supportedLngs || this.isSupportedCode(b)) && (c = b);
    }), !c && this.options.supportedLngs && o.forEach((d) => {
      if (c) return;
      const b = this.getLanguagePartFromCode(d);
      if (this.isSupportedCode(b)) return c = b;
      c = this.options.supportedLngs.find((y) => {
        if (y === b) return y;
        if (!(y.indexOf("-") < 0 && b.indexOf("-") < 0) && (y.indexOf("-") > 0 && b.indexOf("-") < 0 && y.substring(0, y.indexOf("-")) === b || y.indexOf(b) === 0 && b.length > 1))
          return y;
      });
    }), c || (c = this.getFallbackCodes(this.options.fallbackLng)[0]), c;
  }
  getFallbackCodes(o, c) {
    if (!o) return [];
    if (typeof o == "function" && (o = o(c)), Je(o) && (o = [o]), Array.isArray(o)) return o;
    if (!c) return o.default || [];
    let d = o[c];
    return d || (d = o[this.getScriptPartFromCode(c)]), d || (d = o[this.formatLanguageCode(c)]), d || (d = o[this.getLanguagePartFromCode(c)]), d || (d = o.default), d || [];
  }
  toResolveHierarchy(o, c) {
    const d = this.getFallbackCodes(c || this.options.fallbackLng || [], o), b = [], y = (x) => {
      x && (this.isSupportedCode(x) ? b.push(x) : this.logger.warn(`rejecting language code not found in supportedLngs: ${x}`));
    };
    return Je(o) && (o.indexOf("-") > -1 || o.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && y(this.formatLanguageCode(o)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && y(this.getScriptPartFromCode(o)), this.options.load !== "currentOnly" && y(this.getLanguagePartFromCode(o))) : Je(o) && y(this.formatLanguageCode(o)), d.forEach((x) => {
      b.indexOf(x) < 0 && y(this.formatLanguageCode(x));
    }), b;
  }
}
let Id = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], Ad = {
  1: (f) => +(f > 1),
  2: (f) => +(f != 1),
  3: (f) => 0,
  4: (f) => f % 10 == 1 && f % 100 != 11 ? 0 : f % 10 >= 2 && f % 10 <= 4 && (f % 100 < 10 || f % 100 >= 20) ? 1 : 2,
  5: (f) => f == 0 ? 0 : f == 1 ? 1 : f == 2 ? 2 : f % 100 >= 3 && f % 100 <= 10 ? 3 : f % 100 >= 11 ? 4 : 5,
  6: (f) => f == 1 ? 0 : f >= 2 && f <= 4 ? 1 : 2,
  7: (f) => f == 1 ? 0 : f % 10 >= 2 && f % 10 <= 4 && (f % 100 < 10 || f % 100 >= 20) ? 1 : 2,
  8: (f) => f == 1 ? 0 : f == 2 ? 1 : f != 8 && f != 11 ? 2 : 3,
  9: (f) => +(f >= 2),
  10: (f) => f == 1 ? 0 : f == 2 ? 1 : f < 7 ? 2 : f < 11 ? 3 : 4,
  11: (f) => f == 1 || f == 11 ? 0 : f == 2 || f == 12 ? 1 : f > 2 && f < 20 ? 2 : 3,
  12: (f) => +(f % 10 != 1 || f % 100 == 11),
  13: (f) => +(f !== 0),
  14: (f) => f == 1 ? 0 : f == 2 ? 1 : f == 3 ? 2 : 3,
  15: (f) => f % 10 == 1 && f % 100 != 11 ? 0 : f % 10 >= 2 && (f % 100 < 10 || f % 100 >= 20) ? 1 : 2,
  16: (f) => f % 10 == 1 && f % 100 != 11 ? 0 : f !== 0 ? 1 : 2,
  17: (f) => f == 1 || f % 10 == 1 && f % 100 != 11 ? 0 : 1,
  18: (f) => f == 0 ? 0 : f == 1 ? 1 : 2,
  19: (f) => f == 1 ? 0 : f == 0 || f % 100 > 1 && f % 100 < 11 ? 1 : f % 100 > 10 && f % 100 < 20 ? 2 : 3,
  20: (f) => f == 1 ? 0 : f == 0 || f % 100 > 0 && f % 100 < 20 ? 1 : 2,
  21: (f) => f % 100 == 1 ? 1 : f % 100 == 2 ? 2 : f % 100 == 3 || f % 100 == 4 ? 3 : 0,
  22: (f) => f == 1 ? 0 : f == 2 ? 1 : (f < 0 || f > 10) && f % 10 == 0 ? 2 : 3
};
const Ed = ["v1", "v2", "v3"], Td = ["v4"], Ws = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, _d = () => {
  const f = {};
  return Id.forEach((o) => {
    o.lngs.forEach((c) => {
      f[c] = {
        numbers: o.nr,
        plurals: Ad[o.fc]
      };
    });
  }), f;
};
class Rd {
  constructor(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = o, this.options = c, this.logger = Un.create("pluralResolver"), (!this.options.compatibilityJSON || Td.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = _d(), this.pluralRulesCache = {};
  }
  addRule(o, c) {
    this.rules[o] = c;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      const d = go(o === "dev" ? "en" : o), b = c.ordinal ? "ordinal" : "cardinal", y = JSON.stringify({
        cleanedCode: d,
        type: b
      });
      if (y in this.pluralRulesCache)
        return this.pluralRulesCache[y];
      let x;
      try {
        x = new Intl.PluralRules(d, {
          type: b
        });
      } catch {
        if (!o.match(/-|_/)) return;
        const R = this.languageUtils.getLanguagePartFromCode(o);
        x = this.getRule(R, c);
      }
      return this.pluralRulesCache[y] = x, x;
    }
    return this.rules[o] || this.rules[this.languageUtils.getLanguagePartFromCode(o)];
  }
  needsPlural(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const d = this.getRule(o, c);
    return this.shouldUseIntlApi() ? d && d.resolvedOptions().pluralCategories.length > 1 : d && d.numbers.length > 1;
  }
  getPluralFormsOfKey(o, c) {
    let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(o, d).map((b) => `${c}${b}`);
  }
  getSuffixes(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const d = this.getRule(o, c);
    return d ? this.shouldUseIntlApi() ? d.resolvedOptions().pluralCategories.sort((b, y) => Ws[b] - Ws[y]).map((b) => `${this.options.prepend}${c.ordinal ? `ordinal${this.options.prepend}` : ""}${b}`) : d.numbers.map((b) => this.getSuffix(o, b, c)) : [];
  }
  getSuffix(o, c) {
    let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const b = this.getRule(o, d);
    return b ? this.shouldUseIntlApi() ? `${this.options.prepend}${d.ordinal ? `ordinal${this.options.prepend}` : ""}${b.select(c)}` : this.getSuffixRetroCompatible(b, c) : (this.logger.warn(`no plural rule found for: ${o}`), "");
  }
  getSuffixRetroCompatible(o, c) {
    const d = o.noAbs ? o.plurals(c) : o.plurals(Math.abs(c));
    let b = o.numbers[d];
    this.options.simplifyPluralSuffix && o.numbers.length === 2 && o.numbers[0] === 1 && (b === 2 ? b = "plural" : b === 1 && (b = ""));
    const y = () => this.options.prepend && b.toString() ? this.options.prepend + b.toString() : b.toString();
    return this.options.compatibilityJSON === "v1" ? b === 1 ? "" : typeof b == "number" ? `_plural_${b.toString()}` : y() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && o.numbers.length === 2 && o.numbers[0] === 1 ? y() : this.options.prepend && d.toString() ? this.options.prepend + d.toString() : d.toString();
  }
  shouldUseIntlApi() {
    return !Ed.includes(this.options.compatibilityJSON);
  }
}
const Bs = function(f, o, c) {
  let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", b = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, y = bd(f, o, c);
  return !y && b && Je(c) && (y = ii(f, c, d), y === void 0 && (y = ii(o, c, d))), y;
}, ti = (f) => f.replace(/\$/g, "$$$$");
class Dd {
  constructor() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Un.create("interpolator"), this.options = o, this.format = o.interpolation && o.interpolation.format || ((c) => c), this.init(o);
  }
  init() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    o.interpolation || (o.interpolation = {
      escapeValue: !0
    });
    const {
      escape: c,
      escapeValue: d,
      useRawValueToEscape: b,
      prefix: y,
      prefixEscaped: x,
      suffix: M,
      suffixEscaped: R,
      formatSeparator: V,
      unescapeSuffix: J,
      unescapePrefix: X,
      nestingPrefix: U,
      nestingPrefixEscaped: B,
      nestingSuffix: me,
      nestingSuffixEscaped: ge,
      nestingOptionsSeparator: q,
      maxReplaces: Se,
      alwaysFormat: Y
    } = o.interpolation;
    this.escape = c !== void 0 ? c : kd, this.escapeValue = d !== void 0 ? d : !0, this.useRawValueToEscape = b !== void 0 ? b : !1, this.prefix = y ? rr(y) : x || "{{", this.suffix = M ? rr(M) : R || "}}", this.formatSeparator = V || ",", this.unescapePrefix = J ? "" : X || "-", this.unescapeSuffix = this.unescapePrefix ? "" : J || "", this.nestingPrefix = U ? rr(U) : B || rr("$t("), this.nestingSuffix = me ? rr(me) : ge || rr(")"), this.nestingOptionsSeparator = q || ",", this.maxReplaces = Se || 1e3, this.alwaysFormat = Y !== void 0 ? Y : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const o = (c, d) => c && c.source === d ? (c.lastIndex = 0, c) : new RegExp(d, "g");
    this.regexp = o(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = o(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = o(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(o, c, d, b) {
    let y, x, M;
    const R = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, V = (B) => {
      if (B.indexOf(this.formatSeparator) < 0) {
        const Se = Bs(c, R, B, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(Se, void 0, d, {
          ...b,
          ...c,
          interpolationkey: B
        }) : Se;
      }
      const me = B.split(this.formatSeparator), ge = me.shift().trim(), q = me.join(this.formatSeparator).trim();
      return this.format(Bs(c, R, ge, this.options.keySeparator, this.options.ignoreJSONStructure), q, d, {
        ...b,
        ...c,
        interpolationkey: ge
      });
    };
    this.resetRegExp();
    const J = b && b.missingInterpolationHandler || this.options.missingInterpolationHandler, X = b && b.interpolation && b.interpolation.skipOnVariables !== void 0 ? b.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (B) => ti(B)
    }, {
      regex: this.regexp,
      safeValue: (B) => this.escapeValue ? ti(this.escape(B)) : ti(B)
    }].forEach((B) => {
      for (M = 0; y = B.regex.exec(o); ) {
        const me = y[1].trim();
        if (x = V(me), x === void 0)
          if (typeof J == "function") {
            const q = J(o, y, b);
            x = Je(q) ? q : "";
          } else if (b && Object.prototype.hasOwnProperty.call(b, me))
            x = "";
          else if (X) {
            x = y[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${me} for interpolating ${o}`), x = "";
        else !Je(x) && !this.useRawValueToEscape && (x = As(x));
        const ge = B.safeValue(x);
        if (o = o.replace(y[0], ge), X ? (B.regex.lastIndex += x.length, B.regex.lastIndex -= y[0].length) : B.regex.lastIndex = 0, M++, M >= this.maxReplaces)
          break;
      }
    }), o;
  }
  nest(o, c) {
    let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, b, y, x;
    const M = (R, V) => {
      const J = this.nestingOptionsSeparator;
      if (R.indexOf(J) < 0) return R;
      const X = R.split(new RegExp(`${J}[ ]*{`));
      let U = `{${X[1]}`;
      R = X[0], U = this.interpolate(U, x);
      const B = U.match(/'/g), me = U.match(/"/g);
      (B && B.length % 2 === 0 && !me || me.length % 2 !== 0) && (U = U.replace(/'/g, '"'));
      try {
        x = JSON.parse(U), V && (x = {
          ...V,
          ...x
        });
      } catch (ge) {
        return this.logger.warn(`failed parsing options string in nesting for key ${R}`, ge), `${R}${J}${U}`;
      }
      return x.defaultValue && x.defaultValue.indexOf(this.prefix) > -1 && delete x.defaultValue, R;
    };
    for (; b = this.nestingRegexp.exec(o); ) {
      let R = [];
      x = {
        ...d
      }, x = x.replace && !Je(x.replace) ? x.replace : x, x.applyPostProcessor = !1, delete x.defaultValue;
      let V = !1;
      if (b[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(b[1])) {
        const J = b[1].split(this.formatSeparator).map((X) => X.trim());
        b[1] = J.shift(), R = J, V = !0;
      }
      if (y = c(M.call(this, b[1].trim(), x), x), y && b[0] === o && !Je(y)) return y;
      Je(y) || (y = As(y)), y || (this.logger.warn(`missed to resolve ${b[1]} for nesting ${o}`), y = ""), V && (y = R.reduce((J, X) => this.format(J, X, d.lng, {
        ...d,
        interpolationkey: b[1].trim()
      }), y.trim())), o = o.replace(b[0], y), this.regexp.lastIndex = 0;
    }
    return o;
  }
}
const Od = (f) => {
  let o = f.toLowerCase().trim();
  const c = {};
  if (f.indexOf("(") > -1) {
    const d = f.split("(");
    o = d[0].toLowerCase().trim();
    const b = d[1].substring(0, d[1].length - 1);
    o === "currency" && b.indexOf(":") < 0 ? c.currency || (c.currency = b.trim()) : o === "relativetime" && b.indexOf(":") < 0 ? c.range || (c.range = b.trim()) : b.split(";").forEach((x) => {
      if (x) {
        const [M, ...R] = x.split(":"), V = R.join(":").trim().replace(/^'+|'+$/g, ""), J = M.trim();
        c[J] || (c[J] = V), V === "false" && (c[J] = !1), V === "true" && (c[J] = !0), isNaN(V) || (c[J] = parseInt(V, 10));
      }
    });
  }
  return {
    formatName: o,
    formatOptions: c
  };
}, or = (f) => {
  const o = {};
  return (c, d, b) => {
    let y = b;
    b && b.interpolationkey && b.formatParams && b.formatParams[b.interpolationkey] && b[b.interpolationkey] && (y = {
      ...y,
      [b.interpolationkey]: void 0
    });
    const x = d + JSON.stringify(y);
    let M = o[x];
    return M || (M = f(go(d), b), o[x] = M), M(c);
  };
};
class Wd {
  constructor() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Un.create("formatter"), this.options = o, this.formats = {
      number: or((c, d) => {
        const b = new Intl.NumberFormat(c, {
          ...d
        });
        return (y) => b.format(y);
      }),
      currency: or((c, d) => {
        const b = new Intl.NumberFormat(c, {
          ...d,
          style: "currency"
        });
        return (y) => b.format(y);
      }),
      datetime: or((c, d) => {
        const b = new Intl.DateTimeFormat(c, {
          ...d
        });
        return (y) => b.format(y);
      }),
      relativetime: or((c, d) => {
        const b = new Intl.RelativeTimeFormat(c, {
          ...d
        });
        return (y) => b.format(y, d.range || "day");
      }),
      list: or((c, d) => {
        const b = new Intl.ListFormat(c, {
          ...d
        });
        return (y) => b.format(y);
      })
    }, this.init(o);
  }
  init(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = c.interpolation.formatSeparator || ",";
  }
  add(o, c) {
    this.formats[o.toLowerCase().trim()] = c;
  }
  addCached(o, c) {
    this.formats[o.toLowerCase().trim()] = or(c);
  }
  format(o, c, d) {
    let b = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const y = c.split(this.formatSeparator);
    if (y.length > 1 && y[0].indexOf("(") > 1 && y[0].indexOf(")") < 0 && y.find((M) => M.indexOf(")") > -1)) {
      const M = y.findIndex((R) => R.indexOf(")") > -1);
      y[0] = [y[0], ...y.splice(1, M)].join(this.formatSeparator);
    }
    return y.reduce((M, R) => {
      const {
        formatName: V,
        formatOptions: J
      } = Od(R);
      if (this.formats[V]) {
        let X = M;
        try {
          const U = b && b.formatParams && b.formatParams[b.interpolationkey] || {}, B = U.locale || U.lng || b.locale || b.lng || d;
          X = this.formats[V](M, B, {
            ...J,
            ...b,
            ...U
          });
        } catch (U) {
          this.logger.warn(U);
        }
        return X;
      } else
        this.logger.warn(`there was no format function for ${V}`);
      return M;
    }, o);
  }
}
const Bd = (f, o) => {
  f.pending[o] !== void 0 && (delete f.pending[o], f.pendingCount--);
};
class Nd extends yo {
  constructor(o, c, d) {
    let b = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = o, this.store = c, this.services = d, this.languageUtils = d.languageUtils, this.options = b, this.logger = Un.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = b.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = b.maxRetries >= 0 ? b.maxRetries : 5, this.retryTimeout = b.retryTimeout >= 1 ? b.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(d, b.backend, b);
  }
  queueLoad(o, c, d, b) {
    const y = {}, x = {}, M = {}, R = {};
    return o.forEach((V) => {
      let J = !0;
      c.forEach((X) => {
        const U = `${V}|${X}`;
        !d.reload && this.store.hasResourceBundle(V, X) ? this.state[U] = 2 : this.state[U] < 0 || (this.state[U] === 1 ? x[U] === void 0 && (x[U] = !0) : (this.state[U] = 1, J = !1, x[U] === void 0 && (x[U] = !0), y[U] === void 0 && (y[U] = !0), R[X] === void 0 && (R[X] = !0)));
      }), J || (M[V] = !0);
    }), (Object.keys(y).length || Object.keys(x).length) && this.queue.push({
      pending: x,
      pendingCount: Object.keys(x).length,
      loaded: {},
      errors: [],
      callback: b
    }), {
      toLoad: Object.keys(y),
      pending: Object.keys(x),
      toLoadLanguages: Object.keys(M),
      toLoadNamespaces: Object.keys(R)
    };
  }
  loaded(o, c, d) {
    const b = o.split("|"), y = b[0], x = b[1];
    c && this.emit("failedLoading", y, x, c), !c && d && this.store.addResourceBundle(y, x, d, void 0, void 0, {
      skipCopy: !0
    }), this.state[o] = c ? -1 : 2, c && d && (this.state[o] = 0);
    const M = {};
    this.queue.forEach((R) => {
      yd(R.loaded, [y], x), Bd(R, o), c && R.errors.push(c), R.pendingCount === 0 && !R.done && (Object.keys(R.loaded).forEach((V) => {
        M[V] || (M[V] = {});
        const J = R.loaded[V];
        J.length && J.forEach((X) => {
          M[V][X] === void 0 && (M[V][X] = !0);
        });
      }), R.done = !0, R.errors.length ? R.callback(R.errors) : R.callback());
    }), this.emit("loaded", M), this.queue = this.queue.filter((R) => !R.done);
  }
  read(o, c, d) {
    let b = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, y = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, x = arguments.length > 5 ? arguments[5] : void 0;
    if (!o.length) return x(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: o,
        ns: c,
        fcName: d,
        tried: b,
        wait: y,
        callback: x
      });
      return;
    }
    this.readingCalls++;
    const M = (V, J) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const X = this.waitingReads.shift();
        this.read(X.lng, X.ns, X.fcName, X.tried, X.wait, X.callback);
      }
      if (V && J && b < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, o, c, d, b + 1, y * 2, x);
        }, y);
        return;
      }
      x(V, J);
    }, R = this.backend[d].bind(this.backend);
    if (R.length === 2) {
      try {
        const V = R(o, c);
        V && typeof V.then == "function" ? V.then((J) => M(null, J)).catch(M) : M(null, V);
      } catch (V) {
        M(V);
      }
      return;
    }
    return R(o, c, M);
  }
  prepareLoading(o, c) {
    let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, b = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), b && b();
    Je(o) && (o = this.languageUtils.toResolveHierarchy(o)), Je(c) && (c = [c]);
    const y = this.queueLoad(o, c, d, b);
    if (!y.toLoad.length)
      return y.pending.length || b(), null;
    y.toLoad.forEach((x) => {
      this.loadOne(x);
    });
  }
  load(o, c, d) {
    this.prepareLoading(o, c, {}, d);
  }
  reload(o, c, d) {
    this.prepareLoading(o, c, {
      reload: !0
    }, d);
  }
  loadOne(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const d = o.split("|"), b = d[0], y = d[1];
    this.read(b, y, "read", void 0, void 0, (x, M) => {
      x && this.logger.warn(`${c}loading namespace ${y} for language ${b} failed`, x), !x && M && this.logger.log(`${c}loaded namespace ${y} for language ${b}`, M), this.loaded(o, x, M);
    });
  }
  saveMissing(o, c, d, b, y) {
    let x = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, M = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(c)) {
      this.logger.warn(`did not save key "${d}" as the namespace "${c}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(d == null || d === "")) {
      if (this.backend && this.backend.create) {
        const R = {
          ...x,
          isUpdate: y
        }, V = this.backend.create.bind(this.backend);
        if (V.length < 6)
          try {
            let J;
            V.length === 5 ? J = V(o, c, d, b, R) : J = V(o, c, d, b), J && typeof J.then == "function" ? J.then((X) => M(null, X)).catch(M) : M(null, J);
          } catch (J) {
            M(J);
          }
        else
          V(o, c, d, b, M, R);
      }
      !o || !o[0] || this.store.addResource(o[0], c, d, b);
    }
  }
}
const Ns = () => ({
  debug: !1,
  initImmediate: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (f) => {
    let o = {};
    if (typeof f[1] == "object" && (o = f[1]), Je(f[1]) && (o.defaultValue = f[1]), Je(f[2]) && (o.tDescription = f[2]), typeof f[2] == "object" || typeof f[3] == "object") {
      const c = f[3] || f[2];
      Object.keys(c).forEach((d) => {
        o[d] = c[d];
      });
    }
    return o;
  },
  interpolation: {
    escapeValue: !0,
    format: (f) => f,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  }
}), Fs = (f) => (Je(f.ns) && (f.ns = [f.ns]), Je(f.fallbackLng) && (f.fallbackLng = [f.fallbackLng]), Je(f.fallbackNS) && (f.fallbackNS = [f.fallbackNS]), f.supportedLngs && f.supportedLngs.indexOf("cimode") < 0 && (f.supportedLngs = f.supportedLngs.concat(["cimode"])), f), lo = () => {
}, Fd = (f) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(f)).forEach((c) => {
    typeof f[c] == "function" && (f[c] = f[c].bind(f));
  });
};
class Br extends yo {
  constructor() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Fs(o), this.services = {}, this.logger = Un, this.modules = {
      external: []
    }, Fd(this), c && !this.isInitialized && !o.isClone) {
      if (!this.options.initImmediate)
        return this.init(o, c), this;
      setTimeout(() => {
        this.init(o, c);
      }, 0);
    }
  }
  init() {
    var o = this;
    let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof c == "function" && (d = c, c = {}), !c.defaultNS && c.defaultNS !== !1 && c.ns && (Je(c.ns) ? c.defaultNS = c.ns : c.ns.indexOf("translation") < 0 && (c.defaultNS = c.ns[0]));
    const b = Ns();
    this.options = {
      ...b,
      ...this.options,
      ...Fs(c)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...b.interpolation,
      ...this.options.interpolation
    }), c.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = c.keySeparator), c.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = c.nsSeparator);
    const y = (J) => J ? typeof J == "function" ? new J() : J : null;
    if (!this.options.isClone) {
      this.modules.logger ? Un.init(y(this.modules.logger), this.options) : Un.init(null, this.options);
      let J;
      this.modules.formatter ? J = this.modules.formatter : typeof Intl < "u" && (J = Wd);
      const X = new Os(this.options);
      this.store = new Rs(this.options.resources, this.options);
      const U = this.services;
      U.logger = Un, U.resourceStore = this.store, U.languageUtils = X, U.pluralResolver = new Rd(X, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), J && (!this.options.interpolation.format || this.options.interpolation.format === b.interpolation.format) && (U.formatter = y(J), U.formatter.init(U, this.options), this.options.interpolation.format = U.formatter.format.bind(U.formatter)), U.interpolator = new Dd(this.options), U.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, U.backendConnector = new Nd(y(this.modules.backend), U.resourceStore, U, this.options), U.backendConnector.on("*", function(B) {
        for (var me = arguments.length, ge = new Array(me > 1 ? me - 1 : 0), q = 1; q < me; q++)
          ge[q - 1] = arguments[q];
        o.emit(B, ...ge);
      }), this.modules.languageDetector && (U.languageDetector = y(this.modules.languageDetector), U.languageDetector.init && U.languageDetector.init(U, this.options.detection, this.options)), this.modules.i18nFormat && (U.i18nFormat = y(this.modules.i18nFormat), U.i18nFormat.init && U.i18nFormat.init(this)), this.translator = new wo(this.services, this.options), this.translator.on("*", function(B) {
        for (var me = arguments.length, ge = new Array(me > 1 ? me - 1 : 0), q = 1; q < me; q++)
          ge[q - 1] = arguments[q];
        o.emit(B, ...ge);
      }), this.modules.external.forEach((B) => {
        B.init && B.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, d || (d = lo), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const J = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      J.length > 0 && J[0] !== "dev" && (this.options.lng = J[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((J) => {
      this[J] = function() {
        return o.store[J](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((J) => {
      this[J] = function() {
        return o.store[J](...arguments), o;
      };
    });
    const R = Rr(), V = () => {
      const J = (X, U) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), R.resolve(U), d(X, U);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return J(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, J);
    };
    return this.options.resources || !this.options.initImmediate ? V() : setTimeout(V, 0), R;
  }
  loadResources(o) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : lo;
    const b = Je(o) ? o : this.language;
    if (typeof o == "function" && (d = o), !this.options.resources || this.options.partialBundledLanguages) {
      if (b && b.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return d();
      const y = [], x = (M) => {
        if (!M || M === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(M).forEach((V) => {
          V !== "cimode" && y.indexOf(V) < 0 && y.push(V);
        });
      };
      b ? x(b) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((R) => x(R)), this.options.preload && this.options.preload.forEach((M) => x(M)), this.services.backendConnector.load(y, this.options.ns, (M) => {
        !M && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), d(M);
      });
    } else
      d(null);
  }
  reloadResources(o, c, d) {
    const b = Rr();
    return typeof o == "function" && (d = o, o = void 0), typeof c == "function" && (d = c, c = void 0), o || (o = this.languages), c || (c = this.options.ns), d || (d = lo), this.services.backendConnector.reload(o, c, (y) => {
      b.resolve(), d(y);
    }), b;
  }
  use(o) {
    if (!o) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!o.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return o.type === "backend" && (this.modules.backend = o), (o.type === "logger" || o.log && o.warn && o.error) && (this.modules.logger = o), o.type === "languageDetector" && (this.modules.languageDetector = o), o.type === "i18nFormat" && (this.modules.i18nFormat = o), o.type === "postProcessor" && tc.addPostProcessor(o), o.type === "formatter" && (this.modules.formatter = o), o.type === "3rdParty" && this.modules.external.push(o), this;
  }
  setResolvedLanguage(o) {
    if (!(!o || !this.languages) && !(["cimode", "dev"].indexOf(o) > -1))
      for (let c = 0; c < this.languages.length; c++) {
        const d = this.languages[c];
        if (!(["cimode", "dev"].indexOf(d) > -1) && this.store.hasLanguageSomeTranslations(d)) {
          this.resolvedLanguage = d;
          break;
        }
      }
  }
  changeLanguage(o, c) {
    var d = this;
    this.isLanguageChangingTo = o;
    const b = Rr();
    this.emit("languageChanging", o);
    const y = (R) => {
      this.language = R, this.languages = this.services.languageUtils.toResolveHierarchy(R), this.resolvedLanguage = void 0, this.setResolvedLanguage(R);
    }, x = (R, V) => {
      V ? (y(V), this.translator.changeLanguage(V), this.isLanguageChangingTo = void 0, this.emit("languageChanged", V), this.logger.log("languageChanged", V)) : this.isLanguageChangingTo = void 0, b.resolve(function() {
        return d.t(...arguments);
      }), c && c(R, function() {
        return d.t(...arguments);
      });
    }, M = (R) => {
      !o && !R && this.services.languageDetector && (R = []);
      const V = Je(R) ? R : this.services.languageUtils.getBestMatchFromCodes(R);
      V && (this.language || y(V), this.translator.language || this.translator.changeLanguage(V), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(V)), this.loadResources(V, (J) => {
        x(J, V);
      });
    };
    return !o && this.services.languageDetector && !this.services.languageDetector.async ? M(this.services.languageDetector.detect()) : !o && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(M) : this.services.languageDetector.detect(M) : M(o), b;
  }
  getFixedT(o, c, d) {
    var b = this;
    const y = function(x, M) {
      let R;
      if (typeof M != "object") {
        for (var V = arguments.length, J = new Array(V > 2 ? V - 2 : 0), X = 2; X < V; X++)
          J[X - 2] = arguments[X];
        R = b.options.overloadTranslationOptionHandler([x, M].concat(J));
      } else
        R = {
          ...M
        };
      R.lng = R.lng || y.lng, R.lngs = R.lngs || y.lngs, R.ns = R.ns || y.ns, R.keyPrefix !== "" && (R.keyPrefix = R.keyPrefix || d || y.keyPrefix);
      const U = b.options.keySeparator || ".";
      let B;
      return R.keyPrefix && Array.isArray(x) ? B = x.map((me) => `${R.keyPrefix}${U}${me}`) : B = R.keyPrefix ? `${R.keyPrefix}${U}${x}` : x, b.t(B, R);
    };
    return Je(o) ? y.lng = o : y.lngs = o, y.ns = c, y.keyPrefix = d, y;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(o) {
    this.options.defaultNS = o;
  }
  hasLoadedNamespace(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const d = c.lng || this.resolvedLanguage || this.languages[0], b = this.options ? this.options.fallbackLng : !1, y = this.languages[this.languages.length - 1];
    if (d.toLowerCase() === "cimode") return !0;
    const x = (M, R) => {
      const V = this.services.backendConnector.state[`${M}|${R}`];
      return V === -1 || V === 0 || V === 2;
    };
    if (c.precheck) {
      const M = c.precheck(this, x);
      if (M !== void 0) return M;
    }
    return !!(this.hasResourceBundle(d, o) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || x(d, o) && (!b || x(y, o)));
  }
  loadNamespaces(o, c) {
    const d = Rr();
    return this.options.ns ? (Je(o) && (o = [o]), o.forEach((b) => {
      this.options.ns.indexOf(b) < 0 && this.options.ns.push(b);
    }), this.loadResources((b) => {
      d.resolve(), c && c(b);
    }), d) : (c && c(), Promise.resolve());
  }
  loadLanguages(o, c) {
    const d = Rr();
    Je(o) && (o = [o]);
    const b = this.options.preload || [], y = o.filter((x) => b.indexOf(x) < 0 && this.services.languageUtils.isSupportedCode(x));
    return y.length ? (this.options.preload = b.concat(y), this.loadResources((x) => {
      d.resolve(), c && c(x);
    }), d) : (c && c(), Promise.resolve());
  }
  dir(o) {
    if (o || (o = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !o) return "rtl";
    const c = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], d = this.services && this.services.languageUtils || new Os(Ns());
    return c.indexOf(d.getLanguagePartFromCode(o)) > -1 || o.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = arguments.length > 1 ? arguments[1] : void 0;
    return new Br(o, c);
  }
  cloneInstance() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : lo;
    const d = o.forkResourceStore;
    d && delete o.forkResourceStore;
    const b = {
      ...this.options,
      ...o,
      isClone: !0
    }, y = new Br(b);
    return (o.debug !== void 0 || o.prefix !== void 0) && (y.logger = y.logger.clone(o)), ["store", "services", "language"].forEach((M) => {
      y[M] = this[M];
    }), y.services = {
      ...this.services
    }, y.services.utils = {
      hasLoadedNamespace: y.hasLoadedNamespace.bind(y)
    }, d && (y.store = new Rs(this.store.data, b), y.services.resourceStore = y.store), y.translator = new wo(y.services, b), y.translator.on("*", function(M) {
      for (var R = arguments.length, V = new Array(R > 1 ? R - 1 : 0), J = 1; J < R; J++)
        V[J - 1] = arguments[J];
      y.emit(M, ...V);
    }), y.init(b, c), y.translator.options = b, y.translator.backendConnector.services.utils = {
      hasLoadedNamespace: y.hasLoadedNamespace.bind(y)
    }, y;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const nc = Br.createInstance();
nc.createInstance = Br.createInstance;
var Ld = nc;
(() => {
  var f = { 847: (b, y) => {
    var x = { 2346: function(U, B, me) {
      var ge = this && this.__importDefault || function(Y) {
        return Y && Y.__esModule ? Y : { default: Y };
      };
      Object.defineProperty(B, "__esModule", { value: !0 }), B.getMostReadable = B.darkenColor = B.lightenColor = void 0;
      const q = ge(me(6535));
      B.lightenColor = (Y, ve) => Se(Y, "lighten", ve), B.darkenColor = (Y, ve) => Se(Y, "darken", ve);
      const Se = (Y, ve, te) => {
        if (te && (te < 0 || te > 100)) throw new Error(`${te} must be a number between 0 and 100`);
        return (0, q.default)(Y)[ve](te).toString();
      };
      B.getMostReadable = (Y, ve) => q.default.mostReadable(Y, ve).toHexString();
    }, 2317: (U, B) => {
      Object.defineProperty(B, "__esModule", { value: !0 }), B.IconSize = B.Transition = B.LineHeight = B.FontWeight = B.FontSize = B.FontFamily = B.Shadow = B.Radius = B.UnitPx = B.Unit = B.SizeName = B.Size = B.Color = void 0, B.Color = { white: "#FFFFFF", lightGray1: "#FAFBFE", lightGray2: "#F3F5F8", lightGray3: "#ECEEF1", lightGray4: "#DDDFE4", lightGray5: "#C9CBD2", neutralGray: "#7D808A", neutralGray80: "rgba(125,128,138,0.8)", silverGray: "#C0C1C2", darkGray1: "#53565F", darkGray2: "#383A40", darkGray3: "#2F3136", darkGray4: "#24262B", darkGray5: "#1E1F23", darkGray6: "#111214", openFinDarkest: "#3D39CD", openFinDarker: "#4642E0", openFin: "#504CFF", openFinLight: "#5254FB", openFinLighter: "#5C5EFE", openFinLightest: "#6864FF", functional1: "#207735", functional2: "#46C8F1", functional3: "#0A76D3", functional4: "#6CADE5", functional5: "#0A76D3", functional6: "#882BFE", functional7: "#F31818", functional8: "#C93400", functional9: "#FF5E60", functional10: "#F48F00", purple: "#8C61FF", lightblue: "#36C3FE", aqua: "#00CC88", yellow: "#FFEB00", salmon: "#FF8C4C", pink: "#FF5E60", lightpink: "#FF8FB8", white00: "rgba(255,255,255,0.0)", white10: "rgba(255,255,255,0.1)", white20: "rgba(255,255,255,0.2)", white30: "rgba(255,255,255,0.3)", white40: "rgba(255,255,255,0.4)", white50: "rgba(255,255,255,0.5)", white60: "rgba(255,255,255,0.6)", white70: "rgba(255,255,255,0.7)", white80: "rgba(255,255,255,0.8)", white90: "rgba(255,255,255,0.9)", black00: "rgba(0,0,0,0.0)", black10: "rgba(0,0,0,0.1)", black20: "rgba(0,0,0,0.2)", black30: "rgba(0,0,0,0.3)", black40: "rgba(0,0,0,0.4)", black50: "rgba(0,0,0,0.5)", black60: "rgba(0,0,0,0.6)", black70: "rgba(0,0,0,0.7)", black80: "rgba(0,0,0,0.8)", black90: "rgba(0,0,0,0.9)", transparent: "transparent", openFinActive: "#4642FF", openFinHover: "#6965FF", lightGray4Active: "#D7DADF", lightGray4Hover: "#EBECEF", darkGray2Active: "#33353B", darkGray2Hover: "#44464E" }, B.Size = { xsmall: "xsmall", small: "small", base: "base", large: "large", xlarge: "xlarge", xxlarge: "xxlarge", xxxlarge: "xxxlarge", xxxxlarge: "xxxxlarge" }, B.SizeName = { [B.Size.xsmall]: "Extra Small", [B.Size.small]: "Small", [B.Size.base]: "Base", [B.Size.large]: "Large", [B.Size.xlarge]: "Extra Large", [B.Size.xxlarge]: "2X Large", [B.Size.xxxlarge]: "3X Large", [B.Size.xxxxlarge]: "4X Large" }, B.Unit = { [B.Size.xsmall]: 4, [B.Size.small]: 8, [B.Size.base]: 12, [B.Size.large]: 16, [B.Size.xlarge]: 20, [B.Size.xxlarge]: 24, [B.Size.xxxlarge]: 32, [B.Size.xxxxlarge]: 48 }, B.UnitPx = { [B.Size.xsmall]: "4px", [B.Size.small]: "8px", [B.Size.base]: "12px", [B.Size.large]: "16px", [B.Size.xlarge]: "20px", [B.Size.xxlarge]: "24px", [B.Size.xxxlarge]: "32px", [B.Size.xxxxlarge]: "48px" }, B.Radius = { [B.Size.xsmall]: "2px", [B.Size.small]: "4px", [B.Size.base]: "8px", [B.Size.large]: "24px", pill: "100vh", round: "50%", none: "0" }, B.Shadow = { [B.Size.base]: "0 4px 4px rgba(0, 0, 0, 0.25)" }, B.FontFamily = ["Inter", "system-ui", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue", "sans-serif"].join(","), B.FontSize = { [B.Size.xsmall]: "8px", [B.Size.small]: "10px", [B.Size.base]: "12px", [B.Size.large]: "14px", [B.Size.xlarge]: "16px", [B.Size.xxlarge]: "18px", [B.Size.xxxlarge]: "20px", [B.Size.xxxxlarge]: "40px" }, B.FontWeight = { normal: 400, bold: 600 }, B.LineHeight = { ui: 1, heading: 1.2, text: 1.5 }, B.Transition = { base: "200ms cubic-bezier(0.16, 1, 0.3, 1)", none: "0ms" }, B.IconSize = { [B.Size.xsmall]: B.UnitPx.small, [B.Size.small]: B.UnitPx.base, [B.Size.base]: "15px", [B.Size.large]: B.UnitPx.xlarge, [B.Size.xlarge]: B.UnitPx.xxlarge, [B.Size.xxlarge]: B.UnitPx.xxxlarge, [B.Size.xxxlarge]: B.UnitPx.xxxxlarge };
    }, 6893: (U, B, me) => {
      Object.defineProperty(B, "__esModule", { value: !0 }), B.createTheme = void 0;
      const ge = me(2317), q = me(2346), Se = me(5939), Y = { fontFamily: ge.FontFamily, fontSize: ge.FontSize, fontWeight: ge.FontWeight, lineHeight: ge.LineHeight, iconSize: ge.IconSize, radius: ge.Radius, shadow: ge.Shadow, transition: ge.Transition, unit: ge.Unit, px: ge.UnitPx }, ve = (te, xe) => ({ [`${te}Active`]: (0, q.darkenColor)(xe, 2), [`${te}Hover`]: (0, q.lightenColor)(xe, 5), [`${te}Focused`]: (0, q.getMostReadable)(xe, [ge.Color.white, ge.Color.darkGray5]), [`${te}Text`]: (0, q.getMostReadable)(xe, [ge.Color.white, ge.Color.darkGray5]) });
      B.createTheme = (te) => Object.assign(Object.assign({}, Y), { palette: Object.assign(Object.assign(Object.assign({}, ve(Se.Palette.brandPrimary, te.brandPrimary)), ve(Se.Palette.brandSecondary, te.brandSecondary)), te) });
    }, 5939: (U, B) => {
      Object.defineProperty(B, "__esModule", { value: !0 }), B.Palette = void 0, B.Palette = { background1: "background1", background2: "background2", background3: "background3", background4: "background4", background5: "background5", background6: "background6", brandPrimary: "brandPrimary", brandSecondary: "brandSecondary", brandPrimaryActive: "brandPrimaryActive", brandPrimaryHover: "brandPrimaryHover", brandPrimaryFocused: "brandPrimaryFocused", brandPrimaryText: "brandPrimaryText", brandSecondaryActive: "brandSecondaryActive", brandSecondaryHover: "brandSecondaryHover", brandSecondaryFocused: "brandSecondaryFocused", brandSecondaryText: "brandSecondaryText", inputBackground: "inputBackground", inputColor: "inputColor", inputPlaceholder: "inputPlaceholder", inputDisabled: "inputDisabled", inputFocused: "inputFocused", inputBorder: "inputBorder", statusSuccess: "statusSuccess", statusWarning: "statusWarning", statusCritical: "statusCritical", statusActive: "statusActive", textDefault: "textDefault", textHelp: "textHelp", textInactive: "textInactive", borderNeutral: "borderNeutral", contentBackground1: "contentBackground1", contentBackground2: "contentBackground2", contentBackground3: "contentBackground3", contentBackground4: "contentBackground4", contentBackground5: "contentBackground5", linkDefault: "linkDefault", linkHover: "linkHover" };
    }, 6535: function(U) {
      U.exports = function() {
        function B(C) {
          return (B = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(G) {
            return typeof G;
          } : function(G) {
            return G && typeof Symbol == "function" && G.constructor === Symbol && G !== Symbol.prototype ? "symbol" : typeof G;
          })(C);
        }
        var me = /^\s+/, ge = /\s+$/;
        function q(C, G) {
          if (G = G || {}, (C = C || "") instanceof q) return C;
          if (!(this instanceof q)) return new q(C, G);
          var z = function(ne) {
            var De, $e, Oe, kt = { r: 0, g: 0, b: 0 }, ht = 1, _e = null, fn = null, Jt = null, hn = !1, Ut = !1;
            return typeof ne == "string" && (ne = function(ze) {
              ze = ze.replace(me, "").replace(ge, "").toLowerCase();
              var be, dt = !1;
              if (_t[ze]) ze = _t[ze], dt = !0;
              else if (ze == "transparent") return { r: 0, g: 0, b: 0, a: 0, format: "name" };
              return (be = Pe.rgb.exec(ze)) ? { r: be[1], g: be[2], b: be[3] } : (be = Pe.rgba.exec(ze)) ? { r: be[1], g: be[2], b: be[3], a: be[4] } : (be = Pe.hsl.exec(ze)) ? { h: be[1], s: be[2], l: be[3] } : (be = Pe.hsla.exec(ze)) ? { h: be[1], s: be[2], l: be[3], a: be[4] } : (be = Pe.hsv.exec(ze)) ? { h: be[1], s: be[2], v: be[3] } : (be = Pe.hsva.exec(ze)) ? { h: be[1], s: be[2], v: be[3], a: be[4] } : (be = Pe.hex8.exec(ze)) ? { r: ae(be[1]), g: ae(be[2]), b: ae(be[3]), a: et(be[4]), format: dt ? "name" : "hex8" } : (be = Pe.hex6.exec(ze)) ? { r: ae(be[1]), g: ae(be[2]), b: ae(be[3]), format: dt ? "name" : "hex" } : (be = Pe.hex4.exec(ze)) ? { r: ae(be[1] + "" + be[1]), g: ae(be[2] + "" + be[2]), b: ae(be[3] + "" + be[3]), a: et(be[4] + "" + be[4]), format: dt ? "name" : "hex8" } : !!(be = Pe.hex3.exec(ze)) && { r: ae(be[1] + "" + be[1]), g: ae(be[2] + "" + be[2]), b: ae(be[3] + "" + be[3]), format: dt ? "name" : "hex" };
            }(ne)), B(ne) == "object" && (Vt(ne.r) && Vt(ne.g) && Vt(ne.b) ? (De = ne.r, $e = ne.g, Oe = ne.b, kt = { r: 255 * Ke(De, 255), g: 255 * Ke($e, 255), b: 255 * Ke(Oe, 255) }, hn = !0, Ut = String(ne.r).substr(-1) === "%" ? "prgb" : "rgb") : Vt(ne.h) && Vt(ne.s) && Vt(ne.v) ? (_e = Re(ne.s), fn = Re(ne.v), kt = function(ze, be, dt) {
              ze = 6 * Ke(ze, 360), be = Ke(be, 100), dt = Ke(dt, 100);
              var Gt = Math.floor(ze), dn = ze - Gt, rt = dt * (1 - be), It = dt * (1 - dn * be), $t = dt * (1 - (1 - dn) * be), Qt = Gt % 6;
              return { r: 255 * [dt, It, rt, rt, $t, dt][Qt], g: 255 * [$t, dt, dt, It, rt, rt][Qt], b: 255 * [rt, rt, $t, dt, dt, It][Qt] };
            }(ne.h, _e, fn), hn = !0, Ut = "hsv") : Vt(ne.h) && Vt(ne.s) && Vt(ne.l) && (_e = Re(ne.s), Jt = Re(ne.l), kt = function(ze, be, dt) {
              var Gt, dn, rt;
              function It(jt, Ie, We) {
                return We < 0 && (We += 1), We > 1 && (We -= 1), We < 1 / 6 ? jt + 6 * (Ie - jt) * We : We < 0.5 ? Ie : We < 2 / 3 ? jt + (Ie - jt) * (2 / 3 - We) * 6 : jt;
              }
              if (ze = Ke(ze, 360), be = Ke(be, 100), dt = Ke(dt, 100), be === 0) Gt = dn = rt = dt;
              else {
                var $t = dt < 0.5 ? dt * (1 + be) : dt + be - dt * be, Qt = 2 * dt - $t;
                Gt = It(Qt, $t, ze + 1 / 3), dn = It(Qt, $t, ze), rt = It(Qt, $t, ze - 1 / 3);
              }
              return { r: 255 * Gt, g: 255 * dn, b: 255 * rt };
            }(ne.h, _e, Jt), hn = !0, Ut = "hsl"), ne.hasOwnProperty("a") && (ht = ne.a)), ht = ft(ht), { ok: hn, format: ne.format || Ut, r: Math.min(255, Math.max(kt.r, 0)), g: Math.min(255, Math.max(kt.g, 0)), b: Math.min(255, Math.max(kt.b, 0)), a: ht };
          }(C);
          this._originalInput = C, this._r = z.r, this._g = z.g, this._b = z.b, this._a = z.a, this._roundA = Math.round(100 * this._a) / 100, this._format = G.format || z.format, this._gradientType = G.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = z.ok;
        }
        function Se(C, G, z) {
          C = Ke(C, 255), G = Ke(G, 255), z = Ke(z, 255);
          var ne, De, $e = Math.max(C, G, z), Oe = Math.min(C, G, z), kt = ($e + Oe) / 2;
          if ($e == Oe) ne = De = 0;
          else {
            var ht = $e - Oe;
            switch (De = kt > 0.5 ? ht / (2 - $e - Oe) : ht / ($e + Oe), $e) {
              case C:
                ne = (G - z) / ht + (G < z ? 6 : 0);
                break;
              case G:
                ne = (z - C) / ht + 2;
                break;
              case z:
                ne = (C - G) / ht + 4;
            }
            ne /= 6;
          }
          return { h: ne, s: De, l: kt };
        }
        function Y(C, G, z) {
          C = Ke(C, 255), G = Ke(G, 255), z = Ke(z, 255);
          var ne, De, $e = Math.max(C, G, z), Oe = Math.min(C, G, z), kt = $e, ht = $e - Oe;
          if (De = $e === 0 ? 0 : ht / $e, $e == Oe) ne = 0;
          else {
            switch ($e) {
              case C:
                ne = (G - z) / ht + (G < z ? 6 : 0);
                break;
              case G:
                ne = (z - C) / ht + 2;
                break;
              case z:
                ne = (C - G) / ht + 4;
            }
            ne /= 6;
          }
          return { h: ne, s: De, v: kt };
        }
        function ve(C, G, z, ne) {
          var De = [Ee(Math.round(C).toString(16)), Ee(Math.round(G).toString(16)), Ee(Math.round(z).toString(16))];
          return ne && De[0].charAt(0) == De[0].charAt(1) && De[1].charAt(0) == De[1].charAt(1) && De[2].charAt(0) == De[2].charAt(1) ? De[0].charAt(0) + De[1].charAt(0) + De[2].charAt(0) : De.join("");
        }
        function te(C, G, z, ne) {
          return [Ee(Xe(ne)), Ee(Math.round(C).toString(16)), Ee(Math.round(G).toString(16)), Ee(Math.round(z).toString(16))].join("");
        }
        function xe(C, G) {
          G = G === 0 ? 0 : G || 10;
          var z = q(C).toHsl();
          return z.s -= G / 100, z.s = W(z.s), q(z);
        }
        function oe(C, G) {
          G = G === 0 ? 0 : G || 10;
          var z = q(C).toHsl();
          return z.s += G / 100, z.s = W(z.s), q(z);
        }
        function ie(C) {
          return q(C).desaturate(100);
        }
        function lt(C, G) {
          G = G === 0 ? 0 : G || 10;
          var z = q(C).toHsl();
          return z.l += G / 100, z.l = W(z.l), q(z);
        }
        function at(C, G) {
          G = G === 0 ? 0 : G || 10;
          var z = q(C).toRgb();
          return z.r = Math.max(0, Math.min(255, z.r - Math.round(-G / 100 * 255))), z.g = Math.max(0, Math.min(255, z.g - Math.round(-G / 100 * 255))), z.b = Math.max(0, Math.min(255, z.b - Math.round(-G / 100 * 255))), q(z);
        }
        function qe(C, G) {
          G = G === 0 ? 0 : G || 10;
          var z = q(C).toHsl();
          return z.l -= G / 100, z.l = W(z.l), q(z);
        }
        function ut(C, G) {
          var z = q(C).toHsl(), ne = (z.h + G) % 360;
          return z.h = ne < 0 ? 360 + ne : ne, q(z);
        }
        function Ot(C) {
          var G = q(C).toHsl();
          return G.h = (G.h + 180) % 360, q(G);
        }
        function Le(C, G) {
          if (isNaN(G) || G <= 0) throw new Error("Argument to polyad must be a positive number");
          for (var z = q(C).toHsl(), ne = [q(C)], De = 360 / G, $e = 1; $e < G; $e++) ne.push(q({ h: (z.h + $e * De) % 360, s: z.s, l: z.l }));
          return ne;
        }
        function Ct(C) {
          var G = q(C).toHsl(), z = G.h;
          return [q(C), q({ h: (z + 72) % 360, s: G.s, l: G.l }), q({ h: (z + 216) % 360, s: G.s, l: G.l })];
        }
        function Ne(C, G, z) {
          G = G || 6, z = z || 30;
          var ne = q(C).toHsl(), De = 360 / z, $e = [q(C)];
          for (ne.h = (ne.h - (De * G >> 1) + 720) % 360; --G; ) ne.h = (ne.h + De) % 360, $e.push(q(ne));
          return $e;
        }
        function Pt(C, G) {
          G = G || 6;
          for (var z = q(C).toHsv(), ne = z.h, De = z.s, $e = z.v, Oe = [], kt = 1 / G; G--; ) Oe.push(q({ h: ne, s: De, v: $e })), $e = ($e + kt) % 1;
          return Oe;
        }
        q.prototype = { isDark: function() {
          return this.getBrightness() < 128;
        }, isLight: function() {
          return !this.isDark();
        }, isValid: function() {
          return this._ok;
        }, getOriginalInput: function() {
          return this._originalInput;
        }, getFormat: function() {
          return this._format;
        }, getAlpha: function() {
          return this._a;
        }, getBrightness: function() {
          var C = this.toRgb();
          return (299 * C.r + 587 * C.g + 114 * C.b) / 1e3;
        }, getLuminance: function() {
          var C, G, z, ne = this.toRgb();
          return C = ne.r / 255, G = ne.g / 255, z = ne.b / 255, 0.2126 * (C <= 0.03928 ? C / 12.92 : Math.pow((C + 0.055) / 1.055, 2.4)) + 0.7152 * (G <= 0.03928 ? G / 12.92 : Math.pow((G + 0.055) / 1.055, 2.4)) + 0.0722 * (z <= 0.03928 ? z / 12.92 : Math.pow((z + 0.055) / 1.055, 2.4));
        }, setAlpha: function(C) {
          return this._a = ft(C), this._roundA = Math.round(100 * this._a) / 100, this;
        }, toHsv: function() {
          var C = Y(this._r, this._g, this._b);
          return { h: 360 * C.h, s: C.s, v: C.v, a: this._a };
        }, toHsvString: function() {
          var C = Y(this._r, this._g, this._b), G = Math.round(360 * C.h), z = Math.round(100 * C.s), ne = Math.round(100 * C.v);
          return this._a == 1 ? "hsv(" + G + ", " + z + "%, " + ne + "%)" : "hsva(" + G + ", " + z + "%, " + ne + "%, " + this._roundA + ")";
        }, toHsl: function() {
          var C = Se(this._r, this._g, this._b);
          return { h: 360 * C.h, s: C.s, l: C.l, a: this._a };
        }, toHslString: function() {
          var C = Se(this._r, this._g, this._b), G = Math.round(360 * C.h), z = Math.round(100 * C.s), ne = Math.round(100 * C.l);
          return this._a == 1 ? "hsl(" + G + ", " + z + "%, " + ne + "%)" : "hsla(" + G + ", " + z + "%, " + ne + "%, " + this._roundA + ")";
        }, toHex: function(C) {
          return ve(this._r, this._g, this._b, C);
        }, toHexString: function(C) {
          return "#" + this.toHex(C);
        }, toHex8: function(C) {
          return function(G, z, ne, De, $e) {
            var Oe = [Ee(Math.round(G).toString(16)), Ee(Math.round(z).toString(16)), Ee(Math.round(ne).toString(16)), Ee(Xe(De))];
            return $e && Oe[0].charAt(0) == Oe[0].charAt(1) && Oe[1].charAt(0) == Oe[1].charAt(1) && Oe[2].charAt(0) == Oe[2].charAt(1) && Oe[3].charAt(0) == Oe[3].charAt(1) ? Oe[0].charAt(0) + Oe[1].charAt(0) + Oe[2].charAt(0) + Oe[3].charAt(0) : Oe.join("");
          }(this._r, this._g, this._b, this._a, C);
        }, toHex8String: function(C) {
          return "#" + this.toHex8(C);
        }, toRgb: function() {
          return { r: Math.round(this._r), g: Math.round(this._g), b: Math.round(this._b), a: this._a };
        }, toRgbString: function() {
          return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
        }, toPercentageRgb: function() {
          return { r: Math.round(100 * Ke(this._r, 255)) + "%", g: Math.round(100 * Ke(this._g, 255)) + "%", b: Math.round(100 * Ke(this._b, 255)) + "%", a: this._a };
        }, toPercentageRgbString: function() {
          return this._a == 1 ? "rgb(" + Math.round(100 * Ke(this._r, 255)) + "%, " + Math.round(100 * Ke(this._g, 255)) + "%, " + Math.round(100 * Ke(this._b, 255)) + "%)" : "rgba(" + Math.round(100 * Ke(this._r, 255)) + "%, " + Math.round(100 * Ke(this._g, 255)) + "%, " + Math.round(100 * Ke(this._b, 255)) + "%, " + this._roundA + ")";
        }, toName: function() {
          return this._a === 0 ? "transparent" : !(this._a < 1) && (mt[ve(this._r, this._g, this._b, !0)] || !1);
        }, toFilter: function(C) {
          var G = "#" + te(this._r, this._g, this._b, this._a), z = G, ne = this._gradientType ? "GradientType = 1, " : "";
          if (C) {
            var De = q(C);
            z = "#" + te(De._r, De._g, De._b, De._a);
          }
          return "progid:DXImageTransform.Microsoft.gradient(" + ne + "startColorstr=" + G + ",endColorstr=" + z + ")";
        }, toString: function(C) {
          var G = !!C;
          C = C || this._format;
          var z = !1, ne = this._a < 1 && this._a >= 0;
          return G || !ne || C !== "hex" && C !== "hex6" && C !== "hex3" && C !== "hex4" && C !== "hex8" && C !== "name" ? (C === "rgb" && (z = this.toRgbString()), C === "prgb" && (z = this.toPercentageRgbString()), C !== "hex" && C !== "hex6" || (z = this.toHexString()), C === "hex3" && (z = this.toHexString(!0)), C === "hex4" && (z = this.toHex8String(!0)), C === "hex8" && (z = this.toHex8String()), C === "name" && (z = this.toName()), C === "hsl" && (z = this.toHslString()), C === "hsv" && (z = this.toHsvString()), z || this.toHexString()) : C === "name" && this._a === 0 ? this.toName() : this.toRgbString();
        }, clone: function() {
          return q(this.toString());
        }, _applyModification: function(C, G) {
          var z = C.apply(null, [this].concat([].slice.call(G)));
          return this._r = z._r, this._g = z._g, this._b = z._b, this.setAlpha(z._a), this;
        }, lighten: function() {
          return this._applyModification(lt, arguments);
        }, brighten: function() {
          return this._applyModification(at, arguments);
        }, darken: function() {
          return this._applyModification(qe, arguments);
        }, desaturate: function() {
          return this._applyModification(xe, arguments);
        }, saturate: function() {
          return this._applyModification(oe, arguments);
        }, greyscale: function() {
          return this._applyModification(ie, arguments);
        }, spin: function() {
          return this._applyModification(ut, arguments);
        }, _applyCombination: function(C, G) {
          return C.apply(null, [this].concat([].slice.call(G)));
        }, analogous: function() {
          return this._applyCombination(Ne, arguments);
        }, complement: function() {
          return this._applyCombination(Ot, arguments);
        }, monochromatic: function() {
          return this._applyCombination(Pt, arguments);
        }, splitcomplement: function() {
          return this._applyCombination(Ct, arguments);
        }, triad: function() {
          return this._applyCombination(Le, [3]);
        }, tetrad: function() {
          return this._applyCombination(Le, [4]);
        } }, q.fromRatio = function(C, G) {
          if (B(C) == "object") {
            var z = {};
            for (var ne in C) C.hasOwnProperty(ne) && (z[ne] = ne === "a" ? C[ne] : Re(C[ne]));
            C = z;
          }
          return q(C, G);
        }, q.equals = function(C, G) {
          return !(!C || !G) && q(C).toRgbString() == q(G).toRgbString();
        }, q.random = function() {
          return q.fromRatio({ r: Math.random(), g: Math.random(), b: Math.random() });
        }, q.mix = function(C, G, z) {
          z = z === 0 ? 0 : z || 50;
          var ne = q(C).toRgb(), De = q(G).toRgb(), $e = z / 100;
          return q({ r: (De.r - ne.r) * $e + ne.r, g: (De.g - ne.g) * $e + ne.g, b: (De.b - ne.b) * $e + ne.b, a: (De.a - ne.a) * $e + ne.a });
        }, q.readability = function(C, G) {
          var z = q(C), ne = q(G);
          return (Math.max(z.getLuminance(), ne.getLuminance()) + 0.05) / (Math.min(z.getLuminance(), ne.getLuminance()) + 0.05);
        }, q.isReadable = function(C, G, z) {
          var ne, De, $e, Oe, kt, ht = q.readability(C, G);
          switch (De = !1, ($e = z, (Oe = (($e = $e || { level: "AA", size: "small" }).level || "AA").toUpperCase()) !== "AA" && Oe !== "AAA" && (Oe = "AA"), (kt = ($e.size || "small").toLowerCase()) !== "small" && kt !== "large" && (kt = "small"), ne = { level: Oe, size: kt }).level + ne.size) {
            case "AAsmall":
            case "AAAlarge":
              De = ht >= 4.5;
              break;
            case "AAlarge":
              De = ht >= 3;
              break;
            case "AAAsmall":
              De = ht >= 7;
          }
          return De;
        }, q.mostReadable = function(C, G, z) {
          var ne, De, $e, Oe, kt = null, ht = 0;
          De = (z = z || {}).includeFallbackColors, $e = z.level, Oe = z.size;
          for (var _e = 0; _e < G.length; _e++) (ne = q.readability(C, G[_e])) > ht && (ht = ne, kt = q(G[_e]));
          return q.isReadable(C, kt, { level: $e, size: Oe }) || !De ? kt : (z.includeFallbackColors = !1, q.mostReadable(C, ["#fff", "#000"], z));
        };
        var _t = q.names = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", burntsienna: "ea7e5d", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "663399", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" }, mt = q.hexNames = function(C) {
          var G = {};
          for (var z in C) C.hasOwnProperty(z) && (G[C[z]] = z);
          return G;
        }(_t);
        function ft(C) {
          return C = parseFloat(C), (isNaN(C) || C < 0 || C > 1) && (C = 1), C;
        }
        function Ke(C, G) {
          (function(ne) {
            return typeof ne == "string" && ne.indexOf(".") != -1 && parseFloat(ne) === 1;
          })(C) && (C = "100%");
          var z = function(ne) {
            return typeof ne == "string" && ne.indexOf("%") != -1;
          }(C);
          return C = Math.min(G, Math.max(0, parseFloat(C))), z && (C = parseInt(C * G, 10) / 100), Math.abs(C - G) < 1e-6 ? 1 : C % G / parseFloat(G);
        }
        function W(C) {
          return Math.min(1, Math.max(0, C));
        }
        function ae(C) {
          return parseInt(C, 16);
        }
        function Ee(C) {
          return C.length == 1 ? "0" + C : "" + C;
        }
        function Re(C) {
          return C <= 1 && (C = 100 * C + "%"), C;
        }
        function Xe(C) {
          return Math.round(255 * parseFloat(C)).toString(16);
        }
        function et(C) {
          return ae(C) / 255;
        }
        var Ve, Rt, Mt, Pe = (Rt = "[\\s|\\(]+(" + (Ve = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + Ve + ")[,|\\s]+(" + Ve + ")\\s*\\)?", Mt = "[\\s|\\(]+(" + Ve + ")[,|\\s]+(" + Ve + ")[,|\\s]+(" + Ve + ")[,|\\s]+(" + Ve + ")\\s*\\)?", { CSS_UNIT: new RegExp(Ve), rgb: new RegExp("rgb" + Rt), rgba: new RegExp("rgba" + Mt), hsl: new RegExp("hsl" + Rt), hsla: new RegExp("hsla" + Mt), hsv: new RegExp("hsv" + Rt), hsva: new RegExp("hsva" + Mt), hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ });
        function Vt(C) {
          return !!Pe.CSS_UNIT.exec(C);
        }
        return q;
      }();
    } }, M = {};
    function R(U) {
      var B = M[U];
      if (B !== void 0) return B.exports;
      var me = M[U] = { exports: {} };
      return x[U].call(me.exports, me, me.exports, R), me.exports;
    }
    var V = {};
    (() => {
      var U = V;
      Object.defineProperty(U, "__esModule", { value: !0 }), U.createTheme = U.Palette = U.Color = void 0;
      var B = R(2317);
      Object.defineProperty(U, "Color", { enumerable: !0, get: function() {
        return B.Color;
      } });
      var me = R(5939);
      Object.defineProperty(U, "Palette", { enumerable: !0, get: function() {
        return me.Palette;
      } });
      var ge = R(6893);
      Object.defineProperty(U, "createTheme", { enumerable: !0, get: function() {
        return ge.createTheme;
      } });
    })();
    var J = y;
    for (var X in V) J[X] = V[X];
    V.__esModule && Object.defineProperty(J, "__esModule", { value: !0 });
  }, 877: () => {
  }, 67: () => {
  } }, o = {};
  function c(b) {
    var y = o[b];
    if (y !== void 0) return y.exports;
    var x = o[b] = { exports: {} };
    return f[b](x, x.exports, c), x.exports;
  }
  c.n = (b) => {
    var y = b && b.__esModule ? () => b.default : () => b;
    return c.d(y, { a: y }), y;
  }, c.d = (b, y) => {
    for (var x in y) c.o(y, x) && !c.o(b, x) && Object.defineProperty(b, x, { enumerable: !0, get: y[x] });
  }, c.o = (b, y) => Object.prototype.hasOwnProperty.call(b, y), c.r = (b) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(b, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(b, "__esModule", { value: !0 });
  };
  var d = {};
  (() => {
    var ms, ws;
    c.r(d), c.d(d, { AppManifestType: () => X, BookmarkItemContextMenuOptionType: () => oe, BrowserButtonType: () => lt, ColorSchemeOptionType: () => ve, CustomActionCallerType: () => ut, Dock: () => B, EnterpriseMainContextMenuOptionType: () => xe, GlobalContextMenuOptionType: () => Y, PageChangeEventType: () => Se, PageTabContextMenuOptionType: () => te, PanelPosition: () => q, SUPPORTED_LANGUAGES: () => Ot, SaveButtonContextMenuOptionType: () => at, SaveModalType: () => Le, ViewTabMenuOptionType: () => ie, WindowType: () => qe, getCurrentSync: () => g, init: () => zu, wrapSync: () => h });
    var b = {};
    c.r(b), c.d(b, { createNamespacedLocalStorage: () => sa, getItem: () => va, removeItem: () => bo, setItem: () => Jn });
    var y, x, M, R, V, J, X, U, B = {};
    c.r(B), c.d(B, { init: () => mr }), function(e) {
      e.Fetching = "fetching", e.Fetched = "fetched", e.Complete = "complete";
    }(y || (y = {})), function(e) {
      e.UserAction = "user-action", e.FocusChange = "focus-change", e.Reload = "reload";
    }(x || (x = {})), function(e) {
      e.Active = "active", e.Default = "default";
    }(M || (M = {})), function(e) {
      e.Suggestion = "suggestion";
    }(R || (R = {})), function(e) {
      e.Contact = "Contact", e.Custom = "Custom", e.List = "List", e.Plain = "Plain", e.SimpleText = "SimpleText", e.Loading = "Loading", e.Error = "Error";
    }(V || (V = {})), function(e) {
      e.MultiSelect = "MultiSelect";
    }(J || (J = {})), function(e) {
      e.Snapshot = "snapshot", e.Manifest = "manifest", e.View = "view", e.External = "external";
    }(X || (X = {})), function(e) {
      e.LandingPage = "landingPage", e.AppGrid = "appGrid";
    }(U || (U = {}));
    var me, ge, q, Se, Y, ve, te, xe, oe, ie, lt, at, qe, ut;
    (function(e) {
      e.Primary = "primary", e.Secondary = "secondary", e.TextOnly = "textOnly";
    })(me || (me = {})), function(e) {
      e.ActionButton = "ActionButton", e.DropdownButton = "DropdownButton";
    }(ge || (ge = {})), function(e) {
      e.Left = "Left", e.Right = "Right", e.Top = "Top", e.Bottom = "Bottom";
    }(q || (q = {})), function(e) {
      e.UrlChange = "URL_CHANGE", e.ViewAdded = "VIEW_ADDED", e.ViewRemoved = "VIEW_REMOVED", e.PageContextAdded = "PAGE_CONTEXT_ADDED", e.PageContextRemoved = "PAGE_CONTEXT_REMOVED";
    }(Se || (Se = {})), function(e) {
      e.NewWindow = "NewWindow", e.NewPage = "NewPage", e.SavePage = "SavePage", e.SavePageAs = "SavePageAs", e.Print = "Print", e.PrintAll = "PrintAll", e.PrintScreen = "PrintScreen", e.CloseWindow = "CloseWindow", e.RestoreChanges = "RestoreChanges", e.SaveWorkspace = "SaveWorkspace", e.SaveWorkspaceAs = "SaveWorkspaceAs", e.RenameWorkspace = "RenameWorkspace", e.SwitchWorkspace = "SwitchWorkspace", e.DeleteWorkspace = "DeleteWorkspace", e.Downloads = "Downloads", e.OpenStorefront = "OpenStorefront", e.ManageDesktopSignals = "ManageDesktopSignals", e.Appearance = "Appearance", e.Quit = "Quit", e.Custom = "Custom";
    }(Y || (Y = {})), function(e) {
      e.Light = "light", e.Dark = "dark", e.System = "system";
    }(ve || (ve = {})), function(e) {
      e.Close = "Close", e.Duplicate = "Duplicate", e.Rename = "Rename", e.Save = "Save", e.SaveAs = "Save As", e.NewPage = "New Page", e.DeletePage = "Delete Page", e.SaveWorkspaceAs = "SaveWorkspaceAs", e.Refresh = "Refresh", e.CloseOthers = "Close others", e.Delete = "Delete", e.Print = "Print", e.PrintAll = "PrintAll", e.PrintScreen = "PrintScreen", e.ManageDesktopSignals = "ManageDesktopSignals", e.AddToChannel = "AddToChannel", e.Custom = "Custom";
    }(te || (te = {})), function(e) {
      e.Lock = "Lock", e.ShowHideTabs = "ShowHideTabs", e.AddToChanel = "AddToChannel", e.ManageDesktopSignals = "ManageDesktopSignals", e.Print = "Print", e.Pin = "Pin";
    }(xe || (xe = {})), function(e) {
      e.EditName = "Edit Name", e.Move = "Move", e.Delete = "Delete";
    }(oe || (oe = {})), function(e) {
      e.NewView = "NewView", e.DuplicateViews = "DuplicateView", e.OpenWithDefaultBrowser = "OpenWithDefaultBrowser", e.ReloadViews = "ReloadTab", e.CloseViews = "CloseTab", e.AddToChannel = "AddToChannel", e.RemoveFromChannel = "RemoveFromChannel", e.Back = "Back", e.Forward = "Forward", e.Print = "Print", e.PrintAll = "PrintAll", e.PrintScreen = "PrintScreen", e.Custom = "Custom";
    }(ie || (ie = {})), function(e) {
      e.ShowHideTabs = "ShowHideTabs", e.ColorLinking = "ColorLinking", e.PresetLayouts = "PresetLayouts", e.LockUnlockPage = "LockUnlockPage", e.SaveMenu = "SaveMenu", e.SavePage = "SavePage", e.Minimise = "Minimise", e.Maximise = "Maximise", e.Close = "Close", e.Custom = "Custom";
    }(lt || (lt = {})), function(e) {
      e.SavePage = "SavePage", e.SaveWorkspace = "SaveWorkspace", e.SavePageAs = "SavePageAs", e.SaveWorkspaceAs = "SaveWorkspaceAs", e.Custom = "Custom";
    }(at || (at = {})), function(e) {
      e.Browser = "browser", e.Platform = "platform";
    }(qe || (qe = {})), function(e) {
      e.CustomButton = "CustomButton", e.StoreCustomButton = "StoreCustomButton", e.CustomDropdownItem = "CustomDropdownItem", e.GlobalContextMenu = "GlobalContextMenu", e.ViewTabContextMenu = "ViewTabContextMenu", e.PageTabContextMenu = "PageTabContextMenu", e.SaveButtonContextMenu = "SaveButtonContextMenu", e.API = "API";
    }(ut || (ut = {}));
    const Ot = ["en-US", "ja-JP", "zh-CN", "ko-KR", "ru-RU", "de-DE", "zh-Hant"];
    var Le, Ct;
    (function(e) {
      e.SAVE_PAGE = "SAVE_PAGE", e.SAVE_WORKSPACE = "SAVE_WORKSPACE", e.SAVE_PAGE_AS = "SAVE_PAGE_AS", e.SAVE_WORKSPACE_AS = "SAVE_WORKSPACE_AS", e.RENAME_PAGE = "RENAME_PAGE", e.RENAME_WORKSPACE = "RENAME_WORKSPACE";
    })(Le || (Le = {})), function(e) {
      e.Local = "local", e.Dev = "dev", e.Staging = "staging", e.Prod = "prod";
    }(Ct || (Ct = {}));
    const Ne = typeof window < "u" && typeof fin < "u", Pt = typeof window < "u", _t = Pt && typeof indexedDB < "u", mt = Pt ? window.origin : Ct.Local, ft = Ne && fin.me.uuid, Ke = Ne && fin.me.name, W = Ne && fin.me.entityType, ae = (Ct.Local, Ct.Dev, Ct.Staging, Ct.Prod === "prod"), Ee = (e) => e.startsWith("http://") || e.startsWith("https://") ? e : mt + e, Re = Ee("https://workspace.openfin.co/workspace/22.3.29"), Xe = Ee("https://workspace.openfin.co/workspace/22.3.29"), et = (typeof WORKSPACE_DOCS_PLATFORM_URL < "u" && Ee(WORKSPACE_DOCS_PLATFORM_URL), typeof WORKSPACE_DOCS_CLIENT_URL < "u" && Ee(WORKSPACE_DOCS_CLIENT_URL), "42.138.103.4"), Ve = "22.3.29";
    typeof WORKSPACE_BUILD_SHA < "u" && WORKSPACE_BUILD_SHA;
    var Rt, Mt;
    (function(e) {
      e.Home = "/home/", e.HomeSearch = "/home/?deeplink=search", e.HomePagesRename = "/home/pages/rename/", e.Dock = "/dock/", e.Docs = "/provider/docs/", e.Storefront = "/storefront/", e.DeprecatedAlert = "/provider/deprecated-alert/", e.Analytics = "/provider/analytics/", e.Provider = "/provider/";
    })(Rt || (Rt = {})), function(e) {
      e.Browser = "/browser/", e.BrowserPopupMenu = "/popup-menu/", e.BrowserPopupMenuSaveModal = "/popup-menu/save-modal/", e.BrowserPopupMenuLayouts = "/popup-menu/layouts/layouts/", e.BrowserPopupMenuColorLinking = "/popup-menu/color-linking/color-linking/", e.BrowserIndicator = "/indicator/", e.BrowserPopupMenuAddressSearchResultsView = "/popup-menu/address-search-results-view/", e.ResponseModal = "/popup-menu/response-modal/", e.CloseConfirmationModal = "/popup-menu/close-confirmation-modal/", e.EnterpriseBrowser = "/enterprise/", e.EnterpriseLandingPage = "/enterprise/landing/", e.EnterpriseContextMenu = "/context-menu/", e.EnterpriseBookmarkDialog = "/bookmark-dialog/", e.EnterpriseAboutPage = "/popup-menu/about/", e.DropdownMenu = "/dropdown-menu/", e.EnterpriseDock = "/dock/", e.ZoomControlsDialog = "/zoom-controls-dialog/", e.DesktopSignalsModal = "/popup-menu/desktop-signals-modal/";
    }(Mt || (Mt = {}));
    const Pe = { ...Rt, ...Mt };
    var Vt;
    (function(e) {
      e.Search = "search";
    })(Vt || (Vt = {}));
    const C = Pe;
    async function G() {
      const e = "getManifestOverrides", { manifest: n, initialOptions: r } = await fin.Application.getCurrentSync().getInfo();
      return n != null && n.platform.workspace || n != null && n.platform.home || r != null && r.workspace || r != null && r.home || console.warn(`${e}: Missing Home development manifest overrides, using Desktop Owner Settings.`), n != null && n.platform.workspace ? (console.debug(`${e}: returning settings from manifest.workspace: ${JSON.stringify(n == null ? void 0 : n.platform.workspace)}`), n == null ? void 0 : n.platform.workspace) : n != null && n.platform.home ? (console.debug(`${e}: returning settings from manifest.home: ${JSON.stringify(n == null ? void 0 : n.platform.home)}`), n == null ? void 0 : n.platform.home) : r != null && r.workspace ? (console.debug(`${e}: returning settings from initialOptions.workspace: ${JSON.stringify(r == null ? void 0 : r.workspace)}`), r == null ? void 0 : r.workspace) : r != null && r.home ? (console.debug(`${e}: returning settings from initialOptions.home: ${JSON.stringify(r == null ? void 0 : r.home)}`), r == null ? void 0 : r.home) : {};
    }
    const z = (e) => fin.System.getSystemAppConfig(e);
    async function ne() {
      const e = "getDOSOverrides";
      if (!Ne) return console.warn(`${e}: the fin API was not available, returning no result`), {};
      try {
        let n = await z("workspace").catch((r) => {
          console.warn(`${e}: customConfig entry for SystemApp workspace not available in Desktop Owner Settings. ${r == null ? void 0 : r.message}`);
        });
        return n || (console.debug(`${e}: in the absence of workspace custom config falling back to check for home custom config`), n = await z("home"), console.debug(`${e}: home custom config retrieved`)), console.debug(`${e}: returning DOS settings: ${JSON.stringify(n)}`), n;
      } catch (n) {
        if (!ae) return {};
        if (!(n instanceof Error)) throw n;
        console.warn(`${e}: Missing Workspace Desktop Owner Settings configuration, using defaults. ${n == null ? void 0 : n.message}`);
      }
      return {};
    }
    let De, $e;
    async function Oe() {
      if (De) return De;
      const e = "getOverrides";
      if (!Ne) return Pt && console.warn(`${e}: The Fin API was not available. Returning an empty result.`), {};
      const [n, r] = await Promise.all([ne(), G()]);
      return De = { ...r, ...n, disableRuntimeValidation: r.disableRuntimeValidation || n.disableRuntimeValidation }, console.debug(`${e}: returning final overrides: `, De), De;
    }
    function kt(e) {
      $e = e;
    }
    const ht = (e) => e.replace(/\/$/, "");
    async function _e() {
      const e = (await Oe()).browserBaseUrl;
      if (e) try {
        const n = new URL(e);
        if (n.pathname.endsWith("/")) n.pathname = ht(n.pathname);
        else {
          if (n.pathname === "/workspace") return n.pathname += `/${Ve}`, n.toString();
          console.warn(`@openfin/workspace-platform: browserOverrideBaseUrl must be a valid url, with path: /workspace. Expected <protocol>://<optional subdomain>.<domain>/workspace but got ${e}`);
        }
      } catch {
        console.warn(`@openfin/workspace-platform: browserOverrideBaseUrl must be a valid url. Expected <protocol>://<optional subdomain>.<domain>/workspace but got ${e}`);
      }
      return $e ?? Xe;
    }
    async function fn(e = !1) {
      const n = await _e() + C.Browser;
      return e ? n : ht(n);
    }
    async function Jt(e = !1) {
      const n = await _e() + C.EnterpriseBrowser;
      return e ? n : ht(n);
    }
    async function hn() {
      return await Jt() + "/landing/";
    }
    const Ut = async (e, n = !1) => e ? Jt(n) : fn(n), ze = 56, be = 728, dt = 150, Gt = "dock3", dn = (e) => {
      const n = typeof fin < "u" && fin.me.identity.uuid;
      if (!n) throw new Error("UUID is required to get the Dock3 channel name.");
      return `${n}-dock3`;
    }, rt = { time: async function(e, n) {
      const r = performance.now();
      try {
        const i = await n(), u = performance.now() - r;
        return console.log(`[Perf] ${e}: ${u.toFixed(2)}ms`), i;
      } catch (i) {
        const u = performance.now() - r;
        throw console.log(`[Perf] ${e}: ${u.toFixed(2)}ms (error)`), i;
      }
    }, timeSync: function(e, n) {
      const r = performance.now();
      try {
        const i = n(), u = performance.now() - r;
        return console.log(`[Perf] ${e}: ${u.toFixed(2)}ms`), i;
      } catch (i) {
        const u = performance.now() - r;
        throw console.log(`[Perf] ${e}: ${u.toFixed(2)}ms (error)`), i;
      }
    } };
    var It, $t;
    (function(e) {
      e.Workspace = "openfin-workspace", e.OldWorkspace = "openfin-browser";
    })(It || (It = {})), function(e) {
      e.FinProtocol = "fin-protocol";
    }($t || ($t = {}));
    const Qt = { uuid: ft }, jt = (It.Workspace, (e) => {
      if (!Ne) throw new Error("getApplication cannot be used in a non OpenFin env. Avoid using this during pre-rendering.");
      return fin.Application.wrapSync(e);
    }), Ie = () => jt(Qt);
    var We;
    (function(e) {
      e.Home = "openfin-home", e.Dock = "openfin-dock", e.Storefront = "openfin-storefront", e.HomeInternal = "openfin-home-internal", e.BrowserMenu = "openfin-browser-menu", e.BrowserSaveMenu = "openfin-browser-save-menu", e.DockSaveWorkspaceMenu = "openfin-dock3-save-workspace-menu", e.BrowserIndicator = "openfin-browser-indicator", e.BrowserWindow = "internal-generated-window", e.ClassicWindow = "internal-generated-classic-window", e.EnterpriseContextMenu = "openfin-enterprise-context-menu", e.BrowserAddressSearchPrefix = "openfin-browser-menu-address-search-", e.EnterpriseBookmarkDialogWindow = "openfin-enterprise-bookmark-dialog", e.DropdownMenu = "openfin-enterprise-dropdown-menu", e.DockCompanion = "openfin-dock-companion", e.AICompanionPrefix = "openfin-ai-companion-", e.UpdateVersionModal = "here-update-version-modal", e.ZoomControlsDialog = "here-zoom-controls-dialog", e.AboutPageWindow = "here-about-page", e.DesktopSignalsModal = "here-desktop-signals-modal";
    })(We || (We = {}));
    const cn = (e) => ({ left: (e.left + (e.right ?? e.left + e.width)) / 2, top: (e.top + (e.bottom ?? e.top + e.height)) / 2 }), w = (e, n) => {
      const r = n.width / 2, i = n.height / 2;
      return { left: Math.round(e.left - r), top: Math.round(e.top - i), width: n.width, height: n.height };
    };
    function P(e) {
      if (!Ne) throw new Error("getOFWindow can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");
      return fin.Window.wrapSync(e);
    }
    const ee = { name: Ke, uuid: ft };
    We.Home, It.Workspace, We.Dock, It.Workspace;
    const ye = { name: We.Storefront, uuid: It.Workspace };
    It.Workspace, It.Workspace;
    async function Te(e) {
      const n = P(e);
      await n.getState() === "minimized" && await n.restore(), await n.show(), await n.setAsForeground();
    }
    const Ge = async (e) => {
      var n, r, i;
      try {
        const u = await fin.Window.wrapSync({ name: e.name, uuid: e.uuid ?? fin.me.uuid }).getOptions();
        return (((n = u.workspacePlatform) == null ? void 0 : n.windowType) === "browser" || ((r = u.workspacePlatform) == null ? void 0 : r.windowType) === "enterprise") && ((i = u.workspacePlatform) == null ? void 0 : i.pages);
      } catch (u) {
        return console.warn("isBrowserWindow error: ", u), !1;
      }
    };
    async function je() {
      const e = await fin.Application.getCurrentSync().getChildWindows(), n = await Promise.all(e.map(async (r) => Ge(r.identity)));
      return e.filter((r, i) => n[i]);
    }
    async function wt() {
      return (await fin.Application.getCurrentSync().getChildWindows()).filter((e) => e.identity.name.startsWith(We.BrowserMenu));
    }
    const Ye = (e) => P(e).getInfo().then(() => !0).catch(() => !1), Xt = () => Ye(ye);
    function un(e, n) {
      const r = e.top, i = e.left, u = e.top + e.height, m = e.left + e.width, S = n.monitorRect.top, v = n.monitorRect.left, N = n.monitorRect.bottom, $ = n.monitorRect.right;
      if (r > N || u < S || i > $ || m < v) return 0;
      const Z = Math.max(r, S), K = Math.max(i, v);
      return (Math.min(u, N) - Z) * (Math.min(m, $) - K) / (e.height * e.width);
    }
    async function ra(e) {
      const n = await fin.System.getMonitorInfo();
      return [n.primaryMonitor, ...n.nonPrimaryMonitors].reduce((r, i) => {
        const u = un(e, i);
        return u > r.percentage ? { percentage: u, monitor: i } : r;
      }, { percentage: 0, monitor: n.primaryMonitor }).monitor;
    }
    const Pn = (e, n) => {
      var i, u, m;
      const r = e;
      return r.workspacePlatform || (r.workspacePlatform = {}), r.workspacePlatform._internalDeferShowOptions = { setAsForeground: !!n, deferShowEnabled: !0, autoShow: ((i = r.workspacePlatform) == null ? void 0 : i._internalAutoShow) || ((m = (u = r.workspacePlatform) == null ? void 0 : u._internalDeferShowOptions) == null ? void 0 : m.autoShow) || r.autoShow === void 0 || r.autoShow }, r.autoShow = !1, r;
    };
    var St, Kt;
    (function(e) {
      e.RelativeToParentWindow = "relative-to-parent-window", e.RelativeToMonitor = "relative-to-monitor";
    })(St || (St = {})), function(e) {
      e.Top = "top", e.Below = "below";
    }(Kt || (Kt = {}));
    const lr = async (e) => {
      const n = e && await P(e).getBounds();
      return { left: ((i = (e ? await ra(n) : (await fin.System.getMonitorInfo()).primaryMonitor).availableRect).left + i.right) / 2, top: (i.top + i.bottom) / 2 };
      var i;
    }, ma = async (e, n, r = !1) => {
      let i;
      if (r) i = await lr(n);
      else {
        const S = P(n), v = await S.getBounds();
        i = cn(v);
      }
      const { defaultHeight: u, defaultWidth: m } = e;
      return w(i, { height: u, width: m });
    };
    async function xn(e, n, r = !1) {
      const i = n && await P(n).getState() === "maximized", u = r || i || !n, m = await ma(e, n, u);
      return await (async (S) => {
        const v = await fin.System.getMonitorInfo(), N = [v.primaryMonitor, ...v.nonPrimaryMonitors];
        for (const $ of N) if (un(S, $) === 1) return !1;
        return !0;
      })(m) ? (await P(n).center(), ma(e, n, u)) : (console.warn("Response modal isn't off screen, not centering parent window"), m);
    }
    const Da = () => (e) => e;
    var se = c(847);
    const Cn = (e) => e.replace(/[^\d,]/g, "").split(","), $n = (e) => {
      if (e.length < 2) throw new Error("Invalid color object, cannot convert to HSL.");
      const n = e[0] / 255, r = e[1] / 255, i = e[2] / 255, u = Math.min(n, r, i), m = Math.max(n, r, i), S = m - u;
      let v = 0, N = 0, $ = 0;
      return v = S === 0 ? 0 : m === n ? (r - i) / S % 6 : m === r ? (i - n) / S + 2 : (n - r) / S + 4, v = Math.round(60 * v), v < 0 && (v += 360), $ = (m + u) / 2, N = S == 0 ? 0 : S / (1 - Math.abs(2 * $ - 1)), N = +(100 * N).toFixed(1), $ = +(100 * $).toFixed(1), { hsl: `hsl(${v}, ${N}%, ${$}%)`, hsla: `hsl(${v}, ${N}%, ${$}%, 1)`, hue: v, lightness: $, saturation: N };
    }, kn = (e) => {
      if (!e.includes("#")) throw new Error("Invalid hex value, cannot convert to RGB. Hex value begins with a hashtag.");
      let n = 0, r = 0, i = 0;
      if (e.length === 4) n = `0x${e[1]}${e[1]}`, r = `0x${e[2]}${e[2]}`, i = `0x${e[3]}${e[3]}`;
      else {
        if (e.length !== 7) throw new Error("Invalid hex string length, cannot convert to RGB.");
        n = `0x${e[1]}${e[2]}`, r = `0x${e[3]}${e[4]}`, i = `0x${e[5]}${e[6]}`;
      }
      return [+n, +r, +i];
    }, wa = (e) => {
      const n = e;
      if (n.startsWith("#"))
        return { rgb: kn(n).join(", "), alpha: 1 };
      const r = n.match(/\d{1,3}(\.\d+)?/g);
      if (r) {
        const [i, u, m, S] = r;
        return { rgb: `${i}, ${u}, ${m}`, alpha: S !== void 0 ? parseFloat(S) : 1 };
      }
      return { rgb: kn(e).join(", "), alpha: 1 };
    }, Fr = (e, n = !1) => {
      const r = ((i) => {
        if (!i) throw new Error("Color is not defined");
        const u = i.toLowerCase();
        let m;
        if (u.includes("rgb")) {
          const v = Cn(u);
          v.length > 3 && v.pop(), m = $n(v).hue;
        }
        if (u.includes("#")) {
          const v = kn(u);
          m = $n(v).hue;
        }
        u.includes("hsl") && (m = Cn(u)[0]);
        const S = m == null ? void 0 : m.toString();
        if (!S) throw new Error(`Hue was unable to be extracted from "${u}", check color format. Accepted formats are: rgb(), rgba(), hex, hsl(), and hsla()`);
        return S;
      })(e);
      return n ? { background1: `hsla(${r}, 0%, 100%, 1)`, background2: `hsla(${r}, 67%, 99%, 1)`, background3: `hsla(${r}, 26%, 96%, 1)`, background4: `hsla(${r}, 15%, 94%, 1)`, background5: `hsla(${r}, 10%, 88%, 1)`, background6: `hsla(${r}, 80%, 80%, 1)` } : { background1: `hsla(${r}, 8%, 7%, 1)`, background2: `hsla(${r}, 8%, 13%, 1)`, background3: `hsla(${r}, 9%, 15%, 1)`, background4: `hsla(${r}, 6%, 23%, 1)`, background5: `hsla(${r}, 21%, 28%, 1)`, background6: `hsla(${r}, 5%, 51%, 1)` };
    }, Mn = (e, n) => {
      const r = {};
      return Object.keys(e).forEach((i) => {
        r[i] = n[i] ? n[i] : e[i];
      }), r;
    };
    var Lr = c(877), jn = c.n(Lr), Vr = c(67), dr = c.n(Vr);
    const Bt = { light: { symbol: ((ms = dr()) == null ? void 0 : ms.src) || "" }, dark: { symbol: ((ws = jn()) == null ? void 0 : ws.src) || "" } }, Kn = Pt && document.readyState !== "complete" && new Promise((e) => document.addEventListener("readystatechange", () => {
      document.readyState === "complete" && e();
    }));
    function an(e) {
      let n;
      const r = /* @__PURE__ */ new Set();
      return () => {
        if (!Ne) throw new Error("getChannelClient cannot be used outside an OpenFin env. Avoid using this method during pre-rendering.");
        return n || (console.debug(`connecting to channel provider ${e}`), n = (async () => {
          await Kn;
          const i = { clientAPIVersion: Ve }, u = await fin.InterApplicationBus.Channel.connect(e, { payload: i });
          return u.onDisconnection(async () => {
            r.forEach((m) => m()), r.clear(), console.warn(`disconnected from channel provider ${e}`), n = void 0;
          }), u;
        })().then((i) => (console.debug(`connected to channel provider ${e}`, i), i.addDisconnectionListener = (u) => {
          r.add(u);
        }, i)).catch((i) => {
          throw n = void 0, new Error(`failed to connect to channel provider ${e}: ${i}`);
        })), n;
      };
    }
    var pr, Hn;
    (function(e) {
      e.Fetching = "fetching", e.Fetched = "fetched", e.Complete = "complete";
    })(pr || (pr = {})), function(e) {
      e[e.Initial = 0] = "Initial", e[e.Open = 1] = "Open", e[e.Close = 2] = "Close";
    }(Hn || (Hn = {}));
    const Oa = an("__of_workspace_protocol__"), fr = Oa;
    var de;
    (function(e) {
      e.LaunchApp = "launchApp", e.SavePage = "savePage", e.GetSavedPage = "getSavedPage", e.CreateSavedPage = "createSavedPage", e.UpdateSavedPage = "updateSavedPage", e.DeleteSavedPage = "deleteSavedPage", e.GetSavedPages = "getSavedPages", e.CreateSavedPageInternal = "createSavedPageInternal", e.UpdateSavedPageInternal = "updateSavedPageInternal", e.DeleteSavedPageInternal = "deleteSavedPageInternal", e.UpdatePageForWindow = "updatePageForWindow", e.AttachPagesToWindow = "attachPagesToWindow", e.DetachPagesFromWindow = "detachPagesFromWindow", e.ReorderPagesForWindow = "reorderPagesForWindow", e.SetActivePage = "setActivePage", e.AddPage = "addPage", e.AddDefaultPage = "addDefaultPage", e.GetAllAttachedPages = "getAllAttachedPages", e.GetActivePageIdForWindow = "getActivePageIdForWindow", e.GetPagesForWindow = "getPagesForWindow", e.GetPageForWindow = "getPageForWindow", e.GetSavedPageMetadata = "getSavedPageMetadata", e.GetUniquePageTitle = "getUniquePageTitle", e.GetLastFocusedBrowserWindow = "getLastFocusedBrowserWindow", e.GetPageByViewIdentity = "getPageByViewIdentity", e.GetThemes = "getThemes", e.GetSelectedScheme = "getSelectedScheme", e.SetSelectedScheme = "setSelectedScheme", e.OpenGlobalContextMenuInternal = "openGlobalContextMenuInternal", e.OpenViewTabContextMenuInternal = "openViewTabContextMenuInternal", e.OpenPageTabContextMenuInternal = "openPageTabContextMenuInternal", e.OpenSaveButtonContextMenuInternal = "openSaveButtonContextMenuInternal", e.InvokeCustomActionInternal = "invokeCustomActionInternal", e.RequestQuitPlatformDialogInternal = "requestQuitPlatformDialogInternal", e.GetSavedWorkspace = "getSavedWorkspace", e.CreateSavedWorkspace = "createSavedWorkspace", e.UpdateSavedWorkspace = "updateSavedWorkspace", e.DeleteSavedWorkspace = "deleteSavedWorkspace", e.GetSavedWorkspaces = "getSavedWorkspaces", e.GetSavedWorkspacesMetadata = "getSavedWorkspacesMetadata", e.SaveWorkspace = "saveWorkspace", e.GetCurrentWorkspace = "getCurrentWorkspace", e.ApplyWorkspace = "applyWorkspace", e.RestoreLastSavedWorkspaceInternal = "restoreLastSavedWorkspaceInternal", e.SetActiveWorkspace = "setActiveWorkspace", e.IsBrowserInitialized = "isBrowserInitialized", e.Analytics = "analyticsInternal", e.GetLanguage = "getLanguage", e.GetLanguageResourcesInternal = "getLanguageResourcesInternal", e.SetLanguage = "setLanguage", e.GetDockProviderConfig = "getDockProviderConfig", e.SaveDockProviderConfig = "saveDockProviderConfig", e.HandleSaveModalOnPageClose = "handleSaveModalOnPageClose", e.ShouldPageClose = "shouldPageClose", e.ShouldWindowClose = "shouldWindowClose", e.CopyPage = "copyPage", e.HandlePageChanges = "handlePageChanges", e.MarkUnsavedPagesAsSavedInternal = "markUnsavedPagesAsSavedInternal", e.TrackRemovedTabInternal = "trackRemovedTabInternal", e.RestoreRemovedTabInternal = "restoreRemovedTabInternal", e.TrackVisitedSiteInternal = "trackVisitedSiteInternal", e.GetRecentlyVisitedSitesInternal = "getRecentlyVisitedSitesInternal", e.GetFrequentlyVisitedSitesInternal = "getFrequentlyVisitedSitesInternal", e.SearchSitesInternal = "searchSitesInternal", e.GetSearchProvidersInternal = "getSearchProvidersInternal", e.GetCuratedContentInternal = "getCuratedContentInternal", e.HandleRequestNavigationInternal = "handleRequestNavigationInternal", e.RefreshBookmarksInternal = "refreshBookmarksInternal", e.LaunchBookmarkInternal = "launchBookmarkInternal", e.GetNotificationsConfig = "getNotificationsConfig", e.UpdateDockFavoritesInternal = "updateDockFavoritesInternal", e.UpdateContentMenuInternal = "updateContentMenuInternal", e.LaunchDockEntryInternal = "launchDockEntryInternal", e.SetDockFavoritesOrderInternal = "setDockFavoritesOrderInternal", e.NavigateContentMenuInternal = "navigateContentMenuInternal", e.SetDefaultDockButtonsOrderInternal = "setDefaultDockButtonsOrderInternal", e.GetDockWorkspacesContextMenuInternal = "getDockWorkspacesContextMenuInternal", e.HandleDockWorkspacesMenuResponseInternal = "handleDockWorkspacesMenuResponseInternal", e.RemoveDockFavoriteInternal = "removeDockFavoriteInternal", e.AddDockFavoriteInternal = "addDockFavoriteInternal", e.FocusAndExpandSearchInternal = "focusAndExpandSearchInternal", e.SendUpdateVersionModalResponseInternal = "sendUpdateVersionModalResponseInternal", e.ShowUpdateVersionModalInternal = "showUpdateVersionModalInternal";
    })(de || (de = {}));
    const In = async (e) => fin.Platform.wrapSync(e).getClient(), Wa = async (e) => {
      const n = await In(e), r = "Target is not a Workspace Platform. Target must call WorkspacePlatform.init";
      let i;
      try {
        i = await n.dispatch("isWorkspacePlatform");
      } catch {
        throw new Error(r);
      }
      if (typeof i == "boolean" && i) return console.warn("You are using an older version of the workspace platform. Please update your workspace platform."), i;
      if (typeof i == "object" && i.isWorkspacePlatform) return i;
      throw new Error(r);
    }, Ue = async (e) => (await Wa(e), In(e)), Ze = async (e) => {
      const n = await Wa(e);
      if (typeof n == "object" && (n == null ? void 0 : n.isBrowserInitialized) !== !0) throw new Error("Target is not a Browser-enabled Workspace Platform.");
      return In(e);
    }, ot = "dark", hr = { [se.Palette.brandPrimary]: "#0A76D3", [se.Palette.brandPrimaryActive]: "#0A71C9", [se.Palette.brandPrimaryHover]: "#0B84EB", [se.Palette.brandPrimaryFocused]: se.Color.white, [se.Palette.brandPrimaryText]: se.Color.white, [se.Palette.statusSuccess]: se.Color.functional1, [se.Palette.statusWarning]: se.Color.functional10, [se.Palette.statusCritical]: se.Color.functional7, [se.Palette.statusActive]: se.Color.functional3, [se.Palette.contentBackground1]: "#0A76D3", [se.Palette.contentBackground2]: "#000000", [se.Palette.contentBackground3]: "#000000", [se.Palette.contentBackground4]: "#000000", [se.Palette.contentBackground5]: "#000000", [se.Palette.borderNeutral]: se.Color.silverGray }, Ba = { ...hr, [se.Palette.background1]: se.Color.white, [se.Palette.background2]: se.Color.lightGray1, [se.Palette.background3]: se.Color.lightGray2, [se.Palette.background4]: se.Color.lightGray3, [se.Palette.background5]: se.Color.lightGray4, [se.Palette.background6]: se.Color.lightGray5, [se.Palette.brandSecondary]: se.Color.lightGray4, [se.Palette.brandSecondaryActive]: se.Color.lightGray4Active, [se.Palette.brandSecondaryHover]: se.Color.lightGray4Hover, [se.Palette.brandSecondaryFocused]: se.Color.darkGray5, [se.Palette.brandSecondaryText]: se.Color.darkGray5, [se.Palette.inputBackground]: se.Color.lightGray3, [se.Palette.inputColor]: se.Color.darkGray5, [se.Palette.inputPlaceholder]: se.Color.darkGray2, [se.Palette.inputDisabled]: se.Color.neutralGray, [se.Palette.inputFocused]: se.Color.lightGray5, [se.Palette.inputBorder]: se.Color.neutralGray, [se.Palette.textDefault]: se.Color.darkGray5, [se.Palette.textHelp]: se.Color.darkGray3, [se.Palette.textInactive]: se.Color.neutralGray }, Gn = { ...hr, [se.Palette.background1]: se.Color.darkGray6, [se.Palette.background2]: se.Color.darkGray5, [se.Palette.background3]: se.Color.darkGray4, [se.Palette.background4]: se.Color.darkGray3, [se.Palette.background5]: se.Color.darkGray2, [se.Palette.background6]: se.Color.darkGray1, [se.Palette.brandSecondary]: se.Color.darkGray2, [se.Palette.brandSecondaryActive]: se.Color.darkGray2Active, [se.Palette.brandSecondaryHover]: se.Color.darkGray2Hover, [se.Palette.brandSecondaryFocused]: se.Color.white, [se.Palette.brandSecondaryText]: se.Color.white, [se.Palette.inputBackground]: se.Color.darkGray1, [se.Palette.inputColor]: se.Color.white, [se.Palette.inputPlaceholder]: se.Color.lightGray5, [se.Palette.inputDisabled]: se.Color.neutralGray, [se.Palette.inputFocused]: se.Color.lightGray5, [se.Palette.inputBorder]: se.Color.neutralGray, [se.Palette.textDefault]: se.Color.white, [se.Palette.textHelp]: se.Color.lightGray5, [se.Palette.textInactive]: se.Color.neutralGray }, zn = [{ label: "OpenFin Default Light and Dark Theme", palettes: { light: { ...Ba, backgroundPrimary: se.Color.darkGray5 }, dark: { ...Gn, backgroundPrimary: se.Color.darkGray5 } } }], ya = (e) => {
      const { background: n, foreground: r } = e;
      return { background: n, foreground: r ?? "#FFFFFF" };
    }, gr = (e, n) => {
      var r, i, u;
      return { icons: { symbol: ((u = (i = (r = e.brand) == null ? void 0 : r.icons) == null ? void 0 : i[n]) == null ? void 0 : u.symbol) || Bt[n].symbol } };
    }, Ur = (e) => {
      const { light: n, dark: r } = "palettes" in e ? e.palettes : { light: e.palette, dark: e.palette }, i = Mn(Gn, r), u = Mn(Ba, n), m = ((Z, K) => {
        const le = { ...Z }, pe = { ...K };
        let Me = K.backgroundPrimary ? Fr(K.backgroundPrimary, !0) : {}, He = Z.backgroundPrimary ? Fr(Z.backgroundPrimary) : {};
        return Me = { ...Me, ...pe }, He = { ...He, ...le }, { light: { ...K, ...Me }, dark: { ...Z, ...He } };
      })(r, n), S = { ...(0, se.createTheme)({ ...i, ...m == null ? void 0 : m.dark }), brand: gr(e, "dark") }, v = { ...(0, se.createTheme)({ ...u, ...m == null ? void 0 : m.light }), brand: gr(e, "light") }, { light: N, dark: $ } = ((Z) => {
        const K = Object.keys(Z.notificationIndicatorColors ?? {});
        if (K != null && K.length) {
          const le = {}, pe = {};
          return K.forEach((Me) => {
            const He = Z.notificationIndicatorColors[Me];
            "background" in He ? (le[Me] = ya(He), pe[Me] = ya(He)) : (le[Me] = ya(He.dark ?? He.light), pe[Me] = ya(He.light ?? He.dark));
          }), { light: pe, dark: le };
        }
        return { light: null, dark: null };
      })(e);
      return S.notificationIndicatorColors = $, v.notificationIndicatorColors = N, { dark: S, light: v };
    }, xt = async (e) => {
      const { themes: n, selectedScheme: r } = await (async (m) => {
        var v, N, $;
        const S = ($ = (N = (v = fin == null ? void 0 : fin.__internal_) == null ? void 0 : v.initialOptions) == null ? void 0 : N.workspacePlatform) == null ? void 0 : $._themeData;
        return !S || m.uuid !== ee.uuid ? (S || console.info("Unable to find preloaded theme data, fetching from platform provider."), { themes: await h(m).Theme.getThemes(), selectedScheme: await h(m).Theme.getSelectedScheme() }) : S;
      })(e);
      var i, u;
      return (i = n != null && n.length ? n : zn, u = r, i.map((m) => {
        const S = "palettes" in m ? m.default : ot, { light: v, dark: N } = Ur(m);
        return { label: m.label, logoUrl: m.logoUrl, theme: { dark: N, light: v }, defaultScheme: u ?? S };
      }))[0];
    }, oa = async (e) => {
      const n = await Ue(e || fin.me.identity), r = await n.dispatch(de.GetSelectedScheme, void 0);
      return r === ve.System ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : r;
    }, ba = async (e, n) => {
      var m, S;
      const r = await xt(fin.me.identity), i = await oa(fin.me.identity) === ve.Dark, u = r == null ? void 0 : r.theme;
      return ((S = (m = u == null ? void 0 : u[i ? ve.Dark : ve.Light]) == null ? void 0 : m.palette) == null ? void 0 : S[e]) || n;
    };
    function ia(e) {
      return function(n, r) {
        const i = {};
        for (const u of r) u in n && (i[u] = n[u]);
        return i;
      }(e, Da()(["defaultLeft", "defaultTop", "defaultCentered", "saveWindowState", "taskbarIconGroup"]));
    }
    function Na() {
      let e, n;
      return { promise: new Promise((r, i) => {
        e = r, n = i;
      }), resolve: e, reject: n };
    }
    const qn = gl, sa = (e) => ({ setItem: (n, r) => {
      localStorage.setItem(`${e}-${n}`, r);
    }, getItem: (n) => localStorage.getItem(`${e}-${n}`), removeItem: (n) => localStorage.removeItem(`${e}-${n}`) }), Fa = sa(ft), Jn = Fa.setItem, va = Fa.getItem, bo = Fa.removeItem;
    var st;
    (function(e) {
      e.CurrentWorkspaceId = "currentWorkspaceId", e.LastFocusedBrowserWindow = "lastFocusedBrowserWindow", e.MachineName = "machineName", e.NewTabPageLayout = "NewTabPageLayout", e.NewTabPageSort = "NewTabPageSort", e.DockPosition = "DockPosition", e.SelectedColorScheme = "SelectedColorScheme", e.ThemePaletteSheet = "ThemePaletteSheet", e.HasMovedStore = "HasMovedStore", e.PageDragState = "BrowserPageDragState", e.ThemePaletteDefaultScheme = "ThemePaletteDefaultScheme";
    })(st || (st = {}));
    const en = st, ka = (e) => e + "-" + fin.me.uuid, $r = (e, n) => {
      const r = _t && Ne && new qn.Dexie(e);
      return r && r.version(0.1).stores({ [n]: "" }), r;
    }, ln = (e, n) => {
      const r = $r(ka(e), n), i = $r(e, n);
      if (!r || !i) throw new Error("Unable to migrate store - IndexDB not supported");
      return (async (u, m, S) => {
        if (!u[S]) return void console.warn(`Legacy store ${S} not found, skipping migration`);
        const v = va(en.HasMovedStore), N = v ? JSON.parse(v) : {};
        if (N && N[S]) return;
        N[S] = !0, Jn(en.HasMovedStore, JSON.stringify(N));
        const $ = await u[S].toArray();
        await m[S].bulkPut($);
      })(i, r, e), r;
    }, On = "dock3-provider-config", An = _t && Ne && new qn.Dexie(ka("dock3-provider-config"));
    An && An.version(0.1).stores({ [On]: "" });
    var rn, gn, En, Wt, Yt = function(e, n, r, i, u) {
      if (typeof n == "function" ? e !== n || !0 : !n.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return n.set(e, r), r;
    }, Ft = function(e, n, r, i) {
      if (typeof n == "function" ? e !== n || !i : !n.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return r === "m" ? i : r === "a" ? i.call(e) : i ? i.value : n.get(e);
    };
    class mn {
      static getOverrideConstructor(...n) {
        return class extends mn {
          constructor() {
            super(...n);
          }
        };
      }
      constructor(n, r) {
        if (rn.set(this, void 0), gn.set(this, void 0), En.set(this, null), Wt.set(this, Na()), mn.instance) throw new Error("Dock3Provider has already been initialized.");
        mn.instance = this, Yt(this, rn, n), Yt(this, gn, r), this.registerChannelActions();
      }
      async launchEntry(n) {
      }
      get ready() {
        return Ft(this, Wt, "f").promise;
      }
      async bookmarkContentMenuEntry(n) {
      }
      get config() {
        return Ft(this, rn, "f");
      }
      set config(n) {
        Yt(this, rn, n);
      }
      async updateConfig(n) {
        await this.handleConfigChange(n);
      }
      async shutdown() {
        await Promise.all([Ft(this, gn, "f").destroy(), this.getWindowSync().close(!0)]), mn.instance = null;
      }
      async saveConfig({ config: n }) {
        Yt(this, rn, n), await async function(r) {
          if (!An) throw new Error("Unable to save Dock provider config - IndexedDb not supported");
          await An[On].put(r, "latest");
        }(n);
      }
      async handleConfigChange(n) {
        Ft(this, En, "f") && await Ft(this, gn, "f").dispatch(Ft(this, En, "f"), "handle-dock-config-updated", n);
      }
      async loadConfig() {
        const n = await async function() {
          if (!An) throw new Error("Unable to get Dock provider config - IndexedDB not supported");
          try {
            return await An[On].get("latest");
          } catch (r) {
            return void console.warn("Failed to retrieve Dock provider config from IndexedDB", r);
          }
        }();
        return n && Yt(this, rn, n), Ft(this, rn, "f");
      }
      getWindowSync() {
        return fin.Window.wrapSync({ uuid: fin.me.identity.uuid, name: Gt });
      }
      registerChannelActions() {
        Ft(this, gn, "f").register("launch-entry", this.launchEntry.bind(this)), Ft(this, gn, "f").register("save-config", this.saveConfig.bind(this)), Ft(this, gn, "f").register("bookmark-content-menu-entry", this.bookmarkContentMenuEntry.bind(this)), Ft(this, gn, "f").onConnection((n) => {
          n.name === Gt && Yt(this, En, n);
        }), Ft(this, gn, "f").register("ready", async (n, r) => {
          var i;
          if (((i = Ft(this, En, "f")) == null ? void 0 : i.endpointId) !== r.endpointId) throw new Error(`Dock3Provider: 'ready' action received from unexpected client ${r.name} (${r.uuid})`);
          Ft(this, Wt, "f").resolve();
        }), Ft(this, gn, "f").onDisconnection((n) => {
          var r;
          ((r = Ft(this, En, "f")) == null ? void 0 : r.endpointId) === n.endpointId && (Yt(this, En, null), Yt(this, Wt, Na()));
        });
      }
    }
    async function mr(e) {
      const { config: n, override: r } = e;
      if (mn.instance) throw new Error("Dock3Provider has already been initialized.");
      const i = await fin.InterApplicationBus.Channel.create(dn()), u = new (r(mn.getOverrideConstructor(n, i)))();
      return await u.loadConfig(), await async function(m, S, v, N) {
        var $, Z, K;
        if (!await Ye({ uuid: ee.uuid, name: m })) {
          let le;
          le = typeof (($ = v.dockPosition) == null ? void 0 : $.left) == "number" || typeof (N == null ? void 0 : N.defaultLeft) == "number" ? (Z = v.dockPosition) == null ? void 0 : Z.left : (await lr(ee)).left - be / 2;
          const pe = { name: m, url: S + C.EnterpriseDock, autoShow: !0, frame: !1, smallWindow: !0, saveWindowState: !1, defaultHeight: ze, defaultWidth: be, includeInSnapshots: !1, defaultTop: ((K = v.dockPosition) == null ? void 0 : K.top) ?? dt, defaultLeft: le, workspacePlatform: { windowType: v.windowType, ...v }, throttling: "disabled", resizable: !1, maximizable: !1, backgroundColor: await ba("background1"), ...ia(N ?? {}) };
          await fin.Window.create(Pn(pe));
        }
      }(Gt, await fn(), u.config, e.windowOptions), await u.ready, u;
    }
    rn = /* @__PURE__ */ new WeakMap(), gn = /* @__PURE__ */ new WeakMap(), En = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), mn.instance = null;
    const gt = async (e) => {
      var i;
      const n = e ? fin.Window.wrapSync(e) : fin.Window.getCurrentSync(), r = await n.getOptions();
      return ((i = r.workspacePlatform) == null ? void 0 : i.windowType) && r.workspacePlatform.windowType === "enterprise";
    }, jr = (e) => {
      var r, i;
      return ((i = (r = e == null ? void 0 : e.defaultWindowOptions) == null ? void 0 : r.workspacePlatform) == null ? void 0 : i.windowType) === "enterprise";
    };
    let wn;
    const wr = (e) => {
      if (e) try {
        return new URL(e).pathname.includes(C.EnterpriseLandingPage.replace(/\/$/, ""));
      } catch {
        console.error("error parsing url: %O", e);
      }
      return !1;
    };
    var Yn;
    (function(e) {
      e.Browser = "Browser", e.Dock = "Dock", e.EnterpriseDock = "EnterpriseDock", e.Home = "Home", e.Notification = "Notification", e.Storefront = "Storefront", e.Platform = "Platform", e.Theming = "Theming", e.Microflow = "Microflow";
    })(Yn || (Yn = {}));
    const ca = async (e, n, r = "workspace-licensing") => {
      const i = { apiVersion: n.apiVersion || Ve, componentName: e, componentVersion: n.componentVersion || Ve, allowed: n.allowed, rejectionCode: n.rejectionCode };
      fin.System.registerUsage({ type: r, data: i });
    };
    let ua = !1;
    const Sa = /* @__PURE__ */ new Map(), yr = (e) => {
      let n = Sa.get(e.uuid);
      return n || (n = h(e), n.once("closed", () => {
        Sa.delete(e.uuid);
      }), Sa.set(e.uuid, n)), n;
    }, Kr = async (e, n) => {
      try {
        await e._raiseAnalytics([n]);
      } catch (r) {
        console.error("failed to raise analytics event", r);
      }
    }, Zt = async (e) => {
      await Kr(yr(fin.me.identity), { source: "Browser", ...e });
    };
    let br;
    const vr = async (e) => {
      br || (br = new TextEncoder());
      const n = br.encode(e), r = await window.crypto.subtle.digest("SHA-256", n);
      return Array.from(new Uint8Array(r)).map((i) => i.toString(16).padStart(2, "0")).join("");
    };
    function la(e) {
      return e && typeof e == "object" && !Array.isArray(e);
    }
    function Tn(e, ...n) {
      if (!n.length) return e;
      const r = n.shift();
      return la(e) && la(r) && Object.entries(r).forEach(([i, u]) => {
        if (la(u)) return e[i] || (e[i] = {}), Tn(e[i], u);
        e[i] = u;
      }), Tn(e, ...n);
    }
    const kr = Dl;
    var Hr = c.n(kr);
    function on() {
      return typeof crypto !== void 0 && "randomUUID" in crypto && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16));
    }
    function Gr() {
      return localStorage.getItem(en.MachineName) ?? "unknown";
    }
    let Pa;
    async function La() {
      return Pa || (Pa = await fin.System.getMachineId()), Pa;
    }
    const zr = (e) => {
      var n;
      if (Array.isArray((n = e.workspacePlatform) == null ? void 0 : n.pages) && (e.layoutSnapshot || e.layout)) {
        const r = e.workspacePlatform.pages.find((i) => i.isActive);
        if (r) {
          const i = e.layoutSnapshot ? e.layoutSnapshot.layouts[r.layoutContainerKey] : e.layout;
          if (i) if (r.isLocked) {
            const u = H(i, r.layout);
            r.layout = u, e.layout = u;
          } else r.layout = i, e.layout = i;
        }
      }
      return e;
    };
    async function da(e) {
      var i;
      const n = e || await fin.Platform.getCurrentSync().getSnapshot();
      if ((i = n.snapshotDetails) != null && i.machineId) return n;
      const r = Gr();
      return { ...n, snapshotDetails: { ...n.snapshotDetails, machineId: await La(), machineName: r } };
    }
    const Va = async (e) => ({ ...e, layoutDetails: { machineId: await La(), machineName: Gr() } }), Wn = async (e, n) => ({ pageId: on(), title: e, layout: await Va(n), isReadOnly: !1 }), Sr = async (e) => {
      const n = await Wn(e.title, O(e.layout));
      return e.panels && (n.panels = e.panels.map((r) => ({ ...r, viewOptions: D(r.viewOptions) }))), { ...e, ...n };
    }, qr = (e) => {
      const n = fin.Platform.Layout.wrapSync(e);
      return { show: async () => {
        const r = await n.getConfig(), { settings: i, dimensions: u } = r, m = await gt(e);
        await n.replace({ ...r, settings: { ...i, hasHeaders: !0, reorderEnabled: !0 }, dimensions: { ...u, headerHeight: m ? 28 : 30 } });
      }, hide: async (r) => {
        var S;
        const i = await n.getConfig(), { settings: u, dimensions: m } = await i;
        await n.replace({ ...i, settings: { ...u, hasHeaders: !1, reorderEnabled: ((S = r == null ? void 0 : r.settings) == null ? void 0 : S.reorderEnabled) ?? !1 }, dimensions: { ...m, headerHeight: 0 } });
      }, isShowingTabs: async () => {
        try {
          const r = await n.getConfig(), { settings: i } = await r;
          return i.hasHeaders;
        } catch (r) {
          return console.error("failed to get layout config: ", r), !0;
        }
      } };
    }, zt = "of-workspace-", Bn = new class {
      mark(e) {
        performance.mark(`${zt}${e}`);
      }
      markStart(e) {
        performance.mark(`${zt}${e}-start`);
      }
      markEnd(e) {
        performance.mark(`${zt}${e}-end`);
      }
      markEndAndMeasure(e) {
        performance.mark(`${zt}${e}-end`);
        try {
          return performance.measure(`${zt}${e}`, `${zt}${e}-start`, `${zt}${e}-end`);
        } catch {
        }
      }
      markAndMeasure(e, n) {
        performance.mark(`${zt}${e}`);
        try {
          return performance.measure(`${zt}${e}-measure`, `${zt}${n}-start`, `${zt}${e}`);
        } catch {
        }
      }
      reportWorkspacePerformanceEntries() {
        return performance.getEntriesByType("measure").filter((e) => e.name.startsWith(zt));
      }
      reportWorkspacePerformance() {
        return this.reportWorkspacePerformanceEntries().map((e) => ({ name: e.name.replace(`${zt}`, "").replace("-measure", ""), duration: e.duration }));
      }
    }(), Ua = () => {
      const e = `browser-context-menu-startup-${on()}`;
      return Bn.markStart(e), e;
    }, $a = (e) => {
      Bn.markAndMeasure("browser-context-menu-called", e);
    }, ja = (e) => {
      fin.Application.wrapSync({ uuid: fin.me.identity.uuid }).once("window-shown", () => {
        ((n) => {
          Bn.markAndMeasure("browser-context-menu-shown", n);
        })(e);
      });
    }, tn = (e, n) => n ? `${n}-${e.uuid}-${e.name}` : `__browser_window__-${e.uuid}-${e.name}`, Zn = /* @__PURE__ */ new Map(), pa = (e) => (Zn.has(e) || Zn.set(e, an(e)), Zn.get(e)()), At = (e, n) => {
      const r = tn(e, n);
      return pa(r);
    };
    var fa, Ka, Qn, Sn, Nn, _n;
    (function(e) {
      e.CloseBrowserWindow = "close-browser-window", e.QuitPlatform = "quit-platform", e.ClosePage = "close-page", e.AddToChannel = "add-to-channel", e.RemoveFromChannel = "remove-from-channel", e.OpenSaveModalInternal = "open-save-modal-internal", e.DuplicatePage = "duplicate-page", e.SetSelectedScheme = "set-selected-scheme", e.ShowBrowserIndicator = "show-browser-indicator", e.SetSelectedLanguage = "set-selected-language", e.RefreshBookmarksInternal = "refresh-bookmarks", e.GetLayoutsWithSelectedViewsInternal = "get-layouts-with-selected-views", e.FocusAndExpandSearchInternal = "focus-and-expand-search";
    })(fa || (fa = {})), function(e) {
      e.GetPages = "get-pages", e.GetActivePageForWindow = "get-active-page-for-window", e.AttachPagesToWindow = "attach-pages-to-window", e.DetachPagesFromWindow = "detach-pages-from-window", e.SetActivePageForWindow = "set-active-page-for-window", e.RenamePage = "rename-page", e.ReorderPagesForWindow = "reorder-pages-for-window", e.UpdatePageForWindow = "update-page-for-window", e.UpdatePagesWindowOptions = "update-pages-window-options", e.IsDetachingPages = "is-detaching-pages", e.IsActivePageChanging = "is-active-page-changing";
    }(Ka || (Ka = {})), function(e) {
      e.GetApps = "get-apps", e.GetCuratedContent = "get-curated-content", e.GetRecentlyVisited = "get-recently-visited", e.GetSearchProviders = "get-search-providers";
    }(Qn || (Qn = {})), function(e) {
      e.CreateBookmarkNode = "create-bookmark-node", e.GetBookmarkNode = "get-bookmark-node", e.SearchBookmarkNodes = "search-bookmark-nodes", e.UpdateBookmarkNode = "update-bookmark-node", e.DeleteBookmarkNode = "delete-bookmark-node";
    }(Sn || (Sn = {})), function(e) {
      e.UpdateFavoriteEntries = "update-favorite-entries", e.UpdateContentMenu = "update-content-menu", e.NavigateContentMenu = "navigate-content-menu";
    }(Nn || (Nn = {})), function(e) {
      e.SendUpdateVersionModalResponse = "send-update-version-modal-response";
    }(_n || (_n = {}));
    const Et = { ...fa, ...Ka, ...Nn }, Xn = an(`${typeof fin < "u" && (fin == null ? void 0 : fin.me.identity.uuid)}-enterprise-bookmarks`), ha = (e) => ({ identity: e, openfinWindow: fin.Window.wrapSync(e), _bookmarks: { _createBookmarkNode: async (n) => (async (r) => (await Xn()).dispatch(Sn.CreateBookmarkNode, r))(n), _getBookmarkNode: async (n) => (async (r) => (await Xn()).dispatch(Sn.GetBookmarkNode, r))(n), _searchBookmarkNodes: async (n) => (async (r) => (await Xn()).dispatch(Sn.SearchBookmarkNodes, r))(n), _updateBookmarkNode: async (n) => (async (r) => (await Xn()).dispatch(Sn.UpdateBookmarkNode, r))(n), _deleteBookmarkNode: async (n) => (async (r) => (await Xn()).dispatch(Sn.DeleteBookmarkNode, r))(n) }, getPages: async () => (await Ze(e)).dispatch(de.GetPagesForWindow, e), getPage: async (n) => (await Ze(e)).dispatch(de.GetPageForWindow, { identity: e, pageId: n }), addPage: async (n) => g().Browser.wrapSync(e)._addPage(n), _addPage: async (n, r) => {
      const i = await Ze(e), u = { identity: e, page: n, insertionIndex: r == null ? void 0 : r.index, multiInstanceViewBehavior: r == null ? void 0 : r.multiInstanceViewBehavior };
      return i.dispatch(de.AddPage, u);
    }, _addPages: async (n, r) => {
      const i = await Ze(e), u = n.map(({ page: S, opts: v }) => ({ ...S, multiInstanceViewBehavior: (v == null ? void 0 : v.multiInstanceViewBehavior) || "duplicate" })), m = { identity: e, pages: u, ...r };
      return i.dispatch(de.AttachPagesToWindow, m);
    }, removePage: async (n) => (await Ze(e)).dispatch(de.DetachPagesFromWindow, { identity: e, pageIds: [n] }), reparentPage: async (n) => g().Browser.wrapSync(e)._reparentPage(n), _reparentPage: async (n) => {
      const { pageId: r } = n, i = await Ze(e), u = (await i.dispatch(de.GetAllAttachedPages, void 0)).find(({ pageId: S }) => S === r);
      if (!u) throw new Error(`Reparent Page Error: Target page with pageId ${r} not found`);
      u.multiInstanceViewBehavior = "reparent";
      const m = { identity: e, pages: [u], insertionIndex: n.index };
      return i.dispatch(de.AttachPagesToWindow, m);
    }, setActivePage: async (n) => (await Ze(e)).dispatch(de.SetActivePage, { identity: e, pageId: n }), updatePage: async (n) => {
      const r = await Ze(e);
      return n.identity = e, r.dispatch(de.UpdatePageForWindow, n);
    }, reorderPages: async (n) => {
      const r = await Ze(e);
      return n.identity = e, r.dispatch(de.ReorderPagesForWindow, n);
    }, _openGlobalContextMenu: async (n) => {
      const r = await Ze(e);
      return n.identity = e, r.dispatch(de.OpenGlobalContextMenuInternal, n);
    }, replaceToolbarOptions: async (n) => {
      await Ze(e), await fin.Window.wrapSync(e).updateOptions({ workspacePlatform: { toolbarOptions: n } });
    }, replaceWindowStateButtonOptions: async (n) => {
      await Ze(e), await fin.Window.wrapSync(e).updateOptions({ workspacePlatform: { windowStateButtonOptions: n } });
    }, updateBrowserWindowTitle: async (n) => {
      const r = fin.Window.wrapSync(e);
      typeof n != "string" ? await r.updateOptions({ workspacePlatform: { title: n } }) : console.warn("Type string for window title is deprecated, please use WindowTitle type instead", n);
    }, _openViewTabContextMenu: async (n) => {
      const r = await Ze(e);
      return n.identity = e, r.dispatch(de.OpenViewTabContextMenuInternal, n);
    }, _openPageTabContextMenu: async (n) => {
      const r = await Ze(e);
      return n.identity = e, r.dispatch(de.OpenPageTabContextMenuInternal, n);
    }, _openSaveModal: async (n) => (await Ze(e), (await At(e)).dispatch(Et.OpenSaveModalInternal, n)), _getLayoutsWithSelectedViews: async () => (await At(e)).dispatch(Et.GetLayoutsWithSelectedViewsInternal, e), _openSaveButtonContextMenu: async (n) => {
      const r = await Ze(e);
      return n.identity = e, r.dispatch(de.OpenSaveButtonContextMenuInternal, n);
    }, _addDefaultPage: async (n) => {
      const r = await Ze(e);
      return n.identity = e, r.dispatch(de.AddDefaultPage, n);
    }, _trackRemovedTab: async (n) => (await Ze(e)).dispatch(de.TrackRemovedTabInternal, n), _restoreRemovedTab: async (n) => (await Ze(e)).dispatch(de.RestoreRemovedTabInternal, n), _trackVisitedSite: async (n) => (await Ze(e)).dispatch(de.TrackVisitedSiteInternal, n), _getRecentlyVisitedSites: async (n) => (await Ze(e)).dispatch(de.GetRecentlyVisitedSitesInternal, n), _getFrequentlyVisitedSites: async (n) => (await Ze(e)).dispatch(de.GetFrequentlyVisitedSitesInternal, n), _searchSites: async (n) => (await Ze(e)).dispatch(de.SearchSitesInternal, { identity: e, req: n }), _getSearchProviders: async () => (await Ze(e)).dispatch(de.GetSearchProvidersInternal, { identity: e }), _getCuratedContent: async (n) => (await Ze(e)).dispatch(de.GetCuratedContentInternal, { identity: e, req: n }), _handleRequestNavigation: async (n) => (await Ze(e)).dispatch(de.HandleRequestNavigationInternal, n), _sendUpdateVersionModalResponse: async (n) => (await Ze(e)).dispatch(de.SendUpdateVersionModalResponseInternal, n) }), Pr = (e) => {
      const n = fin.Platform.wrapSync(e);
      return { wrapSync: (r) => ha(r), createWindow: async (r) => {
        const i = (() => {
          const m = `browser-window-startup-${on()}`;
          return Bn.markStart(m), m;
        })();
        ((m) => {
          fin.Application.wrapSync({ uuid: fin.me.identity.uuid }).once("window-shown", () => {
            Bn.markAndMeasure("browser-window-shown", m);
          });
        })(i), await Ze(e);
        const u = await n.createWindow(r);
        return ((m) => {
          Bn.markAndMeasure("browser-window-started", m);
        })(i), ha(u.identity);
      }, getAllAttachedPages: async () => {
        const r = await rt.time("browser-api::getAllAttachedPages::getBrowserChannelClient", () => Ze(e));
        return rt.time("browser-api::getAllAttachedPages::dispatch", () => r.dispatch(de.GetAllAttachedPages, void 0));
      }, getAllWindows: async () => (await Ze(e), (await je()).map((r) => ha(r.identity))), getUniquePageTitle: async (r) => (await rt.time("browser-api::getUniquePageTitle::getBrowserChannelClient", () => Ze(e))).dispatch(de.GetUniquePageTitle, r), getLastFocusedWindow: async () => (await Ze(e)).dispatch(de.GetLastFocusedBrowserWindow, void 0), getPageByViewIdentity: async (r) => (await Ze(e)).dispatch(de.GetPageByViewIdentity, r) };
    }, Jr = (e, n = 0) => {
      let r, i, u = !1;
      const m = async (S) => {
        const v = await e(...S);
        if (u) {
          await new Promise(($) => setTimeout($, n));
          const N = r;
          return r = void 0, u = !1, m(N);
        }
        return v;
      };
      return (...S) => (i ? (u = !0, r = S) : i = m(S).catch((v) => {
        throw console.error("makeDebouncedFunc", v), v;
      }).finally(() => {
        i = void 0;
      }), i);
    };
    var Yr;
    (function(e) {
      e.Home = "/home", e.Browser = "/browser", e.Enterprise = "/enterprise", e.Provider = "/provider", e.Storefront = "/storefront", e.Dock = "/dock";
    })(Yr || (Yr = {}));
    function xr(e, n) {
      return async (r, ...i) => {
        e.has(r) && e.get(r).forEach((u) => u(...i)), n && await n({ event: r, payload: i });
      };
    }
    function xa(e, n) {
      return n && n((r) => {
        const { event: i, payload: u } = r;
        e.has(i) && e.get(i).forEach((m) => m(...u));
      }), (r, i) => {
        e.has(r) || e.set(r, /* @__PURE__ */ new Set()), e.get(r).add(i);
      };
    }
    function vo(e) {
      return (n, r) => {
        e.has(n) || e.set(n, /* @__PURE__ */ new Set());
        const i = e.get(n), u = (...m) => {
          r(...m), i.delete(u);
        };
        i.add(u);
      };
    }
    function Cr(e) {
      return (n, r) => {
        e.has(n) && e.get(n).delete(r);
      };
    }
    const Mr = { name: We.BrowserMenu, alwaysOnTop: !0, autoShow: !0, frame: !1, resizable: !1, backgroundColor: "#2f3136", smallWindow: !0, showTaskbarIcon: !1, backgroundThrottling: !1, saveWindowState: !1 };
    function Ir(e) {
      const n = { ...Mr, ...e };
      return n.url = function(r, i) {
        if (!Pt) throw new Error("resolveAbsolutePath can only be used in a window");
        const u = window.location;
        if (/^(?:[a-z]+:)?\/\//i.test(r)) return r;
        const m = `${u.protocol}//${u.hostname}`;
        return new URL(r, m).href;
      }(n.url ?? ""), n;
    }
    const Ca = function(e) {
      const n = /* @__PURE__ */ new Map();
      return { emit: xr(n, (r) => Ne && fin.InterApplicationBus.publish(e, r)), addListener: xa(n, (r) => Ne && fin.InterApplicationBus.subscribe({ uuid: fin.me.uuid }, e, r)), addListenerWithUUID: (r) => xa(n, (i) => Ne && fin.InterApplicationBus.subscribe({ uuid: r }, e, i)), removeListener: Cr(n), once: vo(n) };
    }("window.menu"), Ma = (e, n) => fin.Window.wrapSync(e).updateOptions({ opacity: n }), Ha = (e) => Ca.emit("response", e), Zr = Jr(() => Ie().getChildWindows(), 500), Ia = /* @__PURE__ */ new Map();
    async function Qr(e, n, r) {
      var v, N;
      const i = Ir(e), u = await xt(fin.me.identity), m = await oa(fin.me.identity) === ve.Dark, S = u == null ? void 0 : u.theme;
      return i.backgroundColor = ((N = (v = S == null ? void 0 : S[m ? ve.Dark : ve.Light]) == null ? void 0 : v.palette) == null ? void 0 : N.inputBackground) || i.backgroundColor, Ia.has(i.name) ? Ia.get(i.name) : new Promise(($) => {
        Ca.once("ready", async (K) => {
          if (K.name === i.name) {
            const le = await Ia.get(i.name);
            i.preventBlur || le.once("blurred", async () => {
              if (Ma(K, 0), le.hide(), Ha({ name: i.name, data: { actionName: "Cancel" } }), pe = le.identity.name, [We.BrowserSaveMenu, We.DockSaveWorkspaceMenu, We.DesktopSignalsModal].includes(pe)) {
                const Me = await le.getOptions();
                Me.customContext !== "submitting" && Me.customContext !== "error" && le.close();
              } else le.identity.name.startsWith(We.BrowserMenu) && le.close();
              var pe;
            }), setTimeout(async () => {
              await Ma(K, 1), (await fin.Window.wrapSync(K).getOptions()).opacity !== 1 && Ma(K, 1);
            }), $(le);
          }
        });
        const Z = (async () => {
          const K = await fin.Platform.getCurrentSync().createWindow(Pn({ ...i, opacity: 0, url: n || i.url, defaultLeft: r == null ? void 0 : r.left, defaultTop: r == null ? void 0 : r.top, defaultWidth: r == null ? void 0 : r.width, defaultHeight: r == null ? void 0 : r.height, workspacePlatform: { preventBlur: e.preventBlur } }, !0));
          return K.once("closed", () => {
            Ia.delete(i.name);
          }), K;
        })();
        Ia.set(i.name, Z);
      });
    }
    async function Ga(e, n) {
      const r = Ir(e), i = { top: r.top, left: r.left, width: r.defaultWidth || r.width, height: r.defaultHeight || r.height };
      return n.set("parentName", fin.Window.getCurrentSync().identity.name), { name: r.name, bounds: i, route: `${r.url}#${n.toString()}` };
    }
    async function za({ options: e, parameters: n }) {
      const r = n ?? new URLSearchParams(), i = Ir(e), { name: u, modalParentIdentity: m } = i;
      if (!r.has("isEnterprise")) {
        const v = `${await (async (N) => (wn || (wn = await gt(N)), wn))(m)}`;
        r.set("isEnterprise", v);
      }
      let S = await async function(v) {
        return (await Zr()).find((N) => N.identity.name === v);
      }(u);
      if (S) await async function(v, N) {
        const { name: $, bounds: Z, route: K } = await Ga(v, N), le = { uuid: fin.me.identity.uuid, name: $ }, pe = fin.Window.wrapSync(le);
        await Promise.all([pe.hide(), Ma(le, 0), pe.setBounds(Z)]), v.preventBlur || pe.once("blurred", () => {
          Ma(le, 0), pe.hide(), Ha({ name: le.name, data: { actionName: "Cancel" } });
        }), Ca.emit("update", $, Z, K), await Ha({ name: $, data: { actionName: "Cancel" } });
      }(i, r);
      else {
        const { route: v, bounds: N } = await Ga(e, r);
        S = await Qr({ ...i }, v, N);
      }
      return S;
    }
    const ea = async ({ options: e, content: n, parameters: r }) => {
      var S;
      const i = r ?? new URLSearchParams();
      i.set("content", JSON.stringify({ ...n, invocationId: on() }));
      const u = { ...e, name: `${e.name}--${((S = e.modalParentIdentity) == null ? void 0 : S.name) ?? ""}` }, m = await za({ options: u, parameters: i });
      return new Promise((v) => {
        Ca.once("response", async (N) => {
          N.name === u.name && (v({ data: N.data }), u != null && u.closeOnResponse && m.close());
        });
      });
    };
    let Ar;
    async function ko(e) {
      return (await (Ar || (Ar = an(`${typeof fin < "u" && fin.me.identity.uuid}-enterprise-modal`)()), Ar)).dispatch(_n.SendUpdateVersionModalResponse, e);
    }
    const Xr = async (e) => {
      const n = P(e), r = await n.getBounds(), i = cn(r), u = w(i, { height: 240, width: 432 });
      return za({ options: { smallWindow: !0, saveWindowState: !1, showTaskbarIcon: !0, includeInSnapshots: !1, workspacePlatform: { windowType: "enterprise" }, resizable: !1, name: We.DesktopSignalsModal, url: await Jt() + C.DesktopSignalsModal, defaultWidth: 432, defaultHeight: 240, preventBlur: !1, ...u }, parameters: new URLSearchParams({ title: "Desktop Signals Modal" }) });
    }, qa = (e) => ({ createPage: async (n) => (await Ze(e)).dispatch(de.CreateSavedPageInternal, n), deletePage: async (n) => (await Ze(e)).dispatch(de.DeleteSavedPageInternal, n), updatePage: async (n) => (await Ze(e)).dispatch(de.UpdateSavedPageInternal, n), getPage: async (n) => (await Ze(e)).dispatch(de.GetSavedPage, n), getPages: async (n) => (await Ze(e)).dispatch(de.GetSavedPages, n), savePage: async (n) => (await Ze(e)).dispatch(de.SavePage, n), createWorkspace: async (n) => (await Ue(e)).dispatch(de.CreateSavedWorkspace, n), deleteWorkspace: async (n) => {
      const r = g(), i = await r.getCurrentWorkspace();
      if (i.workspaceId === n) throw new Error(`Cannot delete current active workspace ${i.title}`);
      return (await Ue(e)).dispatch(de.DeleteSavedWorkspace, n);
    }, updateWorkspace: async (n) => (await Ue(e)).dispatch(de.UpdateSavedWorkspace, n), getWorkspace: async (n) => (await Ue(e)).dispatch(de.GetSavedWorkspace, n), getWorkspaces: async (n) => (await Ue(e)).dispatch(de.GetSavedWorkspaces, n), getWorkspacesMetadata: async (n) => (await Ue(e)).dispatch(de.GetSavedWorkspacesMetadata, n), saveWorkspace: async (n) => (await Ue(e)).dispatch(de.SaveWorkspace, n), getDockProviderConfig: async (n) => (await Ue(e)).dispatch(de.GetDockProviderConfig, n), saveDockProviderConfig: async (n) => (await Ue(e)).dispatch(de.SaveDockProviderConfig, n) });
    var yn;
    (function(e) {
      e.UpdatePlatformThemeScheme = "update-platform-theme-scheme";
    })(yn || (yn = {}));
    const Nt = an("of-workspace-notifications-sync"), Aa = (e, n = "") => e.toLowerCase().includes(n.toLowerCase()), sn = (...e) => ((n, ...r) => {
      const i = console[n];
      try {
        i(...r.map((u) => typeof u == "object" ? JSON.stringify(u, null, 2) : u));
      } catch (u) {
        console.error("Error printing stringified log, logging directly", u), i(...r);
      }
    })("debug", ...e), So = ve.Dark, Ja = (e) => Object.entries(e).reduce((n, [r, i]) => `${n}--workspace-palette-${r}: ${i};`, ""), eo = (e, n) => {
      const r = !!e.contentBackground5 && e.contentBackground5 !== "#000000", i = !!e.contentBackground4 && e.contentBackground4 !== "#000000", u = wa(e.textDefault), m = wa(e.textInactive), S = u.rgb, v = m.rgb, N = u.alpha ? parseFloat(u.alpha.toString()) : 1, $ = m.alpha ? parseFloat(m.alpha.toString()) : 1;
      return { dockExpandedContainerBorderColor: r ? e.contentBackground5 : e.background4, dockExpandedContainerBorderRadius: r && n ? "0" : "10px", dockExpandedContainerBackground: i ? e.contentBackground4 : e.background1, fillerBackgroundColor: i ? e.contentBackground4 : "inherit", dockCompanionContainerBackground: i ? e.contentBackground4 : "inherit", dockComponentContainerBackground: r ? e.contentBackground5 : e.background5, styledDropdownActiveBackground: `${r ? e.contentBackground5 : e.background4}`, contentMenuWrapperInternalDivBorderColor: r ? e.contentBackground5 : e.background5, contentMenuItemContainerActiveBackground: r ? e.contentBackground5 : e.background3, contentMenuItemContainerHoverBackground: r ? e.contentBackground5 : e.background2, contentMenuHeaderBorderColor: r ? e.contentBackground5 : e.background5, dockCompanionSeparatorBorderColor: r ? e.contentBackground5 : e.background3, dockComponentContainerBorderColor: r ? e.contentBackground5 : e.background5, companionDockButtonActiveBackground: r ? e.contentBackground5 : e.background4, companionDockButtonHoverBackground: r ? e.contentBackground5 : e.background4, "computed-scrollbar-thumb-alpha": N, "computed-scrollbar-track-alpha": $, "scrollbar-thumb-rgb": S, "scrollbar-track-rgb": v };
    }, Fn = (e, n, r) => ({ selectedTab: n === "dark" ? e.background3 : e.background1, ...eo(e, r) }), ta = new class {
      constructor(e) {
        this.providerStorage = e, this.getVarsByScheme = (n) => n === "dark" ? this.darkPaletteVars : this.lightPaletteVars, this.setWorkspaceStorage = (n) => {
          this.workspaceStorage = n;
        }, this.trySynchronizeWorkspaceStorage = () => {
          if (this.workspaceStorage && this.hasUserPreference()) {
            const n = this.getScheme();
            if (this.workspaceStorage.setItem(en.SelectedColorScheme, n), this.darkPaletteVars && this.lightPaletteVars) if (n === "dark" || n === "light") this.workspaceStorage.setItem(en.ThemePaletteSheet, `:root{${this.getVarsByScheme(n)}}`);
            else {
              const r = `@media (prefers-color-scheme: dark){:root {${this.getVarsByScheme("dark")}}}`, i = `@media (prefers-color-scheme: light){:root{${this.getVarsByScheme("light")}}}`;
              this.workspaceStorage.setItem(en.ThemePaletteSheet, `${i}${r}`);
            }
          }
        }, this.setPalettes = async ({ light: n, dark: r }, i) => {
          this.lightPaletteVars = Ja({ ...n, ...Fn(n, "light", i) }), this.darkPaletteVars = Ja({ ...r, ...Fn(r, "dark", i) });
        };
      }
      hasUserPreference() {
        return this.providerStorage.getItem(en.SelectedColorScheme) !== null;
      }
      setScheme(e) {
        this.providerStorage.setItem(en.SelectedColorScheme, e);
      }
      setThemeDefaultScheme(e) {
        const n = Object.values(ve);
        n.includes(e) ? this.providerStorage.setItem(en.ThemePaletteDefaultScheme, e) : console.warn(`Invalid theme default scheme '${e}'. Must be one of: ${n.join(", ")}. Ignoring default.`);
      }
      getScheme() {
        const e = this.providerStorage.getItem(en.SelectedColorScheme), n = this.providerStorage.getItem(en.ThemePaletteDefaultScheme);
        return e !== null ? e : n ?? So;
      }
    }(b), Ln = () => (sn("ThemeStorage: getThemeStorageController called"), ta), Vn = (e) => ({ getThemes: async () => (await Ue(e)).dispatch(de.GetThemes, void 0), setSelectedScheme: async (n) => (await Ue(e)).dispatch(de.SetSelectedScheme, n), getSelectedScheme: async () => (await Ue(e)).dispatch(de.GetSelectedScheme, void 0) }), to = async (e) => {
      await (await fr()).dispatch("set-selected-scheme", e);
    }, t = async (e) => {
      await (await Nt()).dispatch(yn.UpdatePlatformThemeScheme, { scheme: e });
    }, a = async (e) => {
      const n = await je();
      return Promise.all(n.map(async (r) => {
        await (await At(r.identity)).dispatch(Et.SetSelectedScheme, e);
      }));
    }, s = async (e) => {
      const n = await wt();
      return Promise.all(n.map(async (r) => {
        await (await At(r.identity)).dispatch(Et.SetSelectedScheme, e);
      }));
    }, l = async (e) => {
      try {
        const n = Ln();
        n.setScheme(e), await Promise.all([await n.trySynchronizeWorkspaceStorage(), t(e), a(e), s(e), to(e)]);
      } catch (n) {
        console.error("failed to set the selected scheme: ", n);
      }
    }, p = () => {
      try {
        return Ln().getScheme();
      } catch (e) {
        console.error("failed to get the selected scheme: ", e);
      }
    }, h = (e) => {
      const n = fin.Platform.wrapSync(e);
      let r;
      return Object.assign(n, { applySnapshot: async (i, u) => {
        if (typeof i != "string" && !(i != null && i.windows)) throw new Error("Not a valid browser snapshot");
        return fin.Platform.wrapSync(e).applySnapshot(i, u);
      }, getSnapshot: () => fin.Platform.wrapSync(e).getSnapshot().then((i) => i), getViewSnapshot: (i) => fin.Platform.wrapSync(e).getViewSnapshot(i), createView: (i, u, m) => fin.Platform.wrapSync(e).createView(i, u, m), launchApp: async (i) => (console.warn("launchApp method is deprecated. It is recommended to use createView - https://developers.openfin.co/of-docs/docs/platform-getting-started#add-a-view-to-an-existing-window or  createWindow - https://developers.openfin.co/of-docs/docs/platform-getting-started#create-a-platform-window instead."), i.target || (i.target = { uuid: ft, name: Ke, entityType: W || "unknown" }), (await Ue(e)).dispatch(de.LaunchApp, i)), _invokeCustomAction: async (i, u) => {
        const m = await Ue(e), S = { actionId: i, payload: { ...u, callerType: u.callerType || ut.API } };
        return m.dispatch(de.InvokeCustomActionInternal, S);
      }, _requestQuitPlatformDialog: async (i) => (await Ue(e)).dispatch(de.RequestQuitPlatformDialogInternal, i), _showUpdateVersionModal: async (i) => (await Ue(e)).dispatch(de.ShowUpdateVersionModalInternal, i), getCurrentWorkspace: async (i) => (await Ue(e)).dispatch(de.GetCurrentWorkspace, i), applyWorkspace: async (i, u) => (await Ue(e)).dispatch(de.ApplyWorkspace, { ...i, options: u }), restoreLastSavedWorkspace: async (i) => (await Ue(e)).dispatch(de.RestoreLastSavedWorkspaceInternal, i), setActiveWorkspace: async (i) => (await Ue(e)).dispatch(de.SetActiveWorkspace, i), getLanguage: async () => (await Ue(e)).dispatch(de.GetLanguage), _getLanguageResources: async () => (await Ue(e)).dispatch(de.GetLanguageResourcesInternal), setLanguage: async (i) => (await Ue(e)).dispatch(de.SetLanguage, i), _raiseAnalytics: async (i) => {
        var u;
        if (r || (r = await Wa(e)), typeof r == "object" && ((u = r == null ? void 0 : r.analytics) == null ? void 0 : u.isSupported))
          return (await Ue(e)).dispatch(de.Analytics, i);
        console.log(`Analytics not supported for platform ${e.uuid}`);
      }, getNotificationsConfig: async () => (await Ue(e)).dispatch(de.GetNotificationsConfig), _refreshBookmarksInternal: async () => (await Ue(e)).dispatch(de.RefreshBookmarksInternal), _launchBookmarkInternal: async (i) => (await Ue(e)).dispatch(de.LaunchBookmarkInternal, i), _updateDockFavoritesInternal: async (i) => (await Ue(e)).dispatch(de.UpdateDockFavoritesInternal, i), _updateContentMenuInternal: async (i) => (await Ue(e)).dispatch(de.UpdateContentMenuInternal, i), _launchDockEntryInternal: async (i) => (await Ue(e)).dispatch(de.LaunchDockEntryInternal, i), _setDockFavoritesInternal: async (i) => (await Ue(e)).dispatch(de.SetDockFavoritesOrderInternal, i), _setDefaultDockButtonsOrderInternal: async (i) => (await Ue(e)).dispatch(de.SetDefaultDockButtonsOrderInternal, i), _removeDockFavoriteInternal: async (i) => (await Ue(e)).dispatch(de.RemoveDockFavoriteInternal, i), _addDockFavoriteInternal: async (i) => (await Ue(e)).dispatch(de.AddDockFavoriteInternal, i), _navigateContentMenuInternal: async (i) => (await Ue(e)).dispatch(de.NavigateContentMenuInternal, i), _openDockWorkspacesContextMenuInternal: async () => (await Ue(e)).dispatch(de.GetDockWorkspacesContextMenuInternal), _handleDockWorkspacesMenuResponseInternal: async (i) => (await Ue(e)).dispatch(de.HandleDockWorkspacesMenuResponseInternal, i), _focusAndExpandSearchInternal: async () => (await Ue(e)).dispatch(de.FocusAndExpandSearchInternal), _showAboutPagePopup: async (i) => (async (u) => {
        const m = new URLSearchParams({ ...u, title: "About" }), S = await lr(fin.me.identity), v = u.copyrightMessage ? 320 : 286, N = w(S, { height: v, width: 360 });
        return za({ options: { frame: !0, smallWindow: !0, saveWindowState: !1, showTaskbarIcon: !0, includeInSnapshots: !1, workspacePlatform: { windowType: "enterprise" }, resizable: !1, name: We.AboutPageWindow, url: await Jt() + C.EnterpriseAboutPage, defaultWidth: 360, defaultHeight: v, preventBlur: !0, ...N }, parameters: m });
      })(i), Theme: Vn(e), Browser: Pr(e), Storage: qa(e) });
    }, g = () => h(fin.me.identity), k = { contextMenuOptions: { enabled: !0, template: ["spellCheck", "separator", "print", "separator", "cut", "copy", "paste", "undo", "redo", "selectAll", "inspect", "reload"] }, downloadShelf: { enabled: !0 } };
    function T(e, n) {
      return Tn({}, k, n, e);
    }
    const L = "internal-generated-view-", E = (e, n) => e.content ? { ...e, content: e.content.map((r) => E(r, n)) } : { ...e, componentState: n(e.componentState) }, A = (e, n) => {
      var i;
      return r = T(e, n), { ...r, name: r.name ? r.name : `internal-generated-view-${on()}`, _internalWorkspaceData: { ...r._internalWorkspaceData, viewIdentifier: ((i = r._internalWorkspaceData) == null ? void 0 : i.viewIdentifier) || on() } };
      var r;
    }, D = (e) => ({ ...e, name: void 0 }), O = (e) => {
      const n = { ...e };
      return E(n, D);
    }, _ = (e) => {
      const n = { ...e };
      return E(n, (r) => r.name && r.name.startsWith(L) ? D(r) : r);
    }, I = (e) => {
      const n = [];
      return (e && Array.isArray(e) ? e : []).forEach((r) => {
        if (r.type === "component") return n.push(r.componentState);
        const i = I(r.content);
        n.push(...i);
      }), n;
    }, j = async (e, n, r = ee) => {
      let i;
      return await Ge(r) && (i = (await P(r).getOptions()).layout || { settings: {} }), { ...i, content: [{ type: "stack", content: [{ type: "component", componentName: "view", componentState: { title: e, url: n } }] }] };
    }, H = (e, n) => {
      const r = I(n.content);
      return { ...E(e, (i) => {
        const u = r.find((S) => {
          var v, N;
          return ((v = S._internalWorkspaceData) == null ? void 0 : v.viewIdentifier) === ((N = i._internalWorkspaceData) == null ? void 0 : N.viewIdentifier);
        }), m = u ? u.isClosable : i.isClosable;
        return { ...i, isClosable: m };
      }), settings: n.settings };
    }, F = (e) => e ? I(e).length : 0, Q = (Hr()(async (e) => {
      try {
        if (!e || !e.layoutContainerKey) return;
        const n = await (async (u) => fin.Platform.Layout.wrapSync({ ...fin.me.identity, layoutName: u }).getConfig())(e.layoutContainerKey), r = n.content ? I(n.content) : [], i = r.length;
        i > 1 ? (async (u) => {
          if (u.attachedPageType !== "multiView") {
            const m = await g().Browser.getUniquePageTitle();
            g().Browser.wrapSync(ee).updatePage({ pageId: u.pageId, page: { title: u.title ?? m, singleViewName: null, attachedPageType: "multiView" } });
          }
        })(e) : i === 1 && (async (u, m) => {
          const S = g().Browser.wrapSync(ee);
          if (u.attachedPageType !== "singleView") {
            const v = await Sr(u);
            delete v.layout, delete v.pageId;
            const N = fin.View.wrapSync({ uuid: ee.uuid, name: m }), $ = await N.getInfo(), Z = { ...v, title: null, singleViewName: m, hasUnsavedChanges: !1, attachedPageType: "singleView", pageIcon: $.favicons[0] };
            await S.updatePage({ pageId: u.pageId, page: Z });
          }
        })(e, r[0].name), await (async (u, m) => {
          const S = qr({ ...ee, layoutName: u.layoutContainerKey }), v = await S.isShowingTabs();
          m > 1 ? v || await S.show() : m === 1 && v && await S.hide({ settings: { reorderEnabled: !0 } });
        })(e, i);
      } catch (n) {
        console.debug("UpdatePageForViewCount error:", n);
      }
    }, 50, { leading: !1, trailing: !0 }), gd), ce = Ld;
    var fe = c.n(ce);
    const we = JSON.parse('{"contextMenu.newWindow":"新建窗口","contextMenu.newPage":"新建页面","contextMenu.restore":"还原到上次保存的更改","contextMenu.switchWorkspace":"切换工作区","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"外观","contextMenu.saveWorkspace":"保存工作区","contextMenu.saveWorkspaceAs":"将工作区另存为...","contextMenu.renameWorkspace":"重命名工作区","contextMenu.deleteWorkspace":"删除工作区","contextMenu.downloads":"下载","contextMenu.savePage":"保存页面","contextMenu.savePageAs":"将页面另存为...","contextMenu.print":"打印...","contextMenu.printScreen":"打印屏幕","contextMenu.closeWindow":"关闭窗口","contextMenu.openStorefront":"开放式店面","contextMenu.quitPlatform":"退出平台","contextMenu.newView":"新建视图","contextMenu.openView":"使用默认 Web 浏览器打开视图","contextMenu.openViews":"使用默认 Web 浏览器打开视图","contextMenu.reload":"Reload CN","contextMenu.reloadView":"重新加载视图","contextMenu.reloadViews":"重新加载视图","contextMenu.duplicate":"Duplicate CN","contextMenu.duplicateView":"复制视图","contextMenu.duplicateViews":"复制视图","contextMenu.addView":"将视图添加到频道","contextMenu.addViews":"将视图添加到频道","contextMenu.removeView":"从频道中移除视图","contextMenu.removeViews":"从频道中移除视图","contextMenu.closeView":"关闭视图","contextMenu.closeViews":"关闭视图","contextMenu.closeTab":"Close Tab CN","contextMenu.duplicatePage":"复制页面","contextMenu.submenu.print":"打印","contextMenu.submenu.printAll":"全部打印","saveMenu.saveWorkspaceAs":"将工作区另存为","saveMenu.savePageAs":"将页面另存为","saveModal.enterValue":"Please enter a value CN","saveModal.alreadyExists":"{{title}} 已存在。","saveModal.pleaseEnterValidName":"请输入有效名称","saveModal.renamePage":"重新命名页面","saveModal.closePage":"关闭页面","saveModal.discardChanges":"放弃更改","saveModal.discardAll":"全部放弃","saveModal.saveAll":"全部保存","saveModal.savePagesCount":"关闭前保存 ({{count}}) 个页面？","defaultPageTitle":"Untitled Page CN","enterpriseDefaultPageTitle":"Untitled Supertab CN","addNewPage":"添加新页面","addNewTab":"添加新选项卡","addNewView":"新建视图","restoreModal":"您确定要还原到上次保存的更改吗？","modal.discardWarning":"任何未保存的更改都将丢失","modal.discardPageWarning":"对此页的任何未保存的更改都将丢失。","modal.saveChangesPrompt":"关闭前保存更改？","modal.pageClose":"关闭页面","switchWorkspaceModal":"您确定要切换到 {{workspace}} 吗？","switchWorkspaceModal.warning":"任何未保存的更改都将丢失","deleteWorkspaceModal":"您确定要永久删除此工作区吗？","replaceWorkspaceModal.warning":"名称为 {{workspace}} 的工作区已存在。您是否要替换它？","replaceWorkspaceModal.warning.body":"已存在同名的工作区。替换它将覆盖其当前内容。","replaceWorkspaceModal.replace":"替换","closePlatform":"关闭平台","closePlatform.workspace":"关闭 {{workspace}} 平台","closePlatform.warning":"关闭平台将关闭所有工作区、应用或任何正在运行的进程。","back":"后退","forward":"前进","reload":"重新加载","green":"绿色","purple":"紫色","orange":"橙色","red":"红色","pink":"粉红色","yellow":"黄色","theme.light":"浅色","theme.dark":"深色","theme.system":"与操作系统设置同步","toolbar.hideTabs":"隐藏选项卡","toolbar.showTabs":"显示选项卡","toolbar.lock":"锁定","toolbar.unlock":"解锁","toolbar.colorLinking":"颜色链接","toolbar.changeLayout":"更改布局","toolbar.saveMenu":"保存菜单","toolbar.maximizeWindow":"最大化窗口","toolbar.restoreWindow":"还原窗口","toolbar.minimizeWindow":"最小化窗口","changeLayout.fullWidth":"全宽","changeLayout.columns":"列数","changeLayout.Rows":"行数","changeLayout.Grid":"网格","successIndicator.workspaceSwitched":"已切换工作区","successIndicator.hidden":"选项卡已隐藏","successIndicator.shown":"选项卡已显示","successIndicator.locked":"页面已锁定","successIndicator.unlocked":"页面已解锁","successIndicator.workspaceSaved":"工作区已保存","successIndicator.workspaceSavedAs":"工作区已另存为 {{workspace}}","successIndicator.workspaceRenamed":"工作区已重命名","successIndicator.pageSaved":"页面已保存","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. CN","successIndicator.pageCopySaved":"页面已另存为 {{title}}","successIndicator.pageRenamed":"页面已重命名","successIndicator.contextGroupApplied":"已应用上下文组","successIndicator.namedContextGroupApplied":"已应用 {{colorName}} 上下文组","successIndicator.viewRemoved":"从上下文组中移除视图","successIndicator.viewsRemoved":"从上下文组中移除视图","successIndicator.layoutApplied":"已应用 {{layoutName}} 布局","successIndicator.workspaceDeleted":"工作区已删除","errorIndicator.pageSaveFailed":"页面保存失败","errorIndicator.workspaceSaveFailed":"工作区保存失败","errorIndicator.failedToDuplicatePage":"复制页面失败","infoIndicator.colorLinkAttempt":"我们尝试对此选项卡进行颜色链接，但网站/内容所有者尚未启用该功能","global.cancel":"取消","global.confirm":"确认","global.save":"保存","global.delete":"Delete CN","appResults.header":"Featured Content CN","recentlyClosed.header":"Recently Closed CN","landingPage.subheader":"Apps and websites selected by an admin will show here CN","aria.openBrowser":"打开浏览器菜单","aria.browserTabs":"浏览器选项卡","aria.viewTab":"查看 {{title}} 的选项卡","aria.closePage":"关闭 {{title}} 的页面选项卡按钮","aria.closeTab":"关闭选项卡 {{title}}","aria.title":"标题","aria.closeContextGroup":"使用转义关闭上下文组选择对话框","aria.colorLinking":"显示或隐藏颜色链接","aria.applyColorLinking":"请选择一个视图以应用颜色链接","aria.assignColorLinkingCurrentView":"分配给 {{name}} 上下文组的当前视图","aria.assignColorLinkingCurrentViews":"分配给 {{name}} 上下文组的当前视图","aria.setColorLinkingActiveView":"将活动视图设置为 {{name}} 上下文组","aria.setColorLinkingActiveViews":"将活动视图设置为 {{name}} 上下文组","aria.escapeLayoutDialog":"使用转义关闭更改布局对话框","global.supertab":"Supertab CN","global.tab":"Tab CN","bookmarks.editBookmark":"Edit Bookmark CN","bookmarks.bookmarkAdded":"Bookmark added CN","bookmarks.done":"Done CN","bookmarks.remove":"Remove CN","bookmarks.bookmarksPanel":"Bookmarks Panel CN","bookmarks.bookmarks":"Bookmarks CN","bookmarks.allBookmarks":"All Bookmarks CN","bookmarks.favorites":"Favorites CN","bookmarks.searchBookmarks":"Search Bookmarks CN","bookmarks.clearSearchInput":"Clear Search Input CN","bookmarks.createFolder":"Create New Folder CN","bookmarks.exitFolder":"Exit Folder CN","bookmarks.newFolder":"New Folder CN","bookmarks.namedFolder":"{{name}} Folder CN","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings CN","bookmarks.folderSettings":"{{name}} Folder Settings CN","bookmarks.noResultsFound":"No results found CN","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search CN","bookmarks.nothingToShow":"Nothing to show yet CN","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder CN","bookmarks.resultsFoundIn":"Results found in {{name}} CN","bookmarks.resultsInOtherFolders":"Results found in other folders CN","bookmarks.allResultsFoundIn":"All results found in CN","bookmarks.editName":"Edit Name CN","bookmarks.move":"Move CN","bookmarks.bookmarkAddedTitle":"Bookmark Added CN","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" CN","bookmarks.bookmarkEditedTitle":"Bookmark Edited CN","enterpriseContextMenu.saveSupertab":"Save Supertab CN","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... CN","enterpriseContextMenu.duplicate":"Duplicate CN","enterpriseContextMenu.deleteSupertab":"Delete Supertab CN","enterpriseContextMenu.newTab":"New Tab CN","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As CN","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? CN","saveSupertabCount_other":"Save {{count}} Supertabs before closing? CN"},"enterpriseSaveModal.renameSupertab":"Rename CN","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. CN","enterpriseSaveModal.closeTab":"Close Tab CN","enterpriseSaveModal.closeSupertab":"Close Supertab CN","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. CN","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? CN","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. CN","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved CN","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. CN","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted CN","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. CN","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab CN","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab CN","enterpriseCommandBar.switchToSupertab":"Switch to Supertab CN","enterpriseCommandBar.goTo":"Go to {{type}} CN","enterpriseCommandBar.viewMore":"View More CN","sidePanel.aiCenter":"AI Center CN","sidePanel.newChat":"New Chat CN","sidePanel.toggleSidePanel":"Toggle Side Panel CN","sidePanel.closeSidePanel":"Close Side Panel CN","sidePanel.openAiCenter":"Open AI Center CN","contextMenu.quitEnterpriseBrowser":"Quit CN","dock.removeFavorite":"Remove CN"}'), ue = JSON.parse('{"contextMenu.newWindow":"新視窗","contextMenu.newPage":"新頁面","contextMenu.restore":"還原到上次儲存的變更","contextMenu.switchWorkspace":"切換工作空間","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"外觀","contextMenu.saveWorkspace":"儲存工作空間","contextMenu.saveWorkspaceAs":"將工作空間另存為...","contextMenu.renameWorkspace":"重新命名工作空間","contextMenu.deleteWorkspace":"刪除工作空間","contextMenu.downloads":"下載","contextMenu.savePage":"儲存頁面","contextMenu.savePageAs":"將頁面另存為...","contextMenu.print":"列印...","contextMenu.printScreen":"擷取畫面","contextMenu.closeWindow":"關閉視窗","contextMenu.openStorefront":"打開 Storefront","contextMenu.quitPlatform":"退出平台","contextMenu.newView":"新視圖","contextMenu.openView":"使用預設網頁瀏覽器打開視圖","contextMenu.openViews":"使用預設網頁瀏覽器打開視圖","contextMenu.reload":"Reload ZH","contextMenu.reloadView":"重新載入視圖","contextMenu.reloadViews":"重新載入視圖","contextMenu.duplicate":"Duplicate ZH","contextMenu.duplicateView":"複寫視圖","contextMenu.duplicateViews":"複寫視圖","contextMenu.addView":"將視圖新增至頻道","contextMenu.addViews":"將視圖新增至頻道","contextMenu.removeView":"從頻道中移除視圖","contextMenu.removeViews":"從頻道中移除視圖","contextMenu.closeView":"關閉視圖","contextMenu.closeViews":"關閉視圖","contextMenu.closeTab":"Close Tab ZH","contextMenu.duplicatePage":"複寫頁面","contextMenu.submenu.print":"列印","contextMenu.submenu.printAll":"列印全部","saveMenu.saveWorkspaceAs":"將工作空間另存為","saveMenu.savePageAs":"頁面另存為","saveModal.enterValue":"Please enter a value ZH","saveModal.alreadyExists":"{{title}} 已經存在。","saveModal.pleaseEnterValidName":"請輸入一個有效的名稱","saveModal.renamePage":"重新命名頁面","saveModal.closePage":"關閉頁面","saveModal.discardChanges":"捨棄變更","saveModal.discardAll":"全部捨棄","saveModal.saveAll":"儲存全部","saveModal.savePagesCount":"要先儲存 ({{count}}) 個頁面再關閉嗎？","defaultPageTitle":"Untitled Page ZH","enterpriseDefaultPageTitle":"Untitled Supertab ZH","addNewPage":"新增新頁面","addNewTab":"新增新索引標籤","addNewView":"新視圖","restoreModal":"您確定要還原到上次儲存的變更嗎？","modal.discardWarning":"任何未儲存的變更都將被捨棄","modal.discardPageWarning":"在此頁面任何未儲存的變更都將遺失。","modal.saveChangesPrompt":"要先儲存變更再關閉嗎？","modal.pageClose":"頁面關閉","switchWorkspaceModal":"您確定要切換到 {{workspace}}？","switchWorkspaceModal.warning":"任何未儲存的變更都將被捨棄","deleteWorkspaceModal":"您確定要永久刪除此工作空間嗎？","replaceWorkspaceModal.warning":"具有名稱 {{workspace}} 的工作空間已經存在。你要更換它嗎？","replaceWorkspaceModal.warning.body":"相同名稱的工作空間已經存在。更換它後，將會覆蓋目前內容。","replaceWorkspaceModal.replace":"更換","closePlatform":"關閉平台","closePlatform.workspace":"關閉 {{workspace}} 平台","closePlatform.warning":"關閉平台後，將關閉正在執行的任何工作空間、APP 或流程。","back":"上一頁","forward":"下一頁","reload":"重新載入","green":"綠","purple":"紫","orange":"橘","red":"紅色","pink":"粉紅","yellow":"黃","theme.light":"淺","theme.dark":"深","theme.system":"與 OS 設定同步","toolbar.hideTabs":"隱藏索引標籤","toolbar.showTabs":"顯示索引標籤","toolbar.lock":"上鎖","toolbar.unlock":"解鎖","toolbar.colorLinking":"顏色連結","toolbar.changeLayout":"變更版面","toolbar.saveMenu":"儲存選單","toolbar.maximizeWindow":"最大化視窗","toolbar.restoreWindow":"還原視窗","toolbar.minimizeWindow":"最小化視窗","changeLayout.fullWidth":"全螢幕寬度","changeLayout.columns":"行","changeLayout.Rows":"列","changeLayout.Grid":"網格","successIndicator.workspaceSwitched":"工作空間已切換","successIndicator.hidden":"索引標籤已隱藏","successIndicator.shown":"索引標籤已顯示","successIndicator.locked":"頁面已上鎖","successIndicator.unlocked":"頁面已解鎖","successIndicator.workspaceSaved":"工作空間已儲存","successIndicator.workspaceSavedAs":"工作空間已另存為 {{workspace}}","successIndicator.workspaceRenamed":"工作空間已重新命名","successIndicator.pageSaved":"頁面已儲存","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. ZH","successIndicator.pageCopySaved":"頁面已另存為 {{title}}","successIndicator.pageRenamed":"頁面已重新命名","successIndicator.contextGroupApplied":"脈絡群組已套用","successIndicator.namedContextGroupApplied":"{{colorName}} 脈絡群組已套用","successIndicator.viewRemoved":"從脈絡群組中移除的視圖","successIndicator.viewsRemoved":"從脈絡群組中移除的視圖","successIndicator.layoutApplied":"{{layoutName}} 版面已套用","successIndicator.workspaceDeleted":"工作空間已刪除","errorIndicator.pageSaveFailed":"頁面無法儲存","errorIndicator.workspaceSaveFailed":"工作空間無法儲存","errorIndicator.failedToDuplicatePage":"無法複寫頁面","infoIndicator.colorLinkAttempt":"我們嘗試對此索引標籤進行顏色連結，但網站/內容所有者尚未啟用該功能","global.cancel":"取消","global.confirm":"確認","global.save":"儲存","global.delete":"Delete ZH","appResults.header":"Featured Content ZH","recentlyClosed.header":"Recently Closed ZH","landingPage.subheader":"Apps and websites selected by an admin will show here ZH","aria.openBrowser":"開啟瀏覽器選單","aria.browserTabs":"瀏覽器索引標籤","aria.viewTab":"{{title}} 的視圖索引標籤","aria.closePage":"關閉 {{title}} 的頁面索引標籤按鈕","aria.closeTab":"關閉索引標籤 {{title}}","aria.title":"標題","aria.closeContextGroup":"使用 Esc 鍵關閉脈絡群組選取對話框","aria.colorLinking":"顯示或隱藏顏色連結","aria.applyColorLinking":"請選取要套用顏色連結的視圖","aria.assignColorLinkingCurrentView":"目前視圖分配給 {{name}} 脈絡群組","aria.assignColorLinkingCurrentViews":"目前視圖分配給 {{name}} 脈絡群組","aria.setColorLinkingActiveView":"將啟用視圖設定為 {{name}} 脈絡群組","aria.setColorLinkingActiveViews":"將啟用視圖設定為 {{name}} 脈絡群組","aria.escapeLayoutDialog":"使用 Esc 鍵關閉變更版面對話框","global.supertab":"Supertab ZH","global.tab":"Tab ZH","bookmarks.editBookmark":"Edit Bookmark ZH","bookmarks.bookmarkAdded":"Bookmark added ZH","bookmarks.done":"Done ZH","bookmarks.remove":"Remove ZH","bookmarks.bookmarksPanel":"Bookmarks Panel ZH","bookmarks.bookmarks":"Bookmarks ZH","bookmarks.allBookmarks":"All Bookmarks ZH","bookmarks.favorites":"Favorites ZH","bookmarks.searchBookmarks":"Search Bookmarks ZH","bookmarks.clearSearchInput":"Clear Search Input ZH","bookmarks.createFolder":"Create New Folder ZH","bookmarks.exitFolder":"Exit Folder ZH","bookmarks.newFolder":"New Folder ZH","bookmarks.namedFolder":"{{name}} Folder ZH","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings ZH","bookmarks.folderSettings":"{{name}} Folder Settings ZH","bookmarks.noResultsFound":"No results found ZH","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search ZH","bookmarks.nothingToShow":"Nothing to show yet ZH","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder ZH","bookmarks.resultsFoundIn":"Results found in {{name}} ZH","bookmarks.resultsInOtherFolders":"Results found in other folders ZH","bookmarks.allResultsFoundIn":"All results found in ZH","bookmarks.editName":"Edit Name ZH","bookmarks.move":"Move ZH","bookmarks.bookmarkAddedTitle":"Bookmark Added ZH","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" ZH","bookmarks.bookmarkEditedTitle":"Bookmark Edited ZH","enterpriseContextMenu.saveSupertab":"Save Supertab ZH","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... ZH","enterpriseContextMenu.duplicate":"Duplicate ZH","enterpriseContextMenu.deleteSupertab":"Delete Supertab ZH","enterpriseContextMenu.newTab":"New Tab ZH","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As ZH","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? ZH","saveSupertabCount_other":"Save {{count}} Supertabs before closing? ZH"},"enterpriseSaveModal.renameSupertab":"Rename ZH","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. ZH","enterpriseSaveModal.closeTab":"Close Tab ZH","enterpriseSaveModal.closeSupertab":"Close Supertab ZH","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. ZH","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? ZH","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. ZH","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved ZH","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. ZH","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted ZH","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. ZH","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab ZH","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab ZH","enterpriseCommandBar.switchToSupertab":"Switch to Supertab ZH","enterpriseCommandBar.goTo":"Go to {{type}} ZH","enterpriseCommandBar.viewMore":"View More ZH","sidePanel.aiCenter":"AI Center ZH","sidePanel.newChat":"New Chat ZH","sidePanel.toggleSidePanel":"Toggle Side Panel ZH","sidePanel.closeSidePanel":"Close Side Panel ZH","sidePanel.openAiCenter":"Open AI Center ZH","contextMenu.quitEnterpriseBrowser":"Quit ZH","dock.removeFavorite":"Remove ZH"}'), Ce = JSON.parse('{"contextMenu.newWindow":"New Window","contextMenu.newPage":"New Page","contextMenu.restore":"Restore to Last Saved Changes","contextMenu.switchWorkspace":"Switch Workspace","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"Appearance","contextMenu.saveWorkspace":"Save Workspace","contextMenu.saveWorkspaceAs":"Save Workspace As...","contextMenu.renameWorkspace":"Rename Workspace","contextMenu.deleteWorkspace":"Delete Workspace","contextMenu.downloads":"Downloads","contextMenu.savePage":"Save Page","contextMenu.savePageAs":"Save Page As...","contextMenu.print":"Print...","contextMenu.printScreen":"Print Screen","contextMenu.closeWindow":"Close Window","contextMenu.openStorefront":"Open Storefront","contextMenu.quitPlatform":"Quit {{platformLabel}}","contextMenu.newView":"New View","contextMenu.openView":"Open View with Default Web Browser","contextMenu.openViews":"Open Views with Default Web Browser","contextMenu.reload":"Reload","contextMenu.reloadView":"Reload View","contextMenu.reloadViews":"Reload Views","contextMenu.duplicate":"Duplicate","contextMenu.duplicateView":"Duplicate View","contextMenu.duplicateViews":"Duplicate Views","contextMenu.addView":"Add View to Channel","contextMenu.addViews":"Add Views to Channel","contextMenu.removeView":"Remove View from Channel","contextMenu.removeViews":"Remove Views from Channel","contextMenu.closeView":"Close View","contextMenu.closeViews":"Close Views","contextMenu.closeTab":"Close Tab","contextMenu.duplicatePage":"Duplicate Page","contextMenu.submenu.print":"Print","contextMenu.submenu.printAll":"Print All","saveMenu.saveWorkspaceAs":"Save Workspace As","saveMenu.savePageAs":"Save Page As","saveModal.enterValue":"Please enter a value","saveModal.alreadyExists":"{{title}} already exists.","saveModal.pleaseEnterValidName":"Please enter a valid name","saveModal.renamePage":"Rename Page","saveModal.closePage":"Close Page","saveModal.discardChanges":"Discard Changes","saveModal.discardAll":"Discard All","saveModal.saveAll":"Save All","saveModal.savePagesCount":"Save ({{count}}) pages before closing?","defaultPageTitle":"Untitled Page","enterpriseDefaultPageTitle":"Untitled Supertab","addNewPage":"New Page","addNewTab":"Add New Tab","addNewView":"New View","restoreModal":"Are you sure you want to restore to last saved changes?","modal.discardWarning":"Any unsaved changes will be discarded","modal.discardPageWarning":"Any unsaved changes to this page will be lost.","modal.saveChangesPrompt":"Save changes before closing?","modal.pageClose":"Page Close","switchWorkspaceModal":"Are you sure you want to switch to {{workspace}}?","switchWorkspaceModal.warning":"Any unsaved changes will be discarded","deleteWorkspaceModal":"Are you sure you want to permanently delete this workspace?","replaceWorkspaceModal.warning":"A Workspace with the name {{workspace}} already exists. Do you want to replace it?","replaceWorkspaceModal.warning.body":"A workspace with the same name already exists. Replacing it will overwrite its current contents.","replaceWorkspaceModal.replace":"Replace","closePlatform":"Close the platform","closePlatform.workspace":"Close the {{workspace}} Platform","closePlatform.warning":"Closing a platform will close any workspaces, apps or any processes that are running.","back":"Back","forward":"Forward","reload":"Reload","green":"Green","purple":"Purple","orange":"Orange","red":"Red","pink":"Pink","yellow":"Yellow","theme.light":"Light","theme.dark":"Dark","theme.system":"Sync with OS setting","toolbar.hideTabs":"Hide Tabs","toolbar.showTabs":"Show Tabs","toolbar.lock":"Lock","toolbar.unlock":"Unlock","toolbar.colorLinking":"Color Linking","toolbar.changeLayout":"Change Layout","toolbar.saveMenu":"Save Menu","toolbar.maximizeWindow":"Maximize Window","toolbar.restoreWindow":"Restore Window","toolbar.minimizeWindow":"Minimize Window","changeLayout.fullWidth":"Full Width","changeLayout.columns":"Columns","changeLayout.Rows":"Rows","changeLayout.Grid":"Grid","successIndicator.workspaceSwitched":"Workspace Switched","successIndicator.hidden":"Tabs are Hidden","successIndicator.shown":"Tabs are Shown","successIndicator.locked":"Page is Locked","successIndicator.unlocked":"Page is Unlocked","successIndicator.workspaceSaved":"Workspace saved","successIndicator.workspaceSavedAs":"Workspace saved as {{workspace}}","successIndicator.workspaceRenamed":"Workspace renamed","successIndicator.pageSaved":"Page Saved","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved.","successIndicator.pageCopySaved":"Page saved as {{title}}","successIndicator.pageRenamed":"Page renamed","successIndicator.contextGroupApplied":"Context group applied","successIndicator.namedContextGroupApplied":"{{colorName}} context group applied","successIndicator.viewRemoved":"View removed from context group","successIndicator.viewsRemoved":"Views removed from context group","successIndicator.layoutApplied":"{{layoutName}} layout applied","successIndicator.workspaceDeleted":"Workspace deleted","errorIndicator.pageSaveFailed":"Page failed to save","errorIndicator.workspaceSaveFailed":"Workspace failed to save","errorIndicator.failedToDuplicatePage":"Failed to duplicate Page","infoIndicator.colorLinkAttempt":"We attempted to color link this tab, but the site/content owner has not enabled it yet","global.cancel":"Cancel","global.confirm":"Confirm","global.save":"Save","global.delete":"Delete","appResults.header":"Featured Content","recentlyClosed.header":"Recently Closed","landingPage.subheader":"Apps and websites selected by an admin will show here","aria.openBrowser":"Open Browser Menu","aria.browserTabs":"Browser Tabs","aria.viewTab":"View Tab for {{title}}","aria.closePage":"Close Page Tab Button for {{title}}","aria.closeTab":"Close Tab {{title}}","aria.title":"Title","aria.closeContextGroup":"Use escape to close context group selection dialog","aria.colorLinking":"Show or hide color linking","aria.applyColorLinking":"Please select a view to apply color linking","aria.assignColorLinkingCurrentView":"Current view assigned to {{name}} context group","aria.assignColorLinkingCurrentViews":"Current views assigned to {{name}} context group","aria.setColorLinkingActiveView":"Set active view to {{name}} context group","aria.setColorLinkingActiveViews":"Set active views to {{name}} context group","aria.escapeLayoutDialog":"Use escape to close change layout dialog","global.supertab":"Supertab","global.tab":"Tab","bookmarks.editBookmark":"Edit Bookmark","bookmarks.bookmarkAdded":"Bookmark added","bookmarks.done":"Done","bookmarks.remove":"Remove","bookmarks.bookmarksPanel":"Bookmarks Panel","bookmarks.bookmarks":"Bookmarks","bookmarks.allBookmarks":"All Bookmarks","bookmarks.favorites":"Favorites","bookmarks.searchBookmarks":"Search Bookmarks","bookmarks.clearSearchInput":"Clear Search Input","bookmarks.createFolder":"Create New Folder","bookmarks.exitFolder":"Exit Folder","bookmarks.newFolder":"New Folder","bookmarks.namedFolder":"{{name}} Folder","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings","bookmarks.folderSettings":"{{name}} Folder Settings","bookmarks.noResultsFound":"No results found","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search","bookmarks.nothingToShow":"Nothing to show yet","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder","bookmarks.resultsFoundIn":"Results found in {{name}}","bookmarks.resultsInOtherFolders":"Results found in other folders","bookmarks.allResultsFoundIn":"All results found in","bookmarks.editName":"Edit Name","bookmarks.move":"Move","bookmarks.bookmarkAddedTitle":"Bookmark Added","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\"","bookmarks.bookmarkEditedTitle":"Bookmark Edited","enterpriseContextMenu.saveSupertab":"Save Supertab","enterpriseContextMenu.saveSupertabAs":"Save Supertab As...","enterpriseContextMenu.duplicate":"Duplicate","enterpriseContextMenu.deleteSupertab":"Delete Supertab","enterpriseContextMenu.newTab":"New Tab","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing?","saveSupertabCount_other":"Save {{count}} Supertabs before closing?"},"enterpriseSaveModal.renameSupertab":"Rename","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab.","enterpriseSaveModal.closeTab":"Close Tab","enterpriseSaveModal.closeSupertab":"Close Supertab","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost.","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab?","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent.","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved.","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted.","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab","enterpriseCommandBar.switchToSupertab":"Switch to Supertab","enterpriseCommandBar.goTo":"Go to {{type}}","enterpriseCommandBar.viewMore":"View More","sidePanel.aiCenter":"AI Center","sidePanel.newChat":"New Chat","sidePanel.toggleSidePanel":"Toggle Side Panel","sidePanel.closeSidePanel":"Close Side Panel","sidePanel.openAiCenter":"Open AI Center","contextMenu.quitEnterpriseBrowser":"Quit","dock.removeFavorite":"Remove","dock.workspaceManagement":{"restoreSuccess":"Last Saved Changes Restored"}}'), ke = JSON.parse('{"contextMenu.newWindow":"Neues Fenster","contextMenu.newPage":"Neue Seite","contextMenu.restore":"Wiederherstellen der zuletzt gespeicherten Änderungen","contextMenu.switchWorkspace":"Workspace wechseln","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"Erscheinungsbild","contextMenu.saveWorkspace":"Workspace speichern","contextMenu.saveWorkspaceAs":"Workspace speichern unter...","contextMenu.renameWorkspace":"Workspace umbenennen","contextMenu.deleteWorkspace":"Workspace löschen","contextMenu.downloads":"Downloads","contextMenu.savePage":"Seite speichern","contextMenu.savePageAs":"Seite speichern unter...","contextMenu.print":"Drucken...","contextMenu.printScreen":"Bildschirmansicht drucken","contextMenu.closeWindow":"Fenster schließen","contextMenu.openStorefront":"Schaufenster öffnen","contextMenu.quitPlatform":"Plattform verlassen","contextMenu.newView":"Neue Ansicht","contextMenu.openView":"Ansicht mit Standard-Webbrowser öffnen","contextMenu.openViews":"Ansichten mit Standard-Webbrowser öffnen","contextMenu.reload":"Reload DE","contextMenu.reloadView":"Ansicht neu laden","contextMenu.reloadViews":"Ansichten neu laden","contextMenu.duplicate":"Duplicate DE","contextMenu.duplicateView":"Ansicht duplizieren","contextMenu.duplicateViews":"Ansichten duplizieren","contextMenu.addView":"Ansicht zum Channel hinzufügen","contextMenu.addViews":"Ansichten zum Channel hinzufügen","contextMenu.removeView":"Ansicht aus dem Channel entfernen","contextMenu.removeViews":"Ansichten aus dem Channel entfernen","contextMenu.closeView":"Ansicht schließen","contextMenu.closeViews":"Ansichten schließen","contextMenu.closeTab":"Close Tab DE","contextMenu.duplicatePage":"Seite duplizieren","contextMenu.submenu.print":"Drucken","contextMenu.submenu.printAll":"Alle drucken","saveMenu.saveWorkspaceAs":"Workspace speichern unter","saveMenu.savePageAs":"Seite speichern unter","saveModal.enterValue":"Please enter a value DE","saveModal.alreadyExists":"{{title}} existiert bereits.","saveModal.pleaseEnterValidName":"Bitte geben Sie einen gültigen Namen ein","saveModal.renamePage":"Seite umbenennen","saveModal.closePage":"Seite schließen","saveModal.discardChanges":"Änderungen verwerfen","saveModal.discardAll":"Alle verwerfen","saveModal.saveAll":"Alle speichern","saveModal.savePagesCount":"({{count}}) Seiten vor dem Schließen speichern?","defaultPageTitle":"Untitled Page DE","enterpriseDefaultPageTitle":"Untitled Supertab DE","addNewPage":"Neue Seite hinzufügen","addNewTab":"Neuen Tab hinzufügen","addNewView":"Neue Ansicht","restoreModal":"Sind Sie sicher, dass Sie die zuletzt gespeicherten Änderungen wiederherstellen wollen?","modal.discardWarning":"Alle nicht gespeicherten Änderungen werden verworfen","modal.discardPageWarning":"Alle nicht gespeicherten Änderungen auf dieser Seite gehen verloren.","modal.saveChangesPrompt":"Änderungen vor dem Schließen speichern?","modal.pageClose":"Seite schließen","switchWorkspaceModal":"Sind Sie sicher, dass Sie zu {{workspace}}wechseln wollen?","switchWorkspaceModal.warning":"Alle nicht gespeicherten Änderungen werden verworfen","deleteWorkspaceModal":"Sind Sie sicher, dass Sie diesen Workspace dauerhaft löschen wollen?","replaceWorkspaceModal.warning":"Ein Workspace mit dem Namen {{workspace}} existiert bereits. Möchten Sie ihn ersetzen?","replaceWorkspaceModal.warning.body":"Ein Workspace mit demselben Namen existiert bereits. Wenn Sie ihn ersetzen, wird der aktuelle Inhalt überschrieben.","replaceWorkspaceModal.replace":"Ersetzen","closePlatform":"Plattform schließen","closePlatform.workspace":"Die {{workspace}} Plattform schließen","closePlatform.warning":"Wenn Sie eine Plattform schließen, werden alle Workspaces, Apps und laufenden Prozesse beendet.","back":"Zurück","forward":"Weiter","reload":"Neu laden","green":"Grün","purple":"Lila","orange":"Orange","red":"Rot","pink":"Pink","yellow":"Gelb","theme.light":"Hell","theme.dark":"Dunkel","theme.system":"Synchronisierung mit OS-Einstellung","toolbar.hideTabs":"Tabs ausblenden","toolbar.showTabs":"Tabs anzeigen","toolbar.lock":"Sperren","toolbar.unlock":"Freischalten","toolbar.colorLinking":"Farbverknüpfung","toolbar.changeLayout":"Layout ändern","toolbar.saveMenu":"Menü speichern","toolbar.maximizeWindow":"Fenster maximieren","toolbar.restoreWindow":"Fenster wiederherstellen","toolbar.minimizeWindow":"Fenster minimieren","changeLayout.fullWidth":"Volle Breite","changeLayout.columns":"Spalten","changeLayout.Rows":"Zeilen","changeLayout.Grid":"Raster","successIndicator.workspaceSwitched":"Workspace gewechselt","successIndicator.hidden":"Tabs sind ausgeblendet","successIndicator.shown":"Tabs werden angezeigt","successIndicator.locked":"Seite ist gesperrt","successIndicator.unlocked":"Seite ist freigeschaltet","successIndicator.workspaceSaved":"Workspace gespeichert","successIndicator.workspaceSavedAs":"Workspace gespeichert als {{workspace}}","successIndicator.workspaceRenamed":"Workspace umbenannt","successIndicator.pageSaved":"Seite gespeichert","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. DE","successIndicator.pageCopySaved":"Seite gespeichert als {{title}}","successIndicator.pageRenamed":"Seite umbenannt","successIndicator.contextGroupApplied":"Angewandte Kontextgruppe","successIndicator.namedContextGroupApplied":"{{colorName}} angewandte Kontextgruppe","successIndicator.viewRemoved":"Ansicht aus der Kontextgruppe entfernt","successIndicator.viewsRemoved":"Ansichten aus der Kontextgruppe entfernt","successIndicator.layoutApplied":"{{layoutName}} angewandtes Layout","successIndicator.workspaceDeleted":"Workspace gelöscht","errorIndicator.pageSaveFailed":"Seite konnte nicht gespeichert werden","errorIndicator.workspaceSaveFailed":"Workspace konnte nicht gespeichert werden","errorIndicator.failedToDuplicatePage":"Seite kann nicht dupliziert werden","infoIndicator.colorLinkAttempt":"Wir haben versucht, diesem Tab eine Farbe zuordnen, aber der Eigentümer der Website/des Inhalts hat sie noch nicht aktiviert","global.cancel":"Abbrechen","global.confirm":"Bestätigen","global.save":"Speichern","global.delete":"Delete DE","appResults.header":"Featured Content DC","recentlyClosed.header":"Recently Closed DC","landingPage.subheader":"Apps and websites selected by an admin will show here DE","aria.openBrowser":"Browser-Menü öffnen","aria.browserTabs":"Browser-Tab","aria.viewTab":"Tab „Ansicht“ für {{title}}","aria.closePage":"Button „Seite schließen“ für {{title}}","aria.closeTab":"Tab schließen {{title}}","aria.title":"Bezeichnung","aria.closeContextGroup":"Verwenden Sie die Escape-Taste, um den Dialog zur Auswahl von Kontextgruppen zu schließen","aria.colorLinking":"Farbverknüpfung ein- oder ausblenden","aria.applyColorLinking":"Bitte wählen Sie eine Ansicht, um die Farbverknüpfung anzuwenden","aria.assignColorLinkingCurrentView":"Aktuelle Ansicht, die der Kontextgruppe {{name}} zugeordnet ist","aria.assignColorLinkingCurrentViews":"Aktuelle Ansichten, die der Kontextgruppe {{name}} zugeordnet sind","aria.setColorLinkingActiveView":"Aktive Ansicht auf die Kontextgruppe {{name}} setzen","aria.setColorLinkingActiveViews":"Aktive Ansichten auf die Kontextgruppe {{name}} setzen","aria.escapeLayoutDialog":"Verwenden Sie die Escape-Taste, um den Dialog zur Layoutänderung zu schließen","global.supertab":"Supertab DE","global.tab":"Tab DE","bookmarks.editBookmark":"Edit Bookmark DE","bookmarks.bookmarkAdded":"Bookmark added DE","bookmarks.done":"Done DE","bookmarks.remove":"Remove DE","bookmarks.bookmarksPanel":"Bookmarks Panel DE","bookmarks.bookmarks":"Bookmarks DE","bookmarks.allBookmarks":"All Bookmarks DE","bookmarks.favorites":"Favorites DE","bookmarks.searchBookmarks":"Search Bookmarks DE","bookmarks.clearSearchInput":"Clear Search Input DE","bookmarks.createFolder":"Create New Folder DE","bookmarks.exitFolder":"Exit Folder DE","bookmarks.newFolder":"New Folder DE","bookmarks.namedFolder":"{{name}} Folder DE","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings DE","bookmarks.folderSettings":"{{name}} Folder Settings DE","bookmarks.noResultsFound":"No results found DE","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search DE","bookmarks.nothingToShow":"Nothing to show yet DE","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder DE","bookmarks.resultsFoundIn":"Results found in {{name}} DE","bookmarks.resultsInOtherFolders":"Results found in other folders DE","bookmarks.allResultsFoundIn":"All results found in DE","bookmarks.editName":"Edit Name DE","bookmarks.move":"Move DE","bookmarks.bookmarkAddedTitle":"Bookmark Added DE","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" DE","bookmarks.bookmarkEditedTitle":"Bookmark Edited DE","enterpriseContextMenu.saveSupertab":"Save Supertab DE","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... DE","enterpriseContextMenu.duplicate":"Duplicate DE","enterpriseContextMenu.deleteSupertab":"Delete Supertab DE","enterpriseContextMenu.newTab":"New Tab DE","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As DE","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? DE","saveSupertabCount_other":"Save {{count}} Supertabs before closing? DE"},"enterpriseSaveModal.renameSupertab":"Rename DE","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. DE","enterpriseSaveModal.closeTab":"Close Tab DE","enterpriseSaveModal.closeSupertab":"Close Supertab DE","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. DE","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? DE","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. DE","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved DE","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. DE","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted DE","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. DE","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab DE","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab DE","enterpriseCommandBar.switchToSupertab":"Switch to Supertab DE","enterpriseCommandBar.goTo":"Go to {{type}} DE","enterpriseCommandBar.viewMore":"View More DE","sidePanel.aiCenter":"AI Center DE","sidePanel.newChat":"New Chat DE","sidePanel.toggleSidePanel":"Toggle Side Panel DE","sidePanel.closeSidePanel":"Close Side Panel DE","sidePanel.openAiCenter":"Open AI Center DE","contextMenu.quitEnterpriseBrowser":"Quit DE","dock.removeFavorite":"Remove DE"}'), he = JSON.parse('{"contextMenu.newWindow":"新しいウィンドウ","contextMenu.newPage":"新しいページ","contextMenu.restore":"最後に保存された変更に戻す","contextMenu.switchWorkspace":"ワークスペースに切り替える","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"外観","contextMenu.saveWorkspace":"ワークスペースを保存","contextMenu.saveWorkspaceAs":"ワークスペースを別名で保存...","contextMenu.renameWorkspace":"ワークスペース名を変更","contextMenu.deleteWorkspace":"ワークスペースを削除","contextMenu.downloads":"ダウンロード","contextMenu.savePage":"ページを保存","contextMenu.savePageAs":"ページを別名で保存...","contextMenu.print":"印刷...","contextMenu.printScreen":"プリントスクリーン","contextMenu.closeWindow":"ウィンドウを閉じる","contextMenu.openStorefront":"ストアフロントを開く","contextMenu.quitPlatform":"プラットフォームを終了する","contextMenu.newView":"新しいビュー","contextMenu.openView":"デフォルトのウェブブラウザーでビューを開く","contextMenu.openViews":"デフォルトのウェブブラウザーでビューを開く","contextMenu.reload":"Reload JP","contextMenu.reloadView":"ビューをリロード","contextMenu.reloadViews":"ビューをリロード","contextMenu.duplicate":"Duplicate JP","contextMenu.duplicateView":"ビューを複製","contextMenu.duplicateViews":"ビューを複製","contextMenu.addView":"ビューをチャネルに追加","contextMenu.addViews":"ビューをチャネルに追加","contextMenu.removeView":"チャネルからビューを削除","contextMenu.removeViews":"チャネルからビューを削除","contextMenu.closeView":"ビューを閉じる","contextMenu.closeViews":"ビューを閉じる","contextMenu.closeTab":"Close Tab JP","contextMenu.duplicatePage":"ページを複製","contextMenu.submenu.print":"印刷","contextMenu.submenu.printAll":"すべてを印刷","saveMenu.saveWorkspaceAs":"ワークスペースを別名で保存","saveMenu.savePageAs":"ページを別名で保存","saveModal.enterValue":"Please enter a value JP","saveModal.alreadyExists":"{{title}}はすでに存在しています。","saveModal.pleaseEnterValidName":"有効な名前を入力してください","saveModal.renamePage":"ページ名を変更","saveModal.closePage":"ページを閉じる","saveModal.discardChanges":"変更を破棄","saveModal.discardAll":"すべて破棄","saveModal.saveAll":"すべて保存","saveModal.savePagesCount":"閉じる前に（{{count}}）つのページを保存しますか？","defaultPageTitle":"Untitled Page JP","enterpriseDefaultPageTitle":"Untitled Supertab JP","addNewPage":"新しいページを追加","addNewTab":"新しいタブを追加","addNewView":"新しいビュー","restoreModal":"本当に最後に保存された変更に戻しますか？","modal.discardWarning":"保存されていない変更は破棄されます","modal.discardPageWarning":"保存されていないこのページへの変更は失われます。","modal.saveChangesPrompt":"閉じる前に変更を保存しますか？","modal.pageClose":"ページを閉じる","switchWorkspaceModal":"本当に{{workspace}}に切り替えますか？","switchWorkspaceModal.warning":"保存されていない変更は破棄されます","deleteWorkspaceModal":"このワークスペースを永久に削除してもよろしいですか？","replaceWorkspaceModal.warning":"{{workspace}}という名前のワークスペースがすでに存在します。置き換えますか？","replaceWorkspaceModal.warning.body":"同じ名前のワークスペースがすでに存在します。置き換えると、現在の内容は上書きされます。","replaceWorkspaceModal.replace":"置き換える","closePlatform":"プラットフォームを閉じる","closePlatform.workspace":"{{workspace}}プラットフォームを閉じる","closePlatform.warning":"プラットフォームを閉じると、実行中のワークスペース、アプリ、プロセスがすべて閉じます。","back":"戻る","forward":"進む","reload":"リロード","green":"グリーン","purple":"パープル","orange":"オレンジ","red":"レッド","pink":"ピンク","yellow":"イエロー","theme.light":"ライト","theme.dark":"ダーク","theme.system":"OSの設定と同期","toolbar.hideTabs":"タブを非表示","toolbar.showTabs":"タブを表示","toolbar.lock":"ロック","toolbar.unlock":"ロック解除","toolbar.colorLinking":"カラーリンク","toolbar.changeLayout":"レイアウトを変更","toolbar.saveMenu":"メニューを保存","toolbar.maximizeWindow":"ウィンドウを最大化する","toolbar.restoreWindow":"ウィンドウを復元","toolbar.minimizeWindow":"ウィンドウを最小化する","changeLayout.fullWidth":"全幅","changeLayout.columns":"列","changeLayout.Rows":"行","changeLayout.Grid":"グリッド","successIndicator.workspaceSwitched":"ワークスペースが切り替わりました","successIndicator.hidden":"タブが非表示になっています","successIndicator.shown":"タブが表示されています","successIndicator.locked":"ページがロックされています","successIndicator.unlocked":"ページのロックが解除されています","successIndicator.workspaceSaved":"ワークスペースが保存されました","successIndicator.workspaceSavedAs":"ワークスペースが{{workspace}}として保存されました","successIndicator.workspaceRenamed":"ワークスペース名が変更されました","successIndicator.pageSaved":"ページが保存されました","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. JP","successIndicator.pageCopySaved":"ページが{{title}}として保存されました","successIndicator.pageRenamed":"ページ名が変更されました","successIndicator.contextGroupApplied":"コンテキストグループが適用されました","successIndicator.namedContextGroupApplied":"{{colorName}}コンテキストグループが適用されました","successIndicator.viewRemoved":"コンテキストグループからビューが削除されました","successIndicator.viewsRemoved":"コンテキストグループからビューが削除されました","successIndicator.layoutApplied":"{{layoutName}}レイアウトが適用されました","successIndicator.workspaceDeleted":"ワークスペースが削除されました","errorIndicator.pageSaveFailed":"ページを保存できませんでした","errorIndicator.workspaceSaveFailed":"ワークスペースを保存できませんでした","errorIndicator.failedToDuplicatePage":"ページを複製できませんでした","infoIndicator.colorLinkAttempt":"このタブをカラーリンクしようとしましたが、サイト/コンテンツのオーナーがまだこれを有効にしていません","global.cancel":"キャンセル","global.confirm":"確認","global.save":"保存","global.delete":"Delete JP","appResults.header":"Featured content JP","recentlyClosed.header":"Recently Closed JP","landingPage.subheader":"Apps and websites selected by an admin will show here JP","aria.openBrowser":"ブラウザーメニューを開く","aria.browserTabs":"ブラウザータブ","aria.viewTab":"{{title}}のタブを表示","aria.closePage":"{{title}}のページタブボタンを閉じる","aria.closeTab":"{{title}}タブを閉じる","aria.title":"タイトル","aria.closeContextGroup":"エスケープを使用して、コンテキストグループ選択ダイアログを閉じる","aria.colorLinking":"カラーリンクの表示/非表示","aria.applyColorLinking":"カラーリンクを適用するビューを選択してください","aria.assignColorLinkingCurrentView":"現在のビューは{{name}}コンテキストグループに割り当てられています","aria.assignColorLinkingCurrentViews":"現在のビューは{{name}}コンテキストグループに割り当てられています","aria.setColorLinkingActiveView":"アクティブビューを{{name}}コンテキストグループに設定","aria.setColorLinkingActiveViews":"アクティブビューを{{name}}コンテキストグループに設定","aria.escapeLayoutDialog":"エスケープを使用して、レイアウト変更選択ダイアログを閉じる","global.supertab":"Supertab JP","global.tab":"Tab JP","bookmarks.editBookmark":"Edit Bookmark JP","bookmarks.bookmarkAdded":"Bookmark added JP","bookmarks.done":"Done JP","bookmarks.remove":"Remove JP","bookmarks.bookmarksPanel":"Bookmarks Panel JP","bookmarks.bookmarks":"Bookmarks JP","bookmarks.allBookmarks":"All Bookmarks JP","bookmarks.favorites":"Favorites JP","bookmarks.searchBookmarks":"Search Bookmarks JP","bookmarks.clearSearchInput":"Clear Search Input JP","bookmarks.createFolder":"Create New Folder JP","bookmarks.exitFolder":"Exit Folder JP","bookmarks.newFolder":"New Folder JP","bookmarks.namedFolder":"{{name}} Folder JP","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings JP","bookmarks.folderSettings":"{{name}} Folder Settings JP","bookmarks.noResultsFound":"No results found JP","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search JP","bookmarks.nothingToShow":"Nothing to show yet JP","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder JP","bookmarks.resultsFoundIn":"Results found in {{name}} JP","bookmarks.resultsInOtherFolders":"Results found in other folders JP","bookmarks.allResultsFoundIn":"All results found in JP","bookmarks.editName":"Edit Name JP","bookmarks.move":"Move JP","bookmarks.bookmarkAddedTitle":"Bookmark Added JP","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" JP","bookmarks.bookmarkEditedTitle":"Bookmark Edited JP","enterpriseContextMenu.saveSupertab":"Save Supertab JP","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... JP","enterpriseContextMenu.duplicate":"Duplicate JP","enterpriseContextMenu.deleteSupertab":"Delete Supertab JP","enterpriseContextMenu.newTab":"New Tab JP","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As JP","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? JP","saveSupertabCount_other":"Save {{count}} Supertabs before closing? JP"},"enterpriseSaveModal.renameSupertab":"Rename JP","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. JP","enterpriseSaveModal.closeTab":"Close Tab JP","enterpriseSaveModal.closeSupertab":"Close Supertab JP","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. JP","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? JP","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. JP","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved JP","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. JP","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted JP","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. JP","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab JP","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab JP","enterpriseCommandBar.switchToSupertab":"Switch to Supertab JP","enterpriseCommandBar.goTo":"Go to {{type}} JP","enterpriseCommandBar.viewMore":"View More JP","sidePanel.aiCenter":"AI Center JP","sidePanel.newChat":"New Chat JP","sidePanel.toggleSidePanel":"Toggle Side Panel JP","sidePanel.closeSidePanel":"Close Side Panel JP","sidePanel.openAiCenter":"Open AI Center JP","contextMenu.quitEnterpriseBrowser":"Quit JP","dock.removeFavorite":"Remove JP"}'), Ae = JSON.parse('{"contextMenu.newWindow":"새 창","contextMenu.newPage":"새 페이지","contextMenu.restore":"마지막으로 저장한 변경 사항으로 복원","contextMenu.switchWorkspace":"작업 공간 전환","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"모양","contextMenu.saveWorkspace":"작업 공간 저장","contextMenu.saveWorkspaceAs":"다른 이름으로 작업 공간 저장...","contextMenu.renameWorkspace":"작업 공간 이름 바꾸기","contextMenu.deleteWorkspace":"작업 공간 삭제","contextMenu.downloads":"다운로드","contextMenu.savePage":"페이지 저장","contextMenu.savePageAs":"다른 이름으로 페이지 저장...","contextMenu.print":"인쇄...","contextMenu.printScreen":"화면 인쇄","contextMenu.closeWindow":"창 닫기","contextMenu.openStorefront":"매장 열기","contextMenu.quitPlatform":"플랫폼 종료","contextMenu.newView":"새 뷰","contextMenu.openView":"기본 웹 브라우저로 뷰 열기","contextMenu.openViews":"기본 웹 브라우저로 뷰 열기","contextMenu.reload":"Reload KR","contextMenu.reloadView":"뷰 다시 로드","contextMenu.reloadViews":"뷰 다시 로드","contextMenu.duplicate":"Duplicate KR","contextMenu.duplicateView":"뷰 복제","contextMenu.duplicateViews":"뷰 복제","contextMenu.addView":"채널에 뷰 추가","contextMenu.addViews":"채널에 뷰 추가","contextMenu.removeView":"채널에서 뷰 제거","contextMenu.removeViews":"채널에서 뷰 제거","contextMenu.closeView":"뷰 닫기","contextMenu.closeViews":"뷰 닫기","contextMenu.closeTab":"Close Tab KR","contextMenu.duplicatePage":"페이지 복제","contextMenu.submenu.print":"인쇄","contextMenu.submenu.printAll":"모두 인쇄","saveMenu.saveWorkspaceAs":"다른 이름으로 작업 공간 저장","saveMenu.savePageAs":"다른 이름으로 페이지 저장","saveModal.enterValue":"Please enter a value KR","saveModal.alreadyExists":"{{title}}이(가) 이미 존재합니다.","saveModal.pleaseEnterValidName":"유효한 이름을 입력하십시오.","saveModal.renamePage":"페이지 이름 바꾸기","saveModal.closePage":"페이지 닫기","saveModal.discardChanges":"변경 사항 폐기","saveModal.discardAll":"모두 폐기","saveModal.saveAll":"모두 저장","saveModal.savePagesCount":"닫기 전에 페이지({{count}}개)를 저장하시겠습니까?","defaultPageTitle":"Untitled Page KR","enterpriseDefaultPageTitle":"Untitled Supertab KR","addNewPage":"새 페이지 추가","addNewTab":"새 탭 추가","addNewView":"새 뷰","restoreModal":"마지막으로 저장한 변경 사항으로 복원하시겠습니까?","modal.discardWarning":"저장하지 않은 변경 사항은 모두 폐기됩니다","modal.discardPageWarning":"이 페이지의 저장하지 않은 변경 사항은 모두 손실됩니다.","modal.saveChangesPrompt":"닫기 전에 변경 사항을 저장하시겠습니까?","modal.pageClose":"페이지 닫기","switchWorkspaceModal":"{{workspace}}(으)로 전환하시겠습니까?","switchWorkspaceModal.warning":"저장하지 않은 변경 사항은 모두 폐기됩니다","deleteWorkspaceModal":"이 작업 공간을 영구적으로 삭제하시겠습니까?","replaceWorkspaceModal.warning":"{{workspace}}(이)라는 이름의 작업 공간이 이미 존재합니다. 교체하시겠습니까?","replaceWorkspaceModal.warning.body":"같은 이름의 작업 공간이 이미 존재합니다. 교체하면 현재 내용을 덮어쓰게 됩니다.","replaceWorkspaceModal.replace":"교체","closePlatform":"플랫폼 닫기","closePlatform.workspace":"{{workspace}} 플랫폼 닫기","closePlatform.warning":"플랫폼을 닫으면 실행 중인 모든 작업 공간, 앱 또는 프로세스가 닫힙니다.","back":"뒤로 가기","forward":"앞으로 가기","reload":"새로고침","green":"녹색","purple":"보라색","orange":"오렌지색","red":"빨간색","pink":"핑크색","yellow":"노란색","theme.light":"밝은","theme.dark":"어두운","theme.system":"OS 설정과 동기화","toolbar.hideTabs":"탭 숨기기","toolbar.showTabs":"탭 표시","toolbar.lock":"잠금","toolbar.unlock":"잠금 해제","toolbar.colorLinking":"색상 연결","toolbar.changeLayout":"레이아웃 변경","toolbar.saveMenu":"저장 메뉴","toolbar.maximizeWindow":"창 최대화","toolbar.restoreWindow":"창 복원","toolbar.minimizeWindow":"창 최소화","changeLayout.fullWidth":"전체 너비","changeLayout.columns":"열","changeLayout.Rows":"행","changeLayout.Grid":"그리드","successIndicator.workspaceSwitched":"작업 공간 전환","successIndicator.hidden":"탭 숨김","successIndicator.shown":"탭 표시","successIndicator.locked":"페이지 잠금","successIndicator.unlocked":"페이지 잠금 해제됨","successIndicator.workspaceSaved":"작업 공간 저장됨","successIndicator.workspaceSavedAs":"작업 공간이 {{workspace}}(으)로 저장됨","successIndicator.workspaceRenamed":"작업 공간 이름 변경됨","successIndicator.pageSaved":"페이지 저장됨","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. KR","successIndicator.pageCopySaved":"페이지가 {{title}}(으)로 저장됨","successIndicator.pageRenamed":"페이지 이름 변경됨","successIndicator.contextGroupApplied":"컨텍스트 그룹 적용됨","successIndicator.namedContextGroupApplied":"{{colorName}} 컨텍스트 그룹 적용됨","successIndicator.viewRemoved":"컨텍스트 그룹에서 뷰 제거됨","successIndicator.viewsRemoved":"컨텍스트 그룹에서 뷰 제거됨","successIndicator.layoutApplied":"{{layoutName}} 레이아웃 적용됨","successIndicator.workspaceDeleted":"작업 공간 삭제됨","errorIndicator.pageSaveFailed":"페이지 저장 실패","errorIndicator.workspaceSaveFailed":"작업 공간 저장 실패","errorIndicator.failedToDuplicatePage":"페이지 복제 실패","infoIndicator.colorLinkAttempt":"이 탭의 색상 링크를 시도했지만 사이트/콘텐츠 소유자가 아직 활성화하지 않았습니다.","global.cancel":"취소","global.confirm":"확인","global.save":"저장","global.delete":"Delete KR","appResults.header":"Featured Content KR","recentlyClosed.header":"Recently Closed KR","landingPage.subheader":"Apps and websites selected by an admin will show here KR","aria.openBrowser":"브라우저 메뉴 열기","aria.browserTabs":"브라우저 탭","aria.viewTab":"{{title}}의 뷰 탭","aria.closePage":"{{title}}의 페이지 닫기 탭","aria.closeTab":"탭 {{title}} 닫기","aria.title":"제목","aria.closeContextGroup":"이스케이프를 사용하여 컨텍스트 그룹 선택 대화상자 닫기","aria.colorLinking":"색상 연결 표시 또는 숨기기","aria.applyColorLinking":"색상 연결을 적용하려면 뷰를 선택하십시오.","aria.assignColorLinkingCurrentView":"{{name}} 컨텍스트 그룹에 할당된 현재 뷰","aria.assignColorLinkingCurrentViews":"{{name}} 컨텍스트 그룹에 할당된 현재 뷰","aria.setColorLinkingActiveView":"활성 뷰를 {{name}} 컨텍스트 그룹으로 설정","aria.setColorLinkingActiveViews":"활성 뷰를 {{name}} 컨텍스트 그룹으로 설정","aria.escapeLayoutDialog":"이스케이프를 사용하여 레이아웃 변경 대화상자 닫기","global.supertab":"Supertab KR","global.tab":"Tab KR","bookmarks.editBookmark":"Edit Bookmark KR","bookmarks.bookmarkAdded":"Bookmark added KR","bookmarks.done":"Done KR","bookmarks.remove":"Remove KR","bookmarks.bookmarksPanel":"Bookmarks Panel KR","bookmarks.bookmarks":"Bookmarks KR","bookmarks.allBookmarks":"All Bookmarks KR","bookmarks.favorites":"Favorites KR","bookmarks.searchBookmarks":"Search Bookmarks KR","bookmarks.clearSearchInput":"Clear Search Input KR","bookmarks.createFolder":"Create New Folder KR","bookmarks.exitFolder":"Exit Folder KR","bookmarks.newFolder":"New Folder KR","bookmarks.namedFolder":"{{name}} Folder KR","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings KR","bookmarks.folderSettings":"{{name}} Folder Settings KR","bookmarks.noResultsFound":"No results found KR","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search KR","bookmarks.nothingToShow":"Nothing to show yet KR","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder KR","bookmarks.resultsFoundIn":"Results found in {{name}} KR","bookmarks.resultsInOtherFolders":"Results found in other folders KR","bookmarks.allResultsFoundIn":"All results found in KR","bookmarks.editName":"Edit Name KR","bookmarks.move":"Move KR","bookmarks.bookmarkAddedTitle":"Bookmark Added KR","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" KR","bookmarks.bookmarkEditedTitle":"Bookmark Edited KR","enterpriseContextMenu.saveSupertab":"Save Supertab KR","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... KR","enterpriseContextMenu.duplicate":"Duplicate KR","enterpriseContextMenu.deleteSupertab":"Delete Supertab KR","enterpriseContextMenu.newTab":"New Tab KR","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As KR","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? KR","saveSupertabCount_other":"Save {{count}} Supertabs before closing? KR"},"enterpriseSaveModal.renameSupertab":"Rename KR","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. KR","enterpriseSaveModal.closeTab":"Close Tab KR","enterpriseSaveModal.closeSupertab":"Close Supertab KR","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. KR","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? KR","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. KR","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved KR","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. KR","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted KR","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. KR","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab KR","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab KR","enterpriseCommandBar.switchToSupertab":"Switch to Supertab KR","enterpriseCommandBar.goTo":"Go to {{type}} KR","enterpriseCommandBar.viewMore":"View More KR","sidePanel.aiCenter":"AI Center KR","sidePanel.newChat":"New Chat KR","sidePanel.toggleSidePanel":"Toggle Side Panel KR","sidePanel.closeSidePanel":"Close Side Panel KR","sidePanel.openAiCenter":"Open AI Center KR","contextMenu.quitEnterpriseBrowser":"Quit KR","dock.removeFavorite":"Remove KR"}'), ct = JSON.parse('{"contextMenu.newWindow":"Новое окно","contextMenu.newPage":"Новая страница","contextMenu.restore":"Восстановить последние сохраненные изменения","contextMenu.switchWorkspace":"Переключить рабочую область","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"Внешний вид","contextMenu.saveWorkspace":"Сохранить рабочую область","contextMenu.saveWorkspaceAs":"Сохранить рабочую область как...","contextMenu.renameWorkspace":"Переименовать рабочую область","contextMenu.deleteWorkspace":"Удалить рабочую область","contextMenu.downloads":"Загрузки","contextMenu.savePage":"Сохранить страницу","contextMenu.savePageAs":"Сохранить страницу как...","contextMenu.print":"Печать...","contextMenu.printScreen":"Распечатать экран","contextMenu.closeWindow":"Закрыть окно","contextMenu.openStorefront":"Открыть Storefront","contextMenu.quitPlatform":"Выйти из платформы","contextMenu.newView":"Новое представление","contextMenu.openView":"Открыть представление с помощью веб-браузера по умолчанию","contextMenu.openViews":"Открыть представления с помощью веб-браузера по умолчанию","contextMenu.reload":"Reload RU","contextMenu.reloadView":"Перезагрузить представление","contextMenu.reloadViews":"Перезагрузить представления","contextMenu.duplicate":"Duplicate RU","contextMenu.duplicateView":"Дублировать представление","contextMenu.duplicateViews":"Дублировать представления","contextMenu.addView":"Добавить представление на канал","contextMenu.addViews":"Добавить представления на канал","contextMenu.removeView":"Удалить представление из канала","contextMenu.removeViews":"Удалить представления из канала","contextMenu.closeView":"Закрыть представление","contextMenu.closeViews":"Закрыть представления","contextMenu.closeTab":"Close Tab RU","contextMenu.duplicatePage":"Дублировать страницу","contextMenu.submenu.print":"Печатать","contextMenu.submenu.printAll":"Печатать все","saveMenu.saveWorkspaceAs":"Сохранить рабочую область как","saveMenu.savePageAs":"Сохранить страницу как","saveModal.enterValue":"Please enter a value RU","saveModal.alreadyExists":"{{title}} уже существует.","saveModal.pleaseEnterValidName":"Введите подходящее имя","saveModal.renamePage":"Переименовать страницу","saveModal.closePage":"Закрыть страницу","saveModal.discardChanges":"Отменить изменения","saveModal.discardAll":"Отменить все","saveModal.saveAll":"Сохранить все","saveModal.savePagesCount":"Сохранить ({{count}}) страниц перед закрытием?","defaultPageTitle":"Untitled Page RU","enterpriseDefaultPageTitle":"Untitled Supertab RU","addNewPage":"Добавить новую страницу","addNewTab":"Добавить новую вкладку","addNewView":"Новое представление","restoreModal":"Вы уверены, что хотите восстановить последние сохраненные изменения?","modal.discardWarning":"Все несохраненные изменения будут отменены","modal.discardPageWarning":"Все несохраненные изменения на этой странице будут потеряны.","modal.saveChangesPrompt":"Сохранить изменения перед закрытием?","modal.pageClose":"Закрыть страницу","switchWorkspaceModal":"Вы уверены, что хотите перейти в {{workspace}}?","switchWorkspaceModal.warning":"Все несохраненные изменения будут отменены","deleteWorkspaceModal":"Вы уверены, что хотите навсегда удалить эту рабочую область?","replaceWorkspaceModal.warning":"Рабочая область с именем {{workspace}} уже существует. Вы хотите заменить ее?","replaceWorkspaceModal.warning.body":"Рабочая область с таким же именем уже существует. При ее замене текущее содержимое будет перезаписано.","replaceWorkspaceModal.replace":"Заменить","closePlatform":"Закрыть платформу","closePlatform.workspace":"Закрыть платформу {{workspace}}","closePlatform.warning":"Закрытие платформы приведет к закрытию всех рабочих областей, приложений и запущенных процессов.","back":"Назад","forward":"Вперед","reload":"Перезагрузить ","green":"Зеленый","purple":"Фиолетовый","orange":"Оранжевый","red":"Красный","pink":"Розовый","yellow":"Желтый","theme.light":"Светлый","theme.dark":"Темный","theme.system":"Синхронизировать с настройками ОС","toolbar.hideTabs":"Скрыть вкладки","toolbar.showTabs":"Показать вкладки","toolbar.lock":"Заблокировать","toolbar.unlock":"Разблокировать","toolbar.colorLinking":"Привязка к цвету","toolbar.changeLayout":"Изменить макет","toolbar.saveMenu":"Меню сохранения","toolbar.maximizeWindow":"Увеличить окно","toolbar.restoreWindow":"Восстановить окно","toolbar.minimizeWindow":"Свернуть окно","changeLayout.fullWidth":"Полная ширина","changeLayout.columns":"Столбцы","changeLayout.Rows":"Строки","changeLayout.Grid":"Сетка","successIndicator.workspaceSwitched":"Рабочая область переключена","successIndicator.hidden":"Вкладки скрыты","successIndicator.shown":"Вкладки показаны","successIndicator.locked":"Страница заблокирована","successIndicator.unlocked":"Страница разблокирована","successIndicator.workspaceSaved":"Рабочая область сохранена","successIndicator.workspaceSavedAs":"Рабочая область сохранена как {{workspace}}","successIndicator.workspaceRenamed":"Рабочая область переименована","successIndicator.pageSaved":"Страница сохранена","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. RU","successIndicator.pageCopySaved":"Страница сохранена как {{title}}","successIndicator.pageRenamed":"Страница переименована","successIndicator.contextGroupApplied":"Контекстная группа применена","successIndicator.namedContextGroupApplied":"Контекстная группа {{colorName}} применена","successIndicator.viewRemoved":"Представление удалено из контекстной группы","successIndicator.viewsRemoved":"Представления удалены из контекстной группы","successIndicator.layoutApplied":"Макет {{layoutName}} применен","successIndicator.workspaceDeleted":"Рабочая область удалена","errorIndicator.pageSaveFailed":"Не удалось сохранить страницу","errorIndicator.workspaceSaveFailed":"Не удалось сохранить рабочую область","errorIndicator.failedToDuplicatePage":"Не удалось продублировать страницу","infoIndicator.colorLinkAttempt":"Мы попытались привязать цвет к этой вкладке, но владелец сайта/контента еще не включил эту возможность","global.cancel":"Отменить","global.confirm":"Подтвердить","global.save":"Сохранить","global.delete":"Delete RU","appResults.header":"Featured Content RU","recentlyClosed.header":"Recently Closed RU","landingPage.subheader":"Apps and websites selected by an admin will show here RU","aria.openBrowser":"Открыть меню браузера","aria.browserTabs":"Вкладки браузера","aria.viewTab":"Вкладка представления {{title}}","aria.closePage":"Кнопка «Закрыть» на вкладке для страницы {{title}}","aria.closeTab":"Закрыть вкладку {{title}}","aria.title":"Название","aria.closeContextGroup":"Чтобы закрыть диалог выбора контекстной группы, используйте escape","aria.colorLinking":"Показать или скрыть привязку к цвету","aria.applyColorLinking":"Выберите представление, чтобы применить привязку к цвету","aria.assignColorLinkingCurrentView":"Текущее представление, назначенное контекстной группе {{name}}","aria.assignColorLinkingCurrentViews":"Текущие представления, назначенные контекстной группе {{name}}","aria.setColorLinkingActiveView":"Установить активное представление в контекстную группу {{name}}","aria.setColorLinkingActiveViews":"Установить активные представления в контекстную группу {{name}}","aria.escapeLayoutDialog":"Чтобы закрыть диалог изменения макета, используйте escape","global.supertab":"Supertab RU","global.tab":"Tab RU","bookmarks.editBookmark":"Edit Bookmark RU","bookmarks.bookmarkAdded":"Bookmark added RU","bookmarks.done":"Done RU","bookmarks.remove":"Remove RU","bookmarks.bookmarksPanel":"Bookmarks Panel RU","bookmarks.bookmarks":"Bookmarks RU","bookmarks.allBookmarks":"All Bookmarks RU","bookmarks.favorites":"Favorites RU","bookmarks.searchBookmarks":"Search Bookmarks RU","bookmarks.clearSearchInput":"Clear Search Input RU","bookmarks.createFolder":"Create New Folder RU","bookmarks.exitFolder":"Exit Folder RU","bookmarks.newFolder":"New Folder RU","bookmarks.namedFolder":"{{name}} Folder RU","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings RU","bookmarks.folderSettings":"{{name}} Folder Settings RU","bookmarks.noResultsFound":"No results found RU","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search RU","bookmarks.nothingToShow":"Nothing to show yet RU","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder RU","bookmarks.resultsFoundIn":"Results found in {{name}} RU","bookmarks.resultsInOtherFolders":"Results found in other folders RU","bookmarks.allResultsFoundIn":"All results found in RU","bookmarks.editName":"Edit Name RU","bookmarks.move":"Move RU","bookmarks.bookmarkAddedTitle":"Bookmark Added RU","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" RU","bookmarks.bookmarkEditedTitle":"Bookmark Edited RU","enterpriseContextMenu.saveSupertab":"Save Supertab RU","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... RU","enterpriseContextMenu.duplicate":"Duplicate RU","enterpriseContextMenu.deleteSupertab":"Delete Supertab RU","enterpriseContextMenu.newTab":"New Tab RU","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As RU","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? RU","saveSupertabCount_other":"Save {{count}} Supertabs before closing? RU"},"enterpriseSaveModal.renameSupertab":"Rename RU","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. RU","enterpriseSaveModal.closeTab":"Close Tab RU","enterpriseSaveModal.closeSupertab":"Close Supertab RU","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. RU","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? RU","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. RU","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved RU","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved.RU","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted RU","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. RU","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab RU","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab RU","enterpriseCommandBar.switchToSupertab":"Switch to Supertab RU","enterpriseCommandBar.goTo":"Go to {{type}} RU","enterpriseCommandBar.viewMore":"View More RU","sidePanel.aiCenter":"AI Center RU","sidePanel.newChat":"New Chat RU","sidePanel.toggleSidePanel":"Toggle Side Panel RU","sidePanel.closeSidePanel":"Close Side Panel RU","sidePanel.openAiCenter":"Open AI Center RU","contextMenu.quitEnterpriseBrowser":"Quit RU","dock.removeFavorite":"Remove RU"}'), re = fe().t, Fe = async (e) => await (await At(e)).dispatch(Et.GetPages), tt = async (e) => (await At(e.identity)).dispatch(Et.UpdatePageForWindow, e);
    let Dt, pn = !1;
    const Tt = () => pn, Rn = () => Dt || { enabled: !1 };
    async function Ya(e, n) {
      const r = !!n;
      let i = /* @__PURE__ */ new Set();
      if (r) {
        const { identity: u, pageId: m } = n, S = g().Browser.wrapSync(u), v = await S.getPage(m);
        v != null && v.panels && (i = new Set(v.panels.map(({ viewOptions: N }) => N.name)));
      }
      return e.map((u) => {
        const m = u.viewOptions.name;
        (m == null ? void 0 : m.startsWith(L)) && (!r || r && !i.has(m)) && delete u.viewOptions.name;
        const v = (N = u.viewOptions, N.name || (N.name = `${L}${on()}`), N);
        var N;
        return { ...u, viewOptions: { ...v, uuid: ee.uuid } };
      });
    }
    async function li(e) {
      for (const n of e) n.panels && await di(n.panels);
    }
    const rc = (e) => e !== null && typeof e == "object" && "message" in e && typeof e.message == "string" && /ERR_([A-Z]+_*)+/.test(e.message);
    async function di(e) {
      const n = e.map((r) => fin.Platform.getCurrentSync().createView(r.viewOptions, fin.me.identity).catch((i) => {
        if (!rc(i)) throw i;
        console.error(i);
      }));
      return await Promise.all(n);
    }
    const pi = (e, n) => !n.find((r) => r === e), fi = (e, n) => `${e} (${n})`, Po = (e, n) => {
      if (pi(e, n)) return e;
      let r = 1;
      const i = e.replace(/ *\(\d+\)$/, "");
      for (; !pi(fi(i, r), n); ) r += 1;
      return fi(i, r);
    }, Er = async () => rt.time("getAllAttachedPages", async () => {
      const e = await rt.time("getAllAttachedPages::getBrowserWindows", () => je());
      return console.log(`[Perf] getAllAttachedPages: querying ${e.length} windows`), (await Promise.all(e.map(async (n) => {
        var r;
        try {
          return Fe(n.identity);
        } catch (i) {
          return console.debug(`Error getting pages for Browser with identity ${JSON.stringify(n.identity)}. Resorting to pages in window options`, i), ((r = (await rt.time("getAllAttachedPages::window.getOptions", () => n.getOptions())).workspacePlatform) == null ? void 0 : r.pages) || [];
        }
      }))).reduce((n, r) => n.concat(r), []);
    }), oc = async () => (await Ue(ee)).dispatch(de.GetSavedPages, void 0), hi = async (e) => (await Ue(ee)).dispatch(de.GetSavedPage, e), gi = async (e, n) => {
      const r = await (async (i) => (await Er()).find((u) => u.pageId === i))(e);
      return !r || r.title === n.title && e === n.pageId || await tt({ identity: r.parentIdentity, pageId: e, page: { pageId: n.pageId, title: n.title } }), r;
    }, mi = async ({ page: e }) => {
      await gi(e.pageId, e), await (async (n) => (await Ue(ee)).dispatch(de.CreateSavedPage, n))({ page: e });
    }, ic = async (e) => {
      await hi(e) && await (async (n) => (await Ue(ee)).dispatch(de.DeleteSavedPage, n))(e);
    }, wi = async ({ pageId: e, page: n }) => (await gi(e, n), await (async (r) => (await Ue(ee)).dispatch(de.UpdateSavedPage, r))({ pageId: e, page: n })), yi = async (e) => await hi(e.pageId) ? wi({ pageId: e.pageId, page: e }) : mi({ page: e }), sc = async (e) => {
      await (async (n) => (await At(n.identity)).dispatch(Et.AttachPagesToWindow, n))(e);
    }, cc = async (e) => {
      const n = { ...e.page, panels: e.page.panels && await Ya(e.page.panels, e) };
      n.panels && await di(n.panels), await tt({ ...e, page: n });
    }, uc = async (e) => {
      await (async (n) => (await At(n.identity)).dispatch(Et.DetachPagesFromWindow, n))(e);
    }, lc = async (e) => {
      await (async (n) => (await At(n.identity)).dispatch(Et.SetActivePageForWindow, n))(e);
    }, bi = (e) => Fe(e), dc = async ({ identity: e, pageId: n }) => (await bi(e)).find((r) => r.pageId === n), pc = async (e) => {
      await (async (n) => (await At(n.identity)).dispatch(Et.ReorderPagesForWindow, n))(e);
    }, vi = new class {
      constructor() {
        this.queue = [], this.locked = !1;
      }
      lock() {
        return new Promise((e) => {
          this.locked ? this.queue.push(e) : (this.locked = !0, e());
        });
      }
      unlock() {
        if (this.queue.length > 0) {
          const e = this.queue.shift();
          e && e();
        } else this.locked = !1;
      }
    }();
    async function ki(e) {
      return rt.time("getUniquePageTitle", async () => {
        await vi.lock();
        try {
          const n = Tt() ? re("enterpriseDefaultPageTitle") : re("defaultPageTitle"), r = e ?? n, [i, u] = await Promise.all([oc(), rt.time("getUniquePageTitle::getAllAttachedPages", () => Er())]), m = [...i, ...u].map(({ title: S }) => S);
          return Po(r, m);
        } finally {
          vi.unlock();
        }
      });
    }
    async function fc({ page: e }) {
      return { shouldShowModal: !(!e || !e.hasUnsavedChanges) };
    }
    async function hc({ page: e, identity: n }) {
      if ((await fin.Application.getCurrentSync().getInfo()).initialOptions.enableBeforeUnload) {
        const i = await fin.Application.getCurrentSync().getViews(), u = I(e.layout.content).filter((S) => S.name && i.some((v) => v.identity.name === S.name)).map((S) => fin.View.wrapSync({ name: S.name, uuid: n.uuid })), m = await this.checkViewsForPreventUnload(u);
        if (m.viewsPreventingUnload.length > 0 && (await this.getUserDecisionForBeforeUnload({ ...m, windowId: n, windowShouldClose: !1, closeType: "page" })).viewsToClose.length !== u.length)
          return console.debug(`Closing of page ${e.pageId} prevented in shouldPageClose because there are views preventing closing`), { shouldPageClose: !1 };
      }
      return { shouldPageClose: !0 };
    }
    async function gc({ pages: e, identity: n }) {
      const r = await Promise.all(e.map((m) => this.shouldPageClose({ page: m, closeType: "window", identity: n }))), { pagesPreventingClose: i, pagesNotPreventingClose: u } = e.reduce((m, S, v) => r[v].shouldPageClose ? { pagesPreventingClose: m.pagesPreventingClose, pagesNotPreventingClose: [...m.pagesNotPreventingClose, S] } : { pagesNotPreventingClose: m.pagesNotPreventingClose, pagesPreventingClose: [...m.pagesPreventingClose, S] }, { pagesPreventingClose: [], pagesNotPreventingClose: [] });
      return this.handlePagesAndWindowClose({ pagesNotPreventingClose: u, pagesPreventingClose: i, identity: n });
    }
    async function mc({ pagesPreventingClose: e, pagesNotPreventingClose: n, identity: r }) {
      return { shouldWindowClose: e.length === 0 };
    }
    async function wc({ page: e }) {
      return Sr(e);
    }
    async function yc(e) {
      return { hasUnsavedChanges: !0 };
    }
    const bc = async () => {
      const e = g(), n = (await je()).map((r) => e.Browser.wrapSync(r.identity));
      await Promise.all(n.map(async (r) => {
        const i = await r.getPages();
        await Promise.all(i.map(async (u) => {
          console.debug(`Marking page ${u.title} as saved`), await r.updatePage({ pageId: u.pageId, page: { hasUnsavedChanges: !1 } }), console.debug(`Saving page ${u.pageId} with title ${u.title}`), await yi({ ...u, hasUnsavedChanges: !1 });
        }));
      }));
    }, xo = /* @__PURE__ */ new Map(), vc = () => xo, Si = (e) => xo.delete(e);
    let Co = !1;
    const kc = () => {
      Co || (Co = !0, fin.Window.wrapSync(ye).once("closed", () => {
        Co = !1, (async (e, n) => {
          await Kr(yr(e), { source: "Store", ...n });
        })(fin.me.identity, { type: "Navigation", action: "Close Store", skipValueHashing: !0 });
      }));
    };
    let Ea, Pi, Mo;
    const xi = async () => (Mo === void 0 && (Mo = !!(await Oe()).disableOpenFinAnalytics), Mo);
    async function Sc(e) {
      console.debug("analyticsInternal", e), e.forEach((r) => {
        var i, u;
        r.type === "Page" ? r.action === "Open Page" ? (i = r.data.uuid, u = r, xo.set(i, u)) : r.action === "Close Page" && Si(r.data.uuid) : r.source === "Store" && r.action !== "Close" && kc();
      }), await (async (r) => {
        Ea != null && Ea.sendToOpenFin ? await xi() ? console.debug("Analytics feed to OpenFin is disabled in DOS") : r.forEach(async (i) => {
          const u = Tn({}, i);
          u.entityId && (u.entityId.uuid = await vr(u.entityId.uuid), u.entityId.name = await vr(u.entityId.name)), !i.skipValueHashing && "value" in u && (u.value = await vr(u.value)), Pi(u);
        }) : console.debug("Analytics feed to OpenFin is disabled in analytics config");
      })(e);
      const n = e.map(({ skipValueHashing: r, ...i }) => i);
      this.handleAnalytics(n);
    }
    const Pc = async (e) => {
      Ea = e, Ea != null && Ea.sendToOpenFin && !await xi() && (() => {
        const r = Re, i = r + C.Analytics, u = document.createElement("IFRAME");
        u.setAttribute("src", i), u.setAttribute("style", "width: 0px !important"), u.setAttribute("style", "height: 0px !important"), u.setAttribute("style", "display: none !important"), document.body.appendChild(u), Pi = async (m) => {
          u.contentWindow.postMessage(m, r);
        };
      })();
      const n = fin.Application.getCurrentSync();
      n.addListener("view-created", async (r) => {
        var i;
        Zt({ type: "View", action: "Open View", value: r.viewIdentity.name, data: { uuid: r.viewIdentity.uuid, url: await (i = r.viewIdentity, fin.View.wrapSync(i).getInfo().then((u) => u.url)) } });
      }), n.addListener("view-destroyed", async (r) => {
        Zt({ type: "View", action: "Close View", value: r.viewIdentity.name, data: { uuid: r.viewIdentity.uuid } });
      }), n.addListener("window-closed", (r) => {
        r.name.startsWith(We.BrowserMenu) || (Zt({ type: "Window", action: "Close Window", value: r.name, data: { uuid: r.uuid } }), (async () => {
          const i = vc(), u = await Er();
          if (u.length === i.size) return;
          const m = u.reduce((S, v) => S.set(v.pageId, 1), /* @__PURE__ */ new Map());
          for (const [S, v] of i) m.has(S) || (v.action = "Close Page", Zt(v), Si(S));
        })());
      });
    }, xc = Pn({ alwaysOnTop: !0, autoShow: !1, frame: !1, resizable: !1, showTaskbarIcon: !1 }), Cc = /* @__PURE__ */ function(e = xc) {
      const n = /* @__PURE__ */ new Map();
      return async (r, i, u, m, S) => {
        if (n.has(r)) {
          const { currentUrl: Z, currentName: K } = n.get(r);
          if (Z === i) return;
          await fin.Window.wrapSync({ uuid: fin.me.uuid, name: K }).close();
        }
        const v = `${We.BrowserIndicator}-${Date.now()}${Math.random()}`;
        n.set(r, { currentUrl: i, currentName: v });
        const N = `New ${m} indicator: ${u} ${S}`, $ = await fin.Platform.getCurrentSync().createWindow({ ...e, name: v, url: i });
        ((Z, K) => {
          const le = document.createElement("div");
          le.setAttribute("role", "alert"), le.setAttribute("aria-live", "polite"), ((pe) => {
            pe.style.position = "absolute", pe.style.width = "1px", pe.style.height = "1px", pe.style.padding = "0", pe.style.margin = "-1px", pe.style.overflow = "hidden", pe.style.whiteSpace = "nowrap", pe.style.border = "0";
          })(le), document.body.appendChild(le), setTimeout(() => {
            le.innerHTML = Z;
          }, 300), setTimeout(() => {
            document.body.removeChild(le);
          }, 1e3);
        })(N), $.once("closed", () => {
          n.delete(r);
        });
      };
    }();
    async function Io(e) {
      const { parentBrowserName: n } = e;
      return n && n.includes(We.BrowserWindow) && fin.me.name !== n ? (await At({ uuid: fin.me.uuid, name: n })).dispatch(Et.ShowBrowserIndicator, e) : async function(r) {
        const { type: i, message: u, parentBrowserName: m, secondaryMessage: S, icon: v, isEnterprise: N, positioning: $ } = r, Z = new URLSearchParams();
        if (Z.append("type", i), Z.append("message", u), Z.append("parentName", m || ""), Z.append("secondaryMessage", S || ""), Z.append("icon", v || ""), Z.append("isEnterprise", `${N}` || ""), $ === St.RelativeToMonitor && Z.append("positioning", St.RelativeToMonitor), m) {
          const pe = P(m ? { uuid: ft, name: m } : void 0), Me = `${(K = await pe.getBounds()).top},${K.left},${K.height},${K.width},${K.bottom},${K.right},${K.content.top},${K.content.left},${K.content.height},${K.content.width}`;
          Z.append("parentBounds", Me);
        }
        var K;
        const le = `${(N ? await Jt() : await fn()) + C.BrowserIndicator}#${Z.toString()}`;
        return Cc("browser" + m, le, u, i, S);
      }(e);
    }
    async function no(e) {
      const n = e.isEnterprise ?? await gt(e.parentBrowserName ? { uuid: ft, name: e.parentBrowserName } : void 0);
      return Io({ type: "success", message: e.message, parentBrowserName: e.parentBrowserName, secondaryMessage: e.secondaryMessage, icon: e.icon, isEnterprise: n, positioning: e.positioning });
    }
    const Ta = async (e = ee) => {
      const { workspacePlatform: n } = await P(e).getOptions(), r = n == null ? void 0 : n.newPageUrl, i = n == null ? void 0 : n.newTabUrl;
      return { newPageUrl: r, newTabUrl: i };
    }, ao = async (e = ee) => {
      const n = await gt(e) || Tt(), r = n ? null : await g().Browser.getUniquePageTitle();
      let i;
      if (e && await Ge(e)) i = await (async (m, S = ee) => {
        const { newPageUrl: v } = await Ta(S);
        if (!v) throw new Error("Trying to create a new page without a newPageUrl set");
        return j(m, v, S);
      })(r, e);
      else if (n) {
        const m = await hn();
        i = await j(r, m);
      }
      n && (i.settings = i.settings ?? {}, i.dimensions = i.dimensions ?? {}, i.settings.hasHeaders = !1, i.settings.reorderEnabled = !0, i.dimensions.headerHeight = 0);
      const u = await Wn(r, i);
      return n && (u.hasUnsavedChanges = !1), u;
    }, Mc = async (e, n, r) => {
      const { windowOptions: i, content: u } = await (async (v, N) => {
        const $ = await gt(N);
        return { title: "Switch Workspace", windowOptions: { url: await Ut($, !1) + C.ResponseModal, name: We.BrowserMenu, defaultHeight: 134, defaultWidth: 410, modalParentIdentity: N }, content: { title: re("switchWorkspaceModal", { workspace: v }), body: re("switchWorkspaceModal.warning"), buttons: { right: [{ label: re("global.cancel"), type: "secondary", id: "Cancel" }, { label: re("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })(n, r ? void 0 : e), m = await xn(i, e, r), S = { ...i, top: m.top, left: m.left };
      return (await ea({ options: S, content: u })).data.actionName === "Confirm";
    }, Ic = async ({ workspaceTitle: e, windowIdentity: n }) => {
      const { windowOptions: r, content: i } = await (async ({ workspaceTitle: S, windowIdentity: v }) => {
        const N = await gt(v);
        return { title: "Delete Workspace", windowOptions: { url: await Ut(N, !1) + C.ResponseModal, name: We.BrowserMenu, defaultHeight: 144, defaultWidth: 410, modalParentIdentity: v }, content: { title: re("deleteWorkspaceModal"), body: `${S}`, buttons: { right: [{ label: re("global.cancel"), type: "secondary", id: "Cancel" }, { label: re("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })({ workspaceTitle: e, windowIdentity: n }), u = await xn(r, r.modalParentIdentity), m = { ...r, top: u.top, left: u.left };
      return (await ea({ options: m, content: i })).data.actionName === "Confirm";
    }, Ci = async (e, n, r) => {
      const { windowOptions: i, content: u } = await (async (v, N, $) => {
        const Z = await gt(v);
        return { title: "Platform Quit", windowOptions: { url: await Ut(Z, !1) + C.ResponseModal, name: We.BrowserMenu, defaultHeight: 134, defaultWidth: 410, modalParentIdentity: $ ? void 0 : v }, content: { title: re(N === "Platform" ? "closePlatform" : "closePlatform.workspace", { workspace: N }), body: re("closePlatform.warning"), buttons: { right: [{ label: re("global.cancel"), type: "secondary", id: "Cancel" }, { label: re("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })(e, n, r), m = await xn(i, e, r), S = { ...i, top: m.top, left: m.left };
      return (await ea({ options: S, content: u })).data.actionName === "Confirm";
    }, Ac = async (e) => {
      const { windowOptions: n, content: r } = await (async (m) => {
        const S = await gt(m);
        return { title: "Restore Changes", windowOptions: { url: await Ut(S, !1) + C.ResponseModal, name: We.BrowserMenu, defaultHeight: 134, defaultWidth: 410, modalParentIdentity: m }, content: { title: re("restoreModal"), body: re("modal.discardWarning"), buttons: { right: [{ label: re("global.cancel"), type: "secondary", id: "Cancel" }, { label: re("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })(e), i = await xn(n, n.modalParentIdentity), u = { ...n, top: i.top, left: i.left };
      return (await ea({ options: u, content: r })).data.actionName === "Confirm";
    }, Ec = async (e, n) => {
      const { windowOptions: r, content: i } = await (async (S, v) => {
        const N = await gt(S);
        return { title: "Delete Page", windowOptions: { url: new URL(await Ut(N, !1) + C.ResponseModal).toString(), name: We.BrowserMenu, defaultHeight: 172, defaultWidth: 464, modalParentIdentity: S }, content: { title: re("enterpriseDeleteModal.deleteSupertab", { title: v }), body: re("enterpriseDeleteModal.deleteSupertabWarning"), buttons: { right: [{ label: re("global.cancel"), type: "secondary", id: "Cancel", variant: N ? "outline" : void 0 }, { label: re("global.delete"), type: "primary", id: "Delete", variant: N ? "submit" : void 0 }] } } };
      })(e, n), u = await xn(r, r.modalParentIdentity), m = { ...r, top: u.top, left: u.left };
      return (await ea({ options: m, content: i })).data.actionName === "Delete";
    }, Tc = async ({ identity: e, title: n, description: r }) => {
      var N;
      const { windowOptions: i, content: u } = await (async ($, Z, K) => ({ title: "Update Version", windowOptions: { url: await Jt() + C.ResponseModal, name: We.UpdateVersionModal, defaultHeight: 172, defaultWidth: 464, modalParentIdentity: $, preventBlur: !0, closeOnResponse: !0, includeInSnapshots: !1 }, content: { title: Z, body: K, buttons: { right: [{ label: "Snooze", type: "secondary", id: "snooze" }, { label: "Restart", type: "primary", id: "restart" }] } } }))(e, n, r), m = fin.Window.wrapSync({ uuid: e.uuid, name: `${i.name}--${(N = i.modalParentIdentity) == null ? void 0 : N.name}` });
      try {
        if (await (m == null ? void 0 : m.isShowing())) return void console.debug("showUpdateVersionModal already open, skipping creation");
      } catch {
        console.debug("showUpdateVersionModal not open, creating new modal");
      }
      const S = await xn(i, i.modalParentIdentity), v = { ...i, top: S.top, left: S.left };
      return (await ea({ options: v, content: u })).data;
    };
    async function Mi({ options: e, ...n }) {
      var m;
      if (!(e != null && e.skipPrompt || await Mc(e == null ? void 0 : e.promptContainerWindowIdentity, n.title, e == null ? void 0 : e.shouldCenterModalOnMonitor))) return !1;
      const r = !!(await fin.Application.getCurrentSync().getChildWindows()).find(({ identity: S }) => S.name === We.DockCompanion || S.name === Gt);
      console.log(Tt());
      const i = r || Tt() ? { closeExistingWindows: !1, closeSnapshotWindows: !0 } : { closeExistingWindows: ((m = e == null ? void 0 : e.applySnapshotOptions) == null ? void 0 : m.closeExistingWindows) ?? !0 };
      return await g().applySnapshot(n.snapshot, { ...(e == null ? void 0 : e.applySnapshotOptions) ?? {}, ...i }), Ao(n), Io({ type: "success", message: re("successIndicator.workspaceSwitched"), positioning: St.RelativeToMonitor }).catch(console.warn), !0;
    }
    async function _c(e) {
      try {
        return await Mi(e);
      } catch (n) {
        return console.error("failed to apply the current workspace: ", n), !1;
      }
    }
    async function Ii(e) {
      try {
        const n = await async function() {
          const r = g(), i = await r.getCurrentWorkspace({ skipSnapshotUpdate: !0 });
          return (await r.Storage.getWorkspaces()).find((u) => u.workspaceId === i.workspaceId);
        }();
        return n ? e != null && e.skipPrompt || await Ac(e == null ? void 0 : e.promptContainerWindowIdentity) ? (await Mi({ options: { skipPrompt: !0, applySnapshotOptions: e == null ? void 0 : e.applySnapshotOptions }, ...n }), "success") : "user-declined" : "not-saved-workspace";
      } catch (n) {
        throw console.error("failed to restore last saved workspace: ", n), n;
      }
    }
    function Ao(e) {
      if (typeof localStorage < "u") try {
        const n = JSON.stringify(e);
        Jn(en.CurrentWorkspaceId, n);
      } catch (n) {
        console.error("failed to set the active workspace: ", n);
      }
    }
    async function Eo() {
      const e = g(), n = await e.getSnapshot();
      return { workspaceId: on(), title: await Wc(), metadata: { APIVersion: Ve }, snapshot: n };
    }
    async function Rc(e) {
      if (typeof localStorage > "u") return Eo();
      const n = va(en.CurrentWorkspaceId);
      if (!n) return Eo();
      const r = JSON.parse(n);
      if (e != null && e.skipSnapshotUpdate) return r;
      const i = g(), u = await i.getSnapshot();
      return { ...r, metadata: { APIVersion: Ve }, snapshot: u };
    }
    const Dc = async () => (await Ue(ee)).dispatch(de.GetSavedWorkspaces, void 0), Oc = async (e) => await (async (n) => (await Ue(ee)).dispatch(de.GetSavedWorkspace, n))(e.workspaceId) ? (async (n) => (await Ue(ee)).dispatch(de.UpdateSavedWorkspace, n))({ workspaceId: e.workspaceId, workspace: e }) : (async (n) => (await Ue(ee)).dispatch(de.CreateSavedWorkspace, n))({ workspace: e });
    async function Wc(e = "Untitled Workspace") {
      const n = (await Dc()).map(({ title: r }) => r);
      return Po(e, n);
    }
    const Bc = (e) => ({ ...e, snapshot: { ...e.snapshot, windows: e.snapshot.windows.map((n) => {
      var r, i;
      return { ...n, workspacePlatform: { ...n.workspacePlatform, pages: (i = (r = n.workspacePlatform) == null ? void 0 : r.pages) == null ? void 0 : i.map((u) => ({ ...u, hasUnsavedChanges: !1 })) } };
    }) } }), Nc = async (e, n) => {
      await (n ?? g()).Storage.saveWorkspace(Bc(e)), await (async () => (await Ue(ee)).dispatch(de.MarkUnsavedPagesAsSavedInternal, void 0))();
    }, Ai = async (e) => {
      const n = g();
      await (async ({ showModal: r, afterSuccessSave: i }) => {
        const u = g(), m = await u.getCurrentWorkspace(), S = await u.Storage.getWorkspacesMetadata(), v = m.workspaceId;
        S.some((N) => N.workspaceId === v) ? (await Nc(m, u), await u.setActiveWorkspace(m), await i()) : await r();
      })({ showModal: async () => {
        await n.Browser.wrapSync(e)._openSaveModal({ menuType: Le.SAVE_WORKSPACE_AS });
      }, afterSuccessSave: async () => {
        await no({ message: re("successIndicator.workspaceSaved"), parentBrowserName: e.name });
      } });
    }, To = (e) => {
      g().Browser.wrapSync(e)._openSaveModal({ menuType: Le.SAVE_WORKSPACE_AS });
    }, Ei = async (e) => {
      const n = g().Browser.wrapSync(e), { newPageUrl: r } = await Ta(), i = await ao(e), u = r || void 0;
      await n._addDefaultPage({ identity: e, page: i, newPageUrl: u });
    }, _o = async (e, n) => {
      const r = g().Browser.wrapSync(e), i = await g().Storage.getPages(), u = (await r.getPages()).find(($) => n ? $.pageId === n : $.isActive), m = i.some(($) => u.pageId === $.pageId), S = await gt(e);
      if (m) try {
        await g().Storage.savePage((N = u, { ...N, hasUnsavedChanges: void 0, parentIdentity: void 0, isActive: void 0, layout: _(N.layout) })), await r.updatePage({ pageId: u.pageId, page: { hasUnsavedChanges: !1 } }), no({ message: re(S ? "enterpriseSuccessIndicator.supertabSaved" : "successIndicator.pageSaved"), parentBrowserName: e.name, secondaryMessage: re(S ? "enterpriseSuccessIndicator.supertabHasBeenSaved" : "successIndicator.pageHasBeenSaved", { title: u.title }), isEnterprise: S });
      } catch {
        Io({ type: "error", message: (v = { message: re("errorIndicator.pageSaveFailed"), parentBrowserName: u.parentIdentity.name }).message, parentBrowserName: v.parentBrowserName, icon: v.icon, isEnterprise: v.isEnterprise || !1, positioning: v.positioning });
      }
      else r._openSaveModal({ id: u.pageId, menuType: Le.SAVE_PAGE });
      var v, N;
    }, Ro = async (e, n) => {
      const r = g().Browser.wrapSync(e), i = (await r.getPages()).find((u) => n ? u.pageId === n : u.isActive);
      r._openSaveModal({ id: i.pageId, menuType: Le.SAVE_PAGE_AS }), Zt({ type: "Page Modal", action: "Select Save As", value: i.title, skipValueHashing: !0 });
    }, Fc = async (e, n) => {
      await (async ({ workspaceItemData: r, winIdentity: i, positioning: u }) => {
        const m = g(), S = (await m.Storage.getWorkspacesMetadata()).find((v) => v.workspaceId === r.workspaceId);
        S && await Ic({ workspaceTitle: S.title, windowIdentity: i }) && (await m.Storage.deleteWorkspace(r.workspaceId), await no({ message: re("successIndicator.workspaceDeleted"), parentBrowserName: i == null ? void 0 : i.name, positioning: u }));
      })({ workspaceItemData: n, winIdentity: e });
    }, Lc = { title: "Downloads", pageId: "downloads-page-id", layout: { content: [{ type: "stack", content: [{ type: "component", componentName: "view", componentState: { name: "show-download-view", url: "chrome://downloads/" } }] }] } }, Ti = async (e) => {
      const n = P(e), r = await n.getCurrentViews(), i = (await g().Browser.wrapSync(n.identity).getPages()).find((u) => u.isActive);
      try {
        const u = (await Promise.all(r.map(async (m) => ({ identity: m.identity, info: await fin.View.wrapSync(m.identity).getInfo() })))).find((m) => m.info.url === "chrome://downloads/");
        if (u) await fin.View.wrapSync(u.identity).focus();
        else {
          const m = g();
          if (i != null && i.isLocked) {
            const S = (await fin.Application.getCurrentSync().getChildWindows()).find((v) => v.identity.name === "show-download-window");
            return void (S ? await S.focus() : m.Browser.createWindow({ name: "show-download-window", workspacePlatform: { pages: [Lc] } }));
          }
          (await g().createView({ name: "show-download-view", url: "chrome://downloads/", target: e }, e)).focus();
        }
      } catch (u) {
        console.error("Couldn't open downloads view", u);
      }
    }, Do = async (e) => {
      const n = e.map((r) => fin.View.wrapSync(r).print());
      await Promise.all(n);
    }, _i = (e) => {
      const [n, r, i] = e.split(".").map((u) => u === "x" ? 0 : 1);
      return 100 * n + 10 * r + 1 * i;
    };
    class Ri extends Error {
    }
    const Vc = async (e) => {
      try {
        const r = await async function() {
          const i = await Oe(), u = (i == null ? void 0 : i.translationOverridesUrl) ?? "https://workspace.openfin.co/workspace/assets/translation-override.json";
          if (u === "") throw new Ri("Empty string provided as url to translationOverridesUrl, overrides will not be fetched.");
          return await fetch(u).then((m) => m.json());
        }();
        (n = ((i) => {
          const u = Ve.split(".");
          return Object.keys(i).filter((m) => {
            const S = m.split(".");
            if (S.length !== 3) return console.warn(`Encountered a translation override version string in an unsupported format: ${m}. Versions must be in A.B.C format where A, B, C are either integers or the wildcard symbol 'x'.`), !1;
            const [v, N, $] = S;
            return !(v !== u[0] && v !== "x" || N !== u[1] && N !== "x" || $ !== u[2] && $ !== "x");
          });
        })(r), [...n].sort((i, u) => _i(i) - _i(u))).forEach((i) => {
          const u = r[i];
          Object.keys(u).forEach((m) => {
            e.addResourceBundle(m, "translation", u[m], !0, !0);
          });
        });
      } catch (r) {
        r instanceof Ri ? console.warn(r.message) : console.error("Error applying a translation override: ", r);
      }
      var n;
    };
    function Di() {
      return fe().language;
    }
    const Uc = async (e) => {
      Oi(e), ((n) => {
        fe().changeLanguage(n);
      })(e), await (async (n) => {
        const r = await je();
        return Promise.all(r.map(async (i) => {
          await (await At(i.identity)).dispatch(Et.SetSelectedLanguage, n);
        }));
      })(e);
    };
    function $c() {
      if (!fe().options.resources) throw new Error("No language resources found");
      return { currentLanguage: Di(), resources: fe().options.resources };
    }
    async function jc(e = "en-US") {
      Oi(e), function(n = "en-US") {
        fe().use(Q.initReactI18next).init({ lng: n, fallbackLng: "en-US", resources: { "en-US": { translation: Ce }, "ja-JP": { translation: he }, "zh-CN": { translation: we }, "ko-KR": { translation: Ae }, "ru-RU": { translation: ct }, "de-DE": { translation: ke }, "zh-Hant": { translation: ue } }, interpolation: { escapeValue: !1 } });
      }(e), await Vc(fe());
    }
    function Oi(e) {
      if (!Ot.includes(e)) throw new Error(`The ISO language provided ${e} is not supported`);
    }
    const Za = /* @__PURE__ */ new Map();
    let Oo = Date.now();
    function Wi() {
      const e = Date.now();
      return Oo = Math.max(e, Oo + 1), Oo;
    }
    async function Kc() {
      const e = Array.from(Za.values()).sort((n, r) => r.lastFocusedTime - n.lastFocusedTime);
      if (e.length > 0) return e[0].identity;
      try {
        const n = va(en.LastFocusedBrowserWindow);
        if (!n) return;
        const r = JSON.parse(n);
        if (await Ye(r)) return await _a(r), r;
      } catch (n) {
        console.error("failed to get last focused browser window from localStorage:", n);
      }
    }
    async function Bi() {
      return (await fin.Application.getCurrentSync().getChildWindows()).filter((n) => n.identity.name.startsWith(We.BrowserWindow));
    }
    async function Hc() {
      const e = g(), n = fin.Window.wrapSync({ uuid: fin.me.uuid, name: We.DockCompanion }), r = await ra(await n.getBounds()), i = await async function(m, S, v) {
        const N = await fin.System.getMonitorInfo(), $ = (v == null ? void 0 : v.availableRect) ?? N.primaryMonitor.availableRect, Z = { width: $.right - $.left, height: $.bottom - $.top }, K = Math.min(m, Z.height), le = Math.min(S, Z.width), pe = $.top + Math.floor((Z.height - K) / 2);
        return { height: K, width: le, left: $.left + Math.floor((Z.width - le) / 2), top: pe };
      }(600, 900, r), u = await ao();
      return (await e.Browser.createWindow({ defaultHeight: 600, defaultWidth: 900, defaultLeft: i.left, defaultTop: i.top, workspacePlatform: { pages: [u] } })).identity;
    }
    async function _a(e, n, r = !1) {
      if (!await Ge(e)) return;
      const i = fin.Window.wrapSync(e), u = n ?? await i.isShowing(), m = Za.get(e.name), S = { identity: e, lastFocusedTime: r ? Wi() : (m == null ? void 0 : m.lastFocusedTime) ?? Wi(), isVisible: u };
      Za.set(e.name, S), r && function(v) {
        if (typeof localStorage < "u") try {
          const N = JSON.stringify(v);
          Jn(en.LastFocusedBrowserWindow, N);
        } catch (N) {
          console.error("failed to save last focused browser window: ", N);
        }
      }(e);
    }
    async function Gc(e = fin.me.identity) {
      Za.delete(e.name);
    }
    const zc = Hr()(async () => {
      const e = await fin.Platform.getCurrentSync().Application.getChildWindows();
      let n, r = !1;
      for (const i of e) if (i.identity.name === We.BrowserMenu || i.identity.name === We.BrowserSaveMenu ? n = i : await Ge(i.identity) && (r = !0), r) break;
      !r && n && n.close();
    }, 100, { leading: !1, trailing: !0 });
    let Wo = {};
    const qc = async ({ actionId: e, payload: n }) => {
      if (typeof Wo[e] != "function") throw new Error(`Cannot find a configured function for the action '${e}'`);
      return Wo[e](n);
    };
    let Bo;
    const Jc = () => `custom-context-menu-${g().identity.uuid}-${Ve}`, Yc = () => `custom-bookmark-context-menu-${g().identity.uuid}-${Ve}`, Ni = async () => (Bo || (Bo = await fin.InterApplicationBus.Channel.connect(Jc())), Bo);
    var Fi, Qa;
    (function(e) {
      e.Save = "Save", e.SaveAs = "SaveAs";
    })(Fi || (Fi = {})), function(e) {
      e.GlobalMenu = "global-menu", e.ContextMenu = "context-menu", e.RenameSupertab = "rename-supertab", e.AddEditBookmark = "add-edit-bookmark", e.DropdownMenu = "dropdown-menu", e.ZoomControls = "zoom-controls";
    }(Qa || (Qa = {}));
    const ro = "visited-sites", No = "removed-tab-stack", na = _t && Ne && ln("openfin-home-pages", "pages"), Xa = _t && Ne && new qn.Dexie(ka("openfin-enterprise-site-history"));
    Xa && Xa.version(0.1).stores({ [ro]: "id, url" });
    const er = _t && Ne && new qn.Dexie(ka("openfin-enterprise-tab-history"));
    async function Fo(e) {
      if (!na) throw new Error("Unable to get page - IndexDB not supported");
      const n = await na.pages.get(e);
      if (n) return n.pageId = e.toString(), n.title = n.title || n.pageId, n;
    }
    async function Zc(e) {
      if (!na) throw new Error("Unable to get page list - IndexDB not supported");
      const n = await na.pages.toCollection().keys(), r = (await Promise.all(n.map((i) => Fo(i.toString())))).filter((i) => !!i);
      return e ? r.filter((i) => Aa(i.title, e)) : r;
    }
    async function Li({ page: e }) {
      if (!na) throw new Error("Unable to create page - IndexDB not supported");
      await na.pages.put(e, e.pageId);
    }
    async function Vi(e) {
      if (!na) throw new Error("Unable to delete page - IndexDB not supported");
      await na.pages.delete(e);
    }
    async function Qc({ pageId: e, page: n }) {
      if (!na) throw new Error("Unable to update page - IndexDB not supported");
      if (await Fo(e) === void 0) throw new Error("page not found");
      await Li({ page: n }), e !== n.pageId && await Vi(e);
    }
    er && er.version(0.1).stores({ [No]: "" });
    const Xc = async (e) => {
      if (!er) throw new Error("Unable to add removed tab - IndexDB not supported");
      const n = Date.now().toString(), r = { ...e, id: n };
      await er[No].put(r, n);
    };
    function eu(e) {
      return e.type === "app" || e.type === "website";
    }
    const tu = async (e) => {
      if (e.type === "website") {
        const n = e, r = n.url || "";
        let i = await Xa[ro].get(r);
        i && eu(i) ? (i.icon = n.icon, i.title = n.title, i.type = n.type, i.visitCount = (i.visitCount || 0) + 1, i.url = n.url) : i = { ...n, id: r, visitCount: 1, accessTime: void 0 }, i.accessTime = Date.now(), await Xa[ro].put(i, r);
      }
    }, nu = async () => {
      if (!Xa) throw new Error("Unable to get frequently visited sites - IndexDB not supported");
      const e = Xa[ro], n = await e.toCollection().toArray();
      return n.sort((r, i) => (i.visitCount || 0) - (r.visitCount || 0)), (n.length > 5 ? n.slice(0, 5) : n).map(({ id: r, ...i }) => i);
    }, Tr = async () => (await fin.System.getHostSpecs()).name.toLowerCase().includes("windows"), Ui = async ({ browserIdentity: e, url: n, shiftKey: r, activePage: i, pages: u }) => {
      const m = g().Browser.wrapSync(e), S = await j(n, n, e), v = { ...await Wn(n, S), attachedPageType: "singleView", singleViewName: n }, N = u.findIndex(($) => $.pageId === i.pageId);
      await m._addPage(v, { index: N + 1 }), r && await m.setActivePage(v.pageId);
    }, au = async (e) => {
      const { url: n } = e.bookmark, { sourceIdentity: r, sourceEvent: i } = e, u = await Tr(), m = g();
      let S = !1, v = r;
      if (!await Ge(r)) {
        const Me = await async function() {
          const He = Array.from(Za.values());
          for (let yt = He.length - 1; yt >= 0; yt--) if (He[yt].isVisible) return He[yt].identity;
        }();
        if (!Me) return await (async (He) => {
          const yt = g(), nt = await j(He.url, He.url), bt = await Wn(He.url, nt);
          Te((await yt.Browser.createWindow({ workspacePlatform: { pages: [bt] } })).identity);
        })(e.bookmark);
        S = !0, v = Me;
      }
      const N = m.Browser.wrapSync(v), $ = await N.getPages(), Z = (await N._getLayoutsWithSelectedViews()).find((Me) => Me.isActive);
      if (!Z) throw Error(`Browser ${v} does not have any active layouts`);
      const K = $.find((Me) => Me.isActive), le = F(K.layout.content) === 1, pe = Z.selectedViews[0];
      S ? await Ui({ browserIdentity: v, url: n, shiftKey: !0, activePage: K, pages: $ }) : le ? await (async ({ isWindows: Me, currentViewId: He, browserIdentity: yt, url: nt, activePage: bt, pages: it, sourceEvent: Lt }) => {
        const { ctrlKey: Dn, metaKey: pt, shiftKey: Ht } = Lt;
        (Me ? Dn : pt) ? await Ui({ browserIdentity: yt, url: nt, shiftKey: Ht, activePage: bt, pages: it }) : await fin.View.wrapSync(He).navigate(nt);
      })({ isWindows: u, currentViewId: pe, browserIdentity: v, url: n, activePage: K, pages: $, sourceEvent: i }) : await (async ({ isWindows: Me, currentViewId: He, browserIdentity: yt, url: nt, activeLayout: bt, sourceEvent: it }) => {
        const { ctrlKey: Lt, metaKey: Dn, shiftKey: pt } = it;
        if (Me ? Lt : Dn) {
          const Ht = fin.View.wrapSync(He), qt = await Ht.getCurrentStack(), bn = (await qt.getViews()).findIndex((ar) => ar.name === He.name), nr = { url: nt, browserIdentity: yt, title: nt };
          await qt.addView(nr, { index: bn + 1 });
        } else await fin.View.wrapSync(bt.selectedViews[0]).navigate(nt);
      })({ isWindows: u, currentViewId: pe, browserIdentity: v, url: n, activeLayout: Z, sourceEvent: i });
    };
    var Be;
    (function(e) {
      e.Label = "normal", e.Separator = "separator", e.Submenu = "submenu", e.Checkbox = "checkbox";
    })(Be || (Be = {}));
    let Lo = { locked: !1, x: -1, y: -1 };
    const ru = async (e, n, r, i) => {
      if (!Ne) throw new Error("showEnterpriseContextMenu can only be used in a Here env. Avoid calling this method during pre-rendering.");
      if (!i && !fin.me.isWindow) throw new Error("showEnterpriseContextMenu can only be used in a Here window.");
      const { x: u, y: m, template: S } = e;
      if (((Z, K) => {
        const { x: le, y: pe, locked: Me } = Lo;
        return Me && Z === le && K === pe;
      })(u, m)) return new Promise((Z, K) => Z({ data: void 0 }));
      Lo = { locked: !0, x: u, y: m };
      const v = await Ni(), N = on(), $ = new Promise((Z, K) => {
        v.register(`response-${N}`, (le) => {
          Lo.locked = !1, v.remove(`response-${N}`), Z(le);
        });
      });
      return await v.dispatch("open", { parentIdentity: i.identity, responseIdentity: ee, requestId: N, type: n, anchorBehavior: r, x: u, y: m, payload: { template: S } }), $;
    }, nn = { type: Be.Separator, data: void 0 }, ou = async () => ({ type: Be.Submenu, label: re("contextMenu.print"), submenu: [{ type: Be.Label, label: re("contextMenu.submenu.print"), data: { type: ie.Print } }, { type: Be.Label, label: re("contextMenu.submenu.printAll"), data: { type: ie.PrintAll } }, nn, { type: Be.Label, label: re("contextMenu.printScreen"), data: { type: ie.PrintScreen } }] }), Vo = () => ({ type: Be.Label, label: re("contextMenu.closeWindow"), data: { type: Y.CloseWindow } }), Uo = (e) => ({ type: Be.Label, label: re(e ? "contextMenu.quitEnterpriseBrowser" : "contextMenu.quitPlatform"), data: { type: Y.Quit } }), $i = () => ({ type: Be.Label, label: re("contextMenu.newWindow"), data: { type: Y.NewWindow } }), ji = (e) => ({ type: Be.Label, label: re(e ? "enterpriseContextMenu.saveSupertab" : "contextMenu.savePage"), data: { type: Y.SavePage } }), Ki = (e) => ({ type: Be.Label, label: re(e ? "enterpriseContextMenu.saveSupertabAs" : "contextMenu.savePageAs"), data: { type: Y.SavePageAs } }), Hi = (e, n) => ({ type: Be.Label, label: re(n ? "enterpriseContextMenu.newTab" : "contextMenu.newPage"), data: { type: Y.NewPage }, enabled: e }), Gi = () => ({ label: re("contextMenu.switchWorkspace") }), zi = () => ({ label: re("contextMenu.deleteWorkspace") }), qi = () => ({ label: re("contextMenu.appearance") }), Ji = (e, n, r) => n.map((i) => {
      const u = i.workspaceId === e.workspaceId;
      return { label: i.title, type: Be.Checkbox, enabled: !u, checked: u, data: { type: r, workspaceId: i.workspaceId } };
    }), Yi = async () => {
      const e = await g().Theme.getSelectedScheme();
      return [{ label: re("theme.light"), type: Be.Checkbox, checked: e === ve.Light, data: { type: Y.Appearance, scheme: ve.Light } }, { label: re("theme.dark"), type: Be.Checkbox, checked: e === ve.Dark, data: { type: Y.Appearance, scheme: ve.Dark } }, { label: re("theme.system"), type: Be.Checkbox, checked: e === ve.System, data: { type: Y.Appearance, scheme: ve.System } }];
    }, iu = async (e, n = []) => {
      const r = await Xt(), { newPageUrl: i } = await Ta(e), u = await (async (nt) => {
        const bt = P(nt), { workspacePlatform: it } = await bt.getOptions();
        return it == null ? void 0 : it.disableMultiplePages;
      })(e), m = await (async (nt) => {
        const bt = P(nt), { workspacePlatform: it } = await bt.getOptions();
        return it == null ? void 0 : it.isLocked;
      })(e), S = await gt(e), v = [], N = n.length > 0;
      i && (v.push($i()), u || v.push(Hi(!m, S))), v.push(nn);
      const $ = g(), Z = await $.getCurrentWorkspace({ skipSnapshotUpdate: !0 }), K = await $.Storage.getWorkspacesMetadata(), le = K.find((nt) => nt.workspaceId === Z.workspaceId), pe = $.Browser.wrapSync(e), Me = (await pe.getPages()).find((nt) => nt.isActive), He = !!Me && await $.Storage.getPage(Me.pageId);
      v.push({ type: Be.Label, label: re("contextMenu.restore"), data: { type: Y.RestoreChanges }, enabled: !!le }), v.push({ type: Be.Label, label: re("contextMenu.saveWorkspace"), data: { type: Y.SaveWorkspace }, enabled: !!le }), v.push({ type: Be.Label, label: re("contextMenu.saveWorkspaceAs"), data: { type: Y.SaveWorkspaceAs } }), v.push({ type: Be.Label, label: re("contextMenu.renameWorkspace"), data: { type: Y.RenameWorkspace }, enabled: !!le }), K.some((nt) => nt.workspaceId !== Z.workspaceId) ? v.push({ label: Gi().label, submenu: Ji(Z, K, Y.SwitchWorkspace), data: void 0 }, { label: zi().label, submenu: Ji(Z, K, Y.DeleteWorkspace), data: void 0 }) : v.push({ label: Gi().label, enabled: !1, data: void 0 }, { label: zi().label, enabled: !1, data: void 0 }), v.push({ label: re("contextMenu.downloads"), data: { type: Y.Downloads } }), v.push({ label: qi().label, submenu: await Yi(), data: void 0 });
      const yt = { ...ji(S), enabled: !!He };
      return v.push(nn, yt, Ki(S), await (async (nt) => {
        const bt = await Tr();
        return { label: re("contextMenu.print"), submenu: [{ type: Be.Label, label: re("contextMenu.submenu.print"), data: { type: Y.Print }, enabled: nt }, { type: Be.Label, label: re("contextMenu.submenu.printAll"), data: { type: Y.PrintAll } }, ...bt ? [nn, { type: Be.Label, label: re("contextMenu.printScreen"), data: { type: Y.PrintScreen } }] : []], data: void 0 };
      })(N)), r ? [...v, Vo(), nn, { type: Be.Label, label: re("contextMenu.openStorefront"), data: { type: Y.OpenStorefront } }, nn, Uo()] : [...v, nn, Vo(), nn, Uo()];
    }, su = async (e, n) => {
      const r = n.selectedViews[0], i = fin.View.wrapSync(r), u = await (async (m) => {
        const { newTabUrl: S } = await Ta(m);
        if (!S) throw new Error("Trying to create a new page without a newTabUrl set");
        return { url: S, target: m, title: "New Tab" };
      })(e);
      await g().createView(u, e, i.identity);
    }, cu = async (e, n) => {
      const r = g().Browser.wrapSync(e), i = (await r.getPages()).find((S) => S.isActive), u = await fin.Window.wrapSync(e).getCurrentViews();
      if (n.length === u.length - (i.panels ?? []).length)
        return void (await At(e)).dispatch(Et.ClosePage, { pageId: i == null ? void 0 : i.pageId });
      const m = fin.Platform.getCurrentSync();
      n.forEach(async (S) => {
        const v = await fin.View.wrapSync(S).getParentLayout();
        await m.closeView(S);
        const { hasUnsavedChanges: N } = await (async ($) => (await Ze(ee)).dispatch(de.HandlePageChanges, $))({ page: { ...i, layout: await v.getConfig() }, identity: e, eventDetails: { type: Se.ViewRemoved, viewIdentity: S } });
        N && await r.updatePage({ pageId: i.pageId, page: { hasUnsavedChanges: !0 } });
      });
    }, uu = async (e, n) => {
      const r = await ((m) => Promise.all(m.map(async (S) => fin.View.wrapSync(S).getInfo())))(n), { newPageUrl: i, newTabUrl: u } = await Ta(e);
      r.forEach(async (m) => {
        m.url !== i && m.url !== u && await fin.System.openUrlWithBrowser(m.url);
      });
    }, lu = (e, n) => {
      n.forEach(async (r) => {
        const i = fin.View.wrapSync(r);
        await (async (u, m) => {
          const { url: S } = await m.getInfo(), v = { ...await m.getOptions(), url: S, target: u, name: void 0 };
          await g().createView(v, u, m.identity);
        })(e, i);
      });
    }, Zi = async (e, n, r) => {
      const i = { newChannelId: n, selectedViews: r };
      (await At(e)).dispatch(Et.AddToChannel, i);
    }, Qi = async (e, n) => {
      (await At(e)).dispatch(Et.RemoveFromChannel, n);
    }, du = async (e, n) => {
      if (!e) return;
      const r = n.identity, i = fin.Window.wrapSync(r);
      switch (Zt({ type: "View Tab Menu", action: "Select Menu Item", value: e.type, skipValueHashing: !0 }), e.type) {
        case ie.Back:
          await (async (u) => {
            const m = u.map((S) => fin.View.wrapSync(S).navigateBack());
            await Promise.all(m);
          })(n.selectedViews);
          break;
        case ie.Forward:
          await (async (u) => {
            const m = u.map((S) => fin.View.wrapSync(S).navigateForward());
            await Promise.all(m);
          })(n.selectedViews);
          break;
        case ie.Print:
          await Do(n.selectedViews);
          break;
        case ie.PrintAll:
          await i.print({ content: "views", includeSelf: !1 });
          break;
        case ie.PrintScreen:
          await i.print({ content: "screenshot" });
          break;
        case ie.CloseViews:
          await cu(r, n.selectedViews);
          break;
        case ie.OpenWithDefaultBrowser:
          await uu(r, n.selectedViews);
          break;
        case ie.ReloadViews:
          n.selectedViews.forEach(async (u) => {
            await fin.View.wrapSync(u).reload();
          });
          break;
        case ie.NewView:
          await su(r, n);
          break;
        case ie.DuplicateViews:
          lu(r, n.selectedViews);
          break;
        case ie.AddToChannel:
          Zi(r, e.option, n.selectedViews);
          break;
        case ie.RemoveFromChannel:
          Qi(r, n.selectedViews);
          break;
        case ie.Custom:
          if (e.action) {
            const u = { callerType: ut.ViewTabContextMenu, windowIdentity: r, selectedViews: n.selectedViews, customData: e.action.customData };
            g()._invokeCustomAction(e.action.id, u);
          }
      }
    }, $o = /* @__PURE__ */ new Map([["blue", { name: "Blue", color: "#0091EB" }], ["indigo", { name: "Indigo", color: "#6450FF" }], ["pink", { name: "Pink", color: "#E878CF" }], ["teal", { name: "Teal", color: "#24D1D1" }], ["green", { name: "Green", color: "#00AF78" }], ["orange", { name: "Orange", color: "#FF7D37" }], ["red", { name: "Red", color: "#F94144" }], ["yellow", { name: "Yellow", color: "#F9C74F" }], ["gray", { name: "Gray", color: "#828788" }]]);
    function Xi() {
      return { type: Be.Label, label: re("contextMenu.manageDesktopSignals"), data: { type: te.ManageDesktopSignals } };
    }
    function es(e) {
      const n = Array.from($o.entries()), r = e.contextGroup;
      return { type: "widget", config: { type: "add-to-channel", channels: [...n.map(([i, u]) => ({ label: u.name, data: { type: te.AddToChannel, option: i }, color: u.color, checked: r === i })), { label: "unlink", data: { type: te.AddToChannel, option: "unlink" }, isNone: !0 }] }, label: "Link to Channel" };
    }
    let ts = "Platform";
    const jo = async () => ts, pu = async (e, n) => {
      var S;
      if (!e) return;
      const r = n.identity, i = await At(r), u = g().Browser.wrapSync(r), m = fin.Window.wrapSync(r);
      if (Zt({ type: "Global Menu", action: "Select Menu Item", value: e.type, skipValueHashing: !0, data: { action: (S = e.action) == null ? void 0 : S.id } }), !(await gt(r) && await (async (N, $) => {
        const Z = $.identity, K = g().Browser.wrapSync(Z), le = (await K.getPages()).find((He) => He.isActive), pe = qr({ ...Z, layoutName: le.layoutContainerKey }), Me = $.selectedViews;
        switch (N == null ? void 0 : N.type) {
          case xe.Lock:
            await K.updatePage({ pageId: le.pageId, page: { isLocked: !le.isLocked } });
            break;
          case xe.AddToChanel:
            N.option ? await Zi(Z, N.option, Me) : N.option === null && await Qi(Z, Me);
            break;
          case xe.ManageDesktopSignals:
            await Xr(Z);
            break;
          case Y.NewWindow: {
            const He = await ao(Z);
            await g().Browser.createWindow({ workspacePlatform: { pages: [He], windowType: "enterprise" } });
            break;
          }
          case xe.Pin: {
            const { alwaysOnTop: He } = await K.openfinWindow.getOptions();
            await K.openfinWindow.updateOptions({ alwaysOnTop: !He });
            break;
          }
          case xe.ShowHideTabs:
            await pe.isShowingTabs() ? await pe.hide() : await pe.show();
            break;
          default:
            return !1;
        }
        return !0;
      })(e, n)))
        switch (e.type) {
          case Y.NewWindow: {
            const { newPageUrl: v } = await Ta(r);
            if (!v) throw new Error("Trying to create a new empty window without a newPageUrl set");
            g().createView({ target: void 0, url: v });
            break;
          }
          case Y.NewPage:
            await Ei(r);
            break;
          case Y.CloseWindow:
            i.dispatch(Et.CloseBrowserWindow);
            break;
          case Y.SaveWorkspace:
            await Ai(r);
            break;
          case Y.SavePage:
            await _o(r);
            break;
          case Y.SavePageAs:
            await Ro(r);
            break;
          case Y.SaveWorkspaceAs:
            await To(r);
            break;
          case Y.RenameWorkspace:
            u._openSaveModal({ menuType: Le.RENAME_WORKSPACE });
            break;
          case Y.SwitchWorkspace:
            await (async (v, N) => {
              const $ = g(), Z = (await $.Storage.getWorkspaces()).find((K) => K.workspaceId === N.workspaceId);
              $.applyWorkspace(Z, { skipPrompt: !1, promptContainerWindowIdentity: v });
            })(r, e);
            break;
          case Y.DeleteWorkspace:
            await Fc(r, e);
            break;
          case Y.Downloads:
            await Ti(r);
            break;
          case Y.Appearance:
            await g().Theme.setSelectedScheme(e.scheme);
            break;
          case Y.Quit:
            {
              const v = jo();
              await Ci(r, await v) && fin.Platform.getCurrentSync().quit();
            }
            break;
          case Y.OpenStorefront:
            (async () => await Xt() && Te(ye))();
            break;
          case Y.RestoreChanges:
            await Ii();
            break;
          case Y.Print:
            await Do(n.selectedViews);
            break;
          case Y.PrintAll:
            await m.print({ content: "views", includeSelf: !1 });
            break;
          case Y.PrintScreen:
            await m.print({ content: "screenshot" });
            break;
          case Y.Custom:
            if (e.action) {
              const v = { callerType: ut.GlobalContextMenu, windowIdentity: r, customData: e.action.customData };
              g()._invokeCustomAction(e.action.id, v);
            } else console.warn(`Encountered a Custom context menu option with an "action" property with value "${e.action}"`);
        }
    }, fu = async (e, n, r) => {
      const i = g().Browser.wrapSync(n.identity), u = fin.Window.wrapSync(n.identity), m = await At(n.identity), S = await gt();
      switch (e && Zt({ type: "Page Tab Menu", action: "Select Menu Item", value: e.type, skipValueHashing: !0 }), e == null ? void 0 : e.type) {
        case te.Save:
          await _o(n.identity, n.pageId);
          break;
        case te.SaveAs:
          await Ro(n.identity, n.pageId);
          break;
        case te.NewPage:
          await Ei(n.identity);
          break;
        case te.DeletePage:
          await (async (v, N) => {
            const $ = g(), Z = $.Browser.wrapSync(v), K = (await $.Storage.getPages()).find((le) => le.pageId === N);
            K && await Ec(v, K.title) && (await $.Storage.deletePage(K.pageId), await Z.removePage(N), no({ message: re("enterpriseSuccessIndicator.supertabDeleted"), parentBrowserName: v.name, secondaryMessage: re("enterpriseSuccessIndicator.supertabHasBeenDeleted", { title: K.title }) }));
          })(n.identity, n.pageId);
          break;
        case te.Rename:
          await gt(n.identity) ? (await i.setActivePage(n.pageId), await (await Ni()).dispatch("open", { parentIdentity: n.identity, responseIdentity: ee, type: Qa.RenameSupertab, anchorBehavior: oo.Center, x: r.left + r.width / 2 - 164, y: r.bottom - 8, payload: { pageId: n.pageId } })) : await i._openSaveModal({ menuType: Le.RENAME_PAGE, id: n.pageId });
          break;
        case te.Duplicate:
          m.dispatch(Et.DuplicatePage, n.pageId);
          break;
        case te.Close:
          S ? await (async (v, N) => {
            const $ = g().Browser.wrapSync(v), Z = await $.getPages();
            for (const K of Z) if (K.pageId === N) {
              await $.removePage(K.pageId), await $._trackRemovedTab({ identity: v, page: K });
              break;
            }
          })(n.identity, n.pageId) : m.dispatch(Et.ClosePage, { pageId: n.pageId });
          break;
        case te.Custom:
          if (e.action) {
            const v = { callerType: ut.PageTabContextMenu, windowIdentity: n.identity, pageId: n.pageId, customData: e.action.customData };
            g()._invokeCustomAction(e.action.id, v);
          } else console.warn(`Encountered a Custom context menu option with an "action" property with value "${e.action}"`);
          break;
        case te.Refresh:
          await (async (v, N) => {
            var le;
            const $ = g(), Z = $.Browser.wrapSync(v), K = (await Z.getPages()).find((pe) => N ? pe.pageId === N : pe.isActive);
            (le = K == null ? void 0 : K.layout) != null && le.content && I(K.layout.content).forEach(async (pe) => {
              (await fin.View.wrap({ uuid: $.identity.uuid, name: pe.name })).reload();
            });
          })(n.identity, n.pageId);
          break;
        case te.CloseOthers:
          await (async (v, N) => {
            const $ = g().Browser.wrapSync(v), Z = await $.getPages();
            for (const K of Z) K.pageId !== N && (await $.removePage(K.pageId), await $._trackRemovedTab({ identity: v, page: K }));
          })(n.identity, n.pageId);
          break;
        case te.SaveWorkspaceAs:
          await To(n.identity);
          break;
        case te.Print: {
          const v = await i._getLayoutsWithSelectedViews(), { selectedViews: N } = v.find(($) => $.pageId === n.pageId);
          await Do(N);
          break;
        }
        case te.PrintAll:
          await i.setActivePage(n.pageId), await u.print({ content: "views", includeSelf: !1 });
          break;
        case te.PrintScreen:
          await i.setActivePage(n.pageId), await u.print({ content: "screenshot" });
          break;
        case te.AddToChannel:
          await i.updatePage({ pageId: n.pageId, page: { contextGroup: e.option === "unlink" ? null : e.option } });
          break;
        case te.ManageDesktopSignals:
          await Xr(n.identity);
      }
    }, hu = async (e, n) => {
      if (e != null && e.type) {
        const r = n.identity;
        switch (e.type) {
          case at.SavePage:
            await _o(r);
            break;
          case at.SaveWorkspace:
            await Ai(r);
            break;
          case at.SavePageAs:
            await Ro(r);
            break;
          case at.SaveWorkspaceAs:
            await To(r);
            break;
          case at.Custom:
            if (e.action) {
              const i = { callerType: ut.SaveButtonContextMenu, windowIdentity: n.identity, pageId: n.pageId, customData: e.action.customData };
              g()._invokeCustomAction(e.action.id, i);
            } else console.warn(`Encountered a Custom context menu option with an "action" property with value "${e.action}"`);
        }
      }
    };
    var oo;
    (function(e) {
      e[e.TopLeft = 0] = "TopLeft", e[e.TopRight = 1] = "TopRight", e[e.BottomLeft = 2] = "BottomLeft", e[e.BottomRight = 3] = "BottomRight", e[e.Center = 4] = "Center";
    })(oo || (oo = {}));
    const io = async (e, n, r, i) => {
      const { x: u, y: m, identity: S, template: v, callback: N } = e, $ = await gt(S), { data: Z } = $ ? await ru({ x: u, y: m, template: v }, r, i, fin.Window.wrapSync(S)) : await function(K, le) {
        if (!Ne) throw new Error("showContextMenu can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");
        if (!le && !fin.me.isWindow) throw new Error("showContextMenu can only be used in an OpenFin window.");
        return (le || fin.Window.getCurrentSync()).showPopupMenu(K);
      }({ x: u, y: m, template: v }, fin.Window.wrapSync(S));
      N(Z, e);
    };
    async function gu(e, n) {
      const r = Ua(), i = await gt(e.identity);
      i && ja(r);
      const u = i ? await (async ({ identity: K, selectedViews: le }) => {
        const pe = g(), Me = pe.Browser.wrapSync(K), He = (await Me.getPages()).find((Ht) => Ht.isActive), yt = await pe.Storage.getPage(He.pageId), nt = F(He.layout.content) > 1, bt = await gt(K), it = await pe.Theme.getThemes(), Lt = it[0] && "palettes" in it[0] || !it[0] || it.length === 0, Dn = { ...ji(bt), enabled: !!yt }, pt = { ...Ki(bt), enabled: nt };
        return [$i(), Hi(!0, bt), { type: Be.Separator }, Dn, pt, { type: Be.Separator }, { type: Be.Label, label: re("contextMenu.manageDesktopSignals"), data: { type: Y.ManageDesktopSignals } }, { type: Be.Separator }, ...Lt ? [{ type: Be.Submenu, label: qi().label, submenu: await Yi() }] : [], { type: Be.Separator }, Vo(), { type: Be.Separator }, Uo(!0)];
      })({ identity: e.identity, selectedViews: e.selectedViews }) : await iu(e.identity, e.selectedViews), m = await jo();
      i || (u.find((K) => {
        var le;
        return ((le = K.data) == null ? void 0 : le.type) === Y.Quit;
      }).label = `Quit ${m}`);
      const { rect: S, ...v } = e, { x: N, y: $ } = i ? { x: S.left + S.width, y: S.bottom } : e, Z = { ...v, x: N, y: $, template: u, callback: pu };
      $a(r), await this.openGlobalContextMenu(Z, n);
    }
    async function mu(e, n) {
      const r = { ...e, callback: du };
      await this.openViewTabContextMenu(r, n);
    }
    async function wu(e, n) {
      const r = Ua(), i = await gt(e.identity);
      i && ja(r);
      const u = await (async (S, v, N) => {
        var nt, bt;
        const $ = await g().Storage.getPage(S), Z = (await Er()).find((it) => it.pageId === S), K = F(Z.layout.content) > 1, { workspacePlatform: le } = await P(v).getOptions(), pe = !(le.isLocked || le.preventPageClose || (nt = Z.closeButton) != null && nt.disabled || (bt = Z.closeButton) != null && bt.hidden), Me = [{ type: Be.Label, label: re("enterpriseContextMenu.newTab"), data: { type: te.NewPage } }, nn, es(Z), Xi(), nn, { type: Be.Label, label: re("reload"), data: { type: te.Refresh } }, { type: Be.Label, label: re("enterpriseContextMenu.duplicate"), data: { type: te.Duplicate }, enabled: !le.isLocked }, await ou(), nn, { type: Be.Label, label: re(K ? "enterpriseSaveModal.closeSupertab" : "enterpriseSaveModal.closeTab"), data: { type: te.Close }, enabled: pe }], He = [{ type: Be.Label, label: re("enterpriseContextMenu.newTab"), data: { type: te.NewPage } }, nn, es(Z), Xi(), nn, { type: Be.Label, label: re("enterpriseSaveModal.renameSupertab"), data: { type: te.Rename }, enabled: !le.isLocked && !!$ && K }, { type: Be.Label, label: re("enterpriseContextMenu.duplicate"), data: { type: te.Duplicate }, enabled: !le.isLocked }, nn, { type: Be.Label, label: re("enterpriseContextMenu.saveSupertab"), data: { type: te.Save }, enabled: K && !!$ }, { type: Be.Label, label: re("enterpriseContextMenu.saveSupertabAs"), data: { type: te.SaveAs }, enabled: K }, nn, { type: Be.Label, label: re("enterpriseContextMenu.deleteSupertab"), data: { type: te.DeletePage }, enabled: !!$ }, nn, { type: Be.Label, label: re(K ? "enterpriseSaveModal.closeSupertab" : "enterpriseSaveModal.closeTab"), data: { type: te.Close }, enabled: pe }], yt = [{ type: Be.Label, label: re("contextMenu.savePage"), data: { type: te.Save }, enabled: !!$ }, { type: Be.Label, label: re("saveMenu.savePageAs"), data: { type: te.SaveAs }, enabled: !0 }, { type: Be.Label, label: "Save Workspace As", data: { type: te.SaveWorkspaceAs } }, { type: Be.Label, label: "Refresh", data: { type: te.Refresh } }, nn, { type: Be.Label, label: re("saveModal.renamePage"), data: { type: te.Rename }, enabled: !!$ }, { type: Be.Label, label: re("contextMenu.duplicatePage"), data: { type: te.Duplicate }, enabled: !le.isLocked }, nn, { type: Be.Label, label: re("saveModal.closePage"), data: { type: te.Close }, enabled: pe }];
        return N ? K ? He : Me : yt;
      })(e.pageId, e.identity, i), m = { ...e, template: u, callback: (S, v) => {
        fu(S, v, e.rect);
      } };
      $a(r), await this.openPageTabContextMenu(m, n);
    }
    async function yu(e, n) {
      const r = await (async (u) => {
        const m = g(), S = await m.getCurrentWorkspace({ skipSnapshotUpdate: !0 }), v = (await m.Storage.getWorkspacesMetadata()).find(($) => $.workspaceId === S.workspaceId), N = await m.Storage.getPage(u);
        return [{ type: Be.Label, label: re("contextMenu.saveWorkspace"), enabled: !!v, data: { type: at.SaveWorkspace } }, { type: Be.Label, label: re("saveMenu.saveWorkspaceAs"), data: { type: at.SaveWorkspaceAs } }, { type: Be.Separator, data: void 0 }, { type: Be.Label, enabled: !!N, label: re("contextMenu.savePage"), data: { type: at.SavePage } }, { type: Be.Label, label: re("saveMenu.savePageAs"), data: { type: at.SavePageAs } }];
      })(e.pageId), i = { ...e, template: r, callback: hu };
      await this.openSaveButtonContextMenu(i, n);
    }
    const so = "dock-companion-updates", co = async () => (await fin.Application.getCurrentSync().getChildWindows()).find((e) => e.identity.name === We.DockCompanion), Ra = an(`${typeof fin < "u" && (fin == null ? void 0 : fin.me.identity.uuid)}-enterprise-dock`), bu = async () => {
      const e = g(), n = await async function() {
        const m = await Bi();
        await Promise.all(m.map(async ($) => {
          await _a($.identity);
        }));
        const S = Array.from(Za.values()).sort(($, Z) => Z.lastFocusedTime - $.lastFocusedTime), v = S.find(($) => $.isVisible);
        if (v)
          return await fin.Window.wrapSync(v.identity).focus(), v.identity;
        const N = S[0];
        if (N) {
          const $ = fin.Window.wrapSync(N.identity);
          return await $.restore(), await $.focus(), N.identity;
        }
        return Hc();
      }(), r = e.Browser.wrapSync(n), i = (await r.getPages()).at(-1), u = I(i.layout.content);
      if (u.length === 1 && wr(u[0].url)) await r.setActivePage(i.pageId);
      else {
        const m = await ao(n), { newPageUrl: S } = await Ta();
        await r._addDefaultPage({ identity: r.identity, page: m, newPageUrl: S || void 0 });
      }
      (await At(n)).dispatch(Et.FocusAndExpandSearchInternal);
    }, Ko = "dock-provider-configs", tr = _t && Ne && new qn.Dexie(ka("dock-provider-configs"));
    async function vu(e) {
      if (!tr) throw new Error("Unable to get Dock provider config - IndexedDB not supported");
      try {
        return await tr[Ko].get(e);
      } catch (n) {
        return void console.warn("Failed to retrieve Dock provider config from IndexedDb", n);
      }
    }
    async function ku(e) {
      if (!tr) throw new Error("Unable to save Dock provider config - IndexedDb not supported");
      await tr[Ko].put(e, e.id);
    }
    tr && tr.version(0.1).stores({ [Ko]: "" });
    const _r = "workspaces", aa = _t && Ne && ln("openfin-workspace-platform-workspaces", _r);
    async function Ho(e) {
      if (!aa) throw new Error("Unable to get workspace - IndexDB not supported");
      const n = await aa[_r].get(e);
      return n && (n.workspaceId = e.toString(), n.title = n.title || n.workspaceId), n;
    }
    async function ns(e) {
      if (!aa) throw new Error("Unable to get workspaces - IndexDB not supported");
      const n = await aa[_r].toCollection().keys(), r = (await Promise.all(n.map((i) => Ho(i.toString())))).filter((i) => !!i);
      return e ? r.filter((i) => Aa(i.title, e)) : r;
    }
    async function as({ workspace: e }) {
      if (!aa) throw new Error("Unable to create workspace - IndexDB not supported");
      const n = (await ns()).find((r) => r.title === e.title);
      if (n && n.workspaceId !== e.workspaceId) throw new Error(`Workspace with title '${e.title}' already exists.`);
      await aa[_r].put(e, e.workspaceId);
    }
    async function rs(e) {
      if (!aa) throw new Error("Unable to delete workspace - IndexDB not supported");
      await aa[_r].delete(e);
    }
    async function Su({ workspaceId: e, workspace: n }) {
      if (!aa) throw new Error("Unable to update workspace - IndexDB not supported");
      if (!await Ho(e)) throw new Error("workspace not found");
      await as({ workspace: n }), e !== n.workspaceId && await rs(e);
    }
    const Pu = (e) => {
      const n = e.layout, r = n.content ? I(n.content) : [], i = r.length;
      return i > 1 ? { ...e, singleViewName: null } : i === 1 ? { ...e, singleViewName: r[0].name } : void 0;
    }, Go = async (e, n, r) => {
      var N, $, Z;
      const i = new Set([].map((K) => K.title).filter((K) => !!K)), u = new Set([].map((K) => K.pageId).filter((K) => !!K)), m = n == null ? void 0 : n.defaultPageOptions, S = ((N = r == null ? void 0 : r.workspacePlatform) == null ? void 0 : N.windowType) === "enterprise" || ((Z = ($ = n == null ? void 0 : n.defaultWindowOptions) == null ? void 0 : $.workspacePlatform) == null ? void 0 : Z.windowType) === "enterprise", v = await rt.time("applyPageDefaults::getNewTabUrl", () => (async (K, le, pe) => {
        var yt, nt, bt;
        if (pe) return hn();
        const Me = (yt = le == null ? void 0 : le.workspacePlatform) == null ? void 0 : yt.newTabUrl;
        return Me || ((bt = (nt = K == null ? void 0 : K.defaultWindowOptions) == null ? void 0 : nt.workspacePlatform) == null ? void 0 : bt.newTabUrl) || void 0;
      })(n, r, S));
      return Promise.all(e.map(async (K, le) => {
        var nt, bt;
        if (K.multiInstanceViewBehavior === "reparent") return { ...K, layoutContainerKey: on() };
        ((it, Lt) => {
          it.pageId || (it.pageId = on()), Lt.has(it.pageId) && (console.warn("PageID collision detected. All Page IDs should be unique. A random new pageId will be generated"), it.pageId = on()), Lt.add(it.pageId);
        })(K, u), S || (K.title = Po(K.title, Array.from(i.keys()))), i.add(K.title), (nt = K.panels) == null || nt.reduce((it, Lt) => {
          const Dn = Object.values(q);
          if (!Dn.includes(Lt.position)) throw new Error(`Encountered a panel with unsupported position "${Lt.position}". Supported positions are: ${Dn.toString()}`);
          if (it[Lt.position] == 1) throw new Error(`Found more than 1 panel at position: ${Lt.position}. Only 1 panel at a given position is currently supported.`);
          return { ...it, [Lt.position]: it[Lt.position] + 1 };
        }, { [q.Left]: 0, [q.Right]: 0, [q.Top]: 0, [q.Bottom]: 0 });
        const pe = "panels" in K ? K.panels : m == null ? void 0 : m.panels;
        let Me = (He = K.layout, yt = n == null ? void 0 : n.defaultViewOptions, E({ ...He }, (it) => A(it, yt)));
        var He, yt;
        return v && !((bt = Me == null ? void 0 : Me.settings) != null && bt.newTabButton) && (Me = { ...Me, settings: { ...Me == null ? void 0 : Me.settings, newTabButton: { url: v } } }), { ...m, ...K, panels: pe && await rt.time(`applyPageDefaults::convertPanelViewOpts::${le}`, () => Ya(pe)), layoutContainerKey: on(), layout: Me, isLayoutCreated: !1 };
      }));
    }, os = async (e, n) => {
      try {
        await fin.Platform.getCurrentSync().createView({ name: e, url: n, target: fin.me.identity, bounds: { top: 0, left: 0, width: 0, height: 0 } }, fin.me.identity);
      } catch (r) {
        console.debug("Error creating non-layout view component", r);
      }
    }, xu = (e) => {
      var u, m, S, v;
      const n = e.name === We.Home, r = (u = e.name) == null ? void 0 : u.startsWith(We.HomeInternal), i = ((m = e.name) == null ? void 0 : m.startsWith(We.BrowserMenu)) || ((S = e.name) == null ? void 0 : S.startsWith(We.BrowserSaveMenu)) || ((v = e.name) == null ? void 0 : v.startsWith(We.DockSaveWorkspaceMenu));
      return !n && !r && !i;
    }, ga = (e) => JSON.parse(JSON.stringify(e));
    async function Cu(e) {
      return e ? "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" : (await Oe()).displayViewTabDefaultIcon ? "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" : "data:image/svg+xml,%3Csvg%20style%3D%22background-color%3A%237D808A%22%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M4.64648%200.874962C4.84174%200.6797%205.15833%200.6797%205.35359%200.874962L9.12482%204.6462C9.32009%204.84146%209.32009%205.15804%209.12482%205.3533L5.35359%209.12454C5.15833%209.3198%204.84174%209.3198%204.64648%209.12454L0.875245%205.3533C0.679982%205.15804%200.679982%204.84146%200.875245%204.6462L4.64648%200.874962ZM5.00003%201.93562L1.9359%204.99975L5.00003%208.06388L8.06416%204.99975L5.00003%201.93562Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E";
    }
    const Mu = { dimensions: { borderWidth: 3, headerHeight: 30 } };
    async function Iu(e, n, r) {
      var S, v, N, $, Z, K, le, pe, Me, He, yt, nt;
      let i = e;
      const u = ((S = i.workspacePlatform) == null ? void 0 : S.windowType) === "enterprise" || ((N = (v = n == null ? void 0 : n.defaultWindowOptions) == null ? void 0 : v.workspacePlatform) == null ? void 0 : N.windowType) === "enterprise";
      if (i.layout && !((Z = ($ = i.workspacePlatform) == null ? void 0 : $.pages) != null && Z.length)) {
        const bt = await rt.time("applyBrowserDefaults::getUniquePageTitle", () => ki()), it = { ...await Wn(bt, i.layout), isActive: !0 };
        i.workspacePlatform || (i.workspacePlatform = {}), i.workspacePlatform.pages = await rt.time("applyBrowserDefaults::applyPageDefaults(legacy)", () => Go([it], n, i));
      }
      n != null && n.browserIconSize && (i.workspacePlatform || (i.workspacePlatform = {}), i.workspacePlatform.browserIconSize = n.browserIconSize);
      const m = (K = r == null ? void 0 : r.themes) == null ? void 0 : K[0];
      if ((pe = (le = i.workspacePlatform) == null ? void 0 : le.pages) != null && pe.length) {
        const bt = await rt.time("applyBrowserDefaults::applyPageDefaults", () => Go(i.workspacePlatform.pages, n, i)), it = bt, Lt = ((pt) => {
          if (!pt) return;
          let Ht = pt.find((qt) => qt.isActive);
          return !Ht && pt.length > 0 && (pt[0].isActive = !0, Ht = pt[0]), Ht;
        })(it);
        if (it.forEach((pt) => {
          pt.pageId !== (Lt == null ? void 0 : Lt.pageId) && (pt.isActive = !1);
        }), await li(it), i.workspacePlatform.pages = bt, i = Tn({}, await rt.time("applyBrowserDefaults::internalDefaultWindowOptions", () => (async (pt) => ({ contextMenuOptions: { enabled: !1 }, experimental: { showFavicons: !1, defaultFaviconUrl: await Cu(pt) }, viewVisibility: { showViewsOnSplitterDrag: { enabled: !0 }, showViewsOnWindowResize: { enabled: !0 } } }))(u)), n == null ? void 0 : n.defaultWindowOptions, i, await rt.time("applyBrowserDefaults::mandatoryWindowOptions", () => (async (pt) => ({ backgroundThrottling: !0, url: await Ut(pt, !0), contextMenu: !0, closeOnLastViewRemoved: !1, permissions: { System: { openUrlWithBrowser: { enabled: !0, protocols: ["mailto"] } } } }))(u))), Lt.layout = Tn(Lt.layout, Mu), !i.backgroundColor && m) if ("palette" in m) i.backgroundColor = ((Me = m == null ? void 0 : m.palette) == null ? void 0 : Me.background2) || ((He = m == null ? void 0 : m.palette) == null ? void 0 : He.backgroundPrimary);
        else {
          const pt = r.selectedScheme === ve.Dark || r.selectedScheme === ve.System && window.matchMedia("(prefers-color-scheme: dark)") ? m == null ? void 0 : m.palettes.dark : m == null ? void 0 : m.palettes.light;
          i.backgroundColor = (pt == null ? void 0 : pt.background2) || (pt == null ? void 0 : pt.backgroundPrimary);
        }
        i = Pn(i, !0);
        const Dn = await rt.time("applyBrowserDefaults::getDefaultBrowserUrl", () => Ut(u, !0));
        if (Dn && (i.url = Dn), i.layout = Lt.layout, i.layoutSnapshot = ((pt, Ht) => ({ layouts: pt.reduce((qt, bn) => (!bn.isActive && (!Ht || !Pu(bn).singleViewName) || (qt[bn.layoutContainerKey] = bn.layout), qt), {}), pages: pt }))(i.workspacePlatform.pages, u), i.workspacePlatform.windowType = i.workspacePlatform.windowType ?? qe.Browser, u) {
          const pt = await rt.time("applyBrowserDefaults::getEnterpriseLandingUrl", () => hn());
          i.workspacePlatform.newPageUrl = pt, i.workspacePlatform.newTabUrl = pt, i.layout && (i.layout.dimensions.borderWidth = 4, i.layout.dimensions.headerHeight = 28), i.name = i.name || `${We.BrowserWindow}-${on()}`, (async (qt) => {
            const bn = await Jt(), nr = We.BrowserAddressSearchPrefix + qt.name, ar = bn + C.BrowserPopupMenuAddressSearchResultsView, Yo = [], qu = os(nr, ar);
            Yo.push(qu);
            const Ju = We.AICompanionPrefix + qt.name, { url: Yu, enabled: Zu } = Rn();
            if (Zu) {
              const Qu = os(Ju, Yu);
              Yo.push(Qu);
            }
            await Promise.all(Yo);
          })(i);
          const { enabled: Ht } = Rn();
          i.workspacePlatform.isAiEnabled = Ht, i.minWidth = Math.max(654, i.minWidth ?? 0), i.minHeight = Math.max(488, i.minHeight ?? 0);
        } else i.minWidth = Math.max(232, i.minWidth ?? 0), function(pt) {
          var nr, ar;
          const Ht = (nr = pt.workspacePlatform) == null ? void 0 : nr.viewTabDimensions, qt = (ar = pt.workspacePlatform) == null ? void 0 : ar.pageTabDimensions, bn = /^[0-9]+(px|%)$/;
          if (Ht) {
            if (Ht.minWidth && !bn.test(Ht.minWidth)) throw new Error(`Provided viewTabDimensions.min value "${Ht.minWidth}" is not in a supported format.`);
            if (Ht.maxWidth && !bn.test(Ht.maxWidth)) throw new Error(`Provided viewTabDimensions.max value "${Ht.maxWidth}" is not in a supported format.`);
          }
          if (qt) {
            if (qt.minWidth && !bn.test(qt.minWidth)) throw new Error(`Provided pageTabDimensions.min value "${qt.minWidth}" is not in a supported format.`);
            if (qt.maxWidth && !bn.test(qt.maxWidth)) throw new Error(`Provided pageTabDimensions.max value "${qt.maxWidth}" is not in a supported format.`);
          }
        }(i);
      }
      return i.cornerRounding && delete i.cornerRounding, i.name || i.layoutSnapshot ? ((nt = (yt = i.contextMenuOptions) == null ? void 0 : yt.template) == null ? void 0 : nt.length) > 0 ? i.contextMenuOptions.template = i.contextMenuOptions.template.filter((bt) => bt !== "print") : i.contextMenuOptions = { template: [], enabled: !1 } : i.name = `${We.ClassicWindow}-${on()}`, i.workspacePlatform && r && (i.workspacePlatform._themeData = r), i;
    }
    const is = async (e, n) => {
      const r = { uuid: n.uuid, name: n.name };
      await Ci(r, e.title ?? await jo(), e.shouldCenterOnMonitor) && fin.Platform.getCurrentSync().quit();
    }, ss = async (e, n) => {
      const r = g(), i = await r.Browser.getLastFocusedWindow();
      if (!i) return void console.debug("No browser window found, skipping update version modal");
      const u = r.Browser.wrapSync(i), { title: m, description: S } = e, v = await Tc({ title: m, description: S, identity: u.identity });
      v && u._sendUpdateVersionModalResponse({ identity: n, response: v });
    };
    async function cs(e, n, r) {
      const i = e.manifestUrl ? await n({ manifestUrl: e.manifestUrl }, r) : void 0;
      if (i != null && i.interop && e.interop) {
        const u = { ...e, ...i, interop: e.interop };
        return delete u.manifestUrl, u;
      }
      return e;
    }
    const us = (e) => {
      var r;
      const n = ga(e);
      return (r = n._internalWorkspaceData) != null && r.browserNavigationButtons && (n.workspacePlatform = { ...n.workspacePlatform, browserNavigationButtons: n._internalWorkspaceData.browserNavigationButtons }, delete n._internalWorkspaceData.browserNavigationButtons), n;
    }, ls = (e) => {
      const n = ga(e);
      return n.workspacePlatform && (n._internalWorkspaceData = { ...n._internalWorkspaceData, ...n.workspacePlatform }, delete n.workspacePlatform), n;
    }, Au = { reload: [{ keys: "Ctrl+R", preventDefault: !0 }], back: [{ keys: "Alt+Left", preventDefault: !0 }], forward: [{ keys: "Alt+Right", preventDefault: !0 }] }, Eu = { reload: [{ keys: "Cmd+R", preventDefault: !0 }], back: [{ keys: "Cmd+[", preventDefault: !0 }, { keys: "Cmd+Left", preventDefault: !0 }], forward: [{ keys: "Cmd+]", preventDefault: !0 }, { keys: "Cmd+Right", preventDefault: !0 }] }, Tu = async () => await Tr() ? Au : Eu, _u = (e, n) => {
      const r = fin.View.wrapSync(e);
      if (!n) return;
      const i = (u) => {
        (async (m, S, v) => {
          if (v.inputType !== "keyDown") return;
          const N = await (async (Z) => {
            var Me;
            const K = await Z.getCurrentWindow(), le = await K.getOptions(), pe = (Me = le.workspacePlatform) == null ? void 0 : Me.navigationButtons;
            return pe.enabled && !pe.hotkeysDisabled;
          })(m), $ = await Tr();
          if (N) {
            if (S.reload) {
              const Z = v.ctrlKey && !v.altKey && !v.metaKey && !v.shiftKey && v.key === "r", K = !v.ctrlKey && !v.altKey && v.metaKey && !v.shiftKey && v.key === "r";
              ($ ? Z : K) && (S != null && S.reload) && (m.reload(), Zt({ type: "View", action: "Reload", value: m.identity.name }));
            }
            if (S.back) {
              const Z = !v.ctrlKey && v.altKey && !v.metaKey && !v.shiftKey && v.key === "ArrowLeft", K = !v.ctrlKey && !v.altKey && v.metaKey && !v.shiftKey && v.key === "ArrowLeft", le = !v.ctrlKey && !v.altKey && v.metaKey && !v.shiftKey && v.key === "[";
              ($ ? Z : K || le) && (S != null && S.back) && (m.navigateBack(), Zt({ type: "View", action: "Back", value: m.identity.name }));
            }
            if (S.forward) {
              const Z = !v.ctrlKey && v.altKey && !v.metaKey && !v.shiftKey && v.key === "ArrowRight", K = !v.ctrlKey && !v.altKey && v.metaKey && !v.shiftKey && v.key === "ArrowRight", le = !v.ctrlKey && !v.altKey && v.metaKey && !v.shiftKey && v.key === "]";
              ($ ? Z : K || le) && (S != null && S.forward) && (m.navigateForward(), Zt({ type: "View", action: "Forward", value: m.identity.name }));
            }
          }
        })(r, n, u);
      };
      r.addListener("hotkey", i), r.once("destroyed", () => {
        r.removeListener("hotkey", i);
      });
    }, zo = (e, n) => ga(e).map((r) => ("componentState" in r ? r.componentState = n(r.componentState) : "content" in r && (r.content = zo(r.content, n)), r)), ds = (e) => {
      if (e) {
        const n = ga(e);
        return n.content && (n.content = zo(n.content, us)), n;
      }
      return e;
    }, ps = (e) => {
      if (e) {
        const n = ga(e);
        return n.content && (n.content = zo(n.content, ls)), n;
      }
      return e;
    };
    async function Ru({ app: e, target: n }) {
      const r = fin.Platform.getCurrentSync();
      switch (e.manifestType) {
        case X.Snapshot:
          return r.applySnapshot(e.manifest);
        case X.View:
          return async function(i, u) {
            const m = fin.Platform.getCurrentSync();
            if (u.entityType === "view") {
              const S = fin.View.wrapSync(u);
              return await (await S.getParentLayout()).replaceView(u, { manifestUrl: i.manifest, url: void 0, target: void 0 }), S.destroy();
            }
            return m.createView({ name: void 0, url: void 0, manifestUrl: i.manifest, target: void 0 });
          }(e, n);
        case X.External:
          return fin.System.launchExternalProcess({ path: e.manifest, uuid: e.appId });
        default:
          return fin.Application.startFromManifest(e.manifest);
      }
    }
    let qo;
    const uo = () => (qo || (qo = an(`${typeof fin < "u" && fin.me.identity.uuid}-enterprise-app-directory`)()), qo);
    async function Du(e) {
      return await gt(e.identity) ? (await uo()).dispatch(Qn.GetApps, e.req) : [];
    }
    async function Ou(e) {
      return await gt(e.identity) ? (await uo()).dispatch(Qn.GetSearchProviders, e) : [];
    }
    async function Wu(e) {
      return (await uo()).dispatch(Qn.GetCuratedContent, e);
    }
    async function Bu(e) {
      return (await uo()).dispatch(Qn.GetRecentlyVisited, e);
    }
    async function Nu(e) {
      const n = (await je()).map(async (r) => {
        var u;
        const i = await r.getOptions();
        (u = i.workspacePlatform) != null && u.pages && i.layout && await (async (m) => (await At(m)).dispatch(Et.UpdatePagesWindowOptions))(r.identity);
      });
      return await Promise.all(n), e ? e() : da();
    }
    let fs = [];
    const hs = () => fs;
    async function Fu(e) {
      const n = (i) => {
        if (!i.includes("#") && !i.includes("rgb") && !i.includes("hsl")) throw new Error("Background primary color is not the right format.");
      };
      e == null || e.forEach((i) => {
        "palette" in i && n(i.palette.backgroundPrimary), "palettes" in i && (n(i.palettes.dark.backgroundPrimary), n(i.palettes.light.backgroundPrimary));
      }), fs = ((i, u) => {
        if (sn("ThemeStorage: initialiseStoragePalettes called", { customThemes: i, isWindows: u }), !i || !i[0]) {
          sn("ThemeStorage: Using default OpenFin theme");
          const { dark: m, light: S } = zn[0].palettes;
          return ta.setPalettes({ dark: m, light: S }, u), sn("ThemeStorage: Default theme set successfully"), zn;
        }
        {
          const m = i[0];
          if (sn("ThemeStorage: Using custom theme", m), "default" in m && m.default && (sn(`ThemeStorage: Setting theme default scheme to: ${m.default}`), ta.setThemeDefaultScheme(m.default)), "palette" in m) {
            sn("ThemeStorage: Processing single palette theme");
            const { palette: S } = m, v = { ...Gn, ...S };
            return ta.setPalettes({ dark: v, light: v }, u), m.palette = v, sn("ThemeStorage: Single palette theme set successfully"), i;
          }
          if ("palettes" in m) {
            sn("ThemeStorage: Processing dual palettes theme");
            const { dark: S, light: v } = m.palettes, N = { ...Gn, ...S }, $ = { ...Ba, ...v };
            return ta.setPalettes({ dark: N, light: $ }, u), m.palettes = { dark: N, light: $ }, sn("ThemeStorage: Dual palettes theme set successfully"), i;
          }
        }
      })(e, await Tr());
    }
    const Lu = (e, n) => (r) => {
      const i = e !== null;
      return class extends r {
        constructor() {
          super(), this.isWorkspacePlatform = () => ({ isWorkspacePlatform: !0, isBrowserInitialized: !!e, analytics: { isSupported: !0 } }), this.detachPagesFromWindow = uc, this.getAllAttachedPages = Er, this.getPagesForWindow = bi, this.getPageForWindow = dc, this.markUnsavedPagesAsSavedInternal = bc, this.launchApp = Ru, this.savePage = yi, this.saveWorkspace = Oc, this.createSavedPageInternal = mi, this.updateSavedPageInternal = wi, this.deleteSavedPageInternal = ic, this.reorderPagesForWindow = pc, this.getUniquePageTitle = ki, this.updatePageForWindow = cc, this.getLastFocusedBrowserWindow = Kc, this.getThemes = hs, this.invokeCustomActionInternal = qc, this.requestQuitPlatformDialogInternal = is, this.getCurrentWorkspace = Rc, this.setActiveWorkspace = Ao, this.getLanguageResourcesInternal = $c, this.getPageByViewIdentity = async (u) => {
            const m = await fin.Platform.Layout.getLayoutByViewIdentity(u), S = m.identity;
            if (!("layoutName" in S)) throw new Error("Failed to get layout's identity");
            const v = await g().Browser.wrapSync(m.identity).getPages(), N = v.findIndex(($) => $.layoutName === S.layoutName);
            if (N === -1) throw new Error("Failed to get page's index");
            return { windowIdentity: { name: m.identity.name, uuid: m.identity.uuid }, page: v[N], pageIndex: N };
          }, this.openGlobalContextMenuInternal = this.openGlobalContextMenuInternal.bind(this), this.openGlobalContextMenu = this.openGlobalContextMenu.bind(this), this.getSavedPages = this.getSavedPages.bind(this), this.getSavedPage = this.getSavedPage.bind(this), this.createSavedPage = this.createSavedPage.bind(this), this.updateSavedPage = this.updateSavedPage.bind(this), this.deleteSavedPage = this.deleteSavedPage.bind(this), this.handlePageChanges = this.handlePageChanges.bind(this), this.attachPagesToWindow = this.attachPagesToWindow.bind(this), this.openViewTabContextMenuInternal = this.openViewTabContextMenuInternal.bind(this), this.openViewTabContextMenu = this.openViewTabContextMenu.bind(this), this.openPageTabContextMenuInternal = this.openPageTabContextMenuInternal.bind(this), this.openPageTabContextMenu = this.openPageTabContextMenu.bind(this), this.getSavedWorkspaces = this.getSavedWorkspaces.bind(this), this.getSavedWorkspacesMetadata = this.getSavedWorkspacesMetadata.bind(this), this.getSavedWorkspace = this.getSavedWorkspace.bind(this), this.createSavedWorkspace = this.createSavedWorkspace.bind(this), this.updateSavedWorkspace = this.updateSavedWorkspace.bind(this), this.deleteSavedWorkspace = this.deleteSavedWorkspace.bind(this), this.getCurrentWorkspace = this.getCurrentWorkspace.bind(this), this.getDockProviderConfig = this.getDockProviderConfig.bind(this), this.saveDockProviderConfig = this.saveDockProviderConfig.bind(this), this.applyWorkspace = this.applyWorkspace.bind(this), this.restoreLastSavedWorkspaceInternal = this.restoreLastSavedWorkspaceInternal.bind(this), this.setActiveWorkspace = this.setActiveWorkspace.bind(this), this.openSaveButtonContextMenu = this.openSaveButtonContextMenu.bind(this), this.openSaveButtonContextMenuInternal = this.openSaveButtonContextMenuInternal.bind(this), this.getSelectedScheme = this.getSelectedScheme.bind(this), this.setSelectedScheme = this.setSelectedScheme.bind(this), this.analyticsInternal = this.analyticsInternal.bind(this), this.handleAnalytics = this.handleAnalytics.bind(this), this.getLanguage = this.getLanguage.bind(this), this.setLanguage = this.setLanguage.bind(this), this.handleSaveModalOnPageClose = this.handleSaveModalOnPageClose.bind(this), this.shouldPageClose = this.shouldPageClose.bind(this), this.shouldWindowClose = this.shouldWindowClose.bind(this), this.handlePagesAndWindowClose = this.handlePagesAndWindowClose.bind(this), this.setActivePage = this.setActivePage.bind(this), this.handlePageChanges = this.handlePageChanges.bind(this), this.copyPage = this.copyPage.bind(this), this.addPage = this.addPage.bind(this), this.addDefaultPage = this.addDefaultPage.bind(this), this.markUnsavedPagesAsSavedInternal = this.markUnsavedPagesAsSavedInternal.bind(this), this.trackRemovedTabInternal = this.trackRemovedTabInternal.bind(this), this.restoreRemovedTabInternal = this.restoreRemovedTabInternal.bind(this), this.trackVisitedSiteInternal = this.trackVisitedSiteInternal.bind(this), this.getRecentlyVisitedSitesInternal = this.getRecentlyVisitedSitesInternal.bind(this), this.getFrequentlyVisitedSitesInternal = this.getFrequentlyVisitedSitesInternal.bind(this), this.searchSitesInternal = this.searchSitesInternal.bind(this), this.getSearchProvidersInternal = this.getSearchProvidersInternal.bind(this), this.getCuratedContentInternal = this.getCuratedContentInternal.bind(this), this.handleRequestNavigationInternal = this.handleRequestNavigationInternal.bind(this), this.refreshBookmarksInternal = this.refreshBookmarksInternal.bind(this), this.launchBookmarkInternal = this.launchBookmarkInternal.bind(this), this.getNotificationsConfig = this.getNotificationsConfig.bind(this), this.updateDockFavoritesInternal = this.updateDockFavoritesInternal.bind(this), this.updateContentMenuInternal = this.updateContentMenuInternal.bind(this), this.launchDockEntryInternal = this.launchDockEntryInternal.bind(this), this.setDockFavoritesOrderInternal = this.setDockFavoritesOrderInternal.bind(this), this.navigateContentMenuInternal = this.navigateContentMenuInternal.bind(this), this.setDefaultDockButtonsOrderInternal = this.setDefaultDockButtonsOrderInternal.bind(this), this.getDockWorkspacesContextMenuInternal = this.getDockWorkspacesContextMenuInternal.bind(this), this.handleDockWorkspacesMenuResponseInternal = this.handleDockWorkspacesMenuResponseInternal.bind(this), this.removeDockFavoriteInternal = this.removeDockFavoriteInternal.bind(this), this.addDockFavoriteInternal = this.addDockFavoriteInternal.bind(this), this.focusAndExpandSearchInternal = this.focusAndExpandSearchInternal.bind(this), this.sendUpdateVersionModalResponseInternal = this.sendUpdateVersionModalResponseInternal.bind(this), this.requestQuitPlatformDialogInternal = is.bind(this), this.showUpdateVersionModalInternal = ss.bind(this);
        }
        async applyWorkspace(...u) {
          return _c.apply(this, u);
        }
        async restoreLastSavedWorkspaceInternal(...u) {
          return Ii.apply(this, u);
        }
        async getSnapshot() {
          const u = i ? await Nu(async () => da(await super.getSnapshot(void 0, fin.me.identity))) : await da(await super.getSnapshot(void 0, fin.me.identity));
          let m = { ...u, windows: u.windows.filter(xu).map(zr) };
          return m = ((S) => {
            const v = ga(S);
            return v.windows.forEach((N) => {
              var $, Z;
              N.layout && (N.layout = ds(N.layout)), (Z = ($ = N.workspacePlatform) == null ? void 0 : $.pages) == null || Z.forEach((K) => {
                K != null && K.layout && (K.layout = ds(K.layout));
              });
            }), v;
          })(m), m;
        }
        async getViewSnapshot(u) {
          let m = await super.getViewSnapshot(u);
          return m = us(m), m;
        }
        async applySnapshot({ snapshot: u, options: m }) {
          let S = u;
          typeof S == "string" && (S = await super.fetchManifest({ manifestUrl: S }, fin.me.identity));
          const v = function(N) {
            var $, Z;
            for (const K of N.windows) if ((Z = ($ = K.workspacePlatform) == null ? void 0 : $.pages) != null && Z.length) return !0;
            return !1;
          }(S);
          if (!i && v) throw new Error("This snapshot cannot be applied as the platform has been initialized without the browser.");
          return S = ((N) => {
            const $ = ga(N);
            return $.windows.forEach((Z) => {
              var K, le;
              Z.layout = ps(Z.layout), (le = (K = Z.workspacePlatform) == null ? void 0 : K.pages) == null || le.forEach((pe) => {
                pe.layout = ps(pe.layout);
              });
            }), $;
          })(S), super.applySnapshot({ snapshot: S, options: m });
        }
        async createWindow(u, m) {
          return rt.time("OUTER createWindow override", async () => {
            var $, Z, K, le;
            if (i && u.reason === "tearout") {
              const pe = await fin.Window.wrapSync(m).getOptions(), Me = ($ = pe.workspacePlatform) == null ? void 0 : $.windowType;
              u.taskbarIconGroup = pe.taskbarIconGroup, Me && (u.workspacePlatform || (u.workspacePlatform = {}), u.workspacePlatform.windowType = pe.workspacePlatform.windowType, Me === qe.Platform && (u.url = pe.url));
            }
            if (!i || ((Z = u.workspacePlatform) == null ? void 0 : Z.windowType) === qe.Platform) {
              const pe = await super.createWindow(u, m);
              return Zt({ type: "Window", action: "Open Window", value: pe.identity.name, data: { uuid: pe.identity.uuid } }), pe;
            }
            var S;
            S = { allowed: !0 }, ua || (ua = !0, ca(Yn.Browser, S)), ((pe = []) => {
              const Me = pe.filter((nt) => nt.type !== lt.Custom), He = /* @__PURE__ */ new Set(), yt = [];
              for (const nt of Me) He.has(nt.type) && yt.push(nt.type), He.add(nt.type);
              if (yt.length > 0) {
                const nt = yt.join(", ");
                throw new Error(`Encountered a duplicate "${nt}" toolbar button. No more than one instance of a button type may be provided.`);
              }
            })((le = (K = u.workspacePlatform) == null ? void 0 : K.toolbarOptions) == null ? void 0 : le.buttons);
            let v = ((pe) => "workspacePlatform" in pe ? pe : (({ workstacks: Me, pages: He, ...yt }) => ({ ...yt, workspacePlatform: { pages: He || Me || null } }))(pe))(u);
            v = await rt.time("createWindow::applyBrowserDefaults", () => Iu(v, e, { themes: hs(), selectedScheme: this.getSelectedScheme() }));
            const N = await ((pe, Me) => rt.time("createWindow::super.createWindow INNER no defer show", () => super.createWindow(pe, Me)))(v, m);
            return Zt({ type: "Window", action: "Open Window", value: N.identity.name, data: { uuid: N.identity.uuid } }), N;
          });
        }
        async createView(u, m) {
          var v;
          u.opts = T(u.opts, e == null ? void 0 : e.defaultViewOptions), u.opts = await cs(u.opts, this.fetchManifest, m), u.opts = await (async (N) => {
            var K;
            const $ = ga(N), Z = (K = $.workspacePlatform) == null ? void 0 : K.browserNavigationButtons;
            if (Z) {
              const le = Object.keys(Z);
              for (const pe of le) if (Z[pe]) {
                const Me = (await Tu())[pe];
                $.hotkeys ? $.hotkeys.push(...Me) : $.hotkeys = [...Me];
              }
            }
            return $;
          })(u.opts), u.opts = ls(u.opts);
          const S = await super.createView(u, m);
          return _u(S.identity, (v = u.opts._internalWorkspaceData) == null ? void 0 : v.browserNavigationButtons), S;
        }
        async replaceView(u, m) {
          return u.opts.newView = await T(u.opts.newView, e == null ? void 0 : e.defaultViewOptions), u.opts.newView = await cs(u.opts.newView, this.fetchManifest, m), super.replaceView(u, m);
        }
        async replaceLayout(u, m) {
          var S;
          return await gt(m) || ((S = u.opts.layout) == null || delete S.dimensions), super.replaceLayout(u, m);
        }
        async getSavedPage(...u) {
          return Fo.apply(this, u);
        }
        async getSavedPages(...u) {
          return Zc.apply(this, u);
        }
        async createSavedPage(...u) {
          return Li.apply(this, u);
        }
        async deleteSavedPage(...u) {
          return Vi.apply(this, u);
        }
        async updateSavedPage(...u) {
          return Qc.apply(this, u);
        }
        async getSavedWorkspace(...u) {
          return Ho.apply(this, u);
        }
        async getSavedWorkspaces(...u) {
          return ns.apply(this, u);
        }
        async getSavedWorkspacesMetadata(...u) {
          return (await this.getSavedWorkspaces(...u)).map((m) => ({ workspaceId: m.workspaceId, title: m.title }));
        }
        async createSavedWorkspace(...u) {
          return as.apply(this, u);
        }
        async deleteSavedWorkspace(...u) {
          return rs.apply(this, u);
        }
        async updateSavedWorkspace(...u) {
          return Su.apply(this, u);
        }
        async getDockProviderConfig(...u) {
          return vu.apply(this, u);
        }
        async saveDockProviderConfig(...u) {
          return ku.apply(this, u);
        }
        async attachPagesToWindow(u) {
          const m = await Go(u.pages, e);
          await li(m), await sc({ ...u, pages: m });
        }
        async addPage(u) {
          const m = await gt(u.identity), S = await Ze(u.identity), { page: v, insertionIndex: N } = u;
          v != null && v.title || m || (v.title = await S.dispatch(de.GetUniquePageTitle, void 0));
          const $ = (await this.getAllAttachedPages()).find((K) => K.pageId === v.pageId || K.title === v.title);
          if ($) {
            if ($.pageId === v.pageId) throw new Error(`page with id ${v.pageId} is already attached to a browser window ${$.parentIdentity.name}`);
            if (!m) throw new Error(`addPage title collision, page with title ${v.title} already exists, conflicting page id: ${$.pageId} with title ${$.title}`);
          }
          const Z = { identity: u.identity, pages: [{ ...v, multiInstanceViewBehavior: u.multiInstanceViewBehavior || "duplicate" }], insertionIndex: N };
          await this.attachPagesToWindow(Z);
        }
        async addDefaultPage(u) {
          await this.addPage(u), await this.setActivePage({ identity: u.identity, pageId: u.page.pageId });
        }
        async setActivePage(...u) {
          return lc.apply(this, u);
        }
        async openGlobalContextMenuInternal(...u) {
          return gu.apply(this, u);
        }
        async openGlobalContextMenu(...u) {
          return io.apply(this, [...u, Qa.GlobalMenu, oo.BottomRight]);
        }
        async openViewTabContextMenuInternal(...u) {
          return mu.apply(this, u);
        }
        async openViewTabContextMenu(...u) {
          return io.apply(this, [...u, Qa.ContextMenu]);
        }
        async openPageTabContextMenuInternal(...u) {
          return wu.apply(this, u);
        }
        async openPageTabContextMenu(...u) {
          return io.apply(this, [...u, Qa.ContextMenu]);
        }
        async openSaveButtonContextMenu(...u) {
          return io.apply(this, u);
        }
        async openSaveButtonContextMenuInternal(...u) {
          return yu.apply(this, u);
        }
        getSelectedScheme(...u) {
          return p.apply(this, u);
        }
        async setSelectedScheme(...u) {
          return l.apply(this, u);
        }
        async handlePageChanges(...u) {
          return yc.apply(this, u);
        }
        async analyticsInternal(...u) {
          return Sc.apply(this, u);
        }
        async handleAnalytics(...u) {
          console.debug("default analytics impl");
        }
        async handleSaveModalOnPageClose(...u) {
          return fc.apply(this, u);
        }
        async shouldPageClose(...u) {
          return hc.apply(this, u);
        }
        async shouldWindowClose(...u) {
          return gc.apply(this, u);
        }
        handlePagesAndWindowClose(...u) {
          return mc.apply(this, u);
        }
        async copyPage(...u) {
          return wc.apply(this, u);
        }
        async getNotificationsConfig() {
          return n;
        }
        async setLanguage(...u) {
          return Uc.apply(this, u);
        }
        async getLanguage() {
          return Di.apply(this);
        }
        async trackRemovedTabInternal(...u) {
          return Xc.apply(this, u);
        }
        async restoreRemovedTabInternal() {
          const u = await (async () => {
            if (!er) throw new Error("Unable to pop last removed tab - IndexDB not supported");
            const m = er[No], S = await m.toCollection().keys();
            if (S.length > 0) {
              const v = Math.max(...S.map(($) => Number($))).toString(), N = await m.get(v);
              if (N) {
                await m.delete(v);
                const { id: $, ...Z } = N;
                return Z;
              }
            }
          })();
          if ("page" in u) if (await Ye(u.identity)) {
            const m = g().Browser.wrapSync(u.identity);
            await m.addPage(u.page), await m.setActivePage(u.page.pageId);
          } else g().createWindow({ name: u.identity.name, workspacePlatform: { pages: [u.page], windowType: qe.Browser } });
          else (function(m) {
            return "window" in m;
          })(u) && g().createWindow({ workspacePlatform: { pages: u.window.pages, windowType: qe.Browser } });
        }
        async trackVisitedSiteInternal(...u) {
          return tu.apply(this, u);
        }
        async getRecentlyVisitedSitesInternal(...u) {
          return await Bu.apply(this, u);
        }
        async getFrequentlyVisitedSitesInternal(...u) {
          return nu.apply(this, u);
        }
        async searchSitesInternal(...u) {
          return await Du.apply(this, u);
        }
        async getSearchProvidersInternal(...u) {
          return await Ou.apply(this, u);
        }
        async getCuratedContentInternal(...u) {
          return await Wu.apply(this, u);
        }
        async handleRequestNavigationInternal(...u) {
        }
        async launchBookmarkInternal(u) {
          return au(u);
        }
        async refreshBookmarksInternal() {
          (await g().Browser.getAllWindows()).forEach(async ({ identity: u }) => {
            (await At(u)).dispatch(Et.RefreshBookmarksInternal);
          }), (await pa(Yc())).dispatch(Et.RefreshBookmarksInternal), await (async () => {
            const u = await co();
            u && await (await At(u.identity, so)).dispatch(Et.RefreshBookmarksInternal);
          })();
        }
        async updateDockFavoritesInternal(u) {
          return (async (m) => {
            const S = await co();
            if (!S) throw new Error("Companion Dock window not found");
            await (await At(S.identity, so)).dispatch(Nn.UpdateFavoriteEntries, m);
          })(u);
        }
        async updateContentMenuInternal(u) {
          return (async (m) => {
            const S = await co();
            if (!S) throw new Error("Companion Dock window not found");
            await (await At(S.identity, so)).dispatch(Nn.UpdateContentMenu, m);
          })(u);
        }
        async launchDockEntryInternal(u) {
          return (async (m) => (await Ra()).dispatch("launch-entry", m))(u);
        }
        async setDefaultDockButtonsOrderInternal(u) {
          return (async (m) => (await Ra()).dispatch("set-default-dock-buttons-order", m))(u);
        }
        async setDockFavoritesOrderInternal(u) {
          return (async (m) => (await Ra()).dispatch("set-dock-favorites-order", m))(u);
        }
        async addDockFavoriteInternal(u) {
          return (async (m) => (await Ra()).dispatch("add-favorite-entry", m))(u);
        }
        async removeDockFavoriteInternal(u) {
          return (async (m) => (await Ra()).dispatch("remove-favorite-entry", m))(u);
        }
        async navigateContentMenuInternal(u) {
          return (async (m) => {
            const S = await co();
            if (!S) throw new Error("Companion Dock window not found");
            await (await At(S.identity, so)).dispatch(Nn.NavigateContentMenu, m);
          })(u);
        }
        async getDockWorkspacesContextMenuInternal() {
          return (async () => (await Ra()).dispatch("get-dock-workspaces-context-menu", void 0))();
        }
        async handleDockWorkspacesMenuResponseInternal(u) {
          return (async (m) => (await Ra()).dispatch("handle-dock-workspaces-menu-response", m))(u);
        }
        async focusAndExpandSearchInternal() {
          return bu();
        }
        async sendUpdateVersionModalResponseInternal(u) {
          return ko(u);
        }
        async showUpdateVersionModalInternal(u, m) {
          return ss(u, m);
        }
      };
    };
    function Vu(e, n, r) {
      const i = Lu(e, r);
      try {
        return typeof n == "function" ? (u) => n(i(u)) : Array.isArray(n) ? [...n, i] : (u) => new (i(u))();
      } catch (u) {
        throw new Error("WorkspacePlatform.init Error:", u);
      }
    }
    const Uu = ["green", "purple", "orange", "red", "pink", "yellow"], gs = "CONTEXT_GROUP_PAGE", $u = () => (e) => class extends e {
      getContextGroups() {
        return super.getContextGroups().map((n) => {
          var r, i;
          return Uu.includes((r = n.displayMetadata) == null ? void 0 : r.name) ? { ...n, displayMetadata: { ...n.displayMetadata, name: re((i = n.displayMetadata) == null ? void 0 : i.name) } } : n;
        });
      }
    }, ju = () => {
      const e = new Set($o.keys());
      return (n) => class extends n {
        constructor() {
          super(), this.onClientConnected = async (i) => {
            if (i.name.startsWith("internal-generated-view")) {
              const { page: u } = await g().Browser.getPageByViewIdentity(i), m = u.contextGroup;
              this.joinContextGroup({ contextGroupId: m ?? gs, target: i }, { uuid: this.fin.me.uuid, name: this.fin.me.name });
            }
          };
          const r = this.interopClients.set;
          this.interopClients.set = (i, u) => {
            r.call(this.interopClients, i, u), this.onClientConnected(u.clientIdentity);
          };
        }
        async joinContextGroup({ contextGroupId: r, target: i }, u) {
          if (r !== gs) return super.joinContextGroup({ contextGroupId: r, target: i }, u);
          try {
            const m = (await g().Browser.getPageByViewIdentity(i)).page.layoutName;
            if (!m) throw new Error("View does not belong to a page");
            if (!e.has(m) && (e.add(m), !this.contextGroupsById.has(m))) {
              const S = /* @__PURE__ */ new Map();
              this.contextGroupsById.set(m, S);
            }
            await super.joinContextGroup({ contextGroupId: m, target: i }, u), console.debug(`Successfully added view ${i.name} to layout context group ${m}.`);
          } catch (m) {
            console.debug(`Did not auto add entity ${JSON.stringify(i)} to a layout context group - this means it is not a view or does not belong to a named layout. ${m.stack}`);
          }
        }
        getContextGroups() {
          return Array.from(e).map((r) => ({ id: r, displayMetadata: $o.get(r) ?? {} }));
        }
        setContextForGroup(r, i) {
          if (!this.contextGroupsById.has(i)) {
            const u = /* @__PURE__ */ new Map();
            this.contextGroupsById.set(i, u);
          }
          return super.setContextForGroup(r, i);
        }
      };
    }, Ku = (e, n) => {
      const r = ((i) => jr(i) ? ju() : $u())(n);
      try {
        return typeof e == "function" ? (i) => e(r(i)) : Array.isArray(e) ? [...e, r] : (i) => new (r(i))();
      } catch (i) {
        throw new Error("WorkspacePlatform.init Error:", i);
      }
    };
    async function Hu() {
      (async () => Ie().on("window-closed", zc))(), async function() {
        const e = fin.Application.getCurrentSync(), n = await Bi();
        await Promise.all(n.map(async (i) => {
          await _a(i.identity, void 0, !0);
        }));
        const r = await fin.System.getFocusedWindow();
        r && r.name.startsWith(We.BrowserWindow) && await _a(r, void 0, !0), await e.addListener("window-focused", async (i) => {
          await _a(i, void 0, !0);
        }), await e.addListener("window-minimized", async (i) => {
          await _a(i, !1);
        }), await e.addListener("window-restored", async (i) => {
          await _a(i, !0);
        }), await e.addListener("window-closed", Gc);
      }(), Ao(await Eo());
    }
    let Jo;
    function Gu({ overrideCallback: e, interopOverride: n, browser: r, notifications: i, analytics: u, integrations: m = [], workspaceAsar: S }) {
      if (console.debug("initPlatform: Starting initPlatform function"), !Ne) throw new Error("Cannot be used outside an OpenFin env.");
      return Jo ? console.debug("initPlatform: Returning existing init promise") : Jo = (async () => {
        console.debug("initPlatform: Creating new init promise");
        const v = fin.Platform.getCurrentSync();
        var N, $;
        if (v.once("platform-api-ready", () => Hu()), v.on("window-show-all-downloads", ({ name: le, uuid: pe }) => {
          Ti({ name: le, uuid: pe });
        }), r != null && r.title && (N = r.title, ts = N), Pc(u), S) {
          const le = `workspace-${encodeURIComponent(fin.me.uuid)}`, { baseUrl: pe } = await fin.System.serveAsset({ ...S, hostName: le });
          kt(pe);
        }
        r != null && r.browserBaseUrl && kt(r.browserBaseUrl), jr(r) && (pn = !0, $ = r, Dt = $ == null ? void 0 : $.aiPanelOptions, Rn());
        const Z = Ln();
        var K;
        return Z.setWorkspaceStorage(sa(`${ft}-workspace`)), Z.trySynchronizeWorkspaceStorage(), await fin.Platform.init({ overrideCallback: Vu(r, e || (r == null ? void 0 : r.overrideCallback), i), interopOverride: Ku(n || (r == null ? void 0 : r.interopOverride), r) }), K = { allowed: !0 }, ca(Yn.Platform, K), await Promise.all(m.map(async (le) => {
          ((pe, Me) => {
            ca(`${Yn.Microflow}:${pe}`, Me, "integration-feature");
          })(le.workflowIntegrationName, { allowed: !0, apiVersion: et }), await le._initializeWorkflows();
        })), console.debug("initPlatform: Platform initialization completed successfully"), v;
      })(), Jo;
    }
    const zu = async ({ theme: e, customActions: n, language: r, ...i }) => {
      console.debug("Platform init: Starting platform initialization");
      const u = et.split(".").map((N) => parseInt(N));
      if (!await (async (N) => {
        if ((await Oe()).disableRuntimeValidation) return console.debug("Runtime version validation is disabled for Workspace"), !0;
        if (await gt()) return console.log("Runtime version validation is disabled for Workspace Enterprise"), !0;
        const $ = (await fin.System.getVersion()).split(".").map((Z) => parseInt(Z));
        return N.every((Z, K) => !(K < 3) || $[K] === N[K]);
      })(u)) throw new Error(`Runtime version is not supported.  ${u[0]}.${u[1]}.${u[2]}.* is required`);
      var S;
      Fu(e), e && (S = { allowed: !0 }, ca(Yn.Theming, S)), n && (Wo = n), await jc(r == null ? void 0 : r.initialLanguage);
      const v = await Gu(i);
      return console.debug("Platform init: Platform initialization completed"), v;
    };
  })(), Vs.exports = d;
})();
var ac = Vs.exports;
const Vd = /* @__PURE__ */ si(ac), Ud = /* @__PURE__ */ tl({
  __proto__: null,
  default: Vd
}, [ac]);
typeof window < "u" && (window.WorkspacePlatform = Ud);
export {
  Ud as default
};
