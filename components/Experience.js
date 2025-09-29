function Experience() {
  try {
    const experiences = [
      {
        type: "Education",
        title: "Web Development Bootcamp",
        organization: "Ducat Institute",
        period: "2023 - 2024",
        description: "Intensive full-stack web development program covering modern technologies including MERN stack, Java, and industry best practices.",
        skills: ["MERN Stack", "Java", "Tailwind CSS", "MongoDB"]
      },
      {
        type: "Project",
        title: "Freelance Web Developer",
        organization: "Self-Employed",
        period: "2024 - Present",
        description: "Developing custom web applications for clients, focusing on responsive design and modern user experiences.",
        skills: ["React", "Next.js", "Tailwind CSS", "API Integration"]
      },
      {
        type: "Achievement",
        title: "Open Source Contributor",
        organization: "GitHub Community",
        period: "2023 - Present",
        description: "Active contributor to various open-source projects, helping improve documentation and fixing bugs.",
        skills: ["Git", "Collaboration", "Code Review", "Documentation"]
      }
    ];

    return (
      <section
        id="experience"
        className="section-padding bg-[var(--bg-primary)]"
        data-name="experience"
        data-file="components/Experience.js"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Experience & Education
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              My journey in web development and key milestones along the way
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-1 bg-[var(--border-color)]"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  <div className="md:w-1/2">
                    <div className="glass-card">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-cyan-100 text-cyan-600 text-xs rounded-full font-semibold">
                          {exp.type}
                        </span>
                        <span className="text-sm text-[var(--text-secondary)]">{exp.period}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                        {exp.title}
                      </h3>
                      
                      <p className="text-[var(--primary-color)] font-semibold mb-3">
                        {exp.organization}
                      </p>
                      
                      <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Experience component error:', error);
    return null;
  }
}