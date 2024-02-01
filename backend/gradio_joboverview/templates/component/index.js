const {
  SvelteComponent: Zr,
  assign: Wr,
  create_slot: Jr,
  detach: $r,
  element: Qr,
  get_all_dirty_from_scope: Yr,
  get_slot_changes: Kr,
  get_spread_update: eo,
  init: to,
  insert: no,
  safe_not_equal: lo,
  set_dynamic_element_data: cl,
  set_style: Q,
  toggle_class: ye,
  transition_in: Di,
  transition_out: Fi,
  update_slot_base: io
} = window.__gradio__svelte__internal;
function ro(t) {
  let e, n, l;
  const i = (
    /*#slots*/
    t[18].default
  ), r = Jr(
    i,
    t,
    /*$$scope*/
    t[17],
    null
  );
  let o = [
    { "data-testid": (
      /*test_id*/
      t[7]
    ) },
    { id: (
      /*elem_id*/
      t[2]
    ) },
    {
      class: n = "block " + /*elem_classes*/
      t[3].join(" ") + " svelte-1t38q2d"
    }
  ], a = {};
  for (let s = 0; s < o.length; s += 1)
    a = Wr(a, o[s]);
  return {
    c() {
      e = Qr(
        /*tag*/
        t[14]
      ), r && r.c(), cl(
        /*tag*/
        t[14]
      )(e, a), ye(
        e,
        "hidden",
        /*visible*/
        t[10] === !1
      ), ye(
        e,
        "padded",
        /*padding*/
        t[6]
      ), ye(
        e,
        "border_focus",
        /*border_mode*/
        t[5] === "focus"
      ), ye(e, "hide-container", !/*explicit_call*/
      t[8] && !/*container*/
      t[9]), Q(
        e,
        "height",
        /*get_dimension*/
        t[15](
          /*height*/
          t[0]
        )
      ), Q(e, "width", typeof /*width*/
      t[1] == "number" ? `calc(min(${/*width*/
      t[1]}px, 100%))` : (
        /*get_dimension*/
        t[15](
          /*width*/
          t[1]
        )
      )), Q(
        e,
        "border-style",
        /*variant*/
        t[4]
      ), Q(
        e,
        "overflow",
        /*allow_overflow*/
        t[11] ? "visible" : "hidden"
      ), Q(
        e,
        "flex-grow",
        /*scale*/
        t[12]
      ), Q(e, "min-width", `calc(min(${/*min_width*/
      t[13]}px, 100%))`), Q(e, "border-width", "var(--block-border-width)");
    },
    m(s, f) {
      no(s, e, f), r && r.m(e, null), l = !0;
    },
    p(s, f) {
      r && r.p && (!l || f & /*$$scope*/
      131072) && io(
        r,
        i,
        s,
        /*$$scope*/
        s[17],
        l ? Kr(
          i,
          /*$$scope*/
          s[17],
          f,
          null
        ) : Yr(
          /*$$scope*/
          s[17]
        ),
        null
      ), cl(
        /*tag*/
        s[14]
      )(e, a = eo(o, [
        (!l || f & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          s[7]
        ) },
        (!l || f & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          s[2]
        ) },
        (!l || f & /*elem_classes*/
        8 && n !== (n = "block " + /*elem_classes*/
        s[3].join(" ") + " svelte-1t38q2d")) && { class: n }
      ])), ye(
        e,
        "hidden",
        /*visible*/
        s[10] === !1
      ), ye(
        e,
        "padded",
        /*padding*/
        s[6]
      ), ye(
        e,
        "border_focus",
        /*border_mode*/
        s[5] === "focus"
      ), ye(e, "hide-container", !/*explicit_call*/
      s[8] && !/*container*/
      s[9]), f & /*height*/
      1 && Q(
        e,
        "height",
        /*get_dimension*/
        s[15](
          /*height*/
          s[0]
        )
      ), f & /*width*/
      2 && Q(e, "width", typeof /*width*/
      s[1] == "number" ? `calc(min(${/*width*/
      s[1]}px, 100%))` : (
        /*get_dimension*/
        s[15](
          /*width*/
          s[1]
        )
      )), f & /*variant*/
      16 && Q(
        e,
        "border-style",
        /*variant*/
        s[4]
      ), f & /*allow_overflow*/
      2048 && Q(
        e,
        "overflow",
        /*allow_overflow*/
        s[11] ? "visible" : "hidden"
      ), f & /*scale*/
      4096 && Q(
        e,
        "flex-grow",
        /*scale*/
        s[12]
      ), f & /*min_width*/
      8192 && Q(e, "min-width", `calc(min(${/*min_width*/
      s[13]}px, 100%))`);
    },
    i(s) {
      l || (Di(r, s), l = !0);
    },
    o(s) {
      Fi(r, s), l = !1;
    },
    d(s) {
      s && $r(e), r && r.d(s);
    }
  };
}
function oo(t) {
  let e, n = (
    /*tag*/
    t[14] && ro(t)
  );
  return {
    c() {
      n && n.c();
    },
    m(l, i) {
      n && n.m(l, i), e = !0;
    },
    p(l, [i]) {
      /*tag*/
      l[14] && n.p(l, i);
    },
    i(l) {
      e || (Di(n, l), e = !0);
    },
    o(l) {
      Fi(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function so(t, e, n) {
  let { $$slots: l = {}, $$scope: i } = e, { height: r = void 0 } = e, { width: o = void 0 } = e, { elem_id: a = "" } = e, { elem_classes: s = [] } = e, { variant: f = "solid" } = e, { border_mode: u = "base" } = e, { padding: c = !0 } = e, { type: _ = "normal" } = e, { test_id: h = void 0 } = e, { explicit_call: m = !1 } = e, { container: v = !0 } = e, { visible: g = !0 } = e, { allow_overflow: y = !0 } = e, { scale: p = null } = e, { min_width: d = 0 } = e, b = _ === "fieldset" ? "fieldset" : "div";
  const L = (w) => {
    if (w !== void 0) {
      if (typeof w == "number")
        return w + "px";
      if (typeof w == "string")
        return w;
    }
  };
  return t.$$set = (w) => {
    "height" in w && n(0, r = w.height), "width" in w && n(1, o = w.width), "elem_id" in w && n(2, a = w.elem_id), "elem_classes" in w && n(3, s = w.elem_classes), "variant" in w && n(4, f = w.variant), "border_mode" in w && n(5, u = w.border_mode), "padding" in w && n(6, c = w.padding), "type" in w && n(16, _ = w.type), "test_id" in w && n(7, h = w.test_id), "explicit_call" in w && n(8, m = w.explicit_call), "container" in w && n(9, v = w.container), "visible" in w && n(10, g = w.visible), "allow_overflow" in w && n(11, y = w.allow_overflow), "scale" in w && n(12, p = w.scale), "min_width" in w && n(13, d = w.min_width), "$$scope" in w && n(17, i = w.$$scope);
  }, [
    r,
    o,
    a,
    s,
    f,
    u,
    c,
    h,
    m,
    v,
    g,
    y,
    p,
    d,
    b,
    L,
    _,
    i,
    l
  ];
}
class Xn extends Zr {
  constructor(e) {
    super(), to(this, e, so, oo, lo, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 16,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const {
  SvelteComponent: ao,
  append: dn,
  attr: Nt,
  create_component: fo,
  destroy_component: uo,
  detach: co,
  element: _l,
  init: _o,
  insert: ho,
  mount_component: mo,
  safe_not_equal: bo,
  set_data: po,
  space: go,
  text: vo,
  toggle_class: we,
  transition_in: yo,
  transition_out: wo
} = window.__gradio__svelte__internal;
function Eo(t) {
  let e, n, l, i, r, o;
  return l = new /*Icon*/
  t[1]({}), {
    c() {
      e = _l("label"), n = _l("span"), fo(l.$$.fragment), i = go(), r = vo(
        /*label*/
        t[0]
      ), Nt(n, "class", "svelte-9gxdi0"), Nt(e, "for", ""), Nt(e, "data-testid", "block-label"), Nt(e, "class", "svelte-9gxdi0"), we(e, "hide", !/*show_label*/
      t[2]), we(e, "sr-only", !/*show_label*/
      t[2]), we(
        e,
        "float",
        /*float*/
        t[4]
      ), we(
        e,
        "hide-label",
        /*disable*/
        t[3]
      );
    },
    m(a, s) {
      ho(a, e, s), dn(e, n), mo(l, n, null), dn(e, i), dn(e, r), o = !0;
    },
    p(a, [s]) {
      (!o || s & /*label*/
      1) && po(
        r,
        /*label*/
        a[0]
      ), (!o || s & /*show_label*/
      4) && we(e, "hide", !/*show_label*/
      a[2]), (!o || s & /*show_label*/
      4) && we(e, "sr-only", !/*show_label*/
      a[2]), (!o || s & /*float*/
      16) && we(
        e,
        "float",
        /*float*/
        a[4]
      ), (!o || s & /*disable*/
      8) && we(
        e,
        "hide-label",
        /*disable*/
        a[3]
      );
    },
    i(a) {
      o || (yo(l.$$.fragment, a), o = !0);
    },
    o(a) {
      wo(l.$$.fragment, a), o = !1;
    },
    d(a) {
      a && co(e), uo(l);
    }
  };
}
function ko(t, e, n) {
  let { label: l = null } = e, { Icon: i } = e, { show_label: r = !0 } = e, { disable: o = !1 } = e, { float: a = !0 } = e;
  return t.$$set = (s) => {
    "label" in s && n(0, l = s.label), "Icon" in s && n(1, i = s.Icon), "show_label" in s && n(2, r = s.show_label), "disable" in s && n(3, o = s.disable), "float" in s && n(4, a = s.float);
  }, [l, i, r, o, a];
}
let So = class extends ao {
  constructor(e) {
    super(), _o(this, e, ko, Eo, bo, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
};
const {
  SvelteComponent: To,
  append: Bo,
  attr: bn,
  binding_callbacks: Ho,
  create_slot: Co,
  detach: Ao,
  element: hl,
  get_all_dirty_from_scope: No,
  get_slot_changes: Po,
  init: Io,
  insert: Oo,
  safe_not_equal: Lo,
  toggle_class: Ee,
  transition_in: Mo,
  transition_out: Ro,
  update_slot_base: Uo
} = window.__gradio__svelte__internal;
function Do(t) {
  let e, n, l;
  const i = (
    /*#slots*/
    t[5].default
  ), r = Co(
    i,
    t,
    /*$$scope*/
    t[4],
    null
  );
  return {
    c() {
      e = hl("div"), n = hl("div"), r && r.c(), bn(n, "class", "icon svelte-3w3rth"), bn(e, "class", "empty svelte-3w3rth"), bn(e, "aria-label", "Empty value"), Ee(
        e,
        "small",
        /*size*/
        t[0] === "small"
      ), Ee(
        e,
        "large",
        /*size*/
        t[0] === "large"
      ), Ee(
        e,
        "unpadded_box",
        /*unpadded_box*/
        t[1]
      ), Ee(
        e,
        "small_parent",
        /*parent_height*/
        t[3]
      );
    },
    m(o, a) {
      Oo(o, e, a), Bo(e, n), r && r.m(n, null), t[6](e), l = !0;
    },
    p(o, [a]) {
      r && r.p && (!l || a & /*$$scope*/
      16) && Uo(
        r,
        i,
        o,
        /*$$scope*/
        o[4],
        l ? Po(
          i,
          /*$$scope*/
          o[4],
          a,
          null
        ) : No(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!l || a & /*size*/
      1) && Ee(
        e,
        "small",
        /*size*/
        o[0] === "small"
      ), (!l || a & /*size*/
      1) && Ee(
        e,
        "large",
        /*size*/
        o[0] === "large"
      ), (!l || a & /*unpadded_box*/
      2) && Ee(
        e,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!l || a & /*parent_height*/
      8) && Ee(
        e,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      l || (Mo(r, o), l = !0);
    },
    o(o) {
      Ro(r, o), l = !1;
    },
    d(o) {
      o && Ao(e), r && r.d(o), t[6](null);
    }
  };
}
function Fo(t) {
  let e, n = t[0], l = 1;
  for (; l < t.length; ) {
    const i = t[l], r = t[l + 1];
    if (l += 2, (i === "optionalAccess" || i === "optionalCall") && n == null)
      return;
    i === "access" || i === "optionalAccess" ? (e = n, n = r(n)) : (i === "call" || i === "optionalCall") && (n = r((...o) => n.call(e, ...o)), e = void 0);
  }
  return n;
}
function Go(t, e, n) {
  let l, { $$slots: i = {}, $$scope: r } = e, { size: o = "small" } = e, { unpadded_box: a = !1 } = e, s;
  function f(c) {
    if (!c)
      return !1;
    const { height: _ } = c.getBoundingClientRect(), { height: h } = Fo([
      c,
      "access",
      (m) => m.parentElement,
      "optionalAccess",
      (m) => m.getBoundingClientRect,
      "call",
      (m) => m()
    ]) || { height: _ };
    return _ > h + 2;
  }
  function u(c) {
    Ho[c ? "unshift" : "push"](() => {
      s = c, n(2, s);
    });
  }
  return t.$$set = (c) => {
    "size" in c && n(0, o = c.size), "unpadded_box" in c && n(1, a = c.unpadded_box), "$$scope" in c && n(4, r = c.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*el*/
    4 && n(3, l = f(s));
  }, [o, a, s, l, r, i, u];
}
let Gi = class extends To {
  constructor(e) {
    super(), Io(this, e, Go, Do, Lo, { size: 0, unpadded_box: 1 });
  }
};
const {
  SvelteComponent: jo,
  append: qo,
  attr: ke,
  detach: Vo,
  init: xo,
  insert: zo,
  noop: pn,
  safe_not_equal: Xo,
  svg_element: ml
} = window.__gradio__svelte__internal;
function Zo(t) {
  let e, n;
  return {
    c() {
      e = ml("svg"), n = ml("polyline"), ke(n, "points", "20 6 9 17 4 12"), ke(e, "xmlns", "http://www.w3.org/2000/svg"), ke(e, "viewBox", "2 0 20 20"), ke(e, "fill", "none"), ke(e, "stroke", "currentColor"), ke(e, "stroke-width", "3"), ke(e, "stroke-linecap", "round"), ke(e, "stroke-linejoin", "round");
    },
    m(l, i) {
      zo(l, e, i), qo(e, n);
    },
    p: pn,
    i: pn,
    o: pn,
    d(l) {
      l && Vo(e);
    }
  };
}
class Wo extends jo {
  constructor(e) {
    super(), xo(this, e, null, Zo, Xo, {});
  }
}
const {
  SvelteComponent: Jo,
  append: dl,
  attr: Oe,
  detach: $o,
  init: Qo,
  insert: Yo,
  noop: gn,
  safe_not_equal: Ko,
  svg_element: vn
} = window.__gradio__svelte__internal;
function es(t) {
  let e, n, l;
  return {
    c() {
      e = vn("svg"), n = vn("path"), l = vn("path"), Oe(n, "fill", "currentColor"), Oe(n, "d", "M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"), Oe(l, "fill", "currentColor"), Oe(l, "d", "M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z"), Oe(e, "xmlns", "http://www.w3.org/2000/svg"), Oe(e, "viewBox", "0 0 33 33"), Oe(e, "color", "currentColor");
    },
    m(i, r) {
      Yo(i, e, r), dl(e, n), dl(e, l);
    },
    p: gn,
    i: gn,
    o: gn,
    d(i) {
      i && $o(e);
    }
  };
}
class ts extends Jo {
  constructor(e) {
    super(), Qo(this, e, null, es, Ko, {});
  }
}
const {
  SvelteComponent: ns,
  append: bl,
  attr: Y,
  detach: ls,
  init: is,
  insert: rs,
  noop: yn,
  safe_not_equal: os,
  svg_element: wn
} = window.__gradio__svelte__internal;
function ss(t) {
  let e, n, l;
  return {
    c() {
      e = wn("svg"), n = wn("path"), l = wn("polyline"), Y(n, "d", "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"), Y(l, "points", "13 2 13 9 20 9"), Y(e, "xmlns", "http://www.w3.org/2000/svg"), Y(e, "width", "100%"), Y(e, "height", "100%"), Y(e, "viewBox", "0 0 24 24"), Y(e, "fill", "none"), Y(e, "stroke", "currentColor"), Y(e, "stroke-width", "1.5"), Y(e, "stroke-linecap", "round"), Y(e, "stroke-linejoin", "round"), Y(e, "class", "feather feather-file");
    },
    m(i, r) {
      rs(i, e, r), bl(e, n), bl(e, l);
    },
    p: yn,
    i: yn,
    o: yn,
    d(i) {
      i && ls(e);
    }
  };
}
class ji extends ns {
  constructor(e) {
    super(), is(this, e, null, ss, os, {});
  }
}
const {
  SvelteComponent: as,
  append: fs,
  attr: le,
  detach: us,
  init: cs,
  insert: _s,
  noop: En,
  safe_not_equal: hs,
  svg_element: pl
} = window.__gradio__svelte__internal;
function ms(t) {
  let e, n;
  return {
    c() {
      e = pl("svg"), n = pl("path"), le(n, "fill", "currentColor"), le(n, "d", "M5 3h2v2H5v5a2 2 0 0 1-2 2a2 2 0 0 1 2 2v5h2v2H5c-1.07-.27-2-.9-2-2v-4a2 2 0 0 0-2-2H0v-2h1a2 2 0 0 0 2-2V5a2 2 0 0 1 2-2m14 0a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1v2h-1a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2v-2h2v-5a2 2 0 0 1 2-2a2 2 0 0 1-2-2V5h-2V3h2m-7 12a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-4 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1Z"), le(e, "xmlns", "http://www.w3.org/2000/svg"), le(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), le(e, "aria-hidden", "true"), le(e, "role", "img"), le(e, "class", "iconify iconify--mdi"), le(e, "width", "100%"), le(e, "height", "100%"), le(e, "preserveAspectRatio", "xMidYMid meet"), le(e, "viewBox", "0 0 24 24");
    },
    m(l, i) {
      _s(l, e, i), fs(e, n);
    },
    p: En,
    i: En,
    o: En,
    d(l) {
      l && us(e);
    }
  };
}
let ds = class extends as {
  constructor(e) {
    super(), cs(this, e, null, ms, hs, {});
  }
};
const {
  SvelteComponent: bs,
  append: ps,
  attr: ie,
  detach: gs,
  init: vs,
  insert: ys,
  noop: kn,
  safe_not_equal: ws,
  svg_element: gl
} = window.__gradio__svelte__internal;
function Es(t) {
  let e, n;
  return {
    c() {
      e = gl("svg"), n = gl("path"), ie(n, "d", "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"), ie(e, "xmlns", "http://www.w3.org/2000/svg"), ie(e, "width", "100%"), ie(e, "height", "100%"), ie(e, "viewBox", "0 0 24 24"), ie(e, "fill", "none"), ie(e, "stroke", "currentColor"), ie(e, "stroke-width", "1.5"), ie(e, "stroke-linecap", "round"), ie(e, "stroke-linejoin", "round"), ie(e, "class", "feather feather-table");
    },
    m(l, i) {
      ys(l, e, i), ps(e, n);
    },
    p: kn,
    i: kn,
    o: kn,
    d(l) {
      l && gs(e);
    }
  };
}
class qi extends bs {
  constructor(e) {
    super(), vs(this, e, null, Es, ws, {});
  }
}
const ks = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], vl = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
ks.reduce(
  (t, { color: e, primary: n, secondary: l }) => ({
    ...t,
    [e]: {
      primary: vl[e][n],
      secondary: vl[e][l]
    }
  }),
  {}
);
new Intl.Collator(0, { numeric: 1 }).compare;
function Ss(t) {
  try {
    const e = new URL(t);
    return e.protocol === "http:" || e.protocol === "https:";
  } catch {
    return !1;
  }
}
function Ts(t, e, n) {
  return t == null ? n ? `/proxy=${n}file=` : `${e}/file=` : Ss(t) ? t : n ? `/proxy=${n}file=${t}` : `${e}/file=${t}`;
}
const {
  SvelteComponent: Bs,
  append: Vi,
  attr: I,
  bubble: Hs,
  check_outros: Cs,
  create_slot: xi,
  detach: vt,
  element: nn,
  empty: As,
  get_all_dirty_from_scope: zi,
  get_slot_changes: Xi,
  group_outros: Ns,
  init: Ps,
  insert: yt,
  listen: Is,
  safe_not_equal: Os,
  set_style: z,
  space: Zi,
  src_url_equal: Vt,
  toggle_class: Ve,
  transition_in: xt,
  transition_out: zt,
  update_slot_base: Wi
} = window.__gradio__svelte__internal;
function Ls(t) {
  let e, n, l, i, r, o, a = (
    /*icon*/
    t[7] && yl(t)
  );
  const s = (
    /*#slots*/
    t[15].default
  ), f = xi(
    s,
    t,
    /*$$scope*/
    t[14],
    null
  );
  return {
    c() {
      e = nn("button"), a && a.c(), n = Zi(), f && f.c(), I(e, "class", l = /*size*/
      t[4] + " " + /*variant*/
      t[3] + " " + /*elem_classes*/
      t[1].join(" ") + " svelte-8huxfn"), I(
        e,
        "id",
        /*elem_id*/
        t[0]
      ), e.disabled = /*disabled*/
      t[8], Ve(e, "hidden", !/*visible*/
      t[2]), z(
        e,
        "flex-grow",
        /*scale*/
        t[9]
      ), z(
        e,
        "width",
        /*scale*/
        t[9] === 0 ? "fit-content" : null
      ), z(e, "min-width", typeof /*min_width*/
      t[10] == "number" ? `calc(min(${/*min_width*/
      t[10]}px, 100%))` : null);
    },
    m(u, c) {
      yt(u, e, c), a && a.m(e, null), Vi(e, n), f && f.m(e, null), i = !0, r || (o = Is(
        e,
        "click",
        /*click_handler*/
        t[16]
      ), r = !0);
    },
    p(u, c) {
      /*icon*/
      u[7] ? a ? a.p(u, c) : (a = yl(u), a.c(), a.m(e, n)) : a && (a.d(1), a = null), f && f.p && (!i || c & /*$$scope*/
      16384) && Wi(
        f,
        s,
        u,
        /*$$scope*/
        u[14],
        i ? Xi(
          s,
          /*$$scope*/
          u[14],
          c,
          null
        ) : zi(
          /*$$scope*/
          u[14]
        ),
        null
      ), (!i || c & /*size, variant, elem_classes*/
      26 && l !== (l = /*size*/
      u[4] + " " + /*variant*/
      u[3] + " " + /*elem_classes*/
      u[1].join(" ") + " svelte-8huxfn")) && I(e, "class", l), (!i || c & /*elem_id*/
      1) && I(
        e,
        "id",
        /*elem_id*/
        u[0]
      ), (!i || c & /*disabled*/
      256) && (e.disabled = /*disabled*/
      u[8]), (!i || c & /*size, variant, elem_classes, visible*/
      30) && Ve(e, "hidden", !/*visible*/
      u[2]), c & /*scale*/
      512 && z(
        e,
        "flex-grow",
        /*scale*/
        u[9]
      ), c & /*scale*/
      512 && z(
        e,
        "width",
        /*scale*/
        u[9] === 0 ? "fit-content" : null
      ), c & /*min_width*/
      1024 && z(e, "min-width", typeof /*min_width*/
      u[10] == "number" ? `calc(min(${/*min_width*/
      u[10]}px, 100%))` : null);
    },
    i(u) {
      i || (xt(f, u), i = !0);
    },
    o(u) {
      zt(f, u), i = !1;
    },
    d(u) {
      u && vt(e), a && a.d(), f && f.d(u), r = !1, o();
    }
  };
}
function Ms(t) {
  let e, n, l, i, r = (
    /*icon*/
    t[7] && wl(t)
  );
  const o = (
    /*#slots*/
    t[15].default
  ), a = xi(
    o,
    t,
    /*$$scope*/
    t[14],
    null
  );
  return {
    c() {
      e = nn("a"), r && r.c(), n = Zi(), a && a.c(), I(
        e,
        "href",
        /*link*/
        t[6]
      ), I(e, "rel", "noopener noreferrer"), I(
        e,
        "aria-disabled",
        /*disabled*/
        t[8]
      ), I(e, "class", l = /*size*/
      t[4] + " " + /*variant*/
      t[3] + " " + /*elem_classes*/
      t[1].join(" ") + " svelte-8huxfn"), I(
        e,
        "id",
        /*elem_id*/
        t[0]
      ), Ve(e, "hidden", !/*visible*/
      t[2]), Ve(
        e,
        "disabled",
        /*disabled*/
        t[8]
      ), z(
        e,
        "flex-grow",
        /*scale*/
        t[9]
      ), z(
        e,
        "pointer-events",
        /*disabled*/
        t[8] ? "none" : null
      ), z(
        e,
        "width",
        /*scale*/
        t[9] === 0 ? "fit-content" : null
      ), z(e, "min-width", typeof /*min_width*/
      t[10] == "number" ? `calc(min(${/*min_width*/
      t[10]}px, 100%))` : null);
    },
    m(s, f) {
      yt(s, e, f), r && r.m(e, null), Vi(e, n), a && a.m(e, null), i = !0;
    },
    p(s, f) {
      /*icon*/
      s[7] ? r ? r.p(s, f) : (r = wl(s), r.c(), r.m(e, n)) : r && (r.d(1), r = null), a && a.p && (!i || f & /*$$scope*/
      16384) && Wi(
        a,
        o,
        s,
        /*$$scope*/
        s[14],
        i ? Xi(
          o,
          /*$$scope*/
          s[14],
          f,
          null
        ) : zi(
          /*$$scope*/
          s[14]
        ),
        null
      ), (!i || f & /*link*/
      64) && I(
        e,
        "href",
        /*link*/
        s[6]
      ), (!i || f & /*disabled*/
      256) && I(
        e,
        "aria-disabled",
        /*disabled*/
        s[8]
      ), (!i || f & /*size, variant, elem_classes*/
      26 && l !== (l = /*size*/
      s[4] + " " + /*variant*/
      s[3] + " " + /*elem_classes*/
      s[1].join(" ") + " svelte-8huxfn")) && I(e, "class", l), (!i || f & /*elem_id*/
      1) && I(
        e,
        "id",
        /*elem_id*/
        s[0]
      ), (!i || f & /*size, variant, elem_classes, visible*/
      30) && Ve(e, "hidden", !/*visible*/
      s[2]), (!i || f & /*size, variant, elem_classes, disabled*/
      282) && Ve(
        e,
        "disabled",
        /*disabled*/
        s[8]
      ), f & /*scale*/
      512 && z(
        e,
        "flex-grow",
        /*scale*/
        s[9]
      ), f & /*disabled*/
      256 && z(
        e,
        "pointer-events",
        /*disabled*/
        s[8] ? "none" : null
      ), f & /*scale*/
      512 && z(
        e,
        "width",
        /*scale*/
        s[9] === 0 ? "fit-content" : null
      ), f & /*min_width*/
      1024 && z(e, "min-width", typeof /*min_width*/
      s[10] == "number" ? `calc(min(${/*min_width*/
      s[10]}px, 100%))` : null);
    },
    i(s) {
      i || (xt(a, s), i = !0);
    },
    o(s) {
      zt(a, s), i = !1;
    },
    d(s) {
      s && vt(e), r && r.d(), a && a.d(s);
    }
  };
}
function yl(t) {
  let e, n, l;
  return {
    c() {
      e = nn("img"), I(e, "class", "button-icon svelte-8huxfn"), Vt(e.src, n = /*icon_path*/
      t[11]) || I(e, "src", n), I(e, "alt", l = `${/*value*/
      t[5]} icon`);
    },
    m(i, r) {
      yt(i, e, r);
    },
    p(i, r) {
      r & /*icon_path*/
      2048 && !Vt(e.src, n = /*icon_path*/
      i[11]) && I(e, "src", n), r & /*value*/
      32 && l !== (l = `${/*value*/
      i[5]} icon`) && I(e, "alt", l);
    },
    d(i) {
      i && vt(e);
    }
  };
}
function wl(t) {
  let e, n, l;
  return {
    c() {
      e = nn("img"), I(e, "class", "button-icon svelte-8huxfn"), Vt(e.src, n = /*icon_path*/
      t[11]) || I(e, "src", n), I(e, "alt", l = `${/*value*/
      t[5]} icon`);
    },
    m(i, r) {
      yt(i, e, r);
    },
    p(i, r) {
      r & /*icon_path*/
      2048 && !Vt(e.src, n = /*icon_path*/
      i[11]) && I(e, "src", n), r & /*value*/
      32 && l !== (l = `${/*value*/
      i[5]} icon`) && I(e, "alt", l);
    },
    d(i) {
      i && vt(e);
    }
  };
}
function Rs(t) {
  let e, n, l, i;
  const r = [Ms, Ls], o = [];
  function a(s, f) {
    return (
      /*link*/
      s[6] && /*link*/
      s[6].length > 0 ? 0 : 1
    );
  }
  return e = a(t), n = o[e] = r[e](t), {
    c() {
      n.c(), l = As();
    },
    m(s, f) {
      o[e].m(s, f), yt(s, l, f), i = !0;
    },
    p(s, [f]) {
      let u = e;
      e = a(s), e === u ? o[e].p(s, f) : (Ns(), zt(o[u], 1, 1, () => {
        o[u] = null;
      }), Cs(), n = o[e], n ? n.p(s, f) : (n = o[e] = r[e](s), n.c()), xt(n, 1), n.m(l.parentNode, l));
    },
    i(s) {
      i || (xt(n), i = !0);
    },
    o(s) {
      zt(n), i = !1;
    },
    d(s) {
      s && vt(l), o[e].d(s);
    }
  };
}
function Us(t, e, n) {
  let l, { $$slots: i = {}, $$scope: r } = e, { elem_id: o = "" } = e, { elem_classes: a = [] } = e, { visible: s = !0 } = e, { variant: f = "secondary" } = e, { size: u = "lg" } = e, { value: c = null } = e, { link: _ = null } = e, { icon: h = null } = e, { disabled: m = !1 } = e, { scale: v = null } = e, { min_width: g = void 0 } = e, { root: y = "" } = e, { proxy_url: p = null } = e;
  function d(b) {
    Hs.call(this, t, b);
  }
  return t.$$set = (b) => {
    "elem_id" in b && n(0, o = b.elem_id), "elem_classes" in b && n(1, a = b.elem_classes), "visible" in b && n(2, s = b.visible), "variant" in b && n(3, f = b.variant), "size" in b && n(4, u = b.size), "value" in b && n(5, c = b.value), "link" in b && n(6, _ = b.link), "icon" in b && n(7, h = b.icon), "disabled" in b && n(8, m = b.disabled), "scale" in b && n(9, v = b.scale), "min_width" in b && n(10, g = b.min_width), "root" in b && n(12, y = b.root), "proxy_url" in b && n(13, p = b.proxy_url), "$$scope" in b && n(14, r = b.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*icon, root, proxy_url*/
    12416 && n(11, l = Ts(h, y, p));
  }, [
    o,
    a,
    s,
    f,
    u,
    c,
    _,
    h,
    m,
    v,
    g,
    l,
    y,
    p,
    r,
    i,
    d
  ];
}
class Ji extends Bs {
  constructor(e) {
    super(), Ps(this, e, Us, Rs, Os, {
      elem_id: 0,
      elem_classes: 1,
      visible: 2,
      variant: 3,
      size: 4,
      value: 5,
      link: 6,
      icon: 7,
      disabled: 8,
      scale: 9,
      min_width: 10,
      root: 12,
      proxy_url: 13
    });
  }
}
const {
  SvelteComponent: Ds,
  attr: Pt,
  create_slot: Fs,
  detach: Gs,
  element: js,
  get_all_dirty_from_scope: qs,
  get_slot_changes: Vs,
  init: xs,
  insert: zs,
  null_to_empty: El,
  safe_not_equal: Xs,
  set_style: It,
  toggle_class: Se,
  transition_in: Zs,
  transition_out: Ws,
  update_slot_base: Js
} = window.__gradio__svelte__internal;
function $s(t) {
  let e, n, l = `calc(min(${/*min_width*/
  t[2]}px, 100%))`, i;
  const r = (
    /*#slots*/
    t[8].default
  ), o = Fs(
    r,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = js("div"), o && o.c(), Pt(
        e,
        "id",
        /*elem_id*/
        t[3]
      ), Pt(e, "class", n = El(
        /*elem_classes*/
        t[4].join(" ")
      ) + " svelte-1m1obck"), Se(
        e,
        "gap",
        /*gap*/
        t[1]
      ), Se(
        e,
        "compact",
        /*variant*/
        t[6] === "compact"
      ), Se(
        e,
        "panel",
        /*variant*/
        t[6] === "panel"
      ), Se(e, "hide", !/*visible*/
      t[5]), It(
        e,
        "flex-grow",
        /*scale*/
        t[0]
      ), It(e, "min-width", l);
    },
    m(a, s) {
      zs(a, e, s), o && o.m(e, null), i = !0;
    },
    p(a, [s]) {
      o && o.p && (!i || s & /*$$scope*/
      128) && Js(
        o,
        r,
        a,
        /*$$scope*/
        a[7],
        i ? Vs(
          r,
          /*$$scope*/
          a[7],
          s,
          null
        ) : qs(
          /*$$scope*/
          a[7]
        ),
        null
      ), (!i || s & /*elem_id*/
      8) && Pt(
        e,
        "id",
        /*elem_id*/
        a[3]
      ), (!i || s & /*elem_classes*/
      16 && n !== (n = El(
        /*elem_classes*/
        a[4].join(" ")
      ) + " svelte-1m1obck")) && Pt(e, "class", n), (!i || s & /*elem_classes, gap*/
      18) && Se(
        e,
        "gap",
        /*gap*/
        a[1]
      ), (!i || s & /*elem_classes, variant*/
      80) && Se(
        e,
        "compact",
        /*variant*/
        a[6] === "compact"
      ), (!i || s & /*elem_classes, variant*/
      80) && Se(
        e,
        "panel",
        /*variant*/
        a[6] === "panel"
      ), (!i || s & /*elem_classes, visible*/
      48) && Se(e, "hide", !/*visible*/
      a[5]), s & /*scale*/
      1 && It(
        e,
        "flex-grow",
        /*scale*/
        a[0]
      ), s & /*min_width*/
      4 && l !== (l = `calc(min(${/*min_width*/
      a[2]}px, 100%))`) && It(e, "min-width", l);
    },
    i(a) {
      i || (Zs(o, a), i = !0);
    },
    o(a) {
      Ws(o, a), i = !1;
    },
    d(a) {
      a && Gs(e), o && o.d(a);
    }
  };
}
function Qs(t, e, n) {
  let { $$slots: l = {}, $$scope: i } = e, { scale: r = null } = e, { gap: o = !0 } = e, { min_width: a = 0 } = e, { elem_id: s = "" } = e, { elem_classes: f = [] } = e, { visible: u = !0 } = e, { variant: c = "default" } = e;
  return t.$$set = (_) => {
    "scale" in _ && n(0, r = _.scale), "gap" in _ && n(1, o = _.gap), "min_width" in _ && n(2, a = _.min_width), "elem_id" in _ && n(3, s = _.elem_id), "elem_classes" in _ && n(4, f = _.elem_classes), "visible" in _ && n(5, u = _.visible), "variant" in _ && n(6, c = _.variant), "$$scope" in _ && n(7, i = _.$$scope);
  }, [r, o, a, s, f, u, c, i, l];
}
let $i = class extends Ds {
  constructor(e) {
    super(), xs(this, e, Qs, $s, Xs, {
      scale: 0,
      gap: 1,
      min_width: 2,
      elem_id: 3,
      elem_classes: 4,
      visible: 5,
      variant: 6
    });
  }
};
const {
  SvelteComponent: Ys,
  append: Sn,
  attr: Ot,
  create_component: Ks,
  destroy_component: ea,
  detach: ta,
  element: kl,
  init: na,
  insert: la,
  mount_component: ia,
  safe_not_equal: ra,
  set_data: oa,
  space: sa,
  text: aa,
  toggle_class: Te,
  transition_in: fa,
  transition_out: ua
} = window.__gradio__svelte__internal;
function ca(t) {
  let e, n, l, i, r, o;
  return l = new /*Icon*/
  t[1]({}), {
    c() {
      e = kl("label"), n = kl("span"), Ks(l.$$.fragment), i = sa(), r = aa(
        /*label*/
        t[0]
      ), Ot(n, "class", "svelte-9gxdi0"), Ot(e, "for", ""), Ot(e, "data-testid", "block-label"), Ot(e, "class", "svelte-9gxdi0"), Te(e, "hide", !/*show_label*/
      t[2]), Te(e, "sr-only", !/*show_label*/
      t[2]), Te(
        e,
        "float",
        /*float*/
        t[4]
      ), Te(
        e,
        "hide-label",
        /*disable*/
        t[3]
      );
    },
    m(a, s) {
      la(a, e, s), Sn(e, n), ia(l, n, null), Sn(e, i), Sn(e, r), o = !0;
    },
    p(a, [s]) {
      (!o || s & /*label*/
      1) && oa(
        r,
        /*label*/
        a[0]
      ), (!o || s & /*show_label*/
      4) && Te(e, "hide", !/*show_label*/
      a[2]), (!o || s & /*show_label*/
      4) && Te(e, "sr-only", !/*show_label*/
      a[2]), (!o || s & /*float*/
      16) && Te(
        e,
        "float",
        /*float*/
        a[4]
      ), (!o || s & /*disable*/
      8) && Te(
        e,
        "hide-label",
        /*disable*/
        a[3]
      );
    },
    i(a) {
      o || (fa(l.$$.fragment, a), o = !0);
    },
    o(a) {
      ua(l.$$.fragment, a), o = !1;
    },
    d(a) {
      a && ta(e), ea(l);
    }
  };
}
function _a(t, e, n) {
  let { label: l = null } = e, { Icon: i } = e, { show_label: r = !0 } = e, { disable: o = !1 } = e, { float: a = !0 } = e;
  return t.$$set = (s) => {
    "label" in s && n(0, l = s.label), "Icon" in s && n(1, i = s.Icon), "show_label" in s && n(2, r = s.show_label), "disable" in s && n(3, o = s.disable), "float" in s && n(4, a = s.float);
  }, [l, i, r, o, a];
}
class ha extends Ys {
  constructor(e) {
    super(), na(this, e, _a, ca, ra, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: ma,
  append: da,
  attr: Tn,
  binding_callbacks: ba,
  create_slot: pa,
  detach: ga,
  element: Sl,
  get_all_dirty_from_scope: va,
  get_slot_changes: ya,
  init: wa,
  insert: Ea,
  safe_not_equal: ka,
  toggle_class: Be,
  transition_in: Sa,
  transition_out: Ta,
  update_slot_base: Ba
} = window.__gradio__svelte__internal;
function Ha(t) {
  let e, n, l;
  const i = (
    /*#slots*/
    t[5].default
  ), r = pa(
    i,
    t,
    /*$$scope*/
    t[4],
    null
  );
  return {
    c() {
      e = Sl("div"), n = Sl("div"), r && r.c(), Tn(n, "class", "icon svelte-3w3rth"), Tn(e, "class", "empty svelte-3w3rth"), Tn(e, "aria-label", "Empty value"), Be(
        e,
        "small",
        /*size*/
        t[0] === "small"
      ), Be(
        e,
        "large",
        /*size*/
        t[0] === "large"
      ), Be(
        e,
        "unpadded_box",
        /*unpadded_box*/
        t[1]
      ), Be(
        e,
        "small_parent",
        /*parent_height*/
        t[3]
      );
    },
    m(o, a) {
      Ea(o, e, a), da(e, n), r && r.m(n, null), t[6](e), l = !0;
    },
    p(o, [a]) {
      r && r.p && (!l || a & /*$$scope*/
      16) && Ba(
        r,
        i,
        o,
        /*$$scope*/
        o[4],
        l ? ya(
          i,
          /*$$scope*/
          o[4],
          a,
          null
        ) : va(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!l || a & /*size*/
      1) && Be(
        e,
        "small",
        /*size*/
        o[0] === "small"
      ), (!l || a & /*size*/
      1) && Be(
        e,
        "large",
        /*size*/
        o[0] === "large"
      ), (!l || a & /*unpadded_box*/
      2) && Be(
        e,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!l || a & /*parent_height*/
      8) && Be(
        e,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      l || (Sa(r, o), l = !0);
    },
    o(o) {
      Ta(r, o), l = !1;
    },
    d(o) {
      o && ga(e), r && r.d(o), t[6](null);
    }
  };
}
function Ca(t) {
  let e, n = t[0], l = 1;
  for (; l < t.length; ) {
    const i = t[l], r = t[l + 1];
    if (l += 2, (i === "optionalAccess" || i === "optionalCall") && n == null)
      return;
    i === "access" || i === "optionalAccess" ? (e = n, n = r(n)) : (i === "call" || i === "optionalCall") && (n = r((...o) => n.call(e, ...o)), e = void 0);
  }
  return n;
}
function Aa(t, e, n) {
  let l, { $$slots: i = {}, $$scope: r } = e, { size: o = "small" } = e, { unpadded_box: a = !1 } = e, s;
  function f(c) {
    if (!c)
      return !1;
    const { height: _ } = c.getBoundingClientRect(), { height: h } = Ca([
      c,
      "access",
      (m) => m.parentElement,
      "optionalAccess",
      (m) => m.getBoundingClientRect,
      "call",
      (m) => m()
    ]) || { height: _ };
    return _ > h + 2;
  }
  function u(c) {
    ba[c ? "unshift" : "push"](() => {
      s = c, n(2, s);
    });
  }
  return t.$$set = (c) => {
    "size" in c && n(0, o = c.size), "unpadded_box" in c && n(1, a = c.unpadded_box), "$$scope" in c && n(4, r = c.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*el*/
    4 && n(3, l = f(s));
  }, [o, a, s, l, r, i, u];
}
class Na extends ma {
  constructor(e) {
    super(), wa(this, e, Aa, Ha, ka, { size: 0, unpadded_box: 1 });
  }
}
const Tl = (t) => {
  let e = ["B", "KB", "MB", "GB", "PB"], n = 0;
  for (; t > 1024; )
    t /= 1024, n++;
  let l = e[n];
  return t.toFixed(1) + "&nbsp;" + l;
}, { setContext: K0, getContext: Pa } = window.__gradio__svelte__internal, Ia = "WORKER_PROXY_CONTEXT_KEY";
function Oa() {
  return Pa(Ia);
}
function La(t) {
  return t.host === window.location.host || t.host === "localhost:7860" || t.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  t.host === "lite.local";
}
function Ma(t, e) {
  const n = e.toLowerCase();
  for (const [l, i] of Object.entries(t))
    if (l.toLowerCase() === n)
      return i;
}
function Ra(t) {
  if (t == null)
    return !1;
  const e = new URL(t);
  return !(!La(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
const {
  SvelteComponent: Ua,
  assign: Xt,
  check_outros: Qi,
  compute_rest_props: Bl,
  create_slot: Zn,
  detach: ln,
  element: Yi,
  empty: Ki,
  exclude_internal_props: Da,
  get_all_dirty_from_scope: Wn,
  get_slot_changes: Jn,
  get_spread_update: er,
  group_outros: tr,
  init: Fa,
  insert: rn,
  listen: nr,
  prevent_default: Ga,
  safe_not_equal: ja,
  set_attributes: Zt,
  transition_in: Re,
  transition_out: Ue,
  update_slot_base: $n
} = window.__gradio__svelte__internal, { createEventDispatcher: qa } = window.__gradio__svelte__internal;
function Va(t) {
  let e, n, l, i, r;
  const o = (
    /*#slots*/
    t[8].default
  ), a = Zn(
    o,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let s = [
    { href: (
      /*href*/
      t[0]
    ) },
    {
      target: n = typeof window < "u" && window.__is_colab__ ? "_blank" : null
    },
    { rel: "noopener noreferrer" },
    { download: (
      /*download*/
      t[1]
    ) },
    /*$$restProps*/
    t[6]
  ], f = {};
  for (let u = 0; u < s.length; u += 1)
    f = Xt(f, s[u]);
  return {
    c() {
      e = Yi("a"), a && a.c(), Zt(e, f);
    },
    m(u, c) {
      rn(u, e, c), a && a.m(e, null), l = !0, i || (r = nr(
        e,
        "click",
        /*dispatch*/
        t[3].bind(null, "click")
      ), i = !0);
    },
    p(u, c) {
      a && a.p && (!l || c & /*$$scope*/
      128) && $n(
        a,
        o,
        u,
        /*$$scope*/
        u[7],
        l ? Jn(
          o,
          /*$$scope*/
          u[7],
          c,
          null
        ) : Wn(
          /*$$scope*/
          u[7]
        ),
        null
      ), Zt(e, f = er(s, [
        (!l || c & /*href*/
        1) && { href: (
          /*href*/
          u[0]
        ) },
        { target: n },
        { rel: "noopener noreferrer" },
        (!l || c & /*download*/
        2) && { download: (
          /*download*/
          u[1]
        ) },
        c & /*$$restProps*/
        64 && /*$$restProps*/
        u[6]
      ]));
    },
    i(u) {
      l || (Re(a, u), l = !0);
    },
    o(u) {
      Ue(a, u), l = !1;
    },
    d(u) {
      u && ln(e), a && a.d(u), i = !1, r();
    }
  };
}
function xa(t) {
  let e, n, l, i;
  const r = [Xa, za], o = [];
  function a(s, f) {
    return (
      /*is_downloading*/
      s[2] ? 0 : 1
    );
  }
  return e = a(t), n = o[e] = r[e](t), {
    c() {
      n.c(), l = Ki();
    },
    m(s, f) {
      o[e].m(s, f), rn(s, l, f), i = !0;
    },
    p(s, f) {
      let u = e;
      e = a(s), e === u ? o[e].p(s, f) : (tr(), Ue(o[u], 1, 1, () => {
        o[u] = null;
      }), Qi(), n = o[e], n ? n.p(s, f) : (n = o[e] = r[e](s), n.c()), Re(n, 1), n.m(l.parentNode, l));
    },
    i(s) {
      i || (Re(n), i = !0);
    },
    o(s) {
      Ue(n), i = !1;
    },
    d(s) {
      s && ln(l), o[e].d(s);
    }
  };
}
function za(t) {
  let e, n, l, i;
  const r = (
    /*#slots*/
    t[8].default
  ), o = Zn(
    r,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let a = [
    /*$$restProps*/
    t[6],
    { href: (
      /*href*/
      t[0]
    ) }
  ], s = {};
  for (let f = 0; f < a.length; f += 1)
    s = Xt(s, a[f]);
  return {
    c() {
      e = Yi("a"), o && o.c(), Zt(e, s);
    },
    m(f, u) {
      rn(f, e, u), o && o.m(e, null), n = !0, l || (i = nr(e, "click", Ga(
        /*wasm_click_handler*/
        t[5]
      )), l = !0);
    },
    p(f, u) {
      o && o.p && (!n || u & /*$$scope*/
      128) && $n(
        o,
        r,
        f,
        /*$$scope*/
        f[7],
        n ? Jn(
          r,
          /*$$scope*/
          f[7],
          u,
          null
        ) : Wn(
          /*$$scope*/
          f[7]
        ),
        null
      ), Zt(e, s = er(a, [
        u & /*$$restProps*/
        64 && /*$$restProps*/
        f[6],
        (!n || u & /*href*/
        1) && { href: (
          /*href*/
          f[0]
        ) }
      ]));
    },
    i(f) {
      n || (Re(o, f), n = !0);
    },
    o(f) {
      Ue(o, f), n = !1;
    },
    d(f) {
      f && ln(e), o && o.d(f), l = !1, i();
    }
  };
}
function Xa(t) {
  let e;
  const n = (
    /*#slots*/
    t[8].default
  ), l = Zn(
    n,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      l && l.c();
    },
    m(i, r) {
      l && l.m(i, r), e = !0;
    },
    p(i, r) {
      l && l.p && (!e || r & /*$$scope*/
      128) && $n(
        l,
        n,
        i,
        /*$$scope*/
        i[7],
        e ? Jn(
          n,
          /*$$scope*/
          i[7],
          r,
          null
        ) : Wn(
          /*$$scope*/
          i[7]
        ),
        null
      );
    },
    i(i) {
      e || (Re(l, i), e = !0);
    },
    o(i) {
      Ue(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Za(t) {
  let e, n, l, i, r;
  const o = [xa, Va], a = [];
  function s(f, u) {
    return u & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (f[4] && Ra(
      /*href*/
      f[0]
    ))), e ? 0 : 1;
  }
  return n = s(t, -1), l = a[n] = o[n](t), {
    c() {
      l.c(), i = Ki();
    },
    m(f, u) {
      a[n].m(f, u), rn(f, i, u), r = !0;
    },
    p(f, [u]) {
      let c = n;
      n = s(f, u), n === c ? a[n].p(f, u) : (tr(), Ue(a[c], 1, 1, () => {
        a[c] = null;
      }), Qi(), l = a[n], l ? l.p(f, u) : (l = a[n] = o[n](f), l.c()), Re(l, 1), l.m(i.parentNode, i));
    },
    i(f) {
      r || (Re(l), r = !0);
    },
    o(f) {
      Ue(l), r = !1;
    },
    d(f) {
      f && ln(i), a[n].d(f);
    }
  };
}
function Wa(t, e, n) {
  const l = ["href", "download"];
  let i = Bl(e, l), { $$slots: r = {}, $$scope: o } = e, { href: a = void 0 } = e, { download: s } = e;
  const f = qa();
  let u = !1;
  const c = Oa();
  async function _() {
    if (u)
      return;
    if (f("click"), a == null)
      throw new Error("href is not defined.");
    if (c == null)
      throw new Error("Wasm worker proxy is not available.");
    const m = new URL(a).pathname;
    n(2, u = !0), c.httpRequest({
      method: "GET",
      path: m,
      headers: {},
      query_string: ""
    }).then((v) => {
      if (v.status !== 200)
        throw new Error(`Failed to get file ${m} from the Wasm worker.`);
      const g = new Blob(
        [v.body],
        {
          type: Ma(v.headers, "content-type")
        }
      ), y = URL.createObjectURL(g), p = document.createElement("a");
      p.href = y, p.download = s, p.click(), URL.revokeObjectURL(y);
    }).finally(() => {
      n(2, u = !1);
    });
  }
  return t.$$set = (h) => {
    e = Xt(Xt({}, e), Da(h)), n(6, i = Bl(e, l)), "href" in h && n(0, a = h.href), "download" in h && n(1, s = h.download), "$$scope" in h && n(7, o = h.$$scope);
  }, [
    a,
    s,
    u,
    f,
    c,
    _,
    i,
    o,
    r
  ];
}
class Ja extends Ua {
  constructor(e) {
    super(), Fa(this, e, Wa, Za, ja, { href: 0, download: 1 });
  }
}
const {
  HtmlTag: $a,
  SvelteComponent: Qa,
  append: se,
  attr: fe,
  check_outros: lr,
  create_component: Ya,
  destroy_component: Ka,
  destroy_each: ef,
  detach: on,
  element: He,
  ensure_array_like: Hl,
  group_outros: ir,
  init: tf,
  insert: sn,
  listen: nf,
  mount_component: lf,
  noop: Cl,
  safe_not_equal: rf,
  set_data: Ln,
  set_style: Al,
  space: Bn,
  text: Wt,
  toggle_class: Nl,
  transition_in: Xe,
  transition_out: dt
} = window.__gradio__svelte__internal, { createEventDispatcher: of } = window.__gradio__svelte__internal;
function Pl(t, e, n) {
  const l = t.slice();
  return l[7] = e[n], l[9] = n, l;
}
function sf(t) {
  let e = (
    /*i18n*/
    t[2]("file.uploading") + ""
  ), n;
  return {
    c() {
      n = Wt(e);
    },
    m(l, i) {
      sn(l, n, i);
    },
    p(l, i) {
      i & /*i18n*/
      4 && e !== (e = /*i18n*/
      l[2]("file.uploading") + "") && Ln(n, e);
    },
    i: Cl,
    o: Cl,
    d(l) {
      l && on(n);
    }
  };
}
function af(t) {
  let e, n;
  return e = new Ja({
    props: {
      href: (
        /*file*/
        t[7].url
      ),
      download: window.__is_colab__ ? null : (
        /*file*/
        t[7].orig_name
      ),
      $$slots: { default: [ff] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ya(e.$$.fragment);
    },
    m(l, i) {
      lf(e, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*normalized_files*/
      8 && (r.href = /*file*/
      l[7].url), i & /*normalized_files*/
      8 && (r.download = window.__is_colab__ ? null : (
        /*file*/
        l[7].orig_name
      )), i & /*$$scope, normalized_files*/
      1032 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      n || (Xe(e.$$.fragment, l), n = !0);
    },
    o(l) {
      dt(e.$$.fragment, l), n = !1;
    },
    d(l) {
      Ka(e, l);
    }
  };
}
function ff(t) {
  let e, n = (
    /*file*/
    (t[7].size != null ? Tl(
      /*file*/
      t[7].size
    ) : "(size unknown)") + ""
  ), l;
  return {
    c() {
      e = new $a(!1), l = Wt(" ⇣"), e.a = l;
    },
    m(i, r) {
      e.m(n, i, r), sn(i, l, r);
    },
    p(i, r) {
      r & /*normalized_files*/
      8 && n !== (n = /*file*/
      (i[7].size != null ? Tl(
        /*file*/
        i[7].size
      ) : "(size unknown)") + "") && e.p(n);
    },
    d(i) {
      i && (e.d(), on(l));
    }
  };
}
function Il(t) {
  let e, n, l, i = (
    /*file*/
    t[7].filename_stem + ""
  ), r, o, a, s = (
    /*file*/
    t[7].filename_ext + ""
  ), f, u, c, _, h, m, v, g, y, p;
  const d = [af, sf], b = [];
  function L(F, x) {
    return (
      /*file*/
      F[7].url ? 0 : 1
    );
  }
  h = L(t), m = b[h] = d[h](t);
  function w() {
    return (
      /*click_handler*/
      t[6](
        /*file*/
        t[7],
        /*i*/
        t[9]
      )
    );
  }
  return {
    c() {
      e = He("tr"), n = He("td"), l = He("span"), r = Wt(i), o = Bn(), a = He("span"), f = Wt(s), c = Bn(), _ = He("td"), m.c(), v = Bn(), fe(l, "class", "stem svelte-144xq2d"), fe(a, "class", "ext svelte-144xq2d"), fe(n, "class", "filename svelte-144xq2d"), fe(n, "aria-label", u = /*file*/
      t[7].orig_name), fe(_, "class", "download svelte-144xq2d"), fe(e, "class", "file svelte-144xq2d"), Nl(
        e,
        "selectable",
        /*selectable*/
        t[0]
      );
    },
    m(F, x) {
      sn(F, e, x), se(e, n), se(n, l), se(l, r), se(n, o), se(n, a), se(a, f), se(e, c), se(e, _), b[h].m(_, null), se(e, v), g = !0, y || (p = nf(e, "click", w), y = !0);
    },
    p(F, x) {
      t = F, (!g || x & /*normalized_files*/
      8) && i !== (i = /*file*/
      t[7].filename_stem + "") && Ln(r, i), (!g || x & /*normalized_files*/
      8) && s !== (s = /*file*/
      t[7].filename_ext + "") && Ln(f, s), (!g || x & /*normalized_files*/
      8 && u !== (u = /*file*/
      t[7].orig_name)) && fe(n, "aria-label", u);
      let ne = h;
      h = L(t), h === ne ? b[h].p(t, x) : (ir(), dt(b[ne], 1, 1, () => {
        b[ne] = null;
      }), lr(), m = b[h], m ? m.p(t, x) : (m = b[h] = d[h](t), m.c()), Xe(m, 1), m.m(_, null)), (!g || x & /*selectable*/
      1) && Nl(
        e,
        "selectable",
        /*selectable*/
        t[0]
      );
    },
    i(F) {
      g || (Xe(m), g = !0);
    },
    o(F) {
      dt(m), g = !1;
    },
    d(F) {
      F && on(e), b[h].d(), y = !1, p();
    }
  };
}
function uf(t) {
  let e, n, l, i, r = Hl(
    /*normalized_files*/
    t[3]
  ), o = [];
  for (let s = 0; s < r.length; s += 1)
    o[s] = Il(Pl(t, r, s));
  const a = (s) => dt(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      e = He("div"), n = He("table"), l = He("tbody");
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      fe(l, "class", "svelte-144xq2d"), fe(n, "class", "file-preview svelte-144xq2d"), fe(e, "class", "file-preview-holder"), Al(e, "max-height", typeof /*height*/
      t[1] === void 0 ? "auto" : (
        /*height*/
        t[1] + "px"
      ));
    },
    m(s, f) {
      sn(s, e, f), se(e, n), se(n, l);
      for (let u = 0; u < o.length; u += 1)
        o[u] && o[u].m(l, null);
      i = !0;
    },
    p(s, [f]) {
      if (f & /*selectable, dispatch, normalized_files, window, i18n*/
      29) {
        r = Hl(
          /*normalized_files*/
          s[3]
        );
        let u;
        for (u = 0; u < r.length; u += 1) {
          const c = Pl(s, r, u);
          o[u] ? (o[u].p(c, f), Xe(o[u], 1)) : (o[u] = Il(c), o[u].c(), Xe(o[u], 1), o[u].m(l, null));
        }
        for (ir(), u = r.length; u < o.length; u += 1)
          a(u);
        lr();
      }
      (!i || f & /*height*/
      2) && Al(e, "max-height", typeof /*height*/
      s[1] === void 0 ? "auto" : (
        /*height*/
        s[1] + "px"
      ));
    },
    i(s) {
      if (!i) {
        for (let f = 0; f < r.length; f += 1)
          Xe(o[f]);
        i = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let f = 0; f < o.length; f += 1)
        dt(o[f]);
      i = !1;
    },
    d(s) {
      s && on(e), ef(o, s);
    }
  };
}
function cf(t, e) {
  return t ?? e();
}
function _f(t) {
  const e = t.lastIndexOf(".");
  return e === -1 ? [t, ""] : [t.slice(0, e), t.slice(e)];
}
function hf(t, e, n) {
  let l;
  const i = of();
  let { value: r } = e, { selectable: o = !1 } = e, { height: a = void 0 } = e, { i18n: s } = e;
  const f = (u, c) => i("select", { value: u.orig_name, index: c });
  return t.$$set = (u) => {
    "value" in u && n(5, r = u.value), "selectable" in u && n(0, o = u.selectable), "height" in u && n(1, a = u.height), "i18n" in u && n(2, s = u.i18n);
  }, t.$$.update = () => {
    t.$$.dirty & /*value*/
    32 && n(3, l = (Array.isArray(r) ? r : [r]).map((u) => {
      const [c, _] = _f(cf(u.orig_name, () => ""));
      return { ...u, filename_stem: c, filename_ext: _ };
    }));
  }, [o, a, s, l, i, r, f];
}
class mf extends Qa {
  constructor(e) {
    super(), tf(this, e, hf, uf, rf, {
      value: 5,
      selectable: 0,
      height: 1,
      i18n: 2
    });
  }
}
const {
  SvelteComponent: df,
  bubble: bf,
  check_outros: pf,
  create_component: an,
  destroy_component: fn,
  detach: Ol,
  empty: gf,
  group_outros: vf,
  init: yf,
  insert: Ll,
  mount_component: un,
  safe_not_equal: wf,
  space: Ef,
  transition_in: Ze,
  transition_out: We
} = window.__gradio__svelte__internal;
function kf(t) {
  let e, n;
  return e = new Na({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [Tf] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      an(e.$$.fragment);
    },
    m(l, i) {
      un(e, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope*/
      128 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      n || (Ze(e.$$.fragment, l), n = !0);
    },
    o(l) {
      We(e.$$.fragment, l), n = !1;
    },
    d(l) {
      fn(e, l);
    }
  };
}
function Sf(t) {
  let e, n;
  return e = new mf({
    props: {
      i18n: (
        /*i18n*/
        t[5]
      ),
      selectable: (
        /*selectable*/
        t[3]
      ),
      value: (
        /*value*/
        t[0]
      ),
      height: (
        /*height*/
        t[4]
      )
    }
  }), e.$on(
    "select",
    /*select_handler*/
    t[6]
  ), {
    c() {
      an(e.$$.fragment);
    },
    m(l, i) {
      un(e, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*i18n*/
      32 && (r.i18n = /*i18n*/
      l[5]), i & /*selectable*/
      8 && (r.selectable = /*selectable*/
      l[3]), i & /*value*/
      1 && (r.value = /*value*/
      l[0]), i & /*height*/
      16 && (r.height = /*height*/
      l[4]), e.$set(r);
    },
    i(l) {
      n || (Ze(e.$$.fragment, l), n = !0);
    },
    o(l) {
      We(e.$$.fragment, l), n = !1;
    },
    d(l) {
      fn(e, l);
    }
  };
}
function Tf(t) {
  let e, n;
  return e = new ji({}), {
    c() {
      an(e.$$.fragment);
    },
    m(l, i) {
      un(e, l, i), n = !0;
    },
    i(l) {
      n || (Ze(e.$$.fragment, l), n = !0);
    },
    o(l) {
      We(e.$$.fragment, l), n = !1;
    },
    d(l) {
      fn(e, l);
    }
  };
}
function Bf(t) {
  let e, n, l, i, r, o, a;
  e = new ha({
    props: {
      show_label: (
        /*show_label*/
        t[2]
      ),
      float: (
        /*value*/
        t[0] === null
      ),
      Icon: ji,
      label: (
        /*label*/
        t[1] || "File"
      )
    }
  });
  const s = [Sf, kf], f = [];
  function u(c, _) {
    return _ & /*value*/
    1 && (l = null), l == null && (l = !!/*value*/
    (c[0] && (!Array.isArray(
      /*value*/
      c[0]
    ) || /*value*/
    c[0].length > 0))), l ? 0 : 1;
  }
  return i = u(t, -1), r = f[i] = s[i](t), {
    c() {
      an(e.$$.fragment), n = Ef(), r.c(), o = gf();
    },
    m(c, _) {
      un(e, c, _), Ll(c, n, _), f[i].m(c, _), Ll(c, o, _), a = !0;
    },
    p(c, [_]) {
      const h = {};
      _ & /*show_label*/
      4 && (h.show_label = /*show_label*/
      c[2]), _ & /*value*/
      1 && (h.float = /*value*/
      c[0] === null), _ & /*label*/
      2 && (h.label = /*label*/
      c[1] || "File"), e.$set(h);
      let m = i;
      i = u(c, _), i === m ? f[i].p(c, _) : (vf(), We(f[m], 1, 1, () => {
        f[m] = null;
      }), pf(), r = f[i], r ? r.p(c, _) : (r = f[i] = s[i](c), r.c()), Ze(r, 1), r.m(o.parentNode, o));
    },
    i(c) {
      a || (Ze(e.$$.fragment, c), Ze(r), a = !0);
    },
    o(c) {
      We(e.$$.fragment, c), We(r), a = !1;
    },
    d(c) {
      c && (Ol(n), Ol(o)), fn(e, c), f[i].d(c);
    }
  };
}
function Hf(t, e, n) {
  let { value: l = null } = e, { label: i } = e, { show_label: r = !0 } = e, { selectable: o = !1 } = e, { height: a = void 0 } = e, { i18n: s } = e;
  function f(u) {
    bf.call(this, t, u);
  }
  return t.$$set = (u) => {
    "value" in u && n(0, l = u.value), "label" in u && n(1, i = u.label), "show_label" in u && n(2, r = u.show_label), "selectable" in u && n(3, o = u.selectable), "height" in u && n(4, a = u.height), "i18n" in u && n(5, s = u.i18n);
  }, [l, i, r, o, a, s, f];
}
class Cf extends df {
  constructor(e) {
    super(), yf(this, e, Hf, Bf, wf, {
      value: 0,
      label: 1,
      show_label: 2,
      selectable: 3,
      height: 4,
      i18n: 5
    });
  }
}
new Intl.Collator(0, { numeric: 1 }).compare;
function Me() {
}
const Af = (t) => t;
function Nf(t) {
  return t();
}
function Pf(t) {
  t.forEach(Nf);
}
function If(t) {
  return typeof t == "function";
}
function Of(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Lf(t, ...e) {
  if (t == null) {
    for (const l of e)
      l(void 0);
    return Me;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const rr = typeof window < "u";
let Ml = rr ? () => window.performance.now() : () => Date.now(), or = rr ? (t) => requestAnimationFrame(t) : Me;
const Je = /* @__PURE__ */ new Set();
function sr(t) {
  Je.forEach((e) => {
    e.c(t) || (Je.delete(e), e.f());
  }), Je.size !== 0 && or(sr);
}
function Mf(t) {
  let e;
  return Je.size === 0 && or(sr), {
    promise: new Promise((n) => {
      Je.add(e = { c: t, f: n });
    }),
    abort() {
      Je.delete(e);
    }
  };
}
function Rf(t, { delay: e = 0, duration: n = 400, easing: l = Af } = {}) {
  const i = +getComputedStyle(t).opacity;
  return {
    delay: e,
    duration: n,
    easing: l,
    css: (r) => `opacity: ${r * i}`
  };
}
const qe = [];
function Uf(t, e) {
  return {
    subscribe: wt(t, e).subscribe
  };
}
function wt(t, e = Me) {
  let n;
  const l = /* @__PURE__ */ new Set();
  function i(a) {
    if (Of(t, a) && (t = a, n)) {
      const s = !qe.length;
      for (const f of l)
        f[1](), qe.push(f, t);
      if (s) {
        for (let f = 0; f < qe.length; f += 2)
          qe[f][0](qe[f + 1]);
        qe.length = 0;
      }
    }
  }
  function r(a) {
    i(a(t));
  }
  function o(a, s = Me) {
    const f = [a, s];
    return l.add(f), l.size === 1 && (n = e(i, r) || Me), a(t), () => {
      l.delete(f), l.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: r, subscribe: o };
}
function ft(t, e, n) {
  const l = !Array.isArray(t), i = l ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const r = e.length < 2;
  return Uf(n, (o, a) => {
    let s = !1;
    const f = [];
    let u = 0, c = Me;
    const _ = () => {
      if (u)
        return;
      c();
      const m = e(l ? f[0] : f, o, a);
      r ? o(m) : c = If(m) ? m : Me;
    }, h = i.map(
      (m, v) => Lf(
        m,
        (g) => {
          f[v] = g, u &= ~(1 << v), s && _();
        },
        () => {
          u |= 1 << v;
        }
      )
    );
    return s = !0, _(), function() {
      Pf(h), c(), s = !1;
    };
  });
}
function Rl(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function Mn(t, e, n, l) {
  if (typeof n == "number" || Rl(n)) {
    const i = l - n, r = (n - e) / (t.dt || 1 / 60), o = t.opts.stiffness * i, a = t.opts.damping * r, s = (o - a) * t.inv_mass, f = (r + s) * t.dt;
    return Math.abs(f) < t.opts.precision && Math.abs(i) < t.opts.precision ? l : (t.settled = !1, Rl(n) ? new Date(n.getTime() + f) : n + f);
  } else {
    if (Array.isArray(n))
      return n.map(
        (i, r) => Mn(t, e[r], n[r], l[r])
      );
    if (typeof n == "object") {
      const i = {};
      for (const r in n)
        i[r] = Mn(t, e[r], n[r], l[r]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof n} values`);
  }
}
function Ul(t, e = {}) {
  const n = wt(t), { stiffness: l = 0.15, damping: i = 0.8, precision: r = 0.01 } = e;
  let o, a, s, f = t, u = t, c = 1, _ = 0, h = !1;
  function m(g, y = {}) {
    u = g;
    const p = s = {};
    return t == null || y.hard || v.stiffness >= 1 && v.damping >= 1 ? (h = !0, o = Ml(), f = g, n.set(t = u), Promise.resolve()) : (y.soft && (_ = 1 / ((y.soft === !0 ? 0.5 : +y.soft) * 60), c = 0), a || (o = Ml(), h = !1, a = Mf((d) => {
      if (h)
        return h = !1, a = null, !1;
      c = Math.min(c + _, 1);
      const b = {
        inv_mass: c,
        opts: v,
        settled: !0,
        dt: (d - o) * 60 / 1e3
      }, L = Mn(b, f, t, u);
      return o = d, f = t, n.set(t = L), b.settled && (a = null), !b.settled;
    })), new Promise((d) => {
      a.promise.then(() => {
        p === s && d();
      });
    }));
  }
  const v = {
    set: m,
    update: (g, y) => m(g(u, t), y),
    subscribe: n.subscribe,
    stiffness: l,
    damping: i,
    precision: r
  };
  return v;
}
function Df(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ff = function(e) {
  return Gf(e) && !jf(e);
};
function Gf(t) {
  return !!t && typeof t == "object";
}
function jf(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || xf(t);
}
var qf = typeof Symbol == "function" && Symbol.for, Vf = qf ? Symbol.for("react.element") : 60103;
function xf(t) {
  return t.$$typeof === Vf;
}
function zf(t) {
  return Array.isArray(t) ? [] : {};
}
function bt(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? tt(zf(t), t, e) : t;
}
function Xf(t, e, n) {
  return t.concat(e).map(function(l) {
    return bt(l, n);
  });
}
function Zf(t, e) {
  if (!e.customMerge)
    return tt;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : tt;
}
function Wf(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Dl(t) {
  return Object.keys(t).concat(Wf(t));
}
function ar(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function Jf(t, e) {
  return ar(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function $f(t, e, n) {
  var l = {};
  return n.isMergeableObject(t) && Dl(t).forEach(function(i) {
    l[i] = bt(t[i], n);
  }), Dl(e).forEach(function(i) {
    Jf(t, i) || (ar(t, i) && n.isMergeableObject(e[i]) ? l[i] = Zf(i, n)(t[i], e[i], n) : l[i] = bt(e[i], n));
  }), l;
}
function tt(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Xf, n.isMergeableObject = n.isMergeableObject || Ff, n.cloneUnlessOtherwiseSpecified = bt;
  var l = Array.isArray(e), i = Array.isArray(t), r = l === i;
  return r ? l ? n.arrayMerge(t, e, n) : $f(t, e, n) : bt(e, n);
}
tt.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(l, i) {
    return tt(l, i, n);
  }, {});
};
var Qf = tt, Yf = Qf;
const Kf = /* @__PURE__ */ Df(Yf);
var Rn = function(t, e) {
  return Rn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, l) {
    n.__proto__ = l;
  } || function(n, l) {
    for (var i in l)
      Object.prototype.hasOwnProperty.call(l, i) && (n[i] = l[i]);
  }, Rn(t, e);
};
function cn(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Rn(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var A = function() {
  return A = Object.assign || function(e) {
    for (var n, l = 1, i = arguments.length; l < i; l++) {
      n = arguments[l];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, A.apply(this, arguments);
};
function Hn(t, e, n) {
  if (n || arguments.length === 2)
    for (var l = 0, i = e.length, r; l < i; l++)
      (r || !(l in e)) && (r || (r = Array.prototype.slice.call(e, 0, l)), r[l] = e[l]);
  return t.concat(r || Array.prototype.slice.call(e));
}
var T;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(T || (T = {}));
var P;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(P || (P = {}));
var nt;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(nt || (nt = {}));
function Fl(t) {
  return t.type === P.literal;
}
function eu(t) {
  return t.type === P.argument;
}
function fr(t) {
  return t.type === P.number;
}
function ur(t) {
  return t.type === P.date;
}
function cr(t) {
  return t.type === P.time;
}
function _r(t) {
  return t.type === P.select;
}
function hr(t) {
  return t.type === P.plural;
}
function tu(t) {
  return t.type === P.pound;
}
function mr(t) {
  return t.type === P.tag;
}
function dr(t) {
  return !!(t && typeof t == "object" && t.type === nt.number);
}
function Un(t) {
  return !!(t && typeof t == "object" && t.type === nt.dateTime);
}
var br = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, nu = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function lu(t) {
  var e = {};
  return t.replace(nu, function(n) {
    var l = n.length;
    switch (n[0]) {
      case "G":
        e.era = l === 4 ? "long" : l === 5 ? "narrow" : "short";
        break;
      case "y":
        e.year = l === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        e.month = ["numeric", "2-digit", "short", "long", "narrow"][l - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        e.day = ["numeric", "2-digit"][l - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        e.weekday = l === 4 ? "short" : l === 5 ? "narrow" : "short";
        break;
      case "e":
        if (l < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][l - 4];
        break;
      case "c":
        if (l < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][l - 4];
        break;
      case "a":
        e.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        e.hourCycle = "h12", e.hour = ["numeric", "2-digit"][l - 1];
        break;
      case "H":
        e.hourCycle = "h23", e.hour = ["numeric", "2-digit"][l - 1];
        break;
      case "K":
        e.hourCycle = "h11", e.hour = ["numeric", "2-digit"][l - 1];
        break;
      case "k":
        e.hourCycle = "h24", e.hour = ["numeric", "2-digit"][l - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        e.minute = ["numeric", "2-digit"][l - 1];
        break;
      case "s":
        e.second = ["numeric", "2-digit"][l - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        e.timeZoneName = l < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), e;
}
var iu = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function ru(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(iu).filter(function(_) {
    return _.length > 0;
  }), n = [], l = 0, i = e; l < i.length; l++) {
    var r = i[l], o = r.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var a = o[0], s = o.slice(1), f = 0, u = s; f < u.length; f++) {
      var c = u[f];
      if (c.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: a, options: s });
  }
  return n;
}
function ou(t) {
  return t.replace(/^(.*?)-/, "");
}
var Gl = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, pr = /^(@+)?(\+|#+)?[rs]?$/g, su = /(\*)(0+)|(#+)(0+)|(0+)/g, gr = /^(0+)$/;
function jl(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(pr, function(n, l, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = l.length, e.maximumSignificantDigits = l.length) : i === "+" ? e.minimumSignificantDigits = l.length : l[0] === "#" ? e.maximumSignificantDigits = l.length : (e.minimumSignificantDigits = l.length, e.maximumSignificantDigits = l.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function vr(t) {
  switch (t) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function au(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !gr.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function ql(t) {
  var e = {}, n = vr(t);
  return n || e;
}
function fu(t) {
  for (var e = {}, n = 0, l = t; n < l.length; n++) {
    var i = l[n];
    switch (i.stem) {
      case "percent":
      case "%":
        e.style = "percent";
        continue;
      case "%x100":
        e.style = "percent", e.scale = 100;
        continue;
      case "currency":
        e.style = "currency", e.currency = i.options[0];
        continue;
      case "group-off":
      case ",_":
        e.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        e.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        e.style = "unit", e.unit = ou(i.options[0]);
        continue;
      case "compact-short":
      case "K":
        e.notation = "compact", e.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        e.notation = "compact", e.compactDisplay = "long";
        continue;
      case "scientific":
        e = A(A(A({}, e), { notation: "scientific" }), i.options.reduce(function(s, f) {
          return A(A({}, s), ql(f));
        }, {}));
        continue;
      case "engineering":
        e = A(A(A({}, e), { notation: "engineering" }), i.options.reduce(function(s, f) {
          return A(A({}, s), ql(f));
        }, {}));
        continue;
      case "notation-simple":
        e.notation = "standard";
        continue;
      case "unit-width-narrow":
        e.currencyDisplay = "narrowSymbol", e.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        e.currencyDisplay = "code", e.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        e.currencyDisplay = "name", e.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        e.currencyDisplay = "symbol";
        continue;
      case "scale":
        e.scale = parseFloat(i.options[0]);
        continue;
      case "integer-width":
        if (i.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        i.options[0].replace(su, function(s, f, u, c, _, h) {
          if (f)
            e.minimumIntegerDigits = u.length;
          else {
            if (c && _)
              throw new Error("We currently do not support maximum integer digits");
            if (h)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (gr.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Gl.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Gl, function(s, f, u, c, _, h) {
        return u === "*" ? e.minimumFractionDigits = f.length : c && c[0] === "#" ? e.maximumFractionDigits = c.length : _ && h ? (e.minimumFractionDigits = _.length, e.maximumFractionDigits = _.length + h.length) : (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length), "";
      });
      var r = i.options[0];
      r === "w" ? e = A(A({}, e), { trailingZeroDisplay: "stripIfInteger" }) : r && (e = A(A({}, e), jl(r)));
      continue;
    }
    if (pr.test(i.stem)) {
      e = A(A({}, e), jl(i.stem));
      continue;
    }
    var o = vr(i.stem);
    o && (e = A(A({}, e), o));
    var a = au(i.stem);
    a && (e = A(A({}, e), a));
  }
  return e;
}
var Lt = {
  AX: [
    "H"
  ],
  BQ: [
    "H"
  ],
  CP: [
    "H"
  ],
  CZ: [
    "H"
  ],
  DK: [
    "H"
  ],
  FI: [
    "H"
  ],
  ID: [
    "H"
  ],
  IS: [
    "H"
  ],
  ML: [
    "H"
  ],
  NE: [
    "H"
  ],
  RU: [
    "H"
  ],
  SE: [
    "H"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  AS: [
    "h",
    "H"
  ],
  BT: [
    "h",
    "H"
  ],
  DJ: [
    "h",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  GH: [
    "h",
    "H"
  ],
  IN: [
    "h",
    "H"
  ],
  LS: [
    "h",
    "H"
  ],
  PG: [
    "h",
    "H"
  ],
  PW: [
    "h",
    "H"
  ],
  SO: [
    "h",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  VU: [
    "h",
    "H"
  ],
  WS: [
    "h",
    "H"
  ],
  "001": [
    "H",
    "h"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  AR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CL: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CU: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BO": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-EC": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-PE": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  GT: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  HN: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MX: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  NI: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  PY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  SV: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  UY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  JP: [
    "H",
    "h",
    "K"
  ],
  AD: [
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AT: [
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BR: [
    "H",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CI: [
    "H",
    "hB"
  ],
  CV: [
    "H",
    "hB"
  ],
  DE: [
    "H",
    "hB"
  ],
  EE: [
    "H",
    "hB"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GF: [
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  HR: [
    "H",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IT: [
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  MF: [
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NC: [
    "H",
    "hB"
  ],
  NL: [
    "H",
    "hB"
  ],
  PM: [
    "H",
    "hB"
  ],
  PT: [
    "H",
    "hB"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SR: [
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TR: [
    "H",
    "hB"
  ],
  WF: [
    "H",
    "hB"
  ],
  YT: [
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BO: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  EC: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  PE: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CD: [
    "hB",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ]
};
function uu(t, e) {
  for (var n = "", l = 0; l < t.length; l++) {
    var i = t.charAt(l);
    if (i === "j") {
      for (var r = 0; l + 1 < t.length && t.charAt(l + 1) === i; )
        r++, l++;
      var o = 1 + (r & 1), a = r < 2 ? 1 : 3 + (r >> 1), s = "a", f = cu(e);
      for ((f == "H" || f == "k") && (a = 0); a-- > 0; )
        n += s;
      for (; o-- > 0; )
        n = f + n;
    } else
      i === "J" ? n += "H" : n += i;
  }
  return n;
}
function cu(t) {
  var e = t.hourCycle;
  if (e === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  t.hourCycles && // @ts-ignore
  t.hourCycles.length && (e = t.hourCycles[0]), e)
    switch (e) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var n = t.language, l;
  n !== "root" && (l = t.maximize().region);
  var i = Lt[l || ""] || Lt[n || ""] || Lt["".concat(n, "-001")] || Lt["001"];
  return i[0];
}
var Cn, _u = new RegExp("^".concat(br.source, "*")), hu = new RegExp("".concat(br.source, "*$"));
function B(t, e) {
  return { start: t, end: e };
}
var mu = !!String.prototype.startsWith, du = !!String.fromCodePoint, bu = !!Object.fromEntries, pu = !!String.prototype.codePointAt, gu = !!String.prototype.trimStart, vu = !!String.prototype.trimEnd, yu = !!Number.isSafeInteger, wu = yu ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, Dn = !0;
try {
  var Eu = wr("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Dn = ((Cn = Eu.exec("a")) === null || Cn === void 0 ? void 0 : Cn[0]) === "a";
} catch {
  Dn = !1;
}
var Vl = mu ? (
  // Native
  function(e, n, l) {
    return e.startsWith(n, l);
  }
) : (
  // For IE11
  function(e, n, l) {
    return e.slice(l, l + n.length) === n;
  }
), Fn = du ? String.fromCodePoint : (
  // IE11
  function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    for (var l = "", i = e.length, r = 0, o; i > r; ) {
      if (o = e[r++], o > 1114111)
        throw RangeError(o + " is not a valid code point");
      l += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
    }
    return l;
  }
), xl = (
  // native
  bu ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, l = 0, i = e; l < i.length; l++) {
        var r = i[l], o = r[0], a = r[1];
        n[o] = a;
      }
      return n;
    }
  )
), yr = pu ? (
  // Native
  function(e, n) {
    return e.codePointAt(n);
  }
) : (
  // IE 11
  function(e, n) {
    var l = e.length;
    if (!(n < 0 || n >= l)) {
      var i = e.charCodeAt(n), r;
      return i < 55296 || i > 56319 || n + 1 === l || (r = e.charCodeAt(n + 1)) < 56320 || r > 57343 ? i : (i - 55296 << 10) + (r - 56320) + 65536;
    }
  }
), ku = gu ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(_u, "");
  }
), Su = vu ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(hu, "");
  }
);
function wr(t, e) {
  return new RegExp(t, e);
}
var Gn;
if (Dn) {
  var zl = wr("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Gn = function(e, n) {
    var l;
    zl.lastIndex = n;
    var i = zl.exec(e);
    return (l = i[1]) !== null && l !== void 0 ? l : "";
  };
} else
  Gn = function(e, n) {
    for (var l = []; ; ) {
      var i = yr(e, n);
      if (i === void 0 || Er(i) || Cu(i))
        break;
      l.push(i), n += i >= 65536 ? 2 : 1;
    }
    return Fn.apply(void 0, l);
  };
var Tu = (
  /** @class */
  function() {
    function t(e, n) {
      n === void 0 && (n = {}), this.message = e, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return t.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, t.prototype.parseMessage = function(e, n, l) {
      for (var i = []; !this.isEOF(); ) {
        var r = this.char();
        if (r === 123) {
          var o = this.parseArgument(e, l);
          if (o.err)
            return o;
          i.push(o.val);
        } else {
          if (r === 125 && e > 0)
            break;
          if (r === 35 && (n === "plural" || n === "selectordinal")) {
            var a = this.clonePosition();
            this.bump(), i.push({
              type: P.pound,
              location: B(a, this.clonePosition())
            });
          } else if (r === 60 && !this.ignoreTag && this.peek() === 47) {
            if (l)
              break;
            return this.error(T.UNMATCHED_CLOSING_TAG, B(this.clonePosition(), this.clonePosition()));
          } else if (r === 60 && !this.ignoreTag && jn(this.peek() || 0)) {
            var o = this.parseTag(e, n);
            if (o.err)
              return o;
            i.push(o.val);
          } else {
            var o = this.parseLiteral(e, n);
            if (o.err)
              return o;
            i.push(o.val);
          }
        }
      }
      return { val: i, err: null };
    }, t.prototype.parseTag = function(e, n) {
      var l = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: P.literal,
            value: "<".concat(i, "/>"),
            location: B(l, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var r = this.parseMessage(e + 1, n, !0);
        if (r.err)
          return r;
        var o = r.val, a = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !jn(this.char()))
            return this.error(T.INVALID_TAG, B(a, this.clonePosition()));
          var s = this.clonePosition(), f = this.parseTagName();
          return i !== f ? this.error(T.UNMATCHED_CLOSING_TAG, B(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: P.tag,
              value: i,
              children: o,
              location: B(l, this.clonePosition())
            },
            err: null
          } : this.error(T.INVALID_TAG, B(a, this.clonePosition())));
        } else
          return this.error(T.UNCLOSED_TAG, B(l, this.clonePosition()));
      } else
        return this.error(T.INVALID_TAG, B(l, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && Hu(this.char()); )
        this.bump();
      return this.message.slice(e, this.offset());
    }, t.prototype.parseLiteral = function(e, n) {
      for (var l = this.clonePosition(), i = ""; ; ) {
        var r = this.tryParseQuote(n);
        if (r) {
          i += r;
          continue;
        }
        var o = this.tryParseUnquoted(e, n);
        if (o) {
          i += o;
          continue;
        }
        var a = this.tryParseLeftAngleBracket();
        if (a) {
          i += a;
          continue;
        }
        break;
      }
      var s = B(l, this.clonePosition());
      return {
        val: { type: P.literal, value: i, location: s },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Bu(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, t.prototype.tryParseQuote = function(e) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (e === "plural" || e === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var n = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var l = this.char();
        if (l === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(l);
        this.bump();
      }
      return Fn.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var l = this.char();
      return l === 60 || l === 123 || l === 35 && (n === "plural" || n === "selectordinal") || l === 125 && e > 0 ? null : (this.bump(), Fn(l));
    }, t.prototype.parseArgument = function(e, n) {
      var l = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(T.EXPECT_ARGUMENT_CLOSING_BRACE, B(l, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(T.EMPTY_ARGUMENT, B(l, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(T.MALFORMED_ARGUMENT, B(l, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(T.EXPECT_ARGUMENT_CLOSING_BRACE, B(l, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: P.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: B(l, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(T.EXPECT_ARGUMENT_CLOSING_BRACE, B(l, this.clonePosition())) : this.parseArgumentOptions(e, n, i, l);
        default:
          return this.error(T.MALFORMED_ARGUMENT, B(l, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), l = Gn(this.message, n), i = n + l.length;
      this.bumpTo(i);
      var r = this.clonePosition(), o = B(e, r);
      return { value: l, location: o };
    }, t.prototype.parseArgumentOptions = function(e, n, l, i) {
      var r, o = this.clonePosition(), a = this.parseIdentifierIfPossible().value, s = this.clonePosition();
      switch (a) {
        case "":
          return this.error(T.EXPECT_ARGUMENT_TYPE, B(o, s));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var f = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var u = this.clonePosition(), c = this.parseSimpleArgStyleIfPossible();
            if (c.err)
              return c;
            var _ = Su(c.val);
            if (_.length === 0)
              return this.error(T.EXPECT_ARGUMENT_STYLE, B(this.clonePosition(), this.clonePosition()));
            var h = B(u, this.clonePosition());
            f = { style: _, styleLocation: h };
          }
          var m = this.tryParseArgumentClose(i);
          if (m.err)
            return m;
          var v = B(i, this.clonePosition());
          if (f && Vl(f == null ? void 0 : f.style, "::", 0)) {
            var g = ku(f.style.slice(2));
            if (a === "number") {
              var c = this.parseNumberSkeletonFromString(g, f.styleLocation);
              return c.err ? c : {
                val: { type: P.number, value: l, location: v, style: c.val },
                err: null
              };
            } else {
              if (g.length === 0)
                return this.error(T.EXPECT_DATE_TIME_SKELETON, v);
              var y = g;
              this.locale && (y = uu(g, this.locale));
              var _ = {
                type: nt.dateTime,
                pattern: y,
                location: f.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? lu(y) : {}
              }, p = a === "date" ? P.date : P.time;
              return {
                val: { type: p, value: l, location: v, style: _ },
                err: null
              };
            }
          }
          return {
            val: {
              type: a === "number" ? P.number : a === "date" ? P.date : P.time,
              value: l,
              location: v,
              style: (r = f == null ? void 0 : f.style) !== null && r !== void 0 ? r : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var d = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(T.EXPECT_SELECT_ARGUMENT_OPTIONS, B(d, A({}, d)));
          this.bumpSpace();
          var b = this.parseIdentifierIfPossible(), L = 0;
          if (a !== "select" && b.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(T.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, B(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var c = this.tryParseDecimalInteger(T.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, T.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (c.err)
              return c;
            this.bumpSpace(), b = this.parseIdentifierIfPossible(), L = c.val;
          }
          var w = this.tryParsePluralOrSelectOptions(e, a, n, b);
          if (w.err)
            return w;
          var m = this.tryParseArgumentClose(i);
          if (m.err)
            return m;
          var F = B(i, this.clonePosition());
          return a === "select" ? {
            val: {
              type: P.select,
              value: l,
              options: xl(w.val),
              location: F
            },
            err: null
          } : {
            val: {
              type: P.plural,
              value: l,
              options: xl(w.val),
              offset: L,
              pluralType: a === "plural" ? "cardinal" : "ordinal",
              location: F
            },
            err: null
          };
        }
        default:
          return this.error(T.INVALID_ARGUMENT_TYPE, B(o, s));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(T.EXPECT_ARGUMENT_CLOSING_BRACE, B(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var l = this.char();
        switch (l) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(T.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, B(i, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            e += 1, this.bump();
            break;
          }
          case 125: {
            if (e > 0)
              e -= 1;
            else
              return {
                val: this.message.slice(n.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(n.offset, this.offset()),
        err: null
      };
    }, t.prototype.parseNumberSkeletonFromString = function(e, n) {
      var l = [];
      try {
        l = ru(e);
      } catch {
        return this.error(T.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: nt.number,
          tokens: l,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? fu(l) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, l, i) {
      for (var r, o = !1, a = [], s = /* @__PURE__ */ new Set(), f = i.value, u = i.location; ; ) {
        if (f.length === 0) {
          var c = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var _ = this.tryParseDecimalInteger(T.EXPECT_PLURAL_ARGUMENT_SELECTOR, T.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (_.err)
              return _;
            u = B(c, this.clonePosition()), f = this.message.slice(c.offset, this.offset());
          } else
            break;
        }
        if (s.has(f))
          return this.error(n === "select" ? T.DUPLICATE_SELECT_ARGUMENT_SELECTOR : T.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
        f === "other" && (o = !0), this.bumpSpace();
        var h = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? T.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : T.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, B(this.clonePosition(), this.clonePosition()));
        var m = this.parseMessage(e + 1, n, l);
        if (m.err)
          return m;
        var v = this.tryParseArgumentClose(h);
        if (v.err)
          return v;
        a.push([
          f,
          {
            value: m.val,
            location: B(h, this.clonePosition())
          }
        ]), s.add(f), this.bumpSpace(), r = this.parseIdentifierIfPossible(), f = r.value, u = r.location;
      }
      return a.length === 0 ? this.error(n === "select" ? T.EXPECT_SELECT_ARGUMENT_SELECTOR : T.EXPECT_PLURAL_ARGUMENT_SELECTOR, B(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(T.MISSING_OTHER_CLAUSE, B(this.clonePosition(), this.clonePosition())) : { val: a, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var l = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (l = -1);
      for (var r = !1, o = 0; !this.isEOF(); ) {
        var a = this.char();
        if (a >= 48 && a <= 57)
          r = !0, o = o * 10 + (a - 48), this.bump();
        else
          break;
      }
      var s = B(i, this.clonePosition());
      return r ? (o *= l, wu(o) ? { val: o, err: null } : this.error(n, s)) : this.error(e, s);
    }, t.prototype.offset = function() {
      return this.position.offset;
    }, t.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, t.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, t.prototype.char = function() {
      var e = this.position.offset;
      if (e >= this.message.length)
        throw Error("out of bound");
      var n = yr(this.message, e);
      if (n === void 0)
        throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, t.prototype.error = function(e, n) {
      return {
        val: null,
        err: {
          kind: e,
          message: this.message,
          location: n
        }
      };
    }, t.prototype.bump = function() {
      if (!this.isEOF()) {
        var e = this.char();
        e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
      }
    }, t.prototype.bumpIf = function(e) {
      if (Vl(this.message, e, this.offset())) {
        for (var n = 0; n < e.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, t.prototype.bumpUntil = function(e) {
      var n = this.offset(), l = this.message.indexOf(e, n);
      return l >= 0 ? (this.bumpTo(l), !0) : (this.bumpTo(this.message.length), !1);
    }, t.prototype.bumpTo = function(e) {
      if (this.offset() > e)
        throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (e = Math.min(e, this.message.length); ; ) {
        var n = this.offset();
        if (n === e)
          break;
        if (n > e)
          throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, t.prototype.bumpSpace = function() {
      for (; !this.isEOF() && Er(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), l = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return l ?? null;
    }, t;
  }()
);
function jn(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function Bu(t) {
  return jn(t) || t === 47;
}
function Hu(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function Er(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function Cu(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function qn(t) {
  t.forEach(function(e) {
    if (delete e.location, _r(e) || hr(e))
      for (var n in e.options)
        delete e.options[n].location, qn(e.options[n].value);
    else
      fr(e) && dr(e.style) || (ur(e) || cr(e)) && Un(e.style) ? delete e.style.location : mr(e) && qn(e.children);
  });
}
function Au(t, e) {
  e === void 0 && (e = {}), e = A({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new Tu(t, e).parse();
  if (n.err) {
    var l = SyntaxError(T[n.err.kind]);
    throw l.location = n.err.location, l.originalMessage = n.err.message, l;
  }
  return e != null && e.captureLocation || qn(n.val), n.val;
}
function An(t, e) {
  var n = e && e.cache ? e.cache : Mu, l = e && e.serializer ? e.serializer : Lu, i = e && e.strategy ? e.strategy : Pu;
  return i(t, {
    cache: n,
    serializer: l
  });
}
function Nu(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function kr(t, e, n, l) {
  var i = Nu(l) ? l : n(l), r = e.get(i);
  return typeof r > "u" && (r = t.call(this, l), e.set(i, r)), r;
}
function Sr(t, e, n) {
  var l = Array.prototype.slice.call(arguments, 3), i = n(l), r = e.get(i);
  return typeof r > "u" && (r = t.apply(this, l), e.set(i, r)), r;
}
function Qn(t, e, n, l, i) {
  return n.bind(e, t, l, i);
}
function Pu(t, e) {
  var n = t.length === 1 ? kr : Sr;
  return Qn(t, this, n, e.cache.create(), e.serializer);
}
function Iu(t, e) {
  return Qn(t, this, Sr, e.cache.create(), e.serializer);
}
function Ou(t, e) {
  return Qn(t, this, kr, e.cache.create(), e.serializer);
}
var Lu = function() {
  return JSON.stringify(arguments);
};
function Yn() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
Yn.prototype.get = function(t) {
  return this.cache[t];
};
Yn.prototype.set = function(t, e) {
  this.cache[t] = e;
};
var Mu = {
  create: function() {
    return new Yn();
  }
}, Nn = {
  variadic: Iu,
  monadic: Ou
}, lt;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(lt || (lt = {}));
var _n = (
  /** @class */
  function(t) {
    cn(e, t);
    function e(n, l, i) {
      var r = t.call(this, n) || this;
      return r.code = l, r.originalMessage = i, r;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), Xl = (
  /** @class */
  function(t) {
    cn(e, t);
    function e(n, l, i, r) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(l, '". Options are "').concat(Object.keys(i).join('", "'), '"'), lt.INVALID_VALUE, r) || this;
    }
    return e;
  }(_n)
), Ru = (
  /** @class */
  function(t) {
    cn(e, t);
    function e(n, l, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(l), lt.INVALID_VALUE, i) || this;
    }
    return e;
  }(_n)
), Uu = (
  /** @class */
  function(t) {
    cn(e, t);
    function e(n, l) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(l, '"'), lt.MISSING_VALUE, l) || this;
    }
    return e;
  }(_n)
), G;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(G || (G = {}));
function Du(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var l = e[e.length - 1];
    return !l || l.type !== G.literal || n.type !== G.literal ? e.push(n) : l.value += n.value, e;
  }, []);
}
function Fu(t) {
  return typeof t == "function";
}
function jt(t, e, n, l, i, r, o) {
  if (t.length === 1 && Fl(t[0]))
    return [
      {
        type: G.literal,
        value: t[0].value
      }
    ];
  for (var a = [], s = 0, f = t; s < f.length; s++) {
    var u = f[s];
    if (Fl(u)) {
      a.push({
        type: G.literal,
        value: u.value
      });
      continue;
    }
    if (tu(u)) {
      typeof r == "number" && a.push({
        type: G.literal,
        value: n.getNumberFormat(e).format(r)
      });
      continue;
    }
    var c = u.value;
    if (!(i && c in i))
      throw new Uu(c, o);
    var _ = i[c];
    if (eu(u)) {
      (!_ || typeof _ == "string" || typeof _ == "number") && (_ = typeof _ == "string" || typeof _ == "number" ? String(_) : ""), a.push({
        type: typeof _ == "string" ? G.literal : G.object,
        value: _
      });
      continue;
    }
    if (ur(u)) {
      var h = typeof u.style == "string" ? l.date[u.style] : Un(u.style) ? u.style.parsedOptions : void 0;
      a.push({
        type: G.literal,
        value: n.getDateTimeFormat(e, h).format(_)
      });
      continue;
    }
    if (cr(u)) {
      var h = typeof u.style == "string" ? l.time[u.style] : Un(u.style) ? u.style.parsedOptions : l.time.medium;
      a.push({
        type: G.literal,
        value: n.getDateTimeFormat(e, h).format(_)
      });
      continue;
    }
    if (fr(u)) {
      var h = typeof u.style == "string" ? l.number[u.style] : dr(u.style) ? u.style.parsedOptions : void 0;
      h && h.scale && (_ = _ * (h.scale || 1)), a.push({
        type: G.literal,
        value: n.getNumberFormat(e, h).format(_)
      });
      continue;
    }
    if (mr(u)) {
      var m = u.children, v = u.value, g = i[v];
      if (!Fu(g))
        throw new Ru(v, "function", o);
      var y = jt(m, e, n, l, i, r), p = g(y.map(function(L) {
        return L.value;
      }));
      Array.isArray(p) || (p = [p]), a.push.apply(a, p.map(function(L) {
        return {
          type: typeof L == "string" ? G.literal : G.object,
          value: L
        };
      }));
    }
    if (_r(u)) {
      var d = u.options[_] || u.options.other;
      if (!d)
        throw new Xl(u.value, _, Object.keys(u.options), o);
      a.push.apply(a, jt(d.value, e, n, l, i));
      continue;
    }
    if (hr(u)) {
      var d = u.options["=".concat(_)];
      if (!d) {
        if (!Intl.PluralRules)
          throw new _n(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, lt.MISSING_INTL_API, o);
        var b = n.getPluralRules(e, { type: u.pluralType }).select(_ - (u.offset || 0));
        d = u.options[b] || u.options.other;
      }
      if (!d)
        throw new Xl(u.value, _, Object.keys(u.options), o);
      a.push.apply(a, jt(d.value, e, n, l, i, _ - (u.offset || 0)));
      continue;
    }
  }
  return Du(a);
}
function Gu(t, e) {
  return e ? A(A(A({}, t || {}), e || {}), Object.keys(t).reduce(function(n, l) {
    return n[l] = A(A({}, t[l]), e[l] || {}), n;
  }, {})) : t;
}
function ju(t, e) {
  return e ? Object.keys(t).reduce(function(n, l) {
    return n[l] = Gu(t[l], e[l]), n;
  }, A({}, t)) : t;
}
function Pn(t) {
  return {
    create: function() {
      return {
        get: function(e) {
          return t[e];
        },
        set: function(e, n) {
          t[e] = n;
        }
      };
    }
  };
}
function qu(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: An(function() {
      for (var e, n = [], l = 0; l < arguments.length; l++)
        n[l] = arguments[l];
      return new ((e = Intl.NumberFormat).bind.apply(e, Hn([void 0], n, !1)))();
    }, {
      cache: Pn(t.number),
      strategy: Nn.variadic
    }),
    getDateTimeFormat: An(function() {
      for (var e, n = [], l = 0; l < arguments.length; l++)
        n[l] = arguments[l];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Hn([void 0], n, !1)))();
    }, {
      cache: Pn(t.dateTime),
      strategy: Nn.variadic
    }),
    getPluralRules: An(function() {
      for (var e, n = [], l = 0; l < arguments.length; l++)
        n[l] = arguments[l];
      return new ((e = Intl.PluralRules).bind.apply(e, Hn([void 0], n, !1)))();
    }, {
      cache: Pn(t.pluralRules),
      strategy: Nn.variadic
    })
  };
}
var Vu = (
  /** @class */
  function() {
    function t(e, n, l, i) {
      var r = this;
      if (n === void 0 && (n = t.defaultLocale), this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(o) {
        var a = r.formatToParts(o);
        if (a.length === 1)
          return a[0].value;
        var s = a.reduce(function(f, u) {
          return !f.length || u.type !== G.literal || typeof f[f.length - 1] != "string" ? f.push(u.value) : f[f.length - 1] += u.value, f;
        }, []);
        return s.length <= 1 ? s[0] || "" : s;
      }, this.formatToParts = function(o) {
        return jt(r.ast, r.locales, r.formatters, r.formats, o, void 0, r.message);
      }, this.resolvedOptions = function() {
        return {
          locale: r.resolvedLocale.toString()
        };
      }, this.getAst = function() {
        return r.ast;
      }, this.locales = n, this.resolvedLocale = t.resolveLocale(n), typeof e == "string") {
        if (this.message = e, !t.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        this.ast = t.__parse(e, {
          ignoreTag: i == null ? void 0 : i.ignoreTag,
          locale: this.resolvedLocale
        });
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = ju(t.formats, l), this.formatters = i && i.formatters || qu(this.formatterCache);
    }
    return Object.defineProperty(t, "defaultLocale", {
      get: function() {
        return t.memoizedDefaultLocale || (t.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), t.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), t.memoizedDefaultLocale = null, t.resolveLocale = function(e) {
      var n = Intl.NumberFormat.supportedLocalesOf(e);
      return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof e == "string" ? e : e[0]);
    }, t.__parse = Au, t.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, t;
  }()
);
function xu(t, e) {
  if (e == null)
    return;
  if (e in t)
    return t[e];
  const n = e.split(".");
  let l = t;
  for (let i = 0; i < n.length; i++)
    if (typeof l == "object") {
      if (i > 0) {
        const r = n.slice(i, n.length).join(".");
        if (r in l) {
          l = l[r];
          break;
        }
      }
      l = l[n[i]];
    } else
      l = void 0;
  return l;
}
const Ae = {}, zu = (t, e, n) => n && (e in Ae || (Ae[e] = {}), t in Ae[e] || (Ae[e][t] = n), n), Tr = (t, e) => {
  if (e == null)
    return;
  if (e in Ae && t in Ae[e])
    return Ae[e][t];
  const n = hn(e);
  for (let l = 0; l < n.length; l++) {
    const i = n[l], r = Zu(i, t);
    if (r)
      return zu(t, e, r);
  }
};
let Kn;
const Et = wt({});
function Xu(t) {
  return Kn[t] || null;
}
function Br(t) {
  return t in Kn;
}
function Zu(t, e) {
  if (!Br(t))
    return null;
  const n = Xu(t);
  return xu(n, e);
}
function Wu(t) {
  if (t == null)
    return;
  const e = hn(t);
  for (let n = 0; n < e.length; n++) {
    const l = e[n];
    if (Br(l))
      return l;
  }
}
function Ju(t, ...e) {
  delete Ae[t], Et.update((n) => (n[t] = Kf.all([n[t] || {}, ...e]), n));
}
ft(
  [Et],
  ([t]) => Object.keys(t)
);
Et.subscribe((t) => Kn = t);
const qt = {};
function $u(t, e) {
  qt[t].delete(e), qt[t].size === 0 && delete qt[t];
}
function Hr(t) {
  return qt[t];
}
function Qu(t) {
  return hn(t).map((e) => {
    const n = Hr(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function Vn(t) {
  return t == null ? !1 : hn(t).some(
    (e) => {
      var n;
      return (n = Hr(e)) == null ? void 0 : n.size;
    }
  );
}
function Yu(t, e) {
  return Promise.all(
    e.map((l) => ($u(t, l), l().then((i) => i.default || i)))
  ).then((l) => Ju(t, ...l));
}
const ht = {};
function Cr(t) {
  if (!Vn(t))
    return t in ht ? ht[t] : Promise.resolve();
  const e = Qu(t);
  return ht[t] = Promise.all(
    e.map(
      ([n, l]) => Yu(n, l)
    )
  ).then(() => {
    if (Vn(t))
      return Cr(t);
    delete ht[t];
  }), ht[t];
}
const Ku = {
  number: {
    scientific: { notation: "scientific" },
    engineering: { notation: "engineering" },
    compactLong: { notation: "compact", compactDisplay: "long" },
    compactShort: { notation: "compact", compactDisplay: "short" }
  },
  date: {
    short: { month: "numeric", day: "numeric", year: "2-digit" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
    full: { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  },
  time: {
    short: { hour: "numeric", minute: "numeric" },
    medium: { hour: "numeric", minute: "numeric", second: "numeric" },
    long: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    },
    full: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }
  }
}, ec = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Ku,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, tc = ec;
function it() {
  return tc;
}
const In = wt(!1);
var nc = Object.defineProperty, lc = Object.defineProperties, ic = Object.getOwnPropertyDescriptors, Zl = Object.getOwnPropertySymbols, rc = Object.prototype.hasOwnProperty, oc = Object.prototype.propertyIsEnumerable, Wl = (t, e, n) => e in t ? nc(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, sc = (t, e) => {
  for (var n in e || (e = {}))
    rc.call(e, n) && Wl(t, n, e[n]);
  if (Zl)
    for (var n of Zl(e))
      oc.call(e, n) && Wl(t, n, e[n]);
  return t;
}, ac = (t, e) => lc(t, ic(e));
let xn;
const Jt = wt(null);
function Jl(t) {
  return t.split("-").map((e, n, l) => l.slice(0, n + 1).join("-")).reverse();
}
function hn(t, e = it().fallbackLocale) {
  const n = Jl(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Jl(e)])] : n;
}
function De() {
  return xn ?? void 0;
}
Jt.subscribe((t) => {
  xn = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const fc = (t) => {
  if (t && Wu(t) && Vn(t)) {
    const { loadingDelay: e } = it();
    let n;
    return typeof window < "u" && De() != null && e ? n = window.setTimeout(
      () => In.set(!0),
      e
    ) : In.set(!0), Cr(t).then(() => {
      Jt.set(t);
    }).finally(() => {
      clearTimeout(n), In.set(!1);
    });
  }
  return Jt.set(t);
}, kt = ac(sc({}, Jt), {
  set: fc
}), mn = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (l) => {
    const i = JSON.stringify(l);
    return i in e ? e[i] : e[i] = t(l);
  };
};
var uc = Object.defineProperty, $t = Object.getOwnPropertySymbols, Ar = Object.prototype.hasOwnProperty, Nr = Object.prototype.propertyIsEnumerable, $l = (t, e, n) => e in t ? uc(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, el = (t, e) => {
  for (var n in e || (e = {}))
    Ar.call(e, n) && $l(t, n, e[n]);
  if ($t)
    for (var n of $t(e))
      Nr.call(e, n) && $l(t, n, e[n]);
  return t;
}, ut = (t, e) => {
  var n = {};
  for (var l in t)
    Ar.call(t, l) && e.indexOf(l) < 0 && (n[l] = t[l]);
  if (t != null && $t)
    for (var l of $t(t))
      e.indexOf(l) < 0 && Nr.call(t, l) && (n[l] = t[l]);
  return n;
};
const pt = (t, e) => {
  const { formats: n } = it();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, cc = mn(
  (t) => {
    var e = t, { locale: n, format: l } = e, i = ut(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return l && (i = pt("number", l)), new Intl.NumberFormat(n, i);
  }
), _c = mn(
  (t) => {
    var e = t, { locale: n, format: l } = e, i = ut(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return l ? i = pt("date", l) : Object.keys(i).length === 0 && (i = pt("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), hc = mn(
  (t) => {
    var e = t, { locale: n, format: l } = e, i = ut(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return l ? i = pt("time", l) : Object.keys(i).length === 0 && (i = pt("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), mc = (t = {}) => {
  var e = t, {
    locale: n = De()
  } = e, l = ut(e, [
    "locale"
  ]);
  return cc(el({ locale: n }, l));
}, dc = (t = {}) => {
  var e = t, {
    locale: n = De()
  } = e, l = ut(e, [
    "locale"
  ]);
  return _c(el({ locale: n }, l));
}, bc = (t = {}) => {
  var e = t, {
    locale: n = De()
  } = e, l = ut(e, [
    "locale"
  ]);
  return hc(el({ locale: n }, l));
}, pc = mn(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = De()) => new Vu(t, e, it().formats, {
    ignoreTag: it().ignoreTag
  })
), gc = (t, e = {}) => {
  var n, l, i, r;
  let o = e;
  typeof t == "object" && (o = t, t = o.id);
  const {
    values: a,
    locale: s = De(),
    default: f
  } = o;
  if (s == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let u = Tr(t, s);
  if (!u)
    u = (r = (i = (l = (n = it()).handleMissingMessage) == null ? void 0 : l.call(n, { locale: s, id: t, defaultValue: f })) != null ? i : f) != null ? r : t;
  else if (typeof u != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof u}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), u;
  if (!a)
    return u;
  let c = u;
  try {
    c = pc(u, s).format(a);
  } catch (_) {
    _ instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      _.message
    );
  }
  return c;
}, vc = (t, e) => bc(e).format(t), yc = (t, e) => dc(e).format(t), wc = (t, e) => mc(e).format(t), Ec = (t, e = De()) => Tr(t, e);
ft([kt, Et], () => gc);
ft([kt], () => vc);
ft([kt], () => yc);
ft([kt], () => wc);
ft([kt, Et], () => Ec);
const {
  SvelteComponent: kc,
  append: D,
  attr: he,
  check_outros: St,
  create_component: Pr,
  destroy_component: Ir,
  destroy_each: Or,
  detach: M,
  element: Z,
  empty: Lr,
  ensure_array_like: Qt,
  group_outros: Tt,
  init: Sc,
  insert: R,
  listen: Mr,
  mount_component: Rr,
  noop: j,
  safe_not_equal: Tc,
  set_data: Fe,
  space: Yt,
  text: U,
  toggle_class: Ql,
  transition_in: X,
  transition_out: ee
} = window.__gradio__svelte__internal;
function Yl(t, e, n) {
  const l = t.slice();
  return l[5] = e[n], l[7] = n, l;
}
function Kl(t, e, n) {
  const l = t.slice();
  return l[5] = e[n], l[7] = n, l;
}
function Bc(t) {
  let e, n;
  return {
    c() {
      e = Z("div"), n = U(
        /*value*/
        t[1]
      ), he(e, "class", "json-item svelte-oqunb4");
    },
    m(l, i) {
      R(l, e, i), D(e, n);
    },
    p(l, i) {
      i & /*value*/
      2 && Fe(
        n,
        /*value*/
        l[1]
      );
    },
    i: j,
    o: j,
    d(l) {
      l && M(e);
    }
  };
}
function Hc(t) {
  let e, n;
  return {
    c() {
      e = Z("div"), n = U(
        /*value*/
        t[1]
      ), he(e, "class", "json-item number svelte-oqunb4");
    },
    m(l, i) {
      R(l, e, i), D(e, n);
    },
    p(l, i) {
      i & /*value*/
      2 && Fe(
        n,
        /*value*/
        l[1]
      );
    },
    i: j,
    o: j,
    d(l) {
      l && M(e);
    }
  };
}
function Cc(t) {
  let e, n = (
    /*value*/
    t[1].toLocaleString() + ""
  ), l;
  return {
    c() {
      e = Z("div"), l = U(n), he(e, "class", "json-item bool svelte-oqunb4");
    },
    m(i, r) {
      R(i, e, r), D(e, l);
    },
    p(i, r) {
      r & /*value*/
      2 && n !== (n = /*value*/
      i[1].toLocaleString() + "") && Fe(l, n);
    },
    i: j,
    o: j,
    d(i) {
      i && M(e);
    }
  };
}
function Ac(t) {
  let e, n, l, i;
  return {
    c() {
      e = Z("div"), n = U('"'), l = U(
        /*value*/
        t[1]
      ), i = U('"'), he(e, "class", "json-item string svelte-oqunb4");
    },
    m(r, o) {
      R(r, e, o), D(e, n), D(e, l), D(e, i);
    },
    p(r, o) {
      o & /*value*/
      2 && Fe(
        l,
        /*value*/
        r[1]
      );
    },
    i: j,
    o: j,
    d(r) {
      r && M(e);
    }
  };
}
function Nc(t) {
  let e;
  return {
    c() {
      e = Z("div"), e.textContent = "null", he(e, "class", "json-item null svelte-oqunb4");
    },
    m(n, l) {
      R(n, e, l);
    },
    p: j,
    i: j,
    o: j,
    d(n) {
      n && M(e);
    }
  };
}
function Pc(t) {
  let e, n, l, i;
  const r = [Lc, Oc], o = [];
  function a(s, f) {
    return (
      /*collapsed*/
      s[0] ? 0 : 1
    );
  }
  return e = a(t), n = o[e] = r[e](t), {
    c() {
      n.c(), l = Lr();
    },
    m(s, f) {
      o[e].m(s, f), R(s, l, f), i = !0;
    },
    p(s, f) {
      let u = e;
      e = a(s), e === u ? o[e].p(s, f) : (Tt(), ee(o[u], 1, 1, () => {
        o[u] = null;
      }), St(), n = o[e], n ? n.p(s, f) : (n = o[e] = r[e](s), n.c()), X(n, 1), n.m(l.parentNode, l));
    },
    i(s) {
      i || (X(n), i = !0);
    },
    o(s) {
      ee(n), i = !1;
    },
    d(s) {
      s && M(l), o[e].d(s);
    }
  };
}
function Ic(t) {
  let e, n, l, i;
  const r = [Rc, Mc], o = [];
  function a(s, f) {
    return (
      /*collapsed*/
      s[0] ? 0 : 1
    );
  }
  return e = a(t), n = o[e] = r[e](t), {
    c() {
      n.c(), l = Lr();
    },
    m(s, f) {
      o[e].m(s, f), R(s, l, f), i = !0;
    },
    p(s, f) {
      let u = e;
      e = a(s), e === u ? o[e].p(s, f) : (Tt(), ee(o[u], 1, 1, () => {
        o[u] = null;
      }), St(), n = o[e], n ? n.p(s, f) : (n = o[e] = r[e](s), n.c()), X(n, 1), n.m(l.parentNode, l));
    },
    i(s) {
      i || (X(n), i = !0);
    },
    o(s) {
      ee(n), i = !1;
    },
    d(s) {
      s && M(l), o[e].d(s);
    }
  };
}
function Oc(t) {
  let e, n, l, i, r = Qt(Object.entries(
    /*value*/
    t[1]
  )), o = [];
  for (let s = 0; s < r.length; s += 1)
    o[s] = ti(Yl(t, r, s));
  const a = (s) => ee(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      e = U(`{
			`), n = Z("div");
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      l = U(`
			}`), he(n, "class", "children svelte-oqunb4");
    },
    m(s, f) {
      R(s, e, f), R(s, n, f);
      for (let u = 0; u < o.length; u += 1)
        o[u] && o[u].m(n, null);
      R(s, l, f), i = !0;
    },
    p(s, f) {
      if (f & /*Object, value, depth*/
      6) {
        r = Qt(Object.entries(
          /*value*/
          s[1]
        ));
        let u;
        for (u = 0; u < r.length; u += 1) {
          const c = Yl(s, r, u);
          o[u] ? (o[u].p(c, f), X(o[u], 1)) : (o[u] = ti(c), o[u].c(), X(o[u], 1), o[u].m(n, null));
        }
        for (Tt(), u = r.length; u < o.length; u += 1)
          a(u);
        St();
      }
    },
    i(s) {
      if (!i) {
        for (let f = 0; f < r.length; f += 1)
          X(o[f]);
        i = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let f = 0; f < o.length; f += 1)
        ee(o[f]);
      i = !1;
    },
    d(s) {
      s && (M(e), M(n), M(l)), Or(o, s);
    }
  };
}
function Lc(t) {
  let e, n, l = Object.keys(
    /*value*/
    t[1]
  ).length + "", i, r, o, a;
  return {
    c() {
      e = Z("button"), n = U("{+"), i = U(l), r = U(" items}");
    },
    m(s, f) {
      R(s, e, f), D(e, n), D(e, i), D(e, r), o || (a = Mr(
        e,
        "click",
        /*click_handler_1*/
        t[4]
      ), o = !0);
    },
    p(s, f) {
      f & /*value*/
      2 && l !== (l = Object.keys(
        /*value*/
        s[1]
      ).length + "") && Fe(i, l);
    },
    i: j,
    o: j,
    d(s) {
      s && M(e), o = !1, a();
    }
  };
}
function ei(t) {
  let e;
  return {
    c() {
      e = U(",");
    },
    m(n, l) {
      R(n, e, l);
    },
    d(n) {
      n && M(e);
    }
  };
}
function ti(t) {
  let e, n = (
    /*node*/
    t[5][0] + ""
  ), l, i, r, o = (
    /*i*/
    t[7] !== Object.keys(
      /*value*/
      t[1]
    ).length - 1
  ), a, s;
  r = new tl({
    props: {
      value: (
        /*node*/
        t[5][1]
      ),
      depth: (
        /*depth*/
        t[2] + 1
      ),
      key: (
        /*i*/
        t[7]
      )
    }
  });
  let f = o && ei();
  return {
    c() {
      e = Z("div"), l = U(n), i = U(": "), Pr(r.$$.fragment), f && f.c(), a = Yt();
    },
    m(u, c) {
      R(u, e, c), D(e, l), D(e, i), Rr(r, e, null), f && f.m(e, null), D(e, a), s = !0;
    },
    p(u, c) {
      (!s || c & /*value*/
      2) && n !== (n = /*node*/
      u[5][0] + "") && Fe(l, n);
      const _ = {};
      c & /*value*/
      2 && (_.value = /*node*/
      u[5][1]), c & /*depth*/
      4 && (_.depth = /*depth*/
      u[2] + 1), r.$set(_), c & /*value*/
      2 && (o = /*i*/
      u[7] !== Object.keys(
        /*value*/
        u[1]
      ).length - 1), o ? f || (f = ei(), f.c(), f.m(e, a)) : f && (f.d(1), f = null);
    },
    i(u) {
      s || (X(r.$$.fragment, u), s = !0);
    },
    o(u) {
      ee(r.$$.fragment, u), s = !1;
    },
    d(u) {
      u && M(e), Ir(r), f && f.d();
    }
  };
}
function Mc(t) {
  let e, n, l, i, r = Qt(
    /*value*/
    t[1]
  ), o = [];
  for (let s = 0; s < r.length; s += 1)
    o[s] = li(Kl(t, r, s));
  const a = (s) => ee(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      e = U(`[
			`), n = Z("div");
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      l = U(`
			]`), he(n, "class", "children svelte-oqunb4");
    },
    m(s, f) {
      R(s, e, f), R(s, n, f);
      for (let u = 0; u < o.length; u += 1)
        o[u] && o[u].m(n, null);
      R(s, l, f), i = !0;
    },
    p(s, f) {
      if (f & /*value, depth*/
      6) {
        r = Qt(
          /*value*/
          s[1]
        );
        let u;
        for (u = 0; u < r.length; u += 1) {
          const c = Kl(s, r, u);
          o[u] ? (o[u].p(c, f), X(o[u], 1)) : (o[u] = li(c), o[u].c(), X(o[u], 1), o[u].m(n, null));
        }
        for (Tt(), u = r.length; u < o.length; u += 1)
          a(u);
        St();
      }
    },
    i(s) {
      if (!i) {
        for (let f = 0; f < r.length; f += 1)
          X(o[f]);
        i = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let f = 0; f < o.length; f += 1)
        ee(o[f]);
      i = !1;
    },
    d(s) {
      s && (M(e), M(n), M(l)), Or(o, s);
    }
  };
}
function Rc(t) {
  let e, n, l, i = (
    /*value*/
    t[1].length + ""
  ), r, o, a, s;
  return {
    c() {
      e = Z("button"), n = Z("span"), l = U("expand "), r = U(i), o = U(" children"), he(n, "class", "expand-array svelte-oqunb4");
    },
    m(f, u) {
      R(f, e, u), D(e, n), D(n, l), D(n, r), D(n, o), a || (s = Mr(
        e,
        "click",
        /*click_handler*/
        t[3]
      ), a = !0);
    },
    p(f, u) {
      u & /*value*/
      2 && i !== (i = /*value*/
      f[1].length + "") && Fe(r, i);
    },
    i: j,
    o: j,
    d(f) {
      f && M(e), a = !1, s();
    }
  };
}
function ni(t) {
  let e;
  return {
    c() {
      e = U(",");
    },
    m(n, l) {
      R(n, e, l);
    },
    d(n) {
      n && M(e);
    }
  };
}
function li(t) {
  let e, n, l, i, r, o, a;
  i = new tl({
    props: {
      value: (
        /*node*/
        t[5]
      ),
      depth: (
        /*depth*/
        t[2] + 1
      )
    }
  });
  let s = (
    /*i*/
    t[7] !== /*value*/
    t[1].length - 1 && ni()
  );
  return {
    c() {
      e = Z("div"), n = U(
        /*i*/
        t[7]
      ), l = U(": "), Pr(i.$$.fragment), r = Yt(), s && s.c(), o = Yt();
    },
    m(f, u) {
      R(f, e, u), D(e, n), D(e, l), Rr(i, e, null), D(e, r), s && s.m(e, null), D(e, o), a = !0;
    },
    p(f, u) {
      const c = {};
      u & /*value*/
      2 && (c.value = /*node*/
      f[5]), u & /*depth*/
      4 && (c.depth = /*depth*/
      f[2] + 1), i.$set(c), /*i*/
      f[7] !== /*value*/
      f[1].length - 1 ? s || (s = ni(), s.c(), s.m(e, o)) : s && (s.d(1), s = null);
    },
    i(f) {
      a || (X(i.$$.fragment, f), a = !0);
    },
    o(f) {
      ee(i.$$.fragment, f), a = !1;
    },
    d(f) {
      f && M(e), Ir(i), s && s.d();
    }
  };
}
function Uc(t) {
  let e, n, l, i, r, o;
  const a = [
    Ic,
    Pc,
    Nc,
    Ac,
    Cc,
    Hc,
    Bc
  ], s = [];
  function f(u, c) {
    return (
      /*value*/
      u[1] instanceof Array ? 0 : (
        /*value*/
        u[1] instanceof Object ? 1 : (
          /*value*/
          u[1] === null ? 2 : typeof /*value*/
          u[1] == "string" ? 3 : typeof /*value*/
          u[1] == "boolean" ? 4 : typeof /*value*/
          u[1] == "number" ? 5 : 6
        )
      )
    );
  }
  return i = f(t), r = s[i] = a[i](t), {
    c() {
      e = Z("span"), n = Yt(), l = Z("div"), r.c(), he(e, "class", "spacer svelte-oqunb4"), Ql(
        e,
        "mt-10",
        /*depth*/
        t[2] === 0
      ), he(l, "class", "json-node svelte-oqunb4");
    },
    m(u, c) {
      R(u, e, c), R(u, n, c), R(u, l, c), s[i].m(l, null), o = !0;
    },
    p(u, [c]) {
      (!o || c & /*depth*/
      4) && Ql(
        e,
        "mt-10",
        /*depth*/
        u[2] === 0
      );
      let _ = i;
      i = f(u), i === _ ? s[i].p(u, c) : (Tt(), ee(s[_], 1, 1, () => {
        s[_] = null;
      }), St(), r = s[i], r ? r.p(u, c) : (r = s[i] = a[i](u), r.c()), X(r, 1), r.m(l, null));
    },
    i(u) {
      o || (X(r), o = !0);
    },
    o(u) {
      ee(r), o = !1;
    },
    d(u) {
      u && (M(e), M(n), M(l)), s[i].d();
    }
  };
}
function Dc(t, e, n) {
  let { value: l } = e, { depth: i } = e, { collapsed: r = i > 4 } = e;
  const o = () => {
    n(0, r = !1);
  }, a = () => {
    n(0, r = !1);
  };
  return t.$$set = (s) => {
    "value" in s && n(1, l = s.value), "depth" in s && n(2, i = s.depth), "collapsed" in s && n(0, r = s.collapsed);
  }, [r, l, i, o, a];
}
class tl extends kc {
  constructor(e) {
    super(), Sc(this, e, Dc, Uc, Tc, { value: 1, depth: 2, collapsed: 0 });
  }
}
const {
  SvelteComponent: Fc,
  add_render_callback: Gc,
  attr: me,
  check_outros: Ur,
  create_component: Bt,
  create_in_transition: jc,
  destroy_component: Ht,
  detach: $e,
  element: Kt,
  empty: qc,
  group_outros: Dr,
  init: Vc,
  insert: Qe,
  listen: xc,
  mount_component: Ct,
  null_to_empty: ii,
  safe_not_equal: zc,
  space: Xc,
  transition_in: pe,
  transition_out: ge
} = window.__gradio__svelte__internal, { onDestroy: Zc } = window.__gradio__svelte__internal;
function Wc(t) {
  let e, n, l;
  return n = new Gi({
    props: {
      $$slots: { default: [$c] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = Kt("div"), Bt(n.$$.fragment), me(e, "class", "empty-wrapper svelte-i8cje6");
    },
    m(i, r) {
      Qe(i, e, r), Ct(n, e, null), l = !0;
    },
    p(i, r) {
      const o = {};
      r & /*$$scope*/
      32 && (o.$$scope = { dirty: r, ctx: i }), n.$set(o);
    },
    i(i) {
      l || (pe(n.$$.fragment, i), l = !0);
    },
    o(i) {
      ge(n.$$.fragment, i), l = !1;
    },
    d(i) {
      i && $e(e), Ht(n);
    }
  };
}
function Jc(t) {
  let e, n, l, i, r, o, a, s, f, u, c, _;
  const h = [Yc, Qc], m = [];
  function v(g, y) {
    return (
      /*copied*/
      g[1] ? 0 : 1
    );
  }
  return n = v(t), l = m[n] = h[n](t), f = new tl({
    props: { value: (
      /*value*/
      t[0]
    ), depth: 0 }
  }), {
    c() {
      e = Kt("button"), l.c(), a = Xc(), s = Kt("div"), Bt(f.$$.fragment), me(e, "title", "copy"), me(e, "class", i = ii(
        /*copied*/
        t[1] ? "" : "copy-text"
      ) + " svelte-i8cje6"), me(e, "aria-roledescription", r = /*copied*/
      t[1] ? "Copied value" : "Copy value"), me(e, "aria-label", o = /*copied*/
      t[1] ? "Copied" : "Copy"), me(s, "class", "json-holder svelte-i8cje6");
    },
    m(g, y) {
      Qe(g, e, y), m[n].m(e, null), Qe(g, a, y), Qe(g, s, y), Ct(f, s, null), u = !0, c || (_ = xc(
        e,
        "click",
        /*handle_copy*/
        t[2]
      ), c = !0);
    },
    p(g, y) {
      let p = n;
      n = v(g), n !== p && (Dr(), ge(m[p], 1, 1, () => {
        m[p] = null;
      }), Ur(), l = m[n], l || (l = m[n] = h[n](g), l.c()), pe(l, 1), l.m(e, null)), (!u || y & /*copied*/
      2 && i !== (i = ii(
        /*copied*/
        g[1] ? "" : "copy-text"
      ) + " svelte-i8cje6")) && me(e, "class", i), (!u || y & /*copied*/
      2 && r !== (r = /*copied*/
      g[1] ? "Copied value" : "Copy value")) && me(e, "aria-roledescription", r), (!u || y & /*copied*/
      2 && o !== (o = /*copied*/
      g[1] ? "Copied" : "Copy")) && me(e, "aria-label", o);
      const d = {};
      y & /*value*/
      1 && (d.value = /*value*/
      g[0]), f.$set(d);
    },
    i(g) {
      u || (pe(l), pe(f.$$.fragment, g), u = !0);
    },
    o(g) {
      ge(l), ge(f.$$.fragment, g), u = !1;
    },
    d(g) {
      g && ($e(e), $e(a), $e(s)), m[n].d(), Ht(f), c = !1, _();
    }
  };
}
function $c(t) {
  let e, n;
  return e = new ds({}), {
    c() {
      Bt(e.$$.fragment);
    },
    m(l, i) {
      Ct(e, l, i), n = !0;
    },
    i(l) {
      n || (pe(e.$$.fragment, l), n = !0);
    },
    o(l) {
      ge(e.$$.fragment, l), n = !1;
    },
    d(l) {
      Ht(e, l);
    }
  };
}
function Qc(t) {
  let e, n;
  return e = new ts({}), {
    c() {
      Bt(e.$$.fragment);
    },
    m(l, i) {
      Ct(e, l, i), n = !0;
    },
    i(l) {
      n || (pe(e.$$.fragment, l), n = !0);
    },
    o(l) {
      ge(e.$$.fragment, l), n = !1;
    },
    d(l) {
      Ht(e, l);
    }
  };
}
function Yc(t) {
  let e, n, l, i;
  return n = new Wo({}), {
    c() {
      e = Kt("span"), Bt(n.$$.fragment);
    },
    m(r, o) {
      Qe(r, e, o), Ct(n, e, null), i = !0;
    },
    i(r) {
      i || (pe(n.$$.fragment, r), r && (l || Gc(() => {
        l = jc(e, Rf, { duration: 300 }), l.start();
      })), i = !0);
    },
    o(r) {
      ge(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && $e(e), Ht(n);
    }
  };
}
function Kc(t) {
  let e, n, l, i, r;
  const o = [Jc, Wc], a = [];
  function s(f, u) {
    return u & /*value*/
    1 && (e = null), e == null && (e = !!/*value*/
    (f[0] && /*value*/
    f[0] !== '""' && !e_(
      /*value*/
      f[0]
    ))), e ? 0 : 1;
  }
  return n = s(t, -1), l = a[n] = o[n](t), {
    c() {
      l.c(), i = qc();
    },
    m(f, u) {
      a[n].m(f, u), Qe(f, i, u), r = !0;
    },
    p(f, [u]) {
      let c = n;
      n = s(f, u), n === c ? a[n].p(f, u) : (Dr(), ge(a[c], 1, 1, () => {
        a[c] = null;
      }), Ur(), l = a[n], l ? l.p(f, u) : (l = a[n] = o[n](f), l.c()), pe(l, 1), l.m(i.parentNode, i));
    },
    i(f) {
      r || (pe(l), r = !0);
    },
    o(f) {
      ge(l), r = !1;
    },
    d(f) {
      f && $e(i), a[n].d(f);
    }
  };
}
function e_(t) {
  return t && Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype && JSON.stringify(t) === JSON.stringify({});
}
function t_(t, e, n) {
  let { value: l = {} } = e, i = !1, r;
  function o() {
    n(1, i = !0), r && clearTimeout(r), r = setTimeout(
      () => {
        n(1, i = !1);
      },
      1e3
    );
  }
  async function a() {
    "clipboard" in navigator && (await navigator.clipboard.writeText(JSON.stringify(l, null, 2)), o());
  }
  return Zc(() => {
    r && clearTimeout(r);
  }), t.$$set = (s) => {
    "value" in s && n(0, l = s.value);
  }, [l, i, a];
}
class n_ extends Fc {
  constructor(e) {
    super(), Vc(this, e, t_, Kc, zc, { value: 0 });
  }
}
function xe(t) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], n = 0;
  for (; t > 1e3 && n < e.length - 1; )
    t /= 1e3, n++;
  let l = e[n];
  return (Number.isInteger(t) ? t : t.toFixed(1)) + l;
}
const {
  SvelteComponent: l_,
  append: re,
  attr: H,
  component_subscribe: ri,
  detach: i_,
  element: r_,
  init: o_,
  insert: s_,
  noop: oi,
  safe_not_equal: a_,
  set_style: Mt,
  svg_element: oe,
  toggle_class: si
} = window.__gradio__svelte__internal, { onMount: f_ } = window.__gradio__svelte__internal;
function u_(t) {
  let e, n, l, i, r, o, a, s, f, u, c, _;
  return {
    c() {
      e = r_("div"), n = oe("svg"), l = oe("g"), i = oe("path"), r = oe("path"), o = oe("path"), a = oe("path"), s = oe("g"), f = oe("path"), u = oe("path"), c = oe("path"), _ = oe("path"), H(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), H(i, "fill", "#FF7C00"), H(i, "fill-opacity", "0.4"), H(i, "class", "svelte-43sxxs"), H(r, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), H(r, "fill", "#FF7C00"), H(r, "class", "svelte-43sxxs"), H(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), H(o, "fill", "#FF7C00"), H(o, "fill-opacity", "0.4"), H(o, "class", "svelte-43sxxs"), H(a, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), H(a, "fill", "#FF7C00"), H(a, "class", "svelte-43sxxs"), Mt(l, "transform", "translate(" + /*$top*/
      t[1][0] + "px, " + /*$top*/
      t[1][1] + "px)"), H(f, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), H(f, "fill", "#FF7C00"), H(f, "fill-opacity", "0.4"), H(f, "class", "svelte-43sxxs"), H(u, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), H(u, "fill", "#FF7C00"), H(u, "class", "svelte-43sxxs"), H(c, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), H(c, "fill", "#FF7C00"), H(c, "fill-opacity", "0.4"), H(c, "class", "svelte-43sxxs"), H(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), H(_, "fill", "#FF7C00"), H(_, "class", "svelte-43sxxs"), Mt(s, "transform", "translate(" + /*$bottom*/
      t[2][0] + "px, " + /*$bottom*/
      t[2][1] + "px)"), H(n, "viewBox", "-1200 -1200 3000 3000"), H(n, "fill", "none"), H(n, "xmlns", "http://www.w3.org/2000/svg"), H(n, "class", "svelte-43sxxs"), H(e, "class", "svelte-43sxxs"), si(
        e,
        "margin",
        /*margin*/
        t[0]
      );
    },
    m(h, m) {
      s_(h, e, m), re(e, n), re(n, l), re(l, i), re(l, r), re(l, o), re(l, a), re(n, s), re(s, f), re(s, u), re(s, c), re(s, _);
    },
    p(h, [m]) {
      m & /*$top*/
      2 && Mt(l, "transform", "translate(" + /*$top*/
      h[1][0] + "px, " + /*$top*/
      h[1][1] + "px)"), m & /*$bottom*/
      4 && Mt(s, "transform", "translate(" + /*$bottom*/
      h[2][0] + "px, " + /*$bottom*/
      h[2][1] + "px)"), m & /*margin*/
      1 && si(
        e,
        "margin",
        /*margin*/
        h[0]
      );
    },
    i: oi,
    o: oi,
    d(h) {
      h && i_(e);
    }
  };
}
function c_(t, e, n) {
  let l, i, { margin: r = !0 } = e;
  const o = Ul([0, 0]);
  ri(t, o, (_) => n(1, l = _));
  const a = Ul([0, 0]);
  ri(t, a, (_) => n(2, i = _));
  let s;
  async function f() {
    await Promise.all([o.set([125, 140]), a.set([-125, -140])]), await Promise.all([o.set([-125, 140]), a.set([125, -140])]), await Promise.all([o.set([-125, 0]), a.set([125, -0])]), await Promise.all([o.set([125, 0]), a.set([-125, 0])]);
  }
  async function u() {
    await f(), s || u();
  }
  async function c() {
    await Promise.all([o.set([125, 0]), a.set([-125, 0])]), u();
  }
  return f_(() => (c(), () => s = !0)), t.$$set = (_) => {
    "margin" in _ && n(0, r = _.margin);
  }, [r, l, i, o, a];
}
class __ extends l_ {
  constructor(e) {
    super(), o_(this, e, c_, u_, a_, { margin: 0 });
  }
}
const {
  SvelteComponent: h_,
  append: Le,
  attr: ce,
  binding_callbacks: ai,
  check_outros: Fr,
  create_component: m_,
  create_slot: d_,
  destroy_component: b_,
  destroy_each: Gr,
  detach: k,
  element: de,
  empty: ct,
  ensure_array_like: en,
  get_all_dirty_from_scope: p_,
  get_slot_changes: g_,
  group_outros: jr,
  init: v_,
  insert: S,
  mount_component: y_,
  noop: zn,
  safe_not_equal: w_,
  set_data: te,
  set_style: Ne,
  space: _e,
  text: O,
  toggle_class: K,
  transition_in: rt,
  transition_out: ot,
  update_slot_base: E_
} = window.__gradio__svelte__internal, { tick: k_ } = window.__gradio__svelte__internal, { onDestroy: S_ } = window.__gradio__svelte__internal, T_ = (t) => ({}), fi = (t) => ({});
function ui(t, e, n) {
  const l = t.slice();
  return l[38] = e[n], l[40] = n, l;
}
function ci(t, e, n) {
  const l = t.slice();
  return l[38] = e[n], l;
}
function B_(t) {
  let e, n = (
    /*i18n*/
    t[1]("common.error") + ""
  ), l, i, r;
  const o = (
    /*#slots*/
    t[29].error
  ), a = d_(
    o,
    t,
    /*$$scope*/
    t[28],
    fi
  );
  return {
    c() {
      e = de("span"), l = O(n), i = _e(), a && a.c(), ce(e, "class", "error svelte-1txqlrd");
    },
    m(s, f) {
      S(s, e, f), Le(e, l), S(s, i, f), a && a.m(s, f), r = !0;
    },
    p(s, f) {
      (!r || f[0] & /*i18n*/
      2) && n !== (n = /*i18n*/
      s[1]("common.error") + "") && te(l, n), a && a.p && (!r || f[0] & /*$$scope*/
      268435456) && E_(
        a,
        o,
        s,
        /*$$scope*/
        s[28],
        r ? g_(
          o,
          /*$$scope*/
          s[28],
          f,
          T_
        ) : p_(
          /*$$scope*/
          s[28]
        ),
        fi
      );
    },
    i(s) {
      r || (rt(a, s), r = !0);
    },
    o(s) {
      ot(a, s), r = !1;
    },
    d(s) {
      s && (k(e), k(i)), a && a.d(s);
    }
  };
}
function H_(t) {
  let e, n, l, i, r, o, a, s, f, u = (
    /*variant*/
    t[8] === "default" && /*show_eta_bar*/
    t[18] && /*show_progress*/
    t[6] === "full" && _i(t)
  );
  function c(d, b) {
    if (
      /*progress*/
      d[7]
    )
      return N_;
    if (
      /*queue_position*/
      d[2] !== null && /*queue_size*/
      d[3] !== void 0 && /*queue_position*/
      d[2] >= 0
    )
      return A_;
    if (
      /*queue_position*/
      d[2] === 0
    )
      return C_;
  }
  let _ = c(t), h = _ && _(t), m = (
    /*timer*/
    t[5] && di(t)
  );
  const v = [L_, O_], g = [];
  function y(d, b) {
    return (
      /*last_progress_level*/
      d[15] != null ? 0 : (
        /*show_progress*/
        d[6] === "full" ? 1 : -1
      )
    );
  }
  ~(r = y(t)) && (o = g[r] = v[r](t));
  let p = !/*timer*/
  t[5] && Ei(t);
  return {
    c() {
      u && u.c(), e = _e(), n = de("div"), h && h.c(), l = _e(), m && m.c(), i = _e(), o && o.c(), a = _e(), p && p.c(), s = ct(), ce(n, "class", "progress-text svelte-1txqlrd"), K(
        n,
        "meta-text-center",
        /*variant*/
        t[8] === "center"
      ), K(
        n,
        "meta-text",
        /*variant*/
        t[8] === "default"
      );
    },
    m(d, b) {
      u && u.m(d, b), S(d, e, b), S(d, n, b), h && h.m(n, null), Le(n, l), m && m.m(n, null), S(d, i, b), ~r && g[r].m(d, b), S(d, a, b), p && p.m(d, b), S(d, s, b), f = !0;
    },
    p(d, b) {
      /*variant*/
      d[8] === "default" && /*show_eta_bar*/
      d[18] && /*show_progress*/
      d[6] === "full" ? u ? u.p(d, b) : (u = _i(d), u.c(), u.m(e.parentNode, e)) : u && (u.d(1), u = null), _ === (_ = c(d)) && h ? h.p(d, b) : (h && h.d(1), h = _ && _(d), h && (h.c(), h.m(n, l))), /*timer*/
      d[5] ? m ? m.p(d, b) : (m = di(d), m.c(), m.m(n, null)) : m && (m.d(1), m = null), (!f || b[0] & /*variant*/
      256) && K(
        n,
        "meta-text-center",
        /*variant*/
        d[8] === "center"
      ), (!f || b[0] & /*variant*/
      256) && K(
        n,
        "meta-text",
        /*variant*/
        d[8] === "default"
      );
      let L = r;
      r = y(d), r === L ? ~r && g[r].p(d, b) : (o && (jr(), ot(g[L], 1, 1, () => {
        g[L] = null;
      }), Fr()), ~r ? (o = g[r], o ? o.p(d, b) : (o = g[r] = v[r](d), o.c()), rt(o, 1), o.m(a.parentNode, a)) : o = null), /*timer*/
      d[5] ? p && (p.d(1), p = null) : p ? p.p(d, b) : (p = Ei(d), p.c(), p.m(s.parentNode, s));
    },
    i(d) {
      f || (rt(o), f = !0);
    },
    o(d) {
      ot(o), f = !1;
    },
    d(d) {
      d && (k(e), k(n), k(i), k(a), k(s)), u && u.d(d), h && h.d(), m && m.d(), ~r && g[r].d(d), p && p.d(d);
    }
  };
}
function _i(t) {
  let e, n = `translateX(${/*eta_level*/
  (t[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = de("div"), ce(e, "class", "eta-bar svelte-1txqlrd"), Ne(e, "transform", n);
    },
    m(l, i) {
      S(l, e, i);
    },
    p(l, i) {
      i[0] & /*eta_level*/
      131072 && n !== (n = `translateX(${/*eta_level*/
      (l[17] || 0) * 100 - 100}%)`) && Ne(e, "transform", n);
    },
    d(l) {
      l && k(e);
    }
  };
}
function C_(t) {
  let e;
  return {
    c() {
      e = O("processing |");
    },
    m(n, l) {
      S(n, e, l);
    },
    p: zn,
    d(n) {
      n && k(e);
    }
  };
}
function A_(t) {
  let e, n = (
    /*queue_position*/
    t[2] + 1 + ""
  ), l, i, r, o;
  return {
    c() {
      e = O("queue: "), l = O(n), i = O("/"), r = O(
        /*queue_size*/
        t[3]
      ), o = O(" |");
    },
    m(a, s) {
      S(a, e, s), S(a, l, s), S(a, i, s), S(a, r, s), S(a, o, s);
    },
    p(a, s) {
      s[0] & /*queue_position*/
      4 && n !== (n = /*queue_position*/
      a[2] + 1 + "") && te(l, n), s[0] & /*queue_size*/
      8 && te(
        r,
        /*queue_size*/
        a[3]
      );
    },
    d(a) {
      a && (k(e), k(l), k(i), k(r), k(o));
    }
  };
}
function N_(t) {
  let e, n = en(
    /*progress*/
    t[7]
  ), l = [];
  for (let i = 0; i < n.length; i += 1)
    l[i] = mi(ci(t, n, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      e = ct();
    },
    m(i, r) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(i, r);
      S(i, e, r);
    },
    p(i, r) {
      if (r[0] & /*progress*/
      128) {
        n = en(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = ci(i, n, o);
          l[o] ? l[o].p(a, r) : (l[o] = mi(a), l[o].c(), l[o].m(e.parentNode, e));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(i) {
      i && k(e), Gr(l, i);
    }
  };
}
function hi(t) {
  let e, n = (
    /*p*/
    t[38].unit + ""
  ), l, i, r = " ", o;
  function a(u, c) {
    return (
      /*p*/
      u[38].length != null ? I_ : P_
    );
  }
  let s = a(t), f = s(t);
  return {
    c() {
      f.c(), e = _e(), l = O(n), i = O(" | "), o = O(r);
    },
    m(u, c) {
      f.m(u, c), S(u, e, c), S(u, l, c), S(u, i, c), S(u, o, c);
    },
    p(u, c) {
      s === (s = a(u)) && f ? f.p(u, c) : (f.d(1), f = s(u), f && (f.c(), f.m(e.parentNode, e))), c[0] & /*progress*/
      128 && n !== (n = /*p*/
      u[38].unit + "") && te(l, n);
    },
    d(u) {
      u && (k(e), k(l), k(i), k(o)), f.d(u);
    }
  };
}
function P_(t) {
  let e = xe(
    /*p*/
    t[38].index || 0
  ) + "", n;
  return {
    c() {
      n = O(e);
    },
    m(l, i) {
      S(l, n, i);
    },
    p(l, i) {
      i[0] & /*progress*/
      128 && e !== (e = xe(
        /*p*/
        l[38].index || 0
      ) + "") && te(n, e);
    },
    d(l) {
      l && k(n);
    }
  };
}
function I_(t) {
  let e = xe(
    /*p*/
    t[38].index || 0
  ) + "", n, l, i = xe(
    /*p*/
    t[38].length
  ) + "", r;
  return {
    c() {
      n = O(e), l = O("/"), r = O(i);
    },
    m(o, a) {
      S(o, n, a), S(o, l, a), S(o, r, a);
    },
    p(o, a) {
      a[0] & /*progress*/
      128 && e !== (e = xe(
        /*p*/
        o[38].index || 0
      ) + "") && te(n, e), a[0] & /*progress*/
      128 && i !== (i = xe(
        /*p*/
        o[38].length
      ) + "") && te(r, i);
    },
    d(o) {
      o && (k(n), k(l), k(r));
    }
  };
}
function mi(t) {
  let e, n = (
    /*p*/
    t[38].index != null && hi(t)
  );
  return {
    c() {
      n && n.c(), e = ct();
    },
    m(l, i) {
      n && n.m(l, i), S(l, e, i);
    },
    p(l, i) {
      /*p*/
      l[38].index != null ? n ? n.p(l, i) : (n = hi(l), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(l) {
      l && k(e), n && n.d(l);
    }
  };
}
function di(t) {
  let e, n = (
    /*eta*/
    t[0] ? `/${/*formatted_eta*/
    t[19]}` : ""
  ), l, i;
  return {
    c() {
      e = O(
        /*formatted_timer*/
        t[20]
      ), l = O(n), i = O("s");
    },
    m(r, o) {
      S(r, e, o), S(r, l, o), S(r, i, o);
    },
    p(r, o) {
      o[0] & /*formatted_timer*/
      1048576 && te(
        e,
        /*formatted_timer*/
        r[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && n !== (n = /*eta*/
      r[0] ? `/${/*formatted_eta*/
      r[19]}` : "") && te(l, n);
    },
    d(r) {
      r && (k(e), k(l), k(i));
    }
  };
}
function O_(t) {
  let e, n;
  return e = new __({
    props: { margin: (
      /*variant*/
      t[8] === "default"
    ) }
  }), {
    c() {
      m_(e.$$.fragment);
    },
    m(l, i) {
      y_(e, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i[0] & /*variant*/
      256 && (r.margin = /*variant*/
      l[8] === "default"), e.$set(r);
    },
    i(l) {
      n || (rt(e.$$.fragment, l), n = !0);
    },
    o(l) {
      ot(e.$$.fragment, l), n = !1;
    },
    d(l) {
      b_(e, l);
    }
  };
}
function L_(t) {
  let e, n, l, i, r, o = `${/*last_progress_level*/
  t[15] * 100}%`, a = (
    /*progress*/
    t[7] != null && bi(t)
  );
  return {
    c() {
      e = de("div"), n = de("div"), a && a.c(), l = _e(), i = de("div"), r = de("div"), ce(n, "class", "progress-level-inner svelte-1txqlrd"), ce(r, "class", "progress-bar svelte-1txqlrd"), Ne(r, "width", o), ce(i, "class", "progress-bar-wrap svelte-1txqlrd"), ce(e, "class", "progress-level svelte-1txqlrd");
    },
    m(s, f) {
      S(s, e, f), Le(e, n), a && a.m(n, null), Le(e, l), Le(e, i), Le(i, r), t[30](r);
    },
    p(s, f) {
      /*progress*/
      s[7] != null ? a ? a.p(s, f) : (a = bi(s), a.c(), a.m(n, null)) : a && (a.d(1), a = null), f[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      s[15] * 100}%`) && Ne(r, "width", o);
    },
    i: zn,
    o: zn,
    d(s) {
      s && k(e), a && a.d(), t[30](null);
    }
  };
}
function bi(t) {
  let e, n = en(
    /*progress*/
    t[7]
  ), l = [];
  for (let i = 0; i < n.length; i += 1)
    l[i] = wi(ui(t, n, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      e = ct();
    },
    m(i, r) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(i, r);
      S(i, e, r);
    },
    p(i, r) {
      if (r[0] & /*progress_level, progress*/
      16512) {
        n = en(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = ui(i, n, o);
          l[o] ? l[o].p(a, r) : (l[o] = wi(a), l[o].c(), l[o].m(e.parentNode, e));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(i) {
      i && k(e), Gr(l, i);
    }
  };
}
function pi(t) {
  let e, n, l, i, r = (
    /*i*/
    t[40] !== 0 && M_()
  ), o = (
    /*p*/
    t[38].desc != null && gi(t)
  ), a = (
    /*p*/
    t[38].desc != null && /*progress_level*/
    t[14] && /*progress_level*/
    t[14][
      /*i*/
      t[40]
    ] != null && vi()
  ), s = (
    /*progress_level*/
    t[14] != null && yi(t)
  );
  return {
    c() {
      r && r.c(), e = _e(), o && o.c(), n = _e(), a && a.c(), l = _e(), s && s.c(), i = ct();
    },
    m(f, u) {
      r && r.m(f, u), S(f, e, u), o && o.m(f, u), S(f, n, u), a && a.m(f, u), S(f, l, u), s && s.m(f, u), S(f, i, u);
    },
    p(f, u) {
      /*p*/
      f[38].desc != null ? o ? o.p(f, u) : (o = gi(f), o.c(), o.m(n.parentNode, n)) : o && (o.d(1), o = null), /*p*/
      f[38].desc != null && /*progress_level*/
      f[14] && /*progress_level*/
      f[14][
        /*i*/
        f[40]
      ] != null ? a || (a = vi(), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null), /*progress_level*/
      f[14] != null ? s ? s.p(f, u) : (s = yi(f), s.c(), s.m(i.parentNode, i)) : s && (s.d(1), s = null);
    },
    d(f) {
      f && (k(e), k(n), k(l), k(i)), r && r.d(f), o && o.d(f), a && a.d(f), s && s.d(f);
    }
  };
}
function M_(t) {
  let e;
  return {
    c() {
      e = O(" /");
    },
    m(n, l) {
      S(n, e, l);
    },
    d(n) {
      n && k(e);
    }
  };
}
function gi(t) {
  let e = (
    /*p*/
    t[38].desc + ""
  ), n;
  return {
    c() {
      n = O(e);
    },
    m(l, i) {
      S(l, n, i);
    },
    p(l, i) {
      i[0] & /*progress*/
      128 && e !== (e = /*p*/
      l[38].desc + "") && te(n, e);
    },
    d(l) {
      l && k(n);
    }
  };
}
function vi(t) {
  let e;
  return {
    c() {
      e = O("-");
    },
    m(n, l) {
      S(n, e, l);
    },
    d(n) {
      n && k(e);
    }
  };
}
function yi(t) {
  let e = (100 * /*progress_level*/
  (t[14][
    /*i*/
    t[40]
  ] || 0)).toFixed(1) + "", n, l;
  return {
    c() {
      n = O(e), l = O("%");
    },
    m(i, r) {
      S(i, n, r), S(i, l, r);
    },
    p(i, r) {
      r[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[40]
      ] || 0)).toFixed(1) + "") && te(n, e);
    },
    d(i) {
      i && (k(n), k(l));
    }
  };
}
function wi(t) {
  let e, n = (
    /*p*/
    (t[38].desc != null || /*progress_level*/
    t[14] && /*progress_level*/
    t[14][
      /*i*/
      t[40]
    ] != null) && pi(t)
  );
  return {
    c() {
      n && n.c(), e = ct();
    },
    m(l, i) {
      n && n.m(l, i), S(l, e, i);
    },
    p(l, i) {
      /*p*/
      l[38].desc != null || /*progress_level*/
      l[14] && /*progress_level*/
      l[14][
        /*i*/
        l[40]
      ] != null ? n ? n.p(l, i) : (n = pi(l), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(l) {
      l && k(e), n && n.d(l);
    }
  };
}
function Ei(t) {
  let e, n;
  return {
    c() {
      e = de("p"), n = O(
        /*loading_text*/
        t[9]
      ), ce(e, "class", "loading svelte-1txqlrd");
    },
    m(l, i) {
      S(l, e, i), Le(e, n);
    },
    p(l, i) {
      i[0] & /*loading_text*/
      512 && te(
        n,
        /*loading_text*/
        l[9]
      );
    },
    d(l) {
      l && k(e);
    }
  };
}
function R_(t) {
  let e, n, l, i, r;
  const o = [H_, B_], a = [];
  function s(f, u) {
    return (
      /*status*/
      f[4] === "pending" ? 0 : (
        /*status*/
        f[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(n = s(t)) && (l = a[n] = o[n](t)), {
    c() {
      e = de("div"), l && l.c(), ce(e, "class", i = "wrap " + /*variant*/
      t[8] + " " + /*show_progress*/
      t[6] + " svelte-1txqlrd"), K(e, "hide", !/*status*/
      t[4] || /*status*/
      t[4] === "complete" || /*show_progress*/
      t[6] === "hidden"), K(
        e,
        "translucent",
        /*variant*/
        t[8] === "center" && /*status*/
        (t[4] === "pending" || /*status*/
        t[4] === "error") || /*translucent*/
        t[11] || /*show_progress*/
        t[6] === "minimal"
      ), K(
        e,
        "generating",
        /*status*/
        t[4] === "generating"
      ), K(
        e,
        "border",
        /*border*/
        t[12]
      ), Ne(
        e,
        "position",
        /*absolute*/
        t[10] ? "absolute" : "static"
      ), Ne(
        e,
        "padding",
        /*absolute*/
        t[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(f, u) {
      S(f, e, u), ~n && a[n].m(e, null), t[31](e), r = !0;
    },
    p(f, u) {
      let c = n;
      n = s(f), n === c ? ~n && a[n].p(f, u) : (l && (jr(), ot(a[c], 1, 1, () => {
        a[c] = null;
      }), Fr()), ~n ? (l = a[n], l ? l.p(f, u) : (l = a[n] = o[n](f), l.c()), rt(l, 1), l.m(e, null)) : l = null), (!r || u[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      f[8] + " " + /*show_progress*/
      f[6] + " svelte-1txqlrd")) && ce(e, "class", i), (!r || u[0] & /*variant, show_progress, status, show_progress*/
      336) && K(e, "hide", !/*status*/
      f[4] || /*status*/
      f[4] === "complete" || /*show_progress*/
      f[6] === "hidden"), (!r || u[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && K(
        e,
        "translucent",
        /*variant*/
        f[8] === "center" && /*status*/
        (f[4] === "pending" || /*status*/
        f[4] === "error") || /*translucent*/
        f[11] || /*show_progress*/
        f[6] === "minimal"
      ), (!r || u[0] & /*variant, show_progress, status*/
      336) && K(
        e,
        "generating",
        /*status*/
        f[4] === "generating"
      ), (!r || u[0] & /*variant, show_progress, border*/
      4416) && K(
        e,
        "border",
        /*border*/
        f[12]
      ), u[0] & /*absolute*/
      1024 && Ne(
        e,
        "position",
        /*absolute*/
        f[10] ? "absolute" : "static"
      ), u[0] & /*absolute*/
      1024 && Ne(
        e,
        "padding",
        /*absolute*/
        f[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(f) {
      r || (rt(l), r = !0);
    },
    o(f) {
      ot(l), r = !1;
    },
    d(f) {
      f && k(e), ~n && a[n].d(), t[31](null);
    }
  };
}
let Rt = [], On = !1;
async function U_(t, e = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && e !== !0)) {
    if (Rt.push(t), !On)
      On = !0;
    else
      return;
    await k_(), requestAnimationFrame(() => {
      let n = [0, 0];
      for (let l = 0; l < Rt.length; l++) {
        const r = Rt[l].getBoundingClientRect();
        (l === 0 || r.top + window.scrollY <= n[0]) && (n[0] = r.top + window.scrollY, n[1] = l);
      }
      window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), On = !1, Rt = [];
    });
  }
}
function D_(t, e, n) {
  let l, { $$slots: i = {}, $$scope: r } = e, { i18n: o } = e, { eta: a = null } = e, { queue_position: s } = e, { queue_size: f } = e, { status: u } = e, { scroll_to_output: c = !1 } = e, { timer: _ = !0 } = e, { show_progress: h = "full" } = e, { message: m = null } = e, { progress: v = null } = e, { variant: g = "default" } = e, { loading_text: y = "Loading..." } = e, { absolute: p = !0 } = e, { translucent: d = !1 } = e, { border: b = !1 } = e, { autoscroll: L } = e, w, F = !1, x = 0, ne = 0, Ge = null, je = null, sl = 0, Ie = null, _t, ve = null, al = !0;
  const xr = () => {
    n(0, a = n(26, Ge = n(19, At = null))), n(24, x = performance.now()), n(25, ne = 0), F = !0, fl();
  };
  function fl() {
    requestAnimationFrame(() => {
      n(25, ne = (performance.now() - x) / 1e3), F && fl();
    });
  }
  function ul() {
    n(25, ne = 0), n(0, a = n(26, Ge = n(19, At = null))), F && (F = !1);
  }
  S_(() => {
    F && ul();
  });
  let At = null;
  function zr(E) {
    ai[E ? "unshift" : "push"](() => {
      ve = E, n(16, ve), n(7, v), n(14, Ie), n(15, _t);
    });
  }
  function Xr(E) {
    ai[E ? "unshift" : "push"](() => {
      w = E, n(13, w);
    });
  }
  return t.$$set = (E) => {
    "i18n" in E && n(1, o = E.i18n), "eta" in E && n(0, a = E.eta), "queue_position" in E && n(2, s = E.queue_position), "queue_size" in E && n(3, f = E.queue_size), "status" in E && n(4, u = E.status), "scroll_to_output" in E && n(21, c = E.scroll_to_output), "timer" in E && n(5, _ = E.timer), "show_progress" in E && n(6, h = E.show_progress), "message" in E && n(22, m = E.message), "progress" in E && n(7, v = E.progress), "variant" in E && n(8, g = E.variant), "loading_text" in E && n(9, y = E.loading_text), "absolute" in E && n(10, p = E.absolute), "translucent" in E && n(11, d = E.translucent), "border" in E && n(12, b = E.border), "autoscroll" in E && n(23, L = E.autoscroll), "$$scope" in E && n(28, r = E.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    218103809 && (a === null && n(0, a = Ge), a != null && Ge !== a && (n(27, je = (performance.now() - x) / 1e3 + a), n(19, At = je.toFixed(1)), n(26, Ge = a))), t.$$.dirty[0] & /*eta_from_start, timer_diff*/
    167772160 && n(17, sl = je === null || je <= 0 || !ne ? null : Math.min(ne / je, 1)), t.$$.dirty[0] & /*progress*/
    128 && v != null && n(18, al = !1), t.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (v != null ? n(14, Ie = v.map((E) => {
      if (E.index != null && E.length != null)
        return E.index / E.length;
      if (E.progress != null)
        return E.progress;
    })) : n(14, Ie = null), Ie ? (n(15, _t = Ie[Ie.length - 1]), ve && (_t === 0 ? n(16, ve.style.transition = "0", ve) : n(16, ve.style.transition = "150ms", ve))) : n(15, _t = void 0)), t.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? xr() : ul()), t.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    10493968 && w && c && (u === "pending" || u === "complete") && U_(w, L), t.$$.dirty[0] & /*status, message*/
    4194320, t.$$.dirty[0] & /*timer_diff*/
    33554432 && n(20, l = ne.toFixed(1));
  }, [
    a,
    o,
    s,
    f,
    u,
    _,
    h,
    v,
    g,
    y,
    p,
    d,
    b,
    w,
    Ie,
    _t,
    ve,
    sl,
    al,
    At,
    l,
    c,
    m,
    L,
    x,
    ne,
    Ge,
    je,
    r,
    i,
    zr,
    Xr
  ];
}
class F_ extends h_ {
  constructor(e) {
    super(), v_(
      this,
      e,
      D_,
      R_,
      w_,
      {
        i18n: 1,
        eta: 0,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 21,
        timer: 5,
        show_progress: 6,
        message: 22,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 23
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: G_,
  attr: Ut,
  create_slot: j_,
  detach: q_,
  element: V_,
  get_all_dirty_from_scope: x_,
  get_slot_changes: z_,
  init: X_,
  insert: Z_,
  null_to_empty: ki,
  safe_not_equal: W_,
  toggle_class: ae,
  transition_in: J_,
  transition_out: $_,
  update_slot_base: Q_
} = window.__gradio__svelte__internal;
function Y_(t) {
  let e, n, l;
  const i = (
    /*#slots*/
    t[6].default
  ), r = j_(
    i,
    t,
    /*$$scope*/
    t[5],
    null
  );
  return {
    c() {
      e = V_("div"), r && r.c(), Ut(
        e,
        "id",
        /*elem_id*/
        t[1]
      ), Ut(e, "class", n = ki(
        /*elem_classes*/
        t[2].join(" ")
      ) + " svelte-iibkxk"), ae(
        e,
        "compact",
        /*variant*/
        t[4] === "compact"
      ), ae(
        e,
        "panel",
        /*variant*/
        t[4] === "panel"
      ), ae(
        e,
        "unequal-height",
        /*equal_height*/
        t[0] === !1
      ), ae(
        e,
        "stretch",
        /*equal_height*/
        t[0]
      ), ae(e, "hide", !/*visible*/
      t[3]);
    },
    m(o, a) {
      Z_(o, e, a), r && r.m(e, null), l = !0;
    },
    p(o, [a]) {
      r && r.p && (!l || a & /*$$scope*/
      32) && Q_(
        r,
        i,
        o,
        /*$$scope*/
        o[5],
        l ? z_(
          i,
          /*$$scope*/
          o[5],
          a,
          null
        ) : x_(
          /*$$scope*/
          o[5]
        ),
        null
      ), (!l || a & /*elem_id*/
      2) && Ut(
        e,
        "id",
        /*elem_id*/
        o[1]
      ), (!l || a & /*elem_classes*/
      4 && n !== (n = ki(
        /*elem_classes*/
        o[2].join(" ")
      ) + " svelte-iibkxk")) && Ut(e, "class", n), (!l || a & /*elem_classes, variant*/
      20) && ae(
        e,
        "compact",
        /*variant*/
        o[4] === "compact"
      ), (!l || a & /*elem_classes, variant*/
      20) && ae(
        e,
        "panel",
        /*variant*/
        o[4] === "panel"
      ), (!l || a & /*elem_classes, equal_height*/
      5) && ae(
        e,
        "unequal-height",
        /*equal_height*/
        o[0] === !1
      ), (!l || a & /*elem_classes, equal_height*/
      5) && ae(
        e,
        "stretch",
        /*equal_height*/
        o[0]
      ), (!l || a & /*elem_classes, visible*/
      12) && ae(e, "hide", !/*visible*/
      o[3]);
    },
    i(o) {
      l || (J_(r, o), l = !0);
    },
    o(o) {
      $_(r, o), l = !1;
    },
    d(o) {
      o && q_(e), r && r.d(o);
    }
  };
}
function K_(t, e, n) {
  let { $$slots: l = {}, $$scope: i } = e, { equal_height: r = !0 } = e, { elem_id: o } = e, { elem_classes: a = [] } = e, { visible: s = !0 } = e, { variant: f = "default" } = e;
  return t.$$set = (u) => {
    "equal_height" in u && n(0, r = u.equal_height), "elem_id" in u && n(1, o = u.elem_id), "elem_classes" in u && n(2, a = u.elem_classes), "visible" in u && n(3, s = u.visible), "variant" in u && n(4, f = u.variant), "$$scope" in u && n(5, i = u.$$scope);
  }, [r, o, a, s, f, i, l];
}
let e0 = class extends G_ {
  constructor(e) {
    super(), X_(this, e, K_, Y_, W_, {
      equal_height: 0,
      elem_id: 1,
      elem_classes: 2,
      visible: 3,
      variant: 4
    });
  }
};
const {
  SvelteComponent: t0,
  append: ue,
  attr: be,
  create_slot: n0,
  detach: Ye,
  element: Ce,
  get_all_dirty_from_scope: l0,
  get_slot_changes: i0,
  init: r0,
  insert: Ke,
  listen: o0,
  null_to_empty: Si,
  safe_not_equal: s0,
  set_data: nl,
  set_style: Dt,
  space: Ft,
  text: tn,
  toggle_class: Ti,
  transition_in: a0,
  transition_out: f0,
  update_slot_base: u0
} = window.__gradio__svelte__internal;
function Bi(t) {
  let e, n, l;
  return {
    c() {
      e = Ce("span"), n = tn("#"), l = tn(
        /*label*/
        t[1]
      ), be(e, "class", "accordion-label svelte-154a20t");
    },
    m(i, r) {
      Ke(i, e, r), ue(e, n), ue(e, l);
    },
    p(i, r) {
      r & /*label*/
      2 && nl(
        l,
        /*label*/
        i[1]
      );
    },
    d(i) {
      i && Ye(e);
    }
  };
}
function Hi(t) {
  let e, n, l;
  return {
    c() {
      e = Ce("span"), n = tn(
        /*title*/
        t[2]
      ), be(e, "class", l = Si(
        /*isTitle*/
        t[5] ? "accordion-title" : ""
      ) + " svelte-154a20t");
    },
    m(i, r) {
      Ke(i, e, r), ue(e, n);
    },
    p(i, r) {
      r & /*title*/
      4 && nl(
        n,
        /*title*/
        i[2]
      ), r & /*isTitle*/
      32 && l !== (l = Si(
        /*isTitle*/
        i[5] ? "accordion-title" : ""
      ) + " svelte-154a20t") && be(e, "class", l);
    },
    d(i) {
      i && Ye(e);
    }
  };
}
function Ci(t) {
  let e, n, l;
  return {
    c() {
      e = Ce("span"), n = tn(
        /*badge*/
        t[3]
      ), be(e, "class", l = "accordion-badge accordion-badge-" + /*badge_variant*/
      t[4] + " svelte-154a20t");
    },
    m(i, r) {
      Ke(i, e, r), ue(e, n);
    },
    p(i, r) {
      r & /*badge*/
      8 && nl(
        n,
        /*badge*/
        i[3]
      ), r & /*badge_variant*/
      16 && l !== (l = "accordion-badge accordion-badge-" + /*badge_variant*/
      i[4] + " svelte-154a20t") && be(e, "class", l);
    },
    d(i) {
      i && Ye(e);
    }
  };
}
function c0(t) {
  let e, n, l, i, r, o, a, s, f, u, c, _, h = (
    /*label*/
    t[1] !== "" && Bi(t)
  ), m = (
    /*title*/
    t[2] !== "" && Hi(t)
  ), v = (
    /*badge*/
    t[3] !== "" && Ci(t)
  );
  const g = (
    /*#slots*/
    t[7].default
  ), y = n0(
    g,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      e = Ce("button"), n = Ce("div"), h && h.c(), l = Ft(), m && m.c(), i = Ft(), r = Ce("div"), v && v.c(), o = Ft(), a = Ce("span"), a.textContent = "▼", s = Ft(), f = Ce("div"), y && y.c(), be(n, "class", "svelte-154a20t"), be(a, "class", "icon svelte-154a20t"), Dt(
        a,
        "transform",
        /*open*/
        t[0] ? "rotate(0)" : "rotate(90deg)"
      ), be(r, "class", "svelte-154a20t"), be(e, "class", "label-wrap svelte-154a20t"), Ti(
        e,
        "open",
        /*open*/
        t[0]
      ), Dt(
        f,
        "display",
        /*open*/
        t[0] ? "block" : "none"
      );
    },
    m(p, d) {
      Ke(p, e, d), ue(e, n), h && h.m(n, null), ue(n, l), m && m.m(n, null), ue(e, i), ue(e, r), v && v.m(r, null), ue(r, o), ue(r, a), Ke(p, s, d), Ke(p, f, d), y && y.m(f, null), u = !0, c || (_ = o0(
        e,
        "click",
        /*click_handler*/
        t[8]
      ), c = !0);
    },
    p(p, [d]) {
      /*label*/
      p[1] !== "" ? h ? h.p(p, d) : (h = Bi(p), h.c(), h.m(n, l)) : h && (h.d(1), h = null), /*title*/
      p[2] !== "" ? m ? m.p(p, d) : (m = Hi(p), m.c(), m.m(n, null)) : m && (m.d(1), m = null), /*badge*/
      p[3] !== "" ? v ? v.p(p, d) : (v = Ci(p), v.c(), v.m(r, o)) : v && (v.d(1), v = null), d & /*open*/
      1 && Dt(
        a,
        "transform",
        /*open*/
        p[0] ? "rotate(0)" : "rotate(90deg)"
      ), (!u || d & /*open*/
      1) && Ti(
        e,
        "open",
        /*open*/
        p[0]
      ), y && y.p && (!u || d & /*$$scope*/
      64) && u0(
        y,
        g,
        p,
        /*$$scope*/
        p[6],
        u ? i0(
          g,
          /*$$scope*/
          p[6],
          d,
          null
        ) : l0(
          /*$$scope*/
          p[6]
        ),
        null
      ), d & /*open*/
      1 && Dt(
        f,
        "display",
        /*open*/
        p[0] ? "block" : "none"
      );
    },
    i(p) {
      u || (a0(y, p), u = !0);
    },
    o(p) {
      f0(y, p), u = !1;
    },
    d(p) {
      p && (Ye(e), Ye(s), Ye(f)), h && h.d(), m && m.d(), v && v.d(), y && y.d(p), c = !1, _();
    }
  };
}
function _0(t, e, n) {
  let { $$slots: l = {}, $$scope: i } = e, { label: r = "" } = e, { title: o = "" } = e, { badge: a = "" } = e, { badge_variant: s = "primary" } = e, { open: f = !1 } = e, { isTitle: u = !0 } = e;
  const c = () => n(0, f = !f);
  return t.$$set = (_) => {
    "label" in _ && n(1, r = _.label), "title" in _ && n(2, o = _.title), "badge" in _ && n(3, a = _.badge), "badge_variant" in _ && n(4, s = _.badge_variant), "open" in _ && n(0, f = _.open), "isTitle" in _ && n(5, u = _.isTitle), "$$scope" in _ && n(6, i = _.$$scope);
  }, [
    f,
    r,
    o,
    a,
    s,
    u,
    i,
    l,
    c
  ];
}
class qr extends t0 {
  constructor(e) {
    super(), r0(this, e, _0, c0, s0, {
      label: 1,
      title: 2,
      badge: 3,
      badge_variant: 4,
      open: 0,
      isTitle: 5
    });
  }
}
const {
  SvelteComponent: h0,
  append: Gt,
  attr: gt,
  check_outros: st,
  create_component: W,
  destroy_component: J,
  destroy_each: m0,
  detach: q,
  element: et,
  empty: Vr,
  ensure_array_like: Ai,
  group_outros: at,
  init: d0,
  insert: V,
  mount_component: $,
  safe_not_equal: b0,
  set_data: p0,
  space: Pe,
  text: ll,
  transition_in: C,
  transition_out: N
} = window.__gradio__svelte__internal, { createEventDispatcher: g0 } = window.__gradio__svelte__internal;
function Ni(t, e, n) {
  const l = t.slice();
  return l[5] = e[n], l[7] = n, l;
}
function v0(t) {
  let e, n, l = Ai(
    /*value*/
    t[0]
  ), i = [];
  for (let o = 0; o < l.length; o += 1)
    i[o] = Ri(Ni(t, l, o));
  const r = (o) => N(i[o], 1, 1, () => {
    i[o] = null;
  });
  return {
    c() {
      e = et("div");
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      gt(e, "class", "accordion-container svelte-afvul0");
    },
    m(o, a) {
      V(o, e, a);
      for (let s = 0; s < i.length; s += 1)
        i[s] && i[s].m(e, null);
      n = !0;
    },
    p(o, a) {
      if (a & /*value, dispatch, i18n*/
      7) {
        l = Ai(
          /*value*/
          o[0]
        );
        let s;
        for (s = 0; s < l.length; s += 1) {
          const f = Ni(o, l, s);
          i[s] ? (i[s].p(f, a), C(i[s], 1)) : (i[s] = Ri(f), i[s].c(), C(i[s], 1), i[s].m(e, null));
        }
        for (at(), s = l.length; s < i.length; s += 1)
          r(s);
        st();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < l.length; a += 1)
          C(i[a]);
        n = !0;
      }
    },
    o(o) {
      i = i.filter(Boolean);
      for (let a = 0; a < i.length; a += 1)
        N(i[a]);
      n = !1;
    },
    d(o) {
      o && q(e), m0(i, o);
    }
  };
}
function y0(t) {
  let e, n, l, i;
  return e = new So({
    props: { Icon: qi, label: "Job overview" }
  }), l = new Gi({
    props: {
      unpadded_box: !0,
      size: "small",
      $$slots: { default: [P0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      W(e.$$.fragment), n = Pe(), W(l.$$.fragment);
    },
    m(r, o) {
      $(e, r, o), V(r, n, o), $(l, r, o), i = !0;
    },
    p(r, o) {
      const a = {};
      o & /*$$scope*/
      256 && (a.$$scope = { dirty: o, ctx: r }), l.$set(a);
    },
    i(r) {
      i || (C(e.$$.fragment, r), C(l.$$.fragment, r), i = !0);
    },
    o(r) {
      N(e.$$.fragment, r), N(l.$$.fragment, r), i = !1;
    },
    d(r) {
      r && q(n), J(e, r), J(l, r);
    }
  };
}
function w0(t) {
  let e;
  return {
    c() {
      e = et("hr"), gt(e, "class", "divider svelte-afvul0");
    },
    m(n, l) {
      V(n, e, l);
    },
    d(n) {
      n && q(e);
    }
  };
}
function Pi(t) {
  let e, n, l = (
    /*item*/
    t[5].progress_label + ""
  ), i, r, o, a;
  return {
    c() {
      e = et("div"), n = et("span"), i = ll(l), r = Pe(), o = et("progress"), o.value = a = /*item*/
      t[5].progress, gt(o, "class", "svelte-afvul0"), gt(e, "class", "progress-row svelte-afvul0");
    },
    m(s, f) {
      V(s, e, f), Gt(e, n), Gt(n, i), Gt(e, r), Gt(e, o);
    },
    p(s, f) {
      f & /*value*/
      1 && l !== (l = /*item*/
      s[5].progress_label + "") && p0(i, l), f & /*value*/
      1 && a !== (a = /*item*/
      s[5].progress) && (o.value = a);
    },
    d(s) {
      s && q(e);
    }
  };
}
function Ii(t) {
  let e, n;
  return e = new Xn({
    props: {
      padding: !1,
      allow_overflow: !1,
      elem_classes: ["child-block"],
      $$slots: { default: [E0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      W(e.$$.fragment);
    },
    m(l, i) {
      $(e, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, value, i18n*/
      259 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      n || (C(e.$$.fragment, l), n = !0);
    },
    o(l) {
      N(e.$$.fragment, l), n = !1;
    },
    d(l) {
      J(e, l);
    }
  };
}
function E0(t) {
  let e, n;
  return e = new Cf({
    props: {
      value: (
        /*item*/
        t[5].files
      ),
      label: (
        /*item*/
        t[5].files_label
      ),
      i18n: (
        /*i18n*/
        t[1]
      )
    }
  }), {
    c() {
      W(e.$$.fragment);
    },
    m(l, i) {
      $(e, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*value*/
      1 && (r.value = /*item*/
      l[5].files), i & /*value*/
      1 && (r.label = /*item*/
      l[5].files_label), i & /*i18n*/
      2 && (r.i18n = /*i18n*/
      l[1]), e.$set(r);
    },
    i(l) {
      n || (C(e.$$.fragment, l), n = !0);
    },
    o(l) {
      N(e.$$.fragment, l), n = !1;
    },
    d(l) {
      J(e, l);
    }
  };
}
function Oi(t) {
  let e, n;
  return e = new Xn({
    props: {
      elem_classes: ["child-block"],
      $$slots: { default: [T0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      W(e.$$.fragment);
    },
    m(l, i) {
      $(e, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, value*/
      257 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      n || (C(e.$$.fragment, l), n = !0);
    },
    o(l) {
      N(e.$$.fragment, l), n = !1;
    },
    d(l) {
      J(e, l);
    }
  };
}
function k0(t) {
  let e, n, l;
  return n = new n_({
    props: { value: (
      /*item*/
      t[5].content
    ) }
  }), {
    c() {
      e = et("div"), W(n.$$.fragment), gt(e, "class", "joboverview-json-container");
    },
    m(i, r) {
      V(i, e, r), $(n, e, null), l = !0;
    },
    p(i, r) {
      const o = {};
      r & /*value*/
      1 && (o.value = /*item*/
      i[5].content), n.$set(o);
    },
    i(i) {
      l || (C(n.$$.fragment, i), l = !0);
    },
    o(i) {
      N(n.$$.fragment, i), l = !1;
    },
    d(i) {
      i && q(e), J(n);
    }
  };
}
function S0(t) {
  let e, n;
  return e = new $i({
    props: {
      $$slots: { default: [k0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      W(e.$$.fragment);
    },
    m(l, i) {
      $(e, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, value*/
      257 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      n || (C(e.$$.fragment, l), n = !0);
    },
    o(l) {
      N(e.$$.fragment, l), n = !1;
    },
    d(l) {
      J(e, l);
    }
  };
}
function T0(t) {
  let e, n;
  return e = new qr({
    props: {
      title: (
        /*item*/
        t[5].content_label
      ),
      isTitle: !1,
      $$slots: { default: [S0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      W(e.$$.fragment);
    },
    m(l, i) {
      $(e, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*value*/
      1 && (r.title = /*item*/
      l[5].content_label), i & /*$$scope, value*/
      257 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      n || (C(e.$$.fragment, l), n = !0);
    },
    o(l) {
      N(e.$$.fragment, l), n = !1;
    },
    d(l) {
      J(e, l);
    }
  };
}
function Li(t) {
  let e, n;
  function l() {
    return (
      /*click_handler*/
      t[3](
        /*i*/
        t[7]
      )
    );
  }
  return e = new Ji({
    props: {
      size: "sm",
      variant: "primary",
      $$slots: { default: [B0] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", l), {
    c() {
      W(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, r) {
      t = i;
      const o = {};
      r & /*$$scope*/
      256 && (o.$$scope = { dirty: r, ctx: t }), e.$set(o);
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      N(e.$$.fragment, i), n = !1;
    },
    d(i) {
      J(e, i);
    }
  };
}
function B0(t) {
  let e;
  return {
    c() {
      e = ll("Cancel");
    },
    m(n, l) {
      V(n, e, l);
    },
    d(n) {
      n && q(e);
    }
  };
}
function Mi(t) {
  let e, n;
  function l() {
    return (
      /*click_handler_1*/
      t[4](
        /*i*/
        t[7]
      )
    );
  }
  return e = new Ji({
    props: {
      size: "sm",
      variant: "stop",
      $$slots: { default: [H0] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", l), {
    c() {
      W(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, r) {
      t = i;
      const o = {};
      r & /*$$scope*/
      256 && (o.$$scope = { dirty: r, ctx: t }), e.$set(o);
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      N(e.$$.fragment, i), n = !1;
    },
    d(i) {
      J(e, i);
    }
  };
}
function H0(t) {
  let e;
  return {
    c() {
      e = ll("Delete");
    },
    m(n, l) {
      V(n, e, l);
    },
    d(n) {
      n && q(e);
    }
  };
}
function C0(t) {
  let e, n, l, i = (
    /*item*/
    t[5].cancel_button && Li(t)
  ), r = (
    /*item*/
    t[5].delete_button && Mi(t)
  );
  return {
    c() {
      i && i.c(), e = Pe(), r && r.c(), n = Vr();
    },
    m(o, a) {
      i && i.m(o, a), V(o, e, a), r && r.m(o, a), V(o, n, a), l = !0;
    },
    p(o, a) {
      /*item*/
      o[5].cancel_button ? i ? (i.p(o, a), a & /*value*/
      1 && C(i, 1)) : (i = Li(o), i.c(), C(i, 1), i.m(e.parentNode, e)) : i && (at(), N(i, 1, 1, () => {
        i = null;
      }), st()), /*item*/
      o[5].delete_button ? r ? (r.p(o, a), a & /*value*/
      1 && C(r, 1)) : (r = Mi(o), r.c(), C(r, 1), r.m(n.parentNode, n)) : r && (at(), N(r, 1, 1, () => {
        r = null;
      }), st());
    },
    i(o) {
      l || (C(i), C(r), l = !0);
    },
    o(o) {
      N(i), N(r), l = !1;
    },
    d(o) {
      o && (q(e), q(n)), i && i.d(o), r && r.d(o);
    }
  };
}
function A0(t) {
  let e, n, l, i, r, o = (
    /*item*/
    t[5].progress !== null && Pi(t)
  ), a = (
    /*item*/
    t[5].files !== null && /*item*/
    t[5].files.length > 0 && Ii(t)
  ), s = (
    /*item*/
    t[5].content !== null && Oi(t)
  );
  return i = new e0({
    props: {
      $$slots: { default: [C0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      o && o.c(), e = Pe(), a && a.c(), n = Pe(), s && s.c(), l = Pe(), W(i.$$.fragment);
    },
    m(f, u) {
      o && o.m(f, u), V(f, e, u), a && a.m(f, u), V(f, n, u), s && s.m(f, u), V(f, l, u), $(i, f, u), r = !0;
    },
    p(f, u) {
      /*item*/
      f[5].progress !== null ? o ? o.p(f, u) : (o = Pi(f), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null), /*item*/
      f[5].files !== null && /*item*/
      f[5].files.length > 0 ? a ? (a.p(f, u), u & /*value*/
      1 && C(a, 1)) : (a = Ii(f), a.c(), C(a, 1), a.m(n.parentNode, n)) : a && (at(), N(a, 1, 1, () => {
        a = null;
      }), st()), /*item*/
      f[5].content !== null ? s ? (s.p(f, u), u & /*value*/
      1 && C(s, 1)) : (s = Oi(f), s.c(), C(s, 1), s.m(l.parentNode, l)) : s && (at(), N(s, 1, 1, () => {
        s = null;
      }), st());
      const c = {};
      u & /*$$scope, value*/
      257 && (c.$$scope = { dirty: u, ctx: f }), i.$set(c);
    },
    i(f) {
      r || (C(a), C(s), C(i.$$.fragment, f), r = !0);
    },
    o(f) {
      N(a), N(s), N(i.$$.fragment, f), r = !1;
    },
    d(f) {
      f && (q(e), q(n), q(l)), o && o.d(f), a && a.d(f), s && s.d(f), J(i, f);
    }
  };
}
function N0(t) {
  let e, n, l;
  return e = new $i({
    props: {
      $$slots: { default: [A0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      W(e.$$.fragment), n = Pe();
    },
    m(i, r) {
      $(e, i, r), V(i, n, r), l = !0;
    },
    p(i, r) {
      const o = {};
      r & /*$$scope, value, i18n*/
      259 && (o.$$scope = { dirty: r, ctx: i }), e.$set(o);
    },
    i(i) {
      l || (C(e.$$.fragment, i), l = !0);
    },
    o(i) {
      N(e.$$.fragment, i), l = !1;
    },
    d(i) {
      i && q(n), J(e, i);
    }
  };
}
function Ri(t) {
  let e, n, l, i = (
    /*i*/
    t[7] !== 0 && w0()
  );
  return n = new qr({
    props: {
      label: (
        /*item*/
        t[5].label
      ),
      title: (
        /*item*/
        t[5].title
      ),
      badge: (
        /*item*/
        t[5].badge
      ),
      badge_variant: (
        /*item*/
        t[5].badge_variant
      ),
      $$slots: { default: [N0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      i && i.c(), e = Pe(), W(n.$$.fragment);
    },
    m(r, o) {
      i && i.m(r, o), V(r, e, o), $(n, r, o), l = !0;
    },
    p(r, o) {
      const a = {};
      o & /*value*/
      1 && (a.label = /*item*/
      r[5].label), o & /*value*/
      1 && (a.title = /*item*/
      r[5].title), o & /*value*/
      1 && (a.badge = /*item*/
      r[5].badge), o & /*value*/
      1 && (a.badge_variant = /*item*/
      r[5].badge_variant), o & /*$$scope, value, i18n*/
      259 && (a.$$scope = { dirty: o, ctx: r }), n.$set(a);
    },
    i(r) {
      l || (C(n.$$.fragment, r), l = !0);
    },
    o(r) {
      N(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && q(e), i && i.d(r), J(n, r);
    }
  };
}
function P0(t) {
  let e, n;
  return e = new qi({}), {
    c() {
      W(e.$$.fragment);
    },
    m(l, i) {
      $(e, l, i), n = !0;
    },
    i(l) {
      n || (C(e.$$.fragment, l), n = !0);
    },
    o(l) {
      N(e.$$.fragment, l), n = !1;
    },
    d(l) {
      J(e, l);
    }
  };
}
function I0(t) {
  let e, n, l, i;
  const r = [y0, v0], o = [];
  function a(s, f) {
    return (
      /*value*/
      s[0] == null || /*value*/
      s[0].length === 0 ? 0 : 1
    );
  }
  return e = a(t), n = o[e] = r[e](t), {
    c() {
      n.c(), l = Vr();
    },
    m(s, f) {
      o[e].m(s, f), V(s, l, f), i = !0;
    },
    p(s, [f]) {
      let u = e;
      e = a(s), e === u ? o[e].p(s, f) : (at(), N(o[u], 1, 1, () => {
        o[u] = null;
      }), st(), n = o[e], n ? n.p(s, f) : (n = o[e] = r[e](s), n.c()), C(n, 1), n.m(l.parentNode, l));
    },
    i(s) {
      i || (C(n), i = !0);
    },
    o(s) {
      N(n), i = !1;
    },
    d(s) {
      s && q(l), o[e].d(s);
    }
  };
}
function O0(t, e, n) {
  let { value: l = null } = e, { i18n: i } = e;
  const r = g0(), o = (s) => r("click", { index: s, value: "cancel" }), a = (s) => r("click", { index: s, value: "delete" });
  return t.$$set = (s) => {
    "value" in s && n(0, l = s.value), "i18n" in s && n(1, i = s.i18n);
  }, [l, i, r, o, a];
}
class L0 extends h0 {
  constructor(e) {
    super(), d0(this, e, O0, I0, b0, { value: 0, i18n: 1 });
  }
}
const {
  SvelteComponent: M0,
  assign: R0,
  check_outros: U0,
  create_component: il,
  destroy_component: rl,
  detach: D0,
  get_spread_object: F0,
  get_spread_update: G0,
  group_outros: j0,
  init: q0,
  insert: V0,
  mount_component: ol,
  safe_not_equal: x0,
  space: z0,
  transition_in: ze,
  transition_out: mt
} = window.__gradio__svelte__internal;
function Ui(t) {
  let e, n;
  const l = [
    { autoscroll: (
      /*gradio*/
      t[0].autoscroll
    ) },
    { i18n: (
      /*gradio*/
      t[0].i18n
    ) },
    /*loading_status*/
    t[5]
  ];
  let i = {};
  for (let r = 0; r < l.length; r += 1)
    i = R0(i, l[r]);
  return e = new F_({ props: i }), {
    c() {
      il(e.$$.fragment);
    },
    m(r, o) {
      ol(e, r, o), n = !0;
    },
    p(r, o) {
      const a = o & /*gradio, loading_status*/
      33 ? G0(l, [
        o & /*gradio*/
        1 && { autoscroll: (
          /*gradio*/
          r[0].autoscroll
        ) },
        o & /*gradio*/
        1 && { i18n: (
          /*gradio*/
          r[0].i18n
        ) },
        o & /*loading_status*/
        32 && F0(
          /*loading_status*/
          r[5]
        )
      ]) : {};
      e.$set(a);
    },
    i(r) {
      n || (ze(e.$$.fragment, r), n = !0);
    },
    o(r) {
      mt(e.$$.fragment, r), n = !1;
    },
    d(r) {
      rl(e, r);
    }
  };
}
function X0(t) {
  let e, n, l, i = (
    /*loading_status*/
    t[5] && Ui(t)
  );
  return n = new L0({
    props: {
      value: (
        /*value*/
        t[4]
      ),
      i18n: (
        /*gradio*/
        t[0].i18n
      )
    }
  }), n.$on(
    "click",
    /*click_handler*/
    t[8]
  ), {
    c() {
      i && i.c(), e = z0(), il(n.$$.fragment);
    },
    m(r, o) {
      i && i.m(r, o), V0(r, e, o), ol(n, r, o), l = !0;
    },
    p(r, o) {
      /*loading_status*/
      r[5] ? i ? (i.p(r, o), o & /*loading_status*/
      32 && ze(i, 1)) : (i = Ui(r), i.c(), ze(i, 1), i.m(e.parentNode, e)) : i && (j0(), mt(i, 1, 1, () => {
        i = null;
      }), U0());
      const a = {};
      o & /*value*/
      16 && (a.value = /*value*/
      r[4]), o & /*gradio*/
      1 && (a.i18n = /*gradio*/
      r[0].i18n), n.$set(a);
    },
    i(r) {
      l || (ze(i), ze(n.$$.fragment, r), l = !0);
    },
    o(r) {
      mt(i), mt(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && D0(e), i && i.d(r), rl(n, r);
    }
  };
}
function Z0(t) {
  let e, n;
  return e = new Xn({
    props: {
      visible: (
        /*visible*/
        t[3]
      ),
      elem_id: (
        /*elem_id*/
        t[1]
      ),
      elem_classes: (
        /*elem_classes*/
        t[2]
      ),
      $$slots: { default: [X0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      il(e.$$.fragment);
    },
    m(l, i) {
      ol(e, l, i), n = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*visible*/
      8 && (r.visible = /*visible*/
      l[3]), i & /*elem_id*/
      2 && (r.elem_id = /*elem_id*/
      l[1]), i & /*elem_classes*/
      4 && (r.elem_classes = /*elem_classes*/
      l[2]), i & /*$$scope, value, gradio, loading_status*/
      561 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      n || (ze(e.$$.fragment, l), n = !0);
    },
    o(l) {
      mt(e.$$.fragment, l), n = !1;
    },
    d(l) {
      rl(e, l);
    }
  };
}
function W0(t, e, n) {
  let { gradio: l } = e, { elem_id: i } = e, { elem_classes: r } = e, { visible: o = !0 } = e, { value: a = null } = e, { loading_status: s = void 0 } = e, { root: f } = e, { proxy_url: u } = e;
  const c = (_) => l.dispatch("click", _.detail);
  return t.$$set = (_) => {
    "gradio" in _ && n(0, l = _.gradio), "elem_id" in _ && n(1, i = _.elem_id), "elem_classes" in _ && n(2, r = _.elem_classes), "visible" in _ && n(3, o = _.visible), "value" in _ && n(4, a = _.value), "loading_status" in _ && n(5, s = _.loading_status), "root" in _ && n(6, f = _.root), "proxy_url" in _ && n(7, u = _.proxy_url);
  }, t.$$.update = () => {
    t.$$.dirty & /*value*/
    16 && console.debug(a), t.$$.dirty & /*root, proxy_url*/
    192 && console.debug(f, u);
  }, [
    l,
    i,
    r,
    o,
    a,
    s,
    f,
    u,
    c
  ];
}
class th extends M0 {
  constructor(e) {
    super(), q0(this, e, W0, Z0, x0, {
      gradio: 0,
      elem_id: 1,
      elem_classes: 2,
      visible: 3,
      value: 4,
      loading_status: 5,
      root: 6,
      proxy_url: 7
    });
  }
}
export {
  L0 as BaseJobOverview,
  th as default
};
