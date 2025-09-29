function Skills() {
  try {
    const skillCategories = [
      {
        title: "Frontend Development",
        icon: "monitor",
        skills: [
          { name: "React.js"},
          { name: "Next.js 14" },
          { name: "JavaScript (ES6+)" },
          { name: "Tailwind CSS" },
          { name: "Bootstrap 5" },
          { name: "HTML/CSS" }
        ]
      },
      {
        title: "Backend Development",
        icon: "server",
        skills: [
          { name: "Java"},
          { name: "Node.js"},
          { name: "Express.js" },
          { name: "MYSQL"},
          { name: "MongoDB"},
          { name: "REST API Development"}
        ]
      },
      {
        title: "Tools & Technologies",
        icon: "wrench",
        skills: [
          { name: "Git/GitHub" },
          { name: "C Programming" },
          { name: "JWT Authentication" },
          { name: "AI Tools" },
          { name: "Postman" },
          { name: "VS Code" }
        ]
      }
    ];

    return (
      <section
        id="skills"
        className="section-padding bg-[var(--bg-primary)]"
        data-name="skills"
        data-file="components/Skills.js"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <div className={`icon-${category.icon} text-xl text-blue-600`}></div>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-[var(--text-primary)]">
                          {skill.name}
                        </span>
                        <span className="text-sm text-[var(--text-secondary)]">
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-blue-500 to-cyan-500"
                          style={{
                            width: `${skill.level}%`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-100 text-blue-600">
              <div className="icon-trending-up text-lg"></div>
              <span className="font-semibold">Always Learning & Growing</span>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}