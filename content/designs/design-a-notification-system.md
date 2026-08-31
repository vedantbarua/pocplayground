---
number: 1
title: Design a Notification System
summary: Deliver email, push, and SMS notifications reliably while respecting preferences, retries, and provider limits.
category: Event-driven systems
date: "August 28, 2026"
readTime: 9 min read
scale: 500M notifications/day
---

## Requirements

Product services submit notification requests without depending on a specific delivery provider. Users control channel preferences and quiet hours.

- Email, push, and SMS channels
- Templates and localization
- Retries with deduplication
- Delivery status and analytics

## Delivery pipeline

An ingestion API validates requests and writes them to a durable event log. Channel workers enrich messages with templates and preferences before sending through provider adapters.

```mermaid
flowchart LR
  Products --> API[Notification API]
  API --> Log[(Event Log)]
  Log --> Router[Channel Router]
  Router --> Email[Email Worker]
  Router --> Push[Push Worker]
  Router --> SMS[SMS Worker]
  Email & Push & SMS --> Providers[Provider Adapters]
```

## Reliability

Every request carries an idempotency key. Workers use exponential backoff for transient failures and move exhausted messages to a dead-letter queue for investigation or replay.

## Provider strategy

Adapters isolate provider-specific APIs. Health scores and cost rules support automatic failover without changing the upstream notification contract.
