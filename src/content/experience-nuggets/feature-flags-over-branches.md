---
title: "Feature flags > git branches (Deploy != Release)"
type: "technical"
---

Trunk based development with feature flags is the way to iterate quickly. Do not write a feature-flag-provider yourself, use a SaaS to be able to soft-release features to users in production. Keep your feature brances down to a minimum. Deploy often to prod, release via toggling feature flags.
