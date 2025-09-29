function Navbar({ theme, toggleTheme }) {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState('hero');

    React.useEffect(() => {
      const handleScroll = () => {
        const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
        const scrollPos = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
      { name: 'Home', href: '#hero' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Experience', href: '#experience' },
      { name: 'Contact', href: '#contact' }
    ];

    return (
      <nav className="fixed top-0 w-full z-50 glass-card" data-name="navbar" data-file="components/Navbar.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="#hero" className="text-2xl font-bold gradient-text">
                Ujjwal Bansal
              </a>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.href.slice(1)
                        ? 'text-[var(--primary-color)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--primary-color)]'
                    }`}
                    onClick={(e) => scrollToSection(e, item.href.slice(1))}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-[var(--text-primary)] hover:text-[var(--primary-color)]"
                >
                  <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-xl`}></div>
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)]"
                    onClick={(e) => {
                      scrollToSection(e, item.href.slice(1));
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navbar component error:', error);
    return null;
  }
}