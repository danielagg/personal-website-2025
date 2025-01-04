---
title: "Microsoft Entra B2C with Expo Auth"
description: "At my company, we're building a mobile app with Expo, where the authentication is handled by Microsoft Entra B2C. Since it was a bit of a challenge to get this working, I thought I'd share my solution in this post."
pubDate: "Jan 4 2025"
isDraft: true
---

First of all, Expo's documentation is generally pretty amazing, however, the examples for <a href="https://docs.expo.dev/guides/authentication/#azure" target="_blank">Expo Auth and Azure</a> were only detailing the "normal" Entra authentication flow, not the B2C flow, which is what we needed, since we're building a client-facing app, not something internal.

```
  import { exchangeCodeAsync, useAuthRequest, Prompt } from 'expo-auth-session';

  const [request, , promptAsync] = useAuthRequest(
    {
      clientId: 'your-client-id-here',
      scopes: ['openid', 'offline_access'],
      redirectUri: 'my-app://auth',
      prompt: Prompt.Login,
      extraParams: {
        access_type: 'offline',
      },
    },
    getDiscoveryDocument()
  );
```

Make sure the redirectUri is configured correctly in the App Registration - any change of it can take 1-2 hours to come into effect.
