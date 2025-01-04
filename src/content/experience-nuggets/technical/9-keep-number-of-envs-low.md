---
title: "Keep the number of environments to a minimum"
---

Ties to the previous point. Be cautious about testing in staging/UAT, production is always going to be oh-so-different and bite you. Test on prod with feature flags (eg. soft release features to power users) & lose unnecessary environments. While the idea of testing on staging is sensible, it rarely works for stuff that is complex enough to require thorough testing.
