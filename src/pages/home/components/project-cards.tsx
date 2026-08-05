import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { projects } from "../../../data/data";
import PhoneScreen from "./phone-screens";

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col"
      style={{
        background: "#0D1220",
        borderColor: hovered ? `${project.color}55` : "rgba(41,121,255,0.12)",
        boxShadow: hovered ? `0 8px 40px ${project.color}22` : "none",
      }}
    >
      {/* Card top — mini phone preview */}
      <div className="relative h-44 overflow-hidden flex items-center justify-center" style={{ background: `${project.color}0a` }}>
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 60% 40%, ${project.color}18 0%, transparent 70%)` }} />
        <div
          className="relative w-[90px] h-[160px] rounded-[18px] overflow-hidden"
          style={{
            background: "#080B12",
            border: `1.5px solid ${project.color}55`,
            boxShadow: `0 0 24px ${project.color}30`,
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-[#080B12] rounded-b-lg z-10" />
          <div className="pt-2.5">
            <PhoneScreen type={project.screen} />
          </div>
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-white/20 rounded-full" />
        </div>

        {/* Metrics */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="flex items-center gap-1 px-2 py-1 rounded text-[10px] font-medium"
              style={{ background: `${project.color}22`, color: project.color, border: `1px solid ${project.color}33` }}
            >
              <m.icon size={9} />
              {m.label}
            </div>
          ))}
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.03em" }}>
            {project.title}
          </h3>
          <p className="text-xs font-mono mt-0.5" style={{ color: project.color }}>{project.tagline}</p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-0.5 rounded border"
              style={{ color: "#6B7A99", borderColor: "rgba(41,121,255,0.15)", background: "#1A2030" }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 mt-auto pt-2 border-t" style={{ borderColor: "rgba(41,121,255,0.1)" }}>
          <a href={project.links.github} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <Github size={13} /> View Code
          </a>
          {project.links.demo && (
            <a href={project.links.demo} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <ExternalLink size={13} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;