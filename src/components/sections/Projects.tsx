"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/content";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        
        {/* Cabeçalho da Seção */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-white tracking-tighter">
              SELECTED<span className="text-zinc-600">.WORK</span>
            </h2>
            <p className="mt-4 text-zinc-500 max-w-lg font-light">
              Architecting scalable solutions. From backend logic to pixel-perfect interfaces.
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-600">
            // INDEX: 001 - 004
          </span>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[300px] border border-white/10 bg-zinc-900/10 p-8 flex flex-col justify-between overflow-hidden hover:border-white/30 transition-all duration-500"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Topo do Card */}
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <span className="text-xs font-mono text-green-500 mb-2 block tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                {/* Links que aparecem no Hover */}
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-300">
                  <Link href={project.github} className="p-2 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-colors">
                    <Github className="w-4 h-4" />
                  </Link>
                  <Link href={project.link} className="p-2 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Meio/Baixo do Card */}
              <div className="relative z-10">
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[10px] uppercase font-mono text-zinc-500 border border-white/5 px-2 py-1 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}