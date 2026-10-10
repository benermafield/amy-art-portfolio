(function () {
  var root = document.documentElement;

  function save(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }

  /* ---------- Gallery layout toggle (masonry / single) ---------- */

  document.querySelectorAll("[data-set-layout]").forEach(function (btn) {
    var update = function () {
      btn.setAttribute("aria-pressed", String(root.dataset.layout === btn.dataset.setLayout));
    };
    update();
    btn.addEventListener("click", function () {
      root.dataset.layout = btn.dataset.setLayout;
      save("portfolio-layout", btn.dataset.setLayout);
      document.querySelectorAll("[data-set-layout]").forEach(function (b) {
        b.setAttribute("aria-pressed", String(b === btn));
      });
    });
  });

  /* ---------- Series filters ---------- */

  var filterButtons = document.querySelectorAll("[data-filter]");
  var items = document.querySelectorAll(".gallery-item");

  function applyFilter(filter) {
    filterButtons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.filter === filter));
    });
    items.forEach(function (item) {
      item.hidden = filter !== "all" && item.dataset.series !== filter;
    });
  }

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var filter = btn.dataset.filter;
      applyFilter(filter);
      // Keep the filter in the URL so it can be shared / survives "back".
      var url = filter === "all" ? location.pathname : location.pathname + "#" + filter;
      history.replaceState(null, "", url);
    });
  });

  if (filterButtons.length && location.hash) {
    var initial = location.hash.slice(1);
    if (document.querySelector('[data-filter="' + CSS.escape(initial) + '"]')) applyFilter(initial);
  }

  /* ---------- Artwork page: arrow-key navigation ---------- */

  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var link = document.querySelector('[data-key="' + e.key + '"]');
    if (link) location.href = link.href;
  });

  /* ---------- Design trial panel ---------- */

  var panel = document.querySelector("[data-trial-panel]");
  if (!panel) return;

  var toggle = panel.querySelector(".trial-toggle");
  var options = panel.querySelector(".trial-options");
  var themeButtons = panel.querySelectorAll("[data-set-theme]");

  function markTheme() {
    themeButtons.forEach(function (b) {
      b.setAttribute("aria-checked", String(b.dataset.setTheme === root.dataset.theme));
    });
  }
  markTheme();

  toggle.addEventListener("click", function () {
    var open = options.hidden;
    options.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
  });

  themeButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      root.dataset.theme = btn.dataset.setTheme;
      save("portfolio-theme", btn.dataset.setTheme);
      markTheme();
    });
  });
})();
