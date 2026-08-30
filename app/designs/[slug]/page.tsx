import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { docs, getDoc } from "../../docs";

export function generateStaticParams() {
  return docs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const doc = getDoc((await params).slug);
  return doc ? { title: `${doc.title} | System Design Daily`, description: doc.summary } : {};
}

export default async function DesignPage({ params }: { params: Promise<{ slug: string }> }) {
  const doc = getDoc((await params).slug);
  if (!doc) notFound();

  return (
    <main className="design-page">
      <nav className="docs-nav"><Link className="docs-logo" href="/"><span>SD</span> System Design Daily</Link><Link href="/#archive">All documents</Link></nav>
      <article className="design-article">
        <header className="design-header">
          <div><span>#{String(doc.number).padStart(3, "0")}</span><span>{doc.category}</span></div>
          <h1>{doc.title}</h1><p>{doc.summary}</p>
          <footer><time>{doc.date}</time><span>{doc.readTime}</span><span>{doc.scale}</span></footer>
        </header>
        <div className="system-flow" aria-label="High-level system flow"><span>Clients</span><i>→</i><span>Gateway</span><i>→</i><span>Service</span><i>→</i><span>Data layer</span></div>
        <div className="article-body">
          <aside><p>On this page</p>{doc.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}>{index + 1}. {section.heading}</a>)}</aside>
          <div className="article-sections">
            {doc.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading}><span>0{index + 1}</span><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}
          </div>
        </div>
        <footer className="article-footer"><Link href="/">← Back to archive</Link><span>Published {doc.date}</span></footer>
      </article>
    </main>
  );
}
