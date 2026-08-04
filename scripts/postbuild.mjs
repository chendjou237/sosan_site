/**
 * Post-export step for the Hostinger static deploy.
 *
 *   1. copies deploy/.htaccess into out/
 *   2. strips .DS_Store files that macOS leaks through public/
 *   3. audits every local asset reference in the exported HTML *case-sensitively*
 *
 * Step 3 exists because the build machine is macOS (case-insensitive) and the
 * server is Linux (case-sensitive): `fs.existsSync` happily resolves
 * `assurance.png` against a file named `assurance.PNG`, the export emits the
 * lowercase src, and the image 404s only in production. This turns that class
 * of bug into a failed build.
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const outDir = path.join(root, "out");

if (!fs.existsSync(outDir)) {
  console.error("postbuild: out/ not found — did `next build` run?");
  process.exit(1);
}

/** Every file in out/, as paths relative to out/ (exact case). */
function walk(dir, base = "", acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) walk(path.join(dir, entry.name), rel, acc);
    else acc.push(rel);
  }
  return acc;
}

// 1. Server config.
fs.copyFileSync(path.join(root, "deploy/.htaccess"), path.join(outDir, ".htaccess"));

// 2. macOS cruft.
let removed = 0;
for (const rel of walk(outDir)) {
  if (path.basename(rel) === ".DS_Store") {
    fs.rmSync(path.join(outDir, rel));
    removed++;
  }
}

// 3. Case-sensitive reference audit.
const files = new Set(walk(outDir));
const htmlFiles = [...files].filter((f) => f.endsWith(".html"));
const refs = new Map(); // ref -> Set of pages referencing it

for (const rel of htmlFiles) {
  const html = fs.readFileSync(path.join(outDir, rel), "utf8");
  for (const [, raw] of html.matchAll(/(?:src|href)="(\/[^"]*)"/g)) {
    let url;
    try {
      url = decodeURIComponent(raw.split("?")[0].split("#")[0]);
    } catch {
      url = raw.split("?")[0].split("#")[0];
    }
    if (url === "/" || url === "") continue;
    if (!refs.has(url)) refs.set(url, new Set());
    refs.get(url).add(rel);
  }
}

const missing = [];
for (const [url, pages] of refs) {
  const target = url.replace(/^\/+/, "").replace(/\/$/, "");
  if (files.has(target)) continue;
  if (files.has(`${target}/index.html`)) continue; // route directory
  if (files.has(`${target}.html`)) continue; // route emitted flat
  missing.push({ url, pages: [...pages] });
}

console.log(
  `postbuild: .htaccess copied, ${removed} .DS_Store removed, ${refs.size} local refs checked across ${htmlFiles.length} pages`
);

if (missing.length) {
  console.error("\npostbuild: referenced files missing from out/ (case-sensitive):");
  for (const { url, pages } of missing) {
    console.error(`  ${url}\n    referenced by: ${pages.join(", ")}`);
  }
  console.error(
    "\nThese will 404 on the Linux server even if they resolve on macOS. Fix the filename case or the reference."
  );
  process.exit(1);
}
