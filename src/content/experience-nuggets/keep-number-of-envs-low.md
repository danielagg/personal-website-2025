---
title: "Keep the number of environments to a minimum"
type: "technical"
---

Ties to the previous point. Do not test in staging/UAT, production is always going to be oh-so-different and bite you. Test on prod with feature flags & lose the other environments. While the idea to test on staging is sensible, it rarely works for stuff that are complex enough to require thorough testing. You can enable a feature flag in prod to a power-user or two, test like that - it's going to be more reliable.
