import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CampusCare() {
  const [imageModal, setImageModal] = useState(null);

  const studentScreens = [
    { title: "Dashboard", img: "/screenshots/CampusCare/CampusDashboard.jpeg" },
    { title: "Report Issue", img: "/screenshots/CampusCare/ReportTrash.jpeg" },
    { title: "Trash Detection", img: "/screenshots/CampusCare/TrasDetection.jpeg" },
    { title: "Success", img: "/screenshots/CampusCare/CampusCareSuccess.jpeg" },
  ];

  const techTags = [
    "Kotlin Multiplatform",
    "Spring Boot",
    "CameraX",
    "Map Integration",
    "Realtime Notifications",
    "REST APIs",
    "Postgres",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-800 to-slate-900 text-white">

      {/* ------------------------------------------------------
            HERO SECTION
      ------------------------------------------------------ */}
      <section className="py-24 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          CampusCare (TrashGenie)
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-6 text-lg md:text-xl opacity-90 leading-relaxed"
        >
          Capture campus issues, attach photos, submit reports, and streamline resolutions.
        </motion.p>

        <div className="flex justify-center gap-4 mt-10">
          <a
            href="/CampusCare.apk"
            className="px-6 py-3 bg-white text-black rounded-lg font-semibold shadow-lg"
          >
            📱 Download APK
          </a>

          <a
            href="https://github.com/Lakshay7206/CampusCare/tree/master/src/main/kotlin/com/example/CampusCare"
            className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg font-semibold"
          >
            💻 GitHub Repository
          </a>
        </div>
      </section>

      {/* ------------------------------------------------------
            TECHNOLOGIES
      ------------------------------------------------------ */}
      <section className="max-w-5xl mx-auto px-6 mt-16">
        <div className="bg-white text-black rounded-2xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-center mb-8">Technologies Used</h2>

          <div className="flex flex-wrap justify-center gap-3">
            {techTags.map((t, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-gray-200 text-sm font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------
            SIDE-BY-SIDE VIDEO + TEXT
      ------------------------------------------------------ */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <div className="bg-white text-black rounded-2xl shadow-xl p-10 grid md:grid-cols-2 gap-10 items-center">

          {/* VIDEO */}
          <div className="flex justify-center">
            <video
              src="/screenshots/CampusCare/CampusCare.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-xl shadow-lg"
              style={{ width: "60%", height:"60%", maxWidth: "420px" }}
            ></video>
          </div>

          {/* TEXT + SUMMARY */}
          <div>
            <h3 className="text-3xl font-bold mb-4">How CampusCare Works</h3>
            <p className="text-lg leading-relaxed opacity-80">
              CampusCare allows students to report issues instantly by capturing photos,
              validating issue types, and tagging locations. The admin panel manages
              incoming reports, assigns tasks, updates statuses, and maintains a smooth
              resolution workflow. This demo video demonstrates the entire reporting
              process inside the app.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------
            FEATURES SECTION
      ------------------------------------------------------ */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <div className="bg-white text-black rounded-2xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>

          <div className="grid md:grid-cols-2 gap-12 text-lg leading-relaxed">

            <div>
              <h4 className="text-2xl font-semibold text-indigo-600 mb-3">📸 Issue Reporting</h4>
              <ul className="space-y-2">
                <li>• Capture or upload photos using CameraX</li>
                <li>• Auto-validation workflow for issue type</li>
                <li>• Add location for precise mapping</li>
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-indigo-600 mb-3">🗺️ Map & Tracking</h4>
              <ul className="space-y-2">
                <li>• Interactive campus map markers</li>
                <li>• Filters by severity, type, status</li>
                <li>• Detailed marker info on click</li>
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-indigo-600 mb-3">🔔 Real-time Notifications</h4>
              <ul className="space-y-2">
                <li>• Instant status updates</li>
                <li>• Notifications for urgent issues</li>
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-indigo-600 mb-3">🧑‍💼 Admin Dashboard</h4>
              <ul className="space-y-2">
                <li>• Validate, assign and manage tasks</li>
                <li>• Track completion with notes</li>
                <li>• Export logs</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------
            STUDENT SCREENSHOTS
      ------------------------------------------------------ */}
      <section className="max-w-6xl mx-auto px-6 mt-20 mb-20">
        <div className="bg-white text-black rounded-2xl shadow-xl p-10">
          <h3 className="text-2xl font-semibold text-center mb-8">Student Screens</h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {studentScreens.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl p-3 cursor-pointer bg-gray-100 h-[260px] flex justify-center items-center"
                onClick={() => setImageModal(item.img)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full object-contain rounded-md"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------
            IMAGE MODAL
      ------------------------------------------------------ */}
      <AnimatePresence>
        {imageModal && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setImageModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[90vh] max-w-4xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={imageModal}
                className="rounded-xl shadow-2xl max-h-[90vh] mx-auto"
              />

              <button
                onClick={() => setImageModal(null)}
                className="absolute top-3 right-3 bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/30"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ------------------------------------------------------
            FOOTER
      ------------------------------------------------------ */}
      <footer className="py-10 text-center text-sm opacity-80">
        <p>Built with Kotlin Multiplatform, Spring Boot, CameraX & Map Integration.</p>
      </footer>
    </div>
  );
}
