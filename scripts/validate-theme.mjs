import { readFile } from 'node:fs/promises';

const manifest = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
const themePath = new URL(`../${manifest.contributes.themes[0].path}`, import.meta.url);
const theme = JSON.parse(await readFile(themePath, 'utf8'));
const jetBrainsScheme = await readFile(new URL('../themes/Nicely-Neon.icls', import.meta.url), 'utf8');
const publicJetBrainsScheme = await readFile(new URL('../website/public/Nicely-Neon.icls', import.meta.url), 'utf8');

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

const requiredJetBrainsOptions = [
  'TEXT',
  'DEFAULT_KEYWORD',
  'DEFAULT_STRING',
  'DEFAULT_FUNCTION_CALL',
  'PY.KEYWORD',
  'PY.FUNCTION_CALL',
  'PY.DECORATOR',
  'CONSOLE_BACKGROUND_KEY',
  'SELECTION_BACKGROUND',
];

if (!jetBrainsScheme.includes('<scheme name="Nicely Neon"') || !jetBrainsScheme.trimEnd().endsWith('</scheme>')) {
  throw new Error('The JetBrains color scheme is not structured correctly.');
}

const missingJetBrainsOptions = requiredJetBrainsOptions.filter(
  (name) => !jetBrainsScheme.includes(`name="${name}"`),
);

if (missingJetBrainsOptions.length) {
  throw new Error(`Missing JetBrains color options: ${missingJetBrainsOptions.join(', ')}`);
}

if (publicJetBrainsScheme !== jetBrainsScheme) {
  throw new Error('The website PyCharm download is out of sync with the source color scheme.');
}

console.log(`✓ ${manifest.displayName} ${manifest.version}`);
console.log(`✓ ${Object.keys(theme.colors).length} workbench colors`);
console.log(`✓ ${theme.tokenColors.length} TextMate token groups`);
console.log(`✓ ${Object.keys(theme.semanticTokenColors).length} semantic token groups`);
console.log(`✓ ${requiredJetBrainsOptions.length} required JetBrains color options`);
console.log('✓ PyCharm website download matches the source scheme');
