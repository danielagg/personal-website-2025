---
title: "Feature flags > git branches (Deploy != Release)"
---

Trunk-based development with feature flags is the way to iterate quickly. Do not write a feature-flag-provider yourself, use a SaaS to be able to soft-release features to users in production. Keep your feature branches down to a minimum. Deploy often to prod, and release via toggling feature flags.
