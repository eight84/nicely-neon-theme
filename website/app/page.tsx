const palette = [
  { name: 'hot pink', hex: '#FE62B5' },
  { name: 'violet', hex: '#8974FF' },
  { name: 'electric blue', hex: '#62A8FE' },
  { name: 'cool cyan', hex: '#62FECA' },
  { name: 'signal green', hex: '#1AFF90' },
  { name: 'warm yellow', hex: '#FEE462' },
  { name: 'alert red', hex: '#FE6262' },
];

const codeRows = [
  <><span className="pink">import</span> <span className="cyan">&#123; createGlow &#125;</span> <span className="pink">from</span> <span className="green">&apos;nicely-neon&apos;</span>;</>,
  <></>,
  <><span className="blue">const</span> <span className="plain">theme</span> <span className="blue">=</span> <span className="yellow">createGlow</span><span className="plain">(&#123;</span></>,
  <>&nbsp;&nbsp;<span className="magenta">contrast</span><span className="plain">:</span> <span className="cyan">&apos;balanced&apos;</span><span className="plain">,</span></>,
  <>&nbsp;&nbsp;<span className="magenta">mood</span><span className="plain">:</span> <span className="green">&apos;electric&apos;</span><span className="plain">,</span></>,
  <>&nbsp;&nbsp;<span className="magenta">distractions</span><span className="plain">:</span> <span className="red">false</span><span className="plain">,</span></>,
  <><span className="plain">&#125;);</span></>,
  <></>,
  <><span className="muted">// Your editor, after dark.</span></>,
  <><span className="yellow">activate</span><span className="plain">(theme);</span></>,
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
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
          <p className="lede">A vivid, carefully balanced VS Code theme that makes syntax unmistakable—and long sessions feel a little more alive.</p>
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
              <div className="editorTab"><span className="reactMark">✣</span> glow.ts <b>×</b></div>
              <span className="topbarFade" />
            </div>
            <div className="editorBody">
              <aside className="editorRail" aria-hidden="true">
                <span>◇</span><span>⌕</span><span>⑂</span><span>▷</span><span>▦</span>
              </aside>
              <div className="codePane">
                <div className="breadcrumb">src <span>›</span> glow.ts <span>›</span> <b>theme</b></div>
                <ol>
                  {codeRows.map((row, index) => <li key={index}><code>{row}</code></li>)}
                </ol>
              </div>
            </div>
            <div className="editorStatus"><span>main*</span><span>Ln 10, Col 17&nbsp;&nbsp; UTF-8&nbsp;&nbsp; TypeScript</span></div>
          </div>
          <p className="previewCaption"><span>01</span> Nicely Neon / TypeScript</p>
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

      <section className="installSection" id="install">
        <div className="installGlow" />
        <div className="installInner shell">
          <p className="kicker">03 / LIGHTS ON</p>
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
