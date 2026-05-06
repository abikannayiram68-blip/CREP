import { T as jsxRuntimeExports } from "./worker-entry-DscPQEZk.js";
import { S as ScrollReveal } from "./ScrollReveal-DQmg6lKm.js";
function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const isCenter = align === "center";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ScrollReveal, { className: isCenter ? "max-w-3xl mx-auto text-center" : "max-w-3xl", children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-primary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse-ring" }),
      eyebrow
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight", children: title }),
    description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base md:text-lg text-muted-foreground leading-relaxed", children: description })
  ] });
}
export {
  SectionHeading as S
};
