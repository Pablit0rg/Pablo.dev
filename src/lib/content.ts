import { Terminal, Database, Cpu, Globe } from "lucide-react";

export const techCategories = [
  {
    id: "backend",
    title: "Backend Engineering",
    icon: Terminal,
    description: "Robust server-side logic and scalable architectures.",
    techs: [
      { name: "Node.js", level: "Senior", code: "const server = http.createServer((req, res) => { ... });" },
      { name: "Java", level: "Learning", code: "public static void main(String[] args) { ... }" },
      { name: "Python", level: "Mid", code: "def ai_model_pipeline(data): return process(data)" },
    ]
  },
  {
    id: "database",
    title: "Database Architecture",
    icon: Database,
    description: "Data modeling, optimization and real-time syncing.",
    techs: [
      { name: "Firebase", level: "Pro", code: "await firestore.collection('users').doc(uid).get();" },
      { name: "PostgreSQL", level: "Mid", code: "SELECT * FROM users WHERE active = true;" },
      { name: "MongoDB", level: "Mid", code: "db.collection.find({ status: 'active' })" },
    ]
  },
  {
    id: "ai",
    title: "AI Operations",
    icon: Cpu,
    description: "Integration of LLMs and generative models.",
    techs: [
      { name: "OpenAI API", level: "Pro", code: "const completion = await openai.chat.completions.create({...});" },
      { name: "TensorFlow", level: "Basic", code: "model.fit(x_train, y_train, epochs=5)" },
    ]
  },
  {
    id: "networks",
    title: "Network & Security",
    icon: Globe,
    description: "Secure protocols and cloud infrastructure.",
    techs: [
      { name: "Next.js", level: "Senior", code: "export default function Page() { return ... }" },
      { name: "REST API", level: "Senior", code: "GET /api/v1/users HTTP/1.1" },
    ]
  }
];

export const projects = [
  {
    id: "smartleads",
    title: "SmartLeads AI",
    category: "AI Automation",
    description: "Automated lead generation engine using Python and LLMs to scrape, qualify, and outreach potential clients.",
    techs: ["Python", "OpenAI API", "FastAPI", "Pandas"],
    link: "#",
    github: "#"
  },
  {
    id: "nexa",
    title: "Nexa AI Agent",
    category: "Interactive Bot",
    description: "Afro-futurist AI character with distinct personality traits, capable of contextual conversation and memory.",
    techs: ["TypeScript", "Next.js", "LangChain", "Vercel SDK"],
    link: "#",
    github: "#"
  },
  {
    id: "prevdesk",
    title: "PrevDesk System",
    category: "Web App",
    description: "Legal management system for pension law processes, focusing on data organization and quick access.",
    techs: ["React", "Firebase Auth", "Firestore", "Tailwind"],
    link: "#",
    github: "#"
  },
  {
    id: "darafa",
    title: "DaRafa Brand",
    category: "Landing Page",
    description: "High-conversion landing page with modern animations and SEO optimization for a fashion brand.",
    techs: ["Next.js", "Framer Motion", "SEO", "UI/UX"],
    link: "#",
    github: "#"
  }
];