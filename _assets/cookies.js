// Banner de cookies: tarjeta abajo a la izquierda. Aceptar / Rechazar guardan la elección; la X la cierra por esta sesión.
(() => {
  const K = "genesis-cookies";
  const get = (s, k) => { try { return s.getItem(k); } catch (e) { return null; } };
  const set = (s, k, v) => { try { s.setItem(k, v); } catch (e) {} };
  if (get(localStorage, K) || get(sessionStorage, K)) return;

  const css = `
.ck{position:fixed;left:clamp(12px,2vw,28px);bottom:clamp(12px,2vw,28px);z-index:60;width:min(360px,calc(100vw - 24px));padding:20px;border-radius:12px;background:var(--white);color:var(--ink);box-shadow:0 0 0 1px var(--line),0 18px 48px -16px rgba(22,24,29,.35);opacity:0;transform:translateY(16px);transition:opacity .4s cubic-bezier(.23,1,.32,1),transform .4s cubic-bezier(.23,1,.32,1)}
.ck.on{opacity:1;transform:none}
.ck h2{font:600 17px/1.2 var(--f-d);letter-spacing:-.015em;margin:0 32px 8px 0;display:flex;align-items:center;gap:2px}
.ck p{font-size:14px;line-height:1.5;color:var(--graphite);margin:0}
.ck p a{color:var(--ink);text-decoration:underline;text-underline-offset:3px}
.ck .bt{display:flex;gap:8px;margin-top:16px}
.ck .bt .btn{flex:1;padding:0 14px}
.ck .no{background:rgba(22,24,29,.04);color:var(--ink);border-color:rgba(22,24,29,.16)}
.ck .x{position:absolute;top:12px;right:12px;width:32px;height:32px;border:0;border-radius:6px;background:none;color:var(--graphite);cursor:pointer;display:grid;place-items:center}
.ck .x:hover{background:var(--fog);color:var(--ink)}
.ck .x svg{width:16px;height:16px}
.ck button:focus-visible{outline:2px solid var(--red);outline-offset:2px}
@media (max-width:520px){.ck{width:auto;right:84px}}
@media (prefers-reduced-motion:reduce){.ck{transition:none}}`;
  document.head.insertAdjacentHTML("beforeend", `<style>${css}</style>`);

  // Mismo marcado que los botones de la página (texto que rueda + flecha), porque app.js ya corrió
  const ar = (window.ICON && ICON.arrow) || '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>';
  const lbl = t => `<span class="tb"><span>${t}</span><span aria-hidden="true">${t}</span></span><span class="ab" aria-hidden="true">${ar}${ar}</span>`;
  const el = document.createElement("div");
  el.className = "ck";
  el.setAttribute("role", "dialog");
  el.setAttribute("aria-label", "Aviso de cookies");
  el.innerHTML = `<h2>Cookies<span class="dot"></span></h2>
    <p>Usamos cookies para que el sitio funcione bien, sea seguro y para entender cómo se usa. <a href="legales.html#cookies">Más información</a></p>
    <div class="bt"><button class="btn no" type="button">${lbl("Rechazar")}</button><button class="btn ok" type="button">${lbl("Aceptar")}</button></div>
    <button class="x" type="button" aria-label="Cerrar"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 4l8 8M12 4l-8 8"/></svg></button>`;
  document.body.appendChild(el);
  setTimeout(() => el.classList.add("on"), 900);

  const close = () => { el.classList.remove("on"); setTimeout(() => el.remove(), 400); };
  el.querySelector(".ok").onclick = () => { set(localStorage, K, "aceptadas"); close(); };
  el.querySelector(".no").onclick = () => { set(localStorage, K, "rechazadas"); close(); };
  el.querySelector(".x").onclick = () => { set(sessionStorage, K, "cerrado"); close(); };
})();
