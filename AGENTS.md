# Impossible Light Bulb

## Project shape

- The production app is the self-contained `index.html` file.
- Keep HTML, CSS, SVG artwork, and JavaScript inline.
- Do not introduce frameworks, package dependencies, build tools, backends, or external assets without explicit approval.
- Preserve pointer, touch, mouse, keyboard, sound-toggle, and reduced-motion behavior.

## Verification

Run the zero-dependency production check after every change:

```sh
node scripts/verify.mjs
```

For visual changes, also perform manual desktop and mobile review. Do not create screenshots, recordings, browser videos, or traces.

## Repository policy

- Keep the GitHub repository private until Sudarshan explicitly approves making it public.
- Do not add or expand GitHub Actions workflows without explicit approval.
- Never commit environment files, secrets, signing material, local captures, or generated memory directories.
- Stage files by explicit path rather than using `git add .`.
