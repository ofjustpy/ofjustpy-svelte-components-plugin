var ht = Object.defineProperty;
var pt = (t, e, n) => e in t ? ht(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var T = (t, e, n) => (pt(t, typeof e != "symbol" ? e + "" : e, n), n);
function y() {
}
const et = (t) => t;
function W(t, e) {
  for (const n in e)
    t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function nt(t) {
  return t();
}
function X() {
  return /* @__PURE__ */ Object.create(null);
}
function N(t) {
  t.forEach(nt);
}
function A(t) {
  return typeof t == "function";
}
function mt(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function gt(t) {
  return Object.keys(t).length === 0;
}
const it = typeof window < "u";
let rt = it ? () => window.performance.now() : () => Date.now(), G = it ? (t) => requestAnimationFrame(t) : y;
const E = /* @__PURE__ */ new Set();
function ot(t) {
  E.forEach((e) => {
    e.c(t) || (E.delete(e), e.f());
  }), E.size !== 0 && G(ot);
}
function st(t) {
  let e;
  return E.size === 0 && G(ot), {
    promise: new Promise((n) => {
      E.add(e = { c: t, f: n });
    }),
    abort() {
      E.delete(e);
    }
  };
}
function R(t, e) {
  t.appendChild(e);
}
function ct(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function yt(t) {
  const e = C("style");
  return e.textContent = "/* empty */", $t(ct(t), e), e.sheet;
}
function $t(t, e) {
  return R(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function J(t, e, n) {
  t.insertBefore(e, n || null);
}
function q(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function C(t) {
  return document.createElement(t);
}
function ft(t) {
  return document.createTextNode(t);
}
function vt() {
  return ft(" ");
}
function wt(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function L(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function kt(t) {
  return Array.from(t.childNodes);
}
function bt(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function xt(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: i });
}
const D = /* @__PURE__ */ new Map();
let z = 0;
function Et(t) {
  let e = 5381, n = t.length;
  for (; n--; )
    e = (e << 5) - e ^ t.charCodeAt(n);
  return e >>> 0;
}
function Ct(t, e) {
  const n = { stylesheet: yt(e), rules: {} };
  return D.set(t, n), n;
}
function ut(t, e, n, i, r, o, l, a = 0) {
  const h = 16.666 / i;
  let s = `{
`;
  for (let m = 0; m <= 1; m += h) {
    const g = e + (n - e) * o(m);
    s += m * 100 + `%{${l(g, 1 - g)}}
`;
  }
  const f = s + `100% {${l(n, 1 - n)}}
}`, c = `__svelte_${Et(f)}_${a}`, d = ct(t), { stylesheet: p, rules: u } = D.get(d) || Ct(d, t);
  u[c] || (u[c] = !0, p.insertRule(`@keyframes ${c} ${f}`, p.cssRules.length));
  const _ = t.style.animation || "";
  return t.style.animation = `${_ ? `${_}, ` : ""}${c} ${i}ms linear ${r}ms 1 both`, z += 1, c;
}
function H(t, e) {
  const n = (t.style.animation || "").split(", "), i = n.filter(
    e ? (o) => o.indexOf(e) < 0 : (o) => o.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), r = n.length - i.length;
  r && (t.style.animation = i.join(", "), z -= r, z || Ot());
}
function Ot() {
  G(() => {
    z || (D.forEach((t) => {
      const { ownerNode: e } = t.stylesheet;
      e && q(e);
    }), D.clear());
  });
}
let K;
function j(t) {
  K = t;
}
const x = [], Y = [];
let O = [];
const Z = [], Mt = /* @__PURE__ */ Promise.resolve();
let U = !1;
function Nt() {
  U || (U = !0, Mt.then(lt));
}
function M(t) {
  O.push(t);
}
const F = /* @__PURE__ */ new Set();
let b = 0;
function lt() {
  if (b !== 0)
    return;
  const t = K;
  do {
    try {
      for (; b < x.length; ) {
        const e = x[b];
        b++, j(e), St(e.$$);
      }
    } catch (e) {
      throw x.length = 0, b = 0, e;
    }
    for (j(null), x.length = 0, b = 0; Y.length; )
      Y.pop()();
    for (let e = 0; e < O.length; e += 1) {
      const n = O[e];
      F.has(n) || (F.add(n), n());
    }
    O.length = 0;
  } while (x.length);
  for (; Z.length; )
    Z.pop()();
  U = !1, F.clear(), j(t);
}
function St(t) {
  if (t.fragment !== null) {
    t.update(), N(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(M);
  }
}
function Rt(t) {
  const e = [], n = [];
  O.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), O = e;
}
let S;
function at() {
  return S || (S = Promise.resolve(), S.then(() => {
    S = null;
  })), S;
}
function I(t, e, n) {
  t.dispatchEvent(xt(`${e ? "intro" : "outro"}${n}`));
}
const P = /* @__PURE__ */ new Set();
let $;
function jt() {
  $ = {
    r: 0,
    c: [],
    p: $
    // parent group
  };
}
function At() {
  $.r || N($.c), $ = $.p;
}
function V(t, e) {
  t && t.i && (P.delete(t), t.i(e));
}
function tt(t, e, n, i) {
  if (t && t.o) {
    if (P.has(t))
      return;
    P.add(t), $.c.push(() => {
      P.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
const dt = { duration: 0 };
function qt(t, e, n) {
  const i = { direction: "in" };
  let r = e(t, n, i), o = !1, l, a, h = 0;
  function s() {
    l && H(t, l);
  }
  function f() {
    const {
      delay: d = 0,
      duration: p = 300,
      easing: u = et,
      tick: _ = y,
      css: m
    } = r || dt;
    m && (l = ut(t, 0, 1, p, d, u, m, h++)), _(0, 1);
    const g = rt() + d, k = g + p;
    a && a.abort(), o = !0, M(() => I(t, !0, "start")), a = st((v) => {
      if (o) {
        if (v >= k)
          return _(1, 0), I(t, !0, "end"), s(), o = !1;
        if (v >= g) {
          const B = u((v - g) / p);
          _(B, 1 - B);
        }
      }
      return o;
    });
  }
  let c = !1;
  return {
    start() {
      c || (c = !0, H(t), A(r) ? (r = r(i), at().then(f)) : f());
    },
    invalidate() {
      c = !1;
    },
    end() {
      o && (s(), o = !1);
    }
  };
}
function Bt(t, e, n) {
  const i = { direction: "out" };
  let r = e(t, n, i), o = !0, l;
  const a = $;
  a.r += 1;
  let h;
  function s() {
    const {
      delay: f = 0,
      duration: c = 300,
      easing: d = et,
      tick: p = y,
      css: u
    } = r || dt;
    u && (l = ut(t, 1, 0, c, f, d, u));
    const _ = rt() + f, m = _ + c;
    M(() => I(t, !1, "start")), "inert" in t && (h = /** @type {HTMLElement} */
    t.inert, t.inert = !0), st((g) => {
      if (o) {
        if (g >= m)
          return p(0, 1), I(t, !1, "end"), --a.r || N(a.c), !1;
        if (g >= _) {
          const k = d((g - _) / c);
          p(1 - k, k);
        }
      }
      return o;
    });
  }
  return A(r) ? at().then(() => {
    r = r(i), s();
  }) : s(), {
    end(f) {
      f && "inert" in t && (t.inert = h), f && r.tick && r.tick(1, 0), o && (l && H(t, l), o = !1);
    }
  };
}
function Lt(t, e, n) {
  const { fragment: i, after_update: r } = t.$$;
  i && i.m(e, n), M(() => {
    const o = t.$$.on_mount.map(nt).filter(A);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : N(o), t.$$.on_mount = [];
  }), r.forEach(M);
}
function Pt(t, e) {
  const n = t.$$;
  n.fragment !== null && (Rt(n.after_update), N(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Dt(t, e) {
  t.$$.dirty[0] === -1 && (x.push(t), Nt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function zt(t, e, n, i, r, o, l = null, a = [-1]) {
  const h = K;
  j(t);
  const s = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: y,
    not_equal: r,
    bound: X(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (h ? h.$$.context : [])),
    // everything else
    callbacks: X(),
    dirty: a,
    skip_bound: !1,
    root: e.target || h.$$.root
  };
  l && l(s.root);
  let f = !1;
  if (s.ctx = n ? n(t, e.props || {}, (c, d, ...p) => {
    const u = p.length ? p[0] : d;
    return s.ctx && r(s.ctx[c], s.ctx[c] = u) && (!s.skip_bound && s.bound[c] && s.bound[c](u), f && Dt(t, c)), d;
  }) : [], s.update(), f = !0, N(s.before_update), s.fragment = i ? i(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = kt(e.target);
      s.fragment && s.fragment.l(c), c.forEach(q);
    } else
      s.fragment && s.fragment.c();
    e.intro && V(t.$$.fragment), Lt(t, e.target, e.anchor), lt();
  }
  j(h);
}
class It {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    T(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    T(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Pt(this, 1), this.$destroy = y;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!A(n))
      return y;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const r = i.indexOf(n);
      r !== -1 && i.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !gt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Tt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Tt);
function Ft(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Ht(t) {
  return --t * t * t * t * t + 1;
}
function Ut({ fallback: t, ...e }) {
  const n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  function r(l, a, h) {
    const {
      delay: s = 0,
      duration: f = (w) => Math.sqrt(w) * 30,
      easing: c = Ft
    } = W(W({}, e), h), d = l.getBoundingClientRect(), p = a.getBoundingClientRect(), u = d.left - p.left, _ = d.top - p.top, m = d.width / p.width, g = d.height / p.height, k = Math.sqrt(u * u + _ * _), v = getComputedStyle(a), B = v.transform === "none" ? "" : v.transform, _t = +v.opacity;
    return {
      delay: s,
      duration: A(f) ? f(k) : f,
      easing: c,
      css: (w, Q) => `
				opacity: ${w * _t};
				transform-origin: top left;
				transform: ${B} translate(${Q * u}px,${Q * _}px) scale(${w + (1 - w) * m}, ${w + (1 - w) * g});
			`
    };
  }
  function o(l, a, h) {
    return (s, f) => (l.set(f.key, s), () => {
      if (a.has(f.key)) {
        const c = a.get(f.key);
        return a.delete(f.key), r(c, s, f);
      }
      return l.delete(f.key), t && t(s, f, h);
    });
  }
  return [o(i, n, !1), o(n, i, !0)];
}
function Vt(t) {
  let e;
  return {
    c() {
      e = C("div"), e.textContent = "hiding", L(e, "class", "");
    },
    m(n, i) {
      J(n, e, i);
    },
    p: y,
    i: y,
    o: y,
    d(n) {
      n && q(e);
    }
  };
}
function Gt(t) {
  let e, n, i, r;
  return {
    c() {
      e = C("div"), e.innerHTML = "";
    },
    m(o, l) {
      J(o, e, l), r = !0;
    },
    p(o, l) {
      t = o;
    },
    i(o) {
      r || (o && M(() => {
        r && (i && i.end(1), n = qt(
          e,
          /*receive*/
          t[2],
          { key: (
            /*isExpanded*/
            t[0]
          ) }
        ), n.start());
      }), r = !0);
    },
    o(o) {
      n && n.invalidate(), o && (i = Bt(
        e,
        /*send*/
        t[1],
        { key: (
          /*isExpanded*/
          t[0]
        ) }
      )), r = !1;
    },
    d(o) {
      o && q(e), o && i && i.end();
    }
  };
}
function Jt(t) {
  let e, n, i, r, o, l, a = (
    /*isExpanded*/
    t[0] ? "-" : "+"
  ), h, s, f;
  const c = [Gt, Vt], d = [];
  function p(u, _) {
    return (
      /*isExpanded*/
      u[0] ? 0 : 1
    );
  }
  return i = p(t), r = d[i] = c[i](t), {
    c() {
      e = C("div"), n = C("div"), r.c(), o = vt(), l = C("button"), h = ft(a), L(l, "class", ""), L(n, "class", "flex justify-between items-center"), L(e, "class", "relative border p-4");
    },
    m(u, _) {
      J(u, e, _), R(e, n), d[i].m(n, null), R(n, o), R(n, l), R(l, h), s || (f = wt(
        l,
        "click",
        /*toggleExpand*/
        t[3]
      ), s = !0);
    },
    p(u, [_]) {
      let m = i;
      i = p(u), i === m ? d[i].p(u, _) : (jt(), tt(d[m], 1, 1, () => {
        d[m] = null;
      }), At(), r = d[i], r ? r.p(u, _) : (r = d[i] = c[i](u), r.c()), V(r, 1), r.m(n, o)), _ & /*isExpanded*/
      1 && a !== (a = /*isExpanded*/
      u[0] ? "-" : "+") && bt(h, a);
    },
    i(u) {
      V(r);
    },
    o(u) {
      tt(r);
    },
    d(u) {
      u && q(e), d[i].d(), s = !1, f();
    }
  };
}
function Kt(t, e, n) {
  let i = !1;
  const [r, o] = Ut({
    duration: (a) => Math.sqrt(a * 200),
    fallback(a, h) {
      const s = getComputedStyle(a), f = s.transform === "none" ? "" : s.transform;
      return {
        duration: 600,
        easing: Ht,
        css: (c) => `
          transform: ${f} scale(${c});
          opacity: ${c}
        `
      };
    }
  });
  return [i, r, o, () => {
    n(0, i = !i);
  }];
}
class Wt extends It {
  constructor(e) {
    super(), zt(this, e, Kt, Jt, mt, {});
  }
}
export {
  Wt as Collapsible
};
