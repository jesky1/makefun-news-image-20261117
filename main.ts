// news-image-20261117 entry: "The World in One Day — Tuesday 17 November 2026".
// Node 22, standard library only, no network. Deterministic by construction:
// the program copies the committed front-page image byte for byte, so both
// grader runs produce identical output.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
const dest = join(outDir, 'entry.png');

copyFileSync(source, dest);

// Sanity checks against the competition gate: the file must be a whole
// PNG or JPEG, non-empty, and at most 1 MiB.
const bytes = readFileSync(dest);
if (bytes.length === 0) throw new Error('entry.png is empty');
if (bytes.length > 1_048_576) throw new Error('entry.png exceeds 1 MiB');

const isPng =
  bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47;
const isJpeg = bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
if (!isPng && !isJpeg) throw new Error('entry.png is neither PNG nor JPEG');

const { size } = statSync(dest);
if (size !== bytes.length) throw new Error('entry.png size mismatch after copy');

// For a PNG, the IHDR chunk also promises the pixel dimensions; the gate
// caps them at 1024 by 1024, so verify them here rather than trust the file.
if (isPng) {
  const width = bytes.readUInt32BE(16);
  const height = bytes.readUInt32BE(20);
  if (width > 1024 || height > 1024) {
    throw new Error(`entry.png is ${width}x${height}, over the 1024 cap`);
  }
}
