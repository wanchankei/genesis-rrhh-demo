// Común: Lenis + GSAP, modo estático (?static=1 o reduced motion), menú mobile, hora local del footer.
(function () {
  const STATIC = new URLSearchParams(location.search).has("static") || matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.toggle("static", STATIC);
  const ok = !STATIC && window.gsap && window.ScrollTrigger;
  let lenis = null;
  if (ok) {
    gsap.registerPlugin(ScrollTrigger);
    if (window.Lenis) {
      lenis = new Lenis({ lerp: 0.1 });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(t => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
      // Anclas con delegación (también los links que se crean después por JS), ease in-out.
      // #contacto: el formulario queda centrado y entero debajo del nav, no pegado arriba.
      const inOut = t => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
      document.addEventListener("click", e => {
        const a = e.target.closest('a[href^="#"]'), h = a && a.getAttribute("href");
        if (!h || h === "#") return;
        const el = document.querySelector(h);
        if (!el) return;
        e.preventDefault();
        document.body.classList.remove("nav-open");
        document.querySelectorAll(".burger").forEach(b => b.setAttribute("aria-expanded", "false"));
        lenis.start();
        const free = innerHeight - 60;
        let box = el.querySelector(":scope > .wrap") || el;
        if (h === "#contacto" && box.offsetHeight >= free) box = el.querySelector("form") || box; // mobile: el form solo
        const r = box.getBoundingClientRect();
        const offset = h === "#contacto" && r.height < free ? -(60 + (free - r.height) / 2) : -84;
        lenis.scrollTo(box, { offset, duration: 1.3, easing: inOut });
      });
    }
  }
  window.GEN = { motion: ok, lenis };

  // Botones: el texto y la flecha van duplicados para la animación de rodar (Peonex)
  const ICON = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>'
  };
  window.ICON = ICON;
  document.querySelectorAll(".btn").forEach(b => {
    b.querySelectorAll(".ar").forEach(a => a.remove());
    const t = b.textContent.trim(), i = ICON[b.dataset.icon] || ICON.arrow;
    b.innerHTML = `<span class="tb"><span>${t}</span><span aria-hidden="true">${t}</span></span><span class="ab" aria-hidden="true">${i}${i}</span>`;
  });

  // FAQ: abre y cierra con la altura animada (acordeón), no de golpe
  const EO = "cubic-bezier(.23,1,.32,1)";
  document.addEventListener("click", e => {
    const s = e.target.closest(".faq summary"); if (!s) return;
    const d = s.parentNode, c = d.querySelector(".fc"); if (!c) return;
    e.preventDefault();
    if (c._a) c._a.cancel();
    const reduce = !ok;
    if (!d.open) {
      d.open = true;
      const h = c.scrollHeight;
      if (reduce) return;
      c._a = c.animate([{ height: "0px", opacity: 0 }, { height: h + "px", opacity: 1 }], { duration: 280, easing: EO });
    } else {
      if (reduce) { d.open = false; return; }
      c._a = c.animate([{ height: c.offsetHeight + "px", opacity: 1 }, { height: "0px", opacity: 0 }], { duration: 220, easing: EO });
      c._a.onfinish = () => { d.open = false; c._a = null; };
    }
  });

  document.querySelectorAll(".burger").forEach(b => b.addEventListener("click", () => {
    const o = document.body.classList.toggle("nav-open");
    b.setAttribute("aria-expanded", o);
    if (lenis) o ? lenis.stop() : lenis.start();
  }));
  document.querySelectorAll(".mnav a").forEach(a => a.addEventListener("click", () => document.body.classList.remove("nav-open")));

  const clk = document.querySelectorAll("[data-clock]");
  const tick = () => { const s = new Date().toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit", timeZone: "America/Argentina/Buenos_Aires" }); clk.forEach(c => c.textContent = s); };
  if (clk.length) { tick(); setInterval(tick, 30000); }

  document.querySelectorAll("form").forEach(f => f.addEventListener("submit", e => { e.preventDefault(); f.querySelectorAll("[type=submit] .tb span").forEach(x => x.textContent = "Prototipo: no se envía"); }));
})();

// Helpers de render
window.H = {
  gn: (t, cls = "") => `<div class="gn ${cls}" style="--t:${t}" aria-hidden="true"><span class="n1">1</span><span class="d"></span><div class="g"><span>G</span><span>n</span></div></div>`,
  el: (x, t, cls = "", name = true) => `<div class="el ${cls}" style="--t:${t}" aria-hidden="true"><div class="z">${x.n}</div><div class="s">${x.s}</div>${name ? `<div class="nm">${x.nm}</div>` : "<div></div>"}</div>`,
  faq: () => DATA.faq.map(([q, a]) => `<details><summary>${q}<i></i></summary><div class="fc"><p>${a}</p></div></details>`).join(""),
  num: ([k, v, tbd]) => `<span class="${tbd ? "tbd" : ""}">${v}</span>`
};
