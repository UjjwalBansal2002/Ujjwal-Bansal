function About() {
  try {
    return (
      <section
        id="about"
        className="section-padding bg-[var(--bg-secondary)]"
        data-name="about"
        data-file="components/About.js"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              About Me
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Get to know more about my journey, passion, and expertise in web development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--text-primary)] text-lg leading-relaxed mb-6">
                  Hello! I'm <span className="gradient-text font-semibold">Ujjwal Bansal</span>, 
                  a passionate full-stack web developer with expertise in modern technologies. 
                  I love creating digital experiences that are not only functional but also 
                  beautiful and user-friendly.
                </p>
                
                <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-6">
                  My journey in web development started with a curiosity about how websites work, 
                  and it has evolved into a deep passion for creating scalable, efficient, and 
                  innovative web applications. I specialize in the MERN stack, Java development, 
                  and modern frameworks like Next.js.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="glass-card">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <div className="icon-code text-lg text-blue-600"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--text-primary)]">Frontend</h4>
                        <p className="text-sm text-[var(--text-secondary)]">React, Next.js</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-card">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                        <div className="icon-server text-lg text-green-600"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--text-primary)]">Backend</h4>
                        <p className="text-sm text-[var(--text-secondary)]">Java, Node.js</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the 
                  developer community. I believe in continuous learning and staying 
                  updated with the latest trends in technology.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="trickle\assets\Ujjwal-profile.png"
                    alt="Ujjwal Bansal - Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--primary-color)] rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="icon-heart text-2xl text-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}