import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
const styles = [...html.matchAll(/<style>([\s\S]*?)<\/style>/g)];
assert(scripts.length === 1, `Expected one inline script, found ${scripts.length}`);
assert(styles.length === 1, `Expected one inline style block, found ${styles.length}`);

const javascript = scripts[0][1];
new Function(javascript);

const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
assert(ids.length === new Set(ids).size, 'Duplicate DOM/SVG IDs found');

const referencedIds = [...javascript.matchAll(/getElementById\('([^']+)'\)/g)].map(match => match[1]);
const missingIds = referencedIds.filter(id => !ids.includes(id));
assert(missingIds.length === 0, `Missing referenced IDs: ${missingIds.join(', ')}`);

const svgDoorOffset = Number(html.match(/id="doorScene" transform="translate\((-?\d+) 0\)"/)?.[1]);
const javascriptDoorOffset = Number(javascript.match(/const DOOR_OFFSET_X = (-?\d+)/)?.[1]);
assert(Number.isFinite(svgDoorOffset), 'SVG door offset is missing');
assert(svgDoorOffset === javascriptDoorOffset, 'SVG and JavaScript door offsets do not match');

assert(!/https?:\/\//i.test(html), 'External URL found');
assert(!/<(?:script|img|link|audio|video|source)\b[^>]+(?:src|href)=/i.test(html), 'External asset element found');
assert(!/\b(?:innerHTML|outerHTML|document\.write|eval)\b/.test(javascript), 'Unsafe DOM/code execution API found');
assert(!/console\./.test(javascript), 'Console call found in production JavaScript');
assert((javascript.match(/setTimeout/g) || []).length === 2, 'Timers must remain centralized in wait() and schedule()');

const requiredMarkers = [
  'Content-Security-Policy',
  'prefers-reduced-motion: reduce',
  'window.AudioContext || window.webkitAudioContext',
  "addEventListener('pointerdown'",
  "addEventListener('pointermove'",
  "addEventListener('pointerup'",
  "addEventListener('pointercancel'",
  'setPointerCapture',
  'viewportCordBounds',
  'refreshCordBounds',
  'cord.x < viewportCordBounds.minX',
  'cord.vx = clamp',
  'target.x - DOOR_OFFSET_X',
  'armOutline',
  'attempts >= 5',
  'attempts >= 10',
  'await wait(3000, token)',
  'aria-live="assertive"',
  'aria-label="Pull the light cord"'
];

for (const marker of requiredMarkers) {
  assert(html.includes(marker), `Missing production marker: ${marker}`);
}

assert(Buffer.byteLength(html) < 100_000, 'Self-contained page exceeds the 100 KB size budget');

console.log('Impossible Light Bulb production verification passed.');
console.log(`Checked ${ids.length} unique IDs and ${referencedIds.length} JavaScript DOM references.`);
console.log(`Self-contained page size: ${Buffer.byteLength(html)} bytes.`);
