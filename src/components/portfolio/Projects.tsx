import { Github, ExternalLink, Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader";

const stack = ["React", "Node.js", "Python", "MongoDB", "AstraDB", "NLP", "LLM", "JWT"];
const features = [
  "Skill-based recommendation engine using NLP embeddings (All-MiniLM-L6-v2)",
  "AI assistant with vector search + LLM for interview guidance",
  "JWT authentication and role-based access control",
  "Hybrid storage with MongoDB + AstraDB (vector DB)",
  "Event / job / internship sharing for the alumni network",
  "Insight extraction from interview PDFs with AI",
];

const Projects = () => (
  <section id="projects" className="py-24 relative">
    <div className="container mx-auto px-6">
      <SectionHeader kicker="04 — Projects" title="Featured work" subtitle="A flagship project showcasing full-stack and AI engineering." />

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl blur opacity-30 animate-gradient-shift" style={{ backgroundSize: "200% 200%" }} />
        <div className="relative card-surface rounded-3xl p-8 md:p-10">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs text-primary">
                <Sparkles className="w-3.5 h-3.5" /> Featured Project
              </div>
              <h3 className="text-2xl md:text-4xl font-bold">Smart Alumni Connect</h3>
              <p className="text-muted-foreground">
                AI-powered alumni–student platform serving 30–40 active users for mentorship,
                communication, and career guidance — built end-to-end with React, Node.js, and Python.
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border font-mono">{s}</span>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                <a href="https://github.com/kaushikdivaagar1507" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm hover:border-primary hover:text-primary transition-all">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-semibold hover:scale-105 transition-transform">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </div>
            <ul className="md:col-span-2 space-y-2 text-sm text-muted-foreground">
              {features.map((f) => (
                <li key={f} className="flex gap-2 leading-relaxed">
                  <span className="text-primary mt-0.5">◆</span>{f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;