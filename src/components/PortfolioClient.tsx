"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import HeroScene from "@/components/HeroScene";

const quests = [
  {
    title: "Frontend Developer Intern",
    org: "Your Company Name",
    span: "2024 - Present",
    xp: "+1800 XP",
    detail: "Ship responsive pages, improve Core Web Vitals, and collaborate with product and backend teams.",
  },
  {
    title: "Freelance Web Developer",
    org: "Independent",
    span: "2023 - 2024",
    xp: "+1200 XP",
    detail: "Delivered portfolio and business websites with SEO-first architecture and maintainable code.",
  },
];

const projects = [
  {
    name: "Nebula Commerce",
    type: "Boss Fight",
    summary: "3D product discovery experience with smooth transitions and branded motion system.",
    stack: "Next.js / Three.js / Stripe",
    href: "#",
  },
  {
    name: "Command Center",
    type: "Co-op Mission",
    summary: "Analytics and role-based admin dashboard for operations and reporting teams.",
    stack: "React / TypeScript / Node",
    href: "#",
  },
  {
    name: "Portfolio V3",
    type: "Speed Run",
    summary: "Gamified storytelling website tuned for high performance and polished interaction.",
    stack: "R3F / Framer Motion / Vercel",
    href: "#",
  },
];

const skills = [
  { name: "React + Next.js", level: 92 },
  { name: "Three.js + R3F", level: 81 },
  { name: "TypeScript", level: 87 },
  { name: "Node APIs", level: 75 },
  { name: "UI Animation", level: 84 },
];

const badges = ["Lighthouse 95+", "A11y Focused", "Animation Systems", "Reusable UI Patterns"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function PortfolioClient() {
  return (
    <div className="game-root">
      <div className="scan-lines" />
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <a className="brand" href="#home">
          SHIVAM.EXE
        </a>
        <nav className="hidden items-center gap-5 text-sm md:flex">
          {["about", "experience", "projects", "skills", "contact"].map((item) => (
            <a className="menu-link" href={`#${item}`} key={item}>
              {item}
            </a>
          ))}
          <a className="chip-link" href="/resume">
            resume
          </a>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-24 md:px-10">
        <motion.section
          id="home"
          className="hero-grid"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-5">
            <p className="status">ONLINE | LEVEL 27 FRONTEND BUILDER</p>
            <h1 className="hero-title">Gamified Web Worlds with React + Three.js</h1>
            <p className="hero-copy">
              I design immersive digital experiences where storytelling, animation, and performance work together.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="game-btn game-btn-primary" href="#projects">
                Enter Project Arena
              </a>
              <a className="game-btn game-btn-secondary" href="#contact">
                Send Mission Brief
              </a>
            </div>
            <div className="hud-bar">
              <span>XP Progress</span>
              <div className="xp-track">
                <motion.div
                  className="xp-fill"
                  initial={{ width: 0 }}
                  animate={{ width: "78%" }}
                  transition={{ duration: 1.1, delay: 0.25 }}
                />
              </div>
            </div>
          </div>
          <div className="hero-canvas">
            <HeroScene />
          </div>
        </motion.section>

        <motion.section
          id="about"
          className="game-panel"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
        >
          <p className="panel-kicker">PLAYER BIO</p>
          <h2 className="panel-title">I build memorable interfaces that still stay practical to maintain.</h2>
          <p className="panel-copy">
            My style blends product-level clarity with game-like feedback loops. I care about motion language,
            accessibility, and architecture that stays affordable on Vercel.
          </p>
          <div className="badge-row">
            {badges.map((badge) => (
              <span className="badge" key={badge}>
                {badge}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="game-panel"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
        >
          <p className="panel-kicker">QUEST LOG</p>
          <h2 className="panel-title">Experience Timeline</h2>
          <div className="grid gap-4">
            {quests.map((quest, index) => (
              <motion.article
                className="quest-card"
                key={quest.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <p className="quest-meta">
                  {quest.span} · {quest.org}
                </p>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="quest-title">{quest.title}</h3>
                  <span className="quest-xp">{quest.xp}</span>
                </div>
                <p className="quest-detail">{quest.detail}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="game-panel"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
        >
          <p className="panel-kicker">PROJECT ARENA</p>
          <h2 className="panel-title">Featured Missions</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <motion.article className="project-card" whileHover={{ y: -6, rotateX: 4 }} key={project.name}>
                <p className="project-type">{project.type}</p>
                <h3 className="project-title">{project.name}</h3>
                <p className="project-summary">{project.summary}</p>
                <p className="project-stack">{project.stack}</p>
                <a className="project-link" href={project.href}>
                  inspect mission
                </a>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="game-panel"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
        >
          <p className="panel-kicker">SKILL TREE</p>
          <h2 className="panel-title">Current Build Stats</h2>
          <div className="grid gap-3">
            {skills.map((skill, index) => (
              <div className="skill-row" key={skill.name}>
                <div className="flex items-center justify-between text-sm">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-track">
                  <motion.div
                    className="skill-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.08, duration: 0.6 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="game-panel"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
        >
          <p className="panel-kicker">COMMS TERMINAL</p>
          <h2 className="panel-title">Ready for the next mission?</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <a className="contact-channel" href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="contact-channel" href="https://github.com/your-github" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="contact-channel" href="mailto:yourmail@gmail.com">
                yourmail@gmail.com
              </a>
            </div>
            <ContactForm />
          </div>
        </motion.section>
      </main>
    </div>
  );
}
