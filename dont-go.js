function dontGo(t) {
  void 0 === t && (t = {});
  var e,
    i,
    n,
    o,
    c = Object.assign(
      {
        title: "Don't go!",
        faviconSrc: "",
        timeout: 0,
        interval: 1e3,
      },
      t
    ),
    l = document.title,
    r = 0;
  document.querySelectorAll('link[rel$="icon"]').length &&
    ((e = document.querySelector('link[rel$="icon"]')),
    (i = e.getAttribute("href"))),
    c.faviconSrc.length && (new Image().src = c.faviconSrc);
  var u = function () {
      "string" == typeof c.title
        ? (document.title = c.title)
        : ((document.title = c.title[0]), (o = setInterval(a, c.interval))),
        c.faviconSrc.length && e.setAttribute("href", c.faviconSrc);
    },
    a = function () {
      ++r >= c.title.length && (r = 0), (document.title = c.title[r]);
    };
  document.addEventListener("visibilitychange", function () {
    "hidden" === document.visibilityState
      ? c.timeout > 0
        ? (n = setTimeout(u, c.timeout))
        : u()
      : ((document.title = l),
        e.setAttribute("href", i),
        clearTimeout(n),
        clearInterval(o));
  });
}
