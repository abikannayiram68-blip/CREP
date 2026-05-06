import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-DscPQEZk.js";
import { S as ScrollReveal } from "./ScrollReveal-DQmg6lKm.js";
import { B as BookOpen, M as MapPin, a as Mail, P as Phone } from "./router-BIXYjq_b.js";
import { C as CircleCheck, S as Send } from "./send-AHmItwrR.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const heroImg = "/assets/hero-BL7Ha7rC.jpg";
const whatWeDo = [{
  title: "Publications",
  items: ["Journals", "Conference", "Book Publication"]
}, {
  title: "Workshop & Events",
  items: ["Online Training", "Webinar", "Online Conference"]
}, {
  title: "Research & Development",
  items: ["Software Development", "Website Development", "Mobile Application Development"]
}];
const publicationGuidance = [{
  title: "Article writing",
  description: "The term 'high-quality article' refers to the publishing of a high-quality journal article. As a result, we take great attention while producing research papers. We assist with the submission of new research papers in the fields of CSE, IT, ECE and Management to a variety of journals, including IEEE, Elsevier, Springer, IET, SCI, Scopus and any other UGC-approved publications. The cost and time it takes to prepare a journal are determined by the kind of publication."
}, {
  title: "Thesis writing",
  description: "Thesis writing is the process of documenting one's study. This is the most important aspect of research. We encourage you to write a research thesis in CSE, IT, ECE or Management that adheres to the notions presented in the scholar's research publications. In less time, detailed documentation of the research activity may be completed."
}, {
  title: "Implementation",
  description: "Finding a research gap, generating a solution, assessing the feasibility, and implementing the answer are all steps in the research work implementation process. For the implementation, any programming languages such as Python, Java, Dotnet, MATLAB, and any tools like Hadoop, NS2, and NS3 may be utilized. The cost of implementation is determined by the solution's complexity."
}, {
  title: "Proposal writing",
  description: "A research proposal is required to apply for a research program at any university. It's a synopsis of the planned study. It defines the subject that the scholar will address and elaborates on his or her field of research. It should justify the research's purpose and strategy. We assist in the preparation of proposals to numerous universities throughout the world in the fields of CSE, IT, ECE and Management."
}];
const whatsAppGroups = [{
  label: "WhatsApp Group-1 FULL",
  href: "#"
}, {
  label: "WhatsApp Group-2",
  href: "https://chat.whatsapp.com/DbnBZhFieN39evRdZzH0US"
}, {
  label: "WhatsApp Group-3",
  href: "https://chat.whatsapp.com/EoaXTKr2wvX8vcSlnGOfpO"
}, {
  label: "WhatsApp Group-4",
  href: "https://chat.whatsapp.com/BOe1BkrJwdqHO42h0xINsz"
}, {
  label: "WhatsApp Group-5",
  href: "https://chat.whatsapp.com/GFSYlfHYUJLEJRwO4G1Onk"
}];
function HomePage() {
  const [sent, setSent] = reactExports.useState(false);
  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 5e3);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "hero", className: "relative overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-subtle", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 opacity-[0.06]", style: {
        backgroundImage: "radial-gradient(circle at 1px 1px, var(--color-foreground) 1px, transparent 0)",
        backgroundSize: "36px 36px"
      }, "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-40 -right-24 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl animate-float", style: {
        animationDelay: "2s"
      }, "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl container-px grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-in-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-3.5 w-3.5" }),
            " ISO 9001:2015 Certified"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]", children: [
            "Better Solutions For Your ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Research" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed", children: "We are a team of researchers helping in all directions of research." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.creppvtltd.com/iusbst2023/iusbst-2023.html", target: "_blank", rel: "noreferrer", className: "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-hero text-primary-foreground px-5 py-3 text-sm font-semibold shadow-soft hover:shadow-elegant transition-all", children: [
              "Call for Chapters (iusbst-2023)",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-red-500 text-white px-1 py-0.5 rounded", children: "NEW" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.creppvtltd.com/IRRSE-1.jpg", target: "_blank", rel: "noreferrer", className: "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold hover:bg-accent transition-colors", children: [
              "Download Brochure",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-red-500 text-white px-1 py-0.5 rounded", children: "NEW" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://forms.gle/4v9BdPJPLuwB8AcN7", target: "_blank", rel: "noreferrer", className: "inline-flex items-center justify-center gap-2 rounded-full bg-background border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent transition-colors", children: "Plagiarism Checking (Turnitin)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.youtube.com/watch?v=eALzUfkQJRU", target: "_blank", rel: "noreferrer", className: "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold hover:bg-accent transition-colors", children: "▶ Watch Video" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative animate-fade-in-up", style: {
          animationDelay: "150ms"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-3xl overflow-hidden shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Illustration of academic publications, research and innovation", width: 1536, height: 1152, className: "w-full h-auto" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-elegant", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center h-10 w-10 rounded-full bg-gradient-hero text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Trusted by" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "10,000+ scholars" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "py-20 md:py-28 bg-gradient-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl container-px", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-primary", children: "About CREP" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight", children: "CREP is a multinational alliance and principal association that strives for innovation in all areas of technical advances." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-5 text-muted-foreground leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "CREP (Chinmay Research Education and Publication Private Limited) is a multinational alliance and principal association that strives for innovation in all areas of technical advances across its broad verticals of Research and Development, Global Journals, Conferences, and Conference Support." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We support academicians' commitment to contributing their intellectual ideas to global growth. CREP has mainly concentrated on the regulatory implications of research. CREP, on the other hand, is committed to assisting scholars by conferences, journals seminars, workshops, training." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "CREP insists that academics are the guardians of future technologies, so we have the ideal forum for research scholars to disseminate their scientific inventions around the globe. CREP is engaged in high-quality analysis that advances and informs scientific trends in the global research environment." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The environmental principles and the betterment of mankind are a major concern for CREP. CREP would not support any advancement that has a negative impact on the climate." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold", children: "What We Do" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-6", children: whatWeDo.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: section.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: section.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-primary shrink-0" }),
            item
          ] }, item)) })
        ] }, section.title)) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "publications", className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl container-px", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-primary", children: "PUBLICATIONS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight", children: "Publication guidance for every research stage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl", children: "A researcher's principal responsibility is to communicate technical findings to the rest of the scientific community. Scientific communication, whether written or spoken, is a vital stage in the scientific process and the primary engine of progress within a scientific discipline." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6", children: publicationGuidance.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: index * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-3xl border border-border bg-card p-8 hover-lift", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: item.description })
      ] }) }, item.title)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "portfolio", className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl container-px", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-primary", children: "Workshop & Events" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight", children: "Global events, webinars and conference support for researchers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed max-w-xl", children: "Our Workshop & Events vertical covers online training, webinars, international conferences and online conference management with experienced speakers and editorial support." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold", children: "Workshop & Events services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-primary", children: "MOU" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Inviting international organizations to collaborate in research activities such as conferences, workshops, seminars, symposiums, FDPs, and technical fests, as well as sponsorship and promotion." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-primary", children: "APPOINTMENT" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "If you want to conduct a research activity such as a conference, workshop, seminar, symposium, FDP, or publication, please contact us at care@creppvtltd.com or creppvtltd@gmail.com, or call us at +91-8299178291." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-primary", children: "CALL FOR PAPER" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Abstract, full paper UGC Care List, SCOPUS, Web of Science (SCI, ESCI, SSCI, etc.) and EI Compendex journals, as well as reputable Springier, Elsevier, and IEEE International Conferences, are all accepting submissions." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-primary", children: "BE A SPEAKER, REVIEWER & EDITOR" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "World-class speakers, reviewers, editors and guest editors, as well as Committee members from internationally renowned institutions and companies are being invited." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold text-center mb-8", children: "Collaborations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.ictsgs.com/", target: "_blank", rel: "noreferrer", className: "group block rounded-2xl border border-border bg-gradient-card p-6 hover-lift", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "International Conference on Technologies for Smart Green Connected Society 2021 (ICT-SGS-1)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Conference Hosting" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block mt-3 text-sm font-semibold text-primary group-hover:underline", children: "Visit →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.a2zjournals.com/", target: "_blank", rel: "noreferrer", className: "group block rounded-2xl border border-border bg-gradient-card p-6 hover-lift", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "A2Z Journals" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Open-access, scholarly, peer-reviewed interdisciplinary online international journals platform." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block mt-3 text-sm font-semibold text-primary group-hover:underline", children: "Visit →" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "research", className: "py-20 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl container-px", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-primary", children: "Research & Development" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight", children: [
          "Software, web & AI built for ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "academic impact" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed max-w-2xl mx-auto", children: "Our engineers transform research ideas into production-grade software, websites and mobile applications — with deep AI/ML expertise." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: [{
        name: "Java",
        tag: "Enterprise",
        overview: "Java is a robust, object-oriented programming language that has been the cornerstone of enterprise software development for decades. Known for its scalability, portability, and security, Java powers everything from enterprise applications to Android development.",
        benefits: ['Platform Independence: "Write Once, Run Anywhere" capability ensures that Java applications can run on any device with a Java Virtual Machine (JVM).', "Enterprise-Grade Applications: Ideal for large-scale systems like ERP, CRM, and financial software.", "Rich Ecosystem: Vast libraries, frameworks (Spring, Hibernate), and tools streamline development.", "Security: Built-in features like memory management and runtime checking provide a secure development environment."],
        specialty: "Java's ability to handle large volumes of data and concurrent users makes it indispensable for enterprise systems, big data platforms, and cloud applications."
      }, {
        name: "Node.js",
        tag: "Realtime",
        overview: "Node.js is a server-side runtime built on Chrome's V8 JavaScript engine. It enables developers to create fast, scalable, and lightweight server-side applications using JavaScript.",
        benefits: ["High Performance: Non-blocking, event-driven architecture ensures fast execution and scalability.", "Unified Codebase: JavaScript on both client and server reduces context switching.", "Real-Time Applications: Perfect for real-time apps like chat applications, live dashboards, and gaming servers.", "Vast Package Ecosystem: Over 1 million libraries available through npm (Node Package Manager)."],
        specialty: "Node.js excels in microservices, APIs, and applications requiring real-time data exchange."
      }, {
        name: "React.js",
        tag: "Frontend",
        overview: "React.js is a JavaScript library developed by Facebook for building interactive and dynamic user interfaces. It focuses on building reusable UI components.",
        benefits: ["Component-Based Architecture: Encourages reusability and modular development.", "Virtual DOM: Enhances performance by minimizing direct manipulation of the DOM.", "Strong Community Support: Backed by Facebook and a vast developer community.", "SEO-Friendly: Server-side rendering capabilities improve search engine visibility."],
        specialty: "React.js is the go-to choice for single-page applications (SPAs) and complex web apps with rich user interfaces."
      }, {
        name: "Next.js",
        tag: "Full-stack",
        overview: "Next.js is a React-based framework for server-side rendering (SSR) and static site generation (SSG). It combines React's flexibility with additional features for optimal performance.",
        benefits: ["Improved Performance: SSR and SSG enhance load times and SEO.", "Automatic Code Splitting: Only the necessary JavaScript is loaded, reducing bundle size.", "API Routes: Built-in support for creating serverless API routes.", "Developer-Friendly: Integrated TypeScript support and hot module replacement (HMR)."],
        specialty: "Next.js is ideal for creating high-performance e-commerce platforms, blogs, and marketing websites."
      }, {
        name: "Flutter",
        tag: "Mobile",
        overview: "Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
        benefits: ["Cross-Platform Development: Write once, deploy anywhere.", "Rich UI: Pre-built widgets and customization options for a seamless user experience.", "Hot Reload: Accelerates the development process by allowing instant code changes.", "Performance: Native compilation ensures smooth performance across platforms."],
        specialty: "Flutter is perfect for creating visually appealing, high-performance applications with tight deadlines."
      }, {
        name: "Artificial Intelligence",
        tag: "AI / ML",
        overview: "AI technologies empower businesses to create intelligent systems capable of learning, reasoning, and problem-solving.",
        benefits: ["Data-Driven Insights: Machine learning models analyze vast amounts of data for actionable insights.", "Automation: AI automates repetitive tasks, increasing efficiency and accuracy.", "Personalization: AI enhances customer experiences through tailored recommendations and services.", "Predictive Analytics: Helps businesses forecast trends and make informed decisions."],
        specialty: "Our AI expertise includes natural language processing (NLP), computer vision, chatbot development, predictive modeling, and AI-driven analytics."
      }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: i % 3 * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group h-full rounded-2xl border border-border bg-gradient-card p-7 hover-lift", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold", children: s.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider", children: s.tag })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed font-medium", children: s.overview }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-primary", children: "Benefits:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-1", children: s.benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-foreground/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" }),
            " ",
            b
          ] }, b)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-primary", children: "Specialty:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-foreground/80", children: s.specialty })
        ] })
      ] }) }, s.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl font-bold text-center mb-12", children: "Journals" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: [{
          name: "International Journal of Data Informatics and Intelligent computing (IJDIIC)",
          type: "Peer-Reviewed (Refereed or Scholarly)",
          href: "https://ijdiic.com/index.php/research/index"
        }, {
          name: "International Journal of Emerging Technologies in Computer and Communication (IJETCC)",
          type: "Peer-Reviewed (Refereed or Scholarly)",
          href: "https://ijetcc.com/index.php/ijetcc"
        }, {
          name: "Journal of Informatics Electrical and Electronics Engineering (JIEEE)",
          type: "Peer-Reviewed (Refereed or Scholarly)",
          href: "https://jieee.a2zjournals.com/index.php/ieee"
        }, {
          name: "Journal of Applied Science and Education (JASE)",
          type: "Peer-Reviewed (Refereed or Scholarly)",
          href: "https://jase.a2zjournals.com/index.php/ase"
        }, {
          name: "Journal of Management and Service Science (JMSS)",
          type: "Peer-Reviewed (Refereed or Scholarly)",
          href: "https://jmss.a2zjournals.com/index.php/mss"
        }].map((j, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: j.href, target: "_blank", rel: "noreferrer", className: "group block h-full rounded-2xl border border-border bg-card p-7 hover-lift", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-primary", children: j.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-2 font-display text-lg font-semibold leading-snug", children: j.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-4 inline-block text-sm font-semibold text-primary group-hover:underline", children: "Journal Website →" })
        ] }) }, j.name)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "collaborate", className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl container-px", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-primary", children: "Collaborations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight", children: "Collaborate with CREP for global research and publication alliances" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed max-w-2xl", children: "We build strategic partnerships, MOUs, sponsored research, faculty exchange and joint publication support with international institutions." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: ["International research alliances", "Conference collaboration and sponsorship", "Joint publication support"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-background p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: item }) }, item)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "cta", className: "py-16 md:py-20 bg-gradient-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl container-px", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 md:p-10 text-center shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-primary", children: "Connect us on WhatsApp group" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight", children: "Connect us on WhatsApp group" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed max-w-2xl mx-auto", children: "On the WhatsApp group you will find all updates related to Research, Publication, International and National Conferences, Workshop, Seminars, Webinars, Trainings and Research Guidance." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-3", children: whatsAppGroups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: group.href, className: "inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold hover:bg-accent transition-colors", children: group.label }, group.label)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "payments", className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl container-px", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 md:p-10 text-center shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-primary", children: "Payments" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight", children: "Secure Payment Options" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed max-w-2xl mx-auto", children: "We accept various payment methods to make your transactions smooth and secure. Choose from bank transfer, UPI, credit/debit cards, and digital wallets." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-background p-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: "🏦" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Bank Transfer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Direct bank transfers" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-background p-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: "💳" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Credit/Debit Cards" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Visa, Mastercard, RuPay" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-background p-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: "📱" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "UPI" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Google Pay, PhonePe, Paytm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-background p-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: "💰" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Digital Wallets" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "All major wallets supported" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl container-px", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-primary", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight", children: [
          "Let's start a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "conversation" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed max-w-2xl mx-auto", children: "Whether you're submitting a paper, hosting a conference or building a research product — our team responds within one business day." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-5 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 space-y-4", children: [{
          Icon: MapPin,
          title: "Location",
          body: "D-2/541, Vikalp Khand, Gomti Nagar, Lucknow-226010"
        }, {
          Icon: Mail,
          title: "Email",
          body: "care@creppvtltd.com\ncreppvtltd@gmail.com"
        }, {
          Icon: Phone,
          title: "Call",
          body: "+918299178291"
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
        ] }) }, title)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "rounded-2xl border border-border bg-card p-7 md:p-9 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold", children: "Send us a message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "We'll get back to you within one business day." }),
          sent && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 inline-flex items-center gap-2 rounded-lg bg-green-50 border border-green-200 text-green-800 px-4 py-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
            "Message sent successfully!"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium", htmlFor: "name", children: "Your Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "name", name: "name", type: "text", required: true, className: "mt-1.5 block w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 transition" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium", htmlFor: "email", children: "Your Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "email", name: "email", type: "email", required: true, className: "mt-1.5 block w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 transition" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium", htmlFor: "phone", children: "Your Mobile Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "phone", name: "phone", type: "tel", className: "mt-1.5 block w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 transition" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium", htmlFor: "subject", children: "Subject" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "subject", name: "subject", type: "text", required: true, className: "mt-1.5 block w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 transition" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium", htmlFor: "message", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "message", name: "message", required: true, rows: 5, className: "mt-1.5 block w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 transition", placeholder: "Tell us about your research, paper or project…" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-hero text-primary-foreground px-6 py-3 text-sm font-semibold shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all", children: [
            "Send Message ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-center mb-8", children: "Payments" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://www.creppvtltd.com/payments.jpg", alt: "Payment methods", className: "mx-auto max-w-md rounded-lg shadow-soft" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm text-muted-foreground", children: [
            "UPI ID: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "boism-8299178291@boi" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-center mb-8", children: "Ethical Policies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto space-y-6 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The publication of an article in a peer-reviewed journal is an essential building block in the development of a coherent and respected network of knowledge. It is a direct reflection of the quality of work of the author and the institutions that support them. Peer-reviewed articles support and embody the scientific method. It is therefore important to agree upon standards of expected ethical behavior." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 list-disc list-inside", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Submit a paper .doc/.docx/ latex Format should be in the format strictly specified on the journal or conference website." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Only the selected papers will get the intimation that will be accepted for publication. Kindly do not submit the paper multiple times; it may lead to cancellation of an article/paper." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "All the papers will be checked with advanced plagiarism detection tools like Turnitin or iThenticate." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "submitted paper cannot be withdrawn at any condition once it is paid or accepted." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "CREP assists only for the publication of papers in journals or conference, Not for review, comment, correction, Indexing, withdrawn, any other correction in papers etc." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "CREP is responsible up to online or published the papers in the journal link." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Submitted papers will accept or proceed for publication in the journal or conference after the payment only." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "After the payment, all the copyright of your article will be transferred & reserved to publish in a respective journal or conferences." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Accepted papers are asked to intimate about the Article Processing Charge(APC) or Conference registration immediately." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "After completion of the Article Processing Charge(APC) or Conference registration fee process, Authors are required to send the scan copy of the registration fee receipt or transaction proof with Remitter's (Participant/Author) name, Paper-ID and the Purpose of remittance through an email." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Any modification or changes in the paper will be not accepted after the final submission." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Authors or conference participants MUST bear all banking charges." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Conference registration fees do not include accommodation and travel." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "All the communication and latest information or notifications through email or website only." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Do not send the papers with plagiarism, a plagiarized paper will not be considered for publication in the journal as well as in conference. if found the plagiarism in papers and rejecting from journal and conference, there is no refund and necessary action as per required." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-yellow-800 mb-2", children: "Cancellation & Refund Policy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-yellow-700 list-disc list-inside text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Wrongly deposit money or extra deposit money will be returned back within 03 weeks if the respective candidate informs us within 02 days after the date of money deposit or transaction." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "In case if an author wishes to withdraw their papers from the journal or cancel the registration from the conference, the full amount will not be refunded. Refunds will be subjected to an administrative charge to be borne by the registrant. Bank charges that occur will also have to be borne by the registrant." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Approved Charge, once received by CREP, will not be refunded at any circumstances. If any paper is cancelled (by either side) due to duplicate publication, plagiarism, author misconduct, authorship dispute, ethical issue, etc, no refund of Publication charge will be done." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "No refund will be made for cancellation after the paper being scheduled in the conference (technical session)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "if the paper does not reach the reviewing stage. Or not accepted, it will publish in another journal by confirming with authors." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "There are no refunds or cancellation of debts, if the author withdraws his or her paper from consideration; or if he or she declines to revise and resubmit." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "There are no refunds or cancellation of debts, once the paper is published or online in the journal link." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "There are no refunds or cancellation of debts if the published paper is removed due to Copyright Infringement Claims or any other issue." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "After Publish Issue / Indexing, the author can't make any correction in the article." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "After publishing Issue/Indexing, If the author wants to correction in the article he/she has to pay extra as per changes in the article depending on the possibility." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "There are no refunds or cancellation of debts, if Publications may be delayed sometimes as it depends upon the publisher based on upcoming issues." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-blue-800 mb-2", children: "Instructions For Payment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-blue-700 list-disc list-inside text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "If you are making payment by NEFT/ RTGS/ IMPS, please inform us of the NEFT/ RTGS/ IMPS acknowledgement number (UTR) by email. A manuscript will not be processed if UTR number is not sent. Receipt of payment will be given by email only after receiving the money to our account (Please give us 24-48 hrs for acknowledgement)." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Please do not make any cash deposit to our account, only online IMPS/ NEFT/ RTGS is strongly recommended. If you want to do cash deposit to our account, kindly add extra INR100/- as cash deposit charge." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "You can make payment through Google pay, Paytm, BHIM app, UPI etc. After the payment completion, you have to go to your Bank statement where you will get a payment reference number related to your particular payment. Please send us that particular payment reference no. from your Bank account statement by taking a screenshot or photo by email or WhatsApp." })
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  HomePage as component
};
