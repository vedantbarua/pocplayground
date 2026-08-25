"use client";

import Link from "next/link";
import { useState } from "react";

const projects = [
  { category: "AI", title: "Support Copilot", description: "An AI workspace that turns customer conversations into clear, actionable answers.", metric: "42% faster replies", color: "violet" },
  { category: "Web", title: "Pulse Analytics", description: "A focused dashboard for monitoring product health without drowning in charts.", metric: "12 live signals", color: "lime" },
  { category: "Tools", title: "Launch Checklist", description: "A collaborative release workflow that keeps teams aligned from QA to rollout.", metric: "Zero missed steps", color: "orange" },
];

const filters = ["All", "AI", "Web", "Tools"];

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h12M11 5l5 5-5 5" /></svg>;
}

export default function Home() {
  const [filter, setFilter] = useState("All");
  const visibleProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <main className="studio-page">
      <nav className="studio-nav" aria-label="Primary navigation">
        <Link className="studio-logo" href="/"><span>POC</span> Playground</Link>
        <div className="studio-nav-links">
          <a href="#work">Work</a><a href="#services">Services</a><Link href="/about">About</Link>
        </div>
        <a className="nav-cta" href="mailto:hello@pocplayground.com">Start a project <ArrowIcon /></a>
      </nav>

      <section className="studio-hero">
        <div className="hero-copy">
          <p className="availability"><span />Available for select projects · Q4 2026</p>
          <h1>We turn early ideas into <em>real products.</em></h1>
          <p className="hero-lede">POC Playground is a product studio for teams that need to learn fast. We design and build focused prototypes that are ready for real users.</p>
          <div className="hero-actions">
            <a className="primary-action" href="#work">Explore our work <ArrowIcon /></a>
            <Link className="secondary-action" href="/about">How we work</Link>
          </div>
          <div className="trust-row"><span>Strategy</span><i /> <span>Product design</span><i /> <span>Engineering</span></div>
        </div>

        <div className="hero-console" aria-label="Current project activity">
          <div className="console-bar"><div><i /><i /><i /></div><span>build-status.tsx</span><b>Live</b></div>
          <div className="console-body">
            <p className="console-comment">{"// Current sprint"}</p>
            <div className="console-line"><span>01</span><p><b>const</b> idea = <mark>&quot;your next product&quot;</mark>;</p></div>
            <div className="console-line"><span>02</span><p><b>const</b> status = <mark>&quot;building&quot;</mark>;</p></div>
            <div className="console-line"><span>03</span><p><b>const</b> launch = <strong>true</strong>;</p></div>
            <div className="build-card">
              <div className="build-card-top"><span><i />Prototype environment</span><b>Healthy</b></div>
              <div className="build-progress"><span /></div>
              <div className="build-stats"><span><b>18</b> components</span><span><b>96</b> performance</span><span><b>7d</b> to test</span></div>
            </div>
          </div>
          <div className="floating-badge badge-top">✓ User flow approved</div>
          <div className="floating-badge badge-bottom"><span>↗</span> Build deployed</div>
        </div>
      </section>

      <section className="studio-work" id="work">
        <div className="section-heading">
          <div><p className="studio-kicker">Selected work</p><h2>Small builds.<br />Serious outcomes.</h2></div>
          <p>Purposeful experiments designed to answer the questions that matter before you invest in the full build.</p>
        </div>
        <div className="project-filters" aria-label="Filter projects">
          {filters.map((item) => <button className={filter === item ? "active" : ""} key={item} onClick={() => setFilter(item)}>{item}</button>)}
        </div>
        <div className="project-grid">
          {visibleProjects.map((project) => (
            <article className={`project-card ${project.color}`} key={project.title}>
              <div className="project-visual">
                <span className="project-category">{project.category}</span>
                <div className="mini-window"><div className="mini-sidebar"><i /><i /><i /></div><div className="mini-content"><span /><span /><div><i /><i /><i /></div></div></div>
                <span className="metric-pill">{project.metric}</span>
              </div>
              <div className="project-info"><div><h3>{project.title}</h3><p>{project.description}</p></div><button aria-label={`View ${project.title}`}><ArrowIcon /></button></div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-section" id="services">
        <div><p className="studio-kicker">What we do</p><h2>From fuzzy question<br />to working answer.</h2></div>
        <div className="service-list">
          <article><span>01</span><div><h3>Shape the idea</h3><p>Clarify the user, the problem, and the smallest useful thing worth testing.</p></div></article>
          <article><span>02</span><div><h3>Design the experience</h3><p>Turn assumptions into an intuitive interface people can understand and use.</p></div></article>
          <article><span>03</span><div><h3>Build the prototype</h3><p>Ship a reliable, measurable product slice using modern web and AI technology.</p></div></article>
        </div>
      </section>

      <section className="studio-cta">
        <p className="studio-kicker">Have an idea?</p><h2>Let&apos;s make it<br /><em>tangible.</em></h2>
        <a href="mailto:hello@pocplayground.com">Tell us what you&apos;re thinking <ArrowIcon /></a>
      </section>

      <footer className="studio-footer"><Link className="studio-logo" href="/"><span>POC</span> Playground</Link><p>© 2026 POC Playground. Built to learn.</p><div><Link href="/about">About</Link><a href="mailto:hello@pocplayground.com">Contact</a></div></footer>
    </main>
  );
}
