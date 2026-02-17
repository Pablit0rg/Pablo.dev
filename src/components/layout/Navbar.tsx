"use client";

import { Monitor, Database, Brain, Network, Terminal, Search } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Backend", icon: Monitor, href: "#backend" },
  { name: "Database", icon: Database, href: "#database" },
  { name: "AI Ops", icon: Brain, href: "#ai" },
  { name: "Networks", icon: Network, href: "#networks" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* 1. Logo Area */}
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-white" />
          <span className="font-mono text-lg font-bold tracking-tighter">
            PABLO<span className="text-zinc-500">.DEV</span>
          </span>
        </div>

        {/* 2. Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              <item.icon className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* 3. Right Side: Search & Status */}
        <div className="hidden md:flex items-center gap-6">
          
          {/* SEARCH MODULE (Novo) */}
          <div className="flex items-center border-r border-white/10 pr-6">
            <button 
              aria-label="Search system"
              className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
            >
              <Search className="w-4 h-4" />
              <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0 duration-300">
                SEARCH
              </span>
            </button>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-600">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            AVAILABLE FOR WORK
          </div>
        </div>

      </div>
    </header>
  );
}