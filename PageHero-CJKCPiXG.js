import { T as jsxRuntimeExports } from "./worker-entry-DscPQEZk.js";
function PageHero({ eyebrow, title, description }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-28 md:pt-36 pb-14 md:pb-20 bg-gradient-subtle overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 -z-10 opacity-[0.05]",
        style: {
          backgroundImage: "radial-gradient(circle at 1px 1px, var(--color-foreground) 1px, transparent 0)",
          backgroundSize: "32px 32px"
        },
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-32 h-80 w-80 rounded-full bg-gradient-hero opacity-20 blur-3xl animate-float", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl container-px text-center animate-fade-in-up", children: [
      eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-primary", children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight", children: title }),
      description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed", children: description })
    ] })
  ] });
}
export {
  PageHero as P
};
