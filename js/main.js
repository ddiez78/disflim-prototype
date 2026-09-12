(function () {
  "use strict";

  var menuToggle = document.getElementById("menu-toggle");
  var mobileNav = document.getElementById("menu-movil");
  var form = document.getElementById("lead-form");
  var success = document.getElementById("form-success");
  var errorBox = document.getElementById("form-error");
  var needSelect = document.getElementById("necesidad");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function closeMenu() {
    if (!menuToggle || !mobileNav) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    mobileNav.hidden = true;
  }

  function openMenu() {
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Cerrar menú");
    mobileNav.hidden = false;
  }

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function () {
      var expanded = menuToggle.getAttribute("aria-expanded") === "true";
      if (expanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    mobileNav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

  function setNeed(value) {
    if (!needSelect || !value) return;
    var exists = Array.prototype.some.call(needSelect.options, function (opt) {
      return opt.value === value;
    });
    if (exists) {
      needSelect.value = value;
    }
  }

  document.querySelectorAll("[data-need]").forEach(function (link) {
    link.addEventListener("click", function () {
      setNeed(link.getAttribute("data-need"));
    });
  });

  function hideStatuses() {
    if (success) success.hidden = true;
    if (errorBox) errorBox.hidden = true;
  }

  function showStatus(el) {
    hideStatuses();
    if (!el) return;
    el.hidden = false;
    if (typeof el.focus === "function") {
      el.focus({ preventScroll: false });
    }
  }

  if (form) {
    form.addEventListener("input", hideStatuses);
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      hideStatuses();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      try {
        form.reset();
        showStatus(success);
      } catch (err) {
        showStatus(errorBox);
      }
    });
  }

  var faqTriggers = document.querySelectorAll(".faq-trigger");
  faqTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var expanded = trigger.getAttribute("aria-expanded") === "true";
      var panel = document.getElementById(trigger.getAttribute("aria-controls"));
      trigger.setAttribute("aria-expanded", String(!expanded));
      if (panel) {
        panel.hidden = expanded;
      }
    });
  });

  var reveals = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -24px 0px" }
  );

  reveals.forEach(function (el) {
    observer.observe(el);
  });
})();
