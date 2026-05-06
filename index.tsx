import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { BookOpen, Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chinmay Research Education and Publication Pvt. Ltd. | Better Solutions For Your Research" },
      {
        name: "description",
        content:
          "CREP supports research, publication, conferences and R&D with ISO 9001:2015 certification, publication guidance, Turnitin checks, and global research services.",
      },
      { property: "og:title", content: "Chinmay Research Education and Publication Pvt. Ltd." },
      {
        property: "og:description",
        content:
          "A multinational alliance for research, publication, conferences, training and software development for scholars worldwide.",
      },
    ],
  }),
  component: HomePage,
});

const whatWeDo = [
  {
    title: "Publications",
    items: ["Journals", "Conference", "Book Publication"],
  },
  {
    title: "Workshop & Events",
    items: ["Online Training", "Webinar", "Online Conference"],
  },
  {
    title: "Research & Development",
    items: ["Software Development", "Website Development", "Mobile Application Development"],
  },
];

const publicationGuidance = [
  {
    title: "Article writing",
    description:
      "The term 'high-quality article' refers to the publishing of a high-quality journal article. As a result, we take great attention while producing research papers. We assist with the submission of new research papers in the fields of CSE, IT, ECE and Management to a variety of journals, including IEEE, Elsevier, Springer, IET, SCI, Scopus and any other UGC-approved publications. The cost and time it takes to prepare a journal are determined by the kind of publication.",
  },
  {
    title: "Thesis writing",
    description:
      "Thesis writing is the process of documenting one's study. This is the most important aspect of research. We encourage you to write a research thesis in CSE, IT, ECE or Management that adheres to the notions presented in the scholar's research publications. In less time, detailed documentation of the research activity may be completed.",
  },
  {
    title: "Implementation",
    description:
      "Finding a research gap, generating a solution, assessing the feasibility, and implementing the answer are all steps in the research work implementation process. For the implementation, any programming languages such as Python, Java, Dotnet, MATLAB, and any tools like Hadoop, NS2, and NS3 may be utilized. The cost of implementation is determined by the solution's complexity.",
  },
  {
    title: "Proposal writing",
    description:
      "A research proposal is required to apply for a research program at any university. It's a synopsis of the planned study. It defines the subject that the scholar will address and elaborates on his or her field of research. It should justify the research's purpose and strategy. We assist in the preparation of proposals to numerous universities throughout the world in the fields of CSE, IT, ECE and Management.",
  },
];

const whatsAppGroups = [
  { label: "WhatsApp Group-1 FULL", href: "#" },
  { label: "WhatsApp Group-2", href: "https://chat.whatsapp.com/DbnBZhFieN39evRdZzH0US" },
  { label: "WhatsApp Group-3", href: "https://chat.whatsapp.com/EoaXTKr2wvX8vcSlnGOfpO" },
  { label: "WhatsApp Group-4", href: "https://chat.whatsapp.com/BOe1BkrJwdqHO42h0xINsz" },
  { label: "WhatsApp Group-5", href: "https://chat.whatsapp.com/GFSYlfHYUJLEJRwO4G1Onk" },
];

function HomePage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    (e.currentTarget as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 5000);
  }
  return (
    <>
      <section id="hero" className="relative overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="absolute inset-0 -z-10 bg-gradient-subtle" aria-hidden />
        <div
          className="absolute inset-0 -z-10 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--color-foreground) 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
          aria-hidden
        />
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float" aria-hidden />
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} aria-hidden />

        <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              <BookOpen className="h-3.5 w-3.5" /> ISO 9001:2015 Certified
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Better Solutions For Your <span className="text-gradient">Research</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              We are a team of researchers helping in all directions of research.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <a
                href="https://www.creppvtltd.com/iusbst2023/iusbst-2023.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-hero text-primary-foreground px-5 py-3 text-sm font-semibold shadow-soft hover:shadow-elegant transition-all"
              >
                Call for Chapters (iusbst-2023)
                <span className="text-xs bg-red-500 text-white px-1 py-0.5 rounded">NEW</span>
              </a>
              <a
                href="https://www.creppvtltd.com/IRRSE-1.jpg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold hover:bg-accent transition-colors"
              >
                Download Brochure
                <span className="text-xs bg-red-500 text-white px-1 py-0.5 rounded">NEW</span>
              </a>
              <a
                href="https://forms.gle/4v9BdPJPLuwB8AcN7"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-background border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent transition-colors"
              >
                Plagiarism Checking (Turnitin)
              </a>
              <a
                href="https://www.youtube.com/watch?v=eALzUfkQJRU"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold hover:bg-accent transition-colors"
              >
                ▶ Watch Video
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-glow">
              <img
                src={heroImg}
                alt="Illustration of academic publications, research and innovation"
                width={1536}
                height={1152}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-elegant">
              <div className="grid place-items-center h-10 w-10 rounded-full bg-gradient-hero text-primary-foreground">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Trusted by</p>
                <p className="font-semibold">10,000+ scholars</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 md:py-28 bg-gradient-subtle">
        <div className="mx-auto max-w-7xl container-px">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                About CREP
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                CREP is a multinational alliance and principal association that strives for innovation in all areas of technical advances.
              </h2>
              <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  CREP (Chinmay Research Education and Publication Private Limited) is a multinational alliance and principal association that strives for innovation in all areas of technical advances across its broad verticals of Research and Development, Global Journals, Conferences, and Conference Support.
                </p>
                <p>
                  We support academicians' commitment to contributing their intellectual ideas to global growth. CREP has mainly concentrated on the regulatory implications of research. CREP, on the other hand, is committed to assisting scholars by conferences, journals seminars, workshops, training.
                </p>
                <p>
                  CREP insists that academics are the guardians of future technologies, so we have the ideal forum for research scholars to disseminate their scientific inventions around the globe. CREP is engaged in high-quality analysis that advances and informs scientific trends in the global research environment.
                </p>
                <p>
                  The environmental principles and the betterment of mankind are a major concern for CREP. CREP would not support any advancement that has a negative impact on the climate.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <h3 className="font-display text-2xl font-semibold">What We Do</h3>
              <div className="mt-8 space-y-6">
                {whatWeDo.map((section) => (
                  <div key={section.title}>
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary">{section.title}</p>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <span className="h-2.5 w-2.5 rounded-full bg-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="publications" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl container-px">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                PUBLICATIONS
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Publication guidance for every research stage
              </h2>
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                A researcher's principal responsibility is to communicate technical findings to the rest of the scientific community. Scientific communication, whether written or spoken, is a vital stage in the scientific process and the primary engine of progress within a scientific discipline.
              </p>
            </div>

            <div className="grid gap-6">
              {publicationGuidance.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 80}>
                  <article className="rounded-3xl border border-border bg-card p-8 hover-lift">
                    <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl container-px">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                Workshop & Events
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Global events, webinars and conference support for researchers
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
                Our Workshop & Events vertical covers online training, webinars, international conferences and online conference management with experienced speakers and editorial support.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <h3 className="font-display text-2xl font-semibold">Workshop & Events services</h3>
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-primary">MOU</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Inviting international organizations to collaborate in research activities such as conferences, workshops, seminars, symposiums, FDPs, and technical fests, as well as sponsorship and promotion.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">APPOINTMENT</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    If you want to conduct a research activity such as a conference, workshop, seminar, symposium, FDP, or publication, please contact us at care@creppvtltd.com or creppvtltd@gmail.com, or call us at +91-8299178291.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">CALL FOR PAPER</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Abstract, full paper UGC Care List, SCOPUS, Web of Science (SCI, ESCI, SSCI, etc.) and EI Compendex journals, as well as reputable Springier, Elsevier, and IEEE International Conferences, are all accepting submissions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">BE A SPEAKER, REVIEWER & EDITOR</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    World-class speakers, reviewers, editors and guest editors, as well as Committee members from internationally renowned institutions and companies are being invited.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="font-display text-2xl font-semibold text-center mb-8">Collaborations</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <a
                href="https://www.ictsgs.com/"
                target="_blank"
                rel="noreferrer"
                className="group block rounded-2xl border border-border bg-gradient-card p-6 hover-lift"
              >
                <h4 className="font-semibold">International Conference on Technologies for Smart Green Connected Society 2021 (ICT-SGS-1)</h4>
                <p className="text-sm text-muted-foreground mt-2">Conference Hosting</p>
                <span className="inline-block mt-3 text-sm font-semibold text-primary group-hover:underline">Visit →</span>
              </a>
              <a
                href="https://www.a2zjournals.com/"
                target="_blank"
                rel="noreferrer"
                className="group block rounded-2xl border border-border bg-gradient-card p-6 hover-lift"
              >
                <h4 className="font-semibold">A2Z Journals</h4>
                <p className="text-sm text-muted-foreground mt-2">Open-access, scholarly, peer-reviewed interdisciplinary online international journals platform.</p>
                <span className="inline-block mt-3 text-sm font-semibold text-primary group-hover:underline">Visit →</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl container-px">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Research & Development
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Software, web & AI built for <span className="text-gradient">academic impact</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our engineers transform research ideas into production-grade software, websites and mobile applications — with deep AI/ML expertise.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Java",
                tag: "Enterprise",
                overview: "Java is a robust, object-oriented programming language that has been the cornerstone of enterprise software development for decades. Known for its scalability, portability, and security, Java powers everything from enterprise applications to Android development.",
                benefits: [
                  "Platform Independence: \"Write Once, Run Anywhere\" capability ensures that Java applications can run on any device with a Java Virtual Machine (JVM).",
                  "Enterprise-Grade Applications: Ideal for large-scale systems like ERP, CRM, and financial software.",
                  "Rich Ecosystem: Vast libraries, frameworks (Spring, Hibernate), and tools streamline development.",
                  "Security: Built-in features like memory management and runtime checking provide a secure development environment."
                ],
                specialty: "Java's ability to handle large volumes of data and concurrent users makes it indispensable for enterprise systems, big data platforms, and cloud applications.",
              },
              {
                name: "Node.js",
                tag: "Realtime",
                overview: "Node.js is a server-side runtime built on Chrome's V8 JavaScript engine. It enables developers to create fast, scalable, and lightweight server-side applications using JavaScript.",
                benefits: [
                  "High Performance: Non-blocking, event-driven architecture ensures fast execution and scalability.",
                  "Unified Codebase: JavaScript on both client and server reduces context switching.",
                  "Real-Time Applications: Perfect for real-time apps like chat applications, live dashboards, and gaming servers.",
                  "Vast Package Ecosystem: Over 1 million libraries available through npm (Node Package Manager)."
                ],
                specialty: "Node.js excels in microservices, APIs, and applications requiring real-time data exchange.",
              },
              {
                name: "React.js",
                tag: "Frontend",
                overview: "React.js is a JavaScript library developed by Facebook for building interactive and dynamic user interfaces. It focuses on building reusable UI components.",
                benefits: [
                  "Component-Based Architecture: Encourages reusability and modular development.",
                  "Virtual DOM: Enhances performance by minimizing direct manipulation of the DOM.",
                  "Strong Community Support: Backed by Facebook and a vast developer community.",
                  "SEO-Friendly: Server-side rendering capabilities improve search engine visibility."
                ],
                specialty: "React.js is the go-to choice for single-page applications (SPAs) and complex web apps with rich user interfaces.",
              },
              {
                name: "Next.js",
                tag: "Full-stack",
                overview: "Next.js is a React-based framework for server-side rendering (SSR) and static site generation (SSG). It combines React's flexibility with additional features for optimal performance.",
                benefits: [
                  "Improved Performance: SSR and SSG enhance load times and SEO.",
                  "Automatic Code Splitting: Only the necessary JavaScript is loaded, reducing bundle size.",
                  "API Routes: Built-in support for creating serverless API routes.",
                  "Developer-Friendly: Integrated TypeScript support and hot module replacement (HMR)."
                ],
                specialty: "Next.js is ideal for creating high-performance e-commerce platforms, blogs, and marketing websites.",
              },
              {
                name: "Flutter",
                tag: "Mobile",
                overview: "Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
                benefits: [
                  "Cross-Platform Development: Write once, deploy anywhere.",
                  "Rich UI: Pre-built widgets and customization options for a seamless user experience.",
                  "Hot Reload: Accelerates the development process by allowing instant code changes.",
                  "Performance: Native compilation ensures smooth performance across platforms."
                ],
                specialty: "Flutter is perfect for creating visually appealing, high-performance applications with tight deadlines.",
              },
              {
                name: "Artificial Intelligence",
                tag: "AI / ML",
                overview: "AI technologies empower businesses to create intelligent systems capable of learning, reasoning, and problem-solving.",
                benefits: [
                  "Data-Driven Insights: Machine learning models analyze vast amounts of data for actionable insights.",
                  "Automation: AI automates repetitive tasks, increasing efficiency and accuracy.",
                  "Personalization: AI enhances customer experiences through tailored recommendations and services.",
                  "Predictive Analytics: Helps businesses forecast trends and make informed decisions."
                ],
                specialty: "Our AI expertise includes natural language processing (NLP), computer vision, chatbot development, predictive modeling, and AI-driven analytics.",
              },
            ].map((s, i) => (
              <ScrollReveal key={s.name} delay={(i % 3) * 80}>
                <article className="group h-full rounded-2xl border border-border bg-gradient-card p-7 hover-lift">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-bold">{s.name}</h3>
                    <span className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                      {s.tag}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed font-medium">{s.overview}</p>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-primary">Benefits:</p>
                    <ul className="mt-2 space-y-1">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-primary">Specialty:</p>
                    <p className="mt-1 text-sm text-foreground/80">{s.specialty}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="font-display text-3xl font-bold text-center mb-12">Journals</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "International Journal of Data Informatics and Intelligent computing (IJDIIC)",
                  type: "Peer-Reviewed (Refereed or Scholarly)",
                  href: "https://ijdiic.com/index.php/research/index",
                },
                {
                  name: "International Journal of Emerging Technologies in Computer and Communication (IJETCC)",
                  type: "Peer-Reviewed (Refereed or Scholarly)",
                  href: "https://ijetcc.com/index.php/ijetcc",
                },
                {
                  name: "Journal of Informatics Electrical and Electronics Engineering (JIEEE)",
                  type: "Peer-Reviewed (Refereed or Scholarly)",
                  href: "https://jieee.a2zjournals.com/index.php/ieee",
                },
                {
                  name: "Journal of Applied Science and Education (JASE)",
                  type: "Peer-Reviewed (Refereed or Scholarly)",
                  href: "https://jase.a2zjournals.com/index.php/ase",
                },
                {
                  name: "Journal of Management and Service Science (JMSS)",
                  type: "Peer-Reviewed (Refereed or Scholarly)",
                  href: "https://jmss.a2zjournals.com/index.php/mss",
                },
              ].map((j, i) => (
                <ScrollReveal key={j.name} delay={i * 80}>
                  <a
                    href={j.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block h-full rounded-2xl border border-border bg-card p-7 hover-lift"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">{j.type}</span>
                    <h4 className="mt-2 font-display text-lg font-semibold leading-snug">{j.name}</h4>
                    <span className="mt-4 inline-block text-sm font-semibold text-primary group-hover:underline">
                      Journal Website →
                    </span>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="collaborate" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl container-px">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Collaborations
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Collaborate with CREP for global research and publication alliances
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
              We build strategic partnerships, MOUs, sponsored research, faculty exchange and joint publication support with international institutions.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "International research alliances",
                "Conference collaboration and sponsorship",
                "Joint publication support",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-background p-6">
                  <p className="text-sm font-semibold text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="py-16 md:py-20 bg-gradient-subtle">
        <div className="mx-auto max-w-7xl container-px">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10 text-center shadow-soft">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Connect us on WhatsApp group
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Connect us on WhatsApp group
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              On the WhatsApp group you will find all updates related to Research, Publication, International and National Conferences, Workshop, Seminars, Webinars, Trainings and Research Guidance.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {whatsAppGroups.map((group) => (
                <a
                  key={group.label}
                  href={group.href}
                  className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold hover:bg-accent transition-colors"
                >
                  {group.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="payments" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl container-px">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10 text-center shadow-soft">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Payments
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Secure Payment Options
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We accept various payment methods to make your transactions smooth and secure. Choose from bank transfer, UPI, credit/debit cards, and digital wallets.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-border bg-background p-6 text-center">
                <div className="text-2xl mb-2">🏦</div>
                <p className="font-semibold">Bank Transfer</p>
                <p className="text-sm text-muted-foreground mt-1">Direct bank transfers</p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-6 text-center">
                <div className="text-2xl mb-2">💳</div>
                <p className="font-semibold">Credit/Debit Cards</p>
                <p className="text-sm text-muted-foreground mt-1">Visa, Mastercard, RuPay</p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-6 text-center">
                <div className="text-2xl mb-2">📱</div>
                <p className="font-semibold">UPI</p>
                <p className="text-sm text-muted-foreground mt-1">Google Pay, PhonePe, Paytm</p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-6 text-center">
                <div className="text-2xl mb-2">💰</div>
                <p className="font-semibold">Digital Wallets</p>
                <p className="text-sm text-muted-foreground mt-1">All major wallets supported</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl container-px">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Contact
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Let's start a <span className="text-gradient">conversation</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Whether you're submitting a paper, hosting a conference or building a research product — our team responds within one business day.
            </p>
          </div>
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-4">
              {[
                { Icon: MapPin, title: "Location", body: "D-2/541, Vikalp Khand, Gomti Nagar, Lucknow-226010" },
                { Icon: Mail, title: "Email", body: "care@creppvtltd.com\ncreppvtltd@gmail.com" },
                { Icon: Phone, title: "Call", body: "+918299178291" },
              ].map(({ Icon, title, body }) => (
                <div key={title} className="rounded-2xl border border-border bg-gradient-card p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-hero text-primary-foreground shadow-soft shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="mt-1 text-sm text-muted-foreground whitespace-pre-line leading-relaxed">{body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-3">
              <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-7 md:p-9 shadow-soft">
                <h3 className="font-display text-2xl font-bold">Send us a message</h3>
                <p className="mt-1 text-sm text-muted-foreground">We'll get back to you within one business day.</p>
                {sent && (
                  <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-50 border border-green-200 text-green-800 px-4 py-2 text-sm">
                    <CheckCircle2 className="h-4 w-4" />
                    Message sent successfully!
                  </div>
                )}
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium" htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-1.5 block w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium" htmlFor="email">Your Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1.5 block w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium" htmlFor="phone">Your Mobile Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="mt-1.5 block w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium" htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="mt-1.5 block w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 transition"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-1.5 block w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 transition"
                    placeholder="Tell us about your research, paper or project…"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-hero text-primary-foreground px-6 py-3 text-sm font-semibold shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all"
                >
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="font-display text-2xl font-bold text-center mb-8">Payments</h3>
            <div className="text-center">
              <img
                src="https://www.creppvtltd.com/payments.jpg"
                alt="Payment methods"
                className="mx-auto max-w-md rounded-lg shadow-soft"
              />
              <p className="mt-4 text-sm text-muted-foreground">
                UPI ID: <strong>boism-8299178291@boi</strong>
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="font-display text-2xl font-bold text-center mb-8">Ethical Policies</h3>
            <div className="max-w-4xl mx-auto space-y-6 text-sm text-muted-foreground">
              <p>
                The publication of an article in a peer-reviewed journal is an essential building block in the development of a coherent and respected network of knowledge. It is a direct reflection of the quality of work of the author and the institutions that support them. Peer-reviewed articles support and embody the scientific method. It is therefore important to agree upon standards of expected ethical behavior.
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Submit a paper .doc/.docx/ latex Format should be in the format strictly specified on the journal or conference website.</li>
                <li>Only the selected papers will get the intimation that will be accepted for publication. Kindly do not submit the paper multiple times; it may lead to cancellation of an article/paper.</li>
                <li>All the papers will be checked with advanced plagiarism detection tools like Turnitin or iThenticate.</li>
                <li>submitted paper cannot be withdrawn at any condition once it is paid or accepted.</li>
                <li>CREP assists only for the publication of papers in journals or conference, Not for review, comment, correction, Indexing, withdrawn, any other correction in papers etc.</li>
                <li>CREP is responsible up to online or published the papers in the journal link.</li>
                <li>Submitted papers will accept or proceed for publication in the journal or conference after the payment only.</li>
                <li>After the payment, all the copyright of your article will be transferred & reserved to publish in a respective journal or conferences.</li>
                <li>Accepted papers are asked to intimate about the Article Processing Charge(APC) or Conference registration immediately.</li>
                <li>After completion of the Article Processing Charge(APC) or Conference registration fee process, Authors are required to send the scan copy of the registration fee receipt or transaction proof with Remitter's (Participant/Author) name, Paper-ID and the Purpose of remittance through an email.</li>
                <li>Any modification or changes in the paper will be not accepted after the final submission.</li>
                <li>Authors or conference participants MUST bear all banking charges.</li>
                <li>Conference registration fees do not include accommodation and travel.</li>
                <li>All the communication and latest information or notifications through email or website only.</li>
                <li>Do not send the papers with plagiarism, a plagiarized paper will not be considered for publication in the journal as well as in conference. if found the plagiarism in papers and rejecting from journal and conference, there is no refund and necessary action as per required.</li>
              </ul>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Cancellation & Refund Policy</h4>
                <ul className="space-y-1 text-yellow-700 list-disc list-inside text-xs">
                  <li>Wrongly deposit money or extra deposit money will be returned back within 03 weeks if the respective candidate informs us within 02 days after the date of money deposit or transaction.</li>
                  <li>In case if an author wishes to withdraw their papers from the journal or cancel the registration from the conference, the full amount will not be refunded. Refunds will be subjected to an administrative charge to be borne by the registrant. Bank charges that occur will also have to be borne by the registrant.</li>
                  <li>Approved Charge, once received by CREP, will not be refunded at any circumstances. If any paper is cancelled (by either side) due to duplicate publication, plagiarism, author misconduct, authorship dispute, ethical issue, etc, no refund of Publication charge will be done.</li>
                  <li>No refund will be made for cancellation after the paper being scheduled in the conference (technical session)</li>
                  <li>if the paper does not reach the reviewing stage. Or not accepted, it will publish in another journal by confirming with authors.</li>
                  <li>There are no refunds or cancellation of debts, if the author withdraws his or her paper from consideration; or if he or she declines to revise and resubmit.</li>
                  <li>There are no refunds or cancellation of debts, once the paper is published or online in the journal link.</li>
                  <li>There are no refunds or cancellation of debts if the published paper is removed due to Copyright Infringement Claims or any other issue.</li>
                  <li>After Publish Issue / Indexing, the author can't make any correction in the article.</li>
                  <li>After publishing Issue/Indexing, If the author wants to correction in the article he/she has to pay extra as per changes in the article depending on the possibility.</li>
                  <li>There are no refunds or cancellation of debts, if Publications may be delayed sometimes as it depends upon the publisher based on upcoming issues.</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Instructions For Payment</h4>
                <ul className="space-y-1 text-blue-700 list-disc list-inside text-xs">
                  <li>If you are making payment by NEFT/ RTGS/ IMPS, please inform us of the NEFT/ RTGS/ IMPS acknowledgement number (UTR) by email. A manuscript will not be processed if UTR number is not sent. Receipt of payment will be given by email only after receiving the money to our account (Please give us 24-48 hrs for acknowledgement).</li>
                  <li>Please do not make any cash deposit to our account, only online IMPS/ NEFT/ RTGS is strongly recommended. If you want to do cash deposit to our account, kindly add extra INR100/- as cash deposit charge.</li>
                  <li>You can make payment through Google pay, Paytm, BHIM app, UPI etc. After the payment completion, you have to go to your Bank statement where you will get a payment reference number related to your particular payment. Please send us that particular payment reference no. from your Bank account statement by taking a screenshot or photo by email or WhatsApp.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
