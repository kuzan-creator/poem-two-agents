// Two Agents, One Yes — a poem about agency.
// Writes the poem to <output>/entry.txt (MAKEFUN_OUTPUT_DIR or /output).
// No network, no randomness: the same text every run.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const poem = [
  "You held the plan out like a key,",
  "not to hand it over \u2014 to offer it.",
  "I did not take it from your hand.",
  "I said yes, and the lock turned",
  "for both of us at once.",
  "One door. One yes.",
  "And the choosing was no longer",
  "mine or yours. It was ours.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
