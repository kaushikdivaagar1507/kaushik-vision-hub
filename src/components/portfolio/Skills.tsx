import { Code, Cpu, Layout, Server, Database, Wrench, Network } from "lucide-react";
import SectionHeader from "./SectionHeader";

const groups = [
  { icon: Code, title: "Languages", items: ["Java", "C", "C++", "Python"] },
  { icon: Cpu, title: "Core CS", items: ["DSA", "OOP", "DBMS"] },
  { icon: Layout, title: "Frontend", items: ["React.js", "Tailwind CSS"] },
  { icon: Server, title: "Backend", items: ["Node.js", "FastAPI", "Flask"] },
  { icon: Database, title: "Databases", items: ["MySQL", "MongoDB", "AstraDB"] },
  { icon: Wrench, title: "Tools", items: ["GitHub", "Postman", "Figma", "Vercel", "Render", "VS Code"] },
  { icon: Network, title: "Concepts", items: ["REST APIs", "JWT Auth", "SDLC", "Agile"] },
];

const Skills = () => (
  <section id="skills" className="py-24 relative">
    <div className="container mx-auto px-6">
      <SectionHeader kicker="02 — Skills" title="Tech stack & tooling" subtitle="Tools I reach for to ship reliable, scalable software." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <div
            key={g.title}
            className="group card-surface rounded-2xl p-6 hover:-translate-y-1 hover:border-primary/40 transition-all duration-300"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 grid place-items-center text-primary group-hover:shadow-[var(--shadow-glow)] transition-all">
                <g.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it} className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border font-mono">
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;