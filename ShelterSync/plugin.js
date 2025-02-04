(function(exports) {

//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
	return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i$1 = 0, n = keys.length, key; i$1 < n; i$1++) {
		key = keys[i$1];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion

//#region solid-js/web
var require_web = __commonJS({ "solid-js/web"(exports, module) {
	module.exports = shelter.solidWeb;
} });

//#endregion
//#region node_modules/.pnpm/fflate@0.8.2/node_modules/fflate/esm/browser.js
var ch2 = {};
var wk = function(c, id, msg, transfer, cb) {
	var w = new Worker(ch2[id] || (ch2[id] = URL.createObjectURL(new Blob([c + ";addEventListener(\"error\",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})"], { type: "text/javascript" }))));
	w.onmessage = function(e) {
		var d = e.data, ed = d.$e$;
		if (ed) {
			var err$1 = new Error(ed[0]);
			err$1["code"] = ed[1];
			err$1.stack = ed[2];
			cb(err$1, null);
		} else cb(null, d);
	};
	w.postMessage(msg, transfer);
	return w;
};
var u8 = Uint8Array, u16 = Uint16Array, i32 = Int32Array;
var fleb = new u8([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	4,
	4,
	4,
	4,
	5,
	5,
	5,
	5,
	0,
	0,
	0,
	0
]);
var fdeb = new u8([
	0,
	0,
	0,
	0,
	1,
	1,
	2,
	2,
	3,
	3,
	4,
	4,
	5,
	5,
	6,
	6,
	7,
	7,
	8,
	8,
	9,
	9,
	10,
	10,
	11,
	11,
	12,
	12,
	13,
	13,
	0,
	0
]);
var clim = new u8([
	16,
	17,
	18,
	0,
	8,
	7,
	9,
	6,
	10,
	5,
	11,
	4,
	12,
	3,
	13,
	2,
	14,
	1,
	15
]);
var freb = function(eb, start) {
	var b = new u16(31);
	for (var i$1 = 0; i$1 < 31; ++i$1) b[i$1] = start += 1 << eb[i$1 - 1];
	var r = new i32(b[30]);
	for (var i$1 = 1; i$1 < 30; ++i$1) for (var j = b[i$1]; j < b[i$1 + 1]; ++j) r[j] = j - b[i$1] << 5 | i$1;
	return {
		b,
		r
	};
};
var _a = freb(fleb, 2), fl = _a.b, revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b.b, revfd = _b.r;
var rev = new u16(32768);
for (var i = 0; i < 32768; ++i) {
	var x = (i & 43690) >> 1 | (i & 21845) << 1;
	x = (x & 52428) >> 2 | (x & 13107) << 2;
	x = (x & 61680) >> 4 | (x & 3855) << 4;
	rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
}
var hMap = function(cd, mb, r) {
	var s = cd.length;
	var i$1 = 0;
	var l = new u16(mb);
	for (; i$1 < s; ++i$1) if (cd[i$1]) ++l[cd[i$1] - 1];
	var le = new u16(mb);
	for (i$1 = 1; i$1 < mb; ++i$1) le[i$1] = le[i$1 - 1] + l[i$1 - 1] << 1;
	var co;
	if (r) {
		co = new u16(1 << mb);
		var rvb = 15 - mb;
		for (i$1 = 0; i$1 < s; ++i$1) if (cd[i$1]) {
			var sv = i$1 << 4 | cd[i$1];
			var r_1 = mb - cd[i$1];
			var v = le[cd[i$1] - 1]++ << r_1;
			for (var m = v | (1 << r_1) - 1; v <= m; ++v) co[rev[v] >> rvb] = sv;
		}
	} else {
		co = new u16(s);
		for (i$1 = 0; i$1 < s; ++i$1) if (cd[i$1]) co[i$1] = rev[le[cd[i$1] - 1]++] >> 15 - cd[i$1];
	}
	return co;
};
var flt = new u8(288);
for (var i = 0; i < 144; ++i) flt[i] = 8;
for (var i = 144; i < 256; ++i) flt[i] = 9;
for (var i = 256; i < 280; ++i) flt[i] = 7;
for (var i = 280; i < 288; ++i) flt[i] = 8;
var fdt = new u8(32);
for (var i = 0; i < 32; ++i) fdt[i] = 5;
var flm = /*#__PURE__*/ hMap(flt, 9, 0), flrm = /*#__PURE__*/ hMap(flt, 9, 1);
var fdm = /*#__PURE__*/ hMap(fdt, 5, 0), fdrm = /*#__PURE__*/ hMap(fdt, 5, 1);
var max = function(a) {
	var m = a[0];
	for (var i$1 = 1; i$1 < a.length; ++i$1) if (a[i$1] > m) m = a[i$1];
	return m;
};
var bits = function(d, p, m) {
	var o = p / 8 | 0;
	return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
};
var bits16 = function(d, p) {
	var o = p / 8 | 0;
	return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
};
var shft = function(p) {
	return (p + 7) / 8 | 0;
};
var slc = function(v, s, e) {
	if (s == null || s < 0) s = 0;
	if (e == null || e > v.length) e = v.length;
	return new u8(v.subarray(s, e));
};
var ec = [
	"unexpected EOF",
	"invalid block type",
	"invalid length/literal",
	"invalid distance",
	"stream finished",
	"no stream handler",
	,
	"no callback",
	"invalid UTF-8 data",
	"extra field too long",
	"date not in range 1980-2099",
	"filename too long",
	"stream finishing",
	"invalid zip data"
];
var err = function(ind, msg, nt) {
	var e = new Error(msg || ec[ind]);
	e.code = ind;
	if (Error.captureStackTrace) Error.captureStackTrace(e, err);
	if (!nt) throw e;
	return e;
};
var inflt = function(dat, st, buf, dict) {
	var sl = dat.length, dl = dict ? dict.length : 0;
	if (!sl || st.f && !st.l) return buf || new u8(0);
	var noBuf = !buf;
	var resize = noBuf || st.i != 2;
	var noSt = st.i;
	if (noBuf) buf = new u8(sl * 3);
	var cbuf = function(l$1) {
		var bl = buf.length;
		if (l$1 > bl) {
			var nbuf = new u8(Math.max(bl * 2, l$1));
			nbuf.set(buf);
			buf = nbuf;
		}
	};
	var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
	var tbts = sl * 8;
	do {
		if (!lm) {
			final = bits(dat, pos, 1);
			var type = bits(dat, pos + 1, 3);
			pos += 3;
			if (!type) {
				var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
				if (t > sl) {
					if (noSt) err(0);
					break;
				}
				if (resize) cbuf(bt + l);
				buf.set(dat.subarray(s, t), bt);
				st.b = bt += l, st.p = pos = t * 8, st.f = final;
				continue;
			} else if (type == 1) lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
else if (type == 2) {
				var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
				var tl = hLit + bits(dat, pos + 5, 31) + 1;
				pos += 14;
				var ldt = new u8(tl);
				var clt = new u8(19);
				for (var i$1 = 0; i$1 < hcLen; ++i$1) clt[clim[i$1]] = bits(dat, pos + i$1 * 3, 7);
				pos += hcLen * 3;
				var clb = max(clt), clbmsk = (1 << clb) - 1;
				var clm = hMap(clt, clb, 1);
				for (var i$1 = 0; i$1 < tl;) {
					var r = clm[bits(dat, pos, clbmsk)];
					pos += r & 15;
					var s = r >> 4;
					if (s < 16) ldt[i$1++] = s;
else {
						var c = 0, n = 0;
						if (s == 16) n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i$1 - 1];
else if (s == 17) n = 3 + bits(dat, pos, 7), pos += 3;
else if (s == 18) n = 11 + bits(dat, pos, 127), pos += 7;
						while (n--) ldt[i$1++] = c;
					}
				}
				var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
				lbt = max(lt);
				dbt = max(dt);
				lm = hMap(lt, lbt, 1);
				dm = hMap(dt, dbt, 1);
			} else err(1);
			if (pos > tbts) {
				if (noSt) err(0);
				break;
			}
		}
		if (resize) cbuf(bt + 131072);
		var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
		var lpos = pos;
		for (;; lpos = pos) {
			var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
			pos += c & 15;
			if (pos > tbts) {
				if (noSt) err(0);
				break;
			}
			if (!c) err(2);
			if (sym < 256) buf[bt++] = sym;
else if (sym == 256) {
				lpos = pos, lm = null;
				break;
			} else {
				var add = sym - 254;
				if (sym > 264) {
					var i$1 = sym - 257, b = fleb[i$1];
					add = bits(dat, pos, (1 << b) - 1) + fl[i$1];
					pos += b;
				}
				var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
				if (!d) err(3);
				pos += d & 15;
				var dt = fd[dsym];
				if (dsym > 3) {
					var b = fdeb[dsym];
					dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
				}
				if (pos > tbts) {
					if (noSt) err(0);
					break;
				}
				if (resize) cbuf(bt + 131072);
				var end = bt + add;
				if (bt < dt) {
					var shift = dl - dt, dend = Math.min(dt, end);
					if (shift + bt < 0) err(3);
					for (; bt < dend; ++bt) buf[bt] = dict[shift + bt];
				}
				for (; bt < end; ++bt) buf[bt] = buf[bt - dt];
			}
		}
		st.l = lm, st.p = lpos, st.b = bt, st.f = final;
		if (lm) final = 1, st.m = lbt, st.d = dm, st.n = dbt;
	} while (!final);
	return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
};
var wbits = function(d, p, v) {
	v <<= p & 7;
	var o = p / 8 | 0;
	d[o] |= v;
	d[o + 1] |= v >> 8;
};
var wbits16 = function(d, p, v) {
	v <<= p & 7;
	var o = p / 8 | 0;
	d[o] |= v;
	d[o + 1] |= v >> 8;
	d[o + 2] |= v >> 16;
};
var hTree = function(d, mb) {
	var t = [];
	for (var i$1 = 0; i$1 < d.length; ++i$1) if (d[i$1]) t.push({
		s: i$1,
		f: d[i$1]
	});
	var s = t.length;
	var t2 = t.slice();
	if (!s) return {
		t: et,
		l: 0
	};
	if (s == 1) {
		var v = new u8(t[0].s + 1);
		v[t[0].s] = 1;
		return {
			t: v,
			l: 1
		};
	}
	t.sort(function(a, b) {
		return a.f - b.f;
	});
	t.push({
		s: -1,
		f: 25001
	});
	var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
	t[0] = {
		s: -1,
		f: l.f + r.f,
		l,
		r
	};
	while (i1 != s - 1) {
		l = t[t[i0].f < t[i2].f ? i0++ : i2++];
		r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
		t[i1++] = {
			s: -1,
			f: l.f + r.f,
			l,
			r
		};
	}
	var maxSym = t2[0].s;
	for (var i$1 = 1; i$1 < s; ++i$1) if (t2[i$1].s > maxSym) maxSym = t2[i$1].s;
	var tr = new u16(maxSym + 1);
	var mbt = ln(t[i1 - 1], tr, 0);
	if (mbt > mb) {
		var i$1 = 0, dt = 0;
		var lft = mbt - mb, cst = 1 << lft;
		t2.sort(function(a, b) {
			return tr[b.s] - tr[a.s] || a.f - b.f;
		});
		for (; i$1 < s; ++i$1) {
			var i2_1 = t2[i$1].s;
			if (tr[i2_1] > mb) {
				dt += cst - (1 << mbt - tr[i2_1]);
				tr[i2_1] = mb;
			} else break;
		}
		dt >>= lft;
		while (dt > 0) {
			var i2_2 = t2[i$1].s;
			if (tr[i2_2] < mb) dt -= 1 << mb - tr[i2_2]++ - 1;
else ++i$1;
		}
		for (; i$1 >= 0 && dt; --i$1) {
			var i2_3 = t2[i$1].s;
			if (tr[i2_3] == mb) {
				--tr[i2_3];
				++dt;
			}
		}
		mbt = mb;
	}
	return {
		t: new u8(tr),
		l: mbt
	};
};
var ln = function(n, l, d) {
	return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
};
var lc = function(c) {
	var s = c.length;
	while (s && !c[--s]);
	var cl = new u16(++s);
	var cli = 0, cln = c[0], cls = 1;
	var w = function(v) {
		cl[cli++] = v;
	};
	for (var i$1 = 1; i$1 <= s; ++i$1) if (c[i$1] == cln && i$1 != s) ++cls;
else {
		if (!cln && cls > 2) {
			for (; cls > 138; cls -= 138) w(32754);
			if (cls > 2) {
				w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
				cls = 0;
			}
		} else if (cls > 3) {
			w(cln), --cls;
			for (; cls > 6; cls -= 6) w(8304);
			if (cls > 2) w(cls - 3 << 5 | 8208), cls = 0;
		}
		while (cls--) w(cln);
		cls = 1;
		cln = c[i$1];
	}
	return {
		c: cl.subarray(0, cli),
		n: s
	};
};
var clen = function(cf, cl) {
	var l = 0;
	for (var i$1 = 0; i$1 < cl.length; ++i$1) l += cf[i$1] * cl[i$1];
	return l;
};
var wfblk = function(out, pos, dat) {
	var s = dat.length;
	var o = shft(pos + 2);
	out[o] = s & 255;
	out[o + 1] = s >> 8;
	out[o + 2] = out[o] ^ 255;
	out[o + 3] = out[o + 1] ^ 255;
	for (var i$1 = 0; i$1 < s; ++i$1) out[o + i$1 + 4] = dat[i$1];
	return (o + 4 + s) * 8;
};
var wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
	wbits(out, p++, final);
	++lf[256];
	var _a$1 = hTree(lf, 15), dlt = _a$1.t, mlb = _a$1.l;
	var _b$1 = hTree(df, 15), ddt = _b$1.t, mdb = _b$1.l;
	var _c = lc(dlt), lclt = _c.c, nlc = _c.n;
	var _d = lc(ddt), lcdt = _d.c, ndc = _d.n;
	var lcfreq = new u16(19);
	for (var i$1 = 0; i$1 < lclt.length; ++i$1) ++lcfreq[lclt[i$1] & 31];
	for (var i$1 = 0; i$1 < lcdt.length; ++i$1) ++lcfreq[lcdt[i$1] & 31];
	var _e = hTree(lcfreq, 7), lct = _e.t, mlcb = _e.l;
	var nlcc = 19;
	for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc);
	var flen = bl + 5 << 3;
	var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
	var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + 2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18];
	if (bs >= 0 && flen <= ftlen && flen <= dtlen) return wfblk(out, p, dat.subarray(bs, bs + bl));
	var lm, ll, dm, dl;
	wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
	if (dtlen < ftlen) {
		lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
		var llm = hMap(lct, mlcb, 0);
		wbits(out, p, nlc - 257);
		wbits(out, p + 5, ndc - 1);
		wbits(out, p + 10, nlcc - 4);
		p += 14;
		for (var i$1 = 0; i$1 < nlcc; ++i$1) wbits(out, p + 3 * i$1, lct[clim[i$1]]);
		p += 3 * nlcc;
		var lcts = [lclt, lcdt];
		for (var it = 0; it < 2; ++it) {
			var clct = lcts[it];
			for (var i$1 = 0; i$1 < clct.length; ++i$1) {
				var len = clct[i$1] & 31;
				wbits(out, p, llm[len]), p += lct[len];
				if (len > 15) wbits(out, p, clct[i$1] >> 5 & 127), p += clct[i$1] >> 12;
			}
		}
	} else lm = flm, ll = flt, dm = fdm, dl = fdt;
	for (var i$1 = 0; i$1 < li; ++i$1) {
		var sym = syms[i$1];
		if (sym > 255) {
			var len = sym >> 18 & 31;
			wbits16(out, p, lm[len + 257]), p += ll[len + 257];
			if (len > 7) wbits(out, p, sym >> 23 & 31), p += fleb[len];
			var dst = sym & 31;
			wbits16(out, p, dm[dst]), p += dl[dst];
			if (dst > 3) wbits16(out, p, sym >> 5 & 8191), p += fdeb[dst];
		} else wbits16(out, p, lm[sym]), p += ll[sym];
	}
	wbits16(out, p, lm[256]);
	return p + ll[256];
};
var deo = /*#__PURE__*/ new i32([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]);
var et = /*#__PURE__*/ new u8(0);
var dflt = function(dat, lvl, plvl, pre, post, st) {
	var s = st.z || dat.length;
	var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7e3)) + post);
	var w = o.subarray(pre, o.length - post);
	var lst = st.l;
	var pos = (st.r || 0) & 7;
	if (lvl) {
		if (pos) w[0] = st.r >> 3;
		var opt = deo[lvl - 1];
		var n = opt >> 13, c = opt & 8191;
		var msk_1 = (1 << plvl) - 1;
		var prev = st.p || new u16(32768), head = st.h || new u16(msk_1 + 1);
		var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
		var hsh = function(i$2) {
			return (dat[i$2] ^ dat[i$2 + 1] << bs1_1 ^ dat[i$2 + 2] << bs2_1) & msk_1;
		};
		var syms = new i32(25e3);
		var lf = new u16(288), df = new u16(32);
		var lc_1 = 0, eb = 0, i$1 = st.i || 0, li = 0, wi = st.w || 0, bs = 0;
		for (; i$1 + 2 < s; ++i$1) {
			var hv = hsh(i$1);
			var imod = i$1 & 32767, pimod = head[hv];
			prev[imod] = pimod;
			head[hv] = imod;
			if (wi <= i$1) {
				var rem = s - i$1;
				if ((lc_1 > 7e3 || li > 24576) && (rem > 423 || !lst)) {
					pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i$1 - bs, pos);
					li = lc_1 = eb = 0, bs = i$1;
					for (var j = 0; j < 286; ++j) lf[j] = 0;
					for (var j = 0; j < 30; ++j) df[j] = 0;
				}
				var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
				if (rem > 2 && hv == hsh(i$1 - dif)) {
					var maxn = Math.min(n, rem) - 1;
					var maxd = Math.min(32767, i$1);
					var ml = Math.min(258, rem);
					while (dif <= maxd && --ch_1 && imod != pimod) {
						if (dat[i$1 + l] == dat[i$1 + l - dif]) {
							var nl = 0;
							for (; nl < ml && dat[i$1 + nl] == dat[i$1 + nl - dif]; ++nl);
							if (nl > l) {
								l = nl, d = dif;
								if (nl > maxn) break;
								var mmd = Math.min(dif, nl - 2);
								var md = 0;
								for (var j = 0; j < mmd; ++j) {
									var ti = i$1 - dif + j & 32767;
									var pti = prev[ti];
									var cd = ti - pti & 32767;
									if (cd > md) md = cd, pimod = ti;
								}
							}
						}
						imod = pimod, pimod = prev[imod];
						dif += imod - pimod & 32767;
					}
				}
				if (d) {
					syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
					var lin = revfl[l] & 31, din = revfd[d] & 31;
					eb += fleb[lin] + fdeb[din];
					++lf[257 + lin];
					++df[din];
					wi = i$1 + l;
					++lc_1;
				} else {
					syms[li++] = dat[i$1];
					++lf[dat[i$1]];
				}
			}
		}
		for (i$1 = Math.max(i$1, wi); i$1 < s; ++i$1) {
			syms[li++] = dat[i$1];
			++lf[dat[i$1]];
		}
		pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i$1 - bs, pos);
		if (!lst) {
			st.r = pos & 7 | w[pos / 8 | 0] << 3;
			pos -= 7;
			st.h = head, st.p = prev, st.i = i$1, st.w = wi;
		}
	} else {
		for (var i$1 = st.w || 0; i$1 < s + lst; i$1 += 65535) {
			var e = i$1 + 65535;
			if (e >= s) {
				w[pos / 8 | 0] = lst;
				e = s;
			}
			pos = wfblk(w, pos + 1, dat.subarray(i$1, e));
		}
		st.i = s;
	}
	return slc(o, 0, pre + shft(pos) + post);
};
var crct = /*#__PURE__*/ function() {
	var t = new Int32Array(256);
	for (var i$1 = 0; i$1 < 256; ++i$1) {
		var c = i$1, k = 9;
		while (--k) c = (c & 1 && -306674912) ^ c >>> 1;
		t[i$1] = c;
	}
	return t;
}();
var crc = function() {
	var c = -1;
	return {
		p: function(d) {
			var cr = c;
			for (var i$1 = 0; i$1 < d.length; ++i$1) cr = crct[cr & 255 ^ d[i$1]] ^ cr >>> 8;
			c = cr;
		},
		d: function() {
			return ~c;
		}
	};
};
var adler = function() {
	var a = 1, b = 0;
	return {
		p: function(d) {
			var n = a, m = b;
			var l = d.length | 0;
			for (var i$1 = 0; i$1 != l;) {
				var e = Math.min(i$1 + 2655, l);
				for (; i$1 < e; ++i$1) m += n += d[i$1];
				n = (n & 65535) + 15 * (n >> 16), m = (m & 65535) + 15 * (m >> 16);
			}
			a = n, b = m;
		},
		d: function() {
			a %= 65521, b %= 65521;
			return (a & 255) << 24 | (a & 65280) << 8 | (b & 255) << 8 | b >> 8;
		}
	};
};
var dopt = function(dat, opt, pre, post, st) {
	if (!st) {
		st = { l: 1 };
		if (opt.dictionary) {
			var dict = opt.dictionary.subarray(-32768);
			var newDat = new u8(dict.length + dat.length);
			newDat.set(dict);
			newDat.set(dat, dict.length);
			dat = newDat;
			st.w = dict.length;
		}
	}
	return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? st.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 20 : 12 + opt.mem, pre, post, st);
};
var mrg = function(a, b) {
	var o = {};
	for (var k in a) o[k] = a[k];
	for (var k in b) o[k] = b[k];
	return o;
};
var wcln = function(fn, fnStr, td$1) {
	var dt = fn();
	var st = fn.toString();
	var ks = st.slice(st.indexOf("[") + 1, st.lastIndexOf("]")).replace(/\s+/g, "").split(",");
	for (var i$1 = 0; i$1 < dt.length; ++i$1) {
		var v = dt[i$1], k = ks[i$1];
		if (typeof v == "function") {
			fnStr += ";" + k + "=";
			var st_1 = v.toString();
			if (v.prototype) if (st_1.indexOf("[native code]") != -1) {
				var spInd = st_1.indexOf(" ", 8) + 1;
				fnStr += st_1.slice(spInd, st_1.indexOf("(", spInd));
			} else {
				fnStr += st_1;
				for (var t in v.prototype) fnStr += ";" + k + ".prototype." + t + "=" + v.prototype[t].toString();
			}
else fnStr += st_1;
		} else td$1[k] = v;
	}
	return fnStr;
};
var ch = [];
var cbfs = function(v) {
	var tl = [];
	for (var k in v) if (v[k].buffer) tl.push((v[k] = new v[k].constructor(v[k])).buffer);
	return tl;
};
var wrkr = function(fns, init, id, cb) {
	if (!ch[id]) {
		var fnStr = "", td_1 = {}, m = fns.length - 1;
		for (var i$1 = 0; i$1 < m; ++i$1) fnStr = wcln(fns[i$1], fnStr, td_1);
		ch[id] = {
			c: wcln(fns[m], fnStr, td_1),
			e: td_1
		};
	}
	var td$1 = mrg({}, ch[id].e);
	return wk(ch[id].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + init.toString() + "}", id, td$1, cbfs(td$1), cb);
};
var bInflt = function() {
	return [
		u8,
		u16,
		i32,
		fleb,
		fdeb,
		clim,
		fl,
		fd,
		flrm,
		fdrm,
		rev,
		ec,
		hMap,
		max,
		bits,
		bits16,
		shft,
		slc,
		err,
		inflt,
		inflateSync,
		pbf,
		gopt
	];
};
var bDflt = function() {
	return [
		u8,
		u16,
		i32,
		fleb,
		fdeb,
		clim,
		revfl,
		revfd,
		flm,
		flt,
		fdm,
		fdt,
		rev,
		deo,
		et,
		hMap,
		wbits,
		wbits16,
		hTree,
		ln,
		lc,
		clen,
		wfblk,
		wblk,
		shft,
		slc,
		dflt,
		dopt,
		deflateSync,
		pbf
	];
};
var gze = function() {
	return [
		gzh,
		gzhl,
		wbytes,
		crc,
		crct
	];
};
var guze = function() {
	return [gzs, gzl];
};
var zle = function() {
	return [
		zlh,
		wbytes,
		adler
	];
};
var zule = function() {
	return [zls];
};
var pbf = function(msg) {
	return postMessage(msg, [msg.buffer]);
};
var gopt = function(o) {
	return o && {
		out: o.size && new u8(o.size),
		dictionary: o.dictionary
	};
};
var astrm = function(strm) {
	strm.ondata = function(dat, final) {
		return postMessage([dat, final], [dat.buffer]);
	};
	return function(ev) {
		if (ev.data.length) {
			strm.push(ev.data[0], ev.data[1]);
			postMessage([ev.data[0].length]);
		} else strm.flush();
	};
};
var astrmify = function(fns, strm, opts, init, id, flush, ext) {
	var t;
	var w = wrkr(fns, init, id, function(err$1, dat) {
		if (err$1) w.terminate(), strm.ondata.call(strm, err$1);
else if (!Array.isArray(dat)) ext(dat);
else if (dat.length == 1) {
			strm.queuedSize -= dat[0];
			if (strm.ondrain) strm.ondrain(dat[0]);
		} else {
			if (dat[1]) w.terminate();
			strm.ondata.call(strm, err$1, dat[0], dat[1]);
		}
	});
	w.postMessage(opts);
	strm.queuedSize = 0;
	strm.push = function(d, f) {
		if (!strm.ondata) err(5);
		if (t) strm.ondata(err(4, 0, 1), null, !!f);
		strm.queuedSize += d.length;
		w.postMessage([d, t = f], [d.buffer]);
	};
	strm.terminate = function() {
		w.terminate();
	};
	if (flush) strm.flush = function() {
		w.postMessage([]);
	};
};
var b2 = function(d, b) {
	return d[b] | d[b + 1] << 8;
};
var b4 = function(d, b) {
	return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
};
var b8 = function(d, b) {
	return b4(d, b) + b4(d, b + 4) * 4294967296;
};
var wbytes = function(d, b, v) {
	for (; v; ++b) d[b] = v, v >>>= 8;
};
var gzh = function(c, o) {
	var fn = o.filename;
	c[0] = 31, c[1] = 139, c[2] = 8, c[8] = o.level < 2 ? 4 : o.level == 9 ? 2 : 0, c[9] = 3;
	if (o.mtime != 0) wbytes(c, 4, Math.floor(new Date(o.mtime || Date.now()) / 1e3));
	if (fn) {
		c[3] = 8;
		for (var i$1 = 0; i$1 <= fn.length; ++i$1) c[i$1 + 10] = fn.charCodeAt(i$1);
	}
};
var gzs = function(d) {
	if (d[0] != 31 || d[1] != 139 || d[2] != 8) err(6, "invalid gzip data");
	var flg = d[3];
	var st = 10;
	if (flg & 4) st += (d[10] | d[11] << 8) + 2;
	for (var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++]);
	return st + (flg & 2);
};
var gzl = function(d) {
	var l = d.length;
	return (d[l - 4] | d[l - 3] << 8 | d[l - 2] << 16 | d[l - 1] << 24) >>> 0;
};
var gzhl = function(o) {
	return 10 + (o.filename ? o.filename.length + 1 : 0);
};
var zlh = function(c, o) {
	var lv = o.level, fl$1 = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
	c[0] = 120, c[1] = fl$1 << 6 | (o.dictionary && 32);
	c[1] |= 31 - (c[0] << 8 | c[1]) % 31;
	if (o.dictionary) {
		var h = adler();
		h.p(o.dictionary);
		wbytes(c, 2, h.d());
	}
};
var zls = function(d, dict) {
	if ((d[0] & 15) != 8 || d[0] >> 4 > 7 || (d[0] << 8 | d[1]) % 31) err(6, "invalid zlib data");
	if ((d[1] >> 5 & 1) == +!dict) err(6, "invalid zlib data: " + (d[1] & 32 ? "need" : "unexpected") + " dictionary");
	return (d[1] >> 3 & 4) + 2;
};
function StrmOpt(opts, cb) {
	if (typeof opts == "function") cb = opts, opts = {};
	this.ondata = cb;
	return opts;
}
/**
* Streaming DEFLATE compression
*/
var Deflate = function() {
	function Deflate$1(opts, cb) {
		if (typeof opts == "function") cb = opts, opts = {};
		this.ondata = cb;
		this.o = opts || {};
		this.s = {
			l: 0,
			i: 32768,
			w: 32768,
			z: 32768
		};
		this.b = new u8(98304);
		if (this.o.dictionary) {
			var dict = this.o.dictionary.subarray(-32768);
			this.b.set(dict, 32768 - dict.length);
			this.s.i = 32768 - dict.length;
		}
	}
	Deflate$1.prototype.p = function(c, f) {
		this.ondata(dopt(c, this.o, 0, 0, this.s), f);
	};
	/**
	* Pushes a chunk to be deflated
	* @param chunk The chunk to push
	* @param final Whether this is the last chunk
	*/
	Deflate$1.prototype.push = function(chunk, final) {
		if (!this.ondata) err(5);
		if (this.s.l) err(4);
		var endLen = chunk.length + this.s.z;
		if (endLen > this.b.length) {
			if (endLen > 2 * this.b.length - 32768) {
				var newBuf = new u8(endLen & -32768);
				newBuf.set(this.b.subarray(0, this.s.z));
				this.b = newBuf;
			}
			var split = this.b.length - this.s.z;
			this.b.set(chunk.subarray(0, split), this.s.z);
			this.s.z = this.b.length;
			this.p(this.b, false);
			this.b.set(this.b.subarray(-32768));
			this.b.set(chunk.subarray(split), 32768);
			this.s.z = chunk.length - split + 32768;
			this.s.i = 32766, this.s.w = 32768;
		} else {
			this.b.set(chunk, this.s.z);
			this.s.z += chunk.length;
		}
		this.s.l = final & 1;
		if (this.s.z > this.s.w + 8191 || final) {
			this.p(this.b, final || false);
			this.s.w = this.s.i, this.s.i -= 2;
		}
	};
	/**
	* Flushes buffered uncompressed data. Useful to immediately retrieve the
	* deflated output for small inputs.
	*/
	Deflate$1.prototype.flush = function() {
		if (!this.ondata) err(5);
		if (this.s.l) err(4);
		this.p(this.b, false);
		this.s.w = this.s.i, this.s.i -= 2;
	};
	return Deflate$1;
}();
/**
* Asynchronous streaming DEFLATE compression
*/
var AsyncDeflate = function() {
	function AsyncDeflate$1(opts, cb) {
		astrmify([bDflt, function() {
			return [astrm, Deflate];
		}], this, StrmOpt.call(this, opts, cb), function(ev) {
			var strm = new Deflate(ev.data);
			onmessage = astrm(strm);
		}, 6, 1);
	}
	return AsyncDeflate$1;
}();
function deflateSync(data, opts) {
	return dopt(data, opts || {}, 0, 0);
}
/**
* Streaming DEFLATE decompression
*/
var Inflate = function() {
	function Inflate$1(opts, cb) {
		if (typeof opts == "function") cb = opts, opts = {};
		this.ondata = cb;
		var dict = opts && opts.dictionary && opts.dictionary.subarray(-32768);
		this.s = {
			i: 0,
			b: dict ? dict.length : 0
		};
		this.o = new u8(32768);
		this.p = new u8(0);
		if (dict) this.o.set(dict);
	}
	Inflate$1.prototype.e = function(c) {
		if (!this.ondata) err(5);
		if (this.d) err(4);
		if (!this.p.length) this.p = c;
else if (c.length) {
			var n = new u8(this.p.length + c.length);
			n.set(this.p), n.set(c, this.p.length), this.p = n;
		}
	};
	Inflate$1.prototype.c = function(final) {
		this.s.i = +(this.d = final || false);
		var bts = this.s.b;
		var dt = inflt(this.p, this.s, this.o);
		this.ondata(slc(dt, bts, this.s.b), this.d);
		this.o = slc(dt, this.s.b - 32768), this.s.b = this.o.length;
		this.p = slc(this.p, this.s.p / 8 | 0), this.s.p &= 7;
	};
	/**
	* Pushes a chunk to be inflated
	* @param chunk The chunk to push
	* @param final Whether this is the final chunk
	*/
	Inflate$1.prototype.push = function(chunk, final) {
		this.e(chunk), this.c(final);
	};
	return Inflate$1;
}();
/**
* Asynchronous streaming DEFLATE decompression
*/
var AsyncInflate = function() {
	function AsyncInflate$1(opts, cb) {
		astrmify([bInflt, function() {
			return [astrm, Inflate];
		}], this, StrmOpt.call(this, opts, cb), function(ev) {
			var strm = new Inflate(ev.data);
			onmessage = astrm(strm);
		}, 7, 0);
	}
	return AsyncInflate$1;
}();
function inflateSync(data, opts) {
	return inflt(data, { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
/**
* Streaming GZIP compression
*/
var Gzip = function() {
	function Gzip$1(opts, cb) {
		this.c = crc();
		this.l = 0;
		this.v = 1;
		Deflate.call(this, opts, cb);
	}
	/**
	* Pushes a chunk to be GZIPped
	* @param chunk The chunk to push
	* @param final Whether this is the last chunk
	*/
	Gzip$1.prototype.push = function(chunk, final) {
		this.c.p(chunk);
		this.l += chunk.length;
		Deflate.prototype.push.call(this, chunk, final);
	};
	Gzip$1.prototype.p = function(c, f) {
		var raw = dopt(c, this.o, this.v && gzhl(this.o), f && 8, this.s);
		if (this.v) gzh(raw, this.o), this.v = 0;
		if (f) wbytes(raw, raw.length - 8, this.c.d()), wbytes(raw, raw.length - 4, this.l);
		this.ondata(raw, f);
	};
	/**
	* Flushes buffered uncompressed data. Useful to immediately retrieve the
	* GZIPped output for small inputs.
	*/
	Gzip$1.prototype.flush = function() {
		Deflate.prototype.flush.call(this);
	};
	return Gzip$1;
}();
/**
* Asynchronous streaming GZIP compression
*/
var AsyncGzip = function() {
	function AsyncGzip$1(opts, cb) {
		astrmify([
			bDflt,
			gze,
			function() {
				return [
					astrm,
					Deflate,
					Gzip
				];
			}
		], this, StrmOpt.call(this, opts, cb), function(ev) {
			var strm = new Gzip(ev.data);
			onmessage = astrm(strm);
		}, 8, 1);
	}
	return AsyncGzip$1;
}();
/**
* Streaming single or multi-member GZIP decompression
*/
var Gunzip = function() {
	function Gunzip$1(opts, cb) {
		this.v = 1;
		this.r = 0;
		Inflate.call(this, opts, cb);
	}
	/**
	* Pushes a chunk to be GUNZIPped
	* @param chunk The chunk to push
	* @param final Whether this is the last chunk
	*/
	Gunzip$1.prototype.push = function(chunk, final) {
		Inflate.prototype.e.call(this, chunk);
		this.r += chunk.length;
		if (this.v) {
			var p = this.p.subarray(this.v - 1);
			var s = p.length > 3 ? gzs(p) : 4;
			if (s > p.length) {
				if (!final) return;
			} else if (this.v > 1 && this.onmember) this.onmember(this.r - p.length);
			this.p = p.subarray(s), this.v = 0;
		}
		Inflate.prototype.c.call(this, final);
		if (this.s.f && !this.s.l && !final) {
			this.v = shft(this.s.p) + 9;
			this.s = { i: 0 };
			this.o = new u8(0);
			this.push(new u8(0), final);
		}
	};
	return Gunzip$1;
}();
/**
* Asynchronous streaming single or multi-member GZIP decompression
*/
var AsyncGunzip = function() {
	function AsyncGunzip$1(opts, cb) {
		var _this = this;
		astrmify([
			bInflt,
			guze,
			function() {
				return [
					astrm,
					Inflate,
					Gunzip
				];
			}
		], this, StrmOpt.call(this, opts, cb), function(ev) {
			var strm = new Gunzip(ev.data);
			strm.onmember = function(offset) {
				return postMessage(offset);
			};
			onmessage = astrm(strm);
		}, 9, 0, function(offset) {
			return _this.onmember && _this.onmember(offset);
		});
	}
	return AsyncGunzip$1;
}();
/**
* Streaming Zlib compression
*/
var Zlib = function() {
	function Zlib$1(opts, cb) {
		this.c = adler();
		this.v = 1;
		Deflate.call(this, opts, cb);
	}
	/**
	* Pushes a chunk to be zlibbed
	* @param chunk The chunk to push
	* @param final Whether this is the last chunk
	*/
	Zlib$1.prototype.push = function(chunk, final) {
		this.c.p(chunk);
		Deflate.prototype.push.call(this, chunk, final);
	};
	Zlib$1.prototype.p = function(c, f) {
		var raw = dopt(c, this.o, this.v && (this.o.dictionary ? 6 : 2), f && 4, this.s);
		if (this.v) zlh(raw, this.o), this.v = 0;
		if (f) wbytes(raw, raw.length - 4, this.c.d());
		this.ondata(raw, f);
	};
	/**
	* Flushes buffered uncompressed data. Useful to immediately retrieve the
	* zlibbed output for small inputs.
	*/
	Zlib$1.prototype.flush = function() {
		Deflate.prototype.flush.call(this);
	};
	return Zlib$1;
}();
/**
* Asynchronous streaming Zlib compression
*/
var AsyncZlib = function() {
	function AsyncZlib$1(opts, cb) {
		astrmify([
			bDflt,
			zle,
			function() {
				return [
					astrm,
					Deflate,
					Zlib
				];
			}
		], this, StrmOpt.call(this, opts, cb), function(ev) {
			var strm = new Zlib(ev.data);
			onmessage = astrm(strm);
		}, 10, 1);
	}
	return AsyncZlib$1;
}();
/**
* Streaming Zlib decompression
*/
var Unzlib = function() {
	function Unzlib$1(opts, cb) {
		Inflate.call(this, opts, cb);
		this.v = opts && opts.dictionary ? 2 : 1;
	}
	/**
	* Pushes a chunk to be unzlibbed
	* @param chunk The chunk to push
	* @param final Whether this is the last chunk
	*/
	Unzlib$1.prototype.push = function(chunk, final) {
		Inflate.prototype.e.call(this, chunk);
		if (this.v) {
			if (this.p.length < 6 && !final) return;
			this.p = this.p.subarray(zls(this.p, this.v - 1)), this.v = 0;
		}
		if (final) {
			if (this.p.length < 4) err(6, "invalid zlib data");
			this.p = this.p.subarray(0, -4);
		}
		Inflate.prototype.c.call(this, final);
	};
	return Unzlib$1;
}();
/**
* Asynchronous streaming Zlib decompression
*/
var AsyncUnzlib = function() {
	function AsyncUnzlib$1(opts, cb) {
		astrmify([
			bInflt,
			zule,
			function() {
				return [
					astrm,
					Inflate,
					Unzlib
				];
			}
		], this, StrmOpt.call(this, opts, cb), function(ev) {
			var strm = new Unzlib(ev.data);
			onmessage = astrm(strm);
		}, 11, 0);
	}
	return AsyncUnzlib$1;
}();
/**
* Streaming GZIP, Zlib, or raw DEFLATE decompression
*/
var Decompress = function() {
	function Decompress$1(opts, cb) {
		this.o = StrmOpt.call(this, opts, cb) || {};
		this.G = Gunzip;
		this.I = Inflate;
		this.Z = Unzlib;
	}
	Decompress$1.prototype.i = function() {
		var _this = this;
		this.s.ondata = function(dat, final) {
			_this.ondata(dat, final);
		};
	};
	/**
	* Pushes a chunk to be decompressed
	* @param chunk The chunk to push
	* @param final Whether this is the last chunk
	*/
	Decompress$1.prototype.push = function(chunk, final) {
		if (!this.ondata) err(5);
		if (!this.s) {
			if (this.p && this.p.length) {
				var n = new u8(this.p.length + chunk.length);
				n.set(this.p), n.set(chunk, this.p.length);
			} else this.p = chunk;
			if (this.p.length > 2) {
				this.s = this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8 ? new this.G(this.o) : (this.p[0] & 15) != 8 || this.p[0] >> 4 > 7 || (this.p[0] << 8 | this.p[1]) % 31 ? new this.I(this.o) : new this.Z(this.o);
				this.i();
				this.s.push(this.p, final);
				this.p = null;
			}
		} else this.s.push(chunk, final);
	};
	return Decompress$1;
}();
/**
* Asynchronous streaming GZIP, Zlib, or raw DEFLATE decompression
*/
var AsyncDecompress = function() {
	function AsyncDecompress$1(opts, cb) {
		Decompress.call(this, opts, cb);
		this.queuedSize = 0;
		this.G = AsyncGunzip;
		this.I = AsyncInflate;
		this.Z = AsyncUnzlib;
	}
	AsyncDecompress$1.prototype.i = function() {
		var _this = this;
		this.s.ondata = function(err$1, dat, final) {
			_this.ondata(err$1, dat, final);
		};
		this.s.ondrain = function(size) {
			_this.queuedSize -= size;
			if (_this.ondrain) _this.ondrain(size);
		};
	};
	/**
	* Pushes a chunk to be decompressed
	* @param chunk The chunk to push
	* @param final Whether this is the last chunk
	*/
	AsyncDecompress$1.prototype.push = function(chunk, final) {
		this.queuedSize += chunk.length;
		Decompress.prototype.push.call(this, chunk, final);
	};
	return AsyncDecompress$1;
}();
var te = typeof TextEncoder != "undefined" && /*#__PURE__*/ new TextEncoder();
var td = typeof TextDecoder != "undefined" && /*#__PURE__*/ new TextDecoder();
var tds = 0;
try {
	td.decode(et, { stream: true });
	tds = 1;
} catch (e) {}
var dutf8 = function(d) {
	for (var r = "", i$1 = 0;;) {
		var c = d[i$1++];
		var eb = (c > 127) + (c > 223) + (c > 239);
		if (i$1 + eb > d.length) return {
			s: r,
			r: slc(d, i$1 - 1)
		};
		if (!eb) r += String.fromCharCode(c);
else if (eb == 3) c = ((c & 15) << 18 | (d[i$1++] & 63) << 12 | (d[i$1++] & 63) << 6 | d[i$1++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
else if (eb & 1) r += String.fromCharCode((c & 31) << 6 | d[i$1++] & 63);
else r += String.fromCharCode((c & 15) << 12 | (d[i$1++] & 63) << 6 | d[i$1++] & 63);
	}
};
/**
* Streaming UTF-8 decoding
*/
var DecodeUTF8 = function() {
	/**
	* Creates a UTF-8 decoding stream
	* @param cb The callback to call whenever data is decoded
	*/
	function DecodeUTF8$1(cb) {
		this.ondata = cb;
		if (tds) this.t = new TextDecoder();
else this.p = et;
	}
	/**
	* Pushes a chunk to be decoded from UTF-8 binary
	* @param chunk The chunk to push
	* @param final Whether this is the last chunk
	*/
	DecodeUTF8$1.prototype.push = function(chunk, final) {
		if (!this.ondata) err(5);
		final = !!final;
		if (this.t) {
			this.ondata(this.t.decode(chunk, { stream: true }), final);
			if (final) {
				if (this.t.decode().length) err(8);
				this.t = null;
			}
			return;
		}
		if (!this.p) err(4);
		var dat = new u8(this.p.length + chunk.length);
		dat.set(this.p);
		dat.set(chunk, this.p.length);
		var _a$1 = dutf8(dat), s = _a$1.s, r = _a$1.r;
		if (final) {
			if (r.length) err(8);
			this.p = null;
		} else this.p = r;
		this.ondata(s, final);
	};
	return DecodeUTF8$1;
}();
/**
* Streaming UTF-8 encoding
*/
var EncodeUTF8 = function() {
	/**
	* Creates a UTF-8 decoding stream
	* @param cb The callback to call whenever data is encoded
	*/
	function EncodeUTF8$1(cb) {
		this.ondata = cb;
	}
	/**
	* Pushes a chunk to be encoded to UTF-8
	* @param chunk The string data to push
	* @param final Whether this is the last chunk
	*/
	EncodeUTF8$1.prototype.push = function(chunk, final) {
		if (!this.ondata) err(5);
		if (this.d) err(4);
		this.ondata(strToU8(chunk), this.d = final || false);
	};
	return EncodeUTF8$1;
}();
function strToU8(str, latin1) {
	if (latin1) {
		var ar_1 = new u8(str.length);
		for (var i$1 = 0; i$1 < str.length; ++i$1) ar_1[i$1] = str.charCodeAt(i$1);
		return ar_1;
	}
	if (te) return te.encode(str);
	var l = str.length;
	var ar = new u8(str.length + (str.length >> 1));
	var ai = 0;
	var w = function(v) {
		ar[ai++] = v;
	};
	for (var i$1 = 0; i$1 < l; ++i$1) {
		if (ai + 5 > ar.length) {
			var n = new u8(ai + 8 + (l - i$1 << 1));
			n.set(ar);
			ar = n;
		}
		var c = str.charCodeAt(i$1);
		if (c < 128 || latin1) w(c);
else if (c < 2048) w(192 | c >> 6), w(128 | c & 63);
else if (c > 55295 && c < 57344) c = 65536 + (c & 1047552) | str.charCodeAt(++i$1) & 1023, w(240 | c >> 18), w(128 | c >> 12 & 63), w(128 | c >> 6 & 63), w(128 | c & 63);
else w(224 | c >> 12), w(128 | c >> 6 & 63), w(128 | c & 63);
	}
	return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
	if (latin1) {
		var r = "";
		for (var i$1 = 0; i$1 < dat.length; i$1 += 16384) r += String.fromCharCode.apply(null, dat.subarray(i$1, i$1 + 16384));
		return r;
	} else if (td) return td.decode(dat);
else {
		var _a$1 = dutf8(dat), s = _a$1.s, r = _a$1.r;
		if (r.length) err(8);
		return s;
	}
}
var dbf = function(l) {
	return l == 1 ? 3 : l < 6 ? 2 : l == 9 ? 1 : 0;
};
var z64e = function(d, b) {
	for (; b2(d, b) != 1; b += 4 + b2(d, b + 2));
	return [
		b8(d, b + 12),
		b8(d, b + 4),
		b8(d, b + 20)
	];
};
var exfl = function(ex) {
	var le = 0;
	if (ex) for (var k in ex) {
		var l = ex[k].length;
		if (l > 65535) err(9);
		le += l + 4;
	}
	return le;
};
var wzh = function(d, b, f, fn, u, c, ce, co) {
	var fl$1 = fn.length, ex = f.extra, col = co && co.length;
	var exl = exfl(ex);
	wbytes(d, b, ce != null ? 33639248 : 67324752), b += 4;
	if (ce != null) d[b++] = 20, d[b++] = f.os;
	d[b] = 20, b += 2;
	d[b++] = f.flag << 1 | (c < 0 && 8), d[b++] = u && 8;
	d[b++] = f.compression & 255, d[b++] = f.compression >> 8;
	var dt = new Date(f.mtime == null ? Date.now() : f.mtime), y = dt.getFullYear() - 1980;
	if (y < 0 || y > 119) err(10);
	wbytes(d, b, y << 25 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >> 1), b += 4;
	if (c != -1) {
		wbytes(d, b, f.crc);
		wbytes(d, b + 4, c < 0 ? -c - 2 : c);
		wbytes(d, b + 8, f.size);
	}
	wbytes(d, b + 12, fl$1);
	wbytes(d, b + 14, exl), b += 16;
	if (ce != null) {
		wbytes(d, b, col);
		wbytes(d, b + 6, f.attrs);
		wbytes(d, b + 10, ce), b += 14;
	}
	d.set(fn, b);
	b += fl$1;
	if (exl) for (var k in ex) {
		var exf = ex[k], l = exf.length;
		wbytes(d, b, +k);
		wbytes(d, b + 2, l);
		d.set(exf, b + 4), b += 4 + l;
	}
	if (col) d.set(co, b), b += col;
	return b;
};
var wzf = function(o, b, c, d, e) {
	wbytes(o, b, 101010256);
	wbytes(o, b + 8, c);
	wbytes(o, b + 10, c);
	wbytes(o, b + 12, d);
	wbytes(o, b + 16, e);
};
/**
* A pass-through stream to keep data uncompressed in a ZIP archive.
*/
var ZipPassThrough = function() {
	/**
	* Creates a pass-through stream that can be added to ZIP archives
	* @param filename The filename to associate with this data stream
	*/
	function ZipPassThrough$1(filename) {
		this.filename = filename;
		this.c = crc();
		this.size = 0;
		this.compression = 0;
	}
	/**
	* Processes a chunk and pushes to the output stream. You can override this
	* method in a subclass for custom behavior, but by default this passes
	* the data through. You must call this.ondata(err, chunk, final) at some
	* point in this method.
	* @param chunk The chunk to process
	* @param final Whether this is the last chunk
	*/
	ZipPassThrough$1.prototype.process = function(chunk, final) {
		this.ondata(null, chunk, final);
	};
	/**
	* Pushes a chunk to be added. If you are subclassing this with a custom
	* compression algorithm, note that you must push data from the source
	* file only, pre-compression.
	* @param chunk The chunk to push
	* @param final Whether this is the last chunk
	*/
	ZipPassThrough$1.prototype.push = function(chunk, final) {
		if (!this.ondata) err(5);
		this.c.p(chunk);
		this.size += chunk.length;
		if (final) this.crc = this.c.d();
		this.process(chunk, final || false);
	};
	return ZipPassThrough$1;
}();
/**
* Streaming DEFLATE compression for ZIP archives. Prefer using AsyncZipDeflate
* for better performance
*/
var ZipDeflate = function() {
	/**
	* Creates a DEFLATE stream that can be added to ZIP archives
	* @param filename The filename to associate with this data stream
	* @param opts The compression options
	*/
	function ZipDeflate$1(filename, opts) {
		var _this = this;
		if (!opts) opts = {};
		ZipPassThrough.call(this, filename);
		this.d = new Deflate(opts, function(dat, final) {
			_this.ondata(null, dat, final);
		});
		this.compression = 8;
		this.flag = dbf(opts.level);
	}
	ZipDeflate$1.prototype.process = function(chunk, final) {
		try {
			this.d.push(chunk, final);
		} catch (e) {
			this.ondata(e, null, final);
		}
	};
	/**
	* Pushes a chunk to be deflated
	* @param chunk The chunk to push
	* @param final Whether this is the last chunk
	*/
	ZipDeflate$1.prototype.push = function(chunk, final) {
		ZipPassThrough.prototype.push.call(this, chunk, final);
	};
	return ZipDeflate$1;
}();
/**
* Asynchronous streaming DEFLATE compression for ZIP archives
*/
var AsyncZipDeflate = function() {
	/**
	* Creates an asynchronous DEFLATE stream that can be added to ZIP archives
	* @param filename The filename to associate with this data stream
	* @param opts The compression options
	*/
	function AsyncZipDeflate$1(filename, opts) {
		var _this = this;
		if (!opts) opts = {};
		ZipPassThrough.call(this, filename);
		this.d = new AsyncDeflate(opts, function(err$1, dat, final) {
			_this.ondata(err$1, dat, final);
		});
		this.compression = 8;
		this.flag = dbf(opts.level);
		this.terminate = this.d.terminate;
	}
	AsyncZipDeflate$1.prototype.process = function(chunk, final) {
		this.d.push(chunk, final);
	};
	/**
	* Pushes a chunk to be deflated
	* @param chunk The chunk to push
	* @param final Whether this is the last chunk
	*/
	AsyncZipDeflate$1.prototype.push = function(chunk, final) {
		ZipPassThrough.prototype.push.call(this, chunk, final);
	};
	return AsyncZipDeflate$1;
}();
/**
* A zippable archive to which files can incrementally be added
*/
var Zip = function() {
	/**
	* Creates an empty ZIP archive to which files can be added
	* @param cb The callback to call whenever data for the generated ZIP archive
	*           is available
	*/
	function Zip$1(cb) {
		this.ondata = cb;
		this.u = [];
		this.d = 1;
	}
	/**
	* Adds a file to the ZIP archive
	* @param file The file stream to add
	*/
	Zip$1.prototype.add = function(file) {
		var _this = this;
		if (!this.ondata) err(5);
		if (this.d & 2) this.ondata(err(4 + (this.d & 1) * 8, 0, 1), null, false);
else {
			var f = strToU8(file.filename), fl_1 = f.length;
			var com = file.comment, o = com && strToU8(com);
			var u = fl_1 != file.filename.length || o && com.length != o.length;
			var hl_1 = fl_1 + exfl(file.extra) + 30;
			if (fl_1 > 65535) this.ondata(err(11, 0, 1), null, false);
			var header = new u8(hl_1);
			wzh(header, 0, file, f, u, -1);
			var chks_1 = [header];
			var pAll_1 = function() {
				for (var _i = 0, chks_2 = chks_1; _i < chks_2.length; _i++) {
					var chk = chks_2[_i];
					_this.ondata(null, chk, false);
				}
				chks_1 = [];
			};
			var tr_1 = this.d;
			this.d = 0;
			var ind_1 = this.u.length;
			var uf_1 = mrg(file, {
				f,
				u,
				o,
				t: function() {
					if (file.terminate) file.terminate();
				},
				r: function() {
					pAll_1();
					if (tr_1) {
						var nxt = _this.u[ind_1 + 1];
						if (nxt) nxt.r();
else _this.d = 1;
					}
					tr_1 = 1;
				}
			});
			var cl_1 = 0;
			file.ondata = function(err$1, dat, final) {
				if (err$1) {
					_this.ondata(err$1, dat, final);
					_this.terminate();
				} else {
					cl_1 += dat.length;
					chks_1.push(dat);
					if (final) {
						var dd = new u8(16);
						wbytes(dd, 0, 134695760);
						wbytes(dd, 4, file.crc);
						wbytes(dd, 8, cl_1);
						wbytes(dd, 12, file.size);
						chks_1.push(dd);
						uf_1.c = cl_1, uf_1.b = hl_1 + cl_1 + 16, uf_1.crc = file.crc, uf_1.size = file.size;
						if (tr_1) uf_1.r();
						tr_1 = 1;
					} else if (tr_1) pAll_1();
				}
			};
			this.u.push(uf_1);
		}
	};
	/**
	* Ends the process of adding files and prepares to emit the final chunks.
	* This *must* be called after adding all desired files for the resulting
	* ZIP file to work properly.
	*/
	Zip$1.prototype.end = function() {
		var _this = this;
		if (this.d & 2) {
			this.ondata(err(4 + (this.d & 1) * 8, 0, 1), null, true);
			return;
		}
		if (this.d) this.e();
else this.u.push({
			r: function() {
				if (!(_this.d & 1)) return;
				_this.u.splice(-1, 1);
				_this.e();
			},
			t: function() {}
		});
		this.d = 3;
	};
	Zip$1.prototype.e = function() {
		var bt = 0, l = 0, tl = 0;
		for (var _i = 0, _a$1 = this.u; _i < _a$1.length; _i++) {
			var f = _a$1[_i];
			tl += 46 + f.f.length + exfl(f.extra) + (f.o ? f.o.length : 0);
		}
		var out = new u8(tl + 22);
		for (var _b$1 = 0, _c = this.u; _b$1 < _c.length; _b$1++) {
			var f = _c[_b$1];
			wzh(out, bt, f, f.f, f.u, -f.c - 2, l, f.o);
			bt += 46 + f.f.length + exfl(f.extra) + (f.o ? f.o.length : 0), l += f.b;
		}
		wzf(out, bt, this.u.length, tl, l);
		this.ondata(null, out, true);
		this.d = 2;
	};
	/**
	* A method to terminate any internal workers used by the stream. Subsequent
	* calls to add() will fail.
	*/
	Zip$1.prototype.terminate = function() {
		for (var _i = 0, _a$1 = this.u; _i < _a$1.length; _i++) {
			var f = _a$1[_i];
			f.t();
		}
		this.d = 2;
	};
	return Zip$1;
}();
/**
* Streaming pass-through decompression for ZIP archives
*/
var UnzipPassThrough = function() {
	function UnzipPassThrough$1() {}
	UnzipPassThrough$1.prototype.push = function(data, final) {
		this.ondata(null, data, final);
	};
	UnzipPassThrough$1.compression = 0;
	return UnzipPassThrough$1;
}();
/**
* Streaming DEFLATE decompression for ZIP archives. Prefer AsyncZipInflate for
* better performance.
*/
var UnzipInflate = function() {
	/**
	* Creates a DEFLATE decompression that can be used in ZIP archives
	*/
	function UnzipInflate$1() {
		var _this = this;
		this.i = new Inflate(function(dat, final) {
			_this.ondata(null, dat, final);
		});
	}
	UnzipInflate$1.prototype.push = function(data, final) {
		try {
			this.i.push(data, final);
		} catch (e) {
			this.ondata(e, null, final);
		}
	};
	UnzipInflate$1.compression = 8;
	return UnzipInflate$1;
}();
/**
* Asynchronous streaming DEFLATE decompression for ZIP archives
*/
var AsyncUnzipInflate = function() {
	/**
	* Creates a DEFLATE decompression that can be used in ZIP archives
	*/
	function AsyncUnzipInflate$1(_, sz) {
		var _this = this;
		if (sz < 32e4) this.i = new Inflate(function(dat, final) {
			_this.ondata(null, dat, final);
		});
else {
			this.i = new AsyncInflate(function(err$1, dat, final) {
				_this.ondata(err$1, dat, final);
			});
			this.terminate = this.i.terminate;
		}
	}
	AsyncUnzipInflate$1.prototype.push = function(data, final) {
		if (this.i.terminate) data = slc(data, 0);
		this.i.push(data, final);
	};
	AsyncUnzipInflate$1.compression = 8;
	return AsyncUnzipInflate$1;
}();
/**
* A ZIP archive decompression stream that emits files as they are discovered
*/
var Unzip = function() {
	/**
	* Creates a ZIP decompression stream
	* @param cb The callback to call whenever a file in the ZIP archive is found
	*/
	function Unzip$1(cb) {
		this.onfile = cb;
		this.k = [];
		this.o = { 0: UnzipPassThrough };
		this.p = et;
	}
	/**
	* Pushes a chunk to be unzipped
	* @param chunk The chunk to push
	* @param final Whether this is the last chunk
	*/
	Unzip$1.prototype.push = function(chunk, final) {
		var _this = this;
		if (!this.onfile) err(5);
		if (!this.p) err(4);
		if (this.c > 0) {
			var len = Math.min(this.c, chunk.length);
			var toAdd = chunk.subarray(0, len);
			this.c -= len;
			if (this.d) this.d.push(toAdd, !this.c);
else this.k[0].push(toAdd);
			chunk = chunk.subarray(len);
			if (chunk.length) return this.push(chunk, final);
		} else {
			var f = 0, i$1 = 0, is = void 0, buf = void 0;
			if (!this.p.length) buf = chunk;
else if (!chunk.length) buf = this.p;
else {
				buf = new u8(this.p.length + chunk.length);
				buf.set(this.p), buf.set(chunk, this.p.length);
			}
			var l = buf.length, oc = this.c, add = oc && this.d;
			var _loop_2 = function() {
				var _a$1;
				var sig = b4(buf, i$1);
				if (sig == 67324752) {
					f = 1, is = i$1;
					this_1.d = null;
					this_1.c = 0;
					var bf = b2(buf, i$1 + 6), cmp_1 = b2(buf, i$1 + 8), u = bf & 2048, dd = bf & 8, fnl = b2(buf, i$1 + 26), es = b2(buf, i$1 + 28);
					if (l > i$1 + 30 + fnl + es) {
						var chks_3 = [];
						this_1.k.unshift(chks_3);
						f = 2;
						var sc_1 = b4(buf, i$1 + 18), su_1 = b4(buf, i$1 + 22);
						var fn_1 = strFromU8(buf.subarray(i$1 + 30, i$1 += 30 + fnl), !u);
						if (sc_1 == 4294967295) _a$1 = dd ? [-2] : z64e(buf, i$1), sc_1 = _a$1[0], su_1 = _a$1[1];
else if (dd) sc_1 = -1;
						i$1 += es;
						this_1.c = sc_1;
						var d_1;
						var file_1 = {
							name: fn_1,
							compression: cmp_1,
							start: function() {
								if (!file_1.ondata) err(5);
								if (!sc_1) file_1.ondata(null, et, true);
else {
									var ctr = _this.o[cmp_1];
									if (!ctr) file_1.ondata(err(14, "unknown compression type " + cmp_1, 1), null, false);
									d_1 = sc_1 < 0 ? new ctr(fn_1) : new ctr(fn_1, sc_1, su_1);
									d_1.ondata = function(err$1, dat$2, final$1) {
										file_1.ondata(err$1, dat$2, final$1);
									};
									for (var _i = 0, chks_4 = chks_3; _i < chks_4.length; _i++) {
										var dat$1 = chks_4[_i];
										d_1.push(dat$1, false);
									}
									if (_this.k[0] == chks_3 && _this.c) _this.d = d_1;
else d_1.push(et, true);
								}
							},
							terminate: function() {
								if (d_1 && d_1.terminate) d_1.terminate();
							}
						};
						if (sc_1 >= 0) file_1.size = sc_1, file_1.originalSize = su_1;
						this_1.onfile(file_1);
					}
					return "break";
				} else if (oc) {
					if (sig == 134695760) {
						is = i$1 += 12 + (oc == -2 && 8), f = 3, this_1.c = 0;
						return "break";
					} else if (sig == 33639248) {
						is = i$1 -= 4, f = 3, this_1.c = 0;
						return "break";
					}
				}
			};
			var this_1 = this;
			for (; i$1 < l - 4; ++i$1) {
				var state_1 = _loop_2();
				if (state_1 === "break") break;
			}
			this.p = et;
			if (oc < 0) {
				var dat = f ? buf.subarray(0, is - 12 - (oc == -2 && 8) - (b4(buf, is - 16) == 134695760 && 4)) : buf.subarray(0, i$1);
				if (add) add.push(dat, !!f);
else this.k[+(f == 2)].push(dat);
			}
			if (f & 2) return this.push(buf.subarray(i$1), final);
			this.p = buf.subarray(i$1);
		}
		if (final) {
			if (this.c) err(13);
			this.p = null;
		}
	};
	/**
	* Registers a decoder with the stream, allowing for files compressed with
	* the compression type provided to be expanded correctly
	* @param decoder The decoder constructor
	*/
	Unzip$1.prototype.register = function(decoder) {
		this.o[decoder.compression] = decoder;
	};
	return Unzip$1;
}();

//#endregion
//#region solid-js
var require_solid_js = __commonJS({ "solid-js"(exports, module) {
	module.exports = shelter.solid;
} });

//#endregion
//#region components/flex.tsx
var import_web$6 = __toESM(require_web(), 1);
var import_web$7 = __toESM(require_web(), 1);
var import_web$8 = __toESM(require_web(), 1);
var import_web$9 = __toESM(require_web(), 1);
var import_web$10 = __toESM(require_web(), 1);
var import_solid_js = __toESM(require_solid_js(), 1);
const _tmpl$$1 = /*#__PURE__*/ (0, import_web$6.template)(`<div></div>`, 2);
const styles = {
	base: {
		display: "flex",
		width: "100%"
	},
	justifyContent: {
		start: { justifyContent: "flex-start" },
		end: { justifyContent: "flex-end" },
		center: { justifyContent: "center" },
		between: { justifyContent: "space-between" },
		around: { justifyContent: "space-around" },
		evenly: { justifyContent: "space-evenly" }
	},
	alignItems: {
		start: { alignItems: "flex-start" },
		end: { alignItems: "flex-end" },
		center: { alignItems: "center" },
		baseline: { alignItems: "baseline" },
		stretch: { alignItems: "stretch" }
	},
	flexDirection: {
		row: { flexDirection: "row" },
		col: { flexDirection: "column" },
		"row-reverse": { flexDirection: "row-reverse" },
		"col-reverse": { flexDirection: "column-reverse" }
	}
};
const Flex = (rawProps) => {
	const props = (0, import_solid_js.mergeProps)({
		flexDirection: "row",
		justifyContent: "between",
		alignItems: "center"
	}, rawProps);
	const [local, others] = (0, import_solid_js.splitProps)(props, [
		"flexDirection",
		"justifyContent",
		"alignItems",
		"class"
	]);
	return (() => {
		const _el$ = (0, import_web$7.getNextElement)(_tmpl$$1);
		(0, import_web$9.spread)(_el$, (0, import_web$10.mergeProps)({
			get style() {
				return {
					...styles.base,
					...styles.flexDirection[local.flexDirection],
					...styles.justifyContent[local.justifyContent],
					...styles.alignItems[local.alignItems]
				};
			},
			get ["class"]() {
				return local.class;
			}
		}, others), false, false);
		(0, import_web$8.runHydrationEvents)();
		return _el$;
	})();
};

//#endregion
//#region plugins/ShelterSync/ui/OAuthModal.tsx
var import_web$1 = __toESM(require_web(), 1);
var import_web$2 = __toESM(require_web(), 1);
var import_web$3 = __toESM(require_web(), 1);
var import_web$4 = __toESM(require_web(), 1);
var import_web$5 = __toESM(require_web(), 1);
const _tmpl$ = /*#__PURE__*/ (0, import_web$1.template)(`<div><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/></div>`, 12);
const { ui: { ModalRoot, ModalHeader, ModalConfirmFooter, ModalSizes, Header: Header$1, HeaderTags: HeaderTags$1, TextBox: TextBox$1, Divider: Divider$1, Button: Button$1 }, solid: { createSignal: createSignal$1 }, plugin: { store: store$1 } } = shelter;
const OAuthModal = (props) => {
	const [token, setToken] = createSignal$1("");
	return (0, import_web$5.createComponent)(ModalRoot, {
		get size() {
			return ModalSizes.SMALL;
		},
		get children() {
			return [
				(0, import_web$5.createComponent)(ModalHeader, {
					close,
					children: "Authorize"
				}),
				(() => {
					const _el$ = (0, import_web$2.getNextElement)(_tmpl$), _el$2 = _el$.firstChild, [_el$3, _co$] = (0, import_web$3.getNextMarker)(_el$2.nextSibling), _el$4 = _el$3.nextSibling, [_el$5, _co$2] = (0, import_web$3.getNextMarker)(_el$4.nextSibling), _el$6 = _el$5.nextSibling, [_el$7, _co$3] = (0, import_web$3.getNextMarker)(_el$6.nextSibling), _el$8 = _el$7.nextSibling, [_el$9, _co$4] = (0, import_web$3.getNextMarker)(_el$8.nextSibling), _el$10 = _el$9.nextSibling, [_el$11, _co$5] = (0, import_web$3.getNextMarker)(_el$10.nextSibling);
					_el$.style.setProperty("display", "flex");
					_el$.style.setProperty("flex-direction", "column");
					_el$.style.setProperty("gap", "0.25rem");
					_el$.style.setProperty("padding", "16px");
					_el$.style.setProperty("padding-top", "0");
					(0, import_web$4.insert)(_el$, (0, import_web$5.createComponent)(Header$1, {
						get tag() {
							return HeaderTags$1.H5;
						},
						children: "1. Authorize via your web browser, and copy the token"
					}), _el$3, _co$);
					(0, import_web$4.insert)(_el$, (0, import_web$5.createComponent)(Button$1, {
						style: { width: "100%" },
						onClick: () => open(props.apiUrl),
						children: "Authorize"
					}), _el$5, _co$2);
					(0, import_web$4.insert)(_el$, (0, import_web$5.createComponent)(Divider$1, { mt: "0.25rem" }), _el$7, _co$3);
					(0, import_web$4.insert)(_el$, (0, import_web$5.createComponent)(Header$1, {
						get tag() {
							return HeaderTags$1.H5;
						},
						children: "2. Paste the token into the textbox"
					}), _el$9, _co$4);
					(0, import_web$4.insert)(_el$, (0, import_web$5.createComponent)(TextBox$1, {
						placeholder: "token-goes-here",
						get value() {
							return token();
						},
						onInput: setToken
					}), _el$11, _co$5);
					return _el$;
				})(),
				(0, import_web$5.createComponent)(ModalConfirmFooter, {
					type: "neutral",
					close,
					onConfirm: () => store$1.token = token()
				})
			];
		}
	});
};
var OAuthModal_default = OAuthModal;

//#endregion
//#region plugins/ShelterSync/index.tsx
var import_web = __toESM(require_web(), 1);
const { plugins: { installedPlugins, addLocalPlugin, removePlugin }, plugin: { store }, ui: { ButtonSizes, SwitchItem, Divider, Header, HeaderTags, Button, TextBox, Space, IconAdd, ButtonColors, ButtonLooks, showToast }, solid: { createSignal } } = shelter;
const DEFAULT_API_URL = "http://localhost:3000";
store.apiUrl ??= DEFAULT_API_URL;
store.autoSync ??= false;
store.oauthVerified ??= false;
store.accessToken ??= null;
const SYNC_INTERVAL = 15;
let syncIntervalId = null;
async function checkOAuthSettings() {
	if (store.apiUrl === DEFAULT_API_URL) return true;
	try {
		const response = await fetch(`${store.apiUrl}/oauth/settings`);
		if (!response.ok) return false;
		const data = await response.json();
		return !!(data?.client_id && data?.redirect_uri);
	} catch (error) {
		console.error("Failed to check OAuth settings:", error);
		return false;
	}
}
async function syncPlugins() {
	const plugins = installedPlugins();
	const data = { plugins };
	try {
		const jsonString = JSON.stringify(data);
		const textEncoder = new TextEncoder();
		const uint8Array = textEncoder.encode(jsonString);
		const compressed = deflateSync(uint8Array);
		const response = await fetch(`${store.apiUrl}/settings`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/octet-stream",
				Authorization: `Bearer ${store.accessToken}`
			},
			body: compressed
		});
		if (!response.ok) {
			if (response.status === 401) {
				store.oauthVerified = false;
				store.accessToken = null;
				throw new Error("Authentication failed. Please reauthorize.");
			}
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		showToast({
			message: "Settings synced successfully!",
			type: "success"
		});
		return await response.json();
	} catch (error) {
		console.error("Failed to sync plugins:", error);
		showToast({
			message: error.message || "Failed to sync settings",
			type: "error"
		});
	}
}
function settings() {
	const [syncing, setSyncing] = createSignal(false);
	const [tempApiUrl, setTempApiUrl] = createSignal(store.apiUrl);
	const [isLoading, setIsLoading] = createSignal(false);
	const [isAuthorizing, setIsAuthorizing] = createSignal(false);
	const handleSync = async () => {
		setSyncing(true);
		await syncPlugins();
		setSyncing(false);
	};
	const handleAuthorize = async () => {
		setIsAuthorizing(true);
		try {
			const response = await fetch(`${store.apiUrl}/oauth/settings`);
			if (!response.ok) throw new Error("Failed to get OAuth settings");
			const { client_id, redirect_uri } = await response.json();
			if (!(client_id && redirect_uri)) throw new Error("Invalid OAuth settings");
			const authWindow = (0, import_web.createComponent)(OAuthModal_default, {
				get apiUrl() {
					return store.apiUrl;
				},
				close: () => {}
			});
			const checkInterval = setInterval(async () => {
				try {
					const tokenResponse = await fetch(`${store.apiUrl}/oauth/callback/check`);
					if (tokenResponse.ok) {
						const { access_token } = await tokenResponse.json();
						store.accessToken = access_token;
						store.oauthVerified = true;
						authWindow?.close();
						clearInterval(checkInterval);
						showToast({
							message: "Successfully authorized!",
							type: "success"
						});
					}
				} catch (error) {
					console.error("OAuth check failed:", error);
				}
			}, 2e3);
			const closeCheck = setInterval(() => {
				if (authWindow?.closed) {
					clearInterval(closeCheck);
					clearInterval(checkInterval);
					setIsAuthorizing(false);
				}
			}, 500);
		} catch (error) {
			console.error("Failed to start OAuth flow:", error);
			showToast({
				message: "Failed to start authorization",
				type: "error"
			});
		} finally {
			setIsAuthorizing(false);
		}
	};
	const handlePull = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(`${store.apiUrl}/settings`, { headers: { Authorization: `Bearer ${store.accessToken}` } });
			if (!response.ok) {
				if (response.status === 401) {
					store.oauthVerified = false;
					store.accessToken = null;
					throw new Error("Authentication failed. Please reauthorize.");
				}
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const compressedData = new Uint8Array(await response.arrayBuffer());
			const decompressed = inflateSync(compressedData);
			const textDecoder = new TextDecoder();
			const jsonString = textDecoder.decode(decompressed);
			const { plugins } = JSON.parse(jsonString);
			Object.keys(installedPlugins()).forEach((id) => {
				removePlugin(id);
			});
			Object.entries(plugins).forEach(([id, plugin]) => {
				addLocalPlugin(id, plugin);
			});
			showToast({
				message: "Settings pulled successfully!",
				type: "success"
			});
		} catch (error) {
			console.error("Failed to pull settings:", error);
			showToast({
				message: error.message || "Failed to pull settings",
				type: "error"
			});
		} finally {
			setIsLoading(false);
		}
	};
	const handleDelete = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(`${store.apiUrl}/settings`, {
				method: "DELETE",
				headers: { Authorization: `Bearer ${store.accessToken}` }
			});
			if (!response.ok) {
				if (response.status === 401) {
					store.oauthVerified = false;
					store.accessToken = null;
					throw new Error("Authentication failed. Please reauthorize.");
				}
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			showToast({
				message: "Settings deleted successfully!",
				type: "success"
			});
		} catch (error) {
			console.error("Failed to delete settings:", error);
			showToast({
				message: error.message || "Failed to delete settings",
				type: "error"
			});
		} finally {
			setIsLoading(false);
		}
	};
	const toggleAutoSync = (newVal) => {
		store.autoSync = newVal;
		if (newVal) {
			if (syncIntervalId) clearInterval(syncIntervalId);
			syncIntervalId = window.setInterval(syncPlugins, SYNC_INTERVAL * 60 * 1e3);
		} else {
			if (syncIntervalId) clearInterval(syncIntervalId);
			syncIntervalId = null;
		}
	};
	const handleApiUrlChange = (value) => {
		setTempApiUrl(value);
		store.oauthVerified = false;
		store.accessToken = null;
	};
	const saveApiUrl = async () => {
		store.apiUrl = tempApiUrl();
		const verified = await checkOAuthSettings();
		store.oauthVerified = verified;
	};
	return [
		(0, import_web.createComponent)(Header, {
			get tag() {
				return HeaderTags.H2;
			},
			children: "Backend API URL"
		}),
		(0, import_web.createComponent)(Space, {}),
		(0, import_web.createComponent)(Header, {
			get tag() {
				return HeaderTags.H3;
			},
			children: "The URL of the sync backend. Don't change this unless you know what you're doing."
		}),
		(0, import_web.createComponent)(Space, {}),
		(0, import_web.createComponent)(Flex, { get children() {
			return [(0, import_web.createComponent)(TextBox, {
				get value() {
					return tempApiUrl();
				},
				onInput: handleApiUrlChange,
				placeholder: "Enter your sync backend URL (e.g. http://shelter.sync)"
			}), (0, import_web.createComponent)(Button, {
				get size() {
					return ButtonSizes.ICON;
				},
				onClick: saveApiUrl,
				get disabled() {
					return tempApiUrl() === store.apiUrl;
				},
				get children() {
					return (0, import_web.createComponent)(IconAdd, {});
				}
			})];
		} }),
		(0, import_web.createComponent)(Divider, {
			mt: true,
			mb: true
		}),
		(0, import_web.createComponent)(SwitchItem, {
			note: "Automatically sync your plugins and settings every 15 minutes",
			get value() {
				return store.autoSync;
			},
			onChange: toggleAutoSync,
			get disabled() {
				return !store.oauthVerified;
			},
			children: "Automatically sync"
		}),
		(0, import_web.createComponent)(Flex, {
			flexDirection: "row",
			justifyContent: "between",
			alignItems: "center",
			get children() {
				return [
					(0, import_web.createComponent)(Button, {
						get size() {
							return ButtonSizes.MEDIUM;
						},
						onClick: handleAuthorize,
						get disabled() {
							return isAuthorizing() || syncing() || isLoading() || !store.oauthVerified;
						},
						get look() {
							return ButtonLooks.FILLED;
						},
						get color() {
							return ButtonColors.GREEN;
						},
						get children() {
							return isAuthorizing() ? "Authorizing..." : store.oauthVerified ? "Unauthorize" : "Authorize";
						}
					}),
					(0, import_web.createComponent)(Space, {}),
					(0, import_web.createComponent)(Button, {
						get size() {
							return ButtonSizes.MEDIUM;
						},
						onClick: handleSync,
						get disabled() {
							return syncing() || isLoading() || !store.oauthVerified;
						},
						get children() {
							return syncing() ? "Syncing..." : "Sync Now";
						}
					}),
					(0, import_web.createComponent)(Space, {}),
					(0, import_web.createComponent)(Button, {
						get size() {
							return ButtonSizes.MEDIUM;
						},
						onClick: handlePull,
						get disabled() {
							return syncing() || isLoading() || !store.oauthVerified;
						},
						get children() {
							return isLoading() ? "Pulling..." : "Pull Data";
						}
					}),
					(0, import_web.createComponent)(Space, {}),
					(0, import_web.createComponent)(Button, {
						get size() {
							return ButtonSizes.MEDIUM;
						},
						onClick: handleDelete,
						get disabled() {
							return syncing() || isLoading() || !store.oauthVerified;
						},
						get color() {
							return ButtonColors.RED;
						},
						get look() {
							return ButtonLooks.OUTLINED;
						},
						get children() {
							return isLoading() ? "Deleting..." : "Delete Data";
						}
					})
				];
			}
		})
	];
}
async function onLoad() {
	if (store.autoSync && store.oauthVerified) syncIntervalId = window.setInterval(syncPlugins, SYNC_INTERVAL * 60 * 1e3);
	const verified = await checkOAuthSettings();
	store.oauthVerified = verified;
}
function onUnload() {
	if (syncIntervalId) {
		clearInterval(syncIntervalId);
		syncIntervalId = null;
	}
}

//#endregion
exports.onLoad = onLoad
exports.onUnload = onUnload
exports.settings = settings
return exports;
})({});