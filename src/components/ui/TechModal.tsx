"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Terminal, Cpu } from "lucide-react";
import Link from "next/link";

// Definindo a tipagem do que esperamos receber
interface TechItem {
  name: string;
  level: string;
  code: string;
}

interface TechModalProps {
  selectedTech: TechItem | null;
  onClose: () => void;
}

export function TechModal({ selectedTech, onClose }: TechModalProps) {
  // Helper para calcular a barra de XP baseada no nível
  const getXpPercentage = (level: string) => {
    switch (level) {
      case "Senior": return "w-[95%]";
      case "Pro": return "w-[85%]";
      case "Mid": return "w-[60%]";
      case "Basic": return "w-[40%]";
      case "Learning": return "w-[25%]";
      default: return "w-[50%]";
    }
  };

  return (
    <AnimatePresence>
      {selectedTech && (
        <>
          {/* 1. Backdrop (Fundo Escuro com Blur) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
          />

          {/* 2. A Janela do Sistema */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-2xl p-4"
          >
            <div className="bg-black border border-white/20 shadow-2xl overflow-hidden relative">
              
              {/* Header da Janela */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-zinc-900/50">
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-green-500" />
                  <h3 className="font-mono font-bold text-white uppercase tracking-wider">
                    INSPECTOR // <span className="text-green-500">{selectedTech.name}</span>
                  </h3>
                </div>
                <button 
                  onClick={onClose}
                  className="p-1 hover:bg-white/10 rounded-sm transition-colors text-zinc-500 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Corpo da Janela */}
              <div className="p-6 space-y-8">
                
                {/* Visualizador de Código */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-zinc-500">// SOURCE_CODE_PREVIEW.tsx</span>
                  <div className="bg-zinc-950 p-4 border border-white/5 font-mono text-sm text-zinc-300 overflow-x-auto rounded-sm">
                    <pre>
                      <code>
                        <span className="text-purple-400">const</span> <span className="text-blue-400">{selectedTech.name.replace(/\s/g, '')}</span> = <span className="text-yellow-300">async</span> () ={">"} {"{"}
                        {"\n"}  <span className="text-zinc-500">// {selectedTech.level} implementation logic</span>
                        {"\n"}  {selectedTech.code}
                        {"\n"}  <span className="text-purple-400">return</span> <span className="text-green-400">true</span>;
                        {"\n"}{"}"}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* Barra de Proficiência (XP Bar) */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono uppercase">
                    <span className="text-zinc-400">Proficiency Level</span>
                    <span className="text-green-500">{selectedTech.level}</span>
                  </div>
                  <div className="h-2 bg-zinc-900 border border-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: getXpPercentage(selectedTech.level).replace('w-[', '').replace(']', '') }}
                      transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                      className={`h-full bg-green-500 ${getXpPercentage(selectedTech.level)}`}
                    />
                  </div>
                </div>

              </div>

              {/* Footer da Janela (Ações) */}
              <div className="p-4 border-t border-white/10 bg-zinc-900/30 flex justify-end gap-3">
                <button 
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                >
                  CLOSE_WINDOW
                </button>
                <Link 
                  href={`https://www.google.com/search?q=${selectedTech.name}+documentation`} 
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-mono font-bold hover:bg-zinc-200 transition-colors"
                >
                  <Cpu className="w-3 h-3" />
                  READ_DOCS.EXE
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}