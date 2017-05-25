if ("undefined" == typeof kalkomey) var kalkomey = {};
kalkomey.course = function(a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, C, I, J, K, L = !1,
        M = 0,
        N = null,
        O = 0;
    return E = function(j, q, r, s, t, u, w) {
        b = s, O = s, g = s, e = b, h = Date.now(), k = 0, n = !1, d = r, c = 0, l = t, m = [], L = !0, o = a(".next .timer"), p = o.find("time"), timerProgress = a('<div class="timer-progress"></div>'), a.ajaxSetup({
            timeout: 1e4
        }), j && (i = j), q && (f = q), l && v(u, w), y()
    }, D = function() {
        var b = a("#answer_correct");
        b.modal({
            backdrop: "static",
            keyboard: !1
        }), b.find(".answerok").on("click", function() {
            b.modal("hide"), a(".flashcontent").show(), location.href = f
        })
    }, q = function() {
        var b = a("#content_security_" + c);
        a(".flashcontent").hide(), b.modal({
            backdrop: "static",
            keyboard: !1
        }), b.find(".answer_a").on("click", function() {
            return G("a"), !1
        }), b.find(".answer_b").on("click", function() {
            return G("b"), !1
        }), b.find(".answer_c").on("click", function() {
            return G("c"), !1
        }), b.find(".answer_d").on("click", function() {
            return G("d"), !1
        })
    }, r = function(a) {
        var b, c = 0,
            d = 0;
        return c = Math.floor(a / 60), d = a % 60, b = d + "S", c > 0 && (b = c + "M" + b), b
    }, s = function(a) {
        var b, c, d, e;
        return 60 > a ? (b = a, 10 > a && (b = "0" + b), b = "0:" + b) : (c = a % 60, d = O - c, e = Math.round(d / 60), 10 > c && (c = "0" + c), b = e + ":" + c), b
    }, t = function(b, c) {
        clearTimeout(N), o.html("Error..."), a(".flashcontent").show(), alert(b.responseText + "\n\nOops! Looks like something got jammed up. \nPlease refresh the page and try again in \na few moments, and all should be fine.\nIf this keeps happening, please call our \nfriendly Customer Support Team at 1-800-830-2268."), window.location.reload()
    }, F = function(a) {
        c = a, o.html("Next &rarr;").popover("destroy"), o.parent().removeClass("disabled"), c ? o.on("click", function(a) {
            a.preventDefault(), q()
        }) : o.attr("href", f)
    }, u = function() {
        var b = a("#student_security");
        a(".flashcontent").hide(), b.modal({
            backdrop: "static",
            keyboard: !1
        }), b.find(".answer_a").on("click", function() {
            return H(encodeURI(m[0])), !1
        }), b.find(".answer_b").on("click", function() {
            return H(encodeURI(m[1])), !1
        }), b.find(".answer_c").on("click", function() {
            return H(encodeURI(m[2])), !1
        }), b.find(".answer_d").on("click", function() {
            return H(encodeURI(m[3])), !1
        })
    }, H = function(b) {
        a("#student_security").modal("hide"), a.ajax({
            url: "/progress/student_security/section/" + i,
            data: "ssaid=" + l + "&answer=" + b,
            success: function() {
                M = 0
            },
            error: function(a, c) {
                return M > 0 ? void t(a, M) : (M++, void setTimeout('kalkomey.course.send_student_security_answer("' + b + '")', 1e3))
            }
        })
    }, G = function(b) {
        var d = "/progress/content_security/section/" + i,
            e = "csqid=" + c + "&answer=" + b;
        a('[id^="content_security"]').modal("hide"), a.ajax({
            url: d,
            data: e,
            success: function() {
                M = 0
            },
            error: function(a, c) {
                return M > 0 ? void t(a, M) : (M++, void setTimeout('kalkomey.course.send_content_security_answer("' + b + '")', 1e3))
            }
        })
    }, v = function(b, c) {
        a("#student_security_question").html(b), a("#student_security_answer_a").after(c[0]), a("#student_security_answer_b").after(c[1]), a("#student_security_answer_c").after(c[2]), a("#student_security_answer_d").after(c[3]), m = c
    }, I = function() {
        w(a("#student_security_correct"))
    }, J = function() {
        w(a("#student_security_failed"))
    }, w = function(b) {
        b.modal({
            backdrop: "static",
            keyboard: !1
        }), b.find(".answerok").on("click", function() {
            b.modal("hide"), a(".flashcontent").show(), l = 0, y()
        })
    }, K = function() {
        var b = a("#try_again");
        b.modal({
            backdrop: "static",
            keyboard: !1
        }), b.find(".tryagainok").on("click", function() {
            b.modal("hide"), a(".flashcontent").show(), M++, E(i, f, d, g, 0, "", "")
        })
    }, x = function() {
        return 1e3 * O - (Date.now() - h)
    }, y = function() {
        return 0 !== l ? void u("student") : void(x() > 0 ? z() : (F(), n = !0))
    }, z = function() {
        p.after(" Remaining"), o.append(timerProgress).parent().addClass("disabled"), o.popover({
            delay: {
                show: 0,
                hide: 1e3
            },
            placement: "top",
            title: "Time Still Remaining",
            trigger: "hover",
            content: "You cannot continue past this page until the timer has expired."
        }), restartTimer(O)
    }, restartTimer = function(a) {
        h = Date.now(), O = a, clearInterval(N), N = setInterval(B, 100)
    }, A = function(a) {
        var b;
        0 > a && (a = 0), p.attr("datetime", r(a)).html(s(a)), percentComplete = 100 * (1 - a / O), b = Math.round(percentComplete) + "%", timerProgress.css("width", b)
    }, B = function() {
        var a = x(),
            b = Math.round(a / 1e3);
        A(b), 0 >= a && C()
    }, C = function() {
        clearInterval(N), a.ajax({
            url: "/progress/set_complete/section/" + i,
            success: function() {
                kalkomey.course.make_next_button(0)
            },
            error: function(b, c) {
                if (422 == b.status) {
                    var d = a.parseJSON(b.responseText);
                    d.time_remaining && kalkomey.course.restartTimer(d.time_remaining)
                } else {
                    if (M > 2) return void t(b, M);
                    M++, setTimeout(kalkomey.course.setComplete, 1e3)
                }
            }
        })
    }, {
        content_security_pending: c,
        count: b,
        setup: j,
        requiredTime: O,
        init: E,
        answer_correct: D,
        content_security_check: q,
        make_next_button: F,
        send_student_security_answer: H,
        send_content_security_answer: G,
        setComplete: C,
        student_security_answer_correct: I,
        student_security_answer_failed: J,
        try_again: K,
        startTimer: z,
        restartTimer: restartTimer
    }
}(jQuery);