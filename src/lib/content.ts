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