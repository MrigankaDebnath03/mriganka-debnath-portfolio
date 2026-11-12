"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, Github, Linkedin, Menu,
  Mail, MapPin, Radio, X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent } from "react";
import { experience, type ExperienceTrack } from "@/data/experience";
import { projects, type Project, type ProjectCategory } from "@/data/projects";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";

const navItems = [
  { href: "#terminal", label: "Terminal" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "/Mriganka-Debnath-Resume.pdf", label: "Resume" },
  { href: "#contact", label: "Contact" },
];
const projectFilters: Array<"All" | ProjectCategory> = ["All", "Systems & Backend", "AI & DevTools", "Geospatial & Web"];
const tracks: ExperienceTrack[] = ["Enterprise", "Research", "Community"];
const accentClass = { green: "bg-green-400", yellow: "bg-yellow-300", coral: "bg-rose-300", indigo: "bg-indigo-400" };
const reduceMotion = { duration: 0 };

function WindowBar({ path, right }: { path: string; right?: React.ReactNode }) {
  return (
    <div className="window-bar">
      <span className="window-dot bg-rose-400" /><span className="window-dot bg-yellow-300" /><span className="window-dot bg-green-400" />
      <span className="mono ml-2 min-w-0 flex-1 truncate text-[10px] font-semibold text-neutral-700">{path}</span>
      {right}
    </div>
  );
}

function TerminalWidget() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>(["mriganka@fedora:~$ help", "Commands: cat skills.txt · run tests · curl experience"]);
  const inputRef = useRef<HTMLInputElement>(null);

  function runCommand(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = command.trim().toLowerCase();
    if (!value) return;
    const response = value === "cat skills.txt"
      ? "Java · TypeScript · Spring Boot · AWS Lambda · React · C++ · MCP"
      : value === "run tests"
        ? "portfolio interface: ready · links: configured · terminal: simulation mode"
        : value === "curl experience"
          ? "Labcorp | IIT Madras | Samsung R&D | Jivan Health | Chakralaya Analytics"
          : "command not found. Try: cat skills.txt, run tests, curl experience";
    setHistory((previous) => [...previous.slice(-5), `mriganka@fedora:~$ ${value}`, response]);
    setCommand("");
  }

  return (
    <section id="terminal" className="neo-box overflow-hidden" aria-label="Interactive terminal">
      <WindowBar path="~/mriganka/session.sh" right={<span className="mono text-[9px] text-neutral-500">bash</span>} />
      <div className="bg-[#171a17] p-4 text-[11px] text-green-300 sm:p-5">
        <div className="mb-3 flex items-center justify-between border-b border-white/15 pb-2 mono text-[9px] text-neutral-400"><span>WELCOME TO MY WORKSPACE</span><span>READ-ONLY SESSION</span></div>
        <div className="mb-4 max-h-24 space-y-1 overflow-y-auto mono leading-relaxed" aria-live="polite">
          {history.map((line, index) => <p key={`${index}-${line}`} className={line.startsWith("mriganka@") ? "text-green-300" : "text-neutral-300"}>{line}</p>)}
        </div>
        <form onSubmit={runCommand} className="flex items-center gap-2">
          <span className="mono text-green-400" aria-hidden="true">$</span>
          <label className="sr-only" htmlFor="terminal-command">Enter a portfolio command</label>
          <input ref={inputRef} id="terminal-command" value={command} onChange={(event) => setCommand(event.target.value)} className="min-w-0 flex-1 border-0 bg-transparent py-1 mono text-xs text-white outline-none placeholder:text-neutral-600 focus:ring-0" placeholder="try: cat skills.txt" autoComplete="off" spellCheck={false} />
          <button type="submit" className="rounded-sm p-1 text-green-300 hover:bg-white/10" aria-label="Run command"><ArrowRight size={16} /></button>
        </form>
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return (
    <article className="neo-box flex min-w-0 flex-col overflow-hidden transition-transform hover:-translate-y-1">
      <div className="h-2 border-b-2 border-black" aria-hidden="true"><div className={`h-full w-24 ${accentClass[project.accent]}`} /></div>
      <WindowBar path={`~/projects/${project.file}`} right={<span className="mono text-[9px] text-neutral-500">{project.category}</span>} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="max-w-[22ch] text-xl font-bold leading-tight">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-neutral-700">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => <span key={item} className="mono border border-black/25 bg-paper px-2 py-1 text-[9px]">{item}</span>)}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          <button type="button" className="neo-btn" onClick={() => onOpen(project)}>Open details <ArrowUpRight size={14} /></button>
          {project.githubUrl && <a className="mono inline-flex items-center gap-1 text-xs font-semibold underline decoration-2 underline-offset-4" href={project.githubUrl} target="_blank" rel="noreferrer"><Github size={13} />GitHub <ArrowUpRight size={13} /></a>}
          {project.demoUrl && <a className="mono inline-flex items-center gap-1 text-xs font-semibold underline decoration-2 underline-offset-4" href={project.demoUrl} target="_blank" rel="noreferrer">Live platform <ArrowUpRight size={13} /></a>}
        </div>
      </div>
    </article>
  );
}

function TimelineEntry({ children, showLine = true }: { children: React.ReactNode; showLine?: boolean }) {
  return (
    <div className="relative grid grid-cols-[16px_minmax(0,1fr)] gap-4">
      <div className="relative flex justify-center">
        {showLine && <span className="absolute bottom-[-1rem] left-1/2 top-0 w-0.5 -translate-x-1/2 bg-black" aria-hidden="true" />}
        <span className="relative z-10 mt-5 h-4 w-4 shrink-0 border-2 border-black bg-yellow-300" aria-hidden="true" />
      </div>
      <div className="relative before:absolute before:-left-4 before:top-7 before:h-0.5 before:w-4 before:bg-black">{children}</div>
    </div>
  );
}

export function Portfolio() {
  const prefersReducedMotion = useReducedMotion();
  const [activeTrack, setActiveTrack] = useState<ExperienceTrack>("Enterprise");
  const [activeFilter, setActiveFilter] = useState<(typeof projectFilters)[number]>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<{ src: string; organization: string } | null>(null);
  const [toast, setToast] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);
  const dialogTriggerRef = useRef<HTMLElement | null>(null);
  const filteredProjects = useMemo(() => activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter), [activeFilter]);
  const visibleExperience = experience.filter((item) => item.track === activeTrack);

  useEffect(() => {
    if (!selectedProject && !selectedCertificate) {
      dialogTriggerRef.current?.focus();
      return;
    }
    dialogRef.current?.querySelector<HTMLButtonElement>("[data-dialog-close]")?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setSelectedProject(null);
      setSelectedCertificate(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedProject, selectedCertificate]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 2400);
    return () => window.clearTimeout(timer);
  }, [toast]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setToast("Email copied to clipboard!");
    } catch {
      window.location.href = `mailto:${profile.email}`;
      setToast("Opening your email app.");
    }
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 border-b-2 border-black bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1440px] items-center gap-3 px-4 py-2.5 sm:px-7 lg:px-10">
          <a href="#home" className="mono flex shrink-0 items-center gap-2 text-xs font-bold" aria-label="Mriganka Debnath, home"><Image src="/profile-cutout.png" alt="" width={112} height={112} className="h-7 w-7 border-2 border-black object-cover" /><span className="hidden sm:inline">mriganka.dev</span></a>
          <button type="button" className="ml-auto inline-flex h-11 w-11 shrink-0 items-center justify-center border-2 border-black bg-white sm:hidden" aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isMenuOpen} aria-controls="primary-navigation" onClick={() => setIsMenuOpen((open) => !open)}>
            {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
          <nav id="primary-navigation" aria-label="Main navigation" className={`${isMenuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col border-b-2 border-black bg-paper px-4 py-2 shadow-[0_4px_0_rgba(23,23,23,0.12)] sm:static sm:flex sm:flex-1 sm:flex-row sm:items-center sm:justify-end sm:gap-1 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none`}>
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="mono flex min-h-11 items-center px-3 text-xs font-semibold hover:bg-yellow-200 sm:min-h-0 sm:shrink-0 sm:px-3 sm:py-1.5">{item.label}</a>)}
          </nav>
        </div>
      </header>

      <main id="home" className="mx-auto max-w-[1440px] px-4 pb-14 pt-24 sm:px-7 sm:pt-28 lg:px-10">
        <section className="grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
          <motion.div initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }} animate={{ opacity: 1, y: 0 }} transition={prefersReducedMotion ? reduceMotion : { duration: .45 }} className="neo-box overflow-hidden">
            <WindowBar path="/home/mriganka/profile.txt" right={<span className="mono text-[9px] text-neutral-500">PROFILE / 2026</span>} />
            <div className="p-5 sm:p-8 lg:p-10">
              <div className="mb-7 flex flex-wrap items-center gap-2">
                <span className="mono inline-flex items-center gap-1.5 border-2 border-black bg-green-300 px-2.5 py-1 text-[10px] font-bold"><span className="h-2 w-2 rounded-full bg-green-700" />{profile.status}</span>
                <span className="mono inline-flex items-center gap-1 border border-black/20 bg-white px-2 py-1 text-[9px] font-semibold"><Check size={12} />VIT CHENNAI / 2026</span>
              </div>
              <p className="mono text-[10px] font-bold uppercase text-neutral-500">Software Engineer <span className="px-1 text-rose-500">{"//"}</span> {profile.location}</p>
              <h1 className="mt-4 max-w-[15ch] text-4xl font-bold leading-[.99] sm:text-5xl lg:text-7xl">Building high-performance backend systems, serverless cloud engines &amp; <span className="underline decoration-[6px] decoration-yellow-300 underline-offset-4">developer tools.</span></h1>
              <p className="mt-6 max-w-[58ch] text-base leading-7 text-neutral-700 sm:text-lg">Backend systems, serverless cloud architecture, geospatial platforms, and developer tooling. I turn complex technical problems into practical software.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="neo-btn bg-yellow-300" href={profile.links.github} target="_blank" rel="noreferrer"><Github size={15} />GitHub <ArrowUpRight size={13} /></a>
                <a className="neo-btn" href={profile.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} />LinkedIn <ArrowUpRight size={13} /></a>
                <a className="neo-btn" href={`mailto:${profile.email}`}><Mail size={15} />Email me</a>
                <a className="neo-btn" href="/Mriganka-Debnath-Resume.pdf" download><ArrowDown size={15} />Download CV</a>
                <a className="neo-btn" href={`tel:${profile.phone.replaceAll(" ", "")}`}><Radio size={15} />Call</a>
              </div>
            </div>
          </motion.div>
          <div className="flex flex-col gap-5">
            <TerminalWidget />
            <div className="grid grid-cols-2 gap-4">
              <div className="neo-box bg-yellow-300 p-4"><span className="mono text-[9px] font-bold">EDUCATION / CGPA</span><div className="mt-3 text-3xl font-bold">8.74</div><div className="mono mt-1 text-[9px]">VIT CHENNAI</div></div>
              <div className="neo-box bg-indigo-400 p-4"><span className="mono text-[9px] font-bold">WORK MODES</span><div className="mt-3 text-3xl font-bold">03</div><div className="mono mt-1 text-[9px]">ENTERPRISE / R&D / PUBLIC</div></div>
            </div>
            <div className="neo-box bg-white p-4">
              <div className="flex items-center gap-2"><MapPin size={15} /><span className="mono text-[10px] font-semibold">CURRENT BASE</span></div>
              <p className="mt-2 text-sm font-bold">Raiganj, India</p>
              <p className="mono mt-1 text-[9px] text-neutral-500">AVAILABLE FOR SWE / BACKEND / SYSTEMS ROLES</p>
              <p className="mono mt-1 text-[9px] font-semibold text-neutral-700">WILLING TO RELOCATE ANYWHERE IN INDIA</p>
              <Image src="/profile-seaside.jpg" alt="Mriganka by the sea" width={1280} height={960} className="mt-4 aspect-[4/3] w-full border-2 border-black object-cover object-[58%_42%]" />
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 pt-20 sm:pt-28">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-5">
            <div><p className="mono text-[10px] font-bold text-rose-700">02 / CAREER LOG</p><h2 className="mt-2 text-3xl font-bold sm:text-4xl">Experience</h2></div>
            <div className="flex border-2 border-black bg-white p-1" role="tablist" aria-label="Experience category">
              {tracks.map((track) => <button key={track} id={`experience-tab-${track}`} role="tab" type="button" aria-controls="experience-panel" aria-selected={activeTrack === track} tabIndex={activeTrack === track ? 0 : -1} onKeyDown={(event) => { if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return; event.preventDefault(); const direction = event.key === "ArrowRight" ? 1 : -1; const nextIndex = (tracks.indexOf(track) + direction + tracks.length) % tracks.length; setActiveTrack(tracks[nextIndex]); document.getElementById(`experience-tab-${tracks[nextIndex]}`)?.focus(); }} onClick={() => setActiveTrack(track)} className={`px-3 py-2 mono text-[10px] font-bold ${activeTrack === track ? "bg-green-300" : "hover:bg-neutral-100"}`}>{track}</button>)}
            </div>
          </div>
          <div id="experience-panel" role="tabpanel" aria-labelledby={`experience-tab-${activeTrack}`} className="grid gap-4 lg:grid-cols-2">
            {visibleExperience.map((item, index) => <motion.article key={item.organization} initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }} animate={{ opacity: 1, y: 0 }} transition={prefersReducedMotion ? reduceMotion : { delay: index * .06 }} className="neo-box overflow-hidden">
              <div className={`h-2 border-b-2 border-black ${accentClass[item.accent]}`} />
              <WindowBar path={`/home/mriganka/experiences/${item.organization.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}`} right={<span className="mono text-[9px] text-neutral-500">{item.dates}</span>} />
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-xl font-bold">{item.organization}</h3><span className="mono text-[10px] font-semibold">{item.role}</span></div>
                <p className="mono mt-2 text-[10px] text-neutral-500">{item.location}</p>
                <p className="mt-4 text-sm leading-6 text-neutral-700">{item.summary}</p>
                <ul className="mt-4 space-y-2">{item.highlights.map((highlight) => <li key={highlight} className="flex gap-2 text-sm leading-5"><Check className="mt-0.5 shrink-0 text-green-700" size={15} /><span>{highlight}</span></li>)}</ul>
                {item.certificateUrl && <button className="neo-btn mt-5" type="button" onClick={(event) => { dialogTriggerRef.current = event.currentTarget; setSelectedProject(null); setSelectedCertificate({ src: item.certificateUrl!, organization: item.organization }); }}>View certificate <ArrowUpRight size={14} /></button>}
              </div>
            </motion.article>)}
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 pt-20 sm:pt-28">
          <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="mono text-[10px] font-bold text-indigo-700">03 / SELECTED WORK</p><h2 className="mt-2 text-3xl font-bold sm:text-4xl">Projects & experiments</h2></div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
              {projectFilters.map((filter) => <button key={filter} type="button" aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)} className={`border-2 border-black px-3 py-2 mono text-[10px] font-bold transition-all ${activeFilter === filter ? "bg-black text-white shadow-[2px_2px_0_#facc15]" : "bg-white hover:bg-yellow-100"}`}>{filter}</button>)}
            </div>
          </div>
          <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => <motion.div key={project.title} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: .97 }} transition={prefersReducedMotion ? reduceMotion : { duration: .2 }}><ProjectCard project={project} onOpen={(value) => { dialogTriggerRef.current = document.activeElement as HTMLElement; setSelectedCertificate(null); setSelectedProject(value); }} /></motion.div>)}
            </AnimatePresence>
          </motion.div>
        </section>

        <section id="skills" className="scroll-mt-24 pt-20 sm:pt-28">
          <div className="mb-6"><p className="mono text-[10px] font-bold text-green-800">04 / TOOLKIT</p><h2 className="mt-2 text-3xl font-bold sm:text-4xl">Skills matrix</h2></div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => <article key={group.label} className="neo-box overflow-hidden">
              <WindowBar path={`~/skills/${group.label.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}.json`} right={<span className={`mono grid h-6 w-6 place-items-center border border-black text-[9px] font-bold ${accentClass[group.color]}`}>{group.icon}</span>} />
              <div className="p-5"><h3 className="text-lg font-bold">{group.label}</h3><div className="mt-4 flex flex-wrap gap-2">{group.items.map((skill) => <span key={skill} className="border border-black bg-white px-2.5 py-1.5 mono text-[10px] font-medium shadow-[2px_2px_0_#171717]">{skill}</span>)}</div></div>
            </article>)}
          </div>
        </section>

        <section id="education" className="scroll-mt-24 pt-20 sm:pt-28">
          <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
            <div><p className="mono text-[10px] font-bold text-indigo-700">05 / FOUNDATION</p><h2 className="mt-2 text-3xl font-bold sm:text-4xl">Education</h2><p className="mt-4 max-w-md text-sm leading-6 text-neutral-700">Engineering foundations in computing, electronics, and embedded systems.</p></div>
            <div className="space-y-4">
            <TimelineEntry showLine={false}>
            <article className="neo-box flex flex-col overflow-hidden">
              <WindowBar path="~/education/vit-chennai.record" right={<span className="mono text-[9px]">2022 — 2026</span>} />
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg font-bold leading-tight">{profile.education.institution}</h3>
                <p className="mt-2 text-sm leading-5 text-neutral-700">{profile.education.degree}</p>
                <span className="mt-4 self-start border-2 border-black bg-yellow-300 px-3 py-2 mono text-xs font-bold">CGPA {profile.education.cgpa}</span>
                <div className="mt-5 border-t border-black/20 pt-4"><p className="mono text-[9px] font-bold text-neutral-500">CORE COURSEWORK</p><div className="mt-3 flex flex-wrap gap-2">{profile.education.coursework.map((course) => <span key={course} className="bg-neutral-100 px-2.5 py-1.5 text-xs">{course}</span>)}</div></div>
              </div>
            </article>
            </TimelineEntry>
            {profile.education.priorEducation.map((item) => <TimelineEntry key={item.institution} showLine={false}>
            <article className="neo-box flex flex-col overflow-hidden">
              <WindowBar path={`~/education/${item.institution.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}.record`} right={<span className="mono text-[9px]">{item.dates}</span>} />
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="mono text-[9px] font-bold text-indigo-700">PREVIOUS EDUCATION</p>
                <h3 className="mt-3 text-lg font-bold leading-tight">{item.institution}</h3>
                {item.program && <p className="mt-3 text-sm leading-5 text-neutral-700">{item.program}</p>}
                <div className="mt-auto border-t border-black/20 pt-5"><span className="inline-flex border-2 border-black bg-yellow-300 px-3 py-2 mono text-xs font-bold">GRADE {item.grade}</span></div>
              </div>
            </article></TimelineEntry>)}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 pt-20 sm:pt-28">
          <div className="neo-box overflow-hidden">
            <WindowBar path="~/mriganka/contact --open" right={<span className="mono text-[9px] text-neutral-500">SESSION: READY</span>} />
            <div className="grid gap-7 bg-yellow-300 p-5 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:p-10">
              <div><p className="mono text-[10px] font-bold">06 / ESTABLISH CONNECTION</p><h2 className="mt-3 max-w-[16ch] text-4xl font-bold leading-tight sm:text-5xl">Let’s build something that matters.</h2><p className="mt-4 max-w-xl text-sm leading-6">For software engineering roles, systems work, or a thoughtful technical conversation, send me a note.</p></div>
              <div className="flex flex-wrap gap-3">
                <button className="neo-btn bg-white" type="button" onClick={copyEmail}><Mail size={15} />Copy email</button>
                <a className="neo-btn bg-white" href={`tel:${profile.phone.replaceAll(" ", "")}`}><Radio size={15} />{profile.phone}</a>
                <a className="neo-btn bg-white" href={profile.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} />LinkedIn</a>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-black bg-[#171a17] px-5 py-3 text-green-300 sm:px-8">
              <span className="mono text-[10px]">mriganka@fedora:~$ sudo shutdown -h now --stay-in-touch</span>
              <a href="#home" className="grid h-8 w-8 place-items-center border border-green-300/60 hover:bg-white/10" aria-label="Back to top"><ArrowDown className="rotate-180" size={14} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-black bg-paper">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-4 py-5 sm:px-7 lg:px-10">
          <span className="mono text-[9px] text-neutral-500">© {new Date().getFullYear()} MRIGANKA DEBNATH</span>
          <div className="flex gap-4 mono text-[9px]"><a className="hover:underline" href={profile.links.github} target="_blank" rel="noreferrer">GITHUB</a><a className="hover:underline" href={profile.links.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a><a className="hover:underline" href={`mailto:${profile.email}`}>EMAIL</a></div>
        </div>
      </footer>

      <AnimatePresence>
        {(selectedProject || selectedCertificate) && <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/55 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target !== event.currentTarget) return; setSelectedProject(null); setSelectedCertificate(null); }}>
          <motion.section ref={dialogRef} tabIndex={-1} onKeyDown={(event) => { if (event.key !== "Tab") return; const focusable = event.currentTarget.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"); const first = focusable[0]; const last = focusable[focusable.length - 1]; if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); } }} role="dialog" aria-modal="true" aria-labelledby="dialog-title" className={`neo-box max-h-[85vh] w-full overflow-y-auto ${selectedCertificate ? "max-w-5xl" : "max-w-2xl"}`} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 12, opacity: 0 }} transition={prefersReducedMotion ? reduceMotion : { type: "spring", stiffness: 260, damping: 24 }}>
            <WindowBar path={selectedProject ? `~/projects/${selectedProject.file}` : `~/certificates/${selectedCertificate?.organization.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}.jpg`} right={<button type="button" onClick={() => { setSelectedProject(null); setSelectedCertificate(null); }} className="grid h-7 w-7 place-items-center border border-black bg-white hover:bg-rose-200" aria-label={selectedCertificate ? "Close certificate" : "Close project details"} data-dialog-close><X size={14} /></button>} />
            {selectedCertificate ? <div className="p-4 sm:p-6"><p className="mono text-[10px] font-bold text-indigo-700">EXPERIENCE / CERTIFICATE</p><h2 id="dialog-title" className="mt-2 text-2xl font-bold">{selectedCertificate.organization}</h2><div className="relative mt-4 h-[65vh] max-h-[760px] w-full"><Image src={selectedCertificate.src} alt={`${selectedCertificate.organization} experience certificate`} fill sizes="(max-width: 768px) 100vw, 80vw" className="object-contain" /></div></div> : selectedProject && <div className="p-5 sm:p-8"><p className="mono text-[10px] font-bold text-indigo-700">{selectedProject.category}</p><h2 id="dialog-title" className="mt-2 text-3xl font-bold">{selectedProject.title}</h2><p className="mt-4 text-base leading-7 text-neutral-700">{selectedProject.summary}</p><div className="mt-6 border-l-4 border-yellow-400 pl-4"><p className="mono text-[9px] font-bold">ENGINEERING CHALLENGE</p><p className="mt-2 text-sm leading-6">{selectedProject.challenge}</p></div><ul className="mt-6 space-y-3">{selectedProject.details.map((detail) => <li key={detail} className="flex gap-2 text-sm leading-6"><Check className="mt-1 shrink-0 text-green-700" size={15} /><span>{detail}</span></li>)}</ul><div className="mt-6 flex flex-wrap gap-2">{selectedProject.stack.map((item) => <span key={item} className="border border-black px-2 py-1 mono text-[10px]">{item}</span>)}</div><div className="mt-7 flex flex-wrap gap-3">{selectedProject.githubUrl && <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="neo-btn"><Github size={14} />GitHub project <ArrowUpRight size={14} /></a>}{selectedProject.demoUrl && <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer" className="neo-btn bg-yellow-300">Visit live platform <ArrowUpRight size={14} /></a>}</div></div>}
          </motion.section>
        </motion.div>}
      </AnimatePresence>
      <AnimatePresence>{toast && <motion.div role="status" className="fixed bottom-5 left-1/2 z-[60] -translate-x-1/2 border-2 border-black bg-green-300 px-4 py-3 shadow-[4px_4px_0_#171717] mono text-xs font-bold" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}>{toast}</motion.div>}</AnimatePresence>
    </>
  );
}
