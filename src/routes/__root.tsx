import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-subtle px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 font-display text-2xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-hero px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CREP — Research, Publication & Innovation" },
      {
        name: "description",
        content:
          "CREP (Chinmay Research Education and Publication) supports academia with peer-reviewed journals, international conferences, research guidance and software development.",
      },
      { name: "author", content: "CREP Pvt Ltd" },
      { name: "theme-color", content: "#1e3a8a" },
      { property: "og:title", content: "CREP — Research, Publication & Innovation" },
      {
        property: "og:description",
        content:
          "Empowering academia through publications, conferences, training and research-driven software development.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-3 focus:py-2 focus:rounded-md focus:bg-primary focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
