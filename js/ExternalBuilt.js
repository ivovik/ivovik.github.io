var FttbAccountStatus, PromisedPaymentStatus, UserType, BoardType, AwaiterStatus, UnauthorizedPopupStyle, UssErrorType, PayErrorReason, CtnStatus, SimpleUssRequestStatus, UssRequestStatus, CardRegHoldCheckStatus, ConfirmationMode, CardProcessingStatus, ImmediatePaymentNewCardStage, ImmediatePaymentStage, AutoPaymentStage, BindNewCardStage, AccessibilityType, AltLanPay, __extends;
Array.prototype.forEach || (Array.prototype.forEach = function (n, t) {
	var u,
	i,
	r,
	f,
	e;
	if (this == null)
		throw new TypeError(" this is null or not defined");
	if (r = Object(this), f = r.length >>> 0, typeof n != "function")
		throw new TypeError(n + " is not a function");
	for (arguments.length > 1 && (u = t), i = 0; i < f; )
		i in r && (e = r[i], n.call(u, e, i, r)), i++
});
Array.prototype.filter || (Array.prototype.filter = function (n) {
	"use strict";
	var i,
	f,
	r,
	e,
	t,
	u;
	if (this === void 0 || this === null)
		throw new TypeError;
	if (i = Object(this), f = i.length >>> 0, typeof n != "function")
		throw new TypeError;
	for (r = [], e = arguments[1], t = 0; t < f; t++)
		t in i && (u = i[t], n.call(e, u, t, i) && r.push(u));
	return r
});
Date.prototype.toISOString || function () {
	function n(n) {
		var t = String(n);
		return t.length === 1 && (t = "0" + t),
		t
	}
	Date.prototype.toISOString = function () {
		return this.getUTCFullYear() + "-" + n(this.getUTCMonth() + 1) + "-" + n(this.getUTCDate()) + "T" + n(this.getUTCHours()) + ":" + n(this.getUTCMinutes()) + ":" + n(this.getUTCSeconds()) + "." + String((this.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
	}
}
();
Array.prototype.map || (Array.prototype.map = function (n, t) {
	var e,
	u,
	i,
	r,
	f,
	o,
	s;
	if (this == null)
		throw new TypeError(" this is null or not defined");
	if (r = Object(this), f = r.length >>> 0, typeof n != "function")
		throw new TypeError(n + " is not a function");
	for (t && (e = t), u = new Array(f), i = 0; i < f; )
		i in r && (o = r[i], s = n.call(e, o, i, r), u[i] = s), i++;
	return u
});
Array.prototype.indexOf || (Array.prototype.indexOf = function (n, t) {
	for (var i = t || 0, r = this.length; i < r; i++)
		if (this[i] === n)
			return i;
	return -1
}), function (n, t) {
	"use strict";
	var r,
	i;
	n.uaMatch = function (n) {
		n = n.toLowerCase();
		var t = /(chrome)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || n.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
		return {
			browser : t[1] || "",
			version : t[2] || "0"
		}
	};
	n.browser || (r = n.uaMatch(t.navigator.userAgent), i = {}, r.browser && (i[r.browser] = !0, i.version = r.version), i.chrome ? i.webkit = !0 : i.webkit && (i.safari = !0), n.browser = i)
}
(jQuery, window), function (n) {
	typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? module.exports = n(require("jquery")) : n(jQuery)
}
(function (n) {
	if (!n.support.cors && n.ajaxTransport && window.XDomainRequest) {
		var t = /^https?:\/\//i,
		i = /^get|post$/i,
		r = new RegExp("^" + location.protocol, "i");
		n.ajaxTransport("* text html xml json", function (u, f) {
			if (u.crossDomain && u.async && i.test(u.type) && t.test(u.url) && r.test(u.url)) {
				var e = null;
				return {
					send : function (t, i) {
						var o = "",
						r = (f.dataType || "").toLowerCase();
						e = new XDomainRequest;
						/^\d+$/.test(f.timeout) && (e.timeout = f.timeout);
						e.ontimeout = function () {
							i(500, "timeout")
						};
						e.onload = function () {
							var o = "Content-Length: " + e.responseText.length + "\r\nContent-Type: " + e.contentType,
							u = {
								code : 200,
								message : "success"
							},
							f = {
								text : e.responseText
							},
							t;
							try {
								if (r === "html" || /text\/html/i.test(e.contentType))
									f.html = e.responseText;
								else if (r === "json" || r !== "text" && /\/json/i.test(e.contentType))
									try {
										f.json = n.parseJSON(e.responseText)
									} catch (h) {
										u.code = 500;
										u.message = "parseerror"
									}
								else if (r === "xml" || r !== "text" && /\/xml/i.test(e.contentType)) {
									t = new ActiveXObject("Microsoft.XMLDOM");
									t.async = !1;
									try {
										t.loadXML(e.responseText)
									} catch (h) {
										t = undefined
									}
									if (!t || !t.documentElement || t.getElementsByTagName("parsererror").length) {
										u.code = 500;
										u.message = "parseerror";
										throw "Invalid XML: " + e.responseText;
									}
									f.xml = t
								}
							} catch (s) {
								throw s;
							}
							finally {
								i(u.code, u.message, f, o)
							}
						};
						e.onprogress = function () {};
						e.onerror = function () {
							i(500, "error", {
								text : e.responseText
							})
						};
						f.data && (o = n.type(f.data) === "string" ? f.data : n.param(f.data));
						e.open(u.type, u.url);
						e.send(o)
					},
					abort : function () {
						e && e.abort()
					}
				}
			}
		})
	}
}), function (n) {
	function g(n, t, i) {
		switch (arguments.length) {
		case 2:
			return n != null ? n : t;
		case 3:
			return n != null ? n : t != null ? t : i;
		default:
			throw new Error("Implement me");
		}
	}
	function b(n, t) {
		return br.call(n, t)
	}
	function vt() {
		return {
			empty : !1,
			unusedTokens : [],
			unusedInput : [],
			overflow : -2,
			charsLeftOver : 0,
			nullInput : !1,
			invalidMonth : null,
			invalidFormat : !1,
			userInvalidated : !1,
			iso : !1
		}
	}
	function ai(n) {
		t.suppressDeprecationWarnings === !1 && typeof console != "undefined" && console.warn && console.warn("Deprecation warning: " + n)
	}
	function o(n, t) {
		var i = !0;
		return k(function () {
			return i && (ai(n), i = !1),
			t.apply(this, arguments)
		}, t)
	}
	function pu(n, t) {
		ci[n] || (ai(t), ci[n] = !0)
	}
	function vi(n, t) {
		return function (i) {
			return r(n.call(this, i), t)
		}
	}
	function wu(n, t) {
		return function (i) {
			return this.localeData().ordinal(n.call(this, i), t)
		}
	}
	function yi() {}

	function et(n, t) {
		t !== !1 && rr(n);
		pi(this, n);
		this._d = new Date(+n._d)
	}
	function yt(n) {
		var i = gi(n),
		r = i.year || 0,
		u = i.quarter || 0,
		f = i.month || 0,
		e = i.week || 0,
		o = i.day || 0,
		s = i.hour || 0,
		h = i.minute || 0,
		c = i.second || 0,
		l = i.millisecond || 0;
		this._milliseconds = +l + c * 1e3 + h * 6e4 + s * 36e5;
		this._days = +o + e * 7;
		this._months = +f + u * 3 + r * 12;
		this._data = {};
		this._locale = t.localeData();
		this._bubble()
	}
	function k(n, t) {
		for (var i in t)
			b(t, i) && (n[i] = t[i]);
		return b(t, "toString") && (n.toString = t.toString),
		b(t, "valueOf") && (n.valueOf = t.valueOf),
		n
	}
	function pi(n, t) {
		var u,
		i,
		r;
		if (typeof t._isAMomentObject != "undefined" && (n._isAMomentObject = t._isAMomentObject), typeof t._i != "undefined" && (n._i = t._i), typeof t._f != "undefined" && (n._f = t._f), typeof t._l != "undefined" && (n._l = t._l), typeof t._strict != "undefined" && (n._strict = t._strict), typeof t._tzm != "undefined" && (n._tzm = t._tzm), typeof t._isUTC != "undefined" && (n._isUTC = t._isUTC), typeof t._offset != "undefined" && (n._offset = t._offset), typeof t._pf != "undefined" && (n._pf = t._pf), typeof t._locale != "undefined" && (n._locale = t._locale), ut.length > 0)
			for (u in ut)
				i = ut[u], r = t[i], typeof r != "undefined" && (n[i] = r);
		return n
	}
	function s(n) {
		return n < 0 ? Math.ceil(n) : Math.floor(n)
	}
	function r(n, t, i) {
		for (var r = "" + Math.abs(n), u = n >= 0; r.length < t; )
			r = "0" + r;
		return (u ? i ? "+" : "" : "-") + r
	}
	function wi(n, t) {
		var i = {
			milliseconds : 0,
			months : 0
		};
		return i.months = t.month() - n.month() + (t.year() - n.year()) * 12,
		n.clone().add(i.months, "M").isAfter(t) && --i.months,
		i.milliseconds = +t - +n.clone().add(i.months, "M"),
		i
	}
	function bu(n, t) {
		var i;
		return t = st(t, n),
		n.isBefore(t) ? i = wi(n, t) : (i = wi(t, n), i.milliseconds = -i.milliseconds, i.months = -i.months),
		i
	}
	function bi(n, i) {
		return function (r, u) {
			var f,
			e;
			return u === null || isNaN(+u) || (pu(i, "moment()." + i + "(period, number) is deprecated. Please use moment()." + i + "(number, period)."), e = r, r = u, u = e),
			r = typeof r == "string" ? +r : r,
			f = t.duration(r, u),
			ki(this, f, n),
			this
		}
	}
	function ki(n, i, r, u) {
		var o = i._milliseconds,
		f = i._days,
		e = i._months;
		u = u == null ? !0 : u;
		o && n._d.setTime(+n._d + o * r);
		f && vr(n, "Date", gt(n, "Date") + f * r);
		e && ar(n, gt(n, "Month") + e * r);
		u && t.updateOffset(n, f || e)
	}
	function ot(n) {
		return Object.prototype.toString.call(n) === "[object Array]"
	}
	function ku(n) {
		return Object.prototype.toString.call(n) === "[object Date]" || n instanceof Date
	}
	function di(n, t, r) {
		for (var e = Math.min(n.length, t.length), o = Math.abs(n.length - t.length), f = 0, u = 0; u < e; u++)
			(r && n[u] !== t[u] || !r && i(n[u]) !== i(t[u])) && f++;
		return f + o
	}
	function f(n) {
		if (n) {
			var t = n.toLowerCase().replace(/(.)s$/, "$1");
			n = vu[n] || yu[t] || t
		}
		return n
	}
	function gi(n) {
		var r = {},
		t;
		for (var i in n)
			b(n, i) && (t = f(i), t && (r[t] = n[i]));
		return r
	}
	function du(i) {
		var r,
		u;
		if (i.indexOf("week") === 0)
			r = 7, u = "day";
		else if (i.indexOf("month") === 0)
			r = 12, u = "month";
		else
			return;
		t[i] = function (f, e) {
			var o,
			s,
			c = t._locale[i],
			h = [];
			if (typeof f == "number" && (e = f, f = n), s = function (n) {
				var i = t().utc().set(u, n);
				return c.call(t._locale, i, f || "")
			}, e != null)
				return s(e);
			for (o = 0; o < r; o++)
				h.push(s(o));
			return h
		}
	}
	function i(n) {
		var t = +n,
		i = 0;
		return t !== 0 && isFinite(t) && (i = t >= 0 ? Math.floor(t) : Math.ceil(t)),
		i
	}
	function pt(n, t) {
		return new Date(Date.UTC(n, t + 1, 0)).getUTCDate()
	}
	function nr(n, i, r) {
		return d(t([n, 11, 31 + i - r]), i, r).week
	}
	function tr(n) {
		return ir(n) ? 366 : 365
	}
	function ir(n) {
		return n % 4 == 0 && n % 100 != 0 || n % 400 == 0
	}
	function rr(n) {
		var t;
		n._a && n._pf.overflow === -2 && (t = n._a[c] < 0 || n._a[c] > 11 ? c : n._a[e] < 1 || n._a[e] > pt(n._a[h], n._a[c]) ? e : n._a[l] < 0 || n._a[l] > 23 ? l : n._a[nt] < 0 || n._a[nt] > 59 ? nt : n._a[tt] < 0 || n._a[tt] > 59 ? tt : n._a[it] < 0 || n._a[it] > 999 ? it : -1, n._pf._overflowDayOfYear && (t < h || t > e) && (t = e), n._pf.overflow = t)
	}
	function ur(n) {
		return n._isValid == null && (n._isValid = !isNaN(n._d.getTime()) && n._pf.overflow < 0 && !n._pf.empty && !n._pf.invalidMonth && !n._pf.nullInput && !n._pf.invalidFormat && !n._pf.userInvalidated, n._strict && (n._isValid = n._isValid && n._pf.charsLeftOver === 0 && n._pf.unusedTokens.length === 0)),
		n._isValid
	}
	function fr(n) {
		return n ? n.toLowerCase().replace("_", "-") : n
	}
	function gu(n) {
		for (var r = 0, i, t, f, u; r < n.length; ) {
			for (u = fr(n[r]).split("-"), i = u.length, t = fr(n[r + 1]), t = t ? t.split("-") : null; i > 0; ) {
				if (f = er(u.slice(0, i).join("-")), f)
					return f;
				if (t && t.length >= i && di(u, t, !0) >= i - 1)
					break;
				i--
			}
			r++
		}
		return null
	}
	function er(n) {
		var i = null;
		if (!w[n] && ti)
			try {
				i = t.locale();
				require("./locale/" + n);
				t.locale(i)
			} catch (r) {}

		return w[n]
	}
	function st(n, i) {
		return i._isUTC ? t(n).zone(i._offset || 0) : t(n).local()
	}
	function nf(n) {
		return n.match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "")
	}
	function tf(n) {
		for (var i = n.match(ii), t = 0, r = i.length; t < r; t++)
			i[t] = a[i[t]] ? a[i[t]] : nf(i[t]);
		return function (u) {
			var f = "";
			for (t = 0; t < r; t++)
				f += i[t]instanceof Function ? i[t].call(u, n) : i[t];
			return f
		}
	}
	function wt(n, t) {
		return n.isValid() ? (t = or(t, n.localeData()), at[t] || (at[t] = tf(t)), at[t](n)) : n.localeData().invalidDate()
	}
	function or(n, t) {
		function r(n) {
			return t.longDateFormat(n) || n
		}
		var i = 5;
		for (ft.lastIndex = 0; i >= 0 && ft.test(n); )
			n = n.replace(ft, r), ft.lastIndex = 0, i -= 1;
		return n
	}
	function rf(n, t) {
		var i = t._strict;
		switch (n) {
		case "Q":
			return ui;
		case "DDDD":
			return ei;
		case "YYYY":
		case "GGGG":
		case "gggg":
			return i ? su : tu;
		case "Y":
		case "G":
		case "g":
			return cu;
		case "YYYYYY":
		case "YYYYY":
		case "GGGGG":
		case "ggggg":
			return i ? hu : iu;
		case "S":
			if (i)
				return ui;
		case "SS":
			if (i)
				return fi;
		case "SSS":
			if (i)
				return ei;
		case "DDD":
			return nu;
		case "MMM":
		case "MMMM":
		case "dd":
		case "ddd":
		case "dddd":
			return uu;
		case "a":
		case "A":
			return t._locale._meridiemParse;
		case "X":
			return eu;
		case "Z":
		case "ZZ":
			return ht;
		case "T":
			return fu;
		case "SSSS":
			return ru;
		case "MM":
		case "DD":
		case "YY":
		case "GG":
		case "gg":
		case "HH":
		case "hh":
		case "mm":
		case "ss":
		case "ww":
		case "WW":
			return i ? fi : ri;
		case "M":
		case "D":
		case "d":
		case "H":
		case "h":
		case "m":
		case "s":
		case "w":
		case "W":
		case "e":
		case "E":
			return ri;
		case "Do":
			return ou;
		default:
			return new RegExp(hf(sf(n.replace("\\", "")), "i"))
		}
	}
	function sr(n) {
		n = n || "";
		var r = n.match(ht) || [],
		f = r[r.length - 1] || [],
		t = (f + "").match(au) || ["-", 0, 0],
		u =  + (t[1] * 60) + i(t[2]);
		return t[0] === "+" ? -u : u
	}
	function uf(n, r, u) {
		var o,
		f = u._a;
		switch (n) {
		case "Q":
			r != null && (f[c] = (i(r) - 1) * 3);
			break;
		case "M":
		case "MM":
			r != null && (f[c] = i(r) - 1);
			break;
		case "MMM":
		case "MMMM":
			o = u._locale.monthsParse(r);
			o != null ? f[c] = o : u._pf.invalidMonth = r;
			break;
		case "D":
		case "DD":
			r != null && (f[e] = i(r));
			break;
		case "Do":
			r != null && (f[e] = i(parseInt(r, 10)));
			break;
		case "DDD":
		case "DDDD":
			r != null && (u._dayOfYear = i(r));
			break;
		case "YY":
			f[h] = t.parseTwoDigitYear(r);
			break;
		case "YYYY":
		case "YYYYY":
		case "YYYYYY":
			f[h] = i(r);
			break;
		case "a":
		case "A":
			u._isPm = u._locale.isPM(r);
			break;
		case "H":
		case "HH":
		case "h":
		case "hh":
			f[l] = i(r);
			break;
		case "m":
		case "mm":
			f[nt] = i(r);
			break;
		case "s":
		case "ss":
			f[tt] = i(r);
			break;
		case "S":
		case "SS":
		case "SSS":
		case "SSSS":
			f[it] = i(("0." + r) * 1e3);
			break;
		case "X":
			u._d = new Date(parseFloat(r) * 1e3);
			break;
		case "Z":
		case "ZZ":
			u._useUTC = !0;
			u._tzm = sr(r);
			break;
		case "dd":
		case "ddd":
		case "dddd":
			o = u._locale.weekdaysParse(r);
			o != null ? (u._w = u._w || {}, u._w.d = o) : u._pf.invalidWeekday = r;
			break;
		case "w":
		case "ww":
		case "W":
		case "WW":
		case "d":
		case "e":
		case "E":
			n = n.substr(0, 1);
		case "gggg":
		case "GGGG":
		case "GGGGG":
			n = n.substr(0, 2);
			r && (u._w = u._w || {}, u._w[n] = i(r));
			break;
		case "gg":
		case "GG":
			u._w = u._w || {};
			u._w[n] = t.parseTwoDigitYear(r)
		}
	}
	function ff(n) {
		var i,
		o,
		f,
		u,
		r,
		e,
		s;
		i = n._w;
		i.GG != null || i.W != null || i.E != null ? (r = 1, e = 4, o = g(i.GG, n._a[h], d(t(), 1, 4).year), f = g(i.W, 1), u = g(i.E, 1)) : (r = n._locale._week.dow, e = n._locale._week.doy, o = g(i.gg, n._a[h], d(t(), r, e).year), f = g(i.w, 1), i.d != null ? (u = i.d, u < r && ++f) : u = i.e != null ? i.e + r : r);
		s = kf(o, f, u, e, r);
		n._a[h] = s.year;
		n._dayOfYear = s.dayOfYear
	}
	function bt(n) {
		var t,
		i,
		r = [],
		u,
		f;
		if (!n._d) {
			for (u = of(n), n._w && n._a[e] == null && n._a[c] == null && ff(n), n._dayOfYear && (f = g(n._a[h], u[h]), n._dayOfYear > tr(f) && (n._pf._overflowDayOfYear = !0), i = dt(f, 0, n._dayOfYear), n._a[c] = i.getUTCMonth(), n._a[e] = i.getUTCDate()), t = 0; t < 3 && n._a[t] == null; ++t)
				n._a[t] = r[t] = u[t];
			for (; t < 7; t++)
				n._a[t] = r[t] = n._a[t] == null ? t === 2 ? 1 : 0 : n._a[t];
			n._d = (n._useUTC ? dt : yf).apply(null, r);
			n._tzm != null && n._d.setUTCMinutes(n._d.getUTCMinutes() + n._tzm)
		}
	}
	function ef(n) {
		var t;
		n._d || (t = gi(n._i), n._a = [t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond], bt(n))
	}
	function of(n) {
		var t = new Date;
		return n._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
	}
	function kt(n) {
		if (n._f === t.ISO_8601) {
			hr(n);
			return
		}
		n._a = [];
		n._pf.empty = !0;
		for (var i = "" + n._i, r, u, o, h = i.length, s = 0, e = or(n._f, n._locale).match(ii) || [], f = 0; f < e.length; f++)
			u = e[f], r = (i.match(rf(u, n)) || [])[0], r && (o = i.substr(0, i.indexOf(r)), o.length > 0 && n._pf.unusedInput.push(o), i = i.slice(i.indexOf(r) + r.length), s += r.length), a[u] ? (r ? n._pf.empty = !1 : n._pf.unusedTokens.push(u), uf(u, r, n)) : n._strict && !r && n._pf.unusedTokens.push(u);
		n._pf.charsLeftOver = h - s;
		i.length > 0 && n._pf.unusedInput.push(i);
		n._isPm && n._a[l] < 12 && (n._a[l] += 12);
		n._isPm === !1 && n._a[l] === 12 && (n._a[l] = 0);
		bt(n);
		rr(n)
	}
	function sf(n) {
		return n.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (n, t, i, r, u) {
			return t || i || r || u
		})
	}
	function hf(n) {
		return n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
	}
	function cf(n) {
		var t,
		f,
		u,
		r,
		i;
		if (n._f.length === 0) {
			n._pf.invalidFormat = !0;
			n._d = new Date(NaN);
			return
		}
		for (r = 0; r < n._f.length; r++)
			(i = 0, t = pi({}, n), n._useUTC != null && (t._useUTC = n._useUTC), t._pf = vt(), t._f = n._f[r], kt(t), ur(t)) && (i += t._pf.charsLeftOver, i += t._pf.unusedTokens.length * 10, t._pf.score = i, (u == null || i < u) && (u = i, f = t));
		k(n, f || t)
	}
	function hr(n) {
		var t,
		i,
		r = n._i,
		u = lu.exec(r);
		if (u) {
			for (n._pf.iso = !0, t = 0, i = ct.length; t < i; t++)
				if (ct[t][1].exec(r)) {
					n._f = ct[t][0] + (u[6] || " ");
					break
				}
			for (t = 0, i = lt.length; t < i; t++)
				if (lt[t][1].exec(r)) {
					n._f += lt[t][0];
					break
				}
			r.match(ht) && (n._f += "Z");
			kt(n)
		} else
			n._isValid = !1
	}
	function lf(n) {
		hr(n);
		n._isValid === !1 && (delete n._isValid, t.createFromInputFallback(n))
	}
	function af(n, t) {
		for (var r = [], i = 0; i < n.length; ++i)
			r.push(t(n[i], i));
		return r
	}
	function vf(i) {
		var r = i._i,
		u;
		r === n ? i._d = new Date : ku(r) ? i._d = new Date(+r) : (u = kr.exec(r)) !== null ? i._d = new Date(+u[1]) : typeof r == "string" ? lf(i) : ot(r) ? (i._a = af(r.slice(0), function (n) {
						return parseInt(n, 10)
					}), bt(i)) : typeof r == "object" ? ef(i) : typeof r == "number" ? i._d = new Date(r) : t.createFromInputFallback(i)
	}
	function yf(n, t, i, r, u, f, e) {
		var o = new Date(n, t, i, r, u, f, e);
		return n < 1970 && o.setFullYear(n),
		o
	}
	function dt(n) {
		var t = new Date(Date.UTC.apply(null, arguments));
		return n < 1970 && t.setUTCFullYear(n),
		t
	}
	function pf(n, t) {
		if (typeof n == "string")
			if (isNaN(n)) {
				if (n = t.weekdaysParse(n), typeof n != "number")
					return null
			} else
				n = parseInt(n, 10);
		return n
	}
	function wf(n, t, i, r, u) {
		return u.relativeTime(t || 1, !!i, n, r)
	}
	function bf(n, i, r) {
		var u = t.duration(n).abs(),
		c = p(u.as("s")),
		e = p(u.as("m")),
		o = p(u.as("h")),
		s = p(u.as("d")),
		h = p(u.as("M")),
		l = p(u.as("y")),
		f = c < y.s && ["s", c] || e === 1 && ["m"] || e < y.m && ["mm", e] || o === 1 && ["h"] || o < y.h && ["hh", o] || s === 1 && ["d"] || s < y.d && ["dd", s] || h === 1 && ["M"] || h < y.M && ["MM", h] || l === 1 && ["y"] || ["yy", l];
		return f[2] = i,
		f[3] = +n > 0,
		f[4] = r,
		wf.apply({}, f)
	}
	function d(n, i, r) {
		var e = r - i,
		u = r - n.day(),
		f;
		return u > e && (u -= 7),
		u < e - 7 && (u += 7),
		f = t(n).add(u, "d"), {
			week : Math.ceil(f.dayOfYear() / 7),
			year : f.year()
		}
	}
	function kf(n, t, i, r, u) {
		var f = dt(n, 0, 1).getUTCDay(),
		o,
		e;
		return f = f === 0 ? 7 : f,
		i = i != null ? i : u,
		o = u - f + (f > r ? 7 : 0) - (f < u ? 7 : 0),
		e = 7 * (t - 1) + (i - u) + o + 1, {
			year : e > 0 ? n : n - 1,
			dayOfYear : e > 0 ? e : tr(n - 1) + e
		}
	}
	function cr(i) {
		var r = i._i,
		u = i._f;
		return (i._locale = i._locale || t.localeData(i._l), r === null || u === n && r === "") ? t.invalid({
			nullInput : !0
		}) : (typeof r == "string" && (i._i = r = i._locale.preparse(r)), t.isMoment(r)) ? new et(r, !0) : (u ? ot(u) ? cf(i) : kt(i) : vf(i), new et(i))
	}
	function lr(n, i) {
		var u,
		r;
		if (i.length === 1 && ot(i[0]) && (i = i[0]), !i.length)
			return t();
		for (u = i[0], r = 1; r < i.length; ++r)
			i[r][n](u) && (u = i[r]);
		return u
	}
	function ar(n, t) {
		var i;
		return typeof t == "string" && (t = n.localeData().monthsParse(t), typeof t != "number") ? n : (i = Math.min(n.date(), pt(n.year(), t)), n._d["set" + (n._isUTC ? "UTC" : "") + "Month"](t, i), n)
	}
	function gt(n, t) {
		return n._d["get" + (n._isUTC ? "UTC" : "") + t]()
	}
	function vr(n, t, i) {
		return t === "Month" ? ar(n, i) : n._d["set" + (n._isUTC ? "UTC" : "") + t](i)
	}
	function v(n, i) {
		return function (r) {
			return r != null ? (vr(this, n, r), t.updateOffset(this, i), this) : gt(this, n)
		}
	}
	function yr(n) {
		return n * 400 / 146097
	}
	function pr(n) {
		return n * 146097 / 400
	}
	function df(n) {
		t.duration.fn[n] = function () {
			return this._data[n]
		}
	}
	function wr(n) {
		typeof ender == "undefined" && (ni = rt.moment, rt.moment = n ? o("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", t) : t)
	}
	for (var t, rt = typeof global != "undefined" ? global : this, ni, p = Math.round, br = Object.prototype.hasOwnProperty, u, h = 0, c = 1, e = 2, l = 3, nt = 4, tt = 5, it = 6, w = {}, ut = [], ti = typeof module != "undefined" && module.exports, kr = /^\/?Date\((\-?\d+)/i, dr = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, gr = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, ii = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, ft = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, ri = /\d\d?/, nu = /\d{1,3}/, tu = /\d{1,4}/, iu = /[+\-]?\d{1,6}/, ru = /\d+/, uu = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, ht = /Z|[\+\-]\d\d:?\d\d/gi, fu = /T/i, eu = /[\+\-]?\d+(\.\d{1,3})?/, ou = /\d{1,2}/, ui = /\d/, fi = /\d\d/, ei = /\d{3}/, su = /\d{4}/, hu = /[+-]?\d{6}/, cu = /[+-]?\d+/, lu = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ct = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], lt = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], au = /([\+\-]|\d\d)/gi, gf = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), oi = {
			Milliseconds : 1,
			Seconds : 1e3,
			Minutes : 6e4,
			Hours : 36e5,
			Days : 864e5,
			Months : 2592e6,
			Years : 31536e6
		}, vu = {
			ms : "millisecond",
			s : "second",
			m : "minute",
			h : "hour",
			d : "day",
			D : "date",
			w : "week",
			W : "isoWeek",
			M : "month",
			Q : "quarter",
			y : "year",
			DDD : "dayOfYear",
			e : "weekday",
			E : "isoWeekday",
			gg : "weekYear",
			GG : "isoWeekYear"
		}, yu = {
			dayofyear : "dayOfYear",
			isoweekday : "isoWeekday",
			isoweek : "isoWeek",
			weekyear : "weekYear",
			isoweekyear : "isoWeekYear"
		}, at = {}, y = {
			s : 45,
			m : 45,
			h : 22,
			d : 26,
			M : 11
		}, si = "DDD w W M D d".split(" "), hi = "M D H h m s w W".split(" "), a = {
			M : function () {
				return this.month() + 1
			},
			MMM : function (n) {
				return this.localeData().monthsShort(this, n)
			},
			MMMM : function (n) {
				return this.localeData().months(this, n)
			},
			D : function () {
				return this.date()
			},
			DDD : function () {
				return this.dayOfYear()
			},
			d : function () {
				return this.day()
			},
			dd : function (n) {
				return this.localeData().weekdaysMin(this, n)
			},
			ddd : function (n) {
				return this.localeData().weekdaysShort(this, n)
			},
			dddd : function (n) {
				return this.localeData().weekdays(this, n)
			},
			w : function () {
				return this.week()
			},
			W : function () {
				return this.isoWeek()
			},
			YY : function () {
				return r(this.year() % 100, 2)
			},
			YYYY : function () {
				return r(this.year(), 4)
			},
			YYYYY : function () {
				return r(this.year(), 5)
			},
			YYYYYY : function () {
				var n = this.year(),
				t = n >= 0 ? "+" : "-";
				return t + r(Math.abs(n), 6)
			},
			gg : function () {
				return r(this.weekYear() % 100, 2)
			},
			gggg : function () {
				return r(this.weekYear(), 4)
			},
			ggggg : function () {
				return r(this.weekYear(), 5)
			},
			GG : function () {
				return r(this.isoWeekYear() % 100, 2)
			},
			GGGG : function () {
				return r(this.isoWeekYear(), 4)
			},
			GGGGG : function () {
				return r(this.isoWeekYear(), 5)
			},
			e : function () {
				return this.weekday()
			},
			E : function () {
				return this.isoWeekday()
			},
			a : function () {
				return this.localeData().meridiem(this.hours(), this.minutes(), !0)
			},
			A : function () {
				return this.localeData().meridiem(this.hours(), this.minutes(), !1)
			},
			H : function () {
				return this.hours()
			},
			h : function () {
				return this.hours() % 12 || 12
			},
			m : function () {
				return this.minutes()
			},
			s : function () {
				return this.seconds()
			},
			S : function () {
				return i(this.milliseconds() / 100)
			},
			SS : function () {
				return r(i(this.milliseconds() / 10), 2)
			},
			SSS : function () {
				return r(this.milliseconds(), 3)
			},
			SSSS : function () {
				return r(this.milliseconds(), 3)
			},
			Z : function () {
				var n = -this.zone(),
				t = "+";
				return n < 0 && (n = -n, t = "-"),
				t + r(i(n / 60), 2) + ":" + r(i(n) % 60, 2)
			},
			ZZ : function () {
				var n = -this.zone(),
				t = "+";
				return n < 0 && (n = -n, t = "-"),
				t + r(i(n / 60), 2) + r(i(n) % 60, 2)
			},
			z : function () {
				return this.zoneAbbr()
			},
			zz : function () {
				return this.zoneName()
			},
			X : function () {
				return this.unix()
			},
			Q : function () {
				return this.quarter()
			}
		}, ci = {}, li = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; si.length; )
		u = si.pop(), a[u + "o"] = wu(a[u], u);
	while (hi.length)
		u = hi.pop(), a[u + u] = vi(a[u], 2);
	for (a.DDDD = vi(a.DDD, 3), k(yi.prototype, {
			set : function (n) {
				var t;
				for (var i in n)
					t = n[i], typeof t == "function" ? this[i] = t : this["_" + i] = t
			},
			_months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			months : function (n) {
				return this._months[n.month()]
			},
			_monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			monthsShort : function (n) {
				return this._monthsShort[n.month()]
			},
			monthsParse : function (n) {
				var i,
				r,
				u;
				for (this._monthsParse || (this._monthsParse = []), i = 0; i < 12; i++)
					if (this._monthsParse[i] || (r = t.utc([2e3, i]), u = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(u.replace(".", ""), "i")), this._monthsParse[i].test(n))
						return i
			},
			_weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdays : function (n) {
				return this._weekdays[n.day()]
			},
			_weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysShort : function (n) {
				return this._weekdaysShort[n.day()]
			},
			_weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			weekdaysMin : function (n) {
				return this._weekdaysMin[n.day()]
			},
			weekdaysParse : function (n) {
				var i,
				r,
				u;
				for (this._weekdaysParse || (this._weekdaysParse = []), i = 0; i < 7; i++)
					if (this._weekdaysParse[i] || (r = t([2e3, 1]).day(i), u = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(u.replace(".", ""), "i")), this._weekdaysParse[i].test(n))
						return i
			},
			_longDateFormat : {
				LT : "h:mm A",
				L : "MM/DD/YYYY",
				LL : "MMMM D, YYYY",
				LLL : "MMMM D, YYYY LT",
				LLLL : "dddd, MMMM D, YYYY LT"
			},
			longDateFormat : function (n) {
				var t = this._longDateFormat[n];
				return !t && this._longDateFormat[n.toUpperCase()] && (t = this._longDateFormat[n.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (n) {
							return n.slice(1)
						}), this._longDateFormat[n] = t),
				t
			},
			isPM : function (n) {
				return (n + "").toLowerCase().charAt(0) === "p"
			},
			_meridiemParse : /[ap]\.?m?\.?/i,
			meridiem : function (n, t, i) {
				return n > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
			},
			_calendar : {
				sameDay : "[Today at] LT",
				nextDay : "[Tomorrow at] LT",
				nextWeek : "dddd [at] LT",
				lastDay : "[Yesterday at] LT",
				lastWeek : "[Last] dddd [at] LT",
				sameElse : "L"
			},
			calendar : function (n, t) {
				var i = this._calendar[n];
				return typeof i == "function" ? i.apply(t) : i
			},
			_relativeTime : {
				future : "in %s",
				past : "%s ago",
				s : "a few seconds",
				m : "a minute",
				mm : "%d minutes",
				h : "an hour",
				hh : "%d hours",
				d : "a day",
				dd : "%d days",
				M : "a month",
				MM : "%d months",
				y : "a year",
				yy : "%d years"
			},
			relativeTime : function (n, t, i, r) {
				var u = this._relativeTime[i];
				return typeof u == "function" ? u(n, t, i, r) : u.replace(/%d/i, n)
			},
			pastFuture : function (n, t) {
				var i = this._relativeTime[n > 0 ? "future" : "past"];
				return typeof i == "function" ? i(t) : i.replace(/%s/i, t)
			},
			ordinal : function (n) {
				return this._ordinal.replace("%d", n)
			},
			_ordinal : "%d",
			preparse : function (n) {
				return n
			},
			postformat : function (n) {
				return n
			},
			week : function (n) {
				return d(n, this._week.dow, this._week.doy).week
			},
			_week : {
				dow : 0,
				doy : 6
			},
			_invalidDate : "Invalid date",
			invalidDate : function () {
				return this._invalidDate
			}
		}), t = function (t, i, r, u) {
		var f;
		return typeof r == "boolean" && (u = r, r = n),
		f = {},
		f._isAMomentObject = !0,
		f._i = t,
		f._f = i,
		f._l = r,
		f._strict = u,
		f._isUTC = !1,
		f._pf = vt(),
		cr(f)
	}, t.suppressDeprecationWarnings = !1, t.createFromInputFallback = o("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (n) {
				n._d = new Date(n._i)
			}), t.min = function () {
		var n = [].slice.call(arguments, 0);
		return lr("isBefore", n)
	}, t.max = function () {
		var n = [].slice.call(arguments, 0);
		return lr("isAfter", n)
	}, t.utc = function (t, i, r, u) {
		var f;
		return typeof r == "boolean" && (u = r, r = n),
		f = {},
		f._isAMomentObject = !0,
		f._useUTC = !0,
		f._isUTC = !0,
		f._l = r,
		f._i = t,
		f._f = i,
		f._strict = u,
		f._pf = vt(),
		cr(f).utc()
	}, t.unix = function (n) {
		return t(n * 1e3)
	}, t.duration = function (n, r) {
		var f = n,
		u = null,
		o,
		h,
		s,
		c;
		return t.isDuration(n) ? f = {
			ms : n._milliseconds,
			d : n._days,
			M : n._months
		}
		 : typeof n == "number" ? (f = {}, r ? f[r] = n : f.milliseconds = n) : (u = dr.exec(n)) ? (o = u[1] === "-" ? -1 : 1, f = {
				y : 0,
				d : i(u[e]) * o,
				h : i(u[l]) * o,
				m : i(u[nt]) * o,
				s : i(u[tt]) * o,
				ms : i(u[it]) * o
			}) : (u = gr.exec(n)) ? (o = u[1] === "-" ? -1 : 1, s = function (n) {
			var t = n && parseFloat(n.replace(",", "."));
			return (isNaN(t) ? 0 : t) * o
		}, f = {
				y : s(u[2]),
				M : s(u[3]),
				d : s(u[4]),
				h : s(u[5]),
				m : s(u[6]),
				s : s(u[7]),
				w : s(u[8])
			}) : typeof f == "object" && ("from" in f || "to" in f) && (c = bu(t(f.from), t(f.to)), f = {}, f.ms = c.milliseconds, f.M = c.months),
		h = new yt(f),
		t.isDuration(n) && b(n, "_locale") && (h._locale = n._locale),
		h
	}, t.version = "2.8.3", t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.ISO_8601 = function () {}, t.momentProperties = ut, t.updateOffset = function () {}, t.relativeTimeThreshold = function (t, i) {
		return y[t] === n ? !1 : i === n ? y[t] : (y[t] = i, !0)
	}, t.lang = o("moment.lang is deprecated. Use moment.locale instead.", function (n, i) {
				return t.locale(n, i)
			}), t.locale = function (n, i) {
		var r;
		return n && (r = typeof i != "undefined" ? t.defineLocale(n, i) : t.localeData(n), r && (t.duration._locale = t._locale = r)),
		t._locale._abbr
	}, t.defineLocale = function (n, i) {
		return i !== null ? (i.abbr = n, w[n] || (w[n] = new yi), w[n].set(i), t.locale(n), w[n]) : (delete w[n], null)
	}, t.langData = o("moment.langData is deprecated. Use moment.localeData instead.", function (n) {
				return t.localeData(n)
			}), t.localeData = function (n) {
		var i;
		if (n && n._locale && n._locale._abbr && (n = n._locale._abbr), !n)
			return t._locale;
		if (!ot(n)) {
			if (i = er(n), i)
				return i;
			n = [n]
		}
		return gu(n)
	}, t.isMoment = function (n) {
		return n instanceof et || n != null && b(n, "_isAMomentObject")
	}, t.isDuration = function (n) {
		return n instanceof yt
	}, u = li.length - 1; u >= 0; --u)
		du(li[u]);
	t.normalizeUnits = function (n) {
		return f(n)
	};
	t.invalid = function (n) {
		var i = t.utc(NaN);
		return n != null ? k(i._pf, n) : i._pf.userInvalidated = !0,
		i
	};
	t.parseZone = function () {
		return t.apply(null, arguments).parseZone()
	};
	t.parseTwoDigitYear = function (n) {
		return i(n) + (i(n) > 68 ? 1900 : 2e3)
	};
	k(t.fn = et.prototype, {
		clone : function () {
			return t(this)
		},
		valueOf : function () {
			return +this._d + (this._offset || 0) * 6e4
		},
		unix : function () {
			return Math.floor(+this / 1e3)
		},
		toString : function () {
			return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
		},
		toDate : function () {
			return this._offset ? new Date(+this) : this._d
		},
		toISOString : function () {
			var n = t(this).utc();
			return 0 < n.year() && n.year() <= 9999 ? wt(n, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : wt(n, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
		},
		toArray : function () {
			var n = this;
			return [n.year(), n.month(), n.date(), n.hours(), n.minutes(), n.seconds(), n.milliseconds()]
		},
		isValid : function () {
			return ur(this)
		},
		isDSTShifted : function () {
			return this._a ? this.isValid() && di(this._a, (this._isUTC ? t.utc(this._a) : t(this._a)).toArray()) > 0 : !1
		},
		parsingFlags : function () {
			return k({}, this._pf)
		},
		invalidAt : function () {
			return this._pf.overflow
		},
		utc : function (n) {
			return this.zone(0, n)
		},
		local : function (n) {
			return this._isUTC && (this.zone(0, n), this._isUTC = !1, n && this.add(this._dateTzOffset(), "m")),
			this
		},
		format : function (n) {
			var i = wt(this, n || t.defaultFormat);
			return this.localeData().postformat(i)
		},
		add : bi(1, "add"),
		subtract : bi(-1, "subtract"),
		diff : function (n, i, r) {
			var u = st(n, this),
			c = (this.zone() - u.zone()) * 6e4,
			e,
			o,
			h;
			return i = f(i),
			i === "year" || i === "month" ? (e = (this.daysInMonth() + u.daysInMonth()) * 432e5, o = (this.year() - u.year()) * 12 + (this.month() - u.month()), h = this - t(this).startOf("month") - (u - t(u).startOf("month")), h -= (this.zone() - t(this).startOf("month").zone() - (u.zone() - t(u).startOf("month").zone())) * 6e4, o += h / e, i === "year" && (o = o / 12)) : (e = this - u, o = i === "second" ? e / 1e3 : i === "minute" ? e / 6e4 : i === "hour" ? e / 36e5 : i === "day" ? (e - c) / 864e5 : i === "week" ? (e - c) / 6048e5 : e),
			r ? o : s(o)
		},
		from : function (n, i) {
			return t.duration({
				to : this,
				from : n
			}).locale(this.locale()).humanize(!i)
		},
		fromNow : function (n) {
			return this.from(t(), n)
		},
		calendar : function (n) {
			var r = n || t(),
			u = st(r, this).startOf("day"),
			i = this.diff(u, "days", !0),
			f = i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse";
			return this.format(this.localeData().calendar(f, this))
		},
		isLeapYear : function () {
			return ir(this.year())
		},
		isDST : function () {
			return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
		},
		day : function (n) {
			var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
			return n != null ? (n = pf(n, this.localeData()), this.add(n - t, "d")) : t
		},
		month : v("Month", !0),
		startOf : function (n) {
			n = f(n);
			switch (n) {
			case "year":
				this.month(0);
			case "quarter":
			case "month":
				this.date(1);
			case "week":
			case "isoWeek":
			case "day":
				this.hours(0);
			case "hour":
				this.minutes(0);
			case "minute":
				this.seconds(0);
			case "second":
				this.milliseconds(0)
			}
			return n === "week" ? this.weekday(0) : n === "isoWeek" && this.isoWeekday(1),
			n === "quarter" && this.month(Math.floor(this.month() / 3) * 3),
			this
		},
		endOf : function (n) {
			return n = f(n),
			this.startOf(n).add(1, n === "isoWeek" ? "week" : n).subtract(1, "ms")
		},
		isAfter : function (n, i) {
			return i = f(typeof i != "undefined" ? i : "millisecond"),
			i === "millisecond" ? (n = t.isMoment(n) ? n : t(n), +this > +n) : +this.clone().startOf(i) > +t(n).startOf(i)
		},
		isBefore : function (n, i) {
			return i = f(typeof i != "undefined" ? i : "millisecond"),
			i === "millisecond" ? (n = t.isMoment(n) ? n : t(n), +this < +n) : +this.clone().startOf(i) < +t(n).startOf(i)
		},
		isSame : function (n, i) {
			return i = f(i || "millisecond"),
			i === "millisecond" ? (n = t.isMoment(n) ? n : t(n), +this == +n) : +this.clone().startOf(i) == +st(n, this).startOf(i)
		},
		min : o("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function (n) {
			return n = t.apply(null, arguments),
			n < this ? this : n
		}),
		max : o("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function (n) {
			return n = t.apply(null, arguments),
			n > this ? this : n
		}),
		zone : function (n, i) {
			var r = this._offset || 0,
			u;
			if (n != null)
				typeof n == "string" && (n = sr(n)), Math.abs(n) < 16 && (n = n * 60), !this._isUTC && i && (u = this._dateTzOffset()), this._offset = n, this._isUTC = !0, u != null && this.subtract(u, "m"), r !== n && (!i || this._changeInProgress ? ki(this, t.duration(r - n, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null));
			else
				return this._isUTC ? r : this._dateTzOffset();
			return this
		},
		zoneAbbr : function () {
			return this._isUTC ? "UTC" : ""
		},
		zoneName : function () {
			return this._isUTC ? "Coordinated Universal Time" : ""
		},
		parseZone : function () {
			return this._tzm ? this.zone(this._tzm) : typeof this._i == "string" && this.zone(this._i),
			this
		},
		hasAlignedHourOffset : function (n) {
			return n = n ? t(n).zone() : 0,
			(this.zone() - n) % 60 == 0
		},
		daysInMonth : function () {
			return pt(this.year(), this.month())
		},
		dayOfYear : function (n) {
			var i = p((t(this).startOf("day") - t(this).startOf("year")) / 864e5) + 1;
			return n == null ? i : this.add(n - i, "d")
		},
		quarter : function (n) {
			return n == null ? Math.ceil((this.month() + 1) / 3) : this.month((n - 1) * 3 + this.month() % 3)
		},
		weekYear : function (n) {
			var t = d(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
			return n == null ? t : this.add(n - t, "y")
		},
		isoWeekYear : function (n) {
			var t = d(this, 1, 4).year;
			return n == null ? t : this.add(n - t, "y")
		},
		week : function (n) {
			var t = this.localeData().week(this);
			return n == null ? t : this.add((n - t) * 7, "d")
		},
		isoWeek : function (n) {
			var t = d(this, 1, 4).week;
			return n == null ? t : this.add((n - t) * 7, "d")
		},
		weekday : function (n) {
			var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
			return n == null ? t : this.add(n - t, "d")
		},
		isoWeekday : function (n) {
			return n == null ? this.day() || 7 : this.day(this.day() % 7 ? n : n - 7)
		},
		isoWeeksInYear : function () {
			return nr(this.year(), 1, 4)
		},
		weeksInYear : function () {
			var n = this.localeData()._week;
			return nr(this.year(), n.dow, n.doy)
		},
		get : function (n) {
			return n = f(n),
			this[n]()
		},
		set : function (n, t) {
			return n = f(n),
			typeof this[n] == "function" && this[n](t),
			this
		},
		locale : function (i) {
			var r;
			return i === n ? this._locale._abbr : (r = t.localeData(i), r != null && (this._locale = r), this)
		},
		lang : o("moment().lang() is deprecated. Use moment().localeData() instead.", function (t) {
			return t === n ? this.localeData() : this.locale(t)
		}),
		localeData : function () {
			return this._locale
		},
		_dateTzOffset : function () {
			return Math.round(this._d.getTimezoneOffset() / 15) * 15
		}
	});
	t.fn.millisecond = t.fn.milliseconds = v("Milliseconds", !1);
	t.fn.second = t.fn.seconds = v("Seconds", !1);
	t.fn.minute = t.fn.minutes = v("Minutes", !1);
	t.fn.hour = t.fn.hours = v("Hours", !0);
	t.fn.date = v("Date", !0);
	t.fn.dates = o("dates accessor is deprecated. Use date instead.", v("Date", !0));
	t.fn.year = v("FullYear", !0);
	t.fn.years = o("years accessor is deprecated. Use year instead.", v("FullYear", !0));
	t.fn.days = t.fn.day;
	t.fn.months = t.fn.month;
	t.fn.weeks = t.fn.week;
	t.fn.isoWeeks = t.fn.isoWeek;
	t.fn.quarters = t.fn.quarter;
	t.fn.toJSON = t.fn.toISOString;
	k(t.duration.fn = yt.prototype, {
		_bubble : function () {
			var o = this._milliseconds,
			t = this._days,
			i = this._months,
			n = this._data,
			u,
			f,
			e,
			r = 0;
			n.milliseconds = o % 1e3;
			u = s(o / 1e3);
			n.seconds = u % 60;
			f = s(u / 60);
			n.minutes = f % 60;
			e = s(f / 60);
			n.hours = e % 24;
			t += s(e / 24);
			r = s(yr(t));
			t -= s(pr(r));
			i += s(t / 30);
			t %= 30;
			r += s(i / 12);
			i %= 12;
			n.days = t;
			n.months = i;
			n.years = r
		},
		abs : function () {
			return this._milliseconds = Math.abs(this._milliseconds),
			this._days = Math.abs(this._days),
			this._months = Math.abs(this._months),
			this._data.milliseconds = Math.abs(this._data.milliseconds),
			this._data.seconds = Math.abs(this._data.seconds),
			this._data.minutes = Math.abs(this._data.minutes),
			this._data.hours = Math.abs(this._data.hours),
			this._data.months = Math.abs(this._data.months),
			this._data.years = Math.abs(this._data.years),
			this
		},
		weeks : function () {
			return s(this.days() / 7)
		},
		valueOf : function () {
			return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + i(this._months / 12) * 31536e6
		},
		humanize : function (n) {
			var t = bf(this, !n, this.localeData());
			return n && (t = this.localeData().pastFuture(+this, t)),
			this.localeData().postformat(t)
		},
		add : function (n, i) {
			var r = t.duration(n, i);
			return this._milliseconds += r._milliseconds,
			this._days += r._days,
			this._months += r._months,
			this._bubble(),
			this
		},
		subtract : function (n, i) {
			var r = t.duration(n, i);
			return this._milliseconds -= r._milliseconds,
			this._days -= r._days,
			this._months -= r._months,
			this._bubble(),
			this
		},
		get : function (n) {
			return n = f(n),
			this[n.toLowerCase() + "s"]()
		},
		as : function (n) {
			var t,
			i;
			if (n = f(n), n === "month" || n === "year")
				return t = this._days + this._milliseconds / 864e5, i = this._months + yr(t) * 12, n === "month" ? i : i / 12;
			t = this._days + pr(this._months / 12);
			switch (n) {
			case "week":
				return t / 7 + this._milliseconds / 6048e5;
			case "day":
				return t + this._milliseconds / 864e5;
			case "hour":
				return t * 24 + this._milliseconds / 36e5;
			case "minute":
				return t * 1440 + this._milliseconds / 6e4;
			case "second":
				return t * 86400 + this._milliseconds / 1e3;
			case "millisecond":
				return Math.floor(t * 864e5) + this._milliseconds;
			default:
				throw new Error("Unknown unit " + n);
			}
		},
		lang : t.fn.lang,
		locale : t.fn.locale,
		toIsoString : o("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function () {
			return this.toISOString()
		}),
		toISOString : function () {
			var r = Math.abs(this.years()),
			u = Math.abs(this.months()),
			f = Math.abs(this.days()),
			n = Math.abs(this.hours()),
			t = Math.abs(this.minutes()),
			i = Math.abs(this.seconds() + this.milliseconds() / 1e3);
			return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (r ? r + "Y" : "") + (u ? u + "M" : "") + (f ? f + "D" : "") + (n || t || i ? "T" : "") + (n ? n + "H" : "") + (t ? t + "M" : "") + (i ? i + "S" : "") : "P0D"
		},
		localeData : function () {
			return this._locale
		}
	});
	t.duration.fn.toString = t.duration.fn.toISOString;
	for (u in oi)
		b(oi, u) && df(u.toLowerCase());
	t.duration.fn.asMilliseconds = function () {
		return this.as("ms")
	};
	t.duration.fn.asSeconds = function () {
		return this.as("s")
	};
	t.duration.fn.asMinutes = function () {
		return this.as("m")
	};
	t.duration.fn.asHours = function () {
		return this.as("h")
	};
	t.duration.fn.asDays = function () {
		return this.as("d")
	};
	t.duration.fn.asWeeks = function () {
		return this.as("weeks")
	};
	t.duration.fn.asMonths = function () {
		return this.as("M")
	};
	t.duration.fn.asYears = function () {
		return this.as("y")
	};
	t.locale("en", {
		ordinal : function (n) {
			var t = n % 10,
			r = i(n % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
			return n + r
		}
	});
	ti ? module.exports = t : typeof define == "function" && define.amd ? (define("moment", function (n, i, r) {
				return r.config && r.config() && r.config().noGlobal === !0 && (rt.moment = ni),
				t
			}), wr(!0)) : wr()
}
.call(this), function (n) {
	n(moment)
}
(function (n) {
	function i(n, t) {
		var i = n.split("_");
		return t % 10 == 1 && t % 100 != 11 ? i[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? i[1] : i[2]
	}
	function t(n, t, r) {
		var u = {
			mm : t ? "минута_минуты_минут" : "минуту_минуты_минут",
			hh : "час_часа_часов",
			dd : "день_дня_дней",
			MM : "месяц_месяца_месяцев",
			yy : "год_года_лет"
		};
		return r === "m" ? t ? "минута" : "минуту" : n + " " + i(u[r], +n)
	}
	function r(n, t) {
		var i = {
			nominative : "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
			accusative : "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")
		},
		r = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
		return i[r][n.month()]
	}
	function u(n, t) {
		var i = {
			nominative : "янв_фев_мар_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
			accusative : "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_")
		},
		r = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
		return i[r][n.month()]
	}
	function f(n, t) {
		var i = {
			nominative : "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
			accusative : "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_")
		},
		r = /\[ ?[Вв] ?(?:прошлую|следующую)? ?\] ?dddd/.test(t) ? "accusative" : "nominative";
		return i[r][n.day()]
	}
	return n.defineLocale("ru", {
		months : r,
		monthsShort : u,
		weekdays : f,
		weekdaysShort : "вс_пн_вт_ср_чт_пт_сб".split("_"),
		weekdaysMin : "вс_пн_вт_ср_чт_пт_сб".split("_"),
		monthsParse : [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
		longDateFormat : {
			LT : "HH:mm",
			L : "DD.MM.YYYY",
			LL : "D MMMM",
			LLL : "D MMMM YYYY г., LT",
			LLLL : "dddd, D MMMM YYYY г., LT"
		},
		calendar : {
			sameDay : "[Сегодня в] LT",
			nextDay : "[Завтра в] LT",
			lastDay : "[Вчера в] LT",
			nextWeek : function () {
				return this.day() === 2 ? "[Во] dddd [в] LT" : "[В] dddd [в] LT"
			},
			lastWeek : function () {
				switch (this.day()) {
				case 0:
					return "[В прошлое] dddd [в] LT";
				case 1:
				case 2:
				case 4:
					return "[В прошлый] dddd [в] LT";
				case 3:
				case 5:
				case 6:
					return "[В прошлую] dddd [в] LT"
				}
			},
			sameElse : "L"
		},
		relativeTime : {
			future : "через %s",
			past : "%s назад",
			s : "несколько секунд",
			m : t,
			mm : t,
			h : "час",
			hh : t,
			d : "день",
			dd : t,
			M : "месяц",
			MM : t,
			y : "год",
			yy : t
		},
		meridiemParse : /ночи|утра|дня|вечера/i,
		isPM : function (n) {
			return /^(дня|вечера)$/.test(n)
		},
		meridiem : function (n) {
			return n < 4 ? "ночи" : n < 12 ? "утра" : n < 17 ? "дня" : "вечера"
		},
		ordinal : function (n, t) {
			switch (t) {
			case "M":
			case "d":
			case "DDD":
				return n + "-й";
			case "D":
				return n + "-го";
			case "w":
			case "W":
				return n + "-я";
			default:
				return n
			}
		},
		week : {
			dow : 1,
			doy : 7
		}
	})
}), function (n) {
	n.widget("ui.altbeecalendar", {
		options : {
			id : "",
			name : "",
			value : "",
			mask : "99.99.9999",
			change : null,
			changeMonth : null,
			changeYear : null,
			open : null,
			close : null,
			limit : {},
			showTime : !1,
			isTodayChoosen : null,
			randomId : 0
		},
		_create : function () {
			var i = this,
			t = i.options,
			o,
			e,
			f,
			h,
			s;
			t.randomId = Math.round(Math.random() * 1e3);
			o = i.element;
			e = !1;
			t.value && t.value !== "" ? t.value.getMonth ? (this.value = t.value, t.value = this.value.toString(Date.CultureInfo.formatPatterns.shortDate)) : this.value = Date.parse(t.value) : (e = !0, t.limit.max || t.limit.min ? (f = null, h = null, t.limit.min && (f = new Date(t.limit.min[0], t.limit.min[1], t.limit.min[2])), t.limit.max && (maxDate = new Date(t.limit.max[0], t.limit.max[1], t.limit.max[2])), this.value = i.options.limit.min && i.options.limit.max ? f : i.options.limit.min && !i.options.limit.max ? f : !i.options.limit.min && i.options.limit.max ? maxDate : new Date) : this.value = new Date);
			var u = this.options.value.split("."),
			c = new Date(u[2], u[1] - 1, u[0]),
			r = new Date,
			a = [r.getFullYear(), r.getMonth() + 1, r.getDate()],
			l = u[0] == r.getDate() && u[1] == r.getMonth() + 1 && u[2] == r.getFullYear();
			this.options.isTodayChoosen = l;
			s = 9;
			this.options.showTime === !0 && (this.options.isTodayChoosen ? (this.options.showTime = r.getHours() + ":00", s = r.getHours()) : this.options.showTime = "9:00");
			this.value = new Date(+c + 324e5);
			this._value = this.value.clone();
			this.wrapper = n('<div class="input date"><\/div>');
			this.icon = n('<span class="date-icon"><\/span>');
			this.input = n(o);
			this.input.removeAttr("id");
			this.input.removeAttr("name");
			e ? this.input.val("") : this.input.val(t.value);
			this.input.mask(t.mask, {
				placeholder : " ",
				translation : {
					9 : {
						pattern : /([0-9])?/,
						optional : !0
					}
				}
			});
			this.wrapper.insertBefore(this.input);
			this.wrapper.append(this.icon);
			this.input.moveTo(this.wrapper);
			this.hiddeninput = n("<input type='hidden' class=\"hiddeninput\" />");
			this.hiddeninput.attr("id", t.id);
			this.hiddeninput.attr("name", t.name);
			this.hiddeninput.attr("value", t.value);
			this.wrapper.append(this.hiddeninput);
			this._prepareCalendar(this.value);
			this.icon.bind("click", n.proxy(function (n) {
					return n.preventDefault(),
					this.calendar.hasClass("show") || (this.calendar.closest(".def-code").css({
							"z-index" : 49
						}), this._raise(this.options.open, this.options, "open", {
							target : this
						})),
					this.calendar.toggleClass("show"),
					!1
				}, i));
			n(document).bind("click", n.proxy(function (n) {
					n.stopPropagation();
					this._raise(this.options.open, this.options, "close", {
						target : this
					});
					this.calendar.removeClass("show")
				}, i));
			this.input.bind("blur", {
				target : this
			}, function (n) {
				var r,
				e,
				s = n.data.target.input.val(),
				c = s.split(/[\.:]|,\s/g),
				u,
				h,
				o,
				f;
				r = new Date(n.data.target.input.val().split(".").reverse().join(","));
				n.data.target.input.val() == "" || isNaN(r.getTime()) || ((i.options.limit.max || i.options.limit.min) && (u = null, h = null, t.limit.min && (u = new Date(t.limit.min[0], t.limit.min[1], t.limit.min[2])), t.limit.max && (maxDate = new Date(t.limit.max[0], t.limit.max[1], t.limit.max[2])), e = r && u && maxDate && r <= maxDate && r >= u || r && u && !maxDate && r >= u || r && maxDate && !u && r <= maxDate ? r : i.options.limit.min && (r < u || isNaN(r.getTime())) ? u : i.options.limit.max && (r > maxDate || isNaN(r.getTime())) ? maxDate : new Date), f = e, f != null ? (o = n.data.target.options.showTime ? n.data.target.options.showTime.split(":")[0] : 0, f = new Date(+f + o * 36e5), n.data.target._value = f, n.data.target.value = n.data.target._value.clone(), n.data.target.options.value = n.data.target.value.toString(Date.CultureInfo.formatPatterns.shortDate), n.data.target.input.val(n.data.target.options.value), n.data.target.input.attr("value", n.data.target.options.value), n.data.target.options.showTime ? n.data.target.hiddeninput.val(n.data.target.options.value + ", " + n.data.target.options.showTime) : n.data.target.hiddeninput.val(n.data.target.options.value), i.monthCurrent.html(f.getMonthName()), i.yearCurrent.html(f.getFullYear()), i.dates.empty(), i.dates.append(i._fillDates(f))) : (n.data.target.value = null, n.data.target.input.val(""), n.data.target.input.attr("value", ""), n.data.target.hiddeninput.val("")), n.data.target._raise(n.data.target.options.change, n.data.target.options, "change", {
						target : n.data.target,
						value : n.data.target.value,
						input : n.data.target.hiddeninput
					}))
			});
			this.input.bind("keyup", {
				target : this
			}, function (n) {
				var r,
				e,
				o = n.data.target.input.val(),
				c = o.split(/[\.:]|,\s/g),
				u,
				h,
				s,
				f;
				/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/.test(o) && (r = new Date(n.data.target.input.val().split(".").reverse().join(",")), i.options.limit.max || i.options.limit.min ? (u = null, h = null, t.limit.min && (u = new Date(t.limit.min[0], t.limit.min[1], t.limit.min[2])), t.limit.max && (maxDate = new Date(t.limit.max[0], t.limit.max[1], t.limit.max[2])), e = r && u && maxDate && r <= maxDate && r >= u || r && u && !maxDate && r >= u || r && maxDate && !u && r <= maxDate ? r : i.options.limit.min && (r < u || isNaN(r.getTime())) ? u : i.options.limit.max && (r > maxDate || isNaN(r.getTime())) ? maxDate : new Date) : e = isNaN(r.getTime()) ? new Date : r, f = e, f != null ? (s = n.data.target.options.showTime ? n.data.target.options.showTime.split(":")[0] : 0, f = new Date(+f + s * 36e5), n.data.target._value = f, n.data.target.value = n.data.target._value.clone(), n.data.target.options.value = n.data.target.value.toString(Date.CultureInfo.formatPatterns.shortDate), n.data.target.input.val(n.data.target.options.value), n.data.target.input.attr("value", n.data.target.options.value), n.data.target.options.showTime ? n.data.target.hiddeninput.val(n.data.target.options.value + ", " + n.data.target.options.showTime) : n.data.target.hiddeninput.val(n.data.target.options.value), i.monthCurrent.html(f.getMonthName()), i.yearCurrent.html(f.getFullYear()), i.dates.empty(), i.dates.append(i._fillDates(f))) : (n.data.target.value = null, n.data.target.input.val(""), n.data.target.input.attr("value", ""), n.data.target.hiddeninput.val("")), n.data.target._raise(n.data.target.options.change, n.data.target.options, "change", {
						target : n.data.target,
						value : n.data.target.value,
						input : n.data.target.hiddeninput
					}))
			})
		},
		_prepareCalendar : function (t) {
			var o,
			i,
			f,
			h,
			e;
			if (this.calendar = n('<div class="datepicker" id="datepicker_' + this.options.randomId + '"> <\/div>'), this.calendar.append('<span class="datepicker-tail"><\/span>'), this.content = n('<div class="datepicker-content"><\/div>'), this.options.showTime && this.content.css("height", "280px"), this.calendar.append(this.content), this.month = n('<div class="datepicker-month"><\/div>'), this.monthPrev = n('<span class="prev"><span>&lt;<\/span><\/span>'), this.monthPrev.bind("click", n.proxy(function (n) {
						return n.preventDefault(),
						this._subtractMonth(),
						!1
					}, this)), this.monthNext = n('<span class="next"><span>&gt;<\/span><\/span>'), this.monthNext.bind("click", n.proxy(function (n) {
						return n.preventDefault(),
						this._addMonth(),
						!1
					}, this)), this.monthCurrent = n('<span class="datepicker-current-month" onclick="event.stopPropagation();"><\/span>'), this.content.append(this.month), this.month.append(this.monthPrev), this.month.append(this.monthCurrent), this.month.append(this.monthNext), o = t.clone(), this.monthCurrent.html(o.getMonthName()), this.year = n('<div class="datepicker-year" onclick="event.stopPropagation();"><\/div>'), this.yearPrev = n('<span class="prev"><span>&lt;<\/span><\/span>'), this.yearPrev.bind("click", n.proxy(function (n) {
						return n.preventDefault(),
						this._subtractYear(),
						!1
					}, this)), this.yearNext = n('<span class="next"><span>&gt;<\/span><\/span>'), this.yearNext.bind("click", n.proxy(function (n) {
						return n.preventDefault(),
						this._addYear(),
						!1
					}, this)), this.yearCurrent = n('<span class="datepicker-current-year"><\/span>'), this.dates = n('<div class="datepicker-calendar"><\/div>'), this.dates.append(this._fillDates(o)), this.content.append(this.dates), this.content.append(this.year), this.year.append(this.yearPrev), this.year.append(this.yearCurrent), this.year.append(this.yearNext), this.yearCurrent.html(o.getFullYear()), this.options.showTime) {
				i = this;
				i.hiddeninput.val(i.options.value + " " + i.options.showTime);
				var a = n('<div class="form-select" id="timePickerDropDown" style="top: 15px; left: 50px;"><\/div>'),
				tt = i.options.isTodayChoosen ? "Сейчас" : i.options.showTime,
				c = n('<span class="slct" style="z-index: 55"><span>' + tt + "<\/span><\/span>"),
				l = n('<div class="select"><\/div>'),
				v = n('<div class="drop-wrap"><\/div>'),
				y = n('<div class="drop mCSB_container"><\/div>'),
				p = n('<div class="dropdown-inner mCustomScrollBox mCS-light" style="padding-top: 0"><\/div>'),
				w = n('<div class="dropdown-list-content mCustomScrollbar _mCS_1" style="max-height: 430px;"><\/div>'),
				b = n("<ul><\/ul>"),
				k = n('<li class="dropdown-group"><\/li>'),
				d = n('<ul id="timeList"><\/ul>'),
				u = this.options.value.split("."),
				g = new Date(u[2], u[1] - 1, u[0]),
				r = new Date,
				it = [r.getFullYear(), r.getMonth() + 1, r.getDate()],
				nt = u[0] == r.getDate() && u[1] == r.getMonth() + 1 && u[2] == r.getFullYear(),
				s = nt ? r.getHours() + 1 : 0;
				for (nt ? (i.options.showTime = s + ":00", i.value = new Date(+g + s * 36e5), i.hiddeninput.val(i.options.value + ", " + s + ":00")) : (i.options.showTime = "9:00", i.value = new Date(+g + 324e5), i.hiddeninput.val(i.options.value + ", 9:00")), f = 0; f < 24; f++)
					h = n('<li class="calendarHours"><div style="text-align: center; height: 30px; line-height: 30px">' + f + ".00<\/div><\/li>"), f < s && h.css("display", "none"), d.append(h), h.bind("click", {
						hours : f,
						self : i
					}, function (t) {
						var r = i.options.value.split("."),
						u = new Date(r[2], r[1] - 1, r[0]);
						t.data.self.options.showTime = t.data.hours + ":00";
						t.data.self.value = new Date(+u + t.data.hours * 36e5);
						t.data.self.hiddeninput.val(t.data.self.options.value + ", " + t.data.hours + ":00");
						t.data.self._raise(t.data.self.options.change, t.data.self.options, "change", {
							target : t.data.self,
							value : t.data.self.value,
							input : t.data.self.hiddeninput
						});
						n("#datepicker_" + t.data.self.options.randomId + " #timePickerDropDown .drop").hide();
						c.html("<span>" + t.data.hours + ":00 <\/span>");
						e = !0
					});
				l.append(c);
				d.appendTo(k);
				k.appendTo(b);
				b.appendTo(w);
				w.appendTo(p);
				p.appendTo(y);
				y.appendTo(v);
				v.appendTo(l);
				l.appendTo(a);
				this.content.append(a);
				e = !0;
				c.bind("click", {
					self : i
				}, function (t) {
					t.stopPropagation();
					e ? n("#datepicker_" + i.options.randomId + " #timePickerDropDown .drop").show() : n("#datepicker_" + i.options.randomId + " #timePickerDropDown .drop").hide();
					e = !e
				})
			}
			this.wrapper.append(this.calendar)
		},
		getValue : function () {
			return this.value.clone()
		},
		setValue : function (n) {
			if (this.options.showTime && n !== undefined && this.options.value !== "")
				try {
					n = new Date(n.getFullYear(), n.getMonth(), n.getDate(), this.options.showTime.split(":")[0]);
					this.input.val(this.options.value);
					this.hiddeninput.val(this.options.value + ", " + this.options.showTime)
				} catch (t) {}

			return this.value = n
		},
		_addMonth : function () {
			var n = this._value,
			t;
			if (this.options.limit.max && (t = new Date(this.options.limit.max[0], this.options.limit.max[1], this.options.limit.max[2]), n.getFullYear() >= t.getFullYear() && n.getMonth() >= t.getMonth()))
				return !1;
			n.addMonths(1);
			this.monthCurrent.html(n.getMonthName());
			this.yearCurrent.html(n.getFullYear());
			this.dates.empty();
			this.dates.append(this._fillDates(n));
			this._raise(this.options.changeMonth, this.options, "changeMonth", {
				target : this,
				value : this._value,
				month : n.getMonth()
			})
		},
		_subtractMonth : function () {
			var n = this._value,
			t;
			if (this.options.limit.min && (t = new Date(this.options.limit.min[0], this.options.limit.min[1], this.options.limit.min[2]), n.getFullYear() <= t.getFullYear() && n.getMonth() <= t.getMonth()))
				return !1;
			n.addMonths(-1);
			this.monthCurrent.html(n.getMonthName());
			this.yearCurrent.html(n.getFullYear());
			this.dates.empty();
			this.dates.append(this._fillDates(n));
			this._raise(this.options.changeMonth, this.options, "changeMonth", {
				target : this,
				value : this._value,
				month : n.getMonth()
			})
		},
		_addYear : function () {
			var n = this._value,
			t;
			if (this.options.limit.max && (t = new Date(this.options.limit.max[0], this.options.limit.max[1], this.options.limit.max[2]), n.getFullYear() >= t.getFullYear()))
				return !1;
			n.addYears(1);
			this.yearCurrent.html(n.getFullYear());
			this.dates.empty();
			this.dates.append(this._fillDates(n));
			this._raise(this.options.changeYear, this.options, "changeYear", {
				target : this,
				value : this._value,
				year : n.getFullYear()
			})
		},
		_subtractYear : function () {
			var n = this._value,
			t;
			if (this.options.limit.min && (t = new Date(this.options.limit.min[0], this.options.limit.min[1], this.options.limit.min[2]), n.getFullYear() <= t.getFullYear()))
				return !1;
			n.addYears(-1);
			this.yearCurrent.html(n.getFullYear());
			this.dates.empty();
			this.dates.append(this._fillDates(n));
			this._raise(this.options.changeYear, this.options, "changeYear", {
				target : this,
				value : this._value,
				year : n.getFullYear()
			})
		},
		_fillDates : function (t) {
			var o,
			u,
			e,
			s;
			this.datesArray = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], ];
			this.datesTable = n("<table><\/table>");
			this.datesHeader = n("<tr><\/tr>");
			n(Date.CultureInfo.shortestDayNames).each(n.proxy(function (t, i) {
					this.datesHeader.append(n("<th>" + i.toLowerCase() + "<\/th>"))
				}, this));
			this.datesTable.append(this.datesHeader);
			var f = t.clone(),
			h = f.getDaysInMonth(),
			c = f.moveToFirstDayOfMonth(),
			l = Date.getDayNumberFromName(c.getDayName()),
			i,
			r;
			try {
				i = new Date(this.options.limit.max[0], this.options.limit.max[1], this.options.limit.max[2]) || null;
				r = new Date(this.options.limit.min[0], this.options.limit.min[1], this.options.limit.min[2]) || null
			} catch (a) {}

			for (o = 0, u = l, e = 1; e <= h; e++)
				s = u % 7, s == 0 && (o++, u = 0), this.datesArray[o][u] = e, u++;
			return n(this.datesArray).each(n.proxy(function (u, e) {
					var o = n("<tr><\/tr>");
					n(e).each(n.proxy(function (u, e) {
							var h,
							s;
							e == 0 ? (h = n("<td><\/td>"), o.append(h)) : (s = n('<td><span class="dynamic">' + e + "<\/span><\/td>"), this.value = this.value || new Date, this.value.getFullYear() == f.getFullYear() & this.value.getMonth() == f.getMonth() & this.value.getDate() == e && s.addClass("active"), (i && (t.getFullYear() >= i.getFullYear() && t.getMonth() > i.getMonth() || t.getFullYear() === i.getFullYear() && t.getMonth() === i.getMonth() && e > i.getDate()) || r && (t.getFullYear() <= r.getFullYear() && t.getMonth() < r.getMonth() || t.getFullYear() === r.getFullYear() && t.getMonth() === r.getMonth() && e < r.getDate())) && (s.find("span.dynamic").removeClass("dynamic"), s.addClass("disabled")), s.bind("click", {
									target : this
								}, function (t) {
									var i,
									r;
									return t.preventDefault(),
									i = new Date(t.data.target._value.getFullYear(), t.data.target._value.getMonth(), Number(n(this).children("span").text())),
									t.data.target.options.showTime && t.data.target.updateTime(i, t.data.target),
									r = t.data.target.options.showTime ? t.data.target.options.showTime.split(":")[0] : 0,
									i = new Date(+i + r * 36e5),
									t.data.target.value = i.clone(),
									t.data.target.options.value = t.data.target.value.toString(Date.CultureInfo.formatPatterns.shortDate),
									t.data.target.input.val(t.data.target.options.value),
									t.data.target.input.attr("value", t.data.target.options.value),
									t.data.target.options.showTime ? t.data.target.hiddeninput.val(t.data.target.options.value + ", " + t.data.target.options.showTime) : t.data.target.hiddeninput.val(t.data.target.options.value),
									n(this).parents("table").find("td").removeClass("active"),
									n(this).addClass("active"),
									t.data.target.close(),
									n("#datepicker_" + t.data.target.options.randomId + " .calendarHours").each(function () {
										var i = t.data.target.value.getFullYear() === Date.now().getFullYear() && t.data.target.value.getMonth() == Date.now().getMonth() && t.data.target.value.getDate() == Date.now().getDate();
										i && n(this).text().split(".")[0] < Date.now().getHours() + 1 ? n(this).hide() : n(this).show()
									}),
									t.data.target._raise(t.data.target.options.change, t.data.target.options, "change", {
										target : t.data.target,
										value : t.data.target.value,
										input : t.data.target.hiddeninput
									}),
									!1
								}), (i && (t.getFullYear() >= i.getFullYear() && t.getMonth() > i.getMonth() || t.getFullYear() === i.getFullYear() && t.getMonth() === i.getMonth() && e > i.getDate()) || r && (t.getFullYear() <= r.getFullYear() && t.getMonth() < r.getMonth() || t.getFullYear() === r.getFullYear() && t.getMonth() === r.getMonth() && e < r.getDate())) && (s.find("span.dynamic").removeClass("dynamic"), s.addClass("disabled"), s.unbind("click")), o.append(s))
						}, this));
					this.datesTable.append(o)
				}, this)),
			this.datesTable
		},
		updateTime : function (t, i) {
			var r = new Date,
			o = [r.getFullYear(), r.getMonth() + 1, r.getDate()],
			e = t.getDate() == r.getDate() && t.getMonth() == r.getMonth() && t.getFullYear() == r.getFullYear(),
			u,
			f;
			i.options.isTodayChoosen = e;
			f = 9;
			i.options.isTodayChoosen ? (i.options.showTime = r.getHours() + ":00", f = r.getHours(), u = "Сейчас") : i.options.showTime = u = "9:00";
			n("#datepicker_" + i.options.randomId + " .slct").html("<span>" + u + "<\/span>")
		},
		open : function () {
			this.calendar.closest(".def-code").css({
				"z-index" : 49
			});
			this.calendar.addClass("show")
		},
		close : function () {
			this.calendar.removeClass("show")
		},
		_raise : function (callback, opt, prop, data) {
			if (jQuery.type(callback) == "string" && n.isFunction(window[callback])) {
				var clickFunction = callback;
				opt[prop] = function (n, t) {
					window[clickFunction](n, t)
				}
			} else
				jQuery.type(callback) != "string" || n.isFunction(window[callback]) || (opt[prop] = eval(callback));
			jQuery.type(opt[prop]) == "function" && this._trigger(prop, null, data == null ? this.element : data)
		},
		_destroy : function () {}

	})
}
(jQuery), function (n) {
	function u(n, t, i, r, u) {
		this._listener = t;
		this._isOnce = i;
		this.context = r;
		this._signal = n;
		this._priority = u || 0
	}
	function r(n, t) {
		if (typeof n != "function")
			throw Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", t));
	}
	function t() {
		this._bindings = [];
		this._prevParams = null;
		var n = this;
		this.dispatch = function () {
			t.prototype.dispatch.apply(n, arguments)
		}
	}
	u.prototype = {
		active : !0,
		params : null,
		execute : function (n) {
			var t;
			return this.active && this._listener && (n = this.params ? this.params.concat(n) : n, t = this._listener.apply(this.context, n), this._isOnce && this.detach()),
			t
		},
		detach : function () {
			return this.isBound() ? this._signal.remove(this._listener, this.context) : null
		},
		isBound : function () {
			return !!this._signal && !!this._listener
		},
		isOnce : function () {
			return this._isOnce
		},
		getListener : function () {
			return this._listener
		},
		getSignal : function () {
			return this._signal
		},
		_destroy : function () {
			delete this._signal;
			delete this._listener;
			delete this.context
		},
		toString : function () {
			return "[SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]"
		}
	};
	t.prototype = {
		VERSION : "1.0.0",
		memorize : !1,
		_shouldPropagate : !0,
		active : !0,
		_registerListener : function (n, t, i, r) {
			var f = this._indexOfListener(n, i);
			if (f !== -1) {
				if (n = this._bindings[f], n.isOnce() !== t)
					throw Error("You cannot add" + (t ? "" : "Once") + "() then add" + (t ? "Once" : "") + "() the same listener without removing the relationship first.");
			} else
				n = new u(this, n, t, i, r), this._addBinding(n);
			return this.memorize && this._prevParams && n.execute(this._prevParams),
			n
		},
		_addBinding : function (n) {
			var t = this._bindings.length;
			do --t;
			while (this._bindings[t] && n._priority <= this._bindings[t]._priority);
			this._bindings.splice(t + 1, 0, n)
		},
		_indexOfListener : function (n, t) {
			for (var i = this._bindings.length, r; i--; )
				if (r = this._bindings[i], r._listener === n && r.context === t)
					return i;
			return -1
		},
		has : function (n, t) {
			return this._indexOfListener(n, t) !== -1
		},
		add : function (n, t, i) {
			return r(n, "add"),
			this._registerListener(n, !1, t, i)
		},
		addOnce : function (n, t, i) {
			return r(n, "addOnce"),
			this._registerListener(n, !0, t, i)
		},
		remove : function (n, t) {
			r(n, "remove");
			var i = this._indexOfListener(n, t);
			return i !== -1 && (this._bindings[i]._destroy(), this._bindings.splice(i, 1)),
			n
		},
		removeAll : function () {
			for (var n = this._bindings.length; n--; )
				this._bindings[n]._destroy();
			this._bindings.length = 0
		},
		getNumListeners : function () {
			return this._bindings.length
		},
		halt : function () {
			this._shouldPropagate = !1
		},
		dispatch : function () {
			if (this.active) {
				var i = Array.prototype.slice.call(arguments),
				n = this._bindings.length,
				t;
				if (this.memorize && (this._prevParams = i), n) {
					t = this._bindings.slice();
					this._shouldPropagate = !0;
					do
						n--;
					while (t[n] && this._shouldPropagate && t[n].execute(i) !== !1)
				}
			}
		},
		forget : function () {
			this._prevParams = null
		},
		dispose : function () {
			this.removeAll();
			delete this._bindings;
			delete this._prevParams
		},
		toString : function () {
			return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]"
		}
	};
	var i = t;
	i.Signal = t;
	typeof define == "function" && define.amd ? define(function () {
		return i
	}) : typeof module != "undefined" && module.exports ? module.exports = i : n.signals = i
}
(this), function () {
	var n = function (n) {
		function i(n, t) {
			if (n.indexOf)
				return n.indexOf(t);
			for (var i = n.length; i--; )
				if (n[i] === t)
					return i;
			return -1
		}
		function f(n, t) {
			var r = i(n, t);
			r !== -1 && n.splice(r, 1)
		}
		function e(n, t) {
			return "[object " + t + "]" === Object.prototype.toString.call(n)
		}
		function o(n) {
			return e(n, "RegExp")
		}
		function a(n) {
			return e(n, "Array")
		}
		function s(n) {
			return typeof n == "function"
		}
		function u(n) {
			var t;
			return t = n === null || n === "null" ? null : n === "true" ? !0 : n === "false" ? !1 : n === l || n === "undefined" ? l : n === "" || isNaN(n) ? n : parseFloat(n),
			t
		}
		function v(n) {
			for (var t = n.length, i = []; t--; )
				i[t] = u(n[t]);
			return i
		}
		function y(n, t) {
			for (var f = (n || "").replace("?", "").split("&"), e = f.length, o = {}, i, r; e--; )
				i = f[e].split("="), r = t ? u(i[1]) : i[1], o[i[0]] = typeof r == "string" ? decodeURIComponent(r) : r;
			return o
		}
		function r() {
			this.bypassed = new n.Signal;
			this.routed = new n.Signal;
			this._routes = [];
			this._prevRoutes = [];
			this._piped = [];
			this.resetState()
		}
		function h(t, i, r, u) {
			var f = o(t),
			e = u.patternLexer;
			this._router = u;
			this._pattern = t;
			this._paramsIds = f ? null : e.getParamIds(t);
			this._optionalParamsIds = f ? null : e.getOptionalParamsIds(t);
			this._matchRegexp = f ? t : e.compilePattern(t, u.ignoreCase);
			this.matched = new n.Signal;
			this.switched = new n.Signal;
			i && this.matched.add(i);
			this._priority = r || 0
		}
		var t,
		c,
		l;
		return c = /t(.+)?/.exec("t")[1] === "",
		r.prototype = {
			greedy : !1,
			greedyEnabled : !0,
			ignoreCase : !0,
			ignoreState : !1,
			shouldTypecast : !1,
			normalizeFn : null,
			resetState : function () {
				this._prevRoutes.length = 0;
				this._prevMatchedRequest = null;
				this._prevBypassedRequest = null
			},
			create : function () {
				return new r
			},
			addRoute : function (n, t, i) {
				var r = new h(n, t, i, this);
				return this._sortedInsert(r),
				r
			},
			removeRoute : function (n) {
				f(this._routes, n);
				n._destroy()
			},
			removeAllRoutes : function () {
				for (var n = this.getNumRoutes(); n--; )
					this._routes[n]._destroy();
				this._routes.length = 0
			},
			parse : function (n, t) {
				if (n = n || "", t = t || [], this.ignoreState || n !== this._prevMatchedRequest && n !== this._prevBypassedRequest) {
					var r = this._getMatchedRoutes(n),
					u = 0,
					f = r.length,
					i;
					if (f)
						for (this._prevMatchedRequest = n, this._notifyPrevRoutes(r, n), this._prevRoutes = r; u < f; )
							i = r[u], i.route.matched.dispatch.apply(i.route.matched, t.concat(i.params)), i.isFirst = !u, this.routed.dispatch.apply(this.routed, t.concat([n, i])), u += 1;
					else
						this._prevBypassedRequest = n, this.bypassed.dispatch.apply(this.bypassed, t.concat([n]));
					this._pipeParse(n, t)
				}
			},
			_notifyPrevRoutes : function (n, t) {
				for (var r = 0, i; i = this._prevRoutes[r++]; )
					i.route.switched && this._didSwitch(i.route, n) && i.route.switched.dispatch(t)
			},
			_didSwitch : function (n, t) {
				for (var i, r = 0; i = t[r++]; )
					if (i.route === n)
						return !1;
				return !0
			},
			_pipeParse : function (n, t) {
				for (var r = 0, i; i = this._piped[r++]; )
					i.parse(n, t)
			},
			getNumRoutes : function () {
				return this._routes.length
			},
			_sortedInsert : function (n) {
				var t = this._routes,
				i = t.length;
				do --i;
				while (t[i] && n._priority <= t[i]._priority);
				t.splice(i + 1, 0, n)
			},
			_getMatchedRoutes : function (n) {
				for (var i = [], r = this._routes, u = r.length, t; t = r[--u]; )
					if ((!i.length || this.greedy || t.greedy) && t.match(n) && i.push({
							route : t,
							params : t._getParamsArray(n)
						}), !this.greedyEnabled && i.length)
						break;
				return i
			},
			pipe : function (n) {
				this._piped.push(n)
			},
			unpipe : function (n) {
				f(this._piped, n)
			},
			toString : function () {
				return "[crossroads numRoutes:" + this.getNumRoutes() + "]"
			}
		},
		t = new r,
		t.VERSION = "0.12.0",
		t.NORM_AS_ARRAY = function (n, t) {
			return [t.vals_]
		},
		t.NORM_AS_OBJECT = function (n, t) {
			return [t]
		},
		h.prototype = {
			greedy : !1,
			rules : void 0,
			match : function (n) {
				return n = n || "",
				this._matchRegexp.test(n) && this._validateParams(n)
			},
			_validateParams : function (n) {
				var i = this.rules,
				r = this._getParamsObject(n);
				for (var t in i)
					if (t !== "normalize_" && i.hasOwnProperty(t) && !this._isValidParam(n, t, r))
						return !1;
				return !0
			},
			_isValidParam : function (n, t, r) {
				var u = this.rules[t],
				f = r[t],
				e = !1,
				h = t.indexOf("?") === 0;
				return f == null && this._optionalParamsIds && i(this._optionalParamsIds, t) !== -1 ? e = !0 : o(u) ? (h && (f = r[t + "_"]), e = u.test(f)) : a(u) ? (h && (f = r[t + "_"]), e = this._isValidArrayRule(u, f)) : s(u) && (e = u(f, n, r)),
				e
			},
			_isValidArrayRule : function (n, t) {
				if (!this._router.ignoreCase)
					return i(n, t) !== -1;
				typeof t == "string" && (t = t.toLowerCase());
				for (var u = n.length, r, f; u--; )
					if (r = n[u], f = typeof r == "string" ? r.toLowerCase() : r, f === t)
						return !0;
				return !1
			},
			_getParamsObject : function (n) {
				for (var s = this._router.shouldTypecast, e = this._router.patternLexer.getParamValues(n, this._matchRegexp, s), r = {}, f = e.length, o, t; f--; )
					t = e[f], this._paramsIds && (o = this._paramsIds[f], o.indexOf("?") === 0 && t && (r[o + "_"] = t, t = y(t, s), e[f] = t), c && t === "" && i(this._optionalParamsIds, o) !== -1 && (t = void 0, e[f] = t), r[o] = t), r[f] = t;
				return r.request_ = s ? u(n) : n,
				r.vals_ = e,
				r
			},
			_getParamsArray : function (n) {
				var t = this.rules ? this.rules.normalize_ : null,
				i;
				return t = t || this._router.normalizeFn,
				i = t && s(t) ? t(n, this._getParamsObject(n)) : this._getParamsObject(n).vals_,
				i
			},
			interpolate : function (n) {
				var t = this._router.patternLexer.interpolate(this._pattern, n);
				if (!this._validateParams(t))
					throw new Error("Generated string doesn't validate against `Route.rules`.");
				return t
			},
			dispose : function () {
				this._router.removeRoute(this)
			},
			_destroy : function () {
				this.matched.dispose();
				this.switched.dispose();
				this.matched = this.switched = this._pattern = this._matchRegexp = null
			},
			toString : function () {
				return '[Route pattern:"' + this._pattern + '", numListeners:' + this.matched.getNumListeners() + "]"
			}
		},
		r.prototype.patternLexer = function () {
			function s() {
				var i,
				t;
				for (i in n)
					n.hasOwnProperty(i) && (t = n[i], t.id = "__CR_" + i + "__", t.save = "save" in t ? t.save.replace("{{id}}", t.id) : t.id, t.rRestore = new RegExp(t.id, "g"))
			}
			function r(n, t) {
				var i = [],
				r;
				for (n.lastIndex = 0; r = n.exec(t); )
					i.push(r[1]);
				return i
			}
			function h(n) {
				return r(f, n)
			}
			function c(t) {
				return r(n.OP.rgx, t)
			}
			function l(n, r) {
				return n = n || "",
				n && (t === i ? n = n.replace(w, "") : t === o && (n = n.replace(b, "")), n = u(n, "rgx", "save"), n = n.replace(p, "\\$&"), n = u(n, "rRestore", "res"), t === i && (n = "\\/?" + n)),
				t !== e && (n += "\\/?"),
				new RegExp("^" + n + "$", r ? "i" : "")
			}
			function u(t, i, r) {
				var u;
				for (var f in n)
					n.hasOwnProperty(f) && (u = n[f], t = t.replace(u[i], u[r]));
				return t
			}
			function a(n, t, i) {
				var r = t.exec(n);
				return r && (r.shift(), i && (r = v(r))),
				r
			}
			function y(t, i) {
				if (typeof t != "string")
					throw new Error("Route pattern should be a string.");
				var r = function (n, t) {
					var r,
					u,
					f;
					if (t = t.substr(0, 1) === "?" ? t.substr(1) : t, i[t] != null) {
						if (typeof i[t] == "object") {
							u = [];
							for (f in i[t])
								u.push(encodeURI(f + "=" + i[t][f]));
							r = "?" + u.join("&")
						} else
							r = String(i[t]);
						if (n.indexOf("*") === -1 && r.indexOf("/") !== -1)
							throw new Error('Invalid value "' + r + '" for segment "' + n + '".');
					} else {
						if (n.indexOf("{") !== -1)
							throw new Error("The segment " + n + " is required.");
						r = ""
					}
					return r
				};
				return n.OS.trail || (n.OS.trail = new RegExp("(?:" + n.OS.id + ")+$")),
				t.replace(n.OS.rgx, n.OS.save).replace(f, r).replace(n.OS.trail, "").replace(n.OS.rRestore, "/")
			}
			var p = /[\\.+*?\^$\[\](){}\/'#]/g,
			w = /^\/|\/$/g,
			b = /\/$/g,
			f = /(?:\{|:)([^}:]+)(?:\}|:)/g,
			n = {
				OS : {
					rgx : /([:}]|\w(?=\/))\/?(:|(?:\{\?))/g,
					save : "$1{{id}}$2",
					res : "\\/?"
				},
				RS : {
					rgx : /([:}])\/?(\{)/g,
					save : "$1{{id}}$2",
					res : "\\/"
				},
				RQ : {
					rgx : /\{\?([^}]+)\}/g,
					res : "\\?([^#]+)"
				},
				OQ : {
					rgx : /:\?([^:]+):/g,
					res : "(?:\\?([^#]*))?"
				},
				OR : {
					rgx : /:([^:]+)\*:/g,
					res : "(.*)?"
				},
				RR : {
					rgx : /\{([^}]+)\*\}/g,
					res : "(.+)"
				},
				RP : {
					rgx : /\{([^}]+)\}/g,
					res : "([^\\/?]+)"
				},
				OP : {
					rgx : /:([^:]+):/g,
					res : "([^\\/?]+)?/?"
				}
			},
			i = 1,
			e = 2,
			o = 3,
			t = i;
			return s(), {
				strict : function () {
					t = e
				},
				loose : function () {
					t = i
				},
				legacy : function () {
					t = o
				},
				getParamIds : h,
				getOptionalParamsIds : c,
				getParamValues : a,
				compilePattern : l,
				interpolate : y
			}
		}
		(),
		t
	};
	typeof define == "function" && define.amd ? define(["signals"], n) : typeof module != "undefined" && module.exports ? module.exports = n(require("signals")) : window.crossroads = n(window.signals)
}
(), function (n) {
	n[n.Active = 0] = "Active";
	n[n.FinancialBlock = 1] = "FinancialBlock";
	n[n.VoluntaryBlock = 2] = "VoluntaryBlock";
	n[n.RegistrationBlock = 3] = "RegistrationBlock";
	n[n.AdministrativeBlock = 4] = "AdministrativeBlock";
	n[n.RescissionBlock = 5] = "RescissionBlock";
	n[n.Collection = 6] = "Collection"
}
(FttbAccountStatus || (FttbAccountStatus = {})), function (n) {
	n[n.AvailableNow = 0] = "AvailableNow";
	n[n.AvailableLater = 1] = "AvailableLater";
	n[n.NotAvailable = 2] = "NotAvailable";
	n[n.Connected = 3] = "Connected";
	n[n.Expired = 4] = "Expired";
	n[n.GenericInfo = 5] = "GenericInfo"
}
(PromisedPaymentStatus || (PromisedPaymentStatus = {})), function (n) {
	n[n.Anonymouse = 0] = "Anonymouse";
	n[n.Mobile = 1] = "Mobile";
	n[n.Fttb = 2] = "Fttb"
}
(UserType || (UserType = {})), function (n) {
	n[n.Wifi = 0] = "Wifi";
	n[n.Mobile = 1] = "Mobile";
	n[n.Fttb = 2] = "Fttb";
	n[n.Lite = 3] = "Lite";
	n[n.Phone = 4] = "Phone"
}
(BoardType || (BoardType = {})), function (n) {
	n[n.Inactive = 0] = "Inactive";
	n[n.Processing = 1] = "Processing";
	n[n.Success = 2] = "Success";
	n[n.Fail = 3] = "Fail";
	n[n.RequestTimeout = 4] = "RequestTimeout"
}
(AwaiterStatus || (AwaiterStatus = {})), function (n) {
	n[n.MyBeeline = 0] = "MyBeeline";
	n[n.MyBeelineExtended = 1] = "MyBeelineExtended";
	n[n.ArrowButton = 2] = "ArrowButton";
	n[n.WrongUserType = 3] = "WrongUserType"
}
(UnauthorizedPopupStyle || (UnauthorizedPopupStyle = {})), function (n) {
	n[n.AUTH_USER_BLOCKED_ERROR = 20014] = "AUTH_USER_BLOCKED_ERROR";
	n[n.NO_CONNECTED_BANK_CARD_FOUND = 20055] = "NO_CONNECTED_BANK_CARD_FOUND";
	n[n.INAC_MTOPUP_CARD_ALREADY_EXISTS = 20056] = "INAC_MTOPUP_CARD_ALREADY_EXISTS"
}
(UssErrorType || (UssErrorType = {})), function (n) {
	n[n.Timeout = -2] = "Timeout";
	n[n.Unknown = -1] = "Unknown";
	n[n.MTopUpError = 0] = "MTopUpError";
	n[n.WrongSecretKey = 1] = "WrongSecretKey";
	n[n.SecretKeyBloked = 2] = "SecretKeyBloked";
	n[n.PaymentServiceUnavailableForSubsciber = 3] = "PaymentServiceUnavailableForSubsciber";
	n[n.UssError = 4] = "UssError"
}
(PayErrorReason || (PayErrorReason = {})), function (n) {
	n[n.PostPaid = 0] = "PostPaid";
	n[n.PrePaid = 1] = "PrePaid";
	n[n.Unknown = 2] = "Unknown"
}
(CtnStatus || (CtnStatus = {})), function (n) {
	n[n.InProgress = 0] = "InProgress";
	n[n.Complete = 1] = "Complete";
	n[n.Failed = 2] = "Failed"
}
(SimpleUssRequestStatus || (SimpleUssRequestStatus = {})), function (n) {
	n[n.FulfillReq = 0] = "FulfillReq";
	n[n.Open = 1] = "Open";
	n[n.InProgress = 2] = "InProgress";
	n[n.Complete = 3] = "Complete";
	n[n.AutoComplete = 4] = "AutoComplete";
	n[n.PartiallyComplete = 5] = "PartiallyComplete";
	n[n.WaitingForApproval = 6] = "WaitingForApproval";
	n[n.NeedMoreInformation = 7] = "NeedMoreInformation";
	n[n.Rejected = 8] = "Rejected";
	n[n.Null = 9] = "Null";
	n[n.Cancelled = 10] = "Cancelled";
	n[n.Pending = 11] = "Pending";
	n[n.PendingOpen = 12] = "PendingOpen";
	n[n.PendingClose = 13] = "PendingClose";
	n[n.PeriodicInProgress = 14] = "PeriodicInProgress"
}
(UssRequestStatus || (UssRequestStatus = {})), function (n) {
	n[n.Confirmed = 0] = "Confirmed";
	n[n.WrongSum = 1] = "WrongSum";
	n[n.Unavailable = 2] = "Unavailable";
	n[n.Failed = 3] = "Failed"
}
(CardRegHoldCheckStatus || (CardRegHoldCheckStatus = {})), function (n) {
	n[n.None = 0] = "None";
	n[n.TestPay = 1] = "TestPay";
	n[n.Hold = 2] = "Hold";
	n[n.Success = 3] = "Success"
}
(ConfirmationMode || (ConfirmationMode = {})), function (n) {
	n[n.InProgress = 0] = "InProgress";
	n[n.Complete = 1] = "Complete";
	n[n.Failed = 2] = "Failed"
}
(CardProcessingStatus || (CardProcessingStatus = {})), function (n) {
	n[n.Initial = 0] = "Initial";
	n[n.Processing = 1] = "Processing";
	n[n.Bank3DS = 2] = "Bank3DS";
	n[n.Success = 3] = "Success";
	n[n.Error = 4] = "Error"
}
(ImmediatePaymentNewCardStage || (ImmediatePaymentNewCardStage = {})), function (n) {
	n[n.Initial = 0] = "Initial";
	n[n.ActiveCard = 1] = "ActiveCard";
	n[n.NewCard = 2] = "NewCard";
	n[n.AutoPayment = 3] = "AutoPayment"
}
(ImmediatePaymentStage || (ImmediatePaymentStage = {})), function (n) {
	n[n.Initial = 0] = "Initial";
	n[n.ActiveCard = 1] = "ActiveCard";
	n[n.NewCard = 2] = "NewCard"
}
(AutoPaymentStage || (AutoPaymentStage = {})), function (n) {
	n[n.Initial = 0] = "Initial";
	n[n.Processing = 1] = "Processing";
	n[n.Bank3DS = 2] = "Bank3DS";
	n[n.Hold = 3] = "Hold";
	n[n.TestPayment = 4] = "TestPayment";
	n[n.Success = 5] = "Success";
	n[n.Error = 6] = "Error"
}
(BindNewCardStage || (BindNewCardStage = {})), function (n) {
	n[n.Normal = 0] = "Normal";
	n[n.Collection = 1] = "Collection";
	n[n.OttOnly = 2] = "OttOnly"
}
(AccessibilityType || (AccessibilityType = {})), function (n) {
	function i(t) {
		var i = t || window.event,
		e = [].slice.call(arguments, 1),
		r = 0,
		f = 0,
		u = 0;
		return t = n.event.fix(i),
		t.type = "mousewheel",
		i.wheelDelta && (r = i.wheelDelta / 120),
		i.detail && (r = -i.detail / 3),
		u = r,
		i.axis !== undefined && i.axis === i.HORIZONTAL_AXIS && (u = 0, f = -1 * r),
		i.wheelDeltaY !== undefined && (u = i.wheelDeltaY / 120),
		i.wheelDeltaX !== undefined && (f = i.wheelDeltaX / -120),
		e.unshift(t, r, f, u),
		(n.event.dispatch || n.event.handle).apply(this, e)
	}
	var t = ["DOMMouseScroll", "mousewheel"],
	r;
	if (n.event.fixHooks)
		for (r = t.length; r; )
			n.event.fixHooks[t[--r]] = n.event.mouseHooks;
	n.event.special.mousewheel = {
		setup : function () {
			if (this.addEventListener)
				for (var n = t.length; n; )
					this.addEventListener(t[--n], i, !1);
			else
				this.onmousewheel = i
		},
		teardown : function () {
			if (this.removeEventListener)
				for (var n = t.length; n; )
					this.removeEventListener(t[--n], i, !1);
			else
				this.onmousewheel = null
		}
	};
	n.fn.extend({
		mousewheel : function (n) {
			return n ? this.bind("mousewheel", n) : this.trigger("mousewheel")
		},
		unmousewheel : function (n) {
			return this.unbind("mousewheel", n)
		}
	})
}
(jQuery), function (n) {
	var i = {
		init : function (t) {
			var i = {
				set_width : !1,
				set_height : !1,
				horizontalScroll : !1,
				scrollInertia : 950,
				mouseWheel : !0,
				mouseWheelPixels : "auto",
				autoDraggerLength : !0,
				autoHideScrollbar : !1,
				scrollButtons : {
					enable : !1,
					scrollType : "continuous",
					scrollSpeed : "auto",
					scrollAmount : 40
				},
				advanced : {
					updateOnBrowserResize : !0,
					updateOnContentResize : !1,
					autoExpandHorizontalScroll : !1,
					autoScrollOnFocus : !0,
					normalizeMouseWheelDelta : !1
				},
				contentTouchScroll : !0,
				callbacks : {
					onScrollStart : function () {},
					onScroll : function () {},
					onTotalScroll : function () {},
					onTotalScrollBack : function () {},
					onTotalScrollOffset : 0,
					onTotalScrollBackOffset : 0,
					whileScrolling : function () {}

				},
				theme : "light"
			},
			t = n.extend(!0, i, t);
			return this.each(function () {
				var i = n(this),
				y,
				r,
				s,
				u,
				f,
				o,
				c,
				l,
				a,
				w,
				v;
				t.set_width && i.css("width", t.set_width);
				t.set_height && i.css("height", t.set_height);
				n(document).data("mCustomScrollbar-index") ? (y = parseInt(n(document).data("mCustomScrollbar-index")), n(document).data("mCustomScrollbar-index", y + 1)) : n(document).data("mCustomScrollbar-index", "1");
				i.wrapInner("<div class='mCustomScrollBox mCS-" + t.theme + "' id='mCSB_" + n(document).data("mCustomScrollbar-index") + "' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_" + n(document).data("mCustomScrollbar-index"));
				r = i.children(".mCustomScrollBox");
				t.horizontalScroll ? (r.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />"), s = r.children(".mCSB_h_wrapper"), s.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({
						width : s.children().outerWidth(),
						position : "relative"
					}).unwrap()) : r.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />");
				u = r.children(".mCSB_container");
				n.support.touch && u.addClass("mCS_touch");
				u.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'><\/div><\/div><div class='mCSB_draggerRail'><\/div><\/div><\/div>");
				var h = r.children(".mCSB_scrollTools"),
				p = h.children(".mCSB_draggerContainer"),
				e = p.children(".mCSB_dragger");
				t.horizontalScroll ? e.data("minDraggerWidth", e.width()) : e.data("minDraggerHeight", e.height());
				t.scrollButtons.enable && (t.horizontalScroll ? h.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'><\/a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'><\/a>") : h.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'><\/a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'><\/a>"));
				r.bind("scroll", function () {
					i.is(".mCS_disabled") || r.scrollTop(0).scrollLeft(0)
				});
				i.data({
					mCS_Init : !0,
					mCustomScrollbarIndex : n(document).data("mCustomScrollbar-index"),
					horizontalScroll : t.horizontalScroll,
					scrollInertia : t.scrollInertia,
					scrollEasing : "mcsEaseOut",
					mouseWheel : t.mouseWheel,
					mouseWheelPixels : t.mouseWheelPixels,
					autoDraggerLength : t.autoDraggerLength,
					autoHideScrollbar : t.autoHideScrollbar,
					scrollButtons_enable : t.scrollButtons.enable,
					scrollButtons_scrollType : t.scrollButtons.scrollType,
					scrollButtons_scrollSpeed : t.scrollButtons.scrollSpeed,
					scrollButtons_scrollAmount : t.scrollButtons.scrollAmount,
					autoExpandHorizontalScroll : t.advanced.autoExpandHorizontalScroll,
					autoScrollOnFocus : t.advanced.autoScrollOnFocus,
					normalizeMouseWheelDelta : t.advanced.normalizeMouseWheelDelta,
					contentTouchScroll : t.contentTouchScroll,
					onScrollStart_Callback : t.callbacks.onScrollStart,
					onScroll_Callback : t.callbacks.onScroll,
					onTotalScroll_Callback : t.callbacks.onTotalScroll,
					onTotalScrollBack_Callback : t.callbacks.onTotalScrollBack,
					onTotalScroll_Offset : t.callbacks.onTotalScrollOffset,
					onTotalScrollBack_Offset : t.callbacks.onTotalScrollBackOffset,
					whileScrolling_Callback : t.callbacks.whileScrolling,
					bindEvent_scrollbar_drag : !1,
					bindEvent_content_touch : !1,
					bindEvent_scrollbar_click : !1,
					bindEvent_mousewheel : !1,
					bindEvent_buttonsContinuous_y : !1,
					bindEvent_buttonsContinuous_x : !1,
					bindEvent_buttonsPixels_y : !1,
					bindEvent_buttonsPixels_x : !1,
					bindEvent_focusin : !1,
					bindEvent_autoHideScrollbar : !1,
					mCSB_buttonScrollRight : !1,
					mCSB_buttonScrollLeft : !1,
					mCSB_buttonScrollDown : !1,
					mCSB_buttonScrollUp : !1
				});
				t.horizontalScroll ? i.css("max-width") !== "none" && (t.advanced.updateOnContentResize || (t.advanced.updateOnContentResize = !0)) : i.css("max-height") !== "none" && (f = !1, o = parseInt(i.css("max-height")), i.css("max-height").indexOf("%") >= 0 && (f = o, o = i.parent().height() * f / 100), i.css("overflow", "hidden"), r.css("max-height", o));
				i.mCustomScrollbar("update");
				t.advanced.updateOnBrowserResize && (l = n(window).width(), a = n(window).height(), n(window).bind("resize." + i.data("mCustomScrollbarIndex"), function () {
						c && clearTimeout(c);
						c = setTimeout(function () {
								if (!i.is(".mCS_disabled") && !i.is(".mCS_destroyed")) {
									var t = n(window).width(),
									u = n(window).height();
									(l !== t || a !== u) && (i.css("max-height") !== "none" && f && r.css("max-height", i.parent().height() * f / 100), i.mCustomScrollbar("update"), l = t, a = u)
								}
							}, 150)
					}));
				t.advanced.updateOnContentResize && (v = t.horizontalScroll ? u.outerWidth() : u.outerHeight(), w = setInterval(function () {
							var n;
							t.horizontalScroll ? (t.advanced.autoExpandHorizontalScroll && u.css({
									position : "absolute",
									width : "auto"
								}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
									width : u.outerWidth(),
									position : "relative"
								}).unwrap(), n = u.outerWidth()) : n = u.outerHeight();
							n != v && (i.mCustomScrollbar("update"), v = n)
						}, 300))
			})
		},
		update : function () {
			var i = n(this),
			u = i.children(".mCustomScrollBox"),
			r = u.children(".mCSB_container"),
			h,
			o,
			c,
			b,
			it,
			rt,
			s,
			v,
			k,
			ut,
			ft,
			l,
			a;
			r.removeClass("mCS_no_scrollbar");
			i.removeClass("mCS_disabled mCS_destroyed");
			u.scrollTop(0).scrollLeft(0);
			var f = u.children(".mCSB_scrollTools"),
			e = f.children(".mCSB_draggerContainer"),
			t = e.children(".mCSB_dragger");
			if (i.data("horizontalScroll")) {
				var d = f.children(".mCSB_buttonLeft"),
				g = f.children(".mCSB_buttonRight"),
				y = u.width();
				i.data("autoExpandHorizontalScroll") && r.css({
					position : "absolute",
					width : "auto"
				}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
					width : r.outerWidth(),
					position : "relative"
				}).unwrap();
				h = r.outerWidth()
			} else
				var nt = f.children(".mCSB_buttonUp"), tt = f.children(".mCSB_buttonDown"), p = u.height(), w = r.outerHeight();
			w > p && !i.data("horizontalScroll") ? (f.css("display", "block"), o = e.height(), i.data("autoDraggerLength") && (c = Math.round(p / w * o), b = t.data("minDraggerHeight"), c <= b ? t.css({
						height : b
					}) : c >= o - 10 ? (it = o - 10, t.css({
							height : it
						})) : t.css({
						height : c
					}), t.children(".mCSB_dragger_bar").css({
						"line-height" : t.height() + "px"
					})), rt = t.height(), l = (w - p) / (o - rt), i.data("scrollAmount", l).mCustomScrollbar("scrolling", u, r, e, t, nt, tt, d, g), a = Math.abs(r.position().top), i.mCustomScrollbar("scrollTo", a, {
					scrollInertia : 0,
					trigger : "internal"
				})) : h > y && i.data("horizontalScroll") ? (f.css("display", "block"), s = e.width(), i.data("autoDraggerLength") && (v = Math.round(y / h * s), k = t.data("minDraggerWidth"), v <= k ? t.css({
						width : k
					}) : v >= s - 10 ? (ut = s - 10, t.css({
							width : ut
						})) : t.css({
						width : v
					})), ft = t.width(), l = (h - y) / (s - ft), i.data("scrollAmount", l).mCustomScrollbar("scrolling", u, r, e, t, nt, tt, d, g), a = Math.abs(r.position().left), i.mCustomScrollbar("scrollTo", a, {
					scrollInertia : 0,
					trigger : "internal"
				})) : (u.unbind("mousewheel focusin"), i.data("horizontalScroll") ? t.add(r).css("left", 0) : t.add(r).css("top", 0), f.css("display", "none"), r.addClass("mCS_no_scrollbar"), i.data({
					bindEvent_mousewheel : !1,
					bindEvent_focusin : !1
				}))
		},
		scrolling : function (i, r, u, f, e, o, s, h) {
			function tt(n, t, i, r) {
				c.data("horizontalScroll") ? c.mCustomScrollbar("scrollTo", f.position().left - t + r, {
					moveDragger : !0,
					trigger : "internal"
				}) : c.mCustomScrollbar("scrollTo", f.position().top - n + i, {
					moveDragger : !0,
					trigger : "internal"
				})
			}
			var c = n(this),
			v,
			y,
			l,
			p,
			a,
			w,
			b,
			it,
			rt,
			d,
			g,
			ut,
			ft;
			if (c.data("bindEvent_scrollbar_drag") || (n.support.msPointer ? (f.bind("MSPointerDown", function (t) {
							t.preventDefault();
							c.data({
								on_drag : !0
							});
							f.addClass("mCSB_dragger_onDrag");
							var i = n(this),
							e = i.offset(),
							r = t.originalEvent.pageX - e.left,
							u = t.originalEvent.pageY - e.top;
							r < i.width() && r > 0 && u < i.height() && u > 0 && (v = u, y = r)
						}), n(document).bind("MSPointerMove." + c.data("mCustomScrollbarIndex"), function (n) {
							if (n.preventDefault(), c.data("on_drag")) {
								var i = f,
								t = i.offset(),
								r = n.originalEvent.pageX - t.left,
								u = n.originalEvent.pageY - t.top;
								tt(v, y, u, r)
							}
						}).bind("MSPointerUp." + c.data("mCustomScrollbarIndex"), function () {
							c.data({
								on_drag : !1
							});
							f.removeClass("mCSB_dragger_onDrag")
						})) : (f.bind("mousedown touchstart", function (t) {
							var e,
							i,
							r,
							u,
							o;
							t.preventDefault();
							t.stopImmediatePropagation();
							e = n(this);
							i = e.offset();
							t.type === "touchstart" ? (o = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0], r = o.pageX - i.left, u = o.pageY - i.top) : (c.data({
									on_drag : !0
								}), f.addClass("mCSB_dragger_onDrag"), r = t.pageX - i.left, u = t.pageY - i.top);
							r < e.width() && r > 0 && u < e.height() && u > 0 && (v = u, y = r)
						}).bind("touchmove", function (t) {
							t.preventDefault();
							t.stopImmediatePropagation();
							var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
							u = n(this),
							r = u.offset(),
							f = i.pageX - r.left,
							e = i.pageY - r.top;
							tt(v, y, e, f)
						}), n(document).bind("mousemove." + c.data("mCustomScrollbarIndex"), function (n) {
							if (c.data("on_drag")) {
								var i = f,
								t = i.offset(),
								r = n.pageX - t.left,
								u = n.pageY - t.top;
								tt(v, y, u, r)
							}
						}).bind("mouseup." + c.data("mCustomScrollbarIndex"), function () {
							c.data({
								on_drag : !1
							});
							f.removeClass("mCSB_dragger_onDrag")
						})), c.data({
						bindEvent_scrollbar_drag : !0
					})), n.support.touch && c.data("contentTouchScroll") && (c.data("bindEvent_content_touch") || (r.bind("touchstart", function (t) {
							t.stopImmediatePropagation();
							l = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0];
							p = n(this);
							a = p.offset();
							b = l.pageX - a.left;
							w = l.pageY - a.top;
							it = w;
							rt = b
						}), r.bind("touchmove", function (t) {
							t.preventDefault();
							t.stopImmediatePropagation();
							l = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0];
							p = n(this).parent();
							a = p.offset();
							b = l.pageX - a.left;
							w = l.pageY - a.top;
							c.data("horizontalScroll") ? c.mCustomScrollbar("scrollTo", rt - b, {
								trigger : "internal"
							}) : c.mCustomScrollbar("scrollTo", it - w, {
								trigger : "internal"
							})
						}))), c.data("bindEvent_scrollbar_click") || (u.bind("click", function (t) {
						var i = (t.pageY - u.offset().top) * c.data("scrollAmount"),
						r = n(t.target);
						c.data("horizontalScroll") && (i = (t.pageX - u.offset().left) * c.data("scrollAmount"));
						(r.hasClass("mCSB_draggerContainer") || r.hasClass("mCSB_draggerRail")) && c.mCustomScrollbar("scrollTo", i, {
							trigger : "internal",
							scrollEasing : "draggerRailEase"
						})
					}), c.data({
						bindEvent_scrollbar_click : !0
					})), c.data("mouseWheel") && (c.data("bindEvent_mousewheel") || (i.bind("mousewheel", function (n, t) {
							var o,
							i = c.data("mouseWheelPixels"),
							s = Math.abs(r.position().top),
							e = f.position().top,
							h = u.height() - f.height();
							c.data("normalizeMouseWheelDelta") && (t = t < 0 ? -1 : 1);
							i === "auto" && (i = 100 + Math.round(c.data("scrollAmount") / 2));
							c.data("horizontalScroll") && (e = f.position().left, h = u.width() - f.width(), s = Math.abs(r.position().left));
							(t > 0 && e !== 0 || t < 0 && e !== h) && (n.preventDefault(), n.stopImmediatePropagation());
							o = s - t * i;
							c.mCustomScrollbar("scrollTo", o, {
								trigger : "internal"
							})
						}), c.data({
							bindEvent_mousewheel : !0
						}))), c.data("scrollButtons_enable"))
				if (c.data("scrollButtons_scrollType") === "pixels") {
					c.data("horizontalScroll") ? (h.add(s).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend", d, g), c.data({
							bindEvent_buttonsContinuous_x : !1
						}), c.data("bindEvent_buttonsPixels_x") || (h.bind("click", function (n) {
								n.preventDefault();
								k(Math.abs(r.position().left) + c.data("scrollButtons_scrollAmount"))
							}), s.bind("click", function (n) {
								n.preventDefault();
								k(Math.abs(r.position().left) - c.data("scrollButtons_scrollAmount"))
							}), c.data({
								bindEvent_buttonsPixels_x : !0
							}))) : (o.add(e).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend", d, g), c.data({
							bindEvent_buttonsContinuous_y : !1
						}), c.data("bindEvent_buttonsPixels_y") || (o.bind("click", function (n) {
								n.preventDefault();
								k(Math.abs(r.position().top) + c.data("scrollButtons_scrollAmount"))
							}), e.bind("click", function (n) {
								n.preventDefault();
								k(Math.abs(r.position().top) - c.data("scrollButtons_scrollAmount"))
							}), c.data({
								bindEvent_buttonsPixels_y : !0
							})));
					function k(n) {
						f.data("preventAction") || (f.data("preventAction", !0), c.mCustomScrollbar("scrollTo", n, {
								trigger : "internal"
							}))
					}
				} else {
					c.data("horizontalScroll") ? (h.add(s).unbind("click"), c.data({
							bindEvent_buttonsPixels_x : !1
						}), c.data("bindEvent_buttonsContinuous_x") || (h.bind("mousedown touchstart MSPointerDown", function (n) {
								n.preventDefault();
								var t = nt();
								c.data({
									mCSB_buttonScrollRight : setInterval(function () {
										c.mCustomScrollbar("scrollTo", Math.abs(r.position().left) + t, {
											trigger : "internal",
											scrollEasing : "easeOutCirc"
										})
									}, 17)
								})
							}), d = function (n) {
							n.preventDefault();
							clearInterval(c.data("mCSB_buttonScrollRight"))
						}, h.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", d), s.bind("mousedown touchstart MSPointerDown", function (n) {
								n.preventDefault();
								var t = nt();
								c.data({
									mCSB_buttonScrollLeft : setInterval(function () {
										c.mCustomScrollbar("scrollTo", Math.abs(r.position().left) - t, {
											trigger : "internal",
											scrollEasing : "easeOutCirc"
										})
									}, 17)
								})
							}), g = function (n) {
							n.preventDefault();
							clearInterval(c.data("mCSB_buttonScrollLeft"))
						}, s.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", g), c.data({
								bindEvent_buttonsContinuous_x : !0
							}))) : (o.add(e).unbind("click"), c.data({
							bindEvent_buttonsPixels_y : !1
						}), c.data("bindEvent_buttonsContinuous_y") || (o.bind("mousedown touchstart MSPointerDown", function (n) {
								n.preventDefault();
								var t = nt();
								c.data({
									mCSB_buttonScrollDown : setInterval(function () {
										c.mCustomScrollbar("scrollTo", Math.abs(r.position().top) + t, {
											trigger : "internal",
											scrollEasing : "easeOutCirc"
										})
									}, 17)
								})
							}), ut = function (n) {
							n.preventDefault();
							clearInterval(c.data("mCSB_buttonScrollDown"))
						}, o.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", ut), e.bind("mousedown touchstart MSPointerDown", function (n) {
								n.preventDefault();
								var t = nt();
								c.data({
									mCSB_buttonScrollUp : setInterval(function () {
										c.mCustomScrollbar("scrollTo", Math.abs(r.position().top) - t, {
											trigger : "internal",
											scrollEasing : "easeOutCirc"
										})
									}, 17)
								})
							}), ft = function (n) {
							n.preventDefault();
							clearInterval(c.data("mCSB_buttonScrollUp"))
						}, e.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", ft), c.data({
								bindEvent_buttonsContinuous_y : !0
							})));
					function nt() {
						var n = c.data("scrollButtons_scrollSpeed");
						return c.data("scrollButtons_scrollSpeed") === "auto" && (n = Math.round((c.data("scrollInertia") + 100) / 40)),
						n
					}
				}
			c.data("autoScrollOnFocus") && (c.data("bindEvent_focusin") || (i.bind("focusin", function () {
						var t;
						if (i.scrollTop(0).scrollLeft(0), t = n(document.activeElement), t.is("input,textarea,select,button,a[tabindex],area,object")) {
							var f = r.position().top,
							u = t.position().top,
							e = i.height() - t.outerHeight();
							c.data("horizontalScroll") && (f = r.position().left, u = t.position().left, e = i.width() - t.outerWidth());
							(f + u < 0 || f + u > e) && c.mCustomScrollbar("scrollTo", u, {
								trigger : "internal"
							})
						}
					}), c.data({
						bindEvent_focusin : !0
					})));
			c.data("autoHideScrollbar") && (c.data("bindEvent_autoHideScrollbar") || (i.bind("mouseenter", function () {
						i.addClass("mCS-mouse-over");
						t.showScrollbar.call(i.children(".mCSB_scrollTools"))
					}).bind("mouseleave touchend", function (n) {
						i.removeClass("mCS-mouse-over");
						n.type === "mouseleave" && t.hideScrollbar.call(i.children(".mCSB_scrollTools"))
					}), c.data({
						bindEvent_autoHideScrollbar : !0
					})))
		},
		scrollTo : function (i, r) {
			function h(n) {
				this.mcs = {
					top : f.position().top,
					left : f.position().left,
					draggerTop : s.position().top,
					draggerLeft : s.position().left,
					topPct : Math.round(100 * Math.abs(f.position().top) / Math.abs(f.outerHeight() - o.height())),
					leftPct : Math.round(100 * Math.abs(f.position().left) / Math.abs(f.outerWidth() - o.width()))
				};
				switch (n) {
				case "onScrollStart":
					u.data("mCS_tweenRunning", !0).data("onScrollStart_Callback").call(u, this.mcs);
					break;
				case "whileScrolling":
					u.data("whileScrolling_Callback").call(u, this.mcs);
					break;
				case "onScroll":
					u.data("onScroll_Callback").call(u, this.mcs);
					break;
				case "onTotalScrollBack":
					u.data("onTotalScrollBack_Callback").call(u, this.mcs);
					break;
				case "onTotalScroll":
					u.data("onTotalScroll_Callback").call(u, this.mcs)
				}
			}
			var u = n(this),
			k = {
				moveDragger : !1,
				trigger : "external",
				callbacks : !0,
				scrollInertia : u.data("scrollInertia"),
				scrollEasing : u.data("scrollEasing")
			},
			r = n.extend(k, r),
			e,
			o = u.children(".mCustomScrollBox"),
			f = o.children(".mCSB_container"),
			a = o.children(".mCSB_scrollTools"),
			v = a.children(".mCSB_draggerContainer"),
			s = v.children(".mCSB_dragger"),
			b = draggerSpeed = r.scrollInertia,
			p,
			c,
			w,
			l,
			y;
			f.hasClass("mCS_no_scrollbar") || (u.data({
					mCS_trigger : r.trigger
				}), u.data("mCS_Init") && (r.callbacks = !1), (i || i === 0) && (typeof i == "number" ? r.moveDragger ? (e = i, i = u.data("horizontalScroll") ? s.position().left * u.data("scrollAmount") : s.position().top * u.data("scrollAmount"), draggerSpeed = 0) : e = i / u.data("scrollAmount") : typeof i == "string" && (y = i === "top" ? 0 : i !== "bottom" || u.data("horizontalScroll") ? i === "left" ? 0 : i === "right" && u.data("horizontalScroll") ? f.outerWidth() - o.width() : i === "first" ? u.find(".mCSB_container").find(":first") : i === "last" ? u.find(".mCSB_container").find(":last") : u.find(i) : f.outerHeight() - o.height(), y.length === 1 ? (i = u.data("horizontalScroll") ? y.position().left : y.position().top, e = i / u.data("scrollAmount")) : e = i = y), u.data("horizontalScroll") ? (u.data("onTotalScrollBack_Offset") && (c = -u.data("onTotalScrollBack_Offset")), u.data("onTotalScroll_Offset") && (l = o.width() - f.outerWidth() + u.data("onTotalScroll_Offset")), e < 0 ? (e = i = 0, clearInterval(u.data("mCSB_buttonScrollLeft")), c || (p = !0)) : e >= v.width() - s.width() ? (e = v.width() - s.width(), i = o.width() - f.outerWidth(), clearInterval(u.data("mCSB_buttonScrollRight")), l || (w = !0)) : i = -i, t.mTweenAxis.call(this, s[0], "left", Math.round(e), draggerSpeed, r.scrollEasing), t.mTweenAxis.call(this, f[0], "left", Math.round(i), b, r.scrollEasing, {
							onStart : function () {
								r.callbacks && !u.data("mCS_tweenRunning") && h("onScrollStart");
								u.data("autoHideScrollbar") && t.showScrollbar.call(a)
							},
							onUpdate : function () {
								r.callbacks && h("whileScrolling")
							},
							onComplete : function () {
								r.callbacks && (h("onScroll"), (p || c && f.position().left >= c) && h("onTotalScrollBack"), (w || l && f.position().left <= l) && h("onTotalScroll"));
								s.data("preventAction", !1);
								u.data("mCS_tweenRunning", !1);
								u.data("autoHideScrollbar") && (o.hasClass("mCS-mouse-over") || t.hideScrollbar.call(a))
							}
						})) : (u.data("onTotalScrollBack_Offset") && (c = -u.data("onTotalScrollBack_Offset")), u.data("onTotalScroll_Offset") && (l = o.height() - f.outerHeight() + u.data("onTotalScroll_Offset")), e < 0 ? (e = i = 0, clearInterval(u.data("mCSB_buttonScrollUp")), c || (p = !0)) : e >= v.height() - s.height() ? (e = v.height() - s.height(), i = o.height() - f.outerHeight(), clearInterval(u.data("mCSB_buttonScrollDown")), l || (w = !0)) : i = -i, t.mTweenAxis.call(this, s[0], "top", Math.round(e), draggerSpeed, r.scrollEasing), t.mTweenAxis.call(this, f[0], "top", Math.round(i), b, r.scrollEasing, {
							onStart : function () {
								r.callbacks && !u.data("mCS_tweenRunning") && h("onScrollStart");
								u.data("autoHideScrollbar") && t.showScrollbar.call(a)
							},
							onUpdate : function () {
								r.callbacks && h("whileScrolling")
							},
							onComplete : function () {
								r.callbacks && (h("onScroll"), (p || c && f.position().top >= c) && h("onTotalScrollBack"), (w || l && f.position().top <= l) && h("onTotalScroll"));
								s.data("preventAction", !1);
								u.data("mCS_tweenRunning", !1);
								u.data("autoHideScrollbar") && (o.hasClass("mCS-mouse-over") || t.hideScrollbar.call(a))
							}
						})), u.data("mCS_Init") && u.data({
						mCS_Init : !1
					})))
		},
		stop : function () {
			var i = n(this),
			r = i.children().children(".mCSB_container"),
			u = i.children().children().children().children(".mCSB_dragger");
			t.mTweenAxisStop.call(this, r[0]);
			t.mTweenAxisStop.call(this, u[0])
		},
		disable : function (t) {
			var r = n(this),
			u = r.children(".mCustomScrollBox"),
			i = u.children(".mCSB_container"),
			f = u.children(".mCSB_scrollTools"),
			e = f.children().children(".mCSB_dragger");
			u.unbind("mousewheel focusin mouseenter mouseleave touchend");
			i.unbind("touchstart touchmove");
			t && (r.data("horizontalScroll") ? e.add(i).css("left", 0) : e.add(i).css("top", 0));
			f.css("display", "none");
			i.addClass("mCS_no_scrollbar");
			r.data({
				bindEvent_mousewheel : !1,
				bindEvent_focusin : !1,
				bindEvent_content_touch : !1,
				bindEvent_autoHideScrollbar : !1
			}).addClass("mCS_disabled")
		},
		destroy : function () {
			var t = n(this);
			t.removeClass("mCustomScrollbar _mCS_" + t.data("mCustomScrollbarIndex")).addClass("mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(".mCSB_scrollTools").remove();
			n(document).unbind("mousemove." + t.data("mCustomScrollbarIndex") + " mouseup." + t.data("mCustomScrollbarIndex") + " MSPointerMove." + t.data("mCustomScrollbarIndex") + " MSPointerUp." + t.data("mCustomScrollbarIndex"));
			n(window).unbind("resize." + t.data("mCustomScrollbarIndex"))
		}
	},
	t = {
		showScrollbar : function () {
			this.stop().animate({
				opacity : 1
			}, "fast")
		},
		hideScrollbar : function () {
			this.stop().animate({
				opacity : 0
			}, "fast")
		},
		mTweenAxis : function (n, t, i, r, u, f) {
			function l() {
				return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
			}
			function a() {
				e || y.call();
				e = l() - b;
				v();
				e >= n._time && (n._time = e > n._time ? e + o - (e - n._time) : e + o - 1, n._time < e + 1 && (n._time = e + 1));
				n._time < r ? n._id = _request(a) : w.call()
			}
			function v() {
				r > 0 ? (n.currVal = g(n._time, s, c, r, u), h[t] = Math.round(n.currVal) + "px") : h[t] = i + "px";
				p.call()
			}
			function k() {
				o = 1e3 / 60;
				n._time = e + o;
				_request = window.requestAnimationFrame ? window.requestAnimationFrame : function (n) {
					return v(),
					setTimeout(n, .01)
				};
				n._id = _request(a)
			}
			function d() {
				n._id != null && (window.requestAnimationFrame ? window.cancelAnimationFrame(n._id) : clearTimeout(n._id), n._id = null)
			}
			function g(n, t, i, r, u) {
				switch (u) {
				case "linear":
					return i * n / r + t;
				case "easeOutQuad":
					return n /= r,
					-i * n * (n - 2) + t;
				case "easeInOutQuad":
					return (n /= r / 2, n < 1) ? i / 2 * n * n + t : (n--, -i / 2 * (n * (n - 2) - 1) + t);
				case "easeOutCubic":
					return n /= r,
					n--,
					i * (n * n * n + 1) + t;
				case "easeOutQuart":
					return n /= r,
					n--,
					-i * (n * n * n * n - 1) + t;
				case "easeOutQuint":
					return n /= r,
					n--,
					i * (n * n * n * n * n + 1) + t;
				case "easeOutCirc":
					return n /= r,
					n--,
					i * Math.sqrt(1 - n * n) + t;
				case "easeOutSine":
					return i * Math.sin(n / r * (Math.PI / 2)) + t;
				case "easeOutExpo":
					return i * (-Math.pow(2, -10 * n / r) + 1) + t;
				case "mcsEaseOut":
					var f = (n /= r) * n,
					e = f * n;
					return t + i * (.499999999999997 * e * f + -2.5 * f * f + 5.5 * e + -6.5 * f + 4 * n);
				case "draggerRailEase":
					return (n /= r / 2, n < 1) ? i / 2 * n * n * n + t : (n -= 2, i / 2 * (n * n * n + 2) + t)
				}
			}
			var f = f || {},
			y = f.onStart || function () {},
			p = f.onUpdate || function () {},
			w = f.onComplete || function () {},
			b = l(),
			o,
			e = 0,
			s = n.offsetTop,
			h = n.style,
			c;
			t === "left" && (s = n.offsetLeft);
			c = i - s;
			d();
			k()
		},
		mTweenAxisStop : function (n) {
			n._id != null && (window.requestAnimationFrame ? window.cancelAnimationFrame(n._id) : clearTimeout(n._id), n._id = null)
		},
		rafPolyfill : function () {
			for (var n = ["ms", "moz", "webkit", "o"], t = n.length; --t > -1 && !window.requestAnimationFrame; )
				window.requestAnimationFrame = window[n[t] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[n[t] + "CancelAnimationFrame"] || window[n[t] + "CancelRequestAnimationFrame"]
		}
	},
	r;
	t.rafPolyfill.call();
	n.support.touch = !!("ontouchstart" in window);
	n.support.msPointer = window.navigator.msPointerEnabled;
	r = "https:" == document.location.protocol ? "https:" : "http:";
	n.event.special.mousewheel || document.write('<script src="' + r + '//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"><\/script>');
	n.fn.mCustomScrollbar = function (t) {
		if (i[t])
			return i[t].apply(this, Array.prototype.slice.call(arguments, 1));
		if (typeof t != "object" && t)
			n.error("Method " + t + " does not exist");
		else
			return i.init.apply(this, arguments)
	}
}
(jQuery), function () {
	if (!AltLanPay || !AltLanPay.requirejs) {
		AltLanPay ? n = AltLanPay : AltLanPay = {};
		var t,
		n,
		i;
		(function (r) {
			function y(n) {
				return vt.call(n) === "[object Function]"
			}
			function p(n) {
				return vt.call(n) === "[object Array]"
			}
			function s(n, t) {
				if (n)
					for (var i = 0; i < n.length; i += 1)
						if (n[i] && t(n[i], i, n))
							break
			}
			function ut(n, t) {
				if (n)
					for (var i = n.length - 1; i > -1; i -= 1)
						if (n[i] && t(n[i], i, n))
							break
			}
			function e(n, t) {
				return ti.call(n, t)
			}
			function f(n, t) {
				return e(n, t) && n[t]
			}
			function a(n, t) {
				for (var i in n)
					if (e(n, i) && t(n[i], i))
						break
			}
			function ft(n, t, i, r) {
				return t && a(t, function (t, u) {
					(i || !e(n, u)) && (r && typeof t == "object" && t && !p(t) && !y(t) && !(t instanceof RegExp) ? (n[u] || (n[u] = {}), ft(n[u], t, i, r)) : n[u] = t)
				}),
				n
			}
			function o(n, t) {
				return function () {
					return t.apply(n, arguments)
				}
			}
			function et() {
				return document.getElementsByTagName("script")
			}
			function ht(n) {
				throw n;
			}
			function ct(n) {
				if (!n)
					return n;
				var t = r;
				return s(n.split("."), function (n) {
					t = t[n]
				}),
				t
			}
			function v(n, t, i, r) {
				var u = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + n);
				return u.requireType = n,
				u.requireModules = r,
				i && (u.originalError = i),
				u
			}
			function bt(n) {
				function vi(n) {
					for (var i, t = 0; t < n.length; t++)
						if (i = n[t], i === ".")
							n.splice(t, 1), t -= 1;
						else if (i === "..") {
							if (t === 0 || t === 1 && n[2] === ".." || n[t - 1] === "..")
								continue;
							t > 0 && (n.splice(t - 1, 2), t -= 2)
						}
				}
				function nt(n, t, r) {
					var w,
					e,
					s,
					o,
					c,
					l,
					a,
					h,
					b,
					v,
					k,
					d,
					u = t && t.split("/"),
					y = i.map,
					p = y && y["*"];
					if (n && (n = n.split("/"), a = n.length - 1, i.nodeIdCompat && it.test(n[a]) && (n[a] = n[a].replace(it, "")), n[0].charAt(0) === "." && u && (d = u.slice(0, u.length - 1), n = d.concat(n)), vi(n), n = n.join("/")), r && y && (u || p)) {
						s = n.split("/");
						n : for (o = s.length; o > 0; o -= 1) {
							if (l = s.slice(0, o).join("/"), u)
								for (c = u.length; c > 0; c -= 1)
									if (e = f(y, u.slice(0, c).join("/")), e && (e = f(e, l), e)) {
										h = e;
										b = o;
										break n
									}
							!v && p && f(p, l) && (v = f(p, l), k = o)
						}
						!h && v && (h = v, b = k);
						h && (s.splice(0, b, h), n = s.join("/"))
					}
					return w = f(i.pkgs, n),
					w ? w : n
				}
				function oi(n) {
					c && s(et(), function (i) {
						if (i.getAttribute("data-requiremodule") === n && i.getAttribute("data-requirecontext") === t.contextName)
							return i.parentNode.removeChild(i), !0
					})
				}
				function at(n) {
					var r = f(i.paths, n);
					if (r && p(r) && r.length > 1)
						return r.shift(), t.require.undef(n), t.makeRequire(null, {
							skipMap : !0
						})([n]), !0
				}
				function si(n) {
					var i,
					t = n ? n.indexOf("!") : -1;
					return t > -1 && (i = n.substring(0, t), n = n.substring(t + 1, n.length)),
					[i, n]
				}
				function w(n, i, r, u) {
					var v,
					h,
					a,
					s,
					e = null,
					c = i ? i.name : null,
					p = n,
					y = !0,
					o = "";
					return n || (y = !1, n = "_@r" + (yi += 1)),
					s = si(n),
					e = s[0],
					n = s[1],
					e && (e = nt(e, c, u), h = f(l, e)),
					n && (e ? o = h && h.normalize ? h.normalize(n, function (n) {
								return nt(n, c, u)
							}) : n.indexOf("!") === -1 ? nt(n, c, u) : n : (o = nt(n, c, u), s = si(o), e = s[0], o = s[1], r = !0, v = t.nameToUrl(o))),
					a = e && !h && !r ? "_unnormalized" + (pi += 1) : "", {
						prefix : e,
						name : o,
						parentMap : i,
						unnormalized : !!a,
						url : v,
						originalName : p,
						isDefine : y,
						id : (e ? e + "!" + o : o) + a
					}
				}
				function tt(n) {
					var r = n.id,
					i = f(h, r);
					return i || (i = h[r] = new t.Module(n)),
					i
				}
				function ot(n, t, i) {
					var u = n.id,
					r = f(h, u);
					e(l, u) && (!r || r.defineEmitComplete) ? t === "defined" && i(l[u]) : (r = tt(n), r.error && t === "error" ? i(r.error) : r.on(t, i))
				}
				function k(n, t) {
					var r = n.requireModules,
					i = !1;
					t ? t(n) : (s(r, function (t) {
							var r = f(h, t);
							r && (r.error = n, r.events.error && (i = !0, r.emit("error", n)))
						}), i || u.onError(n))
				}
				function vt() {
					rt.length && (ri.apply(d, [d.length, 0].concat(rt)), rt = [])
				}
				function pt(n) {
					delete h[n];
					delete ii[n]
				}
				function hi(n, t, i) {
					var r = n.map.id;
					n.error ? n.emit("error", n.error) : (t[r] = !0, s(n.depMaps, function (r, u) {
							var e = r.id,
							o = f(h, e);
							!o || n.depMatched[u] || i[e] || (f(t, e) ? (n.defineDep(u, l[e]), n.check()) : hi(o, t, i))
						}), i[r] = !0)
				}
				function bt() {
					var r,
					e,
					o = i.waitSeconds * 1e3,
					u = o && t.startTime + o < (new Date).getTime(),
					n = [],
					h = [],
					f = !1,
					l = !0;
					if (!dt) {
						if (dt = !0, a(ii, function (t) {
								var i = t.map,
								r = i.id;
								if (t.enabled && (i.isDefine || h.push(t), !t.error))
									if (!t.inited && u)
										at(r)
											 ? (e = !0, f = !0) : (n.push(r), oi(r));
										else if (!t.inited && t.fetched && i.isDefine && (f = !0, !i.prefix))
											return l = !1
								}), u && n.length)return r = v("timeout", "Load timeout for modules: " + n, null, n), r.contextName = t.contextName, k(r);
						l && s(h, function (n) {
							hi(n, {}, {})
						});
						(!u || e) && f && (c || yt) && !ti && (ti = setTimeout(function () {
									ti = 0;
									bt()
								}, 50));
						dt = !1
					}
				}
				function kt(n) {
					e(l, n[0]) || tt(w(n[0], null, !0)).init(n[1], n[2])
				}
				function ci(n, t, i, r) {
					n.detachEvent && !wt ? r && n.detachEvent(r, t) : n.removeEventListener(i, t, !1)
				}
				function li(n) {
					var i = n.currentTarget || n.srcElement;
					return ci(i, t.onScriptLoad, "load", "onreadystatechange"),
					ci(i, t.onScriptError, "error"), {
						node : i,
						id : i && i.getAttribute("data-requiremodule")
					}
				}
				function ai() {
					var n;
					for (vt(); d.length; ) {
						if (n = d.shift(), n[0] === null)
							return k(v("mismatch", "Mismatched anonymous define() module: " + n[n.length - 1]));
						kt(n)
					}
				}
				var dt,
				gt,
				t,
				st,
				ti,
				i = {
					waitSeconds : 7,
					baseUrl : "./",
					paths : {},
					bundles : {},
					pkgs : {},
					shim : {},
					config : {}

				},
				h = {},
				ii = {},
				fi = {},
				d = [],
				l = {},
				lt = {},
				ei = {},
				yi = 1,
				pi = 1;
				return st = {
					require : function (n) {
						return n.require ? n.require : n.require = t.makeRequire(n.map)
					},
					exports : function (n) {
						return n.usingExports = !0,
						n.map.isDefine ? n.exports ? l[n.map.id] = n.exports : n.exports = l[n.map.id] = {}

						 : void 0
					},
					module : function (n) {
						return n.module ? n.module : n.module = {
							id : n.map.id,
							uri : n.map.url,
							config : function () {
								return f(i.config, n.map.id) || {}

							},
							exports : n.exports || (n.exports = {})
						}
					}
				},
				gt = function (n) {
					this.events = f(fi, n.id) || {};
					this.map = n;
					this.shim = f(i.shim, n.id);
					this.depExports = [];
					this.depMaps = [];
					this.depMatched = [];
					this.pluginMaps = {};
					this.depCount = 0
				},
				gt.prototype = {
					init : function (n, t, i, r) {
						(r = r || {}, this.inited) || (this.factory = t, i ? this.on("error", i) : this.events.error && (i = o(this, function (n) {
										this.emit("error", n)
									})), this.depMaps = n && n.slice(0), this.errback = i, this.inited = !0, this.ignore = r.ignore, r.enabled || this.enabled ? this.enable() : this.check())
					},
					defineDep : function (n, t) {
						this.depMatched[n] || (this.depMatched[n] = !0, this.depCount -= 1, this.depExports[n] = t)
					},
					fetch : function () {
						if (!this.fetched) {
							this.fetched = !0;
							t.startTime = (new Date).getTime();
							var n = this.map;
							if (!this.shim)
								return n.prefix ? this.callPlugin() : this.load();
							t.makeRequire(this.map, {
								enableBuildCallback : !0
							})(this.shim.deps || [], o(this, function () {
									return n.prefix ? this.callPlugin() : this.load()
								}))
						}
					},
					load : function () {
						var n = this.map.url;
						lt[n] || (lt[n] = !0, t.load(this.map.id, n))
					},
					check : function () {
						if (this.enabled && !this.enabling) {
							var i,
							e,
							r = this.map.id,
							o = this.depExports,
							n = this.exports,
							f = this.factory;
							if (this.inited) {
								if (this.error)
									this.emit("error", this.error);
								else if (!this.defining) {
									if (this.defining = !0, this.depCount < 1 && !this.defined) {
										if (y(f)) {
											if (this.events.error && this.map.isDefine || u.onError !== ht)
												try {
													n = t.execCb(r, f, o, n)
												} catch (s) {
													i = s
												}
											else
												n = t.execCb(r, f, o, n);
											if (this.map.isDefine && n === undefined && (e = this.module, e ? n = e.exports : this.usingExports && (n = this.exports)), i)
												return i.requireMap = this.map, i.requireModules = this.map.isDefine ? [this.map.id] : null, i.requireType = this.map.isDefine ? "define" : "require", k(this.error = i)
										} else
											n = f;
										this.exports = n;
										this.map.isDefine && !this.ignore && (l[r] = n, u.onResourceLoad && u.onResourceLoad(t, this.map, this.depMaps));
										pt(r);
										this.defined = !0
									}
									this.defining = !1;
									this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
								}
							} else
								this.fetch()
						}
					},
					callPlugin : function () {
						var n = this.map,
						r = n.id,
						s = w(n.prefix);
						this.depMaps.push(s);
						ot(s, "defined", o(this, function (s) {
								var c,
								l,
								y,
								b = f(ei, this.map.id),
								p = this.map.name,
								it = this.map.parentMap ? this.map.parentMap.name : null,
								d = t.makeRequire(n.parentMap, {
										enableBuildCallback : !0
									});
								if (this.map.unnormalized) {
									s.normalize && (p = s.normalize(p, function (n) {
												return nt(n, it, !0)
											}) || "");
									l = w(n.prefix + "!" + p, this.map.parentMap);
									ot(l, "defined", o(this, function (n) {
											this.init([], function () {
												return n
											}, null, {
												enabled : !0,
												ignore : !0
											})
										}));
									y = f(h, l.id);
									y && (this.depMaps.push(l), this.events.error && y.on("error", o(this, function (n) {
												this.emit("error", n)
											})), y.enable());
									return
								}
								if (b) {
									this.map.url = t.nameToUrl(b);
									this.load();
									return
								}
								c = o(this, function (n) {
										this.init([], function () {
											return n
										}, null, {
											enabled : !0
										})
									});
								c.error = o(this, function (n) {
										this.inited = !0;
										this.error = n;
										n.requireModules = [r];
										a(h, function (n) {
											n.map.id.indexOf(r + "_unnormalized") === 0 && pt(n.map.id)
										});
										k(n)
									});
								c.fromText = o(this, function (f, o) {
										var s = n.name,
										h = w(s),
										l = g;
										o && (f = o);
										l && (g = !1);
										tt(h);
										e(i.config, r) && (i.config[s] = i.config[r]);
										try {
											u.exec(f)
										} catch (a) {
											return k(v("fromtexteval", "fromText eval for " + r + " failed: " + a, a, [r]))
										}
										l && (g = !0);
										this.depMaps.push(h);
										t.completeLoad(s);
										d([s], c)
									});
								s.load(n.name, d, c, i)
							}));
						t.enable(s, this);
						this.pluginMaps[s.id] = s
					},
					enable : function () {
						ii[this.map.id] = this;
						this.enabled = !0;
						this.enabling = !0;
						s(this.depMaps, o(this, function (n, i) {
								var r,
								u,
								s;
								if (typeof n == "string") {
									if (n = w(n, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[i] = n, s = f(st, n.id), s) {
										this.depExports[i] = s(this);
										return
									}
									this.depCount += 1;
									ot(n, "defined", o(this, function (n) {
											this.defineDep(i, n);
											this.check()
										}));
									this.errback ? ot(n, "error", o(this, this.errback)) : this.events.error && ot(n, "error", o(this, function (n) {
											this.emit("error", n)
										}))
								}
								r = n.id;
								u = h[r];
								!e(st, r) && u && !u.enabled && t.enable(n, this)
							}));
						a(this.pluginMaps, o(this, function (n) {
								var i = f(h, n.id);
								i && !i.enabled && t.enable(n, this)
							}));
						this.enabling = !1;
						this.check()
					},
					on : function (n, t) {
						var i = this.events[n];
						i || (i = this.events[n] = []);
						i.push(t)
					},
					emit : function (n, t) {
						s(this.events[n], function (n) {
							n(t)
						});
						n === "error" && delete this.events[n]
					}
				},
				t = {
					config : i,
					contextName : n,
					registry : h,
					defined : l,
					urlFetched : lt,
					defQueue : d,
					Module : gt,
					makeModuleMap : w,
					nextTick : u.nextTick,
					onError : k,
					configure : function (n) {
						n.baseUrl && n.baseUrl.charAt(n.baseUrl.length - 1) !== "/" && (n.baseUrl += "/");
						var r = i.shim,
						u = {
							paths : !0,
							bundles : !0,
							config : !0,
							map : !0
						};
						a(n, function (n, t) {
							u[t] ? (i[t] || (i[t] = {}), ft(i[t], n, !0, !0)) : i[t] = n
						});
						n.bundles && a(n.bundles, function (n, t) {
							s(n, function (n) {
								n !== t && (ei[n] = t)
							})
						});
						n.shim && (a(n.shim, function (n, i) {
								p(n) && (n = {
										deps : n
									});
								(n.exports || n.init) && !n.exportsFn && (n.exportsFn = t.makeShimExports(n));
								r[i] = n
							}), i.shim = r);
						n.packages && s(n.packages, function (n) {
							var r,
							t;
							n = typeof n == "string" ? {
								name : n
							}
							 : n;
							t = n.name;
							r = n.location;
							r && (i.paths[t] = n.location);
							i.pkgs[t] = n.name + "/" + (n.main || "main").replace(ni, "").replace(it, "")
						});
						a(h, function (n, t) {
							n.inited || n.map.unnormalized || (n.map = w(t))
						});
						(n.deps || n.callback) && t.require(n.deps || [], n.callback)
					},
					makeShimExports : function (n) {
						function t() {
							var t;
							return n.init && (t = n.init.apply(r, arguments)),
							t || n.exports && ct(n.exports)
						}
						return t
					},
					makeRequire : function (i, r) {
						function o(f, s, c) {
							var a,
							b,
							p;
							return r.enableBuildCallback && s && y(s) && (s.__requireJsBuild = !0),
							typeof f == "string" ? y(s) ? k(v("requireargs", "Invalid require call"), c) : i && e(st, f) ? st[f](h[i.id]) : u.get ? u.get(t, f, i, o) : (b = w(f, i, !1, !0), a = b.id, e(l, a) ? l[a] : k(v("notloaded", 'Module name "' + a + '" has not been loaded yet for context: ' + n + (i ? "" : ". Use require([])")))) : (ai(), t.nextTick(function () {
									ai();
									p = tt(w(null, i));
									p.skipMap = r.skipMap;
									p.init(f, s, c, {
										enabled : !0
									});
									bt()
								}), o)
						}
						return r = r || {},
						ft(o, {
							isBrowser : c,
							toUrl : function (n) {
								var u,
								r = n.lastIndexOf("."),
								f = n.split("/")[0],
								e = f === "." || f === "..";
								return r !== -1 && (!e || r > 1) && (u = n.substring(r, n.length), n = n.substring(0, r)),
								t.nameToUrl(nt(n, i && i.id, !0), u, !0)
							},
							defined : function (n) {
								return e(l, w(n, i, !1, !0).id)
							},
							specified : function (n) {
								return n = w(n, i, !1, !0).id,
								e(l, n) || e(h, n)
							}
						}),
						i || (o.undef = function (n) {
							vt();
							var r = w(n, i, !0),
							t = f(h, n);
							oi(n);
							delete l[n];
							delete lt[r.url];
							delete fi[n];
							ut(d, function (t, i) {
								t[0] === n && d.splice(i, 1)
							});
							t && (t.events.defined && (fi[n] = t.events), pt(n))
						}),
						o
					},
					enable : function (n) {
						var t = f(h, n.id);
						t && tt(n).enable()
					},
					completeLoad : function (n) {
						var r,
						t,
						u,
						o = f(i.shim, n) || {},
						s = o.exports;
						for (vt(); d.length; ) {
							if (t = d.shift(), t[0] === null) {
								if (t[0] = n, r)
									break;
								r = !0
							} else
								t[0] === n && (r = !0);
							kt(t)
						}
						if (u = f(h, n), !r && !e(l, n) && u && !u.inited) {
							if (i.enforceDefine && (!s || !ct(s)))
								return at(n) ? void 0 : k(v("nodefine", "No define call for " + n, null, [n]));
							kt([n, o.deps || [], o.exportsFn])
						}
						bt()
					},
					nameToUrl : function (n, r, e) {
						var a,
						h,
						c,
						v,
						o,
						s,
						l,
						y = f(i.pkgs, n);
						if (y && (n = y), l = f(ei, n), l)
							return t.nameToUrl(l, r, e);
						if (u.jsExtRegExp.test(n))
							o = n + (r || "");
						else {
							for (a = i.paths, h = n.split("/"), c = h.length; c > 0; c -= 1)
								if (v = h.slice(0, c).join("/"), s = f(a, v), s) {
									p(s) && (s = s[0]);
									h.splice(0, c, s);
									break
								}
							o = h.join("/");
							o += r || (/^data\:|\?/.test(o) || e ? "" : ".js");
							o = (o.charAt(0) === "/" || o.match(/^[\w\+\.\-]+:/) ? "" : i.baseUrl) + o
						}
						return i.urlArgs ? o + ((o.indexOf("?") === -1 ? "?" : "&") + i.urlArgs) : o
					},
					load : function (n, i) {
						u.load(t, n, i)
					},
					execCb : function (n, t, i, r) {
						return t.apply(r, i)
					},
					onScriptLoad : function (n) {
						if (n.type === "load" || ui.test((n.currentTarget || n.srcElement).readyState)) {
							b = null;
							var i = li(n);
							t.completeLoad(i.id)
						}
					},
					onScriptError : function (n) {
						var t = li(n);
						if (!at(t.id))
							return k(v("scripterror", "Script error for: " + t.id, n, [t.id]))
					}
				},
				t.require = t.makeRequire(),
				t
			}
			function kt() {
				return b && b.readyState === "interactive" ? b : (ut(et(), function (n) {
						if (n.readyState === "interactive")
							return b = n
					}), b)
			}
			var u,
			ot,
			w,
			k,
			nt,
			tt,
			b,
			st,
			h,
			lt,
			dt = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
			gt = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
			it = /\.js$/,
			ni = /^\.\//,
			at = Object.prototype,
			vt = at.toString,
			ti = at.hasOwnProperty,
			ii = Array.prototype,
			ri = ii.splice,
			c = typeof window != "undefined" && typeof navigator != "undefined" && !!window.document,
			yt = !c && typeof importScripts != "undefined",
			ui = c && navigator.platform === "PLAYSTATION 3" ? /^complete$/ : /^(complete|loaded)$/,
			pt = "_",
			wt = typeof opera != "undefined" && opera.toString() === "[object Opera]",
			d = {},
			l = {},
			rt = [],
			g = !1;
			if (typeof i == "undefined") {
				if (typeof t != "undefined") {
					if (y(t))
						return;
					l = t;
					t = undefined
				}
				typeof n == "undefined" || y(n) || (l = n, n = undefined);
				u = t = function (n, t, i, r) {
					var o,
					e,
					s = pt;
					return !p(n) && typeof n != "string" && (e = n, p(t) ? (n = t, t = i, i = r) : n = []),
					e && e.context && (s = e.context),
					o = f(d, s),
					o || (o = d[s] = u.s.newContext(s)),
					e && o.configure(e),
					o.require(n, t, i)
				};
				u.config = function (n) {
					return u(n)
				};
				u.nextTick = typeof setTimeout != "undefined" ? function (n) {
					setTimeout(n, 4)
				}
				 : function (n) {
					n()
				};
				n || (n = u);
				u.version = "2.1.17";
				u.jsExtRegExp = /^\/|:|\?|\.js$/;
				u.isBrowser = c;
				ot = u.s = {
					contexts : d,
					newContext : bt
				};
				u({});
				s(["toUrl", "undef", "defined", "specified"], function (n) {
					u[n] = function () {
						var t = d[pt];
						return t.require[n].apply(t, arguments)
					}
				});
				c && (w = ot.head = document.getElementsByTagName("head")[0], k = document.getElementsByTagName("base")[0], k && (w = ot.head = k.parentNode));
				u.onError = ht;
				u.createNode = function (n) {
					var t = n.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
					return t.type = n.scriptType || "text/javascript",
					t.charset = "utf-8",
					t.async = !0,
					t
				};
				u.load = function (n, t, i) {
					var f = n && n.config || {},
					r;
					if (c)
						return r = u.createNode(f, t, i), r.setAttribute("data-requirecontext", n.contextName), r.setAttribute("data-requiremodule", t), r.attachEvent && !(r.attachEvent.toString && r.attachEvent.toString().indexOf("[native code") < 0) && !wt ? (g = !0, r.attachEvent("onreadystatechange", n.onScriptLoad)) : (r.addEventListener("load", n.onScriptLoad, !1), r.addEventListener("error", n.onScriptError, !1)), r.src = i, st = r, k ? w.insertBefore(r, k) : w.appendChild(r), st = null, r;
					if (yt)
						try {
							importScripts(i);
							n.completeLoad(t)
						} catch (e) {
							n.onError(v("importscripts", "importScripts failed for " + t + " at " + i, e, [t]))
						}
				};
				c && !l.skipDataMain && ut(et(), function (n) {
					return w || (w = n.parentNode),
					nt = n.getAttribute("data-main"),
					nt ? (h = nt, l.baseUrl || (tt = h.split("/"), h = tt.pop(), lt = tt.length ? tt.join("/") + "/" : "./", l.baseUrl = lt), h = h.replace(it, ""), u.jsExtRegExp.test(h) && (h = nt), l.deps = l.deps ? l.deps.concat(h) : [h], !0) : void 0
				});
				i = function (n, t, i) {
					var r,
					u;
					typeof n != "string" && (i = t, t = n, n = null);
					p(t) || (i = t, t = null);
					!t && y(i) && (t = [], i.length && (i.toString().replace(dt, "").replace(gt, function (n, i) {
								t.push(i)
							}), t = (i.length === 1 ? ["require"] : ["require", "exports", "module"]).concat(t)));
					g && (r = st || kt(), r && (n || (n = r.getAttribute("data-requiremodule")), u = d[r.getAttribute("data-requirecontext")]));
					(u ? u.defQueue : rt).push([n, t, i])
				};
				i.amd = {
					jQuery : !0
				};
				u.exec = function (text) {
					return eval(text)
				};
				u(l)
			}
		})(this);
		AltLanPay.requirejs = t;
		AltLanPay.require = n;
		AltLanPay.define = i
	}
}
();
AltLanPay.define("requireLib", function () {}), function () {
	(function (n) {
		var i = this || eval("this"),
		r = i.document,
		f = i.navigator,
		t = i.jQuery,
		u = i.JSON;
		(function (n) {
			"function" == typeof AltLanPay.define && AltLanPay.define.amd ? AltLanPay.define("knockout", ["exports", "require"], n) : "function" == typeof require && "object" == typeof exports && "object" == typeof module ? n(module.exports || exports) : n(i.ko = {})
		})(function (e, o) {
			function a(n, t) {
				return null === n || typeof n in p ? n === t : !1
			}
			function w(t, i) {
				var r;
				return function () {
					r || (r = setTimeout(function () {
								r = n;
								t()
							}, i))
				}
			}
			function b(n, t) {
				var i;
				return function () {
					clearTimeout(i);
					i = setTimeout(n, t)
				}
			}
			function v(n, t, i, r) {
				s.d[n] = {
					init : function (n, u, f, e, o) {
						var c,
						h;
						return s.w(function () {
							var l = s.a.c(u()),
							f = !i != !l,
							e = !h;
							(e || t || f !== c) && (e && s.Z.oa() && (h = s.a.la(s.e.childNodes(n), !0)), f ? (e || s.e.T(n, s.a.la(h)), s.Ja(r ? r(o, l) : o, n)) : s.e.ma(n), c = f)
						}, null, {
							q : n
						}), {
							controlsDescendantBindings : !0
						}
					}
				};
				s.h.ka[n] = !1;
				s.e.R[n] = !0
			}
			var s = "undefined" != typeof e ? e : {},
			p,
			h,
			c,
			y,
			l;
			s.b = function (n, t) {
				for (var i = n.split("."), r = s, u = 0; u < i.length - 1; u++)
					r = r[i[u]];
				r[i[i.length - 1]] = t
			};
			s.D = function (n, t, i) {
				n[t] = i
			};
			s.version = "3.3.0";
			s.b("version", s.version);
			s.a = function () {
				function o(n, t) {
					for (var i in n)
						n.hasOwnProperty(i) && t(i, n[i])
				}
				function l(n, t) {
					if (t)
						for (var i in t)
							t.hasOwnProperty(i) && (n[i] = t[i]);
					return n
				}
				function a(n, t) {
					return n.__proto__ = t,
					n
				}
				function v(n, t, i, r) {
					var u = n[t].match(c) || [];
					s.a.o(i.match(c), function (n) {
						s.a.ga(u, n, r)
					});
					n[t] = u.join(" ")
				}
				var y = {
					__proto__ : []
				}
				instanceof Array,
				h = {},
				p = {};
				h[f && /Firefox\/2/i.test(f.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
				h.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
				o(h, function (n, t) {
					if (t.length)
						for (var i = 0, r = t.length; i < r; i++)
							p[t[i]] = n
				});
				var w = {
					propertychange : !0
				},
				e = r && function () {
					for (var t = 3, i = r.createElement("div"), u = i.getElementsByTagName("i"); i.innerHTML = "<!--[if gt IE " + ++t + "]><i><\/i><![endif]-->", u[0]; );
					return 4 < t ? t : n
				}
				(),
				c = /\S+/g;
				return {
					Bb : ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
					o : function (n, t) {
						for (var i = 0, r = n.length; i < r; i++)
							t(n[i], i)
					},
					m : function (n, t) {
						if ("function" == typeof Array.prototype.indexOf)
							return Array.prototype.indexOf.call(n, t);
						for (var i = 0, r = n.length; i < r; i++)
							if (n[i] === t)
								return i;
						return -1
					},
					vb : function (n, t, i) {
						for (var r = 0, u = n.length; r < u; r++)
							if (t.call(i, n[r], r))
								return n[r];
						return null
					},
					ya : function (n, t) {
						var i = s.a.m(n, t);
						0 < i ? n.splice(i, 1) : 0 === i && n.shift()
					},
					wb : function (n) {
						n = n || [];
						for (var i = [], t = 0, r = n.length; t < r; t++)
							0 > s.a.m(i, n[t]) && i.push(n[t]);
						return i
					},
					Ka : function (n, t) {
						n = n || [];
						for (var r = [], i = 0, u = n.length; i < u; i++)
							r.push(t(n[i], i));
						return r
					},
					xa : function (n, t) {
						n = n || [];
						for (var r = [], i = 0, u = n.length; i < u; i++)
							t(n[i], i) && r.push(n[i]);
						return r
					},
					ia : function (n, t) {
						if (t instanceof Array)
							n.push.apply(n, t);
						else
							for (var i = 0, r = t.length; i < r; i++)
								n.push(t[i]);
						return n
					},
					ga : function (n, t, i) {
						var r = s.a.m(s.a.cb(n), t);
						0 > r ? i && n.push(t) : i || n.splice(r, 1)
					},
					za : y,
					extend : l,
					Fa : a,
					Ga : y ? a : l,
					A : o,
					pa : function (n, t) {
						if (!n)
							return n;
						var r = {};
						for (var i in n)
							n.hasOwnProperty(i) && (r[i] = t(n[i], i, n));
						return r
					},
					Ra : function (n) {
						for (; n.firstChild; )
							s.removeNode(n.firstChild)
					},
					Jb : function (n) {
						n = s.a.O(n);
						for (var i = (n[0] && n[0].ownerDocument || r).createElement("div"), t = 0, u = n.length; t < u; t++)
							i.appendChild(s.S(n[t]));
						return i
					},
					la : function (n, t) {
						for (var r, i = 0, f = n.length, u = []; i < f; i++)
							r = n[i].cloneNode(!0), u.push(t ? s.S(r) : r);
						return u
					},
					T : function (n, t) {
						if (s.a.Ra(n), t)
							for (var i = 0, r = t.length; i < r; i++)
								n.appendChild(t[i])
					},
					Qb : function (n, t) {
						var r = n.nodeType ? [n] : n;
						if (0 < r.length) {
							for (var f = r[0], e = f.parentNode, i = 0, u = t.length; i < u; i++)
								e.insertBefore(t[i], f);
							for (i = 0, u = r.length; i < u; i++)
								s.removeNode(r[i])
						}
					},
					na : function (n, t) {
						if (n.length) {
							for (t = 8 === t.nodeType && t.parentNode || t; n.length && n[0].parentNode !== t; )
								n.splice(0, 1);
							if (1 < n.length) {
								var i = n[0],
								r = n[n.length - 1];
								for (n.length = 0; i !== r; )
									if (n.push(i), i = i.nextSibling, !i)
										return;
								n.push(r)
							}
						}
						return n
					},
					Sb : function (n, t) {
						7 > e ? n.setAttribute("selected", t) : n.selected = t
					},
					ib : function (t) {
						return null === t || t === n ? "" : t.trim ? t.trim() : t.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
					},
					Dc : function (n, t) {
						return n = n || "",
						t.length > n.length ? !1 : n.substring(0, t.length) === t
					},
					jc : function (n, t) {
						if (n === t)
							return !0;
						if (11 === n.nodeType)
							return !1;
						if (t.contains)
							return t.contains(3 === n.nodeType ? n.parentNode : n);
						if (t.compareDocumentPosition)
							return 16 == (t.compareDocumentPosition(n) & 16);
						for (; n && n != t; )
							n = n.parentNode;
						return !!n
					},
					Qa : function (n) {
						return s.a.jc(n, n.ownerDocument.documentElement)
					},
					tb : function (n) {
						return !!s.a.vb(n, s.a.Qa)
					},
					v : function (n) {
						return n && n.tagName && n.tagName.toLowerCase()
					},
					n : function (n, i, r) {
						var o = e && w[i],
						u,
						f;
						if (!o && t)
							t(n).bind(i, r);
						else if (o || "function" != typeof n.addEventListener) {
							if ("undefined" == typeof n.attachEvent)
								throw Error("Browser doesn't support addEventListener or attachEvent");
							u = function (t) {
								r.call(n, t)
							};
							f = "on" + i;
							n.attachEvent(f, u);
							s.a.C.fa(n, function () {
								n.detachEvent(f, u)
							})
						} else
							n.addEventListener(i, r, !1)
					},
					qa : function (n, u) {
						if (!n || !n.nodeType)
							throw Error("element must be a DOM node when calling triggerEvent");
						var f;
						if ("input" === s.a.v(n) && n.type && "click" == u.toLowerCase() ? (f = n.type, f = "checkbox" == f || "radio" == f) : f = !1, t && !f)
							t(n).trigger(u);
						else if ("function" == typeof r.createEvent) {
							if ("function" != typeof n.dispatchEvent)
								throw Error("The supplied element doesn't support dispatchEvent");
							f = r.createEvent(p[u] || "HTMLEvents");
							f.initEvent(u, !0, !0, i, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, n);
							n.dispatchEvent(f)
						} else if (f && n.click)
							n.click();
						else {
							if ("undefined" == typeof n.fireEvent)
								throw Error("Browser doesn't support triggering events");
							n.fireEvent("on" + u)
						}
					},
					c : function (n) {
						return s.F(n) ? n() : n
					},
					cb : function (n) {
						return s.F(n) ? n.B() : n
					},
					Ia : function (n, t, i) {
						var r;
						t && ("object" == typeof n.classList ? (r = n.classList[i ? "add" : "remove"], s.a.o(t.match(c), function (t) {
									r.call(n.classList, t)
								})) : "string" == typeof n.className.baseVal ? v(n.className, "baseVal", t, i) : v(n, "className", t, i))
					},
					Ha : function (t, i) {
						var r = s.a.c(i),
						u;
						(null === r || r === n) && (r = "");
						u = s.e.firstChild(t);
						!u || 3 != u.nodeType || s.e.nextSibling(u) ? s.e.T(t, [t.ownerDocument.createTextNode(r)]) : u.data = r;
						s.a.mc(t)
					},
					Rb : function (n, t) {
						if (n.name = t, 7 >= e)
							try {
								n.mergeAttributes(r.createElement("<input name='" + n.name + "'/>"), !1)
							} catch (i) {}

					},
					mc : function (n) {
						9 <= e && (n = 1 == n.nodeType ? n : n.parentNode, n.style && (n.style.zoom = n.style.zoom))
					},
					kc : function (n) {
						if (e) {
							var t = n.style.width;
							n.style.width = 0;
							n.style.width = t
						}
					},
					Bc : function (n, t) {
						n = s.a.c(n);
						t = s.a.c(t);
						for (var r = [], i = n; i <= t; i++)
							r.push(i);
						return r
					},
					O : function (n) {
						for (var i = [], t = 0, r = n.length; t < r; t++)
							i.push(n[t]);
						return i
					},
					Hc : 6 === e,
					Ic : 7 === e,
					M : e,
					Db : function (n, t) {
						for (var r = s.a.O(n.getElementsByTagName("input")).concat(s.a.O(n.getElementsByTagName("textarea"))), f = "string" == typeof t ? function (n) {
							return n.name === t
						}
							 : function (n) {
							return t.test(n.name)
						}, u = [], i = r.length - 1; 0 <= i; i--)
							f(r[i]) && u.push(r[i]);
						return u
					},
					yc : function (n) {
						return "string" == typeof n && (n = s.a.ib(n)) ? u && u.parse ? u.parse(n) : new Function("return " + n)() : null
					},
					jb : function (n, t, i) {
						if (!u || !u.stringify)
							throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
						return u.stringify(s.a.c(n), t, i)
					},
					zc : function (n, t, i) {
						var v,
						e,
						h,
						f,
						u,
						c;
						i = i || {};
						var l = i.params || {},
						a = i.includeFields || this.Bb,
						v = n;
						if ("object" == typeof n && "form" === s.a.v(n))
							for (v = n.action, e = a.length - 1; 0 <= e; e--)
								for (h = s.a.Db(n, a[e]), f = h.length - 1; 0 <= f; f--)
									l[h[f].name] = h[f].value;
						t = s.a.c(t);
						u = r.createElement("form");
						u.style.display = "none";
						u.action = v;
						u.method = "post";
						for (c in t)
							n = r.createElement("input"), n.type = "hidden", n.name = c, n.value = s.a.jb(s.a.c(t[c])), u.appendChild(n);
						o(l, function (n, t) {
							var i = r.createElement("input");
							i.type = "hidden";
							i.name = n;
							i.value = t;
							u.appendChild(i)
						});
						r.body.appendChild(u);
						i.submitter ? i.submitter(u) : u.submit();
						setTimeout(function () {
							u.parentNode.removeChild(u)
						}, 0)
					}
				}
			}
			();
			s.b("utils", s.a);
			s.b("utils.arrayForEach", s.a.o);
			s.b("utils.arrayFirst", s.a.vb);
			s.b("utils.arrayFilter", s.a.xa);
			s.b("utils.arrayGetDistinctValues", s.a.wb);
			s.b("utils.arrayIndexOf", s.a.m);
			s.b("utils.arrayMap", s.a.Ka);
			s.b("utils.arrayPushAll", s.a.ia);
			s.b("utils.arrayRemoveItem", s.a.ya);
			s.b("utils.extend", s.a.extend);
			s.b("utils.fieldsIncludedWithJsonPost", s.a.Bb);
			s.b("utils.getFormFields", s.a.Db);
			s.b("utils.peekObservable", s.a.cb);
			s.b("utils.postJson", s.a.zc);
			s.b("utils.parseJson", s.a.yc);
			s.b("utils.registerEventHandler", s.a.n);
			s.b("utils.stringifyJson", s.a.jb);
			s.b("utils.range", s.a.Bc);
			s.b("utils.toggleDomNodeCssClass", s.a.Ia);
			s.b("utils.triggerEvent", s.a.qa);
			s.b("utils.unwrapObservable", s.a.c);
			s.b("utils.objectForEach", s.a.A);
			s.b("utils.addOrRemoveItem", s.a.ga);
			s.b("utils.setTextContent", s.a.Ha);
			s.b("unwrap", s.a.c);
			Function.prototype.bind || (Function.prototype.bind = function (n) {
				var t = this,
				i;
				return 1 === arguments.length ? function () {
					return t.apply(n, arguments)
				}
				 : (i = Array.prototype.slice.call(arguments, 1), function () {
					var r = i.slice(0);
					return r.push.apply(r, arguments),
					t.apply(n, r)
				})
			});
			s.a.f = new function () {
				function r(r, f) {
					var e = r[t];
					if (!e || "null" === e || !i[e]) {
						if (!f)
							return n;
						e = r[t] = "ko" + u++;
						i[e] = {}

					}
					return i[e]
				}
				var u = 0,
				t = "__ko__" + (new Date).getTime(),
				i = {};
				return {
					get : function (t, i) {
						var u = r(t, !1);
						return u === n ? n : u[i]
					},
					set : function (t, i, u) {
						(u !== n || r(t, !1) !== n) && (r(t, !0)[i] = u)
					},
					clear : function (n) {
						var r = n[t];
						return r ? (delete i[r], n[t] = null, !0) : !1
					},
					I : function () {
						return u++ + t
					}
				}
			};
			s.b("utils.domData", s.a.f);
			s.b("utils.domData.clear", s.a.f.clear);
			s.a.C = new function () {
				function i(t, i) {
					var r = s.a.f.get(t, u);
					return r === n && i && (r = [], s.a.f.set(t, u, r)),
					r
				}
				function r(n) {
					var t = i(n, !1),
					u;
					if (t)
						for (t = t.slice(0), u = 0; u < t.length; u++)
							t[u](n);
					if (s.a.f.clear(n), s.a.C.cleanExternalData(n), f[n.nodeType])
						for (t = n.firstChild; n = t; )
							t = n.nextSibling, 8 === n.nodeType && r(n)
				}
				var u = s.a.f.I(),
				e = {
					1 : !0,
					8 : !0,
					9 : !0
				},
				f = {
					1 : !0,
					9 : !0
				};
				return {
					fa : function (n, t) {
						if ("function" != typeof t)
							throw Error("Callback must be a function");
						i(n, !0).push(t)
					},
					Pb : function (t, r) {
						var f = i(t, !1);
						f && (s.a.ya(f, r), 0 == f.length && s.a.f.set(t, u, n))
					},
					S : function (n) {
						var t,
						i,
						u;
						if (e[n.nodeType] && (r(n), f[n.nodeType]))
							for (t = [], s.a.ia(t, n.getElementsByTagName("*")), i = 0, u = t.length; i < u; i++)
								r(t[i]);
						return n
					},
					removeNode : function (n) {
						s.S(n);
						n.parentNode && n.parentNode.removeChild(n)
					},
					cleanExternalData : function (n) {
						t && "function" == typeof t.cleanData && t.cleanData([n])
					}
				}
			};
			s.S = s.a.C.S;
			s.removeNode = s.a.C.removeNode;
			s.b("cleanNode", s.S);
			s.b("removeNode", s.removeNode);
			s.b("utils.domNodeDisposal", s.a.C);
			s.b("utils.domNodeDisposal.addDisposeCallback", s.a.C.fa);
			s.b("utils.domNodeDisposal.removeDisposeCallback", s.a.C.Pb),
			function () {
				s.a.ca = function (n, u) {
					var e,
					f;
					if (t) {
						if (t.parseHTML)
							e = t.parseHTML(n, u) || [];
						else if ((e = t.clean([n], u)) && e[0]) {
							for (f = e[0]; f.parentNode && 11 !== f.parentNode.nodeType; )
								f = f.parentNode;
							f.parentNode && f.parentNode.removeChild(f)
						}
					} else {
						(f = u) || (f = r);
						e = f.parentWindow || f.defaultView || i;
						var o = s.a.ib(n).toLowerCase(),
						f = f.createElement("div"),
						o = o.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "<\/table>"] || !o.indexOf("<tr") && [2, "<table><tbody>", "<\/tbody><\/table>"] || (!o.indexOf("<td") || !o.indexOf("<th")) && [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"] || [0, "", ""],
						h = "ignored<div>" + o[1] + n + o[2] + "<\/div>";
						for ("function" == typeof e.innerShiv ? f.appendChild(e.innerShiv(h)) : f.innerHTML = h; o[0]--; )
							f = f.lastChild;
						e = s.a.O(f.lastChild.childNodes)
					}
					return e
				};
				s.a.gb = function (i, r) {
					if (s.a.Ra(i), r = s.a.c(r), null !== r && r !== n)
						if ("string" != typeof r && (r = r.toString()), t)
							t(i).html(r);
						else
							for (var f = s.a.ca(r, i.ownerDocument), u = 0; u < f.length; u++)
								i.appendChild(f[u])
				}
			}
			();
			s.b("utils.parseHtmlFragment", s.a.ca);
			s.b("utils.setHtml", s.a.gb);
			s.H = function () {
				function i(n, t) {
					var r;
					if (n)
						if (8 == n.nodeType)
							r = s.H.Lb(n.nodeValue), null != r && t.push({
								ic : n,
								wc : r
							});
						else if (1 == n.nodeType)
							for (var r = 0, u = n.childNodes, f = u.length; r < f; r++)
								i(u[r], t)
				}
				var t = {};
				return {
					$a : function (n) {
						if ("function" != typeof n)
							throw Error("You can only pass a function to ko.memoization.memoize()");
						var i = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
						return t[i] = n,
						"<!--[ko_memo:" + i + "]-->"
					},
					Wb : function (i, r) {
						var u = t[i];
						if (u === n)
							throw Error("Couldn't find any memo with ID " + i + ". Perhaps it's already been unmemoized.");
						try {
							return u.apply(null, r || []),
							!0
						}
						finally {
							delete t[i]
						}
					},
					Xb : function (n, t) {
						var f = [],
						u,
						o,
						r,
						e;
						for (i(n, f), u = 0, o = f.length; u < o; u++)
							r = f[u].ic, e = [r], t && s.a.ia(e, t), s.H.Wb(f[u].wc, e), r.nodeValue = "", r.parentNode && r.parentNode.removeChild(r)
					},
					Lb : function (n) {
						return (n = n.match(/^\[ko_memo\:(.*?)\]$/)) ? n[1] : null
					}
				}
			}
			();
			s.b("memoization", s.H);
			s.b("memoization.memoize", s.H.$a);
			s.b("memoization.unmemoize", s.H.Wb);
			s.b("memoization.parseMemoText", s.H.Lb);
			s.b("memoization.unmemoizeDomNodeAndDescendants", s.H.Xb);
			s.Sa = {
				throttle : function (n, t) {
					n.throttleEvaluation = t;
					var i = null;
					return s.j({
						read : n,
						write : function (r) {
							clearTimeout(i);
							i = setTimeout(function () {
									n(r)
								}, t)
						}
					})
				},
				rateLimit : function (n, t) {
					var i,
					r,
					u;
					"number" == typeof t ? i = t : (i = t.timeout, r = t.method);
					u = "notifyWhenChangesStop" == r ? b : w;
					n.Za(function (n) {
						return u(n, i)
					})
				},
				notify : function (n, t) {
					n.equalityComparer = "always" == t ? null : a
				}
			};
			p = {
				undefined : 1,
				boolean : 1,
				number : 1,
				string : 1
			};
			s.b("extenders", s.Sa);
			s.Ub = function (n, t, i) {
				this.da = n;
				this.La = t;
				this.hc = i;
				this.Gb = !1;
				s.D(this, "dispose", this.p)
			};
			s.Ub.prototype.p = function () {
				this.Gb = !0;
				this.hc()
			};
			s.Q = function () {
				s.a.Ga(this, s.Q.fn);
				this.G = {};
				this.rb = 1
			};
			h = {
				U : function (n, t, i) {
					var r = this,
					u;
					return i = i || "change",
					u = new s.Ub(r, t ? n.bind(t) : n, function () {
							s.a.ya(r.G[i], u);
							r.ua && r.ua(i)
						}),
					r.ja && r.ja(i),
					r.G[i] || (r.G[i] = []),
					r.G[i].push(u),
					u
				},
				notifySubscribers : function (n, t) {
					if (t = t || "change", "change" === t && this.Yb(), this.Ba(t))
						try {
							s.k.xb();
							for (var u = this.G[t].slice(0), r = 0, i; i = u[r]; ++r)
								i.Gb || i.La(n)
						}
					finally {
						s.k.end()
					}
				},
				Aa : function () {
					return this.rb
				},
				pc : function (n) {
					return this.Aa() !== n
				},
				Yb : function () {
					++this.rb
				},
				Za : function (n) {
					var t = this,
					e = s.F(t),
					r,
					u,
					i,
					f;
					t.ta || (t.ta = t.notifySubscribers, t.notifySubscribers = function (n, i) {
						i && "change" !== i ? "beforeChange" === i ? t.pb(n) : t.ta(n, i) : t.qb(n)
					});
					f = n(function () {
							e && i === t && (i = t());
							r = !1;
							t.Wa(u, i) && t.ta(u = i)
						});
					t.qb = function (n) {
						r = !0;
						i = n;
						f()
					};
					t.pb = function (n) {
						r || (u = n, t.ta(n, "beforeChange"))
					}
				},
				Ba : function (n) {
					return this.G[n] && this.G[n].length
				},
				nc : function (n) {
					if (n)
						return this.G[n] && this.G[n].length || 0;
					var t = 0;
					return s.a.A(this.G, function (n, i) {
						t += i.length
					}),
					t
				},
				Wa : function (n, t) {
					return !this.equalityComparer || !this.equalityComparer(n, t)
				},
				extend : function (n) {
					var t = this;
					return n && s.a.A(n, function (n, i) {
						var r = s.Sa[n];
						"function" == typeof r && (t = r(t, i) || t)
					}),
					t
				}
			};
			s.D(h, "subscribe", h.U);
			s.D(h, "extend", h.extend);
			s.D(h, "getSubscriptionsCount", h.nc);
			s.a.za && s.a.Fa(h, Function.prototype);
			s.Q.fn = h;
			s.Hb = function (n) {
				return null != n && "function" == typeof n.U && "function" == typeof n.notifySubscribers
			};
			s.b("subscribable", s.Q);
			s.b("isSubscribable", s.Hb);
			s.Z = s.k = function () {
				function t(t) {
					r.push(n);
					n = t
				}
				function i() {
					n = r.pop()
				}
				var r = [],
				n,
				u = 0;
				return {
					xb : t,
					end : i,
					Ob : function (t) {
						if (n) {
							if (!s.Hb(t))
								throw Error("Only subscribable things can act as dependencies");
							n.La(t, t.ac || (t.ac = ++u))
						}
					},
					u : function (n, r, u) {
						try {
							return t(),
							n.apply(r, u || [])
						}
						finally {
							i()
						}
					},
					oa : function () {
						if (n)
							return n.w.oa()
					},
					Ca : function () {
						if (n)
							return n.Ca
					}
				}
			}
			();
			s.b("computedContext", s.Z);
			s.b("computedContext.getDependenciesCount", s.Z.oa);
			s.b("computedContext.isInitial", s.Z.Ca);
			s.b("computedContext.isSleeping", s.Z.Jc);
			s.b("ignoreDependencies", s.Gc = s.k.u);
			s.r = function (n) {
				function t() {
					return 0 < arguments.length ? (t.Wa(i, arguments[0]) && (t.X(), i = arguments[0], t.W()), this) : (s.k.Ob(t), i)
				}
				var i = n;
				return s.Q.call(t),
				s.a.Ga(t, s.r.fn),
				t.B = function () {
					return i
				},
				t.W = function () {
					t.notifySubscribers(i)
				},
				t.X = function () {
					t.notifySubscribers(i, "beforeChange")
				},
				s.D(t, "peek", t.B),
				s.D(t, "valueHasMutated", t.W),
				s.D(t, "valueWillMutate", t.X),
				t
			};
			s.r.fn = {
				equalityComparer : a
			};
			c = s.r.Ac = "__ko_proto__";
			s.r.fn[c] = s.r;
			s.a.za && s.a.Fa(s.r.fn, s.Q.fn);
			s.Ta = function (t, i) {
				return null === t || t === n || t[c] === n ? !1 : t[c] === i ? !0 : s.Ta(t[c], i)
			};
			s.F = function (n) {
				return s.Ta(n, s.r)
			};
			s.Da = function (n) {
				return "function" == typeof n && n[c] === s.r || "function" == typeof n && n[c] === s.j && n.qc ? !0 : !1
			};
			s.b("observable", s.r);
			s.b("isObservable", s.F);
			s.b("isWriteableObservable", s.Da);
			s.b("isWritableObservable", s.Da);
			s.ba = function (n) {
				if (n = n || [], "object" == typeof n && "length" in n)
					return n = s.r(n), s.a.Ga(n, s.ba.fn), n.extend({
						trackArrayChanges : !0
					});
				throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
			};
			s.ba.fn = {
				remove : function (n) {
					for (var u, r = this.B(), i = [], f = "function" != typeof n || s.F(n) ? function (t) {
						return t === n
					}
						 : n, t = 0; t < r.length; t++)
						u = r[t], f(u) && (0 === i.length && this.X(), i.push(u), r.splice(t, 1), t--);
					return i.length && this.W(),
					i
				},
				removeAll : function (t) {
					if (t === n) {
						var i = this.B(),
						r = i.slice(0);
						return this.X(),
						i.splice(0, i.length),
						this.W(),
						r
					}
					return t ? this.remove(function (n) {
						return 0 <= s.a.m(t, n)
					}) : []
				},
				destroy : function (n) {
					var i = this.B(),
					r = "function" != typeof n || s.F(n) ? function (t) {
						return t === n
					}
					 : n,
					t;
					for (this.X(), t = i.length - 1; 0 <= t; t--)
						r(i[t]) && (i[t]._destroy = !0);
					this.W()
				},
				destroyAll : function (t) {
					return t === n ? this.destroy(function () {
						return !0
					}) : t ? this.destroy(function (n) {
						return 0 <= s.a.m(t, n)
					}) : []
				},
				indexOf : function (n) {
					var t = this();
					return s.a.m(t, n)
				},
				replace : function (n, t) {
					var i = this.indexOf(n);
					0 <= i && (this.X(), this.B()[i] = t, this.W())
				}
			};
			s.a.o("pop push reverse shift sort splice unshift".split(" "), function (n) {
				s.ba.fn[n] = function () {
					var t = this.B();
					return this.X(),
					this.yb(t, n, arguments),
					t = t[n].apply(t, arguments),
					this.W(),
					t
				}
			});
			s.a.o(["slice"], function (n) {
				s.ba.fn[n] = function () {
					var t = this();
					return t[n].apply(t, arguments)
				}
			});
			s.a.za && s.a.Fa(s.ba.fn, s.r.fn);
			s.b("observableArray", s.ba);
			s.Sa.trackArrayChanges = function (n) {
				function o() {
					var e,
					f;
					i || (i = !0, e = n.notifySubscribers, n.notifySubscribers = function (n, t) {
						return t && "change" !== t || ++r,
						e.apply(this, arguments)
					}, f = [].concat(n.B() || []), t = null, u = n.U(function (i) {
								if (i = [].concat(i || []), n.Ba("arrayChange")) {
									var u;
									(!t || 1 < r) && (t = s.a.Ma(f, i, {
												sparse : !0
											}));
									u = t
								}
								f = i;
								t = null;
								r = 0;
								u && u.length && n.notifySubscribers(u, "arrayChange")
							}))
				}
				if (!n.yb) {
					var i = !1,
					t = null,
					u,
					r = 0,
					f = n.ja,
					e = n.ua;
					n.ja = function (t) {
						f && f.call(n, t);
						"arrayChange" === t && o()
					};
					n.ua = function (t) {
						e && e.call(n, t);
						"arrayChange" !== t || n.Ba("arrayChange") || (u.p(), i = !1)
					};
					n.yb = function (n, u, f) {
						function c(n, t, i) {
							return l[l.length] = {
								status : n,
								value : t,
								index : i
							}
						}
						if (i && !r) {
							var l = [],
							e = n.length,
							h = f.length,
							o = 0;
							switch (u) {
							case "push":
								o = e;
							case "unshift":
								for (u = 0; u < h; u++)
									c("added", f[u], o + u);
								break;
							case "pop":
								o = e - 1;
							case "shift":
								e && c("deleted", n[o], o);
								break;
							case "splice":
								u = Math.min(Math.max(0, 0 > f[0] ? e + f[0] : f[0]), e);
								for (var e = 1 === h ? e : Math.min(u + (f[1] || 0), e), h = u + h - 2, o = Math.max(e, h), a = [], v = [], y = 2; u < o; ++u, ++y)
									u < e && v.push(c("deleted", n[u], u)), u < h && a.push(c("added", f[y], u));
								s.a.Cb(v, a);
								break;
							default:
								return
							}
							t = l
						}
					}
				}
			};
			s.w = s.j = function (t, i, r) {
				function rt(n, t, i) {
					if (g && t === u)
						throw Error("A 'pure' computed must not be called recursively");
					f[n] = i;
					i.sa = o++;
					i.ea = t.Aa()
				}
				function b() {
					var n,
					t;
					for (n in f)
						if (f.hasOwnProperty(n) && (t = f[n], t.da.pc(t.ea)))
							return !0
				}
				function ut() {
					!e && f && s.a.A(f, function (n, t) {
						t.p && t.p()
					});
					f = null;
					o = 0;
					y = !0;
					e = c = !1
				}
				function ft() {
					var n = u.throttleEvaluation;
					n && 0 <= n ? (clearTimeout(st), st = setTimeout(function () {
								a(!0)
							}, n)) : u.nb ? u.nb() : a(!0)
				}
				function a(t) {
					var v;
					if (!k && !y) {
						if (it && it()) {
							if (!d) {
								p();
								return
							}
						} else
							d = !1;
						k = !0;
						try {
							var r = f,
							a = o,
							b = g ? n : !o;
							s.k.xb({
								La : function (n, t) {
									y || (a && r[t] ? (rt(t, n, r[t]), delete r[t], --a) : f[t] || rt(t, n, e ? {
											da : n
										}
											 : n.U(ft)))
								},
								w : u,
								Ca : b
							});
							f = {};
							o = 0;
							try {
								v = i ? l.call(i) : l()
							}
							finally {
								s.k.end();
								a && !e && s.a.A(r, function (n, t) {
									t.p && t.p()
								});
								c = !1
							}
							u.Wa(h, v) && (e || w(h, "beforeChange"), h = v, e ? u.Yb() : t && w(h));
							b && w(h, "awake")
						}
						finally {
							k = !1
						}
						o || p()
					}
				}
				function u() {
					if (0 < arguments.length) {
						if ("function" != typeof nt)
							throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
						return nt.apply(i, arguments),
						this
					}
					return s.k.Ob(u),
					(c || e && b()) && a(),
					h
				}
				function et() {
					return (c && !o || e && b()) && a(),
					h
				}
				function ot() {
					return c || 0 < o
				}
				function w(n, t) {
					u.notifySubscribers(n, t)
				}
				var h,
				c = !0,
				k = !1,
				d = !1,
				y = !1,
				l = t,
				g = !1,
				e = !1,
				ht;
				if (l && "object" == typeof l ? (r = l, l = r.read) : (r = r || {}, l || (l = r.read)), "function" != typeof l)
					throw Error("Pass a function that returns the value of the ko.computed");
				var nt = r.write,
				v = r.disposeWhenNodeIsRemoved || r.q || null,
				tt = r.disposeWhen || r.Pa,
				it = tt,
				p = ut,
				f = {},
				o = 0,
				st = null;
				return i || (i = r.owner),
				s.Q.call(u),
				s.a.Ga(u, s.j.fn),
				u.B = et,
				u.oa = function () {
					return o
				},
				u.qc = "function" == typeof nt,
				u.p = function () {
					p()
				},
				u.$ = ot,
				ht = u.Za,
				u.Za = function (n) {
					ht.call(u, n);
					u.nb = function () {
						u.pb(h);
						c = !0;
						u.qb(u)
					}
				},
				r.pure ? (e = g = !0, u.ja = function (n) {
					if (!y && e && "change" == n) {
						if (e = !1, c || b())
							f = null, o = 0, c = !0, a();
						else {
							var t = [];
							s.a.A(f, function (n, i) {
								t[i.sa] = n
							});
							s.a.o(t, function (n, t) {
								var r = f[n],
								i = r.da.U(ft);
								i.sa = t;
								i.ea = r.ea;
								f[n] = i
							})
						}
						y || w(h, "awake")
					}
				}, u.ua = function (t) {
					y || "change" != t || u.Ba("change") || (s.a.A(f, function (n, t) {
							t.p && (f[n] = {
									da : t.da,
									sa : t.sa,
									ea : t.ea
								}, t.p())
						}), e = !0, w(n, "asleep"))
				}, u.bc = u.Aa, u.Aa = function () {
					return e && (c || b()) && a(),
					u.bc()
				}) : r.deferEvaluation && (u.ja = function (n) {
					"change" != n && "beforeChange" != n || et()
				}),
				s.D(u, "peek", u.B),
				s.D(u, "dispose", u.p),
				s.D(u, "isActive", u.$),
				s.D(u, "getDependenciesCount", u.oa),
				v && (d = !0, v.nodeType && (it = function () {
						return !s.a.Qa(v) || tt && tt()
					})),
				e || r.deferEvaluation || a(),
				v && ot() && v.nodeType && (p = function () {
					s.a.C.Pb(v, p);
					ut()
				}, s.a.C.fa(v, p)),
				u
			};
			s.sc = function (n) {
				return s.Ta(n, s.j)
			};
			h = s.r.Ac;
			s.j[h] = s.r;
			s.j.fn = {
				equalityComparer : a
			};
			s.j.fn[h] = s.j;
			s.a.za && s.a.Fa(s.j.fn, s.Q.fn);
			s.b("dependentObservable", s.j);
			s.b("computed", s.j);
			s.b("isComputed", s.sc);
			s.Nb = function (n, t) {
				return "function" == typeof n ? s.w(n, t, {
					pure : !0
				}) : (n = s.a.extend({}, n), n.pure = !0, s.w(n, t))
			};
			s.b("pureComputed", s.Nb),
			function () {
				function t(u, f, e) {
					if (e = e || new i, u = f(u), "object" != typeof u || null === u || u === n || u instanceof Date || u instanceof String || u instanceof Number || u instanceof Boolean)
						return u;
					var o = u instanceof Array ? [] : {};
					return e.save(u, o),
					r(u, function (i) {
						var r = f(u[i]),
						s;
						switch (typeof r) {
						case "boolean":
						case "number":
						case "string":
						case "function":
							o[i] = r;
							break;
						case "object":
						case "undefined":
							s = e.get(r);
							o[i] = s !== n ? s : t(r, f, e)
						}
					}),
					o
				}
				function r(n, t) {
					if (n instanceof Array) {
						for (var i = 0; i < n.length; i++)
							t(i);
						"function" == typeof n.toJSON && t("toJSON")
					} else
						for (i in n)
							t(i)
				}
				function i() {
					this.keys = [];
					this.mb = []
				}
				s.Vb = function (n) {
					if (0 == arguments.length)
						throw Error("When calling ko.toJS, pass the object you want to convert.");
					return t(n, function (n) {
						for (var t = 0; s.F(n) && 10 > t; t++)
							n = n();
						return n
					})
				};
				s.toJSON = function (n, t, i) {
					return n = s.Vb(n),
					s.a.jb(n, t, i)
				};
				i.prototype = {
					save : function (n, t) {
						var i = s.a.m(this.keys, n);
						0 <= i ? this.mb[i] = t : (this.keys.push(n), this.mb.push(t))
					},
					get : function (t) {
						return t = s.a.m(this.keys, t),
						0 <= t ? this.mb[t] : n
					}
				}
			}
			();
			s.b("toJS", s.Vb);
			s.b("toJSON", s.toJSON),
			function () {
				s.i = {
					s : function (t) {
						switch (s.a.v(t)) {
						case "option":
							return !0 === t.__ko__hasDomDataOptionValue__ ? s.a.f.get(t, s.d.options.ab) : 7 >= s.a.M ? t.getAttributeNode("value") && t.getAttributeNode("value").specified ? t.value : t.text : t.value;
						case "select":
							return 0 <= t.selectedIndex ? s.i.s(t.options[t.selectedIndex]) : n;
						default:
							return t.value
						}
					},
					Y : function (t, i, r) {
						switch (s.a.v(t)) {
						case "option":
							switch (typeof i) {
							case "string":
								s.a.f.set(t, s.d.options.ab, n);
								"__ko__hasDomDataOptionValue__" in t && delete t.__ko__hasDomDataOptionValue__;
								t.value = i;
								break;
							default:
								s.a.f.set(t, s.d.options.ab, i);
								t.__ko__hasDomDataOptionValue__ = !0;
								t.value = "number" == typeof i ? i : ""
							}
							break;
						case "select":
							("" === i || null === i) && (i = n);
							for (var f = -1, u = 0, o = t.options.length, e; u < o; ++u)
								if (e = s.i.s(t.options[u]), e == i || "" == e && i === n) {
									f = u;
									break
								}
							(r || 0 <= f || i === n && 1 < t.size) && (t.selectedIndex = f);
							break;
						default:
							(null === i || i === n) && (i = "");
							t.value = i
						}
					}
				}
			}
			();
			s.b("selectExtensions", s.i);
			s.b("selectExtensions.readValue", s.i.s);
			s.b("selectExtensions.writeValue", s.i.Y);
			s.h = function () {
				function n(n) {
					var c,
					u,
					i;
					n = s.a.ib(n);
					123 === n.charCodeAt(0) && (n = n.slice(1, -1));
					var a = [],
					h = n.match(t),
					o,
					r = [],
					l = 0;
					if (h)
						for (h.push(","), c = 0; u = h[c]; ++c) {
							if (i = u.charCodeAt(0), 44 === i) {
								if (0 >= l) {
									a.push(o && r.length ? {
										key : o,
										value : r.join("")
									}
										 : {
										unknown : o || r.join("")
									});
									o = l = 0;
									r = [];
									continue
								}
							} else if (58 === i) {
								if (!l && !o && 1 === r.length) {
									o = r.pop();
									continue
								}
							} else
								47 === i && c && 1 < u.length ? (i = h[c - 1].match(f)) && !e[i[0]] && (n = n.substr(n.indexOf(u) + 1), h = n.match(t), h.push(","), c = -1, u = "/") : 40 === i || 123 === i || 91 === i ? ++l : 41 === i || 125 === i || 93 === i ? --l : o || r.length || 34 !== i && 39 !== i || (u = u.slice(1, -1));
							r.push(u)
						}
					return a
				}
				var r = ["true", "false", "null", "undefined"],
				u = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
				t = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"),
				f = /[\])"'A-Za-z0-9_$]+$/,
				e = {
					"in" : 1,
					"return" : 1,
					"typeof" : 1
				},
				i = {};
				return {
					ka : [],
					V : i,
					bb : n,
					Ea : function (t, f) {
						function e(n, t) {
							var a,
							f;
							if (!l) {
								if (f = s.getBindingHandler(n), f && f.preprocess && !(t = f.preprocess(t, n, e)))
									return;
								(f = i[n]) && (a = t, 0 <= s.a.m(r, a) ? a = !1 : (f = a.match(u), a = null === f ? !1 : f[1] ? "Object(" + f[1] + ")" + f[2] : a), f = a);
								f && o.push("'" + n + "':function(_z){" + a + "=_z}")
							}
							c && (t = "function(){return " + t + " }");
							h.push("'" + n + "':" + t)
						}
						f = f || {};
						var h = [],
						o = [],
						c = f.valueAccessors,
						l = f.bindingParams,
						a = "string" == typeof t ? n(t) : t;
						return s.a.o(a, function (n) {
							e(n.key || n.unknown, n.value)
						}),
						o.length && e("_ko_property_writers", "{" + o.join(",") + " }"),
						h.join(",")
					},
					vc : function (n, t) {
						for (var i = 0; i < n.length; i++)
							if (n[i].key == t)
								return !0;
						return !1
					},
					ra : function (n, t, i, r, u) {
						n && s.F(n) ? !s.Da(n) || u && n.B() === r || n(r) : (n = t.get("_ko_property_writers")) && n[i] && n[i](r)
					}
				}
			}
			();
			s.b("expressionRewriting", s.h);
			s.b("expressionRewriting.bindingRewriteValidators", s.h.ka);
			s.b("expressionRewriting.parseObjectLiteral", s.h.bb);
			s.b("expressionRewriting.preProcessBindings", s.h.Ea);
			s.b("expressionRewriting._twoWayBindings", s.h.V);
			s.b("jsonExpressionRewriting", s.h);
			s.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", s.h.Ea),
			function () {
				function n(n) {
					return 8 == n.nodeType && e.test(t ? n.text : n.nodeValue)
				}
				function i(n) {
					return 8 == n.nodeType && o.test(t ? n.text : n.nodeValue)
				}
				function u(t, r) {
					for (var u = t, f = 1, e = []; u = u.nextSibling; ) {
						if (i(u) && (f--, 0 === f))
							return e;
						e.push(u);
						n(u) && f++
					}
					if (!r)
						throw Error("Cannot find closing comment tag to match: " + t.nodeValue);
					return null
				}
				function f(n, t) {
					var i = u(n, t);
					return i ? 0 < i.length ? i[i.length - 1].nextSibling : n.nextSibling : null
				}
				var t = r && "<!--test-->" === r.createComment("test").text,
				e = t ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
				o = t ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
				h = {
					ul : !0,
					ol : !0
				};
				s.e = {
					R : {},
					childNodes : function (t) {
						return n(t) ? u(t) : t.childNodes
					},
					ma : function (t) {
						if (n(t)) {
							t = s.e.childNodes(t);
							for (var i = 0, r = t.length; i < r; i++)
								s.removeNode(t[i])
						} else
							s.a.Ra(t)
					},
					T : function (t, i) {
						if (n(t)) {
							s.e.ma(t);
							for (var u = t.nextSibling, r = 0, f = i.length; r < f; r++)
								u.parentNode.insertBefore(i[r], u)
						} else
							s.a.T(t, i)
					},
					Mb : function (t, i) {
						n(t) ? t.parentNode.insertBefore(i, t.nextSibling) : t.firstChild ? t.insertBefore(i, t.firstChild) : t.appendChild(i)
					},
					Fb : function (t, i, r) {
						r ? n(t) ? t.parentNode.insertBefore(i, r.nextSibling) : r.nextSibling ? t.insertBefore(i, r.nextSibling) : t.appendChild(i) : s.e.Mb(t, i)
					},
					firstChild : function (t) {
						return n(t) ? !t.nextSibling || i(t.nextSibling) ? null : t.nextSibling : t.firstChild
					},
					nextSibling : function (t) {
						return n(t) && (t = f(t)),
						t.nextSibling && i(t.nextSibling) ? null : t.nextSibling
					},
					oc : n,
					Fc : function (n) {
						return (n = (t ? n.text : n.nodeValue).match(e)) ? n[1] : null
					},
					Kb : function (t) {
						var o,
						r,
						u,
						e;
						if (h[s.a.v(t)] && (o = t.firstChild, o))
							do
								if (1 === o.nodeType) {
									if (r = o.firstChild, u = null, r)
										do
											u ? u.push(r) : n(r) ? (e = f(r, !0), e ? r = e : u = [r]) : i(r) && (u = [r]);
										while (r = r.nextSibling);
									if (r = u)
										for (u = o.nextSibling, e = 0; e < r.length; e++)
											u ? t.insertBefore(r[e], u) : t.appendChild(r[e])
								}
							while (o = o.nextSibling)
					}
				}
			}
			();
			s.b("virtualElements", s.e);
			s.b("virtualElements.allowedBindings", s.e.R);
			s.b("virtualElements.emptyNode", s.e.ma);
			s.b("virtualElements.insertAfter", s.e.Fb);
			s.b("virtualElements.prepend", s.e.Mb);
			s.b("virtualElements.setDomNodeChildren", s.e.T),
			function () {
				s.L = function () {
					this.ec = {}

				};
				s.a.extend(s.L.prototype, {
					nodeHasBindings : function (n) {
						switch (n.nodeType) {
						case 1:
							return null != n.getAttribute("data-bind") || s.g.getComponentNameForNode(n);
						case 8:
							return s.e.oc(n);
						default:
							return !1
						}
					},
					getBindings : function (n, t) {
						var i = this.getBindingsString(n, t),
						i = i ? this.parseBindingsString(i, t, n) : null;
						return s.g.sb(i, n, t, !1)
					},
					getBindingAccessors : function (n, t) {
						var i = this.getBindingsString(n, t),
						i = i ? this.parseBindingsString(i, t, n, {
								valueAccessors : !0
							}) : null;
						return s.g.sb(i, n, t, !0)
					},
					getBindingsString : function (n) {
						switch (n.nodeType) {
						case 1:
							return n.getAttribute("data-bind");
						case 8:
							return s.e.Fc(n);
						default:
							return null
						}
					},
					parseBindingsString : function (n, t, i, r) {
						var u,
						f,
						e,
						h,
						c;
						try {
							return u = this.ec,
							f = n + (r && r.valueAccessors || ""),
							(e = u[f]) || (c = "with($context){with($data||{}){return{" + s.h.Ea(n, r) + "}}}", h = new Function("$context", "$element", c), e = u[f] = h),
							e(t, i)
						} catch (o) {
							throw o.message = "Unable to parse bindings.\nBindings value: " + n + "\nMessage: " + o.message,
							o;
						}
					}
				});
				s.L.instance = new s.L
			}
			();
			s.b("bindingProvider", s.L),
			function () {
				function v(n) {
					return function () {
						return n
					}
				}
				function u(n) {
					return n()
				}
				function o(n) {
					return s.a.pa(s.k.u(n), function (t, i) {
						return function () {
							return n()[i]
						}
					})
				}
				function y(n, t, i) {
					return "function" == typeof n ? o(n.bind(null, t, i)) : s.a.pa(n, v)
				}
				function p(n, t) {
					return o(this.getBindings.bind(this, n, t))
				}
				function h(n, t, i) {
					var r,
					u = s.e.firstChild(t),
					f = s.L.instance,
					e = f.preprocessNode;
					if (e) {
						for (; r = u; )
							u = s.e.nextSibling(r), e.call(f, r);
						u = s.e.firstChild(t)
					}
					for (; r = u; )
						u = s.e.nextSibling(r), c(n, r, i)
				}
				function c(n, t, i) {
					var u = !0,
					r = 1 === t.nodeType;
					r && s.e.Kb(t);
					(r && i || s.L.instance.nodeHasBindings(t)) && (u = l(t, null, n, i).shouldBindDescendants);
					u && !a[s.a.v(t)] && h(n, t, !r)
				}
				function w(n) {
					var i = [],
					r = {},
					t = [];
					return s.a.A(n, function u(f) {
						if (!r[f]) {
							var e = s.getBindingHandler(f);
							e && (e.after && (t.push(f), s.a.o(e.after, function (i) {
										if (n[i]) {
											if (-1 !== s.a.m(t, i))
												throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + t.join(", "));
											u(i)
										}
									}), t.length--), i.push({
									key : f,
									Eb : e
								}));
							r[f] = !0
						}
					}),
					i
				}
				function l(t, i, r, e) {
					var v = s.a.f.get(t, f),
					o,
					l,
					a,
					c;
					if (!i) {
						if (v)
							throw Error("You cannot apply bindings multiple times to the same element.");
						s.a.f.set(t, f, !0)
					}
					if (!v && e && s.Tb(t, r), i && "function" != typeof i)
						o = i;
					else {
						var y = s.L.instance,
						b = y.getBindingAccessors || p,
						h = s.j(function () {
								return (o = i ? i(r, t) : b.call(y, t, r)) && r.K && r.K(),
								o
							}, null, {
								q : t
							});
						o && h.$() || (h = null)
					}
					return o && (a = h ? function (n) {
						return function () {
							return u(h()[n])
						}
					}
						 : function (n) {
						return o[n]
					}, c = function () {
						return s.a.pa(h ? h() : o, u)
					}, c.get = function (n) {
						return o[n] && u(a(n))
					}, c.has = function (n) {
						return n in o
					}, e = w(o), s.a.o(e, function (i) {
							var e = i.Eb.init,
							h = i.Eb.update,
							u = i.key;
							if (8 === t.nodeType && !s.e.R[u])
								throw Error("The binding '" + u + "' cannot be used with virtual elements");
							try {
								"function" == typeof e && s.k.u(function () {
									var i = e(t, a(u), c, r.$data, r);
									if (i && i.controlsDescendantBindings) {
										if (l !== n)
											throw Error("Multiple bindings (" + l + " and " + u + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
										l = u
									}
								});
								"function" == typeof h && s.j(function () {
									h(t, a(u), c, r.$data, r)
								}, null, {
									q : t
								})
							} catch (f) {
								throw f.message = 'Unable to process binding "' + u + ": " + o[u] + '"\nMessage: ' + f.message,
								f;
							}
						})), {
						shouldBindDescendants : l === n
					}
				}
				function r(n) {
					return n && n instanceof s.N ? n : new s.N(n)
				}
				var a,
				f,
				e;
				s.d = {};
				a = {
					script : !0,
					textarea : !0
				};
				s.getBindingHandler = function (n) {
					return s.d[n]
				};
				s.N = function (t, i, r, u) {
					var f = this,
					h = "function" == typeof t && !s.F(t),
					o,
					e = s.j(function () {
							var o = h ? t() : t,
							n = s.a.c(o);
							return i ? (i.K && i.K(), s.a.extend(f, i), e && (f.K = e)) : (f.$parents = [], f.$root = n, f.ko = s),
							f.$rawData = o,
							f.$data = n,
							r && (f[r] = n),
							u && u(f, i, n),
							f.$data
						}, null, {
							Pa : function () {
								return o && !s.a.tb(o)
							},
							q : !0
						});
					e.$() && (f.K = e, e.equalityComparer = null, o = [], e.Zb = function (t) {
						o.push(t);
						s.a.C.fa(t, function (t) {
							s.a.ya(o, t);
							o.length || (e.p(), f.K = e = n)
						})
					})
				};
				s.N.prototype.createChildContext = function (n, t, i) {
					return new s.N(n, this, t, function (n, t) {
						n.$parentContext = t;
						n.$parent = t.$data;
						n.$parents = (t.$parents || []).slice(0);
						n.$parents.unshift(n.$parent);
						i && i(n)
					})
				};
				s.N.prototype.extend = function (n) {
					return new s.N(this.K || this.$data, this, null, function (t, i) {
						t.$rawData = i.$rawData;
						s.a.extend(t, "function" == typeof n ? n() : n)
					})
				};
				f = s.a.f.I();
				e = s.a.f.I();
				s.Tb = function (n, t) {
					if (2 != arguments.length)
						return s.a.f.get(n, e);
					s.a.f.set(n, e, t);
					t.K && t.K.Zb(n)
				};
				s.va = function (n, t, i) {
					return 1 === n.nodeType && s.e.Kb(n),
					l(n, t, r(i), !0)
				};
				s.cc = function (n, t, i) {
					return i = r(i),
					s.va(n, y(t, i, n), i)
				};
				s.Ja = function (n, t) {
					1 !== t.nodeType && 8 !== t.nodeType || h(r(n), t, !0)
				};
				s.ub = function (n, u) {
					if (!t && i.jQuery && (t = i.jQuery), u && 1 !== u.nodeType && 8 !== u.nodeType)
						throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
					u = u || i.document.body;
					c(r(n), u, !0)
				};
				s.Oa = function (t) {
					switch (t.nodeType) {
					case 1:
					case 8:
						var i = s.Tb(t);
						if (i)
							return i;
						if (t.parentNode)
							return s.Oa(t.parentNode)
					}
					return n
				};
				s.gc = function (t) {
					return (t = s.Oa(t)) ? t.$data : n
				};
				s.b("bindingHandlers", s.d);
				s.b("applyBindings", s.ub);
				s.b("applyBindingsToDescendants", s.Ja);
				s.b("applyBindingAccessorsToNode", s.va);
				s.b("applyBindingsToNode", s.cc);
				s.b("contextFor", s.Oa);
				s.b("dataFor", s.gc)
			}
			(),
			function (n) {
				function u(t, u) {
					var e = i.hasOwnProperty(t) ? i[t] : n,
					o;
					e ? e.U(u) : (e = i[t] = new s.Q, e.U(u), f(t, function (n, u) {
							var f = !!u && !!u.synchronous;
							r[t] = {
								definition : n,
								tc : f
							};
							delete i[t];
							o || f ? e.notifySubscribers(n) : setTimeout(function () {
								e.notifySubscribers(n)
							}, 0)
						}), o = !0)
				}
				function f(n, i) {
					t("getConfig", [n], function (r) {
						r ? t("loadComponent", [n, r], function (n) {
							i(n, r)
						}) : i(null, null)
					})
				}
				function t(i, r, u, f) {
					var e,
					o,
					h;
					if (f || (f = s.g.loaders.slice(0)), e = f.shift(), e)
						if (o = e[i], o) {
							if (h = !1, o.apply(e, r.concat(function (n) {
										h ? u(null) : null !== n ? u(n) : t(i, r, u, f)
									})) !== n && (h = !0, !e.suppressLoaderExceptions))
								throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
						} else
							t(i, r, u, f);
					else
						u(null)
				}
				var i = {},
				r = {};
				s.g = {
					get : function (t, i) {
						var f = r.hasOwnProperty(t) ? r[t] : n;
						f ? f.tc ? s.k.u(function () {
							i(f.definition)
						}) : setTimeout(function () {
							i(f.definition)
						}, 0) : u(t, i)
					},
					zb : function (n) {
						delete r[n]
					},
					ob : t
				};
				s.g.loaders = [];
				s.b("components", s.g);
				s.b("components.get", s.g.get);
				s.b("components.clearCachedDefinition", s.g.zb)
			}
			(),
			function () {
				function l(n, i, r, f) {
					function e() {
						0 == --c && f(o)
					}
					var o = {},
					c = 2,
					h = r.template;
					r = r.viewModel;
					h ? u(i, h, function (t) {
						s.g.ob("loadTemplate", [n, t], function (n) {
							o.template = n;
							e()
						})
					}) : e();
					r ? u(i, r, function (i) {
						s.g.ob("loadViewModel", [n, i], function (n) {
							o[t] = n;
							e()
						})
					}) : e()
				}
				function e(n, i, r) {
					if ("function" == typeof i)
						r(function (n) {
							return new i(n)
						});
					else if ("function" == typeof i[t])
						r(i[t]);
					else if ("instance" in i) {
						var u = i.instance;
						r(function () {
							return u
						})
					} else
						"viewModel" in i ? e(n, i.viewModel, r) : n("Unknown viewModel value: " + i)
				}
				function h(n) {
					switch (s.a.v(n)) {
					case "script":
						return s.a.ca(n.text);
					case "textarea":
						return s.a.ca(n.value);
					case "template":
						if (c(n.content))
							return s.a.la(n.content.childNodes)
					}
					return s.a.la(n.childNodes)
				}
				function c(n) {
					return i.DocumentFragment ? n instanceof DocumentFragment : n && 11 === n.nodeType
				}
				function u(n, t, r) {
					"string" == typeof t.require ? o || i.require ? (o || i.require)([t.require], r) : n("Uses require, but no AMD loader is present") : r(t)
				}
				function f(n) {
					return function (t) {
						throw Error("Component '" + n + "': " + t);
					}
				}
				var n = {},
				t;
				s.g.register = function (t, i) {
					if (!i)
						throw Error("Invalid configuration for " + t);
					if (s.g.Xa(t))
						throw Error("Component " + t + " is already registered");
					n[t] = i
				};
				s.g.Xa = function (t) {
					return t in n
				};
				s.g.Ec = function (t) {
					delete n[t];
					s.g.zb(t)
				};
				s.g.Ab = {
					getConfig : function (t, i) {
						i(n.hasOwnProperty(t) ? n[t] : null)
					},
					loadComponent : function (n, t, i) {
						var r = f(n);
						u(r, t, function (t) {
							l(n, r, t, i)
						})
					},
					loadTemplate : function (n, t, u) {
						if (n = f(n), "string" == typeof t)
							u(s.a.ca(t));
						else if (t instanceof Array)
							u(t);
						else if (c(t))
							u(s.a.O(t.childNodes));
						else if (t.element)
							if (t = t.element, i.HTMLElement ? t instanceof HTMLElement : t && t.tagName && 1 === t.nodeType)
								u(h(t));
							else if ("string" == typeof t) {
								var e = r.getElementById(t);
								e ? u(h(e)) : n("Cannot find element with ID " + t)
							} else
								n("Unknown element type: " + t);
						else
							n("Unknown template value: " + t)
					},
					loadViewModel : function (n, t, i) {
						e(f(n), t, i)
					}
				};
				t = "createViewModel";
				s.b("components.register", s.g.register);
				s.b("components.isRegistered", s.g.Xa);
				s.b("components.unregister", s.g.Ec);
				s.b("components.defaultLoader", s.g.Ab);
				s.g.loaders.push(s.g.Ab);
				s.g.$b = n
			}
			(),
			function () {
				function n(n, i) {
					var r = n.getAttribute("params");
					if (r) {
						var r = t.parseBindingsString(r, i, n, {
								valueAccessors : !0,
								bindingParams : !0
							}),
						r = s.a.pa(r, function (t) {
								return s.w(t, null, {
									q : n
								})
							}),
						u = s.a.pa(r, function (t) {
								var i = t.B();
								return t.$() ? s.w({
									read : function () {
										return s.a.c(t())
									},
									write : s.Da(i) && function (n) {
										t()(n)
									},
									q : n
								}) : i
							});
						return u.hasOwnProperty("$raw") || (u.$raw = r),
						u
					}
					return {
						$raw : {}

					}
				}
				s.g.getComponentNameForNode = function (n) {
					return n = s.a.v(n),
					s.g.Xa(n) && n
				};
				s.g.sb = function (t, i, r, u) {
					var f,
					e;
					if (1 === i.nodeType && (f = s.g.getComponentNameForNode(i), f)) {
						if (t = t || {}, t.component)
							throw Error('Cannot use the "component" binding on a custom element matching a component');
						e = {
							name : f,
							params : n(i, r)
						};
						t.component = u ? function () {
							return e
						}
						 : e
					}
					return t
				};
				var t = new s.L;
				9 > s.a.M && (s.g.register = function (n) {
					return function (t) {
						return r.createElement(t),
						n.apply(this, arguments)
					}
				}
					(s.g.register), r.createDocumentFragment = function (n) {
					return function () {
						var t = n(),
						i = s.g.$b;
						for (var r in i)
							i.hasOwnProperty(r) && t.createElement(r);
						return t
					}
				}
					(r.createDocumentFragment))
			}
			(),
			function (n) {
				function t(n, t, i) {
					if (t = t.template, !t)
						throw Error("Component '" + n + "' has no template");
					n = s.a.la(t);
					s.e.T(i, n)
				}
				function i(n, t, i, r) {
					var u = n.createViewModel;
					return u ? u.call(n, r, {
						element : t,
						templateNodes : i
					}) : r
				}
				var r = 0;
				s.d.component = {
					init : function (u, f, e, o, h) {
						function a() {
							var n = c && c.dispose;
							"function" == typeof n && n.call(c);
							l = null
						}
						var c,
						l,
						v = s.a.O(s.e.childNodes(u));
						return s.a.C.fa(u, a),
						s.w(function () {
							var o = s.a.c(f()),
							e,
							y,
							p;
							if ("string" == typeof o ? e = o : (e = s.a.c(o.name), y = s.a.c(o.params)), !e)
								throw Error("No component name specified");
							p = l = ++r;
							s.g.get(e, function (r) {
								if (l === p) {
									if (a(), !r)
										throw Error("Unknown component '" + e + "'");
									t(e, r, u);
									var f = i(r, u, v, y);
									r = h.createChildContext(f, n, function (n) {
											n.$component = f;
											n.$componentTemplateNodes = v
										});
									c = f;
									s.Ja(r, u)
								}
							})
						}, null, {
							q : u
						}), {
							controlsDescendantBindings : !0
						}
					}
				};
				s.e.R.component = !0
			}
			();
			y = {
				"class" : "className",
				"for" : "htmlFor"
			};
			s.d.attr = {
				update : function (t, i) {
					var r = s.a.c(i()) || {};
					s.a.A(r, function (i, r) {
						r = s.a.c(r);
						var u = !1 === r || null === r || r === n;
						u && t.removeAttribute(i);
						8 >= s.a.M && i in y ? (i = y[i], u ? t.removeAttribute(i) : t[i] = r) : u || t.setAttribute(i, r.toString());
						"name" === i && s.a.Rb(t, u ? "" : r.toString())
					})
				}
			},
			function () {
				s.d.checked = {
					after : ["value", "attr"],
					init : function (t, i, r) {
						function c() {
							var c = t.checked,
							n = a ? u() : c,
							o;
							s.Z.Ca() || f && !c || (o = s.k.u(i), e ? h !== n ? (c && (s.a.ga(o, n, !0), s.a.ga(o, h, !1)), h = n) : s.a.ga(o, n, c) : s.h.ra(o, r, "checked", n, !0))
						}
						function l() {
							var n = s.a.c(i());
							t.checked = e ? 0 <= s.a.m(n, u()) : o ? n : u() === n
						}
						var u = s.Nb(function () {
								return r.has("checkedValue") ? s.a.c(r.get("checkedValue")) : r.has("value") ? s.a.c(r.get("value")) : t.value
							}),
						o = "checkbox" == t.type,
						f = "radio" == t.type;
						if (o || f) {
							var e = o && s.a.c(i())instanceof Array,
							h = e ? u() : n,
							a = f || e;
							f && !t.name && s.d.uniqueName.init(t, function () {
								return !0
							});
							s.w(c, null, {
								q : t
							});
							s.a.n(t, "click", c);
							s.w(l, null, {
								q : t
							})
						}
					}
				};
				s.h.V.checked = !0;
				s.d.checkedValue = {
					update : function (n, t) {
						n.value = s.a.c(t())
					}
				}
			}
			();
			s.d.css = {
				update : function (n, t) {
					var i = s.a.c(t());
					null !== i && "object" == typeof i ? s.a.A(i, function (t, i) {
						i = s.a.c(i);
						s.a.Ia(n, t, i)
					}) : (i = String(i || ""), s.a.Ia(n, n.__ko__cssValue, !1), n.__ko__cssValue = i, s.a.Ia(n, i, !0))
				}
			};
			s.d.enable = {
				update : function (n, t) {
					var i = s.a.c(t());
					i && n.disabled ? n.removeAttribute("disabled") : i || n.disabled || (n.disabled = !0)
				}
			};
			s.d.disable = {
				update : function (n, t) {
					s.d.enable.update(n, function () {
						return !s.a.c(t())
					})
				}
			};
			s.d.event = {
				init : function (n, t, i, r, u) {
					var f = t() || {};
					s.a.A(f, function (f) {
						"string" == typeof f && s.a.n(n, f, function (n) {
							var o,
							h = t()[f],
							e;
							if (h) {
								try {
									e = s.a.O(arguments);
									r = u.$data;
									e.unshift(r);
									o = h.apply(r, e)
								}
								finally {
									!0 !== o && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
								}
								!1 === i.get(f + "Bubble") && (n.cancelBubble = !0, n.stopPropagation && n.stopPropagation())
							}
						})
					})
				}
			};
			s.d.foreach = {
				Ib : function (n) {
					return function () {
						var i = n(),
						t = s.a.cb(i);
						return !t || "number" == typeof t.length ? {
							foreach : i,
							templateEngine : s.P.Va
						}
						 : (s.a.c(i), {
							foreach : t.data,
							as : t.as,
							includeDestroyed : t.includeDestroyed,
							afterAdd : t.afterAdd,
							beforeRemove : t.beforeRemove,
							afterRender : t.afterRender,
							beforeMove : t.beforeMove,
							afterMove : t.afterMove,
							templateEngine : s.P.Va
						})
					}
				},
				init : function (n, t) {
					return s.d.template.init(n, s.d.foreach.Ib(t))
				},
				update : function (n, t, i, r, u) {
					return s.d.template.update(n, s.d.foreach.Ib(t), i, r, u)
				}
			};
			s.h.ka.foreach = !1;
			s.e.R.foreach = !0;
			s.d.hasfocus = {
				init : function (n, t, i) {
					function r(r) {
						var u,
						f;
						if (n.__ko_hasfocusUpdating = !0, u = n.ownerDocument, "activeElement" in u) {
							try {
								f = u.activeElement
							} catch (e) {
								f = u.body
							}
							r = f === n
						}
						u = t();
						s.h.ra(u, i, "hasfocus", r, !0);
						n.__ko_hasfocusLastValue = r;
						n.__ko_hasfocusUpdating = !1
					}
					var u = r.bind(null, !0),
					f = r.bind(null, !1);
					s.a.n(n, "focus", u);
					s.a.n(n, "focusin", u);
					s.a.n(n, "blur", f);
					s.a.n(n, "focusout", f)
				},
				update : function (n, t) {
					var i = !!s.a.c(t());
					n.__ko_hasfocusUpdating || n.__ko_hasfocusLastValue === i || (i ? n.focus() : n.blur(), s.k.u(s.a.qa, null, [n, i ? "focusin" : "focusout"]))
				}
			};
			s.h.V.hasfocus = !0;
			s.d.hasFocus = s.d.hasfocus;
			s.h.V.hasFocus = !0;
			s.d.html = {
				init : function () {
					return {
						controlsDescendantBindings : !0
					}
				},
				update : function (n, t) {
					s.a.gb(n, t())
				}
			};
			v("if");
			v("ifnot", !1, !0);
			v("with", !0, !1, function (n, t) {
				return n.createChildContext(t)
			});
			l = {};
			s.d.options = {
				init : function (n) {
					if ("select" !== s.a.v(n))
						throw Error("options binding applies only to SELECT elements");
					for (; 0 < n.length; )
						n.remove(0);
					return {
						controlsDescendantBindings : !0
					}
				},
				update : function (t, i, r) {
					function v() {
						return s.a.xa(t.options, function (n) {
							return n.selected
						})
					}
					function y(n, t, i) {
						var r = typeof t;
						return "function" == r ? t(n) : "string" == r ? n[t] : i
					}
					function p(n, i) {
						if (o && e)
							s.i.Y(t, s.a.c(r.get("value")), !0);
						else if (f.length) {
							var u = 0 <= s.a.m(f, s.i.s(i[0]));
							s.a.Sb(i[0], u);
							o && !u && s.k.u(s.a.qa, null, [t, "change"])
						}
					}
					var h = t.multiple,
					c = 0 != t.length && h ? t.scrollTop : null,
					u = s.a.c(i()),
					e = r.get("valueAllowUnset") && r.has("value"),
					w = r.get("optionsIncludeDestroyed"),
					a,
					f,
					o;
					i = {};
					f = [];
					e || (h ? f = s.a.Ka(v(), s.i.s) : 0 <= t.selectedIndex && f.push(s.i.s(t.options[t.selectedIndex])));
					u && ("undefined" == typeof u.length && (u = [u]), a = s.a.xa(u, function (t) {
								return w || t === n || null === t || !s.a.c(t._destroy)
							}), r.has("optionsCaption") && (u = s.a.c(r.get("optionsCaption")), null !== u && u !== n && a.unshift(l)));
					o = !1;
					i.beforeRemove = function (n) {
						t.removeChild(n)
					};
					u = p;
					r.has("optionsAfterRender") && "function" == typeof r.get("optionsAfterRender") && (u = function (t, i) {
						p(0, i);
						s.k.u(r.get("optionsAfterRender"), null, [i[0], t !== l ? t : n])
					});
					s.a.fb(t, a, function (i, u, h) {
						return h.length && (f = !e && h[0].selected ? [s.i.s(h[0])] : [], o = !0),
						u = t.ownerDocument.createElement("option"),
						i === l ? (s.a.Ha(u, r.get("optionsCaption")), s.i.Y(u, n)) : (h = y(i, r.get("optionsValue"), i), s.i.Y(u, s.a.c(h)), i = y(i, r.get("optionsText"), h), s.a.Ha(u, i)),
						[u]
					}, i, u);
					s.k.u(function () {
						e ? s.i.Y(t, s.a.c(r.get("value")), !0) : (h ? f.length && v().length < f.length : f.length && 0 <= t.selectedIndex ? s.i.s(t.options[t.selectedIndex]) !== f[0] : f.length || 0 <= t.selectedIndex) && s.a.qa(t, "change")
					});
					s.a.kc(t);
					c && 20 < Math.abs(c - t.scrollTop) && (t.scrollTop = c)
				}
			};
			s.d.options.ab = s.a.f.I();
			s.d.selectedOptions = {
				after : ["options", "foreach"],
				init : function (n, t, i) {
					s.a.n(n, "change", function () {
						var u = t(),
						r = [];
						s.a.o(n.getElementsByTagName("option"), function (n) {
							n.selected && r.push(s.i.s(n))
						});
						s.h.ra(u, i, "selectedOptions", r)
					})
				},
				update : function (n, t) {
					if ("select" != s.a.v(n))
						throw Error("values binding applies only to SELECT elements");
					var i = s.a.c(t());
					i && "number" == typeof i.length && s.a.o(n.getElementsByTagName("option"), function (n) {
						var t = 0 <= s.a.m(i, s.i.s(n));
						s.a.Sb(n, t)
					})
				}
			};
			s.h.V.selectedOptions = !0;
			s.d.style = {
				update : function (t, i) {
					var r = s.a.c(i() || {});
					s.a.A(r, function (i, r) {
						r = s.a.c(r);
						(null === r || r === n || !1 === r) && (r = "");
						t.style[i] = r
					})
				}
			};
			s.d.submit = {
				init : function (n, t, i, r, u) {
					if ("function" != typeof t())
						throw Error("The value for a submit binding must be a function");
					s.a.n(n, "submit", function (i) {
						var r,
						f = t();
						try {
							r = f.call(u.$data, n)
						}
						finally {
							!0 !== r && (i.preventDefault ? i.preventDefault() : i.returnValue = !1)
						}
					})
				}
			};
			s.d.text = {
				init : function () {
					return {
						controlsDescendantBindings : !0
					}
				},
				update : function (n, t) {
					s.a.Ha(n, t())
				}
			};
			s.e.R.text = !0,
			function () {
				if (i && i.navigator)
					var t = function (n) {
						if (n)
							return parseFloat(n[1])
					},
				e = i.opera && i.opera.version && parseInt(i.opera.version()),
				r = i.navigator.userAgent,
				o = t(r.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
				h = t(r.match(/Firefox\/([^ ]*)/));
				if (10 > s.a.M)
					var u = s.a.f.I(), f = s.a.f.I(), c = function (n) {
						var t = this.activeElement;
						(t = t && s.a.f.get(t, f)) && t(n)
					},
				l = function (n, t) {
					var i = n.ownerDocument;
					s.a.f.get(i, u) || (s.a.f.set(i, u, !0), s.a.n(i, "selectionchange", c));
					s.a.f.set(n, f, t)
				};
				s.d.textInput = {
					init : function (t, i, r) {
						function u(n, i) {
							s.a.n(t, n, i)
						}
						function p() {
							var r = s.a.c(i());
							(null === r || r === n) && (r = "");
							v !== n && r === v ? setTimeout(p, 4) : t.value !== r && (y = r, t.value = r)
						}
						function c() {
							a || (v = t.value, a = setTimeout(f, 4))
						}
						function f() {
							clearTimeout(a);
							v = a = n;
							var u = t.value;
							y !== u && (y = u, s.h.ra(i(), r, "textInput", u))
						}
						var y = t.value,
						a,
						v;
						10 > s.a.M ? (u("propertychange", function (n) {
								"value" === n.propertyName && f()
							}), 8 == s.a.M && (u("keyup", f), u("keydown", f)), 8 <= s.a.M && (l(t, f), u("dragend", c))) : (u("input", f), 5 > o && "textarea" === s.a.v(t) ? (u("keydown", c), u("paste", c), u("cut", c)) : 11 > e ? u("keydown", c) : 4 > h && (u("DOMAutoComplete", f), u("dragdrop", f), u("drop", f)));
						u("change", f);
						s.w(p, null, {
							q : t
						})
					}
				};
				s.h.V.textInput = !0;
				s.d.textinput = {
					preprocess : function (n, t, i) {
						i("textInput", n)
					}
				}
			}
			();
			s.d.uniqueName = {
				init : function (n, t) {
					if (t()) {
						var i = "ko_unique_" + ++s.d.uniqueName.fc;
						s.a.Rb(n, i)
					}
				}
			};
			s.d.uniqueName.fc = 0;
			s.d.value = {
				after : ["options", "foreach"],
				init : function (n, t, i) {
					var o,
					h;
					if ("input" != n.tagName.toLowerCase() || "checkbox" != n.type && "radio" != n.type) {
						var r = ["change"],
						u = i.get("valueUpdate"),
						f = !1,
						e = null;
						u && ("string" == typeof u && (u = [u]), s.a.ia(r, u), r = s.a.wb(r));
						o = function () {
							e = null;
							f = !1;
							var r = t(),
							u = s.i.s(n);
							s.h.ra(r, i, "value", u)
						};
						!s.a.M || "input" != n.tagName.toLowerCase() || "text" != n.type || "off" == n.autocomplete || n.form && "off" == n.form.autocomplete || -1 != s.a.m(r, "propertychange") || (s.a.n(n, "propertychange", function () {
								f = !0
							}), s.a.n(n, "focus", function () {
								f = !1
							}), s.a.n(n, "blur", function () {
								f && o()
							}));
						s.a.o(r, function (t) {
							var i = o;
							s.a.Dc(t, "after") && (i = function () {
								e = s.i.s(n);
								setTimeout(o, 0)
							}, t = t.substring(5));
							s.a.n(n, t, i)
						});
						h = function () {
							var r = s.a.c(t()),
							u = s.i.s(n),
							f;
							null !== e && r === e ? setTimeout(h, 0) : r !== u && ("select" === s.a.v(n) ? (f = i.get("valueAllowUnset"), u = function () {
									s.i.Y(n, r, f)
								}, u(), f || r === s.i.s(n) ? setTimeout(u, 0) : s.k.u(s.a.qa, null, [n, "change"])) : s.i.Y(n, r))
						};
						s.w(h, null, {
							q : n
						})
					} else
						s.va(n, {
							checkedValue : t
						})
				},
				update : function () {}

			};
			s.h.V.value = !0;
			s.d.visible = {
				update : function (n, t) {
					var i = s.a.c(t()),
					r = "none" != n.style.display;
					i && !r ? n.style.display = "" : !i && r && (n.style.display = "none")
				}
			},
			function (n) {
				s.d[n] = {
					init : function (t, i, r, u, f) {
						return s.d.event.init.call(this, t, function () {
							var t = {};
							return t[n] = i(),
							t
						}, r, u, f)
					}
				}
			}
			("click");
			s.J = function () {};
			s.J.prototype.renderTemplateSource = function () {
				throw Error("Override renderTemplateSource");
			};
			s.J.prototype.createJavaScriptEvaluatorBlock = function () {
				throw Error("Override createJavaScriptEvaluatorBlock");
			};
			s.J.prototype.makeTemplateSource = function (n, t) {
				if ("string" == typeof n) {
					t = t || r;
					var i = t.getElementById(n);
					if (!i)
						throw Error("Cannot find template with ID " + n);
					return new s.t.l(i)
				}
				if (1 == n.nodeType || 8 == n.nodeType)
					return new s.t.ha(n);
				throw Error("Unknown template type: " + n);
			};
			s.J.prototype.renderTemplate = function (n, t, i, r) {
				return n = this.makeTemplateSource(n, r),
				this.renderTemplateSource(n, t, i, r)
			};
			s.J.prototype.isTemplateRewritten = function (n, t) {
				return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(n, t).data("isRewritten")
			};
			s.J.prototype.rewriteTemplate = function (n, t, i) {
				n = this.makeTemplateSource(n, i);
				t = t(n.text());
				n.text(t);
				n.data("isRewritten", !0)
			};
			s.b("templateEngine", s.J);
			s.kb = function () {
				function n(n, t, i, r) {
					var o,
					f,
					u,
					e;
					for (n = s.h.bb(n), o = s.h.ka, f = 0; f < n.length; f++)
						if (u = n[f].key, o.hasOwnProperty(u))
							if (e = o[u], "function" == typeof e) {
								if (u = e(n[f].value))
									throw Error(u);
							} else if (!e)
								throw Error("This template engine does not support the '" + u + "' binding within its templates");
					return i = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + s.h.Ea(n, {
							valueAccessors : !0
						}) + " } })()},'" + i.toLowerCase() + "')",
					r.createJavaScriptEvaluatorBlock(i) + t
				}
				var t = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
				i = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
				return {
					lc : function (n, t, i) {
						t.isTemplateRewritten(n, i) || t.rewriteTemplate(n, function (n) {
							return s.kb.xc(n, t)
						}, i)
					},
					xc : function (r, u) {
						return r.replace(t, function (t, i, r, f, e) {
							return n(e, i, r, u)
						}).replace(i, function (t, i) {
							return n(i, "<!-- ko -->", "#comment", u)
						})
					},
					dc : function (n, t) {
						return s.H.$a(function (i, r) {
							var u = i.nextSibling;
							u && u.nodeName.toLowerCase() === t && s.va(u, n, r)
						})
					}
				}
			}
			();
			s.b("__tr_ambtns", s.kb.dc),
			function () {
				var i,
				t;
				s.t = {};
				s.t.l = function (n) {
					this.l = n
				};
				s.t.l.prototype.text = function () {
					var n = s.a.v(this.l),
					n = "script" === n ? "text" : "textarea" === n ? "value" : "innerHTML",
					t;
					if (0 == arguments.length)
						return this.l[n];
					t = arguments[0];
					"innerHTML" === n ? s.a.gb(this.l, t) : this.l[n] = t
				};
				i = s.a.f.I() + "_";
				s.t.l.prototype.data = function (n) {
					if (1 === arguments.length)
						return s.a.f.get(this.l, i + n);
					s.a.f.set(this.l, i + n, arguments[1])
				};
				t = s.a.f.I();
				s.t.ha = function (n) {
					this.l = n
				};
				s.t.ha.prototype = new s.t.l;
				s.t.ha.prototype.text = function () {
					if (0 == arguments.length) {
						var i = s.a.f.get(this.l, t) || {};
						return i.lb === n && i.Na && (i.lb = i.Na.innerHTML),
						i.lb
					}
					s.a.f.set(this.l, t, {
						lb : arguments[0]
					})
				};
				s.t.l.prototype.nodes = function () {
					if (0 == arguments.length)
						return (s.a.f.get(this.l, t) || {}).Na;
					s.a.f.set(this.l, t, {
						Na : arguments[0]
					})
				};
				s.b("templateSources", s.t);
				s.b("templateSources.domElement", s.t.l);
				s.b("templateSources.anonymousTemplate", s.t.ha)
			}
			(),
			function () {
				function t(n, t, i) {
					var r;
					for (t = s.e.nextSibling(t); n && (r = n) !== t; )
						n = s.e.nextSibling(r), i(r, n)
				}
				function f(n, i) {
					if (n.length) {
						var r = n[0],
						u = n[n.length - 1],
						f = r.parentNode,
						e = s.L.instance,
						o = e.preprocessNode;
						if (o) {
							if (t(r, u, function (n, t) {
									var f = n.previousSibling,
									i = o.call(e, n);
									i && (n === r && (r = i[0] || t), n === u && (u = i[i.length - 1] || f))
								}), n.length = 0, !r)
								return;
							r === u ? n.push(r) : (n.push(r, u), s.a.na(n, f))
						}
						t(r, u, function (n) {
							1 !== n.nodeType && 8 !== n.nodeType || s.ub(i, n)
						});
						t(r, u, function (n) {
							1 !== n.nodeType && 8 !== n.nodeType || s.H.Xb(n, [i])
						});
						s.a.na(n, f)
					}
				}
				function i(n) {
					return n.nodeType ? n : 0 < n.length ? n[0] : null
				}
				function e(n, t, u, e, o) {
					o = o || {};
					var h = (n && i(n) || u || {}).ownerDocument,
					c = o.templateEngine || r;
					if (s.kb.lc(u, c, h), u = c.renderTemplate(u, e, o, h), "number" != typeof u.length || 0 < u.length && "number" != typeof u[0].nodeType)
						throw Error("Template engine must return an array of DOM nodes");
					h = !1;
					switch (t) {
					case "replaceChildren":
						s.e.T(n, u);
						h = !0;
						break;
					case "replaceNode":
						s.a.Qb(n, u);
						h = !0;
						break;
					case "ignoreTargetNode":
						break;
					default:
						throw Error("Unknown renderMode: " + t);
					}
					return h && (f(u, e), o.afterRender && s.k.u(o.afterRender, null, [u, e.$data])),
					u
				}
				function o(n, t, i) {
					return s.F(n) ? n() : "function" == typeof n ? n(t, i) : n
				}
				var r,
				u;
				s.hb = function (t) {
					if (!(t == n || t instanceof s.J))
						throw Error("templateEngine must inherit from ko.templateEngine");
					r = t
				};
				s.eb = function (t, u, f, h, c) {
					if (f = f || {}, (f.templateEngine || r) == n)
						throw Error("Set a template engine before calling renderTemplate");
					if (c = c || "replaceChildren", h) {
						var l = i(h);
						return s.j(function () {
							var n = u && u instanceof s.N ? u : new s.N(s.a.c(u)),
							r = o(t, n.$data, n),
							n = e(h, c, r, n, f);
							"replaceNode" == c && (h = n, l = i(h))
						}, null, {
							Pa : function () {
								return !l || !s.a.Qa(l)
							},
							q : l && "replaceNode" == c ? l.parentNode : l
						})
					}
					return s.H.$a(function (n) {
						s.eb(t, u, f, n, "replaceNode")
					})
				};
				s.Cc = function (t, i, r, u, h) {
					function l(n, t) {
						f(t, c);
						r.afterRender && r.afterRender(t, n);
						c = null
					}
					function a(n, i) {
						c = h.createChildContext(n, r.as, function (n) {
								n.$index = i
							});
						var u = o(t, n, c);
						return e(null, "ignoreTargetNode", u, c, r)
					}
					var c;
					return s.j(function () {
						var t = s.a.c(i) || [];
						"undefined" == typeof t.length && (t = [t]);
						t = s.a.xa(t, function (t) {
								return r.includeDestroyed || t === n || null === t || !s.a.c(t._destroy)
							});
						s.k.u(s.a.fb, null, [u, t, a, r, l])
					}, null, {
						q : u
					})
				};
				u = s.a.f.I();
				s.d.template = {
					init : function (n, t) {
						var i = s.a.c(t());
						if ("string" == typeof i || i.name)
							s.e.ma(n);
						else {
							if ("nodes" in i) {
								if (i = i.nodes || [], s.F(i))
									throw Error('The "nodes" option must be a plain, non-observable array.');
							} else
								i = s.e.childNodes(n);
							i = s.a.Jb(i);
							new s.t.ha(n).nodes(i)
						}
						return {
							controlsDescendantBindings : !0
						}
					},
					update : function (t, i, r, f, e) {
						var h = i(),
						o;
						i = s.a.c(h);
						r = !0;
						f = null;
						"string" == typeof i ? i = {}

						 : (h = i.name, "if" in i && (r = s.a.c(i["if"])), r && "ifnot" in i && (r = !s.a.c(i.ifnot)), o = s.a.c(i.data));
						"foreach" in i ? f = s.Cc(h || t, r && i.foreach || [], i, t, e) : r ? (e = "data" in i ? e.createChildContext(o, i.as) : e, f = s.eb(h || t, e, i, t)) : s.e.ma(t);
						e = f;
						(o = s.a.f.get(t, u)) && "function" == typeof o.p && o.p();
						s.a.f.set(t, u, e && e.$() ? e : n)
					}
				};
				s.h.ka.template = function (n) {
					return n = s.h.bb(n),
					1 == n.length && n[0].unknown || s.h.vc(n, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
				};
				s.e.R.template = !0
			}
			();
			s.b("setTemplateEngine", s.hb);
			s.b("renderTemplate", s.eb);
			s.a.Cb = function (n, t, i) {
				if (n.length && t.length)
					for (var o, r, f, e, u = o = 0; (!i || u < i) && (f = n[o]); ++o) {
						for (r = 0; e = t[r]; ++r)
							if (f.value === e.value) {
								f.moved = e.index;
								e.moved = f.index;
								t.splice(r, 1);
								u = r = 0;
								break
							}
						u += r
					}
			};
			s.a.Ma = function () {
				function n(n, t, i, r, u) {
					for (var o = Math.min, l = Math.max, a = [], c = n.length, f, h = t.length, v = h - c || 1, w = c + h + 1, y, p, b, e = 0; e <= c; e++)
						for (p = y, a.push(y = []), b = o(h, e + v), f = l(0, e - 1); f <= b; f++)
							y[f] = f ? e ? n[e - 1] === t[f - 1] ? p[f - 1] : o(p[f] || w, y[f - 1] || w) + 1 : f + 1 : e + 1;
					for (o = [], l = [], v = [], e = c, f = h; e || f; )
						h = a[e][f] - 1, f && h === a[e][f - 1] ? l.push(o[o.length] = {
								status : i,
								value : t[--f],
								index : f
							}) : e && h === a[e - 1][f] ? v.push(o[o.length] = {
								status : r,
								value : n[--e],
								index : e
							}) : (--f, --e, u.sparse || o.push({
								status : "retained",
								value : t[f]
							}));
					return s.a.Cb(l, v, 10 * c),
					o.reverse()
				}
				return function (t, i, r) {
					return r = "boolean" == typeof r ? {
						dontLimitMoves : r
					}
					 : r || {},
					t = t || [],
					i = i || [],
					t.length <= i.length ? n(t, i, "added", "deleted", r) : n(i, t, "deleted", "added", r)
				}
			}
			();
			s.b("utils.compareArrays", s.a.Ma),
			function () {
				function i(t, i, r, u, f) {
					var e = [],
					o = s.j(function () {
							var n = i(r, f, s.a.na(e, t)) || [];
							0 < e.length && (s.a.Qb(e, n), u && s.k.u(u, null, [r, n, f]));
							e.length = 0;
							s.a.ia(e, n)
						}, null, {
							q : t,
							Pa : function () {
								return !s.a.tb(e)
							}
						});
					return {
						aa : e,
						j : o.$() ? o : n
					}
				}
				var t = s.a.f.I();
				s.a.fb = function (r, u, f, e, o) {
					function rt(n, t) {
						h = k[t];
						nt !== t && (it[n] = h);
						h.Ua(nt++);
						s.a.na(h.aa, r);
						g.push(h);
						p.push(h)
					}
					function v(n, t) {
						if (n)
							for (var i = 0, r = t.length; i < r; i++)
								t[i] && s.a.o(t[i].aa, function (r) {
									n(r, i, t[i].wa)
								})
					}
					var c,
					y,
					ut;
					u = u || [];
					e = e || {};
					var y = s.a.f.get(r, t) === n,
					k = s.a.f.get(r, t) || [],
					d = s.a.Ka(k, function (n) {
							return n.wa
						}),
					l = s.a.Ma(d, u, e.dontLimitMoves),
					g = [],
					a = 0,
					nt = 0,
					tt = [],
					p = [];
					u = [];
					for (var it = [], d = [], h, c = 0, w, b; w = l[c]; c++)
						switch (b = w.moved, w.status) {
						case "deleted":
							b === n && (h = k[a], h.j && h.j.p(), tt.push.apply(tt, s.a.na(h.aa, r)), e.beforeRemove && (u[c] = h, p.push(h)));
							a++;
							break;
						case "retained":
							rt(c, a++);
							break;
						case "added":
							b !== n ? rt(c, b) : (h = {
									wa : w.value,
									Ua : s.r(nt++)
								}, g.push(h), p.push(h), y || (d[c] = h))
						}
					for (v(e.beforeMove, it), s.a.o(tt, e.beforeRemove ? s.S : s.removeNode), c = 0, y = s.e.firstChild(r); h = p[c]; c++) {
						for (h.aa || s.a.extend(h, i(r, f, h.wa, o, h.Ua)), a = 0; l = h.aa[a]; y = l.nextSibling, ut = l, a++)
							l !== y && s.e.Fb(r, l, ut);
						!h.rc && o && (o(h.wa, h.aa, h.Ua), h.rc = !0)
					}
					v(e.beforeRemove, u);
					v(e.afterMove, it);
					v(e.afterAdd, d);
					s.a.f.set(r, t, g)
				}
			}
			();
			s.b("utils.setDomNodeChildrenFromArrayMapping", s.a.fb);
			s.P = function () {
				this.allowTemplateRewriting = !1
			};
			s.P.prototype = new s.J;
			s.P.prototype.renderTemplateSource = function (n, t, i, r) {
				return (t = (9 > s.a.M ? 0 : n.nodes) ? n.nodes() : null) ? s.a.O(t.cloneNode(!0).childNodes) : (n = n.text(), s.a.ca(n, r))
			};
			s.P.Va = new s.P;
			s.hb(s.P.Va);
			s.b("nativeTemplateEngine", s.P),
			function () {
				s.Ya = function () {
					var n = this.uc = function () {
						if (!t || !t.tmpl)
							return 0;
						try {
							if (0 <= t.tmpl.tag.tmpl.open.toString().indexOf("__"))
								return 2
						} catch (n) {}

						return 1
					}
					();
					this.renderTemplateSource = function (i, u, f, e) {
						if (e = e || r, f = f || {}, 2 > n)
							throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
						var o = i.data("precompiled");
						return o || (o = i.text() || "", o = t.template(null, "{{ko_with $item.koBindingContext}}" + o + "{{/ko_with}}"), i.data("precompiled", o)),
						i = [u.$data],
						u = t.extend({
								koBindingContext : u
							}, f.templateOptions),
						u = t.tmpl(o, i, u),
						u.appendTo(e.createElement("div")),
						t.fragments = {},
						u
					};
					this.createJavaScriptEvaluatorBlock = function (n) {
						return "{{ko_code ((function() { return " + n + " })()) }}"
					};
					this.addTemplate = function (n, t) {
						r.write("<script type='text/html' id='" + n + "'>" + t + "<\/script>")
					};
					0 < n && (t.tmpl.tag.ko_code = {
							open : "__.push($1 || '');"
						}, t.tmpl.tag.ko_with = {
							open : "with($1) {",
							close : "} "
						})
				};
				s.Ya.prototype = new s.J;
				var n = new s.Ya;
				0 < n.uc && s.hb(n);
				s.b("jqueryTmplTemplateEngine", s.Ya)
			}
			()
		})
	})()
}
(), function (n) {
	typeof require == "function" && typeof exports == "object" && typeof module == "object" ? n(require("knockout"), exports) : typeof AltLanPay.define == "function" && AltLanPay.define.amd ? AltLanPay.define("knockout.validation", ["knockout", "exports"], n) : n(ko, ko.validation = {})
}
(function (n, t) {
	function c(n) {
		var t = n === "max";
		return function (r, u) {
			var o,
			h,
			s,
			f,
			e;
			if (i.utils.isEmptyVal(r))
				return !0;
			u.typeAttr === undefined ? (h = "text", o = u) : (h = u.typeAttr, o = u.value);
			isNaN(o) || o instanceof Date || (h = "number");
			switch (h.toLowerCase()) {
			case "week":
				if (s = /^(\d{4})-W(\d{2})$/, f = r.match(s), f === null)
					throw new Error("Invalid value for " + n + " attribute for week input.  Should look like '2000-W33' http://www.w3.org/TR/html-markup/input.week.html#input.week.attrs.min");
				return (e = o.match(s), !e) ? !1 : t ? f[1] < e[1] || f[1] === e[1] && f[2] <= e[2] : f[1] > e[1] || f[1] === e[1] && f[2] >= e[2];
			case "month":
				if (s = /^(\d{4})-(\d{2})$/, f = r.match(s), f === null)
					throw new Error("Invalid value for " + n + " attribute for month input.  Should look like '2000-03' http://www.w3.org/TR/html-markup/input.month.html#input.month.attrs.min");
				return (e = o.match(s), !e) ? !1 : t ? f[1] < e[1] || f[1] === e[1] && f[2] <= e[2] : f[1] > e[1] || f[1] === e[1] && f[2] >= e[2];
			case "number":
			case "range":
				return t ? !isNaN(r) && parseFloat(r) <= parseFloat(o) : !isNaN(r) && parseFloat(r) >= parseFloat(o);
			default:
				return t ? r <= o : r >= o
			}
		}
	}
	function y(n, t, r) {
		return t.validator(n(), r.params === undefined ? !0 : f(r.params)) ? !0 : (n.setError(i.formatMessage(r.message || t.message, f(r.params), n)), !1)
	}
	function p(n, t, r) {
		n.isValidating(!0);
		var u = function (u) {
			var e = !1,
			o = "";
			if (!n.__valid__()) {
				n.isValidating(!1);
				return
			}
			u.message ? (e = u.isValid, o = u.message) : e = u;
			e || (n.error(i.formatMessage(o || r.message || t.message, f(r.params), n)), n.__valid__(e));
			n.isValidating(!1)
		};
		i.utils.async(function () {
			t.validator(n(), r.params === undefined ? !0 : f(r.params), u)
		})
	}
	var a,
	s,
	h,
	v;
	if (typeof n == "undefined")
		throw new Error("Knockout is required, please ensure it is loaded before loading this validation plug-in");
	n.validation = t;
	var i = n.validation,
	u = n.utils,
	f = u.unwrapObservable,
	e = u.arrayForEach,
	r = u.extend,
	l = {
		registerExtenders : !0,
		messagesOnModified : !0,
		errorsAsTitle : !0,
		errorsAsTitleOnModified : !1,
		messageTemplate : null,
		insertMessages : !0,
		parseInputAttributes : !1,
		writeInputAttributes : !1,
		decorateInputElement : !1,
		decorateElementOnModified : !0,
		errorClass : null,
		errorElementClass : "validationElement",
		errorMessageClass : "validationMessage",
		allowHtmlMessages : !1,
		grouping : {
			deep : !1,
			observable : !0,
			live : !1
		},
		validate : {}

	},
	o = r({}, l);
	o.html5Attributes = ["required", "pattern", "min", "max", "step"];
	o.html5InputTypes = ["email", "number", "date"];
	o.reset = function () {
		r(o, l)
	};
	i.configuration = o;
	i.utils = function () {
		var r = (new Date).getTime(),
		t = {},
		n = "__ko_validation__";
		return {
			isArray : function (n) {
				return n.isArray || Object.prototype.toString.call(n) === "[object Array]"
			},
			isObject : function (n) {
				return n !== null && typeof n == "object"
			},
			isNumber : function (n) {
				return !isNaN(n)
			},
			isObservableArray : function (n) {
				return !!n && typeof n.remove == "function" && typeof n.removeAll == "function" && typeof n.destroy == "function" && typeof n.destroyAll == "function" && typeof n.indexOf == "function" && typeof n.replace == "function"
			},
			values : function (n) {
				var t = [];
				for (var i in n)
					n.hasOwnProperty(i) && t.push(n[i]);
				return t
			},
			getValue : function (n) {
				return typeof n == "function" ? n() : n
			},
			hasAttribute : function (n, t) {
				return n.getAttribute(t) !== null
			},
			getAttribute : function (n, t) {
				return n.getAttribute(t)
			},
			setAttribute : function (n, t, i) {
				return n.setAttribute(t, i)
			},
			isValidatable : function (n) {
				return !!(n && n.rules && n.isValid && n.isModified)
			},
			insertAfter : function (n, t) {
				n.parentNode.insertBefore(t, n.nextSibling)
			},
			newId : function () {
				return r += 1
			},
			getConfigOptions : function (n) {
				var t = i.utils.contextFor(n);
				return t || i.configuration
			},
			setDomData : function (r, u) {
				var f = r[n];
				f || (r[n] = f = i.utils.newId());
				t[f] = u
			},
			getDomData : function (i) {
				var r = i[n];
				return r ? t[r] : undefined
			},
			contextFor : function (n) {
				switch (n.nodeType) {
				case 1:
				case 8:
					var t = i.utils.getDomData(n);
					if (t)
						return t;
					if (n.parentNode)
						return i.utils.contextFor(n.parentNode)
				}
				return undefined
			},
			isEmptyVal : function (n) {
				return n === undefined ? !0 : n === null ? !0 : n === "" ? !0 : void 0
			},
			getOriginalElementTitle : function (n) {
				var t = i.utils.getAttribute(n, "data-orig-title"),
				r = n.title,
				u = i.utils.hasAttribute(n, "data-orig-title");
				return u ? t : r
			},
			async : function (n) {
				window.setImmediate ? window.setImmediate(n) : window.setTimeout(n, 0)
			},
			forEach : function (n, t) {
				if (i.utils.isArray(n))
					return e(n, t);
				for (var r in n)
					n.hasOwnProperty(r) && t(n[r], r)
			}
		}
	}
	();
	a = function () {
		function c(n) {
			e(n.subscriptions, function (n) {
				n.dispose()
			});
			n.subscriptions = []
		}
		function v(n) {
			n.options.deep && (e(n.flagged, function (n) {
					delete n.__kv_traversed
				}), n.flagged.length = 0);
			n.options.live || c(n)
		}
		function s(n, t) {
			t.validatables = [];
			c(t);
			l(n, t);
			v(t)
		}
		function l(i, r, u) {
			var e = [],
			f = i.peek ? i.peek() : i;
			i.__kv_traversed !== !0 && (r.options.deep && (i.__kv_traversed = !0, r.flagged.push(i)), u = u !== undefined ? u : r.options.deep ? 1 : -1, n.isObservable(i) && (!i.errors && !t.isValidatable(i) && i.extend({
						validatable : !0
					}), r.validatables.push(i), r.options.live && t.isObservableArray(i) && r.subscriptions.push(i.subscribe(function () {
							r.graphMonitor.valueHasMutated()
						}))), f && !f._destroy && (t.isArray(f) ? e = f : t.isObject(f) && (e = t.values(f))), u !== 0 && t.forEach(e, function (t) {
					t && !t.nodeType && (!n.isComputed(t) || t.rules) && l(t, r, u + 1)
				}))
		}
		function h(n) {
			var i = [];
			return e(n, function (n) {
				t.isValidatable(n) && !n.isValid() && i.push(n.error.peek())
			}),
			i
		}
		var a = 0,
		o = i.configuration,
		t = i.utils;
		return {
			init : function (n, t) {
				a > 0 && !t || (n = n || {}, n.errorElementClass = n.errorElementClass || n.errorClass || o.errorElementClass, n.errorMessageClass = n.errorMessageClass || n.errorClass || o.errorMessageClass, r(o, n), o.registerExtenders && i.registerExtenders(), a = 1)
			},
			reset : i.configuration.reset,
			group : function (i, f) {
				f = r(r({}, o.grouping), f);
				var l = {
					options : f,
					graphMonitor : n.observable(),
					flagged : [],
					subscriptions : [],
					validatables : []
				},
				c = null;
				return c = f.observable ? n.computed(function () {
						return l.graphMonitor(),
						s(i, l),
						h(l.validatables)
					}) : function () {
					return s(i, l),
					h(l.validatables)
				},
				c.showAllMessages = function (n) {
					n === undefined && (n = !0);
					c.forEach(function (i) {
						t.isValidatable(i) && i.isModified(n)
					})
				},
				c.isAnyMessageShown = function () {
					var n;
					return n = !!c.find(function (n) {
							return t.isValidatable(n) && !n.isValid() && n.isModified()
						}),
					n
				},
				c.filter = function (n) {
					return n = n || function () {
						return !0
					},
					c(),
					u.arrayFilter(l.validatables, n)
				},
				c.find = function (n) {
					return n = n || function () {
						return !0
					},
					c(),
					u.arrayFirst(l.validatables, n)
				},
				c.forEach = function (n) {
					n = n || function () {};
					c();
					e(l.validatables, n)
				},
				c.map = function (n) {
					return n = n || function (n) {
						return n
					},
					c(),
					u.arrayMap(l.validatables, n)
				},
				c._updateState = function (n) {
					if (!t.isObject(n))
						throw new Error("An object is required.");
					if (i = n, !f.observable)
						return s(n, l), h(l.validatables);
					l.graphMonitor.valueHasMutated()
				},
				c
			},
			formatMessage : function (n, i, r) {
				if (t.isObject(i) && i.typeAttr && (i = i.value), typeof n == "function")
					return n(i, r);
				var u = f(i);
				return u == null && (u = []),
				t.isArray(u) || (u = [u]),
				n.replace(/{(\d+)}/gi, function (n, t) {
					return typeof u[t] != "undefined" ? u[t] : n
				})
			},
			addRule : function (n, t) {
				n.extend({
					validatable : !0
				});
				var i = !!u.arrayFirst(n.rules(), function (n) {
						return n.rule && n.rule === t.rule
					});
				return i || n.rules.push(t),
				n
			},
			addAnonymousRule : function (n, t) {
				t.message === undefined && (t.message = "Error");
				t.onlyIf && (t.condition = t.onlyIf);
				i.addRule(n, t)
			},
			addExtender : function (r) {
				n.extenders[r] = function (n, u) {
					return u && (u.message || u.onlyIf) ? i.addRule(n, {
						rule : r,
						message : u.message,
						params : t.isEmptyVal(u.params) ? !0 : u.params,
						condition : u.onlyIf
					}) : i.addRule(n, {
						rule : r,
						params : u
					})
				}
			},
			registerExtenders : function () {
				if (o.registerExtenders)
					for (var t in i.rules)
						i.rules.hasOwnProperty(t) && (n.extenders[t] || i.addExtender(t))
			},
			insertValidationMessage : function (n) {
				var i = document.createElement("SPAN");
				return i.className = t.getConfigOptions(n).errorMessageClass,
				t.insertAfter(n, i),
				i
			},
			parseInputValidationAttributes : function (n, r) {
				e(i.configuration.html5Attributes, function (u) {
					var e,
					f;
					t.hasAttribute(n, u) && (e = n.getAttribute(u) || !0, (u === "min" || u === "max") && (f = n.getAttribute("type"), typeof f != "undefined" && f || (f = "text"), e = {
								typeAttr : f,
								value : e
							}), i.addRule(r(), {
							rule : u,
							params : e
						}))
				});
				var u = n.getAttribute("type");
				e(i.configuration.html5InputTypes, function (n) {
					n === u && i.addRule(r(), {
						rule : n === "date" ? "dateISO" : n,
						params : !0
					})
				})
			},
			writeInputValidationAttributes : function (t, r) {
				var f = r(),
				o;
				f && f.rules && (o = f.rules(), e(i.configuration.html5Attributes, function (i) {
						var r = u.arrayFirst(o, function (n) {
								return n.rule && n.rule.toLowerCase() === i.toLowerCase()
							});
						r && n.computed({
							read : function () {
								var u = n.unwrap(r.params);
								r.rule === "pattern" && u instanceof RegExp && (u = u.source);
								t.setAttribute(i, u)
							},
							disposeWhenNodeIsRemoved : t
						})
					}), o = null)
			},
			makeBindingHandlerValidatable : function (t) {
				var i = n.bindingHandlers[t].init;
				n.bindingHandlers[t].init = function (t, r, u, f, e) {
					return i(t, r, u, f, e),
					n.bindingHandlers.validationCore.init(t, r, u, f, e)
				}
			},
			setRules : function (r, u) {
				var e = function (r, u) {
					var s,
					h,
					o,
					l;
					if (r && u)
						for (s in u)
							if (u.hasOwnProperty(s) && (h = u[s], r[s])) {
								var a = r[s],
								c = f(a),
								y = {},
								v = {};
								for (o in h)
									h.hasOwnProperty(o) && (i.rules[o] ? y[o] = h[o] : v[o] = h[o]);
								if (n.isObservable(a) && a.extend(y), c && t.isArray(c))
									for (l = 0; l < c.length; l++)
										e(c[l], v);
								else
									e(c, v)
							}
				};
				e(r, u)
			}
		}
	}
	();
	r(n.validation, a);
	i.rules = {};
	i.rules.required = {
		validator : function (n, t) {
			var i;
			return n === undefined || n === null ? !t : (i = n, typeof n == "string" && (i = String.prototype.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "")), t ? (i + "").length > 0 : !0)
		},
		message : "This field is required."
	};
	i.rules.min = {
		validator : c("min"),
		message : "Please enter a value greater than or equal to {0}."
	};
	i.rules.max = {
		validator : c("max"),
		message : "Please enter a value less than or equal to {0}."
	};
	i.rules.minLength = {
		validator : function (n, t) {
			if (i.utils.isEmptyVal(n))
				return !0;
			var r = i.utils.isNumber(n) ? "" + n : n;
			return r.length >= t
		},
		message : "Please enter at least {0} characters."
	};
	i.rules.maxLength = {
		validator : function (n, t) {
			if (i.utils.isEmptyVal(n))
				return !0;
			var r = i.utils.isNumber(n) ? "" + n : n;
			return r.length <= t
		},
		message : "Please enter no more than {0} characters."
	};
	i.rules.pattern = {
		validator : function (n, t) {
			return i.utils.isEmptyVal(n) || n.toString().match(t) !== null
		},
		message : "Please check this value."
	};
	i.rules.step = {
		validator : function (n, t) {
			if (i.utils.isEmptyVal(n) || t === "any")
				return !0;
			var r = n * 100 % (t * 100);
			return Math.abs(r) < 1e-5 || Math.abs(1 - r) < 1e-5
		},
		message : "The value must increment by {0}."
	};
	i.rules.email = {
		validator : function (n, t) {
			return t ? i.utils.isEmptyVal(n) || t && /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(n) : !0
		},
		message : "Please enter a proper email address."
	};
	i.rules.date = {
		validator : function (n, t) {
			return t ? i.utils.isEmptyVal(n) || t && !/Invalid|NaN/.test(new Date(n)) : !0
		},
		message : "Please enter a proper date."
	};
	i.rules.dateISO = {
		validator : function (n, t) {
			return t ? i.utils.isEmptyVal(n) || t && /^\d{4}[-/](?:0?[1-9]|1[012])[-/](?:0?[1-9]|[12][0-9]|3[01])$/.test(n) : !0
		},
		message : "Please enter a proper date."
	};
	i.rules.number = {
		validator : function (n, t) {
			return t ? i.utils.isEmptyVal(n) || t && /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n) : !0
		},
		message : "Please enter a number."
	};
	i.rules.digit = {
		validator : function (n, t) {
			return t ? i.utils.isEmptyVal(n) || t && /^\d+$/.test(n) : !0
		},
		message : "Please enter a digit."
	};
	i.rules.phoneUS = {
		validator : function (n, t) {
			return t ? i.utils.isEmptyVal(n) ? !0 : typeof n != "string" ? !1 : (n = n.replace(/\s+/g, ""), t && n.length > 9 && n.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/)) : !0
		},
		message : "Please specify a valid phone number."
	};
	i.rules.equal = {
		validator : function (n, t) {
			var r = t;
			return n === i.utils.getValue(r)
		},
		message : "Values must equal."
	};
	i.rules.notEqual = {
		validator : function (n, t) {
			var r = t;
			return n !== i.utils.getValue(r)
		},
		message : "Please choose another value."
	};
	i.rules.unique = {
		validator : function (n, t) {
			var r = i.utils.getValue(t.collection),
			e = i.utils.getValue(t.externalValue),
			f = 0;
			return !n || !r ? !0 : (u.arrayFilter(r, function (i) {
					n === (t.valueAccessor ? t.valueAccessor(i) : i) && f++
				}), f < (e ? 1 : 2))
		},
		message : "Please make sure the value is unique."
	},
	function () {
		i.registerExtenders()
	}
	();
	n.bindingHandlers.validationCore = function () {
		return {
			init : function (t, r) {
				var u = i.utils.getConfigOptions(t),
				f = r(),
				e;
				u.parseInputAttributes && i.utils.async(function () {
					i.parseInputValidationAttributes(t, r)
				});
				u.insertMessages && i.utils.isValidatable(f) && (e = i.insertValidationMessage(t), u.messageTemplate ? n.renderTemplate(u.messageTemplate, {
						field : f
					}, null, e, "replaceNode") : n.applyBindingsToNode(e, {
						validationMessage : f
					}));
				u.writeInputAttributes && i.utils.isValidatable(f) && i.writeInputValidationAttributes(t, r);
				u.decorateInputElement && i.utils.isValidatable(f) && n.applyBindingsToNode(t, {
					validationElement : f
				})
			}
		}
	}
	();
	i.makeBindingHandlerValidatable("value");
	i.makeBindingHandlerValidatable("checked");
	n.bindingHandlers.textInput && i.makeBindingHandlerValidatable("textInput");
	i.makeBindingHandlerValidatable("selectedOptions");
	n.bindingHandlers.validationMessage = {
		update : function (t, r) {
			var e = r(),
			s = i.utils.getConfigOptions(t),
			v = f(e),
			h = !1,
			c = !1,
			o,
			l,
			a;
			if (e === null || typeof e == "undefined")
				throw new Error("Cannot bind validationMessage to undefined value. data-bind expression: " + t.getAttribute("data-bind"));
			h = e.isModified && e.isModified();
			c = e.isValid && e.isValid();
			o = null;
			(!s.messagesOnModified || h) && (o = c ? null : e.error);
			l = !s.messagesOnModified || h ? !c : !1;
			a = t.style.display !== "none";
			s.allowHtmlMessages ? u.setHtml(t, o) : n.bindingHandlers.text.update(t, function () {
				return o
			});
			a && !l ? t.style.display = "none" : !a && l && (t.style.display = "")
		}
	};
	n.bindingHandlers.validationElement = {
		update : function (t, r, u) {
			var e = r(),
			o = i.utils.getConfigOptions(t),
			l = f(e),
			h = !1,
			s = !1,
			c;
			if (e === null || typeof e == "undefined")
				throw new Error("Cannot bind validationElement to undefined value. data-bind expression: " + t.getAttribute("data-bind"));
			(h = e.isModified && e.isModified(), s = e.isValid && e.isValid(), c = function () {
				var n = {},
				t = !o.decorateElementOnModified || h ? !s : !1;
				return n[o.errorElementClass] = t,
				n
			}, n.bindingHandlers.css.update(t, c, u), o.errorsAsTitle) && n.bindingHandlers.attr.update(t, function () {
				var n = !o.errorsAsTitleOnModified || h,
				r = i.utils.getOriginalElementTitle(t);
				return n && !s ? {
					title : e.error,
					"data-orig-title" : r
				}
				 : !n || s ? {
					title : r,
					"data-orig-title" : null
				}
				 : void 0
			})
		}
	};
	n.bindingHandlers.validationOptions = function () {
		return {
			init : function (n, t) {
				var e = f(t()),
				u;
				e && (u = r({}, i.configuration), r(u, e), i.utils.setDomData(n, u))
			}
		}
	}
	();
	n.extenders.validation = function (n, t) {
		return e(i.utils.isArray(t) ? t : [t], function (t) {
			i.addAnonymousRule(n, t)
		}),
		n
	};
	n.extenders.validatable = function (t, u) {
		var o,
		f,
		s,
		e;
		return i.utils.isObject(u) || (u = {
				enable : u
			}),
		"enable" in u || (u.enable = !0),
		u.enable && !i.utils.isValidatable(t) ? (o = i.configuration.validate || {}, f = {
				throttleEvaluation : u.throttle || o.throttle
			}, t.error = n.observable(null), t.rules = n.observableArray(), t.isValidating = n.observable(!1), t.__valid__ = n.observable(!0), t.isModified = n.observable(!1), t.isValid = n.computed(t.__valid__), t.setError = function (n) {
			var i = t.error.peek(),
			r = t.__valid__.peek();
			t.error(n);
			t.__valid__(!1);
			i !== n && !r && t.isValid.notifySubscribers()
		}, t.clearError = function () {
			return t.error(null),
			t.__valid__(!0),
			t
		}, s = t.subscribe(function () {
					t.isModified(!0)
				}), e = n.computed(r({
						read : function () {
							var n = t(),
							r = t.rules();
							return i.validateObservable(t),
							!0
						}
					}, f)), r(e, f), t._disposeValidation = function () {
			t.isValid.dispose();
			t.rules.removeAll();
			s.dispose();
			e.dispose();
			delete t.rules;
			delete t.error;
			delete t.isValid;
			delete t.isValidating;
			delete t.__valid__;
			delete t.isModified;
			delete t.setError;
			delete t.clearError;
			delete t._disposeValidation
		}) : u.enable === !1 && t._disposeValidation && t._disposeValidation(),
		t
	};
	i.validateObservable = function (n) {
		for (var u = 0, r, t, f = n.rules(), e = f.length; u < e; u++)
			if (t = f[u], !t.condition || t.condition())
				if (r = t.rule ? i.rules[t.rule] : t, r.async || t.async)
					p(n, r, t);
				else if (!y(n, r, t))
					return !1;
		return n.clearError(),
		!0
	};
	s = {};
	i.defineLocale = function (n, t) {
		return n && t ? (s[n.toLowerCase()] = t, t) : null
	};
	i.locale = function (n) {
		if (n) {
			if (n = n.toLowerCase(), !s.hasOwnProperty(n))
				throw new Error("Localization " + n + " has not been loaded.");
			i.localize(s[n]);
			h = n
		}
		return h
	};
	i.localize = function (n) {
		var r = i.rules;
		for (var t in n)
			r.hasOwnProperty(t) && (r[t].message = n[t])
	},
	function () {
		var r = {},
		n = i.rules;
		for (var t in n)
			n.hasOwnProperty(t) && (r[t] = n[t].message);
		i.defineLocale("en-us", r)
	}
	();
	h = "en-us";
	n.applyBindingsWithValidation = function (t, u, f) {
		var o = document.body,
		e;
		u && u.nodeType ? (o = u, e = f) : e = u;
		i.init();
		e && (e = r(r({}, i.configuration), e), i.utils.setDomData(o, e));
		n.applyBindings(t, o)
	};
	v = n.applyBindings;
	n.applyBindings = function (n, t) {
		i.init();
		v(n, t)
	};
	n.validatedObservable = function (t, r) {
		if (!r && !i.utils.isObject(t))
			return n.observable(t).extend({
				validatable : !0
			});
		var u = n.observable(t);
		return u.errors = i.group(i.utils.isObject(t) ? t : {}, r),
		u.isValid = n.observable(u.errors().length === 0),
		n.isObservable(u.errors) ? u.errors.subscribe(function (n) {
			u.isValid(n.length === 0)
		}) : n.computed(u.errors).subscribe(function (n) {
			u.isValid(n.length === 0)
		}),
		u.subscribe(function (n) {
			i.utils.isObject(n) || (n = {});
			u.errors._updateState(n);
			u.isValid(u.errors().length === 0)
		}),
		u
	}
});
AltLanPay.define("Services/Settings", ["require", "exports"], function (n, t) {
	t.options;
	t.Token;
	t.apiBaseUrl;
	t.restartActivation = !1;
	t.SharedData;
	t.RedirectLinks;
	t.QpDocuments
});
AltLanPay.define("Services/HttpClient", ["require", "exports", "Services/Settings"], function (n, t, i) {
	function e(n, t) {
		var i;
		return n.status === 400 && (i = JSON.parse(n.responseText)),
		n.status === 500 && (i = {
				Message : "Internal Server Error",
				errorReason : -1,
				Exception : n.responseText
			}),
		t == "timeout" && (i = {
				Message : "Request TimeOut",
				errorReason : -2,
				Exception : n.responseText
			}),
		i
	}
	function o(n, t) {
		var e = $.extend({
				headers : {},
				timeout : r,
				type : "GET",
				crossDomain : {
					crossDomain : !0
				},
				xhrFields : {
					withCredentials : !0
				}
			}, t);
		return e.headers.OamAuthToken = i.Token,
		n.indexOf("http://") == -1 && n.indexOf("https://") == -1 && (n = i.apiBaseUrl + n),
		$.browser.msie && $.browser.version <= 9 && (n = n.indexOf("?") == -1 ? n + "?OamAuthToken=" + i.Token : n + "&OamAuthToken=" + i.Token),
		$.ajax(n, e).then(u, f)
	}
	function s(n, t) {
		var e = $.extend({
				headers : {},
				timeout : r,
				crossDomain : {
					crossDomain : !0
				},
				xhrFields : {
					withCredentials : !0
				}
			}, t);
		return e.headers.OamAuthToken = i.Token,
		n.indexOf("http://") == -1 && n.indexOf("https://") == -1 && (n = i.apiBaseUrl + n),
		$.browser.msie && $.browser.version <= 9 && (n = n.indexOf("?") == -1 ? n + "?OamAuthToken=" + i.Token : n + "&OamAuthToken=" + i.Token),
		$.ajax(n, e).then(u, f)
	}
	var r = 9e4,
	u = function (n) {
		return n
	},
	f = function () {
		for (var n = [], t = 0; t < arguments.length - 0; t++)
			n[t] = arguments[t + 0];
		return e(n[0], n[1], n[2])
	};
	t.Get = o;
	t.Ajax = s
});
AltLanPay.define("Services/CrossRoads", ["require", "exports"], function (n, t) {
	var r = crossroads.create(),
	s,
	i,
	u,
	a = r.addRoute("/{section}/:page:/:?extraParams:", function (n, t, r) {
			s = n;
			i = t || "Mobile";
			u = r
		}),
	f,
	h,
	e,
	c,
	o,
	l;
	a.rules = {
		section : ["Profile", "ImmediatePayment", "AutoPayment"]
	};
	r.bypassed.add(function () {
		s = "Profile";
		i = "Mobile"
	});
	f = crossroads.create();
	h = f.addRoute("/Profile/{page}", function (n) {
			i = n
		});
	h.rules = {
		page : ["Mobile", "Fttb", "Wifi", "Lite", "Phone"]
	};
	f.addRoute("/Profile/:page:", function () {
		i = "Mobile"
	});
	r.pipe(f);
	e = crossroads.create();
	c = e.addRoute("/ImmediatePayment/{page}/:?extraParams:", function (n, t) {
			i = "Index";
			u = t || {};
			u.paymentType = n
		});
	c.rules = {
		page : ["Mobile", "Fttb", "Fix", "Tv"]
	};
	e.addRoute("/ImmediatePayment/:page:", function () {
		i = "Index";
		u = {
			paymentType : "Mobile"
		}
	});
	r.pipe(e);
	o = crossroads.create();
	l = o.addRoute("/AutoPayment/{page}", function (n) {
			i = n
		});
	l.rules = {
		page : ["AddCard", "AddAutoPayment", "Manage", "MobilePromo", "UnauthorizedAddCard", "UnauthorizedAddAutoPayment"]
	};
	o.addRoute("/AutoPayment/:page:", function () {
		i = "Manage"
	});
	r.pipe(o);
	t.ParseRoute = function (n) {
		return r.ignoreState = !0,
		r.parse(n), {
			section : s,
			page : i,
			extraParams : u,
			initialRoute : n
		}
	}
});
AltLanPay.define("Classes", ["require", "exports", "knockout"], function (n, t, i) {
	var e = function () {
		function n(n, t) {
			this.data = n;
			this.isSuccess = t
		}
		return n
	}
	(),
	r,
	u,
	f;
	t.PopupFeedback = e;
	r = function () {
		function n(n, t, r, u) {
			this.Label = n;
			this.Section = t;
			this.Page = r;
			this.IsActive = i.observable(!1);
			u && (this.SubMenu = u)
		}
		return n
	}
	();
	t.MenuItem = r;
	u = function () {
		function n(n, t) {
			this.name = n;
			this.value = t
		}
		return n
	}
	();
	t.Option = u;
	f = function () {
		function n(n, t, i, r) {
			this.Label = n;
			this.Name = t;
			this.FttbPrefix = i;
			this.IsActive = r
		}
		return n
	}
	();
	t.SubMenuItem = f
});
AltLanPay.define("Widgets/MenuWidget", ["require", "exports", "Classes", "knockout"], function (n, t, i, r) {
	var u = function () {
		function n(n, t) {
			var u = this;
			this.MenuItems = [];
			this.ActiveMenuItem = r.observable(null);
			this.ActiveSubMenuItem = r.observable(null);
			n == "Profile" && (this.MenuItems = [new i.MenuItem("Мобильный телефон", "Profile", "Mobile"), new i.MenuItem("Домашний интернет, ТВ и телефон", "Profile", "Fttb"), new i.MenuItem("Wifi", "Profile", "Wifi"), new i.MenuItem("Интернет Лайт", "Profile", "Lite"), new i.MenuItem("Домашний телефон", "Profile", "Phone")]);
			n == "ImmediatePayment" && (this.MenuItems = [new i.MenuItem("Мобильная связь", "ImmediatePayment", "Mobile"), new i.MenuItem("Интернет", "ImmediatePayment", "Fttb", [new i.SubMenuItem("Скоростной интернет", "broadband", "089", r.observable(!0)), new i.SubMenuItem("Интернет лайт", "light", "086", r.observable(!1))]), new i.MenuItem("ТВ", "ImmediatePayment", "Tv", [new i.SubMenuItem("Цифровое ТВ", "digitaltv", "089", r.observable(!0)), new i.SubMenuItem("Кабельное ТВ", "cabletv", "086", r.observable(!1))]), new i.MenuItem("Домашний телефон", "ImmediatePayment", "Fix", [new i.SubMenuItem("Цифровой телефон", "digitalphone", "089", r.observable(!0)), new i.SubMenuItem("Домашний телефон", "homephone", "086", r.observable(!1))])]);
			n == "AutoPayment" && (this.MenuItems = [new i.MenuItem("Автооплата с банковской карты", "AutoPayment", "MobilePromo"), new i.MenuItem("Мои карты и автооплата", "AutoPayment", "Manage")]);
			this.MenuItems.forEach(function (i) {
				i.IsActive(i.Section == n && i.Page == t);
				i.Section == n && i.Page == t && u.ActiveMenuItem(i)
			});
			this.ActiveSubMenuItem() || this.ActiveMenuItem() && this.ActiveMenuItem().SubMenu && this.ActiveSubMenuItem(this.ActiveMenuItem().SubMenu[0])
		}
		return n.prototype.ChangeSelectedMenuItem = function (n) {
			window.location.hash = "#/" + n.Section + "/" + n.Page
		},
		n.prototype.ChangeSelectedSubMenuItem = function (n) {
			this.ActiveSubMenuItem(n);
			this.ActiveMenuItem().SubMenu.forEach(function (n) {
				return n.IsActive(!1)
			})
		},
		n
	}
	();
	t.MenuWidget = u
});
AltLanPay.define("Boards/BaseBoard", ["require", "exports", "knockout", "app", "Widgets/MenuWidget"], function (n, t, i, r, u) {
	var f = function () {
		function n(n, t) {
			return typeof t == "undefined" && (t = null),
			this.signals = r.paySignals,
			this.Data = n,
			this.MenuWidget = new u.MenuWidget(n.Section, n.Page),
			this.ExtraParams = i.observable(t),
			this
		}
		return n.prototype.AfterBound = function () {},
		n
	}
	();
	t.BaseBoard = f
});
AltLanPay.define("Messages", ["require", "exports"], function (n, t) {
	t.UssMessages = [{
			code : 20014,
			message : "Аккаунт заблокирован, операция невозможна"
		}, {
			code : 20056,
			message : "У вас уже есть привязанная банковская карта"
		}, {
			code : 20055,
			message : "Не найдена привязанная карта"
		}
	];
	t.MTopUpMessages = [{
			code : 86,
			source : "CardRegister",
			message : "Срок действия карты превышает максимальное допустимое значение."
		}, {
			code : 29,
			source : "CardRegister",
			message : "Попытка активировать просроченную карту"
		}, {
			code : 85,
			source : "CardRegister",
			message : "Не завершена предыдущая операция смены срока действия."
		}, {
			code : 62,
			source : "CardRegister",
			message : "Не завершена предыдущая операция смены срока действия."
		}, {
			code : 1,
			source : "ClientInformation",
			message : "Извините, услуга недоступна. Повторите запрос позднее"
		}, {
			code : 2,
			source : "ClientInformation",
			message : "Извините, услуга недоступна. Повторите запрос позднее"
		}, {
			code : 3,
			source : "ClientInformation",
			message : "Извините, услуга недоступна. Повторите запрос позднее"
		}, {
			code : 4,
			source : "ClientInformation",
			message : "Абонент не найден"
		}, {
			code : 5,
			source : "ClientInformation",
			message : "Извините, услуга недоступна. Повторите запрос позднее"
		}, {
			code : 43,
			source : "ClientInformation",
			message : "Извините, услуга недоступна. Повторите запрос позднее"
		}, {
			code : 1,
			source : "Database",
			message : "Услуга заблокирована. Для разблокировки обратитесь в офис Билайн"
		}, {
			code : 10,
			source : "Database",
			message : "Абонент достиг максимальный лимит платежей с карты в месяц."
		}, {
			code : 11,
			source : "Database",
			message : "Платеж невозможен. Достигнут лимит. Повторите запрос через сутки."
		}, {
			code : 12,
			source : "Database",
			message : "Абонент достиг макс. лимита по кол-ву платежей в сутки."
		}, {
			code : 13,
			source : "Database",
			message : "Платеж невозможен. Макс. кол-во в месяц. Повторите запрос через месяц."
		}, {
			code : 14,
			source : "Database",
			message : "Абонент достиг макс. лимита по кол-ву платежей в месяц."
		}, {
			code : 15,
			source : "Database",
			message : "Запрещена оплата других телефонов"
		}, {
			code : 16,
			source : "Database",
			message : "Услуга не доступна из-за отсутствия договора"
		}, {
			code : 17,
			source : "Database",
			message : "Короткий интервал между платежами. Повторите запрос через несколько минут."
		}, {
			code : 18,
			source : "Database",
			message : "Банковской карты с таким номером не существует"
		}, {
			code : 19,
			source : "Database",
			message : "Банковская карта заблокирована"
		}, {
			code : 2,
			source : "Database",
			message : "Банковская карта заблокирована"
		}, {
			code : 20,
			source : "Database",
			message : "Сумма платежа превышает баланс на счете"
		}, {
			code : 21,
			source : "Database",
			message : "Некорректный ввод BeePin"
		}, {
			code : 22,
			source : "Database",
			message : "Некорректный ввод BeePin три раза подряд в одну сессию"
		}, {
			code : 23,
			source : "Database",
			message : "Некорректный ввод фрагмента карты"
		}, {
			code : 24,
			source : "Database",
			message : "Оплата невозможна. Счет заблокирован для оплаты."
		}, {
			code : 25,
			source : "Database",
			message : "Регистрация карты невозможна. Достигнуто максимальное число зарегистрированных карт в год."
		}, {
			code : 26,
			source : "Database",
			message : "Регистрация карты невозможна. Достигнуто максимальное число зарегистрированных на телефоне карт."
		}, {
			code : 27,
			source : "Database",
			message : "Превышен лимит по количеству номеров для одной карты"
		}, {
			code : 28,
			source : "Database",
			message : "Услуга не доступна по ограничениям для получателя"
		}, {
			code : 29,
			source : "Database",
			message : "Попытка активировать просроченную карту"
		}, {
			code : 3,
			source : "Database",
			message : "Превышена максимальная сумма платежа."
		}, {
			code : 30,
			source : "Database",
			message : "Отказ банка в регистрации карты"
		}, {
			code : 31,
			source : "Database",
			message : "Извините, услуга недоступна. Повторите запрос позднее"
		}, {
			code : 32,
			source : "Database",
			message : "Некорректный тип регистрации карты"
		}, {
			code : 33,
			source : "Database",
			message : "Невозможно зарегистрировать карту"
		}, {
			code : 34,
			source : "Database",
			message : "Услуга отключена"
		}, {
			code : 35,
			source : "Database",
			message : "Мобильный платеж - пополняй телефон с банковской карты. Инфо 0533"
		}, {
			code : 36,
			source : "Database",
			message : "Заблокирован номер абонента, подключившего авто-оплату"
		}, {
			code : 37,
			source : "Database",
			message : "Услуга отключена для абонента, подключившего авто-оплату"
		}, {
			code : 38,
			source : "Database",
			message : "Неопределена сумма списания по авто-оплате"
		}, {
			code : 39,
			source : "Database",
			message : "Абонент не подключен к авто-оплате"
		}, {
			code : 4,
			source : "Database",
			message : "Сумма платежа меньше минимальной."
		}, {
			code : 40,
			source : "Database",
			message : "Для указанной карты недоступна услуга авто-оплаты"
		}, {
			code : 41,
			source : "Database",
			message : "Некорректный ввод команды"
		}, {
			code : 42,
			source : "Database",
			message : "Отсутствует карта для проведения платежей"
		}, {
			code : 45,
			source : "Database",
			message : "Услуга недоступна дочернему абоненту"
		}, {
			code : 46,
			source : "Database",
			message : "Услуга заблокирована. Для разблокировки обратитесь в офис Билайн"
		}, {
			code : 47,
			source : "Database",
			message : "Услуга заблокирована. Для разблокировки обратитесь в офис Билайн"
		}, {
			code : 48,
			source : "Database",
			message : "Извините, услуга недоступна. Повторите запрос позднее"
		}, {
			code : 49,
			source : "Database",
			message : "Извините, услуга недоступна. Повторите запрос позднее"
		}, {
			code : 5,
			source : "Database",
			message : "Достигнут лимит платежей в сутки. Повторите запрос через сутки."
		}, {
			code : 50,
			source : "Database",
			message : "Извините, услуга недоступна. Повторите запрос позднее"
		}, {
			code : 51,
			source : "Database",
			message : "Невозможно определить банк активной карты."
		}, {
			code : 52,
			source : "Database",
			message : "Банк активной карты запрещен для осуществления платежей."
		}, {
			code : 53,
			source : "Database",
			message : "Услуга заблокирована. Для разблокировки обратитесь в офис Билайн"
		}, {
			code : 59,
			source : "Database",
			message : "Авто-оплата уже подключена"
		}, {
			code : 6,
			source : "Database",
			message : "Абонент достиг макс. лимита платежей в сутки."
		}, {
			code : 60,
			source : "Database",
			message : "Превышен лимит дочерних абонентов."
		}, {
			code : 7,
			source : "Database",
			message : "Абонент достиг макс. лимита платежей с карты в сутки."
		}, {
			code : 76,
			source : "Database",
			message : "Услуга заблокирована по причине смены SIM карты. Для разблокировки наберите команду *100*4*СК# или обратитесь в офис Билайн"
		}, {
			code : 77,
			source : "Database",
			message : "Абонент уже подключен как дочерний другому абоненту."
		}, {
			code : 8,
			source : "Database",
			message : "Достигнут лимит платежей в месяц. Повторите запрос через месяц."
		}, {
			code : 82,
			source : "Database",
			message : "Превышен лимит платежей по типу карты."
		}, {
			code : 83,
			source : "Database",
			message : "Запрос секретного кода при операциях уже отключен."
		}, {
			code : 84,
			source : "Database",
			message : "Режим запроса секретного кода уже установлен."
		}, {
			code : 85,
			source : "Database",
			message : "Не завершена предыдущая операция смены срока действия."
		}, {
			code : 86,
			source : "Database",
			message : "Срок действия карты превышает максимальное допустимое значение."
		}, {
			code : 87,
			source : "Database",
			message : "Исчерпан лимит попыток смены срока действия."
		}, {
			code : 88,
			source : "Database",
			message : "Неверный формат, укажите срок действия карты в виде ММГГ."
		}, {
			code : 9,
			source : "Database",
			message : "Абонент достиг макс. лимита платежей на телефон в месяц."
		}, {
			code : 90,
			source : "Database",
			message : "Не найдена карта по умолчанию."
		}, {
			code : -1,
			source : "Database",
			message : "Извините, услуга недоступна. Повторите запрос позднее"
		}, {
			code : 2,
			source : "Engine",
			message : "Извините, услуга недоступна. Повторите запрос позднее"
		}, {
			code : 10,
			source : "Engine",
			message : "Вам недоступен данный сервис"
		}, {
			code : 5,
			source : "Engine",
			message : "Вам недоступен данный сервис"
		}, {
			code : 8,
			source : "Engine",
			message : "Для авансового абонента нельзя включить безакцепт"
		}, {
			code : 7,
			source : "Engine",
			message : "Оплата счета невозможна (оплата счетов только для физ.лиц)."
		}, {
			code : 6,
			source : "Engine",
			message : "Вам недоступен данный сервис"
		}, {
			code : 1,
			source : "Engine",
			message : "Извините, услуга недоступна. Повторите запрос позднее"
		}, {
			code : 70,
			source : "Engine",
			message : "Нельзя подключить автооплату абоненту Домашнего Интернета"
		}, {
			code : 21,
			source : "Engine",
			message : "Неправильный секретный код"
		}, {
			code : 13,
			source : "Engine",
			message : "Неправильный номер банковской карты"
		}, {
			code : 3,
			source : "Engine",
			message : "Извините, услуга недоступна. Повторите запрос позднее"
		}, {
			code : 11,
			source : "Engine",
			message : "Абонент не найден"
		}, {
			code : 12,
			source : "Engine",
			message : "Неправильная сумма"
		}, {
			code : 9,
			source : "Engine",
			message : "Абоненту нельзя включить безакцепт"
		}, {
			code : 88,
			source : "Engine",
			message : "Неверный формат, укажите срок действия карты в виде ММГГ."
		}, {
			code : 44,
			source : "PaymentGate",
			message : "Извините, услуга недоступна. Повторите запрос позднее"
		}
	];
	t.Messages = {
		GenericError : "При выполнении операции произошла ошибка. Попробуйте еще раз.",
		GenericFatalError : "При выполнении операции произошла ошибка. Обратитесь в службу поддержки по номеру 0611.",
		SupportPhone : "0611",
		PopupChangeUserTitle : "Подключение услуги для абонента<br/>",
		PopupChangeUserSubTitleMobile : "Домашнего интернета и ТВ",
		PopupChangeUserSubTitleFttb : "Мобильной связи",
		PopupChangeUserMessageMobile : "Чтобы воспользоваться услугой, войдите на сайт как абонент",
		PopupChangeUserMessageFttb : "Чтобы воспользоваться услугой, войдите на сайт",
		PopupChangeUserMessage2Mobile : "Домашнего интернета и ТВ.",
		PopupChangeUserMessage2Fttb : "как абонент Мобильной связи.",
		PopupChangeUserMessage3Mobile : "Сейчас вы авторизованы как абонент Мобильной связи.",
		PopupChangeUserMessage3Fttb : "Сейчас вы авторизованы как абонент Домашнего интернета и ТВ.",
		PopupChangeUserOk : "Выйти",
		PopupChangeUserCancel : "Не выходить",
		PopupSecretCodeText : "Для продолжения работы с сайтом необходимо ввести секретный код. Введите его в поле ниже и нажмите ОК",
		WrongSecretCode : "Неверный секретный код",
		SecretCodeError : "При проверке секретного кода произошла ошибка. Попробуйте еще раз.",
		AccountBlocked : "Аккаунт заблокирован. Обратитесь в службу поддержки по номеру 0611.",
		FttbCtnError : "Операция доступна только для пользователей мобильной связи",
		MobileCtnError : "Операция доступна только для пользователей интернета",
		AutoPaymentOkText : "Включить автооплату",
		AutoPaymentWaitText : "Запрос на добавление номера телефона отправлен. Операция может занять некоторое время.",
		AutoPaymentWaitSuccess : "Телефон успешно добавлен.",
		AutoPaymentWaitError : "Ошибка",
		AutoPaymentWaitTimeout : "Не удалось получить результат операции. В случае успеха, услуга будет доступна для управления через некоторое время.",
		AutoPaymentPostPaid : "Сумма «Автооплаты» каждый раз будет равна сумме выставленного вам счета, если он более 100 рублей.\x0bЕсли счет менее 100 руб., «Автооплата» не сработает. Рекомендуем в этом случае оплатить счет любым другим удобным вам способом.",
		AutoPaymentNonBeelineSubscriber : "Номер не зарегистрирован в сети «Билайн». Проверьте правильность набора номера и повторите заявку.",
		AutoPaymentFttbWaitText : "Запрос на добавление счета отправлен. Операция может занять некоторое время.",
		AutoPaymentChangeSucceeded : "Запрос на изменение параметров автооплаты принят. Дождитесь SMS-уведомления, либо изменения параметров.",
		ClearSecretCodeText : "Чтобы отменить ввод секретного кода при каждой оплате, введите его в поле ниже и нажмите OK",
		RequireSecretCodeText : "Чтобы включить ввод секретного кода при каждой оплате, введите его в поле ниже и нажмите OK",
		PasswordSendError : "Произошла ошибка при отправке пароля",
		WrongPassword : "Неверный пароль",
		ServiceBlockedForAccount : "Для Вашего аккаунта услуга недоступна",
		MessageBoxConfirm : "Подтвердите операцию",
		MessageBoxCancel : "Отмена",
		MessageBoxYes : "Да",
		MessageBoxOk : "OK",
		ContinueCardRegPopup : "Вы не закончили регистрацию банковской карты",
		AutoPaymentPopupMessage : "Введите номер телефона, добавляемого к автооплате",
		AutoPaymentPopupCancelMessage : "Вы действительно хотите отключить автооплату счета ",
		AutoPaymentLastUpdateTooEarly : "Изменения параметров автооплаты для данного номера будут доступно через несколько секунд",
		AutoPaymentPopupCancelText : "Нет, не отключать",
		AcitivateCardError : "Невозможно сделать активной",
		PopupCardText : "Вы уверены, что хотите отвязать карту ",
		PopupCardSecondaryText : "Данные карты будут удалены<br/>Будет отключена услуга Автооплата",
		PopupCardConfirmText : "Да",
		PopupCardCancelText : "Нет, не отвязывать",
		PopupCardDeleteErrorText : "Не удалось отвязать карту",
		PopupCardAddErrorText : "Не удалось добавить карту",
		ImmediatePaymentSuccess : "Ваш запрос принят, Вы получите SMS после исполнения платежа",
		MessageBoxSessionExpired : "Ваша сессия истекла",
		MessageBoxSKExpired : "Ваш секретный код больше недействителен",
		WaitText : "Пожалуйста подождите",
		ActiveAccountChanged : "Вы изменили активный аккаунт",
		UnauthorizedAddCardTitle : "Привязка банковской карты к счету",
		UnauthorizedAddCardMessage : "Для привязки банковской карты к счету",
		UnauthorizedAddCardCancelText : "Не привязывать карту",
		UnauthorizedAutoPaymentTitle : "Подключение опции «Автооплата»",
		UnauthorizedAutoPaymentMessage : "Для настройки автоматического пополнения счета",
		UnauthorizedAutoPaymentCancelText : "Не настраивать Автооплату",
		UnauthorizedPaymentTitle : "Формирование квитанции<br/>на оплату счета {0}",
		UnauthorizedCardPaymentTitle : "Оплата счета {0}<br/>Единой картой оплаты",
		UnauthorizedPromisedPaymentTitle : "Подключение услуги<br/>«Доверительный платёж»",
		AnalyticSuccess : "conversionSuccess",
		AnalyticError : "conversionError",
		GetMessageFromErrorData : function (n) {
			var i,
			r;
			if (n == null || n.errorCode == null)
				return this.GenericError;
			switch (n.errorReason) {
			case 0:
				return i = $.grep(t.MTopUpMessages, function (t) {
						return t.code == n.errorCode && t.source == n.source
					})[0],
				i ? i.message : t.Messages.GenericError;
			case 4:
				return r = $.grep(t.UssMessages, function (t) {
						return t.code == n.errorCode
					})[0],
				r ? r.message : t.Messages.GenericError;
			case 2:
				return t.Messages.AccountBlocked;
			case 1:
				return t.Messages.WrongSecretCode;
			case 3:
				return t.Messages.ServiceBlockedForAccount
			}
		}
	}
});
__extends = this.__extends || function (n, t) {
	function r() {
		this.constructor = n
	}
	for (var i in t)
		t.hasOwnProperty(i) && (n[i] = t[i]);
	r.prototype = t.prototype;
	n.prototype = new r
};
AltLanPay.define("Parts/Awaiters", ["require", "exports", "knockout", "Messages", "Services/HttpClient"], function (n, t, i, r, u) {
	var f = function () {
		function n(n) {
			var t = this;
			this.StatusTexts = [];
			this.ActiveMessage = i.observable("");
			this.Visible = i.observable(!0);
			this.StatusTexts[0] = n.InactiveMessage || "";
			this.StatusTexts[3] = n.FailMessage || "При выполнении операции произошла ошибка. Попробуйте повторить позднее";
			this.StatusTexts[1] = n.ProcessingMessage || "Пожалуйста подождите";
			this.StatusTexts[4] = n.RequestTimeoutMessage || "Не удалось получить статус заявки";
			this.StatusTexts[2] = n.SuccessMessage || "";
			this.Status = i.observable(0);
			this.Status.subscribe(function (n) {
				t.Visible(!0);
				t.ActiveMessage(t.StatusTexts[n])
			})
		}
		return n
	}
	(),
	e,
	o;
	t.SimpleAwaiter = f;
	e = function (n) {
		function t() {
			n.apply(this, arguments)
		}
		return __extends(t, n),
		t.prototype.Await = function (n) {
			var t = this;
			return this.Status(1),
			n.then(function (n) {
				return t.Status() == 1 && t.Status(2),
				n
			}, function (n) {
				return t.Status() == 1 && (t.StatusTexts[3] = r.Messages.GetMessageFromErrorData(n), t.Status(3)),
				n
			})
		},
		t
	}
	(f);
	t.DeferredAwaiter = e;
	o = function (n) {
		function t() {
			n.apply(this, arguments)
		}
		return __extends(t, n),
		t.prototype.Await = function (n, t, i) {
			var o = this,
			e,
			s,
			f;
			return typeof t == "undefined" && (t = 1e4),
			typeof i == "undefined" && (i = null),
			e = this,
			s = function (n) {
				if (n == -1) {
					e.Status(2);
					f.resolve(n);
					return
				}
				var i = window.setInterval(function () {
						u.Get("/api/Request/Status/" + n).done(function (n) {
							n == null ? (window.clearInterval(i), window.clearTimeout(r), e.Status(3), f.reject(n)) : n.SimpleStatus != 0 && (window.clearInterval(i), window.clearTimeout(r), n.SimpleStatus == 1 && (e.Status(2), f.resolve(n)), n.SimpleStatus == 2 && (e.Status(3), f.reject(n)))
						})
					}, 1e3),
				r = window.setTimeout(function () {
						window.clearInterval(i);
						o.Status() == 1 && (o.Status(4), f.reject())
					}, t)
			},
			this.Status(1),
			f = $.Deferred(),
			i != null ? s(i) : n.then(s, function (n) {
				o.StatusTexts[3] = r.Messages.GetMessageFromErrorData(n);
				o.Status(3);
				f.reject(n)
			}),
			f
		},
		t
	}
	(f);
	t.RequestAwaiter = o
});
AltLanPay.define("Services/SessionStorage", ["require", "exports"], function (n, t) {
	function f() {
		return sessionStorage[i] ? new r(JSON.parse(sessionStorage[i])) : new r(new u)
	}
	function e(n) {
		sessionStorage[i] = JSON.stringify(n.Data)
	}
	function o() {
		sessionStorage.removeItem(i)
	}
	var i = "NewPaySessionData",
	u,
	r;
	t.ReadCurrentStorage = f;
	t.SaveCurrentStorage = e;
	t.ClearCurrentStorage = o;
	u = function () {
		function n() {}

		return n
	}
	();
	t.StorageInnerData = u;
	r = function () {
		function n(n) {
			this.Data = n
		}
		return n
	}
	();
	t.StorageInfo = r
});
AltLanPay.define("Widgets/MTopUp/BindCardWidget", ["require", "exports", "knockout", "Services/HttpClient", "Messages", "Parts/Awaiters", "Services/Settings", "Services/SessionStorage"], function (n, t, i, r, u, f, e, o) {
	var h = function () {
		function n(n, t, r) {
			this.IsProcessing = i.observable(!1);
			this.ValidationErrors = i.observableArray(["Введите данные карты"]);
			this.BindCardErrorMessage = i.observable("В системе произошла ошибка, банковская карта не привязана");
			this.HoldInfo = i.observable(null);
			this.Card3DSVisible = i.observable(!1);
			this.TestPayAmount = i.observable(0);
			this.ContinueImmediatePayment = !1;
			this.MTopUpCardUrl = n.MTopUpCardUrl;
			var u = o.ReadCurrentStorage();
			u.Data.EncMtopupData && u.Data.PaymentId && (this.MTopUpCardUrl = n.MTopUpContinueCardUrl + "?EncryptedPrefix=" + encodeURIComponent(u.Data.EncMtopupData) + "&paymentId=" + u.Data.PaymentId, u.Data.PaymentId = null, u.Data.EncMtopupData = null, o.SaveCurrentStorage(u), this.ValidationErrors([]), this.ContinueImmediatePayment = !0);
			this.MTopUpCardDomain = this.getUrlOrigin(n.MTopUpCardUrl);
			this.PayWidgetOrigin = this.getUrlOrigin(e.apiBaseUrl);
			this.ActiveStage = i.observable(0);
			this.AddAutoPayment = t;
			this.Ctn = e.SharedData.Ctn;
			this.UserType = e.SharedData.UserType;
			this.HasCard = r;
			this.Card3DSIFrameUrl = e.apiBaseUrl + "/Card3DS/Index"
		}
		return n.prototype.IFrameLoad = function (n, t) {
			var i = this;
			this.IFrame = t.target;
			window.addEventListener ? window.addEventListener("message", function (n) {
				return i.receiveMessage(n)
			}, !1) : window.attachEvent("onmessage", function (n) {
				return i.receiveMessage(n)
			})
		},
		n.prototype.receiveMessage = function (n) {
			var r,
			u,
			t,
			f,
			i,
			e;
			if (log(n), this.checkOrigin(n.origin, this.PayWidgetOrigin)) {
				if (r = n.data.split("#")[0], u = n.data.split("#")[1] || "", r == "3dsResult") {
					if (this.Card3DSVisible(!1), t = JSON.parse(u), t == null) {
						this.ActiveStage(6);
						return
					}
					switch (t.ConfirmationMode) {
					case 3:
						this.ActiveStage(1);
						this.AwaitCardConnection();
						break;
					case 0:
						this.ActiveStage(1);
						this.AwaitCardConnection();
						break;
					case 1:
						this.TestPayAmount(t.TestPayAmount);
						this.ActiveStage(4);
						this.AwaitCardConnection();
						break;
					case 2:
						this.HoldInfo(new s(this, t.HoldInfo));
						this.ActiveStage(3)
					}
				}
				return
			}
			if (this.checkOrigin(n.origin, this.MTopUpCardDomain)) {
				switch (n.data.type) {
				case "validationError":
					this.IsProcessing(!1);
					n.data.errors.length == 0 ? this.ValidationErrors(["Введите данные карты"]) : this.ValidationErrors(n.data.errors);
					break;
				case "validationOk":
					this.ValidationErrors([]);
					break;
				case "registerResponse":
					if (this.IsProcessing(!1), n.data.resultCode != 0) {
						this.BindCardErrorMessage(n.data.errorMessage);
						this.ActiveStage(6);
						return
					}
					this.regSessionId = n.data.regSessionId;
					switch (n.data.confirmationType) {
					case "none":
						this.ActiveStage(1);
						this.AwaitCardConnection();
						break;
					case "testPay":
						this.TestPayAmount = n.data.testPaymentAmount;
						this.ActiveStage(4);
						this.AwaitCardConnection();
						break;
					case "hold":
						this.HoldInfo(new s(this, {
								MaxAttempts : n.data.confirmationAttempts,
								SumMin : n.data.confirmationSumMin,
								SumMax : n.data.confirmationSumMax
							}));
						this.ActiveStage(3);
						break;
					case "3ds":
						this.ActiveStage(2);
						this.Card3DSVisible(!0);
						f = $("#Card3dsIFrame")[0];
						i = n.data.threeDSec;
						i.parentOrigin = window.location.origin;
						i.isAutoPayment = !0;
						e = "submit3DS#" + JSON.stringify(i);
						f.contentWindow.postMessage(e, this.PayWidgetOrigin);
						break;
					default:
						console.log("unknown confirmarion type " + n.data.confirmationType);
						this.ActiveStage(6)
					}
				}
				return
			}
			console.log("unknown origin " + n.origin);
			console.log("this.PayWidgetOrigin = " + this.PayWidgetOrigin)
		},
		n.prototype._getFttbSessionId = function () {
			var t = this,
			n = $.Deferred();
			return this.UserType != 2 ? (n.resolve(null), n) : this.AddAutoPayment() && !!this.FttbSessionIdAutoPay ? (n.resolve(this.FttbSessionIdAutoPay), n) : !this.AddAutoPayment() && !!this.FttbSessionIdNoAutoPay ? (n.resolve(this.FttbSessionIdNoAutoPay), n) : (r.Get("/api/CardReg/GetFttbSessionId", {
					data : {
						isAutoPayEnabled : this.AddAutoPayment()
					}
				}).then(function (i) {
					t.AddAutoPayment() ? t.FttbSessionIdAutoPay = i : t.FttbSessionIdNoAutoPay = i;
					n.resolve(i)
				}, function (t) {
					return n.reject(t)
				}), n)
		},
		n.prototype.checkOrigin = function (n, t) {
			var i = n.toLowerCase().split(":")[1],
			r = t.toLowerCase().split(":")[1];
			return i == r
		},
		n.prototype.BindCard = function (n) {
			var t = this;
			this.IsProcessing(!0);
			this._getFttbSessionId().then(function (i) {
				i && (n.session = i);
				console.log(n);
				t.IFrame.contentWindow.postMessage(n, t.MTopUpCardDomain)
			}, function (n) {
				t.ValidationErrors.push(u.Messages.GetMessageFromErrorData(n));
				t.IsProcessing(!1)
			})
		},
		n.prototype.GetRegistrationState = function (n) {
			return r.Get("/api/CardReg/GetRegistrationState", {
				data : {
					sessionId : n
				}
			})
		},
		n.prototype.AwaitCardConnection = function () {
			var n = this,
			t = window.setInterval(function () {
					n.GetRegistrationState(n.regSessionId).then(function (i) {
						i.CardProcessingStatus == 1 && (window.clearInterval(t), n.ActiveStage(5));
						i.CardProcessingStatus == 2 && (window.clearInterval(t), n.BindCardErrorMessage(i.ResultDescription), n.ActiveStage(6))
					})
				}, 1e3)
		},
		n.prototype.Reload = function () {
			document.location.reload()
		},
		n.prototype.getUrlOrigin = function (n) {
			var t = document.createElement("a");
			return t.href = n,
			t.origin || t.protocol + "//" + t.host
		},
		n
	}
	(),
	s;
	t.BindCardWidget = h;
	s = function () {
		function n(n, t) {
			var r = this;
			this.CheckHoldInfoAwaiter = new f.DeferredAwaiter({
					FailMessage : "При проверке тестового платежа произошла ошибка"
				});
			this.ConfirmationAttempts = i.observable(t.MaxAttempts);
			this.SumMin = t.SumMin;
			this.SumMax = t.SumMax;
			this.BindCardWidget = n;
			this.HoldRub = i.observable(0);
			this.HoldKop = i.observable(0);
			this.SumFull = i.computed(function () {
					return r.HoldRub() * 100 + +r.HoldKop()
				}).extend({
					required : {
						message : "Введите сумму"
					},
					pattern : {
						params : "^[0-9]*$",
						message : "Сумма указана неверно"
					},
					min : {
						params : this.SumMin,
						message : "Сумма не может быть менее " + this.SumMin / 100 + " рублей"
					},
					max : {
						params : this.SumMax,
						message : "Сумма не может быть более " + this.SumMax / 100 + " рублей"
					}
				})
		}
		return n.prototype.CheckHoldInfo = function () {
			var n = this,
			t = this.HoldRub() * 100 + this.HoldKop() * 1;
			this.CheckHoldInfoAwaiter.Await(r.Ajax("/api/CardReg/CardRegHoldCheckStatus", {
					type : "POST",
					data : {
						"" : t
					}
				})).then(function (t) {
				switch (t) {
				case 0:
					n.BindCardWidget.ActiveStage(1);
					n.BindCardWidget.AwaitCardConnection();
					break;
				case 1:
					if (n.ConfirmationAttempts(n.ConfirmationAttempts() - 1), n.ConfirmationAttempts() <= 0) {
						n.BindCardWidget.BindCardErrorMessage("Превышено количество неправильных вводов зарезервированной суммы");
						n.BindCardWidget.ActiveStage(6);
						return
					}
					n.CheckHoldInfoAwaiter.Status(3);
					n.CheckHoldInfoAwaiter.ActiveMessage("Неверная сумма");
					break;
				case 2:
					n.BindCardWidget.BindCardErrorMessage("Услуга недоступна. Необходимо обратиться в службу поддержки");
					n.BindCardWidget.ActiveStage(6);
					break;
				default:
					n.BindCardWidget.BindCardErrorMessage("При проверке зарезервированной суммы произошла ошибка");
					n.BindCardWidget.ActiveStage(6)
				}
			}, function () {})
		},
		n
	}
	();
	t.HoldInfo = s
});
AltLanPay.define("Services/FormatHelper", ["require", "exports"], function (n, t) {
	function i(n, t) {
		if (n == null)
			return "****** **** " + t;
		var i = n.substring(0, 4) + " " + n.substring(4, 6);
		return i + "** **** " + t
	}
	function r(n) {
		if (n) {
			var t = n.indexOf("FTTB/") == -1;
			return n = n.replace("FTTB/", ""),
			n[0] == "0" && (t = !1),
			n.match(/[0-9]{10}/g) && t && (n = "+7 " + n.match(/[0-9]{4,4}$|[0-9]{3,3}/g).join("-")),
			n
		}
	}
	function u(n, t) {
		var u = "",
		f = "",
		e = "",
		i,
		r;
		return t.length > 0 && (u = t[0]),
		t.length > 1 && (f = t[1]),
		t.length > 2 && (e = t[2]),
		i = Math.floor((n || 0) % 10),
		r = Math.floor((n || 0) % 100 / 10),
		i == 1 && r != 1 ? n + " " + u : i != 2 && i != 3 && i != 4 || r == 1 ? n + " " + e : n + " " + f
	}
	t.FormatCard = i;
	t.FormatCtn = r;
	t.FormatFormNumberWithName = u
});
AltLanPay.define("Services/PopupManager", ["require", "exports", "Services/Settings", "Messages"], function (n, t, i, r) {
	var u,
	f;
	t.PopupManager;
	f = function () {
		function n(n) {
			this.Host = n
		}
		return n.prototype.showPopup = function (n) {
			return n.params.Token = i.Token,
			u = $.Deferred(),
			this.Host.showPopup(n),
			u.promise()
		},
		n.prototype.showErrorPopup = function (n) {
			var t = {};
			return t.params = {},
			t.params.error = n,
			t.params.cancelEnabled = !0,
			t.name = "PayGenericPopup",
			this.showPopup(t)
		},
		n.prototype.showMessagePopup = function (n) {
			var t = {};
			return t.params = {},
			t.params.message = n,
			t.params.cancelEnabled = !0,
			t.name = "PayGenericPopup",
			this.showPopup(t)
		},
		n.prototype.showConfirmPopup = function (n, t, i, r) {
			var u = {};
			return u.params = {},
			u.params.message = n,
			u.params.cancelEnabled = !0,
			t && (u.params.cancelText = t),
			i && (u.params.okText = i),
			u.params.title = r,
			u.name = "PayGenericPopup",
			this.showPopup(u)
		},
		n.prototype.showNotificationPhonePopup = function (n) {
			var t = {};
			return t.params = {
				ctn : n,
				okText : "Продолжить"
			},
			t.name = "NotificationPhonePopup",
			this.showPopup(t)
		},
		n.prototype.showUnauthorizedPopup = function (n, t, u, f, e) {
			var o;
			if (n == 3) {
				if (i.SharedData.UserType == 0) {
					var s = i.SharedData.SettingsInfo.AuthUrl,
					h = function (n) {
						var t = document.createElement("a");
						return t.href = n,
						t
					},
					c = h(i.SharedData.SettingsInfo.MainUrl),
					l = c.pathname + window.location.hash,
					e = s.replace("{0}", encodeURIComponent(l));
					window.location.href = e;
					return
				}
				return o = {},
				o.params = {
					message : i.SharedData.UserType == 1 ? r.Messages.PopupChangeUserMessageMobile : r.Messages.PopupChangeUserMessageFttb,
					message2 : i.SharedData.UserType == 1 ? r.Messages.PopupChangeUserMessage2Mobile : r.Messages.PopupChangeUserMessage2Fttb,
					message3 : i.SharedData.UserType == 1 ? r.Messages.PopupChangeUserMessage3Mobile : r.Messages.PopupChangeUserMessage3Fttb
				},
				o.params.title = r.Messages.PopupChangeUserTitle + (i.SharedData.UserType == 1 ? r.Messages.PopupChangeUserSubTitleMobile : r.Messages.PopupChangeUserSubTitleFttb),
				o.params.okText = r.Messages.PopupChangeUserOk,
				o.params.cancelText = r.Messages.PopupChangeUserCancel,
				o.name = "ChangeUserPopup",
				this.showPopup(o)
			}
			return o = {},
			o.params = {
				style : n
			},
			o.params.title = t,
			n == 2 && (o.params.message = u, o.params.cancelText = f, o.params.cancelEnabled = !0),
			o.params.redirectUrl = e,
			o.name = "UnauthorizedPopup",
			this.showPopup(o)
		},
		n.prototype.PopupFeedback = function (n) {
			n.isSuccess ? u.resolve(n.data) : u.reject(n.data)
		},
		n
	}
	();
	t.PopupManagerClass = f
});
AltLanPay.define("Parts/MobileCtn", ["require", "exports", "knockout"], function (n, t, i) {
	var r = function () {
		function n(n, t, r) {
			var u = this;
			n = n || "";
			this.MasksBound = i.observable(!0);
			this.CtnNumber = i.observable(n.slice(3, n.length)).extend({
					required : {
						message : "Введите номер",
						onlyIf : t
					},
					pattern : {
						message : "Номер указан неверно",
						params : "^[0-9]{3}-?[0-9]{2}-?[0-9]{2}$",
						onlyIf : t
					}
				});
			this.CtnPrefix = i.observable(n.slice(0, 3)).extend({
					required : {
						message : "Введите номер",
						onlyIf : t
					},
					pattern : {
						message : "Номер указан неверно",
						params : r ? "^[69][0-9]{2}$" : "^9[0-9]{2}$",
						onlyIf : t
					}
				});
			this.CompiledCtn = i.pureComputed({
					read : function () {
						return (u.CtnPrefix() + u.CtnNumber()).split("-").join("")
					},
					write : function (n) {
						u.MasksBound(!1);
						u.CtnNumber(n.slice(3, n.length));
						u.CtnPrefix(n.slice(0, 3));
						u.MasksBound(!0)
					}
				}).extend({
					required : {
						message : "Введите номер",
						onlyIf : t
					},
					pattern : {
						message : "Номер указан неверно",
						params : r ? "^[69][0-9]{9}$" : "^9[0-9]{9}$",
						onlyIf : t
					}
				})
		}
		return n.prototype.Reset = function () {
			this.MasksBound(!1);
			this.CtnNumber("");
			this.CtnPrefix("");
			this.ResetModified();
			this.MasksBound(!0)
		},
		n.prototype.ResetModified = function () {
			this.CtnNumber.isModified(!1);
			this.CtnPrefix.isModified(!1);
			this.CompiledCtn.isModified(!1)
		},
		n
	}
	();
	t.MobileCtn = r
});
AltLanPay.define("Parts/FttbCtn", ["require", "exports", "knockout", "Services/Settings"], function (n, t, i, r) {
	var u = function () {
		function n(n, t, u) {
			var f = this;
			n = n || "";
			this.FttbCtns = u ? [u] : r.SharedData.SettingsInfo.FttbCtns;
			this.MasksBound = i.observable(!0);
			this.SelectedFttbPrefix = i.observable(r.SharedData.UserType == 2 && !u ? r.SharedData.Ctn.substring(0, 3) : this.FttbCtns[0]);
			this.CtnPrefix = this.SelectedFttbPrefix;
			this.CtnNumber = i.observable(n.slice(3, n.length)).extend({
					required : {
						message : "Номер указан неверно",
						onlyIf : t
					},
					pattern : {
						message : "Номер указан неверно",
						params : "^[0-9]{7}$",
						onlyIf : t
					}
				});
			this.CompiledCtn = i.pureComputed({
					read : function () {
						return (f.SelectedFttbPrefix() + f.CtnNumber()).split("-").join("")
					},
					write : function (n) {
						f.MasksBound(!1);
						f.CtnNumber(n.slice(3, n.length));
						f.SelectedFttbPrefix(n.slice(0, 3));
						f.MasksBound(!0)
					}
				}).extend({
					required : {
						message : "Номер указан неверно",
						onlyIf : t
					},
					pattern : {
						message : "Номер указан неверно",
						params : "^[0-9]{10}$",
						onlyIf : t
					}
				})
		}
		return n.prototype.Reset = function () {
			this.MasksBound(!1);
			this.CtnNumber("");
			this.CtnNumber.isModified(!1);
			this.SelectedFttbPrefix(this.FttbCtns[0]);
			this.MasksBound(!0);
			this.CompiledCtn.isModified(!1)
		},
		n
	}
	();
	t.FttbCtn = u
});
AltLanPay.define("Services/AnalyticService", ["require", "exports", "Services/Settings"], function (n, t, i) {
	t.pushAnalitics = function (n) {
		n.eventLabel = window.location.host + "/" + window.location.hash;
		n.topupAccount = n.topupAccount || i.SharedData.AnalyticId;
		console.log(n);
		window.dataLayer.push(n)
	}
});
AltLanPay.define("Parts/NewAutoPayModel", ["require", "exports", "knockout", "Services/Settings", "Parts/MobileCtn", "Parts/FttbCtn", "Services/HttpClient", "Parts/Awaiters", "Messages", "Services/AnalyticService"], function (n, t, i, r, u, f, e, o, s, h) {
	var c = function () {
		function n(n, t, e, c, l) {
			var a = this;
			this.AddAutoPaymentAwaiter = new o.SimpleAwaiter({
					SuccessMessage : "Параметры Автооплаты сохранены",
					FailMessage : "Автооплата не подключена",
					ProcessingMessage : "Пожалуйста подождите",
					RequestTimeoutMessage : "Не удалось получить статус операции."
				});
			this.addFttbAutoPaymentAwaiter = new o.RequestAwaiter({
					SuccessMessage : "Автооплата успешно подключена",
					FailMessage : "Автооплата не подключена",
					ProcessingMessage : "Пожалуйста подождите",
					RequestTimeoutMessage : "Не удалось получить статус операции."
				});
			this.CtnPart = t == 2 ? new f.FttbCtn(n, l) : new u.MobileCtn(n, l);
			this.ActiveCard = c;
			this.AutoPaymentBarriers = r.SharedData.SettingsInfo.AutoPayBarriers;
			this.MinThresholdSum = i.observable(this.AutoPaymentBarriers[0]);
			this.AutoPaymentMax = r.SharedData.SettingsInfo.AutoPaymentMax;
			this.AutoPaymentMin = r.SharedData.SettingsInfo.AutoPaymentMin;
			this.CtnStatus = i.observable(e);
			this.AutoPayType = t;
			this.RequireAutoPayParams = i.computed(function () {
					return t == 1 && a.CtnStatus() != 0 && l()
				});
			this.PaymentSum = i.observable(this.AutoPaymentMin).extend({
					required : {
						message : "Введите сумму платежа",
						onlyIf : this.RequireAutoPayParams
					}
				}).extend({
					pattern : {
						message : "Сумма платежа указана неверно",
						params : "^[0-9]+$",
						onlyIf : this.RequireAutoPayParams
					}
				}).extend({
					min : {
						params : this.AutoPaymentMin,
						message : "Сумма платежа не может быть менее " + this.AutoPaymentMin + " рублей",
						onlyIf : this.RequireAutoPayParams
					}
				}).extend({
					max : {
						params : this.AutoPaymentMax,
						message : "Сумма платежа не может быть более " + this.AutoPaymentMax + " рублей",
						onlyIf : this.RequireAutoPayParams
					}
				}).isModified(!1);
			this.ValidationModel = i.validation.group({
					PaymentSum : this.PaymentSum,
					MobileCtn : this.CtnPart.CompiledCtn
				});
			this.AddAutoPaymentAwaiter.Status.subscribe(function (n) {
				n > 1 && h.pushAnalitics({
					eventCategory : n == 2 ? s.Messages.AnalyticSuccess : s.Messages.AnalyticError,
					eventAction : "payAutoAttachcard",
					eventContext : a.AddAutoPaymentAwaiter.ActiveMessage(),
					eventValue : a.PaymentSum()
				})
			})
		}
		return n.prototype.Reset = function () {
			this.MinThresholdSum(this.AutoPaymentBarriers[0]);
			this.PaymentSum(this.AutoPaymentMin);
			this.PaymentSum.isModified(!1);
			this.CtnPart.Reset()
		},
		n.prototype.AddAutoPaymentFttb = function () {
			var n = this;
			return this.addFttbAutoPaymentAwaiter.Await(e.Ajax("/api/ManageAutoPayment/ChangeFttb", {
					type : "POST",
					data : {
						"" : !0
					}
				})).then(function () {
				return n.AddAutoPaymentAwaiter.Status(2),
				null
			}, function () {
				n.AddAutoPaymentAwaiter.Status(n.addFttbAutoPaymentAwaiter.Status());
				n.AddAutoPaymentAwaiter.ActiveMessage(n.addFttbAutoPaymentAwaiter.ActiveMessage())
			})
		},
		n.prototype.AddAutoPayment = function (n) {
			var t = this,
			i = $.Deferred();
			return this.AddAutoPaymentAwaiter.Status(1),
			this.AutoPayType == 2 ? this.AddAutoPaymentFttb() : (e.Ajax("/api/ManageAutoPayment/AddMobile", {
					type : "POST",
					data : {
						Ctn : this.CtnPart.CompiledCtn(),
						MinThresholdSum : this.MinThresholdSum(),
						PaymentSum : this.PaymentSum()
					},
					headers : {
						"x-mtopup-secretKey" : n
					}
				}).then(function () {
					var r = window.setTimeout(function () {
							window.clearInterval(n);
							t.AddAutoPaymentAwaiter.Status(4);
							i.reject()
						}, 25e3),
					n = window.setInterval(function () {
							e.Get("/api/ManageAutoPayment/GetMobile").then(function (u) {
								if (u.filter(function (n) {
										return n.Ctn == t.CtnPart.CompiledCtn()
									}).length > 0) {
									window.clearInterval(n);
									window.clearTimeout(r);
									var f = u.filter(function (n) {
											return n.Ctn == t.CtnPart.CompiledCtn()
										})[0];
									f.PaymentSum ? t.CtnStatus(1) : t.CtnStatus(0);
									t.AddAutoPaymentAwaiter.Status(2);
									i.resolve(u)
								}
							})
						}, 1e3)
				}, function (n) {
					t.AddAutoPaymentAwaiter.Status(3);
					i.reject(n)
				}), i.promise())
		},
		n
	}
	();
	t.NewAutoPayModel = c
});
__extends = this.__extends || function (n, t) {
	function r() {
		this.constructor = n
	}
	for (var i in t)
		t.hasOwnProperty(i) && (n[i] = t[i]);
	r.prototype = t.prototype;
	n.prototype = new r
};
AltLanPay.define("Boards/AutoPayment/AddCardBoard", ["require", "exports", "knockout", "Boards/BaseBoard", "Widgets/MTopUp/BindCardWidget", "Services/FormatHelper", "Services/PopupManager", "Parts/NewAutoPayModel", "Messages", "Services/AnalyticService"], function (n, t, i, r, u, f, e, o, s, h) {
	var c = function (n) {
		function t(t, r) {
			var f = this;
			n.call(this, t, r);
			this.ActiveStage = i.observable(0);
			this.isTooltipVisible = i.observable(!1);
			this.isCodeTooltipVisible = i.observable(!1);
			r = r || {};
			this.ConnectAutoPayment = i.observable(!1);
			this.Ctn = t.SharedData.Ctn;
			this.UserType = t.SharedData.UserType;
			this.CtnStatus = t.ManageAutoPaymentWidget.CtnStatus;
			this.ActiveCard = i.observable(t.ManageAutoPaymentWidget.Cards.filter(function (n) {
						return n.IsActive
					})[0]);
			this.MTopUpCardWidget = new u.BindCardWidget(t.MTopUpCardWidget, this.ConnectAutoPayment, this.ActiveCard() != null);
			this.MTopUpCardWidget.ActiveStage.subscribe(function (n) {
				n != 0 && f.ActiveStage(2);
				(n == 5 || n == 6) && h.pushAnalitics({
					eventCategory : n == 5 ? s.Messages.AnalyticSuccess : s.Messages.AnalyticError,
					eventAction : f.ConnectAutoPayment() ? "payAutoNotattachcard" : "attachCard",
					eventContext : n == 6 ? f.MTopUpCardWidget.BindCardErrorMessage() : f.ConnectAutoPayment() ? "Автооплата включена" : "Карта привязана",
					eventValue : null
				})
			});
			this.AutoPaymentCtns = t.ManageAutoPaymentWidget.AutoPaymentCtns;
			this.NewAutoPayModel = new o.NewAutoPayModel(r.ctn || this.Ctn, t.SharedData.UserType, t.ManageAutoPaymentWidget.CtnStatus, this.ActiveCard, i.computed(function () {
						return f.ConnectAutoPayment()
					}));
			r.minThresholdSum && this.NewAutoPayModel.MinThresholdSum(r.minThresholdSum);
			r.paymentSum && this.NewAutoPayModel.PaymentSum(r.paymentSum);
			this.UseActiveCard = i.observable(!1);
			this.UseActiveCard.subscribe(function (n) {
				n ? f.NewAutoPayModel.CtnStatus(2) : (f.NewAutoPayModel.CtnStatus(t.ManageAutoPaymentWidget.CtnStatus), f.NewAutoPayModel.CtnPart.CompiledCtn(t.SharedData.Ctn))
			});
			this.AgreeConditions = i.observable(!1).extend({
					equal : {
						params : !0,
						message : "Необходимо согласие с условиями"
					}
				});
			this.SkipSKCheck = t.ManageAutoPaymentWidget.SkipSKCheck;
			this.SecretCode = i.observable("").extend({
					required : {
						message : "Введите секретный код",
						params : !0,
						onlyIf : function () {
							return f.UseActiveCard() && !f.SkipSKCheck
						}
					},
					pattern : {
						message : "Секретный код состоит из 4 цифр",
						params : "^[0-9]{4}$",
						onlyIf : function () {
							return f.UseActiveCard() && !f.SkipSKCheck
						}
					}
				}).isModified(!1);
			this.ValidationModel = i.validation.group({
					AgreeConditions : this.AgreeConditions
				});
			this.HasAutoPaymentAlready = i.computed(function () {
					return t.ManageAutoPaymentWidget.AutoPaymentCtns.filter(function (n) {
						return n.Ctn == f.NewAutoPayModel.CtnPart.CompiledCtn()
					}).length > 0
				});
			this.AllValidationErrors = i.computed(function () {
					return Array.prototype.concat.call(f.MTopUpCardWidget.ValidationErrors(), f.ValidationModel(), f.NewAutoPayModel.ValidationModel())
				});
			this._notificationCtn = t.NotificationCtn
		}
		return __extends(t, n),
		t.prototype.ClickTooltipVisible = function () {
			this.isTooltipVisible(!this.isTooltipVisible())
		},
		t.prototype.ClickCodeTooltipVisible = function () {
			this.isCodeTooltipVisible(!this.isCodeTooltipVisible())
		},
		t.prototype.BindCard = function () {
			var n = this;
			if (this.AllValidationErrors().length > 0) {
				this.ValidationModel.showAllMessages();
				this.NewAutoPayModel.ValidationModel.showAllMessages();
				return
			}
			var t = this.ConnectAutoPayment() ? "Вы действительно хотите включить<br /> Автооплату счета?" : "Банковская карта <br /> будет привязана к счету " + f.FormatCtn(this.Data.SharedData.Ctn),
			i = this.ConnectAutoPayment() ? "Счет " + f.FormatCtn(this.NewAutoPayModel.CtnPart.CompiledCtn()) + " будет автоматически пополняться<br /> с банковской карты " + (this.UseActiveCard() ? f.FormatCard(this.ActiveCard().BankBIN, this.ActiveCard().CardNumberCode) : "") : "Вы действительно хотите<br /> привязать банковскую карту?",
			r = this.ConnectAutoPayment() ? "Да" : "Привязать";
			e.PopupManager.showConfirmPopup(i, this.ConnectAutoPayment() ? "Нет, не включать" : "", r, t).then(function () {
				n.UseActiveCard() ? (n.NewAutoPayModel.AddAutoPayment(n.SecretCode()), n.ActiveStage(1)) : n._ensureCtn().then(function () {
					var t = {};
					t = n.ConnectAutoPayment() ? {
						on : !0,
						barrier : parseInt(n.NewAutoPayModel.MinThresholdSum()) * 100,
						sum : parseInt(n.NewAutoPayModel.PaymentSum()) * 100
					}
					 : n.UserType == 2 ? {
						on : !0,
						barrier : n.NewAutoPayModel.AutoPaymentBarriers[0] * 100,
						sum : n.NewAutoPayModel.AutoPaymentMin * 100
					}
					 : {
						on : !1
					};
					n.MTopUpCardWidget.BindCard({
						ctnPrefix : n.NewAutoPayModel.CtnPart.CtnPrefix(),
						ctn : n.NewAutoPayModel.CtnPart.CtnNumber().split("-").join(""),
						type : "register",
						autoPayment : t
					})
				})
			}, function () {})
		},
		t.prototype._ensureCtn = function () {
			var t = this,
			n = $.Deferred();
			return this.Data.SharedData.UserType != 2 ? (n.resolve(this._notificationCtn), n) : (e.PopupManager.showNotificationPhonePopup(this._notificationCtn).then(function (i) {
					t._notificationCtn = i;
					n.resolve(i)
				}), n)
		},
		t
	}
	(r.BaseBoard);
	t.Board = c
});
__extends = this.__extends || function (n, t) {
	function r() {
		this.constructor = n
	}
	for (var i in t)
		t.hasOwnProperty(i) && (n[i] = t[i]);
	r.prototype = t.prototype;
	n.prototype = new r
};
AltLanPay.define("Boards/AutoPayment/AddAutoPaymentBoard", ["require", "exports", "knockout", "Boards/AutoPayment/AddCardBoard"], function (n, t, i, r) {
	var u = function (n) {
		function t(t, r) {
			var u = this;
			n.call(this, t, r);
			this.ConnectAutoPayment(!0);
			this.UseActiveCard(this.ActiveCard() != null);
			this.ValidationModel = i.validation.group({
					SecretCode : this.SecretCode,
					AgreeConditions : this.AgreeConditions
				});
			this.AllValidationErrors = i.computed(function () {
					return u.UseActiveCard() ? Array.prototype.concat.call(u.ValidationModel(), u.NewAutoPayModel.ValidationModel()) : Array.prototype.concat.call(u.MTopUpCardWidget.ValidationErrors(), u.ValidationModel(), u.NewAutoPayModel.ValidationModel())
				})
		}
		return __extends(t, n),
		t
	}
	(r.Board);
	t.Board = u
});
AltLanPay.define("Widgets/AutoPayment/FttbManageAutoPaymentWidget", ["require", "exports", "knockout", "Services/Settings", "Services/FormatHelper", "Services/PopupManager", "Parts/Awaiters", "Services/HttpClient", "Messages", "Services/AnalyticService"], function (n, t, i, r, u, f, e, o, s, h) {
	var c = function () {
		function n(n) {
			var t = this;
			this.ChangeCardAwaiter = new e.DeferredAwaiter({
					ProcessingMessage : "Пожалуйста, подождите",
					SuccessMessage : "Карта успешно отвязана"
				});
			this.ChangeAutoPaymentAwaiter = new e.RequestAwaiter({
					ProcessingMessage : "Пожалуйста, подождите",
					FailMessage : "Не удалось изменить параметры автооплаты. Попробуйте повторить позднее",
					RequestTimeoutMessage : "Не удалось получить статус операции.<br/> В случае успеха параметры автооплаты изменятся через некоторое время",
					SuccessMessage : "Настройки автооплаты успешно изменены "
				});
			this.Data = n;
			this.Ctn = r.SharedData.Ctn;
			this.IsAutoPaymentEnabled = i.observable(n.AutoPaymentCtns.length > 0);
			this.ActiveCard = i.observable(n.Cards[0]);
			this.InStopList = n.InStopList;
			this.InStopListReason = n.InStopListReason;
			this.SupportPhone = s.Messages.SupportPhone;
			this.ShowAwaiter = i.observable("");
			this.ChangeCardAwaiter.Status.subscribe(function (n) {
				n > 1 && h.pushAnalitics({
					eventCategory : n == 2 ? s.Messages.AnalyticSuccess : s.Messages.AnalyticError,
					eventAction : "unattachCard",
					eventContext : t.ChangeCardAwaiter.ActiveMessage(),
					eventValue : null
				})
			})
		}
		return n.prototype.ChangeAutoPayment = function (n) {
			var t = this;
			if (r.SharedData.UserType != 2) {
				f.PopupManager.showUnauthorizedPopup(2, s.Messages.UnauthorizedAutoPaymentTitle, s.Messages.UnauthorizedAutoPaymentMessage, s.Messages.UnauthorizedAutoPaymentCancelText);
				return
			}
			var i = "",
			e = "",
			c = "",
			l = "";
			n ? (i = "Автооплата с банковской карты", e = "Автоматическое пополнение счета " + u.FormatCtn(this.Ctn) + "<br /> с банковской карты " + u.FormatCard(this.ActiveCard().BankBIN, this.ActiveCard().CardNumberCode) + "<br /> будет включено", c = "Включить автооплату", l = "") : (i = "Вы действительно хотите<br /> отключить автооплату?", e = "Автоматическое пополнение счета " + u.FormatCtn(this.Ctn) + "<br /> с банковской карты " + u.FormatCard(this.ActiveCard().BankBIN, this.ActiveCard().CardNumberCode) + "<br /> будет отключено", c = "Отключить автооплату", l = "Нет, не отключать");
			f.PopupManager.showConfirmPopup(e, l, c, i).then(function () {
				t.ShowAwaiter("ChangeAutoPayment");
				t.ChangeAutoPaymentAwaiter.Await(o.Ajax("/api/ManageAutoPayment/ChangeFttb", {
						type : "POST",
						data : {
							"" : n
						}
					})).then(function () {
					t.IsAutoPaymentEnabled(n);
					h.pushAnalitics({
						eventCategory : s.Messages.AnalyticSuccess,
						eventAction : n ? "payAutoAttachcard" : "payAutoDelete",
						eventContext : t.ChangeAutoPaymentAwaiter.ActiveMessage(),
						eventValue : null
					})
				}, function () {
					h.pushAnalitics({
						eventCategory : s.Messages.AnalyticError,
						eventAction : n ? "payAutoAttachcard" : "payAutoDelete",
						eventContext : t.ChangeAutoPaymentAwaiter.ActiveMessage(),
						eventValue : null
					})
				})
			})
		},
		n.prototype.DeleteCard = function (n) {
			var t = this,
			i = "",
			r = "",
			e = "",
			s = this.IsAutoPaymentEnabled() ? "<br /> Будет отключена услуга Автооплата." : "";
			n ? (i = "Вы действительно хотите<br /> сменить карту?", r = "Банковская карта " + u.FormatCard(this.ActiveCard().BankBIN, this.ActiveCard().CardNumberCode) + "<br /> будет отвязана от счета " + u.FormatCtn(this.Ctn) + s, e = "Нет, не менять") : (i = "Вы действительно хотите<br /> отвязать карту?", r = "Данные банковской карты " + u.FormatCard(this.ActiveCard().BankBIN, this.ActiveCard().CardNumberCode) + "<br /> будут удалены." + s, e = "Нет, не отвязывать");
			f.PopupManager.showConfirmPopup(r, e, "Да", i).then(function () {
				t.ShowAwaiter("DeleteCard");
				t.ChangeCardAwaiter.Await(o.Ajax("/api/ManageCard/DeleteFttb", {
						type : "POST"
					})).then(function () {
					n && (window.location.href = "#/AutoPayment/AddCard");
					t.ActiveCard(null);
					t.IsAutoPaymentEnabled(!1)
				})
			})
		},
		n.prototype.TryAddCard = function () {
			r.SharedData.UserType == 2 ? window.location.hash = "/AutoPayment/AddCard" : r.SharedData.UserType == 0 ? f.PopupManager.showUnauthorizedPopup(2, "Привязка банковской карты к счету", "Для привязки банковской карты к счету", "Не привязывать карту", "#/AutoPayment/AddCard") : f.PopupManager.showUnauthorizedPopup(3)
		},
		n.prototype.TryAutoPayment = function () {
			r.SharedData.UserType == 2 ? window.location.hash = "/AutoPayment/AddAutoPayment" : r.SharedData.UserType == 0 ? f.PopupManager.showUnauthorizedPopup(2, "Подключение опции «Автооплата»", "Для настройки автоматического пополнения счета", "Не настраивать Автооплату", "#/AutoPayment/AddAutoPayment") : f.PopupManager.showUnauthorizedPopup(3)
		},
		n
	}
	();
	t.FttbManageAutoPaymentWidget = c
});
AltLanPay.define("Services/SecretKeyService", ["require", "exports", "Services/PopupManager"], function (n, t, i) {
	function r(n) {
		var r = $.Deferred();
		return n ? r.resolve(null) : t.SecretKey ? r.resolve(t.SecretKey) : (i.PopupManager.showPopup({
				name : "EnsureSecretKeyPopup",
				params : {}

			}).then(function (n) {
				t.SecretKey = n;
				r.resolve(t.SecretKey)
			}), r)
	}
	t.SecretKey;
	t.EnsureSecretKey = r
});
__extends = this.__extends || function (n, t) {
	function r() {
		this.constructor = n
	}
	for (var i in t)
		t.hasOwnProperty(i) && (n[i] = t[i]);
	r.prototype = t.prototype;
	n.prototype = new r
};
AltLanPay.define("Widgets/AutoPayment/MobileManageAutoPaymentWidget", ["require", "exports", "knockout", "Services/Settings", "Services/FormatHelper", "Services/PopupManager", "Messages", "Parts/Awaiters", "Services/HttpClient", "Services/SecretKeyService", "Parts/NewAutoPayModel", "Services/PopupManager", "Services/AnalyticService"], function (n, t, i, r, u, f, e, o, s, h, c, l, a) {
	var p = function () {
		function n(n) {
			var t = this;
			this.AddAutoPaymentVisible = i.observable(!1);
			this.editMode = i.observable(!0);
			this.ShowCardAwaiter = i.observable(!1);
			this.ShowUnbindCtnAwaiter = i.observable(!1);
			this.ShowAddCtnAwaiter = i.observable(!1);
			this.ShowEditCtnAwaiter = i.observable(!1);
			this.isTooltipVisible = i.observable(!1);
			this.isCodeTooltipVisible = i.observable(!1);
			this.UserType = UserType[r.SharedData.UserType];
			this.UnbindCtnAwaiter = new o.DeferredAwaiter({
					ProcessingMessage : "Пожалуйста, подождите. <br/> Запрос на отключение Автооплаты уже отправлен.",
					FailMessage : "Автоплата не отключена",
					SuccessMessage : "Автооплата отключена успешно",
					RequestTimeoutMessage : "Банковская карта не отвязана. Попробуйте повторить позднее"
				});
			this.UnbindCardAwaiter = new o.DeferredAwaiter({
					ProcessingMessage : "Пожалуйста, подождите. <br/> Запрос на отвязку карты уже отправлен.",
					FailMessage : "Банковская карта не отвязана",
					SuccessMessage : "Банковская карта отвязана успешно",
					RequestTimeoutMessage : "Банковская карта не отвязана. Попробуйте повторить позднее"
				});
			this.EditCtnAwaiter = new o.DeferredAwaiter({
					FailMessage : "При редактировании номера произошла ошибка"
				});
			this.Data = n;
			this.AutoPayments = i.observableArray(n.AutoPaymentCtns.map(function (n) {
						return new v(n, t)
					}));
			this.Cards = i.observableArray(n.Cards.map(function (n) {
						return new y(n, t)
					}));
			this.SkipSKCheck = i.observable(n.SkipSKCheck);
			this.ActiveCard = i.computed(function () {
					return t.Cards().filter(function (n) {
						return n.IsActiveCard()
					})[0]
				});
			this.ActiveAutoPayment = i.computed(function () {
					return t.AutoPayments().filter(function (n) {
						return n.CtnPart.CompiledCtn() == r.SharedData.Ctn
					})[0]
				});
			this.Ctn = r.SharedData.Ctn;
			this.CtnStatus = n.CtnStatus;
			this.InStopList = n.InStopList;
			this.InStopListReason = n.InStopListReason;
			this.SupportPhone = e.Messages.SupportPhone;
			this.NewAutoPayModel = new c.NewAutoPayModel("", 1, 2, this.ActiveCard, i.computed(function () {
						return !0
					}));
			this.AddAutoPaymentVisible.subscribe(function (n) {
				n || t.NewAutoPayModel.Reset()
			});
			this.EditActiveCardMode = i.observable(!1);
			this.UnbindCtnAwaiter.Status.subscribe(function (n) {
				n > 1 && a.pushAnalitics({
					eventCategory : n == 2 ? e.Messages.AnalyticSuccess : e.Messages.AnalyticError,
					eventAction : "payAutoDelete",
					eventContext : t.UnbindCtnAwaiter.ActiveMessage(),
					eventValue : null
				})
			});
			this.UnbindCardAwaiter.Status.subscribe(function (n) {
				n > 1 && a.pushAnalitics({
					eventCategory : n == 2 ? e.Messages.AnalyticSuccess : e.Messages.AnalyticError,
					eventAction : "unattachCard",
					eventContext : t.UnbindCardAwaiter.ActiveMessage(),
					eventValue : null
				})
			})
		}
		return n.prototype.AddNumber = function () {
			var n = this;
			if (this.NewAutoPayModel.ValidationModel().length > 0) {
				this.NewAutoPayModel.ValidationModel.showAllMessages();
				return
			}
			h.EnsureSecretKey(this.SkipSKCheck()).then(function (t) {
				n.editMode(!1);
				n.ShowAddCtnAwaiter(!0);
				n.NewAutoPayModel.AddAutoPayment(t).then(function (t) {
					n.AutoPayments(t.map(function (t) {
							return new v(t, n)
						}));
					n.AddAutoPaymentVisible(!1)
				})
			})
		},
		n.prototype.UncheckAllSelected = function () {
			this.Cards().filter(function (n) {
				return n.IsActiveSelected()
			})[0].IsActiveSelected(!1)
		},
		n.prototype.ConfirmActiveCardChange = function () {
			this.EditActiveCardMode(!0)
		},
		n.prototype.ClickTooltipVisible = function () {
			this.isTooltipVisible(!this.isTooltipVisible())
		},
		n.prototype.ClickCodeTooltipVisible = function () {
			this.isCodeTooltipVisible(!this.isCodeTooltipVisible())
		},
		n.prototype.ChangeActiveCard = function () {
			var n = this,
			t = this.Cards().filter(function (n) {
					return n.IsActiveSelected()
				})[0],
			i = "<p> Карта " + u.FormatCard(t.BankBIN, t.CardNumberCode) + " станет активной <br/>для счета " + u.FormatCtn(this.Ctn) + " <\/p>";
			i += "<br/>";
			f.PopupManager.showConfirmPopup(i, "Нет, не менять", "Да", "Вы действительно хотите сменить активную карту?").then(function () {
				h.EnsureSecretKey(n.SkipSKCheck()).then(function (n) {
					return s.Ajax("/api/ManageCard/SetActiveCard", {
						type : "POST",
						data : {
							BankBIN : t.BankBIN,
							CardNumberCode : t.CardNumberCode
						},
						headers : {
							"x-mtopup-secretKey" : n
						}
					})
				}).then(function () {
					n.Cards().filter(function (n) {
						return n.IsActiveCard()
					})[0].IsActiveCard(!1);
					n.Cards().filter(function (n) {
						return n.IsActiveSelected()
					})[0].IsActiveCard(!0);
					n.EditActiveCardMode(!1)
				})
			})
		},
		n.prototype.CancelSecretKey = function () {
			var n = this;
			l.PopupManager.showPopup({
				name : "CancelSecretKeyPopup",
				params : {}

			}).then(function () {
				return n.SkipSKCheck(!0)
			})
		},
		n.prototype.TryAddCard = function () {
			r.SharedData.UserType == 1 ? window.location.hash = "/AutoPayment/AddCard" : r.SharedData.UserType == 0 ? f.PopupManager.showUnauthorizedPopup(2, "Привязка банковской карты к счету", "Для привязки банковской карты к счету", "Не привязывать карту", "#/AutoPayment/AddCard") : f.PopupManager.showUnauthorizedPopup(3)
		},
		n.prototype.TryAutoPayment = function () {
			r.SharedData.UserType == 1 ? window.location.hash = "/AutoPayment/AddAutoPayment" : r.SharedData.UserType == 0 ? f.PopupManager.showUnauthorizedPopup(2, "Подключение опции «Автооплата»", "Для настройки автоматического пополнения счета", "Не настраивать Автооплату", "#/AutoPayment/AddAutoPayment") : f.PopupManager.showUnauthorizedPopup(3)
		},
		n
	}
	(),
	v,
	y;
	t.MobileManageAutoPaymentWidget = p;
	v = function (n) {
		function t(t, r) {
			n.call(this, t.Ctn, 1, t.CtnStatus, r.ActiveCard, i.observable(!0));
			this.InEditMode = i.observable(!1);
			this.MinThresholdSum(t.MinThresholdSum);
			this.PaymentSum(t.PaymentSum);
			this.MobileManageAutoPaymentWidget = r;
			this.InEditMode = i.observable(!1);
			this.ServerState = t
		}
		return __extends(t, n),
		t.prototype.SaveChanges = function () {
			var n = this;
			if (!this.PaymentSum.isValid())
				return !1;
			h.EnsureSecretKey(this.MobileManageAutoPaymentWidget.SkipSKCheck()).then(function (t) {
				return n.MobileManageAutoPaymentWidget.EditCtnAwaiter.Await(s.Ajax("/api/ManageAutoPayment/ChangeMobile", {
						type : "POST",
						data : {
							Ctn : n.CtnPart.CompiledCtn(),
							MinThresholdSum : n.MinThresholdSum(),
							PaymentSum : n.PaymentSum()
						},
						headers : {
							"x-mtopup-secretKey" : t
						}
					})).then(function () {
					n.ServerState.PaymentSum = n.PaymentSum();
					n.ServerState.MinThresholdSum = n.MinThresholdSum();
					n.InEditMode(!1)
				}, function () {
					n.MobileManageAutoPaymentWidget.editMode(!1);
					n.MobileManageAutoPaymentWidget.ShowEditCtnAwaiter(!0)
				})
			})
		},
		t.prototype.CancelChanges = function () {
			this.PaymentSum(this.ServerState.PaymentSum);
			this.MinThresholdSum(this.ServerState.MinThresholdSum);
			this.InEditMode(!1)
		},
		t.prototype.CancelAutoPayment = function () {
			var n = this;
			f.PopupManager.showConfirmPopup("Для номера " + u.FormatCtn(this.CtnPart.CompiledCtn()) + " будет отключено<br /> автоматическое пополнение баланса с банковской карты", "Нет, не отключать", "Отключить", "Вы действительно хотите<br /> отключить Автооплату?").then(function () {
				return h.EnsureSecretKey(n.MobileManageAutoPaymentWidget.SkipSKCheck())
			}).then(function (t) {
				return n.MobileManageAutoPaymentWidget.editMode(!1),
				n.MobileManageAutoPaymentWidget.ShowUnbindCtnAwaiter(!0),
				n.MobileManageAutoPaymentWidget.UnbindCtnAwaiter.Await(s.Ajax("/api/ManageAutoPayment/CancelMobile", {
						type : "POST",
						data : {
							"" : n.CtnPart.CompiledCtn()
						},
						headers : {
							"x-mtopup-secretKey" : t
						}
					}))
			}).then(function () {
				n.MobileManageAutoPaymentWidget.AutoPayments.remove(n)
			})
		},
		t
	}
	(c.NewAutoPayModel);
	t.MobileAutoPayment = v;
	y = function () {
		function n(n, t) {
			this.BankBIN = n.BankBIN;
			this.CardNumberCode = n.CardNumberCode;
			this.IsActiveCard = i.observable(n.IsActive);
			this.IsActive = n.IsActive;
			this.MobileManageAutoPaymentWidget = t;
			this.IsActiveSelected = i.observable(n.IsActive)
		}
		return n.prototype.UnbindCard = function () {
			var n = this,
			t = "Банковская карта " + u.FormatCard(this.BankBIN, this.CardNumberCode) + "<br /> будет отвязана от счета " + u.FormatCtn(this.MobileManageAutoPaymentWidget.Ctn);
			this.MobileManageAutoPaymentWidget.Cards().length == 1 && this.MobileManageAutoPaymentWidget.AutoPayments().length > 0 && (t += "<br /> Автооплата счета будет отключена");
			f.PopupManager.showConfirmPopup(t, "Нет, не отвязывать", "Отвязать", "Вы действительно хотите<br /> отвязать банковскую карту?").then(function () {
				return h.EnsureSecretKey(n.MobileManageAutoPaymentWidget.SkipSKCheck())
			}).then(function (t) {
				return n.MobileManageAutoPaymentWidget.editMode(!1),
				n.MobileManageAutoPaymentWidget.ShowCardAwaiter(!0),
				n.MobileManageAutoPaymentWidget.UnbindCardAwaiter.Await(s.Ajax("/api/ManageCard/DeleteMobile", {
						type : "POST",
						data : {
							BankBIN : n.BankBIN,
							CardNumberCode : n.CardNumberCode
						},
						headers : {
							"x-mtopup-secretKey" : t
						}
					}))
			}).then(function () {
				n.MobileManageAutoPaymentWidget.Cards.remove(n);
				n.MobileManageAutoPaymentWidget.Cards().length ? n.MobileManageAutoPaymentWidget.Cards()[0].IsActiveCard(!0) : n.MobileManageAutoPaymentWidget.AutoPayments([])
			})
		},
		n
	}
	();
	t.MobileCard = y
});
__extends = this.__extends || function (n, t) {
	function r() {
		this.constructor = n
	}
	for (var i in t)
		t.hasOwnProperty(i) && (n[i] = t[i]);
	r.prototype = t.prototype;
	n.prototype = new r
};
AltLanPay.define("Boards/AutoPayment/ManageBoard", ["require", "exports", "Boards/BaseBoard", "Widgets/AutoPayment/FttbManageAutoPaymentWidget", "Widgets/AutoPayment/MobileManageAutoPaymentWidget"], function (n, t, i, r, u) {
	var f = function (n) {
		function t(t) {
			n.call(this, t);
			this.UserType = t.SharedData.UserType;
			t.SharedData.UserType == 2 ? this.FttbAutoPaymentWidget = new r.FttbManageAutoPaymentWidget(t.ManageAutoPaymentWidget) : this.MobileAutoPaymentWidget = new u.MobileManageAutoPaymentWidget(t.ManageAutoPaymentWidget)
		}
		return __extends(t, n),
		t
	}
	(i.BaseBoard);
	t.Board = f
});
__extends = this.__extends || function (n, t) {
	function r() {
		this.constructor = n
	}
	for (var i in t)
		t.hasOwnProperty(i) && (n[i] = t[i]);
	r.prototype = t.prototype;
	n.prototype = new r
};
AltLanPay.define("Boards/AutoPayment/MobilePromoBoard", ["require", "exports", "knockout", "Boards/BaseBoard"], function (n, t, i, r) {
	var u = function (n) {
		function t(t) {
			n.call(this, t);
			this.isTooltipVisible = i.observable(!1);
			this.toTop = function () {
				$("html, body").animate({
					scrollTop : 0
				}, "slow")
			};
			this.PageHtml = t.PageHtml
		}
		return __extends(t, n),
		t.prototype.ClickTooltipVisible = function () {
			this.isTooltipVisible(!this.isTooltipVisible())
		},
		t
	}
	(r.BaseBoard);
	t.Board = u
});
AltLanPay.define("Services/RedirectService", ["require", "exports", "Services/Settings"], function (n, t, i) {
	t.RedirectToRouteGlobal = function (n) {
		window.location.href = t.makeRelative(i.SharedData.SettingsInfo.MainUrl) + "#" + n
	};
	t.makeRelative = function (n) {
		var i = document.createElement("a"),
		t;
		return i.href = n,
		t = i.pathname || "",
		t[0] != "/" && (t = "/" + t),
		t
	}
});
AltLanPay.define("Widgets/ImmediatePaymentWidget", ["require", "exports", "knockout", "Services/Settings", "Classes", "Services/HttpClient", "Messages", "Parts/Awaiters", "Services/PopupManager", "Parts/MobileCtn", "Parts/FttbCtn", "Parts/NewAutoPayModel", "Services/FormatHelper", "Services/RedirectService", "Services/AnalyticService"], function (n, t, i, r, u, f, e, o, s, h, c, l, a, v, y) {
	var p = function () {
		function n(n, t, f) {
			var s = this;
			this.MobilePaymentType = new u.Option("Мобильный Билайн", 1);
			this.FttbPaymentType = new u.Option("Домашний Билайн", 2);
			this.isTooltipVisible = i.observable(!1);
			this.isCodeTooltipVisible = i.observable(!1);
			this.ImmediatePaymentAwaiter = new o.SimpleAwaiter({
					ProcessingMessage : "Процесс может занять несколько минут",
					SuccessMessage : "Баланс пополнен"
				});
			this.ActiveStage = i.observable(0);
			this.NewAutoPayModel = i.observable(null);
			this.Data = n;
			this.IsAnonymousUser = r.SharedData.UserType == 0;
			this.IsMobileUser = r.SharedData.UserType == 1;
			this.AvailablePaymentTypes = [this.MobilePaymentType, this.FttbPaymentType];
			this.SelectedPaymentType = i.observable(t == 1 ? this.MobilePaymentType : this.FttbPaymentType);
			this.IsCardVisible = !f;
			this.MobileCtn = new h.MobileCtn(r.SharedData.UserType == 1 && !f ? r.SharedData.Ctn : "", i.computed(function () {
						return s.SelectedPaymentType().value == 1
					}), !0);
			this.FttbCtn = new c.FttbCtn(r.SharedData.UserType == 2 && !f ? r.SharedData.Ctn : "", i.computed(function () {
						return s.SelectedPaymentType().value == 2
					}), f);
			this.PaymentCtn = i.computed(function () {
					return s.SelectedPaymentType().value == 1 ? s.MobileCtn.CompiledCtn() : s.FttbCtn.CompiledCtn()
				});
			this.CanPayCard = i.computed(function () {
					if (r.SharedData.UserType == 0 || n.ActiveCard == null)
						return !1;
					var t = r.SharedData.UserType == s.SelectedPaymentType().value;
					return s.SelectedPaymentType().value == 2 ? r.SharedData.Ctn == s.PaymentCtn() && t : s.SelectedPaymentType().value == 1 ? t : !1
				});
			this.UseActiveCard = i.observable(this.CanPayCard());
			this.CanPayCard.subscribe(function (n) {
				n || s.UseActiveCard(!1)
			});
			this.ImmediatePaymentMin = i.observable(r.SharedData.SettingsInfo.ImmediatePaymentMin);
			this.ImmediatePaymentMax = i.computed(function () {
					return r.SharedData.UserType == 1 ? r.SharedData.SettingsInfo.ImmediatePaymentWithoutCardMax : s.UseActiveCard() ? r.SharedData.SettingsInfo.ImmediatePaymentWithCardMax : r.SharedData.SettingsInfo.ImmediatePaymentWithoutCardMax
				});
			this.ImmediatePaymentSum = i.observable("").extend({
					required : {
						message : "Введите сумму платежа"
					},
					pattern : {
						message : "Сумма платежа указана неверно",
						params : "^[0-9]+$"
					},
					min : {
						message : "Сумма должна быть не менее {0} руб.",
						params : this.ImmediatePaymentMin
					},
					max : {
						message : "Сумма должна быть не более {0} руб.",
						params : this.ImmediatePaymentMax
					}
				}).isModified(!1);
			this.CanAddCard = i.computed(function () {
					return r.SharedData.UserType == 0 ? !0 : s.SelectedPaymentType().value == r.SharedData.UserType && n.ActiveCard == null
				});
			this.CanAddAutoPayment = i.computed(function () {
					return r.SharedData.UserType == 0 ? !0 : r.SharedData.UserType == 2 && s.SelectedPaymentType().value == 2 && r.SharedData.Ctn == s.PaymentCtn() && n.AutoPaymentCtns.length == 0 ? !0 : r.SharedData.UserType != 1 || s.SelectedPaymentType().value != 1 || r.SharedData.Ctn != s.PaymentCtn() && n.ActiveCard == null || n.AutoPaymentCtns.filter(function (n) {
						return n.Ctn == s.PaymentCtn()
					}).length != 0 ? !1 : !0
				});
			this.IsActiveCtn = i.computed(function () {
					return r.SharedData.Ctn == s.PaymentCtn()
				});
			this.SecretCode = i.observable("").extend({
					required : {
						message : "Введите секретный код",
						params : !0,
						onlyIf : function () {
							return s.CanPayCard() && s.UseActiveCard() && !n.SkipSKCheck && !s.IsActiveCtn()
						}
					},
					pattern : {
						message : "Секретный код состоит из 4 цифр",
						params : "^[0-9]{4}$",
						onlyIf : function () {
							return s.CanPayCard() && s.UseActiveCard() && !n.SkipSKCheck && !s.IsActiveCtn()
						}
					}
				}).isModified(!1);
			this.ValidationModel = i.validation.group({
					Sum : this.ImmediatePaymentSum,
					FttbCtn : this.FttbCtn.CompiledCtn,
					MobileCtn : this.MobileCtn.CompiledCtn,
					SecretCode : this.SecretCode
				});
			this.ImmediatePaymentAwaiter.Status.subscribe(function (n) {
				n == 0 && s.ActiveStage(0);
				n == 1 && s.ActiveStage(1);
				n == 2 && s.ActiveStage(3)
			});
			this.ImmediatePaymentAwaiter.Status.subscribe(function (n) {
				n > 1 && y.pushAnalitics({
					eventCategory : n == 2 ? e.Messages.AnalyticSuccess : e.Messages.AnalyticError,
					eventAction : "payOnceAttachcard",
					eventContext : s.ImmediatePaymentAwaiter.ActiveMessage(),
					eventValue : s.ImmediatePaymentSum()
				})
			})
		}
		return n.prototype.ImmediatePayment = function () {
			var n = this,
			t;
			if (this.ValidationModel().length > 0) {
				this.ValidationModel.showAllMessages();
				return
			}
			if (!this.UseActiveCard() || !this.CanPayCard()) {
				this.SelectedPaymentType().value == 1 ? v.RedirectToRouteGlobal("/ImmediatePayment/Mobile/?ctn=" + this.PaymentCtn() + "&sum=" + this.ImmediatePaymentSum()) : v.RedirectToRouteGlobal("/ImmediatePayment/Fttb/?ctn=" + this.PaymentCtn() + "&sum=" + this.ImmediatePaymentSum());
				return
			}
			t = this.UseActiveCard() ? " <br/> с привязанной карты <b>" + a.FormatCard(this.Data.ActiveCard.BankBIN, this.Data.ActiveCard.CardNumberCode) + "<\/b>" : "";
			s.PopupManager.showConfirmPopup(a.FormatFormNumberWithName(this.ImmediatePaymentSum(), ["рубль", "рубля", "рублей"]) + " будут списаны" + t + "<br/> на оплату счета <b>" + a.FormatCtn(this.PaymentCtn()) + "<\/b>", "Нет, не платить", "Да", "Вы действительно хотите оплатить счет?").then(function () {
				n.ImmediatePaymentAwaiter.Status(1);
				n.ActiveStage(1);
				f.Ajax("/api/ManageImmediatePayment/FromCard", {
					type : "POST",
					data : {
						Ctn : n.PaymentCtn(),
						Sum : n.ImmediatePaymentSum(),
						SecretKey : n.SelectedPaymentType().value == 2 ? null : n.SecretCode()
					}
				}).then(function (t) {
					if (!t) {
						n.ImmediatePaymentAwaiter.Status(3);
						n.ImmediatePaymentAwaiter.ActiveMessage("Неверный секретный код");
						return
					}
					return n.PrepareAutoPayment()
				}, function (t) {
					n.ImmediatePaymentAwaiter.Status(3);
					n.ImmediatePaymentAwaiter.ActiveMessage(e.Messages.GetMessageFromErrorData(t))
				})
			})
		},
		n.prototype.PrepareAutoPayment = function () {
			var n = this;
			if (this.SelectedPaymentType() == this.FttbPaymentType) {
				this.NewAutoPayModel(new l.NewAutoPayModel(this.PaymentCtn(), 2, 2, i.observable(this.Data.ActiveCard), i.computed(function () {
							return !0
						})));
				this.ImmediatePaymentAwaiter.Status(2);
				return
			}
			return f.Get("/api/CtnStatus/Get", {
				data : {
					ctn : this.PaymentCtn()
				}
			}).then(function (t) {
				n.NewAutoPayModel(new l.NewAutoPayModel(n.PaymentCtn(), 1, t, i.observable(n.Data.ActiveCard), i.computed(function () {
							return !0
						})));
				n.ImmediatePaymentAwaiter.Status(2)
			}, function () {
				n.ImmediatePaymentAwaiter.Status(2)
			})
		},
		n.prototype.navigateToAutoPayment = function () {
			v.RedirectToRouteGlobal("/AutoPayment/AddAutoPayment/?ctn=" + this.PaymentCtn() + "&paymentSum=" + this.NewAutoPayModel().PaymentSum() + "&minThresholdSum=" + this.NewAutoPayModel().MinThresholdSum())
		},
		n.prototype.AddAutoPayment = function () {
			var n = this;
			if (r.SharedData.UserType == 1) {
				this.navigateToAutoPayment();
				return
			}
			var t = "Автоматическое пополнение счета " + a.FormatCtn(this.PaymentCtn()) + "<br /> с банковской карты " + a.FormatCard(this.Data.ActiveCard.BankBIN, this.Data.ActiveCard.CardNumberCode) + "<br /> будет включено";
			s.PopupManager.showConfirmPopup(t, "", "Включить автооплату", "Автооплата с банковской карты").then(function () {
				n.NewAutoPayModel().AddAutoPayment(n.SecretCode())
			})
		},
		n.prototype.AddCard = function () {},
		n.prototype.ClickTooltipVisible = function () {
			this.isTooltipVisible(!this.isTooltipVisible())
		},
		n.prototype.ClickCodeTooltipVisible = function () {
			this.isCodeTooltipVisible(!this.isCodeTooltipVisible())
		},
		n
	}
	();
	t.ImmediatePaymentWidget = p
});
AltLanPay.define("Widgets/MTopUp/ImmediatePaymentCardWidget", ["require", "exports", "knockout", "Services/HttpClient", "Services/Settings", "Services/SessionStorage"], function (n, t, i, r, u, f) {
	var e = function () {
		function n(n) {
			this.ValidationErrors = i.observableArray(["Введите данные карты"]);
			this.ErrorMessage = i.observable("При проведении платежа произошла ошибка");
			this.IsProcessing = i.observable(!1);
			this.Card3DSVisible = i.observable(!1);
			this.isTooltipVisible = i.observable(!1);
			this.MTopUpCardUrl = n.MTopUpCardUrl;
			this.MTopUpCardDomain = this.getUrlOrigin(n.MTopUpCardUrl);
			this.PayWidgetOrigin = this.getUrlOrigin(u.apiBaseUrl);
			this.ActiveStage = i.observable(0);
			this.Ctn = u.SharedData.Ctn;
			this.UserType = u.SharedData.UserType;
			this.Card3DSIFrameUrl = u.apiBaseUrl + "/Card3DS/Index"
		}
		return n.prototype.IFrameLoad = function (n, t) {
			var i = this;
			this.IFrame = t.target;
			window.addEventListener ? window.addEventListener("message", function (n) {
				return i.receiveMessage(n)
			}, !1) : window.attachEvent("onmessage", function (n) {
				return i.receiveMessage(n)
			})
		},
		n.prototype.receiveMessage = function (n) {
			var r,
			u,
			t,
			f,
			i,
			e;
			if (console.log(n.data), this.checkOrigin(n.origin, this.PayWidgetOrigin) && (r = n.data.split("#")[0], u = n.data.split("#")[1] || "", r == "3dsResult")) {
				if (this.Card3DSVisible(!1), t = JSON.parse(u), t == null || t.CardProcessingStatus == 2) {
					this.ErrorMessage(t == null ? "При проведении платежа произошла ошибка" : t.ResultDescription);
					this.ActiveStage(4);
					return
				}
				if (this.PaymentId = t.PaymentId, t.CardProcessingStatus == 1) {
					this.EncMtopupData = t.EncMtopupData;
					this.ActiveStage(3);
					return
				}
				this.AwaitPaymentResult(t.PaymentId)
			}
			if (this.checkOrigin(n.origin, this.MTopUpCardDomain)) {
				this.IsProcessing(!1);
				switch (n.data.type) {
				case "validationError":
					n.data.errors.length == 0 ? this.ValidationErrors(["Введите данные карты"]) : this.ValidationErrors(n.data.errors);
					break;
				case "validationOk":
					this.ValidationErrors([]);
					break;
				case "createPaymentResponse":
					if (n.data.resultCode != 0) {
						this.ErrorMessage(n.data.errorMessage);
						this.ActiveStage(4);
						return
					}
					if (n.data.threeDSec) {
						this.ActiveStage(2);
						this.Card3DSVisible(!0);
						f = $("#Card3dsIFrame")[0];
						i = n.data.threeDSec;
						i.parentOrigin = window.location.origin;
						e = "submit3DS#" + JSON.stringify(i);
						f.contentWindow.postMessage(e, this.PayWidgetOrigin);
						return
					}
					if (n.data.items) {
						this.PaymentId = n.data.items[0].id;
						this.AwaitPaymentResult(this.PaymentId);
						return
					}
				}
			}
		},
		n.prototype.ProceedImmediatePayment = function (n) {
			console.log(n);
			this.IsProcessing(!0);
			this.IFrame.contentWindow.postMessage(n, this.MTopUpCardDomain)
		},
		n.prototype.GetPaymentState = function (n) {
			return r.Get("/api/CardReg/GetPaymentState", {
				data : {
					paymentId : n
				}
			})
		},
		n.prototype.checkOrigin = function (n, t) {
			var i = n.toLowerCase().split(":")[1],
			r = t.toLowerCase().split(":")[1];
			return i == r
		},
		n.prototype.AwaitPaymentResult = function (n) {
			var t = this,
			i;
			this.ActiveStage(1);
			i = window.setInterval(function () {
					t.GetPaymentState(n).then(function (n) {
						n.CardProcessingStatus == 1 && (window.clearInterval(i), t.EncMtopupData = n.EncMtopupData, t.ActiveStage(3));
						n.CardProcessingStatus == 2 && (window.clearInterval(i), t.ErrorMessage(n.ResultDescription), t.ActiveStage(4))
					}, function () {})
				}, 1e3)
		},
		n.prototype.Reload = function () {
			document.location.reload()
		},
		n.prototype.SavePayment = function () {
			var n = f.ReadCurrentStorage();
			n.Data.EncMtopupData = this.EncMtopupData;
			n.Data.PaymentId = this.PaymentId;
			f.SaveCurrentStorage(n)
		},
		n.prototype.getUrlOrigin = function (n) {
			var t = document.createElement("a");
			return t.href = n,
			t.origin || t.protocol + "//" + t.host
		},
		n.prototype.ClickTooltipVisible = function () {
			this.isTooltipVisible(!this.isTooltipVisible())
		},
		n
	}
	();
	t.ImmediatePaymentCardWidget = e
});
__extends = this.__extends || function (n, t) {
	function r() {
		this.constructor = n
	}
	for (var i in t)
		t.hasOwnProperty(i) && (n[i] = t[i]);
	r.prototype = t.prototype;
	n.prototype = new r
};
AltLanPay.define("Widgets/LargeImmediatePaymentWidget", ["require", "exports", "knockout", "Services/Settings", "Messages", "Widgets/ImmediatePaymentWidget", "Widgets/MTopUp/ImmediatePaymentCardWidget", "Services/PopupManager", "Services/FormatHelper", "Services/AnalyticService"], function (n, t, i, r, u, f, e, o, s, h) {
	var c = function (n) {
		function t(t, f, o) {
			var s = this;
			n.call(this, t, f);
			this.ShowOptions = !0;
			this.Data = t;
			this.IsAnonymousUser = r.SharedData.UserType == 0;
			o && (o.ctn && (this.UseActiveCard(!1), this.ShowOptions = !1, f == 2 ? this.FttbCtn.CompiledCtn(o.ctn) : this.MobileCtn.CompiledCtn(o.ctn)), o.sum && this.ImmediatePaymentSum(o.sum));
			this.MTopUpCardWidget = new e.ImmediatePaymentCardWidget({
					MTopUpCardUrl : t.MTopUpWidgetUrl
				});
			this.AgreeConditions = i.observable(!1).extend({
					equal : {
						params : !0,
						message : "Необходимо согласие с условиями"
					}
				});
			this.SelectedPointId = i.observable("mobile");
			this.MTopUpCardWidget.ActiveStage.subscribe(function (n) {
				n != 0 && s.ActiveStage(2);
				n == 3 && (h.pushAnalitics({
						eventCategory : u.Messages.AnalyticSuccess,
						eventAction : "payOnceNotattachcard",
						eventContext : "Баланс пополнен",
						eventValue : s.ImmediatePaymentSum()
					}), o[r.SharedData.SettingsInfo.RedirectUrlParameter] ? window.location.href = o[r.SharedData.SettingsInfo.RedirectUrlParameter] : s.PrepareAutoPayment());
				n == 4 && h.pushAnalitics({
					eventCategory : u.Messages.AnalyticError,
					eventAction : "payOnceNotattachcard",
					eventContext : s.MTopUpCardWidget.ErrorMessage() || "Баланс не пополнен",
					eventValue : s.ImmediatePaymentSum()
				})
			});
			this.ValidationModel = i.validation.group({
					Sum : this.ImmediatePaymentSum,
					AgreeConditions : this.AgreeConditions,
					FttbCtn : this.FttbCtn.CompiledCtn,
					MobileCtn : this.MobileCtn.CompiledCtn,
					SecretCode : this.SecretCode
				});
			this.AllValidationErrors = i.computed(function () {
					return s.UseActiveCard() && s.CanPayCard() ? s.ValidationModel() : Array.prototype.concat.call(s.MTopUpCardWidget.ValidationErrors(), s.ValidationModel())
				})
		}
		return __extends(t, n),
		t.prototype.ProceedImmediatePayment = function () {
			var t = this,
			i;
			this.AllValidationErrors().length > 0 || (this.UseActiveCard() && this.CanPayCard() ? n.prototype.ImmediatePayment.call(this) : (i = this.UseActiveCard() ? " <br/> с привязанной карты <b>" + s.FormatCard(this.Data.ActiveCard.BankBIN, this.Data.ActiveCard.CardNumberCode) + "<\/b>" : "", o.PopupManager.showConfirmPopup(this.ImmediatePaymentSum() + " рублей будут списаны" + i + "<br/> на оплату счета " + s.FormatCtn(this.PaymentCtn()), "Нет, не платить", "Да", "Вы действительно хотите оплатить счет?").then(function () {
						t.MTopUpCardWidget.ProceedImmediatePayment({
							type : "createPayment",
							paymentPointId : t.SelectedPointId(),
							items : [{
									account : t.PaymentCtn(),
									amount : parseInt(t.ImmediatePaymentSum())
								}
							]
						})
					})))
		},
		t.prototype.AddCard = function () {
			this.MTopUpCardWidget.SavePayment();
			window.location.href = "#/AutoPayment/AddCard"
		},
		t.prototype.AddAutoPayment = function () {
			this.Data.ActiveCard != null ? r.SharedData.UserType == 1 ? this.navigateToAutoPayment() : this.NewAutoPayModel().AddAutoPayment(this.SecretCode()) : (this.MTopUpCardWidget.SavePayment(), this.navigateToAutoPayment())
		},
		t
	}
	(f.ImmediatePaymentWidget);
	t.LargeImmediatePaymentWidget = c
});
__extends = this.__extends || function (n, t) {
	function r() {
		this.constructor = n
	}
	for (var i in t)
		t.hasOwnProperty(i) && (n[i] = t[i]);
	r.prototype = t.prototype;
	n.prototype = new r
};
AltLanPay.define("Boards/ImmediatePayment/IndexBoard", ["require", "exports", "Boards/BaseBoard", "Widgets/LargeImmediatePaymentWidget", "Widgets/MenuWidget"], function (n, t, i, r, u) {
	var f = function (n) {
		function t(t, i) {
			var f = this;
			n.call(this, t, i);
			this.CustomMenuWidget = new u.MenuWidget(t.Section, this.ExtraParams().paymentType);
			this.ImmediatePaymentWidget = new r.LargeImmediatePaymentWidget(t.ImmediatePaymentWidget, this.ExtraParams().paymentType == "Mobile" ? 1 : 2, i);
			this.ExtraParams.subscribe(function (n) {
				f.CustomMenuWidget.MenuItems.forEach(function (i) {
					return i.IsActive(i.Section == t.Section && i.Page == n.paymentType)
				});
				f.ImmediatePaymentWidget.MTopUpCardWidget.ActiveStage(0);
				f.ImmediatePaymentWidget.ActiveStage(0);
				n.paymentType == "Mobile" ? f.ImmediatePaymentWidget.SelectedPaymentType(f.ImmediatePaymentWidget.MobilePaymentType) : f.ImmediatePaymentWidget.SelectedPaymentType(f.ImmediatePaymentWidget.FttbPaymentType)
			});
			this.CustomMenuWidget.ActiveSubMenuItem.subscribe(function (n) {
				f.SetFttbPrefix(n.FttbPrefix)
			});
			this.CustomMenuWidget.ActiveMenuItem.subscribe(function (n) {
				n.SubMenu != null && f.SetFttbPrefix(n.SubMenu.filter(function (n) {
						return n.IsActive()
					})[0].FttbPrefix)
			})
		}
		return __extends(t, n),
		t.prototype.SetFttbPrefix = function (n) {
			n && this.ImmediatePaymentWidget.FttbCtn.SelectedFttbPrefix() != n && (this.ImmediatePaymentWidget.FttbCtn.SelectedFttbPrefix(n), this.ImmediatePaymentWidget.FttbCtn.CtnNumber(""), this.ImmediatePaymentWidget.FttbCtn.CtnNumber.isModified(!1))
		},
		t
	}
	(i.BaseBoard);
	t.Board = f
});
AltLanPay.define("Widgets/CashPaymentWidget", ["require", "exports", "knockout", "Services/Settings", "Services/HttpClient", "Services/PopupManager", "Messages", "Parts/Awaiters", "Parts/MobileCtn", "Messages", "Services/AnalyticService"], function (n, t, i, r, u, f, e, o, s, h, c) {
	var l = function () {
		function n(n, t, u) {
			var f = this;
			this.activeStage = i.observable("cashWidget");
			this.errorMessage = i.observable("");
			this.masksBound = i.observable(!0);
			this.paymentDate = i.observable("");
			this.CaptchaBasePath = r.apiBaseUrl + "/captcha.ashx?w=" + this.CaptchaWidth + "&h=" + this.CaptchaHeight;
			this.CaptchaPath = i.observable(this.CaptchaBasePath);
			this.CaptchaWidth = 105;
			this.CaptchaHeight = 31;
			this.HasCaptchaError = i.observable(!1);
			this.payCardAwaiter = new o.RequestAwaiter({
					SuccessMessage : "Пополнение счёта произойдёт в течение 1 минуты",
					FailMessage : "При оплате произошла ошибка. Проверьте введенный код или повторите позднее",
					RequestTimeoutMessage : "Пополнение счёта произойдёт в течение 2 минут",
					ProcessingMessage : "Превращаем цифры кода в деньги на вашем счёте"
				});
			this.IsWrongUserType = r.SharedData.UserType == 2 && t == 1 || r.SharedData.UserType == 1 && t == 2;
			this.AccessibilityType = AccessibilityType[u];
			this.ctn = i.observable(r.SharedData.Ctn);
			this.contractNumberInitial = n.TicketPaymentInfo ? n.TicketPaymentInfo.ContractNumber : "";
			this.contractNumber = i.observable(this.contractNumberInitial).extend({
					required : {
						message : "Номер договора",
						params : !0
					},
					pattern : {
						message : "Некорректный номер договора",
						params : "^[0-9]{1,7}$"
					}
				});
			this.paymentDate = i.observable(new Date);
			this.activationCode = i.observable("").extend({
					required : {
						message : "Код активации",
						params : !0
					},
					pattern : {
						message : "Некорректный код активации",
						params : "^[0-9]{16}$"
					}
				});
			this.isFttb = t == 2;
			this.MobileCtn = new s.MobileCtn(n.NotificationSettingsCtn || "", i.computed(function () {
						return t == 1
					}), !0);
			this.ctnPrefixInitial = this.MobileCtn.CtnPrefix();
			this.ctnNumberInitial = this.MobileCtn.CtnNumber();
			this.lastNameInitial = n.TicketPaymentInfo ? n.TicketPaymentInfo.LastName : "";
			this.firstNameInitial = n.TicketPaymentInfo ? n.TicketPaymentInfo.FirstName : "";
			this.paternalNameInitial = n.TicketPaymentInfo ? n.TicketPaymentInfo.PaternalName : "";
			this.lastName = i.observable(this.lastNameInitial);
			this.firstName = i.observable(this.firstNameInitial);
			this.paternalName = i.observable(this.paternalNameInitial);
			this.ImageUrl = i.observable(n.ImageUrl);
			this.ContentBlocks = n.ContentBlocks;
			this.cashPaymentCtn = i.computed(function () {
					return f.isFttb ? f.ctn() : f.MobileCtn.CompiledCtn()
				});
			this.immediateRubleInputed = i.observable().extend({
					required : {
						message : "Сумму",
						params : !0
					},
					validation : {
						validator : function (n) {
							if (!n)
								return !1;
							var t = .01 * (parseFloat(f.immediateKopInputed()) || 0) + (parseFloat(f.immediateRubleInputed()) || 0);
							return r.SharedData.SettingsInfo.ImmediatePaymentMin <= t && r.SharedData.SettingsInfo.ImmediatePaymentWithoutCardMax >= t
						},
						message : "Сумма должна быть от " + r.SharedData.SettingsInfo.ImmediatePaymentMin + " до " + r.SharedData.SettingsInfo.ImmediatePaymentWithoutCardMax + " руб."
					}
				}).isModified(!1);
			this.immediateKopInputed = i.observable().extend({
					min : {
						message : "Неверное количество копеек",
						params : 0
					},
					max : {
						message : "Неверное количество копеек",
						params : 99
					}
				}).isModified(!1);
			this.immediateSumInputed = i.computed(function () {
					return .01 * (parseFloat(this.immediateKopInputed()) || 0) + (parseFloat(this.immediateRubleInputed()) || 0)
				}, this);
			this.inn = i.observable().extend({
					pattern : {
						message : "ИНН состоит только из цифр",
						params : "^[0-9_]+$"
					},
					minLength : {
						message : "ИНН от 10 до 12 символов",
						params : 10
					},
					maxLength : {
						message : "ИНН от 10 до 12 символов",
						params : 12
					}
				}).isModified(!1);
			this.ticketValidation = i.validatedObservable({
					contractNumber : this.contractNumber,
					immediateRoubleInputed : this.immediateRubleInputed,
					immediateKopInputed : this.immediateKopInputed,
					inn : this.inn
				});
			this.Captcha = i.observable("").extend({
					required : {
						message : "Символы с картинки",
						params : !0,
						onlyIf : function () {
							return !f.isFttb
						}
					}
				});
			this.payCardValidation = i.validatedObservable({
					activationCode : this.activationCode,
					mobileCtn : this.MobileCtn.CompiledCtn,
					captcha : this.Captcha
				});
			this.payCardAwaiter.Status.subscribe(function (n) {
				n > 1 && c.pushAnalitics({
					eventCategory : n == 2 ? e.Messages.AnalyticSuccess : e.Messages.AnalyticError,
					eventAction : "payBeelineCard",
					eventContext : f.payCardAwaiter.ActiveMessage(),
					eventValue : null
				})
			})
		}
		return n.prototype.ticketPayment = function () {
			var n = window.open(r.apiBaseUrl + "/Ticket/Index?" + $.param({
						Ctn : this.ctn(),
						ContractNumber : this.contractNumber(),
						FirstName : this.firstName(),
						LastName : this.lastName(),
						PaternalName : this.paternalName(),
						Inn : this.inn(),
						PaymentDate : moment(this.paymentDate()).format("MM/DD/YY"),
						Rub : this.immediateRubleInputed(),
						Kop : this.immediateKopInputed()
					}), "Квитанция", "width=800,height=600");
			c.pushAnalitics({
				eventCategory : e.Messages.AnalyticSuccess,
				eventAction : "invoice",
				eventContext : "Сформирована квитанция",
				eventValue : this.immediateRubleInputed()
			});
			n.focus()
		},
		n.prototype.payCardPayment = function () {
			var n = this;
			if (this.isFttb) {
				this.doCardPayment();
				return
			}
			this.HasCaptchaError(!1);
			u.Ajax("/api/Captcha/Get", {
				type : "GET",
				data : {
					text : this.Captcha()
				}
			}).done(function (t) {
				t ? n.doCardPayment() : (n.HasCaptchaError(!0), n.ReloadCaptcha())
			}).fail(function () {
				n.payCardAwaiter.Status(3)
			})
		},
		n.prototype.doCardPayment = function () {
			var n = this;
			this.payCardAwaiter.Await(u.Ajax("/api/URCCard/ActivateURC", {
					type : "POST",
					data : {
						ActivationCode : this.activationCode(),
						MobileCtn : this.MobileCtn.CompiledCtn()
					}
				})).then(function () {}, function (t) {
				t && t.Comments && t.Comments.length > 0 && n.payCardAwaiter.ActiveMessage(t.Comments[0].replace(";", ""))
			})
		},
		n.prototype.toTicketPayment = function () {
			if (r.SharedData.UserType == 0) {
				f.PopupManager.showUnauthorizedPopup(0, h.Messages.UnauthorizedPaymentTitle.replace("{0}", ""));
				return
			}
			if (this.IsWrongUserType) {
				f.PopupManager.showUnauthorizedPopup(3);
				return
			}
			this.activeStage("ticketPayment")
		},
		n.prototype.toPayCardPayment = function () {
			if (r.SharedData.UserType == 0) {
				f.PopupManager.showUnauthorizedPopup(0, h.Messages.UnauthorizedCardPaymentTitle.replace("{0}", ""));
				return
			}
			if (this.IsWrongUserType) {
				f.PopupManager.showUnauthorizedPopup(3);
				return
			}
			this.payCardAwaiter.Status(0);
			this.activeStage("payCardPayment")
		},
		n.prototype.toCashWidget = function () {
			this.activationCode("");
			this.MobileCtn.MasksBound(!1);
			this.MobileCtn.CtnPrefix(this.ctnPrefixInitial);
			this.MobileCtn.CtnNumber(this.ctnNumberInitial);
			this.MobileCtn.ResetModified();
			this.MobileCtn.MasksBound(!0);
			this.ReloadCaptcha();
			this.masksBound(!1);
			this.contractNumber(this.contractNumberInitial);
			this.immediateRubleInputed(null);
			this.immediateKopInputed(null);
			this.lastName(this.lastNameInitial);
			this.firstName(this.firstNameInitial);
			this.paternalName(this.paternalNameInitial);
			this.inn(null);
			this.masksBound(!0);
			this.activeStage("cashWidget")
		},
		n.prototype.ReloadCaptcha = function () {
			this.CaptchaPath(this.CaptchaBasePath + "&fake=" + (new Date).getTime());
			this.Captcha("")
		},
		n
	}
	();
	t.CashPaymentWidget = l
});
AltLanPay.define("Widgets/PromisedPayment/FttbPromisedPaymentWidget", ["require", "exports", "knockout", "Services/Settings", "Services/HttpClient", "Parts/Awaiters", "Services/PopupManager", "Messages", "Services/AnalyticService"], function (n, t, i, r, u, f, e, o, s) {
	var h = function () {
		function n(n) {
			var t = this;
			this.PromisedDaysCommon = 7;
			this.PromisedDaysActivation = 1;
			this.CheckedConditions = i.observable(!1);
			this.TooltipVisible = i.observable(!1);
			this.PromisedPaymentAwaiter = new f.SimpleAwaiter({
					ProcessingMessage : "Процесс может занять несколько минут",
					SuccessMessage : "Получен доверительный платеж<br />Баланс пополнен",
					FailMessage : "Не удалось взять доверительный платеж. Попробуйте повторить позднее",
					RequestTimeoutMessage : "Не удалось получить результат операции. В случае успеха, услуга будет доступна через некоторое время."
				});
			this.PromisedPaymentRequestAwaiter = new f.RequestAwaiter({});
			this.IsAuthorized = r.SharedData.UserType != 0;
			this.Ctn = r.SharedData.Ctn;
			this.FinInfo = n.FinInfo || {};
			this.IsFirstLogon = n.IsFirstLogon;
			this.PromisedPaymentInfo = i.observable(n.PromisedPaymentInfo);
			this.PromisedPaymentDays = i.computed(function () {
					return t.FinInfo.Status == 1 && t.IsFirstLogon ? t.PromisedDaysActivation : t.PromisedDaysCommon
				});
			this.ExpectedSum = (this.FinInfo.NextBCSum || 0) - (this.FinInfo.Balance || 0);
			this.ExpectedEndDate = moment(r.SharedData.CurrentClientServerTimeStamp).add(this.PromisedPaymentDays(), "days").toISOString();
			this.PromisedPaymentAwaiter.Status.subscribe(function (n) {
				n > 1 && s.pushAnalitics({
					eventCategory : n == 2 ? o.Messages.AnalyticSuccess : o.Messages.AnalyticError,
					eventAction : "payTrust",
					eventContext : t.PromisedPaymentAwaiter.ActiveMessage(),
					eventValue : null
				})
			})
		}
		return n.prototype.ConnectPromisedPayment = function () {
			var n = this;
			if (r.SharedData.UserType != 2) {
				e.PopupManager.showUnauthorizedPopup(1, o.Messages.UnauthorizedPromisedPaymentTitle);
				return
			}
			this.CheckedConditions() && (this.PromisedPaymentAwaiter.Status(1), this.PromisedPaymentRequestAwaiter.Await(u.Ajax("/api/PromisedPayment/AddFttb", {
						type : "POST"
					})).then(function () {
					u.Get("/api/PromisedPayment/GetFttb").then(function (t) {
						t == null ? n.PromisedPaymentAwaiter.Status(4) : (t.PromisedPaymentStatus = n.PromisedPaymentInfo().PromisedPaymentStatus, n.PromisedPaymentInfo(t), n.PromisedPaymentAwaiter.Status(2))
					}, function () {
						return n.PromisedPaymentAwaiter.Status(4)
					})
				}, function () {
					n.PromisedPaymentAwaiter.Status(n.PromisedPaymentRequestAwaiter.Status())
				}))
		},
		n
	}
	();
	t.PromisedPaymentWidget = h
});
AltLanPay.define("Widgets/PayContentWidget", ["require", "exports"], function (n, t) {
	var i = function () {
		function n(n) {
			this.Data = n
		}
		return n
	}
	();
	t.PayContentWidget = i
});
__extends = this.__extends || function (n, t) {
	function r() {
		this.constructor = n
	}
	for (var i in t)
		t.hasOwnProperty(i) && (n[i] = t[i]);
	r.prototype = t.prototype;
	n.prototype = new r
};
AltLanPay.define("Boards/Profile/FttbBoard", ["require", "exports", "Boards/BaseBoard", "Widgets/ImmediatePaymentWidget", "Widgets/CashPaymentWidget", "Widgets/AutoPayment/FttbManageAutoPaymentWidget", "Widgets/PromisedPayment/FttbPromisedPaymentWidget", "Widgets/PayContentWidget"], function (n, t, i, r, u, f, e, o) {
	var s = function (n) {
		function t(t, i) {
			n.call(this, t);
			this.AccessibilityType = t.SharedData.AccessibilityType ? t.SharedData.AccessibilityType : 0;
			this.ImmediatePaymentWidget = new r.ImmediatePaymentWidget(t.ImmediatePaymentWidget, 2);
			this.CashPaymentWidget = new u.CashPaymentWidget(t.CashPaymentWidget, 2, this.AccessibilityType);
			this.ManageAutoPaymentWidget = new f.FttbManageAutoPaymentWidget(t.ManageAutoPaymentWidget);
			this.PromisedPaymentWidget = new e.PromisedPaymentWidget(t.PromisedPaymentWidget);
			this.ContentWidgets = $.map(t.ContentWidgets, function (n) {
					return new o.PayContentWidget(n)
				});
			this.AfterBound = function () {
				if (i && i.focusBlock) {
					var n = $(".scroll-" + i.focusBlock);
					n.length && $("html, body").animate({
						scrollTop : n.offset().top + "px"
					}, "fast")
				}
			}
		}
		return __extends(t, n),
		t
	}
	(i.BaseBoard);
	t.Board = s
});
AltLanPay.define("Widgets/PromisedPayment/MobilePromisedPaymentWidget", ["require", "exports", "knockout", "Services/Settings", "Services/HttpClient", "Parts/Awaiters", "Services/PopupManager", "Messages", "Services/AnalyticService"], function (n, t, i, r, u, f, e, o, s) {
	var h = function () {
		function n(n) {
			var t = this;
			this.PromisedPaymentDays = 3;
			this.CheckedConditions = i.observable(!1);
			this.PromisedPaymentAwaiter = new f.SimpleAwaiter({
					ProcessingMessage : "Процесс может занять несколько минут",
					SuccessMessage : "Получен доверительный платеж<br />Баланс пополнен",
					FailMessage : "Не удалось взять доверительный платеж. Попробуйте повторить позднее",
					RequestTimeoutMessage : "Не удалось получить результат операции. В случае успеха, услуга будет подключена через некоторое время."
				});
			this.PromisedPaymentRequestAwaiter = new f.RequestAwaiter({});
			this.IsAuthorized = r.SharedData.UserType != 0;
			this.Ctn = r.SharedData.Ctn;
			this.PromisedPaymentInfo = i.observable(n.PromisedPaymentInfo);
			this.CtnStatus = n.CtnStatus;
			this.PromisedPaymentStatus = i.observable(n.PromisedPaymentInfo.PromisedPaymentStatus);
			this.Currency = n.PromisedPaymentInfo.Currency == "USD" ? " $" : " руб.";
			this.PromisedPaymentAwaiter.Status.subscribe(function (n) {
				n > 1 && s.pushAnalitics({
					eventCategory : n == 2 ? o.Messages.AnalyticSuccess : o.Messages.AnalyticError,
					eventAction : "payTrust",
					eventContext : t.PromisedPaymentAwaiter.ActiveMessage(),
					eventValue : null
				})
			})
		}
		return n.prototype.ConnectPromisedPayment = function () {
			var n = this;
			if (r.SharedData.UserType != 1) {
				e.PopupManager.showUnauthorizedPopup(1, o.Messages.UnauthorizedPromisedPaymentTitle);
				return
			}
			this.PromisedPaymentAwaiter.Status(1);
			this.PromisedPaymentRequestAwaiter.Await(u.Ajax("/api/PromisedPayment/AddMobile", {
					type : "POST"
				})).then(function () {
				var t = window.setInterval(function () {
						u.Get("/api/PromisedPayment/GetMobile").then(function (r) {
							r != null && r.PromisedPaymentStatus == 3 && r.PromisedPaymentSum > 0 && (window.clearInterval(t), window.clearTimeout(i), r.PromisedPaymentStatus = n.PromisedPaymentInfo().PromisedPaymentStatus, n.PromisedPaymentInfo(r), n.PromisedPaymentAwaiter.Status(2))
						})
					}, 1e3),
				i = window.setTimeout(function () {
						window.clearInterval(t);
						n.PromisedPaymentAwaiter.Status(4)
					}, 25e3)
			}, function () {
				n.PromisedPaymentAwaiter.Status(n.PromisedPaymentRequestAwaiter.Status());
				n.PromisedPaymentAwaiter.ActiveMessage(n.PromisedPaymentRequestAwaiter.ActiveMessage())
			})
		},
		n.prototype.TryAuthorize = function () {
			e.PopupManager.showUnauthorizedPopup(3)
		},
		n
	}
	();
	t.PromisedPaymentWidget = h
});
__extends = this.__extends || function (n, t) {
	function r() {
		this.constructor = n
	}
	for (var i in t)
		t.hasOwnProperty(i) && (n[i] = t[i]);
	r.prototype = t.prototype;
	n.prototype = new r
};
AltLanPay.define("Boards/Profile/MobileBoard", ["require", "exports", "Boards/BaseBoard", "Widgets/ImmediatePaymentWidget", "Widgets/CashPaymentWidget", "Widgets/AutoPayment/MobileManageAutoPaymentWidget", "Widgets/PromisedPayment/MobilePromisedPaymentWidget", "Widgets/PayContentWidget"], function (n, t, i, r, u, f, e, o) {
	var s = function (n) {
		function t(t, i) {
			n.call(this, t);
			this.ImmediatePaymentWidget = new r.ImmediatePaymentWidget(t.ImmediatePaymentWidget, 1);
			this.CashPaymentWidget = new u.CashPaymentWidget(t.CashPaymentWidget, 1);
			this.ManageAutoPaymentWidget = new f.MobileManageAutoPaymentWidget(t.ManageAutoPaymentWidget);
			this.PromisedPaymentWidget = new e.PromisedPaymentWidget(t.PromisedPaymentWidget);
			this.ContentWidgets = $.map(t.ContentWidgets, function (n) {
					return new o.PayContentWidget(n)
				});
			this.AfterBound = function () {
				if (i && i.focusBlock) {
					var n = $(".scroll-" + i.focusBlock);
					n.length && $("html, body").animate({
						scrollTop : n.offset().top + "px"
					}, "fast")
				}
			}
		}
		return __extends(t, n),
		t
	}
	(i.BaseBoard);
	t.Board = s
});
__extends = this.__extends || function (n, t) {
	function r() {
		this.constructor = n
	}
	for (var i in t)
		t.hasOwnProperty(i) && (n[i] = t[i]);
	r.prototype = t.prototype;
	n.prototype = new r
};
AltLanPay.define("Boards/Profile/WifiBoard", ["require", "exports", "Boards/BaseBoard", "Widgets/PayContentWidget"], function (n, t, i, r) {
	var u = function (n) {
		function t(t) {
			n.call(this, t);
			this.ContentWidgets = $.map(t.ContentWidgets, function (n) {
					return new r.PayContentWidget(n)
				})
		}
		return __extends(t, n),
		t
	}
	(i.BaseBoard);
	t.Board = u
});
__extends = this.__extends || function (n, t) {
	function r() {
		this.constructor = n
	}
	for (var i in t)
		t.hasOwnProperty(i) && (n[i] = t[i]);
	r.prototype = t.prototype;
	n.prototype = new r
};
AltLanPay.define("Boards/Profile/LiteBoard", ["require", "exports", "Boards/BaseBoard", "Widgets/ImmediatePaymentWidget", "Widgets/PayContentWidget"], function (n, t, i, r, u) {
	var f = function (n) {
		function t(t) {
			n.call(this, t);
			this.ImmediatePaymentWidget = new r.ImmediatePaymentWidget(t.ImmediatePaymentWidget, 2, "086");
			this.ContentWidgets = $.map(t.ContentWidgets, function (n) {
					return new u.PayContentWidget(n)
				})
		}
		return __extends(t, n),
		t
	}
	(i.BaseBoard);
	t.Board = f
});
__extends = this.__extends || function (n, t) {
	function r() {
		this.constructor = n
	}
	for (var i in t)
		t.hasOwnProperty(i) && (n[i] = t[i]);
	r.prototype = t.prototype;
	n.prototype = new r
};
AltLanPay.define("Boards/Profile/PhoneBoard", ["require", "exports", "Boards/BaseBoard", "Widgets/ImmediatePaymentWidget", "Widgets/PayContentWidget"], function (n, t, i, r, u) {
	var f = function (n) {
		function t(t) {
			n.call(this, t);
			this.ImmediatePaymentWidget = new r.ImmediatePaymentWidget(t.ImmediatePaymentWidget, 2, "086");
			this.ContentWidgets = $.map(t.ContentWidgets, function (n) {
					return new u.PayContentWidget(n)
				})
		}
		return __extends(t, n),
		t
	}
	(i.BaseBoard);
	t.Board = f
});
AltLanPay.define("Popups/SharedPopupModel", ["require", "exports", "knockout", "Messages", "Services/Settings"], function (n, t, i, r, u) {
	var f = function () {
		function n(n) {
			var e = this,
			f,
			t;
			this.error = i.observable("");
			this.errorVisible = i.computed(function () {
					return e.error().length > 0
				});
			f = {
				text : "Попап",
				error : "",
				okText : r.Messages.MessageBoxOk,
				cancelText : r.Messages.MessageBoxCancel,
				cancelEnabled : !0,
				errorVisible : !1
			};
			t = $.extend(f, n);
			this.apiBaseUrl = u.apiBaseUrl;
			this.okText = i.observable(t.okText);
			this.cancelText = i.observable(t.cancelText);
			this.message = i.observable(t.message);
			this.title = i.observable(t.title);
			this.cancelEnabled = i.observable(t.cancelEnabled);
			this.error(t.error)
		}
		return n
	}
	();
	t.SharedPopupModel = f
});
AltLanPay.define("Popups/PayGenericPopup", ["require", "exports", "Popups/SharedPopupModel"], function (n, t, i) {
	var r = function () {
		function n(n) {
			var t = this;
			return this.width = 420,
			this.shared = new i.SharedPopupModel(n),
			this.ok = function () {
				return t.shared.submitFeedback(!0)
			},
			this.cancel = function () {
				return t.shared.submitFeedback(!1)
			},
			this
		}
		return n.prototype.ok = function () {},
		n.prototype.cancel = function () {},
		n
	}
	();
	t.Popup = r
});
__extends = this.__extends || function (n, t) {
	function r() {
		this.constructor = n
	}
	for (var i in t)
		t.hasOwnProperty(i) && (n[i] = t[i]);
	r.prototype = t.prototype;
	n.prototype = new r
};
AltLanPay.define("Popups/CancelSecretKeyPopup", ["require", "exports", "knockout", "Popups/PayGenericPopup", "Services/HttpClient", "Parts/Awaiters", "Messages"], function (n, t, i, r, u, f, e) {
	var o = function (n) {
		function t(t) {
			var r = this;
			n.call(this, t);
			this.width = 520;
			this.SecretCodeAwaiter = new f.DeferredAwaiter({});
			this.SecretKey = i.observable("").extend({
					required : {
						message : "Введите секретный код",
						params : !0
					},
					pattern : {
						message : "Секретный код состоит из 4 цифр",
						params : "^[0-9]{4}$"
					}
				}).isModified(!1);
			this.ok = function () {
				if (!r.SecretKey.isValid()) {
					r.SecretKey.isModified(!0);
					return
				}
				QA.Beeline.Popup.showLoading();
				u.Ajax("/api/SecretKey/CancelSecretKey", {
					type : "POST",
					headers : {
						"x-mtopup-secretKey" : r.SecretKey()
					}
				}).then(function (n) {
					QA.Beeline.Popup.hideLoading();
					n ? r.shared.submitFeedback(!0, r.SecretKey()) : (r.SecretCodeAwaiter.Status(3), r.SecretCodeAwaiter.ActiveMessage("Неверный секретный код"))
				}, function (n) {
					QA.Beeline.Popup.hideLoading();
					r.SecretCodeAwaiter.Status(3);
					r.SecretCodeAwaiter.ActiveMessage(e.Messages.GetMessageFromErrorData(n))
				})
			}
		}
		return __extends(t, n),
		t
	}
	(r.Popup);
	t.Popup = o
});
__extends = this.__extends || function (n, t) {
	function r() {
		this.constructor = n
	}
	for (var i in t)
		t.hasOwnProperty(i) && (n[i] = t[i]);
	r.prototype = t.prototype;
	n.prototype = new r
};
AltLanPay.define("Popups/EnsureSecretKeyPopup", ["require", "exports", "knockout", "Popups/PayGenericPopup", "Services/HttpClient", "Parts/Awaiters", "Messages"], function (n, t, i, r, u, f, e) {
	var o = function (n) {
		function t(t) {
			var r = this;
			n.call(this, t);
			this.width = 520;
			this.SecretCodeAwaiter = new f.DeferredAwaiter({});
			this.SecretKey = i.observable("").extend({
					required : {
						message : "Введите секретный код",
						params : !0
					},
					pattern : {
						message : "Секретный код состоит из 4 цифр",
						params : "^[0-9]{4}$"
					}
				}).isModified(!1);
			this.ok = function () {
				if (!r.SecretKey.isValid()) {
					r.SecretKey.isModified(!0);
					return
				}
				QA.Beeline.Popup.showLoading();
				u.Ajax("/api/SecretKey/Validate", {
					type : "POST",
					headers : {
						"x-mtopup-secretKey" : r.SecretKey()
					}
				}).then(function (n) {
					QA.Beeline.Popup.hideLoading();
					n ? r.shared.submitFeedback(!0, r.SecretKey()) : (r.SecretCodeAwaiter.Status(3), r.SecretCodeAwaiter.ActiveMessage("Неверный секретный код"))
				}, function (n) {
					QA.Beeline.Popup.hideLoading();
					r.SecretCodeAwaiter.Status(3);
					r.SecretCodeAwaiter.ActiveMessage(e.Messages.GetMessageFromErrorData(n))
				})
			}
		}
		return __extends(t, n),
		t
	}
	(r.Popup);
	t.Popup = o
});
__extends = this.__extends || function (n, t) {
	function r() {
		this.constructor = n
	}
	for (var i in t)
		t.hasOwnProperty(i) && (n[i] = t[i]);
	r.prototype = t.prototype;
	n.prototype = new r
};
AltLanPay.define("Popups/NotificationPhonePopup", ["require", "exports", "knockout", "Services/HttpClient", "Messages", "Popups/PayGenericPopup", "Parts/MobileCtn"], function (n, t, i, r, u, f, e) {
	var o = function (n) {
		function t(t) {
			var f = this;
			return n.call(this, t),
			this.MobileCtn = new e.MobileCtn(t.ctn, i.computed(function () {
						return !0
					})),
			this.ok = function () {
				if (!f.MobileCtn.CompiledCtn.isValid()) {
					f.MobileCtn.CompiledCtn.isModified(!0);
					return
				}
				f.MobileCtn.CompiledCtn() == f.ctn ? f.shared.submitFeedback(!0, f.MobileCtn.CompiledCtn()) : (QA.Beeline.Popup.showLoading(), r.Ajax("/api/Notification/Put/?phone=" + f.MobileCtn.CompiledCtn(), {
						type : "POST"
					}).then(function () {
						QA.Beeline.Popup.hideLoading();
						f.shared.submitFeedback(!0, f.MobileCtn.CompiledCtn())
					}, function (n) {
						QA.Beeline.Popup.hideLoading();
						f.shared.error(u.Messages.GetMessageFromErrorData(n))
					}))
			},
			this
		}
		return __extends(t, n),
		t
	}
	(f.Popup);
	t.Popup = o
});
__extends = this.__extends || function (n, t) {
	function r() {
		this.constructor = n
	}
	for (var i in t)
		t.hasOwnProperty(i) && (n[i] = t[i]);
	r.prototype = t.prototype;
	n.prototype = new r
};
AltLanPay.define("Popups/UnauthorizedPopup", ["require", "exports", "Popups/PayGenericPopup", "Services/Settings"], function (n, t, i, r) {
	var u = function (n) {
		function t(t) {
			return n.call(this, t),
			this.MyBeelineUrl = r.SharedData.SettingsInfo.AuthUrl,
			this.MobileApplUrl = r.SharedData.SettingsInfo.AuthUrl,
			this.Style = t.style,
			this.ok = function () {
				var n = r.SharedData.SettingsInfo.AuthUrl,
				i = function (n) {
					var t = document.createElement("a");
					return t.href = n,
					t
				},
				u = i(r.SharedData.SettingsInfo.MainUrl),
				f = u.pathname + (t.redirectUrl || window.location.hash),
				e = n.replace("{0}", encodeURIComponent(f));
				window.location.href = e
			},
			this
		}
		return __extends(t, n),
		t
	}
	(i.Popup);
	t.Popup = u
});
__extends = this.__extends || function (n, t) {
	function r() {
		this.constructor = n
	}
	for (var i in t)
		t.hasOwnProperty(i) && (n[i] = t[i]);
	r.prototype = t.prototype;
	n.prototype = new r
};
AltLanPay.define("Popups/ChangeUserPopup", ["require", "exports", "Popups/PayGenericPopup", "Services/Settings"], function (n, t, i, r) {
	var u = function (n) {
		function t(t) {
			return n.call(this, t),
			this.Message2 = t.message2,
			this.Message3 = t.message3,
			this.ok = function () {
				var n = r.SharedData.SettingsInfo.AuthUrl,
				i = function (n) {
					var t = document.createElement("a");
					return t.href = n,
					t
				},
				u = i(r.SharedData.SettingsInfo.MainUrl),
				f = u.pathname + (t.redirectUrl || window.location.hash),
				e = n.replace("{0}", encodeURIComponent(f)),
				o = r.SharedData.SettingsInfo.LogoutUrl,
				s = o.replace("{0}", encodeURIComponent(e));
				window.location.href = s
			},
			this
		}
		return __extends(t, n),
		t
	}
	(i.Popup);
	t.Popup = u
});
AltLanPay.define("bindings", ["require", "exports", "knockout", "Services/RedirectService", "knockout.validation"], function (n, t, i, r) {
	var s = this,
	h = function (n, t) {
		var u,
		o;
		try {
			console.log("updating date...");
			u = !1;
			try {
				t()instanceof Object && t().data && (u = !0)
			} catch (s) {}

			var f = f = u ? t().data : t()(),
			r = i.utils.unwrapObservable(f),
			e = $(n);
			String(r).indexOf("/Date(") == 0 && (r = new Date(parseInt(r.replace(/\/Date\((.*?)\)\//gi, "$1"))));
			o = e.altbeecalendar("setValue");
			r - o != 0 && e.altbeecalendar("setValue", r)
		} catch (s) {}

	},
	f,
	o,
	u;
	i.bindingHandlers.datepicker = {
		init : function (n, t, r) {
			var h,
			e,
			o,
			s,
			c;
			try {
				var l = r().datepickerOptions || {},
				f = $(n),
				u = !1;
				try {
					t()instanceof Object && t().data && (u = !0)
				} catch (a) {}

				if (h = function (n, i) {
					try {
						i.value.getMonth ? u ? t().data(i.value) : t()(i.value) : u ? t().data(Date.parse(i.value)) : t()(Date.parse(i.value))
					} catch (r) {}

				}, u)
					try {
						t().maxDate && (e = t().maxDate.toString().split(".").reverse(), e[1] = e[1] - 1);
						t().minDate && (o = t().minDate.toString().split(".").reverse(), o[1] = o[1] - 1)
					} catch (a) {}

				c = u && t().time ? t().time : !1;
				s = u ? t().valueToDisplay ? t().valueToDisplay : t().data() : t()();
				f.altbeecalendar({
					change : h,
					value : s,
					limit : {
						max : e,
						min : o
					},
					showTime : c,
					defaultValue : "01.01.2000"
				});
				i.utils.registerEventHandler(n, "change", function () {
					var n = u ? s = t().data : n = t()();
					n(f.val())
				});
				t().data.update = function (n) {
					this(n);
					$(f.context).val(moment(n).format("DD.MM.YYYY"))
				};
				i.utils.domNodeDisposal.addDisposeCallback(n, function () {
					f.altbeecalendar("destroy")
				})
			} catch (a) {}

		},
		update : h
	};
	f = function (n, t, i, r) {
		n.prop("disabled") || (t.parent().siblings("li").find("span").removeClass("checked"), t.parent().parent().siblings("li").find("div").find("span").removeClass("checked"), t.addClass("checked"), r == "true" && (r = !0), r == "false" && (r = !1), i()(r))
	};
	i.bindingHandlers.customChecked = {
		init : function (n, t) {
			var r = $(n).parent(),
			u = i.utils.unwrapObservable(t());
			u && r.addClass("checked");
			r.click(function () {
				t()(!t()())
			});
			r.next().click(function () {
				t()(!t()())
			})
		},
		update : function (n, t) {
			var u = i.utils.unwrapObservable(t()),
			r = $(n).parent();
			u ? r.addClass("checked") : r.removeClass("checked")
		}
	};
	i.bindingHandlers.customRadioChecked = {
		init : function (n, t) {
			var r = $(n).parent(),
			u = $(n).val(),
			e = i.utils.unwrapObservable(t());
			(u == e || u != null && e != null && u.toString() == e.toString()) && f($(n), r, t, e);
			r.click(function () {
				$(n).hasClass("disabled") || f($(n), r, t, u)
			});
			r.next().click(function () {
				$(n).hasClass("disabled") || f($(n), r, t, u)
			})
		}
	};
	i.bindingHandlers.foldingClicked = {
		init : function (n, t) {
			var r = i.utils.unwrapObservable(t());
			r ? $(n).show() : $(n).hide()
		},
		update : function (n, t) {
			var u = i.utils.unwrapObservable(t()),
			r = 400;
			u == 1 ? $(n).slideDown(r) : $(n).slideUp(r)
		}
	};
	i.bindingHandlers.mask = {
		init : function (n, t) {
			var r = i.utils.unwrapObservable(t());
			if (!$(n).hasClass("masked"))
				try {
					$(n).mask(r).addClass("masked");
					$(n).trigger("change")
				} catch (u) {}

		},
		update : function () {}

	};
	i.bindingHandlers.maskBound = {
		init : function () {},
		update : function (n, t, r) {
			var u = i.utils.unwrapObservable(t()),
			f = i.utils.unwrapObservable(r().mask);
			if (u && !$(n).hasClass("masked"))
				try {
					$(n).mask(f).addClass("masked");
					$(n).trigger("change")
				} catch (e) {}

			if (!u && $(n).hasClass("masked"))
				try {
					$(n).unmask().removeClass("masked");
					$(n).trigger("change")
				} catch (e) {}

		}
	};
	i.bindingHandlers.dateDisplay = {
		init : function (n, t, r) {
			var u = i.utils.unwrapObservable(t()),
			f,
			e;
			u && (f = r().dateFormat || "DD.MM.YYYY", e = moment.utc(new Date(u)).format(f), $(n).text(e))
		},
		update : function (n, t, r) {
			var u = i.utils.unwrapObservable(t()),
			f,
			e;
			u && (f = r().dateFormat || "DD.MM.YYYY", e = moment.utc(new Date(u)).format(f), $(n).text(e))
		}
	};
	i.bindingHandlers.ctnDisplay = {
		init : function (n, t) {
			var r = i.utils.unwrapObservable(t()),
			u;
			r && (u = r.indexOf("FTTB/") == -1, r = r.replace("FTTB/", ""), r[0] == "0" && (u = !1), r.match(/[0-9]{10}/g) && u && (r = "+7 " + r.match(/[0-9]{4,4}$|[0-9]{3,3}/g).join("-")), $(n).text(r))
		},
		update : function (n, t) {
			var r = i.utils.unwrapObservable(t()),
			u;
			r && (u = r.indexOf("FTTB/") == -1, r = r.replace("FTTB/", ""), r[0] == "0" && (u = !1), r.match(/[0-9]{10}/g) && u && (r = "+7 " + r.match(/[0-9]{4,4}$|[0-9]{3,3}/g).join("-")), $(n).text(r))
		}
	};
	i.bindingHandlers.phoneDisplay = {
		init : function (n, t) {
			var r = i.utils.unwrapObservable(t());
			r ? $(n).text("+7 " + r.substr(0, 3) + " " + r.substr(3, 3) + "-" + r.substr(6, 2) + "-" + r.substr(8, 2)) : $(n).text("")
		},
		update : function (n, t) {
			var r = i.utils.unwrapObservable(t());
			r ? $(n).text("+7 " + r.substr(0, 3) + " " + r.substr(3, 3) + "-" + r.substr(6, 2) + "-" + r.substr(8, 2)) : $(n).text("")
		}
	};
	i.bindingHandlers.dateFormat = {
		init : function () {}

	};
	i.validation.init({
		errorClass : "invalid",
		decorateElement : !0,
		insertMessages : !1,
		registerExtenders : !0,
		errorElementClass : "invalid",
		errorMessageClass : "form-tip",
		allowHtmlMessages : !0
	});
	i.bindingHandlers.customDropDown = {
		init : function (n) {
			$(n).parent().find(".dropdown-list-content").mCustomScrollbar({
				scrollInertia : 50,
				advanced : {
					updateOnContentResize : !0
				}
			});
			$(n).click(function (t) {
				var r = $(this).parent().find(".drop"),
				e = $(this).outerWidth() + 20,
				f,
				u;
				t.stopPropagation();
				r.is(":hidden") ? ($("html").find(".drop").not(this).slideUp("fast"), r.slideDown("fast"), r.width(e), $(this).addClass("active"), $(".drop").find("li").click(function () {
						var n = $(this).html();
						$(this).parent().parent().find(".slct").removeClass("active").html(n);
						r.slideUp("fast")
					})) : ($(this).removeClass("active"), r.slideUp("fast"));
				$(".dropdown-inner").click(function (t) {
					var u = r.find(".mCSB_scrollTools").find("*");
					i.utils.arrayIndexOf(u, t.target) == -1 && ($(n).removeClass("active"), r.slideUp("fast"), r.parents(".form-select").css("z-index", ""))
				});
				f = $(this).text();
				u = 0;
				$(this).parent().find("li").each(function (n) {
					$($(this).find("span").get(0)).text() == f && (u = n)
				});
				r.find(".mCSB_container").css("top", -u * 40 + "px")
			});
			$(document).click(function (t) {
				var r = $(n).parent().find(".drop"),
				u = r.find("*");
				t.target !== r[0] && i.utils.arrayIndexOf(u, t.target) == -1 && (r.is(":hidden") || ($(n).removeClass("active"), r.slideUp("fast"), r.parents(".form-select").css("z-index", "")))
			})
		}
	};
	i.bindingHandlers.password = {
		init : function (n, t) {
			var r = i.utils.unwrapObservable(t());
			$(n).find(".pass-icon").click(function () {
				var t = $(n).find("input").attr("type");
				t == "password" ? $(n).find("input").attr("type", "text") : $(n).find("input").attr("type", "password")
			})
		}
	};
	i.bindingHandlers.customSlider = {
		init : function (n, t, r) {
			var f = $(n).parent(),
			e = r().sliderType;
			f.click(function () {
				var s = i.utils.unwrapObservable(r().readonly);
				s || (o(t, e), u($(n), f, t, e))
			});
			f.next().click(function () {
				var s = i.utils.unwrapObservable(r().readonly);
				s || (o(t, e), u($(n), f, t, e))
			});
			u($(n), f, t, e)
		},
		update : function (n, t, i) {
			var r = $(n).parent(),
			f = i().sliderType;
			u($(n), r, t, f)
		}
	};
	o = function (n, t) {
		if (t == "binary") {
			n()(!n()());
			return
		}
		if (t == "customActivation") {
			n()() == 0 ? n()(2) : n()(0);
			return
		}
		n()() == 1 ? n()(3) : n()() == 3 ? n()(1) : n()() == 0 ? n()(2) : n()() == 2 && n()(0)
	};
	u = function (n, t, r) {
		var u = i.utils.unwrapObservable(r());
		u == 0 ? (t.removeClass("checked"), t.removeClass("activation"), t.removeClass("switch-off"), n.prev(".dotted-checkbox-slider").hide()) : u == 1 ? (t.addClass("checked"), t.removeClass("activation"), t.removeClass("switch-off"), n.prev(".dotted-checkbox-slider").hide()) : u == 2 ? (t.addClass("checked"), t.removeClass("activation"), t.addClass("switch-off"), n.prev(".dotted-checkbox-slider").show()) : u == 3 && (t.addClass("checked"), t.addClass("activation"), t.removeClass("switch-off"), n.prev(".dotted-checkbox-slider").show())
	};
	i.bindingHandlers.mac = {
		init : function (n, t) {
			var r = i.utils.unwrapObservable(t()),
			u;
			r && (u = r.match(/.{1,2}/g).join(":"), $(n).text(u))
		}
	};
	i.bindingHandlers.contentLink = {
		update : function (n, t) {
			i.bindingHandlers.attr.update(n, function () {
				var r = i.utils.unwrapObservable(t()),
				n;
				if (r == "AuthLink") {
					var u = AltLan.Pay.Settings.SharedData.SettingsInfo.AuthUrl,
					f = function (n) {
						var t = document.createElement("a");
						return t.href = n,
						t
					},
					e = f(AltLan.Pay.Settings.SharedData.SettingsInfo.MainUrl),
					o = e.pathname + window.location.hash,
					s = u.replace("{0}", encodeURIComponent(o));
					return {
						href : s
					}
				}
				return n = AltLan.Pay.Settings.RedirectLinks.filter(function (n) {
						return n.Key == r
					}),
				n.length ? {
					href : n[0].Link
				}
				 : {
					href : ""
				}
			})
		}
	};
	i.bindingHandlers.documentLink = {
		update : function (n, t) {
			i.bindingHandlers.attr.update(n, function () {
				var u = i.utils.unwrapObservable(t()),
				r = AltLan.Pay.Settings.QpDocuments.filter(function (n) {
						return n.Key == u
					});
				return $(n).click(function (n) {
					n.stopPropagation()
				}),
				r.length ? {
					href : AltLan.Pay.Settings.SharedData.SettingsInfo.UploadFolderUrl + "344/" + r[0].Content
				}
				 : {
					href : ""
				}
			})
		}
	};
	i.bindingHandlers.href = {
		update : function (n, t) {
			i.bindingHandlers.attr.update(n, function () {
				var n = i.utils.unwrapObservable(t());
				return {
					href : AltLan.Pay.Settings.apiBaseUrl + "/" + n
				}
			})
		}
	};
	i.bindingHandlers.src = {
		update : function (n, t) {
			i.bindingHandlers.attr.update(n, function () {
				var n = i.utils.unwrapObservable(t());
				return {
					src : AltLan.Pay.Settings.apiBaseUrl + "/" + n
				}
			})
		}
	};
	i.bindingHandlers.ctnValue = {
		init : function (n, t, r) {
			var u = i.utils.unwrapObservable(t());
			u && (formattedValue = u.replace("FTTB/", ""), i.bindingHandlers.value.init(n, function () {
					return formattedValue
				}, r))
		}
	};
	i.bindingHandlers.money = {
		init : function (n, t, r) {
			var u = i.utils.unwrapObservable(t()),
			f,
			o = r().moneyIgnoreNulls,
			e;
			o && (u === "" || u == null) ? f = "" : (u = u || 0, e = u % 1 == 0 ? u + "" : parseFloat(u).toFixed(2), f = e.replace(".", ",").replace(",00", ""));
			$(n).text(f)
		},
		update : function (n, t, r) {
			var u = i.utils.unwrapObservable(t()),
			f,
			o = r().moneyIgnoreNulls,
			e;
			o && (u === "" || u == null) ? f = "" : (u = u || 0, e = u % 1 == 0 ? u + "" : parseFloat(u).toFixed(2), f = e.replace(".", ",").replace(",00", ""));
			$(n).text(f)
		}
	};
	i.bindingHandlers.moneyIgnoreNulls = {
		init : function () {}

	};
	i.bindingHandlers.formNumber = {
		update : function (n, t, r) {
			var o = "",
			s = "",
			h = "",
			c = i.utils.unwrapObservable(r().formList),
			u;
			c != null && (u = c.split(","), u.length > 0 && (o = u[0]), u.length > 1 && (s = u[1]), u.length > 2 && (h = u[2]));
			var f = i.utils.unwrapObservable(t()),
			e = Math.floor((f || 0) % 10),
			l = Math.floor((f || 0) % 100 / 10);
			e == 1 && l != 1 ? $(n).html(f + " " + o) : e != 2 && e != 3 && e != 4 || l == 1 ? $(n).html(f + " " + h) : $(n).html(f + " " + s)
		}
	};
	i.bindingHandlers.formList = {
		init : function () {}

	};
	i.bindingHandlers.startingOuterWidth = {
		init : function (n, t) {
			t()($(n).outerWidth())
		},
		update : function (n, t) {
			var r = i.unwrap(t());
			t()($(n).outerWidth())
		}
	};
	i.bindingHandlers.cardsClass = {
		init : function () {},
		update : function (n, t, i, r, u) {
			$(n).addClass("card-image-bg" + (u.$index() + 1))
		}
	};
	i.bindingHandlers.clickRedirect = {
		init : function (n, t) {
			$(n).click(function () {
				var n = i.utils.unwrapObservable(t());
				return r.RedirectToRouteGlobal(n),
				!1
			})
		}
	};
	i.bindingHandlers.cardDisplay = {
		init : function (n, t) {
			var r = i.utils.unwrapObservable(t()),
			u,
			f;
			r && (u = r.BankBIN == null ? "**** **" : r.BankBIN.substring(0, 4) + " " + r.BankBIN.substring(4, 6), f = u + "** **** " + r.CardNumberCode, i.bindingHandlers.text.update(n, function () {
					return f
				}))
		},
		update : function (n, t) {
			var r = i.utils.unwrapObservable(t()),
			u,
			f;
			r && (u = r.BankBIN == null ? "**** **" : r.BankBIN.substring(0, 4) + " " + r.BankBIN.substring(4, 6), f = u + "** **** " + r.CardNumberCode, i.bindingHandlers.text.update(n, function () {
					return f
				}))
		}
	};
	i.bindingHandlers.comboBox = {
		init : function (n, t) {
			var e = i.unwrap(t()),
			r = e.selected,
			o = e.data,
			u = $(n).parent().parent().parent().find("ul").children().first().children().first(),
			f = $(n).parent().parent().parent().find("input").first();
			f.val(r());
			u.parent().mCustomScrollbar({
				scrollInertia : 50,
				advanced : {
					updateOnContentResize : !0
				}
			});
			f.keyup(function () {
				if (!$(n).hasClass("opened")) {
					var t = $(n).parent().parent().parent();
					t.find("ul").show();
					$(n).addClass("opened")
				}
				u.empty();
				r(f.val());
				$(o).filter(function () {
					return this.toLowerCase().indexOf(f.val().toLowerCase()) > -1
				}).each(function (t, i) {
					$(document.createElement("li")).html(i).data("value", i).click(function () {
						r($(this).data("value"));
						f.val(r());
						u.empty();
						$(document.createElement("li")).html(r()).data("value", r()).click(function () {
							var t = $(n).parent().parent().parent();
							t.find("ul").hide();
							$(n).removeClass("opened")
						}).addClass("ui-menu-item ui-corner-all").appendTo(u);
						var t = $(n).parent().parent().parent();
						t.find("ul").hide();
						$(n).removeClass("opened")
					}).addClass("ui-menu-item ui-corner-all").appendTo(u)
				})
			});
			$(n).click(function () {
				var t;
				return $(n).hasClass("opened") ? (t = $(n).parent().parent().parent(), t.find("ul").hide(), $(n).removeClass("opened")) : (t = $(n).parent().parent().parent(), t.find("ul").show(), $(n).addClass("opened")),
				!1
			}).focusout(function () {
				window.setTimeout(function () {
					var t = $(n).parent().parent().parent();
					t.find("ul").hide();
					$(n).removeClass("opened")
				}, 200)
			});
			$(o).each(function (t, i) {
				$(document.createElement("li")).html(i).data("value", i).click(function () {
					r($(this).data("value"));
					f.val(r());
					u.empty();
					$(document.createElement("li")).html(r()).data("value", r()).click(function () {
						var t = $(n).parent().parent().parent();
						t.find("ul").hide();
						$(n).removeClass("opened")
					}).addClass("ui-menu-item ui-corner-all").appendTo(u);
					var t = $(n).parent().parent().parent();
					t.find("ul").hide();
					$(n).removeClass("opened")
				}).addClass("ui-menu-item ui-corner-all").appendTo(u)
			})
		}
	};
	s.getCursorPosition = function (n) {
		if (n) {
			if ("selectionStart" in n)
				return n.selectionStart;
			if (document.selection) {
				n.focus();
				var t = document.selection.createRange(),
				i = document.selection.createRange().text.length;
				return t.moveStart("character", -n.value.length),
				t.text.length - i
			}
		}
	};
	i.bindingHandlers.nextFocusImmediate = {
		init : function (n) {
			i.utils.registerEventHandler(n, "keyup", function (n) {
				var t,
				u,
				f;
				e = n || window.event;
				t = e.target || e.srcElement;
				t.nodeType == 3 && (t = t.parentNode);
				var o = $(t).parent().attr("class").split(" ")[0],
				i = 100,
				r = "phone-input";
				switch (o) {
				case "pay-phone-code":
					i = 3;
					r = "pay-phone";
					break;
				case "pay-phone":
					i = 9;
					r = "price";
					break;
				case "account-number-input-shpd":
					i = 7;
					r = "price"
				}
				return u = s.getCursorPosition(t),
				u >= i && (f = "." + r + " :visible", $(t).parents().nextAll().first(f).find("input").focus()),
				!0
			})
		}
	};
	i.bindingHandlers.htmlWithBinding = {
		init : function () {
			return {
				controlsDescendantBindings : !0
			}
		},
		update : function (n, t, r, u, f) {
			n.innerHTML = t();
			i.applyBindingsToDescendants(f, n)
		}
	}
});
AltLanPay.define("Services/Router", ["require", "exports", "Services/HttpClient", "Services/CrossRoads", "app", "knockout", "Boards/AutoPayment/AddAutoPaymentBoard", "Boards/AutoPayment/AddCardBoard", "Boards/AutoPayment/ManageBoard", "Boards/AutoPayment/MobilePromoBoard", "Boards/ImmediatePayment/IndexBoard", "Boards/Profile/FttbBoard", "Boards/Profile/MobileBoard", "Boards/Profile/WifiBoard", "Boards/Profile/LiteBoard", "Boards/Profile/PhoneBoard", "Popups/CancelSecretKeyPopup", "Popups/EnsureSecretKeyPopup", "Popups/PayGenericPopup", "Popups/NotificationPhonePopup", "Popups/SharedPopupModel", "Popups/UnauthorizedPopup", "Popups/ChangeUserPopup", "knockout.validation", "bindings"], function (n, t, i, r, u, f) {
	t.ActiveRoute = f.observable({});
	t.activateRoute = function (i, r) {
		typeof r == "undefined" && (r = null);
		var u = $.Deferred();
		return i.RedirectUrl ? window.location.replace(i.RedirectUrl) : n(["Boards/" + i.Section + "/" + i.Page + "Board"], function (n) {
			var e = new n.Board(i, r);
			t.ActiveRoute == null ? t.ActiveRoute = f.observable({
					Board : e,
					Section : i.Section,
					Page : i.Page
				}) : t.ActiveRoute({
					Board : e,
					Section : i.Section,
					Page : i.Page
				});
			u.resolve();
			e.AfterBound()
		}),
		u
	};
	t.navigateParseRoute = function (n) {
		var i = r.ParseRoute(n);
		return t.navigateRoute(i.section, i.page, i.extraParams)
	};
	t.navigateRoute = function (r, f, e) {
		var o,
		s,
		h;
		return (typeof e == "undefined" && (e = null), o = $.Deferred(), r == t.ActiveRoute().Section && f == t.ActiveRoute().Page) ? (t.ActiveRoute().Board.ExtraParams(e), o.resolve(), o) : (s = $('<div class="overlay"><\/div>'), h = $('<div class="overlay-loader"><\/div>'), $("#payApplicationHost .content-block.common").append(s).append(h), i.Get("/api/" + r + "/" + f).then(function (i) {
				i.RedirectUrl ? window.location.replace(i.RedirectUrl) : n(["Boards/" + i.Section + "/" + i.Page + "Board"], function (n) {
					var r = new n.Board(i, e);
					t.ActiveRoute({
						Board : r,
						Section : i.Section,
						Page : i.Page
					});
					s && (s.remove(), h.remove);
					o.resolve();
					r.AfterBound()
				})
			}, function () {
				return u.Host.showErrorStub()
			}), o)
	}
});
AltLanPay.define("Services/ErrorLogger", ["require", "exports"], function (n, t) {
	t.Init = function () {}

});
AltLanPay.define("app", ["require", "exports", "Services/Settings", "Services/Router", "Services/ErrorLogger", "knockout"], function (n, t, i, r, u, f) {
	function o(n, e, o) {
		var s = this;
		return i.SharedData = e.SharedData,
		i.RedirectLinks = e.RedirectLinks,
		i.QpDocuments = e.QpDocuments,
		t.Host = o,
		u.Init(),
		t.options = n,
		r.activateRoute(e, n.RoutingParams).then(function () {
			t.ActiveRoute = r.ActiveRoute;
			f.applyBindings(s, $("#payApplicationHost")[0])
		})
	}
	function s() {
		window.location.reload()
	}
	function h(n) {
		r.navigateParseRoute(n)
	}
	function c() {}

	function l(n) {
		return moment(n).add("hours", -i.SharedData.TimeShift).toISOString()
	}
	var e,
	a,
	v;
	t.options;
	t.ActiveRoute;
	t.Host;
	t.paySignals = {
		cardUnbound : new signals.Signal
	};
	t.start = o;
	t.refresh = s;
	e = $.Deferred();
	a = e.promise();
	t.ChangeActiveScreen = h;
	t.exit = c;
	v = 0;
	t.ShiftDate = l
});
AltLanPay.define("PayMainBuilt", function () {})
