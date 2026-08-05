import { Building2, ExternalLink, Globe, Lock, Smartphone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { shippedApps } from "../../../data/data";

function ShippedAppCard({ app }: { app: (typeof shippedApps)[0] }) {
  const [hovered, setHovered] = useState(false);
  const PlatformIcon = app.platform === "Mobile" ? Smartphone : Globe;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col"
      style={{
        background: "#0D1220",
        borderColor: hovered ? `${app.color}55` : "rgba(41,121,255,0.12)",
        boxShadow: hovered ? `0 8px 40px ${app.color}22` : "none",
      }}
    >
      <div className="relative h-36 overflow-hidden flex items-center justify-center" style={{ background: `${app.color}0a` }}>
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 60% 40%, ${app.color}18 0%, transparent 70%)` }} />

        <div
          className="relative w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{
            background: `${app.color}18`,
            border: `1.5px solid ${app.color}44`,
            boxShadow: `0 0 28px ${app.color}28`,
          }}
        >
          <PlatformIcon size={28} style={{ color: app.color }} />
        </div>

        <div className="absolute top-3 right-3 flex flex-col gap-1.5">
          {app.metrics.map((m) => (
            <div
              key={m.label}
              className="flex items-center gap-1 px-2 py-1 rounded text-[10px] font-medium"
              style={{ background: `${app.color}22`, color: app.color, border: `1px solid ${app.color}33` }}
            >
              <m.icon size={9} />
              {m.label}
            </div>
          ))}
        </div>

        <div
          className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded text-[10px] font-mono"
          style={{ background: "#1A2030", color: "#6B7A99", border: "1px solid rgba(41,121,255,0.15)" }}
        >
          <PlatformIcon size={9} />
          {app.platform}
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.03em" }}>
            {app.title}
          </h3>
          <p className="text-xs font-mono mt-0.5" style={{ color: app.color }}>{app.tagline}</p>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Building2 size={12} style={{ color: app.color }} />
          {app.company}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">{app.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {app.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-0.5 rounded border"
              style={{ color: "#6B7A99", borderColor: "rgba(41,121,255,0.15)", background: "#1A2030" }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-auto pt-2 border-t" style={{ borderColor: "rgba(41,121,255,0.1)" }}>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Lock size={12} /> Proprietary · Private codebase
          </span>
          {app.storeUrl && (
            <a
              href={app.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors ml-auto"
            >
              <ExternalLink size={13} /> View App
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ShippedAppCard;
