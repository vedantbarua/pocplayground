export default function Home() {
  return (
    <main className="landing-shell">
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      <section className="landing-content">
        <p className="eyebrow"><span className="status-dot" aria-hidden="true" />POC Playground</p>
        <div className="hamster-scene" role="img" aria-label="An animated hamster working on a tiny laptop">
          <div className="desk-items" aria-hidden="true">
            <div className="steam steam-one" /><div className="steam steam-two" />
            <div className="mug"><span /></div>
          </div>
          <div className="hamster" aria-hidden="true">
            <div className="ear ear-left" /><div className="ear ear-right" />
            <div className="body" />
            <div className="head">
              <div className="face-patch" />
              <div className="eye eye-left" /><div className="eye eye-right" />
              <div className="nose" />
              <div className="cheek cheek-left" /><div className="cheek cheek-right" />
            </div>
            <div className="paw paw-left" /><div className="paw paw-right" />
          </div>
          <div className="laptop" aria-hidden="true">
            <div className="laptop-screen">
              <span className="code-line line-one" /><span className="code-line line-two" /><span className="code-line line-three" />
            </div>
            <div className="laptop-base" />
          </div>
          <div className="desk" aria-hidden="true" />
        </div>
        <h1>We are getting<span> exciting things ready.</span></h1>
        <p className="intro">Our tiny team is busy building, polishing, and testing. Check back soon—something delightful is on its way.</p>
        <div className="progress" aria-label="Work in progress"><span /></div>
        <p className="progress-label">Work in progress</p>
      </section>
      <footer>Built with curiosity and plenty of snacks.</footer>
    </main>
  );
}
