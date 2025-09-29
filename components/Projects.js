function Projects() {
  try {
    const projects = [
      {
        id: 1,
        title: "News Application",
        description: "A modern news app built with React that fetches real-time news from various sources with category filtering and search functionality.",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tech: ["React", "JavaScript", "REST API", "CSS3"],
        github: "https://github.com/ujjwalbansal/news-app",
        demo: "https://news-app-demo.vercel.app",
        featured: true
      },
      {
        id: 2,
        title: "YouTube Video Downloader",
        description: "Flask-based web application for downloading YouTube videos in various formats with a clean, intuitive interface.",
        image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tech: ["Flask", "Python", "JavaScript", "Bootstrap"],
        github: "https://github.com/ujjwalbansal/yt-downloader",
        demo: "https://yt-downloader-demo.herokuapp.com"
      },
      {
        id: 3,
        title: "REST API Collection",
        description: "Comprehensive collection of RESTful APIs built with Node.js and Express, featuring authentication, CRUD operations, and documentation.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tech: ["Node.js", "Express", "MongoDB", "JWT"],
        github: "https://github.com/ujjwalbansal/api-collection",
        demo: "https://api-docs.postman.com/ujjwal"
      },
      {
        id: 4,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with user authentication, shopping cart, payment integration, and admin dashboard.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tech: ["MERN Stack", "Stripe", "JWT", "Tailwind"],
        github: "https://github.com/ujjwalbansal/ecommerce",
        demo: "https://ecommerce-demo.vercel.app",
        featured: true
      },
      {
        id: 5,
        title: "Task Management System",
        description: "Collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
        github: "https://github.com/ujjwalbansal/task-manager",
        demo: "https://taskmanager-demo.vercel.app"
      },
      {
        id: 6,
        title: "Portfolio Website",
        description: "Responsive portfolio website showcasing modern design principles with dark/light mode toggle and smooth animations.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tech: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
        github: "https://github.com/ujjwalbansal/portfolio",
        demo: "https://ujjwalbansal.dev"
      }
    ];

    return (
      <section
        id="projects"
        className="section-padding bg-[var(--bg-secondary)]"
        data-name="projects"
        data-file="components/Projects.js"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Explore my latest work showcasing modern web development skills and creative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`glass-card transform hover:-translate-y-2 transition-all duration-300 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-[var(--primary-color)] text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  {project.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
                  >
                    <div className="icon-github text-lg"></div>
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
                  >
                    <div className="icon-external-link text-lg"></div>
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}
