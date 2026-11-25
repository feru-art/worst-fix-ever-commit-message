// Worst Fix Ever: Funniest Commit Message
// Entry: "fix: stop the crash by deleting the most-clicked button"
// Writes the single commit-message line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: satu baris, 58 karakter, tanpa trailing newline.
import { writeFileSync, mkdirSync } from "node:fs";

const COMMIT = "fix: stop the crash by deleting the most-clicked button";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, COMMIT, "utf8");
console.log(COMMIT);
