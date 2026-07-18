# Impossible Light Bulb

A playful interactive web experience featuring a light bulb that refuses to stay on. Pull the hanging cord, watch the room light up, and wait for the hidden bear behind the door to object.

The complete production app is contained in one dependency-free HTML file. It uses inline HTML, CSS, SVG, and vanilla JavaScript with no framework, build system, backend, or external assets.

## Gameplay

1. Grab the hanging cord and pull it downward.
2. The bulb clicks, flickers, and fills the room with warm light.
3. After a short randomized delay, the door opens and the hidden bear reacts.
4. The bear reaches for the cord, switches the light off, and hides again.
5. Pull the cord again to discover a different reaction.

The app counts successful attempts. After five attempts it displays a message, and from the tenth attempt onward it includes a one-time surprise where the light remains on for three seconds before the bear intervenes.

## Features

- Mouse, touch, stylus, and keyboard cord interaction
- Viewport-aware cord limits that keep the string clear of the screen and door
- Damped spring physics for natural cord swing and return
- Guarded state machine that prevents overlapping interactions
- Randomized bear reactions, expressions, timing, misses, and double takes
- Animated door, character, arm, hand, bulb, glow, and room lighting
- Generated switch clicks, door creaks, and character sounds using the Web Audio API
- Sound toggle with silent fallback when audio is unavailable or disabled
- Responsive SVG composition for desktop, landscape, portrait, and mobile screens
- Reduced-motion behavior for users who prefer less animation
- Accessible labels, keyboard activation, focus styling, and live announcements
- Restrictive Content Security Policy and no network requests, analytics, or storage

## Controls

| Input | Action |
| --- | --- |
| Mouse, touch, or stylus | Grab the cord knob, drag downward, and release after the prompt changes to “Let go” |
| Keyboard | Focus the cord knob and press <kbd>Enter</kbd> or <kbd>Space</kbd> |
| Sound button | Toggle generated sound effects on or off |

Interactions are temporarily locked while the bear animation is running so each sequence finishes cleanly.

## Technology

- **Structure:** Semantic HTML5
- **Styling and motion:** CSS3
- **Illustration:** Inline SVG
- **Interaction and state:** Vanilla JavaScript
- **Audio:** Web Audio API
- **Dependencies:** None

Everything required by the app lives in [`index.html`](./index.html).

## Getting started

### Requirements

- A modern desktop or mobile browser with SVG and Pointer Events support
- Node.js only if you want to run the production verification script

### Clone the repository

```sh
git clone https://github.com/SUDARSHANCHAUDHARI/ImpossibleLightBulb.git
cd ImpossibleLightBulb
```

The repository is private during final production review, so cloning requires access to the `SUDARSHANCHAUDHARI` GitHub account or an authorized collaborator account.

### Run the app

Open `index.html` directly in a browser. No installation or build step is required.

You can also serve the directory with any static web server:

```sh
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Verification

Run the zero-dependency production check:

```sh
node scripts/verify.mjs
```

The verifier checks:

- Inline JavaScript syntax
- Unique and valid DOM/SVG references
- Responsive viewBox coverage
- Cord visibility and door-collision boundaries
- Bear, door, and foreground layer ordering
- Prompt size and placement above the door
- Pointer and accessibility hooks
- Centralized timers and required gameplay markers
- Content Security Policy and absence of external assets
- Production file size budget

Visual changes should also be reviewed manually on desktop and mobile, including a short landscape viewport.

## Project structure

```text
ImpossibleLightBulb/
├── index.html          # Complete production app: HTML, CSS, SVG, and JavaScript
├── scripts/
│   └── verify.mjs      # Zero-dependency production verification
├── README.md           # Project documentation
├── AGENTS.md           # Repository-specific development guidance
├── .editorconfig       # Editor formatting defaults
└── .gitignore          # Excluded local, secret, build, and generated files
```

## Accessibility and motion

- The cord is exposed as a keyboard-focusable button with an accessible label.
- State changes are announced through ARIA live regions.
- Visible focus styling is provided for the cord and sound button.
- `prefers-reduced-motion` shortens or removes nonessential movement and flicker.
- The experience remains fully functional when sound is disabled.

## Privacy and security

Impossible Light Bulb collects, transmits, and stores no user data. It contains no cookies, analytics, forms, backend calls, or third-party resources.

The inline Content Security Policy blocks network connections, external media, plugins, forms, and base-URL changes.

## Release review

Before publishing a release:

1. Run `node scripts/verify.mjs`.
2. Test dragging and releasing the cord with mouse and touch input.
3. Test <kbd>Enter</kbd> and <kbd>Space</kbd> keyboard activation.
4. Test sound enabled and disabled.
5. Test reduced-motion mode.
6. Review desktop, portrait mobile, and short landscape layouts.
7. Confirm the five-attempt message and tenth-attempt extended-light surprise.

No GitHub Actions workflow is included. Repository policy requires explicit approval before adding or expanding CI workflows.

## Author

**Sudarshan Chaudhari**

Solo indie developer at **SudarshanTechLabs**

Bangkok, Thailand

- GitHub: [@SUDARSHANCHAUDHARI](https://github.com/SUDARSHANCHAUDHARI)
- Email: [sunny.sudarshan@gmail.com](mailto:sunny.sudarshan@gmail.com)

## License

No open-source license is currently included in this repository. Contact the author before reusing or redistributing the project.
