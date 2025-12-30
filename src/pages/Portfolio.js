


import React, { useState } from "react";
import { motion } from "framer-motion";
import ThreeDev from "./ThreeDev";

export default function Portfolio() {
  const personal = {
    name: "Pooja Sheoran",
    role: "Full Stack App Developer",
    tagline: "Building scalable Android apps with clean architecture and robust backend systems.",
  };

  const Hero = {
    main: "I build reliable, maintainable products that scale.",
    subMain:
      "I’m a developer focused on building production-ready mobile apps. I care about clean architecture, testing, and developer experience.",
    quickStat: "built 4+ projects",
  };

  const contactInfo = {
    linkedin: "https://www.linkedin.com/in/pooja-sheoran-2b23b9292/",
    github: "https://github.com/PoojaSheoran12",
    resume: "/lakshay_resume.pdf",
    email: "sheoranpooja726@gmail.com",
  };

  const projects = [
    {
      id: 1,
      title: "MediLine - Faculty Management App",
      description:
        "A unified Android application for booking clinic appointments and managing medical service tickets",
      tech: ["Android", "Kotlin", "Firebase"],
      link: "/project/mediline",
    },
    {
      id: 2,
      title: "CampusCare – University Issue Reporting System",
      description:
        "A simple and efficient way for students to report problems within the campus.",
      tech: ["KotlinMultiPlatform", "Springboot"],
      link: "/project/CampusCare",
    },
    {
      id: 3,
      title: "Newsify – Jetpack Compose News App",
description:
  "A  news app using MVVM, Retrofit, and Room to fetch, cache, and display news articles with lifecycle-safe state management.",

      // title: "LocalLoop - Real-Time Hostel Communication Platform",
      // description:
      // " A real-time hostel community app where students can view or share events, announcements, news  posts",
      tech: ["Android", "Room","Retrofit"],
      link: "/project/Newsify",
    },
  ];

  const experience = [  
    {
      role: "Kotlin Multiplatform Developer",
      company: "BitePay",
      duration: "June – Aug 2025  OnSite",
      description:
        "Restaurant management platform for cafés, cloud kitchens, and restaurants to manage all their operations from one system",
    },
  
  ];

  const skillCategories = {
    "Android Development": [
      "Kotlin",
      "Jetpack Compose",
   "   KotlinMultiPlatform",
      "Coroutines",
      "StateFlow",
      "Hilt (DI)",
      "Room Database",
      "Retrofit",
      "Material 3",
      "Android Studio",
      "MVVM Architecture",
      "Clean Architecture",
    ],
    Backend: [
      "Spring Boot",
      "JPA / Hibernate",
      "REST APIs",
      "JWT Authentication",
      "MySQL",
      "MongoDB",
    ],
    Tools: ["Git", "Postman", "Firebase", "Gradle",],
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              {personal.name} <br></br>{personal.role}
            </h1>
            <p className="text-sm opacity-80 mt-1">{personal.tagline}</p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-indigo-600 text-white shadow-lg"
          >
            Contact
          </a>
        </header>

        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-16">
          {/* Left Text */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              {Hero.main}
            </h2>
            <p className="mt-4 max-w-xl opacity-85">{Hero.subMain}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-4 py-2 rounded-lg border border-gray-700 shadow-sm hover:shadow-md"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white shadow-sm hover:opacity-95"
              >
                Hire Me
              </a>
            </div>

            <div className="mt-6 text-sm opacity-80">
              <strong>Quick stats:</strong> {Hero.quickStat}
            </div>
          </motion.div>

          {/* Right: 3D Mascot */}
          {/* <div
            className="rounded-xl overflow-hidden shadow-xl"
            style={{
              backgroundImage: "url('/bg.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          >
            <ThreeDev />
          </div> */}

          <div
  className="relative rounded-xl shadow-lg overflow-visible"
  style={{
    backgroundImage: "url('/bg.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100%",
  }}
>
  <div
    className="absolute left-1/2 -translate-x-1/2"
    style={{
      bottom: "-160px",        // ⬅️ mascot overlaps OUT of the card
      width: "240px", 
      height: "340px",
      pointerEvents: "none"   // prevents OpenGL from eating pointer events
    }}
  >
    <ThreeDev />
  </div>

  {/* keep some padding inside card so text does not overlap */}
  <div className="h-64"></div>
</div>

        </section>

        {/* Projects */}
        <section id="projects" className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Selected Projects</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.a
                key={p.id}
                href={p.link}
                className="block p-5 rounded-2xl border border-gray-800 bg-[#111] shadow-lg hover:scale-[1.01] transition-transform"
              >
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="mt-2 text-sm opacity-80">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2 text-xs opacity-85">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded-full border border-gray-700 text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Experience</h3>
          <div className="space-y-6">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-gray-800 bg-[#111] shadow-lg"
              >
                <h4 className="font-semibold text-lg">
                  {exp.role} — {exp.company}
                </h4>
                <p className="text-xs opacity-70 mb-2">{exp.duration}</p>
                <p className="text-sm opacity-85">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Skills</h3>

          <div className="space-y-8">
            {Object.entries(skillCategories).map(([cat, items]) => (
              <div key={cat}>
                <h4 className="font-semibold mb-2">{cat}</h4>

                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full border border-gray-700 bg-[#111] shadow-sm text-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Contact</h3>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Contact Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form backend not set yet.");
              }}
              className="space-y-4 p-5 rounded-2xl border border-gray-800 bg-[#111] shadow-lg"
            >
              <input placeholder="Your name" className="p-3 rounded-lg border border-gray-700 bg-black w-full" />
              <input type="email" placeholder="Email" className="p-3 rounded-lg border border-gray-700 bg-black w-full" />
              <textarea placeholder="Message" rows={5} className="p-3 rounded-lg border border-gray-700 bg-black w-full" />
              <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white w-full">Send Message</button>
            </form>

            {/* Resume + Contact */}
            <div className="p-5 rounded-2xl border border-gray-800 bg-[#111] shadow-lg">
              <h4 className="font-semibold">Resume</h4>

              <div className="mt-4 flex gap-3">
                <a
                  href={contactInfo.resume}
                  download
                  className="px-4 py-2 rounded-lg border border-gray-700"
                >
                  Download CV
                </a>

                <a
                  href={contactInfo.linkedin}
                  className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-700"
                >
                  LinkedIn
                </a>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold">Email</h4>
                <p className="opacity-80">
                  <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                    {contactInfo.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t border-gray-800 pt-6 text-sm opacity-80">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div>© {new Date().getFullYear()} {personal.name} — Built with ❤️</div>

            <div className="flex gap-4">
              <a href={contactInfo.github}>GitHub</a>
              <a href={contactInfo.linkedin}>LinkedIn</a>
              <a href={`mailto:${contactInfo.email}`}>Email</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
