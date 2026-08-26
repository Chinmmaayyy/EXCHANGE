(function () {
  "use strict";

  var WHATSAPP_NUMBER = "919892865594";

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Sticky header shadow on scroll ---------- */
  var header = document.getElementById("siteHeader");
  function onScrollHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScrollHeader, { passive: true });
  onScrollHeader();

  /* ---------- Mobile nav ---------- */
  var navToggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");
  var body = document.body;

  var ICON_MENU = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>';
  var ICON_CLOSE = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';

  function closeMobileNav() {
    if (!mobileNav || !navToggle) return;
    mobileNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
    navToggle.innerHTML = ICON_MENU;
    body.classList.remove("nav-open");
  }
  function openMobileNav() {
    if (!mobileNav || !navToggle) return;
    mobileNav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close menu");
    navToggle.innerHTML = ICON_CLOSE;
    body.classList.add("nav-open");
  }
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mobileNav.classList.contains("is-open");
      if (isOpen) closeMobileNav(); else openMobileNav();
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMobileNav);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMobileNav();
    });
  }

  /* ---------- Smooth-scroll offset for sticky header on same-page anchor clicks ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      closeMobileNav();
      var headerH = header ? header.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.pageYOffset - headerH - 12;
      window.scrollTo({ top: top, behavior: "smooth" });
      history.pushState(null, "", id);
    });
  });

  /* ---------- Scroll-reveal animations ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".accordion-item").forEach(function (item) {
    var trigger = item.querySelector(".accordion-trigger");
    var panel = item.querySelector(".accordion-panel");
    if (!trigger || !panel) return;
    trigger.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");
      document.querySelectorAll(".accordion-item.is-open").forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove("is-open");
          openItem.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
          openItem.querySelector(".accordion-panel").style.maxHeight = null;
        }
      });
      if (isOpen) {
        item.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
        panel.style.maxHeight = null;
      } else {
        item.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  /* ---------- Gallery filter ---------- */
  var filterBtns = document.querySelectorAll(".gallery-filter-btn");
  var galleryItems = document.querySelectorAll(".gallery-item");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var filter = btn.getAttribute("data-filter");
      galleryItems.forEach(function (item) {
        var match = filter === "all" || item.getAttribute("data-category") === filter;
        item.classList.toggle("is-hidden", !match);
      });
    });
  });

  /* ---------- Gallery lightbox ---------- */
  var lightbox = document.getElementById("lightbox");
  var lightboxMedia = document.getElementById("lightboxMedia");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");

  function openLightbox(item) {
    if (!lightbox || !lightboxMedia || !lightboxCaption) return;
    var caption = item.getAttribute("data-caption") || "";
    var mediaSource = item.querySelector("img, .gallery-placeholder");
    lightboxMedia.innerHTML = "";
    if (mediaSource) lightboxMedia.appendChild(mediaSource.cloneNode(true));
    lightboxCaption.textContent = caption;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    body.classList.add("nav-open");
    lightboxClose && lightboxClose.focus();
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    body.classList.remove("nav-open");
  }
  galleryItems.forEach(function (item) {
    item.addEventListener("click", function () { openLightbox(item); });
  });
  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });

  /* ---------- Enquiry form -> WhatsApp ---------- */
  var form = document.getElementById("enquiryForm");
  var formStatus = document.getElementById("formStatus");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = form.querySelector("#fName").value.trim();
      var age = form.querySelector("#fAge").value.trim();
      var level = form.querySelector("#fLevel").value.trim();
      var area = form.querySelector("#fArea").value.trim();
      var timing = form.querySelector("#fTiming").value.trim();
      var message = form.querySelector("#fMessage").value.trim();
      var modeInput = form.querySelector('input[name="mode"]:checked');
      var mode = modeInput ? modeInput.value : "";

      if (!name || !age || !level) {
        if (formStatus) formStatus.textContent = "Please fill in your name, age and chess level.";
        return;
      }

      var lines = [
        "Hi, I'd like to enquire about chess coaching at Exchange Chess Academy.",
        "",
        "Name: " + name,
        "Age: " + age,
        "Chess Level: " + level,
        "Coaching Mode: " + mode
      ];
      if (area) lines.push("Preferred Area: " + area);
      if (timing) lines.push("Preferred Timing: " + timing);
      if (message) lines.push("Message: " + message);

      var text = encodeURIComponent(lines.join("\n"));
      var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text;

      if (formStatus) formStatus.textContent = "Opening WhatsApp with your enquiry...";
      window.open(url, "_blank", "noopener");
    });
  }
})();
