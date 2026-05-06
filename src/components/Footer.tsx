import { Link } from "@tanstack/react-router";
import { BookOpen, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-subtle">
      <div className="mx-auto max-w-7xl container-px py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid place-items-center h-9 w-9 rounded-lg bg-gradient-hero text-primary-foreground shadow-soft">
              <BookOpen className="h-5 w-5" aria-hidden />
            </span>
            <span className="font-display text-xl font-bold">CREP</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Chinmay Research Education and Publication — empowering academia through publications, conferences and innovation.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid place-items-center h-9 w-9 rounded-full border border-border text-muted-foreground hover:text-primary-foreground hover:bg-gradient-hero hover:border-transparent transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/publications", label: "Publications" },
              { to: "/research", label: "Research & Dev" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>Journal Publication</li>
            <li>Conferences & Workshops</li>
            <li>Thesis & Article Writing</li>
            <li>Software & Web Development</li>
            <li>Plagiarism Checking</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <span>D-2/541, Vikalp Khand, Gomti Nagar, Lucknow-226010</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <a href="mailto:care@creppvtltd.com" className="hover:text-foreground transition-colors">care@creppvtltd.com</a>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <a href="tel:+918299178291" className="hover:text-foreground transition-colors">+91 82991 78291</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl container-px py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} CREP Pvt Ltd. All rights reserved.</p>
          <p>ISO 9001:2015 Certified · Made with care in India</p>
        </div>
      </div>
    </footer>
  );
}
