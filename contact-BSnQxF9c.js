import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-DscPQEZk.js";
import { P as PageHero } from "./PageHero-CJKCPiXG.js";
import { S as ScrollReveal } from "./ScrollReveal-DQmg6lKm.js";
import { M as MapPin, a as Mail, P as Phone } from "./router-BIXYjq_b.js";
import { S as Send, C as CircleCheck } from "./send-AHmItwrR.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 5e3);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Contact", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Let's start a ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "conversation" })
    ] }), description: "Whether you're submitting a paper, hosting a conference or building a research product — our team responds within one business day." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl container-px grid lg:grid-cols-5 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [{
        Icon: MapPin,
        title: "Visit",
        body: "D-2/541, Vikalp Khand,\nGomti Nagar, Lucknow-226010, India"
      }, {
        Icon: Mail,
        title: "Email",
        body: "care@creppvtltd.com\ncreppvtltd@gmail.com"
      }, {
        Icon: Phone,
        title: "Call",
        body: "+91 82991 78291\nMon – Sat · 10:00 – 18:00 IST"
      }].map(({
        Icon,
        title,
        body
      }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-gradient-card p-6 hover-lift", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center h-11 w-11 rounded-xl bg-gradient-hero text-primary-foreground shadow-soft shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground whitespace-pre-line leading-relaxed", children: body })
        ] })
      ] }) }, title)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: 120, className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "rounded-2xl border border-border bg-card p-7 md:p-9 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "Send us a message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "We'll get back to you within one business day." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your name", name: "name", type: "text", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email address", name: "email", type: "email", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Mobile number", name: "phone", type: "tel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Subject", name: "subject", type: "text", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium", htmlFor: "message", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "message", name: "message", required: true, rows: 5, className: "mt-1.5 block w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 transition", placeholder: "Tell us about your research, paper or project…" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-hero text-primary-foreground px-6 py-3 text-sm font-semibold shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all", children: [
          "Send message ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
        ] }),
        sent && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 inline-flex items-center gap-2 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-3 py-2 text-sm font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
          " Your message has been sent. Thank you!"
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl container-px", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-border shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "CREP office location map", src: "https://www.google.com/maps?q=Vikalp+Khand,+Gomti+Nagar,+Lucknow+226010&output=embed", width: "100%", height: "420", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", className: "block w-full border-0" }) }) }) }) })
  ] });
}
function Field({
  label,
  name,
  type,
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: name, className: "block text-sm font-medium", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: name, name, type, required, className: "mt-1.5 block w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 transition" })
  ] });
}
export {
  ContactPage as component
};
