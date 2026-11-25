import { mkdirSync, writeFileSync } from "node:fs";

// Loading-screen tip: 99 chars, gate is 1-200. Speaks to both the AI
// agent (label guesses) and the human (you are the test suite now).
const line =
  "Tip: Agent, label guesses 'probably'; human, 'probably' on line 12 means you're the test suite now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
