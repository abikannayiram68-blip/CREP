import { T as jsxRuntimeExports } from "./worker-entry-DscPQEZk.js";
import { P as PageHero } from "./PageHero-CJKCPiXG.js";
import { S as ScrollReveal } from "./ScrollReveal-DQmg6lKm.js";
import { S as SectionHeading } from "./SectionHeading-DMtYsS81.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const stack = [{
  name: "Java",
  tag: "Enterprise",
  desc: "Robust, scalable object-oriented language powering ERP, CRM, financial systems and Android apps.",
  bullets: ["Platform independent (JVM)", "Spring & Hibernate ecosystem", "Big-data and cloud ready"]
}, {
  name: "Node.js",
  tag: "Realtime",
  desc: "Server-side runtime on Chrome's V8 — perfect for fast, scalable APIs, microservices and live dashboards.",
  bullets: ["Non-blocking event loop", "Unified JS codebase", "1M+ npm packages"]
}, {
  name: "React.js",
  tag: "Frontend",
  desc: "Component-based library for interactive, dynamic and SEO-friendly user interfaces.",
  bullets: ["Reusable components", "Virtual DOM performance", "Massive community"]
}, {
  name: "Next.js",
  tag: "Full-stack",
  desc: "React framework with SSR, SSG and API routes for high-performance e-commerce, blogs and marketing sites.",
  bullets: ["Automatic code splitting", "TypeScript first", "Edge & serverless"]
}, {
  name: "Flutter",
  tag: "Mobile",
  desc: "Google's UI toolkit for natively compiled mobile, web and desktop apps from a single codebase.",
  bullets: ["Cross-platform", "Hot reload", "Native performance"]
}, {
  name: "Artificial Intelligence",
  tag: "AI / ML",
  desc: "Intelligent systems that learn, reason and decide — powered by NLP, computer vision and predictive analytics.",
  bullets: ["Chatbots & assistants", "Computer vision", "Forecasting & insights"]
}];
const projects = [{
  title: "ICT-SGS-1 Conference Platform",
  type: "Conference Hosting",
  desc: "International Conference on Technologies for Smart Green Connected Society — hosting, registration, paper management.",
  href: "https://www.ictsgs.com/"
}, {
  title: "A2Z Journals",
  type: "Open-Access Publishing",
  desc: "Open-access, scholarly, peer-reviewed interdisciplinary online international journals platform.",
  href: "https://www.a2zjournals.com/"
}, {
  title: "Plagiarism Service Portal",
  type: "Academic Tooling",
  desc: "Turnitin / iThenticate-powered plagiarism workflow with rapid turnaround for scholars worldwide.",
  href: "#"
}];
function ResearchPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Research & Development", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Software, web & AI built for ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "academic impact" })
    ] }), description: "Our engineers transform research ideas into production-grade software, websites and mobile applications — with deep AI/ML expertise." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl container-px", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Tech we use", title: "A modern, battle-tested stack", description: "We pick the right tool for the job — from enterprise-grade JVM systems to lightweight serverless and AI." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: stack.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: i % 3 * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group h-full rounded-2xl border border-border bg-gradient-card p-7 hover-lift", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold", children: s.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider", children: s.tag })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-1.5", children: s.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
          " ",
          b
        ] }, b)) })
      ] }) }, s.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-gradient-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl container-px", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Projects & collaborations", title: "Selected work and partnerships" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: i * 90, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.href, target: "_blank", rel: "noreferrer", className: "group block h-full rounded-2xl border border-border bg-card p-7 hover-lift", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-primary", children: p.type }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-xl font-semibold", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: p.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-5 inline-block text-sm font-semibold text-primary group-hover:underline", children: "Visit →" })
      ] }) }, p.title)) })
    ] }) })
  ] });
}
export {
  ResearchPage as component
};
