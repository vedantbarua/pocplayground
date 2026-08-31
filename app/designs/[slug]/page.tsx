import type { Metadata } from "next";
import { Children, isValidElement, type ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllDocs, getDoc } from "@/lib/design-docs";
import MermaidDiagram from "./mermaid-diagram";

function headingId(children: ReactNode) {
  return String(children).toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
}

const markdownComponents: Components = {
  h2: ({ children }) => <h2 id={headingId(children)}>{children}</h2>,
  pre: ({ children }) => {
    const child = Children.only(children);
    if (isValidElement<{ className?: string; children?: ReactNode }>(child) && child.props.className === "language-mermaid") {
      return <MermaidDiagram chart={String(child.props.children).trim()} />;
    }
    return <pre>{children}</pre>;
  },
};

export function generateStaticParams() {
  return getAllDocs().map((doc) => ({ slug: doc.slug }));
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
        <div className="article-body">
          <aside><p>On this page</p>{doc.headings.map((heading, index) => <a href={`#${heading.id}`} key={heading.id}>{index + 1}. {heading.label}</a>)}</aside>
          <div className="article-sections markdown-content"><ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>{doc.content}</ReactMarkdown></div>
        </div>
        <footer className="article-footer"><Link href="/">← Back to archive</Link><span>Published {doc.date}</span></footer>
      </article>
    </main>
  );
}
