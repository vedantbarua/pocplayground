export type DesignDoc = {
  slug: string;
  number: number;
  title: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
  scale: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export const docs: DesignDoc[] = [
  {
    slug: "design-a-url-shortener",
    number: 3,
    title: "Design a URL Shortener",
    summary: "Generate compact links, redirect with low latency, and scale reads globally without sacrificing reliability.",
    category: "Web infrastructure",
    date: "August 30, 2026",
    readTime: "8 min read",
    scale: "100M links · 10B redirects/month",
    sections: [
      { heading: "Requirements", paragraphs: ["The service accepts a long URL and returns a unique short alias. Opening the alias redirects the visitor with low latency. Links should remain available for years and may optionally expire."], bullets: ["Create and resolve short links", "Sustain a read-heavy workload", "Prevent duplicate aliases", "Collect basic click analytics"] },
      { heading: "High-level design", paragraphs: ["Clients create links through an API service. A key-generation service allocates collision-free IDs, which are encoded with Base62. Redirect requests first check an edge cache, then a distributed cache, and finally the primary link store."], bullets: ["API gateway → link service → key generator", "CDN/edge → Redis → distributed database", "Events flow asynchronously to the analytics pipeline"] },
      { heading: "Data model", paragraphs: ["Store the short key as the partition key with the destination URL, creation time, owner, and optional expiry. The redirect path only needs a point lookup, making a wide-column or key-value store a natural fit."] },
      { heading: "Trade-offs", paragraphs: ["A random key is simple but requires collision checks. Preallocated numeric IDs avoid collisions but make traffic volume easier to infer. Cache invalidation matters when links can be edited, so immutable destinations are the safer default."] },
    ],
  },
  {
    slug: "design-a-distributed-rate-limiter",
    number: 2,
    title: "Design a Distributed Rate Limiter",
    summary: "Protect APIs consistently across regions while keeping enforcement fast and failure modes predictable.",
    category: "Distributed systems",
    date: "August 29, 2026",
    readTime: "7 min read",
    scale: "1M decisions/second",
    sections: [
      { heading: "Requirements", paragraphs: ["The limiter evaluates a policy for each request and returns a decision in a few milliseconds. Limits may apply per user, API key, route, or tenant."], bullets: ["Low-latency decisions", "Consistent limits across instances", "Configurable windows and quotas", "Safe behavior during dependency failures"] },
      { heading: "Algorithm", paragraphs: ["A token bucket supports bursts while enforcing a stable average rate. Each key stores its current tokens and last refill timestamp. An atomic script updates both values in one operation."] },
      { heading: "Architecture", paragraphs: ["Application servers call a local rate-limit client. The client evaluates cached policies and executes an atomic operation in a regional Redis cluster. Configuration changes arrive through a pub/sub channel."] },
      { heading: "Failure strategy", paragraphs: ["Choose fail-open for low-risk endpoints and fail-closed for expensive or security-sensitive operations. A small local emergency bucket prevents unlimited traffic when the shared store is unavailable."] },
    ],
  },
  {
    slug: "design-a-notification-system",
    number: 1,
    title: "Design a Notification System",
    summary: "Deliver email, push, and SMS notifications reliably while respecting preferences, retries, and provider limits.",
    category: "Event-driven systems",
    date: "August 28, 2026",
    readTime: "9 min read",
    scale: "500M notifications/day",
    sections: [
      { heading: "Requirements", paragraphs: ["Product services submit notification requests without depending on a specific delivery provider. Users control channel preferences and quiet hours."], bullets: ["Email, push, and SMS channels", "Templates and localization", "Retries with deduplication", "Delivery status and analytics"] },
      { heading: "Delivery pipeline", paragraphs: ["An ingestion API validates requests and writes them to a durable event log. Channel workers enrich messages with templates and preferences before sending through provider adapters."] },
      { heading: "Reliability", paragraphs: ["Every request carries an idempotency key. Workers use exponential backoff for transient failures and move exhausted messages to a dead-letter queue for investigation or replay."] },
      { heading: "Provider strategy", paragraphs: ["Adapters isolate provider-specific APIs. Health scores and cost rules support automatic failover without changing the upstream notification contract."] },
    ],
  },
];

export function getDoc(slug: string) {
  return docs.find((doc) => doc.slug === slug);
}
