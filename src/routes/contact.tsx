import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact CREP — Talk to Our Research Team" },
      {
        name: "description",
        content:
          "Get in touch with CREP for publication, conferences, training or R&D. Reach us via email, phone or visit our Lucknow office.",
      },
      { property: "og:title", content: "Contact CREP" },
      {
        property: "og:description",
        content:
          "Email care@creppvtltd.com or call +91 82991 78291 — our team responds within one business day.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    (e.currentTarget as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's start a <span className="text-gradient">conversation</span></>}
        description="Whether you're submitting a paper, hosting a conference or building a research product — our team responds within one business day."
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-5 gap-10">
          <ScrollReveal className="lg:col-span-2">
            <div className="space-y-4">
              {[
                { Icon: MapPin, title: "Visit", body: "D-2/541, Vikalp Khand,\nGomti Nagar, Lucknow-226010, India" },
                { Icon: Mail, title: "Email", body: "care@creppvtltd.com\ncreppvtltd@gmail.com" },
                { Icon: Phone, title: "Call", body: "+91 82991 78291\nMon – Sat · 10:00 – 18:00 IST" },
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
          </ScrollReveal>

          <ScrollReveal delay={120} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-card p-7 md:p-9 shadow-soft"
            >
              <h2 className="font-display text-2xl font-bold">Send us a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">We'll get back to you within one business day.</p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field label="Your name" name="name" type="text" required />
                <Field label="Email address" name="email" type="email" required />
                <Field label="Mobile number" name="phone" type="tel" />
                <Field label="Subject" name="subject" type="text" required />
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
                Send message <Send className="h-4 w-4" />
              </button>

              {sent && (
                <p className="mt-4 inline-flex items-center gap-2 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-3 py-2 text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4" /> Your message has been sent. Thank you!
                </p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl container-px">
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="CREP office location map"
                src="https://www.google.com/maps?q=Vikalp+Khand,+Gomti+Nagar,+Lucknow+226010&output=embed"
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full border-0"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 block w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 transition"
      />
    </div>
  );
}
