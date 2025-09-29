function Footer() {
  try {
    const currentYear = new Date().getFullYear();
    
    const quickLinks = [
      { name: 'Home', href: '#hero' },
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ];

    const socialLinks = [
      { name: 'GitHub', href: 'https://github.com/ujjwalbansal2002', icon: 'github' },
      { name: 'LinkedIn', href: 'https://linkedin.com/in/ujjwalbansal1810', icon: 'linkedin' },
      { name: 'Email', href: 'mailto:bansalujjwal2002@gmail.com', icon: 'mail' }
    ];

    return (
      <footer className="bg-slate-800 text-white py-12" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Ujjwal Bansal
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Full-stack web developer passionate about creating modern, scalable, 
                and user-friendly web applications using cutting-edge technologies.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href.slice(1))}
                      className="text-slate-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.name !== 'Email' ? '_blank' : '_self'}
                    rel={social.name !== 'Email' ? 'noopener noreferrer' : ''}
                    className="text-slate-300 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <div className={`icon-${social.icon} text-xl`}></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © 2025 Ujjwal Bansal. All rights reserved.
              </p>
              <p className="text-slate-400 text-sm mt-2 md:mt-0">
                Built with React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}