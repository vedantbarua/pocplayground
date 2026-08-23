"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties, type MouseEvent } from "react";

const updates = [
  { label: "Designing", detail: "A friendlier first experience", progress: 72 },
  { label: "Building", detail: "Small experiments with big potential", progress: 84 },
  { label: "Polishing", detail: "The details that make it delightful", progress: 91 },
];

export default function Home() {
  const [activeUpdate, setActiveUpdate] = useState(0);
  const [motion, setMotion] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveUpdate((current) => (current + 1) % updates.length),
      3600,
    );
    return () => window.clearInterval(timer);
  }, []);

  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMotion({
      x: (event.clientX - rect.left) / rect.width - 0.5,
      y: (event.clientY - rect.top) / rect.height - 0.5,
    });
  };

  const sceneStyle = {
    "--pointer-x": `${motion.x * 18}px`,
    "--pointer-y": `${motion.y * 12}px`,
  } as CSSProperties;

  const update = updates[activeUpdate];

  return (
    <main className="landing-shell dynamic-home" onMouseMove={handlePointerMove} style={sceneStyle}>
      <div className="glow glow-one" /><div className="glow glow-two" />
      <nav className="home-nav" aria-label="Primary navigation">
        <Link className="brand" href="/"><span className="status-dot" aria-hidden="true" />POC Playground</Link>
        <Link className="nav-home" href="/about">About</Link>
      </nav>

      <section className="landing-content">
        <p className="eyebrow"><span className="live-ring" aria-hidden="true" />Currently in the workshop</p>
        <div className="hamster-scene interactive-scene" role="img" aria-label="An animated hamster working on a tiny laptop">
          <div className="desk-items" aria-hidden="true"><div className="steam steam-one" /><div className="steam steam-two" /><div className="mug"><span /></div></div>
          <div className="hamster" aria-hidden="true">
            <div className="ear ear-left" /><div className="ear ear-right" /><div className="body" />
            <div className="head"><div className="face-patch" /><div className="eye eye-left" /><div className="eye eye-right" /><div className="nose" /><div className="cheek cheek-left" /><div className="cheek cheek-right" /></div>
            <div className="paw paw-left" /><div className="paw paw-right" />
          </div>
          <div className="laptop" aria-hidden="true"><div className="laptop-screen"><span className="code-line line-one" /><span className="code-line line-two" /><span className="code-line line-three" /></div><div className="laptop-base" /></div>
          <div className="desk" aria-hidden="true" />
        </div>

        <h1>We are getting<span> exciting things ready.</span></h1>
        <p className="intro">A growing collection of useful experiments, playful ideas, and things worth sharing.</p>

        <section className="live-update" aria-live="polite">
          <div className="update-copy"><span>{update.label}</span><p>{update.detail}</p></div>
          <strong>{update.progress}%</strong>
          <div className="update-track"><span style={{ width: `${update.progress}%` }} /></div>
          <div className="update-dots" aria-label="Choose a build update">
            {updates.map((item, index) => <button aria-label={`Show ${item.label} update`} className={index === activeUpdate ? "active" : ""} key={item.label} onClick={() => setActiveUpdate(index)} />)}
          </div>
        </section>

        <Link className="text-link" href="/about">Discover why we&apos;re building <span aria-hidden="true">→</span></Link>
      </section>
      <footer><span className="footer-pulse" aria-hidden="true" />Built with curiosity and plenty of snacks.</footer>
    </main>
  );
}
