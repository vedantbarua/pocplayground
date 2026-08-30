import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About | System Design Daily", description: "Why System Design Daily exists." };

export default function AboutPage() {
  return (
    <main className="about-docs">
      <nav className="docs-nav"><Link className="docs-logo" href="/"><span>SD</span> System Design Daily</Link><Link href="/">Home</Link></nav>
      <article>
        <p className="docs-eyebrow">About this project</p>
        <h1>System design gets easier when you practice it <em>consistently.</em></h1>
        <div className="about-copy"><h2>One document every day.</h2><div><p>System Design Daily is a public learning project. Each note takes one real-world system and works through its requirements, architecture, data model, scaling limits, and trade-offs.</p><p>The goal is not to present one perfect answer. It is to build the habit of asking better questions and making technical decisions explicit.</p></div></div>
        <Link className="about-archive-link" href="/#archive">Browse the archive <span aria-hidden="true">→</span></Link>
      </article>
    </main>
  );
}
