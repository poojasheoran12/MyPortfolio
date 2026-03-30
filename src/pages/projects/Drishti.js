import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DrishtiProject() {
  const [imageModal, setImageModal] = useState(null);

  // REAL ASSETS
  const videoUrl = "/screenshots/drishti/WhatsApp Video 2026-03-31 at 00.43.30.mp4";
  const screenshots = [
    { 
      title: "Real-time Detection", 
      img: "/screenshots/drishti/WhatsApp Image 2026-03-31 at 00.43.28 (1).jpeg",
      description: "AI detecting multiple objects in a domestic environment."
    },
    { 
      title: "Outdoor Navigation", 
      img: "/screenshots/drishti/WhatsApp Image 2026-03-31 at 00.43.29 (1).jpeg",
      description: "Combining GPS guidance with obstacle detection."
    },
    { 
      title: "Path Mapping", 
      img: "/screenshots/drishti/WhatsApp Image 2026-03-31 at 00.43.29.jpeg",
      description: "Visualizing the safe path for the user."
    },
    { 
      title: "AI Analysis", 
      img: "/screenshots/drishti/WhatsApp Image 2026-03-31 at 00.44.41 (2).jpeg",
      description: "Deep-learning based object categorization."
    },
    { 
      title: "Object Discovery", 
      img: "/screenshots/drishti/WhatsApp Image 2026-03-31 at 00.44.42.jpeg",
      description: "Finding specific objects within a complex scene."
    },
  ];

  const features = [
    {
      title: "🔍 Finding Mode",
      desc: "Users search for specific objects (e.g., 'chair'). The system detects and generates directional voice cues to guide them toward it."
    },
    {
      title: "📍 GPS + AI Navigation",
      desc: "True fusion of map directions and obstacle detection. 'Turn right' becomes 'Turn right, then watch for the pedestrian approaching from the left'."
    },
    {
      title: "🏠 Indoor Safety Mode",
      desc: "Low-latency object detection optimized for furniture and household hazards, ensuring safe movement within private spaces."
    }
  ];

  const prioritizationLogic = [
    { label: "Relevance", desc: "Ignore objects not in the user's direct walking path." },
    { label: "Distance", desc: "Prioritize immediate hazards (0.5m - 2m) over distant ones." },
    { label: "Risk level", desc: "Moving vehicles and glass doors take priority over static obstacles." },
    { label: "Velocity", desc: "Identify approaching objects based on relative frame movement." }
  ];

  return (
    <div className="relative text-white overflow-hidden min-h-screen bg-black">
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/10 via-black to-amber-900/10 -z-10" />

      {/* HERO SECTION */}
      <section className="text-center py-24 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1.5 rounded-full bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6 inline-block">
            AI + Accessibility (KMP)
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-amber-500">
            Drishti
          </h1>
          <p className="max-w-3xl mx-auto mt-8 text-2xl text-gray-300 font-light leading-relaxed">
            An AI-powered assistant helping the visually impaired navigate 
            the real world with **Context-Aware Voice Guidance**.
          </p>
        </motion.div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="p-10 rounded-[2.5rem] bg-red-950/10 border border-red-900/20">
            <h3 className="text-red-400 font-bold text-xl mb-4 italic">The Overload Problem</h3>
            <p className="text-gray-400 text-lg">
              "Most apps provide too much raw information. Speaking every object in 
              view creates audio noise, overwhelming users and making navigation impossible."
            </p>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-green-950/10 border border-green-900/20">
            <h3 className="text-green-400 font-bold text-xl mb-4 italic">The Drishti Solution</h3>
            <p className="text-gray-200 text-lg">
              "Drishti doesn't just see; it understands. It speaks only what matters, 
              filtering environment noise to provide safe, timely, and minimal instructions."
            </p>
          </div>
        </div>
      </section>

      {/* THE CHALLENGE: PRIORITIZATION ENGINE */}
      <section className="bg-white/[0.03] py-24 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">The Core Engineering Challenge</h2>
          <p className="text-2xl text-cyan-400 mb-16 italic">"What should the app speak?"</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {prioritizationLogic.map((logic, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md"
              >
                <div className="text-3xl font-black text-amber-500 mb-2">{i+1}</div>
                <h4 className="text-xl font-bold mb-3">{logic.label}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{logic.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO DEMO */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-t border-white/5 text-center">
        <h2 className="text-4xl font-bold mb-12 tracking-tight">Video Demo</h2>
        <div className="max-w-[300px] mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/[0.02] shadow-2xl">
          <video 
            src={videoUrl} 
            controls 
            autoPlay 
            muted 
            loop 
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-16 text-center">Intelligent Assistance</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-cyan-500/30 transition-all">
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH SPECS */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold mb-10">System Architecture</h2>
            <div className="space-y-6">
              {[
                { t: "Shared Engine (KMP)", d: "AI logic, GPS data processing, filtering rules." },
                { t: "AI Inference (TFLite)", d: "Real-time YOLO processing on Edge." },
                { t: "Voice Synthesis (TTS)", d: "Custom instruction set for minimal cognitive load." },
                { t: "Async Pipeline", d: "Coroutines & Flow for multi-threaded sensor fusion." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 border-l-2 border-cyan-500/30 pl-6">
                  <div>
                    <h4 className="font-bold text-cyan-400">{item.t}</h4>
                    <p className="text-gray-500 text-sm">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group rounded-[3rem] overflow-hidden max-h-[400px] aspect-video border border-white/10">
            <img 
               src="/screenshots/drishti/WhatsApp Image 2026-03-31 at 00.43.28 (1).jpeg"
               className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" 
               alt="Drishti Interface"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
               <div className="text-xs text-cyan-400 font-mono tracking-widest uppercase mb-2">Interface Scan</div>
               <div className="text-xl font-bold italic">"Obstacle ahead, move slightly left"</div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="max-w-6xl mx-auto px-6 py-24 mb-20">
        <h2 className="text-4xl font-bold text-center mb-16">Visual Journey</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {screenshots.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer text-center"
              onClick={() => setImageModal(item.img)}
            >
              <div className="rounded-[2rem] overflow-hidden mb-6 max-h-[500px] aspect-[9/16] mx-auto bg-neutral-900 border border-white/10 group-hover:border-amber-500/50 transition-all">
                <img
                  src={item.img}
                  className="w-full h-full object-contain"
                  alt={item.title}
                />
              </div>
              <h4 className="font-bold text-xl text-center">{item.title}</h4>
              <p className="text-sm text-gray-500 text-center mt-2 px-4">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMAGE MODAL */}
      <AnimatePresence>
        {imageModal && (
          <motion.div
            className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-6 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setImageModal(null)}
          >
            <motion.img
              src={imageModal}
              className="rounded-3xl max-h-[85vh] w-auto border border-white/10"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
