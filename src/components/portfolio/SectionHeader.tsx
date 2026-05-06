const SectionHeader = ({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) => (
  <div className="text-center max-w-2xl mx-auto mb-14">
    <p className="text-xs uppercase tracking-[0.3em] text-primary font-mono mb-3">{kicker}</p>
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
    {subtitle && <p className="text-muted-foreground mt-4">{subtitle}</p>}
  </div>
);

export default SectionHeader;