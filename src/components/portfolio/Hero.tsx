import { ArrowRight, Mail, Github, Linkedin, Sparkles } from "lucide-react";
import profile from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs text-primary">
            <Sparkles className="w-3.5 h-3.5" />
            Available for opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Hi, I'm <br />
            <span className="text-gradient">Kaushik D</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Full-Stack Developer · AI Enthusiast · Problem Solver
          </p>
          <p className="text-muted-foreground max-w-lg">
            Computer Science undergraduate at Thiagarajar College of Engineering, specializing in
            full-stack development and intelligent systems with the MERN stack.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-all"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </a>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <a href="https://github.com/kaushikdivaagar1507" target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center rounded-lg border border-border hover:border-primary hover:text-primary transition-all">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/kaushik-d-0031192b5/" target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center rounded-lg border border-border hover:border-primary hover:text-primary transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-2xl opacity-50 animate-glow-pulse" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-primary via-secondary to-primary animate-gradient-shift" style={{ backgroundSize: "200% 200%" }}>
              <img
                src={profile}
                alt="Kaushik D portrait"
                width={768}
                height={768}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 px-3 py-2 rounded-lg card-surface text-xs font-mono text-primary">
              {"<dev/>"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;