import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NewsApp() {
  const [imageModal, setImageModal] = useState(null);

  // SCREENSHOTS
  const screenshots = [
    { title: "Home Screen", img: "/screenshots/Newsify/detail1.png" },
    { title: "Article Detail", img: "/screenshots/Newsify/home1.png" },
    { title: "Loading State", img: "/screenshots/Newsify/loading.png" },
   
  ];

  // DEMO VIDEO
  const demoVideo = "/videos/Newsify.mp4";
  
  return (
    <div className="relative text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black -z-10" />

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-extrabold"
        >
          Newsify
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto mt-6 text-xl opacity-90"
        >
          A modern Android News App built with Jetpack Compose, backend APIs,
          and offline-first architecture using Room.
        </motion.p>

        {/* ACTION BUTTONS */}
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="/newsapp.apk"
            target="_blank"
            className="px-6 py-3 bg-white text-black rounded-lg font-semibold"
          >
            📱 Download APK
          </a>

          <a
            href="https://github.com/Lakshay7206/greedygame-assignment"
            target="_blank"
            className="px-6 py-3 bg-black/40 border border-white/20 rounded-lg font-semibold"
          >
            💻 GitHub Repository
          </a>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-6xl mx-auto px-6 mt-24 mb-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          Tools & Technologies
        </h2>

        <div className="flex flex-wrap gap-3 justify-center text-sm">
          {[
            "Kotlin",
            "Jetpack Compose",
            "MVVM Architecture",
            "Coroutines",
            "StateFlow",
            "Retrofit",
            "Room Database",
            "REST APIs",
            "Clean Architecture",
            "Git & GitHub",
          ].map((tech, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full border border-gray-600 bg-black/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

{/* DEMO VIDEO */}
<section className="text-center mt-16">
  <a
    href={demoVideo}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 underline text-lg hover:text-blue-300"
  >
    ▶ Click here to watch demo video
  </a>
</section>


      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 mt-24">
        <h2 className="text-4xl font-bold text-center mb-10">Features</h2>

        <div className="grid md:grid-cols-2 gap-14 text-lg opacity-95">
          <ul className="space-y-3">
            <li>📰 Fetches news from backend API</li>
            <li>📶 Offline-first using Room database</li>
            <li>⚡ Fast & smooth UI with Compose</li>
            <li>🔄 Pull-to-refresh support</li>
            <li>🧠 Lifecycle-safe ViewModel usage</li>
          </ul>

          <ul className="space-y-3">
            <li>📄 Full article detail screen</li>
            <li>🛡️ Null-safe API handling</li>
            <li>📱 Single-Activity architecture</li>
            <li>🎯 Clean & scalable architecture</li>
            <li>🚫 No ANRs or UI blocking</li>
          </ul>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="max-w-6xl mx-auto px-6 mt-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Architecture</h2>
        <pre className="bg-black/40 p-6 rounded-xl inline-block text-left text-sm">
{`UI (Jetpack Compose)
   ↓
ViewModel
   ↓
Repository
   ↓
Room Database  ←→  Backend API`}
        </pre>
      </section>

      {/* SCREENSHOTS */}
      <section className="max-w-6xl mx-auto px-6 mt-24 mb-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          Screenshots
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {screenshots.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl p-4 cursor-pointer flex justify-center items-center h-[280px] overflow-hidden"
              onClick={() => setImageModal(item.img)}
            >
              <img
                src={item.img}
                className="h-full w-auto object-contain rounded-lg shadow-md"
              />
            </motion.div>
          ))}
        </div>
      </section>
{/* 
      IMAGE MODAL */}
      <AnimatePresence>
        {imageModal && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setImageModal(null)}
          >
            <motion.img
              src={imageModal}
              className="rounded-xl max-h-[90vh] w-auto"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
