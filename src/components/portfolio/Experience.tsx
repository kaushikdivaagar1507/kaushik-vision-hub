import { Briefcase, MapPin, Calendar } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Experience = () => (
  <section id="experience" className="py-24 relative">
    <div className="container mx-auto px-6">
      <SectionHeader kicker="03 — Experience" title="Where I've worked" />
      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
        <div className="relative pl-14 group">
          <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-background border-2 border-primary grid place-items-center group-hover:shadow-[var(--shadow-glow)] transition-all">
            <Briefcase className="w-4 h-4 text-primary" />
          </div>
          <div className="card-surface rounded-2xl p-6 hover:border-primary/40 transition-all">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <h3 className="text-xl font-semibold">Software Development Trainee</h3>
              <span className="text-xs font-mono text-primary px-2 py-1 rounded-md bg-primary/10 border border-primary/30">2024</span>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> Tostat Software</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Madurai</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> 2 Weeks</span>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Worked on MERN stack application development",
                "Built frontend components using React.js",
                "Developed REST APIs using Node.js / Express",
                "Participated in Agile sprint cycles and SDLC phases",
                "Debugged and improved application stability",
              ].map((p) => (
                <li key={p} className="flex gap-2"><span className="text-primary mt-1">▹</span>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;