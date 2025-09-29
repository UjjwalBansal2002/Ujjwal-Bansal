function Contact() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      setTimeout(() => {
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
      }, 1000);
    };

    return (
      <section
        id="contact"
        className="section-padding bg-[var(--bg-secondary)]"
        data-name="contact"
        data-file="components/Contact.js"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                Let's Work Together
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <div className="icon-mail text-xl text-blue-600"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">Email</h4>
                    <p className="text-[var(--text-secondary)]">ujjwalbansal@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center">
                    <div className="icon-linkedin text-xl text-cyan-600"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">LinkedIn</h4>
                    <p className="text-[var(--text-secondary)]">linkedin.com/in/ujjwalbansal</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                    <div className="icon-github text-xl text-gray-700"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">GitHub</h4>
                    <p className="text-[var(--text-secondary)]">github.com/ujjwalbansal</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/resume.pdf"
                  download="Ujjwal_Bansal_Resume.pdf"
                  className="inline-flex items-center gap-2 btn-primary"
                >
                  <div className="icon-download text-lg"></div>
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            <div className="glass-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <div className="icon-send text-lg"></div>
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}