import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, BookOpen, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications & Journals | CREP" },
      {
        name: "description",
        content:
          "Peer-reviewed journals from CREP — IJDIIC, IJETCC, JIEEE, JASE and JMSS — covering computing, electronics, applied science and management.",
      },
      { property: "og:title", content: "CREP Journals & Publications" },
      {
        property: "og:description",
        content:
          "Five scholarly peer-reviewed journals plus publication guidance for thesis, articles, proposals and implementation.",
      },
    ],
  }),
  component: PublicationsPage,
});

const journals = [
  {
    code: "IJDIIC",
    name: "International Journal of Data Informatics and Intelligent Computing",
    href: "https://ijdiic.com/index.php/research/index",
    scope: "Data informatics · Intelligent computing · AI",
  },
  {
    code: "IJETCC",
    name: "International Journal of Emerging Technologies in Computer and Communication",
    href: "https://ijetcc.com/index.php/ijetcc",
    scope: "Computer & communication technologies",
  },
  {
    code: "JIEEE",
    name: "Journal of Informatics, Electrical and Electronics Engineering",
    href: "https://jieee.a2zjournals.com/index.php/ieee",
    scope: "Informatics · EEE · Embedded systems",
  },
  {
    code: "JASE",
    name: "Journal of Applied Science and Education",
    href: "https://jase.a2zjournals.com/index.php/ase",
    scope: "Applied sciences · Education research",
  },
  {
    code: "JMSS",
    name: "Journal of Management and Service Science",
    href: "https://jmss.a2zjournals.com/index.php/mss",
    scope: "Management · Services · Business",
  },
];

const guidance = [
  {
    title: "Article Writing",
    desc: "We assist with high-quality manuscripts in CSE, IT, ECE and Management for IEEE, Elsevier, Springer, IET, SCI, Scopus and UGC-approved journals.",
  },
  {
    title: "Thesis Writing",
    desc: "Comprehensive thesis documentation aligned with your scholar's research publications and university guidelines.",
  },
  {
    title: "Implementation",
    desc: "From identifying research gaps to feasibility analysis and implementation in Python, Java, .NET, MATLAB and tools like Hadoop, NS2, NS3.",
  },
  {
    title: "Proposal Writing",
    desc: "Persuasive research proposals to apply for programs at universities worldwide across CSE, IT, ECE and Management.",
  },
];

function PublicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Publications"
        title={<>Peer-reviewed journals & <span className="text-gradient">publication guidance</span></>}
        description="A curated portfolio of scholarly journals and end-to-end publication support so your research reaches the right audience."
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl container-px">
          <SectionHeading
            eyebrow="Our journals"
            title="Five peer-reviewed open-access journals"
            description="Open access, scholarly, peer-reviewed and fully refereed — published in collaboration with our partners."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {journals.map((j, i) => (
              <ScrollReveal key={j.code} delay={(i % 3) * 80}>
                <a
                  href={j.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block h-full rounded-2xl border border-border bg-gradient-card p-7 hover-lift"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-hero text-primary-foreground shadow-soft">
                      <BookOpen className="h-6 w-6" aria-hidden />
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-primary">{j.code}</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug">
                    {j.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{j.scope}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Visit journal <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                  <span className="absolute right-5 top-5 inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="mx-auto max-w-7xl container-px">
          <SectionHeading
            eyebrow="Publication guidance"
            title="From idea to indexed publication"
            description="Communicating findings well is the engine of scientific progress. We help you do it with clarity and rigour."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {guidance.map((g, i) => (
              <ScrollReveal key={g.title} delay={(i % 2) * 100}>
                <article className="h-full rounded-2xl border border-border bg-card p-7 hover-lift">
                  <h3 className="font-display text-xl font-semibold">{g.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{g.desc}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl container-px">
          <ScrollReveal>
            <div className="rounded-3xl border border-border bg-gradient-card p-8 md:p-12 text-center">
              <div className="grid place-items-center h-12 w-12 mx-auto rounded-xl bg-gradient-hero text-primary-foreground shadow-soft">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h2 className="mt-5 font-display text-3xl md:text-4xl font-bold">Join our research community</h2>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                Get updates on conferences, journals, workshops, seminars, webinars, training and research guidance directly on WhatsApp.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                {[2, 3, 4, 5].map((n) => (
                  <a
                    key={n}
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold hover:bg-accent transition-colors"
                  >
                    WhatsApp Group {n}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
