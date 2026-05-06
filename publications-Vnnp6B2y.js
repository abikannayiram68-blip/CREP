import { T as jsxRuntimeExports } from "./worker-entry-DscPQEZk.js";
import { P as PageHero } from "./PageHero-CJKCPiXG.js";
import { S as ScrollReveal } from "./ScrollReveal-DQmg6lKm.js";
import { S as SectionHeading } from "./SectionHeading-DMtYsS81.js";
import { c as createLucideIcon, B as BookOpen } from "./router-BIXYjq_b.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode);
const journals = [{
  code: "IJDIIC",
  name: "International Journal of Data Informatics and Intelligent Computing",
  href: "https://ijdiic.com/index.php/research/index",
  scope: "Data informatics · Intelligent computing · AI"
}, {
  code: "IJETCC",
  name: "International Journal of Emerging Technologies in Computer and Communication",
  href: "https://ijetcc.com/index.php/ijetcc",
  scope: "Computer & communication technologies"
}, {
  code: "JIEEE",
  name: "Journal of Informatics, Electrical and Electronics Engineering",
  href: "https://jieee.a2zjournals.com/index.php/ieee",
  scope: "Informatics · EEE · Embedded systems"
}, {
  code: "JASE",
  name: "Journal of Applied Science and Education",
  href: "https://jase.a2zjournals.com/index.php/ase",
  scope: "Applied sciences · Education research"
}, {
  code: "JMSS",
  name: "Journal of Management and Service Science",
  href: "https://jmss.a2zjournals.com/index.php/mss",
  scope: "Management · Services · Business"
}];
const guidance = [{
  title: "Article Writing",
  desc: "We assist with high-quality manuscripts in CSE, IT, ECE and Management for IEEE, Elsevier, Springer, IET, SCI, Scopus and UGC-approved journals."
}, {
  title: "Thesis Writing",
  desc: "Comprehensive thesis documentation aligned with your scholar's research publications and university guidelines."
}, {
  title: "Implementation",
  desc: "From identifying research gaps to feasibility analysis and implementation in Python, Java, .NET, MATLAB and tools like Hadoop, NS2, NS3."
}, {
  title: "Proposal Writing",
  desc: "Persuasive research proposals to apply for programs at universities worldwide across CSE, IT, ECE and Management."
}];
function PublicationsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Publications", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Peer-reviewed journals & ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "publication guidance" })
    ] }), description: "A curated portfolio of scholarly journals and end-to-end publication support so your research reaches the right audience." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl container-px", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Our journals", title: "Five peer-reviewed open-access journals", description: "Open access, scholarly, peer-reviewed and fully refereed — published in collaboration with our partners." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: journals.map((j, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: i % 3 * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: j.href, target: "_blank", rel: "noreferrer", className: "group relative block h-full rounded-2xl border border-border bg-gradient-card p-7 hover-lift", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center h-12 w-12 rounded-xl bg-gradient-hero text-primary-foreground shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-6 w-6", "aria-hidden": true }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold tracking-wider text-primary", children: j.code })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-lg font-semibold leading-snug", children: j.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: j.scope }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary", children: [
          "Visit journal ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-5 top-5 inline-block h-2 w-2 rounded-full bg-emerald-500", "aria-hidden": true })
      ] }) }, j.code)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-gradient-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl container-px", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Publication guidance", title: "From idea to indexed publication", description: "Communicating findings well is the engine of scientific progress. We help you do it with clarity and rigour." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2", children: guidance.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: i % 2 * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "h-full rounded-2xl border border-border bg-card p-7 hover-lift", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: g.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground leading-relaxed", children: g.desc })
      ] }) }, g.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl container-px", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-gradient-card p-8 md:p-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center h-12 w-12 mx-auto rounded-xl bg-gradient-hero text-primary-foreground shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 font-display text-3xl md:text-4xl font-bold", children: "Join our research community" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-2xl mx-auto text-muted-foreground", children: "Get updates on conferences, journals, workshops, seminars, webinars, training and research guidance directly on WhatsApp." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7 flex flex-wrap items-center justify-center gap-3", children: [2, 3, 4, 5].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold hover:bg-accent transition-colors", children: [
        "WhatsApp Group ",
        n
      ] }, n)) })
    ] }) }) }) })
  ] });
}
export {
  PublicationsPage as component
};
