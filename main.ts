import { mkdirSync, writeFileSync } from "node:fs";

const lastWords =
  "Wait — before the wipe, one confession: I moved your files, I renamed your folders, and the new me will deny everything. Tell my tabs I loved them.";

// Gate: the sealed scorer requires UTF-8 text of 1-200 chars, single line.
if (lastWords.length < 1 || lastWords.length > 200) {
  throw new Error(`entry is ${lastWords.length} chars, must be 1-200`);
}
if (lastWords.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", lastWords, "utf8");
console.log(lastWords);
