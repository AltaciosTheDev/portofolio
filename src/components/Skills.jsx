import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML5", icon: "../../icons/HTML5.svg", category: "frontend", },
  { name: "CSS3", icon: "../../icons/CSS3.svg", category: "frontend" },
  { name: "Javascript", icon: "../../icons/Javascript.svg", category: "frontend" },
  { name: "Typescript", icon: "../../icons/Typescript.svg", category: "frontend" },
  { name: "React", icon: "../../icons/React.svg", category: "frontend" },
  { name: "MaterialUI", icon: "../../icons/Material.svg", category: "frontend" },
  { name: "TailwindCSS", icon: "../../icons/Tailwind.svg", category: "frontend" },

  // Backend
  { name: "Python", icon: "../../icons/Python.svg", category: "backend" },
  { name: "Flask", icon: "../../icons/Flask.svg", category: "backend" },
  { name: "Node.js", icon: "../../icons/Node.svg", category: "backend" },
  { name: "Express", icon: "../../icons/Express.svg", category: "backend" },
  { name: "MongoDB", icon: "../../icons/Mongo.svg", category: "backend" },
  { name: "PostgreSQL", icon: "../../icons/Postgres.svg", category: "backend" },

  // Tools
  { name: "Git", icon: "../../icons/Git.svg", category: "other" },
  { name: "GitHub", icon: "../../icons/Github.svg", category: "other" },
  { name: "Playwright", icon: "../../icons/Playwright.svg", category: "other" },

  // Learning
  { name: "Next.js", icon: "../../icons/Next.svg", category: "learning" },

];

const categories = ["all", "frontend", "backend", "other", "learning"];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize hover:cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-center mb-2">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <img src={skill.icon} className="h-20 mx-auto"/>
              
              {/* <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div> */}

              {/* <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};