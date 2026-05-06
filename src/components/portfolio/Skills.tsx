import { Code, Cpu, Layout, Server, Database, Wrench, Network, Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useState } from "react";

const groups = [
  { icon: Code, title: "Languages", items: ["Java", "C", "C++", "Python"], color: "from-cyan-500/20 to-blue-500/20" },
  { icon: Cpu, title: "Core CS", items: ["DSA", "OOP", "DBMS"], color: "from-purple-500/20 to-pink-500/20" },
  { icon: Layout, title: "Frontend", items: ["React.js", "Tailwind CSS"], color: "from-blue-500/20 to-cyan-500/20" },
  { icon: Server, title: "Backend", items: ["Node.js", "FastAPI", "Flask"], color: "from-green-500/20 to-emerald-500/20" },
  { icon: Database, title: "Databases", items: ["MySQL", "MongoDB", "AstraDB"], color: "from-orange-500/20 to-red-500/20" },
  { icon: Wrench, title: "Tools", items: ["GitHub", "Postman", "Figma", "Vercel", "Render", "VS Code"], color: "from-violet-500/20 to-purple-500/20" },
  { icon: Network, title: "Concepts", items: ["REST APIs", "JWT Auth", "SDLC", "Agile"], color: "from-pink-500/20 to-rose-500/20" },
];

const Skills = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <SectionHeader kicker="02 — Skills" title="Tech stack & tooling" subtitle="The tools I reach for to ship reliable, scalable software." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {groups.map((g, i) => (
            <div
              key={g.title}
              onMouseEnter={() => setActive(g.title)}
              onMouseLeave={() => setActive(null)}
              className="group card-surface rounded-2xl p-6 hover:-translate-y-2 hover:border-primary/40 transition-all duration-300 relative overflow-hidden"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${g.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="absolute top-3 right-3 text-[10px] font-mono text-muted-foreground/50">0{i + 1}</div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 grid place-items-center text-primary group-hover:shadow-[var(--shadow-glow)] group-hover:scale-110 transition-all">
                    <g.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{g.title}</h3>
                    <p className="text-[11px] text-muted-foreground font-mono">{g.items.length} skills</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {g.items.map((it, idx) => (
                    <span
                      key={it}
                      className="text-xs px-2.5 py-1.5 rounded-md bg-muted/60 text-muted-foreground border border-border font-mono group-hover:border-primary/30 group-hover:text-foreground transition-all"
                      style={{ transitionDelay: `${idx * 30}ms` }}
                    >
                      {it}
                    </span>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="font-mono">Proficiency</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, k) => (
                      <div key={k} className={`w-1.5 h-1.5 rounded-full ${k < 4 ? "bg-primary" : "bg-muted"}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Highlight tile */}
          <div className="card-surface rounded-2xl p-6 relative overflow-hidden border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5 hidden lg:block">
            <Sparkles className="absolute top-4 right-4 w-5 h-5 text-primary animate-pulse" />
            <div className="h-full flex flex-col justify-center">
              <p className="text-xs font-mono text-primary mb-2">// always learning</p>
              <p className="text-lg font-semibold leading-tight">Currently exploring <span className="text-gradient">LLMs, RAG & Vector DBs</span></p>
              <p className="text-xs text-muted-foreground mt-3">Building AI-native experiences end-to-end.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
