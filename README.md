# PABLO.DEV - Principal Engineering Portfolio
> High-Performance, Logic-Driven, Minimalist Portfolio.

## 1. Visão do Projeto
Portfólio de engenharia de software focado em comunicar senioridade, limpeza visual e domínio técnico.
- **Referência Visual:** Minimalismo Dark, Tipografia Monospaced.
- **Objetivo:** Atrair clientes internacionais e recrutadores de alto nível.
- **Filosofia:** "Logic over Decoration". O front-end é a vitrine, a lógica interna é o produto.

## 2. Tech Stack (Google IDX Environment)
- **Core:** Next.js 15 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v4
- **Motion:** Framer Motion (Orchestration & Gestures)
- **Icons:** Lucide React (SVG as Code)
- **Deploy:** Firebase Hosting (via IDX)

## 3. Diretrizes de Desenvolvimento (Rigorous)
### Protocolo de Código
1.  **ZERO EMOJIS:** Proibido uso de emojis em commits, comentários de código ou logs. Mantenha a sobriedade absoluta.
2.  **Clean Code:** Componentes pequenos, funcionais e tipados.
3.  **Atomicidade:** Botões, Cards e Inputs devem ser componentes isolados.
4.  **Mocking Consciente:** Se a funcionalidade complexa ainda não existe, use dados estáticos (mocks), mas prepare a interface (tipagem) para receber dados reais.

### Protocolo de Design "Luxurious Black"
- **Background:** `#000000` (Pure Black)
- **Surface:** `#0A0A0A` (Graphite)
- **Typography:** Tech/Monospaced para títulos; Sans-serif limpa para leitura.
- **Interação:** SPA Feel. Cliques na Navbar não recarregam a página; eles renderizam componentes dinamicamente.

## 4. Estrutura de Navegação
- **Hero:** Estática, apresentação "Pablo.dev".
- **Navbar:** Links funcionais (Backend, Database, AI Ops, Networks).
- **Tech-Deck (Área Dinâmica):**
    - Ao selecionar uma área, o conteúdo é injetado via React State/Context.
    - **Future Feature:** Implementação de lógicas reais de mercado (algoritmos de busca, ordenação, requisições otimizadas) dentro destes cards.

## 5. Git Standards
- Commits imperativos e descritivos.
- Ex: `feat: implement navbar layout`, `fix: adjust grid responsive logic`.
- Nunca use: `up`, `foi`, `ajuste 🚀`.

---
**Status:** Architecture Definition.