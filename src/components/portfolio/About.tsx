import { GraduationCap, Brain, Users, Zap, Code2, Sparkles, Target, Rocket } from "lucide-react";
import SectionHeader from "./SectionHeader";

const traits = [
  { icon: Brain, label: "Analytical Thinker", desc: "Breaking down complex problems" },
  { icon: Zap, label: "Fast Learner", desc: "Quick to adapt to new tech" },
  { icon: Users, label: "Team Player", desc: "Collaborative by nature" },
  { icon: Target, label: "Goal Oriented", desc: "Focused on outcomes" },
];

const stats = [
  { value: "8.5", label: "CGPA", suffix: "/10" },
  { value: "10+", label: "Projects" },
  { value: "5+", label: "Tech Stack" },
  { value: "2+", label: "Years Coding" },
];

const About = () => (
  <section id="about" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
    <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
    <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

    <div className="container mx-auto px-6 relative">
      <SectionHeader kicker="01 — About" title="Crafting digital experiences" subtitle="Passionate about building products that blend clean code with real-world impact." />

      <div className="grid lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
        {/* Education card - large */}
        <div className="lg:col-span-7 card-surface rounded-3xl p-8 hover:border-primary/40 transition-all group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 grid place-items-center text-primary border border-primary/30">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Education</h3>
                <p className="text-xs text-muted-foreground font-mono">Currently pursuing</p>
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-primary/40 space-y-2 mb-6">
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary animate-pulse" />
              <p className="text-xs font-mono text-primary">2022 — 2026</p>
              <p className="font-semibold text-lg leading-tight">B.Tech, Computer Science<br/>and Business Systems</p>
              <p className="text-muted-foreground text-sm">Thiagarajar College of Engineering</p>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Building a strong foundation in <span className="text-foreground font-medium">DSA</span>, <span className="text-foreground font-medium">OOP</span>, <span className="text-foreground font-medium">DBMS</span> and modern software engineering — paired with hands-on full-stack & AI project experience.
            </p>

            <div className="grid grid-cols-4 gap-3 pt-6 border-t border-border">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-bold text-gradient">{s.value}<span className="text-xs text-muted-foreground">{s.suffix || ""}</span></p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="card-surface rounded-3xl p-7 hover:border-secondary/40 transition-all relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-xs text-secondary mb-4">
                <Sparkles className="w-3 h-3" /> What I do
              </div>
              <h3 className="text-lg font-semibold mb-3">Full-Stack + AI</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                MERN stack developer focused on REST APIs, scalable backends, and AI-powered features using LLMs and vector search.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {traits.map((t) => (
              <div key={t.label} className="card-surface rounded-2xl p-4 hover:border-primary/40 hover:-translate-y-1 transition-all group">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 grid place-items-center text-primary mb-3 group-hover:scale-110 transition-transform">
                  <t.icon className="w-4 h-4" />
                </div>
                <p className="text-sm font-semibold">{t.label}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
