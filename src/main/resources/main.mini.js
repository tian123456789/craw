webpackJsonp([2], [function(e, t, n) {
    e.exports = n(44)
},
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
function(e, t, n) {
    "use strict";
    function v(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    var r = n(45);
    var i = v(r);
    var s = n(46);
    var o = v(s);
    var u = n(47);
    var a = v(u);
    var f = n(56);
    var l = v(f);
    var c = n(57);
    var h = v(c);
    var p = n(71);
    var d = v(p);
    l.
default.init();
    setTimeout(function() { (0, d.
    default)()
    },
    1200);
    var m = void 0;
    if (window.pageIdNum && window.pageIdNum == "27244" || $(".player-container #playerBox").length) {
        var g = new a.
    default;
        m = [{
            s: [0, 1292],
            v: "1058"
        },
        {
            s: [1292, 1580],
            v: "1202"
        },
        {
            s: [1580, 1830],
            v: "1490"
        },
        {
            s: [1830, 1e10],
            v: "1740"
        }];
        i.
    default.bind("responsed",
        function(e) {
            var t = e == "1740" ? true: false;
            g.responsedNav(t)
        });
        i.
    default.init(m).check(); (0, o.
    default)("1058");
        $(".u-upload .up-cnt-2 a").removeClass("a-cnt")
    }
    $("body").removeClass("on-loading");
    new h.
default;
    window.reloadInterAction = function() {
        new h.
    default
    }
},
,
function(e, t, n) {
    var r, i;
    "use strict"; ! (r = [n(14), n(45)], i = function(e, t) {
        return function(n) {
            if (e.isPad) {
                t.init([{
                    s: [0, 1e10],
                    v: n || "1080"
                }])
            }
        }
    }.apply(t, r), i !== undefined && (e.exports = i))
},
function(e, t, n) {
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
    var i = n(5);
    var s = m(i);
    var o = n(48);
    var u = m(o);
    var a = n(8);
    var f = m(a);
    var l = n(14);
    var c = m(l);
    var h = n(54);
    var p = m(h);
    var d = n(55);
    var v = m(d);
    var g = s.
default.extend({
        initialize:
        function() {
            var t = this;
            var n = new u.
        default;
            t.$nav = $("#topNav");
            g.superClass.initialize.call(t);
            f.
        default.one("checklogin",
            function() {
                return new p.
            default({
                    id:
                    "qnotice",
                    className: "notice-wrap"
                })
            });
            $.getScript("//static.youku.com/v2.0.5/soku/giantstar/js/sk-box-open.js",
            function() {
                XBox.init({
                    site: 14,
                    css: "//static.youku.com/v2.0.4/soku/giantstar/css/s_kubox.css"
                });
                var e = $("#qheader_search");
                if (e) {
                    var t = e.find("button");
                    if (t) {
                        $(t).bind("click",
                        function() {
                            if ((typeof ykQHeader === "undefined" ? "undefined": r(ykQHeader)) === "object") {
                                ykQHeader.doSearch()
                            }
                        })
                    }
                    var n = navigator.userAgent.toLowerCase();
                    if ((n.match(/ipad/) || [])[0]) {
                        var i = $("#qheader .g-header-container");
                        $("#headq").focus(function() {
                            $("body,html").animate({
                                scrollTop: 0
                            },
                            600);
                            i.css({
                                position: "absolute"
                            })
                        }).blur(function() {
                            i.css({
                                position: "fixed"
                            })
                        })
                    }
                }
            });
            if (t.$nav.length) {
                if (c.
            default.isPad) {
                    $("body").addClass("pad-view")
                }
                this.fixnav()
            }
            $("#topNav .top-nav-more-large").bind("mouseenter",
            function() {
                $(this).addClass("more-hover")
            }).bind("mouseleave",
            function() {
                var e = this;
                setTimeout(function() {
                    $(e).removeClass("more-hover")
                },
                200)
            }).bind("mousemove",
            function() {
                if (!$(this).hasClass("more-hover")) {
                    $(this).addClass("more-hover")
                }
            });
            try {
                if (!c.
            default.mac) {
                    if (typeof window.getP2PStateFromIku === "undefined") {
                        var i = "";
                        if (typeof version !== "undefined") {
                            i = version
                        }
                        $.getScript("//js.ykimg.com/youku/dist/js/lib/ikuAdapterNew.js",
                        function() {
                            window.getP2PStateFromIku("web_category")
                        })
                    } else {
                        window.getP2PStateFromIku("web_category")
                    }
                }
            } catch(s) {}
        },
        adPad: function() {
            $("#qheader").addClass("yk-has-adpad");
            $("#topNav").after('<div class="g-adpad"><a href="youkuhd://">&nbsp;</a></div>')
        },
        responsedNav: function y(e) {
            if (!this.$nav.length) {
                return
            }
            var y = $(".response-nav", this.$nav);
            var t = $(".top-nav-main", this.$nav);
            var n = $(".top-nav-more ul", this.$nav);
            if (e) {
                t.append(y)
            } else {
                n.prepend(y)
            }
        },
        fixnav: function() {
            function r() {
                var e = t.scrollTop();
                if (e > 560) {
                    n.addClass("white")
                } else {
                    n.removeClass("white")
                }
            }
            var t = $(window);
            var n = $("#qheader");
            r();
            t.bind("scroll", (0, v.
        default)(r, 300))
        }
    });
    e.exports = g
},
function(e, t, n) {
    "use strict";
    function g(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    var r = n(40);
    var i = g(r);
    var s = n(24);
    var o = g(s);
    var u = n(14);
    var a = g(u);
    var f = n(8);
    var l = g(f);
    var c = n(49);
    var h = g(c);
    var p = n(9);
    var d = g(p);
    var v = n(18);
    var m = g(v);
    var y = n(50);
    var b = n(51);
    var w = n(52);
    var E = n(53);
    e.exports = i.
default.extend({
        el:
        $("#uerCenter"),
        events: {
            "click #qheader_login,#qheader_reg,.record-login a,#qheader_panel-login": "loginin",
            "mouseenter .dropdown": "dropdown",
            "mouseleave .dropdown": "dropup",
            "mouseenter .panel": "panelShow",
            "click .singout": "loginout",
            "click .msg-list li a": "clickMsgLog",
            "click #msg-allread": "readAllMsgLog",
            "click .u-notice .handle,.u-bottom .fr": "clearMsg"
        },
        initialize: function() {
            var t = this;
            this.$before = this.find(".login-before");
            this.$after = this.find(".login-after");
            this.$panel = this.find(".panel");
            this.model = new h.
        default;
            this.model.bind("userInfo:success", this.renderUser.bind(this));
            this.model.bind("userInfo:error", this.loginerror.bind(this));
            this.model.bind("record:success", this.initRecord.bind(this));
            this.model.bind("msg:success", this.renderMsg.bind(this));
            this.model.bind("message:change", this.initMsg.bind(this));
            this.model.bind("message:show", this.showMsgLog.bind(this));
            this.find(".u-notice").removeClass("unload");
            setTimeout(function() {
                $(document).bind("logchange",
                function() {
                    console.log("log change");
                    t.status()
                })
            },
            500);
            this.status();
            this.initDowmload()
        },
        loginin: function(t) {
            console.log("login login");
            var n = this;
            var r = {};
            if ($(t.target).attr("id") == "qheader_reg") {
                r.regist = true
            }
            l.
        default.login(r,
            function() {
                n.status();
                $(document).trigger("header:login")
            });
            return false
        },
        loginout: function() {
            l.
        default.logout();
            self.status();
            $(document).trigger("header:loginout");
            return false
        },
        loginerror: function() {},
        status: function() {
            var t = this;
            l.
        default.checkLogin(function(e) {
                if (l.
            default.isLogin()) {
                    t.renderAvator();
                    t.model.getUserInfo();
                    t.$before.css("display", "none");
                    t.$after.css("display", "block")
                } else {
                    t.$after.css("display", "none");
                    t.$before.css("display", "block")
                }
                t.model.getRecord()
            })
        },
        renderAvator: function() {
            var t = l.
        default.getUserInfo();
            this.find(".avatar").attr({
                src:
                t.avatar["large"],
                title: t.username
            }).parent().attr("href", "//i.youku.com/i/" + t.encodeUid)
        },
        renderUser: function(t) {
            var t = $.extend(l.
        default.getUserInfo(), t),
            n = o.
        default.compile(y)({
                data:
                t
            });
            this.find(".u-panel .content").html(n);
            var r = $(".u-profile .vip-level-icon"),
            i = $(".u-login .login-after >a span");
            if (r.length != 0) {
                i[0].className = r[0].className;
                i[0].style.backgroundImage = r[0].style.backgroundImage;
                i[0].style.height = r[0].style.height
            }
            this.$after.removeClass("unload")
        },
        initSigned: function(t) {
            if (t) {
                this.find(".u-sign").html("已签到")
            }
        },
        initTask: function(t) {
            if (t == false) {
                this.find(".task-info >p").html("获取数据失败")
            } else if (t.length != 0) {
                var n = "<dl><dt><img src=" + t.small_logo_url + ' alt="任务图标"></dt><dd><em>' + t.name + "</em><span title=" + t.desc + ">" + t.desc + '</span></dd></dl><a target="_blank" href=' + t.click_url + ">" + t.button_text + "</a>";
                this.find(".task-info").html(n)
            } else {
                this.find(".task-info >p").html("暂时没有任务哦~")
            }
        },
        initMsg: function() {
            $("#qheader_notice_num").show();
            this.model.getMsgList()
        },
        initReadAllMsg: function() {
            var t = $(".u-notice [data-status='0'],.u-notice [data-status='1']"),
            n = $("#qheader_notice_num");
            t.removeClass("red").attr("data-status", "2");
            n.hide();
            $("#msg-allread").remove();
            d.
        default.getRequest("//msg.youku.com/api/push/update_all_status?" + CHUDA.API.getApiSignature(l.
        default.uid()) + "&status=2")
        },
        initRecord: function(t) {
            var n = o.
        default.compile(b)({
                data:
                t,
                isLogin: l.
            default.isLogin()
            });
            this.find(".u-record .content").html(n)
        },
        renderMsg: function(t) {
            var n = o.
        default.compile(w)({
                data:
                t,
                sec: m.
            default.release
            });
            this.find(".u-notice").addClass("loaded").find(".content").html(n);
            if (t.length) {
                this.find(".u-notice .panel").removeClass("no-msg")
            } else {
                this.find(".u-notice .panel").addClass("no-msg")
            }
            if ($("#msg-allread").length == 0 && this.find("msg-list>li.red").length) {
                this.find(".u-notice .u-bottom a").before("<a href='javascript:;' id='msg-allread'>全部标记已读</a>")
            }
            this.model.trigger("message:show")
        },
        initDowmload: function() {
            var t = o.
        default.compile(E);
            this.find(".u-app .content").html(t)
        },
        showMsgLog: function() {
            var t = $(".u-notice [data-status='0']"),
            n = "",
            r = this;
            if (!t.length) {
                return
            }
            t.each(function(e, t) {
                n += $(t).data("msgid") + ",";
                $(t).attr("data-status", "1")
            });
            n = n.substr(0, n.length - 1);
            r.sendMsgLog(1, n)
        },
        clickMsgLog: function(t) {
            var n = $(t.currentTarget).parents("li"),
            r = n.data("msgid");
            if (n.attr("data-status") && n.attr("data-status") != "2") {
                n.attr("data-status", "2").removeClass("red");
                this.sendMsgLog(2, r);
                if (this.$el.find(".msg-list>li.red").length == 0) {
                    this.readAllMsgLog()
                }
            }
        },
        readAllMsgLog: function() {
            this.model.one("message:clear", this.initReadAllMsg.bind(this));
            this.model.readAllMsg()
        },
        clearMsg: function() {
            this.model.readAllMsg();
            $("#qheader_notice_num").hide()
        },
        sendMsgLog: function(t, n) {
            var r = "//msg.youku.com/api/push/updatemsgstatusbatch?" + CHUDA.API.getApiSignature(l.
        default.uid());
            d.
        default.getRequest(r + "&msgid=" + n + "&status=" + t)
        },
        dropdown: function(t) {
            var n = $(t.currentTarget),
            r = this;
            if (n.hasClass("unload") || n.parent().hasClass("unload")) {
                return
            }
            this.$panel.removeClass("dropdown-open");
            n.addClass("dropdown-open");
            if (n.parents(".u-notice").length && !n.parents(".u-notice").hasClass("loaded")) {
                this.model.getMsgList()
            }
        },
        dropup: function(t) {
            var n = $(t.currentTarget);
            $(t.currentTarget).removeClass("dropdown-open")
        },
        panelShow: function() {
            clearTimeout(this.dropupHandle)
        }
    })
},
function(e, t, n) {
    "use strict";
    function f(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    var r = n(5);
    var i = f(r);
    var s = n(9);
    var o = f(s);
    var u = n(8);
    var a = f(u);
    var l = i.
default.extend({
        initialize:
        function() {
            var t = this;
            l.superClass.initialize.call(t);
            t.op = {
                callbackName: "callback",
                charset: "utf-8"
            };
            t.msgNum = -1;
            t.subNum = -1
        },
        getUserInfo: function() {
            var t = this;
            var n = "//lv.youku.com/api/grade/get_uinfo?from=web";
            var r = "//vip.youku.com/member/show_valid_member.jsonp?version=2";
            var i = "//lvip.youku.com/api/user/get_user_info?";
            o.
        default.getJSON(n, {},
            function(e) {
                var n = e.data;
                n.encodeUid = n.uid_encode;
                n.score_hour = (n.score / 60).toFixed(1);
                n.upgrade_score_hour = (n.upgrade_score / 60).toFixed(1);
                n.percent = n.today_score > n.today_max_score ? "100%": (n.today_score / n.today_max_score).toFixed(2) * 100 + "%";
                if (e.errno == 0) {
                    o.
                default.getJSON(r, {},
                    function(e) {
                        if (e.code == 2e4) {
                            n = $.extend(n, e.result);
                            o.
                        default.getJSON(i + CHUDA.API.getApiSignature(a.
                        default.uid()), {},
                            function(e) {
                                if (e.errno == 0) {
                                    n = $.extend(n, e.data);
                                    t.getSigned();
                                    t.getPoint();
                                    t.getTask();
                                    t.trigger("userInfo:success", [n]);
                                    window.XloginEvent && window.XloginEvent.trigger("login:userInfo", [n])
                                }
                            },
                            t.op)
                        } else {
                            t.trigger("userInfo:error", [])
                        }
                    },
                    t.op)
                } else {
                    t.trigger("userInfo:error", [])
                }
            },
            t.op)
        },
        getRecord: function() {
            var t = this;
            var n = "//cmstool.youku.com/cms/playlog/get";
            o.
        default.getJSON(n, {},
            function(e) {
                var n = ["a", "b", "c", "d"],
                r = [];
                if (e.playtag) {
                    for (var i = 0; i < n.length; i++) {
                        var s = e.playtag[n[i]];
                        r.push(s)
                    }
                }
                t.trigger("record:success", [r])
            },
            t.op)
        },
        getSigned: function() {
            var t = "//actives.youku.com/task/show/user_is_sign";
            var n = this;
            var r = false;
            var i = a.
        default.uid();
            if (i) {
                o.
            default.getJSON(t, {
                    uid: i
                },
                function(e) {
                    if (e.errno == 0 && e.data.is_sign == 1) {
                        r = true
                    }
                    n.trigger("signned:success", [r])
                },
                n.op)
            } else {
                n.trigger("signned:success", [r])
            }
        },
        getPoint: function() {
            var t = "//lv.youku.com/api/grade/get_grade_point";
            var n = this;
            o.
        default.getJSON(t, {},
            function(e) {
                if (e.errno == 0) {
                    n.trigger("pointed:success", e.data.point)
                }
            },
            n.op)
        },
        getTask: function() {
            var t = "//task.youku.com/task/task/get_my_task";
            var n = this;
            o.
        default.getJSON(t, {},
            function(e) {
                if (e.errno == 0 && e.data) {
                    n.trigger("task:success", e.data.user_task)
                } else {
                    n.trigger("task:success", false)
                }
            },
            n.op)
        },
        getMsgList: function() {
            var t = this;
            var n = a.
        default.uid();
            var r = "//msg.youku.com/api/push/get_msg_box_list?" + CHUDA.API.getApiSignature(n);
            if (n) {
                o.
            default.getJSON(r, {
                    page: 1,
                    page_size: 4
                },
                function(e) {
                    var n = e.data.msg_list;
                    if (e.errno == 0) {
                        t.trigger("msg:success", [n])
                    }
                },
                t.op)
            }
        },
        getNotice: function() {
            var t = this;
            var n = "//msg.youku.com/api/notify/countweb";
            o.
        default.getJSON(n, {
                uid: a.
            default.uid()
            },
            function(e) {
                if (e.errno == 0) {
                    var n = e.data.unreadcount;
                    if (n > 0) {
                        t.trigger("message:change", [n])
                    }
                }
            },
            t.op)
        },
        readAllMsg: function() {
            var t = this;
            var n = "//msg.youku.com/api/notify/clearweb";
            o.
        default.getJSON(n, {
                uid: a.
            default.uid()
            },
            function(e) {
                if (e.errno == 0) {
                    t.trigger("message:clear", [])
                }
            },
            t.op)
        }
    });
    e.exports = l
},
function(e, t) {
    e.exports = ' <%var level,leveltxt,isVip,emailDone,phoneDone,levelurl;%>\n<%levelurl=\'//cps.youku.com/redirect.html?id=000145de\'%>\n<%if(data.is_vip){%>\n	<%levelClass = \'level-vip\'+data.vip_grade%>\n	<%leveltxt = \'优酷土豆黄金会员\'%>\n	<%isVip =  true%>\n<%}else if(data.is_lvip){%>\n	<%levelClass = \'level-lvip\'+data.vip_grade%>\n  <%levelurl=\'//cps.youku.com/redirect.html?id=000145dd\'%>\n	<%leveltxt = \'优酷土豆白银会员\'%>\n	<%isVip = true%>\n<%}else{%>\n	<%levelClass = \'level-expired\'+data.vip_grade%>\n	<%leveltxt = \'会员已过期\'%>\n<%}%>\n\n<%if (data.is_verify_email==0){%>\n	<%emailDone=\'ico-valid-email-done\'%>\n<%}%>\n<%if (data.is_verify_mobile){%>\n	<%phoneDone=\'ico-valid-phone-done\'%>\n<%}%>\n\n<div class="u-content">                 \n    <div class="u-info">\n        <div class="u-avatar">\n            <a href="//i.youku.com/i/<%=data.encodeUid%>" target="_blank">\n              <img src="<%=data.user_image%>">\n            </a>\n        </div>\n        <div class="u-profile">\n            <div class="u-name">\n              <a href="//i.youku.com/i/<%=data.encodeUid%>" class="u-link" target="_blank" title="<%=data.user_name%>"><%=data.user_name%></a>\n              <!--<a href="//actives.youku.com/task/signv2/index"  target="_blank" class="u-sign">签到</a>-->\n            </div>\n            <div class="u-credit">\n            	<%if (data.vip_grade!=0){%>\n              <a href="<%=levelurl%>" target="_blank">\n                <span class="vip-level-icon" title="<%=data.name%>：VIP<%=data.vip_grade%>" style="background-image:url(<%=data.icon%>);"></span>\n              </a>\n              <%}%>\n              <%if (data.isverified){%>\n              <a class="ico-verify" href="//rz.youku.com/yc" target="_blank" title="自频道认证"></a>        \n              <%}%>\n              <a class="ico-valid-email <%=emailDone%>" href="//id.youku.com" target="_blank"></a>\n              <a class="ico-valid-phone <%=phoneDone%>" href="//id.youku.com" target="_blank"></a>\n            </div>\n        </div>\n    </div> \n                               \n    <ul class="u-list">\n        <li>\n          <a href="//ding.youku.com/u/subscribeUpdate"  target="_blank" class="u-watch"> <!--//lvip.youku.com/task/pbb/index 节目热播单-->\n            <em></em>  我的追剧\n          </a>\n        </li>                            \n        <li>\n          <a href="//faxian.youku.com/favorite"  target="_blank" class="u-collect">\n            <em></em>  我的收藏\n          </a>\n        </li>\n        <li>\n          <a href="//i.youku.com/i/<%=data.encodeUid%>"  target="_blank" class="u-zpd">\n            <em></em>  我的自频道\n          </a>\n        </li>\n        <%if (!data.is_yp){%>  \n        <li>\n          <a href="//creation.youku.com"  target="_blank" class="u-center">\n            <em></em>  创作中心\n          </a>\n        </li>\n        <%}else{%>\n        <!--<li>\n          <a href="//yp.youku.com/dashboard"  target="_blank" class="u-ypd">\n            <em></em>  优拍档\n          </a>\n        </li>-->\n        <li>\n          <a href="//mcn.tudou.com" target="_blank" class="u-dyh">\n            <em></em>  大鱼合伙人\n          </a>\n        </li>\n      <%}%>\n    </ul>  \n</div> '
},
function(e, t) {
    e.exports = '<%\nvar num=0, \n    time=[\'今天\',\'昨天\',\'一周内\',\'更早\'],\n    max=6,\n    iconClass={\n    "电视":"ico-tv",\n    "电脑":"ico-pc",\n    "手机":"ico-tel",\n    "平板":"ico-pad"\n    }\n%>\n<%if(!isLogin){%>\n  <div class="record-login">\n      <a href="javascript:void(0);">登录</a>\n      同步各端记录\n  </div>\n<%}%>\n<dl class="rec-list">\n<% data.forEach(function(d, t){ %>\n    <% d.forEach(function(r, i){ %>\n      <% if (num < max && !r.isdelete){%>\n        <%if(i==0){%>\n        <dt><%=time[t]%></dt>\n        <%}%>      \n        <% num++; %>\n        <%var prrcent=(r.play_percent==\'0%\'?\'1%\':r.play_percent)%>\n        <dd>\n          <a href="//v.youku.com/v_show/id_<%=r.vidEncoded%>.html<%if (r.sec>0){%>?firsttime=<%=r.sec%><%}%>" target="video" title="<%=r.title%>"><%=r.title%></a> \n          <span class="rec-st">\n            <i class="ico-device <%=iconClass[r.devicename]%>"></i> \n            看到<%if (r.watchStage){%><%=r.watchStage%>  \n            <%}%><%=prrcent%>\n          </span>\n        </dd> \n      <%}%>\n    <% }); %>  \n<% }); %> \n</dl>\n<% if(num>0){%>\n<div class="u-bottom">\n   <a target="_blank" href="//faxian.youku.com/watch_record" class="fr">查看更多</a>\n  <!--<a href="//lvip.youku.com/task/pbb/index" target="_blank" >节目热播列表</a> -->\n</div>\n<%}else{%>\n<div class="no-record">\n  <i class="no-record-bg"></i>\n  <p>您暂时还没有观看记录呦～</p>\n</div>\n<%}%>'
},
function(e, t) {
    e.exports = '<ul class="msg-list">\n<% if(data.length==0){%>\n    <li><span>您最近没有收到新的消息</span></li>\n<%}else{%>\n    <% data.forEach(function(t, i){ %>\n    <li data-msgid="<%=t.msgid%>" <%if(t.status!=2){%> data-status=<%=t.status%> class="red"<%}%> >\n        <dl>\n            <dt>\n                <i class="icon-warn"></i>\n                <img src="<%=t.fromuid.img%>">\n            </dt>\n            <dd class="msg-single"><span><%=t.fromuid.name%></span><a target="_blank" href="<%=t.content.link%>" title="<%=t.content.ifo%>"><%=t.content.ifo%></a></dd>\n            <dd class="msg-time"><%=sec(1e3*t.access_time)%></dd>\n        </dl>\n    </li>\n    <% }); %>\n<%}%>\n</ul> '
},
function(e, t) {
    e.exports = '<div class="g-nav-app-intro">\n  <a href="//pcapp-update.youku.com/channelinstall/ywebtop1" target="_blank" class="g-nav-iku">\n      <img src="//img.alicdn.com/tfs/TB1qTFVXEz1gK0jSZLeXXb9kVXa-143-164.svg" width="64">\n      <h3>PC客户端</h3>\n      <span>免费畅享1080P</span>\n</a><a href="//mobile.youku.com/index/wireless" target="_blank" class="g-nav-app">\n      <img src="//img.alicdn.com/tfs/TB12jXWXET1gK0jSZFrXXcNCXXa-320-320.png" width="64">\n      <h3>优酷移动APP</h3>\n      <span>全网独播尽在手中</span>\n  </a>\n\n<a href="//pd.youku.com/CIBN" target="_blank" class="g-nav-tv">\n      <h3>优酷TV版</h3>\n      <span>CIBN酷喵影视智能电视App</span>\n</a>\n</div>\n'
},
function(e, t, n) {
    "use strict";
    function c(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    var r = n(40);
    var i = c(r);
    var s = n(9);
    var o = c(s);
    var u = n(4);
    var a = c(u);
    var f = n(8);
    var l = c(f);
    window.QheaderModule = {
        initUnloginMessage: function(t) {
            if (t && t.length > 0) {
                var n = Math.round((new Date).getTime() / 1e3);
                for (var r = 0; r < t.length; r++) {
                    if (typeof t[r]["access_time"] != "undefined" && !isNaN(parseInt(t[r]["access_time"])) && n < parseInt(t[r]["access_time"])) continue;
                    if (typeof t[r]["expire_time"] != "undefined" && !isNaN(parseInt(t[r]["expire_time"])) && n > parseInt(t[r]["expire_time"])) continue;
                    var i = "msgid_" + t[r]["msgid"];
                    if (! (0, a.
                default)(i)) {
                        window.QheaderModule.renderMessage(t[r]); (0, a.
                    default)(i, t[r]["msgid"]);
                        o.
                    default.getRequest("//msg.youku.com/api/push/read_unlogin_msg?msgid=" + t[r]["msgid"]);
                        break
                    }
                }
            }
        },
        renderMessage: function(t) {
            var n = t.content,
            r = window.uid ? 1 : 0,
            i = $("#qnotice"),
            s;
            var o = n.link ? "<a href='" + n.link + "' target='_blank' class='mbtn'>" + n.btnname + "</a>": "";
            var u = "<div loginstatus='" + r + "' data-msgid='" + t.msgid + "'><h1>" + n.title + "</h1><p class='notice-info'>" + (n.ifo.length > 59 ? n.ifo.substr(0, 59) + "...": n.ifo) + "</p><div>" + o + "<a id='closeNotice' href='javascript:;'>关闭</a> </div></div>";
            i.html(u).show();
            s && clearTimeout(s);
            if (t.fade) {
                var a = parseInt(t.fade) * 1e3;
                s = setTimeout(function() {
                    i.hide()
                },
                a)
            }
        }
    };
    var h = i.
default.extend({
        events:
        {
            "click #closeNotice":
            "handleCloseNotice",
            "click .mbtn": "reportClickLog"
        },
        initialize: function() {
            var t = this,
            n = $(window);
            if ($(".g-header").length == 0) {
                return
            }
            $(".g-header").after(t.$el);
            t.getNotice();
            t.responseNotice();
            n.bind("cresize",
            function() {
                t.responseNotice()
            });
            $(document).bind("login",
            function(e) {
                if ($("#qnotice").length == 0) return;
                t.getNotice()
            })
        },
        responseNotice: function() {
            if ($(window).width() < 1080) {
                this.$el.addClass("qsmall")
            } else {
                this.$el.removeClass("qsmall")
            }
        },
        getNotice: function() {
            var t = this;
            var n = l.
        default.uid();
            if (n) {
                var r = "//msg.youku.com/api/push/getpopupmsg?" + CHUDA.API.getApiSignature(n);
                this.logurl = "//msg.youku.com/api/push/updatemsgstatus?" + CHUDA.API.getApiSignature(n);
                o.
            default.getJSON(r, {},
                function(e) {
                    if (e.errno === undefined || e.errno != 0) return;
                    var n = e.data;
                    if (n && n.msgs && n.msgs.length > 0) {
                        window.QheaderModule.renderMessage(n.msgs[0]);
                        o.
                    default.getRequest(t.logurl + "&msgid=" + n.msgs[0].msgid + "&status=1")
                    }
                },
                {
                    callbackName: "callback",
                    charset: "utf-8"
                })
            } else {
                var r = "//dl-oss-wanju.youku.com/msg/chuda_message.js";
                o.
            default.getScript(r)
            }
        },
        reportClickLog: function() {
            var t = this.$el.children("div"),
            n = t.attr("loginstatus"),
            r = t.data("msgid");
            if (n == 0) {
                var i = "//msg.youku.com/api/push/click_unlogin_msg?msgid=" + r;
                o.
            default.getRequest(i)
            } else {
                if (this.logurl) {
                    o.
                default.getRequest(this.logurl + "&msgid=" + r + "&status=2")
                }
            }
        },
        handleCloseNotice: function() {
            this.$el.hide()
        }
    });
    e.exports = h
},
,
function(e, t, n) {
    "use strict";
    function s(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    var r = n(4);
    var i = s(r);
    var o = function() {
        $(".ikuDownLoad").on("click",
        function(e) {
            if (window.ikuDownloadIng) return false;
            var t = e.target || e.srcElement;
            if (!t) {
                return false
            }
            var n;
            if (window.navigator && navigator.platform && navigator.platform.indexOf("Mac") === 0) {
                n = $(t).attr("data-down-mac")
            } else {
                n = $(t).attr("data-down-href")
            }
            if (!n || window.ikuDownloadIng) return false;
            window.ikuDownloadIng = true;
            var r = document.createElement("iframe");
            r.width = 0;
            r.height = 0;
            r.src = n;
            document.body.appendChild(r);
            setTimeout(function() {
                document.body.removeChild(r);
                window.ikuDownloadIng = false
            },
            2e3);
            return false
        });
        if (window.navigator && navigator.platform && navigator.platform.indexOf("Mac") === 0) {
            $(".ikuDownLoad").each(function(e, t) {
                $(t).html($(t).html().replace("PC", "Mac"))
            })
        }
        var t = (0, i.
    default)("stt"),
        n = $("#sttrans"),
        r = {
            ss: function() {
                return "万与丑专业丛东丝丢两严丧个丬丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅从仑仓仪们价众优伙会伛伞伟传伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬俣俦俨俩俪俭债倾偬偻偾偿傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冢冯冲决况冻净凄凉凌减凑凛几凤凫凭凯击凼凿刍划刘则刚创删别刬刭刽刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勐勚匀匦匮区医华协单卖卢卤卧卫却卺厂厅历厉压厌厍厕厢厣厦厨厩厮县参叆叇双发变叙叠叶号叹叽吁后吓吕吗吣吨听启吴呒呓呕呖呗员呙呛呜咏咔咙咛咝咤咴咸哌响哑哒哓哔哕哗哙哜哝哟唛唝唠唡唢唣唤唿啧啬啭啮啰啴啸喷喽喾嗫呵嗳嘘嘤嘱噜噼嚣嚯团园囱围囵国图圆圣圹场坂坏块坚坛坜坝坞坟坠垄垅垆垒垦垧垩垫垭垯垱垲垴埘埙埚埝埯堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姜娄娅娆娇娈娱娲娴婳婴婵婶媪嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岙岚岛岭岳岽岿峃峄峡峣峤峥峦崂崃崄崭嵘嵚嵛嵝嵴巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂幞干并广庄庆庐庑库应庙庞废庼廪开异弃张弥弪弯弹强归当录彟彦彻径徕御忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恳恶恸恹恺恻恼恽悦悫悬悭悯惊惧惨惩惫惬惭惮惯愍愠愤愦愿慑慭憷懑懒懔戆戋戏戗战戬户扎扑扦执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦捞损捡换捣据捻掳掴掷掸掺掼揸揽揿搀搁搂搅携摄摅摆摇摈摊撄撑撵撷撸撺擞攒敌敛数斋斓斗斩断无旧时旷旸昙昼昽显晋晒晓晔晕晖暂暧札术朴机杀杂权条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桊桠桡桢档桤桥桦桧桨桩梦梼梾检棂椁椟椠椤椭楼榄榇榈榉槚槛槟槠横樯樱橥橱橹橼檐檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉污汤汹沓沟没沣沤沥沦沧沨沩沪沵泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温游湾湿溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪漤潆潇潋潍潜潴澜濑濒灏灭灯灵灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煅煳熘爱爷牍牦牵牺犊犟状犷犸犹狈狍狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珉珏珐珑珰珲琎琏琐琼瑶瑷璇璎瓒瓮瓯电画畅畲畴疖疗疟疠疡疬疮疯疱疴痈痉痒痖痨痪痫痴瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫癯皑皱皲盏盐监盖盗盘眍眦眬着睁睐睑瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硅硕硖硗硙硚确硷碍碛碜碱碹磙礼祎祢祯祷祸禀禄禅离秃秆种积称秽秾稆税稣稳穑穷窃窍窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹签简箓箦箧箨箩箪箫篑篓篮篱簖籁籴类籼粜粝粤粪粮糁糇紧絷纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肷肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腼腽腾膑臜舆舣舰舱舻艰艳艹艺节芈芗芜芦苁苇苈苋苌苍苎苏苘苹茎茏茑茔茕茧荆荐荙荚荛荜荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莜莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒇蒉蒋蒌蓝蓟蓠蓣蓥蓦蔷蔹蔺蔼蕲蕴薮藁藓虏虑虚虫虬虮虽虾虿蚀蚁蚂蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襁襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯詟誉誊讠计订讣认讥讦讧讨让讪讫训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶谷豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跖跞践跶跷跸跹跻踊踌踪踬踯蹑蹒蹰蹿躏躜躯车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郁郄郏郐郑郓郦郧郸酝酦酱酽酾酿释里鉅鉴銮錾钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铍铎铏铐铑铒铕铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗错锚锜锞锟锠锡锢锣锤锥锦锨锩锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镆镇镈镉镊镌镍镎镏镐镑镒镕镖镗镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陧陨险随隐隶隽难雏雠雳雾霁霉霭靓静靥鞑鞒鞯鞴韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颣颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓魇魉鱼鱽鱾鱿鲀鲁鲂鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳛鳜鳝鳞鳟鳠鳡鳢鳣鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹯鹰鹱鹲鹳鹴鹾麦麸黄黉黡黩黪黾鼋鼌鼍鼗鼹齄齐齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龙龚龛龟志制咨只里系范松没尝尝闹面准钟别闲干尽脏拼"
            },
            ts: function() {
                return "萬與醜專業叢東絲丟兩嚴喪個爿豐臨為麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅從侖倉儀們價眾優夥會傴傘偉傳傷倀倫傖偽佇體餘傭僉俠侶僥偵側僑儈儕儂俁儔儼倆儷儉債傾傯僂僨償儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農塚馮衝決況凍淨淒涼淩減湊凜幾鳳鳧憑凱擊氹鑿芻劃劉則剛創刪別剗剄劊劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳猛勩勻匭匱區醫華協單賣盧鹵臥衛卻巹廠廳曆厲壓厭厙廁廂厴廈廚廄廝縣參靉靆雙發變敘疊葉號歎嘰籲後嚇呂嗎唚噸聽啟吳嘸囈嘔嚦唄員咼嗆嗚詠哢嚨嚀噝吒噅鹹呱響啞噠嘵嗶噦嘩噲嚌噥喲嘜嗊嘮啢嗩唕喚呼嘖嗇囀齧囉嘽嘯噴嘍嚳囁嗬噯噓嚶囑嚕劈囂謔團園囪圍圇國圖圓聖壙場阪壞塊堅壇壢壩塢墳墜壟壟壚壘墾坰堊墊埡墶壋塏堖塒塤堝墊垵塹墮壪牆壯聲殼壺壼處備複夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗媯姍薑婁婭嬈嬌孌娛媧嫻嫿嬰嬋嬸媼嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵堯尷屍盡層屭屜屆屬屢屨嶼歲豈嶇崗峴嶴嵐島嶺嶽崠巋嶨嶧峽嶢嶠崢巒嶗崍嶮嶄嶸嶔崳嶁脊巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪襆幹並廣莊慶廬廡庫應廟龐廢廎廩開異棄張彌弳彎彈強歸當錄彠彥徹徑徠禦憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀懇惡慟懨愷惻惱惲悅愨懸慳憫驚懼慘懲憊愜慚憚慣湣慍憤憒願懾憖怵懣懶懍戇戔戲戧戰戩戶紮撲扡執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏撈損撿換搗據撚擄摑擲撣摻摜摣攬撳攙擱摟攪攜攝攄擺搖擯攤攖撐攆擷擼攛擻攢敵斂數齋斕鬥斬斷無舊時曠暘曇晝曨顯晉曬曉曄暈暉暫曖劄術樸機殺雜權條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒棬椏橈楨檔榿橋樺檜槳樁夢檮棶檢欞槨櫝槧欏橢樓欖櫬櫚櫸檟檻檳櫧橫檣櫻櫫櫥櫓櫞簷檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳彙漢汙湯洶遝溝沒灃漚瀝淪滄渢溈滬濔濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗湧濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣濕潰濺漵漊潷滾滯灩灄滿瀅濾濫灤濱灘澦濫瀠瀟瀲濰潛瀦瀾瀨瀕灝滅燈靈災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾煆糊溜愛爺牘犛牽犧犢強狀獷獁猶狽麅獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽瑉玨琺瓏璫琿璡璉瑣瓊瑤璦璿瓔瓚甕甌電畫暢佘疇癤療瘧癘瘍鬁瘡瘋皰屙癰痙癢瘂癆瘓癇癡癉瘮瘞瘺癟癱癮癭癩癬癲臒皚皺皸盞鹽監蓋盜盤瞘眥矓著睜睞瞼瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜矽碩硤磽磑礄確鹼礙磧磣堿镟滾禮禕禰禎禱禍稟祿禪離禿稈種積稱穢穠穭稅穌穩穡窮竊竅窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩簹箏籌簽簡籙簀篋籜籮簞簫簣簍籃籬籪籟糴類秈糶糲粵糞糧糝餱緊縶糸糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺絏紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏絛繼綈績緒綾緓續綺緋綽緔緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒韁繾繰繯繳纘罌網羅罰罷羆羈羥羨翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚膁腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕齶膩靦膃騰臏臢輿艤艦艙艫艱豔艸藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇檾蘋莖蘢蔦塋煢繭荊薦薘莢蕘蓽蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞蓧萊蓮蒔萵薟獲蕕瑩鶯蓴蘀蘿螢營縈蕭薩蔥蕆蕢蔣蔞藍薊蘺蕷鎣驀薔蘞藺藹蘄蘊藪槁蘚虜慮虛蟲虯蟣雖蝦蠆蝕蟻螞蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖嫋褘襪襲襏裝襠褌褳襝褲襇褸襤繈襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶讋譽謄訁計訂訃認譏訐訌討讓訕訖訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗諡謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖穀豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭齎贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贗讚贇贈贍贏贛赬趙趕趨趲躉躍蹌蹠躒踐躂蹺蹕躚躋踴躊蹤躓躑躡蹣躕躥躪躦軀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰鬱郤郟鄶鄭鄆酈鄖鄲醞醱醬釅釃釀釋裏钜鑒鑾鏨釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鈍鈔鍾鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷缽鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸鉶銬銠鉺銪鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐧銳銻鋃鋟鋦錒錆鍺錯錨錡錁錕錩錫錮鑼錘錐錦鍁錈錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鏌鎮鎛鎘鑷鐫鎳鎿鎦鎬鎊鎰鎔鏢鏜鏍鏰鏞鏡鏑鏃鏇鏐鐔钁鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑲長門閂閃閆閈閉問闖閏闈閑閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隉隕險隨隱隸雋難雛讎靂霧霽黴靄靚靜靨韃鞽韉韝韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥纇顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飆飛饗饜飣饑飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢魘魎魚魛魢魷魨魯魴魺鮁鮃鯰鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鯰鯛鯨鯵鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鱷鰍鰒鰉鰁鱂鯿鰠鼇鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅鰼鱖鱔鱗鱒鱯鱤鱧鱣鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鴬鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鶤鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶿鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺鸇鷹鸌鸏鸛鸘鹺麥麩黃黌黶黷黲黽黿鼂鼉鞀鼴齇齊齏齒齔齕齗齟齡齙齠齜齦齬齪齲齷龍龔龕龜誌製谘隻裡係範鬆冇嚐嘗鬨麵準鐘彆閒乾儘臟拚"
            },
            convert: function(t, n) {
                var i = [],
                s = r.ss(),
                o = r.ts();
                for (var u = 0,
                a = t.length; u < a; u++) {
                    var f = t.charAt(u),
                    l = t.charCodeAt(u);
                    if (n) g = o.indexOf(f);
                    else g = s.indexOf(f);
                    if (l > 19968 && l < 40869 && g != -1) {
                        if (n) i.push(s.charAt(g));
                        else i.push(o.charAt(g))
                    } else {
                        i.push(f)
                    }
                }
                return i.join("")
            },
            travel: function(t, n) {
                if (!n) return;
                for (var i = 0,
                s = n.length; i < s; ++i) {
                    if (n[i].nodeType === 3) {
                        n[i].data = r.convert(n[i].data, t)
                    } else {
                        if (n[i].nodeType === 1 && n[i].nodeName != "SCRIPT") {
                            r.travel(t, n[i].childNodes)
                        }
                    }
                }
            },
            trans: function(t, n) {
                r.travel(t, n || document.body.childNodes)
            }
        };
        var s = function(n) {
            var s = r.trans;
            if (t) {
                s();
                if (n) n.html("简体版")
            } else {
                if (t === null && typeof window.countryCode !== "undefined" && window.countryCode !== "CN") {
                    s();
                    n.html("简体版"); (0, i.
                default)("stt", 1, 10, {
                        domain: "youku.com"
                    })
                }
            }
            if (!n) return;
            var o = function() {
                if ((0, i.
            default)("stt")) {
                    s(true);
                    n.html("繁體版"); (0, i.
                default)("stt", "", -1, {
                        domain: "youku.com"
                    })
                } else {
                    s();
                    n.html("简体版"); (0, i.
                default)("stt", 1, 10, {
                        domain: "youku.com"
                    })
                }
            }.bind(n);
            n.bind("click", o)
        };
        if (n.length) {
            s(n)
        } else {
            $(function() {
                var e = $("#sttrans");
                s(e)
            })
        }
    };
    e.exports = {
        init: o
    }
},
function(e, t, n) {
    "use strict";
    function c(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    var r = n(40);
    var i = c(r);
    var s = n(58);
    var o = c(s);
    var u = n(65);
    var a = c(u);
    var f = n(70);
    var l = c(f);
    var h = i.
default.extend({
        initialize:
        function(t) {
            h.superClass.initialize.call(this);
            this.Playlist = new o.
        default({
                el:
                "#Drama"
            });
            if (PageConfig.tabs) {
                this.tabsInit()
            }
        },
        tabsInit: function() {
            var t = PageConfig.tabs.split(",");
            var n;
            $.each(t,
            function(e, t) {
                if (t === "feeinfo") {
                    n = new a.
                default
                }
            });
            if ($(".vip-sell-wrap").length && !n) {
                n = new a.
            default
            }
        }
    });
    e.exports = h
},
function(e, t, n) {
    "use strict";
    function p(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    var r = n(40);
    var i = p(r);
    var s = n(4);
    var o = p(s);
    var u = n(45);
    var a = p(u);
    var f = n(59);
    var l = p(f);
    var c = n(61);
    var h = p(c);
    var d = i.
default.extend({
        initialize:
        function() {
            var t = this;
            this.$wrap = $("#Dramalist_wrap", this.el);
            this.scroll = new l.
        default($(".scroller", this.el));
            this._resizeScroll();
            var n = $("#Dramalist_wrap .current", this.el);
            if (n.length) {
                this.scroll.scrollToElement(n, {
                    pos: 300
                })
            }
            if (PageConfig.playmode == 3 || $(".dayu-info", this.$el).length) {
                this.initFixedBar()
            }
            this.pages = new h.
        default(PageConfig.page);
            this.pages.bind("pages:change",
            function() {
                t.scroll.update();
                t.loadScrollImage()
            });
            window.ykPlyr && ykPlyr.bind("player:onPlayerStart", this.initOnPlayerStart.bind(this));
            a.
        default.bind("responsed",
            function(e) {
                t._resizeScroll()
            });
            this.$el.bind("list:update",
            function() {
                t._resizeScroll()
            })
        },
        initOnPlayerStart: function(t) {
            if (t.isFullScreen) {
                this.upTitle();
                try {
                    if ("replaceState" in history) {
                        var n = "/v_show/id_" + PageConfig.videoId2 + ".html";
                        if (PageConfig.folderId) {
                            if (PageConfig.folderId == 0) {
                                n = n
                            } else {
                                n += "?f=" + PageConfig.folderId
                            }
                        }
                        var r = {
                            url: n
                        };
                        history.replaceState(r, "", n)
                    }
                } catch(i) {}
            } else {
                var s = (0, o.
            default)("u");
                if (s == "__LOGOUT__" && (PageConfig.DuboLoginLimitTime == 0 || !PageConfig.DuboLoginLimitTime) && (PageConfig.SubscribeLoginLimitTime == 0 || !PageConfig.SubscribeLoginLimitTime)) {
                    var u = 3;
                    var a = (0, o.
                default)("view") || 0;
                    if (a >= u || a < 0) {
                        setTimeout(function() {
                            try {
                                ykPlyr.pauseVideo(true);
                                ykPlyr.zoomOut()
                            } catch(e) {}
                        },
                        2e3); (0, o.
                    default)("view", 0, {
                            expires: 1
                        });
                        PageConfig.login_player8 = true;
                        $("#qheader_login").trigger("click")
                    } else { (0, o.
                    default)("view", ++a, {
                            expires: 1
                        })
                    }
                }
            }
        },
        upTitle: function() {
            var t = PageConfig.videoId2;
            var n = "item_";
            var r = $('[item-id="' + n + t + '"]');
            var i = r.attr("title");
            var s = $("#subtitle");
            $(".item.current", this.el).removeClass("current");
            r.addClass("current");
            if (s.length && i != "" && s.html() != i) {
                s.html(i);
                s.parent().attr("title", i);
                document.title = i
            }
        },
        _resizeScroll: function() {
            var t = $("#player_sidebar").height() - $(".scroll-area").position().top;
            $(".scroll-area,.scroller,.scrollbar_track", $("#Drama")).height(t);
            this.scroll.update();
            this.loadScrollImage()
        },
        initFixedBar: function() {
            var t = this;
            window.setTimeout(function() {
                var e = $(".drama-fragment");
                t.scroll.bind("scroll",
                function(e) {
                    e = e || 0;
                    if (e > $(".drama-tab", t.el).height() || 0) {
                        if (!t.$el.hasClass("drama-scroll-fixed")) {
                            t.$el.addClass("drama-scroll-fixed");
                            t._resizeScroll()
                        }
                    } else {
                        if (t.$el.hasClass("drama-scroll-fixed")) {
                            t.$el.removeClass("drama-scroll-fixed");
                            t._resizeScroll()
                        }
                    }
                });
                t.$el.on("click", ".scroll-fixed",
                function() {
                    t.scroll.scrollTo(0, false, true)
                }).on("click", ".scroll-bottom-fixed",
                function() {
                    t.scroll.scrollToElement(e, {
                        animate: true,
                        pos: 10
                    })
                }).on("click", ".item-cover-fixed",
                function() {
                    var e = $(".item-cover.current", t.$el);
                    if ($(".item-cover-fixed.active", t.$el).length) {
                        t.scroll.scrollToElement(e, {
                            animate: true,
                            pos: 10
                        })
                    } else {
                        t.scroll.scrollTo(0, false, true)
                    }
                    return false
                })
            },
            500)
        },
        loadScrollImage: function() {
            function s(e) {
                var t = 0;
                while (r.length) {
                    if (r[0][0] < e + i + 200) {
                        var n = r[0][1];
                        n.attr("src", n.attr("_src"));
                        r.shift()
                    } else {
                        break
                    }
                    t++
                }
            }
            var t = $(".scroller", this.el);
            var n = t.find("img[_src]");
            var r = [];
            var i = t.height();
            setTimeout(function() {
                s(0)
            },
            50);
            if (n.length) {
                $.each(n,
                function(e, t) {
                    r.push([$(t).closest(".item").position().top, n.eq(e)])
                })
            }
            this.scroll.bind("scroll",
            function(e) {
                setTimeout(function() {
                    s(e)
                },
                100)
            })
        }
    });
    e.exports = d
},
function(e, t, n) {
    "use strict";
    function c(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    var r = n(5);
    var i = c(r);
    var s = n(27);
    var o = c(s);
    var u = n(24);
    var a = c(u);
    var f = n(60);
    var l = c(f);
    var h = i.
default.extend({
        initialize:
        function(t, n) {
            n = n || {};
            h.superClass.initialize.apply(this, arguments);
            var r = this;
            var i = {
                horizontalScroll: false,
                horizontalMaxSize: 1e5,
                prefix: "",
                autoHide: true,
                targetNode: null,
                renderMethod: "after",
                barContainerNode: null,
                animate: false,
                duration: 950,
                easing: "mcsEaseOut",
                arrowEnable: false,
                arrowDelta: 60,
                arrowPrevNode: null,
                arrowNextNode: null,
                draggerNode: null,
                draggerMaxLength: null,
                draggerMinLength: 60,
                draggerAutoLength: true,
                trackEnable: true,
                trackNode: null,
                mouseWheelEnable: true,
                mouseWheelDelta: 30,
                keyPressEnable: false,
                keyPressDelta: 60
            };
            $.extend(true, r, i, n);
            $.extend(true, r, {
                arrowAnimate: {
                    enable: r.animate,
                    duration: r.duration,
                    easing: r.easing
                },
                mouseWheelAnimate: {
                    enable: r.animate,
                    duration: r.duration,
                    easing: r.easing
                },
                draggerAnimate: {
                    enable: r.animate,
                    duration: r.duration,
                    easing: r.easing
                },
                trackAnimate: {
                    enable: r.animate,
                    duration: r.duration,
                    easing: r.easing
                },
                keyPressAnimate: {
                    enable: r.animate,
                    duration: r.duration,
                    easing: r.easing
                }
            },
            n);
            var s = $(t);
            var u = r.prefix && r.prefix != "" ? r.prefix + "_": "";
            var f = r.barContainerNode ? $(r.barContainerNode) : $(a.
        default.compile(n.template || '<div class="<%=prefix%>scrollbar_container"><a class="<%=prefix%>scrollbar_prev" href="#"><i></i></a><div class="<%=prefix%>scrollbar_track"><span class="<%=prefix%>scrollbar_dragger"></span></div><a class="<%=prefix%>scrollbar_next" href="#"><i></i></a></div>')({
                prefix: u
            }));
            var l = r.draggerNode ? $(r.draggerNode) : f.find("." + u + "scrollbar_dragger");
            var c = r.trackNode ? $(r.trackNode) : f.find("." + u + "scrollbar_track");
            var p = r.arrowPrevNode ? $(r.arrowPrevNode) : f.find("." + u + "scrollbar_prev");
            var d = r.arrowNextNode ? $(r.arrowNextNode) : f.find("." + u + "scrollbar_next");
            var v = r.targetNode || s;
            if (!r.barContainerNode) {
                v[r.renderMethod](f)
            }
            var m = new o.
        default(l, {
                limit: true
            });
            m.bind("drag:move",
            function(e, t) {
                r.scrollTo(r.horizontalScroll ? e: t, true, r.draggerAnimate)
            });
            s.bind("scroll",
            function(e) {
                var t = s[r.horizontalScroll ? "scrollLeft": "scrollTop"]();
                r.trigger("scroll", [t]);
                if (t == 0) {
                    r.trigger("scroll:head", [t])
                } else if (t >= r._contentSize - r._containerSize) {
                    r.trigger("scroll:end", [t])
                }
            });
            if (!r.arrowEnable) {
                p.hide();
                d.hide()
            } else {
                var g = void 0;
                p.mousedown(function(e) {
                    e.preventDefault();
                    r.scrollTo(r.getScrollPosition() - r.arrowDelta, false, r.arrowAnimate);
                    g = setTimeout(function() {
                        if (g) clearInterval(g);
                        g = setInterval(function() {
                            r.scrollTo(r.getScrollPosition() - r.arrowDelta, false, r.arrowAnimate)
                        },
                        30)
                    },
                    500)
                }).mouseleave(function() {
                    if (g) clearInterval(g)
                }).mouseup(function() {
                    if (g) clearInterval(g)
                }).click(function(e) {
                    e.preventDefault()
                });
                d.mousedown(function(e) {
                    e.preventDefault();
                    r.scrollTo(r.getScrollPosition() + r.arrowDelta, false, r.arrowAnimate);
                    g = setTimeout(function() {
                        if (g) clearInterval(g);
                        g = setInterval(function() {
                            r.scrollTo(r.getScrollPosition() + r.arrowDelta, false, r.arrowAnimate)
                        },
                        30)
                    },
                    500)
                }).mouseleave(function() {
                    if (g) clearInterval(g)
                }).mouseup(function() {
                    if (g) clearInterval(g)
                }).click(function(e) {
                    e.preventDefault()
                })
            }
            if (r.mouseWheelEnable && /firefox/.test(navigator.userAgent.toLowerCase())) {
                s[0].addEventListener("DOMMouseScroll",
                function(e) {
                    if (r._contentSize > r._containerSize) {
                        e.preventDefault();
                        var t = e.detail > 0 ? r.mouseWheelDelta: -r.mouseWheelDelta;
                        r.scrollTo(r.getScrollPosition() + t, false, r.mouseWheelAnimate)
                    }
                },
                false)
            } else if (r.mouseWheelEnable) {
                s[0].onmousewheel = function(e) {
                    if (r._contentSize > r._containerSize) {
                        e = e || window.event;
                        var t = e.wheelDelta > 0 ? -r.mouseWheelDelta: r.mouseWheelDelta;
                        if (e.wheelDelta == 0) {
                            t = 0
                        }
                        r.scrollTo(r.getScrollPosition() + t, false, r.mouseWheelAnimate);
                        e.returnValue = false;
                        return false
                    } else {
                        return true
                    }
                }
            }
            if (r.trackEnable) {
                l.mousedown(function(e) {
                    e.stopPropagation()
                });
                c.mousedown(function(e) {
                    e.preventDefault();
                    r.scrollTo(e[r.horizontalScroll ? "pageX": "pageY"] - c.offset()[r.horizontalScroll ? "left": "top"] - r._draggerSize / 2, true, r.trackAnimate)
                })
            }
            if (r.keyPressEnable) {
                s.css("outline", "none").attr("tabindex", "-1").keydown(function(e) {
                    var t = e.keyCode;
                    var n = r.getScrollPosition();
                    if (~"INPUT,TEXTAREA".indexOf(e.target.nodeName.toUpperCase())) {
                        return
                    }
                    if (!~"38,39,36,40,37,35".indexOf(t)) {
                        return
                    }
                    if ([38, 39, 36].indexOf(t) != -1 && n != 0) {
                        e.preventDefault()
                    } else if ([40, 37, 35].indexOf(t) != -1 && n != r._contentSize - r._containerSize) {
                        e.preventDefault()
                    }
                    switch (t) {
                    case 37:
                    case 38:
                        r.scrollTo(n - r.keyPressDelta, false, r.keyPressAnimate);
                        break;
                    case 39:
                    case 40:
                        r.scrollTo(n + r.keyPressDelta, false, r.keyPressAnimate);
                        break;
                    case 36:
                        r.scrollTo(0, false, r.keyPressAnimate);
                        break;
                    case 35:
                        r.scrollTo(r._contentSize - r._containerSize, false, r.keyPressAnimate);
                        break
                    }
                })
            }
            r.container = s;
            r.barContainerNode = f;
            r.trackNode = c;
            r.arrowPrevNode = p;
            r.arrowNextNode = d;
            r.draggerNode = l;
            r._contentSize = 0;
            r._containerSize = 0;
            r._trackSize = 0;
            r._draggerSize = 0;
            r.update()
        },
        getScrollPosition: function() {
            return this.container[0][this.horizontalScroll ? "scrollLeft": "scrollTop"]
        },
        scrollTo: function(t, n, r) {
            var i = this;
            var s = i.horizontalScroll;
            var o = n ? t: t * (i._trackSize - i._draggerSize) / (i._contentSize - i._containerSize);
            var u = !n ? t: (t * i._contentSize - t * i._containerSize) / (i._trackSize - i._draggerSize);
            o = Math.min(i._trackSize - i._draggerSize, Math.max(0, o));
            if (s) {
                u = Math.min(u, i.horizontalMaxSize - i._containerSize)
            }
            if (r === true || r && r.enable !== false) {
                var a = {};
                var f = {};
                a[s ? "scrollLeft": "scrollTop"] = u || 0;
                f[s ? "left": "top"] = o;
                if (r === true) {
                    r = {
                        duration: i.duration,
                        easing: i.easing
                    }
                }
                i.container.stop().animate(a, r);
                i.draggerNode.stop().animate(f, r)
            } else {
                i.container[s ? "scrollLeft": "scrollTop"](u || 0);
                i.draggerNode.css(s ? "left": "top", o)
            }
        },
        scrollToElement: function(t, n) {
            t = $(t);
            n = n || {};
            var r = n.animate != undefined ? n.animate: this.animate;
            var i = this.horizontalScroll;
            if (t.length) {
                var s = this.container[i ? "scrollLeft": "scrollTop"]() + t.offset()[i ? "left": "top"] - this.container.offset()[i ? "left": "top"];
                if (n.pos) {
                    s = s - n.pos
                }
                this.scrollTo(s, false, r)
            }
        },
        update: function() {
            this.show();
            var t = this.horizontalScroll;
            this._trackSize = this.trackNode[t ? "innerWidth": "innerHeight"]();
            this._containerSize = this.container[t ? "innerWidth": "innerHeight"]();
            this._contentSize = this.container[0][t ? "scrollWidth": "scrollHeight"];
            this._draggerSize = this.draggerNode[t ? "innerWidth": "innerHeight"]();
            t && (this._contentSize = Math.min(this._contentSize, this.horizontalMaxSize));
            if (this._contentSize > this._containerSize) {
                if (this.draggerAutoLength) {
                    this._draggerSize = Math.floor(this._containerSize * this._trackSize / this._contentSize);
                    if (this.draggerMinLength) {
                        this._draggerSize = Math.max(this._draggerSize, this.draggerMinLength)
                    }
                    if (this.draggerMaxLength) {
                        this._draggerSize = Math.min(this._draggerSize, this.draggerMaxLength)
                    }
                    this.draggerNode.css(t ? "width": "height", this._draggerSize)
                }
                this.scrollTo(this.getScrollPosition(), false, self.animate)
            } else if (this.autoHide) {
                this.hide()
            }
        },
        show: function() {
            this.barContainerNode.show();
            this.trigger("show")
        },
        hide: function() {
            this.barContainerNode.hide();
            this.trigger("hide")
        }
    });
    e.exports = h
},
function(e, t) {
    "use strict";
    jQuery.easing["jswing"] = jQuery.easing["swing"];
    jQuery.extend(jQuery.easing, {
        easeOutCubic: function(t, n, r, i, s) {
            n /= s;
            n--;
            return i * (n * n * n + 1) + r
        },
        easeOutQuart: function(t, n, r, i, s) {
            n /= s;
            n--;
            return - i * (n * n * n * n - 1) + r
        },
        easeOutQuint: function(t, n, r, i, s) {
            n /= s;
            n--;
            return i * (n * n * n * n * n + 1) + r
        },
        easeOutCirc: function(t, n, r, i, s) {
            n /= s;
            n--;
            return i * Math.sqrt(1 - n * n) + r
        },
        easeOutSine: function(t, n, r, i, s) {
            return i * Math.sin(n / s * (Math.PI / 2)) + r
        },
        easeOutExpo: function(t, n, r, i, s) {
            return i * ( - Math.pow(2, -10 * n / s) + 1) + r
        },
        mcsEaseOut: function(t, n, r, i, s) {
            var o = (n /= s) * n,
            u = o * n;
            return r + i * (.499999999999997 * u * o + -2.5 * o * o + 5.5 * u + -6.5 * o + 4 * n)
        },
        draggerRailEase: function(t, n, r, i, s) {
            n /= s / 2;
            if (n < 1) return i / 2 * n * n * n + r;
            n -= 2;
            return i / 2 * (n * n * n + 2) + r
        }
    });
    e.exports = jQuery.easing
},
function(e, t, n) {
    "use strict";
    function c(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    var r = n(40);
    var i = c(r);
    var s = n(24);
    var o = c(s);
    var u = n(62);
    var a = c(u);
    var f = n(21);
    var l = c(f);
    var h = "listitem_";
    var p = n(63);
    var d = n(64);
    var v = i.
default.extend({
        el:
        $("#Dramalist_wrap"),
        initialize: function(t) {
            v.superClass.initialize.call(this);
            this.loading = false;
            this.$listWrapDiv = $(".drama-content", this.el);
            PageConfig.page.pageSize = PageConfig.catId == 97 ? 30 : 50;
            var n = Math.ceil(PageConfig.page.totalepisodes / PageConfig.page.pageSize);
            if (PageConfig.page && n > 1) {
                var r = PageConfig.page;
                var i = r.pageSize;
                var s = r.totalepisodes;
                var o = r.numTypePageNum;
                this.renderDramaTab(o, i, s)
            }
            this.mod = new a.
        default;
            this.mod.bind("getPageData:success", this.rendPageDate.bind(this));
            if (PageConfig.playmode != 3) {
                this.renderDramaFixedWrap(h + "page" + PageConfig.page.numTypePageNum || 1)
            } else {
                this.renderDramaFixedWrap(h + "page" + PageConfig.page.numTypePageNum || 1)
            }
        },
        events: {
            "click .tab-more": "expendDramaList",
            "click .drama-tab a": "selectDramaList"
        },
        expendDramaList: function() {
            this.dramaTab.toggleClass("tab-expand")
        },

        selectDramaList: function(t) {
            var n = $(t.currentTarget);
            var r = $(".tab-more", this.el);
            if (n.hasClass("current-tab")) {
                return
            } else {
                $(".current-tab", this.dramaTab).removeClass("current-tab");
                n.addClass("current-tab")
            }
            if (n.parents(".drama-more-wrap").length) {
                r.html($(t.currentTarget).text()).addClass("active")
            } else {
                r.html(r.attr("txt")).removeClass("active")
            }
            $(".drama-tab").removeClass("tab-expand");

            this.addListContents("page" + n.attr("rel"))
        },
        renderDramaTab: function(t, n, r) {
            var i = [];
            var s = [];
            var u = Math.ceil(r / n);
            var a = PageConfig.catId == 97 ? "更多剧集": "更多视频";
            if ($(".drama-tab", this.$el).length) {
                return
            }
            for (var f = 1; f <= u; f++) {
                var l = [];
                l.push((f - 1) * n + 1);
                if (f == u) {
                    l.push(r)
                } else {
                    l.push(f * n)
                }
                l.push(f);
                i.push(l);
                if (f == t) {
                    s = l
                }
            }
            var c = o.
        default.compile(d)({
                list:
                i,
                cur: s,
                txt: a
            });
            this.$listWrapDiv.before(c);
            this.dramaTab = $(".drama-tab", this.el);
            window.setTimeout(function() {
                $("#Drama").trigger("list:update")
            },
            0)
        },
        renderDramaFixedWrap: function(t) {
            var n, r, i, s, u, a, f, i, l, c;
            if (! (PageConfig.playmode == 3 || $("#Drama .dayu-info").length)) {
                return
            }
            i = 6;
            n = $("#" + t);
            r = $(".item.current", n).index();
            s = $(".item", n);
            u = s.length;
            if (s.eq(0).hasClass("item-cover")) {
                l = {};
                var h = $(".item-cover.current", n);
                if (!h.length) {
                    l.status = "";
                    h = $(".item-cover", n).eq(0)
                } else {
                    l.status = "active"
                }
                c = "cover";
                l.title = h.attr("title");
                l.vid = h.attr("item-id").replace("item_", "");
                l.href = h.find(">a").attr("href");
                l.src = h.find(".cover>img").attr("_src")
            } else {
                l = [];
                r = r > -1 ? r: 0;
                if (u - r > i) {
                    a = u - 1;
                    f = Math.min( - 1, r);
                    i = Math.max(3, i - 2 - r)
                } else {
                    a = 0;
                    f = Math.min(0, u - r - (i - 1));
                    i = Math.max(3, u - r)
                }
                s.each(function(e, t) {
                    if (e - r >= f && e - r <= i || e == a) {
                        var n = {};
                        t = $(t);
                        n.seq = t.attr("seq");
                        n.title = t.attr("title");
                        n.vid = t.attr("item-id").replace("item_", "");
                        n.href = t.find(".sn").attr("href");
                        l.push(n)
                    }
                })
            }
            var d = o.
        default.compile(p)({
                data:
                l,
                type: c,
                status: a,
                vid: PageConfig.videoId2
            });
            if (!$("#dramaFixedWrap").length) {
                var v = $("<div>").attr("id", "dramaFixedWrap").addClass("drama-fixed-wrap");
                var m = $("#Drama .dayu-info");
                if (m.length) {
                    var g = m.find("dd");
                    g.eq(0).addClass("dayu-title");
                    g.eq(1).addClass("dayu-desc");
                    g.eq(2).addClass("dayu-sub");
                    m.append(v)
                } else {
                    $("#Drama .tvinfo").append(v)
                }
            }
            $("#dramaFixedWrap").html(d)
        },
        addListContents: function(t) {
            if (this.loading) return;
            if (this.$listWrapDiv.length) {
                this.divId = h + t;
                var n = $("#" + this.divId);
                if (n.length) {
                    this.$listWrapDiv.find(">div").hide();
                    n.show();
                    this.renderDramaFixedWrap(this.divId);
                    this.trigger("pages:change", [])
                } else {
                    var r = t.replace("page", "");
                    self.loading = true;
                    this.getPageData(r)
                }
            }
        },
        getPageData: function(t) {
            var n = "";
            var r = void 0;
            var i = $("#bpmodule-playpage-anthology").attr("componentid");
            n = "page/playlist?";
            r = {
                l: "debug",
                pm: PageConfig.playmode,
                vid: PageConfig.videoId,
                fid: PageConfig.folderId,
                showid: PageConfig.showid,
                sid: PageConfig.singerId,
                componentid: i,
                videoCategoryId: PageConfig.videoCategoryId,
                isSimple: PageConfig.isSimple,
                videoEncodeId: PageConfig.currentEncodeVid,
                page: t
            };
            try {
                var s = l.
            default.params();
                if (s) {
                    for (var o in s) {
                        if (o.indexOf("gray") === 0) {
                            r[o] = s[o]
                        }
                    }
                }
            } catch(u) {}
            this.mod.getPageData(n, r)
        },
        rendPageDate: function(t) {
            var n = $("<div>").attr("id", this.divId);
            n.html(t.html);
            this.$listWrapDiv.find(">div").hide();
            this.$listWrapDiv.append(n);
            n.show();
            this.renderDramaFixedWrap(this.divId);
            if (!$(".drama-tab", this.$el).length && t.data.total > t.data.pl) {
                this.renderDramaTab(t.data.page, t.data.pl, Math.min(t.data.total, 950))
            }
            this.loading = false;
            this.trigger("pages:change", [])
        }
    });
    e.exports = v
},
function(e, t, n) {
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
function(e, t) {
    e.exports = '	<%if(type==\'cover\'){%>\n		<div class="item item-cover item-cover-fixed <%=data.status==\'active\'?\'active\':\'\'%>" item-id="item_<%=data.vid%>" title="<%=data.title%>">\n			<a href="<%=data.href%>">\n				<div class="cover"><img src="<%=data.src%>"></div>\n				<div class="title"><%=data.title%></div>\n			</a>\n		</div>	\n		<i class="scroll-fixed"></i>\n	<%}else if(data.length){%>\n		<% data.forEach(function(t, i){ %>\n			<%if( ((status==0 && i==1) || (status!=0 && i==5) ) && (data.length==6)){%>\n				<span class="fixed-split">...</span>\n			<%}%>\n			<%if(vid == t.vid){%>\n			<span class="fixed-item active">\n				<%=t.seq%>		\n			</span>	\n			<%}else{%>\n			<span class="fixed-item">\n				<a href="<%=t.href%>" item-id="item_<%=t.vid%>" title="<%=t.title%>">\n					<%=t.seq%>\n				</a>\n			</span>	\n			<%}%>\n		<% }); %>\n	<%}%>\n	'
},
function(e, t) {
    e.exports = '<% if(list.length >1 ) {%>\n<div class="drama-tab	">\n	<dt>\n	<% list.forEach(function(t, i){ %>\n		<%if(i<3){%>\n		<span >\n			<a href="javascript:void(0);" class="<%if(cur[2]==(i+1)){%>current-tab<%}%>" rel="<%=t[2]%>" ><%=t[0]%>-<%=t[1]%></a>\n		</span>\n		<%}%>\n		<%if (i==3){ %>\n		<%if(cur[2]<4 || cur.length==0){%>\n			<span txt="<%=txt%>" class="tab-more">\n				<%=txt%>\n			</span>	\n			<%} else {%>\n			<span txt="<%=txt%>"  class="tab-more active">\n				<%=cur[0]%>-<%=cur[1]%>\n			</span>	\n		<%}%>\n		<%}%>\n	<% }); %> 						\n	</dt>\n	<dd class="drama-more-wrap">\n	<% list.forEach(function(t, i){ %>\n		<%if(i>=3){%>\n		<span >\n			<a href="javascript:void(0);" class="<%if(cur[2]==(i+1)){%>current-tab<%}%>" rel="<%=t[2]%>" ><%=t[0]%>-<%=t[1]%></a>\n		</span>\n		<%}%>\n	<% }); %> 												\n	</dd>									\n</div>\n<%}%>'
},
function(e, t, n) {
    "use strict";
    function f(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    var r = n(40);
    var i = f(r);
    var s = n(8);
    var o = f(s);
    var u = n(66);
    var a = f(u);
    var l = i.
default.extend({
        el:
        $(".vip-sell-wrap"),
        qPayRoundTime: 1e4,
        freshTime: 18e4,
        initialize: function() {
            var t = this;
            l.superClass.initialize.call(this);
            this.mod = new a.
        default;
            this.modelEvents(this.mod);
            this.init();
            window.XloginEvent && XloginEvent.bind("Xlogin:loginSuccess",
            function() {
                clearInterval(t.intervalHandle);
                t.feeInfo()
            });
            $(".youku_vip_pay_btn").attr("soureceid", "pc_playlist_btn");
            $.getScript("//static.youku.com/paymentcenter/vip_pay/vip_pc_pay.js");
            $(document).on("click", "#vip_pay_popup_close",
            function() {
                $(document).trigger("logchange")
            })
        },
        init: function() {
            var t = this;
            t.$qr = $("#qrFeeImg", t.$el);
            if ($("#qrcodetobuymem").length) {
                t.payStatus = "vip"
            } else if ($("#qrcodetobuymov").length) {
                t.payStatus = "mov"
            }
            t.lcode = $("#qrFeeImg", t.$el).attr("lcode");
            if (t.$qr.length) {
                setTimeout(function() {
                    t.addInterval()
                },
                400);
                t.timeout = setTimeout(function() {
                    t.showRefresh()
                },
                t.freshTime)
            }
        },
        feeInfo: function() {
            if (this.$el.length) {
                this.mod.getFeeInfo({
                    l: "debug",
                    vid: PageConfig.videoId,
                    showid: PageConfig.showid,
                    t: Math.random()
                })
            }
        },
        events: {
            "click #ticketPay": "ticketPay",
            "click .qr-refresh": "rcoderefresh"
        },
        "{mod} getFeeInfo:success": function(t) {
            var n = t.data;
            if (t["html"]) {
                var r = $(t["html"]).find(".vip-sell-wrap").html();
                this.$el.html(r)
            } else {
                this.$el.html("").hide()
            }
            this.init()
        },
        "{mod} getConsumeTicket:success": function(t) {
            if (t.data == true) {
                this.$el.html('<p class="vip-pay-status"><i class="bg-icon bg-pay-sucess"></i>支付成功！<a href="javascript:window.location.reload(true);">刷新页面</a> 即可观看</p>')
            }
        },
        "{mod} getFeeShow:success": function(t) {
            if (t.data == true) {
                window.location.reload(true)
            }
        },
        "{mod} getFeeVip:success": function(t) {
            if (t.data == true) {
                window.location.reload(true)
            }
        },
        "{mod} getStatusLogin:success": function(t) {
            if (t.result == "success") {
                window.location.reload(true)
            } else {
                if (t.errorCode == "QR_CODE_NOT_EXIST") {}
            }
        },
        "{mod} getFeeQrcode:success": function(t) {
            var n = this;
            console.log(t);
            if (t && t.data.shorturl) {
                if (t.data.qrcode) {
                    n.lcode = t.data.qrcode
                }
                n.$qr.attr("scr", "//qr.youku.com/qr?tiny=" + t.data.shorturl + "&logosize=0");
                $(".qr-timeout", this.$el).hide();
                setTimeout(function() {
                    n.addInterval()
                },
                50)
            }
        },
        ticketPay: function() {
            this.mod.getConsumeTicket({
                showid: PageConfig.showid,
                t: Math.random()
            })
        },
        rcoderefresh: function() {
            this.mod.getFeeQrcode({
                vid: PageConfig.videoId
            })
        },
        addInterval: function() {
            var t = this;
            clearInterval(this.intervalHandle);
            t.intervalHandle = setInterval(function() {
                t.getPayStatus()
            },
            t.qPayRoundTime);
            this.timeout = setTimeout(function() {
                t.showRefresh()
            },
            t.freshTime)
        },
        showRefresh: function() {
            $(".qr-timeout", this.$el).show();
            clearInterval(this.intervalHandle)
        },
        getPayStatus: function() {
            if (o.
        default.isLogin()) {
                if (this.payStatus === "mov") {
                    this.mod.getFeeShow({
                        vid: PageConfig.videoId2,
                        showid: PageConfig.showid,
                        t: Math.random()
                    })
                } else if (this.payStatus === "vip") {
                    this.mod.getFeeVip({
                        vid: PageConfig.videoId2,
                        showid: PageConfig.showid,
                        t: Math.random()
                    })
                }
            } else {
                this.mod.getStatusLogin({
                    code: this.lcode,
                    t: Math.random()
                })
            }
        }
    });
    e.exports = l
},
function(e, t, n) {
    "use strict";
    function s(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function f(e) {
        var t = e && e.error == 1 ? true: e.error;
        return [t, e]
    }
    function l(e) {
        return [true, e]
    }
    var r = n(67);
    var i = s(r);
    var o = PageConfig.homeHost;
    var u = "https://account.youku.com/";
    var a = i.
default.extend({
        initialize:
        function(t) {
            var n = this;
            a.superClass.initialize.call(n)
        },
        getFeeInfo: {
            url: o + "fee/feeinfo?&timestamp=" + (new Date).getTime(),
            jsonp: "callback",
            convert: f,
            jsonpCallback: "_getFeeInfo"
        },
        getFeeQrcode: {
            url: o + "fee/payqrcode?&timestamp=" + (new Date).getTime(),
            jsonp: "callback",
            convert: f,
            jsonpCallback: "_getFeeQrcode"
        },
        getFeeVip: {
            url: o + "fee/feevip?&timestamp=" + (new Date).getTime(),
            jsonp: "callback",
            convert: f,
            jsonpCallback: "_getFeeVip"
        },
        getFeeShow: {
            url: o + "fee/feeshow?&timestamp=" + (new Date).getTime(),
            jsonp: "callback",
            convert: f,
            jsonpCallback: "_getFeeShow"
        },
        getConsumeTicket: {
            url: o + "fee/consumeticket?&timestamp=" + (new Date).getTime(),
            jsonp: "callback",
            convert: f,
            jsonpCallback: "_getConsumeTicket"
        },
        getStatusLogin: {
            url: u + "qrcode/loginByCode.json?buid=youku" + "&template=&pid=" + PageConfig.pid + "&timestamp=" + (new Date).getTime(),
            jsonp: "jsonpCallback",
            convert: l,
            jsonpCallback: "_getStatusLogin"
        }
    });
    e.exports = a
},
function(e, t, n) {
    "use strict";
    function u(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function f(e) {
        var t = {
            type: "get",
            url: "",
            cache: true,
            scriptCharset: "utf-8",
            dataType: "json",
            data: {},
            timeout: 1e4
        };
        if (! (e.type === "post") && (!e.dataType || e.dataType === "jsonp")) {
            $.extend(e, {
                dataType: "jsonp",
                jsonp: e.jsonp || "jsoncallback"
            })
        }
        e = $.extend(t, e || {});
        return $.ajax(e)
    }
    function l(e) {
        $.each(e,
        function(t, n) {
            var r = n;
            if ($.type(n) !== "object" || !n.url) {
                return
            }
            e[t] = function() {
                var e = this;
                var n = arguments;
                var i = $.extend(true, {},
                r || {},
                {
                    data: n[0] || {}
                });
                var s = Array.isArray(e._data);
                var o;
                var u = (new Date).getTime();
                var f;
                var l = true;
                if (!i.jsonpCallback) {
                    i.jsonpCallback = (s ? e.model.__mid + "List": e.constructor.__mid).replace(/[^\w]+/g, "_") + "__" + t
                }
                o = i.jsonpCallback;
                f = a[o];
                if (f && u - f < 1e3) {
                    l = false
                }
                if (i.requestGap === false) {
                    l = true
                }
                a[o] = u;
                if (l || n[n.length - 1] == "retry") {
                    c.call(this, i, t, n)
                }
            }
        })
    }
    function c(e, t, n) {
        var r = this;
        var i = e.url;
        if ($.type(e.data) !== "object") return;
        var s = $.param(e.data);
        var u;
        var a = e.jsonpCallback;
        var l = function(t) {
            return [true, t]
        };
        n = $.makeArray(n);
        f(e).done(function(i) {
            i = e.convert ? e.convert.call(r, i, n[0]) : l(i);
            if (i[0] === true) {
                i[1] = i[1] || {};
                u = r._toModel(i[1]);
                if (e.toModel) {
                    r._data = u._data
                }
                r.fire(t + ":success", [i[1]].concat(n))
            } else {
                r.fire(t + ":error", [i[1]].concat(n)); (0, o.
            default)("ConditionException::" + a + "::" + i)
            }
        }).fail(function(e, i, u) {
            console.log(i);
            var f = i || u;
            var l = n[n.length - 1] != "retry";
            if (l) { (0, o.
            default)("FirstAutoRetry::" + a + "::" + f + "::" + s);
                r[t].apply(r, n.concat(["retry"]))
            } else { (0, o.
            default)("retryError::" + a + "::" + f + "::" + s)
            }
            r.fire(t + ":error", [{
                status: f,
                msg: f
            },
            s])
        })
    }
    var r = n(68);
    var i = u(r);
    var s = n(69);
    var o = u(s);
    var a = {};
    var h = i.
default.extend({});
    h.List = i.
default.List.extend({
        getIndex:
        function(t) {
            var n = this;
            var r;
            n.each(function(e, n) {
                $.each(t,
                function(t, i) {
                    if (n.get(t) === i) {
                        r = e
                    }
                })
            });
            return r
        }
    });
    var p = function(t, n) {
        l(t);
        var r = i.
    default.extend.call(this, t, n);
        return r
    };
    h.extend = p;
    h.List.extend = p;
    e.exports = h
},
function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function u(e) {
        if (Array.isArray(e)) {
            return $.extend(true, {},
            {
                list: e
            }).list
        }
        return $.extend(true, {},
        e)
    }
    function a(e) {
        var t = e instanceof c ? [] : {};
        e.each(function(e, n) {
            if (n instanceof c || n instanceof l) {
                t[e] = a(n)
            } else {
                t[e] = n
            }
        });
        return t
    }
    function f(e, t, n) {
        var r = Array.isArray(e) ? new n(e) : new t(e);
        r.each(function(e, i) {
            if (Array.isArray(i) || $.isPlainObject(i)) {
                i = f(i, t, n);
                r._data[e] = i;
                if (i instanceof n || i instanceof t) {
                    i._parent = r
                }
            }
        });
        return r
    }
    var r = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ?
    function(e) {
        return typeof e
    }: function(e) {
        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
    };
    var i = n(5);
    var s = o(i);
    var l = s.
default.extend({
        model:
        null,
        list: null,
        initialize: function(t) {
            var n = this;
            l.superClass.initialize.call(n);
            n._parent = null;
            t = t ? u(t) : {};
            n._data = n.defaults ? $.extend({},
            n.defaults, t) : t;
            n.model == null && (n.model = l);
            n.list == null && (n.list = c)
        },
        each: function(t) {
            var n = this;
            $.each(n._data, t);
            return n
        },
        key: function h(e) {
            var h = void 0;
            this.each(function(t, n) {
                if (n === e) {
                    h = t;
                    return false
                }
            });
            return h
        },
        get: function(t) {
            if (t === undefined) {
                return this._data
            }
            return this._data[t]
        },
        toJSON: function() {
            return a(this)
        },
        set: function(t, n) {
            var i = this;
            if ((typeof t === "undefined" ? "undefined": r(t)) === "object") {
                $.each(t,
                function(e, t) {
                    i._set(e, t)
                })
            } else {
                i._set(t, n)
            }
            return i._bindChangeEvent()
        },
        replace: function(t) {
            return this._replace(t)
        },
        remove: function(t) {
            var n = this;
            if (t === undefined) {
                if (n._parent) {
                    n._parent.remove(n._parent.key(n))
                }
                n._data = Array.isArray(n._data) ? [] : {};
                if (n._parent) {
                    n.trigger("change", [])
                } else {
                    n._bindChangeEvent()
                }
                return n
            }
            var r = n.get(t);
            if (Array.isArray(n._data)) {
                n._data.splice(t, 1)
            } else {
                delete n._data[t]
            }
            n._bindEvent("remove", t, r);
            return n._bindChangeEvent()
        },
        toModel: function(t) {
            return this._toModel(t)
        },
        _set: function(t, n) {
            var r = this;
            var i = r.get(t) === undefined ? "add": "update";
            var s = r.get(t);
            n = r._toModel(n);
            if (n === s) return;
            r._data[t] = n;
            return r._bindEvent(i, t, n, s)
        },
        _replace: function(t, n) {
            var r = this;
            var i = void 0;
            var s = void 0;
            var o = [];
            if (n) {
                i = r.size();
                s = "concat"
            } else {
                i = 0;
                s = "replace";
                r._data = Array.isArray(r._data) ? [] : {}
            }
            $.each(t,
            function(e, t) {
                o.push(r._data[i + e] = r._toModel(t))
            });
            setTimeout(function() {
                r.trigger(s, [t, o])
            },
            0);
            return r._bindChangeEvent()
        },
        _toModel: function(t) {
            var n = this;
            if (Array.isArray(t) || $.isPlainObject(t)) {
                t = f(t, n.model, n.list)
            }
            if (t instanceof c || t instanceof l) {
                t._parent = n
            }
            return t
        },
        _bindChangeEvent: function() {
            var t = this;
            t.trigger("change", []);
            if (t._parent) {
                t._parent._bindChangeEvent()
            }
            return t
        },
        _bindUpdateEvent: function(t) {
            var n = this;
            n.trigger("update", [n.key(t), t]);
            if (n._parent) {
                n._parent._bindUpdateEvent(n)
            }
            return n
        },
        _bindEvent: function(t, n) {
            var r = this;
            var i = $.makeArray(arguments).slice(2);
            r.trigger(t + ":" + n, i);
            r.trigger("change:" + n, i);
            r.trigger(t, [n].concat(i));
            if (r._parent) {
                r._parent._bindUpdateEvent(r)
            }
            return r
        }
    });
    var c = l.extend({
        initialize: function(t) {
            var n = this;
            c.superClass.initialize.call(n);
            n._data = t ? u(t) : []
        },
        size: function() {
            return this._data.length
        },
        first: function() {
            return this._data[0]
        },
        last: function() {
            return this._data[this.size() - 1]
        },
        where: function(t, n) {
            var r = this;
            var i = [];
            r.each(function(e, r) {
                var s = 0;
                var o = 0;
                $.each(t,
                function(e, t) {
                    if (n && r.get(e) === t || !n && r.get(e) == t) {
                        s++
                    }
                    o++
                });
                if (s === o) {
                    i.push(r)
                }
            });
            return i
        },
        push: function(t) {
            return this._insert(this.size(), t, "push")
        },
        unshift: function(t) {
            return this._insert(0, t, "unshift")
        },
        insert: function(t, n) {
            return this._insert(t, n, "insert")
        },
        concat: function(t) {
            return this._replace(t, true)
        },
        pop: function() {
            return this.remove(this.size() - 1)
        },
        shift: function() {
            return this.remove(0)
        },
        sort: function(t) {
            this._data.sort(t);
            return this._bindChangeEvent()
        },
        _insert: function(t, n, r) {
            var i = this;
            i._data.splice(t, 0, undefined);
            i._set(t, n);
            i.trigger(r, [t, n]);
            return i._bindChangeEvent()
        }
    });
    l.List = c;
    e.exports = l
},
function(e, t, n) {
    "use strict";
    function u(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    var r = n(9);
    var i = u(r);
    var s = n(2);
    var o = u(s);
    var a = encodeURIComponent;
    var f = a(location.href);
    var l = a(navigator.userAgent);
    var c = window.ERROR_RAND || .01;
    var h = {};
    var p = function(t, n, r) {
        if (!r) {
            t = "custom: " + t
        }
        n = n || c;
        if (Math.random() < n) {
            if (h[t]) {
                return
            }
            i.
        default.getRequest("//stats.tudou.com/e/page/js/fail/?v=1&s=" + [a(t), f, o.
        default.juid + "_" + o.
        default.uid, l].join("|"));
            h[t] = true
        }
    };
    p.addVersion = function(e) {
        f = a(e + ":" + location.href)
    };
    if (Math.random() < c) {
        window.onerror = function(e) {
            setTimeout(function() {
                p(e, 1, true)
            },
            0)
        }
    }
    e.exports = p
},
function(e, t, n) {
    "use strict";
    function u(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    var r = n(40);
    var i = u(r);
    var s = n(4);
    var o = u(s);
    var a = i.
default.extend({
        el:
        $("#player_sidebar"),
        barCookie: "__list__",
        status: 0,
        playmodekey: "P_L_M",
        initialize: function(t) {
            a.superClass.initialize.call(this);
            this.playBox = $("#playerBox");
            if (!this.el) {
                return false
            }
            this._sideShowControl()
        },
        events: {
            "click #expandlink,.listcontrol_side": "expandSideList"
        },
        turn: function() {
            if (this.status == 1) {
                this._fadeRight()
            } else {
                this._fadeLeft()
            }
        },
        open: function() {
            if (this.status == 0) this.turn()
        },
        close: function() {
            if (this.status == 1) this.turn()
        },
        _sideShowControl: function() {
            var t = (0, o.
        default)(this.barCookie);
            if (t == 1 || !t) {
                this.status = 1;
                this.playBox.removeClass("playBox_thx")
            } else {
                this.status = 0;
                this.playBox.addClass("playBox_thx")
            }
        },
        _fadeLeft: function() {
            this.status = 1;
            this.playBox.removeClass("playBox_thx");
            $("#Drama").trigger("list:update");
            this.trigger("SideControl:open", []); (0, o.
        default)(this.barCookie, 1, 360)
        },
        _fadeRight: function() {
            this.status = 0;
            this.playBox.addClass("playBox_thx"); (0, o.
        default)(this.barCookie, 0, 360)
        },
        expandSideList: function() {
            this.turn()
        }
    });
    var f = new a;
    e.exports = f
},
function(e, t, n) {
    "use strict";
    function s(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    var r = n(21);
    var i = s(r);
    var o = !!document.createElement("video").canPlayType;
    var u = navigator.userAgent.toLowerCase();
    var a = u.match(/msie ([\d.]+)/);
    var f = void 0;
    try {
        if (typeof window.ActiveXObject != "undefined") {
            f = !!(new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))
        } else {
            f = !!navigator.plugins["Shockwave Flash"]
        }
    } catch(l) {
        f = false
    }
    var c = function() {
        if (!f) {
            $(".switch-flash").hide()
        }
        if (f && PageConfig.panorama != 1 && o && !a) {
            if (!window.isRTMP) {
                $(".fn-play-mode").show()
            }
            if (!window.ykPlyr) {
                return
            }
            if (ykPlyr.type === "h5") {
                $("#h5PlayMode").attr("checked", true).addClass("mode-h5");
                $(".fn-play-mode").addClass("mode-h5")
            } else if (ykPlyr.type === "flash") {
                $("#flashPlayMode").attr("checked", true);
                $(".fn-play-mode").addClass("mode-flash");
                $(".playArea").addClass("flash-player")
            }
            $(".player-container").on("click", ".play-mode input",
            function(e) {
                var t = $(e.target);
                var n = i.
            default.params();
                $("#player").html("");
                if (t.attr("id") === "flashPlayMode") {
                    n.debug = "flv"
                } else if (t.attr("id") === "h5PlayMode") {
                    delete n.debug
                }
                location.href = "//" + location.host + location.pathname + "?" + $.param(n)
            })
        }
    };
    e.exports = c
}])