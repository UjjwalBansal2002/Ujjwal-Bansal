function Skills() {
  try {
    const skillCategories = [
      {
        title: "Frontend Development",
        icon: "monitor",
        skills: [
          { name: "React.js", level: 95 },
          { name: "Next.js 14", level: 90 },
          { name: "JavaScript", level: 92 },
          { name: "Tailwind CSS", level: 88 },
          { name: "HTML/CSS", level: 95 }
        ]
      },
      {
        title: "Backend Development",
        icon: "server",
        skills: [
          { name: "Java", level: 85 },
          { name: "Spring Framework", level: 80 },
          { name: "Node.js", level: 88 },
          { name: "API Development", level: 90 },
          { name: "MongoDB", level: 85 }
        ]
      },
      {
        title: "Tools & Technologies",
        icon: "wrench",
        skills: [
          { name: "Git/GitHub", level: 90 },
          { name: "C Programming", level: 75 },
          { name: "Express.js", level: 85 },
          { name: "REST APIs", level: 88 },
          { name: "Database Design", level: 82 }
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
                          {skill.level}%
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