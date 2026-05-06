import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, Globe2, Award, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CREP — Multinational Research Alliance" },
      {
        name: "description",
        content:
          "Learn about CREP Pvt. Ltd. — an ISO 9001:2015 certified research, publication and innovation alliance helping academics publish and grow globally.",
      },
      { property: "og:title", content: "About CREP — Multinational Research Alliance" },
      {
        property: "og:description",
        content:
          "Our mission, vision and values: bridging research, industry and society through ethical scholarly excellence.",
      },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: Target, title: "Mission", body: "Bridge research, industry and society by enabling ethical, high-quality scholarly publication and innovation worldwide." },
  { icon: Eye, title: "Vision", body: "To be the most trusted multinational partner for academic excellence, innovation and conference experiences." },
  { icon: Heart, title: "Values", body: "Integrity, inclusivity, sustainability and an unwavering commitment to the betterment of humankind." },
];

const facts = [
  { icon: Globe2, title: "Global reach", body: "Authors, reviewers and partners across more than 40 countries collaborating on research." },
  { icon: Users, title: "Expert mentors", body: "Editors, reviewers and committee members from internationally renowned institutions and companies." },
  { icon: Award, title: "Quality first", body: "Every submission is screened with Turnitin / iThenticate and reviewed by domain experts." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CREP"
        title={<>Empowering academia through <span className="text-gradient">ethical innovation</span></>}
        description="CREP (Chinmay Research Education and Publication Pvt. Ltd.) is a multinational alliance and principal association that strives for innovation across Research & Development, Global Journals, Conferences and Conference Support."
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, title, body }, i) => (
            <ScrollReveal key={title} delay={i * 100}>
              <article className="h-full rounded-2xl border border-border bg-gradient-card p-8 hover-lift">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-hero text-primary-foreground shadow-soft">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="mx-auto max-w-7xl container-px">
          <SectionHeading
            eyebrow="Our story"
            title="Why CREP exists"
            description="Scientific communication is the engine of progress. CREP exists to make that engine work for every researcher — regardless of geography or institution."
          />
          <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
            <ScrollReveal>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  We support academicians' commitment to contributing intellectual ideas to global growth. CREP concentrates on the regulatory implications of research and assists scholars through conferences, journals, seminars, workshops and training.
                </p>
                <p>
                  Academics are the guardians of future technologies, so we provide the ideal forum for research scholars to disseminate scientific inventions across the globe. We engage in high-quality analysis that advances and informs trends in the global research environment.
                </p>
                <p>
                  Environmental principles and the betterment of humankind are central to everything we do. CREP will not support advancements that have a negative impact on the planet.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {facts.map(({ icon: Icon, title, body }, i) => (
                <ScrollReveal key={title} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6 hover-lift">
                    <Icon className="h-5 w-5 text-primary" />
                    <p className="mt-3 font-semibold">{title}</p>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
