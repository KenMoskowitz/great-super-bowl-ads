import { useEffect } from "react";

/**
 * Wires up the shared Web Dazzle scroll observer for the calling page:
 * fades in `.dz-reveal` elements and animates `[data-dz-count]` numbers
 * once each enters the viewport. Call once per page component.
 */
export function useDazzleReveal() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const countUp = (el: HTMLElement) => {
      const raw = el.getAttribute("data-dz-count");
      if (!raw) return;
      const target = parseFloat(raw);
      const prefix = el.getAttribute("data-dz-prefix") || "";
      const suffix = el.getAttribute("data-dz-suffix") || "";
      const decimals = (raw.split(".")[1] || "").length;
      if (reduced) {
        el.textContent = prefix + raw + suffix;
        return;
      }
      const dur = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = prefix + (target * eased).toFixed(decimals) + suffix;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const targets = document.querySelectorAll<HTMLElement>(".dz-reveal, [data-dz-count]");
    if (!targets.length) return;

    if (reduced) {
      targets.forEach((el) => {
        el.classList.add("dz-in");
        if (el.hasAttribute("data-dz-count")) countUp(el);
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("dz-in");
          if (entry.target.hasAttribute("data-dz-count")) countUp(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
