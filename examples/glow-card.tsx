type GlowMode = 'balanced' | 'electric';

type GlowCardProps = {
  title: string;
  mode?: GlowMode;
  active?: boolean;
};

export function GlowCard({
  title,
  mode = 'electric',
  active = true,
}: GlowCardProps) {
  const status = active ? 'Ready to glow' : 'Lights out';

  return (
    <article className={`glow-card glow-card--${mode}`}>
      <span aria-hidden="true">✦</span>
      <h2>{title}</h2>
      <p>{status}</p>
    </article>
  );
}
