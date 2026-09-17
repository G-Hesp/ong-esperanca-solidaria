import { build } from 'esbuild';
import { minify } from 'html-minifier-terser';
import { readdir, readFile, writeFile, mkdir, rm, cp, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const out = path.join(root, 'dist');
await rm(out, { recursive: true, force: true });
await mkdir(path.join(out, 'html'), { recursive: true });
const entries = [];
for (const dir of ['css', 'js']) {
  for (const name of await readdir(path.join(root, dir))) {
    if (name.endsWith(`.${dir}`)) entries.push(`${dir}/${name}`);
  }
}
await build({
  absWorkingDir: root, entryPoints: entries,
  outdir: out, outbase: root,
  bundle: true, minify: true,
  platform: 'browser', target: ['es2020'],
  format: 'iife', sourcemap: false,
  legalComments: 'eof', logLevel: 'info'
});
const htmlOptions = {
  collapseWhitespace: true, conservativeCollapse: true,
  removeComments: true, minifyCSS: true, minifyJS: true,
  removeOptionalTags: false, removeAttributeQuotes: false
};
const files = [...entries];
for (const name of await readdir(path.join(root, 'html'))) {
  if (!name.endsWith('.html')) continue;
  const rel = `html/${name}`;
  const source = await readFile(path.join(root, rel), 'utf8');
  await writeFile(path.join(out, rel), await minify(source, htmlOptions));
  files.push(rel);
}
await cp(path.join(root, 'imagens'), path.join(out, 'imagens'), { recursive: true });
await writeFile(path.join(out, 'index.html'), await minify(`<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url=html/index.html"><title>Esperança Solidária</title></head><body><a href="html/index.html">Acessar ONG Esperança Solidária</a></body></html>`, htmlOptions));
const report = [];
for (const file of files) {
  const before = (await stat(path.join(root, file))).size;
  const after = (await stat(path.join(out, file))).size;
  report.push({ file, originalBytes: before, productionBytes: after });
}
const original = report.reduce((a,f)=>a+f.originalBytes,0);
const production = report.reduce((a,f)=>a+f.productionBytes,0);
await writeFile(path.join(root,'relatorio-build.json'), JSON.stringify({ files: report, originalBytes: original, productionBytes: production, reductionPercent: Number(((1-production/original)*100).toFixed(2)) },null,2));
console.log(`Código: ${original} → ${production} bytes (${((1-production/original)*100).toFixed(2)}% menor). Imagens copiadas sem recompressão.`);
