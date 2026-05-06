import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research & Development — Software, Web & AI | CREP" },
      {
        name: "description",
        content:
          "CREP's R&D team builds production-grade software in Java, Node.js, React, Next.js, Flutter and AI — for academic and enterprise needs.",
      },
      { property: "og:title", content: "CREP Research & Development" },
      {
        property: "og:description",
        content:
          "Software, website and mobile application development with deep AI/ML expertise.",
      },
    ],
  }),
  component: ResearchPage,
});

const stack = [
  {
    name: "Java",
    tag: "Enterprise",
    desc: "Robust, scalable object-oriented language powering ERP, CRM, financial systems and Android apps.",
    bullets: ["Platform independent (JVM)", "Spring & Hibernate ecosystem", "Big-data and cloud ready"],
  },
  {
    name: "Node.js",
    tag: "Realtime",
    desc: "Server-side runtime on Chrome's V8 — perfect for fast, scalable APIs, microservices and live dashboards.",
    bullets: ["Non-blocking event loop", "Unified JS codebase", "1M+ npm packages"],
  },
  {
    name: "React.js",
    tag: "Frontend",
    desc: "Component-based library for interactive, dynamic and SEO-friendly user interfaces.",
    bullets: ["Reusable components", "Virtual DOM performance", "Massive community"],
  },
  {
    name: "Next.js",
    tag: "Full-stack",
    desc: "React framework with SSR, SSG and API routes for high-performance e-commerce, blogs and marketing sites.",
    bullets: ["Automatic code splitting", "TypeScript first", "Edge & serverless"],
  },
  {
    name: "Flutter",
    tag: "Mobile",
    desc: "Google's UI toolkit for natively compiled mobile, web and desktop apps from a single codebase.",
    bullets: ["Cross-platform", "Hot reload", "Native performance"],
  },
  {
    name: "Artificial Intelligence",
    tag: "AI / ML",
    desc: "Intelligent systems that learn, reason and decide — powered by NLP, computer vision and predictive analytics.",
    bullets: ["Chatbots & assistants", "Computer vision", "Forecasting & insights"],
  },
];

const projects = [
  {
    title: "ICT-SGS-1 Conference Platform",
    type: "Conference Hosting",
    desc: "International Conference on Technologies for Smart Green Connected Society — hosting, registration, paper management.",
    href: "https://www.ictsgs.com/",
  },
  {
    title: "A2Z Journals",
    type: "Open-Access Publishing",
    desc: "Open-access, scholarly, peer-reviewed interdisciplinary online international journals platform.",
    href: "https://www.a2zjournals.com/",
  },
  {
    title: "Plagiarism Service Portal",
    type: "Academic Tooling",
    desc: "Turnitin / iThenticate-powered plagiarism workflow with rapid turnaround for scholars worldwide.",
    href: "#",
  },
];

function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research & Development"
        title={<>Software, web & AI built for <span className="text-gradient">academic impact</span></>}
        description="Our engineers transform research ideas into production-grade software, websites and mobile applications — with deep AI/ML expertise."
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl container-px">
          <SectionHeading
            eyebrow="Tech we use"
            title="A modern, battle-tested stack"
            description="We pick the right tool for the job — from enterprise-grade JVM systems to lightweight serverless and AI."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stack.map((s, i) => (
              <ScrollReveal key={s.name} delay={(i % 3) * 80}>
                <article className="group h-full rounded-2xl border border-border bg-gradient-card p-7 hover-lift">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-bold">{s.name}</h3>
                    <span className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                      {s.tag}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <ul className="mt-4 space-y-1.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {b}
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="mx-auto max-w-7xl container-px">
          <SectionHeading
            eyebrow="Projects & collaborations"
            title="Selected work and partnerships"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 90}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block h-full rounded-2xl border border-border bg-card p-7 hover-lift"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.type}</span>
                  <h3 className="mt-2 font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <span className="mt-5 inline-block text-sm font-semibold text-primary group-hover:underline">
                    Visit →
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
