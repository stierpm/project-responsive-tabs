!function(){var t,e;t=Drupal,e=once,t.behaviors.prototypeTabsContent={attach(t){t=e("prototype-tabs-content",t.querySelectorAll(".c-tabs-content"));0!==t.length&&t.forEach(e=>{var n=e.getAttribute("data-tabs-content-breakpoint");{var o=e;e=n;const i="expanded";let t,r,a,s,c;const l=t=>{t.classList.remove(i),t.setAttribute("aria-selected","false"),t.setAttribute("aria-expanded","false"),"desktop"===s&&t.setAttribute("tabindex","-1")},u=t=>{t.classList.add(i),t.setAttribute("aria-selected","true"),t.setAttribute("aria-expanded","true"),"desktop"===s&&t.removeAttribute("tabindex")},d=t=>{var e=t.currentTarget.getAttribute("aria-controls"),e=o.querySelector("#"+e);"desktop"!==s||t.currentTarget.classList.contains(i)||e.classList.contains(i)||(c.forEach(t=>{l(t)}),a.forEach(t=>{t.classList.remove(i)}),u(t.currentTarget),e.classList.add(i)),"mobile"===s&&(t.currentTarget.classList.contains(i)?(l(t.currentTarget),e.classList.remove(i)):(u(t.currentTarget),e.classList.add(i)))},g=e=>{var t=e.currentTarget.getAttribute("aria-controls"),t=o.querySelector("#"+t);"desktop"===s&&("ArrowLeft"===e.key&&(e.currentTarget===c[0]?setTimeout(t=>{c[c.length-1].focus()},1):setTimeout(t=>{e.target.previousElementSibling.focus()},1)),"ArrowRight"===e.key&&(e.currentTarget===c[c.length-1]?setTimeout(t=>{c[0].focus()},1):setTimeout(t=>{e.target.nextElementSibling.focus()},1)),"Home"===e.key&&setTimeout(t=>{c[0].focus()},1),"End"===e.key&&setTimeout(t=>{c[c.length-1].focus()},1)),"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),"desktop"!==s||e.currentTarget.classList.contains(i)||t.classList.contains(i)||(c.forEach(t=>{l(t)}),a.forEach(t=>{t.classList.remove(i)}),u(e.currentTarget),t.classList.add(i)),"mobile"===s&&(e.currentTarget.classList.contains(i)?(l(e.currentTarget),t.classList.remove(i)):(u(e.currentTarget),t.classList.add(i))))},b=()=>{t.matches?(s="desktop",c.forEach((t,e)=>{r.append(t),0!==e?(l(t),a[e].classList.remove(i)):(u(t),a[0].classList.add(i))})):(s="mobile",c.forEach((t,e)=>{a[e].prepend(t),t.removeAttribute("tabindex")}))};n=o,e=e,r=n.querySelector(".c-tabs-content__navigation"),a=n.querySelectorAll(".c-tabs-content__group"),(c=n.querySelectorAll(".c-tabs-content__trigger")).forEach(t=>{t.addEventListener("click",d),t.addEventListener("keydown",g)}),(t=window.matchMedia(`(min-width: ${e}px)`)).addEventListener("change",b),b()}})}}}();