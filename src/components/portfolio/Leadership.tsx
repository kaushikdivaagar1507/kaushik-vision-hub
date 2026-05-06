import { Trophy, Medal, Users, Star } from "lucide-react";
import SectionHeader from "./SectionHeader";

const items = [
  {
    icon: Trophy,
    title: "Athletics Captain",
    text: "Led and mentored the college athletics team across the season.",
    badge: "Leadership",
    color: "from-yellow-500/20 to-orange-500/20",
    accent: "text-yellow-400",
  },
  {
    icon: Medal,
    title: "Inter-Zone Athletics",
    text: "Represented college in Long Jump at the inter-zone level.",
    badge: "Achievement",
    color: "from-purple-500/20 to-pink-500/20",
    accent: "text-purple-400",
  },
];

const values = [
  { icon: Users, label: "Team Spirit" },
  { icon: Star, label: "Excellence" },
  { icon: Trophy, label: "Discipline" },
];

const Leadership = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    <div className="container mx-auto px-6 relative">
      <SectionHeader kicker="05 — Leadership" title="Beyond the keyboard" subtitle="Discipline and teamwork built on the field translate directly to shipping software." />

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-10">
        {items.map((it) => (
          <div key={it.title} className="card-surface rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all group relative overflow-hidden">
            <div className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${it.color} rounded-full blur-2xl opacity-50 group-hover:scale-125 transition-transform duration-700`} />
            <div className="relative flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 grid place-items-center shrink-0 group-hover:rotate-6 group-hover:scale-110 transition-all">
                <it.icon className={`w-6 h-6 ${it.accent}`} />
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-muted text-muted-foreground font-mono">{it.badge}</span>
                <h3 className="font-semibold mt-2 mb-1.5">{it.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {values.map((v) => (
          <div key={v.label} className="flex items-center gap-2 px-4 py-2 rounded-full card-surface text-sm hover:border-primary/40 hover:text-primary transition-all">
            <v.icon className="w-3.5 h-3.5 text-primary" />
            <span className="text-muted-foreground">{v.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Leadership;
