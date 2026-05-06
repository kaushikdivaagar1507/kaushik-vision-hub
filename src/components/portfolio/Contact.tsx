import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message ready!", description: "Thanks — I'll be in touch soon." });
    setForm({ name: "", email: "", message: "" });
  };

  const inputCls =
    "w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.15)] transition-all";

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader kicker="06 — Contact" title="Let's build something" subtitle="Open to internships, full-time roles, and interesting collaborations." />
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "kaushikdivaagar@gmail.com", href: "mailto:kaushikdivaagar@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 8148591155", href: "tel:+918148591155" },
              { icon: Linkedin, label: "LinkedIn", value: "kaushik-d", href: "https://www.linkedin.com/in/kaushik-d-0031192b5/" },
              { icon: Github, label: "GitHub", value: "kaushikdivaagar1507", href: "https://github.com/kaushikdivaagar1507" },
            ].map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="card-surface rounded-xl p-4 flex items-center gap-4 hover:border-primary/40 hover:translate-x-1 transition-all">
                <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary grid place-items-center">
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{c.label}</p>
                  <p className="font-medium">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          <form onSubmit={onSubmit} className="card-surface rounded-2xl p-6 space-y-4">
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Name</label>
              <input className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" required />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Email</label>
              <input type="email" className={inputCls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" required />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Message</label>
              <textarea rows={4} className={inputCls} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="What can I help with?" required />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:scale-[1.02] hover:shadow-[var(--shadow-glow)] transition-all">
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;