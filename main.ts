// Fortune Cookie Wisdom for Developers
// program/v1 entry: writes one original fortune-cookie line to /output/entry.txt.
// Deterministic, no network, no input: the same line on every run.
// The file holds exactly the line — no trailing newline — so the
// gate sees 73 characters of UTF-8 text, inside the 1-120 limit
// (verified: entry.txt is 73 chars, no trailing newline).

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The bug that only appears on Fridays has already read your weekend plans.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(LINE);
