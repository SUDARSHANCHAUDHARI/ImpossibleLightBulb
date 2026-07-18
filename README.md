# Impossible Light Bulb

A playful, self-contained web scene where a hidden character refuses to let the light stay on.

## Features

- Pointer, mouse, touch, and keyboard cord interaction
- Viewport-aware cord constraints and damped return physics
- Randomized character reactions with guarded animation states
- Generated switch, door, and character sounds using the Web Audio API
- Responsive SVG artwork with no external assets
- Reduced-motion support and accessible live-state announcements
- No framework, dependencies, build step, backend, analytics, storage, or network requests

## Run locally

Open `index.html` directly, or serve the directory with any static server:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Verify

The production check uses Node.js but installs no dependencies:

```sh
node scripts/verify.mjs
```

It validates the inline JavaScript, DOM references, unique IDs, security policy, interaction markers, centralized timers, responsive cord bounds, accessibility hooks, and the absence of external assets.

## Release checklist

Before publishing publicly:

1. Run `node scripts/verify.mjs`.
2. Manually test cord dragging and release on desktop and a touch device.
3. Test sound on/off, keyboard activation, and reduced-motion mode.
4. Confirm the tenth-attempt extended-light surprise and the five-attempt message.
5. Keep the repository private until the final device review is accepted.

No CI workflow is included; repository policy requires explicit approval before adding GitHub Actions.

## Privacy and security

The page collects and stores no data. A restrictive Content Security Policy blocks network connections, external media, objects, forms, and base-URL changes.
