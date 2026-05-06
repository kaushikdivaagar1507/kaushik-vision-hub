const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Kaushik D. Crafted with React & Tailwind.</p>
      <p className="font-mono text-xs">Designed & built with ♥</p>
    </div>
  </footer>
);

export default Footer;