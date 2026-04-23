import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ── Data ──────────────────────────────────────────────────────────────────────
const cards = [
  {
    id: "01", label: "About", icon: "🏢", accent: "#4a9eff",
    bg: "rgba(20,28,58,0.85)", title: "About the Company",
    content: (
      <>
        <p className="text-sm text-slate-300/70 leading-relaxed">
          Founded in 2008, Nexora Solutions operates across 14 countries, delivering
          cutting-edge technology that empowers businesses and communities alike.
        </p>
        <div className="flex gap-5 mt-4 pt-4 border-t border-white/[0.07]">
          {[["14+","Countries"],["2,400","Employees"],["₹840Cr","Revenue"],["16yrs","Experience"]].map(([n,l])=>(
            <div key={l}>
              <div className="text-lg font-bold text-slate-100" style={{fontFamily:"'Playfair Display',serif"}}>{n}</div>
              <div className="text-[10px] text-slate-400/50 mt-0.5">{l}</div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "02", label: "Leadership", icon: "👤", accent: "#b06fff",
    bg: "rgba(28,20,48,0.85)", title: "About the Promoter",
    content: (
      <>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shrink-0"
            style={{background:"linear-gradient(135deg,#b06fff,#ff6fb0)"}}>AR</div>
          <div>
            <p className="text-sm font-medium text-slate-100">Arjun Raghavan</p>
            <p className="text-[11px] text-slate-400/50">Founder & Chairman</p>
          </div>
        </div>
        <p className="text-sm text-slate-300/70 leading-relaxed">
          25+ years in technology & infrastructure. IIT Bombay · Harvard Business School.
          Forbes Asia Power Leaders — three consecutive years.
        </p>
        <p className="mt-3 text-xs italic text-purple-200/45">
          "Growth without purpose is just noise. We build to matter."
        </p>
      </>
    ),
  },
  {
    id: "03", label: "Purpose", icon: "🎯", accent: "#00d4aa",
    bg: "rgba(15,35,40,0.85)", title: "Mission & Vision",
    content: (
      <div className="grid grid-cols-2 gap-2">
        {[
          ["Mission","teal","To deliver transformative technology solutions with integrity and innovation."],
          ["Vision","teal","Most trusted tech partner in Asia by 2030, creating lasting value."],
          ["Values","cyan","Integrity. Innovation. Impact — measured by lives improved."],
          ["Commitment","cyan","Carbon neutral by 2027. 1% profits to rural digital literacy."],
        ].map(([h,c,t])=>(
          <div key={h} className={`rounded-xl p-3 bg-${c}-400/[0.07] border border-${c}-400/20`}>
            <p className={`text-[10px] font-medium text-${c}-400 mb-1`}>{h}</p>
            <p className="text-[11px] text-slate-300/60 leading-relaxed">{t}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "04", label: "Accreditation", icon: "🏆", accent: "#ffaa44",
    bg: "rgba(35,22,15,0.85)", title: "Certificates & Awards",
    content: (
      <div className="flex flex-col gap-2">
        {[
          ["✅","ISO 9001:2015 — Quality Management","Certified since 2011 · Renewed 2024"],
          ["🔒","ISO 27001 — Information Security","All data centres · 2023"],
          ["🌿","GreenTech Sustainability Award","CII National Awards · 2022 & 2024"],
          ["⭐","Great Place to Work® Certified","Top 50 Best Workplaces in Tech · 2024"],
        ].map(([ic,n,d])=>(
          <div key={n} className="flex items-center gap-3 rounded-xl px-3 py-2.5 bg-amber-400/[0.06] border border-amber-400/[0.18]">
            <span className="text-base w-8 h-8 flex items-center justify-center rounded-lg bg-amber-400/10 shrink-0">{ic}</span>
            <div>
              <p className="text-[12px] font-medium text-slate-100">{n}</p>
              <p className="text-[10px] text-amber-200/40">{d}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

// ── Card ──────────────────────────────────────────────────────────────────────
function Card({ card, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl p-6 border border-white/10 overflow-hidden w-full max-w-lg"
      style={{ background: card.bg, backdropFilter: "blur(16px)" }}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
        style={{ background: `linear-gradient(90deg,${card.accent},${card.accent}66)` }} />

      <p className="text-[10px] font-medium tracking-[2px] uppercase mb-1.5" style={{ color: card.accent }}>
        {card.id} — {card.label}
      </p>
      <h2 className="text-xl font-bold text-slate-100 mb-4" style={{ fontFamily: "'Playfair Display',serif" }}>
        {card.title}
      </h2>
      {card.content}
    </motion.div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function ParallaxScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const starsY  = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const orbsY   = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500&display=swap');
        .px::-webkit-scrollbar{width:4px}
        .px::-webkit-scrollbar-thumb{background:rgba(255,255,255,.15);border-radius:4px}
        @keyframes pulse{0%,100%{opacity:.3}50%{opacity:.7}}
        .pulse{animation:pulse 2s infinite}
      `}</style>

      <div ref={ref} className="px relative overflow-y-scroll bg-[#0b0e1a]"
        style={{ height: "100vh", fontFamily: "'DM Sans',sans-serif" }}>

        {/* ── Parallax background ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ height: `${cards.length * 380}px` }}>
          {/* Stars */}
          <motion.svg style={{ y: starsY }} width="100%" height="100%"
            className="absolute inset-0" xmlns="http://www.w3.org/2000/svg">
            {Array.from({ length: 100 }, (_, i) => {
              const s = i * 137.508;
              const cx = ((s * 9301 + 49297) % 233280) / 233280 * 100;
              const cy = ((s * 4321 + 1234) % 233280) / 233280 * 100;
              const r  = ((s * 1234) % 100) / 100 * 1.2 + 0.3;
              const op = ((s * 5678) % 100) / 100 * 0.45 + 0.1;
              return <circle key={i} cx={`${cx}%`} cy={`${cy}%`} r={r} fill="#a0b4ff" opacity={op} />;
            })}
          </motion.svg>

          {/* Glowing orbs */}
          <motion.div style={{ y: orbsY }} className="absolute inset-0">
            {[
              { l:"10%", t:"4%",  w:200, c:"#1a2a6c" },
              { l:"65%", t:"18%", w:160, c:"#3a1a6c" },
              { l:"15%", t:"48%", w:180, c:"#0d3d40" },
              { l:"62%", t:"74%", w:170, c:"#4a2010" },
            ].map((o, i) => (
              <div key={i} className="absolute rounded-full opacity-25"
                style={{ left:o.l, top:o.t, width:o.w, height:o.w,
                  background:o.c, filter:"blur(50px)" }} />
            ))}
          </motion.div>
        </div>

        {/* ── Scroll content ── */}
        <div className="relative z-10 flex flex-col items-center gap-14 px-5 pt-14 pb-24">
          {/* Hero header */}
          <motion.div initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.7 }} className="text-center">
            <h1 className="text-4xl font-bold text-slate-100 mb-2"
              style={{ fontFamily:"'Playfair Display',serif" }}>Our Story</h1>
            <p className="text-[11px] tracking-[2px] text-slate-400/40 uppercase mb-3">Scroll to explore</p>
            <p className="pulse text-[11px] tracking-widest text-slate-400/35">▼ scroll ▼</p>
          </motion.div>

          {/* Cards */}
          {cards.map((card, i) => <Card key={card.id} card={card} index={i} />)}
        </div>
      </div>
    </>
  );
}
