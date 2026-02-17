"use client";

import { motion } from "framer-motion";
import { techCategories } from "@/lib/content";
import { Code2 } from "lucide-react";

export function TechStack() {
  return (
    <section id="tech-stack" className="min-h-screen py-20 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        
        {/* Cabeçalho da Seção */}
        <div className="mb-16 flex items-end gap-4 border-b border-white/10 pb-4">
          <h2 className="text-4xl font-mono font-bold text-white tracking-tighter">
            SYSTEM.<span className="text-zinc-600">MODULES</span>
          </h2>
          <span className="mb-1 text-xs font-mono text-zinc-500">
            // CORE COMPETENCIES LOADED
          </span>
        </div>

        {/* Grid de Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.id}
              id={category.id} // <--- O ENDEREÇO PARA O LINK DA NAVBAR
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative border border-white/10 bg-zinc-900/20 p-6 rounded-sm hover:border-white/30 transition-colors scroll-mt-24"
              // scroll-mt-24 cria uma margem invisível no topo para a Navbar não cobrir o título
            >
              {/* Efeito de "Glow" discreto no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Título da Categoria */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/5 rounded-sm">
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <p className="text-xs text-zinc-500 font-mono">{category.description}</p>
                </div>
              </div>

              {/* Lista de Tecnologias (Cards Internos) */}
              <div className="space-y-3 relative z-10">
                {category.techs.map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between p-3 bg-black/40 border border-white/5 rounded-sm hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-3">
                      <Code2 className="w-4 h-4 text-zinc-600" />
                      <span className="text-sm font-medium text-zinc-300">{tech.name}</span>
                    </div>
                    
                    {/* Snippet de Código "Fake" visual */}
                    <div className="hidden sm:block text-[10px] font-mono text-zinc-600 truncate max-w-[150px]">
                      {tech.code}
                    </div>

                    <span className="text-[10px] uppercase tracking-wider text-zinc-500 border border-white/10 px-2 py-0.5 rounded-full">
                      {tech.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}