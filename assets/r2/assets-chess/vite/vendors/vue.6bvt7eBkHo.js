import { $ as e, $n as t, $t as n, A as r, An as i, At as a, B as o, Bn as s, Bt as c, C as l, Cn as u, Ct as d, D as f, Dn as p, Dt as m, E as ee, En as te, Et as ne, F as re, Fn as h, Ft as ie, G as ae, Gn as oe, Gt as se, H as ce, Hn as g, Ht as _, I as le, In as v, It as ue, J as de, Jn as fe, Jt as pe, K as me, Kn as he, Kt as ge, L as _e, Ln as ve, Lt as ye, M as be, Mn as xe, Mt as Se, N as Ce, Nn as we, Nt as Te, O as Ee, On as De, Ot as Oe, P as ke, Pn as y, Pt as Ae, Q as je, Qn as b, Qt as Me, R as Ne, Rn as x, Rt as Pe, S as Fe, Sn as Ie, St as Le, T as Re, Tn as ze, Tt as Be, U as Ve, Un as He, Ut as Ue, V as We, Vn as S, Vt as Ge, W as Ke, Wn as qe, Wt as Je, X as Ye, Xn as Xe, Xt as Ze, Y as Qe, Yn as C, Yt as $e, Z as et, Zn as w, Zt as tt, _ as nt, _n as rt, _t as it, a as at, an as ot, ar as st, at as ct, b as lt, bn as ut, bt as dt, c as ft, cn as pt, ct as mt, d as ht, dn as gt, dt as _t, en as vt, er as yt, et as bt, f as xt, fn as St, ft as Ct, g as wt, gn as Tt, gt as Et, h as Dt, hn as Ot, ht as kt, i as At, in as jt, ir as Mt, it as Nt, j as Pt, jn as Ft, jt as It, k as T, kn as Lt, kt as Rt, l as zt, ln as Bt, lt as Vt, m as E, mn as Ht, mt as Ut, n as Wt, nn as Gt, nr as Kt, nt as qt, o as Jt, on as Yt, or as Xt, ot as Zt, p as Qt, pn as $t, pt as en, q as tn, qn as D, qt as nn, r as rn, rn as an, rr as on, rt as sn, s as cn, sn as ln, st as un, t as dn, tn as fn, tr as pn, tt as mn, u as hn, un as gn, ut as _n, v as vn, vn as yn, vt as bn, w as xn, wn as Sn, wt as Cn, x as wn, xn as Tn, xt as En, y as Dn, yn as On, yt as kn, z as O, zn as An, zt as jn } from "./runtime-core.esm-bundler.bx_7HJ6v0J.js";
//#region node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var k = void 0, Mn = typeof window < "u" && window.trustedTypes;
if (Mn) try {
	k = /* @__PURE__ */ Mn.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Nn = k ? (e) => k.createHTML(e) : (e) => e, Pn = "http://www.w3.org/2000/svg", Fn = "http://www.w3.org/1998/Math/MathML", A = typeof document < "u" ? document : null, In = A && /* @__PURE__ */ A.createElement("template"), Ln = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? A.createElementNS(Pn, e) : t === "mathml" ? A.createElementNS(Fn, e) : n ? A.createElement(e, { is: n }) : A.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => A.createTextNode(e),
	createComment: (e) => A.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => A.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			In.innerHTML = Nn(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = In.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, j = "transition", M = "animation", N = /* @__PURE__ */ Symbol("_vtc"), Rn = {
	name: String,
	type: String,
	css: {
		type: Boolean,
		default: !0
	},
	duration: [
		String,
		Number,
		Object
	],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String
}, zn = /* @__PURE__ */ v({}, Wt, Rn), Bn = /* @__PURE__ */ ((e) => (e.displayName = "Transition", e.props = zn, e))((e, { slots: t }) => ce(dn, Hn(e), t)), P = (e, t = []) => {
	S(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, Vn = (e) => e ? S(e) ? e.some((e) => e.length > 1) : e.length > 1 : !1;
function Hn(e) {
	let t = {};
	for (let n in e) n in Rn || (t[n] = e[n]);
	if (e.css === !1) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: s = `${n}-enter-to`, appearFromClass: c = a, appearActiveClass: l = o, appearToClass: u = s, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: f = `${n}-leave-active`, leaveToClass: p = `${n}-leave-to` } = e, m = Un(i), ee = m && m[0], te = m && m[1], { onBeforeEnter: ne, onEnter: re, onEnterCancelled: h, onLeave: ie, onLeaveCancelled: ae, onBeforeAppear: oe = ne, onAppear: se = re, onAppearCancelled: ce = h } = t, g = (e, t, n, r) => {
		e._enterResolve = void 0, e._enterCancelled = r, I(e, t ? u : s), I(e, t ? l : o), n && n();
	}, _ = (e, t) => {
		e._leaveResolve = void 0, e._isLeaving = !1, I(e, d), I(e, p), I(e, f), t && t();
	}, le = (e) => (t, n) => {
		let i = e ? se : re, o = () => {
			t._enterResolve === o && g(t, e, n);
		};
		t._enterResolve = o, P(i, [t, o]), Gn(() => {
			I(t, e ? c : a), t._enterResolve === o && (F(t, e ? u : s), Vn(i) || qn(t, r, ee, o));
		});
	};
	return v(t, {
		onBeforeEnter(e) {
			P(ne, [e]), F(e, a), F(e, o);
		},
		onBeforeAppear(e) {
			P(oe, [e]), F(e, c), F(e, l);
		},
		onEnter: le(!1),
		onAppear: le(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => {
				e._leaveResolve === n && _(e, t);
			};
			e._leaveResolve = n, F(e, d), e._enterCancelled ? (F(e, f), Zn(e)) : (Zn(e), F(e, f)), Gn(() => {
				e._leaveResolve === n && (I(e, d), F(e, p), Vn(ie) || qn(e, r, te, n));
			}), P(ie, [e, n]);
		},
		onEnterCancelled(e) {
			g(e, !1, void 0, !0), P(h, [e]);
		},
		onAppearCancelled(e) {
			g(e, !0, void 0, !0), P(ce, [e]);
		},
		onLeaveCancelled(e) {
			_(e), P(ae, [e]);
		}
	});
}
function Un(e) {
	if (e == null) return null;
	if (qe(e)) return [Wn(e.enter), Wn(e.leave)];
	{
		let t = Wn(e);
		return [t, t];
	}
}
function Wn(e) {
	return Xt(e);
}
function F(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[N] || (e[N] = /* @__PURE__ */ new Set())).add(t);
}
function I(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let n = e[N];
	n && (n.delete(t), n.size || (e[N] = void 0));
}
function Gn(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var Kn = 0;
function qn(e, t, n, r) {
	let i = e._endId = ++Kn, a = () => {
		i === e._endId && r();
	};
	if (n != null) return setTimeout(a, n);
	let { type: o, timeout: s, propCount: c } = Jn(e, t);
	if (!o) return r();
	let l = o + "end", u = 0, d = () => {
		e.removeEventListener(l, f), a();
	}, f = (t) => {
		t.target === e && ++u >= c && d();
	};
	setTimeout(() => {
		u < c && d();
	}, s + 1), e.addEventListener(l, f);
}
function Jn(e, t) {
	let n = window.getComputedStyle(e), r = (e) => (n[e] || "").split(", "), i = r(`${j}Delay`), a = r(`${j}Duration`), o = Yn(i, a), s = r(`${M}Delay`), c = r(`${M}Duration`), l = Yn(s, c), u = null, d = 0, f = 0;
	t === j ? o > 0 && (u = j, d = o, f = a.length) : t === M ? l > 0 && (u = M, d = l, f = c.length) : (d = Math.max(o, l), u = d > 0 ? o > l ? j : M : null, f = u ? u === j ? a.length : c.length : 0);
	let p = u === j && /\b(?:transform|all)(?:,|$)/.test(r(`${j}Property`).toString());
	return {
		type: u,
		timeout: d,
		propCount: f,
		hasTransform: p
	};
}
function Yn(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, n) => Xn(t) + Xn(e[n])));
}
function Xn(e) {
	return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Zn(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Qn(e, t, n) {
	let r = e[N];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var L = /* @__PURE__ */ Symbol("_vod"), $n = /* @__PURE__ */ Symbol("_vsh"), er = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[L] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : R(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), R(e, !0), r.enter(e)) : r.leave(e, () => {
			R(e, !1);
		}) : R(e, t));
	},
	beforeUnmount(e, { value: t }) {
		R(e, t);
	}
};
function R(e, t) {
	e.style.display = t ? e[L] : "none", e[$n] = !t;
}
function tr() {
	er.getSSRProps = ({ value: e }) => {
		if (!e) return { style: { display: "none" } };
	};
}
var nr = /* @__PURE__ */ Symbol("");
function rr(e) {
	let t = O();
	if (!t) return;
	let n = (n = e(t.proxy)) => {
		Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e) => B(e, n));
	}, r = {
		uid: String(t.uid),
		update: n
	};
	Tt(() => r.update = void 0), t.ut = (e, t) => {
		e && (e[z] = [t, r], ar(e), ir(e)), n();
	};
	let i = () => {
		let r = e(t.proxy);
		t.ce ? B(t.ce, r) : sr(t.subTree, r), n(r);
	};
	un(() => {
		dt(i);
	}), _n(() => {
		se(i, we, { flush: "post" });
		let e = new MutationObserver(i);
		e.observe(t.subTree.el.parentNode, { childList: !0 }), Ut(() => e.disconnect());
	});
}
var z = /* @__PURE__ */ Symbol("");
function ir(e, t) {
	let [n, r] = e[z], i;
	if (r.update) for (let a = e; a && a !== n; a = a.nextSibling) a.nodeType === 1 && (!t || (t === !0 || t.has(a)) && (a.getAttribute("data-v-owner") || r.uid) === r.uid) && (a.setAttribute("data-v-owner", r.uid), i = r.update);
	return i;
}
function ar(e) {
	let t = e.parentNode;
	if (t) {
		let n = t[z];
		n || (n = t[z] = /* @__PURE__ */ new Set(), new MutationObserver(or).observe(t, { childList: !0 })), n.add(e);
	}
}
function or(e, t) {
	let n = e[0].target, r = n[z], i = /* @__PURE__ */ new Set();
	for (let { addedNodes: t } of e) t.forEach((e) => i.add(e));
	let a = /* @__PURE__ */ new Set();
	r.forEach((e) => {
		e.parentNode === n ? i.size && a.add(ir(e, i)) : (r.delete(e), ar(e), a.add(ir(e, !0)));
	}), a.forEach((e) => e && e()), r.size || (t.disconnect(), n[z] = void 0);
}
function sr(e, t) {
	if (e.shapeFlag & 128) {
		let n = e.suspense;
		e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
			sr(n.activeBranch, t);
		});
	}
	for (; e.component;) e = e.component.subTree;
	if (e.shapeFlag & 1 && e.el) B(e.el, t);
	else if (e.type === cn) e.children.forEach((e) => sr(e, t));
	else if (e.type === zt) {
		let { el: n, anchor: r } = e;
		for (; n && (B(n, t), n !== r);) n = n.nextSibling;
	}
}
function B(e, t) {
	if (e.nodeType === 1) {
		let n = e.style, r = "";
		for (let e in t) {
			let i = pn(t[e]);
			n.setProperty(`--${e}`, i), r += `--${e}: ${i};`;
		}
		n[nr] = r;
	}
}
var cr = /(?:^|;)\s*display\s*:/;
function lr(e, t, n) {
	let r = e.style, i = C(n), a = !1;
	if (n && !i) {
		if (t) if (C(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? H(r, t, "");
		}
		else for (let e in t) n[e] ?? H(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? H(r, i, "") : pr(e, i, !C(t) && t ? t[i] : void 0, o) || H(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[nr];
			e && (n += ";" + e), r.cssText = n, a = cr.test(n);
		}
	} else t && e.removeAttribute("style");
	L in e && ((!i || t !== n) && (e[L] = a ? r.display : ""), e[$n] && (r.display = "none"));
}
var V = /\s*!important$/;
function H(e, t, n) {
	if (S(n)) n.forEach((n) => H(e, t, n));
	else if (n ??= "", t.startsWith("--")) V.test(n) ? e.setProperty(t, n.replace(V, ""), "important") : e.setProperty(t, n);
	else {
		let r = fr(e, t);
		V.test(n) ? e.setProperty(x(r), n.replace(V, ""), "important") : e[r] = n;
	}
}
var ur = [
	"Webkit",
	"Moz",
	"ms"
], dr = {};
function fr(e, t) {
	let n = dr[t];
	if (n) return n;
	let r = y(t);
	if (r !== "filter" && r in e) return dr[t] = r;
	r = h(r);
	for (let n = 0; n < ur.length; n++) {
		let i = ur[n] + r;
		if (i in e) return dr[t] = i;
	}
	return t;
}
function pr(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && C(r) && n === r;
}
var mr = "http://www.w3.org/1999/xlink";
function hr(e, t, n, r, i, a = fe(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(mr, t.slice(6, t.length)) : e.setAttributeNS(mr, t, n) : n == null || a && !An(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : Xe(n) ? String(n) : n);
}
function gr(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Nn(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		(r !== i || !("_value" in e)) && (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = An(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function U(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function _r(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var vr = /* @__PURE__ */ Symbol("_vei");
function yr(e, t, n, r, i = null) {
	let a = e[vr] || (e[vr] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Sr(t);
		r ? U(e, n, a[t] = Er(r, i), s) : o && (_r(e, n, o, s), a[t] = void 0);
	}
}
var br = /(Once|Passive|Capture)$/, xr = /^on:?(?:Once|Passive|Capture)$/;
function Sr(e) {
	let t, n;
	for (; (n = e.match(br)) && !xr.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : x(e.slice(2)), t];
}
var Cr = 0, wr = /* @__PURE__ */ Promise.resolve(), Tr = () => Cr ||= (wr.then(() => Cr = 0), Date.now());
function Er(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (S(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && E(e, t, 5, a);
			}
		} else E(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Tr(), n;
}
var Dr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Or = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? Qn(e, r, o) : t === "style" ? lr(e, n, r) : oe(t) ? He(t) || yr(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : kr(e, t, r, o)) ? (gr(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && hr(e, t, r, o, a, t !== "value")) : e._isVueCE && (Ar(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !C(r))) ? gr(e, y(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), hr(e, t, r, o));
};
function kr(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Dr(t) && g(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Dr(t) && C(n) ? !1 : t in e;
}
function Ar(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = y(t);
	return Array.isArray(n) ? n.some((e) => y(e) === r) : Object.keys(n).some((e) => y(e) === r);
}
var jr = {};
// @__NO_SIDE_EFFECTS__
function Mr(e, t, n) {
	let r = Pt(e, t);
	he(r) && (r = v({}, r, t));
	class i extends Fr {
		constructor(e) {
			super(r, e, n);
		}
	}
	return i.def = r, i;
}
var Nr = /* @__NO_SIDE_EFFECTS__ */ ((e, t) => /* @__PURE__ */ Mr(e, t, Si)), Pr = typeof HTMLElement < "u" ? HTMLElement : class {}, Fr = class e extends Pr {
	constructor(e, t = {}, n = xi) {
		super(), this._def = e, this._props = t, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && n !== xi ? this._root = this.shadowRoot : e.shadowRoot === !1 ? this._root = this : (this.attachShadow(v({}, e.shadowRootOptions, { mode: "open" })), this._root = this.shadowRoot);
	}
	connectedCallback() {
		if (!this.isConnected) return;
		!this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
		let t = this;
		for (; t &&= t.assignedSlot || t.parentNode || t.host;) if (t instanceof e) {
			this._parent = t;
			break;
		}
		this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
			if (this._pendingResolve = void 0, this.isConnected) return this._resolveDef();
		}) : this._resolveDef());
	}
	_setParent(e = this._parent) {
		e && (this._instance.parent = e._instance, this._inheritParentContext(e));
	}
	_inheritParentContext(e = this._parent) {
		e && this._app && Object.setPrototypeOf(this._app._context.provides, e._instance.provides);
	}
	disconnectedCallback() {
		this._connected = !1, sn(() => {
			this._connected || (this._ob &&= (this._ob.disconnect(), null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets &&= (this._teleportTargets.clear(), void 0));
		});
	}
	_processMutations(e) {
		for (let t of e) this._setAttr(t.attributeName);
	}
	_resolveDef() {
		if (this._pendingResolve) return this._pendingResolve;
		for (let e = 0; e < this.attributes.length; e++) this._setAttr(this.attributes[e].name);
		this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
		let e = (e, t = !1) => {
			this._resolved = !0, this._pendingResolve = void 0;
			let { props: n, styles: r } = e, i;
			if (n && !S(n)) for (let e in n) {
				let t = n[e];
				(t === Number || t && t.type === Number) && (e in this._props && (this._props[e] = Xt(this._props[e])), (i ||= /* @__PURE__ */ Object.create(null))[y(e)] = !0);
			}
			this._numberProps = i, this._resolveProps(e), this.shadowRoot && this._applyStyles(r), this._connected && this._mount(e);
		}, t = this._def.__asyncLoader;
		if (t) return this._pendingResolve = t().then((t) => {
			t.configureApp = this._def.configureApp, e(this._def = t, !0);
		}), this._pendingResolve;
		e(this._def);
	}
	_mount(e) {
		__VUE_PROD_DEVTOOLS__ && !e.name && (e.name = "VueElement"), this._app = this._createApp(e), this._inheritParentContext(), e.configureApp && e.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
		let t = this._instance && this._instance.exposed;
		if (t) for (let e in t) ve(this, e) || Object.defineProperty(this, e, { get: () => Ft(t[e]) });
	}
	_resolveProps(e) {
		let { props: t } = e, n = S(t) ? t : Object.keys(t || {});
		for (let e of Object.keys(this)) e[0] !== "_" && n.includes(e) && this._setProp(e, this[e]);
		for (let e of n.map(y)) Object.defineProperty(this, e, {
			get() {
				return this._getProp(e);
			},
			set(t) {
				this._setProp(e, t, !0, !this._patching);
			}
		});
	}
	_setAttr(e) {
		if (e.startsWith("data-v-")) return;
		let t = this.hasAttribute(e), n = t ? this.getAttribute(e) : jr, r = y(e);
		t && this._numberProps && this._numberProps[r] && (n = Xt(n)), this._setProp(r, n, !1, !0);
	}
	_getProp(e) {
		return this._props[e];
	}
	_setProp(e, t, n = !0, r = !1) {
		if (t !== this._props[e] && (this._dirty = !0, t === jr ? delete this._props[e] : (this._props[e] = t, e === "key" && this._app && (this._app._ceVNode.key = t)), r && this._instance && this._update(), n)) {
			let n = this._ob;
			n && (this._processMutations(n.takeRecords()), n.disconnect()), t === !0 ? this.setAttribute(x(e), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(x(e), t + "") : t || this.removeAttribute(x(e)), n && n.observe(this, { attributes: !0 });
		}
	}
	_update() {
		let e = this._createVNode();
		this._app && (e.appContext = this._app._context), yi(e, this._root);
	}
	_createVNode() {
		let e = {};
		this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
		let t = T(this._def, v(e, this._props));
		return this._instance || (t.ce = (e) => {
			this._instance = e, e.ce = this, e.isCE = !0;
			let t = (e, t) => {
				this.dispatchEvent(new CustomEvent(e, he(t[0]) ? v({ detail: t }, t[0]) : { detail: t }));
			};
			e.emit = (e, ...n) => {
				t(e, n), x(e) !== e && t(x(e), n);
			}, this._setParent();
		}), t;
	}
	_applyStyles(e, t, n) {
		if (!e) return;
		if (t) {
			if (t === this._def || this._styleChildren.has(t)) return;
			this._styleChildren.add(t);
		}
		let r = this._nonce, i = this.shadowRoot, a = n ? this._getStyleAnchor(n) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(i), o = null;
		for (let s = e.length - 1; s >= 0; s--) {
			let c = document.createElement("style");
			r && c.setAttribute("nonce", r), c.textContent = e[s], i.insertBefore(c, o || a), o = c, s === 0 && (n || this._styleAnchors.set(this._def, c), t && this._styleAnchors.set(t, c));
		}
	}
	_getStyleAnchor(e) {
		if (!e) return null;
		let t = this._styleAnchors.get(e);
		return t && t.parentNode === this.shadowRoot ? t : (t && this._styleAnchors.delete(e), null);
	}
	_getRootStyleInsertionAnchor(e) {
		for (let t = 0; t < e.childNodes.length; t++) {
			let n = e.childNodes[t];
			if (!(n instanceof HTMLStyleElement)) return n;
		}
		return null;
	}
	_parseSlots() {
		let e = this._slots = {}, t;
		for (; t = this.firstChild;) {
			let n = t.nodeType === 1 && t.getAttribute("slot") || "default";
			(e[n] || (e[n] = [])).push(t), this.removeChild(t);
		}
	}
	_renderSlots() {
		let e = this._getSlots(), t = this._instance.type.__scopeId;
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = r.getAttribute("name") || "default", a = this._slots[i], o = r.parentNode;
			if (a) for (let e of a) {
				if (t && e.nodeType === 1) {
					let n = t + "-s", r = document.createTreeWalker(e, 1);
					e.setAttribute(n, "");
					let i;
					for (; i = r.nextNode();) i.setAttribute(n, "");
				}
				o.insertBefore(e, r);
			}
			else for (; r.firstChild;) o.insertBefore(r.firstChild, r);
			o.removeChild(r);
		}
	}
	_getSlots() {
		let e = [this];
		this._teleportTargets && e.push(...this._teleportTargets);
		let t = /* @__PURE__ */ new Set();
		for (let n of e) {
			let e = n.querySelectorAll("slot");
			for (let n = 0; n < e.length; n++) t.add(e[n]);
		}
		return Array.from(t);
	}
	_injectChildStyle(e, t) {
		this._applyStyles(e.styles, e, t);
	}
	_beginPatch() {
		this._patching = !0, this._dirty = !1;
	}
	_endPatch() {
		this._patching = !1, this._dirty && this._instance && this._update();
	}
	_hasShadowRoot() {
		return this._def.shadowRoot !== !1;
	}
	_removeChildStyle(e) {}
};
function Ir(e) {
	let t = O();
	return t && t.ce || null;
}
function Lr() {
	let e = Ir();
	return e && e.shadowRoot;
}
function Rr(e = "$style") {
	{
		let t = O();
		if (!t) return xe;
		let n = t.type.__cssModules;
		return n && n[e] || xe;
	}
}
var zr = /* @__PURE__ */ new WeakMap(), Br = /* @__PURE__ */ new WeakMap(), W = /* @__PURE__ */ Symbol("_moveCb"), Vr = /* @__PURE__ */ Symbol("_enterCb"), Hr = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ ((e) => (delete e.props.mode, e))({
	name: "TransitionGroup",
	props: /* @__PURE__ */ v({}, zn, {
		tag: String,
		moveClass: String
	}),
	setup(e, { slots: t }) {
		let n = O(), r = _(), i, a, s, c, l = () => (c === void 0 && (c = i.length > 0 && Zr(i[0].el, n.vnode.el, Gr(e))), c);
		return kt(() => {
			if (Hr.delete(n), !l()) {
				i = [], s = void 0;
				return;
			}
			let t = Gr(e);
			i.forEach(Wr);
			let r = s && Xr(s, n.vnode.el);
			s = void 0, i.forEach((e) => Kr(e, r));
			let a = i.filter(qr);
			Zn(n.vnode.el), a.forEach((e) => {
				let n = e.el, r = n.style;
				F(n, t), r.transform = r.webkitTransform = r.transitionDuration = "";
				let i = n[W] = (e) => {
					e && e.target !== n || (!e || e.propertyName.endsWith("transform")) && (n.removeEventListener("transitionend", i), n[W] = null, I(n, t));
				};
				n.addEventListener("transitionend", i);
			}), i = [];
		}), () => {
			let u = te(e), d = Hn(u), f = u.tag || cn;
			if (i = [], c = void 0, a) for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t.el && t.el instanceof Element && !t.el[$n] && (i.push(t), It(t, Oe(t, d, r, n)), zr.set(t, G(t.el)));
			}
			a = t.default ? o(t.default()) : [];
			for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t.key != null && It(t, Oe(t, d, r, n));
			}
			return i.length && (s = Jr(n), Hr.set(n, l)), T(f, null, a);
		};
	}
});
function Wr(e) {
	let t = e.el;
	t[W] && t[W](), t[Vr] && t[Vr]();
}
function Gr(e) {
	return e.moveClass || `${e.name || "v"}-move`;
}
function Kr(e, t) {
	Br.set(e, G(e.el, t));
}
function qr(e) {
	let t = zr.get(e), n = Br.get(e), r = t.left - n.left, i = t.top - n.top;
	if (r || i) {
		let t = e.el, n = t.style, a = t.getBoundingClientRect(), o = 1, s = 1;
		return t.offsetWidth && (o = a.width / t.offsetWidth), t.offsetHeight && (s = a.height / t.offsetHeight), (!Number.isFinite(o) || o === 0) && (o = 1), (!Number.isFinite(s) || s === 0) && (s = 1), Math.abs(o - 1) < .01 && (o = 1), Math.abs(s - 1) < .01 && (s = 1), n.transform = n.webkitTransform = `translate(${r / o}px,${i / s}px)`, n.transitionDuration = "0s", e;
	}
}
function G(e, t) {
	let n = e.getBoundingClientRect();
	return {
		left: n.left - (t ? t.left : 0),
		top: n.top - (t ? t.top : 0)
	};
}
function Jr(e) {
	let t;
	for (let n = e.parent; n; n = n.parent) {
		let r = Hr.get(n);
		if (r) {
			let i = Yr(n.vnode.el, e.vnode.el);
			i && (t ||= []).push(v(G(i), {
				item: i,
				willMove: r
			}));
		}
	}
	return t;
}
function Yr(e, t) {
	let n = e.nodeType === 1 ? e : e.parentNode;
	for (; t && t.parentNode !== n;) t = t.parentNode;
	if (t && t.nodeType === 1) return t;
}
function Xr(e, t) {
	let n = e.find((e) => e.willMove() && e.item.contains(t));
	return n && G(n.item, n);
}
function Zr(e, t, n) {
	let r = e.cloneNode(), i = e[N];
	i && i.forEach((e) => {
		e.split(/\s+/).forEach((e) => e && r.classList.remove(e));
	}), n.split(/\s+/).forEach((e) => e && r.classList.add(e)), r.style.display = "none";
	let a = t.nodeType === 1 ? t : t.parentNode;
	a.appendChild(r);
	let { hasTransform: o } = Jn(r);
	return a.removeChild(r), o;
}
var K = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return S(t) ? (e) => s(t, e) : t;
};
function Qr(e) {
	e.target.composing = !0;
}
function $r(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var q = /* @__PURE__ */ Symbol("_assign"), J = /* @__PURE__ */ Symbol("_initialValue");
function Y(e, n, r) {
	return n && (e = e.trim()), r && (e = t(e)), e;
}
var X = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[J] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[J] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[q] = K(i);
		let a = r || i.props && i.props.type === "number";
		U(e, t ? "change" : "input", (t) => {
			t.target.composing || e[q](Y(e.value, n, a));
		}), (n || a) && U(e, "change", () => {
			e.value = Y(e.value, n, a);
		}), t || (U(e, "compositionstart", Qr), U(e, "compositionend", $r), U(e, "change", $r));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[J];
		delete e[J], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[q](Y(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: n, oldValue: r, modifiers: { lazy: i, trim: a, number: o } }, s) {
		if (e[q] = K(s), e.composing) return;
		let c = (o || e.type === "number") && !/^0\d/.test(e.value) ? t(e.value) : e.value, l = n ?? "";
		if (c === l) return;
		let u = e.getRootNode();
		(u instanceof Document || u instanceof ShadowRoot) && u.activeElement === e && e.type !== "range" && (i && n === r || a && e.value.trim() === l) || (e.value = l);
	}
}, ei = {
	deep: !0,
	created(e, t, n) {
		e[q] = K(n), U(e, "change", () => {
			let t = e._modelValue, n = Z(e), r = e.checked, i = e[q];
			if (S(t)) {
				let e = b(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (D(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(oi(e, r));
		});
	},
	mounted: ti,
	beforeUpdate(e, t, n) {
		e[q] = K(n), ti(e, t, n);
	}
};
function ti(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (S(t)) i = b(t, r.props.value) > -1;
	else if (D(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = w(t, oi(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var ni = {
	created(e, { value: t }, n) {
		e.checked = w(t, n.props.value), e[q] = K(n), U(e, "change", () => {
			e[q](Z(e));
		});
	},
	beforeUpdate(e, { value: t, oldValue: n }, r) {
		e[q] = K(r), t !== n && (e.checked = w(t, r.props.value));
	}
}, ri = {
	deep: !0,
	created(e, { value: n, modifiers: { number: r } }, i) {
		e._modelValue = n, U(e, "change", () => {
			let n = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => r ? t(Z(e)) : Z(e)), i = e.multiple, a = i ? D(e._modelValue) ? new Set(n) : n : n[0], o = e._pendingValue = [i, i ? S(a) ? n.slice() : n : a];
			try {
				e[q](a);
			} finally {
				sn(() => {
					e._pendingValue === o && (e._pendingValue = void 0);
				});
			}
		}), e[q] = K(i);
	},
	mounted(e, { value: t, modifiers: { number: n } }) {
		ai(e, t, n);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[q] = K(n);
	},
	updated(e, { value: t, modifiers: { number: n } }) {
		let r = e._pendingValue;
		e._pendingValue = void 0, (!r || r[0] !== e.multiple || !ii(t, r[1], r[0])) && ai(e, t, n);
	}
};
function ii(e, t, n) {
	if (!n || S(e)) return w(e, t);
	if (D(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function ai(e, n, r = !1) {
	let i = e.multiple, a = S(n);
	if (!(i && !a && !D(n))) {
		for (let o = 0, s = e.options.length; o < s; o++) {
			let s = e.options[o], c = Z(s);
			if (i) if (a) {
				let e = typeof c;
				e === "string" || e === "number" ? s.selected = n.some((e) => String(e) === String(c)) : s.selected = b(n, c) > -1;
			} else s.selected = n.has(c) || r && typeof c == "string" && n.has(t(c));
			else if (w(Z(s), n)) {
				e.selectedIndex !== o && (e.selectedIndex = o);
				return;
			}
		}
		!i && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Z(e) {
	return "_value" in e ? e._value : e.value;
}
function oi(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var si = {
	created(e, t, n) {
		Q(e, t, n, null, "created");
	},
	mounted(e, t, n) {
		Q(e, t, n, null, "mounted");
	},
	beforeUpdate(e, t, n, r) {
		Q(e, t, n, r, "beforeUpdate");
	},
	updated(e, t, n, r) {
		Q(e, t, n, r, "updated");
	}
};
function ci(e, t) {
	switch (e) {
		case "SELECT": return ri;
		case "TEXTAREA": return X;
		default: switch (t) {
			case "checkbox": return ei;
			case "radio": return ni;
			default: return X;
		}
	}
}
function Q(e, t, n, r, i) {
	let a = ci(e.tagName, n.props && n.props.type)[i];
	a && a(e, t, n, r);
}
function li() {
	X.getSSRProps = ({ value: e }) => ({ value: e }), ni.getSSRProps = ({ value: e }, t) => {
		if (t.props && w(t.props.value, e)) return { checked: !0 };
	}, ei.getSSRProps = ({ value: e }, t) => {
		if (S(e)) {
			if (t.props && b(e, t.props.value) > -1) return { checked: !0 };
		} else if (D(e)) {
			if (t.props && e.has(t.props.value)) return { checked: !0 };
		} else if (e) return { checked: !0 };
	}, si.getSSRProps = (e, t) => {
		if (typeof t.type != "string") return;
		let n = ci(t.type.toUpperCase(), t.props && t.props.type);
		if (n.getSSRProps) return n.getSSRProps(e, t);
	};
}
var ui = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], di = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, t) => ui.some((n) => e[`${n}Key`] && !t.includes(n))
}, fi = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = di[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, pi = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, mi = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = x(n.key);
		if (t.some((e) => e === r || pi[e] === r)) return e(n);
	}));
}, hi = /* @__PURE__ */ v({ patchProp: Or }, Ln), $, gi = !1;
function _i() {
	return $ ||= Re(hi);
}
function vi() {
	return $ = gi ? $ : l(hi), gi = !0, $;
}
var yi = ((...e) => {
	_i().render(...e);
}), bi = ((...e) => {
	vi().hydrate(...e);
}), xi = ((...e) => {
	let t = _i().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = wi(e);
		if (!r) return;
		let i = t._component;
		!g(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Ci(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
}), Si = ((...e) => {
	let t = vi().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let t = wi(e);
		if (t) return n(t, !0, Ci(t));
	}, t;
});
function Ci(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function wi(e) {
	return C(e) ? document.querySelector(e) : e;
}
var Ti = !1, Ei = () => {
	Ti || (Ti = !0, li(), tr());
}, Di = () => {};
//#endregion
export { dn as BaseTransition, Wt as BaseTransitionPropsValidators, rn as Comment, At as DeprecationTypes, fn as EffectScope, at as ErrorCodes, Jt as ErrorTypeStrings, cn as Fragment, ft as KeepAlive, Gt as ReactiveEffect, zt as Static, hn as Suspense, ht as Teleport, xt as Text, an as TrackOpTypes, Bn as Transition, Ur as TransitionGroup, jt as TriggerOpTypes, Fr as VueElement, Qt as assertNumber, E as callWithAsyncErrorHandling, Dt as callWithErrorHandling, y as camelize, h as capitalize, wt as cloneVNode, nt as compatUtils, Di as compile, vn as computed, xi as createApp, lt as createBlock, wn as createCommentVNode, Fe as createElementBlock, Dn as createElementVNode, l as createHydrationRenderer, xn as createPropsRestProxy, Re as createRenderer, Si as createSSRApp, ee as createSlots, f as createStaticVNode, Ee as createTextVNode, T as createVNode, ot as customRef, r as defineAsyncComponent, Pt as defineComponent, Mr as defineCustomElement, be as defineEmits, Ce as defineExpose, ke as defineModel, re as defineOptions, le as defineProps, Nr as defineSSRCustomElement, _e as defineSlots, Ne as devtools, Yt as effect, ln as effectScope, O as getCurrentInstance, pt as getCurrentScope, Bt as getCurrentWatcher, o as getTransitionRawChildren, We as guardReactiveProps, ce as h, Ve as handleError, Ke as hasInjectionContext, bi as hydrate, ae as hydrateOnIdle, me as hydrateOnInteraction, tn as hydrateOnMediaQuery, de as hydrateOnVisible, Qe as initCustomFormatter, Ei as initDirectivesForSSR, Ye as inject, et as isMemoSame, gn as isProxy, gt as isReactive, St as isReadonly, $t as isRef, je as isRuntimeOnly, Ht as isShallow, e as isVNode, Ot as markRaw, bt as mergeDefaults, mn as mergeModels, qt as mergeProps, sn as nextTick, Ln as nodeOps, yt as normalizeClass, Kt as normalizeProps, on as normalizeStyle, Nt as onActivated, ct as onBeforeMount, Zt as onBeforeUnmount, un as onBeforeUpdate, mt as onDeactivated, Vt as onErrorCaptured, _n as onMounted, _t as onRenderTracked, Ct as onRenderTriggered, Tt as onScopeDispose, en as onServerPrefetch, Ut as onUnmounted, kt as onUpdated, rt as onWatcherCleanup, Et as openBlock, Or as patchProp, it as popScopeId, bn as provide, yn as proxyRefs, kn as pushScopeId, dt as queuePostFlushCb, On as reactive, ut as readonly, Tn as ref, En as registerRuntimeCompiler, yi as render, Le as renderList, d as renderSlot, Cn as resolveComponent, Be as resolveDirective, ne as resolveDynamicComponent, m as resolveFilter, Oe as resolveTransitionHooks, Rt as setBlockTracking, a as setDevtoolsHook, It as setTransitionHooks, Ie as shallowReactive, u as shallowReadonly, Sn as shallowRef, Se as ssrContextKey, Te as ssrUtils, ze as stop, Mt as toDisplayString, st as toHandlerKey, Ae as toHandlers, te as toRaw, p as toRef, De as toRefs, Lt as toValue, ie as transformVNodeArgs, i as triggerRef, Ft as unref, ue as useAttrs, Rr as useCssModule, rr as useCssVars, Ir as useHost, ye as useId, Pe as useModel, jn as useSSRContext, Lr as useShadowRoot, c as useSlots, Ge as useTemplateRef, _ as useTransitionState, ei as vModelCheckbox, si as vModelDynamic, ni as vModelRadio, ri as vModelSelect, X as vModelText, er as vShow, Ue as version, Je as warn, se as watch, ge as watchEffect, nn as watchPostEffect, pe as watchSyncEffect, $e as withAsyncContext, Ze as withCtx, tt as withDefaults, Me as withDirectives, mi as withKeys, n as withMemo, fi as withModifiers, vt as withScopeId };
