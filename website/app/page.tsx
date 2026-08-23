'use client';

import { useEffect, useRef, useState } from 'react';

const palette = [
  { name: 'hot pink', hex: '#FE62B5' },
  { name: 'violet', hex: '#8974FF' },
  { name: 'electric blue', hex: '#62A8FE' },
  { name: 'cool cyan', hex: '#62FECA' },
  { name: 'signal green', hex: '#1AFF90' },
  { name: 'warm yellow', hex: '#FEE462' },
  { name: 'alert red', hex: '#FE6262' },
];

const languages = [
  {
    id: 'typescript',
    shortLabel: 'TS',
    label: 'TypeScript',
    file: 'glow.ts',
    symbol: '✣',
    line: 10,
    rows: [
      <><span className="pink">import</span> <span className="cyan">&#123; createGlow &#125;</span> <span className="pink">from</span> <span className="green">&apos;nicely-neon&apos;</span>;</>,
      <></>,
      <><span className="blue">const</span> <span className="plain">theme</span> <span className="blue">=</span> <span className="yellow">createGlow</span><span className="plain">(&#123;</span></>,
      <>&nbsp;&nbsp;<span className="magenta">contrast</span><span className="plain">:</span> <span className="cyan">&apos;balanced&apos;</span><span className="plain">,</span></>,
      <>&nbsp;&nbsp;<span className="magenta">mood</span><span className="plain">:</span> <span className="green">&apos;electric&apos;</span><span className="plain">,</span></>,
      <>&nbsp;&nbsp;<span className="magenta">distractions</span><span className="plain">:</span> <span className="red">false</span><span className="plain">,</span></>,
      <><span className="plain">&#125;);</span></>,
      <></>,
      <><span className="muted">{'// Your editor, after dark.'}</span></>,
      <><span className="yellow">activate</span><span className="plain">(theme);</span></>,
    ],
  },
  {
    id: 'python',
    shortLabel: 'PY',
    label: 'Python',
    file: 'palette.py',
    symbol: '◆',
    line: 11,
    rows: [
      <><span className="blue">from</span> <span className="plain">dataclasses</span> <span className="blue">import</span> <span className="plain">dataclass</span></>,
      <></>,
      <><span className="blue">@</span><span className="yellow">dataclass</span><span className="plain">(</span><span className="magenta">frozen</span><span className="blue">=</span><span className="red">True</span><span className="plain">)</span></>,
      <><span className="blue">class</span> <span className="cyan">Palette</span><span className="plain">:</span></>,
      <>&nbsp;&nbsp;<span className="plain">name</span><span className="blue">:</span> <span className="cyan">str</span></>,
      <>&nbsp;&nbsp;<span className="plain">colors</span><span className="blue">:</span> <span className="cyan">tuple</span><span className="plain">[</span><span className="cyan">str</span><span className="plain">, ...]</span></>,
      <></>,
      <><span className="plain">nicely_neon</span> <span className="blue">=</span> <span className="yellow">Palette</span><span className="plain">(</span></>,
      <>&nbsp;&nbsp;<span className="magenta">name</span><span className="blue">=</span><span className="green">&quot;Nicely Neon&quot;</span><span className="plain">,</span></>,
      <>&nbsp;&nbsp;<span className="magenta">colors</span><span className="blue">=</span><span className="plain">(</span><span className="green">&quot;#FE62B5&quot;</span><span className="plain">, </span><span className="green">&quot;#62A8FE&quot;</span><span className="plain">, </span><span className="green">&quot;#1AFF90&quot;</span><span className="plain">),</span></>,
      <><span className="plain">)</span></>,
    ],
  },
  {
    id: 'css',
    shortLabel: 'CSS',
    label: 'CSS',
    file: 'neon.css',
    symbol: '#',
    line: 10,
    rows: [
      <><span className="yellow">:root</span> <span className="plain">&#123;</span></>,
      <>&nbsp;&nbsp;<span className="cyan">--neon-pink</span><span className="plain">:</span> <span className="pink">#fe62b5</span><span className="plain">;</span></>,
      <>&nbsp;&nbsp;<span className="cyan">--neon-cyan</span><span className="plain">:</span> <span className="green">#62feca</span><span className="plain">;</span></>,
      <>&nbsp;&nbsp;<span className="cyan">--selection</span><span className="plain">:</span> <span className="blue">#4d4d58</span><span className="plain">;</span></>,
      <><span className="plain">&#125;</span></>,
      <></>,
      <><span className="yellow">::selection</span> <span className="plain">&#123;</span></>,
      <>&nbsp;&nbsp;<span className="magenta">color</span><span className="plain">:</span> <span className="cyan">#fff</span><span className="plain">;</span></>,
      <>&nbsp;&nbsp;<span className="magenta">background</span><span className="plain">:</span> <span className="yellow">var</span><span className="plain">(</span><span className="cyan">--selection</span><span className="plain">);</span></>,
      <><span className="plain">&#125;</span></>,
    ],
  },
] as const;

const websiteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'Nicely Neon',
      url: 'https://nicely-neon-theme.netlify.app/',
      description: 'A free colorful dark theme for Visual Studio Code.',
      publisher: { '@type': 'Organization', name: 'eight84', url: 'https://eight84.com' },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Nicely Neon Theme',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Visual Studio Code',
      description: 'A free colorful dark VS Code theme with vivid syntax highlighting, balanced contrast, and complete workbench coverage.',
      image: 'https://nicely-neon-theme.netlify.app/og.png',
      url: 'https://nicely-neon-theme.netlify.app/',
      downloadUrl: 'https://marketplace.visualstudio.com/items?itemName=eight84.nicely-neon-theme',
      codeRepository: 'https://github.com/eight84/nicely-neon-theme',
      author: { '@type': 'Organization', name: 'eight84', url: 'https://eight84.com' },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Nicely Neon?',
          acceptedAnswer: { '@type': 'Answer', text: 'Nicely Neon is a free, colorful dark theme for Visual Studio Code. It uses a focused neon palette for readable syntax, editor chrome, and workbench states.' },
        },
        {
          '@type': 'Question',
          name: 'How do I install the Nicely Neon VS Code theme?',
          acceptedAnswer: { '@type': 'Answer', text: 'Install Nicely Neon from the Visual Studio Marketplace, then choose Nicely Neon from Preferences: Color Theme in Visual Studio Code.' },
        },
        {
          '@type': 'Question',
          name: 'Which languages does Nicely Neon support?',
          acceptedAnswer: { '@type': 'Answer', text: 'Nicely Neon includes TextMate and semantic token coverage for modern JavaScript, TypeScript, Python, CSS, Markdown, and more.' },
        },
      ],
    },
  ],
};

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [activeLanguageId, setActiveLanguageId] = useState<(typeof languages)[number]['id']>('typescript');
  const [isSwitching, setIsSwitching] = useState(false);
  const transitionTimers = useRef<number[]>([]);
  const activeLanguage = languages.find((language) => language.id === activeLanguageId) ?? languages[0];

  useEffect(() => () => {
    transitionTimers.current.forEach((timer) => window.clearTimeout(timer));
  }, []);

  function switchLanguage(languageId: (typeof languages)[number]['id']) {
    if (languageId === activeLanguageId || isSwitching) return;

    transitionTimers.current.forEach((timer) => window.clearTimeout(timer));
    setIsSwitching(true);
    transitionTimers.current = [
      window.setTimeout(() => {
        setActiveLanguageId(languageId);
        transitionTimers.current = [window.setTimeout(() => setIsSwitching(false), 70)];
      }, 150),
    ];
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Nicely Neon home">
          <img src="/nicely-neon-mascot.png" alt="" />
          <span>NICELY NEON</span>
        </a>
        <div className="navLinks">
          <a href="#palette">Palette</a>
          <a href="#install">Install</a>
          <a href="https://github.com/eight84/nicely-neon-theme" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span /> A dark theme for bright ideas</p>
          <h1>Code in<br /><span>full color.</span></h1>
          <p className="lede">A vivid, carefully balanced VS Code theme that makes syntax unmistakable—and long sessions feel a little more alive. For anyone looking for a cool colorful dark theme, this is color with a job.</p>
          <div className="heroActions">
            <a className="primaryButton" href="https://marketplace.visualstudio.com/items?itemName=eight84.nicely-neon-theme" target="_blank" rel="noreferrer">Install for VS Code <ArrowIcon /></a>
            <a className="textLink" href="#palette">Explore the palette <span aria-hidden="true">↓</span></a>
          </div>
          <div className="quickInstall" aria-label="Quick install command">
            <span className="terminalPrompt">›</span>
            <code>ext install eight84.nicely-neon-theme</code>
          </div>
        </div>

        <div className="editorWrap" aria-label="Nicely Neon code theme preview">
          <div className="neonOrb orbOne" />
          <div className="neonOrb orbTwo" />
          <div className="editorWindow">
            <div className="editorTopbar">
              <div className="windowDots"><i /><i /><i /></div>
              <div className="editorTab"><span className={`fileMark ${activeLanguage.id}`}>{activeLanguage.symbol}</span> {activeLanguage.file} <b>×</b></div>
              <div className="languageSwitcher" role="group" aria-label="Preview language">
                {languages.map((language) => (
                  <button
                    type="button"
                    key={language.id}
                    className={language.id === activeLanguage.id ? 'active' : ''}
                    aria-label={`Show ${language.label} example`}
                    aria-pressed={language.id === activeLanguage.id}
                    onClick={() => switchLanguage(language.id)}
                  >
                    {language.shortLabel}
                  </button>
                ))}
              </div>
            </div>
            <div className="editorBody">
              <aside className="editorRail" aria-hidden="true">
                <span>◇</span><span>⌕</span><span>⑂</span><span>▷</span><span>▦</span>
              </aside>
              <div className={`codePane codeTransition${isSwitching ? ' isSwitching' : ''}`} aria-live="polite" aria-busy={isSwitching}>
                <div className="breadcrumb">src <span>›</span> {activeLanguage.file} <span>›</span> <b>{activeLanguage.label.toLowerCase()}</b></div>
                <ol key={activeLanguage.id}>
                  {activeLanguage.rows.map((row, index) => <li key={index}><code>{row}</code></li>)}
                </ol>
              </div>
            </div>
            <div className="editorStatus"><span>main*</span><span>Ln {activeLanguage.line}, Col 17&nbsp;&nbsp; UTF-8&nbsp;&nbsp; {activeLanguage.label}</span></div>
          </div>
          <p className="previewCaption"><span>01</span> Nicely Neon / {activeLanguage.label}</p>
        </div>
      </section>

      <section className="spectrum" aria-label="Theme color spectrum">
        {palette.map((color) => <span key={color.hex} style={{ background: color.hex }} />)}
      </section>

      <section className="paletteSection shell" id="palette">
        <div className="sectionHeading">
          <p className="kicker">02 / THE SYSTEM</p>
          <h2>Every color<br />has a job.</h2>
          <p>Seven electric hues create instant visual hierarchy. Vivid enough to scan at speed, balanced enough to disappear when you&apos;re in flow.</p>
        </div>
        <div className="swatches">
          {palette.map((color, index) => (
            <article className="swatch" key={color.hex}>
              <div className="swatchColor" style={{ background: color.hex }}><span>{String(index + 1).padStart(2, '0')}</span></div>
              <div><h3>{color.name}</h3><code>{color.hex}</code></div>
            </article>
          ))}
        </div>
      </section>

      <section className="features shell">
        <article>
          <span className="featureIcon cyanText">Aa</span>
          <p className="kicker">READABILITY</p>
          <h3>Bright, not blinding.</h3>
          <p>Purposeful contrast keeps the important parts loud and everything else comfortably quiet.</p>
        </article>
        <article>
          <span className="featureIcon yellowText">&#123; &#125;</span>
          <p className="kicker">SYNTAX</p>
          <h3>Language fluent.</h3>
          <p>Thoughtful TextMate and semantic token coverage across modern JavaScript, TypeScript, Python, CSS, Markdown, and more.</p>
        </article>
        <article>
          <span className="featureIcon pinkText">⌁</span>
          <p className="kicker">WORKBENCH</p>
          <h3>One complete system.</h3>
          <p>Editor chrome, terminal, Git states, notifications, and focus cues all speak the same visual language.</p>
        </article>
      </section>

      <section className="faqSection shell" aria-labelledby="faq-heading">
        <div className="faqIntro">
          <p className="kicker">03 / QUICK ANSWERS</p>
          <h2 id="faq-heading">A colorful theme,<br />without the noise.</h2>
          <p>Nicely Neon is designed for people who want a cool VS Code theme that still stays readable during real work.</p>
        </div>
        <div className="faqList">
          <details open>
            <summary>What is Nicely Neon?</summary>
            <p>A free, colorful dark Visual Studio Code theme with vivid syntax highlighting, balanced contrast, and full workbench coverage.</p>
          </details>
          <details>
            <summary>How do I install it?</summary>
            <p>Install it from the Visual Studio Marketplace, then select <strong>Nicely Neon</strong> from Preferences: Color Theme.</p>
          </details>
          <details>
            <summary>Which languages does it support?</summary>
            <p>Nicely Neon includes TextMate and semantic token coverage for JavaScript, TypeScript, Python, CSS, Markdown, and more.</p>
          </details>
        </div>
      </section>

      <section className="installSection" id="install">
        <div className="installGlow" />
        <div className="installInner shell">
          <p className="kicker">04 / LIGHTS ON</p>
          <h2>Your editor called.<br /><span>It wants a glow-up.</span></h2>
          <p>Install Nicely Neon from the VS Code Marketplace, then choose it from Preferences: Color Theme.</p>
          <a className="primaryButton large" href="https://marketplace.visualstudio.com/items?itemName=eight84.nicely-neon-theme" target="_blank" rel="noreferrer">Get Nicely Neon <ArrowIcon /></a>
          <small>Free · Open source · Made by eight84</small>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top"><img src="/nicely-neon-mascot.png" alt="" /><span>NICELY NEON</span></a>
        <p>Color outside the lines.</p>
        <div><a href="https://marketplace.visualstudio.com/items?itemName=eight84.nicely-neon-theme" target="_blank" rel="noreferrer">Marketplace</a><a href="https://github.com/eight84/nicely-neon-theme" target="_blank" rel="noreferrer">GitHub</a><a href="https://eight84.com" target="_blank" rel="noreferrer">eight84.com</a></div>
      </footer>
    </main>
  );
}
