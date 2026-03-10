'use client';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Phone, ExternalLink, Download, Trophy, Target, Award, Briefcase, GraduationCap, Bot, Cpu } from 'lucide-react';
import resumeData from '../data.json';

export default function Portfolio() {
  return (
    <main className="relative flex flex-col items-center px-6 md:px-16 w-full max-w-6xl mx-auto overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="min-h-screen w-full flex flex-col justify-center items-start pt-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Available for Opportunities</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">{resumeData.basics.name}</h1>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-400">{resumeData.basics.title}</h2>
          <p className="max-w-3xl text-slate-300 text-lg md:text-xl leading-relaxed">{resumeData.basics.summary}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a href="#experience" className="flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-cyan-50 transition-colors">
              View Experience <ChevronDown size={18} />
            </a>
            <button onClick={() => window.print()} className="flex items-center justify-center gap-2 bg-slate-800/50 backdrop-blur-md border border-slate-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors">
              Download Resume <Download size={18} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* IMPACT HIGHLIGHTS */}
      <section className="w-full py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {resumeData.achievements.map((ach, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-4">
            <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-400"><Trophy size={28} /></div>
            <div>
              <h3 className="text-3xl font-bold text-white">{ach.metric}</h3>
              <p className="text-slate-400 text-sm">{ach.context}</p>
            </div>
          </div>
        ))}
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="w-full py-24 scroll-mt-20">
        <div className="flex items-center gap-4 mb-16">
          <Briefcase className="text-cyan-400" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
        </div>
        <div className="space-y-8 border-l border-slate-700 pl-6 ml-4">
          {resumeData.experience.map((exp, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -left-[45px] top-1 w-6 h-6 rounded-full bg-slate-900 border-4 border-cyan-500 flex items-center justify-center" />
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-cyan-400 font-medium block mb-2">{exp.company} <span className="text-slate-500 text-sm ml-2">({exp.dates})</span></span>
                <ul className="space-y-2 text-slate-300 text-sm">
                  {exp.bullets.map((b, i) => <li key={i} className="flex gap-2"><span className="text-cyan-500">▹</span> {b}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI PROJECTS SECTION */}
      <section className="w-full py-24 scroll-mt-20 border-t border-white/5">
        <div className="flex items-center gap-4 mb-16">
          <Bot className="text-cyan-400" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-white">AI Projects & Development</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((proj, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 hover:border-cyan-500/50 transition-all shadow-xl group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                  <Cpu size={24} />
                </div>
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{proj.title}</h3>
              <p className="text-sm text-cyan-400 font-medium mb-4">{proj.role}</p>
              <p className="text-slate-300 text-sm mb-6 flex-grow">{proj.description}</p>
              
              <div className="mb-6 space-y-2">
                {proj.bullets.map((bullet, i) => (
                  <div key={i} className="flex gap-2 text-xs text-slate-400 leading-relaxed">
                    <span className="text-cyan-500/70">▹</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
                {proj.techStack.map((tech, i) => (
                  <span key={i} className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded bg-slate-800 text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} {resumeData.basics.name}.</p>
        <div className="flex items-center gap-6">
          <a href={`mailto:${resumeData.basics.email}`} className="text-slate-400 hover:text-cyan-400 flex items-center gap-2 text-sm"><Mail size={16} /> Email</a>
          <a href={`tel:${resumeData.basics.phone}`} className="text-slate-400 hover:text-cyan-400 flex items-center gap-2 text-sm"><Phone size={16} /> Call</a>
          <a href={`https://${resumeData.basics.links[0]}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 flex items-center gap-2 text-sm"><ExternalLink size={16} /> LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
