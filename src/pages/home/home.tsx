import { ArrowRight, ChevronRight, Github, Linkedin, Mail, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import Section from "../../common/components/ui/section";
import { CONTACT_EMAIL, experience, projects, roles, shippedApps, skills, stats, webProjects } from "../../data/data";
import GridBg from "./components/grid-bg";
import MobileMockup from "./components/mobile-mockup";
import Nav from "./components/navigations";
import ProjectCard from "./components/project-cards";
import ShippedAppCard from "./components/shipped-app-cards";
import SkillBadge from "./components/skill-badge";
import WebProjectCard from "./components/web-project-cards";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio message from ${formData.name}`,
          _template: "table",
        }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      style={{ fontFamily: "Inter, sans-serif", scrollBehavior: "smooth" }}
    >
      <Nav />

      {/* ── Hero ── */}
      <section id="home" className="relative min-h-screen flex items-center pt-16">
        <GridBg />
        <div className="relative max-w-6xl mx-auto px-6 py-24 w-full grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono w-fit" style={{ borderColor: "rgba(41,121,255,0.3)", background: "rgba(41,121,255,0.08)", color: "#2979FF" }}>
              <span className="w-2 h-2 rounded-full bg-[#06d6a0] animate-pulse" />
              Available for new projects
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              style={{ fontFamily: "Rajdhani, sans-serif", letterSpacing: "-0.01em" }}
            >
              Exploring what I can{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #2979FF 0%, #7C3AED 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                build
              </span>{" "}
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              I'm a <span className="text-foreground font-medium">Software Developer</span> who builds seamless
              cross-platform mobile apps (React Native), web apps (React), Node.js APIs, and real-time infrastructure.
            </p>

            {/* Role pills */}
            <div className="flex flex-wrap gap-2">
              {roles.map((r) => (
                <span
                  key={r}
                  className="text-xs px-3 py-1 rounded-full font-mono"
                  style={{ background: "#1A2030", color: "#6B7A99", border: "1px solid rgba(41,121,255,0.12)" }}
                >
                  {r}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                style={{ background: "linear-gradient(135deg, #2979FF, #7C3AED)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(41,121,255,0.4)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
              >
                View Work <ChevronRight size={15} />
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-6 pt-4 border-t" style={{ borderColor: "rgba(41,121,255,0.1)" }}>
              {stats.map(([v, l]) => (
                <div key={l}>
                  <div className="text-xl font-bold" style={{ fontFamily: "Rajdhani, sans-serif", color: "#2979FF" }}>{v}</div>
                  <div className="text-xs text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — phone */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex justify-center md:justify-end pr-0 md:pr-8"
          >
            <MobileMockup screens={["bills", "storage", "messaging", "grades", "notes"]} />
          </motion.div>
        </div>
      </section>

      {/* ── Skills ── */}
      <Section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-xs font-mono text-[#2979FF] mb-2">// expertise</p>
            <h2 className="text-4xl font-bold" style={{ fontFamily: "Rajdhani, sans-serif" }}>
              My Arsenal
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl">
              A full-spectrum toolkit built over 6+ years of programming experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([key, cat]) => (
              <motion.div
                key={key}
                whileHover={{ y: -2 }}
                className="rounded-2xl p-6 border"
                style={{ background: "#0D1220", borderColor: `${cat.color}22` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${cat.color}18` }}>
                    <cat.icon size={18} style={{ color: cat.color }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground" style={{ fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.04em" }}>
                      {cat.label}
                    </h3>
                    {key === "mobile" && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ background: `${cat.color}22`, color: cat.color }}>
                        Primary
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <SkillBadge key={item} label={item} color={cat.color} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Mobile Projects ── */}
      <Section id="projects" className="py-24 px-6" style={{ background: "rgba(41,121,255,0.02)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-xs font-mono text-[#2979FF] mb-2">// mobile apps</p>
            <h2 className="text-4xl font-bold" style={{ fontFamily: "Rajdhani, sans-serif" }}>
              Mobile Projects
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl">
              End-to-end mobile builds, from UI to backend infrastructure, crafted in my own time to sharpen skills and explore new tech.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </Section>

      {/* ── Web Projects ── */}
      <Section id="web-projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-xs font-mono text-[#2979FF] mb-2">// web apps</p>
            <h2 className="text-4xl font-bold" style={{ fontFamily: "Rajdhani, sans-serif" }}>
              Web Projects
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl">
              Full-stack web apps spanning React frontends, Node backends, and AI-assisted tooling, built to solve real problems and practice modern web patterns.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {webProjects.map((p) => (
              <WebProjectCard key={p.title} project={p} />
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <p className="text-sm text-muted-foreground">More projects live on GitHub</p>
            <a
              href="https://github.com/CoderRene"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-foreground border transition-all duration-200 hover:bg-[#1A2030]"
              style={{ borderColor: "rgba(41,121,255,0.3)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(41,121,255,0.2)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
            >
              <Github size={18} />
              View all repositories
            </a>
          </div>
        </div>
      </Section>

      {/* ── Shipped Apps ── */}
      <Section id="shipped" className="py-24 px-6" style={{ background: "rgba(41,121,255,0.02)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-xs font-mono text-[#2979FF] mb-2">// production</p>
            <h2 className="text-4xl font-bold" style={{ fontFamily: "Rajdhani, sans-serif" }}>
              Shipped at Work
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl">
              Production apps and business tools delivered at companies I've worked with. Source code is proprietary and not publicly available.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {shippedApps.map((app) => (
              <ShippedAppCard key={app.title} app={app} />
            ))}
          </div>
        </div>
      </Section>

      {/* ── Experience ── */}
      <Section id="experience" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-xs font-mono text-[#2979FF] mb-2">// experience</p>
            <h2 className="text-4xl font-bold" style={{ fontFamily: "Rajdhani, sans-serif" }}>
              Roles I've Held and Worked On
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl">
              From full-stack web, then into mobile, shipping map-based apps, business tools, and quality-focused releases.
            </p>
          </div>

          <div className="relative max-w-3xl">
            <div
              className="absolute left-[11px] top-3 bottom-3 w-px"
              style={{ background: "linear-gradient(to bottom, rgba(41,121,255,0.45), rgba(124,58,237,0.2), transparent)" }}
            />

            <div className="flex flex-col gap-8">
              {experience.map((job, i) => (
                <motion.div
                  key={`${job.company}-${job.role}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative pl-10"
                >
                  <div
                    className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center"
                    style={{ background: "#080B12", borderColor: job.color }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ background: job.color }} />
                  </div>

                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                        {job.role}
                      </h3>
                      <div className="text-sm text-muted-foreground">
                        {job.company} · {job.location}
                      </div>
                    </div>
                    <span className="text-xs font-mono" style={{ color: job.color }}>
                      {job.period}
                    </span>
                  </div>

                  <motion.div
                    whileHover={{ y: -2 }}
                    className="rounded-2xl p-5 border"
                    style={{ background: "#0D1220", borderColor: `${job.color}22` }}
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{job.description}</p>
                    <ul className="flex flex-col gap-2 mb-4">
                      {job.highlights.map((h) => (
                        <li key={h} className="flex gap-2 text-xs leading-relaxed">
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: job.color }} />
                          <span className="text-foreground/80">{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded"
                          style={{ background: `${job.color}18`, color: job.color }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Contact ── */}
      <Section id="contact" className="py-24 px-6" style={{ background: "rgba(124,58,237,0.03)" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-mono text-[#2979FF] mb-2">// get in touch</p>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "Rajdhani, sans-serif" }}>
              Let's Build Something Great
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Open to freelance projects, full-time roles, and interesting collaborations. If you have an idea for a mobile app or need a
              senior dev to help scale an existing product, <br/>{"</ LET'S TALK />"}.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {[
                { icon: Github, label: "github.com/CoderRene", href: "https://github.com/CoderRene", color: "#E8EDF5" },
                { icon: Linkedin, label: "linkedin.com/in/rene-tajos-jr", href: "https://www.linkedin.com/in/rene-tajos-jr", color: "#0A66C2" },
                { icon: Mail, label: "master.isheart@gmail.com", href: "mailto:master.isheart@gmail.com", color: "#2979FF" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center border transition-colors group-hover:border-[rgba(41,121,255,0.4)]"
                    style={{ background: "#0D1220", borderColor: "rgba(41,121,255,0.12)" }}
                  >
                    <s.icon size={15} style={{ color: s.color }} />
                  </div>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div
            className="rounded-2xl p-8 border"
            style={{ background: "#0D1220", borderColor: "rgba(41,121,255,0.15)" }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-64 text-center gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "rgba(6,214,160,0.15)" }}>
                  <Zap size={24} style={{ color: "#06d6a0" }} />
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground mb-1" style={{ fontFamily: "Rajdhani, sans-serif" }}>Message Sent!</div>
                  <div className="text-sm text-muted-foreground">I'll get back to you within 24 hours.</div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="flex flex-col gap-5">
                <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "Rajdhani, sans-serif" }}>Send a Message</h3>
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
                ].map((f) => (
                  <div key={f.id} className="flex flex-col gap-1.5">
                    <label htmlFor={f.id} className="text-xs font-medium text-muted-foreground">{f.label}</label>
                    <input
                      id={f.id}
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      value={formData[f.id as "name" | "email"]}
                      onChange={(e) => setFormData((p) => ({ ...p, [f.id]: e.target.value }))}
                      className="px-4 py-3 rounded-xl text-sm text-foreground border outline-none transition-all"
                      style={{
                        background: "#080B12",
                        borderColor: "rgba(41,121,255,0.2)",
                      }}
                      onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#2979FF")}
                      onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(41,121,255,0.2)")}
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-muted-foreground">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="What would you like to discuss?"
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    className="px-4 py-3 rounded-xl text-sm text-foreground border outline-none resize-none transition-all"
                    style={{
                      background: "#080B12",
                      borderColor: "rgba(41,121,255,0.2)",
                    }}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#2979FF")}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(41,121,255,0.2)")}
                  />
                </div>
                {error && (
                  <p className="text-xs text-center" style={{ color: "#f72585" }}>
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "linear-gradient(135deg, #2979FF, #7C3AED)" }}
                  onMouseEnter={(e) => {
                    if (!sending) (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(41,121,255,0.35)";
                  }}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
                >
                  {sending ? "Sending..." : <>Send Message <ArrowRight size={15} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* ── Footer ── */}
      <footer
        className="py-8 px-6 border-t"
        style={{ borderColor: "rgba(41,121,255,0.1)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-mono text-muted-foreground">
            <span className="text-[#2979FF]">&lt;</span> Rene Tajos Jr.{" "}
            <span className="text-[#7C3AED]">/&gt;</span>
          </span>
          <span className="text-xs text-muted-foreground">© 2026 Rene Tajos Jr. · Built with React + TypeScript + Tailwind CSS</span>
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/CoderRene", label: "github" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/rene-tajos-jr", label: "linkedin" },
              { icon: Mail, href: "mailto:master.isheart@gmail.com", label: "email" },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} className="text-muted-foreground hover:text-[#2979FF] transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}