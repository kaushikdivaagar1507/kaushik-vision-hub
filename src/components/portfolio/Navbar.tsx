import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#home" className="flex items-center gap-2 font-bold text-lg">
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground">
            <Code2 className="w-5 h-5" />
          </span>
          <span className="text-gradient">Kaushik.dev</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
};

export default Navbar;