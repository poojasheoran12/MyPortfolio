import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Mediline() {
  const [imageModal, setImageModal] = useState(null);

  // USER PANEL SCREENS
  const userScreens = [
    { title: "User Login", img: "/screenshots/userLogin.jpeg" },
    { title: "Ticket Creation", img: "/screenshots/otp.jpeg" },
    { title: "Queue Tracking", img: "/screenshots/dept.jpeg" },
    { title: "Queue Tracking", img: "/screenshots/queue.jpeg" },
    { title: "Queue Tracking", img: "/screenshots/razorpay.jpeg" },
    { title: "Queue Tracking", img: "/screenshots/viewticket.jpeg" },
  ];

  // ADMIN PANEL SCREENS
  const adminScreens = [
    { title: "Admin Login", img: "/screenshots/adminLogin.jpeg" },
    { title: "Department Management", img: "/screenshots/admin.jpeg "},
     { title: "Ticket Management", img: "/screenshots/search.jpeg" },
    { title: "Ticket Management", img: "/screenshots/department.jpeg" },
     { title: "Ticket Management", img: "/screenshots/deptchange.jpeg" },
      { title: "Ticket Management", img: "/screenshots/adminTicket.jpeg" },

  ];

  // SUPER ADMIN SCREENS
  const superAdminScreens = [
    { title: "Email Invitation Screen", img: "/screenshots/superAdmin.jpeg" },
    { title: "Admin Invitation Form", img: "/screenshots/gmail.jpeg" },
    { title: "Admin Invitation Form", img: "/screenshots/invitation.jpeg" },
    { title: "Admin Invitation Form", img: "/screenshots/success.jpeg" },
  ];

  // VIDEOS
  const demoVideos = [
    "/videos/poojaUser.mp4",
    "/videos/poojaAdmin.mp4",
    "/videos/superAdmin.mp4",
    
  ];
  const videoLabels = ["User Panel", "Admin Panel", "Super Admin Panel"];

  return (
    <div className="relative text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-gray-900 -z-10" />

      {/* HERO SECTION */}
      <section className="text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-extrabold"
        >
          MediLine
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto mt-6 text-xl opacity-90"
        >
          A modern healthcare management platform for hospitals, admins, and patients.
        </motion.p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="/medilLine.apk"
            target="_blank"
            className="px-6 py-3 bg-white text-black rounded-lg font-semibold"
          >
            📱 Download APK
          </a>

          <a
            href="https://github.com/Lakshay7206/MediLine/tree/main/app/src/main/java/com/example/mediline"
            target="_blank"
            className="px-6 py-3 bg-black/40 border border-white/20 rounded-lg font-semibold"
          >
            💻 GitHub Repository
          </a>
        </div>

        {/* TOOLS & TECHNOLOGIES */}
<section className="max-w-6xl mx-auto px-6 mt-24 mb-20">
  <h2 className="text-4xl font-bold text-center mb-10">Tools & Technologies Used</h2>

  <div className="flex flex-wrap gap-3 justify-center text-sm">

    {/* Android */}
    <span className="px-4 py-2 rounded-full border border-gray-600 bg-black/20">
      Kotlin
    </span>
    <span className="px-4 py-2 rounded-full border border-gray-600 bg-black/20">
      Jetpack Compose
    </span>
    <span className="px-4 py-2 rounded-full border border-gray-600 bg-black/20">
      MVVM Architecture
    </span>
    <span className="px-4 py-2 rounded-full border border-gray-600 bg-black/20">
      Coroutines & Flow
    </span>
    <span className="px-4 py-2 rounded-full border border-gray-600 bg-black/20">
      Room Database
    </span>
    <span className="px-4 py-2 rounded-full border border-gray-600 bg-black/20">
      Retrofit
    </span>
  

    {/* Cloud / Misc */}
    <span className="px-4 py-2 rounded-full border border-gray-600 bg-black/20">
      FireBase
    </span>
    <span className="px-4 py-2 rounded-full border border-gray-600 bg-black/20">
      Razorpay Payment Gateway
    </span>
    <span className="px-4 py-2 rounded-full border border-gray-600 bg-black/20">
      REST APIs
    </span>
    <span className="px-4 py-2 rounded-full border border-gray-600 bg-black/20">
      Render Deployment
    </span>
    <span className="px-4 py-2 rounded-full border border-gray-600 bg-black/20">
      Git & GitHub
    </span>
  </div>
</section>


        {/* DEMO VIDEOS */}
        <div className="grid md:grid-cols-3 gap-6 mt-14 max-w-5xl mx-auto">
          {demoVideos.map((video, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(video, "_blank")}
              className="bg-white/10 border border-white/10 backdrop-blur-xl p-4 rounded-xl cursor-pointer"
            >
              <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center text-lg font-semibold">
                🎬 {videoLabels[i]}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-6xl mx-auto px-6 mt-24">
        <h2 className="text-4xl font-bold text-center mb-10">Features</h2>

        <div className="grid md:grid-cols-2 gap-14 text-lg opacity-95">

          {/* USER PANEL */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-blue-300">🧑‍⚕️ User Panel</h3>
            <ul className="space-y-3">
              <li>✅ Instant medical ticket generation</li>
              <li>🔄 Real-time queue tracking</li>
              <li>📄 PDF ticket downloads</li>
              <li>🕑 Visit history tracking</li>
              <li>💳 Razorpay payments</li>
              <li>📶 Offline support via Room DB</li>
            </ul>
          </div>

          {/* ADMIN PANEL */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-blue-300">🖥️ Admin Panel</h3>
            <ul className="space-y-3">
              <li>🔁 Reassign, skip, complete, or cancel tickets</li>
              <li>➕ Create & manage tickets</li>
              <li>🏥 Department management</li>
              <li>📶 Offline-first operations</li>
            </ul>
          </div>

          {/* SUPER ADMIN */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-3 text-blue-300">🔐 Super Admin – Secure Onboarding</h3>
            <ul className="space-y-3">
              <li>📧 Send secure time-sensitive invitations</li>
              <li>⚙️ Backend token validation</li>
              <li>🛡️ Actions fully logged</li>
              <li>🚀 No manual account creation</li>
              <li>📬 Branded professional email templates</li>
            </ul>
          </div>

        </div>
      </section>


      {/* SCREENSHOTS */}
      <section className="max-w-6xl mx-auto px-6 mt-24 mb-20">
       

        {/* USER */}
        <h3 className="text-3xl font-semibold text-blue-300 mb-6">🧑‍⚕️ User Screens</h3>
        <div className="grid md:grid-cols-6 gap-6 mb-16">
          {userScreens.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
             className=" rounded-xl p-4 cursor-pointer
                         flex justify-center items-center h-[300px] overflow-hidden"
              onClick={() => setImageModal(item.img)}
            >
              <img src={item.img} className="h-full w-auto object-contain rounded-lg shadow-md" />
            </motion.div>
          ))}
        </div>

        {/* ADMIN */}
        <h3 className="text-3xl font-semibold text-blue-300 mb-6">🖥️ Admin Screens</h3>
        <div className="grid md:grid-cols-6  mb-16">
          {adminScreens.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className=" rounded-xl p-4 cursor-pointer
                         flex justify-center items-center h-[300px] overflow-hidden"
              onClick={() => setImageModal(item.img)}
            >
              <img src={item.img} className="h-full w-auto object-contain rounded-lg shadow-md" />
            </motion.div>
          ))}
        </div>

        {/* SUPER ADMIN */}
        <h3 className="text-3xl font-semibold text-blue-300 mb-6">🔐 Super Admin Screens</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {superAdminScreens.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className=" rounded-xl p-4 cursor-pointer
                         flex justify-center items-center h-[300px] overflow-hidden"
              onClick={() => setImageModal(item.img)}
            >
              <img src={item.img} className="h-full w-auto object-contain rounded-lg shadow-md" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMAGE MODAL (FULL SIZE) */}
      <AnimatePresence>
        {imageModal && (
          <motion.div
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setImageModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] flex justify-center"
            >
              <img
                src={imageModal}
                className="rounded-xl shadow-2xl max-h-[90vh] w-auto object-contain"
              />

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setImageModal(null)}
                className="absolute top-4 right-4 bg-white/30 hover:bg-white/50 text-white rounded-full 
                           w-10 h-10 text-2xl font-bold flex items-center justify-center backdrop-blur-xl"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}



      {/* FEATURES SECTION */}
      <section className="max-w-6xl mx-auto px-6 mt-24">
        <h2 className="text-4xl font-bold text-center mb-10">Features</h2>

        <div className="grid md:grid-cols-2 gap-14 text-lg opacity-95">

          {/* USER PANEL */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-blue-300">🧑‍⚕️ User Panel</h3>
            <ul className="space-y-3">
              <li>✅ Instant medical ticket generation</li>
              <li>🔄 Real-time queue tracking</li>
              <li>📄 PDF ticket downloads</li>
              <li>🕑 Visit history tracking</li>
              <li>💳 Razorpay payments</li>
              <li>📶 Offline support via Room DB</li>
            </ul>
          </div>

          {/* ADMIN PANEL */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-blue-300">🖥️ Admin Panel</h3>
            <ul className="space-y-3">
              <li>🔁 Reassign, skip, complete, or cancel tickets</li>
              <li>➕ Create & manage tickets</li>
              <li>🏥 Department management</li>
              <li>📶 Offline-first operations</li>
            </ul>
          </div>

          {/* SUPER ADMIN */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-3 text-blue-300">🔐 Super Admin – Secure Onboarding</h3>
            <ul className="space-y-3">
              <li>📧 Send secure time-sensitive invitations</li>
              <li>⚙️ Backend token validation</li>
              <li>🛡️ Actions fully logged</li>
              <li>🚀 No manual account creation</li>
              <li>📬 Branded professional email templates</li>
            </ul>
          </div>

        </div>
      </section>
