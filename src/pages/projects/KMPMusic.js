import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function KMPMusicPlayer() {
  const [imageModal, setImageModal] = useState(null);

  // REAL ASSETS
  const videoUrl = "/screenshots/music/WhatsApp Video 2026-03-31 at 00.43.32.mp4";
  const screenshots = [
    { 
      title: "Music Interface", 
      img: "/screenshots/music/WhatsApp Image 2026-03-31 at 00.44.39.jpeg",
      description: "Real-time music playback interface with persistent controls."
    },
    { 
      title: "Now Playing", 
      img: "/screenshots/music/WhatsApp Image 2026-03-31 at 00.44.41 (1).jpeg",
      description: "Full-screen music player showing metadata and album art."
    },
    { 
      title: "Library View", 
      img: "/screenshots/music/WhatsApp Image 2026-03-31 at 00.44.41.jpeg",
      description: "Offline-first library managed by SQLDelight."
    },
  ];

  const technicalLearnings = [
    {
      title: "🚀 Ktor (Networking)",
      details: "Implemented robust networking layers using Ktor Client. Focused on handling complex async calls, structured error handling for production environments, and implementing efficient Paging to handle large music catalogs seamlessly."
    },
    {
      title: "💾 SQLDelight (Local Database)",
      details: "Architected an offline-first experience. Used SQLDelight to design a reliable local schema, managing track caching and an efficient 'Recently Played' feature that persists across sessions."
    },
    {
      title: "🎧 Background Audio Playback",
      details: "The most challenging phase: managing Android's AudioService and MediaPlayer lifecycle. Ensured seamless playback transitions, notification controls, and resource management to prevent memory leaks."
    },
    {
      title: "🧩 Dependency Injection (Koin)",
      details: "Leveraged Koin to decouple modules and write clean, testable code. DI was critical for scaling the KMP project, allowing shared business logic to be easily injected into platform-specific UI layers."
    }
  ];

  return (
    <div className="relative text-white overflow-hidden min-h-screen bg-black">
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-black -z-10" />

      {/* HERO SECTION */}
      <section className="text-center py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1.5 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 text-sm font-medium mb-6 inline-block">
            Kotlin Multiplatform (KMP)
          </span>
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            Music Player
          </h1>
          <p className="max-w-3xl mx-auto mt-8 text-xl text-gray-400 leading-relaxed">
            One of the most impactful learning experiences in my KMP journey. 
            A professional-grade music streaming application built with shared logic, 
            offline-first architecture, and robust background services.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-12 flex-wrap">
          <button className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-600/20">
            🎧 Download APK
          </button>
          <button className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all">
            💻 View Source
          </button>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <h2 className="text-3xl font-bold mb-12 text-center">Engineering Stack</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            "KMP", "Jetpack Compose", "Compose Multiplatform", 
            "Ktor", "SQLDelight", "Koin (DI)", "Coroutines", 
            "StateFlow", "AudioService", "MediaPlayer", "Paging", "Clean Architecture"
          ].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-sm font-medium hover:border-indigo-500/50 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </section>

      {/* DEEP DIVE LEARNINGS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-16">Technical Deep Dive</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {technicalLearnings.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg italic">
                "{item.details}"
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VIDEO DEMO */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-t border-white/5 text-center">
        <h2 className="text-4xl font-bold mb-12">Video Demo</h2>
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

      {/* FEATURES & ARCHITECTURE */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold mb-10">Key Features</h2>
            <ul className="space-y-6 text-lg">
              {[
                { icon: "🎶", text: "Spotify-inspired browsing experience" },
                { icon: "📀", text: "Mini Player with persistent playback" },
                { icon: "🔄", text: "Seamless Full-screen transition" },
                { icon: "🖼️", text: "Dynamic Artwork & Metadata sync" },
                { icon: "⚡", text: "Smooth animations (Compose Multiplatform)" },
                { icon: "📶", text: "Reliable Offline Mode via SQLDelight" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-300">
                  <span className="text-2xl">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-10">Clean Architecture</h2>
            <div className="p-8 rounded-3xl border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-sm">
              <pre className="text-sm md:text-base leading-relaxed text-indigo-300/80 font-mono">
{`UI (Compose Multiplatform)
│
├── ViewModel (Shared)
│   └── StateFlow Management
│
├── Domain (KMP Shared)
│   ├── UseCases
│   └── Models
│
└── Data Layer
    ├── Ktor (Networking + Paging)
    └── SQLDelight (Local Persistence)`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="max-w-6xl mx-auto px-6 py-24 mb-20 bg-white/[0.02] rounded-[3rem]">
        <h2 className="text-4xl font-bold text-center mb-16">Visual Experience</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {screenshots.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setImageModal(item.img)}
            >
              <div className="rounded-2xl overflow-hidden mb-4 max-h-[500px] aspect-[9/16] mx-auto bg-neutral-900 border border-white/10 group-hover:border-indigo-500/50 transition-all">
                <img
                  src={item.img}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  alt={item.title}
                />
              </div>
              <h4 className="font-bold text-lg text-center group-hover:text-indigo-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500 text-center mt-1">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMAGE MODAL */}
      <AnimatePresence>
        {imageModal && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setImageModal(null)}
          >
            <motion.img
              src={imageModal}
              className="rounded-2xl max-h-[90vh] w-auto shadow-2xl border border-white/10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
