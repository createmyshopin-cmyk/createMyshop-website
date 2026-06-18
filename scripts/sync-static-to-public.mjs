import fs from "node:fs";
import path from "node:path";

const staticSrc = path.join(".next", "static");
const staticDest = path.join("public", "_next", "static");

if (!fs.existsSync(staticSrc)) {
  console.error("sync-static-to-public: .next/static not found. Run `npm run build` first.");
  process.exit(1);
}

fs.rmSync(staticDest, { recursive: true, force: true });
fs.mkdirSync(path.dirname(staticDest), { recursive: true });
fs.cpSync(staticSrc, staticDest, { recursive: true });

const chunkCount = fs.readdirSync(path.join(staticDest, "chunks")).length;
console.log(`sync-static-to-public: copied .next/static -> public/_next/static (${chunkCount} chunks)`);
