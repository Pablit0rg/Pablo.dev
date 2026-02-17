"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 pt-20">
      <div className="container mx-auto max-w-5xl">
        
        {/* Bloco de Introdução com Animação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Badge 'Available' */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            OPEN TO WORK
          </div>

          {/* Título Principal */}
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white">
            PABLO<span className="text-zinc-600">.DEV</span>
          </h1>

          {/* Subtítulo / Cargo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-light"
          >
            Senior Software Engineer building <span className="text-white font-medium">high-performance</span> backend systems, database architectures, and AI solutions.
          </motion.div>

          {/* Stack List (Visual Minimalista) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-4 pt-4 font-mono text-sm text-zinc-500"
          >
            <span>01. BACKEND</span>
            <span className="text-zinc-800">/</span>
            <span>02. DATABASE</span>
            <span className="text-zinc-800">/</span>
            <span>03. AI OPS</span>
            <span className="text-zinc-800">/</span>
            <span>04. NETWORKS</span>
          </motion.div>

          {/* Botões de Ação */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="pt-8 flex flex-col md:flex-row gap-4"
          >
            <button className="group flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-sm hover:bg-zinc-200 transition-colors">
              <Terminal className="w-4 h-4" />
              View Projects
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 border border-white/10 text-white font-medium rounded-sm hover:bg-white/5 transition-colors">
              Contact Me
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}