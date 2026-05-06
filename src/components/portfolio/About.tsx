import { GraduationCap, Brain, Users, Zap } from "lucide-react";
import SectionHeader from "./SectionHeader";

const traits = [
  { icon: Brain, label: "Strong analytical thinking" },
  { icon: Zap, label: "Problem-solving mindset" },
  { icon: Users, label: "Team collaborator" },
];

const About = () => (
  <section id="about" className="py-24 relative">
    <div className="container mx-auto px-6">
      <SectionHeader kicker="01 — About" title="A bit about me" />
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <div className="card-surface rounded-2xl p-8 hover:border-primary/40 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 grid place-items-center text-primary">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">Education</h3>
          </div>
          <div className="border-l-2 border-primary/40 pl-5 space-y-1">
            <p className="text-xs font-mono text-primary">2022 — 2026</p>
            <p className="font-semibold text-lg">B.Tech, Computer Science and Business Systems</p>
            <p className="text-muted-foreground">Thiagarajar College of Engineering</p>
          </div>
          <p className="text-muted-foreground mt-6 text-sm leading-relaxed">
            Building a strong foundation in DSA, OOP, DBMS and modern software engineering practices,
            paired with hands-on full-stack and AI project experience.
          </p>
        </div>

        <div className="card-surface rounded-2xl p-8 hover:border-secondary/40 transition-all">
          <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
          <p className="text-muted-foreground leading-relaxed">
            Full-stack developer with MERN stack experience and strong fundamentals in
            <span className="text-foreground"> Data Structures</span>,
            <span className="text-foreground"> OOP</span>, and
            <span className="text-foreground"> DBMS</span>. Comfortable across the SDLC, REST API design,
            and Agile delivery — with a growing focus on AI-powered applications.
          </p>
          <div className="mt-6 space-y-3">
            {traits.map((t) => (
              <div key={t.label} className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 grid place-items-center text-secondary">
                  <t.icon className="w-4 h-4" />
                </div>
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;