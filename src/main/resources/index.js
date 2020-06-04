webpackJsonp([4], {
    0 : function(e, t, n) {
        e.exports = n(116)
    },
    31 : function(e, t, n) {
        var r, i;
        "use strict"; ! (r = [n(32)], i = function(e) {
            function s(i) {
                i = i || {};
                n = i.size || 300;
                r = i.attr || "alt";
                t = i.imgs || $("img.lazyImg");
                var s = [];
                t.each(function() {
                    var e = $(this),
                    t = e.offset(),
                    n = t.top > 0 ? t.top: e.parents(":visible") && e.parents(":visible").offset() ? e.parents(":visible").offset().top: 0;
                    o(n, this, s)
                });
                for (var u in s) {
                    if (s.hasOwnProperty(u)) {
                        var a = $(s[u]);
                        a.each(function() {
                            var t = this;
                            e.y(u).threshold(n).load(function() {
                                var e = $(t);
                                e.attr("src", e.attr(r));
                                e.removeAttr(r);
                                if (e[0].className.indexOf("lazyImg") !== -1) {
                                    e.removeClass("lazyImg")
                                }
                            })
                        })
                    }
                }
            }
            function o(e, t, r) {
                e = e - e % n;
                r[e] = r[e] || [];
                r[e].push(t)
            }
            var t, n, r, i = {};
            return s
        }.apply(t, r), i !== undefined && (e.exports = i))
    },
    32 : function(e, t, n) {
        var r, i;
        "use strict"; ! (r = [], i = function() {
            function o() {
                var r = e.scrollTop();
                n.concat().forEach(function(e) {
                    e.fire(r, t)
                })
            }
            var e = $(window),
            t = e.height(),
            n = [],
            r = {
                node: function(t, n) {
                    t = $(t);
                    return this.y(t.offset() ? t.offset().top: 0, n ? t.outerHeight(true) : undefined)
                },
                y: function(t, n) {
                    this._y = t;
                    this._s = n || 0;
                    return this
                },
                threshold: function(t) {
                    this._th = t;
                    return this
                },
                size: function(t) {
                    this._s = t;
                    return this
                },
                delay: function(t) {
                    this._d = t;
                    return this
                },
                time: function(t) {
                    var n = this;
                    n._t = t;
                    setTimeout(function() {
                        n.start()
                    },
                    t);
                    return n
                },
                load: function() {
                    this._cb = this._cb.concat(Array.prototype.slice.call(arguments, 0));
                    this._no && n.push(this);
                    this._no = false;
                    this._f && this.fire();
                    this._f = false;
                    return this
                },
                start: function() {
                    this._enable && this._cb.forEach(function(e) {
                        e()
                    });
                    return this.cancel()
                },
                cancel: function() {
                    this.disable();
                    for (var t = 0,
                    r = n.length; t < r; t++) {
                        if (n[t] == this) {
                            n.splice(t, 1);
                            break
                        }
                    }
                },
                enable: function() {
                    this._enable = true;
                    return this
                },
                disable: function() {
                    this._enable = false;
                    return this
                },
                fire: function(r, i) {
                    function o() {
                        s._cb.forEach(function(e) {
                            e()
                        });
                        s.cancel()
                    }
                    r = r || e.scrollTop();
                    i = i || t;
                    var s = this;
                    if (s._s) {
                        clearTimeout(s._timeout);
                        s._timeout = setTimeout(function() {
                            if (s._enable && s._y <= r + i + s._th && s._y + s._s >= r - s._th) o()
                        },
                        s._d)
                    } else {
                        if (this._enable && this._y <= r + i + this._th) o()
                    }
                    return this
                }
            },
            i = function() {
                this._y = 0;
                this._th = 0;
                this._d = 0;
                this._s = 0;
                this._cb = [];
                this._no = true;
                this._enable = true;
                this._timeout = null;
                this._f = true
            },
            s = {};
            i.prototype = r;
            e.bind("resize",
            function() {
                t = e.height();
                o()
            });
            e.bind("scroll", o);
            for (var u in r) { (function(e) {
                    s[e] = function() {
                        var t = new i;
                        return t[e].apply(t, Array.prototype.slice.call(arguments, 0))
                    }
                })(u)
            }
            return s
        }.apply(t, r), i !== undefined && (e.exports = i))
    },
    35 : function(e, t, n) {
        "use strict";
        function u(e) {
            return e && e.__esModule ? e: {
                "default": e
            }
        }
        function a(e) {
            if (e && e.tagName) {
                var t = e.tagName.toLowerCase() == "a" ? $(e) : $(e).find("a");
                t = t.length ? t: $(e);
                return (t.attr("rel") || t.attr("href").replace(/.*#(\d+)$/, "$1") || 1) - 1
            } else {
                return 0
            }
        }
        function f(e) {
            var t = arguments;
            for (var n = 0,
            r = t.length; n < r; n++) {
                var e = t[n];
                if (e) clearTimeout(e)
            }
            return null
        }
        var r = n(31);
        var i = u(r);
        var s = n(5);
        var o = u(s);
        jQuery.easing["jswing"] = jQuery.easing["swing"];
        jQuery.extend(jQuery.easing, {
            easeInOutQuad: function(t, n, r, i, s) {
                if ((n /= s / 2) < 1) return i / 2 * n * n * n + r;
                return i / 2 * ((n -= 2) * n * n + 2) + r
            }
        });
        var l = o.
    default.extend({
            initialize:
            function(t) {
                var n = this;
                l.superClass.initialize.apply(n, arguments);
                n.op = t || {};
                n.op.slide = t.slide || false;
                n.op.linktab = t.linktab || false;
                n.op.clicktab = t.clicktab || false;
                n.op.lazyContent = t.lazyContent || window.gLazyContent || false;
                var r = n.box = $(t.box);
                var s = n.tab = $(t.tab || ".tab li", r);
                var o = n.panel = $(t.panel || ".c", r);
                n.size = s.length || o.length;
                n.loop = t.loop || 0;
                n.current = a(s.filter(".current")[0]);
                if (n.op.slide) {
                    n.scroll = o.parent().parent();
                    n.scroll.scrollLeft(0); (0, i.
                default)({
                        imgs:
                        o.eq(n.current).find(".lazyImg")
                    });
                    o.parent().append(o.eq(0).clone());
                    n.panel = $(t.panel || ".c", r);
                    n.width = o.width();
                    n.delay = t.delay || 700;
                    n.loop = (n.loop || 5e3) + n.delay;
                    n.anilock = false
                }
                if (n.size < 2) return;
                if (n.op.clicktab) {
                    s.click(function(e) {
                        e.preventDefault();
                        n.go(a(this))
                    })
                } else {
                    if (!n.op.linktab) {
                        s.click(function(e) {
                            e.preventDefault()
                        })
                    }
                    s.mouseenter(function() {
                        f(n.timer, n.looptimer);
                        var e = this;
                        n.timer = setTimeout(function() {
                            n.go(a(e))
                        },
                        30)
                    }).mouseleave(function() {
                        f(n.timer, n.looptimer);
                        n.start()
                    })
                }
                if (n.loop) {
                    n.check(n.op.clicktab ? s: null);
                    n.start()
                }
                s.parent().on("click", "a",
                function(e) {
                    var t = $(this).attr("href");
                    if (!t || t == "#" || t.length < 5) {
                        e.preventDefault()
                    }
                })
            },
            on: function(t, n) {
                this.box.eventProxy(t, n);
                return this
            },
            go: function(t, n) {
                var r = this;
                if (r.current == t) {
                    return
                }
                t = n ? t: Math.min(Math.max(t, 0), r.size - 1);
                r.trigger("before", [r.current, t, r]);
                if (r.op.slide) {
                    if (r.anilock) {
                        r.nextstep = function() {
                            r.animate(t, n)
                        };
                        return
                    }
                    r.animate(t, n)
                } else {
                    var i = r.current;
                    r.current = t % r.size;
                    r.trigger("change", [r.current, r]);
                    r.tab.removeClass("current").eq(r.current).addClass("current");
                    var s = r.op.fade;
                    var o = r.panel;
                    s ? o.eq(i).stop().fadeOut(100) : o.hide();
                    o.eq(r.current)[s ? "fadeIn": "show"](r.op.duration ? r.op.duration: 0);
                    r.trigger("after", [r.current, r])
                }
                return this
            },
            setSize: function(t) {
                if (t <= this.panel.length) {
                    this.size = t
                }
                return this
            },
            prev: function(t) {
                this.go(this.current - 1, t)
            },
            next: function(t) {
                this.go(this.current + 1, t)
            },
            start: function(t) {
                var n = this;
                if (n.loop) {
                    f(n.looptimer);
                    if (t) n.start();
                    n.looptimer = setTimeout(function() {
                        n.start();
                        n.next(true)
                    },
                    n.loop)
                }
            },
            stop: function() {
                f(this.looptimer)
            },
            check: function(t) {
                var n = this; (t || n.panel).mouseenter(function() {
                    f(n.looptimer)
                }).mouseleave(function() {
                    f(n.looptimer);
                    n.start()
                })
            },
            animate: function(t, n) {
                var r = this;
                var s = r.current;
                if (r.anilock || s == t) return;
                f(r.looptimer);
                var o = r.size,
                u = r.width,
                a = r.panel,
                l = r.scroll;
                var c = s > t ? 0 : u;
                var h = s > t ? u: 0;
                t = t % (n ? o + 1 : o); (0, i.
            default)({
                    imgs:
                    a.eq(t).show().find(".lazyImg")
                });
                l.scrollLeft(h);
                r.tab.removeClass("current").eq(t % o).addClass("current");
                l.animate({
                    scrollLeft: c
                },
                r.delay, "easeInOutQuad",
                function() {
                    a.eq(s).hide();
                    if (n && t == o) {
                        t = t % o; (0, i.
                    default)({
                            imgs:
                            a.eq(0).show().find(".lazyImg")
                        });
                        a.eq(o).hide()
                    }
                    l.scrollLeft(0);
                    r.current = t;
                    r.anilock = false;
                    r.trigger("after", [r.current, r]);
                    if (r.nextstep) {
                        r.nextstep();
                        r.nextstep = null
                    }
                    if (n) {
                        r.start()
                    }
                });
                r.anilock = true
            }
        });
        e.exports = l
    },
    36 : function(e, t, n) {
        "use strict";
        function u(e) {
            return e && e.__esModule ? e: {
                "default": e
            }
        }
        function f(e) {
            var t = e.find("img.lazyLoad");
            var n = void 0;
            t.each(function(e, t) {
                n = $(t);
                n.attr("src", n.attr("alt"));
                n.removeAttr("alt").removeClass("lazyLoad")
            })
        }
        function l(e, t) {
            e.animate({
                left: -t
            },
            300)
        }
        var r = n(5);
        var i = u(r);
        var s = n(31);
        var o = u(s);
        var a = i.
    default.extend({
            initialize:
            function(t, n) {
                var r = this;
                r.box = t;
                this.opt = n || {};
                this.opt.patchWidth = this.opt.patchWidth || 20;
                r.panel = t.find(".panel");
                a.superClass.initialize.apply(r, arguments);
                r.current = 0;
                var i = r.box.find(".lazyContent");
                if (i[0]) {
                    r.box.eq(0).html(i.val()); (0, o.
                default)({
                        imgs:
                        r.box.find(".lazyImg")
                    })
                }
                setTimeout(function() {
                    r.setPos()
                },
                100);
                t.delegate(".mbtn a", "click",
                function(e) {
                    e.preventDefault();
                    r.setPos();
                    var t = $(this).closest(".mbtn").hasClass("next");
                    var n = t ? r.current >= r.step ? r.step: ++r.current: r.current <= 0 ? 0 : --r.current;
                    l(r.panel, r.pos[n]);
                    r.resetBtn();
                    f(r.panel)
                });
                r.box.bind("slider:show",
                function() {
                    this.setPos()
                }.bind(r));
                $(window).bind("resize",
                function() {
                    setTimeout(function() {
                        if (r.panel.is(":visible")) {
                            r.reload();
                            r.setPos()
                        }
                    },
                    100)
                })
            },
            resetBtn: function() {
                var t = this;
                var n = t.box.find(".prev, .next");
                switch (t.current) {
                case 0:
                    n.eq(1).show();
                    n.eq(0).hide();
                    break;
                case t.step - 1 : n.eq(0).show();
                    n.eq(1).hide();
                    break;
                default:
                    n.show();
                    break
                }
            },
            setPos: function() {
                var t = this;
                var n = t.box;
                var r = t.box.width();
                var i = 0;
                var s = void 0;
                t.$item = t.panel.children();
                t.pos = [0];
                var o = t.box.attr("id");
                t.panel.css({
                    width: 5e4
                });
                $.each(t.$item,
                function(e) {
                    var n = $(this);
                    var o = n.width();
                    i = n.position().left + o;
                    s = t.pos.length > 0 ? t.pos[t.pos.length - 1] : 0;
                    if (n.position().left + o > r + s) {
                        t.pos.push(n.position().left)
                    }
                    if (e == t.$item.length - 1 && i - r > 0) {
                        var u = t.pos.length;
                        if (u == 1) {
                            t.pos.push(i - r)
                        } else {
                            t.pos[u - 1] = i - r;
                            if (t.pos[u - 1] == t.pos[u - 2]) {
                                t.pos.pop()
                            }
                        }
                    }
                });
                if (t.pos.length == 1) {
                    n.find(".prev, .next").hide();
                    if (t.panel[0].offsetLeft != 0) {
                        t.panel.css("left", "0");
                        t.current = 0
                    }
                }
                if (i < 400) {
                    i = 5e4
                } else {
                    i = i + t.opt.patchWidth
                }
                t.panel.css({
                    width: i
                });
                t.step = t.pos.length
            },
            reload: function() {
                var t = this;
                t.current = 0;
                t.panel.css({
                    left: 0
                });
                t.resetBtn()
            }
        });
        var c = {};
        e.exports = function(e, t) {
            e = e || $(document);
            var n = $(".modPSlide", e);
            var r = void 0;
            if (n[0]) {
                n.each(function(e, n) {
                    r = $(n).attr("id");
                    if (c[r]) {
                        c[r].reload()
                    } else {
                        c[r] = new a($("#" + r), t)
                    }
                })
            }
        }
    },
    62 : function(e, t, n) {
        "use strict";
        function u(e) {
            return e && e.__esModule ? e: {
                "default": e
            }
        }
        var r = n(5);
        var i = u(r);
        var s = n(9);
        var o = u(s);
        var a = i.
    default.extend({
            initialize:
            function() {
                var t = this;
                a.superClass.initialize.call(t);
                this.domain = PageConfig.homeHost;
                t.op = {
                    callbackName: "callback",
                    charset: "utf-8"
                }
            },
            getPageData: function(t, n) {
                var r = this;
                o.
            default.getJSON(this.domain + t, n,
                function(e) {
                    if (e.error == 1) {
                        r.trigger("getPageData:success", [e])
                    }
                },
                r.op)
            },
            getShowInfo: function(t, n) {
                var r = this;
                o.
            default.getJSON(this.domain + t, n,
                function(e) {
                    if (e.error == 1) {
                        r.trigger("getShowInfo:success", [e])
                    }
                },
                r.op)
            }
        });
        e.exports = a
    },
    116 : function(e, t, n) {
        "use strict";
        function M(e) {
            return e && e.__esModule ? e: {
                "default": e
            }
        }
        function P() {
            try {
                return window.self !== window.top
            } catch(e) {
                return true
            }
        }
        var r = n(4);
        var i = M(r);
        var s = n(45);
        var o = M(s);
        var u = n(8);
        var a = M(u);
        var f = n(117);
        var l = M(f);
        var c = n(120);
        var h = M(c);
        var p = n(121);
        var d = M(p);
        var v = n(125);
        var m = M(v);
        var g = n(128);
        var y = M(g);
        var b = n(132);
        var w = M(b);
        var E = n(135);
        var S = M(E);
        var x = n(136);
        var T = M(x);
        var N = n(137);
        var C = M(N);
        var k = n(138);
        var L = M(k);
        var A = n(36);
        var O = M(A);
        window.catId = PageConfig.catId;
        if (window.cateStr) {
            var _ = PageConfig.folderId * 1 || PageConfig.showid * 1;
            window.cateStr = window.cateStr + "-" + _ + "-" + PageConfig.videoId
        }
        $(document.body).addClass("danmuoff");
        window.getVvlogextplay = function() {
            try {
                var e = encodeURIComponent($.param(window["UrchinAplus"]._yVvlogInfo()))
            } catch(t) {}
            return e
        };
        o.
    default.bind("responsed",
        function(e) {
            o.
        default.trigger("player:responsive", [e]);
            $("body").trigger("responsive", [e])
        });
        new L.
    default;
        var D = void 0;
        a.
    default.checkLogin(function() {
            if (D) {
                console.log(D);
                return
            }
            D = new w.
        default
        });
        new l.
    default;
        if (P()) {
            $(".v-sub-btn").remove()
        }
        var H = new h.
    default;
        var B = new d.
    default;
        B.bind("relationlist:loaded",
        function() {
            H.addrelationListAd()
        });
        new m.
    default;
        new y.
    default;
        $("#module_basic_star").length && new C.
    default({
            el:
            "#module_basic_star"
        });
        S.
    default.init(); (0, O.
    default)($("#bpmodule-playpage-rim,#bpmodule-playpage-manual"));
        new T.
    default;
        $(function() {
            var e = "hidden" in document ? "hidden": "webkitHidden" in document ? "webkitHidden": "mozHidden" in document ? "mozHidden": null;
            if (e && ykPlyr.sendMsg) {
                var t = e.replace(/hidden/i, "visibilitychange");
                var n = function() {
                    setTimeout(function() {
                        if (document[e]) {
                            ykPlyr.sendMsg("pageVisibilty", false)
                        } else {
                            ykPlyr.sendMsg("pageVisibilty", true)
                        }
                    },
                    100)
                };
                document.addEventListener(t, n)
            }
        });
        $(window).bind("beforeunload",
        function() {
            if (a.
        default.isLogin()) return;
            var e = (0, i.
        default)("u_l_v_t");
            try {
                var t = ykPlyr.PlayerInfo() || 0;
                if (t) {
                    t = t.time
                }
                if (e) {
                    t = parseInt(e) + parseInt(t)
                }
                if (t > 0) {
                    if (t > 6 * 60 * 60) {
                        t = 6 * 60 * 60
                    } (0, i.
                default)("u_l_v_t", parseInt(t), 1)
                }
            } catch(n) {}
        })
    },
    117 : function(e, t, n) {
        "use strict";
        function m(e) {
            return e && e.__esModule ? e: {
                "default": e
            }
        }
        var r = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        };
        var i = n(40);
        var s = m(i);
        var o = n(24);
        var u = m(o);
        var a = n(4);
        var f = m(a);
        var l = n(9);
        var c = m(l);
        var h = n(8);
        var p = m(h);
        var d = n(118);
        var v = m(d);
        var g = n(119);
        var y = s.
    default.extend({
            appQrcodeisshow:
            true,
            initialize: function() {
                var t = this;
                $("body").append($(g));
                this.$el = $("#sideTool");
                $("#sideBar").remove();
                $(document).bind("show:question", this.goQuestion.bind(this));
                this.$goTop = $("#icongroupgotop");
                this.$btnQrcode = $("#icongroupqrcode");
                this.QrStatus = 1;
                this._bindEvent();
                this.goTopStatus();
                this.popup = $("#toolbarservice", this.$el)
            },
            events: {
                "click .popup-close-icon": "closePopup",
                "click .right-sidepopup .popup_img": "clickPopup"
            },
            popupLog: function(t, n, r) {
                var i = t == "show" ? "//gm.mmstat.com/yt/show.index.module": "//gm.mmstat.com/yt/click.index.module";
                if (t == "show") {
                    i += "?mid=" + n + "&mname=" + r + "&etime=" + (new Date).getTime()
                } else {
                    i += "?mid=" + n + "&mname=" + r + "&etime=" + (new Date).getTime()
                }
                c.
            default.getRequest(i)
            },
            getPopup: function() {
                var t = this;
                var n = new Date * 1;
                if ($(".right-sidepopup").length || (0, f.
            default)("PopupStatus")) {
                    return
                }
                c.
            default.getJSON("//hudong.alicdn.com/api/data/v2/a06eee90bd8044e480e4499b85f60cc5.js?t=" + new Date * 1, {},
                function(e) {
                    if (e.isShow && PageConfig.showid == "326627" || PageConfig.showid == "57700" || PageConfig.videoId == "774932586") {
                        var r = e.data[0];
                        var i = '<div class="right-sidepopup"><a href="<%=data.url%>" class="popup_img" target="_blank"><img src="<%=data.image%>" /></a><span class="popup-close-icon"></span></div>';
                        if (n >= r.start && n <= r.end) {
                            var s = u.
                        default.compile(i)({
                                data:
                                r
                            });
                            t.popupLog("show", "1013", "popup");
                            t.popup.parent().prepend(s);
                            t.$popupClose = $(".popup-close-icon", this.$el)
                        }
                    }
                },
                {
                    callbackName: "callback",
                    charset: "utf-8",
                    callback: "popupCallback"
                })
            },
            closePopup: function() {
                this.popupLog("click", "1014", "popclose");
                this.$popupClose.parent().hide(); (0, f.
            default)("PopupStatus", 1, {
                    expires: this.getCookieTime()
                })
            },
            clickPopup: function(t) {
                this.popupLog("click", "1013", "popup")
            },
            getCookieTime: function() {
                var t = new Date * 1;
                var t = t - t % (1e3 * 60 * 60 * 24) + 1e3 * 60 * 60 * 24;
                return new Date(t)
            },
            goTop: function() {
                $("body,html").animate({
                    scrollTop: 0
                },
                800);
                return false
            },
            goQuestion: function(t, n) {
                var r = this.$el.find("#icongroupquestion");
                $("#ToolbarQuestionLink").attr({
                    href: n.link,
                    title: n.name
                });
                r.show()
            },
            goTopStatus: function() {
                var t = $(window).scrollTop();
                if (t > 300) {
                    this.$el.find("#toolbarservice").show();
                    this.$goTop.show()
                } else {
                    this.$goTop.hide();
                    this.$el.find("#toolbarservice").hide()
                }
            },
            showQrcode: function(t) {
                var n = this,
                r, i;
                var s = $("#showAppQrcode");
                var o = [{
                    right: "0px",
                    opacity: 0
                },
                {
                    right: "50px",
                    opacity: 1
                }];
                if (this.QrStatus == 1) {
                    if (t == "close") {
                        return
                    }
                    r = o[0];
                    i = o[1]
                } else {
                    r = o[1];
                    i = o[0]
                }
                s.css(r);
                s.show().animate(i, 300,
                function() {
                    if (n.QrStatus == -1) {
                        s.hide()
                    }
                    n.QrStatus = n.QrStatus * -1
                });
                return false
            },
            _bindEvent: function() {
                var t = $(window);
                var n = this;
                var r = true;
                t.bind("scroll",
                function() {
                    if (r) {
                        setTimeout(function() {
                            n.goTopStatus();
                            r = true
                        },
                        200);
                        r = false
                    }
                });
                this.$goTop.bind("click", this.goTop.bind(this));
                this.$btnQrcode.bind("click", this.showQrcode.bind(this));
                $(document).bind("click",
                function() {
                    n.showQrcode.call(n, "close")
                })
            },
            showRunIcon: function() {
                if (!PageConfig.lottery_open_sidetool || PageConfig.lottery_open_sidetool == "" || !$("#lotteryToolbarBig").length || !$("#lotteryToolbar").length) {
                    return false
                }
                var t = p.
            default.uid();
                var n = this;
                var i = "//ykatr.youku.com/atr/related/packed_list.json",
                s = 1,
                o = (0, f.
            default)("__ysuid"),
                u = 1,
                a = 16,
                l = 1,
                c = "ykqz_toolbar";
                var h;
                i += "?site=" + s + "&guid=" + o + "&apptype=" + u + "&module=" + a + "&pl=" + l + "&oc=" + c;
                i += "&uid=" + p.
            default.uid();
                if (typeof PageConfig.playmode !== "undefined") {
                    h = 1;
                    if (PageConfig.videoId != 0) {
                        var d = PageConfig.videoId;
                        i += "&vid=" + d
                    }
                    if (PageConfig.showid != 0) {
                        var v = PageConfig.showid;
                        i += "&sid=" + v
                    }
                    if (typeof PageConfig.catId !== "undefined") {
                        var m = PageConfig.catId;
                        i += "&cate=" + m
                    }
                } else {
                    h = 30;
                    if ((typeof svargs === "undefined" ? "undefined": r(svargs)) === "object") {
                        if (typeof svargs.catid !== "undefined" && svargs.catid != 0) {
                            var m = svargs.catid;
                            i += "&cate=" + m
                        }
                    }
                    if (window.youku_show_page == 1 && (typeof g_config === "undefined" ? "undefined": r(g_config)) === "object") {
                        if (typeof g_config.pk_odshow !== "undefined") {
                            var v = g_config.pk_odshow;
                            i += "&sid=" + g_config.pk_odshow
                        }
                        if (typeof g_config.cat_id !== "undefined" && typeof g_config.cat_id !== 0) {
                            var m = g_config.cat_id;
                            i += "&cate=" + m
                        }
                    }
                }
                i += "&pg=" + h;
                i += "&callback=?";
                $.getJSON(i,
                function(e) {
                    n.showRunIconCallback(e)
                })
            },
            showRunIconCallback: function(t) {
                if (t.e == 0) {
                    var n = t.data[0];
                    var r = n.clickLogUrl;
                    $("#lotteryToolbar").show();
                    var i = '<div id="lotteryLeft" class="ykDraw-panel ykDraw-panel-reward" style="position:relative;width:100%;height:100%;"><a href="' + n.playLink + '" target="_blank" style="cursor:pointer;position:absolute;width:100%;height:100%;background:url(' + n.picUrl + ') no-repeat;background-position:0 -40px;margin-top:10px;"></a><span id="lotteryHand" class="ykDraw-p-itemykDraw-p-item-close" style="cursor:pointer;position:absolute;width:13px;height:13px;left:0px;top:0px;background:url(' + n.picUrl + ') no-repeat;background-position:-42px 0;"></span></div></div></div>';
                    var s = '<div class="yk-toolbar-draw js-draw"><div class="yk-toolbar-group yk-toolbar-group-draw"><div class="ykDraw-mark" id="lotteryRight"><a href="' + n.playLink + '" target="_blank" style="position:relative;display:block;height:38px;"><span class="ykDraw-m-item ykDraw-m-item-bag" style="background:url(' + n.picUrl + ') no-repeat;width:100%;height:100%;background-position:0 0;z-index:1;display:block;margin:0 auto;"></span></a></div>';
                    $("#lotteryToolbarBig").html(i);
                    $("#lotteryToolbar").html(s);
                    $("#lotteryToolbar").show();
                    if ((0, f.
                default)("runIcon_day") != "yes" && window.screen.width >= 1440) {
                        $("#lotteryToolbarBig").show()
                    }
                    if ((0, f.
                default)("runIcon_day") == null || (0, f.
                default)("runIcon_day") == "undefined") {
                        this.appQrcodeisshow = false
                    }
                    this.showRunIconLog(r)
                }
            },
            showRunIconLog: function(t) {
                function i(e) {
                    if (n) {
                        var t = new Image;
                        t.src = n + "&optype=" + e
                    }
                }
                var n = t;
                if (n) {
                    var r
                }
                $("#lotteryLeft").bind("click",
                function() {
                    r = 6;
                    v.
                default.log(1, "tp=1&cp=4010337&cpp=1000940");
                    i(r)
                });
                $("#lotteryRight").bind("click",
                function() {
                    r = 8;
                    v.
                default.log(1, "tp=1&cp=4010338&cpp=1000940");
                    i(r)
                });
                $("#lotteryHand").bind("click",
                function(e) {
                    $("#lotteryToolbarBig").hide();
                    $("#lotteryToolbar").show(); (0, f.
                default)("runIcon_day", "yes", 1);
                    r = 9;
                    v.
                default.log(1, "tp=1&cp=4009622&cpp=1000217");
                    i(r);
                    return false
                })
            },
            lottery: function() {},
            lotteryLayer: function(t, n, r) {
                if (!t || !n || !r) {
                    return false
                }
                if (typeof PlayerPause === "function") {
                    PlayerPause(1)
                }
                if (window.popwin) popwin.hide();
                window.popwinLottery = new Qwindow;
                window.popwinLottery.setSize(n, r).setContent("iframe", t).setHideCallback(function() {
                    if (typeof PlayerPause === "function") {
                        PlayerPause(0)
                    }
                }).show();
                v.
            default.log(1, "tp=1&cp=4009623&cpp=1000217")
            }
        });
        e.exports = y
    },
    118 : function(e, t, n) {
        var r, i;
        "use strict";
        var s = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        }; ! (r = [], i = function() {
            var e = {};
            e.logCookieKey = "logCookieKey";
            e._addScript = function(e) {
                var t = document.createElement("script");
                t.type = "text/javascript";
                t.src = e;
                document.getElementsByTagName("head")[0].appendChild(t)
            };
            e.addScript = function(t) {
                var n = new RegExp("@" + 3 + "@", "g");
                var r = new RegExp("@" + 4 + "@", "g");
                var i = new RegExp("@" + 5 + "@", "g");
                var s = new RegExp("@" + 6 + "@", "g");
                var o = new RegExp("@" + 7 + "@", "g");
                var u = new RegExp("@" + 8 + "@", "g");
                t = t.replace(n, "//lstat.youku.com/nstay.php").replace(r, "//e.stat.youku.com/hot/click").replace(i, "//r.l.youku.com/recclick").replace(s, "//p.l.youku.com/ugctagclick").replace(o, "//r.l.youku.com/rec_at_click").replace(u, "//r.l.youku.com/recpclick");
                t += "&=" + Math.floor(Math.random() * 1e6);
                e._addScript(t)
            };
            e.log = function(t, n, r) {
                if (typeof t != "number") {
                    return
                }
                var i = r ? r: 0;
                var o = "";
                if (i == 0) {
                    var u = document.cookie;
                    var a = u.split("; ");
                    for (var f = 0; f < a.length; f++) {
                        var l = a[f].split("=");
                        if (e.logCookieKey == l[0]) {
                            if (l[1] != "invalid") {
                                o = unescape(a[f].substring(e.logCookieKey.length + 1, a[f].length))
                            }
                            break
                        }
                    }
                }
                o += "@" + t + "@";
                if ((typeof n === "undefined" ? "undefined": s(n)) == "object") {
                    argUrl = "";
                    for (arg in n) {
                        argUrl += "&" + arg + "=" + n[arg]
                    }
                    if (t == 4) {
                        document.cookie = "__utmarea=" + n.charset + ";path=/;domain=youku.com"
                    }
                    o += "?" + argUrl.substring(1, argUrl.length) + "^"
                } else {
                    if (t == 4) {
                        document.cookie = "__utmarea=" + n.substring(8, n.length) + ";path=/;domain=youku.com"
                    }
                    o += "?" + n + "^"
                }
                if (i == 0) {
                    document.cookie = e.logCookieKey + "=" + escape(o) + ";path=/;domain=youku.com"
                } else {
                    e.addScript(o)
                }
            };
            e.readLogCookie = function() {
                var t = document.cookie;
                var n = t.split("; ");
                var r = "";
                found = 0;
                for (var i = 0; i < n.length; i++) {
                    var s = n[i].split("=");
                    if (e.logCookieKey == s[0]) {
                        found = 1;
                        if (s[1] == "invalid") {
                            break
                        }
                        r = unescape(n[i].substring(e.logCookieKey.length + 1, n[i].length));
                        requestUrl = r.substring(0, r.length - 1).split("^");
                        for (var i = 0; i < requestUrl.length; i++) {
                            e.addScript(requestUrl[i])
                        }
                        document.cookie = e.logCookieKey + "=invalid" + ";path=/;domain=youku.com";
                        break
                    }
                }
            };
            return e
        }.apply(t, r), i !== undefined && (e.exports = i))
    },
    119 : function(e, t) {
        e.exports = '<div id="sideTool" class="right-sideBar">\n	<ul class="yk-toolbar-service js-toolbar" id="toolbarservice" data-stat-role="ck">\n		<li class="bigImg yk-toolbar-draw js-draw" id="lotteryToolbarBig"  style="display: none;"></li>\n		<li class="yk-toolbar-draw js-draw" id="lotteryToolbar"  style="display: none;"></li>\n		<li class="yk-toolbar-group">\n			<a class="toolbar icon-5" id="icongroupqrcode" title="二维码">\n			<div class="yk-toolbar-group-item js-dest-qrcode" id="iconitemqrcode"></div>\n			<div class="qrcode-popup yk-toolbar-group-panel-li" id="showAppQrcode" style="display: none;">\n			<div class="qrcode-arrow"></div>\n			<p>下载手机客户端</p>\n			<img src="//img.alicdn.com/tfs/TB12jXWXET1gK0jSZFrXXcNCXXa-320-320.png" width="100"/>\n			<span>微信扫一扫</span><span>视频随时看</span>\n			</div>\n			</a>\n		</li>\n		<li class="yk-toolbar-group" id="icongroupquestion" style="display: none;">\n			<a class="toolbar icon-6" id="ToolbarQuestionLink" href="#" target="_blank" title="问卷"><div class="yk-toolbar-group-item js-dest-question" id="iconitemquestion" data-stat-role="ck"></div></a>\n		</li>\n		<li class="yk-toolbar-group" id="icongroupgotop" style="display: none;">\n			<a class="toolbar icon-2"><div class="yk-toolbar-group-item js-dest-goTop" data-stat-role="ck" id="iconitemgotop"></div></a>\n		</li>\n<!-- 		<li class="yk-toolbar-group" id="lightoff">\n			<a class="toolbar icon-4"><div class="yk-toolbar-group-item js-dest-lightOn" id="iconitemlighton" data-stat-role="ck" title="关灯"></div></a>\n		</li> -->\n		<li class="yk-toolbar-group" id="icongroupfeedback">\n			<a class="toolbar icon-3" href="//csc.youku.com/feedback-web/alicare?style=190228" target="_blank" title="反馈"><div class="yk-toolbar-group-item js-dest-feedback" id="iconitemfeedback" data-stat-role="ck"></div></a>\n		</li>\n	</ul>\n</div>\n'
    },
    120 : function(e, t, n) {
        "use strict";
        function f(e) {
            return e && e.__esModule ? e: {
                "default": e
            }
        }
        var r = n(40);
        var i = f(r);
        var s = n(3);
        var o = f(s);
        var u = n(29);
        var a = f(u);
        e.exports = i.
    default.extend({
            list:
            [{
                id:
                "module_ad_61204",
                number: "61204",
                time: 10 * 60 * 1e3
            },
            {
                id: "module_ad_61203",
                number: "61203",
                time: 10 * 60 * 1e3
            },
            {
                id: "module_ad_61202",
                number: "61202",
                time: 10 * 60 * 1e3
            }],
            relationList: [{
                id: "ab_v_61208",
                number: "61208"
            },
            {
                id: "ab_v_61209",
                number: "61209"
            },
            {
                id: "ab_v_61210",
                number: "61210"
            },
            {
                id: "ab_v_61211",
                number: "61211"
            },
            {
                id: "ab_v_61212",
                number: "61212"
            }],
            url: "//v2html.atm.youku.com/vhtml?t=" + (new Date).getTime() + "&rst=" + a.
        default.getAdRst() + PageConfig.adsParams + "&pu=" + encodeURIComponent(window.location.href) + "&ref=" + encodeURIComponent(document.referrer) + "&sid=" + o.
        default.pvid() + "&p=",
            initialize: function() {
                var t = this;
                for (var n in this.list) {
                    this.addAD(this.list[n])
                }
                $("#module_ad_61201").bind("DOMSubtreeModified",
                function() {
                    if ($("#ab_v_61201").find("a").length > 0) {
                        $(".player-container .player-title").addClass("has-ad")
                    }
                });
                window.ykPlyr && ykPlyr.bind("player:loaded",
                function(e, n) {
                    var r = 0;
                    if (ykPlyr.type == "h5") {
                        if (n && n.data && n.data.pipCount > 0) {
                            r = 10 * 60 * 1e3
                        }
                    }
                    setTimeout(function() {
                        t.addAD({
                            id: "module_ad_61201",
                            number: "61201",
                            time: 10 * 60 * 1e3
                        })
                    },
                    r)
                })
            },
            addrelationListAd: function() {
                for (var t in this.relationList) {
                    this.addAD(this.relationList[t])
                }
            },
            addAD: function(t) {
                if ($("#" + t.id).length > 0) {
                    var n = this.url + t.number;
                    if (t.videoSeconds) {
                        n += "&vl=" + PageConfig.seconds
                    }
                    $.getScript(n);
                    if (t.time) {
                        setInterval(function() {
                            $.getScript(n)
                        },
                        t.time)
                    }
                }
            }
        })
    },
    121 : function(e, t, n) {
        "use strict";
        function g(e) {
            return e && e.__esModule ? e: {
                "default": e
            }
        }
        var r = n(40);
        var i = g(r);
        var s = n(4);
        var o = g(s);
        var u = n(9);
        var a = g(u);
        var f = n(36);
        var l = g(f);
        var c = n(31);
        var h = g(c);
        var p = n(8);
        var d = g(p);
        var v = n(122);
        var m = g(v);
        var y = i.
    default.extend({
            initialize:
            function() {
                var t = this;
                this._model = new m.
            default;
                this.modelEvents(this._model, "model");
                this.relationCallback();
                this.likeShowCallback();
                this._model.bind("getRelation:fail", this.listCallbackFail.bind(this));
                d.
            default.one("checklogin",
                function() {
                    var e = {
                        guid: (0, o.
                    default)("__ysuid"),
                        utdid: (0, o.
                    default)("cna"),
                        vid: PageConfig.videoId,
                        sid: PageConfig.showid,
                        cate: PageConfig.catId,
                        apptype: 1,
                        uid: d.
                    default.uid(),
                        atrEnable: "true"
                    };
                    if ($("#module_basic_relation").length > 0) {
                        if (PageConfig.playmode == 1 || PageConfig.playmode == 2) {
                            e.module = 1;
                            e.pg = PageConfig.playmode == 2 ? 4 : 1;
                            e.pl = PageConfig.playmode == 1 ? 23 : 15;
                            e.needTags = PageConfig.playmode == 2 ? 0 : 1;
                            e.type = "video"
                        } else {
                            e.picSize = 2;
                            e.pg = 3;
                            e.module = 9;
                            e.pl = 18;
                            e.needTags = 1;
                            e.type = "show"
                        }
                        t._model.getRelation(e)
                    }
                    if ($("#module_basic_relationleft").length > 0) {
                        e.pg = 3;
                        e.module = 1;
                        e.pl = 20;
                        e.needTags = 0;
                        e.picSize = 2;
                        e.type = "like";
                        t._model.getRelationLike(e)
                    }
                })
            },
            searchDomain: "//www.soku.com",
            clickLogSender: function(t) {
                $(t).on("mousedown", "a",
                function() {
                    var e = $(this);
                    var t = [e.attr("_ck"), e.attr("_reck")];
                    t.forEach(function(e) {
                        if (e) {
                            a.
                        default.getRequest(e)
                        }
                    })
                })
            },
            listCallbackFail: function(t) {
                $("#" + t).remove()
            },
            relationCallback: function(t) {
                var n = this;
                if ($("#module_basic_relation").length) { (0, h.
                default)({
                        imgs:
                        $("#module_basic_relation").find(".lazyImg"),
                        size: 150
                    });
                    this.clickLogSender("#module_basic_relation");
                    $(".tuiguang").each(function() {
                        $(this).click(function() {
                            var e = $(this).attr("thirdClickUrl");
                            var t = new Image;
                            t.src = e
                        })
                    })
                }
                var r = window.setInterval(function() {
                    if (typeof n.trigger === "function") {
                        n.trigger("relationlist:loaded");
                        window.clearInterval(r)
                    }
                },
                10)
            },
            likeShowCallback: function(t) {
                var n = $("#module_basic_relationleft");
                if (n.length) {
                    this.clickLogSender("#module_basic_relationleft"); (0, l.
                default)(n)
                }
            }
        });
        e.exports = y
    },
    122 : function(e, t, n) {
        "use strict";
        function p(e) {
            return e && e.__esModule ? e: {
                "default": e
            }
        }
        var r = n(5);
        var i = p(r);
        var s = n(9);
        var o = p(s);
        var u = n(4);
        var a = p(u);
        var f = n(18);
        var l = p(f);
        var c = n(123);
        var h = p(c);
        var d = i.
    default.extend({
            initialize:
            function() {
                var t = this;
                d.superClass.initialize.call(t);
                this.domain = PageConfig.homeHost;
                t.op = {
                    callbackName: "callback",
                    charset: "utf-8"
                }
            },
            getStatRank: function(t) {
                var n = this;
                o.
            default.getJSON(this.domain + "related/statRank?" + "t=" + (new Date).getTime(), t,
                function(e) {
                    if (e.error == 1) {
                        n.trigger("getStatRank:success", [e])
                    }
                },
                n.op)
            },
            getSubRank: function(t) {
                var n = this;
                $.ajax({
                    type: "get",
                    url: this.domain + "related/subRank?" + "&t=" + (new Date).getTime(),
                    data: t,
                    dataType: "jsonp",
                    success: function(t) {
                        if (t.error == 0) {
                            n.trigger("getSubRank:success", [t])
                        } else {
                            n.trigger("getSubRank:fail", ["module_basic_subrank"])
                        }
                    },
                    error: function(t) {
                        n.trigger("getSubRank:fail", ["module_basic_subrank"])
                    }
                })
            },
            getRelation: function(t) {
                var n = this;
                o.
            default.getJSON("//ykrec.youku.com/show/packed/list.json?t=" + new Date * 1, t,
                function(e) {
                    if (e.e == 0 && e.data.length) {
                        n.setRelationData(e.data);
                        n.trigger("getRelation:sucess", [e])
                    } else {
                        n.trigger("getRelation:fail", ["module_basic_relation"])
                    }
                },
                n.op)
            },
            getRelationLike: function(t) {
                var n = this;
                o.
            default.getJSON("//ykrec.youku.com/show/packed/list.json?t=" + new Date * 1, t,
                function(e) {
                    if (e.e == 0 && e.data.length) {
                        n.setLikeShowData(e.data);
                        n.trigger("getRelationLike:sucess", [e])
                    } else {
                        n.trigger("getRelation:fail", ["module_basic_relationleft"])
                    }
                },
                n.op)
            },
            getInfo: function(t) {
                var n = this;
                $.ajax({
                    type: "get",
                    url: this.domain + "related/info?" + "&t=" + (new Date).getTime(),
                    data: t,
                    dataType: "jsonp",
                    success: function(t) {
                        if (t.error == 0) {
                            n.trigger("getInfo:success", [t])
                        } else {
                            n.trigger("getInfo:fail", ["module_basic_info"])
                        }
                    },
                    error: function(t) {
                        n.trigger("getInfo:fail", ["module_basic_info"])
                    }
                })
            },
            getStar: function(t) {
                var n = this;
                o.
            default.getJSON(this.domain + "related/star?" + "&t=" + (new Date).getTime(), t,
                function(e) {
                    if (e.error == 0) {
                        n.trigger("getStar:success", [e.data])
                    } else {
                        n.trigger("getStar:fail", ["module_basic_star"])
                    }
                },
                n.op)
            },
            getSubInfo: function(t) {
                var n = this;
                $.ajax({
                    type: "get",
                    url: this.domain + "action/sub",
                    data: t,
                    dataType: "jsonp",
                    beforeSend: function(t) {
                        var n = $.trim((0, a.
                    default)("_zpdtk"));
                        if (n) {
                            return t.setRequestHeader("X-CSRF-TOKEN", n)
                        }
                    },
                    success: function(t) {
                        if (t.error == 0) {
                            n.trigger("getSubInfo:success", [t.data])
                        } else {
                            n.trigger("getSubInfo:fail", ["module_basic_sub"])
                        }
                    }
                })
            },
            createSubMtop: function(t) {
                var n = this;
                t.guid = (0, a.
            default)("__ysuid") || "47427125262Ne";
                h.
            default.requestMtop({
                    api:
                    "mtop.tudou.subscribe.relation.RelationServiceMTOP.create",
                    type: "GET",
                    customData: t
                }).then(function(e) {
                    if (e.data && e.data.result) {
                        n.trigger("createSub:success", [])
                    } else {
                        n.trigger("sub:error", [])
                    }
                }).
                catch(function(e) {
                    console.log(e);
                    n.createSub(t)
                })
            },
            createSub: function(t) {
                var n = this;
                $.ajax({
                    type: "get",
                    url: this.domain + "action/createSub",
                    data: t,
                    beforeSend: function(t) {
                        var n = $.trim((0, a.
                    default)("_zpdtk"));
                        if (n) {
                            return t.setRequestHeader("X-CSRF-TOKEN", n)
                        }
                    },
                    success: function(t) {
                        if (t.data) {
                            n.trigger("createSub:success", [])
                        } else {
                            n.trigger("sub:error", [])
                        }
                    }
                })
            },
            destroySubMtop: function(t) {
                var n = this;
                t.guid = (0, a.
            default)("__ysuid") || "47427125262Ne";
                h.
            default.requestMtop({
                    api:
                    "mtop.tudou.subscribe.relation.RelationServiceMTOP.destroy",
                    type: "GET",
                    customData: t
                }).then(function(e) {
                    if (e.data && e.data.result) {
                        n.trigger("destroySub:success", [])
                    } else {
                        n.trigger("sub:error", [])
                    }
                }).
                catch(function(e) {
                    console.log(e);
                    n.createSub(t)
                })
            },
            destroySub: function(t) {
                var n = this;
                $.ajax({
                    type: "get",
                    url: this.domain + "action/destroySub",
                    data: t,
                    beforeSend: function(t) {
                        var n = $.trim((0, a.
                    default)("_zpdtk"));
                        if (n) {
                            return t.setRequestHeader("X-CSRF-TOKEN", n)
                        }
                    },
                    success: function(t) {
                        if (t.data) {
                            n.trigger("destroySub:success", [])
                        } else {
                            n.trigger("sub:error", [])
                        }
                    }
                })
            },
            setRelationData: function(t) {
                function n(e) {
                    var t = 0;
                    var n = e % 60;
                    var t = Math.floor(e / 60);
                    if (t <= 9) {
                        t = "0" + t
                    }
                    if (n <= 9) {
                        n = "0" + n
                    }
                    return t + ":" + n
                }
                if (t) {
                    for (var r = 0,
                    i = t.length; r < i; r++) {
                        var s = "";
                        var o = "";
                        if (typeof t[r].playLink === "undefined") {
                            if (t[r].type == 1) {
                                s = PageConfig.homeHost + "v_show/id_" + t[r].codeId + ".html"
                            } else if (t[r].type == 2) {
                                s = PageConfig.youku_homeurl + "show_page/id_" + t[r].codeId + ".html"
                            }
                        } else {
                            s = t[r].playLink
                        }
                        t[r].videoUrl = s;
                        if (t[r].totalTime) {
                            o = l.
                        default.beautyTime(t[r].totalTime)
                        }
                        t[r].mm = t[r].mm || 0;
                        if (t[r].totalTime) {
                            t[r].videoTime = o
                        }
                        if (t[r].thirdDisplayUrl != undefined && t[r].thirdClickUrl != undefined) {
                            var u = t[r].thirdDisplayUrl;
                            var a = new Image;
                            a.src = u
                        }
                    }
                }
            },
            setLikeShowData: function(t) {
                var t = t,
                n = "",
                r = "",
                i = "",
                s = "";
                if (t) {
                    for (var o = 0,
                    u = t.length; o < u; o++) {
                        if (typeof t[o].playLink === "undefined") {
                            if (t[o].type == 1) {
                                n = PageConfig.homeHost + "v_show/id_" + t[o].codeId + ".html"
                            } else if (t[o].type == 2) {
                                n = PageConfig.youku_homeurl + "show_page/id_" + t[o].codeId + ".html"
                            }
                        } else {
                            n = t[o].playLink
                        }
                        r = t[o].title;
                        if (t[o].type == 9) {
                            if (r.length > 19) r = r.substring(0, 19) + "..."
                        } else {
                            if (r.length > 19) r = r.substring(0, 19) + "..."
                        }
                        var i = t[o].mm || 0;
                        if (typeof t[o].vPicUrl === "undefined") {
                            s = t[o].picUrl
                        } else {
                            s = t[o].vPicUrl
                        }
                        t[o].videoUrl = n;
                        t[o].title = r;
                        t[o].mm = i;
                        t[o].picUrl = s
                    }
                }
            }
        });
        e.exports = d
    },
    123 : function(e, t, n) {
        "use strict";
        function r(e) {
            return e && typeof e === "object" && "default" in e ? e["default"] : e
        }
        var i = r(n(124));
        var s = {
            daily: 4272,
            pre: 24679788,
            release: 24679788
        };
        var o = {
            daily: "daily-acs",
            pre: "pre-acs",
            release: "acs"
        };
        var u = {
            requestMtop: function() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var n = "";
                if (t.customData) {
                    n = t.customData
                } else {
                    n = {
                        bizType: t.bizType,
                        bizParam: JSON.stringify(t.bizParam) || ""
                    }
                }
                if (t.asac) {
                    t.isSec = 1 || t.isSec;
                    n.asac = t.asac
                }
                t.ua ? n.ua = t.ua: "";
                if (/weakGet/i.test(t.api)) {
                    t.ecode = 0
                } else {
                    t.ecode = 1
                }
                i.config.subDomain = "";
                i.config.mainDomain = "youku.com";
                i.config.prefix = o[t.DEV] || o.release;
                if (t.debug === 1) {
                    alert(JSON.stringify(i.config) + ";key=" + s[t.DEV])
                }
                var r = {
                    api: t.api,
                    v: "1.0",
                    ecode: t.ecode,
                    appKey: s[t.DEV] || s.release,
                    type: t.type || "get",
                    isSec: t.isSec || 0,
                    dataType: "jsonp",
                    timeout: t.timeout || 1e4,
                    data: n
                };
                if (t.H5Request) {
                    r.H5Request = true
                }
                var u = i.request(r, t.success, t.error);
                return u
            },
            sameMtop: function() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var n = {
                    requestStr: JSON.stringify(t.data)
                };
                i.config.subDomain = "";
                i.config.mainDomain = "youku.com";
                i.config.prefix = o[t.DEV] || o.release;
                var r = {
                    api: t.api,
                    ecode: 0,
                    type: t.type || "GET",
                    dataType: "jsonp",
                    v: "1.0",
                    appKey: s[t.DEV] || s.release,
                    data: n
                };
                if (t.H5Request) {
                    r.H5Request = true
                }
                var u = i.request(r);
                return u
            }
        };
        e.exports = u
    },
    124 : function(e, t) {
        typeof window === "undefined" && (window = {
            ctrl: {},
            lib: {}
        }); ! window.ctrl && (window.ctrl = {}); ! window.lib && (window.lib = {}); !
        function(e, t) {
            function n() {
                var e = {},
                t = new v(function(t, n) {
                    e.resolve = t,
                    e.reject = n
                });
                return e.promise = t,
                e
            }
            function r(e, t) {
                for (var n in t) void 0 === e[n] && (e[n] = t[n]);
                return e
            }
            function i(e) {
                var t = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0] || document.firstElementChild || document;
                t.appendChild(e)
            }
            function s(e) {
                var t = [];
                for (var n in e) e[n] && t.push(n + "=" + encodeURIComponent(e[n]));
                return t.join("&")
            }
            function o(e) {
                try {
                    return e.toLowerCase().indexOf("lazada") > -1 && ".com" !== e.substring(e.lastIndexOf(".")) ? (e.split(".") || []).length <= 3 ? e: e.split(".").slice(1).join(".") : e.substring(e.lastIndexOf(".", e.lastIndexOf(".") - 1) + 1)
                } catch(t) {
                    return e.substring(e.lastIndexOf(".", e.lastIndexOf(".") - 1) + 1)
                }
            }
            function u(e) {
                function t(e, t) {
                    return e << t | e >>> 32 - t
                }
                function n(e, t) {
                    var n, r, i, s, o;
                    return i = 2147483648 & e,
                    s = 2147483648 & t,
                    n = 1073741824 & e,
                    r = 1073741824 & t,
                    o = (1073741823 & e) + (1073741823 & t),
                    n & r ? 2147483648 ^ o ^ i ^ s: n | r ? 1073741824 & o ? 3221225472 ^ o ^ i ^ s: 1073741824 ^ o ^ i ^ s: o ^ i ^ s
                }
                function r(e, t, n) {
                    return e & t | ~e & n
                }
                function i(e, t, n) {
                    return e & n | t & ~n
                }
                function s(e, t, n) {
                    return e ^ t ^ n
                }
                function o(e, t, n) {
                    return t ^ (e | ~n)
                }
                function u(e, i, s, o, u, a, f) {
                    return e = n(e, n(n(r(i, s, o), u), f)),
                    n(t(e, a), i)
                }
                function a(e, r, s, o, u, a, f) {
                    return e = n(e, n(n(i(r, s, o), u), f)),
                    n(t(e, a), r)
                }
                function f(e, r, i, o, u, a, f) {
                    return e = n(e, n(n(s(r, i, o), u), f)),
                    n(t(e, a), r)
                }
                function l(e, r, i, s, u, a, f) {
                    return e = n(e, n(n(o(r, i, s), u), f)),
                    n(t(e, a), r)
                }
                function c(e) {
                    for (var t, n = e.length,
                    r = n + 8,
                    i = (r - r % 64) / 64, s = 16 * (i + 1), o = new Array(s - 1), u = 0, a = 0; n > a;) t = (a - a % 4) / 4,
                    u = a % 4 * 8,
                    o[t] = o[t] | e.charCodeAt(a) << u,
                    a++;
                    return t = (a - a % 4) / 4,
                    u = a % 4 * 8,
                    o[t] = o[t] | 128 << u,
                    o[s - 2] = n << 3,
                    o[s - 1] = n >>> 29,
                    o
                }
                function h(e) {
                    var t, n, r = "",
                    i = "";
                    for (n = 0; 3 >= n; n++) t = e >>> 8 * n & 255,
                    i = "0" + t.toString(16),
                    r += i.substr(i.length - 2, 2);
                    return r
                }
                function p(e) {
                    e = e.replace(/\r\n/g, "\n");
                    for (var t = "",
                    n = 0; n < e.length; n++) {
                        var r = e.charCodeAt(n);
                        128 > r ? t += String.fromCharCode(r) : r > 127 && 2048 > r ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128))
                    }
                    return t
                }
                var d, v, m, g, y, b, w, E, S, x = [],
                T = 7,
                N = 12,
                C = 17,
                k = 22,
                L = 5,
                A = 9,
                O = 14,
                M = 20,
                _ = 4,
                D = 11,
                P = 16,
                H = 23,
                B = 6,
                j = 10,
                F = 15,
                I = 21;
                for (e = p(e), x = c(e), b = 1732584193, w = 4023233417, E = 2562383102, S = 271733878, d = 0; d < x.length; d += 16) v = b,
                m = w,
                g = E,
                y = S,
                b = u(b, w, E, S, x[d + 0], T, 3614090360),
                S = u(S, b, w, E, x[d + 1], N, 3905402710),
                E = u(E, S, b, w, x[d + 2], C, 606105819),
                w = u(w, E, S, b, x[d + 3], k, 3250441966),
                b = u(b, w, E, S, x[d + 4], T, 4118548399),
                S = u(S, b, w, E, x[d + 5], N, 1200080426),
                E = u(E, S, b, w, x[d + 6], C, 2821735955),
                w = u(w, E, S, b, x[d + 7], k, 4249261313),
                b = u(b, w, E, S, x[d + 8], T, 1770035416),
                S = u(S, b, w, E, x[d + 9], N, 2336552879),
                E = u(E, S, b, w, x[d + 10], C, 4294925233),
                w = u(w, E, S, b, x[d + 11], k, 2304563134),
                b = u(b, w, E, S, x[d + 12], T, 1804603682),
                S = u(S, b, w, E, x[d + 13], N, 4254626195),
                E = u(E, S, b, w, x[d + 14], C, 2792965006),
                w = u(w, E, S, b, x[d + 15], k, 1236535329),
                b = a(b, w, E, S, x[d + 1], L, 4129170786),
                S = a(S, b, w, E, x[d + 6], A, 3225465664),
                E = a(E, S, b, w, x[d + 11], O, 643717713),
                w = a(w, E, S, b, x[d + 0], M, 3921069994),
                b = a(b, w, E, S, x[d + 5], L, 3593408605),
                S = a(S, b, w, E, x[d + 10], A, 38016083),
                E = a(E, S, b, w, x[d + 15], O, 3634488961),
                w = a(w, E, S, b, x[d + 4], M, 3889429448),
                b = a(b, w, E, S, x[d + 9], L, 568446438),
                S = a(S, b, w, E, x[d + 14], A, 3275163606),
                E = a(E, S, b, w, x[d + 3], O, 4107603335),
                w = a(w, E, S, b, x[d + 8], M, 1163531501),
                b = a(b, w, E, S, x[d + 13], L, 2850285829),
                S = a(S, b, w, E, x[d + 2], A, 4243563512),
                E = a(E, S, b, w, x[d + 7], O, 1735328473),
                w = a(w, E, S, b, x[d + 12], M, 2368359562),
                b = f(b, w, E, S, x[d + 5], _, 4294588738),
                S = f(S, b, w, E, x[d + 8], D, 2272392833),
                E = f(E, S, b, w, x[d + 11], P, 1839030562),
                w = f(w, E, S, b, x[d + 14], H, 4259657740),
                b = f(b, w, E, S, x[d + 1], _, 2763975236),
                S = f(S, b, w, E, x[d + 4], D, 1272893353),
                E = f(E, S, b, w, x[d + 7], P, 4139469664),
                w = f(w, E, S, b, x[d + 10], H, 3200236656),
                b = f(b, w, E, S, x[d + 13], _, 681279174),
                S = f(S, b, w, E, x[d + 0], D, 3936430074),
                E = f(E, S, b, w, x[d + 3], P, 3572445317),
                w = f(w, E, S, b, x[d + 6], H, 76029189),
                b = f(b, w, E, S, x[d + 9], _, 3654602809),
                S = f(S, b, w, E, x[d + 12], D, 3873151461),
                E = f(E, S, b, w, x[d + 15], P, 530742520),
                w = f(w, E, S, b, x[d + 2], H, 3299628645),
                b = l(b, w, E, S, x[d + 0], B, 4096336452),
                S = l(S, b, w, E, x[d + 7], j, 1126891415),
                E = l(E, S, b, w, x[d + 14], F, 2878612391),
                w = l(w, E, S, b, x[d + 5], I, 4237533241),
                b = l(b, w, E, S, x[d + 12], B, 1700485571),
                S = l(S, b, w, E, x[d + 3], j, 2399980690),
                E = l(E, S, b, w, x[d + 10], F, 4293915773),
                w = l(w, E, S, b, x[d + 1], I, 2240044497),
                b = l(b, w, E, S, x[d + 8], B, 1873313359),
                S = l(S, b, w, E, x[d + 15], j, 4264355552),
                E = l(E, S, b, w, x[d + 6], F, 2734768916),
                w = l(w, E, S, b, x[d + 13], I, 1309151649),
                b = l(b, w, E, S, x[d + 4], B, 4149444226),
                S = l(S, b, w, E, x[d + 11], j, 3174756917),
                E = l(E, S, b, w, x[d + 2], F, 718787259),
                w = l(w, E, S, b, x[d + 9], I, 3951481745),
                b = n(b, v),
                w = n(w, m),
                E = n(E, g),
                S = n(S, y);
                var q = h(b) + h(w) + h(E) + h(S);
                return q.toLowerCase()
            }
            function a(e) {
                return "[object Object]" == {}.toString.call(e)
            }
            function f(e, t, n) {
                var r = n || {};
                document.cookie = e.replace(/[^+#$&^`|]/g, encodeURIComponent).replace("(", "%28").replace(")", "%29") + "=" + t.replace(/[^+#$&\/:<-\[\]-}]/g, encodeURIComponent) + (r.domain ? ";domain=" + r.domain: "") + (r.path ? ";path=" + r.path: "") + (r.secure ? ";secure": "") + (r.httponly ? ";HttpOnly": "")
            }
            function l(e) {
                var t = (new RegExp("(?:^|;\\s*)" + e + "\\=([^;]+)(?:;\\s*|$)")).exec(document.cookie);
                return t ? t[1] : void 0
            }
            function c(e, t, n) {
                var r = new Date;
                r.setTime(r.getTime() - 864e5);
                var i = "/";
                document.cookie = e + "=;path=" + i + ";domain=." + t + ";expires=" + r.toGMTString(),
                document.cookie = e + "=;path=" + i + ";domain=." + n + "." + t + ";expires=" + r.toGMTString()
            }
            function h() {
                var t = e.location.hostname;
                if (!t) {
                    var n = e.parent.location.hostname;
                    n && ~n.indexOf("zebra.alibaba-inc.com") && (t = n)
                }
                var r = ["taobao.net", "taobao.com", "tmall.com", "tmall.hk", "alibaba-inc.com"],
                i = new RegExp("([^.]*?)\\.?((?:" + r.join(")|(?:").replace(/\./g, "\\.") + "))", "i"),
                s = t.match(i) || [],
                o = s[2] || "taobao.com",
                u = s[1] || "m";
                "taobao.net" !== o || "x" !== u && "waptest" !== u && "daily" !== u ? "taobao.net" === o && "demo" === u ? u = "demo": "alibaba-inc.com" === o && "zebra" === u ? u = "zebra": "waptest" !== u && "wapa" !== u && "m" !== u && (u = "m") : u = "waptest";
                var a = "h5api";
                "taobao.net" === o && "waptest" === u && (a = "acs"),
                g.mainDomain = o,
                g.subDomain = u,
                g.prefix = a
            }
            function p() {
                var t = e.navigator.userAgent,
                n = t.match(/WindVane[\/\s]([\d\.\_]+)/);
                n && (g.WindVaneVersion = n[1]);
                var r = t.match(/AliApp\(([^\/]+)\/([\d\.\_]+)\)/i);
                r && (g.AliAppName = r[1], g.AliAppVersion = r[2])
            }
            function d(e) {
                this.id = "" + (new Date).getTime() + ++E,
                this.params = r(e || {},
                {
                    v: "*",
                    data: {},
                    type: "get",
                    dataType: "jsonp"
                }),
                this.params.type = this.params.type.toLowerCase(),
                "object" == typeof this.params.data && (this.params.data = JSON.stringify(this.params.data)),
                this.middlewares = y.slice(0)
            }
            var v = e.Promise,
            m = (v || {
                resolve: function() {
                    return void 0
                }
            }).resolve();
            String.prototype.trim || (String.prototype.trim = function() {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            });
            var g = {
                useJsonpResultType: !1,
                safariGoLogin: !0,
                useAlipayJSBridge: !1
            },
            y = [],
            b = {
                ERROR: -1,
                SUCCESS: 0,
                TOKEN_EXPIRED: 1,
                SESSION_EXPIRED: 2
            };
            h(),
            p();
            var w = "AP" === g.AliAppName && parseFloat(g.AliAppVersion) >= 10.1;
            w && 10.1 === parseFloat(g.AliAppVersion) && parseInt(g.AliAppVersion.substr(5)) < 2 && (w = !1);
            var E = 0,
            S = "2.5.1";
            d.prototype.use = function(e) {
                if (!e) throw new Error("middleware is undefined");
                return this.middlewares.push(e),
                this
            },
            d.prototype.__processRequestMethod = function(e) {
                var t = this.params,
                n = this.options;
                "get" === t.type && "jsonp" === t.dataType ? n.getJSONP = !0 : "get" === t.type && "originaljsonp" === t.dataType ? n.getOriginalJSONP = !0 : "get" === t.type && "json" === t.dataType ? n.getJSON = !0 : "post" === t.type && (n.postJSON = !0),
                e()
            },
            d.prototype.__processRequestType = function(n) {
                var r = this,
                i = this.params,
                s = this.options;
                if (g.H5Request === !0 && (s.H5Request = !0), g.WindVaneRequest === !0 && (s.WindVaneRequest = !0), s.H5Request === !1 && s.WindVaneRequest === !0) {
                    if (!w && (!t.windvane || parseFloat(s.WindVaneVersion) < 5.4)) throw new Error("WINDVANE_NOT_FOUND::缺少WindVane环境");
                    if (w && !e.AlipayJSBridge) throw new Error("ALIPAY_NOT_READY::支付宝通道未准备好，支付宝请见 https://lark.alipay.com/mtbsdkdocs/mtopjssdkdocs/pucq6z")
                } else if (s.H5Request === !0) s.WindVaneRequest = !1;
                else if ("undefined" == typeof s.WindVaneRequest && "undefined" == typeof s.H5Request && (t.windvane && parseFloat(s.WindVaneVersion) >= 5.4 ? (s.WindVaneRequest = !0, window.self !== window.top && (s.H5Request = !0)) : s.H5Request = !0, w)) if (s.WindVaneRequest = s.H5Request = void 0, e.AlipayJSBridge) if (a(i.data)) s.WindVaneRequest = !0;
                else try {
                    a(JSON.parse(i.data)) ? s.WindVaneRequest = !0 : s.H5Request = !0
                } catch(o) {
                    s.H5Request = !0
                } else s.H5Request = !0;
                var u = e.navigator.userAgent.toLowerCase();
                return u.indexOf("youku") > -1 && s.mainDomain.indexOf("youku.com") < 0 && (s.WindVaneRequest = !1, s.H5Request = !0),
                s.mainDomain.indexOf("youku.com") > -1 && u.indexOf("youku") < 0 && (s.WindVaneRequest = !1, s.H5Request = !0),
                n ? n().then(function() {
                    var e = s.retJson.ret;
                    if (e instanceof Array && (e = e.join(",")), s.WindVaneRequest === !0 && w && s.retJson.error || !e || e.indexOf("PARAM_PARSE_ERROR") > -1 || e.indexOf("HY_FAILED") > -1 || e.indexOf("HY_NO_HANDLER") > -1 || e.indexOf("HY_CLOSED") > -1 || e.indexOf("HY_EXCEPTION") > -1 || e.indexOf("HY_NO_PERMISSION") > -1) {
                        if (!w || !isNaN(s.retJson.error) || -1 !== s.retJson.error.indexOf("FAIL_SYS_ACCESS_DENIED")) return w && a(i.data) && (i.data = JSON.stringify(i.data)),
                        g.H5Request = !0,
                        r.__sequence([r.__processRequestType, r.__processToken, r.__processRequestUrl, r.middlewares, r.__processRequest]);
                        "undefined" == typeof s.retJson.api && "undefined" == typeof s.retJson.v && (s.retJson.api = i.api, s.retJson.v = i.v, s.retJson.ret = [s.retJson.error + "::" + s.retJson.errorMessage], s.retJson.data = {})
                    }
                }) : void 0
            };
            var x = "_m_h5_c",
            T = "_m_h5_tk",
            N = "_m_h5_tk_enc";
            d.prototype.__getTokenFromAlipay = function() {
                var t = n(),
                r = this.options,
                i = (e.navigator.userAgent, !!location.protocol.match(/^https?\:$/));
                return r.useAlipayJSBridge === !0 && !i && w && e.AlipayJSBridge && e.AlipayJSBridge.call ? e.AlipayJSBridge.call("getMtopToken",
                function(e) {
                    e && e.token && (r.token = e.token),
                    t.resolve()
                },
                function() {
                    t.resolve()
                }) : t.resolve(),
                t.promise
            },
            d.prototype.__getTokenFromCookie = function() {
                var e = this.options;
                return e.CDR && l(x) ? e.token = l(x).split(";")[0] : e.token = e.token || l(T),
                e.token && (e.token = e.token.split("_")[0]),
                v.resolve()
            },
            d.prototype.__waitWKWebViewCookie = function(t) {
                var n = this.options;
                n.waitWKWebViewCookieFn && n.H5Request && e.webkit && e.webkit.messageHandlers ? n.waitWKWebViewCookieFn(t) : t()
            },
            d.prototype.__processToken = function(e) {
                var t = this,
                n = this.options;
                this.params;
                return n.token && delete n.token,
                n.WindVaneRequest !== !0 ? m.then(function() {
                    return t.__getTokenFromAlipay()
                }).then(function() {
                    return t.__getTokenFromCookie()
                }).then(e).then(function() {
                    var e = n.retJson,
                    r = e.ret;
                    if (r instanceof Array && (r = r.join(",")), r.indexOf("TOKEN_EMPTY") > -1 || (n.CDR === !0 || n.syncCookieMode === !0) && r.indexOf("ILLEGAL_ACCESS") > -1 || r.indexOf("TOKEN_EXOIRED") > -1) {
                        if (n.maxRetryTimes = n.maxRetryTimes || 5, n.failTimes = n.failTimes || 0, n.H5Request && ++n.failTimes < n.maxRetryTimes) {
                            var i = [t.__waitWKWebViewCookie, t.__processToken, t.__processRequestUrl, t.middlewares, t.__processRequest];
                            if (n.syncCookieMode === !0 && t.constructor.__cookieProcessorId !== t.id) if (t.constructor.__cookieProcessor) {
                                var s = function(e) {
                                    var n = function() {
                                        t.constructor.__cookieProcessor = null,
                                        t.constructor.__cookieProcessorId = null,
                                        e()
                                    };
                                    t.constructor.__cookieProcessor ? t.constructor.__cookieProcessor.then(n)["catch"](n) : e()
                                };
                                i = [s, t.__waitWKWebViewCookie, t.__processToken, t.__processRequestUrl, t.middlewares, t.__processRequest]
                            } else t.constructor.__cookieProcessor = t.__requestProcessor,
                            t.constructor.__cookieProcessorId = t.id;
                            return t.__sequence(i)
                        }
                        n.maxRetryTimes > 0 && (c(x, n.pageDomain, "*"), c(T, n.mainDomain, n.subDomain), c(N, n.mainDomain, n.subDomain)),
                        e.retType = b.TOKEN_EXPIRED
                    }
                }) : void e()
            },
            d.prototype.__processRequestUrl = function(t) {
                var n = this.params,
                r = this.options;
                if (r.hostSetting && r.hostSetting[e.location.hostname]) {
                    var i = r.hostSetting[e.location.hostname];
                    i.prefix && (r.prefix = i.prefix),
                    i.subDomain && (r.subDomain = i.subDomain),
                    i.mainDomain && (r.mainDomain = i.mainDomain)
                }
                if (r.H5Request === !0) {
                    var s = "//" + (r.prefix ? r.prefix + ".": "") + (r.subDomain ? r.subDomain + ".": "") + r.mainDomain + "/h5/" + n.api.toLowerCase() + "/" + n.v.toLowerCase() + "/",
                    o = n.appKey || ("waptest" === r.subDomain ? "4272": "12574478"),
                    a = (new Date).getTime(),
                    f = u(r.token + "&" + a + "&" + o + "&" + n.data),
                    l = {
                        jsv: S,
                        appKey: o,
                        t: a,
                        sign: f
                    },
                    c = {
                        data: n.data,
                        ua: n.ua
                    };
                    Object.keys(n).forEach(function(e) {
                        "undefined" == typeof l[e] && "undefined" == typeof c[e] && "headers" !== e && "ext_headers" !== e && "ext_querys" !== e && (l[e] = n[e])
                    }),
                    n.ext_querys && Object.keys(n.ext_querys).forEach(function(e) {
                        l[e] = n.ext_querys[e]
                    }),
                    r.getJSONP ? l.type = "jsonp": r.getOriginalJSONP ? l.type = "originaljsonp": (r.getJSON || r.postJSON) && (l.type = "originaljson"),
                    "undefined" != typeof n.valueType && ("original" === n.valueType ? r.getJSONP || r.getOriginalJSONP ? l.type = "originaljsonp": (r.getJSON || r.postJSON) && (l.type = "originaljson") : "string" === n.valueType && (r.getJSONP || r.getOriginalJSONP ? l.type = "jsonp": (r.getJSON || r.postJSON) && (l.type = "json"))),
                    r.useJsonpResultType === !0 && "originaljson" === l.type && delete l.type,
                    r.dangerouslySetProtocol && (s = r.dangerouslySetProtocol + ":" + s),
                    r.querystring = l,
                    r.postdata = c,
                    r.path = s
                }
                t()
            },
            d.prototype.__processUnitPrefix = function(e) {
                e()
            };
            var C = 0;
            d.prototype.__requestJSONP = function(e) {
                function t(e) {
                    if (l && clearTimeout(l), c.parentNode && c.parentNode.removeChild(c), "TIMEOUT" === e) window[f] = function() {
                        window[f] = void 0;
                        try {
                            delete window[f]
                        } catch(e) {}
                    };
                    else {
                        window[f] = void 0;
                        try {
                            delete window[f]
                        } catch(t) {}
                    }
                }
                var r = n(),
                o = this.params,
                u = this.options,
                a = o.timeout || 2e4,
                f = "mtopjsonp" + (o.jsonpIncPrefix || "") + ++C,
                l = setTimeout(function() {
                    e(u.timeoutErrMsg || "TIMEOUT::接口超时"),
                    t("TIMEOUT")
                },
                a);
                u.querystring.callback = f;
                var c = document.createElement("script");
                return c.src = u.path + "?" + s(u.querystring) + "&" + s(u.postdata),
                c.async = !0,
                c.onerror = function() {
                    t("ABORT"),
                    e(u.abortErrMsg || "ABORT::接口异常退出")
                },
                window[f] = function() {
                    u.results = Array.prototype.slice.call(arguments),
                    t(),
                    r.resolve()
                },
                i(c),
                r.promise
            },
            d.prototype.__requestJSON = function(t) {
                function r(e) {
                    c && clearTimeout(c),
                    "TIMEOUT" === e && a.abort()
                }
                var i = n(),
                o = this.params,
                u = this.options,
                a = new e.XMLHttpRequest,
                f = o.timeout || 2e4,
                c = setTimeout(function() {
                    t(u.timeoutErrMsg || "TIMEOUT::接口超时"),
                    r("TIMEOUT")
                },
                f);
                u.CDR && l(x) && (u.querystring.c = decodeURIComponent(l(x))),
                a.onreadystatechange = function() {
                    if (4 == a.readyState) {
                        var e, n, s = a.status;
                        if (s >= 200 && 300 > s || 304 == s) {
                            r(),
                            e = a.responseText,
                            n = a.getAllResponseHeaders() || "";
                            try {
                                e = /^\s*$/.test(e) ? {}: JSON.parse(e),
                                e.responseHeaders = n,
                                u.results = [e],
                                i.resolve()
                            } catch(o) {
                                t("PARSE_JSON_ERROR::解析JSON失败")
                            }
                        } else r("ABORT"),
                        t(u.abortErrMsg || "ABORT::接口异常退出")
                    }
                };
                var h, p, d = u.path + "?" + s(u.querystring);
                u.getJSON ? (h = "GET", d += "&" + s(u.postdata)) : u.postJSON && (h = "POST", p = s(u.postdata)),
                a.open(h, d, !0),
                a.withCredentials = !0,
                a.setRequestHeader("Accept", "application/json"),
                a.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                var v = o.ext_headers || o.headers;
                if (v) for (var m in v) a.setRequestHeader(m, v[m]);
                return a.send(p),
                i.promise
            },
            d.prototype.__requestWindVane = function(e) {
                function r(e) {
                    o.results = [e],
                    i.resolve()
                }
                var i = n(),
                s = this.params,
                o = this.options,
                u = s.data,
                a = s.api,
                f = s.v,
                l = o.postJSON ? 1 : 0,
                c = o.getJSON || o.postJSON || o.getOriginalJSONP ? "originaljson": "";
                "undefined" != typeof s.valueType && ("original" === s.valueType ? c = "originaljson": "string" === s.valueType && (c = "")),
                o.useJsonpResultType === !0 && (c = "");
                var h, p, d = "https" === location.protocol ? 1 : 0,
                v = s.isSec || 0,
                m = s.sessionOption || "AutoLoginOnly",
                g = s.ecode || 0,
                y = s.ext_headers || {},
                b = s.ext_querys || {};
                y.referer = location.href,
                p = "undefined" != typeof s.timer ? parseInt(s.timer) : "undefined" != typeof s.timeout ? parseInt(s.timeout) : 2e4,
                h = 2 * p,
                s.needLogin === !0 && "undefined" == typeof s.sessionOption && (m = "AutoLoginAndManualLogin"),
                "undefined" != typeof s.secType && "undefined" == typeof s.isSec && (v = s.secType);
                var w = {
                    api: a,
                    v: f,
                    post: String(l),
                    type: c,
                    isHttps: String(d),
                    ecode: String(g),
                    isSec: String(v),
                    param: JSON.parse(u),
                    timer: p,
                    sessionOption: m,
                    ext_headers: y,
                    ext_querys: b
                };
                return s.ttid && o.dangerouslySetWVTtid === !0 && (w.ttid = s.ttid),
                Object.assign && s.dangerouslySetWindvaneParams && Object.assign(w, s.dangerouslySetWindvaneParams),
                t.windvane.call("MtopWVPlugin", "send", w, r, r, h),
                i.promise
            },
            d.prototype.__requestAlipay = function(t) {
                function r(e) {
                    o.results = [e],
                    i.resolve()
                }
                var i = n(),
                s = this.params,
                o = this.options,
                u = {
                    apiName: s.api,
                    apiVersion: s.v,
                    needEcodeSign: "1" === String(s.ecode),
                    usePost: !!o.postJSON
                };
                return a(s.data) || (s.data = JSON.parse(s.data)),
                u.data = s.data,
                s.ttid && o.dangerouslySetWVTtid === !0 && (u.ttid = s.ttid),
                (o.getJSON || o.postJSON || o.getOriginalJSONP) && (u.type = "originaljson"),
                "undefined" != typeof s.valueType && ("original" === s.valueType ? u.type = "originaljson": "string" === s.valueType && delete u.type),
                o.useJsonpResultType === !0 && delete u.type,
                Object.assign && s.dangerouslySetAlipayParams && Object.assign(u, s.dangerouslySetAlipayParams),
                e.AlipayJSBridge.call("mtop", u, r),
                i.promise
            },
            d.prototype.__processRequest = function(e, t) {
                var n = this;
                return m.then(function() {
                    var e = n.options;
                    if (e.H5Request && (e.getJSONP || e.getOriginalJSONP)) return n.__requestJSONP(t);
                    if (e.H5Request && (e.getJSON || e.postJSON)) return n.__requestJSON(t);
                    if (e.WindVaneRequest) return w ? n.__requestAlipay(t) : n.__requestWindVane(t);
                    throw new Error("UNEXCEPT_REQUEST::错误的请求类型")
                }).then(e).then(function() {
                    var e = n.options,
                    t = (n.params, e.results[0]),
                    r = t && t.ret || [];
                    t.ret = r,
                    r instanceof Array && (r = r.join(","));
                    var i = t.c;
                    e.CDR && i && f(x, i, {
                        domain: e.pageDomain,
                        path: "/"
                    }),
                    r.indexOf("SUCCESS") > -1 ? t.retType = b.SUCCESS: t.retType = b.ERROR,
                    e.retJson = t
                })
            },
            d.prototype.__sequence = function(e) {
                function t(e) {
                    if (e instanceof Array) e.forEach(t);
                    else {
                        var o, u = n(),
                        a = n();
                        i.push(function() {
                            return u = n(),
                            o = e.call(r,
                            function(e) {
                                return u.resolve(e),
                                a.promise
                            },
                            function(e) {
                                return u.reject(e),
                                a.promise
                            }),
                            o && (o = o["catch"](function(e) {
                                u.reject(e)
                            })),
                            u.promise
                        }),
                        s.push(function(e) {
                            return a.resolve(e),
                            o
                        })
                    }
                }
                var r = this,
                i = [],
                s = [];
                e.forEach(t);
                for (var o, u = m; o = i.shift();) u = u.then(o);
                for (; o = s.pop();) u = u.then(o);
                return u
            };
            var k = function(e) {
                e()
            },
            L = function(e) {
                e()
            };
            d.prototype.request = function(n) {
                var i = this;
                if (this.options = r(n || {},
                g), !v) {
                    var s = "当前浏览器不支持Promise，请在windows对象上挂载Promise对象";
                    throw t.mtop = {
                        ERROR: s
                    },
                    new Error(s)
                }
                var u = v.resolve([k, L]).then(function(e) {
                    var t = e[0],
                    n = e[1];
                    return i.__sequence([t, i.__processRequestMethod, i.__processRequestType, i.__processToken, i.__processRequestUrl, i.middlewares, i.__processRequest, n])
                }).then(function() {
                    var e = i.options.retJson;
                    return e.retType !== b.SUCCESS ? v.reject(e) : i.options.successCallback ? void i.options.successCallback(e) : v.resolve(e)
                })["catch"](function(e) {
                    var n;
                    return e instanceof Error ? (console.error(e.stack), n = {
                        ret: [e.message],
                        stack: [e.stack],
                        retJson: b.ERROR
                    }) : n = "string" == typeof e ? {
                        ret: [e],
                        retJson: b.ERROR
                    }: void 0 !== e ? e: i.options.retJson,
                    t.mtop.errorListener && t.mtop.errorListener({
                        api: i.params.api,
                        v: i.params.v,
                        retJson: n
                    }),
                    i.options.failureCallback ? void i.options.failureCallback(n) : v.reject(n)
                });
                return this.__processRequestType(),
                i.options.H5Request && (i.constructor.__firstProcessor || (i.constructor.__firstProcessor = u), k = function(e) {
                    i.constructor.__firstProcessor.then(e)["catch"](e)
                }),
                ("get" === this.params.type && "json" === this.params.dataType || "post" === this.params.type) && (n.pageDomain = n.pageDomain || o(e.location.hostname), n.mainDomain !== n.pageDomain && (n.maxRetryTimes = 4, n.CDR = !0)),
                this.__requestProcessor = u,
                u
            },
            t.mtop = function(e) {
                return new d(e)
            },
            t.mtop.request = function(e, t, n) {
                var r = {
                    H5Request: e.H5Request,
                    WindVaneRequest: e.WindVaneRequest,
                    LoginRequest: e.LoginRequest,
                    AntiCreep: e.AntiCreep,
                    AntiFlood: e.AntiFlood,
                    successCallback: t,
                    failureCallback: n || t
                };
                return (new d(e)).request(r)
            },
            t.mtop.H5Request = function(e, t, n) {
                var r = {
                    H5Request: !0,
                    successCallback: t,
                    failureCallback: n || t
                };
                return (new d(e)).request(r)
            },
            t.mtop.middlewares = y,
            t.mtop.config = g,
            t.mtop.RESPONSE_TYPE = b,
            t.mtop.CLASS = d
        } (window, window.lib || (window.lib = {})),
        function(e, t) {
            function n(e) {
                return e.preventDefault(),
                !1
            }
            function r(e) {
                var t = (new RegExp("(?:^|;\\s*)" + e + "\\=([^;]+)(?:;\\s*|$)")).exec(document.cookie);
                return t ? t[1] : void 0
            }
            function i(t, r) {
                var i = this,
                s = e.dpr || 1,
                o = document.createElement("div"),
                u = document.documentElement.getBoundingClientRect(),
                a = Math.max(u.width, window.innerWidth) / s,
                f = Math.max(u.height, window.innerHeight) / s;
                o.style.cssText = ["-webkit-transform:scale(" + s + ") translateZ(0)", "-ms-transform:scale(" + s + ") translateZ(0)", "transform:scale(" + s + ") translateZ(0)", "-webkit-transform-origin:0 0", "-ms-transform-origin:0 0", "transform-origin:0 0", "width:" + a + "px", "height:" + f + "px", "z-index:999999", "position:" + (a > 800 ? "fixed": "absolute"), "left:0", "top:0px", "background:" + (a > 800 ? "rgba(0,0,0,.5)": "#FFF"), "display:none"].join(";");
                var l = document.createElement("div");
                l.style.cssText = ["width:100%", "height:52px", "background:#EEE", "line-height:52px", "text-align:left", "box-sizing:border-box", "padding-left:20px", "position:absolute", "left:0", "top:0", "font-size:16px", "font-weight:bold", "color:#333"].join(";"),
                l.innerText = t;
                var c = document.createElement("a");
                c.style.cssText = ["display:block", "position:absolute", "right:0", "top:0", "height:52px", "line-height:52px", "padding:0 20px", "color:#999"].join(";"),
                c.innerText = "关闭";
                var h = document.createElement("iframe");
                h.style.cssText = ["width:100%", "height:100%", "border:0", "overflow:hidden"].join(";"),
                a > 800 && (l.style.cssText = ["width:370px", "height:52px", "background:#EEE", "line-height:52px", "text-align:left", "box-sizing:border-box", "padding-left:20px", "position:absolute", "left:" + (a / 2 - 185) + "px", "top:40px", "font-size:16px", "font-weight:bold", "color:#333"].join(";"), h.style.cssText = ["position:absolute", "top:92px", "left:" + (a / 2 - 185) + "px", "width:370px", "height:480px", "border:0", "background:#FFF", "overflow:hidden"].join(";")),
                l.appendChild(c),
                o.appendChild(l),
                o.appendChild(h),
                o.className = "J_MIDDLEWARE_FRAME_WIDGET",
                document.body.appendChild(o),
                h.src = r,
                c.addEventListener("click",
                function() {
                    i.hide();
                    var e = document.createEvent("HTMLEvents");
                    e.initEvent("close", !1, !1),
                    o.dispatchEvent(e)
                },
                !1),
                this.addEventListener = function() {
                    o.addEventListener.apply(o, arguments)
                },
                this.removeEventListener = function() {
                    o.removeEventListener.apply(o, arguments)
                },
                this.show = function() {
                    document.addEventListener("touchmove", n, !1),
                    o.style.display = "block",
                    window.scrollTo(0, 0)
                },
                this.hide = function() {
                    document.removeEventListener("touchmove", n),
                    window.scrollTo(0, -u.top),
                    o.parentNode && o.parentNode.removeChild(o)
                }
            }
            function s(e) {
                var n = this,
                r = this.options,
                i = this.params;
                return e().then(function() {
                    var e = r.retJson,
                    s = e.ret,
                    o = navigator.userAgent.toLowerCase(),
                    u = o.indexOf("safari") > -1 && o.indexOf("chrome") < 0 && o.indexOf("qqbrowser") < 0;
                    if (s instanceof Array && (s = s.join(",")), (s.indexOf("SESSION_EXPIRED") > -1 || s.indexOf("SID_INVALID") > -1 || s.indexOf("AUTH_REJECT") > -1 || s.indexOf("NEED_LOGIN") > -1) && (e.retType = c.SESSION_EXPIRED, !r.WindVaneRequest && (l.LoginRequest === !0 || r.LoginRequest === !0 || i.needLogin === !0))) {
                        if (!t.login) throw new Error("LOGIN_NOT_FOUND::缺少lib.login");
                        if (r.safariGoLogin !== !0 || !u || "taobao.com" === r.pageDomain) return t.login.goLoginAsync().then(function(e) {
                            return n.__sequence([n.__processToken, n.__processRequestUrl, n.__processUnitPrefix, n.middlewares, n.__processRequest])
                        })["catch"](function(e) {
                            throw "CANCEL" === e ? new Error("LOGIN_CANCEL::用户取消登录") : new Error("LOGIN_FAILURE::用户登录失败")
                        });
                        t.login.goLogin()
                    }
                })
            }
            function o(e) {
                var t = this.options;
                this.params;
                return t.H5Request !== !0 || l.AntiFlood !== !0 && t.AntiFlood !== !0 ? void e() : e().then(function() {
                    var e = t.retJson,
                    n = e.ret;
                    n instanceof Array && (n = n.join(",")),
                    n.indexOf("FAIL_SYS_USER_VALIDATE") > -1 && e.data.url && (t.AntiFloodReferer ? location.href = e.data.url.replace(/(http_referer=).+/, "$1" + t.AntiFloodReferer) : location.href = e.data.url)
                })
            }
            function u(t) {
                var n = this,
                s = this.options,
                o = this.params;
                return s.AntiCreep !== !1 && (s.AntiCreep = !0),
                o.forceAntiCreep !== !0 && s.H5Request !== !0 || l.AntiCreep !== !0 && s.AntiCreep !== !0 ? void t() : t().then(function() {
                    var t = s.retJson,
                    u = t.ret;
                    if (u instanceof Array && (u = u.join(",")), (u.indexOf("RGV587_ERROR::SM") > -1 || u.indexOf("ASSIST_FLAG") > -1) && t.data.url) {
                        var f = "_m_h5_smt",
                        l = r(f),
                        c = !1;
                        if (s.saveAntiCreepToken === !0 && l) {
                            l = JSON.parse(l);
                            for (var h in l) o[h] && (c = !0)
                        }
                        if (s.saveAntiCreepToken === !0 && l && !c) {
                            for (var h in l) o[h] = l[h];
                            return n.__sequence([n.__processToken, n.__processRequestUrl, n.__processUnitPrefix, n.middlewares, n.__processRequest])
                        }
                        return new a(function(r, u) {
                            function a() {
                                h.removeEventListener("close", a),
                                e.removeEventListener("message", l),
                                u("USER_INPUT_CANCEL::用户取消输入")
                            }
                            function l(t) {
                                var i;
                                try {
                                    i = JSON.parse(t.data) || {}
                                } catch(c) {}
                                if (i && "child" === i.type) {
                                    h.removeEventListener("close", a),
                                    e.removeEventListener("message", l),
                                    h.hide();
                                    var p;
                                    try {
                                        p = JSON.parse(decodeURIComponent(i.content)),
                                        "string" == typeof p && (p = JSON.parse(p));
                                        for (var v in p) o[v] = p[v];
                                        s.saveAntiCreepToken === !0 ? (document.cookie = f + "=" + JSON.stringify(p) + ";", e.location.reload()) : n.__sequence([n.__processToken, n.__processRequestUrl, n.__processUnitPrefix, n.middlewares, n.__processRequest]).then(r)
                                    } catch(c) {
                                        u("USER_INPUT_FAILURE::用户输入失败")
                                    }
                                }
                            }
                            var c = t.data.url,
                            h = new i("", c);
                            h.addEventListener("close", a, !1),
                            e.addEventListener("message", l, !1),
                            h.show()
                        })
                    }
                })
            }
            if (!t || !t.mtop || t.mtop.ERROR) throw new Error("Mtop 初始化失败！");
            var a = e.Promise,
            f = t.mtop.CLASS,
            l = t.mtop.config,
            c = t.mtop.RESPONSE_TYPE;
            t.mtop.middlewares.push(s),
            t.mtop.loginRequest = function(e, t, n) {
                var r = {
                    LoginRequest: !0,
                    H5Request: !0,
                    successCallback: t,
                    failureCallback: n || t
                };
                return (new f(e)).request(r)
            },
            t.mtop.antiFloodRequest = function(e, t, n) {
                var r = {
                    AntiFlood: !0,
                    successCallback: t,
                    failureCallback: n || t
                };
                return (new f(e)).request(r)
            },
            t.mtop.middlewares.push(o),
            t.mtop.antiCreepRequest = function(e, t, n) {
                var r = {
                    AntiCreep: !0,
                    successCallback: t,
                    failureCallback: n || t
                };
                return (new f(e)).request(r)
            },
            t.mtop.middlewares.push(u)
        } (window, window.lib || (window.lib = {}));
        e.exports = window.lib["mtop"]
    },
    125 : function(e, t, n) {
        "use strict";
        function p(e) {
            return e && e.__esModule ? e: {
                "default": e
            }
        }
        var r = n(40);
        var i = p(r);
        var s = n(126);
        var o = p(s);
        var u = n(9);
        var a = p(u);
        var f = n(36);
        var l = p(f);
        var c = n(127);
        var h = p(c);
        var d = i.
    default.extend({
            initialize:
            function() {
                var t = this;
                t._model = new h.
            default;
                t.modelEvents(t._model, "cmsmodel");
                window.cmsModuleHtmlCallback = function(e, n) {
                    t.cmsModuleHtmlCallback(e, n)
                };
                t.init()
            },
            cmsModuleHtmlCallback: function(t, n) {
                if (n) {
                    var r = $("#module_cms_" + t);
                    if (r.length > 0) {
                        try {
                            n = n.replace(/http:/, "");
                            r.html(n);
                            r.trigger("cms:loaded");
                            this.initCms(r)
                        } catch(i) {
                            r.html("")
                        }
                    }
                }
            },
            initCms: function(t) {
                if (t.find(".cms-slider").length) { (0, l.
                default)(t)
                }
            },
            doEachOperation: function() {
                var t = this.cmsdata;
                if (!t.data) return;
                $(document).bind("show:broadcast", this.officiallistOperation.bind(this));
                $(document).trigger("show:broadcast");
                if (t.data.question.hasOwnProperty("link")) {
                    $(document).trigger("show:question", [t.data.question])
                }
                this.diswindowOperation()
            },
            leftOperation: function() {
                $("div[id^='module_cms_']").each(function() {
                    var e = $(this).attr("id").replace("module_cms_", "");
                    var t = "//module.youku.com/" + e + ".html";
                    a.
                default.getScript(t)
                })
            },
            diswindowOperation: function() {
                var t = this.cmsdata;
                if (typeof t === "undefined" || typeof t.data === "undefined" || !t.data.diswindow) return - 1;
                var n = t.data.diswindow;
                if (n.show && n.topic && n.video) {
                    if (n.show.createtime >= n.topic.createtime && n.show.createtime >= n.video.createtime) {
                        n = n.show
                    } else if (n.video.createtime >= n.topic.createtime && n.video.createtime > n.show.createtime) {
                        n = n.video
                    } else if (n.topic.createtime > n.video.createtime && n.topic.createtime > n.show.createtime) {
                        n = n.topic
                    }
                } else if (n.show && n.topic) {
                    if (n.show.createtime >= n.topic.createtime) {
                        n = n.show
                    } else {
                        n = n.topic
                    }
                } else if (n.show && n.video) {
                    if (n.show.createtime >= n.video.createtime) {
                        n = n.show
                    } else {
                        n = n.video
                    }
                } else if (n.topic && n.video) {
                    if (n.video.createtime >= n.topic.createtime) {
                        n = n.video
                    } else {
                        n = n.topic
                    }
                } else if (n.show) {
                    n = n.show
                } else if (n.topic) {
                    n = n.topic
                } else if (n.video) {
                    n = n.video
                }
                var r = (new Date).valueOf();
                var i = n.begintime * 1e3;
                var s = n.expiretime * 1e3;
                var o = $("#yk-player-curtain");
                if (r >= i && r <= s && o.length > 0) {
                    o.html('<img mid="1001" src="' + n.windowicon + '">');
                    $(document).trigger("goldlog:exp", o);
                    o.show();
                    if (n.buttonicon) {
                        window.ykPlyr.bind("player:loaded",
                        function() {
                            if (typeof window.ykPlyr.setPlayHeadSkin === "function") {
                                window.ykPlyr.setPlayHeadSkin({
                                    url: n.buttonicon
                                })
                            }
                        })
                    }
                } else {
                    o.hide()
                }
            },
            officiallistOperation: function() {
                var t = this.cmsdata;
                if (typeof t === "undefined" || typeof t.data === "undefined" || !t.data.broadcast) return;
                var n = t.data.broadcast;
                var r = $("#show_vv_broadcast");
                if (!r.length || !n.content) return;
                r.html('<a  target="_blank"  mid="1002"  href="' + n.link + '">' + o.
            default.html2Escape(n.content) + "</a>").show();
                $(document).trigger("goldlog:exp", r)
            },
            init: function() {
                this.leftOperation();
                this._model.getCmstool({
                    showid: PageConfig.showid,
                    videoid: PageConfig.videoId,
                    folderid: PageConfig.folderId,
                    topicid: PageConfig.catId,
                    client: "pc"
                })
            },
            "{cmsmodel} getCmstool:success": function(t) {
                if (t) {
                    this.cmsdata = t;
                    this.doEachOperation()
                }
            }
        });
        e.exports = d
    },
    126 : function(e, t, n) {
        var r;
        "use strict";
        var i = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        }; ! (r = function() {
            function n(e) {
                switch (typeof e === "undefined" ? "undefined": i(e)) {
                case "undefined":
                    return true;
                case "string":
                    if ($.trim(e).length == 0) return true;
                    break;
                case "boolean":
                    if (!e) return true;
                    break;
                case "number":
                    if (0 === e) return true;
                    break;
                case "object":
                    if (null === e) return true;
                    if (undefined !== e.length && e.length == 0) return true;
                    for (var t in e) {
                        return false
                    }
                    return true;
                    break
                }
                return false
            }
            var e = {
                speed: 400,
                init: function(t) {
                    if (jQuery) {
                        var n = this;
                        var r = jQuery(".scroll-" + t);
                        var i = parseInt(r.offset().top) - 65;
                        if (r.length) {
                            jQuery("html, body").stop().animate({
                                scrollTop: i
                            },
                            n.speed,
                            function() {
                                location.hash = t
                            })
                        }
                    }
                }
            };
            var t = function() {
                var e = document.createElement("div");
                return function(t) {
                    var n = t.charAt(0).toUpperCase() + t.slice(1),
                    r = "Webkit Moz O ms",
                    i = r.split(" "),
                    s = (t + " " + i.join(n + " ") + n).split(" ");
                    for (var o in s) {
                        var t = s[o];
                        if ( !! !~ ("" + t).indexOf("-") && e.style[t] !== undefined) {
                            return true
                        }
                    }
                    return false
                }
            } ();
            var r = {
                init: function() {
                    var t = "vv";
                    if (window.paid == 1) {
                        t += ",permission"
                    }
                    nova_request(getVideoPageInfoCallback, "/QVideo/~ajax/getVideoPlayInfo", {
                        id: videoId,
                        sid: showid,
                        type: t,
                        catid: catId
                    })
                },
                callback: function() {
                    if (info == null) return;
                    try {
                        if ((typeof info === "undefined" ? "undefined": i(info)) != "object") info = JSON.parse(info)
                    } catch(t) {
                        return
                    }
                    if (window.paid == 1 && info.permission) {
                        if (info.permission == -1) {
                            Interact.disableUpDowned()
                        } else {
                            Interact.initUpDowned()
                        }
                    } else {
                        Interact.initUpDowned()
                    }
                }
            };
            var s = function(t) {
                num = t.toString();
                var n = Math.abs(num).toString();
                if (n.length < 4) return num;
                var r = "";
                if (num.indexOf(".") != -1) {
                    var r = "." + num.split(".")[1]
                }
                var i = n.length;
                var s = i % 3;
                var o = [];
                var u = s == 0 ? 3 : s;
                o[0] = n.slice(0, u);
                var a = 1;
                while (u + 3 <= i) {
                    o[a++] = n.slice(u, u + 3);
                    u = u + 3
                }
                o = o.join(",");
                if (num.indexOf("-") === 0) o = "-" + o;
                return o + r
            };
            var o = {
                url: "Bad url, watch browser console error.",
                Local: window.Local,
                err: function(t) {
                    if (!window["console"]) {
                        window["console"] = {
                            log: function() {},
                            clear: function() {},
                            debug: function() {},
                            error: function() {},
                            info: function() {},
                            count: function() {},
                            time: function() {},
                            trace: function() {},
                            warn: function() {}
                        }
                    }
                    if (window.console && window.console.error) {
                        window.console.error("[cdn function error] " + t + ".")
                    }
                },
                cdn: function(t, n) {
                    if (t.charAt(0) != "/") {
                        this.err("@param path: relative to root start by /");
                        return this.url
                    }
                    if (!this.Local) {
                        this.err("@see BETA-18932: template funciton {nova->globaJS}");
                        return this.url
                    }
                    var r = "RELEASE_TAG",
                    i = this.Local[r];
                    if (!i) {
                        this.err("@see local: " + r + " not defined");
                        return this.url
                    }
                    r = n.toUpperCase() + "SERVER",
                    server = this.Local[r];
                    if (!server) {
                        this.err("@see local: " + r + " not defined.");
                        return this.url
                    }
                    if (!server.match(/^(http|https)/)) {
                        this.err("@see local: " + r + " is server, add protocol");
                        return this.url
                    }
                    if (server.match(/\/$/)) {
                        this.err("@see local: " + r + " is server, not ending by /");
                        return this.url
                    }
                    this.url = server + "/" + i + t;
                    return this.url
                },
                cdn_jsurl: function(t) {
                    return this.cdn(t, "js")
                },
                cdn_cssurl: function(t) {
                    return this.cdn(t, "css")
                },
                cdn_imgurl: function(t) {
                    return this.cdn(t, "img")
                }
            };
            var u = function(t) {
                if (typeof t == "undefined" || t == null || t == "null" || t.length == 0) return "";
                return t.replace(/[<>&"]/g,
                function(e) {
                    return {
                        "<": "&lt;",
                        ">": "&gt;",
                        "&": "&amp;",
                        '"': "&quot;"
                    } [e]
                })
            };
            var a = function(t) {
                var n, r, i;
                var s, o;
                var u = [];
                r = t.length;
                n = 0;
                while (n < r) {
                    i = t.charCodeAt(n++);
                    switch (i >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        u.push(t.charAt(n - 1));
                        break;
                    case 12:
                    case 13:
                        s = t.charCodeAt(n++);
                        u.push(String.fromCharCode((i & 31) << 6 | s & 63));
                        break;
                    case 14:
                        s = t.charCodeAt(n++);
                        o = t.charCodeAt(n++);
                        u.push(String.fromCharCode((i & 15) << 12 | (s & 63) << 6 | (o & 63) << 0));
                        break
                    }
                }
                return u.join("")
            };
            var f = function(t) {
                if (!t) return "";
                var n = "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv" + "wxyz0123456789+/" + "=";
                var r = "";
                var i, s, o;
                var u, f, l, c;
                var h = 0;
                t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                do {
                    u = n.indexOf(t.charAt(h++));
                    f = n.indexOf(t.charAt(h++));
                    l = n.indexOf(t.charAt(h++));
                    c = n.indexOf(t.charAt(h++));
                    i = u << 2 | f >> 4;
                    s = (f & 15) << 4 | l >> 2;
                    o = (l & 3) << 6 | c;
                    r = r + String.fromCharCode(i);
                    if (l != 64) {
                        r = r + String.fromCharCode(s)
                    }
                    if (c != 64) {
                        r = r + String.fromCharCode(o)
                    }
                } while ( h < t . length );
                return a(r)
            };
            var l = function(t) {
                if (!t) return "";
                t = t.toString();
                var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                var r = new Array( - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
                var i, s, o;
                var u, a, f;
                o = t.length;
                s = 0;
                i = "";
                while (s < o) {
                    u = t.charCodeAt(s++) & 255;
                    if (s == o) {
                        i += n.charAt(u >> 2);
                        i += n.charAt((u & 3) << 4);
                        i += "==";
                        break
                    }
                    a = t.charCodeAt(s++);
                    if (s == o) {
                        i += n.charAt(u >> 2);
                        i += n.charAt((u & 3) << 4 | (a & 240) >> 4);
                        i += n.charAt((a & 15) << 2);
                        i += "=";
                        break
                    }
                    f = t.charCodeAt(s++);
                    i += n.charAt(u >> 2);
                    i += n.charAt((u & 3) << 4 | (a & 240) >> 4);
                    i += n.charAt((a & 15) << 2 | (f & 192) >> 6);
                    i += n.charAt(f & 63)
                }
                return i
            };
            var c = function(t) {
                if (!t) return "";
                if (t << 2 > 0) {
                    var n = "U" + l(t << 2)
                } else {
                    var n = "U" + l(t * 4)
                }
                return n
            };
            var h = function() {
                var t = "";
                var n = document.cookie.split(";");
                var r = arguments.length;
                for (var i = 0; i < n.length; i++) {
                    var s = n[i];
                    while (s.charAt(0) == " ") {
                        s = s.substring(1, s.length)
                    }
                    if (s.indexOf("u=") == 0 || s.indexOf("k=") == 0) var o = s;
                    if (s.indexOf("_l_lgi=") == 0) var u = s;
                    if (s.indexOf("yktk=") == 0) {
                        var a = f(decodeURIComponent(s).split("|")[3]);
                        if (a.indexOf(",") > -1 && a.indexOf("nn:") > -1 && a.indexOf("id:") > -1) {
                            var t = a.split(",")[1].split(":")[1];
                            var l = a.split(",")[0].split(":")[1];
                            if (t != "") break
                        }
                    }
                }
                if (t == "" || l == "") {
                    if (o) {
                        var t = o.substring(2, o.length);
                        if (t == "__LOGOUT__") t = "";
                        else t = decodeURIComponent(t)
                    }
                    if (u) {
                        var l = u.substring(7, u.length)
                    }
                }
                if (r == 0) {
                    return t == "" ? "": t
                } else if (r == 1 && arguments[0] == "all") {
                    return {
                        username: t,
                        userid: l
                    }
                }
            };
            var p = function(t, n) {
                var r = $("#" + t)[0];
                r.select();
                try {
                    therange = undefined;
                    if (PageConfig.copytoclip == 1) {
                        if (r.createTextRange) {
                            therange = r.createTextRange()
                        }
                        therange = therange ? therange: document;
                        if (therange.execCommand("Copy")) {
                            if (n != false) alert("复制成功。现在您可以粘贴（Ctrl+v）到Blog 或BBS中了。");
                            return
                        }
                    }
                } catch(i) {}
                alert("您使用的浏览器不支持此复制功能，请使用Ctrl+C或鼠标右键。")
            };
            var d = function v(e) {
                function v(e) {
                    var n = "";
                    var r = "";
                    r = t(e);
                    return r
                }
                function t(e) {
                    var t = false;
                    var i = "";
                    while (!t) {
                        i = n(20);
                        hstr = e + i;
                        hashcash = r(hstr);
                        if (hashcash.substring(0, 2) == "00") {
                            t = true
                        }
                    }
                    return i
                }
                function n(e) {
                    var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
                    var n = "";
                    for (var r = 0; r < e; r++) {
                        var i = Math.floor(Math.random() * t.length);
                        n += t.substring(i, i + 1)
                    }
                    return n
                }
                function r(e) {
                    function t(e, t) {
                        var n = e << t | e >>> 32 - t;
                        return n
                    }
                    function n(e) {
                        var t = "";
                        var n;
                        var r;
                        var i;
                        for (n = 0; n <= 6; n += 2) {
                            r = e >>> n * 4 + 4 & 15;
                            i = e >>> n * 4 & 15;
                            t += r.toString(16) + i.toString(16)
                        }
                        return t
                    }
                    function r(e) {
                        var t = "";
                        var n;
                        var r;
                        for (n = 7; n >= 0; n--) {
                            r = e >>> n * 4 & 15;
                            t += r.toString(16)
                        }
                        return t
                    }
                    function i(e) {
                        e = e.replace(/\r\n/g, "\n");
                        var t = "";
                        for (var n = 0; n < e.length; n++) {
                            var r = e.charCodeAt(n);
                            if (r < 128) {
                                t += String.fromCharCode(r)
                            } else if (r > 127 && r < 2048) {
                                t += String.fromCharCode(r >> 6 | 192);
                                t += String.fromCharCode(r & 63 | 128)
                            } else {
                                t += String.fromCharCode(r >> 12 | 224);
                                t += String.fromCharCode(r >> 6 & 63 | 128);
                                t += String.fromCharCode(r & 63 | 128)
                            }
                        }
                        return t
                    }
                    var s;
                    var o, u;
                    var a = new Array(80);
                    var f = 1732584193;
                    var l = 4023233417;
                    var c = 2562383102;
                    var h = 271733878;
                    var p = 3285377520;
                    var d, v, m, g, y;
                    var b;
                    e = i(e);
                    var w = e.length;
                    var E = new Array;
                    for (o = 0; o < w - 3; o += 4) {
                        u = e.charCodeAt(o) << 24 | e.charCodeAt(o + 1) << 16 | e.charCodeAt(o + 2) << 8 | e.charCodeAt(o + 3);
                        E.push(u)
                    }
                    switch (w % 4) {
                    case 0:
                        o = 2147483648;
                        break;
                    case 1:
                        o = e.charCodeAt(w - 1) << 24 | 8388608;
                        break;
                    case 2:
                        o = e.charCodeAt(w - 2) << 24 | e.charCodeAt(w - 1) << 16 | 32768;
                        break;
                    case 3:
                        o = e.charCodeAt(w - 3) << 24 | e.charCodeAt(w - 2) << 16 | e.charCodeAt(w - 1) << 8 | 128;
                        break
                    }
                    E.push(o);
                    while (E.length % 16 != 14) {
                        E.push(0)
                    }
                    E.push(w >>> 29);
                    E.push(w << 3 & 4294967295);
                    for (s = 0; s < E.length; s += 16) {
                        for (o = 0; o < 16; o++) {
                            a[o] = E[s + o]
                        }
                        for (o = 16; o <= 79; o++) {
                            a[o] = t(a[o - 3] ^ a[o - 8] ^ a[o - 14] ^ a[o - 16], 1)
                        }
                        d = f;
                        v = l;
                        m = c;
                        g = h;
                        y = p;
                        for (o = 0; o <= 19; o++) {
                            b = t(d, 5) + (v & m | ~v & g) + y + a[o] + 1518500249 & 4294967295;
                            y = g;
                            g = m;
                            m = t(v, 30);
                            v = d;
                            d = b
                        }
                        for (o = 20; o <= 39; o++) {
                            b = t(d, 5) + (v ^ m ^ g) + y + a[o] + 1859775393 & 4294967295;
                            y = g;
                            g = m;
                            m = t(v, 30);
                            v = d;
                            d = b
                        }
                        for (o = 40; o <= 59; o++) {
                            b = t(d, 5) + (v & m | v & g | m & g) + y + a[o] + 2400959708 & 4294967295;
                            y = g;
                            g = m;
                            m = t(v, 30);
                            v = d;
                            d = b
                        }
                        for (o = 60; o <= 79; o++) {
                            b = t(d, 5) + (v ^ m ^ g) + y + a[o] + 3395469782 & 4294967295;
                            y = g;
                            g = m;
                            m = t(v, 30);
                            v = d;
                            d = b
                        }
                        f = f + d & 4294967295;
                        l = l + v & 4294967295;
                        c = c + m & 4294967295;
                        h = h + g & 4294967295;
                        p = p + y & 4294967295
                    }
                    var b = r(f) + r(l) + r(c) + r(h) + r(p);
                    return b.toLowerCase()
                }
                return v(e)
            };
            return {
                smoothScroll: e,
                getVideoPageInfo: r,
                numberFormat: s,
                cdn: o,
                html2Escape: u,
                supportStyle: t,
                get_username: h,
                decode64: f,
                encodeUid: c,
                hcbt: d,
                empty: n,
                copyToClipboard: p
            }
        }.call(t, n, t, e), r !== undefined && (e.exports = r))
    },
    127 : function(e, t, n) {
        "use strict";
        function u(e) {
            return e && e.__esModule ? e: {
                "default": e
            }
        }
        var r = n(5);
        var i = u(r);
        var s = n(9);
        var o = u(s);
        var a = i.
    default.extend({
            initialize:
            function() {
                var t = this;
                a.superClass.initialize.call(t);
                this.domain = "//cmstool.youku.com/";
                t.op = {
                    callbackName: "callback",
                    charset: "utf-8"
                }
            },
            getCmstool: function(t) {
                var n = this;
                o.
            default.getJSON(this.domain + "cms/tool/pub/get_putdata.json?securemode=2", t,
                function(e) {
                    n.trigger("getCmstool:success", [e])
                },
                n.op)
            }
        });
        e.exports = a
    },
    128 : function(e, t, n) {
        "use strict";
        function g(e) {
            return e && e.__esModule ? e: {
                "default": e
            }
        }
        var r = n(40);
        var i = g(r);
        var s = n(126);
        var o = g(s);
        var u = n(24);
        var a = g(u);
        var f = n(14);
        var l = g(f);
        var c = n(8);
        var h = g(c);
        var p = n(129);
        var d = g(p);
        var v = n(130);
        var m = g(v);
        var y = n(131);
        var b = i.
    default.extend({
            fav_process:
            false,
            tcode: "",
            scode: "",
            el: $(".vpactionv5_iframe_wrap"),
            self: undefined,
            initialize: function() {
                var t = this;
                this._model = new m.
            default;
                this.modelEvents(this._model, "model");
                this._model.bind("getVideoPlayInfo:success", this.getVideoPageInfoCallback.bind(this));
                this._model.bind("addFav:success", this.addFavCallBack.bind(this));
                window.ykPlyr && ykPlyr.bind("player:onPlayerStartUpdate", this.initMoudle.bind(this));
                this._cached = !!(PageConfig.playmode === 3 && !$(".fn-icon-download-noright").length && PageConfig.page.compeleted === 0 && ["85", "100", "97"].indexOf(PageConfig.catId) > -1);
                this.bind();
                this.initMoudle();
                window.XloginEvent.bind("login:userInfo",
                function(e) {
                    t.renderDownloadPanel(e.is_vip)
                })
            },
            initMoudle: function() {
                this._model.getVideoPlayInfo({
                    vid: PageConfig.videoId,
                    showid: PageConfig.showid,
                    param: {
                        1 : "favo"
                    }
                });
                this._setQRCode();
                this._addQQShareParam()
            },
            _addQQShareParam: function() {
                var t = o.
            default.get_username("all");
                var n = t.userid > 0 ? t.userid: 0;
                var r = "//mini.cron.youku.com/web/www/qq_share/qq_cback.php?userId=" + n;
                var i = $("#s_qq_haoyou1").attr("href");
                $("#s_qq_haoyou1").attr("href", i + "&callback=" + r)
            },
            _setQRCode: function() {
                $(".J-phone-qrcode-img").attr("src", this._getQRCodeURL())
            },
            _getQRCodeURL: function() {
                var t = this._cached ? "cache": "open";
                var n = this._cached ? ",source:'pcweb'": "";
                return "//qr.youku.com/qr?sc=video_play&ac=" + t + "&ps={vid:'" + PageConfig.videoId2 + "',spot:" + this.getWatchTime() + n + ",tp:1,cp:0,cpp:100049}&size=123"
            },
            getVideoPageInfoCallback: function(t) {
                var n = t.data;
                var r = $(".fn-fave", this.$el);
                if (r.length && n.favo) {
                    this.faved = true;
                    r.html('<a target="_blank" class="faved" href="//faxian.youku.com/favorite"><i class="fn-icon"></i> 已收藏</a>')
                }
                this.tcode = n.ss;
                this.scode = o.
            default.hcbt(this.tcode)
            },
            events: {
                "click #fnDownloadVideo,#fn_pc_download": "downloadApp",
                "click #fnDownloadVideoAll": "downloadVideo",
                "click  .report-select input ": "checkReport",
                "keyup  #reportTxt": "checkReport",
                "click #fn_pc_report": "reportSubmit"
            },
            bind: function() {
                var t = this;
                $(".fn-fave", this.$el).click(function() {
                    if (t.faved || t.fav_process) {
                        return
                    }
                    var e = "1_1";
                    switch (PageConfig.playmode) {
                    case 1:
                        e = "1_1";
                        break;
                    case 2:
                        e = "1_3";
                        break;
                    case 3:
                        e = "1_2";
                        break;
                    case 4:
                        e = "1_5";
                        break;
                    case 5:
                        e = "1_4";
                        break
                    }
                    t.favParams = {
                        vid: PageConfig.videoId,
                        fid: PageConfig.folderId || "",
                        showid: PageConfig.showid || 0,
                        deviceid: "1",
                        addition: e,
                        channelId: PageConfig.catId
                    };
                    h.
                default.login(function() {
                        t._model.addFav(t.favParams);
                        t.fav_process = true
                    })
                });
                $(".fn-share-code-btn", this.$el).each(function(e) {
                    $(this).click(function(e) {
                        var t = $(e.currentTarget).parent().find("input").attr("id");
                        o.
                    default.copyToClipboard(t)
                    })
                });
                $(".fn-phonewatch", this.$el).bind("mouseenter",
                function() {
                    var e = t.getWatchTime();
                    t.parseWatchTime(e)
                })
            },
            downloadApp: function() {
                if (l.
            default.mac) {
                    window.open("//pd.youku.com/pc")
                } else {
                    var t = {
                        from: "video",
                        action: "video",
                        secne: "ywebplayerbottom",
                        callback: this._downPCCallback
                    };
                    d.
                default.ikuExecuteFrompc(t)
                }
            },
            downloadVideo: function() {
                if (l.
            default.mac) {
                    window.open("//pd.youku.com/pc")
                } else {
                    var t = {
                        from: "video",
                        action: "show",
                        secne: "ywebplayerbottom",
                        callback: this._downPCCallback
                    };
                    d.
                default.ikuExecuteFrompc(t)
                }
            },
            checkReport: function() {
                var t = $("#reportTxt").val();
                if ($('input[name="reportOption"]:checked').length && t !== "") {
                    $("#fn_pc_report").removeClass("disabled")
                } else {
                    $("#fn_pc_report").addClass("disabled")
                }
            },
            clearReport: function() {
                $("#reportTxt").val("");
                $('input[name="reportOption"]:checked').attr("checked", false)
            },
            sucessReport: function() {
                $(".fn-reprot").addClass("hide-panel");
                setTimeout(function() {
                    $(".fn-reprot").removeClass("hide-panel")
                },
                500);
                this.clearReport();
                $("#fn_pc_report").addClass("disabled");
                alert("反馈成功,我们会尽快处理您的问题.")
            },
            reportSubmit: function(t) {
                var n = this;
                if ($(t.target).hasClass("disabled")) return false;
                h.
            default.login(function() {
                    var e = h.
                default.getUserInfo();
                    var t = [];
                    $('input[name="reportOption"]:checked').each(function() {
                        t.push($(this).val())
                    });
                    var r = {
                        content: $("#reportTxt").val(),
                        bizIdentifiers: JSON.stringify(t),
                        extra: JSON.stringify([{
                            vid: PageConfig.videoId2
                        },
                        {
                            ytid: e.ytid
                        }])
                    };
                    n._model.reportVideo(r).then(function(e) {
                        if (e && e.ret && e.ret[0] === "SUCCESS::调用成功") {
                            n.sucessReport()
                        }
                    },
                    function(e) {
                        if (e && e.ret && e.ret[0] === "FAIL_SYS_SERVICE_INNER_FAULT::服务内部故障") {
                            n._model.reportVideo(r).then(function(e) {
                                if (e && e.ret && e.ret[0] === "SUCCESS::调用成功") {
                                    n.sucessReport()
                                }
                            })
                        }
                    })
                })
            },
            addFavCallBack: function(t) {
                var n = this;
                n.fav_process = false;
                if (t === 0 || t === -2) {
                    $(".fn-fave", this.$el).html('<a target="_blank" class="faved" href="//faxian.youku.com/favorite"><i class="fn-icon"></i> 已收藏</a>')
                }
                $(document).trigger("faved:sucess")
            },
            showDimcode: function(t, n, r, i) {
                var s = this.getWatchTime();
                this.parseWatchTime(s)
            },
            getWatchTime: function() {
                var t = 0;
                try {
                    var n = window.ykPlyr.PlayerInfo();
                    t = n["time"] ? parseInt(n["time"]) : 0
                } catch(r) {}
                return t
            },
            parseWatchTime: function(t) {
                if (!t) return;
                var n = parseInt(t / 3600);
                t = t % 3600;
                var r = parseInt(t / 60);
                var i = t % 60;
                var s = "";
                if (n) {
                    s += n + "小时"
                }
                if (r) {
                    s += r + "分"
                }
                s += i + "秒";
                $("#phone_dimcode_watch_time").html("已观看到 " + s)
            },
            renderDownloadPanel: function(t) {
                var n = $(".title-wrap h1").text();
                if ($(".fn-btn-vip", this.$el).length && t) {
                    var r = a.
                default.compile(y)({
                        mac:
                        l.
                    default.mac,
                        title: n
                    });
                    $(".fn-download .fn-panel", this.$el).html(r)
                }
            },
            _downPCLoading: function() {},
            _downPCCallback: function(t) {
                if (t >= 0) {
                    document.getElementById("panel_down_notice").innerHTML = "<div><p>您尚未安装客户端，我们正在为您下载</p><p>请您成功安装后，再点击下方按钮下载视频</p></div>"
                }
            }
        });
        e.exports = b
    },
    129 : function(e, t, n) {
        "use strict";
        function f(e) {
            return e && e.__esModule ? e: {
                "default": e
            }
        }
        var r = n(6);
        var i = f(r);
        var s = n(4);
        var o = f(s);
        var u = n(14);
        var a = f(u);
        var l = PageConfig.homeHost;
        var c = i.
    default.extend({
            initialize:
            function() {
                this.loadIkuJs()
            },
            loadIkuJs: function() {
                if (typeof window.ikuNewExecute == "undefined" || typeof window.getP2PStateFromIku == "undefined") {
                    $.getScript("//js.ykimg.com/youku/dist/js/lib/ikuAdapterNew.js",
                    function() {
                        setTimeout(function() {
                            if (typeof window.getP2PStateFromIku == "function" && !a.
                        default.mac) {
                                getP2PStateFromIku()
                            }
                        },
                        500)
                    })
                }
                return true
            },
            ikuExecuteFrompc: function(t) {
                var n = true;
                if (!t.from || !t.action || t.from != "video" && t.action == "video" && !t.sid || t.from != "video" && t.from != "show" && t.action == "show" && !t.sid) {
                    n = 0;
                    if (typeof callback === "function") {
                        callback(n);
                        return false
                    } else {
                        return n
                    }
                }
                if (typeof window.ikuNewExecute == "undefined") {
                    this.loadIkuJs()
                }
                setTimeout(function() {
                    var e = 0;
                    var n = !t.callback ? "": t.callback;
                    var r = !t.secne ? "": t.secne;
                    var i = t.from;
                    var s = t.action;
                    var u = "";
                    var a = !(0, o.
                default)("ykss") ? "": (0, o.
                default)("ykss");
                    if (s == "video") {
                        var f = "";
                        var l = "";
                        if (i == "video") {
                            if (window.ykPlyr && typeof window.ykPlyr.PlayerInfo == "function") {
                                var c = window.ykPlyr.PlayerInfo();
                                if (c) {
                                    f = c.langVid != null ? c.langVid: c.vidEncoded;
                                    l = !c.quality ? "mp4": c.quality
                                }
                            }
                            f = f != "" ? f: window.videoId2
                        }
                        if (!f && t.sid) {
                            f = t.sid
                        }
                        if (f) {
                            l = !l ? "mp4": l;
                            var h = "//v.youku.com/v_show/id_" + f + ".html";
                            u = "iku://|video|" + h + "|quality=" + l + "|ykss=" + a
                        } else {
                            e = 0
                        }
                    } else if (s == "show") {
                        var p = "";
                        var l = "";
                        if (i == "video") {
                            if (window.ykPlyr && typeof window.ykPlyr.PlayerInfo == "function") {
                                var c = window.ykPlyr.PlayerInfo();
                                if (c) {
                                    l = !c.quality ? "mp4": c.quality
                                }
                            }
                            p = typeof PageConfig.showid_en != "undefined" ? PageConfig.showid_en: ""
                        } else if (i == "show") {
                            p = typeof window.g_config.id != "undefined" ? window.g_config.id: ""
                        }
                        if (t.sid) {
                            p = t.sid
                        }
                        if (p) {
                            l = !l ? "mp4": l;
                            u = "iku://|vshow|download|" + p + "|quality=" + l + "|ykss=" + a
                        } else {
                            e = 0
                        }
                    } else if (s == "play") {
                        var f = "";
                        if (i == "video") {
                            if (window.ykPlyr && typeof window.ykPlyr.PlayerInfo == "function") {
                                var c = window.ykPlyr.PlayerInfo();
                                if (c) {
                                    f = c.langVid != null ? c.langVid: c.vidEncoded
                                }
                            }
                            f = f != "" ? f: window.videoId2
                        }
                        if (t.sid) {
                            f = t.sid
                        }
                        if (f) {
                            u = "iku://|play|web|videoid|playerror|" + f + "|ykss=" + a
                        } else {
                            e = 0
                        }
                    } else if (s == "adddesktop") {
                        var p = "";
                        var l = "";
                        if (i == "video") {
                            if (window.ykPlyr && typeof window.ykPlyr.PlayerInfo == "function") {
                                var c = window.ykPlyr.PlayerInfo();
                                if (c) {
                                    l = !c.quality ? "mp4": c.quality
                                }
                            }
                            p = typeof PageConfig.showid_en != "undefined" ? "z" + PageConfig.showid_en: ""
                        }
                        if (t.sid) {
                            p = t.sid
                        }
                        if (p) {
                            l = !l ? "mp4": l;
                            u = "iku://|vshow|shortcut|" + p + "|quality=" + l + "|ykss=" + a
                        } else {
                            e = 0
                        }
                    }
                    var d = function(n) {
                        e = -1;
                        var r = "//pcapp-update.youku.com/pc/index?tp=v&ori=ykplay&id=" + window.videoId2;
                        if (l) {
                            r += "&q=" + l
                        }
                        var i = "";
                        if (typeof n == "undefined" || n == false || n == "" || n.indexOf("//pcapp-update.youku.com") == -1) {
                            i = r
                        } else {
                            i = n
                        }
                        var s = document.createElement("iframe");
                        s.width = 0;
                        s.height = 0;
                        s.src = i;
                        document.body.appendChild(s);
                        setTimeout(function() {
                            document.body.removeChild(s)
                        },
                        1e4)
                    };
                    var v = function(n) {
                        e = 1
                    };
                    if (window.navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.match(/MSIE 6./i) == "MSIE 6." || navigator.appVersion.match(/MSIE 7./i) == "MSIE 7.")) {
                        ikuNewExecute(u, r, v, d)
                    } else {
                        var m = ikuNewExecute(u, r);
                        if (m != "ok") {
                            d(m)
                        } else {
                            v(m)
                        }
                    }
                    if (typeof n === "function") {
                        n(e)
                    } else {
                        return e
                    }
                },
                200)
            }
        });
        var h = new c;
        e.exports = h
    },
    130 : function(e, t, n) {
        "use strict";
        function c(e) {
            return e && e.__esModule ? e: {
                "default": e
            }
        }
        var r = n(5);
        var i = c(r);
        var s = n(9);
        var o = c(s);
        var u = n(4);
        var a = c(u);
        var f = n(124);
        var l = c(f);
        var h = i.
    default.extend({
            initialize:
            function() {
                var t = this;
                h.superClass.initialize.call(t);
                this.domain = PageConfig.homeHost;
                t.op = {
                    callbackName: "callback",
                    charset: "utf-8"
                }
            },
            getVideoPlayInfo: function(t) {
                var n = this;
                o.
            default.getJSON(this.domain + "action/getVideoPlayInfo?" + "&timestamp=" + (new Date).getTime(), t,
                function(e) {
                    if (e.error == 1) {
                        n.trigger("getVideoPlayInfo:success", [e])
                    }
                },
                n.op)
            },
            updown: function(t) {
                var n = this;
                t.timestamp = +(new Date);
                $.ajax({
                    type: "post",
                    url: this.domain + "action/updown?",
                    data: t,
                    beforeSend: function(t) {
                        var n = $.trim((0, a.
                    default)("_zpdtk"));
                        if (n) {
                            return t.setRequestHeader("X-CSRF-TOKEN", n)
                        }
                    },
                    success: function(t) {
                        if (t.error == 0 || t.error == -1 || t.error == 2) {
                            n.trigger("updown:success", [t.data])
                        } else {
                            n.trigger("updown:error", [])
                        }
                    }
                })
            },
            addFav: function(t) {
                var n = this;
                var r = {
                    itemId: t.vid,
                    itemType: '"VIDEO"',
                    guid: (0, a.
                default)("__ysuid"),
                    src: "PC_PLAY"
                };
                lib.mtop.config.prefix = "acs";
                lib.mtop.config.subDomain = "";
                lib.mtop.config.mainDomain = "youku.com";
                lib.mtop.request({
                    api: "mtop.youku.subscribe.service.subscribe.favourite.create",
                    type: "GET",
                    v: "3.0",
                    ecode: 1,
                    dataType: "jsonp",
                    data: r,
                    appKey: 24679788
                }).then(function(e) {
                    if (e && e.data && e.data.result) {
                        n.trigger("addFav:success", [0])
                    } else {
                        n.trigger("addFav:error", [])
                    }
                }).
                catch(function(e) {
                    n.trigger("addFav:error", [e])
                })
            },
            reportVideo: function(t) {
                l.
            default.config.prefix = "acs";
                l.
            default.config.subDomain = "";
                l.
            default.config.mainDomain = "youku.com";
                var n = $.extend({
                    contact: "",
                    utdid: "",
                    imageAddrs: "[]",
                    fromUser: "",
                    appInfo: "::",
                    apptype: "youku_pcweb",
                    fromPage: "pcweb_举报"
                },
                t);
                return l.
            default.request({
                    api:
                    "mtop.alibaba.abird.user.feedback",
                    v: "1.0",
                    ecode: 0,
                    H5Request: true,
                    appKey: 23570660,
                    type: "post",
                    dataType: "jsonp",
                    data: n
                })
            }
        });
        e.exports = h
    },
    131 : function(e, t) {
        e.exports = '<% if(mac){%>\n	<div class="fn-panel-header">\n		<span class="fn-panel-title"> 下载视频到电脑 </span>\n	</div>\n	<div class="fn-panel-body">\n		<div class="fn-panel-bd">\n			<i class="fn-icon-download-app"></i>\n			<p>优酷MAC客户端，畅享倍速免广告体验</p>\n			<a id="fn_pc_download" href="javascript:void(0);" class="fn-btn">下载MAC客户端</a>\n		</div>\n	</div>\n	<div class="fn-panel-bottom"><%=title%></div>\n<%}else{%>\n	<div class="fn-panel-header">\n		<span class="fn-panel-title"> 下载视频到电脑 </span>\n	</div>\n	<div class="fn-panel-body">\n		<div class="fn-panel-bd">\n			<i class="fn-icon-app-video"></i>\n			<p>将启用PC客户端下载视频</p>\n			<a href="javascript:void(0);" id="fnDownloadVideo" class="mr10 fn-btn fn-btn-download-video">下载本视频</a>\n			<a href="javascript:void(0);" id="fnDownloadVideoAll" class="fn-btn">下载全集</a>\n		</div>\n	</div>\n	<div class="fn-panel-bottom arrow-left"><%=title%></div>\n<%}%>'
    },
    132 : function(e, t, n) {
        "use strict";
        function p(e) {
            return e && e.__esModule ? e: {
                "default": e
            }
        }
        var r = n(40);
        var i = p(r);
        var s = n(24);
        var o = p(s);
        var u = n(19);
        var a = p(u);
        var f = n(8);
        var l = p(f);
        var c = n(122);
        var h = p(c);
        var d = n(133);
        var v = n(134);
        var m = i.
    default.extend({
            el:
            $(".player-container"),
            initialize: function(t) {
                var n = this;
                if (!this.$el.length) {
                    return
                }
                this.mod = new h.
            default;
                this.mod.bind("getSubInfo:success", this.render.bind(this));
                this.mod.bind("sub:error", this.subError.bind(this));
                this.mod.bind("createSub:success", this.subedcb.bind(this));
                this.mod.bind("destroySub:success", this.unSubedcb.bind(this));
                n.locked = false;
                window.ykPlyr && ykPlyr.bind("player:onPlayerStartUpdate",
                function() {
                    n.status()
                });
                $(document).bind("logchange",
                function() {
                    if (n.locked) return;
                    setTimeout(function() {
                        n.status()
                    },
                    200)
                })
            },
            events: {
                "click .v-sub-action": "subed",
                "click .v-sub-done": "unsub"
            },
            status: function() {
                this.mod.getSubInfo({
                    vid: PageConfig.videoId,
                    ownerid: PageConfig.videoOwner_en,
                    showid: 0,
                    addtion: "1_1",
                    pm: PageConfig.playmode
                })
            },
            subed: function(t) {
                var n = this;
                if (n.locked) return;
                l.
            default.login(function() {
                    n.locked = true;
                    l.
                default.checkLogin(function() {
                        n.mod.createSubMtop({
                            follow:
                            PageConfig.videoOwner_en,
                            target_id: PageConfig.videoOwner_en,
                            addtion: "1_1",
                            did: 1,
                            platform: 0,
                            is_utdid: false
                        })
                    })
                })
            },
            unsub: function(t) {
                var n = this;
                if (n.locked) return;
                l.
            default.login(function() {
                    n.locked = true;
                    n.mod.destroySubMtop({
                        follow: PageConfig.videoOwner_en,
                        target_id: PageConfig.videoOwner_en,
                        addtion: "1_1",
                        did: 1,
                        platform: 0,
                        is_utdid: false
                    })
                })
            },
            subedcb: function() {
                this.locked = false;
                $(".v-sub-action", this.$el).removeClass("v-sub-action").addClass("v-sub-done").html("已订阅");
                window.YK_CPA && YK_CPA.trackReg()
            },
            unSubedcb: function() {
                this.locked = false;
                $(".v-sub-done", this.$el).removeClass("v-sub-done").addClass("v-sub-action").html("订阅")
            },
            subError: function() {
                this.locked = false
            },
            render: function(t) {
                var n = void 0,
                r = void 0;
                t.isSelf = false;
                if (l.
            default.uid() == PageConfig.videoOwner) {
                    t.isSelf = true
                }
                if ($("#module_basic_dayu_sub").length) {
                    t.subcount = a.
                default.field(t.subcount);
                    t.vvCount = a.
                default.field(t.vvCount);
                    r = o.
                default.compile(d)({
                        data:
                        t
                    });
                    $("#module_basic_dayu_sub").html(r)
                }
                if ($("#module_basic_sub").length) {
                    n = o.
                default.compile(v)({
                        data:
                        t
                    });
                    $("#module_basic_sub").html(n)
                }
                $("#Drama").trigger("list:update")
            }
        });
        e.exports = m
    },
    133 : function(e, t) {
        e.exports = '<%data.thumb=data.thumb||\'//static.youku.com/v1.0.153/user/img/head/64/999.jpg\'%>\n\n<dl class="dayu-info">\n	<dt>\n		<a href="<%=data.url%>" target="_blank" >\n			<img src="<%=data.thumb%>">\n		</a>\n	</dt>\n	<dd>\n		<h2>		\n			<a href="<%=data.url%>" class="sub-name" target="_blank"><%=data.title%></a>\n			<%if(data.verified==1&&data.disable){%>\n			<span class="dyh-icon"></span>\n			<%}%>\n		</h2>\n		</dd>\n		<dd><%=data.vvCount%>视频播放量 	  <%=data.subcount%>粉丝</dd>\n		<dd>\n		<%if(data.isSelf){%>\n			<a class="create-center" target="_blank" href="//i.youku.com/u/creative_center">创作中心</a>\n		<%}else{%>		\n		<%if(data.subscribed){%>			\n			<a class="v-sub-btn v-sub-done"  data-img="<%=data.thumb%>"  href="javascript:void(0);">已订阅</a>\n		<%}else{%>\n			<a class="v-sub-btn v-sub-action" data-img="<%=data.thumb%>" href="javascript:void(0);">+订阅</a>\n		<%}%>\n	<%}%>					\n		</dd>\n</dl>\n\n'
    },
    134 : function(e, t) {
        e.exports = '<%data.thumb=data.thumb||\'//static.youku.com/v1.0.153/user/img/head/64/999.jpg\'%>\n	<%if(!data.isSelf){%>\n		<a href="<%=data.url%>" target="_blank" >\n			<img width="28" height="28" src="<%=data.thumb%>"><%=data.title%>\n		</a>\n		<%if(data.subscribed){%>			\n			<a class="v-sub-btn v-sub-done"  data-img="<%=data.thumb%>"  href="javascript:void(0);">已订阅</a>\n		<%}else{%>\n			<a class="v-sub-btn v-sub-action" data-img="<%=data.thumb%>" href="javascript:void(0);">订阅</a>\n		<%}%>		\n	<%}%>						\n\n'
    },
    135 : function(e, t, n) {
        "use strict";
        function s(e) {
            return e && e.__esModule ? e: {
                "default": e
            }
        }
        var r = n(55);
        var i = s(r);
        var o = {
            "001": {
                mid: "001",
                mname: "title_area"
            },
            "002": {
                mid: "002",
                mname: "interact"
            },
            "003": {
                mid: "003",
                mname: "subscribe"
            },
            "004": {
                mid: "004",
                mname: "recshow"
            },
            "005": {
                mid: "005",
                mname: "starrec"
            },
            "006": {
                mid: "006",
                mname: "comment"
            },
            "009": {
                mid: "009",
                mname: "relatedshows"
            },
            "007": {
                mid: "007",
                mname: "playlist"
            },
            "013": {
                mid: "013",
                mname: "related_episode"
            },
            "015": {
                mid: "015",
                mname: "description"
            },
            7004 : {
                mid: "7004",
                mname: "vipinfo"
            },
            1001 : {
                mid: "1001",
                mname: "showcase"
            },
            1002 : {
                mname: "target",
                mid: "1002"
            },
            1020 : {
                mname: "special_episode",
                mid: "1020"
            }
        };
        var u = {
            opt: {
                playmode: PageConfig.playmode,
                catid: PageConfig.catId,
                spm: "a2h0j.11185381"
            },
            init: function() {
                var t = this;
                if (window.goldlog) {
                    this.opt.spm = goldlog.spm_ab.join(".")
                }
                this.checkShow();
                $(document).bind("goldlog:exp",
                function(e) {
                    t.checkShow(e)
                });
                $(window).bind("scroll", (0, i.
            default)(this.checkShow.bind(this), 300));
                $(document).on("mousedown", "a,input,button",
                function(e) {
                    var n, r, i, s, u;
                    n = $(e.target);
                    r = n.closest("[mid]");
                    if (!r.length) {
                        return
                    }
                    u = n.closest("[data-sn]");
                    s = r.attr("mid");
                    i = o[s] || {};
                    i.mid_sn = u.length ? u.data("sn") : -1;
                    i = $.extend(t.opt, i);
                    t.clickLog(i)
                })
            },
            checkShow: function(t, n) {
                var r = this;
                if (!n) {
                    n = $("body")
                }
                $("[mid]", n).each(function() {
                    var e = $(this),
                    t,
                    n;
                    if (!r.checkPosition(e)) {
                        return
                    }
                    t = $(this).attr("mid");
                    r.showLog($.extend(r.opt, o[t]));
                    e.attr("modShow", 1)
                })
            },
            showLog: function(t) { (window.goldlog_queue || (window.goldlog_queue = [])).push({
                    action: "goldlog.record",
                    arguments: ["/yt/show.index.module", "EXP", $.param(t), "H1478724911"]
                })
            },
            clickLog: function(t) { (window.goldlog_queue || (window.goldlog_queue = [])).push({
                    action: "goldlog.record",
                    arguments: ["/yt/click.index.module", "CLK", $.param(t), "H1478724911"]
                })
            },
            checkPosition: function(t) {
                if (!t.is(":visible") || t.attr("modshow") || !t.height() || $(window).height() + $(document).scrollTop() < t.offset().top) {
                    return false
                }
                return true
            }
        };
        e.exports = u
    },
    136 : function(e, t, n) {
        "use strict";
        function c(e) {
            return e && e.__esModule ? e: {
                "default": e
            }
        }
        var r = n(24);
        var i = c(r);
        var s = n(40);
        var o = c(s);
        var u = n(9);
        var a = c(u);
        var f = n(4);
        var l = c(f);
        var h = o.
    default.extend({
            initialize:
            function(t) {
                var n = this;
                if (!this.canLive()) return;
                if ((0, l.
            default)("livePopClose")) return;
                n.getLiveGuide();
                this.timerHandle = setInterval(function() {
                    n.getLiveGuide()
                },
                6e4)
            },
            render: function(t) {
                var n = this;
                if ($("#LiveGuide").length) return;
                var r = '<div id="LiveGuide" style="display:none;"><div class="frame-cover"><iframe style="border:0;"  allow="autoplay" width="100%" height="100%" src="<%=data.streamUrl%>"></iframe></div><a target="_blank" class="live-cover" data-spm-click="gostr=/yt/click.index.module;locaid=dliveguide;mid=1009&mname=web_pop_click&pname=play;" href="<%=data.clickUrl%>" > <div class="live-title"><span style="margin-left:10px;"><%=data.title%></span><i data-spm-click="gostr=/yt/click.index.module;locaid=dliveguideclose;mid=1010&mname=pop_close&pname=play;" class="close" style="display:none;"></i></div></a></div>';
                var s = i.
            default.compile(r)({
                    data:
                    t
                });
                $("body").append(s);
                setTimeout(function() {
                    n.show(t.closeDelaySeconds)
                },
                1e3);
                if (t.endTime) {
                    setTimeout(function() {
                        clearInterval(n.timerHandle);
                        n.close()
                    },
                    t.endTime * 60 * 1e3)
                }
            },
            getLiveGuide: function() {
                var t = this;
                var n = new Date * 1;
                a.
            default.getJSON("//hudong.alicdn.com/api/data/v2/c8bd94ff14504fee93fbf16a74c94d95.js?t=" + new Date * 1, {},
                function(e) {
                    if (e.isShow || PageConfig.showid == "57700" || PageConfig.videoId == "774932586") {
                        if (n > e.start && n < e.end && p(e.deliveryType)) {
                            t.render(e);
                            clearInterval(t.timerHandle)
                        }
                    } else if (!e.isShow) {
                        $("#LiveGuide").length && t.close()
                    }
                },
                {
                    callbackName: "callback",
                    charset: "utf-8",
                    callback: "smallWinPlayCallback"
                })
            },
            close: function() {
                $("#LiveGuide").hide("fast",
                function() {
                    $("#LiveGuide").remove()
                })
            },
            confirmClose: function(t) { (0, l.
            default)("livePopClose", 1, {
                    expires: 1
                });
                $("#LiveGuide").remove();
                return false
            },
            show: function(t) {
                var n = this;
                $("#LiveGuide").show();
                $("#LiveGuide .close").bind("click", n.confirmClose);
                this.log("show", {
                    mid: "1009",
                    mname: "web_pop"
                });
                var r = parseInt(t);
                if (r > 0) {
                    var i = setTimeout(function() {
                        n.showCloseIcon();
                        clearTimeout(i)
                    },
                    r * 1e3)
                } else {
                    this.showCloseIcon()
                }
            },
            showCloseIcon: function() {
                $("#LiveGuide .close").show()
            },
            log: function(t, n) {
                if (t == "show") {
                    window.goldlog && window.goldlog.record("/yt/show.index.module", "EXP", $.param(n), "H1505507054")
                } else {
                    window.goldlog && window.goldlog.record("/yt/click.index.module", "CLK", $.param(n), "H1505507054")
                }
            },
            canLive: function() {
                var t = navigator.userAgent.toLowerCase();
                var n = {
                    webkit: /webkit/.test(t),
                    safari: /safari/.test(t) && !/chrome/.test(t),
                    iOS: (t.match(/(ipad|iphone|ipod)/) || [])[0],
                    android: parseFloat((t.match(/android[\s|\/]([\d.]+)/) || ["", "0"])[1])
                };
                n.isMobile = !!n.iOS || !!n.android || window.orientation !== undefined || false;
                n.isPad = n.isMobile && (n.iOS == "ipad" || t.indexOf("mobile") == -1 || t.indexOf("windows nt") != -1 && t.indexOf("touch") != -1) || false;
                var r = t.indexOf("msie 8.0") > 0 || t.indexOf("msie 7.0") > 0 || t.indexOf("msie 6.0") > 0;
                if (! (n.isMobile || window.MediaSource || n.safari) || r) {
                    return false
                } else {
                    return true
                }
            }
        });
        var p = function(t) {
            var n = false;
            for (var r in t) {
                if (t[r].length > 0 && t[r].split(",").indexOf(PageConfig[r]) >= 0) {
                    n = true;
                    break
                }
            }
            return n
        };
        e.exports = h
    },
    137 : function(e, t, n) {
        "use strict";
        function f(e) {
            return e && e.__esModule ? e: {
                "default": e
            }
        }
        var r = n(40);
        var i = f(r);
        var s = n(31);
        var o = f(s);
        var u = n(36);
        var a = f(u);
        e.exports = i.
    default.extend({
            initialize:
            function(t) {
                this.initSilde()
            },
            events: {
                "mouseenter .head_tab>li": "switchTab",
                "click .tab-h ul>li": "switchTab2"
            },
            switchTab2: function(t) {
                var n = $(t.currentTarget);
                if (n.hasClass("current")) return;
                n.addClass("current").siblings("li").removeClass("current");
                this.toggleTabc(n.attr("personid"), n.attr("index"))
            },
            switchTab: function(t) {
                var n = this;
                var r = $(t.currentTarget);
                if (r.hasClass("current")) return;
                var i = r.attr("personid");
                r.addClass("current").siblings("li").removeClass("current");
                var s = n.find('.tab-h ul[personid="' + i + '"]');
                s.show().siblings(".tab-h ul").hide();
                s.find("li").removeClass("current").eq(0).addClass("current");
                n.toggleTabc(i)
            },
            toggleTabc: function(t, n) {
                var r = this.find('.tab-c[personid="' + t + '"]');
                r.eq(n || 0).show().siblings(".tab-c").hide();
                r.find(".modPSlide").trigger("slider:show")
            },
            initSilde: function() {
                if (this.$el) { (0, a.
                default)(this.$el);
                    setTimeout(function() {
                        self.find && (0, o.
                    default)({
                            imgs:
                            self.find(".lazyImg"),
                            size: 150
                        })
                    },
                    500)
                }
            },
            "{model} getStar:success": function(t) {
                var n = this;
                if (n.$el) { (0, a.
                default)(n.$el);
                    setTimeout(function() { (0, o.
                    default)({
                            imgs:
                            n.find(".lazyImg"),
                            size: 150
                        })
                    },
                    500)
                }
            },
            "{model} getStar:fail": function() {
                this.trigger("getStar:fail")
            }
        })
    },
    138 : function(e, t, n) {
        "use strict";
        function f(e) {
            return e && e.__esModule ? e: {
                "default": e
            }
        }
        var r = n(40);
        var i = f(r);
        var s = n(35);
        var o = f(s);
        var u = n(62);
        var a = f(u);
        var l = i.
    default.extend({
            el:
            $("#module_basic_intro"),
            initialize: function(t) {
                l.superClass.initialize.call(this);
                if (!this.$el.length) {
                    return
                }
                var n = this;
                this.$summary = $(".summary-wrap", this.$el);
                this.$summaryMore = this.$summary.find(".summary-more");
                this.$DramaWrap = $(".introDramaSwitchTab", this.$el);
                this.$listWrapDiv = $(".c", this.$DramaWrap);
                this.loading = false;
                this.mod = new a.
            default;
                this.mod.bind("getShowInfo:success", this.rendShowInfo.bind(this));
                this.initSummary();
                var r = new o.
            default({
                    box:
                    $(".introSwitchTab"),
                    tab: ".t_tab>li",
                    panel: ".tab-c",
                    linktab: true
                });
                r.bind("after",
                function(e) {
                    if (e == 0) {
                        n.initSummary()
                    } else {
                        n.initDesc()
                    }
                });
                $("body").bind("responsive",
                function() {
                    n.initSummary();
                    n.initDesc()
                })
            },
            events: {
                "click .t_tab_inner li a": "switchTab",
                "click .summary-more": "expend",
                "click .expend-tab-btn": "expendTab"
            },
            switchTab: function(t) {
                var n = $(t.currentTarget);
                var r = "introitem_";
                var i = n.attr("rel");
                if (n.hasClass("current")) return;
                this.$DramaWrap.find(".current").removeClass("current");
                n.parent().addClass("current");
                if (this.loading) return;
                this.divId = r + i;
                var s = $("#" + this.divId);
                if (s.length) {
                    this.$listWrapDiv.find(">div").hide();
                    s.show()
                } else {
                    this.loading = true;
                    this.mod.getShowInfo("page/showinfo?", {
                        videoId: PageConfig.videoId,
                        showId: PageConfig.showid,
                        videoEncodeId: PageConfig.currentEncodeVid,
                        page: i
                    })
                }
            },
            rendShowInfo: function(t) {
                var n = $("<div>").attr("id", this.divId);
                n.html(t.html);
                this.$listWrapDiv.find(">div").hide();
                this.$listWrapDiv.append(n);
                n.show();
                this.loading = false
            },
            initSummary: function() {
                if (this.$summaryMore.hasClass("summary-close")) return;
                if (this.$summary.find(".summary").height() > this.$summary.height() && this.$summaryMore.hasClass("summary-open")) {
                    this.$summaryMore.show()
                } else {
                    this.$summaryMore.hide()
                }
            },
            initDesc: function() {
                var t = this.$DramaWrap.find(".t_tab_inner");
                if (t.height() > 40) {
                    if (!t.find(".expend-tab-btn").length) {
                        t.append('<a href="javascript:void(0)" class="expend-tab-btn"  hidefocus="true">全部剧集</a>')
                    }
                }
            },
            expend: function(t) {
                var n = $(t.currentTarget);
                if (n.hasClass("summary-open")) {
                    this.$summary.removeClass("summary-expend");
                    n.removeClass("summary-open").addClass("summary-close").text("收起详情")
                } else {
                    this.$summary.addClass("summary-expend");
                    n.removeClass("summary-close").addClass("summary-open").text("查看详情")
                }
            },
            expendTab: function() {
                if (this.$DramaWrap.hasClass("expend-tab")) {
                    this.$DramaWrap.removeClass("expend-tab")
                } else {
                    this.$DramaWrap.addClass("expend-tab")
                }
            }
        });
        e.exports = l
    }
})