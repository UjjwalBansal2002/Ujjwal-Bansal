function Hero() {
  try {
    return (
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)`
        }}
        data-name="hero"
        data-file="components/Hero.js"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-[var(--primary-color)] blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-[var(--accent-color)] blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Ujjwal Bansal</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 font-light">
              Web Developer | Java | MERN | Next.js
            </p>
            
            <p className="text-lg text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate full-stack developer crafting modern web applications with cutting-edge technologies. 
              Specializing in scalable solutions and user-centric design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={(e) => scrollToSection(e, 'projects')}
                className="btn-primary"
              >
                <span className="flex items-center gap-2">
                  <span>View My Work</span>
                  <div className="icon-arrow-right text-lg"></div>
                </span>
              </button>
              
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="btn-secondary hover:bg-[var(--primary-color)] hover:text-white"
              >
                Get In Touch
              </a>
            </div>

            <div className="mt-16 flex justify-center space-x-6">
              <a
                href="mailto:ujjwalbansal@example.com"
                className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
                aria-label="Email"
              >
                <div className="icon-mail text-2xl"></div>
              </a>
              <a
                href="https://linkedin.com/in/ujjwalbansal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
                aria-label="LinkedIn"
              >
                <div className="icon-linkedin text-2xl"></div>
              </a>
              <a
                href="https://github.com/ujjwalbansal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
                aria-label="GitHub"
              >
                <div className="icon-github text-2xl"></div>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="icon-chevron-down text-2xl text-[var(--text-secondary)]"></div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}