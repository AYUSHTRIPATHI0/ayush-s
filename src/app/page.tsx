"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Video, Image as ImageIcon, Sparkles, ChevronDown, Play, ExternalLink, Briefcase } from "lucide-react";
import Image from "next/image";

const InstagramIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const skills = [
  { name: "CapCut", type: "Video Editing", proficiency: 95, icon: Video },
  { name: "Canva", type: "Graphic Design", proficiency: 90, icon: ImageIcon },
  { name: "Photopea", type: "Image Editing", proficiency: 88, icon: ImageIcon },
  { name: "Creative Thinking", type: "Soft Skill", proficiency: 92, icon: Sparkles },
];

const experience = [
  {
    company: "Build Brand Factor Pvt Ltd",
    role: "Video Editor",
    status: "Active",
    responsibilities: [
      "Created engaging video content for brand campaigns",
      "Collaborated with creative teams to deliver high-quality projects",
      "Managed multiple editing projects with tight deadlines",
      "Implemented creative transitions and effects to enhance storytelling"
    ]
  },
  {
    company: "Reactive Codes",
    role: "Video Editor & Designer",
    status: "Active",
    responsibilities: [
      "Produced promotional videos and social media content",
      "Designed graphics and thumbnails for video projects",
      "Enhanced brand visibility through creative visual content",
      "Optimized workflow efficiency using modern editing tools"
    ]
  }
];

const reels = [
  "Db3F6HiQyiL",
  "Db7dTAYpbK2",
  "DbauX-3hEnT",
  "Db25cv-hyc3"
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 selection:bg-rose-500/30">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-900/20 via-neutral-950 to-neutral-950"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-12 lg:gap-16">
            <motion.div 
              className="lg:w-1/2 flex flex-col items-center lg:items-start gap-6"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 w-fit text-sm font-medium">
                <Sparkles size={16} />
                <span>Available for Freelance Projects</span>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
                  Visual<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">
                    Storyteller.
                  </span>
                </h1>
                <p className="text-xl text-neutral-400 leading-relaxed max-w-xl">
                  Hi, I'm <span className="text-white font-medium">Ayush Kushwaha</span>. Crafting stunning visual stories through video and image editing with over 1.5 years of professional experience.
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#portfolio" className="px-8 py-4 rounded-full bg-white text-neutral-950 font-bold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                  <Play size={20} className="fill-neutral-950" />
                  View My Work
                </motion.a>
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact" className="px-8 py-4 rounded-full bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors border border-neutral-800 flex items-center justify-center w-full sm:w-auto">
                  Contact Me
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="relative w-72 h-72 md:w-96 md:h-96 mx-auto"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-500 to-orange-400 blur-3xl opacity-20 animate-pulse"></div>
                <Image 
                  src="/profile_pic.jpeg" 
                  alt="Ayush Kushwaha" 
                  fill
                  priority
                  sizes="(max-width: 768px) 288px, 384px"
                  className="rounded-full object-cover border-4 border-neutral-900 shadow-2xl relative z-10"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm font-medium tracking-widest uppercase">Scroll Explore</span>
          <ChevronDown size={20} />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-neutral-900/50 border-y border-neutral-800/50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Mastered Tools</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">Pushing creative boundaries and delivering exceptional results using industry-standard software.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {skills.map((skill, i) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-rose-500/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-rose-400">
                    <skill.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                    <p className="text-neutral-500 text-sm">{skill.type}</p>
                  </div>
                  <div className="ml-auto text-2xl font-black text-neutral-800">
                    {skill.proficiency}%
                  </div>
                </div>
                <div className="h-2 w-full bg-neutral-950 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-rose-500 to-orange-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Professional Journey</h2>
            <p className="text-neutral-400">1.5+ Years of delivering exceptional visual content across diverse projects.</p>
          </motion.div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">
            {experience.map((exp, i) => (
              <motion.div 
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-neutral-950 bg-rose-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Briefcase size={16} />
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                    <span className="text-xs font-medium px-2 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">{exp.status}</span>
                  </div>
                  <h4 className="text-rose-400 font-medium mb-4">{exp.company}</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((task, j) => (
                      <li key={j} className="text-neutral-400 text-sm flex items-start gap-2">
                        <span className="text-rose-500 mt-1">•</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Reels Section */}
      <section id="portfolio" className="py-24 bg-neutral-950 overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent"></div>
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Work</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">A glimpse into my creative edits, transitions, and cinematic compositions.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {reels.map((reelId, index) => (
              <motion.div 
                key={reelId}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 shadow-xl aspect-[9/16] relative group max-w-[320px] sm:max-w-none mx-auto w-full"
              >
                {/* Embed Instagram Reel */}
                <iframe 
                  src={`https://www.instagram.com/reel/${reelId}/embed`}
                  className="w-full h-full border-0 absolute inset-0 z-0"
                  scrolling="no" 
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
                
                {/* Overlay to prevent interactions initially or just for styling if needed */}
                <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none transition-colors group-hover:bg-transparent"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 bg-rose-500/5 mix-blend-screen"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto bg-neutral-900 p-6 md:p-16 rounded-[2rem] md:rounded-[3rem] border border-neutral-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12"
          >
            <div className="md:w-1/2 text-center md:text-left w-full">
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold text-white mb-6">Let's create something amazing together.</motion.h2>
              <motion.p variants={fadeIn} className="text-neutral-400 mb-8">I'm currently available for freelance projects and full-time opportunities.</motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col gap-4 text-left">
                <motion.a whileHover={{ scale: 1.02, x: 5 }} href="mailto:ayushkushwaha8115@gmail.com" className="flex items-center gap-4 text-neutral-300 hover:text-rose-400 transition-colors p-4 rounded-2xl bg-neutral-950 border border-neutral-800">
                  <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-neutral-500 mb-1">Email</p>
                    <p className="font-medium truncate">ayushkushwaha8115@gmail.com</p>
                  </div>
                </motion.a>
                <motion.a whileHover={{ scale: 1.02, x: 5 }} href="tel:+918115688353" className="flex items-center gap-4 text-neutral-300 hover:text-rose-400 transition-colors p-4 rounded-2xl bg-neutral-950 border border-neutral-800">
                  <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">Phone</p>
                    <p className="font-medium">+91 8115688353</p>
                  </div>
                </motion.a>
                <motion.a whileHover={{ scale: 1.02, x: 5 }} href="https://www.instagram.com/ayushgym_editz" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-neutral-300 hover:text-rose-400 transition-colors p-4 rounded-2xl bg-neutral-950 border border-neutral-800">
                  <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center shrink-0">
                    <InstagramIcon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">Instagram</p>
                    <p className="font-medium">@ayushgym_editz</p>
                  </div>
                  <ExternalLink size={16} className="ml-auto text-neutral-600" />
                </motion.a>
              </motion.div>
            </div>
            
            <motion.div variants={fadeIn} className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-tr from-rose-500 to-orange-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute inset-0 bg-neutral-950 border border-neutral-800 rounded-full flex items-center justify-center overflow-hidden">
                   <Sparkles className="w-24 h-24 text-rose-500/50" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-neutral-900">
        <p className="text-neutral-600 text-sm">© {new Date().getFullYear()} Ayush Kushwaha. All rights reserved.</p>
      </footer>
    </main>
  );
}
