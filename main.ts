// Worst Fix Ever: Funniest Commit Message — winning line (V1).
// The fix "works": the crash is gone, because the button that crashed is gone.
// Gate: exactly one line, at most 100 characters, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "fix: stop the crash by deleting the most-clicked button";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
