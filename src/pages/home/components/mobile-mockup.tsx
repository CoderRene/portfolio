import { motion } from "motion/react";
import { useEffect, useState } from "react";
import PhoneScreen from "./phone-screens";

function MobileMockup({ screens }: { screens: string[] }) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveIdx((p) => (p + 1) % screens.length), 2800);
    return () => clearInterval(t);
  }, [screens.length]);

  return (
    <div className="relative flex items-center justify-center">
      {/* Glow behind phone */}
      <div
        className="absolute inset-0 blur-3xl opacity-30 rounded-full"
        style={{ background: "radial-gradient(circle, #2979FF 0%, #7C3AED 60%, transparent 100%)" }}
      />

      {/* Phone shell */}
      <div
        className="relative w-[160px] h-[320px] rounded-[28px] overflow-hidden z-10"
        style={{
          background: "#0a0d18",
          border: "2px solid rgba(41,121,255,0.5)",
          boxShadow: "0 0 40px rgba(41,121,255,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#080B12] rounded-b-xl z-20" />

        {/* Screen content */}
        <div className="absolute inset-0 pt-4">
          {screens.map((s, i) => (
            <div
              key={s}
              className="absolute inset-0 pt-4 transition-opacity duration-700"
              style={{ opacity: i === activeIdx ? 1 : 0 }}
            >
              <PhoneScreen type={s} />
            </div>
          ))}
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/20 rounded-full" />
      </div>

      {/* Dot indicators */}
      <div className="absolute -bottom-6 flex gap-1.5">
        {screens.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === activeIdx ? 16 : 6,
              height: 6,
              background: i === activeIdx ? "#2979FF" : "rgba(41,121,255,0.3)",
            }}
          />
        ))}
      </div>

      {/* Floating badges */}
      {[
        { text: "React Native", top: "10%", right: "-30%", color: "#2979FF" },
        { text: "Android", top: "35%", left: "-28%", color: "#7C3AED" },
        { text: "Kotlin", bottom: "30%", right: "-24%", color: "#f72585" },
      ].map((b) => (
        <motion.div
          key={b.text}
          className="absolute px-2 py-1 rounded text-[10px] font-mono font-medium border whitespace-nowrap"
          style={{
            top: b.top,
            right: b.right,
            bottom: b.bottom,
            left: b.left,
            color: b.color,
            borderColor: `${b.color}44`,
            background: `${b.color}18`,
          }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
        >
          {b.text}
        </motion.div>
      ))}
    </div>
  );
}

export default MobileMockup;