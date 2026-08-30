import Link from "next/link";
import { docs } from "./docs";

export default function Home() {
  const [latest, ...archive] = docs;

  return (
    <main className="docs-site">
      <nav className="docs-nav" aria-label="Primary navigation">
        <Link className="docs-logo" href="/"><span>SD</span> System Design Daily</Link>
        <div><a href="#archive">Archive</a><Link href="/about">About</Link></div>
      </nav>

      <header className="docs-hero">
        <p className="docs-eyebrow">One system. Every day.</p>
        <h1>Practical system<br />design, <em>documented.</em></h1>
        <p>Clear breakdowns of real-world systems—the requirements, architecture, data model, bottlenecks, and trade-offs that matter.</p>
      </header>

      <section className="latest-doc" aria-labelledby="latest-heading">
        <div className="latest-meta"><span>Latest · #{String(latest.number).padStart(3, "0")}</span><time>{latest.date}</time></div>
        <Link href={`/designs/${latest.slug}`}>
          <div><p>{latest.category}</p><h2 id="latest-heading">{latest.title}</h2><p>{latest.summary}</p></div>
          <div className="architecture-preview" aria-hidden="true"><span>Client</span><i>→</i><span>API</span><i>→</i><span>Cache</span><i>→</i><span>Store</span></div>
          <footer><span>{latest.readTime}</span><strong>Read document <i aria-hidden="true">↗</i></strong></footer>
        </Link>
      </section>

      <section className="doc-archive" id="archive">
        <header><div><p className="docs-eyebrow">Archive</p><h2>All documents</h2></div><span>{docs.length} notes published</span></header>
        <div className="archive-list">
          {archive.map((doc) => (
            <Link href={`/designs/${doc.slug}`} key={doc.slug}>
              <span className="doc-number">{String(doc.number).padStart(3, "0")}</span>
              <div><p>{doc.category}</p><h3>{doc.title}</h3></div>
              <p>{doc.summary}</p><time>{doc.date}</time><span className="archive-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="newsletter-note"><p className="docs-eyebrow">The premise</p><h2>Learn one architecture<br />at a time.</h2><p>New design documents are published daily. No filler—just constraints, decisions, diagrams, and honest trade-offs.</p></section>
      <footer className="docs-footer"><Link className="docs-logo" href="/"><span>SD</span> System Design Daily</Link><p>© 2026 · A daily learning project</p><Link href="/about">About</Link></footer>
    </main>
  );
}
