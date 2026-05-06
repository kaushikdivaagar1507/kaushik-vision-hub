import { Mail, Phone, Github, Linkedin, Send, MapPin, Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Message ready!", description: "Thanks — I'll be in touch soon." });
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 600);
  };

  const inputCls =
    "w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.15)] transition-all";

  const channels = [
    { icon: Mail, label: "Email", value: "kaushikdivaagar@gmail.com", href: "mailto:kaushikdivaagar@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 8148591155", href: "tel:+918148591155" },
    { icon: Linkedin, label: "LinkedIn", value: "kaushik-d", href: "https://www.linkedin.com/in/kaushik-d-0031192b5/" },
    { icon: Github, label: "GitHub", value: "kaushikdivaagar1507", href: "https://github.com/kaushikdivaagar1507" },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <SectionHeader
          kicker="06 — Contact"
          title="Let's build something"
          subtitle="Open to internships, full-time roles, and interesting collaborations."
        />

        <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Left: info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card-surface rounded-3xl p-7 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-xs text-green-400 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Available for opportunities
                </div>
                <h3 className="text-2xl font-bold mb-2">Get in touch</h3>
                <p className="text-sm text-muted-foreground mb-5">
                  Have a project in mind, an opportunity to share, or just want to chat tech? My inbox is always open.
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  Madurai, Tamil Nadu, India
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="card-surface rounded-xl p-4 flex items-center gap-4 hover:border-primary/40 hover:translate-x-1 transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 text-primary grid place-items-center group-hover:scale-110 transition-transform">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono">{c.label}</p>
                    <p className="font-medium text-sm truncate">{c.value}</p>
                  </div>
                  <Send className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <form onSubmit={onSubmit} className="card-surface rounded-3xl p-7 md:p-8 space-y-5 relative overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />
              <div className="relative space-y-5">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <p className="text-xs font-mono text-primary uppercase tracking-wider">Send a message</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block font-mono">NAME</label>
                    <input
                      className={inputCls}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block font-mono">EMAIL</label>
                    <input
                      type="email"
                      className={inputCls}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block font-mono">MESSAGE</label>
                  <textarea
                    rows={6}
                    className={inputCls}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project, role, or idea..."
                    required
                  />
                </div>

                <div className="flex items-center justify-between gap-4 pt-2">
                  <p className="text-[11px] text-muted-foreground">
                    Or email directly at{" "}
                    <a href="mailto:kaushikdivaagar@gmail.com" className="text-primary hover:underline">
                      kaushikdivaagar@gmail.com
                    </a>
                  </p>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:scale-[1.03] hover:shadow-[var(--shadow-glow)] transition-all disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {loading ? "Sending..." : (<><Send className="w-4 h-4" /> Send Message</>)}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
