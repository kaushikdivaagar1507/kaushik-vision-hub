import { Trophy, Medal } from "lucide-react";
import SectionHeader from "./SectionHeader";

const items = [
  { icon: Trophy, title: "Athletics Captain", text: "Led and mentored the college athletics team across the season." },
  { icon: Medal, title: "Inter-Zone Athletics", text: "Represented college in Long Jump at the inter-zone level." },
];

const Leadership = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-6">
      <SectionHeader kicker="05 — Leadership" title="Beyond the keyboard" />
      <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {items.map((it) => (
          <div key={it.title} className="card-surface rounded-2xl p-6 flex items-start gap-4 hover:border-primary/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 grid place-items-center text-primary shrink-0">
              <it.icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{it.title}</h3>
              <p className="text-sm text-muted-foreground">{it.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Leadership;