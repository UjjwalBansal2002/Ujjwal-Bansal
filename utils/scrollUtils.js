function scrollToSection(e, sectionId) {
  try {
    e.preventDefault();
    
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Account for fixed navbar height
      const targetPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Update URL without triggering page reload
      if (window.history && window.history.pushState) {
        window.history.pushState(null, null, `#${sectionId}`);
      }
    }
  } catch (error) {
    console.error('Scroll utility error:', error);
  }
}