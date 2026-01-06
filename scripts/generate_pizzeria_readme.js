const fs = require('fs');
const path = require('path');

const menu = require('../src/data/menu.json');

const header = [
  '# Pizzeria Image Mapping',
  '',
  '| # | Menu item | Placeholder filename | Original Pexels URL | uploaded by pizzeria (yes/no) | date added |',
  '|---|---|---|---|---|---|'
];

const rows = menu.map((item, index) => {
  const placeholder = `menu-${String(index + 1).padStart(3, '0')}.jpg`;
  return `| ${index + 1} | ${item.name} | ${placeholder} | ${item.image} | no | - |`;
});

const output = header.concat(rows).join('\n');

const target = path.resolve(__dirname, '..', 'public', 'images', 'pizzeria', 'README.md');
fs.writeFileSync(target, output, 'utf8');
