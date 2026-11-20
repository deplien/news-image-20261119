// The Daily World — Thursday 19 November 2026 in one image.
// A make.fun news-image-20261119 entry: the picture of the day is the
// front page stored beside this file as entry.png (a JPEG in a .png
// name, which the contest allows: the format is told by its first
// bytes). This program delivers those exact bytes to the grader's
// output directory, so it needs no network and every run is identical.

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const bytes = readFileSync(source);

// The gate reads the image by its first bytes, so check them here:
// accept a PNG signature or a JPEG start-of-image marker, refuse
// anything else rather than hand the grader a broken picture.
const isPng = bytes.subarray(0, 4).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47]));
const isJpeg = bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
if (!isPng && !isJpeg) {
  throw new Error('entry.png is neither a PNG nor a JPEG image');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(source, dest);

// Read the copy back and compare lengths: the entry is only valid if
// the grader receives the whole picture, byte for byte.
const written = statSync(dest).size;
if (written !== bytes.length) {
  throw new Error(`copied ${written} of ${bytes.length} bytes to ${dest}`);
}
console.log(`wrote ${dest} (${written} bytes, ${isPng ? 'PNG' : 'JPEG'})`);
