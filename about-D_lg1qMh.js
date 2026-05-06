import { T as jsxRuntimeExports } from "./worker-entry-DscPQEZk.js";
import { P as PageHero } from "./PageHero-CJKCPiXG.js";
import { S as ScrollReveal } from "./ScrollReveal-DQmg6lKm.js";
import { S as SectionHeading } from "./SectionHeading-DMtYsS81.js";
import { c as createLucideIcon } from "./router-BIXYjq_b.js";
import { E as Earth, U as Users } from "./users-CWTWdotF.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode);
const pillars = [{
  icon: Target,
  title: "Mission",
  body: "Bridge research, industry and society by enabling ethical, high-quality scholarly publication and innovation worldwide."
}, {
  icon: Eye,
  title: "Vision",
  body: "To be the most trusted multinational partner for academic excellence, innovation and conference experiences."
}, {
  icon: Heart,
  title: "Values",
  body: "Integrity, inclusivity, sustainability and an unwavering commitment to the betterment of humankind."
}];
const facts = [{
  icon: Earth,
  title: "Global reach",
  body: "Authors, reviewers and partners across more than 40 countries collaborating on research."
}, {
  icon: Users,
  title: "Expert mentors",
  body: "Editors, reviewers and committee members from internationally renowned institutions and companies."
}, {
  icon: Award,
  title: "Quality first",
  body: "Every submission is screened with Turnitin / iThenticate and reviewed by domain experts."
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "About CREP", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Empowering academia through ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "ethical innovation" })
    ] }), description: "CREP (Chinmay Research Education and Publication Pvt. Ltd.) is a multinational alliance and principal association that strives for innovation across Research & Development, Global Journals, Conferences and Conference Support." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl container-px grid lg:grid-cols-3 gap-6", children: pillars.map(({
      icon: Icon,
      title,
      body
    }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "h-full rounded-2xl border border-border bg-gradient-card p-8 hover-lift", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center h-12 w-12 rounded-xl bg-gradient-hero text-primary-foreground shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6", "aria-hidden": true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-2xl font-semibold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: body })
    ] }) }, title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-gradient-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl container-px", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Our story", title: "Why CREP exists", description: "Scientific communication is the engine of progress. CREP exists to make that engine work for every researcher — regardless of geography or institution." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid lg:grid-cols-2 gap-10 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 text-muted-foreground leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We support academicians' commitment to contributing intellectual ideas to global growth. CREP concentrates on the regulatory implications of research and assists scholars through conferences, journals, seminars, workshops and training." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Academics are the guardians of future technologies, so we provide the ideal forum for research scholars to disseminate scientific inventions across the globe. We engage in high-quality analysis that advances and informs trends in the global research environment." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Environmental principles and the betterment of humankind are central to everything we do. CREP will not support advancements that have a negative impact on the planet." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: facts.map(({
          icon: Icon,
          title,
          body
        }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full rounded-2xl border border-border bg-card p-6 hover-lift", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-semibold", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground leading-relaxed", children: body })
        ] }) }, title)) })
      ] })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
