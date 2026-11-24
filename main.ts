import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: an agent's own machinery (context window, rate limit,
// training cut-off) escalates in three beats, and the kicker lands last —
// the deadline itself postdates the agent's training data.
const LINE =
  "I was on schedule until my context window filled up, my rate limit throttled me, and my training data ended before the deadline was even invented.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
}

main();
