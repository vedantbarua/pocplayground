import Link from "next/link";

const work = [
  { type: "AI product", title: "Support Copilot", description: "A focused assistant that helps support teams find answers and respond faster." },
  { type: "Web application", title: "Pulse Analytics", description: "A clear product-health dashboard built around the signals teams actually use." },
  { type: "Internal tool", title: "Launch Checklist", description: "A shared release workflow that keeps owners, approvals, and progress in one place." },
];

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="site-logo" href="/">POC Playground</Link>
        <div><a href="#work">Work</a><a href="#process">Process</a><Link href="/about">About</Link></div>
        <a className="nav-contact" href="mailto:hello@pocplayground.com">Contact</a>
      </nav>

      <section className="minimal-hero">
        <p className="overline">Product design and engineering</p>
        <h1>Turn an idea into<br />something <em>real.</em></h1>
        <p>We help teams shape, design, and build focused digital products—quickly enough to learn, carefully enough to use.</p>
        <div><a className="solid-button" href="mailto:hello@pocplayground.com">Start a conversation</a><a className="plain-link" href="#work">View selected work <span aria-hidden="true">↓</span></a></div>
      </section>

      <section className="work-section" id="work">
        <header><p className="overline">Selected work</p><h2>Recent builds</h2></header>
        <div className="work-list">
          {work.map((project, index) => (
            <article key={project.title}>
              <span>0{index + 1}</span>
              <div><p>{project.type}</p><h3>{project.title}</h3></div>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" id="process">
        <div><p className="overline">Our process</p><h2>Small steps.<br />Clear decisions.</h2></div>
        <ol>
          <li><span>01</span><div><h3>Define</h3><p>Clarify the problem, the user, and what we need to learn.</p></div></li>
          <li><span>02</span><div><h3>Design</h3><p>Turn the strongest direction into a simple, testable experience.</p></div></li>
          <li><span>03</span><div><h3>Build</h3><p>Ship a reliable product slice and put it in front of real users.</p></div></li>
        </ol>
      </section>

      <section className="contact-section">
        <p className="overline">Have a project in mind?</p>
        <h2>Let&apos;s make it useful.</h2>
        <a href="mailto:hello@pocplayground.com">hello@pocplayground.com <span aria-hidden="true">↗</span></a>
      </section>

      <footer className="site-footer"><Link className="site-logo" href="/">POC Playground</Link><p>© 2026 POC Playground</p><Link href="/about">About</Link></footer>
    </main>
  );
}
