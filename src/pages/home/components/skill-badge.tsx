import { motion } from "motion/react";

function SkillBadge({ label, color }: { label: string; color: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.06 }}
      className="inline-block px-3 py-1.5 rounded text-xs font-mono font-medium border cursor-default transition-shadow"
      style={{
        color,
        borderColor: `${color}33`,
        background: `${color}12`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 12px ${color}44`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {label}
    </motion.span>
  );
}

export default SkillBadge;