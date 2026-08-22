import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | POC Playground",
  description: "Learn why POC Playground exists and what we are building.",
};

const principles = [
  {
    number: "01",
    title: "Build to learn",
    description: "Ideas become clearer when they leave the notebook and turn into something you can use.",
  },
  {
    number: "02",
    title: "Keep it small",
    description: "Focused experiments move quickly, reveal the important questions, and make room for iteration.",
  },
  {
    number: "03",
    title: "Share the result",
    description: "Every prototype should leave behind a useful lesson, a reusable pattern, or a spark for the next idea.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-shell">
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      <nav className="about-nav" aria-label="Primary navigation">
        <Link className="brand" href="/"><span className="status-dot" aria-hidden="true" />POC Playground</Link>
        <Link className="nav-home" href="/">Home</Link>
      </nav>

      <article className="about-content">
        <header className="about-hero">
          <p className="section-label">About the playground</p>
          <h1>A home for curious ideas and <em>tiny experiments.</em></h1>
          <p>POC Playground is a space for exploring technology by making real things—quickly, thoughtfully, and without taking the fun out of the process.</p>
        </header>

        <section className="about-story" aria-labelledby="story-title">
          <h2 id="story-title">Why it exists</h2>
          <div>
            <p>The best way to understand a new tool, pattern, or possibility is to put it to work. This playground turns questions into small, deployable proofs of concept.</p>
            <p>Some experiments will grow. Others will simply teach us something useful. Both outcomes count as progress.</p>
          </div>
        </section>

        <section className="principles" aria-labelledby="principles-title">
          <p className="section-label" id="principles-title">How we work</p>
          <div className="principle-grid">
            {principles.map((principle) => (
              <article className="principle-card" key={principle.number}>
                <span>{principle.number}</span>
                <h2>{principle.title}</h2>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-cta">
          <div><p className="section-label">What&apos;s next</p><h2>The hamster is still working.</h2></div>
          <Link className="button-link" href="/">See what&apos;s cooking <span aria-hidden="true">→</span></Link>
        </section>
      </article>
    </main>
  );
}
