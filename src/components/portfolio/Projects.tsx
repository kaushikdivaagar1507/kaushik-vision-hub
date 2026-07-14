import { Github, ExternalLink, Sparkles, Users, Database, Brain, Lock } from "lucide-react";
import SectionHeader from "./SectionHeader";

const stack = ["React", "Node.js", "Python", "MongoDB", "AstraDB", "NLP", "LLM", "JWT"];
const features = [
  { icon: Brain, text: "Skill-based recommendation engine using NLP embeddings" },
  { icon: Sparkles, text: "AI assistant with vector search + LLM for interview guidance" },
  { icon: Lock, text: "JWT authentication and role-based access control" },
  { icon: Database, text: "Hybrid storage with MongoDB + AstraDB vector DB" },
  { icon: Users, text: "Event / job / internship sharing for the alumni network" },
];
const metrics = [
  { value: "30-40", label: "Active Users" },
  { value: "8+", label: "AI Features" },
  { value: "100%", label: "Full-Stack" },
];

const Projects = () => (
  <section id="projects" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
    <div className="container mx-auto px-6 relative">
      <SectionHeader kicker="04 — Projects" title="Featured work" subtitle="A flagship project showcasing full-stack and AI engineering depth." />

      <div className="relative max-w-6xl mx-auto">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl blur-xl opacity-30 animate-gradient-shift" style={{ backgroundSize: "200% 200%" }} />

        <div className="relative card-surface rounded-3xl overflow-hidden">
          {/* Top status bar */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-muted/30">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs font-mono text-muted-foreground ml-2">smart-alumni-connect.app</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> LIVE
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 p-8 md:p-10">
            {/* Left: details */}
            <div className="lg:col-span-3 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs text-primary">
                <Sparkles className="w-3.5 h-3.5" /> Featured Project
              </div>
              <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                Smart Alumni <span className="text-gradient">Connect</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                AI-powered alumni–student platform serving 30–40 active users for mentorship, communication, and career guidance — built end-to-end with React, Node.js, and Python.
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 py-4 border-y border-border">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-2xl font-bold text-gradient">{m.value}</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{m.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border font-mono hover:border-primary/40 hover:text-primary transition-all">
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a href="https://github.com/kaushikdivaagar1507" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all">
                  <Github className="w-4 h-4" /> Source
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-semibold hover:scale-105 hover:shadow-[var(--shadow-glow)] transition-all">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </div>

            {/* Right: features */}
            <div className="lg:col-span-2 space-y-3">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">Key Features</p>
              {features.map((f, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-xl hover:bg-muted/40 border border-transparent hover:border-border transition-all group">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 grid place-items-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <f.icon className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-snug pt-1.5">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* More projects teaser */}
        <div className="mt-8 text-center">
          <a href="https://github.com/kaushikdivaagar1507" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-4 h-4" /> View more projects on GitHub
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        {/* ================= Other Projects ================= */}

<div className="mt-16">
  <h3 className="text-3xl font-bold text-center mb-10">
    Other <span className="text-gradient">Projects</span>
  </h3>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="card-surface rounded-2xl p-6 border border-border hover:border-primary transition-all">
      <h4 className="text-2xl font-bold mb-3">
        MERN ToDo App
      </h4>

      <p className="text-muted-foreground mb-5">
        A full-stack task management application built using React,
        Node.js, Express.js, and MongoDB. Users can add, edit,
        delete, and manage tasks through a clean responsive interface.
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {["React", "Node.js", "Express", "MongoDB", "REST API"].map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs rounded bg-muted border border-border"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3">

        <a
          href="https://github.com/kaushikdivaagar1507/todo-app"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>

        <a
          href="https://todo-app-six-gamma-86.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground"
        >
          <ExternalLink className="w-4 h-4" />
          Live Demo
        </a>

      </div>
    </div>

  </div>
</div>
      </div>
    </div>
  </section>
);

export default Projects;