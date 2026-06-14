client";
import { motion } from "framer-motion";

const content = [
  { 
    tag: "01 / PERCEPTION", 
    h: "Where the story meets", 
    i: "the scrutiny of capital.", 
    p: "A vision inspired by the Author of life. Framing truth for those who build the future." 
  },
  { 
    tag: "02 / THE PRODUCT", 
    h: "Narrative is Architecture", 
    i: "of Investor Confidence.", 
    p: "We build the narrative villa. We honor the leader who executes the mundane with excellence." 
  },
  { 
    tag: "2026 / STATUS", 
    h: "Light for Leaders.", 
    i: "By Invitation Only.", 
    p: "Dedicated to stories buried under corporate noise. Refining foundations for those who do not stand alone." 
  }
];

export default function Maison() {
  return (
    <main style={{ backgroundColor: '#050505', color: '#f5f5f0', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=JetBrains+Mono:wght@100&display=swap');
        .sec { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; padding: 0 10%; position: relative; border-bottom: 1px solid rgba(255,255,255,0.03); }
        .mono { font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 5px; text-transform: uppercase; color: #d4c098; margin-bottom: 2rem; }
        .serif { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.5rem, 8vw, 5.5rem); line-height: 1; font-weight: 300; margin: 0; }
        .glow { position: fixed; top: 0; left: 0; width: 100%; height: 60vh; background: radial-gradient(circle at 50% 0%, rgba(212,192,152,0.08), transparent); pointer-events: none; z-index: 1; }
      `}</style>

      <div className="glow" />

      {content.map((item, index) => (
        <section className="sec" key={index}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mono">{item.tag}</p>
            <h1 className="serif">
              {item.h}<br />
              <span style={{ fontStyle: 'italic', opacity: 0.7 }}>{item.i}</span>
            </h1>
            <p style={{ opacity: 0.5, marginTop: '3rem', maxWidth: '500px', fontSize: '1.1rem', fontWeight: 200, lineHeight: 1.6 }}>
              {item.p}
            </p>
          </motion.div>
        </section>
      ))}

      <footer style={{ padding: '4rem 10%', opacity: 0.2 }}>
        <p className="mono">Tailored
          2026</p></footer>
    </main>
  );
            }
