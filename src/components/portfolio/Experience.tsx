import { Briefcase, MapPin, Calendar, CheckCircle2, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    role: "Software Development Trainee",
    company: "Tostat Software",
    location: "Madurai",
    period: "2024",
    duration: "2 Weeks",
    type: "Internship",
    points: [
      "Worked on MERN stack application development",
      "Built frontend components using React.js",
      "Developed REST APIs using Node.js / Express",
      "Participated in Agile sprint cycles and SDLC phases",
      "Debugged and improved application stability",
    ],
    tags: ["React", "Node.js", "Express", "Agile"],
  },
];

const Experience = () => (
  <section id="experience" className="py-24 relative overflow-hidden">
    <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
    <div className="container mx-auto px-6 relative">
      <SectionHeader kicker="03 — Experience" title="Professional journey" subtitle="Real-world experience building products and shipping features." />

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:-translate-x-1/2" />

        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-12 last:mb-0">
            {/* Dot */}
            <div className="absolute left-0 md:left-1/2 top-2 w-9 h-9 rounded-full bg-background border-2 border-primary grid place-items-center md:-translate-x-1/2 z-10 shadow-[var(--shadow-glow)]">
              <Briefcase className="w-4 h-4 text-primary" />
            </div>

            {/* Year on opposite side - desktop */}
            <div className="hidden md:flex md:order-2 md:pl-12 items-start pt-2">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-gradient">{exp.period}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{exp.duration}</p>
              </div>
            </div>

            <div className="md:pr-12 md:text-right md:order-1">
              <div className="card-surface rounded-2xl p-6 hover:border-primary/40 transition-all group relative overflow-hidden md:text-left">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/30 font-mono">{exp.type}</span>
                    <span className="text-xs font-mono text-muted-foreground md:hidden">{exp.period}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-1 flex items-center gap-2 group-hover:text-primary transition-colors">
                    {exp.role}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">{exp.company}</p>

                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
                    <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" />{exp.location}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{exp.duration}</span>
                  </div>

                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    {exp.points.map((p) => (
                      <li key={p} className="flex gap-2 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border font-mono">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Future */}
        <div className="relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-12">
          <div className="absolute left-0 md:left-1/2 top-2 w-9 h-9 rounded-full bg-background border-2 border-dashed border-secondary/50 grid place-items-center md:-translate-x-1/2 z-10">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          </div>
          <div className="md:pr-12 md:text-right">
            <div className="card-surface rounded-2xl p-5 border-dashed border-secondary/30 md:text-left">
              <p className="text-xs font-mono text-secondary mb-1">// Next chapter</p>
              <p className="text-sm font-semibold">Open to internships & SDE roles</p>
              <p className="text-xs text-muted-foreground mt-1">Let's build something together →</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
