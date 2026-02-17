"use client";

import { useEffect } from "react";

export function ConsoleLogger() {
  useEffect(() => {
    const styleTitle = "color: #22c55e; font-size: 20px; font-weight: bold; font-family: monospace;";
    const styleBody = "color: #a1a1aa; font-size: 12px; font-family: monospace;";
    const styleLink = "color: #fff; font-size: 12px; font-family: monospace; font-weight: bold; text-decoration: underline;";

    // ASCII Art do seu nome ou logo
    console.log(
      `%c
   ____  ___  ____  __    ___    ____  _______  __
  / __ \\/ _ |/ __ )/ /   / _ \\  / __ \\/ ____/ |/ /
 / /_/ / __ / __  / /   / / / / / / / / __/  |   / 
/ ____/ /_/ / /_/ / /___/ /_/ / / /_/ / /___ /   |  
/_/   \\____/_____/_____/\\____/ /_____/_____//_/|_|  
                                                    
    `,
      styleTitle
    );

    console.log(
      "%cHey there, fellow developer! 👋\n\nI see you like to inspect things. That's a good habit.\nIf you're looking for a Senior Engineer who cares about details,\nwe should talk.",
      styleBody
    );

    console.log("%c📧 contact@pablo.dev", styleLink);
    console.log("%c🐙 github.com/Pablit0rg", styleLink);
  }, []);

  return null; // Não renderiza nada visualmente
}