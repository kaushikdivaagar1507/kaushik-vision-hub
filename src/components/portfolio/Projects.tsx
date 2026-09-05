import {
  Github,
  ExternalLink,
  Sparkles,
  Users,
  Database,
  Brain,
  Lock,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const stack = [
  "React",
  "Node.js",
  "Python",
  "MongoDB",
  "AstraDB",
  "NLP",
  "LLM",
  "JWT",
];

const features = [
  {
    icon: Brain,
    title: "AI-Powered Recommendations",
    description:
      "Skill-based alumni and student recommendations using NLP embeddings.",
  },
  {
    icon: Sparkles,
    title: "AI Digital Assistant",
    description:
      "Intelligent assistant powered by vector search and LLM technology.",
  },
  {
    icon: Users,
    title: "Alumni Networking",
    description:
      "Connect students and alumni based on skills, interests, and opportunities.",
  },
  {
    icon: Database,
    title: "Smart Data Management",
    description:
      "MongoDB and AstraDB integration for structured and vector data.",
  },
  {
    icon: Lock,
    title: "Secure Authentication",
    description:
      "JWT authentication with role-based access control.",
  },
];

const otherProjects = [
  {
    title: "MERN ToDo App",
    description:
      "A full-stack task management application built using the MERN stack. Users can create, update, delete, prioritize, and manage tasks with due dates.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Vite"],
    github: "https://github.com/kaushikdivaagar1507/todo-app",
    demo: "https://todo-app-six-gamma-86.vercel.app/",
  },
  {
    title: "JARVIS AI Chat Assistant",
    description:
      "An AI-powered conversational assistant built with React and Node.js, integrated with the Groq API to generate intelligent real-time responses. The application uses a separate Express backend and is deployed using Vercel and Render.",
    tech: ["React", "Vite", "Node.js", "Express", "Groq API", "Axios"],
    github:
      "https://github.com/kaushikdivaagar1507/Jarvis-ChatAssistant",
    demo: "https://jarvis-chat-assistant.vercel.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Projects"
          subtitle="Things I've built and worked on"
        />

        {/* Featured Project */}
        <div className="mb-12">
          <div className="card-surface rounded-2xl p-8 border border-border hover:border-primary transition-all">
            <div className="flex flex-col lg:flex-row gap-8">

              {/* Project Info */}
              <div className="flex-1">

                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />

                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Featured Project
                  </span>
                </div>

                <h3 className="text-3xl font-bold mb-4">
                  Smart Alumni Connect
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  An AI-powered platform designed to connect students and
                  alumni through intelligent recommendations, networking,
                  events, and opportunities. The system uses NLP embeddings,
                  vector search, and LLM technology to provide personalized
                  interactions and recommendations.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-muted border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Smart Alumni Connect Links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/kaushikdivaagar1507"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border hover:border-primary transition-all"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Features */}
              <div className="flex-1 grid sm:grid-cols-2 gap-4">
                {features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="p-4 rounded-xl bg-muted/40 border border-border"
                    >
                      <Icon className="w-6 h-6 text-primary mb-3" />

                      <h4 className="font-semibold mb-2">
                        {feature.title}
                      </h4>

                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-6">
            Other Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-8">

            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="card-surface rounded-2xl p-6 border border-border hover:border-primary transition-all"
              >
                {/* Project Title */}
                <h4 className="text-2xl font-bold mb-3">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-full bg-muted border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3">

                  {/* GitHub Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary transition-all"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>

                  {/* Live Demo Button */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;