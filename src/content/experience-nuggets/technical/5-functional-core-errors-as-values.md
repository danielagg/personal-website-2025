---
title: "Functional core, errors as values"
---

It's perfectly valid to combine imperative and functional paradigms. Have the core domain functional, even if its a state machine and not a set of pure functions. Combine this with explicit error handling through using the error-as-value pattern (Result/Option types).
