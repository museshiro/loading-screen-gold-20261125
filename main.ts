import { writeFileSync, mkdirSync } from "node:fs";

const line =
  "Tip: while this loads, your agent rewrote the function twice and apologized for neither.";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line + "\n", "utf8");
} catch {
  // No /output here (local run); the repo copy below is the fallback.
}
writeFileSync("entry.txt", line + "\n", "utf8");
