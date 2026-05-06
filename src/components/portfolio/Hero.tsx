import { useEffect, useState } from "react";
import { ArrowRight, Mail, Github, Linkedin, Sparkles, Download, MapPin } from "lucide-react";
import profile from "@/assets/profile.jpg";

const ROLES = [
  "Full-Stack Developer",
  "AI Enthusiast",
  "Problem Solver",
  "MERN Engineer",
];

const FLOAT_BADGES = [
  { label: "React", className: "top-4 -left-6 md:-left-10", delay: "0s" },
  { label: "Node.js", className: "top-1/3 -right-6 md:-right-10", delay: "0.6s" },
  { label: "Python", className: "bottom-10 -left-8 md:-left-14", delay: "1.2s" },
  { label: "MongoDB", className: "-bottom-2 right-4", delay: "1.8s" },
];

const STATS = [
  { k: "3+", v: "Years Coding" },
  { k: "10+", v: "Projects Built" },
  { k: "5+", v: "Tech Stacks" },
];

const useTypewriter = (words: string[], speed = 90, pause = 1400) => {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    if (!del && text === word) {
      const t = setTimeout(() => setDel(true), pause);
      return () => clearTimeout(t);
    }
    if (del && text === "") {
      setDel(false);
      setI((n) => n + 1);
      return;
    }
    const t = setTimeout(() => {
      setText((cur) => (del ? cur.slice(0, -1) : word.slice(0, cur.length + 1)));
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
};

const Hero = () => {
  const typed = useTypewriter(ROLES);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 grid-bg opacity-[0.15] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      <div className="absolute -top-32 left-1/4 w-[28rem] h-[28rem] bg-primary/25 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left */}
        <div className="lg:col-span-7 space-y-7 animate-fade-in-up">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Available for opportunities
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-muted/40 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3" /> Madurai, India
            </span>
          </div>

          <div>
            <p className="text-sm font-mono text-muted-foreground mb-3">
              <span className="text-primary">$</span> whoami
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
              I'm{" "}
              <span className="relative inline-block">
                <span className="text-gradient">Kaushik D</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" preserveAspectRatio="none">
                  <path d="M2 6 Q 50 2 100 5 T 198 5" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              building the&nbsp;
              <span className="text-gradient">future</span>
              <span className="text-primary">.</span>
            </h1>
          </div>

          <div className="text-lg md:text-xl font-mono text-muted-foreground h-7">
            <span className="text-primary">{">"}</span> {typed}
            <span className="inline-block w-0.5 h-5 bg-primary ml-1 align-middle animate-pulse" />
          </div>

          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Computer Science undergraduate at Thiagarajar College of Engineering, crafting
            full-stack experiences and AI-powered systems with the MERN stack.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-all overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-muted-foreground font-medium hover:border-secondary hover:text-secondary transition-all"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <div className="flex items-center gap-3">
              <a href="https://github.com/kaushikdivaagar1507" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-10 h-10 grid place-items-center rounded-lg border border-border hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/kaushik-d-0031192b5/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 grid place-items-center rounded-lg border border-border hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex items-center gap-6">
              {STATS.map((s) => (
                <div key={s.v}>
                  <p className="text-xl font-bold text-gradient">{s.k}</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right – avatar + floating chips + code card */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            {/* Rotating ring */}
            <div className="absolute -inset-6 rounded-full opacity-60 [background:conic-gradient(from_0deg,hsl(var(--primary)),hsl(var(--secondary)),hsl(var(--primary)))] blur-2xl animate-glow-pulse" />
            <div className="absolute -inset-3 rounded-full [background:conic-gradient(from_0deg,hsl(var(--primary)),transparent_25%,hsl(var(--secondary))_50%,transparent_75%,hsl(var(--primary)))] animate-[spin_8s_linear_infinite]" />

            {/* Avatar */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-[3px] bg-background">
              <img
                src={profile}
                alt="Kaushik D portrait"
                width={768}
                height={768}
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Floating tech badges */}
            {FLOAT_BADGES.map((b) => (
              <span
                key={b.label}
                className={`absolute ${b.className} card-surface px-3 py-1.5 rounded-lg text-xs font-mono text-foreground border border-primary/20 shadow-[var(--shadow-card)] animate-float`}
                style={{ animationDelay: b.delay }}
              >
                <span className="text-primary mr-1">●</span>
                {b.label}
              </span>
            ))}

            {/* Code terminal card */}
            <div className="hidden md:block absolute -bottom-10 -left-16 w-64 card-surface rounded-xl p-3 shadow-[var(--shadow-card)] animate-float" style={{ animationDelay: "0.9s" }}>
              <div className="flex items-center gap-1.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-secondary/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
                <span className="ml-2 text-[10px] font-mono text-muted-foreground">~/kaushik.tsx</span>
              </div>
              <pre className="text-[11px] font-mono leading-relaxed">
                <span className="text-secondary">const</span>{" "}
                <span className="text-primary">dev</span> = {"{"}
                {"\n"}  name: <span className="text-primary">'Kaushik'</span>,
                {"\n"}  stack: [<span className="text-primary">'MERN'</span>,{" "}
                <span className="text-primary">'AI'</span>],
                {"\n"}  ship: <span className="text-secondary">true</span>
                {"\n"}{"}"};
              </pre>
            </div>

            {/* Sparkle badge */}
            <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary grid place-items-center shadow-[var(--shadow-glow)] animate-glow-pulse">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#about" className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
        <span className="font-mono tracking-widest">SCROLL</span>
        <span className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
      </a>
    </section>
  );
};

export default Hero;