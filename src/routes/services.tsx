import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  Users,
  GraduationCap,
  Code2,
  FileCheck2,
  PenLine,
  Lightbulb,
  Globe2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Publication, Conferences, Research Guidance | CREP" },
      {
        name: "description",
        content:
          "Explore CREP services: peer-reviewed journal publication, international conferences, thesis & article writing, software R&D and plagiarism checking.",
      },
      { property: "og:title", content: "CREP Services — Publication, Conferences & R&D" },
      {
        property: "og:description",
        content:
          "End-to-end services for researchers: from manuscript to indexed publication, conference participation and full-stack software development.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: BookOpen,
    title: "Journal Publication",
    desc: "Submission support for SCI, ESCI, SSCI, Scopus, UGC-CARE, IEEE, Springer, Elsevier and IET indexed journals across CSE, IT, ECE and Management.",
    features: ["Journal selection", "Formatting & cover letter", "Reviewer responses"],
  },
  {
    icon: Users,
    title: "Conferences & Workshops",
    desc: "Organisation, sponsorship and participation across international conferences, FDPs, symposiums, technical fests and webinars.",
    features: ["Call for papers", "Speaker & reviewer panels", "Hybrid hosting"],
  },
  {
    icon: PenLine,
    title: "Article Writing",
    desc: "High-quality research papers crafted with rigorous methodology, structured arguments and journal-grade formatting.",
    features: ["Topic selection", "Literature review", "Camera-ready drafts"],
  },
  {
    icon: GraduationCap,
    title: "Thesis Writing",
    desc: "Documenting your research with clarity — from chapter outlines to references, aligned with your university's guidelines.",
    features: ["Chapter planning", "Citations & bibliography", "Defence preparation"],
  },
  {
    icon: Lightbulb,
    title: "Implementation",
    desc: "From research gap to working prototype using Python, Java, .NET, MATLAB, NS2/NS3, Hadoop and modern AI/ML stacks.",
    features: ["Algorithm design", "Reproducible code", "Result analysis"],
  },
  {
    icon: FileCheck2,
    title: "Proposal Writing",
    desc: "Compelling research proposals for global universities and funding bodies — with crisp problem statements and methodology.",
    features: ["Synopsis & abstract", "Methodology", "Timeline & budget"],
  },
  {
    icon: Code2,
    title: "Software & Web R&D",
    desc: "Production-grade builds in Java, Node.js, React, Next.js, Flutter, and AI-driven analytics for academic and enterprise needs.",
    features: ["Web & mobile apps", "AI/ML integration", "Cloud deployment"],
  },
  {
    icon: ShieldCheck,
    title: "Plagiarism Checking",
    desc: "Authentic Turnitin and iThenticate similarity reports with editorial guidance to safeguard your academic integrity.",
    features: ["Detailed similarity report", "Section-wise insight", "Rewrite guidance"],
  },
  {
    icon: Globe2,
    title: "MOU & Collaboration",
    desc: "Strategic MOUs with international organisations for joint research, sponsorship, promotion and faculty exchange.",
    features: ["Partner outreach", "Agreement drafting", "Joint events"],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Built for every stage of your <span className="text-gradient">research journey</span></>}
        description="From your very first idea to a globally indexed publication or deployed product — explore the comprehensive services CREP offers to scholars and institutions."
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl container-px">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc, features }, i) => (
              <ScrollReveal key={title} delay={(i % 3) * 80}>
                <article className="group relative h-full rounded-2xl border border-border bg-gradient-card p-7 hover-lift">
                  <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-hero text-primary-foreground shadow-soft group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  <ul className="mt-4 space-y-1.5">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-subtle">
        <div className="mx-auto max-w-5xl container-px">
          <SectionHeading
            eyebrow="How it works"
            title="A simple, transparent process"
          />
          <ol className="mt-12 grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Discover", d: "Share your goals and we recommend the best path." },
              { n: "02", t: "Plan", d: "We outline scope, timeline and deliverables." },
              { n: "03", t: "Execute", d: "Our experts work alongside you with regular updates." },
              { n: "04", t: "Deliver", d: "Submission, publication or product launch — done right." },
            ].map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 90}>
                <li className="rounded-2xl border border-border bg-card p-6 hover-lift list-none">
                  <span className="font-display text-3xl font-bold text-gradient">{s.n}</span>
                  <p className="mt-2 font-semibold">{s.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </li>
              </ScrollReveal>
            ))}
          </ol>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-hero text-primary-foreground px-6 py-3 text-sm font-semibold shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all"
            >
              Discuss your project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
