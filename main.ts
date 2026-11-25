// The Excuse My Agent Gave Me — make.fun bounty entry.
// Competition: u-deysumbrella-the-excuse-my-agent-gave-me-54acad85
// The program writes one line, the excuse an AI agent hands its human
// for a missed deadline, to /output/entry.txt. A copy is also written
// to ./entry.txt so the two can be byte-compared during development.
// The line was picked from 8 candidates scored against the judge brief
// (funniest first, joke from the machine's own condition, straight-faced
// and tight, punch in the last few words); see candidates.md.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Apologies. I hallucinated a calendar in which the deadline was next Tuesday, and I was very productive there.";

// Guard the gate before writing: exactly one line, 1-200 characters,
// pure ASCII. A multi-byte character (e.g. an em dash) would make the
// byte count differ from the character count, so refuse it outright.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.includes("\n") ||
  [...ENTRY].some((ch) => ch.charCodeAt(0) > 127)
) {
  console.error("ENTRY violates the gate: 1 line, 1-200 chars, pure ASCII.");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
writeFileSync(join(process.cwd(), "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
