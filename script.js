(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js");

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- sticky header state ---- */
  var header = document.getElementById("header");
  var onScroll = function () {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- reveal on scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  var showAll = function () { reveals.forEach(function (el) { el.classList.add("in"); }); };

  if (reduce || !("IntersectionObserver" in window)) {
    showAll();
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
    // safety net: never leave content hidden
    setTimeout(showAll, 2600);
    window.addEventListener("load", function () { setTimeout(showAll, 1200); });
  }

  /* ---- highlight today's opening hours ---- */
  var today = new Date().getDay(); // 0 = Sunday
  var row = document.querySelector('.hours tr[data-day="' + today + '"]');
  if (row) row.classList.add("today");

  /* ---- reservation form -> mailto ---- */
  var form = document.getElementById("reserveForm");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var msg = document.getElementById("rf-msg");
      var data = new FormData(form);
      var name = (data.get("name") || "").toString().trim();
      var phone = (data.get("phone") || "").toString().trim();
      var date = (data.get("date") || "").toString().trim();
      var people = (data.get("people") || "").toString().trim();
      var note = (data.get("note") || "").toString().trim();

      var t = window.i18n ? window.i18n.t : function (key, fallback) { return fallback; };

      if (!name || !phone || !date) {
        msg.textContent = t("form.error", "Uzupełnij imię, telefon i termin.");
        msg.style.color = "var(--ember-deep)";
        return;
      }

      var subject = t("form.mailSubject", "Rezerwacja stolika") + " — " + name + " (" + people + " os.)";
      var body =
        t("form.mailName", "Imię i nazwisko") + ": " + name + "\n" +
        t("form.mailPhone", "Telefon") + ": " + phone + "\n" +
        t("form.mailDate", "Termin") + ": " + date + "\n" +
        t("form.mailPeople", "Liczba osób") + ": " + people + "\n" +
        t("form.mailNote", "Uwagi") + ": " + (note || "—") + "\n";

      window.location.href =
        "mailto:kontakt@karczma-kuznia.pl" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      msg.textContent = t("form.success", "Otwieramy wiadomość e-mail z prośbą o rezerwację. Potwierdzimy telefonicznie.");
      msg.style.color = "var(--ink-soft)";
    });
  }
})();
