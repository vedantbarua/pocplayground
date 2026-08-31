"use client";

import { useEffect, useId, useRef } from "react";

export default function MermaidDiagram({ chart }: { chart: string }) {
  const container = useRef<HTMLDivElement>(null);
  const id = useId().replace(/:/g, "");

  useEffect(() => {
    let cancelled = false;
    let version = 0;
    async function render() {
      const currentVersion = ++version;
      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({ startOnLoad: false, securityLevel: "strict", theme: document.documentElement.dataset.theme === "dark" ? "dark" : "neutral" });
      const { svg } = await mermaid.render(`diagram-${id}-${currentVersion}`, chart);
      if (!cancelled && currentVersion === version && container.current) container.current.innerHTML = svg;
    }
    void render();
    const observer = new MutationObserver(() => void render());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => { cancelled = true; observer.disconnect(); };
  }, [chart, id]);

  return <div className="mermaid-diagram" ref={container} aria-label="System architecture diagram" />;
}
