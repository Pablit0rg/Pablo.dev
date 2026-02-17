"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Github, Instagram, Mail, Terminal, FileCode } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// Lista de Comandos disponíveis
const commands = [
  { id: "projects", label: "Navigate to Projects", icon: FileCode, action: "#projects" },
  { id: "stack", label: "View Tech Stack", icon: Terminal, action: "#tech-stack" },
  { id: "github", label: "Open GitHub Profile", icon: Github, action: "https://github.com/Pablit0rg", external: true },
  { id: "email", label: "Send Email", icon: Mail, action: "mailto:contact@pablo.dev", external: true },
  { id: "instagram", label: "Follow on Instagram", icon: Instagram, action: "https://instagram.com", external: true },
];

export function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Fecha ao apertar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Filtra os comandos baseado no que o usuário digita
  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (action: string, external?: boolean) => {
    if (external) {
      window.open(action, "_blank");
    } else {
      router.push(action); // Navega
    }
    onClose(); // Fecha o menu
    setQuery(""); // Limpa a busca
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Escuro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
          />

          {/* Janela de Comando */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-1/2 top-[20%] -translate-x-1/2 z-[101] w-full max-w-xl p-4"
          >
            <div className="bg-zinc-900 border border-white/20 shadow-2xl rounded-sm overflow-hidden flex flex-col">
              
              {/* Input de Busca */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10 bg-black">
                <Search className="w-5 h-5 text-zinc-500" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent text-white placeholder-zinc-600 focus:outline-none font-mono text-sm"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <div className="px-2 py-1 bg-white/10 rounded text-[10px] font-mono text-zinc-400">
                  ESC
                </div>
              </div>

              {/* Lista de Resultados */}
              <div className="max-h-[300px] overflow-y-auto py-2">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((cmd) => (
                    <button
                      key={cmd.id}
                      onClick={() => handleSelect(cmd.action, cmd.external)}
                      className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors group text-left"
                    >
                      <div className="flex items-center gap-3">
                        <cmd.icon className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                        <span className="text-sm text-zinc-400 group-hover:text-white font-mono transition-colors">
                          {cmd.label}
                        </span>
                      </div>
                      <ArrowRight className="w-3 h-3 text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-8 text-center text-zinc-600 font-mono text-xs">
                    No commands found.
                  </div>
                )}
              </div>
              
              {/* Rodapé do Menu */}
              <div className="px-4 py-2 bg-black border-t border-white/10 text-[10px] text-zinc-600 font-mono flex justify-between">
                 <span>PABLO.DEV CLI v1.0</span>
                 <span>{filteredCommands.length} commands available</span>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}