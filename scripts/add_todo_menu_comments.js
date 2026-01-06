const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, '..', 'src', 'data', 'menu.ts');
const raw = fs.readFileSync(file, 'utf8');
const lines = raw.split(/\r?\n/);

const out = [];
let lastUrl = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();

  if (
    trimmed.startsWith('// Local copy of original image:') ||
    trimmed.startsWith('// Original image 404')
  ) {
    const match = line.match(/https?:[^\s)]+/);
    if (match) lastUrl = match[0];
  }

  if (trimmed.startsWith('"image"')) {
    const indentMatch = line.match(/^(\s*)/);
    const indent = indentMatch ? indentMatch[1] : '';
    const prev1 = (out[out.length - 1] || '').trim();
    const prev2 = (out[out.length - 2] || '').trim();
    const alreadyHasTodo =
      prev1.startsWith('// Current temporary source:') ||
      prev2.startsWith('// Current temporary source:') ||
      prev1.startsWith('// TODO: replace with real photo from pizzeria') ||
      prev2.startsWith('// TODO: replace with real photo from pizzeria');

    if (!alreadyHasTodo) {
      out.push(`${indent}// TODO: replace with real photo from pizzeria`);
      out.push(`${indent}// Current temporary source: ${lastUrl || 'UNKNOWN'}`);
    }
  }

  out.push(line);
}

fs.writeFileSync(file, out.join('\n'), 'utf8');
