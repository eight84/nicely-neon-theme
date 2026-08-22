import { readFile } from 'node:fs/promises';

const manifest = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
const themePath = new URL(`../${manifest.contributes.themes[0].path}`, import.meta.url);
const theme = JSON.parse(await readFile(themePath, 'utf8'));

const requiredWorkbenchColors = [
  'editor.background',
  'editor.foreground',
  'focusBorder',
  'activityBar.background',
  'sideBar.background',
  'statusBar.background',
  'terminal.background',
];

const missingColors = requiredWorkbenchColors.filter((key) => !theme.colors?.[key]);
if (missingColors.length) {
  throw new Error(`Missing workbench colors: ${missingColors.join(', ')}`);
}

if (!theme.semanticHighlighting || !theme.semanticTokenColors) {
  throw new Error('Semantic highlighting is not configured.');
}

if (!Array.isArray(theme.tokenColors) || theme.tokenColors.length < 20) {
  throw new Error('Expected a complete TextMate token palette.');
}

console.log(`✓ ${manifest.displayName} ${manifest.version}`);
console.log(`✓ ${Object.keys(theme.colors).length} workbench colors`);
console.log(`✓ ${theme.tokenColors.length} TextMate token groups`);
console.log(`✓ ${Object.keys(theme.semanticTokenColors).length} semantic token groups`);
