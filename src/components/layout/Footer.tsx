"use client";

import { Github, Instagram, Terminal, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black py-12 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Lado Esquerdo: Identidade */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-white" />
            <span className="font-mono text-lg font-bold tracking-tighter text-white">
              PABLO<span className="text-zinc-600">.DEV</span>
            </span>
          </div>
          <p className="text-xs text-zinc-500 font-mono">
            Principal Software Engineering Portfolio
          </p>
        </div>

        {/* Centro: Status do Sistema (Toque Cyberpunk) */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-zinc-900/50 rounded-full border border-white/5">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
            System Status: All Systems Operational
          </span>
        </div>

        {/* Lado Direito: Social Links */}
        <div className="flex items-center gap-6">
          <Link 
            href="https://github.com" 
            target="_blank"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link 
            href="https://instagram.com" 
            target="_blank"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link 
            href="mailto:contact@pablo.dev" 
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center md:text-left">
        <p className="text-[10px] text-zinc-600 font-mono">
          © {currentYear} PABLO ROSA GOMES. ALL RIGHTS RESERVED. <span className="hidden md:inline"> // BUILT WITH NEXT.JS 15 & TAILWIND CSS</span>
        </p>
      </div>
    </footer>
  );
}